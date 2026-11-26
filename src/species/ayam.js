import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, cone, rel, hairTexture, furMat, addEyes, quadSkeleton, brainGeo } from '../animal.js';
import { lerp } from '../util.js';

/* Spec AYAM KAMPUNG betina (Gallus gallus domesticus). Satuan ~0,05 m, tanah di y = -2.4. Dua kaki. */
const HEAD_P = [1.0, 0.6, 0], TAIL_P = [-1.3, 0.4, 0];
const LEGS = [[0.1, -0.8, 0.4], [0.1, -0.8, -0.4]];
const GUT = [[0.0, -0.55, 0.15], [-0.2, -0.75, -0.25], [-0.6, -0.5, 0.35], [-0.5, -0.2, -0.3], [-0.9, -0.55, 0.2], [-1.1, -0.3, -0.1], [-1.35, -0.3, 0]];

let tex = null;
const feathers = () => tex || (tex = hairTexture('#8a4a22', (x, N, r) => {
  for (let j = 0; j < 14; j++) for (let i = 0; i < 12; i++) { const cx = i * N / 12 + (j % 2) * N / 24, cy = j * N / 14; x.fillStyle = r() < 0.3 ? 'rgba(40,20,8,0.45)' : 'rgba(200,120,50,0.25)'; x.beginPath(); x.ellipse(cx, cy, N / 26, N / 18, 0, 0, Math.PI); x.fill(); x.strokeStyle = 'rgba(30,14,6,0.4)'; x.lineWidth = 1.5; x.beginPath(); x.arc(cx, cy, N / 26, 0, Math.PI); x.stroke(); }
}, 61, [2, 2], 3000));

