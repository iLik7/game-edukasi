import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';

/* GEOLOGI dan HIDROLOGI: profil tanah, siklus batuan, dan diorama siklus air (dengan sungai).
   Tiap adegan memakai antarmuka bedah yang sama: scene, camera, layerMeshes, state, update(). */

const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
function tex(N, draw, rep, srgb = true) { const c = document.createElement('canvas'); c.width = c.height = N; draw(c.getContext('2d'), N); const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; if (rep) t.repeat.set(rep[0], rep[1]); return t; }
const dotTex = () => tex(64, (x) => { const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.55, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); }, null, false);

/* tekstur tanah/batuan dengan butiran acak */
function grainTex(base, specks, seed, rep = [1, 1], extra) {
  return tex(256, (x, N) => { const r = rng(seed); x.fillStyle = base; x.fillRect(0, 0, N, N);
    for (const [col, n, s0, s1] of specks) for (let i = 0; i < n; i++) { x.fillStyle = col; x.beginPath(); x.ellipse(r() * N, r() * N, s0 + r() * (s1 - s0), s0 + r() * (s1 - s0), r() * 3, 0, TAU); x.fill(); }
    if (extra) extra(x, N, r); }, rep);
}
/* batu: ikosahedron yang permukaannya dibuat tidak rata */
export function rockGeo(r, seed, detail = 3, flat = 1) {
  const g = new THREE.IcosahedronGeometry(r, detail), p = g.attributes.position, rr = rng(seed), k = [rr() * 9, rr() * 9, rr() * 9];
  for (let i = 0; i < p.count; i++) { const v = V(p.getX(i), p.getY(i), p.getZ(i)), n = v.clone().normalize(); const d = 1 + 0.18 * Math.sin(n.x * 3.1 + k[0]) * Math.cos(n.y * 2.7 + k[1]) + 0.08 * Math.sin(n.z * 7 + k[2]) + 0.04 * Math.sin(n.x * 15 + n.y * 13); v.multiplyScalar(d); v.y *= flat; p.setXYZ(i, v.x, v.y, v.z); }
  g.computeVertexNormals(); return g;
}

