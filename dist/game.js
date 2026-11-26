var Eg=Object.defineProperty;var Ag=(i,e,t)=>e in i?Eg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var bs=(i,e,t)=>Ag(i,typeof e!="symbol"?e+"":e,t);var Sp=0,Hh=1,Tp=2;var tr=1,Ep=2,zr=3,Bi=0,Sn=1,Jt=2,Pn=0,Jr=1,yo=2,Gh=3,qh=4,hc=5;var Mi=100,Ap=101,Rp=102,Pp=103,wp=104,nr=200,Lp=201,Ip=202,Fp=203,Oh=204,Xh=205,Mo=206,Dp=207,vo=208,kp=209,Np=210,Cp=211,Up=212,Bp=213,Hp=214,Cl=0,Ul=1,Bl=2,Lr=3,Hl=4,Gl=5,ql=6,Ol=7,_o=0,Gp=1,qp=2,Hi=0,So=1,To=2,Eo=3,ir=4,Ao=5,Ro=6,Po=7,Sh="attached",Op="detached",Vh=300,sr=301,jr=302,dc=303,fc=304,Yt=1e3,mi=1001,Ir=1002,Wt=1003,pc=1004;var rr=1005;var Mn=1006,Wr=1007;var ni=1008;var Gn=1009,Yh=1010,$h=1011,Kr=1012,mc=1013,wi=1014,di=1015,cn=1016,gc=1017,xc=1018,ds=1020,Qh=35902,zh=35899,Jh=1021,jh=1022,ii=1023,ss=1026,Li=1027,bc=1028,yc=1029,Ds=1030,Mc=1031;var vc=1033,wo=33776,Lo=33777,Io=33778,Fo=33779,_c=35840,Sc=35841,Tc=35842,Ec=35843,Ac=36196,Rc=37492,Pc=37496,wc=37488,Lc=37489,Do=37490,Ic=37491,Fc=37808,Dc=37809,kc=37810,Nc=37811,Cc=37812,Uc=37813,Bc=37814,Hc=37815,Gc=37816,qc=37817,Oc=37818,Xc=37819,Vc=37820,Yc=37821,$c=36492,Qc=36494,zc=36495,Jc=36283,jc=36284,ko=36285,Wc=36286;var $s=2300,Qs=2301,kl=2302,Th=2303,Eh=2400,Ah=2401,Rh=2402,Xp=2500;var Wh=0,No=1,Zr=2,Vp=3200,Kh=3201;var ar=0,Yp=1,fs="",Et="srgb",vn="srgb-linear",Ba="linear",kt="srgb";var Nl=7680;var $p=519,Qp=512,zp=513,Jp=514,Zh=515,jp=516,Wp=517,ed=518,td=519,nd=35044;var id="300 es",gi=2e3,Fr=2001;function Rg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kp(){let i=Dr("canvas");return i.style.display="block",i}var wf={},kr=null;function Ha(...i){let e="THREE."+i.shift();kr?kr("log",e,...i):console.log(e,...i)}function Zp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=Zp(i);let e="THREE."+i.shift();if(kr)kr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=Zp(i);let e="THREE."+i.shift();if(kr)kr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ys(...i){let e=i.join(" ");e in wf||(wf[e]=!0,ze(...i))}function e0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var t0={[Cl]:Cl,[Bl]:ql,[Hl]:Hl,[Lr]:Gl,[Ul]:Ul,[ql]:Bl,[Ol]:Ol,[Gl]:Lr},Ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lf=1234567,ka=Math.PI/180,zs=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function sd(i,e){return(i%e+e)%e}function wg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lg(i,e,t){return i!==e?(t-i)/(e-i):0}function Na(i,e,t){return(1-t)*i+t*e}function Ig(i,e,t,n){return Na(i,e,1-Math.exp(-t*n))}function Fg(i,e=1){return e-Math.abs(sd(i,e*2)-e)}function Dg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ng(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cg(i,e){return i+Math.random()*(e-i)}function Ug(i){return i*(.5-Math.random())}function Bg(i){i!==void 0&&(Lf=i);let e=Lf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hg(i){return i*ka}function Gg(i){return i*zs}function qg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Og(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*u,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ad(i,e){if(e.constructor===Float32Array)return i;let t=Kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function od(i,e){if(e.constructor===Float32Array)return i;let t=Kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Zc={DEG2RAD:ka,RAD2DEG:zs,generateUUID:Ii,clamp:Tt,euclideanModulo:sd,mapLinear:wg,inverseLerp:Lg,lerp:Na,damp:Ig,pingpong:Fg,smoothstep:Dg,smootherstep:kg,randInt:Ng,randFloat:Cg,randFloatSpread:Ug,seededRandom:Bg,degToRad:Hg,radToDeg:Gg,isPowerOfTwo:qg,ceilPowerOfTwo:Og,floorPowerOfTwo:rd,setQuaternionFromProperEuler:Xg,normalize:od,denormalize:ad},fd=class fd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fd.prototype.isVector2=!0;var de=fd,wt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],b=r[a+3];if(h!==b||l!==d||c!==f||u!==p){let g=l*d+c*f+u*p+h*b;g<0&&(d=-d,f=-f,p=-p,b=-b,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),_=Math.sin(y);m=Math.sin(m*y)/_,o=Math.sin(o*y)/_,l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+b*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+b*o;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-o*f,e[t+2]=c*p+u*f+o*d-l*h,e[t+3]=u*p-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pd=class pd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(If.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(If.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pd.prototype.isVector3=!0;var k=pd,ju=new k,If=new wt,md=class md{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],b=s[0],g=s[3],m=s[6],y=s[1],_=s[4],M=s[7],E=s[2],S=s[5],x=s[8];return r[0]=a*b+o*y+l*E,r[3]=a*g+o*_+l*S,r[6]=a*m+o*M+l*x,r[1]=c*b+u*y+h*E,r[4]=c*g+u*_+h*S,r[7]=c*m+u*M+h*x,r[2]=d*b+f*y+p*E,r[5]=d*g+f*_+p*S,r[8]=d*m+f*M+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return e[0]=h*b,e[1]=(s*c-u*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wu.makeScale(e,t)),this}rotate(e){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wu.makeRotation(-e)),this}translate(e,t){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};md.prototype.isMatrix3=!0;var ct=md,Wu=new ct,Ff=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Df=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vg(){let i={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===kt&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===kt&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?Ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vn]:{primaries:e,whitePoint:n,transfer:Ba,toXYZ:Ff,fromXYZ:Df,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:kt,toXYZ:Ff,fromXYZ:Df,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}var gt=Vg();function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mr,Xl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mr===void 0&&(mr=Dr("canvas")),mr.width=e.width,mr.height=e.height;let s=mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=is(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(is(t[n]/255)*255):t[n]=is(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yg=0,Nr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ku(s[a].image)):r.push(Ku(s[a]))}else r=Ku(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ku(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var $g=0,Zu=new k,_n=class i extends Ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mi,s=mi,r=Mn,a=ni,o=ii,l=Gn,c=i.DEFAULT_ANISOTROPY,u=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Ii(),this.name="",this.source=new Nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yt:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yt:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Vh;_n.DEFAULT_ANISOTROPY=1;var gd=class gd{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,M=(f+1)/2,E=(m+1)/2,S=(u+d)/4,x=(h+b)/4,v=(p+g)/4;return _>M&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=x/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=v/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-b)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gd.prototype.isVector4=!0;var Ft=gd,Vl=class extends Ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new _n({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends Vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ga=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var uc=class uc{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,p,b,g)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,p,b,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/gr.setFromMatrixColumn(e,0).length(),r=1/gr.setFromMatrixColumn(e,1).length(),a=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,p=o*u,b=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,b=c*h;t[0]=d+b*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,b=c*h;t[0]=d-b*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,p=o*u,b=o*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+b,t[1]=l*h,t[5]=b*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,b=o*c;t[0]=l*u,t[4]=b-d*h,t[8]=p*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-b*h}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,b=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+b,t[5]=a*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qg,e,zg)}lookAt(e,t,n){let s=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ys.crossVectors(n,ai),ys.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ys.crossVectors(n,ai)),ys.normalize(),ol.crossVectors(ai,ys),s[0]=ys.x,s[4]=ol.x,s[8]=ai.x,s[1]=ys.y,s[5]=ol.y,s[9]=ai.y,s[2]=ys.z,s[6]=ol.z,s[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],b=n[6],g=n[10],m=n[14],y=n[3],_=n[7],M=n[11],E=n[15],S=s[0],x=s[4],v=s[8],F=s[12],w=s[1],H=s[5],q=s[9],C=s[13],T=s[2],U=s[6],P=s[10],I=s[14],V=s[3],G=s[7],N=s[11],O=s[15];return r[0]=a*S+o*w+l*T+c*V,r[4]=a*x+o*H+l*U+c*G,r[8]=a*v+o*q+l*P+c*N,r[12]=a*F+o*C+l*I+c*O,r[1]=u*S+h*w+d*T+f*V,r[5]=u*x+h*H+d*U+f*G,r[9]=u*v+h*q+d*P+f*N,r[13]=u*F+h*C+d*I+f*O,r[2]=p*S+b*w+g*T+m*V,r[6]=p*x+b*H+g*U+m*G,r[10]=p*v+b*q+g*P+m*N,r[14]=p*F+b*C+g*I+m*O,r[3]=y*S+_*w+M*T+E*V,r[7]=y*x+_*H+M*U+E*G,r[11]=y*v+_*q+M*P+E*N,r[15]=y*F+_*C+M*I+E*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],b=e[7],g=e[11],m=e[15],y=l*f-c*d,_=o*f-c*h,M=o*d-l*h,E=a*f-c*u,S=a*d-l*u,x=a*h-o*u;return t*(b*y-g*_+m*M)-n*(p*y-g*E+m*S)+s*(p*_-b*E+m*x)-r*(p*M-b*S+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],b=e[13],g=e[14],m=e[15],y=t*o-n*a,_=t*l-s*a,M=t*c-r*a,E=n*l-s*o,S=n*c-r*o,x=s*c-r*l,v=u*b-h*p,F=u*g-d*p,w=u*m-f*p,H=h*g-d*b,q=h*m-f*b,C=d*m-f*g,T=y*C-_*q+M*H+E*w-S*F+x*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/T;return e[0]=(o*C-l*q+c*H)*U,e[1]=(s*q-n*C-r*H)*U,e[2]=(b*x-g*S+m*E)*U,e[3]=(d*S-h*x-f*E)*U,e[4]=(l*w-a*C-c*F)*U,e[5]=(t*C-s*w+r*F)*U,e[6]=(g*M-p*x-m*_)*U,e[7]=(u*x-d*M+f*_)*U,e[8]=(a*q-o*w+c*v)*U,e[9]=(n*w-t*q-r*v)*U,e[10]=(p*S-b*M+m*y)*U,e[11]=(h*M-u*S-f*y)*U,e[12]=(o*F-a*H-l*v)*U,e[13]=(t*H-n*F+s*v)*U,e[14]=(b*_-p*E-g*y)*U,e[15]=(u*E-h*_+d*y)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,p=r*h,b=a*u,g=a*h,m=o*h,y=l*c,_=l*u,M=l*h,E=n.x,S=n.y,x=n.z;return s[0]=(1-(b+m))*E,s[1]=(f+M)*E,s[2]=(p-_)*E,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(d+m))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(p+_)*x,s[9]=(g-y)*x,s[10]=(1-(d+b))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=gr.set(s[0],s[1],s[2]).length(),o=gr.set(s[4],s[5],s[6]).length(),l=gr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Si.copy(this);let c=1/a,u=1/o,h=1/l;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=h,Si.elements[9]*=h,Si.elements[10]*=h,t.setFromRotationMatrix(Si),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=gi,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,b;if(l)p=r/(a-r),b=a*r/(a-r);else if(o===gi)p=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Fr)p=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gi,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,b;if(l)p=1/(a-r),b=a/(a-r);else if(o===gi)p=-2/(a-r),b=-(a+r)/(a-r);else if(o===Fr)p=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};uc.prototype.isMatrix4=!0;var We=uc,gr=new k,Si=new We,Qg=new k(0,0,0),zg=new k(1,1,1),ys=new k,ol=new k,ai=new k,kf=new We,Nf=new wt,$t=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$t.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jg=0,Cf=new k,xr=new wt,Wi=new We,ll=new k,Ta=new k,jg=new k,Wg=new wt,Uf=new k(1,0,0),Bf=new k(0,1,0),Hf=new k(0,0,1),Gf={type:"added"},Kg={type:"removed"},br={type:"childadded",child:null},eh={type:"childremoved",child:null},Gt=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new $t,n=new wt,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new ct}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Uf,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,t){return Cf.copy(e).applyQuaternion(this.quaternion),this.position.add(Cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uf,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ll.copy(e):ll.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Ta,ll,this.up):Wi.lookAt(ll,Ta,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(Wi),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),br.child=e,this.dispatchEvent(br),br.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kg),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,jg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,Wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new k(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zg={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},n0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},cl={h:0,s:0,l:0};function th(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=sd(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=th(a,r,e+1/3),this.g=th(a,r,e),this.b=th(a,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=n0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return gt.workingToColorSpace(Cn.copy(this),e),Math.round(Tt(Cn.r*255,0,255))*65536+Math.round(Tt(Cn.g*255,0,255))*256+Math.round(Tt(Cn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Cn.copy(this),t);let n=Cn.r,s=Cn.g,r=Cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Et){gt.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,n=Cn.g,s=Cn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ms),this.setHSL(Ms.h+e,Ms.s+t,Ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ms),e.getHSL(cl);let n=Na(Ms.h,cl.h,t),s=Na(Ms.s,cl.s,t),r=Na(Ms.l,cl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new fe;fe.NAMES=n0;var qa=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var li=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new k,Ki=new k,nh=new k,Zi=new k,yr=new k,Mr=new k,qf=new k,ih=new k,sh=new k,rh=new k,ah=new Ft,oh=new Ft,lh=new Ft,Es=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ti.subVectors(e,t),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ti.subVectors(s,t),Ki.subVectors(n,t),nh.subVectors(e,t);let a=Ti.dot(Ti),o=Ti.dot(Ki),l=Ti.dot(nh),c=Ki.dot(Ki),u=Ki.dot(nh),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,p=(a*u-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ah.setScalar(0),oh.setScalar(0),lh.setScalar(0),ah.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,n),lh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ah,r.x),a.addScaledVector(oh,r.y),a.addScaledVector(lh,r.z),a}static isFrontFacing(e,t,n,s){return Ti.subVectors(n,t),Ki.subVectors(e,t),Ti.cross(Ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Ti.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;yr.subVectors(s,n),Mr.subVectors(r,n),ih.subVectors(e,n);let l=yr.dot(ih),c=Mr.dot(ih);if(l<=0&&c<=0)return t.copy(n);sh.subVectors(e,s);let u=yr.dot(sh),h=Mr.dot(sh);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(yr,a);rh.subVectors(e,r);let f=yr.dot(rh),p=Mr.dot(rh);if(p>=0&&f<=p)return t.copy(r);let b=f*c-l*p;if(b<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Mr,o);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return qf.subVectors(r,s),o=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(qf,o);let m=1/(g+b+d);return a=b*m,o=d*m,t.copy(n).addScaledVector(yr,a).addScaledVector(Mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Un=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(r,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ul.copy(n.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),hl.subVectors(this.max,Ea),vr.subVectors(e.a,Ea),_r.subVectors(e.b,Ea),Sr.subVectors(e.c,Ea),vs.subVectors(_r,vr),_s.subVectors(Sr,_r),qs.subVectors(vr,Sr);let t=[0,-vs.z,vs.y,0,-_s.z,_s.y,0,-qs.z,qs.y,vs.z,0,-vs.x,_s.z,0,-_s.x,qs.z,0,-qs.x,-vs.y,vs.x,0,-_s.y,_s.x,0,-qs.y,qs.x,0];return!ch(t,vr,_r,Sr,hl)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,vr,_r,Sr,hl))?!1:(dl.crossVectors(vs,_s),t=[dl.x,dl.y,dl.z],ch(t,vr,_r,Sr,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},es=[new k,new k,new k,new k,new k,new k,new k,new k],Ei=new k,ul=new Un,vr=new k,_r=new k,Sr=new k,vs=new k,_s=new k,qs=new k,Ea=new k,hl=new k,dl=new k,Os=new k;function ch(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Os.fromArray(i,r);let o=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=e.dot(Os),c=t.dot(Os),u=n.dot(Os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var mn=new k,fl=new de,ex=0,dt=class extends Ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ex++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nd,this.updateRanges=[],this.gpuType=di,this.version=0,this._normalizationScale=e!==void 0?Kc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ad(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):od(e,this.array)}};var Oa=class extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xa=class extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},tx=new Un,Aa=new k,uh=new k,Kn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Aa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(uh)),this.expandByPoint(Aa.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nx=0,pi=new We,hh=new Gt,Tr=new k,oi=new Un,Ra=new Un,Rn=new k,bt=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rg(e)?Xa:Oa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Rn.addVectors(oi.min,Ra.min),oi.expandByPoint(Rn),Rn.addVectors(oi.max,Ra.max),oi.expandByPoint(Rn)):(oi.expandByPoint(Ra.min),oi.expandByPoint(Ra.max))}oi.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rn.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),Rn.add(Tr)),s=Math.max(s,n.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new k,l[F]=new k;let u=new k,h=new k,d=new k,f=new de,p=new de,b=new de,g=new k,m=new k;function y(F,w,H){c[F]=c[w]=c[H]=1,u.fromBufferAttribute(n,F),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,H),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,w),b.fromBufferAttribute(r,H),h.sub(u),d.sub(u),p.sub(f),b.sub(f);let q=1/(p.x*b.y-b.x*p.y);isFinite(q)&&(g.copy(h).multiplyScalar(b.y).addScaledVector(d,-p.y).multiplyScalar(q),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-b.x).multiplyScalar(q),o[F].add(g),o[w].add(g),o[H].add(g),l[F].add(m),l[w].add(m),l[H].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,w=_.length;F<w;++F){let H=_[F],q=H.start,C=H.count;for(let T=q,U=q+C;T<U;T+=3)y(e.getX(T+0),e.getX(T+1),e.getX(T+2))}let M=new k,E=new k,S=new k,x=new k;function v(F){S.fromBufferAttribute(s,F),x.copy(S);let w=o[F];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),E.crossVectors(x,w);let q=E.dot(l[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,q)}for(let F=0,w=n.count;F<w;++F)c[F]&&v(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new dt(d,u,h)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},As=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nd,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Of(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Of(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Of(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ii()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Yn=new k,Rs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Kc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix4(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyNormalMatrix(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.transformDirection(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ad(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):od(e,this.data.array)}},dh=new k,ix=new k,sx=new ct,Ai=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=dh.subVectors(n,t).cross(ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sx.getNormalMatrix(e),s=this.coplanarPoint(dh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rx=0,Fn=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Jr,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Xh,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nl,this.stencilZFail=Nl,this.stencilZPass=Nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ai().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ts=new k,fh=new k,pl=new k,ml=new k,Ps=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fh.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),ml.copy(this.origin).sub(fh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(pl),o=ml.dot(this.direction),l=-ml.dot(pl),c=ml.lengthSq(),u=Math.abs(1-a*a),h,d,f,p;if(u>0)if(h=a*l-o,d=a*o-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let b=1/u;h*=b,d*=b,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(fh).addScaledVector(pl,d),f}intersectSphere(e,t){if(e.radius<0)return null;ts.subVectors(e.center,this.origin);let n=ts.dot(this.direction),s=ts.dot(ts)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,b=t.y-a.y,g=t.z-a.z,m=n.x-a.x,y=n.y-a.y,_=n.z-a.z,M=Math.abs(l),E=Math.abs(c),S=Math.abs(u),x,v,F,w,H,q,C,T,U,P,I,V;if(M>=E&&M>=S?(F=l,q=h,U=p,V=m,l>=0?(x=c,v=u,w=d,H=f,C=b,T=g,P=y,I=_):(x=u,v=c,w=f,H=d,C=g,T=b,P=_,I=y)):E>=S?(F=c,q=d,U=b,V=y,c>=0?(x=u,v=l,w=f,H=h,C=g,T=p,P=_,I=m):(x=l,v=u,w=h,H=f,C=p,T=g,P=m,I=_)):(F=u,q=f,U=g,V=_,u>=0?(x=l,v=c,w=h,H=d,C=p,T=b,P=m,I=y):(x=c,v=l,w=d,H=h,C=b,T=p,P=y,I=m)),F===0)return null;let G=x/F,N=v/F,O=1/F,J=w-G*q,se=H-N*q,z=C-G*U,ee=T-N*U,oe=P-G*V,me=I-N*V,pe=oe*ee-me*z,Fe=J*me-se*oe,Xe=z*se-ee*J;if(s){if(pe<0||Fe<0||Xe<0)return null}else if((pe<0||Fe<0||Xe<0)&&(pe>0||Fe>0||Xe>0))return null;let Ue=pe+Fe+Xe;if(Ue===0)return null;let Qe=O*(pe*q+Fe*U+Xe*V);return(Ue>0?Qe<0:Qe>0)?null:this.at(Qe/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xf=new We,Xs=new Ps,gl=new Kn,Vf=new k,xl=new k,bl=new k,yl=new k,ph=new k,Ml=new k,Yf=new k,vl=new k,ke=class extends Gt{constructor(e=new bt,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ml.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(ph.fromBufferAttribute(h,e),a?Ml.addScaledVector(ph,u):Ml.addScaledVector(ph.sub(t),u))}t.add(Ml)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(gl.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(gl,Vf)===null||Xs.origin.distanceToSquared(Vf)>(e.far-e.near)**2))&&(Xf.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(Xf),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,b=d.length;p<b;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,E=_;M<E;M+=3){let S=o.getX(M),x=o.getX(M+1),v=o.getX(M+2);s=_l(this,m,e,n,c,u,h,S,x,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=p,m=b;g<m;g+=3){let y=o.getX(g),_=o.getX(g+1),M=o.getX(g+2);s=_l(this,a,e,n,c,u,h,y,_,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,b=d.length;p<b;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,E=_;M<E;M+=3){let S=M,x=M+1,v=M+2;s=_l(this,m,e,n,c,u,h,S,x,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=p,m=b;g<m;g+=3){let y=g,_=g+1,M=g+2;s=_l(this,a,e,n,c,u,h,y,_,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ax(i,e,t,n,s,r,a,o){let l;if(e.side===Sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Bi,o),l===null)return null;vl.copy(o),vl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(vl);return c<t.near||c>t.far?null:{distance:c,point:vl.clone(),object:i}}function _l(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,xl),i.getVertexPosition(l,bl),i.getVertexPosition(c,yl);let u=ax(i,e,t,n,xl,bl,yl,Yf);if(u){let h=new k;Es.getBarycoord(Yf,xl,bl,yl,h),s&&(u.uv=Es.getInterpolatedAttribute(s,o,l,c,h,new de)),r&&(u.uv1=Es.getInterpolatedAttribute(r,o,l,c,h,new de)),a&&(u.normal=Es.getInterpolatedAttribute(a,o,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};Es.getNormal(xl,bl,yl,d.normal),u.face=d,u.barycoord=h}return u}var Pa=new Ft,$f=new Ft,Qf=new Ft,ox=new Ft,zf=new We,Sl=new k,mh=new Kn,Jf=new We,gh=new Ps,Va=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sh,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sl),this.boundingBox.expandByPoint(Sl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sl),this.boundingSphere.expandByPoint(Sl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mh.copy(this.boundingSphere),mh.applyMatrix4(s),e.ray.intersectsSphere(mh)!==!1&&(Jf.copy(s).invert(),gh.copy(e.ray).applyMatrix4(Jf),!(this.boundingBox!==null&&gh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Op?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$f.fromBufferAttribute(s.attributes.skinIndex,e),Qf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Pa.copy(t),t.set(0,0,0,0)):(Pa.set(t.x,t.y,t.z,1),t.set(0,0,0)),Pa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Qf.getComponent(r);if(a!==0){let o=$f.getComponent(r);zf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ox.copy(Pa).applyMatrix4(zf),a)}}return t.isVector4&&(t.w=Pa.w),t.applyMatrix4(this.bindMatrixInverse)}},Br=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ci=class extends _n{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Wt,u=Wt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jf=new We,lx=new We,Ya=class i{constructor(e=[],t=[]){this.uuid=Ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:lx;jf.multiplyMatrices(o,t[r]),jf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ci(t,e,e,ii,di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(ze("Skeleton: No bone found with UUID:",r),a=new Br),this.bones.push(a),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ri=class extends dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Er=new We,Wf=new We,Tl=[],Kf=new Un,cx=new We,wa=new ke,La=new Kn,Bn=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),Kf.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),La.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Er),Wf.multiplyMatrices(n,Er),wa.matrixWorld=Wf,wa.raycast(e,Tl);for(let a=0,o=Tl.length;a<o;a++){let l=Tl[a];l.instanceId=r,l.object=this,t.push(l)}Tl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ci(new Float32Array(s*this.count),s,this.count,bc,di));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new Kn,ux=new de(.5,.5),El=new k,ws=class{constructor(e=new Ai,t=new Ai,n=new Ai,s=new Ai,r=new Ai,a=new Ai){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],b=r[9],g=r[10],m=r[11],y=r[12],_=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,f-u,m-p,E-y).normalize(),s[1].setComponents(c+a,f+u,m+p,E+y).normalize(),s[2].setComponents(c+o,f+h,m+b,E+_).normalize(),s[3].setComponents(c-o,f-h,m-b,E-_).normalize(),n)s[4].setComponents(l,d,g,M).normalize(),s[5].setComponents(c-l,f-d,m-g,E-M).normalize();else if(s[4].setComponents(c-l,f-d,m-g,E-M).normalize(),t===gi)s[5].setComponents(c+l,f+d,m+g,E+M).normalize();else if(t===Fr)s[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=ux.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(El.x=s.normal.x>0?e.max.x:e.min.x,El.y=s.normal.y>0?e.max.y:e.min.y,El.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zf=new We,$l=class i{constructor(){this.coordinateSystem=gi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Zf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ws),n[s].setFromProjectionMatrix(Zf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ws),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ls=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ql=new k,zl=new k,ep=new We,Ia=new Ps,Al=new Kn,xh=new k,tp=new k,Js=class extends Gt{constructor(e=new bt,t=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ql.fromBufferAttribute(t,s-1),zl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ql.distanceTo(zl);e.setAttribute("lineDistance",new lt(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(s),Al.radius+=r,e.ray.intersectsSphere(Al)===!1)return;ep.copy(s).invert(),Ia.copy(e.ray).applyMatrix4(ep);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let b=f,g=p-1;b<g;b+=c){let m=u.getX(b),y=u.getX(b+1),_=Rl(this,e,Ia,l,m,y,b);_&&t.push(_)}if(this.isLineLoop){let b=u.getX(p-1),g=u.getX(f),m=Rl(this,e,Ia,l,b,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let b=f,g=p-1;b<g;b+=c){let m=Rl(this,e,Ia,l,b,b+1,b);m&&t.push(m)}if(this.isLineLoop){let b=Rl(this,e,Ia,l,p-1,f,p-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Ql.fromBufferAttribute(o,s),zl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ql,zl,xh,tp)>n)return;xh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(xh);if(!(c<e.near||c>e.far))return{distance:c,point:tp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var np=new k,ip=new k,js=class extends Js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)np.fromBufferAttribute(t,s),ip.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+np.distanceTo(ip);e.setAttribute("lineDistance",new lt(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$a=class extends Js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Zn=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sp=new We,Ph=new Ps,Pl=new Kn,wl=new k,ci=class extends Gt{constructor(e=new bt,t=new Zn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pl.copy(n.boundingSphere),Pl.applyMatrix4(s),Pl.radius+=r,e.ray.intersectsSphere(Pl)===!1)return;sp.copy(s).invert(),Ph.copy(e.ray).applyMatrix4(sp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,b=f;p<b;p++){let g=c.getX(p);wl.fromBufferAttribute(h,g),rp(wl,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,b=f;p<b;p++)wl.fromBufferAttribute(h,p),rp(wl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rp(i,e,t,n,s,r,a){let o=Ph.distanceSqToPoint(i);if(o<t){let l=new k;Ph.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Qa=class extends _n{constructor(e=[],t=sr,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hn=class extends _n{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pi=class extends _n{constructor(e,t,n=wi,s,r,a,o=Wt,l=Wt,c,u=ss,h=1){if(u!==ss&&u!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},za=class extends Pi{constructor(e,t=wi,n=sr,s,r,a=Wt,o=Wt,l,c=ss){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ja=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xi=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function p(b,g,m,y,_,M,E,S,x,v,F){let w=M/x,H=E/v,q=M/2,C=E/2,T=S/2,U=x+1,P=v+1,I=0,V=0,G=new k;for(let N=0;N<P;N++){let O=N*H-C;for(let J=0;J<U;J++){let se=J*w-q;G[b]=se*y,G[g]=O*_,G[m]=T,c.push(G.x,G.y,G.z),G[b]=0,G[g]=0,G[m]=S>0?1:-1,u.push(G.x,G.y,G.z),h.push(J/x),h.push(1-N/v),I+=1}}for(let N=0;N<v;N++)for(let O=0;O<x;O++){let J=d+O+U*N,se=d+O+U*(N+1),z=d+(O+1)+U*(N+1),ee=d+(O+1)+U*N;l.push(J,se,ee),l.push(se,z,ee),V+=6}o.addGroup(f,V,F),f+=V,d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var dn=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,b=[],g=n/2,m=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function y(){let M=new k,E=new k,S=0,x=(t-e)/n;for(let v=0;v<=r;v++){let F=[],w=v/r,H=w*(t-e)+e;for(let q=0;q<=s;q++){let C=q/s,T=C*l+o,U=Math.sin(T),P=Math.cos(T);E.x=H*U,E.y=-w*n+g,E.z=H*P,h.push(E.x,E.y,E.z),M.set(U,x,P).normalize(),d.push(M.x,M.y,M.z),f.push(C,1-w),F.push(p++)}b.push(F)}for(let v=0;v<s;v++)for(let F=0;F<r;F++){let w=b[F][v],H=b[F+1][v],q=b[F+1][v+1],C=b[F][v+1];(e>0||F!==0)&&(u.push(w,H,C),S+=3),(t>0||F!==r-1)&&(u.push(H,q,C),S+=3)}c.addGroup(m,S,0),m+=S}function _(M){let E=p,S=new de,x=new k,v=0,F=M===!0?e:t,w=M===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),p++;let H=p;for(let q=0;q<=s;q++){let T=q/s*l+o,U=Math.cos(T),P=Math.sin(T);x.x=F*P,x.y=g*w,x.z=F*U,h.push(x.x,x.y,x.z),d.push(0,w,0),S.x=U*.5+.5,S.y=P*.5*w+.5,f.push(S.x,S.y),p++}for(let q=0;q<s;q++){let C=E+q,T=H+q;M===!0?u.push(T,T+1,C):u.push(T+1,T,C),v+=3}c.addGroup(m,v,M===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ja=class i extends dn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jl=class i extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new k,M=new k,E=new k;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],M),f(t[S+2],E),l(_,M,E,y)}function l(y,_,M,E){let S=E+1,x=[];for(let v=0;v<=S;v++){x[v]=[];let F=y.clone().lerp(M,v/S),w=_.clone().lerp(M,v/S),H=S-v;for(let q=0;q<=H;q++)q===0&&v===S?x[v][q]=F:x[v][q]=F.clone().lerp(w,q/H)}for(let v=0;v<S;v++)for(let F=0;F<2*(S-v)-1;F++){let w=Math.floor(F/2);F%2===0?(d(x[v][w+1]),d(x[v+1][w]),d(x[v][w])):(d(x[v][w+1]),d(x[v+1][w+1]),d(x[v+1][w]))}}function c(y){let _=new k;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(y),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function u(){let y=new k;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let M=g(y)/2/Math.PI+.5,E=m(y)/Math.PI+.5;a.push(M,1-E)}p(),h()}function h(){for(let y=0;y<a.length;y+=6){let _=a[y+0],M=a[y+2],E=a[y+4],S=Math.max(_,M,E),x=Math.min(_,M,E);S>.9&&x<.1&&(_<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let M=y*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function p(){let y=new k,_=new k,M=new k,E=new k,S=new de,x=new de,v=new de;for(let F=0,w=0;F<r.length;F+=9,w+=6){y.set(r[F+0],r[F+1],r[F+2]),_.set(r[F+3],r[F+4],r[F+5]),M.set(r[F+6],r[F+7],r[F+8]),S.set(a[w+0],a[w+1]),x.set(a[w+2],a[w+3]),v.set(a[w+4],a[w+5]),E.copy(y).add(_).add(M).divideScalar(3);let H=g(E);b(S,w+0,y,H),b(x,w+2,_,H),b(v,w+4,M,H)}}function b(y,_,M,E){E<0&&y.x===1&&(a[_]=y.x-1),M.x===0&&M.z===0&&(a[_]=E/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new de:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],r=[],a=[],o=new k,l=new We;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Tt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Tt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Hr=class extends ui{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new de){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jl=class extends Hr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ld(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ap=new k,op=new k,bh=new ld,yh=new ld,Mh=new ld,bi=class extends ui{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(op.subVectors(s[0],s[1]).add(s[0]),c=op);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ap.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ap),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),b=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);b<1e-4&&(b=1),p<1e-4&&(p=b),g<1e-4&&(g=b),bh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,b,g),yh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,b,g),Mh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,b,g)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),yh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Mh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(bh.calc(l),yh.calc(l),Mh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function lp(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function hx(i,e){let t=1-i;return t*t*e}function dx(i,e){return 2*(1-i)*i*e}function fx(i,e){return i*i*e}function Ca(i,e,t,n){return hx(i,e)+dx(i,t)+fx(i,n)}function px(i,e){let t=1-i;return t*t*t*e}function mx(i,e){let t=1-i;return 3*t*t*i*e}function gx(i,e){return 3*(1-i)*i*i*e}function xx(i,e){return i*i*i*e}function Ua(i,e,t,n,s){return px(i,e)+mx(i,t)+gx(i,n)+xx(i,s)}var Wa=class extends ui{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ua(e,s.x,r.x,a.x,o.x),Ua(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wl=class extends ui{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ua(e,s.x,r.x,a.x,o.x),Ua(e,s.y,r.y,a.y,o.y),Ua(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ka=class extends ui{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kl=class extends ui{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends ui{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ca(e,s.x,r.x,a.x),Ca(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends ui{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ca(e,s.x,r.x,a.x),Ca(e,s.y,r.y,a.y),Ca(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(lp(o,l.x,c.x,u.x,h.x),lp(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Zl=Object.freeze({__proto__:null,ArcCurve:jl,CatmullRomCurve3:bi,CubicBezierCurve:Wa,CubicBezierCurve3:Wl,EllipseCurve:Hr,LineCurve:Ka,LineCurve3:Kl,QuadraticBezierCurve:Za,QuadraticBezierCurve3:eo,SplineCurve:to}),ec=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Zl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},no=class extends ec{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ka(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Za(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Wa(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new to(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Hr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},rs=class extends no{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new no().fromJSON(s))}return this}};function bx(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=i0(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Sx(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,h=l;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return io(r,a,t,o,l,c,0),a}function i0(i,e,t,n,s){let r;if(s===kx(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=cp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=cp(a/n|0,i[a],i[a+1],r);return r&&Gr(r,r.next)&&(ro(r),r=r.next),r}function Ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gr(t,t.next)||tn(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function io(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Px(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Mx(i,n,s,r):yx(i)){e.push(l.i,i.i,c.i),ro(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vx(Ws(i),e),io(i,e,t,n,s,r,2)):a===2&&_x(i,e,t,n,s,r):io(Ws(i),e,t,n,s,r,1);break}}}function yx(i){let e=i.prev,t=i,n=i.next;if(tn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),h=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Fa(s,o,r,l,a,c,p.x,p.y)&&tn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Mx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(tn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(u,h,d),b=Math.max(o,l,c),g=Math.max(u,h,d),m=wh(f,p,e,t,n),y=wh(b,g,e,t,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=m&&M&&M.z<=y;){if(_.x>=f&&_.x<=b&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&Fa(o,u,l,h,c,d,_.x,_.y)&&tn(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=b&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&Fa(o,u,l,h,c,d,M.x,M.y)&&tn(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=b&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&Fa(o,u,l,h,c,d,_.x,_.y)&&tn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=b&&M.y>=p&&M.y<=g&&M!==s&&M!==a&&Fa(o,u,l,h,c,d,M.x,M.y)&&tn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function vx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Gr(n,s)&&r0(n,t,t.next,s)&&so(n,s)&&so(s,n)&&(e.push(n.i,t.i,s.i),ro(t),ro(t.next),t=i=s),t=t.next}while(t!==i);return Ws(t)}function _x(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ix(a,o)){let l=a0(a,o);a=Ws(a,a.next),l=Ws(l,l.next),io(a,e,t,n,s,r,0),io(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Sx(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=i0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Lx(c))}s.sort(Tx);for(let r=0;r<s.length;r++)t=Ex(s[r],t);return t}function Tx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ex(i,e){let t=Ax(i,e);if(!t)return e;let n=a0(t,i);return Ws(n,n.next),Ws(t,t.next)}function Ax(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Gr(i,t))return t;do{if(Gr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&s0(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);so(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Rx(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Rx(i,e){return tn(i.prev,i,e.prev)<0&&tn(e.next,i,i.next)<0}function Px(i,e,t,n){let s=i;do s.z===0&&(s.z=wh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wx(s)}function wx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function wh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Lx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function s0(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Fa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&s0(i,e,t,n,s,r,a,o)}function Ix(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Fx(i,e)&&(so(i,e)&&so(e,i)&&Dx(i,e)&&(tn(i.prev,i,e.prev)||tn(i,e.prev,e))||Gr(i,e)&&tn(i.prev,i,i.next)>0&&tn(e.prev,e,e.next)>0)}function tn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gr(i,e){return i.x===e.x&&i.y===e.y}function r0(i,e,t,n){let s=Il(tn(i,e,t)),r=Il(tn(i,e,n)),a=Il(tn(t,n,i)),o=Il(tn(t,n,e));return!!(s!==r&&a!==o||s===0&&Ll(i,t,e)||r===0&&Ll(i,n,e)||a===0&&Ll(t,i,n)||o===0&&Ll(t,e,n))}function Ll(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Il(i){return i>0?1:i<0?-1:0}function Fx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&r0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function so(i,e){return tn(i.prev,i,i.next)<0?tn(i,e,i.next)>=0&&tn(i,i.prev,e)>=0:tn(i,e,i.prev)<0||tn(i,i.next,e)<0}function Dx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function a0(i,e){let t=Lh(i.i,i.x,i.y),n=Lh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cp(i,e,t,n){let s=Lh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ih=class{static triangulate(e,t,n=2){return bx(e,t,n)}},Di=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];up(e),hp(n,e);let a=e.length;t.forEach(up);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,hp(n,t[l]);let o=Ih.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function up(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ao=class i extends bt{constructor(e=new rs([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Nx,_,M=!1,E,S,x,v;if(m){_=m.getSpacedPoints(u),M=!0,d=!1;let B=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(u,B),S=new k,x=new k,v=new k}d||(g=0,f=0,p=0,b=0);let F=o.extractPoints(c),w=F.shape,H=F.holes;if(!Di.isClockWise(w)){w=w.reverse();for(let B=0,le=H.length;B<le;B++){let he=H[B];Di.isClockWise(he)&&(H[B]=he.reverse())}}function C(B){let he=10000000000000001e-36,Ee=B[0];for(let ve=1;ve<=B.length;ve++){let Be=ve%B.length,Oe=B[Be],ft=Oe.x-Ee.x,ut=Oe.y-Ee.y,et=ft*ft+ut*ut,$=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(Ee.x),Math.abs(Ee.y)),Ot=he*$*$;if(et<=Ot){B.splice(Be,1),ve--;continue}Ee=Oe}}C(w),H.forEach(C);let T=H.length,U=w;for(let B=0;B<T;B++){let le=H[B];w=w.concat(le)}function P(B,le,he){return le||it("ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(le,he)}let I=w.length;function V(B,le,he){let Ee,ve,Be,Oe=B.x-le.x,ft=B.y-le.y,ut=he.x-B.x,et=he.y-B.y,$=Oe*Oe+ft*ft,Ot=Oe*et-ft*ut;if(Math.abs(Ot)>Number.EPSILON){let ht=Math.sqrt($),It=Math.sqrt(ut*ut+et*et),ae=le.x-ft/ht,Rt=le.y+Oe/ht,Ve=he.x-et/It,Je=he.y+ut/It,D=((Ve-ae)*et-(Je-Rt)*ut)/(Oe*et-ft*ut);Ee=ae+Oe*D-B.x,ve=Rt+ft*D-B.y;let A=Ee*Ee+ve*ve;if(A<=2)return new de(Ee,ve);Be=Math.sqrt(A/2)}else{let ht=!1;Oe>Number.EPSILON?ut>Number.EPSILON&&(ht=!0):Oe<-Number.EPSILON?ut<-Number.EPSILON&&(ht=!0):Math.sign(ft)===Math.sign(et)&&(ht=!0),ht?(Ee=-ft,ve=Oe,Be=Math.sqrt($)):(Ee=Oe,ve=ft,Be=Math.sqrt($/2))}return new de(Ee/Be,ve/Be)}let G=[];for(let B=0,le=U.length,he=le-1,Ee=B+1;B<le;B++,he++,Ee++)he===le&&(he=0),Ee===le&&(Ee=0),G[B]=V(U[B],U[he],U[Ee]);let N=[],O,J=G.concat();for(let B=0,le=T;B<le;B++){let he=H[B];O=[];for(let Ee=0,ve=he.length,Be=ve-1,Oe=Ee+1;Ee<ve;Ee++,Be++,Oe++)Be===ve&&(Be=0),Oe===ve&&(Oe=0),O[Ee]=V(he[Ee],he[Be],he[Oe]);N.push(O),J=J.concat(O)}let se;if(g===0)se=Di.triangulateShape(U,H);else{let B=[],le=[];for(let he=0;he<g;he++){let Ee=he/g,ve=f*Math.cos(Ee*Math.PI/2),Be=p*Math.sin(Ee*Math.PI/2)+b;for(let Oe=0,ft=U.length;Oe<ft;Oe++){let ut=P(U[Oe],G[Oe],Be);Fe(ut.x,ut.y,-ve),Ee===0&&B.push(ut)}for(let Oe=0,ft=T;Oe<ft;Oe++){let ut=H[Oe];O=N[Oe];let et=[];for(let $=0,Ot=ut.length;$<Ot;$++){let ht=P(ut[$],O[$],Be);Fe(ht.x,ht.y,-ve),Ee===0&&et.push(ht)}Ee===0&&le.push(et)}}se=Di.triangulateShape(B,le)}let z=se.length,ee=p+b;for(let B=0;B<I;B++){let le=d?P(w[B],J[B],ee):w[B];M?(x.copy(E.normals[0]).multiplyScalar(le.x),S.copy(E.binormals[0]).multiplyScalar(le.y),v.copy(_[0]).add(x).add(S),Fe(v.x,v.y,v.z)):Fe(le.x,le.y,0)}for(let B=1;B<=u;B++)for(let le=0;le<I;le++){let he=d?P(w[le],J[le],ee):w[le];M?(x.copy(E.normals[B]).multiplyScalar(he.x),S.copy(E.binormals[B]).multiplyScalar(he.y),v.copy(_[B]).add(x).add(S),Fe(v.x,v.y,v.z)):Fe(he.x,he.y,h/u*B)}for(let B=g-1;B>=0;B--){let le=B/g,he=f*Math.cos(le*Math.PI/2),Ee=p*Math.sin(le*Math.PI/2)+b;for(let ve=0,Be=U.length;ve<Be;ve++){let Oe=P(U[ve],G[ve],Ee);Fe(Oe.x,Oe.y,h+he)}for(let ve=0,Be=H.length;ve<Be;ve++){let Oe=H[ve];O=N[ve];for(let ft=0,ut=Oe.length;ft<ut;ft++){let et=P(Oe[ft],O[ft],Ee);M?Fe(et.x,et.y+_[u-1].y,_[u-1].x+he):Fe(et.x,et.y,h+he)}}}oe(),me();function oe(){let B=s.length/3;if(d){let le=0,he=I*le;for(let Ee=0;Ee<z;Ee++){let ve=se[Ee];Xe(ve[2]+he,ve[1]+he,ve[0]+he)}le=u+g*2,he=I*le;for(let Ee=0;Ee<z;Ee++){let ve=se[Ee];Xe(ve[0]+he,ve[1]+he,ve[2]+he)}}else{for(let le=0;le<z;le++){let he=se[le];Xe(he[2],he[1],he[0])}for(let le=0;le<z;le++){let he=se[le];Xe(he[0]+I*u,he[1]+I*u,he[2]+I*u)}}n.addGroup(B,s.length/3-B,0)}function me(){let B=s.length/3,le=0;pe(U,le),le+=U.length;for(let he=0,Ee=H.length;he<Ee;he++){let ve=H[he];pe(ve,le),le+=ve.length}n.addGroup(B,s.length/3-B,1)}function pe(B,le){let he=B.length;for(;--he>=0;){let Ee=he,ve=he-1;ve<0&&(ve=B.length-1);for(let Be=0,Oe=u+g*2;Be<Oe;Be++){let ft=I*Be,ut=I*(Be+1),et=le+Ee+ft,$=le+ve+ft,Ot=le+ve+ut,ht=le+Ee+ut;Ue(et,$,Ot,ht)}}}function Fe(B,le,he){l.push(B),l.push(le),l.push(he)}function Xe(B,le,he){Qe(B),Qe(le),Qe(he);let Ee=s.length/3,ve=y.generateTopUV(n,s,Ee-3,Ee-2,Ee-1);ge(ve[0]),ge(ve[1]),ge(ve[2])}function Ue(B,le,he,Ee){Qe(B),Qe(le),Qe(Ee),Qe(le),Qe(he),Qe(Ee);let ve=s.length/3,Be=y.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);ge(Be[0]),ge(Be[1]),ge(Be[3]),ge(Be[1]),ge(Be[2]),ge(Be[3])}function Qe(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function ge(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Zl[s.type]().fromJSON(s)),new i(n,e.options)}},Nx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new de(r,a),new de(o,l),new de(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],b=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new de(a,1-l),new de(c,1-h),new de(d,1-p),new de(b,1-m)]:[new de(o,1-l),new de(u,1-h),new de(f,1-p),new de(g,1-m)]}};function Cx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ks=class i extends Jl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Is=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],p=[],b=[],g=[];for(let m=0;m<u;m++){let y=m*d-a;for(let _=0;_<c;_++){let M=_*h-r;p.push(M,-y,0),b.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let _=y+c*m,M=y+c*(m+1),E=y+1+c*(m+1),S=y+1+c*m;f.push(_,M,S),f.push(M,E,S)}this.setIndex(f),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(b,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Zs=class i extends bt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new k,p=new de;for(let b=0;b<=s;b++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let b=0;b<s;b++){let g=b*(n+1);for(let m=0;m<n;m++){let y=m+g,_=y,M=y+n+1,E=y+n+2,S=y+1;o.push(_,M,S),o.push(M,E,S)}}this.setIndex(o),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},oo=class i extends bt{constructor(e=new rs([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(r,3)),this.setAttribute("uv",new lt(a,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,p=d.holes;Di.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];Di.isClockWise(y)===!0&&(p[g]=y.reverse())}let b=Di.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){let y=f[g];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,m=b.length;g<m;g++){let y=b[g],_=y[0]+h,M=y[1]+h,E=y[2]+h;n.push(_,M,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ux(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Ux(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var $n=class i extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new k,d=new k,f=[],p=[],b=[],g=[];for(let m=0;m<=n;m++){let y=[],_=m/n,M=a+_*o,E=e*Math.cos(M),S=Math.sqrt(e*e-E*E),x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let v=0;v<=t;v++){let F=v/t,w=s+F*r;h.x=-S*Math.cos(w),h.y=E,h.z=S*Math.sin(w),p.push(h.x,h.y,h.z),d.copy(h).normalize(),b.push(d.x,d.y,d.z),g.push(F+x,1-_),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let _=u[m][y+1],M=u[m][y],E=u[m+1][y],S=u[m+1][y+1];(m!==0||a>0)&&f.push(_,M,S),(m!==n-1||l<Math.PI)&&f.push(M,E,S)}this.setIndex(f),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(b,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qr=class i extends bt{constructor(e=new eo(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new k,l=new k,c=new de,u=new k,h=[],d=[],f=[],p=[];b(),this.setIndex(p),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function b(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),y(),m()}function g(_){u=e.getPointAt(_/t,u);let M=a.normals[_],E=a.binormals[_];for(let S=0;S<=s;S++){let x=S/s*Math.PI*2,v=Math.sin(x),F=-Math.cos(x);l.x=F*M.x+v*E.x,l.y=F*M.y+v*E.y,l.z=F*M.z+v*E.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=t;_++)for(let M=1;M<=s;M++){let E=(s+1)*(_-1)+(M-1),S=(s+1)*_+(M-1),x=(s+1)*_+M,v=(s+1)*(_-1)+M;p.push(E,S,v),p.push(S,x,v)}}function y(){for(let _=0;_<=t;_++)for(let M=0;M<=s;M++)c.x=_/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Zl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function or(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(dp(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(dp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function qn(i){let e={};for(let t=0;t<i.length;t++){let n=or(i[t]);for(let s in n)e[s]=n[s]}return e}function dp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var zn={clone:or,merge:qn},Hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hx,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new de().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ct().fromArray(s.value);break;case"m4":this.uniforms[n].value=new We().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Or=class extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},at=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ar,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zt=class extends at{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Xr=class extends Fn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ar,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var lo=class extends Fn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ar,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},co=class extends Fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ar,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vr=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tc=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ts(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Da(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function qx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function fp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Ox(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nc=class extends Ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ah:r=e,o=2*t-n;break;case Rh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ah:a=e,l=2*n-t;break;case Rh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),b=p*p,g=b*p,m=-d*g+2*d*b-d*p,y=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*b+.5*p,M=f*g-f*b;for(let E=0;E!==o;++E)r[E]=m*a[u+E]+y*a[c+E]+_*a[l+E]+M*a[h+E];return r}},ic=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},sc=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},rc=class extends Ui{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),b=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*b+a[l+g]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let b=a[c+p],g=a[l+p],m=f*d+p*2,y=h[m],_=h[m+1],M=e*d+p*2,E=u[M],S=u[M+1],x=Vx(n,t,y,E,s);r[p]=o0(x,b,_,S,g)}return r}};function o0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Xx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Vx(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=o0(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Xx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ei=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ts(t,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ts(e.times,Array),values:Ts(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Da(e.settings)&&(n.settings={inTangents:Ts(e.settings.inTangents,Array),outTangents:Ts(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new rc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Qs:t=this.InterpolantFactoryMethodLinear;break;case kl:t=this.InterpolantFactoryMethodSmooth;break;case Th:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Qs;case this.InterpolantFactoryMethodSmooth:return kl;case this.InterpolantFactoryMethodBezier:return Th}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Da(this.settings)&&(pp(this.settings.inTangents,e),pp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Da(this.settings)&&(mp(this.settings.inTangents,e),mp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){it("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){it("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Pg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){it("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let b=t[h+p];if(b!==t[d+p]||b!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Da(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function mp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Qs;var as=class extends ei{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=$s;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}};uo.prototype.ValueTypeName="color";var os=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}};os.prototype.ValueTypeName="number";var ac=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)wt.slerpFlat(r,0,a,c-o,a,c,l);return r}},ls=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}};ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends ei{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=$s;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}};Fs.prototype.ValueTypeName="vector";var ho=class{constructor(e="",t=-1,n=[],s=Xp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push($x(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ei.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=qx(l);l=fp(l,1,u),c=fp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new os(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Yx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return Fs;case"color":return uo;case"quaternion":return ls;case"bool":case"boolean":return as;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $x(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Yx(i.type);if(i.times===void 0){let n=[],s=[];Ox(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Da(i.settings)&&(t.settings={inTangents:Ts(i.settings.inTangents,Float32Array),outTangents:Ts(i.settings.outTangents,Float32Array)}),t}var ki={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(gp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!gp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function gp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var oc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},l0=new oc,yi=class{constructor(e){this.manager=e!==void 0?e:l0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ns={},Fh=class extends Error{constructor(e,t){super(e),this.response=t}},us=class extends yi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ki.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ns[e]!==void 0){ns[e].push({onLoad:t,onProgress:n,onError:s});return}ns[e]=[],ns[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ns[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,b=0,g=new ReadableStream({start(m){y();function y(){h.read().then(({done:_,value:M})=>{if(_)m.close();else{b+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:b,total:f});for(let S=0,x=u.length;S<x;S++){let v=u[S];v.onProgress&&v.onProgress(E)}m.enqueue(M),y()}},_=>{m.error(_)})}}});return new Response(g)}else throw new Fh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ki.add(`file:${e}`,c);let u=ns[e];delete ns[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=ns[e];if(u===void 0)throw this.manager.itemError(e),c;delete ns[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ar=new WeakMap,lc=class extends yi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ki.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ar.get(a);h===void 0&&(h=[],Ar.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Dr("img");function l(){u(),t&&t(this);let h=Ar.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ar.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),ki.remove(`image:${e}`);let d=Ar.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}Ar.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ki.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var ti=class extends yi{constructor(e){super(e)}load(e,t,n,s){let r=new _n,a=new lc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Yr=class extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var vh=new We,xp=new k,bp=new k,$r=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xp.setFromMatrixPosition(e.matrixWorld),t.position.copy(xp),bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){vh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Fr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fl=new k,Dl=new wt,Fi=new k,fo=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fl,Dl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Dl,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fl,Dl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Dl,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ss=new k,yp=new de,Mp=new de,en=class extends fo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,yp,Mp),t.subVectors(Mp,yp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ka*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dh=class extends $r{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},po=class extends Yr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Dh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},kh=class extends $r{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},er=class extends Yr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hs=class extends fo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nh=class extends $r{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qn=class extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Nh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var hi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},mo=class extends bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var _h=new WeakMap,go=class extends yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ki.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{_h.has(a)===!0?(s&&s(_h.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ki.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),_h.set(l,c),ki.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ki.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Rr=-90,Pr=1,Qr=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Rr,Pr,e,t);s.layers=this.layers,this.add(s);let r=new en(Rr,Pr,e,t);r.layers=this.layers,this.add(r);let a=new en(Rr,Pr,e,t);a.layers=this.layers,this.add(a);let o=new en(Rr,Pr,e,t);o.layers=this.layers,this.add(o);let l=new en(Rr,Pr,e,t);l.layers=this.layers,this.add(l);let c=new en(Rr,Pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},cc=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},xo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Qx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Qx(){this._document.hidden===!1&&this.reset()}var ud="\\[\\]\\.:\\/",zx=new RegExp("["+ud+"]","g"),hd="[^"+ud+"]",Jx="[^"+ud.replace("\\.","")+"]",jx=/((?:WC+[\/:])*)/.source.replace("WC",hd),Wx=/(WCOD+)?/.source.replace("WCOD",Jx),Kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hd),Zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hd),eb=new RegExp("^"+jx+Wx+Kx+Zx+"$"),tb=["material","materials","bones","map"],Ch=class{constructor(e,t,n){let s=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zx,"")}static parseTrackName(e){let t=eb.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;it("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=Ch;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L2=new Float32Array(1);var vp=new We,bo=class{constructor(e,t,n=0,s=1/0){this.ray=new Ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vp),this}intersectObject(e,t=!0,n=[]){return Uh(e,this,n,t),n.sort(_p),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Uh(e[s],this,n,t);return n.sort(_p),n}};function _p(i,e){return i.distance-e.distance}function Uh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Uh(r[a],e,t,!0)}}var xd=class xd{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};xd.prototype.isMatrix2=!0;var Bh=xd;function dd(i,e,t,n){let s=nb(n);switch(t){case Jh:return i*e;case bc:return i*e/s.components*s.byteLength;case yc:return i*e/s.components*s.byteLength;case Ds:return i*e*2/s.components*s.byteLength;case Mc:return i*e*2/s.components*s.byteLength;case jh:return i*e*3/s.components*s.byteLength;case ii:return i*e*4/s.components*s.byteLength;case vc:return i*e*4/s.components*s.byteLength;case wo:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Io:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Ec:return Math.max(i,16)*Math.max(e,8)/4;case _c:case Tc:return Math.max(i,8)*Math.max(e,8)/2;case Ac:case Rc:case wc:case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Do:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $c:case Qc:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jc:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ko:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nb(i){switch(i){case Gn:case Yh:return{byteLength:1,components:1};case Kr:case $h:case cn:return{byteLength:2,components:1};case gc:case xc:return{byteLength:2,components:4};case wi:case mc:case di:return{byteLength:4,components:1};case Qh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function L0(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sb(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],b=h[f];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++d,h[d]=b)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let b=h[f];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ab=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ub=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Bb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,n1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,v1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,R1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,k1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ry=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,my=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,by=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ey=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ay=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ky=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt={alphahash_fragment:rb,alphahash_pars_fragment:ab,alphamap_fragment:ob,alphamap_pars_fragment:lb,alphatest_fragment:cb,alphatest_pars_fragment:ub,aomap_fragment:hb,aomap_pars_fragment:db,batching_pars_vertex:fb,batching_vertex:pb,begin_vertex:mb,beginnormal_vertex:gb,bsdfs:xb,iridescence_fragment:bb,bumpmap_pars_fragment:yb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:vb,clipping_planes_pars_vertex:_b,clipping_planes_vertex:Sb,color_fragment:Tb,color_pars_fragment:Eb,color_pars_vertex:Ab,color_vertex:Rb,common:Pb,defaultnormal_vertex:wb,displacementmap_pars_vertex:Lb,displacementmap_vertex:Ib,emissivemap_fragment:Fb,emissivemap_pars_fragment:Db,colorspace_fragment:kb,colorspace_pars_fragment:Nb,envmap_fragment:Cb,envmap_common_pars_fragment:Ub,envmap_pars_fragment:Bb,envmap_pars_vertex:Hb,envmap_physical_pars_fragment:jb,envmap_vertex:Gb,fog_vertex:qb,fog_pars_vertex:Ob,fog_fragment:Xb,fog_pars_fragment:Vb,gradientmap_pars_fragment:Yb,lightmap_pars_fragment:$b,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:zb,lights_pars_begin:Jb,lights_toon_fragment:Wb,lights_toon_pars_fragment:Kb,lights_phong_fragment:Zb,lights_phong_pars_fragment:e1,lights_physical_fragment:t1,lights_physical_pars_fragment:n1,lights_fragment_begin:i1,lights_fragment_maps:s1,lights_fragment_end:r1,lightprobes_pars_fragment:a1,logdepthbuf_fragment:o1,logdepthbuf_pars_fragment:l1,logdepthbuf_pars_vertex:c1,logdepthbuf_vertex:u1,map_fragment:h1,map_pars_fragment:d1,map_particle_fragment:f1,map_particle_pars_fragment:p1,metalnessmap_fragment:m1,metalnessmap_pars_fragment:g1,morphinstance_vertex:x1,morphcolor_vertex:b1,morphnormal_vertex:y1,morphtarget_pars_vertex:M1,morphtarget_vertex:v1,normal_fragment_begin:_1,normal_fragment_maps:S1,normal_pars_fragment:T1,normal_pars_vertex:E1,normal_vertex:A1,normalmap_pars_fragment:R1,clearcoat_normal_fragment_begin:P1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:L1,iridescence_pars_fragment:I1,opaque_fragment:F1,packing:D1,premultiplied_alpha_fragment:k1,project_vertex:N1,dithering_fragment:C1,dithering_pars_fragment:U1,roughnessmap_fragment:B1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:q1,shadowmap_vertex:O1,shadowmask_pars_fragment:X1,skinbase_vertex:V1,skinning_pars_vertex:Y1,skinning_vertex:$1,skinnormal_vertex:Q1,specularmap_fragment:z1,specularmap_pars_fragment:J1,tonemapping_fragment:j1,tonemapping_pars_fragment:W1,transmission_fragment:K1,transmission_pars_fragment:Z1,uv_pars_fragment:ey,uv_pars_vertex:ty,uv_vertex:ny,worldpos_vertex:iy,background_vert:sy,background_frag:ry,backgroundCube_vert:ay,backgroundCube_frag:oy,cube_vert:ly,cube_frag:cy,depth_vert:uy,depth_frag:hy,distance_vert:dy,distance_frag:fy,equirect_vert:py,equirect_frag:my,linedashed_vert:gy,linedashed_frag:xy,meshbasic_vert:by,meshbasic_frag:yy,meshlambert_vert:My,meshlambert_frag:vy,meshmatcap_vert:_y,meshmatcap_frag:Sy,meshnormal_vert:Ty,meshnormal_frag:Ey,meshphong_vert:Ay,meshphong_frag:Ry,meshphysical_vert:Py,meshphysical_frag:wy,meshtoon_vert:Ly,meshtoon_frag:Iy,points_vert:Fy,points_frag:Dy,shadow_vert:ky,shadow_frag:Ny,sprite_vert:Cy,sprite_frag:Uy},Ce={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},qi={basic:{uniforms:qn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:qn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:qn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:qn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:qn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new fe(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:qn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:qn([Ce.points,Ce.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:qn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:qn([Ce.common,Ce.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:qn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:qn([Ce.sprite,Ce.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:qn([Ce.common,Ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:qn([Ce.lights,Ce.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};qi.physical={uniforms:qn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var eu={r:0,b:0,g:0},By=new We,I0=new ct;I0.set(-1,0,0,0,1,0,0,0,1);function Hy(i,e,t,n,s,r){let a=new fe(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let _=y.isScene===!0?y.background:null;if(_&&_.isTexture){let M=y.backgroundBlurriness>0;_=e.get(_,M)}return _}function p(y){let _=!1,M=f(y);M===null?g(a,o):M&&M.isColor&&(g(M,1),_=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,_){let M=f(_);M&&M.isCubeTexture?(c===void 0&&(c=new ke(new xi(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:or(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(By.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(I0),c.material.toneMapped=gt.getTransfer(M.colorSpace)!==kt,(u!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ke(new Is(2,2),new Qt({name:"BackgroundMaterial",uniforms:or(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=gt.getTransfer(M.colorSpace)!==kt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,_){y.getRGB(eu,cd(i)),t.buffers.color.setClear(eu.r,eu.g,eu.b,_,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),o=_,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:b,dispose:m}}function Gy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(H,q,C,T,U){let P=!1,I=h(H,T,C,q);r!==I&&(r=I,c(r.object)),P=f(H,T,C,U),P&&p(H,T,C,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(P||a)&&(a=!1,M(H,q,C,T),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(H){return i.bindVertexArray(H)}function u(H){return i.deleteVertexArray(H)}function h(H,q,C,T){let U=T.wireframe===!0,P=n[q.id];P===void 0&&(P={},n[q.id]=P);let I=H.isInstancedMesh===!0?H.id:0,V=P[I];V===void 0&&(V={},P[I]=V);let G=V[C.id];G===void 0&&(G={},V[C.id]=G);let N=G[U];return N===void 0&&(N=d(l()),G[U]=N),N}function d(H){let q=[],C=[],T=[];for(let U=0;U<t;U++)q[U]=0,C[U]=0,T[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:C,attributeDivisors:T,object:H,attributes:{},index:null}}function f(H,q,C,T){let U=r.attributes,P=q.attributes,I=0,V=C.getAttributes();for(let G in V)if(V[G].location>=0){let O=U[G],J=P[G];if(J===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(J=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(J=H.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;I++}return r.attributesNum!==I||r.index!==T}function p(H,q,C,T){let U={},P=q.attributes,I=0,V=C.getAttributes();for(let G in V)if(V[G].location>=0){let O=P[G];O===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));let J={};J.attribute=O,O&&O.data&&(J.data=O.data),U[G]=J,I++}r.attributes=U,r.attributesNum=I,r.index=T}function b(){let H=r.newAttributes;for(let q=0,C=H.length;q<C;q++)H[q]=0}function g(H){m(H,0)}function m(H,q){let C=r.newAttributes,T=r.enabledAttributes,U=r.attributeDivisors;C[H]=1,T[H]===0&&(i.enableVertexAttribArray(H),T[H]=1),U[H]!==q&&(i.vertexAttribDivisor(H,q),U[H]=q)}function y(){let H=r.newAttributes,q=r.enabledAttributes;for(let C=0,T=q.length;C<T;C++)q[C]!==H[C]&&(i.disableVertexAttribArray(C),q[C]=0)}function _(H,q,C,T,U,P,I){I===!0?i.vertexAttribIPointer(H,q,C,U,P):i.vertexAttribPointer(H,q,C,T,U,P)}function M(H,q,C,T){b();let U=T.attributes,P=C.getAttributes(),I=q.defaultAttributeValues;for(let V in P){let G=P[V];if(G.location>=0){let N=U[V];if(N===void 0&&(V==="instanceMatrix"&&H.instanceMatrix&&(N=H.instanceMatrix),V==="instanceColor"&&H.instanceColor&&(N=H.instanceColor)),N!==void 0){let O=N.normalized,J=N.itemSize,se=e.get(N);if(se===void 0)continue;let z=se.buffer,ee=se.type,oe=se.bytesPerElement,me=ee===i.INT||ee===i.UNSIGNED_INT||N.gpuType===mc;if(N.isInterleavedBufferAttribute){let pe=N.data,Fe=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,Xe=N.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Ue=0;Ue<G.locationSize;Ue++)m(G.location+Ue,pe.meshPerAttribute);H.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)g(G.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,z);for(let Ue=0;Ue<G.locationSize;Ue++)_(G.location+Ue,J/G.locationSize,ee,O,Fe*oe,(Xe+J/G.locationSize*Ue)*oe,me)}else{if(N.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)m(G.location+pe,N.meshPerAttribute);H.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let pe=0;pe<G.locationSize;pe++)g(G.location+pe);i.bindBuffer(i.ARRAY_BUFFER,z);for(let pe=0;pe<G.locationSize;pe++)_(G.location+pe,J/G.locationSize,ee,O,J*oe,J/G.locationSize*pe*oe,me)}}else if(I!==void 0){let O=I[V];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(G.location,O);break;case 3:i.vertexAttrib3fv(G.location,O);break;case 4:i.vertexAttrib4fv(G.location,O);break;default:i.vertexAttrib1fv(G.location,O)}}}}y()}function E(){F();for(let H in n){let q=n[H];for(let C in q){let T=q[C];for(let U in T){let P=T[U];for(let I in P)u(P[I].object),delete P[I];delete T[U]}}delete n[H]}}function S(H){if(n[H.id]===void 0)return;let q=n[H.id];for(let C in q){let T=q[C];for(let U in T){let P=T[U];for(let I in P)u(P[I].object),delete P[I];delete T[U]}}delete n[H.id]}function x(H){for(let q in n){let C=n[q];for(let T in C){let U=C[T];if(U[H.id]===void 0)continue;let P=U[H.id];for(let I in P)u(P[I].object),delete P[I];delete U[H.id]}}}function v(H){for(let q in n){let C=n[q],T=H.isInstancedMesh===!0?H.id:0,U=C[T];if(U!==void 0){for(let P in U){let I=U[P];for(let V in I)u(I[V].object),delete I[V];delete U[P]}delete C[T],Object.keys(C).length===0&&delete n[q]}}}function F(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:g,disableUnusedAttributes:y}}function qy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Oy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==ii&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let v=x===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Gn&&x!==di&&!v&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:M,maxSamples:E,samples:S}}function Xy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ai,o=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,b=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let y=r?0:n,_=y*4,M=m.clippingState||null;l.value=M,M=u(p,d,_,f);for(let E=0;E!==_;++E)M[E]=t[E];m.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let b=h!==null?h.length:0,g=null;if(b!==0){if(g=l.value,p!==!0||g===null){let m=f+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,M=f;_!==b;++_,M+=4)a.copy(h[_]).applyMatrix4(y,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var Bo=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xi(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Pn});r.uniforms.tEquirect.value=t;let a=new ke(s,r),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=Mn),new Qr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},c0=256,Vy=3,Yy=20,F0=256,D0=16,$y=3,Qy=new k,zy=new fe,Oi=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qr(1,10,null),this._boxMesh=new ke(new xi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Qy}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(zy));let g=new Qr(n,s,u);return g.position.copy(o),g.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=b,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=d0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(c0,rd(e))}_fromTexture(e,t){e.mapping===sr||e.mapping===jr?this._setSize(e.image.length===0?c0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=u0(e,!1,!1),n=Math.log2(e)-Vy;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=u0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===sr||e.mapping===jr?(this._cubemapMaterial===null&&(this._cubemapMaterial=d0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=h0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Jy(),this._integrationMaterial=jy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/D0);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-$y)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(F0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Wy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function u0(i,e,t){return new Bo(i,{minFilter:ni,generateMipmaps:e,type:cn,colorSpace:vn,depthBuffer:t})}function Ho(i,e,t){return new Qt({name:i,uniforms:e,vertexShader:Mt.cube_vert,fragmentShader:t,side:Sn,blending:Pn,depthTest:!1,depthWrite:!1})}function Jy(){return Ho("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${F0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function jy(){return Ho("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:D0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Wy(){return Ho("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Yy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function h0(){return Ho("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function d0(){return Ho("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ky(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===dc||f===fc)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let b=new Bo(p.height);return b.fromEquirectangularTexture(i,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===dc||f===fc,b=f===sr||f===jr;if(p||b){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Oi(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return p&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new Oi(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===dc?d.mapping=sr:f===fc&&(d.mapping=jr),d}function l(d){let f=0,p=6;for(let b=0;b<p;b++)d[b]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Zy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ys("WebGLRenderer: "+n+" extension not supported."),s}}}function eM(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let b=r.get(p);b&&(e.remove(b),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function u(p){let b=p.attributes;for(let g in b)e.update(b[g],i.ARRAY_BUFFER)}function h(p){let b=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let y=b!==null?b.array.length:g.array.length/3-1,_=g.count>=65535?Xa:Oa,M=new _(Math.ceil(y/3)*6,1),E=M.array;if(b!==null){let x=b.array;m=b.version;for(let v=0,F=0;v<y;v+=3){let w=x[v+0],H=x[v+1],q=x[v+2];E[F++]=w,E[F++]=H,E[F++]=H,E[F++]=q,E[F++]=q,E[F++]=w}}else{m=g.version;for(let x=0,v=0;x<y;x+=3){let F=x+0,w=x+1,H=x+2;E[v++]=F,E[v++]=w,E[v++]=w,E[v++]=H,E[v++]=H,E[v++]=F}}M.version=m;let S=r.get(p);S&&e.remove(S),r.set(p,M)}function d(p){let b=r.get(p);if(b){let g=p.index;g!==null&&b.version<g.version&&h(p)}else h(p);return r.get(p)}function f(){for(let p in s){let b=s[p].deref();b!==void 0&&l(b)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function tM(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let b=0;for(let g=0;g<f;g++)b+=d[g];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function nM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function iM(i,e,t){let n=new WeakMap,s=new Ft;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let F=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),b===!0&&(_=3);let M=o.attributes.position.count*_,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*E*4*h),x=new Ga(S,M,E,h);x.type=di,x.needsUpdate=!0;let v=_*4;for(let w=0;w<h;w++){let H=g[w],q=m[w],C=y[w],T=M*E*4*w;for(let U=0;U<H.count;U++){let P=U*v;f===!0&&(s.fromBufferAttribute(H,U),S[T+P+0]=s.x,S[T+P+1]=s.y,S[T+P+2]=s.z,S[T+P+3]=0),p===!0&&(s.fromBufferAttribute(q,U),S[T+P+4]=s.x,S[T+P+5]=s.y,S[T+P+6]=s.z,S[T+P+7]=0),b===!0&&(s.fromBufferAttribute(C,U),S[T+P+8]=s.x,S[T+P+9]=s.y,S[T+P+10]=s.z,S[T+P+11]=C.itemSize===4?s.w:1)}}d={count:h,texture:x,size:new de(M,E)},n.set(o,d),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function sM(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var rM={[So]:"LINEAR_TONE_MAPPING",[To]:"REINHARD_TONE_MAPPING",[Eo]:"CINEON_TONE_MAPPING",[ir]:"ACES_FILMIC_TONE_MAPPING",[Ro]:"AGX_TONE_MAPPING",[Po]:"NEUTRAL_TONE_MAPPING",[Ao]:"CUSTOM_TONE_MAPPING"};function aM(i,e,t,n,s,r){let a=new Kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new bt;u.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new lt([0,2,0,0,2,0],2));let h=new Or({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ke(u,h),f=new hs(-1,1,1,-1,0,1),p=null,b=null,g=!1,m,y=null,_=[],M=!1;this.setSize=function(E,S){a.setSize(E,S),o!==null&&o.setSize(E,S),l!==null&&l.setSize(E,S);for(let x=0;x<_.length;x++){let v=_[x];v.setSize&&v.setSize(E,S)}},this.setEffects=function(E){_=E,M=_.length>0&&_[0].isRenderPass===!0;let S=a.width,x=a.height;_.length>0&&o===null&&(o=new Kt(S,x,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new Kt(S,x,{type:cn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&_.some(F=>F.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new Pi(S,x),r===!0&&(c.format=Li,c.type=ds)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let F=0;F<_.length;F++){let w=_[F];w.setSize&&w.setSize(S,x),v&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(E,S){if(g||E.toneMapping===Hi&&_.length===0)return!1;if(y=S,S!==null){let x=S.width,v=S.height;(a.width!==x||a.height!==v)&&this.setSize(x,v)}return M===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=Hi,!0},this.hasRenderPass=function(){return M},this.end=function(E,S){E.toneMapping=m,g=!0;let x=a,v=o;for(let F=0;F<_.length;F++){let w=_[F];w.enabled!==!1&&(w.render(E,v,x,S),w.needsSwap!==!1&&(x=v,v=v===o?l:o))}if(p!==E.outputColorSpace||b!==E.toneMapping){p=E.outputColorSpace,b=E.toneMapping,h.defines={},gt.getTransfer(p)===kt&&(h.defines.SRGB_TRANSFER="");let F=rM[b];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(y),E.render(d,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var k0=new _n,N0=new Pi(1,1),C0=new za(1),U0=new Ga,B0=new Yl,H0=new Qa,f0=[],p0=[],m0=new Float32Array(16),g0=new Float32Array(9),x0=new Float32Array(4);function ta(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=f0[s];if(r===void 0&&(r=new Float32Array(s),f0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function En(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function iu(i,e){let t=p0[e];t===void 0&&(t=new Int32Array(e),p0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function oM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2fv(this.addr,e),En(t,e)}}function cM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;i.uniform3fv(this.addr,e),En(t,e)}}function uM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4fv(this.addr,e),En(t,e)}}function hM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(Tn(t,n))return;x0.set(n),i.uniformMatrix2fv(this.addr,!1,x0),En(t,n)}}function dM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(Tn(t,n))return;g0.set(n),i.uniformMatrix3fv(this.addr,!1,g0),En(t,n)}}function fM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(Tn(t,n))return;m0.set(n),i.uniformMatrix4fv(this.addr,!1,m0),En(t,n)}}function pM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2iv(this.addr,e),En(t,e)}}function gM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3iv(this.addr,e),En(t,e)}}function xM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4iv(this.addr,e),En(t,e)}}function bM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2uiv(this.addr,e),En(t,e)}}function MM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3uiv(this.addr,e),En(t,e)}}function vM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4uiv(this.addr,e),En(t,e)}}function su(i){return i.version===0&&(i.compareFunction=td,i.needsUpdate=!0),i}function _M(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=su(N0):r=k0,t.setTexture2D(e||r,s)}function SM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||B0,s)}function TM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=su(C0):r=H0,t.setTextureCube(e||r,s)}function EM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||U0,s)}function AM(i){switch(i){case 5126:return oM;case 35664:return lM;case 35665:return cM;case 35666:return uM;case 35674:return hM;case 35675:return dM;case 35676:return fM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return xM;case 5125:return bM;case 36294:return yM;case 36295:return MM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return EM}}function RM(i,e){i.uniform1fv(this.addr,e)}function PM(i,e){let t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function wM(i,e){let t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function LM(i,e){let t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function IM(i,e){let t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function FM(i,e){let t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function DM(i,e){let t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kM(i,e){i.uniform1iv(this.addr,e)}function NM(i,e){i.uniform2iv(this.addr,e)}function CM(i,e){i.uniform3iv(this.addr,e)}function UM(i,e){i.uniform4iv(this.addr,e)}function BM(i,e){i.uniform1uiv(this.addr,e)}function HM(i,e){i.uniform2uiv(this.addr,e)}function GM(i,e){i.uniform3uiv(this.addr,e)}function qM(i,e){i.uniform4uiv(this.addr,e)}function OM(i,e,t){let n=this.cache,s=e.length,r=iu(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=su(N0):a=k0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function XM(i,e,t){let n=this.cache,s=e.length,r=iu(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||B0,r[a])}function VM(i,e,t){let n=this.cache,s=e.length,r=iu(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=su(C0):a=H0;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function YM(i,e,t){let n=this.cache,s=e.length,r=iu(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||U0,r[a])}function $M(i){switch(i){case 5126:return RM;case 35664:return PM;case 35665:return wM;case 35666:return LM;case 35674:return IM;case 35675:return FM;case 35676:return DM;case 5124:case 35670:return kM;case 35667:case 35671:return NM;case 35668:case 35672:return CM;case 35669:case 35673:return UM;case 5125:return BM;case 36294:return HM;case 36295:return GM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return YM}}var Md=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=AM(t.type)}},vd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$M(t.type)}},_d=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},bd=/(\w+)(\])?(\[|\.)?/g;function b0(i,e){i.seq.push(e),i.map[e.id]=e}function QM(i,e,t){let n=i.name,s=n.length;for(bd.lastIndex=0;;){let r=bd.exec(n),a=bd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){b0(t,c===void 0?new Md(o,i,e):new vd(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new _d(o),b0(t,h)),t=h}}}var ea=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);QM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function y0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var zM=37297,JM=0;function jM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var M0=new ct;function WM(i){gt._getMatrix(M0,gt.workingColorSpace,i);let e=`mat3( ${M0.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Ba:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function v0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jM(i.getShaderSource(e),o)}else return r}function KM(i,e){let t=WM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ZM={[So]:"Linear",[To]:"Reinhard",[Eo]:"Cineon",[ir]:"ACESFilmic",[Ro]:"AgX",[Po]:"Neutral",[Ao]:"Custom"};function ev(i,e){let t=ZM[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tu=new k;function tv(){gt.getLuminanceCoefficients(tu);let i=tu.x.toFixed(4),e=tu.y.toFixed(4),t=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function iv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Uo(i){return i!==""}function _0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function S0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(i){return i.replace(rv,av)}function av(i,e){let t=Mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sd(t)}var ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T0(i){return i.replace(ov,lv)}function lv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function E0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var cv={[tr]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function uv(i){return cv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hv={[jr]:"ENVMAP_MODE_REFRACTION"};function dv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":hv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fv={[_o]:"ENVMAP_BLENDING_MULTIPLY",[Gp]:"ENVMAP_BLENDING_MIX",[qp]:"ENVMAP_BLENDING_ADD"};function pv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fv[i.combine]||"ENVMAP_BLENDING_NONE"}function mv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=uv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=dv(t),h=pv(t),d=nv(t),f=iv(r),p=s.createProgram(),b,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Uo).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Uo).join(`
`),g.length>0&&(g+=`
`)):(b=[E0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),g=[E0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,KM("linearToOutputTexel",t.outputColorSpace),tv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Uo).join(`
`)),a=Sd(a),a=_0(a,t),a=S0(a,t),o=Sd(o),o=_0(o,t),o=S0(o,t),a=T0(a),o=T0(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+b+a,_=m+g+o,M=y0(s,s.VERTEX_SHADER,y),E=y0(s,s.FRAGMENT_SHADER,_);s.attachShader(p,M),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(w){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(p)||"",q=s.getShaderInfoLog(M)||"",C=s.getShaderInfoLog(E)||"",T=H.trim(),U=q.trim(),P=C.trim(),I=!0,V=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,E);else{let G=v0(s,M,"vertex"),N=v0(s,E,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+T+`
`+G+`
`+N)}else T!==""?ze("WebGLProgram: Program Info Log:",T):(U===""||P==="")&&(V=!1);V&&(w.diagnostics={runnable:I,programLog:T,vertexShader:{log:U,prefix:b},fragmentShader:{log:P,prefix:g}})}s.deleteShader(M),s.deleteShader(E),x=new ea(s,p),v=sv(s,p)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(p,zM)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}var gv=0,Td=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ed(e),t.set(e,n)),n}},Ed=class{constructor(e){this.id=gv++,this.code=e,this.usedTimes=0}};function xv(i){return i===Ds||i===Do||i===ko}function bv(i,e,t,n,s,r){let a=new Cr,o=new Td,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,v,F,w,H,q){let C=w.fog,T=H.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,I=e.get(x.envMap||U,P),V=d[x.type],G=n.precision;x.precision!==null&&(G=n.getMaxPrecision(x.precision),G!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));let N=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,O=N!==void 0?N.length:0,J=0;T.morphAttributes.position!==void 0&&(J=1),T.morphAttributes.normal!==void 0&&(J=2),T.morphAttributes.color!==void 0&&(J=3);let se,z,ee,oe;if(V){let De=qi[V];se=De.vertexShader,z=De.fragmentShader}else{se=x.vertexShader,z=x.fragmentShader;let De=o.getVertexShaderStage(x),Ke=o.getFragmentShaderStage(x);o.update(x,De,Ke),ee=De.id,oe=Ke.id}let me=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Fe=H.isInstancedMesh===!0,Xe=H.isBatchedMesh===!0,Ue=!!x.map,Qe=!!x.matcap,ge=!!I,B=ge&&I.isPMREMTexture===!0,le=!!x.aoMap,he=!!x.lightMap,Ee=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,Be=!!x.displacementMap,Oe=!!x.emissiveMap,ft=!!x.metalnessMap,ut=!!x.roughnessMap,et=x.anisotropy>0,$=x.clearcoat>0,Ot=x.diffuseRoughness>0,ht=x.dispersion>0,It=x.retroreflectivity>0,ae=x.iridescence>0,Rt=x.sheen>0,Ve=x.transmission>0,Je=et&&!!x.anisotropyMap,D=$&&!!x.clearcoatMap,A=$&&!!x.clearcoatNormalMap,j=$&&!!x.clearcoatRoughnessMap,xe=Ot&&!!x.diffuseRoughnessMap,ue=ae&&!!x.iridescenceMap,_e=ae&&!!x.iridescenceThicknessMap,Ae=Rt&&!!x.sheenColorMap,re=Rt&&!!x.sheenRoughnessMap,ne=!!x.specularMap,Se=!!x.specularColorMap,X=!!x.specularIntensityMap,ce=Ve&&!!x.transmissionMap,ie=Ve&&!!x.thicknessMap,we=!!x.gradientMap,Te=!!x.alphaMap,Pe=x.alphaTest>0,$e=!!x.alphaHash,pt=!!x.extensions,Me=Hi;x.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Me=i.toneMapping);let je=B?I.isCompressedCubeTexture?I.image[0].mipmaps:I.mipmaps:null,rt={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:z,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:Xe,batchingColor:Xe&&H._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&H.instanceColor!==null,instancingMorph:Fe&&H.morphTexture!==null,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:Qe,envMap:ge,envMapMode:ge&&I.mapping,envMapPMREM:B,envMapMaxLod:B?je.length-1:null,envMapSize:B?je[0].width:null,aoMap:le,lightMap:he,bumpMap:Ee,normalMap:ve,displacementMap:Be,emissiveMap:Oe,normalMapObjectSpace:ve&&x.normalMapType===Yp,normalMapTangentSpace:ve&&x.normalMapType===ar,packedNormalMap:ve&&x.normalMapType===ar&&xv(x.normalMap.format),metalnessMap:ft,roughnessMap:ut,anisotropy:et,anisotropyMap:Je,clearcoat:$,clearcoatMap:D,clearcoatNormalMap:A,clearcoatRoughnessMap:j,diffuseRoughness:Ot,diffuseRoughnessMap:xe,dispersion:ht,retroreflection:It,iridescence:ae,iridescenceMap:ue,iridescenceThicknessMap:_e,sheen:Rt,sheenColorMap:Ae,sheenRoughnessMap:re,specularMap:ne,specularColorMap:Se,specularIntensityMap:X,transmission:Ve,transmissionMap:ce,thicknessMap:ie,gradientMap:we,opaque:x.transparent===!1&&x.blending===Jr&&x.alphaToCoverage===!1,alphaMap:Te,alphaTest:Pe,alphaHash:$e,combine:x.combine,mapUv:Ue&&f(x.map.channel),aoMapUv:le&&f(x.aoMap.channel),lightMapUv:he&&f(x.lightMap.channel),bumpMapUv:Ee&&f(x.bumpMap.channel),normalMapUv:ve&&f(x.normalMap.channel),displacementMapUv:Be&&f(x.displacementMap.channel),emissiveMapUv:Oe&&f(x.emissiveMap.channel),metalnessMapUv:ft&&f(x.metalnessMap.channel),roughnessMapUv:ut&&f(x.roughnessMap.channel),anisotropyMapUv:Je&&f(x.anisotropyMap.channel),clearcoatMapUv:D&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:A&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:re&&f(x.sheenRoughnessMap.channel),specularMapUv:ne&&f(x.specularMap.channel),specularColorMapUv:Se&&f(x.specularColorMap.channel),specularIntensityMapUv:X&&f(x.specularIntensityMap.channel),transmissionMapUv:ce&&f(x.transmissionMap.channel),thicknessMapUv:ie&&f(x.thicknessMap.channel),alphaMapUv:Te&&f(x.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(ve||et),vertexNormals:!!T.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!T.attributes.uv&&(Ue||Te),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||T.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:q.filter(De=>De.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===kt,decodeVideoTextureEmissive:Oe&&x.emissiveMap.isVideoTexture===!0&&gt.getTransfer(x.emissiveMap.colorSpace)===kt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jt,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&x.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function b(x){let v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(let F in x.defines)v.push(F),v.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(g(v,x),m(v,x),v.push(i.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function g(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapPMREM),x.push(v.envMapMaxLod),x.push(v.envMapSize),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.diffuseRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.numSunLights),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numSunLightShadows),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.numLightProbeGrids),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function m(x,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let v=d[x.type],F;if(v){let w=qi[v];F=zn.clone(w.uniforms)}else F=x.uniforms;return F}function _(x,v){let F=u.get(v);return F!==void 0?++F.usedTimes:(F=new mv(i,v,x,s),c.push(F),u.set(v,F)),F}function M(x){if(--x.usedTimes===0){let v=c.indexOf(x);c[v]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function S(){o.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:y,acquireProgram:_,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:S}}function yv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Mv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function A0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function R0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,b,g,m){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:m},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=a(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=g,y.group=m),e++,y}function l(d,f,p,b,g,m,y){y.reversedDepth===!0&&(g=-g);let _=o(d,f,p,b,g,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function c(d,f,p,b,g,m){let y=o(d,f,p,b,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||Mv),n.length>1&&n.sort(f||A0),s.length>1&&s.sort(f||A0)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function vv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new R0,i.set(n,[a])):s>=r.length?(a=new R0,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function _v(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new fe};break;case"SpotLight":t={position:new k,direction:new k,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Sv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Tv=0;function Ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Av(i){let e=new _v,t=Sv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new We,a=new We;function o(c){let u=0,h=0,d=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let f=0,p=0,b=0,g=0,m=0,y=0,_=0,M=0,E=0,S=0,x=0,v=0,F=0,w=0;c.sort(Ev);for(let q=0,C=c.length;q<C;q++){let T=c[q],U=T.color,P=T.intensity,I=T.distance,V=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Ds?V=T.shadow.map.texture:V=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)u+=U.r*P,h+=U.g*P,d+=U.b*P;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],P);w++}else if(T.isSunLight){let G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let N=T.shadow,O=t.get(T);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),n.sunShadow[p]=O,n.sunShadowMap[p]=V;let J=N.getViewportCount();for(let se=0;se<J;se++)n.sunShadowMatrix[b+se]=N.getMatrix(se),n.sunShadowCascade[b+se]=N._cascadeData[se];b+=J,p++}n.sun[f]=G,f++}else if(T.isDirectionalLight){let G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let N=T.shadow,O=t.get(T);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,n.directionalShadow[g]=O,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=T.shadow.matrix,E++}n.directional[g]=G,g++}else if(T.isSpotLight){let G=e.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(U).multiplyScalar(P),G.distance=I,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[y]=G;let N=T.shadow;if(T.map&&(n.spotLightMap[v]=T.map,v++,N.updateMatrices(T),T.castShadow&&F++),n.spotLightMatrix[y]=N.matrix,T.castShadow){let O=t.get(T);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,n.spotShadow[y]=O,n.spotShadowMap[y]=V,x++}y++}else if(T.isRectAreaLight){let G=e.get(T);G.color.copy(U).multiplyScalar(P),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[_]=G,_++}else if(T.isPointLight){let G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){let N=T.shadow,O=t.get(T);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,O.shadowCameraNear=N.camera.near,O.shadowCameraFar=N.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=T.shadow.matrix,S++}n.point[m]=G,m++}else if(T.isHemisphereLight){let G=e.get(T);G.skyColor.copy(T.color).multiplyScalar(P),G.groundColor.copy(T.groundColor).multiplyScalar(P),n.hemi[M]=G,M++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let H=n.hash;(H.sunLength!==f||H.directionalLength!==g||H.pointLength!==m||H.spotLength!==y||H.rectAreaLength!==_||H.hemiLength!==M||H.numSunShadows!==p||H.numDirectionalShadows!==E||H.numPointShadows!==S||H.numSpotShadows!==x||H.numSpotMaps!==v||H.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=_,n.point.length=m,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+v-F,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=w,H.sunLength=f,H.directionalLength=g,H.pointLength=m,H.spotLength=y,H.rectAreaLength=_,H.hemiLength=M,H.numSunShadows=p,H.numDirectionalShadows=E,H.numPointShadows=S,H.numSpotShadows=x,H.numSpotMaps=v,H.numLightProbes=w,n.version=Tv++)}function l(c,u){let h=0,d=0,f=0,p=0,b=0,g=0,m=u.matrixWorldInverse;for(let y=0,_=c.length;y<_;y++){let M=c[y];if(M.isSunLight){let E=n.sun[h];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),h++}else if(M.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(M.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let E=n.rectArea[b];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function P0(i){let e=new Av(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){n.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Rv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new P0(i),e.set(s,[o])):r>=a.length?(o=new P0(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lv=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Iv=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],w0=new We,Co=new k,yd=new k;function Fv(i,e,t){let n=new ws,s=new de,r=new de,a=new Ft,o=new Vr,l=new tc,c={},u=t.maxTextureSize,h={[Bi]:Sn,[Sn]:Bi,[Jt]:Jt},d=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Pv,fragmentShader:wv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new bt;p.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ke(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let m=this.type;this.render=function(S,x,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Ep&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tr);let F=i.getRenderTarget(),w=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Pn),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let C=m!==this.type;C&&x.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(U=>U.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,U=S.length;T<U;T++){let P=S[T],I=P.shadow;if(I===void 0){ze("WebGLShadowMap:",P,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);let V=I.getFrameExtents();s.multiply(V),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,I.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=G,I.map===null||C===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===zr){if(P.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Kt(s.x,s.y,{format:Ds,type:cn,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),I.map.texture.name=P.name+".shadowMap",I.map.depthTexture=new Pi(s.x,s.y,di),I.map.depthTexture.name=P.name+".shadowMapDepth",I.map.depthTexture.format=ss,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Wt,I.map.depthTexture.magFilter=Wt}else P.isPointLight?(I.map=new Bo(s.x),I.map.depthTexture=new za(s.x,wi)):(I.map=new Kt(s.x,s.y),I.map.depthTexture=new Pi(s.x,s.y,wi)),I.map.depthTexture.name=P.name+".shadowMap",I.map.depthTexture.format=ss,this.type===tr?(I.map.depthTexture.compareFunction=G?ed:Zh,I.map.depthTexture.minFilter=Mn,I.map.depthTexture.magFilter=Mn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Wt,I.map.depthTexture.magFilter=Wt);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==s.x||I.map.height!==s.y)&&I.map.setSize(s.x,s.y);let N=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();P.isPointLight!==!0&&I.updateMatrices(P,v);let O=(I.camera.layers.mask&4294967294)!==0?I.camera.layers:v.layers;for(let J=0;J<N;J++){let se=I.getCamera(J);if(P.isPointLight){let z=I.camera,ee=I.matrix,oe=P.distance||z.far;oe!==z.far&&(z.far=oe,z.updateProjectionMatrix()),Co.setFromMatrixPosition(P.matrixWorld),z.position.copy(Co),yd.copy(z.position),yd.add(Lv[J]),z.up.copy(Iv[J]),z.lookAt(yd),z.updateMatrixWorld(),ee.makeTranslation(-Co.x,-Co.y,-Co.z),w0.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),I._frustum.setFromProjectionMatrix(w0,z.coordinateSystem,z.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,J),i.clear();else{J===0&&(i.setRenderTarget(I.map),i.clear());let z=I.getViewport(J);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),q.viewport(a)}n=I.getFrustum(J),M(x,v,se,P,O,this.type)}I.isPointLightShadow!==!0&&this.type===zr&&y(I,v),I.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(F,w,H)};function y(S,x){let v=e.update(b);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Kt(s.x,s.y,{format:Ds,type:cn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(x,null,v,d,b,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(x,null,v,f,b,null)}function _(S,x,v,F){let w=null,H=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(H!==void 0)w=H;else if(w=v.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let q=w.uuid,C=x.uuid,T=c[q];T===void 0&&(T={},c[q]=T);let U=T[C];U===void 0&&(U=w.clone(),T[C]=U,x.addEventListener("dispose",E)),w=U}if(w.visible=x.visible,w.wireframe=x.wireframe,F===zr?w.side=x.shadowSide!==null?x.shadowSide:x.side:w.side=x.shadowSide!==null?x.shadowSide:h[x.side],w.alphaMap=x.alphaMap,w.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,w.map=x.map,w.clipShadows=x.clipShadows,w.clippingPlanes=x.clippingPlanes,w.clipIntersection=x.clipIntersection,w.displacementMap=x.displacementMap,w.displacementScale=x.displacementScale,w.displacementBias=x.displacementBias,w.wireframeLinewidth=x.wireframeLinewidth,w.linewidth=x.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let q=i.properties.get(w);q.light=v}return w}function M(S,x,v,F,w,H){if(S.visible===!1)return;if(S.layers.test(w)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&H===zr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let T=e.update(S),U=S.material;if(Array.isArray(U)){let P=T.groups;for(let I=0,V=P.length;I<V;I++){let G=P[I],N=U[G.materialIndex];if(N&&N.visible){let O=_(S,N,F,H);S.onBeforeShadow(i,S,x,v,T,O,G),i.renderBufferDirect(v,null,T,O,S,G),S.onAfterShadow(i,S,x,v,T,O,G)}}}else if(U.visible){let P=_(S,U,F,H);S.onBeforeShadow(i,S,x,v,T,P,null),i.renderBufferDirect(v,null,T,P,S,null),S.onAfterShadow(i,S,x,v,T,P,null)}}let C=S.children;for(let T=0,U=C.length;T<U;T++)M(C[T],x,v,F,w,H)}function E(S){S.target.removeEventListener("dispose",E);for(let v in c){let F=c[v],w=S.target.uuid;w in F&&(F[w].dispose(),delete F[w])}}}function Dv(i,e){function t(){let X=!1,ce=new Ft,ie=null,we=new Ft(0,0,0,0);return{setMask:function(Te){ie!==Te&&!X&&(i.colorMask(Te,Te,Te,Te),ie=Te)},setLocked:function(Te){X=Te},setClear:function(Te,Pe,$e,pt,Me){Me===!0&&(Te*=pt,Pe*=pt,$e*=pt),ce.set(Te,Pe,$e,pt),we.equals(ce)===!1&&(i.clearColor(Te,Pe,$e,pt),we.copy(ce))},reset:function(){X=!1,ie=null,we.set(-1,0,0,0)}}}function n(){let X=!1,ce=!1,ie=null,we=null,Te=null;return{setReversed:function(Pe){if(ce!==Pe){let $e=e.get("EXT_clip_control");Pe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),ce=Pe;let pt=Te;Te=null,this.setClear(pt)}},getReversed:function(){return ce},setTest:function(Pe){Pe?pe(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!X&&(i.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(ce&&(Pe=t0[Pe]),we!==Pe){switch(Pe){case Cl:i.depthFunc(i.NEVER);break;case Ul:i.depthFunc(i.ALWAYS);break;case Bl:i.depthFunc(i.LESS);break;case Lr:i.depthFunc(i.LEQUAL);break;case Hl:i.depthFunc(i.EQUAL);break;case Gl:i.depthFunc(i.GEQUAL);break;case ql:i.depthFunc(i.GREATER);break;case Ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Pe}},setLocked:function(Pe){X=Pe},setClear:function(Pe){Te!==Pe&&(Te=Pe,ce&&(Pe=1-Pe),i.clearDepth(Pe))},reset:function(){X=!1,ie=null,we=null,Te=null,ce=!1}}}function s(){let X=!1,ce=null,ie=null,we=null,Te=null,Pe=null,$e=null,pt=null,Me=null;return{setTest:function(je){X||(je?pe(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(je){ce!==je&&!X&&(i.stencilMask(je),ce=je)},setFunc:function(je,rt,De){(ie!==je||we!==rt||Te!==De)&&(i.stencilFunc(je,rt,De),ie=je,we=rt,Te=De)},setOp:function(je,rt,De){(Pe!==je||$e!==rt||pt!==De)&&(i.stencilOp(je,rt,De),Pe=je,$e=rt,pt=De)},setLocked:function(je){X=je},setClear:function(je){Me!==je&&(i.clearStencil(je),Me=je)},reset:function(){X=!1,ce=null,ie=null,we=null,Te=null,Pe=null,$e=null,pt=null,Me=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],b=null,g=!1,m=null,y=null,_=null,M=null,E=null,S=null,x=null,v=new fe(0,0,0),F=0,w=!1,H=null,q=null,C=null,T=null,U=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,V=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),I=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),I=V>=2);let N=null,O={},J=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),z=new Ft().fromArray(J),ee=new Ft().fromArray(se);function oe(X,ce,ie,we){let Te=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(X,Pe),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<ie;$e++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ce+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return Pe}let me={};me[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),a.setFunc(Lr),Ee(!1),ve(Hh),pe(i.CULL_FACE),le(Pn);function pe(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function Fe(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function Xe(X,ce){return d[X]!==ce?(i.bindFramebuffer(X,ce),d[X]=ce,X===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),X===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ue(X,ce){let ie=p,we=!1;if(X){ie=f.get(ce),ie===void 0&&(ie=[],f.set(ce,ie));let Te=X.textures;if(ie.length!==Te.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,$e=Te.length;Pe<$e;Pe++)ie[Pe]=i.COLOR_ATTACHMENT0+Pe;ie.length=Te.length,we=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,we=!0);we&&i.drawBuffers(ie)}function Qe(X){return b!==X?(i.useProgram(X),b=X,!0):!1}let ge={[Mi]:i.FUNC_ADD,[Ap]:i.FUNC_SUBTRACT,[Rp]:i.FUNC_REVERSE_SUBTRACT};ge[Pp]=i.MIN,ge[wp]=i.MAX;let B={[nr]:i.ZERO,[Lp]:i.ONE,[Ip]:i.SRC_COLOR,[Oh]:i.SRC_ALPHA,[Np]:i.SRC_ALPHA_SATURATE,[vo]:i.DST_COLOR,[Mo]:i.DST_ALPHA,[Fp]:i.ONE_MINUS_SRC_COLOR,[Xh]:i.ONE_MINUS_SRC_ALPHA,[kp]:i.ONE_MINUS_DST_COLOR,[Dp]:i.ONE_MINUS_DST_ALPHA,[Cp]:i.CONSTANT_COLOR,[Up]:i.ONE_MINUS_CONSTANT_COLOR,[Bp]:i.CONSTANT_ALPHA,[Hp]:i.ONE_MINUS_CONSTANT_ALPHA};function le(X,ce,ie,we,Te,Pe,$e,pt,Me,je){if(X===Pn){g===!0&&(Fe(i.BLEND),g=!1);return}if(g===!1&&(pe(i.BLEND),g=!0),X!==hc){if(X!==m||je!==w){if((y!==Mi||E!==Mi)&&(i.blendEquation(i.FUNC_ADD),y=Mi,E=Mi),je)switch(X){case Jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yo:i.blendFunc(i.ONE,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",X);break}else switch(X){case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gh:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qh:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",X);break}_=null,M=null,S=null,x=null,v.set(0,0,0),F=0,m=X,w=je}return}Te=Te||ce,Pe=Pe||ie,$e=$e||we,(ce!==y||Te!==E)&&(i.blendEquationSeparate(ge[ce],ge[Te]),y=ce,E=Te),(ie!==_||we!==M||Pe!==S||$e!==x)&&(i.blendFuncSeparate(B[ie],B[we],B[Pe],B[$e]),_=ie,M=we,S=Pe,x=$e),(pt.equals(v)===!1||Me!==F)&&(i.blendColor(pt.r,pt.g,pt.b,Me),v.copy(pt),F=Me),m=X,w=!1}function he(X,ce){X.side===Jt?Fe(i.CULL_FACE):pe(i.CULL_FACE);let ie=X.side===Sn;ce&&(ie=!ie),Ee(ie),X.blending===Jr&&X.transparent===!1?le(Pn):le(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),r.setMask(X.colorWrite);let we=X.stencilWrite;o.setTest(we),we&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Oe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(X){H!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),H=X)}function ve(X){X!==Sp?(pe(i.CULL_FACE),X!==q&&(X===Hh?i.cullFace(i.BACK):X===Tp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),q=X}function Be(X){X!==C&&(I&&i.lineWidth(X),C=X)}function Oe(X,ce,ie){X?(pe(i.POLYGON_OFFSET_FILL),(T!==ce||U!==ie)&&(T=ce,U=ie,a.getReversed()&&(ce=-ce,ie=-ie),i.polygonOffset(ce,ie))):Fe(i.POLYGON_OFFSET_FILL)}function ft(X){X?pe(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function ut(X){X===void 0&&(X=i.TEXTURE0+P-1),N!==X&&(i.activeTexture(X),N=X)}function et(X,ce,ie){ie===void 0&&(N===null?ie=i.TEXTURE0+P-1:ie=N);let we=O[ie];we===void 0&&(we={type:void 0,texture:void 0},O[ie]=we),(we.type!==X||we.texture!==ce)&&(N!==ie&&(i.activeTexture(ie),N=ie),i.bindTexture(X,ce||me[X]),we.type=X,we.texture=ce)}function $(){let X=O[N];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ot(){try{i.compressedTexImage2D(...arguments)}catch(X){it("WebGLState:",X)}}function ht(){try{i.compressedTexImage3D(...arguments)}catch(X){it("WebGLState:",X)}}function It(){try{i.texSubImage2D(...arguments)}catch(X){it("WebGLState:",X)}}function ae(){try{i.texSubImage3D(...arguments)}catch(X){it("WebGLState:",X)}}function Rt(){try{i.compressedTexSubImage2D(...arguments)}catch(X){it("WebGLState:",X)}}function Ve(){try{i.compressedTexSubImage3D(...arguments)}catch(X){it("WebGLState:",X)}}function Je(){try{i.texStorage2D(...arguments)}catch(X){it("WebGLState:",X)}}function D(){try{i.texStorage3D(...arguments)}catch(X){it("WebGLState:",X)}}function A(){try{i.texImage2D(...arguments)}catch(X){it("WebGLState:",X)}}function j(){try{i.texImage3D(...arguments)}catch(X){it("WebGLState:",X)}}function xe(X){return h[X]!==void 0?h[X]:i.getParameter(X)}function ue(X,ce){h[X]!==ce&&(i.pixelStorei(X,ce),h[X]=ce)}function _e(X){z.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),z.copy(X))}function Ae(X){ee.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),ee.copy(X))}function re(X,ce){let ie=c.get(ce);ie===void 0&&(ie=new WeakMap,c.set(ce,ie));let we=ie.get(X);we===void 0&&(we=i.getUniformBlockIndex(ce,X.name),i.uniformBlockBinding(ce,we,we),ie.set(X,we))}function ne(X,ce,ie){let Te=c.get(ce).get(X);l[Te]!==ie&&(i.bindBufferBase(i.UNIFORM_BUFFER,Te,ie),l[Te]=ie)}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},N=null,O={},d={},l={},f=new WeakMap,p=[],b=null,g=!1,m=null,y=null,_=null,M=null,E=null,S=null,x=null,v=new fe(0,0,0),F=0,w=!1,H=null,q=null,C=null,T=null,U=null,z.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pe,disable:Fe,bindFramebuffer:Xe,drawBuffers:Ue,useProgram:Qe,setBlending:le,setMaterial:he,setFlipSided:Ee,setCullFace:ve,setLineWidth:Be,setPolygonOffset:Oe,setScissorTest:ft,activeTexture:ut,bindTexture:et,unbindTexture:$,compressedTexImage2D:Ot,compressedTexImage3D:ht,texImage2D:A,texImage3D:j,pixelStorei:ue,getParameter:xe,updateUBOMapping:re,uniformBlockBinding:ne,texStorage2D:Je,texStorage3D:D,texSubImage2D:It,texSubImage3D:ae,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ve,scissor:_e,viewport:Ae,reset:Se}}function kv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap,h=new Set,d,f=new WeakMap,p=new Set,b=new FinalizationRegistry(D=>p.delete(D)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,A){return g?new OffscreenCanvas(D,A):Dr("canvas")}function y(D,A,j){let xe=1,ue=Je(D);if((ue.width>j||ue.height>j)&&(xe=j/Math.max(ue.width,ue.height)),xe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let _e=Math.floor(xe*ue.width),Ae=Math.floor(xe*ue.height);d===void 0&&(d=m(_e,Ae));let re=A?m(_e,Ae):d;return re.width=_e,re.height=Ae,re.getContext("2d").drawImage(D,0,0,_e,Ae),ze("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+_e+"x"+Ae+")."),re}else return"data"in D&&ze("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),D;return D}function _(D){return D.generateMipmaps}function M(D){i.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(D,A,j,xe,ue,_e=!1){if(D!==null){if(i[D]!==void 0)return i[D];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ae;xe&&(Ae=e.get("EXT_texture_norm16"),Ae||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=A;if(A===i.RED&&(j===i.FLOAT&&(re=i.R32F),j===i.HALF_FLOAT&&(re=i.R16F),j===i.UNSIGNED_BYTE&&(re=i.R8),j===i.UNSIGNED_SHORT&&Ae&&(re=Ae.R16_EXT),j===i.SHORT&&Ae&&(re=Ae.R16_SNORM_EXT)),A===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(re=i.R8UI),j===i.UNSIGNED_SHORT&&(re=i.R16UI),j===i.UNSIGNED_INT&&(re=i.R32UI),j===i.BYTE&&(re=i.R8I),j===i.SHORT&&(re=i.R16I),j===i.INT&&(re=i.R32I)),A===i.RG&&(j===i.FLOAT&&(re=i.RG32F),j===i.HALF_FLOAT&&(re=i.RG16F),j===i.UNSIGNED_BYTE&&(re=i.RG8),j===i.UNSIGNED_SHORT&&Ae&&(re=Ae.RG16_EXT),j===i.SHORT&&Ae&&(re=Ae.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(re=i.RG8UI),j===i.UNSIGNED_SHORT&&(re=i.RG16UI),j===i.UNSIGNED_INT&&(re=i.RG32UI),j===i.BYTE&&(re=i.RG8I),j===i.SHORT&&(re=i.RG16I),j===i.INT&&(re=i.RG32I)),A===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(re=i.RGB8UI),j===i.UNSIGNED_SHORT&&(re=i.RGB16UI),j===i.UNSIGNED_INT&&(re=i.RGB32UI),j===i.BYTE&&(re=i.RGB8I),j===i.SHORT&&(re=i.RGB16I),j===i.INT&&(re=i.RGB32I)),A===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),j===i.UNSIGNED_INT&&(re=i.RGBA32UI),j===i.BYTE&&(re=i.RGBA8I),j===i.SHORT&&(re=i.RGBA16I),j===i.INT&&(re=i.RGBA32I)),A===i.RGB&&(j===i.UNSIGNED_SHORT&&Ae&&(re=Ae.RGB16_EXT),j===i.SHORT&&Ae&&(re=Ae.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),A===i.RGBA){let ne=_e?Ba:gt.getTransfer(ue);j===i.FLOAT&&(re=i.RGBA32F),j===i.HALF_FLOAT&&(re=i.RGBA16F),j===i.UNSIGNED_BYTE&&(re=ne===kt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&Ae&&(re=Ae.RGBA16_EXT),j===i.SHORT&&Ae&&(re=Ae.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(D,A){let j;return D?A===null||A===wi||A===ds?j=i.DEPTH24_STENCIL8:A===di?j=i.DEPTH32F_STENCIL8:A===Kr&&(j=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===wi||A===ds?j=i.DEPTH_COMPONENT24:A===di?j=i.DEPTH_COMPONENT32F:A===Kr&&(j=i.DEPTH_COMPONENT16),j}function v(D,A){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==Wt&&D.minFilter!==Mn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function F(D){let A=new WeakRef(D);n.get(D).__ref=A,p.add(A),b.register(D,A,A)}function w(D){let A=n.get(D).__ref;A!==void 0&&(p.delete(A),b.unregister(A))}function H(D){C(D.target)}function q(D){T(D.target)}function C(D){D.removeEventListener("dispose",H),w(D),P(D),D.isVideoTexture&&u.delete(D),D.isHTMLTexture&&h.delete(D)}function T(D){D.removeEventListener("dispose",q),w(D),V(D)}function U(){for(let D of p){let A=D.deref();A!==void 0&&(A.isRenderTarget===!0?T(A):C(A))}p.clear(),h.clear()}function P(D){let A=n.get(D);if(A.__webglInit===void 0)return;let j=D.source,xe=f.get(j);if(xe){let ue=xe[A.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&I(D),Object.keys(xe).length===0&&f.delete(j)}n.remove(D)}function I(D){let A=n.get(D);i.deleteTexture(A.__webglTexture);let j=D.source,xe=f.get(j);delete xe[A.__cacheKey],a.memory.textures--}function V(D){let A=n.get(D);A.__depthDisposeCallback&&A.__depthDisposeCallback();let j=D.depthTexture;if(j&&j.renderTarget===D&&C(j),D.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(A.__webglFramebuffer[ue]))for(let _e=0;_e<A.__webglFramebuffer[ue].length;_e++)i.deleteFramebuffer(A.__webglFramebuffer[ue][_e]);else i.deleteFramebuffer(A.__webglFramebuffer[ue]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ue])}else{if(Array.isArray(A.__webglFramebuffer))for(let ue=0;ue<A.__webglFramebuffer.length;ue++)i.deleteFramebuffer(A.__webglFramebuffer[ue]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ue=0;ue<A.__webglColorRenderbuffer.length;ue++)A.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ue]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let xe=D.textures;for(let ue=0,_e=xe.length;ue<_e;ue++){let Ae=n.get(xe[ue]);Ae.__webglTexture&&(i.deleteTexture(Ae.__webglTexture),a.memory.textures--),n.remove(xe[ue])}n.remove(D)}let G=0;function N(){G=0}function O(){return G}function J(D){G=D}function se(){let D=G;return D>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,D}function z(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.mipmapsAutoUpdate),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function ee(D,A){let j=n.get(D);if(D.isVideoTexture&&Rt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&j.__version!==D.version){let xe=D.image;if(xe===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{he(j,D,A);return}}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+A)}function oe(D,A){let j=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){he(j,D,A);return}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+A)}function me(D,A){let j=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){he(j,D,A);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+A)}function pe(D,A){let j=n.get(D);if(D.version>0&&j.__version!==D.version){Ee(j,D,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+A)}let Fe={[Yt]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},Xe={[Wt]:i.NEAREST,[pc]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},Ue={[Qp]:i.NEVER,[td]:i.ALWAYS,[zp]:i.LESS,[Zh]:i.LEQUAL,[Jp]:i.EQUAL,[ed]:i.GEQUAL,[jp]:i.GREATER,[Wp]:i.NOTEQUAL};function Qe(D,A){if(A.type===di&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Mn||A.magFilter===Wr||A.magFilter===rr||A.magFilter===ni||A.minFilter===Mn||A.minFilter===Wr||A.minFilter===rr||A.minFilter===ni)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Fe[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Fe[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Fe[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Xe[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Xe[A.minFilter]),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Ue[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Wt||A.minFilter!==rr&&A.minFilter!==ni||A.type===di&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ge(D,A){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",H),F(A));let xe=A.source,ue=f.get(xe);ue===void 0&&(ue={},f.set(xe,ue));let _e=z(A);if(_e!==D.__cacheKey){ue[_e]===void 0&&(ue[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ue[_e].usedTimes++;let Ae=ue[D.__cacheKey];Ae!==void 0&&(ue[D.__cacheKey].usedTimes--,Ae.usedTimes===0&&I(A)),D.__cacheKey=_e,D.__webglTexture=ue[_e].texture}return j}function B(D,A,j){return Math.floor(Math.floor(D/j)/A)}function le(D,A,j,xe){let _e=D.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,j,xe,A.data);else{_e.sort((X,ce)=>X.start-ce.start);let Ae=0;for(let X=1;X<_e.length;X++){let ce=_e[Ae],ie=_e[X],we=ce.start+ce.count,Te=B(ie.start,A.width,4),Pe=B(ce.start,A.width,4);ie.start<=we+1&&Te===Pe&&B(ie.start+ie.count-1,A.width,4)===Te?ce.count=Math.max(ce.count,ie.start+ie.count-ce.start):(++Ae,_e[Ae]=ie)}_e.length=Ae+1;let re=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let X=0,ce=_e.length;X<ce;X++){let ie=_e[X],we=Math.floor(ie.start/4),Te=Math.ceil(ie.count/4),Pe=we%A.width,$e=Math.floor(we/A.width),pt=Te,Me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(i.TEXTURE_2D,0,Pe,$e,pt,Me,j,xe,A.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,re),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function he(D,A,j){let xe=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=i.TEXTURE_3D);let ue=ge(D,A),_e=A.source;t.bindTexture(xe,D.__webglTexture,i.TEXTURE0+j);let Ae=n.get(_e);if(_e.version!==Ae.__version||ue===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let Me=gt.getPrimaries(gt.workingColorSpace),je=A.colorSpace===fs?null:gt.getPrimaries(A.colorSpace),rt=A.colorSpace===fs||Me===je?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let ne=y(A.image,!1,s.maxTextureSize);ne=Ve(A,ne);let Se=r.convert(A.format,A.colorSpace),X=r.convert(A.type),ce=S(A.internalFormat,Se,X,A.normalized,A.colorSpace,A.isVideoTexture);Qe(xe,A);let ie,we=A.mipmaps,Te=A.isVideoTexture!==!0,Pe=Ae.__version===void 0||ue===!0,$e=_e.dataReady,pt=v(A,ne);if(A.isDepthTexture)ce=x(A.format===Li,A.type),Pe&&(Te?t.texStorage2D(i.TEXTURE_2D,1,ce,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ce,ne.width,ne.height,0,Se,X,null));else if(A.isDataTexture)if(we.length>0){Te&&Pe&&t.texStorage2D(i.TEXTURE_2D,pt,ce,we[0].width,we[0].height);for(let Me=0,je=we.length;Me<je;Me++)ie=we[Me],Te?$e&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ie.width,ie.height,Se,X,ie.data):t.texImage2D(i.TEXTURE_2D,Me,ce,ie.width,ie.height,0,Se,X,ie.data);A.generateMipmaps=!1}else Te?(Pe&&t.texStorage2D(i.TEXTURE_2D,pt,ce,ne.width,ne.height),$e&&le(A,ne,Se,X)):t.texImage2D(i.TEXTURE_2D,0,ce,ne.width,ne.height,0,Se,X,ne.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Te&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ce,we[0].width,we[0].height,ne.depth);for(let Me=0,je=we.length;Me<je;Me++)if(ie=we[Me],A.format!==ii)if(Se!==null)if(Te){if($e)if(A.layerUpdates.size>0){let rt=dd(ie.width,ie.height,A.format,A.type);for(let De of A.layerUpdates){let Ke=ie.data.subarray(De*rt/ie.data.BYTES_PER_ELEMENT,(De+1)*rt/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,De,ie.width,ie.height,1,Se,Ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ie.width,ie.height,ne.depth,Se,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,ce,ie.width,ie.height,ne.depth,0,ie.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?$e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ie.width,ie.height,ne.depth,Se,X,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,ce,ie.width,ie.height,ne.depth,0,Se,X,ie.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Te&&Pe&&t.texStorage2D(i.TEXTURE_2D,pt,ce,we[0].width,we[0].height);for(let Me=0,je=we.length;Me<je;Me++)ie=we[Me],A.format!==ii?Se!==null?Te?$e&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,ie.width,ie.height,Se,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,ce,ie.width,ie.height,0,ie.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?$e&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ie.width,ie.height,Se,X,ie.data):t.texImage2D(i.TEXTURE_2D,Me,ce,ie.width,ie.height,0,Se,X,ie.data)}else if(A.isDataArrayTexture)if(Te){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ce,ne.width,ne.height,ne.depth),$e)if(A.layerUpdates.size>0){let Me=dd(ne.width,ne.height,A.format,A.type);for(let je of A.layerUpdates){let rt=ne.data.subarray(je*Me/ne.data.BYTES_PER_ELEMENT,(je+1)*Me/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,je,ne.width,ne.height,1,Se,X,rt)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Se,X,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,ne.width,ne.height,ne.depth,0,Se,X,ne.data);else if(A.isData3DTexture)Te?(Pe&&t.texStorage3D(i.TEXTURE_3D,pt,ce,ne.width,ne.height,ne.depth),$e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Se,X,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ce,ne.width,ne.height,ne.depth,0,Se,X,ne.data);else if(A.isFramebufferTexture){if(Pe)if(Te)t.texStorage2D(i.TEXTURE_2D,pt,ce,ne.width,ne.height);else{let Me=ne.width,je=ne.height;for(let rt=0;rt<pt;rt++)t.texImage2D(i.TEXTURE_2D,rt,ce,Me,je,0,Se,X,null),Me>>=1,je>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let Me=i.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ne.parentNode!==Me){Me.appendChild(ne),h.add(A),Me.onpaint=je=>{let rt=je.changedElements;for(let De of h)rt.includes(De.image)&&(De.needsUpdate=!0)},Me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let rt=i.RGBA,De=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,rt,De,Ke,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(we.length>0){if(Te&&Pe){let Me=Je(we[0]);t.texStorage2D(i.TEXTURE_2D,pt,ce,Me.width,Me.height)}for(let Me=0,je=we.length;Me<je;Me++)ie=we[Me],Te?$e&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Se,X,ie):t.texImage2D(i.TEXTURE_2D,Me,ce,Se,X,ie);A.generateMipmaps=!1}else if(Te){if(Pe){let Me=Je(ne);t.texStorage2D(i.TEXTURE_2D,pt,ce,Me.width,Me.height)}$e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,X,ne)}else t.texImage2D(i.TEXTURE_2D,0,ce,Se,X,ne);_(A)&&A.mipmapsAutoUpdate===!0&&M(xe),Ae.__version=_e.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Ee(D,A,j){if(A.image.length!==6)return;let xe=ge(D,A),ue=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+j);let _e=n.get(ue);if(ue.version!==_e.__version||xe===!0){t.activeTexture(i.TEXTURE0+j);let Ae=gt.getPrimaries(gt.workingColorSpace),re=A.colorSpace===fs?null:gt.getPrimaries(A.colorSpace),ne=A.colorSpace===fs||Ae===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Se=A.isCompressedTexture||A.image[0].isCompressedTexture,X=A.image[0]&&A.image[0].isDataTexture,ce=[];for(let De=0;De<6;De++)!Se&&!X?ce[De]=y(A.image[De],!0,s.maxCubemapSize):ce[De]=X?A.image[De].image:A.image[De],ce[De]=Ve(A,ce[De]);let ie=ce[0],we=r.convert(A.format,A.colorSpace),Te=r.convert(A.type),Pe=S(A.internalFormat,we,Te,A.normalized,A.colorSpace),$e=A.isVideoTexture!==!0,pt=_e.__version===void 0||xe===!0,Me=ue.dataReady,je=v(A,ie);Qe(i.TEXTURE_CUBE_MAP,A);let rt;if(A.isDepthTexture){if(Pe=x(A.format===Li,A.type),pt)if($e)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pe,ie.width,ie.height);else for(let De=0;De<6;De++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Pe,ie.width,ie.height,0,we,Te,null)}else if(Se){$e&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,je,Pe,ie.width,ie.height);for(let De=0;De<6;De++){rt=ce[De].mipmaps;for(let Ke=0;Ke<rt.length;Ke++){let hn=rt[Ke];A.format!==ii?we!==null?$e?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ke,0,0,hn.width,hn.height,we,hn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ke,Pe,hn.width,hn.height,0,hn.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ke,0,0,hn.width,hn.height,we,Te,hn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ke,Pe,hn.width,hn.height,0,we,Te,hn.data)}}}else{if(rt=A.mipmaps,$e&&pt){rt.length>0&&je++;let De=Je(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,je,Pe,De.width,De.height)}for(let De=0;De<6;De++)if(X){$e?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,ce[De].width,ce[De].height,we,Te,ce[De].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Pe,ce[De].width,ce[De].height,0,we,Te,ce[De].data);for(let Ke=0;Ke<rt.length;Ke++){let si=rt[Ke].image[De].image;$e?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ke+1,0,0,si.width,si.height,we,Te,si.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ke+1,Pe,si.width,si.height,0,we,Te,si.data)}}else{$e?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,we,Te,ce[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Pe,we,Te,ce[De]);for(let Ke=0;Ke<rt.length;Ke++){let hn=rt[Ke];$e?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ke+1,0,0,we,Te,hn.image[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ke+1,Pe,we,Te,hn.image[De])}}}_(A)&&A.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),_e.__version=ue.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ve(D,A,j,xe,ue,_e){let Ae=r.convert(j.format,j.colorSpace),re=r.convert(j.type),ne=S(j.internalFormat,Ae,re,j.normalized,j.colorSpace),Se=n.get(A),X=n.get(j);if(X.__renderTarget=A,!Se.__hasExternalTextures){let ce=Math.max(1,A.width>>_e),ie=Math.max(1,A.height>>_e);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,_e,ne,ce,ie,A.depth,0,Ae,re,null):t.texImage2D(ue,_e,ne,ce,ie,0,Ae,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ae(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ue,X.__webglTexture,0,It(A)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,ue,X.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(D,A,j){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer){let xe=A.depthTexture,ue=xe&&xe.isDepthTexture?xe.type:null,_e=x(A.stencilBuffer,ue),Ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ae(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(A),_e,A.width,A.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(A),_e,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,_e,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,D)}else{let xe=A.textures;for(let ue=0;ue<xe.length;ue++){let _e=xe[ue],Ae=r.convert(_e.format,_e.colorSpace),re=r.convert(_e.type),ne=S(_e.internalFormat,Ae,re,_e.normalized,_e.colorSpace);ae(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(A),ne,A.width,A.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(A),ne,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ne,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(D,A,j){let xe=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=n.get(A.depthTexture);ue.__renderTarget=A;let _e=xe?A.depthTexture.image[0]:A.depthTexture.image;(!ue.__webglTexture||_e.width!==A.width||_e.height!==A.height)&&(_e.width=A.width,_e.height=A.height,A.depthTexture.needsUpdate=!0),xe?pe(A.depthTexture,0):ee(A.depthTexture,0);let Ae=ue.__webglTexture,re=It(A),ne=xe?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,Se=A.depthTexture.format===Li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===ss)ae(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,ne,Ae,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Se,ne,Ae,0);else if(A.depthTexture.format===Li)ae(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,ne,Ae,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Se,ne,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(D){let A=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){let xe=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xe){let ue=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xe.removeEventListener("dispose",ue)};xe.addEventListener("dispose",ue),A.__depthDisposeCallback=ue}A.__boundDepthTexture=xe}if(D.depthTexture&&!A.__autoAllocateDepthBuffer)if(j)for(let xe=0;xe<6;xe++)Oe(A.__webglFramebuffer[xe],D,xe);else D.texture.mipmaps.length>0?Oe(A.__webglFramebuffer[0],D,0):Oe(A.__webglFramebuffer,D,0);else if(j){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]===void 0)A.__webglDepthbuffer[xe]=i.createRenderbuffer(),Be(A.__webglDepthbuffer[xe],D,!1);else{let ue=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer[xe];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,_e)}}else if(D.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Be(A.__webglDepthbuffer,D,!1);else{let ue=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(D,A,j){let xe=n.get(D);A!==void 0&&ve(xe.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ft(D)}function et(D){let A=D.texture,j=n.get(D),xe=n.get(A);D.addEventListener("dispose",q),F(D);let ue=D.textures,_e=D.isWebGLCubeRenderTarget===!0,Ae=ue.length>1;if(Ae||(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=A.version,a.memory.textures++),_e){j.__webglFramebuffer=[];for(let re=0;re<6;re++)if(A.mipmaps.length>0){j.__webglFramebuffer[re]=[];for(let ne=0;ne<A.mipmaps.length;ne++)j.__webglFramebuffer[re][ne]=i.createFramebuffer()}else j.__webglFramebuffer[re]=i.createFramebuffer()}else{if(A.mipmaps.length>0){j.__webglFramebuffer=[];for(let re=0;re<A.mipmaps.length;re++)j.__webglFramebuffer[re]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let re=0,ne=ue.length;re<ne;re++){let Se=n.get(ue[re]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&ae(D)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let re=0;re<ue.length;re++){let ne=ue[re];j.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[re]);let Se=r.convert(ne.format,ne.colorSpace),X=r.convert(ne.type),ce=S(ne.internalFormat,Se,X,ne.normalized,ne.colorSpace,D.isXRRenderTarget===!0),ie=It(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ce,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,j.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,A);for(let re=0;re<6;re++)if(A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)ve(j.__webglFramebuffer[re][ne],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ne);else ve(j.__webglFramebuffer[re],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);_(A)?M(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let re=0,ne=ue.length;re<ne;re++){let Se=ue[re],X=n.get(Se),ce=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,X.__webglTexture),Qe(ce,Se),ve(j.__webglFramebuffer,D,Se,i.COLOR_ATTACHMENT0+re,ce,0),_(Se)&&M(ce)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(re=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,xe.__webglTexture),Qe(re,A),A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)ve(j.__webglFramebuffer[ne],D,A,i.COLOR_ATTACHMENT0,re,ne);else ve(j.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,re,0);_(A)?M(re):A.mipmaps.length>0&&i.texParameteri(re,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}D.depthBuffer&&ft(D)}function $(D){let A=D.textures;for(let j=0,xe=A.length;j<xe;j++){let ue=A[j];if(_(ue)&&ue.mipmapsAutoUpdate===!0){let _e=E(D),Ae=n.get(ue).__webglTexture;t.bindTexture(_e,Ae),M(_e),t.unbindTexture()}}}let Ot=[];function ht(D){if(D.samples>0){if(ae(D)===!1){let A=D.textures,j=D.width,xe=D.height,ue=i.COLOR_BUFFER_BIT,_e=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(D),re=A.length>1;if(re)for(let Se=0;Se<A.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Se=0;Se<A.length;Se++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);let X=n.get(A[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,X,0)}i.blitFramebuffer(0,0,j,xe,0,0,j,xe,ue,i.NEAREST),l===!0&&(Ot.length=0,Ot.push(i.COLOR_ATTACHMENT0+Se),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&Ot.push(_e),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Se=0;Se<A.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);let X=n.get(A[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,X,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let A=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function It(D){return Math.min(s.maxSamples,D.samples)}function ae(D){let A=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Rt(D){let A=a.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function Ve(D,A){let j=D.colorSpace,xe=D.format,ue=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==vn&&j!==fs&&(gt.getTransfer(j)===kt?(xe!==ii||ue!==Gn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",j)),A}function Je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=se,this.resetTextureUnits=N,this.getTextureUnits=O,this.setTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=oe,this.setTexture3D=me,this.setTextureCube=pe,this.rebindTextures=ut,this.setupRenderTarget=et,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ae,this.dispose=U}function Nv(i,e){function t(n,s=fs){let r,a=gt.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yh)return i.BYTE;if(n===$h)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===mc)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===Jh)return i.ALPHA;if(n===jh)return i.RGB;if(n===ii)return i.RGBA;if(n===ss)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===yc)return i.RED_INTEGER;if(n===Ds)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===vc)return i.RGBA_INTEGER;if(n===wo||n===Lo||n===Io||n===Fo)if(a===kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_c||n===Sc||n===Tc||n===Ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Rc||n===Pc||n===wc||n===Lc||n===Do||n===Ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Rc)return a===kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wc)return r.COMPRESSED_R11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Do)return r.COMPRESSED_RG11_EAC;if(n===Ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fc||n===Dc||n===kc||n===Nc||n===Cc||n===Uc||n===Bc||n===Hc||n===Gc||n===qc||n===Oc||n===Xc||n===Vc||n===Yc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$c||n===Qc||n===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$c)return a===kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jc||n===jc||n===ko||n===Wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ad=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ja(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qt({vertexShader:Cv,fragmentShader:Uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rd=class extends Ni{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,b=typeof XRWebGLBinding<"u",g=new Ad,m={},y=t.getContextAttributes(),_=null,M=null,E=[],S=[],x=new de,v=null,F=null,w=new en;w.viewport=new Ft;let H=new en;H.viewport=new Ft;let q=[w,H],C=new cc,T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let ee=E[z];return ee===void 0&&(ee=new Ur,E[z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(z){let ee=E[z];return ee===void 0&&(ee=new Ur,E[z]=ee),ee.getGripSpace()},this.getHand=function(z){let ee=E[z];return ee===void 0&&(ee=new Ur,E[z]=ee),ee.getHandSpace()};function P(z){let ee=S.indexOf(z.inputSource);if(ee===-1)return;let oe=E[ee];oe!==void 0&&(oe.update(z.inputSource,z.frame,c||a),oe.dispatchEvent({type:z.type,data:z.inputSource}))}function I(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",V);for(let z=0;z<E.length;z++){let ee=S[z];ee!==null&&(S[z]=null,E[z].disconnect(ee))}T=null,U=null,g.reset();for(let z in m)delete m[z];if(e.setRenderTarget(_),f=null,d=null,h=null,s=null,M=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(x.width,x.height,!1),F!==null){let z=F.camera;z.fov=F.fov,z.zoom=F.zoom,z.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",I),s.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,me=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?Li:ss,me=y.stencil?ds:wi);let Fe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Kt(d.textureWidth,d.textureHeight,{format:ii,type:Gn,depthTexture:new Pi(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Kt(f.framebufferWidth,f.framebufferHeight,{format:ii,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(z){for(let ee=0;ee<z.removed.length;ee++){let oe=z.removed[ee],me=S.indexOf(oe);me>=0&&(S[me]=null,E[me].disconnect(oe))}for(let ee=0;ee<z.added.length;ee++){let oe=z.added[ee],me=S.indexOf(oe);if(me===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=S.length){S.push(oe),me=Fe;break}else if(S[Fe]===null){S[Fe]=oe,me=Fe;break}if(me===-1)break}let pe=E[me];pe&&pe.connect(oe)}}function G(z,ee){ee===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ee.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let ee=z.near,oe=z.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),C.near=H.near=w.near=ee,C.far=H.far=w.far=oe,(T!==C.near||U!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),T=C.near,U=C.far),C.layers.mask=z.layers.mask|6,w.layers.mask=C.layers.mask&-5,H.layers.mask=C.layers.mask&-3;let me=z.parent,pe=C.cameras;G(C,me);for(let Fe=0;Fe<pe.length;Fe++)G(pe[Fe],me);C.projectionMatrix.copy(w.projectionMatrix),C.projectionMatrixInverse.copy(w.projectionMatrixInverse),F===null&&z.isPerspectiveCamera&&(F={camera:z,fov:z.fov,zoom:z.zoom}),N(z,C,me)};function N(z,ee,oe){oe===null?z.matrix.copy(ee.matrixWorld):(z.matrix.copy(oe.matrixWorld),z.matrix.invert(),z.matrix.multiply(ee.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(ee.projectionMatrix),z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=zs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(z){return m[z]};let O=null;function J(z,ee){if(u=ee.getViewerPose(c||a),p=ee,u!==null){let oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let me=!1;oe.length!==C.cameras.length&&(C.cameras.length=0,me=!0);for(let Ue=0;Ue<oe.length;Ue++){let Qe=oe[Ue],ge=null;if(f!==null)ge=f.getViewport(Qe);else{let le=h.getViewSubImage(d,Qe);ge=le.viewport,Ue===0&&(e.setRenderTargetTextures(M,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(M))}let B=q[Ue];B===void 0&&(B=new en,B.layers.enable(Ue),B.viewport=new Ft,q[Ue]=B),B.matrix.fromArray(Qe.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Qe.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(ge.x,ge.y,ge.width,ge.height),Ue===0&&(C.matrix.copy(B.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),me===!0&&C.cameras.push(B)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=n.getBinding();let Ue=h.getDepthInformation(oe[0]);Ue&&Ue.isValid&&Ue.texture&&g.init(Ue,s.renderState)}if(pe&&pe.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let Ue=0;Ue<oe.length;Ue++){let Qe=oe[Ue].camera;if(Qe){let ge=m[Qe];ge||(ge=new Ja,m[Qe]=ge);let B=h.getCameraImage(Qe);ge.sourceTexture=B}}}}for(let oe=0;oe<E.length;oe++){let me=S[oe],pe=E[oe];me!==null&&pe!==void 0&&pe.update(me,ee,c||a)}O&&O(z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let se=new L0;se.setAnimationLoop(J),this.setAnimationLoop=function(z){O=z},this.dispose=function(){}}},Bv=new We,G0=new ct;G0.set(-1,0,0,0,1,0,0,0,1);function Hv(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,cd(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,_,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),b(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),_=y.envMap,M=y.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(Bv.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(G0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gv(i,e,t,n){let s={},r={};function a(y,_){let M=_.program;n.uniformBlockBinding(y,M,s[y.id])}function o(y,_){let M=s[y.id];M===void 0&&(p(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",g));let E=_.program;n.updateUBOMapping(y,E);let S=e.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function l(y){let _=i.createBuffer(),M=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),_}function c(y){let _=s[y.id],M=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,x=M.length;S<x;S++){let v=M[S];if(Array.isArray(v))for(let F=0,w=v.length;F<w;F++)u(v[F],S,F,E);else u(v,S,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,_,M,E){if(d(y,_,M,E)===!0){let S=y.__offset,x=y.value;if(Array.isArray(x)){let v=0;for(let F=0;F<x.length;F++){let w=x[F],H=b(w,!0);h(w,y.__data,v),v+=H.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,y.__data)}}function h(y,_,M){typeof y=="number"||typeof y=="boolean"?_[M]=y:y.isMatrix3?(_[M]=y.elements[0],_[M+1]=y.elements[1],_[M+2]=y.elements[2],_[M+3]=0,_[M+4]=y.elements[3],_[M+5]=y.elements[4],_[M+6]=y.elements[5],_[M+7]=0,_[M+8]=y.elements[6],_[M+9]=y.elements[7],_[M+10]=y.elements[8],_[M+11]=0):ArrayBuffer.isView(y)?_.set(y.subarray(0,_.length-M),M):y.toArray(_,M)}function d(y,_,M,E){let S=y.value,x=_+"_"+M;if(Array.isArray(S)){E[x]===void 0&&(E[x]=[]);let v=E[x],F=!1;for(let w=0;w<S.length;w++)f(S[w],v,w)===!0&&(F=!0);return F}return f(S,E,x)}function f(y,_,M){if(_[M]===void 0)return typeof y=="number"||typeof y=="boolean"?_[M]=y:ArrayBuffer.isView(y)?_[M]=y.slice():_[M]=y.clone(),!0;{let E=_[M];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return _[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function p(y){let _=y.uniforms,M=0,E=16;for(let x=0,v=_.length;x<v;x++){let F=Array.isArray(_[x])?_[x]:[_[x]];for(let w=0,H=F.length;w<H;w++){let q=F[w],C=Array.isArray(q.value)?q.value:[q.value],T=Array.isArray(_[x])||Array.isArray(q.value),U=M;for(let I=0,V=C.length;I<V;I++){let G=C[I],N=b(G,T),O=M%E,J=O%N.boundary,se=O+J;M+=J,se!==0&&E-se<N.storage&&(M+=E-se),I===0&&(U=M),M+=N.storage}let P=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new P((M-U)/Float32Array.BYTES_PER_ELEMENT),q.__offset=U}}let S=M%E;return S>0&&(M+=E-S),y.__size=M,y.__cache={},this}function b(y,_){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",y),_===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(y){let _=y.target;_.removeEventListener("dispose",g),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:m}}var qv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function Ov(){return Gi===null&&(Gi=new Ci(qv,16,16,Ds,cn),Gi.name="DFG_LUT",Gi.minFilter=Mn,Gi.magFilter=Mn,Gi.wrapS=mi,Gi.wrapT=mi,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var nu=class{constructor(e={}){let{canvas:t=Kp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Gn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let b=f,g=new Set([vc,Mc,yc]),m=new Set([Gn,wi,Kr,ds,gc,xc]),y=new Uint32Array(4),_=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},E=null,S=null,x=[],v=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,H=!1,q=null,C=null,T=null,U=null;this._outputColorSpace=Et;let P=0,I=0,V=null,G=-1,N=null,O=new Ft,J=new Ft,se=null,z=new fe(0),ee=0,oe=t.width,me=t.height,pe=1,Fe=null,Xe=null,Ue=new Ft(0,0,oe,me),Qe=new Ft(0,0,oe,me),ge=!1,B=new ws,le=new $l,he=!1,Ee=!1,ve=new We,Be=new k,Oe=new Ft,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function et(){return V===null?pe:1}let $=n;function Ot(R,Y){return t.getContext(R,Y)}let ht,It,ae,Rt,Ve,Je,D,A,j,xe,ue,_e,Ae,re,ne,Se,X,ce,ie,we,Te,Pe,$e;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",De,!1),$===null){let Y="webgl2";if($=Ot(Y,R),$===null)throw Ot(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pt()}catch(R){throw t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",De,!1),it("WebGLRenderer: "+R.message),R}function pt(){ht=new Zy($),ht.init(),Te=new Nv($,ht),It=new Oy($,ht,e,Te),ae=new Dv($,ht),It.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),C=$.createFramebuffer(),T=$.createFramebuffer(),U=$.createFramebuffer(),Rt=new nM($),Ve=new yv,Je=new kv($,ht,ae,Ve,It,Te,Rt),D=new Ky(w),A=new sb($),Pe=new Gy($,A),j=new eM($,A,Rt,Pe),xe=new sM($,j,A,Pe,Rt),ce=new iM($,It,Je),ne=new Xy(Ve),ue=new bv(w,D,ht,It,Pe,ne),_e=new Hv(w,Ve),Ae=new vv,re=new Rv(ht),X=new Hy(w,D,ae,xe,p,l),Se=new Fv(w,xe,It),$e=new Gv($,Rt,It,ae),ie=new qy($,ht,Rt),we=new tM($,ht,Rt),Rt.programs=ue.programs,w.capabilities=It,w.extensions=ht,w.properties=Ve,w.renderLists=Ae,w.shadowMap=Se,w.state=ae,w.info=Rt}b!==Gn&&(F=new aM(b,t.width,t.height,o,s,r));let Me=new Rd(w,$);this.xr=Me,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(R){R!==void 0&&(pe=R,this.setSize(oe,me,!1))},this.getSize=function(R){return R.set(oe,me)},this.setSize=function(R,Y,te=!0){if(Me.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,me=Y,t.width=Math.floor(R*pe),t.height=Math.floor(Y*pe),te===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(oe*pe,me*pe).floor()},this.setDrawingBufferSize=function(R,Y,te){oe=R,me=Y,pe=te,t.width=Math.floor(R*te),t.height=Math.floor(Y*te),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(b===Gn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(Ue)},this.setViewport=function(R,Y,te,K){R.isVector4?Ue.set(R.x,R.y,R.z,R.w):Ue.set(R,Y,te,K),ae.viewport(O.copy(Ue).multiplyScalar(et()).round())},this.getScissor=function(R){return R.copy(Qe)},this.setScissor=function(R,Y,te,K){R.isVector4?Qe.set(R.x,R.y,R.z,R.w):Qe.set(R,Y,te,K),ae.scissor(J.copy(Qe).multiplyScalar(et()).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){ae.setScissorTest(ge=R)},this.setOpaqueSort=function(R){Fe=R},this.setTransparentSort=function(R){Xe=R},this.getClearColor=function(R){return R.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor(...arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,te=!0){let K=0;if(R){let Z=!1;if(V!==null){let Ie=V.texture.format;Z=g.has(Ie)}if(Z){let Ie=V.texture.type,He=m.has(Ie),Le=X.getClearColor(),Ne=X.getClearAlpha(),Ye=Le.r,st=Le.g,_t=Le.b;He?(y[0]=Ye,y[1]=st,y[2]=_t,y[3]=Ne,$.clearBufferuiv($.COLOR,0,y)):(_[0]=Ye,_[1]=st,_[2]=_t,_[3]=Ne,$.clearBufferiv($.COLOR,0,_))}else K|=$.COLOR_BUFFER_BIT}Y&&(K|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(K|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&$.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",De,!1),X.dispose(),Ae.dispose(),re.dispose(),Je.dispose(),Ve.dispose(),D.dispose(),xe.dispose(),j.dispose(),Pe.dispose(),$e.dispose(),ue.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",dr),Me.removeEventListener("sessionend",pn),ri.stop()};function je(R){R.preventDefault(),Ha("WebGLRenderer: Context Lost."),H=!0}function rt(){Ha("WebGLRenderer: Context Restored."),H=!1;let R=Rt.autoReset,Y=Se.enabled,te=Se.autoUpdate,K=Se.needsUpdate,Z=Se.type;pt(),Rt.autoReset=R,Se.enabled=Y,Se.autoUpdate=te,Se.needsUpdate=K,Se.type=Z}function De(R){it("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ke(R){let Y=R.target;Y.removeEventListener("dispose",Ke),hn(Y)}function hn(R){si(R),Ve.remove(R)}function si(R){let Y=Ve.get(R).programs;Y!==void 0&&(Y.forEach(function(te){ue.releaseProgram(te)}),R.isShaderMaterial&&ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,te,K,Z,Ie){Y===null&&(Y=ft);let He=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Le=Qu(R,Y,te,K,Z);ae.setMaterial(K,He);let Ne=te.index,Ye=1;if(K.wireframe===!0){if(Ne=j.getWireframeAttribute(te),Ne===void 0)return;Ye=2}let st=te.drawRange,_t=te.attributes.position,qe=st.start*Ye,St=(st.start+st.count)*Ye;Ie!==null&&(qe=Math.max(qe,Ie.start*Ye),St=Math.min(St,(Ie.start+Ie.count)*Ye)),Ne!==null?(qe=Math.max(qe,0),St=Math.min(St,Ne.count)):_t!=null&&(qe=Math.max(qe,0),St=Math.min(St,_t.count));let rn=St-qe;if(rn<0||rn===1/0)return;Pe.setup(Z,K,Le,te,Ne);let Bt,L=ie;if(Ne!==null&&(Bt=A.get(Ne),L=we,L.setIndex(Bt)),Z.isMesh)K.wireframe===!0?(ae.setLineWidth(K.wireframeLinewidth*et()),L.setMode($.LINES)):L.setMode($.TRIANGLES);else if(Z.isLine){let Q=K.linewidth;Q===void 0&&(Q=1),ae.setLineWidth(Q*et()),Z.isLineSegments?L.setMode($.LINES):Z.isLineLoop?L.setMode($.LINE_LOOP):L.setMode($.LINE_STRIP)}else Z.isPoints?L.setMode($.POINTS):Z.isSprite&&L.setMode($.TRIANGLES);if(Z.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))L.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Q=Z._multiDrawStarts,W=Z._multiDrawCounts,be=Z._multiDrawCount,ye=Ne?A.get(Ne).bytesPerElement:1,nt=Ve.get(K).currentProgram.getUniforms();for(let mt=0;mt<be;mt++)nt.setValue($,"_gl_DrawID",mt),L.render(Q[mt]/ye,W[mt])}else if(Z.isInstancedMesh)L.renderInstances(qe,rn,Z.count);else if(te.isInstancedBufferGeometry){let Q=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,W=Math.min(te.instanceCount,Q);L.renderInstances(qe,rn,W)}else L.render(qe,rn)};function ga(R,Y,te,K){q!==null&&R.isNodeMaterial&&q.setObject(K,R),he===!0&&ne.setState(R,te,!1),R.transparent===!0&&R.side===Jt&&R.forceSinglePass===!1?(R.side=Sn,R.needsUpdate=!0,Ji(R,Y,K),R.side=Bi,R.needsUpdate=!0,Ji(R,Y,K),R.side=Jt):Ji(R,Y,K)}this.compile=function(R,Y,te=null){te===null&&(te=R),q!==null&&q.renderStart(R,Y,te),S=re.get(te),S.init(Y),v.push(S),te.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),R!==te&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),q!==null&&q.updateLights(S.state.lightsArray),Ee=this.localClippingEnabled,he=ne.init(this.clippingPlanes,Ee),he===!0&&ne.setGlobalState(this.clippingPlanes,Y),q!==null&&Se.render(S.state.shadowsArray,te,Y);let K=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ie=Z.material;if(Ie)if(Array.isArray(Ie))for(let He=0;He<Ie.length;He++){let Le=Ie[He];ga(Le,te,Y,Z),K.add(Le)}else ga(Ie,te,Y,Z),K.add(Ie)}),S=v.pop(),q!==null&&q.renderEnd(),K},this.compileAsync=function(R,Y,te=null){let K=this.compile(R,Y,te);return new Promise(Z=>{function Ie(){if(K.forEach(function(He){let Ne=Ve.get(He).currentProgram;(Ne===void 0||Ne.isReady())&&K.delete(He)}),K.size===0){Z(R);return}setTimeout(Ie,10)}ht.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let xa=null;function $u(R){xa&&xa(R)}function dr(){ri.stop()}function pn(){ri.start()}let ri=new L0;ri.setAnimationLoop($u),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(R){xa=R,Me.setAnimationLoop(R),R===null?ri.stop():ri.start()},Me.addEventListener("sessionstart",dr),Me.addEventListener("sessionend",pn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;q!==null&&q.renderStart(R,Y);let te=Me.enabled===!0&&Me.isPresenting===!0,K=F!==null&&(V===null||te)&&F.begin(w,V);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(Y),Y=Me.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Y,V),S=re.get(R,v.length),S.init(Y),S.state.textureUnits=Je.getTextureUnits(),v.push(S),ve.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?le.setFromArrayCamera(Y):B.setFromProjectionMatrix(ve,gi,Y.reversedDepth),Ee=this.localClippingEnabled,he=ne.init(this.clippingPlanes,Ee),E=Ae.get(R,x.length),E.init(),x.push(E),this.info.render.frame++,Me.enabled===!0&&Me.isPresenting===!0){let He=w.xr.getDepthSensingMesh();He!==null&&Hs(He,Y,-1/0,w.sortObjects)}Hs(R,Y,0,w.sortObjects),E.finish(),q!==null&&q.updateLights(S.state.lightsArray),w.sortObjects===!0&&E.sort(Fe,Xe),ut=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ut&&X.addToRenderList(E,R),this.info.autoReset===!0&&this.info.reset(),he===!0&&ne.beginShadows();let Z=S.state.shadowsArray;if(Se.render(Z,R,Y),he===!0&&ne.endShadows(),(K&&F.hasRenderPass())===!1){let He=E.opaque,Le=E.transmissive;if(S.setupLights(),Y.isArrayCamera){let Ne=Y.cameras;if(Le.length>0)for(let Ye=0,st=Ne.length;Ye<st;Ye++){let _t=Ne[Ye];Vn(He,Le,R,_t)}ut&&X.render(R);for(let Ye=0,st=Ne.length;Ye<st;Ye++){let _t=Ne[Ye];wn(E,R,_t,_t.viewport)}}else Le.length>0&&Vn(He,Le,R,Y),ut&&X.render(R),wn(E,R,Y)}V!==null&&I===0&&(Je.updateMultisampleRenderTarget(V),Je.updateRenderTargetMipmap(V)),K&&F.end(w),R.isScene===!0&&R.onAfterRender(w,R,Y),Pe.resetDefaultState(),G=-1,N=null,v.pop(),v.length>0?(S=v[v.length-1],Je.setTextureUnits(S.state.textureUnits),he===!0&&ne.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,q!==null&&q.renderEnd()};function Hs(R,Y,te,K){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){let He=Y.isArrayCamera?le:B;if(!R.frustumCulled||R.intersectsFrustum(He)){K&&Oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);let Le=xe.update(R),Ne=R.material;Ne.visible&&E.push(R,Le,Ne,te,Oe.z,null,Y)}}else if(R.isMesh||R.isLine||R.isPoints){let He=Y.isArrayCamera?le:B;if(!R.frustumCulled||R.intersectsFrustum(He)){let Le=xe.update(R),Ne=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Oe.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Oe.copy(Le.boundingSphere.center)),Oe.applyMatrix4(R.matrixWorld).applyMatrix4(ve)),Array.isArray(Ne)){let Ye=Le.groups;for(let st=0,_t=Ye.length;st<_t;st++){let qe=Ye[st],St=Ne[qe.materialIndex];St&&St.visible&&E.push(R,Le,St,te,Oe.z,qe,Y)}}else Ne.visible&&E.push(R,Le,Ne,te,Oe.z,null,Y)}}}let Ie=R.children;for(let He=0,Le=Ie.length;He<Le;He++)Hs(Ie[He],Y,te,K)}function wn(R,Y,te,K){let{opaque:Z,transmissive:Ie,transparent:He}=R;S.setupLightsView(te),he===!0&&ne.setGlobalState(w.clippingPlanes,te),K&&ae.viewport(O.copy(K)),Z.length>0&&zi(Z,Y,te),Ie.length>0&&zi(Ie,Y,te),He.length>0&&zi(He,Y,te),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Vn(R,Y,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[K.id]===void 0){let qe=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[K.id]=new Kt(1,1,{generateMipmaps:!0,type:qe?cn:Gn,minFilter:ni,samples:Math.max(4,It.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Ie=S.state.transmissionRenderTarget[K.id],He=K.viewport||O;Ie.setSize(He.z*w.transmissionResolutionScale,He.w*w.transmissionResolutionScale);let Le=w.getRenderTarget(),Ne=w.getActiveCubeFace(),Ye=w.getActiveMipmapLevel();w.setRenderTarget(Ie),w.getClearColor(z),ee=w.getClearAlpha(),ee<1&&w.setClearColor(16777215,.5),w.clear(),ut&&X.render(te);let st=w.toneMapping;w.toneMapping=Hi;let _t=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),S.setupLightsView(K),he===!0&&ne.setGlobalState(w.clippingPlanes,K),zi(R,te,K),Je.updateMultisampleRenderTarget(Ie),Je.updateRenderTargetMipmap(Ie),ht.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let St=0,rn=Y.length;St<rn;St++){let Bt=Y[St],{object:L,geometry:Q,material:W,group:be}=Bt;if(W.side===Jt&&L.layers.test(K.layers)){let ye=W.side;W.side=Sn,W.needsUpdate=!0,ba(L,te,K,Q,W,be),W.side=ye,W.needsUpdate=!0,qe=!0}}qe===!0&&(Je.updateMultisampleRenderTarget(Ie),Je.updateRenderTargetMipmap(Ie))}w.setRenderTarget(Le,Ne,Ye),w.setClearColor(z,ee),_t!==void 0&&(K.viewport=_t),w.toneMapping=st}function zi(R,Y,te){let K=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Ie=R.length;Z<Ie;Z++){let He=R[Z],{object:Le,geometry:Ne,group:Ye}=He,st=He.material;st.allowOverride===!0&&K!==null&&(st=K),Le.layers.test(te.layers)&&ba(Le,Y,te,Ne,st,Ye)}}function ba(R,Y,te,K,Z,Ie){q!==null&&Z.isNodeMaterial&&q.setObject(R,Z),R.onBeforeRender(w,Y,te,K,Z,Ie),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,Y,te,K,R,Ie),Z.transparent===!0&&Z.side===Jt&&Z.forceSinglePass===!1?(Z.side=Sn,Z.needsUpdate=!0,w.renderBufferDirect(te,Y,K,Z,R,Ie),Z.side=Bi,Z.needsUpdate=!0,w.renderBufferDirect(te,Y,K,Z,R,Ie),Z.side=Jt):w.renderBufferDirect(te,Y,K,Z,R,Ie),R.onAfterRender(w,Y,te,K,Z,Ie)}function Gs(R){let Y=0;for(let te of R)te.texture!==null&&Y++;return Y}function Ji(R,Y,te){Y.isScene!==!0&&(Y=ft);let K=Ve.get(R),Z=S.state.lights,Ie=S.state.shadowsArray,He=Z.state.version,Le=ue.getParameters(R,Z.state,Ie,Y,te,S.state.lightProbeGridArray),Ne=ue.getProgramCacheKey(Le),Ye=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,K.fog=Y.fog;let st=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=D.get(R.envMap||K.environment,st),K.envMapRotation=K.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",Ke),Ye=new Map,K.programs=Ye,K.programVariants=new Map);let _t=Ye.get(Ne);if(_t!==void 0){if(K.currentProgram===_t&&K.lightsStateVersion===He)return Ma(R,Le),_t}else Le.uniforms=ue.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,te,Le),R.onBeforeCompile(Le,w),_t=ue.acquireProgram(Le,Ne),Ye.set(Ne,_t),K.uniforms=Le.uniforms;let qe=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=ne.uniform),Ma(R,Le),K.needsLights=sl(R),K.lightsStateVersion=He,K.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.sunLights.value=Z.state.sun,qe.sunLightShadows.value=Z.state.sunShadow,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.sunShadowMatrix.value=Z.state.sunShadowMatrix,qe.sunShadowCascade.value=Z.state.sunShadowCascade,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.numLightProbeGrids=Gs(S.state.lightProbeGridArray),K.currentProgram=_t,K.uniformsList=null,_t}function nl(R,Y,te,K,Z){let Ie=Ve.get(R),He=Ie.currentProgram.id+","+K+","+Z,Le=Ie.programVariants.get(He);return Le===void 0?(Le=Ji(R,Y,te),Ie.programVariants.set(He,Le)):(Ie.currentProgram=Le,Ie.uniformsList=null,Ie.outputColorSpace=K,Ie.toneMapping=Z),Le}function ya(R){if(R.uniformsList===null){let Y=R.currentProgram.getUniforms();R.uniformsList=ea.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Ma(R,Y){let te=Ve.get(R);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function Qu(R,Y,te,K,Z){Y.isScene!==!0&&(Y=ft),Je.resetTextureUnits();let Ie=Y.fog,He=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?Y.environment:null,Le=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:gt.workingColorSpace,Ne=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ye=D.get(K.envMap||He,Ne),st=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,_t=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qe=!!te.morphAttributes.position,St=!!te.morphAttributes.normal,rn=!!te.morphAttributes.color,Bt=Hi;K.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Bt=w.toneMapping);let L=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Q=L!==void 0?L.length:0,W=Ve.get(K),be=S.state.lights;if(he===!0&&(Ee===!0||R!==N)){let qt=R===N&&K.id===G;ne.setState(K,R,qt)}let ye=!1,nt=!1;K.version===W.__version?W.needsLights&&W.lightsStateVersion!==be.state.version||Z.isBatchedMesh&&W.batching===!1||!Z.isBatchedMesh&&W.batching===!0||Z.isBatchedMesh&&W.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&W.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&W.instancing===!1||!Z.isInstancedMesh&&W.instancing===!0||Z.isSkinnedMesh&&W.skinning===!1||!Z.isSkinnedMesh&&W.skinning===!0||Z.isInstancedMesh&&W.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&W.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&W.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&W.instancingMorph===!1&&Z.morphTexture!==null||W.envMap!==Ye||K.fog===!0&&W.fog!==Ie||W.numClippingPlanes!==void 0&&(W.numClippingPlanes!==ne.numPlanes||W.numIntersection!==ne.numIntersection)||W.vertexAlphas!==st||W.vertexTangents!==_t||W.morphTargets!==qe||W.morphNormals!==St||W.morphColors!==rn||W.morphTargetsCount!==Q||W.numLightProbeGrids!==Gs(S.state.lightProbeGridArray)?ye=!0:(W.outputColorSpace!==Le||W.toneMapping!==Bt)&&(nt=!0):(ye=!0,W.__version=K.version);let mt=W.currentProgram;(ye===!0||nt===!0)&&(mt=nt===!0?nl(K,Y,Z,Le,Bt):Ji(K,Y,Z),q&&K.isNodeMaterial&&q.onUpdateProgram(K,mt,W));let yn=!1,Pt=!1,Ct=!1,Ze=mt.getUniforms(),xt=W.uniforms;if(ae.useProgram(mt.program)&&(yn=!0,Pt=!0,Ct=!0),K.id!==G&&(G=K.id,Pt=!0),yn||N!==R){ae.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ze.setValue($,"projectionMatrix",R.projectionMatrix),Ze.setValue($,"viewMatrix",R.matrixWorldInverse);let zt=Ze.map.cameraPosition;zt!==void 0&&zt.setValue($,Be.setFromMatrixPosition(R.matrixWorld)),It.logarithmicDepthBuffer&&Ze.setValue($,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ze.setValue($,"isOrthographic",R.isOrthographicCamera===!0),N!==R&&(N=R,Pt=!0,Ct=!0)}if(W.needsLights&&(be.state.sunShadowMap.length>0&&Ze.setValue($,"sunShadowMap",be.state.sunShadowMap,Je),be.state.directionalShadowMap.length>0&&Ze.setValue($,"directionalShadowMap",be.state.directionalShadowMap,Je),be.state.spotShadowMap.length>0&&Ze.setValue($,"spotShadowMap",be.state.spotShadowMap,Je),be.state.pointShadowMap.length>0&&Ze.setValue($,"pointShadowMap",be.state.pointShadowMap,Je)),Z.isSkinnedMesh){Ze.setOptional($,Z,"bindMatrix"),Ze.setOptional($,Z,"bindMatrixInverse");let qt=Z.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ze.setValue($,"boneTexture",qt.boneTexture,Je))}Z.isBatchedMesh&&(Ze.setOptional($,Z,"batchingTexture"),Ze.setValue($,"batchingTexture",Z._matricesTexture,Je),Ze.setOptional($,Z,"batchingIdTexture"),Ze.setValue($,"batchingIdTexture",Z._indirectTexture,Je),Ze.setOptional($,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ze.setValue($,"batchingColorTexture",Z._colorsTexture,Je));let Lt=te.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&ce.update(Z,te,mt),(Pt||W.receiveShadow!==Z.receiveShadow)&&(W.receiveShadow=Z.receiveShadow,Ze.setValue($,"receiveShadow",Z.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&Y.environment!==null&&(xt.envMapIntensity.value=Y.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Ov()),Pt){if(Ze.setValue($,"toneMappingExposure",w.toneMappingExposure),W.needsLights&&il(xt,Ct),Ie&&K.fog===!0&&_e.refreshFogUniforms(xt,Ie),_e.refreshMaterialUniforms(xt,K,pe,me,S.state.transmissionRenderTarget[R.id]),W.needsLights&&W.numLightProbeGrids>0){let qt=M,zt=0;for(let an of S.state.lightProbeGridArray)an.texture!==null&&(qt.textures[zt]=an.texture,qt.min[zt]=an.boundingBox.min,qt.max[zt]=an.boundingBox.max,qt.resolution[zt]=an.resolution,zt++);for(let an in qt)qt[an].length=zt;xt.probesSH.value=qt.textures,xt.probesMin.value=qt.min,xt.probesMax.value=qt.max,xt.probesResolution.value=qt.resolution}ea.upload($,ya(W),xt,Je)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ea.upload($,ya(W),xt,Je),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ze.setValue($,"center",Z.center),Ze.setValue($,"modelViewMatrix",Z.modelViewMatrix),Ze.setValue($,"normalMatrix",Z.normalMatrix),Ze.setValue($,"modelMatrix",Z.matrixWorld),K.uniformsGroups!==void 0){let qt=K.uniformsGroups;for(let zt=0,an=qt.length;zt<an;zt++){let ji=qt[zt];$e.update(ji,mt),$e.bind(ji,mt)}}return mt}function il(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.sunLights.needsUpdate=Y,R.sunLightShadows.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function sl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,Y,te){let K=Ve.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=Y,Ve.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){let te=Ve.get(R);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,te=0){V=R,P=Y,I=te;let K=null,Z=!1,Ie=!1;if(R){let Le=Ve.get(R);if(Le.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer($.FRAMEBUFFER,Le.__webglFramebuffer),O.copy(R.viewport),J.copy(R.scissor),se=R.scissorTest,ae.viewport(O),ae.scissor(J),ae.setScissorTest(se),G=-1;return}else if(Le.__webglFramebuffer===void 0)Je.setupRenderTarget(R);else if(Le.__hasExternalTextures)Je.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let st=R.depthTexture;if(Le.__boundDepthTexture!==st){if(st!==null&&Ve.has(st)&&(R.width!==st.image.width||R.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(R)}}let Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ie=!0);let Ye=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[Y])?K=Ye[Y][te]:K=Ye[Y],Z=!0):R.samples>0&&Je.useMultisampledRTT(R)===!1?K=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?K=Ye[te]:K=Ye,O.copy(R.viewport),J.copy(R.scissor),se=R.scissorTest}else O.copy(Ue).multiplyScalar(pe).floor(),J.copy(Qe).multiplyScalar(pe).floor(),se=ge;if(te!==0&&(K=C),ae.bindFramebuffer($.FRAMEBUFFER,K)&&ae.drawBuffers(R,K),ae.viewport(O),ae.scissor(J),ae.setScissorTest(se),Z){let Le=Ve.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Le.__webglTexture,te)}else if(Ie){let Le=Y;for(let Ne=0;Ne<R.textures.length;Ne++){let Ye=Ve.get(R.textures[Ne]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ne,Ye.__webglTexture,te,Le)}}else if(R!==null&&te!==0){let Le=Ve.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Le.__webglTexture,te)}G=-1};function va(R){let Y=Ve.get(R);return(Y.__readFormat!==R.format||Y.__readType!==R.type)&&(Y.__readFormat=R.format,Y.__readType=R.type,Y.__formatReadable=It.textureFormatReadable(R.format),Y.__typeReadable=It.textureTypeReadable(R.type)),Y}this.readRenderTargetPixels=function(R,Y,te,K,Z,Ie,He,Le=0){if(!(R&&R.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Ne=Ne[He],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){ae.bindFramebuffer($.FRAMEBUFFER,Ne);try{let Ye=R.textures[Le],st=Ye.format,_t=Ye.type;R.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Le);let qe=va(Ye);if(qe.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-K&&te>=0&&te<=R.height-Z&&$.readPixels(Y,te,K,Z,Te.convert(st),Te.convert(_t),Ie)}finally{let Ye=V!==null?Ve.get(V).__webglFramebuffer:null;ae.bindFramebuffer($.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,Y,te,K,Z,Ie,He,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Ne=Ne[He],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(Y>=0&&Y<=R.width-K&&te>=0&&te<=R.height-Z){ae.bindFramebuffer($.FRAMEBUFFER,Ne);let Ye=R.textures[Le],st=Ye.format,_t=Ye.type;R.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Le);let qe=va(Ye);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,St),$.bufferData($.PIXEL_PACK_BUFFER,Ie.byteLength,$.STREAM_READ),$.readPixels(Y,te,K,Z,Te.convert(st),Te.convert(_t),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let rn=V!==null?Ve.get(V).__webglFramebuffer:null;ae.bindFramebuffer($.FRAMEBUFFER,rn);let Bt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await e0($,Bt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,St),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ie),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(St),$.deleteSync(Bt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,te=0){let K=Math.pow(2,-te),Z=Math.floor(R.image.width*K),Ie=Math.floor(R.image.height*K),He=Y!==null?Y.x:0,Le=Y!==null?Y.y:0;Je.setTexture2D(R,0),$.copyTexSubImage2D($.TEXTURE_2D,te,0,0,He,Le,Z,Ie),ae.unbindTexture()},this.copyTextureToTexture=function(R,Y,te=null,K=null,Z=0,Ie=0){let He,Le,Ne,Ye,st,_t,qe,St,rn,Bt=R.isCompressedTexture?R.mipmaps[Ie]:R.image;if(te!==null)He=te.max.x-te.min.x,Le=te.max.y-te.min.y,Ne=te.isBox3?te.max.z-te.min.z:1,Ye=te.min.x,st=te.min.y,_t=te.isBox3?te.min.z:0;else{let Ze=Math.pow(2,-Z);He=Math.floor(Bt.width*Ze),Le=Math.floor(Bt.height*Ze),R.isDataArrayTexture?Ne=Bt.depth:R.isData3DTexture?Ne=Math.floor(Bt.depth*Ze):Ne=1,Ye=0,st=0,_t=0}K!==null?(qe=K.x,St=K.y,rn=K.z):(qe=0,St=0,rn=0);let L=Te.convert(Y.format),Q=Te.convert(Y.type),W;Y.isData3DTexture?(Je.setTexture3D(Y,0),W=$.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Je.setTexture2DArray(Y,0),W=$.TEXTURE_2D_ARRAY):(Je.setTexture2D(Y,0),W=$.TEXTURE_2D),ae.activeTexture($.TEXTURE0),ae.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Y.flipY),ae.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),ae.pixelStorei($.UNPACK_ALIGNMENT,Y.unpackAlignment);let be=ae.getParameter($.UNPACK_ROW_LENGTH),ye=ae.getParameter($.UNPACK_IMAGE_HEIGHT),nt=ae.getParameter($.UNPACK_SKIP_PIXELS),mt=ae.getParameter($.UNPACK_SKIP_ROWS),yn=ae.getParameter($.UNPACK_SKIP_IMAGES);ae.pixelStorei($.UNPACK_ROW_LENGTH,Bt.width),ae.pixelStorei($.UNPACK_IMAGE_HEIGHT,Bt.height),ae.pixelStorei($.UNPACK_SKIP_PIXELS,Ye),ae.pixelStorei($.UNPACK_SKIP_ROWS,st),ae.pixelStorei($.UNPACK_SKIP_IMAGES,_t);let Pt=R.isDataArrayTexture||R.isData3DTexture,Ct=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){let Ze=Ve.get(R),xt=Ve.get(Y),Lt=Ve.get(Ze.__renderTarget),qt=Ve.get(xt.__renderTarget);ae.bindFramebuffer($.READ_FRAMEBUFFER,Lt.__webglFramebuffer),ae.bindFramebuffer($.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let zt=0;zt<Ne;zt++)Pt&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,Z,_t+zt),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ve.get(Y).__webglTexture,Ie,rn+zt)),$.blitFramebuffer(Ye,st,Ye+He,st+Le,qe,St,qe+He,St+Le,$.DEPTH_BUFFER_BIT,$.NEAREST);ae.bindFramebuffer($.READ_FRAMEBUFFER,null),ae.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ve.has(R)){let Ze=Ve.get(R),xt=Ve.get(Y);ae.bindFramebuffer($.READ_FRAMEBUFFER,T),ae.bindFramebuffer($.DRAW_FRAMEBUFFER,U);for(let Lt=0;Lt<Ne;Lt++)Pt?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ze.__webglTexture,Z,_t+Lt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ze.__webglTexture,Z),Ct?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,xt.__webglTexture,Ie,rn+Lt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,xt.__webglTexture,Ie),Z!==0?$.blitFramebuffer(Ye,st,Ye+He,st+Le,qe,St,qe+He,St+Le,$.COLOR_BUFFER_BIT,$.NEAREST):Ct?$.copyTexSubImage3D(W,Ie,qe,St,rn+Lt,Ye,st,He,Le):$.copyTexSubImage2D(W,Ie,qe,St,Ye,st,He,Le);ae.bindFramebuffer($.READ_FRAMEBUFFER,null),ae.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ct?R.isDataTexture||R.isData3DTexture?$.texSubImage3D(W,Ie,qe,St,rn,He,Le,Ne,L,Q,Bt.data):Y.isCompressedArrayTexture?$.compressedTexSubImage3D(W,Ie,qe,St,rn,He,Le,Ne,L,Bt.data):$.texSubImage3D(W,Ie,qe,St,rn,He,Le,Ne,L,Q,Bt):R.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ie,qe,St,He,Le,L,Q,Bt.data):R.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ie,qe,St,Bt.width,Bt.height,L,Bt.data):$.texSubImage2D($.TEXTURE_2D,Ie,qe,St,He,Le,L,Q,Bt);ae.pixelStorei($.UNPACK_ROW_LENGTH,be),ae.pixelStorei($.UNPACK_IMAGE_HEIGHT,ye),ae.pixelStorei($.UNPACK_SKIP_PIXELS,nt),ae.pixelStorei($.UNPACK_SKIP_ROWS,mt),ae.pixelStorei($.UNPACK_SKIP_IMAGES,yn),Ie===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&$.generateMipmap(W),ae.unbindTexture()},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&Je.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Je.setTextureCube(R,0):R.isData3DTexture?Je.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Je.setTexture2DArray(R,0):Je.setTexture2D(R,0),ae.unbindTexture()},this.resetState=function(){P=0,I=0,V=null,ae.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var vt=Math.PI*2,Ge=i=>document.querySelector(i),Dt=(i,e,t)=>Math.max(e,Math.min(t,i)),An=(i,e,t)=>i+(e-i)*t,Ut=(i,e,t)=>{let n=Dt((t-i)/(e-i),0,1);return n*n*(3-2*n)};function nn(i){let e=i>>>0;return function(){e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var q0=()=>new Promise(i=>setTimeout(i,0));var Xv=[{id:"kulit",name:"Kulit luar",sci:"Periderm",col:5979434,ui:"#c8946a",ro:2.5,ri:2.28,what:"Lapisan terluar yang sebagian besar sudah mati. Dindingnya mengandung suberin sehingga kedap air.",fn:"Melindungi jaringan hidup di dalamnya dari hama, penyakit, panas, api ringan, dan hilangnya air.",fact:"Corak dan ketebalan kulit kayu berbeda pada tiap spesies, jadi sering dipakai untuk mengenali jenis pohon.",short:"Pelindung terluar, kedap air."},{id:"floem",name:"Floem",sci:"Floem sekunder (kulit dalam)",col:13482106,ui:"#e6d493",ro:2.28,ri:2,what:"Jaringan hidup tepat di bawah kulit luar. Penyusun utamanya adalah buluh tapis yang dibantu sel pendamping.",fn:"Mengangkut hasil fotosintesis, terutama sukrosa, dari daun ke akar, buah, dan bagian lain yang sedang tumbuh atau menyimpan cadangan.",fact:"Gula mengalir dari sumber (daun dewasa) ke tempat pakai atau simpan (akar, tunas, buah), jadi arahnya bisa ke bawah maupun ke atas.",short:"Jalur gula dari daun."},{id:"kambium",name:"Kambium",sci:"Kambium vaskular",col:9425258,ui:"#a6e57a",ro:2,ri:1.86,what:"Lapisan sangat tipis berisi sel yang terus membelah.",fn:"Membentuk xilem baru ke arah dalam dan floem baru ke arah luar, sehingga batang bertambah besar (pertumbuhan sekunder).",fact:"Kambium membuat batang menebal, bukan memanjang. Pertambahan tinggi terjadi di ujung tunas.",short:"Penghasil jaringan baru."},{id:"xilem",name:"Xilem aktif",sci:"Kayu gubal (sapwood)",col:14992011,ui:"#f2d3a0",ro:1.86,ri:1.2,what:"Bagian kayu yang masih berfungsi. Pembuluh dan trakeidnya adalah sel mati berdinding lignin yang tersusun menjadi pipa panjang.",fn:"Mengangkut air dan mineral dari akar ke daun, sekaligus menopang batang. Jari-jari empulur menyalurkan zat ke arah samping.",fact:"Air naik tanpa pompa. Penguapan di daun (transpirasi) menarik kolom air yang saling menempel di dalam pipa xilem. Pohon bisa mengangkat air puluhan meter, dan pada pohon tertinggi lebih dari 100 meter.",short:"Jalur air dan mineral ke daun."},{id:"teras",name:"Kayu teras",sci:"Heartwood",col:11036987,ui:"#e0925a",ro:1.2,ri:.3,what:"Xilem tua di bagian dalam yang sudah berhenti mengangkut air. Biasanya lebih gelap karena terisi resin, tanin, dan senyawa lain.",fn:"Menopang pohon dan lebih tahan terhadap pembusukan serta serangan serangga.",fact:"Pada beberapa spesies, kayu teras yang awet membuat kayunya bernilai tinggi. Pohon yang terasnya berlubang pun bisa tetap hidup selama kayu gubal dan kambiumnya sehat.",short:"Penopang, tahan lapuk."},{id:"empulur",name:"Empulur",sci:"Pith",col:15918793,ui:"#f6ecd2",ro:.3,ri:0,what:"Jaringan lunak di pusat batang, sisa dari tahap awal ketika batang masih muda.",fn:"Pada batang muda menyimpan cadangan makanan. Pada pohon tua ukurannya kecil dan sering tidak lagi aktif.",fact:"Cincin tahun tersusun mengelilingi empulur. Makin ke tengah, makin tua umurnya.",short:"Pusat batang yang lunak."}],Vv=[{id:"jati",name:"Pohon Jati",short:"jati",sci:"Tectona grandis",family:"Lamiaceae",x:8,z:-8,fact:"Jati meranggas (menggugurkan daun) di musim kemarau dan bertunas lagi saat musim hujan. Kayunya terkenal awet dan banyak dipakai untuk mebel dan konstruksi.",notes:{kulit:"Kulit jati cokelat keabu-abuan, tipis, dan mengelupas memanjang berserat.",xilem:"Jati termasuk kayu berpori cincin: pembuluh besar yang terbentuk di awal musim tumbuh membuat cincin tahunnya jelas.",teras:"Teras jati berwarna cokelat keemasan dan mengandung minyak serta senyawa seperti tektokuinon yang membuatnya tahan rayap dan jamur."},wood:{bark:"oak",barkTint:14207152,rings:14,contrast:.34,pores:"ring",rays:.07,cortex:[.8,.7,.46],sapE:[.93,.82,.58],sapL:[.76,.58,.34],heartE:[.72,.48,.22],heartL:[.46,.27,.11],pith:[.9,.82,.66]}},{id:"mahoni",name:"Pohon Mahoni",short:"mahoni",sci:"Swietenia mahagoni",family:"Meliaceae",x:-10,z:-4,fact:"Mahoni berasal dari Amerika tropis dan didatangkan ke Indonesia pada masa kolonial. Banyak ditanam sebagai pohon peneduh di tepi jalan. Buahnya berupa kapsul berkayu yang pecah menjadi lima bagian dan melepas biji bersayap.",notes:{kulit:"Kulit mahoni cokelat tua keabu-abuan, bersisik dengan alur dangkal.",xilem:"Pori kayu mahoni tersebar merata (berpori baur), tidak mengelompok membentuk cincin seperti pada jati.",teras:"Teras mahoni cokelat kemerahan dan makin gelap seiring umur. Seratnya halus, jadi kayunya dihargai untuk mebel."},wood:{bark:"oak",barkTint:10125424,rings:11,contrast:.2,pores:"diffuse",rays:.06,cortex:[.78,.64,.44],sapE:[.9,.72,.52],sapL:[.78,.56,.38],heartE:[.66,.34,.2],heartL:[.44,.19,.1],pith:[.88,.76,.62]}},{id:"beringin",name:"Pohon Beringin",short:"beringin",sci:"Ficus benjamina",family:"Moraceae",x:13,z:9,fact:"Beringin bisa memulai hidup menumpang di pohon lain. Akar gantungnya turun ke tanah, menebal, lalu menjadi batang tambahan. Beringin termasuk marga Ficus, yang getahnya putih seperti susu (lateks).",notes:{kulit:"Kulit beringin halus dan berwarna abu-abu terang.",floem:"Getah putih beringin (lateks) berasal dari sel khusus penghasil lateks yang tersebar di jaringan kulit dan daun.",xilem:"Kayu beringin relatif lunak dan ringan, jarang dipakai sebagai kayu konstruksi."},wood:{bark:"birch",barkTint:11840156,rings:8,contrast:.1,pores:"diffuse",rays:.05,cortex:[.86,.82,.62],sapE:[.94,.89,.74],sapL:[.88,.8,.62],heartE:[.84,.74,.54],heartL:[.74,.62,.42],pith:[.94,.9,.78]}},{id:"pinus",name:"Pinus Merkusii",short:"pinus",sci:"Pinus merkusii",family:"Pinaceae",x:-18,z:-24,fact:"Pinus merkusii adalah satu-satunya jenis pinus alami yang tumbuh sampai ke selatan garis khatulistiwa, yaitu di Sumatra. Di Jawa banyak ditanam, dan getahnya disadap untuk diolah menjadi gondorukem dan terpentin.",notes:{kulit:"Kulit pinus merkusii tebal, beralur dalam, dan cokelat kemerahan.",floem:"Getah pinus keluar dari saluran resin saat batang dilukai. Getah itu diolah menjadi gondorukem dan terpentin.",xilem:"Kayu pinus tersusun hampir seluruhnya dari trakeid, tanpa pembuluh berpori besar seperti pada jati. Saluran resin tersebar di dalamnya.",teras:"Teras pinus lebih gelap dan banyak mengandung resin."},wood:{bark:"pine",barkTint:14729384,rings:19,contrast:.46,pores:"resin",rays:.04,cortex:[.82,.66,.42],sapE:[.96,.86,.62],sapL:[.82,.6,.34],heartE:[.86,.62,.34],heartL:[.62,.36,.16],pith:[.92,.82,.62]}},{id:"trembesi",name:"Pohon Trembesi",short:"trembesi",sci:"Samanea saman",family:"Fabaceae",x:26,z:-10,fact:"Trembesi berasal dari Amerika tropis. Tajuknya lebar seperti payung dan bisa lebih lebar daripada tingginya. Daun majemuknya melipat saat malam atau mendung.",notes:{kulit:"Kulit trembesi cokelat tua keabu-abuan, kasar, dan beralur.",xilem:"Kayu trembesi bercorak serat indah dan sering dipakai untuk meja dan ukiran.",teras:"Teras trembesi berwarna cokelat tua dengan corak garis yang lebih gelap."},wood:{bark:"oak",barkTint:9074792,rings:9,contrast:.16,pores:"diffuse",rays:.05,cortex:[.8,.7,.48],sapE:[.88,.78,.58],sapL:[.76,.62,.42],heartE:[.52,.34,.2],heartL:[.3,.18,.1],pith:[.88,.8,.66]}}],Yv=[{id:"q1",q:"Jaringan mana yang mengangkut air dan mineral dari akar ke daun?",o:["Xilem","Floem","Kambium","Empulur"],a:0,e:"Xilem tersusun dari sel mati berdinding lignin yang membentuk pipa. Air bergerak naik karena tarikan penguapan di daun."},{id:"q2",q:"Apa yang terutama diangkut oleh floem?",o:["Air dan mineral dari tanah","Gula hasil fotosintesis dari daun ke bagian lain","Gas oksigen ke akar","Klorofil ke daun muda"],a:1,e:"Floem membawa sukrosa dari tempat dibuatnya (daun dewasa) ke tempat dipakai atau disimpan, misalnya akar, tunas, dan buah."},{id:"q3",q:"Lapisan mana yang membelah dan membentuk xilem baru ke arah dalam serta floem baru ke arah luar?",o:["Kulit luar","Kayu teras","Kambium","Empulur"],a:2,e:"Kambium vaskular membuat batang menebal. Xilem baru menumpuk di sisi dalamnya, floem baru di sisi luarnya."},{id:"q4",q:"Di daerah yang punya musim jelas, mengapa penampang batang menunjukkan cincin tahun?",o:["Floem menumpuk satu lapis setiap tahun","Sel xilem yang dibentuk di awal dan akhir musim tumbuh berbeda ukuran dan tebal dindingnya","Kulit luar mengelupas setiap tahun","Kambium berhenti bekerja setelah setahun"],a:1,e:"Pada awal musim tumbuh sel xilem besar dan berdinding tipis, di akhir musim kecil dan berdinding tebal. Perbedaan itu tampak sebagai cincin."},{id:"q5",q:"Kulit pohon dikelupas melingkar sampai ke kayu (girdling). Apa dampaknya dalam jangka panjang?",o:["Gula tidak bisa turun ke akar sehingga pohon perlahan mati","Air langsung berhenti naik dan semua daun gugur dalam sehari","Pohon tumbuh makin tinggi","Tidak ada dampak apa pun"],a:0,e:"Floem ikut terkelupas, jadi gula dari daun tidak sampai ke akar. Xilem masih mengangkut air untuk sementara, tetapi akar yang kelaparan akhirnya membuat pohon mati."},{id:"s-jati1",sp:"jati",q:"Mengapa kayu teras jati awet dan tahan rayap?",o:["Mengandung minyak dan senyawa pelindung seperti tektokuinon","Terisi penuh oleh air","Tidak punya xilem sama sekali","Kulitnya sangat tebal"],a:0,e:"Senyawa dan minyak di kayu teras jati membuatnya tahan jamur dan rayap, itu sebabnya jati awet."},{id:"s-jati2",sp:"jati",q:'Apa arti jati "meranggas"?',o:["Menggugurkan daun saat musim kering","Tumbuh tanpa akar","Mengeluarkan getah putih","Berbuah sepanjang tahun"],a:0,e:"Jati menggugurkan daunnya di musim kemarau untuk mengurangi penguapan, lalu bertunas lagi saat hujan datang."},{id:"s-mahoni1",sp:"mahoni",q:"Dari mana asal mahoni yang banyak ditanam di Indonesia?",o:["Amerika tropis","Eropa utara","Gurun Australia","Afrika bagian selatan"],a:0,e:"Mahoni didatangkan dari Amerika tropis pada masa kolonial dan kini banyak ditanam sebagai pohon peneduh."},{id:"s-mahoni2",sp:"mahoni",q:"Bagian mahoni mana yang pecah menjadi lima bagian dan melepas biji bersayap?",o:["Buahnya (kapsul berkayu)","Kulit kayunya","Akarnya","Empulurnya"],a:0,e:"Buah mahoni berupa kapsul berkayu. Saat matang ia terbelah dan biji bersayapnya terbawa angin."},{id:"s-bering1",sp:"beringin",q:"Cairan putih seperti susu yang keluar dari luka beringin disebut apa?",o:["Lateks","Klorofil","Sukrosa","Lignin"],a:0,e:"Lateks dihasilkan sel khusus pada tumbuhan marga Ficus. Fungsinya antara lain menutup luka dan menolak pemangsa."},{id:"s-bering2",sp:"beringin",q:"Akar gantung beringin yang sampai ke tanah lama-kelamaan akan...",o:["Menebal dan menjadi batang tambahan","Mati seketika","Berubah menjadi daun","Berhenti tumbuh selamanya"],a:0,e:"Akar gantung yang menjangkau tanah ikut menyerap air dan menebal, sehingga tampak seperti batang tambahan."},{id:"s-pinus1",sp:"pinus",q:"Kayu pinus tersusun hampir seluruhnya dari sel panjang yang mengangkut air sekaligus menopang. Apa namanya?",o:["Trakeid","Stomata","Kambium","Lateks"],a:0,e:"Konifer seperti pinus tidak punya pembuluh berpori besar. Trakeid menjalankan tugas mengangkut air dan menopang batang."},{id:"s-pinus2",sp:"pinus",q:"Getah pinus yang disadap diolah menjadi apa?",o:["Gondorukem dan terpentin","Minyak kayu putih","Karet alam","Serat kapas"],a:0,e:"Resin pinus disuling menjadi gondorukem (padat) dan terpentin (cair), yang dipakai pada cat, perekat, dan industri lain."},{id:"s-tremb1",sp:"trembesi",q:"Bentuk tajuk trembesi paling mirip apa?",o:["Payung yang lebar","Kerucut sempit","Tiang lurus","Bola kecil"],a:0,e:"Cabang trembesi menyebar ke samping sehingga tajuknya lebar seperti payung dan teduh."},{id:"s-tremb2",sp:"trembesi",q:"Banyak anggota keluarga kacang-kacangan (Fabaceae), termasuk trembesi, punya bintil akar. Apa fungsinya?",o:["Bersimbiosis dengan bakteri pengikat nitrogen","Menyerap garam laut","Menghasilkan listrik","Menyimpan air untuk setahun"],a:0,e:"Bakteri di bintil akar mengubah nitrogen udara menjadi bentuk yang bisa dipakai tumbuhan, sehingga tanah ikut subur."}],ru={id:"pohon",name:"Pohon",layers:Xv,specimens:Vv,quiz:Yv};var O0="./dist/assets/grass-CMLLWMRR.jpg";var na="./dist/assets/dirt_color-XQ4XPJKX.jpg";var ia="./dist/assets/dirt_normal-OTHNHK75.jpg";var jt=-1.4,ks=240,X0=220,Xn={x:-34,z:26,r:15},au={x:0,z:2};function Jv(i,e){return Math.sin(i*.045+1.3)*Math.cos(e*.038)*2+Math.sin(i*.1+e*.08)*.5+Math.cos(i*.02-e*.03)*1.5}function fn(i,e){let t=Jv(i,e);t*=Ut(9,26,Math.hypot(i,e));let n=Math.hypot(i-Xn.x,e-Xn.z);return n<Xn.r+9&&(t=An(t,-3.3,1-Ut(Xn.r*.3,Xn.r+9,n))),t}function jv(i,e){let t=Math.sin(i*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)}var Go=[];function V0(i){Go.length=0,i.forEach((e,t)=>{let n=e.x-au.x,s=e.z-au.z,r=Math.hypot(n,s);Go.push({ax:au.x,az:au.z,bx:e.x,bz:e.z,L:r,dx:n/r,dz:s/r,seed:t*1.7+.3})})}function sa(i,e){let t=1e9;for(let n of Go){let s=i-n.ax,r=e-n.az,a=Dt((s*n.dx+r*n.dz)/n.L,0,1),o=Math.sin(a*n.L*.17+n.seed)*1.3*Math.sin(Math.PI*a),l=n.ax+n.dx*a*n.L-n.dz*o,c=n.az+n.dz*a*n.L+n.dx*o;t=Math.min(t,Math.hypot(i-l,e-c))}return t}var ou=1.25,Y0={uTime:{value:0}},wd=`
float tS(float a,float b,float x){ float t=clamp((x-a)/(b-a),0.,1.); return t*t*(3.-2.*t); }
float tBase(vec2 p){ return sin(p.x*0.045+1.3)*cos(p.y*0.038)*2.0 + sin(p.x*0.1+p.y*0.08)*0.5 + cos(p.x*0.02-p.y*0.03)*1.5; }
float tHeight(vec2 p){ float h=tBase(p)*tS(9.,26.,length(p)); float dl=length(p-vec2(${Xn.x}.,${Xn.z}.)); if(dl<${Xn.r+9}.) h=mix(h,-3.3,1.-tS(${Xn.r*.3},${Xn.r+9}.,dl)); return h; }
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
`;function $0(){let i=[],e=[];for(let t=0;t<8;t++){let n=Go[t];i.push(n?new Ft(n.ax,n.az,n.dx,n.dz):new Ft),e.push(n?new k(n.L,n.seed,0):new k(1,0,0))}return{uPath:{value:i},uPathP:{value:e},uPathN:{value:Go.length}}}function Pd(i,e,t){let n=new ti().load(i);return n.wrapS=n.wrapT=Yt,n.anisotropy=8,e&&(n.colorSpace=Et),t&&n.repeat.set(t,t),n}function Q0(i){let e=new Is(ks,ks,X0,X0);e.rotateX(-Math.PI/2);let t=e.attributes.position,n=t.count,s=new Float32Array(n*3),r=new Float32Array(n*2),a=new fe,o=new Float32Array(n);for(let f=0;f<n;f++){let p=fn(t.getX(f),t.getZ(f));o[f]=p,t.setY(f,p)}for(let f=0;f<n;f++){let p=t.getX(f),b=t.getZ(f),g=o[f],m=.8,y=fn(p+m,b)-fn(p-m,b),_=fn(p,b+m)-fn(p,b-m),M=Math.hypot(y,_)/(2*m),E=Math.sin(p*.07+1.3)*Math.sin(b*.06)*.5+.5,S=Math.sin(p*.31)*Math.sin(b*.27+2)*.5+.5,x=Ut(.28,.6,M)+Ut(.78,.95,S)*.45;x=Math.max(x,1-Ut(ou*.45,ou*1.05,sa(p,b)));let v=1-Ut(jt+.1,jt+.75,g);r[f*2]=Dt(x,0,1)*(1-v),r[f*2+1]=v,a.setRGB(.8+E*.28,.9+E*.22-S*.05,.62+E*.14),a.multiplyScalar((.92+jv(p,b)*.16)*1.9),s[f*3]=a.r,s[f*3+1]=a.g,s[f*3+2]=a.b}e.setAttribute("color",new dt(s,3)),e.setAttribute("aMix",new dt(r,2)),e.computeVertexNormals();let l=Pd(O0,!0,ks/4.5),c=Pd(na,!0,1),u=Pd(ia,!1,ks/4.5),h=new at({map:l,normalMap:u,normalScale:new de(.55,.55),vertexColors:!0,roughness:.96,metalness:0});h.onBeforeCompile=f=>{f.uniforms.uDirt={value:c},f.uniforms.uTime=Y0.uTime,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aMix; varying vec2 vMix; varying vec3 vWPt;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMix = aMix; vWPt = (modelMatrix * vec4(transformed, 1.0)).xyz;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uDirt; uniform float uTime; varying vec2 vMix; varying vec3 vWPt;
        float caust(vec2 p, float t){
          vec2 q = p * 0.85; float c = 0.0;
          for (int i = 0; i < 3; i++) {
            q += vec2(sin(q.y * 1.7 + t * 0.9), cos(q.x * 1.3 - t * 0.7)) * 0.55;
            c += abs(sin(q.x + q.y * 0.6 + t * 0.4));
          }
          return pow(1.0 - c / 3.0, 5.0) * 3.0;
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        vec4 g2 = texture2D(map, vMapUv * 0.23 + vec2(0.31, 0.67));
        diffuseColor.rgb = mix(diffuseColor.rgb, g2.rgb * 1.05, 0.38);
        vec4 dc = texture2D(uDirt, vMapUv * 0.8);
        diffuseColor.rgb = mix(diffuseColor.rgb, dc.rgb * vec3(1.0, 0.86, 0.7) * 1.1, vMix.x);
        diffuseColor.rgb = mix(diffuseColor.rgb, dc.rgb * vec3(1.55, 1.38, 1.0), vMix.y);
        { float uw = ${jt.toFixed(2)} - vWPt.y;            // dasar danau: lebih gelap-kehijauan + kaustik
          if (uw > 0.0) {
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.45, 0.68, 0.64), clamp(uw * 0.55, 0.0, 1.0));
            diffuseColor.rgb += caust(vWPt.xz * 1.6, uTime) * 0.12 * exp(-uw * 0.35) * vec3(0.75, 1.0, 0.92);
          } }`)};let d=new ke(e,h);return d.receiveShadow=!0,i.add(d),d}function Wv(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=new Float32Array(256*256),r=[[3,2,1,0],[5,-4,.7,1.3],[-7,6,.45,2.1],[11,9,.28,.7],[-14,5,.2,3.3]];for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=0;for(let u of r)c+=Math.sin((l*u[0]+o*u[1])/256*vt+u[3])*u[2];s[o*256+l]=c}for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=s[o*256+(l+1)%256]-s[o*256+(l+256-1)%256],u=s[(o+1)%256*256+l]-s[(o+256-1)%256*256+l],h=-c*.5,d=-u*.5,f=1,p=Math.hypot(h,d,f);h/=p,d/=p,f/=p;let b=(o*256+l)*4;n.data[b]=(h*.5+.5)*255,n.data[b+1]=(d*.5+.5)*255,n.data[b+2]=(f*.5+.5)*255,n.data[b+3]=255}t.putImageData(n,0,0);let a=new Hn(e);return a.wrapS=a.wrapT=Yt,a.repeat.set(ks/7,ks/7),a.anisotropy=8,a}function z0(i){let e=Wv();e.repeat.set(1,1);let t=Array.from({length:8},()=>new Ft(0,0,-99,0)),n=0,s={uTime:{value:0},uWN:{value:e},uRip:{value:t}},r=new at({color:16777215,roughness:.05,metalness:0,transparent:!0,depthWrite:!1,envMapIntensity:1.5,side:Jt});r.onBeforeCompile=o=>{Object.assign(o.uniforms,s),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position,1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWP; uniform float uTime; uniform sampler2D uWN; uniform vec4 uRip[8];
        vec3 ripple(vec2 p){ vec3 o = vec3(0.0);
          for (int i = 0; i < 8; i++) { float age = uTime - uRip[i].z; if (age < 0.0 || age > 3.0) continue;
            vec2 dv = p - uRip[i].xy; float d = length(dv) + 1e-4, R = 0.25 + age * 1.25;
            float w = exp(-pow((d - R) * 4.0, 2.0)) * (1.0 - age / 3.0) * uRip[i].w;
            o.xy += dv / d * sin((d - R) * 22.0) * w * 1.6; o.z += w; }
          return o; }
        ${wd}
        vec3 wNorm(vec2 p){
          vec3 a = texture2D(uWN, p/7.0 + vec2(uTime*0.020, uTime*0.012)).xyz*2.-1.;
          vec3 b = texture2D(uWN, vec2(p.y,-p.x)/3.1 + vec2(-uTime*0.028, uTime*0.019)).xyz*2.-1.;
          vec3 c = texture2D(uWN, p/1.7 + vec2(uTime*0.05, -uTime*0.04)).xyz*2.-1.;
          vec3 r = ripple(p);
          return vec3(a.xy*0.55 + b.xy*0.45 + c.xy*0.22 + r.xy, r.z);
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        float wd = ${jt.toFixed(2)} - tHeight(vWP.xz);   // kedalaman air di titik ini (m)
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
        if (!gl_FrontFacing) { diffuseColor.rgb = vec3(0.10, 0.30, 0.32); diffuseColor.a = 0.88; }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        { vec3 wn = wNorm(vWP.xz); float calm = 1.0 - clamp(foam, 0.0, 1.0) * 0.6;
          vec3 nW = normalize(vec3(wn.x * 0.35 * calm, 1.0, wn.y * 0.35 * calm));
          normal = normalize((viewMatrix * vec4(nW * (gl_FrontFacing ? 1.0 : -1.0), 0.0)).xyz); }`)};let a=new ke(new Is(ks,ks),r);return a.rotation.x=-Math.PI/2,a.position.y=jt,a.userData.noAO=!0,i.add(a),{mesh:a,update(o){s.uTime.value=o,Y0.uTime.value=o},ripple(o,l,c){t[n].set(o,l,s.uTime.value,c),n=(n+1)%t.length}}}var Kv=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  gl_Position.z = gl_Position.w; // selalu di bidang jauh
}`,Zv=`
uniform vec3 uZenith, uHorizon, uBelow, uSunDir, uSunColor, uCloudLit, uCloudDark;
uniform float uTime, uCloud, uSunDisc;
varying vec3 vDir;
float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
float fbm(vec2 p){ float a=.5, s=0.; for(int i=0;i<5;i++){ s+=a*vn(p); p=p*2.03+vec2(17.1,9.2); a*=.5; } return s; }
void main(){
  vec3 d = normalize(vDir);
  float y = d.y;
  vec3 col = y >= 0. ? mix(uHorizon, uZenith, pow(clamp(y,0.,1.), 0.42)) : mix(uHorizon, uBelow, smoothstep(0.,0.35,-y));
  float sd = max(dot(d, uSunDir), 0.);
  col += uSunColor * (pow(sd, 6.) * 0.10 + pow(sd, 48.) * 0.35 + pow(sd, 700.) * 1.4);
  col += uSunColor * uSunDisc * smoothstep(0.99985, 0.99992, sd) * 40.;
  if (uCloud > 0.001 && y > 0.0) {
    vec2 uv = d.xz / (y + 0.16) * 0.55 + vec2(uTime * 0.006, uTime * 0.002);
    float n = fbm(uv);
    float cov = smoothstep(0.50, 0.78, n) * uCloud;
    float thick = fbm(uv * 2.3 + 5.0);
    vec3 cc = mix(uCloudLit, uCloudDark, smoothstep(0.35, 0.85, thick) * 0.75);
    cc += uSunColor * pow(sd, 5.) * 0.35 * (1. - cov * 0.5);
    cov *= smoothstep(0.0, 0.22, y);
    col = mix(col, cc, cov);
  }
  gl_FragColor = vec4(col, 1.0);
}`;function J0(){return{uZenith:{value:new fe},uHorizon:{value:new fe},uBelow:{value:new fe},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new fe},uCloudLit:{value:new fe},uCloudDark:{value:new fe},uTime:{value:0},uCloud:{value:.8},uSunDisc:{value:1}}}function j0(i,e){let t=new ke(new $n(e,48,32),new Qt({uniforms:i,vertexShader:Kv,fragmentShader:Zv,side:Sn,depthWrite:!1,fog:!1}));return t.frustumCulled=!1,t.renderOrder=-10,t.userData.noAO=!0,t}var ra=(i,e,t)=>new fe().setRGB(i,e,t,vn),W0={z:ra(.003,.007,.024),h:ra(.012,.024,.06)},K0={z:ra(.05,.2,.58),h:ra(.5,.66,.84)},Z0={z:ra(.06,.12,.3),h:ra(1.05,.4,.17)},em=new fe;function tm(i,e){let t=J0(),n=j0(t,900);i.add(n);let s=J0();s.uCloud.value=0,s.uSunDisc.value=.35;let r=new li;r.add(j0(s,50));let a=new Oi(e),o=null,l=(()=>{let y=nn(5),_=700,M=new Float32Array(_*3);for(let x=0;x<_;x++){let v=y()*vt,F=y()*.95+.05,w=Math.sqrt(1-F*F);M[x*3]=Math.cos(v)*w*800,M[x*3+1]=F*800,M[x*3+2]=Math.sin(v)*w*800}let E=new bt;E.setAttribute("position",new dt(M,3));let S=new ci(E,new Zn({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));return S.frustumCulled=!1,S.userData.noAO=!0,i.add(S),S})(),c=new ke(new $n(18,24,16),new ln({color:new fe(2.2,2.3,2.6),fog:!1,toneMapped:!0}));c.userData.noAO=!0,i.add(c);let u=new Qn(16777215,3);u.castShadow=!0;let h=u.shadow.camera;h.left=-42,h.right=42,h.top=42,h.bottom=-42,h.near=1,h.far=320,u.shadow.bias=-4e-4,u.shadow.normalBias=.05,i.add(u),i.add(u.target);let d=new Qn(8361432,0);i.add(d),i.fog=new qa(11189196,.0155);let f=new k,p=99,b=9,g=!1,m={sun:u,sunDir:f,day:1,elev:1,get isNight(){return g},envEvery:2.5,setShadowSize(y){u.shadow.mapSize.x!==y&&(u.shadow.mapSize.set(y,y),u.shadow.map&&(u.shadow.map.dispose(),u.shadow.map=null))},update(y,_,M,E,S){let x=(y-.25)*vt,v=Math.sin(x),F=Ut(-.12,.3,v),w=Math.exp(-Math.pow(v/.2,2));m.day=F,m.elev=v,f.set(Math.cos(x)*.8,v,.45).normalize();for(let I of[t,s])I.uZenith.value.copy(W0.z).lerp(K0.z,F).lerp(Z0.z,w*.5),I.uHorizon.value.copy(W0.h).lerp(K0.h,F).lerp(Z0.h,w*.75),I.uSunDir.value.copy(f),I.uSunColor.value.setRGB(1,.62+.38*Ut(0,.5,v),.38+.62*Ut(0,.6,v)).multiplyScalar(Ut(-.1,.08,v)),I.uCloudLit.value.setRGB(An(.03,.95,F),An(.04,.96,F),An(.07,1,F)).lerp(em.setRGB(1.3,.62,.38),w*.65),I.uCloudDark.value.copy(I.uCloudLit.value).multiplyScalar(.5).lerp(em.setRGB(.05,.08,.16),.25),I.uTime.value=_;s.uBelow.value.setRGB(.05,.07,.03).multiplyScalar(.15+.85*F),t.uBelow.value.copy(t.uHorizon.value),i.fog.color.copy(t.uHorizon.value),S?(i.fog.color.setRGB(.012,.06,.065).multiplyScalar(.25+.75*F),i.fog.density=.11,n.visible=!1,l.visible=!1,c.visible=!1,i.background=i.fog.color):(i.fog.density=.0155,n.visible=!0,l.visible=!0,i.background=null),i.environmentIntensity=.42+.85*F;let H=E.x,q=E.y,C=E.z;n.position.set(H,q,C),l.position.set(H,0,C),l.material.opacity=Math.pow(1-F,2)*.95,c.position.set(H-f.x*700,q-f.y*700,C-f.z*700),c.visible=v<.1&&!S;let T=Math.round(H*2)/2,U=Math.round(C*2)/2;u.position.set(T+f.x*120,q+f.y*120,U+f.z*120),u.target.position.set(T,q,U),u.target.updateMatrixWorld(),u.intensity=6*Ut(-.02,.28,v),u.color.setRGB(1,.72+.28*Ut(0,.5,v),.5+.5*Ut(0,.6,v)),u.castShadow=v>.01,d.intensity=.95*(1-F),d.position.set(H-f.x*100,q-f.y*100+20,C-f.z*100);let P=F<.25;P!==g&&(g=P),p+=M,p>m.envEvery&&Math.abs(v-b)>.002&&(p=0,b=v,m.refreshEnv(i))},refreshEnv(y){let _=a.fromScene(r,0,.1,100,{size:128});o&&o.dispose(),o=_,y.environment=_.texture}};return m}function lu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new bt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0,f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=nm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let b=0;b<a[u].length;++b)f.push(a[u][b][d]);let p=nm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function nm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new dt(a,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let b=u.getComponent(d,p);o.setComponent(d+h,p,b)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function Ld(i,e){if(e===Wh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Zr||e===No){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Zr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function im(i){let e=new Map,t=new Map,n=i.clone();return sm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function sm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)sm(i.children[n],e.children[n],t)}var cu=class extends yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ud(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new uu(t,At.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new uu(t,At.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=hi.extractUrlBase(e);a=hi.resolveURL(c,this.path)}else a=hi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new us(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===cm){try{a[At.KHR_BINARY_GLTF]=new Kd(e)}catch(h){s&&s(h);return}r=JSON.parse(a[At.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new af(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case At.KHR_MATERIALS_UNLIT:a[h]=new Nd;break;case At.KHR_DRACO_MESH_COMPRESSION:a[h]=new Zd(r,this.dracoLoader);break;case At.KHR_TEXTURE_TRANSFORM:a[h]=new ef;break;case At.KHR_MESH_QUANTIZATION:a[h]=new tf;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function e_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function sn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var At={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kd=class{constructor(e){this.parser=e,this.name=At.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new fe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],vn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qn(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new er(u),c.distance=h;break;case"spot":c=new po(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Nd=class{constructor(){this.name=At.KHR_MATERIALS_UNLIT}getMaterialType(){return ln}extendParams(e,t,n){let s=[];e.color=new fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],vn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}},Cd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ud=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(r,r)}return Promise.all(s)}},Bd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Hd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_DISPERSION}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Gd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},qd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SHEEN}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],vn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Et)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Od=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Xd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_VOLUME}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(r[0],r[1],r[2],vn),Promise.all(s)}},Vd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IOR}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Yd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SPECULAR}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(r[0],r[1],r[2],vn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Et)),Promise.all(s)}},$d=class{constructor(e){this.parser=e,this.name=At.EXT_MATERIALS_BUMP}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Qd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},zd=class{constructor(e){this.parser=e,this.name=At.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Jd=class{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},jd=class{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},uu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Wd=class{constructor(e){this.name=At.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let b=new We,g=new k,m=new wt,y=new k(1,1,1),_=new Bn(p.geometry,p.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&y.fromBufferAttribute(l.SCALE,E),_.setMatrixAt(E,b.compose(g,m,y));let M=null;for(let E in l)if(E==="_COLOR_0"){let S=l[E];_.instanceColor=new Ri(S.array,S.itemSize,S.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(M===null){let x=_.geometry;M=new bt,M.name=x.name;for(let v in x.attributes)M.setAttribute(v,x.attributes[v]);for(let v in x.morphAttributes)M.morphAttributes[v]=x.morphAttributes[v];x.index!==null&&M.setIndex(x.index),M.morphTargetsRelative=x.morphTargetsRelative;for(let v of x.groups)M.addGroup(v.start,v.count,v.materialIndex);x.boundingBox!==null&&(M.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(M.boundingSphere=x.boundingSphere.clone()),M.drawRange.start=x.drawRange.start,M.drawRange.count=x.drawRange.count,M.userData=Object.assign({},x.userData),_.geometry=M}let S=l[E];M.setAttribute(E,new Ri(S.array,S.itemSize,S.normalized))}Gt.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},cm="glTF",qo=12,rm={JSON:1313821514,BIN:5130562},Kd=class{constructor(e){this.name=At.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,qo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-qo,r=new DataView(e,qo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===rm.JSON){let c=new Uint8Array(e,qo+a,o);this.content=n.decode(c)}else if(l===rm.BIN){let c=qo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=At.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=sf[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=sf[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=aa[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let b=f.attributes[p],g=l[p];g!==void 0&&(b.normalized=g)}h(f)},o,c,vn,d)})})}},ef=class{constructor(){this.name=At.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},tf=class{constructor(){this.name=At.KHR_MESH_QUANTIZATION}},hu=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,b=p-c,g=-2*f+3*d,m=f-d,y=1-g,_=m-d+h;for(let M=0;M!==o;M++){let E=a[b+M+o],S=a[b+M+l]*u,x=a[p+M+o],v=a[p+M]*u;r[M]=y*E+_*S+g*x+m*v}return r}},t_=new wt,nf=class extends hu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return t_.fromArray(r).normalize().toArray(r),r}},vi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},aa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},am={9728:Wt,9729:Mn,9984:pc,9985:Wr,9986:rr,9987:ni},om={33071:mi,33648:Ir,10497:Yt},Id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},n_={CUBICSPLINE:void 0,LINEAR:Qs,STEP:$s},Fd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function i_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new at({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bi})),i.DefaultMaterial}function lr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function s_(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function r_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function a_(i){let e,t=i.extensions&&i.extensions[At.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dd(t.attributes):e=i.indices+":"+Dd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Dd(i.targets[n]);return e}function Dd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function rf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function o_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var l_=new We,af=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new ti(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new go(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new us(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return lr(r,o,s),Xi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[At.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(hi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Id[s.type],o=aa[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new dt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Id[s.type],c=aa[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,b,g;if(f&&f!==h){let m=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(y);_||(b=new c(o,m*f,s.count*f/u),_=new As(b,f/u),t.cache.add(y,_)),g=new Rs(_,l,d%f/u,p)}else o===null?b=new c(s.count*l):b=new c(o,d,s.count*l),g=new dt(b,l,p);if(s.sparse!==void 0){let m=Id.SCALAR,y=aa[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,E=new y(a[1],_,s.sparse.count*m),S=new c(a[2],M,s.sparse.count*l);o!==null&&(g=new dt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let x=0,v=E.length;x<v;x++){let F=E[x];if(g.setX(F,S[x*l]),l>=2&&g.setY(F,S[x*l+1]),l>=3&&g.setZ(F,S[x*l+2]),l>=4&&g.setW(F,S[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=am[d.magFilter]||Mn,u.minFilter=am[d.minFilter]||ni,u.wrapS=om[d.wrapS]||Yt,u.wrapT=om[d.wrapT]||Yt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Wt&&u.minFilter!==Mn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let b=f;t.isImageBitmapLoader===!0&&(b=function(g){let m=new _n(g);m.needsUpdate=!0,f(m)}),t.load(hi.resolveURL(d,r.path),b,void 0,p)})})}let h=u.then(function(d){return c===!0&&o.revokeObjectURL(l),Xi(d,a),d.userData.mimeType=a.mimeType||o_(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[At.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[At.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[At.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Zn,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ls,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return at}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[At.KHR_MATERIALS_UNLIT]){let h=s[At.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new fe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],vn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Et)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Jt);let u=r.alphaMode||Fd.OPAQUE;if(u===Fd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Fd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ln&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==ln&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ln){let h=r.emissiveFactor;o.emissive=new fe().setRGB(h[0],h[1],h[2],vn)}return r.emissiveTexture!==void 0&&a!==ln&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),Xi(h,r),t.associations.set(h,{materials:e}),r.extensions&&lr(s,h,r),h})}createUniqueName(e){let t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[At.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return lm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=a_(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[At.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=lm(new bt,c,t),c.mode===vi.TRIANGLE_STRIP?d=d.then(f=>Ld(f,No)):c.mode===vi.TRIANGLE_FAN&&(d=d.then(f=>Ld(f,Zr))),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?i_(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let b=u[f],g=a[f],m,y=c[f];if(g.mode===vi.TRIANGLES||g.mode===vi.TRIANGLE_STRIP||g.mode===vi.TRIANGLE_FAN||g.mode===void 0){let _=r.isSkinnedMesh===!0,M=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");_&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=_&&M?new Va(b,y):new ke(b,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===vi.LINES)m=new js(b,y);else if(g.mode===vi.LINE_STRIP)m=new Js(b,y);else if(g.mode===vi.LINE_LOOP)m=new $a(b,y);else if(g.mode===vi.POINTS)m=new ci(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&r_(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Xi(m,r),g.extensions&&lr(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&lr(s,h[0],r),h[0];let d=new on;r.extensions&&lr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(Zc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new hs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ya(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],b=f.target,g=b.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],b=h[3],g=h[4],m=[];for(let _=0,M=d.length;_<M;_++){let E=d[_],S=f[_],x=p[_],v=b[_],F=g[_];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let w=n._createAnimationTracks(E,S,x,v,F);if(w)for(let H=0;H<w.length;H++)m.push(w[H])}let y=new ho(r,void 0,m);return Xi(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,l_)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new k().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Br:c.length>1?u=new on:c.length===1?u=c[0]:u=new Gt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Xi(u,r),r.extensions&&lr(n,u,r),r.matrix!==void 0){let h=new We;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new on;n.name&&(r.name=s.createUniqueName(n.name)),Xi(r,n),n.extensions&&lr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(im(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Fn||d instanceof _n)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ns[r.path]===Ns.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Ns[r.path]){case Ns.weights:u=os;break;case Ns.rotation:u=ls;break;case Ns.translation:case Ns.scale:u=Fs;break;default:n.itemSize===1?u=os:u=Fs;break}let h=s.interpolation!==void 0?n_[s.interpolation]:Qs,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let b=new u(l[f]+"."+Ns[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=rf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ls?nf:hu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function c_(i,e,t){let n=e.attributes,s=new Un;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){let u=rf(aa[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new k,l=new k;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let b=rf(aa[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Kn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function lm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=sf[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return gt.workingColorSpace!==vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Xi(i,e),c_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?s_(i,e.targets,t):i})}var of=new WeakMap,u_=new URL("../libs/draco/draco_decoder.wasm",import.meta.url).toString(),h_=new URL("../libs/draco/draco_wasm_wrapper.js",import.meta.url).toString(),d_=new URL("../libs/draco/draco_decoder.js",import.meta.url).toString(),wE={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",import.meta.url).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",import.meta.url).toString()},du=class extends yi{constructor(e){super(e),this.decoderPaths={js:h_,wasm:u_,dep_js:d_},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=hi.resolveURL("draco_wasm_wrapper.js",e),t.wasm=hi.resolveURL("draco_decoder.wasm",e),t.dep_js=hi.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new us(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Et,n).catch(n)}decodeDracoFile(e,t,n,s,r=vn,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(of.has(e)){let l=of.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(s=l,new Promise((c,u)=>{s._callbacks[r]={resolve:c,reject:u},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),of.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new bt;e.index&&t.setIndex(new dt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:s,array:r,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[n],c;if(a===o)c=new dt(r,a);else{let u=new As(r,o);c=new Rs(u,a,0)}s==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==Et)return;let n=new fe;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),gt.colorSpaceToWorking(n,Et),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new us(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(s=>{let r=s[0];e||(this.decoderConfig.wasmBinary=s[1]);let a=f_.toString(),o=["/* draco decoder */",r,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function f_(){let i,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":let l=o.buffer,c=o.taskConfig;e.then(u=>{let h=u.draco,d=new h.Decoder;try{let f=t(h,d,new Int8Array(l),c),p=f.attributes.map(b=>b.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(d)}});break}};function t(a,o,l,c){let u=c.attributeIDs,h=c.attributeTypes,d,f,p=o.GetEncodedGeometryType(l);if(p===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(p===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let b={index:null,attributes:[]};for(let g in u){let m=self[h[g]],y,_;if(c.useUniqueIDs)_=u[g],y=o.GetAttributeByUniqueId(d,_);else{if(_=o.GetAttributeId(d,a[u[g]]),_===-1)continue;y=o.GetAttribute(d,_)}let M=s(a,o,d,g,m,y);g==="color"&&(M.vertexColorSpace=c.vertexColorSpace),b.attributes.push(M)}return p===a.TRIANGULAR_MESH&&(b.index=n(a,o,d)),a.destroy(d),b}function n(a,o,l){let u=l.num_faces()*3,h=u*4,d=a._malloc(h);o.GetTrianglesUInt32Array(l,h,d);let f=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:f,itemSize:1}}function s(a,o,l,c,u,h){let d=l.num_points(),f=h.num_components(),p=r(a,u),b=f*u.BYTES_PER_ELEMENT,g=Math.ceil(b/4)*4,m=g/u.BYTES_PER_ELEMENT,y=d*b,_=d*g,M=a._malloc(y);o.GetAttributeDataArrayForAllPoints(l,h,p,y,M);let E=new u(a.HEAPF32.buffer,M,y/u.BYTES_PER_ELEMENT),S;if(b===g)S=E.slice();else{S=new u(_/u.BYTES_PER_ELEMENT);let x=0;for(let v=0;v<d;v++){for(let F=0;F<f;F++)S[x+F]=E[v*f+F];x+=m}}return a._free(M),{name:c,count:d,itemSize:f,array:S,stride:m}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var Oo=class{constructor(e){bs(this,"m_w",123456789);bs(this,"m_z",987654321);bs(this,"mask",4294967295);this.m_w=123456789+e&this.mask,this.m_z=987654321-e&this.mask}random(e=1,t=0){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let n=(this.m_z<<16)+(this.m_w&65535)>>>0;return n/=4294967296,(e-t)*n+t}};var oa=class{constructor(e=new k,t=new $t,n=0,s=0,r=0,a=0,o=0){this.origin=e.clone(),this.orientation=t.clone(),this.length=n,this.radius=s,this.level=r,this.sectionCount=a,this.segmentCount=o}};var lf={Birch:"birch",Oak:"oak",Pine:"pine",Willow:"willow"},Xo={Single:"single",Double:"double"},cf={Ash:"ash",Aspen:"aspen",Pine:"pine",Oak:"oak"},cr={Deciduous:"deciduous",Evergreen:"evergreen"};var ur=class{constructor(){this.seed=0,this.type=cr.Deciduous,this.bark={type:lf.Oak,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},this.branch={levels:3,angle:{1:70,2:60,3:60},children:{0:7,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:.01},gnarliness:{0:.15,1:.2,2:.3,3:.02},length:{0:20,1:20,2:10,3:1},radius:{0:1.5,1:.7,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.4,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},this.leaves={type:cf.Oak,billboard:Xo.Double,angle:10,count:1,start:0,size:2.5,sizeVariance:.7,tint:16777215,alphaTest:.5},this.trellis={enabled:!1,position:{x:0,y:0,z:-2},width:10,height:20,spacing:2,force:{strength:.02,maxDistance:3,falloff:1},cylinderRadius:.05,visible:!0,color:9127187}}copy(e,t=this){for(let n in e)e.hasOwnProperty(n)&&t.hasOwnProperty(n)&&(typeof e[n]=="object"&&e[n]!==null?this.copy(e[n],t[n]):t[n]=e[n])}};var um={seed:26867,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:2,angle:{"1":48,"2":75,"3":60},children:{"0":10,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.11,"1":.09,"2":.05,"3":.09},length:{"0":23.87,"1":18,"2":5.59,"3":4.6},radius:{"0":.81,"1":.56,"2":.76,"3":.7},sections:{"0":12,"1":10,"2":10,"3":10},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.53,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:30,start:0,size:2.05,sizeVariance:.717,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var hm={seed:36330,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":48,"2":75,"3":60},children:{"0":7,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.06},gnarliness:{"0":.03,"1":.25,"2":.2,"3":.09},length:{"0":43.47,"1":27.14,"2":9.51,"3":4.6},radius:{"0":2,"1":.63,"2":.76,"3":.7},sections:{"0":12,"1":8,"2":6,"3":4},segments:{"0":12,"1":6,"2":4,"3":3},start:{"1":.23,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.09,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:16,start:0,size:2.67,sizeVariance:.72,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var dm={seed:29919,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":39,"2":39,"3":51},children:{"0":10,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.010869565217391311},gnarliness:{"0":-.05,"1":.2,"2":.16,"3":.049999999999999996},length:{"0":45,"1":29.42,"2":15.3,"3":4.6},radius:{"0":3.03,"1":.53,"2":.79,"3":1.11},sections:{"0":12,"1":8,"2":6,"3":4},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.32,"2":.34,"3":0},taper:{"0":.7,"1":.6199999999999999,"2":.7599999999999999,"3":0},twist:{"0":.09,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:30,count:10,start:.01,size:4.62,sizeVariance:.72,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var fm={seed:36330,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":70,"2":35,"3":7},children:{"0":4,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:.010869565217391311},gnarliness:{"0":.04,"1":-.010000000000000007,"2":.12,"3":.02},length:{"0":23.99,"1":3.36,"2":7.699999999999999,"3":1},radius:{"0":.36999999999999994,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.44999999999999996,"2":.32999999999999996,"3":0},taper:{"0":.37,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:30,count:13,start:.2,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},trellis:{enabled:!1}};var pm={seed:18020,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":75,"2":32,"3":7},children:{"0":10,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:.0148},gnarliness:{"0":.05,"1":.12,"2":.12,"3":.02},length:{"0":50,"1":6.07,"2":11.19,"3":1},radius:{"0":.72,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.59,"2":.35,"3":0},taper:{"0":.37,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:30,count:11,start:.124,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},trellis:{enabled:!1}};var mm={seed:30631,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":47,"2":63,"3":7},children:{"0":10,"1":6,"2":0},force:{direction:{x:0,y:1,z:0},strength:.021739130434782622},gnarliness:{"0":.05,"1":-.030000000000000006,"2":.12,"3":.02},length:{"0":69.60000000000001,"1":18.56,"2":11.19,"3":1},radius:{"0":1.11,"1":.5800000000000001,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.62,"2":.049999999999999975,"3":0},taper:{"0":.7000000000000001,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:36,count:20,start:.15217391304347827,size:3.4782608695652173,sizeVariance:.7,tint:16580390,alphaTest:.5},trellis:{enabled:!1}};var gm={seed:45590,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":21.521739130434785,"2":62.608695652173914,"3":60},children:{"0":7,"1":3,"2":2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.11,"1":.09,"2":.05,"3":.09},length:{"0":.1,"1":15.302173913043479,"2":5.59,"3":4.6},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.76,"3":.7},sections:{"0":6,"1":6,"2":10,"3":10},segments:{"0":4,"1":4,"2":4,"3":3},start:{"1":.53,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:12,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},trellis:{enabled:!1}};var xm={seed:45590,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:2,angle:{"1":19.565217391304348,"2":27.39130434782609,"3":60},children:{"0":10,"1":3,"2":2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.021739130434782594,"1":.10869565217391308,"2":.05,"3":.09},length:{"0":.1,"1":19.645652173913046,"2":7.701086956521739,"3":4.6},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.76,"3":.7},sections:{"0":3,"1":4,"2":10,"3":10},segments:{"0":4,"1":4,"2":4,"3":3},start:{"1":.6413043478260869,"2":.7065217391304348,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3586956521739131,"1":-.043478260869565244,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:55,count:7,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},trellis:{enabled:!1}};var bm={seed:31343,type:"evergreen",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":66.52173913043478,"2":52.82608695652174,"3":0},children:{"0":13,"1":4,"2":4},force:{direction:{x:0,y:1,z:0},strength:-.007},gnarliness:{"0":.05434782608695654,"1":.06521739130434778,"2":.05,"3":.09},length:{"0":10.958695652173914,"1":21.81739130434783,"2":13.130434782608695,"3":5.529347826086957},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.6858695652173914,"3":.7391304347826086},sections:{"0":4,"1":3,"2":3,"3":10},segments:{"0":3,"1":3,"2":3,"3":3},start:{"1":.14130434782608695,"2":.29347826086956524,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.03260869565217389,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:54,count:3,start:.15217391304347827,size:3.0434782608695654,sizeVariance:.45652173913043476,tint:10339327,alphaTest:.5},trellis:{enabled:!1}};var ym={seed:30895,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":58,"3":32},children:{"0":4,"1":2,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{"0":.07,"1":-.08,"2":.11,"3":.09},length:{"0":28.08,"1":4.55,"2":9.78,"3":7.16},radius:{"0":1,"1":1.02,"2":.69,"3":1.19},sections:{"0":16,"1":9,"2":8,"3":1},segments:{"0":7,"1":5,"2":3,"3":3},start:{"1":.49,"2":.06,"3":.12},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:42,count:14,start:.16,size:1.38,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var Mm={seed:35729,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":58,"3":32},children:{"0":6,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{"0":0,"1":-.1,"2":-.15,"3":.09},length:{"0":37.24,"1":11.08,"2":12.39,"3":7.16},radius:{"0":1.41,"1":.9,"2":.69,"3":1.19},sections:{"0":8,"1":6,"2":3,"3":1},segments:{"0":7,"1":5,"2":3,"3":3},start:{"1":.49,"2":.06,"3":.12},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:42,count:18,start:.16,size:2.5,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var vm={seed:23399,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":43,"3":32},children:{"0":9,"1":5,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.025},gnarliness:{"0":-.04,"1":.16,"2":-.06,"3":.09},length:{"0":47.7,"1":29.39,"2":17.62,"3":7.16},radius:{"0":3,"1":.69,"2":.69,"3":1.19},sections:{"0":16,"1":9,"2":8,"3":3},segments:{"0":12,"1":5,"2":3,"3":3},start:{"1":.35,"2":.1,"3":0},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:36,count:10,start:.16,size:4.5,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var _m={seed:11744,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":117,"2":60,"3":60},children:{"0":91,"1":7,"2":5},force:{direction:{x:0,y:1,z:0},strength:0},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":39.55,"1":12.12,"2":10,"3":1},radius:{"0":.55,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.16,"2":.3,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:10,count:21,start:0,size:.965,sizeVariance:.7,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var Sm={seed:13977,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":110,"2":16,"3":60},children:{"0":82,"1":3,"2":5},force:{direction:{x:0,y:1,z:0},strength:-.003},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":50,"1":23.87,"2":14.08,"3":1},radius:{"0":1.05,"1":.36,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.27,"2":.14,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:39,count:30,start:.09,size:1.435,sizeVariance:.201,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var Tm={seed:44166,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":129.1304347826087,"2":16,"3":60},children:{"0":100,"1":3,"2":0},force:{direction:{x:0,y:1,z:0},strength:.009000000000000001},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":65.25217391304348,"1":34.84782608695652,"2":27.246739130434783,"3":1},radius:{"0":1.271739130434783,"1":.366304347826087,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.29347826086956524,"2":.14,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:17,count:18,start:.07608695652173914,size:2.608695652173913,sizeVariance:.201,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var Em={seed:41563,type:"deciduous",bark:{type:"oak",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:8}},branch:{levels:3,angle:{"1":26,"2":79,"3":0},children:{"0":7,"1":5,"2":1},force:{direction:{x:0,y:1,z:0},strength:.026},gnarliness:{"0":0,"1":.02,"2":-.41,"3":.09},length:{"0":4.8,"1":16.9,"2":11.3,"3":11.1},radius:{"0":.27,"1":.71,"2":.84,"3":.48},sections:{"0":6,"1":12,"2":10,"3":4},segments:{"0":3,"1":3,"2":3,"3":3},start:{"1":.19,"2":.1,"3":.06},taper:{"0":.6,"1":.5,"2":.5,"3":.5},twist:{"0":-.02,"1":-.01,"2":.09,"3":0}},leaves:{type:"ash",billboard:"single",angle:30,count:13,start:0,size:1.7,sizeVariance:.5,tint:15204310,alphaTest:.5},trellis:{enabled:!0,position:{x:0,y:0,z:1.3},width:20,height:32,spacing:4,force:{strength:.014,maxDistance:18.2,falloff:1.3},cylinderRadius:.08,visible:!0,color:5519173}};var fu={"Ash Small":um,"Ash Medium":hm,"Ash Large":dm,"Aspen Small":fm,"Aspen Medium":pm,"Aspen Large":mm,"Bush 1":gm,"Bush 2":xm,"Bush 3":bm,"Oak Small":ym,"Oak Medium":Mm,"Oak Large":vm,"Pine Small":_m,"Pine Medium":Sm,"Pine Large":Tm,Trellis:Em};function Am(i){let e=fu[i];return e?structuredClone(e):new ur}var pu="./dist/assets/birch_ao_1k-M2EJQD6U.jpg";var mu="./dist/assets/birch_color_1k-4PBNIVXY.jpg";var gu="./dist/assets/birch_normal_1k-FVP2SILN.jpg";var xu="./dist/assets/birch_roughness_1k-GWSNOJHT.jpg";var bu="./dist/assets/oak_ao_1k-OF45DLVF.jpg";var yu="./dist/assets/oak_color_1k-2M2JUF3C.jpg";var Mu="./dist/assets/oak_normal_1k-OXREJG4N.jpg";var vu="./dist/assets/oak_roughness_1k-Z2ZMHKAG.jpg";var _u="./dist/assets/pine_ao_1k-FCNELEZP.jpg";var Su="./dist/assets/pine_color_1k-CXUMSRID.jpg";var Tu="./dist/assets/pine_normal_1k-O2AXH5ZF.jpg";var Eu="./dist/assets/pine_roughness_1k-AEQ6CLQ3.jpg";var Au="./dist/assets/willow_ao_1k-XPYUNGG3.jpg";var Ru="./dist/assets/willow_color_1k-RCBPBDE7.jpg";var Pu="./dist/assets/willow_normal_1k-SBJUCNBQ.jpg";var wu="./dist/assets/willow_roughness_1k-LIIAXLS2.jpg";var Rm="./dist/assets/ash_color-D7NZKJW5.png";var Pm="./dist/assets/aspen_color-FK2SNQDU.png";var wm="./dist/assets/oak_color-3V4YA6HA.png";var Lm="./dist/assets/pine_color-FUSX6YQW.png";var j_=new ti;function Vo(i,e,t={x:1,y:1}){let n=Fm.bark[i][e];return n.wrapS=Yt,n.wrapT=Yt,n.repeat.x=t.x,n.repeat.y=1/t.y,n}function Im(i){return Fm.leaves[i]}var gn=(i,e=!0)=>{let t=j_.load(i);return t.premultiplyAlpha=!0,e&&(t.colorSpace=Et),t},Fm={bark:{birch:{ao:gn(pu,!1),color:gn(mu),normal:gn(gu,!1),roughness:gn(xu,!1)},oak:{ao:gn(bu,!1),color:gn(yu),normal:gn(Mu,!1),roughness:gn(vu,!1)},pine:{ao:gn(_u,!1),color:gn(Su),normal:gn(Tu,!1),roughness:gn(Eu,!1)},willow:{ao:gn(Au,!1),color:gn(Ru),normal:gn(Pu,!1),roughness:gn(wu,!1)}},leaves:{ash:gn(Rm),aspen:gn(Pm),oak:gn(wm),pine:gn(Lm)}};var Yo=class extends on{constructor(e){super(),this.name="Trellis",this.options=e,this.material=null,this.hCylinderGeo=null,this.vCylinderGeo=null}generate(){let e=this.options;this.dispose(),this.material=new at({color:e.color,roughness:.8}),this.hCylinderGeo=new dn(e.cylinderRadius,e.cylinderRadius,e.width,8),this.hCylinderGeo.rotateZ(Math.PI/2),this.vCylinderGeo=new dn(e.cylinderRadius,e.cylinderRadius,e.height,8);let t=Math.floor(e.height/e.spacing)+1;for(let s=0;s<t;s++){let r=s*e.spacing,a=new ke(this.hCylinderGeo,this.material);a.position.set(e.position.x,e.position.y+r,e.position.z),this.add(a)}let n=Math.floor(e.width/e.spacing)+1;for(let s=0;s<n;s++){let r=-e.width/2+s*e.spacing,a=new ke(this.vCylinderGeo,this.material);a.position.set(e.position.x+r,e.position.y+e.height/2,e.position.z),this.add(a)}}getNearestPoint(e){let t=this.options,n=t.position.x,s=t.position.y,r=t.position.z,a=n-t.width/2,o=n+t.width/2,l=s,c=s+t.height,u=Math.max(a,Math.min(o,e.x)),h=Math.max(l,Math.min(c,e.y)),d=Math.round((h-l)/t.spacing)*t.spacing+l,f=Math.max(l,Math.min(c,d)),p=Math.round((u-a)/t.spacing)*t.spacing+a,b=Math.max(a,Math.min(o,p)),g=new k(u,f,r),m=new k(b,h,r),y=e.distanceTo(g),_=e.distanceTo(m);return y<_?g:m}dispose(){this.children.forEach(e=>{e.geometry&&(e.geometry=null)}),this.clear(),this.hCylinderGeo&&(this.hCylinderGeo.dispose(),this.hCylinderGeo=null),this.vCylinderGeo&&(this.vCylinderGeo.dispose(),this.vCylinderGeo=null),this.material&&(this.material.dispose(),this.material=null)}};var $o=class extends on{constructor(t=new ur){super();bs(this,"rng");bs(this,"options");bs(this,"branchQueue",[]);this.name="Tree",this.branchesMesh=new ke,this.leavesMesh=new ke,this.trellisMesh=null,this.add(this.branchesMesh),this.add(this.leavesMesh),this.options=t}update(t){let n=this.leavesMesh.material.userData.shader;n&&(n.uniforms.uTime.value=t)}loadPreset(t){let n=Am(t);this.loadFromJson(n)}loadFromJson(t){this.options.copy(t),this.generate()}generate(){for(this.branches={verts:[],normals:[],indices:[],uvs:[],windFactor:[]},this.leaves={verts:[],normals:[],indices:[],uvs:[]},this.rng=new Oo(this.options.seed),this.branchQueue.push(new oa(new k,new $t,this.options.branch.length[0],this.options.branch.radius[0],0,this.options.branch.sections[0],this.options.branch.segments[0]));this.branchQueue.length>0;){let t=this.branchQueue.shift();this.generateBranch(t)}this.createBranchesGeometry(),this.createLeavesGeometry(),this.createTrellis()}generateBranch(t){let n=this.branches.verts.length/3,s=t.orientation.clone(),r=t.origin.clone(),a=t.length/t.sectionCount/(this.options.type==="Deciduous"?this.options.branch.levels-1:1),o=[];for(let l=0;l<=t.sectionCount;l++){let c=t.radius;l===t.sectionCount&&t.level===this.options.branch.levels?c=.001:this.options.type===cr.Deciduous?c*=1-this.options.branch.taper[t.level]*(l/t.sectionCount):this.options.type===cr.Evergreen&&(c*=1-l/t.sectionCount);let u;for(let b=0;b<t.segmentCount;b++){let g=2*Math.PI*b/t.segmentCount,m=new k(Math.cos(g),0,Math.sin(g)).multiplyScalar(c).applyEuler(s).add(r),y=new k(Math.cos(g),0,Math.sin(g)).applyEuler(s).normalize(),_=new de(b/t.segmentCount,l%2===0?0:1);this.branches.verts.push(...Object.values(m)),this.branches.normals.push(...Object.values(y)),this.branches.uvs.push(...Object.values(_)),b===0&&(u={vertex:m,normal:y,uv:_})}this.branches.verts.push(...Object.values(u.vertex)),this.branches.normals.push(...Object.values(u.normal)),this.branches.uvs.push(1,u.uv.y),o.push({origin:r.clone(),orientation:s.clone(),radius:c}),r.add(new k(0,a,0).applyEuler(s));let h=Math.max(1,1/Math.sqrt(c))*this.options.branch.gnarliness[t.level];s.x+=this.rng.random(h,-h),s.z+=this.rng.random(h,-h);let d=new wt().setFromEuler(s),f=new wt().setFromAxisAngle(new k(0,1,0),this.options.branch.twist[t.level]),p=new wt().setFromUnitVectors(new k(0,1,0),new k().copy(this.options.branch.force.direction));if(d.multiply(f),d.rotateTowards(p,this.options.branch.force.strength/c),this.options.trellis.enabled){let b=this.calculateTrellisForce(r,c);if(b){let g=new wt().setFromUnitVectors(new k(0,1,0),b.direction);d.rotateTowards(g,b.strength)}}s.setFromQuaternion(d)}if(this.generateBranchIndices(n,t),this.options.type==="deciduous"){let l=o[o.length-1];t.level<this.options.branch.levels?this.branchQueue.push(new oa(l.origin,l.orientation,this.options.branch.length[t.level+1],l.radius,t.level+1,t.sectionCount,t.segmentCount)):this.generateLeaf(l.origin,l.orientation)}t.level===this.options.branch.levels?this.generateLeaves(o):t.level<this.options.branch.levels&&this.generateChildBranches(this.options.branch.children[t.level],t.level+1,o)}generateChildBranches(t,n,s){let r=this.rng.random();for(let a=0;a<t;a++){let o=this.rng.random(1,this.options.branch.start[n]),l=Math.floor(o*(s.length-1)),c,u;c=s[l],l===s.length-1?u=c:u=s[l+1];let h=(o-l/(s.length-1))/(1/(s.length-1)),d=new k().lerpVectors(c.origin,u.origin,h),f=this.options.branch.radius[n]*((1-h)*c.radius+h*u.radius),p=new wt().setFromEuler(c.orientation),b=new wt().setFromEuler(u.orientation),g=new $t().setFromQuaternion(b.slerp(p,h)),m=2*Math.PI*(r+a/t),y=new wt().setFromAxisAngle(new k(1,0,0),this.options.branch.angle[n]/(180/Math.PI)),_=new wt().setFromAxisAngle(new k(0,1,0),m),M=new wt().setFromEuler(g),E=new $t().setFromQuaternion(M.multiply(_.multiply(y))),S=this.options.branch.length[n]*(this.options.type===cr.Evergreen?1-o:1);this.branchQueue.push(new oa(d,E,S,f,n,this.options.branch.sections[n],this.options.branch.segments[n]))}}generateLeaves(t){let n=this.rng.random();for(let s=0;s<this.options.leaves.count;s++){let r=this.rng.random(1,this.options.leaves.start),a=Math.floor(r*(t.length-1)),o,l;o=t[a],a===t.length-1?l=o:l=t[a+1];let c=(r-a/(t.length-1))/(1/(t.length-1)),u=new k().lerpVectors(o.origin,l.origin,c),h=new wt().setFromEuler(o.orientation),d=new wt().setFromEuler(l.orientation),f=new $t().setFromQuaternion(d.slerp(h,c)),p=2*Math.PI*(n+s/this.options.leaves.count),b=new wt().setFromAxisAngle(new k(1,0,0),this.options.leaves.angle/(180/Math.PI)),g=new wt().setFromAxisAngle(new k(0,1,0),p),m=new wt().setFromEuler(f),y=new $t().setFromQuaternion(m.multiply(g.multiply(b)));this.generateLeaf(u,y)}}generateLeaf(t,n){let s=this.leaves.verts.length/3,r=this.options.leaves.size*(1+this.rng.random(this.options.leaves.sizeVariance,-this.options.leaves.sizeVariance)),a=r,o=r,l=c=>{let u=[new k(-a/2,o,0),new k(-a/2,0,0),new k(a/2,0,0),new k(a/2,o,0)].map(d=>d.applyEuler(new $t(0,c,0)).applyEuler(n).add(t));this.leaves.verts.push(u[0].x,u[0].y,u[0].z,u[1].x,u[1].y,u[1].z,u[2].x,u[2].y,u[2].z,u[3].x,u[3].y,u[3].z);let h=new k(0,0,1).applyEuler(n);this.leaves.normals.push(h.x,h.y,h.z,h.x,h.y,h.z,h.x,h.y,h.z,h.x,h.y,h.z),this.leaves.uvs.push(0,1,0,0,1,0,1,1),this.leaves.indices.push(s,s+1,s+2,s,s+2,s+3),s+=4};l(0),this.options.leaves.billboard===Xo.Double&&l(Math.PI/2)}generateBranchIndices(t,n){let s,r,a,o,l=n.segmentCount+1;for(let c=0;c<n.sectionCount;c++)for(let u=0;u<n.segmentCount;u++)s=t+c*l+u,r=t+c*l+(u+1),a=s+l,o=r+l,this.branches.indices.push(s,a,r,r,a,o)}createBranchesGeometry(){let t=new bt;t.setAttribute("position",new dt(new Float32Array(this.branches.verts),3)),t.setAttribute("normal",new dt(new Float32Array(this.branches.normals),3)),t.setAttribute("uv",new dt(new Float32Array(this.branches.uvs),2)),t.setIndex(new dt(new Uint16Array(this.branches.indices),1)),t.computeBoundingSphere();let n=new Xr({name:"branches",flatShading:this.options.bark.flatShading,color:new fe(this.options.bark.tint)});this.options.bark.textured&&(n.aoMap=Vo(this.options.bark.type,"ao",this.options.bark.textureScale),n.map=Vo(this.options.bark.type,"color",this.options.bark.textureScale),n.normalMap=Vo(this.options.bark.type,"normal",this.options.bark.textureScale),n.roughnessMap=Vo(this.options.bark.type,"roughness",this.options.bark.textureScale)),this.branchesMesh.geometry.dispose(),this.branchesMesh.geometry=t,this.branchesMesh.material.dispose(),this.branchesMesh.material=n,this.branchesMesh.castShadow=!0,this.branchesMesh.receiveShadow=!0}createLeavesGeometry(){let t=new bt;t.setAttribute("position",new dt(new Float32Array(this.leaves.verts),3)),t.setAttribute("uv",new dt(new Float32Array(this.leaves.uvs),2)),t.setIndex(new dt(new Uint16Array(this.leaves.indices),1)),t.computeVertexNormals(),t.computeBoundingSphere();let n=new Xr({name:"leaves",map:Im(this.options.leaves.type),color:new fe(this.options.leaves.tint),side:Jt,alphaTest:this.options.leaves.alphaTest,dithering:!0});n.onBeforeCompile=s=>{s.uniforms.uTime={value:0},s.uniforms.uWindStrength={value:new k(.5,0,.5)},s.uniforms.uWindFrequency={value:.5},s.uniforms.uWindScale={value:70},s.vertexShader=`
        uniform float uTime;
        uniform vec3 uWindStrength;
        uniform float uWindFrequency;
        uniform float uWindScale;
        `+s.vertexShader,s.vertexShader=s.vertexShader.replace("void main() {",`
        // GLSL Simplex Noise 3D
        // Source: https://github.com/ashima/webgl-noise

        vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 mod289(vec4 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 permute(vec4 x) {
            return mod289(((x*34.0)+1.0)*x);
        }

        vec4 taylorInvSqrt(vec4 r) {
            return 1.79284291400159 - 0.85373472095314 * r;
        }

        vec3 fade(vec3 t) {
            return t*t*t*(t*(t*6.0-15.0)+10.0);
        }

        // Classic Simplex Noise 3D
        float simplex3(vec3 v) {
            const vec2  C = vec2(1.0/6.0, 1.0/3.0);
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

            // First corner
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 = v - i + dot(i, C.xxx);

            // Other corners
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );

            //  x0 = x0 - 0. + 0.0 * C 
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy; // 2.0 * C.x = 1/3 = C.y
            vec3 x3 = x0 - D.yyy;      // -1.0 + 3.0 * C.x = -0.5

            // Permutations
            i = mod289(i);
            vec4 p = permute( permute( permute( 
                        i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                      + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                      + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

            // Gradients: 7x7 points over a square, mapped onto an octahedron.
            // The ring size 17*17 = 289 is close to the mapping's singularity.
            float n_ = 0.142857142857; // 1.0/7.0
            vec3  ns = n_ * D.wyz - D.xzx;

            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);

            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );

            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));

            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

            vec3 g0 = vec3(a0.xy,h.x);
            vec3 g1 = vec3(a0.zw,h.y);
            vec3 g2 = vec3(a1.xy,h.z);
            vec3 g3 = vec3(a1.zw,h.w);

            // Normalise gradients
            vec4 norm = taylorInvSqrt(vec4(dot(g0,g0), dot(g1,g1), dot(g2,g2), dot(g3,g3)));
            g0 *= norm.x;
            g1 *= norm.y;
            g2 *= norm.z;
            g3 *= norm.w;

            // Mix contributions from the four corners
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(g0,x0), dot(g1,x1), 
                                          dot(g2,x2), dot(g3,x3) ) );
        }
          
        void main() {`),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",`
        vec4 mvPosition = vec4(transformed, 1.0);

        float windOffset = 2.0 * 3.14 * simplex3(mvPosition.xyz / uWindScale);
        vec3 windSway = uv.y * uWindStrength * (
          0.5 * sin(uTime * uWindFrequency + windOffset) +
          0.3 * sin(2.0 * uTime * uWindFrequency + 1.3 * windOffset) +
          0.2 * sin(5.0 * uTime * uWindFrequency + 1.5 * windOffset)
        );
        mvPosition.xyz += windSway;

        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;
        `),n.userData.shader=s},this.leavesMesh.geometry.dispose(),this.leavesMesh.geometry=t,this.leavesMesh.material.dispose(),this.leavesMesh.material=n,this.leavesMesh.castShadow=!0,this.leavesMesh.receiveShadow=!0}createTrellis(){this.trellisMesh&&(this.remove(this.trellisMesh),this.trellisMesh.dispose(),this.trellisMesh=null),this.options.trellis.enabled&&this.options.trellis.visible&&(this.trellisMesh=new Yo(this.options.trellis),this.trellisMesh.generate(),this.add(this.trellisMesh))}getNearestTrellisPoint(t){let n=this.options.trellis,s=n.position.x,r=n.position.y,a=n.position.z,o=s-n.width/2,l=s+n.width/2,c=r,u=r+n.height,h=Math.max(o,Math.min(l,t.x)),d=Math.max(c,Math.min(u,t.y)),f=Math.round((d-c)/n.spacing)*n.spacing+c,p=Math.max(c,Math.min(u,f)),b=Math.round((h-o)/n.spacing)*n.spacing+o,g=Math.max(o,Math.min(l,b)),m=new k(h,p,a),y=new k(g,d,a),_=t.distanceTo(m),M=t.distanceTo(y);return _<M?m:y}calculateTrellisForce(t,n){let s=this.options.trellis,r=this.getNearestTrellisPoint(t),a=t.distanceTo(r);if(a>s.force.maxDistance||a<.001)return null;let o=new k().subVectors(r,t).normalize(),l=1-Math.pow(a/s.force.maxDistance,s.force.falloff),c=s.force.strength*l/n;return{direction:o,strength:c}}get vertexCount(){return(this.branches.verts.length+this.leaves.verts.length)/3}get triangleCount(){return(this.branches.indices.length+this.leaves.indices.length)/3}};var W_={jati:{preset:"Ash Large",seed:4211,height:18,leafScale:2.3,leafCount:.7,tint:7314484,tweak(i){i.branch.gnarliness[0]=.02,i.branch.length[0]*=1.15,i.branch.angle[1]=55}},mahoni:{preset:"Oak Large",seed:9083,height:19,leaf:"ash",leafScale:1,leafCount:1.9,tint:2908976},beringin:{preset:"Oak Large",seed:1377,height:14,bark:"willow",leaf:"aspen",leafScale:.85,leafCount:1.9,tint:4885562,roots:!0,tweak(i){i.branch.length[0]*=.7,i.branch.radius[0]*=1.5,i.branch.length[1]*=1.25,i.branch.angle[1]=80}},pinus:{preset:"Pine Large",seed:6654,height:22,tint:4090426},trembesi:{preset:"Oak Large",seed:2025,height:15,leaf:"ash",leafScale:.9,leafCount:1.9,tint:6003260,tweak(i){i.branch.length[0]*=.65,i.branch.radius[0]*=1.35,i.branch.length[1]*=1.7,i.branch.angle[1]=88,i.branch.gnarliness[1]=.12}}},Fu={uTime:{value:0},uWindAmp:{value:1}},uf={};function hf(i){return JSON.parse(JSON.stringify(i))}function Lu(i,e){let t=new $o;if(t.options.copy(hf(fu[i])),t.options.seed=e.seed,e.bark&&(t.options.bark.type=e.bark),e.leaf&&(t.options.leaves.type=e.leaf),e.leafCount&&(t.options.leaves.count=Math.round(t.options.leaves.count*e.leafCount)),e.leafScale&&(t.options.leaves.size*=e.leafScale),e.tint!=null&&(t.options.leaves.tint=e.tint),e.tweak&&e.tweak(t.options),e.lite){let E=t.options;E.leaves.count=Math.max(2,Math.round(E.leaves.count*(e.liteLeaf||.5))),E.leaves.size*=1/Math.sqrt(e.liteLeaf||.5);let S=e.liteBranch||.5;for(let x of[0,1,2,3])E.branch.sections[x]&&(E.branch.sections[x]=Math.max(2,Math.ceil(E.branch.sections[x]*S))),E.branch.segments[x]&&(E.branch.segments[x]=Math.max(3,Math.ceil(E.branch.segments[x]*(S>.7?.8:.55))))}let n=t.options.bark.type;uf[n]?t.options.bark.textureScale=hf(uf[n]):uf[n]=hf(t.options.bark.textureScale),t.generate();let s=t.branchesMesh,r=t.leavesMesh;s.geometry.computeBoundingBox(),r.geometry.computeBoundingBox();let a=s.geometry.boundingBox.clone().union(r.geometry.boundingBox),o=e.height/Math.max(.01,a.max.y),l=r.geometry,c=l.attributes.position,u=new Float32Array(c.count*3),h=l.boundingBox.min.y*.4+l.boundingBox.max.y*.6,d=new k;for(let E=0;E<c.count;E++)d.set(c.getX(E),c.getY(E)-h,c.getZ(E)).normalize(),d.y=d.y*.7+.45,d.normalize(),u[E*3]=d.x,u[E*3+1]=d.y,u[E*3+2]=d.z;l.setAttribute("normal",new dt(u,3));let f=s.material,p=new at({map:f.map,normalMap:f.normalMap,roughnessMap:f.roughnessMap,aoMap:f.aoMap,color:f.color.clone(),roughness:1,metalness:0}),b=K_(r.material.map,new fe(t.options.leaves.tint)),g=new Vr({depthPacking:Kh,map:r.material.map,alphaTest:.5,side:Jt}),m=(t.options.branch.radius[0]||1)*o,y=(s.geometry.index.count+r.geometry.index.count)/3,_=s.geometry.index.count/3,M=r.geometry.index.count/3;return f.dispose(),r.material.dispose(),{barkGeo:s.geometry,leafGeo:r.geometry,barkMat:p,leafMat:b,depthMat:g,scale:o,height:e.height,trunkR:m,tris:y,btris:_,ltris:M,tree:t}}function K_(i,e){let t=new at({map:i,color:e,alphaTest:.5,alphaToCoverage:!0,side:Jt,roughness:.74,metalness:0});return t.onBeforeCompile=n=>{n.uniforms.uTime=Fu.uTime,n.uniforms.uWindAmp=Fu.uWindAmp,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uWindAmp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          vec3 ip = vec3(0.0);
          #ifdef USE_INSTANCING
            ip = instanceMatrix[3].xyz;
          #endif
          float ph = ip.x * 0.21 + ip.z * 0.17 + position.x * 0.05 + position.y * 0.04;
          float w = 0.5 * sin(uTime * 1.3 + ph) + 0.3 * sin(uTime * 2.7 + ph * 1.7) + 0.2 * sin(uTime * 5.1 + ph * 2.3);
          transformed.xz += vec2(w * 0.9, w * 0.6) * uv.y * uWindAmp;
        }`)},t}function Z_(){let i=nn(3),e=[],t=[],n=[],s=[],r=new fe().setRGB(.01,.03,.005),a=new fe().setRGB(.13,.23,.05),o=9;for(let c=0;c<o;c++){let u=c/o*vt+i()*.7,h=.02+i()*.09,d=Math.cos(u)*h,f=Math.sin(u)*h,p=.13+i()*.26,b=.011+i()*.01,g=(i()-.5)*.22,m=i()*vt,y=Math.cos(m),_=Math.sin(m),M=-_,E=y,S=e.length/3,x=(v,F,w,H)=>{e.push(v,F,w),t.push(H.r,H.g,H.b),n.push(0,1,0)};x(d-M*b,0,f-E*b,r),x(d+M*b,0,f+E*b,r),x(d+y*g,p,f+_*g,a),s.push(S,S+1,S+2)}let l=new mo;return l.setAttribute("position",new lt(e,3)),l.setAttribute("color",new lt(t,3)),l.setAttribute("normal",new lt(n,3)),l.setIndex(s),l}function e2(i,e){let t=Z_(),n=nn(77),s=22,r=new Float32Array(e*4);for(let c=0;c<e;c++)r[c*4]=(n()*2-1)*s,r[c*4+1]=(n()*2-1)*s,r[c*4+2]=n(),r[c*4+3]=.8+n()*.7;t.setAttribute("aOff",new Ri(r,4)),t.instanceCount=e;let a={uPlayer:{value:new k},uR:{value:s},uTime:Fu.uTime,uWater:{value:jt},uPathW:{value:ou},...$0()},o=new at({vertexColors:!0,roughness:.92,metalness:0,side:Jt});o.onBeforeCompile=c=>{Object.assign(c.uniforms,a),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aOff; uniform vec3 uPlayer; uniform float uR, uTime, uWater, uPathW;
        ${wd}`).replace("#include <color_vertex>",`#include <color_vertex>
        vColor.rgb *= 0.72 + 0.55 * aOff.z;`).replace("#include <begin_vertex>",`
        vec2 rel = aOff.xy - uPlayer.xz; rel = mod(rel + uR, 2.0 * uR) - uR;
        vec2 wp = uPlayer.xz + rel;
        float gh = tHeight(wp);
        float fade = 1.0 - smoothstep(uR * 0.5, uR, length(rel));
        float ok = step(uWater + 0.55, gh) * smoothstep(uPathW * 0.85, uPathW * 1.6, tPath(wp)) * step(9.0, length(wp) + 14.0);
        float clump = 0.5 + 0.5 * sin(wp.x * 0.11) * sin(wp.y * 0.13 + 1.0);
        float sc = aOff.w * fade * ok * mix(0.6, 1.2, clump);
        float ang = aOff.z * 6.2831;
        mat2 Rm = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
        vec3 transformed = position;
        float hh = transformed.y;
        vec2 sway = vec2(sin(uTime * 1.7 + wp.x * 0.55 + wp.y * 0.35), sin(uTime * 1.3 + wp.y * 0.5 - wp.x * 0.3)) * 0.08 * hh * hh
                  + vec2(sin(uTime * 0.6 + wp.x * 0.08), cos(uTime * 0.5 + wp.y * 0.08)) * 0.1 * hh;
        transformed.xz = Rm * transformed.xz;
        transformed *= sc;
        transformed += vec3(wp.x + sway.x * sc, gh - 0.02, wp.y + sway.y * sc);
        #ifdef USE_ALPHAHASH
          vPosition = vec3(transformed);
        #endif`),c.fragmentShader=c.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal = normalize(vNormal);`)};let l=new ke(t,o);return l.frustumCulled=!1,l.receiveShadow=!0,l.userData.noAO=!0,i.add(l),{mesh:l,u:a,maxCount:e,geo:t}}function df(i,e,t,n,s,r){let a=new Map;for(let f of t){let p=Math.floor(f.x/s)+","+Math.floor(f.z/s);(a.get(p)||a.set(p,[]).get(p)).push(f)}let o=new We,l=new wt,c=new k,u=new k,h=new $t,d=new fe;a.forEach((f,p)=>{let[b,g]=p.split(",").map(Number),m=new Bn(e.barkGeo,e.barkMat,f.length),y=new Bn(e.leafGeo,e.leafMat,f.length);y.customDepthMaterial=e.depthMat,y.userData.noAO=!0,f.forEach((_,M)=>{h.set(0,_.r*vt,0),l.setFromEuler(h),c.set(_.x,_.y-.1,_.z);let E=e.scale*_.s;u.set(E,E,E*(.92+_.c*.16)),o.compose(c,l,u),m.setMatrixAt(M,o),y.setMatrixAt(M,o),d.setRGB(.82+_.c*.3,.86+_.c*.26,.78+_.c*.2),y.setColorAt(M,d)});for(let _ of[m,y])_.castShadow=r===0,_.receiveShadow=!0,_.instanceMatrix.needsUpdate=!0,_.computeBoundingSphere(),_.visible=!1,i.add(_);m.userData.bark=!0,y.instanceColor.needsUpdate=!0,n.push({cx:(b+.5)*s,cz:(g+.5)*s,half:s*.72,meshes:[m,y],n:f.length,lod:r||0,bush:!!e.bush})})}var Iu=null;async function Dm(i){Iu||(Iu=new du,Iu.setDecoderPath("assets/draco/"));let e=new cu;return e.setDRACOLoader(Iu),e.loadAsync(i)}function km(i,e){let t=new Un().setFromObject(i),n=t.getSize(new k),s=e/Math.max(n.x,n.y,n.z),r=[];i.updateMatrixWorld(!0),i.traverse(o=>{if(!o.isMesh)return;let l=o.geometry.clone();l.applyMatrix4(o.matrixWorld),l.scale(s,s,s),r.push({geo:l,mat:o.material})});let a=new Un;return r.forEach(o=>{o.geo.computeBoundingBox(),a.union(o.geo.boundingBox)}),r.forEach(o=>o.geo.translate(-(a.min.x+a.max.x)/2,-a.min.y,-(a.min.z+a.max.z)/2)),r}async function Nm({scene:i,heroes:e,clear:t=[],addObs:n,progress:s,quality:r}){let o=[],l={v:r==="hemat"},c=async(C,T)=>{s&&s(T,C),await q0()};await c("Menumbuhkan pohon\u2026",.05);let u=[{k:"oak",preset:"Oak Medium",seed:11,height:11,w:.26},{k:"oak",preset:"Oak Medium",seed:23,height:13,w:.2,tint:5081652},{k:"ash",preset:"Ash Medium",seed:5,height:12,w:.16},{k:"pine",preset:"Pine Medium",seed:3,height:15,w:.2},{k:"pine",preset:"Pine Medium",seed:9,height:12,w:.1},{k:"aspen",preset:"Aspen Medium",seed:8,height:12,w:.08}],h=[],d=[];for(let C=0;C<u.length;C++)h.push(Lu(u[C].preset,{...u[C],lite:!0,liteLeaf:.65,liteBranch:.8})),d.push(Lu(u[C].preset,{...u[C],lite:!0,liteLeaf:.32})),await c("Menumbuhkan pohon\u2026",.05+.25*(C+1)/u.length);let f=nn(7),p=[],b=8,g=0,m=230;for(;p.length<m&&g<9e3;){g++;let C=(f()*2-1)*108,T=(f()*2-1)*108;if(Math.hypot(C,T)<10)continue;let U=fn(C,T);U<jt+.9||sa(C,T)<2.6||e.some(P=>Math.hypot(C-P.x,T-P.z)<b)||t.some(P=>Math.hypot(C-P.x,T-P.z)<P.r+2)||p.some(P=>Math.hypot(C-P.x,T-P.z)<4.2)||p.push({x:C,y:U,z:T,s:.8+f()*.5,r:f(),c:f(),n:Math.sin(C*.03)*Math.cos(T*.025)})}let y=h.map(()=>[]),_=u.reduce((C,T)=>C+T.w,0);for(let C of p){let T=Dt((C.n*.5+.5)*.7+C.c*.3,0,.999)*_,U=0,P=0;for(let I=0;I<u.length;I++)if(U+=u[I].w,T<U){P=I;break}y[P].push(C),n(C.x,C.z,Math.max(.28,Math.min(.9,h[P].trunkR*C.s*.6)))}h.forEach((C,T)=>{y[T].length&&(df(i,C,y[T],o,40,0),df(i,d[T],y[T],o,40,1))}),await c("Menanam semak\u2026",.4);let E=[["Bush 1",31,1.5],["Bush 2",32,1.2],["Bush 3",33,1.4]].map(C=>{let T=Lu(C[0],{seed:C[1],height:C[2],lite:!0,liteLeaf:.6});return T.bush=!0,T}),S=[[],[],[]],x=nn(99);for(let C=0,T=0;C<150&&T<3e3;T++){let U=(x()*2-1)*108,P=(x()*2-1)*108,I=fn(U,P);I<jt+.7||Math.hypot(U,P)<6||sa(U,P)<1.8||(S[C%3].push({x:U,y:I,z:P,s:.7+x()*.7,r:x(),c:x()}),C++)}E.forEach((C,T)=>df(i,C,S[T],o,40,0)),await c("Menanam rumput\u2026",.5);let v=[],F=[];for(let C=0;C<e.length;C++){let T=e[C],U=W_[T.id],P=Lu(U.preset,U),I=new on,V=fn(T.x,T.z);I.position.set(T.x,V-.1,T.z),I.rotation.y=C*2.1;let G=new ke(P.barkGeo,P.barkMat),N=new ke(P.leafGeo,P.leafMat);N.customDepthMaterial=P.depthMat,N.userData.noAO=!0;for(let ee of[G,N])ee.castShadow=!0,ee.receiveShadow=!0,ee.scale.setScalar(P.scale),I.add(ee);if(U.roots){let ee=nn(88+C),oe=[];for(let pe=0;pe<34;pe++){let Fe=ee()*vt,Xe=1.2+Math.pow(ee(),.7)*5.2,Ue=.012+ee()*.02,Qe=4.2+ee()*3.6,ge=Qe-(ee()<.35?0:ee()*(Qe-.6)),B=new dn(Ue*.5,Ue,ge,4,3,!0);B.translate(0,-ge/2,0);let le=B.attributes.position;for(let he=0;he<le.count;he++){let Ee=le.getY(he);le.setX(he,le.getX(he)+Math.sin(Ee*1.7+pe)*.05)}B.rotateZ((ee()-.5)*.1),B.translate(Math.cos(Fe)*Xe,Qe,Math.sin(Fe)*Xe),oe.push(B)}let me=new ke(lu(oe),P.barkMat);me.castShadow=!0,I.add(me)}i.add(I),T.top=P.height;let O=new ke(new Ks(.5,0),new at({color:16765786,emissive:16754688,emissiveIntensity:2.2,roughness:.3}));O.position.set(T.x,V+P.height+2.2,T.z),O.userData.noAO=!0,i.add(O);let J=new Zs(1.9,2.15,64,1);J.rotateX(-Math.PI/2);{let ee=J.attributes.position;for(let oe=0;oe<ee.count;oe++)ee.setY(oe,fn(T.x+ee.getX(oe),T.z+ee.getZ(oe))-V+.14)}let se=new ke(J,new ln({color:new fe(2.2,1.7,.5),transparent:!0,opacity:.8,side:Jt,depthWrite:!1}));se.position.set(T.x,V,T.z),se.userData.noAO=!0,i.add(se);let z=new ke(new dn(2.6,2.6,P.height+2,8),new ln({visible:!1}));z.position.set(T.x,V+(P.height+2)/2,T.z),z.userData.hero=C,i.add(z),F.push(z),v.push({g:I,mk:O,ring:se,y:V}),n(T.x,T.z,Math.max(.8,P.trunkR*.9)),await c("Menumbuhkan pohon bertanda\u2026",.5+.2*(C+1)/e.length)}let w=e2(i,r==="hemat"?8e3:34e3);w.maxCount=34e3,await c("Menata batu dan bunga\u2026",.78);let H=[];try{let C=nn(404),T=new We,U=new wt,P=new $t,I=new k,V=new k;for(let G of["rock1","rock2","rock3"]){let N=await Dm("assets/models/"+G+".glb"),O=km(N.scene,1),J=16;for(let se of O){let z=new Bn(se.geo,se.mat,J);for(let ee=0;ee<J;ee++){let oe,me,pe,Fe=0;do{let Ue=C()*vt,Qe=C()<.4?Xn.r+2+C()*8:12+C()*95;oe=(C()<.4?Xn.x:0)+Math.cos(Ue)*Qe,me=(C()<.4?Xn.z:0)+Math.sin(Ue)*Qe,pe=fn(oe,me),Fe++}while((pe<jt-.3||Math.hypot(oe,me)<8||sa(oe,me)<2||Math.abs(oe)>110||Math.abs(me)>110)&&Fe<40);let Xe=.5+C()*C()*2.4;P.set((C()-.5)*.4,C()*vt,(C()-.5)*.4),U.setFromEuler(P),I.set(oe,pe+Xe*.06,me),V.set(Xe*(.9+C()*.4),Xe*(.7+C()*.3),Xe),T.compose(I,U,V),z.setMatrixAt(ee,T),Xe>1.2&&se===O[0]&&n(oe,me,Xe*.42)}z.castShadow=!0,z.receiveShadow=!0,z.instanceMatrix.needsUpdate=!0,i.add(z),H.push(z)}}}catch(C){console.warn("rock load failed",C)}try{let C=nn(808),T=new We,U=new wt,P=new $t,I=new k,V=new k,G=[];for(let N=0,O=0;N<80&&O<2e3;O++){let J=C()*vt,se=5+C()*55,z=Math.cos(J)*se,ee=Math.sin(J)*se;if(!(fn(z,ee)<jt+.6||sa(z,ee)<1.4)){for(let me=0;me<3;me++){let pe=z+(C()-.5)*3,Fe=ee+(C()-.5)*3,Xe=fn(pe,Fe);Xe>jt+.5&&G.push({x:pe,y:Xe,z:Fe,s:.7+C()*.6,r:C()*vt})}N++}}for(let N of["flower_blue","flower_white","flower_yellow"]){let O=await Dm("assets/models/"+N+".glb"),J=km(O.scene,.4),se=G.filter((z,ee)=>ee%3===["flower_blue","flower_white","flower_yellow"].indexOf(N));for(let z of J){let ee=new Bn(z.geo,z.mat,se.length);se.forEach((oe,me)=>{P.set(0,oe.r,0),U.setFromEuler(P),I.set(oe.x,oe.y-.02,oe.z),V.setScalar(oe.s),T.compose(I,U,V),ee.setMatrixAt(me,T)}),ee.instanceMatrix.needsUpdate=!0,ee.frustumCulled=!1,ee.userData.noAO=!0,i.add(ee)}}}catch(C){console.warn("flower load failed",C)}await c("Selesai",1);let q={treeVariants:h.map((C,T)=>({b:C.btris,l:C.ltris,lb:d[T].btris,ll:d[T].ltris})),bush:E.map(C=>({b:C.btris,l:C.ltris})),chunkCount:o.length};return{heroObjs:v,heroHits:F,grass:w,chunks:o,info:q,setQuality(C){l.v=C==="hemat";for(let T of o)T.lod===0&&!T.bush&&(T.meshes[0].castShadow=!l.v);w.geo.instanceCount=C==="hemat"?8e3:34e3},update(C,T,U){Fu.uTime.value=T,w.u.uPlayer.value.set(C.x,C.y,C.z);let P=l.v?60:130,I=l.v?17:42,V=l.v?.45:1;for(let G of o){let N=Math.hypot(C.x-G.cx,C.z-G.cz)-G.half,O;G.bush?O=N<P*.38:G.lod===0?O=N<I:O=N>=I&&N<P;for(let J of G.meshes)J.visible=O,O&&(J.count=Math.max(1,Math.ceil(G.n*(G.bush?1:V))))}}}}var Vi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Jn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},t2=new hs(-1,1,1,-1,0,1),ff=class extends bt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},n2=new ff,Yi=class{constructor(e){this._mesh=new ke(n2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,t2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Du=class extends Jn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zn.clone(e.uniforms),this.material=new Qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qo=class extends Jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ku=class extends Jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Nu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Du(Vi),this.copyPass.material.blending=Pn,this.timer=new xo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qo!==void 0&&(a instanceof Qo?n=!0:a instanceof ku&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Cu=class extends Jn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new fe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var zo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new We},cameraProjectionMatrixInverse:{value:new We},cameraWorldMatrix:{value:new We},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Jo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Uu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Cm(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=i2(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new k(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ci(s,e,e);return r.wrapS=Yt,r.wrapT=Yt,r.needsUpdate=!0,r}function i2(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var jo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:pf(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraProjectionMatrixInverse:{value:new We},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function pf(i,e,t){let n=s2(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function s2(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new k(Math.cos(r),Math.sin(r),a))}return n}var Bu=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,p=e-d,b=t-f,g,m;p>b?(g=1,m=0):(g=0,m=1);let y=p-g+u,_=b-m+u,M=p-1+2*u,E=b-1+2*u,S=l&255,x=c&255,v=this.perm[S+this.perm[x]]%12,F=this.perm[S+g+this.perm[x+m]]%12,w=this.perm[S+1+this.perm[x+1]]%12,H=.5-p*p-b*b;H<0?n=0:(H*=H,n=H*H*this._dot(this.grad3[v],p,b));let q=.5-y*y-_*_;q<0?s=0:(q*=q,s=q*q*this._dot(this.grad3[F],y,_));let C=.5-M*M-E*E;return C<0?r=0:(C*=C,r=C*C*this._dot(this.grad3[w],M,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,p=(u+h+d)*f,b=u-p,g=h-p,m=d-p,y=e-b,_=t-g,M=n-m,E,S,x,v,F,w;y>=_?_>=M?(E=1,S=0,x=0,v=1,F=1,w=0):y>=M?(E=1,S=0,x=0,v=1,F=0,w=1):(E=0,S=0,x=1,v=1,F=0,w=1):_<M?(E=0,S=0,x=1,v=0,F=1,w=1):y<M?(E=0,S=1,x=0,v=0,F=1,w=1):(E=0,S=1,x=0,v=1,F=1,w=0);let H=y-E+f,q=_-S+f,C=M-x+f,T=y-v+2*f,U=_-F+2*f,P=M-w+2*f,I=y-1+3*f,V=_-1+3*f,G=M-1+3*f,N=u&255,O=h&255,J=d&255,se=this.perm[N+this.perm[O+this.perm[J]]]%12,z=this.perm[N+E+this.perm[O+S+this.perm[J+x]]]%12,ee=this.perm[N+v+this.perm[O+F+this.perm[J+w]]]%12,oe=this.perm[N+1+this.perm[O+1+this.perm[J+1]]]%12,me=.6-y*y-_*_-M*M;me<0?s=0:(me*=me,s=me*me*this._dot3(this.grad3[se],y,_,M));let pe=.6-H*H-q*q-C*C;pe<0?r=0:(pe*=pe,r=pe*pe*this._dot3(this.grad3[z],H,q,C));let Fe=.6-T*T-U*U-P*P;Fe<0?a=0:(Fe*=Fe,a=Fe*Fe*this._dot3(this.grad3[ee],T,U,P));let Xe=.6-I*I-V*V-G*G;return Xe<0?o=0:(Xe*=Xe,o=Xe*Xe*this._dot3(this.grad3[oe],I,V,G)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,p,b=(e+t+n+s)*l,g=Math.floor(e+b),m=Math.floor(t+b),y=Math.floor(n+b),_=Math.floor(s+b),M=(g+m+y+_)*c,E=g-M,S=m-M,x=y-M,v=_-M,F=e-E,w=t-S,H=n-x,q=s-v,C=F>w?32:0,T=F>H?16:0,U=w>H?8:0,P=F>q?4:0,I=w>q?2:0,V=H>q?1:0,G=C+T+U+P+I+V,N=a[G][0]>=3?1:0,O=a[G][1]>=3?1:0,J=a[G][2]>=3?1:0,se=a[G][3]>=3?1:0,z=a[G][0]>=2?1:0,ee=a[G][1]>=2?1:0,oe=a[G][2]>=2?1:0,me=a[G][3]>=2?1:0,pe=a[G][0]>=1?1:0,Fe=a[G][1]>=1?1:0,Xe=a[G][2]>=1?1:0,Ue=a[G][3]>=1?1:0,Qe=F-N+c,ge=w-O+c,B=H-J+c,le=q-se+c,he=F-z+2*c,Ee=w-ee+2*c,ve=H-oe+2*c,Be=q-me+2*c,Oe=F-pe+3*c,ft=w-Fe+3*c,ut=H-Xe+3*c,et=q-Ue+3*c,$=F-1+4*c,Ot=w-1+4*c,ht=H-1+4*c,It=q-1+4*c,ae=g&255,Rt=m&255,Ve=y&255,Je=_&255,D=o[ae+o[Rt+o[Ve+o[Je]]]]%32,A=o[ae+N+o[Rt+O+o[Ve+J+o[Je+se]]]]%32,j=o[ae+z+o[Rt+ee+o[Ve+oe+o[Je+me]]]]%32,xe=o[ae+pe+o[Rt+Fe+o[Ve+Xe+o[Je+Ue]]]]%32,ue=o[ae+1+o[Rt+1+o[Ve+1+o[Je+1]]]]%32,_e=.6-F*F-w*w-H*H-q*q;_e<0?u=0:(_e*=_e,u=_e*_e*this._dot4(r[D],F,w,H,q));let Ae=.6-Qe*Qe-ge*ge-B*B-le*le;Ae<0?h=0:(Ae*=Ae,h=Ae*Ae*this._dot4(r[A],Qe,ge,B,le));let re=.6-he*he-Ee*Ee-ve*ve-Be*Be;re<0?d=0:(re*=re,d=re*re*this._dot4(r[j],he,Ee,ve,Be));let ne=.6-Oe*Oe-ft*ft-ut*ut-et*et;ne<0?f=0:(ne*=ne,f=ne*ne*this._dot4(r[xe],Oe,ft,ut,et));let Se=.6-$*$-Ot*Ot-ht*ht-It*It;return Se<0?p=0:(Se*=Se,p=Se*Se*this._dot4(r[ue],$,Ot,ht,It)),27*(u+h+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Wo=class i extends Jn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Cm(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Kt(this.width,this.height,{type:cn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Qt({defines:Object.assign({},zo.defines),uniforms:zn.clone(zo.uniforms),vertexShader:zo.vertexShader,fragmentShader:zo.fragmentShader,blending:Pn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new lo,this.normalMaterial.blending=Pn,this.pdMaterial=new Qt({defines:Object.assign({},jo.defines),uniforms:zn.clone(jo.uniforms),vertexShader:jo.vertexShader,fragmentShader:jo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Qt({defines:Object.assign({},Jo.defines),uniforms:zn.clone(Jo.uniforms),vertexShader:Jo.vertexShader,fragmentShader:Jo.fragmentShader,blending:Pn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Qt({uniforms:zn.clone(Vi.uniforms),vertexShader:Vi.vertexShader,fragmentShader:Vi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:vo,blendDst:nr,blendEquation:Mi,blendSrcAlpha:Mo,blendDstAlpha:nr,blendEquationAlpha:Mi}),this.blendMaterial=new Qt({uniforms:zn.clone(Uu.uniforms),vertexShader:Uu.vertexShader,fragmentShader:Uu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:hc,blendSrc:vo,blendDst:nr,blendEquation:Mi,blendSrcAlpha:Mo,blendDstAlpha:nr,blendEquationAlpha:Mi}),this._fsQuad=new Yi(null),this._originalClearColor=new fe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new Pi;s.format=Li,s.type=ds,this.normalRenderTarget=new Kt(this.width,this.height,{minFilter:Wt,magFilter:Wt,type:cn,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=pf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Pn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Pn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Pn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Pn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Pn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Bu,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ci(s,e,e,ii,Gn);return r.wrapS=Yt,r.wrapT=Yt,r.needsUpdate=!0,r}};Wo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Um={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var la=class i extends Jn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(r,a,{type:cn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Kt(r,a,{type:cn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Kt(r,a,{type:cn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Um;this.highPassUniforms=zn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new de(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=zn.clone(Vi.uniforms),this.blendMaterial=new Qt({uniforms:this.copyUniforms,vertexShader:Vi.vertexShader,fragmentShader:Vi.fragmentShader,premultipliedAlpha:!0,blending:yo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new fe,this._oldClearAlpha=1,this._basic=new ln,this._fsQuad=new Yi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Qt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};la.BlurDirectionX=new de(1,0);la.BlurDirectionY=new de(0,1);var Ko={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Hu=class extends Jn{constructor(){super(),this.isOutputPass=!0,this.uniforms=zn.clone(Ko.uniforms),this.material=new Or({name:Ko.name,uniforms:this.uniforms,vertexShader:Ko.vertexShader,fragmentShader:Ko.fragmentShader}),this._fsQuad=new Yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===So?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===To?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Eo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ir?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ro?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Po?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ao&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Gu(i,e,t,n={}){let s=new Kt(4,4,{type:cn,samples:4}),r=new Nu(i,s);r.addPass(new Cu(e,t));let a=new Wo(e,t,4,4);a.blendIntensity=n.aoStrength??1,a.updateGtaoMaterial({radius:n.aoRadius??.7,distanceExponent:1,thickness:1.5,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),a.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:12});let o=a._overrideVisibility.bind(a);a._overrideVisibility=function(){o(),e.traverse(c=>{c.userData&&c.userData.noAO&&c.visible&&(c.visible=!1,a._visibilityCache.push(c))})},r.addPass(a);let l=new la(new de(4,4),n.bloomStrength??.3,.7,n.bloomThreshold??1);return r.addPass(l),r.addPass(new Hu),{composer:r,gtao:a,bloom:l,setSize(c,u,h){r.setPixelRatio(h),r.setSize(c,u)},setQuality(c){a.enabled=l.enabled=c==="tinggi";let u=c==="tinggi"?4:2;for(let h of[r.renderTarget1,r.renderTarget2])h.samples!==u&&(h.samples=u,h.dispose())},render(c){r.render(c)},dispose(){r.dispose&&r.dispose()}}}var ua=class extends li{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new xi;e.deleteAttribute("uv");let t=new at({side:Sn}),n=new at,s=new er(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ke(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Bn(e,n,6),o=new Gt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ke(e,ca(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ke(e,ca(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ke(e,ca(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new ke(e,ca(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new ke(e,ca(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ke(e,ca(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ca(i){return new co({color:0,emissive:16777215,emissiveIntensity:i})}var Cs=6;var Us=320*Math.PI/180,Ou=Us+260*Math.PI/180,qu=5.2,ha=new Float32Array(256*256);{let i=nn(1234);for(let e=0;e<ha.length;e++)ha[e]=i()}function _i(i,e,t=256,n=256){let s=Math.floor(i),r=Math.floor(e),a=i-s,o=e-r,l=a*a*(3-2*a),c=o*o*(3-2*o),u=(s%t+t)%t,h=(u+1)%t,d=(r%n+n)%n,f=(d+1)%n,p=ha[(d&255)*256+(u&255)],b=ha[(d&255)*256+(h&255)],g=ha[(f&255)*256+(u&255)],m=ha[(f&255)*256+(h&255)];return p+(b-p)*l+(g-p)*c+(p-b-g+m)*l*c}function el(i,e,t=3,n=256,s=256){let r=0,a=.5,o=1;for(let l=0;l<t;l++)r+=a*_i(i*o,e*o,n*o,s*o),o*=2,a*=.5;return r}var gf=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t];function r2(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),a=r.data,o=Object.fromEntries(e.map(M=>[M.id,M])),l=t.barkA,c=t.barkB,u=t.cortex,h=[.56,.76,.33],d=o.floem.ro,f=o.kambium.ro,p=o.xilem.ro,b=o.teras.ro,g=o.empulur.ro,m=t.rings,y=t.contrast;for(let M=0;M<i;M++)for(let E=0;E<i;E++){let S=(E/i-.5)*qu,x=(.5-M/i)*qu,v=Math.hypot(S,x),F=Math.atan2(x,S),w,H=(el(S*1.4+3,x*1.4+7,3)-.35)*.09+Math.sin(F*3+1.2)*.012,q=v+H;if(v>=d){let P=el(F*9,v*7,3),I=Ut(.52,.72,el(F*16+5,v*3.2,3));w=gf(l,c,P*.9+I*.7);let V=.82+.3*_i(F*70,v*9);w=w.map(G=>G*V)}else if(v>=f){let P=_i(F*90,v*14),I=_i(F*28,v*5);w=u.map(V=>V*(.86+.2*P)*(.95+.1*I))}else if(v>=p)w=h.map(P=>P*(.94+.1*_i(F*50,v*40)));else if(v>=g){let P=v<b,I=(q-g)*m,V=I-Math.floor(I),G=Math.floor(I),N=Ut(.5,.93,V)*(1-Ut(.965,1,V)),O=.95+.08*(G*7919%13/13-.5)*2,J=Math.pow(_i(F*60,v*1.6),3)*t.rays,se=(_i(S*45,x*45)-.5)*.05,z=P?t.heartE:t.sapE,ee=P?t.heartL:t.sapL;w=gf(z,ee,N*y*2.2).map(me=>me*O+J+se);let oe=_i(S*150+11,x*150+5);if(t.pores==="ring"?V<.16&&oe>.62&&(w=w.map(me=>me*.55)):t.pores==="diffuse"?oe>.87&&(w=w.map(me=>me*.78)):t.pores==="resin"&&_i(S*55+3,x*55+9)>.972&&(w=[.55,.34,.14]),P){let me=Ut(.78,.9,_i(F*5+9,v*.4))*Ut(1,.4,v);w=w.map(pe=>pe*(1-me*.35))}}else{let P=v/g;w=t.pith.map(I=>I*(.9+.14*_i(S*80,x*80))*(1-.35*(1-P)*(1-P)))}let C=Math.min(Math.abs(v-d),Math.abs(v-f),Math.abs(v-p),Math.abs(v-b)),T=1-.38*(1-Ut(0,.012,C)),U=(M*i+E)*4;a[U]=Dt(w[0]*T,0,1)*255,a[U+1]=Dt(w[1]*T,0,1)*255,a[U+2]=Dt(w[2]*T,0,1)*255,a[U+3]=255}s.putImageData(r,0,0);let _=new Hn(n);return _.colorSpace=Et,_.anisotropy=8,_.generateMipmaps=!0,_.minFilter=ni,_.repeat.set(1/qu,1/qu),_.offset.set(.5,.5),_}function Zo(i,e,t={}){let r=document.createElement("canvas");r.width=256,r.height=512;let a=r.getContext("2d"),o=a.createImageData(256,512),l=o.data,c=t.fu||48,u=t.fv||4;for(let d=0;d<512;d++)for(let f=0;f<256;f++){let p=f/256,b=d/512,g=el(p*c+0,b*u,2,c,u),m=.5+.5*Math.sin((p*6+el(p*3,b*1.5,2,3,2)*5)*vt),y=Dt(.35+.65*g,0,1),_=gf(i,e,Dt((1-y)*.8+m*(t.band??.25),0,1)),M=_i(p*220,b*6,220,6)>.93?.88:1,E=(d*256+f)*4;l[E]=Dt(_[0]*M,0,1)*255,l[E+1]=Dt(_[1]*M,0,1)*255,l[E+2]=Dt(_[2]*M,0,1)*255,l[E+3]=255}a.putImageData(o,0,0);let h=new Hn(r);return h.colorSpace=Et,h.wrapS=h.wrapT=Yt,h.anisotropy=8,h.repeat.set(1/1.3,1/3),h}function mf(i,e,t,n){let s=new ti().load(i);return s.wrapS=s.wrapT=Yt,s.anisotropy=8,e&&(s.colorSpace=Et),s.repeat.set(t,n),s}function a2(i,e){let t=new rs;e<=.001?(t.moveTo(0,0),t.lineTo(i*Math.cos(Us),i*Math.sin(Us)),t.absarc(0,0,i,Us,Ou,!1),t.lineTo(0,0)):(t.absarc(0,0,i,Us,Ou,!1),t.absarc(0,0,e,Ou,Us,!0),t.closePath());let n=new ao(t,{depth:Cs,bevelEnabled:!1,curveSegments:96});n.rotateX(-Math.PI/2),n.translate(0,-Cs/2,0);let s=n.attributes.position,r=n.attributes.uv,a=.001;for(let o of n.groups)for(let l=o.start;l<o.start+o.count;l+=3){let c=[0,1,2].map(h=>Math.hypot(s.getX(l+h),s.getZ(l+h))),u="cap";o.materialIndex===1&&(u=c.every(h=>Math.abs(h-i)<a)?"outer":e>0&&c.every(h=>Math.abs(h-e)<a)?"inner":"cut");for(let h=0;h<3;h++){let d=s.getX(l+h),f=s.getY(l+h),p=s.getZ(l+h),b,g;if(u==="cap")b=d,g=-p;else if(u==="outer"||u==="inner"){let m=Math.atan2(-p,d)-Us;m=(m%vt+vt)%vt,m>5.5&&(m-=vt),b=m*(u==="outer"?i:e),g=f}else b=Math.hypot(d,p),g=f;r.setXY(l+h,b,g)}}return r.needsUpdate=!0,n}function o2(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,vt),e.fill(),new Hn(i)}function Bm(i,e){let t=new li;{let T=document.createElement("canvas");T.width=T.height=512;let U=T.getContext("2d"),P=U.createRadialGradient(256,230,20,256,256,420);P.addColorStop(0,"#1f4a42"),P.addColorStop(.55,"#0f2a26"),P.addColorStop(1,"#040c0a"),U.fillStyle=P,U.fillRect(0,0,512,512);let I=new Hn(T);I.colorSpace=Et,t.background=I}let n=new Oi(i);t.environment=n.fromScene(new ua,.04).texture,t.environmentIntensity=.45;let s=new en(38,1,.1,100),r=new Qn(16773596,2.4);r.position.set(4,9,8),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);let a=r.shadow.camera;a.left=-6,a.right=6,a.top=6,a.bottom=-6,a.near=1,a.far=30,r.shadow.bias=-5e-4,r.shadow.normalBias=.03,t.add(r);let o=new Qn(9425151,1.3);o.position.set(-6,3,-5),t.add(o);let c=matchMedia("(pointer:coarse)").matches?1024:1280,u={oak:[yu,Mu,vu,bu],pine:[Su,Tu,Eu,_u],birch:[mu,gu,xu,pu],willow:[Ru,Pu,wu,Au]},h={},d={},f=T=>h[T]||(h[T]=u[T].map((U,P)=>mf(U,P===0,1/2.4,1/2.4)));function p(T){let U=T.id;if(d[U])return d[U];let P=new fe(T.barkTint),I=[P.r,P.g,P.b],V={...T,barkA:I.map(N=>N*.5),barkB:I.map(N=>N*.95)},G={floem:Zo(T.cortex,T.cortex.map(N=>N*.72),{fu:64,band:.12}),kambium:Zo([.56,.76,.34],[.42,.62,.24],{fu:64,band:.05}),xilem:Zo(T.sapE,T.sapL,{fu:40,band:.3}),teras:Zo(T.heartE,T.heartL,{fu:40,band:.35+T.contrast*.3}),empulur:Zo(T.pith,T.pith.map(N=>N*.85),{fu:90,band:.05})};return d[U]={cap:r2(c,e,V),side:G,bark:f(T.bark),tint:new fe(T.barkTint)}}let b=[],g={};e.forEach(T=>{let U=new fe(T.col),P=new at({bumpScale:.6,roughness:T.id==="kambium"?.5:.78,metalness:0}),I=T.id==="kulit"?new at({roughness:1,metalness:0}):new at({roughness:T.id==="kambium"?.5:.78,metalness:0}),V=new ke(a2(T.ro,T.ri),[P,I]);V.castShadow=!0,V.receiveShadow=!0,V.userData.layer=T.id,t.add(V),T.id==="kulit"&&V.geometry.setAttribute("uv1",V.geometry.attributes.uv),b.push(V),g[T.id]={mats:[P,I],base:new fe(1,1,1),emi:U,k:0}});let m=null;function y(T){if(m===T.id)return;m=T.id;let U=p(T);e.forEach(P=>{let[I,V]=g[P.id].mats;if(I.map=I.bumpMap=U.cap,I.needsUpdate=!0,P.id==="kulit"){let[G,N,O,J]=U.bark;V.map=G,V.normalMap=N,V.roughnessMap=O,V.aoMap=J,V.userData.tint=U.tint,g[P.id].tint=U.tint.clone().lerp(new fe(1,1,1),.25)}else V.map=U.side[P.id];V.needsUpdate=!0})}let _=mf(na,!0,2.2,2.2),M=mf(ia,!1,2.2,2.2),E=new ke(new dn(3.7,3.9,.34,72),new at({map:_,normalMap:M,color:new fe(.8,.72,.62),roughness:1}));E.position.y=-Cs/2-.17,E.receiveShadow=!0,E.userData.noAO=!0,t.add(E);let S=o2();function x(T,U,P,I,V,G){let N=nn(G),O=[];for(let z=0;z<T;z++)O.push({f:z%2,r:U[0]+N()*(U[1]-U[0]),y:(N()-.5)*Cs,v:.7+N()*.7,p:N()*vt});let J=new bt;J.setAttribute("position",new dt(new Float32Array(T*3),3));let se=new ci(J,new Zn({map:S,color:I,size:V,sizeAttenuation:!0,transparent:!0,depthWrite:!1}));return se.frustumCulled=!1,se.userData.noAO=!0,t.add(se),{pts:se,data:O,dir:P}}let v=.03,F=x(110,[1.32,1.82],1,new fe(.5,1.5,2.6),.22,31),w=x(80,[2.04,2.24],-1,new fe(2.6,1.55,.35),.22,32);function H(T,U,P,I){let V=T.pts.geometry.attributes.position;for(let G=0;G<T.data.length;G++){let N=T.data[G];N.y+=T.dir*N.v*U*P,N.y>Cs/2?N.y-=Cs:N.y<-Cs/2&&(N.y+=Cs);let O=(N.f===0?Us-v:Ou+v)+Math.sin(I*1.6+N.p)*.006;V.setXYZ(G,N.r*Math.cos(O),N.y,-N.r*Math.sin(O))}V.needsUpdate=!0}let q={yaw:0,pitch:.5,dist:14,user:!1,sun:.65},C=new fe(.2,.26,.24);return{scene:t,camera:s,layerMeshes:b,layerMat:g,waterFlow:F,sugarFlow:w,state:q,setSpecies:y,update(T,U,P,I){q.user||(q.yaw=.3*Math.sin(U*.45));let V=Math.cos(q.pitch),G=Math.sin(q.pitch);s.position.set(Math.sin(q.yaw)*V*q.dist,G*q.dist,Math.cos(q.yaw)*V*q.dist),s.lookAt(0,0,0);let N=q.sun;r.intensity=1+1.9*N,t.environmentIntensity=.3+.25*N,H(F,.25+1.7*N,T,U),H(w,.12+.75*N,T,U),e.forEach(O=>{let J=g[O.id],se=P&&P!==O.id?.7:0;J.k+=(se-J.k)*Math.min(1,T*10);let z=P===O.id?.12:I===O.id?.07:0;J.mats.forEach((ee,oe)=>{ee.color.copy(J.base),oe===1&&J.tint&&ee.color.multiply(J.tint),ee.color.lerp(C,J.k),ee.emissive.copy(J.emi).multiplyScalar(z)})})}}}var l2=[{id:"kulit",name:"Kulit dan bulu",sci:"Integumen",ui:"#e0a56a",short:"Pelindung tubuh dan pengatur suhu.",what:"Kulit dan bulu adalah lapisan terluar. Bulu kucing terdiri dari bulu pelindung yang panjang dan bulu halus di bawahnya (undercoat). Kumis (vibrissae) adalah rambut peraba yang sangat peka.",fn:"Melindungi dari luka, kuman, dan panas atau dingin. Bulu menjebak udara sehingga menahan panas tubuh. Kumis membantu kucing merasakan lebar celah dan gerakan udara.",fact:"Suhu tubuh normal kucing sekitar 38 sampai 39 derajat Celsius, sedikit lebih hangat dari manusia. Kucing hanya sedikit berkeringat, terutama lewat telapak kaki."},{id:"otot",name:"Otot",sci:"Sistem muskuler",ui:"#d0594a",short:"Penggerak tubuh lewat kontraksi.",what:"Otot rangka menempel ke tulang lewat tendon. Saat otot berkontraksi (memendek), tulang ditarik dan sendi bergerak. Otot kucing panjang dan lentur, terutama di kaki belakang dan punggung.",fn:"Menggerakkan tubuh untuk berjalan, melompat, dan memanjat. Otot dan tendon di kaki juga menarik cakar masuk dan keluar (cakar retraktil), sehingga cakar tetap tajam.",fact:"Kucing bisa melompat beberapa kali tinggi tubuhnya, sekitar lima kali menurut banyak rujukan, berkat otot kaki belakang yang kuat."},{id:"rangka",name:"Rangka",sci:"Sistem rangka",ui:"#eae0c4",short:"Kerangka penopang dan pelindung organ.",what:"Rangka kucing terdiri dari sekitar 230 tulang (manusia dewasa 206). Ada tengkorak, tulang belakang dengan ruas ekor yang panjang, 13 pasang tulang rusuk, dan tulang kaki.",fn:"Menopang tubuh, melindungi organ penting (otak oleh tengkorak, jantung dan paru oleh tulang rusuk), dan menjadi tempat melekatnya otot.",fact:"Tulang selangka kucing sangat kecil dan tidak tersambung ke tulang lain. Itu membuat bahu lentur, jadi kucing bisa menyelip di celah sempit selama kepalanya muat."},{id:"otak",name:"Otak",sci:"Sistem saraf pusat",ui:"#e8a8b0",short:"Pusat kendali dan pengolah informasi.",what:"Otak berada di dalam tengkorak dan berlekuk-lekuk. Otak besar mengolah indra dan perilaku, otak kecil (cerebellum) mengatur keseimbangan dan koordinasi gerak.",fn:"Menerima sinyal dari mata, telinga, hidung, kumis, dan kulit, lalu memerintahkan otot bergerak lewat saraf.",fact:"Beratnya hanya sekitar 25 sampai 30 gram. Kucing melihat baik di tempat redup karena mata punya lapisan pemantul cahaya (tapetum lucidum), itulah sebabnya mata kucing tampak bersinar saat disorot lampu."},{id:"jantung",name:"Jantung",sci:"Sistem peredaran darah",ui:"#e0505e",short:"Pompa yang mengalirkan darah ke seluruh tubuh.",what:"Jantung kucing berbilik empat seperti jantung manusia: dua serambi (atrium) menerima darah dan dua bilik (ventrikel) memompanya keluar.",fn:"Memompa darah yang membawa oksigen dan nutrisi ke seluruh tubuh, dan mengirim darah miskin oksigen ke paru-paru untuk diisi ulang.",fact:"Detak jantung kucing sehat umumnya sekitar 140 sampai 220 kali per menit, jauh lebih cepat dari manusia, dan naik saat aktif atau takut. Kucing tidak bisa membuat cukup taurin sendiri, jadi harus mendapatnya dari makanan berbahan daging. Kekurangan taurin dapat merusak otot jantung."},{id:"paru",name:"Paru-paru",sci:"Sistem pernapasan",ui:"#f0a0a8",short:"Tempat pertukaran oksigen dan karbon dioksida.",what:"Udara masuk lewat hidung, trakea (batang tenggorok), lalu bercabang ke dalam paru-paru. Di ujung cabangnya ada kantong kecil (alveolus) tempat gas bertukar dengan darah.",fn:"Mengambil oksigen dari udara ke darah dan membuang karbon dioksida. Otot diafragma dan otot antar rusuk membuat paru mengembang dan mengempis.",fact:"Kucing sehat bernapas sekitar 20 sampai 30 kali per menit saat istirahat. Kucing jarang terengah-engah, jadi kucing yang bernapas terengah atau cepat saat santai perlu dibawa ke dokter hewan."},{id:"hati",name:"Hati",sci:"Sistem pencernaan dan metabolisme",ui:"#b0463c",short:"Pabrik kimia tubuh: empedu, penawar racun, penyimpan nutrisi.",what:"Hati adalah organ besar berwarna cokelat kemerahan di depan perut, tepat di belakang diafragma.",fn:"Membuat empedu untuk membantu mencerna lemak, menetralkan zat berbahaya, menyimpan nutrisi, dan membuat protein darah.",fact:"Hati kucing sulit memecah beberapa zat, sehingga banyak obat manusia, misalnya parasetamol, beracun bagi kucing. Jangan memberi obat manusia tanpa saran dokter hewan."},{id:"lambung",name:"Lambung",sci:"Sistem pencernaan",ui:"#e89a8a",short:"Kantong pencerna awal dengan asam dan enzim.",what:"Makanan turun dari mulut lewat kerongkongan (esofagus) menuju lambung, kantong berotot dengan dinding yang melipat.",fn:"Mengaduk makanan, mencampurnya dengan asam lambung dan enzim sehingga protein mulai terurai menjadi bubur makanan (kimus).",fact:"Kucing adalah karnivora obligat, artinya tubuhnya dirancang untuk makan daging. Lambungnya kecil, itu sebabnya kucing cocok makan sedikit tapi sering."},{id:"usus",name:"Usus",sci:"Sistem pencernaan",ui:"#f0b8a8",short:"Menyerap nutrisi dan air, lalu membentuk tinja.",what:"Usus terdiri dari usus halus yang berkelok-kelok dan usus besar yang lebih pendek dan lebih lebar, berakhir di anus.",fn:"Usus halus menyerap nutrisi ke dalam darah. Usus besar menyerap air dan membentuk sisa makanan menjadi tinja.",fact:"Usus kucing relatif pendek dibanding hewan pemakan tumbuhan karena daging lebih mudah dicerna. Titik kuning yang bergerak di animasi menunjukkan perjalanan makanan dari mulut sampai anus."},{id:"ginjal",name:"Ginjal",sci:"Sistem ekskresi",ui:"#a04a3a",short:"Penyaring darah yang membuat urine.",what:"Ada dua ginjal berbentuk kacang di bagian belakang rongga perut, dekat tulang punggung.",fn:"Menyaring darah, membuang sisa metabolisme, mengatur kadar air dan garam, lalu membentuk urine.",fact:"Ginjal kucing bisa membuat urine yang sangat pekat sehingga kucing tidak banyak minum. Penyakit ginjal kronis cukup sering terjadi pada kucing yang menua."},{id:"kandung",name:"Kandung kemih",sci:"Sistem ekskresi",ui:"#f0dc8a",short:"Menampung urine sebelum dibuang.",what:"Kandung kemih adalah kantong berdinding otot di bagian belakang perut. Urine mengalir dari ginjal ke sana lewat dua saluran (ureter).",fn:"Menampung urine sementara, lalu mengeluarkannya lewat saluran uretra saat kucing buang air kecil.",fact:"Pada kucing jantan, uretra lebih sempit sehingga lebih mudah tersumbat. Kucing jantan yang mengejan di kotak pasir tanpa urine keluar harus segera ditangani dokter hewan."}],c2={id:"kucing",kind:"animal",tagNear:5,name:"Kucing",short:"kucing",sci:"Felis catus",family:"Felidae",x:-5,z:7,top:.7,mkOff:1.1,promptY:.55,fact:"Kucing domestik termasuk keluarga Felidae, sama seperti singa dan harimau. Tubuhnya dirancang untuk berburu: refleks cepat, cakar yang bisa ditarik, mata peka cahaya redup, dan kumis peraba.",hint:"Geser slider Kedalaman untuk mengupas lapisan dari kulit sampai organ dalam, atau ketuk bagian tubuh dan daftar di samping. Geser Aktivitas untuk melihat jantung dan paru bekerja lebih cepat."},u2=[{id:"c1",sp:"kucing",q:"Lapisan mana yang terletak paling dalam, setelah kulit, otot, dan rangka dikupas?",o:["Organ dalam seperti jantung dan paru","Bulu pelindung","Kumis","Cakar"],a:0,e:"Urutannya dari luar: kulit dan bulu, otot, rangka, lalu organ dalam yang dilindungi tulang rusuk dan otot perut."},{id:"c2",sp:"kucing",q:"Jantung kucing berbilik empat. Apa tugas bilik (ventrikel)?",o:["Memompa darah keluar dari jantung","Menyimpan makanan","Menyaring urine","Membuat empedu"],a:0,e:"Serambi menerima darah, bilik memompanya keluar. Bilik kanan ke paru, bilik kiri ke seluruh tubuh."},{id:"c3",sp:"kucing",q:"Kira-kira berapa detak jantung kucing sehat per menit?",o:["10 sampai 30","60 sampai 80","140 sampai 220","500 sampai 600"],a:2,e:"Kisaran umumnya 140 sampai 220 kali per menit, lebih cepat daripada manusia (sekitar 60 sampai 100)."},{id:"c4",sp:"kucing",q:"Apa fungsi utama paru-paru?",o:["Menukar oksigen dan karbon dioksida","Membuat empedu","Menyaring darah jadi urine","Menyerap air dari sisa makanan"],a:0,e:"Di alveolus, oksigen masuk ke darah dan karbon dioksida dilepas ke udara napas."},{id:"c5",sp:"kucing",q:"Organ mana yang membuat empedu untuk membantu mencerna lemak?",o:["Hati","Ginjal","Lambung","Kandung kemih"],a:0,e:"Empedu dibuat di hati lalu dialirkan ke usus halus."},{id:"c6",sp:"kucing",q:"Kucing disebut karnivora obligat. Apa artinya?",o:["Tubuhnya dirancang makan daging dan butuh zat dari daging, misalnya taurin","Hanya makan sayur","Bisa hidup tanpa makan","Makan apa saja sama baiknya"],a:0,e:"Kucing tidak bisa membuat cukup taurin sendiri, jadi harus mendapatnya dari makanan berbahan daging."},{id:"c7",sp:"kucing",q:"Di mana nutrisi dari makanan terutama diserap ke dalam darah?",o:["Usus halus","Kerongkongan","Kandung kemih","Trakea"],a:0,e:"Usus halus punya permukaan lipatan luas untuk menyerap nutrisi. Usus besar terutama menyerap air."},{id:"c8",sp:"kucing",q:"Apa tugas ginjal?",o:["Menyaring darah dan membentuk urine","Memompa darah","Mencerna protein","Menyimpan oksigen"],a:0,e:"Ginjal membuang sisa metabolisme dan mengatur air serta garam dalam tubuh, hasilnya urine."},{id:"c9",sp:"kucing",q:"Mengapa kucing yang bernapas terengah-engah saat santai perlu dibawa ke dokter hewan?",o:["Kucing sehat jarang terengah, jadi itu bisa tanda gangguan napas atau jantung","Itu tanda kucing sedang senang","Itu cara normal kucing mendinginkan diri","Itu tanda kucing lapar"],a:0,e:"Napas istirahat normal sekitar 20 sampai 30 kali per menit dan tenang. Napas terengah pada kucing perlu diperiksa."}];var Hm={id:"kucing",name:"Kucing",layers:l2,specimen:c2,quiz:u2};var h2=i=>{let e=i==="sapi";return[{id:"kulit",name:"Kulit dan rambut",sci:"Integumen",ui:e?"#e8e2d6":"#e0cfae",short:"Pelindung tubuh dan pengatur suhu.",what:e?"Sapi perah Friesian Holstein (FH) berambut pendek belang hitam-putih. Pola belang tiap sapi berbeda, jadi bisa dipakai untuk mengenali sapi satu per satu.":"Kambing Peranakan Etawa (PE) adalah hasil persilangan kambing Etawa (Jamnapari) dari India dengan kambing kacang lokal. Cirinya telinga panjang menggantung, hidung melengkung, dan rambut panjang di paha belakang.",fn:"Melindungi tubuh dari luka, kuman, sengatan matahari, dan serangga, serta membantu mengatur suhu tubuh.",fact:e?"Sapi FH berasal dari daerah beriklim sejuk di Eropa, jadi di Indonesia biasanya dipelihara di dataran tinggi yang dingin, misalnya di lereng gunung di Jawa Timur. Udara panas membuat produksi susunya turun.":"Kambing PE termasuk kambing dwiguna: dipelihara untuk diambil susu dan dagingnya."},{id:"otot",name:"Otot",sci:"Sistem muskuler",ui:"#d0594a",short:"Penggerak tubuh dan rahang pengunyah.",what:"Otot rangka menempel ke tulang lewat tendon dan menggerakkan sendi. Otot rahang ruminansia sangat kuat karena dipakai mengunyah berjam-jam.",fn:"Menggerakkan kaki untuk berjalan, leher untuk merenggut pakan, dan rahang untuk mengunyah, termasuk mengunyah ulang saat memamah biak.",fact:e?"Otot sapi yang kita makan disebut daging. Bagian yang banyak bergerak, seperti kaki, lebih liat dibanding bagian punggung yang jarang bekerja keras.":"Kambing pemanjat yang lincah dan suka meramban, yaitu memakan daun dan ranting semak, bukan hanya merumput di tanah."},{id:"rangka",name:"Rangka",sci:"Sistem rangka",ui:"#eae0c4",short:"Kerangka penopang tubuh yang besar.",what:"Rangka terdiri dari tengkorak, tulang belakang, 13 pasang tulang rusuk, panggul, dan tulang kaki. Tiap kaki berakhir pada dua kuku (kuku belah).",fn:"Menopang berat tubuh, melindungi organ dalam, dan menjadi tempat melekatnya otot.",fact:e?"Sapi tidak punya gigi seri di rahang atas. Sebagai gantinya ada bantalan gigi yang keras. Sapi merenggut rumput dengan lidah, lalu menjepitnya di antara gigi seri bawah dan bantalan itu.":"Tanduk kambing terdiri dari inti tulang yang dibungkus lapisan keratin (bahan yang sama dengan kuku). Tanduk tumbuh seumur hidup dan tidak lepas tiap tahun, berbeda dengan ranggah rusa."},{id:"otak",name:"Otak dan mata",sci:"Sistem saraf",ui:"#e8a8b0",short:"Pusat kendali; mata di samping kepala.",what:"Otak mengolah informasi dari indra dan mengatur gerak serta perilaku. Mata ruminansia terletak di sisi kepala.",fn:"Mata di samping memberi bidang pandang sangat luas untuk mengawasi pemangsa sambil merunduk makan. Gantinya, area yang terlihat oleh dua mata sekaligus sempit, sehingga menilai jarak kurang tepat.",fact:e?"Pupil sapi berbentuk lonjong mendatar. Bentuk ini membantu melihat garis cakrawala yang luas di sekelilingnya.":"Pupil kambing berbentuk persegi panjang mendatar. Saat kambing menunduk untuk makan, bola matanya berputar sehingga pupil tetap sejajar dengan tanah."},{id:"jantung",name:"Jantung",sci:"Sistem peredaran darah",ui:"#e0505e",short:"Pompa darah berbilik empat.",what:"Jantung berbilik empat: dua serambi menerima darah dan dua bilik memompanya keluar, sama seperti jantung kucing dan manusia.",fn:"Memompa darah berisi oksigen dan nutrisi ke seluruh tubuh, termasuk ke ambing yang butuh banyak darah untuk membuat susu.",fact:e?"Detak jantung sapi dewasa yang istirahat umumnya sekitar 48 sampai 84 kali per menit, lebih lambat daripada kucing. Hewan bertubuh besar cenderung berdetak lebih lambat.":"Detak jantung kambing dewasa yang istirahat umumnya sekitar 70 sampai 90 kali per menit."},{id:"paru",name:"Paru-paru",sci:"Sistem pernapasan",ui:"#f0a0a8",short:"Pertukaran oksigen dan karbon dioksida.",what:"Udara masuk lewat hidung dan trakea, lalu bercabang di dalam paru-paru sampai ke kantong udara kecil (alveolus).",fn:"Mengambil oksigen ke darah dan membuang karbon dioksida. Napas juga membantu membuang panas tubuh.",fact:e?"Sapi dewasa yang istirahat bernapas sekitar 26 sampai 50 kali per menit. Saat kepanasan, napasnya jauh lebih cepat untuk membuang panas.":"Kambing dewasa yang istirahat bernapas sekitar 15 sampai 30 kali per menit."},{id:"hati",name:"Hati",sci:"Sistem pencernaan dan metabolisme",ui:"#b0463c",short:"Pengolah nutrisi dan penetral racun.",what:"Hati terletak di sisi kanan bagian depan perut, tepat di belakang diafragma.",fn:"Mengolah zat hasil pencernaan, menetralkan racun, menyimpan nutrisi, dan membuat empedu.",fact:"Ruminansia mendapat sangat sedikit gula langsung dari usus. Hati mereka membuat sebagian besar gula darah dari asam lemak hasil fermentasi di rumen."},{id:"rumen",name:"Rumen",sci:"Lambung ruang 1",ui:"#c9a27e",short:"Tangki fermentasi raksasa berisi mikroba.",what:"Rumen adalah ruang lambung terbesar dan menempati hampir seluruh sisi kiri perut. Dindingnya dipenuhi tonjolan kecil (papila) yang menyerap hasil fermentasi.",fn:"Bakteri, protozoa, dan jamur di dalam rumen memecah selulosa rumput yang tidak bisa dicerna hewan sendiri. Hasilnya asam lemak yang menjadi sumber energi utama, serta gas.",fact:e?"Pada sapi dewasa rumen bisa menampung lebih dari 100 liter. Rumen berkontraksi sekitar 1 sampai 3 kali per menit untuk mengaduk isinya. Gas metana dari fermentasi dikeluarkan lewat sendawa dan termasuk gas rumah kaca.":"Rumen kambing bekerja sama seperti pada sapi, tetapi kambing lebih pemilih: ia memilih daun dan pucuk yang paling bergizi."},{id:"retikulum",name:"Retikulum",sci:"Lambung ruang 2",ui:"#d8a898",short:"Ruang bersekat seperti sarang lebah.",what:"Retikulum berada di depan rumen, dekat jantung dan diafragma. Dinding dalamnya bersekat-sekat seperti sarang lebah.",fn:"Bersama rumen mengaduk makanan, memilah partikel kasar dan halus, serta mendorong gumpalan makanan (bolus) naik kembali ke mulut untuk dikunyah ulang.",fact:"Benda berat yang ikut tertelan, seperti paku atau kawat, bisa tersangkut di retikulum dan melukai dinding sampai ke jantung. Peternak kadang memasukkan magnet khusus ke lambung sapi untuk menangkap logam itu."},{id:"omasum",name:"Omasum",sci:"Lambung ruang 3",ui:"#b8907c",short:"Ruang berlembar-lembar seperti buku.",what:"Omasum berbentuk bulat dengan dinding dalam berupa lipatan tipis yang tersusun seperti halaman buku.",fn:"Menyerap air dan mineral dari makanan, serta menyaring partikel yang masih kasar sebelum masuk ke abomasum.",fact:"Lembaran-lembaran omasum memperluas permukaan penyerapan, mirip prinsip lipatan pada usus halus."},{id:"abomasum",name:"Abomasum",sci:"Lambung ruang 4 (lambung sejati)",ui:"#e08880",short:"Lambung sejati dengan asam dan enzim.",what:"Abomasum adalah ruang keempat yang disebut lambung sejati karena cara kerjanya mirip lambung manusia.",fn:"Menghasilkan asam lambung dan enzim yang mencerna protein, termasuk protein dari mikroba rumen yang ikut terbawa.",fact:"Pada anak sapi atau anak kambing yang masih menyusu, susu mengalir lewat lekukan khusus (alur esofagus) langsung ke abomasum, melewati rumen yang belum berkembang."},{id:"usus",name:"Usus",sci:"Sistem pencernaan",ui:"#f0b8a8",short:"Penyerap nutrisi dan air.",what:"Usus halus sangat panjang dan berkelok, lalu berlanjut ke usus besar yang berakhir di anus.",fn:"Usus halus menyerap nutrisi ke dalam darah. Usus besar menyerap air dan membentuk kotoran.",fact:e?"Usus halus sapi dewasa bisa mencapai puluhan meter. Pakan berserat butuh jalur cerna yang panjang.":"Kotoran kambing berbentuk butiran kecil karena usus besarnya menyerap air dengan sangat efisien."},{id:"ginjal",name:"Ginjal",sci:"Sistem ekskresi",ui:"#a04a3a",short:"Penyaring darah pembuat urine.",what:e?"Ginjal sapi tampak bergelambir, terdiri dari banyak lobus kecil yang menyatu.":"Ginjal kambing halus berbentuk kacang, tidak bergelambir seperti ginjal sapi.",fn:"Menyaring darah, membuang sisa metabolisme, dan mengatur kadar air serta garam tubuh.",fact:"Bentuk ginjal berbeda antarspesies: ginjal sapi berlobus, sedangkan ginjal kambing, domba, dan kucing halus."},{id:"kandung",name:"Kandung kemih",sci:"Sistem ekskresi",ui:"#f0dc8a",short:"Penampung urine.",what:"Kantong berdinding otot di bagian belakang rongga perut.",fn:"Menampung urine dari ginjal sebelum dikeluarkan.",fact:"Urine dan kotoran ternak bisa diolah menjadi pupuk organik dan biogas, sumber energi yang dipakai di banyak peternakan rakyat."},{id:"ambing",name:"Ambing",sci:"Kelenjar susu",ui:"#f4c8c0",short:"Pabrik susu.",what:e?"Ambing sapi terbagi menjadi empat kuartir yang terpisah, masing-masing dengan satu puting.":"Ambing kambing terbagi menjadi dua bagian, masing-masing dengan satu puting.",fn:"Kelenjar susu mengambil zat dari darah lalu mengubahnya menjadi susu yang berisi lemak, protein, gula susu (laktosa), dan mineral.",fact:e?"Untuk membuat 1 liter susu, sekitar 400 sampai 500 liter darah perlu mengalir melewati ambing.":"Susu kambing PE banyak dijual sebagai susu segar dan produk olahan di peternakan rakyat Indonesia."}]},d2=i=>{let e=i==="sapi";return[{id:i+"1",sp:i,q:"Ruang lambung mana yang paling besar dan berisi mikroba pemecah selulosa?",o:["Rumen","Retikulum","Omasum","Abomasum"],a:0,e:"Rumen adalah tangki fermentasi. Mikroba di dalamnya memecah selulosa menjadi asam lemak yang menjadi sumber energi."},{id:i+"2",sp:i,q:'Ruang lambung mana yang disebut "lambung sejati" karena mirip lambung manusia?',o:["Abomasum","Rumen","Retikulum","Omasum"],a:0,e:"Abomasum menghasilkan asam dan enzim pencerna protein."},{id:i+"3",sp:i,q:"Apa yang dimaksud memamah biak?",o:["Makanan yang sudah ditelan dikembalikan ke mulut untuk dikunyah ulang","Makan sambil berjalan","Minum air sangat banyak","Menyimpan makanan di pipi"],a:0,e:"Gumpalan makanan (bolus) didorong dari retikulum ke mulut, dikunyah lagi, lalu ditelan kembali. Titik hijau di animasi menunjukkan perjalanan ini."},{id:i+"4",sp:i,q:"Dinding dalam retikulum berbentuk seperti apa?",o:["Sarang lebah","Halaman buku","Bulu halus","Licin tanpa lipatan"],a:0,e:"Sekat-sekat seperti sarang lebah membantu memilah partikel makanan."},{id:i+"5",sp:i,q:"Apa fungsi utama omasum?",o:["Menyerap air dan mineral","Membuat susu","Memompa darah","Menghasilkan metana"],a:0,e:"Lipatan-lipatan omasum yang seperti halaman buku memperluas permukaan penyerapan."},{id:i+"6",sp:i,q:"Mengapa mata "+(e?"sapi":"kambing")+" terletak di sisi kepala?",o:["Supaya bisa mengawasi sekeliling untuk menghindari pemangsa","Supaya bisa melihat dalam gelap total","Supaya tidak silau","Supaya bisa membaca"],a:0,e:"Hewan mangsa butuh bidang pandang yang sangat luas. Pemangsa seperti kucing punya mata menghadap depan untuk menilai jarak."},e?{id:i+"7",sp:i,q:"Berapa jumlah puting pada ambing sapi?",o:["4","2","6","8"],a:0,e:"Ambing sapi terbagi menjadi empat kuartir yang masing-masing punya satu puting."}:{id:i+"7",sp:i,q:"Tanduk kambing tersusun dari apa?",o:["Inti tulang yang dibungkus keratin","Tulang rawan saja","Rambut yang mengeras","Kalsium dari susu"],a:0,e:"Inti tulang dilapisi keratin. Tanduk tidak lepas setiap tahun, berbeda dengan ranggah rusa."},e?{id:i+"8",sp:i,q:"Mengapa sapi FH di Indonesia banyak dipelihara di dataran tinggi?",o:["Karena berasal dari daerah sejuk dan produksi susunya turun saat kepanasan","Karena rumput hanya tumbuh di gunung","Karena sapi takut laut","Karena lebih dekat ke pasar"],a:0,e:"Sapi FH berasal dari Eropa yang beriklim sejuk. Udara panas membuat sapi stres dan susunya berkurang."}:{id:i+"8",sp:i,q:"Bentuk pupil kambing adalah ...",o:["Persegi panjang mendatar","Celah tegak seperti kucing","Bulat seperti manusia","Bintang"],a:0,e:"Pupil mendatar membantu melihat luas ke sekeliling, dan tetap mendatar saat kambing menunduk makan."},{id:i+"9",sp:i,q:"Gas apa yang dihasilkan fermentasi di rumen dan dikeluarkan lewat sendawa?",o:["Metana","Oksigen","Helium","Klorin"],a:0,e:"Metana adalah gas rumah kaca. Para peneliti sedang mencari pakan yang bisa mengurangi metana dari ternak."}]};function xf(i){let e=i==="sapi";return{id:i,name:e?"Sapi":"Kambing",layers:h2(i),quiz:d2(i),specimen:e?{id:"sapi",kind:"animal",name:"Sapi perah",short:"sapi",sci:"Bos taurus (Friesian Holstein)",family:"Bovidae",x:10,z:21,top:1.7,mkOff:.9,promptY:1.1,tagNear:7,fact:"Sapi adalah ruminansia, hewan memamah biak dengan lambung empat ruang. Sapi perah Friesian Holstein dipelihara untuk diambil susunya.",hint:"Geser Kedalaman untuk mengupas lapisan. Di bagian organ, titik oranye adalah perjalanan makanan dan titik hijau adalah gumpalan makanan yang naik lagi ke mulut untuk dikunyah ulang (memamah biak). Kamera mulai dari sisi kiri supaya rumen terlihat."}:{id:"kambing",kind:"animal",name:"Kambing PE",short:"kambing",sci:"Capra hircus (Peranakan Etawa)",family:"Bovidae",x:16,z:24,top:1.05,mkOff:.7,promptY:.75,tagNear:6,fact:"Kambing juga ruminansia berlambung empat ruang. Kambing PE terkenal dengan telinga panjangnya yang menggantung.",hint:"Geser Kedalaman untuk mengupas lapisan. Titik oranye adalah perjalanan makanan, titik hijau adalah gumpalan makanan yang dikunyah ulang (memamah biak). Bandingkan ginjal dan ambingnya dengan sapi."}}}var xn=i=>new k(i[0],i[1],i[2]),tt=i=>lu(i,!1),jn=(i,e,t)=>new fe().setRGB(i,e,t,Et),$i=1,ps=i=>{$i=i};function Re(i,e,t=22,n){let s=new $n(1,t,Math.max(8,Math.round(t*.7)));return s.scale(i[0]*$i,i[1]*$i,i[2]*$i),n&&(s.rotateX(n[0]),s.rotateY(n[1]),s.rotateZ(n[2])),s.translate(e[0],e[1],e[2]),s}function ot(i,e,t,n,s=10){let r=$i;t*=r,n*=r,$i=1;let a=xn(i),o=xn(e),l=o.clone().sub(a),c=l.length(),u=new dn(n,t,c,s,1,!0);u.applyQuaternion(new wt().setFromUnitVectors(new k(0,1,0),l.clone().normalize())),u.translate((a.x+o.x)/2,(a.y+o.y)/2,(a.z+o.z)/2);let h=tt([u,Re([t,t,t],i,s),Re([n,n,n],e,s)]);return $i=r,h}function un(i,e,t=24,n=8){return new qr(new bi(i.map(xn)),t,e*$i,n,!1)}function da(i,e,t,n,s=8){let r=new ja(i*$i,e*$i,s,1);return n&&(r.rotateX(n[0]),r.rotateY(n[1]),r.rotateZ(n[2])),r.translate(t[0],t[1],t[2]),r}var Wn=(i,e)=>(i.translate(-e[0],-e[1],-e[2]),i);function Qi(i,e,t){let n=document.createElement("canvas");n.width=n.height=i,e(n.getContext("2d"),i);let s=new Hn(n);return s.colorSpace=Et,s.wrapS=s.wrapT=Yt,s.anisotropy=4,t&&s.repeat.set(t[0],t[1]),s}function hr(i,e,t=11,n=[2,2],s=5200){return Qi(256,(r,a)=>{let o=nn(t);r.fillStyle=i,r.fillRect(0,0,a,a),e&&e(r,a,o);for(let l=0;l<s;l++){r.strokeStyle=o()<.5?"rgba(255,240,220,0.09)":"rgba(30,18,8,0.09)",r.lineWidth=1;let c=o()*a,u=o()*a;r.beginPath(),r.moveTo(c,u),r.lineTo(c+(o()-.5)*3,u+4+o()*6),r.stroke()}},n)}function ms(i,e=[1,.85,.62],t=.95){return new Zt({map:i,bumpMap:i,bumpScale:.6,roughness:t,metalness:0,sheen:1,sheenRoughness:.55,sheenColor:new fe(e[0],e[1],e[2])})}function f2(){return Qi(256,(i,e)=>{let t=nn(23);i.fillStyle="#8a2b22",i.fillRect(0,0,e,e);for(let n=0;n<900;n++){i.strokeStyle=t()<.5?"rgba(196,82,64,0.35)":"rgba(70,16,12,0.35)",i.lineWidth=1+t()*2.5;let s=t()*e;i.beginPath(),i.moveTo(s,0),i.bezierCurveTo(s+6,e*.3,s-6,e*.7,s+(t()-.5)*8,e),i.stroke()}for(let n=0;n<14;n++){i.strokeStyle="rgba(240,215,200,0.22)",i.lineWidth=1.2;let s=t()*e;i.beginPath(),i.moveTo(s,0),i.lineTo(s+(t()-.5)*20,e),i.stroke()}},[3,2])}function p2(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,vt),e.fill(),new Hn(i)}function Bs(i,e,t){let n=new Zt({color:jn(...t.iris),roughness:.08,clearcoat:1,clearcoatRoughness:.05,transparent:!0}),s=new at({color:263172,roughness:.2,transparent:!0});for(let r of[1,-1]){let a=new ke(new $n(1,20,16),n),o=t.scale||[.75,1,1];a.scale.set(t.r*o[0],t.r*o[1],t.r*o[2]),a.position.set(t.p[0]-e[0],t.p[1]-e[1],r*t.p[2]-e[2]),i.add(a);let l=t.side?new k(.35,.05,r).normalize():new k(1,0,r*.35).normalize(),c;t.pupil==="slit"?c=new $n(1,10,8).scale(t.r*.16,t.r*.78,t.r*.1):t.pupil==="bar"?c=new xi(t.r*1,t.r*.3,t.r*.1):t.pupil==="oval"?c=new $n(1,12,10).scale(t.r*.6,t.r*.32,t.r*.1):c=new $n(1,12,10).scale(t.r*.45,t.r*.45,t.r*.1);let u=new ke(c,s);u.position.copy(a.position).addScaledVector(l,t.r*(t.side?.93:.76)),u.lookAt(u.position.clone().add(l)),i.add(u)}return[n,s]}function bf(i,e,t,n){let s=d=>t.isMaterial?t:t[d]||t.body,r=new on,a=[],o=(d,f,p)=>{let b=new ke(d,s(p));b.castShadow=b.receiveShadow=!0,b.userData.layer=n;let g=new on;return g.position.set(f[0],f[1],f[2]),g.add(b),a.push(b),r.add(g),g},l=new ke(e.body,s("body"));l.castShadow=l.receiveShadow=!0,l.userData.layer=n,r.add(l),a.push(l);let c=o(e.head,i.pivots.head,"head"),u=o(e.tail,i.pivots.tail,"tail");if(e.extra)for(let[d,f]of e.extra){let p=new ke(d,s(f));p.castShadow=!0,p.userData.layer=n,r.add(p),a.push(p)}let h=e.legs.map((d,f)=>o(d,i.pivots.legs[f],"legs"));return{root:r,meshes:a,head:c,tail:u,legs:h}}function Gm(i,e,t,n,s=404,r=null){let{heightAt:a,WATER:o}=e,l=t.worldScale,c=-t.groundY,u=bf(t,t.bodyParts(1),t.skinMats(),"kulit");t.face&&t.face(u,t.pivots.head),u.root.scale.setScalar(l);let h=new on;h.add(u.root),i.add(h);let d=new ke(new $n(t.hitR,8,6),new ln({visible:!1}));i.add(d);let f=t.walk,p=nn(s),b={group:h,hit:d,x:n.x,z:n.z,y:a(n.x,n.z),yaw:p()*vt,parts:u},g="idle",m=2+p()*3,y=n.x,_=n.z,M=0,E=0,S=0,x=0;return b.update=(v,F,w)=>{let H=w.x-b.x,q=w.z-b.z,C=Math.hypot(H,q),T=0;if(g==="idle"){if(m-=v,C<3&&!f.graze){let V=Math.atan2(-q,H)-b.yaw;V=Math.atan2(Math.sin(V),Math.cos(V)),b.yaw+=V*Math.min(1,v*3)}if(m<=0&&C>f.keep){for(let I=0;I<10;I++){let V=p()*vt,G=1.5+p()*f.radius,N=n.x+Math.cos(V)*G,O=n.z+Math.sin(V)*G;if(a(N,O)>o+.5&&(!r||Math.hypot(N-r.x,O-r.z)<r.r-1.6)){y=N,_=O,g="walk";break}}m=3+p()*6}}else{let I=y-b.x,V=_-b.z,G=Math.hypot(I,V);if(G<.25||C<f.keep*.7)g="idle",m=3+p()*7,x=f.graze?2+p()*6:0;else{let O=Math.atan2(-V,I)-b.yaw;O=Math.atan2(Math.sin(O),Math.cos(O)),b.yaw+=O*Math.min(1,v*3),T=f.speed,b.x+=I/G*T*v,b.z+=V/G*T*v}}x-=v;let U=g==="idle"&&x>0?1:0;S+=(U-S)*Math.min(1,v*2),E+=((T>0?1:0)-E)*Math.min(1,v*6),M+=T*v*f.step;let P=Math.sin(M)*f.swing*E;u.legs[0].rotation.z=P,u.legs[3].rotation.z=P*.9,u.legs[1].rotation.z=-P,u.legs[2].rotation.z=-P*.9,u.tail.rotation.y=Math.sin(F*(f.tailF||1.4))*(f.tailA||.28),u.head.rotation.z=Math.sin(F*.8)*.04-E*.04-S*(f.graze||0)+(S>.5?Math.sin(F*7)*.03:0),b.y+=(a(b.x,b.z)-b.y)*Math.min(1,v*10),h.position.set(b.x,b.y+c*l+Math.abs(Math.sin(M))*.012*E,b.z),h.rotation.y=b.yaw,d.position.set(b.x,b.y+t.hitY,b.z)},b}function qm(i,e){let t=new li;{let N=document.createElement("canvas");N.width=N.height=512;let O=N.getContext("2d"),J=O.createRadialGradient(256,230,20,256,256,420);J.addColorStop(0,e.bg[0]),J.addColorStop(.55,e.bg[1]),J.addColorStop(1,"#05090e"),O.fillStyle=J,O.fillRect(0,0,512,512);let se=new Hn(N);se.colorSpace=Et,t.background=se}let n=new Oi(i);t.environment=n.fromScene(new ua,.04).texture,t.environmentIntensity=.5;let s=new en(38,1,.1,120),r=new Qn(16773596,2.6);r.position.set(4,9,8),r.castShadow=!0,r.shadow.mapSize.set(1024,1024);let a=r.shadow.camera;a.left=-8,a.right=8,a.top=8,a.bottom=-8,a.near=1,a.far=32,r.shadow.bias=-5e-4,r.shadow.normalBias=.03,t.add(r);let o=new Qn(9425151,1.2);o.position.set(-6,3,-5),t.add(o);let l=new Qn(16777215,.6);l.position.set(-3,4,-9),t.add(l);let c=new ti().load(na),u=new ti().load(ia);for(let N of[c,u])N.wrapS=N.wrapT=Yt,N.repeat.set(2.4,2.4);c.colorSpace=Et;let h=new ke(new dn(e.pedR||5.6,(e.pedR||5.6)+.2,.3,64),new at({map:c,normalMap:u,color:new fe(.7,.66,.62),roughness:1}));h.position.y=e.groundY-.15,h.receiveShadow=!0,h.userData.noAO=!0,e.noPed||t.add(h);let d=new on;t.add(d);let f=[],p={},b=(N,O)=>{p[N]||(p[N]={mats:[],meshes:[]}),p[N].mats.includes(O.material)||p[N].mats.push(O.material),p[N].meshes.push(O),O.userData.layer=N,f.push(O)},g=bf(e,e.bodyParts(1),e.skinMats(),"kulit"),m=e.face?e.face(g,e.pivots.head):[];d.add(g.root),g.meshes.forEach(N=>b("kulit",N));let y=e.muscleMat?e.muscleMat():new Zt({map:f2(),roughness:.5,clearcoat:.35,clearcoatRoughness:.4}),_=bf(e,e.bodyParts(e.muscleShrink||.84),y,"otot");d.add(_.root),_.meshes.forEach(N=>b("otot",N));let M=new at({color:jn(.9,.85,.72),roughness:.55}),E=new ke(e.bones(),M);if(E.castShadow=!0,E.receiveShadow=!0,d.add(E),b("rangka",E),e.boneExtras)for(let[N,O]of e.boneExtras()){let J=new ke(N,O);J.castShadow=!0,d.add(J),b("rangka",J)}let S=(N,O=.42,J=.35,se)=>new Zt({color:jn(N[0],N[1],N[2]),map:se||null,roughness:O,clearcoat:J,clearcoatRoughness:.3,transparent:!0}),x=(N,O,J,se)=>{let z=new ke(O,J);return se&&z.position.set(se[0],se[1],se[2]),z.castShadow=z.receiveShadow=!0,d.add(z),b(N,z),z},v=e.organs(x,S),F=p2(),w=[];function H(N,O,J,se,z,ee={}){let oe=new bi(N.map(xn),!!z),me=new bt;me.setAttribute("position",new dt(new Float32Array(J*3),3));let pe=new ci(me,new Zn({map:F,color:O,size:e.dotSize||.16,sizeAttenuation:!0,transparent:!0,depthWrite:!1}));pe.frustumCulled=!1,pe.userData.noAO=!0,d.add(pe),w.push({p:pe,path:oe,n:J,speed:se,dir:ee.dir,show:ee.show,jit:ee.jit??.07,u:Array.from({length:J},(Fe,Xe)=>Xe/J),j:Array.from({length:J},()=>[Math.random()-.5,Math.random()-.5])})}H(e.food.main,new fe(2.4,1.3,.35),e.food.n||70,1,!1),e.food.cud&&H(e.food.cud,new fe(.6,2.2,.5),26,1.6,!1);for(let N of e.flows||[])H(N.pts,N.color,N.n,N.speed,!1,N);let q={yaw:e.camYaw||0,yaw0:e.camYaw||0,pitch:.3,dist:16,user:!1,sun:.2,depth:0,depthT:0};for(let N in p)for(let O of p[N].mats)O.userData.base=O.color.clone(),O.transparent=!0;p.kulit.mats.push(...m);let C={};for(let N in p)C[N]=0;let T={kulit:1,otot:1,rangka:1},U=0,P=0,I=xn(e.camTarget),V={pts:{visible:!0}},G=N=>N==="kulit"||N==="otot"||N==="rangka";return{scene:t,camera:s,layerMeshes:f,state:q,waterFlow:V,sugarFlow:V,spec:e,vitals:e.vitals,update(N,O,J,se){q.user||(q.yaw=q.yaw0+.35*Math.sin(O*.4));let z=Math.cos(q.pitch),ee=Math.sin(q.pitch);s.position.set(I.x+Math.sin(q.yaw)*z*q.dist,I.y+ee*q.dist,I.z+Math.cos(q.yaw)*z*q.dist),s.lookAt(I),q.depth+=(q.depthT-q.depth)*Math.min(1,N*6);let oe=q.depth;T.kulit=1-Ut(.1,.28,oe),T.otot=1-Ut(.4,.55,oe),T.rangka=1-.72*Ut(.78,.95,oe);for(let ge of["kulit","otot","rangka"]){let B=T[ge];for(let le of p[ge].mats)le.opacity=B,le.depthWrite=B>.98;for(let le of p[ge].meshes)le.visible=B>.02&&(ge!=="rangka"||oe>.38),le.castShadow=B>.5}g.head.visible=T.kulit>.02;let me=e.vitals(q.sun);U+=N*me.bpm/60*vt,P+=N*me.rr/60*vt;let pe=Math.pow(Math.max(0,Math.sin(U)),6),Fe=Math.pow(Math.max(0,Math.sin(U*2-1.1)),8)*.5;v.heart&&v.heart.scale.setScalar(1+.13*pe+.05*Fe);let Xe=.5+.5*Math.sin(P);(v.lungs||[]).forEach(ge=>ge.scale.set(1+.05*Xe,1+.09*Xe,1+.07*Xe));for(let ge of v.pulse||[]){ge.ph=(ge.ph||0)+N*ge.rate(q.sun)/60*vt;let B=Math.pow(Math.max(0,Math.sin(ge.ph)),4)*ge.amp;ge.mesh.scale.set(1-B*.5,1-B,1-B*.5)}let Ue=oe>.55;for(let ge in p)if(!G(ge))for(let B of p[ge].meshes)B.visible=oe>.4;for(let ge of w){if(ge.p.visible=Ue&&(!ge.show||ge.show(q)),!ge.p.visible)continue;let B=ge.p.geometry.attributes.position,le=(.03+.07*q.sun)*ge.speed*(ge.dir?ge.dir(q):1);for(let he=0;he<ge.n;he++){ge.u[he]=((ge.u[he]+le*N)%1+1)%1;let Ee=ge.path.getPoint(ge.u[he]);B.setXYZ(he,Ee.x+ge.j[he][0]*ge.jit,Ee.y+ge.j[he][1]*ge.jit,Ee.z)}B.needsUpdate=!0}e.onUpdate&&e.onUpdate(q,d,v,N,O);let Qe=J&&p[J]&&!G(J);for(let ge in p){let B=Qe&&!G(ge)&&J!==ge?1:0;C[ge]+=(B-C[ge])*Math.min(1,N*8);let le=J===ge?.16:se===ge?.08:0;for(let he of p[ge].mats)G(ge)||(he.opacity=1-.8*C[ge],he.depthWrite=C[ge]<.05),he.emissive&&he.userData.base&&he.emissive.copy(he.userData.base).multiplyScalar(le)}}}}function fa(i){let e=[];for(let r of i.skull)e.push(Re(r[0],r[1],r[2]||18));for(let r of i.jaw||[])e.push(ot(r[0],r[1],r[2],r[3]));let t=new bi(i.spine.map(xn));for(let r=0;r<i.nV;r++){let a=t.getPoint(r/(i.nV-1));e.push(Re([i.vr*1.2,i.vr,i.vr],[a.x,a.y,a.z],8))}if(i.tail){let r=new bi(i.tail.map(xn));for(let a=1;a<i.nT;a++){let o=r.getPoint(a/i.nT),l=i.tr*(1-a/i.nT*.6);e.push(Re([l,l,l],[o.x,o.y,o.z],7))}}let n=i.ribs;for(let r=0;r<n.n;r++)for(let a of[1,-1]){let o=n.x0-r*n.dx,l=1-.38*Math.abs(r-n.n*.32)/n.n,c=n.cy,u=n.hh,h=n.hw,d=new bi([xn([o,c+u*.82,a*h*.15]),xn([o,c+u*.42*l,a*h*.88*l]),xn([o,c-u*.2*l,a*h*l]),xn([o,c-u*.78*l,a*h*.62*l]),xn([o,c-u*l,a*h*.1])]);e.push(new qr(d,10,n.t||.045,5,!1))}i.sternum&&e.push(ot(i.sternum[0],i.sternum[1],i.sternum[2],i.sternum[2]));let s=i.br||[.11,.09,.07,.05];for(let r of[1,-1]){let a=o=>[o[0],o[1],o[2]*r];i.scap&&e.push(Re(i.scap[0],a(i.scap[1]),10,[0,0,.3]));for(let o of i.front){let[l,c,u,h]=o.map(a);e.push(ot(l,c,s[0],s[1]),ot(c,u,s[1],s[2]),ot(u,h,s[2],s[3]),Re([s[0]*1.35,s[0]*1.35,s[0]*1.35],l,8),Re([s[1]*1.3,s[1]*1.3,s[1]*1.3],c,8))}for(let o of i.hind){let[l,c,u,h]=o.map(a);e.push(ot(l,c,s[0]*1.25,s[1]),ot(c,u,s[1],s[2]),ot(u,h,s[2],s[3]),Re([s[0]*1.5,s[0]*1.5,s[0]*1.5],l,8),Re([s[1]*1.3,s[1]*1.3,s[1]*1.3],c,8))}}return i.pelvis&&e.push(Re(i.pelvis[0],i.pelvis[1],12,i.pelvis[2])),tt(e)}function pa(i,e){let t=Re(i,[0,0,0],40),n=t.attributes.position,s=t.attributes.normal,r=1/i[0];for(let a=0;a<n.count;a++){let o=n.getX(a)*r*.5,l=n.getY(a)*r*.5,c=n.getZ(a)*r*.5,u=(Math.sin(o*11)*Math.sin(l*9+1)*Math.sin(c*12)*.045+Math.sin(o*20+c*17)*.015)*i[0]*2;n.setXYZ(a,n.getX(a)+s.getX(a)*u,n.getY(a)+s.getY(a)*u,n.getZ(a)+s.getZ(a)*u)}return t.computeVertexNormals(),tt([t,Re(e[0],e[1],14)])}var Om=[3,.85,0],Xm=[-2.6,.2,0],Vm=[[1.75,-.3,.58],[1.75,-.3,-.58],[-1.7,-.1,.65],[-1.7,-.1,-.65]],yf=[[-2.6,.2,0],[-3.4,.45,.05],[-4.1,1.1,.1],[-4.4,2,0],[-4.3,2.5,-.1]],Mf=[[0,-.62,-.1],[-.45,-.72,.4],[-.9,-.6,-.4],[-1.2,-.74,.4],[-1.5,-.55,-.35],[-1.7,-.3,.2],[-2,-.15,0],[-2.7,-.1,0]],Ym=null;function m2(){return Ym||(Ym=hr("#b4793c",(i,e,t)=>{for(let n=0;n<18;n++){let s=n/18*e+t()*8,r=5+t()*9;i.fillStyle="rgba(48,28,14,0.55)",i.beginPath(),i.moveTo(s,0);for(let a=0;a<=e;a+=16)i.lineTo(s+Math.sin(a*.06+n)*6,a);for(let a=e;a>=0;a-=16)i.lineTo(s+r+Math.sin(a*.06+n)*6,a);i.fill()}},11))}var $m={id:"kucing",groundY:-1.6,worldScale:.1,hitR:.75,hitY:.35,pivots:{head:Om,tail:Xm,legs:Vm},walk:{speed:.9,step:5.5,swing:.6,radius:6,keep:1.6,tailA:.28},camTarget:[.2,.1,0],bg:["#2a3f52","#121f2b"],vitals:i=>({bpm:Math.round(An(140,220,i)),rr:Math.round(An(24,48,i))}),bodyParts(i){ps(i);let e=tt([Re([2.55,1.12,.95],[0,0,0],28),Re([1.3,1.15,.95],[1.35,-.05,0]),Re([1.2,1.15,1.02],[-1.55,-.05,0]),Re([2.1,.9,.9],[0,-.3,0]),ot([2.2,.3,0],[3,.85,0],.78,.62)]),t=[1,-1].map(a=>da(.36,.7,[3.4,1.85,a*.52],[a*.28,Math.PI/4,0],4)),n=Wn(tt([Re([.85,.78,.82],[3.55,1.1,0]),Re([.42,.3,.42],[4.3,.88,0]),Re([.45,.38,.7],[3.8,.85,0]),...t]),Om),s=Wn(tt([un(yf,.2,28,8),Re([.2,.2,.2],yf[4],10)]),Xm),r=Vm.map((a,o)=>o<2?tt([ot([0,0,0],[.1,-.7,0],.36,.27),ot([.1,-.7,0],[.05,-1.28,0],.25,.2),Re([.34,.17,.26],[.2,-1.34,0],14)]):tt([Re([.6,.85,.52],[0,-.45,0]),ot([0,-.8,0],[-.2,-1.28,0],.3,.2),Re([.36,.17,.27],[-.05,-1.42,0],14)]));return ps(1),{body:e,head:n,tail:s,legs:r}},skinMats(){return ms(m2())},face(i,e){let t=Bs(i.head,e,{p:[4.18,1.27,.4],r:.2,scale:[.7,1,1],iris:[.5,.72,.18],pupil:"slit"}),n=new at({color:14256778,roughness:.5,transparent:!0}),s=new Ls({color:16117734,transparent:!0,opacity:.9}),r=new ke(Re([.09,.07,.12],[4.7-e[0],.98-e[1],0],10),n);i.head.add(r);for(let a of[1,-1]){let o=[];for(let l=0;l<3;l++){let c=(l-1)*.22;o.push(xn([4.25-e[0],.9-e[1],a*.25]),xn([4.45-e[0],.92-e[1]+c,a*1.2]))}i.head.add(new js(new bt().setFromPoints(o),s))}return t.concat([n,s])},bones(){return fa({skull:[[[.7,.58,.6],[3.55,1.1,0],20]],jaw:[[[3.9,1,0],[4.3,.88,0],.3,.2],[[3.7,.66,0],[4.25,.68,0],.16,.12]],spine:[[3,.85,0],[2,.78,0],[0,.7,0],[-1.8,.55,0],[-2.6,.25,0]],nV:26,vr:.13,tail:yf,nT:19,tr:.14,ribs:{n:13,x0:2.1,dx:.2,cy:-.08,hh:.87,hw:.85},sternum:[[2,-.95,0],[.1,-.95,0],.07],scap:[[.12,.5,.26],[1.95,.3,.4]],pelvis:[[.28,.5,.75],[-1.85,.3,0],[0,0,.2]],front:[[[1.75,-.3,.58],[1.85,-.95,.55],[1.8,-1.4,.5],[2,-1.62,.48]]],hind:[[[-1.7,-.1,.65],[-1.45,-.8,.62],[-1.85,-1.3,.58],[-1.7,-1.62,.56]]]})},organs(i,e){i("otak",pa([.5,.38,.4],[[.2,.17,.2],[-.42,-.14,0]]),e([.86,.64,.66],.5,.3),[3.5,1.3,0]);let t=[1.35,-.3,.05],n=i("jantung",Wn(tt([Re([.34,.42,.3],t,24),Re([.27,.3,.26],[1.47,-.18,-.1],20),ot([1.42,0,0],[1.55,.4,0],.1,.08),ot([1.3,0,.1],[1.15,.38,.12],.08,.07)]),t),e([.62,.07,.1],.3,.8),t),s=[1,-1].map(r=>{let a=[1.3,.42,r*.5];return i("paru",Wn(tt([Re([.72,.5,.32],a,24,[0,0,.12]),Re([.36,.34,.28],[.85,.3,r*.46],16)]),a),e([.88,.45,.5],.55,.2),a)});i("paru",tt([un([[3,.72,0],[2.1,.5,0],[1.6,.3,0]],.09,16,8),ot([1.6,.3,0],[1.4,.25,.5],.07,.05),ot([1.6,.3,0],[1.4,.25,-.5],.07,.05)]),e([.88,.86,.82],.4,.4)),i("hati",tt([Re([.45,.42,.58],[.72,-.42,.12],22),Re([.35,.3,.4],[.5,-.58,-.22],18)]),e([.4,.1,.08],.35,.7)),i("lambung",tt([Re([.5,.36,.34],[.05,-.5,-.32],22,[0,0,.5]),un([[2.9,.7,0],[1.9,.18,-.05],[.9,-.3,-.25],[.3,-.4,-.3]],.07,24,8)]),e([.9,.52,.48],.4,.6)),i("usus",tt([un(Mf.slice(0,6),.14,150,8),un(Mf.slice(5),.17,30,8)]),e([.94,.68,.64],.45,.6));for(let r of[1,-1])i("ginjal",Re([.3,.19,.2],[-.65,.4,r*.28],16,[0,0,.3]),e([.5,.14,.1],.35,.7));return i("kandung",Re([.3,.28,.28],[-1.78,-.62,0],18),e([.95,.85,.5],.25,.9)),{heart:n,lungs:s}},food:{main:[[4.35,.82,0],[3.4,.6,0],[2.3,.25,0],[1,-.3,-.15],[.1,-.5,-.3],...Mf]}};var vf=null;function g2(){if(vf)return vf;let i=Qi(256,(n,s)=>{let r=nn(5);n.fillStyle="#b89478",n.fillRect(0,0,s,s);for(let a=0;a<2600;a++){let o=r()*s,l=r()*s,c=1.5+r()*2.5;n.fillStyle=r()<.5?"rgba(120,80,55,0.55)":"rgba(230,200,170,0.4)",n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}},[3,3]),e=Qi(256,(n,s)=>{n.fillStyle="#c49a86",n.fillRect(0,0,s,s),n.strokeStyle="rgba(90,50,40,0.75)",n.lineWidth=3;let r=16,a=r*Math.sqrt(3);for(let o=-1;o<s/a*2+2;o++)for(let l=-1;l<s/(r*3)+2;l++){let c=l*r*3+(o%2?r*1.5:0),u=o*a/2;n.beginPath();for(let h=0;h<=6;h++){let d=h*Math.PI/3;n.lineTo(c+Math.cos(d)*r,u+Math.sin(d)*r)}n.stroke()}},[2,2]),t=Qi(256,(n,s)=>{n.fillStyle="#a88470",n.fillRect(0,0,s,s);for(let r=0;r<22;r++){let a=r/22*s;n.fillStyle="rgba(70,40,30,0.55)",n.fillRect(a,0,3,s),n.fillStyle="rgba(240,210,190,0.35)",n.fillRect(a+4,0,2,s)}},[2,1]);return vf={pap:i,hon:e,lea:t}}function Xu(i,e,t,n){let s=m=>[m[0]*t.sx+(t.ox||0),m[1]*t.sy+(t.oy||0),m[2]*t.sz],r=t.k,a=(m,y,_,M)=>Re(m.map(E=>E*r),s(y),_,M),o=(m,y,_,M)=>ot(s(m),s(y),_*r,M*r),l=(m,y,_,M)=>un(m.map(s),y*r,_,M),c=g2();i("otak",pa(n.brain.r,n.brain.cb),e([.86,.64,.66],.5,.3),n.brain.p);let u=s([1.75,-.15,.1]),h=i("jantung",Wn(tt([a([.45,.55,.4],[1.75,-.15,.1],24),a([.35,.4,.34],[1.95,0,-.12],20),o([1.85,.3,0],[1.9,.95,0],.13,.11),o([1.7,.3,.12],[1.5,.85,.15],.1,.09)]),u),e([.62,.07,.1],.3,.8),u),d=[1,-1].map(m=>{let y=s([1.6,.8,m*.6]);return i("paru",Wn(tt([a([1,.6,.42],[1.6,.8,m*.6],24,[0,0,.1]),a([.5,.45,.35],[.9,.6,m*.55],16)]),y),e([.88,.45,.5],.55,.2),y)}),f=n.neck.map(m=>[m[0],m[1]-.14*r,m[2]]);i("paru",tt([un(f.concat([s([2.6,.95,0]),s([2.1,.9,0])]),.09*r,24,8),o([2.1,.9,0],[1.8,.85,.6],.08,.06),o([2.1,.9,0],[1.8,.85,-.6],.08,.06)]),e([.88,.86,.82],.4,.4)),i("hati",tt([a([.62,.55,.36],[1.05,.45,.55],22),a([.42,.38,.28],[.8,.12,.5],18)]),e([.4,.1,.08],.35,.7));let p=s([-.55,.25,-.42]),b=i("rumen",Wn(tt([a([1.6,.62,.72],[-.5,.75,-.42],26),a([1.55,.68,.75],[-.6,-.25,-.42],26)]),p),e([.85,.7,.6],.6,.2,c.pap),p);i("rumen",un(n.neck.concat([s([2.6,.75,0]),s([1.7,.55,-.15]),s([1,.5,-.3])]),.075*r,30,8),e([.9,.55,.5],.4,.5)),i("retikulum",a([.52,.5,.45],[1.15,-.5,-.15],22),e([.9,.75,.7],.55,.25,c.hon)),i("omasum",a([.48,.46,.42],[.72,-.4,.6],22),e([.85,.7,.62],.55,.25,c.lea)),i("abomasum",a([.9,.33,.35],[.05,-.95,.45],22,[0,0,-.25]),e([.88,.5,.48],.4,.6)),i("usus",l(Qm,.13,200,8),e([.94,.68,.64],.45,.6));for(let m of[1,-1])if(n.lobedKidney){let y=[],_=nn(m>0?7:8);for(let M=0;M<9;M++)y.push(a([.14,.11,.11],[-.9+(_()-.5)*.45,1.05+(_()-.5)*.25,m*.42+(_()-.5)*.15],10));i("ginjal",tt(y),e([.5,.14,.1],.35,.7))}else i("ginjal",a([.34,.2,.22],[-.9,1.05,m*.42],16,[0,0,.3]),e([.5,.14,.1],.35,.7));i("kandung",a([.3,.28,.28],[-2.5,-.35,0],18),e([.95,.85,.5],.25,.9));let g=[a([.55,.36,.5],[-1.4,-.95,0],20)];for(let m of n.teats)g.push(o([-1.4+m[0],-1.05,m[1]],[-1.4+m[0],-1.5,m[1]*1.1],.06,.05));return i("ambing",tt(g),e([.96,.78,.74],.5,.3)),{heart:h,lungs:d,pulse:[{mesh:b,rate:m=>1.5+1.5*m,amp:.07}]}}var Qm=[[-.8,-.75,.5],[-1.2,-.95,.75],[-1.6,-.6,.3],[-1.2,-.35,.75],[-1.8,-.1,.4],[-1.4,.2,.75],[-2.1,.3,.45],[-2.5,.6,.15],[-3.1,.95,0]];function Vu(i,e){let t=u=>[u[0]*i.sx+(i.ox||0),u[1]*i.sy+(i.oy||0),u[2]*i.sz],n=[[2.6,.75,0],[1.7,.55,-.15],[1,.5,-.3]].map(t),s=[[.2,.9,-.5],[-1.2,.9,-.45],[-1.6,.1,-.4],[-.8,-.5,-.45],[.4,-.4,-.4]].map(t),r=t([1.15,-.45,-.15]),a=e.concat(n,s,[r,t([.72,-.4,.6]),t([.6,-.8,.45]),t([-.6,-.95,.45])],Qm.map(t)),o=n.slice().reverse(),l=e.slice().reverse(),c=[r].concat(o,l,[e[0],e[0]],e,n,[s[0],t([.5,.2,-.4]),r]);return{main:a,cud:c,n:80}}var zm=[2.2,.65,0],Jm=[-3.15,1.1,0],jm=[[1.85,-.35,.62],[1.85,-.35,-.62],[-2,.05,.68],[-2,.05,-.68]],Wm=[[4.95,.6,0],[4.3,.9,0],[3.4,1,0],[2.7,.85,0]],Km={sx:1,sy:1,sz:1,k:1},Zm=null;function x2(){return Zm||(Zm=hr("#f1ede4",(i,e,t)=>{i.fillStyle="#141210";for(let n=0;n<7;n++){let s=t()*e,r=t()*e,a=22+t()*34;for(let o=0;o<14;o++){let l=t()*Math.PI*2,c=t()*a*.8;i.beginPath(),i.ellipse(s+Math.cos(l)*c,r+Math.sin(l)*c,a*(.4+t()*.5),a*(.3+t()*.4),t()*3,0,Math.PI*2),i.fill();for(let u of[-e,0,e])for(let h of[-e,0,e])(u||h)&&(i.beginPath(),i.ellipse(s+Math.cos(l)*c+u,r+Math.sin(l)*c+h,a*.5,a*.35,0,0,Math.PI*2),i.fill())}}},31,[1.5,1.5],4e3))}var eg={id:"sapi",groundY:-2.45,worldScale:.42,hitR:1.4,hitY:.9,muscleShrink:.86,pivots:{head:zm,tail:Jm,legs:jm},walk:{speed:.7,step:3.4,swing:.32,radius:6,keep:2.6,graze:1.15,tailA:.15,tailF:.9},camTarget:[.9,-.1,0],camYaw:Math.PI,bg:["#3a4a2e","#18210f"],pedR:6.2,dotSize:.2,vitals:i=>({bpm:Math.round(An(48,96,i)),rr:Math.round(An(26,60,i))}),bodyParts(i){ps(i);let e=[];for(let o of[.22,-.22])for(let l of[1,-1])e.push(ot([-1.4+o,-1.3,l*.24],[-1.4+o,-1.62,l*.26],.09,.07));let t=tt([Re([3,1.3,1.15],[0,.5,0],30),Re([1.45,1.4,1.15],[1.7,.4,0]),Re([1.35,1.35,1.18],[-2,.6,0]),Re([2.5,1.2,1.25],[-.1,.05,0]),Re([.9,.5,.7],[1.9,1.55,0]),Re([.35,.3,.3],[-1.7,1.75,.75]),Re([.35,.3,.3],[-1.7,1.75,-.75]),Re([1,.6,.28],[2.75,.2,0]),Re([.62,.45,.58],[-1.4,-.95,0]),...e]),n=[1,-1].map(o=>Re([.38,.12,.22],[3.72,1.45,o*.78],14,[o*.3,0,.25])),s=Wn(tt([ot([2.2,.65,0],[3.6,1.2,0],.95,.62),Re([.7,.6,.55],[3.9,1.3,0]),ot([4,1.2,0],[4.85,.62,0],.5,.36),Re([.34,.32,.42],[4.98,.55,0]),Re([.35,.2,.4],[3.95,1.85,0]),...n]),zm),r=Wn(tt([un([[-3.15,1.1,0],[-3.35,.6,0],[-3.4,-.4,0],[-3.35,-1.3,0]],.08,24,6),Re([.14,.38,.14],[-3.35,-1.6,0],10)]),Jm),a=jm.map((o,l)=>l<2?tt([ot([0,0,0],[.08,-1.05,0],.45,.24),ot([.08,-1.05,0],[.05,-1.95,0],.17,.15),Re([.19,.17,.19],[.06,-1.88,0],10)]):tt([Re([.78,1.15,.58],[.05,-.45,0]),ot([0,-1,0],[-.35,-1.6,0],.3,.18),ot([-.35,-1.6,0],[-.25,-2.35,0],.16,.15),Re([.19,.17,.19],[-.25,-2.27,0],10)]));return ps(1),{body:t,head:s,tail:r,legs:a}},skinMats(){return ms(x2(),[.45,.45,.45],.95)},face(i,e){let t=Bs(i.head,e,{p:[3.98,1.42,.47],r:.17,scale:[1,1,.8],iris:[.2,.12,.07],pupil:"oval",side:!0}),n=new at({color:jn(.55,.42,.42),roughness:.35,transparent:!0}),s=new at({color:jn(.85,.8,.68),roughness:.45,transparent:!0}),r=new at({color:jn(.12,.1,.09),roughness:.6,transparent:!0}),a=new ke(Re([.12,.26,.36],[5.24-e[0],.55-e[1],0],14),n);i.head.add(a);for(let o of[1,-1])i.head.add(new ke(tt([ot([3.95-e[0],1.9-e[1],o*.32],[4.05-e[0],2.15-e[1],o*.62],.1,.06),da(.06,.2,[4.08-e[0],2.25-e[1],o*.68],[o*-.6,0,-.3],8)]),s));return i.legs.forEach((o,l)=>{let c=l<2?-1.95:-2.35,u=l<2?.05:-.25;for(let h of[.08,-.08]){let d=new ke(new dn(.1,.13,.17,10),r);d.position.set(u+.03,c-.07,h),o.add(d)}}),t.concat([n,s,r])},bones(){return fa({skull:[[[.62,.52,.48],[3.9,1.3,0],18]],jaw:[[[4,1.25,0],[4.95,.65,0],.36,.24],[[3.75,.85,0],[4.85,.42,0],.15,.12]],spine:[[3.55,1.1,0],[2.6,.95,0],[1.9,1.45,0],[0,1.45,0],[-2,1.45,0],[-3.1,1.05,0]],nV:30,vr:.16,tail:[[-3.15,1.05,0],[-3.35,.55,0],[-3.4,-.4,0],[-3.35,-1.3,0]],nT:18,tr:.1,ribs:{n:13,x0:2.3,dx:.21,cy:.3,hh:1.05,hw:1,t:.06},sternum:[[2.3,-.75,0],[.4,-.8,0],.09],scap:[[.15,.75,.35],[2.1,.95,.6]],pelvis:[[.4,.6,.85],[-2,1.1,0],[0,0,.25]],front:[[[1.85,-.35,.62],[1.95,-1.4,.6],[1.9,-2,.58],[1.95,-2.4,.58]]],hind:[[[-2,.6,.68],[-1.75,-.55,.66],[-2.35,-1.6,.62],[-2.25,-2.4,.6]]],br:[.16,.13,.1,.08]})},organs(i,e){return Xu(i,e,Km,{brain:{r:[.32,.25,.26],cb:[[.13,.11,.13],[-.28,-.08,0]],p:[3.85,1.42,0]},neck:Wm,lobedKidney:!0,teats:[[.22,.24],[.22,-.24],[-.22,.24],[-.22,-.24]]})},food:Vu(Km,Wm)};var tg=[1.75,.55,0],ng=[-2.35,.85,0],ig=[[1.4,-.25,.48],[1.4,-.25,-.48],[-1.5,0,.52],[-1.5,0,-.52]],sg=[[3.66,1.18,0],[3.2,1.45,0],[2.6,1.3,0],[2.1,.85,0]],rg={sx:.72,sy:.7,sz:.73,oy:.04,k:.72},ag=null,og=null,_f=()=>ag||(ag=hr("#ece3d2",(i,e,t)=>{for(let n=0;n<4;n++)i.fillStyle="rgba(150,110,70,0.25)",i.beginPath(),i.ellipse(t()*e,t()*e,30+t()*30,20+t()*20,t()*3,0,Math.PI*2),i.fill()},41,[2,2],6500)),b2=()=>og||(og=hr("#4a3020",(i,e,t)=>{for(let n=0;n<6;n++)i.fillStyle="rgba(20,12,8,0.4)",i.beginPath(),i.ellipse(t()*e,t()*e,40,25,t()*3,0,Math.PI*2),i.fill()},42,[2,2],6e3)),lg={id:"kambing",groundY:-2,worldScale:.24,hitR:.75,hitY:.5,pivots:{head:tg,tail:ng,legs:ig},walk:{speed:.8,step:4.6,swing:.42,radius:5,keep:2,graze:1,tailA:.35,tailF:3},camTarget:[.4,.3,0],camYaw:Math.PI,bg:["#40382a","#1c1810"],pedR:5.2,dotSize:.15,vitals:i=>({bpm:Math.round(An(70,120,i)),rr:Math.round(An(15,40,i))}),bodyParts(i){ps(i);let e=tt([Re([2.2,1,.82],[0,.35,0],28),Re([1.1,1.05,.85],[1.25,.25,0]),Re([1,1,.86],[-1.45,.4,0]),Re([1.8,.9,.92],[0,.05,0]),Re([.42,.32,.4],[-1.05,-.6,0]),ot([-1.05,-.8,.17],[-1,-1.05,.2],.07,.05),ot([-1.05,-.8,-.17],[-1,-1.05,-.2],.07,.05)]),t=[1,-1].map(a=>Re([.13,.58,.07],[2.88,1.32,a*.5],16,[a*.35,0,.2])),n=Wn(tt([ot([1.75,.55,0],[2.65,1.5,0],.62,.4),Re([.5,.45,.4],[2.95,1.75,0]),ot([3.05,1.7,0],[3.62,1.2,0],.32,.22),Re([.25,.18,.24],[3.25,1.62,0]),Re([.2,.18,.22],[3.68,1.12,0]),da(.13,.55,[3.42,.72,0],[0,0,Math.PI]),...t]),tg),s=Wn(tt([un([[-2.35,.85,0],[-2.6,1.1,0],[-2.7,1.35,0]],.09,12,6),Re([.1,.16,.1],[-2.72,1.42,0],8)]),ng),r=ig.map((a,o)=>o<2?tt([ot([0,0,0],[.05,-.75,0],.3,.15),ot([.05,-.75,0],[.05,-1.6,0],.11,.09),Re([.12,.11,.12],[.05,-1.55,0],10)]):tt([Re([.5,.75,.4],[.02,-.35,0]),ot([0,-.7,0],[-.3,-1.2,0],.2,.12),ot([-.3,-1.2,0],[-.2,-1.85,0],.1,.09),Re([.12,.11,.12],[-.2,-1.8,0],10)]));return ps(1),{body:e,head:n,tail:s,legs:r}},skinMats(){return{body:ms(_f(),[1,.95,.85],.95),head:ms(b2(),[.9,.7,.5],.9),tail:ms(_f()),legs:ms(_f())}},face(i,e){let t=Bs(i.head,e,{p:[3.04,1.86,.35],r:.13,scale:[1,1,.8],iris:[.85,.62,.15],pupil:"bar",side:!0}),n=new at({color:jn(.32,.27,.22),roughness:.5,transparent:!0}),s=new at({color:jn(.15,.12,.1),roughness:.6,transparent:!0}),r=new at({color:jn(.2,.15,.13),roughness:.4,transparent:!0});for(let a of[1,-1])i.head.add(new ke(tt([un([[2.85-e[0],2.05-e[1],a*.15],[2.65-e[0],2.5-e[1],a*.22],[2.3-e[0],2.62-e[1],a*.3],[2.1-e[0],2.45-e[1],a*.33]],.07,16,8),Re([.075,.075,.075],[2.85-e[0],2.05-e[1],a*.15],8)]),n));return i.head.add(new ke(Re([.06,.12,.17],[3.86-e[0],1.13-e[1],0],10),r)),i.legs.forEach((a,o)=>{let l=o<2?-1.6:-1.85,c=o<2?.05:-.2;for(let u of[.05,-.05]){let h=new ke(new dn(.06,.08,.15,8),s);h.position.set(c+.02,l-.08,u),a.add(h)}}),t.concat([n,s,r])},bones(){return fa({skull:[[[.45,.4,.35],[2.95,1.75,0],18]],jaw:[[[3,1.65,0],[3.62,1.15,0],.24,.15],[[2.85,1.35,0],[3.55,1,0],.1,.08]],spine:[[2.8,1.6,0],[2.2,1.1,0],[1.5,1.15,0],[0,1.15,0],[-1.5,1.15,0],[-2.35,.85,0]],nV:28,vr:.11,tail:[[-2.35,.85,0],[-2.6,1.1,0],[-2.7,1.35,0]],nT:6,tr:.07,ribs:{n:13,x0:1.75,dx:.16,cy:.25,hh:.82,hw:.78,t:.045},sternum:[[1.75,-.55,0],[.2,-.6,0],.06],scap:[[.1,.55,.25],[1.55,.75,.45]],pelvis:[[.3,.45,.6],[-1.5,.85,0],[0,0,.25]],front:[[[1.4,-.25,.48],[1.5,-.95,.47],[1.45,-1.5,.46],[1.5,-1.95,.46]]],hind:[[[-1.5,.45,.52],[-1.3,-.4,.5],[-1.8,-1.25,.48],[-1.7,-1.95,.47]]],br:[.11,.09,.07,.055]})},organs(i,e){return Xu(i,e,rg,{brain:{r:[.26,.2,.21],cb:[[.1,.09,.1],[-.22,-.06,0]],p:[2.92,1.82,0]},neck:sg,lobedKidney:!1,teats:[[0,.24],[0,-.24]]})},food:Vu(rg,sg)};var cg={mas:{name:"Ikan mas",sci:"Cyprinus carpio",family:"Cyprinidae",fact:"Ikan mas sudah dibudidayakan di Indonesia sejak lama di kolam dan sawah (minapadi). Ikan mas tidak punya gigi di mulut, tetapi punya gigi di tenggorokan (gigi faring) untuk menggerus makanan.",P:{id:"mas",H:1,W:.6,pm:.55,shape:.75,belly:.95,tailMin:.22,blunt:.35,arch:1,back:"#6e5a1c",side:"#d9a23a",belly2:"#f3e2a8",fin:"#c9883a",scale:22,scaleShine:!0,caudal:"forked",dorsal:[[.42,.72,.55,.3]],anal:[[.3,.38,.5]],barbels:[[.05,-.02,.12,[.1,-.25,.15]],[.25,-.08,.2,[0,-.3,.1]]],barbelCol:[.55,.4,.2],twoChamber:!0,iris:[.85,.68,.2],eyeR:.17,neutral:.5,seed:3},world:{count:4,school:!0,depth:.5,scale:.09,speed:.6},notes:{kulit:"Sisik ikan mas besar dan bertumpuk seperti genteng. Ikan mas punya dua pasang sungut pendek di sekitar mulut.",rangka:"Ikan mas punya banyak duri halus (tulang kecil di antara otot), itulah sebabnya makan ikan mas harus hati-hati.",gelembung:"Gelembung renang ikan mas terdiri dari dua ruang dan tersambung ke saluran pencernaan, jadi ikan mas bisa mengisi atau membuang udara lewat mulut."}},nila:{name:"Ikan nila",sci:"Oreochromis niloticus",family:"Cichlidae",fact:"Nila berasal dari Afrika, termasuk Sungai Nil, dan kini menjadi salah satu ikan budidaya paling populer di Indonesia. Induk betina mengerami telur dan menjaga anaknya di dalam mulut.",P:{id:"nila",H:1.05,W:.48,pm:.55,shape:.8,belly:.9,tailMin:.25,blunt:.32,arch:1.2,back:"#3d4a52",side:"#8a989e",belly2:"#dde3e4",fin:"#a85a55",scale:20,bars:8,caudal:"truncate",dorsal:[[.3,.78,.6,.15]],anal:[[.25,.4,.55]],iris:[.75,.6,.25],eyeR:.16,neutral:.5,seed:4},world:{count:4,school:!0,depth:.55,scale:.08,speed:.65},notes:{kulit:"Tubuh nila bergaris-garis tegak samar, dan sirip ekornya bergaris. Sirip punggungnya panjang dengan bagian depan berupa duri keras.",gelembung:"Gelembung renang nila tertutup (tidak tersambung ke saluran pencernaan). Gasnya diatur lewat pembuluh darah khusus."}},lele:{name:"Ikan lele",sci:"Clarias sp.",family:"Clariidae",fact:"Lele hidup di dasar perairan dan aktif mencari makan di malam hari dengan mengandalkan sungutnya. Lele bisa bertahan di air yang miskin oksigen karena bisa menghirup udara langsung dari permukaan.",P:{id:"lele",H:.6,W:.62,headW:.5,pm:.75,shape:.55,belly:.85,tailMin:.35,blunt:.65,arch:.3,back:"#2a2724",side:"#4a4540",belly2:"#cfc4b2",fin:"#3a3530",scale:0,caudal:"round",cauH:.75,dorsal:[[.1,.66,.32,.05]],anal:[[.08,.5,.3,.05]],pecT:.78,pecL:.7,finLow:.6,barbels:[[.02,.02,.15,[.3,.05,1.3],.03],[.05,-.1,.1,[.1,-.3,.9]],[.15,-.15,.18,[0,-.4,.8]],[.2,-.12,.08,[-.1,-.45,.5]]],labirin:"pohon",iris:[.3,.24,.18],eyeR:.1,eyeY:.45,eyeT:.89,neutral:.42,seed:5},world:{count:3,school:!1,depth:.05,bedOff:.22,scale:.1,speed:.45,amp:.25,freq:5},notes:{kulit:"Lele tidak bersisik. Kulitnya licin karena berlendir. Lele punya empat pasang sungut peraba yang sangat peka.",rangka:"Sirip dada lele punya duri keras (patil) yang bisa melukai tangan. Hati-hati saat memegang lele.",labirin:"Pada lele organ ini disebut organ arborescent, berbentuk bercabang seperti pohon, terletak di atas insang."},extraLayer:{id:"labirin",name:"Organ arborescent",sci:"Alat napas tambahan",ui:"#e09098",short:"Alat untuk menghirup udara.",what:"Jaringan bercabang seperti pohon kecil di rongga di atas insang, kaya pembuluh darah.",fn:"Menyerap oksigen dari udara yang dihirup lele di permukaan air, sehingga lele bertahan di air yang kekurangan oksigen.",fact:"Karena alat ini, lele bisa hidup di kolam padat dan berlumpur, dan bisa bertahan lama di luar air selama tubuhnya tetap lembap."}},gurami:{name:"Ikan gurami",sci:"Osphronemus goramy",family:"Osphronemidae",fact:"Gurami adalah ikan asli Indonesia dan Asia Tenggara. Gurami jantan membangun sarang dari serat tanaman untuk telur-telurnya. Pertumbuhannya lambat, jadi harganya relatif mahal.",P:{id:"gurami",H:1.35,W:.42,pm:.5,shape:.85,belly:1.05,tailMin:.28,blunt:.3,arch:1.4,mouthUp:.4,back:"#5d564a",side:"#b4a48c",belly2:"#e8dfcc",fin:"#7d7060",scale:14,caudal:"round",cauH:1.1,dorsal:[[.28,.55,.55,.2]],anal:[[.1,.58,.6,.1]],thread:!0,pelT:.6,labirin:"labirin",iris:[.8,.25,.15],eyeR:.15,neutral:.5,seed:6},world:{count:3,school:!0,depth:.6,scale:.11,speed:.45},notes:{kulit:"Tubuh gurami pipih dan tinggi. Sirip perutnya memanjang seperti benang dan dipakai sebagai alat peraba.",labirin:"Gurami punya organ labirin, lipatan-lipatan tulang tipis berlapis selaput kaya pembuluh darah, untuk menyerap oksigen dari udara."},extraLayer:{id:"labirin",name:"Organ labirin",sci:"Alat napas tambahan",ui:"#e09098",short:"Alat untuk menghirup udara.",what:"Rongga di atas insang berisi lipatan berliku seperti labirin, dilapisi selaput tipis yang kaya pembuluh darah.",fn:"Menyerap oksigen dari udara yang dihirup di permukaan air.",fact:"Gurami dewasa perlu naik ke permukaan untuk mengambil udara. Kalau tidak bisa mencapai permukaan, gurami bisa lemas walaupun airnya cukup oksigen."}},arwana:{name:"Arwana",sci:"Scleropages formosus",family:"Osteoglossidae",fact:"Arwana Asia hidup di sungai dan rawa Kalimantan dan Sumatra. Spesies ini dilindungi dan terdaftar di CITES Apendiks I, sehingga perdagangannya hanya boleh dari hasil penangkaran resmi. Jantan mengerami telur di dalam mulutnya.",P:{id:"arwana",H:.72,W:.4,pm:.62,shape:.7,belly:1,tailMin:.3,blunt:.3,arch:.3,mouthUp:.6,back:"#3e5248",side:"#d8c48a",belly2:"#f3e7c6",fin:"#b84a2e",scale:44,scaleEdge:"rgba(170,40,25,0.75)",scaleShine:!0,metal:.2,caudal:"round",dorsal:[[.1,.3,.5,.1]],anal:[[.08,.33,.55,.1]],pecT:.76,pecL:1.3,barbels:[[.1,-.25,.06,[.45,.08,.03],.03]],barbelCol:[.6,.5,.3],iris:[.85,.7,.3],eyeR:.2,eyeY:.4,neutral:.52,seed:7},world:{count:1,school:!1,depth:.85,scale:.14,speed:.7},notes:{kulit:"Sisik arwana sangat besar dan mengilap. Sepasang sungut di dagu membantu merasakan mangsa di permukaan air.",otak:"Mulut arwana menghadap ke atas, cocok untuk menyambar serangga dan ikan kecil di permukaan air. Arwana bahkan bisa melompat keluar air untuk menangkap mangsa."}}},y2=[{id:"kulit",name:"Kulit dan sisik",sci:"Integumen",ui:"#d8c48a",short:"Pelindung tubuh, gurat sisi.",what:"Kulit ikan dilapisi lendir dan, pada kebanyakan ikan, sisik yang bertumpuk seperti genteng. Di sepanjang sisi tubuh ada garis titik-titik yang disebut gurat sisi.",fn:"Lendir dan sisik melindungi dari kuman dan luka. Gurat sisi adalah indra yang merasakan getaran dan arus air, sehingga ikan bisa merasakan gerakan di sekitarnya, bahkan di air keruh.",fact:"Sisik bertambah besar seiring umur dan membentuk lingkaran pertumbuhan, mirip cincin tahun pada kayu. Peneliti bisa memperkirakan umur ikan dari lingkaran ini."},{id:"otot",name:"Otot",sci:"Miomer",ui:"#e9b9a6",short:"Otot berlapis berbentuk zig-zag.",what:"Otot ikan tersusun dalam segmen-segmen berbentuk zig-zag yang disebut miomer. Itulah sebabnya daging ikan matang mudah terlepas berlapis-lapis.",fn:"Miomer di kedua sisi tubuh berkontraksi bergantian, membuat tubuh dan ekor meliuk sehingga ikan terdorong maju.",fact:"Daging ikan kebanyakan berwarna putih karena didominasi otot untuk gerakan cepat yang singkat. Ikan yang berenang jauh terus-menerus punya lebih banyak otot merah."},{id:"rangka",name:"Rangka",sci:"Sistem rangka",ui:"#eae0c4",short:"Tulang belakang, rusuk, dan jari-jari sirip.",what:"Rangka ikan bertulang sejati terdiri dari tengkorak, tulang belakang yang panjang, tulang rusuk, dan jari-jari yang menegakkan sirip.",fn:"Menopang tubuh, tempat melekatnya otot, dan menegakkan sirip untuk mengarahkan gerak.",fact:"Sirip punya tugas masing-masing: sirip ekor mendorong, sirip punggung dan dubur menjaga tubuh tetap tegak, sirip dada dan perut untuk mengerem dan berbelok."},{id:"otak",name:"Otak dan mata",sci:"Sistem saraf",ui:"#e8a8b0",short:"Pusat kendali dan indra.",what:"Otak ikan kecil dibanding tubuhnya. Bagian yang mengolah penglihatan (lobus optik) relatif besar. Mata ikan berada di sisi kepala.",fn:"Mengolah informasi dari mata, gurat sisi, penciuman, dan sungut, lalu mengatur gerak.",fact:"Ikan tidak punya kelopak mata. Matanya selalu dibasahi air."},{id:"insang",name:"Insang",sci:"Sistem pernapasan",ui:"#e05060",short:"Penyerap oksigen dari air.",what:"Di bawah tutup insang (operkulum) ada empat lengkung insang di tiap sisi. Tiap lengkung punya ratusan filamen merah, dan tiap filamen punya lipatan tipis (lamela) yang kaya pembuluh darah.",fn:"Air masuk lewat mulut, mengalir melewati filamen, lalu keluar lewat celah tutup insang. Oksigen dari air masuk ke darah, karbon dioksida keluar ke air.",fact:'Di lamela, darah mengalir berlawanan arah dengan air (arus berlawanan). Cara ini membuat ikan bisa mengambil sebagian besar oksigen dari air. Coba matikan "Aliran berlawanan arah" untuk membandingkan.'},{id:"jantung",name:"Jantung",sci:"Sistem peredaran darah",ui:"#e0505e",short:"Pompa darah dua ruang.",what:"Jantung ikan terletak di bawah insang dan hanya punya dua ruang utama: satu serambi dan satu bilik.",fn:"Memompa darah ke insang untuk mengambil oksigen. Dari insang darah langsung mengalir ke seluruh tubuh, lalu kembali ke jantung. Darah hanya sekali melewati jantung dalam satu putaran (peredaran darah tunggal).",fact:"Detak jantung ikan sangat dipengaruhi suhu air. Di air hangat jantung berdetak lebih cepat daripada di air dingin."},{id:"gelembung",name:"Gelembung renang",sci:"Vesica natatoria",ui:"#c8d0d8",short:"Pelampung yang bisa diatur.",what:"Kantong berisi gas di bagian atas rongga tubuh, di bawah tulang belakang.",fn:"Mengatur daya apung. Dengan menambah atau mengurangi gas, ikan bisa melayang di kedalaman tertentu tanpa banyak mengeluarkan tenaga.",fact:"Coba slider Gelembung renang: kalau gasnya kurang, ikan tenggelam. Kalau terlalu banyak, ikan naik. Cari titik pas supaya ikan melayang."},{id:"hati",name:"Hati",sci:"Sistem pencernaan",ui:"#b0463c",short:"Penyimpan cadangan makanan.",what:"Hati berada di bagian depan rongga perut, di belakang jantung.",fn:"Membuat empedu untuk mencerna lemak, menyimpan cadangan energi, dan menetralkan zat berbahaya.",fact:"Minyak hati ikan, misalnya dari ikan kod, kaya vitamin A dan D."},{id:"usus",name:"Saluran pencernaan",sci:"Lambung dan usus",ui:"#f0b8a8",short:"Mencerna dan menyerap makanan.",what:"Makanan masuk lewat mulut, kerongkongan, lambung (pada sebagian ikan), lalu usus yang berkelok sampai ke anus di depan sirip dubur.",fn:"Mencerna makanan dan menyerap nutrisi ke dalam darah.",fact:"Panjang usus sesuai makanannya: ikan pemakan tumbuhan punya usus jauh lebih panjang daripada ikan pemakan daging."},{id:"ginjal",name:"Ginjal",sci:"Sistem ekskresi",ui:"#a04a3a",short:"Pembuang kelebihan air.",what:"Ginjal ikan berupa organ memanjang berwarna merah gelap, tepat di bawah tulang belakang.",fn:"Menyaring darah dan membuang sisa metabolisme.",fact:"Air tawar terus meresap masuk ke tubuh ikan air tawar, sehingga ginjalnya membuang banyak urine yang sangat encer."}],M2=[["Organ apa yang dipakai ikan untuk mengambil oksigen dari air?",["Insang","Paru-paru","Gelembung renang","Hati"],"Insang menyerap oksigen terlarut dari air yang mengalir melewati filamennya."],["Apa fungsi gelembung renang?",["Mengatur daya apung","Mencerna makanan","Memompa darah","Menyaring urine"],"Dengan mengatur isi gas, ikan bisa melayang di kedalaman tertentu tanpa banyak tenaga."],["Berapa ruang utama jantung ikan?",["Dua","Tiga","Empat","Satu"],"Satu serambi dan satu bilik. Darah mengalir dalam peredaran tunggal."],["Gurat sisi pada ikan berfungsi untuk ...",["Merasakan getaran dan arus air","Bernapas","Menyimpan lemak","Menarik pasangan dengan warna"],"Gurat sisi adalah indra yang membuat ikan peka terhadap gerakan di sekitarnya."],["Mengapa arus berlawanan arah di insang menguntungkan?",["Oksigen lebih banyak terserap ke darah","Air lebih cepat keluar","Insang lebih ringan","Ikan tidak perlu membuka mulut"],"Karena darah selalu bertemu air yang lebih kaya oksigen, perpindahan oksigen terjadi di sepanjang lamela."]],v2={mas:["Ikan mas tidak punya gigi di mulut. Di mana gigi pengunyahnya?",["Di tenggorokan (gigi faring)","Di lidah","Di sirip","Tidak punya sama sekali"],"Gigi faring di tenggorokan menggerus makanan sebelum masuk ke saluran pencernaan."],nila:["Apa yang dilakukan induk betina nila dengan telurnya?",["Mengerami di dalam mulut","Menempelkan di daun","Mengubur di pasir lalu pergi","Menitipkan pada ikan lain"],"Nila termasuk pengeram mulut. Anak-anaknya juga berlindung di mulut induk saat ada bahaya."],lele:["Mengapa lele bisa hidup di air yang miskin oksigen?",["Punya organ arborescent untuk menghirup udara","Tidak butuh oksigen","Insangnya sangat besar","Menyimpan oksigen di sisik"],"Organ bercabang di atas insang menyerap oksigen dari udara yang dihirup di permukaan."],gurami:["Sirip perut gurami yang panjang seperti benang berfungsi sebagai ...",["Alat peraba","Alat bernapas","Penyimpan telur","Pelampung"],"Gurami memakai sirip perutnya untuk meraba sekitar, terutama di air yang keruh."],arwana:["Mengapa arwana Asia tidak boleh ditangkap dan diperdagangkan sembarangan?",["Karena dilindungi dan terdaftar di CITES Apendiks I","Karena beracun","Karena hanya hidup di laut","Karena tidak bisa dimakan"],"Arwana Asia terancam punah di alam. Perdagangan hanya boleh dari penangkaran resmi."]},ug=Object.keys(cg);function hg(i,e){let t=cg[i],n=y2.map(r=>t.notes[r.id]?Object.assign({},r,{fact:r.fact+" "+t.notes[r.id]}):r);t.extraLayer&&n.splice(5,0,Object.assign({},t.extraLayer,t.notes.labirin?{fact:t.extraLayer.fact+" "+t.notes.labirin}:{}));let s=M2.concat([v2[i]]).map((r,a)=>({id:i+"q"+a,sp:i,q:r[0],o:r[1],a:0,e:r[2]}));return{id:i,name:t.name,layers:n,quiz:s,P:t.P,world:t.world,specimen:{id:i,kind:"fish",name:t.name,short:t.name.toLowerCase(),sci:t.sci,family:t.family,x:-34,z:26,top:0,mkOff:0,promptY:-.5,reach:4,tagNear:0,needSwim:!0,fact:t.fact,hint:"Geser Kedalaman untuk mengupas lapisan. Geser Gelembung renang sampai ikan melayang diam. Nyalakan atau matikan aliran berlawanan arah untuk melihat cara insang bekerja (titik biru air, titik merah darah)."}}}var Dn=7,Nt=Dn/2;function pg(i,e){let t=Math.log(.5)/Math.log(i.pm),n=Math.pow(Math.max(0,Math.sin(Math.PI*Math.pow(e,t))),i.shape);return n=Math.max(n,i.tailMin*(1-Ut(0,.3,e))),e>.86&&(n=Math.max(n,Math.min(n+.3,i.blunt*Math.sqrt(Math.max(0,(1-e)/.14))))),n}var bn=(i,e)=>i.arch*Math.sin(Math.PI*e)*i.H*.12+(i.mouthUp||0)*Ut(.82,1,e)*.18,fi=(i,e)=>i.H*pg(i,e),gs=(i,e)=>i.W*pg(i,e)*(1+(i.headW||0)*Ut(.55,.95,e)),Yu=i=>(i+Nt)/Dn,tl=(i,e)=>{let t=Yu(e);return bn(i,t)+fi(i,t)},ma=(i,e)=>{let t=Yu(e);return bn(i,t)-fi(i,t)*i.belly};function _2(i,e=1,t=48,n=24){let s=[],r=[],a=[],o=[];for(let g=0;g<=t;g++){let m=.012+.983*g/t,y=-Nt+m*Dn,_=bn(i,m),M=fi(i,m)*e,E=Math.max(.01,gs(i,m)*e),S=(fi(i,Math.min(1,m+.004))-fi(i,Math.max(0,m-.004)))/(2*.004*Dn)*e;for(let x=0;x<=n;x++){let v=x/n*vt,F=Math.sin(v),w=Math.cos(v),H=F>0?M:M*i.belly;s.push(y,_+H*F,E*w);let q=new k(-S*(F>0?1:i.belly)*Math.abs(F)-S*.6*Math.abs(w),F/Math.max(.01,H),w/E).normalize();r.push(q.x,q.y,q.z),a.push(m,x/n)}}for(let g=0;g<t;g++)for(let m=0;m<n;m++){let y=g*(n+1)+m,_=y+n+1;o.push(y,_,y+1,_,_+1,y+1)}let h=new bt;h.setAttribute("position",new lt(s,3)),h.setAttribute("normal",new lt(r,3)),h.setAttribute("uv",new lt(a,2)),h.setIndex(o);let d=.012,f=.995,p=Re([.05,fi(i,d)*e,gs(i,d)*e],[-Nt+d*Dn,bn(i,d),0],12),b=Re([.08,Math.max(.03,fi(i,f)*e),Math.max(.03,gs(i,f)*e)],[-Nt+f*Dn,bn(i,f),0],12);return tt([h,p,b])}function Sf(i){return new oo(new rs(i.map(e=>new de(e[0],e[1]))))}function dg(i,e,t,n,s,r=.5){let a=[];for(let f=8;f>=0;f--){let p=-Nt+(e+(t-e)*f/8)*Dn;a.push([p,s?tl(i,p)-.06:ma(i,p)+.06])}let l=-Nt+e*Dn,c=-Nt+t*Dn,u=s?1:-1,h=s?tl(i,l):ma(i,l),d=s?tl(i,c):ma(i,c);return a.push([l-r*n,h+u*n*.95]),a.push([(l+c)/2-r*n*.6,(h+d)/2+u*n*.85]),a.push([c-.1,d+u*n*.35]),Sf(s?a.reverse():a)}function S2(i){let e=-Nt+.1,t=i.cauH||1,n=bn(i,.02),s=[];if(i.caudal==="forked")s.push([e,.22*t],[e-1.35*t,1*t],[e-1.1*t,.75*t],[e-.8*t,.05],[e-.8*t,-.05],[e-1.1*t,-.75*t],[e-1.35*t,-1*t],[e,-.22*t]);else if(i.caudal==="truncate")s.push([e,.22*t],[e-1.1*t,.78*t],[e-1.2*t,0],[e-1.1*t,-.78*t],[e,-.22*t]);else{s.push([e,.25*t]);for(let a=0;a<=12;a++){let o=Math.PI*(.6+.8*a/12);s.push([e-.25*t+Math.cos(o)*1*t,Math.sin(o)*.95*t])}s.push([e,-.25*t])}let r=Sf(s);return r.translate(0,n,0),r}function fg(i,e,t,n,s,r,a){let o=Sf([[0,.06],[-t*.55,n*.6],[-t,n*.1],[-t*.8,-n*.4],[-.05,-.08]]);o.rotateX(a*(Math.PI/2-s)),o.rotateY(a*r);let l=-Nt+e*Dn;return o.translate(l,bn(i,e)-fi(i,e)*(i.finLow||.45),a*gs(i,e)*.8),o}function T2(i){let e=[S2(i)];for(let t of i.dorsal||[])e.push(dg(i,t[0],t[1],t[2],!0,t[3]??.5));for(let t of i.anal||[])e.push(dg(i,t[0],t[1],t[2],!1,t[3]??.4));for(let t of[1,-1])if(e.push(fg(i,i.pecT||.74,i.pecL||.9,.42,.35,.5,t)),e.push(fg(i,i.pelT||.5,i.pelL||.6,.3,.15,.25,t)),i.thread){let n=-Nt+(i.pelT||.5)*Dn,s=ma(i,n);e.push(un([[n,s,t*.12],[n-.8,s-.5,t*.25],[n-2,s-.6,t*.3],[n-3.2,s-.3,t*.3]],.025,24,4))}return e}function E2(i){return Qi(128,(e,t)=>{e.fillStyle=i,e.fillRect(0,0,t,t);for(let n=0;n<10;n++)e.fillStyle="rgba(0,0,0,0.28)",e.fillRect(n*t/10,0,2,t),e.fillStyle="rgba(255,255,255,0.15)",e.fillRect(n*t/10+4,0,1,t)},[5,5])}function mg(i){let e=[],t=Nt-.05,n=bn(i,1)-.05;for(let s of i.barbels||[])for(let r of[1,-1]){let a=[t-s[0],n+s[1],r*s[2]],o=s[3];e.push(un([a,[a[0]+o[0]*.5,a[1]+o[1]*.5,a[2]+r*o[2]*.5],[a[0]+o[0],a[1]+o[1],a[2]+r*o[2]]],s[4]||.025,10,4))}return e}function A2(i){return Qi(512,(e,t)=>{let n=new fe(i.back),s=new fe(i.side),r=new fe(i.belly2),a=new fe;for(let l=0;l<t;l++){let c=l/t,u=Math.sin(vt*c);a.copy(s).lerp(u>0?n:r,Math.pow(Math.abs(u),.8)),e.fillStyle="#"+a.getHexString(),e.fillRect(0,l,t,1)}let o=nn(i.seed||3);if(i.bars)for(let l=0;l<i.bars;l++)e.fillStyle="rgba(20,25,30,0.16)",e.fillRect(t*(.28+l*.065),0,t*.03,t);if(i.scale){let l=i.scale;e.lineWidth=l>30?3:1.4;for(let c=0;c<t/(l*.6)+1;c++)for(let u=0;u<t/l+1;u++){let h=u*l+c%2*l/2,d=c*l*.6;e.strokeStyle=i.scaleEdge||"rgba(0,0,0,0.22)",e.beginPath(),e.arc(h,d,l*.55,-Math.PI*.5,Math.PI*.5),e.stroke(),i.scaleShine&&(e.fillStyle="rgba(255,255,255,0.08)",e.beginPath(),e.arc(h-l*.15,d,l*.3,0,vt),e.fill())}}else for(let l=0;l<3e3;l++)e.fillStyle=o()<.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.04)",e.fillRect(o()*t,o()*t,2,2);for(let l of[0,.5,1]){e.strokeStyle="rgba(20,20,20,0.45)",e.lineWidth=2,e.setLineDash([5,3]),e.beginPath();for(let u=.12;u<=.84;u+=.02)e.lineTo(u*t,l*t+Math.sin(u*5)*3-(l===.5?10:-10)*.4);e.stroke(),e.setLineDash([]),e.strokeStyle="rgba(25,15,10,0.55)",e.lineWidth=3,e.beginPath();let c=(i.opT||.8)*t;for(let u=-.14;u<=.14;u+=.01)e.lineTo(c-Math.cos(u*11)*12,(l+u)*t);e.stroke()}},[1,1])}function R2(){return Qi(256,(i,e)=>{i.fillStyle="#e9b9a6",i.fillRect(0,0,e,e),i.strokeStyle="rgba(170,90,75,0.55)",i.lineWidth=2;for(let t=-2;t<26;t++){i.beginPath();for(let n=0;n<=e;n+=4){let s=n/e;i.lineTo(t*11+Math.abs(Math.sin(s*vt*2))*14,n)}i.stroke()}},[1,1])}function Tf(i){let e=i.H,t=i.W,n=bn(i,.5),s=i.iris||[.85,.7,.25],r=i.eyeT||.87,a=-Nt+r*Dn,o=c=>n+c*e,l=c=>c*t;return{id:i.id,kind:"fish",groundY:-2.3,noPed:!0,worldScale:1,hitR:.5,hitY:0,pivots:{head:[0,0,0],tail:[0,0,0],legs:[]},camTarget:[0,0,0],camYaw:0,bg:["#1f5774","#0a1f2e"],dotSize:.12,muscleShrink:.86,vitals:c=>({bpm:Math.round(An(40,90,c)),rr:Math.round(An(40,110,c))}),bodyParts(c){let u=_2(i,c),h=Re([.1,.07*c,.14*c],[Nt-.02,bn(i,1)-.06,0],10),d=c===1?tt(T2(i)):Re([.05,.05,.05],[0,0,0],6);return{body:u,head:h,tail:d,legs:[]}},muscleMat(){return new Zt({map:R2(),roughness:.45,clearcoat:.5,clearcoatRoughness:.3})},skinMats(){let c=new Zt({map:A2(i),roughness:i.scale?.42:.5,metalness:i.metal??.05,clearcoat:.3,clearcoatRoughness:.35,envMapIntensity:.55}),u=new at({map:E2(i.fin),side:Jt,roughness:.55,transparent:!0,opacity:.85});return{body:c,head:c,tail:u,legs:c}},face(c,u){let h=bn(i,r)+fi(i,r)*(i.eyeY??.3),d=gs(i,r)*.86,f=Bs(c.head,u,{p:[a,h,d],r:i.eyeR||.17,scale:[1,1,.55],iris:s,pupil:"round",side:!0}),p=new at({color:jn(...i.barbelCol||[.12,.1,.09]),roughness:.6,transparent:!0}),b=mg(i);return b.length&&c.head.add(new ke(tt(b),p)),c.head.add(new ke(Re([.04,.05,.12],[Nt+.04,bn(i,1)-.08,0],8),p)),f.concat([p])},bones(){let c=[],u=b=>bn(i,Yu(b));c.push(Re([.62,fi(i,.9)*.8,gs(i,.9)*.75],[Nt-.75,u(Nt-.75),0],16),ot([Nt-.4,u(Nt)-.05,0],[Nt-.02,u(Nt)-.1,0],.07,.05));let h=34,d=Nt-1.1,f=-Nt+.25;for(let b=0;b<h;b++){let g=d+(f-d)*b/(h-1),m=Yu(g),y=bn(i,m)+fi(i,m)*.12,_=tl(i,g)*.92+y*.08,M=ma(i,g)*.85+y*.15;if(c.push(Re([.07,.06,.06],[g,y,0],6),ot([g,y,0],[g-.12,_,0],.012,.008)),m<.42)c.push(ot([g,y,0],[g-.12,M,0],.012,.008));else if(m<.74)for(let E of[1,-1])c.push(un([[g,y,E*.05],[g-.05,(y+M)/2,E*gs(i,m)*.75],[g-.12,M*.9,E*gs(i,m)*.4]],.018,6,4))}let p=b=>{b.computeBoundingBox()};for(let b of(i.dorsal||[]).concat(i.anal||[])){let g=(i.dorsal||[]).includes(b);for(let m=0;m<=6;m++){let y=-Nt+(b[0]+(b[1]-b[0])*m/6)*Dn,_=g?tl(i,y):ma(i,y);c.push(ot([y,_,0],[y-b[2]*.5,_+(g?1:-1)*b[2]*.8,0],.01,.006))}}for(let b=-4;b<=4;b++)c.push(ot([-Nt+.1,bn(i,.02),0],[-Nt-1*(i.cauH||1),bn(i,.02)+b*.2*(i.cauH||1),0],.012,.006));return p(c[0]),tt(c)},organs(c,u){c("otak",pa([.22,.13,.13],[[.1,.08,.09],[-.2,-.02,0]]),u([.9,.72,.7],.5,.3),[a-.25,bn(i,r)+fi(i,r)*.35,0]);let h=[],d=a-.75;for(let M of[1,-1])for(let E=0;E<4;E++){let S=d+.1-E*.11,x=[[S,o(.35),M*.1],[S-.05,o(.05),l(M*.55)],[S,o(-.4),M*.1]];h.push(un(x,.03,14,5));for(let v=0;v<9;v++){let F=new bi(x.map(xn)).getPoint(.1+v*.09);h.push(ot([F.x,F.y,F.z],[F.x-.22,F.y,F.z*.92],.028,.008,5))}}c("insang",tt(h),u([.78,.1,.16],.45,.5));let f=[d-.2,o(-.55),0],p=c("jantung",tt([Re([.16,.12,.14],[-.15,.02,0],14),Re([.17,.15,.14],[.05,-.02,0],14),ot([.15,0,0],[.45,.12,0],.06,.05)]),u([.55,.06,.1],.3,.8),f);c("hati",Re([.55,.3*e,.32*t],[d-.75,o(-.35),l(.15)],18),u([.45,.14,.1],.35,.7));let b=[-.15,o(.28),0],g=i.twoChamber?tt([Re([.55,.26*e,.26*t],[.55,.02,0],18),Re([.85,.28*e,.28*t],[-.75,-.02,0],18)]):Re([1.35,.28*e,.28*t],[0,0,0],20),m=c("gelembung",g,new Zt({color:jn(.88,.9,.92),roughness:.15,metalness:.35,clearcoat:1,transparent:!0}),b),y=-Nt+(i.anal&&i.anal[0]?i.anal[0][0]:.35)*Dn+.1,_=[[d-.3,o(-.15),0],[d-.9,o(-.45),-.1],[.3,o(-.5),l(.3)],[-.2,o(-.35),l(-.3)],[-.6,o(-.6),l(.3)],[y+.4,o(-.5),0],[y,o(-.85),0]];if(c("usus",tt([Re([.45,.22*e,.22*t],[d-1,o(-.3),0],16),un(_,.07,80,6)]),u([.92,.68,.6],.45,.6)),c("ginjal",un([[d-.2,o(.42),0],[0,o(.5),0],[y,o(.45),0]],.07,24,6),u([.4,.1,.1],.4,.6)),i.labirin){let M=[];if(i.labirin==="pohon")for(let E of[1,-1]){let S=[d+.05,o(.35),l(E*.3)];for(let x=0;x<5;x++){let v=[S[0]-.1+x*.05,S[1]+.2+x%2*.1,S[2]+E*.05*x];M.push(ot(S,v,.035,.02,5));for(let F=0;F<2;F++)M.push(ot(v,[v[0]+(F?.08:-.08),v[1]+.12,v[2]],.018,.01,4))}}else for(let E of[1,-1])for(let S=0;S<7;S++)M.push(Re([.08,.06,.06],[d+.05+Math.sin(S*1.7)*.12,o(.32)+Math.cos(S*2.3)*.08,l(E*.32)+Math.sin(S)*.05],8));c("labirin",tt(M),u([.82,.42,.45],.4,.5))}return{heart:p,lungs:[],bladder:m,BC:b}},food:{main:[[Nt-.05,bn(i,1)-.08,0],[a-.5,o(-.1),0],[a-1.2,o(-.25),0],[a-1.75,o(-.3),0],[.3,o(-.5),l(.3)],[-.2,o(-.35),l(-.3)],[-.6,o(-.6),l(.3)],[-Nt+(i.anal&&i.anal[0]?i.anal[0][0]:.35)*Dn+.1,o(-.85),0]],n:45},flows:[{pts:[[Nt-.05,bn(i,1),0],[a-.3,o(0),l(.15)],[a-.75,o(0),l(.5)],[a-1.15,o(-.1),l(.95)],[a-1.6,o(-.15),l(1.3)]],color:new fe(.5,1.5,2.6),n:50,speed:2.2,jit:.16},{pts:[[a-1,o(-.05),l(.42)],[a-.45,o(0),l(.42)]],color:new fe(2.6,.25,.25),n:34,speed:3.2,jit:.28,dir:c=>c.counter===!1?-1:1}],neutral:i.neutral??.5,onUpdate(c,u,h,d,f){c.gas==null&&(c.gas=.25,c.vy=0,c.fy=0,c.hold=0,c.counter=!0);let p=this.neutral,b=(c.gas-p)*4.2;c.vy+=b*d,c.vy*=Math.exp(-1.6*d),c.fy+=c.vy*d,c.fy<-1.2&&(c.fy=-1.2,c.vy=0),c.fy>1.4&&(c.fy=1.4,c.vy=0),u.position.y=c.fy,u.rotation.z=Dt(c.vy*.25,-.25,.25)+Math.sin(f*1.2)*.015,h.bladder&&h.bladder.scale.setScalar(.55+.9*c.gas),c.status=c.gas<p-.04?"tenggelam":c.gas>p+.04?"mengapung":"melayang",c.status==="melayang"&&Math.abs(c.vy)<.12?c.hold+=d:c.hold=0,c.hold>2.5&&!c.buoyOk&&(c.buoyOk=!0)}}}function gg(i,e,t,n){let{heightAt:s,WATER:r}=e,a={uTime:{value:0}},o=[],l=(m,y,_)=>{m.onBeforeCompile=M=>{M.uniforms.uTime=a.uTime,M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      { float tt = clamp((${Nt.toFixed(2)} - position.x) / ${Dn.toFixed(2)}, 0.0, 1.0); float ph = float(gl_InstanceID) * 2.37;
        transformed.z += sin(position.x * 1.1 + uTime * ${_.toFixed(2)} + ph) * ${y.toFixed(3)} * tt * tt; }`)}},c=nn(77),u=(m,y)=>{for(let _=0;_<20;_++){let M=c()*vt,E=Math.sqrt(c())*(n.r-4),S=n.x+Math.cos(M)*E,x=n.z+Math.sin(M)*E,v=s(S,x);if(r-v>1){let F=An(v+y,r-.35,m+(c()-.5)*.25);return[S,Dt(F,v+.25,r-.3),x]}}return[n.x,r-1,n.z]};for(let m of t){let y=m.P,_=Tf(y),M=m.count,E=_.bodyParts(1),S=_.skinMats(),x=new at({map:S.body.map,roughness:.45,metalness:.05}),v=S.tail,F=[],w=bn(y,y.eyeT||.87)+fi(y,y.eyeT||.87)*(y.eyeY??.3),H=gs(y,y.eyeT||.87)*.86,q=-Nt+(y.eyeT||.87)*Dn,C=y.eyeR||.17;for(let J of[1,-1]){let se=Re([C,C,C*.55],[q,w,J*H],10),z=Re([C*.5,C*.5,C*.2],[q+.02,w,J*(H+C*.48)],8),ee=new Float32Array(se.attributes.position.count*3).fill(0),oe=jn(...y.iris||[.85,.7,.25]);for(let me=0;me<ee.length;me+=3)ee[me]=oe.r,ee[me+1]=oe.g,ee[me+2]=oe.b;se.setAttribute("color",new dt(ee,3)),z.setAttribute("color",new dt(new Float32Array(z.attributes.position.count*3).fill(.02),3)),F.push(se,z)}let T=new at({vertexColors:!0,roughness:.15}),U=tt([E.tail,...mg(y)]),P=m.amp||.18,I=m.freq||6;[x,v,T].forEach(J=>l(J,P,I));let V=new Bn(tt([E.body,E.head]),x,M),G=new Bn(U,v,M),N=new Bn(tt(F),T,M);for(let J of[V,G,N])J.frustumCulled=!1,J.castShadow=!1,J.userData.noAO=!0,i.add(J);let O=[];for(let J=0;J<M;J++){let se=u(m.depth,m.bedOff||.35);O.push({p:xn(se),v:new k(c()-.5,0,c()-.5).multiplyScalar(.3),tgt:xn(u(m.depth,m.bedOff||.35)),off:new k((c()-.5)*2,(c()-.5)*.5,(c()-.5)*2),yaw:c()*vt,pitch:0})}o.push({item:m,P:y,body:V,fins:G,eyes:N,fish:O,scale:m.scale})}let h=new We,d=new wt,f=new $t(0,0,0,"YZX"),p=new k,b=new k,g=new k;return{groups:o,update(m,y,_,M){a.uTime.value=y;let E=Math.hypot(_.x-n.x,_.z-n.z)>n.r+35;for(let S of o){if(S.body.visible=S.fins.visible=S.eyes.visible=!E,E)continue;let x=S.item.speed||.6;S.fish.forEach((v,F)=>{let w=S.fish[0],H=F===0||!S.item.school?v.tgt:b.copy(w.p).add(v.off);(F===0||!S.item.school)&&v.p.distanceTo(v.tgt)<.8&&v.tgt.copy(xn(u(S.item.depth,S.item.bedOff||.35))),b.copy(H).sub(v.p);let q=b.length();q>.001&&b.multiplyScalar(x/q),g.set(v.p.x-_.x,v.p.y-M,v.p.z-_.z);let C=g.length();C<1.6&&b.add(g.multiplyScalar((1.6-C)*1.5/Math.max(.1,C))),v.v.lerp(b,Math.min(1,m*1.2)),v.p.addScaledVector(v.v,m);let T=s(v.p.x,v.p.z);v.p.y=Dt(v.p.y,T+.22,r-.25),Math.hypot(v.p.x-n.x,v.p.z-n.z)>n.r-3&&(v.p.x+=(n.x-v.p.x)*m*.5,v.p.z+=(n.z-v.p.z)*m*.5);let U=Math.hypot(v.v.x,v.v.z);if(U>.02){let I=Math.atan2(-v.v.z,v.v.x)-v.yaw;I=Math.atan2(Math.sin(I),Math.cos(I)),v.yaw+=I*Math.min(1,m*3)}v.pitch+=(Dt(Math.atan2(v.v.y,U+.01),-.5,.5)-v.pitch)*Math.min(1,m*3),f.set(0,v.yaw,v.pitch),d.setFromEuler(f),p.setScalar(S.scale),h.compose(v.p,d,p),S.body.setMatrixAt(F,h),S.fins.setMatrixAt(F,h),S.eyes.setMatrixAt(F,h)}),S.body.instanceMatrix.needsUpdate=S.fins.instanceMatrix.needsUpdate=S.eyes.instanceMatrix.needsUpdate=!0}}}}function xg(){let i=null,e=null,t=null,n=!1,s=null,r=null,a=null,o=null,l=null,c=null,u=!0,h=.8,d=3,f=0,p=6,b=0;function g(){if(i){i.state==="suspended"&&i.resume();return}let T=window.AudioContext||window.webkitAudioContext;if(!T)return;i=new T,e=i.createGain(),e.gain.value=u?h:0,t=i.createBiquadFilter(),t.type="lowpass",t.frequency.value=2e4,t.Q.value=.7,e.connect(t),t.connect(i.destination);let U=i.sampleRate*3;c=i.createBuffer(1,U,i.sampleRate);let P=c.getChannelData(0),I=0,V=0,G=0;for(let ge=0;ge<U;ge++){let B=Math.random()*2-1;I=.99765*I+B*.099,V=.963*V+B*.2965,G=.57*G+B*1.0526,P[ge]=(I+V+G+B*.1848)*.2}let N=(ge,B,le)=>{let he=i.createBufferSource();he.buffer=c,he.loop=!0,he.loopStart=Math.random()*2;let Ee=i.createBiquadFilter();Ee.type=ge,Ee.frequency.value=B,Ee.Q.value=le;let ve=i.createGain();return ve.gain.value=0,he.connect(Ee),Ee.connect(ve),ve.connect(e),he.start(),{g:ve,fl:Ee}},O=N("bandpass",380,.5);s=O.g,r=O.fl,a=N("highpass",2500,.4).g;let se=i.createOscillator();se.type="sine",se.frequency.value=4300;let z=i.createGain();z.gain.value=0;let ee=i.createOscillator();ee.frequency.value=16;let oe=i.createGain();oe.gain.value=.5;let me=i.createGain();me.gain.value=.5,o=i.createGain(),o.gain.value=0,ee.connect(oe),oe.connect(z.gain),se.connect(z),z.connect(o),o.connect(e),se.start(),ee.start();let pe=i.createBufferSource();pe.buffer=c,pe.loop=!0;let Fe=i.createBiquadFilter();Fe.type="lowpass",Fe.frequency.value=190,Fe.Q.value=.8;let Xe=i.createGain();Xe.gain.value=.55;let Ue=i.createOscillator();Ue.frequency.value=25;let Qe=i.createGain();Qe.gain.value=.45,Ue.connect(Qe),Qe.connect(Xe.gain),l=i.createGain(),l.gain.value=0,pe.connect(Fe),Fe.connect(Xe),Xe.connect(l),l.connect(e),pe.start(),Ue.start()}function m(T){if(i.createStereoPanner){let U=i.createStereoPanner();return U.pan.value=Math.max(-1,Math.min(1,T)),U}return i.createGain()}function y(T,U,P,I,V,G){let N=i.createOscillator(),O=i.createGain(),J=m(G);N.type="sine",N.frequency.setValueAtTime(U,T),N.frequency.exponentialRampToValueAtTime(P,T+I),O.gain.setValueAtTime(1e-4,T),O.gain.exponentialRampToValueAtTime(V,T+I*.2),O.gain.exponentialRampToValueAtTime(1e-4,T+I),N.connect(O),O.connect(J),J.connect(e),N.start(T),N.stop(T+I+.02)}function _(T){let U=i.currentTime+.02,P=Math.random()*2-1,I=Math.floor(Math.random()*3),V=2300+Math.random()*1800;if(I===0){let G=2+Math.floor(Math.random()*4);for(let N=0;N<G;N++)y(U+N*.13,V*(1+Math.random()*.1),V*1.5,.09,T,P)}else if(I===1)for(let G=0;G<3;G++)y(U+G*.22,V*.8,V*1.4,.16,T,P),y(U+G*.22+.1,V*1.5,V*1,.1,T*.8,P);else y(U,V,V*1.8,.28,T,P),y(U+.3,V*1.7,V*.9,.22,T*.9,P)}function M(T,U){if(!i||!u)return;let P=i.currentTime+.02,I=.75+Math.random()*.25,V=420+Math.random()*120,G=i.createOscillator();G.type="sawtooth",G.frequency.setValueAtTime(V,P),G.frequency.linearRampToValueAtTime(V*1.65,P+I*.35),G.frequency.linearRampToValueAtTime(V*1.05,P+I);let N=i.createBiquadFilter(),O=i.createBiquadFilter();N.type=O.type="bandpass",N.Q.value=O.Q.value=5,N.frequency.setValueAtTime(700,P),N.frequency.linearRampToValueAtTime(1100,P+I*.4),N.frequency.linearRampToValueAtTime(800,P+I),O.frequency.setValueAtTime(1900,P),O.frequency.linearRampToValueAtTime(2600,P+I*.4),O.frequency.linearRampToValueAtTime(2e3,P+I);let J=i.createGain(),se=m(U);J.gain.setValueAtTime(1e-4,P),J.gain.exponentialRampToValueAtTime(T,P+.09),J.gain.setValueAtTime(T,P+I*.55),J.gain.exponentialRampToValueAtTime(1e-4,P+I);let z=i.createOscillator();z.frequency.value=6;let ee=i.createGain();ee.gain.value=8,z.connect(ee),ee.connect(G.frequency),z.start(P),z.stop(P+I+.05),G.connect(N),G.connect(O);let oe=i.createGain();oe.gain.value=.55,N.connect(oe),O.connect(oe),oe.connect(J),J.connect(se),se.connect(e),G.start(P),G.stop(P+I+.05)}function E(T,U,P,I,V,G="bandpass",N=0){let O=i.createBufferSource();O.buffer=c;let J=i.createBiquadFilter();J.type=G,J.frequency.value=U,J.Q.value=P;let se=i.createGain(),z=m(N);se.gain.setValueAtTime(1e-4,T),se.gain.exponentialRampToValueAtTime(V,T+.012),se.gain.exponentialRampToValueAtTime(1e-4,T+I),O.connect(J),J.connect(se),se.connect(z),z.connect(e),O.start(T,Math.random()*2),O.stop(T+I+.05)}function S(T,U=1){if(!i||!u)return;let P=i.currentTime+.01;if(T>=2){E(P,900,.6,.9,.5*U),E(P+.03,2600,.8,.6,.25*U,"highpass");let I=i.createOscillator(),V=i.createGain();I.frequency.setValueAtTime(140,P),I.frequency.exponentialRampToValueAtTime(45,P+.35),V.gain.setValueAtTime(1e-4,P),V.gain.exponentialRampToValueAtTime(.35*U,P+.02),V.gain.exponentialRampToValueAtTime(1e-4,P+.4),I.connect(V),V.connect(e),I.start(P),I.stop(P+.45);for(let G=0;G<7;G++)x(P+.25+Math.random()*.9,.05*U)}else T>=1?(E(P,1400,.9,.35,.22*U),E(P+.02,3200,1,.2,.08*U,"highpass"),x(P+.15,.03*U)):E(P,1100+Math.random()*600,1.2,.18,.12*U)}function x(T,U){let P=i.createOscillator(),I=i.createGain(),V=900+Math.random()*1500;P.type="sine",P.frequency.setValueAtTime(V,T),P.frequency.exponentialRampToValueAtTime(V*2.2,T+.05),I.gain.setValueAtTime(1e-4,T),I.gain.exponentialRampToValueAtTime(U,T+.005),I.gain.exponentialRampToValueAtTime(1e-4,T+.07),P.connect(I),I.connect(e),P.start(T),P.stop(T+.09)}function v(T=6,U=.05){if(!i||!u)return;let P=i.currentTime;for(let I=0;I<T;I++){let V=P+I*(.04+Math.random()*.08),G=250+Math.random()*500,N=i.createOscillator(),O=i.createGain();N.frequency.setValueAtTime(G,V),N.frequency.exponentialRampToValueAtTime(G*2.5,V+.06),O.gain.setValueAtTime(1e-4,V),O.gain.exponentialRampToValueAtTime(U,V+.01),O.gain.exponentialRampToValueAtTime(1e-4,V+.08),N.connect(O),O.connect(e),N.start(V),N.stop(V+.1)}}function F(T){!i||T===n||(n=T,t.frequency.setTargetAtTime(T?520:2e4,i.currentTime,.12))}function w(T,U){if(!i||!u)return;let P=i.currentTime+.02,I=1.3+Math.random()*.5,V=95+Math.random()*25,G=i.createOscillator();G.type="sawtooth",G.frequency.setValueAtTime(V*.85,P),G.frequency.linearRampToValueAtTime(V*1.15,P+I*.3),G.frequency.linearRampToValueAtTime(V*.9,P+I);let N=i.createBiquadFilter(),O=i.createBiquadFilter();N.type=O.type="bandpass",N.Q.value=4,O.Q.value=5,N.frequency.setValueAtTime(320,P),N.frequency.linearRampToValueAtTime(520,P+I*.4),N.frequency.linearRampToValueAtTime(350,P+I),O.frequency.setValueAtTime(800,P),O.frequency.linearRampToValueAtTime(1e3,P+I*.4);let J=i.createGain(),se=m(U);J.gain.setValueAtTime(1e-4,P),J.gain.exponentialRampToValueAtTime(T*1.4,P+.25),J.gain.setValueAtTime(T*1.4,P+I*.7),J.gain.exponentialRampToValueAtTime(1e-4,P+I);let z=i.createGain();z.gain.value=.9,G.connect(N),G.connect(O),N.connect(z),O.connect(z),z.connect(J),J.connect(se),se.connect(e),G.start(P),G.stop(P+I+.05)}function H(T,U){if(!i||!u)return;let P=i.currentTime+.02,I=.7+Math.random()*.3,V=330+Math.random()*80,G=i.createOscillator();G.type="sawtooth",G.frequency.setValueAtTime(V,P),G.frequency.linearRampToValueAtTime(V*1.1,P+I*.3),G.frequency.linearRampToValueAtTime(V*.92,P+I);let N=i.createOscillator();N.frequency.value=13;let O=i.createGain();O.gain.value=.45;let J=i.createGain();J.gain.value=.55,N.connect(O),O.connect(J.gain);let se=i.createBiquadFilter(),z=i.createBiquadFilter();se.type=z.type="bandpass",se.Q.value=5,z.Q.value=6,se.frequency.value=650,z.frequency.value=1900,se.frequency.setValueAtTime(450,P),se.frequency.linearRampToValueAtTime(700,P+.12);let ee=i.createGain(),oe=m(U);ee.gain.setValueAtTime(1e-4,P),ee.gain.exponentialRampToValueAtTime(T,P+.06),ee.gain.setValueAtTime(T,P+I*.6),ee.gain.exponentialRampToValueAtTime(1e-4,P+I),G.connect(J),J.connect(se),J.connect(z);let me=i.createGain();me.gain.value=.7,se.connect(me),z.connect(me),me.connect(ee),ee.connect(oe),oe.connect(e),G.start(P),G.stop(P+I+.05),N.start(P),N.stop(P+I+.05)}function q(T,U,P){T==="sapi"?w(U,P):T==="kambing"?H(U*.9,P):M(U*.8,P)}function C(T,U,P=.6){T.gain.setTargetAtTime(U,i.currentTime,P)}return{init:g,get enabled(){return u},setEnabled(T){u=T,i&&e.gain.setTargetAtTime(u?h:0,i.currentTime,.1)},meow:M,call:q,splash:S,bubbles:v,setUnder:F,update(T,U){if(!i||!u)return;b+=T;let P=(U.world?1:.25)*(U.under?.25:1),I=.5+.5*Math.sin(b*.23)*Math.sin(b*.071+1.3);C(s,(.05+.1*I)*P),r.frequency.setTargetAtTime(260+420*I,i.currentTime,.8),C(a,(.004+.02*I*I)*P*(.4+.6*U.day)),C(o,.012*Math.max(0,1-U.day*2.2)*P),C(l,U.catSub?.22:0,.4),U.world&&!U.under&&U.day>.35&&(d-=T,d<=0&&(_(.035+Math.random()*.03),f>0?(f--,d=.4+Math.random()*.9):(f=Math.random()<.3?2+Math.floor(Math.random()*3):0,d=3+Math.random()*7)))}}}function P2(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.5,"rgba(255,255,255,0.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,vt),e.fill(),new Hn(i)}function bg(i,e,t,n,s){let r=new Float32Array(e*3).fill(-999),a=new bt;a.setAttribute("position",new dt(r,3));let o=new ci(a,new Zn({map:s,color:t,size:n,sizeAttenuation:!0,transparent:!0,depthWrite:!1,opacity:.85}));return o.frustumCulled=!1,o.userData.noAO=!0,i.add(o),{pts:o,pos:r,vel:new Float32Array(e*3),life:new Float32Array(e),N:e,next:0}}function yg(i,e){let t=P2(),n=bg(i,180,new fe(.9,.97,1),.075,t),s=bg(i,70,new fe(.8,.95,1),.028,t),r=a=>{let o=a.next;return a.next=(a.next+1)%a.N,o};return{splash(a,o,l,c){for(let u=0;u<l;u++){let h=r(n),d=Math.random()*vt,f=Math.random()*.18,p=(.4+Math.random())*c;n.pos[h*3]=a+Math.cos(d)*f,n.pos[h*3+1]=e+.02,n.pos[h*3+2]=o+Math.sin(d)*f;let b=(.4+Math.random()*1.1)*c;n.vel[h*3]=Math.cos(d)*b,n.vel[h*3+1]=1.4+p*2.4,n.vel[h*3+2]=Math.sin(d)*b,n.life[h]=1.6}},bubbles(a,o,l,c){for(let u=0;u<c;u++){let h=r(s);s.pos[h*3]=a+(Math.random()-.5)*.3,s.pos[h*3+1]=o,s.pos[h*3+2]=l+(Math.random()-.5)*.3,s.vel[h*3]=Math.random()*vt,s.vel[h*3+1]=.5+Math.random()*.5,s.life[h]=4}},update(a,o){for(let l=0;l<n.N;l++)n.life[l]<=0||(n.life[l]-=a,n.vel[l*3+1]-=9.8*a,n.pos[l*3]+=n.vel[l*3]*a,n.pos[l*3+1]+=n.vel[l*3+1]*a,n.pos[l*3+2]+=n.vel[l*3+2]*a,(n.pos[l*3+1]<e&&n.vel[l*3+1]<0||n.life[l]<=0)&&(n.life[l]=0,n.pos[l*3+1]=-999));for(let l=0;l<s.N;l++){if(s.life[l]<=0)continue;s.life[l]-=a;let c=s.vel[l*3];s.pos[l*3]+=Math.sin(o*6+c)*.15*a,s.pos[l*3+1]+=s.vel[l*3+1]*a,s.pos[l*3+2]+=Math.cos(o*5+c)*.15*a,(s.pos[l*3+1]>e-.02||s.life[l]<=0)&&(s.life[l]=0,s.pos[l*3+1]=-999)}n.pts.geometry.attributes.position.needsUpdate=!0,s.pts.geometry.attributes.position.needsUpdate=!0}}}(async function(){"use strict";let i="hutan-ilmu-v1",e="hutan-ilmu-q",t=ru.layers,n=ru.specimens,s=ru.quiz,r=[{data:Hm,spec:$m},{data:xf("sapi"),spec:eg},{data:xf("kambing"),spec:lg}],a=ug.map(function(L){let Q=hg(L);return{data:Q,spec:Tf(Q.P),fish:!0}}),o=r.concat(a),l=n.concat(o.map(function(L){return L.data.specimen}));o.forEach(function(L,Q){L.hi=n.length+Q});let c={x:13,z:22.5,r:8.5},u=t,h="tree",d=function(){return h!=="tree"},f=function(L){return o.find(function(Q){return Q.data.id===L})},p=function(){return d()&&!!f(h).fish},b=function(){return a.filter(function(L){return S.trees[L.data.id]}).length},g=function(L){return h==="tree"?L:(h==="kucing"?"cat:":h+":")+L},m=function(){return r.filter(function(L){return S.trees[L.data.id]}).length},y=function(){return n.filter(function(L){return S.trees[L.id]}).length},_=function(){return Object.keys(S.found).filter(function(L){return L.indexOf(":")<0}).length},M="ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer:coarse)").matches,E=/[?&]debug/.test(location.search),S={xp:0,found:{},trees:{},qdone:{},mission:!1};try{let L=localStorage.getItem(i);if(L){let Q=JSON.parse(L);Q&&typeof Q=="object"&&(S.xp=Q.xp|0,S.found=Q.found||{},S.trees=Q.trees||{},S.qdone=Q.qdone||{},S.mission=!!Q.mission)}}catch{}function x(){try{localStorage.setItem(i,JSON.stringify(S))}catch{}}let v=0;function F(L){let Q=Ge("#toast");Q.textContent=L,Q.classList.add("on"),clearTimeout(v),v=setTimeout(function(){Q.classList.remove("on")},2400)}function w(){let L=_(),Q=y();return S.mission?Q<n.length?"Bedah semua pohon bertanda: "+Q+"/"+n.length:m()<r.length?"Bedah hewan: kucing, sapi, kambing "+m()+"/"+r.length:b()<a.length?"Selami danau dan bedah 5 jenis ikan: "+b()+"/"+a.length:"Semua misi selesai. Coba kuis untuk XP tambahan.":"Temukan 6 lapisan batang: "+L+"/6"}function H(){let L=Math.floor(S.xp/100)+1;Ge("#lvl").textContent="Level "+L,Ge("#xpTxt").textContent=S.xp%100+" / 100 XP",Ge("#xpBar").style.width=S.xp%100+"%",Ge("#mission").textContent=w()}function q(L,Q){S.xp+=L,F("+"+L+" XP "+Q),H(),x()}function C(){!S.mission&&_()>=t.length&&(S.mission=!0,q(60,"misi selesai"),H())}let T=null;try{T=localStorage.getItem(e)}catch{}T!=="tinggi"&&T!=="hemat"&&(T=M?"hemat":"tinggi");let U=(location.search.match(/[?&]q=(tinggi|hemat)/)||[])[1];E&&U&&(T=U);let P;try{P=new nu({canvas:Ge("#view"),antialias:!1,powerPreference:"high-performance"})}catch{Ge("#nogl").style.display="flex",Ge("#loading").style.display="none";return}let I=P.domElement;P.toneMapping=ir,P.toneMappingExposure=1,P.shadowMap.enabled=!0,P.shadowMap.type=tr;let V=function(){let L=window.devicePixelRatio||1;return T==="tinggi"?Math.min(L,2):Math.min(L,1.25)};function G(L,Q){Ge("#loadBar").style.width=Math.round(L*100)+"%",Q&&(Ge("#loadTxt").textContent=Q)}let N=function(){return new Promise(function(L){setTimeout(L,0)})};V0(n);let O=new li,J=new en(66,1,.15,1200);J.rotation.order="YXZ";let se=tm(O,P);Q0(O);let z=z0(O),ee=yg(O,jt),oe=8,me=new Map;function pe(L,Q,W){let be=Math.floor(L/oe)+","+Math.floor(Q/oe),ye=me.get(be);ye||(ye=[],me.set(be,ye)),ye.push({x:L,z:Q,r:W})}function Fe(L){let Q=Math.floor(L.x/oe),W=Math.floor(L.z/oe);for(let be=-1;be<=1;be++)for(let ye=-1;ye<=1;ye++){let nt=me.get(Q+be+","+(W+ye));if(nt)for(let mt=0;mt<nt.length;mt++){let yn=nt[mt],Pt=L.x-yn.x,Ct=L.z-yn.z,Ze=Math.hypot(Pt,Ct),xt=yn.r+.45;Ze<xt&&Ze>1e-4&&(L.x=yn.x+Pt/Ze*xt,L.z=yn.z+Ct/Ze*xt)}}}let Xe=await Nm({scene:O,heroes:n,clear:[c],addObs:pe,quality:T,progress:function(L,Q){G(.1+L*.6,Q)}}),Ue=Xe.heroObjs,Qe=Xe.heroHits;r.forEach(function(L,Q){let W=L.data.specimen;L.w=Gm(O,{heightAt:fn,WATER:jt},L.spec,{x:W.x,z:W.z},404+Q*31,L.data.id==="kucing"?null:c);let be=new ke(new Ks(L.data.id==="sapi"?.3:.16,0),new at({color:16765786,emissive:16754688,emissiveIntensity:2.2,roughness:.3}));be.userData.noAO=!0,O.add(be);let ye=L.data.id==="sapi"?1.6:L.data.id==="kambing"?.9:.55,nt=new Zs(ye,ye+.1,48,1);nt.rotateX(-Math.PI/2);let mt=new ke(nt,new ln({color:new fe(2.2,1.7,.5),transparent:!0,opacity:.8,side:Jt,depthWrite:!1}));mt.userData.noAO=!0,O.add(mt),L.w.hit.userData.hero=L.hi,Qe.push(L.w.hit),Ue.push({g:L.w.group,mk:be,ring:mt,y:L.w.y}),L.callT=4+Q*5});let ge=gg(O,{heightAt:fn,WATER:jt},a.map(function(L){return Object.assign({P:L.data.P},L.data.world)}),Xn);a.forEach(function(L,Q){let W=new ke(new $n(.6,8,6),new ln({visible:!1}));W.userData.hero=L.hi,O.add(W),Qe.push(W),L.hit=W,L.G=ge.groups[Q],Ue.push({g:new Gt,mk:new Gt,ring:new Gt,y:jt-1})}),(function(){let Q=Math.atan2(2-c.z,0-c.x),W=[],be=[],ye=[];for(let Pt=0;Pt<28;Pt++){let Ct=Pt/28*Math.PI*2,Ze=c.x+Math.cos(Ct)*c.r,xt=c.z+Math.sin(Ct)*c.r;ye.push({a:Ct,x:Ze,z:xt,y:fn(Ze,xt)})}let nt=function(Pt,Ct){return Math.abs(Math.atan2(Math.sin(Pt-Ct),Math.cos(Pt-Ct)))};ye.forEach(function(Pt,Ct){let Ze=new dn(.07,.09,1.2,6);Ze.translate(Pt.x,Pt.y+.55,Pt.z),W.push(Ze),pe(Pt.x,Pt.z,.12);let xt=ye[(Ct+1)%28],Lt=(Pt.a+xt.a)/2+(Ct===27?Math.PI:0);if(nt(Lt,Q)<.18)return;let qt=Math.hypot(xt.x-Pt.x,xt.z-Pt.z);for(let zt of[.45,.9]){let an=new xi(qt,.07,.05);an.rotateY(-Math.atan2(xt.z-Pt.z,xt.x-Pt.x)),an.translate((Pt.x+xt.x)/2,(Pt.y+xt.y)/2+zt,(Pt.z+xt.z)/2),be.push(an)}});let mt=new at({color:new fe().setRGB(.36,.25,.16,Et),roughness:.9}),yn=new ke(tt(W.concat(be)),mt);yn.castShadow=!0,yn.receiveShadow=!0,O.add(yn)})();let B={x:0,z:2,y:0,face:Math.PI,phase:0,jh:0,jv:0,swim:!1,ey:0,eyeS:0,wet:!1,under:!1,step:0,stroke:0,bub:0};B.y=fn(B.x,B.z);let le={yaw:0,pitch:-.04,fov:66},he=1,Ee=1;function ve(L){he=Dt(he*L,.3,1.15)}let Be=xg(),Oe="hutan-ilmu-snd";try{localStorage.getItem(Oe)==="0"&&Be.setEnabled(!1)}catch{}function ft(){let L=Ge("#bSnd");L&&(L.querySelector("span").textContent="Suara: "+(Be.enabled?"Nyala":"Mati"))}["pointerdown","keydown","touchstart"].forEach(function(L){window.addEventListener(L,function(){Be.init()},{passive:!0})}),G(.72,"Menyiapkan bedah batang\u2026"),await N();let ut=Bm(P,t),et=ut,$=et.camera,Ot=et.layerMeshes,ht=et.waterFlow,It=et.sugarFlow,ae=et.state,Rt=null,Ve=null;G(.85,"Menyiapkan efek visual\u2026"),await N();let Je=Gu(P,O,J),D=Gu(P,ut.scene,ut.camera,{aoRadius:.45,bloomStrength:.45}),A=.3,j=0;function xe(){let L=A*24%24,Q=Math.floor(L),W=Math.floor((L-Q)*60);Ge("#clockTxt").textContent=(Q<10?"0":"")+Q+":"+(W<10?"0":"")+W;let be=se.day<.25;be!==ue&&(ue=be,Ge("#clock").classList.toggle("night",be))}let ue=!1;function _e(L){T=L;try{localStorage.setItem(e,L)}catch{}Je.setQuality(L),D.setQuality(L),o.forEach(function(W){W.fx&&W.fx.setQuality(L)}),se.setShadowSize(L==="tinggi"?2048:1024),se.envEvery=L==="tinggi"?2.5:5,Xe.setQuality(L);let Q=Ge("#bQual");Q&&(Q.querySelector("span").textContent="Grafik: "+(L==="tinggi"?"Tinggi":"Hemat")),He()}function Ae(L){if(h=L,L!=="tree"){let Q=f(L);Q.D||(Q.D=qm(P,Q.spec),Q.fx=Gu(P,Q.D.scene,Q.D.camera,{aoRadius:.4,bloomStrength:.35}),Q.fx.setQuality(T),Q.fx.setSize(window.innerWidth,window.innerHeight,V())),et=Q.D,u=Q.data.layers}else et=ut,u=t;$=et.camera,Ot=et.layerMeshes,ht=et.waterFlow,It=et.sugarFlow,ae=et.state,document.body.classList.toggle("catmode",L!=="tree"),document.body.classList.toggle("fishmode",L!=="tree"&&!!f(L).fish)}let re=function(){return h==="tree"?D:f(h).fx},ne="world",Se=0;function X(){let L=ae.sun;if(p()){Ge("#sunCap").textContent=L>.6?"Ikan aktif: tutup insang bergerak cepat supaya lebih banyak air melewati insang, dan jantung berdetak lebih cepat.":L>.3?"Aktivitas sedang: tutup insang membuka-menutup dengan teratur.":"Ikan beristirahat: gerakan tutup insang dan detak jantung melambat.";return}if(d()){let Q=et.vitals(L);Ge("#sunCap").textContent="Perkiraan: jantung "+Q.bpm+" detak per menit, napas "+Q.rr+" kali per menit. Saat aktif, otot butuh lebih banyak oksigen sehingga jantung dan paru bekerja lebih cepat."+(h!=="kucing"?" Rumen ikut berkontraksi lebih sering.":"")+" Angka ini kisaran umum, bukan patokan diagnosis.";return}Ge("#sunCap").textContent=L>.66?"Matahari terik: daun menguapkan banyak air (transpirasi), sehingga air tertarik naik cepat. Fotosintesis tinggi, banyak gula dikirim lewat floem.":L>.33?"Cahaya sedang: transpirasi dan fotosintesis berjalan sedang.":"Cahaya rendah atau malam: stomata cenderung menutup, aliran air melambat, dan gula yang dibuat berkurang."}let ce='<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>';function ie(){let L=Ge("#chips");L.innerHTML=u.map(function(Q){return'<button type="button" role="listitem" class="chip'+(Rt===Q.id?" sel":"")+'" data-id="'+Q.id+'"><span class="sw" style="background:'+Q.ui+'"></span>'+Q.name+(S.found[g(Q.id)]?ce:"")+"</button>"}).join("")}function we(){let L=Ge("#info"),Q=l[Se];if(!Rt&&d()){L.innerHTML="<h2>Anatomi "+Q.short+'</h2><p class="sci">'+Q.sci+'</p><p class="hint">'+Q.hint+"</p><h3>Tentang "+Q.short+"</h3><p>"+Q.fact+"</p>";return}if(!Rt){L.innerHTML='<h2>Penampang batang</h2><p class="sci">'+Q.name+'</p><p class="hint">Ketuk lapisan pada batang, atau pilih dari daftar, untuk mempelajarinya. Titik biru adalah air yang naik lewat xilem. Titik kuning adalah gula yang turun lewat floem.</p><h3>Tentang pohon ini</h3><p>'+Q.fact+"</p>";return}let W=u.find(function(be){return be.id===Rt});L.innerHTML='<h2 style="color:'+W.ui+'">'+W.name+'</h2><p class="sci">'+W.sci+"</p><h3>Apa ini</h3><p>"+W.what+"</p><h3>Fungsi</h3><p>"+W.fn+"</p><h3>Tahukah kamu</h3><p>"+W.fact+"</p>"+(Q.notes&&Q.notes[W.id]?"<h3>Pada "+Q.short+"</h3><p>"+Q.notes[W.id]+"</p>":"")}function Te(L){if(Rt=L,L&&!S.found[g(L)]&&(S.found[g(L)]=1,q(20,d()?"bagian tubuh baru":"lapisan baru"),C()),d()&&L){let W={kulit:0,otot:.32,rangka:.68}[L];ae.depthT=W!==void 0?W:1;let be=Ge("#depth");be&&(be.value=Math.round(ae.depthT*100))}ie(),we();let Q=Ge("#panel");Q&&(Q.scrollTop=0)}function Pe(L){let Q=Ge("#fade");Q.style.opacity=1,setTimeout(function(){L(),Q.style.opacity=0},window.matchMedia("(prefers-reduced-motion:reduce)").matches?0:380)}function $e(L){Pe(function(){Se=L;let Q=l[L];if(Ae(Q.kind?Q.id:"tree"),d()&&Q.kind==="animal"&&Be.call(Q.id,.2,0),h==="tree"&&et.setSpecies(Object.assign({id:Q.id},Q.wood)),ne="dissect",document.body.classList.add("dissect"),Ge("#dName").textContent=Q.name,Ge("#dSci").textContent=(d()?"Anatomi dan fisiologi \xB7 ":"Penampang batang \xB7 ")+Q.sci,ae.yaw=ae.yaw0||0,ae.user=!1,p()){ae.pitch=.25,ae.dist=window.innerWidth<760?35:13,ae.depthT=0,ae.depth=0,ae.sun=.3,ae.gas=.25,ae.vy=0,ae.fy=0,ae.hold=0,ae.counter=!0,ae.buoyOk=!!S.found[g("buoy")];let W=Ge("#sun"),be=Ge("#depth"),ye=Ge("#gas"),nt=Ge("#counter");W&&(W.value=30),be&&(be.value=0),ye&&(ye.value=25),nt&&(nt.checked=!0)}else if(d()){ae.pitch=.3,ae.dist=window.innerWidth<760?Q.id==="sapi"?46:38:Q.id==="sapi"?21:16,ae.depthT=0,ae.depth=0,ae.sun=.2;let W=Ge("#sun"),be=Ge("#depth");W&&(W.value=20),be&&(be.value=0)}else ae.pitch=.5,ae.dist=window.innerWidth<760?19:14;S.trees[Q.id]||(S.trees[Q.id]=1,q(10,d()?Q.short+" dibedah":"pohon baru")),Rt=null,ie(),we(),X(),H(),He(),pn={},wn.x=0,wn.y=0})}function pt(){Pe(function(){ne="world",Ae("tree"),document.body.classList.remove("dissect"),dr(),H(),He()})}function Me(L){Ge("#sheet").innerHTML=L,Ge("#modal").classList.add("on"),pn={},wn.x=0,wn.y=0}function je(){Ge("#modal").classList.remove("on")}function rt(){return Ge("#modal").classList.contains("on")}function De(){let L=_(),Q=y(),W=t.map(function(ye){return S.found[ye.id]?'<div class="jc"><b><i style="background:'+ye.ui+'"></i>'+ye.name+"</b><em>"+ye.sci+"</em><p>"+ye.short+"</p></div>":'<div class="jc lock"><b><i style="background:#3b4f47"></i>???</b><em>Belum ditemukan</em><p>Bedah sebuah pohon untuk menemukannya.</p></div>'}).join(""),be=n.map(function(ye){return S.trees[ye.id]?'<div class="jc"><b>'+ye.name+"</b><em>"+ye.sci+"</em><p>"+ye.fact+"</p></div>":'<div class="jc lock"><b>???</b><em>Belum dibedah</em><p>Cari pohon bertanda di hutan.</p></div>'}).join("");Me('<div class="head"><div><h2>Jurnal</h2><p style="color:var(--muted);font-size:14px">'+L+"/"+t.length+" lapisan batang, "+Q+"/"+n.length+' pohon</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><h3>Lapisan batang</h3><div class="grid">'+W+'</div><h3>Pohon</h3><div class="grid">'+be+"</div>")}let Ke=null;function hn(L,Q){for(let W=L.length-1;W>0;W--){let be=Math.floor(Q()*(W+1)),ye=L[W];L[W]=L[be],L[be]=ye}return L}function si(){let L=Math.random,Q=d()&&ne==="dissect"?f(h).data.quiz.slice():s.filter(function(be){return!be.sp||S.trees[be.sp]}).concat([].concat.apply([],o.map(function(be){return S.trees[be.data.id]&&ne==="world"?be.data.quiz:[]}))),W=hn(Q.slice(),L).slice(0,6);Ke={i:0,score:0,gain:0,set:W,order:W.map(function(be,ye){return ye}),done:!1},ga()}function ga(){let L=Ke.set[Ke.order[Ke.i]];(!Ke.optOrder||Ke.optOrder.q!==L.id)&&(Ke.optOrder={q:L.id,o:hn(L.o.map(function(W,be){return be}),Math.random)});let Q=Ke.optOrder.o.map(function(W,be){return'<button type="button" class="opt" data-o="'+W+'">'+L.o[W]+"</button>"}).join("");Me('<div class="head"><div><p style="color:var(--muted);font-size:13px;font-weight:800">Soal '+(Ke.i+1)+" dari "+Ke.set.length+'</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">'+L.q+'</p><div class="opts" id="opts">'+Q+'</div><div id="qfb"></div>')}function xa(L){let Q=Ke.set[Ke.order[Ke.i]],W=L===Q.a;document.querySelectorAll("#opts .opt").forEach(function(ye){let nt=+ye.dataset.o;ye.disabled=!0,nt===Q.a?ye.classList.add("ok"):nt===L&&ye.classList.add("bad")}),W&&(Ke.score++,S.qdone[Q.id]||(S.qdone[Q.id]=1,Ke.gain+=15,S.xp+=15,H(),x()));let be=Ke.i>=Ke.set.length-1;Ge("#qfb").innerHTML='<div class="exp"><b>'+(W?"Benar. ":"Belum tepat. ")+"</b>"+Q.e+'</div><div class="actions"><button type="button" class="btn primary" id="qnext">'+(be?"Lihat hasil":"Lanjut")+"</button></div>"}function $u(){if(Ke.i>=Ke.set.length-1){Me('<div class="head"><h2>Hasil kuis</h2><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">Skor '+Ke.score+" dari "+Ke.set.length+'</p><p style="color:var(--muted)">'+(Ke.gain?"Kamu mendapat tambahan "+Ke.gain+" XP dari soal yang baru benar pertama kali.":"XP hanya diberikan saat soal pertama kali dijawab benar.")+'</p><div class="actions"><button type="button" class="btn primary" id="qagain">Ulangi</button><button type="button" class="btn" data-close>Tutup</button></div>');return}Ke.i++,ga()}Ge("#modal").addEventListener("click",function(L){let Q=L.target;if(Q.id==="modal"||Q.closest("[data-close]")){je();return}let W=Q.closest(".opt");if(W&&!W.disabled){xa(+W.dataset.o);return}if(Q.closest("#qnext")){$u();return}Q.closest("#qagain")&&si()}),Ge("#bJournal").addEventListener("click",De),Ge("#bQuizW").addEventListener("click",si),Ge("#dQuiz").addEventListener("click",si),Ge("#bBack").addEventListener("click",pt),Ge("#chips").addEventListener("click",function(L){let Q=L.target.closest(".chip");Q&&Te(Rt===Q.dataset.id?null:Q.dataset.id)}),Ge("#tWater").addEventListener("change",function(L){ht.pts.visible=L.target.checked}),Ge("#tSugar").addEventListener("change",function(L){It.pts.visible=L.target.checked}),Ge("#sun").addEventListener("input",function(L){ae.sun=+L.target.value/100,X()}),Ge("#depth").addEventListener("input",function(L){ae.depthT=+L.target.value/100,ae.user=!0}),Ge("#gas").addEventListener("input",function(L){ae.gas=+L.target.value/100}),Ge("#counter").addEventListener("change",function(L){ae.counter=L.target.checked});function dr(){Ge("#tip").style.display="none"}Ge("#tipX").addEventListener("click",dr),setTimeout(dr,2e4);let pn={},ri=!1,Hs=!1,wn={x:0,y:0};M&&document.body.classList.add("touch"),window.addEventListener("keydown",function(L){if(L.target&&L.target.tagName==="INPUT"&&L.target.type!=="checkbox"&&L.target.type!=="range")return;let Q=L.key.toLowerCase();if(Q==="escape"){rt()?je():ne==="dissect"&&pt();return}rt()||ne==="world"&&(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"," ","c","control"].indexOf(Q)>=0&&(pn[Q]=!0,L.preventDefault()),Q==="e"&&sl(),(Q==="+"||Q==="=")&&ve(.8),(Q==="-"||Q==="_")&&ve(1.25),Q===" "&&(ri=!0,L.preventDefault()),Q==="j"&&De())}),window.addEventListener("keyup",function(L){delete pn[L.key.toLowerCase()]}),window.addEventListener("blur",function(){pn={}}),(function(){let L=Ge("#joy"),Q=Ge("#joyK"),W=null;function be(nt){let mt=L.getBoundingClientRect(),yn=mt.left+mt.width/2,Pt=mt.top+mt.height/2,Ct=nt.clientX-yn,Ze=nt.clientY-Pt,xt=Math.hypot(Ct,Ze),Lt=mt.width/2-8;xt>Lt&&(Ct=Ct/xt*Lt,Ze=Ze/xt*Lt),Q.style.transform="translate("+Ct+"px,"+Ze+"px)",wn.x=Ct/Lt,wn.y=-Ze/Lt}L.addEventListener("pointerdown",function(nt){W=nt.pointerId,L.setPointerCapture(W),be(nt),nt.preventDefault()}),L.addEventListener("pointermove",function(nt){nt.pointerId===W&&be(nt)});function ye(nt){nt.pointerId===W&&(W=null,wn.x=0,wn.y=0,Q.style.transform="")}L.addEventListener("pointerup",ye),L.addEventListener("pointercancel",ye)})();let Vn=new Map,zi=0,ba=0,Gs=0,Ji=new bo,nl=new de;function ya(L,Q,W){let be=I.getBoundingClientRect();nl.set((L-be.left)/be.width*2-1,-((Q-be.top)/be.height)*2+1),Ji.setFromCamera(nl,W)}function Ma(L,Q){ya(L,Q,$);let W=Ji.intersectObjects(Ot.filter(function(be){return be.visible}),!1)[0];return W?W.object.userData.layer:null}function Qu(L,Q){ya(L,Q,J);let W=Ji.intersectObjects(Qe,!1)[0];return W?W.object.userData.hero:-1}function il(){let L=-1,Q=1e9;return l.forEach(function(W,be){if(W.needSwim&&!(B.swim||B.under))return;let ye=Math.hypot(B.x-W.x,B.z-W.z)+(W.reach?8-W.reach:0);ye<Q&&(Q=ye,L=be)}),{i:L,d:Q}}function sl(){let L=il();L.d<8?$e(L.i):F("Dekati pohon bertanda dulu ("+Math.round(L.d-7)+" m lagi)")}I.addEventListener("pointerdown",function(L){if(!rt()){if(I.setPointerCapture(L.pointerId),Vn.set(L.pointerId,{x:L.clientX,y:L.clientY}),Vn.size===1&&(zi=0,ba=performance.now()),Vn.size===2){let Q=Array.from(Vn.values());Gs=Math.hypot(Q[0].x-Q[1].x,Q[0].y-Q[1].y)}I.classList.add("dragging")}}),I.addEventListener("pointermove",function(L){let Q=Vn.get(L.pointerId);if(!Q){if(ne==="dissect"&&L.pointerType==="mouse"){let ye=Ma(L.clientX,L.clientY);ye!==Ve&&(Ve=ye,I.style.cursor=ye?"pointer":"grab");let nt=Ge("#tipL");ye?(nt.style.display="block",nt.textContent=u.find(function(mt){return mt.id===ye}).name,nt.style.left=L.clientX+14+"px",nt.style.top=L.clientY+14+"px"):nt.style.display="none"}return}let W=L.clientX-Q.x,be=L.clientY-Q.y;if(Q.x=L.clientX,Q.y=L.clientY,Vn.size===1)if(zi+=Math.abs(W)+Math.abs(be),ne==="world"){let ye=Math.max(.45,Ee);le.yaw-=W*.0045*ye,le.pitch=Dt(le.pitch-be*.004*ye,-1.3,1.3)}else ae.user=!0,ae.yaw-=W*.008,ae.pitch=Dt(ae.pitch+be*.006,-.25,1.2);else if(Vn.size===2){let ye=Array.from(Vn.values()),nt=Math.hypot(ye[0].x-ye[1].x,ye[0].y-ye[1].y);if(Gs>0){let mt=Gs/nt;ne==="dissect"?(ae.user=!0,ae.dist=Dt(ae.dist*mt,6,46)):ve(mt)}Gs=nt,zi+=20}});function va(L){if(!Vn.has(L.pointerId))return;let Q=Vn.size===1;if(Vn.delete(L.pointerId),Vn.size===0&&I.classList.remove("dragging"),Q&&L.type==="pointerup"&&zi<8&&performance.now()-ba<600)if(ne==="world"){let W=Qu(L.clientX,L.clientY);if(W>=0&&!(l[W].needSwim&&!(B.swim||B.under))){let be=l[W],ye=Math.hypot(B.x-be.x,B.z-be.z);ye<(be.reach||9)?$e(W):F("Terlalu jauh. Dekati "+be.name+" ("+Math.round(ye-8)+" m lagi)")}}else{let W=Ma(L.clientX,L.clientY);W&&Te(W)}}I.addEventListener("pointerup",va),I.addEventListener("pointercancel",va),I.addEventListener("pointerleave",function(){Ge("#tipL").style.display="none"}),I.addEventListener("wheel",function(L){L.preventDefault();let Q=Math.exp(L.deltaY*.001);ne==="dissect"?(ae.user=!0,ae.dist=Dt(ae.dist*Q,6,46)):rt()||ve(Math.exp(L.deltaY*.0012))},{passive:!1}),Ge("#act").addEventListener("click",sl),Ge("#zIn").addEventListener("click",function(){ve(.78)}),Ge("#zOut").addEventListener("click",function(){ve(1.28)}),Ge("#bSnd").addEventListener("click",function(){Be.init(),Be.setEnabled(!Be.enabled);try{localStorage.setItem(Oe,Be.enabled?"1":"0")}catch{}ft(),Be.enabled&&Be.meow(.08,0)}),ft(),Ge("#jump").addEventListener("pointerdown",function(L){L.preventDefault(),ri=!0,Hs=!0}),["pointerup","pointercancel","pointerleave"].forEach(function(L){Ge("#jump").addEventListener(L,function(){Hs=!1})});let R=l.map(function(L){let Q=document.createElement("div");return Q.className="tag",Ge("#tags").appendChild(Q),Q}),Y=new k,te=0,K=0;function Z(L){let Q=Ge("#drops");if(!(!Q||window.matchMedia("(prefers-reduced-motion:reduce)").matches))for(let W=0;W<L;W++){let be=document.createElement("i"),ye=18+Math.random()*46;be.style.width=be.style.height=ye+"px",be.style.left=Math.random()*100+"%",be.style.top=Math.random()*85+"%",be.style.animationDelay=Math.random()*.15+"s",Q.appendChild(be),setTimeout(function(){be.remove()},1900)}}function Ie(L){let Q=(pn.d||pn.arrowright?1:0)-(pn.a||pn.arrowleft?1:0),W=(pn.w||pn.arrowup?1:0)-(pn.s||pn.arrowdown?1:0),be=Dt(Q+wn.x,-1,1),ye=Dt(W+wn.y,-1,1),nt=-Math.sin(le.yaw),mt=-Math.cos(le.yaw),yn=Math.cos(le.yaw),Pt=-Math.sin(le.yaw),Ct=nt*ye+yn*be,Ze=mt*ye+Pt*be,xt=Math.min(1,Math.hypot(Ct,Ze)),Lt=0,qt=jt-fn(B.x,B.z);if(xt>.06){let yt=Math.hypot(Ct,Ze),Ht=Ct/yt,Xt=Ze/yt,Ln=pn.shift||wn.x*wn.x+wn.y*wn.y>.72;B.swim?Lt=(Ln?3.6:2.3)*xt:(Lt=(Ln?8.2:4.6)*xt,qt>0&&(Lt*=1-.55*Dt(qt/1.3,0,1)));let In=B.x+Ht*Lt*L,kn=B.z+Xt*Lt*L,xs=function(Ju,Tg){return Math.hypot(Ju,Tg)<112};xs(In,B.z)&&(B.x=In),xs(B.x,kn)&&(B.z=kn),Fe(B),B.phase+=Lt*L*1.25}let zt=fn(B.x,B.z),an=jt-zt;B.y+=(zt-B.y)*Math.min(1,L*14);let ji=B.x+nt*.55,fr=B.z+mt*.55,Ef=1.35;!B.swim&&an>Ef&&(B.swim=!0,B.ey=Math.max(B.y+1.68+B.jh,jt-.1),ee.splash(ji,fr,46,1.3),z.ripple(B.x,B.z,1),Be.splash(2),Z(9)),B.swim&&an<Ef-.2&&(B.swim=!1,B.jh=0,B.jv=0);let Mg=B.jh>0;if(B.swim){let yt=0;xt>.06&&(yt+=Math.sin(le.pitch)*ye*Lt*1.1),(pn[" "]||Hs)&&(yt+=1.9),(pn.c||pn.control)&&(yt-=1.9),Math.abs(yt)<.05&&(yt+=.32),B.ey=Dt(B.ey+yt*L,zt+.45,jt+.24),ri=!1,B.jh=0,B.jv=0}else ri&&B.jh<=.001&&an<.8&&(B.jv=6.4),ri=!1,(B.jh>0||B.jv>0)&&(B.jv-=20*L,B.jh=Math.max(0,B.jh+B.jv*L),B.jh===0&&(B.jv=0)),Mg&&B.jh===0&&an>.05&&(ee.splash(ji,fr,30,1),z.ripple(B.x,B.z,.9),Be.splash(an>.5?2:1),an>.3&&Z(5));let rl=!B.swim&&an>.03;rl&&!B.wet&&Lt>0&&(ee.splash(ji,fr,10,.6),z.ripple(B.x,B.z,.6),Be.splash(1,.7)),B.wet=rl;let al=Math.floor(B.phase/(Math.PI/2));if(al!==B.step&&(B.step=al,rl&&Lt>.5&&B.jh===0)){let yt=Dt(an/1.2,.15,1);ee.splash(ji+yn*(al%2?.15:-.15),fr+Pt*(al%2?.15:-.15),Math.round(5+yt*10),.35+yt*.6*(Lt/6)),z.ripple(B.x,B.z,.35+yt*.4),Be.splash(0,.5+yt)}B.swim&&Lt>.3&&B.ey>jt-.35&&(B.stroke-=L,B.stroke<=0&&(B.stroke=.8,ee.splash(ji,fr,9,.45),z.ripple(ji,fr,.6),Be.splash(0,.8)));let Af=Math.min(1,Lt/4.6),vg=Math.sin(B.phase*2)*.032*Af,Rf=Math.cos(B.phase)*.018*Af,Pf=B.swim?B.ey+(B.ey>jt-.3?Math.sin(j*1.7)*.05:Math.sin(j*.9)*.03):B.y+1.68+vg*(rl?.5:1)+B.jh;B.eyeS=B.eyeS?B.eyeS+(Pf-B.eyeS)*Math.min(1,L*(B.swim?6:16)):Pf,J.position.set(B.x+Math.cos(le.yaw)*Rf,B.eyeS,B.z-Math.sin(le.yaw)*Rf);let pr=J.position.y<jt-.03&&jt-zt>.05;pr!==B.under&&(B.under=pr,document.body.classList.toggle("underwater",pr),Be.setUnder(pr),pr?(ee.bubbles(B.x+nt*.4,B.eyeS-.1,B.z+mt*.4,14),Be.bubbles(8)):(ee.splash(B.x+nt*.4,B.z+mt*.4,12,.5),Be.splash(1,.6),Z(6))),pr&&(B.bub-=L,B.bub<=0&&(B.bub=Lt>.3?.5:1.6,ee.bubbles(B.x+nt*.7,B.eyeS-.35,B.z+mt*.7,Lt>.3?4:2),Math.random()<.4&&Be.bubbles(2,.03))),ee.update(L,j),J.rotation.set(le.pitch,le.yaw,0),Ee+=(he-Ee)*Math.min(1,L*8);let _g=(66+(Lt>6?5:0))*Ee;le.fov+=(_g-le.fov)*Math.min(1,L*5),Math.abs(J.fov-le.fov)>.02&&(J.fov=le.fov,J.updateProjectionMatrix()),r.forEach(function(yt){let Ht=yt.w;Ht.update(L,j,B);let Xt=l[yt.hi],Ln=Ue[yt.hi];Xt.x=Ht.x,Xt.z=Ht.z,Ln.y=Ht.y,Ln.mk.position.x=Ht.x,Ln.mk.position.z=Ht.z,Ln.ring.position.set(Ht.x,Ht.y+.04,Ht.z);let In=Ht.x-B.x,kn=Ht.z-B.z,xs=Math.hypot(In,kn)||1;yt.callT-=L,yt.callT<=0&&(yt.callT=8+Math.random()*16,xs<14&&!B.under&&Be.call(yt.data.id,.2*Math.max(.15,1-xs/15),(In*Math.cos(le.yaw)-kn*Math.sin(le.yaw))/xs))}),ge.update(L,j,B,J.position.y),a.forEach(function(yt){let Ht=yt.G.fish[0].p,Xt=l[yt.hi],Ln=Ue[yt.hi];Xt.x=Ht.x,Xt.z=Ht.z,Ln.y=Ht.y,yt.hit.position.copy(Ht)});let Sg=B.swim||B.under,zu=1e9,_a=-1;Ue.forEach(function(yt,Ht){let Xt=l[Ht];yt.mk.rotation.y+=L*1.6,yt.mk.position.y=yt.y+Xt.top+(Xt.mkOff!=null?Xt.mkOff:2.2)+Math.sin(j*2+Ht)*(Xt.kind==="animal"?.06:.3);let Ln=1+.1*Math.sin(j*3+Ht);yt.ring.scale.set(Ln,Ln,Ln);let In=Math.hypot(B.x-Xt.x,B.z-Xt.z),kn=R[Ht];if(Xt.needSwim&&!Sg){R[Ht].style.display="none";return}if(In<zu&&In<(Xt.reach||9)&&(zu=In,_a=Ht),Y.set(Xt.x,yt.y+Xt.top*.6,Xt.z).project(J),Y.z<1&&In<(Xt.needSwim?14:60)&&In>(Xt.tagNear||11)){let xs=window.innerWidth,Ju=window.innerHeight;kn.style.display="block",kn.style.transform="translate("+(Y.x*.5+.5)*xs+"px,"+(-Y.y*.5+.5)*Ju+"px) translate(-50%,-100%)",kn.className="tag"+(S.trees[Xt.id]?" done":""),kn.innerHTML=Xt.name+"<small>"+Math.round(In)+" m</small>"}else kn.style.display="none"});let Sa=Ge("#act");if(zu<9&&!rt()){let yt=l[_a],Ht=Ue[_a];Y.set(yt.x,Ht.y+(yt.promptY||1.7),yt.z).project(J);let Xt=window.innerWidth,Ln=window.innerHeight,In=(Y.x*.5+.5)*Xt,kn=(-Y.y*.5+.5)*Ln;Y.z>1&&(In=Xt*.5,kn=Ln*.62),In=Dt(In,110,Xt-110),kn=Dt(kn,100,Ln-170),Sa.style.transform="translate("+In+"px,"+kn+"px) translate(-50%,-50%)",Sa.dataset.i!==String(_a)&&(Sa.dataset.i=_a,Ge("#actName").textContent=yt.name),Sa.classList.add("on")}else Sa.classList.remove("on");if(te+=L,te>.2){te=0;let yt=il(),Ht=l[yt.i];Ge("#near").textContent="Terdekat: "+Ht.name+", "+Math.round(yt.d)+" m"}}function He(){let L=window.innerWidth,Q=window.innerHeight,W=V();P.setPixelRatio(W),P.setSize(L,Q,!1),Je.setSize(L,Q,W),D.setSize(L,Q,W),o.forEach(function(be){be.fx&&be.fx.setSize(L,Q,W)}),J.aspect=L/Q,J.updateProjectionMatrix(),$.aspect=L/Q,L>760?$.setViewOffset(L,Q,Math.min(120,L*.09),0,L,Q):d()?$.setViewOffset(L,Q,0,Math.round(Q*.13),L,Q):$.clearViewOffset(),$.updateProjectionMatrix()}window.addEventListener("resize",He),Ge("#bQual").addEventListener("click",function(){_e(T==="tinggi"?"hemat":"tinggi")}),_e(T),H(),se.update(A,j,.016,{x:B.x,y:B.y+1.6,z:B.z}),xe(),Ge("#loading").classList.add("done"),setTimeout(function(){Ge("#loading").style.display="none"},700),E&&(window.__hi={enter:$e,select:Te,P:B,cam:le,startQuiz:si,openJournal:De,renderer:P,world:O,veg:Xe,sky:se,applyQuality:_e,setTime:function(L){A=L},look:function(L,Q){let W=l[L];Q=Q||11;let be=Math.hypot(W.x,W.z-2)||1;B.x=W.x+(0-W.x)/be*Q,B.z=W.z+(2-W.z)/be*Q,B.y=fn(B.x,B.z),le.yaw=Math.atan2(B.x-W.x,B.z-W.z),le.pitch=.22},getMode:function(){return ne},ds:function(){return ae},fishW:ge});let Le=performance.now(),Ne=!1;function Ye(L){if(j+=L,ne==="world")A=(A+L/240)%1,Ie(L),se.update(A,j,L,{x:B.x,y:B.y+1.6,z:B.z},B.under),xe(),Xe.update(B,j,L),z.update(j),Be.update(L,{day:se.day,world:!0,under:B.under}),Je.render(L);else{if(et.update(L,j,Rt,Ve),p()){if(K+=L,K>.15){K=0;let Q=ae.status;Ge("#gasCap").textContent=(Q==="melayang"?"Ikan melayang: daya apung seimbang dengan berat tubuh.":Q==="tenggelam"?"Ikan tenggelam: gas di gelembung renang kurang.":"Ikan naik: gas di gelembung renang terlalu banyak.")+(ae.counter===!1?" Aliran searah: darah dan air sejalan, oksigen yang terserap jauh lebih sedikit.":" Aliran berlawanan arah: darah (merah) melawan arus air (biru), oksigen terserap maksimal.")}ae.buoyOk&&!S.found[g("buoy")]&&(S.found[g("buoy")]=1,q(30,"ikan melayang seimbang"),x())}Be.update(L,{day:se.day,world:!1,under:!1,catSub:h==="kucing"}),re().render(L)}}let st=0,_t=0,qe=0,St=!1;function rn(L){St||T!=="tinggi"||ne!=="world"||E||(qe+=L,!(qe<5)&&(st+=L,_t++,st>=4&&(St=!0,st/_t>.034&&(_e("hemat"),F("Grafik diturunkan ke Hemat agar tetap lancar. Ganti lewat tombol Grafik.")))))}function Bt(L){let Q=Math.min(.05,(L-Le)/1e3);Le=L,Ne||(Ye(Q),rn(Q)),requestAnimationFrame(Bt)}E&&(window.__hi.pause=function(L){Ne=L!==!1},window.__hi.step=Ye),requestAnimationFrame(Bt)})().catch(function(i){console.error(i);let e=document.getElementById("loadTxt");e&&(e.textContent="Gagal memuat: "+(i&&i.message||i))});
