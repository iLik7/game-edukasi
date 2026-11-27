import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import { stage } from './geo.js';

/* EKOSISTEM: hutan bakau (mangrove) dengan slider pasang surut, dan jamur pengurai di batang kayu lapuk
   dengan slider waktu. Di dunia: rumpun bakau di tepi danau dan batang kayu berjamur tiram di hutan. */

const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
function tex(N, draw, rep, srgb = true) { const c = document.createElement('canvas'); c.width = c.height = N; draw(c.getContext('2d'), N); const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; if (rep) t.repeat.set(rep[0], rep[1]); return t; }
const tubeG = (pts, r, seg = 16, rs = 5) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), seg, r, rs);
const ellG = (r, p, seg = 10) => new THREE.SphereGeometry(1, seg, Math.max(6, seg * 0.7 | 0)).scale(r[0], r[1], r[2]).translate(p[0], p[1], p[2]);

/* ---------- tekstur bersama ---------- */
const TX = {};
const barkTex = (base, line, seed) => TX['b' + seed] || (TX['b' + seed] = tex(256, (x, N) => { const r = rng(seed); x.fillStyle = base; x.fillRect(0, 0, N, N); for (let i = 0; i < 160; i++) { x.strokeStyle = line; x.lineWidth = 1 + r() * 2; x.beginPath(); const xx = r() * N; x.moveTo(xx, r() * N); x.lineTo(xx + (r() - 0.5) * 8, r() * N); x.stroke(); } for (let i = 0; i < 120; i++) { x.fillStyle = 'rgba(200,200,190,0.18)'; x.fillRect(r() * N, r() * N, 2 + r() * 6, 1 + r() * 3); } }, [2, 3]));
const leafTex = (c1, c2) => TX['l' + c1] || (TX['l' + c1] = tex(128, (x, N) => { x.clearRect(0, 0, N, N); x.fillStyle = c1; x.beginPath(); x.ellipse(N / 2, N / 2, N * 0.22, N * 0.47, 0, 0, TAU); x.fill(); x.strokeStyle = c2; x.lineWidth = 2; x.beginPath(); x.moveTo(N / 2, 4); x.lineTo(N / 2, N - 4); x.stroke(); }, null));

