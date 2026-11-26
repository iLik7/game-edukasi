import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import barkColorUrl from '../node_modules/@dgreenheck/ez-tree/src/lib/assets/bark/oak_color_1k.jpg';
import barkNormalUrl from '../node_modules/@dgreenheck/ez-tree/src/lib/assets/bark/oak_normal_1k.jpg';
import barkRoughUrl from '../node_modules/@dgreenheck/ez-tree/src/lib/assets/bark/oak_roughness_1k.jpg';
import barkAoUrl from '../node_modules/@dgreenheck/ez-tree/src/lib/assets/bark/oak_ao_1k.jpg';
import dirtUrl from '../node_modules/@dgreenheck/ez-tree/src/app/public/dirt_color.jpg';
import dirtNUrl from '../node_modules/@dgreenheck/ez-tree/src/app/public/dirt_normal.jpg';

export const TL = 6, TR = 2.5;
export const A0 = 320 * Math.PI / 180, A1 = A0 + 260 * Math.PI / 180;
const SPAN = 5.2; /* lebar penampang yang dicakup tekstur ujung (satuan dunia) */

/* ---------- noise cepat (lattice 256x256, dapat diulang) ---------- */
const LAT = new Float32Array(256 * 256);
{ const r = rng(1234); for (let i = 0; i < LAT.length; i++) LAT[i] = r(); }
function vn(x, y, px = 256, py = 256) {
  const xi = Math.floor(x), yi = Math.floor(y), fx = x - xi, fy = y - yi;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
  const x0 = ((xi % px) + px) % px, x1 = (x0 + 1) % px, y0 = ((yi % py) + py) % py, y1 = (y0 + 1) % py;
  const a = LAT[(y0 & 255) * 256 + (x0 & 255)], b = LAT[(y0 & 255) * 256 + (x1 & 255)], c = LAT[(y1 & 255) * 256 + (x0 & 255)], d = LAT[(y1 & 255) * 256 + (x1 & 255)];
  return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}
function fbm(x, y, oct = 3, px = 256, py = 256) {
  let s = 0, a = 0.5, f = 1;
  for (let o = 0; o < oct; o++) { s += a * vn(x * f, y * f, px * f, py * f); f *= 2; a *= 0.5; }
  return s;
}
const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

