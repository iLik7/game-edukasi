import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import { biomeAt } from './world.js';
import { palmGeo, palmAssets } from './monocot.js';
import { edelweissGeo } from './mountain.js';

/* KEHIDUPAN BIOMA: flora, fauna latar, dan ornamen untuk peternakan, hutan hujan, gurun, dan gunung.
   Semua tumbuhan dibakar ke satu geometri berwarna-verteks lalu digambar sebagai InstancedMesh (1 draw call per jenis).
   Fauna latar (kawanan burung, kuntul, kadal, kunang-kunang) tidak bisa dibedah; hanya penghidup suasana. */
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const ni = (g) => (g.index ? g.toNonIndexed() : g);
const ellG = (r, p, seg = 8) => new THREE.SphereGeometry(1, seg, Math.max(5, seg * 0.7 | 0)).scale(r[0], r[1], r[2]).translate(p[0], p[1], p[2]);
const tubeG = (pts, r, seg = 10, rs = 5) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => V(...p))), seg, r, rs);

/* warnai geometri (warna linear) dengan sedikit variasi gelap-terang menurut tinggi */
function paint(g, c, top = null, y0 = 0, y1 = 1) {
  g = ni(g); const p = g.attributes.position, n = p.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const t = top ? clamp((p.getY(i) - y0) / (y1 - y0), 0, 1) : 0, cc = top ? c.clone().lerp(top, t) : c; a[i * 3] = cc.r; a[i * 3 + 1] = cc.g; a[i * 3 + 2] = cc.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3)); if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2)); return g;
}
const bake = (parts) => mergeGeometries(parts.map((g) => { g = ni(g); for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(k)) g.deleteAttribute(k); return g; }));

/* helai daun melengkung: pangkal di (0,0,0), memanjang ke +z sambil menekuk dari sudut a0 ke a1 (0 = tegak, PI/2 = mendatar) */
function leaf(w, L, a0, a1, segs = 6, taper = 1, fold = 0.15, wseg = 2) {
  const g = new THREE.PlaneGeometry(1, 1, wseg, segs), p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const u = p.getX(i), v = p.getY(i) + 0.5; let y = 0, z = 0; const N = 8;
    for (let k = 0; k < N; k++) { const t = (k + 0.5) / N * v, ang = a0 + (a1 - a0) * t; y += Math.cos(ang) * L * v / N; z += Math.sin(ang) * L * v / N; }
    const wv = w * (taper ? Math.pow(Math.sin(Math.PI * (0.06 + 0.94 * v)), 0.55) * (1 - 0.25 * v) : 1);
    p.setXYZ(i, u * wv, y + fold * Math.abs(u) * wv, z);
  }
  g.computeVertexNormals(); return g;
}
/* tekstur daun majemuk menyirip (pakis, palem) dengan alfa */
let frondT = null;
function frondTex() {
  if (frondT) return frondT;
  const c = document.createElement('canvas'); c.width = 64; c.height = 256; const x = c.getContext('2d');
  x.strokeStyle = '#fff'; x.lineCap = 'round';
  for (let i = 0; i < 30; i++) { const y = 250 - i * 8.2, len = 30 * Math.sin(Math.PI * (0.08 + 0.92 * i / 30)); x.lineWidth = 5.5 - i * 0.1; for (const s of [1, -1]) { x.beginPath(); x.moveTo(32, y); x.quadraticCurveTo(32 + s * len * 0.5, y - 2, 32 + s * len, y - 12); x.stroke(); } }
  x.lineWidth = 3; x.beginPath(); x.moveTo(32, 256); x.lineTo(32, 6); x.stroke();
  frondT = new THREE.CanvasTexture(c); frondT.anisotropy = 4; return frondT;
}

/* tempatkan banyak salinan satu geometri */
function inst(scene, geo, mat, list, shadow = true) {
  if (!list.length) return null;
  const m = new THREE.InstancedMesh(geo, mat, list.length), M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = V(1, 1, 1);
  list.forEach((o, i) => { q.setFromAxisAngle(V(0, 1, 0), o.ry); s.setScalar(o.s); M.compose(V(o.x, o.y, o.z), q, s); m.setMatrixAt(i, M); });
  m.castShadow = shadow; m.receiveShadow = true; m.userData.noAO = true; m.computeBoundingSphere(); scene.add(m); return m;
}
const leafMat = (map = null) => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75, side: THREE.DoubleSide, map, alphaTest: map ? 0.45 : 0 });
const solidMat = (rough = 0.85, flat = false) => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: rough, flatShading: flat });

/* titik acak di wilayah bioma yang memenuhi syarat */
function scatter(r, n, cx, cz, R, ok, tries = 8) {
  const out = []; for (let i = 0; i < n * tries && out.length < n; i++) { const a = r() * TAU, d = Math.sqrt(r()) * R, x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d; if (ok(x, z)) out.push([x, z]); } return out;
}
const lowAt = (H, x, z, rad) => { let m = H(x, z); for (let k = 0; k < 6; k++) { const a = k / 6 * TAU; m = Math.min(m, H(x + Math.cos(a) * rad, z + Math.sin(a) * rad)); } return m; };
const away = (avoid, x, z, pad = 0) => !avoid.some((c) => Math.hypot(x - c.x, z - c.z) < c.r + pad);