/* ================= POHON BAKAU ================= */
/* Rhizophora: akar tunjang melengkung dari batang ke lumpur, propagul menggantung di bawah tajuk */
function rhizophora(r, s = 1) {
  const bark = [], roots = [], leaves = [], props = [];
  const top = 4.2 * s, base = 1.1 * s;
  bark.push(new THREE.CylinderGeometry(0.12 * s, 0.18 * s, top - base, 8).translate(0, (top + base) / 2, 0));
  for (let k = 0; k < 4; k++) { const a = k / 4 * TAU + r(), b = V(Math.cos(a) * 0.9 * s, top + 0.5 * s, Math.sin(a) * 0.9 * s); bark.push(tubeG([V(0, top - 0.6 * s, 0), V(b.x * 0.5, top, b.z * 0.5), b], 0.07 * s, 6, 5)); }
  const nR = 11;
  for (let k = 0; k < nR; k++) {
    const a = k / nR * TAU + r() * 0.4, h = base + r() * 1.3 * s, R = (1.1 + r() * 0.9) * s, ca = Math.cos(a), sa = Math.sin(a);
    roots.push(tubeG([V(ca * 0.12 * s, h, sa * 0.12 * s), V(ca * R * 0.45, h + 0.25 * s, sa * R * 0.45), V(ca * R * 0.85, h * 0.45, sa * R * 0.85), V(ca * R, -0.25 * s, sa * R)], 0.05 * s, 14, 5));
  }
  for (let i = 0; i < 650; i++) {
    const u = r() * TAU, v = Math.acos(2 * r() - 1), rr = Math.cbrt(r());
    const p = V(Math.sin(v) * Math.cos(u) * 1.9 * s * rr, top + 0.9 * s + Math.cos(v) * 0.9 * s * rr, Math.sin(v) * Math.sin(u) * 1.6 * s * rr);
    leaves.push(new THREE.PlaneGeometry(0.24 * s, 0.46 * s).rotateX(-Math.PI / 2 + (r() - 0.5) * 1.2).rotateY(r() * TAU).translate(p.x, p.y, p.z));
  }
  for (let i = 0; i < 10; i++) { const a = r() * TAU, rr = 0.5 + r() * 1.1, x = Math.cos(a) * rr * s, z = Math.sin(a) * rr * s, y = top + 0.35 * s; props.push(new THREE.CylinderGeometry(0.035 * s, 0.02 * s, 0.6 * s, 6).translate(x, y - 0.3 * s, z)); }
  return { bark, roots, leaves, props };
}
/* Avicennia (api-api): batang tunggal, akar napas (pneumatofor) mencuat dari lumpur di sekelilingnya */
function avicennia(r, s = 1, nP = 60, rad = 2.2) {
  const bark = [], leaves = [], pneu = [];
  bark.push(new THREE.CylinderGeometry(0.13 * s, 0.22 * s, 3.4 * s, 8).translate(0, 1.7 * s, 0));
  for (let k = 0; k < 3; k++) { const a = k / 3 * TAU + r(); bark.push(tubeG([V(0, 2.6 * s, 0), V(Math.cos(a) * 0.6 * s, 3.3 * s, Math.sin(a) * 0.6 * s), V(Math.cos(a) * 1.0 * s, 3.8 * s, Math.sin(a) * 1.0 * s)], 0.06 * s, 6, 5)); }
  for (let i = 0; i < 560; i++) { const u = r() * TAU, v = Math.acos(2 * r() - 1), rr = Math.cbrt(r()); const p = V(Math.sin(v) * Math.cos(u) * 1.7 * s * rr, 4.1 * s + Math.cos(v) * 0.8 * s * rr, Math.sin(v) * Math.sin(u) * 1.5 * s * rr); leaves.push(new THREE.PlaneGeometry(0.2 * s, 0.38 * s).rotateX(-Math.PI / 2 + (r() - 0.5) * 1.2).rotateY(r() * TAU).translate(p.x, p.y, p.z)); }
  for (let i = 0; i < nP; i++) { const a = r() * TAU, rr = 0.4 + Math.sqrt(r()) * rad, h = (0.2 + r() * 0.25) * s; pneu.push(new THREE.CylinderGeometry(0.012 * s, 0.03 * s, h + 0.3, 5).translate(Math.cos(a) * rr * s, h / 2 - 0.15, Math.sin(a) * rr * s)); }
  return { bark, leaves, pneu };
}
const at = (g, x, y, z, ry = 0) => g.rotateY(ry).translate(x, y, z);
function mangroveMats() {
  return {
    barkR: new THREE.MeshStandardMaterial({ map: barkTex('#5a4636', 'rgba(40,28,20,0.6)', 3), roughness: 0.9 }),
    barkA: new THREE.MeshStandardMaterial({ map: barkTex('#8a8476', 'rgba(70,66,60,0.5)', 5), roughness: 0.85 }),
    root: new THREE.MeshStandardMaterial({ map: barkTex('#6a5440', 'rgba(40,30,22,0.5)', 7), roughness: 0.85 }),
    leafR: new THREE.MeshStandardMaterial({ map: leafTex('#2f5a22', '#5f8a3a'), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.35 }),
    leafA: new THREE.MeshStandardMaterial({ map: leafTex('#5f7a4a', '#9aaa80'), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.6 }),
    prop: new THREE.MeshStandardMaterial({ color: C(0.35, 0.5, 0.2), roughness: 0.5 }),
    pneu: new THREE.MeshStandardMaterial({ color: C(0.45, 0.4, 0.33), roughness: 0.9 }),
  };
}

