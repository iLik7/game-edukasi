import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import { stage } from './geo.js';

/* FASE 3: HUTAN HUJAN TROPIS. Dunia: pohon raksasa berakar papan dengan liana dan epifit, padma raksasa (Rafflesia),
   rumpun kantong semar. Bedah statis: Rafflesia (hari ke-), kantong semar (serangga tercerna), lapisan tajuk (ketinggian). */
const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ellG = (r, p, seg = 10) => new THREE.SphereGeometry(1, seg, Math.max(6, seg * 0.7 | 0)).scale(r[0], r[1], r[2]).translate(p[0], p[1], p[2]);
const tubeG = (pts, r, seg = 12, rs = 6) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => V(...p))), seg, r, rs);
const ni = (g) => g.index ? g.toNonIndexed() : g;
const mg = (a) => mergeGeometries(a.map(ni));
function tex(N, draw, rep, srgb = true) { const c = document.createElement('canvas'); c.width = c.height = N; draw(c.getContext('2d'), N); const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; if (rep) t.repeat.set(rep[0], rep[1]); return t; }

/* ---------- bentuk bersama ---------- */
/* Rafflesia: 5 kelopak tebal berbintil, tabung dengan diafragma, cakram berduri di tengah */
let RT = null;
const raffTex = () => RT || (RT = tex(256, (x, N) => { x.fillStyle = '#8a2418'; x.fillRect(0, 0, N, N); const q = rng(6); for (let i = 0; i < 220; i++) { const r = 3 + q() * 8; x.fillStyle = `rgba(235,${200 + q() * 30},${180 + q() * 30},0.9)`; x.beginPath(); x.ellipse(q() * N, q() * N, r, r * 0.8, 0, 0, TAU); x.fill(); } }));
function rafflesiaGeo(s, open = 1, cut = false) {
  const petals = [], tubeA = [], disc = [];
  for (let k = 0; k < 5; k++) { const a = k / 5 * TAU; const p = new THREE.SphereGeometry(1, 20, 12, 0, TAU, 0, Math.PI / 2).scale(0.55 * s, 0.12 * s, 0.5 * s); p.rotateZ(-0.35 * (1 - open) * 2.5); p.translate(0.62 * s, 0.08 * s + (1 - open) * 0.3 * s, 0); p.rotateY(a); petals.push(p); }
  const tube = new THREE.CylinderGeometry(0.42 * s, 0.5 * s, 0.4 * s, 32, 1, true, cut ? Math.PI / 2 : 0, cut ? Math.PI * 1.5 : TAU).translate(0, 0.25 * s, 0); tubeA.push(tube);
  tubeA.push(new THREE.RingGeometry(0.2 * s, 0.43 * s, 32, 1, cut ? Math.PI / 2 : 0, cut ? Math.PI * 1.5 : TAU).rotateX(-Math.PI / 2).translate(0, 0.45 * s, 0));
  disc.push(new THREE.CylinderGeometry(0.33 * s, 0.33 * s, 0.05 * s, 28).translate(0, 0.2 * s, 0));
  for (let i = 0; i < 30; i++) { const a = i * 2.4, rr = Math.sqrt(i / 30) * 0.28 * s; disc.push(new THREE.ConeGeometry(0.025 * s, 0.12 * s, 5).translate(Math.cos(a) * rr, 0.28 * s, Math.sin(a) * rr)); }
  return { petals: mg(petals), tube: mg(tubeA), disc: mg(disc) };
}
/* kantong semar: kantong silinder menggembung, bibir (peristom) bergerigi, tutup, sulur dari ujung daun */
function pitcherGeo(s, cut = false) {
  const prof = []; for (let i = 0; i <= 20; i++) { const t = i / 20; prof.push(new THREE.Vector2((0.22 + 0.14 * Math.sin(Math.PI * Math.min(1, t * 1.3)) - 0.04 * t) * s * (t < 0.04 ? t / 0.04 : 1) + 0.001, t * 1.1 * s)); }
  const body = new THREE.LatheGeometry(prof, 28, cut ? Math.PI / 2 : 0, cut ? Math.PI * 1.5 : TAU);
  const rim = new THREE.TorusGeometry(0.2 * s, 0.035 * s, 8, 32, cut ? Math.PI * 1.5 : TAU).rotateX(Math.PI / 2); if (cut) rim.rotateY(-Math.PI / 2 + Math.PI); rim.translate(0, 1.1 * s, 0);
  const lid = new THREE.SphereGeometry(0.26 * s, 16, 8, 0, TAU, 0, Math.PI / 2).scale(1, 0.25, 1).rotateZ(-0.9).translate(-0.18 * s, 1.32 * s, 0);
  const tendril = tubeG([[0, 0, 0], [0.15 * s, -0.25 * s, 0], [0.5 * s, -0.35 * s, 0.1 * s], [0.9 * s, -0.2 * s, 0.1 * s]], 0.02 * s, 16, 5);
  return { body, rim, lid, tendril };
}

