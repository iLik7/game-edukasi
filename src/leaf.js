import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import { terrainU } from './terrain.js';

/* DAUN & FOTOSINTESIS.
   Satu adegan dengan tiga tingkat perbesaran: helai daun -> penampang jaringan daun -> kloroplas.
   Minigame: atur cahaya, CO2, dan air; laju fotosintesis mengikuti faktor pembatas (hukum Blackman),
   stomata menutup saat gelap atau kekurangan air. */

const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
function tex(N, draw, srgb = true) { const c = document.createElement('canvas'); c.width = c.height = N; draw(c.getContext('2d'), N); const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }

/* bentuk daun jati: bulat telur lebar, ujung meruncing, tulang menyirip */
function leafOutline(u) { /* u: 0 pangkal .. 1 ujung -> setengah lebar (0..1) */ return Math.pow(Math.sin(Math.PI * Math.pow(u, 0.8)), 0.85) * (1 - 0.25 * u * u); }
function teakLeafTex(N = 512) {
  return tex(N, (x) => {
    x.clearRect(0, 0, N, N);
    const g = x.createLinearGradient(0, 0, 0, N); g.addColorStop(0, '#3f6b22'); g.addColorStop(0.5, '#5d8f2e'); g.addColorStop(1, '#3f6b22');
    x.fillStyle = g; x.beginPath();
    for (let i = 0; i <= 60; i++) { const u = i / 60; x.lineTo(u * N, N / 2 - leafOutline(u) * N * 0.47); }
    for (let i = 60; i >= 0; i--) { const u = i / 60; x.lineTo(u * N, N / 2 + leafOutline(u) * N * 0.47); }
    x.fill();
    x.strokeStyle = 'rgba(210,220,150,0.75)'; x.lineWidth = 6; x.beginPath(); x.moveTo(0, N / 2); x.lineTo(N, N / 2); x.stroke();
    x.lineWidth = 3;
    for (let i = 1; i <= 9; i++) { const u = i / 10.5; for (const s of [1, -1]) { x.beginPath(); x.moveTo(u * N, N / 2); x.quadraticCurveTo((u + 0.06) * N, N / 2 - s * leafOutline(u) * N * 0.25, (u + 0.12) * N, N / 2 - s * leafOutline(Math.min(1, u + 0.12)) * N * 0.44); x.stroke(); } }
    x.strokeStyle = 'rgba(200,215,140,0.25)'; x.lineWidth = 1; const r = rng(4);
    for (let i = 0; i < 400; i++) { const px = r() * N, py = r() * N; x.beginPath(); x.moveTo(px, py); x.lineTo(px + (r() - 0.5) * 30, py + (r() - 0.5) * 30); x.stroke(); }
  });
}
let TEAK = null; const teak = () => TEAK || (TEAK = teakLeafTex());

/* ================= ANAKAN JATI DI DUNIA ================= */
export function buildSapling(scene, x, y, z) {
  const r = rng(12), g = new THREE.Group();
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.045, 2.2, 8), new THREE.MeshStandardMaterial({ color: C(0.45, 0.38, 0.28), roughness: 0.9 }));
  stem.position.y = 1.1; stem.castShadow = true; g.add(stem);
  const leafM = new THREE.MeshStandardMaterial({ map: teak(), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.65 });
  leafM.onBeforeCompile = (sh) => { sh.uniforms.uTime = terrainU.uTime; sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;').replace('#include <begin_vertex>', '#include <begin_vertex>\ntransformed.y += sin(uTime * 2.0 + position.x * 3.0 + position.z * 2.0) * 0.02;'); };
  const geos = [];
  for (let i = 0; i < 10; i++) {
    const h = 0.7 + i * 0.16, a = i * 2.4 + r() * 0.4, L = 0.45 + (1 - i / 10) * 0.25;
    const p = new THREE.PlaneGeometry(L, L * 0.75, 6, 4); p.translate(L / 2 + 0.03, 0, 0);
    const pos = p.attributes.position; for (let k = 0; k < pos.count; k++) { const px = pos.getX(k), py = pos.getY(k); pos.setZ(k, -Math.abs(py) * 0.25 - px * px * 0.25); }
    p.rotateX(-Math.PI / 2 + 0.25); p.rotateY(a); p.translate(0, h, 0); geos.push(p);
  }
  const lv = new THREE.Mesh(mergeGeometries(geos), leafM); lv.castShadow = true; lv.userData.noAO = true; g.add(lv);
  g.position.set(x, y, z); scene.add(g); return g;
}