/* kerangka adegan bersama */
function stage(renderer, bg, pedR = 4.6, pedY = -0.15) {
  const scene = new THREE.Scene();
  { const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d'); const g = x.createRadialGradient(256, 220, 20, 256, 256, 420); g.addColorStop(0, bg[0]); g.addColorStop(0.55, bg[1]); g.addColorStop(1, '#05090e'); x.fillStyle = g; x.fillRect(0, 0, 512, 512); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t; }
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.5;
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 150);
  const key = new THREE.DirectionalLight(0xfff1dc, 2.5); key.position.set(5, 10, 7); key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  const sc = key.shadow.camera; sc.left = -9; sc.right = 9; sc.top = 9; sc.bottom = -9; sc.near = 1; sc.far = 40; key.shadow.bias = -0.0005; key.shadow.normalBias = 0.03; scene.add(key);
  const rim = new THREE.DirectionalLight(0x9fd6ff, 1.0); rim.position.set(-6, 3, -5); scene.add(rim);
  if (pedR) { const ped = new THREE.Mesh(new THREE.CylinderGeometry(pedR, pedR + 0.2, 0.3, 64), new THREE.MeshStandardMaterial({ color: C(0.32, 0.28, 0.24), roughness: 0.95 })); ped.position.y = pedY; ped.receiveShadow = true; scene.add(ped); }
  const layerMeshes = [], ent = {};
  const reg = (id, m) => { (ent[id] || (ent[id] = { mats: [], meshes: [] })); const ms = [].concat(m.material); for (const mm of ms) if (!ent[id].mats.includes(mm)) ent[id].mats.push(mm); ent[id].meshes.push(m); m.userData.layer = id; layerMeshes.push(m); };
  const add = (id, mesh, parent = scene) => { mesh.castShadow = mesh.receiveShadow = true; parent.add(mesh); reg(id, mesh); return mesh; };
  const dot = dotTex(), flows = [];
  const mkFlow = (paths, col, n, size, opt = {}) => { const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3)); const p = new THREE.Points(geo, new THREE.PointsMaterial({ map: dot, color: col, size, transparent: true, depthWrite: false })); p.frustumCulled = false; p.userData.noAO = true; (opt.parent || scene).add(p);
    const r = rng(n * 7 + 1); const F = { p, curves: paths.map((ps) => new THREE.CatmullRomCurve3(ps.map((q) => V(...q)))), n, u: Array.from({ length: n }, () => r()), c: Array.from({ length: n }, (_, i) => i % paths.length), j: Array.from({ length: n }, () => [(r() - 0.5), (r() - 0.5), (r() - 0.5)]), jit: opt.jit ?? 0.1, amt: opt.amt || (() => 1), spd: opt.spd || 0.2, r }; flows.push(F); return F; };
  const runFlows = (dt, st) => { for (const F of flows) { const a = F.amt(st); F.p.visible = a > 0.02; if (!F.p.visible) continue; const pos = F.p.geometry.attributes.position, act = Math.ceil(F.n * clamp(a, 0.05, 1));
    for (let i = 0; i < F.n; i++) { if (i >= act) { pos.setXYZ(i, 0, -999, 0); continue; } F.u[i] += F.spd * (0.4 + a) * dt; if (F.u[i] > 1) { F.u[i] -= 1; F.c[i] = Math.floor(F.r() * F.curves.length); } const q = F.curves[F.c[i]].getPoint(F.u[i]); pos.setXYZ(i, q.x + F.j[i][0] * F.jit, q.y + F.j[i][1] * F.jit, q.z + F.j[i][2] * F.jit); }
    pos.needsUpdate = true; } };
  const dimC = new THREE.Color(0.22, 0.24, 0.28), k = {};
  const finish = (state, target, extra) => {
    for (const id in ent) { k[id] = 0; for (const m of ent[id].mats) if (m.color) m.userData.base = m.color.clone(); }
    return Object.assign({
      scene, camera, layerMeshes, state, waterFlow: { pts: {} }, sugarFlow: { pts: {} }, depthFor: () => state.depthT,
      update(dt, T, selected, hovered) {
        if (!state.user) state.yaw = state.yaw0 + 0.3 * Math.sin(T * 0.3);
        const cp = Math.cos(state.pitch), sp = Math.sin(state.pitch);
        camera.position.set(target.x + Math.sin(state.yaw) * cp * state.dist, target.y + sp * state.dist, target.z + Math.cos(state.yaw) * cp * state.dist); camera.lookAt(target);
        if (extra.tick) extra.tick(dt, T, state);
        runFlows(dt, state);
        for (const id in ent) { const dim = selected && selected !== id ? 1 : 0; k[id] += (dim - k[id]) * Math.min(1, dt * 8); const glow = selected === id ? 0.16 : (hovered === id ? 0.08 : 0);
          for (const m of ent[id].mats) { if (!m.userData.base) continue; m.color.copy(m.userData.base).lerp(dimC, k[id] * 0.5); if (m.emissive && !m.userData.keepEmi) m.emissive.copy(m.userData.base).multiplyScalar(glow); } }
      },
    }, extra.api || {});
  };
  return { scene, camera, add, mkFlow, finish, ent };
}