/* ===================== GEOMETRI TUMBUHAN ===================== */
function bananaGeo(r, fruit) {
  const P = [], H = 2.2 + r() * 0.8;
  P.push(paint(new THREE.CylinderGeometry(0.1, 0.16, H, 8).translate(0, H / 2, 0), C(0.42, 0.48, 0.24), C(0.5, 0.6, 0.28), 0, H));
  for (let k = 0; k < 8; k++) { const L = 1.6 + r() * 0.7; P.push(paint(leaf(0.55, L, 0.25 + r() * 0.25, 1.7 + r() * 0.5, 7).rotateY(k * 2.4 + r() * 0.4).translate(0, H - 0.1, 0), k < 2 ? C(0.42, 0.45, 0.2) : C(0.26, 0.5, 0.14), C(0.36, 0.6, 0.18), H, H + 1.5)); }
  if (fruit) { const fx = 0.25; P.push(paint(tubeG([[0, H - 0.1, 0], [fx, H - 0.3, 0], [fx + 0.15, H - 1.3, 0]], 0.03, 6, 4), C(0.4, 0.45, 0.2)));
    for (let i = 0; i < 14; i++) { const t = i / 14, y = H - 0.45 - t * 0.6, a = i * 1.3; P.push(paint(new THREE.CapsuleGeometry(0.035, 0.16, 2, 5).rotateZ(-0.5).rotateY(a).translate(fx + 0.05 + Math.cos(a) * 0.1, y, Math.sin(a) * 0.1), C(0.4, 0.6, 0.15))); }
    P.push(paint(ellG([0.09, 0.16, 0.09], [fx + 0.15, H - 1.38, 0], 7), C(0.45, 0.12, 0.2))); }
  return bake(P);
}
function fernGeo(r, s = 1) { const P = []; for (let k = 0; k < 11; k++) P.push(paint(leaf(0.34 * s, (1.0 + r() * 0.5) * s, 0.35 + r() * 0.3, 1.75, 4, 1, 0, 1).rotateY(k * 2.4 + r() * 0.5), C(0.14, 0.32, 0.08), C(0.3, 0.5, 0.12), 0, s)); return bake(P); }
function treeFernGeo(r) {
  const P = [], H = 2.6 + r() * 2.2;
  P.push(paint(tubeG([[0, 0, 0], [0.1, H * 0.5, 0.05], [0, H, 0]], 0.13, 8, 6), C(0.22, 0.16, 0.11)));
  for (let k = 0; k < 13; k++) P.push(paint(leaf(0.75, 2.2 + r() * 0.6, 0.5 + r() * 0.3, 2.0, 5, 1, 0, 1).rotateY(k * 2.4).translate(0, H, 0), C(0.16, 0.36, 0.1), C(0.32, 0.52, 0.14), H, H + 1));
  for (let k = 0; k < 3; k++) P.push(paint(new THREE.TorusGeometry(0.07, 0.025, 4, 8, 4.5).rotateY(k * 2.1).translate(Math.cos(k * 2.1) * 0.12, H + 0.15, Math.sin(k * 2.1) * 0.12), C(0.4, 0.45, 0.15)));
  return bake(P);
}
function heliconiaGeo(r) {
  const P = []; for (let k = 0; k < 5; k++) P.push(paint(leaf(0.32, 1.3 + r() * 0.4, 0.1, 0.6, 6).rotateY(k * 1.3).translate(0, 0.4, 0), C(0.2, 0.42, 0.12), C(0.3, 0.55, 0.16), 0.4, 1.8));
  P.push(paint(new THREE.CylinderGeometry(0.03, 0.04, 1.8, 5).translate(0, 0.9, 0), C(0.25, 0.4, 0.14)));
  for (let k = 0; k < 7; k++) { const s = k % 2 ? 1 : -1, y = 1.1 + k * 0.13, b = new THREE.ConeGeometry(0.07, 0.32 - k * 0.02, 5).rotateZ(s * 1.0).translate(s * 0.12, y, 0); P.push(paint(b, C(0.85, 0.12, 0.08), C(0.95, 0.8, 0.2), y - 0.05, y + 0.12)); }
  return bake(P);
}
function understoryPalmGeo(r) {
  const P = [], H = 1.4 + r() * 1.6; P.push(paint(new THREE.CylinderGeometry(0.05, 0.07, H, 6).translate(0, H / 2, 0), C(0.3, 0.26, 0.16)));
  for (let k = 0; k < 9; k++) P.push(paint(leaf(0.6, 1.5 + r() * 0.4, 0.4 + r() * 0.4, 1.5, 4, 1, 0, 1).rotateY(k * 2.4).translate(0, H, 0), C(0.16, 0.36, 0.1), C(0.26, 0.5, 0.16), H, H + 1));
  return bake(P);
}
function birdNestFernGeo(r) { const P = []; for (let k = 0; k < 12; k++) P.push(paint(leaf(0.28, 0.9 + r() * 0.3, 0.3, 1.1, 5, 1, 0.1).rotateY(k * 0.52), C(0.32, 0.55, 0.16), C(0.42, 0.62, 0.2), 0, 0.8)); P.push(paint(ellG([0.22, 0.15, 0.22], [0, 0, 0], 7), C(0.25, 0.18, 0.12))); return bake(P); }
function mossLogGeo(r) {
  const P = [], L = 4 + r() * 3;
  P.push(paint(new THREE.CylinderGeometry(0.38, 0.45, L, 10).rotateZ(Math.PI / 2).translate(0, 0.35, 0), C(0.3, 0.22, 0.15)));
  for (let i = 0; i < 9; i++) P.push(paint(ellG([0.35 + r() * 0.3, 0.12, 0.3], [(r() - 0.5) * L * 0.9, 0.7, (r() - 0.5) * 0.3], 7), C(0.22, 0.42, 0.1)));
  for (let i = 0; i < 6; i++) { const x = (r() - 0.5) * L * 0.8; P.push(paint(new THREE.CylinderGeometry(0.16, 0.18, 0.04, 8, 1, false, 0, Math.PI).translate(x, 0.3 + r() * 0.2, 0.42), C(0.75, 0.55, 0.3))); }
  for (let i = 0; i < 5; i++) { const x = (r() - 0.5) * L, z = 0.6 + r() * 0.4; P.push(paint(new THREE.CylinderGeometry(0.015, 0.02, 0.12, 4).translate(x, 0.06, z), C(0.9, 0.88, 0.8)), paint(ellG([0.05, 0.03, 0.05], [x, 0.13, z], 6), C(0.85, 0.45, 0.2))); }
  return bake(P);
}
/* gurun */
function barrelCactusGeo(r) {
  const g = new THREE.SphereGeometry(0.4, 18, 10), p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), a = Math.atan2(z, x), k = 1 + 0.08 * Math.cos(a * 14); p.setXYZ(i, x * k, y > 0 ? y * 1.25 : y * 0.4, z * k); }
  g.computeVertexNormals(); g.translate(0, 0.18, 0);
  const P = [paint(g, C(0.25, 0.42, 0.22), C(0.35, 0.5, 0.26), -0.1, 0.6)];
  for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; P.push(paint(ellG([0.05, 0.04, 0.05], [Math.cos(a) * 0.1, 0.68, Math.sin(a) * 0.1], 5), r() < 0.5 ? C(0.95, 0.75, 0.15) : C(0.9, 0.3, 0.2))); }
  return bake(P);
}
function opuntiaGeo(r) {
  const P = [], pad = (p, rot, s) => { const g = ellG([0.32 * s, 0.42 * s, 0.07 * s], [0, 0.42 * s, 0], 8).rotateZ(rot).translate(...p); P.push(paint(g, C(0.3, 0.48, 0.25), C(0.38, 0.55, 0.3), p[1], p[1] + 0.8)); return [p[0] - Math.sin(rot) * 0.8 * s, p[1] + Math.cos(rot) * 0.8 * s, p[2]]; };
  const a = pad([0, 0, 0], 0.1, 1); const b = pad(a, -0.5, 0.8); pad(a, 0.6, 0.75); const c = pad(b, 0.2, 0.6);
  for (const q of [b, c]) for (let i = 0; i < 3; i++) P.push(paint(ellG([0.06, 0.08, 0.06], [q[0] + (i - 1) * 0.12, q[1] + 0.02, q[2]], 5), C(0.75, 0.15, 0.3)));
  return bake(P);
}
function dryShrubGeo(r) { const P = []; for (let i = 0; i < 30; i++) { const a = r() * TAU, e = 0.25 + r() * 0.5, L = 0.25 + r() * 0.4; P.push(paint(tubeG([[0, 0, 0], [Math.cos(a) * L * 0.4, L * 0.5 * e + 0.1, Math.sin(a) * L * 0.4], [Math.cos(a) * L, L * e, Math.sin(a) * L]], 0.015, 4, 3), C(0.42, 0.34, 0.25))); if (r() < 0.8) P.push(paint(ellG([0.05, 0.035, 0.05], [Math.cos(a) * L, L * e, Math.sin(a) * L], 5), C(0.45, 0.5, 0.34))); } P.push(paint(ellG([0.3, 0.18, 0.3], [0, 0.18, 0], 6), C(0.4, 0.42, 0.3))); return bake(P); }
function dryGrassGeo(r, col = C(0.78, 0.66, 0.4), top = C(0.9, 0.82, 0.55)) { const P = []; for (let i = 0; i < 12; i++) { const a = r() * TAU, h = 0.35 + r() * 0.45; P.push(paint(new THREE.ConeGeometry(0.02, h, 3).translate(0, h / 2, 0).rotateZ((r() - 0.5) * 0.7).rotateY(a).translate(Math.cos(a) * 0.08, 0, Math.sin(a) * 0.08), col, top, 0, h)); } return bake(P); }
function tumbleGeo(r) { const P = []; for (let i = 0; i < 26; i++) { const a = V(r() - 0.5, r() - 0.5, r() - 0.5).normalize().multiplyScalar(0.45), b = V(r() - 0.5, r() - 0.5, r() - 0.5).normalize().multiplyScalar(0.45); P.push(paint(tubeG([a.toArray(), a.clone().add(b).multiplyScalar(0.3).toArray(), b.toArray()], 0.012, 4, 3), C(0.6, 0.48, 0.32))); } return bake(P); }
/* gunung */
function cantigiGeo(r) { const P = []; for (let i = 0; i < 9; i++) { const a = r() * TAU, d = r() * 0.5, y = 0.3 + r() * 0.7, s = 0.25 + r() * 0.2; P.push(paint(ellG([s, s * 0.8, s], [Math.cos(a) * d, y, Math.sin(a) * d], 7), C(0.12, 0.25, 0.1), C(0.2, 0.32, 0.12), y - s, y + s)); if (r() < 0.7) P.push(paint(ellG([s * 0.45, s * 0.3, s * 0.45], [Math.cos(a) * d, y + s * 0.75, Math.sin(a) * d], 6), C(0.7, 0.12, 0.08))); } P.push(paint(new THREE.CylinderGeometry(0.04, 0.07, 0.5, 5).translate(0, 0.25, 0), C(0.3, 0.22, 0.16))); return bake(P); }
function rockCapGeo(r, snow) { const s = 1, P = [paint(new THREE.DodecahedronGeometry(s, 0).scale(1, 0.6, 0.85).translate(0, s * 0.25, 0), C(0.42, 0.41, 0.4))]; P.push(paint(ellG([s * 0.85, s * 0.22, s * 0.72], [0, s * 0.58, 0], 8), snow ? C(0.92, 0.94, 0.97) : C(0.2, 0.36, 0.12))); return bake(P); }
function edelweisBaked(r, s) { const e = edelweissGeo(r, s); return bake([paint(e.leaves, C(0.55, 0.6, 0.53)), paint(e.stems, C(0.55, 0.6, 0.5)), paint(e.bracts, C(0.95, 0.95, 0.9)), paint(e.discs, C(0.9, 0.75, 0.3))]); }

