import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import { stage } from './geo.js';
import { palmGeo, palmAssets } from './monocot.js';
import { biomeAt, coastR } from './world.js';

/* FASE 1: PANTAI & GURUN. Hiasan dunia (kelapa pantai, terumbu karang, kaktus, batu gurun, sarang penyu)
   dan adegan bedah statis: terumbu karang (suhu laut -> pemutihan), gumuk pasir (angin -> saltasi), kaktus (siang/malam, CAM). */
const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ellG = (r, p, seg = 10) => new THREE.SphereGeometry(1, seg, Math.max(6, seg * 0.7 | 0)).scale(r[0], r[1], r[2]).translate(p[0], p[1], p[2]);
const tubeG = (pts, r, seg = 12, rs = 6) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => V(...p))), seg, r, rs);
function tex(N, draw, rep, srgb = true) { const c = document.createElement('canvas'); c.width = c.height = N; draw(c.getContext('2d'), N); const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; if (rep) t.repeat.set(rep[0], rep[1]); return t; }

/* ---------- bentuk karang ---------- */
function coralBranch(r, s) { const g = []; const rec = (p, d, L, rad, n) => { const q = p.clone().add(d.clone().multiplyScalar(L)); g.push(tubeG([p.toArray(), q.toArray()], rad, 3, 5)); if (n <= 0) { g.push(ellG([rad * 1.3, rad * 1.3, rad * 1.3], q.toArray(), 6)); return; } for (let k = 0; k < 2; k++) { const nd = d.clone().add(V((r() - 0.5) * 1.2, 0.3 + r() * 0.4, (r() - 0.5) * 1.2)).normalize(); rec(q, nd, L * 0.75, rad * 0.75, n - 1); } };
  for (let k = 0; k < 3; k++) rec(V(0, 0, 0), V((r() - 0.5) * 0.8, 1, (r() - 0.5) * 0.8).normalize(), 0.35 * s, 0.07 * s, 3); return mergeGeometries(g); }
function coralBrain(r, s) { const g = new THREE.SphereGeometry(0.5 * s, 18, 12, 0, TAU, 0, Math.PI / 2); const p = g.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), k = 1 + 0.06 * Math.sin(x * 22 / s + Math.sin(z * 14 / s) * 2); p.setXYZ(i, x * k, y * k * 0.8, z * k); } g.computeVertexNormals(); return g; }
function coralFan(r, s) { const g = new THREE.CircleGeometry(0.6 * s, 14, 0, Math.PI).rotateY(r() * TAU); return g; }
function coralTable(r, s) { return mergeGeometries([new THREE.CylinderGeometry(0.06 * s, 0.1 * s, 0.4 * s, 6).translate(0, 0.2 * s, 0), new THREE.CylinderGeometry(0.7 * s, 0.55 * s, 0.08 * s, 14).translate(0, 0.42 * s, 0)]); }
const CORAL_COLS = [[0.95, 0.45, 0.35], [0.95, 0.75, 0.3], [0.55, 0.35, 0.75], [0.35, 0.7, 0.6], [0.9, 0.55, 0.65], [0.6, 0.75, 0.35]];
function coloredGeo(g, col) { const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = col[0]; a[i * 3 + 1] = col[1]; a[i * 3 + 2] = col[2]; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); if (g.index) g = g.toNonIndexed(); return g; }
function coralPiece(r, s, bleach = 0) {
  const t = r(), col = CORAL_COLS[Math.floor(r() * CORAL_COLS.length)].map((v) => lerp(v, 0.95, bleach));
  let g = t < 0.35 ? coralBranch(r, s) : t < 0.6 ? coralBrain(r, s) : t < 0.8 ? coralTable(r, s) : coralFan(r, s);
  g = g.index ? g.toNonIndexed() : g; if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  return coloredGeo(g, col);
}