/* rumpun bakau di dunia: pts = [[x, z, jenis 'R'|'A', skala]] */
export function buildMangroveGrove(scene, pts, heightAt) {
  const r = rng(77), M = mangroveMats(), acc = { barkR: [], barkA: [], root: [], leafR: [], leafA: [], prop: [], pneu: [] };
  for (const [x, z, t, s] of pts) {
    const y = heightAt(x, z), ry = r() * TAU;
    if (t === 'R') { const T = rhizophora(r, s); acc.barkR.push(...T.bark.map((g) => at(g, x, y, z, ry))); acc.root.push(...T.roots.map((g) => at(g, x, y, z, ry))); acc.leafR.push(...T.leaves.map((g) => at(g, x, y, z, ry))); acc.prop.push(...T.props.map((g) => at(g, x, y, z, ry))); }
    else { const T = avicennia(r, s, 0); acc.barkA.push(...T.bark.map((g) => at(g, x, y, z, ry))); acc.leafA.push(...T.leaves.map((g) => at(g, x, y, z, ry)));
      for (let i = 0; i < 90; i++) { const a = r() * TAU, rr = 0.5 + Math.sqrt(r()) * 2.6, px = x + Math.cos(a) * rr, pz = z + Math.sin(a) * rr, h = 0.15 + r() * 0.2; acc.pneu.push(new THREE.CylinderGeometry(0.012, 0.03, h + 0.3, 5).translate(px, heightAt(px, pz) + h / 2 - 0.15, pz)); } }
  }
  const g = new THREE.Group();
  for (const k in acc) if (acc[k].length) { const m = new THREE.Mesh(mergeGeometries(acc[k]), M[k]); m.castShadow = k !== 'pneu'; m.receiveShadow = true; if (k.startsWith('leaf')) m.userData.noAO = true; g.add(m); }
  scene.add(g); return g;
}

