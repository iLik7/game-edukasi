import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import { stage } from './geo.js';

/* FASE 2: PETERNAKAN & SAWAH. Dunia: petak sawah bertingkat berair, kandang, kotak lebah, tumpukan kompos.
   Bedah statis: tanaman padi (umur tanaman), sarang lebah (siklus hidup), kompos (waktu & suhu). */
const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ellG = (r, p, seg = 10) => new THREE.SphereGeometry(1, seg, Math.max(6, seg * 0.7 | 0)).scale(r[0], r[1], r[2]).translate(p[0], p[1], p[2]);
const tubeG = (pts, r, seg = 12, rs = 6) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => V(...p))), seg, r, rs);
function tex(N, draw, rep, srgb = true) { const c = document.createElement('canvas'); c.width = c.height = N; draw(c.getContext('2d'), N); const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; if (rep) t.repeat.set(rep[0], rep[1]); return t; }

/* rumpun padi: beberapa helai daun melengkung (+ malai bila sudah berbunga) */
function riceTuft(r, h = 0.9, panicle = 0) {
  const g = [];
  for (let k = 0; k < 9; k++) { const a = r() * TAU, lean = 0.15 + r() * 0.35, L = h * (0.7 + r() * 0.4); const tip = [Math.cos(a) * lean * L, L, Math.sin(a) * lean * L], mid = [tip[0] * 0.35, L * 0.6, tip[2] * 0.35]; g.push(tubeG([[0, 0, 0], mid, tip], 0.008 + 0.006 * (1 - k / 9), 5, 3)); }
  if (panicle) for (let k = 0; k < 4; k++) { const a = r() * TAU, top = [Math.cos(a) * 0.12, h * 1.05, Math.sin(a) * 0.12], droop = [Math.cos(a) * 0.3, h * (1.05 - 0.25 * panicle), Math.sin(a) * 0.3]; g.push(tubeG([[0, h * 0.75, 0], top, droop], 0.012, 6, 3)); for (let q = 0; q < 6; q++) { const t = 0.4 + q * 0.1; g.push(ellG([0.018, 0.035, 0.018], [lerp(top[0], droop[0], t), lerp(top[1], droop[1], t) - 0.02, lerp(top[2], droop[2], t)], 4)); } }
  return mergeGeometries(g.map((x) => x.index ? x.toNonIndexed() : x));
}

