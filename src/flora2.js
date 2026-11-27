import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import { stage } from './geo.js';

/* FLORA BARU: anggrek bulan, kopi arabika, pisang, seroja (lotus), lamun. Dunia + bedah statis. */
const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ni = (g) => (g.index ? g.toNonIndexed() : g);
const mg = (a) => mergeGeometries(a.map(ni));
const ellG = (r, p, seg = 10) => new THREE.SphereGeometry(1, seg, Math.max(6, seg * 0.7 | 0)).scale(r[0], r[1], r[2]).translate(p[0], p[1], p[2]);
const tubeG = (pts, r, seg = 12, rs = 6) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => V(...p))), seg, r, rs);
const M = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: C(...c), roughness: 0.7 }, o));
const lowAt = (H, x, z, rad) => { let m = H(x, z); for (let k = 0; k < 6; k++) { const a = k / 6 * TAU; m = Math.min(m, H(x + Math.cos(a) * rad, z + Math.sin(a) * rad)); } return m; };
/* helai daun melengkung (pangkal di 0, memanjang ke +z) */
function leaf(w, L, a0, a1, segs = 6, wseg = 2) {
  const g = new THREE.PlaneGeometry(1, 1, wseg, segs), p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const u = p.getX(i), v = p.getY(i) + 0.5; let y = 0, z = 0; for (let k = 0; k < 8; k++) { const t = (k + 0.5) / 8 * v, a = a0 + (a1 - a0) * t; y += Math.cos(a) * L * v / 8; z += Math.sin(a) * L * v / 8; } p.setXYZ(i, u * w * Math.pow(Math.sin(Math.PI * (0.06 + 0.94 * v)), 0.6), y + 0.1 * Math.abs(u) * w, z); }
  g.computeVertexNormals(); return g;
}