/* ================= ADEGAN BEDAH BAKAU ================= */
export function buildMangroveDissect(renderer) {
  const S = stage(renderer, ['#2e4a52', '#0c171c'], 0), r = rng(12), W = 10, D = 4.4, M = mangroveMats();
  const mudTex = tex(256, (x, N) => { const q = rng(4); x.fillStyle = '#3a3128'; x.fillRect(0, 0, N, N); for (let i = 0; i < 500; i++) { x.fillStyle = q() < 0.5 ? 'rgba(20,16,12,0.5)' : 'rgba(110,95,75,0.35)'; x.beginPath(); x.ellipse(q() * N, q() * N, 1 + q() * 5, 1 + q() * 3, q() * 3, 0, TAU); x.fill(); } }, [3, 1]);
  /* lumpur: balok dengan sisi depan terpotong */
  const mud = S.add('lumpur', new THREE.Mesh(new THREE.BoxGeometry(W, 1.6, D), new THREE.MeshStandardMaterial({ map: mudTex, roughness: 0.75, metalness: 0.0 })));
  mud.position.y = -0.8;
  /* lubang kepiting di sisi potongan */
  S.scene.add(Object.assign(new THREE.Mesh(tubeG([V(-0.2, 0, 1.2), V(-0.1, -0.5, 1.9), V(0.3, -0.9, D / 2 + 0.01)], 0.09, 12, 8), new THREE.MeshStandardMaterial({ color: C(0.12, 0.1, 0.08), roughness: 1 }))));
  /* Rhizophora di kiri */
  const R = rhizophora(r, 1.0), RX = -2.6;
  S.add('akartunjang', new THREE.Mesh(mergeGeometries(R.roots.map((g) => g.translate(RX, 0, 0))), M.root));
  S.add('akartunjang', new THREE.Mesh(mergeGeometries(R.bark.map((g) => g.translate(RX, 0, 0))), M.barkR));
  S.add('daun', new THREE.Mesh(mergeGeometries(R.leaves.map((g) => g.translate(RX, 0, 0))), M.leafR));
  S.add('propagul', new THREE.Mesh(mergeGeometries(R.props.map((g) => g.translate(RX, 0, 0))), M.prop));
  /* propagul yang sudah tertancap dan tumbuh */
  { const g = [new THREE.CylinderGeometry(0.04, 0.025, 0.9, 6).translate(-0.6, 0.25, 0.9)]; for (const a of [0.4, -0.4, 1.9, -1.9]) g.push(new THREE.PlaneGeometry(0.12, 0.26).translate(0, 0.13, 0).rotateZ(a * 0.6).rotateY(a).translate(-0.6, 0.72, 0.9));
    S.add('propagul', new THREE.Mesh(mergeGeometries(g), new THREE.MeshStandardMaterial({ color: C(0.38, 0.55, 0.22), side: THREE.DoubleSide, roughness: 0.5 }))); }
  /* Avicennia di kanan dengan akar kabel di bawah lumpur (terlihat di sisi potongan) */
  const A = avicennia(r, 0.95, 0), AX = 2.6;
  S.add('akarnapas', new THREE.Mesh(mergeGeometries(A.bark.map((g) => g.translate(AX, 0, 0))), M.barkA));
  const salt = [];
  const AL = A.leaves.map((g) => g.translate(AX, 0, 0));
  for (let i = 0; i < AL.length; i += 9) { AL[i].computeBoundingSphere(); const c = AL[i].boundingSphere.center; salt.push(ellG([0.025, 0.012, 0.025], [c.x, c.y + 0.02, c.z], 5)); }
  S.add('daun', new THREE.Mesh(mergeGeometries(AL), M.leafA));
  S.add('daun', new THREE.Mesh(mergeGeometries(salt), new THREE.MeshStandardMaterial({ color: C(0.95, 0.95, 0.92), roughness: 0.3 })));
  const pn = [], cable = [], tipsFront = [];
  for (let k = 0; k < 5; k++) { const z = -1.6 + k * 0.8, pts = []; for (let i = 0; i <= 8; i++) pts.push(V(AX - 0.1 + (i - 0) * 0.45 * (k % 2 ? 1 : -1) * 0 + (i * 0.45 - 1.8), -0.28 - Math.sin(i) * 0.04, z + Math.sin(i * 1.3) * 0.15)); cable.push(tubeG(pts, 0.04, 24, 6)); }
  for (let i = 0; i < 110; i++) { const x = AX - 1.8 + r() * 3.6, z = -1.9 + r() * 3.8, h = 0.25 + r() * 0.3; pn.push(new THREE.CylinderGeometry(0.018, 0.04, h + 0.3, 6).translate(x, h / 2 - 0.15, z)); if (z > 1.3 && tipsFront.length < 8) tipsFront.push([x, h, z]); }
  /* akar kabel menyusur sisi potongan depan */
  cable.push(tubeG([V(AX - 2.2, -0.3, D / 2 + 0.03), V(AX - 1, -0.36, D / 2 + 0.03), V(AX, -0.26, D / 2 + 0.03), V(AX + 1.2, -0.34, D / 2 + 0.03), V(AX + 2.2, -0.3, D / 2 + 0.03)], 0.05, 30, 6));
  for (const t of tipsFront) pn.push(new THREE.CylinderGeometry(0.018, 0.035, 0.3, 6).translate(t[0], -0.15, D / 2 + 0.03));
  S.add('akarnapas', new THREE.Mesh(mergeGeometries(pn), M.pneu));
  S.add('akarnapas', new THREE.Mesh(mergeGeometries(cable), M.root));
  /* ikan glodok di atas lumpur */
  const glodok = new THREE.Group();
  { const b = [ellG([0.32, 0.1, 0.1], [0, 0.1, 0], 14), ellG([0.12, 0.09, 0.1], [0.25, 0.13, 0], 12), ellG([0.18, 0.02, 0.06], [-0.4, 0.1, 0], 8)];
    for (const s of [1, -1]) b.push(ellG([0.08, 0.02, 0.07], [0.12, 0.03, s * 0.12], 8));
    const mm = S.add('glodok', new THREE.Mesh(mergeGeometries(b), new THREE.MeshStandardMaterial({ color: C(0.5, 0.45, 0.35), roughness: 0.4 })), glodok);
    for (const s of [1, -1]) glodok.add(new THREE.Mesh(ellG([0.045, 0.045, 0.045], [0.3, 0.24, s * 0.04], 10), new THREE.MeshStandardMaterial({ color: C(0.1, 0.1, 0.1), roughness: 0.1 })));
    glodok.position.set(0.5, 0, 1.4); glodok.rotation.y = -0.5; glodok.scale.setScalar(1.3); S.scene.add(glodok); }
  /* anak ikan yang berlindung di sela akar saat pasang */
  const fishes = new THREE.Group(), fm = new THREE.MeshStandardMaterial({ color: C(0.75, 0.78, 0.8), metalness: 0.4, roughness: 0.3 });
  { const fg = mergeGeometries([ellG([0.12, 0.04, 0.025], [0, 0, 0], 10), new THREE.ConeGeometry(0.035, 0.08, 4).rotateZ(Math.PI / 2).translate(-0.15, 0, 0)]); const f0 = S.add('ikan', new THREE.Mesh(fg, fm), fishes); for (let i = 1; i < 12; i++) { const m = new THREE.Mesh(fg, fm); m.userData.layer = 'ikan'; S.ent.ikan.meshes.push(m); fishes.add(m); } }
  S.scene.add(fishes);
  /* air pasang surut */
  const water = new THREE.Mesh(new THREE.BoxGeometry(W, 1, D), new THREE.MeshPhysicalMaterial({ color: C(0.3, 0.48, 0.5), transparent: true, opacity: 0.6, roughness: 0.1, depthWrite: false }));
  water.userData.noAO = true; S.scene.add(water);
  /* oksigen masuk lewat lentisel akar napas saat surut */
  const o2 = S.mkFlow(tipsFront.map((t) => [[t[0], t[1] + 0.5, t[2]], [t[0], t[1], D / 2 + 0.05], [t[0], -0.2, D / 2 + 0.05], [AX, -0.3, D / 2 + 0.05], [AX, 0.3, D / 2 + 0.05]]), new THREE.Color(0.6, 1.6, 2.4), 50, 0.09, { amt: (st) => clamp((0.55 - st.wl) * 3, 0, 1), spd: 0.18, jit: 0.02 });
  const state = { yaw: 0.3, yaw0: 0.3, pitch: 0.24, dist: 18, user: false, sun: 0.5, depth: 0, depthT: 0, wl: 0.8 };
  return S.finish(state, V(0.8, 2.6, 0), {
    tick(dt, T, st) {
      const wl = lerp(0.1, 2.0, st.sun); st.wl += (wl - st.wl) * Math.min(1, dt * 2);
      const top = st.wl + Math.sin(T * 1.3) * 0.03; water.scale.y = top + 1.6; water.position.y = (top - 1.6) / 2;
      const hide = smooth(0.35, 0.7, st.wl); glodok.position.y = -hide * 0.5 + (1 - hide) * Math.abs(Math.sin(T * 1.7)) * 0.08 * (Math.sin(T * 0.4) > 0.6 ? 1 : 0); glodok.visible = hide < 0.98;
      const show = smooth(0.7, 1.2, st.wl); fishes.visible = show > 0.02;
      fishes.children.forEach((f, i) => { const a = T * 0.5 + i * 0.52; f.position.set(RX + Math.cos(a) * (1.3 + (i % 3) * 0.3), Math.min(st.wl - 0.25, 0.4 + (i % 4) * 0.18), Math.sin(a) * (1.0 + (i % 2) * 0.4)); f.rotation.y = -a - Math.PI / 2; f.scale.setScalar(show); });
    },
    api: { labels: { depth: null, sun: 'Pasang surut' } },
  });
}