/* ================= HIASAN DUNIA ================= */
export function buildCoastDecor(scene, heightAt, WATER) {
  const groups = [], r = rng(2026);
  const cluster = (cx, cz) => { const g = new THREE.Group(); g.userData.c = V(cx, 0, cz); scene.add(g); groups.push(g); return g; };
  /* kelapa sepanjang pantai: kelompok per ~60 m di garis pantai */
  { const A = palmAssets(); for (let a = 0; a < TAU; a += 0.06) {
    const cx = Math.cos(a), cz = Math.sin(a); let R0 = coastR(cx * 100, cz * 100) - 40;
    const B = biomeAt(cx * R0, cz * R0); if (B.gunung > 0.45) continue;
    const g = cluster(cx * R0, cz * R0), T = [], L = [], N = [];
    for (let k = 0; k < 4; k++) { if (r() < 0.25) continue; const rr = R0 - 8 + r() * 30, aa = a + (r() - 0.5) * 0.05, x = Math.cos(aa) * rr, z = Math.sin(aa) * rr, y = heightAt(x, z); if (y < WATER + 0.3) continue;
      const P = palmGeo(Math.floor(r() * 999), 6 + r() * 4), m = new THREE.Matrix4().makeRotationY(r() * TAU).setPosition(x, y - 0.1, z); T.push(P.trunk.applyMatrix4(m)); L.push(P.leaves.applyMatrix4(m)); N.push(P.nuts.applyMatrix4(m)); }
    if (T.length) { const t = new THREE.Mesh(mergeGeometries(T), A.trunkM), l = new THREE.Mesh(mergeGeometries(L), A.leafM), n = new THREE.Mesh(mergeGeometries(N), A.nutM); t.castShadow = l.castShadow = true; l.userData.noAO = true; g.add(t, l, n); }
  } }
  /* terumbu karang di teluk selatan */
  { const cm = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, side: THREE.DoubleSide });
    for (let c = 0; c < 6; c++) { const a = 1.55 + c * 0.07, R0 = coastR(Math.cos(a) * 100, Math.sin(a) * 100) + 16, cx = Math.cos(a) * R0, cz = Math.sin(a) * R0, g = cluster(cx, cz), G = [];
      for (let i = 0; i < 26; i++) { const x = cx + (r() - 0.5) * 18, z = cz + (r() - 0.5) * 14, y = heightAt(x, z); if (y > WATER - 0.6) continue; const p = coralPiece(r, 0.6 + r() * 0.9); p.rotateY(r() * TAU); p.translate(x, y - 0.05, z); G.push(p); }
      if (G.length) g.add(new THREE.Mesh(mergeGeometries(G), cm)); } }
  /* kaktus dan batu di gurun */
  { const cm = new THREE.MeshStandardMaterial({ color: C(0.32, 0.5, 0.26), roughness: 0.6 }), rm = new THREE.MeshStandardMaterial({ color: C(0.66, 0.5, 0.36), roughness: 0.95, flatShading: true });
    for (let gx = -40; gx < 560; gx += 70) for (let gz = 40; gz < 560; gz += 70) {
      const B = biomeAt(gx, gz); if (B.gurun < 0.5 || B.laut > 0.1 || B.pantai > 0.5) continue; const g = cluster(gx, gz), K = [], S = [];
      for (let i = 0; i < 6; i++) { const x = gx + (r() - 0.5) * 60, z = gz + (r() - 0.5) * 60, y = heightAt(x, z), h = 1.5 + r() * 2.5;
        K.push(new THREE.CylinderGeometry(0.22, 0.26, h, 10).translate(x, y + h / 2, z), ellG([0.22, 0.22, 0.22], [x, y + h, z], 10));
        if (r() < 0.7) { const s = r() < 0.5 ? 1 : -1, ay = y + h * (0.35 + r() * 0.25), ah = 0.8 + r() * 0.8; K.push(tubeG([[x, ay, z], [x + s * 0.55, ay + 0.05, z], [x + s * 0.6, ay + ah, z]], 0.15, 10, 8), ellG([0.15, 0.15, 0.15], [x + s * 0.6, ay + ah, z], 8)); } }
      for (let i = 0; i < 5; i++) { const x = gx + (r() - 0.5) * 60, z = gz + (r() - 0.5) * 60, s = 0.5 + r() * 1.4; S.push(new THREE.DodecahedronGeometry(s, 0).scale(1, 0.6, 0.9).translate(x, heightAt(x, z) + s * 0.25, z)); }
      const k = new THREE.Mesh(mergeGeometries(K), cm), s = new THREE.Mesh(mergeGeometries(S), rm); k.castShadow = s.castShadow = true; g.add(k, s);
    } }
  return { update(P) { for (const g of groups) g.visible = Math.hypot(P.x - g.userData.c.x, P.z - g.userData.c.z) < 210; } };
}