/* ================= DUNIA ================= */
export function buildRainforestDecor(scene, heightAt, spots) {
  const r = rng(808), G = new THREE.Group(); scene.add(G);
  const barkT = tex(256, (x, N) => { x.fillStyle = '#6a5a48'; x.fillRect(0, 0, N, N); const q = rng(2); for (let i = 0; i < 300; i++) { x.fillStyle = q() < 0.5 ? 'rgba(40,34,26,0.4)' : 'rgba(150,140,120,0.3)'; x.fillRect(q() * N, q() * N, 2 + q() * 4, 10 + q() * 30); } for (let i = 0; i < 40; i++) { x.fillStyle = 'rgba(90,120,60,0.45)'; x.beginPath(); x.ellipse(q() * N, q() * N, 10, 6, 0, 0, TAU); x.fill(); } }, [2, 6]);
  const barkM = new THREE.MeshStandardMaterial({ map: barkT, roughness: 0.9 }), leafM = new THREE.MeshStandardMaterial({ color: C(0.16, 0.34, 0.12), roughness: 0.6, side: THREE.DoubleSide }), lianaM = new THREE.MeshStandardMaterial({ color: C(0.35, 0.3, 0.22), roughness: 0.8 });
  /* pohon raksasa (dipterokarpa) berakar papan */
  const giant = (x, z, H) => { const y = heightAt(x, z), B = [], L = [], Li = [];
    B.push(new THREE.CylinderGeometry(0.8, 1.3, H, 14).translate(x, y + H / 2, z));
    for (let k = 0; k < 5; k++) { const a = k / 5 * TAU + r(); const sh = new THREE.Shape(); sh.moveTo(0, 0); sh.lineTo(3.2, 0); sh.quadraticCurveTo(1.2, 0.6, 0.6, 4.5); sh.lineTo(0, 4.5); const g = new THREE.ExtrudeGeometry(sh, { depth: 0.25, bevelEnabled: false }); g.translate(0, 0, -0.12); g.rotateY(-a); g.translate(x, y - 0.1, z); B.push(g); }
    for (let k = 0; k < 6; k++) { const a = k / 6 * TAU + r(), b = V(Math.cos(a) * 7, H + 1.5 + r() * 2, Math.sin(a) * 7); B.push(tubeG([[x, y + H - 3, z], [x + b.x * 0.5, y + H, z + b.z * 0.5], [x + b.x, y + b.y, z + b.z]], 0.35, 8, 6)); for (let i = 0; i < 160; i++) { const p = V(x + b.x + (r() - 0.5) * 7, y + b.y + 0.5 + (r() - 0.5) * 2.5, z + b.z + (r() - 0.5) * 7); L.push(new THREE.PlaneGeometry(0.5, 0.9).rotateX(-Math.PI / 2 + (r() - 0.5)).rotateY(r() * TAU).translate(p.x, p.y, p.z)); } }
    for (let k = 0; k < 5; k++) { const a = r() * TAU, d = 4 + r() * 5; Li.push(tubeG([[x + Math.cos(a) * 3, y + H - 2, z + Math.sin(a) * 3], [x + Math.cos(a) * d, y + H * 0.5, z + Math.sin(a) * d], [x + Math.cos(a) * (d + 1), y, z + Math.sin(a) * (d + 1)]], 0.07, 16, 5)); }
    const bm = new THREE.Mesh(mg(B), barkM), lm = new THREE.Mesh(mg(L), leafM), li = new THREE.Mesh(mg(Li), lianaM); bm.castShadow = lm.castShadow = true; lm.userData.noAO = true; G.add(bm, lm, li); };
  giant(spots.tajuk[0], spots.tajuk[1], 34); giant(spots.tajuk[0] - 40, spots.tajuk[1] + 25, 30); giant(spots.tajuk[0] + 30, spots.tajuk[1] - 35, 32);
  /* Rafflesia mekar di atas akar liana inang */
  { const [x, z] = spots.rafflesia, y = heightAt(x, z), R = rafflesiaGeo(0.9);
    const g = new THREE.Group(); g.position.set(x, y + 0.02, z); G.add(g);
    g.add(new THREE.Mesh(R.petals, new THREE.MeshStandardMaterial({ map: raffTex(), roughness: 0.75 })), new THREE.Mesh(R.tube, new THREE.MeshStandardMaterial({ map: raffTex(), roughness: 0.75, side: THREE.DoubleSide })), new THREE.Mesh(R.disc, new THREE.MeshStandardMaterial({ color: C(0.5, 0.12, 0.08), roughness: 0.7 })));
    g.add(new THREE.Mesh(tubeG([[-3, 0, 0.5], [-1, 0.05, 0.2], [0.8, 0.02, -0.4], [3, 0, -0.6]], 0.08, 20, 6), lianaM));
    g.add(new THREE.Mesh(ellG([0.25, 0.2, 0.25], [1.5, 0.1, -0.5], 12), new THREE.MeshStandardMaterial({ color: C(0.4, 0.2, 0.12), roughness: 0.8 }))); }
  /* rumpun kantong semar merambat di semak */
  { const [x, z] = spots.kantong, y = heightAt(x, z), bodies = [], rims = [], lids = [], ten = [], leaves = [];
    for (let i = 0; i < 9; i++) { const a = r() * TAU, d = r() * 1.6, s = 0.18 + r() * 0.12, px = x + Math.cos(a) * d, pz = z + Math.sin(a) * d, py = heightAt(px, pz) + 0.05 + r() * 0.6, P = pitcherGeo(s), ry = r() * TAU;
      for (const [arr, g] of [[bodies, P.body], [rims, P.rim], [lids, P.lid], [ten, P.tendril]]) arr.push(g.rotateY(ry).translate(px, py, pz));
      leaves.push(new THREE.PlaneGeometry(0.12, 0.45).rotateX(-1.2).rotateY(ry + 1).translate(px + 0.25, py + 0.1, pz)); }
    const pm = new THREE.MeshStandardMaterial({ color: C(0.55, 0.62, 0.25), roughness: 0.5, side: THREE.DoubleSide }), rm = new THREE.MeshStandardMaterial({ color: C(0.65, 0.12, 0.12), roughness: 0.4 });
    G.add(new THREE.Mesh(mg(bodies), pm), new THREE.Mesh(mg(rims), rm), new THREE.Mesh(mg(lids), pm), new THREE.Mesh(mg(ten), lianaM), new THREE.Mesh(mg(leaves), leafM)); }
  return { update(P) { G.visible = Math.hypot(P.x - spots.tajuk[0], P.z - spots.tajuk[1]) < 230; } };
}