/* ===================== FAUNA LATAR ===================== */
/* kawanan burung yang berputar di udara (sayap mengepak atau melayang) */
function flock(scene, o) {
  const G = new THREE.Group(); scene.add(G); const birds = [], r = rng(o.seed || 1);
  const bm = new THREE.MeshStandardMaterial({ color: o.color, roughness: 0.8, side: THREE.DoubleSide });
  const s = o.size || 1, wingG = new THREE.PlaneGeometry(0.9 * s, 0.32 * s).translate(0.45 * s, 0, 0).rotateX(-Math.PI / 2);
  for (let i = 0; i < o.n; i++) {
    const b = new THREE.Group(), body = new THREE.Mesh(ellG([0.12 * s, 0.1 * s, 0.38 * s], [0, 0, 0], 6), bm), wl = new THREE.Mesh(wingG, bm), wr = new THREE.Mesh(wingG, bm); wr.scale.x = -1;
    b.add(body, wl, wr); G.add(b); birds.push({ b, wl, wr, ph: r() * TAU, rad: o.R * (0.5 + r() * 0.5), h: o.h + r() * (o.hv || 6), sp: (o.sp || 0.15) * (0.8 + r() * 0.4) * (r() < 0.5 ? 1 : -1), off: V((r() - 0.5) * 10, 0, (r() - 0.5) * 10) });
  }
  return { G, update(T, show) { G.visible = show; if (!show) return; for (const q of birds) { const a = q.ph + T * q.sp, x = o.x + q.off.x + Math.cos(a) * q.rad, z = o.z + q.off.z + Math.sin(a) * q.rad; q.b.position.set(x, q.h + Math.sin(T * 0.5 + q.ph) * 1.5, z); q.b.rotation.y = -a + (q.sp > 0 ? 0 : Math.PI); q.b.rotation.z = (q.sp > 0 ? -1 : 1) * 0.25;
    const fl = o.glide ? (Math.sin(T * 0.4 + q.ph) > 0.7 ? Math.sin(T * 9 + q.ph) * 0.5 : 0.08) : Math.sin(T * (o.flap || 11) + q.ph) * 0.6; q.wl.rotation.z = fl; q.wr.rotation.z = -fl; } } };
}
/* kuntul (burung bangau putih kecil) berdiri di sawah, sesekali mematuk */
function egrets(scene, H, pts) {
  const wm = new THREE.MeshStandardMaterial({ color: C(0.96, 0.96, 0.94), roughness: 0.7 }), km = new THREE.MeshStandardMaterial({ color: C(0.12, 0.12, 0.12) }), ym = new THREE.MeshStandardMaterial({ color: C(0.9, 0.75, 0.2) });
  const list = pts.map(([x, z, y], i) => { const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = i * 1.7; scene.add(g);
    g.add(new THREE.Mesh(ellG([0.12, 0.13, 0.3], [0, 0.62, 0], 8), wm), new THREE.Mesh(mergeGeometries([new THREE.CylinderGeometry(0.008, 0.008, 0.5, 4).translate(0.04, 0.27, 0), new THREE.CylinderGeometry(0.008, 0.008, 0.5, 4).translate(-0.04, 0.27, 0)]), km));
    const neck = new THREE.Group(); neck.position.set(0, 0.68, 0.22); g.add(neck);
    neck.add(new THREE.Mesh(tubeG([[0, 0, 0], [0, 0.18, 0.02], [0, 0.3, 0.08]], 0.03, 8, 5), wm), new THREE.Mesh(ellG([0.05, 0.05, 0.07], [0, 0.32, 0.1], 7), wm), new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.14, 5).rotateX(Math.PI / 2).translate(0, 0.31, 0.2), ym));
    return { g, neck, ph: i * 2.3 }; });
  return { update(T) { for (const q of list) { const c = (T * 0.25 + q.ph) % 6; q.neck.rotation.x = c < 0.8 ? Math.sin(c / 0.8 * Math.PI) * 1.3 : Math.sin(T * 1.5 + q.ph) * 0.05; } } };
}
/* kadal/biawak: berlari cepat ke titik acak lalu diam berjemur */
function lizards(scene, H, o) {
  const r = rng(o.seed || 7), m = new THREE.MeshStandardMaterial({ color: o.color, roughness: 0.7 }), list = [];
  const geo = mergeGeometries([ellG([0.06, 0.04, 0.17], [0, 0.05, 0], 8), ellG([0.045, 0.035, 0.07], [0, 0.06, 0.2], 7), tubeG([[0, 0.04, -0.14], [0.03, 0.03, -0.3], [0, 0.02, -0.5]], 0.025, 8, 4), ...[[1, 1], [-1, 1], [1, -1], [-1, -1]].map(([sx, sz]) => tubeG([[sx * 0.04, 0.04, sz * 0.09], [sx * 0.1, 0.03, sz * 0.12], [sx * 0.12, 0, sz * 0.08]], 0.012, 3, 3))].map(ni));
  for (const [x, z] of o.pts) { const me = new THREE.Mesh(geo, m); me.scale.setScalar(o.s || 1); scene.add(me); list.push({ me, x, z, hx: x, hz: z, tx: x, tz: z, wait: r() * 4 }); }
  return { update(T, dt, show) { for (const q of list) { q.me.visible = show; if (!show) continue; if (q.wait > 0) { q.wait -= dt; if (q.wait <= 0) { const a = r() * TAU, d = 2 + r() * (o.R || 8); q.tx = q.hx + Math.cos(a) * d; q.tz = q.hz + Math.sin(a) * d; } }
    else { const dx = q.tx - q.x, dz = q.tz - q.z, L = Math.hypot(dx, dz), sp = (o.speed || 3) * dt; if (L < sp) { q.wait = 1.5 + r() * 5; } else { q.x += dx / L * sp; q.z += dz / L * sp; q.me.rotation.y = Math.atan2(dx, dz) + Math.sin(T * 30) * 0.25; } }
    q.me.position.set(q.x, H(q.x, q.z) + 0.01, q.z); } } };
}