/* ---------- bentuk bersama ---------- */
/* bunga anggrek bulan: 3 sepal, 2 petal lebar, labelum di tengah */
function orchidFlower(s = 1) {
  const W = [], L = [];
  for (const a of [0, 2.2, -2.2]) W.push(ellG([0.09 * s, 0.22 * s, 0.02 * s], [Math.sin(a) * 0.2 * s, Math.cos(a) * 0.2 * s, 0], 10).rotateZ(-a).translate(0, 0, 0));
  for (const sd of [1, -1]) W.push(ellG([0.26 * s, 0.24 * s, 0.02 * s], [sd * 0.22 * s, 0.02 * s, 0.01 * s], 12));
  L.push(ellG([0.08 * s, 0.12 * s, 0.05 * s], [0, -0.1 * s, 0.05 * s], 8), ellG([0.04 * s, 0.03 * s, 0.03 * s], [0, 0.02 * s, 0.06 * s], 6));
  return { petals: mg(W), lip: mg(L) };
}
function orchidPlant(r, s = 1) {
  const leaves = [], roots = [], spike = [], P = [], Lp = [];
  for (let k = 0; k < 4; k++) leaves.push(leaf(0.36 * s, (0.7 + r() * 0.2) * s, 1.2, 1.9, 5).rotateY(k * Math.PI + (k > 1 ? 0.35 : 0)).translate(0, k * 0.05 * s, 0));
  for (let k = 0; k < 7; k++) { const a = r() * TAU, L = (0.5 + r() * 0.6) * s; roots.push(tubeG([[0, 0, 0], [Math.cos(a) * L * 0.4, -0.1 * s, Math.sin(a) * L * 0.4], [Math.cos(a) * L, -0.3 * s - r() * 0.3 * s, Math.sin(a) * L]], 0.025 * s, 8, 5)); }
  const sp = [[0, 0.1 * s, 0.1 * s], [0.1 * s, 0.6 * s, 0.35 * s], [0.25 * s, 0.85 * s, 0.75 * s], [0.4 * s, 0.75 * s, 1.15 * s]];
  spike.push(tubeG(sp, 0.012 * s, 16, 4)); const cv = new THREE.CatmullRomCurve3(sp.map((p) => V(...p)));
  for (let k = 0; k < 5; k++) { const t = 0.45 + k * 0.12, p = cv.getPoint(Math.min(1, t)), f = orchidFlower(0.55 * s); P.push(f.petals.rotateY(0.6).translate(p.x, p.y - 0.12 * s, p.z)); Lp.push(f.lip.rotateY(0.6).translate(p.x, p.y - 0.12 * s, p.z)); }
  return { leaves: mg(leaves), roots: mg(roots), spike: mg(spike), petals: mg(P), lip: mg(Lp) };
}
/* semak kopi: batang utama, cabang mendatar berpasangan, daun mengilap, buah ceri di ketiak daun */
function coffeeBush(r, s = 1, dense = true) {
  const W = [], Lv = [], Ch = [], Fl = [];
  W.push(new THREE.CylinderGeometry(0.03 * s, 0.05 * s, 1.8 * s, 6).translate(0, 0.9 * s, 0));
  for (let k = 0; k < 9; k++) { const y = (0.4 + k * 0.15) * s, L = (0.75 - k * 0.06) * s; for (const sd of [0, Math.PI]) { const a = k * 1.57 + sd, ex = Math.cos(a) * L, ez = Math.sin(a) * L; W.push(tubeG([[0, y, 0], [ex * 0.5, y + 0.05 * s, ez * 0.5], [ex, y - 0.08 * s, ez]], 0.012 * s, 4, 3));
    for (let q = 1; q <= 4; q++) { const t = q / 4.5, px = ex * t, pz = ez * t, py = y + 0.03 * s - t * 0.1 * s; for (const sg of [1, -1]) Lv.push(leaf(0.13 * s, 0.3 * s, 1.1, 1.75, 4, 1).rotateY(a + sg * 1.3).translate(px, py, pz));
      for (let c = 0; c < (dense ? 4 : (q % 2 ? 2 : 0)); c++) { const cp = [px + (r() - 0.5) * 0.05 * s, py - 0.03 * s, pz + (r() - 0.5) * 0.05 * s]; Ch.push(ellG([0.035 * s, 0.04 * s, 0.035 * s], cp, 6)); Fl.push(ellG([0.03 * s, 0.015 * s, 0.03 * s], [cp[0], cp[1] + 0.03 * s, cp[2]], 5)); } } } }
  return { wood: mg(W), leaves: mg(Lv), cherries: mg(Ch), flowers: mg(Fl) };
}
/* pisang: batang semu dari pelepah, daun lebar, tandan, jantung */
function bananaPlant(r, s = 1) {
  const H = 2.4 * s, St = [], Lv = [], Fr = [], He = [];
  St.push(new THREE.CylinderGeometry(0.13 * s, 0.2 * s, H, 14).translate(0, H / 2, 0));
  for (let k = 0; k < 8; k++) Lv.push(leaf(0.55 * s, (1.6 + r() * 0.6) * s, 0.25 + r() * 0.25, 1.75 + r() * 0.4, 7).rotateY(k * 2.4).translate(0, H - 0.1 * s, 0));
  const fx = 0.3 * s; St.push(tubeG([[0, H - 0.1 * s, 0], [fx, H - 0.35 * s, 0], [fx + 0.18 * s, H - 1.4 * s, 0]], 0.035 * s, 8, 5));
  for (let h = 0; h < 5; h++) for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 1.3 - 0.6, y = H - 0.5 * s - h * 0.17 * s; Fr.push(new THREE.CapsuleGeometry(0.04 * s, 0.2 * s, 2, 6).rotateZ(-0.6).rotateY(a).translate(fx + 0.08 * s + Math.cos(a) * 0.12 * s, y, Math.sin(a) * 0.12 * s)); }
  He.push(ellG([0.1 * s, 0.2 * s, 0.1 * s], [fx + 0.18 * s, H - 1.5 * s, 0], 10));
  return { stem: mg(St), leaves: mg(Lv), fruit: mg(Fr), heart: mg(He), H };
}
/* seroja: daun bundar mengapung/terangkat, bunga merah muda, polong biji */
function lotusClump(r, s = 1) {
  const Lv = [], St = [], Fl = [], Pd = [];
  for (let k = 0; k < 7; k++) { const a = r() * TAU, d = (0.3 + r() * 0.9) * s, up = r() < 0.5 ? (0.3 + r() * 0.6) * s : 0.02, R = (0.32 + r() * 0.18) * s, x = Math.cos(a) * d, z = Math.sin(a) * d;
    const g = new THREE.CircleGeometry(R, 20), p = g.attributes.position; for (let i = 0; i < p.count; i++) { const rr = Math.hypot(p.getX(i), p.getY(i)) / R; p.setZ(i, -0.06 * s * (1 - rr) + (up > 0.1 ? 0.04 * s * rr * rr : 0)); } g.rotateX(-Math.PI / 2).translate(x, up, z); Lv.push(g);
    if (up > 0.1) St.push(tubeG([[x * 0.6, -0.6 * s, z * 0.6], [x, up - 0.02, z]], 0.015 * s, 4, 4)); }
  for (let f = 0; f < 2; f++) { const a = r() * TAU, d = 0.4 * s, x = Math.cos(a) * d, z = Math.sin(a) * d, y = (0.7 + r() * 0.4) * s; St.push(tubeG([[x * 0.5, -0.6 * s, z * 0.5], [x, y, z]], 0.015 * s, 4, 4));
    for (let p = 0; p < 12; p++) { const b = p / 12 * TAU, tilt = p < 6 ? 0.5 : 0.9; Fl.push(ellG([0.06 * s, 0.14 * s, 0.03 * s], [0, 0.12 * s, 0], 8).rotateX(tilt).rotateY(b).translate(x, y, z)); }
    Pd.push(new THREE.CylinderGeometry(0.06 * s, 0.04 * s, 0.07 * s, 10).translate(x, y + 0.06 * s, z)); }
  return { leaves: mg(Lv), stems: mg(St), flowers: mg(Fl), pod: mg(Pd) };
}
/* lamun: daun pita panjang dari rimpang di pasir */
function seagrass(r, s = 1, n = 9) {
  const Lv = [], Rz = [];
  for (let k = 0; k < n; k++) { const x = (k - n / 2) * 0.12 * s, a = (r() - 0.5) * 0.6; Lv.push(leaf(0.05 * s, (0.5 + r() * 0.5) * s, 0.05, 0.3 + r() * 0.4, 6, 1).rotateY(a + Math.PI / 2).translate(x, 0, 0)); }
  Rz.push(tubeG([[-n * 0.07 * s, -0.03, 0], [0, -0.05, 0.02], [n * 0.07 * s, -0.03, 0]], 0.02 * s, 10, 5));
  return { leaves: mg(Lv), rhizome: mg(Rz) };
}