/* ================= BEDAH: RAFFLESIA ================= */
export function buildRafflesiaDissect(renderer) {
  const S = stage(renderer, ['#3a2a1a', '#0e0a06'], 4.4), r = rng(51);
  const R = rafflesiaGeo(2.2, 1, true), petM = new THREE.MeshStandardMaterial({ map: raffTex(), roughness: 0.75 }), tubM = new THREE.MeshStandardMaterial({ map: raffTex(), roughness: 0.75, side: THREE.DoubleSide });
  const fl = new THREE.Group(); S.scene.add(fl);
  S.add('perigon', new THREE.Mesh(R.petals, petM), fl); S.add('diafragma', new THREE.Mesh(R.tube, tubM), fl); S.add('cakram', new THREE.Mesh(R.disc, new THREE.MeshStandardMaterial({ color: C(0.55, 0.15, 0.1), roughness: 0.7 })), fl);
  /* benang sari di bawah tepi cakram (bunga jantan), terlihat lewat potongan */
  const an = []; for (let k = 0; k < 24; k++) { const a = Math.PI / 2 + k / 24 * Math.PI * 1.5; an.push(ellG([0.06, 0.08, 0.06], [Math.cos(a) * 0.62, 0.32, -Math.sin(a) * 0.62], 6)); }
  S.add('benangsari', new THREE.Mesh(mg(an), new THREE.MeshStandardMaterial({ color: C(0.95, 0.85, 0.6), emissive: C(0.2, 0.15, 0.05) })), fl);
  /* liana inang (Tetrastigma) */
  const host = S.add('inang', new THREE.Mesh(tubeG([[-4, 0.1, 1.2], [-1.5, 0.15, 0.4], [0, 0.05, 0], [2, 0.12, -0.8], [4.2, 0.1, -1.2]], 0.16, 30, 8), new THREE.MeshStandardMaterial({ color: C(0.42, 0.33, 0.22), roughness: 0.85 })));
  /* kuncup (knop) yang tumbuh di inang */
  const bud = S.add('kuncup', new THREE.Mesh(ellG([0.5, 0.42, 0.5], [0, 0.35, 0], 20), new THREE.MeshStandardMaterial({ color: C(0.45, 0.22, 0.14), roughness: 0.8 })));
  const bud2 = new THREE.Mesh(ellG([0.25, 0.22, 0.25], [2.6, 0.2, -0.95], 14), bud.material); S.scene.add(bud2);
  /* lalat bangkai */
  const flies = new THREE.Group(); S.scene.add(flies); const fg = mg([ellG([0.06, 0.04, 0.04], [0, 0, 0], 6), new THREE.CircleGeometry(0.06, 6).rotateX(-Math.PI / 2).translate(0, 0.03, 0.05), new THREE.CircleGeometry(0.06, 6).rotateX(-Math.PI / 2).translate(0, 0.03, -0.05)]);
  for (let i = 0; i < 8; i++) { const m = new THREE.Mesh(fg, new THREE.MeshStandardMaterial({ color: C(0.15, 0.3, 0.2), metalness: 0.5, roughness: 0.3, side: THREE.DoubleSide })); if (i === 0) S.add('lalat', m, flies); else flies.add(m); }
  /* bau busuk: partikel naik */
  const smell = S.mkFlow([[[0, 0.6, 0], [0.2, 1.5, 0.1], [-0.1, 2.6, 0.2], [0.3, 3.6, 0]], [[0.5, 0.5, -0.3], [0.7, 1.6, -0.4], [0.5, 2.8, -0.2]], [[-0.5, 0.5, 0.3], [-0.6, 1.5, 0.4], [-0.4, 2.7, 0.3]]], new THREE.Color(1.4, 1.8, 0.8), 40, 0.08, { amt: (st) => smooth(0.72, 0.78, st.sun) * (1 - smooth(0.9, 0.97, st.sun)), spd: 0.15, jit: 0.25 });
  const base = petM.color.clone();
  const state = { yaw: 0.45, yaw0: 0.45, pitch: 0.55, dist: 9, user: false, sun: 0.8, depth: 0, depthT: 0 };
  return S.finish(state, V(0, 0.4, 0), {
    tick(dt, T, st) {
      const s = st.sun, grow = smooth(0, 0.7, s), open = smooth(0.7, 0.78, s), rot = smooth(0.9, 1, s);
      bud.visible = s < 0.74; bud.scale.setScalar(0.25 + grow * 0.9); fl.visible = s > 0.7; fl.scale.set(lerp(0.3, 1, open), lerp(0.6, 1, open) * (1 - rot * 0.6), lerp(0.3, 1, open));
      if (petM.userData.base) { petM.userData.base.copy(base).lerp(C(0.12, 0.08, 0.06), rot); tubM.userData.base.copy(base).lerp(C(0.12, 0.08, 0.06), rot); }
      bud2.scale.setScalar(0.5 + grow * 0.5);
      const fv = smooth(0.72, 0.8, s) * (1 - smooth(0.92, 0.98, s)); flies.visible = fv > 0.05;
      flies.children.forEach((f, i) => { const a = T * (1.2 + i * 0.2) + i, rr = 0.6 + (i % 3) * 0.5; f.position.set(Math.cos(a) * rr * 1.8, 0.8 + Math.sin(T * 3 + i) * 0.4 + (i % 2) * 0.6, Math.sin(a) * rr * 1.8); f.rotation.y = -a; });
    },
    api: { labels: { depth: null, sun: 'Waktu' } },
  });
}