/* ===================== PETERNAKAN ===================== */
export function buildFarmLife(scene, H, o) {
  const G = new THREE.Group(); scene.add(G); const r = rng(4242), obs = [], upd = [];
  const wood = solidMat(0.9), straw = solidMat(1);
  const at = (g, x, z, ry = 0, lift = 0, rad = 1) => { const y = lowAt(H, x, z, rad) + lift; g.rotateY(ry).translate(x, y, z); return g; };
  /* lumbung kayu bercat merah dengan atap pelana dan pintu besar */
  { const [x, z, ry] = o.lumbung, W = 9, D = 12, Hh = 4.2, P = [];
    P.push(paint(new THREE.BoxGeometry(W + 0.4, 0.5, D + 0.4).translate(0, 0.05, 0), C(0.55, 0.53, 0.5)));
    P.push(paint(new THREE.BoxGeometry(W, Hh, D).translate(0, 0.3 + Hh / 2, 0), C(0.55, 0.13, 0.08), C(0.62, 0.16, 0.1), 0, Hh));
    const sh = new THREE.Shape(); sh.moveTo(-W / 2, 0); sh.lineTo(W / 2, 0); sh.lineTo(0, 2.8); sh.closePath();
    const gab = new THREE.ExtrudeGeometry(sh, { depth: D, bevelEnabled: false }).translate(0, 0.3 + Hh, -D / 2); P.push(paint(gab, C(0.55, 0.13, 0.08)));
    const rl = Math.hypot(W / 2 + 0.6, 2.9); for (const s of [1, -1]) P.push(paint(new THREE.BoxGeometry(rl, 0.14, D + 0.8).translate(s * rl / 2, 0, 0).rotateZ(s * -Math.atan2(2.9, W / 2 + 0.6)).translate(0, 0.3 + Hh + 2.85, 0).translate(0, 0, 0), C(0.3, 0.3, 0.32)));
    for (const s of [1, -1]) { P.push(paint(new THREE.BoxGeometry(3.4, 3.2, 0.12).translate(0, 1.9, s * (D / 2 + 0.04)), C(0.88, 0.85, 0.78)));
      for (const d of [1, -1]) P.push(paint(new THREE.BoxGeometry(0.16, 4.4, 0.06).rotateZ(d * 0.82).translate(0, 1.9, s * (D / 2 + 0.12)), C(0.88, 0.85, 0.78)));
      P.push(paint(new THREE.BoxGeometry(1.0, 1.0, 0.1).translate(0, 5.6, s * (D / 2 + 0.06)), C(0.88, 0.85, 0.78))); }
    for (const s of [1, -1]) for (const zz of [-3, 3]) P.push(paint(new THREE.BoxGeometry(0.1, 0.9, 1.2).translate(s * (W / 2 + 0.04), 2.6, zz), C(0.88, 0.85, 0.78)));
    const m = new THREE.Mesh(at(bake(P), x, z, ry, 0, 6), wood); m.castShadow = m.receiveShadow = true; G.add(m);
    for (const k of [-4, 0, 4]) obs.push([x + Math.sin(ry) * k, z + Math.cos(ry) * k, 4.6]); }
  /* kandang ayam panggung dengan pagar bambu rendah */
  { const [x, z] = o.kandangAyam, P = [];
    for (const [a, b] of [[-1.1, -0.8], [1.1, -0.8], [-1.1, 0.8], [1.1, 0.8]]) P.push(paint(new THREE.BoxGeometry(0.12, 1.4, 0.12).translate(a, 0.7, b), C(0.45, 0.33, 0.2)));
    P.push(paint(new THREE.BoxGeometry(2.4, 1.1, 1.8).translate(0, 1.4 + 0.55, 0), C(0.62, 0.5, 0.32)));
    for (const s of [1, -1]) P.push(paint(new THREE.BoxGeometry(2.8, 0.08, 1.35).rotateX(s * 0.5).translate(0, 2.75, s * 0.55), C(0.5, 0.25, 0.15)));
    P.push(paint(new THREE.BoxGeometry(0.5, 0.05, 1.6).rotateZ(-0.7).translate(1.6, 0.75, 0), C(0.5, 0.38, 0.24)), paint(new THREE.BoxGeometry(0.5, 0.5, 0.05).translate(0.6, 1.75, 0.92), C(0.15, 0.1, 0.06)));
    const fr = o.ayamR; for (let i = 0; i < 40; i++) { const a = i / 40 * TAU; if (Math.abs(Math.atan2(Math.sin(a - Math.PI), Math.cos(a - Math.PI))) < 0.25) continue; P.push(paint(new THREE.CylinderGeometry(0.03, 0.03, 0.7, 4).translate(Math.cos(a) * fr, 0.35, Math.sin(a) * fr), C(0.72, 0.62, 0.38))); }
    for (const h of [0.25, 0.55]) for (let i = 0; i < 40; i++) { const a0 = i / 40 * TAU, a1 = (i + 1) / 40 * TAU; if (Math.abs(Math.atan2(Math.sin((a0 + a1) / 2 - Math.PI), Math.cos((a0 + a1) / 2 - Math.PI))) < 0.25) continue; const L = 2 * fr * Math.sin(Math.PI / 40); P.push(paint(new THREE.CylinderGeometry(0.02, 0.02, L, 3).rotateZ(Math.PI / 2).rotateY(-(a0 + a1) / 2 + Math.PI / 2).translate(Math.cos((a0 + a1) / 2) * fr * Math.cos(Math.PI / 40), h, Math.sin((a0 + a1) / 2) * fr * Math.cos(Math.PI / 40)), C(0.72, 0.62, 0.38))); }
    /* tempat pakan dan minum */
    P.push(paint(new THREE.CylinderGeometry(0.3, 0.35, 0.15, 10).translate(-1.5, 0.08, 1.8), C(0.6, 0.6, 0.62)), paint(new THREE.CylinderGeometry(0.25, 0.25, 0.04, 10).translate(-1.5, 0.15, 1.8), C(0.85, 0.75, 0.35)));
    const y = H(x, z) - 0.05, gg = bake(P).translate(x, y, z); const m = new THREE.Mesh(gg, wood); m.castShadow = true; G.add(m); obs.push([x, z, 1.5]); }
  /* saung bambu beratap ijuk di tepi sawah */
  { const [x, z] = o.saung, P = [];
    for (const [a, b] of [[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4]]) P.push(paint(new THREE.CylinderGeometry(0.07, 0.08, 2.6, 6).translate(a, 1.3, b), C(0.7, 0.6, 0.35)));
    P.push(paint(new THREE.BoxGeometry(3.2, 0.1, 3.2).translate(0, 0.6, 0), C(0.75, 0.65, 0.4)));
    P.push(paint(new THREE.ConeGeometry(2.8, 1.6, 4, 1).rotateY(Math.PI / 4).translate(0, 3.2, 0), C(0.22, 0.17, 0.12), C(0.32, 0.25, 0.16), 2.4, 4));
    P.push(paint(new THREE.CylinderGeometry(0.12, 0.12, 0.25, 8).translate(0.6, 0.78, 0.4), C(0.55, 0.42, 0.3)));
    const m = new THREE.Mesh(at(bake(P), x, z, 0.3, -0.05, 1.8), wood); m.castShadow = true; G.add(m); obs.push([x, z, 1.9]); }
  /* orang-orangan sawah */
  for (const [x, z, y] of o.orang) { const P = [paint(new THREE.CylinderGeometry(0.04, 0.04, 2.1, 5).translate(0, 1.05, 0), C(0.5, 0.4, 0.25)), paint(new THREE.CylinderGeometry(0.03, 0.03, 1.4, 5).rotateZ(Math.PI / 2).translate(0, 1.55, 0), C(0.5, 0.4, 0.25)),
      paint(new THREE.CylinderGeometry(0.2, 0.32, 0.8, 7).translate(0, 1.35, 0), C(0.25, 0.35, 0.6)), paint(ellG([0.16, 0.18, 0.16], [0, 1.95, 0], 8), C(0.85, 0.75, 0.5)), paint(new THREE.ConeGeometry(0.42, 0.28, 10).translate(0, 2.16, 0), C(0.85, 0.72, 0.38)),
      ...[1, -1].map((s) => paint(new THREE.ConeGeometry(0.06, 0.25, 5).rotateZ(s * 1.8).translate(s * 0.72, 1.52, 0), C(0.85, 0.72, 0.38))), paint(new THREE.PlaneGeometry(0.5, 0.06).translate(0.35, 1.2, 0.2), C(0.9, 0.2, 0.15))];
    const m = new THREE.Mesh(bake(P).rotateY(r() * TAU).translate(x, y, z), straw); m.castShadow = true; G.add(m); }
  /* pedati (gerobak sapi) */
  { const [x, z, ry] = o.pedati, P = [paint(new THREE.BoxGeometry(1.5, 0.55, 2.4).translate(0, 1.05, 0), C(0.45, 0.32, 0.2)), paint(new THREE.CylinderGeometry(1.0, 1.0, 2.6, 10, 1, true, -Math.PI / 2, Math.PI).rotateX(Math.PI / 2).rotateY(Math.PI / 2).rotateZ(0).translate(0, 1.3, 0).scale(0.8, 0.9, 1), C(0.3, 0.24, 0.16))];
    for (const s of [1, -1]) { P.push(paint(new THREE.TorusGeometry(0.75, 0.06, 5, 16).rotateY(Math.PI / 2).translate(s * 0.85, 0.75, 0.2), C(0.35, 0.25, 0.15)), paint(new THREE.CylinderGeometry(0.12, 0.12, 0.2, 8).rotateZ(Math.PI / 2).translate(s * 0.85, 0.75, 0.2), C(0.3, 0.22, 0.14)));
      for (let k = 0; k < 6; k++) P.push(paint(new THREE.BoxGeometry(0.04, 1.45, 0.05).rotateX(k / 6 * Math.PI).translate(s * 0.85, 0.75, 0.2), C(0.35, 0.25, 0.15)));
      P.push(paint(new THREE.BoxGeometry(0.08, 0.08, 2.6).rotateX(-0.25).translate(s * 0.45, 0.6, 2.2), C(0.45, 0.32, 0.2))); }
    P.push(paint(new THREE.BoxGeometry(1.2, 0.4, 1.6).translate(0, 1.45, -0.2), C(0.85, 0.72, 0.38)));
    const m = new THREE.Mesh(at(bake(P), x, z, ry, -0.02, 1.4), wood); m.castShadow = true; G.add(m); obs.push([x, z, 1.6]); }
  /* jerami: gulungan bulat dan tumpukan jerami (dongkelan) mengelilingi tiang */
  { const bales = [], stacks = [], bg = bake([paint(new THREE.CylinderGeometry(0.7, 0.7, 1.2, 14).rotateZ(Math.PI / 2).translate(0, 0.68, 0), C(0.82, 0.68, 0.36), C(0.9, 0.78, 0.45), 0, 1.4)]), sg = bake([paint(new THREE.SphereGeometry(1.3, 12, 8, 0, TAU, 0, Math.PI * 0.62).scale(1, 1.5, 1).translate(0, 0.3, 0), C(0.75, 0.62, 0.33), C(0.85, 0.72, 0.4), 0, 2.3), paint(new THREE.CylinderGeometry(0.05, 0.05, 3.2, 5).translate(0, 1.6, 0), C(0.4, 0.3, 0.2))]);
    for (const [x, z] of o.bales) { bales.push({ x, y: lowAt(H, x, z, 0.7) - 0.05, z, ry: r() * TAU, s: 1 }); obs.push([x, z, 0.8]); }
    for (const [x, z] of o.stacks) { stacks.push({ x, y: lowAt(H, x, z, 1.2) - 0.1, z, ry: r() * TAU, s: 0.9 + r() * 0.3 }); obs.push([x, z, 1.3]); }
    inst(G, bg, straw, bales); inst(G, sg, straw, stacks); }
  /* sumur timba beratap dan palung minum ternak */
  { const [x, z] = o.sumur, P = [paint(new THREE.CylinderGeometry(0.75, 0.8, 0.8, 14, 1, true).translate(0, 0.4, 0), C(0.6, 0.58, 0.55)), paint(new THREE.TorusGeometry(0.75, 0.08, 5, 16).rotateX(Math.PI / 2).translate(0, 0.8, 0), C(0.55, 0.53, 0.5)), paint(new THREE.CircleGeometry(0.72, 14).rotateX(-Math.PI / 2).translate(0, 0.2, 0), C(0.1, 0.15, 0.18))];
    for (const s of [1, -1]) P.push(paint(new THREE.BoxGeometry(0.1, 2.0, 0.1).translate(s * 0.9, 1.0, 0), C(0.45, 0.33, 0.2)));
    P.push(paint(new THREE.CylinderGeometry(0.06, 0.06, 2.0, 6).rotateZ(Math.PI / 2).translate(0, 1.7, 0), C(0.45, 0.33, 0.2)), paint(new THREE.ConeGeometry(1.4, 0.7, 4).rotateY(Math.PI / 4).translate(0, 2.35, 0), C(0.5, 0.25, 0.15)), paint(new THREE.CylinderGeometry(0.008, 0.008, 0.8, 3).translate(0.1, 1.3, 0), C(0.5, 0.45, 0.35)), paint(new THREE.CylinderGeometry(0.13, 0.1, 0.22, 8).translate(0.1, 0.85, 0), C(0.35, 0.35, 0.38)));
    const m = new THREE.Mesh(at(bake(P), x, z, 0, -0.05, 0.9), wood); m.castShadow = true; G.add(m); obs.push([x, z, 1.0]);
    const [tx, tz] = o.palung, T = [paint(new THREE.BoxGeometry(2.4, 0.5, 0.7).translate(0, 0.25, 0), C(0.5, 0.48, 0.45)), paint(new THREE.BoxGeometry(2.2, 0.05, 0.5).translate(0, 0.45, 0), C(0.25, 0.38, 0.45))];
    const t = new THREE.Mesh(at(bake(T), tx, tz, 0.5, -0.05, 1.2), solidMat(0.4)); t.castShadow = true; G.add(t); obs.push([tx, tz, 1.1]); }
  /* jemuran gabah di atas terpal */
  { const [x, z] = o.jemur, P = [paint(new THREE.PlaneGeometry(6, 4).rotateX(-Math.PI / 2).translate(0, 0.02, 0), C(0.15, 0.3, 0.6)), paint(new THREE.PlaneGeometry(5.4, 3.4, 8, 6).rotateX(-Math.PI / 2).translate(0, 0.05, 0), C(0.85, 0.7, 0.3))];
    const g = P[1], p = g.attributes.position; for (let i = 0; i < p.count; i++) p.setY(i, 0.04 + 0.05 * Math.sin(p.getX(i) * 4) * Math.sin(p.getZ(i) * 3)); g.computeVertexNormals();
    P.push(paint(new THREE.BoxGeometry(0.06, 0.06, 1.2).rotateX(0.3).translate(2.6, 0.4, 1.4), C(0.5, 0.4, 0.25)), paint(new THREE.BoxGeometry(0.6, 0.05, 0.3).translate(2.6, 0.08, 0.85), C(0.5, 0.4, 0.25)));
    const y = lowAt(H, x, z, 3) + 0.02, mm = new THREE.Mesh(bake(P).rotateY(0.2).translate(x, y, z), solidMat(0.9)); mm.receiveShadow = true; G.add(mm); }
  /* kebun sayur: bedengan kubis dan tomat */
  { const [x, z] = o.kebun, P = []; for (let b = 0; b < 4; b++) { const bz = (b - 1.5) * 1.6; P.push(paint(new THREE.BoxGeometry(5, 0.25, 0.9).translate(0, 0.12, bz), C(0.32, 0.22, 0.14)));
      for (let k = 0; k < 8; k++) { const kx = -2.2 + k * 0.62; if (b % 2 === 0) P.push(paint(ellG([0.22, 0.17, 0.22], [kx, 0.38, bz], 7), C(0.4, 0.62, 0.3), C(0.6, 0.78, 0.45), 0.2, 0.55)); else { P.push(paint(new THREE.CylinderGeometry(0.015, 0.015, 0.9, 3).translate(kx, 0.7, bz), C(0.55, 0.45, 0.3)), paint(ellG([0.16, 0.25, 0.16], [kx, 0.6, bz], 6), C(0.2, 0.45, 0.15))); for (let q = 0; q < 3; q++) P.push(paint(ellG([0.05, 0.05, 0.05], [kx + (q - 1) * 0.08, 0.5 + q * 0.07, bz + 0.12], 5), C(0.85, 0.15, 0.1))); } } }
    const y = lowAt(H, x, z, 2.5) - 0.02, m = new THREE.Mesh(bake(P).rotateY(-0.4).translate(x, y, z), solidMat(0.8)); m.castShadow = true; G.add(m); obs.push([x, z, 2.8]); }
  /* deretan pisang dan pagar bambu sepanjang batas peternakan */
  { const B0 = bananaGeo(rng(11), false), B1 = bananaGeo(rng(12), true), l0 = [], l1 = []; for (const [x, z] of o.pisang) { (r() < 0.4 ? l1 : l0).push({ x, y: lowAt(H, x, z, 0.2) - 0.05, z, ry: r() * TAU, s: 0.85 + r() * 0.35 }); obs.push([x, z, 0.35]); }
    const lm = leafMat(); inst(G, B0, lm, l0); inst(G, B1, lm, l1); }
  /* fauna latar: kuntul di sawah, burung layang-layang berputar di atas */
  const eg = egrets(G, H, o.kuntul); const sw = flock(G, { x: o.center[0], z: o.center[1], R: 40, h: H(o.center[0], o.center[1]) + 16, hv: 6, n: 9, color: C(0.1, 0.1, 0.14), size: 0.35, sp: 0.35, flap: 14, seed: 3 });
  upd.push((P, T) => { eg.update(T); sw.update(T, true); });
  return { obs, clear: o.clear, update(P, T, dt) { G.visible = Math.hypot(P.x - o.center[0], P.z - o.center[1]) < 260; if (G.visible) for (const f of upd) f(P, T, dt); } };
}