/* ================= PROFIL TANAH ================= */
const HZ = [ /* id, tebal, warna dasar, bintik */
  ['O', 0.35, '#2a1c10', [['rgba(120,80,30,0.8)', 90, 3, 8], ['rgba(70,90,30,0.7)', 40, 3, 7]]],
  ['A', 1.3, '#3a2616', [['rgba(20,12,6,0.6)', 300, 1, 4], ['rgba(110,80,50,0.4)', 200, 1, 3]]],
  ['B', 1.8, '#8a4a28', [['rgba(150,80,40,0.5)', 260, 2, 6], ['rgba(60,30,15,0.35)', 120, 1, 3]]],
  ['C', 1.5, '#a88a5a', [['rgba(120,110,95,0.95)', 70, 6, 18], ['rgba(80,60,40,0.4)', 150, 1, 4]]],
  ['R', 1.6, '#6f6a64', [['rgba(90,88,84,0.9)', 120, 4, 12], ['rgba(140,136,130,0.6)', 120, 2, 6]]],
];
export function buildSoilDissect(renderer) {
  const S = stage(renderer, ['#3a3226', '#16110a'], 0), W = 5, D = 3.4;
  const ids = { O: 'serasah', A: 'topsoil', B: 'subsoil', C: 'bahaninduk', R: 'batuandasar' };
  let y = 6.6;
  const layerY = {};
  for (const [hz, th, base, sp] of HZ) {
    y -= th; layerY[hz] = [y, y + th];
    const t = grainTex(base, sp, hz.charCodeAt(0), [W / 2.5, th / 2.5], hz === 'R' ? (x, N) => { x.strokeStyle = 'rgba(30,28,26,0.7)'; x.lineWidth = 2; for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(Math.random() * N, 0); x.lineTo(Math.random() * N, N); x.stroke(); } } : null);
    const m = S.add(ids[hz], new THREE.Mesh(new THREE.BoxGeometry(W, th, D), new THREE.MeshStandardMaterial({ map: t, roughness: 0.95 })));
    m.position.y = y + th / 2;
  }
  /* rumput di atas */
  { const blades = []; const r = rng(4); for (let i = 0; i < 500; i++) { const x = (r() - 0.5) * W * 0.98, z = (r() - 0.5) * D * 0.98, h = 0.15 + r() * 0.25, g = new THREE.ConeGeometry(0.02, h, 3); g.translate(x, 6.6 + h / 2, z); blades.push(g); }
    S.scene.add(Object.assign(new THREE.Mesh(mergeGeometries(blades), new THREE.MeshStandardMaterial({ color: C(0.35, 0.55, 0.2), roughness: 0.8 })), { castShadow: true })); }
  /* akar dan cacing tanah */
  { const r = rng(6), roots = []; for (let i = 0; i < 9; i++) { const x0 = (r() - 0.5) * W * 0.8, z0 = D / 2 + 0.03; const pts = [V(x0, 6.6, z0)]; let p = pts[0].clone(); for (let k = 0; k < 6; k++) { p = p.clone().add(V((r() - 0.5) * 0.5, -0.35 - r() * 0.25, 0)); pts.push(p); } roots.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 20, 0.035, 5)); for (let b = 0; b < 3; b++) { const s = pts[2 + b]; roots.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([s, s.clone().add(V((r() - 0.5) * 0.6, -0.4, 0))]), 6, 0.018, 4)); } }
    const rm = S.add('akar', new THREE.Mesh(mergeGeometries(roots), new THREE.MeshStandardMaterial({ color: C(0.75, 0.62, 0.42), roughness: 0.7 }))); }
  { const pts = []; for (let i = 0; i <= 14; i++) pts.push(V(-1.2 + i * 0.12, 5.2 + Math.sin(i * 0.8) * 0.12, D / 2 + 0.06)); S.add('cacing', new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 40, 0.07, 8), new THREE.MeshStandardMaterial({ color: C(0.85, 0.5, 0.5), roughness: 0.4 }))); }
  /* air hujan meresap: cepat di lapisan atas, lambat di lapisan lempung, tertahan di atas batuan dasar lalu mengalir menyamping */
  const rainPaths = [], r = rng(11);
  for (let i = 0; i < 14; i++) { const x = (r() - 0.5) * W * 0.8, z = D / 2 + 0.08; rainPaths.push([[x, 9, z], [x, 6.7, z], [x + 0.1, 5.5, z], [x - 0.1, 3.5, z], [x, layerY.R[1] + 0.15, z], [x + 2.5, layerY.R[1] + 0.12, z]]); }
  const rainF = S.mkFlow(rainPaths, new THREE.Color(0.4, 1.0, 2.8), 120, 0.12, { amt: (st) => st.sun, spd: 0.12, jit: 0.05 });
  const state = { yaw: 0.45, yaw0: 0.45, pitch: 0.22, dist: 15, user: false, sun: 0.5, depth: 0, depthT: 0 };
  return S.finish(state, V(0, 3.3, 0), { api: { labels: { depth: null, sun: 'Hujan' } } });
}