/* ================= DUNIA ================= */
export function buildFlora2World(scene, H, WATER, o) {
  const G = new THREE.Group(); scene.add(G); const r = rng(1717), upd = [];
  /* anggrek bulan menempel di batang pohon raksasa */
  { const [x, z, gy] = o.anggrek, base = H(x, z), pl = orchidPlant(r, 1.0), mats = [M([0.22, 0.42, 0.18], { side: THREE.DoubleSide }), M([0.75, 0.78, 0.72]), M([0.3, 0.4, 0.2]), M([0.98, 0.98, 0.96], { side: THREE.DoubleSide }), M([0.95, 0.7, 0.2])];
    [pl.leaves, pl.roots, pl.spike, pl.petals, pl.lip].forEach((g, i) => { const m = new THREE.Mesh(g, mats[i]); m.rotation.y = o.anggrekRy || 0; m.position.set(x, base + gy, z); m.castShadow = true; G.add(m); }); }
  /* kebun kopi di lereng gunung */
  { const W = [], Lv = [], Ch = []; for (let i = 0; i < 16; i++) { const x = o.kopi[0] + (i % 4) * 2.2 + (r() - 0.5), z = o.kopi[1] + Math.floor(i / 4) * 2.2 + (r() - 0.5), y = lowAt(H, x, z, 0.4) - 0.05, b = coffeeBush(r, 0.9 + r() * 0.3); for (const [arr, g] of [[W, b.wood], [Lv, b.leaves], [Ch, b.cherries]]) arr.push(g.translate(x, y, z)); }
    const lm = new THREE.Mesh(mg(Lv), M([0.1, 0.3, 0.1], { roughness: 0.35, side: THREE.DoubleSide })); lm.castShadow = true; G.add(new THREE.Mesh(mg(W), M([0.4, 0.32, 0.22])), lm, new THREE.Mesh(mg(Ch), M([0.6, 0.2, 0.1], { roughness: 0.3 }))); }
  /* seroja di danau Hutan Ilmu */
  { const Lv = [], St = [], Fl = [], Pd = []; for (const [x, z] of o.seroja) { const c = lotusClump(r, 1); for (const [arr, g] of [[Lv, c.leaves], [St, c.stems], [Fl, c.flowers], [Pd, c.pod]]) arr.push(g.translate(x, WATER + 0.03, z)); }
    const lm = new THREE.Mesh(mg(Lv), M([0.25, 0.48, 0.22], { roughness: 0.25, side: THREE.DoubleSide })); lm.receiveShadow = true; G.add(lm, new THREE.Mesh(mg(St), M([0.3, 0.45, 0.2])), new THREE.Mesh(mg(Fl), M([0.98, 0.62, 0.72], { side: THREE.DoubleSide })), new THREE.Mesh(mg(Pd), M([0.85, 0.8, 0.3]))); }
  /* padang lamun di dasar laut dangkal dekat terumbu */
  { const Lv = [], Rz = []; for (let i = 0; i < 160; i++) { const a = r() * TAU, d = Math.sqrt(r()) * 9, x = o.lamun[0] + Math.cos(a) * d, z = o.lamun[1] + Math.sin(a) * d, y = H(x, z); if (y > WATER - 0.4) continue; const g = seagrass(r, 0.9 + r() * 0.5, 5 + (r() * 5 | 0)); Lv.push(g.leaves.rotateY(r() * TAU).translate(x, y, z)); Rz.push(g.rhizome.rotateY(r() * TAU).translate(x, y, z)); }
    if (Lv.length) { const lm = new THREE.Mesh(mg(Lv), M([0.2, 0.42, 0.18], { side: THREE.DoubleSide })); lm.userData.noAO = true; G.add(lm, new THREE.Mesh(mg(Rz), M([0.5, 0.42, 0.3]))); } }
  return { update(P) { G.visible = true; } };
}

/* ================= BEDAH: ANGGREK BULAN ================= */
export function buildOrchidDissect(renderer) {
  const S = stage(renderer, ['#2c4a3a', '#0b130e'], 0), r = rng(301);
  /* potongan batang pohon inang */
  const bark = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.3, 6, 24).translate(0, 1.5, -1.4), M([0.35, 0.28, 0.2], { roughness: 0.95 })); S.add('inang', bark);
  const mossG = []; for (let i = 0; i < 18; i++) { const a = -0.8 + r() * 1.6, y = -1 + r() * 5; mossG.push(ellG([0.25, 0.15, 0.1], [Math.sin(a) * 1.25, y, -1.4 + Math.cos(a) * 1.25], 6)); } S.add('inang', new THREE.Mesh(mg(mossG), M([0.25, 0.42, 0.15])));
  const pl = orchidPlant(r, 2.2);
  S.add('daun', new THREE.Mesh(pl.leaves, M([0.2, 0.42, 0.18], { roughness: 0.35, side: THREE.DoubleSide })));
  S.add('akar', new THREE.Mesh(pl.roots, M([0.78, 0.8, 0.75], { roughness: 0.8 })));
  S.add('bunga', new THREE.Mesh(pl.spike, M([0.3, 0.4, 0.2])));
  S.add('bunga', new THREE.Mesh(pl.petals, M([0.99, 0.99, 0.97], { side: THREE.DoubleSide, roughness: 0.55 })));
  S.add('labelum', new THREE.Mesh(pl.lip, M([0.95, 0.72, 0.2])));
  /* penampang akar diperbesar: velamen putih seperti spons, korteks hijau, inti pembuluh */
  const mag = new THREE.Group(); mag.position.set(3.6, 1.2, 0.6); S.scene.add(mag);
  S.add('velamen', new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.5, 40, 1, false).rotateX(Math.PI / 2), M([0.92, 0.92, 0.9], { roughness: 1 })), mag);
  S.add('korteks', new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.52, 36).rotateX(Math.PI / 2), M([0.35, 0.6, 0.3])), mag);
  S.add('korteks', new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.54, 24).rotateX(Math.PI / 2), M([0.85, 0.8, 0.5])), mag);
  const pores = []; for (let i = 0; i < 80; i++) { const a = r() * TAU, d = 0.68 + r() * 0.18; pores.push(ellG([0.03, 0.03, 0.03], [Math.cos(a) * d, Math.sin(a) * d, 0.26], 5)); } S.add('velamen', new THREE.Mesh(mg(pores), M([0.6, 0.62, 0.62])), mag);
  /* air hujan diserap velamen (titik biru) */
  S.mkFlow([[[3.6, 3.4, 0.9], [3.6, 2.3, 0.9], [3.6, 1.9, 0.9], [3.6, 1.6, 0.9]], [[2.9, 3.3, 0.9], [3.0, 2.1, 0.9], [3.1, 1.6, 0.9]], [[4.3, 3.3, 0.9], [4.2, 2.1, 0.9], [4.1, 1.6, 0.9]]], new THREE.Color(0.6, 1.4, 2.6), 50, 0.06, { amt: (st) => smooth(0.4, 0.8, st.sun), spd: 0.35, jit: 0.04 });
  const state = { yaw: 0.35, yaw0: 0.35, pitch: 0.2, dist: 12, user: false, sun: 0, depth: 0, depthT: 0, z: 0 };
  const tgt = V(1.4, 1.6, 0);
  return S.finish(state, tgt, { tick(dt, T, st) { st.z += (st.sun - st.z) * Math.min(1, dt * 2.5); const k = smooth(0.3, 1, st.z); tgt.set(lerp(1.4, 3.6, k), lerp(1.6, 1.2, k), lerp(0, 0.6, k)); st.dist = lerp(12, 5.2, k); },
    api: { labels: { depth: null, sun: 'Perbesaran' } } });
}