/* ===================== HUTAN HUJAN ===================== */
export function buildJungleLife(scene, H, o) {
  const G = new THREE.Group(); scene.add(G); const r = rng(5151), obs = [], dens = o.dense ? 1 : 0.75;
  const ok = (x, z, pad = 1.5) => { const B = biomeAt(x, z); return B.hujan > 0.62 && B.pantai < 0.2 && B.laut < 0.01 && H(x, z) > o.WATER + 0.8 && away(o.avoid, x, z, pad); };
  const put = (n, R, pad, fn) => scatter(r, Math.round(n * dens), o.center[0], o.center[1], R, (x, z) => ok(x, z, pad)).map(([x, z]) => fn(x, z));
  const lm = leafMat(), fm = leafMat(frondTex()), sm = solidMat(0.85);
  const F = [fernGeo(rng(21), 1), fernGeo(rng(22), 1.4)];
  [0, 1].forEach((k) => inst(G, F[k], fm, put(340, 105, 0.6, (x, z) => ({ x, y: H(x, z) - 0.05, z, ry: r() * TAU, s: 1.0 + r() * 0.9 })), false));
  const TF = treeFernGeo(rng(23)); inst(G, TF, fm, put(40, 105, 2, (x, z) => { obs.push([x, z, 0.3]); return { x, y: lowAt(H, x, z, 0.2) - 0.1, z, ry: r() * TAU, s: 0.8 + r() * 0.5 }; }));
  const PL = understoryPalmGeo(rng(24)); inst(G, PL, fm, put(80, 105, 2, (x, z) => ({ x, y: lowAt(H, x, z, 0.2) - 0.05, z, ry: r() * TAU, s: 0.8 + r() * 0.5 })));
  const HE = heliconiaGeo(rng(25)); inst(G, HE, lm, put(110, 100, 1, (x, z) => ({ x, y: H(x, z) - 0.05, z, ry: r() * TAU, s: 0.8 + r() * 0.4 })));
  const BA = bananaGeo(rng(26), true); inst(G, BA, lm, put(35, 100, 2, (x, z) => { obs.push([x, z, 0.3]); return { x, y: lowAt(H, x, z, 0.2) - 0.05, z, ry: r() * TAU, s: 0.9 + r() * 0.3 }; }));
  const LG = mossLogGeo(rng(27)); inst(G, LG, sm, put(10, 95, 4, (x, z) => { obs.push([x, z, 1.5]); return { x, y: lowAt(H, x, z, 2.5) - 0.12, z, ry: r() * TAU, s: 0.9 + r() * 0.3 }; }));
  /* epifit paku sarang burung dan anggrek di batang pohon raksasa, liana menjuntai dari dahan */
  { const NF = birdNestFernGeo(rng(28)), nf = [], orch = [], lian = [];
    for (const [gx, gz, gh] of o.giants) { const y0 = H(gx, gz);
      for (let k = 0; k < 4; k++) { const a = r() * TAU, h = 7 + r() * (gh * 0.5); nf.push({ x: gx + Math.cos(a) * 1.05, y: y0 + h, z: gz + Math.sin(a) * 1.05, ry: r() * TAU, s: 1 + r() * 0.5 });
        for (let q = 0; q < 6; q++) orch.push(paint(ellG([0.06, 0.05, 0.03], [gx + Math.cos(a + 0.3) * 1.15, y0 + h + 0.5 + q * 0.09, gz + Math.sin(a + 0.3) * 1.15 + (q % 2) * 0.06], 5), q % 3 ? C(0.85, 0.5, 0.8) : C(0.98, 0.95, 0.98))); }
      for (let k = 0; k < 10; k++) { const a = r() * TAU, d = 3 + r() * 5, top = y0 + gh - 1 + r() * 2, bot = y0 + 2 + r() * gh * 0.4, x = gx + Math.cos(a) * d, z = gz + Math.sin(a) * d; lian.push(paint(tubeG([[x, top, z], [x + 0.3, (top + bot) / 2, z + 0.2], [x + 0.1, bot, z - 0.1]], 0.04 + r() * 0.03, 8, 4), C(0.3, 0.25, 0.15))); if (r() < 0.6) lian.push(paint(ellG([0.25, 0.4, 0.25], [x + 0.1, bot + 0.3, z - 0.1], 6), C(0.2, 0.4, 0.12))); } }
    inst(G, NF, lm, nf); if (orch.length) G.add(new THREE.Mesh(bake(orch), lm)); if (lian.length) { const m = new THREE.Mesh(bake(lian), sm); m.castShadow = true; G.add(m); } }
  /* kabut rendah yang melayang */
  const mist = []; { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'), gr = x.createRadialGradient(32, 32, 2, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c), mmat = new THREE.SpriteMaterial({ map: t, transparent: true, opacity: 0.16, depthWrite: false, color: 0xe8f0ea });
    for (const [x0, z0] of put(18, 95, 0, (x, z) => [x, z])) { const s = new THREE.Sprite(mmat); s.scale.set(22, 6, 1); s.position.set(x0, H(x0, z0) + 2.5, z0); s.userData = { x0, z0, ph: r() * TAU }; s.renderOrder = 2; G.add(s); mist.push(s); } }
  /* kunang-kunang saat malam */
  const N = 160, fp = new Float32Array(N * 3), fb = []; for (let i = 0; i < N; i++) { const a = r() * TAU, d = Math.sqrt(r()) * 70, x = o.center[0] + Math.cos(a) * d, z = o.center[1] + Math.sin(a) * d; fb.push([x, H(x, z) + 0.5 + r() * 2.5, z, r() * TAU]); }
  const fg = new THREE.BufferGeometry(); fg.setAttribute('position', new THREE.BufferAttribute(fp, 3));
  const flies = new THREE.Points(fg, new THREE.PointsMaterial({ color: new THREE.Color(1.6, 2.2, 0.5), size: 0.32, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })); flies.frustumCulled = false; flies.userData.noAO = true; G.add(flies);
  /* fauna: kawanan burung di atas kanopi, biawak di lantai hutan */
  const fk = flock(G, { x: o.center[0], z: o.center[1], R: 60, h: H(o.center[0], o.center[1]) + 38, hv: 8, n: 8, color: C(0.08, 0.08, 0.1), size: 0.5, sp: 0.2, flap: 8, seed: 5 });
  const bw = lizards(G, H, { pts: put(4, 80, 2, (x, z) => [x, z]), color: C(0.24, 0.26, 0.2), s: 4.5, speed: 1.6, R: 10, seed: 9 });
  return { obs, update(P, T, dt, night) { const show = Math.hypot(P.x - o.center[0], P.z - o.center[1]) < 240; G.visible = show; if (!show) return;
    for (const s of mist) { const u = s.userData; s.position.x = u.x0 + Math.sin(T * 0.05 + u.ph) * 6; s.position.z = u.z0 + Math.cos(T * 0.04 + u.ph) * 6; }
    flies.material.opacity = night * 0.95; if (night > 0.01) { for (let i = 0; i < N; i++) { const b = fb[i]; fp[i * 3] = b[0] + Math.sin(T * 0.4 + b[3]) * 1.2; fp[i * 3 + 1] = b[1] + Math.sin(T * 0.7 + b[3] * 2) * 0.4 + (Math.sin(T * 6 + b[3] * 9) > 0.6 ? 0 : -50); fp[i * 3 + 2] = b[2] + Math.cos(T * 0.35 + b[3]) * 1.2; } fg.attributes.position.needsUpdate = true; }
    fk.update(T, true); bw.update(T, dt, true); } };
}

