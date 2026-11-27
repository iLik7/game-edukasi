/* PETA BIOMA PULAU HUTAN ILMU.
   Dunia berupa satu pulau. Hub hutan di tengah (r < ~120 m) tidak berubah; di luarnya medan berpindah halus
   ke bioma lain menurut arah (utara = -z):
   utara: gunung bersalju, timur: peternakan, selatan & tenggara: pantai lalu gurun, barat: hutan hujan.
   Semua fungsi di sini juga ditulis ulang di GLSL (GLSL_WORLD) supaya rumput, air, dan medan selalu cocok. */
const sm = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
export const SEA = -1.4;
export const ISLAND_R = 540;
export const BIOMES = [
  { id: 'hutan', name: 'Hutan Ilmu', col: '#4f8a3c' },
  { id: 'gunung', name: 'Gunung & Salju', col: '#9aa3a8', a: -Math.PI / 2, x: 0, z: -330 },
  { id: 'peternakan', name: 'Peternakan', col: '#a8c060', a: 0, x: 300, z: 0 },
  { id: 'gurun', name: 'Pantai & Gurun', col: '#e2c27a', a: Math.PI * 0.32, x: 210, z: 250 },
  { id: 'hujan', name: 'Hutan Hujan', col: '#2f6b3a', a: Math.PI, x: -300, z: 20 },
];
/* garis pantai: pulau agak bergelombang, dengan teluk di selatan supaya pantai dekat dari hutan bakau */
export function coastR(x, z) {
  const t = Math.atan2(z, x);
  const bay = 320 * Math.exp(-Math.pow(Math.atan2(Math.sin(t - 1.72), Math.cos(t - 1.72)), 2) / 0.11);
  return ISLAND_R + 34 * Math.sin(3 * t + 0.5) + 18 * Math.sin(7 * t + 2.1) - bay;
}
/* bobot sektor bioma (0..1, total = 1 di luar hub) */
export function sectors(x, z) {
  const r = Math.hypot(x, z), t = Math.atan2(z, x) + 0.22 * Math.sin(r * 0.011) + 0.12 * Math.sin(x * 0.006 - z * 0.004);
  const w = (a) => { const c = Math.cos(t - a); return Math.pow(Math.max(0, c * 0.5 + 0.5), 6); };
  const g = w(-Math.PI / 2), f = w(0), d = w(Math.PI * 0.32), h = w(Math.PI) + 0.6 * w(Math.PI * 0.78);
  const s = g + f + d + h; return { gunung: g / s, peternakan: f / s, gurun: d / s, hujan: h / s };
}
export function outerW(x, z) { return sm(115, 185, Math.hypot(x, z)); }

/* tinggi medan di luar hub */
export function outerH(x, z) {
  const r = Math.hypot(x, z), S = sectors(x, z);
  const roll = 1.4 + 1.1 * Math.sin(x * 0.013 + 0.4) * Math.cos(z * 0.011) + 0.5 * Math.sin(x * 0.041 + z * 0.033);
  /* gunung: kerucut utama + punggungan */
  const gx = x / 170, gz = (z + 360) / 125, gm = Math.exp(-(gx * gx + gz * gz)), ridge = Math.abs(Math.sin(x * 0.019 + z * 0.007)) * 18 * Math.exp(-((z + 300) * (z + 300)) / 26000);
  const hG = roll + 150 * gm + ridge + 8 * sm(-120, -220, z);
  const hF = 1.6 + 0.6 * Math.sin(x * 0.02) * Math.sin(z * 0.017);                 /* peternakan: landai */
  const dune = Math.abs(Math.sin(x * 0.03 + Math.sin(z * 0.017) * 2.2)), hD = 2.2 + 5.5 * dune * dune + 1.5 * Math.sin(z * 0.012);  /* gurun: bukit pasir */
  const hH = 2.2 + 2.4 * Math.sin(x * 0.047 + 1.1) * Math.sin(z * 0.043) + 1.2 * Math.sin(x * 0.11 - z * 0.09);  /* hutan hujan: berbukit kecil */
  let h = S.gunung * hG + S.peternakan * hF + S.gurun * hD + S.hujan * hH;
  /* pantai dan laut: tanah turun landai ke bawah muka laut, lalu dasar laut dalam */
  const c = coastR(x, z), dc = r - c;
  const beachTop = SEA + 0.9;
  h = mix(h, beachTop, sm(-90, -45, dc));
  h = mix(h, SEA - 0.6, sm(-45, 0, dc));
  h = mix(h, SEA - 4, sm(0, 40, dc));
  h = mix(h, SEA - 14, sm(40, 160, dc));
  return h;
}
/* bioma untuk pewarnaan medan, vegetasi, kabut, dan suara */
export function biomeAt(x, z) {
  const wo = outerW(x, z), S = sectors(x, z), r = Math.hypot(x, z), dc = r - coastR(x, z);
  const beach = sm(-95, -55, dc) * wo, ocean = sm(-5, 25, dc);
  return { hutan: 1 - wo, gunung: S.gunung * wo, peternakan: S.peternakan * wo, gurun: S.gurun * wo, hujan: S.hujan * wo, pantai: beach, laut: ocean };
}
export function dominant(b) { let k = 'hutan', v = -1; for (const id of ['hutan', 'gunung', 'peternakan', 'gurun', 'hujan']) if (b[id] > v) { v = b[id]; k = id; } if (b.laut > 0.5) return 'laut'; if (b.pantai > 0.55 && k !== 'gurun') return 'pantai'; return k; }