/* ================= BEDAH: KOPI ARABIKA ================= */
export function buildCoffeeDissect(renderer) {
  const S = stage(renderer, ['#3a2c22', '#0f0a07'], 3.0), r = rng(303);
  const b = coffeeBush(r, 2.2);
  S.add('batang', new THREE.Mesh(b.wood, M([0.42, 0.33, 0.22])));
  S.add('daun', new THREE.Mesh(b.leaves, M([0.1, 0.32, 0.12], { roughness: 0.3, side: THREE.DoubleSide })));
  const flowerM = M([0.98, 0.97, 0.92]), cherryM = M([0.3, 0.55, 0.15], { roughness: 0.3 });
  const fl = S.add('bunga', new THREE.Mesh(b.flowers, flowerM)), ch = S.add('buah', new THREE.Mesh(b.cherries, cherryM));
  /* buah ceri dibelah dua, diperbesar di samping */
  const mag = new THREE.Group(); mag.position.set(3.0, 2.4, 0.5); mag.rotation.y = Math.PI - 0.1; S.scene.add(mag);
  const half = (R, col, id, rough = 0.5) => S.add(id, new THREE.Mesh(new THREE.SphereGeometry(R, 32, 20, 0, Math.PI).scale(1, 1.15, 1), M(col, { roughness: rough, side: THREE.DoubleSide })), mag);
  half(0.8, [0.75, 0.08, 0.06], 'eksokarp', 0.3); half(0.72, [0.95, 0.85, 0.6], 'mesokarp', 0.6); half(0.56, [0.92, 0.9, 0.8], 'perkamen', 0.8);
  for (const sd of [1, -1]) S.add('biji', new THREE.Mesh(ellG([0.25, 0.48, 0.15], [0, 0, sd * 0.2], 16), M([0.55, 0.6, 0.45], { roughness: 0.6 })), mag);
  S.add('biji', new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.8, 0.01).translate(0, 0, 0.36), M([0.3, 0.3, 0.25])), mag);
  const state = { yaw: 0.4, yaw0: 0.4, pitch: 0.18, dist: 9, user: false, sun: 0, depth: 0, depthT: 0, t: 0 };
  const green = C(0.3, 0.55, 0.15), red = C(0.75, 0.08, 0.06), tmp = new THREE.Color();
  return S.finish(state, V(1.4, 2.2, 0), { tick(dt, T, st) { st.t += (st.sun - st.t) * Math.min(1, dt * 2.5);
      fl.scale.setScalar(Math.max(0.001, 1 - smooth(0.15, 0.35, st.t))); ch.scale.setScalar(Math.max(0.001, smooth(0.2, 0.45, st.t)));
      tmp.copy(green).lerp(red, smooth(0.55, 0.9, st.t)); cherryM.color.copy(tmp); cherryM.userData.base = tmp.clone(); },
    api: { labels: { depth: null, sun: 'Waktu' } } });
}

