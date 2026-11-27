import * as THREE from 'three';
import { merge, C, ell, limb, tube, hairTexture, furMat, setSH } from '../animal.js';
import SAPI from './sapi.js';
import KAMBING from './kambing.js';
import { lerp } from '../util.js';

/* Ruminansia baru dari rangka sapi dan kambing: domba Garut, banteng, rusa timor. */
const T = {};
/* sembunyikan tanduk bawaan kambing (dikenali dari warnanya), diganti tanduk/ranggah khas spesies */
const hideHorns = (A, mats) => { const hm = mats.find((m) => m.color && Math.abs(m.roughness - 0.5) < 1e-6 && m.color.r < 0.12 && m.color.r > 0.05); A.head.traverse((o) => { if (o.isMesh && o.material === hm) o.visible = false; }); };

/* ===== DOMBA GARUT ===== */
const wool = () => T.w || (T.w = hairTexture('#e8e0cc', (x, N, r) => { for (let i = 0; i < 260; i++) { const cx = r() * N, cy = r() * N, R = 4 + r() * 6; x.strokeStyle = r() < 0.5 ? 'rgba(170,155,125,0.5)' : 'rgba(255,250,235,0.6)'; x.lineWidth = 2; x.beginPath(); x.arc(cx, cy, R, 0, Math.PI * 1.6); x.stroke(); } }, 41, [3, 3], 1200));
export const SP_DOMBA = {
  ...KAMBING, id: 'domba', worldScale: 0.24,
  walk: { ...KAMBING.walk, speed: 0.5 },
  vitals: (a) => ({ bpm: Math.round(lerp(70, 120, a)), rr: Math.round(lerp(16, 40, a)) }),
  bodyParts(sh) { const P = KAMBING.bodyParts(sh); if (sh === 1) P.body = merge([P.body, ell([2.45, 1.18, 1.08], [-0.05, 0.4, 0], 24)]); return P; },
  skinMats() { return furMat(wool(), [1, 0.97, 0.9], 0.95); },
  face(A, HP) {
    const mats = KAMBING.face(A, HP); hideHorns(A, mats);
    const hornM = new THREE.MeshStandardMaterial({ color: C(0.6, 0.55, 0.45), roughness: 0.5, transparent: true });
    /* tanduk domba Garut jantan: melingkar spiral ke samping-depan */
    for (const s of [1, -1]) { const pts = []; for (let k = 0; k <= 18; k++) { const a = k / 18 * Math.PI * 1.6, R = 0.55 - k * 0.018; pts.push([2.75 - HP[0] - Math.sin(a) * R, 2.05 - HP[1] + (Math.cos(a) - 1) * R * 0.9, s * (0.3 + k * 0.035)]); } A.head.add(new THREE.Mesh(tube(pts, 0.11, 30, 8), hornM)); }
    return mats.concat([hornM]);
  },
};

/* ===== BANTENG (Bos javanicus) ===== */
const bantengHide = () => T.b || (T.b = hairTexture('#2a1e16', (x, N, r) => { for (let i = 0; i < 12; i++) { x.fillStyle = 'rgba(70,46,30,0.3)'; x.beginPath(); x.ellipse(r() * N, r() * N, 30 + r() * 40, 20, r() * 3, 0, Math.PI * 2); x.fill(); } }, 51, [2, 2], 2400));
export const SP_BANTENG = {
  ...SAPI, id: 'banteng', worldScale: 0.44,
  walk: { ...SAPI.walk, speed: 0.75, radius: 14 },
  vitals: (a) => ({ bpm: Math.round(lerp(45, 90, a)), rr: Math.round(lerp(15, 45, a)) }),
  skinMats() { return furMat(bantengHide(), [0.6, 0.5, 0.45], 0.75); },
  face(A, HP) {
    const mats = SAPI.face(A, HP), white = new THREE.MeshStandardMaterial({ color: C(0.95, 0.93, 0.88), roughness: 0.9, transparent: true });
    /* "kaus kaki" putih di bagian bawah keempat kaki dan bercak putih di pantat: ciri khas banteng */
    A.legs.forEach((g, i) => { const y = i < 2 ? -1.95 : -2.35, x = i < 2 ? 0.05 : -0.25; g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.2, 0.9, 12).translate(x, y + 0.5, 0), white)); });
    A.root.add(new THREE.Mesh(merge([1, -1].map((s) => ell([0.55, 0.7, 0.35], [-3.05, 0.6, s * 0.5], 14))), white));
    return mats.concat([white]);
  },
};

/* ===== RUSA TIMOR (Rusa timorensis), jantan ===== */
const deerHide = () => T.r || (T.r = hairTexture('#8a6a46', (x, N, r) => { for (let i = 0; i < 10; i++) { x.fillStyle = 'rgba(60,42,26,0.3)'; x.beginPath(); x.ellipse(r() * N, r() * N, 40, 20, r() * 3, 0, Math.PI * 2); x.fill(); } }, 61, [2, 2], 2600));
export const SP_RUSA = {
  ...KAMBING, id: 'rusa', worldScale: 0.3, hitR: 0.9,
  walk: { ...KAMBING.walk, speed: 0.9, radius: 16, keep: 2 },
  vitals: (a) => ({ bpm: Math.round(lerp(60, 140, a)), rr: Math.round(lerp(14, 45, a)) }),
  skinMats() { return furMat(deerHide(), [0.9, 0.75, 0.6], 0.85); },
  face(A, HP) {
    const mats = KAMBING.face(A, HP); hideHorns(A, mats);
    const antM = new THREE.MeshStandardMaterial({ color: C(0.55, 0.45, 0.33), roughness: 0.6, transparent: true }), earM = new THREE.MeshStandardMaterial({ color: C(0.5, 0.38, 0.26), roughness: 0.8, transparent: true });
    const o = (x, y, z) => [x - HP[0], y - HP[1], z];
    /* ranggah bercabang tiga (rusa timor jantan): batang utama, cabang depan dekat pangkal, dua ujung di atas */
    for (const s of [1, -1]) {
      const b0 = o(2.8, 2.05, s * 0.18), b1 = o(2.55, 2.9, s * 0.5), b2 = o(2.35, 3.7, s * 0.62);
      A.head.add(new THREE.Mesh(merge([limb(b0, b1, 0.08, 0.065, 8), limb(b1, b2, 0.065, 0.04, 8), limb(o(2.75, 2.25, s * 0.25), o(3.25, 2.45, s * 0.35), 0.05, 0.02, 6), limb(b2, o(2.55, 4.15, s * 0.6), 0.04, 0.015, 6), limb(b2, o(2.05, 4.05, s * 0.75), 0.04, 0.015, 6)]), antM));
      A.head.add(new THREE.Mesh(ell([0.12, 0.3, 0.08], o(2.75, 2.0, s * 0.45), 10, [s * 0.6, 0, 0.3]), earM));
    }
    return mats.concat([antM, earM]);
  },
};
