var Zg=Object.defineProperty;var eb=(i,e,t)=>e in i?Zg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ps=(i,e,t)=>eb(i,typeof e!="symbol"?e+"":e,t);var Np=0,jh=1,Up=2;var ua=1,Hp=2,or=3,$i=0,kn=1,Dt=2,Nn=0,lr=1,wo=2,Wh=3,Kh=4,Tc=5;var Ti=100,Bp=101,Gp=102,Op=103,qp=104,ha=200,Xp=201,Vp=202,Yp=203,Zh=204,ed=205,Lo=206,$p=207,ko=208,Qp=209,zp=210,Jp=211,jp=212,Wp=213,Kp=214,Jl=0,jl=1,Wl=2,Va=3,Kl=4,Zl=5,ec=6,tc=7,Io=0,Zp=1,e0=2,Qi=0,Fo=1,Do=2,Co=3,da=4,No=5,Uo=6,Ho=7,Dh="attached",t0="detached",td=300,fa=301,cr=302,Ec=303,Ac=304,Jt=1e3,vi=1001,Ya=1002,on=1003,Rc=1004;var pa=1005;var Pn=1006,ur=1007;var ci=1008;var jn=1009,nd=1010,id=1011,hr=1012,Pc=1013,Ui=1014,bi=1015,gn=1016,wc=1017,Lc=1018,ys=1020,sd=35902,ad=35899,rd=1021,od=1022,ui=1023,us=1026,Hi=1027,kc=1028,Ic=1029,Xs=1030,Fc=1031;var Dc=1033,Bo=33776,Go=33777,Oo=33778,qo=33779,Cc=35840,Nc=35841,Uc=35842,Hc=35843,Bc=36196,Gc=37492,Oc=37496,qc=37488,Xc=37489,Xo=37490,Vc=37491,Yc=37808,$c=37809,Qc=37810,zc=37811,Jc=37812,jc=37813,Wc=37814,Kc=37815,Zc=37816,eu=37817,tu=37818,nu=37819,iu=37820,su=37821,au=36492,ru=36494,ou=36495,lu=36283,cu=36284,Vo=36285,uu=36286;var ia=2300,sa=2301,Ql=2302,Ch=2303,Nh=2400,Uh=2401,Hh=2402,n0=2500;var ld=0,Yo=1,dr=2,i0=3200,cd=3201;var ma=0,s0=1,Ms="",ut="srgb",wn="srgb-linear",Qr="linear",Bt="srgb";var zl=7680;var a0=519,r0=512,o0=513,l0=514,ud=515,c0=516,u0=517,hd=518,dd=519,fd=35044;var pd="300 es",_i=2e3,$a=2001;function tb(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function h0(){let i=Qa("canvas");return i.style.display="block",i}var qf={},za=null;function zr(...i){let e="THREE."+i.shift();za?za("log",e,...i):console.log(e,...i)}function d0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=d0(i);let e="THREE."+i.shift();if(za)za("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=d0(i);let e="THREE."+i.shift();if(za)za("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function na(...i){let e=i.join(" ");e in qf||(qf[e]=!0,We(...i))}function f0(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}var p0={[Jl]:Jl,[Wl]:ec,[Kl]:Kl,[Va]:Zl,[jl]:jl,[ec]:Wl,[tc]:tc,[Zl]:Va},Xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}},$n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xf=1234567,Xr=Math.PI/180,aa=180/Math.PI;function Bi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($n[i&255]+$n[i>>8&255]+$n[i>>16&255]+$n[i>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[t&63|128]+$n[t>>8&255]+"-"+$n[t>>16&255]+$n[t>>24&255]+$n[n&255]+$n[n>>8&255]+$n[n>>16&255]+$n[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function md(i,e){return(i%e+e)%e}function ib(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function sb(i,e,t){return i!==e?(t-i)/(e-i):0}function Vr(i,e,t){return(1-t)*i+t*e}function ab(i,e,t,n){return Vr(i,e,1-Math.exp(-t*n))}function rb(i,e=1){return e-Math.abs(md(i,e*2)-e)}function ob(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function cb(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ub(i,e){return i+Math.random()*(e-i)}function hb(i){return i*(.5-Math.random())}function db(i){i!==void 0&&(Xf=i);let e=Xf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fb(i){return i*Xr}function pb(i){return i*aa}function mb(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function gb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bb(i,e,t,n,s){let a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),u=r((e+n)/2),h=a((e-n)/2),d=r((e-n)/2),f=a((n-e)/2),p=r((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*u,o*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hu(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function bd(i,e){if(e.constructor===Float32Array)return i;let t=hu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function xd(i,e){if(e.constructor===Float32Array)return i;let t=hu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var du={DEG2RAD:Xr,RAD2DEG:aa,generateUUID:Bi,clamp:Pt,euclideanModulo:md,mapLinear:ib,inverseLerp:sb,lerp:Vr,damp:ab,pingpong:rb,smoothstep:ob,smootherstep:lb,randInt:cb,randFloat:ub,randFloatSpread:hb,seededRandom:db,degToRad:fb,radToDeg:pb,isPowerOfTwo:mb,ceilPowerOfTwo:gb,floorPowerOfTwo:gd,setQuaternionFromProperEuler:bb,normalize:xd,denormalize:bd},Td=class Td{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Td.prototype.isVector2=!0;var me=Td,_t=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=a[r+0],f=a[r+1],p=a[r+2],b=a[r+3];if(h!==b||l!==d||c!==f||u!==p){let g=l*d+c*f+u*p+h*b;g<0&&(d=-d,f=-f,p=-p,b=-b,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),_=Math.sin(y);m=Math.sin(m*y)/_,o=Math.sin(o*y)/_,l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+b*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+b*o;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,a,r){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=a[r],d=a[r+1],f=a[r+2],p=a[r+3];return e[t]=o*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-o*f,e[t+2]=c*p+u*f+o*d-l*h,e[t+3]=u*p-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(a/2),d=l(n/2),f=l(s/2),p=l(a/2);switch(r){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-n*c,this._z=a*u+r*c+n*l-s*o,this._w=r*u-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ed=class Ed{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),u=2*(o*t-a*s),h=2*(a*n-r*t);return this.x=t+l*c+r*h-o*u,this.y=n+l*u+o*c-a*h,this.z=s+l*h+a*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ed.prototype.isVector3=!0;var C=Ed,oh=new C,Vf=new _t,Ad=class Ad{constructor(e,t,n,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],b=s[0],g=s[3],m=s[6],y=s[1],_=s[4],v=s[7],T=s[2],E=s[5],M=s[8];return a[0]=r*b+o*y+l*T,a[3]=r*g+o*_+l*E,a[6]=r*m+o*v+l*M,a[1]=c*b+u*y+h*T,a[4]=c*g+u*_+h*E,a[7]=c*m+u*v+h*M,a[2]=d*b+f*y+p*T,a[5]=d*g+f*_+p*E,a[8]=d*m+f*v+p*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*a*u+n*o*l+s*a*c-s*r*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*r-o*c,d=o*l-u*a,f=c*a-r*l,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return e[0]=h*b,e[1]=(s*c-u*n)*b,e[2]=(o*n-s*r)*b,e[3]=d*b,e[4]=(u*t-s*l)*b,e[5]=(s*a-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(r*t-n*a)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return na("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lh.makeScale(e,t)),this}rotate(e){return na("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lh.makeRotation(-e)),this}translate(e,t){return na("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ad.prototype.isMatrix3=!0;var ft=Ad,lh=new ft,Yf=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$f=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xb(){let i={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Bt&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Bt&&(s.r=Xa(s.r),s.g=Xa(s.g),s.b=Xa(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ms?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wn]:{primaries:e,whitePoint:n,transfer:Qr,toXYZ:Yf,fromXYZ:$f,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:Yf,fromXYZ:$f,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),i}var xt=xb();function cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wa,nc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wa===void 0&&(wa=Qa("canvas")),wa.width=e.width,wa.height=e.height;let s=wa.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=wa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=cs(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yb=0,Ja=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ch(s[r].image)):a.push(ch(s[r]))}else a=ch(s);n.url=a}return t||(e.images[this.uuid]=n),n}};function ch(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var Mb=0,uh=new C,Ln=class i extends Xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vi,s=vi,a=Pn,r=ci,o=ui,l=jn,c=i.DEFAULT_ANISOTROPY,u=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Bi(),this.name="",this.source=new Ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jt:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jt:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=td;Ln.DEFAULT_ANISOTROPY=1;var Rd=class Rd{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,v=(f+1)/2,T=(m+1)/2,E=(u+d)/4,M=(h+b)/4,x=(p+g)/4;return _>v&&_>T?_<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(_),s=E/n,a=M/n):v>T?v<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),n=E/s,a=x/s):T<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),n=M/a,s=x/a),this.set(n,s,a,t),this}let y=Math.sqrt((g-p)*(g-p)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-b)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rd.prototype.isVector4=!0;var Ut=Rd,ic=class extends Xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];let s=n.count;for(let a=0;a<s;a++)this.textures[a]=new Ln({width:e,height:t,depth:n.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ja(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jr=class extends Ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sc=class extends Ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Sc=class Sc{constructor(e,t,n,s,a,r,o,l,c,u,h,d,f,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,u,h,d,f,p,b,g)}set(e,t,n,s,a,r,o,l,c,u,h,d,f,p,b,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/La.setFromMatrixColumn(e,0).length(),a=1/La.setFromMatrixColumn(e,1).length(),r=1/La.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){let d=r*u,f=r*h,p=o*u,b=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=p+f*c,t[10]=r*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,b=c*h;t[0]=d+b*o,t[4]=p*o-f,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=f*o-p,t[6]=b+d*o,t[10]=r*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,b=c*h;t[0]=d-b*o,t[4]=-r*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=r*u,t[9]=b-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let d=r*u,f=r*h,p=o*u,b=o*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+b,t[1]=l*h,t[5]=b*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let d=r*l,f=r*c,p=o*l,b=o*c;t[0]=l*u,t[4]=b-d*h,t[8]=p*h+f,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-b*h}else if(e.order==="XZY"){let d=r*l,f=r*c,p=o*l,b=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+b,t[5]=r*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vb,e,_b)}lookAt(e,t,n){let s=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),ws.crossVectors(n,di),ws.lengthSq()===0&&(Math.abs(n.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),ws.crossVectors(n,di)),ws.normalize(),Ml.crossVectors(di,ws),s[0]=ws.x,s[4]=Ml.x,s[8]=di.x,s[1]=ws.y,s[5]=Ml.y,s[9]=di.y,s[2]=ws.z,s[6]=Ml.z,s[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],b=n[6],g=n[10],m=n[14],y=n[3],_=n[7],v=n[11],T=n[15],E=s[0],M=s[4],x=s[8],F=s[12],I=s[1],G=s[5],X=s[9],w=s[13],S=s[2],D=s[6],A=s[10],k=s[14],O=s[3],H=s[7],N=s[11],Y=s[15];return a[0]=r*E+o*I+l*S+c*O,a[4]=r*M+o*G+l*D+c*H,a[8]=r*x+o*X+l*A+c*N,a[12]=r*F+o*w+l*k+c*Y,a[1]=u*E+h*I+d*S+f*O,a[5]=u*M+h*G+d*D+f*H,a[9]=u*x+h*X+d*A+f*N,a[13]=u*F+h*w+d*k+f*Y,a[2]=p*E+b*I+g*S+m*O,a[6]=p*M+b*G+g*D+m*H,a[10]=p*x+b*X+g*A+m*N,a[14]=p*F+b*w+g*k+m*Y,a[3]=y*E+_*I+v*S+T*O,a[7]=y*M+_*G+v*D+T*H,a[11]=y*x+_*X+v*A+T*N,a[15]=y*F+_*w+v*k+T*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],b=e[7],g=e[11],m=e[15],y=l*f-c*d,_=o*f-c*h,v=o*d-l*h,T=r*f-c*u,E=r*d-l*u,M=r*h-o*u;return t*(b*y-g*_+m*v)-n*(p*y-g*T+m*E)+s*(p*_-b*T+m*M)-a*(p*v-b*E+g*M)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(r*u-o*c)-n*(a*u-o*l)+s*(a*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],b=e[13],g=e[14],m=e[15],y=t*o-n*r,_=t*l-s*r,v=t*c-a*r,T=n*l-s*o,E=n*c-a*o,M=s*c-a*l,x=u*b-h*p,F=u*g-d*p,I=u*m-f*p,G=h*g-d*b,X=h*m-f*b,w=d*m-f*g,S=y*w-_*X+v*G+T*I-E*F+M*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/S;return e[0]=(o*w-l*X+c*G)*D,e[1]=(s*X-n*w-a*G)*D,e[2]=(b*M-g*E+m*T)*D,e[3]=(d*E-h*M-f*T)*D,e[4]=(l*I-r*w-c*F)*D,e[5]=(t*w-s*I+a*F)*D,e[6]=(g*v-p*M-m*_)*D,e[7]=(u*M-d*v+f*_)*D,e[8]=(r*X-o*I+c*x)*D,e[9]=(n*I-t*X-a*x)*D,e[10]=(p*E-b*v+m*y)*D,e[11]=(h*v-u*E-f*y)*D,e[12]=(o*F-r*G-l*x)*D,e[13]=(t*G-n*F+s*x)*D,e[14]=(b*_-p*T-g*y)*D,e[15]=(u*T-h*_+d*y)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,u=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,u=r+r,h=o+o,d=a*c,f=a*u,p=a*h,b=r*u,g=r*h,m=o*h,y=l*c,_=l*u,v=l*h,T=n.x,E=n.y,M=n.z;return s[0]=(1-(b+m))*T,s[1]=(f+v)*T,s[2]=(p-_)*T,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+m))*E,s[6]=(g+y)*E,s[7]=0,s[8]=(p+_)*M,s[9]=(g-y)*M,s[10]=(1-(d+b))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=La.set(s[0],s[1],s[2]).length(),o=La.set(s[4],s[5],s[6]).length(),l=La.set(s[8],s[9],s[10]).length();a<0&&(r=-r),wi.copy(this);let c=1/r,u=1/o,h=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=u,wi.elements[5]*=u,wi.elements[6]*=u,wi.elements[8]*=h,wi.elements[9]*=h,wi.elements[10]*=h,t.setFromRotationMatrix(wi),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,a,r,o=_i,l=!1){let c=this.elements,u=2*a/(t-e),h=2*a/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,b;if(l)p=a/(r-a),b=r*a/(r-a);else if(o===_i)p=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===$a)p=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=_i,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,b;if(l)p=1/(r-a),b=r/(r-a);else if(o===_i)p=-2/(r-a),b=-(r+a)/(r-a);else if(o===$a)p=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Sc.prototype.isMatrix4=!0;var Je=Sc,La=new C,wi=new Je,vb=new C(0,0,0),_b=new C(1,1,1),ws=new C,Ml=new C,di=new C,Qf=new Je,zf=new _t,jt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zf.setFromEuler(this),this.setFromQuaternion(zf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jt.DEFAULT_ORDER="XYZ";var ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sb=0,Jf=new C,ka=new _t,is=new Je,vl=new C,Fr=new C,Tb=new C,Eb=new _t,jf=new C(1,0,0),Wf=new C(0,1,0),Kf=new C(0,0,1),Zf={type:"added"},Ab={type:"removed"},Ia={type:"childadded",child:null},hh={type:"childremoved",child:null},Vt=class i extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new jt,n=new _t,s=new C(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new ft}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ka.setFromAxisAngle(e,t),this.quaternion.multiply(ka),this}rotateOnWorldAxis(e,t){return ka.setFromAxisAngle(e,t),this.quaternion.premultiply(ka),this}rotateX(e){return this.rotateOnAxis(jf,e)}rotateY(e){return this.rotateOnAxis(Wf,e)}rotateZ(e){return this.rotateOnAxis(Kf,e)}translateOnAxis(e,t){return Jf.copy(e).applyQuaternion(this.quaternion),this.position.add(Jf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jf,e)}translateY(e){return this.translateOnAxis(Wf,e)}translateZ(e){return this.translateOnAxis(Kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vl.copy(e):vl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Fr,vl,this.up):is.lookAt(vl,Fr,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),ka.setFromRotationMatrix(is),this.quaternion.premultiply(ka.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zf),Ia.child=e,this.dispatchEvent(Ia),Ia.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ab),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zf),Ia.child=e,this.dispatchEvent(Ia),Ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,Tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Eb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),f=r(e.animations),p=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new C(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rb={type:"move"},Wa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},_l={h:0,s:0,l:0};function dh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var he=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=md(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=dh(r,a,e+1/3),this.g=dh(r,a,e),this.b=dh(r,a,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=ut){function n(a){a!==void 0&&parseFloat(a)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let n=m0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return xt.workingToColorSpace(Qn.copy(this),e),Math.round(Pt(Qn.r*255,0,255))*65536+Math.round(Pt(Qn.g*255,0,255))*256+Math.round(Pt(Qn.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Qn.copy(this),t);let n=Qn.r,s=Qn.g,a=Qn.b,r=Math.max(n,s,a),o=Math.min(n,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case n:l=(s-a)/h+(s<a?6:0);break;case s:l=(a-n)/h+2;break;case a:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=ut){xt.workingToColorSpace(Qn.copy(this),e);let t=Qn.r,n=Qn.g,s=Qn.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(_l);let n=Vr(Ls.h,_l.h,t),s=Vr(Ls.s,_l.s,t),a=Vr(Ls.l,_l.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new he;he.NAMES=m0;var jr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Gn=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Li=new C,ss=new C,fh=new C,as=new C,Fa=new C,Da=new C,ep=new C,ph=new C,mh=new C,gh=new C,bh=new Ut,xh=new Ut,yh=new Ut,Cs=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Li.subVectors(e,t),s.cross(Li);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Li.subVectors(s,t),ss.subVectors(n,t),fh.subVectors(e,t);let r=Li.dot(Li),o=Li.dot(ss),l=Li.dot(fh),c=ss.dot(ss),u=ss.dot(fh),h=r*c-o*o;if(h===0)return a.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,p=(r*u-o*l)*d;return a.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,as)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,as.x),l.addScaledVector(r,as.y),l.addScaledVector(o,as.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return bh.setScalar(0),xh.setScalar(0),yh.setScalar(0),bh.fromBufferAttribute(e,t),xh.fromBufferAttribute(e,n),yh.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(bh,a.x),r.addScaledVector(xh,a.y),r.addScaledVector(yh,a.z),r}static isFrontFacing(e,t,n,s){return Li.subVectors(n,t),ss.subVectors(e,t),Li.cross(ss).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Li.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,a=this.c,r,o;Fa.subVectors(s,n),Da.subVectors(a,n),ph.subVectors(e,n);let l=Fa.dot(ph),c=Da.dot(ph);if(l<=0&&c<=0)return t.copy(n);mh.subVectors(e,s);let u=Fa.dot(mh),h=Da.dot(mh);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return r=l/(l-u),t.copy(n).addScaledVector(Fa,r);gh.subVectors(e,a);let f=Fa.dot(gh),p=Da.dot(gh);if(p>=0&&f<=p)return t.copy(a);let b=f*c-l*p;if(b<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Da,o);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return ep.subVectors(a,s),o=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(ep,o);let m=1/(g+b+d);return r=b*m,o=d*m,t.copy(n).addScaledVector(Fa,r).addScaledVector(Da,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ki):ki.fromBufferAttribute(a,r),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sl.copy(n.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}let s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Tl.subVectors(this.max,Dr),Ca.subVectors(e.a,Dr),Na.subVectors(e.b,Dr),Ua.subVectors(e.c,Dr),ks.subVectors(Na,Ca),Is.subVectors(Ua,Na),Ks.subVectors(Ca,Ua);let t=[0,-ks.z,ks.y,0,-Is.z,Is.y,0,-Ks.z,Ks.y,ks.z,0,-ks.x,Is.z,0,-Is.x,Ks.z,0,-Ks.x,-ks.y,ks.x,0,-Is.y,Is.x,0,-Ks.y,Ks.x,0];return!Mh(t,Ca,Na,Ua,Tl)||(t=[1,0,0,0,1,0,0,0,1],!Mh(t,Ca,Na,Ua,Tl))?!1:(El.crossVectors(ks,Is),t=[El.x,El.y,El.z],Mh(t,Ca,Na,Ua,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rs=[new C,new C,new C,new C,new C,new C,new C,new C],ki=new C,Sl=new zn,Ca=new C,Na=new C,Ua=new C,ks=new C,Is=new C,Ks=new C,Dr=new C,Tl=new C,El=new C,Zs=new C;function Mh(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Zs.fromArray(i,a);let o=s.x*Math.abs(Zs.x)+s.y*Math.abs(Zs.y)+s.z*Math.abs(Zs.z),l=e.dot(Zs),c=t.dot(Zs),u=n.dot(Zs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var vn=new C,Al=new me,Pb=0,ot=class extends Xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fd,this.updateRanges=[],this.gpuType=bi,this.version=0,this._normalizationScale=e!==void 0?hu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):bd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):xd(e,this.array)}};var Wr=class extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Kr=class extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},wb=new zn,Cr=new C,vh=new C,oi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wb.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(vh)),this.expandByPoint(Cr.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lb=0,Mi=new Je,_h=new Vt,Ha=new C,fi=new zn,Nr=new zn,Dn=new C,lt=class i extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tb(e)?Kr:Wr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new ft().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,n){return Mi.makeTranslation(e,t,n),this.applyMatrix4(Mi),this}scale(e,t,n){return Mi.makeScale(e,t,n),this.applyMatrix4(Mi),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ha).negate(),this.translate(Ha.x,Ha.y,Ha.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,a=e.length;s<a;s++){let r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let a=t[n];fi.setFromBufferAttribute(a),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){let o=t[a];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dn.addVectors(fi.min,Nr.min),fi.expandByPoint(Dn),Dn.addVectors(fi.max,Nr.max),fi.expandByPoint(Dn)):(fi.expandByPoint(Nr.min),fi.expandByPoint(Nr.max))}fi.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Dn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Dn));if(t)for(let a=0,r=t.length;a<r;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dn.fromBufferAttribute(o,c),l&&(Ha.fromBufferAttribute(e,c),Dn.add(Ha)),s=Math.max(s,n.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,a=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new C,l[F]=new C;let u=new C,h=new C,d=new C,f=new me,p=new me,b=new me,g=new C,m=new C;function y(F,I,G){c[F]=c[I]=c[G]=1,u.fromBufferAttribute(n,F),h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,G),f.fromBufferAttribute(a,F),p.fromBufferAttribute(a,I),b.fromBufferAttribute(a,G),h.sub(u),d.sub(u),p.sub(f),b.sub(f);let X=1/(p.x*b.y-b.x*p.y);isFinite(X)&&(g.copy(h).multiplyScalar(b.y).addScaledVector(d,-p.y).multiplyScalar(X),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-b.x).multiplyScalar(X),o[F].add(g),o[I].add(g),o[G].add(g),l[F].add(m),l[I].add(m),l[G].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,I=_.length;F<I;++F){let G=_[F],X=G.start,w=G.count;for(let S=X,D=X+w;S<D;S+=3)y(e.getX(S+0),e.getX(S+1),e.getX(S+2))}let v=new C,T=new C,E=new C,M=new C;function x(F){E.fromBufferAttribute(s,F),M.copy(E);let I=o[F];v.copy(I),v.sub(E.multiplyScalar(E.dot(I))).normalize(),T.crossVectors(M,I);let X=T.dot(l[F])<0?-1:1;r.setXYZW(F,v.x,v.y,v.z,X)}for(let F=0,I=n.count;F<I;++F)c[F]&&x(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,a=new C,r=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,b),r.fromBufferAttribute(t,g),u.subVectors(r,a),h.subVectors(s,a),u.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,a),h.subVectors(s,a),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dn.fromBufferAttribute(e,t),Dn.normalize(),e.setXYZ(t,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new ot(d,u,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let a=e.morphAttributes;for(let c in a){let u=[],h=a[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,u=r.length;c<u;c++){let h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ns=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fd,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function tp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Bi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var ei=new C,Us=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?hu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),a=this._normalize(a)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):bd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):xd(e,this.data.array)}},Sh=new C,kb=new C,Ib=new ft,Ii=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Sh.subVectors(n,t).cross(kb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Sh),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ib.getNormalMatrix(e),s=this.coplanarPoint(Sh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fb=0,On=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=lr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=ed,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zl,this.stencilZFail=zl,this.stencilZPass=zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(t){let a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new he().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ii().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var os=new C,Th=new C,Rl=new C,Pl=new C,Hs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,os)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=os.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(os.copy(this.origin).addScaledVector(this.direction,t),os.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Th.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Pl.copy(this.origin).sub(Th);let a=e.distanceTo(t)*.5,r=-this.direction.dot(Rl),o=Pl.dot(this.direction),l=-Pl.dot(Rl),c=Pl.lengthSq(),u=Math.abs(1-r*r),h,d,f,p;if(u>0)if(h=r*l-o,d=r*o-l,p=a*u,h>=0)if(d>=-p)if(d<=p){let b=1/u;h*=b,d*=b,f=h*(h+r*d+2*o)+d*(r*h+d+2*l)+c}else d=a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d=-a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-r*a+o)),d=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(h=Math.max(0,-(r*a+o)),d=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c);else d=r>0?-a:a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Th).addScaledVector(Rl,d),f}intersectSphere(e,t){if(e.radius<0)return null;os.subVectors(e.center,this.origin);let n=os.dot(this.direction),s=os.dot(os)-n*n,a=e.radius*e.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,os)!==null}intersectTriangle(e,t,n,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-r.x,d=e.y-r.y,f=e.z-r.z,p=t.x-r.x,b=t.y-r.y,g=t.z-r.z,m=n.x-r.x,y=n.y-r.y,_=n.z-r.z,v=Math.abs(l),T=Math.abs(c),E=Math.abs(u),M,x,F,I,G,X,w,S,D,A,k,O;if(v>=T&&v>=E?(F=l,X=h,D=p,O=m,l>=0?(M=c,x=u,I=d,G=f,w=b,S=g,A=y,k=_):(M=u,x=c,I=f,G=d,w=g,S=b,A=_,k=y)):T>=E?(F=c,X=d,D=b,O=y,c>=0?(M=u,x=l,I=f,G=h,w=g,S=p,A=_,k=m):(M=l,x=u,I=h,G=f,w=p,S=g,A=m,k=_)):(F=u,X=f,D=g,O=_,u>=0?(M=l,x=c,I=h,G=d,w=p,S=b,A=m,k=y):(M=c,x=l,I=d,G=h,w=b,S=p,A=y,k=m)),F===0)return null;let H=M/F,N=x/F,Y=1/F,q=I-H*X,z=G-N*X,U=w-H*D,J=S-N*D,Z=A-H*O,ae=k-N*O,oe=Z*J-ae*U,ge=q*ae-z*Z,Se=U*z-J*q;if(s){if(oe<0||ge<0||Se<0)return null}else if((oe<0||ge<0||Se<0)&&(oe>0||ge>0||Se>0))return null;let Ue=oe+ge+Se;if(Ue===0)return null;let Ge=Y*(oe*X+ge*D+Se*O);return(Ue>0?Ge<0:Ge>0)?null:this.at(Ge/Ue,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},np=new Je,ea=new Hs,wl=new oi,ip=new C,Ll=new C,kl=new C,Il=new C,Eh=new C,Fl=new C,sp=new C,Dl=new C,ve=class extends Vt{constructor(e=new lt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){Fl.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],h=a[l];u!==0&&(Eh.fromBufferAttribute(h,e),r?Fl.addScaledVector(Eh,u):Fl.addScaledVector(Eh.sub(t),u))}t.add(Fl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(a),ea.copy(e.ray).recast(e.near),!(wl.containsPoint(ea.origin)===!1&&(ea.intersectSphere(wl,ip)===null||ea.origin.distanceToSquared(ip)>(e.far-e.near)**2))&&(np.copy(a).invert(),ea.copy(e.ray).applyMatrix4(np),!(n.boundingBox!==null&&ea.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ea)))}_computeIntersections(e,t,n){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,b=d.length;p<b;p++){let g=d[p],m=r[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,T=_;v<T;v+=3){let E=o.getX(v),M=o.getX(v+1),x=o.getX(v+2);s=Cl(this,m,e,n,c,u,h,E,M,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=p,m=b;g<m;g+=3){let y=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);s=Cl(this,r,e,n,c,u,h,y,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,b=d.length;p<b;p++){let g=d[p],m=r[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,T=_;v<T;v+=3){let E=v,M=v+1,x=v+2;s=Cl(this,m,e,n,c,u,h,E,M,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=p,m=b;g<m;g+=3){let y=g,_=g+1,v=g+2;s=Cl(this,r,e,n,c,u,h,y,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Db(i,e,t,n,s,a,r,o){let l;if(e.side===kn?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===$i,o),l===null)return null;Dl.copy(o),Dl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Dl);return c<t.near||c>t.far?null:{distance:c,point:Dl.clone(),object:i}}function Cl(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,Ll),i.getVertexPosition(l,kl),i.getVertexPosition(c,Il);let u=Db(i,e,t,n,Ll,kl,Il,sp);if(u){let h=new C;Cs.getBarycoord(sp,Ll,kl,Il,h),s&&(u.uv=Cs.getInterpolatedAttribute(s,o,l,c,h,new me)),a&&(u.uv1=Cs.getInterpolatedAttribute(a,o,l,c,h,new me)),r&&(u.normal=Cs.getInterpolatedAttribute(r,o,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};Cs.getNormal(Ll,kl,Il,d.normal),u.face=d,u.barycoord=h}return u}var Ur=new Ut,ap=new Ut,rp=new Ut,Cb=new Ut,op=new Je,Nl=new C,Ah=new oi,lp=new Je,Rh=new Hs,Zr=class extends ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dh,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nl),this.boundingBox.expandByPoint(Nl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nl),this.boundingSphere.expandByPoint(Nl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ah.copy(this.boundingSphere),Ah.applyMatrix4(s),e.ray.intersectsSphere(Ah)!==!1&&(lp.copy(s).invert(),Rh.copy(e.ray).applyMatrix4(lp),!(this.boundingBox!==null&&Rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===t0?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ap.fromBufferAttribute(s.attributes.skinIndex,e),rp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ur.copy(t),t.set(0,0,0,0)):(Ur.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ur.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){let r=rp.getComponent(a);if(r!==0){let o=ap.getComponent(a);op.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cb.copy(Ur).applyMatrix4(op),r)}}return t.isVector4&&(t.w=Ur.w),t.applyMatrix4(this.bindMatrixInverse)}},Ka=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Vi=class extends Ln{constructor(e=null,t=1,n=1,s,a,r,o,l,c=on,u=on,h,d){super(null,r,o,l,c,u,s,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cp=new Je,Nb=new Je,eo=class i{constructor(e=[],t=[]){this.uuid=Bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,r=e.length;a<r;a++){let o=e[a]?e[a].matrixWorld:Nb;cp.multiplyMatrices(o,t[a]),cp.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Vi(t,e,e,ui,bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let a=e.bones[n],r=t[a];r===void 0&&(We("Skeleton: No bone found with UUID:",a),r=new Ka),this.bones.push(r),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){let r=t[s];e.bones.push(r.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Fi=class extends ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ba=new Je,up=new Je,Ul=[],hp=new zn,Ub=new Je,Hr=new ve,Br=new oi,yn=class extends ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ub)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ba),hp.copy(e.boundingBox).applyMatrix4(Ba),this.boundingBox.union(hp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ba),Br.copy(e.boundingSphere).applyMatrix4(Ba),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),e.ray.intersectsSphere(Br)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Ba),up.multiplyMatrices(n,Ba),Hr.matrixWorld=up,Hr.raycast(e,Ul);for(let r=0,o=Ul.length;r<o;r++){let l=Ul[r];l.instanceId=a,l.object=this,t.push(l)}Ul.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vi(new Float32Array(s*this.count),s,this.count,kc,bi));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<n.length;c++)r+=n[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*e;return a[l]=o,a.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ta=new oi,Hb=new me(.5,.5),Hl=new C,Bs=class{constructor(e=new Ii,t=new Ii,n=new Ii,s=new Ii,a=new Ii,r=new Ii){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i,n=!1){let s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],h=a[5],d=a[6],f=a[7],p=a[8],b=a[9],g=a[10],m=a[11],y=a[12],_=a[13],v=a[14],T=a[15];if(s[0].setComponents(c-r,f-u,m-p,T-y).normalize(),s[1].setComponents(c+r,f+u,m+p,T+y).normalize(),s[2].setComponents(c+o,f+h,m+b,T+_).normalize(),s[3].setComponents(c-o,f-h,m-b,T-_).normalize(),n)s[4].setComponents(l,d,g,v).normalize(),s[5].setComponents(c-l,f-d,m-g,T-v).normalize();else if(s[4].setComponents(c-l,f-d,m-g,T-v).normalize(),t===_i)s[5].setComponents(c+l,f+d,m+g,T+v).normalize();else if(t===$a)s[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ta.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ta.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ta)}intersectsSprite(e){ta.center.set(0,0,0);let t=Hb.distanceTo(e.center);return ta.radius=.7071067811865476+t,ta.applyMatrix4(e.matrixWorld),this.intersectsSphere(ta)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Hl.x=s.normal.x>0?e.max.x:e.min.x,Hl.y=s.normal.y>0?e.max.y:e.min.y,Hl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},dp=new Je,ac=class i{constructor(){this.coordinateSystem=_i,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let a=t[s];dp.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),n[s]===void 0&&(n[s]=new Bs),n[s].setFromProjectionMatrix(dp,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Bs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Gs=class extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},rc=new C,oc=new C,fp=new Je,Gr=new Hs,Bl=new oi,Ph=new C,pp=new C,ra=class extends Vt{constructor(e=new lt,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)rc.fromBufferAttribute(t,s-1),oc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=rc.distanceTo(oc);e.setAttribute("lineDistance",new tt(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(s),Bl.radius+=a,e.ray.intersectsSphere(Bl)===!1)return;fp.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(fp);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let b=f,g=p-1;b<g;b+=c){let m=u.getX(b),y=u.getX(b+1),_=Gl(this,e,Gr,l,m,y,b);_&&t.push(_)}if(this.isLineLoop){let b=u.getX(p-1),g=u.getX(f),m=Gl(this,e,Gr,l,b,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let b=f,g=p-1;b<g;b+=c){let m=Gl(this,e,Gr,l,b,b+1,b);m&&t.push(m)}if(this.isLineLoop){let b=Gl(this,e,Gr,l,p-1,f,p-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Gl(i,e,t,n,s,a,r){let o=i.geometry.attributes.position;if(rc.fromBufferAttribute(o,s),oc.fromBufferAttribute(o,a),t.distanceSqToSegment(rc,oc,Ph,pp)>n)return;Ph.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ph);if(!(c<e.near||c>e.far))return{distance:c,point:pp.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var mp=new C,gp=new C,oa=class extends ra{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)mp.fromBufferAttribute(t,s),gp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mp.distanceTo(gp);e.setAttribute("lineDistance",new tt(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},to=class extends ra{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Cn=class extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bp=new Je,Bh=new Hs,Ol=new oi,ql=new C,qn=class extends Vt{constructor(e=new lt,t=new Cn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ol.copy(n.boundingSphere),Ol.applyMatrix4(s),Ol.radius+=a,e.ray.intersectsSphere(Ol)===!1)return;bp.copy(s).invert(),Bh.copy(e.ray).applyMatrix4(bp);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let p=d,b=f;p<b;p++){let g=c.getX(p);ql.fromBufferAttribute(h,g),xp(ql,g,l,s,e,t,this)}}else{let d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let p=d,b=f;p<b;p++)ql.fromBufferAttribute(h,p),xp(ql,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function xp(i,e,t,n,s,a,r){let o=Bh.distanceSqToPoint(i);if(o<t){let l=new C;Bh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var no=class extends Ln{constructor(e=[],t=fa,n,s,a,r,o,l,c,u){super(e,t,n,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pn=class extends Ln{constructor(e,t,n,s,a,r,o,l,c){super(e,t,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Di=class extends Ln{constructor(e,t,n=Ui,s,a,r,o=on,l=on,c,u=us,h=1){if(u!==us&&u!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,a,r,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ja(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},io=class extends Di{constructor(e,t=Ui,n=fa,s,a,r=on,o=on,l,c=us){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,a,r,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},so=class extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jn=class i extends lt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,r,a,0),p("z","y","x",1,-1,n,t,-e,r,a,1),p("x","z","y",1,1,e,n,t,s,r,2),p("x","z","y",1,-1,e,n,-t,s,r,3),p("x","y","z",1,-1,e,t,n,s,a,4),p("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function p(b,g,m,y,_,v,T,E,M,x,F){let I=v/M,G=T/x,X=v/2,w=T/2,S=E/2,D=M+1,A=x+1,k=0,O=0,H=new C;for(let N=0;N<A;N++){let Y=N*G-w;for(let q=0;q<D;q++){let z=q*I-X;H[b]=z*y,H[g]=Y*_,H[m]=S,c.push(H.x,H.y,H.z),H[b]=0,H[g]=0,H[m]=E>0?1:-1,u.push(H.x,H.y,H.z),h.push(q/M),h.push(1-N/x),k+=1}}for(let N=0;N<x;N++)for(let Y=0;Y<M;Y++){let q=d+Y+D*N,z=d+Y+D*(N+1),U=d+(Y+1)+D*(N+1),J=d+(Y+1)+D*N;l.push(q,z,J),l.push(z,U,J),O+=6}o.addGroup(f,O,F),f+=O,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ao=class i extends lt{constructor(e=1,t=1,n=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));let r=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,p=n*2+a,b=s+1,g=new C,m=new C;for(let y=0;y<=p;y++){let _=0,v=0,T=0,E=0;if(y<=n){let F=y/n,I=F*Math.PI/2;v=-u-e*Math.cos(I),T=e*Math.sin(I),E=-e*Math.cos(I),_=F*h}else if(y<=n+a){let F=(y-n)/a;v=-u+F*t,T=e,E=0,_=h+F*d}else{let F=(y-n-a)/n,I=F*Math.PI/2;v=u+e*Math.sin(I),T=e*Math.cos(I),E=e*Math.sin(I),_=h+d+F*h}let M=Math.max(0,Math.min(1,_/f)),x=0;y===0?x=.5/s:y===p&&(x=-.5/s);for(let F=0;F<=s;F++){let I=F/s,G=I*Math.PI*2,X=Math.sin(G),w=Math.cos(G);m.x=-T*w,m.y=v,m.z=T*X,o.push(m.x,m.y,m.z),g.set(-T*w,E,T*X),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+x,M)}if(y>0){let F=(y-1)*b;for(let I=0;I<s;I++){let G=F+I,X=F+I+1,w=y*b+I,S=y*b+I+1;r.push(G,X,w),r.push(X,S,w)}}}this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Gt=class i extends lt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let u=[],h=[],d=[],f=[],p=0,b=[],g=n/2,m=0;y(),r===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function y(){let v=new C,T=new C,E=0,M=(t-e)/n;for(let x=0;x<=a;x++){let F=[],I=x/a,G=I*(t-e)+e;for(let X=0;X<=s;X++){let w=X/s,S=w*l+o,D=Math.sin(S),A=Math.cos(S);T.x=G*D,T.y=-I*n+g,T.z=G*A,h.push(T.x,T.y,T.z),v.set(D,M,A).normalize(),d.push(v.x,v.y,v.z),f.push(w,1-I),F.push(p++)}b.push(F)}for(let x=0;x<s;x++)for(let F=0;F<a;F++){let I=b[F][x],G=b[F+1][x],X=b[F+1][x+1],w=b[F][x+1];(e>0||F!==0)&&(u.push(I,G,w),E+=3),(t>0||F!==a-1)&&(u.push(G,X,w),E+=3)}c.addGroup(m,E,0),m+=E}function _(v){let T=p,E=new me,M=new C,x=0,F=v===!0?e:t,I=v===!0?1:-1;for(let X=1;X<=s;X++)h.push(0,g*I,0),d.push(0,I,0),f.push(.5,.5),p++;let G=p;for(let X=0;X<=s;X++){let S=X/s*l+o,D=Math.cos(S),A=Math.sin(S);M.x=F*A,M.y=g*I,M.z=F*D,h.push(M.x,M.y,M.z),d.push(0,I,0),E.x=D*.5+.5,E.y=A*.5*I+.5,f.push(E.x,E.y),p++}for(let X=0;X<s;X++){let w=T+X,S=G+X;v===!0?u.push(S,S+1,w):u.push(S+1,S,w),x+=3}c.addGroup(m,x,v===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ro=class i extends Gt{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lc=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let a=[],r=[];o(s),c(n),u(),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(a.slice(),3)),this.setAttribute("uv",new tt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new C,v=new C,T=new C;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],v),f(t[E+2],T),l(_,v,T,y)}function l(y,_,v,T){let E=T+1,M=[];for(let x=0;x<=E;x++){M[x]=[];let F=y.clone().lerp(v,x/E),I=_.clone().lerp(v,x/E),G=E-x;for(let X=0;X<=G;X++)X===0&&x===E?M[x][X]=F:M[x][X]=F.clone().lerp(I,X/G)}for(let x=0;x<E;x++)for(let F=0;F<2*(E-x)-1;F++){let I=Math.floor(F/2);F%2===0?(d(M[x][I+1]),d(M[x+1][I]),d(M[x][I])):(d(M[x][I+1]),d(M[x+1][I+1]),d(M[x+1][I]))}}function c(y){let _=new C;for(let v=0;v<a.length;v+=3)_.x=a[v+0],_.y=a[v+1],_.z=a[v+2],_.normalize().multiplyScalar(y),a[v+0]=_.x,a[v+1]=_.y,a[v+2]=_.z}function u(){let y=new C;for(let _=0;_<a.length;_+=3){y.x=a[_+0],y.y=a[_+1],y.z=a[_+2];let v=g(y)/2/Math.PI+.5,T=m(y)/Math.PI+.5;r.push(v,1-T)}p(),h()}function h(){for(let y=0;y<r.length;y+=6){let _=r[y+0],v=r[y+2],T=r[y+4],E=Math.max(_,v,T),M=Math.min(_,v,T);E>.9&&M<.1&&(_<.2&&(r[y+0]+=1),v<.2&&(r[y+2]+=1),T<.2&&(r[y+4]+=1))}}function d(y){a.push(y.x,y.y,y.z)}function f(y,_){let v=y*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function p(){let y=new C,_=new C,v=new C,T=new C,E=new me,M=new me,x=new me;for(let F=0,I=0;F<a.length;F+=9,I+=6){y.set(a[F+0],a[F+1],a[F+2]),_.set(a[F+3],a[F+4],a[F+5]),v.set(a[F+6],a[F+7],a[F+8]),E.set(r[I+0],r[I+1]),M.set(r[I+2],r[I+3]),x.set(r[I+4],r[I+5]),T.copy(y).add(_).add(v).divideScalar(3);let G=g(T);b(E,I+0,y,G),b(M,I+2,_,G),b(x,I+4,v,G)}}function b(y,_,v,T){T<0&&y.x===1&&(r[_]=y.x-1),v.x===0&&v.z===0&&(r[_]=T/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,a=n.length,r;t?r=t:r=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);let u=n[s],d=n[s+1]-u,f=(r-u)/d;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=t||(r.isVector2?new me:new C);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],a=[],r=[],o=new C,l=new Je;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new C)}a[0]=new C,r[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Pt(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,p))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(Pt(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let p=1;p<=e;p++)a[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],a[p])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Za=class extends pi{constructor(e=0,t=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){let n=t,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cc=class extends Za{constructor(e,t,n,s,a,r){super(e,t,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function yd(){let i=0,e=0,t=0,n=0;function s(a,r,o,l){i=a,e=o,t=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,h){let d=(r-a)/c-(o-a)/(c+u)+(o-r)/u,f=(o-r)/u-(l-r)/(u+h)+(l-o)/h;d*=u,f*=u,s(r,o,d,f)},calc:function(a){let r=a*a,o=r*a;return i+e*a+t*r+n*o}}}var yp=new C,Mp=new C,wh=new yd,Lh=new yd,kh=new yd,_n=class extends pi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(Mp.subVectors(s[0],s[1]).add(s[0]),c=Mp);let h=s[o%a],d=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(yp.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=yp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),b=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);b<1e-4&&(b=1),p<1e-4&&(p=b),g<1e-4&&(g=b),wh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,b,g),Lh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,b,g),kh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,b,g)}else this.curveType==="catmullrom"&&(wh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Lh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),kh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(wh.calc(l),Lh.calc(l),kh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vp(i,e,t,n,s){let a=(n-e)*.5,r=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+a+r)*l+(-3*t+3*n-2*a-r)*o+a*i+t}function Bb(i,e){let t=1-i;return t*t*e}function Gb(i,e){return 2*(1-i)*i*e}function Ob(i,e){return i*i*e}function Yr(i,e,t,n){return Bb(i,e)+Gb(i,t)+Ob(i,n)}function qb(i,e){let t=1-i;return t*t*t*e}function Xb(i,e){let t=1-i;return 3*t*t*i*e}function Vb(i,e){return 3*(1-i)*i*i*e}function Yb(i,e){return i*i*i*e}function $r(i,e,t,n,s){return qb(i,e)+Xb(i,t)+Vb(i,n)+Yb(i,s)}var oo=class extends pi{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set($r(e,s.x,a.x,r.x,o.x),$r(e,s.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uc=class extends pi{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set($r(e,s.x,a.x,r.x,o.x),$r(e,s.y,a.y,r.y,o.y),$r(e,s.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lo=class extends pi{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hc=class extends pi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends pi{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Yr(e,s.x,a.x,r.x),Yr(e,s.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends pi{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Yr(e,s.x,a.x,r.x),Yr(e,s.y,a.y,r.y),Yr(e,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(vp(o,l.x,c.x,u.x,h.x),vp(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},dc=Object.freeze({__proto__:null,ArcCurve:cc,CatmullRomCurve3:_n,CubicBezierCurve:oo,CubicBezierCurve3:uc,EllipseCurve:Za,LineCurve:lo,LineCurve3:hc,QuadraticBezierCurve:co,QuadraticBezierCurve3:uo,SplineCurve:ho}),fc=class extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=n){let r=s[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new dc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},fo=class extends fc{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new lo(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let a=new co(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,r){let o=new oo(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ho(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,a,r),this}absarc(e,t,n,s,a,r){return this.absellipse(e,t,n,n,s,a,r),this}ellipse(e,t,n,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,a,r,o,l),this}absellipse(e,t,n,s,a,r,o,l){let c=new Za(e,t,n,s,a,r,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ci=class extends fo{constructor(e){super(e),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new fo().fromJSON(s))}return this}};function $b(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,a=g0(i,0,s,t,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(n&&(a=Wb(i,e,a,t)),i.length>80*t){o=i[0],l=i[1];let u=o,h=l;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return po(a,r,t,o,l,c,0),r}function g0(i,e,t,n,s){let a;if(s===lx(i,e,t,n)>0)for(let r=e;r<t;r+=n)a=_p(r/n|0,i[r],i[r+1],a);else for(let r=t-n;r>=e;r-=n)a=_p(r/n|0,i[r],i[r+1],a);return a&&er(a,a.next)&&(go(a),a=a.next),a}function la(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(er(t,t.next)||hn(t.prev,t,t.next)===0)){if(go(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function po(i,e,t,n,s,a,r){if(!i)return;!r&&a&&nx(i,n,s,a);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(a?zb(i,n,s,a):Qb(i)){e.push(l.i,i.i,c.i),go(i),i=c.next,o=c.next;continue}if(i=c,i===o){r?r===1?(i=Jb(la(i),e),po(i,e,t,n,s,a,2)):r===2&&jb(i,e,t,n,s,a):po(la(i),e,t,n,s,a,1);break}}}function Qb(i){let e=i.prev,t=i,n=i.next;if(hn(e,t,n)>=0)return!1;let s=e.x,a=t.x,r=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,a,r),h=Math.min(o,l,c),d=Math.max(s,a,r),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Or(s,o,a,l,r,c,p.x,p.y)&&hn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function zb(i,e,t,n){let s=i.prev,a=i,r=i.next;if(hn(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,h=a.y,d=r.y,f=Math.min(o,l,c),p=Math.min(u,h,d),b=Math.max(o,l,c),g=Math.max(u,h,d),m=Gh(f,p,e,t,n),y=Gh(b,g,e,t,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=m&&v&&v.z<=y;){if(_.x>=f&&_.x<=b&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&Or(o,u,l,h,c,d,_.x,_.y)&&hn(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=b&&v.y>=p&&v.y<=g&&v!==s&&v!==r&&Or(o,u,l,h,c,d,v.x,v.y)&&hn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=b&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&Or(o,u,l,h,c,d,_.x,_.y)&&hn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=b&&v.y>=p&&v.y<=g&&v!==s&&v!==r&&Or(o,u,l,h,c,d,v.x,v.y)&&hn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Jb(i,e){let t=i;do{let n=t.prev,s=t.next.next;!er(n,s)&&x0(n,t,t.next,s)&&mo(n,s)&&mo(s,n)&&(e.push(n.i,t.i,s.i),go(t),go(t.next),t=i=s),t=t.next}while(t!==i);return la(t)}function jb(i,e,t,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&ax(r,o)){let l=y0(r,o);r=la(r,r.next),l=la(l,l.next),po(r,e,t,n,s,a,0),po(l,e,t,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function Wb(i,e,t,n){let s=[];for(let a=0,r=e.length;a<r;a++){let o=e[a]*n,l=a<r-1?e[a+1]*n:i.length,c=g0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(sx(c))}s.sort(Kb);for(let a=0;a<s.length;a++)t=Zb(s[a],t);return t}function Kb(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Zb(i,e){let t=ex(i,e);if(!t)return e;let n=y0(t,i);return la(n,n.next),la(t,t.next)}function ex(i,e){let t=e,n=i.x,s=i.y,a=-1/0,r;if(er(i,t))return t;do{if(er(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>a&&(a=h,r=t.x<t.next.x?t:t.next,h===n))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;t=r;do{if(n>=t.x&&t.x>=l&&n!==t.x&&b0(s<c?n:a,s,l,c,s<c?a:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);mo(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&tx(r,t)))&&(r=t,u=h)}t=t.next}while(t!==o);return r}function tx(i,e){return hn(i.prev,i,e.prev)<0&&hn(e.next,i,i.next)<0}function nx(i,e,t,n){let s=i;do s.z===0&&(s.z=Gh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ix(s)}function ix(i){let e,t=1;do{let n=i,s;i=null;let a=null;for(e=0;n;){e++;let r=n,o=0;for(let c=0;c<t&&(o++,r=r.nextZ,!!r);c++);let l=t;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;n=r}a.nextZ=null,t*=2}while(e>1);return i}function Gh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function sx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function b0(i,e,t,n,s,a,r,o){return(s-r)*(e-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(n-o)}function Or(i,e,t,n,s,a,r,o){return!(i===r&&e===o)&&b0(i,e,t,n,s,a,r,o)}function ax(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!rx(i,e)&&(mo(i,e)&&mo(e,i)&&ox(i,e)&&(hn(i.prev,i,e.prev)||hn(i,e.prev,e))||er(i,e)&&hn(i.prev,i,i.next)>0&&hn(e.prev,e,e.next)>0)}function hn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function er(i,e){return i.x===e.x&&i.y===e.y}function x0(i,e,t,n){let s=Vl(hn(i,e,t)),a=Vl(hn(i,e,n)),r=Vl(hn(t,n,i)),o=Vl(hn(t,n,e));return!!(s!==a&&r!==o||s===0&&Xl(i,t,e)||a===0&&Xl(i,n,e)||r===0&&Xl(t,i,n)||o===0&&Xl(t,e,n))}function Xl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Vl(i){return i>0?1:i<0?-1:0}function rx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&x0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mo(i,e){return hn(i.prev,i,i.next)<0?hn(i,e,i.next)>=0&&hn(i,i.prev,e)>=0:hn(i,e,i.prev)<0||hn(i,i.next,e)<0}function ox(i,e){let t=i,n=!1,s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function y0(i,e){let t=Oh(i.i,i.x,i.y),n=Oh(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function _p(i,e,t,n){let s=Oh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function go(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Oh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lx(i,e,t,n){let s=0;for(let a=e,r=t-n;a<t;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}var qh=class{static triangulate(e,t,n=2){return $b(e,t,n)}},Oi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],a=[];Sp(e),Tp(n,e);let r=e.length;t.forEach(Sp);for(let l=0;l<t.length;l++)s.push(r),r+=t[l].length,Tp(n,t[l]);let o=qh.triangulate(n,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function Sp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Tp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Os=class i extends lt{constructor(e=new Ci([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];r(c)}this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(a,2)),this.computeVertexNormals();function r(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:cx,_,v=!1,T,E,M,x;if(m){_=m.getSpacedPoints(u),v=!0,d=!1;let ie=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(u,ie),E=new C,M=new C,x=new C}d||(g=0,f=0,p=0,b=0);let F=o.extractPoints(c),I=F.shape,G=F.holes;if(!Oi.isClockWise(I)){I=I.reverse();for(let ie=0,pe=G.length;ie<pe;ie++){let $=G[ie];Oi.isClockWise($)&&(G[ie]=$.reverse())}}function w(ie){let $=10000000000000001e-36,ye=ie[0];for(let Ee=1;Ee<=ie.length;Ee++){let it=Ee%ie.length,qe=ie[it],Ye=qe.x-ye.x,gt=qe.y-ye.y,Et=Ye*Ye+gt*gt,j=Math.max(Math.abs(qe.x),Math.abs(qe.y),Math.abs(ye.x),Math.abs(ye.y)),yt=$*j*j;if(Et<=yt){ie.splice(it,1),Ee--;continue}ye=qe}}w(I),G.forEach(w);let S=G.length,D=I;for(let ie=0;ie<S;ie++){let pe=G[ie];I=I.concat(pe)}function A(ie,pe,$){return pe||rt("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(pe,$)}let k=I.length;function O(ie,pe,$){let ye,Ee,it,qe=ie.x-pe.x,Ye=ie.y-pe.y,gt=$.x-ie.x,Et=$.y-ie.y,j=qe*qe+Ye*Ye,yt=qe*Et-Ye*gt;if(Math.abs(yt)>Number.EPSILON){let at=Math.sqrt(j),Ft=Math.sqrt(gt*gt+Et*Et),Pe=pe.x-Ye/at,Ot=pe.y+qe/at,fe=$.x-Et/Ft,$e=$.y+gt/Ft,B=((fe-Pe)*Et-($e-Ot)*gt)/(qe*Et-Ye*gt);ye=Pe+qe*B-ie.x,Ee=Ot+Ye*B-ie.y;let R=ye*ye+Ee*Ee;if(R<=2)return new me(ye,Ee);it=Math.sqrt(R/2)}else{let at=!1;qe>Number.EPSILON?gt>Number.EPSILON&&(at=!0):qe<-Number.EPSILON?gt<-Number.EPSILON&&(at=!0):Math.sign(Ye)===Math.sign(Et)&&(at=!0),at?(ye=-Ye,Ee=qe,it=Math.sqrt(j)):(ye=qe,Ee=Ye,it=Math.sqrt(j/2))}return new me(ye/it,Ee/it)}let H=[];for(let ie=0,pe=D.length,$=pe-1,ye=ie+1;ie<pe;ie++,$++,ye++)$===pe&&($=0),ye===pe&&(ye=0),H[ie]=O(D[ie],D[$],D[ye]);let N=[],Y,q=H.concat();for(let ie=0,pe=S;ie<pe;ie++){let $=G[ie];Y=[];for(let ye=0,Ee=$.length,it=Ee-1,qe=ye+1;ye<Ee;ye++,it++,qe++)it===Ee&&(it=0),qe===Ee&&(qe=0),Y[ye]=O($[ye],$[it],$[qe]);N.push(Y),q=q.concat(Y)}let z;if(g===0)z=Oi.triangulateShape(D,G);else{let ie=[],pe=[];for(let $=0;$<g;$++){let ye=$/g,Ee=f*Math.cos(ye*Math.PI/2),it=p*Math.sin(ye*Math.PI/2)+b;for(let qe=0,Ye=D.length;qe<Ye;qe++){let gt=A(D[qe],H[qe],it);ge(gt.x,gt.y,-Ee),ye===0&&ie.push(gt)}for(let qe=0,Ye=S;qe<Ye;qe++){let gt=G[qe];Y=N[qe];let Et=[];for(let j=0,yt=gt.length;j<yt;j++){let at=A(gt[j],Y[j],it);ge(at.x,at.y,-Ee),ye===0&&Et.push(at)}ye===0&&pe.push(Et)}}z=Oi.triangulateShape(ie,pe)}let U=z.length,J=p+b;for(let ie=0;ie<k;ie++){let pe=d?A(I[ie],q[ie],J):I[ie];v?(M.copy(T.normals[0]).multiplyScalar(pe.x),E.copy(T.binormals[0]).multiplyScalar(pe.y),x.copy(_[0]).add(M).add(E),ge(x.x,x.y,x.z)):ge(pe.x,pe.y,0)}for(let ie=1;ie<=u;ie++)for(let pe=0;pe<k;pe++){let $=d?A(I[pe],q[pe],J):I[pe];v?(M.copy(T.normals[ie]).multiplyScalar($.x),E.copy(T.binormals[ie]).multiplyScalar($.y),x.copy(_[ie]).add(M).add(E),ge(x.x,x.y,x.z)):ge($.x,$.y,h/u*ie)}for(let ie=g-1;ie>=0;ie--){let pe=ie/g,$=f*Math.cos(pe*Math.PI/2),ye=p*Math.sin(pe*Math.PI/2)+b;for(let Ee=0,it=D.length;Ee<it;Ee++){let qe=A(D[Ee],H[Ee],ye);ge(qe.x,qe.y,h+$)}for(let Ee=0,it=G.length;Ee<it;Ee++){let qe=G[Ee];Y=N[Ee];for(let Ye=0,gt=qe.length;Ye<gt;Ye++){let Et=A(qe[Ye],Y[Ye],ye);v?ge(Et.x,Et.y+_[u-1].y,_[u-1].x+$):ge(Et.x,Et.y,h+$)}}}Z(),ae();function Z(){let ie=s.length/3;if(d){let pe=0,$=k*pe;for(let ye=0;ye<U;ye++){let Ee=z[ye];Se(Ee[2]+$,Ee[1]+$,Ee[0]+$)}pe=u+g*2,$=k*pe;for(let ye=0;ye<U;ye++){let Ee=z[ye];Se(Ee[0]+$,Ee[1]+$,Ee[2]+$)}}else{for(let pe=0;pe<U;pe++){let $=z[pe];Se($[2],$[1],$[0])}for(let pe=0;pe<U;pe++){let $=z[pe];Se($[0]+k*u,$[1]+k*u,$[2]+k*u)}}n.addGroup(ie,s.length/3-ie,0)}function ae(){let ie=s.length/3,pe=0;oe(D,pe),pe+=D.length;for(let $=0,ye=G.length;$<ye;$++){let Ee=G[$];oe(Ee,pe),pe+=Ee.length}n.addGroup(ie,s.length/3-ie,1)}function oe(ie,pe){let $=ie.length;for(;--$>=0;){let ye=$,Ee=$-1;Ee<0&&(Ee=ie.length-1);for(let it=0,qe=u+g*2;it<qe;it++){let Ye=k*it,gt=k*(it+1),Et=pe+ye+Ye,j=pe+Ee+Ye,yt=pe+Ee+gt,at=pe+ye+gt;Ue(Et,j,yt,at)}}}function ge(ie,pe,$){l.push(ie),l.push(pe),l.push($)}function Se(ie,pe,$){Ge(ie),Ge(pe),Ge($);let ye=s.length/3,Ee=y.generateTopUV(n,s,ye-3,ye-2,ye-1);be(Ee[0]),be(Ee[1]),be(Ee[2])}function Ue(ie,pe,$,ye){Ge(ie),Ge(pe),Ge(ye),Ge(pe),Ge($),Ge(ye);let Ee=s.length/3,it=y.generateSideWallUV(n,s,Ee-6,Ee-3,Ee-2,Ee-1);be(it[0]),be(it[1]),be(it[3]),be(it[1]),be(it[2]),be(it[3])}function Ge(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function be(ie){a.push(ie.x),a.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ux(t,n,e)}static fromJSON(e,t){let n=[];for(let a=0,r=e.shapes.length;a<r;a++){let o=t[e.shapes[a]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new dc[s.type]().fromJSON(s)),new i(n,e.options)}},cx={generateTopUV:function(i,e,t,n,s){let a=e[t*3],r=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new me(a,r),new me(o,l),new me(c,u)]},generateSideWallUV:function(i,e,t,n,s,a){let r=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],b=e[a*3],g=e[a*3+1],m=e[a*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new me(r,1-l),new me(c,1-h),new me(d,1-p),new me(b,1-m)]:[new me(o,1-l),new me(u,1-h),new me(f,1-p),new me(g,1-m)]}};function ux(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var hs=class i extends lc{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ni=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],p=[],b=[],g=[];for(let m=0;m<u;m++){let y=m*d-r;for(let _=0;_<c;_++){let v=_*h-a;p.push(v,-y,0),b.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let _=y+c*m,v=y+c*(m+1),T=y+1+c*(m+1),E=y+1+c*m;f.push(_,v,E),f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(b,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ds=class i extends lt{constructor(e=.5,t=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new C,p=new me;for(let b=0;b<=s;b++){for(let g=0;g<=n;g++){let m=a+g/n*r;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let b=0;b<s;b++){let g=b*(n+1);for(let m=0;m<n;m++){let y=m+g,_=y,v=y+n+1,T=y+n+2,E=y+1;o.push(_,v,E),o.push(v,T,E)}}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},bo=class i extends lt{constructor(e=new Ci([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],a=[],r=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(r,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,p=d.holes;Oi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];Oi.isClockWise(y)===!0&&(p[g]=y.reverse())}let b=Oi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){let y=f[g];s.push(y.x,y.y,0),a.push(0,0,1),r.push(y.x,y.y)}for(let g=0,m=b.length;g<m;g++){let y=b[g],_=y[0]+h,v=y[1]+h,T=y[2]+h;n.push(_,v,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return hx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let r=t[e.shapes[s]];n.push(r)}return new i(n,e.curveSegments)}};function hx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var mn=class i extends lt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(r+o,Math.PI),c=0,u=[],h=new C,d=new C,f=[],p=[],b=[],g=[];for(let m=0;m<=n;m++){let y=[],_=m/n,v=r+_*o,T=e*Math.cos(v),E=Math.sqrt(e*e-T*T),M=0;m===0&&r===0?M=.5/t:m===n&&l===Math.PI&&(M=-.5/t);for(let x=0;x<=t;x++){let F=x/t,I=s+F*a;h.x=-E*Math.cos(I),h.y=T,h.z=E*Math.sin(I),p.push(h.x,h.y,h.z),d.copy(h).normalize(),b.push(d.x,d.y,d.z),g.push(F+M,1-_),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let _=u[m][y+1],v=u[m][y],T=u[m+1][y],E=u[m+1][y+1];(m!==0||r>0)&&f.push(_,v,E),(m!==n-1||l<Math.PI)&&f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(b,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xo=class i extends lt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new C,f=new C,p=new C;for(let b=0;b<=n;b++){let g=r+b/n*o;for(let m=0;m<=s;m++){let y=m/s*a;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(m/s),h.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=s;g++){let m=(s+1)*b+g-1,y=(s+1)*(b-1)+g-1,_=(s+1)*(b-1)+g,v=(s+1)*b+g;l.push(m,y,v),l.push(y,_,v)}this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var mi=class i extends lt{constructor(e=new uo(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:a};let r=e.computeFrenetFrames(t,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new C,l=new C,c=new me,u=new C,h=[],d=[],f=[],p=[];b(),this.setIndex(p),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function b(){for(let _=0;_<t;_++)g(_);g(a===!1?t:0),y(),m()}function g(_){u=e.getPointAt(_/t,u);let v=r.normals[_],T=r.binormals[_];for(let E=0;E<=s;E++){let M=E/s*Math.PI*2,x=Math.sin(M),F=-Math.cos(M);l.x=F*v.x+x*T.x,l.y=F*v.y+x*T.y,l.z=F*v.z+x*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=t;_++)for(let v=1;v<=s;v++){let T=(s+1)*(_-1)+(v-1),E=(s+1)*_+(v-1),M=(s+1)*_+v,x=(s+1)*(_-1)+v;p.push(T,E,x),p.push(E,M,x)}}function y(){for(let _=0;_<=t;_++)for(let v=0;v<=s;v++)c.x=_/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new dc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ga(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ep(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ep(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Wn(i){let e={};for(let t=0;t<i.length;t++){let n=ga(i[t]);for(let s in n)e[s]=n[s]}return e}function Ep(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Md(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var ti={clone:ga,merge:Wn},fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fx,this.fragmentShader=px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new he().setHex(s.value);break;case"v2":this.uniforms[n].value=new me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},tr=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ke=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wt=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return na('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){na('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},nr=class extends On{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new he(16777215),this.specular=new he(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var yo=class extends On{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Mo=class extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ir=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pc=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ds(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function mx(i){function e(s,a){return i[s]-i[a]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ap(i,e,t){let n=i.length,s=new i.constructor(n);for(let a=0,r=0;r!==n;++a){let o=t[a]*e;for(let l=0;l!==e;++l)s[r++]=i[o+l]}return s}function gx(i,e,t,n){let s=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[s++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push(...r)),a=i[s++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=i[s++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=i[s++];while(a!==void 0)}var Yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=s,s=t[++n],e<s)break e}r=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(n=2,a=o);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=a,a=t[--n-1],e>=a)break e}r=n,n=0;break t}break n}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mc=class extends Yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(e,t,n){let s=this.parameterPositions,a=e-2,r=e+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Uh:a=e,o=2*t-n;break;case Hh:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uh:r=e,l=2*n-t;break;case Hh:r=1,l=n+s[1]-s[0];break;default:r=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),b=p*p,g=b*p,m=-d*g+2*d*b-d*p,y=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*b+.5*p,v=f*g-f*b;for(let T=0;T!==o;++T)a[T]=m*r[u+T]+y*r[c+T]+_*r[l+T]+v*r[h+T];return a}},gc=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)a[d]=r[c+d]*h+r[l+d]*u;return a}},bc=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xc=class extends Yi{interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),b=1-p;for(let g=0;g!==o;++g)a[g]=r[c+g]*b+r[l+g]*p;return a}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let b=r[c+p],g=r[l+p],m=f*d+p*2,y=h[m],_=h[m+1],v=e*d+p*2,T=u[v],E=u[v+1],M=xx(n,t,y,T,s);a[p]=M0(M,b,_,E,g)}return a}};function M0(i,e,t,n,s){let a=1-i;return a*a*a*e+3*a*a*i*t+3*a*i*i*n+i*i*i*s}function bx(i,e,t,n,s){let a=1-i;return 3*a*a*(t-e)+6*a*i*(n-t)+3*i*i*(s-n)}function xx(i,e,t,n,s){let a=(i-e)/(s-e);for(let r=0;r<8;r++){let o=M0(a,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=bx(a,e,t,n,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var li=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ds(t,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ds(e.times,Array),values:Ds(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),qr(e.settings)&&(n.settings={inTangents:Ds(e.settings.inTangents,Array),outTangents:Ds(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ia:t=this.InterpolantFactoryMethodDiscrete;break;case sa:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break;case Ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return Ql;case this.InterpolantFactoryMethodBezier:return Ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;qr(this.settings)&&(Rp(this.settings.inTangents,e),Rp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;qr(this.settings)&&(Pp(this.settings.inTangents,e),Pp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,a=0,r=s-1;for(;a!==s&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,a=n.length;a===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){rt("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(s!==void 0&&nb(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ql,a=e.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let b=t[h+p];if(b!==t[d+p]||b!==t[f+p]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let h=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,qr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Pp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=sa;var fs=class extends li{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ia;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends li{constructor(e,t,n,s){super(e,t,n,s)}};vo.prototype.ValueTypeName="color";var ps=class extends li{constructor(e,t,n,s){super(e,t,n,s)}};ps.prototype.ValueTypeName="number";var yc=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)_t.slerpFlat(a,0,r,c-o,r,c,l);return a}},ms=class extends li{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new yc(this.times,this.values,this.getValueSize(),e)}};ms.prototype.ValueTypeName="quaternion";ms.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends li{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ia;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends li{constructor(e,t,n,s){super(e,t,n,s)}};qs.prototype.ValueTypeName="vector";var _o=class{constructor(e="",t=-1,n=[],s=n0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Mx(n[r]).scale(s));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,r=n.length;a!==r;++a)t.push(li.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let a=t.length,r=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);let u=mx(l);l=Ap(l,1,u),c=Ap(c,1,u),!s&&l[0]===0&&(l.push(a),c.push(c[0])),r.push(new ps(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(a);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let r=[];for(let o in s)r.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return r}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function yx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ps;case"vector":case"vector2":case"vector3":case"vector4":return qs;case"color":return vo;case"quaternion":return ms;case"bool":case"boolean":return fs;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Mx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=yx(i.type);if(i.times===void 0){let n=[],s=[];gx(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),qr(i.settings)&&(t.settings={inTangents:Ds(i.settings.inTangents,Float32Array),outTangents:Ds(i.settings.outTangents,Float32Array)}),t}var qi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(wp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!wp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function wp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Mc=class{constructor(e,t,n){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},v0=new Mc,Si=class{constructor(e){this.manager=e!==void 0?e:v0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Si.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls={},Xh=class extends Error{constructor(e,t){super(e),this.response=t}},bs=class extends Si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=qi.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(ls[e]!==void 0){ls[e].push({onLoad:t,onProgress:n,onError:s});return}ls[e]=[],ls[e].push({onLoad:t,onProgress:n,onError:s});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ls[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,b=0,g=new ReadableStream({start(m){y();function y(){h.read().then(({done:_,value:v})=>{if(_)m.close();else{b+=v.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:b,total:f});for(let E=0,M=u.length;E<M;E++){let x=u[E];x.onProgress&&x.onProgress(T)}m.enqueue(v),y()}},_=>{m.error(_)})}}});return new Response(g)}else throw new Xh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{qi.add(`file:${e}`,c);let u=ls[e];delete ls[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=ls[e];if(u===void 0)throw this.manager.itemError(e),c;delete ls[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ga=new WeakMap,vc=class extends Si{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=qi.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0);else{let h=Ga.get(r);h===void 0&&(h=[],Ga.set(r,h)),h.push({onLoad:t,onError:s})}return r}let o=Qa("img");function l(){u(),t&&t(this);let h=Ga.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ga.delete(this),a.manager.itemEnd(e)}function c(h){u(),s&&s(h),qi.remove(`image:${e}`);let d=Ga.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}Ga.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),qi.add(`image:${e}`,o),a.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Xn=class extends Si{constructor(e){super(e)}load(e,t,n,s){let a=new Ln,r=new vc(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}},sr=class extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ih=new Je,Lp=new C,kp=new C,ar=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Lp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lp),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ih.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ih,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===$a||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yl=new C,$l=new _t,Gi=new C,So=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yl,$l,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,$l,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Yl,$l,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,$l,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new C,Ip=new me,Fp=new me,en=class extends So{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,t){return this.getViewBounds(e,Ip,Fp),t.subVectors(Fp,Ip)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vh=class extends ar{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=aa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},To=class extends sr{constructor(e,t,n=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new Vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yh=class extends ar{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},ca=class extends sr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xs=class extends So{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$h=class extends ar{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mn=class extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new $h}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Eo=class extends lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Fh=new WeakMap,Ao=class extends Si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=qi.get(`image-bitmap:${e}`);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(c=>{Fh.has(r)===!0?(s&&s(Fh.get(r)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(c),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},a.options,{colorSpaceConversion:"none"}))}).then(function(c){return qi.add(`image-bitmap:${e}`,c),t&&t(c),a.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Fh.set(l,c),qi.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});qi.add(`image-bitmap:${e}`,l),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Oa=-90,qa=1,rr=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Oa,qa,e,t);s.layers=this.layers,this.add(s);let a=new en(Oa,qa,e,t);a.layers=this.layers,this.add(a);let r=new en(Oa,qa,e,t);r.layers=this.layers,this.add(r);let o=new en(Oa,qa,e,t);o.layers=this.layers,this.add(o);let l=new en(Oa,qa,e,t);l.layers=this.layers,this.add(l);let c=new en(Oa,qa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(let c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},_c=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ro=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function vx(){this._document.hidden===!1&&this.reset()}var vd="\\[\\]\\.:\\/",_x=new RegExp("["+vd+"]","g"),_d="[^"+vd+"]",Sx="[^"+vd.replace("\\.","")+"]",Tx=/((?:WC+[\/:])*)/.source.replace("WC",_d),Ex=/(WCOD+)?/.source.replace("WCOD",Sx),Ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_d),Rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_d),Px=new RegExp("^"+Tx+Ex+Ax+Rx+"$"),wx=["material","materials","bones","map"],Qh=class{constructor(e,t,n){let s=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_x,"")}static parseTrackName(e){let t=Px.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=n.nodeName.substring(s+1);wx.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[s];if(r===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Qh;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fS=new Float32Array(1);var Dp=new Je,Po=class{constructor(e,t,n=0,s=1/0){this.ray=new Hs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dp),this}intersectObject(e,t=!0,n=[]){return zh(e,this,n,t),n.sort(Cp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)zh(e[s],this,n,t);return n.sort(Cp),n}};function Cp(i,e){return i.distance-e.distance}function zh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let a=i.children;for(let r=0,o=a.length;r<o;r++)zh(a[r],e,t,!0)}}var Pd=class Pd{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=s,this}};Pd.prototype.isMatrix2=!0;var Jh=Pd;function Sd(i,e,t,n){let s=Lx(n);switch(t){case rd:return i*e;case kc:return i*e/s.components*s.byteLength;case Ic:return i*e/s.components*s.byteLength;case Xs:return i*e*2/s.components*s.byteLength;case Fc:return i*e*2/s.components*s.byteLength;case od:return i*e*3/s.components*s.byteLength;case ui:return i*e*4/s.components*s.byteLength;case Dc:return i*e*4/s.components*s.byteLength;case Bo:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:case Hc:return Math.max(i,16)*Math.max(e,8)/4;case Cc:case Uc:return Math.max(i,8)*Math.max(e,8)/2;case Bc:case Gc:case qc:case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Xo:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case iu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case su:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case au:case ru:case ou:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lu:case cu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vo:case uu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lx(i){switch(i){case jn:case nd:return{byteLength:1,components:1};case hr:case id:case gn:return{byteLength:2,components:1};case wc:case Lc:return{byteLength:2,components:4};case Ui:case Pc:case bi:return{byteLength:4,components:1};case sd:case ad:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function X0(){let i=null,e=!1,t=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Ix(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],b=h[f];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++d,h[d]=b)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let b=h[f];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dx=`#ifdef USE_ALPHAHASH
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
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bx=`#ifdef USE_AOMAP
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
#endif`,Gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ox=`#ifdef USE_BATCHING
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
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$x=`#ifdef USE_IRIDESCENCE
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
#endif`,Qx=`#ifdef USE_BUMPMAP
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,n1=`#define PI 3.141592653589793
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
} // validated`,i1=`vec3 transformedNormal = objectNormal;
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
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u1=`#ifdef USE_ENVMAP
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
#endif`,h1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y1=`#ifdef USE_GRADIENTMAP
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
}`,M1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,T1=`#ifdef USE_ENVMAP
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
#endif`,E1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w1=`PhysicalMaterial material;
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
#endif`,L1=`uniform sampler2D dfgLUT;
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
}`,k1=`
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
#endif`,I1=`#if defined( RE_IndirectDiffuse )
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
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,C1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q1=`#if defined( USE_POINTS_UV )
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
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$1=`#if defined( USE_MORPHCOLORS )
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
#endif`,Q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
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
#endif`,J1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ty=`#ifdef USE_NORMALMAP
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
#endif`,ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,by=`float getShadowMask() {
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
}`,xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,My=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vy=`#ifdef USE_SKINNING
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
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ey=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ay=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#ifdef USE_TRANSMISSION
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fy=`uniform sampler2D t2D;
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`uniform float backgroundBlurriness;
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`#include <common>
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
}`,By=`#if DEPTH_PACKING == 3200
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
}`,Gy=`#define DISTANCE
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
}`,Oy=`#define DISTANCE
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
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
}`,Yy=`uniform vec3 diffuse;
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
}`,$y=`#include <common>
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
}`,Qy=`uniform vec3 diffuse;
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
}`,zy=`#define LAMBERT
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
}`,Jy=`#define LAMBERT
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
}`,jy=`#define MATCAP
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
}`,Wy=`#define MATCAP
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
}`,Ky=`#define NORMAL
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
}`,Zy=`#define NORMAL
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
}`,eM=`#define PHONG
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
}`,tM=`#define PHONG
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
}`,nM=`#define STANDARD
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
}`,iM=`#define STANDARD
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
}`,sM=`#define TOON
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
}`,aM=`#define TOON
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
}`,rM=`uniform float size;
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
}`,oM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 color;
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
}`,uM=`uniform float rotation;
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
}`,hM=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:Fx,alphahash_pars_fragment:Dx,alphamap_fragment:Cx,alphamap_pars_fragment:Nx,alphatest_fragment:Ux,alphatest_pars_fragment:Hx,aomap_fragment:Bx,aomap_pars_fragment:Gx,batching_pars_vertex:Ox,batching_vertex:qx,begin_vertex:Xx,beginnormal_vertex:Vx,bsdfs:Yx,iridescence_fragment:$x,bumpmap_pars_fragment:Qx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Jx,clipping_planes_pars_vertex:jx,clipping_planes_vertex:Wx,color_fragment:Kx,color_pars_fragment:Zx,color_pars_vertex:e1,color_vertex:t1,common:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:s1,displacementmap_vertex:a1,emissivemap_fragment:r1,emissivemap_pars_fragment:o1,colorspace_fragment:l1,colorspace_pars_fragment:c1,envmap_fragment:u1,envmap_common_pars_fragment:h1,envmap_pars_fragment:d1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:T1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:b1,fog_pars_fragment:x1,gradientmap_pars_fragment:y1,lightmap_pars_fragment:M1,lights_lambert_fragment:v1,lights_lambert_pars_fragment:_1,lights_pars_begin:S1,lights_toon_fragment:E1,lights_toon_pars_fragment:A1,lights_phong_fragment:R1,lights_phong_pars_fragment:P1,lights_physical_fragment:w1,lights_physical_pars_fragment:L1,lights_fragment_begin:k1,lights_fragment_maps:I1,lights_fragment_end:F1,lightprobes_pars_fragment:D1,logdepthbuf_fragment:C1,logdepthbuf_pars_fragment:N1,logdepthbuf_pars_vertex:U1,logdepthbuf_vertex:H1,map_fragment:B1,map_pars_fragment:G1,map_particle_fragment:O1,map_particle_pars_fragment:q1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:V1,morphinstance_vertex:Y1,morphcolor_vertex:$1,morphnormal_vertex:Q1,morphtarget_pars_vertex:z1,morphtarget_vertex:J1,normal_fragment_begin:j1,normal_fragment_maps:W1,normal_pars_fragment:K1,normal_pars_vertex:Z1,normal_vertex:ey,normalmap_pars_fragment:ty,clearcoat_normal_fragment_begin:ny,clearcoat_normal_fragment_maps:iy,clearcoat_pars_fragment:sy,iridescence_pars_fragment:ay,opaque_fragment:ry,packing:oy,premultiplied_alpha_fragment:ly,project_vertex:cy,dithering_fragment:uy,dithering_pars_fragment:hy,roughnessmap_fragment:dy,roughnessmap_pars_fragment:fy,shadowmap_pars_fragment:py,shadowmap_pars_vertex:my,shadowmap_vertex:gy,shadowmask_pars_fragment:by,skinbase_vertex:xy,skinning_pars_vertex:yy,skinning_vertex:My,skinnormal_vertex:vy,specularmap_fragment:_y,specularmap_pars_fragment:Sy,tonemapping_fragment:Ty,tonemapping_pars_fragment:Ey,transmission_fragment:Ay,transmission_pars_fragment:Ry,uv_pars_fragment:Py,uv_pars_vertex:wy,uv_vertex:Ly,worldpos_vertex:ky,background_vert:Iy,background_frag:Fy,backgroundCube_vert:Dy,backgroundCube_frag:Cy,cube_vert:Ny,cube_frag:Uy,depth_vert:Hy,depth_frag:By,distance_vert:Gy,distance_frag:Oy,equirect_vert:qy,equirect_frag:Xy,linedashed_vert:Vy,linedashed_frag:Yy,meshbasic_vert:$y,meshbasic_frag:Qy,meshlambert_vert:zy,meshlambert_frag:Jy,meshmatcap_vert:jy,meshmatcap_frag:Wy,meshnormal_vert:Ky,meshnormal_frag:Zy,meshphong_vert:eM,meshphong_frag:tM,meshphysical_vert:nM,meshphysical_frag:iM,meshtoon_vert:sM,meshtoon_frag:aM,points_vert:rM,points_frag:oM,shadow_vert:lM,shadow_frag:cM,sprite_vert:uM,sprite_frag:hM},Oe={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ji={basic:{uniforms:Wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Wn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Wn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new he(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Wn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Wn([Oe.points,Oe.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Wn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Wn([Oe.common,Oe.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Wn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Wn([Oe.sprite,Oe.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Wn([Oe.common,Oe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Wn([Oe.lights,Oe.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Ji.physical={uniforms:Wn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};var fu={r:0,b:0,g:0},dM=new Je,V0=new ft;V0.set(-1,0,0,0,1,0,0,0,1);function fM(i,e,t,n,s,a){let r=new he(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let _=y.isScene===!0?y.background:null;if(_&&_.isTexture){let v=y.backgroundBlurriness>0;_=e.get(_,v)}return _}function p(y){let _=!1,v=f(y);v===null?g(r,o):v&&v.isColor&&(g(v,1),_=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,_){let v=f(_);v&&v.isCubeTexture?(c===void 0&&(c=new ve(new Jn(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:ga(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dM.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(V0),c.material.toneMapped=xt.getTransfer(v.colorSpace)!==Bt,(u!==v||h!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ve(new Ni(2,2),new nn({name:"BackgroundMaterial",uniforms:ga(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=xt.getTransfer(v.colorSpace)!==Bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,_){y.getRGB(fu,Md(i)),t.buffers.color.setClear(fu.r,fu.g,fu.b,_,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,_=1){r.set(y),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(r,o)},render:p,addToRenderList:b,dispose:m}}function pM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),a=s,r=!1;function o(G,X,w,S,D){let A=!1,k=h(G,S,w,X);a!==k&&(a=k,c(a.object)),A=f(G,S,w,D),A&&p(G,S,w,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(A||r)&&(r=!1,v(G,X,w,S),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(G){return i.bindVertexArray(G)}function u(G){return i.deleteVertexArray(G)}function h(G,X,w,S){let D=S.wireframe===!0,A=n[X.id];A===void 0&&(A={},n[X.id]=A);let k=G.isInstancedMesh===!0?G.id:0,O=A[k];O===void 0&&(O={},A[k]=O);let H=O[w.id];H===void 0&&(H={},O[w.id]=H);let N=H[D];return N===void 0&&(N=d(l()),H[D]=N),N}function d(G){let X=[],w=[],S=[];for(let D=0;D<t;D++)X[D]=0,w[D]=0,S[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:w,attributeDivisors:S,object:G,attributes:{},index:null}}function f(G,X,w,S){let D=a.attributes,A=X.attributes,k=0,O=w.getAttributes();for(let H in O)if(O[H].location>=0){let Y=D[H],q=A[H];if(q===void 0&&(H==="instanceMatrix"&&G.instanceMatrix&&(q=G.instanceMatrix),H==="instanceColor"&&G.instanceColor&&(q=G.instanceColor)),Y===void 0||Y.attribute!==q||q&&Y.data!==q.data)return!0;k++}return a.attributesNum!==k||a.index!==S}function p(G,X,w,S){let D={},A=X.attributes,k=0,O=w.getAttributes();for(let H in O)if(O[H].location>=0){let Y=A[H];Y===void 0&&(H==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),H==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor));let q={};q.attribute=Y,Y&&Y.data&&(q.data=Y.data),D[H]=q,k++}a.attributes=D,a.attributesNum=k,a.index=S}function b(){let G=a.newAttributes;for(let X=0,w=G.length;X<w;X++)G[X]=0}function g(G){m(G,0)}function m(G,X){let w=a.newAttributes,S=a.enabledAttributes,D=a.attributeDivisors;w[G]=1,S[G]===0&&(i.enableVertexAttribArray(G),S[G]=1),D[G]!==X&&(i.vertexAttribDivisor(G,X),D[G]=X)}function y(){let G=a.newAttributes,X=a.enabledAttributes;for(let w=0,S=X.length;w<S;w++)X[w]!==G[w]&&(i.disableVertexAttribArray(w),X[w]=0)}function _(G,X,w,S,D,A,k){k===!0?i.vertexAttribIPointer(G,X,w,D,A):i.vertexAttribPointer(G,X,w,S,D,A)}function v(G,X,w,S){b();let D=S.attributes,A=w.getAttributes(),k=X.defaultAttributeValues;for(let O in A){let H=A[O];if(H.location>=0){let N=D[O];if(N===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&(N=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&(N=G.instanceColor)),N!==void 0){let Y=N.normalized,q=N.itemSize,z=e.get(N);if(z===void 0)continue;let U=z.buffer,J=z.type,Z=z.bytesPerElement,ae=J===i.INT||J===i.UNSIGNED_INT||N.gpuType===Pc;if(N.isInterleavedBufferAttribute){let oe=N.data,ge=oe.isInterleavedBuffer===!0?oe.stride:oe.itemSize,Se=N.offset;if(oe.isInstancedInterleavedBuffer||oe.isInstancedBufferAttribute){for(let Ue=0;Ue<H.locationSize;Ue++)m(H.location+Ue,oe.meshPerAttribute);G.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<H.locationSize;Ue++)g(H.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,U);for(let Ue=0;Ue<H.locationSize;Ue++)_(H.location+Ue,q/H.locationSize,J,Y,ge*Z,(Se+q/H.locationSize*Ue)*Z,ae)}else{if(N.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe,N.meshPerAttribute);G.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let oe=0;oe<H.locationSize;oe++)g(H.location+oe);i.bindBuffer(i.ARRAY_BUFFER,U);for(let oe=0;oe<H.locationSize;oe++)_(H.location+oe,q/H.locationSize,J,Y,q*Z,q/H.locationSize*oe*Z,ae)}}else if(k!==void 0){let Y=k[O];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(H.location,Y);break;case 3:i.vertexAttrib3fv(H.location,Y);break;case 4:i.vertexAttrib4fv(H.location,Y);break;default:i.vertexAttrib1fv(H.location,Y)}}}}y()}function T(){F();for(let G in n){let X=n[G];for(let w in X){let S=X[w];for(let D in S){let A=S[D];for(let k in A)u(A[k].object),delete A[k];delete S[D]}}delete n[G]}}function E(G){if(n[G.id]===void 0)return;let X=n[G.id];for(let w in X){let S=X[w];for(let D in S){let A=S[D];for(let k in A)u(A[k].object),delete A[k];delete S[D]}}delete n[G.id]}function M(G){for(let X in n){let w=n[X];for(let S in w){let D=w[S];if(D[G.id]===void 0)continue;let A=D[G.id];for(let k in A)u(A[k].object),delete A[k];delete D[G.id]}}}function x(G){for(let X in n){let w=n[X],S=G.isInstancedMesh===!0?G.id:0,D=w[S];if(D!==void 0){for(let A in D){let k=D[A];for(let O in k)u(k[O].object),delete k[O];delete D[A]}delete w[S],Object.keys(w).length===0&&delete n[X]}}}function F(){I(),r=!0,a!==s&&(a=s,c(a.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:M,initAttributes:b,enableAttribute:g,disableUnusedAttributes:y}}function mM(i,e,t){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function gM(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(M){return!(M!==ui&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let x=M===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==jn&&M!==bi&&!x&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,maxSamples:T,samples:E}}function bM(i){let e=this,t=null,n=0,s=!1,a=!1,r=new Ii,o=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,b=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||a&&!g)a?u(null):c();else{let y=a?0:n,_=y*4,v=m.clippingState||null;l.value=v,v=u(p,d,_,f);for(let T=0;T!==_;++T)v[T]=t[T];m.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let b=h!==null?h.length:0,g=null;if(b!==0){if(g=l.value,p!==!0||g===null){let m=f+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=f;_!==b;++_,v+=4)r.copy(h[_]).applyMatrix4(y,o),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var zo=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new no(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jn(5,5,5),a=new nn({name:"CubemapFromEquirect",uniforms:ga(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Nn});a.uniforms.tEquirect.value=t;let r=new ve(s,a),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=Pn),new rr(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}},_0=256,xM=3,yM=20,Y0=256,$0=16,MM=3,vM=new C,_M=new he,hi=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new rr(1,10,null),this._boxMesh=new ve(new Jn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){let{size:r=256,position:o=vM}=a,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(_M));let g=new rr(n,s,u);return g.position.copy(o),g.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=b,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_0,gd(e))}_fromTexture(e,t){e.mapping===fa||e.mapping===cr?this._setSize(e.image.length===0?_0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=S0(e,!1,!1),n=Math.log2(e)-xM;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=S0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,a=this._cubeCamera;s.material=n,a.renderTarget=e,a.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),a.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===fa||e.mapping===cr?(this._cubemapMaterial===null&&(this._cubemapMaterial=E0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=T0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=SM(),this._integrationMaterial=TM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/$0);for(let r=0;r<=n;r++){let o=i.lodToRoughness(r,n);if(r>n-MM)a.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Y0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=EM());let n=this._blurMaterial,s=n.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(a,0,n)}};function S0(i,e,t){return new zo(i,{minFilter:ci,generateMipmaps:e,type:gn,colorSpace:wn,depthBuffer:t})}function Jo(i,e,t){return new nn({name:i,uniforms:e,vertexShader:Tt.cube_vert,fragmentShader:t,side:kn,blending:Nn,depthTest:!1,depthWrite:!1})}function SM(){return Jo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Y0}u

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
	`)}function TM(){return Jo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$0}},`

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
	`)}function EM(){return Jo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${yM}
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
	`)}function T0(){return Jo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function E0(){return Jo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function AM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?r(d):a(d)}function a(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ec||f===Ac)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let b=new zo(p.height);return b.fromEquirectangularTexture(i,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Ec||f===Ac,b=f===fa||f===cr;if(p||b){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new hi(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return p&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new hi(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===Ec?d.mapping=fa:f===Ac&&(d.mapping=cr),d}function l(d){let f=0,p=6;for(let b=0;b<p;b++)d[b]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function RM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&na("WebGLRenderer: "+n+" extension not supported."),s}}}function PM(i,e,t,n){let s={},a=new WeakMap,r=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],r.unregister(p);let b=a.get(p);b&&(e.remove(b),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),r.register(b,b.id,b),t.memory.geometries++),b}function u(p){let b=p.attributes;for(let g in b)e.update(b[g],i.ARRAY_BUFFER)}function h(p){let b=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let y=b!==null?b.array.length:g.array.length/3-1,_=g.count>=65535?Kr:Wr,v=new _(Math.ceil(y/3)*6,1),T=v.array;if(b!==null){let M=b.array;m=b.version;for(let x=0,F=0;x<y;x+=3){let I=M[x+0],G=M[x+1],X=M[x+2];T[F++]=I,T[F++]=G,T[F++]=G,T[F++]=X,T[F++]=X,T[F++]=I}}else{m=g.version;for(let M=0,x=0;M<y;M+=3){let F=M+0,I=M+1,G=M+2;T[x++]=F,T[x++]=I,T[x++]=I,T[x++]=G,T[x++]=G,T[x++]=F}}v.version=m;let E=a.get(p);E&&e.remove(E),a.set(p,v)}function d(p){let b=a.get(p);if(b){let g=p.index;g!==null&&b.version<g.version&&h(p)}else h(p);return a.get(p)}function f(){for(let p in s){let b=s[p].deref();b!==void 0&&l(b)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function wM(i,e,t){let n;function s(h){n=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,d){i.drawElements(n,d,a,h*r),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,a,h*r,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,h,0,f);let b=0;for(let g=0;g<f;g++)b+=d[g];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function LM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:rt("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kM(i,e,t){let n=new WeakMap,s=new Ut;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let F=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),b===!0&&(_=3);let v=o.attributes.position.count*_,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*T*4*h),M=new Jr(E,v,T,h);M.type=bi,M.needsUpdate=!0;let x=_*4;for(let I=0;I<h;I++){let G=g[I],X=m[I],w=y[I],S=v*T*4*I;for(let D=0;D<G.count;D++){let A=D*x;f===!0&&(s.fromBufferAttribute(G,D),E[S+A+0]=s.x,E[S+A+1]=s.y,E[S+A+2]=s.z,E[S+A+3]=0),p===!0&&(s.fromBufferAttribute(X,D),E[S+A+4]=s.x,E[S+A+5]=s.y,E[S+A+6]=s.z,E[S+A+7]=0),b===!0&&(s.fromBufferAttribute(w,D),E[S+A+8]=s.x,E[S+A+9]=s.y,E[S+A+10]=s.z,E[S+A+11]=w.itemSize===4?s.w:1)}}d={count:h,texture:M,size:new me(v,T)},n.set(o,d),o.addEventListener("dispose",F)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function IM(i,e,t,n,s){let a=new WeakMap;function r(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(a.get(d)!==u&&(e.update(d),a.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return d}function o(){a=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var FM={[Fo]:"LINEAR_TONE_MAPPING",[Do]:"REINHARD_TONE_MAPPING",[Co]:"CINEON_TONE_MAPPING",[da]:"ACES_FILMIC_TONE_MAPPING",[Uo]:"AGX_TONE_MAPPING",[Ho]:"NEUTRAL_TONE_MAPPING",[No]:"CUSTOM_TONE_MAPPING"};function DM(i,e,t,n,s,a){let r=new ln(e,t,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new lt;u.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new tt([0,2,0,0,2,0],2));let h=new tr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ve(u,h),f=new xs(-1,1,1,-1,0,1),p=null,b=null,g=!1,m,y=null,_=[],v=!1;this.setSize=function(T,E){r.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let M=0;M<_.length;M++){let x=_[M];x.setSize&&x.setSize(T,E)}},this.setEffects=function(T){_=T,v=_.length>0&&_[0].isRenderPass===!0;let E=r.width,M=r.height;_.length>0&&o===null&&(o=new ln(E,M,{type:gn,depthBuffer:!1,stencilBuffer:!1}),l=new ln(E,M,{type:gn,depthBuffer:!1,stencilBuffer:!1}));let x=s===!0&&_.some(F=>F.needsDepthTexture===!0);x!==(r.depthTexture!==null)&&(x===!0&&c===null&&(c=new Di(E,M),a===!0&&(c.format=Hi,c.type=ys)),r.dispose(),r.depthTexture=x?c:null,r.resolveDepthBuffer=x,r.storeMultisampledDepthBuffer=x);for(let F=0;F<_.length;F++){let I=_[F];I.setSize&&I.setSize(E,M),x&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(T,E){if(g||T.toneMapping===Qi&&_.length===0)return!1;if(y=E,E!==null){let M=E.width,x=E.height;(r.width!==M||r.height!==x)&&this.setSize(M,x)}return v===!1&&T.setRenderTarget(r),m=T.toneMapping,T.toneMapping=Qi,!0},this.hasRenderPass=function(){return v},this.end=function(T,E){T.toneMapping=m,g=!0;let M=r,x=o;for(let F=0;F<_.length;F++){let I=_[F];I.enabled!==!1&&(I.render(T,x,M,E),I.needsSwap!==!1&&(M=x,x=x===o?l:o))}if(p!==T.outputColorSpace||b!==T.toneMapping){p=T.outputColorSpace,b=T.toneMapping,h.defines={},xt.getTransfer(p)===Bt&&(h.defines.SRGB_TRANSFER="");let F=FM[b];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,T.setRenderTarget(y),T.render(d,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Q0=new Ln,z0=new Di(1,1),J0=new io(1),j0=new Jr,W0=new sc,K0=new no,A0=[],R0=[],P0=new Float32Array(16),w0=new Float32Array(9),L0=new Float32Array(4);function pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,a=A0[s];if(a===void 0&&(a=new Float32Array(s),A0[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function In(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gu(i,e){let t=R0[e];t===void 0&&(t=new Int32Array(e),R0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function CM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function NM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2fv(this.addr,e),Fn(t,e)}}function UM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;i.uniform3fv(this.addr,e),Fn(t,e)}}function HM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4fv(this.addr,e),Fn(t,e)}}function BM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Fn(t,e)}else{if(In(t,n))return;L0.set(n),i.uniformMatrix2fv(this.addr,!1,L0),Fn(t,n)}}function GM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Fn(t,e)}else{if(In(t,n))return;w0.set(n),i.uniformMatrix3fv(this.addr,!1,w0),Fn(t,n)}}function OM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Fn(t,e)}else{if(In(t,n))return;P0.set(n),i.uniformMatrix4fv(this.addr,!1,P0),Fn(t,n)}}function qM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function XM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2iv(this.addr,e),Fn(t,e)}}function VM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;i.uniform3iv(this.addr,e),Fn(t,e)}}function YM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4iv(this.addr,e),Fn(t,e)}}function $M(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function QM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2uiv(this.addr,e),Fn(t,e)}}function zM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;i.uniform3uiv(this.addr,e),Fn(t,e)}}function JM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4uiv(this.addr,e),Fn(t,e)}}function bu(i){return i.version===0&&(i.compareFunction=dd,i.needsUpdate=!0),i}function jM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?a=bu(z0):a=Q0,t.setTexture2D(e||a,s)}function WM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||W0,s)}function KM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_CUBE_SHADOW?a=bu(J0):a=K0,t.setTextureCube(e||a,s)}function ZM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||j0,s)}function e2(i){switch(i){case 5126:return CM;case 35664:return NM;case 35665:return UM;case 35666:return HM;case 35674:return BM;case 35675:return GM;case 35676:return OM;case 5124:case 35670:return qM;case 35667:case 35671:return XM;case 35668:case 35672:return VM;case 35669:case 35673:return YM;case 5125:return $M;case 36294:return QM;case 36295:return zM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return ZM}}function t2(i,e){i.uniform1fv(this.addr,e)}function n2(i,e){let t=pr(e,this.size,2);i.uniform2fv(this.addr,t)}function i2(i,e){let t=pr(e,this.size,3);i.uniform3fv(this.addr,t)}function s2(i,e){let t=pr(e,this.size,4);i.uniform4fv(this.addr,t)}function a2(i,e){let t=pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function r2(i,e){let t=pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function o2(i,e){let t=pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function l2(i,e){i.uniform1iv(this.addr,e)}function c2(i,e){i.uniform2iv(this.addr,e)}function u2(i,e){i.uniform3iv(this.addr,e)}function h2(i,e){i.uniform4iv(this.addr,e)}function d2(i,e){i.uniform1uiv(this.addr,e)}function f2(i,e){i.uniform2uiv(this.addr,e)}function p2(i,e){i.uniform3uiv(this.addr,e)}function m2(i,e){i.uniform4uiv(this.addr,e)}function g2(i,e,t){let n=this.cache,s=e.length,a=gu(t,s);In(n,a)||(i.uniform1iv(this.addr,a),Fn(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=bu(z0):r=Q0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function b2(i,e,t){let n=this.cache,s=e.length,a=gu(t,s);In(n,a)||(i.uniform1iv(this.addr,a),Fn(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||W0,a[r])}function x2(i,e,t){let n=this.cache,s=e.length,a=gu(t,s);In(n,a)||(i.uniform1iv(this.addr,a),Fn(n,a));let r;this.type===i.SAMPLER_CUBE_SHADOW?r=bu(J0):r=K0;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||r,a[o])}function y2(i,e,t){let n=this.cache,s=e.length,a=gu(t,s);In(n,a)||(i.uniform1iv(this.addr,a),Fn(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||j0,a[r])}function M2(i){switch(i){case 5126:return t2;case 35664:return n2;case 35665:return i2;case 35666:return s2;case 35674:return a2;case 35675:return r2;case 35676:return o2;case 5124:case 35670:return l2;case 35667:case 35671:return c2;case 35668:case 35672:return u2;case 35669:case 35673:return h2;case 5125:return d2;case 36294:return f2;case 36295:return p2;case 36296:return m2;case 35678:case 36198:case 36298:case 36306:case 35682:return g2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return x2;case 36289:case 36303:case 36311:case 36292:return y2}}var kd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=e2(t.type)}},Id=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M2(t.type)}},Fd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(e,t[o.id],n)}}},wd=/(\w+)(\])?(\[|\.)?/g;function k0(i,e){i.seq.push(e),i.map[e.id]=e}function v2(i,e,t){let n=i.name,s=n.length;for(wd.lastIndex=0;;){let a=wd.exec(n),r=wd.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){k0(t,c===void 0?new kd(o,i,e):new Id(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Fd(o),k0(t,h)),t=h}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);v2(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){let a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){let o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,a=e.length;s!==a;++s){let r=e[s];r.id in t&&n.push(r)}return n}};function I0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var _2=37297,S2=0;function T2(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}var F0=new ft;function E2(i){xt._getMatrix(F0,xt.workingColorSpace,i);let e=`mat3( ${F0.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case Qr:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function D0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+T2(i.getShaderSource(e),o)}else return a}function A2(i,e){let t=E2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var R2={[Fo]:"Linear",[Do]:"Reinhard",[Co]:"Cineon",[da]:"ACESFilmic",[Uo]:"AgX",[Ho]:"Neutral",[No]:"Custom"};function P2(i,e){let t=R2[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pu=new C;function w2(){xt.getLuminanceCoefficients(pu);let i=pu.x.toFixed(4),e=pu.y.toFixed(4),t=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function k2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let a=i.getActiveAttrib(e,s),r=a.name,o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Qo(i){return i!==""}function C0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function N0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var F2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(i){return i.replace(F2,D2)}function D2(i,e){let t=Tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Dd(t)}var C2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U0(i){return i.replace(C2,N2)}function N2(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function H0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var U2={[ua]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function H2(i){return U2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B2={[cr]:"ENVMAP_MODE_REFRACTION"};function G2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":B2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var O2={[Io]:"ENVMAP_BLENDING_MULTIPLY",[Zp]:"ENVMAP_BLENDING_MIX",[e0]:"ENVMAP_BLENDING_ADD"};function q2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":O2[i.combine]||"ENVMAP_BLENDING_NONE"}function X2(i,e,t,n){let s=i.getContext(),a=t.defines,r=t.vertexShader,o=t.fragmentShader,l=H2(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=G2(t),h=q2(t),d=L2(t),f=k2(a),p=s.createProgram(),b,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Qo).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Qo).join(`
`),g.length>0&&(g+=`
`)):(b=[H0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),g=[H0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?P2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,A2("linearToOutputTexel",t.outputColorSpace),w2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),r=Dd(r),r=C0(r,t),r=N0(r,t),o=Dd(o),o=C0(o,t),o=N0(o,t),r=U0(r),o=U0(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+b+r,_=m+g+o,v=I0(s,s.VERTEX_SHADER,y),T=I0(s,s.FRAGMENT_SHADER,_);s.attachShader(p,v),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(I){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(p)||"",X=s.getShaderInfoLog(v)||"",w=s.getShaderInfoLog(T)||"",S=G.trim(),D=X.trim(),A=w.trim(),k=!0,O=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,T);else{let H=D0(s,v,"vertex"),N=D0(s,T,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+S+`
`+H+`
`+N)}else S!==""?We("WebGLProgram: Program Info Log:",S):(D===""||A==="")&&(O=!1);O&&(I.diagnostics={runnable:k,programLog:S,vertexShader:{log:D,prefix:b},fragmentShader:{log:A,prefix:g}})}s.deleteShader(v),s.deleteShader(T),M=new fr(s,p),x=I2(s,p)}let M;this.getUniforms=function(){return M===void 0&&E(this),M};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(p,_2)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S2++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=T,this}var V2=0,Cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nd(e),t.set(e,n)),n}},Nd=class{constructor(e){this.id=V2++,this.code=e,this.usedTimes=0}};function Y2(i){return i===Xs||i===Xo||i===Vo}function $2(i,e,t,n,s,a){let r=new ja,o=new Cd,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,x,F,I,G,X){let w=I.fog,S=G.geometry,D=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,A=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,k=e.get(M.envMap||D,A),O=d[M.type],H=n.precision;M.precision!==null&&(H=n.getMaxPrecision(M.precision),H!==M.precision&&We("WebGLProgram.getParameters:",M.precision,"not supported, using",H,"instead."));let N=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,Y=N!==void 0?N.length:0,q=0;S.morphAttributes.position!==void 0&&(q=1),S.morphAttributes.normal!==void 0&&(q=2),S.morphAttributes.color!==void 0&&(q=3);let z,U,J,Z;if(O){let He=Ji[O];z=He.vertexShader,U=He.fragmentShader}else{z=M.vertexShader,U=M.fragmentShader;let He=o.getVertexShaderStage(M),kt=o.getFragmentShaderStage(M);o.update(M,He,kt),J=He.id,Z=kt.id}let ae=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),ge=G.isInstancedMesh===!0,Se=G.isBatchedMesh===!0,Ue=!!M.map,Ge=!!M.matcap,be=!!k,ie=be&&k.isPMREMTexture===!0,pe=!!M.aoMap,$=!!M.lightMap,ye=!!M.bumpMap&&M.wireframe===!1,Ee=!!M.normalMap,it=!!M.displacementMap,qe=!!M.emissiveMap,Ye=!!M.metalnessMap,gt=!!M.roughnessMap,Et=M.anisotropy>0,j=M.clearcoat>0,yt=M.diffuseRoughness>0,at=M.dispersion>0,Ft=M.retroreflectivity>0,Pe=M.iridescence>0,Ot=M.sheen>0,fe=M.transmission>0,$e=Et&&!!M.anisotropyMap,B=j&&!!M.clearcoatMap,R=j&&!!M.clearcoatNormalMap,te=j&&!!M.clearcoatRoughnessMap,Me=yt&&!!M.diffuseRoughnessMap,ce=Pe&&!!M.iridescenceMap,Te=Pe&&!!M.iridescenceThicknessMap,we=Ot&&!!M.sheenColorMap,re=Ot&&!!M.sheenRoughnessMap,ue=!!M.specularMap,Ae=!!M.specularColorMap,Q=!!M.specularIntensityMap,de=fe&&!!M.transmissionMap,le=fe&&!!M.thicknessMap,De=!!M.gradientMap,Re=!!M.alphaMap,Fe=M.alphaTest>0,je=!!M.alphaHash,bt=!!M.extensions,_e=Qi;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Ze=ie?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,pt={shaderID:O,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:U,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:H,batching:Se,batchingColor:Se&&G._colorsTexture!==null,instancing:ge,instancingColor:ge&&G.instanceColor!==null,instancingMorph:ge&&G.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ue,matcap:Ge,envMap:be,envMapMode:be&&k.mapping,envMapPMREM:ie,envMapMaxLod:ie?Ze.length-1:null,envMapSize:ie?Ze[0].width:null,aoMap:pe,lightMap:$,bumpMap:ye,normalMap:Ee,displacementMap:it,emissiveMap:qe,normalMapObjectSpace:Ee&&M.normalMapType===s0,normalMapTangentSpace:Ee&&M.normalMapType===ma,packedNormalMap:Ee&&M.normalMapType===ma&&Y2(M.normalMap.format),metalnessMap:Ye,roughnessMap:gt,anisotropy:Et,anisotropyMap:$e,clearcoat:j,clearcoatMap:B,clearcoatNormalMap:R,clearcoatRoughnessMap:te,diffuseRoughness:yt,diffuseRoughnessMap:Me,dispersion:at,retroreflection:Ft,iridescence:Pe,iridescenceMap:ce,iridescenceThicknessMap:Te,sheen:Ot,sheenColorMap:we,sheenRoughnessMap:re,specularMap:ue,specularColorMap:Ae,specularIntensityMap:Q,transmission:fe,transmissionMap:de,thicknessMap:le,gradientMap:De,opaque:M.transparent===!1&&M.blending===lr&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:Fe,alphaHash:je,combine:M.combine,mapUv:Ue&&f(M.map.channel),aoMapUv:pe&&f(M.aoMap.channel),lightMapUv:$&&f(M.lightMap.channel),bumpMapUv:ye&&f(M.bumpMap.channel),normalMapUv:Ee&&f(M.normalMap.channel),displacementMapUv:it&&f(M.displacementMap.channel),emissiveMapUv:qe&&f(M.emissiveMap.channel),metalnessMapUv:Ye&&f(M.metalnessMap.channel),roughnessMapUv:gt&&f(M.roughnessMap.channel),anisotropyMapUv:$e&&f(M.anisotropyMap.channel),clearcoatMapUv:B&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:R&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&f(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&f(M.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:we&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:re&&f(M.sheenRoughnessMap.channel),specularMapUv:ue&&f(M.specularMap.channel),specularColorMapUv:Ae&&f(M.specularColorMap.channel),specularIntensityMapUv:Q&&f(M.specularIntensityMap.channel),transmissionMapUv:de&&f(M.transmissionMap.channel),thicknessMapUv:le&&f(M.thicknessMap.channel),alphaMapUv:Re&&f(M.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(Ee||Et),vertexNormals:!!S.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!S.attributes.uv&&(Ue||Re),fog:!!w,useFog:M.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||S.attributes.normal===void 0&&Ee===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:S.attributes.position!==void 0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:q,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:X.filter(He=>He.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ue&&M.map.isVideoTexture===!0&&xt.getTransfer(M.map.colorSpace)===Bt,decodeVideoTextureEmissive:qe&&M.emissiveMap.isVideoTexture===!0&&xt.getTransfer(M.emissiveMap.colorSpace)===Bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Dt,flipSided:M.side===kn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:bt&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&M.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function b(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let F in M.defines)x.push(F),x.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(g(x,M),m(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function g(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapPMREM),M.push(x.envMapMaxLod),M.push(x.envMapSize),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.diffuseRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.numSunLights),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numSunLightShadows),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.numLightProbeGrids),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function m(M,x){r.disableAll(),x.instancing&&r.enable(0),x.instancingColor&&r.enable(1),x.instancingMorph&&r.enable(2),x.matcap&&r.enable(3),x.envMap&&r.enable(4),x.normalMapObjectSpace&&r.enable(5),x.normalMapTangentSpace&&r.enable(6),x.clearcoat&&r.enable(7),x.iridescence&&r.enable(8),x.alphaTest&&r.enable(9),x.vertexColors&&r.enable(10),x.vertexAlphas&&r.enable(11),x.vertexUv1s&&r.enable(12),x.vertexUv2s&&r.enable(13),x.vertexUv3s&&r.enable(14),x.vertexTangents&&r.enable(15),x.anisotropy&&r.enable(16),x.alphaHash&&r.enable(17),x.batching&&r.enable(18),x.dispersion&&r.enable(19),x.retroreflection&&r.enable(24),x.diffuseRoughness&&r.enable(25),x.batchingColor&&r.enable(20),x.gradientMap&&r.enable(21),x.packedNormalMap&&r.enable(22),x.vertexNormals&&r.enable(23),M.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.reversedDepthBuffer&&r.enable(4),x.skinning&&r.enable(5),x.morphTargets&&r.enable(6),x.morphNormals&&r.enable(7),x.morphColors&&r.enable(8),x.premultipliedAlpha&&r.enable(9),x.shadowMapEnabled&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),x.decodeVideoTextureEmissive&&r.enable(20),x.alphaToCoverage&&r.enable(21),x.numLightProbeGrids>0&&r.enable(22),x.hasPositionAttribute&&r.enable(23),M.push(r.mask)}function y(M){let x=d[M.type],F;if(x){let I=Ji[x];F=ti.clone(I.uniforms)}else F=M.uniforms;return F}function _(M,x){let F=u.get(x);return F!==void 0?++F.usedTimes:(F=new X2(i,x,M,s),c.push(F),u.set(x,F)),F}function v(M){if(--M.usedTimes===0){let x=c.indexOf(M);c[x]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function T(M){o.remove(M)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:y,acquireProgram:_,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:E}}function Q2(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function z2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function B0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function G0(){let i=[],e=0,t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,b,g,m){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:r(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:m},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=r(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=g,y.group=m),e++,y}function l(d,f,p,b,g,m,y){y.reversedDepth===!0&&(g=-g);let _=o(d,f,p,b,g,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function c(d,f,p,b,g,m){let y=o(d,f,p,b,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||z2),n.length>1&&n.sort(f||B0),s.length>1&&s.sort(f||B0)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:h,sort:u}}function J2(){let i=new WeakMap;function e(n,s){let a=i.get(n),r;return a===void 0?(r=new G0,i.set(n,[r])):s>=a.length?(r=new G0,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function j2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new he};break;case"SpotLight":t={position:new C,direction:new C,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function W2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var K2=0;function Z2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ev(i){let e=new j2,t=W2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,a=new Je,r=new Je;function o(c){let u=0,h=0,d=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let f=0,p=0,b=0,g=0,m=0,y=0,_=0,v=0,T=0,E=0,M=0,x=0,F=0,I=0;c.sort(Z2);for(let X=0,w=c.length;X<w;X++){let S=c[X],D=S.color,A=S.intensity,k=S.distance,O=null;if(S.shadow&&S.shadow.map&&(S.shadow.map.texture.format===Xs?O=S.shadow.map.texture:O=S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)u+=D.r*A,h+=D.g*A,d+=D.b*A;else if(S.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(S.sh.coefficients[H],A);I++}else if(S.isSunLight){let H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let N=S.shadow,Y=t.get(S);Y.shadowIntensity=N.intensity,Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),n.sunShadow[p]=Y,n.sunShadowMap[p]=O;let q=N.getViewportCount();for(let z=0;z<q;z++)n.sunShadowMatrix[b+z]=N.getMatrix(z),n.sunShadowCascade[b+z]=N._cascadeData[z];b+=q,p++}n.sun[f]=H,f++}else if(S.isDirectionalLight){let H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let N=S.shadow,Y=t.get(S);Y.shadowIntensity=N.intensity,Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=O,n.directionalShadowMatrix[g]=S.shadow.matrix,T++}n.directional[g]=H,g++}else if(S.isSpotLight){let H=e.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(D).multiplyScalar(A),H.distance=k,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,n.spot[y]=H;let N=S.shadow;if(S.map&&(n.spotLightMap[x]=S.map,x++,N.updateMatrices(S),S.castShadow&&F++),n.spotLightMatrix[y]=N.matrix,S.castShadow){let Y=t.get(S);Y.shadowIntensity=N.intensity,Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,n.spotShadow[y]=Y,n.spotShadowMap[y]=O,M++}y++}else if(S.isRectAreaLight){let H=e.get(S);H.color.copy(D).multiplyScalar(A),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),n.rectArea[_]=H,_++}else if(S.isPointLight){let H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){let N=S.shadow,Y=t.get(S);Y.shadowIntensity=N.intensity,Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,Y.shadowCameraNear=N.camera.near,Y.shadowCameraFar=N.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=S.shadow.matrix,E++}n.point[m]=H,m++}else if(S.isHemisphereLight){let H=e.get(S);H.skyColor.copy(S.color).multiplyScalar(A),H.groundColor.copy(S.groundColor).multiplyScalar(A),n.hemi[v]=H,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let G=n.hash;(G.sunLength!==f||G.directionalLength!==g||G.pointLength!==m||G.spotLength!==y||G.rectAreaLength!==_||G.hemiLength!==v||G.numSunShadows!==p||G.numDirectionalShadows!==T||G.numPointShadows!==E||G.numSpotShadows!==M||G.numSpotMaps!==x||G.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=_,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+x-F,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=I,G.sunLength=f,G.directionalLength=g,G.pointLength=m,G.spotLength=y,G.rectAreaLength=_,G.hemiLength=v,G.numSunShadows=p,G.numDirectionalShadows=T,G.numPointShadows=E,G.numSpotShadows=M,G.numSpotMaps=x,G.numLightProbes=I,n.version=K2++)}function l(c,u){let h=0,d=0,f=0,p=0,b=0,g=0,m=u.matrixWorldInverse;for(let y=0,_=c.length;y<_;y++){let v=c[y];if(v.isSunLight){let T=n.sun[h];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),h++}else if(v.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(v.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let T=n.rectArea[b];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),b++}else if(v.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let T=n.hemi[g];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function O0(i){let e=new ev(i),t=[],n=[],s=[];function a(h){u.camera=h,t.length=0,n.length=0,s.length=0}function r(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){n.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function tv(i){let e=new WeakMap;function t(s,a=0){let r=e.get(s),o;return r===void 0?(o=new O0(i),e.set(s,[o])):a>=r.length?(o=new O0(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
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
}`,sv=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],av=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],q0=new Je,$o=new C,Ld=new C;function rv(i,e,t){let n=new Bs,s=new me,a=new me,r=new Ut,o=new ir,l=new pc,c={},u=t.maxTextureSize,h={[$i]:kn,[kn]:$i,[Dt]:Dt},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:nv,fragmentShader:iv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new lt;p.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ve(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ua;let m=this.type;this.render=function(E,M,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Hp&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ua);let F=i.getRenderTarget(),I=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Nn),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let w=m!==this.type;w&&M.traverse(function(S){S.material&&(Array.isArray(S.material)?S.material.forEach(D=>D.needsUpdate=!0):S.material.needsUpdate=!0)});for(let S=0,D=E.length;S<D;S++){let A=E[S],k=A.shadow;if(k===void 0){We("WebGLShadowMap:",A,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let O=k.getFrameExtents();s.multiply(O),a.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/O.x),s.x=a.x*O.x,k.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/O.y),s.y=a.y*O.y,k.mapSize.y=a.y));let H=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=H,k.map===null||w===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===or){if(A.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ln(s.x,s.y,{format:Xs,type:gn,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),k.map.texture.name=A.name+".shadowMap",k.map.depthTexture=new Di(s.x,s.y,bi),k.map.depthTexture.name=A.name+".shadowMapDepth",k.map.depthTexture.format=us,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=on,k.map.depthTexture.magFilter=on}else A.isPointLight?(k.map=new zo(s.x),k.map.depthTexture=new io(s.x,Ui)):(k.map=new ln(s.x,s.y),k.map.depthTexture=new Di(s.x,s.y,Ui)),k.map.depthTexture.name=A.name+".shadowMap",k.map.depthTexture.format=us,this.type===ua?(k.map.depthTexture.compareFunction=H?hd:ud,k.map.depthTexture.minFilter=Pn,k.map.depthTexture.magFilter=Pn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=on,k.map.depthTexture.magFilter=on);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let N=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();A.isPointLight!==!0&&k.updateMatrices(A,x);let Y=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:x.layers;for(let q=0;q<N;q++){let z=k.getCamera(q);if(A.isPointLight){let U=k.camera,J=k.matrix,Z=A.distance||U.far;Z!==U.far&&(U.far=Z,U.updateProjectionMatrix()),$o.setFromMatrixPosition(A.matrixWorld),U.position.copy($o),Ld.copy(U.position),Ld.add(sv[q]),U.up.copy(av[q]),U.lookAt(Ld),U.updateMatrixWorld(),J.makeTranslation(-$o.x,-$o.y,-$o.z),q0.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),k._frustum.setFromProjectionMatrix(q0,U.coordinateSystem,U.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,q),i.clear();else{q===0&&(i.setRenderTarget(k.map),i.clear());let U=k.getViewport(q);r.set(a.x*U.x,a.y*U.y,a.x*U.z,a.y*U.w),X.viewport(r)}n=k.getFrustum(q),v(M,x,z,A,Y,this.type)}k.isPointLightShadow!==!0&&this.type===or&&y(k,x),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(F,I,G)};function y(E,M){let x=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ln(s.x,s.y,{format:Xs,type:gn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(M,null,x,d,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(M,null,x,f,b,null)}function _(E,M,x,F){let I=null,G=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(G!==void 0)I=G;else if(I=x.isPointLight===!0?l:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let X=I.uuid,w=M.uuid,S=c[X];S===void 0&&(S={},c[X]=S);let D=S[w];D===void 0&&(D=I.clone(),S[w]=D,M.addEventListener("dispose",T)),I=D}if(I.visible=M.visible,I.wireframe=M.wireframe,F===or?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:h[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,I.map=M.map,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let X=i.properties.get(I);X.light=x}return I}function v(E,M,x,F,I,G){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&G===or)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let S=e.update(E),D=E.material;if(Array.isArray(D)){let A=S.groups;for(let k=0,O=A.length;k<O;k++){let H=A[k],N=D[H.materialIndex];if(N&&N.visible){let Y=_(E,N,F,G);E.onBeforeShadow(i,E,M,x,S,Y,H),i.renderBufferDirect(x,null,S,Y,E,H),E.onAfterShadow(i,E,M,x,S,Y,H)}}}else if(D.visible){let A=_(E,D,F,G);E.onBeforeShadow(i,E,M,x,S,A,null),i.renderBufferDirect(x,null,S,A,E,null),E.onAfterShadow(i,E,M,x,S,A,null)}}let w=E.children;for(let S=0,D=w.length;S<D;S++)v(w[S],M,x,F,I,G)}function T(E){E.target.removeEventListener("dispose",T);for(let x in c){let F=c[x],I=E.target.uuid;I in F&&(F[I].dispose(),delete F[I])}}}function ov(i,e){function t(){let Q=!1,de=new Ut,le=null,De=new Ut(0,0,0,0);return{setMask:function(Re){le!==Re&&!Q&&(i.colorMask(Re,Re,Re,Re),le=Re)},setLocked:function(Re){Q=Re},setClear:function(Re,Fe,je,bt,_e){_e===!0&&(Re*=bt,Fe*=bt,je*=bt),de.set(Re,Fe,je,bt),De.equals(de)===!1&&(i.clearColor(Re,Fe,je,bt),De.copy(de))},reset:function(){Q=!1,le=null,De.set(-1,0,0,0)}}}function n(){let Q=!1,de=!1,le=null,De=null,Re=null;return{setReversed:function(Fe){if(de!==Fe){let je=e.get("EXT_clip_control");Fe?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),de=Fe;let bt=Re;Re=null,this.setClear(bt)}},getReversed:function(){return de},setTest:function(Fe){Fe?oe(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Fe){le!==Fe&&!Q&&(i.depthMask(Fe),le=Fe)},setFunc:function(Fe){if(de&&(Fe=p0[Fe]),De!==Fe){switch(Fe){case Jl:i.depthFunc(i.NEVER);break;case jl:i.depthFunc(i.ALWAYS);break;case Wl:i.depthFunc(i.LESS);break;case Va:i.depthFunc(i.LEQUAL);break;case Kl:i.depthFunc(i.EQUAL);break;case Zl:i.depthFunc(i.GEQUAL);break;case ec:i.depthFunc(i.GREATER);break;case tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=Fe}},setLocked:function(Fe){Q=Fe},setClear:function(Fe){Re!==Fe&&(Re=Fe,de&&(Fe=1-Fe),i.clearDepth(Fe))},reset:function(){Q=!1,le=null,De=null,Re=null,de=!1}}}function s(){let Q=!1,de=null,le=null,De=null,Re=null,Fe=null,je=null,bt=null,_e=null;return{setTest:function(Ze){Q||(Ze?oe(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Ze){de!==Ze&&!Q&&(i.stencilMask(Ze),de=Ze)},setFunc:function(Ze,pt,He){(le!==Ze||De!==pt||Re!==He)&&(i.stencilFunc(Ze,pt,He),le=Ze,De=pt,Re=He)},setOp:function(Ze,pt,He){(Fe!==Ze||je!==pt||bt!==He)&&(i.stencilOp(Ze,pt,He),Fe=Ze,je=pt,bt=He)},setLocked:function(Ze){Q=Ze},setClear:function(Ze){_e!==Ze&&(i.clearStencil(Ze),_e=Ze)},reset:function(){Q=!1,de=null,le=null,De=null,Re=null,Fe=null,je=null,bt=null,_e=null}}}let a=new t,r=new n,o=new s,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],b=null,g=!1,m=null,y=null,_=null,v=null,T=null,E=null,M=null,x=new he(0,0,0),F=0,I=!1,G=null,X=null,w=null,S=null,D=null,A=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,O=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=O>=2);let N=null,Y={},q=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),U=new Ut().fromArray(q),J=new Ut().fromArray(z);function Z(Q,de,le,De){let Re=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(Q,Fe),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<le;je++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(de+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Fe}let ae={};ae[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),r.setFunc(Va),ye(!1),Ee(jh),oe(i.CULL_FACE),pe(Nn);function oe(Q){u[Q]!==!0&&(i.enable(Q),u[Q]=!0)}function ge(Q){u[Q]!==!1&&(i.disable(Q),u[Q]=!1)}function Se(Q,de){return d[Q]!==de?(i.bindFramebuffer(Q,de),d[Q]=de,Q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=de),Q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ue(Q,de){let le=p,De=!1;if(Q){le=f.get(de),le===void 0&&(le=[],f.set(de,le));let Re=Q.textures;if(le.length!==Re.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,je=Re.length;Fe<je;Fe++)le[Fe]=i.COLOR_ATTACHMENT0+Fe;le.length=Re.length,De=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,De=!0);De&&i.drawBuffers(le)}function Ge(Q){return b!==Q?(i.useProgram(Q),b=Q,!0):!1}let be={[Ti]:i.FUNC_ADD,[Bp]:i.FUNC_SUBTRACT,[Gp]:i.FUNC_REVERSE_SUBTRACT};be[Op]=i.MIN,be[qp]=i.MAX;let ie={[ha]:i.ZERO,[Xp]:i.ONE,[Vp]:i.SRC_COLOR,[Zh]:i.SRC_ALPHA,[zp]:i.SRC_ALPHA_SATURATE,[ko]:i.DST_COLOR,[Lo]:i.DST_ALPHA,[Yp]:i.ONE_MINUS_SRC_COLOR,[ed]:i.ONE_MINUS_SRC_ALPHA,[Qp]:i.ONE_MINUS_DST_COLOR,[$p]:i.ONE_MINUS_DST_ALPHA,[Jp]:i.CONSTANT_COLOR,[jp]:i.ONE_MINUS_CONSTANT_COLOR,[Wp]:i.CONSTANT_ALPHA,[Kp]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(Q,de,le,De,Re,Fe,je,bt,_e,Ze){if(Q===Nn){g===!0&&(ge(i.BLEND),g=!1);return}if(g===!1&&(oe(i.BLEND),g=!0),Q!==Tc){if(Q!==m||Ze!==I){if((y!==Ti||T!==Ti)&&(i.blendEquation(i.FUNC_ADD),y=Ti,T=Ti),Ze)switch(Q){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wo:i.blendFunc(i.ONE,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",Q);break}else switch(Q){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wh:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kh:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",Q);break}_=null,v=null,E=null,M=null,x.set(0,0,0),F=0,m=Q,I=Ze}return}Re=Re||de,Fe=Fe||le,je=je||De,(de!==y||Re!==T)&&(i.blendEquationSeparate(be[de],be[Re]),y=de,T=Re),(le!==_||De!==v||Fe!==E||je!==M)&&(i.blendFuncSeparate(ie[le],ie[De],ie[Fe],ie[je]),_=le,v=De,E=Fe,M=je),(bt.equals(x)===!1||_e!==F)&&(i.blendColor(bt.r,bt.g,bt.b,_e),x.copy(bt),F=_e),m=Q,I=!1}function $(Q,de){Q.side===Dt?ge(i.CULL_FACE):oe(i.CULL_FACE);let le=Q.side===kn;de&&(le=!le),ye(le),Q.blending===lr&&Q.transparent===!1?pe(Nn):pe(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),r.setFunc(Q.depthFunc),r.setTest(Q.depthTest),r.setMask(Q.depthWrite),a.setMask(Q.colorWrite);let De=Q.stencilWrite;o.setTest(De),De&&(o.setMask(Q.stencilWriteMask),o.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),o.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),qe(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(Q){G!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),G=Q)}function Ee(Q){Q!==Np?(oe(i.CULL_FACE),Q!==X&&(Q===jh?i.cullFace(i.BACK):Q===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),X=Q}function it(Q){Q!==w&&(k&&i.lineWidth(Q),w=Q)}function qe(Q,de,le){Q?(oe(i.POLYGON_OFFSET_FILL),(S!==de||D!==le)&&(S=de,D=le,r.getReversed()&&(de=-de,le=-le),i.polygonOffset(de,le))):ge(i.POLYGON_OFFSET_FILL)}function Ye(Q){Q?oe(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function gt(Q){Q===void 0&&(Q=i.TEXTURE0+A-1),N!==Q&&(i.activeTexture(Q),N=Q)}function Et(Q,de,le){le===void 0&&(N===null?le=i.TEXTURE0+A-1:le=N);let De=Y[le];De===void 0&&(De={type:void 0,texture:void 0},Y[le]=De),(De.type!==Q||De.texture!==de)&&(N!==le&&(i.activeTexture(le),N=le),i.bindTexture(Q,de||ae[Q]),De.type=Q,De.texture=de)}function j(){let Q=Y[N];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function yt(){try{i.compressedTexImage2D(...arguments)}catch(Q){rt("WebGLState:",Q)}}function at(){try{i.compressedTexImage3D(...arguments)}catch(Q){rt("WebGLState:",Q)}}function Ft(){try{i.texSubImage2D(...arguments)}catch(Q){rt("WebGLState:",Q)}}function Pe(){try{i.texSubImage3D(...arguments)}catch(Q){rt("WebGLState:",Q)}}function Ot(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){rt("WebGLState:",Q)}}function fe(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){rt("WebGLState:",Q)}}function $e(){try{i.texStorage2D(...arguments)}catch(Q){rt("WebGLState:",Q)}}function B(){try{i.texStorage3D(...arguments)}catch(Q){rt("WebGLState:",Q)}}function R(){try{i.texImage2D(...arguments)}catch(Q){rt("WebGLState:",Q)}}function te(){try{i.texImage3D(...arguments)}catch(Q){rt("WebGLState:",Q)}}function Me(Q){return h[Q]!==void 0?h[Q]:i.getParameter(Q)}function ce(Q,de){h[Q]!==de&&(i.pixelStorei(Q,de),h[Q]=de)}function Te(Q){U.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),U.copy(Q))}function we(Q){J.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),J.copy(Q))}function re(Q,de){let le=c.get(de);le===void 0&&(le=new WeakMap,c.set(de,le));let De=le.get(Q);De===void 0&&(De=i.getUniformBlockIndex(de,Q.name),i.uniformBlockBinding(de,De,De),le.set(Q,De))}function ue(Q,de,le){let Re=c.get(de).get(Q);l[Re]!==le&&(i.bindBufferBase(i.UNIFORM_BUFFER,Re,le),l[Re]=le)}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},N=null,Y={},d={},l={},f=new WeakMap,p=[],b=null,g=!1,m=null,y=null,_=null,v=null,T=null,E=null,M=null,x=new he(0,0,0),F=0,I=!1,G=null,X=null,w=null,S=null,D=null,U.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:oe,disable:ge,bindFramebuffer:Se,drawBuffers:Ue,useProgram:Ge,setBlending:pe,setMaterial:$,setFlipSided:ye,setCullFace:Ee,setLineWidth:it,setPolygonOffset:qe,setScissorTest:Ye,activeTexture:gt,bindTexture:Et,unbindTexture:j,compressedTexImage2D:yt,compressedTexImage3D:at,texImage2D:R,texImage3D:te,pixelStorei:ce,getParameter:Me,updateUBOMapping:re,uniformBlockBinding:ue,texStorage2D:$e,texStorage3D:B,texSubImage2D:Ft,texSubImage3D:Pe,compressedTexSubImage2D:Ot,compressedTexSubImage3D:fe,scissor:Te,viewport:we,reset:Ae}}function lv(i,e,t,n,s,a,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap,h=new Set,d,f=new WeakMap,p=new Set,b=new FinalizationRegistry(B=>p.delete(B)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(B,R){return g?new OffscreenCanvas(B,R):Qa("canvas")}function y(B,R,te){let Me=1,ce=$e(B);if((ce.width>te||ce.height>te)&&(Me=te/Math.max(ce.width,ce.height)),Me<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let Te=Math.floor(Me*ce.width),we=Math.floor(Me*ce.height);d===void 0&&(d=m(Te,we));let re=R?m(Te,we):d;return re.width=Te,re.height=we,re.getContext("2d").drawImage(B,0,0,Te,we),We("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Te+"x"+we+")."),re}else return"data"in B&&We("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),B;return B}function _(B){return B.generateMipmaps}function v(B){i.generateMipmap(B)}function T(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(B,R,te,Me,ce,Te=!1){if(B!==null){if(i[B]!==void 0)return i[B];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let we;Me&&(we=e.get("EXT_texture_norm16"),we||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=R;if(R===i.RED&&(te===i.FLOAT&&(re=i.R32F),te===i.HALF_FLOAT&&(re=i.R16F),te===i.UNSIGNED_BYTE&&(re=i.R8),te===i.UNSIGNED_SHORT&&we&&(re=we.R16_EXT),te===i.SHORT&&we&&(re=we.R16_SNORM_EXT)),R===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(re=i.R8UI),te===i.UNSIGNED_SHORT&&(re=i.R16UI),te===i.UNSIGNED_INT&&(re=i.R32UI),te===i.BYTE&&(re=i.R8I),te===i.SHORT&&(re=i.R16I),te===i.INT&&(re=i.R32I)),R===i.RG&&(te===i.FLOAT&&(re=i.RG32F),te===i.HALF_FLOAT&&(re=i.RG16F),te===i.UNSIGNED_BYTE&&(re=i.RG8),te===i.UNSIGNED_SHORT&&we&&(re=we.RG16_EXT),te===i.SHORT&&we&&(re=we.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(re=i.RG8UI),te===i.UNSIGNED_SHORT&&(re=i.RG16UI),te===i.UNSIGNED_INT&&(re=i.RG32UI),te===i.BYTE&&(re=i.RG8I),te===i.SHORT&&(re=i.RG16I),te===i.INT&&(re=i.RG32I)),R===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(re=i.RGB8UI),te===i.UNSIGNED_SHORT&&(re=i.RGB16UI),te===i.UNSIGNED_INT&&(re=i.RGB32UI),te===i.BYTE&&(re=i.RGB8I),te===i.SHORT&&(re=i.RGB16I),te===i.INT&&(re=i.RGB32I)),R===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),te===i.UNSIGNED_INT&&(re=i.RGBA32UI),te===i.BYTE&&(re=i.RGBA8I),te===i.SHORT&&(re=i.RGBA16I),te===i.INT&&(re=i.RGBA32I)),R===i.RGB&&(te===i.UNSIGNED_SHORT&&we&&(re=we.RGB16_EXT),te===i.SHORT&&we&&(re=we.RGB16_SNORM_EXT),te===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),te===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),R===i.RGBA){let ue=Te?Qr:xt.getTransfer(ce);te===i.FLOAT&&(re=i.RGBA32F),te===i.HALF_FLOAT&&(re=i.RGBA16F),te===i.UNSIGNED_BYTE&&(re=ue===Bt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT&&we&&(re=we.RGBA16_EXT),te===i.SHORT&&we&&(re=we.RGBA16_SNORM_EXT),te===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(B,R){let te;return B?R===null||R===Ui||R===ys?te=i.DEPTH24_STENCIL8:R===bi?te=i.DEPTH32F_STENCIL8:R===hr&&(te=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ui||R===ys?te=i.DEPTH_COMPONENT24:R===bi?te=i.DEPTH_COMPONENT32F:R===hr&&(te=i.DEPTH_COMPONENT16),te}function x(B,R){return _(B)===!0||B.isFramebufferTexture&&B.minFilter!==on&&B.minFilter!==Pn?Math.log2(Math.max(R.width,R.height))+1:B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?R.mipmaps.length:1}function F(B){let R=new WeakRef(B);n.get(B).__ref=R,p.add(R),b.register(B,R,R)}function I(B){let R=n.get(B).__ref;R!==void 0&&(p.delete(R),b.unregister(R))}function G(B){w(B.target)}function X(B){S(B.target)}function w(B){B.removeEventListener("dispose",G),I(B),A(B),B.isVideoTexture&&u.delete(B),B.isHTMLTexture&&h.delete(B)}function S(B){B.removeEventListener("dispose",X),I(B),O(B)}function D(){for(let B of p){let R=B.deref();R!==void 0&&(R.isRenderTarget===!0?S(R):w(R))}p.clear(),h.clear()}function A(B){let R=n.get(B);if(R.__webglInit===void 0)return;let te=B.source,Me=f.get(te);if(Me){let ce=Me[R.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&k(B),Object.keys(Me).length===0&&f.delete(te)}n.remove(B)}function k(B){let R=n.get(B);i.deleteTexture(R.__webglTexture);let te=B.source,Me=f.get(te);delete Me[R.__cacheKey],r.memory.textures--}function O(B){let R=n.get(B);R.__depthDisposeCallback&&R.__depthDisposeCallback();let te=B.depthTexture;if(te&&te.renderTarget===B&&w(te),B.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(R.__webglFramebuffer[ce]))for(let Te=0;Te<R.__webglFramebuffer[ce].length;Te++)i.deleteFramebuffer(R.__webglFramebuffer[ce][Te]);else i.deleteFramebuffer(R.__webglFramebuffer[ce]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[ce])}else{if(Array.isArray(R.__webglFramebuffer))for(let ce=0;ce<R.__webglFramebuffer.length;ce++)i.deleteFramebuffer(R.__webglFramebuffer[ce]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ce=0;ce<R.__webglColorRenderbuffer.length;ce++)R.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[ce]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let Me=B.textures;for(let ce=0,Te=Me.length;ce<Te;ce++){let we=n.get(Me[ce]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),r.memory.textures--),n.remove(Me[ce])}n.remove(B)}let H=0;function N(){H=0}function Y(){return H}function q(B){H=B}function z(){let B=H;return B>=s.maxTextures&&We("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,B}function U(B){let R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.mipmapsAutoUpdate),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function J(B,R){let te=n.get(B);if(B.isVideoTexture&&Ot(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&te.__version!==B.version){let Me=B.image;if(Me===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{$(te,B,R);return}}else B.isExternalTexture&&(te.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+R)}function Z(B,R){let te=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&te.__version!==B.version){$(te,B,R);return}else B.isExternalTexture&&(te.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+R)}function ae(B,R){let te=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&te.__version!==B.version){$(te,B,R);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+R)}function oe(B,R){let te=n.get(B);if(B.version>0&&te.__version!==B.version){ye(te,B,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+R)}let ge={[Jt]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},Se={[on]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[pa]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[ur]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Ue={[r0]:i.NEVER,[dd]:i.ALWAYS,[o0]:i.LESS,[ud]:i.LEQUAL,[l0]:i.EQUAL,[hd]:i.GEQUAL,[c0]:i.GREATER,[u0]:i.NOTEQUAL};function Ge(B,R){if(R.type===bi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Pn||R.magFilter===ur||R.magFilter===pa||R.magFilter===ci||R.minFilter===Pn||R.minFilter===ur||R.minFilter===pa||R.minFilter===ci)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,ge[R.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,ge[R.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,ge[R.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,Se[R.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,Se[R.minFilter]),R.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,Ue[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===on||R.minFilter!==pa&&R.minFilter!==ci||R.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function be(B,R){let te=!1;B.__webglInit===void 0&&(B.__webglInit=!0,R.addEventListener("dispose",G),F(R));let Me=R.source,ce=f.get(Me);ce===void 0&&(ce={},f.set(Me,ce));let Te=U(R);if(Te!==B.__cacheKey){ce[Te]===void 0&&(ce[Te]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,te=!0),ce[Te].usedTimes++;let we=ce[B.__cacheKey];we!==void 0&&(ce[B.__cacheKey].usedTimes--,we.usedTimes===0&&k(R)),B.__cacheKey=Te,B.__webglTexture=ce[Te].texture}return te}function ie(B,R,te){return Math.floor(Math.floor(B/te)/R)}function pe(B,R,te,Me){let Te=B.updateRanges;if(Te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,te,Me,R.data);else{Te.sort((Q,de)=>Q.start-de.start);let we=0;for(let Q=1;Q<Te.length;Q++){let de=Te[we],le=Te[Q],De=de.start+de.count,Re=ie(le.start,R.width,4),Fe=ie(de.start,R.width,4);le.start<=De+1&&Re===Fe&&ie(le.start+le.count-1,R.width,4)===Re?de.count=Math.max(de.count,le.start+le.count-de.start):(++we,Te[we]=le)}Te.length=we+1;let re=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),Ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Q=0,de=Te.length;Q<de;Q++){let le=Te[Q],De=Math.floor(le.start/4),Re=Math.ceil(le.count/4),Fe=De%R.width,je=Math.floor(De/R.width),bt=Re,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,je),t.texSubImage2D(i.TEXTURE_2D,0,Fe,je,bt,_e,te,Me,R.data)}B.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,re),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function $(B,R,te){let Me=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Me=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Me=i.TEXTURE_3D);let ce=be(B,R),Te=R.source;t.bindTexture(Me,B.__webglTexture,i.TEXTURE0+te);let we=n.get(Te);if(Te.version!==we.__version||ce===!0){if(t.activeTexture(i.TEXTURE0+te),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let _e=xt.getPrimaries(xt.workingColorSpace),Ze=R.colorSpace===Ms?null:xt.getPrimaries(R.colorSpace),pt=R.colorSpace===Ms||_e===Ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}t.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let ue=y(R.image,!1,s.maxTextureSize);ue=fe(R,ue);let Ae=a.convert(R.format,R.colorSpace),Q=a.convert(R.type),de=E(R.internalFormat,Ae,Q,R.normalized,R.colorSpace,R.isVideoTexture);Ge(Me,R);let le,De=R.mipmaps,Re=R.isVideoTexture!==!0,Fe=we.__version===void 0||ce===!0,je=Te.dataReady,bt=x(R,ue);if(R.isDepthTexture)de=M(R.format===Hi,R.type),Fe&&(Re?t.texStorage2D(i.TEXTURE_2D,1,de,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,de,ue.width,ue.height,0,Ae,Q,null));else if(R.isDataTexture)if(De.length>0){Re&&Fe&&t.texStorage2D(i.TEXTURE_2D,bt,de,De[0].width,De[0].height);for(let _e=0,Ze=De.length;_e<Ze;_e++)le=De[_e],Re?je&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,le.width,le.height,Ae,Q,le.data):t.texImage2D(i.TEXTURE_2D,_e,de,le.width,le.height,0,Ae,Q,le.data);R.generateMipmaps=!1}else Re?(Fe&&t.texStorage2D(i.TEXTURE_2D,bt,de,ue.width,ue.height),je&&pe(R,ue,Ae,Q)):t.texImage2D(i.TEXTURE_2D,0,de,ue.width,ue.height,0,Ae,Q,ue.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Re&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,bt,de,De[0].width,De[0].height,ue.depth);for(let _e=0,Ze=De.length;_e<Ze;_e++)if(le=De[_e],R.format!==ui)if(Ae!==null)if(Re){if(je)if(R.layerUpdates.size>0){let pt=Sd(le.width,le.height,R.format,R.type);for(let He of R.layerUpdates){let kt=le.data.subarray(He*pt/le.data.BYTES_PER_ELEMENT,(He+1)*pt/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,He,le.width,le.height,1,Ae,kt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,le.width,le.height,ue.depth,Ae,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,de,le.width,le.height,ue.depth,0,le.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,le.width,le.height,ue.depth,Ae,Q,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,de,le.width,le.height,ue.depth,0,Ae,Q,le.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Re&&Fe&&t.texStorage2D(i.TEXTURE_2D,bt,de,De[0].width,De[0].height);for(let _e=0,Ze=De.length;_e<Ze;_e++)le=De[_e],R.format!==ui?Ae!==null?Re?je&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,le.width,le.height,Ae,le.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,de,le.width,le.height,0,le.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?je&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,le.width,le.height,Ae,Q,le.data):t.texImage2D(i.TEXTURE_2D,_e,de,le.width,le.height,0,Ae,Q,le.data)}else if(R.isDataArrayTexture)if(Re){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,bt,de,ue.width,ue.height,ue.depth),je)if(R.layerUpdates.size>0){let _e=Sd(ue.width,ue.height,R.format,R.type);for(let Ze of R.layerUpdates){let pt=ue.data.subarray(Ze*_e/ue.data.BYTES_PER_ELEMENT,(Ze+1)*_e/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ze,ue.width,ue.height,1,Ae,Q,pt)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Q,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,ue.width,ue.height,ue.depth,0,Ae,Q,ue.data);else if(R.isData3DTexture)Re?(Fe&&t.texStorage3D(i.TEXTURE_3D,bt,de,ue.width,ue.height,ue.depth),je&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Q,ue.data)):t.texImage3D(i.TEXTURE_3D,0,de,ue.width,ue.height,ue.depth,0,Ae,Q,ue.data);else if(R.isFramebufferTexture){if(Fe)if(Re)t.texStorage2D(i.TEXTURE_2D,bt,de,ue.width,ue.height);else{let _e=ue.width,Ze=ue.height;for(let pt=0;pt<bt;pt++)t.texImage2D(i.TEXTURE_2D,pt,de,_e,Ze,0,Ae,Q,null),_e>>=1,Ze>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ue.parentNode!==_e){_e.appendChild(ue),h.add(R),_e.onpaint=Ze=>{let pt=Ze.changedElements;for(let He of h)pt.includes(He.image)&&(He.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let pt=i.RGBA,He=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,He,kt,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(Re&&Fe){let _e=$e(De[0]);t.texStorage2D(i.TEXTURE_2D,bt,de,_e.width,_e.height)}for(let _e=0,Ze=De.length;_e<Ze;_e++)le=De[_e],Re?je&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ae,Q,le):t.texImage2D(i.TEXTURE_2D,_e,de,Ae,Q,le);R.generateMipmaps=!1}else if(Re){if(Fe){let _e=$e(ue);t.texStorage2D(i.TEXTURE_2D,bt,de,_e.width,_e.height)}je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Q,ue)}else t.texImage2D(i.TEXTURE_2D,0,de,Ae,Q,ue);_(R)&&R.mipmapsAutoUpdate===!0&&v(Me),we.__version=Te.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function ye(B,R,te){if(R.image.length!==6)return;let Me=be(B,R),ce=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+te);let Te=n.get(ce);if(ce.version!==Te.__version||Me===!0){t.activeTexture(i.TEXTURE0+te);let we=xt.getPrimaries(xt.workingColorSpace),re=R.colorSpace===Ms?null:xt.getPrimaries(R.colorSpace),ue=R.colorSpace===Ms||we===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ae=R.isCompressedTexture||R.image[0].isCompressedTexture,Q=R.image[0]&&R.image[0].isDataTexture,de=[];for(let He=0;He<6;He++)!Ae&&!Q?de[He]=y(R.image[He],!0,s.maxCubemapSize):de[He]=Q?R.image[He].image:R.image[He],de[He]=fe(R,de[He]);let le=de[0],De=a.convert(R.format,R.colorSpace),Re=a.convert(R.type),Fe=E(R.internalFormat,De,Re,R.normalized,R.colorSpace),je=R.isVideoTexture!==!0,bt=Te.__version===void 0||Me===!0,_e=ce.dataReady,Ze=x(R,le);Ge(i.TEXTURE_CUBE_MAP,R);let pt;if(R.isDepthTexture){if(Fe=M(R.format===Hi,R.type),bt)if(je)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Fe,le.width,le.height);else for(let He=0;He<6;He++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Fe,le.width,le.height,0,De,Re,null)}else if(Ae){je&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,Fe,le.width,le.height);for(let He=0;He<6;He++){pt=de[He].mipmaps;for(let kt=0;kt<pt.length;kt++){let fn=pt[kt];R.format!==ui?De!==null?je?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,kt,0,0,fn.width,fn.height,De,fn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,kt,Fe,fn.width,fn.height,0,fn.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,kt,0,0,fn.width,fn.height,De,Re,fn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,kt,Fe,fn.width,fn.height,0,De,Re,fn.data)}}}else{if(pt=R.mipmaps,je&&bt){pt.length>0&&Ze++;let He=$e(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,Fe,He.width,He.height)}for(let He=0;He<6;He++)if(Q){je?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,de[He].width,de[He].height,De,Re,de[He].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Fe,de[He].width,de[He].height,0,De,Re,de[He].data);for(let kt=0;kt<pt.length;kt++){let Nt=pt[kt].image[He].image;je?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,kt+1,0,0,Nt.width,Nt.height,De,Re,Nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,kt+1,Fe,Nt.width,Nt.height,0,De,Re,Nt.data)}}else{je?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,De,Re,de[He]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Fe,De,Re,de[He]);for(let kt=0;kt<pt.length;kt++){let fn=pt[kt];je?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,kt+1,0,0,De,Re,fn.image[He]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,kt+1,Fe,De,Re,fn.image[He])}}}_(R)&&R.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),Te.__version=ce.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function Ee(B,R,te,Me,ce,Te){let we=a.convert(te.format,te.colorSpace),re=a.convert(te.type),ue=E(te.internalFormat,we,re,te.normalized,te.colorSpace),Ae=n.get(R),Q=n.get(te);if(Q.__renderTarget=R,!Ae.__hasExternalTextures){let de=Math.max(1,R.width>>Te),le=Math.max(1,R.height>>Te);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,Te,ue,de,le,R.depth,0,we,re,null):t.texImage2D(ce,Te,ue,de,le,0,we,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),Pe(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,ce,Q.__webglTexture,0,Ft(R)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Me,ce,Q.__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(B,R,te){if(i.bindRenderbuffer(i.RENDERBUFFER,B),R.depthBuffer){let Me=R.depthTexture,ce=Me&&Me.isDepthTexture?Me.type:null,Te=M(R.stencilBuffer,ce),we=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pe(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(R),Te,R.width,R.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(R),Te,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Te,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,B)}else{let Me=R.textures;for(let ce=0;ce<Me.length;ce++){let Te=Me[ce],we=a.convert(Te.format,Te.colorSpace),re=a.convert(Te.type),ue=E(Te.internalFormat,we,re,Te.normalized,Te.colorSpace);Pe(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(R),ue,R.width,R.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(R),ue,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ue,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(B,R,te){let Me=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=n.get(R.depthTexture);ce.__renderTarget=R;let Te=Me?R.depthTexture.image[0]:R.depthTexture.image;(!ce.__webglTexture||Te.width!==R.width||Te.height!==R.height)&&(Te.width=R.width,Te.height=R.height,R.depthTexture.needsUpdate=!0),Me?oe(R.depthTexture,0):J(R.depthTexture,0);let we=ce.__webglTexture,re=Ft(R),ue=Me?i.TEXTURE_CUBE_MAP_POSITIVE_X+te:i.TEXTURE_2D,Ae=R.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===us)Pe(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,ue,we,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,ue,we,0);else if(R.depthTexture.format===Hi)Pe(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,ue,we,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,ue,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(B){let R=n.get(B),te=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){let Me=B.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Me){let ce=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Me.removeEventListener("dispose",ce)};Me.addEventListener("dispose",ce),R.__depthDisposeCallback=ce}R.__boundDepthTexture=Me}if(B.depthTexture&&!R.__autoAllocateDepthBuffer)if(te)for(let Me=0;Me<6;Me++)qe(R.__webglFramebuffer[Me],B,Me);else B.texture.mipmaps.length>0?qe(R.__webglFramebuffer[0],B,0):qe(R.__webglFramebuffer,B,0);else if(te){R.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[Me]),R.__webglDepthbuffer[Me]===void 0)R.__webglDepthbuffer[Me]=i.createRenderbuffer(),it(R.__webglDepthbuffer[Me],B,!1);else{let ce=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=R.__webglDepthbuffer[Me];i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,Te)}}else if(B.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),it(R.__webglDepthbuffer,B,!1);else{let ce=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,Te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(B,R,te){let Me=n.get(B);R!==void 0&&Ee(Me.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&Ye(B)}function Et(B){let R=B.texture,te=n.get(B),Me=n.get(R);B.addEventListener("dispose",X),F(B);let ce=B.textures,Te=B.isWebGLCubeRenderTarget===!0,we=ce.length>1;if(we||(Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture()),Me.__version=R.version,r.memory.textures++),Te){te.__webglFramebuffer=[];for(let re=0;re<6;re++)if(R.mipmaps.length>0){te.__webglFramebuffer[re]=[];for(let ue=0;ue<R.mipmaps.length;ue++)te.__webglFramebuffer[re][ue]=i.createFramebuffer()}else te.__webglFramebuffer[re]=i.createFramebuffer()}else{if(R.mipmaps.length>0){te.__webglFramebuffer=[];for(let re=0;re<R.mipmaps.length;re++)te.__webglFramebuffer[re]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(we)for(let re=0,ue=ce.length;re<ue;re++){let Ae=n.get(ce[re]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),r.memory.textures++)}if(B.samples>0&&Pe(B)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let re=0;re<ce.length;re++){let ue=ce[re];te.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[re]);let Ae=a.convert(ue.format,ue.colorSpace),Q=a.convert(ue.type),de=E(ue.internalFormat,Ae,Q,ue.normalized,ue.colorSpace,B.isXRRenderTarget===!0),le=Ft(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,de,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,te.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),it(te.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Te){t.bindTexture(i.TEXTURE_CUBE_MAP,Me.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,R);for(let re=0;re<6;re++)if(R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)Ee(te.__webglFramebuffer[re][ue],B,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else Ee(te.__webglFramebuffer[re],B,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);_(R)?v(i.TEXTURE_CUBE_MAP):R.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}else if(we){for(let re=0,ue=ce.length;re<ue;re++){let Ae=ce[re],Q=n.get(Ae),de=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(de=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),Ge(de,Ae),Ee(te.__webglFramebuffer,B,Ae,i.COLOR_ATTACHMENT0+re,de,0),_(Ae)&&v(de)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(re=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Me.__webglTexture),Ge(re,R),R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)Ee(te.__webglFramebuffer[ue],B,R,i.COLOR_ATTACHMENT0,re,ue);else Ee(te.__webglFramebuffer,B,R,i.COLOR_ATTACHMENT0,re,0);_(R)?v(re):R.mipmaps.length>0&&i.texParameteri(re,i.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}B.depthBuffer&&Ye(B)}function j(B){let R=B.textures;for(let te=0,Me=R.length;te<Me;te++){let ce=R[te];if(_(ce)&&ce.mipmapsAutoUpdate===!0){let Te=T(B),we=n.get(ce).__webglTexture;t.bindTexture(Te,we),v(Te),t.unbindTexture()}}}let yt=[];function at(B){if(B.samples>0){if(Pe(B)===!1){let R=B.textures,te=B.width,Me=B.height,ce=i.COLOR_BUFFER_BIT,Te=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(B),re=R.length>1;if(re)for(let Ae=0;Ae<R.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),B.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ae=0;Ae<R.length;Ae++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);let Q=n.get(R[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,te,Me,0,0,te,Me,ce,i.NEAREST),l===!0&&(yt.length=0,yt.push(i.COLOR_ATTACHMENT0+Ae),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&yt.push(Te),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ae=0;Ae<R.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);let Q=n.get(R[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&l){let R=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Ft(B){return Math.min(s.maxSamples,B.samples)}function Pe(B){let R=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ot(B){let R=r.render.frame;u.get(B)!==R&&(u.set(B,R),B.update())}function fe(B,R){let te=B.colorSpace,Me=B.format,ce=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||te!==wn&&te!==Ms&&(xt.getTransfer(te)===Bt?(Me!==ui||ce!==jn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",te)),R}function $e(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.getTextureUnits=Y,this.setTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=ae,this.setTextureCube=oe,this.rebindTextures=gt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Pe,this.dispose=D}function cv(i,e){function t(n,s=Ms){let a,r=xt.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ad)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nd)return i.BYTE;if(n===id)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===Pc)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===rd)return i.ALPHA;if(n===od)return i.RGB;if(n===ui)return i.RGBA;if(n===us)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===kc)return i.RED;if(n===Ic)return i.RED_INTEGER;if(n===Xs)return i.RG;if(n===Fc)return i.RG_INTEGER;if(n===Dc)return i.RGBA_INTEGER;if(n===Bo||n===Go||n===Oo||n===qo)if(r===Bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Bo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Bo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Nc||n===Uc||n===Hc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Cc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bc||n===Gc||n===Oc||n===qc||n===Xc||n===Xo||n===Vc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Bc||n===Gc)return r===Bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Oc)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===qc)return a.COMPRESSED_R11_EAC;if(n===Xc)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Xo)return a.COMPRESSED_RG11_EAC;if(n===Vc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yc||n===$c||n===Qc||n===zc||n===Jc||n===jc||n===Wc||n===Kc||n===Zc||n===eu||n===tu||n===nu||n===iu||n===su)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Yc)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qc)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zc)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jc)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kc)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eu)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tu)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nu)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===iu)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===su)return r===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===au||n===ru||n===ou)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===au)return r===Bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ru)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ou)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===cu||n===Vo||n===uu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===lu)return a.COMPRESSED_RED_RGTC1_EXT;if(n===cu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
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

}`,Ud=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new so(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:uv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new Ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hd=class extends Xi{constructor(e,t){super();let n=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,b=typeof XRWebGLBinding<"u",g=new Ud,m={},y=t.getContextAttributes(),_=null,v=null,T=[],E=[],M=new me,x=null,F=null,I=new en;I.viewport=new Ut;let G=new en;G.viewport=new Ut;let X=[I,G],w=new _c,S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let J=T[U];return J===void 0&&(J=new Wa,T[U]=J),J.getTargetRaySpace()},this.getControllerGrip=function(U){let J=T[U];return J===void 0&&(J=new Wa,T[U]=J),J.getGripSpace()},this.getHand=function(U){let J=T[U];return J===void 0&&(J=new Wa,T[U]=J),J.getHandSpace()};function A(U){let J=E.indexOf(U.inputSource);if(J===-1)return;let Z=T[J];Z!==void 0&&(Z.update(U.inputSource,U.frame,c||r),Z.dispatchEvent({type:U.type,data:U.inputSource}))}function k(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",O);for(let U=0;U<T.length;U++){let J=E[U];J!==null&&(E[U]=null,T[U].disconnect(J))}S=null,D=null,g.reset();for(let U in m)delete m[U];if(e.setRenderTarget(_),f=null,d=null,h=null,s=null,v=null,z.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(M.width,M.height,!1),F!==null){let U=F.camera;U.fov=F.fov,U.zoom=F.zoom,U.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){a=U,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",k),s.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(M),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,ae=null,oe=null;y.depth&&(oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=y.stencil?Hi:us,ae=y.stencil?ys:Ui);let ge={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ln(d.textureWidth,d.textureHeight,{format:ui,type:jn,depthTexture:new Di(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Z={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ln(f.framebufferWidth,f.framebufferHeight,{format:ui,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),z.setContext(s),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(U){for(let J=0;J<U.removed.length;J++){let Z=U.removed[J],ae=E.indexOf(Z);ae>=0&&(E[ae]=null,T[ae].disconnect(Z))}for(let J=0;J<U.added.length;J++){let Z=U.added[J],ae=E.indexOf(Z);if(ae===-1){for(let ge=0;ge<T.length;ge++)if(ge>=E.length){E.push(Z),ae=ge;break}else if(E[ge]===null){E[ge]=Z,ae=ge;break}if(ae===-1)break}let oe=T[ae];oe&&oe.connect(Z)}}function H(U,J){J===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(J.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let J=U.near,Z=U.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(Z=g.depthFar)),w.near=G.near=I.near=J,w.far=G.far=I.far=Z,(S!==w.near||D!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,D=w.far),w.layers.mask=U.layers.mask|6,I.layers.mask=w.layers.mask&-5,G.layers.mask=w.layers.mask&-3;let ae=U.parent,oe=w.cameras;H(w,ae);for(let ge=0;ge<oe.length;ge++)H(oe[ge],ae);w.projectionMatrix.copy(I.projectionMatrix),w.projectionMatrixInverse.copy(I.projectionMatrixInverse),F===null&&U.isPerspectiveCamera&&(F={camera:U,fov:U.fov,zoom:U.zoom}),N(U,w,ae)};function N(U,J,Z){Z===null?U.matrix.copy(J.matrixWorld):(U.matrix.copy(Z.matrixWorld),U.matrix.invert(),U.matrix.multiply(J.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(J.projectionMatrix),U.projectionMatrixInverse.copy(J.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=aa*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)},this.getCameraTexture=function(U){return m[U]};let Y=null;function q(U,J){if(u=J.getViewerPose(c||r),p=J,u!==null){let Z=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ae=!1;Z.length!==w.cameras.length&&(w.cameras.length=0,ae=!0);for(let Ue=0;Ue<Z.length;Ue++){let Ge=Z[Ue],be=null;if(f!==null)be=f.getViewport(Ge);else{let pe=h.getViewSubImage(d,Ge);be=pe.viewport,Ue===0&&(e.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(v))}let ie=X[Ue];ie===void 0&&(ie=new en,ie.layers.enable(Ue),ie.viewport=new Ut,X[Ue]=ie),ie.matrix.fromArray(Ge.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Ge.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(be.x,be.y,be.width,be.height),Ue===0&&(w.matrix.copy(ie.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ae===!0&&w.cameras.push(ie)}let oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=n.getBinding();let Ue=h.getDepthInformation(Z[0]);Ue&&Ue.isValid&&Ue.texture&&g.init(Ue,s.renderState)}if(oe&&oe.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let Ue=0;Ue<Z.length;Ue++){let Ge=Z[Ue].camera;if(Ge){let be=m[Ge];be||(be=new so,m[Ge]=be);let ie=h.getCameraImage(Ge);be.sourceTexture=ie}}}}for(let Z=0;Z<T.length;Z++){let ae=E[Z],oe=T[Z];ae!==null&&oe!==void 0&&oe.update(ae,J,c||r)}Y&&Y(U,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}let z=new X0;z.setAnimationLoop(q),this.setAnimationLoop=function(U){Y=U},this.dispose=function(){}}},dv=new Je,Z0=new ft;Z0.set(-1,0,0,0,1,0,0,0,1);function fv(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Md(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,_,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(g,m):m.isMeshLambertMaterial?(a(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(g,m),h(g,m)):m.isMeshPhongMaterial?(a(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(a(g,m),p(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),b(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===kn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===kn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),_=y.envMap,v=y.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(dv.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Z0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pv(i,e,t,n){let s={},a={};function r(y,_){let v=_.program;n.uniformBlockBinding(y,v,s[y.id])}function o(y,_){let v=s[y.id];v===void 0&&(p(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",g));let T=_.program;n.updateUBOMapping(y,T);let E=e.render.frame;a[y.id]!==E&&(c(y),a[y.id]=E)}function l(y){let _=i.createBuffer(),v=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,v,T),i.bindBuffer(i.UNIFORM_BUFFER,null),_}function c(y){let _=s[y.id],v=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,M=v.length;E<M;E++){let x=v[E];if(Array.isArray(x))for(let F=0,I=x.length;F<I;F++)u(x[F],E,F,T);else u(x,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,_,v,T){if(d(y,_,v,T)===!0){let E=y.__offset,M=y.value;if(Array.isArray(M)){let x=0;for(let F=0;F<M.length;F++){let I=M[F],G=b(I,!0);h(I,y.__data,x),x+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else h(M,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,y.__data)}}function h(y,_,v){typeof y=="number"||typeof y=="boolean"?_[v]=y:y.isMatrix3?(_[v]=y.elements[0],_[v+1]=y.elements[1],_[v+2]=y.elements[2],_[v+3]=0,_[v+4]=y.elements[3],_[v+5]=y.elements[4],_[v+6]=y.elements[5],_[v+7]=0,_[v+8]=y.elements[6],_[v+9]=y.elements[7],_[v+10]=y.elements[8],_[v+11]=0):ArrayBuffer.isView(y)?_.set(y.subarray(0,_.length-v),v):y.toArray(_,v)}function d(y,_,v,T){let E=y.value,M=_+"_"+v;if(Array.isArray(E)){T[M]===void 0&&(T[M]=[]);let x=T[M],F=!1;for(let I=0;I<E.length;I++)f(E[I],x,I)===!0&&(F=!0);return F}return f(E,T,M)}function f(y,_,v){if(_[v]===void 0)return typeof y=="number"||typeof y=="boolean"?_[v]=y:ArrayBuffer.isView(y)?_[v]=y.slice():_[v]=y.clone(),!0;{let T=_[v];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return _[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function p(y){let _=y.uniforms,v=0,T=16;for(let M=0,x=_.length;M<x;M++){let F=Array.isArray(_[M])?_[M]:[_[M]];for(let I=0,G=F.length;I<G;I++){let X=F[I],w=Array.isArray(X.value)?X.value:[X.value],S=Array.isArray(_[M])||Array.isArray(X.value),D=v;for(let k=0,O=w.length;k<O;k++){let H=w[k],N=b(H,S),Y=v%T,q=Y%N.boundary,z=Y+q;v+=q,z!==0&&T-z<N.storage&&(v+=T-z),k===0&&(D=v),v+=N.storage}let A=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new A((v-D)/Float32Array.BYTES_PER_ELEMENT),X.__offset=D}}let E=v%T;return E>0&&(v+=T-E),y.__size=v,y.__cache={},this}function b(y,_){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):We("WebGLRenderer: Unsupported uniform value type.",y),_===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(y){let _=y.target;_.removeEventListener("dispose",g),i.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);s={},a={}}return{bind:r,update:o,dispose:m}}var mv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;function gv(){return zi===null&&(zi=new Vi(mv,16,16,Xs,gn),zi.name="DFG_LUT",zi.minFilter=Pn,zi.magFilter=Pn,zi.wrapS=vi,zi.wrapT=vi,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var mu=class{constructor(e={}){let{canvas:t=h0(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=jn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let b=f,g=new Set([Dc,Fc,Ic]),m=new Set([jn,Ui,hr,ys,wc,Lc]),y=new Uint32Array(4),_=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,E=null,M=[],x=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,G=!1,X=null,w=null,S=null,D=null;this._outputColorSpace=ut;let A=0,k=0,O=null,H=-1,N=null,Y=new Ut,q=new Ut,z=null,U=new he(0),J=0,Z=t.width,ae=t.height,oe=1,ge=null,Se=null,Ue=new Ut(0,0,Z,ae),Ge=new Ut(0,0,Z,ae),be=!1,ie=new Bs,pe=new ac,$=!1,ye=!1,Ee=new Je,it=new C,qe=new Ut,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function Et(){return O===null?oe:1}let j=n;function yt(L,W){return t.getContext(L,W)}let at,Ft,Pe,Ot,fe,$e,B,R,te,Me,ce,Te,we,re,ue,Ae,Q,de,le,De,Re,Fe,je;try{let L={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",He,!1),j===null){let W="webgl2";if(j=yt(W,L),j===null)throw yt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}bt()}catch(L){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",He,!1),rt("WebGLRenderer: "+L.message),L}function bt(){at=new RM(j),at.init(),Re=new cv(j,at),Ft=new gM(j,at,e,Re),Pe=new ov(j,at),Ft.reversedDepthBuffer&&d&&Pe.buffers.depth.setReversed(!0),w=j.createFramebuffer(),S=j.createFramebuffer(),D=j.createFramebuffer(),Ot=new LM(j),fe=new Q2,$e=new lv(j,at,Pe,fe,Ft,Re,Ot),B=new AM(I),R=new Ix(j),Fe=new pM(j,R),te=new PM(j,R,Ot,Fe),Me=new IM(j,te,R,Fe,Ot),de=new kM(j,Ft,$e),ue=new bM(fe),ce=new $2(I,B,at,Ft,Fe,ue),Te=new fv(I,fe),we=new J2,re=new tv(at),Q=new fM(I,B,Pe,Me,p,l),Ae=new rv(I,Me,Ft),je=new pv(j,Ot,Ft,Pe),le=new mM(j,at,Ot),De=new wM(j,at,Ot),Ot.programs=ce.programs,I.capabilities=Ft,I.extensions=at,I.properties=fe,I.renderLists=we,I.shadowMap=Ae,I.state=Pe,I.info=Ot}b!==jn&&(F=new DM(b,t.width,t.height,o,s,a));let _e=new Hd(I,j);this.xr=_e,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let L=at.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=at.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(L){L!==void 0&&(oe=L,this.setSize(Z,ae,!1))},this.getSize=function(L){return L.set(Z,ae)},this.setSize=function(L,W,se=!0){if(_e.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=L,ae=W,t.width=Math.floor(L*oe),t.height=Math.floor(W*oe),se===!0&&(t.style.width=L+"px",t.style.height=W+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(Z*oe,ae*oe).floor()},this.setDrawingBufferSize=function(L,W,se){Z=L,ae=W,oe=se,t.width=Math.floor(L*se),t.height=Math.floor(W*se),this.setViewport(0,0,L,W)},this.setEffects=function(L){if(b===jn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let W=0;W<L.length;W++)if(L[W].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(Y)},this.getViewport=function(L){return L.copy(Ue)},this.setViewport=function(L,W,se,ee){L.isVector4?Ue.set(L.x,L.y,L.z,L.w):Ue.set(L,W,se,ee),Pe.viewport(Y.copy(Ue).multiplyScalar(Et()).round())},this.getScissor=function(L){return L.copy(Ge)},this.setScissor=function(L,W,se,ee){L.isVector4?Ge.set(L.x,L.y,L.z,L.w):Ge.set(L,W,se,ee),Pe.scissor(q.copy(Ge).multiplyScalar(Et()).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(L){Pe.setScissorTest(be=L)},this.setOpaqueSort=function(L){ge=L},this.setTransparentSort=function(L){Se=L},this.getClearColor=function(L){return L.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(L=!0,W=!0,se=!0){let ee=0;if(L){let ne=!1;if(O!==null){let Ie=O.texture.format;ne=g.has(Ie)}if(ne){let Ie=O.texture.type,Xe=m.has(Ie),Ce=Q.getClearColor(),Be=Q.getClearAlpha(),Qe=Ce.r,ht=Ce.g,At=Ce.b;Xe?(y[0]=Qe,y[1]=ht,y[2]=At,y[3]=Be,j.clearBufferuiv(j.COLOR,0,y)):(_[0]=Qe,_[1]=ht,_[2]=At,_[3]=Be,j.clearBufferiv(j.COLOR,0,_))}else ee|=j.COLOR_BUFFER_BIT}W&&(ee|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ee|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&j.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),X=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Q.dispose(),we.dispose(),re.dispose(),$e.dispose(),fe.dispose(),B.dispose(),Me.dispose(),te.dispose(),Fe.dispose(),je.dispose(),ce.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",pl),_e.removeEventListener("sessionend",ml),Pi.stop()};function Ze(L){L.preventDefault(),zr("WebGLRenderer: Context Lost."),G=!0}function pt(){zr("WebGLRenderer: Context Restored."),G=!1;let L=Ot.autoReset,W=Ae.enabled,se=Ae.autoUpdate,ee=Ae.needsUpdate,ne=Ae.type;bt(),Ot.autoReset=L,Ae.enabled=W,Ae.autoUpdate=se,Ae.needsUpdate=ee,Ae.type=ne}function He(L){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function kt(L){let W=L.target;W.removeEventListener("dispose",kt),fn(W)}function fn(L){Nt(L),fe.remove(L)}function Nt(L){let W=fe.get(L).programs;W!==void 0&&(W.forEach(function(se){ce.releaseProgram(se)}),L.isShaderMaterial&&ce.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,se,ee,ne,Ie){W===null&&(W=Ye);let Xe=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ce=gl(L,W,se,ee,ne);Pe.setMaterial(ee,Xe);let Be=se.index,Qe=1;if(ee.wireframe===!0){if(Be=te.getWireframeAttribute(se),Be===void 0)return;Qe=2}let ht=se.drawRange,At=se.attributes.position,Ve=ht.start*Qe,Rt=(ht.start+ht.count)*Qe;Ie!==null&&(Ve=Math.max(Ve,Ie.start*Qe),Rt=Math.min(Rt,(Ie.start+Ie.count)*Qe)),Be!==null?(Ve=Math.max(Ve,0),Rt=Math.min(Rt,Be.count)):At!=null&&(Ve=Math.max(Ve,0),Rt=Math.min(Rt,At.count));let un=Rt-Ve;if(un<0||un===1/0)return;Fe.setup(ne,ee,Ce,se,Be);let $t,Qt=le;if(Be!==null&&($t=R.get(Be),Qt=De,Qt.setIndex($t)),ne.isMesh)ee.wireframe===!0?(Pe.setLineWidth(ee.wireframeLinewidth*Et()),Qt.setMode(j.LINES)):Qt.setMode(j.TRIANGLES);else if(ne.isLine){let Rn=ee.linewidth;Rn===void 0&&(Rn=1),Pe.setLineWidth(Rn*Et()),ne.isLineSegments?Qt.setMode(j.LINES):ne.isLineLoop?Qt.setMode(j.LINE_LOOP):Qt.setMode(j.LINE_STRIP)}else ne.isPoints?Qt.setMode(j.POINTS):ne.isSprite&&Qt.setMode(j.TRIANGLES);if(ne.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Qt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let Rn=ne._multiDrawStarts,P=ne._multiDrawCounts,V=ne._multiDrawCount,K=Be?R.get(Be).bytesPerElement:1,xe=fe.get(ee).currentProgram.getUniforms();for(let Le=0;Le<V;Le++)xe.setValue(j,"_gl_DrawID",Le),Qt.render(Rn[Le]/K,P[Le])}else if(ne.isInstancedMesh)Qt.renderInstances(Ve,un,ne.count);else if(se.isInstancedBufferGeometry){let Rn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,P=Math.min(se.instanceCount,Rn);Qt.renderInstances(Ve,un,P)}else Qt.render(Ve,un)};function Pr(L,W,se,ee){X!==null&&L.isNodeMaterial&&X.setObject(ee,L),$===!0&&ue.setState(L,se,!1),L.transparent===!0&&L.side===Dt&&L.forceSinglePass===!1?(L.side=kn,L.needsUpdate=!0,As(L,W,ee),L.side=$i,L.needsUpdate=!0,As(L,W,ee),L.side=Dt):As(L,W,ee)}this.compile=function(L,W,se=null){se===null&&(se=L),X!==null&&X.renderStart(L,W,se),E=re.get(se),E.init(W),x.push(E),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(E.pushLight(ne),ne.castShadow&&E.pushShadow(ne))}),L!==se&&L.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(E.pushLight(ne),ne.castShadow&&E.pushShadow(ne))}),E.setupLights(),X!==null&&X.updateLights(E.state.lightsArray),ye=this.localClippingEnabled,$=ue.init(this.clippingPlanes,ye),$===!0&&ue.setGlobalState(this.clippingPlanes,W),X!==null&&Ae.render(E.state.shadowsArray,se,W);let ee=new Set;return L.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Ie=ne.material;if(Ie)if(Array.isArray(Ie))for(let Xe=0;Xe<Ie.length;Xe++){let Ce=Ie[Xe];Pr(Ce,se,W,ne),ee.add(Ce)}else Pr(Ie,se,W,ne),ee.add(Ie)}),E=x.pop(),X!==null&&X.renderEnd(),ee},this.compileAsync=function(L,W,se=null){let ee=this.compile(L,W,se);return new Promise(ne=>{function Ie(){if(ee.forEach(function(Xe){let Be=fe.get(Xe).currentProgram;(Be===void 0||Be.isReady())&&ee.delete(Xe)}),ee.size===0){ne(L);return}setTimeout(Ie,10)}at.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Ts=null;function fl(L){Ts&&Ts(L)}function pl(){Pi.stop()}function ml(){Pi.start()}let Pi=new X0;Pi.setAnimationLoop(fl),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(L){Ts=L,_e.setAnimationLoop(L),L===null?Pi.stop():Pi.start()},_e.addEventListener("sessionstart",pl),_e.addEventListener("sessionend",ml),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;X!==null&&X.renderStart(L,W);let se=_e.enabled===!0&&_e.isPresenting===!0,ee=F!==null&&(O===null||se)&&F.begin(I,O);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(W),W=_e.getCamera()),L.isScene===!0&&L.onBeforeRender(I,L,W,O),E=re.get(L,x.length),E.init(W),E.state.textureUnits=$e.getTextureUnits(),x.push(E),Ee.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?pe.setFromArrayCamera(W):ie.setFromProjectionMatrix(Ee,_i,W.reversedDepth),ye=this.localClippingEnabled,$=ue.init(this.clippingPlanes,ye),T=we.get(L,M.length),T.init(),M.push(T),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let Xe=I.xr.getDepthSensingMesh();Xe!==null&&xn(Xe,W,-1/0,I.sortObjects)}xn(L,W,0,I.sortObjects),T.finish(),X!==null&&X.updateLights(E.state.lightsArray),I.sortObjects===!0&&T.sort(ge,Se),gt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,gt&&Q.addToRenderList(T,L),this.info.autoReset===!0&&this.info.reset(),$===!0&&ue.beginShadows();let ne=E.state.shadowsArray;if(Ae.render(ne,L,W),$===!0&&ue.endShadows(),(ee&&F.hasRenderPass())===!1){let Xe=T.opaque,Ce=T.transmissive;if(E.setupLights(),W.isArrayCamera){let Be=W.cameras;if(Ce.length>0)for(let Qe=0,ht=Be.length;Qe<ht;Qe++){let At=Be[Qe];Sa(Xe,Ce,L,At)}gt&&Q.render(L);for(let Qe=0,ht=Be.length;Qe<ht;Qe++){let At=Be[Qe];Es(T,L,At,At.viewport)}}else Ce.length>0&&Sa(Xe,Ce,L,W),gt&&Q.render(L),Es(T,L,W)}O!==null&&k===0&&($e.updateMultisampleRenderTarget(O),$e.updateRenderTargetMipmap(O)),ee&&F.end(I),L.isScene===!0&&L.onAfterRender(I,L,W),Fe.resetDefaultState(),H=-1,N=null,x.pop(),x.length>0?(E=x[x.length-1],$e.setTextureUnits(E.state.textureUnits),$===!0&&ue.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,M.pop(),M.length>0?T=M[M.length-1]:T=null,X!==null&&X.renderEnd()};function xn(L,W,se,ee){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)E.pushLight(L),L.castShadow&&E.pushShadow(L);else if(L.isSprite){let Xe=W.isArrayCamera?pe:ie;if(!L.frustumCulled||L.intersectsFrustum(Xe)){ee&&qe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ee);let Ce=Me.update(L),Be=L.material;Be.visible&&T.push(L,Ce,Be,se,qe.z,null,W)}}else if(L.isMesh||L.isLine||L.isPoints){let Xe=W.isArrayCamera?pe:ie;if(!L.frustumCulled||L.intersectsFrustum(Xe)){let Ce=Me.update(L),Be=L.material;if(ee&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),qe.copy(L.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),qe.copy(Ce.boundingSphere.center)),qe.applyMatrix4(L.matrixWorld).applyMatrix4(Ee)),Array.isArray(Be)){let Qe=Ce.groups;for(let ht=0,At=Qe.length;ht<At;ht++){let Ve=Qe[ht],Rt=Be[Ve.materialIndex];Rt&&Rt.visible&&T.push(L,Ce,Rt,se,qe.z,Ve,W)}}else Be.visible&&T.push(L,Ce,Be,se,qe.z,null,W)}}}let Ie=L.children;for(let Xe=0,Ce=Ie.length;Xe<Ce;Xe++)xn(Ie[Xe],W,se,ee)}function Es(L,W,se,ee){let{opaque:ne,transmissive:Ie,transparent:Xe}=L;E.setupLightsView(se),$===!0&&ue.setGlobalState(I.clippingPlanes,se),ee&&Pe.viewport(Y.copy(ee)),ne.length>0&&An(ne,W,se),Ie.length>0&&An(Ie,W,se),Xe.length>0&&An(Xe,W,se),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Sa(L,W,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ee.id]===void 0){let Ve=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ee.id]=new ln(1,1,{generateMipmaps:!0,type:Ve?gn:jn,minFilter:ci,samples:Math.max(4,Ft.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let Ie=E.state.transmissionRenderTarget[ee.id],Xe=ee.viewport||Y;Ie.setSize(Xe.z*I.transmissionResolutionScale,Xe.w*I.transmissionResolutionScale);let Ce=I.getRenderTarget(),Be=I.getActiveCubeFace(),Qe=I.getActiveMipmapLevel();I.setRenderTarget(Ie),I.getClearColor(U),J=I.getClearAlpha(),J<1&&I.setClearColor(16777215,.5),I.clear(),gt&&Q.render(se);let ht=I.toneMapping;I.toneMapping=Qi;let At=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),E.setupLightsView(ee),$===!0&&ue.setGlobalState(I.clippingPlanes,ee),An(L,se,ee),$e.updateMultisampleRenderTarget(Ie),$e.updateRenderTargetMipmap(Ie),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Rt=0,un=W.length;Rt<un;Rt++){let $t=W[Rt],{object:Qt,geometry:Rn,material:P,group:V}=$t;if(P.side===Dt&&Qt.layers.test(ee.layers)){let K=P.side;P.side=kn,P.needsUpdate=!0,Zn(Qt,se,ee,Rn,P,V),P.side=K,P.needsUpdate=!0,Ve=!0}}Ve===!0&&($e.updateMultisampleRenderTarget(Ie),$e.updateRenderTargetMipmap(Ie))}I.setRenderTarget(Ce,Be,Qe),I.setClearColor(U,J),At!==void 0&&(ee.viewport=At),I.toneMapping=ht}function An(L,W,se){let ee=W.isScene===!0?W.overrideMaterial:null;for(let ne=0,Ie=L.length;ne<Ie;ne++){let Xe=L[ne],{object:Ce,geometry:Be,group:Qe}=Xe,ht=Xe.material;ht.allowOverride===!0&&ee!==null&&(ht=ee),Ce.layers.test(se.layers)&&Zn(Ce,W,se,Be,ht,Qe)}}function Zn(L,W,se,ee,ne,Ie){X!==null&&ne.isNodeMaterial&&X.setObject(L,ne),L.onBeforeRender(I,W,se,ee,ne,Ie),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ne.onBeforeRender(I,W,se,ee,L,Ie),ne.transparent===!0&&ne.side===Dt&&ne.forceSinglePass===!1?(ne.side=kn,ne.needsUpdate=!0,I.renderBufferDirect(se,W,ee,ne,L,Ie),ne.side=$i,ne.needsUpdate=!0,I.renderBufferDirect(se,W,ee,ne,L,Ie),ne.side=Dt):I.renderBufferDirect(se,W,ee,ne,L,Ie),L.onAfterRender(I,W,se,ee,ne,Ie)}function Ws(L){let W=0;for(let se of L)se.texture!==null&&W++;return W}function As(L,W,se){W.isScene!==!0&&(W=Ye);let ee=fe.get(L),ne=E.state.lights,Ie=E.state.shadowsArray,Xe=ne.state.version,Ce=ce.getParameters(L,ne.state,Ie,W,se,E.state.lightProbeGridArray),Be=ce.getProgramCacheKey(Ce),Qe=ee.programs;ee.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?W.environment:null,ee.fog=W.fog;let ht=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ee.envMap=B.get(L.envMap||ee.environment,ht),ee.envMapRotation=ee.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,Qe===void 0&&(L.addEventListener("dispose",kt),Qe=new Map,ee.programs=Qe,ee.programVariants=new Map);let At=Qe.get(Be);if(At!==void 0){if(ee.currentProgram===At&&ee.lightsStateVersion===Xe)return wr(L,Ce),At}else Ce.uniforms=ce.getUniforms(L),X!==null&&L.isNodeMaterial&&X.build(L,se,Ce),L.onBeforeCompile(Ce,I),At=ce.acquireProgram(Ce,Be),Qe.set(Be,At),ee.uniforms=Ce.uniforms;let Ve=ee.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ve.clippingPlanes=ue.uniform),wr(L,Ce),ee.needsLights=sh(L),ee.lightsStateVersion=Xe,ee.needsLights&&(Ve.ambientLightColor.value=ne.state.ambient,Ve.lightProbe.value=ne.state.probe,Ve.sunLights.value=ne.state.sun,Ve.sunLightShadows.value=ne.state.sunShadow,Ve.directionalLights.value=ne.state.directional,Ve.directionalLightShadows.value=ne.state.directionalShadow,Ve.spotLights.value=ne.state.spot,Ve.spotLightShadows.value=ne.state.spotShadow,Ve.rectAreaLights.value=ne.state.rectArea,Ve.ltc_1.value=ne.state.rectAreaLTC1,Ve.ltc_2.value=ne.state.rectAreaLTC2,Ve.pointLights.value=ne.state.point,Ve.pointLightShadows.value=ne.state.pointShadow,Ve.hemisphereLights.value=ne.state.hemi,Ve.sunShadowMatrix.value=ne.state.sunShadowMatrix,Ve.sunShadowCascade.value=ne.state.sunShadowCascade,Ve.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ve.spotLightMatrix.value=ne.state.spotLightMatrix,Ve.spotLightMap.value=ne.state.spotLightMap,Ve.pointShadowMatrix.value=ne.state.pointShadowMatrix),ee.numLightProbeGrids=Ws(E.state.lightProbeGridArray),ee.currentProgram=At,ee.uniformsList=null,At}function Ta(L,W,se,ee,ne){let Ie=fe.get(L),Xe=Ie.currentProgram.id+","+ee+","+ne,Ce=Ie.programVariants.get(Xe);return Ce===void 0?(Ce=As(L,W,se),Ie.programVariants.set(Xe,Ce)):(Ie.currentProgram=Ce,Ie.uniformsList=null,Ie.outputColorSpace=ee,Ie.toneMapping=ne),Ce}function Ea(L){if(L.uniformsList===null){let W=L.currentProgram.getUniforms();L.uniformsList=fr.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function wr(L,W){let se=fe.get(L);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function gl(L,W,se,ee,ne){W.isScene!==!0&&(W=Ye),$e.resetTextureUnits();let Ie=W.fog,Xe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?W.environment:null,Ce=O===null?I.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:xt.workingColorSpace,Be=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Qe=B.get(ee.envMap||Xe,Be),ht=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,At=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ve=!!se.morphAttributes.position,Rt=!!se.morphAttributes.normal,un=!!se.morphAttributes.color,$t=Qi;ee.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&($t=I.toneMapping);let Qt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Rn=Qt!==void 0?Qt.length:0,P=fe.get(ee),V=E.state.lights;if($===!0&&(ye===!0||L!==N)){let ct=L===N&&ee.id===H;ue.setState(ee,L,ct)}let K=!1,xe=!1;ee.version===P.__version?P.needsLights&&P.lightsStateVersion!==V.state.version||ne.isBatchedMesh&&P.batching===!1||!ne.isBatchedMesh&&P.batching===!0||ne.isBatchedMesh&&P.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&P.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&P.instancing===!1||!ne.isInstancedMesh&&P.instancing===!0||ne.isSkinnedMesh&&P.skinning===!1||!ne.isSkinnedMesh&&P.skinning===!0||ne.isInstancedMesh&&P.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&P.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&P.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&P.instancingMorph===!1&&ne.morphTexture!==null||P.envMap!==Qe||ee.fog===!0&&P.fog!==Ie||P.numClippingPlanes!==void 0&&(P.numClippingPlanes!==ue.numPlanes||P.numIntersection!==ue.numIntersection)||P.vertexAlphas!==ht||P.vertexTangents!==At||P.morphTargets!==Ve||P.morphNormals!==Rt||P.morphColors!==un||P.morphTargetsCount!==Rn||P.numLightProbeGrids!==Ws(E.state.lightProbeGridArray)?K=!0:(P.outputColorSpace!==Ce||P.toneMapping!==$t)&&(xe=!0):(K=!0,P.__version=ee.version);let Le=P.currentProgram;(K===!0||xe===!0)&&(Le=xe===!0?Ta(ee,W,ne,Ce,$t):As(ee,W,ne),X&&ee.isNodeMaterial&&X.onUpdateProgram(ee,Le,P));let et=!1,mt=!1,qt=!1,ze=Le.getUniforms(),St=P.uniforms;if(Pe.useProgram(Le.program)&&(et=!0,mt=!0,qt=!0),ee.id!==H&&(H=ee.id,mt=!0),et||N!==L){Pe.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ze.setValue(j,"projectionMatrix",L.projectionMatrix),ze.setValue(j,"viewMatrix",L.matrixWorldInverse);let Mt=ze.map.cameraPosition;Mt!==void 0&&Mt.setValue(j,it.setFromMatrixPosition(L.matrixWorld)),Ft.logarithmicDepthBuffer&&ze.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&ze.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),N!==L&&(N=L,mt=!0,qt=!0)}if(P.needsLights&&(V.state.sunShadowMap.length>0&&ze.setValue(j,"sunShadowMap",V.state.sunShadowMap,$e),V.state.directionalShadowMap.length>0&&ze.setValue(j,"directionalShadowMap",V.state.directionalShadowMap,$e),V.state.spotShadowMap.length>0&&ze.setValue(j,"spotShadowMap",V.state.spotShadowMap,$e),V.state.pointShadowMap.length>0&&ze.setValue(j,"pointShadowMap",V.state.pointShadowMap,$e)),ne.isSkinnedMesh){ze.setOptional(j,ne,"bindMatrix"),ze.setOptional(j,ne,"bindMatrixInverse");let ct=ne.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ze.setValue(j,"boneTexture",ct.boneTexture,$e))}ne.isBatchedMesh&&(ze.setOptional(j,ne,"batchingTexture"),ze.setValue(j,"batchingTexture",ne._matricesTexture,$e),ze.setOptional(j,ne,"batchingIdTexture"),ze.setValue(j,"batchingIdTexture",ne._indirectTexture,$e),ze.setOptional(j,ne,"batchingColorTexture"),ne._colorsTexture!==null&&ze.setValue(j,"batchingColorTexture",ne._colorsTexture,$e));let Ht=se.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&de.update(ne,se,Le),(mt||P.receiveShadow!==ne.receiveShadow)&&(P.receiveShadow=ne.receiveShadow,ze.setValue(j,"receiveShadow",ne.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&W.environment!==null&&(St.envMapIntensity.value=W.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=gv()),mt){if(ze.setValue(j,"toneMappingExposure",I.toneMappingExposure),P.needsLights&&bl(St,qt),Ie&&ee.fog===!0&&Te.refreshFogUniforms(St,Ie),Te.refreshMaterialUniforms(St,ee,oe,ae,E.state.transmissionRenderTarget[L.id]),P.needsLights&&P.numLightProbeGrids>0){let ct=v,Mt=0;for(let ri of E.state.lightProbeGridArray)ri.texture!==null&&(ct.textures[Mt]=ri.texture,ct.min[Mt]=ri.boundingBox.min,ct.max[Mt]=ri.boundingBox.max,ct.resolution[Mt]=ri.resolution,Mt++);for(let ri in ct)ct[ri].length=Mt;St.probesSH.value=ct.textures,St.probesMin.value=ct.min,St.probesMax.value=ct.max,St.probesResolution.value=ct.resolution}fr.upload(j,Ea(P),St,$e)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(fr.upload(j,Ea(P),St,$e),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&ze.setValue(j,"center",ne.center),ze.setValue(j,"modelViewMatrix",ne.modelViewMatrix),ze.setValue(j,"normalMatrix",ne.normalMatrix),ze.setValue(j,"modelMatrix",ne.matrixWorld),ee.uniformsGroups!==void 0){let ct=ee.uniformsGroups;for(let Mt=0,ri=ct.length;Mt<ri;Mt++){let ns=ct[Mt];je.update(ns,Le),je.bind(ns,Le)}}return Le}function bl(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.sunLights.needsUpdate=W,L.sunLightShadows.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function sh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,W,se){let ee=fe.get(L);ee.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),fe.get(L.texture).__webglTexture=W,fe.get(L.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,W){let se=fe.get(L);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,se=0){O=L,A=W,k=se;let ee=null,ne=!1,Ie=!1;if(L){let Ce=fe.get(L);if(Ce.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(j.FRAMEBUFFER,Ce.__webglFramebuffer),Y.copy(L.viewport),q.copy(L.scissor),z=L.scissorTest,Pe.viewport(Y),Pe.scissor(q),Pe.setScissorTest(z),H=-1;return}else if(Ce.__webglFramebuffer===void 0)$e.setupRenderTarget(L);else if(Ce.__hasExternalTextures)$e.rebindTextures(L,fe.get(L.texture).__webglTexture,fe.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let ht=L.depthTexture;if(Ce.__boundDepthTexture!==ht){if(ht!==null&&fe.has(ht)&&(L.width!==ht.image.width||L.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(L)}}let Be=L.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ie=!0);let Qe=fe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?ee=Qe[W][se]:ee=Qe[W],ne=!0):L.samples>0&&$e.useMultisampledRTT(L)===!1?ee=fe.get(L).__webglMultisampledFramebuffer:Array.isArray(Qe)?ee=Qe[se]:ee=Qe,Y.copy(L.viewport),q.copy(L.scissor),z=L.scissorTest}else Y.copy(Ue).multiplyScalar(oe).floor(),q.copy(Ge).multiplyScalar(oe).floor(),z=be;if(se!==0&&(ee=w),Pe.bindFramebuffer(j.FRAMEBUFFER,ee)&&Pe.drawBuffers(L,ee),Pe.viewport(Y),Pe.scissor(q),Pe.setScissorTest(z),ne){let Ce=fe.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce.__webglTexture,se)}else if(Ie){let Ce=W;for(let Be=0;Be<L.textures.length;Be++){let Qe=fe.get(L.textures[Be]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Be,Qe.__webglTexture,se,Ce)}}else if(L!==null&&se!==0){let Ce=fe.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ce.__webglTexture,se)}H=-1};function Lr(L){let W=fe.get(L);return(W.__readFormat!==L.format||W.__readType!==L.type)&&(W.__readFormat=L.format,W.__readType=L.type,W.__formatReadable=Ft.textureFormatReadable(L.format),W.__typeReadable=Ft.textureTypeReadable(L.type)),W}this.readRenderTargetPixels=function(L,W,se,ee,ne,Ie,Xe,Ce=0){if(!(L&&L.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=fe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xe!==void 0&&(Be=Be[Xe],Array.isArray(Be)&&(Be=Be[0])),Be){Pe.bindFramebuffer(j.FRAMEBUFFER,Be);try{let Qe=L.textures[Ce],ht=Qe.format,At=Qe.type;L.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ce);let Ve=Lr(Qe);if(Ve.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-ee&&se>=0&&se<=L.height-ne&&j.readPixels(W,se,ee,ne,Re.convert(ht),Re.convert(At),Ie)}finally{let Qe=O!==null?fe.get(O).__webglFramebuffer:null;Pe.bindFramebuffer(j.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(L,W,se,ee,ne,Ie,Xe,Ce=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=fe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xe!==void 0&&(Be=Be[Xe],Array.isArray(Be)&&(Be=Be[0])),Be)if(W>=0&&W<=L.width-ee&&se>=0&&se<=L.height-ne){Pe.bindFramebuffer(j.FRAMEBUFFER,Be);let Qe=L.textures[Ce],ht=Qe.format,At=Qe.type;L.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ce);let Ve=Lr(Qe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Rt),j.bufferData(j.PIXEL_PACK_BUFFER,Ie.byteLength,j.STREAM_READ),j.readPixels(W,se,ee,ne,Re.convert(ht),Re.convert(At),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let un=O!==null?fe.get(O).__webglFramebuffer:null;Pe.bindFramebuffer(j.FRAMEBUFFER,un);let $t=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await f0(j,$t,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Rt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ie),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(Rt),j.deleteSync($t),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,W=null,se=0){let ee=Math.pow(2,-se),ne=Math.floor(L.image.width*ee),Ie=Math.floor(L.image.height*ee),Xe=W!==null?W.x:0,Ce=W!==null?W.y:0;$e.setTexture2D(L,0),j.copyTexSubImage2D(j.TEXTURE_2D,se,0,0,Xe,Ce,ne,Ie),Pe.unbindTexture()},this.copyTextureToTexture=function(L,W,se=null,ee=null,ne=0,Ie=0){let Xe,Ce,Be,Qe,ht,At,Ve,Rt,un,$t=L.isCompressedTexture?L.mipmaps[Ie]:L.image;if(se!==null)Xe=se.max.x-se.min.x,Ce=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,Qe=se.min.x,ht=se.min.y,At=se.isBox3?se.min.z:0;else{let ze=Math.pow(2,-ne);Xe=Math.floor($t.width*ze),Ce=Math.floor($t.height*ze),L.isDataArrayTexture?Be=$t.depth:L.isData3DTexture?Be=Math.floor($t.depth*ze):Be=1,Qe=0,ht=0,At=0}ee!==null?(Ve=ee.x,Rt=ee.y,un=ee.z):(Ve=0,Rt=0,un=0);let Qt=Re.convert(W.format),Rn=Re.convert(W.type),P;W.isData3DTexture?($e.setTexture3D(W,0),P=j.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?($e.setTexture2DArray(W,0),P=j.TEXTURE_2D_ARRAY):($e.setTexture2D(W,0),P=j.TEXTURE_2D),Pe.activeTexture(j.TEXTURE0),Pe.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,W.flipY),Pe.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Pe.pixelStorei(j.UNPACK_ALIGNMENT,W.unpackAlignment);let V=Pe.getParameter(j.UNPACK_ROW_LENGTH),K=Pe.getParameter(j.UNPACK_IMAGE_HEIGHT),xe=Pe.getParameter(j.UNPACK_SKIP_PIXELS),Le=Pe.getParameter(j.UNPACK_SKIP_ROWS),et=Pe.getParameter(j.UNPACK_SKIP_IMAGES);Pe.pixelStorei(j.UNPACK_ROW_LENGTH,$t.width),Pe.pixelStorei(j.UNPACK_IMAGE_HEIGHT,$t.height),Pe.pixelStorei(j.UNPACK_SKIP_PIXELS,Qe),Pe.pixelStorei(j.UNPACK_SKIP_ROWS,ht),Pe.pixelStorei(j.UNPACK_SKIP_IMAGES,At);let mt=L.isDataArrayTexture||L.isData3DTexture,qt=W.isDataArrayTexture||W.isData3DTexture;if(L.isDepthTexture){let ze=fe.get(L),St=fe.get(W),Ht=fe.get(ze.__renderTarget),ct=fe.get(St.__renderTarget);Pe.bindFramebuffer(j.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Pe.bindFramebuffer(j.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Mt=0;Mt<Be;Mt++)mt&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,fe.get(L).__webglTexture,ne,At+Mt),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,fe.get(W).__webglTexture,Ie,un+Mt)),j.blitFramebuffer(Qe,ht,Qe+Xe,ht+Ce,Ve,Rt,Ve+Xe,Rt+Ce,j.DEPTH_BUFFER_BIT,j.NEAREST);Pe.bindFramebuffer(j.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ne!==0||L.isRenderTargetTexture||fe.has(L)){let ze=fe.get(L),St=fe.get(W);Pe.bindFramebuffer(j.READ_FRAMEBUFFER,S),Pe.bindFramebuffer(j.DRAW_FRAMEBUFFER,D);for(let Ht=0;Ht<Be;Ht++)mt?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ze.__webglTexture,ne,At+Ht):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ze.__webglTexture,ne),qt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,St.__webglTexture,Ie,un+Ht):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,St.__webglTexture,Ie),ne!==0?j.blitFramebuffer(Qe,ht,Qe+Xe,ht+Ce,Ve,Rt,Ve+Xe,Rt+Ce,j.COLOR_BUFFER_BIT,j.NEAREST):qt?j.copyTexSubImage3D(P,Ie,Ve,Rt,un+Ht,Qe,ht,Xe,Ce):j.copyTexSubImage2D(P,Ie,Ve,Rt,Qe,ht,Xe,Ce);Pe.bindFramebuffer(j.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else qt?L.isDataTexture||L.isData3DTexture?j.texSubImage3D(P,Ie,Ve,Rt,un,Xe,Ce,Be,Qt,Rn,$t.data):W.isCompressedArrayTexture?j.compressedTexSubImage3D(P,Ie,Ve,Rt,un,Xe,Ce,Be,Qt,$t.data):j.texSubImage3D(P,Ie,Ve,Rt,un,Xe,Ce,Be,Qt,Rn,$t):L.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ie,Ve,Rt,Xe,Ce,Qt,Rn,$t.data):L.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ie,Ve,Rt,$t.width,$t.height,Qt,$t.data):j.texSubImage2D(j.TEXTURE_2D,Ie,Ve,Rt,Xe,Ce,Qt,Rn,$t);Pe.pixelStorei(j.UNPACK_ROW_LENGTH,V),Pe.pixelStorei(j.UNPACK_IMAGE_HEIGHT,K),Pe.pixelStorei(j.UNPACK_SKIP_PIXELS,xe),Pe.pixelStorei(j.UNPACK_SKIP_ROWS,Le),Pe.pixelStorei(j.UNPACK_SKIP_IMAGES,et),Ie===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&j.generateMipmap(P),Pe.unbindTexture()},this.initRenderTarget=function(L){fe.get(L).__webglFramebuffer===void 0&&$e.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?$e.setTextureCube(L,0):L.isData3DTexture?$e.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?$e.setTexture2DArray(L,0):$e.setTexture2D(L,0),Pe.unbindTexture()},this.resetState=function(){A=0,k=0,O=null,Pe.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var nt=Math.PI*2,Ne=i=>document.querySelector(i),It=(i,e,t)=>Math.max(e,Math.min(t,i)),sn=(i,e,t)=>i+(e-i)*t,wt=(i,e,t)=>{let n=It((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Ct(i){let e=i>>>0;return function(){e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var em=()=>new Promise(i=>setTimeout(i,0));var bv=[{id:"kulit",name:"Kulit luar",sci:"Periderm",col:5979434,ui:"#c8946a",ro:2.5,ri:2.28,what:"Lapisan terluar yang sebagian besar sudah mati. Dindingnya mengandung suberin sehingga kedap air.",fn:"Melindungi jaringan hidup di dalamnya dari hama, penyakit, panas, api ringan, dan hilangnya air.",fact:"Corak dan ketebalan kulit kayu berbeda pada tiap spesies, jadi sering dipakai untuk mengenali jenis pohon.",short:"Pelindung terluar, kedap air."},{id:"floem",name:"Floem",sci:"Floem sekunder (kulit dalam)",col:13482106,ui:"#e6d493",ro:2.28,ri:2,what:"Jaringan hidup tepat di bawah kulit luar. Penyusun utamanya adalah buluh tapis yang dibantu sel pendamping.",fn:"Mengangkut hasil fotosintesis, terutama sukrosa, dari daun ke akar, buah, dan bagian lain yang sedang tumbuh atau menyimpan cadangan.",fact:"Gula mengalir dari sumber (daun dewasa) ke tempat pakai atau simpan (akar, tunas, buah), jadi arahnya bisa ke bawah maupun ke atas.",short:"Jalur gula dari daun."},{id:"kambium",name:"Kambium",sci:"Kambium vaskular",col:9425258,ui:"#a6e57a",ro:2,ri:1.86,what:"Lapisan sangat tipis berisi sel yang terus membelah.",fn:"Membentuk xilem baru ke arah dalam dan floem baru ke arah luar, sehingga batang bertambah besar (pertumbuhan sekunder).",fact:"Kambium membuat batang menebal, bukan memanjang. Pertambahan tinggi terjadi di ujung tunas.",short:"Penghasil jaringan baru."},{id:"xilem",name:"Xilem aktif",sci:"Kayu gubal (sapwood)",col:14992011,ui:"#f2d3a0",ro:1.86,ri:1.2,what:"Bagian kayu yang masih berfungsi. Pembuluh dan trakeidnya adalah sel mati berdinding lignin yang tersusun menjadi pipa panjang.",fn:"Mengangkut air dan mineral dari akar ke daun, sekaligus menopang batang. Jari-jari empulur menyalurkan zat ke arah samping.",fact:"Air naik tanpa pompa. Penguapan di daun (transpirasi) menarik kolom air yang saling menempel di dalam pipa xilem. Pohon bisa mengangkat air puluhan meter, dan pada pohon tertinggi lebih dari 100 meter.",short:"Jalur air dan mineral ke daun."},{id:"teras",name:"Kayu teras",sci:"Heartwood",col:11036987,ui:"#e0925a",ro:1.2,ri:.3,what:"Xilem tua di bagian dalam yang sudah berhenti mengangkut air. Biasanya lebih gelap karena terisi resin, tanin, dan senyawa lain.",fn:"Menopang pohon dan lebih tahan terhadap pembusukan serta serangan serangga.",fact:"Pada beberapa spesies, kayu teras yang awet membuat kayunya bernilai tinggi. Pohon yang terasnya berlubang pun bisa tetap hidup selama kayu gubal dan kambiumnya sehat.",short:"Penopang, tahan lapuk."},{id:"empulur",name:"Empulur",sci:"Pith",col:15918793,ui:"#f6ecd2",ro:.3,ri:0,what:"Jaringan lunak di pusat batang, sisa dari tahap awal ketika batang masih muda.",fn:"Pada batang muda menyimpan cadangan makanan. Pada pohon tua ukurannya kecil dan sering tidak lagi aktif.",fact:"Cincin tahun tersusun mengelilingi empulur. Makin ke tengah, makin tua umurnya.",short:"Pusat batang yang lunak."}],xv=[{id:"jati",name:"Pohon Jati",short:"jati",sci:"Tectona grandis",family:"Lamiaceae",x:8,z:-8,fact:"Jati meranggas (menggugurkan daun) di musim kemarau dan bertunas lagi saat musim hujan. Kayunya terkenal awet dan banyak dipakai untuk mebel dan konstruksi.",notes:{kulit:"Kulit jati cokelat keabu-abuan, tipis, dan mengelupas memanjang berserat.",xilem:"Jati termasuk kayu berpori cincin: pembuluh besar yang terbentuk di awal musim tumbuh membuat cincin tahunnya jelas.",teras:"Teras jati berwarna cokelat keemasan dan mengandung minyak serta senyawa seperti tektokuinon yang membuatnya tahan rayap dan jamur."},wood:{bark:"oak",barkTint:14207152,rings:14,contrast:.34,pores:"ring",rays:.07,cortex:[.8,.7,.46],sapE:[.93,.82,.58],sapL:[.76,.58,.34],heartE:[.72,.48,.22],heartL:[.46,.27,.11],pith:[.9,.82,.66]}},{id:"mahoni",name:"Pohon Mahoni",short:"mahoni",sci:"Swietenia mahagoni",family:"Meliaceae",x:-10,z:-4,fact:"Mahoni berasal dari Amerika tropis dan didatangkan ke Indonesia pada masa kolonial. Banyak ditanam sebagai pohon peneduh di tepi jalan. Buahnya berupa kapsul berkayu yang pecah menjadi lima bagian dan melepas biji bersayap.",notes:{kulit:"Kulit mahoni cokelat tua keabu-abuan, bersisik dengan alur dangkal.",xilem:"Pori kayu mahoni tersebar merata (berpori baur), tidak mengelompok membentuk cincin seperti pada jati.",teras:"Teras mahoni cokelat kemerahan dan makin gelap seiring umur. Seratnya halus, jadi kayunya dihargai untuk mebel."},wood:{bark:"oak",barkTint:10125424,rings:11,contrast:.2,pores:"diffuse",rays:.06,cortex:[.78,.64,.44],sapE:[.9,.72,.52],sapL:[.78,.56,.38],heartE:[.66,.34,.2],heartL:[.44,.19,.1],pith:[.88,.76,.62]}},{id:"beringin",name:"Pohon Beringin",short:"beringin",sci:"Ficus benjamina",family:"Moraceae",x:13,z:9,fact:"Beringin bisa memulai hidup menumpang di pohon lain. Akar gantungnya turun ke tanah, menebal, lalu menjadi batang tambahan. Beringin termasuk marga Ficus, yang getahnya putih seperti susu (lateks).",notes:{kulit:"Kulit beringin halus dan berwarna abu-abu terang.",floem:"Getah putih beringin (lateks) berasal dari sel khusus penghasil lateks yang tersebar di jaringan kulit dan daun.",xilem:"Kayu beringin relatif lunak dan ringan, jarang dipakai sebagai kayu konstruksi."},wood:{bark:"birch",barkTint:11840156,rings:8,contrast:.1,pores:"diffuse",rays:.05,cortex:[.86,.82,.62],sapE:[.94,.89,.74],sapL:[.88,.8,.62],heartE:[.84,.74,.54],heartL:[.74,.62,.42],pith:[.94,.9,.78]}},{id:"pinus",name:"Pinus Merkusii",short:"pinus",sci:"Pinus merkusii",family:"Pinaceae",x:-18,z:-24,fact:"Pinus merkusii adalah satu-satunya jenis pinus alami yang tumbuh sampai ke selatan garis khatulistiwa, yaitu di Sumatra. Di Jawa banyak ditanam, dan getahnya disadap untuk diolah menjadi gondorukem dan terpentin.",notes:{kulit:"Kulit pinus merkusii tebal, beralur dalam, dan cokelat kemerahan.",floem:"Getah pinus keluar dari saluran resin saat batang dilukai. Getah itu diolah menjadi gondorukem dan terpentin.",xilem:"Kayu pinus tersusun hampir seluruhnya dari trakeid, tanpa pembuluh berpori besar seperti pada jati. Saluran resin tersebar di dalamnya.",teras:"Teras pinus lebih gelap dan banyak mengandung resin."},wood:{bark:"pine",barkTint:14729384,rings:19,contrast:.46,pores:"resin",rays:.04,cortex:[.82,.66,.42],sapE:[.96,.86,.62],sapL:[.82,.6,.34],heartE:[.86,.62,.34],heartL:[.62,.36,.16],pith:[.92,.82,.62]}},{id:"trembesi",name:"Pohon Trembesi",short:"trembesi",sci:"Samanea saman",family:"Fabaceae",x:26,z:-10,fact:"Trembesi berasal dari Amerika tropis. Tajuknya lebar seperti payung dan bisa lebih lebar daripada tingginya. Daun majemuknya melipat saat malam atau mendung.",notes:{kulit:"Kulit trembesi cokelat tua keabu-abuan, kasar, dan beralur.",xilem:"Kayu trembesi bercorak serat indah dan sering dipakai untuk meja dan ukiran.",teras:"Teras trembesi berwarna cokelat tua dengan corak garis yang lebih gelap."},wood:{bark:"oak",barkTint:9074792,rings:9,contrast:.16,pores:"diffuse",rays:.05,cortex:[.8,.7,.48],sapE:[.88,.78,.58],sapL:[.76,.62,.42],heartE:[.52,.34,.2],heartL:[.3,.18,.1],pith:[.88,.8,.66]}}],yv=[{id:"q1",q:"Jaringan mana yang mengangkut air dan mineral dari akar ke daun?",o:["Xilem","Floem","Kambium","Empulur"],a:0,e:"Xilem tersusun dari sel mati berdinding lignin yang membentuk pipa. Air bergerak naik karena tarikan penguapan di daun."},{id:"q2",q:"Apa yang terutama diangkut oleh floem?",o:["Air dan mineral dari tanah","Gula hasil fotosintesis dari daun ke bagian lain","Gas oksigen ke akar","Klorofil ke daun muda"],a:1,e:"Floem membawa sukrosa dari tempat dibuatnya (daun dewasa) ke tempat dipakai atau disimpan, misalnya akar, tunas, dan buah."},{id:"q3",q:"Lapisan mana yang membelah dan membentuk xilem baru ke arah dalam serta floem baru ke arah luar?",o:["Kulit luar","Kayu teras","Kambium","Empulur"],a:2,e:"Kambium vaskular membuat batang menebal. Xilem baru menumpuk di sisi dalamnya, floem baru di sisi luarnya."},{id:"q4",q:"Di daerah yang punya musim jelas, mengapa penampang batang menunjukkan cincin tahun?",o:["Floem menumpuk satu lapis setiap tahun","Sel xilem yang dibentuk di awal dan akhir musim tumbuh berbeda ukuran dan tebal dindingnya","Kulit luar mengelupas setiap tahun","Kambium berhenti bekerja setelah setahun"],a:1,e:"Pada awal musim tumbuh sel xilem besar dan berdinding tipis, di akhir musim kecil dan berdinding tebal. Perbedaan itu tampak sebagai cincin."},{id:"q5",q:"Kulit pohon dikelupas melingkar sampai ke kayu (girdling). Apa dampaknya dalam jangka panjang?",o:["Gula tidak bisa turun ke akar sehingga pohon perlahan mati","Air langsung berhenti naik dan semua daun gugur dalam sehari","Pohon tumbuh makin tinggi","Tidak ada dampak apa pun"],a:0,e:"Floem ikut terkelupas, jadi gula dari daun tidak sampai ke akar. Xilem masih mengangkut air untuk sementara, tetapi akar yang kelaparan akhirnya membuat pohon mati."},{id:"s-jati1",sp:"jati",q:"Mengapa kayu teras jati awet dan tahan rayap?",o:["Mengandung minyak dan senyawa pelindung seperti tektokuinon","Terisi penuh oleh air","Tidak punya xilem sama sekali","Kulitnya sangat tebal"],a:0,e:"Senyawa dan minyak di kayu teras jati membuatnya tahan jamur dan rayap, itu sebabnya jati awet."},{id:"s-jati2",sp:"jati",q:'Apa arti jati "meranggas"?',o:["Menggugurkan daun saat musim kering","Tumbuh tanpa akar","Mengeluarkan getah putih","Berbuah sepanjang tahun"],a:0,e:"Jati menggugurkan daunnya di musim kemarau untuk mengurangi penguapan, lalu bertunas lagi saat hujan datang."},{id:"s-mahoni1",sp:"mahoni",q:"Dari mana asal mahoni yang banyak ditanam di Indonesia?",o:["Amerika tropis","Eropa utara","Gurun Australia","Afrika bagian selatan"],a:0,e:"Mahoni didatangkan dari Amerika tropis pada masa kolonial dan kini banyak ditanam sebagai pohon peneduh."},{id:"s-mahoni2",sp:"mahoni",q:"Bagian mahoni mana yang pecah menjadi lima bagian dan melepas biji bersayap?",o:["Buahnya (kapsul berkayu)","Kulit kayunya","Akarnya","Empulurnya"],a:0,e:"Buah mahoni berupa kapsul berkayu. Saat matang ia terbelah dan biji bersayapnya terbawa angin."},{id:"s-bering1",sp:"beringin",q:"Cairan putih seperti susu yang keluar dari luka beringin disebut apa?",o:["Lateks","Klorofil","Sukrosa","Lignin"],a:0,e:"Lateks dihasilkan sel khusus pada tumbuhan marga Ficus. Fungsinya antara lain menutup luka dan menolak pemangsa."},{id:"s-bering2",sp:"beringin",q:"Akar gantung beringin yang sampai ke tanah lama-kelamaan akan...",o:["Menebal dan menjadi batang tambahan","Mati seketika","Berubah menjadi daun","Berhenti tumbuh selamanya"],a:0,e:"Akar gantung yang menjangkau tanah ikut menyerap air dan menebal, sehingga tampak seperti batang tambahan."},{id:"s-pinus1",sp:"pinus",q:"Kayu pinus tersusun hampir seluruhnya dari sel panjang yang mengangkut air sekaligus menopang. Apa namanya?",o:["Trakeid","Stomata","Kambium","Lateks"],a:0,e:"Konifer seperti pinus tidak punya pembuluh berpori besar. Trakeid menjalankan tugas mengangkut air dan menopang batang."},{id:"s-pinus2",sp:"pinus",q:"Getah pinus yang disadap diolah menjadi apa?",o:["Gondorukem dan terpentin","Minyak kayu putih","Karet alam","Serat kapas"],a:0,e:"Resin pinus disuling menjadi gondorukem (padat) dan terpentin (cair), yang dipakai pada cat, perekat, dan industri lain."},{id:"s-tremb1",sp:"trembesi",q:"Bentuk tajuk trembesi paling mirip apa?",o:["Payung yang lebar","Kerucut sempit","Tiang lurus","Bola kecil"],a:0,e:"Cabang trembesi menyebar ke samping sehingga tajuknya lebar seperti payung dan teduh."},{id:"s-tremb2",sp:"trembesi",q:"Banyak anggota keluarga kacang-kacangan (Fabaceae), termasuk trembesi, punya bintil akar. Apa fungsinya?",o:["Bersimbiosis dengan bakteri pengikat nitrogen","Menyerap garam laut","Menghasilkan listrik","Menyimpan air untuk setahun"],a:0,e:"Bakteri di bintil akar mengubah nitrogen udara menjadi bentuk yang bisa dipakai tumbuhan, sehingga tanah ikut subur."}],xu={id:"pohon",name:"Pohon",layers:bv,specimens:xv,quiz:yv};var tm="./dist/assets/grass-CMLLWMRR.jpg";var Vs="./dist/assets/dirt_color-XQ4XPJKX.jpg";var Ys="./dist/assets/dirt_normal-OTHNHK75.jpg";var rn=-1.4,$s=240,nm=220,Kn={x:-34,z:26,r:15},yu={x:0,z:2};function Sv(i,e){return Math.sin(i*.045+1.3)*Math.cos(e*.038)*2+Math.sin(i*.1+e*.08)*.5+Math.cos(i*.02-e*.03)*1.5}function cn(i,e){let t=Sv(i,e);t*=wt(9,26,Math.hypot(i,e));let n=Math.hypot(i-Kn.x,e-Kn.z);return n<Kn.r+9&&(t=sn(t,-3.3,1-wt(Kn.r*.3,Kn.r+9,n))),t}function Tv(i,e){let t=Math.sin(i*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)}var jo=[];function im(i){jo.length=0,i.forEach((e,t)=>{let n=e.x-yu.x,s=e.z-yu.z,a=Math.hypot(n,s);jo.push({ax:yu.x,az:yu.z,bx:e.x,bz:e.z,L:a,dx:n/a,dz:s/a,seed:t*1.7+.3})})}function mr(i,e){let t=1e9;for(let n of jo){let s=i-n.ax,a=e-n.az,r=It((s*n.dx+a*n.dz)/n.L,0,1),o=Math.sin(r*n.L*.17+n.seed)*1.3*Math.sin(Math.PI*r),l=n.ax+n.dx*r*n.L-n.dz*o,c=n.az+n.dz*r*n.L+n.dx*o;t=Math.min(t,Math.hypot(i-l,e-c))}return t}var Mu=1.25,gr={uTime:{value:0}},Gd=`
float tS(float a,float b,float x){ float t=clamp((x-a)/(b-a),0.,1.); return t*t*(3.-2.*t); }
float tBase(vec2 p){ return sin(p.x*0.045+1.3)*cos(p.y*0.038)*2.0 + sin(p.x*0.1+p.y*0.08)*0.5 + cos(p.x*0.02-p.y*0.03)*1.5; }
float tHeight(vec2 p){ float h=tBase(p)*tS(9.,26.,length(p)); float dl=length(p-vec2(${Kn.x}.,${Kn.z}.)); if(dl<${Kn.r+9}.) h=mix(h,-3.3,1.-tS(${Kn.r*.3},${Kn.r+9}.,dl)); return h; }
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
`;function sm(){let i=[],e=[];for(let t=0;t<8;t++){let n=jo[t];i.push(n?new Ut(n.ax,n.az,n.dx,n.dz):new Ut),e.push(n?new C(n.L,n.seed,0):new C(1,0,0))}return{uPath:{value:i},uPathP:{value:e},uPathN:{value:jo.length}}}function Bd(i,e,t){let n=new Xn().load(i);return n.wrapS=n.wrapT=Jt,n.anisotropy=8,e&&(n.colorSpace=ut),t&&n.repeat.set(t,t),n}function am(i){let e=new Ni($s,$s,nm,nm);e.rotateX(-Math.PI/2);let t=e.attributes.position,n=t.count,s=new Float32Array(n*3),a=new Float32Array(n*2),r=new he,o=new Float32Array(n);for(let f=0;f<n;f++){let p=cn(t.getX(f),t.getZ(f));o[f]=p,t.setY(f,p)}for(let f=0;f<n;f++){let p=t.getX(f),b=t.getZ(f),g=o[f],m=.8,y=cn(p+m,b)-cn(p-m,b),_=cn(p,b+m)-cn(p,b-m),v=Math.hypot(y,_)/(2*m),T=Math.sin(p*.07+1.3)*Math.sin(b*.06)*.5+.5,E=Math.sin(p*.31)*Math.sin(b*.27+2)*.5+.5,M=wt(.28,.6,v)+wt(.78,.95,E)*.45;M=Math.max(M,1-wt(Mu*.45,Mu*1.05,mr(p,b)));let x=1-wt(rn+.1,rn+.75,g);a[f*2]=It(M,0,1)*(1-x),a[f*2+1]=x,r.setRGB(.8+T*.28,.9+T*.22-E*.05,.62+T*.14),r.multiplyScalar((.92+Tv(p,b)*.16)*1.9),s[f*3]=r.r,s[f*3+1]=r.g,s[f*3+2]=r.b}e.setAttribute("color",new ot(s,3)),e.setAttribute("aMix",new ot(a,2)),e.computeVertexNormals();let l=Bd(tm,!0,$s/4.5),c=Bd(Vs,!0,1),u=Bd(Ys,!1,$s/4.5),h=new Ke({map:l,normalMap:u,normalScale:new me(.55,.55),vertexColors:!0,roughness:.96,metalness:0});h.onBeforeCompile=f=>{f.uniforms.uDirt={value:c},f.uniforms.uTime=gr.uTime,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
        { float uw = ${rn.toFixed(2)} - vWPt.y;            // dasar danau: lebih gelap-kehijauan + kaustik
          if (uw > 0.0) {
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.45, 0.68, 0.64), clamp(uw * 0.55, 0.0, 1.0));
            diffuseColor.rgb += caust(vWPt.xz * 1.6, uTime) * 0.12 * exp(-uw * 0.35) * vec3(0.75, 1.0, 0.92);
          } }`)};let d=new ve(e,h);return d.receiveShadow=!0,i.add(d),d}function Ev(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=new Float32Array(256*256),a=[[3,2,1,0],[5,-4,.7,1.3],[-7,6,.45,2.1],[11,9,.28,.7],[-14,5,.2,3.3]];for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=0;for(let u of a)c+=Math.sin((l*u[0]+o*u[1])/256*nt+u[3])*u[2];s[o*256+l]=c}for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=s[o*256+(l+1)%256]-s[o*256+(l+256-1)%256],u=s[(o+1)%256*256+l]-s[(o+256-1)%256*256+l],h=-c*.5,d=-u*.5,f=1,p=Math.hypot(h,d,f);h/=p,d/=p,f/=p;let b=(o*256+l)*4;n.data[b]=(h*.5+.5)*255,n.data[b+1]=(d*.5+.5)*255,n.data[b+2]=(f*.5+.5)*255,n.data[b+3]=255}t.putImageData(n,0,0);let r=new pn(e);return r.wrapS=r.wrapT=Jt,r.repeat.set($s/7,$s/7),r.anisotropy=8,r}function rm(i){let e=Ev();e.repeat.set(1,1);let t=Array.from({length:8},()=>new Ut(0,0,-99,0)),n=0,s={uTime:{value:0},uWN:{value:e},uRip:{value:t}},a=new Ke({color:16777215,roughness:.05,metalness:0,transparent:!0,depthWrite:!1,envMapIntensity:1.5,side:Dt});a.onBeforeCompile=o=>{Object.assign(o.uniforms,s),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position,1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWP; uniform float uTime; uniform sampler2D uWN; uniform vec4 uRip[8];
        vec3 ripple(vec2 p){ vec3 o = vec3(0.0);
          for (int i = 0; i < 8; i++) { float age = uTime - uRip[i].z; if (age < 0.0 || age > 3.0) continue;
            vec2 dv = p - uRip[i].xy; float d = length(dv) + 1e-4, R = 0.25 + age * 1.25;
            float w = exp(-pow((d - R) * 4.0, 2.0)) * (1.0 - age / 3.0) * uRip[i].w;
            o.xy += dv / d * sin((d - R) * 22.0) * w * 1.6; o.z += w; }
          return o; }
        ${Gd}
        vec3 wNorm(vec2 p){
          vec3 a = texture2D(uWN, p/7.0 + vec2(uTime*0.020, uTime*0.012)).xyz*2.-1.;
          vec3 b = texture2D(uWN, vec2(p.y,-p.x)/3.1 + vec2(-uTime*0.028, uTime*0.019)).xyz*2.-1.;
          vec3 c = texture2D(uWN, p/1.7 + vec2(uTime*0.05, -uTime*0.04)).xyz*2.-1.;
          vec3 r = ripple(p);
          return vec3(a.xy*0.55 + b.xy*0.45 + c.xy*0.22 + r.xy, r.z);
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        float wd = ${rn.toFixed(2)} - tHeight(vWP.xz);   // kedalaman air di titik ini (m)
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
          normal = normalize((viewMatrix * vec4(nW * (gl_FrontFacing ? 1.0 : -1.0), 0.0)).xyz); }`)};let r=new ve(new Ni($s,$s),a);return r.rotation.x=-Math.PI/2,r.position.y=rn,r.userData.noAO=!0,i.add(r),{mesh:r,update(o){s.uTime.value=o,gr.uTime.value=o},ripple(o,l,c){t[n].set(o,l,s.uTime.value,c),n=(n+1)%t.length}}}var Av=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  gl_Position.z = gl_Position.w; // selalu di bidang jauh
}`,Rv=`
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
}`;function om(){return{uZenith:{value:new he},uHorizon:{value:new he},uBelow:{value:new he},uSunDir:{value:new C(0,1,0)},uSunColor:{value:new he},uCloudLit:{value:new he},uCloudDark:{value:new he},uTime:{value:0},uCloud:{value:.8},uSunDisc:{value:1}}}function lm(i,e){let t=new ve(new mn(e,48,32),new nn({uniforms:i,vertexShader:Av,fragmentShader:Rv,side:kn,depthWrite:!1,fog:!1}));return t.frustumCulled=!1,t.renderOrder=-10,t.userData.noAO=!0,t}var br=(i,e,t)=>new he().setRGB(i,e,t,wn),cm={z:br(.003,.007,.024),h:br(.012,.024,.06)},um={z:br(.05,.2,.58),h:br(.5,.66,.84)},hm={z:br(.06,.12,.3),h:br(1.05,.4,.17)},dm=new he;function fm(i,e){let t=om(),n=lm(t,900);i.add(n);let s=om();s.uCloud.value=0,s.uSunDisc.value=.35;let a=new Gn;a.add(lm(s,50));let r=new hi(e),o=null,l=(()=>{let y=Ct(5),_=700,v=new Float32Array(_*3);for(let M=0;M<_;M++){let x=y()*nt,F=y()*.95+.05,I=Math.sqrt(1-F*F);v[M*3]=Math.cos(x)*I*800,v[M*3+1]=F*800,v[M*3+2]=Math.sin(x)*I*800}let T=new lt;T.setAttribute("position",new ot(v,3));let E=new qn(T,new Cn({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));return E.frustumCulled=!1,E.userData.noAO=!0,i.add(E),E})(),c=new ve(new mn(18,24,16),new tn({color:new he(2.2,2.3,2.6),fog:!1,toneMapped:!0}));c.userData.noAO=!0,i.add(c);let u=new Mn(16777215,3);u.castShadow=!0;let h=u.shadow.camera;h.left=-42,h.right=42,h.top=42,h.bottom=-42,h.near=1,h.far=320,u.shadow.bias=-4e-4,u.shadow.normalBias=.05,i.add(u),i.add(u.target);let d=new Mn(8361432,0);i.add(d),i.fog=new jr(11189196,.0155);let f=new C,p=99,b=9,g=!1,m={sun:u,sunDir:f,day:1,elev:1,get isNight(){return g},envEvery:2.5,setShadowSize(y){u.shadow.mapSize.x!==y&&(u.shadow.mapSize.set(y,y),u.shadow.map&&(u.shadow.map.dispose(),u.shadow.map=null))},update(y,_,v,T,E){let M=(y-.25)*nt,x=Math.sin(M),F=wt(-.12,.3,x),I=Math.exp(-Math.pow(x/.2,2));m.day=F,m.elev=x,f.set(Math.cos(M)*.8,x,.45).normalize();for(let k of[t,s])k.uZenith.value.copy(cm.z).lerp(um.z,F).lerp(hm.z,I*.5),k.uHorizon.value.copy(cm.h).lerp(um.h,F).lerp(hm.h,I*.75),k.uSunDir.value.copy(f),k.uSunColor.value.setRGB(1,.62+.38*wt(0,.5,x),.38+.62*wt(0,.6,x)).multiplyScalar(wt(-.1,.08,x)),k.uCloudLit.value.setRGB(sn(.03,.95,F),sn(.04,.96,F),sn(.07,1,F)).lerp(dm.setRGB(1.3,.62,.38),I*.65),k.uCloudDark.value.copy(k.uCloudLit.value).multiplyScalar(.5).lerp(dm.setRGB(.05,.08,.16),.25),k.uTime.value=_;s.uBelow.value.setRGB(.05,.07,.03).multiplyScalar(.15+.85*F),t.uBelow.value.copy(t.uHorizon.value),i.fog.color.copy(t.uHorizon.value),E?(i.fog.color.setRGB(.012,.06,.065).multiplyScalar(.25+.75*F),i.fog.density=.11,n.visible=!1,l.visible=!1,c.visible=!1,i.background=i.fog.color):(i.fog.density=.0155,n.visible=!0,l.visible=!0,i.background=null),i.environmentIntensity=.42+.85*F;let G=T.x,X=T.y,w=T.z;n.position.set(G,X,w),l.position.set(G,0,w),l.material.opacity=Math.pow(1-F,2)*.95,c.position.set(G-f.x*700,X-f.y*700,w-f.z*700),c.visible=x<.1&&!E;let S=Math.round(G*2)/2,D=Math.round(w*2)/2;u.position.set(S+f.x*120,X+f.y*120,D+f.z*120),u.target.position.set(S,X,D),u.target.updateMatrixWorld(),u.intensity=6*wt(-.02,.28,x),u.color.setRGB(1,.72+.28*wt(0,.5,x),.5+.5*wt(0,.6,x)),u.castShadow=x>.01,d.intensity=.95*(1-F),d.position.set(G-f.x*100,X-f.y*100+20,w-f.z*100);let A=F<.25;A!==g&&(g=A),p+=v,p>m.envEvery&&Math.abs(x-b)>.002&&(p=0,b=x,m.refreshEnv(i))},refreshEnv(y){let _=r.fromScene(a,0,.1,100,{size:128});o&&o.dispose(),o=_,y.environment=_.texture}};return m}function Ei(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),a={},r={},o=i[0].morphTargetsRelative,l=new lt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0,f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in a){let h=pm(a[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in r){let h=r[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let b=0;b<r[u].length;++b)f.push(r[u][b][d]);let p=pm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function pm(i){let e,t,n,s=-1,a=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.count*t}let r=new e(a),o=new ot(r,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let b=u.getComponent(d,p);o.setComponent(d+h,p,b)}}else r.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function Od(i,e){if(e===ld)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===dr||e===Yo){let t=i.getIndex();if(t===null){let a=[],r=i.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)a.push(o);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===dr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function mm(i){let e=new Map,t=new Map,n=i.clone();return gm(i,n,function(s,a){e.set(a,s),t.set(s,a)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let a=s,r=e.get(s),o=r.skeleton.bones;a.skeleton=r.skeleton.clone(),a.bindMatrix.copy(r.bindMatrix),a.skeleton.bones=o.map(function(l){return t.get(l)}),a.bind(a.skeleton,a.bindMatrix)}),n}function gm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)gm(i.children[n],e.children[n],t)}var vu=class extends Si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zd(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new _u(t,Lt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new _u(t,Lt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new cf(t)})}load(e,t,n,s){let a=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let c=gi.extractUrlBase(e);r=gi.resolveURL(c,this.path)}else r=gi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),a.manager.itemError(e),a.manager.itemEnd(e)},l=new bs(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{a.parse(c,r,function(u){t(u),a.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let a,r={},o={},l=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===vm){try{r[Lt.KHR_BINARY_GLTF]=new uf(e)}catch(h){s&&s(h);return}a=JSON.parse(r[Lt.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new bf(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,r[h.name]=!0}if(a.extensionsUsed)for(let u=0;u<a.extensionsUsed.length;++u){let h=a.extensionsUsed[u],d=a.extensionsRequired||[];switch(h){case Lt.KHR_MATERIALS_UNLIT:r[h]=new $d;break;case Lt.KHR_DRACO_MESH_COMPRESSION:r[h]=new hf(a,this.dracoLoader);break;case Lt.KHR_TEXTURE_TRANSFORM:r[h]=new df;break;case Lt.KHR_MESH_QUANTIZATION:r[h]=new ff;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,a){n.parse(e,t,s,a)})}};function Pv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function dn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Yd=class{constructor(e){this.parser=e,this.name=Lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],c,u=new he(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],wn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mn(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ca(u),c.distance=h;break;case"spot":c=new To(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},$d=class{constructor(){this.name=Lt.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){let s=[];e.color=new he(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],wn),e.opacity=r[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",a.baseColorTexture,ut))}return Promise.all(s)}},Qd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},zd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Wt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let a=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(a,a)}return Promise.all(s)}},Jd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Wt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},jd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Wt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Wd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Wt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Kd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_SHEEN}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Wt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new he(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let a=n.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],wn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ut)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Zd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Wt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},ef=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_VOLUME}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Wt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let a=n.attenuationColor||[1,1,1];return t.attenuationColor=new he().setRGB(a[0],a[1],a[2],wn),Promise.all(s)}},tf=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_IOR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Wt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},nf=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Wt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let a=n.specularColorFactor||[1,1,1];return t.specularColor=new he().setRGB(a[0],a[1],a[2],wn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ut)),Promise.all(s)}},sf=class{constructor(e){this.parser=e,this.name=Lt.EXT_MATERIALS_BUMP}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Wt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},af=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Wt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},rf=class{constructor(e){this.parser=e,this.name=Lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let a=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}},of=class{constructor(e){this.parser=e,this.name=Lt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;let r=a.extensions[t],o=s.images[r.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,r.source,l)}},lf=class{constructor(e){this.parser=e,this.name=Lt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;let r=a.extensions[t],o=s.images[r.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,r.source,l)}},_u=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):r.ready.then(function(){let f=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},cf=class{constructor(e){this.name=Lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Ai.TRIANGLES&&c.mode!==Ai.TRIANGLE_STRIP&&c.mode!==Ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=n.extensions[this.name].attributes,o=[],l={};for(let c in r)o.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let b=new Je,g=new C,m=new _t,y=new C(1,1,1),_=new yn(p.geometry,p.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&y.fromBufferAttribute(l.SCALE,T),_.setMatrixAt(T,b.compose(g,m,y));let v=null;for(let T in l)if(T==="_COLOR_0"){let E=l[T];_.instanceColor=new Fi(E.array,E.itemSize,E.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(v===null){let M=_.geometry;v=new lt,v.name=M.name;for(let x in M.attributes)v.setAttribute(x,M.attributes[x]);for(let x in M.morphAttributes)v.morphAttributes[x]=M.morphAttributes[x];M.index!==null&&v.setIndex(M.index),v.morphTargetsRelative=M.morphTargetsRelative;for(let x of M.groups)v.addGroup(x.start,x.count,x.materialIndex);M.boundingBox!==null&&(v.boundingBox=M.boundingBox.clone()),M.boundingSphere!==null&&(v.boundingSphere=M.boundingSphere.clone()),v.drawRange.start=M.drawRange.start,v.drawRange.count=M.drawRange.count,v.userData=Object.assign({},M.userData),_.geometry=v}let E=l[T];v.setAttribute(T,new Fi(E.array,E.itemSize,E.normalized))}Vt.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},vm="glTF",Wo=12,bm={JSON:1313821514,BIN:5130562},uf=class{constructor(e){this.name=Lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Wo,a=new DataView(e,Wo),r=0;for(;r<s;){let o=a.getUint32(r,!0);r+=4;let l=a.getUint32(r,!0);if(r+=4,l===bm.JSON){let c=new Uint8Array(e,Wo+r,o);this.content=n.decode(c)}else if(l===bm.BIN){let c=Wo+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},hf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(let u in r){let h=mf[u]||u.toLowerCase();o[h]=r[u]}for(let u in e.attributes){let h=mf[u]||u.toLowerCase();if(r[u]!==void 0){let d=n.accessors[e.attributes[u]],f=xr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let b=f.attributes[p],g=l[p];g!==void 0&&(b.normalized=g)}h(f)},o,c,wn,d)})})}},df=class{constructor(){this.name=Lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},ff=class{constructor(){this.name=Lt.KHR_MESH_QUANTIZATION}},Su=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let r=0;r!==s;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,b=p-c,g=-2*f+3*d,m=f-d,y=1-g,_=m-d+h;for(let v=0;v!==o;v++){let T=r[b+v+o],E=r[b+v+l]*u,M=r[p+v+o],x=r[p+v]*u;a[v]=y*T+_*E+g*M+m*x}return a}},wv=new _t,pf=class extends Su{interpolate_(e,t,n,s){let a=super.interpolate_(e,t,n,s);return wv.fromArray(a).normalize().toArray(a),a}},Ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xm={9728:on,9729:Pn,9984:Rc,9985:ur,9986:pa,9987:ci},ym={33071:vi,33648:Ya,10497:Jt},qd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lv={CUBICSPLINE:void 0,LINEAR:sa,STEP:ia},Xd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),i.DefaultMaterial}function ba(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ji(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Iv(i,e,t){let n=!1,s=!1,a=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(i);let r=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;r.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(a){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),a&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Fv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dv(i){let e,t=i.extensions&&i.extensions[Lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vd(t.attributes):e=i.indices+":"+Vd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Vd(i.targets[n]);return e}function Vd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Nv=new Je,bf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Pv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,a=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||a&&r<98?(this.textureLoader=new Xn(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ao(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bs(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){let o={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:n,userData:{}};return ba(a,o,s),ji(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){let r=t[s].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let s=0,a=e.length;s<a;s++){let r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),a=(r,o)=>{let l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(let[c,u]of r.children.entries())a(u,o.children[c])};return a(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let a=e(t[s]);a&&n.push(a)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Lt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(a,r){n.load(gi.resolveURL(t.uri,s.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let r=qd[s.type],o=xr[s.componentType],l=s.normalized===!0,c=new o(s.count*r);return Promise.resolve(new ot(c,r,l))}let a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(r){let o=r[0],l=qd[s.type],c=xr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,b,g;if(f&&f!==h){let m=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(y);_||(b=new c(o,m*f,s.count*f/u),_=new Ns(b,f/u),t.cache.add(y,_)),g=new Us(_,l,d%f/u,p)}else o===null?b=new c(s.count*l):b=new c(o,d,s.count*l),g=new ot(b,l,p);if(s.sparse!==void 0){let m=qd.SCALAR,y=xr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,T=new y(r[1],_,s.sparse.count*m),E=new c(r[2],v,s.sparse.count*l);o!==null&&(g=new ot(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let M=0,x=T.length;M<x;M++){let F=T[M];if(g.setX(F,E[M*l]),l>=2&&g.setY(F,E[M*l+1]),l>=3&&g.setZ(F,E[M*l+2]),l>=4&&g.setW(F,E[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a],o=this.textureLoader;if(r.uri){let l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){let s=this,a=this.json,r=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(a.samplers||{})[r.sampler]||{};return u.magFilter=xm[d.magFilter]||Pn,u.minFilter=xm[d.minFilter]||ci,u.wrapS=ym[d.wrapS]||Jt,u.wrapT=ym[d.wrapT]||Jt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==on&&u.minFilter!==Pn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let r=s.images[e],o=self.URL||self.webkitURL,l=r.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&r.bufferView!==void 0)u=n.getDependency("bufferView",r.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:r.mimeType});return l=o.createObjectURL(f),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let b=f;t.isImageBitmapLoader===!0&&(b=function(g){let m=new Ln(g);m.needsUpdate=!0,f(m)}),t.load(gi.resolveURL(d,a.path),b,void 0,p)})})}let h=u.then(function(d){return c===!0&&o.revokeObjectURL(l),ji(d,r),d.userData.mimeType=r.mimeType||Cv(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[Lt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=a.associations.get(r);r=a.extensions[Lt.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,l)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Cn,On.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Gs,On.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||a||r){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),a&&(l.vertexColors=!0),r&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ke}loadMaterial(e){let t=this,n=this.json,s=this.extensions,a=n.materials[e],r,o={},l=a.extensions||{},c=[];if(l[Lt.KHR_MATERIALS_UNLIT]){let h=s[Lt.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(o,a,t))}else{let h=a.pbrMetallicRoughness||{};if(o.color=new he(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],wn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,ut)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Dt);let u=a.alphaMode||Xd.OPAQUE;if(u===Xd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Xd.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==tn&&(c.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new me(1,1),a.normalTexture.scale!==void 0)){let h=a.normalTexture.scale;o.normalScale.set(h,h)}if(a.occlusionTexture!==void 0&&r!==tn&&(c.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==tn){let h=a.emissiveFactor;o.emissive=new he().setRGB(h[0],h[1],h[2],wn)}return a.emissiveTexture!==void 0&&r!==tn&&c.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,ut)),Promise.all(c).then(function(){let h=new r(o);return a.name&&(h.name=a.name),ji(h,a),t.associations.set(h,{materials:e}),a.extensions&&ba(s,h,a),h})}createUniqueName(e){let t=Zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function a(o){return n[Lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Mm(l,o,t)})}let r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Dv(c),h=s[u];if(h)r.push(h.promise);else{let d;c.extensions&&c.extensions[Lt.KHR_DRACO_MESH_COMPRESSION]?d=a(c):d=Mm(new lt,c,t),c.mode===Ai.TRIANGLE_STRIP?d=d.then(f=>Od(f,Yo)):c.mode===Ai.TRIANGLE_FAN&&(d=d.then(f=>Od(f,dr))),s[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){let t=this,n=this.json,s=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let l=0,c=r.length;l<c;l++){let u=r[l].material===void 0?kv(this.cache):this.getDependency("material",r[l].material);o.push(u)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let b=u[f],g=r[f],m,y=c[f];if(g.mode===Ai.TRIANGLES||g.mode===Ai.TRIANGLE_STRIP||g.mode===Ai.TRIANGLE_FAN||g.mode===void 0){let _=a.isSkinnedMesh===!0,v=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");_&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=_&&v?new Zr(b,y):new ve(b,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Ai.LINES)m=new oa(b,y);else if(g.mode===Ai.LINE_STRIP)m=new ra(b,y);else if(g.mode===Ai.LINE_LOOP)m=new to(b,y);else if(g.mode===Ai.POINTS)m=new qn(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Fv(m,a),m.name=t.createUniqueName(a.name||"mesh_"+e),ji(m,a),g.extensions&&ba(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return a.extensions&&ba(s,h[0],a),h[0];let d=new Xt;a.extensions&&ba(s,d,a),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(du.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new xs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,a=t.joints.length;s<a;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let a=s.pop(),r=s,o=[],l=[];for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h){o.push(h);let d=new Je;a!==null&&d.fromArray(a.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new eo(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,r=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],b=f.target,g=b.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;b.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(b))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],b=h[3],g=h[4],m=[];for(let _=0,v=d.length;_<v;_++){let T=d[_],E=f[_],M=p[_],x=b[_],F=g[_];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let I=n._createAnimationTracks(T,E,M,x,F);if(I)for(let G=0;G<I.length;G++)m.push(I[G])}let y=new _o(a,void 0,m);return ji(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){let r=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),r})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)r.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(r),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Nv)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new C().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],r=a.name?s.createUniqueName(a.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(s.getDependency("camera",a.camera).then(function(c){return s._getNodeRef(s.cameraCache,a.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(a.isBone===!0?u=new Ka:c.length>1?u=new Xt:c.length===1?u=c[0]:u=new Vt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(a.name&&(u.userData.name=a.name,u.name=r),ji(u,a),a.extensions&&ba(n,u,a),a.matrix!==void 0){let h=new Je;h.fromArray(a.matrix),u.applyMatrix4(h)}else a.translation!==void 0&&u.position.fromArray(a.translation),a.rotation!==void 0&&u.quaternion.fromArray(a.rotation),a.scale!==void 0&&u.scale.fromArray(a.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,a=new Xt;n.name&&(a.name=s.createUniqueName(n.name)),ji(a,n),n.extensions&&ba(t,a,n);let r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(s.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?a.add(mm(d)):a.add(d)}let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof On||d instanceof Ln)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(a),a})}_createAnimationTracks(e,t,n,s,a){let r=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Qs[a.path]===Qs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Qs[a.path]){case Qs.weights:u=ps;break;case Qs.rotation:u=ms;break;case Qs.translation:case Qs.scale:u=qs;break;default:n.itemSize===1?u=ps:u=qs;break}let h=s.interpolation!==void 0?Lv[s.interpolation]:sa,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let b=new u(l[f]+"."+Qs[a.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),r.push(b)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=gf(t.constructor),s=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)s[a]=t[a]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ms?pf:Su;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Uv(i,e,t){let n=e.attributes,s=new zn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){let u=gf(xr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=e.targets;if(a!==void 0){let o=new C,l=new C;for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let b=gf(xr[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let r=new oi;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=r}function Mm(i,e,t){let n=e.attributes,s=[];function a(r,o){return t.getDependency("accessor",r).then(function(l){i.setAttribute(o,l)})}for(let r in n){let o=mf[r]||r.toLowerCase();o in i.attributes||s.push(a(n[r],o))}if(e.indices!==void 0&&!i.index){let r=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(r)}return xt.workingColorSpace!==wn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),ji(i,e),Uv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Iv(i,e.targets,t):i})}var xf=new WeakMap,Hv=new URL("../libs/draco/draco_decoder.wasm",import.meta.url).toString(),Bv=new URL("../libs/draco/draco_wasm_wrapper.js",import.meta.url).toString(),Gv=new URL("../libs/draco/draco_decoder.js",import.meta.url).toString(),uA={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",import.meta.url).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",import.meta.url).toString()},Tu=class extends Si{constructor(e){super(e),this.decoderPaths={js:Bv,wasm:Hv,dep_js:Gv},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=gi.resolveURL("draco_wasm_wrapper.js",e),t.wasm=gi.resolveURL("draco_decoder.wasm",e),t.dep_js=gi.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let a=new bs(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,r=>{this.parse(r,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,ut,n).catch(n)}decodeDracoFile(e,t,n,s,a=wn,r=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:a};return this.decodeGeometry(e,o).then(t).catch(r)}decodeGeometry(e,t){let n=JSON.stringify(t);if(xf.has(e)){let l=xf.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,a=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(a,r).then(l=>(s=l,new Promise((c,u)=>{s._callbacks[a]={resolve:c,reject:u},s.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{s&&a&&this._releaseTask(s,a)}),xf.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new lt;e.index&&t.setIndex(new ot(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:s,array:a,itemSize:r,stride:o,vertexColorSpace:l}=e.attributes[n],c;if(r===o)c=new ot(a,r);else{let u=new Ns(a,o);c=new Us(u,r,0)}s==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(a instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==ut)return;let n=new he;for(let s=0,a=e.count;s<a;s++)n.fromBufferAttribute(e,s),xt.colorSpaceToWorking(n,ut),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new bs(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,a)=>{n.load(e,s,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(s=>{let a=s[0];e||(this.decoderConfig.wasmBinary=s[1]);let r=Ov.toString(),o=["/* draco decoder */",a,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(a){let r=a.data;switch(r.type){case"decode":s._callbacks[r.id].resolve(r);break;case"error":s._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,a){return s._taskLoad>a._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function Ov(){let i,e;onmessage=function(r){let o=r.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":let l=o.buffer,c=o.taskConfig;e.then(u=>{let h=u.draco,d=new h.Decoder;try{let f=t(h,d,new Int8Array(l),c),p=f.attributes.map(b=>b.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(d)}});break}};function t(r,o,l,c){let u=c.attributeIDs,h=c.attributeTypes,d,f,p=o.GetEncodedGeometryType(l);if(p===r.TRIANGULAR_MESH)d=new r.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(p===r.POINT_CLOUD)d=new r.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let b={index:null,attributes:[]};for(let g in u){let m=self[h[g]],y,_;if(c.useUniqueIDs)_=u[g],y=o.GetAttributeByUniqueId(d,_);else{if(_=o.GetAttributeId(d,r[u[g]]),_===-1)continue;y=o.GetAttribute(d,_)}let v=s(r,o,d,g,m,y);g==="color"&&(v.vertexColorSpace=c.vertexColorSpace),b.attributes.push(v)}return p===r.TRIANGULAR_MESH&&(b.index=n(r,o,d)),r.destroy(d),b}function n(r,o,l){let u=l.num_faces()*3,h=u*4,d=r._malloc(h);o.GetTrianglesUInt32Array(l,h,d);let f=new Uint32Array(r.HEAPF32.buffer,d,u).slice();return r._free(d),{array:f,itemSize:1}}function s(r,o,l,c,u,h){let d=l.num_points(),f=h.num_components(),p=a(r,u),b=f*u.BYTES_PER_ELEMENT,g=Math.ceil(b/4)*4,m=g/u.BYTES_PER_ELEMENT,y=d*b,_=d*g,v=r._malloc(y);o.GetAttributeDataArrayForAllPoints(l,h,p,y,v);let T=new u(r.HEAPF32.buffer,v,y/u.BYTES_PER_ELEMENT),E;if(b===g)E=T.slice();else{E=new u(_/u.BYTES_PER_ELEMENT);let M=0;for(let x=0;x<d;x++){for(let F=0;F<f;F++)E[M+F]=T[x*f+F];M+=m}}return r._free(v),{name:c,count:d,itemSize:f,array:E,stride:m}}function a(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}var Ko=class{constructor(e){Ps(this,"m_w",123456789);Ps(this,"m_z",987654321);Ps(this,"mask",4294967295);this.m_w=123456789+e&this.mask,this.m_z=987654321-e&this.mask}random(e=1,t=0){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let n=(this.m_z<<16)+(this.m_w&65535)>>>0;return n/=4294967296,(e-t)*n+t}};var yr=class{constructor(e=new C,t=new jt,n=0,s=0,a=0,r=0,o=0){this.origin=e.clone(),this.orientation=t.clone(),this.length=n,this.radius=s,this.level=a,this.sectionCount=r,this.segmentCount=o}};var yf={Birch:"birch",Oak:"oak",Pine:"pine",Willow:"willow"},Zo={Single:"single",Double:"double"},Mf={Ash:"ash",Aspen:"aspen",Pine:"pine",Oak:"oak"},xa={Deciduous:"deciduous",Evergreen:"evergreen"};var ya=class{constructor(){this.seed=0,this.type=xa.Deciduous,this.bark={type:yf.Oak,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},this.branch={levels:3,angle:{1:70,2:60,3:60},children:{0:7,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:.01},gnarliness:{0:.15,1:.2,2:.3,3:.02},length:{0:20,1:20,2:10,3:1},radius:{0:1.5,1:.7,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.4,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},this.leaves={type:Mf.Oak,billboard:Zo.Double,angle:10,count:1,start:0,size:2.5,sizeVariance:.7,tint:16777215,alphaTest:.5},this.trellis={enabled:!1,position:{x:0,y:0,z:-2},width:10,height:20,spacing:2,force:{strength:.02,maxDistance:3,falloff:1},cylinderRadius:.05,visible:!0,color:9127187}}copy(e,t=this){for(let n in e)e.hasOwnProperty(n)&&t.hasOwnProperty(n)&&(typeof e[n]=="object"&&e[n]!==null?this.copy(e[n],t[n]):t[n]=e[n])}};var _m={seed:26867,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:2,angle:{"1":48,"2":75,"3":60},children:{"0":10,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.11,"1":.09,"2":.05,"3":.09},length:{"0":23.87,"1":18,"2":5.59,"3":4.6},radius:{"0":.81,"1":.56,"2":.76,"3":.7},sections:{"0":12,"1":10,"2":10,"3":10},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.53,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:30,start:0,size:2.05,sizeVariance:.717,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var Sm={seed:36330,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":48,"2":75,"3":60},children:{"0":7,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.06},gnarliness:{"0":.03,"1":.25,"2":.2,"3":.09},length:{"0":43.47,"1":27.14,"2":9.51,"3":4.6},radius:{"0":2,"1":.63,"2":.76,"3":.7},sections:{"0":12,"1":8,"2":6,"3":4},segments:{"0":12,"1":6,"2":4,"3":3},start:{"1":.23,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.09,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:16,start:0,size:2.67,sizeVariance:.72,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var Tm={seed:29919,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":39,"2":39,"3":51},children:{"0":10,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.010869565217391311},gnarliness:{"0":-.05,"1":.2,"2":.16,"3":.049999999999999996},length:{"0":45,"1":29.42,"2":15.3,"3":4.6},radius:{"0":3.03,"1":.53,"2":.79,"3":1.11},sections:{"0":12,"1":8,"2":6,"3":4},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.32,"2":.34,"3":0},taper:{"0":.7,"1":.6199999999999999,"2":.7599999999999999,"3":0},twist:{"0":.09,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:30,count:10,start:.01,size:4.62,sizeVariance:.72,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var Em={seed:36330,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":70,"2":35,"3":7},children:{"0":4,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:.010869565217391311},gnarliness:{"0":.04,"1":-.010000000000000007,"2":.12,"3":.02},length:{"0":23.99,"1":3.36,"2":7.699999999999999,"3":1},radius:{"0":.36999999999999994,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.44999999999999996,"2":.32999999999999996,"3":0},taper:{"0":.37,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:30,count:13,start:.2,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},trellis:{enabled:!1}};var Am={seed:18020,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":75,"2":32,"3":7},children:{"0":10,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:.0148},gnarliness:{"0":.05,"1":.12,"2":.12,"3":.02},length:{"0":50,"1":6.07,"2":11.19,"3":1},radius:{"0":.72,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.59,"2":.35,"3":0},taper:{"0":.37,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:30,count:11,start:.124,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},trellis:{enabled:!1}};var Rm={seed:30631,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":47,"2":63,"3":7},children:{"0":10,"1":6,"2":0},force:{direction:{x:0,y:1,z:0},strength:.021739130434782622},gnarliness:{"0":.05,"1":-.030000000000000006,"2":.12,"3":.02},length:{"0":69.60000000000001,"1":18.56,"2":11.19,"3":1},radius:{"0":1.11,"1":.5800000000000001,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.62,"2":.049999999999999975,"3":0},taper:{"0":.7000000000000001,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:36,count:20,start:.15217391304347827,size:3.4782608695652173,sizeVariance:.7,tint:16580390,alphaTest:.5},trellis:{enabled:!1}};var Pm={seed:45590,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":21.521739130434785,"2":62.608695652173914,"3":60},children:{"0":7,"1":3,"2":2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.11,"1":.09,"2":.05,"3":.09},length:{"0":.1,"1":15.302173913043479,"2":5.59,"3":4.6},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.76,"3":.7},sections:{"0":6,"1":6,"2":10,"3":10},segments:{"0":4,"1":4,"2":4,"3":3},start:{"1":.53,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:12,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},trellis:{enabled:!1}};var wm={seed:45590,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:2,angle:{"1":19.565217391304348,"2":27.39130434782609,"3":60},children:{"0":10,"1":3,"2":2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.021739130434782594,"1":.10869565217391308,"2":.05,"3":.09},length:{"0":.1,"1":19.645652173913046,"2":7.701086956521739,"3":4.6},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.76,"3":.7},sections:{"0":3,"1":4,"2":10,"3":10},segments:{"0":4,"1":4,"2":4,"3":3},start:{"1":.6413043478260869,"2":.7065217391304348,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3586956521739131,"1":-.043478260869565244,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:55,count:7,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},trellis:{enabled:!1}};var Lm={seed:31343,type:"evergreen",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":66.52173913043478,"2":52.82608695652174,"3":0},children:{"0":13,"1":4,"2":4},force:{direction:{x:0,y:1,z:0},strength:-.007},gnarliness:{"0":.05434782608695654,"1":.06521739130434778,"2":.05,"3":.09},length:{"0":10.958695652173914,"1":21.81739130434783,"2":13.130434782608695,"3":5.529347826086957},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.6858695652173914,"3":.7391304347826086},sections:{"0":4,"1":3,"2":3,"3":10},segments:{"0":3,"1":3,"2":3,"3":3},start:{"1":.14130434782608695,"2":.29347826086956524,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.03260869565217389,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:54,count:3,start:.15217391304347827,size:3.0434782608695654,sizeVariance:.45652173913043476,tint:10339327,alphaTest:.5},trellis:{enabled:!1}};var km={seed:30895,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":58,"3":32},children:{"0":4,"1":2,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{"0":.07,"1":-.08,"2":.11,"3":.09},length:{"0":28.08,"1":4.55,"2":9.78,"3":7.16},radius:{"0":1,"1":1.02,"2":.69,"3":1.19},sections:{"0":16,"1":9,"2":8,"3":1},segments:{"0":7,"1":5,"2":3,"3":3},start:{"1":.49,"2":.06,"3":.12},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:42,count:14,start:.16,size:1.38,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var Im={seed:35729,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":58,"3":32},children:{"0":6,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{"0":0,"1":-.1,"2":-.15,"3":.09},length:{"0":37.24,"1":11.08,"2":12.39,"3":7.16},radius:{"0":1.41,"1":.9,"2":.69,"3":1.19},sections:{"0":8,"1":6,"2":3,"3":1},segments:{"0":7,"1":5,"2":3,"3":3},start:{"1":.49,"2":.06,"3":.12},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:42,count:18,start:.16,size:2.5,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var Fm={seed:23399,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":43,"3":32},children:{"0":9,"1":5,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.025},gnarliness:{"0":-.04,"1":.16,"2":-.06,"3":.09},length:{"0":47.7,"1":29.39,"2":17.62,"3":7.16},radius:{"0":3,"1":.69,"2":.69,"3":1.19},sections:{"0":16,"1":9,"2":8,"3":3},segments:{"0":12,"1":5,"2":3,"3":3},start:{"1":.35,"2":.1,"3":0},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:36,count:10,start:.16,size:4.5,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var Dm={seed:11744,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":117,"2":60,"3":60},children:{"0":91,"1":7,"2":5},force:{direction:{x:0,y:1,z:0},strength:0},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":39.55,"1":12.12,"2":10,"3":1},radius:{"0":.55,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.16,"2":.3,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:10,count:21,start:0,size:.965,sizeVariance:.7,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var Cm={seed:13977,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":110,"2":16,"3":60},children:{"0":82,"1":3,"2":5},force:{direction:{x:0,y:1,z:0},strength:-.003},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":50,"1":23.87,"2":14.08,"3":1},radius:{"0":1.05,"1":.36,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.27,"2":.14,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:39,count:30,start:.09,size:1.435,sizeVariance:.201,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var Nm={seed:44166,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":129.1304347826087,"2":16,"3":60},children:{"0":100,"1":3,"2":0},force:{direction:{x:0,y:1,z:0},strength:.009000000000000001},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":65.25217391304348,"1":34.84782608695652,"2":27.246739130434783,"3":1},radius:{"0":1.271739130434783,"1":.366304347826087,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.29347826086956524,"2":.14,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:17,count:18,start:.07608695652173914,size:2.608695652173913,sizeVariance:.201,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var Um={seed:41563,type:"deciduous",bark:{type:"oak",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:8}},branch:{levels:3,angle:{"1":26,"2":79,"3":0},children:{"0":7,"1":5,"2":1},force:{direction:{x:0,y:1,z:0},strength:.026},gnarliness:{"0":0,"1":.02,"2":-.41,"3":.09},length:{"0":4.8,"1":16.9,"2":11.3,"3":11.1},radius:{"0":.27,"1":.71,"2":.84,"3":.48},sections:{"0":6,"1":12,"2":10,"3":4},segments:{"0":3,"1":3,"2":3,"3":3},start:{"1":.19,"2":.1,"3":.06},taper:{"0":.6,"1":.5,"2":.5,"3":.5},twist:{"0":-.02,"1":-.01,"2":.09,"3":0}},leaves:{type:"ash",billboard:"single",angle:30,count:13,start:0,size:1.7,sizeVariance:.5,tint:15204310,alphaTest:.5},trellis:{enabled:!0,position:{x:0,y:0,z:1.3},width:20,height:32,spacing:4,force:{strength:.014,maxDistance:18.2,falloff:1.3},cylinderRadius:.08,visible:!0,color:5519173}};var Eu={"Ash Small":_m,"Ash Medium":Sm,"Ash Large":Tm,"Aspen Small":Em,"Aspen Medium":Am,"Aspen Large":Rm,"Bush 1":Pm,"Bush 2":wm,"Bush 3":Lm,"Oak Small":km,"Oak Medium":Im,"Oak Large":Fm,"Pine Small":Dm,"Pine Medium":Cm,"Pine Large":Nm,Trellis:Um};function Hm(i){let e=Eu[i];return e?structuredClone(e):new ya}var Au="./dist/assets/birch_ao_1k-M2EJQD6U.jpg";var Ru="./dist/assets/birch_color_1k-4PBNIVXY.jpg";var Pu="./dist/assets/birch_normal_1k-FVP2SILN.jpg";var wu="./dist/assets/birch_roughness_1k-GWSNOJHT.jpg";var Lu="./dist/assets/oak_ao_1k-OF45DLVF.jpg";var ku="./dist/assets/oak_color_1k-2M2JUF3C.jpg";var Iu="./dist/assets/oak_normal_1k-OXREJG4N.jpg";var Fu="./dist/assets/oak_roughness_1k-Z2ZMHKAG.jpg";var Du="./dist/assets/pine_ao_1k-FCNELEZP.jpg";var Cu="./dist/assets/pine_color_1k-CXUMSRID.jpg";var Nu="./dist/assets/pine_normal_1k-O2AXH5ZF.jpg";var Uu="./dist/assets/pine_roughness_1k-AEQ6CLQ3.jpg";var Hu="./dist/assets/willow_ao_1k-XPYUNGG3.jpg";var Bu="./dist/assets/willow_color_1k-RCBPBDE7.jpg";var Gu="./dist/assets/willow_normal_1k-SBJUCNBQ.jpg";var Ou="./dist/assets/willow_roughness_1k-LIIAXLS2.jpg";var Bm="./dist/assets/ash_color-D7NZKJW5.png";var Gm="./dist/assets/aspen_color-FK2SNQDU.png";var Om="./dist/assets/oak_color-3V4YA6HA.png";var qm="./dist/assets/pine_color-FUSX6YQW.png";var T_=new Xn;function el(i,e,t={x:1,y:1}){let n=Vm.bark[i][e];return n.wrapS=Jt,n.wrapT=Jt,n.repeat.x=t.x,n.repeat.y=1/t.y,n}function Xm(i){return Vm.leaves[i]}var Sn=(i,e=!0)=>{let t=T_.load(i);return t.premultiplyAlpha=!0,e&&(t.colorSpace=ut),t},Vm={bark:{birch:{ao:Sn(Au,!1),color:Sn(Ru),normal:Sn(Pu,!1),roughness:Sn(wu,!1)},oak:{ao:Sn(Lu,!1),color:Sn(ku),normal:Sn(Iu,!1),roughness:Sn(Fu,!1)},pine:{ao:Sn(Du,!1),color:Sn(Cu),normal:Sn(Nu,!1),roughness:Sn(Uu,!1)},willow:{ao:Sn(Hu,!1),color:Sn(Bu),normal:Sn(Gu,!1),roughness:Sn(Ou,!1)}},leaves:{ash:Sn(Bm),aspen:Sn(Gm),oak:Sn(Om),pine:Sn(qm)}};var tl=class extends Xt{constructor(e){super(),this.name="Trellis",this.options=e,this.material=null,this.hCylinderGeo=null,this.vCylinderGeo=null}generate(){let e=this.options;this.dispose(),this.material=new Ke({color:e.color,roughness:.8}),this.hCylinderGeo=new Gt(e.cylinderRadius,e.cylinderRadius,e.width,8),this.hCylinderGeo.rotateZ(Math.PI/2),this.vCylinderGeo=new Gt(e.cylinderRadius,e.cylinderRadius,e.height,8);let t=Math.floor(e.height/e.spacing)+1;for(let s=0;s<t;s++){let a=s*e.spacing,r=new ve(this.hCylinderGeo,this.material);r.position.set(e.position.x,e.position.y+a,e.position.z),this.add(r)}let n=Math.floor(e.width/e.spacing)+1;for(let s=0;s<n;s++){let a=-e.width/2+s*e.spacing,r=new ve(this.vCylinderGeo,this.material);r.position.set(e.position.x+a,e.position.y+e.height/2,e.position.z),this.add(r)}}getNearestPoint(e){let t=this.options,n=t.position.x,s=t.position.y,a=t.position.z,r=n-t.width/2,o=n+t.width/2,l=s,c=s+t.height,u=Math.max(r,Math.min(o,e.x)),h=Math.max(l,Math.min(c,e.y)),d=Math.round((h-l)/t.spacing)*t.spacing+l,f=Math.max(l,Math.min(c,d)),p=Math.round((u-r)/t.spacing)*t.spacing+r,b=Math.max(r,Math.min(o,p)),g=new C(u,f,a),m=new C(b,h,a),y=e.distanceTo(g),_=e.distanceTo(m);return y<_?g:m}dispose(){this.children.forEach(e=>{e.geometry&&(e.geometry=null)}),this.clear(),this.hCylinderGeo&&(this.hCylinderGeo.dispose(),this.hCylinderGeo=null),this.vCylinderGeo&&(this.vCylinderGeo.dispose(),this.vCylinderGeo=null),this.material&&(this.material.dispose(),this.material=null)}};var nl=class extends Xt{constructor(t=new ya){super();Ps(this,"rng");Ps(this,"options");Ps(this,"branchQueue",[]);this.name="Tree",this.branchesMesh=new ve,this.leavesMesh=new ve,this.trellisMesh=null,this.add(this.branchesMesh),this.add(this.leavesMesh),this.options=t}update(t){let n=this.leavesMesh.material.userData.shader;n&&(n.uniforms.uTime.value=t)}loadPreset(t){let n=Hm(t);this.loadFromJson(n)}loadFromJson(t){this.options.copy(t),this.generate()}generate(){for(this.branches={verts:[],normals:[],indices:[],uvs:[],windFactor:[]},this.leaves={verts:[],normals:[],indices:[],uvs:[]},this.rng=new Ko(this.options.seed),this.branchQueue.push(new yr(new C,new jt,this.options.branch.length[0],this.options.branch.radius[0],0,this.options.branch.sections[0],this.options.branch.segments[0]));this.branchQueue.length>0;){let t=this.branchQueue.shift();this.generateBranch(t)}this.createBranchesGeometry(),this.createLeavesGeometry(),this.createTrellis()}generateBranch(t){let n=this.branches.verts.length/3,s=t.orientation.clone(),a=t.origin.clone(),r=t.length/t.sectionCount/(this.options.type==="Deciduous"?this.options.branch.levels-1:1),o=[];for(let l=0;l<=t.sectionCount;l++){let c=t.radius;l===t.sectionCount&&t.level===this.options.branch.levels?c=.001:this.options.type===xa.Deciduous?c*=1-this.options.branch.taper[t.level]*(l/t.sectionCount):this.options.type===xa.Evergreen&&(c*=1-l/t.sectionCount);let u;for(let b=0;b<t.segmentCount;b++){let g=2*Math.PI*b/t.segmentCount,m=new C(Math.cos(g),0,Math.sin(g)).multiplyScalar(c).applyEuler(s).add(a),y=new C(Math.cos(g),0,Math.sin(g)).applyEuler(s).normalize(),_=new me(b/t.segmentCount,l%2===0?0:1);this.branches.verts.push(...Object.values(m)),this.branches.normals.push(...Object.values(y)),this.branches.uvs.push(...Object.values(_)),b===0&&(u={vertex:m,normal:y,uv:_})}this.branches.verts.push(...Object.values(u.vertex)),this.branches.normals.push(...Object.values(u.normal)),this.branches.uvs.push(1,u.uv.y),o.push({origin:a.clone(),orientation:s.clone(),radius:c}),a.add(new C(0,r,0).applyEuler(s));let h=Math.max(1,1/Math.sqrt(c))*this.options.branch.gnarliness[t.level];s.x+=this.rng.random(h,-h),s.z+=this.rng.random(h,-h);let d=new _t().setFromEuler(s),f=new _t().setFromAxisAngle(new C(0,1,0),this.options.branch.twist[t.level]),p=new _t().setFromUnitVectors(new C(0,1,0),new C().copy(this.options.branch.force.direction));if(d.multiply(f),d.rotateTowards(p,this.options.branch.force.strength/c),this.options.trellis.enabled){let b=this.calculateTrellisForce(a,c);if(b){let g=new _t().setFromUnitVectors(new C(0,1,0),b.direction);d.rotateTowards(g,b.strength)}}s.setFromQuaternion(d)}if(this.generateBranchIndices(n,t),this.options.type==="deciduous"){let l=o[o.length-1];t.level<this.options.branch.levels?this.branchQueue.push(new yr(l.origin,l.orientation,this.options.branch.length[t.level+1],l.radius,t.level+1,t.sectionCount,t.segmentCount)):this.generateLeaf(l.origin,l.orientation)}t.level===this.options.branch.levels?this.generateLeaves(o):t.level<this.options.branch.levels&&this.generateChildBranches(this.options.branch.children[t.level],t.level+1,o)}generateChildBranches(t,n,s){let a=this.rng.random();for(let r=0;r<t;r++){let o=this.rng.random(1,this.options.branch.start[n]),l=Math.floor(o*(s.length-1)),c,u;c=s[l],l===s.length-1?u=c:u=s[l+1];let h=(o-l/(s.length-1))/(1/(s.length-1)),d=new C().lerpVectors(c.origin,u.origin,h),f=this.options.branch.radius[n]*((1-h)*c.radius+h*u.radius),p=new _t().setFromEuler(c.orientation),b=new _t().setFromEuler(u.orientation),g=new jt().setFromQuaternion(b.slerp(p,h)),m=2*Math.PI*(a+r/t),y=new _t().setFromAxisAngle(new C(1,0,0),this.options.branch.angle[n]/(180/Math.PI)),_=new _t().setFromAxisAngle(new C(0,1,0),m),v=new _t().setFromEuler(g),T=new jt().setFromQuaternion(v.multiply(_.multiply(y))),E=this.options.branch.length[n]*(this.options.type===xa.Evergreen?1-o:1);this.branchQueue.push(new yr(d,T,E,f,n,this.options.branch.sections[n],this.options.branch.segments[n]))}}generateLeaves(t){let n=this.rng.random();for(let s=0;s<this.options.leaves.count;s++){let a=this.rng.random(1,this.options.leaves.start),r=Math.floor(a*(t.length-1)),o,l;o=t[r],r===t.length-1?l=o:l=t[r+1];let c=(a-r/(t.length-1))/(1/(t.length-1)),u=new C().lerpVectors(o.origin,l.origin,c),h=new _t().setFromEuler(o.orientation),d=new _t().setFromEuler(l.orientation),f=new jt().setFromQuaternion(d.slerp(h,c)),p=2*Math.PI*(n+s/this.options.leaves.count),b=new _t().setFromAxisAngle(new C(1,0,0),this.options.leaves.angle/(180/Math.PI)),g=new _t().setFromAxisAngle(new C(0,1,0),p),m=new _t().setFromEuler(f),y=new jt().setFromQuaternion(m.multiply(g.multiply(b)));this.generateLeaf(u,y)}}generateLeaf(t,n){let s=this.leaves.verts.length/3,a=this.options.leaves.size*(1+this.rng.random(this.options.leaves.sizeVariance,-this.options.leaves.sizeVariance)),r=a,o=a,l=c=>{let u=[new C(-r/2,o,0),new C(-r/2,0,0),new C(r/2,0,0),new C(r/2,o,0)].map(d=>d.applyEuler(new jt(0,c,0)).applyEuler(n).add(t));this.leaves.verts.push(u[0].x,u[0].y,u[0].z,u[1].x,u[1].y,u[1].z,u[2].x,u[2].y,u[2].z,u[3].x,u[3].y,u[3].z);let h=new C(0,0,1).applyEuler(n);this.leaves.normals.push(h.x,h.y,h.z,h.x,h.y,h.z,h.x,h.y,h.z,h.x,h.y,h.z),this.leaves.uvs.push(0,1,0,0,1,0,1,1),this.leaves.indices.push(s,s+1,s+2,s,s+2,s+3),s+=4};l(0),this.options.leaves.billboard===Zo.Double&&l(Math.PI/2)}generateBranchIndices(t,n){let s,a,r,o,l=n.segmentCount+1;for(let c=0;c<n.sectionCount;c++)for(let u=0;u<n.segmentCount;u++)s=t+c*l+u,a=t+c*l+(u+1),r=s+l,o=a+l,this.branches.indices.push(s,r,a,a,r,o)}createBranchesGeometry(){let t=new lt;t.setAttribute("position",new ot(new Float32Array(this.branches.verts),3)),t.setAttribute("normal",new ot(new Float32Array(this.branches.normals),3)),t.setAttribute("uv",new ot(new Float32Array(this.branches.uvs),2)),t.setIndex(new ot(new Uint16Array(this.branches.indices),1)),t.computeBoundingSphere();let n=new nr({name:"branches",flatShading:this.options.bark.flatShading,color:new he(this.options.bark.tint)});this.options.bark.textured&&(n.aoMap=el(this.options.bark.type,"ao",this.options.bark.textureScale),n.map=el(this.options.bark.type,"color",this.options.bark.textureScale),n.normalMap=el(this.options.bark.type,"normal",this.options.bark.textureScale),n.roughnessMap=el(this.options.bark.type,"roughness",this.options.bark.textureScale)),this.branchesMesh.geometry.dispose(),this.branchesMesh.geometry=t,this.branchesMesh.material.dispose(),this.branchesMesh.material=n,this.branchesMesh.castShadow=!0,this.branchesMesh.receiveShadow=!0}createLeavesGeometry(){let t=new lt;t.setAttribute("position",new ot(new Float32Array(this.leaves.verts),3)),t.setAttribute("uv",new ot(new Float32Array(this.leaves.uvs),2)),t.setIndex(new ot(new Uint16Array(this.leaves.indices),1)),t.computeVertexNormals(),t.computeBoundingSphere();let n=new nr({name:"leaves",map:Xm(this.options.leaves.type),color:new he(this.options.leaves.tint),side:Dt,alphaTest:this.options.leaves.alphaTest,dithering:!0});n.onBeforeCompile=s=>{s.uniforms.uTime={value:0},s.uniforms.uWindStrength={value:new C(.5,0,.5)},s.uniforms.uWindFrequency={value:.5},s.uniforms.uWindScale={value:70},s.vertexShader=`
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
        `),n.userData.shader=s},this.leavesMesh.geometry.dispose(),this.leavesMesh.geometry=t,this.leavesMesh.material.dispose(),this.leavesMesh.material=n,this.leavesMesh.castShadow=!0,this.leavesMesh.receiveShadow=!0}createTrellis(){this.trellisMesh&&(this.remove(this.trellisMesh),this.trellisMesh.dispose(),this.trellisMesh=null),this.options.trellis.enabled&&this.options.trellis.visible&&(this.trellisMesh=new tl(this.options.trellis),this.trellisMesh.generate(),this.add(this.trellisMesh))}getNearestTrellisPoint(t){let n=this.options.trellis,s=n.position.x,a=n.position.y,r=n.position.z,o=s-n.width/2,l=s+n.width/2,c=a,u=a+n.height,h=Math.max(o,Math.min(l,t.x)),d=Math.max(c,Math.min(u,t.y)),f=Math.round((d-c)/n.spacing)*n.spacing+c,p=Math.max(c,Math.min(u,f)),b=Math.round((h-o)/n.spacing)*n.spacing+o,g=Math.max(o,Math.min(l,b)),m=new C(h,p,r),y=new C(g,d,r),_=t.distanceTo(m),v=t.distanceTo(y);return _<v?m:y}calculateTrellisForce(t,n){let s=this.options.trellis,a=this.getNearestTrellisPoint(t),r=t.distanceTo(a);if(r>s.force.maxDistance||r<.001)return null;let o=new C().subVectors(a,t).normalize(),l=1-Math.pow(r/s.force.maxDistance,s.force.falloff),c=s.force.strength*l/n;return{direction:o,strength:c}}get vertexCount(){return(this.branches.verts.length+this.leaves.verts.length)/3}get triangleCount(){return(this.branches.indices.length+this.leaves.indices.length)/3}};var E_={jati:{preset:"Ash Large",seed:4211,height:18,leafScale:2.3,leafCount:.7,tint:7314484,tweak(i){i.branch.gnarliness[0]=.02,i.branch.length[0]*=1.15,i.branch.angle[1]=55}},mahoni:{preset:"Oak Large",seed:9083,height:19,leaf:"ash",leafScale:1,leafCount:1.9,tint:2908976},beringin:{preset:"Oak Large",seed:1377,height:14,bark:"willow",leaf:"aspen",leafScale:.85,leafCount:1.9,tint:4885562,roots:!0,tweak(i){i.branch.length[0]*=.7,i.branch.radius[0]*=1.5,i.branch.length[1]*=1.25,i.branch.angle[1]=80}},pinus:{preset:"Pine Large",seed:6654,height:22,tint:4090426},trembesi:{preset:"Oak Large",seed:2025,height:15,leaf:"ash",leafScale:.9,leafCount:1.9,tint:6003260,tweak(i){i.branch.length[0]*=.65,i.branch.radius[0]*=1.35,i.branch.length[1]*=1.7,i.branch.angle[1]=88,i.branch.gnarliness[1]=.12}}},Vu={uTime:{value:0},uWindAmp:{value:1}},vf={};function _f(i){return JSON.parse(JSON.stringify(i))}function qu(i,e){let t=new nl;if(t.options.copy(_f(Eu[i])),t.options.seed=e.seed,e.bark&&(t.options.bark.type=e.bark),e.leaf&&(t.options.leaves.type=e.leaf),e.leafCount&&(t.options.leaves.count=Math.round(t.options.leaves.count*e.leafCount)),e.leafScale&&(t.options.leaves.size*=e.leafScale),e.tint!=null&&(t.options.leaves.tint=e.tint),e.tweak&&e.tweak(t.options),e.lite){let T=t.options;T.leaves.count=Math.max(2,Math.round(T.leaves.count*(e.liteLeaf||.5))),T.leaves.size*=1/Math.sqrt(e.liteLeaf||.5);let E=e.liteBranch||.5;for(let M of[0,1,2,3])T.branch.sections[M]&&(T.branch.sections[M]=Math.max(2,Math.ceil(T.branch.sections[M]*E))),T.branch.segments[M]&&(T.branch.segments[M]=Math.max(3,Math.ceil(T.branch.segments[M]*(E>.7?.8:.55))))}let n=t.options.bark.type;vf[n]?t.options.bark.textureScale=_f(vf[n]):vf[n]=_f(t.options.bark.textureScale),t.generate();let s=t.branchesMesh,a=t.leavesMesh;s.geometry.computeBoundingBox(),a.geometry.computeBoundingBox();let r=s.geometry.boundingBox.clone().union(a.geometry.boundingBox),o=e.height/Math.max(.01,r.max.y),l=a.geometry,c=l.attributes.position,u=new Float32Array(c.count*3),h=l.boundingBox.min.y*.4+l.boundingBox.max.y*.6,d=new C;for(let T=0;T<c.count;T++)d.set(c.getX(T),c.getY(T)-h,c.getZ(T)).normalize(),d.y=d.y*.7+.45,d.normalize(),u[T*3]=d.x,u[T*3+1]=d.y,u[T*3+2]=d.z;l.setAttribute("normal",new ot(u,3));let f=s.material,p=new Ke({map:f.map,normalMap:f.normalMap,roughnessMap:f.roughnessMap,aoMap:f.aoMap,color:f.color.clone(),roughness:1,metalness:0}),b=A_(a.material.map,new he(t.options.leaves.tint)),g=new ir({depthPacking:cd,map:a.material.map,alphaTest:.5,side:Dt}),m=(t.options.branch.radius[0]||1)*o,y=(s.geometry.index.count+a.geometry.index.count)/3,_=s.geometry.index.count/3,v=a.geometry.index.count/3;return f.dispose(),a.material.dispose(),{barkGeo:s.geometry,leafGeo:a.geometry,barkMat:p,leafMat:b,depthMat:g,scale:o,height:e.height,trunkR:m,tris:y,btris:_,ltris:v,tree:t}}function A_(i,e){let t=new Ke({map:i,color:e,alphaTest:.5,alphaToCoverage:!0,side:Dt,roughness:.74,metalness:0});return t.onBeforeCompile=n=>{n.uniforms.uTime=Vu.uTime,n.uniforms.uWindAmp=Vu.uWindAmp,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uWindAmp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          vec3 ip = vec3(0.0);
          #ifdef USE_INSTANCING
            ip = instanceMatrix[3].xyz;
          #endif
          float ph = ip.x * 0.21 + ip.z * 0.17 + position.x * 0.05 + position.y * 0.04;
          float w = 0.5 * sin(uTime * 1.3 + ph) + 0.3 * sin(uTime * 2.7 + ph * 1.7) + 0.2 * sin(uTime * 5.1 + ph * 2.3);
          transformed.xz += vec2(w * 0.9, w * 0.6) * uv.y * uWindAmp;
        }`)},t}function R_(){let i=Ct(3),e=[],t=[],n=[],s=[],a=new he().setRGB(.01,.03,.005),r=new he().setRGB(.13,.23,.05),o=9;for(let c=0;c<o;c++){let u=c/o*nt+i()*.7,h=.02+i()*.09,d=Math.cos(u)*h,f=Math.sin(u)*h,p=.13+i()*.26,b=.011+i()*.01,g=(i()-.5)*.22,m=i()*nt,y=Math.cos(m),_=Math.sin(m),v=-_,T=y,E=e.length/3,M=(x,F,I,G)=>{e.push(x,F,I),t.push(G.r,G.g,G.b),n.push(0,1,0)};M(d-v*b,0,f-T*b,a),M(d+v*b,0,f+T*b,a),M(d+y*g,p,f+_*g,r),s.push(E,E+1,E+2)}let l=new Eo;return l.setAttribute("position",new tt(e,3)),l.setAttribute("color",new tt(t,3)),l.setAttribute("normal",new tt(n,3)),l.setIndex(s),l}function P_(i,e){let t=R_(),n=Ct(77),s=22,a=new Float32Array(e*4);for(let c=0;c<e;c++)a[c*4]=(n()*2-1)*s,a[c*4+1]=(n()*2-1)*s,a[c*4+2]=n(),a[c*4+3]=.8+n()*.7;t.setAttribute("aOff",new Fi(a,4)),t.instanceCount=e;let r={uPlayer:{value:new C},uR:{value:s},uTime:Vu.uTime,uWater:{value:rn},uPathW:{value:Mu},...sm()},o=new Ke({vertexColors:!0,roughness:.92,metalness:0,side:Dt});o.onBeforeCompile=c=>{Object.assign(c.uniforms,r),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aOff; uniform vec3 uPlayer; uniform float uR, uTime, uWater, uPathW;
        ${Gd}`).replace("#include <color_vertex>",`#include <color_vertex>
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
 normal = normalize(vNormal);`)};let l=new ve(t,o);return l.frustumCulled=!1,l.receiveShadow=!0,l.userData.noAO=!0,i.add(l),{mesh:l,u:r,maxCount:e,geo:t}}function Sf(i,e,t,n,s,a){let r=new Map;for(let f of t){let p=Math.floor(f.x/s)+","+Math.floor(f.z/s);(r.get(p)||r.set(p,[]).get(p)).push(f)}let o=new Je,l=new _t,c=new C,u=new C,h=new jt,d=new he;r.forEach((f,p)=>{let[b,g]=p.split(",").map(Number),m=new yn(e.barkGeo,e.barkMat,f.length),y=new yn(e.leafGeo,e.leafMat,f.length);y.customDepthMaterial=e.depthMat,y.userData.noAO=!0,f.forEach((_,v)=>{h.set(0,_.r*nt,0),l.setFromEuler(h),c.set(_.x,_.y-.1,_.z);let T=e.scale*_.s;u.set(T,T,T*(.92+_.c*.16)),o.compose(c,l,u),m.setMatrixAt(v,o),y.setMatrixAt(v,o),d.setRGB(.82+_.c*.3,.86+_.c*.26,.78+_.c*.2),y.setColorAt(v,d)});for(let _ of[m,y])_.castShadow=a===0,_.receiveShadow=!0,_.instanceMatrix.needsUpdate=!0,_.computeBoundingSphere(),_.visible=!1,i.add(_);m.userData.bark=!0,y.instanceColor.needsUpdate=!0,n.push({cx:(b+.5)*s,cz:(g+.5)*s,half:s*.72,meshes:[m,y],n:f.length,lod:a||0,bush:!!e.bush})})}var Xu=null;async function Ym(i){Xu||(Xu=new Tu,Xu.setDecoderPath("assets/draco/"));let e=new vu;return e.setDRACOLoader(Xu),e.loadAsync(i)}function $m(i,e){let t=new zn().setFromObject(i),n=t.getSize(new C),s=e/Math.max(n.x,n.y,n.z),a=[];i.updateMatrixWorld(!0),i.traverse(o=>{if(!o.isMesh)return;let l=o.geometry.clone();l.applyMatrix4(o.matrixWorld),l.scale(s,s,s),a.push({geo:l,mat:o.material})});let r=new zn;return a.forEach(o=>{o.geo.computeBoundingBox(),r.union(o.geo.boundingBox)}),a.forEach(o=>o.geo.translate(-(r.min.x+r.max.x)/2,-r.min.y,-(r.min.z+r.max.z)/2)),a}async function Qm({scene:i,heroes:e,clear:t=[],addObs:n,progress:s,quality:a}){let o=[],l={v:a==="hemat"},c=async(w,S)=>{s&&s(S,w),await em()};await c("Menumbuhkan pohon\u2026",.05);let u=[{k:"oak",preset:"Oak Medium",seed:11,height:11,w:.26},{k:"oak",preset:"Oak Medium",seed:23,height:13,w:.2,tint:5081652},{k:"ash",preset:"Ash Medium",seed:5,height:12,w:.16},{k:"pine",preset:"Pine Medium",seed:3,height:15,w:.2},{k:"pine",preset:"Pine Medium",seed:9,height:12,w:.1},{k:"aspen",preset:"Aspen Medium",seed:8,height:12,w:.08}],h=[],d=[];for(let w=0;w<u.length;w++)h.push(qu(u[w].preset,{...u[w],lite:!0,liteLeaf:.65,liteBranch:.8})),d.push(qu(u[w].preset,{...u[w],lite:!0,liteLeaf:.32})),await c("Menumbuhkan pohon\u2026",.05+.25*(w+1)/u.length);let f=Ct(7),p=[],b=8,g=0,m=230;for(;p.length<m&&g<9e3;){g++;let w=(f()*2-1)*108,S=(f()*2-1)*108;if(Math.hypot(w,S)<10)continue;let D=cn(w,S);D<rn+.9||mr(w,S)<2.6||e.some(A=>Math.hypot(w-A.x,S-A.z)<b)||t.some(A=>Math.hypot(w-A.x,S-A.z)<A.r+2)||p.some(A=>Math.hypot(w-A.x,S-A.z)<4.2)||p.push({x:w,y:D,z:S,s:.8+f()*.5,r:f(),c:f(),n:Math.sin(w*.03)*Math.cos(S*.025)})}let y=h.map(()=>[]),_=u.reduce((w,S)=>w+S.w,0);for(let w of p){let S=It((w.n*.5+.5)*.7+w.c*.3,0,.999)*_,D=0,A=0;for(let k=0;k<u.length;k++)if(D+=u[k].w,S<D){A=k;break}y[A].push(w),n(w.x,w.z,Math.max(.28,Math.min(.9,h[A].trunkR*w.s*.6)))}h.forEach((w,S)=>{y[S].length&&(Sf(i,w,y[S],o,40,0),Sf(i,d[S],y[S],o,40,1))}),await c("Menanam semak\u2026",.4);let T=[["Bush 1",31,1.5],["Bush 2",32,1.2],["Bush 3",33,1.4]].map(w=>{let S=qu(w[0],{seed:w[1],height:w[2],lite:!0,liteLeaf:.6});return S.bush=!0,S}),E=[[],[],[]],M=Ct(99);for(let w=0,S=0;w<150&&S<3e3;S++){let D=(M()*2-1)*108,A=(M()*2-1)*108,k=cn(D,A);k<rn+.7||Math.hypot(D,A)<6||mr(D,A)<1.8||(E[w%3].push({x:D,y:k,z:A,s:.7+M()*.7,r:M(),c:M()}),w++)}T.forEach((w,S)=>Sf(i,w,E[S],o,40,0)),await c("Menanam rumput\u2026",.5);let x=[],F=[];for(let w=0;w<e.length;w++){let S=e[w],D=E_[S.id],A=qu(D.preset,D),k=new Xt,O=cn(S.x,S.z);k.position.set(S.x,O-.1,S.z),k.rotation.y=w*2.1;let H=new ve(A.barkGeo,A.barkMat),N=new ve(A.leafGeo,A.leafMat);N.customDepthMaterial=A.depthMat,N.userData.noAO=!0;for(let J of[H,N])J.castShadow=!0,J.receiveShadow=!0,J.scale.setScalar(A.scale),k.add(J);if(D.roots){let J=Ct(88+w),Z=[];for(let oe=0;oe<34;oe++){let ge=J()*nt,Se=1.2+Math.pow(J(),.7)*5.2,Ue=.012+J()*.02,Ge=4.2+J()*3.6,be=Ge-(J()<.35?0:J()*(Ge-.6)),ie=new Gt(Ue*.5,Ue,be,4,3,!0);ie.translate(0,-be/2,0);let pe=ie.attributes.position;for(let $=0;$<pe.count;$++){let ye=pe.getY($);pe.setX($,pe.getX($)+Math.sin(ye*1.7+oe)*.05)}ie.rotateZ((J()-.5)*.1),ie.translate(Math.cos(ge)*Se,Ge,Math.sin(ge)*Se),Z.push(ie)}let ae=new ve(Ei(Z),A.barkMat);ae.castShadow=!0,k.add(ae)}i.add(k),S.top=A.height;let Y=new ve(new hs(.5,0),new Ke({color:16765786,emissive:16754688,emissiveIntensity:2.2,roughness:.3}));Y.position.set(S.x,O+A.height+2.2,S.z),Y.userData.noAO=!0,i.add(Y);let q=new ds(1.9,2.15,64,1);q.rotateX(-Math.PI/2);{let J=q.attributes.position;for(let Z=0;Z<J.count;Z++)J.setY(Z,cn(S.x+J.getX(Z),S.z+J.getZ(Z))-O+.14)}let z=new ve(q,new tn({color:new he(2.2,1.7,.5),transparent:!0,opacity:.8,side:Dt,depthWrite:!1}));z.position.set(S.x,O,S.z),z.userData.noAO=!0,i.add(z);let U=new ve(new Gt(2.6,2.6,A.height+2,8),new tn({visible:!1}));U.position.set(S.x,O+(A.height+2)/2,S.z),U.userData.hero=w,i.add(U),F.push(U),x.push({g:k,mk:Y,ring:z,y:O}),n(S.x,S.z,Math.max(.8,A.trunkR*.9)),await c("Menumbuhkan pohon bertanda\u2026",.5+.2*(w+1)/e.length)}let I=P_(i,a==="hemat"?8e3:34e3);I.maxCount=34e3,await c("Menata batu dan bunga\u2026",.78);let G=[];try{let w=Ct(404),S=new Je,D=new _t,A=new jt,k=new C,O=new C;for(let H of["rock1","rock2","rock3"]){let N=await Ym("assets/models/"+H+".glb"),Y=$m(N.scene,1),q=16;for(let z of Y){let U=new yn(z.geo,z.mat,q);for(let J=0;J<q;J++){let Z,ae,oe,ge=0;do{let Ue=w()*nt,Ge=w()<.4?Kn.r+2+w()*8:12+w()*95;Z=(w()<.4?Kn.x:0)+Math.cos(Ue)*Ge,ae=(w()<.4?Kn.z:0)+Math.sin(Ue)*Ge,oe=cn(Z,ae),ge++}while((oe<rn-.3||Math.hypot(Z,ae)<8||mr(Z,ae)<2||Math.abs(Z)>110||Math.abs(ae)>110)&&ge<40);let Se=.5+w()*w()*2.4;A.set((w()-.5)*.4,w()*nt,(w()-.5)*.4),D.setFromEuler(A),k.set(Z,oe+Se*.06,ae),O.set(Se*(.9+w()*.4),Se*(.7+w()*.3),Se),S.compose(k,D,O),U.setMatrixAt(J,S),Se>1.2&&z===Y[0]&&n(Z,ae,Se*.42)}U.castShadow=!0,U.receiveShadow=!0,U.instanceMatrix.needsUpdate=!0,i.add(U),G.push(U)}}}catch(w){console.warn("rock load failed",w)}try{let w=Ct(808),S=new Je,D=new _t,A=new jt,k=new C,O=new C,H=[];for(let N=0,Y=0;N<80&&Y<2e3;Y++){let q=w()*nt,z=5+w()*55,U=Math.cos(q)*z,J=Math.sin(q)*z;if(!(cn(U,J)<rn+.6||mr(U,J)<1.4)){for(let ae=0;ae<3;ae++){let oe=U+(w()-.5)*3,ge=J+(w()-.5)*3,Se=cn(oe,ge);Se>rn+.5&&H.push({x:oe,y:Se,z:ge,s:.7+w()*.6,r:w()*nt})}N++}}for(let N of["flower_blue","flower_white","flower_yellow"]){let Y=await Ym("assets/models/"+N+".glb"),q=$m(Y.scene,.4),z=H.filter((U,J)=>J%3===["flower_blue","flower_white","flower_yellow"].indexOf(N));for(let U of q){let J=new yn(U.geo,U.mat,z.length);z.forEach((Z,ae)=>{A.set(0,Z.r,0),D.setFromEuler(A),k.set(Z.x,Z.y-.02,Z.z),O.setScalar(Z.s),S.compose(k,D,O),J.setMatrixAt(ae,S)}),J.instanceMatrix.needsUpdate=!0,J.frustumCulled=!1,J.userData.noAO=!0,i.add(J)}}}catch(w){console.warn("flower load failed",w)}await c("Selesai",1);let X={treeVariants:h.map((w,S)=>({b:w.btris,l:w.ltris,lb:d[S].btris,ll:d[S].ltris})),bush:T.map(w=>({b:w.btris,l:w.ltris})),chunkCount:o.length};return{heroObjs:x,heroHits:F,grass:I,chunks:o,info:X,setQuality(w){l.v=w==="hemat";for(let S of o)S.lod===0&&!S.bush&&(S.meshes[0].castShadow=!l.v);I.geo.instanceCount=w==="hemat"?8e3:34e3},update(w,S,D){Vu.uTime.value=S,I.u.uPlayer.value.set(w.x,w.y,w.z);let A=l.v?60:130,k=l.v?17:42,O=l.v?.45:1;for(let H of o){let N=Math.hypot(w.x-H.cx,w.z-H.cz)-H.half,Y;H.bush?Y=N<A*.38:H.lod===0?Y=N<k:Y=N>=k&&N<A;for(let q of H.meshes)q.visible=Y,Y&&(q.count=Math.max(1,Math.ceil(H.n*(H.bush?1:O))))}}}}var Wi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ni=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},w_=new xs(-1,1,1,-1,0,1),Tf=class extends lt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}},L_=new Tf,Ki=class{constructor(e){this._mesh=new ve(L_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yu=class extends ni{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ti.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ki(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var il=class extends ni{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}},$u=class extends ni{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Qu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new me);this._width=n.width,this._height=n.height,t=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yu(Wi),this.copyPass.material.blending=Nn,this.timer=new Ro}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,a=this.passes.length;s<a;s++){let r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}il!==void 0&&(r instanceof il?n=!0:r instanceof $u&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zu=class extends ni{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new he}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}};var sl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new me},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Je},cameraProjectionMatrixInverse:{value:new Je},cameraWorldMatrix:{value:new Je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

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
		}`},al={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ju={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function zm(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=k_(e),n=t.length,s=new Uint8Array(n*4);for(let r=0;r<n;++r){let o=t[r],l=2*Math.PI*o/n,c=new C(Math.cos(l),Math.sin(l),0).normalize();s[r*4]=(c.x*.5+.5)*255,s[r*4+1]=(c.y*.5+.5)*255,s[r*4+2]=127,s[r*4+3]=255}let a=new Vi(s,e,e);return a.wrapS=Jt,a.wrapT=Jt,a.needsUpdate=!0,a}function k_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),a=e-1;for(let r=1;r<=t;){if(s===-1&&a===e?(a=e-2,s=0):(a===e&&(a=0),s<0&&(s=e-1)),n[s*e+a]!==0){a-=2,s++;continue}else n[s*e+a]=r++;a++,s--}return n}var rl={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ef(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new me},cameraProjectionMatrixInverse:{value:new Je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ef(i,e,t){let n=I_(i,e,t),s="vec3[SAMPLES](";for(let a=0;a<i;a++){let r=n[a];s+=`vec3(${r.x}, ${r.y}, ${r.z})${a<i-1?",":")"}`}return s}function I_(i,e,t){let n=[];for(let s=0;s<i;s++){let a=2*Math.PI*e*s/i,r=Math.pow(s/(i-1),t);n.push(new C(Math.cos(a),Math.sin(a),r))}return n}var ju=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,a,r=.5*(Math.sqrt(3)-1),o=(e+t)*r,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,p=e-d,b=t-f,g,m;p>b?(g=1,m=0):(g=0,m=1);let y=p-g+u,_=b-m+u,v=p-1+2*u,T=b-1+2*u,E=l&255,M=c&255,x=this.perm[E+this.perm[M]]%12,F=this.perm[E+g+this.perm[M+m]]%12,I=this.perm[E+1+this.perm[M+1]]%12,G=.5-p*p-b*b;G<0?n=0:(G*=G,n=G*G*this._dot(this.grad3[x],p,b));let X=.5-y*y-_*_;X<0?s=0:(X*=X,s=X*X*this._dot(this.grad3[F],y,_));let w=.5-v*v-T*T;return w<0?a=0:(w*=w,a=w*w*this._dot(this.grad3[I],v,T)),70*(n+s+a)}noise3d(e,t,n){let s,a,r,o,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,p=(u+h+d)*f,b=u-p,g=h-p,m=d-p,y=e-b,_=t-g,v=n-m,T,E,M,x,F,I;y>=_?_>=v?(T=1,E=0,M=0,x=1,F=1,I=0):y>=v?(T=1,E=0,M=0,x=1,F=0,I=1):(T=0,E=0,M=1,x=1,F=0,I=1):_<v?(T=0,E=0,M=1,x=0,F=1,I=1):y<v?(T=0,E=1,M=0,x=0,F=1,I=1):(T=0,E=1,M=0,x=1,F=1,I=0);let G=y-T+f,X=_-E+f,w=v-M+f,S=y-x+2*f,D=_-F+2*f,A=v-I+2*f,k=y-1+3*f,O=_-1+3*f,H=v-1+3*f,N=u&255,Y=h&255,q=d&255,z=this.perm[N+this.perm[Y+this.perm[q]]]%12,U=this.perm[N+T+this.perm[Y+E+this.perm[q+M]]]%12,J=this.perm[N+x+this.perm[Y+F+this.perm[q+I]]]%12,Z=this.perm[N+1+this.perm[Y+1+this.perm[q+1]]]%12,ae=.6-y*y-_*_-v*v;ae<0?s=0:(ae*=ae,s=ae*ae*this._dot3(this.grad3[z],y,_,v));let oe=.6-G*G-X*X-w*w;oe<0?a=0:(oe*=oe,a=oe*oe*this._dot3(this.grad3[U],G,X,w));let ge=.6-S*S-D*D-A*A;ge<0?r=0:(ge*=ge,r=ge*ge*this._dot3(this.grad3[J],S,D,A));let Se=.6-k*k-O*O-H*H;return Se<0?o=0:(Se*=Se,o=Se*Se*this._dot3(this.grad3[Z],k,O,H)),32*(s+a+r+o)}noise4d(e,t,n,s){let a=this.grad4,r=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,p,b=(e+t+n+s)*l,g=Math.floor(e+b),m=Math.floor(t+b),y=Math.floor(n+b),_=Math.floor(s+b),v=(g+m+y+_)*c,T=g-v,E=m-v,M=y-v,x=_-v,F=e-T,I=t-E,G=n-M,X=s-x,w=F>I?32:0,S=F>G?16:0,D=I>G?8:0,A=F>X?4:0,k=I>X?2:0,O=G>X?1:0,H=w+S+D+A+k+O,N=r[H][0]>=3?1:0,Y=r[H][1]>=3?1:0,q=r[H][2]>=3?1:0,z=r[H][3]>=3?1:0,U=r[H][0]>=2?1:0,J=r[H][1]>=2?1:0,Z=r[H][2]>=2?1:0,ae=r[H][3]>=2?1:0,oe=r[H][0]>=1?1:0,ge=r[H][1]>=1?1:0,Se=r[H][2]>=1?1:0,Ue=r[H][3]>=1?1:0,Ge=F-N+c,be=I-Y+c,ie=G-q+c,pe=X-z+c,$=F-U+2*c,ye=I-J+2*c,Ee=G-Z+2*c,it=X-ae+2*c,qe=F-oe+3*c,Ye=I-ge+3*c,gt=G-Se+3*c,Et=X-Ue+3*c,j=F-1+4*c,yt=I-1+4*c,at=G-1+4*c,Ft=X-1+4*c,Pe=g&255,Ot=m&255,fe=y&255,$e=_&255,B=o[Pe+o[Ot+o[fe+o[$e]]]]%32,R=o[Pe+N+o[Ot+Y+o[fe+q+o[$e+z]]]]%32,te=o[Pe+U+o[Ot+J+o[fe+Z+o[$e+ae]]]]%32,Me=o[Pe+oe+o[Ot+ge+o[fe+Se+o[$e+Ue]]]]%32,ce=o[Pe+1+o[Ot+1+o[fe+1+o[$e+1]]]]%32,Te=.6-F*F-I*I-G*G-X*X;Te<0?u=0:(Te*=Te,u=Te*Te*this._dot4(a[B],F,I,G,X));let we=.6-Ge*Ge-be*be-ie*ie-pe*pe;we<0?h=0:(we*=we,h=we*we*this._dot4(a[R],Ge,be,ie,pe));let re=.6-$*$-ye*ye-Ee*Ee-it*it;re<0?d=0:(re*=re,d=re*re*this._dot4(a[te],$,ye,Ee,it));let ue=.6-qe*qe-Ye*Ye-gt*gt-Et*Et;ue<0?f=0:(ue*=ue,f=ue*ue*this._dot4(a[Me],qe,Ye,gt,Et));let Ae=.6-j*j-yt*yt-at*at-Ft*Ft;return Ae<0?p=0:(Ae*=Ae,p=Ae*Ae*this._dot4(a[ce],j,yt,at,Ft)),27*(u+h+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,a){return e[0]*t+e[1]*n+e[2]*s+e[3]*a}};var ol=class i extends ni{constructor(e,t,n=512,s=512,a,r,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=zm(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new ln(this.width,this.height,{type:gn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new nn({defines:Object.assign({},sl.defines),uniforms:ti.clone(sl.uniforms),vertexShader:sl.vertexShader,fragmentShader:sl.fragmentShader,blending:Nn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new yo,this.normalMaterial.blending=Nn,this.pdMaterial=new nn({defines:Object.assign({},rl.defines),uniforms:ti.clone(rl.uniforms),vertexShader:rl.vertexShader,fragmentShader:rl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new nn({defines:Object.assign({},al.defines),uniforms:ti.clone(al.uniforms),vertexShader:al.vertexShader,fragmentShader:al.fragmentShader,blending:Nn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new nn({uniforms:ti.clone(Wi.uniforms),vertexShader:Wi.vertexShader,fragmentShader:Wi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ko,blendDst:ha,blendEquation:Ti,blendSrcAlpha:Lo,blendDstAlpha:ha,blendEquationAlpha:Ti}),this.blendMaterial=new nn({uniforms:ti.clone(Ju.uniforms),vertexShader:Ju.vertexShader,fragmentShader:Ju.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Tc,blendSrc:ko,blendDst:ha,blendEquation:Ti,blendSrcAlpha:Lo,blendDstAlpha:ha,blendEquationAlpha:Ti}),this._fsQuad=new Ki(null),this._originalClearColor=new he,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new Di;s.format=Hi,s.type=ys,this.normalRenderTarget=new ln(this.width,this.height,{minFilter:on,magFilter:on,type:gn,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ef(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Nn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Nn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Nn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Nn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Nn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,a){e.getClearColor(this._originalClearColor);let r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_renderOverride(e,t,n,s,a){e.getClearColor(this._originalClearColor);let r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,a=t.clearAlpha||a,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new ju,n=e*e*4,s=new Uint8Array(n);for(let r=0;r<e;r++)for(let o=0;o<e;o++){let l=r,c=o;s[(r*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(r*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(r*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(r*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let a=new Vi(s,e,e,ui,jn);return a.wrapS=Jt,a.wrapT=Jt,a.needsUpdate=!0,a}};ol.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Jm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Mr=class i extends ni{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new me(e.x,e.y):new me(256,256),this.clearColor=new he(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(a,r,{type:gn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new ln(a,r,{type:gn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new ln(a,r,{type:gn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),a=Math.round(a/2),r=Math.round(r/2)}let o=Jm;this.highPassUniforms=ti.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new me(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ti.clone(Wi.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:Wi.vertexShader,fragmentShader:Wi.fragmentShader,premultipliedAlpha:!0,blending:wo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new he,this._oldClearAlpha=1,this._basic=new tn,this._fsQuad=new Ki(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new me(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let s=[],a=[];for(let r=1;r<e;r+=2){let o=t[r],l=r+1<e?t[r+1]:0,c=o+l;s.push((r*o+(r+1)*l)/c),a.push(c)}return new nn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new me(.5,.5)},direction:{value:new me(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:a}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Mr.BlurDirectionX=new me(1,0);Mr.BlurDirectionY=new me(0,1);var ll={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Wu=class extends ni{constructor(){super(),this.isOutputPass=!0,this.uniforms=ti.clone(ll.uniforms),this.material=new tr({name:ll.name,uniforms:this.uniforms,vertexShader:ll.vertexShader,fragmentShader:ll.fragmentShader}),this._fsQuad=new Ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Co?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===da?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ho?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===No&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Ku(i,e,t,n={}){let s=new ln(4,4,{type:gn,samples:4}),a=new Qu(i,s);a.addPass(new zu(e,t));let r=new ol(e,t,4,4);r.blendIntensity=n.aoStrength??1,r.updateGtaoMaterial({radius:n.aoRadius??.7,distanceExponent:1,thickness:1.5,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:12});let o=r._overrideVisibility.bind(r);r._overrideVisibility=function(){o(),e.traverse(c=>{c.userData&&c.userData.noAO&&c.visible&&(c.visible=!1,r._visibilityCache.push(c))})},a.addPass(r);let l=new Mr(new me(4,4),n.bloomStrength??.3,.7,n.bloomThreshold??1);return a.addPass(l),a.addPass(new Wu),{composer:a,gtao:r,bloom:l,setSize(c,u,h){a.setPixelRatio(h),a.setSize(c,u)},setQuality(c){r.enabled=l.enabled=c==="tinggi";let u=c==="tinggi"?4:2;for(let h of[a.renderTarget1,a.renderTarget2])h.samples!==u&&(h.samples=u,h.dispose())},render(c){a.render(c)},dispose(){a.dispose&&a.dispose()}}}var Zi=class extends Gn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Jn;e.deleteAttribute("uv");let t=new Ke({side:kn}),n=new Ke,s=new ca(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let a=new ve(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let r=new yn(e,n,6),o=new Vt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new ve(e,vr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ve(e,vr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ve(e,vr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new ve(e,vr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new ve(e,vr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ve(e,vr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function vr(i){return new Mo({color:0,emissive:16777215,emissiveIntensity:i})}var zs=6;var Js=320*Math.PI/180,eh=Js+260*Math.PI/180,Zu=5.2,_r=new Float32Array(256*256);{let i=Ct(1234);for(let e=0;e<_r.length;e++)_r[e]=i()}function Ri(i,e,t=256,n=256){let s=Math.floor(i),a=Math.floor(e),r=i-s,o=e-a,l=r*r*(3-2*r),c=o*o*(3-2*o),u=(s%t+t)%t,h=(u+1)%t,d=(a%n+n)%n,f=(d+1)%n,p=_r[(d&255)*256+(u&255)],b=_r[(d&255)*256+(h&255)],g=_r[(f&255)*256+(u&255)],m=_r[(f&255)*256+(h&255)];return p+(b-p)*l+(g-p)*c+(p-b-g+m)*l*c}function ul(i,e,t=3,n=256,s=256){let a=0,r=.5,o=1;for(let l=0;l<t;l++)a+=r*Ri(i*o,e*o,n*o,s*o),o*=2,r*=.5;return a}var Rf=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t];function F_(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),a=s.createImageData(i,i),r=a.data,o=Object.fromEntries(e.map(v=>[v.id,v])),l=t.barkA,c=t.barkB,u=t.cortex,h=[.56,.76,.33],d=o.floem.ro,f=o.kambium.ro,p=o.xilem.ro,b=o.teras.ro,g=o.empulur.ro,m=t.rings,y=t.contrast;for(let v=0;v<i;v++)for(let T=0;T<i;T++){let E=(T/i-.5)*Zu,M=(.5-v/i)*Zu,x=Math.hypot(E,M),F=Math.atan2(M,E),I,G=(ul(E*1.4+3,M*1.4+7,3)-.35)*.09+Math.sin(F*3+1.2)*.012,X=x+G;if(x>=d){let A=ul(F*9,x*7,3),k=wt(.52,.72,ul(F*16+5,x*3.2,3));I=Rf(l,c,A*.9+k*.7);let O=.82+.3*Ri(F*70,x*9);I=I.map(H=>H*O)}else if(x>=f){let A=Ri(F*90,x*14),k=Ri(F*28,x*5);I=u.map(O=>O*(.86+.2*A)*(.95+.1*k))}else if(x>=p)I=h.map(A=>A*(.94+.1*Ri(F*50,x*40)));else if(x>=g){let A=x<b,k=(X-g)*m,O=k-Math.floor(k),H=Math.floor(k),N=wt(.5,.93,O)*(1-wt(.965,1,O)),Y=.95+.08*(H*7919%13/13-.5)*2,q=Math.pow(Ri(F*60,x*1.6),3)*t.rays,z=(Ri(E*45,M*45)-.5)*.05,U=A?t.heartE:t.sapE,J=A?t.heartL:t.sapL;I=Rf(U,J,N*y*2.2).map(ae=>ae*Y+q+z);let Z=Ri(E*150+11,M*150+5);if(t.pores==="ring"?O<.16&&Z>.62&&(I=I.map(ae=>ae*.55)):t.pores==="diffuse"?Z>.87&&(I=I.map(ae=>ae*.78)):t.pores==="resin"&&Ri(E*55+3,M*55+9)>.972&&(I=[.55,.34,.14]),A){let ae=wt(.78,.9,Ri(F*5+9,x*.4))*wt(1,.4,x);I=I.map(oe=>oe*(1-ae*.35))}}else{let A=x/g;I=t.pith.map(k=>k*(.9+.14*Ri(E*80,M*80))*(1-.35*(1-A)*(1-A)))}let w=Math.min(Math.abs(x-d),Math.abs(x-f),Math.abs(x-p),Math.abs(x-b)),S=1-.38*(1-wt(0,.012,w)),D=(v*i+T)*4;r[D]=It(I[0]*S,0,1)*255,r[D+1]=It(I[1]*S,0,1)*255,r[D+2]=It(I[2]*S,0,1)*255,r[D+3]=255}s.putImageData(a,0,0);let _=new pn(n);return _.colorSpace=ut,_.anisotropy=8,_.generateMipmaps=!0,_.minFilter=ci,_.repeat.set(1/Zu,1/Zu),_.offset.set(.5,.5),_}function cl(i,e,t={}){let a=document.createElement("canvas");a.width=256,a.height=512;let r=a.getContext("2d"),o=r.createImageData(256,512),l=o.data,c=t.fu||48,u=t.fv||4;for(let d=0;d<512;d++)for(let f=0;f<256;f++){let p=f/256,b=d/512,g=ul(p*c+0,b*u,2,c,u),m=.5+.5*Math.sin((p*6+ul(p*3,b*1.5,2,3,2)*5)*nt),y=It(.35+.65*g,0,1),_=Rf(i,e,It((1-y)*.8+m*(t.band??.25),0,1)),v=Ri(p*220,b*6,220,6)>.93?.88:1,T=(d*256+f)*4;l[T]=It(_[0]*v,0,1)*255,l[T+1]=It(_[1]*v,0,1)*255,l[T+2]=It(_[2]*v,0,1)*255,l[T+3]=255}r.putImageData(o,0,0);let h=new pn(a);return h.colorSpace=ut,h.wrapS=h.wrapT=Jt,h.anisotropy=8,h.repeat.set(1/1.3,1/3),h}function Af(i,e,t,n){let s=new Xn().load(i);return s.wrapS=s.wrapT=Jt,s.anisotropy=8,e&&(s.colorSpace=ut),s.repeat.set(t,n),s}function D_(i,e){let t=new Ci;e<=.001?(t.moveTo(0,0),t.lineTo(i*Math.cos(Js),i*Math.sin(Js)),t.absarc(0,0,i,Js,eh,!1),t.lineTo(0,0)):(t.absarc(0,0,i,Js,eh,!1),t.absarc(0,0,e,eh,Js,!0),t.closePath());let n=new Os(t,{depth:zs,bevelEnabled:!1,curveSegments:96});n.rotateX(-Math.PI/2),n.translate(0,-zs/2,0);let s=n.attributes.position,a=n.attributes.uv,r=.001;for(let o of n.groups)for(let l=o.start;l<o.start+o.count;l+=3){let c=[0,1,2].map(h=>Math.hypot(s.getX(l+h),s.getZ(l+h))),u="cap";o.materialIndex===1&&(u=c.every(h=>Math.abs(h-i)<r)?"outer":e>0&&c.every(h=>Math.abs(h-e)<r)?"inner":"cut");for(let h=0;h<3;h++){let d=s.getX(l+h),f=s.getY(l+h),p=s.getZ(l+h),b,g;if(u==="cap")b=d,g=-p;else if(u==="outer"||u==="inner"){let m=Math.atan2(-p,d)-Js;m=(m%nt+nt)%nt,m>5.5&&(m-=nt),b=m*(u==="outer"?i:e),g=f}else b=Math.hypot(d,p),g=f;a.setXY(l+h,b,g)}}return a.needsUpdate=!0,n}function C_(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,nt),e.fill(),new pn(i)}function jm(i,e){let t=new Gn;{let S=document.createElement("canvas");S.width=S.height=512;let D=S.getContext("2d"),A=D.createRadialGradient(256,230,20,256,256,420);A.addColorStop(0,"#1f4a42"),A.addColorStop(.55,"#0f2a26"),A.addColorStop(1,"#040c0a"),D.fillStyle=A,D.fillRect(0,0,512,512);let k=new pn(S);k.colorSpace=ut,t.background=k}let n=new hi(i);t.environment=n.fromScene(new Zi,.04).texture,t.environmentIntensity=.45;let s=new en(38,1,.1,100),a=new Mn(16773596,2.4);a.position.set(4,9,8),a.castShadow=!0,a.shadow.mapSize.set(2048,2048);let r=a.shadow.camera;r.left=-6,r.right=6,r.top=6,r.bottom=-6,r.near=1,r.far=30,a.shadow.bias=-5e-4,a.shadow.normalBias=.03,t.add(a);let o=new Mn(9425151,1.3);o.position.set(-6,3,-5),t.add(o);let c=matchMedia("(pointer:coarse)").matches?1024:1280,u={oak:[ku,Iu,Fu,Lu],pine:[Cu,Nu,Uu,Du],birch:[Ru,Pu,wu,Au],willow:[Bu,Gu,Ou,Hu]},h={},d={},f=S=>h[S]||(h[S]=u[S].map((D,A)=>Af(D,A===0,1/2.4,1/2.4)));function p(S){let D=S.id;if(d[D])return d[D];let A=new he(S.barkTint),k=[A.r,A.g,A.b],O={...S,barkA:k.map(N=>N*.5),barkB:k.map(N=>N*.95)},H={floem:cl(S.cortex,S.cortex.map(N=>N*.72),{fu:64,band:.12}),kambium:cl([.56,.76,.34],[.42,.62,.24],{fu:64,band:.05}),xilem:cl(S.sapE,S.sapL,{fu:40,band:.3}),teras:cl(S.heartE,S.heartL,{fu:40,band:.35+S.contrast*.3}),empulur:cl(S.pith,S.pith.map(N=>N*.85),{fu:90,band:.05})};return d[D]={cap:F_(c,e,O),side:H,bark:f(S.bark),tint:new he(S.barkTint)}}let b=[],g={};e.forEach(S=>{let D=new he(S.col),A=new Ke({bumpScale:.6,roughness:S.id==="kambium"?.5:.78,metalness:0}),k=S.id==="kulit"?new Ke({roughness:1,metalness:0}):new Ke({roughness:S.id==="kambium"?.5:.78,metalness:0}),O=new ve(D_(S.ro,S.ri),[A,k]);O.castShadow=!0,O.receiveShadow=!0,O.userData.layer=S.id,t.add(O),S.id==="kulit"&&O.geometry.setAttribute("uv1",O.geometry.attributes.uv),b.push(O),g[S.id]={mats:[A,k],base:new he(1,1,1),emi:D,k:0}});let m=null;function y(S){if(m===S.id)return;m=S.id;let D=p(S);e.forEach(A=>{let[k,O]=g[A.id].mats;if(k.map=k.bumpMap=D.cap,k.needsUpdate=!0,A.id==="kulit"){let[H,N,Y,q]=D.bark;O.map=H,O.normalMap=N,O.roughnessMap=Y,O.aoMap=q,O.userData.tint=D.tint,g[A.id].tint=D.tint.clone().lerp(new he(1,1,1),.25)}else O.map=D.side[A.id];O.needsUpdate=!0})}let _=Af(Vs,!0,2.2,2.2),v=Af(Ys,!1,2.2,2.2),T=new ve(new Gt(3.7,3.9,.34,72),new Ke({map:_,normalMap:v,color:new he(.8,.72,.62),roughness:1}));T.position.y=-zs/2-.17,T.receiveShadow=!0,T.userData.noAO=!0,t.add(T);let E=C_();function M(S,D,A,k,O,H){let N=Ct(H),Y=[];for(let U=0;U<S;U++)Y.push({f:U%2,r:D[0]+N()*(D[1]-D[0]),y:(N()-.5)*zs,v:.7+N()*.7,p:N()*nt});let q=new lt;q.setAttribute("position",new ot(new Float32Array(S*3),3));let z=new qn(q,new Cn({map:E,color:k,size:O,sizeAttenuation:!0,transparent:!0,depthWrite:!1}));return z.frustumCulled=!1,z.userData.noAO=!0,t.add(z),{pts:z,data:Y,dir:A}}let x=.03,F=M(110,[1.32,1.82],1,new he(.5,1.5,2.6),.22,31),I=M(80,[2.04,2.24],-1,new he(2.6,1.55,.35),.22,32);function G(S,D,A,k){let O=S.pts.geometry.attributes.position;for(let H=0;H<S.data.length;H++){let N=S.data[H];N.y+=S.dir*N.v*D*A,N.y>zs/2?N.y-=zs:N.y<-zs/2&&(N.y+=zs);let Y=(N.f===0?Js-x:eh+x)+Math.sin(k*1.6+N.p)*.006;O.setXYZ(H,N.r*Math.cos(Y),N.y,-N.r*Math.sin(Y))}O.needsUpdate=!0}let X={yaw:0,pitch:.5,dist:14,user:!1,sun:.65},w=new he(.2,.26,.24);return{scene:t,camera:s,layerMeshes:b,layerMat:g,waterFlow:F,sugarFlow:I,state:X,setSpecies:y,update(S,D,A,k){X.user||(X.yaw=.3*Math.sin(D*.45));let O=Math.cos(X.pitch),H=Math.sin(X.pitch);s.position.set(Math.sin(X.yaw)*O*X.dist,H*X.dist,Math.cos(X.yaw)*O*X.dist),s.lookAt(0,0,0);let N=X.sun;a.intensity=1+1.9*N,t.environmentIntensity=.3+.25*N,G(F,.25+1.7*N,S,D),G(I,.12+.75*N,S,D),e.forEach(Y=>{let q=g[Y.id],z=A&&A!==Y.id?.7:0;q.k+=(z-q.k)*Math.min(1,S*10);let U=A===Y.id?.12:k===Y.id?.07:0;q.mats.forEach((J,Z)=>{J.color.copy(q.base),Z===1&&q.tint&&J.color.multiply(q.tint),J.color.lerp(w,q.k),J.emissive.copy(q.emi).multiplyScalar(U)})})}}}var N_=[{id:"kulit",name:"Kulit dan bulu",sci:"Integumen",ui:"#e0a56a",short:"Pelindung tubuh dan pengatur suhu.",what:"Kulit dan bulu adalah lapisan terluar. Bulu kucing terdiri dari bulu pelindung yang panjang dan bulu halus di bawahnya (undercoat). Kumis (vibrissae) adalah rambut peraba yang sangat peka.",fn:"Melindungi dari luka, kuman, dan panas atau dingin. Bulu menjebak udara sehingga menahan panas tubuh. Kumis membantu kucing merasakan lebar celah dan gerakan udara.",fact:"Suhu tubuh normal kucing sekitar 38 sampai 39 derajat Celsius, sedikit lebih hangat dari manusia. Kucing hanya sedikit berkeringat, terutama lewat telapak kaki."},{id:"otot",name:"Otot",sci:"Sistem muskuler",ui:"#d0594a",short:"Penggerak tubuh lewat kontraksi.",what:"Otot rangka menempel ke tulang lewat tendon. Saat otot berkontraksi (memendek), tulang ditarik dan sendi bergerak. Otot kucing panjang dan lentur, terutama di kaki belakang dan punggung.",fn:"Menggerakkan tubuh untuk berjalan, melompat, dan memanjat. Otot dan tendon di kaki juga menarik cakar masuk dan keluar (cakar retraktil), sehingga cakar tetap tajam.",fact:"Kucing bisa melompat beberapa kali tinggi tubuhnya, sekitar lima kali menurut banyak rujukan, berkat otot kaki belakang yang kuat."},{id:"rangka",name:"Rangka",sci:"Sistem rangka",ui:"#eae0c4",short:"Kerangka penopang dan pelindung organ.",what:"Rangka kucing terdiri dari sekitar 230 tulang (manusia dewasa 206). Ada tengkorak, tulang belakang dengan ruas ekor yang panjang, 13 pasang tulang rusuk, dan tulang kaki.",fn:"Menopang tubuh, melindungi organ penting (otak oleh tengkorak, jantung dan paru oleh tulang rusuk), dan menjadi tempat melekatnya otot.",fact:"Tulang selangka kucing sangat kecil dan tidak tersambung ke tulang lain. Itu membuat bahu lentur, jadi kucing bisa menyelip di celah sempit selama kepalanya muat."},{id:"otak",name:"Otak",sci:"Sistem saraf pusat",ui:"#e8a8b0",short:"Pusat kendali dan pengolah informasi.",what:"Otak berada di dalam tengkorak dan berlekuk-lekuk. Otak besar mengolah indra dan perilaku, otak kecil (cerebellum) mengatur keseimbangan dan koordinasi gerak.",fn:"Menerima sinyal dari mata, telinga, hidung, kumis, dan kulit, lalu memerintahkan otot bergerak lewat saraf.",fact:"Beratnya hanya sekitar 25 sampai 30 gram. Kucing melihat baik di tempat redup karena mata punya lapisan pemantul cahaya (tapetum lucidum), itulah sebabnya mata kucing tampak bersinar saat disorot lampu."},{id:"jantung",name:"Jantung",sci:"Sistem peredaran darah",ui:"#e0505e",short:"Pompa yang mengalirkan darah ke seluruh tubuh.",what:"Jantung kucing berbilik empat seperti jantung manusia: dua serambi (atrium) menerima darah dan dua bilik (ventrikel) memompanya keluar.",fn:"Memompa darah yang membawa oksigen dan nutrisi ke seluruh tubuh, dan mengirim darah miskin oksigen ke paru-paru untuk diisi ulang.",fact:"Detak jantung kucing sehat umumnya sekitar 140 sampai 220 kali per menit, jauh lebih cepat dari manusia, dan naik saat aktif atau takut. Kucing tidak bisa membuat cukup taurin sendiri, jadi harus mendapatnya dari makanan berbahan daging. Kekurangan taurin dapat merusak otot jantung."},{id:"paru",name:"Paru-paru",sci:"Sistem pernapasan",ui:"#f0a0a8",short:"Tempat pertukaran oksigen dan karbon dioksida.",what:"Udara masuk lewat hidung, trakea (batang tenggorok), lalu bercabang ke dalam paru-paru. Di ujung cabangnya ada kantong kecil (alveolus) tempat gas bertukar dengan darah.",fn:"Mengambil oksigen dari udara ke darah dan membuang karbon dioksida. Otot diafragma dan otot antar rusuk membuat paru mengembang dan mengempis.",fact:"Kucing sehat bernapas sekitar 20 sampai 30 kali per menit saat istirahat. Kucing jarang terengah-engah, jadi kucing yang bernapas terengah atau cepat saat santai perlu dibawa ke dokter hewan."},{id:"hati",name:"Hati",sci:"Sistem pencernaan dan metabolisme",ui:"#b0463c",short:"Pabrik kimia tubuh: empedu, penawar racun, penyimpan nutrisi.",what:"Hati adalah organ besar berwarna cokelat kemerahan di depan perut, tepat di belakang diafragma.",fn:"Membuat empedu untuk membantu mencerna lemak, menetralkan zat berbahaya, menyimpan nutrisi, dan membuat protein darah.",fact:"Hati kucing sulit memecah beberapa zat, sehingga banyak obat manusia, misalnya parasetamol, beracun bagi kucing. Jangan memberi obat manusia tanpa saran dokter hewan."},{id:"lambung",name:"Lambung",sci:"Sistem pencernaan",ui:"#e89a8a",short:"Kantong pencerna awal dengan asam dan enzim.",what:"Makanan turun dari mulut lewat kerongkongan (esofagus) menuju lambung, kantong berotot dengan dinding yang melipat.",fn:"Mengaduk makanan, mencampurnya dengan asam lambung dan enzim sehingga protein mulai terurai menjadi bubur makanan (kimus).",fact:"Kucing adalah karnivora obligat, artinya tubuhnya dirancang untuk makan daging. Lambungnya kecil, itu sebabnya kucing cocok makan sedikit tapi sering."},{id:"usus",name:"Usus",sci:"Sistem pencernaan",ui:"#f0b8a8",short:"Menyerap nutrisi dan air, lalu membentuk tinja.",what:"Usus terdiri dari usus halus yang berkelok-kelok dan usus besar yang lebih pendek dan lebih lebar, berakhir di anus.",fn:"Usus halus menyerap nutrisi ke dalam darah. Usus besar menyerap air dan membentuk sisa makanan menjadi tinja.",fact:"Usus kucing relatif pendek dibanding hewan pemakan tumbuhan karena daging lebih mudah dicerna. Titik kuning yang bergerak di animasi menunjukkan perjalanan makanan dari mulut sampai anus."},{id:"ginjal",name:"Ginjal",sci:"Sistem ekskresi",ui:"#a04a3a",short:"Penyaring darah yang membuat urine.",what:"Ada dua ginjal berbentuk kacang di bagian belakang rongga perut, dekat tulang punggung.",fn:"Menyaring darah, membuang sisa metabolisme, mengatur kadar air dan garam, lalu membentuk urine.",fact:"Ginjal kucing bisa membuat urine yang sangat pekat sehingga kucing tidak banyak minum. Penyakit ginjal kronis cukup sering terjadi pada kucing yang menua."},{id:"kandung",name:"Kandung kemih",sci:"Sistem ekskresi",ui:"#f0dc8a",short:"Menampung urine sebelum dibuang.",what:"Kandung kemih adalah kantong berdinding otot di bagian belakang perut. Urine mengalir dari ginjal ke sana lewat dua saluran (ureter).",fn:"Menampung urine sementara, lalu mengeluarkannya lewat saluran uretra saat kucing buang air kecil.",fact:"Pada kucing jantan, uretra lebih sempit sehingga lebih mudah tersumbat. Kucing jantan yang mengejan di kotak pasir tanpa urine keluar harus segera ditangani dokter hewan."}],U_={id:"kucing",kind:"animal",tagNear:5,name:"Kucing",short:"kucing",sci:"Felis catus",family:"Felidae",x:-5,z:7,top:.7,mkOff:1.1,promptY:.55,fact:"Kucing domestik termasuk keluarga Felidae, sama seperti singa dan harimau. Tubuhnya dirancang untuk berburu: refleks cepat, cakar yang bisa ditarik, mata peka cahaya redup, dan kumis peraba.",hint:"Geser slider Kedalaman untuk mengupas lapisan dari kulit sampai organ dalam, atau ketuk bagian tubuh dan daftar di samping. Geser Aktivitas untuk melihat jantung dan paru bekerja lebih cepat."},H_=[{id:"c1",sp:"kucing",q:"Lapisan mana yang terletak paling dalam, setelah kulit, otot, dan rangka dikupas?",o:["Organ dalam seperti jantung dan paru","Bulu pelindung","Kumis","Cakar"],a:0,e:"Urutannya dari luar: kulit dan bulu, otot, rangka, lalu organ dalam yang dilindungi tulang rusuk dan otot perut."},{id:"c2",sp:"kucing",q:"Jantung kucing berbilik empat. Apa tugas bilik (ventrikel)?",o:["Memompa darah keluar dari jantung","Menyimpan makanan","Menyaring urine","Membuat empedu"],a:0,e:"Serambi menerima darah, bilik memompanya keluar. Bilik kanan ke paru, bilik kiri ke seluruh tubuh."},{id:"c3",sp:"kucing",q:"Kira-kira berapa detak jantung kucing sehat per menit?",o:["10 sampai 30","60 sampai 80","140 sampai 220","500 sampai 600"],a:2,e:"Kisaran umumnya 140 sampai 220 kali per menit, lebih cepat daripada manusia (sekitar 60 sampai 100)."},{id:"c4",sp:"kucing",q:"Apa fungsi utama paru-paru?",o:["Menukar oksigen dan karbon dioksida","Membuat empedu","Menyaring darah jadi urine","Menyerap air dari sisa makanan"],a:0,e:"Di alveolus, oksigen masuk ke darah dan karbon dioksida dilepas ke udara napas."},{id:"c5",sp:"kucing",q:"Organ mana yang membuat empedu untuk membantu mencerna lemak?",o:["Hati","Ginjal","Lambung","Kandung kemih"],a:0,e:"Empedu dibuat di hati lalu dialirkan ke usus halus."},{id:"c6",sp:"kucing",q:"Kucing disebut karnivora obligat. Apa artinya?",o:["Tubuhnya dirancang makan daging dan butuh zat dari daging, misalnya taurin","Hanya makan sayur","Bisa hidup tanpa makan","Makan apa saja sama baiknya"],a:0,e:"Kucing tidak bisa membuat cukup taurin sendiri, jadi harus mendapatnya dari makanan berbahan daging."},{id:"c7",sp:"kucing",q:"Di mana nutrisi dari makanan terutama diserap ke dalam darah?",o:["Usus halus","Kerongkongan","Kandung kemih","Trakea"],a:0,e:"Usus halus punya permukaan lipatan luas untuk menyerap nutrisi. Usus besar terutama menyerap air."},{id:"c8",sp:"kucing",q:"Apa tugas ginjal?",o:["Menyaring darah dan membentuk urine","Memompa darah","Mencerna protein","Menyimpan oksigen"],a:0,e:"Ginjal membuang sisa metabolisme dan mengatur air serta garam dalam tubuh, hasilnya urine."},{id:"c9",sp:"kucing",q:"Mengapa kucing yang bernapas terengah-engah saat santai perlu dibawa ke dokter hewan?",o:["Kucing sehat jarang terengah, jadi itu bisa tanda gangguan napas atau jantung","Itu tanda kucing sedang senang","Itu cara normal kucing mendinginkan diri","Itu tanda kucing lapar"],a:0,e:"Napas istirahat normal sekitar 20 sampai 30 kali per menit dan tenang. Napas terengah pada kucing perlu diperiksa."}];var Wm={id:"kucing",name:"Kucing",layers:N_,specimen:U_,quiz:H_};var B_=i=>{let e=i==="sapi";return[{id:"kulit",name:"Kulit dan rambut",sci:"Integumen",ui:e?"#e8e2d6":"#e0cfae",short:"Pelindung tubuh dan pengatur suhu.",what:e?"Sapi perah Friesian Holstein (FH) berambut pendek belang hitam-putih. Pola belang tiap sapi berbeda, jadi bisa dipakai untuk mengenali sapi satu per satu.":"Kambing Peranakan Etawa (PE) adalah hasil persilangan kambing Etawa (Jamnapari) dari India dengan kambing kacang lokal. Cirinya telinga panjang menggantung, hidung melengkung, dan rambut panjang di paha belakang.",fn:"Melindungi tubuh dari luka, kuman, sengatan matahari, dan serangga, serta membantu mengatur suhu tubuh.",fact:e?"Sapi FH berasal dari daerah beriklim sejuk di Eropa, jadi di Indonesia biasanya dipelihara di dataran tinggi yang dingin, misalnya di lereng gunung di Jawa Timur. Udara panas membuat produksi susunya turun.":"Kambing PE termasuk kambing dwiguna: dipelihara untuk diambil susu dan dagingnya."},{id:"otot",name:"Otot",sci:"Sistem muskuler",ui:"#d0594a",short:"Penggerak tubuh dan rahang pengunyah.",what:"Otot rangka menempel ke tulang lewat tendon dan menggerakkan sendi. Otot rahang ruminansia sangat kuat karena dipakai mengunyah berjam-jam.",fn:"Menggerakkan kaki untuk berjalan, leher untuk merenggut pakan, dan rahang untuk mengunyah, termasuk mengunyah ulang saat memamah biak.",fact:e?"Otot sapi yang kita makan disebut daging. Bagian yang banyak bergerak, seperti kaki, lebih liat dibanding bagian punggung yang jarang bekerja keras.":"Kambing pemanjat yang lincah dan suka meramban, yaitu memakan daun dan ranting semak, bukan hanya merumput di tanah."},{id:"rangka",name:"Rangka",sci:"Sistem rangka",ui:"#eae0c4",short:"Kerangka penopang tubuh yang besar.",what:"Rangka terdiri dari tengkorak, tulang belakang, 13 pasang tulang rusuk, panggul, dan tulang kaki. Tiap kaki berakhir pada dua kuku (kuku belah).",fn:"Menopang berat tubuh, melindungi organ dalam, dan menjadi tempat melekatnya otot.",fact:e?"Sapi tidak punya gigi seri di rahang atas. Sebagai gantinya ada bantalan gigi yang keras. Sapi merenggut rumput dengan lidah, lalu menjepitnya di antara gigi seri bawah dan bantalan itu.":"Tanduk kambing terdiri dari inti tulang yang dibungkus lapisan keratin (bahan yang sama dengan kuku). Tanduk tumbuh seumur hidup dan tidak lepas tiap tahun, berbeda dengan ranggah rusa."},{id:"otak",name:"Otak dan mata",sci:"Sistem saraf",ui:"#e8a8b0",short:"Pusat kendali; mata di samping kepala.",what:"Otak mengolah informasi dari indra dan mengatur gerak serta perilaku. Mata ruminansia terletak di sisi kepala.",fn:"Mata di samping memberi bidang pandang sangat luas untuk mengawasi pemangsa sambil merunduk makan. Gantinya, area yang terlihat oleh dua mata sekaligus sempit, sehingga menilai jarak kurang tepat.",fact:e?"Pupil sapi berbentuk lonjong mendatar. Bentuk ini membantu melihat garis cakrawala yang luas di sekelilingnya.":"Pupil kambing berbentuk persegi panjang mendatar. Saat kambing menunduk untuk makan, bola matanya berputar sehingga pupil tetap sejajar dengan tanah."},{id:"jantung",name:"Jantung",sci:"Sistem peredaran darah",ui:"#e0505e",short:"Pompa darah berbilik empat.",what:"Jantung berbilik empat: dua serambi menerima darah dan dua bilik memompanya keluar, sama seperti jantung kucing dan manusia.",fn:"Memompa darah berisi oksigen dan nutrisi ke seluruh tubuh, termasuk ke ambing yang butuh banyak darah untuk membuat susu.",fact:e?"Detak jantung sapi dewasa yang istirahat umumnya sekitar 48 sampai 84 kali per menit, lebih lambat daripada kucing. Hewan bertubuh besar cenderung berdetak lebih lambat.":"Detak jantung kambing dewasa yang istirahat umumnya sekitar 70 sampai 90 kali per menit."},{id:"paru",name:"Paru-paru",sci:"Sistem pernapasan",ui:"#f0a0a8",short:"Pertukaran oksigen dan karbon dioksida.",what:"Udara masuk lewat hidung dan trakea, lalu bercabang di dalam paru-paru sampai ke kantong udara kecil (alveolus).",fn:"Mengambil oksigen ke darah dan membuang karbon dioksida. Napas juga membantu membuang panas tubuh.",fact:e?"Sapi dewasa yang istirahat bernapas sekitar 26 sampai 50 kali per menit. Saat kepanasan, napasnya jauh lebih cepat untuk membuang panas.":"Kambing dewasa yang istirahat bernapas sekitar 15 sampai 30 kali per menit."},{id:"hati",name:"Hati",sci:"Sistem pencernaan dan metabolisme",ui:"#b0463c",short:"Pengolah nutrisi dan penetral racun.",what:"Hati terletak di sisi kanan bagian depan perut, tepat di belakang diafragma.",fn:"Mengolah zat hasil pencernaan, menetralkan racun, menyimpan nutrisi, dan membuat empedu.",fact:"Ruminansia mendapat sangat sedikit gula langsung dari usus. Hati mereka membuat sebagian besar gula darah dari asam lemak hasil fermentasi di rumen."},{id:"rumen",name:"Rumen",sci:"Lambung ruang 1",ui:"#c9a27e",short:"Tangki fermentasi raksasa berisi mikroba.",what:"Rumen adalah ruang lambung terbesar dan menempati hampir seluruh sisi kiri perut. Dindingnya dipenuhi tonjolan kecil (papila) yang menyerap hasil fermentasi.",fn:"Bakteri, protozoa, dan jamur di dalam rumen memecah selulosa rumput yang tidak bisa dicerna hewan sendiri. Hasilnya asam lemak yang menjadi sumber energi utama, serta gas.",fact:e?"Pada sapi dewasa rumen bisa menampung lebih dari 100 liter. Rumen berkontraksi sekitar 1 sampai 3 kali per menit untuk mengaduk isinya. Gas metana dari fermentasi dikeluarkan lewat sendawa dan termasuk gas rumah kaca.":"Rumen kambing bekerja sama seperti pada sapi, tetapi kambing lebih pemilih: ia memilih daun dan pucuk yang paling bergizi."},{id:"retikulum",name:"Retikulum",sci:"Lambung ruang 2",ui:"#d8a898",short:"Ruang bersekat seperti sarang lebah.",what:"Retikulum berada di depan rumen, dekat jantung dan diafragma. Dinding dalamnya bersekat-sekat seperti sarang lebah.",fn:"Bersama rumen mengaduk makanan, memilah partikel kasar dan halus, serta mendorong gumpalan makanan (bolus) naik kembali ke mulut untuk dikunyah ulang.",fact:"Benda berat yang ikut tertelan, seperti paku atau kawat, bisa tersangkut di retikulum dan melukai dinding sampai ke jantung. Peternak kadang memasukkan magnet khusus ke lambung sapi untuk menangkap logam itu."},{id:"omasum",name:"Omasum",sci:"Lambung ruang 3",ui:"#b8907c",short:"Ruang berlembar-lembar seperti buku.",what:"Omasum berbentuk bulat dengan dinding dalam berupa lipatan tipis yang tersusun seperti halaman buku.",fn:"Menyerap air dan mineral dari makanan, serta menyaring partikel yang masih kasar sebelum masuk ke abomasum.",fact:"Lembaran-lembaran omasum memperluas permukaan penyerapan, mirip prinsip lipatan pada usus halus."},{id:"abomasum",name:"Abomasum",sci:"Lambung ruang 4 (lambung sejati)",ui:"#e08880",short:"Lambung sejati dengan asam dan enzim.",what:"Abomasum adalah ruang keempat yang disebut lambung sejati karena cara kerjanya mirip lambung manusia.",fn:"Menghasilkan asam lambung dan enzim yang mencerna protein, termasuk protein dari mikroba rumen yang ikut terbawa.",fact:"Pada anak sapi atau anak kambing yang masih menyusu, susu mengalir lewat lekukan khusus (alur esofagus) langsung ke abomasum, melewati rumen yang belum berkembang."},{id:"usus",name:"Usus",sci:"Sistem pencernaan",ui:"#f0b8a8",short:"Penyerap nutrisi dan air.",what:"Usus halus sangat panjang dan berkelok, lalu berlanjut ke usus besar yang berakhir di anus.",fn:"Usus halus menyerap nutrisi ke dalam darah. Usus besar menyerap air dan membentuk kotoran.",fact:e?"Usus halus sapi dewasa bisa mencapai puluhan meter. Pakan berserat butuh jalur cerna yang panjang.":"Kotoran kambing berbentuk butiran kecil karena usus besarnya menyerap air dengan sangat efisien."},{id:"ginjal",name:"Ginjal",sci:"Sistem ekskresi",ui:"#a04a3a",short:"Penyaring darah pembuat urine.",what:e?"Ginjal sapi tampak bergelambir, terdiri dari banyak lobus kecil yang menyatu.":"Ginjal kambing halus berbentuk kacang, tidak bergelambir seperti ginjal sapi.",fn:"Menyaring darah, membuang sisa metabolisme, dan mengatur kadar air serta garam tubuh.",fact:"Bentuk ginjal berbeda antarspesies: ginjal sapi berlobus, sedangkan ginjal kambing, domba, dan kucing halus."},{id:"kandung",name:"Kandung kemih",sci:"Sistem ekskresi",ui:"#f0dc8a",short:"Penampung urine.",what:"Kantong berdinding otot di bagian belakang rongga perut.",fn:"Menampung urine dari ginjal sebelum dikeluarkan.",fact:"Urine dan kotoran ternak bisa diolah menjadi pupuk organik dan biogas, sumber energi yang dipakai di banyak peternakan rakyat."},{id:"ambing",name:"Ambing",sci:"Kelenjar susu",ui:"#f4c8c0",short:"Pabrik susu.",what:e?"Ambing sapi terbagi menjadi empat kuartir yang terpisah, masing-masing dengan satu puting.":"Ambing kambing terbagi menjadi dua bagian, masing-masing dengan satu puting.",fn:"Kelenjar susu mengambil zat dari darah lalu mengubahnya menjadi susu yang berisi lemak, protein, gula susu (laktosa), dan mineral.",fact:e?"Untuk membuat 1 liter susu, sekitar 400 sampai 500 liter darah perlu mengalir melewati ambing.":"Susu kambing PE banyak dijual sebagai susu segar dan produk olahan di peternakan rakyat Indonesia."}]},G_=i=>{let e=i==="sapi";return[{id:i+"1",sp:i,q:"Ruang lambung mana yang paling besar dan berisi mikroba pemecah selulosa?",o:["Rumen","Retikulum","Omasum","Abomasum"],a:0,e:"Rumen adalah tangki fermentasi. Mikroba di dalamnya memecah selulosa menjadi asam lemak yang menjadi sumber energi."},{id:i+"2",sp:i,q:'Ruang lambung mana yang disebut "lambung sejati" karena mirip lambung manusia?',o:["Abomasum","Rumen","Retikulum","Omasum"],a:0,e:"Abomasum menghasilkan asam dan enzim pencerna protein."},{id:i+"3",sp:i,q:"Apa yang dimaksud memamah biak?",o:["Makanan yang sudah ditelan dikembalikan ke mulut untuk dikunyah ulang","Makan sambil berjalan","Minum air sangat banyak","Menyimpan makanan di pipi"],a:0,e:"Gumpalan makanan (bolus) didorong dari retikulum ke mulut, dikunyah lagi, lalu ditelan kembali. Titik hijau di animasi menunjukkan perjalanan ini."},{id:i+"4",sp:i,q:"Dinding dalam retikulum berbentuk seperti apa?",o:["Sarang lebah","Halaman buku","Bulu halus","Licin tanpa lipatan"],a:0,e:"Sekat-sekat seperti sarang lebah membantu memilah partikel makanan."},{id:i+"5",sp:i,q:"Apa fungsi utama omasum?",o:["Menyerap air dan mineral","Membuat susu","Memompa darah","Menghasilkan metana"],a:0,e:"Lipatan-lipatan omasum yang seperti halaman buku memperluas permukaan penyerapan."},{id:i+"6",sp:i,q:"Mengapa mata "+(e?"sapi":"kambing")+" terletak di sisi kepala?",o:["Supaya bisa mengawasi sekeliling untuk menghindari pemangsa","Supaya bisa melihat dalam gelap total","Supaya tidak silau","Supaya bisa membaca"],a:0,e:"Hewan mangsa butuh bidang pandang yang sangat luas. Pemangsa seperti kucing punya mata menghadap depan untuk menilai jarak."},e?{id:i+"7",sp:i,q:"Berapa jumlah puting pada ambing sapi?",o:["4","2","6","8"],a:0,e:"Ambing sapi terbagi menjadi empat kuartir yang masing-masing punya satu puting."}:{id:i+"7",sp:i,q:"Tanduk kambing tersusun dari apa?",o:["Inti tulang yang dibungkus keratin","Tulang rawan saja","Rambut yang mengeras","Kalsium dari susu"],a:0,e:"Inti tulang dilapisi keratin. Tanduk tidak lepas setiap tahun, berbeda dengan ranggah rusa."},e?{id:i+"8",sp:i,q:"Mengapa sapi FH di Indonesia banyak dipelihara di dataran tinggi?",o:["Karena berasal dari daerah sejuk dan produksi susunya turun saat kepanasan","Karena rumput hanya tumbuh di gunung","Karena sapi takut laut","Karena lebih dekat ke pasar"],a:0,e:"Sapi FH berasal dari Eropa yang beriklim sejuk. Udara panas membuat sapi stres dan susunya berkurang."}:{id:i+"8",sp:i,q:"Bentuk pupil kambing adalah ...",o:["Persegi panjang mendatar","Celah tegak seperti kucing","Bulat seperti manusia","Bintang"],a:0,e:"Pupil mendatar membantu melihat luas ke sekeliling, dan tetap mendatar saat kambing menunduk makan."},{id:i+"9",sp:i,q:"Gas apa yang dihasilkan fermentasi di rumen dan dikeluarkan lewat sendawa?",o:["Metana","Oksigen","Helium","Klorin"],a:0,e:"Metana adalah gas rumah kaca. Para peneliti sedang mencari pakan yang bisa mengurangi metana dari ternak."}]};function Pf(i){let e=i==="sapi";return{id:i,name:e?"Sapi":"Kambing",layers:B_(i),quiz:G_(i),specimen:e?{id:"sapi",kind:"animal",name:"Sapi perah",short:"sapi",sci:"Bos taurus (Friesian Holstein)",family:"Bovidae",x:10,z:21,top:1.7,mkOff:.9,promptY:1.1,tagNear:7,fact:"Sapi adalah ruminansia, hewan memamah biak dengan lambung empat ruang. Sapi perah Friesian Holstein dipelihara untuk diambil susunya.",hint:"Geser Kedalaman untuk mengupas lapisan. Di bagian organ, titik oranye adalah perjalanan makanan dan titik hijau adalah gumpalan makanan yang naik lagi ke mulut untuk dikunyah ulang (memamah biak). Kamera mulai dari sisi kiri supaya rumen terlihat."}:{id:"kambing",kind:"animal",name:"Kambing PE",short:"kambing",sci:"Capra hircus (Peranakan Etawa)",family:"Bovidae",x:16,z:24,top:1.05,mkOff:.7,promptY:.75,tagNear:6,fact:"Kambing juga ruminansia berlambung empat ruang. Kambing PE terkenal dengan telinga panjangnya yang menggantung.",hint:"Geser Kedalaman untuk mengupas lapisan. Titik oranye adalah perjalanan makanan, titik hijau adalah gumpalan makanan yang dikunyah ulang (memamah biak). Bandingkan ginjal dan ambingnya dengan sapi."}}}var Tn=i=>new C(i[0],i[1],i[2]),st=i=>Ei(i,!1),ii=(i,e,t)=>new he().setRGB(i,e,t,ut),es=1,vs=i=>{es=i};function ke(i,e,t=22,n){let s=new mn(1,t,Math.max(8,Math.round(t*.7)));return s.scale(i[0]*es,i[1]*es,i[2]*es),n&&(s.rotateX(n[0]),s.rotateY(n[1]),s.rotateZ(n[2])),s.translate(e[0],e[1],e[2]),s}function dt(i,e,t,n,s=10){let a=es;t*=a,n*=a,es=1;let r=Tn(i),o=Tn(e),l=o.clone().sub(r),c=l.length(),u=new Gt(n,t,c,s,1,!0);u.applyQuaternion(new _t().setFromUnitVectors(new C(0,1,0),l.clone().normalize())),u.translate((r.x+o.x)/2,(r.y+o.y)/2,(r.z+o.z)/2);let h=st([u,ke([t,t,t],i,s),ke([n,n,n],e,s)]);return es=a,h}function bn(i,e,t=24,n=8){return new mi(new _n(i.map(Tn)),t,e*es,n,!1)}function Sr(i,e,t,n,s=8){let a=new ro(i*es,e*es,s,1);return n&&(a.rotateX(n[0]),a.rotateY(n[1]),a.rotateZ(n[2])),a.translate(t[0],t[1],t[2]),a}var si=(i,e)=>(i.translate(-e[0],-e[1],-e[2]),i);function ts(i,e,t){let n=document.createElement("canvas");n.width=n.height=i,e(n.getContext("2d"),i);let s=new pn(n);return s.colorSpace=ut,s.wrapS=s.wrapT=Jt,s.anisotropy=4,t&&s.repeat.set(t[0],t[1]),s}function Ma(i,e,t=11,n=[2,2],s=5200){return ts(256,(a,r)=>{let o=Ct(t);a.fillStyle=i,a.fillRect(0,0,r,r),e&&e(a,r,o);for(let l=0;l<s;l++){a.strokeStyle=o()<.5?"rgba(255,240,220,0.09)":"rgba(30,18,8,0.09)",a.lineWidth=1;let c=o()*r,u=o()*r;a.beginPath(),a.moveTo(c,u),a.lineTo(c+(o()-.5)*3,u+4+o()*6),a.stroke()}},n)}function _s(i,e=[1,.85,.62],t=.95){return new Wt({map:i,bumpMap:i,bumpScale:.6,roughness:t,metalness:0,sheen:1,sheenRoughness:.55,sheenColor:new he(e[0],e[1],e[2])})}function O_(){return ts(256,(i,e)=>{let t=Ct(23);i.fillStyle="#8a2b22",i.fillRect(0,0,e,e);for(let n=0;n<900;n++){i.strokeStyle=t()<.5?"rgba(196,82,64,0.35)":"rgba(70,16,12,0.35)",i.lineWidth=1+t()*2.5;let s=t()*e;i.beginPath(),i.moveTo(s,0),i.bezierCurveTo(s+6,e*.3,s-6,e*.7,s+(t()-.5)*8,e),i.stroke()}for(let n=0;n<14;n++){i.strokeStyle="rgba(240,215,200,0.22)",i.lineWidth=1.2;let s=t()*e;i.beginPath(),i.moveTo(s,0),i.lineTo(s+(t()-.5)*20,e),i.stroke()}},[3,2])}function q_(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,nt),e.fill(),new pn(i)}function js(i,e,t){let n=new Wt({color:ii(...t.iris),roughness:.08,clearcoat:1,clearcoatRoughness:.05,transparent:!0}),s=new Ke({color:263172,roughness:.2,transparent:!0});for(let a of[1,-1]){let r=new ve(new mn(1,20,16),n),o=t.scale||[.75,1,1];r.scale.set(t.r*o[0],t.r*o[1],t.r*o[2]),r.position.set(t.p[0]-e[0],t.p[1]-e[1],a*t.p[2]-e[2]),i.add(r);let l=t.side?new C(.35,.05,a).normalize():new C(1,0,a*.35).normalize(),c;t.pupil==="slit"?c=new mn(1,10,8).scale(t.r*.16,t.r*.78,t.r*.1):t.pupil==="bar"?c=new Jn(t.r*1,t.r*.3,t.r*.1):t.pupil==="oval"?c=new mn(1,12,10).scale(t.r*.6,t.r*.32,t.r*.1):c=new mn(1,12,10).scale(t.r*.45,t.r*.45,t.r*.1);let u=new ve(c,s);u.position.copy(r.position).addScaledVector(l,t.r*(t.side?.93:.76)),u.lookAt(u.position.clone().add(l)),i.add(u)}return[n,s]}function wf(i,e,t,n){let s=d=>t.isMaterial?t:t[d]||t.body,a=new Xt,r=[],o=(d,f,p)=>{let b=new ve(d,s(p));b.castShadow=b.receiveShadow=!0,b.userData.layer=n;let g=new Xt;return g.position.set(f[0],f[1],f[2]),g.add(b),r.push(b),a.add(g),g},l=new ve(e.body,s("body"));l.castShadow=l.receiveShadow=!0,l.userData.layer=n,a.add(l),r.push(l);let c=o(e.head,i.pivots.head,"head"),u=o(e.tail,i.pivots.tail,"tail");if(e.extra)for(let[d,f]of e.extra){let p=new ve(d,s(f));p.castShadow=!0,p.userData.layer=n,a.add(p),r.push(p)}let h=e.legs.map((d,f)=>o(d,i.pivots.legs[f],"legs"));return{root:a,meshes:r,head:c,tail:u,legs:h}}function Km(i,e,t,n,s=404,a=null){let{heightAt:r,WATER:o}=e,l=t.worldScale,c=-t.groundY,u=wf(t,t.bodyParts(1),t.skinMats(),"kulit");t.face&&t.face(u,t.pivots.head),u.root.scale.setScalar(l);let h=new Xt;h.add(u.root),i.add(h);let d=new ve(new mn(t.hitR,8,6),new tn({visible:!1}));i.add(d);let f=t.walk,p=Ct(s),b={group:h,hit:d,x:n.x,z:n.z,y:r(n.x,n.z),yaw:p()*nt,parts:u},g="idle",m=2+p()*3,y=n.x,_=n.z,v=0,T=0,E=0,M=0;return b.update=(x,F,I)=>{let G=I.x-b.x,X=I.z-b.z,w=Math.hypot(G,X),S=0;if(g==="idle"){if(m-=x,w<3&&!f.graze){let O=Math.atan2(-X,G)-b.yaw;O=Math.atan2(Math.sin(O),Math.cos(O)),b.yaw+=O*Math.min(1,x*3)}if(m<=0&&w>f.keep){for(let k=0;k<10;k++){let O=p()*nt,H=1.5+p()*f.radius,N=n.x+Math.cos(O)*H,Y=n.z+Math.sin(O)*H;if(r(N,Y)>o+.5&&(!a||Math.hypot(N-a.x,Y-a.z)<a.r-1.6)){y=N,_=Y,g="walk";break}}m=3+p()*6}}else{let k=y-b.x,O=_-b.z,H=Math.hypot(k,O);if(H<.25||w<f.keep*.7)g="idle",m=3+p()*7,M=f.graze?2+p()*6:0;else{let Y=Math.atan2(-O,k)-b.yaw;Y=Math.atan2(Math.sin(Y),Math.cos(Y)),b.yaw+=Y*Math.min(1,x*3),S=f.speed,b.x+=k/H*S*x,b.z+=O/H*S*x}}M-=x;let D=g==="idle"&&M>0?1:0;E+=(D-E)*Math.min(1,x*2),T+=((S>0?1:0)-T)*Math.min(1,x*6),v+=S*x*f.step;let A=Math.sin(v)*f.swing*T;u.legs[0].rotation.z=A,u.legs[3].rotation.z=A*.9,u.legs[1].rotation.z=-A,u.legs[2].rotation.z=-A*.9,u.tail.rotation.y=Math.sin(F*(f.tailF||1.4))*(f.tailA||.28),u.head.rotation.z=Math.sin(F*.8)*.04-T*.04-E*(f.graze||0)+(E>.5?Math.sin(F*7)*.03:0),b.y+=(r(b.x,b.z)-b.y)*Math.min(1,x*10),h.position.set(b.x,b.y+c*l+Math.abs(Math.sin(v))*.012*T,b.z),h.rotation.y=b.yaw,d.position.set(b.x,b.y+t.hitY,b.z)},b}function Zm(i,e){let t=new Gn;{let N=document.createElement("canvas");N.width=N.height=512;let Y=N.getContext("2d"),q=Y.createRadialGradient(256,230,20,256,256,420);q.addColorStop(0,e.bg[0]),q.addColorStop(.55,e.bg[1]),q.addColorStop(1,"#05090e"),Y.fillStyle=q,Y.fillRect(0,0,512,512);let z=new pn(N);z.colorSpace=ut,t.background=z}let n=new hi(i);t.environment=n.fromScene(new Zi,.04).texture,t.environmentIntensity=.5;let s=new en(38,1,.1,120),a=new Mn(16773596,2.6);a.position.set(4,9,8),a.castShadow=!0,a.shadow.mapSize.set(1024,1024);let r=a.shadow.camera;r.left=-8,r.right=8,r.top=8,r.bottom=-8,r.near=1,r.far=32,a.shadow.bias=-5e-4,a.shadow.normalBias=.03,t.add(a);let o=new Mn(9425151,1.2);o.position.set(-6,3,-5),t.add(o);let l=new Mn(16777215,.6);l.position.set(-3,4,-9),t.add(l);let c=new Xn().load(Vs),u=new Xn().load(Ys);for(let N of[c,u])N.wrapS=N.wrapT=Jt,N.repeat.set(2.4,2.4);c.colorSpace=ut;let h=new ve(new Gt(e.pedR||5.6,(e.pedR||5.6)+.2,.3,64),new Ke({map:c,normalMap:u,color:new he(.7,.66,.62),roughness:1}));h.position.y=e.groundY-.15,h.receiveShadow=!0,h.userData.noAO=!0,e.noPed||t.add(h);let d=new Xt;t.add(d);let f=[],p={},b=(N,Y)=>{p[N]||(p[N]={mats:[],meshes:[]}),p[N].mats.includes(Y.material)||p[N].mats.push(Y.material),p[N].meshes.push(Y),Y.userData.layer=N,f.push(Y)},g=wf(e,e.bodyParts(1),e.skinMats(),"kulit"),m=e.face?e.face(g,e.pivots.head):[];d.add(g.root),g.meshes.forEach(N=>b("kulit",N));let y=e.muscleMat?e.muscleMat():new Wt({map:O_(),roughness:.5,clearcoat:.35,clearcoatRoughness:.4}),_=wf(e,e.bodyParts(e.muscleShrink||.84),y,"otot");d.add(_.root),_.meshes.forEach(N=>b("otot",N));let v=new Ke({color:ii(.9,.85,.72),roughness:.55}),T=new ve(e.bones(),v);if(T.castShadow=!0,T.receiveShadow=!0,d.add(T),b("rangka",T),e.boneExtras)for(let[N,Y]of e.boneExtras()){let q=new ve(N,Y);q.castShadow=!0,d.add(q),b("rangka",q)}let E=(N,Y=.42,q=.35,z)=>new Wt({color:ii(N[0],N[1],N[2]),map:z||null,roughness:Y,clearcoat:q,clearcoatRoughness:.3,transparent:!0}),M=(N,Y,q,z)=>{let U=new ve(Y,q);return z&&U.position.set(z[0],z[1],z[2]),U.castShadow=U.receiveShadow=!0,d.add(U),b(N,U),U},x=e.organs(M,E),F=q_(),I=[];function G(N,Y,q,z,U,J={}){let Z=new _n(N.map(Tn),!!U),ae=new lt;ae.setAttribute("position",new ot(new Float32Array(q*3),3));let oe=new qn(ae,new Cn({map:F,color:Y,size:e.dotSize||.16,sizeAttenuation:!0,transparent:!0,depthWrite:!1}));oe.frustumCulled=!1,oe.userData.noAO=!0,d.add(oe),I.push({p:oe,path:Z,n:q,speed:z,dir:J.dir,show:J.show,jit:J.jit??.07,u:Array.from({length:q},(ge,Se)=>Se/q),j:Array.from({length:q},()=>[Math.random()-.5,Math.random()-.5])})}G(e.food.main,new he(2.4,1.3,.35),e.food.n||70,1,!1),e.food.cud&&G(e.food.cud,new he(.6,2.2,.5),26,1.6,!1);for(let N of e.flows||[])G(N.pts,N.color,N.n,N.speed,!1,N);let X={yaw:e.camYaw||0,yaw0:e.camYaw||0,pitch:.3,dist:16,user:!1,sun:.2,depth:0,depthT:0};for(let N in p)for(let Y of p[N].mats)Y.userData.base=Y.color.clone(),Y.transparent=!0;p.kulit.mats.push(...m);let w={};for(let N in p)w[N]=0;let S={kulit:1,otot:1,rangka:1},D=0,A=0,k=Tn(e.camTarget),O={pts:{visible:!0}},H=N=>N==="kulit"||N==="otot"||N==="rangka";return{scene:t,camera:s,layerMeshes:f,state:X,waterFlow:O,sugarFlow:O,spec:e,vitals:e.vitals,update(N,Y,q,z){X.user||(X.yaw=X.yaw0+.35*Math.sin(Y*.4));let U=Math.cos(X.pitch),J=Math.sin(X.pitch);s.position.set(k.x+Math.sin(X.yaw)*U*X.dist,k.y+J*X.dist,k.z+Math.cos(X.yaw)*U*X.dist),s.lookAt(k),X.depth+=(X.depthT-X.depth)*Math.min(1,N*6);let Z=X.depth;S.kulit=1-wt(.1,.28,Z),S.otot=1-wt(.4,.55,Z),S.rangka=1-.72*wt(.78,.95,Z);for(let be of["kulit","otot","rangka"]){let ie=S[be];for(let pe of p[be].mats)pe.opacity=ie,pe.depthWrite=ie>.98;for(let pe of p[be].meshes)pe.visible=ie>.02&&(be!=="rangka"||Z>.38),pe.castShadow=ie>.5}g.head.visible=S.kulit>.02;let ae=e.vitals(X.sun);D+=N*ae.bpm/60*nt,A+=N*ae.rr/60*nt;let oe=Math.pow(Math.max(0,Math.sin(D)),6),ge=Math.pow(Math.max(0,Math.sin(D*2-1.1)),8)*.5;x.heart&&x.heart.scale.setScalar(1+.13*oe+.05*ge);let Se=.5+.5*Math.sin(A);(x.lungs||[]).forEach(be=>be.scale.set(1+.05*Se,1+.09*Se,1+.07*Se));for(let be of x.pulse||[]){be.ph=(be.ph||0)+N*be.rate(X.sun)/60*nt;let ie=Math.pow(Math.max(0,Math.sin(be.ph)),4)*be.amp;be.mesh.scale.set(1-ie*.5,1-ie,1-ie*.5)}let Ue=Z>.55;for(let be in p)if(!H(be))for(let ie of p[be].meshes)ie.visible=Z>.4;for(let be of I){if(be.p.visible=Ue&&(!be.show||be.show(X)),!be.p.visible)continue;let ie=be.p.geometry.attributes.position,pe=(.03+.07*X.sun)*be.speed*(be.dir?be.dir(X):1);for(let $=0;$<be.n;$++){be.u[$]=((be.u[$]+pe*N)%1+1)%1;let ye=be.path.getPoint(be.u[$]);ie.setXYZ($,ye.x+be.j[$][0]*be.jit,ye.y+be.j[$][1]*be.jit,ye.z)}ie.needsUpdate=!0}e.onUpdate&&e.onUpdate(X,d,x,N,Y);let Ge=q&&p[q]&&!H(q);for(let be in p){let ie=Ge&&!H(be)&&q!==be?1:0;w[be]+=(ie-w[be])*Math.min(1,N*8);let pe=q===be?.16:z===be?.08:0;for(let $ of p[be].mats)H(be)||($.opacity=1-.8*w[be],$.depthWrite=w[be]<.05),$.emissive&&$.userData.base&&$.emissive.copy($.userData.base).multiplyScalar(pe)}}}}function Tr(i){let e=[];for(let a of i.skull)e.push(ke(a[0],a[1],a[2]||18));for(let a of i.jaw||[])e.push(dt(a[0],a[1],a[2],a[3]));let t=new _n(i.spine.map(Tn));for(let a=0;a<i.nV;a++){let r=t.getPoint(a/(i.nV-1));e.push(ke([i.vr*1.2,i.vr,i.vr],[r.x,r.y,r.z],8))}if(i.tail){let a=new _n(i.tail.map(Tn));for(let r=1;r<i.nT;r++){let o=a.getPoint(r/i.nT),l=i.tr*(1-r/i.nT*.6);e.push(ke([l,l,l],[o.x,o.y,o.z],7))}}let n=i.ribs;for(let a=0;a<n.n;a++)for(let r of[1,-1]){let o=n.x0-a*n.dx,l=1-.38*Math.abs(a-n.n*.32)/n.n,c=n.cy,u=n.hh,h=n.hw,d=new _n([Tn([o,c+u*.82,r*h*.15]),Tn([o,c+u*.42*l,r*h*.88*l]),Tn([o,c-u*.2*l,r*h*l]),Tn([o,c-u*.78*l,r*h*.62*l]),Tn([o,c-u*l,r*h*.1])]);e.push(new mi(d,10,n.t||.045,5,!1))}i.sternum&&e.push(dt(i.sternum[0],i.sternum[1],i.sternum[2],i.sternum[2]));let s=i.br||[.11,.09,.07,.05];for(let a of[1,-1]){let r=o=>[o[0],o[1],o[2]*a];i.scap&&e.push(ke(i.scap[0],r(i.scap[1]),10,[0,0,.3]));for(let o of i.front){let[l,c,u,h]=o.map(r);e.push(dt(l,c,s[0],s[1]),dt(c,u,s[1],s[2]),dt(u,h,s[2],s[3]),ke([s[0]*1.35,s[0]*1.35,s[0]*1.35],l,8),ke([s[1]*1.3,s[1]*1.3,s[1]*1.3],c,8))}for(let o of i.hind){let[l,c,u,h]=o.map(r);e.push(dt(l,c,s[0]*1.25,s[1]),dt(c,u,s[1],s[2]),dt(u,h,s[2],s[3]),ke([s[0]*1.5,s[0]*1.5,s[0]*1.5],l,8),ke([s[1]*1.3,s[1]*1.3,s[1]*1.3],c,8))}}return i.pelvis&&e.push(ke(i.pelvis[0],i.pelvis[1],12,i.pelvis[2])),st(e)}function Er(i,e){let t=ke(i,[0,0,0],40),n=t.attributes.position,s=t.attributes.normal,a=1/i[0];for(let r=0;r<n.count;r++){let o=n.getX(r)*a*.5,l=n.getY(r)*a*.5,c=n.getZ(r)*a*.5,u=(Math.sin(o*11)*Math.sin(l*9+1)*Math.sin(c*12)*.045+Math.sin(o*20+c*17)*.015)*i[0]*2;n.setXYZ(r,n.getX(r)+s.getX(r)*u,n.getY(r)+s.getY(r)*u,n.getZ(r)+s.getZ(r)*u)}return t.computeVertexNormals(),st([t,ke(e[0],e[1],14)])}var eg=[3,.85,0],tg=[-2.6,.2,0],ng=[[1.75,-.3,.58],[1.75,-.3,-.58],[-1.7,-.1,.65],[-1.7,-.1,-.65]],Lf=[[-2.6,.2,0],[-3.4,.45,.05],[-4.1,1.1,.1],[-4.4,2,0],[-4.3,2.5,-.1]],kf=[[0,-.62,-.1],[-.45,-.72,.4],[-.9,-.6,-.4],[-1.2,-.74,.4],[-1.5,-.55,-.35],[-1.7,-.3,.2],[-2,-.15,0],[-2.7,-.1,0]],ig=null;function X_(){return ig||(ig=Ma("#b4793c",(i,e,t)=>{for(let n=0;n<18;n++){let s=n/18*e+t()*8,a=5+t()*9;i.fillStyle="rgba(48,28,14,0.55)",i.beginPath(),i.moveTo(s,0);for(let r=0;r<=e;r+=16)i.lineTo(s+Math.sin(r*.06+n)*6,r);for(let r=e;r>=0;r-=16)i.lineTo(s+a+Math.sin(r*.06+n)*6,r);i.fill()}},11))}var sg={id:"kucing",groundY:-1.6,worldScale:.1,hitR:.75,hitY:.35,pivots:{head:eg,tail:tg,legs:ng},walk:{speed:.9,step:5.5,swing:.6,radius:6,keep:1.6,tailA:.28},camTarget:[.2,.1,0],bg:["#2a3f52","#121f2b"],vitals:i=>({bpm:Math.round(sn(140,220,i)),rr:Math.round(sn(24,48,i))}),bodyParts(i){vs(i);let e=st([ke([2.55,1.12,.95],[0,0,0],28),ke([1.3,1.15,.95],[1.35,-.05,0]),ke([1.2,1.15,1.02],[-1.55,-.05,0]),ke([2.1,.9,.9],[0,-.3,0]),dt([2.2,.3,0],[3,.85,0],.78,.62)]),t=[1,-1].map(r=>Sr(.36,.7,[3.4,1.85,r*.52],[r*.28,Math.PI/4,0],4)),n=si(st([ke([.85,.78,.82],[3.55,1.1,0]),ke([.42,.3,.42],[4.3,.88,0]),ke([.45,.38,.7],[3.8,.85,0]),...t]),eg),s=si(st([bn(Lf,.2,28,8),ke([.2,.2,.2],Lf[4],10)]),tg),a=ng.map((r,o)=>o<2?st([dt([0,0,0],[.1,-.7,0],.36,.27),dt([.1,-.7,0],[.05,-1.28,0],.25,.2),ke([.34,.17,.26],[.2,-1.34,0],14)]):st([ke([.6,.85,.52],[0,-.45,0]),dt([0,-.8,0],[-.2,-1.28,0],.3,.2),ke([.36,.17,.27],[-.05,-1.42,0],14)]));return vs(1),{body:e,head:n,tail:s,legs:a}},skinMats(){return _s(X_())},face(i,e){let t=js(i.head,e,{p:[4.18,1.27,.4],r:.2,scale:[.7,1,1],iris:[.5,.72,.18],pupil:"slit"}),n=new Ke({color:14256778,roughness:.5,transparent:!0}),s=new Gs({color:16117734,transparent:!0,opacity:.9}),a=new ve(ke([.09,.07,.12],[4.7-e[0],.98-e[1],0],10),n);i.head.add(a);for(let r of[1,-1]){let o=[];for(let l=0;l<3;l++){let c=(l-1)*.22;o.push(Tn([4.25-e[0],.9-e[1],r*.25]),Tn([4.45-e[0],.92-e[1]+c,r*1.2]))}i.head.add(new oa(new lt().setFromPoints(o),s))}return t.concat([n,s])},bones(){return Tr({skull:[[[.7,.58,.6],[3.55,1.1,0],20]],jaw:[[[3.9,1,0],[4.3,.88,0],.3,.2],[[3.7,.66,0],[4.25,.68,0],.16,.12]],spine:[[3,.85,0],[2,.78,0],[0,.7,0],[-1.8,.55,0],[-2.6,.25,0]],nV:26,vr:.13,tail:Lf,nT:19,tr:.14,ribs:{n:13,x0:2.1,dx:.2,cy:-.08,hh:.87,hw:.85},sternum:[[2,-.95,0],[.1,-.95,0],.07],scap:[[.12,.5,.26],[1.95,.3,.4]],pelvis:[[.28,.5,.75],[-1.85,.3,0],[0,0,.2]],front:[[[1.75,-.3,.58],[1.85,-.95,.55],[1.8,-1.4,.5],[2,-1.62,.48]]],hind:[[[-1.7,-.1,.65],[-1.45,-.8,.62],[-1.85,-1.3,.58],[-1.7,-1.62,.56]]]})},organs(i,e){i("otak",Er([.5,.38,.4],[[.2,.17,.2],[-.42,-.14,0]]),e([.86,.64,.66],.5,.3),[3.5,1.3,0]);let t=[1.35,-.3,.05],n=i("jantung",si(st([ke([.34,.42,.3],t,24),ke([.27,.3,.26],[1.47,-.18,-.1],20),dt([1.42,0,0],[1.55,.4,0],.1,.08),dt([1.3,0,.1],[1.15,.38,.12],.08,.07)]),t),e([.62,.07,.1],.3,.8),t),s=[1,-1].map(a=>{let r=[1.3,.42,a*.5];return i("paru",si(st([ke([.72,.5,.32],r,24,[0,0,.12]),ke([.36,.34,.28],[.85,.3,a*.46],16)]),r),e([.88,.45,.5],.55,.2),r)});i("paru",st([bn([[3,.72,0],[2.1,.5,0],[1.6,.3,0]],.09,16,8),dt([1.6,.3,0],[1.4,.25,.5],.07,.05),dt([1.6,.3,0],[1.4,.25,-.5],.07,.05)]),e([.88,.86,.82],.4,.4)),i("hati",st([ke([.45,.42,.58],[.72,-.42,.12],22),ke([.35,.3,.4],[.5,-.58,-.22],18)]),e([.4,.1,.08],.35,.7)),i("lambung",st([ke([.5,.36,.34],[.05,-.5,-.32],22,[0,0,.5]),bn([[2.9,.7,0],[1.9,.18,-.05],[.9,-.3,-.25],[.3,-.4,-.3]],.07,24,8)]),e([.9,.52,.48],.4,.6)),i("usus",st([bn(kf.slice(0,6),.14,150,8),bn(kf.slice(5),.17,30,8)]),e([.94,.68,.64],.45,.6));for(let a of[1,-1])i("ginjal",ke([.3,.19,.2],[-.65,.4,a*.28],16,[0,0,.3]),e([.5,.14,.1],.35,.7));return i("kandung",ke([.3,.28,.28],[-1.78,-.62,0],18),e([.95,.85,.5],.25,.9)),{heart:n,lungs:s}},food:{main:[[4.35,.82,0],[3.4,.6,0],[2.3,.25,0],[1,-.3,-.15],[.1,-.5,-.3],...kf]}};var If=null;function V_(){if(If)return If;let i=ts(256,(n,s)=>{let a=Ct(5);n.fillStyle="#b89478",n.fillRect(0,0,s,s);for(let r=0;r<2600;r++){let o=a()*s,l=a()*s,c=1.5+a()*2.5;n.fillStyle=a()<.5?"rgba(120,80,55,0.55)":"rgba(230,200,170,0.4)",n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}},[3,3]),e=ts(256,(n,s)=>{n.fillStyle="#c49a86",n.fillRect(0,0,s,s),n.strokeStyle="rgba(90,50,40,0.75)",n.lineWidth=3;let a=16,r=a*Math.sqrt(3);for(let o=-1;o<s/r*2+2;o++)for(let l=-1;l<s/(a*3)+2;l++){let c=l*a*3+(o%2?a*1.5:0),u=o*r/2;n.beginPath();for(let h=0;h<=6;h++){let d=h*Math.PI/3;n.lineTo(c+Math.cos(d)*a,u+Math.sin(d)*a)}n.stroke()}},[2,2]),t=ts(256,(n,s)=>{n.fillStyle="#a88470",n.fillRect(0,0,s,s);for(let a=0;a<22;a++){let r=a/22*s;n.fillStyle="rgba(70,40,30,0.55)",n.fillRect(r,0,3,s),n.fillStyle="rgba(240,210,190,0.35)",n.fillRect(r+4,0,2,s)}},[2,1]);return If={pap:i,hon:e,lea:t}}function th(i,e,t,n){let s=m=>[m[0]*t.sx+(t.ox||0),m[1]*t.sy+(t.oy||0),m[2]*t.sz],a=t.k,r=(m,y,_,v)=>ke(m.map(T=>T*a),s(y),_,v),o=(m,y,_,v)=>dt(s(m),s(y),_*a,v*a),l=(m,y,_,v)=>bn(m.map(s),y*a,_,v),c=V_();i("otak",Er(n.brain.r,n.brain.cb),e([.86,.64,.66],.5,.3),n.brain.p);let u=s([1.75,-.15,.1]),h=i("jantung",si(st([r([.45,.55,.4],[1.75,-.15,.1],24),r([.35,.4,.34],[1.95,0,-.12],20),o([1.85,.3,0],[1.9,.95,0],.13,.11),o([1.7,.3,.12],[1.5,.85,.15],.1,.09)]),u),e([.62,.07,.1],.3,.8),u),d=[1,-1].map(m=>{let y=s([1.6,.8,m*.6]);return i("paru",si(st([r([1,.6,.42],[1.6,.8,m*.6],24,[0,0,.1]),r([.5,.45,.35],[.9,.6,m*.55],16)]),y),e([.88,.45,.5],.55,.2),y)}),f=n.neck.map(m=>[m[0],m[1]-.14*a,m[2]]);i("paru",st([bn(f.concat([s([2.6,.95,0]),s([2.1,.9,0])]),.09*a,24,8),o([2.1,.9,0],[1.8,.85,.6],.08,.06),o([2.1,.9,0],[1.8,.85,-.6],.08,.06)]),e([.88,.86,.82],.4,.4)),i("hati",st([r([.62,.55,.36],[1.05,.45,.55],22),r([.42,.38,.28],[.8,.12,.5],18)]),e([.4,.1,.08],.35,.7));let p=s([-.55,.25,-.42]),b=i("rumen",si(st([r([1.6,.62,.72],[-.5,.75,-.42],26),r([1.55,.68,.75],[-.6,-.25,-.42],26)]),p),e([.85,.7,.6],.6,.2,c.pap),p);i("rumen",bn(n.neck.concat([s([2.6,.75,0]),s([1.7,.55,-.15]),s([1,.5,-.3])]),.075*a,30,8),e([.9,.55,.5],.4,.5)),i("retikulum",r([.52,.5,.45],[1.15,-.5,-.15],22),e([.9,.75,.7],.55,.25,c.hon)),i("omasum",r([.48,.46,.42],[.72,-.4,.6],22),e([.85,.7,.62],.55,.25,c.lea)),i("abomasum",r([.9,.33,.35],[.05,-.95,.45],22,[0,0,-.25]),e([.88,.5,.48],.4,.6)),i("usus",l(ag,.13,200,8),e([.94,.68,.64],.45,.6));for(let m of[1,-1])if(n.lobedKidney){let y=[],_=Ct(m>0?7:8);for(let v=0;v<9;v++)y.push(r([.14,.11,.11],[-.9+(_()-.5)*.45,1.05+(_()-.5)*.25,m*.42+(_()-.5)*.15],10));i("ginjal",st(y),e([.5,.14,.1],.35,.7))}else i("ginjal",r([.34,.2,.22],[-.9,1.05,m*.42],16,[0,0,.3]),e([.5,.14,.1],.35,.7));i("kandung",r([.3,.28,.28],[-2.5,-.35,0],18),e([.95,.85,.5],.25,.9));let g=[r([.55,.36,.5],[-1.4,-.95,0],20)];for(let m of n.teats)g.push(o([-1.4+m[0],-1.05,m[1]],[-1.4+m[0],-1.5,m[1]*1.1],.06,.05));return i("ambing",st(g),e([.96,.78,.74],.5,.3)),{heart:h,lungs:d,pulse:[{mesh:b,rate:m=>1.5+1.5*m,amp:.07}]}}var ag=[[-.8,-.75,.5],[-1.2,-.95,.75],[-1.6,-.6,.3],[-1.2,-.35,.75],[-1.8,-.1,.4],[-1.4,.2,.75],[-2.1,.3,.45],[-2.5,.6,.15],[-3.1,.95,0]];function nh(i,e){let t=u=>[u[0]*i.sx+(i.ox||0),u[1]*i.sy+(i.oy||0),u[2]*i.sz],n=[[2.6,.75,0],[1.7,.55,-.15],[1,.5,-.3]].map(t),s=[[.2,.9,-.5],[-1.2,.9,-.45],[-1.6,.1,-.4],[-.8,-.5,-.45],[.4,-.4,-.4]].map(t),a=t([1.15,-.45,-.15]),r=e.concat(n,s,[a,t([.72,-.4,.6]),t([.6,-.8,.45]),t([-.6,-.95,.45])],ag.map(t)),o=n.slice().reverse(),l=e.slice().reverse(),c=[a].concat(o,l,[e[0],e[0]],e,n,[s[0],t([.5,.2,-.4]),a]);return{main:r,cud:c,n:80}}var rg=[2.2,.65,0],og=[-3.15,1.1,0],lg=[[1.85,-.35,.62],[1.85,-.35,-.62],[-2,.05,.68],[-2,.05,-.68]],cg=[[4.95,.6,0],[4.3,.9,0],[3.4,1,0],[2.7,.85,0]],ug={sx:1,sy:1,sz:1,k:1},hg=null;function Y_(){return hg||(hg=Ma("#f1ede4",(i,e,t)=>{i.fillStyle="#141210";for(let n=0;n<7;n++){let s=t()*e,a=t()*e,r=22+t()*34;for(let o=0;o<14;o++){let l=t()*Math.PI*2,c=t()*r*.8;i.beginPath(),i.ellipse(s+Math.cos(l)*c,a+Math.sin(l)*c,r*(.4+t()*.5),r*(.3+t()*.4),t()*3,0,Math.PI*2),i.fill();for(let u of[-e,0,e])for(let h of[-e,0,e])(u||h)&&(i.beginPath(),i.ellipse(s+Math.cos(l)*c+u,a+Math.sin(l)*c+h,r*.5,r*.35,0,0,Math.PI*2),i.fill())}}},31,[1.5,1.5],4e3))}var dg={id:"sapi",groundY:-2.45,worldScale:.42,hitR:1.4,hitY:.9,muscleShrink:.86,pivots:{head:rg,tail:og,legs:lg},walk:{speed:.7,step:3.4,swing:.32,radius:6,keep:2.6,graze:1.15,tailA:.15,tailF:.9},camTarget:[.9,-.1,0],camYaw:Math.PI,bg:["#3a4a2e","#18210f"],pedR:6.2,dotSize:.2,vitals:i=>({bpm:Math.round(sn(48,96,i)),rr:Math.round(sn(26,60,i))}),bodyParts(i){vs(i);let e=[];for(let o of[.22,-.22])for(let l of[1,-1])e.push(dt([-1.4+o,-1.3,l*.24],[-1.4+o,-1.62,l*.26],.09,.07));let t=st([ke([3,1.3,1.15],[0,.5,0],30),ke([1.45,1.4,1.15],[1.7,.4,0]),ke([1.35,1.35,1.18],[-2,.6,0]),ke([2.5,1.2,1.25],[-.1,.05,0]),ke([.9,.5,.7],[1.9,1.55,0]),ke([.35,.3,.3],[-1.7,1.75,.75]),ke([.35,.3,.3],[-1.7,1.75,-.75]),ke([1,.6,.28],[2.75,.2,0]),ke([.62,.45,.58],[-1.4,-.95,0]),...e]),n=[1,-1].map(o=>ke([.38,.12,.22],[3.72,1.45,o*.78],14,[o*.3,0,.25])),s=si(st([dt([2.2,.65,0],[3.6,1.2,0],.95,.62),ke([.7,.6,.55],[3.9,1.3,0]),dt([4,1.2,0],[4.85,.62,0],.5,.36),ke([.34,.32,.42],[4.98,.55,0]),ke([.35,.2,.4],[3.95,1.85,0]),...n]),rg),a=si(st([bn([[-3.15,1.1,0],[-3.35,.6,0],[-3.4,-.4,0],[-3.35,-1.3,0]],.08,24,6),ke([.14,.38,.14],[-3.35,-1.6,0],10)]),og),r=lg.map((o,l)=>l<2?st([dt([0,0,0],[.08,-1.05,0],.45,.24),dt([.08,-1.05,0],[.05,-1.95,0],.17,.15),ke([.19,.17,.19],[.06,-1.88,0],10)]):st([ke([.78,1.15,.58],[.05,-.45,0]),dt([0,-1,0],[-.35,-1.6,0],.3,.18),dt([-.35,-1.6,0],[-.25,-2.35,0],.16,.15),ke([.19,.17,.19],[-.25,-2.27,0],10)]));return vs(1),{body:t,head:s,tail:a,legs:r}},skinMats(){return _s(Y_(),[.45,.45,.45],.95)},face(i,e){let t=js(i.head,e,{p:[3.98,1.42,.47],r:.17,scale:[1,1,.8],iris:[.2,.12,.07],pupil:"oval",side:!0}),n=new Ke({color:ii(.55,.42,.42),roughness:.35,transparent:!0}),s=new Ke({color:ii(.85,.8,.68),roughness:.45,transparent:!0}),a=new Ke({color:ii(.12,.1,.09),roughness:.6,transparent:!0}),r=new ve(ke([.12,.26,.36],[5.24-e[0],.55-e[1],0],14),n);i.head.add(r);for(let o of[1,-1])i.head.add(new ve(st([dt([3.95-e[0],1.9-e[1],o*.32],[4.05-e[0],2.15-e[1],o*.62],.1,.06),Sr(.06,.2,[4.08-e[0],2.25-e[1],o*.68],[o*-.6,0,-.3],8)]),s));return i.legs.forEach((o,l)=>{let c=l<2?-1.95:-2.35,u=l<2?.05:-.25;for(let h of[.08,-.08]){let d=new ve(new Gt(.1,.13,.17,10),a);d.position.set(u+.03,c-.07,h),o.add(d)}}),t.concat([n,s,a])},bones(){return Tr({skull:[[[.62,.52,.48],[3.9,1.3,0],18]],jaw:[[[4,1.25,0],[4.95,.65,0],.36,.24],[[3.75,.85,0],[4.85,.42,0],.15,.12]],spine:[[3.55,1.1,0],[2.6,.95,0],[1.9,1.45,0],[0,1.45,0],[-2,1.45,0],[-3.1,1.05,0]],nV:30,vr:.16,tail:[[-3.15,1.05,0],[-3.35,.55,0],[-3.4,-.4,0],[-3.35,-1.3,0]],nT:18,tr:.1,ribs:{n:13,x0:2.3,dx:.21,cy:.3,hh:1.05,hw:1,t:.06},sternum:[[2.3,-.75,0],[.4,-.8,0],.09],scap:[[.15,.75,.35],[2.1,.95,.6]],pelvis:[[.4,.6,.85],[-2,1.1,0],[0,0,.25]],front:[[[1.85,-.35,.62],[1.95,-1.4,.6],[1.9,-2,.58],[1.95,-2.4,.58]]],hind:[[[-2,.6,.68],[-1.75,-.55,.66],[-2.35,-1.6,.62],[-2.25,-2.4,.6]]],br:[.16,.13,.1,.08]})},organs(i,e){return th(i,e,ug,{brain:{r:[.32,.25,.26],cb:[[.13,.11,.13],[-.28,-.08,0]],p:[3.85,1.42,0]},neck:cg,lobedKidney:!0,teats:[[.22,.24],[.22,-.24],[-.22,.24],[-.22,-.24]]})},food:nh(ug,cg)};var fg=[1.75,.55,0],pg=[-2.35,.85,0],mg=[[1.4,-.25,.48],[1.4,-.25,-.48],[-1.5,0,.52],[-1.5,0,-.52]],gg=[[3.66,1.18,0],[3.2,1.45,0],[2.6,1.3,0],[2.1,.85,0]],bg={sx:.72,sy:.7,sz:.73,oy:.04,k:.72},xg=null,yg=null,Ff=()=>xg||(xg=Ma("#ece3d2",(i,e,t)=>{for(let n=0;n<4;n++)i.fillStyle="rgba(150,110,70,0.25)",i.beginPath(),i.ellipse(t()*e,t()*e,30+t()*30,20+t()*20,t()*3,0,Math.PI*2),i.fill()},41,[2,2],6500)),$_=()=>yg||(yg=Ma("#4a3020",(i,e,t)=>{for(let n=0;n<6;n++)i.fillStyle="rgba(20,12,8,0.4)",i.beginPath(),i.ellipse(t()*e,t()*e,40,25,t()*3,0,Math.PI*2),i.fill()},42,[2,2],6e3)),Mg={id:"kambing",groundY:-2,worldScale:.24,hitR:.75,hitY:.5,pivots:{head:fg,tail:pg,legs:mg},walk:{speed:.8,step:4.6,swing:.42,radius:5,keep:2,graze:1,tailA:.35,tailF:3},camTarget:[.4,.3,0],camYaw:Math.PI,bg:["#40382a","#1c1810"],pedR:5.2,dotSize:.15,vitals:i=>({bpm:Math.round(sn(70,120,i)),rr:Math.round(sn(15,40,i))}),bodyParts(i){vs(i);let e=st([ke([2.2,1,.82],[0,.35,0],28),ke([1.1,1.05,.85],[1.25,.25,0]),ke([1,1,.86],[-1.45,.4,0]),ke([1.8,.9,.92],[0,.05,0]),ke([.42,.32,.4],[-1.05,-.6,0]),dt([-1.05,-.8,.17],[-1,-1.05,.2],.07,.05),dt([-1.05,-.8,-.17],[-1,-1.05,-.2],.07,.05)]),t=[1,-1].map(r=>ke([.13,.58,.07],[2.88,1.32,r*.5],16,[r*.35,0,.2])),n=si(st([dt([1.75,.55,0],[2.65,1.5,0],.62,.4),ke([.5,.45,.4],[2.95,1.75,0]),dt([3.05,1.7,0],[3.62,1.2,0],.32,.22),ke([.25,.18,.24],[3.25,1.62,0]),ke([.2,.18,.22],[3.68,1.12,0]),Sr(.13,.55,[3.42,.72,0],[0,0,Math.PI]),...t]),fg),s=si(st([bn([[-2.35,.85,0],[-2.6,1.1,0],[-2.7,1.35,0]],.09,12,6),ke([.1,.16,.1],[-2.72,1.42,0],8)]),pg),a=mg.map((r,o)=>o<2?st([dt([0,0,0],[.05,-.75,0],.3,.15),dt([.05,-.75,0],[.05,-1.6,0],.11,.09),ke([.12,.11,.12],[.05,-1.55,0],10)]):st([ke([.5,.75,.4],[.02,-.35,0]),dt([0,-.7,0],[-.3,-1.2,0],.2,.12),dt([-.3,-1.2,0],[-.2,-1.85,0],.1,.09),ke([.12,.11,.12],[-.2,-1.8,0],10)]));return vs(1),{body:e,head:n,tail:s,legs:a}},skinMats(){return{body:_s(Ff(),[1,.95,.85],.95),head:_s($_(),[.9,.7,.5],.9),tail:_s(Ff()),legs:_s(Ff())}},face(i,e){let t=js(i.head,e,{p:[3.04,1.86,.35],r:.13,scale:[1,1,.8],iris:[.85,.62,.15],pupil:"bar",side:!0}),n=new Ke({color:ii(.32,.27,.22),roughness:.5,transparent:!0}),s=new Ke({color:ii(.15,.12,.1),roughness:.6,transparent:!0}),a=new Ke({color:ii(.2,.15,.13),roughness:.4,transparent:!0});for(let r of[1,-1])i.head.add(new ve(st([bn([[2.85-e[0],2.05-e[1],r*.15],[2.65-e[0],2.5-e[1],r*.22],[2.3-e[0],2.62-e[1],r*.3],[2.1-e[0],2.45-e[1],r*.33]],.07,16,8),ke([.075,.075,.075],[2.85-e[0],2.05-e[1],r*.15],8)]),n));return i.head.add(new ve(ke([.06,.12,.17],[3.86-e[0],1.13-e[1],0],10),a)),i.legs.forEach((r,o)=>{let l=o<2?-1.6:-1.85,c=o<2?.05:-.2;for(let u of[.05,-.05]){let h=new ve(new Gt(.06,.08,.15,8),s);h.position.set(c+.02,l-.08,u),r.add(h)}}),t.concat([n,s,a])},bones(){return Tr({skull:[[[.45,.4,.35],[2.95,1.75,0],18]],jaw:[[[3,1.65,0],[3.62,1.15,0],.24,.15],[[2.85,1.35,0],[3.55,1,0],.1,.08]],spine:[[2.8,1.6,0],[2.2,1.1,0],[1.5,1.15,0],[0,1.15,0],[-1.5,1.15,0],[-2.35,.85,0]],nV:28,vr:.11,tail:[[-2.35,.85,0],[-2.6,1.1,0],[-2.7,1.35,0]],nT:6,tr:.07,ribs:{n:13,x0:1.75,dx:.16,cy:.25,hh:.82,hw:.78,t:.045},sternum:[[1.75,-.55,0],[.2,-.6,0],.06],scap:[[.1,.55,.25],[1.55,.75,.45]],pelvis:[[.3,.45,.6],[-1.5,.85,0],[0,0,.25]],front:[[[1.4,-.25,.48],[1.5,-.95,.47],[1.45,-1.5,.46],[1.5,-1.95,.46]]],hind:[[[-1.5,.45,.52],[-1.3,-.4,.5],[-1.8,-1.25,.48],[-1.7,-1.95,.47]]],br:[.11,.09,.07,.055]})},organs(i,e){return th(i,e,bg,{brain:{r:[.26,.2,.21],cb:[[.1,.09,.1],[-.22,-.06,0]],p:[2.92,1.82,0]},neck:gg,lobedKidney:!1,teats:[[0,.24],[0,-.24]]})},food:nh(bg,gg)};var vg={mas:{name:"Ikan mas",sci:"Cyprinus carpio",family:"Cyprinidae",fact:"Ikan mas sudah dibudidayakan di Indonesia sejak lama di kolam dan sawah (minapadi). Ikan mas tidak punya gigi di mulut, tetapi punya gigi di tenggorokan (gigi faring) untuk menggerus makanan.",P:{id:"mas",H:1,W:.6,pm:.55,shape:.75,belly:.95,tailMin:.22,blunt:.35,arch:1,back:"#6e5a1c",side:"#d9a23a",belly2:"#f3e2a8",fin:"#c9883a",scale:22,scaleShine:!0,caudal:"forked",dorsal:[[.42,.72,.55,.3]],anal:[[.3,.38,.5]],barbels:[[.05,-.02,.12,[.1,-.25,.15]],[.25,-.08,.2,[0,-.3,.1]]],barbelCol:[.55,.4,.2],twoChamber:!0,iris:[.85,.68,.2],eyeR:.17,neutral:.5,seed:3},world:{count:4,school:!0,depth:.5,scale:.09,speed:.6},notes:{kulit:"Sisik ikan mas besar dan bertumpuk seperti genteng. Ikan mas punya dua pasang sungut pendek di sekitar mulut.",rangka:"Ikan mas punya banyak duri halus (tulang kecil di antara otot), itulah sebabnya makan ikan mas harus hati-hati.",gelembung:"Gelembung renang ikan mas terdiri dari dua ruang dan tersambung ke saluran pencernaan, jadi ikan mas bisa mengisi atau membuang udara lewat mulut."}},nila:{name:"Ikan nila",sci:"Oreochromis niloticus",family:"Cichlidae",fact:"Nila berasal dari Afrika, termasuk Sungai Nil, dan kini menjadi salah satu ikan budidaya paling populer di Indonesia. Induk betina mengerami telur dan menjaga anaknya di dalam mulut.",P:{id:"nila",H:1.05,W:.48,pm:.55,shape:.8,belly:.9,tailMin:.25,blunt:.32,arch:1.2,back:"#3d4a52",side:"#8a989e",belly2:"#dde3e4",fin:"#a85a55",scale:20,bars:8,caudal:"truncate",dorsal:[[.3,.78,.6,.15]],anal:[[.25,.4,.55]],iris:[.75,.6,.25],eyeR:.16,neutral:.5,seed:4},world:{count:4,school:!0,depth:.55,scale:.08,speed:.65},notes:{kulit:"Tubuh nila bergaris-garis tegak samar, dan sirip ekornya bergaris. Sirip punggungnya panjang dengan bagian depan berupa duri keras.",gelembung:"Gelembung renang nila tertutup (tidak tersambung ke saluran pencernaan). Gasnya diatur lewat pembuluh darah khusus."}},lele:{name:"Ikan lele",sci:"Clarias sp.",family:"Clariidae",fact:"Lele hidup di dasar perairan dan aktif mencari makan di malam hari dengan mengandalkan sungutnya. Lele bisa bertahan di air yang miskin oksigen karena bisa menghirup udara langsung dari permukaan.",P:{id:"lele",H:.6,W:.62,headW:.5,pm:.75,shape:.55,belly:.85,tailMin:.35,blunt:.65,arch:.3,back:"#2a2724",side:"#4a4540",belly2:"#cfc4b2",fin:"#3a3530",scale:0,caudal:"round",cauH:.75,dorsal:[[.1,.66,.32,.05]],anal:[[.08,.5,.3,.05]],pecT:.78,pecL:.7,finLow:.6,barbels:[[.02,.02,.15,[.3,.05,1.3],.03],[.05,-.1,.1,[.1,-.3,.9]],[.15,-.15,.18,[0,-.4,.8]],[.2,-.12,.08,[-.1,-.45,.5]]],labirin:"pohon",iris:[.3,.24,.18],eyeR:.1,eyeY:.45,eyeT:.89,neutral:.42,seed:5},world:{count:3,school:!1,depth:.05,bedOff:.22,scale:.1,speed:.45,amp:.25,freq:5},notes:{kulit:"Lele tidak bersisik. Kulitnya licin karena berlendir. Lele punya empat pasang sungut peraba yang sangat peka.",rangka:"Sirip dada lele punya duri keras (patil) yang bisa melukai tangan. Hati-hati saat memegang lele.",labirin:"Pada lele organ ini disebut organ arborescent, berbentuk bercabang seperti pohon, terletak di atas insang."},extraLayer:{id:"labirin",name:"Organ arborescent",sci:"Alat napas tambahan",ui:"#e09098",short:"Alat untuk menghirup udara.",what:"Jaringan bercabang seperti pohon kecil di rongga di atas insang, kaya pembuluh darah.",fn:"Menyerap oksigen dari udara yang dihirup lele di permukaan air, sehingga lele bertahan di air yang kekurangan oksigen.",fact:"Karena alat ini, lele bisa hidup di kolam padat dan berlumpur, dan bisa bertahan lama di luar air selama tubuhnya tetap lembap."}},gurami:{name:"Ikan gurami",sci:"Osphronemus goramy",family:"Osphronemidae",fact:"Gurami adalah ikan asli Indonesia dan Asia Tenggara. Gurami jantan membangun sarang dari serat tanaman untuk telur-telurnya. Pertumbuhannya lambat, jadi harganya relatif mahal.",P:{id:"gurami",H:1.35,W:.42,pm:.5,shape:.85,belly:1.05,tailMin:.28,blunt:.3,arch:1.4,mouthUp:.4,back:"#5d564a",side:"#b4a48c",belly2:"#e8dfcc",fin:"#7d7060",scale:14,caudal:"round",cauH:1.1,dorsal:[[.28,.55,.55,.2]],anal:[[.1,.58,.6,.1]],thread:!0,pelT:.6,labirin:"labirin",iris:[.8,.25,.15],eyeR:.15,neutral:.5,seed:6},world:{count:3,school:!0,depth:.6,scale:.11,speed:.45},notes:{kulit:"Tubuh gurami pipih dan tinggi. Sirip perutnya memanjang seperti benang dan dipakai sebagai alat peraba.",labirin:"Gurami punya organ labirin, lipatan-lipatan tulang tipis berlapis selaput kaya pembuluh darah, untuk menyerap oksigen dari udara."},extraLayer:{id:"labirin",name:"Organ labirin",sci:"Alat napas tambahan",ui:"#e09098",short:"Alat untuk menghirup udara.",what:"Rongga di atas insang berisi lipatan berliku seperti labirin, dilapisi selaput tipis yang kaya pembuluh darah.",fn:"Menyerap oksigen dari udara yang dihirup di permukaan air.",fact:"Gurami dewasa perlu naik ke permukaan untuk mengambil udara. Kalau tidak bisa mencapai permukaan, gurami bisa lemas walaupun airnya cukup oksigen."}},arwana:{name:"Arwana",sci:"Scleropages formosus",family:"Osteoglossidae",fact:"Arwana Asia hidup di sungai dan rawa Kalimantan dan Sumatra. Spesies ini dilindungi dan terdaftar di CITES Apendiks I, sehingga perdagangannya hanya boleh dari hasil penangkaran resmi. Jantan mengerami telur di dalam mulutnya.",P:{id:"arwana",H:.72,W:.4,pm:.62,shape:.7,belly:1,tailMin:.3,blunt:.3,arch:.3,mouthUp:.6,back:"#3e5248",side:"#d8c48a",belly2:"#f3e7c6",fin:"#b84a2e",scale:44,scaleEdge:"rgba(170,40,25,0.75)",scaleShine:!0,metal:.2,caudal:"round",dorsal:[[.1,.3,.5,.1]],anal:[[.08,.33,.55,.1]],pecT:.76,pecL:1.3,barbels:[[.1,-.25,.06,[.45,.08,.03],.03]],barbelCol:[.6,.5,.3],iris:[.85,.7,.3],eyeR:.2,eyeY:.4,neutral:.52,seed:7},world:{count:1,school:!1,depth:.85,scale:.14,speed:.7},notes:{kulit:"Sisik arwana sangat besar dan mengilap. Sepasang sungut di dagu membantu merasakan mangsa di permukaan air.",otak:"Mulut arwana menghadap ke atas, cocok untuk menyambar serangga dan ikan kecil di permukaan air. Arwana bahkan bisa melompat keluar air untuk menangkap mangsa."}}},Q_=[{id:"kulit",name:"Kulit dan sisik",sci:"Integumen",ui:"#d8c48a",short:"Pelindung tubuh, gurat sisi.",what:"Kulit ikan dilapisi lendir dan, pada kebanyakan ikan, sisik yang bertumpuk seperti genteng. Di sepanjang sisi tubuh ada garis titik-titik yang disebut gurat sisi.",fn:"Lendir dan sisik melindungi dari kuman dan luka. Gurat sisi adalah indra yang merasakan getaran dan arus air, sehingga ikan bisa merasakan gerakan di sekitarnya, bahkan di air keruh.",fact:"Sisik bertambah besar seiring umur dan membentuk lingkaran pertumbuhan, mirip cincin tahun pada kayu. Peneliti bisa memperkirakan umur ikan dari lingkaran ini."},{id:"otot",name:"Otot",sci:"Miomer",ui:"#e9b9a6",short:"Otot berlapis berbentuk zig-zag.",what:"Otot ikan tersusun dalam segmen-segmen berbentuk zig-zag yang disebut miomer. Itulah sebabnya daging ikan matang mudah terlepas berlapis-lapis.",fn:"Miomer di kedua sisi tubuh berkontraksi bergantian, membuat tubuh dan ekor meliuk sehingga ikan terdorong maju.",fact:"Daging ikan kebanyakan berwarna putih karena didominasi otot untuk gerakan cepat yang singkat. Ikan yang berenang jauh terus-menerus punya lebih banyak otot merah."},{id:"rangka",name:"Rangka",sci:"Sistem rangka",ui:"#eae0c4",short:"Tulang belakang, rusuk, dan jari-jari sirip.",what:"Rangka ikan bertulang sejati terdiri dari tengkorak, tulang belakang yang panjang, tulang rusuk, dan jari-jari yang menegakkan sirip.",fn:"Menopang tubuh, tempat melekatnya otot, dan menegakkan sirip untuk mengarahkan gerak.",fact:"Sirip punya tugas masing-masing: sirip ekor mendorong, sirip punggung dan dubur menjaga tubuh tetap tegak, sirip dada dan perut untuk mengerem dan berbelok."},{id:"otak",name:"Otak dan mata",sci:"Sistem saraf",ui:"#e8a8b0",short:"Pusat kendali dan indra.",what:"Otak ikan kecil dibanding tubuhnya. Bagian yang mengolah penglihatan (lobus optik) relatif besar. Mata ikan berada di sisi kepala.",fn:"Mengolah informasi dari mata, gurat sisi, penciuman, dan sungut, lalu mengatur gerak.",fact:"Ikan tidak punya kelopak mata. Matanya selalu dibasahi air."},{id:"insang",name:"Insang",sci:"Sistem pernapasan",ui:"#e05060",short:"Penyerap oksigen dari air.",what:"Di bawah tutup insang (operkulum) ada empat lengkung insang di tiap sisi. Tiap lengkung punya ratusan filamen merah, dan tiap filamen punya lipatan tipis (lamela) yang kaya pembuluh darah.",fn:"Air masuk lewat mulut, mengalir melewati filamen, lalu keluar lewat celah tutup insang. Oksigen dari air masuk ke darah, karbon dioksida keluar ke air.",fact:'Di lamela, darah mengalir berlawanan arah dengan air (arus berlawanan). Cara ini membuat ikan bisa mengambil sebagian besar oksigen dari air. Coba matikan "Aliran berlawanan arah" untuk membandingkan.'},{id:"jantung",name:"Jantung",sci:"Sistem peredaran darah",ui:"#e0505e",short:"Pompa darah dua ruang.",what:"Jantung ikan terletak di bawah insang dan hanya punya dua ruang utama: satu serambi dan satu bilik.",fn:"Memompa darah ke insang untuk mengambil oksigen. Dari insang darah langsung mengalir ke seluruh tubuh, lalu kembali ke jantung. Darah hanya sekali melewati jantung dalam satu putaran (peredaran darah tunggal).",fact:"Detak jantung ikan sangat dipengaruhi suhu air. Di air hangat jantung berdetak lebih cepat daripada di air dingin."},{id:"gelembung",name:"Gelembung renang",sci:"Vesica natatoria",ui:"#c8d0d8",short:"Pelampung yang bisa diatur.",what:"Kantong berisi gas di bagian atas rongga tubuh, di bawah tulang belakang.",fn:"Mengatur daya apung. Dengan menambah atau mengurangi gas, ikan bisa melayang di kedalaman tertentu tanpa banyak mengeluarkan tenaga.",fact:"Coba slider Gelembung renang: kalau gasnya kurang, ikan tenggelam. Kalau terlalu banyak, ikan naik. Cari titik pas supaya ikan melayang."},{id:"hati",name:"Hati",sci:"Sistem pencernaan",ui:"#b0463c",short:"Penyimpan cadangan makanan.",what:"Hati berada di bagian depan rongga perut, di belakang jantung.",fn:"Membuat empedu untuk mencerna lemak, menyimpan cadangan energi, dan menetralkan zat berbahaya.",fact:"Minyak hati ikan, misalnya dari ikan kod, kaya vitamin A dan D."},{id:"usus",name:"Saluran pencernaan",sci:"Lambung dan usus",ui:"#f0b8a8",short:"Mencerna dan menyerap makanan.",what:"Makanan masuk lewat mulut, kerongkongan, lambung (pada sebagian ikan), lalu usus yang berkelok sampai ke anus di depan sirip dubur.",fn:"Mencerna makanan dan menyerap nutrisi ke dalam darah.",fact:"Panjang usus sesuai makanannya: ikan pemakan tumbuhan punya usus jauh lebih panjang daripada ikan pemakan daging."},{id:"ginjal",name:"Ginjal",sci:"Sistem ekskresi",ui:"#a04a3a",short:"Pembuang kelebihan air.",what:"Ginjal ikan berupa organ memanjang berwarna merah gelap, tepat di bawah tulang belakang.",fn:"Menyaring darah dan membuang sisa metabolisme.",fact:"Air tawar terus meresap masuk ke tubuh ikan air tawar, sehingga ginjalnya membuang banyak urine yang sangat encer."}],z_=[["Organ apa yang dipakai ikan untuk mengambil oksigen dari air?",["Insang","Paru-paru","Gelembung renang","Hati"],"Insang menyerap oksigen terlarut dari air yang mengalir melewati filamennya."],["Apa fungsi gelembung renang?",["Mengatur daya apung","Mencerna makanan","Memompa darah","Menyaring urine"],"Dengan mengatur isi gas, ikan bisa melayang di kedalaman tertentu tanpa banyak tenaga."],["Berapa ruang utama jantung ikan?",["Dua","Tiga","Empat","Satu"],"Satu serambi dan satu bilik. Darah mengalir dalam peredaran tunggal."],["Gurat sisi pada ikan berfungsi untuk ...",["Merasakan getaran dan arus air","Bernapas","Menyimpan lemak","Menarik pasangan dengan warna"],"Gurat sisi adalah indra yang membuat ikan peka terhadap gerakan di sekitarnya."],["Mengapa arus berlawanan arah di insang menguntungkan?",["Oksigen lebih banyak terserap ke darah","Air lebih cepat keluar","Insang lebih ringan","Ikan tidak perlu membuka mulut"],"Karena darah selalu bertemu air yang lebih kaya oksigen, perpindahan oksigen terjadi di sepanjang lamela."]],J_={mas:["Ikan mas tidak punya gigi di mulut. Di mana gigi pengunyahnya?",["Di tenggorokan (gigi faring)","Di lidah","Di sirip","Tidak punya sama sekali"],"Gigi faring di tenggorokan menggerus makanan sebelum masuk ke saluran pencernaan."],nila:["Apa yang dilakukan induk betina nila dengan telurnya?",["Mengerami di dalam mulut","Menempelkan di daun","Mengubur di pasir lalu pergi","Menitipkan pada ikan lain"],"Nila termasuk pengeram mulut. Anak-anaknya juga berlindung di mulut induk saat ada bahaya."],lele:["Mengapa lele bisa hidup di air yang miskin oksigen?",["Punya organ arborescent untuk menghirup udara","Tidak butuh oksigen","Insangnya sangat besar","Menyimpan oksigen di sisik"],"Organ bercabang di atas insang menyerap oksigen dari udara yang dihirup di permukaan."],gurami:["Sirip perut gurami yang panjang seperti benang berfungsi sebagai ...",["Alat peraba","Alat bernapas","Penyimpan telur","Pelampung"],"Gurami memakai sirip perutnya untuk meraba sekitar, terutama di air yang keruh."],arwana:["Mengapa arwana Asia tidak boleh ditangkap dan diperdagangkan sembarangan?",["Karena dilindungi dan terdaftar di CITES Apendiks I","Karena beracun","Karena hanya hidup di laut","Karena tidak bisa dimakan"],"Arwana Asia terancam punah di alam. Perdagangan hanya boleh dari penangkaran resmi."]},_g=Object.keys(vg);function Sg(i,e){let t=vg[i],n=Q_.map(a=>t.notes[a.id]?Object.assign({},a,{fact:a.fact+" "+t.notes[a.id]}):a);t.extraLayer&&n.splice(5,0,Object.assign({},t.extraLayer,t.notes.labirin?{fact:t.extraLayer.fact+" "+t.notes.labirin}:{}));let s=z_.concat([J_[i]]).map((a,r)=>({id:i+"q"+r,sp:i,q:a[0],o:a[1],a:0,e:a[2]}));return{id:i,name:t.name,layers:n,quiz:s,P:t.P,world:t.world,specimen:{id:i,kind:"fish",name:t.name,short:t.name.toLowerCase(),sci:t.sci,family:t.family,x:-34,z:26,top:0,mkOff:0,promptY:-.5,reach:4,tagNear:0,needSwim:!0,fact:t.fact,hint:"Geser Kedalaman untuk mengupas lapisan. Geser Gelembung renang sampai ikan melayang diam. Nyalakan atau matikan aliran berlawanan arah untuk melihat cara insang bekerja (titik biru air, titik merah darah)."}}}var Vn=7,Yt=Vn/2;function Ag(i,e){let t=Math.log(.5)/Math.log(i.pm),n=Math.pow(Math.max(0,Math.sin(Math.PI*Math.pow(e,t))),i.shape);return n=Math.max(n,i.tailMin*(1-wt(0,.3,e))),e>.86&&(n=Math.max(n,Math.min(n+.3,i.blunt*Math.sqrt(Math.max(0,(1-e)/.14))))),n}var En=(i,e)=>i.arch*Math.sin(Math.PI*e)*i.H*.12+(i.mouthUp||0)*wt(.82,1,e)*.18,xi=(i,e)=>i.H*Ag(i,e),Ss=(i,e)=>i.W*Ag(i,e)*(1+(i.headW||0)*wt(.55,.95,e)),ih=i=>(i+Yt)/Vn,hl=(i,e)=>{let t=ih(e);return En(i,t)+xi(i,t)},Ar=(i,e)=>{let t=ih(e);return En(i,t)-xi(i,t)*i.belly};function j_(i,e=1,t=48,n=24){let s=[],a=[],r=[],o=[];for(let g=0;g<=t;g++){let m=.012+.983*g/t,y=-Yt+m*Vn,_=En(i,m),v=xi(i,m)*e,T=Math.max(.01,Ss(i,m)*e),E=(xi(i,Math.min(1,m+.004))-xi(i,Math.max(0,m-.004)))/(2*.004*Vn)*e;for(let M=0;M<=n;M++){let x=M/n*nt,F=Math.sin(x),I=Math.cos(x),G=F>0?v:v*i.belly;s.push(y,_+G*F,T*I);let X=new C(-E*(F>0?1:i.belly)*Math.abs(F)-E*.6*Math.abs(I),F/Math.max(.01,G),I/T).normalize();a.push(X.x,X.y,X.z),r.push(m,M/n)}}for(let g=0;g<t;g++)for(let m=0;m<n;m++){let y=g*(n+1)+m,_=y+n+1;o.push(y,_,y+1,_,_+1,y+1)}let h=new lt;h.setAttribute("position",new tt(s,3)),h.setAttribute("normal",new tt(a,3)),h.setAttribute("uv",new tt(r,2)),h.setIndex(o);let d=.012,f=.995,p=ke([.05,xi(i,d)*e,Ss(i,d)*e],[-Yt+d*Vn,En(i,d),0],12),b=ke([.08,Math.max(.03,xi(i,f)*e),Math.max(.03,Ss(i,f)*e)],[-Yt+f*Vn,En(i,f),0],12);return st([h,p,b])}function Df(i){return new bo(new Ci(i.map(e=>new me(e[0],e[1]))))}function Tg(i,e,t,n,s,a=.5){let r=[];for(let f=8;f>=0;f--){let p=-Yt+(e+(t-e)*f/8)*Vn;r.push([p,s?hl(i,p)-.06:Ar(i,p)+.06])}let l=-Yt+e*Vn,c=-Yt+t*Vn,u=s?1:-1,h=s?hl(i,l):Ar(i,l),d=s?hl(i,c):Ar(i,c);return r.push([l-a*n,h+u*n*.95]),r.push([(l+c)/2-a*n*.6,(h+d)/2+u*n*.85]),r.push([c-.1,d+u*n*.35]),Df(s?r.reverse():r)}function W_(i){let e=-Yt+.1,t=i.cauH||1,n=En(i,.02),s=[];if(i.caudal==="forked")s.push([e,.22*t],[e-1.35*t,1*t],[e-1.1*t,.75*t],[e-.8*t,.05],[e-.8*t,-.05],[e-1.1*t,-.75*t],[e-1.35*t,-1*t],[e,-.22*t]);else if(i.caudal==="truncate")s.push([e,.22*t],[e-1.1*t,.78*t],[e-1.2*t,0],[e-1.1*t,-.78*t],[e,-.22*t]);else{s.push([e,.25*t]);for(let r=0;r<=12;r++){let o=Math.PI*(.6+.8*r/12);s.push([e-.25*t+Math.cos(o)*1*t,Math.sin(o)*.95*t])}s.push([e,-.25*t])}let a=Df(s);return a.translate(0,n,0),a}function Eg(i,e,t,n,s,a,r){let o=Df([[0,.06],[-t*.55,n*.6],[-t,n*.1],[-t*.8,-n*.4],[-.05,-.08]]);o.rotateX(r*(Math.PI/2-s)),o.rotateY(r*a);let l=-Yt+e*Vn;return o.translate(l,En(i,e)-xi(i,e)*(i.finLow||.45),r*Ss(i,e)*.8),o}function K_(i){let e=[W_(i)];for(let t of i.dorsal||[])e.push(Tg(i,t[0],t[1],t[2],!0,t[3]??.5));for(let t of i.anal||[])e.push(Tg(i,t[0],t[1],t[2],!1,t[3]??.4));for(let t of[1,-1])if(e.push(Eg(i,i.pecT||.74,i.pecL||.9,.42,.35,.5,t)),e.push(Eg(i,i.pelT||.5,i.pelL||.6,.3,.15,.25,t)),i.thread){let n=-Yt+(i.pelT||.5)*Vn,s=Ar(i,n);e.push(bn([[n,s,t*.12],[n-.8,s-.5,t*.25],[n-2,s-.6,t*.3],[n-3.2,s-.3,t*.3]],.025,24,4))}return e}function Z_(i){return ts(128,(e,t)=>{e.fillStyle=i,e.fillRect(0,0,t,t);for(let n=0;n<10;n++)e.fillStyle="rgba(0,0,0,0.28)",e.fillRect(n*t/10,0,2,t),e.fillStyle="rgba(255,255,255,0.15)",e.fillRect(n*t/10+4,0,1,t)},[5,5])}function Rg(i){let e=[],t=Yt-.05,n=En(i,1)-.05;for(let s of i.barbels||[])for(let a of[1,-1]){let r=[t-s[0],n+s[1],a*s[2]],o=s[3];e.push(bn([r,[r[0]+o[0]*.5,r[1]+o[1]*.5,r[2]+a*o[2]*.5],[r[0]+o[0],r[1]+o[1],r[2]+a*o[2]]],s[4]||.025,10,4))}return e}function eS(i){return ts(512,(e,t)=>{let n=new he(i.back),s=new he(i.side),a=new he(i.belly2),r=new he;for(let l=0;l<t;l++){let c=l/t,u=Math.sin(nt*c);r.copy(s).lerp(u>0?n:a,Math.pow(Math.abs(u),.8)),e.fillStyle="#"+r.getHexString(),e.fillRect(0,l,t,1)}let o=Ct(i.seed||3);if(i.bars)for(let l=0;l<i.bars;l++)e.fillStyle="rgba(20,25,30,0.16)",e.fillRect(t*(.28+l*.065),0,t*.03,t);if(i.scale){let l=i.scale;e.lineWidth=l>30?3:1.4;for(let c=0;c<t/(l*.6)+1;c++)for(let u=0;u<t/l+1;u++){let h=u*l+c%2*l/2,d=c*l*.6;e.strokeStyle=i.scaleEdge||"rgba(0,0,0,0.22)",e.beginPath(),e.arc(h,d,l*.55,-Math.PI*.5,Math.PI*.5),e.stroke(),i.scaleShine&&(e.fillStyle="rgba(255,255,255,0.08)",e.beginPath(),e.arc(h-l*.15,d,l*.3,0,nt),e.fill())}}else for(let l=0;l<3e3;l++)e.fillStyle=o()<.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.04)",e.fillRect(o()*t,o()*t,2,2);for(let l of[0,.5,1]){e.strokeStyle="rgba(20,20,20,0.45)",e.lineWidth=2,e.setLineDash([5,3]),e.beginPath();for(let u=.12;u<=.84;u+=.02)e.lineTo(u*t,l*t+Math.sin(u*5)*3-(l===.5?10:-10)*.4);e.stroke(),e.setLineDash([]),e.strokeStyle="rgba(25,15,10,0.55)",e.lineWidth=3,e.beginPath();let c=(i.opT||.8)*t;for(let u=-.14;u<=.14;u+=.01)e.lineTo(c-Math.cos(u*11)*12,(l+u)*t);e.stroke()}},[1,1])}function tS(){return ts(256,(i,e)=>{i.fillStyle="#e9b9a6",i.fillRect(0,0,e,e),i.strokeStyle="rgba(170,90,75,0.55)",i.lineWidth=2;for(let t=-2;t<26;t++){i.beginPath();for(let n=0;n<=e;n+=4){let s=n/e;i.lineTo(t*11+Math.abs(Math.sin(s*nt*2))*14,n)}i.stroke()}},[1,1])}function Cf(i){let e=i.H,t=i.W,n=En(i,.5),s=i.iris||[.85,.7,.25],a=i.eyeT||.87,r=-Yt+a*Vn,o=c=>n+c*e,l=c=>c*t;return{id:i.id,kind:"fish",groundY:-2.3,noPed:!0,worldScale:1,hitR:.5,hitY:0,pivots:{head:[0,0,0],tail:[0,0,0],legs:[]},camTarget:[0,0,0],camYaw:0,bg:["#1f5774","#0a1f2e"],dotSize:.12,muscleShrink:.86,vitals:c=>({bpm:Math.round(sn(40,90,c)),rr:Math.round(sn(40,110,c))}),bodyParts(c){let u=j_(i,c),h=ke([.1,.07*c,.14*c],[Yt-.02,En(i,1)-.06,0],10),d=c===1?st(K_(i)):ke([.05,.05,.05],[0,0,0],6);return{body:u,head:h,tail:d,legs:[]}},muscleMat(){return new Wt({map:tS(),roughness:.45,clearcoat:.5,clearcoatRoughness:.3})},skinMats(){let c=new Wt({map:eS(i),roughness:i.scale?.42:.5,metalness:i.metal??.05,clearcoat:.3,clearcoatRoughness:.35,envMapIntensity:.55}),u=new Ke({map:Z_(i.fin),side:Dt,roughness:.55,transparent:!0,opacity:.85});return{body:c,head:c,tail:u,legs:c}},face(c,u){let h=En(i,a)+xi(i,a)*(i.eyeY??.3),d=Ss(i,a)*.86,f=js(c.head,u,{p:[r,h,d],r:i.eyeR||.17,scale:[1,1,.55],iris:s,pupil:"round",side:!0}),p=new Ke({color:ii(...i.barbelCol||[.12,.1,.09]),roughness:.6,transparent:!0}),b=Rg(i);return b.length&&c.head.add(new ve(st(b),p)),c.head.add(new ve(ke([.04,.05,.12],[Yt+.04,En(i,1)-.08,0],8),p)),f.concat([p])},bones(){let c=[],u=b=>En(i,ih(b));c.push(ke([.62,xi(i,.9)*.8,Ss(i,.9)*.75],[Yt-.75,u(Yt-.75),0],16),dt([Yt-.4,u(Yt)-.05,0],[Yt-.02,u(Yt)-.1,0],.07,.05));let h=34,d=Yt-1.1,f=-Yt+.25;for(let b=0;b<h;b++){let g=d+(f-d)*b/(h-1),m=ih(g),y=En(i,m)+xi(i,m)*.12,_=hl(i,g)*.92+y*.08,v=Ar(i,g)*.85+y*.15;if(c.push(ke([.07,.06,.06],[g,y,0],6),dt([g,y,0],[g-.12,_,0],.012,.008)),m<.42)c.push(dt([g,y,0],[g-.12,v,0],.012,.008));else if(m<.74)for(let T of[1,-1])c.push(bn([[g,y,T*.05],[g-.05,(y+v)/2,T*Ss(i,m)*.75],[g-.12,v*.9,T*Ss(i,m)*.4]],.018,6,4))}let p=b=>{b.computeBoundingBox()};for(let b of(i.dorsal||[]).concat(i.anal||[])){let g=(i.dorsal||[]).includes(b);for(let m=0;m<=6;m++){let y=-Yt+(b[0]+(b[1]-b[0])*m/6)*Vn,_=g?hl(i,y):Ar(i,y);c.push(dt([y,_,0],[y-b[2]*.5,_+(g?1:-1)*b[2]*.8,0],.01,.006))}}for(let b=-4;b<=4;b++)c.push(dt([-Yt+.1,En(i,.02),0],[-Yt-1*(i.cauH||1),En(i,.02)+b*.2*(i.cauH||1),0],.012,.006));return p(c[0]),st(c)},organs(c,u){c("otak",Er([.22,.13,.13],[[.1,.08,.09],[-.2,-.02,0]]),u([.9,.72,.7],.5,.3),[r-.25,En(i,a)+xi(i,a)*.35,0]);let h=[],d=r-.75;for(let v of[1,-1])for(let T=0;T<4;T++){let E=d+.1-T*.11,M=[[E,o(.35),v*.1],[E-.05,o(.05),l(v*.55)],[E,o(-.4),v*.1]];h.push(bn(M,.03,14,5));for(let x=0;x<9;x++){let F=new _n(M.map(Tn)).getPoint(.1+x*.09);h.push(dt([F.x,F.y,F.z],[F.x-.22,F.y,F.z*.92],.028,.008,5))}}c("insang",st(h),u([.78,.1,.16],.45,.5));let f=[d-.2,o(-.55),0],p=c("jantung",st([ke([.16,.12,.14],[-.15,.02,0],14),ke([.17,.15,.14],[.05,-.02,0],14),dt([.15,0,0],[.45,.12,0],.06,.05)]),u([.55,.06,.1],.3,.8),f);c("hati",ke([.55,.3*e,.32*t],[d-.75,o(-.35),l(.15)],18),u([.45,.14,.1],.35,.7));let b=[-.15,o(.28),0],g=i.twoChamber?st([ke([.55,.26*e,.26*t],[.55,.02,0],18),ke([.85,.28*e,.28*t],[-.75,-.02,0],18)]):ke([1.35,.28*e,.28*t],[0,0,0],20),m=c("gelembung",g,new Wt({color:ii(.88,.9,.92),roughness:.15,metalness:.35,clearcoat:1,transparent:!0}),b),y=-Yt+(i.anal&&i.anal[0]?i.anal[0][0]:.35)*Vn+.1,_=[[d-.3,o(-.15),0],[d-.9,o(-.45),-.1],[.3,o(-.5),l(.3)],[-.2,o(-.35),l(-.3)],[-.6,o(-.6),l(.3)],[y+.4,o(-.5),0],[y,o(-.85),0]];if(c("usus",st([ke([.45,.22*e,.22*t],[d-1,o(-.3),0],16),bn(_,.07,80,6)]),u([.92,.68,.6],.45,.6)),c("ginjal",bn([[d-.2,o(.42),0],[0,o(.5),0],[y,o(.45),0]],.07,24,6),u([.4,.1,.1],.4,.6)),i.labirin){let v=[];if(i.labirin==="pohon")for(let T of[1,-1]){let E=[d+.05,o(.35),l(T*.3)];for(let M=0;M<5;M++){let x=[E[0]-.1+M*.05,E[1]+.2+M%2*.1,E[2]+T*.05*M];v.push(dt(E,x,.035,.02,5));for(let F=0;F<2;F++)v.push(dt(x,[x[0]+(F?.08:-.08),x[1]+.12,x[2]],.018,.01,4))}}else for(let T of[1,-1])for(let E=0;E<7;E++)v.push(ke([.08,.06,.06],[d+.05+Math.sin(E*1.7)*.12,o(.32)+Math.cos(E*2.3)*.08,l(T*.32)+Math.sin(E)*.05],8));c("labirin",st(v),u([.82,.42,.45],.4,.5))}return{heart:p,lungs:[],bladder:m,BC:b}},food:{main:[[Yt-.05,En(i,1)-.08,0],[r-.5,o(-.1),0],[r-1.2,o(-.25),0],[r-1.75,o(-.3),0],[.3,o(-.5),l(.3)],[-.2,o(-.35),l(-.3)],[-.6,o(-.6),l(.3)],[-Yt+(i.anal&&i.anal[0]?i.anal[0][0]:.35)*Vn+.1,o(-.85),0]],n:45},flows:[{pts:[[Yt-.05,En(i,1),0],[r-.3,o(0),l(.15)],[r-.75,o(0),l(.5)],[r-1.15,o(-.1),l(.95)],[r-1.6,o(-.15),l(1.3)]],color:new he(.5,1.5,2.6),n:50,speed:2.2,jit:.16},{pts:[[r-1,o(-.05),l(.42)],[r-.45,o(0),l(.42)]],color:new he(2.6,.25,.25),n:34,speed:3.2,jit:.28,dir:c=>c.counter===!1?-1:1}],neutral:i.neutral??.5,onUpdate(c,u,h,d,f){c.gas==null&&(c.gas=.25,c.vy=0,c.fy=0,c.hold=0,c.counter=!0);let p=this.neutral,b=(c.gas-p)*4.2;c.vy+=b*d,c.vy*=Math.exp(-1.6*d),c.fy+=c.vy*d,c.fy<-1.2&&(c.fy=-1.2,c.vy=0),c.fy>1.4&&(c.fy=1.4,c.vy=0),u.position.y=c.fy,u.rotation.z=It(c.vy*.25,-.25,.25)+Math.sin(f*1.2)*.015,h.bladder&&h.bladder.scale.setScalar(.55+.9*c.gas),c.status=c.gas<p-.04?"tenggelam":c.gas>p+.04?"mengapung":"melayang",c.status==="melayang"&&Math.abs(c.vy)<.12?c.hold+=d:c.hold=0,c.hold>2.5&&!c.buoyOk&&(c.buoyOk=!0)}}}function Pg(i,e,t,n){let{heightAt:s,WATER:a}=e,r={uTime:{value:0}},o=[],l=(m,y,_)=>{m.onBeforeCompile=v=>{v.uniforms.uTime=r.uTime,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      { float tt = clamp((${Yt.toFixed(2)} - position.x) / ${Vn.toFixed(2)}, 0.0, 1.0); float ph = float(gl_InstanceID) * 2.37;
        transformed.z += sin(position.x * 1.1 + uTime * ${_.toFixed(2)} + ph) * ${y.toFixed(3)} * tt * tt; }`)}},c=Ct(77),u=(m,y)=>{for(let _=0;_<20;_++){let v=c()*nt,T=Math.sqrt(c())*(n.r-4),E=n.x+Math.cos(v)*T,M=n.z+Math.sin(v)*T,x=s(E,M);if(a-x>1){let F=sn(x+y,a-.35,m+(c()-.5)*.25);return[E,It(F,x+.25,a-.3),M]}}return[n.x,a-1,n.z]};for(let m of t){let y=m.P,_=Cf(y),v=m.count,T=_.bodyParts(1),E=_.skinMats(),M=new Ke({map:E.body.map,roughness:.45,metalness:.05}),x=E.tail,F=[],I=En(y,y.eyeT||.87)+xi(y,y.eyeT||.87)*(y.eyeY??.3),G=Ss(y,y.eyeT||.87)*.86,X=-Yt+(y.eyeT||.87)*Vn,w=y.eyeR||.17;for(let q of[1,-1]){let z=ke([w,w,w*.55],[X,I,q*G],10),U=ke([w*.5,w*.5,w*.2],[X+.02,I,q*(G+w*.48)],8),J=new Float32Array(z.attributes.position.count*3).fill(0),Z=ii(...y.iris||[.85,.7,.25]);for(let ae=0;ae<J.length;ae+=3)J[ae]=Z.r,J[ae+1]=Z.g,J[ae+2]=Z.b;z.setAttribute("color",new ot(J,3)),U.setAttribute("color",new ot(new Float32Array(U.attributes.position.count*3).fill(.02),3)),F.push(z,U)}let S=new Ke({vertexColors:!0,roughness:.15}),D=st([T.tail,...Rg(y)]),A=m.amp||.18,k=m.freq||6;[M,x,S].forEach(q=>l(q,A,k));let O=new yn(st([T.body,T.head]),M,v),H=new yn(D,x,v),N=new yn(st(F),S,v);for(let q of[O,H,N])q.frustumCulled=!1,q.castShadow=!1,q.userData.noAO=!0,i.add(q);let Y=[];for(let q=0;q<v;q++){let z=u(m.depth,m.bedOff||.35);Y.push({p:Tn(z),v:new C(c()-.5,0,c()-.5).multiplyScalar(.3),tgt:Tn(u(m.depth,m.bedOff||.35)),off:new C((c()-.5)*2,(c()-.5)*.5,(c()-.5)*2),yaw:c()*nt,pitch:0})}o.push({item:m,P:y,body:O,fins:H,eyes:N,fish:Y,scale:m.scale})}let h=new Je,d=new _t,f=new jt(0,0,0,"YZX"),p=new C,b=new C,g=new C;return{groups:o,update(m,y,_,v){r.uTime.value=y;let T=Math.hypot(_.x-n.x,_.z-n.z)>n.r+35;for(let E of o){if(E.body.visible=E.fins.visible=E.eyes.visible=!T,T)continue;let M=E.item.speed||.6;E.fish.forEach((x,F)=>{let I=E.fish[0],G=F===0||!E.item.school?x.tgt:b.copy(I.p).add(x.off);(F===0||!E.item.school)&&x.p.distanceTo(x.tgt)<.8&&x.tgt.copy(Tn(u(E.item.depth,E.item.bedOff||.35))),b.copy(G).sub(x.p);let X=b.length();X>.001&&b.multiplyScalar(M/X),g.set(x.p.x-_.x,x.p.y-v,x.p.z-_.z);let w=g.length();w<1.6&&b.add(g.multiplyScalar((1.6-w)*1.5/Math.max(.1,w))),x.v.lerp(b,Math.min(1,m*1.2)),x.p.addScaledVector(x.v,m);let S=s(x.p.x,x.p.z);x.p.y=It(x.p.y,S+.22,a-.25),Math.hypot(x.p.x-n.x,x.p.z-n.z)>n.r-3&&(x.p.x+=(n.x-x.p.x)*m*.5,x.p.z+=(n.z-x.p.z)*m*.5);let D=Math.hypot(x.v.x,x.v.z);if(D>.02){let k=Math.atan2(-x.v.z,x.v.x)-x.yaw;k=Math.atan2(Math.sin(k),Math.cos(k)),x.yaw+=k*Math.min(1,m*3)}x.pitch+=(It(Math.atan2(x.v.y,D+.01),-.5,.5)-x.pitch)*Math.min(1,m*3),f.set(0,x.yaw,x.pitch),d.setFromEuler(f),p.setScalar(E.scale),h.compose(x.p,d,p),E.body.setMatrixAt(F,h),E.fins.setMatrixAt(F,h),E.eyes.setMatrixAt(F,h)}),E.body.instanceMatrix.needsUpdate=E.fins.instanceMatrix.needsUpdate=E.eyes.instanceMatrix.needsUpdate=!0}}}}var wg=i=>({id:"berkas",name:"Berkas pembuluh",sci:"Xilem dan floem tersebar",ui:"#6b4a2a",short:"Saluran air dan makanan, tersebar.",what:"Tiap berkas berisi xilem (pembuluh besar berwarna biru di gambar penampang) dan floem (hijau) yang berdampingan, dibungkus serat keras (cokelat). Di antara xilem dan floem tidak ada kambium, sehingga disebut berkas kolateral tertutup.",fn:"Xilem mengangkut air dan mineral dari akar ke daun. Floem mengangkut gula hasil fotosintesis dari daun ke seluruh tubuh. Serat pembungkusnya membuat batang kuat.",fact:i==="kelapa"?"Berkas makin rapat ke arah tepi, jadi bagian luar batang kelapa jauh lebih keras daripada bagian tengahnya. Kayu kelapa (glugu) dipakai untuk rangka rumah dan mebel.":"Pada bambu, berkas paling rapat di bagian luar dinding buluh. Serat di sekitar berkas inilah yang membuat bambu kuat sekaligus lentur, sehingga dipakai untuk rumah, jembatan, dan perancah."}),nS=[{id:"kulit",name:"Lapisan luar",sci:"Epidermis dan bekas pelepah",ui:"#7d7262",short:"Permukaan keras bercincin.",what:"Permukaan batang kelapa keras dan bercincin. Tiap cincin adalah bekas tempat menempelnya satu pelepah daun yang sudah gugur.",fn:"Melindungi jaringan di dalamnya dari luka, serangga, dan kehilangan air.",fact:"Lapisan luar batang kelapa bukan kulit kayu seperti pada pohon jati atau mahoni, karena batang kelapa tidak punya kambium gabus yang terus membentuk kulit baru."},{id:"korteks",name:"Korteks",sci:"Jaringan tepi berserat",ui:"#b79a6a",short:"Lapisan tipis berserat di bawah permukaan.",what:"Lapisan tipis di bawah permukaan yang berisi banyak serat.",fn:"Menambah kekuatan bagian tepi batang.",fact:"Pada batang monokotil, batas antara korteks dan bagian dalam batang tidak tegas, karena berkas pembuluh tersebar sampai dekat tepi."},{id:"parenkim",name:"Jaringan dasar",sci:"Parenkim",ui:"#e6d9b8",short:"Pengisi batang tempat berkas tersebar.",what:"Jaringan dasar berupa sel-sel parenkim yang mengisi seluruh batang. Berkas pembuluh tersebar di dalamnya.",fn:"Menyimpan air dan cadangan makanan, serta menjadi tempat tertanamnya berkas pembuluh.",fact:"Karena tidak ada kambium, penampang kelapa tidak punya cincin tahun. Umur kelapa lebih mudah diperkirakan dari jumlah bekas pelepah, karena kelapa dewasa membentuk sekitar satu pelepah baru tiap bulan."},wg("kelapa")],iS=[{id:"kulit",name:"Kulit buluh",sci:"Epidermis bersilika",ui:"#6f9a34",short:"Lapisan luar licin dan keras.",what:"Lapisan terluar buluh bambu tipis, licin, dan keras karena mengandung silika, zat yang sama dengan bahan utama pasir.",fn:"Melindungi buluh dari air, jamur, dan serangga.",fact:"Di bawah tiap buku sering terlihat lapisan seperti bedak putih. Itu lapisan lilin yang membantu mengurangi penguapan."},{id:"dinding",name:"Dinding buluh",sci:"Parenkim dan serat",ui:"#d9cf9e",short:"Dinding tebal tempat berkas tersebar.",what:"Dinding buluh terdiri dari parenkim dan serat, dengan berkas pembuluh tersebar di dalamnya, makin rapat ke arah luar.",fn:"Menopang buluh setinggi belasan meter sambil tetap lentur saat diterpa angin.",fact:"Bambu termasuk keluarga rumput-rumputan (Poaceae), sama seperti padi dan jagung. Bambu adalah salah satu tumbuhan dengan pertumbuhan tercepat: rebungnya bisa bertambah tinggi puluhan sentimeter dalam sehari."},wg("bambu"),{id:"buku",name:"Buku dan sekat",sci:"Nodus dan diafragma",ui:"#c8b874",short:"Cincin penguat dan sekat melintang.",what:"Buku adalah cincin menonjol pada buluh. Di dalamnya ada sekat melintang (diafragma) yang menutup rongga.",fn:"Sekat membuat buluh tidak mudah gepeng atau patah. Dari buku juga tumbuh cabang dan daun.",fact:"Bagian di antara dua buku disebut ruas. Panjang ruas berbeda-beda tiap jenis bambu."},{id:"rongga",name:"Rongga",sci:"Lakuna",ui:"#9fd6ff",short:"Ruang kosong di tengah buluh.",what:"Bagian tengah buluh kosong berisi udara, dibatasi sekat di tiap buku.",fn:"Membuat batang ringan tetapi tetap kaku, seperti pipa. Bahan dipakai di tepi, tempat paling efektif menahan tekukan.",fact:"Prinsip yang sama dipakai pada tiang lampu, rangka sepeda, dan tulang burung: berongga supaya ringan tapi kuat."}],sS=i=>{let e=i==="kelapa";return[["Mengapa penampang batang "+i+" tidak punya cincin tahun?",["Karena tidak punya kambium","Karena tumbuh di daerah tropis","Karena batangnya berongga","Karena terlalu muda"],"Cincin tahun dibuat oleh kambium. Monokotil tidak punya kambium, jadi tidak ada lapisan kayu baru tiap tahun."],["Bagaimana susunan berkas pembuluh pada batang monokotil?",["Tersebar di seluruh jaringan dasar","Melingkar rapi membentuk cincin","Hanya di bagian tengah","Tidak punya berkas pembuluh"],"Pada dikotil seperti jati, berkas tersusun melingkar. Pada monokotil, berkas tersebar."],["Apa isi satu berkas pembuluh monokotil?",["Xilem dan floem yang dibungkus serat","Kambium dan empulur","Hanya xilem","Stomata"],"Xilem dan floem berdampingan dibungkus serat sklerenkim, tanpa kambium di antaranya (kolateral tertutup)."],e?["Cincin-cincin di permukaan batang kelapa adalah ...",["Bekas pelepah daun yang gugur","Cincin tahun","Bekas gigitan hewan","Retakan karena panas"],"Tiap cincin menandai tempat satu pelepah pernah menempel."]:["Bambu termasuk keluarga tumbuhan apa?",["Rumput-rumputan (Poaceae)","Palem","Polong-polongan","Pakis"],"Bambu adalah rumput raksasa, sekerabat dengan padi dan jagung."],e?["Bagian mana dari batang kelapa yang paling keras?",["Bagian tepi, karena berkas paling rapat","Bagian tengah","Sama keras di semua bagian","Pucuknya"],"Berkas pembuluh dan seratnya makin rapat ke arah tepi."]:["Apa fungsi sekat (diafragma) di buku bambu?",["Memperkuat buluh agar tidak mudah gepeng atau patah","Menyimpan air hujan","Menghasilkan bunga","Membuat bambu berbunyi"],"Sekat melintang menahan dinding buluh tetap bulat saat ditekan."],["Mengapa batang "+i+" hampir tidak bertambah besar setelah tumbuh tinggi?",["Tidak ada kambium untuk pertumbuhan ke samping","Kekurangan air","Karena dipangkas","Karena akarnya serabut"],"Pertumbuhan ke samping (sekunder) dibuat oleh kambium. Tanpa kambium, diameter batang sudah ditentukan sejak muda."]].map((t,n)=>({id:i+"m"+n,sp:i,q:t[0],o:t[1],a:0,e:t[2]}))};function Lg(i){let e=i==="kelapa";return{id:i,name:e?"Kelapa":"Bambu",layers:e?nS:iS,quiz:sS(i),specimen:e?{id:"kelapa",kind:"mono",name:"Pohon Kelapa",short:"kelapa",sci:"Cocos nucifera",family:"Arecaceae",x:-17,z:33,top:9,mkOff:1.2,fact:"Kelapa adalah tumbuhan monokotil dari keluarga palem. Akarnya serabut, daunnya bertulang sejajar, dan batangnya tidak bercabang. Hampir semua bagiannya berguna: buah, sabut, tempurung, daun, nira, dan batang.",hint:"Geser Kedalaman untuk mengupas lapisan sampai berkas pembuluh terlihat. Bandingkan dengan penampang jati: di sini tidak ada cincin tahun dan tidak ada kambium. Geser Matahari untuk melihat air (biru) naik dan gula (oranye) turun."}:{id:"bambu",kind:"mono",name:"Rumpun Bambu",short:"bambu",sci:"Gigantochloa apus",family:"Poaceae",x:28,z:14,top:9,mkOff:1.2,fact:"Bambu apus banyak ditanam di Jawa dan dipakai untuk bangunan, anyaman, dan kerajinan. Bambu tumbuh berumpun dari akar rimpang, dan tunas mudanya (rebung) bisa dimasak.",hint:"Geser Kedalaman untuk mengupas kulit buluh dan melihat berkas pembuluh di dinding. Perhatikan sekat di buku dan rongga di tengah. Geser Matahari untuk melihat aliran air dan gula."}}}var Rr=(i,e,t)=>new he().setRGB(i,e,t,ut);function _a(i,e,t,n=!0){let s=document.createElement("canvas");s.width=s.height=i,e(s.getContext("2d"),i);let a=new pn(s);return n&&(a.colorSpace=ut),a.wrapS=a.wrapT=Jt,a.anisotropy=4,t&&a.repeat.set(t[0],t[1]),a}function kg(i,e){return _a(128,(t,n)=>{t.clearRect(0,0,n,n);let s=t.createLinearGradient(0,0,n,0);s.addColorStop(0,i[0]),s.addColorStop(.5,i[1]),s.addColorStop(1,i[0]),t.fillStyle=s,t.beginPath(),t.moveTo(n/2,0),t.bezierCurveTo(n*.95,n*.25,n*.95,n*.7,n/2,n),t.bezierCurveTo(n*.05,n*.7,n*.05,n*.25,n/2,0),t.fill(),t.strokeStyle=e,t.lineWidth=3,t.beginPath(),t.moveTo(n/2,0),t.lineTo(n/2,n),t.stroke()},null)}function Ig(i,e,t){return i.onBeforeCompile=n=>{n.uniforms.uTime=gr.uTime,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
    { float hh = max(0.0, position.y - ${t.toFixed(2)}); float w = hh * hh * ${e.toFixed(4)};
      transformed.x += sin(uTime * 1.3 + position.z * 0.4 + position.x * 0.2) * w; transformed.z += cos(uTime * 1.1 + position.x * 0.4) * w * 0.7; }`)},i}function Fg(i){let e=[],t=[],n=[],s=0,a=new C,r=new C,o=new C;for(let c of i){a.copy(c.p),r.copy(c.d).normalize(),o.copy(c.s).normalize().multiplyScalar(c.w/2);let u=a.clone().addScaledVector(r,c.l).add(c.droop||new C);e.push(a.x-o.x,a.y-o.y,a.z-o.z,a.x+o.x,a.y+o.y,a.z+o.z,u.x+o.x,u.y+o.y,u.z+o.z,u.x-o.x,u.y-o.y,u.z-o.z),t.push(0,0,1,0,1,1,0,1),n.push(s,s+1,s+2,s,s+2,s+3),s+=4}let l=new lt;return l.setAttribute("position",new tt(e,3)),l.setAttribute("uv",new tt(t,2)),l.setIndex(n),l.computeVertexNormals(),l}var Nf=null;function aS(){if(Nf)return Nf;let i=Ct(91),e=_a(256,(a,r)=>{a.fillStyle="#7d7262",a.fillRect(0,0,r,r);for(let o=0;o<1600;o++)a.fillStyle=i()<.5?"rgba(40,32,24,0.15)":"rgba(220,210,190,0.12)",a.fillRect(i()*r,i()*r,1+i()*2,6+i()*14);for(let o=0;o<16;o++)a.fillStyle="rgba(40,30,22,0.55)",a.fillRect(o*r/16,0,3,r),a.fillStyle="rgba(200,190,170,0.25)",a.fillRect(o*r/16+3,0,2,r)},[3,1]),t=new Ke({map:e,roughness:.92}),n=Ig(new Ke({map:kg(["#3f6a1f","#6a9a2c"],"#c9d08a"),alphaTest:.45,side:Dt,roughness:.6}),.004,6.5),s=new Ke({color:Rr(.42,.5,.16),roughness:.55});return Nf={trunkM:t,leafM:n,nutM:s}}function rS(i,e){let t=Ct(i),n=new C(t()-.5,0,t()-.5).normalize().multiplyScalar(.8+t()*1.2),s=new _n([new C(0,-.3,0),new C(n.x*.15,e*.35,n.z*.15),new C(n.x*.55,e*.75,n.z*.55),new C(n.x,e,n.z)]),a=new mi(s,24,1,10,!1),r=a.attributes.position,o=new C;for(let f=0;f<r.count;f++){let p=Math.floor(f/11),b=p/24;s.getPoint(b,o);let g=.17+.12*Math.pow(1-b,6);r.setXYZ(f,o.x+(r.getX(f)-o.x)*g,o.y+(r.getY(f)-o.y)*g,o.z+(r.getZ(f)-o.z)*g)}a.computeVertexNormals();let l=s.getPoint(1),c=[],u=16;for(let f=0;f<u;f++){let p=f/u*nt+t()*.3,b=.35-f%3*.28-t()*.2,g=3.4+t()*1.2,m=new C(Math.cos(p),b,Math.sin(p)).normalize(),y=new C(-Math.sin(p),0,Math.cos(p)),_=v=>l.clone().addScaledVector(m,v*g).add(new C(0,-v*v*g*.55,0));for(let v=2;v<40;v++){let T=v/40,E=_(T),M=_(Math.min(1,T+.03)).sub(E).normalize(),x=(.55+.45*Math.sin(Math.PI*Math.min(1,T*1.15)))*.85;for(let F of[1,-1]){let I=y.clone().multiplyScalar(F).addScaledVector(M,.55).add(new C(0,-.35,0));c.push({p:E,d:I,s:M,l:x,w:.09,droop:new C(0,-.12*x,0)})}}}let h=Fg(c),d=[];for(let f=0;f<7;f++){let p=f/7*nt,b=new mn(.13,10,8);b.scale(1,1.15,1),b.translate(l.x+Math.cos(p)*.22,l.y-.28-f%2*.1,l.z+Math.sin(p)*.22),d.push(b)}return{trunk:a,leaves:h,nuts:Ei(d),top:l}}function Uf(i,e,t,n,s=1,a=9){let r=aS(),o=rS(s,a),l=new Xt,c=new ve(o.trunk,r.trunkM),u=new ve(o.leaves,r.leafM),h=new ve(o.nuts,r.nutM);return c.castShadow=c.receiveShadow=!0,u.castShadow=!0,h.castShadow=!0,u.userData.noAO=!0,l.add(c,u,h),l.position.set(e,t,n),i.add(l),{group:l,top:o.top.y}}function Dg(){let i=Ct(17);return _a(256,(e,t)=>{let n=e.createLinearGradient(0,0,0,t);n.addColorStop(0,"#5f8a2e"),n.addColorStop(.5,"#7aa23c"),n.addColorStop(1,"#5f8a2e"),e.fillStyle=n,e.fillRect(0,0,t,t);for(let s=0;s<900;s++)e.fillStyle=i()<.5?"rgba(30,60,10,0.12)":"rgba(230,240,190,0.1)",e.fillRect(i()*t,i()*t,10+i()*30,1);for(let s=0;s<4;s++){let a=s*t/4;e.fillStyle="rgba(60,70,25,0.9)",e.fillRect(a,0,4,t),e.fillStyle="rgba(235,235,215,0.55)",e.fillRect(a+4,0,8,t)}},[1,1])}function Cg(i,e,t,n,s=3){let a=Ct(s),r=new Ke({map:Dg(),roughness:.38,metalness:0}),o=Ig(new Ke({map:kg(["#4f7a26","#86ad3e"],"#bcd27a"),alphaTest:.45,side:Dt,roughness:.6}),.003,3),l=[],c=[],u=15,h=.42;for(let b=0;b<u;b++){let g=a()*nt,m=Math.sqrt(a())*.9,y=8+a()*3.5,_=.12+a()*.12,v=.045+a()*.025,T=new C(Math.cos(g)*m,-.2,Math.sin(g)*m),E=new C(Math.cos(g)*_,1,Math.sin(g)*_).normalize(),M=new _n([T,T.clone().addScaledVector(E,y*.5),T.clone().addScaledVector(E,y*.85).add(new C(Math.cos(g)*y*.08,0,Math.sin(g)*y*.08)),T.clone().addScaledVector(E,y).add(new C(Math.cos(g)*y*.22,-y*.05,Math.sin(g)*y*.22))]),x=new mi(M,30,v,7,!1),F=x.attributes.uv;for(let I=0;I<F.count;I++)F.setX(I,F.getX(I)*y/h/4);l.push(x);for(let I=0;I<34;I++){let G=.32+.68*I/34,X=M.getPoint(G),w=new C(a()-.5,(a()-.3)*.4,a()-.5).normalize(),S=.5+a()*.9*(1-G*.5);for(let D=0;D<11;D++){let A=X.clone().addScaledVector(w,S*(.35+.65*D/11)).add(new C(0,-.1*D/11,0)),k=w.clone().add(new C((a()-.5)*1.2,-.45-a()*.5,(a()-.5)*1.2)).normalize();c.push({p:A,d:k,s:new C(0,1,0).cross(k).normalize(),l:.24+a()*.12,w:.055})}}}let d=new Xt,f=new ve(Ei(l),r),p=new ve(Fg(c),o);return f.castShadow=f.receiveShadow=!0,p.castShadow=!0,p.userData.noAO=!0,d.add(f,p),d.position.set(e,t,n),i.add(d),{group:d,top:9}}function Ng(i,e,t=Math.PI*.25,n=Math.PI*1.75,s=64){let a=new Ci;for(let r=0;r<=s;r++){let o=t+(n-t)*r/s,l=Math.cos(o)*i,c=Math.sin(o)*i;r?a.lineTo(l,c):a.moveTo(l,c)}if(e>0)for(let r=s;r>=0;r--){let o=t+(n-t)*r/s;a.lineTo(Math.cos(o)*e,Math.sin(o)*e)}else a.lineTo(0,0);return a.closePath(),a}function va(i,e,t,n=0){let s=new Os(Ng(i,e),{depth:t,bevelEnabled:!1,curveSegments:64});s.rotateX(-Math.PI/2),s.translate(0,n,0);let a=s.attributes.position,r=s.attributes.normal,o=s.attributes.uv,l=6;for(let c=0;c<a.count;c++)Math.abs(r.getY(c))>.9?o.setXY(c,a.getX(c)/l+.5,-a.getZ(c)/l+.5):o.setXY(c,Math.atan2(a.getZ(c),a.getX(c))/nt*4,a.getY(c)/3);return s}function oS(i,e,t,n){i.fillStyle="#5b3a1e",i.beginPath(),i.ellipse(e,t,n*1.05,n*1.25,0,0,nt),i.fill(),i.fillStyle="#d9c9a0",i.beginPath(),i.ellipse(e,t+n*.15,n*.75,n*.85,0,0,nt),i.fill(),i.fillStyle="#a3c36b",i.beginPath(),i.ellipse(e,t-n*.35,n*.42,n*.3,0,0,nt),i.fill(),i.fillStyle="#3a6fa8";for(let s of[-1,1])i.beginPath(),i.arc(e+s*n*.38,t+n*.3,n*.24,0,nt),i.fill()}function Ug(i,e){let t=new Gn;{let q=document.createElement("canvas");q.width=q.height=512;let z=q.getContext("2d"),U=z.createRadialGradient(256,230,20,256,256,420);U.addColorStop(0,"#2f4a2c"),U.addColorStop(.55,"#132014"),U.addColorStop(1,"#05090e"),z.fillStyle=U,z.fillRect(0,0,512,512);let J=new pn(q);J.colorSpace=ut,t.background=J}t.environment=new hi(i).fromScene(new Zi,.04).texture,t.environmentIntensity=.5;let n=new en(38,1,.1,120),s=new Mn(16773596,2.6);s.position.set(5,10,7),s.castShadow=!0,s.shadow.mapSize.set(1024,1024);let a=s.shadow.camera;a.left=-7,a.right=7,a.top=7,a.bottom=-7,a.near=1,a.far=32,s.shadow.bias=-5e-4,s.shadow.normalBias=.03,t.add(s);{let q=new Mn(10475263,1.1);q.position.set(-6,3,-5),t.add(q)}let r=new Xn().load(Vs),o=new Xn().load(Ys);for(let q of[r,o])q.wrapS=q.wrapT=Jt,q.repeat.set(2.4,2.4);r.colorSpace=ut;let l=new ve(new Gt(4.6,4.8,.3,64),new Ke({map:r,normalMap:o,color:Rr(.75,.7,.66),roughness:1}));l.position.y=-.15,l.receiveShadow=!0,l.userData.noAO=!0,t.add(l);let c=e.type==="bambu",u=c?2.4:2.6,h=5.2,d=Ct(c?5:9),f=[],p=c?1.72:.05,b=c?2.3:2.18,g=c?230:280;for(;f.length<g;){let q=d()*nt,z=Math.pow(d(),c?.45:.6),U=p+(b-p)*z;q>Math.PI*.25-.02&&q<Math.PI*1.75+.02&&f.push([Math.cos(q)*U,Math.sin(q)*U,.035+.03*(1-z)+d()*.01])}let m=6,y=_a(1024,(q,z)=>{let U=z/m,J=z/2,Z=z/2;q.fillStyle=c?"#d9cf9e":"#e6d9b8",q.fillRect(0,0,z,z);let ae=Ct(3);for(let oe=0;oe<5e3;oe++)q.fillStyle=ae()<.5?"rgba(120,100,60,0.08)":"rgba(255,255,240,0.1)",q.fillRect(ae()*z,ae()*z,2,2);c||(q.strokeStyle="rgba(110,80,40,0.6)",q.lineWidth=.25*U,q.beginPath(),q.arc(J,Z,2.42*U,0,nt),q.stroke(),q.fillStyle="#b79a6a",q.beginPath(),q.arc(J,Z,2.6*U,0,nt),q.arc(J,Z,2.3*U,0,nt,!0),q.fill());for(let oe of f)oS(q,J+oe[0]*U,Z-oe[1]*U,oe[2]*U*1.3)},[1,1]),_=new Xt;t.add(_);let v=[],T={},E=(q,z)=>{T[q]||(T[q]={mats:[],meshes:[]}),T[q].mats.includes(z.material)||T[q].mats.push(z.material),T[q].meshes.push(z),z.userData.layer=q,v.push(z)},M=(q,z,U)=>{let J=new ve(z,U);return J.castShadow=J.receiveShadow=!0,_.add(J),E(q,J),J},x=q=>new Wt(Object.assign({roughness:.75,transparent:!0},q)),F=_a(256,(q,z)=>{q.fillStyle=c?"#d8cc98":"#cdb88a",q.fillRect(0,0,z,z);for(let U=0;U<160;U++)q.fillStyle="rgba(110,80,40,0.35)",q.fillRect(U/160*z+Math.random()*2,0,1+Math.random()*2,z)},[6,2]);if(c){let q=Dg();q.repeat.set(4,1),M("kulit",va(u,2.32,h),[x({map:y}),x({map:q,roughness:.35,clearcoat:.4})]),M("dinding",va(2.32,1.7,h),[x({map:y}),x({map:F})]);let z=h*.55,U=new Os(Ng(1.72,0),{depth:.18,bevelEnabled:!1,curveSegments:48});U.rotateX(-Math.PI/2),U.translate(0,z,0);let J=va(u+.08,u-.02,.16,z+.01);M("buku",Ei([U,J]),x({color:Rr(.78,.72,.45),roughness:.6})),M("rongga",va(1.69,0,h*.98,.02),x({color:Rr(.6,.85,1),roughness:.1,opacity:.12,depthWrite:!1}))}else{let q=_a(256,(z,U)=>{z.fillStyle="#7d7262",z.fillRect(0,0,U,U);for(let J=0;J<2e3;J++)z.fillStyle=Math.random()<.5?"rgba(40,32,24,0.18)":"rgba(220,210,190,0.12)",z.fillRect(Math.random()*U,Math.random()*U,6+Math.random()*14,1+Math.random()*2);for(let J=0;J<6;J++)z.fillStyle="rgba(40,30,22,0.5)",z.fillRect(0,J*U/6,U,4)},[3,1]);M("kulit",va(u,2.42,h),[x({map:y}),x({map:q,roughness:.95})]),M("korteks",va(2.42,2.2,h),[x({map:y}),x({map:F})]),M("parenkim",va(2.2,0,h),[x({map:y}),x({map:F,color:Rr(1,.98,.92)})])}let I=x({color:Rr(.42,.28,.14),roughness:.5}),G=new yn(new Gt(1,1,1,6),I,f.length),X=new Je;f.forEach((q,z)=>{X.compose(new C(q[0],h/2,-q[1]),new _t,new C(q[2],h*.995,q[2])),G.setMatrixAt(z,X)}),G.castShadow=!0,_.add(G),E("berkas",G);let w=_a(64,(q,z)=>{let U=q.createRadialGradient(32,32,2,32,32,30);U.addColorStop(0,"rgba(255,255,255,1)"),U.addColorStop(.55,"rgba(255,255,255,0.9)"),U.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=U,q.fillRect(0,0,z,z)},null,!1),S=(q,z,U)=>{let J=new lt;J.setAttribute("position",new ot(new Float32Array(z*3),3));let Z=new qn(J,new Cn({map:w,color:q,size:.14,transparent:!0,depthWrite:!1}));return Z.frustumCulled=!1,Z.userData.noAO=!0,_.add(Z),{pts:Z,n:z,up:U,b:Array.from({length:z},()=>f[Math.floor(d()*f.length)]),u:Array.from({length:z},()=>d())}},D=S(new he(.5,1.6,2.8),70,!0),A=S(new he(2.6,1.4,.3),45,!1),k={yaw:1.15,yaw0:1.15,pitch:.55,dist:14,user:!1,sun:.65,depth:0,depthT:0};for(let q in T)for(let z of[].concat(...T[q].mats))z.userData.base=z.color.clone();let O={};for(let q in T)O[q]=0;let H=new C(0,h*.45,0),N=new he(.2,.22,.26),Y=(q,z)=>q==="kulit"?1-wt(.12,.32,z):q==="korteks"?1-wt(.4,.58,z):q==="parenkim"||q==="dinding"?1-.85*wt(.75,.95,z):1;return{scene:t,camera:n,layerMeshes:v,state:k,waterFlow:D,sugarFlow:A,depthFor:q=>({kulit:0,korteks:.45,parenkim:.6,dinding:.5,buku:.5,rongga:.5,berkas:1})[q]??1,update(q,z,U,J){k.user||(k.yaw=k.yaw0+.3*Math.sin(z*.35));let Z=Math.cos(k.pitch),ae=Math.sin(k.pitch);n.position.set(H.x+Math.sin(k.yaw)*Z*k.dist,H.y+ae*k.dist,H.z+Math.cos(k.yaw)*Z*k.dist),n.lookAt(H),k.depth+=(k.depthT-k.depth)*Math.min(1,q*6);let oe=k.depth;for(let Se in T){let Ue=Y(Se,oe),Ge=[].concat(...T[Se].mats),be=U&&U!==Se&&Se!=="berkas"&&U!=="rongga"?.5:0;O[Se]+=(be-O[Se])*Math.min(1,q*8);let ie=U===Se?.14:J===Se?.07:0;for(let pe of Ge)Se!=="rongga"&&(pe.opacity=Ue,pe.depthWrite=Ue>.98),pe.userData.base&&pe.color.copy(pe.userData.base).lerp(N,O[Se]*.6),pe.emissive&&pe.userData.base&&pe.emissive.copy(pe.userData.base).multiplyScalar(ie);for(let pe of T[Se].meshes)pe.visible=Ue>.02}let ge=.05+.3*k.sun;for(let Se of[D,A]){let Ue=Se.pts.geometry.attributes.position;for(let Ge=0;Ge<Se.n;Ge++){Se.u[Ge]=(Se.u[Ge]+ge*(Se.up?1:.6)*q)%1;let be=Se.up?Se.u[Ge]*h:(1-Se.u[Ge])*h,ie=Se.b[Ge];Ue.setXYZ(Ge,ie[0],be,-ie[1])}Ue.needsUpdate=!0}}}}var lS=[{id:"helai",name:"Helai daun",sci:"Lamina",ui:"#5d8f2e",short:"Panel surya tumbuhan.",what:"Bagian daun yang lebar dan tipis. Daun jati termasuk daun besar: panjangnya bisa lebih dari 40 cm.",fn:"Menangkap cahaya matahari seluas mungkin dan menjadi tempat pertukaran gas.",fact:"Daun tampak hijau karena klorofil menyerap cahaya merah dan biru, lalu memantulkan cahaya hijau."},{id:"tulang",name:"Tulang daun",sci:"Venasi menyirip",ui:"#d2dc96",short:"Jaringan pipa dan rangka daun.",what:"Ibu tulang daun di tengah bercabang ke kiri dan kanan seperti sirip ikan. Pola ini disebut menyirip, khas tumbuhan dikotil.",fn:"Berisi berkas pengangkut: xilem membawa air ke sel daun, floem membawa gula keluar dari daun. Tulang daun juga menegakkan helai daun.",fact:"Bandingkan dengan daun kelapa dan bambu (monokotil): tulang daunnya sejajar, bukan menyirip."},{id:"tangkai",name:"Tangkai daun",sci:"Petiolus",ui:"#8c9e52",short:"Penghubung daun ke batang.",what:"Bagian yang menghubungkan helai daun dengan ranting.",fn:"Menyalurkan air masuk dan gula keluar, serta mengatur posisi daun menghadap cahaya.",fact:"Jati menggugurkan daunnya di musim kemarau untuk menghemat air. Itulah sebabnya hutan jati tampak gundul saat kemarau."},{id:"kutikula",name:"Kutikula",sci:"Lapisan lilin",ui:"#f0e8b0",short:"Lapisan lilin anti-penguapan.",what:"Lapisan lilin bening yang menutupi permukaan atas daun.",fn:"Mengurangi penguapan air dan melindungi daun dari kuman.",fact:"Air hujan bisa menggelinding di permukaan daun karena lapisan lilin ini."},{id:"epidermis",name:"Epidermis",sci:"Jaringan pelindung",ui:"#d8eed0",short:"Lapisan sel bening pelindung.",what:"Selapis sel rapat di permukaan atas dan bawah daun. Selnya bening dan hampir tidak punya kloroplas.",fn:"Melindungi jaringan di bawahnya sambil tetap meneruskan cahaya ke dalam.",fact:"Karena bening, epidermis bekerja seperti kaca jendela bagi sel-sel fotosintesis di bawahnya."},{id:"palisade",name:"Jaringan palisade",sci:"Mesofil tiang",ui:"#9ed070",short:"Pabrik utama fotosintesis.",what:"Sel-sel berbentuk tiang yang tersusun rapat di bawah epidermis atas. Tiap sel berisi banyak kloroplas.",fn:"Tempat sebagian besar fotosintesis terjadi, karena paling dekat dengan cahaya.",fact:"Daun yang tumbuh di tempat terang biasanya punya lapisan palisade lebih tebal daripada daun di tempat teduh."},{id:"bunga_karang",name:"Jaringan bunga karang",sci:"Mesofil spons",ui:"#b4dc84",short:"Sel longgar dengan rongga udara.",what:"Sel-sel tidak beraturan yang tersusun longgar dengan banyak rongga udara di antaranya.",fn:"Rongga udara memudahkan CO2 dari stomata menyebar ke semua sel, dan O2 keluar.",fact:"Rongga-rongga ini membuat daun ringan dan bekerja seperti paru-paru kecil."},{id:"berkas",name:"Berkas pengangkut",sci:"Xilem dan floem",ui:"#5a8cd8",short:"Pipa air dan gula di dalam daun.",what:"Ujung tulang daun di dalam jaringan: xilem (biru) di atas dan floem (kuning) di bawah, dibungkus sel seludang.",fn:"Xilem membawa air dan mineral dari akar. Floem membawa gula hasil fotosintesis ke seluruh tumbuhan.",fact:"Air yang menguap lewat stomata menarik air di xilem naik dari akar, seperti menyedot minuman lewat sedotan."},{id:"stomata",name:"Stomata",sci:"Mulut daun",ui:"#72b84a",short:"Pintu keluar-masuk gas.",what:"Celah kecil di permukaan bawah daun, diapit dua sel penjaga berbentuk ginjal.",fn:"CO2 masuk dan O2 serta uap air keluar lewat stomata. Sel penjaga membuka celah saat terang dan menutupnya saat gelap atau kekurangan air.",fact:"Coba turunkan slider Air: stomata menutup untuk menghemat air, sehingga CO2 tidak bisa masuk dan fotosintesis melambat."},{id:"kloroplas",name:"Kloroplas",sci:"Organel fotosintesis",ui:"#2e8c2a",short:"Tempat fotosintesis di dalam sel.",what:"Butir-butir hijau di dalam sel palisade dan bunga karang. Satu sel palisade bisa berisi puluhan kloroplas.",fn:"Mengubah energi cahaya menjadi energi kimia dalam bentuk gula.",fact:"Geser Perbesaran ke kanan untuk melihat isi satu kloroplas."},{id:"membran",name:"Membran kloroplas",sci:"Membran ganda",ui:"#8cd870",short:"Pembungkus berlapis dua.",what:"Kloroplas dibungkus dua lapis membran.",fn:"Mengatur zat yang keluar-masuk kloroplas.",fact:"Kloroplas punya DNA sendiri. Para ilmuwan menduga kloroplas berasal dari bakteri fotosintesis yang dulu hidup di dalam sel lain."},{id:"grana",name:"Grana (tilakoid)",sci:"Reaksi terang",ui:"#1e6e1e",short:"Tumpukan cakram penangkap cahaya.",what:"Tumpukan cakram (tilakoid) yang mengandung klorofil. Satu tumpukan disebut granum.",fn:"Reaksi terang: energi cahaya dipakai untuk memecah air. Hasilnya oksigen yang dilepas, serta energi kimia untuk tahap berikutnya.",fact:"Oksigen yang kita hirup berasal dari air yang dipecah di tilakoid, bukan dari CO2."},{id:"stroma",name:"Stroma",sci:"Reaksi gelap (siklus Calvin)",ui:"#c4e49a",short:"Cairan tempat gula dirakit.",what:"Cairan kental yang mengisi kloroplas di sekitar grana.",fn:"Siklus Calvin: CO2 diikat dan dirakit menjadi gula memakai energi dari reaksi terang.",fact:"Enzim pengikat CO2 di stroma, RuBisCO, disebut-sebut sebagai protein paling melimpah di Bumi."}],cS=[["Apa saja bahan fotosintesis?",["Karbon dioksida dan air, dengan bantuan cahaya","Oksigen dan gula","Tanah dan pupuk","Nitrogen dan air"],"Persamaannya: 6 CO2 + 6 H2O + cahaya -> C6H12O6 (glukosa) + 6 O2."],["Oksigen hasil fotosintesis berasal dari ...",["Air yang dipecah di tilakoid","Karbon dioksida","Tanah","Klorofil yang rusak"],"Pada reaksi terang, molekul air dipecah dan oksigennya dilepas."],["Di bagian daun mana sebagian besar fotosintesis terjadi?",["Jaringan palisade","Kutikula","Tangkai daun","Epidermis"],"Sel palisade padat kloroplas dan paling dekat dengan cahaya."],["Apa yang terjadi pada stomata saat tumbuhan kekurangan air?",["Menutup untuk mengurangi penguapan","Membuka lebih lebar","Berubah menjadi merah","Lepas dari daun"],"Menutupnya stomata menghemat air, tetapi CO2 jadi sulit masuk sehingga fotosintesis melambat."],["Mengapa daun berwarna hijau?",["Klorofil memantulkan cahaya hijau","Klorofil menyerap cahaya hijau","Karena berisi air","Karena ada kutikula"],"Klorofil menyerap terutama cahaya merah dan biru."],["Jika cahaya sudah terang dan air cukup, tetapi laju fotosintesis tetap rendah, kemungkinan faktor pembatasnya adalah ...",["Karbon dioksida","Cahaya","Air","Warna daun"],"Laju fotosintesis dibatasi oleh faktor yang paling kurang (faktor pembatas)."],["Pola tulang daun jati adalah ...",["Menyirip","Sejajar","Melengkung","Tidak bertulang"],"Daun dikotil umumnya menyirip atau menjari, daun monokotil sejajar."],["Siklus Calvin (pembentukan gula) terjadi di ...",["Stroma","Grana","Stomata","Xilem"],"Stroma berisi enzim yang mengikat CO2 menjadi gula."]].map((i,e)=>({id:"daun"+e,sp:"daun",q:i[0],o:i[1],a:0,e:i[2]})),Hg={id:"daun",name:"Daun",layers:lS,quiz:cS,specimen:{id:"daun",kind:"leaf",name:"Anakan Jati",short:"daun jati",sci:"Tectona grandis (daun)",family:"Lamiaceae",x:4,z:-3,top:2.2,mkOff:.8,promptY:1.2,tagNear:6,fact:"Fotosintesis: 6 CO2 + 6 H2O + cahaya -> C6H12O6 (glukosa) + 6 O2. Gula dipakai tumbuhan untuk tumbuh dan disimpan, oksigennya kita hirup.",hint:"Geser Perbesaran dari helai daun ke jaringan sampai ke kloroplas. Atur Cahaya, CO2, dan Air, lalu cari kombinasi supaya laju fotosintesis maksimal. Laju selalu dibatasi faktor yang paling kurang."}};var ai=(i,e,t)=>new he().setRGB(i,e,t,ut),an=(i,e,t)=>new C(i,e,t);function Og(i,e,t=!0){let n=document.createElement("canvas");n.width=n.height=i,e(n.getContext("2d"),i);let s=new pn(n);return t&&(s.colorSpace=ut),s.anisotropy=4,s}function dl(i){return Math.pow(Math.sin(Math.PI*Math.pow(i,.8)),.85)*(1-.25*i*i)}function uS(i=512){return Og(i,e=>{e.clearRect(0,0,i,i);let t=e.createLinearGradient(0,0,0,i);t.addColorStop(0,"#3f6b22"),t.addColorStop(.5,"#5d8f2e"),t.addColorStop(1,"#3f6b22"),e.fillStyle=t,e.beginPath();for(let s=0;s<=60;s++){let a=s/60;e.lineTo(a*i,i/2-dl(a)*i*.47)}for(let s=60;s>=0;s--){let a=s/60;e.lineTo(a*i,i/2+dl(a)*i*.47)}e.fill(),e.strokeStyle="rgba(210,220,150,0.75)",e.lineWidth=6,e.beginPath(),e.moveTo(0,i/2),e.lineTo(i,i/2),e.stroke(),e.lineWidth=3;for(let s=1;s<=9;s++){let a=s/10.5;for(let r of[1,-1])e.beginPath(),e.moveTo(a*i,i/2),e.quadraticCurveTo((a+.06)*i,i/2-r*dl(a)*i*.25,(a+.12)*i,i/2-r*dl(Math.min(1,a+.12))*i*.44),e.stroke()}e.strokeStyle="rgba(200,215,140,0.25)",e.lineWidth=1;let n=Ct(4);for(let s=0;s<400;s++){let a=n()*i,r=n()*i;e.beginPath(),e.moveTo(a,r),e.lineTo(a+(n()-.5)*30,r+(n()-.5)*30),e.stroke()}})}var Bg=null,qg=()=>Bg||(Bg=uS());function Xg(i,e,t,n){let s=Ct(12),a=new Xt,r=new ve(new Gt(.025,.045,2.2,8),new Ke({color:ai(.45,.38,.28),roughness:.9}));r.position.y=1.1,r.castShadow=!0,a.add(r);let o=new Ke({map:qg(),alphaTest:.5,side:Dt,roughness:.65});o.onBeforeCompile=u=>{u.uniforms.uTime=gr.uTime,u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y += sin(uTime * 2.0 + position.x * 3.0 + position.z * 2.0) * 0.02;`)};let l=[];for(let u=0;u<10;u++){let h=.7+u*.16,d=u*2.4+s()*.4,f=.45+(1-u/10)*.25,p=new Ni(f,f*.75,6,4);p.translate(f/2+.03,0,0);let b=p.attributes.position;for(let g=0;g<b.count;g++){let m=b.getX(g),y=b.getY(g);b.setZ(g,-Math.abs(y)*.25-m*m*.25)}p.rotateX(-Math.PI/2+.25),p.rotateY(d),p.translate(0,h,0),l.push(p)}let c=new ve(Ei(l),o);return c.castShadow=!0,c.userData.noAO=!0,a.add(c),a.position.set(e,t,n),i.add(a),a}function Gg(i,e,t){let n=wt(.12,.45,t)*wt(.03,.25,i),s=Math.min(1,i/.75),a=Math.min(1,e*(.25+.75*n)/.6),r=Math.min(1,t/.45),o=Math.min(s,a,r);return{rate:o,lim:o===s?"cahaya":o===r?"air":"karbon dioksida",open:n,fL:s,fC:a,fW:r}}function Vg(i){let e=new Gn;{let w=document.createElement("canvas");w.width=w.height=512;let S=w.getContext("2d"),D=S.createRadialGradient(256,220,20,256,256,420);D.addColorStop(0,"#3c5a2a"),D.addColorStop(.55,"#16240f"),D.addColorStop(1,"#05090e"),S.fillStyle=D,S.fillRect(0,0,512,512);let A=new pn(w);A.colorSpace=ut,e.background=A}e.environment=new hi(i).fromScene(new Zi,.04).texture,e.environmentIntensity=.55;let t=new en(38,1,.1,120),n=new Mn(16774102,2.4);n.position.set(3,10,6),e.add(n);{let w=new Mn(10475263,1);w.position.set(-6,2,-5),e.add(w)}let s=[new Xt,new Xt,new Xt];s.forEach(w=>e.add(w));let a=[],r={},o=(w,S)=>{r[w]||(r[w]={mats:[],meshes:[]}),r[w].mats.includes(S.material)||r[w].mats.push(S.material),r[w].meshes.push(S),S.userData.layer=w,a.push(S)},l=(w,S,D)=>(s[w].add(D),o(S,D),D),c=w=>new Wt(Object.assign({roughness:.5},w)),u=(w,S,D)=>{let A=new yn(w,S,D.length),k=new Je,O=new _t;return D.forEach((H,N)=>{O.setFromEuler(new jt(H.rx||0,H.ry||0,H.rz||0)),k.compose(H.p,O,H.s),A.setMatrixAt(N,k)}),A},h=Ct(21),d=(w,S)=>.18*Math.abs(S)-.035*w*w+.15;{let w=new Ni(6.6,4,44,26);w.rotateX(-Math.PI/2);let S=w.attributes.position;for(let k=0;k<S.count;k++)S.setY(k,d(S.getX(k),S.getZ(k)));w.computeVertexNormals(),l(0,"helai",new ve(w,c({map:qg(),alphaTest:.5,side:Dt,roughness:.55,clearcoat:.3})));let D=[],A=(k,O,H,N,Y=12)=>{let q=[];for(let z=0;z<=Y;z++){let U=z/Y,J=sn(k,H,U),Z=sn(O,N,U)+Math.sin(U*Math.PI)*(N-O)*.12;q.push(an(J,d(J,Z)+.02,Z))}return q};D.push(new mi(new _n(A(-3.3,0,3.25,0,30)),60,.05,6));for(let k=1;k<=9;k++){let O=k/10.5,H=-3.3+O*6.6,N=-3.3+(O+.12)*6.6;for(let Y of[1,-1])D.push(new mi(new _n(A(H,0,N,Y*dl(Math.min(1,O+.12))*1.85)),16,.022,5))}l(0,"tulang",new ve(Ei(D),c({color:ai(.82,.86,.6),roughness:.5}))),l(0,"tangkai",new ve(new mi(new _n([an(-3.25,d(-3.25,0),0),an(-4,d(-3.25,0)-.25,0),an(-4.8,d(-3.25,0)-.75,.1)]),16,.08,8),c({color:ai(.55,.62,.32),roughness:.6})))}let f=[-2.4,1.1,2.7];{l(1,"kutikula",new ve(new Jn(3.5*2,.1,1.5*2),c({color:ai(.95,.92,.7),roughness:.08,transmission:.5,transparent:!0,opacity:.6,clearcoat:1}))).position.y=1.5;let D=c({color:ai(.8,.9,.78),roughness:.3,transparent:!0,opacity:.45,depthWrite:!1}),A=(J,Z)=>{let ae=[];for(let oe=0;oe<15;oe++)for(let ge=0;ge<6;ge++){let Se=-3.27+oe*.47,Ue=-1.5+.25+ge*.5;Z&&f.some(Ge=>Math.abs(Se-Ge)<.3&&Math.abs(Ue)<.3)||ae.push({p:an(Se,J,Ue),s:an(.44,.28,.47)})}return ae},k=new Jn(1,1,1);l(1,"epidermis",u(k,D,A(1.3,!1))),l(1,"epidermis",u(k,D,A(-1.2,!0)));let O=[],H=[];for(let J=0;J<17;J++)for(let Z=0;Z<7;Z++){let ae=-3.3+J*.41,oe=-1.5+.2+Z*.43;O.push({p:an(ae,.68,oe),s:an(1,1,1)});for(let ge=0;ge<6;ge++)H.push({p:an(ae+(h()-.5)*.18,.3+h()*.75,oe+(h()-.5)*.18),s:an(.05,.035,.035),ry:h()*3})}l(1,"palisade",u(new ao(.17,.56,4,10),c({color:ai(.45,.74,.3),roughness:.4,transparent:!0,opacity:.6,depthWrite:!1}),O));let N=[];for(let J=0;J<160&&N.length<70;J++){let Z=-3.2+h()*6.4,ae=-.85+h()*.85,oe=-1.5+.3+h()*(1.5*2-.6);if(!(Math.abs(Z)<.75&&ae<.05)&&!f.some(ge=>Math.abs(Z-ge)<.35&&ae<-.55)&&!N.some(ge=>ge.p.distanceTo(an(Z,ae,oe))<.42)){N.push({p:an(Z,ae,oe),s:an(.28,.2,.26),ry:h()*3});for(let ge=0;ge<3;ge++)H.push({p:an(Z+(h()-.5)*.25,ae+(h()-.5)*.15,oe+(h()-.5)*.25),s:an(.05,.035,.035),ry:h()*3})}}l(1,"bunga_karang",u(new mn(1,12,9),c({color:ai(.7,.86,.5),roughness:.45,transparent:!0,opacity:.6,depthWrite:!1}),N));let Y=new yn(new mn(1,8,6),c({color:ai(.18,.55,.12),roughness:.35}),H.length);{let J=new Je;H.forEach((Z,ae)=>{J.compose(Z.p,new _t().setFromEuler(new jt(0,Z.ry,0)),Z.s),Y.setMatrixAt(ae,J)})}l(1,"kloroplas",Y);let q=[];for(let J=0;J<12;J++){let Z=J/12*nt;q.push({p:an(Math.cos(Z)*.55,-.4+Math.sin(Z)*.42,0),s:an(.13,.13,1.5),rx:Math.PI/2})}l(1,"berkas",u(new Gt(1,1,2,10),c({color:ai(.8,.85,.6),roughness:.5}),q));let z=[-.2,0,.2].map(J=>({p:an(J,-.25,0),s:an(.08,1.5,.08),rx:Math.PI/2})),U=[-.15,.05,.22].map(J=>({p:an(J,-.58,0),s:an(.05,1.5,.05),rx:Math.PI/2}));l(1,"berkas",u(new Gt(1,1,2,10),c({color:ai(.35,.55,.85),roughness:.4}),z)),l(1,"berkas",u(new Gt(1,1,2,8),c({color:ai(.85,.7,.3),roughness:.4}),U))}let p=[];{let w=c({color:ai(.45,.72,.3),roughness:.35});for(let S of f)for(let D of[1,-1]){let A=new ve(new xo(.17,.08,8,16,Math.PI),w);A.rotation.set(-Math.PI/2,0,D>0?-Math.PI/2:Math.PI/2),A.position.set(S,-1.22,0),A.userData.sx=S,A.userData.s=D,l(1,"stomata",A),p.push(A)}}let b=[];{l(2,"membran",new ve(new mn(1,40,28).scale(3.3,1.45,1.9),c({color:ai(.55,.85,.45),roughness:.15,transparent:!0,opacity:.25,depthWrite:!1,clearcoat:1,side:Dt}))),l(2,"stroma",new ve(new mn(1,36,24).scale(3.1,1.32,1.75),c({color:ai(.75,.9,.55),roughness:.6,transparent:!0,opacity:.35,depthWrite:!1})));let w=[],S=[];for(let A=0;A<60&&b.length<14;A++){let k=(h()-.5)*4.6,O=(h()-.5)*2.2;(k/2.7)**2+(O/1.4)**2>1||b.some(H=>Math.hypot(H.x-k,H.z-O)<.85)||b.push(an(k,(h()-.5)*.3,O))}b.forEach(A=>{let k=5+Math.floor(h()*4);for(let O=0;O<k;O++)w.push({p:an(A.x,A.y-k*.055+O*.11,A.z),s:an(.36,.035,.36)})}),b.forEach((A,k)=>{let O=b[(k+3)%b.length],H=O.clone().sub(A),N=H.length();if(N>2.4)return;let Y=new Jn(N,.025,.12);Y.rotateY(-Math.atan2(H.z,H.x)),Y.translate((A.x+O.x)/2,(A.y+O.y)/2,(A.z+O.z)/2),S.push(Y)});let D=c({color:ai(.12,.5,.12),roughness:.35,clearcoat:.4});l(2,"grana",u(new Gt(1,1,1,20),D,w)),S.length&&l(2,"grana",new ve(Ei(S),D))}let g=Og(64,(w,S)=>{let D=w.createRadialGradient(32,32,2,32,32,30);D.addColorStop(0,"rgba(255,255,255,1)"),D.addColorStop(.55,"rgba(255,255,255,0.9)"),D.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=D,w.fillRect(0,0,S,S)},!1),m=[],y=(w,S,D,A,k,O)=>{let H=new lt;H.setAttribute("position",new ot(new Float32Array(A*3),3));let N=new qn(H,new Cn({map:g,color:D,size:k,transparent:!0,depthWrite:!1}));N.frustumCulled=!1,N.userData.noAO=!0,s[w].add(N);let Y=S.map(q=>new _n(q.map(z=>an(...z))));m.push({p:N,curves:Y,n:A,kind:O,lv:w,u:Array.from({length:A},()=>h()),c:Array.from({length:A},(q,z)=>z%Y.length),j:Array.from({length:A},()=>[(h()-.5)*.15,(h()-.5)*.15])})},_=new he(1.6,1.6,1.6),v=new he(.6,2.2,2.6),T=new he(.4,1,2.8),E=new he(2.6,1.5,.3),M=new he(3,2.6,.6);y(0,Array.from({length:10},(w,S)=>{let D=-2.6+S*.55,A=(h()-.5)*2;return[[D,d(D,A)-.05,A],[D+.3,-1,A+.2],[D+.5,-2.2,A]]}),v,50,.12,"o2"),y(0,Array.from({length:10},(w,S)=>{let D=-2.4+S*.5,A=(h()-.5)*2;return[[D-.4,-2.4,A],[D-.2,-1.2,A-.2],[D,d(D,A)-.05,A]]}),_,40,.1,"co2"),y(0,[[[-4.8,d(-3.25,0)-.7,.1],[-3.3,d(-3.3,0)+.04,0],[3.2,d(3.2,0)+.04,0]]],T,30,.12,"h2o"),y(1,f.map(w=>[[w,-2.3,.3],[w,-1.22,0],[w+.2,-.7,.2],[w+.1,.4,-.2]]),_,45,.1,"co2"),y(1,f.map(w=>[[w-.3,.3,.2],[w-.1,-.7,0],[w,-1.22,0],[w-.2,-2.4,-.3]]),v,45,.11,"o2"),y(1,[[[0,-.25,-1.5],[0,-.25,0],[0,0,.4],[-.8,.6,.6],[-2.2,.8,.2]],[[.2,-.25,-1.5],[.2,-.25,0],[.4,.1,0],[1.6,.7,-.4]]],T,40,.1,"h2o"),y(1,[[[-1.8,.6,.3],[-.6,-.2,.2],[.05,-.58,0],[.05,-.58,1.6]],[[2,.6,-.4],[.6,-.3,0],[.22,-.58,0],[.22,-.58,1.6]]],E,30,.1,"sug"),y(2,b.slice(0,8).map(w=>[[w.x+1.2,4,w.z],[w.x+.4,1.4,w.z],[w.x,w.y,w.z]]),M,40,.14,"pho"),y(2,b.slice(0,8).map(w=>[[w.x,w.y,w.z],[w.x*1.2,w.y+.8,w.z*1.3],[w.x*1.6,w.y+2.6,w.z*1.8]]),v,35,.12,"o2"),y(2,[[[-5,-.5,1.5],[-2.6,-.3,.6],[-1,0,0]],[[5,.4,-1.5],[2.6,.2,-.6],[1,0,.2]]],_,30,.1,"co2"),y(2,[[[0,-.2,0],[.6,-1,.5],[1.2,-3.2,1.2]],[[-.4,.1,.2],[-1,-1.1,-.3],[-1.6,-3.2,-1]]],E,24,.13,"sug");let x={yaw:.6,yaw0:.6,pitch:.45,dist:13,user:!1,sun:.7,depth:0,depthT:0,co2:.6,h2o:.8,hold:0,ok:!1};for(let w in r)for(let S of r[w].mats)S.userData.base=S.color.clone(),S.userData.op=S.opacity;let F=new he(.25,.28,.3),I={};for(let w in r)I[w]=0;let G={helai:0,tulang:0,tangkai:0,kutikula:1,epidermis:1,palisade:1,bunga_karang:1,berkas:1,stomata:1,kloroplas:1,membran:2,stroma:2,grana:2},X=an(0,0,0);return{scene:e,camera:t,layerMeshes:a,state:x,waterFlow:{pts:{}},sugarFlow:{pts:{}},depthFor:w=>[0,.5,1][G[w]??0],rate:()=>Gg(x.sun,x.co2,x.h2o),update(w,S,D,A){x.user||(x.yaw=x.yaw0+.3*Math.sin(S*.3));let k=Math.cos(x.pitch),O=Math.sin(x.pitch);t.position.set(X.x+Math.sin(x.yaw)*k*x.dist,X.y+O*x.dist,X.z+Math.cos(x.yaw)*k*x.dist),t.lookAt(X),x.depth+=(x.depthT-x.depth)*Math.min(1,w*4);let H=x.depth,N=1-wt(.18,.36,H),Y=wt(.66,.84,H),q=1-N-Y;s[0].visible=N>.03,s[0].scale.setScalar(sn(5,1,N)),s[1].visible=q>.03,s[1].scale.setScalar(H<.5?sn(.2,1,q):sn(5,1,q)),s[2].visible=Y>.03,s[2].scale.setScalar(sn(.2,1,Y)),n.intensity=.4+2.4*x.sun;let z=Gg(x.sun,x.co2,x.h2o);x.R=z;for(let U of p)U.position.x=U.userData.sx+U.userData.s*(.13+.09*z.open);z.rate>.95?x.hold+=w:x.hold=0,x.hold>2&&!x.ok&&(x.ok=!0);for(let U of m){if(!s[U.lv].visible){U.p.visible=!1;continue}let J=U.kind==="pho"?x.sun:U.kind==="h2o"?x.h2o*.5+z.rate*.5:U.kind==="co2"?z.open*x.co2:z.rate;if(U.p.visible=J>.02,!U.p.visible)continue;let Z=U.p.geometry.attributes.position,ae=.06+.3*J,oe=Math.ceil(U.n*It(J,.1,1));for(let ge=0;ge<U.n;ge++){if(ge>=oe){Z.setXYZ(ge,0,-999,0);continue}U.u[ge]+=ae*w,U.u[ge]>1&&(U.u[ge]-=1,U.c[ge]=Math.floor(h()*U.curves.length));let Se=U.curves[U.c[ge]].getPoint(U.u[ge]);Z.setXYZ(ge,Se.x+U.j[ge][0],Se.y+U.j[ge][1],Se.z)}Z.needsUpdate=!0}for(let U in r){let J=D&&D!==U&&G[D]===G[U]?1:0;I[U]+=(J-I[U])*Math.min(1,w*8);let Z=D===U?.18:A===U?.08:0;for(let ae of r[U].mats)ae.userData.base&&(ae.color.copy(ae.userData.base).lerp(F,I[U]*.55),ae.emissive&&ae.emissive.copy(ae.userData.base).multiplyScalar(Z))}}}}function Yg(){let i=null,e=null,t=null,n=!1,s=null,a=null,r=null,o=null,l=null,c=null,u=!0,h=.8,d=3,f=0,p=6,b=0;function g(){if(i){i.state==="suspended"&&i.resume();return}let S=window.AudioContext||window.webkitAudioContext;if(!S)return;i=new S,e=i.createGain(),e.gain.value=u?h:0,t=i.createBiquadFilter(),t.type="lowpass",t.frequency.value=2e4,t.Q.value=.7,e.connect(t),t.connect(i.destination);let D=i.sampleRate*3;c=i.createBuffer(1,D,i.sampleRate);let A=c.getChannelData(0),k=0,O=0,H=0;for(let be=0;be<D;be++){let ie=Math.random()*2-1;k=.99765*k+ie*.099,O=.963*O+ie*.2965,H=.57*H+ie*1.0526,A[be]=(k+O+H+ie*.1848)*.2}let N=(be,ie,pe)=>{let $=i.createBufferSource();$.buffer=c,$.loop=!0,$.loopStart=Math.random()*2;let ye=i.createBiquadFilter();ye.type=be,ye.frequency.value=ie,ye.Q.value=pe;let Ee=i.createGain();return Ee.gain.value=0,$.connect(ye),ye.connect(Ee),Ee.connect(e),$.start(),{g:Ee,fl:ye}},Y=N("bandpass",380,.5);s=Y.g,a=Y.fl,r=N("highpass",2500,.4).g;let z=i.createOscillator();z.type="sine",z.frequency.value=4300;let U=i.createGain();U.gain.value=0;let J=i.createOscillator();J.frequency.value=16;let Z=i.createGain();Z.gain.value=.5;let ae=i.createGain();ae.gain.value=.5,o=i.createGain(),o.gain.value=0,J.connect(Z),Z.connect(U.gain),z.connect(U),U.connect(o),o.connect(e),z.start(),J.start();let oe=i.createBufferSource();oe.buffer=c,oe.loop=!0;let ge=i.createBiquadFilter();ge.type="lowpass",ge.frequency.value=190,ge.Q.value=.8;let Se=i.createGain();Se.gain.value=.55;let Ue=i.createOscillator();Ue.frequency.value=25;let Ge=i.createGain();Ge.gain.value=.45,Ue.connect(Ge),Ge.connect(Se.gain),l=i.createGain(),l.gain.value=0,oe.connect(ge),ge.connect(Se),Se.connect(l),l.connect(e),oe.start(),Ue.start()}function m(S){if(i.createStereoPanner){let D=i.createStereoPanner();return D.pan.value=Math.max(-1,Math.min(1,S)),D}return i.createGain()}function y(S,D,A,k,O,H){let N=i.createOscillator(),Y=i.createGain(),q=m(H);N.type="sine",N.frequency.setValueAtTime(D,S),N.frequency.exponentialRampToValueAtTime(A,S+k),Y.gain.setValueAtTime(1e-4,S),Y.gain.exponentialRampToValueAtTime(O,S+k*.2),Y.gain.exponentialRampToValueAtTime(1e-4,S+k),N.connect(Y),Y.connect(q),q.connect(e),N.start(S),N.stop(S+k+.02)}function _(S){let D=i.currentTime+.02,A=Math.random()*2-1,k=Math.floor(Math.random()*3),O=2300+Math.random()*1800;if(k===0){let H=2+Math.floor(Math.random()*4);for(let N=0;N<H;N++)y(D+N*.13,O*(1+Math.random()*.1),O*1.5,.09,S,A)}else if(k===1)for(let H=0;H<3;H++)y(D+H*.22,O*.8,O*1.4,.16,S,A),y(D+H*.22+.1,O*1.5,O*1,.1,S*.8,A);else y(D,O,O*1.8,.28,S,A),y(D+.3,O*1.7,O*.9,.22,S*.9,A)}function v(S,D){if(!i||!u)return;let A=i.currentTime+.02,k=.75+Math.random()*.25,O=420+Math.random()*120,H=i.createOscillator();H.type="sawtooth",H.frequency.setValueAtTime(O,A),H.frequency.linearRampToValueAtTime(O*1.65,A+k*.35),H.frequency.linearRampToValueAtTime(O*1.05,A+k);let N=i.createBiquadFilter(),Y=i.createBiquadFilter();N.type=Y.type="bandpass",N.Q.value=Y.Q.value=5,N.frequency.setValueAtTime(700,A),N.frequency.linearRampToValueAtTime(1100,A+k*.4),N.frequency.linearRampToValueAtTime(800,A+k),Y.frequency.setValueAtTime(1900,A),Y.frequency.linearRampToValueAtTime(2600,A+k*.4),Y.frequency.linearRampToValueAtTime(2e3,A+k);let q=i.createGain(),z=m(D);q.gain.setValueAtTime(1e-4,A),q.gain.exponentialRampToValueAtTime(S,A+.09),q.gain.setValueAtTime(S,A+k*.55),q.gain.exponentialRampToValueAtTime(1e-4,A+k);let U=i.createOscillator();U.frequency.value=6;let J=i.createGain();J.gain.value=8,U.connect(J),J.connect(H.frequency),U.start(A),U.stop(A+k+.05),H.connect(N),H.connect(Y);let Z=i.createGain();Z.gain.value=.55,N.connect(Z),Y.connect(Z),Z.connect(q),q.connect(z),z.connect(e),H.start(A),H.stop(A+k+.05)}function T(S,D,A,k,O,H="bandpass",N=0){let Y=i.createBufferSource();Y.buffer=c;let q=i.createBiquadFilter();q.type=H,q.frequency.value=D,q.Q.value=A;let z=i.createGain(),U=m(N);z.gain.setValueAtTime(1e-4,S),z.gain.exponentialRampToValueAtTime(O,S+.012),z.gain.exponentialRampToValueAtTime(1e-4,S+k),Y.connect(q),q.connect(z),z.connect(U),U.connect(e),Y.start(S,Math.random()*2),Y.stop(S+k+.05)}function E(S,D=1){if(!i||!u)return;let A=i.currentTime+.01;if(S>=2){T(A,900,.6,.9,.5*D),T(A+.03,2600,.8,.6,.25*D,"highpass");let k=i.createOscillator(),O=i.createGain();k.frequency.setValueAtTime(140,A),k.frequency.exponentialRampToValueAtTime(45,A+.35),O.gain.setValueAtTime(1e-4,A),O.gain.exponentialRampToValueAtTime(.35*D,A+.02),O.gain.exponentialRampToValueAtTime(1e-4,A+.4),k.connect(O),O.connect(e),k.start(A),k.stop(A+.45);for(let H=0;H<7;H++)M(A+.25+Math.random()*.9,.05*D)}else S>=1?(T(A,1400,.9,.35,.22*D),T(A+.02,3200,1,.2,.08*D,"highpass"),M(A+.15,.03*D)):T(A,1100+Math.random()*600,1.2,.18,.12*D)}function M(S,D){let A=i.createOscillator(),k=i.createGain(),O=900+Math.random()*1500;A.type="sine",A.frequency.setValueAtTime(O,S),A.frequency.exponentialRampToValueAtTime(O*2.2,S+.05),k.gain.setValueAtTime(1e-4,S),k.gain.exponentialRampToValueAtTime(D,S+.005),k.gain.exponentialRampToValueAtTime(1e-4,S+.07),A.connect(k),k.connect(e),A.start(S),A.stop(S+.09)}function x(S=6,D=.05){if(!i||!u)return;let A=i.currentTime;for(let k=0;k<S;k++){let O=A+k*(.04+Math.random()*.08),H=250+Math.random()*500,N=i.createOscillator(),Y=i.createGain();N.frequency.setValueAtTime(H,O),N.frequency.exponentialRampToValueAtTime(H*2.5,O+.06),Y.gain.setValueAtTime(1e-4,O),Y.gain.exponentialRampToValueAtTime(D,O+.01),Y.gain.exponentialRampToValueAtTime(1e-4,O+.08),N.connect(Y),Y.connect(e),N.start(O),N.stop(O+.1)}}function F(S){!i||S===n||(n=S,t.frequency.setTargetAtTime(S?520:2e4,i.currentTime,.12))}function I(S,D){if(!i||!u)return;let A=i.currentTime+.02,k=1.3+Math.random()*.5,O=95+Math.random()*25,H=i.createOscillator();H.type="sawtooth",H.frequency.setValueAtTime(O*.85,A),H.frequency.linearRampToValueAtTime(O*1.15,A+k*.3),H.frequency.linearRampToValueAtTime(O*.9,A+k);let N=i.createBiquadFilter(),Y=i.createBiquadFilter();N.type=Y.type="bandpass",N.Q.value=4,Y.Q.value=5,N.frequency.setValueAtTime(320,A),N.frequency.linearRampToValueAtTime(520,A+k*.4),N.frequency.linearRampToValueAtTime(350,A+k),Y.frequency.setValueAtTime(800,A),Y.frequency.linearRampToValueAtTime(1e3,A+k*.4);let q=i.createGain(),z=m(D);q.gain.setValueAtTime(1e-4,A),q.gain.exponentialRampToValueAtTime(S*1.4,A+.25),q.gain.setValueAtTime(S*1.4,A+k*.7),q.gain.exponentialRampToValueAtTime(1e-4,A+k);let U=i.createGain();U.gain.value=.9,H.connect(N),H.connect(Y),N.connect(U),Y.connect(U),U.connect(q),q.connect(z),z.connect(e),H.start(A),H.stop(A+k+.05)}function G(S,D){if(!i||!u)return;let A=i.currentTime+.02,k=.7+Math.random()*.3,O=330+Math.random()*80,H=i.createOscillator();H.type="sawtooth",H.frequency.setValueAtTime(O,A),H.frequency.linearRampToValueAtTime(O*1.1,A+k*.3),H.frequency.linearRampToValueAtTime(O*.92,A+k);let N=i.createOscillator();N.frequency.value=13;let Y=i.createGain();Y.gain.value=.45;let q=i.createGain();q.gain.value=.55,N.connect(Y),Y.connect(q.gain);let z=i.createBiquadFilter(),U=i.createBiquadFilter();z.type=U.type="bandpass",z.Q.value=5,U.Q.value=6,z.frequency.value=650,U.frequency.value=1900,z.frequency.setValueAtTime(450,A),z.frequency.linearRampToValueAtTime(700,A+.12);let J=i.createGain(),Z=m(D);J.gain.setValueAtTime(1e-4,A),J.gain.exponentialRampToValueAtTime(S,A+.06),J.gain.setValueAtTime(S,A+k*.6),J.gain.exponentialRampToValueAtTime(1e-4,A+k),H.connect(q),q.connect(z),q.connect(U);let ae=i.createGain();ae.gain.value=.7,z.connect(ae),U.connect(ae),ae.connect(J),J.connect(Z),Z.connect(e),H.start(A),H.stop(A+k+.05),N.start(A),N.stop(A+k+.05)}function X(S,D,A){S==="sapi"?I(D,A):S==="kambing"?G(D*.9,A):v(D*.8,A)}function w(S,D,A=.6){S.gain.setTargetAtTime(D,i.currentTime,A)}return{init:g,get enabled(){return u},setEnabled(S){u=S,i&&e.gain.setTargetAtTime(u?h:0,i.currentTime,.1)},meow:v,call:X,splash:E,bubbles:x,setUnder:F,update(S,D){if(!i||!u)return;b+=S;let A=(D.world?1:.25)*(D.under?.25:1),k=.5+.5*Math.sin(b*.23)*Math.sin(b*.071+1.3);w(s,(.05+.1*k)*A),a.frequency.setTargetAtTime(260+420*k,i.currentTime,.8),w(r,(.004+.02*k*k)*A*(.4+.6*D.day)),w(o,.012*Math.max(0,1-D.day*2.2)*A),w(l,D.catSub?.22:0,.4),D.world&&!D.under&&D.day>.35&&(d-=S,d<=0&&(_(.035+Math.random()*.03),f>0?(f--,d=.4+Math.random()*.9):(f=Math.random()<.3?2+Math.floor(Math.random()*3):0,d=3+Math.random()*7)))}}}function hS(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.5,"rgba(255,255,255,0.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,nt),e.fill(),new pn(i)}function $g(i,e,t,n,s){let a=new Float32Array(e*3).fill(-999),r=new lt;r.setAttribute("position",new ot(a,3));let o=new qn(r,new Cn({map:s,color:t,size:n,sizeAttenuation:!0,transparent:!0,depthWrite:!1,opacity:.85}));return o.frustumCulled=!1,o.userData.noAO=!0,i.add(o),{pts:o,pos:a,vel:new Float32Array(e*3),life:new Float32Array(e),N:e,next:0}}function Qg(i,e){let t=hS(),n=$g(i,180,new he(.9,.97,1),.075,t),s=$g(i,70,new he(.8,.95,1),.028,t),a=r=>{let o=r.next;return r.next=(r.next+1)%r.N,o};return{splash(r,o,l,c){for(let u=0;u<l;u++){let h=a(n),d=Math.random()*nt,f=Math.random()*.18,p=(.4+Math.random())*c;n.pos[h*3]=r+Math.cos(d)*f,n.pos[h*3+1]=e+.02,n.pos[h*3+2]=o+Math.sin(d)*f;let b=(.4+Math.random()*1.1)*c;n.vel[h*3]=Math.cos(d)*b,n.vel[h*3+1]=1.4+p*2.4,n.vel[h*3+2]=Math.sin(d)*b,n.life[h]=1.6}},bubbles(r,o,l,c){for(let u=0;u<c;u++){let h=a(s);s.pos[h*3]=r+(Math.random()-.5)*.3,s.pos[h*3+1]=o,s.pos[h*3+2]=l+(Math.random()-.5)*.3,s.vel[h*3]=Math.random()*nt,s.vel[h*3+1]=.5+Math.random()*.5,s.life[h]=4}},update(r,o){for(let l=0;l<n.N;l++)n.life[l]<=0||(n.life[l]-=r,n.vel[l*3+1]-=9.8*r,n.pos[l*3]+=n.vel[l*3]*r,n.pos[l*3+1]+=n.vel[l*3+1]*r,n.pos[l*3+2]+=n.vel[l*3+2]*r,(n.pos[l*3+1]<e&&n.vel[l*3+1]<0||n.life[l]<=0)&&(n.life[l]=0,n.pos[l*3+1]=-999));for(let l=0;l<s.N;l++){if(s.life[l]<=0)continue;s.life[l]-=r;let c=s.vel[l*3];s.pos[l*3]+=Math.sin(o*6+c)*.15*r,s.pos[l*3+1]+=s.vel[l*3+1]*r,s.pos[l*3+2]+=Math.cos(o*5+c)*.15*r,(s.pos[l*3+1]>e-.02||s.life[l]<=0)&&(s.life[l]=0,s.pos[l*3+1]=-999)}n.pts.geometry.attributes.position.needsUpdate=!0,s.pts.geometry.attributes.position.needsUpdate=!0}}}(async function(){"use strict";let i="hutan-ilmu-v1",e="hutan-ilmu-q",t=xu.layers,n=xu.specimens,s=xu.quiz,a=[{data:Wm,spec:sg},{data:Pf("sapi"),spec:dg},{data:Pf("kambing"),spec:Mg}],r=_g.map(function(P){let V=Sg(P);return{data:V,spec:Cf(V.P),fish:!0}}),o=["kelapa","bambu"].map(function(P){return{data:Lg(P),mono:!0,buildD:function(K){return Ug(K,{type:P})}}}),l=[{data:Hg,leaf:!0,buildD:function(P){return Vg(P)}}],c=a.concat(r,o,l),u=n.concat(c.map(function(P){return P.data.specimen}));c.forEach(function(P,V){P.hi=n.length+V});let h={x:13,z:22.5,r:8.5},d=t,f="tree",p=function(){return f!=="tree"},b=function(P){return c.find(function(V){return V.data.id===P})},g=function(){return p()&&!!b(f).fish},m=function(){return r.filter(function(P){return x.trees[P.data.id]}).length},y=function(P){return f==="tree"?P:(f==="kucing"?"cat:":f+":")+P},_=function(){return a.filter(function(P){return x.trees[P.data.id]}).length},v=function(){return n.filter(function(P){return x.trees[P.id]}).length},T=function(){return Object.keys(x.found).filter(function(P){return P.indexOf(":")<0}).length},E="ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer:coarse)").matches,M=/[?&]debug/.test(location.search),x={xp:0,found:{},trees:{},qdone:{},mission:!1};try{let P=localStorage.getItem(i);if(P){let V=JSON.parse(P);V&&typeof V=="object"&&(x.xp=V.xp|0,x.found=V.found||{},x.trees=V.trees||{},x.qdone=V.qdone||{},x.mission=!!V.mission)}}catch{}function F(){try{localStorage.setItem(i,JSON.stringify(x))}catch{}}let I=0;function G(P){let V=Ne("#toast");V.textContent=P,V.classList.add("on"),clearTimeout(I),I=setTimeout(function(){V.classList.remove("on")},2400)}function X(){let P=T(),V=v();if(!x.mission)return"Temukan 6 lapisan batang: "+P+"/6";if(V<n.length)return"Bedah semua pohon bertanda: "+V+"/"+n.length;if(_()<a.length)return"Bedah hewan: kucing, sapi, kambing "+_()+"/"+a.length;let K=o.filter(function(xe){return x.trees[xe.data.id]}).length;return K<o.length?"Bedah tumbuhan monokotil (kelapa, bambu) dan bandingkan dengan jati: "+K+"/"+o.length:x.trees.daun?m()<r.length?"Selami danau dan bedah 5 jenis ikan: "+m()+"/"+r.length:"Semua misi selesai. Coba kuis untuk XP tambahan.":"Pelajari daun dan fotosintesis di anakan jati dekat jalan setapak."}function w(){let P=Math.floor(x.xp/100)+1;Ne("#lvl").textContent="Level "+P,Ne("#xpTxt").textContent=x.xp%100+" / 100 XP",Ne("#xpBar").style.width=x.xp%100+"%",Ne("#mission").textContent=X()}function S(P,V){x.xp+=P,G("+"+P+" XP "+V),w(),F()}function D(){!x.mission&&T()>=t.length&&(x.mission=!0,S(60,"misi selesai"),w())}let A=null;try{A=localStorage.getItem(e)}catch{}A!=="tinggi"&&A!=="hemat"&&(A=E?"hemat":"tinggi");let k=(location.search.match(/[?&]q=(tinggi|hemat)/)||[])[1];M&&k&&(A=k);let O;try{O=new mu({canvas:Ne("#view"),antialias:!1,powerPreference:"high-performance"})}catch{Ne("#nogl").style.display="flex",Ne("#loading").style.display="none";return}let H=O.domElement;O.toneMapping=da,O.toneMappingExposure=1,O.shadowMap.enabled=!0,O.shadowMap.type=ua;let N=function(){let P=window.devicePixelRatio||1;return A==="tinggi"?Math.min(P,2):Math.min(P,1.25)};function Y(P,V){Ne("#loadBar").style.width=Math.round(P*100)+"%",V&&(Ne("#loadTxt").textContent=V)}let q=function(){return new Promise(function(P){setTimeout(P,0)})};im(n.concat(o.map(function(P){return P.data.specimen})));let z=new Gn,U=new en(66,1,.15,1200);U.rotation.order="YXZ";let J=fm(z,O);am(z);let Z=rm(z),ae=Qg(z,rn),oe=8,ge=new Map;function Se(P,V,K){let xe=Math.floor(P/oe)+","+Math.floor(V/oe),Le=ge.get(xe);Le||(Le=[],ge.set(xe,Le)),Le.push({x:P,z:V,r:K})}function Ue(P){let V=Math.floor(P.x/oe),K=Math.floor(P.z/oe);for(let xe=-1;xe<=1;xe++)for(let Le=-1;Le<=1;Le++){let et=ge.get(V+xe+","+(K+Le));if(et)for(let mt=0;mt<et.length;mt++){let qt=et[mt],ze=P.x-qt.x,St=P.z-qt.z,Ht=Math.hypot(ze,St),ct=qt.r+.45;Ht<ct&&Ht>1e-4&&(P.x=qt.x+ze/Ht*ct,P.z=qt.z+St/Ht*ct)}}}let Ge=await Qm({scene:z,heroes:n,clear:[h,{x:4,z:-3,r:2.5}].concat(o.map(function(P){let V=P.data.specimen;return{x:V.x,z:V.z,r:5}}),[{x:-18,z:38,r:5}]),addObs:Se,quality:A,progress:function(P,V){Y(.1+P*.6,V)}}),be=Ge.heroObjs,ie=Ge.heroHits;a.forEach(function(P,V){let K=P.data.specimen;P.w=Km(z,{heightAt:cn,WATER:rn},P.spec,{x:K.x,z:K.z},404+V*31,P.data.id==="kucing"?null:h);let xe=new ve(new hs(P.data.id==="sapi"?.3:.16,0),new Ke({color:16765786,emissive:16754688,emissiveIntensity:2.2,roughness:.3}));xe.userData.noAO=!0,z.add(xe);let Le=P.data.id==="sapi"?1.6:P.data.id==="kambing"?.9:.55,et=new ds(Le,Le+.1,48,1);et.rotateX(-Math.PI/2);let mt=new ve(et,new tn({color:new he(2.2,1.7,.5),transparent:!0,opacity:.8,side:Dt,depthWrite:!1}));mt.userData.noAO=!0,z.add(mt),P.w.hit.userData.hero=P.hi,ie.push(P.w.hit),be.push({g:P.w.group,mk:xe,ring:mt,y:P.w.y}),P.callT=4+V*5});let pe=Pg(z,{heightAt:cn,WATER:rn},r.map(function(P){return Object.assign({P:P.data.P},P.data.world)}),Kn);r.forEach(function(P,V){let K=new ve(new mn(.6,8,6),new tn({visible:!1}));K.userData.hero=P.hi,z.add(K),ie.push(K),P.hit=K,P.G=pe.groups[V],be.push({g:new Vt,mk:new Vt,ring:new Vt,y:rn-1})}),o.forEach(function(P){let V=P.data.specimen,K=cn(V.x,V.z);P.data.id==="kelapa"?(Uf(z,V.x,K,V.z,7,9.5),Se(V.x,V.z,.35),[[-20,40,3,8],[-14,37,5,10],[-22,43,9,7.5]].forEach(function(qt){Uf(z,qt[0],cn(qt[0],qt[1]),qt[1],qt[2],qt[3]),Se(qt[0],qt[1],.3)})):(Cg(z,V.x,K,V.z,3),Se(V.x,V.z,1.1));let xe=new ve(new hs(.3,0),new Ke({color:16765786,emissive:16754688,emissiveIntensity:2.2,roughness:.3}));xe.position.set(V.x,0,V.z),xe.userData.noAO=!0,z.add(xe);let Le=new ds(1.4,1.55,48,1);Le.rotateX(-Math.PI/2);let et=new ve(Le,new tn({color:new he(2.2,1.7,.5),transparent:!0,opacity:.8,side:Dt,depthWrite:!1}));et.position.set(V.x,K+.05,V.z),et.userData.noAO=!0,z.add(et);let mt=new ve(new Gt(1.2,1.2,6,8),new tn({visible:!1}));mt.position.set(V.x,K+3,V.z),mt.userData.hero=P.hi,z.add(mt),ie.push(mt),be.push({g:new Vt,mk:xe,ring:et,y:K})}),l.forEach(function(P){let V=P.data.specimen,K=cn(V.x,V.z);Xg(z,V.x,K,V.z),Se(V.x,V.z,.2);let xe=new ve(new hs(.16,0),new Ke({color:16765786,emissive:16754688,emissiveIntensity:2.2,roughness:.3}));xe.position.set(V.x,0,V.z),xe.userData.noAO=!0,z.add(xe);let Le=new ds(.7,.8,40,1);Le.rotateX(-Math.PI/2);let et=new ve(Le,new tn({color:new he(2.2,1.7,.5),transparent:!0,opacity:.8,side:Dt,depthWrite:!1}));et.position.set(V.x,K+.05,V.z),et.userData.noAO=!0,z.add(et);let mt=new ve(new Gt(.6,.6,2.4,8),new tn({visible:!1}));mt.position.set(V.x,K+1.2,V.z),mt.userData.hero=P.hi,z.add(mt),ie.push(mt),be.push({g:new Vt,mk:xe,ring:et,y:K})}),(function(){let V=Math.atan2(2-h.z,0-h.x),K=[],xe=[],Le=[];for(let ze=0;ze<28;ze++){let St=ze/28*Math.PI*2,Ht=h.x+Math.cos(St)*h.r,ct=h.z+Math.sin(St)*h.r;Le.push({a:St,x:Ht,z:ct,y:cn(Ht,ct)})}let et=function(ze,St){return Math.abs(Math.atan2(Math.sin(ze-St),Math.cos(ze-St)))};Le.forEach(function(ze,St){let Ht=new Gt(.07,.09,1.2,6);Ht.translate(ze.x,ze.y+.55,ze.z),K.push(Ht),Se(ze.x,ze.z,.12);let ct=Le[(St+1)%28],Mt=(ze.a+ct.a)/2+(St===27?Math.PI:0);if(et(Mt,V)<.18)return;let ri=Math.hypot(ct.x-ze.x,ct.z-ze.z);for(let ns of[.45,.9]){let yi=new Jn(ri,.07,.05);yi.rotateY(-Math.atan2(ct.z-ze.z,ct.x-ze.x)),yi.translate((ze.x+ct.x)/2,(ze.y+ct.y)/2+ns,(ze.z+ct.z)/2),xe.push(yi)}});let mt=new Ke({color:new he().setRGB(.36,.25,.16,ut),roughness:.9}),qt=new ve(st(K.concat(xe)),mt);qt.castShadow=!0,qt.receiveShadow=!0,z.add(qt)})();let $={x:0,z:2,y:0,face:Math.PI,phase:0,jh:0,jv:0,swim:!1,ey:0,eyeS:0,wet:!1,under:!1,step:0,stroke:0,bub:0};$.y=cn($.x,$.z);let ye={yaw:0,pitch:-.04,fov:66},Ee=1,it=1;function qe(P){Ee=It(Ee*P,.3,1.15)}let Ye=Yg(),gt="hutan-ilmu-snd";try{localStorage.getItem(gt)==="0"&&Ye.setEnabled(!1)}catch{}function Et(){let P=Ne("#bSnd");P&&(P.querySelector("span").textContent="Suara: "+(Ye.enabled?"Nyala":"Mati"))}["pointerdown","keydown","touchstart"].forEach(function(P){window.addEventListener(P,function(){Ye.init()},{passive:!0})}),Y(.72,"Menyiapkan bedah batang\u2026"),await q();let j=jm(O,t),yt=j,at=yt.camera,Ft=yt.layerMeshes,Pe=yt.waterFlow,Ot=yt.sugarFlow,fe=yt.state,$e=null,B=null;Y(.85,"Menyiapkan efek visual\u2026"),await q();let R=Ku(O,z,U),te=Ku(O,j.scene,j.camera,{aoRadius:.45,bloomStrength:.45}),Me=.3,ce=0;function Te(){let P=Me*24%24,V=Math.floor(P),K=Math.floor((P-V)*60);Ne("#clockTxt").textContent=(V<10?"0":"")+V+":"+(K<10?"0":"")+K;let xe=J.day<.25;xe!==we&&(we=xe,Ne("#clock").classList.toggle("night",xe))}let we=!1;function re(P){A=P;try{localStorage.setItem(e,P)}catch{}R.setQuality(P),te.setQuality(P),c.forEach(function(K){K.fx&&K.fx.setQuality(P)}),J.setShadowSize(P==="tinggi"?2048:1024),J.envEvery=P==="tinggi"?2.5:5,Ge.setQuality(P);let V=Ne("#bQual");V&&(V.querySelector("span").textContent="Grafik: "+(P==="tinggi"?"Tinggi":"Hemat")),Be()}function ue(P){if(f=P,P!=="tree"){let K=b(P);K.D||(K.D=K.buildD?K.buildD(O):Zm(O,K.spec),K.fx=Ku(O,K.D.scene,K.D.camera,{aoRadius:.4,bloomStrength:.35}),K.fx.setQuality(A),K.fx.setSize(window.innerWidth,window.innerHeight,N())),yt=K.D,d=K.data.layers}else yt=j,d=t;at=yt.camera,Ft=yt.layerMeshes,Pe=yt.waterFlow,Ot=yt.sugarFlow,fe=yt.state,document.body.classList.toggle("catmode",P!=="tree"),document.body.classList.toggle("monomode",P!=="tree"&&!!b(P).mono);let V=P!=="tree"&&!!b(P).leaf;document.body.classList.toggle("leafmode",V),Ne("#depthLbl").textContent=V?"Perbesaran":"Kedalaman",Ne("#sunLbl").textContent=V?"Cahaya":P==="tree"||b(P).mono?"Matahari":"Aktivitas",document.body.classList.toggle("fishmode",P!=="tree"&&!!b(P).fish)}let Ae=function(){return f==="tree"?te:b(f).fx},Q="world",de=0;function le(){let P=fe.sun;if(p()&&b(f).leaf){Ne("#sunCap").textContent="";return}if(p()&&b(f).mono){Ne("#sunCap").textContent=P>.6?"Cahaya kuat: stomata di daun terbuka lebar, penguapan (transpirasi) tinggi, sehingga air naik cepat lewat xilem di berkas pembuluh. Gula hasil fotosintesis turun lewat floem.":P>.25?"Cahaya sedang: air naik lebih pelan.":"Gelap: stomata menutup, aliran air melambat.";return}if(g()){Ne("#sunCap").textContent=P>.6?"Ikan aktif: tutup insang bergerak cepat supaya lebih banyak air melewati insang, dan jantung berdetak lebih cepat.":P>.3?"Aktivitas sedang: tutup insang membuka-menutup dengan teratur.":"Ikan beristirahat: gerakan tutup insang dan detak jantung melambat.";return}if(p()){let V=yt.vitals(P);Ne("#sunCap").textContent="Perkiraan: jantung "+V.bpm+" detak per menit, napas "+V.rr+" kali per menit. Saat aktif, otot butuh lebih banyak oksigen sehingga jantung dan paru bekerja lebih cepat."+(f!=="kucing"?" Rumen ikut berkontraksi lebih sering.":"")+" Angka ini kisaran umum, bukan patokan diagnosis.";return}Ne("#sunCap").textContent=P>.66?"Matahari terik: daun menguapkan banyak air (transpirasi), sehingga air tertarik naik cepat. Fotosintesis tinggi, banyak gula dikirim lewat floem.":P>.33?"Cahaya sedang: transpirasi dan fotosintesis berjalan sedang.":"Cahaya rendah atau malam: stomata cenderung menutup, aliran air melambat, dan gula yang dibuat berkurang."}let De='<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>';function Re(){let P=Ne("#chips");P.innerHTML=d.map(function(V){return'<button type="button" role="listitem" class="chip'+($e===V.id?" sel":"")+'" data-id="'+V.id+'"><span class="sw" style="background:'+V.ui+'"></span>'+V.name+(x.found[y(V.id)]?De:"")+"</button>"}).join("")}function Fe(){let P=Ne("#info"),V=u[de];if(!$e&&p()&&b(f).leaf){P.innerHTML='<h2>Daun dan fotosintesis</h2><p class="sci">'+V.sci+'</p><p class="hint">'+V.hint+"</p><h3>Persamaan</h3><p>"+V.fact+"</p>";return}if(!$e&&p()&&b(f).mono){P.innerHTML="<h2>Penampang batang "+V.short+'</h2><p class="sci">'+V.sci+' \xB7 monokotil</p><p class="hint">'+V.hint+"</p><h3>Tentang "+V.short+"</h3><p>"+V.fact+"</p>";return}if(!$e&&p()){P.innerHTML="<h2>Anatomi "+V.short+'</h2><p class="sci">'+V.sci+'</p><p class="hint">'+V.hint+"</p><h3>Tentang "+V.short+"</h3><p>"+V.fact+"</p>";return}if(!$e){P.innerHTML='<h2>Penampang batang</h2><p class="sci">'+V.name+'</p><p class="hint">Ketuk lapisan pada batang, atau pilih dari daftar, untuk mempelajarinya. Titik biru adalah air yang naik lewat xilem. Titik kuning adalah gula yang turun lewat floem.</p><h3>Tentang pohon ini</h3><p>'+V.fact+"</p>";return}let K=d.find(function(xe){return xe.id===$e});P.innerHTML='<h2 style="color:'+K.ui+'">'+K.name+'</h2><p class="sci">'+K.sci+"</p><h3>Apa ini</h3><p>"+K.what+"</p><h3>Fungsi</h3><p>"+K.fn+"</p><h3>Tahukah kamu</h3><p>"+K.fact+"</p>"+(V.notes&&V.notes[K.id]?"<h3>Pada "+V.short+"</h3><p>"+V.notes[K.id]+"</p>":"")}function je(P){if($e=P,P&&!x.found[y(P)]&&(x.found[y(P)]=1,S(20,p()?"bagian tubuh baru":"lapisan baru"),D()),p()&&P){let K=yt.depthFor?yt.depthFor(P):{kulit:0,otot:.32,rangka:.68}[P];fe.depthT=K!==void 0?K:1;let xe=Ne("#depth");xe&&(xe.value=Math.round(fe.depthT*100))}Re(),Fe();let V=Ne("#panel");V&&(V.scrollTop=0)}function bt(P){let V=Ne("#fade");V.style.opacity=1,setTimeout(function(){P(),V.style.opacity=0},window.matchMedia("(prefers-reduced-motion:reduce)").matches?0:380)}function _e(P){bt(function(){de=P;let V=u[P];if(ue(V.kind?V.id:"tree"),p()&&V.kind==="animal"&&Ye.call(V.id,.2,0),f==="tree"&&yt.setSpecies(Object.assign({id:V.id},V.wood)),Q="dissect",document.body.classList.add("dissect"),Ne("#dName").textContent=V.name,Ne("#dSci").textContent=(V.kind==="leaf"?"Daun dan fotosintesis \xB7 ":p()&&V.kind!=="mono"?"Anatomi dan fisiologi \xB7 ":"Penampang batang \xB7 ")+V.sci,fe.yaw=fe.yaw0||0,fe.user=!1,V.kind==="leaf")fe.pitch=.45,fe.dist=window.innerWidth<760?22:13,fe.depthT=0,fe.depth=0,fe.sun=.7,fe.co2=.6,fe.h2o=.8,fe.hold=0,fe.ok=!!x.found[y("maks")],[["#sun",70],["#depth",0],["#co2",60],["#h2o",80]].forEach(function(K){let xe=Ne(K[0]);xe&&(xe.value=K[1])});else if(V.kind==="mono"){fe.pitch=.55,fe.dist=window.innerWidth<760?24:14,fe.depthT=0,fe.depth=0,fe.sun=.65;let K=Ne("#sun"),xe=Ne("#depth");K&&(K.value=65),xe&&(xe.value=0)}else if(g()){fe.pitch=.25,fe.dist=window.innerWidth<760?35:13,fe.depthT=0,fe.depth=0,fe.sun=.3,fe.gas=.25,fe.vy=0,fe.fy=0,fe.hold=0,fe.counter=!0,fe.buoyOk=!!x.found[y("buoy")];let K=Ne("#sun"),xe=Ne("#depth"),Le=Ne("#gas"),et=Ne("#counter");K&&(K.value=30),xe&&(xe.value=0),Le&&(Le.value=25),et&&(et.checked=!0)}else if(p()){fe.pitch=.3,fe.dist=window.innerWidth<760?V.id==="sapi"?46:38:V.id==="sapi"?21:16,fe.depthT=0,fe.depth=0,fe.sun=.2;let K=Ne("#sun"),xe=Ne("#depth");K&&(K.value=20),xe&&(xe.value=0)}else fe.pitch=.5,fe.dist=window.innerWidth<760?19:14;x.trees[V.id]||(x.trees[V.id]=1,S(10,p()?V.short+" dibedah":"pohon baru")),$e=null,Re(),Fe(),le(),w(),Be(),xn={},An.x=0,An.y=0})}function Ze(){bt(function(){Q="world",ue("tree"),document.body.classList.remove("dissect"),Pi(),w(),Be()})}function pt(P){Ne("#sheet").innerHTML=P,Ne("#modal").classList.add("on"),xn={},An.x=0,An.y=0}function He(){Ne("#modal").classList.remove("on")}function kt(){return Ne("#modal").classList.contains("on")}function fn(){let P=T(),V=v(),K=t.map(function(Le){return x.found[Le.id]?'<div class="jc"><b><i style="background:'+Le.ui+'"></i>'+Le.name+"</b><em>"+Le.sci+"</em><p>"+Le.short+"</p></div>":'<div class="jc lock"><b><i style="background:#3b4f47"></i>???</b><em>Belum ditemukan</em><p>Bedah sebuah pohon untuk menemukannya.</p></div>'}).join(""),xe=n.map(function(Le){return x.trees[Le.id]?'<div class="jc"><b>'+Le.name+"</b><em>"+Le.sci+"</em><p>"+Le.fact+"</p></div>":'<div class="jc lock"><b>???</b><em>Belum dibedah</em><p>Cari pohon bertanda di hutan.</p></div>'}).join("");pt('<div class="head"><div><h2>Jurnal</h2><p style="color:var(--muted);font-size:14px">'+P+"/"+t.length+" lapisan batang, "+V+"/"+n.length+' pohon</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><h3>Lapisan batang</h3><div class="grid">'+K+'</div><h3>Pohon</h3><div class="grid">'+xe+"</div>")}let Nt=null;function Pr(P,V){for(let K=P.length-1;K>0;K--){let xe=Math.floor(V()*(K+1)),Le=P[K];P[K]=P[xe],P[xe]=Le}return P}function Ts(){let P=Math.random,V=p()&&Q==="dissect"?b(f).data.quiz.slice():s.filter(function(xe){return!xe.sp||x.trees[xe.sp]}).concat([].concat.apply([],c.map(function(xe){return x.trees[xe.data.id]&&Q==="world"?xe.data.quiz:[]}))),K=Pr(V.slice(),P).slice(0,6);Nt={i:0,score:0,gain:0,set:K,order:K.map(function(xe,Le){return Le}),done:!1},fl()}function fl(){let P=Nt.set[Nt.order[Nt.i]];(!Nt.optOrder||Nt.optOrder.q!==P.id)&&(Nt.optOrder={q:P.id,o:Pr(P.o.map(function(K,xe){return xe}),Math.random)});let V=Nt.optOrder.o.map(function(K,xe){return'<button type="button" class="opt" data-o="'+K+'">'+P.o[K]+"</button>"}).join("");pt('<div class="head"><div><p style="color:var(--muted);font-size:13px;font-weight:800">Soal '+(Nt.i+1)+" dari "+Nt.set.length+'</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">'+P.q+'</p><div class="opts" id="opts">'+V+'</div><div id="qfb"></div>')}function pl(P){let V=Nt.set[Nt.order[Nt.i]],K=P===V.a;document.querySelectorAll("#opts .opt").forEach(function(Le){let et=+Le.dataset.o;Le.disabled=!0,et===V.a?Le.classList.add("ok"):et===P&&Le.classList.add("bad")}),K&&(Nt.score++,x.qdone[V.id]||(x.qdone[V.id]=1,Nt.gain+=15,x.xp+=15,w(),F()));let xe=Nt.i>=Nt.set.length-1;Ne("#qfb").innerHTML='<div class="exp"><b>'+(K?"Benar. ":"Belum tepat. ")+"</b>"+V.e+'</div><div class="actions"><button type="button" class="btn primary" id="qnext">'+(xe?"Lihat hasil":"Lanjut")+"</button></div>"}function ml(){if(Nt.i>=Nt.set.length-1){pt('<div class="head"><h2>Hasil kuis</h2><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">Skor '+Nt.score+" dari "+Nt.set.length+'</p><p style="color:var(--muted)">'+(Nt.gain?"Kamu mendapat tambahan "+Nt.gain+" XP dari soal yang baru benar pertama kali.":"XP hanya diberikan saat soal pertama kali dijawab benar.")+'</p><div class="actions"><button type="button" class="btn primary" id="qagain">Ulangi</button><button type="button" class="btn" data-close>Tutup</button></div>');return}Nt.i++,fl()}Ne("#modal").addEventListener("click",function(P){let V=P.target;if(V.id==="modal"||V.closest("[data-close]")){He();return}let K=V.closest(".opt");if(K&&!K.disabled){pl(+K.dataset.o);return}if(V.closest("#qnext")){ml();return}V.closest("#qagain")&&Ts()}),Ne("#bJournal").addEventListener("click",fn),Ne("#bQuizW").addEventListener("click",Ts),Ne("#dQuiz").addEventListener("click",Ts),Ne("#bBack").addEventListener("click",Ze),Ne("#chips").addEventListener("click",function(P){let V=P.target.closest(".chip");V&&je($e===V.dataset.id?null:V.dataset.id)}),Ne("#tWater").addEventListener("change",function(P){Pe.pts.visible=P.target.checked}),Ne("#tSugar").addEventListener("change",function(P){Ot.pts.visible=P.target.checked}),Ne("#sun").addEventListener("input",function(P){fe.sun=+P.target.value/100,le()}),Ne("#depth").addEventListener("input",function(P){fe.depthT=+P.target.value/100,fe.user=!0}),Ne("#gas").addEventListener("input",function(P){fe.gas=+P.target.value/100}),Ne("#co2").addEventListener("input",function(P){fe.co2=+P.target.value/100}),Ne("#h2o").addEventListener("input",function(P){fe.h2o=+P.target.value/100}),Ne("#counter").addEventListener("change",function(P){fe.counter=P.target.checked});function Pi(){Ne("#tip").style.display="none"}Ne("#tipX").addEventListener("click",Pi),setTimeout(Pi,2e4);let xn={},Es=!1,Sa=!1,An={x:0,y:0};E&&document.body.classList.add("touch"),window.addEventListener("keydown",function(P){if(P.target&&P.target.tagName==="INPUT"&&P.target.type!=="checkbox"&&P.target.type!=="range")return;let V=P.key.toLowerCase();if(V==="escape"){kt()?He():Q==="dissect"&&Ze();return}kt()||Q==="world"&&(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"," ","c","control"].indexOf(V)>=0&&(xn[V]=!0,P.preventDefault()),V==="e"&&L(),(V==="+"||V==="=")&&qe(.8),(V==="-"||V==="_")&&qe(1.25),V===" "&&(Es=!0,P.preventDefault()),V==="j"&&fn())}),window.addEventListener("keyup",function(P){delete xn[P.key.toLowerCase()]}),window.addEventListener("blur",function(){xn={}}),(function(){let P=Ne("#joy"),V=Ne("#joyK"),K=null;function xe(et){let mt=P.getBoundingClientRect(),qt=mt.left+mt.width/2,ze=mt.top+mt.height/2,St=et.clientX-qt,Ht=et.clientY-ze,ct=Math.hypot(St,Ht),Mt=mt.width/2-8;ct>Mt&&(St=St/ct*Mt,Ht=Ht/ct*Mt),V.style.transform="translate("+St+"px,"+Ht+"px)",An.x=St/Mt,An.y=-Ht/Mt}P.addEventListener("pointerdown",function(et){K=et.pointerId,P.setPointerCapture(K),xe(et),et.preventDefault()}),P.addEventListener("pointermove",function(et){et.pointerId===K&&xe(et)});function Le(et){et.pointerId===K&&(K=null,An.x=0,An.y=0,V.style.transform="")}P.addEventListener("pointerup",Le),P.addEventListener("pointercancel",Le)})();let Zn=new Map,Ws=0,As=0,Ta=0,Ea=new Po,wr=new me;function gl(P,V,K){let xe=H.getBoundingClientRect();wr.set((P-xe.left)/xe.width*2-1,-((V-xe.top)/xe.height)*2+1),Ea.setFromCamera(wr,K)}function bl(P,V){gl(P,V,at);let K=Ea.intersectObjects(Ft.filter(function(xe){return xe.visible}),!1)[0];return K?K.object.userData.layer:null}function sh(P,V){gl(P,V,U);let K=Ea.intersectObjects(ie,!1)[0];return K?K.object.userData.hero:-1}function Lr(){let P=-1,V=1e9;return u.forEach(function(K,xe){if(K.needSwim&&!($.swim||$.under))return;let Le=Math.hypot($.x-K.x,$.z-K.z)+(K.reach?8-K.reach:0);Le<V&&(V=Le,P=xe)}),{i:P,d:V}}function L(){let P=Lr();P.d<8?_e(P.i):G("Dekati pohon bertanda dulu ("+Math.round(P.d-7)+" m lagi)")}H.addEventListener("pointerdown",function(P){if(!kt()){if(H.setPointerCapture(P.pointerId),Zn.set(P.pointerId,{x:P.clientX,y:P.clientY}),Zn.size===1&&(Ws=0,As=performance.now()),Zn.size===2){let V=Array.from(Zn.values());Ta=Math.hypot(V[0].x-V[1].x,V[0].y-V[1].y)}H.classList.add("dragging")}}),H.addEventListener("pointermove",function(P){let V=Zn.get(P.pointerId);if(!V){if(Q==="dissect"&&P.pointerType==="mouse"){let Le=bl(P.clientX,P.clientY);Le!==B&&(B=Le,H.style.cursor=Le?"pointer":"grab");let et=Ne("#tipL");Le?(et.style.display="block",et.textContent=d.find(function(mt){return mt.id===Le}).name,et.style.left=P.clientX+14+"px",et.style.top=P.clientY+14+"px"):et.style.display="none"}return}let K=P.clientX-V.x,xe=P.clientY-V.y;if(V.x=P.clientX,V.y=P.clientY,Zn.size===1)if(Ws+=Math.abs(K)+Math.abs(xe),Q==="world"){let Le=Math.max(.45,it);ye.yaw-=K*.0045*Le,ye.pitch=It(ye.pitch-xe*.004*Le,-1.3,1.3)}else fe.user=!0,fe.yaw-=K*.008,fe.pitch=It(fe.pitch+xe*.006,-.25,1.2);else if(Zn.size===2){let Le=Array.from(Zn.values()),et=Math.hypot(Le[0].x-Le[1].x,Le[0].y-Le[1].y);if(Ta>0){let mt=Ta/et;Q==="dissect"?(fe.user=!0,fe.dist=It(fe.dist*mt,6,46)):qe(mt)}Ta=et,Ws+=20}});function W(P){if(!Zn.has(P.pointerId))return;let V=Zn.size===1;if(Zn.delete(P.pointerId),Zn.size===0&&H.classList.remove("dragging"),V&&P.type==="pointerup"&&Ws<8&&performance.now()-As<600)if(Q==="world"){let K=sh(P.clientX,P.clientY);if(K>=0&&!(u[K].needSwim&&!($.swim||$.under))){let xe=u[K],Le=Math.hypot($.x-xe.x,$.z-xe.z);Le<(xe.reach||9)?_e(K):G("Terlalu jauh. Dekati "+xe.name+" ("+Math.round(Le-8)+" m lagi)")}}else{let K=bl(P.clientX,P.clientY);K&&je(K)}}H.addEventListener("pointerup",W),H.addEventListener("pointercancel",W),H.addEventListener("pointerleave",function(){Ne("#tipL").style.display="none"}),H.addEventListener("wheel",function(P){P.preventDefault();let V=Math.exp(P.deltaY*.001);Q==="dissect"?(fe.user=!0,fe.dist=It(fe.dist*V,6,46)):kt()||qe(Math.exp(P.deltaY*.0012))},{passive:!1}),Ne("#act").addEventListener("click",L),Ne("#zIn").addEventListener("click",function(){qe(.78)}),Ne("#zOut").addEventListener("click",function(){qe(1.28)}),Ne("#bSnd").addEventListener("click",function(){Ye.init(),Ye.setEnabled(!Ye.enabled);try{localStorage.setItem(gt,Ye.enabled?"1":"0")}catch{}Et(),Ye.enabled&&Ye.meow(.08,0)}),Et(),Ne("#jump").addEventListener("pointerdown",function(P){P.preventDefault(),Es=!0,Sa=!0}),["pointerup","pointercancel","pointerleave"].forEach(function(P){Ne("#jump").addEventListener(P,function(){Sa=!1})});let se=u.map(function(P){let V=document.createElement("div");return V.className="tag",Ne("#tags").appendChild(V),V}),ee=new C,ne=0,Ie=0;function Xe(P){let V=Ne("#drops");if(!(!V||window.matchMedia("(prefers-reduced-motion:reduce)").matches))for(let K=0;K<P;K++){let xe=document.createElement("i"),Le=18+Math.random()*46;xe.style.width=xe.style.height=Le+"px",xe.style.left=Math.random()*100+"%",xe.style.top=Math.random()*85+"%",xe.style.animationDelay=Math.random()*.15+"s",V.appendChild(xe),setTimeout(function(){xe.remove()},1900)}}function Ce(P){let V=(xn.d||xn.arrowright?1:0)-(xn.a||xn.arrowleft?1:0),K=(xn.w||xn.arrowup?1:0)-(xn.s||xn.arrowdown?1:0),xe=It(V+An.x,-1,1),Le=It(K+An.y,-1,1),et=-Math.sin(ye.yaw),mt=-Math.cos(ye.yaw),qt=Math.cos(ye.yaw),ze=-Math.sin(ye.yaw),St=et*Le+qt*xe,Ht=mt*Le+ze*xe,ct=Math.min(1,Math.hypot(St,Ht)),Mt=0,ri=rn-cn($.x,$.z);if(ct>.06){let vt=Math.hypot(St,Ht),zt=St/vt,Kt=Ht/vt,Hn=xn.shift||An.x*An.x+An.y*An.y>.72;$.swim?Mt=(Hn?3.6:2.3)*ct:(Mt=(Hn?8.2:4.6)*ct,ri>0&&(Mt*=1-.55*It(ri/1.3,0,1)));let Bn=$.x+zt*Mt*P,Yn=$.z+Kt*Mt*P,Rs=function(rh,Kg){return Math.hypot(rh,Kg)<112};Rs(Bn,$.z)&&($.x=Bn),Rs($.x,Yn)&&($.z=Yn),Ue($),$.phase+=Mt*P*1.25}let ns=cn($.x,$.z),yi=rn-ns;$.y+=(ns-$.y)*Math.min(1,P*14);let Aa=$.x+et*.55,Ra=$.z+mt*.55,Hf=1.35;!$.swim&&yi>Hf&&($.swim=!0,$.ey=Math.max($.y+1.68+$.jh,rn-.1),ae.splash(Aa,Ra,46,1.3),Z.ripple($.x,$.z,1),Ye.splash(2),Xe(9)),$.swim&&yi<Hf-.2&&($.swim=!1,$.jh=0,$.jv=0);let zg=$.jh>0;if($.swim){let vt=0;ct>.06&&(vt+=Math.sin(ye.pitch)*Le*Mt*1.1),(xn[" "]||Sa)&&(vt+=1.9),(xn.c||xn.control)&&(vt-=1.9),Math.abs(vt)<.05&&(vt+=.32),$.ey=It($.ey+vt*P,ns+.45,rn+.24),Es=!1,$.jh=0,$.jv=0}else Es&&$.jh<=.001&&yi<.8&&($.jv=6.4),Es=!1,($.jh>0||$.jv>0)&&($.jv-=20*P,$.jh=Math.max(0,$.jh+$.jv*P),$.jh===0&&($.jv=0)),zg&&$.jh===0&&yi>.05&&(ae.splash(Aa,Ra,30,1),Z.ripple($.x,$.z,.9),Ye.splash(yi>.5?2:1),yi>.3&&Xe(5));let xl=!$.swim&&yi>.03;xl&&!$.wet&&Mt>0&&(ae.splash(Aa,Ra,10,.6),Z.ripple($.x,$.z,.6),Ye.splash(1,.7)),$.wet=xl;let yl=Math.floor($.phase/(Math.PI/2));if(yl!==$.step&&($.step=yl,xl&&Mt>.5&&$.jh===0)){let vt=It(yi/1.2,.15,1);ae.splash(Aa+qt*(yl%2?.15:-.15),Ra+ze*(yl%2?.15:-.15),Math.round(5+vt*10),.35+vt*.6*(Mt/6)),Z.ripple($.x,$.z,.35+vt*.4),Ye.splash(0,.5+vt)}$.swim&&Mt>.3&&$.ey>rn-.35&&($.stroke-=P,$.stroke<=0&&($.stroke=.8,ae.splash(Aa,Ra,9,.45),Z.ripple(Aa,Ra,.6),Ye.splash(0,.8)));let Bf=Math.min(1,Mt/4.6),Jg=Math.sin($.phase*2)*.032*Bf,Gf=Math.cos($.phase)*.018*Bf,Of=$.swim?$.ey+($.ey>rn-.3?Math.sin(ce*1.7)*.05:Math.sin(ce*.9)*.03):$.y+1.68+Jg*(xl?.5:1)+$.jh;$.eyeS=$.eyeS?$.eyeS+(Of-$.eyeS)*Math.min(1,P*($.swim?6:16)):Of,U.position.set($.x+Math.cos(ye.yaw)*Gf,$.eyeS,$.z-Math.sin(ye.yaw)*Gf);let Pa=U.position.y<rn-.03&&rn-ns>.05;Pa!==$.under&&($.under=Pa,document.body.classList.toggle("underwater",Pa),Ye.setUnder(Pa),Pa?(ae.bubbles($.x+et*.4,$.eyeS-.1,$.z+mt*.4,14),Ye.bubbles(8)):(ae.splash($.x+et*.4,$.z+mt*.4,12,.5),Ye.splash(1,.6),Xe(6))),Pa&&($.bub-=P,$.bub<=0&&($.bub=Mt>.3?.5:1.6,ae.bubbles($.x+et*.7,$.eyeS-.35,$.z+mt*.7,Mt>.3?4:2),Math.random()<.4&&Ye.bubbles(2,.03))),ae.update(P,ce),U.rotation.set(ye.pitch,ye.yaw,0),it+=(Ee-it)*Math.min(1,P*8);let jg=(66+(Mt>6?5:0))*it;ye.fov+=(jg-ye.fov)*Math.min(1,P*5),Math.abs(U.fov-ye.fov)>.02&&(U.fov=ye.fov,U.updateProjectionMatrix()),a.forEach(function(vt){let zt=vt.w;zt.update(P,ce,$);let Kt=u[vt.hi],Hn=be[vt.hi];Kt.x=zt.x,Kt.z=zt.z,Hn.y=zt.y,Hn.mk.position.x=zt.x,Hn.mk.position.z=zt.z,Hn.ring.position.set(zt.x,zt.y+.04,zt.z);let Bn=zt.x-$.x,Yn=zt.z-$.z,Rs=Math.hypot(Bn,Yn)||1;vt.callT-=P,vt.callT<=0&&(vt.callT=8+Math.random()*16,Rs<14&&!$.under&&Ye.call(vt.data.id,.2*Math.max(.15,1-Rs/15),(Bn*Math.cos(ye.yaw)-Yn*Math.sin(ye.yaw))/Rs))}),pe.update(P,ce,$,U.position.y),r.forEach(function(vt){let zt=vt.G.fish[0].p,Kt=u[vt.hi],Hn=be[vt.hi];Kt.x=zt.x,Kt.z=zt.z,Hn.y=zt.y,vt.hit.position.copy(zt)});let Wg=$.swim||$.under,ah=1e9,kr=-1;be.forEach(function(vt,zt){let Kt=u[zt];vt.mk.rotation.y+=P*1.6,vt.mk.position.y=vt.y+Kt.top+(Kt.mkOff!=null?Kt.mkOff:2.2)+Math.sin(ce*2+zt)*(Kt.kind==="animal"?.06:.3);let Hn=1+.1*Math.sin(ce*3+zt);vt.ring.scale.set(Hn,Hn,Hn);let Bn=Math.hypot($.x-Kt.x,$.z-Kt.z),Yn=se[zt];if(Kt.needSwim&&!Wg){se[zt].style.display="none";return}if(Bn<ah&&Bn<(Kt.reach||9)&&(ah=Bn,kr=zt),ee.set(Kt.x,vt.y+Kt.top*.6,Kt.z).project(U),ee.z<1&&Bn<(Kt.needSwim?14:60)&&Bn>(Kt.tagNear||11)){let Rs=window.innerWidth,rh=window.innerHeight;Yn.style.display="block",Yn.style.transform="translate("+(ee.x*.5+.5)*Rs+"px,"+(-ee.y*.5+.5)*rh+"px) translate(-50%,-100%)",Yn.className="tag"+(x.trees[Kt.id]?" done":""),Yn.innerHTML=Kt.name+"<small>"+Math.round(Bn)+" m</small>"}else Yn.style.display="none"});let Ir=Ne("#act");if(ah<9&&!kt()){let vt=u[kr],zt=be[kr];ee.set(vt.x,zt.y+(vt.promptY||1.7),vt.z).project(U);let Kt=window.innerWidth,Hn=window.innerHeight,Bn=(ee.x*.5+.5)*Kt,Yn=(-ee.y*.5+.5)*Hn;ee.z>1&&(Bn=Kt*.5,Yn=Hn*.62),Bn=It(Bn,110,Kt-110),Yn=It(Yn,100,Hn-170),Ir.style.transform="translate("+Bn+"px,"+Yn+"px) translate(-50%,-50%)",Ir.dataset.i!==String(kr)&&(Ir.dataset.i=kr,Ne("#actName").textContent=vt.name),Ir.classList.add("on")}else Ir.classList.remove("on");if(ne+=P,ne>.2){ne=0;let vt=Lr(),zt=u[vt.i];Ne("#near").textContent="Terdekat: "+zt.name+", "+Math.round(vt.d)+" m"}}function Be(){let P=window.innerWidth,V=window.innerHeight,K=N();O.setPixelRatio(K),O.setSize(P,V,!1),R.setSize(P,V,K),te.setSize(P,V,K),c.forEach(function(xe){xe.fx&&xe.fx.setSize(P,V,K)}),U.aspect=P/V,U.updateProjectionMatrix(),at.aspect=P/V,P>760?at.setViewOffset(P,V,Math.min(120,P*.09),0,P,V):p()?at.setViewOffset(P,V,0,Math.round(V*.13),P,V):at.clearViewOffset(),at.updateProjectionMatrix()}window.addEventListener("resize",Be),Ne("#bQual").addEventListener("click",function(){re(A==="tinggi"?"hemat":"tinggi")}),re(A),w(),J.update(Me,ce,.016,{x:$.x,y:$.y+1.6,z:$.z}),Te(),Ne("#loading").classList.add("done"),setTimeout(function(){Ne("#loading").style.display="none"},700),M&&(window.__hi={enter:_e,select:je,P:$,cam:ye,startQuiz:Ts,openJournal:fn,renderer:O,world:z,veg:Ge,sky:J,applyQuality:re,setTime:function(P){Me=P},look:function(P,V){let K=u[P];V=V||11;let xe=Math.hypot(K.x,K.z-2)||1;$.x=K.x+(0-K.x)/xe*V,$.z=K.z+(2-K.z)/xe*V,$.y=cn($.x,$.z),ye.yaw=Math.atan2($.x-K.x,$.z-K.z),ye.pitch=.22},getMode:function(){return Q},ds:function(){return fe},fishW:pe});let Qe=performance.now(),ht=!1;function At(P){if(ce+=P,Q==="world")Me=(Me+P/240)%1,Ce(P),J.update(Me,ce,P,{x:$.x,y:$.y+1.6,z:$.z},$.under),Te(),Ge.update($,ce,P),Z.update(ce),Ye.update(P,{day:J.day,world:!0,under:$.under}),R.render(P);else{if(yt.update(P,ce,$e,B),p()&&b(f).leaf&&fe.R){if(Ie+=P,Ie>.12){Ie=0;let V=fe.R,K=Math.round(V.rate*100);Ne("#rateBar").style.width=K+"%",Ne("#rateTxt").textContent=K+"%",Ne("#rateCap").textContent="Laju fotosintesis "+K+"%. "+(V.rate>.95?"Maksimal! Semua faktor cukup.":"Faktor pembatas: "+V.lim+".")+" Stomata "+(V.open>.7?"terbuka lebar":V.open>.25?"setengah terbuka":"menutup")+(V.open<.25&&fe.h2o<.3?" karena kekurangan air.":V.open<.25?" karena gelap.":".")}fe.ok&&!x.found[y("maks")]&&(x.found[y("maks")]=1,S(30,"fotosintesis maksimal"),F())}if(g()){if(Ie+=P,Ie>.15){Ie=0;let V=fe.status;Ne("#gasCap").textContent=(V==="melayang"?"Ikan melayang: daya apung seimbang dengan berat tubuh.":V==="tenggelam"?"Ikan tenggelam: gas di gelembung renang kurang.":"Ikan naik: gas di gelembung renang terlalu banyak.")+(fe.counter===!1?" Aliran searah: darah dan air sejalan, oksigen yang terserap jauh lebih sedikit.":" Aliran berlawanan arah: darah (merah) melawan arus air (biru), oksigen terserap maksimal.")}fe.buoyOk&&!x.found[y("buoy")]&&(x.found[y("buoy")]=1,S(30,"ikan melayang seimbang"),F())}Ye.update(P,{day:J.day,world:!1,under:!1,catSub:f==="kucing"}),Ae().render(P)}}let Ve=0,Rt=0,un=0,$t=!1;function Qt(P){$t||A!=="tinggi"||Q!=="world"||M||(un+=P,!(un<5)&&(Ve+=P,Rt++,Ve>=4&&($t=!0,Ve/Rt>.034&&(re("hemat"),G("Grafik diturunkan ke Hemat agar tetap lancar. Ganti lewat tombol Grafik.")))))}function Rn(P){let V=Math.min(.05,(P-Qe)/1e3);Qe=P,ht||(At(V),Qt(V)),requestAnimationFrame(Rn)}M&&(window.__hi.pause=function(P){ht=P!==!1},window.__hi.step=At),requestAnimationFrame(Rn)})().catch(function(i){console.error(i);let e=document.getElementById("loadTxt");e&&(e.textContent="Gagal memuat: "+(i&&i.message||i))});