/* ================= ADEGAN BEDAH DAUN ================= */
export function rateOf(L, Cc, W) {
  const open = smooth(0.12, 0.45, W) * smooth(0.03, 0.25, L);         /* bukaan stomata */
  const fL = Math.min(1, L / 0.75), fC = Math.min(1, (Cc * (0.25 + 0.75 * open)) / 0.6), fW = Math.min(1, W / 0.45);
  const rate = Math.min(fL, fC, fW), lim = rate === fL ? 'cahaya' : rate === fW ? 'air' : 'karbon dioksida';
  return { rate, lim, open, fL, fC, fW };
}

export function buildLeafDissect(renderer) {
  const scene = new THREE.Scene();
  { const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d'); const g = x.createRadialGradient(256, 220, 20, 256, 256, 420); g.addColorStop(0, '#3c5a2a'); g.addColorStop(0.55, '#16240f'); g.addColorStop(1, '#05090e'); x.fillStyle = g; x.fillRect(0, 0, 512, 512); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t; }
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.55;
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120);
  const sun = new THREE.DirectionalLight(0xfff3d6, 2.4); sun.position.set(3, 10, 6); scene.add(sun);
  { const rim = new THREE.DirectionalLight(0x9fd6ff, 1.0); rim.position.set(-6, 2, -5); scene.add(rim); }
  const G = [new THREE.Group(), new THREE.Group(), new THREE.Group()]; G.forEach((g) => scene.add(g));
  const layerMeshes = [], ent = {};
  const reg = (id, m) => { (ent[id] || (ent[id] = { mats: [], meshes: [] })); if (!ent[id].mats.includes(m.material)) ent[id].mats.push(m.material); ent[id].meshes.push(m); m.userData.layer = id; layerMeshes.push(m); };
  const add = (lv, id, mesh) => { G[lv].add(mesh); reg(id, mesh); return mesh; };
  const pm = (o) => new THREE.MeshPhysicalMaterial(Object.assign({ roughness: 0.5 }, o));
  const inst = (geo, mat, list) => { const m = new THREE.InstancedMesh(geo, mat, list.length), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(); list.forEach((t, i) => { q.setFromEuler(new THREE.Euler(t.rx || 0, t.ry || 0, t.rz || 0)); m4.compose(t.p, q, t.s); m.setMatrixAt(i, m4); }); return m; };
  const r = rng(21);

  /* ---------- tingkat 0: helai daun ---------- */
  const surfY = (x, z) => 0.18 * Math.abs(z) - 0.035 * x * x + 0.15;
  { const p = new THREE.PlaneGeometry(6.6, 4, 44, 26); p.rotateX(-Math.PI / 2); const pos = p.attributes.position;
    for (let i = 0; i < pos.count; i++) pos.setY(i, surfY(pos.getX(i), pos.getZ(i)));
    p.computeVertexNormals();
    add(0, 'helai', new THREE.Mesh(p, pm({ map: teak(), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.55, clearcoat: 0.3 })));
    const vein = [], along = (x0, z0, x1, z1, n = 12) => { const pts = []; for (let i = 0; i <= n; i++) { const t = i / n, x = lerp(x0, x1, t), z = lerp(z0, z1, t) + Math.sin(t * Math.PI) * (z1 - z0) * 0.12; pts.push(V(x, surfY(x, z) + 0.02, z)); } return pts; };
    vein.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(along(-3.3, 0, 3.25, 0, 30)), 60, 0.05, 6));
    for (let i = 1; i <= 9; i++) { const u = i / 10.5, x0 = -3.3 + u * 6.6, x1 = -3.3 + (u + 0.12) * 6.6; for (const s of [1, -1]) vein.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(along(x0, 0, x1, s * leafOutline(Math.min(1, u + 0.12)) * 1.85)), 16, 0.022, 5)); }
    add(0, 'tulang', new THREE.Mesh(mergeGeometries(vein), pm({ color: C(0.82, 0.86, 0.6), roughness: 0.5 })));
    add(0, 'tangkai', new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([V(-3.25, surfY(-3.25, 0), 0), V(-4.0, surfY(-3.25, 0) - 0.25, 0), V(-4.8, surfY(-3.25, 0) - 0.75, 0.1)]), 16, 0.08, 8), pm({ color: C(0.55, 0.62, 0.32), roughness: 0.6 })));
  }

  /* ---------- tingkat 1: penampang jaringan ---------- */
  const STOMA = [-2.4, 1.1, 2.7];
  { const XS = 3.5, ZS = 1.5;
    add(1, 'kutikula', new THREE.Mesh(new THREE.BoxGeometry(XS * 2, 0.1, ZS * 2), pm({ color: C(0.95, 0.92, 0.7), roughness: 0.08, transmission: 0.5, transparent: true, opacity: 0.6, clearcoat: 1 }))).position.y = 1.5;
    const epiM = pm({ color: C(0.8, 0.9, 0.78), roughness: 0.3, transparent: true, opacity: 0.45, depthWrite: false });
    const cells = (y, skip) => { const L = []; for (let i = 0; i < 15; i++) for (let k = 0; k < 6; k++) { const x = -XS + 0.23 + i * 0.47, z = -ZS + 0.25 + k * 0.5; if (skip && STOMA.some((s) => Math.abs(x - s) < 0.3 && Math.abs(z) < 0.3)) continue; L.push({ p: V(x, y, z), s: V(0.44, 0.28, 0.47) }); } return L; };
    const box = new THREE.BoxGeometry(1, 1, 1);
    add(1, 'epidermis', inst(box, epiM, cells(1.3, false)));
    add(1, 'epidermis', inst(box, epiM, cells(-1.2, true)));
    /* palisade: sel tiang berisi banyak kloroplas */
    const pal = [], chl = [];
    for (let i = 0; i < 17; i++) for (let k = 0; k < 7; k++) { const x = -XS + 0.2 + i * 0.41, z = -ZS + 0.2 + k * 0.43; pal.push({ p: V(x, 0.68, z), s: V(1, 1, 1) }); for (let c = 0; c < 6; c++) chl.push({ p: V(x + (r() - 0.5) * 0.18, 0.3 + r() * 0.75, z + (r() - 0.5) * 0.18), s: V(0.05, 0.035, 0.035), ry: r() * 3 }); }
    add(1, 'palisade', inst(new THREE.CapsuleGeometry(0.17, 0.56, 4, 10), pm({ color: C(0.45, 0.74, 0.3), roughness: 0.4, transparent: true, opacity: 0.6, depthWrite: false }), pal));
    /* bunga karang: sel tak beraturan dengan rongga udara */
    const spo = [];
    for (let n = 0; n < 160 && spo.length < 70; n++) { const x = -XS + 0.3 + r() * (XS * 2 - 0.6), y = -0.85 + r() * 0.85, z = -ZS + 0.3 + r() * (ZS * 2 - 0.6); if (Math.abs(x) < 0.75 && y < 0.05) continue; if (STOMA.some((s) => Math.abs(x - s) < 0.35 && y < -0.55)) continue; if (spo.some((q) => q.p.distanceTo(V(x, y, z)) < 0.42)) continue; spo.push({ p: V(x, y, z), s: V(0.28, 0.2, 0.26), ry: r() * 3 }); for (let c = 0; c < 3; c++) chl.push({ p: V(x + (r() - 0.5) * 0.25, y + (r() - 0.5) * 0.15, z + (r() - 0.5) * 0.25), s: V(0.05, 0.035, 0.035), ry: r() * 3 }); }
    add(1, 'bunga_karang', inst(new THREE.SphereGeometry(1, 12, 9), pm({ color: C(0.7, 0.86, 0.5), roughness: 0.45, transparent: true, opacity: 0.6, depthWrite: false }), spo));
    const chlM = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 8, 6), pm({ color: C(0.18, 0.55, 0.12), roughness: 0.35 }), chl.length); { const m4 = new THREE.Matrix4(); chl.forEach((t, i) => { m4.compose(t.p, new THREE.Quaternion().setFromEuler(new THREE.Euler(0, t.ry, 0)), t.s); chlM.setMatrixAt(i, m4); }); }
    add(1, 'kloroplas', chlM);
    /* berkas pengangkut (tulang daun kecil): xilem di atas, floem di bawah, dibungkus sel seludang */
    const vb = [];
    for (let a = 0; a < 12; a++) { const t = a / 12 * TAU; vb.push({ p: V(Math.cos(t) * 0.55, -0.4 + Math.sin(t) * 0.42, 0), s: V(0.13, 0.13, ZS), rx: Math.PI / 2 }); }
    add(1, 'berkas', inst(new THREE.CylinderGeometry(1, 1, 2, 10), pm({ color: C(0.8, 0.85, 0.6), roughness: 0.5 }), vb));
    const xy = [-0.2, 0, 0.2].map((x) => ({ p: V(x, -0.25, 0), s: V(0.08, ZS, 0.08), rx: Math.PI / 2 }));
    const fl = [-0.15, 0.05, 0.22].map((x) => ({ p: V(x, -0.58, 0), s: V(0.05, ZS, 0.05), rx: Math.PI / 2 }));
    add(1, 'berkas', inst(new THREE.CylinderGeometry(1, 1, 2, 10), pm({ color: C(0.35, 0.55, 0.85), roughness: 0.4 }), xy));
    add(1, 'berkas', inst(new THREE.CylinderGeometry(1, 1, 2, 8), pm({ color: C(0.85, 0.7, 0.3), roughness: 0.4 }), fl));
  }
  /* stomata: dua sel penjaga berbentuk ginjal yang bisa membuka-menutup */
  const guards = [];
  { const gm = pm({ color: C(0.45, 0.72, 0.3), roughness: 0.35 });
    for (const x of STOMA) for (const s of [1, -1]) { const g = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.08, 8, 16, Math.PI), gm); g.rotation.set(-Math.PI / 2, 0, s > 0 ? -Math.PI / 2 : Math.PI / 2); g.position.set(x, -1.22, 0); g.userData.sx = x; g.userData.s = s; add(1, 'stomata', g); guards.push(g); } }

  /* ---------- tingkat 2: kloroplas ---------- */
  let granaPos = [];
  { add(2, 'membran', new THREE.Mesh(new THREE.SphereGeometry(1, 40, 28).scale(3.3, 1.45, 1.9), pm({ color: C(0.55, 0.85, 0.45), roughness: 0.15, transparent: true, opacity: 0.25, depthWrite: false, clearcoat: 1, side: THREE.DoubleSide })));
    add(2, 'stroma', new THREE.Mesh(new THREE.SphereGeometry(1, 36, 24).scale(3.1, 1.32, 1.75), pm({ color: C(0.75, 0.9, 0.55), roughness: 0.6, transparent: true, opacity: 0.35, depthWrite: false })));
    const discs = [], lam = [];
    for (let n = 0; n < 60 && granaPos.length < 14; n++) { const x = (r() - 0.5) * 4.6, z = (r() - 0.5) * 2.2; if ((x / 2.7) ** 2 + (z / 1.4) ** 2 > 1) continue; if (granaPos.some((p) => Math.hypot(p.x - x, p.z - z) < 0.85)) continue; granaPos.push(V(x, (r() - 0.5) * 0.3, z)); }
    granaPos.forEach((p) => { const h = 5 + Math.floor(r() * 4); for (let k = 0; k < h; k++) discs.push({ p: V(p.x, p.y - h * 0.055 + k * 0.11, p.z), s: V(0.36, 0.035, 0.36) }); });
    granaPos.forEach((p, i) => { const q = granaPos[(i + 3) % granaPos.length]; const d = q.clone().sub(p), L = d.length(); if (L > 2.4) return; const b = new THREE.BoxGeometry(L, 0.025, 0.12); b.rotateY(-Math.atan2(d.z, d.x)); b.translate((p.x + q.x) / 2, (p.y + q.y) / 2, (p.z + q.z) / 2); lam.push(b); });
    const gmat = pm({ color: C(0.12, 0.5, 0.12), roughness: 0.35, clearcoat: 0.4 });
    add(2, 'grana', inst(new THREE.CylinderGeometry(1, 1, 1, 20), gmat, discs));
    if (lam.length) add(2, 'grana', new THREE.Mesh(mergeGeometries(lam), gmat));
  }

  /* ---------- partikel aliran ---------- */
  const dot = tex(64, (x, N) => { const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.55, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, N, N); }, false);
  const flows = [];
  const mkFlow = (lv, paths, col, n, size, kind) => { const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3)); const p = new THREE.Points(geo, new THREE.PointsMaterial({ map: dot, color: col, size, transparent: true, depthWrite: false })); p.frustumCulled = false; p.userData.noAO = true; G[lv].add(p);
    const curves = paths.map((ps) => new THREE.CatmullRomCurve3(ps.map((q) => V(...q)))); flows.push({ p, curves, n, kind, lv, u: Array.from({ length: n }, () => r()), c: Array.from({ length: n }, (_, i) => i % curves.length), j: Array.from({ length: n }, () => [(r() - 0.5) * 0.15, (r() - 0.5) * 0.15]) }); };
  const CO2c = new THREE.Color(1.6, 1.6, 1.6), O2c = new THREE.Color(0.6, 2.2, 2.6), H2Oc = new THREE.Color(0.4, 1.0, 2.8), SUGc = new THREE.Color(2.6, 1.5, 0.3), PHOc = new THREE.Color(3.0, 2.6, 0.6);
  /* tingkat 0: O2 keluar dari permukaan bawah daun, CO2 masuk */
  mkFlow(0, Array.from({ length: 10 }, (_, i) => { const x = -2.6 + i * 0.55, z = (r() - 0.5) * 2; return [[x, surfY(x, z) - 0.05, z], [x + 0.3, -1.0, z + 0.2], [x + 0.5, -2.2, z]]; }), O2c, 50, 0.12, 'o2');
  mkFlow(0, Array.from({ length: 10 }, (_, i) => { const x = -2.4 + i * 0.5, z = (r() - 0.5) * 2; return [[x - 0.4, -2.4, z], [x - 0.2, -1.2, z - 0.2], [x, surfY(x, z) - 0.05, z]]; }), CO2c, 40, 0.1, 'co2');
  mkFlow(0, [[[-4.8, surfY(-3.25, 0) - 0.7, 0.1], [-3.3, surfY(-3.3, 0) + 0.04, 0], [3.2, surfY(3.2, 0) + 0.04, 0]]], H2Oc, 30, 0.12, 'h2o');
  /* tingkat 1: lewat stomata */
  mkFlow(1, STOMA.map((x) => [[x, -2.3, 0.3], [x, -1.22, 0], [x + 0.2, -0.7, 0.2], [x + 0.1, 0.4, -0.2]]), CO2c, 45, 0.1, 'co2');
  mkFlow(1, STOMA.map((x) => [[x - 0.3, 0.3, 0.2], [x - 0.1, -0.7, 0], [x, -1.22, 0], [x - 0.2, -2.4, -0.3]]), O2c, 45, 0.11, 'o2');
  mkFlow(1, [[[0, -0.25, -1.5], [0, -0.25, 0], [0, 0.0, 0.4], [-0.8, 0.6, 0.6], [-2.2, 0.8, 0.2]], [[0.2, -0.25, -1.5], [0.2, -0.25, 0], [0.4, 0.1, 0], [1.6, 0.7, -0.4]]], H2Oc, 40, 0.1, 'h2o');
  mkFlow(1, [[[-1.8, 0.6, 0.3], [-0.6, -0.2, 0.2], [0.05, -0.58, 0], [0.05, -0.58, 1.6]], [[2.0, 0.6, -0.4], [0.6, -0.3, 0], [0.22, -0.58, 0], [0.22, -0.58, 1.6]]], SUGc, 30, 0.1, 'sug');
  /* tingkat 2: cahaya ke grana, O2 keluar dari grana, CO2 ke stroma, gula keluar */
  mkFlow(2, granaPos.slice(0, 8).map((p) => [[p.x + 1.2, 4, p.z], [p.x + 0.4, 1.4, p.z], [p.x, p.y, p.z]]), PHOc, 40, 0.14, 'pho');
  mkFlow(2, granaPos.slice(0, 8).map((p) => [[p.x, p.y, p.z], [p.x * 1.2, p.y + 0.8, p.z * 1.3], [p.x * 1.6, p.y + 2.6, p.z * 1.8]]), O2c, 35, 0.12, 'o2');
  mkFlow(2, [[[-5, -0.5, 1.5], [-2.6, -0.3, 0.6], [-1, 0, 0]], [[5, 0.4, -1.5], [2.6, 0.2, -0.6], [1, 0, 0.2]]], CO2c, 30, 0.1, 'co2');
  mkFlow(2, [[[0, -0.2, 0], [0.6, -1.0, 0.5], [1.2, -3.2, 1.2]], [[-0.4, 0.1, 0.2], [-1, -1.1, -0.3], [-1.6, -3.2, -1.0]]], SUGc, 24, 0.13, 'sug');

  const state = { yaw: 0.6, yaw0: 0.6, pitch: 0.45, dist: 13, user: false, sun: 0.7, depth: 0, depthT: 0, co2: 0.6, h2o: 0.8, hold: 0, ok: false };
  for (const id in ent) for (const m of ent[id].mats) { m.userData.base = m.color.clone(); m.userData.op = m.opacity; }
  const dimC = new THREE.Color(0.25, 0.28, 0.3), k = {}; for (const id in ent) k[id] = 0;
  const LV = { helai: 0, tulang: 0, tangkai: 0, kutikula: 1, epidermis: 1, palisade: 1, bunga_karang: 1, berkas: 1, stomata: 1, kloroplas: 1, membran: 2, stroma: 2, grana: 2 };
  const target = V(0, 0, 0);
  return {
    scene, camera, layerMeshes, state, waterFlow: { pts: {} }, sugarFlow: { pts: {} },
    depthFor: (id) => [0, 0.5, 1][LV[id] ?? 0],
    rate: () => rateOf(state.sun, state.co2, state.h2o),
    update(dt, T, selected, hovered) {
      if (!state.user) state.yaw = state.yaw0 + 0.3 * Math.sin(T * 0.3);
      const cp = Math.cos(state.pitch), sp = Math.sin(state.pitch);
      camera.position.set(target.x + Math.sin(state.yaw) * cp * state.dist, target.y + sp * state.dist, target.z + Math.cos(state.yaw) * cp * state.dist); camera.lookAt(target);
      state.depth += (state.depthT - state.depth) * Math.min(1, dt * 4); const z = state.depth;
      /* transisi "zoom" antar tingkat */
      const w0 = 1 - smooth(0.18, 0.36, z), w2 = smooth(0.66, 0.84, z), w1 = 1 - w0 - w2;
      G[0].visible = w0 > 0.03; G[0].scale.setScalar(lerp(5, 1, w0));
      G[1].visible = w1 > 0.03; G[1].scale.setScalar(z < 0.5 ? lerp(0.2, 1, w1) : lerp(5, 1, w1));
      G[2].visible = w2 > 0.03; G[2].scale.setScalar(lerp(0.2, 1, w2));
      sun.intensity = 0.4 + 2.4 * state.sun;
      const R = rateOf(state.sun, state.co2, state.h2o); state.R = R;
      for (const g of guards) g.position.x = g.userData.sx + g.userData.s * (0.13 + 0.09 * R.open);
      /* sukses: laju >= 95% selama 2 detik */
      if (R.rate > 0.95) state.hold += dt; else state.hold = 0; if (state.hold > 2 && !state.ok) state.ok = true;
      for (const F of flows) {
        if (!G[F.lv].visible) { F.p.visible = false; continue; }
        const amt = F.kind === 'pho' ? state.sun : F.kind === 'h2o' ? state.h2o * 0.5 + R.rate * 0.5 : F.kind === 'co2' ? R.open * state.co2 : R.rate;
        F.p.visible = amt > 0.02; if (!F.p.visible) continue;
        const pos = F.p.geometry.attributes.position, spd = 0.06 + 0.3 * amt, act = Math.ceil(F.n * clamp(amt, 0.1, 1));
        for (let i = 0; i < F.n; i++) {
          if (i >= act) { pos.setXYZ(i, 0, -999, 0); continue; }
          F.u[i] += spd * dt; if (F.u[i] > 1) { F.u[i] -= 1; F.c[i] = Math.floor(r() * F.curves.length); }
          const p = F.curves[F.c[i]].getPoint(F.u[i]); pos.setXYZ(i, p.x + F.j[i][0], p.y + F.j[i][1], p.z);
        }
        pos.needsUpdate = true;
      }
      for (const id in ent) {
        const dim = selected && selected !== id && LV[selected] === LV[id] ? 1 : 0; k[id] += (dim - k[id]) * Math.min(1, dt * 8);
        const glow = selected === id ? 0.18 : (hovered === id ? 0.08 : 0);
        for (const m of ent[id].mats) { if (!m.userData.base) continue; m.color.copy(m.userData.base).lerp(dimC, k[id] * 0.55); if (m.emissive) m.emissive.copy(m.userData.base).multiplyScalar(glow); }
      }
    },
  };
}