/* ================= BEDAH: PISANG ================= */
export function buildBananaDissect(renderer) {
  const S = stage(renderer, ['#3a4a2a', '#0e130a'], 0), r = rng(305);
  const soil = new THREE.Mesh(new THREE.BoxGeometry(6, 1.6, 4).translate(0, -0.8, 0), M([0.32, 0.24, 0.17], { roughness: 1 })); S.add('tanah', soil);
  const p = bananaPlant(r, 1.6), stem = new THREE.Group(); S.scene.add(stem);
  const Hh = p.H, cy = 1.4, rc = lerp(0.32, 0.21, cy / Hh), fx = 0.48, stemM = M([0.5, 0.58, 0.3]);
  S.add('batang', new THREE.Mesh(mg([new THREE.CylinderGeometry(0.21, rc, Hh - cy, 16).translate(0, cy + (Hh - cy) / 2, 0), tubeG([[0, Hh - 0.16, 0], [fx, Hh - 0.56, 0], [fx + 0.29, Hh - 2.24, 0]], 0.056, 8, 5)]), stemM), stem);
  S.add('batang', new THREE.Mesh(new THREE.CylinderGeometry(rc, 0.32, cy, 16).translate(0, cy / 2, 0), stemM));
  S.add('daun', new THREE.Mesh(p.leaves, M([0.25, 0.5, 0.15], { side: THREE.DoubleSide, roughness: 0.5 })), stem);
  S.add('buah', new THREE.Mesh(p.fruit, M([0.45, 0.65, 0.18], { roughness: 0.4 })), stem);
  S.add('jantung', new THREE.Mesh(p.heart, M([0.5, 0.12, 0.25])), stem);
  /* bonggol (batang asli) di dalam tanah, dengan akar dan anakan */
  S.add('bonggol', new THREE.Mesh(ellG([0.55, 0.4, 0.55], [0, -0.35, 0], 18), M([0.8, 0.75, 0.6])));
  const roots = []; for (let k = 0; k < 16; k++) { const a = r() * TAU, d = 0.9 + r() * 1.2; roots.push(tubeG([[0, -0.4, 0], [Math.cos(a) * d * 0.5, -0.6, Math.sin(a) * d * 0.5], [Math.cos(a) * d, -0.9 - r() * 0.5, Math.sin(a) * d]], 0.03, 8, 4)); } S.add('bonggol', new THREE.Mesh(mg(roots), M([0.75, 0.7, 0.55])));
  S.add('anakan', new THREE.Mesh(mg([new THREE.ConeGeometry(0.18, 1.2, 10).translate(0.9, 0.5, 0.4), leaf(0.2, 0.5, 0.3, 1.2, 4).translate(0.9, 1.0, 0.4)]), M([0.35, 0.55, 0.2], { side: THREE.DoubleSide })));
  /* irisan melintang batang semu: lingkaran-lingkaran pelepah daun */
  const cut = new THREE.Group(); cut.position.set(0, 1.4, 0); S.scene.add(cut); const rings = [];
  for (let k = 0; k < 9; k++) { const R = 0.3 - k * 0.032; rings.push(new THREE.RingGeometry(Math.max(0.01, R - 0.024), R, 36).rotateX(-Math.PI / 2).translate(0, 0.005 * k, 0)); }
  S.add('pelepah', new THREE.Mesh(mg(rings), M([0.88, 0.92, 0.75], { side: THREE.DoubleSide })), cut);
  S.add('pelepah', new THREE.Mesh(new THREE.CircleGeometry(0.3, 36).rotateX(-Math.PI / 2).translate(0, -0.005, 0), M([0.55, 0.7, 0.35], { side: THREE.DoubleSide })), cut);
  const state = { yaw: 0.5, yaw0: 0.5, pitch: 0.2, dist: 15, user: false, sun: 0, depth: 0, depthT: 0, c: 0 };
  const tgt = V(0.2, 2.3, 0);
  return S.finish(state, tgt, { tick(dt, T, st) { st.c += (st.sun - st.c) * Math.min(1, dt * 2.5); const k = smooth(0.05, 1, st.c);
      /* batang di atas irisan diangkat & digeser supaya penampang terlihat */
      stem.position.set(k * 1.6, k * 0.4, 0); cut.visible = k > 0.02; tgt.set(lerp(0.2, 0.3, k), lerp(2.3, 1.4, k), 0); st.dist = lerp(15, 4.2, k); st.pitch = lerp(0.2, 0.75, k); },
    api: { labels: { depth: null, sun: 'Potong batang' } } });
}