/* ================= BEDAH: KANTONG SEMAR ================= */
export function buildPitcherDissect(renderer) {
  const S = stage(renderer, ['#2a3a22', '#0a1008'], 3.6), r = rng(61), s = 2.4;
  const P = pitcherGeo(s, true), g = new THREE.Group(); S.scene.add(g);
  const bodyM = new THREE.MeshPhysicalMaterial({ color: C(0.55, 0.65, 0.25), roughness: 0.45, side: THREE.DoubleSide, clearcoat: 0.3 });
  S.add('kantong', new THREE.Mesh(P.body, bodyM), g); S.add('peristom', new THREE.Mesh(P.rim, new THREE.MeshPhysicalMaterial({ color: C(0.7, 0.12, 0.12), roughness: 0.2, clearcoat: 1 })), g);
  S.add('tutup', new THREE.Mesh(P.lid, new THREE.MeshStandardMaterial({ color: C(0.6, 0.6, 0.25), roughness: 0.5, side: THREE.DoubleSide })), g);
  S.add('sulur', new THREE.Mesh(P.tendril, new THREE.MeshStandardMaterial({ color: C(0.45, 0.5, 0.2) })), g);
  S.add('sulur', new THREE.Mesh(new THREE.PlaneGeometry(0.6, 2.4).translate(0, 1.2, 0).rotateZ(-1.3).translate(2.1, -0.5, 0.25), new THREE.MeshStandardMaterial({ color: C(0.3, 0.5, 0.18), side: THREE.DoubleSide })), g);
  /* zona lilin (atas, licin) dan zona kelenjar (bawah) di dinding dalam */
  const inner = (y0, y1, col, id) => { const prof = []; for (let i = 0; i <= 10; i++) { const t = lerp(y0, y1, i / 10); prof.push(new THREE.Vector2((0.22 + 0.14 * Math.sin(Math.PI * Math.min(1, t * 1.3)) - 0.04 * t) * s - 0.03, t * 1.1 * s)); } return S.add(id, new THREE.Mesh(new THREE.LatheGeometry(prof, 28, Math.PI / 2, Math.PI * 1.5), new THREE.MeshStandardMaterial({ color: col, roughness: id === 'lilin' ? 0.15 : 0.7, side: THREE.BackSide })), g); };
  inner(0.55, 0.97, C(0.75, 0.8, 0.55), 'lilin'); inner(0.05, 0.5, C(0.6, 0.35, 0.3), 'kelenjar');
  const gl = []; for (let i = 0; i < 160; i++) { const t = 0.08 + r() * 0.4, a = Math.PI / 2 + r() * Math.PI * 1.5, rr = (0.22 + 0.14 * Math.sin(Math.PI * Math.min(1, t * 1.3)) - 0.04 * t) * s - 0.04; gl.push(ellG([0.02, 0.02, 0.02], [Math.cos(a) * rr, t * 1.1 * s, -Math.sin(a) * rr], 4)); }
  S.add('kelenjar', new THREE.Mesh(mg(gl), new THREE.MeshStandardMaterial({ color: C(0.85, 0.3, 0.3) })), g);
  /* cairan pencerna */
  const fluidH = 0.45 * 1.1 * s, fl = []; { const prof = []; for (let i = 0; i <= 10; i++) { const t = 0.02 + i / 10 * 0.43; prof.push(new THREE.Vector2((0.22 + 0.14 * Math.sin(Math.PI * Math.min(1, t * 1.3)) - 0.04 * t) * s - 0.05, t * 1.1 * s)); } prof.push(new THREE.Vector2(0.001, fluidH)); fl.push(new THREE.LatheGeometry(prof, 28, Math.PI / 2, Math.PI * 1.5)); }
  const fluidM = new THREE.MeshPhysicalMaterial({ color: C(0.85, 0.8, 0.45), transparent: true, opacity: 0.55, roughness: 0.05, transmission: 0.2, depthWrite: false });
  S.add('cairan', new THREE.Mesh(fl[0], fluidM), g);
  /* semut/serangga yang tergelincir */
  const bug = new THREE.Group(); g.add(bug); const bm = new THREE.MeshStandardMaterial({ color: C(0.15, 0.08, 0.05), roughness: 0.4, transparent: true });
  bug.add(new THREE.Mesh(mg([ellG([0.07, 0.05, 0.05], [0, 0, 0], 8), ellG([0.05, 0.04, 0.04], [0.11, 0, 0], 8), ellG([0.09, 0.06, 0.06], [-0.13, 0, 0], 8)]), bm)); S.ent.lilin && 0;
  const nut = S.mkFlow([[[0, 0.35, 0], [0.3, 0.5, -0.2], [0.55, 0.6, -0.3]], [[0, 0.3, 0], [-0.3, 0.45, -0.25], [-0.55, 0.55, -0.35]], [[0, 0.3, 0], [0.1, 0.6, -0.5], [0.05, 0.9, -0.6]]], new THREE.Color(0.8, 2.2, 1.0), 40, 0.05, { amt: (st) => smooth(0.65, 0.8, st.sun), spd: 0.15, jit: 0.04 });
  const state = { yaw: 0.6, yaw0: 0.6, pitch: 0.35, dist: 9, user: false, sun: 0.3, depth: 0, depthT: 0 };
  const path = new THREE.CatmullRomCurve3([V(0.55 * s * 0.4, 1.12 * s, 0.2), V(0.3, 0.9 * s, 0.2), V(0.15, 0.6 * s, 0.1), V(0, fluidH - 0.1, 0)]);
  return S.finish(state, V(0, 1.4, 0), {
    tick(dt, T, st) {
      const u = st.sun, k = smooth(0.15, 0.55, u), p = path.getPoint(k); bug.position.copy(p); bug.rotation.z = -1.2 * k; bug.visible = u > 0.1;
      bm.opacity = 1 - smooth(0.6, 0.9, u); bug.scale.setScalar(1 - 0.5 * smooth(0.6, 0.9, u));
      g.rotation.z = Math.sin(T * 0.6) * 0.01;
    },
    api: { labels: { depth: null, sun: 'Waktu' } },
  });
}