/* ================= SIKLUS BATUAN ================= */
export function rockTextures() {
  return {
    beku: grainTex('#6e6c6a', [['rgba(235,230,220,0.85)', 220, 1, 3], ['rgba(30,30,32,0.9)', 160, 1, 3], ['rgba(200,190,170,0.9)', 50, 3, 6]], 21, [2, 1]),
    sedimen: grainTex('#c6a776', [['rgba(150,120,80,0.5)', 900, 0.6, 1.6], ['rgba(230,210,170,0.5)', 600, 0.6, 1.6]], 22, [2, 1], (x, N, r) => { for (let i = 0; i < 9; i++) { x.fillStyle = i % 2 ? 'rgba(120,90,55,0.35)' : 'rgba(240,220,180,0.3)'; x.fillRect(0, i * N / 9 + r() * 6, N, N / 18); } }),
    metamorf: grainTex('#ece9e2', [['rgba(210,205,198,0.6)', 300, 1, 3]], 23, [2, 1], (x, N, r) => { x.strokeStyle = 'rgba(110,110,115,0.55)'; for (let i = 0; i < 7; i++) { x.lineWidth = 1 + r() * 3; x.beginPath(); let px = r() * N, py = 0; x.moveTo(px, py); while (py < N) { px += (r() - 0.5) * 40; py += 20; x.lineTo(px, py); } x.stroke(); } }),
  };
}
export function buildRockDissect(renderer) {
  const S = stage(renderer, ['#3d2a22', '#140c0a'], 5.6), T = rockTextures();
  const pos = { beku: [-2.8, 0.85, 1.4], sedimen: [2.8, 0.85, 1.4], metamorf: [0, 0.85, -3.0] };
  S.add('beku', new THREE.Mesh(rockGeo(1.0, 5, 3, 0.85), new THREE.MeshStandardMaterial({ map: T.beku, roughness: 0.75 }))).position.set(...pos.beku);
  S.add('sedimen', new THREE.Mesh(rockGeo(1.0, 7, 3, 0.7), new THREE.MeshStandardMaterial({ map: T.sedimen, roughness: 0.95 }))).position.set(...pos.sedimen);
  S.add('metamorf', new THREE.Mesh(rockGeo(1.0, 9, 3, 0.8), new THREE.MeshPhysicalMaterial({ map: T.metamorf, roughness: 0.35, clearcoat: 0.6 }))).position.set(...pos.metamorf);
  /* magma: kolam pijar di tengah */
  const magT = tex(256, (x, N) => { const r = rng(2); x.fillStyle = '#ff6a10'; x.fillRect(0, 0, N, N); for (let i = 0; i < 260; i++) { x.fillStyle = r() < 0.5 ? 'rgba(255,220,80,0.6)' : 'rgba(120,20,0,0.6)'; x.beginPath(); x.ellipse(r() * N, r() * N, 6 + r() * 22, 4 + r() * 12, r() * 3, 0, TAU); x.fill(); } }, [1, 1]);
  const magM = new THREE.MeshStandardMaterial({ color: 0xffffff, map: magT, emissive: new THREE.Color(1.6, 0.5, 0.08), emissiveMap: magT, roughness: 0.6 }); magM.userData.keepEmi = true;
  const mag = S.add('magma', new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.3, 0.25, 40), magM)); mag.position.set(0, 0.05, -0.2); mag.castShadow = false;
  const glow = new THREE.PointLight(0xff7a2a, 6, 7, 1.6); glow.position.set(0, 0.9, -0.2); S.scene.add(glow);
  /* proses siklus sebagai partikel antar batuan */
  const P = (a) => [a[0], a[1] + 0.3, a[2]];
  S.mkFlow([[P(pos.beku), [0, 1.9, 2.6], P(pos.sedimen)]], new THREE.Color(1.8, 1.3, 0.7), 40, 0.13, { spd: 0.15 });      /* pelapukan, erosi, pengendapan */
  S.mkFlow([[P(pos.sedimen), [2.4, 1.6, -1.6], P(pos.metamorf)]], new THREE.Color(2.4, 0.6, 0.4), 40, 0.13, { spd: 0.15 });  /* panas dan tekanan */
  S.mkFlow([[P(pos.metamorf), [0, 0.9, -1.6], [0, 0.3, -0.2]]], new THREE.Color(2.8, 1.1, 0.2), 30, 0.14, { spd: 0.15 });    /* meleleh */
  S.mkFlow([[[0, 0.3, -0.2], [-1.6, 1.0, 0.4], P(pos.beku)]], new THREE.Color(2.8, 2.2, 0.6), 30, 0.13, { spd: 0.15 });     /* membeku */
  const state = { yaw: 0.2, yaw0: 0.2, pitch: 0.55, dist: 15, user: false, sun: 0.5, depth: 0, depthT: 0 };
  return S.finish(state, V(0, 0.6, 0), { api: { labels: { depth: null, sun: 'Kecepatan' } }, tick: (dt, t) => { magT.offset.set(t * 0.01, t * 0.006); glow.intensity = 5 + Math.sin(t * 3) * 1.2; } });
}

