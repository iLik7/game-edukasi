import * as THREE from 'three';
import { TAU, clamp, lerp, smooth, rng } from './util.js';
import grassUrl from '../node_modules/@dgreenheck/ez-tree/src/app/public/grass.jpg';
import dirtUrl from '../node_modules/@dgreenheck/ez-tree/src/app/public/dirt_color.jpg';
import dirtNUrl from '../node_modules/@dgreenheck/ez-tree/src/app/public/dirt_normal.jpg';

export const WATER = -1.4, SIZE = 240, SEG = 220;
export const LAKE = { x: -34, z: 26, r: 15 };
export const START = { x: 0, z: 2 };

function baseH(x, z) { return Math.sin(x * 0.045 + 1.3) * Math.cos(z * 0.038) * 2.0 + Math.sin(x * 0.1 + z * 0.08) * 0.5 + Math.cos(x * 0.02 - z * 0.03) * 1.5; }
function h0(x, z) {
  let h = baseH(x, z);
  h *= smooth(9, 26, Math.hypot(x, z));
  const dl = Math.hypot(x - LAKE.x, z - LAKE.z);
  if (dl < LAKE.r + 9) h = lerp(h, -3.3, 1 - smooth(LAKE.r * 0.3, LAKE.r + 9, dl));
  return h;
}
/* SUNGAI: polyline dari perbukitan barat laut ke danau. Muka air dibuat tidak pernah naik ke hilir. */
const RIV_CP = [[-64, 76], [-58, 66], [-52, 57], [-46, 49], [-41, 42], [-36.5, 36.5]];
export const RIVER = (() => {
  /* tiap titik kendali: di bawah titik terendah medan pada ruas sebelum dan sesudahnya, dan tidak pernah naik ke hilir */
  const segMin = (i) => { if (i < 0 || i >= RIV_CP.length - 1) return 1e9; const [ax, az] = RIV_CP[i], [bx, bz] = RIV_CP[i + 1]; let m = 1e9; for (let k = 0; k <= 24; k++) { const t = k / 24; m = Math.min(m, h0(lerp(ax, bx, t), lerp(az, bz, t))); } return m; };
  let prev = 1e9;
  return RIV_CP.map(([x, z], i) => { let y = Math.min(prev, segMin(i - 1) - 0.3, segMin(i) - 0.3); if (i === RIV_CP.length - 1) y = Math.min(y, WATER); prev = y; return { x, z, y }; });
})();
export const RIVER_W = 2.2;
export function riverInfo(x, z) {
  let bd = 1e9, by = 0, bt = 0, seg = 0;
  for (let i = 0; i < RIVER.length - 1; i++) {
    const a = RIVER[i], b = RIVER[i + 1], abx = b.x - a.x, abz = b.z - a.z, L2 = abx * abx + abz * abz;
    const t = clamp(((x - a.x) * abx + (z - a.z) * abz) / L2, 0, 1), dx = x - a.x - abx * t, dz = z - a.z - abz * t, d = Math.hypot(dx, dz);
    if (d < bd) { bd = d; by = lerp(a.y, b.y, t); bt = t; seg = i; }
  }
  return { d: bd, y: by, seg, t: bt };
}
export function heightAt(x, z) {
  let h = h0(x, z);
  const r = riverInfo(x, z);
  if (r.d < 3.4) { const bed = r.y - 0.6 * Math.max(0, 1 - (r.d / 2.0) ** 2); h = lerp(Math.min(h, bed), h, smooth(1.9, 3.4, r.d)); }
  return h;
}
/* ketinggian muka air di titik ini: sungai atau danau */
export function waterAt(x, z) { const r = riverInfo(x, z); return r.d < RIVER_W ? Math.max(WATER, r.y) : WATER; }
export function hash(x, z) { const s = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453; return s - Math.floor(s); }

