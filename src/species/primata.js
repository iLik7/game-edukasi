import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, rel, hairTexture, furMat, addEyes, quadSkeleton, brainGeo } from '../animal.js';
import { lerp } from '../util.js';

/* PABRIK PRIMATA: berjalan merangkak dengan lengan panjang (tumpuan kepalan tangan) dan kaki pendek pencengkeram.
   Satuan ~0,1 m (orangutan); tarsius memakai skala dunia kecil dan mata raksasa. Model menghadap +x. */
export function makePrimate(o) {
  const A = o.arm || 1, Lg = o.leg || 1, hs = o.head || 1, eyeR = o.eyeR || 0.11;
  const SH = 1.0, SHY = 1.05, HIPX = -0.85, HIPY = 0.25;
  const HEAD_P = [1.55, 1.45, 0], TAIL_P = [-1.0, 0.2, 0];
  const LEGS = [[SH, SHY, 0.72], [SH, SHY, -0.72], [HIPX, HIPY, 0.55], [HIPX, HIPY, -0.55]];
  /* tinggi tanah ditentukan lengan: bahu -> siku -> kepalan */
  const armDrop = 1.15 * A + 1.0 * A, groundY = SHY - armDrop - 0.08;
  const legDrop = HIPY - groundY;
  const GUT = [[0.3, 0.15, -0.25], [0.0, 0.0, 0.3], [-0.3, 0.1, -0.3], [-0.55, 0.05, 0.25], [-0.75, 0.15, 0], [-1.0, 0.2, 0]];
  let tex = null;
  const hair = () => tex || (tex = hairTexture(o.hair || '#9a4418', (x, N, r) => { for (let i = 0; i < 900; i++) { x.strokeStyle = r() < 0.5 ? (o.hairDark || 'rgba(70,24,6,0.45)') : (o.hairLight || 'rgba(220,120,60,0.3)'); x.lineWidth = 1.6; const px = r() * N, py = r() * N; x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + 3, py + 10, px + (r() - 0.5) * 6, py + 18 + r() * 14); x.stroke(); } }, o.seed || 101, [2, 2], 2500));
  const arm = (s) => { const el = [0.12, -1.15 * A, s * 0.1], hand = [0.22, -armDrop, s * 0.05];
    return merge([limb([0, 0, 0], el, 0.32 * (o.limbR || 1), 0.24 * (o.limbR || 1)), limb(el, hand, 0.24 * (o.limbR || 1), 0.17 * (o.limbR || 1)), ell([0.22, 0.14, 0.2], [hand[0] + 0.05, hand[1] + 0.02, hand[2]], 10),
      ...[-0.35, -0.12, 0.12, 0.35].map((a) => limb([hand[0] + 0.12, hand[1] + 0.02, hand[2] + a * 0.4], [hand[0] + 0.22, hand[1] - 0.04, hand[2] + a * 0.45], 0.045, 0.035, 5))]); };
  const leg = (s) => { const kn = [0.35, -legDrop * 0.45, s * 0.25], ft = [0.05, -legDrop + 0.05, s * 0.2];
    return merge([limb([0, 0, 0], kn, 0.3 * (o.limbR || 1), 0.22 * (o.limbR || 1)), limb(kn, ft, 0.22 * (o.limbR || 1), 0.15 * (o.limbR || 1)), ell([0.32, 0.08, 0.17], [ft[0] + 0.15, ft[1] - 0.02, ft[2]], 10),
      ...[-0.3, -0.1, 0.1, 0.3].map((a) => limb([ft[0] + 0.4, ft[1] - 0.02, ft[2] + a * 0.4], [ft[0] + 0.52, ft[1] - 0.04, ft[2] + a * 0.45], 0.04, 0.03, 5)),
      limb([ft[0] + 0.1, ft[1], ft[2] + s * 0.15], [ft[0] + 0.25, ft[1] - 0.02, ft[2] + s * 0.38], 0.05, 0.04, 5)]); };
  return {
    id: o.id, dist: o.dist || [10, 20], groundY, worldScale: o.worldScale || 0.3, hitR: o.hitR || 0.9, hitY: 0.6, muscleShrink: 0.86,
    pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
    walk: { speed: 0.55, step: 3.0, swing: 0.45, radius: o.radius || 12, keep: 2, tailA: 0, ...(o.walk || {}) },
    camTarget: [0.1, 0.3, 0], camYaw: 0.45, bg: o.bg || ['#2a3a26', '#0b100a'], pedR: 5, dotSize: 0.11,
    vitals: o.vitals,
    capText: o.capText,
    bodyParts(sh) {
      setSH(sh);
      const body = merge([ell([1.15, 0.85, 0.82], [0.05, 0.6, 0], 28, [0, 0, 0.45]), ell([0.75, 0.75, 0.85], [0.75, 1.0, 0], 20), ell([0.7, 0.6, 0.7], [-0.7, 0.3, 0], 18), limb([1.1, 1.2, 0], [1.5, 1.42, 0], 0.4, 0.34)]);
      const head = rel(merge([ell([0.42 * hs, 0.44 * hs, 0.4 * hs], [1.72, 1.6, 0], 22), ell([0.3 * hs, 0.26 * hs, 0.3 * hs], [2.02, 1.42, 0], 16), ...(o.cheekPads ? [1, -1].map((s) => ell([0.12, 0.38, 0.24], [1.95, 1.55, s * 0.38], 12)) : []),
        ...(o.bigEars ? [1, -1].map((s) => ell([0.08, 0.3 * hs, 0.22 * hs], [1.6, 1.85, s * 0.42 * hs], 10, [s * 0.4, 0, 0])) : [1, -1].map((s) => ell([0.06, 0.1, 0.08], [1.65, 1.62, s * 0.4 * hs], 8)))]), HEAD_P);
      const tail = rel(ell(o.tail ? [0.08, 0.08, 0.08] : [0.04, 0.04, 0.04], [-1.0, 0.2, 0], 6), TAIL_P);
      const legs = LEGS.map((p, i) => i < 2 ? arm(Math.sign(p[2])) : leg(Math.sign(p[2])));
      setSH(1);
      return { body, head, tail, legs };
    },
    skinMats() { return furMat(hair(), o.sheen || [1, 0.6, 0.35], 0.95); },
    face(A, HP) {
      const ex = 2.05 + (hs - 1) * 0.2, ey = 1.68 + (hs - 1) * 0.2;
      const mats = addEyes(A.head, HP, { p: [ex, ey, 0.17 * hs], r: eyeR, scale: [0.7, 1, 1], iris: o.iris || [0.35, 0.2, 0.1], pupil: 'round' });
      const faceM = new THREE.MeshStandardMaterial({ color: C(...(o.faceCol || [0.25, 0.2, 0.18])), roughness: 0.7, transparent: true });
      const fo = (x, y, z) => [x - HP[0], y - HP[1], z - HP[2]];
      A.head.add(new THREE.Mesh(merge([ell([0.12, 0.26 * hs, 0.28 * hs], fo(2.06, 1.55, 0), 14), ell([0.2, 0.14, 0.24], fo(2.15, 1.36, 0), 12)]), faceM));
      if (o.tail) A.tail.add(new THREE.Mesh(tube([[0, 0, 0], [-0.6, 0.3, 0], [-1.3, 0.2, 0.1], [-1.9, 0.6, 0]], 0.04, 16, 5), new THREE.MeshStandardMaterial({ color: C(...o.tail), roughness: 0.9, transparent: true })));
      return mats.concat([faceM]);
    },
    bones() {
      return quadSkeleton({
        skull: [[[0.38 * hs, 0.4 * hs, 0.36 * hs], [1.72, 1.62, 0], 18]], jaw: [[[1.9, 1.4, 0], [2.2, 1.32, 0], 0.18, 0.14]],
        spine: [[1.5, 1.42, 0], [1.0, 1.15, 0], [0.2, 0.75, 0], [-0.5, 0.35, 0], [-0.95, 0.22, 0]], nV: 24, vr: 0.1,
        ribs: { n: 12, x0: 0.95, dx: 0.1, cy: 0.75, hh: 0.7, hw: 0.75 },
        scap: [[0.1, 0.4, 0.3], [0.9, 1.15, 0.6]], pelvis: [[0.35, 0.5, 0.6], [HIPX, HIPY, 0], [0, 0, 0.5]],
        front: [[[SH, SHY, 0.72], [SH + 0.12, SHY - 1.15 * A, 0.82], [SH + 0.22, groundY + 0.1, 0.77], [SH + 0.4, groundY + 0.05, 0.77]]],
        hind: [[[HIPX, HIPY, 0.55], [HIPX + 0.35, HIPY - legDrop * 0.45, 0.8], [HIPX + 0.05, groundY + 0.1, 0.75], [HIPX + 0.5, groundY + 0.05, 0.75]]], br: [0.09, 0.08, 0.06, 0.04],
      });
    },
    organs(addO, organMat) {
      addO('otak', brainGeo([0.32 * hs, 0.28 * hs, 0.3 * hs], [[0.12, 0.1, 0.12], [-0.25, -0.1, 0]]), organMat([0.88, 0.68, 0.68], 0.5, 0.3), [1.68, 1.68, 0]);
      const HC = [0.85, 0.75, 0.05];
      const heart = addO('jantung', rel(merge([ell([0.22, 0.26, 0.2], HC, 20), limb([0.9, 0.95, 0], [1.0, 1.15, 0], 0.07, 0.06)]), HC), organMat([0.6, 0.06, 0.1], 0.3, 0.8), HC);
      const lungs = [1, -1].map((s) => { const c = [0.75, 0.9, s * 0.38]; return addO('paru', rel(ell([0.45, 0.38, 0.26], c, 20, [0, 0, 0.45]), c), organMat([0.9, 0.45, 0.5], 0.55, 0.2), c); });
      addO('paru', tube([[1.5, 1.35, 0], [1.2, 1.15, 0], [0.95, 1.0, 0]], 0.06, 12, 6), organMat([0.88, 0.85, 0.8], 0.4, 0.4));
      addO('hati', merge([ell([0.35, 0.18, 0.4], [0.45, 0.42, 0.1], 16, [0, 0, 0.45])]), organMat([0.4, 0.1, 0.08], 0.35, 0.7));
      addO('lambung', ell([0.28, 0.2, 0.22], [0.25, 0.35, -0.3], 14), organMat([0.9, 0.6, 0.55], 0.4, 0.5));
      addO('usus', tube(GUT, 0.07, 80, 6), organMat([0.94, 0.7, 0.64], 0.45, 0.6));
      for (const s of [1, -1]) addO('ginjal', ell([0.12, 0.17, 0.1], [-0.35, 0.4, s * 0.25], 12), organMat([0.5, 0.14, 0.1], 0.35, 0.7));
      /* tangan dan kaki pencengkeram: ibu jari berhadapan */
      addO('tangan', merge([[SH + 0.27, groundY + 0.1, 0.77], [SH + 0.27, groundY + 0.1, -0.77], [HIPX + 0.25, groundY + 0.05, 0.75], [HIPX + 0.25, groundY + 0.05, -0.75]].map((p) => ell([0.2, 0.08, 0.16], p, 10))), organMat([0.55, 0.4, 0.32], 0.5, 0.3));
      return { heart, lungs };
    },
    food: { main: [[2.2, 1.35, 0], [1.5, 1.2, 0], [1.0, 0.9, -0.1], [0.25, 0.35, -0.3], ...GUT], n: 30 },
  };
}