/* ================= DIORAMA SIKLUS AIR (dengan sungai) ================= */
export function buildWaterCycleDissect(renderer) {
  const S = stage(renderer, ['#2c4a64', '#0c1824'], 0), R = rng(31);
  const SZ = 10, N = 64;
  /* daratan: gunung di kiri belakang, lembah sungai, danau/laut di kanan depan */
  const hAt = (x, z) => { const m = 3.4 * Math.exp(-((x + 3.2) ** 2 + (z + 2.4) ** 2) / 7.5) + 1.6 * Math.exp(-((x + 0.5) ** 2 + (z + 3.6) ** 2) / 4); const valley = Math.exp(-((z - riverZ(x)) ** 2) / 0.35) * 0.5; return Math.max(-0.45, m + 0.35 - valley - (x > 2.5 ? (x - 2.5) * 0.35 : 0)); };
  function riverZ(x) { return -2.2 + (x + 4) * 0.55 + Math.sin(x * 1.3) * 0.45; }
  const g = new THREE.PlaneGeometry(SZ, SZ, N, N); g.rotateX(-Math.PI / 2); const p = g.attributes.position, col = [];
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), h = hAt(x, z); p.setY(i, h); const c = h > 2.6 ? C(0.55, 0.52, 0.48) : h > 0.0 ? C(0.36 + h * 0.03, 0.5 - h * 0.02, 0.24) : C(0.6, 0.56, 0.4); col.push(c.r, c.g, c.b); }
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.computeVertexNormals();
  const land = S.add('infiltrasi', new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 })));
  /* sisi balok: lapisan tanah dan air tanah (biru) */
  { const side = tex(256, (x, Nn) => { x.fillStyle = '#6a4a2c'; x.fillRect(0, 0, Nn, Nn); x.fillStyle = '#8a5a34'; x.fillRect(0, 0, Nn, Nn * 0.25); x.fillStyle = 'rgba(70,140,220,0.85)'; x.fillRect(0, Nn * 0.55, Nn, Nn * 0.2); x.fillStyle = '#5a5550'; x.fillRect(0, Nn * 0.75, Nn, Nn * 0.25); }, [3, 1]);
    const box = new THREE.Mesh(new THREE.BoxGeometry(SZ, 1.6, SZ), [new THREE.MeshStandardMaterial({ map: side }), new THREE.MeshStandardMaterial({ map: side }), new THREE.MeshStandardMaterial({ color: C(0.3, 0.22, 0.15) }), new THREE.MeshStandardMaterial({ color: C(0.3, 0.22, 0.15) }), new THREE.MeshStandardMaterial({ map: side }), new THREE.MeshStandardMaterial({ map: side })]);
    box.position.y = -1.25; S.add('infiltrasi', box); }
  /* danau/laut */
  const waterM = new THREE.MeshPhysicalMaterial({ color: C(0.2, 0.5, 0.75), roughness: 0.08, transparent: true, opacity: 0.85, clearcoat: 1 });
  const lake = S.add('evaporasi', new THREE.Mesh(new THREE.PlaneGeometry(SZ * 0.38, SZ).rotateX(-Math.PI / 2), waterM)); lake.position.set(SZ * 0.31, -0.18, 0);
  /* sungai: pita air mengikuti lembah */
  const rp = []; for (let i = 0; i <= 40; i++) { const x = -4.2 + i * 0.2; rp.push(V(x, hAt(x, riverZ(x)) + 0.04, riverZ(x))); }
  const rc = new THREE.CatmullRomCurve3(rp), riverM = new THREE.MeshPhysicalMaterial({ color: C(0.25, 0.55, 0.8), roughness: 0.1, clearcoat: 1 });
  S.add('limpasan', new THREE.Mesh(new THREE.TubeGeometry(rc, 80, 0.12, 6), riverM));
  /* pohon (jumlah mengikuti slider hutan) */
  const trees = [], cone = new THREE.ConeGeometry(0.22, 0.7, 7); cone.translate(0, 0.45, 0); const trunk = new THREE.CylinderGeometry(0.04, 0.05, 0.2, 5); trunk.translate(0, 0.1, 0);
  const tg = mergeGeometries([cone, trunk]);
  for (let n = 0; n < 400 && trees.length < 120; n++) { const x = (R() - 0.5) * SZ * 0.9, z = (R() - 0.5) * SZ * 0.9, h = hAt(x, z); if (x > 1.6 || h > 2.9 || h < 0.1 || Math.abs(z - riverZ(x)) < 0.45) continue; trees.push({ p: V(x, h, z), s: 0.8 + R() * 0.5 }); }
  trees.sort(() => R() - 0.5);
  const treeM = new THREE.InstancedMesh(tg, new THREE.MeshStandardMaterial({ color: C(0.2, 0.42, 0.18), roughness: 0.8 }), trees.length); S.add('transpirasi', treeM);
  /* awan, matahari */
  const cloudG = []; for (let i = 0; i < 9; i++) cloudG.push(new THREE.SphereGeometry(0.55 + R() * 0.35, 14, 10).translate((R() - 0.5) * 2.6, (R() - 0.5) * 0.3, (R() - 0.5) * 1.2));
  const cloud = S.add('kondensasi', new THREE.Mesh(mergeGeometries(cloudG), new THREE.MeshStandardMaterial({ color: C(0.95, 0.96, 1.0), roughness: 0.9, transparent: true, opacity: 0.95 }))); cloud.position.set(-2.4, 6.2, -1.8);
  const sunM = new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 2.4, 1.0) }); const sun = new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 14), sunM); sun.position.set(4.2, 7.5, -3); S.scene.add(sun);
  const shafts = []; for (let i = 0; i < 6; i++) shafts.push(new THREE.CylinderGeometry(0.03, 0.03, 4.5, 4).translate(-2.4 + (i - 2.5) * 0.4, 3.8, -1.8 + (i % 2) * 0.4));
  const rainM = new THREE.MeshStandardMaterial({ color: C(0.6, 0.8, 1.0), transparent: true, opacity: 0.25, depthWrite: false });
  const shaftM = S.add('presipitasi', new THREE.Mesh(mergeGeometries(shafts), rainM));
  /* partikel: evaporasi, transpirasi, hujan, limpasan (keruh bila hutan sedikit), infiltrasi */
  const evap = []; for (let i = 0; i < 8; i++) { const x = 2.4 + R() * 2.2, z = (R() - 0.5) * 8; evap.push([[x, -0.1, z], [x - 1.5, 3.2, z * 0.6 - 0.5], [-1.6, 6.0, -1.6]]); }
  const tran = []; for (let i = 0; i < 10; i++) { const t = trees[i * 3 % trees.length]; tran.push([[t.p.x, t.p.y + 0.8, t.p.z], [t.p.x - 0.5, 3.5, t.p.z - 0.4], [-2.6, 6.0, -1.8]]); }
  const rain = []; for (let i = 0; i < 12; i++) { const x = -2.4 + (R() - 0.5) * 2.6, z = -1.8 + (R() - 0.5) * 1.2; rain.push([[x, 5.9, z], [x, hAt(x, z) + 0.05, z]]); }
  const runoff = [rp.map((v) => [v.x, v.y + 0.1, v.z]).concat([[3.6, -0.1, riverZ(3.6)]])];
  const infil = []; for (let i = 0; i < 10; i++) { const x = -3 + R() * 3, z = -2.5 + R() * 2; infil.push([[x, hAt(x, z), z], [x + 0.3, -0.9, z], [x + 4, -1.2, z * 0.5], [SZ / 2 - 0.5, -0.5, z * 0.3]]); }
  S.mkFlow(evap, new THREE.Color(1.6, 2.0, 2.4), 60, 0.14, { amt: (st) => st.sun, spd: 0.14, jit: 0.2 });
  S.mkFlow(tran, new THREE.Color(0.8, 2.2, 1.0), 40, 0.12, { amt: (st) => st.sun * st.forest, spd: 0.14, jit: 0.2 });
  S.mkFlow(rain, new THREE.Color(0.5, 1.1, 2.6), 90, 0.1, { amt: (st) => st.rain, spd: 0.6, jit: 0.05 });
  const run = S.mkFlow(runoff, new THREE.Color(0.5, 1.2, 2.6), 90, 0.13, { amt: (st) => st.rain * (1.1 - 0.85 * st.forest), spd: 0.22, jit: 0.08 });
  S.mkFlow(infil, new THREE.Color(0.3, 0.8, 2.6), 50, 0.11, { amt: (st) => st.rain * (0.15 + 0.85 * st.forest), spd: 0.08, jit: 0.05 });
  const state = { yaw: 0.55, yaw0: 0.55, pitch: 0.42, dist: 19, user: false, sun: 0.65, forest: 0.8, rain: 0.5, depth: 0, depthT: 0 };
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), clean = new THREE.Color(0.5, 1.2, 2.6), muddy = new THREE.Color(2.0, 1.2, 0.5);
  let shownTrees = -1;
  return S.finish(state, V(0, 2.8, 0), {
    api: { labels: { depth: null, sun: 'Matahari' } },
    tick(dt, t, st) {
      st.rain = clamp(0.3 + 0.6 * st.sun, 0, 1);      /* lebih banyak penguapan -> awan -> hujan */
      st.flood = clamp(st.rain * (1.1 - 0.85 * st.forest), 0, 1); st.erosion = clamp(1 - st.forest, 0, 1);
      const nT = Math.round(trees.length * st.forest);
      if (nT !== shownTrees) { shownTrees = nT; trees.forEach((tr, i) => { m4.compose(tr.p, q, i < nT ? V(tr.s, tr.s, tr.s) : V(0, 0, 0)); treeM.setMatrixAt(i, m4); }); treeM.instanceMatrix.needsUpdate = true; }
      cloud.scale.setScalar(0.7 + 0.6 * st.rain); rainM.opacity = 0.1 + 0.3 * st.rain;
      run.p.material.color.copy(clean).lerp(muddy, st.erosion * 0.85);
      riverM.color.copy(C(0.25, 0.55, 0.8)).lerp(C(0.55, 0.42, 0.25), st.erosion * 0.8); riverM.userData.base = riverM.color.clone();
      sunM.color.setRGB(1 + 2 * st.sun, 0.8 + 1.6 * st.sun, 0.4 + 0.6 * st.sun);
    },
  });
}