/* ================= JAMUR TIRAM ================= */
/* tudung berbentuk kipas (cangkang tiram), bilah di bawahnya menjalar ke tangkai pendek di samping */
function oyster(r, s) {
  const cap = [], gills = [], stem = [];
  const N = 22, M = 8, A0 = -1.6, A1 = 1.6, pos = [], idx = [], uv = [];
  for (let j = 0; j <= M; j++) for (let i = 0; i <= N; i++) { const a = A0 + (A1 - A0) * i / N, t = j / M, R = t * (1 + 0.06 * Math.sin(a * 7 + r() * 0.3)); pos.push(Math.cos(a) * R, 0.3 * t - 0.42 * t * t * t + 0.04 * Math.sin(a * 5) * t, Math.sin(a) * R * 0.95); uv.push(i / N, t); }
  for (let j = 0; j < M; j++) for (let i = 0; i < N; i++) { const a = j * (N + 1) + i, b = a + N + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); g.scale(s, s, s); cap.push(g);
  for (let k = 0; k < 34; k++) { const a = A0 + 0.05 + (A1 - A0 - 0.1) * k / 33, ca = Math.cos(a), sa = Math.sin(a) * 0.95; const l0 = k % 2 ? 0.35 : 0.08; const pl = new THREE.BufferGeometry(); const p = [];
    for (const [t, d] of [[l0, 0], [0.97, 0], [0.97, -0.05], [l0, -0.12]]) p.push(ca * t, 0.3 * t - 0.42 * t * t * t - 0.012 + d, sa * t);
    pl.setAttribute('position', new THREE.Float32BufferAttribute(p.map((v) => v * s), 3)); pl.setIndex([0, 1, 2, 0, 2, 3]); pl.computeVertexNormals(); gills.push(pl); }
  stem.push(new THREE.CylinderGeometry(0.09 * s, 0.13 * s, 0.35 * s, 8).rotateZ(Math.PI / 2 - 0.5).translate(-0.12 * s, -0.12 * s, 0));
  return { cap, gills, stem };
}
const capTex = () => TX.cap || (TX.cap = tex(128, (x, N) => { const g = x.createLinearGradient(0, 0, 0, N); g.addColorStop(0, '#c8bca8'); g.addColorStop(1, '#6e6456'); x.fillStyle = g; x.fillRect(0, 0, N, N); for (let i = 0; i < 40; i++) { x.strokeStyle = 'rgba(90,84,74,0.25)'; x.beginPath(); x.moveTo(i / 40 * N, 0); x.lineTo(i / 40 * N, N); x.stroke(); } }));
function mushroomMats() {
  return { cap: new THREE.MeshStandardMaterial({ map: capTex(), roughness: 0.6, side: THREE.DoubleSide }), gill: new THREE.MeshStandardMaterial({ color: C(0.95, 0.93, 0.88), roughness: 0.8, side: THREE.DoubleSide }), stem: new THREE.MeshStandardMaterial({ color: C(0.92, 0.9, 0.85), roughness: 0.7 }) };
}
function logBark() { return barkTex('#4a3a2a', 'rgba(25,18,12,0.7)', 9); }

