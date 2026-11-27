import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, cone, rel, hairTexture, addEyes, quadSkeleton, brainGeo } from '../animal.js';
import { lerp } from '../util.js';

/* Spec PENYU HIJAU (Chelonia mydas) merayap di pasir. Model menghadap +x, tanah di y = -0.5.
   Kaki berupa sirip: sirip depan panjang, sirip belakang pendek. Ayunan sirip memakai sumbu y (legAxis). */
const HEAD_P = [1.55, 0.0, 0], TAIL_P = [-1.55, -0.15, 0];
const LEGS = [[0.85, -0.2, 0.85], [0.85, -0.2, -0.85], [-1.05, -0.25, 0.6], [-1.05, -0.25, -0.6]];
const GUT = [[0.55, -0.15, -0.2], [0.2, -0.25, 0.3], [-0.2, -0.2, -0.3], [-0.5, -0.25, 0.25], [-0.8, -0.2, -0.15], [-1.1, -0.2, 0.1], [-1.45, -0.18, 0]];

let ts = null, tk = null;
/* karapas: sisik (skut) besar bersusun dengan guratan memancar */
const shellTex = () => ts || (ts = (() => { const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d'); x.fillStyle = '#4d4128'; x.fillRect(0, 0, 512, 512);
  const cells = [[256, 256, 70], [256, 120, 62], [256, 392, 62], [140, 190, 66], [372, 190, 66], [140, 322, 66], [372, 322, 66], [70, 256, 50], [442, 256, 50], [256, 30, 40], [256, 482, 40]];
  for (const [cx, cy, r] of cells) { const g = x.createRadialGradient(cx, cy, 4, cx, cy, r); g.addColorStop(0, '#9a7a40'); g.addColorStop(0.6, '#6e5530'); g.addColorStop(1, '#3a2e1a'); x.fillStyle = g; x.beginPath(); for (let k = 0; k < 6; k++) { const a = k / 6 * Math.PI * 2 + 0.5; x.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); } x.fill();
    x.strokeStyle = 'rgba(30,22,10,0.35)'; for (let k = 0; k < 14; k++) { const a = k / 14 * Math.PI * 2; x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(a) * r * 0.9, cy + Math.sin(a) * r * 0.9); x.stroke(); } }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })());
const skinTex = () => tk || (tk = hairTexture('#6a6a5a', (x, N, r) => { for (let i = 0; i < 160; i++) { x.fillStyle = 'rgba(40,38,30,0.5)'; x.beginPath(); x.ellipse(r() * N, r() * N, 6 + r() * 6, 5 + r() * 5, 0, 0, Math.PI * 2); x.fill(); x.strokeStyle = 'rgba(210,205,180,0.5)'; x.stroke(); } }, 61, [2, 2], 0));