/* ================= BEDAH: TERUMBU KARANG ================= */
export function buildReefDissect(renderer) {
  const S = stage(renderer, ['#1d5a78', '#06202e'], 0), r = rng(9);
  S.scene.fog = new THREE.FogExp2(0x0a3550, 0.03);
  /* dasar pasir */
  const sand = new THREE.Mesh(new THREE.CircleGeometry(9, 48).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: C(0.82, 0.74, 0.56), roughness: 1 })); sand.position.y = -0.5; sand.receiveShadow = true; S.scene.add(sand);
  /* koloni karang di sekitar */
  const cm = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.65, side: THREE.DoubleSide }), G = [], GB = [];
  for (let i = 0; i < 40; i++) { const a = r() * TAU, d = 2.4 + r() * 5, x = Math.cos(a) * d, z = Math.sin(a) * d * 0.8 - 1; if (z > 2.5 && Math.abs(x) < 3) continue; const p = coralPiece(r, 0.8 + r() * 1.2); p.rotateY(r() * TAU); p.translate(x, -0.5, z); G.push(p); }
  const colony = S.add('terumbu', new THREE.Mesh(mergeGeometries(G), cm));
  /* polip besar (diperbesar) di tengah: tangkai kapur, badan, tentakel, mulut */
  const P = new THREE.Group(); S.scene.add(P); P.position.set(0, -0.5, 0.5);
  const skelM = new THREE.MeshStandardMaterial({ color: C(0.95, 0.93, 0.88), roughness: 0.8 });
  const cup = new THREE.CylinderGeometry(1.15, 1.35, 1.0, 32, 1, true).translate(0, 0.5, 0), septa = [];
  for (let k = 0; k < 12; k++) septa.push(new THREE.BoxGeometry(0.04, 0.9, 0.5).translate(0, 0.45, 0.85).rotateY(k / 12 * TAU));
  S.add('kerangka', new THREE.Mesh(mergeGeometries([cup, new THREE.CylinderGeometry(1.35, 1.6, 0.3, 32).translate(0, 0.1, 0), ...septa]), skelM), P);
  const tissM = new THREE.MeshPhysicalMaterial({ color: C(0.95, 0.55, 0.4), roughness: 0.4, transparent: true, opacity: 0.85, transmission: 0.1, side: THREE.DoubleSide });
  const body = new THREE.CylinderGeometry(0.95, 1.1, 1.6, 32, 4, true).translate(0, 1.3, 0), disc = new THREE.CircleGeometry(0.95, 32).rotateX(-Math.PI / 2).translate(0, 2.1, 0);
  S.add('polip', new THREE.Mesh(mergeGeometries([body, disc]), tissM), P);
  const mouth = S.add('polip', new THREE.Mesh(ellG([0.18, 0.06, 0.12], [0, 2.12, 0], 12), new THREE.MeshStandardMaterial({ color: C(0.5, 0.15, 0.15) })), P);
  const tents = new THREE.Group(); P.add(tents); const tg = [];
  for (let k = 0; k < 16; k++) { const a = k / 16 * TAU, x = Math.cos(a) * 0.75, z = Math.sin(a) * 0.75; tg.push(tubeG([[x, 2.1, z], [x * 1.3, 2.7, z * 1.3], [x * 1.55, 3.2, z * 1.55]], 0.07, 10, 6)); for (let q = 0; q < 6; q++) { const t = 0.2 + q * 0.14; tg.push(ellG([0.05, 0.05, 0.05], [x * (1 + t * 0.55), 2.1 + t * 1.1, z * (1 + t * 0.55)], 5)); } }
  const tentM = tissM.clone(); S.add('tentakel', new THREE.Mesh(mergeGeometries(tg), tentM), tents);
  /* zooxanthellae: bintik coklat keemasan di jaringan */
  const zx = []; for (let i = 0; i < 160; i++) { const a = r() * TAU, y = 0.6 + r() * 1.45, rr = 1.0 + (r() - 0.5) * 0.05; zx.push(ellG([0.035, 0.035, 0.035], [Math.cos(a) * rr, y + 0.1, Math.sin(a) * rr], 4)); }
  const zM = new THREE.MeshStandardMaterial({ color: C(0.55, 0.38, 0.1), roughness: 0.5 }), zMesh = S.add('zoox', new THREE.Mesh(mergeGeometries(zx), zM), P);
  /* zooxanthellae yang keluar saat pemutihan */
  const out = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: new THREE.Color(1.4, 1.0, 0.3), size: 0.07, transparent: true, depthWrite: false })); const NO = 80, op = new Float32Array(NO * 3), oseed = Array.from({ length: NO }, () => [r(), r(), r()]); out.geometry.setAttribute('position', new THREE.BufferAttribute(op, 3)); out.frustumCulled = false; S.scene.add(out);
  /* ikan karang */
  const fishes = new THREE.Group(); S.scene.add(fishes); const fg = mergeGeometries([ellG([0.22, 0.12, 0.05], [0, 0, 0], 10), new THREE.ConeGeometry(0.08, 0.14, 4).rotateZ(Math.PI / 2).translate(-0.27, 0, 0)]);
  const fcols = [[1, 0.5, 0.1], [0.2, 0.5, 1], [1, 0.85, 0.15], [0.2, 0.8, 0.7]];
  for (let i = 0; i < 12; i++) { const m = new THREE.Mesh(fg, new THREE.MeshStandardMaterial({ color: C(...fcols[i % 4]), roughness: 0.4 })); if (i === 0) S.add('ikan', m, fishes); else fishes.add(m); }
  const baseCols = []; cm.onBeforeCompile = (sh) => { sh.uniforms.uBleach = cm.userData.u; sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uBleach;').replace('#include <color_fragment>', '#include <color_fragment>\n diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.95,0.94,0.9), uBleach);'); };
  cm.userData.u = { value: 0 }; cm.customProgramCacheKey = () => 'reefBleach';
  const tissBase = tissM.color.clone();
  const state = { yaw: 0.2, yaw0: 0.2, pitch: 0.28, dist: 12, user: false, sun: 0.3, depth: 0, depthT: 0, b: 0 };
  return S.finish(state, V(0, 1.2, 0), {
    tick(dt, T, st) {
      const temp = lerp(26, 33, st.sun), bl = smooth(30.2, 32.2, temp); st.temp = temp; st.b += (bl - st.b) * Math.min(1, dt * 1.5);
      cm.userData.u.value = st.b * 0.9;
      zM.opacity = 1 - st.b; zM.transparent = st.b > 0.01; zMesh.visible = st.b < 0.97;
      tissM.userData.base && tissM.userData.base.copy(tissBase).lerp(C(0.96, 0.96, 0.95), st.b); tentM.userData.base && tentM.userData.base.copy(tissBase).lerp(C(0.96, 0.96, 0.95), st.b);
      tents.children.forEach((m) => { m.rotation.y = Math.sin(T * 0.8) * 0.05; }); tents.scale.y = 1 + Math.sin(T * 1.5) * 0.04;
      const pp = out.geometry.attributes.position; out.visible = st.b > 0.05;
      for (let i = 0; i < NO; i++) { const q = oseed[i], u = (T * 0.15 + q[0]) % 1, a = q[1] * TAU; pp.setXYZ(i, Math.cos(a) * (1 + u * 2) , 0.6 + q[2] * 1.5 + u * 3 - 0.5 + 0.5, Math.sin(a) * (1 + u * 2) + 0.5); } pp.needsUpdate = true; out.material.opacity = st.b;
      fishes.children.forEach((f, i) => { const a = T * (0.3 + (i % 3) * 0.08) + i * 0.52, rr = 2.6 + (i % 4) * 0.6; f.position.set(Math.cos(a) * rr, 0.6 + (i % 5) * 0.45 + Math.sin(T + i) * 0.1, Math.sin(a) * rr * 0.8); f.rotation.y = -a - Math.PI / 2; f.visible = i < 12 - Math.round(st.b * 8); });
    },
    api: { labels: { depth: null, sun: 'Suhu laut' } },
  });
}