/* batang kayu tumbang berjamur di dunia */
export function buildMushroomLog(scene, x, y, z, rot = 0) {
  const r = rng(19), g = new THREE.Group(), MM = mushroomMats();
  const log = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.3, 2.6, 12).rotateZ(Math.PI / 2), new THREE.MeshStandardMaterial({ map: logBark(), roughness: 0.95 }));
  log.position.y = 0.22; log.castShadow = log.receiveShadow = true; g.add(log);
  const ring = tex(128, (c, N) => { c.fillStyle = '#9a7a52'; c.fillRect(0, 0, N, N); for (let i = 1; i < 10; i++) { c.strokeStyle = 'rgba(80,55,30,0.6)'; c.beginPath(); c.arc(N / 2, N / 2, i * 6, 0, TAU); c.stroke(); } });
  for (const s of [1, -1]) { const e = new THREE.Mesh(new THREE.CircleGeometry(s > 0 ? 0.26 : 0.3, 16), new THREE.MeshStandardMaterial({ map: ring, roughness: 0.9 })); e.rotation.y = s * Math.PI / 2; e.position.set(s * 1.301, 0.22, 0); g.add(e); }
  const caps = [], gills = [], stems = [];
  for (let c = 0; c < 3; c++) { const cx = -0.8 + c * 0.75; for (let k = 0; k < 4; k++) { const O = oyster(r, 0.12 + r() * 0.08), m = new THREE.Matrix4().makeRotationY(-Math.PI / 2 + (r() - 0.5) * 0.6).premultiply(new THREE.Matrix4().makeTranslation(cx + (r() - 0.5) * 0.3, 0.12 + k * 0.08 + r() * 0.05, 0.27));
    O.cap.forEach((q) => caps.push(q.applyMatrix4(m))); O.gills.forEach((q) => gills.push(q.applyMatrix4(m))); O.stem.forEach((q) => stems.push(q.applyMatrix4(m))); } }
  g.add(new THREE.Mesh(mergeGeometries(caps), MM.cap), new THREE.Mesh(mergeGeometries(gills), MM.gill), new THREE.Mesh(mergeGeometries(stems), MM.stem));
  g.children.forEach((m) => { m.castShadow = true; });
  g.position.set(x, y, z); g.rotation.y = rot; scene.add(g); return g;
}

