import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, rel, hairTexture, addEyes, quadSkeleton, brainGeo } from '../animal.js';

/* Spec KATAK SAWAH (Fejervarya limnocharis), posisi duduk. Satuan ~0,012 m (diperbesar di dunia), tanah di y = -0.85. */
const HEAD_P = [0.9, 0.25, 0], TAIL_P = [-1.3, -0.2, 0];
const LEGS = [[0.85, -0.3, 0.55], [0.85, -0.3, -0.55], [-0.9, -0.2, 0.75], [-0.9, -0.2, -0.75]];
const GUT = [[0.0, -0.2, -0.3], [-0.3, -0.35, 0.25], [-0.55, -0.2, -0.25], [-0.75, -0.4, 0.2], [-1.0, -0.3, 0], [-1.35, -0.3, 0]];

let tex = null;
const skin = () => tex || (tex = hairTexture('#6b6a3c', (x, N, r) => {
  for (let i = 0; i < 40; i++) { x.fillStyle = 'rgba(40,36,18,0.6)'; x.beginPath(); x.ellipse(r() * N, r() * N, 6 + r() * 14, 5 + r() * 10, r() * 3, 0, Math.PI * 2); x.fill(); }
  for (let i = 0; i < 300; i++) { x.fillStyle = 'rgba(160,150,90,0.35)'; x.beginPath(); x.arc(r() * N, r() * N, 1.5 + r() * 2, 0, Math.PI * 2); x.fill(); }
  x.fillStyle = 'rgba(190,190,120,0.5)'; x.fillRect(0, N * 0.24, N, 6);
}, 71, [2, 2], 600));