/* ================= BEDAH: GUMUK PASIR ================= */
export function buildDuneDissect(renderer) {
  const S = stage(renderer, ['#8a7048', '#2a2014'], 0), r = rng(11);
  const W = 12, D = 5;
  /* penampang gumuk: sisi landai (arah datang angin, kiri) dan sisi curam ~33 derajat (kanan) */
  const prof = (x) => { const c = 1.2; return x < c ? 2.2 * Math.pow(Math.max(0, (x + 5.5) / (c + 5.5)), 1.6) : Math.max(0, 2.2 - (x - c) * Math.tan(33 * Math.PI / 180)); };
  const sandT = tex(256, (x, N) => { x.fillStyle = '#d9b77a'; x.fillRect(0, 0, N, N); const q = rng(3); for (let i = 0; i < 4000; i++) { x.fillStyle = q() < 0.5 ? 'rgba(150,110,60,0.35)' : 'rgba(250,230,190,0.35)'; x.fillRect(q() * N, q() * N, 1.5, 1.5); } for (let k = 0; k < 18; k++) { x.strokeStyle = 'rgba(160,120,70,0.25)'; x.beginPath(); x.moveTo(0, k * 14 + 4); x.bezierCurveTo(N * 0.3, k * 14, N * 0.6, k * 14 + 8, N, k * 14 + 3); x.stroke(); } }, [3, 1]);
  const NX = 120, NZ = 20, top = new THREE.PlaneGeometry(W, D, NX, NZ).rotateX(-Math.PI / 2), tp = top.attributes.position;
  for (let i = 0; i < tp.count; i++) { const x = tp.getX(i), z = tp.getZ(i); tp.setY(i, prof(x) * (1 - 0.15 * Math.abs(z) / D) + 0.03 * Math.sin(x * 9 + z * 2)); }
  top.computeVertexNormals();
  const duneM = new THREE.MeshStandardMaterial({ map: sandT, roughness: 1 });
  const dune = S.add('landai', new THREE.Mesh(top, duneM));
  /* sisi potongan depan berlapis (laminasi silang) */
  const sh = new THREE.Shape(); sh.moveTo(-W / 2, -0.6); for (let i = 0; i <= 60; i++) { const x = -W / 2 + i / 60 * W; sh.lineTo(x, prof(x)); } sh.lineTo(W / 2, -0.6); sh.lineTo(-W / 2, -0.6);
  const lamT = tex(256, (x, N) => { x.fillStyle = '#c9a466'; x.fillRect(0, 0, N, N); for (let k = 0; k < 30; k++) { x.strokeStyle = k % 2 ? 'rgba(140,100,55,0.45)' : 'rgba(235,210,160,0.4)'; x.lineWidth = 2; x.beginPath(); x.moveTo(N * 0.2 + k * 8, N); x.lineTo(N * 0.2 + k * 8 + N * 0.35, 0); x.stroke(); } });
  const face = new THREE.ShapeGeometry(sh, 60); const fp = face.attributes.position, fuv = face.attributes.uv; for (let i = 0; i < fp.count; i++) fuv.setXY(i, (fp.getX(i) + W / 2) / W * 2, (fp.getY(i) + 0.6) / 3);
  face.translate(0, 0, D / 2); S.add('lapisan', new THREE.Mesh(face, new THREE.MeshStandardMaterial({ map: lamT, roughness: 1, side: THREE.DoubleSide })));
  S.scene.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(W, 0.6, D).translate(0, -0.3, 0), new THREE.MeshStandardMaterial({ color: C(0.6, 0.48, 0.32) })), { receiveShadow: true }));
  /* puncak dan sisi curam ditandai */
  const crest = S.add('puncak', new THREE.Mesh(tubeG([[1.2, 2.22, -D / 2 + 0.2], [1.2, 2.25, 0], [1.2, 2.22, D / 2 - 0.2]], 0.05, 8, 6), new THREE.MeshStandardMaterial({ color: C(0.98, 0.85, 0.55), emissive: C(0.3, 0.2, 0.05) })));
  const slip = new THREE.PlaneGeometry(2.0, D * 0.9, 1, 1).rotateX(-Math.PI / 2).rotateZ(-33 * Math.PI / 180).translate(2.05, 1.6, 0);
  S.add('curam', new THREE.Mesh(slip, new THREE.MeshStandardMaterial({ color: C(0.9, 0.62, 0.35), transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide })));
  /* tumbuhan pionir (rumput angin, Spinifex) di kaki gumuk */
  const sp = []; for (let i = 0; i < 9; i++) { const x = -5.2 + r() * 1.6, z = (r() - 0.5) * 3.6; for (let k = 0; k < 7; k++) { const a = k / 7 * TAU; sp.push(tubeG([[x, 0.05, z], [x + Math.cos(a) * 0.25, 0.3, z + Math.sin(a) * 0.25], [x + Math.cos(a) * 0.5, 0.15, z + Math.sin(a) * 0.5]], 0.015, 6, 3)); } }
  S.add('pionir', new THREE.Mesh(mergeGeometries(sp), new THREE.MeshStandardMaterial({ color: C(0.55, 0.62, 0.3), roughness: 0.6 })));
  /* butir pasir: saltasi (melompat) di sisi landai, longsor di sisi curam */
  const NP = 160, pg = new THREE.BufferGeometry(), pa = new Float32Array(NP * 3); pg.setAttribute('position', new THREE.BufferAttribute(pa, 3));
  const grains = new THREE.Points(pg, new THREE.PointsMaterial({ color: new THREE.Color(1.6, 1.3, 0.8), size: 0.06, transparent: true, depthWrite: false })); grains.frustumCulled = false; S.scene.add(grains);
  const seeds = Array.from({ length: NP }, () => [r(), r(), r()]);
  /* panah angin */
  const arrows = new THREE.Group(); S.scene.add(arrows); const am = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 1.6, 2.0), transparent: true, opacity: 0.6 });
  for (let i = 0; i < 3; i++) { const a = new THREE.Mesh(mergeGeometries([new THREE.CylinderGeometry(0.03, 0.03, 1.2, 6).rotateZ(Math.PI / 2), new THREE.ConeGeometry(0.1, 0.25, 8).rotateZ(-Math.PI / 2).translate(0.7, 0, 0)]), am); a.position.set(-5, 3.2 + i * 0.5, -1 + i); arrows.add(a); }
  const grainsReg = S.add('butir', new THREE.Mesh(ellG([0.12, 0.12, 0.12], [-3.5, 0.9, D / 2 - 0.3], 8), new THREE.MeshStandardMaterial({ color: C(0.95, 0.8, 0.5) })));
  const state = { yaw: 0.25, yaw0: 0.25, pitch: 0.3, dist: 15, user: false, sun: 0.5, depth: 0, depthT: 0, shift: 0 };
  return S.finish(state, V(0, 1.2, 0), {
    tick(dt, T, st) {
      const w = st.sun, k = smooth(0.25, 0.6, w); /* angin di bawah ~0,25 belum bisa mengangkat pasir */
      st.shift += k * dt * 0.04; const sx = (st.shift % 1) * 0.6;
      dune.position.x = sx; crest.position.x = sx;
      arrows.children.forEach((a, i) => { a.position.x = -5 + ((T * (0.5 + w * 3) + i * 1.3) % 6); a.scale.setScalar(0.5 + w); }); am.opacity = 0.2 + 0.6 * w;
      for (let i = 0; i < NP; i++) { const q = seeds[i]; let x, y, z = (q[1] - 0.5) * D * 0.8;
        if (q[2] < 0.75) { const u = (T * (0.2 + k * 0.8) * (0.5 + q[0]) + q[0]) % 1, hop = Math.abs(Math.sin(u * Math.PI * 5)); x = -5.5 + u * 6.7; y = prof(x) + hop * 0.35 * k + 0.02; }
        else { const u = (T * 0.3 * k + q[0]) % 1; x = 1.25 + u * 2.3; y = Math.max(0.02, prof(x) + 0.03); }
        pa[i * 3] = x + sx; pa[i * 3 + 1] = k > 0.02 ? y : -5; pa[i * 3 + 2] = z; }
      pg.attributes.position.needsUpdate = true;
    },
    api: { labels: { depth: null, sun: 'Kecepatan angin' } },
  });
}