/* ===================== GURUN ===================== */
export function buildDesertLife(scene, H, o) {
  const G = new THREE.Group(); scene.add(G); const r = rng(6161), obs = [], dens = o.dense ? 1 : 0.8;
  const ok = (x, z, pad = 1) => { const B = biomeAt(x, z); return B.gurun > 0.65 && B.pantai < 0.25 && B.laut < 0.01 && H(x, z) > o.WATER + 1 && away(o.avoid, x, z, pad); };
  const put = (n, R, pad, fn) => scatter(r, Math.round(n * dens), o.center[0], o.center[1], R, (x, z) => ok(x, z, pad)).map(([x, z]) => fn(x, z));
  const sm = solidMat(0.8);
  inst(G, barrelCactusGeo(rng(31)), sm, put(90, 120, 1, (x, z) => ({ x, y: H(x, z) - 0.08, z, ry: r() * TAU, s: 0.7 + r() * 0.7 })));
  inst(G, opuntiaGeo(rng(32)), sm, put(70, 120, 1, (x, z) => { obs.push([x, z, 0.5]); return { x, y: H(x, z) - 0.05, z, ry: r() * TAU, s: 0.8 + r() * 0.5 }; }));
  inst(G, dryShrubGeo(rng(33)), sm, put(90, 125, 0.5, (x, z) => ({ x, y: H(x, z) - 0.03, z, ry: r() * TAU, s: 0.8 + r() * 0.8 })), false);
  inst(G, dryGrassGeo(rng(34)), sm, put(220, 125, 0.3, (x, z) => ({ x, y: H(x, z) - 0.02, z, ry: r() * TAU, s: 0.8 + r() * 0.6 })), false);
  /* oasis: cari tempat paling datar, kolam di titik terendah, kurma, gelagah, rumput hijau */
  let oasis = null;
  { let best = 1e9; for (let i = 0; i < 260; i++) { const a = r() * TAU, d = Math.sqrt(r()) * 90, x = o.center[0] + Math.cos(a) * d, z = o.center[1] + Math.sin(a) * d; if (!ok(x, z, 14)) continue; let hi = -1e9, lo = 1e9; for (let k = 0; k < 12; k++) { const b = k / 12 * TAU; for (const rr of [4, 9]) { const h = H(x + Math.cos(b) * rr, z + Math.sin(b) * rr); hi = Math.max(hi, h); lo = Math.min(lo, h); } } if (hi - lo < best) { best = hi - lo; oasis = [x, z]; } } }
  if (oasis) { const [x, z] = oasis; let lo = H(x, z); for (let k = 0; k < 16; k++) { const b = k / 16 * TAU; for (const rr of [3, 6, 8]) lo = Math.min(lo, H(x + Math.cos(b) * rr, z + Math.sin(b) * rr)); }
    const water = new THREE.Mesh(new THREE.CircleGeometry(8.5, 32).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: C(0.22, 0.45, 0.45), roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.85 })); water.position.set(x, lo + 0.12, z); water.receiveShadow = true; water.userData.noAO = true; G.add(water);
    const A = palmAssets(), T = [], L = [], N = [];
    for (let k = 0; k < 9; k++) { const a = k / 9 * TAU + r() * 0.3, d = 10 + r() * 5, px = x + Math.cos(a) * d, pz = z + Math.sin(a) * d, P = palmGeo(Math.floor(r() * 999), 6 + r() * 4), m = new THREE.Matrix4().makeRotationY(r() * TAU).setPosition(px, lowAt(H, px, pz, 0.35) - 0.1, pz); T.push(P.trunk.applyMatrix4(m)); L.push(P.leaves.applyMatrix4(m)); N.push(P.nuts.applyMatrix4(m)); obs.push([px, pz, 0.4]); }
    const t = new THREE.Mesh(mergeGeometries(T), A.trunkM), l = new THREE.Mesh(mergeGeometries(L), A.leafM); t.castShadow = l.castShadow = true; l.userData.noAO = true; G.add(t, l, new THREE.Mesh(mergeGeometries(N), A.nutM));
    const reed = [], gr = []; for (let i = 0; i < 70; i++) { const a = r() * TAU, d = 7.5 + r() * 2.5, px = x + Math.cos(a) * d, pz = z + Math.sin(a) * d; reed.push({ x: px, y: H(px, pz) - 0.05, z: pz, ry: r() * TAU, s: 1.6 + r() * 0.8 }); }
    for (let i = 0; i < 120; i++) { const a = r() * TAU, d = 9 + r() * 8, px = x + Math.cos(a) * d, pz = z + Math.sin(a) * d; gr.push({ x: px, y: H(px, pz) - 0.02, z: pz, ry: r() * TAU, s: 0.9 + r() * 0.5 }); }
    inst(G, dryGrassGeo(rng(35), C(0.3, 0.45, 0.18), C(0.55, 0.6, 0.3)), sm, reed, false); inst(G, dryGrassGeo(rng(36), C(0.25, 0.45, 0.15), C(0.4, 0.6, 0.22)), sm, gr, false); }
  /* gulma terguling (tumbleweed) yang menggelinding tertiup angin */
  const tw = [], TG = tumbleGeo(rng(37)), tm = solidMat(1); for (let i = 0; i < 5; i++) { const m = new THREE.Mesh(TG, tm); m.castShadow = true; G.add(m); tw.push({ m, t: r() * 100, lane: (r() - 0.5) * 120, s: 0.8 + r() * 0.5 }); }
  /* fauna: burung pemakan bangkai berputar, kadal di pasir */
  const vul = flock(G, { x: o.center[0], z: o.center[1], R: 35, h: 42, hv: 10, n: 4, color: C(0.16, 0.12, 0.1), size: 1.6, sp: 0.07, glide: true, seed: 8 });
  const lz = lizards(G, H, { pts: put(10, 110, 1, (x, z) => [x, z]), color: C(0.78, 0.62, 0.42), s: 1.3, speed: 4, R: 7, seed: 10 });
  return { obs, oasis, update(P, T, dt) { const show = Math.hypot(P.x - o.center[0], P.z - o.center[1]) < 260; G.visible = show; if (!show) return;
    for (const q of tw) { const u = ((q.t + T * 2.2) % 160) - 80, x = o.center[0] + u * 0.8 + q.lane * 0.3, z = o.center[1] + u * 0.6 - q.lane * 0.5; q.m.visible = ok(x, z, 0); q.m.position.set(x, H(x, z) + 0.42 * q.s + Math.abs(Math.sin(T * 3 + q.lane)) * 0.3, z); q.m.rotation.set(T * 3 + q.lane, 0.6, 0); q.m.scale.setScalar(q.s); }
    vul.update(T, true); lz.update(T, dt, true); } };
}