/* ================= DUNIA ================= */
export function buildFarm(scene, heightAt, spots) {
  const r = rng(77), groups = [];
  const G = new THREE.Group(); scene.add(G);
  /* petak sawah bertingkat */
  const mudM = new THREE.MeshStandardMaterial({ color: C(0.36, 0.28, 0.2), roughness: 0.95 });
  const bundM = new THREE.MeshStandardMaterial({ color: C(0.42, 0.5, 0.25), roughness: 0.95 });
  const waterM = new THREE.MeshStandardMaterial({ color: C(0.35, 0.5, 0.48), roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.72, envMapIntensity: 1.4 });
  const greenM = new THREE.MeshStandardMaterial({ color: C(0.36, 0.62, 0.22), roughness: 0.6, side: THREE.DoubleSide });
  const goldM = new THREE.MeshStandardMaterial({ color: C(0.82, 0.68, 0.28), roughness: 0.7, side: THREE.DoubleSide });
  const tuftG = riceTuft(rng(3), 0.85), tuftR = riceTuft(rng(4), 0.95, 1);
  const muds = [], bunds = [], waters = [], plots = [];
  const { x0, z0, nx, nz, w, d } = spots.sawah;
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const cx = x0 + i * (w + 1.2), cz = z0 + j * (d + 1.2);
    let hi = -1e9, lo = 1e9; for (let a = 0; a <= 4; a++) for (let b = 0; b <= 4; b++) { const h = heightAt(cx - w / 2 + a * w / 4, cz - d / 2 + b * d / 4); hi = Math.max(hi, h); lo = Math.min(lo, h); }
    const y = hi + 0.05, dep = y - lo + 0.6;
    muds.push(new THREE.BoxGeometry(w, dep, d).translate(cx, y - dep / 2, cz));
    waters.push(new THREE.PlaneGeometry(w - 0.2, d - 0.2).rotateX(-Math.PI / 2).translate(cx, y + 0.08, cz));
    for (const [bx, bz, bw, bd] of [[0, d / 2 + 0.3, w + 1.2, 0.6], [0, -d / 2 - 0.3, w + 1.2, 0.6], [w / 2 + 0.3, 0, 0.6, d], [-w / 2 - 0.3, 0, 0.6, d]]) bunds.push(new THREE.BoxGeometry(bw, dep + 0.3, bd).translate(cx + bx, y + 0.15 - dep / 2, cz + bz));
    plots.push({ cx, cz, y, ripe: (i + j) % 3 === 0 });
  }
  const mud = new THREE.Mesh(mergeGeometries(muds), mudM), bund = new THREE.Mesh(mergeGeometries(bunds), bundM), water = new THREE.Mesh(mergeGeometries(waters), waterM);
  mud.receiveShadow = bund.receiveShadow = water.receiveShadow = true; water.userData.noAO = true; G.add(mud, bund, water);
  { const n0 = plots.filter((p) => !p.ripe).length, n1 = plots.length - n0, per = Math.floor(w / 0.55) * Math.floor(d / 0.55);
    const imG = new THREE.InstancedMesh(tuftG, greenM, n0 * per), imR = new THREE.InstancedMesh(tuftR, goldM, n1 * per), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(); let a = 0, b = 0;
    for (const p of plots) for (let ix = 0; ix < Math.floor(w / 0.55); ix++) for (let iz = 0; iz < Math.floor(d / 0.55); iz++) {
      q.setFromAxisAngle(V(0, 1, 0), r() * TAU); s.setScalar(0.8 + r() * 0.4); m4.compose(V(p.cx - w / 2 + 0.4 + ix * 0.55 + (r() - 0.5) * 0.1, p.y, p.cz - d / 2 + 0.4 + iz * 0.55 + (r() - 0.5) * 0.1), q, s);
      if (p.ripe) imR.setMatrixAt(b++, m4); else imG.setMatrixAt(a++, m4); }
    imG.count = a; imR.count = b; imG.castShadow = imR.castShadow = false; imG.userData.noAO = imR.userData.noAO = true; G.add(imG, imR); }
  /* kandang sederhana */
  { const [bx, bz] = spots.kandang, y = heightAt(bx, bz), wood = new THREE.MeshStandardMaterial({ color: C(0.5, 0.36, 0.22), roughness: 0.9 }), roof = new THREE.MeshStandardMaterial({ color: C(0.55, 0.25, 0.18), roughness: 0.8 });
    const g = new THREE.Group(); g.position.set(bx, y, bz); G.add(g);
    const parts = []; for (const [px, pz] of [[-4, -3], [4, -3], [-4, 3], [4, 3], [0, -3], [0, 3]]) parts.push(new THREE.BoxGeometry(0.25, 3, 0.25).translate(px, 1.5, pz));
    parts.push(new THREE.BoxGeometry(8.3, 1.2, 0.12).translate(0, 0.6, -3), new THREE.BoxGeometry(0.12, 1.2, 6).translate(-4, 0.6, 0), new THREE.BoxGeometry(0.12, 1.2, 6).translate(4, 0.6, 0));
    const w = new THREE.Mesh(mergeGeometries(parts), wood); w.castShadow = true; g.add(w);
    const rf = new THREE.Mesh(mergeGeometries([new THREE.BoxGeometry(9, 0.12, 4).rotateX(0.45).translate(0, 3.45, -1.75), new THREE.BoxGeometry(9, 0.12, 4).rotateX(-0.45).translate(0, 3.45, 1.75)]), roof); rf.castShadow = true; g.add(rf);
    const hay = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 1.1, 14).rotateZ(Math.PI / 2), new THREE.MeshStandardMaterial({ color: C(0.85, 0.72, 0.38), roughness: 1 })); hay.position.set(-2.4, 0.6, 1.5); hay.castShadow = true; g.add(hay, hay.clone().translateX(1.3)); }
  /* kotak lebah + lebah yang terbang */
  const bees = [];
  { const [hx, hz] = spots.lebah, y = heightAt(hx, hz), g = new THREE.Group(); g.position.set(hx, y, hz); G.add(g);
    const wood = new THREE.MeshStandardMaterial({ color: C(0.86, 0.75, 0.5), roughness: 0.8 });
    const box = new THREE.Mesh(mergeGeometries([new THREE.BoxGeometry(0.6, 0.5, 0.5).translate(0, 0.75, 0), new THREE.BoxGeometry(0.6, 0.25, 0.5).translate(0, 1.13, 0), new THREE.BoxGeometry(0.7, 0.06, 0.6).translate(0, 1.28, 0), ...[[-0.25, -0.2], [0.25, -0.2], [-0.25, 0.2], [0.25, 0.2]].map(([a, b]) => new THREE.BoxGeometry(0.05, 0.5, 0.05).translate(a, 0.25, b))]), wood);
    box.castShadow = true; g.add(box);
    const bm = new THREE.MeshStandardMaterial({ color: C(0.9, 0.7, 0.15) }); for (let i = 0; i < 10; i++) { const b = new THREE.Mesh(ellG([0.03, 0.02, 0.02], [0, 0, 0], 6), bm); g.add(b); bees.push(b); }
    /* bunga-bunga di sekitar kotak lebah */
    const fl = []; for (let i = 0; i < 60; i++) { const a = r() * TAU, rr = 1.5 + r() * 5, x = Math.cos(a) * rr, z = Math.sin(a) * rr, yy = heightAt(hx + x, hz + z) - y; fl.push(new THREE.CylinderGeometry(0.01, 0.01, 0.4, 3).translate(x, yy + 0.2, z), ellG([0.06, 0.03, 0.06], [x, yy + 0.42, z], 6)); }
    g.add(new THREE.Mesh(mergeGeometries(fl.filter((_, i) => i % 2 === 0)), new THREE.MeshStandardMaterial({ color: C(0.3, 0.55, 0.2) })), new THREE.Mesh(mergeGeometries(fl.filter((_, i) => i % 2 === 1)), new THREE.MeshStandardMaterial({ color: C(0.95, 0.8, 0.2) }))); }
  /* tumpukan kompos dari bambu */
  { const [kx, kz] = spots.kompos, y = heightAt(kx, kz), g = new THREE.Group(); g.position.set(kx, y, kz); G.add(g);
    const bam = new THREE.MeshStandardMaterial({ color: C(0.7, 0.6, 0.35), roughness: 0.8 }), slats = [];
    for (let k = 0; k < 4; k++) for (let q = 0; q < 4; q++) { const a = k * Math.PI / 2; slats.push(new THREE.BoxGeometry(2.2, 0.12, 0.08).translate(0, 0.2 + q * 0.28, 1.1).rotateY(a)); }
    g.add(new THREE.Mesh(mergeGeometries(slats), bam), Object.assign(new THREE.Mesh(ellG([1.05, 0.7, 1.05], [0, 0.5, 0], 16), new THREE.MeshStandardMaterial({ color: C(0.3, 0.22, 0.14), roughness: 1 })), { castShadow: true })); }
  return { update(P, T) { const [hx, hz] = spots.lebah; if (Math.hypot(P.x - hx, P.z - hz) < 60) bees.forEach((b, i) => { const a = T * (0.8 + i * 0.13) + i, rr = 0.8 + (i % 4) * 0.8; b.position.set(Math.cos(a) * rr, 0.9 + Math.sin(T * 2 + i) * 0.4, Math.sin(a * 1.3) * rr); }); G.visible = Math.hypot(P.x - spots.center[0], P.z - spots.center[1]) < 260; } };
}

