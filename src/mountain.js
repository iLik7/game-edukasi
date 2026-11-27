import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import { stage } from './geo.js';

/* FASE 4: GUNUNG & SALJU. Dunia: cemara gunung, padang edelweis, papan zona iklim, gletser di puncak.
   Bedah statis: edelweis (perbesaran ke rambut daun), cemara gunung (perbesaran ke bintil akar), zona iklim (ketinggian), gletser (tahun). */
const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ellG = (r, p, seg = 10) => new THREE.SphereGeometry(1, seg, Math.max(6, seg * 0.7 | 0)).scale(r[0], r[1], r[2]).translate(p[0], p[1], p[2]);
const tubeG = (pts, r, seg = 12, rs = 6) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => V(...p))), seg, r, rs);
const ni = (g) => g.index ? g.toNonIndexed() : g;
const mg = (a) => mergeGeometries(a.map(ni));
const at = (m, p) => { m.position.copy(p); return m; };

/* ---------- bentuk bersama ---------- */
/* edelweis: roset daun sempit berbulu putih keabuan, tangkai dengan bonggol bunga putih (braktea) berpusat kuning */
export function edelweissGeo(r, s = 1, hi = false) {
  const leaves = [], stems = [], bracts = [], discs = [];
  for (let k = 0; k < 28; k++) { const a = r() * TAU, h = r() * 0.45 * s; leaves.push(new THREE.PlaneGeometry(0.04 * s, 0.2 * s).translate(0, 0.1 * s, 0).rotateX(-0.7 - r() * 0.5).rotateY(a).translate(0, h, 0)); }
  for (let f = 0; f < 5; f++) { const a = r() * TAU, d = r() * 0.15 * s, top = V(Math.cos(a) * d, (0.55 + r() * 0.25) * s, Math.sin(a) * d); stems.push(tubeG([[0, 0, 0], [top.x * 0.5, top.y * 0.5, top.z * 0.5], top.toArray()], 0.012 * s, 3, 3));
    for (let k = 0; k < 9; k++) bracts.push(new THREE.PlaneGeometry(0.05 * s, 0.11 * s).translate(0, 0.055 * s, 0).rotateX(-1.2).rotateY(k / 9 * TAU).translate(top.x, top.y, top.z));
    if (hi) { for (let q = 0; q < 7; q++) { const b = q / 7 * TAU; discs.push(ellG([0.022 * s, 0.018 * s, 0.022 * s], [top.x + Math.cos(b) * 0.028 * s, top.y + 0.02 * s, top.z + Math.sin(b) * 0.028 * s], 8)); } discs.push(ellG([0.025 * s, 0.02 * s, 0.025 * s], [top.x, top.y + 0.03 * s, top.z], 8)); }
    else discs.push(ellG([0.05 * s, 0.03 * s, 0.05 * s], [top.x, top.y + 0.02 * s, top.z], 6)); }
  return { leaves: mg(leaves), stems: mg(stems), bracts: mg(bracts), discs: mg(discs) };
}
/* cemara gunung: batang tegak, cabang mendatar, ranting jarum menjuntai */
function casuarinaGeo(r, H = 9, tw = 0.012, nq = 18) {
  const trunk = [new THREE.CylinderGeometry(0.12 * H / 9, 0.25 * H / 9, H, 8).translate(0, H / 2, 0)], twigs = [], cones = [];
  for (let k = 0; k < 14; k++) { const y = H * (0.3 + k / 14 * 0.68), a = k * 2.39, L = (1 - k / 14) * H * 0.28 + 0.6, end = V(Math.cos(a) * L, y + 0.3, Math.sin(a) * L); trunk.push(tubeG([[0, y, 0], end.toArray()], 0.05, 3, 4));
    for (let q = 0; q < nq; q++) { const t = 0.3 + r() * 0.7, p = V(end.x * t, lerp(y, end.y, t), end.z * t), len = 0.6 + r() * 0.6, d = V((r() - 0.5) * 0.3, -1, (r() - 0.5) * 0.3).normalize(); twigs.push(tubeG([p.toArray(), p.clone().add(d.clone().multiplyScalar(len * 0.5)).add(V(0, 0.08, 0)).toArray(), p.clone().add(d.multiplyScalar(len)).toArray()], tw, 4, 3)); }
    if (r() < 0.6) cones.push(ellG([0.06, 0.08, 0.06], [end.x * 0.7, lerp(y, end.y, 0.7) - 0.15, end.z * 0.7], 6)); }
  return { trunk: mg(trunk), twigs: mg(twigs), cones: mg(cones) };
}