const f = (v) => v.toFixed(4);
export const GLSL_WORLD = /* glsl */`
float wS(float a,float b,float x){ float t=clamp((x-a)/(b-a),0.,1.); return t*t*(3.-2.*t); }
float wCoast(vec2 p){ float t=atan(p.y,p.x); float da=atan(sin(t-1.72),cos(t-1.72)); float bay=320.*exp(-da*da/0.11);
  return ${f(ISLAND_R)}+34.*sin(3.*t+0.5)+18.*sin(7.*t+2.1)-bay; }
vec4 wSect(vec2 p){ float r=length(p); float t=atan(p.y,p.x)+0.22*sin(r*0.011)+0.12*sin(p.x*0.006-p.y*0.004);
  float g=pow(max(0.,cos(t+1.5707963)*0.5+0.5),6.); float fm=pow(max(0.,cos(t)*0.5+0.5),6.);
  float d=pow(max(0.,cos(t-${f(Math.PI * 0.32)})*0.5+0.5),6.); float h=pow(max(0.,cos(t-3.1415927)*0.5+0.5),6.)+0.6*pow(max(0.,cos(t-${f(Math.PI * 0.78)})*0.5+0.5),6.);
  float s=g+fm+d+h; return vec4(g,fm,d,h)/s; }
float wOuter(vec2 p){ return wS(115.,185.,length(p)); }
float wOuterH(vec2 p){ float x=p.x, z=p.y, r=length(p); vec4 S=wSect(p);
  float roll=1.4+1.1*sin(x*0.013+0.4)*cos(z*0.011)+0.5*sin(x*0.041+z*0.033);
  float gx=x/170., gz=(z+360.)/125.; float gm=exp(-(gx*gx+gz*gz)); float ridge=abs(sin(x*0.019+z*0.007))*18.*exp(-((z+300.)*(z+300.))/26000.);
  float hG=roll+150.*gm+ridge+8.*wS(-120.,-220.,z);
  float hF=1.6+0.6*sin(x*0.02)*sin(z*0.017);
  float dn=abs(sin(x*0.03+sin(z*0.017)*2.2)); float hD=2.2+5.5*dn*dn+1.5*sin(z*0.012);
  float hH=2.2+2.4*sin(x*0.047+1.1)*sin(z*0.043)+1.2*sin(x*0.11-z*0.09);
  float h=S.x*hG+S.y*hF+S.z*hD+S.w*hH;
  float dc=r-wCoast(p);
  h=mix(h,${f(SEA + 0.9)},wS(-90.,-45.,dc)); h=mix(h,${f(SEA - 0.6)},wS(-45.,0.,dc)); h=mix(h,${f(SEA - 4)},wS(0.,40.,dc)); h=mix(h,${f(SEA - 14)},wS(40.,160.,dc));
  return h; }
`;