/* ================= BEDAH: LAPISAN TAJUK ================= */
export function buildCanopyDissect(renderer) {
  const S = stage(renderer, ['#2a4a2a', '#08140a'], 0), r = rng(71);
  S.scene.fog = new THREE.FogExp2(0x2a4030, 0.012);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(16, 40).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: C(0.25, 0.2, 0.12), roughness: 1 })); ground.receiveShadow = true; S.scene.add(ground);
  const barkM = new THREE.MeshStandardMaterial({ color: C(0.22, 0.18, 0.13), roughness: 0.95, envMapIntensity: 0.3 });
  const tree = (x, z, h, cr, col, id, crownY) => { const g = [new THREE.CylinderGeometry(0.12 * h / 10, 0.2 * h / 10, h, 8).translate(x, h / 2, z)], L = [];
    for (let i = 0; i < 420; i++) { const u = r() * TAU, v = Math.acos(2 * r() - 1), rr = Math.cbrt(r()); L.push(new THREE.PlaneGeometry(0.75, 1.1).rotateX(-Math.PI / 2 + (r() - 0.5)).rotateY(r() * TAU).translate(x + Math.sin(v) * Math.cos(u) * cr * rr, (crownY ?? h) + Math.cos(v) * cr * 0.4 * rr, z + Math.sin(v) * Math.sin(u) * cr * rr)); }
    S.add(id, new THREE.Mesh(mg(g), barkM)); S.add(id, new THREE.Mesh(mg(L), new THREE.MeshStandardMaterial({ color: col, roughness: 0.6, side: THREE.DoubleSide }))); };
  /* mencuat (~40 m), kanopi (~25-30 m), bawah tajuk (~5-15 m); skala diperkecil 1:2 */
  tree(0, 0, 21, 4.5, C(0.25, 0.45, 0.18), 'mencuat');
  for (const [x, z, h] of [[-6, -3, 14], [6, -2, 14.5], [-3, 5, 13.5], [5, 6, 14], [-8, 6, 13], [8, -7, 13.5], [-1, -8, 14]]) tree(x, z, h, 3.6, C(0.18, 0.38, 0.14), 'kanopi');
  for (const [x, z, h] of [[-3, -1, 6], [3, 2, 5], [-5, 3, 4], [2, -4, 6.5], [6, 3, 4.5]]) tree(x, z, h, 1.6, C(0.22, 0.42, 0.2), 'bawah', h);
  /* lantai hutan: serasah, paku, jamur */
  const f = []; for (let i = 0; i < 300; i++) { const a = r() * TAU, d = r() * 12; f.push(new THREE.PlaneGeometry(0.25, 0.15).rotateX(-Math.PI / 2).rotateZ(r() * 3).translate(Math.cos(a) * d, 0.02, Math.sin(a) * d)); }
  for (let i = 0; i < 25; i++) { const a = r() * TAU, d = 1 + r() * 9; for (let k = 0; k < 6; k++) f.push(new THREE.PlaneGeometry(0.15, 0.9).translate(0, 0.45, 0).rotateX(-0.6).rotateY(k / 6 * TAU).translate(Math.cos(a) * d, 0, Math.sin(a) * d)); }
  S.add('lantai', new THREE.Mesh(mg(f), new THREE.MeshStandardMaterial({ color: C(0.4, 0.38, 0.18), side: THREE.DoubleSide, roughness: 0.9 })));
  /* liana dan epifit */
  const li = []; for (let k = 0; k < 6; k++) { const a = r() * TAU, d = 1 + r() * 2; li.push(tubeG([[Math.cos(a) * 0.3, 18, Math.sin(a) * 0.3], [Math.cos(a) * d, 10, Math.sin(a) * d], [Math.cos(a) * (d + 2), 0, Math.sin(a) * (d + 2)]], 0.05, 20, 5)); }
  S.add('liana', new THREE.Mesh(mg(li), new THREE.MeshStandardMaterial({ color: C(0.35, 0.3, 0.2) })));
  const ep = []; for (let k = 0; k < 8; k++) { const y = 6 + k * 1.5, a = k * 1.3; for (let q = 0; q < 6; q++) ep.push(new THREE.PlaneGeometry(0.12, 0.5).translate(0, 0.25, 0).rotateX(-0.5).rotateY(q / 6 * TAU).translate(Math.cos(a) * 0.25, y, Math.sin(a) * 0.25)); ep.push(ellG([0.06, 0.05, 0.06], [Math.cos(a) * 0.35, y + 0.35, Math.sin(a) * 0.35], 6)); }
  S.add('epifit', new THREE.Mesh(mg(ep), new THREE.MeshStandardMaterial({ color: C(0.85, 0.5, 0.75), side: THREE.DoubleSide })));
  /* berkas cahaya yang menembus tajuk */
  const beamM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.5, 1.0), transparent: true, opacity: 0.025, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  for (let k = 0; k < 5; k++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 1.3, 22, 10, 1, true).translate(0, 11, 0), beamM); b.position.set(-6 + k * 3, 0, -2 + (k % 2) * 4); b.rotation.z = 0.15; S.scene.add(b); }
  /* penanda tinggi pengamat */
  const eye = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.05, 8, 40).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 2.0, 0.6) })); S.scene.add(eye);
  const state = { yaw: 0.5, yaw0: 0.5, pitch: 0.12, dist: 30, user: false, sun: 0.0, depth: 0, depthT: 0, h: 0 };
  const tgt = V(0, 2, 0);
  const D = S.finish(state, tgt, {
    tick(dt, T, st) { st.h += (st.sun - st.h) * Math.min(1, dt * 2); const y = lerp(0.5, 22, st.h); eye.position.y = y; tgt.y = lerp(3, 18, st.h); },
    api: { labels: { depth: null, sun: 'Ketinggian pengamat' } },
  });
  return D;
}