/* ================= DUNIA ================= */
export function buildMountainDecor(scene, heightAt, spots) {
  const r = rng(909), G = new THREE.Group(); scene.add(G);
  const barkM = new THREE.MeshStandardMaterial({ color: C(0.35, 0.28, 0.22), roughness: 0.9 }), twigM = new THREE.MeshStandardMaterial({ color: C(0.22, 0.36, 0.2), roughness: 0.7 });
  /* sekelompok cemara gunung */
  { const T = [], W = [], K = []; for (let i = 0; i < 9; i++) { const a = r() * TAU, d = i ? 6 + r() * 16 : 0, x = spots.cemara[0] + Math.cos(a) * d, z = spots.cemara[1] + Math.sin(a) * d, y = heightAt(x, z) - 0.1, g = casuarinaGeo(r, 7 + r() * 4, 0.05, 9), ry = r() * TAU;
      T.push(g.trunk.rotateY(ry).translate(x, y, z)); W.push(g.twigs.rotateY(ry).translate(x, y, z)); K.push(g.cones.rotateY(ry).translate(x, y, z)); }
    const t = new THREE.Mesh(mg(T), barkM), w = new THREE.Mesh(mg(W), twigM); t.castShadow = w.castShadow = true; G.add(t, w, new THREE.Mesh(mg(K), barkM)); }
  /* padang edelweis */
  { const L = [], S = [], B = [], D = []; for (let i = 0; i < 70; i++) { const a = r() * TAU, d = Math.sqrt(r()) * 9, x = spots.edelweis[0] + Math.cos(a) * d, z = spots.edelweis[1] + Math.sin(a) * d, y = heightAt(x, z) - 0.03, e = edelweissGeo(r, 0.9 + r() * 0.6);
      for (const [arr, g] of [[L, e.leaves], [S, e.stems], [B, e.bracts], [D, e.discs]]) arr.push(g.translate(x, y, z)); }
    G.add(new THREE.Mesh(mg(L), new THREE.MeshStandardMaterial({ color: C(0.62, 0.68, 0.6), roughness: 0.9, side: THREE.DoubleSide })), new THREE.Mesh(mg(S), new THREE.MeshStandardMaterial({ color: C(0.6, 0.65, 0.55) })), new THREE.Mesh(mg(B), new THREE.MeshStandardMaterial({ color: C(0.95, 0.95, 0.9), roughness: 0.8, side: THREE.DoubleSide })), new THREE.Mesh(mg(D), new THREE.MeshStandardMaterial({ color: C(0.95, 0.8, 0.35) }))); }
  /* gletser: lidah es kebiruan di puncak */
  { const [x, z] = spots.gletser, ice = []; for (let i = 0; i < 9; i++) { const a = r() * TAU, d = r() * 12, px = x + Math.cos(a) * d, pz = z + Math.sin(a) * d, s = 4 + r() * 5; ice.push(ellG([s, s * 0.35, s * 0.8], [px, heightAt(px, pz) - s * 0.12, pz], 12)); }
    const m = new THREE.Mesh(mg(ice), new THREE.MeshPhysicalMaterial({ color: C(0.5, 0.75, 0.95), roughness: 0.15, clearcoat: 0.8 })); m.receiveShadow = true; G.add(m); }
  /* papan zona iklim dengan termometer besar */
  { const [x, z] = spots.iklim, y = heightAt(x, z) - 0.1, c = document.createElement('canvas'); c.width = 256; c.height = 192; const k = c.getContext('2d');
    JUNGHUHN.slice(0, 4).reverse().forEach(([a, b, id, col], i) => { k.fillStyle = col; k.fillRect(0, 32 + i * 40, 256, 40); k.fillStyle = '#102010'; k.font = 'bold 20px sans-serif'; k.fillText(id.toUpperCase() + '  ' + a + '-' + (b > 3000 ? '...' : b) + ' m', 12, 58 + i * 40); });
    k.fillStyle = '#f5f0e0'; k.fillRect(0, 0, 256, 32); k.fillStyle = '#203020'; k.font = 'bold 22px sans-serif'; k.fillText('ZONA IKLIM GUNUNG', 18, 24);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; const wood = new THREE.MeshStandardMaterial({ color: C(0.4, 0.3, 0.2), roughness: 0.9 });
    const b = new THREE.Group(); b.position.set(x, y, z); b.rotation.y = 0.2; G.add(b);
    b.add(new THREE.Mesh(mg([new THREE.CylinderGeometry(0.06, 0.07, 2.2, 6).translate(-0.85, 1.1, 0), new THREE.CylinderGeometry(0.06, 0.07, 2.2, 6).translate(0.85, 1.1, 0)]), wood));
    b.add(at(new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.35), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 })), V(0, 1.45, 0.08)));
    b.add(at(new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.45, 0.1), wood), V(0, 1.45, 0)));
    b.add(new THREE.Mesh(mg([new THREE.CylinderGeometry(0.05, 0.05, 1.2, 8).translate(1.15, 1.4, 0.05), new THREE.SphereGeometry(0.1, 10, 8).translate(1.15, 0.8, 0.05)]), new THREE.MeshStandardMaterial({ color: C(0.9, 0.15, 0.1), emissive: C(0.4, 0.02, 0.0) }))); }
  return { update(P) { G.visible = Math.hypot(P.x - spots.cemara[0], P.z - spots.cemara[1]) < 260; } };
}