/* ================= BEDAH: SEROJA (LOTUS) ================= */
export function buildLotusDissect(renderer) {
  const S = stage(renderer, ['#2a4a52', '#0a1316'], 0), r = rng(307);
  const water = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 1.2, 48).translate(0, -0.6, 0), new THREE.MeshPhysicalMaterial({ color: C(0.25, 0.45, 0.45), transparent: true, opacity: 0.55, roughness: 0.1 })); water.userData.keep = true; S.scene.add(water);
  S.add('lumpur', new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 0.6, 48).translate(0, -1.5, 0), M([0.25, 0.2, 0.15], { roughness: 1 })));
  const c = lotusClump(r, 2.4);
  S.add('daun', new THREE.Mesh(c.leaves, M([0.25, 0.5, 0.22], { roughness: 0.2, side: THREE.DoubleSide })));
  S.add('tangkai', new THREE.Mesh(c.stems, M([0.32, 0.48, 0.2])));
  S.add('bunga', new THREE.Mesh(c.flowers, M([0.98, 0.6, 0.72], { side: THREE.DoubleSide })));
  S.add('polong', new THREE.Mesh(c.pod, M([0.85, 0.8, 0.3])));
  const rz = []; rz.push(tubeG([[-2.5, -1.3, 0.3], [-1, -1.35, -0.2], [0.5, -1.3, 0.2], [2.4, -1.32, -0.1]], 0.16, 20, 10)); for (let k = 0; k < 4; k++) rz.push(ellG([0.22, 0.2, 0.2], [-2 + k * 1.3, -1.3, 0.1 * (k % 2)], 10));
  S.add('rimpang', new THREE.Mesh(mg(rz), M([0.88, 0.8, 0.68])));
  /* permukaan daun diperbesar: bintil-bintil berlilin, tetes air bulat menggelinding membawa debu */
  const mag = new THREE.Group(); mag.position.set(3.8, 1.6, 0.3); S.scene.add(mag);
  mag.add(new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.1, 1.3), M([0.25, 0.5, 0.22])));
  const bumps = []; for (let i = 0; i < 18; i++) for (let j = 0; j < 13; j++) bumps.push(ellG([0.045, 0.06, 0.045], [-0.85 + i * 0.1, 0.07, -0.6 + j * 0.1], 6));
  S.add('papila', new THREE.Mesh(mg(bumps), M([0.4, 0.65, 0.35], { roughness: 0.15 })), mag);
  const drop = new THREE.Mesh(new THREE.SphereGeometry(0.24, 24, 16), new THREE.MeshPhysicalMaterial({ color: C(0.8, 0.9, 1.0), roughness: 0.02, transparent: true, opacity: 0.6, clearcoat: 1 })); S.add('tetes', drop, mag);
  const dust = []; for (let i = 0; i < 10; i++) dust.push(ellG([0.03, 0.03, 0.03], [(r() - 0.5) * 1.4, 0.13, (r() - 0.5) * 0.9], 5)); const dustM = S.add('tetes', new THREE.Mesh(mg(dust), M([0.35, 0.28, 0.2])), mag);
  /* oksigen turun lewat rongga udara tangkai ke rimpang di lumpur */
  S.mkFlow([[[0.6, 1.0, 0.4], [0.4, 0.0, 0.3], [0.2, -1.0, 0.2], [0, -1.3, 0.1]], [[-0.5, 1.4, -0.4], [-0.4, 0.2, -0.3], [-0.6, -1.2, -0.1]]], new THREE.Color(2.4, 2.4, 2.6), 40, 0.05, { amt: () => 0.6, spd: 0.25, jit: 0.02 });
  const state = { yaw: 0.35, yaw0: 0.35, pitch: 0.22, dist: 13, user: false, sun: 0, depth: 0, depthT: 0, z: 0 };
  const tgt = V(0.8, 0.9, 0);
  return S.finish(state, tgt, { tick(dt, T, st) { st.z += (st.sun - st.z) * Math.min(1, dt * 2.5); const k = smooth(0.2, 1, st.z); tgt.set(lerp(0.8, 3.8, k), lerp(0.9, 1.7, k), lerp(0, 0.3, k)); st.dist = lerp(13, 3.0, k);
      const u = (T * 0.25) % 1, x = -0.7 + u * 1.4; drop.position.set(x, 0.33, Math.sin(u * 6) * 0.1); drop.rotation.z = -u * 12; dustM.visible = true; },
    api: { labels: { depth: null, sun: 'Perbesaran' } } });
}

/* ================= BEDAH: LAMUN ================= */
export function buildSeagrassDissect(renderer) {
  const S = stage(renderer, ['#1f4a62', '#06121a'], 0), r = rng(309);
  S.add('pasir', new THREE.Mesh(new THREE.BoxGeometry(8, 1, 5).translate(0, -0.5, 0), M([0.85, 0.78, 0.6], { roughness: 1 })));
  const Lv = [], Rz = [], Rt = [];
  for (let k = 0; k < 7; k++) { const g = seagrass(r, 2.2, 6); Lv.push(g.leaves.translate(-3 + k * 1.0, 0, (r() - 0.5) * 2)); Rz.push(g.rhizome.translate(-3 + k * 1.0, -0.15, (r() - 0.5) * 2)); for (let q = 0; q < 4; q++) Rt.push(tubeG([[-3 + k + q * 0.15, -0.2, 0], [-3 + k + q * 0.15, -0.6 - r() * 0.3, 0.1]], 0.015, 4, 3)); }
  S.add('daun', new THREE.Mesh(mg(Lv), M([0.22, 0.48, 0.2], { side: THREE.DoubleSide })));
  S.add('rimpang', new THREE.Mesh(mg(Rz), M([0.55, 0.45, 0.3])));
  S.add('akar', new THREE.Mesh(mg(Rt), M([0.8, 0.75, 0.6])));
  S.add('bunga', new THREE.Mesh(mg([ellG([0.06, 0.1, 0.06], [-1.0, 1.6, 0.3], 8), ellG([0.06, 0.1, 0.06], [1.2, 1.4, -0.3], 8)]), M([0.95, 0.95, 0.85])));
  /* duyung (dugong) merumput lamun */
  const dg = new THREE.Group(); S.scene.add(dg);
  const dm = M([0.55, 0.52, 0.5], { roughness: 0.6 });
  S.add('duyung', new THREE.Mesh(mg([ellG([1.6, 0.55, 0.6], [0, 0, 0], 20), ellG([0.45, 0.4, 0.4], [1.6, -0.1, 0], 14), ellG([0.25, 0.06, 0.75], [-1.9, 0, 0], 12)]), dm), dg);
  S.add('duyung', new THREE.Mesh(mg([1, -1].map((s) => ellG([0.35, 0.06, 0.15], [0.8, -0.35, s * 0.6], 8))), dm), dg);
  /* gelembung oksigen dari daun */
  S.mkFlow([[[-2, 1.0, 0], [-2, 2.5, 0], [-2, 4, 0]], [[0, 1.2, 0.5], [0.1, 2.6, 0.4], [0, 4, 0.5]], [[2, 1.0, -0.4], [2.1, 2.5, -0.3], [2, 4, -0.4]]], new THREE.Color(2.4, 2.6, 2.8), 45, 0.07, { amt: (st) => 0.3 + 0.7 * (1 - st.sun), spd: 0.25, jit: 0.05 });
  const state = { yaw: 0.3, yaw0: 0.3, pitch: 0.2, dist: 12, user: false, sun: 0, depth: 0, depthT: 0, t: 0 };
  return S.finish(state, V(0, 1.0, 0), { tick(dt, T, st) { st.t += (st.sun - st.t) * Math.min(1, dt * 2); const x = lerp(6, 0.5, st.t);
      dg.position.set(x, lerp(2.8, 1.3, st.t), 1.2); dg.rotation.set(0, Math.PI, lerp(0, 0.35, st.t)); dg.rotation.y = Math.PI; dg.position.y += Math.sin(T * 1.2) * 0.08; },
    api: { labels: { depth: null, sun: 'Duyung datang' } } });
}