/* ---------- tekstur penampang (ujung batang): cincin tahun, jari-jari empulur, lapisan ---------- */
function endGrainTexture(N, LAYERS) {
  const c = document.createElement('canvas'); c.width = c.height = N;
  const ctx = c.getContext('2d'), img = ctx.createImageData(N, N), d = img.data;
  const R = Object.fromEntries(LAYERS.map((L) => [L.id, L]));
  const bk1 = [0.22, 0.135, 0.085], bk2 = [0.10, 0.065, 0.045];
  const flo = [0.83, 0.75, 0.50], cam = [0.56, 0.76, 0.33];
  const xyE = [0.93, 0.79, 0.52], xyL = [0.70, 0.50, 0.30];
  const heE = [0.64, 0.38, 0.20], heL = [0.36, 0.19, 0.095];
  const pith = [0.94, 0.89, 0.76];
  const b1 = R.floem.ro, b2 = R.kambium.ro, b3 = R.xilem.ro, b4 = R.teras.ro, b5 = R.empulur.ro;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const x = (i / N - 0.5) * SPAN, y = (0.5 - j / N) * SPAN;
    const r = Math.hypot(x, y), th = Math.atan2(y, x);
    let col;
    const wob = (fbm(x * 1.4 + 3, y * 1.4 + 7, 3) - 0.35) * 0.09 + Math.sin(th * 3 + 1.2) * 0.012;
    const rw = r + wob;
    if (r >= b1) { /* kulit luar: retak, serat radial */
      const n = fbm(th * 9, r * 7, 3), crack = smooth(0.52, 0.72, fbm(th * 16 + 5, r * 3.2, 3));
      col = mix3(bk1, bk2, n * 0.9 + crack * 0.7); const f = 0.82 + 0.3 * vn(th * 70, r * 9); col = col.map((v) => v * f);
    } else if (r >= b2) { /* floem: serat halus radial */
      const s = vn(th * 90, r * 14), s2 = vn(th * 28, r * 5);
      col = flo.map((v) => v * (0.86 + 0.2 * s) * (0.95 + 0.1 * s2));
    } else if (r >= b3) { /* kambium: hijau pucat, licin */
      col = cam.map((v) => v * (0.94 + 0.1 * vn(th * 50, r * 40)));
    } else if (r >= b5) { /* xilem + kayu teras: cincin tahun */
      const heart = r < b4;
      const q = (rw - b5) * 17.5, f = q - Math.floor(q), ring = Math.floor(q);
      const lw = smooth(0.5, 0.93, f) * (1 - smooth(0.965, 1.0, f));
      const tone = 0.93 + 0.1 * (((ring * 7919) % 13) / 13 - 0.5) * 2;
      const rays = Math.pow(vn(th * 60, r * 1.6), 3) * 0.1;
      const grain = (vn(x * 45, y * 45) - 0.5) * 0.05;
      const E = heart ? heE : xyE, L = heart ? heL : xyL;
      col = mix3(E, L, lw * 0.85).map((v) => (v * tone + rays + grain));
      if (heart) { /* retak radial halus dekat pusat */
        const ck = smooth(0.78, 0.9, vn(th * 5 + 9, r * 0.4)) * smooth(1.0, 0.4, r);
        col = col.map((v) => v * (1 - ck * 0.35));
      }
    } else { /* empulur */
      const t = r / b5; col = pith.map((v) => v * (0.9 + 0.14 * vn(x * 80, y * 80)) * (1 - 0.35 * (1 - t) * (1 - t)));
    }
    /* garis batas antarlapisan */
    const edge = Math.min(Math.abs(r - b1), Math.abs(r - b2), Math.abs(r - b3), Math.abs(r - b4));
    const line = 1 - 0.38 * (1 - smooth(0.0, 0.012, edge));
    const k = (j * N + i) * 4;
    d[k] = clamp(col[0] * line, 0, 1) * 255; d[k + 1] = clamp(col[1] * line, 0, 1) * 255; d[k + 2] = clamp(col[2] * line, 0, 1) * 255; d[k + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.repeat.set(1 / SPAN, 1 / SPAN); t.offset.set(0.5, 0.5); /* uv diberikan dalam satuan dunia */
  return t;
}

/* ---------- tekstur serat memanjang (sisi potongan) ---------- */
function grainTexture(base, dark, opts = {}) {
  const W = 256, H = 512, c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d'), img = ctx.createImageData(W, H), d = img.data;
  const fu = opts.fu || 48, fv = opts.fv || 4;
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    const u = i / W, v = j / H;
    const fib = fbm(u * fu + 0, v * fv, 2, fu, fv);
    const band = 0.5 + 0.5 * Math.sin((u * 6 + fbm(u * 3, v * 1.5, 2, 3, 2) * 5) * TAU);
    const g = clamp(0.35 + 0.65 * fib, 0, 1);
    let col = mix3(base, dark, clamp((1 - g) * 0.8 + band * (opts.band ?? 0.25), 0, 1));
    const sp = vn(u * 220, v * 6, 220, 6) > 0.93 ? 0.88 : 1; /* pori kecil */
    const k = (j * W + i) * 4;
    d[k] = clamp(col[0] * sp, 0, 1) * 255; d[k + 1] = clamp(col[1] * sp, 0, 1) * 255; d[k + 2] = clamp(col[2] * sp, 0, 1) * 255; d[k + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  t.repeat.set(1 / 1.3, 1 / 3);
  return t;
}

function loadTex(url, srgb, rx, ry) {
  const t = new THREE.TextureLoader().load(url);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.repeat.set(rx, ry); return t;
}

/* geometri sektor cincin; UV dihitung ulang dalam satuan dunia */
function ringGeo(ro, ri) {
  const s = new THREE.Shape();
  if (ri <= 0.001) { s.moveTo(0, 0); s.lineTo(ro * Math.cos(A0), ro * Math.sin(A0)); s.absarc(0, 0, ro, A0, A1, false); s.lineTo(0, 0); }
  else { s.absarc(0, 0, ro, A0, A1, false); s.absarc(0, 0, ri, A1, A0, true); s.closePath(); }
  const g = new THREE.ExtrudeGeometry(s, { depth: TL, bevelEnabled: false, curveSegments: 96 });
  g.rotateX(-Math.PI / 2); g.translate(0, -TL / 2, 0);
  const pos = g.attributes.position, uv = g.attributes.uv, eps = 1e-3;
  /* grup 0 = tutup atas/bawah, grup 1 = dinding samping */
  for (const grp of g.groups) {
    for (let i = grp.start; i < grp.start + grp.count; i += 3) {
      const rho = [0, 1, 2].map((k) => Math.hypot(pos.getX(i + k), pos.getZ(i + k)));
      let mode = 'cap';
      if (grp.materialIndex === 1) mode = rho.every((v) => Math.abs(v - ro) < eps) ? 'outer' : (ri > 0 && rho.every((v) => Math.abs(v - ri) < eps)) ? 'inner' : 'cut';
      for (let k = 0; k < 3; k++) {
        const x = pos.getX(i + k), y = pos.getY(i + k), z = pos.getZ(i + k);
        let u, v;
        if (mode === 'cap') { u = x; v = -z; }
        else if (mode === 'outer' || mode === 'inner') {
          let a = Math.atan2(-z, x) - A0; a = ((a % TAU) + TAU) % TAU; if (a > 5.5) a -= TAU;
          u = a * (mode === 'outer' ? ro : ri); v = y;
        }
        else { u = Math.hypot(x, z); v = y; }
        uv.setXY(i + k, u, v);
      }
    }
  }
  uv.needsUpdate = true;
  return g;
}

function dotTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.55, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.beginPath(); x.arc(32, 32, 30, 0, TAU); x.fill(); return new THREE.CanvasTexture(c);
}

export function buildDissect(renderer, LAYERS) {
  const scene = new THREE.Scene();
  /* latar: gradien radial gelap kehijauan */
  { const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d');
    const g = x.createRadialGradient(256, 230, 20, 256, 256, 420); g.addColorStop(0, '#1f4a42'); g.addColorStop(0.55, '#0f2a26'); g.addColorStop(1, '#040c0a');
    x.fillStyle = g; x.fillRect(0, 0, 512, 512); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t; }
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.45;

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  const key = new THREE.DirectionalLight(0xfff1dc, 2.4); key.position.set(4, 9, 8);
  key.castShadow = true; key.shadow.mapSize.set(2048, 2048);
  const sc = key.shadow.camera; sc.left = -6; sc.right = 6; sc.top = 6; sc.bottom = -6; sc.near = 1; sc.far = 30; key.shadow.bias = -0.0005; key.shadow.normalBias = 0.03;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x8fd0ff, 1.3); rim.position.set(-6, 3, -5); scene.add(rim);

  const cap = endGrainTexture(1280, LAYERS);
  const barkMap = loadTex(barkColorUrl, true, 1 / 2.4, 1 / 2.4), barkN = loadTex(barkNormalUrl, false, 1 / 2.4, 1 / 2.4);
  const barkR = loadTex(barkRoughUrl, false, 1 / 2.4, 1 / 2.4), barkAo = loadTex(barkAoUrl, false, 1 / 2.4, 1 / 2.4);
  const sideDef = {
    floem: [[0.84, 0.76, 0.52], [0.62, 0.52, 0.30], { fu: 64, band: 0.12 }],
    kambium: [[0.56, 0.76, 0.34], [0.42, 0.62, 0.24], { fu: 64, band: 0.05 }],
    xilem: [[0.92, 0.78, 0.52], [0.68, 0.50, 0.30], { fu: 40, band: 0.3 }],
    teras: [[0.66, 0.40, 0.22], [0.36, 0.20, 0.10], { fu: 40, band: 0.35 }],
    empulur: [[0.94, 0.89, 0.77], [0.80, 0.72, 0.58], { fu: 90, band: 0.05 }],
  };

  const layerMeshes = [], layerMat = {};
  LAYERS.forEach((L) => {
    const base = new THREE.Color(L.col);
    const capMat = new THREE.MeshStandardMaterial({ map: cap, bumpMap: cap, bumpScale: 0.6, roughness: L.id === 'kambium' ? 0.5 : 0.78, metalness: 0 });
    let sideMat;
    if (L.id === 'kulit') sideMat = new THREE.MeshStandardMaterial({ map: barkMap, normalMap: barkN, roughnessMap: barkR, aoMap: barkAo, color: new THREE.Color(0xc9b8a8), roughness: 1, metalness: 0 });
    else { const [a, b, o] = sideDef[L.id]; sideMat = new THREE.MeshStandardMaterial({ map: grainTexture(a, b, o), roughness: L.id === 'kambium' ? 0.5 : 0.78, metalness: 0 }); }
    const m = new THREE.Mesh(ringGeo(L.ro, L.ri), [capMat, sideMat]);
    m.castShadow = true; m.receiveShadow = true; m.userData.layer = L.id; scene.add(m);
    if (m.geometry.attributes.uv && L.id === 'kulit') m.geometry.setAttribute('uv1', m.geometry.attributes.uv); /* aoMap */
    layerMeshes.push(m);
    layerMat[L.id] = { mats: [capMat, sideMat], base: new THREE.Color(1, 1, 1), emi: base, k: 0 };
  });

  /* alas tanah */
  const dirt = loadTex(dirtUrl, true, 2.2, 2.2), dirtN = loadTex(dirtNUrl, false, 2.2, 2.2);
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(3.7, 3.9, 0.34, 72), new THREE.MeshStandardMaterial({ map: dirt, normalMap: dirtN, color: new THREE.Color(0.8, 0.72, 0.62), roughness: 1 }));
  ped.position.y = -TL / 2 - 0.17; ped.receiveShadow = true; ped.userData.noAO = true; scene.add(ped);

  /* aliran air dan gula */
  const dot = dotTex();
  function makeFlow(n, band, dir, color, size, seed) {
    const r = rng(seed), data = [];
    for (let i = 0; i < n; i++) data.push({ f: i % 2, r: band[0] + r() * (band[1] - band[0]), y: (r() - 0.5) * TL, v: 0.7 + r() * 0.7, p: r() * TAU });
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dot, color, size, sizeAttenuation: true, transparent: true, depthWrite: false }));
    pts.frustumCulled = false; pts.userData.noAO = true; scene.add(pts); return { pts, data, dir };
  }
  const OFF = 0.03;
  const waterFlow = makeFlow(110, [1.32, 1.82], 1, new THREE.Color(0.5, 1.5, 2.6), 0.22, 31);
  const sugarFlow = makeFlow(80, [2.04, 2.24], -1, new THREE.Color(2.6, 1.55, 0.35), 0.22, 32);
  function stepFlow(F, speed, dt, T) {
    const pos = F.pts.geometry.attributes.position;
    for (let i = 0; i < F.data.length; i++) {
      const d = F.data[i]; d.y += F.dir * d.v * speed * dt;
      if (d.y > TL / 2) d.y -= TL; else if (d.y < -TL / 2) d.y += TL;
      const th = (d.f === 0 ? A0 - OFF : A1 + OFF) + Math.sin(T * 1.6 + d.p) * 0.006;
      pos.setXYZ(i, d.r * Math.cos(th), d.y, -d.r * Math.sin(th));
    }
    pos.needsUpdate = true;
  }

  const state = { yaw: 0, pitch: 0.4, dist: 14, user: false, sun: 0.65 };
  const dimC = new THREE.Color(0.2, 0.26, 0.24);
  return {
    scene, camera, layerMeshes, layerMat, waterFlow, sugarFlow, state,
    update(dt, T, selected, hovered) {
      if (!state.user) state.yaw = 0.3 * Math.sin(T * 0.45);
      const cp = Math.cos(state.pitch), sp = Math.sin(state.pitch);
      camera.position.set(Math.sin(state.yaw) * cp * state.dist, sp * state.dist, Math.cos(state.yaw) * cp * state.dist);
      camera.lookAt(0, 0, 0);
      const s = state.sun;
      key.intensity = 1.0 + 1.9 * s; scene.environmentIntensity = 0.3 + 0.25 * s;
      stepFlow(waterFlow, 0.25 + 1.7 * s, dt, T); stepFlow(sugarFlow, 0.12 + 0.75 * s, dt, T);
      LAYERS.forEach((L) => {
        const e = layerMat[L.id], tk = (selected && selected !== L.id) ? 0.7 : 0;
        e.k += (tk - e.k) * Math.min(1, dt * 10);
        const glow = selected === L.id ? 0.12 : (hovered === L.id ? 0.07 : 0);
        for (const m of e.mats) { m.color.copy(e.base).lerp(dimC, e.k); m.emissive.copy(e.emi).multiplyScalar(glow); }
      });
    },
  };
}