export default {
  id: 'katak', dist: [9, 18], groundY: -0.85, worldScale: 0.045, hitR: 0.3, hitY: 0.08, muscleShrink: 0.85,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 1.4, step: 3, swing: 0.3, radius: 3.5, keep: 1.8, hop: 0.22 },
  camTarget: [0, -0.1, 0], camYaw: 0.4, bg: ['#2c4a3a', '#0e1a14'], pedR: 4.2, dotSize: 0.1,
  vitals: (a) => ({ bpm: 40 + a * 50, rr: 30 + a * 60 }),
  capText: (s) => s > 0.6 ? 'Katak aktif: napas lewat paru-paru bertambah cepat. Katak berdarah dingin, jadi detak jantungnya juga sangat dipengaruhi suhu lingkungan.' : 'Katak beristirahat: sebagian oksigen diserap lewat kulit yang lembap.',
  bodyParts(sh) {
    setSH(sh);
    const body = merge([ell([1.25, 0.6, 0.85], [-0.1, 0.0, 0], 26, [0, 0, 0.3]), ell([0.9, 0.42, 0.8], [-0.2, -0.3, 0], 20)]);
    const head = rel(merge([ell([0.75, 0.4, 0.85], [1.2, 0.3, 0], 22), ell([0.45, 0.25, 0.6], [1.75, 0.18, 0], 16), ell([0.22, 0.2, 0.2], [1.45, 0.62, 0.5], 12), ell([0.22, 0.2, 0.2], [1.45, 0.62, -0.5], 12)]), HEAD_P);
    const tail = rel(ell([0.1, 0.1, 0.1], [-1.3, -0.2, 0], 8), TAIL_P);
    const fr = (s) => merge([limb([0, 0, 0], [0.15, -0.35, s * 0.15], 0.14, 0.09), limb([0.15, -0.35, s * 0.15], [0.3, -0.52, s * 0.2], 0.08, 0.06), ...[-0.5, 0, 0.5].map((a) => limb([0.3, -0.53, s * 0.2], [0.3 + Math.cos(a) * 0.22, -0.55, s * (0.2 + Math.sin(a) * 0.18)], 0.03, 0.025, 5))]);
    const hl = (s) => merge([limb([0, 0, 0], [0.75, -0.25, s * 0.15], 0.3, 0.17), limb([0.75, -0.25, s * 0.15], [-0.2, -0.45, s * 0.25], 0.16, 0.08), limb([-0.2, -0.45, s * 0.25], [0.55, -0.62, s * 0.35], 0.08, 0.05),
      ...[-0.6, -0.2, 0.2, 0.6].map((a) => limb([0.55, -0.63, s * 0.35], [0.55 + Math.cos(a) * 0.4, -0.65, s * (0.35 + Math.sin(a) * 0.3)], 0.03, 0.02, 5)), ell([0.32, 0.02, 0.28], [0.75, -0.64, s * 0.38], 10)]);
    const legs = LEGS.map((p, i) => i < 2 ? fr(Math.sign(p[2])) : hl(Math.sign(p[2])));
    setSH(1);
    return { body, head, tail, legs };
  },
  skinMats() {
    const m = new THREE.MeshPhysicalMaterial({ map: skin(), bumpMap: skin(), bumpScale: 0.4, roughness: 0.35, clearcoat: 0.8, clearcoatRoughness: 0.25 });
    return m;
  },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [1.47, 0.68, 0.52], r: 0.17, scale: [1, 1, 1], iris: [0.75, 0.6, 0.2], pupil: 'bar', side: true });
    const tm = new THREE.MeshStandardMaterial({ color: C(0.42, 0.36, 0.22), roughness: 0.5, transparent: true });
    for (const s of [1, -1]) { const t = new THREE.Mesh(new THREE.CircleGeometry(0.13, 16), tm); t.position.set(1.12 - HP[0], 0.4 - HP[1], s * 0.78); t.rotation.y = s > 0 ? 0.2 : Math.PI - 0.2; A.head.add(t); }
    return mats.concat([tm]);
  },
  bones() {
    return quadSkeleton({
      skull: [[[0.6, 0.22, 0.7], [1.25, 0.35, 0], 16]], jaw: [[[1.0, 0.1, 0.5], [1.95, 0.12, 0.1], 0.04, 0.03], [[1.0, 0.1, -0.5], [1.95, 0.12, -0.1], 0.04, 0.03]],
      spine: [[0.75, 0.3, 0], [0.2, 0.42, 0], [-0.4, 0.38, 0]], nV: 9, vr: 0.07,
      tail: [[-0.4, 0.38, 0], [-0.9, 0.3, 0], [-1.25, 0.15, 0]], nT: 2, tr: 0.05,
      ribs: { n: 0, x0: 0, dx: 0, cy: 0, hh: 0, hw: 0 },
      scap: [[0.08, 0.3, 0.2], [0.75, 0.05, 0.42]], pelvis: [[0.65, 0.08, 0.12], [-0.9, 0.12, 0], [0, 0, -0.25]],
      front: [[[0.85, -0.3, 0.55], [1.0, -0.65, 0.7], [1.15, -0.82, 0.75], [1.4, -0.85, 0.8]]],
      hind: [[[-0.9, -0.2, 0.75], [-0.15, -0.45, 0.9], [-1.1, -0.65, 1.0], [-0.35, -0.82, 1.1]]], br: [0.07, 0.06, 0.045, 0.03],
      extra: [limb([-0.4, 0.38, 0], [-1.25, 0.15, 0], 0.05, 0.03)],
    });
  },
  organs(addO, organMat) {
    addO('otak', brainGeo([0.2, 0.1, 0.12], [[0.06, 0.05, 0.06], [-0.18, -0.02, 0]]), organMat([0.9, 0.72, 0.68], 0.5, 0.3), [1.2, 0.42, 0]);
    const HC = [0.6, -0.3, 0];
    const heart = addO('jantung', rel(merge([ell([0.15, 0.16, 0.15], [0.55, -0.35, 0], 16), ell([0.1, 0.09, 0.1], [0.68, -0.22, 0.08], 10), ell([0.1, 0.09, 0.1], [0.68, -0.22, -0.08], 10)]), HC), organMat([0.6, 0.06, 0.1], 0.3, 0.8), HC);
    const lungs = [1, -1].map((s) => { const c = [0.25, 0.05, s * 0.42]; return addO('paru', rel(ell([0.35, 0.15, 0.18], c, 16), c), organMat([0.9, 0.5, 0.55], 0.4, 0.4), c); });
    addO('lidah', ell([0.3, 0.04, 0.18], [1.65, 0.12, 0], 14, [0, 0, -0.15]), organMat([0.95, 0.55, 0.55], 0.3, 0.8));
    addO('hati', merge([ell([0.35, 0.12, 0.3], [0.3, -0.35, 0.25], 14), ell([0.35, 0.12, 0.3], [0.3, -0.35, -0.25], 14), ell([0.2, 0.1, 0.2], [0.2, -0.38, 0], 12)]), organMat([0.4, 0.12, 0.1], 0.35, 0.7));
    addO('lambung', merge([ell([0.35, 0.12, 0.13], [0.15, -0.18, -0.3], 14, [0, 0.5, 0]), tube([[1.4, 0.05, 0], [0.8, -0.05, -0.15], [0.45, -0.12, -0.3]], 0.05, 14, 5)]), organMat([0.9, 0.6, 0.55], 0.4, 0.5));
    addO('usus', tube(GUT, 0.05, 60, 6), organMat([0.94, 0.7, 0.64], 0.45, 0.6));
    for (const s of [1, -1]) addO('ginjal', ell([0.25, 0.06, 0.08], [-0.6, 0.15, s * 0.2], 12), organMat([0.5, 0.14, 0.1], 0.35, 0.7));
    return { heart, lungs };
  },
  keepDepth: ['telur', 'berudu', 'katakmuda'],
  decor(addD, organMat) {
    const jelly = new THREE.MeshPhysicalMaterial({ color: C(0.8, 0.9, 0.85), roughness: 0.05, transparent: true, opacity: 0.45, clearcoat: 1 });
    const eggs = [], dots = [];
    for (let i = 0; i < 16; i++) { const x = -2.4 + (i % 4) * 0.22 + (Math.floor(i / 4) % 2) * 0.1, z = 2.3 + Math.floor(i / 4) * 0.2; eggs.push(ell([0.12, 0.12, 0.12], [x, -0.75, z], 10)); dots.push(ell([0.04, 0.04, 0.04], [x, -0.75, z], 6)); }
    addD('telur', merge(eggs), jelly); addD('telur', merge(dots), organMat([0.08, 0.07, 0.06], 0.4, 0.4));
    const tad = merge([ell([0.25, 0.18, 0.18], [0, -0.7, 2.6], 14), ell([0.45, 0.14, 0.03], [-0.5, -0.7, 2.6], 10), ell([0.12, 0.05, 0.05], [-0.15, -0.82, 2.72], 6), ell([0.12, 0.05, 0.05], [-0.15, -0.82, 2.48], 6)]);
    addD('berudu', tad, organMat([0.3, 0.28, 0.2], 0.4, 0.6));
    const young = merge([ell([0.3, 0.16, 0.22], [2.2, -0.72, 2.4], 12, [0, 0, 0.3]), ell([0.2, 0.12, 0.22], [2.5, -0.66, 2.4], 10), ell([0.18, 0.04, 0.03], [1.85, -0.78, 2.4], 8), limb([2.05, -0.78, 2.55], [2.35, -0.84, 2.62], 0.04, 0.03), limb([2.05, -0.78, 2.25], [2.35, -0.84, 2.18], 0.04, 0.03)]);
    addD('katakmuda', young, organMat([0.42, 0.42, 0.25], 0.4, 0.6));
  },
  food: { main: [[1.95, 0.12, 0], [1.4, 0.05, 0], [0.8, -0.05, -0.15], [0.15, -0.18, -0.3], ...GUT], n: 30 },
};