/* ================= BEDAH: EDELWEIS ================= */
export function buildEdelweissDissect(renderer) {
  const S = stage(renderer, ['#4a5a6a', '#0e141a'], 3.2), r = rng(91);
  const e = edelweissGeo(r, 4, true);
  const leafM = new THREE.MeshStandardMaterial({ color: C(0.62, 0.68, 0.6), roughness: 0.95, side: THREE.DoubleSide });
  S.add('daun', new THREE.Mesh(e.leaves, leafM)); S.add('daun', new THREE.Mesh(e.stems, new THREE.MeshStandardMaterial({ color: C(0.6, 0.65, 0.55) })));
  S.add('braktea', new THREE.Mesh(e.bracts, new THREE.MeshStandardMaterial({ color: C(0.96, 0.96, 0.92), roughness: 0.85, side: THREE.DoubleSide })));
  S.add('bonggol', new THREE.Mesh(e.discs, new THREE.MeshStandardMaterial({ color: C(0.95, 0.78, 0.3), roughness: 0.6 })));
  /* tanah vulkanik berpasir dengan akar */
  const roots = []; for (let k = 0; k < 20; k++) { const a = r() * TAU, d = 0.4 + r() * 0.9; roots.push(tubeG([[0, 0, 0], [Math.cos(a) * d * 0.5, -0.3, Math.sin(a) * d * 0.5], [Math.cos(a) * d, -0.7 - r() * 0.4, Math.sin(a) * d]], 0.015, 6, 3)); }
  S.add('akar', new THREE.Mesh(mg(roots), new THREE.MeshStandardMaterial({ color: C(0.7, 0.6, 0.45) })));
  /* potongan permukaan daun diperbesar: helai rambut (trikoma) yang rapat */
  const mag = new THREE.Group(); mag.position.set(3.4, 1.6, 0); S.scene.add(mag);
  mag.add(new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.12, 1.2), new THREE.MeshStandardMaterial({ color: C(0.35, 0.55, 0.3) })));
  const hair = []; for (let i = 0; i < 260; i++) { const x = (r() - 0.5) * 1.5, z = (r() - 0.5) * 1.1, a = r() * TAU; hair.push(tubeG([[x, 0.06, z], [x + Math.cos(a) * 0.1, 0.25, z + Math.sin(a) * 0.1], [x + Math.cos(a) * 0.3, 0.32 + r() * 0.1, z + Math.sin(a) * 0.3]], 0.008, 6, 3)); }
  S.add('rambut', new THREE.Mesh(mg(hair), new THREE.MeshStandardMaterial({ color: C(0.97, 0.97, 0.97), roughness: 0.6 })), mag);
  mag.add(new THREE.Mesh(new THREE.RingGeometry(1.15, 1.22, 48).rotateX(-Math.PI / 2).translate(0, 0.07, 0), new THREE.MeshBasicMaterial({ color: new THREE.Color(2, 1.8, 0.8) })));
  /* sinar UV dipantulkan dan udara hangat terperangkap */
  S.mkFlow([[[2.8, 3.4, -0.4], [3.2, 2.0, -0.2], [3.5, 3.4, 0.2]], [[3.6, 3.4, -0.3], [3.9, 2.0, 0], [4.2, 3.3, 0.3]]], new THREE.Color(1.8, 1.2, 2.6), 40, 0.06, { amt: (st) => smooth(0.3, 0.6, st.sun), spd: 0.3, jit: 0.02 });
  const state = { yaw: 0.25, yaw0: 0.25, pitch: 0.3, dist: 8, user: false, sun: 0, depth: 0, depthT: 0, z: 0 };
  const tgt = V(0.8, 1.4, 0);
  return S.finish(state, tgt, {
    tick(dt, T, st) { st.z += (st.sun - st.z) * Math.min(1, dt * 2.5); const k = smooth(0, 1, st.z); tgt.set(lerp(0.8, 3.4, k), lerp(1.4, 1.75, k), 0); if (!st.user || st.z > 0.05) st.dist = lerp(8, 2.6, k); },
    api: { labels: { depth: null, sun: 'Perbesaran' } },
  });
}