/* ================= BEDAH: KAKTUS ================= */
export function buildCactusDissect(renderer) {
  const S = stage(renderer, ['#8a6a40', '#20160c'], 4.2), r = rng(13);
  const ribs = 12, H = 5.5;
  /* batang berusuk; seperempat bagian dipotong untuk memperlihatkan jaringan */
  const stemG = (rad, h, cut, rib) => { const g = new THREE.CylinderGeometry(rad, rad * 1.05, h, ribs * 6, 30, false, cut ? Math.PI / 2 : 0, cut ? Math.PI * 1.5 : TAU); const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), a = Math.atan2(z, x), rr = Math.hypot(x, z), top = smooth(h / 2 - 0.8, h / 2, y); const k = (1 + rib * 0.12 * Math.cos(a * ribs)) * (1 - top * 0.65); p.setX(i, Math.cos(a) * rr * k); p.setZ(i, Math.sin(a) * rr * k); }
    g.computeVertexNormals(); g.translate(0, h / 2, 0); return g; };
  const outerM = new THREE.MeshPhysicalMaterial({ color: C(0.3, 0.52, 0.28), roughness: 0.35, clearcoat: 0.7, clearcoatRoughness: 0.4 });
  const stem = new THREE.Group(); S.scene.add(stem);
  const kut = S.add('kutikula', new THREE.Mesh(stemG(1.0, H, true, 1), outerM), stem);
  const chl = S.add('klorenkim', new THREE.Mesh(stemG(0.93, H - 0.02, true, 1), new THREE.MeshStandardMaterial({ color: C(0.35, 0.68, 0.3), roughness: 0.6, side: THREE.BackSide })), stem);
  /* bidang potong: lapisan hijau tipis di luar, parenkim penyimpan air pucat di dalam, cincin pembuluh */
  const capM = new THREE.MeshStandardMaterial({ color: C(0.86, 0.9, 0.72), roughness: 0.5, transparent: true, opacity: 0.95, side: THREE.DoubleSide });
  const cutA = new THREE.PlaneGeometry(1, H - 0.8).translate(0.5, (H - 0.8) / 2, 0), cutB = new THREE.PlaneGeometry(1, H - 0.8).translate(0.5, (H - 0.8) / 2, 0).rotateY(-Math.PI / 2);
  const par = S.add('parenkim', new THREE.Mesh(mergeGeometries([cutA, cutB]), capM), stem);
  const ring = []; for (const rr of [0.55]) { ring.push(new THREE.PlaneGeometry(0.05, H - 0.8).translate(rr, (H - 0.8) / 2, 0.005), new THREE.PlaneGeometry(0.05, H - 0.8).translate(rr, (H - 0.8) / 2, 0).rotateY(-Math.PI / 2).translate(-0.005, 0, 0)); }
  S.add('pembuluh', new THREE.Mesh(mergeGeometries(ring), new THREE.MeshStandardMaterial({ color: C(0.55, 0.7, 0.35), side: THREE.DoubleSide })), stem);
  const rimG = [new THREE.PlaneGeometry(0.1, H - 0.8).translate(0.95, (H - 0.8) / 2, 0.006), new THREE.PlaneGeometry(0.1, H - 0.8).translate(0.95, (H - 0.8) / 2, 0).rotateY(-Math.PI / 2).translate(-0.006, 0, 0)];
  S.add('klorenkim', new THREE.Mesh(mergeGeometries(rimG), new THREE.MeshStandardMaterial({ color: C(0.25, 0.6, 0.22), side: THREE.DoubleSide })), stem);
  /* areola dan duri di puncak usuk */
  const spines = [], areo = [];
  for (let k = 0; k < ribs; k++) { const a = k / ribs * TAU; if (a > Math.PI * 0.02 && a < Math.PI / 2 - 0.02) continue; for (let y = 0.5; y < H - 0.6; y += 0.45) { const R = 1.12, x = Math.cos(a) * R, z = Math.sin(a) * R; areo.push(ellG([0.06, 0.06, 0.06], [x, y, z], 6)); for (let q = 0; q < 5; q++) { const d = V(Math.cos(a) + (r() - 0.5) * 0.9, (r() - 0.3) * 0.8, Math.sin(a) + (r() - 0.5) * 0.9).normalize(); spines.push(new THREE.CylinderGeometry(0.004, 0.012, 0.32, 3).translate(0, 0.16, 0).applyQuaternion(new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), d)).translate(x, y, z)); } } }
  S.add('duri', new THREE.Mesh(mergeGeometries(spines), new THREE.MeshStandardMaterial({ color: C(0.92, 0.88, 0.75), roughness: 0.5 })), stem);
  S.add('areola', new THREE.Mesh(mergeGeometries(areo), new THREE.MeshStandardMaterial({ color: C(0.85, 0.82, 0.7), roughness: 0.9 })), stem);
  /* bunga di puncak (opsional, untuk konteks) */
  { const fl = []; for (let k = 0; k < 8; k++) fl.push(new THREE.PlaneGeometry(0.18, 0.35).translate(0, 0.17, 0).rotateX(-0.6).rotateY(k / 8 * TAU).translate(0.2, H + 0.05, 0.6)); stem.add(new THREE.Mesh(mergeGeometries(fl), new THREE.MeshStandardMaterial({ color: C(0.98, 0.9, 0.7), side: THREE.DoubleSide }))); }
  /* stomata: titik di permukaan yang terbuka saat malam; CO2 masuk (biru) */
  const co2 = S.mkFlow(Array.from({ length: 6 }, (_, i) => { const a = Math.PI * 0.6 + i * 0.45, y = 1 + i * 0.6; return [[Math.cos(a) * 2.2, y + 0.3, Math.sin(a) * 2.2], [Math.cos(a) * 1.15, y, Math.sin(a) * 1.15], [Math.cos(a) * 0.8, y - 0.1, Math.sin(a) * 0.8]]; }), new THREE.Color(0.6, 1.4, 2.4), 60, 0.07, { amt: (st) => 1 - smooth(0.3, 0.5, st.day), spd: 0.25, jit: 0.04 });
  const vap = S.mkFlow(Array.from({ length: 6 }, (_, i) => { const a = Math.PI * 0.6 + i * 0.45, y = 1 + i * 0.6; return [[Math.cos(a) * 1.0, y, Math.sin(a) * 1.0], [Math.cos(a) * 1.2, y + 0.1, Math.sin(a) * 1.2], [Math.cos(a) * 2.2, y + 0.8, Math.sin(a) * 2.2]]; }), new THREE.Color(2.2, 2.2, 2.4), 30, 0.05, { amt: (st) => (1 - smooth(0.3, 0.5, st.day)) * 0.25, spd: 0.2, jit: 0.05 });
  const sunL = new THREE.DirectionalLight(0xffe2b0, 0); sunL.position.set(4, 8, 3); S.scene.add(sunL);
  const state = { yaw: 0.55, yaw0: 0.55, pitch: 0.3, dist: 12, user: false, sun: 0.7, depth: 0, depthT: 0.8, day: 1, w: 0.8 };
  return S.finish(state, V(0, 2.4, 0), {
    tick(dt, T, st) {
      st.day += (st.sun - st.day) * Math.min(1, dt * 3); st.w += (st.depthT - st.w) * Math.min(1, dt * 2);
      /* kaktus mengembang saat air banyak dan mengerut (usuk makin dalam) saat kering */
      const s = 0.82 + 0.18 * st.w; stem.scale.set(s, 1, s);
      S.scene.background && (S.scene.backgroundIntensity = 0.35 + 0.65 * st.day); sunL.intensity = 1.6 * st.day;
      capM.color.copy(C(0.86, 0.9, 0.72)).lerp(C(0.78, 0.8, 0.6), 1 - st.w);
    },
    api: { labels: { depth: 'Air tersimpan', sun: 'Siang / malam' }, depthFor: (id) => state.depthT },
  });
}