/* ================= BEDAH: TANAMAN PADI ================= */
export function buildRiceDissect(renderer) {
  const S = stage(renderer, ['#4a5a30', '#141a0c'], 0), r = rng(21);
  /* petak sawah: lumpur terpotong + air dangkal */
  const W = 6, D = 4;
  S.add('lumpur', new THREE.Mesh(new THREE.BoxGeometry(W, 1.6, D).translate(0, -0.8, 0), new THREE.MeshStandardMaterial({ color: C(0.32, 0.25, 0.18), roughness: 0.95 })));
  const water = new THREE.Mesh(new THREE.BoxGeometry(W, 0.25, D).translate(0, 0.125, 0), new THREE.MeshPhysicalMaterial({ color: C(0.45, 0.6, 0.58), transparent: true, opacity: 0.45, roughness: 0.05, depthWrite: false })); water.userData.noAO = true; S.scene.add(water);
  /* satu rumpun padi besar di tengah */
  const plant = new THREE.Group(); S.scene.add(plant);
  const leafM = new THREE.MeshStandardMaterial({ color: C(0.35, 0.62, 0.22), roughness: 0.5, side: THREE.DoubleSide });
  const stemM = new THREE.MeshPhysicalMaterial({ color: C(0.55, 0.72, 0.35), roughness: 0.5, transparent: true, opacity: 0.85 });
  const grainM = new THREE.MeshStandardMaterial({ color: C(0.5, 0.65, 0.3), roughness: 0.6 });
  const stems = [], leaves = [], heads = [], tillers = 7;
  for (let t = 0; t < tillers; t++) {
    const a = t / tillers * TAU, lean = t === 0 ? 0 : 0.12, H = 3.2 - (t ? 0.3 : 0), tip = V(Math.cos(a) * lean * H, H, Math.sin(a) * lean * H);
    const pts = []; for (let k = 0; k <= 5; k++) pts.push(tip.clone().multiplyScalar(k / 5));
    stems.push(tubeG(pts.map((p) => p.toArray()), 0.06, 12, 8)); for (let k = 1; k <= 4; k++) { const p = tip.clone().multiplyScalar(k / 5.2); stems.push(ellG([0.075, 0.04, 0.075], p.toArray(), 8)); }
    for (let k = 0; k < 3; k++) { const p = tip.clone().multiplyScalar(0.3 + k * 0.2), b = a + (k - 1) * 0.9 + r(), L = 1.8 - k * 0.2; const sh = new THREE.Shape(); sh.moveTo(-0.07, 0); sh.quadraticCurveTo(-0.06, L * 0.6, 0, L); sh.quadraticCurveTo(0.06, L * 0.6, 0.07, 0); const lg = new THREE.ShapeGeometry(sh, 8); const lp = lg.attributes.position; for (let i = 0; i < lp.count; i++) { const y = lp.getY(i); lp.setZ(i, -Math.pow(y / L, 2) * L * 0.55); } lg.computeVertexNormals(); lg.rotateX(-0.35).rotateY(b).translate(p.x, p.y, p.z); leaves.push(lg); }
    /* malai: tangkai bercabang dengan gabah */
    const hd = []; for (let k = 0; k < 6; k++) { const bb = a + k, top = tip.clone().add(V(Math.cos(bb) * 0.15, 0.2, Math.sin(bb) * 0.15)), end = tip.clone().add(V(Math.cos(bb) * 0.55, -0.45, Math.sin(bb) * 0.55)); hd.push(tubeG([tip.toArray(), top.toArray(), end.toArray()], 0.012, 8, 3)); for (let q = 0; q < 7; q++) { const u = 0.3 + q * 0.1, p = new THREE.CatmullRomCurve3([tip, top, end]).getPoint(u); hd.push(ellG([0.035, 0.07, 0.035], [p.x, p.y - 0.03, p.z], 6)); } }
    heads.push(mergeGeometries(hd.map((x) => x.index ? x.toNonIndexed() : x)));
  }
  S.add('batang', new THREE.Mesh(mergeGeometries(stems.map((x) => x.index ? x.toNonIndexed() : x)), stemM), plant);
  S.add('daun', new THREE.Mesh(mergeGeometries(leaves), leafM), plant);
  const headMesh = S.add('malai', new THREE.Mesh(mergeGeometries(heads), grainM), plant);
  /* aerenkim: saluran udara (titik putih) dari daun ke akar */
  const roots = []; for (let k = 0; k < 40; k++) { const a = r() * TAU, d = 0.3 + r() * 0.9, dp = 0.5 + r() * 0.9; roots.push(tubeG([[0, 0, 0], [Math.cos(a) * d * 0.4, -dp * 0.4, Math.sin(a) * d * 0.4], [Math.cos(a) * d, -dp, Math.sin(a) * d]], 0.015, 6, 3)); }
  S.add('akar', new THREE.Mesh(mergeGeometries(roots), new THREE.MeshStandardMaterial({ color: C(0.9, 0.85, 0.7), roughness: 0.7 })), plant);
  S.mkFlow([[[0.3, 2.4, 0.2], [0.05, 1.6, 0], [0.03, 0.2, 0], [0.4, -0.5, 0.2], [0.8, -1.0, 0.3]], [[-0.3, 2.2, -0.2], [0, 1.4, 0], [0, 0.1, 0], [-0.5, -0.6, -0.2], [-0.9, -1.1, -0.3]]], new THREE.Color(1.8, 2.2, 2.6), 50, 0.06, { amt: (st) => st.flood, spd: 0.25, jit: 0.03 });
  /* gabah dibelah: sekam, bekatul (kulit ari), beras (endosperma), lembaga */
  const grain = new THREE.Group(); grain.position.set(2.3, 2.0, 1.2); S.scene.add(grain);
  S.add('gabah', new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 14, 0, Math.PI * 1.4).scale(0.6, 1.2, 0.6), new THREE.MeshStandardMaterial({ color: C(0.82, 0.66, 0.32), roughness: 0.8, side: THREE.DoubleSide })), grain);
  S.add('gabah', new THREE.Mesh(ellG([0.17, 0.33, 0.17], [0, 0, 0], 16), new THREE.MeshStandardMaterial({ color: C(0.7, 0.5, 0.35), roughness: 0.6 })), grain);
  S.add('gabah', new THREE.Mesh(ellG([0.15, 0.31, 0.15], [0, 0, 0.02], 16), new THREE.MeshStandardMaterial({ color: C(0.97, 0.96, 0.92), roughness: 0.4 })), grain);
  S.add('gabah', new THREE.Mesh(ellG([0.05, 0.06, 0.05], [0.0, -0.27, 0.11], 8), new THREE.MeshStandardMaterial({ color: C(0.95, 0.85, 0.45) })), grain);
  const state = { yaw: 0.4, yaw0: 0.4, pitch: 0.18, dist: 11, user: false, sun: 0.5, depth: 0, depthT: 0, flood: 1 };
  return S.finish(state, V(0.4, 1.5, 0), {
    tick(dt, T, st) {
      const s = st.sun; /* umur tanaman: 0 semai -> 1 panen */
      const g = smooth(0, 0.45, s); plant.scale.set(0.3 + 0.7 * g, 0.25 + 0.75 * g, 0.3 + 0.7 * g);
      plant.children.forEach((m) => { if (m.userData.layer === 'batang') m.scale.setScalar(1); });
      const head = smooth(0.5, 0.65, s); headMesh.visible = head > 0.02; headMesh.scale.setScalar(Math.max(0.01, head));
      const ripe = smooth(0.7, 0.95, s); if (leafM.userData.base) { leafM.userData.base.copy(C(0.35, 0.62, 0.22)).lerp(C(0.75, 0.66, 0.3), ripe * 0.8); grainM.userData.base.copy(C(0.5, 0.65, 0.3)).lerp(C(0.88, 0.72, 0.3), ripe); stemM.userData.base.copy(C(0.55, 0.72, 0.35)).lerp(C(0.85, 0.75, 0.4), ripe); }
      headMesh.rotation.x = ripe * 0.15; /* malai merunduk saat bulir terisi */
      st.flood += ((s < 0.82 ? 1 : 0) - st.flood) * Math.min(1, dt * 2); water.scale.y = Math.max(0.01, st.flood); water.position.y = 0; water.visible = st.flood > 0.02;
      grain.rotation.y = T * 0.4; grain.visible = s > 0.75;
    },
    api: { labels: { depth: null, sun: 'Umur tanaman' } },
  });
}