/* ================= BEDAH: CEMARA GUNUNG ================= */
export function buildCasuarinaDissect(renderer) {
  const S = stage(renderer, ['#3a4a3a', '#0c120c'], 0), r = rng(93);
  const soil = new THREE.Mesh(new THREE.BoxGeometry(6, 2, 4).translate(0, -1, 0), new THREE.MeshStandardMaterial({ color: C(0.32, 0.27, 0.22), roughness: 1 })); S.add('tanah', soil);
  const t = casuarinaGeo(r, 6);
  S.add('batang', new THREE.Mesh(t.trunk, new THREE.MeshStandardMaterial({ color: C(0.35, 0.28, 0.22), roughness: 0.9 })));
  S.add('ranting', new THREE.Mesh(t.twigs, new THREE.MeshStandardMaterial({ color: C(0.22, 0.38, 0.2), roughness: 0.7 })));
  S.add('buah', new THREE.Mesh(t.cones, new THREE.MeshStandardMaterial({ color: C(0.45, 0.32, 0.2), roughness: 0.8 })));
  /* akar di sisi potongan tanah, dengan bintil akar berisi bakteri Frankia */
  const roots = [], nod = []; for (let k = 0; k < 10; k++) { const a = Math.PI * 0.1 + k / 10 * Math.PI * 0.8, d = 1.2 + r() * 1.2; const end = [Math.cos(a) * d, -0.5 - r() * 1.1, 1.98]; roots.push(tubeG([[0, 0, 0.2], [end[0] * 0.5, -0.3, 1.4], end], 0.04, 10, 5)); nod.push(ellG([0.1, 0.08, 0.06], [end[0] * 0.8, end[1] * 0.85, 1.99], 8)); }
  S.add('akar', new THREE.Mesh(mg(roots), new THREE.MeshStandardMaterial({ color: C(0.65, 0.55, 0.4) })));
  S.add('bintil', new THREE.Mesh(mg(nod), new THREE.MeshStandardMaterial({ color: C(0.85, 0.55, 0.35), emissive: C(0.2, 0.08, 0.02) })));
  /* perbesaran ranting: ruas-ruas hijau dengan daun sisik kecil di setiap buku */
  const mag = new THREE.Group(); mag.position.set(3.6, 3.2, 0.5); S.scene.add(mag); const seg = [], sc = [];
  for (let k = 0; k < 6; k++) { seg.push(new THREE.CylinderGeometry(0.07, 0.07, 0.42, 8).translate(0, k * 0.45, 0)); for (let q = 0; q < 8; q++) sc.push(new THREE.ConeGeometry(0.02, 0.09, 3).translate(0, 0.045, 0).rotateZ(0.5).rotateY(q / 8 * TAU).translate(0, k * 0.45 + 0.21, 0).translate(Math.cos(q / 8 * TAU) * 0.06, 0, Math.sin(q / 8 * TAU) * 0.06)); }
  S.add('ranting', new THREE.Mesh(mg(seg), new THREE.MeshStandardMaterial({ color: C(0.3, 0.5, 0.25) })), mag); S.add('sisik', new THREE.Mesh(mg(sc), new THREE.MeshStandardMaterial({ color: C(0.5, 0.4, 0.25) })), mag);
  mag.rotation.z = -0.3;
  /* nitrogen dari udara tanah masuk ke bintil (titik biru) */
  S.mkFlow(nod.map((g) => { g.computeBoundingSphere(); const c = g.boundingSphere.center; return [[c.x + 0.6, c.y + 0.4, 2.05], [c.x + 0.2, c.y + 0.1, 2.05], [c.x, c.y, 2.05]]; }), new THREE.Color(0.6, 1.4, 2.4), 50, 0.05, { amt: () => 1, spd: 0.2, jit: 0.03 });
  const state = { yaw: 0.35, yaw0: 0.35, pitch: 0.18, dist: 13, user: false, sun: 0, depth: 0, depthT: 0, z: 0 };
  const tgt = V(0, 2.2, 0);
  return S.finish(state, tgt, {
    tick(dt, T, st) { st.z += (st.sun - st.z) * Math.min(1, dt * 2.5); const a = smooth(0, 0.5, st.z), b = smooth(0.5, 1, st.z);
      tgt.set(lerp(lerp(0, 3.6, a), 1.0, b), lerp(lerp(2.2, 3.9, a), -0.9, b), lerp(lerp(0, 0.5, a), 2.0, b)); st.dist = lerp(lerp(13, 6, a), 4.2, b); if (b > 0.5) st.yaw = lerp(st.yaw, 0.05, 0.05); },
    api: { labels: { depth: null, sun: 'Perbesaran' } },
  });
}