export const SP_ORANGUTAN = makePrimate({ id: 'orangutan', arm: 1.05, leg: 1, head: 1.05, worldScale: 0.32, cheekPads: true, hair: '#9a4418', faceCol: [0.28, 0.22, 0.2],
  vitals: (a) => ({ bpm: Math.round(lerp(60, 120, a)), rr: Math.round(lerp(14, 34, a)) }),
  capText: (s) => 'Perkiraan untuk orangutan: jantung ' + Math.round(lerp(60, 120, s)) + ' detak per menit. ' + (s > 0.6 ? 'Saat bergelantungan dan memanjat, otot lengan dan bahu bekerja paling keras.' : 'Orangutan banyak beristirahat dan bergerak pelan untuk menghemat tenaga.') + ' Angka ini kisaran umum.' });
export const SP_TARSIUS = makePrimate({ id: 'tarsius', arm: 0.7, leg: 1.3, head: 1.55, eyeR: 0.24, bigEars: true, worldScale: 0.045, hitR: 0.35, tail: [0.45, 0.38, 0.3], hair: '#8a7258', hairDark: 'rgba(60,45,30,0.4)', hairLight: 'rgba(200,180,150,0.3)', sheen: [0.9, 0.85, 0.75], faceCol: [0.55, 0.45, 0.36], iris: [0.7, 0.45, 0.15], limbR: 0.7, radius: 4,
  walk: { speed: 1.2, step: 6, swing: 0.4, hop: 0.25 },
  vitals: (a) => ({ bpm: Math.round(lerp(200, 400, a)), rr: Math.round(lerp(40, 90, a)) }),
  capText: (s) => 'Perkiraan kasar untuk tarsius: jantung ' + Math.round(lerp(200, 400, s)) + ' detak per menit. ' + (s > 0.6 ? 'Saat melompat menangkap serangga, kaki belakangnya yang panjang bekerja seperti pegas.' : 'Siang hari tarsius tidur di lubang pohon atau rumpun bambu.') });