/* jalan setapak dari titik awal ke tiap pohon bertanda (rumus sama di GLSL) */
export const paths = [];
export function setPaths(heroes) {
  paths.length = 0;
  heroes.forEach((H, i) => {
    const dx = H.x - START.x, dz = H.z - START.z, L = Math.hypot(dx, dz);
    paths.push({ ax: START.x, az: START.z, bx: H.x, bz: H.z, L, dx: dx / L, dz: dz / L, seed: i * 1.7 + 0.3 });
  });
}
export function pathDist(x, z) {
  let best = 1e9;
  for (const p of paths) {
    const px = x - p.ax, pz = z - p.az;
    const t = clamp((px * p.dx + pz * p.dz) / p.L, 0, 1);
    const w = Math.sin(t * p.L * 0.17 + p.seed) * 1.3 * Math.sin(Math.PI * t);
    const qx = p.ax + p.dx * t * p.L - p.dz * w, qz = p.az + p.dz * t * p.L + p.dx * w;
    best = Math.min(best, Math.hypot(x - qx, z - qz));
  }
  return best;
}
export const PATH_W = 1.25;
export const terrainU = { uTime: { value: 0 } };

export const GLSL_TERRAIN = /* glsl */`
float tS(float a,float b,float x){ float t=clamp((x-a)/(b-a),0.,1.); return t*t*(3.-2.*t); }
float tBase(vec2 p){ return sin(p.x*0.045+1.3)*cos(p.y*0.038)*2.0 + sin(p.x*0.1+p.y*0.08)*0.5 + cos(p.x*0.02-p.y*0.03)*1.5; }
const vec3 RIV[${RIVER.length}] = vec3[${RIVER.length}](${RIVER.map((p) => `vec3(${p.x.toFixed(2)},${p.z.toFixed(2)},${p.y.toFixed(3)})`).join(',')});
vec2 rivInfo(vec2 p){ float bd=1e9, by=0.; for(int i=0;i<${RIVER.length - 1};i++){ vec2 a=RIV[i].xy, ab=RIV[i+1].xy-a; float t=clamp(dot(p-a,ab)/dot(ab,ab),0.,1.); float d=length(p-a-ab*t); if(d<bd){ bd=d; by=mix(RIV[i].z,RIV[i+1].z,t);} } return vec2(bd,by); }
float tHeight(vec2 p){ float h=tBase(p)*tS(9.,26.,length(p)); float dl=length(p-vec2(${LAKE.x}.,${LAKE.z}.)); if(dl<${LAKE.r + 9}.) h=mix(h,-3.3,1.-tS(${LAKE.r * 0.3},${LAKE.r + 9}.,dl));
  vec2 rv=rivInfo(p); if(rv.x<3.4){ float bed=rv.y-0.6*max(0.,1.-pow(rv.x/2.0,2.)); h=mix(min(h,bed),h,tS(1.9,3.4,rv.x)); } return h; }
uniform vec4 uPath[8]; uniform vec3 uPathP[8]; uniform int uPathN;
float tPath(vec2 p){
  float best=1e9;
  for(int i=0;i<8;i++){ if(i>=uPathN) break;
    vec2 a=uPath[i].xy, d=uPath[i].zw; float L=uPathP[i].x, sd=uPathP[i].y;
    vec2 q=p-a; float t=clamp(dot(q,d)/L,0.,1.);
    float w=sin(t*L*0.17+sd)*1.3*sin(3.14159265*t);
    vec2 c=a+d*t*L+vec2(-d.y,d.x)*w; best=min(best,length(p-c)); }
  return best;
}
`;

export function pathUniforms() {
  const A = [], B = [];
  for (let i = 0; i < 8; i++) {
    const p = paths[i];
    A.push(p ? new THREE.Vector4(p.ax, p.az, p.dx, p.dz) : new THREE.Vector4());
    B.push(p ? new THREE.Vector3(p.L, p.seed, 0) : new THREE.Vector3(1, 0, 0));
  }
  return { uPath: { value: A }, uPathP: { value: B }, uPathN: { value: paths.length } };
}

function loadTex(url, srgb, repeat) {
  const t = new THREE.TextureLoader().load(url);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.repeat.set(repeat, repeat);
  return t;
}