/* ================= BEDAH: ZONA IKLIM (SUHU VS KETINGGIAN) ================= */
export const JUNGHUHN = [[0, 700, 'panas', '#a8d060'], [700, 1500, 'sedang', '#5fa84a'], [1500, 2500, 'sejuk', '#2e6a48'], [2500, 4000, 'dingin', '#8c7e66'], [4000, 5000, 'salju', '#eef3f8']];
export function buildClimateDissect(renderer) {
  const S = stage(renderer, ['#5a7a9a', '#101824'], 0), r = rng(95);
  /* gunung sebagai irisan: tiap pita ketinggian berwarna; 1 unit tinggi = 500 m */
  const U = 500, prof = (x) => 10 * Math.exp(-x * x / 30) + 0.0;
  const band = (h0, h1) => { const sh = new THREE.Shape(), N = 60, xs = []; for (let i = 0; i <= N; i++) xs.push(-12 + i / N * 24);
    const top = xs.map((x) => [x, Math.min(prof(x), h1 / U)]).filter(([, y]) => y >= h0 / U - 1e-6);
    if (!top.length) return null; sh.moveTo(top[0][0], h0 / U); top.forEach(([x, y]) => sh.lineTo(x, y)); sh.lineTo(top[top.length - 1][0], h0 / U); return new THREE.ExtrudeGeometry(sh, { depth: 3, bevelEnabled: false }).translate(0, 0, -1.5); };
  JUNGHUHN.forEach(([a, b, id, col]) => { const g = band(a, b); if (g) S.add(id, new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: new THREE.Color(col).convertSRGBToLinear(), roughness: 0.9 }))); });
  /* pohon kecil di tiap zona: palem/pisang di bawah, pohon daun lebar, cemara, rumput & edelweis */
  const trees = [], tm = new THREE.MeshStandardMaterial({ color: C(0.2, 0.4, 0.18) });
  for (let i = 0; i < 40; i++) { const x = -9 + r() * 18, y = prof(x); if (y > 7.6 || y < 0.1) continue; const h = y < 1.4 ? 0.5 : y < 3 ? 0.45 : y < 5 ? 0.4 : 0.15; trees.push(new THREE.ConeGeometry(h * 0.4, h, 6).translate(x, y + h / 2, 1.55 + r() * 0.3)); }
  S.scene.add(new THREE.Mesh(mg(trees), tm));
  /* awan orografis di lereng */
  const cloud = S.add('awan', new THREE.Mesh(mg([ellG([2, 0.5, 1.2], [-4.5, 4.2, 0.5], 12), ellG([1.6, 0.45, 1], [-3, 4.6, 0.2], 12), ellG([1.5, 0.4, 1], [3.5, 5.1, 0.3], 12)]), new THREE.MeshStandardMaterial({ color: C(0.95, 0.96, 0.98), transparent: true, opacity: 0.85, roughness: 1 })));
  /* pendaki + termometer */
  const climber = new THREE.Group(); S.scene.add(climber);
  climber.add(new THREE.Mesh(mg([new THREE.CylinderGeometry(0.08, 0.1, 0.35, 8).translate(0, 0.25, 0), ellG([0.08, 0.08, 0.08], [0, 0.5, 0], 8)]), new THREE.MeshStandardMaterial({ color: C(0.95, 0.4, 0.1) })));
  const thermo = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 8).translate(0, 0.5, 0), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 0.4, 0.3) })); thermo.position.set(0.3, 0.3, 0); climber.add(thermo);
  climber.add(at(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.05, 8, 1, true).translate(0, 0.52, 0), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25 })), V(0.3, 0.3, 0)));
  const state = { yaw: 0.0, yaw0: 0.0, pitch: 0.12, dist: 22, user: false, sun: 0, depth: 0, depthT: 0, alt: 0 };
  const tgt = V(0, 4.5, 0);
  return S.finish(state, tgt, {
    tick(dt, T, st) { st.alt += (st.sun * 4884 - st.alt) * Math.min(1, dt * 2.5); const y = st.alt / U;
      let x = 0; for (let i = 0; i < 40; i++) { const xm = -Math.sqrt(Math.max(0, -30 * Math.log(Math.max(1e-6, y / 10)))); x = xm; break; }
      climber.position.set(Math.max(-11, x), y, 1.6); const temp = 26.3 - 0.6 * st.alt / 100; st.temp = temp; thermo.scale.y = clamp((temp + 5) / 35, 0.03, 1);
      cloud.position.x = Math.sin(T * 0.1) * 0.5; },
    api: { labels: { depth: null, sun: 'Ketinggian' } },
  });
}