/* ===================== GUNUNG ===================== */
export function buildAlpineLife(scene, H, o) {
  const G = new THREE.Group(); scene.add(G); const r = rng(7171), obs = [], dens = o.dense ? 1 : 0.6;
  const ok = (x, z, h0, h1, pad = 1) => { const B = biomeAt(x, z), h = H(x, z); return B.gunung > 0.6 && h > h0 && h < h1 && away(o.avoid, x, z, pad); };
  const put = (n, h0, h1, pad, fn) => scatter(r, Math.round(n * dens), o.center[0], o.center[1], 190, (x, z) => ok(x, z, h0, h1, pad)).map(([x, z]) => fn(x, z));
  const sm = solidMat(0.85), fl = solidMat(0.9, true);
  inst(G, cantigiGeo(rng(41)), sm, put(120, 35, 100, 1, (x, z) => ({ x, y: H(x, z) - 0.08, z, ry: r() * TAU, s: 0.8 + r() * 0.8 })));
  inst(G, dryGrassGeo(rng(42), C(0.55, 0.55, 0.3), C(0.78, 0.72, 0.45)), sm, put(260, 30, 100, 0.3, (x, z) => ({ x, y: H(x, z) - 0.02, z, ry: r() * TAU, s: 0.9 + r() * 0.6 })), false);
  inst(G, rockCapGeo(rng(43), false), fl, put(45, 30, 85, 2, (x, z) => { const sc = 0.7 + r() * 0.8; obs.push([x, z, sc + 0.3]); return { x, y: lowAt(H, x, z, sc) - 0.2 * sc, z, ry: r() * TAU, s: sc }; }));
  inst(G, rockCapGeo(rng(44), true), fl, put(55, 95, 200, 2, (x, z) => { const sc = 0.7 + r() * 0.9; obs.push([x, z, sc + 0.3]); return { x, y: lowAt(H, x, z, sc) - 0.2 * sc, z, ry: r() * TAU, s: sc }; }));
  inst(G, edelweisBaked(rng(45), 1.1), leafMat(), put(150, 60, 98, 0.5, (x, z) => ({ x, y: H(x, z) - 0.03, z, ry: r() * TAU, s: 0.8 + r() * 0.6 })), false);
  /* salju turun di sekitar puncak */
  const N = 700, sp = new Float32Array(N * 3), sb = []; for (let i = 0; i < N; i++) sb.push([(r() - 0.5) * 60, r() * 30, (r() - 0.5) * 60, r() * TAU]);
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const snow = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 0.12, transparent: true, opacity: 0.9, depthWrite: false })); snow.frustumCulled = false; snow.userData.noAO = true; G.add(snow);
  const birds = flock(G, { x: o.center[0], z: o.center[1] + 60, R: 45, h: 120, hv: 15, n: 6, color: C(0.15, 0.12, 0.1), size: 0.45, sp: 0.25, flap: 12, seed: 12 });
  return { obs, update(P, T, dt) { const show = Math.hypot(P.x - o.center[0], P.z - o.center[1]) < 280; G.visible = show; if (!show) return;
    const ph = H(P.x, P.z), k = smooth(78, 100, ph); snow.visible = k > 0.01; snow.material.opacity = 0.9 * k;
    if (snow.visible) { for (let i = 0; i < N; i++) { const b = sb[i]; let y = ((b[1] - T * 1.6) % 30 + 30) % 30; sp[i * 3] = P.x + b[0] + Math.sin(T * 0.8 + b[3]) * 0.6; sp[i * 3 + 1] = P.y - 4 + y; sp[i * 3 + 2] = P.z + b[2] + Math.cos(T * 0.6 + b[3]) * 0.6; } sg.attributes.position.needsUpdate = true; }
    birds.update(T, true); } };
}