/* ================= BEDAH: SARANG LEBAH MADU ================= */
export function buildHiveDissect(renderer) {
  const S = stage(renderer, ['#6a4a18', '#1c1206'], 4.4), r = rng(31);
  /* sisiran heksagonal dari lilin */
  const R = 0.28, cells = [], kinds = [];
  for (let j = -6; j <= 6; j++) for (let i = -7; i <= 7; i++) { const x = i * R * 1.75 + (j % 2 ? R * 0.875 : 0), y = 2.2 + j * R * 1.52; if (Math.hypot(x / 1.4, y - 2.2) > 3) continue; cells.push([x, y]); const d = Math.hypot(x, (y - 2.2) * 1.2); kinds.push(d < 1.2 ? 'anak' : d < 2.2 ? 'roti' : 'madu'); }
  const waxM = new THREE.MeshStandardMaterial({ color: C(0.95, 0.82, 0.45), roughness: 0.55, side: THREE.DoubleSide });
  const walls = cells.map(([x, y]) => new THREE.CylinderGeometry(R, R, 0.5, 6, 1, true).rotateX(Math.PI / 2).rotateZ(Math.PI / 6).translate(x, y, 0));
  S.add('sisiran', new THREE.Mesh(mergeGeometries(walls), waxM));
  S.add('sisiran', new THREE.Mesh(new THREE.BoxGeometry(5.2, 4.4, 0.04).translate(0, 2.2, -0.25), waxM));
  /* isi sel */
  const honeyM = new THREE.MeshPhysicalMaterial({ color: C(0.95, 0.6, 0.08), roughness: 0.05, transmission: 0.2, clearcoat: 1 }), capM = new THREE.MeshStandardMaterial({ color: C(0.98, 0.92, 0.7), roughness: 0.7 });
  const pollenM = new THREE.MeshStandardMaterial({ color: C(0.9, 0.55, 0.15), roughness: 0.9 });
  const H = [], Cp = [], Pl = [], brood = [];
  cells.forEach(([x, y], i) => { const k = kinds[i]; if (k === 'madu') { H.push(new THREE.CylinderGeometry(R * 0.85, R * 0.85, 0.35, 6).rotateX(Math.PI / 2).rotateZ(Math.PI / 6).translate(x, y, -0.05)); if (r() < 0.6) Cp.push(new THREE.CircleGeometry(R * 0.9, 6).rotateZ(Math.PI / 6).translate(x, y, 0.24)); } else if (k === 'roti') Pl.push(new THREE.CylinderGeometry(R * 0.8, R * 0.8, 0.25, 6).rotateX(Math.PI / 2).rotateZ(Math.PI / 6).translate(x, y, -0.1)); else brood.push([x, y]); });
  S.add('madu', new THREE.Mesh(mergeGeometries(H), honeyM)); S.add('madu', new THREE.Mesh(mergeGeometries(Cp), capM)); S.add('roti', new THREE.Mesh(mergeGeometries(Pl), pollenM));
  /* anakan: telur -> larva -> pupa (bertutup) sesuai slider waktu */
  const eggM = new THREE.MeshStandardMaterial({ color: C(0.98, 0.97, 0.94) }), larvaM = new THREE.MeshStandardMaterial({ color: C(0.97, 0.95, 0.88), roughness: 0.4 }), broodCapM = new THREE.MeshStandardMaterial({ color: C(0.75, 0.55, 0.3), roughness: 0.8 });
  const egg = S.add('anak', new THREE.Mesh(mergeGeometries(brood.map(([x, y]) => ellG([0.02, 0.06, 0.02], [x, y, -0.15], 5))), eggM));
  const larva = S.add('anak', new THREE.Mesh(mergeGeometries(brood.map(([x, y]) => new THREE.TorusGeometry(0.11, 0.06, 6, 10, Math.PI * 1.6).translate(x, y, -0.05))), larvaM));
  const pupa = S.add('anak', new THREE.Mesh(mergeGeometries(brood.map(([x, y]) => new THREE.CircleGeometry(R * 0.9, 6).rotateZ(Math.PI / 6).translate(x, y, 0.24))), broodCapM));
  /* lebah: ratu (panjang), pekerja, jantan (besar, mata besar) */
  const bee = (L, w, eye) => { const g = [ellG([0.14 * w, 0.12 * w, 0.12 * w], [0.1, 0, 0], 8), ellG([0.1 * w, 0.1 * w, 0.1 * w], [0.27, 0, 0], 8), ellG([0.26 * L, 0.12 * w, 0.12 * w], [-0.22 * L, 0, 0], 10)]; if (eye) g.push(ellG([0.07, 0.07, 0.07], [0.3, 0.05, 0.08], 6), ellG([0.07, 0.07, 0.07], [0.3, 0.05, -0.08], 6)); g.push(new THREE.CircleGeometry(0.22, 8).scale(1.3, 0.5, 1).rotateX(-Math.PI / 2 + 0.3).translate(0, 0.12, 0.14), new THREE.CircleGeometry(0.22, 8).scale(1.3, 0.5, 1).rotateX(-Math.PI / 2 - 0.3).translate(0, 0.12, -0.14)); return mergeGeometries(g.map((x) => x.index ? x.toNonIndexed() : x)); };
  const yM = new THREE.MeshStandardMaterial({ color: C(0.75, 0.55, 0.15), roughness: 0.6, side: THREE.DoubleSide }), qM = new THREE.MeshStandardMaterial({ color: C(0.65, 0.4, 0.12), roughness: 0.5, side: THREE.DoubleSide }), dM = new THREE.MeshStandardMaterial({ color: C(0.4, 0.3, 0.15), roughness: 0.6, side: THREE.DoubleSide });
  const queen = S.add('ratu', new THREE.Mesh(bee(1.7, 1.1, false), qM)); queen.position.set(0.3, 2.3, 0.45);
  const workers = new THREE.Group(); S.scene.add(workers); const wg = bee(1, 1, false);
  for (let i = 0; i < 9; i++) { const m = new THREE.Mesh(wg, yM); if (i === 0) S.add('pekerja', m, workers); else workers.add(m); }
  const drone = S.add('jantan', new THREE.Mesh(bee(1.25, 1.35, true), dM)); drone.position.set(-1.7, 3.2, 0.5); drone.rotation.z = 0.4;
  const state = { yaw: 0.0, yaw0: 0.0, pitch: 0.12, dist: 10, user: false, sun: 0.5, depth: 0, depthT: 0 };
  return S.finish(state, V(0, 2.2, 0), {
    tick(dt, T, st) {
      const d = st.sun * 21; /* hari ke- (lebah pekerja: telur 3 hari, larva ~6 hari, pupa ~12 hari) */
      egg.visible = d < 3; larva.visible = d >= 3 && d < 9; pupa.visible = d >= 9; larva.scale.setScalar(0.6 + 0.4 * smooth(3, 9, d));
      workers.children.forEach((w, i) => { const a = T * 0.4 + i * 0.7; w.position.set(Math.cos(a) * (1 + (i % 3) * 0.6), 2.2 + Math.sin(a * 1.3) * 1.4, 0.45 + (i % 2) * 0.1); w.rotation.z = a + Math.PI / 2; });
      queen.position.x = 0.3 + Math.sin(T * 0.2) * 0.3;
    },
    api: { labels: { depth: null, sun: 'Hari ke-' } },
  });
}