/* ================= ADEGAN BEDAH JAMUR & PENGURAI ================= */
export function buildFungusDissect(renderer) {
  const S = stage(renderer, ['#3a3426', '#12100a'], 4.8, -0.15), r = rng(23), L = 6.4, RR = 0.95, CY = 0.95;
  /* batang kayu dengan seperempat bagian dipotong (menghadap kamera) supaya bagian dalam terlihat */
  const wood = new THREE.Group(); S.scene.add(wood); wood.position.y = CY;
  const barkM = new THREE.MeshStandardMaterial({ map: logBark(), color: C(0.55, 0.5, 0.45), roughness: 0.95, side: THREE.DoubleSide });
  const grain = tex(256, (x, N) => { const q = rng(8); x.fillStyle = '#b08a5a'; x.fillRect(0, 0, N, N); for (let i = 0; i < 70; i++) { x.strokeStyle = q() < 0.5 ? 'rgba(120,85,45,0.5)' : 'rgba(200,170,120,0.35)'; x.lineWidth = 1 + q() * 2; x.beginPath(); const y = q() * N; x.moveTo(0, y); x.bezierCurveTo(N * 0.3, y + (q() - 0.5) * 10, N * 0.6, y + (q() - 0.5) * 10, N, y); x.stroke(); } }, [2, 1]);
  const woodM = new THREE.MeshStandardMaterial({ map: grain, roughness: 0.85, side: THREE.DoubleSide });
  const cyl = new THREE.CylinderGeometry(RR, RR, L, 40, 1, false, Math.PI / 2, Math.PI * 1.5); cyl.rotateZ(Math.PI / 2);
  S.add('kayu', new THREE.Mesh(cyl, [barkM, woodM, woodM]), wood);
  const p1 = new THREE.PlaneGeometry(L, RR).translate(0, RR / 2, 0), p2 = new THREE.PlaneGeometry(L, RR).rotateX(-Math.PI / 2).translate(0, 0, RR / 2);
  S.add('kayu', new THREE.Mesh(mergeGeometries([p1, p2]), woodM), wood);
  /* miselium: benang putih bercabang di permukaan potongan, tumbuh seiring waktu */
  const hy = [];
  for (let k = 0; k < 26; k++) { const onV = k % 2 === 0; let p = onV ? V(-L / 2 + 0.3 + r() * (L - 0.6), r() * RR * 0.9, 0.012) : V(-L / 2 + 0.3 + r() * (L - 0.6), 0.012, r() * RR * 0.9); const pts = [p.clone()];
    for (let i = 0; i < 9; i++) { p = p.clone().add(onV ? V((r() - 0.5) * 0.45, (r() - 0.5) * 0.3, 0) : V((r() - 0.5) * 0.45, 0, (r() - 0.5) * 0.3)); p.x = clamp(p.x, -L / 2 + 0.05, L / 2 - 0.05); if (onV) p.y = clamp(p.y, 0.02, RR - 0.05); else p.z = clamp(p.z, 0.02, RR - 0.05); pts.push(p); }
    hy.push(tubeG(pts, 0.012, 40, 4)); }
  const hyG = mergeGeometries(hy), hyM = S.add('miselium', new THREE.Mesh(hyG, new THREE.MeshStandardMaterial({ color: C(0.97, 0.96, 0.92), emissive: C(0.25, 0.25, 0.22), roughness: 0.6 })), wood); hyM.material.userData.keepEmi = true;
  const hyCount = hyG.index.count;
  /* jamur tiram di kulit kayu bagian depan-bawah, dan satu jamur terbalik di tanah memperlihatkan bilah */
  const MM = mushroomMats(), caps = [], gills = [], stems = [];
  const put = (O, m) => { O.cap.forEach((q) => caps.push(q.applyMatrix4(m))); O.gills.forEach((q) => gills.push(q.applyMatrix4(m))); O.stem.forEach((q) => stems.push(q.applyMatrix4(m))); };
  for (let c = 0; c < 3; c++) for (let k = 0; k < 4; k++) { const a = -0.05 - k * 0.24, m = new THREE.Matrix4().makeRotationY(-Math.PI / 2 + (r() - 0.5) * 0.5).premultiply(new THREE.Matrix4().makeRotationX(0)).premultiply(new THREE.Matrix4().makeTranslation(-1.8 + c * 1.6 + (r() - 0.5) * 0.4, Math.sin(a) * RR * 0.98, Math.cos(a) * RR * 0.98)); put(oyster(r, 0.42 + r() * 0.22), m); }
  const shrooms = new THREE.Group(); wood.add(shrooms);
  S.add('tudung', new THREE.Mesh(mergeGeometries(caps), MM.cap), shrooms); S.add('bilah', new THREE.Mesh(mergeGeometries(gills), MM.gill), shrooms); S.add('tangkai', new THREE.Mesh(mergeGeometries(stems), MM.stem), shrooms);
  const flip = new THREE.Group(); S.scene.add(flip); flip.position.set(2.4, 0.12, 2.6); flip.rotation.set(Math.PI, 0.6, 0);
  { const O = oyster(r, 0.9); S.add('tudung', new THREE.Mesh(mergeGeometries(O.cap), MM.cap), flip); S.add('bilah', new THREE.Mesh(mergeGeometries(O.gills), MM.gill), flip); S.add('tangkai', new THREE.Mesh(mergeGeometries(O.stem), MM.stem), flip); }
  /* spora jatuh dari bilah */
  const spPaths = []; for (let i = 0; i < 8; i++) { const x = -2 + i * 0.55, a = -0.5 - (i % 3) * 0.3, y = CY + Math.sin(a) * RR, z = Math.cos(a) * RR + 0.35; spPaths.push([[x, y - 0.05, z], [x + 0.2, y - 0.4, z + 0.3], [x + 0.5, y - 0.6, z + 0.9], [x + 0.9, y - 0.5, z + 1.8]]); }
  const spF = S.mkFlow(spPaths, new THREE.Color(2.2, 2.1, 1.8), 120, 0.1, { amt: (st) => smooth(0.5, 0.65, st.sun) * (1 - smooth(0.85, 0.95, st.sun)), spd: 0.12, jit: 0.12 });
  /* humus dan tunas baru */
  const hum = new THREE.Group(); S.scene.add(hum);
  { const g = []; for (let i = 0; i < 14; i++) g.push(ellG([0.5 + r() * 0.6, 0.25 + r() * 0.15, 0.6 + r() * 0.4], [-2.6 + i * 0.4, 0.02, (r() - 0.5) * 0.6], 10));
    S.add('humus', new THREE.Mesh(mergeGeometries(g), new THREE.MeshStandardMaterial({ color: C(0.2, 0.14, 0.09), roughness: 1 })), hum);
    const sd = [new THREE.CylinderGeometry(0.03, 0.035, 0.9, 6).translate(0.6, 0.6, 0.3)]; for (const a of [0.9, -0.9, 0.3]) sd.push(new THREE.PlaneGeometry(0.22, 0.36).translate(0, 0.18, 0).rotateZ(a).translate(0.6, 1.0, 0.3));
    S.add('humus', new THREE.Mesh(mergeGeometries(sd), new THREE.MeshStandardMaterial({ color: C(0.35, 0.6, 0.22), side: THREE.DoubleSide, roughness: 0.5 })), hum); }
  const sprout = hum.children[1];
  const woodBase = woodM.color.clone(), barkBase = barkM.color.clone(), dark = C(0.35, 0.28, 0.22);
  const state = { yaw: 0.35, yaw0: 0.35, pitch: 0.3, dist: 13, user: false, sun: 0.5, depth: 0, depthT: 0, t: 0.5 };
  return S.finish(state, V(0, 1.0, 0.4), {
    tick(dt, T, st) {
      st.t += (st.sun - st.t) * Math.min(1, dt * 3); const s = st.t;
      hyG.setDrawRange(0, Math.floor(hyCount * smooth(0.05, 0.5, s) / 3) * 3);
      const grow = smooth(0.4, 0.62, s) * (1 - smooth(0.84, 0.96, s)); shrooms.scale.setScalar(Math.max(0.001, grow)); shrooms.visible = grow > 0.01; flip.visible = grow > 0.3; flip.scale.setScalar(Math.max(0.001, grow));
      const rot = smooth(0.2, 0.95, s); const k = S.ent.kayu.mats; k.forEach((m) => { if (m.userData.base) m.userData.base.copy(m === woodM ? woodBase : barkBase).lerp(dark, rot * 0.8); });
      const col = smooth(0.78, 1.0, s); wood.scale.set(1, 1 - col * 0.7, 1 - col * 0.3); wood.position.y = CY * (1 - col * 0.75);
      const h = smooth(0.72, 1.0, s); hum.scale.set(1, Math.max(0.001, h), 1); hum.visible = h > 0.01; sprout.scale.setScalar(Math.max(0.001, smooth(0.9, 1.0, s)));
    },
    api: { labels: { depth: null, sun: 'Waktu' } },
  });
}