export function buildTerrain(scene) {
  const g = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG); g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position, n = pos.count;
  const col = new Float32Array(n * 3), mix = new Float32Array(n * 2);
  const c = new THREE.Color();
  const hs = new Float32Array(n);
  for (let i = 0; i < n; i++) { const h = heightAt(pos.getX(i), pos.getZ(i)); hs[i] = h; pos.setY(i, h); }
  for (let i = 0; i < n; i++) {
    const x = pos.getX(i), z = pos.getZ(i), h = hs[i];
    const e = 0.8;
    const sx = heightAt(x + e, z) - heightAt(x - e, z), sz = heightAt(x, z + e) - heightAt(x, z - e);
    const slope = Math.hypot(sx, sz) / (2 * e);
    const macro = Math.sin(x * 0.07 + 1.3) * Math.sin(z * 0.06) * 0.5 + 0.5;
    const patch = Math.sin(x * 0.31) * Math.sin(z * 0.27 + 2.0) * 0.5 + 0.5;
    let dirt = smooth(0.28, 0.6, slope) + smooth(0.78, 0.95, patch) * 0.45;
    dirt = Math.max(dirt, 1 - smooth(PATH_W * 0.45, PATH_W * 1.05, pathDist(x, z)));
    const sand = 1 - smooth(WATER + 0.1, WATER + 0.75, h);
    mix[i * 2] = clamp(dirt, 0, 1) * (1 - sand); mix[i * 2 + 1] = sand;
    // variasi warna makro rumput (kuning-hijau <-> hijau tua)
    c.setRGB(0.80 + macro * 0.28, 0.9 + macro * 0.22 - patch * 0.05, 0.62 + macro * 0.14);
    c.multiplyScalar((0.92 + hash(x, z) * 0.16) * 1.9);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setAttribute('aMix', new THREE.BufferAttribute(mix, 2));
  g.computeVertexNormals();

  const grass = loadTex(grassUrl, true, SIZE / 4.5);
  const dirt = loadTex(dirtUrl, true, 1);
  const dirtN = loadTex(dirtNUrl, false, SIZE / 4.5);
  const mat = new THREE.MeshStandardMaterial({ map: grass, normalMap: dirtN, normalScale: new THREE.Vector2(0.55, 0.55), vertexColors: true, roughness: 0.96, metalness: 0 });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uDirt = { value: dirt }; sh.uniforms.uTime = terrainU.uTime;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec2 aMix; varying vec2 vMix; varying vec3 vWPt;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvMix = aMix; vWPt = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
        uniform sampler2D uDirt; uniform float uTime; varying vec2 vMix; varying vec3 vWPt;
        float caust(vec2 p, float t){
          vec2 q = p * 0.85; float c = 0.0;
          for (int i = 0; i < 3; i++) {
            q += vec2(sin(q.y * 1.7 + t * 0.9), cos(q.x * 1.3 - t * 0.7)) * 0.55;
            c += abs(sin(q.x + q.y * 0.6 + t * 0.4));
          }
          return pow(1.0 - c / 3.0, 5.0) * 3.0;
        }`)
      .replace('#include <map_fragment>', `#include <map_fragment>
        vec4 g2 = texture2D(map, vMapUv * 0.23 + vec2(0.31, 0.67));
        diffuseColor.rgb = mix(diffuseColor.rgb, g2.rgb * 1.05, 0.38);
        vec4 dc = texture2D(uDirt, vMapUv * 0.8);
        diffuseColor.rgb = mix(diffuseColor.rgb, dc.rgb * vec3(1.0, 0.86, 0.7) * 1.1, vMix.x);
        diffuseColor.rgb = mix(diffuseColor.rgb, dc.rgb * vec3(1.55, 1.38, 1.0), vMix.y);
        { float uw = ${WATER.toFixed(2)} - vWPt.y;            // dasar danau: lebih gelap-kehijauan + kaustik
          if (uw > 0.0) {
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.45, 0.68, 0.64), clamp(uw * 0.55, 0.0, 1.0));
            diffuseColor.rgb += caust(vWPt.xz * 1.6, uTime) * 0.12 * exp(-uw * 0.35) * vec3(0.75, 1.0, 0.92);
          } }`);
  };
  const mesh = new THREE.Mesh(g, mat);
  mesh.receiveShadow = true; scene.add(mesh);
  return mesh;
}

/* normal map riak air (prosedural, bisa diulang) */
function waterNormals() {
  const N = 256, c = document.createElement('canvas'); c.width = c.height = N;
  const x = c.getContext('2d'), img = x.createImageData(N, N);
  const h = new Float32Array(N * N);
  const waves = [[3, 2, 1.0, 0.0], [5, -4, 0.7, 1.3], [-7, 6, 0.45, 2.1], [11, 9, 0.28, 0.7], [-14, 5, 0.2, 3.3]];
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    let v = 0; for (const w of waves) v += Math.sin((i * w[0] + j * w[1]) / N * TAU + w[3]) * w[2];
    h[j * N + i] = v;
  }
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const dx = h[j * N + (i + 1) % N] - h[j * N + (i + N - 1) % N], dy = h[((j + 1) % N) * N + i] - h[((j + N - 1) % N) * N + i];
    let nx = -dx * 0.5, ny = -dy * 0.5, nz = 1; const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    const k = (j * N + i) * 4; img.data[k] = (nx * 0.5 + 0.5) * 255; img.data[k + 1] = (ny * 0.5 + 0.5) * 255; img.data[k + 2] = (nz * 0.5 + 0.5) * 255; img.data[k + 3] = 255;
  }
  x.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(SIZE / 7, SIZE / 7); t.anisotropy = 8; return t;
}
export function buildWater(scene) {
  const nm = waterNormals(); nm.repeat.set(1, 1);
  const rip = Array.from({ length: 8 }, () => new THREE.Vector4(0, 0, -99, 0)); let ri = 0;
  const uni = { uTime: { value: 0 }, uWN: { value: nm }, uRip: { value: rip } };
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, metalness: 0.0, transparent: true, depthWrite: false, envMapIntensity: 1.5, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uni);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(position,1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vWP; uniform float uTime; uniform sampler2D uWN; uniform vec4 uRip[8];
        vec3 ripple(vec2 p){ vec3 o = vec3(0.0);
          for (int i = 0; i < 8; i++) { float age = uTime - uRip[i].z; if (age < 0.0 || age > 3.0) continue;
            vec2 dv = p - uRip[i].xy; float d = length(dv) + 1e-4, R = 0.25 + age * 1.25;
            float w = exp(-pow((d - R) * 4.0, 2.0)) * (1.0 - age / 3.0) * uRip[i].w;
            o.xy += dv / d * sin((d - R) * 22.0) * w * 1.6; o.z += w; }
          return o; }
        ${GLSL_TERRAIN}
        vec3 wNorm(vec2 p){
          vec3 a = texture2D(uWN, p/7.0 + vec2(uTime*0.020, uTime*0.012)).xyz*2.-1.;
          vec3 b = texture2D(uWN, vec2(p.y,-p.x)/3.1 + vec2(-uTime*0.028, uTime*0.019)).xyz*2.-1.;
          vec3 c = texture2D(uWN, p/1.7 + vec2(uTime*0.05, -uTime*0.04)).xyz*2.-1.;
          vec3 r = ripple(p);
          return vec3(a.xy*0.55 + b.xy*0.45 + c.xy*0.22 + r.xy, r.z);
        }`)
      .replace('#include <map_fragment>', `#include <map_fragment>
        float wd = ${WATER.toFixed(2)} - tHeight(vWP.xz);   // kedalaman air di titik ini (m)
        if (wd < -0.02) discard;
        float dz = clamp(wd, 0.0, 4.0);
        vec3 shallow = vec3(0.10, 0.34, 0.30), deep = vec3(0.012, 0.075, 0.105);
        diffuseColor.rgb = mix(shallow, deep, 1.0 - exp(-dz * 0.55));
        float aW = mix(0.10, 0.84, smoothstep(0.0, 1.4, dz));
        vec3 wn0 = wNorm(vWP.xz);
        float foam = (1.0 - smoothstep(0.0, 0.42, wd + (wn0.x + wn0.y) * 0.10 + 0.04*sin(uTime*1.3 + vWP.x*2.0)));
        foam *= 0.55 + 0.45 * (texture2D(uWN, vWP.xz*0.35 + uTime*0.01).x);
        foam += clamp(wn0.z, 0.0, 1.0) * 0.12;   // buih riak
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.92, 0.96, 0.95), clamp(foam, 0.0, 1.0) * 0.85);
        diffuseColor.a = clamp(max(aW, foam * 0.95), 0.0, 1.0);
        if (!gl_FrontFacing) { diffuseColor.rgb = vec3(0.10, 0.30, 0.32); diffuseColor.a = 0.88; }`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        { vec3 wn = wNorm(vWP.xz); float calm = 1.0 - clamp(foam, 0.0, 1.0) * 0.6;
          vec3 nW = normalize(vec3(wn.x * 0.35 * calm, 1.0, wn.y * 0.35 * calm));
          normal = normalize((viewMatrix * vec4(nW * (gl_FrontFacing ? 1.0 : -1.0), 0.0)).xyz); }`);
  };
  const m = new THREE.Mesh(new THREE.PlaneGeometry(SIZE, SIZE), mat);
  m.rotation.x = -Math.PI / 2; m.position.y = WATER; m.userData.noAO = true; scene.add(m);
  return {
    mesh: m,
    update(T) { uni.uTime.value = T; terrainU.uTime.value = T; },
    ripple(x, z, s) { rip[ri].set(x, z, uni.uTime.value, s); ri = (ri + 1) % rip.length; },
  };
}

/* permukaan sungai: pita air mengikuti alur, normal map digeser searah arus */
export function buildRiver(scene) {
  const nm = waterNormals(); nm.repeat.set(1, 1);
  const pos = [], uv = [], idx = [], cols = 5; let v = 0, n = 0;
  for (let i = 0; i < RIVER.length - 1; i++) {
    const a = RIVER[i], b = RIVER[i + 1], L = Math.hypot(b.x - a.x, b.z - a.z), steps = Math.ceil(L / 0.6);
    for (let k = (i ? 1 : 0); k <= steps; k++) {
      const t = k / steps, x = lerp(a.x, b.x, t), z = lerp(a.z, b.z, t), y = lerp(a.y, b.y, t) + 0.02;
      const nx = -(b.z - a.z) / L, nz = (b.x - a.x) / L;
      for (let c = 0; c < cols; c++) { const u = c / (cols - 1), w = (u - 0.5) * 2 * (RIVER_W + 0.6); pos.push(x + nx * w, y, z + nz * w); uv.push(u, v / 3); }
      if (n > 0) for (let c = 0; c < cols - 1; c++) { const p0 = (n - 1) * cols + c, p1 = n * cols + c; idx.push(p0, p1, p0 + 1, p1, p1 + 1, p0 + 1); }
      n++; v += L / steps;
    }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  const uni = { uTime: { value: 0 } };
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.06, transparent: true, depthWrite: false, normalMap: nm, normalScale: new THREE.Vector2(0.45, 0.45), envMapIntensity: 1.4 });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uni);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(position,1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vWP; uniform float uTime;
      ${GLSL_TERRAIN}`).replace('#include <map_fragment>', `#include <map_fragment>
      float dep = vWP.y - tHeight(vWP.xz);
      if (dep < -0.005) discard;
      diffuseColor.rgb = mix(vec3(0.16, 0.36, 0.3), vec3(0.03, 0.14, 0.15), smoothstep(0.05, 0.55, dep));
      float foam = (1.0 - smoothstep(0.0, 0.05, dep)) * 0.6;
      foam += smoothstep(0.8, 1.0, sin(vWP.x * 3.1 + vWP.z * 2.3 - uTime * 4.0) * sin(vWP.z * 1.7 - uTime * 2.5)) * 0.15;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85, 0.92, 0.9), clamp(foam, 0.0, 1.0) * 0.6);
      diffuseColor.a = clamp(mix(0.2, 0.82, smoothstep(0.0, 0.4, dep)) + foam * 0.2, 0.0, 1.0);`);
  };
  const m = new THREE.Mesh(g, mat); m.userData.noAO = true; m.receiveShadow = true; scene.add(m);
  return { mesh: m, update(T) { uni.uTime.value = T; nm.offset.set(0, -T * 0.35); } };
}