/* ================= OBJEK DI DUNIA ================= */
export function buildSoilBank(scene, x, y, z, rot = 0) {
  const g = new THREE.Group(); let yy = 2.0;
  for (const [hz, th, base, sp] of HZ) { const t = th * 0.32; yy -= t; const m = new THREE.Mesh(new THREE.BoxGeometry(2.4, t, 1.6), new THREE.MeshStandardMaterial({ map: grainTex(base, sp, hz.charCodeAt(0) + 9, [1, t]), roughness: 0.95 })); m.position.y = yy + t / 2; m.castShadow = m.receiveShadow = true; g.add(m); }
  const top = new THREE.Mesh(new THREE.BoxGeometry(2.45, 0.08, 1.65), new THREE.MeshStandardMaterial({ color: C(0.32, 0.5, 0.2), roughness: 0.9 })); top.position.y = 2.04; g.add(top);
  g.position.set(x, y - 0.3, z); g.rotation.y = rot; scene.add(g); return g;
}
export function buildRockOutcrop(scene, x, y, z) {
  const T = rockTextures(), g = new THREE.Group();
  [['beku', 0.9, [0, 0.5, 0], 3], ['sedimen', 0.7, [1.4, 0.35, 0.6], 4], ['metamorf', 0.6, [-1.1, 0.3, 0.8], 6], ['beku', 0.4, [0.6, 0.2, -1.1], 8]].forEach(([k, r, p, s]) => {
    const m = new THREE.Mesh(rockGeo(r, s, 2, 0.75), new THREE.MeshStandardMaterial({ map: T[k], roughness: k === 'metamorf' ? 0.45 : 0.85 })); m.position.set(...p); m.castShadow = m.receiveShadow = true; g.add(m); });
  g.position.set(x, y, z); scene.add(g); return g;
}
export function buildSignboard(scene, x, y, z, rot = 0) {
  const g = new THREE.Group(), wood = new THREE.MeshStandardMaterial({ color: C(0.42, 0.3, 0.18), roughness: 0.85 });
  for (const s of [-0.55, 0.55]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 1.6, 6), wood); p.position.set(s, 0.8, 0); p.castShadow = true; g.add(p); }
  const face = tex(256, (c, N) => { c.fillStyle = '#e8dcc0'; c.fillRect(0, 0, N, N); c.fillStyle = '#2c5a80'; c.beginPath(); c.arc(N * 0.25, N * 0.35, N * 0.12, 0, TAU); c.fill(); c.strokeStyle = '#2c5a80'; c.lineWidth = 6; c.beginPath(); c.arc(N * 0.5, N * 0.55, N * 0.3, Math.PI * 1.1, Math.PI * 1.9); c.stroke(); c.fillStyle = '#3a6a2a'; c.beginPath(); c.moveTo(N * 0.55, N * 0.9); c.lineTo(N * 0.75, N * 0.55); c.lineTo(N * 0.95, N * 0.9); c.fill(); c.fillStyle = '#4a90c8'; c.fillRect(0, N * 0.88, N, N * 0.12); });
  const b = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.8, 0.06), [wood, wood, wood, wood, new THREE.MeshStandardMaterial({ map: face, roughness: 0.8 }), wood]); b.position.y = 1.45; b.castShadow = true; g.add(b);
  g.position.set(x, y, z); g.rotation.y = rot; scene.add(g); return g;
}