/* ===================== HUJAN (cuaca) ===================== */
export function buildRain(scene, n = 1400) {
  const pos = new Float32Array(n * 6), seed = [], r = rng(99); for (let i = 0; i < n; i++) seed.push([(r() - 0.5) * 50, r() * 24, (r() - 0.5) * 50]);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const m = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0x7d8a99, transparent: true, opacity: 0, depthWrite: false })); m.frustumCulled = false; m.userData.noAO = true; scene.add(m);
  return { update(F, T, amt, under) { m.visible = amt > 0.02 && !under; if (!m.visible) return; m.material.opacity = 0.6 * amt; const cnt = Math.floor(n * clamp(amt, 0, 1));
    for (let i = 0; i < n; i++) { const s = seed[i], o = i * 6; if (i >= cnt) { pos[o + 1] = pos[o + 4] = -1e4; continue; } const y = ((s[1] - T * 19) % 24 + 24) % 24, x = F.x + s[0] - y * 0.12, z = F.z + s[2]; pos[o] = x; pos[o + 1] = F.y - 6 + y; pos[o + 2] = z; pos[o + 3] = x + 0.08; pos[o + 4] = F.y - 6 + y + 0.65; pos[o + 5] = z; }
    g.attributes.position.needsUpdate = true; } };
}
