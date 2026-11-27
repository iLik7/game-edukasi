import * as THREE from 'three';
import { merge, C, ell, limb } from '../animal.js';
import BURUNG, { makeBird } from './burung.js';
/* bentuk elang: badan kekar, sayap lebar dengan bulu primer terbuka seperti jari, ekor lebar bergaris, kaki kuning bercakar, paha berbulu */
const EB = makeBird({ id: 'elang', len: 1.15, girth: 1.12, head: 1.05, headShape: [1.12, 0.86, 1], neck: [0.05, 0.06], tailL: 0.85, tailW: 1.6, tailFan: 0.35, tailDroop: 0.3,
  wingL: 1.3, wingW: 1.4, fingers: 6, legL: 0.95, legR: 1.55, thigh: [0.45, 0.3, 0.18], talon: true, legCol: [0.92, 0.74, 0.18], beak: 'none', cheek: null,
  eye: { r: 0.09, iris: [0.95, 0.62, 0.1] }, back: { base: '#5a3a20', dark: 'rgba(30,18,8,0.5)', light: 'rgba(150,100,60,0.3)' },
  wing: { lead: '#7a5432', mid: '#5a3a20', trail: '#2e1c10', covert: 'rgba(180,130,80,0.35)', bars: 6, barCol: 'rgba(25,15,6,0.6)' } });
const HX = EB.birdK.HEAD_P[0] - 0.75, HY = EB.birdK.HEAD_P[1] - 0.45;
import { lerp } from '../util.js';

/* Spec ELANG JAWA (Nisaetus bartelsi), turunan kerangka burung: punggung cokelat tua, kepala cokelat kemerahan,
   dada pucat bergaris, jambul tegak, paruh berkait dengan sera kuning, tembolok di pangkal leher. */
let bt = null;
const breastTex = () => bt || (bt = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); x.fillStyle = '#eee0c0'; x.fillRect(0, 0, 128, 128); x.fillStyle = '#6a4424';
  for (let i = 0; i < 9; i++) x.fillRect(0, 6 + i * 14, 128, 4); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })());

export default {
  ...EB, id: 'elang', worldScale: 0.22, dist: [10, 19], hitR: 0.45,
  walk: { ...EB.walk, speed: 5, fly: 9, radius: 30, keep: 2, flapF: 4, graze: 0.25 },
  vitals: (a) => ({ bpm: Math.round(lerp(150, 330, a)), rr: Math.round(lerp(15, 50, a)) }),
  capText: (s) => 'Perkiraan kasar untuk elang: jantung ' + Math.round(lerp(150, 330, s)) + ' detak per menit. ' + (s > 0.6 ? 'Saat mengepak dan menukik, otot dada bekerja keras.' : 'Elang lebih banyak melayang memanfaatkan udara hangat yang naik (termal), sehingga hemat tenaga.') + ' Titik biru: udara mengalir satu arah.',
  skinMats() {
    const base = EB.skinMats();
    const body = new THREE.MeshPhysicalMaterial({ color: C(0.3, 0.19, 0.1), roughness: 0.7, sheen: 0.4, sheenColor: new THREE.Color(0.4, 0.3, 0.2) });
    const head = new THREE.MeshStandardMaterial({ color: C(0.55, 0.3, 0.14), roughness: 0.75 });
    const belly = new THREE.MeshStandardMaterial({ map: breastTex(), roughness: 0.85 });
    const tail = new THREE.MeshStandardMaterial({ color: C(0.35, 0.24, 0.14), roughness: 0.75 });
    const wings = base.wings;
    return { body, head, tail, legs: body, belly, vent: belly, wings };
  },
  face(A, HP) {
    const mats = EB.face(A, HP);
    const o = (x, y, z) => [x + HX - HP[0], y + HY - HP[1], z - HP[2]];
    const beakM = new THREE.MeshStandardMaterial({ color: C(0.12, 0.12, 0.13), roughness: 0.3, transparent: true });
    const cereM = new THREE.MeshStandardMaterial({ color: C(0.9, 0.75, 0.2), roughness: 0.5, transparent: true });
    const crestM = new THREE.MeshStandardMaterial({ color: C(0.1, 0.07, 0.05), roughness: 0.8, transparent: true });
    /* paruh berkait menutupi paruh kutilang */
    A.head.add(new THREE.Mesh(merge([limb(o(1.3, 0.72, 0), o(1.58, 0.7, 0), 0.12, 0.08, 12), limb(o(1.58, 0.7, 0), o(1.68, 0.56, 0), 0.08, 0.02, 10)]), beakM));
    A.head.add(new THREE.Mesh(ell([0.08, 0.07, 0.11], o(1.3, 0.74, 0), 10), cereM));
    /* jambul: beberapa helai bulu tegak ke belakang-atas */
    A.head.add(new THREE.Mesh(merge([-0.06, 0, 0.06].map((z, i) => limb(o(0.95, 1.05, z), o(0.7 - i * 0.05, 1.55 - i * 0.05, z * 1.5), 0.05, 0.015, 8))), crestM));
    return mats.concat([beakM, cereM, crestM]);
  },
  organs(addO, organMat) {
    const R = EB.organs(addO, organMat);
    addO('tembolok', ell([0.14, 0.12, 0.13], [0.82 + HX * 0.5, 0.22 + HY * 0.5, 0.04], 14), organMat([0.92, 0.7, 0.5], 0.45, 0.4));
    addO('paruhcakar', merge([limb([1.35 + HX, 0.72 + HY, 0], [1.6 + HX, 0.7 + HY, 0], 0.11, 0.07, 10), limb([1.6 + HX, 0.7 + HY, 0], [1.7 + HX, 0.55 + HY, 0], 0.07, 0.02, 8)]), organMat([0.2, 0.2, 0.22], 0.3, 0.3));
    return R;
  },
};