/* ================= LIDAH BUAYA & LUMUT ================= */
function aloeRosette(r, s = 1) {
  const Lv = [], Sp = [];
  for (let k = 0; k < 14; k++) { const a = k * 2.4, tilt = 0.35 + (k / 14) * 0.8, L = (0.55 + r() * 0.2) * s;
    /* daun tebal berbentuk tombak (penampang segitiga membulat) */
    const g = new THREE.ConeGeometry(0.09 * s, L, 5, 6).translate(0, L / 2, 0).scale(1.4, 1, 0.6), p = g.attributes.position; for (let i = 0; i < p.count; i++) { const y = p.getY(i); p.setZ(i, p.getZ(i) + Math.pow(y / L, 2) * 0.12 * s); } g.computeVertexNormals();
    Lv.push(g.rotateX(tilt).rotateY(a)); for (let q = 1; q < 6; q++) for (const sd of [1, -1]) { const y = q / 6 * L; Sp.push(new THREE.ConeGeometry(0.008 * s, 0.03 * s, 3).rotateZ(-sd * Math.PI / 2).translate(sd * 0.11 * s * (1 - y / L) * 1.2, y, 0).rotateX(tilt).rotateY(a)); } }
  return { leaves: mg(Lv), spines: mg(Sp) };
}
export function buildAloeDissect(renderer) {
  const S = stage(renderer, ['#4a3e2a', '#120d08'], 0), r = rng(311);
  S.add('tanah', new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.4, 0.8, 40).translate(0, -0.4, 0), M([0.75, 0.62, 0.45], { roughness: 1 })));
  const a = aloeRosette(r, 3.2);
  S.add('daun', new THREE.Mesh(a.leaves, M([0.45, 0.62, 0.42], { roughness: 0.55 })));
  S.add('duri', new THREE.Mesh(a.spines, M([0.85, 0.8, 0.6])));
  const roots = []; for (let k = 0; k < 14; k++) { const ang = r() * TAU, d = 0.8 + r() * 1.0; roots.push(tubeG([[0, -0.1, 0], [Math.cos(ang) * d * 0.5, -0.3, Math.sin(ang) * d * 0.5], [Math.cos(ang) * d, -0.7, Math.sin(ang) * d]], 0.03, 8, 4)); }
  S.add('akar', new THREE.Mesh(mg(roots), M([0.8, 0.7, 0.55])));
  /* penampang daun diperbesar: kulit hijau, getah kuning di tepi, gel bening di tengah */
  const cut = new THREE.Group(); cut.position.set(3.2, 1.6, 0.4); S.scene.add(cut);
  const tri = (sc, z) => { const sh = new THREE.Shape(); sh.moveTo(-1, 0.35); sh.quadraticCurveTo(0, 0.55, 1, 0.35); sh.quadraticCurveTo(0.2, -0.65, 0, -0.7); sh.quadraticCurveTo(-0.2, -0.65, -1, 0.35); return new THREE.ExtrudeGeometry(sh, { depth: 0.4, bevelEnabled: false }).scale(sc, sc, 1).translate(0, 0, z); };
  S.add('kulit', new THREE.Mesh(tri(1, -0.2), M([0.3, 0.5, 0.28], { roughness: 0.4 })), cut);
  S.add('getah', new THREE.Mesh(tri(0.9, -0.19), M([0.92, 0.75, 0.2], { roughness: 0.3 })), cut);
  S.add('gel', new THREE.Mesh(tri(0.82, -0.18), new THREE.MeshPhysicalMaterial({ color: C(0.88, 0.95, 0.85), roughness: 0.05, transparent: true, opacity: 0.85, clearcoat: 1 })), cut);
  S.add('stomata', new THREE.Mesh(mg(Array.from({ length: 12 }, (_, i) => ellG([0.03, 0.015, 0.02], [-0.8 + i * 0.145, 0.42 + Math.sin(i / 11 * Math.PI) * 0.08, 0.22], 5))), M([0.15, 0.25, 0.12])), cut);
  /* malam hari: stomata membuka, CO2 masuk (titik putih) */
  S.mkFlow([[[2.4, 3.2, 0.7], [2.8, 2.4, 0.6], [3.0, 2.1, 0.6]], [[4.0, 3.2, 0.7], [3.6, 2.4, 0.6], [3.4, 2.1, 0.6]]], new THREE.Color(2.2, 2.2, 2.4), 30, 0.05, { amt: (st) => smooth(0.5, 0.9, st.sun), spd: 0.3, jit: 0.04 });
  const state = { yaw: 0.4, yaw0: 0.4, pitch: 0.3, dist: 11, user: false, sun: 0, depth: 0, depthT: 0, z: 0 };
  const tgt = V(0.8, 1.2, 0);
  return S.finish(state, tgt, { tick(dt, T, st) { st.z += (st.sun - st.z) * Math.min(1, dt * 2.5); const k = smooth(0.2, 0.6, st.z); tgt.set(lerp(0.8, 3.4, k), lerp(1.2, 1.6, k), lerp(0, 0.4, k)); st.dist = lerp(11, 5.4, k); },
    api: { labels: { depth: null, sun: 'Potong & malam' } } });
}
export function buildMossDissect(renderer) {
  const S = stage(renderer, ['#2a3a2a', '#0a100a'], 0), r = rng(313);
  S.add('batu', new THREE.Mesh(new THREE.DodecahedronGeometry(2.4, 1).scale(1.3, 0.6, 1).translate(0, -0.9, 0), M([0.45, 0.44, 0.42], { roughness: 0.95, flatShading: true })));
  /* gametofit: hamparan tangkai berdaun kecil */
  const G = [], Sp = [], Cp = [];
  for (let i = 0; i < 160; i++) { const a = r() * TAU, d = Math.sqrt(r()) * 1.9, x = Math.cos(a) * d * 1.2, z = Math.sin(a) * d * 0.9, y = 0.25 - d * d * 0.07, h = 0.25 + r() * 0.15; G.push(new THREE.ConeGeometry(0.05, h, 5).translate(x, y + h / 2, z));
    if (r() < 0.25) { const sh = 0.6 + r() * 0.3; Sp.push(new THREE.CylinderGeometry(0.008, 0.01, sh, 4).translate(x, y + h + sh / 2, z)); Cp.push(ellG([0.035, 0.07, 0.035], [x + 0.02, y + h + sh, z], 6).rotateZ(0)); } }
  S.add('gametofit', new THREE.Mesh(mg(G), M([0.3, 0.55, 0.18], { roughness: 0.8 })));
  S.add('sporofit', new THREE.Mesh(mg(Sp), M([0.65, 0.45, 0.2])));
  S.add('kapsul', new THREE.Mesh(mg(Cp), M([0.55, 0.35, 0.15])));
  S.add('rizoid', new THREE.Mesh(mg(Array.from({ length: 30 }, () => { const x = (r() - 0.5) * 3, z = (r() - 0.5) * 2; return tubeG([[x, 0.15, z], [x + 0.05, -0.05, z], [x, -0.2, z + 0.04]], 0.006, 4, 3); })), M([0.55, 0.42, 0.3])));
  /* tetes air hujan yang ditahan lumut, dan spora yang terlepas dari kapsul */
  const drops = []; for (let i = 0; i < 25; i++) drops.push(ellG([0.06, 0.05, 0.06], [(r() - 0.5) * 3.2, 0.42 + r() * 0.1, (r() - 0.5) * 2.2], 8));
  S.add('air', new THREE.Mesh(mg(drops), new THREE.MeshPhysicalMaterial({ color: C(0.8, 0.9, 1), roughness: 0.02, transparent: true, opacity: 0.6, clearcoat: 1 })));
  const caps = Cp.map((g) => { g.computeBoundingSphere(); return g.boundingSphere.center.clone(); }).slice(0, 8);
  S.mkFlow(caps.map((c) => [[c.x, c.y, c.z], [c.x + 0.4, c.y + 0.6, c.z + 0.2], [c.x + 1.2, c.y + 1.4, c.z + 0.5]]), new THREE.Color(2.0, 1.6, 0.6), 60, 0.04, { amt: (st) => smooth(0.4, 0.9, st.sun), spd: 0.25, jit: 0.08 });
  const state = { yaw: 0.4, yaw0: 0.4, pitch: 0.35, dist: 7, user: false, sun: 0, depth: 0, depthT: 0 };
  return S.finish(state, V(0, 0.5, 0), { tick(dt, T, st) { st.dist = lerp(7, 3.2, smooth(0, 0.4, st.sun)); },
    api: { labels: { depth: null, sun: 'Perbesaran & spora' } } });
}
export function buildAloeMossWorld(scene, H, o) {
  const G = new THREE.Group(); scene.add(G); const r = rng(1919);
  const L = [], Sp = []; for (const [x, z] of o.aloe) for (let k = 0; k < 4; k++) { const px = x + (r() - 0.5) * 3, pz = z + (r() - 0.5) * 3, a = aloeRosette(r, 0.8 + r() * 0.4), y = H(px, pz) - 0.05; L.push(a.leaves.translate(px, y, pz)); Sp.push(a.spines.translate(px, y, pz)); }
  G.add(new THREE.Mesh(mg(L), M([0.45, 0.62, 0.42], { roughness: 0.55 })));
  const ms = []; for (const [x, z] of o.moss) for (let k = 0; k < 6; k++) { const px = x + (r() - 0.5) * 4, pz = z + (r() - 0.5) * 4, s = 0.6 + r() * 0.8; ms.push(new THREE.DodecahedronGeometry(s, 0).scale(1.2, 0.55, 1).translate(px, H(px, pz), pz), ellG([s * 1.05, s * 0.3, s * 0.85], [px, H(px, pz) + s * 0.35, pz], 8)); }
  const rock = new THREE.Mesh(mg(ms.filter((_, i) => i % 2 === 0)), M([0.42, 0.41, 0.4], { flatShading: true })), moss = new THREE.Mesh(mg(ms.filter((_, i) => i % 2 === 1)), M([0.28, 0.48, 0.16], { roughness: 1 }));
  rock.castShadow = true; G.add(rock, moss);
  return { update() {} };
}