/* ================= BEDAH: GLETSER ================= */
export function buildGlacierDissect(renderer) {
  const S = stage(renderer, ['#6a8aa8', '#0e1620'], 0), r = rng(97);
  /* batuan dasar lembah */
  const rock = new THREE.Mesh(new THREE.BoxGeometry(12, 1.5, 5).translate(0, -0.75, 0), new THREE.MeshStandardMaterial({ color: C(0.42, 0.4, 0.38), roughness: 0.95, flatShading: true })); S.add('batuan', rock);
  const back = []; for (let i = 0; i < 12; i++) back.push(new THREE.DodecahedronGeometry(1 + r() * 1.5, 0).translate(-6 + i, 1 + r() * 2.5, -3.2 - r())); S.add('batuan', new THREE.Mesh(mg(back), rock.material));
  /* tubuh gletser berlapis: salju, firn, es biru (dipotong di depan) */
  const body = new THREE.Group(); S.scene.add(body);
  const slab = (y0, y1, col, id, op) => { const sh = new THREE.Shape(); sh.moveTo(-5.5, y0); for (let i = 0; i <= 20; i++) { const x = -5.5 + i / 20 * 10, h = y1 * (1 - Math.pow(i / 20, 2.2)); sh.lineTo(x, Math.max(y0, h)); } sh.lineTo(4.5, y0); const g = new THREE.ExtrudeGeometry(sh, { depth: 3.6, bevelEnabled: false }).translate(0, 0, -1.8); return S.add(id, new THREE.Mesh(g, new THREE.MeshPhysicalMaterial({ color: col, roughness: id === 'es' ? 0.15 : 0.8, transparent: op < 1, opacity: op, clearcoat: id === 'es' ? 0.8 : 0 })), body); };
  slab(0, 2.0, C(0.55, 0.78, 0.95), 'es', 0.92); slab(1.6, 2.5, C(0.85, 0.9, 0.95), 'firn', 1); slab(2.2, 2.75, C(0.98, 0.99, 1.0), 'salju', 1);
  /* celah (crevasse) */
  const cv = []; for (let k = 0; k < 4; k++) cv.push(new THREE.BoxGeometry(0.12, 1.2, 3.0).translate(-3.8 + k * 1.3, 2.0 - k * 0.25, 0));
  S.add('celah', new THREE.Mesh(mg(cv), new THREE.MeshStandardMaterial({ color: C(0.15, 0.3, 0.45) })), body);
  /* moraine (timbunan batu) di ujung dan tepi */
  const mo = []; for (let i = 0; i < 60; i++) mo.push(new THREE.DodecahedronGeometry(0.12 + r() * 0.25, 0).translate(4.2 + r() * 1.8, 0.1 + r() * 0.4, (r() - 0.5) * 3.6));
  const moraine = S.add('moraine', new THREE.Mesh(mg(mo), new THREE.MeshStandardMaterial({ color: C(0.5, 0.46, 0.42), flatShading: true })));
  /* air lelehan */
  const melt = S.mkFlow([[[3.5, 0.3, 0.5], [4.5, 0.1, 0.6], [5.5, 0.05, 0.9], [6.2, 0.02, 1.4]], [[3.8, 0.3, -0.4], [4.8, 0.1, -0.5], [5.8, 0.04, -0.8]]], new THREE.Color(0.6, 1.4, 2.6), 60, 0.07, { amt: (st) => 0.3 + 0.7 * st.melt, spd: 0.3, jit: 0.03 });
  const meltReg = S.add('lelehan', new THREE.Mesh(ellG([0.2, 0.05, 0.2], [5.4, 0.02, 0.9], 8), new THREE.MeshStandardMaterial({ color: C(0.4, 0.7, 0.95), roughness: 0.05 })));
  const state = { yaw: 0.45, yaw0: 0.45, pitch: 0.3, dist: 15, user: false, sun: 0, depth: 0, depthT: 0, k: 1, melt: 0 };
  /* data: luas es Puncak Jaya ~19 km2 (1850, perkiraan), ~2,3 km2 (2000), 0,27 (2021), 0,23 (2022) */
  const YR = [[1850, 1], [1950, 0.55], [2000, 0.3], [2015, 0.16], [2022, 0.07], [2030, 0.0]];
  const kAt = (y) => { for (let i = 1; i < YR.length; i++) if (y <= YR[i][0]) return lerp(YR[i - 1][1], YR[i][1], (y - YR[i - 1][0]) / (YR[i][0] - YR[i - 1][0])); return 0; };
  return S.finish(state, V(0, 1.2, 0), {
    tick(dt, T, st) { const yr = lerp(1850, 2030, st.sun); st.year = yr; const k = kAt(yr); st.k += (k - st.k) * Math.min(1, dt * 2.5); st.melt = 1 - st.k;
      body.scale.set(Math.max(0.02, 0.35 + 0.65 * st.k), Math.max(0.02, st.k), 1); body.position.x = -(1 - st.k) * 2.5; body.visible = st.k > 0.01;
      moraine.position.x = -(1 - st.k) * 4.5 * 0.0; },
    api: { labels: { depth: null, sun: 'Tahun' } },
  });
}