export default {
  id: 'penyu', dist: [6.5, 13], groundY: -0.5, worldScale: 0.42, hitR: 0.8, hitY: 0.2, muscleShrink: 0.86,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 0.25, step: 1.6, swing: 0.45, radius: 4, keep: 2.5, legAxis: 'y', tailA: 0, tailF: 1 },
  camTarget: [0, -0.1, 0], camYaw: 0.6, bg: ['#3a5a64', '#0e1a20'], pedR: 3.6, dotSize: 0.1,
  vitals: (a) => ({ bpm: Math.round(lerp(10, 40, a)), rr: Math.round(lerp(1, 8, a)) }),
  capText: (s) => s > 0.6 ? 'Penyu aktif berenang: napas lebih sering dan jantung berdetak lebih cepat. Penyu berdarah dingin, jadi angkanya ikut suhu air.' : 'Penyu beristirahat: detak jantung bisa sangat lambat. Saat tidur di dasar laut, penyu dapat menahan napas berjam-jam.',
  bodyParts(sh) {
    setSH(sh);
    const shellG = ell([1.55, 0.52, 1.2], [0, 0.05, 0], 30); { const p = shellG.attributes.position; for (let i = 0; i < p.count; i++) if (p.getY(i) < 0.05) p.setY(i, 0.05 + (p.getY(i) - 0.05) * 0.35); shellG.computeVertexNormals(); }
    const body = merge([shellG, ell([1.4, 0.2, 1.05], [0, -0.12, 0], 22)]);
    const head = rel(merge([limb([1.35, -0.02, 0], [1.75, 0.05, 0], 0.26, 0.24), ell([0.42, 0.3, 0.3], [1.98, 0.08, 0], 18), ell([0.12, 0.1, 0.16], [2.36, 0.02, 0], 10)]), HEAD_P);
    const tail = rel(cone(0.12, 0.35, [-1.7, -0.15, 0], [0, 0, Math.PI / 2], 6), TAIL_P);
    const fl = (s) => merge([limb([0, 0, 0], [0.2, -0.05, s * 0.45], 0.18, 0.14), ell([0.95, 0.06, 0.32], [-0.05, -0.12, s * 1.15], 16, [0, s * 0.55, 0])]);
    const hl = (s) => merge([limb([0, 0, 0], [-0.15, -0.05, s * 0.3], 0.15, 0.12), ell([0.42, 0.05, 0.25], [-0.35, -0.12, s * 0.55], 12, [0, -s * 0.5, 0])]);
    const legs = LEGS.map((p, i) => i < 2 ? fl(Math.sign(p[2])) : hl(Math.sign(p[2])));
    setSH(1);
    return { body, head, tail, legs };
  },
  skinMats() {
    const body = new THREE.MeshPhysicalMaterial({ map: shellTex(), roughness: 0.7, clearcoat: 0.25, clearcoatRoughness: 0.5, envMapIntensity: 0.5 });
    const skin = new THREE.MeshStandardMaterial({ map: skinTex(), roughness: 0.7 });
    return { body, head: skin, tail: skin, legs: skin };
  },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [2.15, 0.2, 0.24], r: 0.1, scale: [1, 1, 0.8], iris: [0.2, 0.14, 0.08], pupil: 'round', side: true });
    const beakM = new THREE.MeshStandardMaterial({ color: C(0.35, 0.33, 0.25), roughness: 0.4, transparent: true });
    A.head.add(new THREE.Mesh(ell([0.12, 0.08, 0.14], [2.4 - HP[0], -0.05 - HP[1], 0], 10), beakM));
    return mats.concat([beakM]);
  },
  bones() {
    /* tempurung bertulang menyatu dengan tulang belakang dan rusuk */
    const shellB = ell([1.42, 0.42, 1.08], [0, 0.04, 0], 24); { const p = shellB.attributes.position; for (let i = 0; i < p.count; i++) if (p.getY(i) < 0) p.setY(i, p.getY(i) * 0.3); }
    const plast = ell([1.25, 0.06, 0.95], [0, -0.16, 0], 18);
    const ribs = []; for (let k = 0; k < 8; k++) { const x = 0.9 - k * 0.25; for (const s of [1, -1]) ribs.push(limb([x, 0.32, 0], [x, 0.18, s * 0.95], 0.04, 0.03, 5)); }
    return quadSkeleton({
      skull: [[[0.32, 0.25, 0.25], [2.0, 0.1, 0], 16]], jaw: [[[2.0, -0.05, 0], [2.42, 0.0, 0], 0.08, 0.05]],
      spine: [[1.75, 0.05, 0], [1.3, 0.2, 0], [0.5, 0.36, 0], [-0.5, 0.34, 0], [-1.3, 0.1, 0], [-1.7, -0.12, 0]], nV: 18, vr: 0.06,
      ribs: { n: 0, x0: 0, dx: 0, cy: 0, hh: 0, hw: 0 },
      scap: [[0.7, 0.15, 0.4], [0.85, -0.2, 0.7]], pelvis: [[0.35, 0.1, 0.35], [-1.0, -0.05, 0], [0, 0, 0]],
      front: [[[0.85, -0.2, 0.85], [1.05, -0.25, 1.2], [0.95, -0.3, 1.7], [0.7, -0.32, 2.1]]],
      hind: [[[-1.05, -0.25, 0.6], [-1.2, -0.3, 0.85], [-1.35, -0.32, 1.05], [-1.5, -0.33, 1.15]]], br: [0.07, 0.06, 0.05, 0.04],
      extra: [shellB, plast, ...ribs],
    });
  },
  organs(addO, organMat) {
    addO('otak', brainGeo([0.12, 0.07, 0.08], [[0.04, 0.03, 0.04], [-0.1, -0.01, 0]]), organMat([0.88, 0.7, 0.66], 0.5, 0.3), [1.98, 0.14, 0]);
    addO('garam', merge([ell([0.08, 0.05, 0.06], [2.08, 0.16, 0.2], 8), ell([0.08, 0.05, 0.06], [2.08, 0.16, -0.2], 8)]), organMat([0.75, 0.85, 0.95], 0.3, 0.5));
    const HC = [0.85, -0.05, 0];
    const heart = addO('jantung', rel(merge([ell([0.18, 0.15, 0.2], HC, 16), limb([0.95, 0.05, 0], [1.25, 0.05, 0.1], 0.04, 0.035), limb([0.95, 0.05, 0], [1.25, 0.05, -0.1], 0.04, 0.035)]), HC), organMat([0.6, 0.06, 0.1], 0.3, 0.8), HC);
    const lungs = [1, -1].map((s) => { const c = [-0.1, 0.24, s * 0.42]; return addO('paru', rel(ell([0.95, 0.12, 0.33], c, 18), c), organMat([0.9, 0.5, 0.55], 0.5, 0.3), c); });
    addO('hati', merge([ell([0.42, 0.1, 0.32], [0.55, -0.1, 0.38], 14), ell([0.42, 0.1, 0.32], [0.55, -0.1, -0.38], 14)]), organMat([0.42, 0.12, 0.1], 0.35, 0.7));
    addO('lambung', merge([tube([[2.3, 0.0, 0], [1.6, 0.0, 0], [1.1, -0.05, -0.1], [0.75, -0.1, -0.2]], 0.05, 14, 6), ell([0.3, 0.12, 0.16], [0.6, -0.12, -0.22], 14)]), organMat([0.9, 0.62, 0.55], 0.4, 0.5));
    addO('usus', tube(GUT, 0.05, 60, 6), organMat([0.94, 0.72, 0.64], 0.45, 0.6));
    addO('kemih', ell([0.2, 0.08, 0.15], [-1.2, -0.17, 0], 12), organMat([0.95, 0.9, 0.6], 0.25, 0.5));
    return { heart, lungs };
  },
  keepDepth: ['sarang'],
  decor(addD, organMat) {
    const eg = []; for (let i = 0; i < 14; i++) { const a = i * 2.4, rr = 0.12 + (i % 5) * 0.06; eg.push(ell([0.1, 0.1, 0.1], [-2.6 + Math.cos(a) * rr, -0.4 + (i % 3) * 0.05, 1.9 + Math.sin(a) * rr], 10)); }
    addD('sarang', merge(eg), organMat([0.96, 0.94, 0.88], 0.5, 0.3));
    addD('sarang', ell([0.6, 0.06, 0.5], [-2.6, -0.48, 1.9], 16), organMat([0.75, 0.62, 0.42], 1, 0));
  },
  food: { main: [[2.4, 0.0, 0], [1.6, 0.0, 0], [1.1, -0.05, -0.1], [0.6, -0.12, -0.22], ...GUT], n: 28 },
};