/* ================= BEDAH: KOMPOS ================= */
export function buildCompostDissect(renderer) {
  const S = stage(renderer, ['#4a3a24', '#140e08'], 4.6), r = rng(41);
  /* tumpukan kompos dipotong separuh; lapisan hijau (kaya nitrogen) dan cokelat (kaya karbon) */
  const pile = new THREE.Group(); S.scene.add(pile);
  const layers = [['hijau', 0.0, C(0.35, 0.55, 0.2)], ['coklat', 0.45, C(0.55, 0.4, 0.22)], ['hijau', 0.9, C(0.35, 0.55, 0.2)], ['coklat', 1.35, C(0.55, 0.4, 0.22)], ['hijau', 1.8, C(0.35, 0.55, 0.2)], ['coklat', 2.2, C(0.55, 0.4, 0.22)]];
  const mats = { hijau: new THREE.MeshStandardMaterial({ color: C(0.35, 0.55, 0.2), roughness: 0.9, side: THREE.DoubleSide }), coklat: new THREE.MeshStandardMaterial({ color: C(0.55, 0.4, 0.22), roughness: 0.95, side: THREE.DoubleSide }) };
  const radAt = (y) => 2.2 * Math.sqrt(Math.max(0, 1 - Math.pow(y / 2.7, 2)));
  layers.forEach(([k, y0], i) => { const y1 = y0 + 0.45, g = new THREE.CylinderGeometry(radAt(y1), radAt(y0), 0.45, 32, 1, false, Math.PI / 2, Math.PI * 1.5).translate(0, y0 + 0.225, 0); S.add(k, new THREE.Mesh(g, mats[k]), pile); });
  /* bahan: daun, ranting, sisa sayur */
  const bits = []; for (let i = 0; i < 120; i++) { const y = r() * 2.5, a = Math.PI / 2 + r() * Math.PI * 1.5, rr = radAt(y) * (0.9 + r() * 0.12); bits.push(new THREE.PlaneGeometry(0.2, 0.1).rotateX(r() * 3).rotateY(r() * 3).translate(Math.cos(a) * rr, y, -Math.sin(a) * rr)); }
  const bitsM = new THREE.MeshStandardMaterial({ color: C(0.45, 0.5, 0.2), side: THREE.DoubleSide }); const bitMesh = new THREE.Mesh(mergeGeometries(bits), bitsM); pile.add(bitMesh);
  /* kompos matang: tanah gelap gembur yang menggantikan lapisan */
  const done = S.add('matang', new THREE.Mesh(new THREE.CylinderGeometry(0.2, 2.25, 2.0, 32, 1, false, 0, TAU).translate(0, 1.0, 0), new THREE.MeshStandardMaterial({ color: C(0.2, 0.14, 0.09), roughness: 1 })));
  /* mikroba (titik bercahaya), panas (partikel naik), cacing tanah */
  const mic = S.mkFlow(Array.from({ length: 8 }, (_, i) => { const a = Math.PI * 0.6 + i * 0.4, y = 0.3 + (i % 4) * 0.5; return [[Math.cos(a) * 0.5, y, -Math.sin(a) * 0.5], [Math.cos(a) * 1.2, y + 0.3, -Math.sin(a) * 1.2], [Math.cos(a + 0.4) * 0.8, y + 0.1, -Math.sin(a + 0.4) * 0.8], [Math.cos(a) * 0.5, y, -Math.sin(a) * 0.5]]; }), new THREE.Color(1.2, 2.4, 1.0), 90, 0.06, { amt: (st) => st.micro, spd: 0.15, jit: 0.15 });
  const heat = S.mkFlow([[[0, 1.5, 0], [0.1, 2.6, 0], [0, 3.6, 0.1], [0.2, 4.4, 0]], [[0.6, 1.2, -0.3], [0.7, 2.5, -0.3], [0.5, 3.8, -0.2]], [[-0.6, 1.2, 0.3], [-0.5, 2.6, 0.3], [-0.7, 3.8, 0.2]]], new THREE.Color(2.6, 1.2, 0.5), 50, 0.09, { amt: (st) => smooth(40, 60, st.temp), spd: 0.25, jit: 0.15 });
  const worms = new THREE.Group(); S.scene.add(worms); const wm = new THREE.MeshStandardMaterial({ color: C(0.75, 0.4, 0.38), roughness: 0.4 });
  for (let i = 0; i < 6; i++) { const a = Math.PI * 0.7 + i * 0.5, y = 0.3 + (i % 3) * 0.4, m = new THREE.Mesh(tubeG([[0, 0, 0], [0.15, 0.05, 0.05], [0.3, 0, -0.05], [0.45, 0.03, 0]], 0.035, 10, 6), wm); m.position.set(Math.cos(a) * 1.2, y, -Math.sin(a) * 1.2); m.rotation.y = r() * 3; if (i === 0) S.add('cacing', m, worms); else worms.add(m); }
  const microReg = S.add('mikroba', new THREE.Mesh(ellG([0.12, 0.12, 0.12], [0.6, 1.4, 0.4], 8), new THREE.MeshStandardMaterial({ color: C(0.5, 0.9, 0.4), emissive: C(0.2, 0.5, 0.15) })));
  const state = { yaw: 0.75, yaw0: 0.75, pitch: 0.3, dist: 12, user: false, sun: 0.3, depth: 0, depthT: 0, temp: 30, micro: 0.5 };
  return S.finish(state, V(0, 1.4, 0), {
    tick(dt, T, st) {
      const w = st.sun * 12; /* minggu ke- */
      const tgt = w < 0.5 ? lerp(30, 45, w * 2) : w < 3 ? lerp(45, 62, smooth(0.5, 1.5, w)) : w < 7 ? lerp(62, 40, smooth(3, 7, w)) : lerp(40, 28, smooth(7, 10, w));
      st.temp += (tgt - st.temp) * Math.min(1, dt * 2); st.micro = smooth(0, 1, w) * (1 - 0.5 * smooth(8, 12, w));
      const rot = smooth(1, 10, w); pile.scale.set(1 - rot * 0.15, 1 - rot * 0.35, 1 - rot * 0.15);
      mats.hijau.userData.base && mats.hijau.userData.base.copy(C(0.35, 0.55, 0.2)).lerp(C(0.2, 0.14, 0.09), rot); mats.coklat.userData.base && mats.coklat.userData.base.copy(C(0.55, 0.4, 0.22)).lerp(C(0.2, 0.14, 0.09), rot);
      bitMesh.visible = rot < 0.7; done.visible = w > 9.5; done.scale.setScalar(0.85);
      worms.visible = w > 4; worms.children.forEach((m, i) => { m.rotation.y += Math.sin(T + i) * 0.01; });
    },
    api: { labels: { depth: null, sun: 'Minggu ke-' } },
  });
}