export default {
  id: 'ayam', dist: [13, 27], groundY: -2.4, worldScale: 0.075, hitR: 0.45, hitY: 0.25, muscleShrink: 0.86,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 0.55, step: 9, swing: 0.5, radius: 4, keep: 1.3, graze: 1.1, tailA: 0.06, tailF: 2 },
  camTarget: [0.2, 0, 0], camYaw: 0, bg: ['#4a3a24', '#1c140c'], pedR: 4.6, dotSize: 0.12,
  vitals: (a) => ({ bpm: Math.round(lerp(250, 340, a)), rr: Math.round(lerp(18, 45, a)) }),
  bodyParts(sh) {
    setSH(sh);
    const body = merge([ell([1.6, 1.1, 1.0], [0, 0, 0], 28, [0, 0, 0.25]), ell([0.95, 0.9, 0.85], [0.85, -0.15, 0]), ell([1.0, 0.75, 0.9], [-0.6, -0.35, 0]),
      ell([1.15, 0.6, 0.22], [0.0, 0.15, 0.92], 18, [0, 0, 0.2]), ell([1.15, 0.6, 0.22], [0.0, 0.15, -0.92], 18, [0, 0, 0.2])]);
    const head = rel(merge([limb([1.0, 0.6, 0], [1.55, 1.65, 0], 0.55, 0.32), ell([0.42, 0.38, 0.34], [1.75, 1.9, 0])]), HEAD_P);
    const tail = rel(merge([ell([0.2, 0.9, 0.5], [-1.45, 1.0, 0], 16, [0, 0, 0.45]), ell([0.18, 0.75, 0.4], [-1.6, 0.8, 0], 14, [0, 0, 0.75])]), TAIL_P);
    const legs = LEGS.map(() => ell([0.35, 0.5, 0.3], [0, -0.15, 0], 14));
    setSH(1);
    return { body, head, tail, legs };
  },
  skinMats() { return furMat(feathers(), [1, 0.8, 0.55], 0.85); },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [1.93, 2.0, 0.25], r: 0.1, scale: [1, 1, 0.8], iris: [0.9, 0.55, 0.1], pupil: 'round', side: true });
    const beakM = new THREE.MeshStandardMaterial({ color: C(0.92, 0.75, 0.3), roughness: 0.4, transparent: true });
    const redM = new THREE.MeshStandardMaterial({ color: C(0.82, 0.12, 0.1), roughness: 0.5, transparent: true });
    const legM = new THREE.MeshStandardMaterial({ color: C(0.88, 0.72, 0.3), roughness: 0.55, transparent: true });
    const o = (x, y, z) => [x - HP[0], y - HP[1], z - HP[2]];
    A.head.add(new THREE.Mesh(cone(0.11, 0.38, o(2.27, 1.83, 0), [0, 0, -Math.PI / 2 - 0.25], 10), beakM));
    const comb = []; for (let i = 0; i < 5; i++) comb.push(ell([0.09, 0.14 + (i === 2 ? 0.05 : 0), 0.04], o(1.55 + i * 0.1, 2.28 + Math.sin(i / 4 * Math.PI) * 0.05, 0), 8));
    comb.push(ell([0.07, 0.13, 0.05], o(2.05, 1.55, 0.06), 8), ell([0.07, 0.13, 0.05], o(2.05, 1.55, -0.06), 8));
    A.head.add(new THREE.Mesh(merge(comb), redM));
    A.legs.forEach((g) => {
      const parts = [limb([0, -0.5, 0], [0.05, -1.45, 0], 0.075, 0.06)];
      for (const a of [-0.45, 0, 0.45]) parts.push(limb([0.05, -1.5, 0], [0.05 + Math.cos(a) * 0.45, -1.58, Math.sin(a) * 0.45], 0.04, 0.025));
      parts.push(limb([0.05, -1.5, 0], [-0.28, -1.58, 0], 0.035, 0.025));
      g.add(new THREE.Mesh(merge(parts), legM));
    });
    return mats.concat([beakM, redM, legM]);
  },
  bones() {
    const keel = ell([0.85, 0.55, 0.05], [0.55, -0.6, 0], 16), wing = [];
    for (const s of [1, -1]) wing.push(limb([0.8, 0.45, s * 0.55], [0.25, 0.2, s * 0.82], 0.06, 0.05), limb([0.25, 0.2, s * 0.82], [0.8, 0.0, s * 0.88], 0.05, 0.04), limb([0.8, 0.0, s * 0.88], [-0.4, 0.15, s * 0.9], 0.035, 0.02), limb([0.95, 0.55, s * 0.2], [0.75, -0.1, s * 0.12], 0.04, 0.03));
    return quadSkeleton({
      skull: [[[0.33, 0.3, 0.28], [1.75, 1.92, 0], 16]], jaw: [[[1.95, 1.88, 0], [2.3, 1.82, 0], 0.08, 0.03]],
      spine: [[1.65, 1.75, 0], [1.3, 1.2, 0], [1.0, 0.6, 0], [0.3, 0.55, 0], [-0.8, 0.45, 0], [-1.35, 0.6, 0]], nV: 24, vr: 0.08,
      ribs: { n: 6, x0: 0.85, dx: 0.17, cy: -0.05, hh: 0.6, hw: 0.62, t: 0.035 },
      pelvis: [[0.8, 0.22, 0.5], [-0.6, 0.35, 0], [0, 0, 0.1]],
      front: [], hind: [[[0.1, -0.5, 0.4], [0.25, -0.95, 0.4], [0.1, -1.75, 0.4], [0.3, -2.3, 0.4]]], br: [0.08, 0.07, 0.05, 0.03],
      extra: [keel, ...wing, ell([0.1, 0.25, 0.25], [-1.4, 0.75, 0], 10)],
    });
  },
  organs(addO, organMat) {
    addO('otak', brainGeo([0.2, 0.15, 0.15], [[0.08, 0.07, 0.08], [-0.18, -0.05, 0]]), organMat([0.88, 0.68, 0.68], 0.5, 0.3), [1.75, 2.02, 0]);
    const HC = [0.72, -0.3, 0];
    const heart = addO('jantung', rel(merge([ell([0.2, 0.28, 0.18], HC, 20), limb([0.75, -0.05, 0], [0.9, 0.35, 0], 0.06, 0.05)]), HC), organMat([0.6, 0.06, 0.1], 0.3, 0.8), HC);
    const lungs = [1, -1].map((s) => { const c = [0.3, 0.5, s * 0.32]; return addO('paru', rel(ell([0.42, 0.14, 0.18], c, 18), c), organMat([0.9, 0.42, 0.48], 0.55, 0.2), c); });
    addO('paru', tube([[2.0, 1.75, 0], [1.5, 1.2, 0], [1.0, 0.55, 0], [0.55, 0.45, 0]], 0.04, 24, 6), organMat([0.88, 0.85, 0.8], 0.4, 0.4));
    const sacM = new THREE.MeshPhysicalMaterial({ color: C(0.85, 0.92, 1.0), roughness: 0.1, transparent: true, opacity: 0.4, clearcoat: 1, depthWrite: false });
    addO('kantong', merge([ell([0.2, 0.18, 0.18], [1.05, 0.55, 0], 14), ell([0.25, 0.2, 0.3], [0.95, 0.0, 0], 14), ...[1, -1].flatMap((s) => [ell([0.35, 0.25, 0.25], [0.2, 0.05, s * 0.5], 14), ell([0.55, 0.35, 0.3], [-0.6, -0.1, s * 0.5], 16)])]), sacM);
    addO('tembolok', merge([ell([0.22, 0.2, 0.2], [1.22, 0.42, 0.18], 16), tube([[2.05, 1.7, 0.05], [1.5, 1.15, 0.1], [1.22, 0.42, 0.18], [0.75, 0.05, 0.05], [0.5, -0.05, 0]], 0.04, 24, 6)]), organMat([0.92, 0.7, 0.6], 0.45, 0.4));
    addO('ampela', merge([ell([0.13, 0.11, 0.11], [0.45, -0.08, 0], 12), ell([0.3, 0.28, 0.24], [0.0, -0.55, 0.15], 20)]), organMat([0.55, 0.15, 0.12], 0.4, 0.6));
    addO('hati', merge([ell([0.3, 0.2, 0.18], [0.55, -0.45, 0.28], 16), ell([0.28, 0.2, 0.18], [0.55, -0.45, -0.28], 16)]), organMat([0.4, 0.1, 0.08], 0.35, 0.7));
    addO('usus', merge([tube(GUT, 0.06, 90, 6), tube([[-0.7, -0.45, 0.1], [-0.3, -0.1, 0.4], [0.0, 0.0, 0.3]], 0.05, 20, 5), tube([[-0.7, -0.45, -0.1], [-0.3, -0.1, -0.4], [0.0, 0.0, -0.3]], 0.05, 20, 5)]), organMat([0.94, 0.7, 0.64], 0.45, 0.6));
    for (const s of [1, -1]) addO('ginjal', ell([0.35, 0.08, 0.12], [-0.6, 0.42, s * 0.2], 14), organMat([0.5, 0.14, 0.1], 0.35, 0.7));
    const ov = []; for (let i = 0; i < 9; i++) ov.push(ell([0.05 + i * 0.012, 0.05 + i * 0.012, 0.05 + i * 0.012], [-0.05 + Math.sin(i * 2.1) * 0.12, 0.35 + Math.cos(i * 1.7) * 0.08, -0.25 + Math.sin(i) * 0.06], 10));
    addO('oviduk', merge(ov), organMat([0.98, 0.78, 0.2], 0.35, 0.6));
    addO('oviduk', tube([[-0.05, 0.3, -0.25], [-0.3, 0.1, -0.4], [-0.1, -0.2, -0.35], [-0.6, -0.15, -0.35], [-0.95, -0.2, -0.3], [-1.3, -0.3, -0.05]], 0.07, 40, 6), organMat([0.95, 0.75, 0.72], 0.45, 0.5));
    addO('oviduk', ell([0.22, 0.17, 0.17], [-0.95, -0.2, -0.3], 16), organMat([0.96, 0.9, 0.8], 0.3, 0.8));
    return { heart, lungs };
  },
  food: { main: [[2.28, 1.8, 0], [1.55, 1.15, 0.1], [1.22, 0.42, 0.18], [0.75, 0.05, 0.05], [0.45, -0.08, 0], ...GUT], n: 50 },
  flows: [{ pts: [[2.15, 1.85, 0], [1.5, 1.2, 0], [1.0, 0.55, 0], [-0.6, -0.1, 0.5], [0.3, 0.5, 0.32], [0.95, 0.0, 0.1], [1.5, 1.2, 0], [2.15, 1.85, 0]], color: new THREE.Color(0.5, 1.5, 2.6), n: 40, speed: 1.6, jit: 0.1 }],
  capText: (s) => 'Perkiraan: jantung ' + Math.round(lerp(250, 340, s)) + ' detak per menit, napas ' + Math.round(lerp(18, 45, s)) + ' kali per menit (kisaran umum, sumber berbeda-beda). Titik biru: udara mengalir satu arah lewat kantong udara dan paru-paru.',
};
