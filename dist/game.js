var Gg=Object.defineProperty;var qg=(i,e,t)=>e in i?Gg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var xs=(i,e,t)=>qg(i,typeof e!="symbol"?e+"":e,t);var Lp=0,Vh=1,Ip=2;var ra=1,Fp=2,ir=3,qi=0,Sn=1,$t=2,Ln=0,sr=1,To=2,Yh=3,$h=4,gc=5;var yi=100,kp=101,Dp=102,Np=103,Cp=104,oa=200,Up=201,Bp=202,Hp=203,Qh=204,zh=205,Eo=206,Gp=207,Ao=208,qp=209,Op=210,Xp=211,Vp=212,Yp=213,$p=214,ql=0,Ol=1,Xl=2,Ga=3,Vl=4,Yl=5,$l=6,Ql=7,Ro=0,Qp=1,zp=2,Oi=0,Po=1,wo=2,Lo=3,la=4,Io=5,Fo=6,ko=7,Ph="attached",Jp="detached",Jh=300,ca=301,ar=302,bc=303,xc=304,Yt=1e3,mi=1001,qa=1002,an=1003,yc=1004;var ua=1005;var yn=1006,rr=1007;var ri=1008;var $n=1009,jh=1010,Wh=1011,or=1012,Mc=1013,Ii=1014,di=1015,fn=1016,vc=1017,_c=1018,ds=1020,Kh=35902,Zh=35899,ed=1021,td=1022,oi=1023,ss=1026,Fi=1027,Sc=1028,Tc=1029,Cs=1030,Ec=1031;var Ac=1033,Do=33776,No=33777,Co=33778,Uo=33779,Rc=35840,Pc=35841,wc=35842,Lc=35843,Ic=36196,Fc=37492,kc=37496,Dc=37488,Nc=37489,Bo=37490,Cc=37491,Uc=37808,Bc=37809,Hc=37810,Gc=37811,qc=37812,Oc=37813,Xc=37814,Vc=37815,Yc=37816,$c=37817,Qc=37818,zc=37819,Jc=37820,jc=37821,Wc=36492,Kc=36494,Zc=36495,eu=36283,tu=36284,Ho=36285,nu=36286;var Zs=2300,ea=2301,Hl=2302,wh=2303,Lh=2400,Ih=2401,Fh=2402,jp=2500;var nd=0,Go=1,lr=2,Wp=3200,id=3201;var ha=0,Kp=1,fs="",gt="srgb",Mn="srgb-linear",Vr="linear",Ht="srgb";var Gl=7680;var Zp=519,e0=512,t0=513,n0=514,sd=515,i0=516,s0=517,ad=518,rd=519,od=35044;var ld="300 es",gi=2e3,Oa=2001;function Og(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function a0(){let i=Xa("canvas");return i.style.display="block",i}var Cf={},Va=null;function Yr(...i){let e="THREE."+i.shift();Va?Va("log",e,...i):console.log(e,...i)}function r0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=r0(i);let e="THREE."+i.shift();if(Va)Va("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=r0(i);let e="THREE."+i.shift();if(Va)Va("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ks(...i){let e=i.join(" ");e in Cf||(Cf[e]=!0,Je(...i))}function o0(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}var l0={[ql]:ql,[Xl]:$l,[Vl]:Vl,[Ga]:Yl,[Ol]:Ol,[$l]:Xl,[Ql]:Ql,[Yl]:Ga},Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=1234567,Gr=Math.PI/180,ta=180/Math.PI;function ki(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function cd(i,e){return(i%e+e)%e}function Vg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yg(i,e,t){return i!==e?(t-i)/(e-i):0}function qr(i,e,t){return(1-t)*i+t*e}function $g(i,e,t,n){return qr(i,e,1-Math.exp(-t*n))}function Qg(i,e=1){return e-Math.abs(cd(i,e*2)-e)}function zg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wg(i,e){return i+Math.random()*(e-i)}function Kg(i){return i*(.5-Math.random())}function Zg(i){i!==void 0&&(Uf=i);let e=Uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eb(i){return i*Gr}function tb(i){return i*ta}function nb(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ib(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sb(i,e,t,n,s){let a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),u=r((e+n)/2),h=a((e-n)/2),d=r((e-n)/2),f=a((n-e)/2),p=r((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*u,o*c);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function iu(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hd(i,e){if(e.constructor===Float32Array)return i;let t=iu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function dd(i,e){if(e.constructor===Float32Array)return i;let t=iu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var su={DEG2RAD:Gr,RAD2DEG:ta,generateUUID:ki,clamp:Et,euclideanModulo:cd,mapLinear:Vg,inverseLerp:Yg,lerp:qr,damp:$g,pingpong:Qg,smoothstep:zg,smootherstep:Jg,randInt:jg,randFloat:Wg,randFloatSpread:Kg,seededRandom:Zg,degToRad:eb,radToDeg:tb,isPowerOfTwo:nb,ceilPowerOfTwo:ib,floorPowerOfTwo:ud,setQuaternionFromProperEuler:sb,normalize:dd,denormalize:hd},xd=class xd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xd.prototype.isVector2=!0;var pe=xd,Pt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=a[r+0],f=a[r+1],p=a[r+2],x=a[r+3];if(h!==x||l!==d||c!==f||u!==p){let g=l*d+c*f+u*p+h*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),_=Math.sin(y);m=Math.sin(m*y)/_,o=Math.sin(o*y)/_,l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+x*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+x*o;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,a,r){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=a[r],d=a[r+1],f=a[r+2],p=a[r+3];return e[t]=o*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-o*f,e[t+2]=c*p+u*f+o*d-l*h,e[t+3]=u*p-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(a/2),d=l(n/2),f=l(s/2),p=l(a/2);switch(r){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-n*c,this._z=a*u+r*c+n*l-s*o,this._w=r*u-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yd=class yd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),u=2*(o*t-a*s),h=2*(a*n-r*t);return this.x=t+l*c+r*h-o*u,this.y=n+l*u+o*c-a*h,this.z=s+l*h+a*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yd.prototype.isVector3=!0;var k=yd,th=new k,Bf=new Pt,Md=class Md{constructor(e,t,n,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],y=s[1],_=s[4],M=s[7],S=s[2],T=s[5],b=s[8];return a[0]=r*x+o*y+l*S,a[3]=r*g+o*_+l*T,a[6]=r*m+o*M+l*b,a[1]=c*x+u*y+h*S,a[4]=c*g+u*_+h*T,a[7]=c*m+u*M+h*b,a[2]=d*x+f*y+p*S,a[5]=d*g+f*_+p*T,a[8]=d*m+f*M+p*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*a*u+n*o*l+s*a*c-s*r*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*r-o*c,d=o*l-u*a,f=c*a-r*l,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*r)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*a-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(r*t-n*a)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nh.makeScale(e,t)),this}rotate(e){return Ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return Ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Md.prototype.isMatrix3=!0;var ut=Md,nh=new ut,Hf=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gf=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ab(){let i={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Ht&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ht&&(s.r=Ha(s.r),s.g=Ha(s.g),s.b=Ha(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mn]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:Hf,fromXYZ:Gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:Ht,toXYZ:Hf,fromXYZ:Gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),i}var yt=ab();function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ea,zl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ea===void 0&&(Ea=Xa("canvas")),Ea.width=e.width,Ea.height=e.height;let s=Ea.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ea}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=is(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(is(t[n]/255)*255):t[n]=is(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rb=0,Ya=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ih(s[r].image)):a.push(ih(s[r]))}else a=ih(s);n.url=a}return t||(e.images[this.uuid]=n),n}};function ih(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var ob=0,sh=new k,vn=class i extends Bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mi,s=mi,a=yn,r=ri,o=oi,l=$n,c=i.DEFAULT_ANISOTROPY,u=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=ki(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yt:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yt:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Jh;vn.DEFAULT_ANISOTROPY=1;var vd=class vd{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,M=(f+1)/2,S=(m+1)/2,T=(u+d)/4,b=(h+x)/4,v=(p+g)/4;return _>M&&_>S?_<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(_),s=T/n,a=b/n):M>S?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=T/s,a=v/s):S<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(S),n=b/a,s=v/a),this.set(n,s,a,t),this}let y=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vd.prototype.isVector4=!0;var Nt=vd,Jl=class extends Bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let s=n.count;for(let a=0;a<s;a++)this.textures[a]=new vn({width:e,height:t,depth:n.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ya(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Jl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$r=class extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jl=class extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var mc=class mc{constructor(e,t,n,s,a,r,o,l,c,u,h,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,u,h,d,f,p,x,g)}set(e,t,n,s,a,r,o,l,c,u,h,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Aa.setFromMatrixColumn(e,0).length(),a=1/Aa.setFromMatrixColumn(e,1).length(),r=1/Aa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){let d=r*u,f=r*h,p=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=r*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d+x*o,t[4]=p*o-f,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=f*o-p,t[6]=x+d*o,t[10]=r*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d-x*o,t[4]=-r*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=r*u,t[9]=x-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let d=r*u,f=r*h,p=o*u,x=o*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let d=r*l,f=r*c,p=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=r*l,f=r*c,p=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=r*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lb,e,cb)}lookAt(e,t,n){let s=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),ys.crossVectors(n,li),ys.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ys.crossVectors(n,li)),ys.normalize(),dl.crossVectors(li,ys),s[0]=ys.x,s[4]=dl.x,s[8]=li.x,s[1]=ys.y,s[5]=dl.y,s[9]=li.y,s[2]=ys.z,s[6]=dl.z,s[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],y=n[3],_=n[7],M=n[11],S=n[15],T=s[0],b=s[4],v=s[8],F=s[12],L=s[1],G=s[5],q=s[9],U=s[13],E=s[2],D=s[6],w=s[10],P=s[14],Y=s[3],O=s[7],B=s[11],$=s[15];return a[0]=r*T+o*L+l*E+c*Y,a[4]=r*b+o*G+l*D+c*O,a[8]=r*v+o*q+l*w+c*B,a[12]=r*F+o*U+l*P+c*$,a[1]=u*T+h*L+d*E+f*Y,a[5]=u*b+h*G+d*D+f*O,a[9]=u*v+h*q+d*w+f*B,a[13]=u*F+h*U+d*P+f*$,a[2]=p*T+x*L+g*E+m*Y,a[6]=p*b+x*G+g*D+m*O,a[10]=p*v+x*q+g*w+m*B,a[14]=p*F+x*U+g*P+m*$,a[3]=y*T+_*L+M*E+S*Y,a[7]=y*b+_*G+M*D+S*O,a[11]=y*v+_*q+M*w+S*B,a[15]=y*F+_*U+M*P+S*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],y=l*f-c*d,_=o*f-c*h,M=o*d-l*h,S=r*f-c*u,T=r*d-l*u,b=r*h-o*u;return t*(x*y-g*_+m*M)-n*(p*y-g*S+m*T)+s*(p*_-x*S+m*b)-a*(p*M-x*T+g*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(r*u-o*c)-n*(a*u-o*l)+s*(a*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=t*o-n*r,_=t*l-s*r,M=t*c-a*r,S=n*l-s*o,T=n*c-a*o,b=s*c-a*l,v=u*x-h*p,F=u*g-d*p,L=u*m-f*p,G=h*g-d*x,q=h*m-f*x,U=d*m-f*g,E=y*U-_*q+M*G+S*L-T*F+b*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/E;return e[0]=(o*U-l*q+c*G)*D,e[1]=(s*q-n*U-a*G)*D,e[2]=(x*b-g*T+m*S)*D,e[3]=(d*T-h*b-f*S)*D,e[4]=(l*L-r*U-c*F)*D,e[5]=(t*U-s*L+a*F)*D,e[6]=(g*M-p*b-m*_)*D,e[7]=(u*b-d*M+f*_)*D,e[8]=(r*q-o*L+c*v)*D,e[9]=(n*L-t*q-a*v)*D,e[10]=(p*T-x*M+m*y)*D,e[11]=(h*M-u*T-f*y)*D,e[12]=(o*F-r*G-l*v)*D,e[13]=(t*G-n*F+s*v)*D,e[14]=(x*_-p*S-g*y)*D,e[15]=(u*S-h*_+d*y)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,u=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,u=r+r,h=o+o,d=a*c,f=a*u,p=a*h,x=r*u,g=r*h,m=o*h,y=l*c,_=l*u,M=l*h,S=n.x,T=n.y,b=n.z;return s[0]=(1-(x+m))*S,s[1]=(f+M)*S,s[2]=(p-_)*S,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(d+m))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(p+_)*b,s[9]=(g-y)*b,s[10]=(1-(d+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=Aa.set(s[0],s[1],s[2]).length(),o=Aa.set(s[4],s[5],s[6]).length(),l=Aa.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ti.copy(this);let c=1/r,u=1/o,h=1/l;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,t.setFromRotationMatrix(Ti),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,a,r,o=gi,l=!1){let c=this.elements,u=2*a/(t-e),h=2*a/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=a/(r-a),x=r*a/(r-a);else if(o===gi)p=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Oa)p=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=gi,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(r-a),x=r/(r-a);else if(o===gi)p=-2/(r-a),x=-(r+a)/(r-a);else if(o===Oa)p=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};mc.prototype.isMatrix4=!0;var je=mc,Aa=new k,Ti=new je,lb=new k(0,0,0),cb=new k(1,1,1),ys=new k,dl=new k,li=new k,qf=new je,Of=new Pt,Wt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Et(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Of.setFromEuler(this),this.setFromQuaternion(Of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wt.DEFAULT_ORDER="XYZ";var $a=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ub=0,Xf=new k,Ra=new Pt,Wi=new je,fl=new k,Lr=new k,hb=new k,db=new Pt,Vf=new k(1,0,0),Yf=new k(0,1,0),$f=new k(0,0,1),Qf={type:"added"},fb={type:"removed"},Pa={type:"childadded",child:null},ah={type:"childremoved",child:null},Ot=class i extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Wt,n=new Pt,s=new k(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new ut}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ra.setFromAxisAngle(e,t),this.quaternion.multiply(Ra),this}rotateOnWorldAxis(e,t){return Ra.setFromAxisAngle(e,t),this.quaternion.premultiply(Ra),this}rotateX(e){return this.rotateOnAxis(Vf,e)}rotateY(e){return this.rotateOnAxis(Yf,e)}rotateZ(e){return this.rotateOnAxis($f,e)}translateOnAxis(e,t){return Xf.copy(e).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vf,e)}translateY(e){return this.translateOnAxis(Yf,e)}translateZ(e){return this.translateOnAxis($f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fl.copy(e):fl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Lr,fl,this.up):Wi.lookAt(fl,Lr,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Ra.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ra.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qf),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fb),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qf),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,hb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),f=r(e.animations),p=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ot.DEFAULT_UP=new k(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},pb={type:"move"},Qa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},c0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},pl={h:0,s:0,l:0};function rh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=cd(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=rh(r,a,e+1/3),this.g=rh(r,a,e),this.b=rh(r,a,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function n(a){a!==void 0&&parseFloat(a)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=c0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return yt.workingToColorSpace(Xn.copy(this),e),Math.round(Et(Xn.r*255,0,255))*65536+Math.round(Et(Xn.g*255,0,255))*256+Math.round(Et(Xn.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Xn.copy(this),t);let n=Xn.r,s=Xn.g,a=Xn.b,r=Math.max(n,s,a),o=Math.min(n,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case n:l=(s-a)/h+(s<a?6:0);break;case s:l=(a-n)/h+2;break;case a:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=gt){yt.workingToColorSpace(Xn.copy(this),e);let t=Xn.r,n=Xn.g,s=Xn.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ms),this.setHSL(Ms.h+e,Ms.s+t,Ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ms),e.getHSL(pl);let n=qr(Ms.h,pl.h,t),s=qr(Ms.s,pl.s,t),a=qr(Ms.l,pl.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new fe;fe.NAMES=c0;var Qr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Wn=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ei=new k,Ki=new k,oh=new k,Zi=new k,wa=new k,La=new k,zf=new k,lh=new k,ch=new k,uh=new k,hh=new Nt,dh=new Nt,fh=new Nt,Es=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ei.subVectors(e,t),s.cross(Ei);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Ei.subVectors(s,t),Ki.subVectors(n,t),oh.subVectors(e,t);let r=Ei.dot(Ei),o=Ei.dot(Ki),l=Ei.dot(oh),c=Ki.dot(Ki),u=Ki.dot(oh),h=r*c-o*o;if(h===0)return a.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,p=(r*u-o*l)*d;return a.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Zi.x),l.addScaledVector(r,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return hh.setScalar(0),dh.setScalar(0),fh.setScalar(0),hh.fromBufferAttribute(e,t),dh.fromBufferAttribute(e,n),fh.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(hh,a.x),r.addScaledVector(dh,a.y),r.addScaledVector(fh,a.z),r}static isFrontFacing(e,t,n,s){return Ei.subVectors(n,t),Ki.subVectors(e,t),Ei.cross(Ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Ei.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,a=this.c,r,o;wa.subVectors(s,n),La.subVectors(a,n),lh.subVectors(e,n);let l=wa.dot(lh),c=La.dot(lh);if(l<=0&&c<=0)return t.copy(n);ch.subVectors(e,s);let u=wa.dot(ch),h=La.dot(ch);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return r=l/(l-u),t.copy(n).addScaledVector(wa,r);uh.subVectors(e,a);let f=wa.dot(uh),p=La.dot(uh);if(p>=0&&f<=p)return t.copy(a);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(La,o);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return zf.subVectors(a,s),o=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(zf,o);let m=1/(g+x+d);return r=x*m,o=d*m,t.copy(n).addScaledVector(wa,r).addScaledVector(La,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vn=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Ai):Ai.fromBufferAttribute(a,r),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ml.copy(n.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}let s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),gl.subVectors(this.max,Ir),Ia.subVectors(e.a,Ir),Fa.subVectors(e.b,Ir),ka.subVectors(e.c,Ir),vs.subVectors(Fa,Ia),_s.subVectors(ka,Fa),zs.subVectors(Ia,ka);let t=[0,-vs.z,vs.y,0,-_s.z,_s.y,0,-zs.z,zs.y,vs.z,0,-vs.x,_s.z,0,-_s.x,zs.z,0,-zs.x,-vs.y,vs.x,0,-_s.y,_s.x,0,-zs.y,zs.x,0];return!ph(t,Ia,Fa,ka,gl)||(t=[1,0,0,0,1,0,0,0,1],!ph(t,Ia,Fa,ka,gl))?!1:(bl.crossVectors(vs,_s),t=[bl.x,bl.y,bl.z],ph(t,Ia,Fa,ka,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},es=[new k,new k,new k,new k,new k,new k,new k,new k],Ai=new k,ml=new Vn,Ia=new k,Fa=new k,ka=new k,vs=new k,_s=new k,zs=new k,Ir=new k,gl=new k,bl=new k,Js=new k;function ph(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Js.fromArray(i,a);let o=s.x*Math.abs(Js.x)+s.y*Math.abs(Js.y)+s.z*Math.abs(Js.z),l=e.dot(Js),c=t.dot(Js),u=n.dot(Js);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var mn=new k,xl=new pe,mb=0,lt=class extends Bi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=od,this.updateRanges=[],this.gpuType=di,this.version=0,this._normalizationScale=e!==void 0?iu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xl.fromBufferAttribute(this,t),xl.applyMatrix3(e),this.setXY(t,xl.x,xl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):dd(e,this.array)}};var zr=class extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Jr=class extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},gb=new Vn,Fr=new k,mh=new k,si=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gb.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(mh)),this.expandByPoint(Fr.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bb=0,pi=new je,gh=new Ot,Da=new k,ci=new Vn,kr=new Vn,Rn=new k,dt=class i extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Og(e)?Jr:zr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new ut().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Da).negate(),this.translate(Da.x,Da.y,Da.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,a=e.length;s<a;s++){let r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let a=t[n];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){let o=t[a];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Rn.addVectors(ci.min,kr.min),ci.expandByPoint(Rn),Rn.addVectors(ci.max,kr.max),ci.expandByPoint(Rn)):(ci.expandByPoint(kr.min),ci.expandByPoint(kr.max))}ci.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Rn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Rn));if(t)for(let a=0,r=t.length;a<r;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rn.fromBufferAttribute(o,c),l&&(Da.fromBufferAttribute(e,c),Rn.add(Da)),s=Math.max(s,n.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,a=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new k,l[F]=new k;let u=new k,h=new k,d=new k,f=new pe,p=new pe,x=new pe,g=new k,m=new k;function y(F,L,G){c[F]=c[L]=c[G]=1,u.fromBufferAttribute(n,F),h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,G),f.fromBufferAttribute(a,F),p.fromBufferAttribute(a,L),x.fromBufferAttribute(a,G),h.sub(u),d.sub(u),p.sub(f),x.sub(f);let q=1/(p.x*x.y-x.x*p.y);isFinite(q)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(q),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(q),o[F].add(g),o[L].add(g),o[G].add(g),l[F].add(m),l[L].add(m),l[G].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,L=_.length;F<L;++F){let G=_[F],q=G.start,U=G.count;for(let E=q,D=q+U;E<D;E+=3)y(e.getX(E+0),e.getX(E+1),e.getX(E+2))}let M=new k,S=new k,T=new k,b=new k;function v(F){T.fromBufferAttribute(s,F),b.copy(T);let L=o[F];M.copy(L),M.sub(T.multiplyScalar(T.dot(L))).normalize(),S.crossVectors(b,L);let q=S.dot(l[F])<0?-1:1;r.setXYZW(F,M.x,M.y,M.z,q)}for(let F=0,L=n.count;F<L;++F)c[F]&&v(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new k,a=new k,r=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),u.subVectors(r,a),h.subVectors(s,a),u.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,a),h.subVectors(s,a),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new lt(d,u,h)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let a=e.morphAttributes;for(let c in a){let u=[],h=a[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,u=r.length;c<u;c++){let h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},As=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=od,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Jf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Jf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Jf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ki()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var jn=new k,Rs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?iu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyMatrix4(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyNormalMatrix(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.transformDirection(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),a=this._normalize(a)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):dd(e,this.data.array)}},bh=new k,xb=new k,yb=new ut,Ri=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bh.subVectors(n,t).cross(xb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(bh),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yb.getNormalMatrix(e),s=this.coplanarPoint(bh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Mb=0,Nn=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=sr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=zh,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gl,this.stencilZFail=Gl,this.stencilZPass=Gl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(t){let a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ri().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ts=new k,xh=new k,yl=new k,Ml=new k,Ps=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xh.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),Ml.copy(this.origin).sub(xh);let a=e.distanceTo(t)*.5,r=-this.direction.dot(yl),o=Ml.dot(this.direction),l=-Ml.dot(yl),c=Ml.lengthSq(),u=Math.abs(1-r*r),h,d,f,p;if(u>0)if(h=r*l-o,d=r*o-l,p=a*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+r*d+2*o)+d*(r*h+d+2*l)+c}else d=a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d=-a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-r*a+o)),d=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(h=Math.max(0,-(r*a+o)),d=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c);else d=r>0?-a:a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xh).addScaledVector(yl,d),f}intersectSphere(e,t){if(e.radius<0)return null;ts.subVectors(e.center,this.origin);let n=ts.dot(this.direction),s=ts.dot(ts)-n*n,a=e.radius*e.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,n,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-r.x,d=e.y-r.y,f=e.z-r.z,p=t.x-r.x,x=t.y-r.y,g=t.z-r.z,m=n.x-r.x,y=n.y-r.y,_=n.z-r.z,M=Math.abs(l),S=Math.abs(c),T=Math.abs(u),b,v,F,L,G,q,U,E,D,w,P,Y;if(M>=S&&M>=T?(F=l,q=h,D=p,Y=m,l>=0?(b=c,v=u,L=d,G=f,U=x,E=g,w=y,P=_):(b=u,v=c,L=f,G=d,U=g,E=x,w=_,P=y)):S>=T?(F=c,q=d,D=x,Y=y,c>=0?(b=u,v=l,L=f,G=h,U=g,E=p,w=_,P=m):(b=l,v=u,L=h,G=f,U=p,E=g,w=m,P=_)):(F=u,q=f,D=g,Y=_,u>=0?(b=l,v=c,L=h,G=d,U=p,E=x,w=m,P=y):(b=c,v=l,L=d,G=h,U=x,E=p,w=y,P=m)),F===0)return null;let O=b/F,B=v/F,$=1/F,H=L-O*q,j=G-B*q,X=U-O*D,W=E-B*D,ie=w-O*Y,me=P-B*Y,he=ie*W-me*X,Re=H*me-j*ie,De=X*j-W*H;if(s){if(he<0||Re<0||De<0)return null}else if((he<0||Re<0||De<0)&&(he>0||Re>0||De>0))return null;let Ce=he+Re+De;if(Ce===0)return null;let Ge=$*(he*q+Re*D+De*Y);return(Ce>0?Ge<0:Ge>0)?null:this.at(Ge/Ce,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jf=new je,js=new Ps,vl=new si,Wf=new k,_l=new k,Sl=new k,Tl=new k,yh=new k,El=new k,Kf=new k,Al=new k,we=class extends Ot{constructor(e=new dt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){El.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],h=a[l];u!==0&&(yh.fromBufferAttribute(h,e),r?El.addScaledVector(yh,u):El.addScaledVector(yh.sub(t),u))}t.add(El)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(a),js.copy(e.ray).recast(e.near),!(vl.containsPoint(js.origin)===!1&&(js.intersectSphere(vl,Wf)===null||js.origin.distanceToSquared(Wf)>(e.far-e.near)**2))&&(jf.copy(a).invert(),js.copy(e.ray).applyMatrix4(jf),!(n.boundingBox!==null&&js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,n){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=r[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,S=_;M<S;M+=3){let T=o.getX(M),b=o.getX(M+1),v=o.getX(M+2);s=Rl(this,m,e,n,c,u,h,T,b,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=o.getX(g),_=o.getX(g+1),M=o.getX(g+2);s=Rl(this,r,e,n,c,u,h,y,_,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=r[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,S=_;M<S;M+=3){let T=M,b=M+1,v=M+2;s=Rl(this,m,e,n,c,u,h,T,b,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=g,_=g+1,M=g+2;s=Rl(this,r,e,n,c,u,h,y,_,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function vb(i,e,t,n,s,a,r,o){let l;if(e.side===Sn?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===qi,o),l===null)return null;Al.copy(o),Al.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Al);return c<t.near||c>t.far?null:{distance:c,point:Al.clone(),object:i}}function Rl(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,_l),i.getVertexPosition(l,Sl),i.getVertexPosition(c,Tl);let u=vb(i,e,t,n,_l,Sl,Tl,Kf);if(u){let h=new k;Es.getBarycoord(Kf,_l,Sl,Tl,h),s&&(u.uv=Es.getInterpolatedAttribute(s,o,l,c,h,new pe)),a&&(u.uv1=Es.getInterpolatedAttribute(a,o,l,c,h,new pe)),r&&(u.normal=Es.getInterpolatedAttribute(r,o,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};Es.getNormal(_l,Sl,Tl,d.normal),u.face=d,u.barycoord=h}return u}var Dr=new Nt,Zf=new Nt,ep=new Nt,_b=new Nt,tp=new je,Pl=new k,Mh=new si,np=new je,vh=new Ps,jr=class extends we{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ph,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pl),this.boundingBox.expandByPoint(Pl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pl),this.boundingSphere.expandByPoint(Pl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mh.copy(this.boundingSphere),Mh.applyMatrix4(s),e.ray.intersectsSphere(Mh)!==!1&&(np.copy(s).invert(),vh.copy(e.ray).applyMatrix4(np),!(this.boundingBox!==null&&vh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ph?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Zf.fromBufferAttribute(s.attributes.skinIndex,e),ep.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Dr.copy(t),t.set(0,0,0,0)):(Dr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Dr.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){let r=ep.getComponent(a);if(r!==0){let o=Zf.getComponent(a);tp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(_b.copy(Dr).applyMatrix4(tp),r)}}return t.isVector4&&(t.w=Dr.w),t.applyMatrix4(this.bindMatrixInverse)}},za=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hi=class extends vn{constructor(e=null,t=1,n=1,s,a,r,o,l,c=an,u=an,h,d){super(null,r,o,l,c,u,s,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ip=new je,Sb=new je,Wr=class i{constructor(e=[],t=[]){this.uuid=ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,r=e.length;a<r;a++){let o=e[a]?e[a].matrixWorld:Sb;ip.multiplyMatrices(o,t[a]),ip.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Hi(t,e,e,oi,di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let a=e.bones[n],r=t[a];r===void 0&&(Je("Skeleton: No bone found with UUID:",a),r=new za),this.bones.push(r),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){let r=t[s];e.bones.push(r.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Pi=class extends lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Na=new je,sp=new je,wl=[],ap=new Vn,Tb=new je,Nr=new we,Cr=new si,Pn=class extends we{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Na),ap.copy(e.boundingBox).applyMatrix4(Na),this.boundingBox.union(ap)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Na),Cr.copy(e.boundingSphere).applyMatrix4(Na),this.boundingSphere.union(Cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),e.ray.intersectsSphere(Cr)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Na),sp.multiplyMatrices(n,Na),Nr.matrixWorld=sp,Nr.raycast(e,wl);for(let r=0,o=wl.length;r<o;r++){let l=wl[r];l.instanceId=a,l.object=this,t.push(l)}wl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hi(new Float32Array(s*this.count),s,this.count,Sc,di));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<n.length;c++)r+=n[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*e;return a[l]=o,a.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ws=new si,Eb=new pe(.5,.5),Ll=new k,ws=class{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,a=new Ri,r=new Ri){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi,n=!1){let s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],h=a[5],d=a[6],f=a[7],p=a[8],x=a[9],g=a[10],m=a[11],y=a[12],_=a[13],M=a[14],S=a[15];if(s[0].setComponents(c-r,f-u,m-p,S-y).normalize(),s[1].setComponents(c+r,f+u,m+p,S+y).normalize(),s[2].setComponents(c+o,f+h,m+x,S+_).normalize(),s[3].setComponents(c-o,f-h,m-x,S-_).normalize(),n)s[4].setComponents(l,d,g,M).normalize(),s[5].setComponents(c-l,f-d,m-g,S-M).normalize();else if(s[4].setComponents(c-l,f-d,m-g,S-M).normalize(),t===gi)s[5].setComponents(c+l,f+d,m+g,S+M).normalize();else if(t===Oa)s[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){Ws.center.set(0,0,0);let t=Eb.distanceTo(e.center);return Ws.radius=.7071067811865476+t,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ll.x=s.normal.x>0?e.max.x:e.min.x,Ll.y=s.normal.y>0?e.max.y:e.min.y,Ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},rp=new je,Wl=class i{constructor(){this.coordinateSystem=gi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let a=t[s];rp.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),n[s]===void 0&&(n[s]=new ws),n[s].setFromProjectionMatrix(rp,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ws),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ls=class extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kl=new k,Zl=new k,op=new je,Ur=new Ps,Il=new si,_h=new k,lp=new k,na=class extends Ot{constructor(e=new dt,t=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Kl.fromBufferAttribute(t,s-1),Zl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Kl.distanceTo(Zl);e.setAttribute("lineDistance",new at(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Il.copy(n.boundingSphere),Il.applyMatrix4(s),Il.radius+=a,e.ray.intersectsSphere(Il)===!1)return;op.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(op);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let x=f,g=p-1;x<g;x+=c){let m=u.getX(x),y=u.getX(x+1),_=Fl(this,e,Ur,l,m,y,x);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(f),m=Fl(this,e,Ur,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let x=f,g=p-1;x<g;x+=c){let m=Fl(this,e,Ur,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Fl(this,e,Ur,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Fl(i,e,t,n,s,a,r){let o=i.geometry.attributes.position;if(Kl.fromBufferAttribute(o,s),Zl.fromBufferAttribute(o,a),t.distanceSqToSegment(Kl,Zl,_h,lp)>n)return;_h.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_h);if(!(c<e.near||c>e.far))return{distance:c,point:lp.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var cp=new k,up=new k,ia=class extends na{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)cp.fromBufferAttribute(t,s),up.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cp.distanceTo(up);e.setAttribute("lineDistance",new at(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Kr=class extends na{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Yn=class extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hp=new je,kh=new Ps,kl=new si,Dl=new k,Kn=class extends Ot{constructor(e=new dt,t=new Yn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kl.copy(n.boundingSphere),kl.applyMatrix4(s),kl.radius+=a,e.ray.intersectsSphere(kl)===!1)return;hp.copy(s).invert(),kh.copy(e.ray).applyMatrix4(hp);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);Dl.fromBufferAttribute(h,g),dp(Dl,g,l,s,e,t,this)}}else{let d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let p=d,x=f;p<x;p++)Dl.fromBufferAttribute(h,p),dp(Dl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function dp(i,e,t,n,s,a,r){let o=kh.distanceSqToPoint(i);if(o<t){let l=new k;kh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var Zr=class extends vn{constructor(e=[],t=ca,n,s,a,r,o,l,c,u){super(e,t,n,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_n=class extends vn{constructor(e,t,n,s,a,r,o,l,c){super(e,t,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends vn{constructor(e,t,n=Ii,s,a,r,o=an,l=an,c,u=ss,h=1){if(u!==ss&&u!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,a,r,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ya(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},eo=class extends wi{constructor(e,t=Ii,n=ca,s,a,r=an,o=an,l,c=ss){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,a,r,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},to=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bi=class i extends dt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,r,a,0),p("z","y","x",1,-1,n,t,-e,r,a,1),p("x","z","y",1,1,e,n,t,s,r,2),p("x","z","y",1,-1,e,n,-t,s,r,3),p("x","y","z",1,-1,e,t,n,s,a,4),p("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(h,2));function p(x,g,m,y,_,M,S,T,b,v,F){let L=M/b,G=S/v,q=M/2,U=S/2,E=T/2,D=b+1,w=v+1,P=0,Y=0,O=new k;for(let B=0;B<w;B++){let $=B*G-U;for(let H=0;H<D;H++){let j=H*L-q;O[x]=j*y,O[g]=$*_,O[m]=E,c.push(O.x,O.y,O.z),O[x]=0,O[g]=0,O[m]=T>0?1:-1,u.push(O.x,O.y,O.z),h.push(H/b),h.push(1-B/v),P+=1}}for(let B=0;B<v;B++)for(let $=0;$<b;$++){let H=d+$+D*B,j=d+$+D*(B+1),X=d+($+1)+D*(B+1),W=d+($+1)+D*B;l.push(H,j,W),l.push(j,X,W),Y+=6}o.addGroup(f,Y,F),f+=Y,d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var nn=class i extends dt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let u=[],h=[],d=[],f=[],p=0,x=[],g=n/2,m=0;y(),r===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function y(){let M=new k,S=new k,T=0,b=(t-e)/n;for(let v=0;v<=a;v++){let F=[],L=v/a,G=L*(t-e)+e;for(let q=0;q<=s;q++){let U=q/s,E=U*l+o,D=Math.sin(E),w=Math.cos(E);S.x=G*D,S.y=-L*n+g,S.z=G*w,h.push(S.x,S.y,S.z),M.set(D,b,w).normalize(),d.push(M.x,M.y,M.z),f.push(U,1-L),F.push(p++)}x.push(F)}for(let v=0;v<s;v++)for(let F=0;F<a;F++){let L=x[F][v],G=x[F+1][v],q=x[F+1][v+1],U=x[F][v+1];(e>0||F!==0)&&(u.push(L,G,U),T+=3),(t>0||F!==a-1)&&(u.push(G,q,U),T+=3)}c.addGroup(m,T,0),m+=T}function _(M){let S=p,T=new pe,b=new k,v=0,F=M===!0?e:t,L=M===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,g*L,0),d.push(0,L,0),f.push(.5,.5),p++;let G=p;for(let q=0;q<=s;q++){let E=q/s*l+o,D=Math.cos(E),w=Math.sin(E);b.x=F*w,b.y=g*L,b.z=F*D,h.push(b.x,b.y,b.z),d.push(0,L,0),T.x=D*.5+.5,T.y=w*.5*L+.5,f.push(T.x,T.y),p++}for(let q=0;q<s;q++){let U=S+q,E=G+q;M===!0?u.push(E,E+1,U):u.push(E+1,E,U),v+=3}c.addGroup(m,v,M===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},no=class i extends nn{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ec=class i extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let a=[],r=[];o(s),c(n),u(),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(a.slice(),3)),this.setAttribute("uv",new at(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new k,M=new k,S=new k;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],M),f(t[T+2],S),l(_,M,S,y)}function l(y,_,M,S){let T=S+1,b=[];for(let v=0;v<=T;v++){b[v]=[];let F=y.clone().lerp(M,v/T),L=_.clone().lerp(M,v/T),G=T-v;for(let q=0;q<=G;q++)q===0&&v===T?b[v][q]=F:b[v][q]=F.clone().lerp(L,q/G)}for(let v=0;v<T;v++)for(let F=0;F<2*(T-v)-1;F++){let L=Math.floor(F/2);F%2===0?(d(b[v][L+1]),d(b[v+1][L]),d(b[v][L])):(d(b[v][L+1]),d(b[v+1][L+1]),d(b[v+1][L]))}}function c(y){let _=new k;for(let M=0;M<a.length;M+=3)_.x=a[M+0],_.y=a[M+1],_.z=a[M+2],_.normalize().multiplyScalar(y),a[M+0]=_.x,a[M+1]=_.y,a[M+2]=_.z}function u(){let y=new k;for(let _=0;_<a.length;_+=3){y.x=a[_+0],y.y=a[_+1],y.z=a[_+2];let M=g(y)/2/Math.PI+.5,S=m(y)/Math.PI+.5;r.push(M,1-S)}p(),h()}function h(){for(let y=0;y<r.length;y+=6){let _=r[y+0],M=r[y+2],S=r[y+4],T=Math.max(_,M,S),b=Math.min(_,M,S);T>.9&&b<.1&&(_<.2&&(r[y+0]+=1),M<.2&&(r[y+2]+=1),S<.2&&(r[y+4]+=1))}}function d(y){a.push(y.x,y.y,y.z)}function f(y,_){let M=y*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function p(){let y=new k,_=new k,M=new k,S=new k,T=new pe,b=new pe,v=new pe;for(let F=0,L=0;F<a.length;F+=9,L+=6){y.set(a[F+0],a[F+1],a[F+2]),_.set(a[F+3],a[F+4],a[F+5]),M.set(a[F+6],a[F+7],a[F+8]),T.set(r[L+0],r[L+1]),b.set(r[L+2],r[L+3]),v.set(r[L+4],r[L+5]),S.copy(y).add(_).add(M).divideScalar(3);let G=g(S);x(T,L+0,y,G),x(b,L+2,_,G),x(v,L+4,M,G)}}function x(y,_,M,S){S<0&&y.x===1&&(r[_]=y.x-1),M.x===0&&M.z===0&&(r[_]=S/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,a=n.length,r;t?r=t:r=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);let u=n[s],d=n[s+1]-u,f=(r-u)/d;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=t||(r.isVector2?new pe:new k);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],a=[],r=[],o=new k,l=new je;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new k)}a[0]=new k,r[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Et(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,p))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(Et(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let p=1;p<=e;p++)a[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],a[p])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ja=class extends ui{constructor(e=0,t=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let n=t,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tc=class extends Ja{constructor(e,t,n,s,a,r){super(e,t,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function fd(){let i=0,e=0,t=0,n=0;function s(a,r,o,l){i=a,e=o,t=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,h){let d=(r-a)/c-(o-a)/(c+u)+(o-r)/u,f=(o-r)/u-(l-r)/(u+h)+(l-o)/h;d*=u,f*=u,s(r,o,d,f)},calc:function(a){let r=a*a,o=r*a;return i+e*a+t*r+n*o}}}var fp=new k,pp=new k,Sh=new fd,Th=new fd,Eh=new fd,Zn=class extends ui{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(pp.subVectors(s[0],s[1]).add(s[0]),c=pp);let h=s[o%a],d=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(fp.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=fp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Sh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,g),Th.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,g),Eh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Sh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Th.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Eh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Sh.calc(l),Th.calc(l),Eh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mp(i,e,t,n,s){let a=(n-e)*.5,r=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+a+r)*l+(-3*t+3*n-2*a-r)*o+a*i+t}function Ab(i,e){let t=1-i;return t*t*e}function Rb(i,e){return 2*(1-i)*i*e}function Pb(i,e){return i*i*e}function Or(i,e,t,n){return Ab(i,e)+Rb(i,t)+Pb(i,n)}function wb(i,e){let t=1-i;return t*t*t*e}function Lb(i,e){let t=1-i;return 3*t*t*i*e}function Ib(i,e){return 3*(1-i)*i*i*e}function Fb(i,e){return i*i*i*e}function Xr(i,e,t,n,s){return wb(i,e)+Lb(i,t)+Ib(i,n)+Fb(i,s)}var io=class extends ui{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Xr(e,s.x,a.x,r.x,o.x),Xr(e,s.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nc=class extends ui{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Xr(e,s.x,a.x,r.x,o.x),Xr(e,s.y,a.y,r.y,o.y),Xr(e,s.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},so=class extends ui{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends ui{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends ui{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Or(e,s.x,a.x,r.x),Or(e,s.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends ui{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Or(e,s.x,a.x,r.x),Or(e,s.y,a.y,r.y),Or(e,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(mp(o,l.x,c.x,u.x,h.x),mp(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},sc=Object.freeze({__proto__:null,ArcCurve:tc,CatmullRomCurve3:Zn,CubicBezierCurve:io,CubicBezierCurve3:nc,EllipseCurve:Ja,LineCurve:so,LineCurve3:ic,QuadraticBezierCurve:ao,QuadraticBezierCurve3:ro,SplineCurve:oo}),ac=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=n){let r=s[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new sc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},lo=class extends ac{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new so(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let a=new ao(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,r){let o=new io(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new oo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,a,r),this}absarc(e,t,n,s,a,r){return this.absellipse(e,t,n,n,s,a,r),this}ellipse(e,t,n,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,a,r,o,l),this}absellipse(e,t,n,s,a,r,o,l){let c=new Ja(e,t,n,s,a,r,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Li=class extends lo{constructor(e){super(e),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new lo().fromJSON(s))}return this}};function kb(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,a=u0(i,0,s,t,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(n&&(a=Bb(i,e,a,t)),i.length>80*t){o=i[0],l=i[1];let u=o,h=l;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return co(a,r,t,o,l,c,0),r}function u0(i,e,t,n,s){let a;if(s===Jb(i,e,t,n)>0)for(let r=e;r<t;r+=n)a=gp(r/n|0,i[r],i[r+1],a);else for(let r=t-n;r>=e;r-=n)a=gp(r/n|0,i[r],i[r+1],a);return a&&ja(a,a.next)&&(ho(a),a=a.next),a}function sa(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ja(t,t.next)||un(t.prev,t,t.next)===0)){if(ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function co(i,e,t,n,s,a,r){if(!i)return;!r&&a&&Xb(i,n,s,a);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(a?Nb(i,n,s,a):Db(i)){e.push(l.i,i.i,c.i),ho(i),i=c.next,o=c.next;continue}if(i=c,i===o){r?r===1?(i=Cb(sa(i),e),co(i,e,t,n,s,a,2)):r===2&&Ub(i,e,t,n,s,a):co(sa(i),e,t,n,s,a,1);break}}}function Db(i){let e=i.prev,t=i,n=i.next;if(un(e,t,n)>=0)return!1;let s=e.x,a=t.x,r=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,a,r),h=Math.min(o,l,c),d=Math.max(s,a,r),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Br(s,o,a,l,r,c,p.x,p.y)&&un(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Nb(i,e,t,n){let s=i.prev,a=i,r=i.next;if(un(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,h=a.y,d=r.y,f=Math.min(o,l,c),p=Math.min(u,h,d),x=Math.max(o,l,c),g=Math.max(u,h,d),m=Dh(f,p,e,t,n),y=Dh(x,g,e,t,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=m&&M&&M.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&Br(o,u,l,h,c,d,_.x,_.y)&&un(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==r&&Br(o,u,l,h,c,d,M.x,M.y)&&un(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&Br(o,u,l,h,c,d,_.x,_.y)&&un(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==r&&Br(o,u,l,h,c,d,M.x,M.y)&&un(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Cb(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ja(n,s)&&d0(n,t,t.next,s)&&uo(n,s)&&uo(s,n)&&(e.push(n.i,t.i,s.i),ho(t),ho(t.next),t=i=s),t=t.next}while(t!==i);return sa(t)}function Ub(i,e,t,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&$b(r,o)){let l=f0(r,o);r=sa(r,r.next),l=sa(l,l.next),co(r,e,t,n,s,a,0),co(l,e,t,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function Bb(i,e,t,n){let s=[];for(let a=0,r=e.length;a<r;a++){let o=e[a]*n,l=a<r-1?e[a+1]*n:i.length,c=u0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Yb(c))}s.sort(Hb);for(let a=0;a<s.length;a++)t=Gb(s[a],t);return t}function Hb(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Gb(i,e){let t=qb(i,e);if(!t)return e;let n=f0(t,i);return sa(n,n.next),sa(t,t.next)}function qb(i,e){let t=e,n=i.x,s=i.y,a=-1/0,r;if(ja(i,t))return t;do{if(ja(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>a&&(a=h,r=t.x<t.next.x?t:t.next,h===n))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;t=r;do{if(n>=t.x&&t.x>=l&&n!==t.x&&h0(s<c?n:a,s,l,c,s<c?a:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);uo(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&Ob(r,t)))&&(r=t,u=h)}t=t.next}while(t!==o);return r}function Ob(i,e){return un(i.prev,i,e.prev)<0&&un(e.next,i,i.next)<0}function Xb(i,e,t,n){let s=i;do s.z===0&&(s.z=Dh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vb(s)}function Vb(i){let e,t=1;do{let n=i,s;i=null;let a=null;for(e=0;n;){e++;let r=n,o=0;for(let c=0;c<t&&(o++,r=r.nextZ,!!r);c++);let l=t;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;n=r}a.nextZ=null,t*=2}while(e>1);return i}function Dh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Yb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function h0(i,e,t,n,s,a,r,o){return(s-r)*(e-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(n-o)}function Br(i,e,t,n,s,a,r,o){return!(i===r&&e===o)&&h0(i,e,t,n,s,a,r,o)}function $b(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Qb(i,e)&&(uo(i,e)&&uo(e,i)&&zb(i,e)&&(un(i.prev,i,e.prev)||un(i,e.prev,e))||ja(i,e)&&un(i.prev,i,i.next)>0&&un(e.prev,e,e.next)>0)}function un(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ja(i,e){return i.x===e.x&&i.y===e.y}function d0(i,e,t,n){let s=Cl(un(i,e,t)),a=Cl(un(i,e,n)),r=Cl(un(t,n,i)),o=Cl(un(t,n,e));return!!(s!==a&&r!==o||s===0&&Nl(i,t,e)||a===0&&Nl(i,n,e)||r===0&&Nl(t,i,n)||o===0&&Nl(t,e,n))}function Nl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cl(i){return i>0?1:i<0?-1:0}function Qb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&d0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function uo(i,e){return un(i.prev,i,i.next)<0?un(i,e,i.next)>=0&&un(i,i.prev,e)>=0:un(i,e,i.prev)<0||un(i,i.next,e)<0}function zb(i,e){let t=i,n=!1,s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function f0(i,e){let t=Nh(i.i,i.x,i.y),n=Nh(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function gp(i,e,t,n){let s=Nh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jb(i,e,t,n){let s=0;for(let a=e,r=t-n;a<t;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}var Ch=class{static triangulate(e,t,n=2){return kb(e,t,n)}},Ci=class i{static area(e){let t=e.length,n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],a=[];bp(e),xp(n,e);let r=e.length;t.forEach(bp);for(let l=0;l<t.length;l++)s.push(r),r+=t[l].length,xp(n,t[l]);let o=Ch.triangulate(n,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function bp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Is=class i extends dt{constructor(e=new Li([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];r(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(a,2)),this.computeVertexNormals();function r(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:jb,_,M=!1,S,T,b,v;if(m){_=m.getSpacedPoints(u),M=!0,d=!1;let te=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(u,te),T=new k,b=new k,v=new k}d||(g=0,f=0,p=0,x=0);let F=o.extractPoints(c),L=F.shape,G=F.holes;if(!Ci.isClockWise(L)){L=L.reverse();for(let te=0,V=G.length;te<V;te++){let ae=G[te];Ci.isClockWise(ae)&&(G[te]=ae.reverse())}}function U(te){let ae=10000000000000001e-36,Ae=te[0];for(let Me=1;Me<=te.length;Me++){let tt=Me%te.length,Fe=te[tt],ft=Fe.x-Ae.x,bt=Fe.y-Ae.y,Mt=ft*ft+bt*bt,z=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Ae.x),Math.abs(Ae.y)),Ut=ae*z*z;if(Mt<=Ut){te.splice(tt,1),Me--;continue}Ae=Fe}}U(L),G.forEach(U);let E=G.length,D=L;for(let te=0;te<E;te++){let V=G[te];L=L.concat(V)}function w(te,V,ae){return V||st("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(V,ae)}let P=L.length;function Y(te,V,ae){let Ae,Me,tt,Fe=te.x-V.x,ft=te.y-V.y,bt=ae.x-te.x,Mt=ae.y-te.y,z=Fe*Fe+ft*ft,Ut=Fe*Mt-ft*bt;if(Math.abs(Ut)>Number.EPSILON){let ht=Math.sqrt(z),Ft=Math.sqrt(bt*bt+Mt*Mt),Te=V.x-ft/ht,Ue=V.y+Fe/ht,Xe=ae.x-Mt/Ft,Ke=ae.y+bt/Ft,N=((Xe-Te)*Mt-(Ke-Ue)*bt)/(Fe*Mt-ft*bt);Ae=Te+Fe*N-te.x,Me=Ue+ft*N-te.y;let A=Ae*Ae+Me*Me;if(A<=2)return new pe(Ae,Me);tt=Math.sqrt(A/2)}else{let ht=!1;Fe>Number.EPSILON?bt>Number.EPSILON&&(ht=!0):Fe<-Number.EPSILON?bt<-Number.EPSILON&&(ht=!0):Math.sign(ft)===Math.sign(Mt)&&(ht=!0),ht?(Ae=-ft,Me=Fe,tt=Math.sqrt(z)):(Ae=Fe,Me=ft,tt=Math.sqrt(z/2))}return new pe(Ae/tt,Me/tt)}let O=[];for(let te=0,V=D.length,ae=V-1,Ae=te+1;te<V;te++,ae++,Ae++)ae===V&&(ae=0),Ae===V&&(Ae=0),O[te]=Y(D[te],D[ae],D[Ae]);let B=[],$,H=O.concat();for(let te=0,V=E;te<V;te++){let ae=G[te];$=[];for(let Ae=0,Me=ae.length,tt=Me-1,Fe=Ae+1;Ae<Me;Ae++,tt++,Fe++)tt===Me&&(tt=0),Fe===Me&&(Fe=0),$[Ae]=Y(ae[Ae],ae[tt],ae[Fe]);B.push($),H=H.concat($)}let j;if(g===0)j=Ci.triangulateShape(D,G);else{let te=[],V=[];for(let ae=0;ae<g;ae++){let Ae=ae/g,Me=f*Math.cos(Ae*Math.PI/2),tt=p*Math.sin(Ae*Math.PI/2)+x;for(let Fe=0,ft=D.length;Fe<ft;Fe++){let bt=w(D[Fe],O[Fe],tt);Re(bt.x,bt.y,-Me),Ae===0&&te.push(bt)}for(let Fe=0,ft=E;Fe<ft;Fe++){let bt=G[Fe];$=B[Fe];let Mt=[];for(let z=0,Ut=bt.length;z<Ut;z++){let ht=w(bt[z],$[z],tt);Re(ht.x,ht.y,-Me),Ae===0&&Mt.push(ht)}Ae===0&&V.push(Mt)}}j=Ci.triangulateShape(te,V)}let X=j.length,W=p+x;for(let te=0;te<P;te++){let V=d?w(L[te],H[te],W):L[te];M?(b.copy(S.normals[0]).multiplyScalar(V.x),T.copy(S.binormals[0]).multiplyScalar(V.y),v.copy(_[0]).add(b).add(T),Re(v.x,v.y,v.z)):Re(V.x,V.y,0)}for(let te=1;te<=u;te++)for(let V=0;V<P;V++){let ae=d?w(L[V],H[V],W):L[V];M?(b.copy(S.normals[te]).multiplyScalar(ae.x),T.copy(S.binormals[te]).multiplyScalar(ae.y),v.copy(_[te]).add(b).add(T),Re(v.x,v.y,v.z)):Re(ae.x,ae.y,h/u*te)}for(let te=g-1;te>=0;te--){let V=te/g,ae=f*Math.cos(V*Math.PI/2),Ae=p*Math.sin(V*Math.PI/2)+x;for(let Me=0,tt=D.length;Me<tt;Me++){let Fe=w(D[Me],O[Me],Ae);Re(Fe.x,Fe.y,h+ae)}for(let Me=0,tt=G.length;Me<tt;Me++){let Fe=G[Me];$=B[Me];for(let ft=0,bt=Fe.length;ft<bt;ft++){let Mt=w(Fe[ft],$[ft],Ae);M?Re(Mt.x,Mt.y+_[u-1].y,_[u-1].x+ae):Re(Mt.x,Mt.y,h+ae)}}}ie(),me();function ie(){let te=s.length/3;if(d){let V=0,ae=P*V;for(let Ae=0;Ae<X;Ae++){let Me=j[Ae];De(Me[2]+ae,Me[1]+ae,Me[0]+ae)}V=u+g*2,ae=P*V;for(let Ae=0;Ae<X;Ae++){let Me=j[Ae];De(Me[0]+ae,Me[1]+ae,Me[2]+ae)}}else{for(let V=0;V<X;V++){let ae=j[V];De(ae[2],ae[1],ae[0])}for(let V=0;V<X;V++){let ae=j[V];De(ae[0]+P*u,ae[1]+P*u,ae[2]+P*u)}}n.addGroup(te,s.length/3-te,0)}function me(){let te=s.length/3,V=0;he(D,V),V+=D.length;for(let ae=0,Ae=G.length;ae<Ae;ae++){let Me=G[ae];he(Me,V),V+=Me.length}n.addGroup(te,s.length/3-te,1)}function he(te,V){let ae=te.length;for(;--ae>=0;){let Ae=ae,Me=ae-1;Me<0&&(Me=te.length-1);for(let tt=0,Fe=u+g*2;tt<Fe;tt++){let ft=P*tt,bt=P*(tt+1),Mt=V+Ae+ft,z=V+Me+ft,Ut=V+Me+bt,ht=V+Ae+bt;Ce(Mt,z,Ut,ht)}}}function Re(te,V,ae){l.push(te),l.push(V),l.push(ae)}function De(te,V,ae){Ge(te),Ge(V),Ge(ae);let Ae=s.length/3,Me=y.generateTopUV(n,s,Ae-3,Ae-2,Ae-1);be(Me[0]),be(Me[1]),be(Me[2])}function Ce(te,V,ae,Ae){Ge(te),Ge(V),Ge(Ae),Ge(V),Ge(ae),Ge(Ae);let Me=s.length/3,tt=y.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);be(tt[0]),be(tt[1]),be(tt[3]),be(tt[1]),be(tt[2]),be(tt[3])}function Ge(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function be(te){a.push(te.x),a.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wb(t,n,e)}static fromJSON(e,t){let n=[];for(let a=0,r=e.shapes.length;a<r;a++){let o=t[e.shapes[a]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new sc[s.type]().fromJSON(s)),new i(n,e.options)}},jb={generateTopUV:function(i,e,t,n,s){let a=e[t*3],r=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new pe(a,r),new pe(o,l),new pe(c,u)]},generateSideWallUV:function(i,e,t,n,s,a){let r=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[a*3],g=e[a*3+1],m=e[a*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new pe(r,1-l),new pe(c,1-h),new pe(d,1-p),new pe(x,1-m)]:[new pe(o,1-l),new pe(u,1-h),new pe(f,1-p),new pe(g,1-m)]}};function Wb(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Fs=class i extends ec{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ks=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let y=m*d-r;for(let _=0;_<c;_++){let M=_*h-a;p.push(M,-y,0),x.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let _=y+c*m,M=y+c*(m+1),S=y+1+c*(m+1),T=y+1+c*m;f.push(_,M,T),f.push(M,S,T)}this.setIndex(f),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ds=class i extends dt{constructor(e=.5,t=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new k,p=new pe;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=a+g/n*r;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let y=m+g,_=y,M=y+n+1,S=y+n+2,T=y+1;o.push(_,M,T),o.push(M,S,T)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},fo=class i extends dt{constructor(e=new Li([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],a=[],r=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(r,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,p=d.holes;Ci.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];Ci.isClockWise(y)===!0&&(p[g]=y.reverse())}let x=Ci.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){let y=f[g];s.push(y.x,y.y,0),a.push(0,0,1),r.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){let y=x[g],_=y[0]+h,M=y[1]+h,S=y[2]+h;n.push(_,M,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Kb(t,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let r=t[e.shapes[s]];n.push(r)}return new i(n,e.curveSegments)}};function Kb(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Cn=class i extends dt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(r+o,Math.PI),c=0,u=[],h=new k,d=new k,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let y=[],_=m/n,M=r+_*o,S=e*Math.cos(M),T=Math.sqrt(e*e-S*S),b=0;m===0&&r===0?b=.5/t:m===n&&l===Math.PI&&(b=-.5/t);for(let v=0;v<=t;v++){let F=v/t,L=s+F*a;h.x=-T*Math.cos(L),h.y=S,h.z=T*Math.sin(L),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(F+b,1-_),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let _=u[m][y+1],M=u[m][y],S=u[m+1][y],T=u[m+1][y+1];(m!==0||r>0)&&f.push(_,M,T),(m!==n-1||l<Math.PI)&&f.push(M,S,T)}this.setIndex(f),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var as=class i extends dt{constructor(e=new ro(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:a};let r=e.computeFrenetFrames(t,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new k,l=new k,c=new pe,u=new k,h=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function x(){for(let _=0;_<t;_++)g(_);g(a===!1?t:0),y(),m()}function g(_){u=e.getPointAt(_/t,u);let M=r.normals[_],S=r.binormals[_];for(let T=0;T<=s;T++){let b=T/s*Math.PI*2,v=Math.sin(b),F=-Math.cos(b);l.x=F*M.x+v*S.x,l.y=F*M.y+v*S.y,l.z=F*M.z+v*S.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=t;_++)for(let M=1;M<=s;M++){let S=(s+1)*(_-1)+(M-1),T=(s+1)*_+(M-1),b=(s+1)*_+M,v=(s+1)*(_-1)+M;p.push(S,T,v),p.push(T,b,v)}}function y(){for(let _=0;_<=t;_++)for(let M=0;M<=s;M++)c.x=_/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new sc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function da(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(yp(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(yp(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Qn(i){let e={};for(let t=0;t<i.length;t++){let n=da(i[t]);for(let s in n)e[s]=n[s]}return e}function yp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var ei={clone:da,merge:Qn},ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=Zb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wa=class extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},et=class extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zt=class extends et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ks('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ks('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ka=class extends Nn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=Ro,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var po=class extends Nn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},mo=class extends Nn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=Ro,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Za=class extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rc=class extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ts(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Hr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function nx(i){function e(s,a){return i[s]-i[a]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Mp(i,e,t){let n=i.length,s=new i.constructor(n);for(let a=0,r=0;r!==n;++a){let o=t[a]*e;for(let l=0;l!==e;++l)s[r++]=i[o+l]}return s}function ix(i,e,t,n){let s=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[s++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push(...r)),a=i[s++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=i[s++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=i[s++];while(a!==void 0)}var Gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=s,s=t[++n],e<s)break e}r=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(n=2,a=o);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=a,a=t[--n-1],e>=a)break e}r=n,n=0;break t}break n}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oc=class extends Gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lh,endingEnd:Lh}}intervalChanged_(e,t,n){let s=this.parameterPositions,a=e-2,r=e+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ih:a=e,o=2*t-n;break;case Fh:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ih:r=e,l=2*n-t;break;case Fh:r=1,l=n+s[1]-s[0];break;default:r=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*x+.5*p,M=f*g-f*x;for(let S=0;S!==o;++S)a[S]=m*r[u+S]+y*r[c+S]+_*r[l+S]+M*r[h+S];return a}},lc=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)a[d]=r[c+d]*h+r[l+d]*u;return a}},cc=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},uc=class extends Gi{interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),x=1-p;for(let g=0;g!==o;++g)a[g]=r[c+g]*x+r[l+g]*p;return a}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let x=r[c+p],g=r[l+p],m=f*d+p*2,y=h[m],_=h[m+1],M=e*d+p*2,S=u[M],T=u[M+1],b=ax(n,t,y,S,s);a[p]=p0(b,x,_,T,g)}return a}};function p0(i,e,t,n,s){let a=1-i;return a*a*a*e+3*a*a*i*t+3*a*i*i*n+i*i*i*s}function sx(i,e,t,n,s){let a=1-i;return 3*a*a*(t-e)+6*a*i*(n-t)+3*i*i*(s-n)}function ax(i,e,t,n,s){let a=(i-e)/(s-e);for(let r=0;r<8;r++){let o=p0(a,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=sx(a,e,t,n,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var ai=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ts(t,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ts(e.times,Array),values:Ts(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Hr(e.settings)&&(n.settings={inTangents:Ts(e.settings.inTangents,Array),outTangents:Ts(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new uc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zs:t=this.InterpolantFactoryMethodDiscrete;break;case ea:t=this.InterpolantFactoryMethodLinear;break;case Hl:t=this.InterpolantFactoryMethodSmooth;break;case wh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Hl;case this.InterpolantFactoryMethodBezier:return wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Hr(this.settings)&&(vp(this.settings.inTangents,e),vp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Hr(this.settings)&&(_p(this.settings.inTangents,e),_p(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,a=0,r=s-1;for(;a!==s&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,a=n.length;a===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){st("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){st("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(s!==void 0&&Xg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){st("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Hl,a=e.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let h=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Hr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function vp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function _p(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=ea;var rs=class extends ai{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Zs;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}};go.prototype.ValueTypeName="color";var os=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}};os.prototype.ValueTypeName="number";var hc=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Pt.slerpFlat(a,0,r,c-o,r,c,l);return a}},ls=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}};ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends ai{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Zs;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ns=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}};Ns.prototype.ValueTypeName="vector";var bo=class{constructor(e="",t=-1,n=[],s=jp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ki(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(ox(n[r]).scale(s));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,r=n.length;a!==r;++a)t.push(ai.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let a=t.length,r=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);let u=nx(l);l=Mp(l,1,u),c=Mp(c,1,u),!s&&l[0]===0&&(l.push(a),c.push(c[0])),r.push(new os(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(a);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let r=[];for(let o in s)r.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return r}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function rx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return go;case"quaternion":return ls;case"bool":case"boolean":return rs;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ox(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=rx(i.type);if(i.times===void 0){let n=[],s=[];ix(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Hr(i.settings)&&(t.settings={inTangents:Ts(i.settings.inTangents,Float32Array),outTangents:Ts(i.settings.outTangents,Float32Array)}),t}var Ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Sp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Sp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Sp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var dc=class{constructor(e,t,n){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},m0=new dc,xi=class{constructor(e){this.manager=e!==void 0?e:m0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};xi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ns={},Uh=class extends Error{constructor(e,t){super(e),this.response=t}},us=class extends xi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Ui.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(ns[e]!==void 0){ns[e].push({onLoad:t,onProgress:n,onError:s});return}ns[e]=[],ns[e].push({onLoad:t,onProgress:n,onError:s});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ns[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,g=new ReadableStream({start(m){y();function y(){h.read().then(({done:_,value:M})=>{if(_)m.close();else{x+=M.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let T=0,b=u.length;T<b;T++){let v=u[T];v.onProgress&&v.onProgress(S)}m.enqueue(M),y()}},_=>{m.error(_)})}}});return new Response(g)}else throw new Uh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ui.add(`file:${e}`,c);let u=ns[e];delete ns[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=ns[e];if(u===void 0)throw this.manager.itemError(e),c;delete ns[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ca=new WeakMap,fc=class extends xi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=Ui.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0);else{let h=Ca.get(r);h===void 0&&(h=[],Ca.set(r,h)),h.push({onLoad:t,onError:s})}return r}let o=Xa("img");function l(){u(),t&&t(this);let h=Ca.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ca.delete(this),a.manager.itemEnd(e)}function c(h){u(),s&&s(h),Ui.remove(`image:${e}`);let d=Ca.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}Ca.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ui.add(`image:${e}`,o),a.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Un=class extends xi{constructor(e){super(e)}load(e,t,n,s){let a=new vn,r=new fc(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}},er=class extends Ot{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ah=new je,Tp=new k,Ep=new k,tr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tp),Ep.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ep),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ah.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ah,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===Oa||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ul=new k,Bl=new Pt,Ni=new k,xo=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Bl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Bl,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ul,Bl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Bl,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ss=new k,Ap=new pe,Rp=new pe,tn=class extends xo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,Ap,Rp),t.subVectors(Rp,Ap)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bh=class extends tr{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ta*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},yo=class extends er{constructor(e,t,n=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new Bh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Hh=class extends tr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},aa=class extends er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hs=class extends xo{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gh=class extends tr{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wn=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Gh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var hi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Mo=class extends dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Rh=new WeakMap,vo=class extends xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=Ui.get(`image-bitmap:${e}`);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(c=>{Rh.has(r)===!0?(s&&s(Rh.get(r)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(c),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},a.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ui.add(`image-bitmap:${e}`,c),t&&t(c),a.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Rh.set(l,c),Ui.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Ui.add(`image-bitmap:${e}`,l),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ua=-90,Ba=1,nr=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Ua,Ba,e,t);s.layers=this.layers,this.add(s);let a=new tn(Ua,Ba,e,t);a.layers=this.layers,this.add(a);let r=new tn(Ua,Ba,e,t);r.layers=this.layers,this.add(r);let o=new tn(Ua,Ba,e,t);o.layers=this.layers,this.add(o);let l=new tn(Ua,Ba,e,t);l.layers=this.layers,this.add(l);let c=new tn(Ua,Ba,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},pc=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},_o=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=lx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function lx(){this._document.hidden===!1&&this.reset()}var md="\\[\\]\\.:\\/",cx=new RegExp("["+md+"]","g"),gd="[^"+md+"]",ux="[^"+md.replace("\\.","")+"]",hx=/((?:WC+[\/:])*)/.source.replace("WC",gd),dx=/(WCOD+)?/.source.replace("WCOD",ux),fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gd),px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gd),mx=new RegExp("^"+hx+dx+fx+px+"$"),gx=["material","materials","bones","map"],qh=class{constructor(e,t,n){let s=n||Jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Jt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cx,"")}static parseTrackName(e){let t=mx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=n.nodeName.substring(s+1);gx.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[s];if(r===void 0){let c=t.nodeName;st("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jt.Composite=qh;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W_=new Float32Array(1);var Pp=new je,So=class{constructor(e,t,n=0,s=1/0){this.ray=new Ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new $a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pp),this}intersectObject(e,t=!0,n=[]){return Oh(e,this,n,t),n.sort(wp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)Oh(e[s],this,n,t);return n.sort(wp),n}};function wp(i,e){return i.distance-e.distance}function Oh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let a=i.children;for(let r=0,o=a.length;r<o;r++)Oh(a[r],e,t,!0)}}var _d=class _d{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=s,this}};_d.prototype.isMatrix2=!0;var Xh=_d;function bd(i,e,t,n){let s=bx(n);switch(t){case ed:return i*e;case Sc:return i*e/s.components*s.byteLength;case Tc:return i*e/s.components*s.byteLength;case Cs:return i*e*2/s.components*s.byteLength;case Ec:return i*e*2/s.components*s.byteLength;case td:return i*e*3/s.components*s.byteLength;case oi:return i*e*4/s.components*s.byteLength;case Ac:return i*e*4/s.components*s.byteLength;case Do:case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Co:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Lc:return Math.max(i,16)*Math.max(e,8)/4;case Rc:case wc:return Math.max(i,8)*Math.max(e,8)/2;case Ic:case Fc:case Dc:case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kc:case Bo:case Cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wc:case Kc:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case eu:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ho:case nu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bx(i){switch(i){case $n:case jh:return{byteLength:1,components:1};case or:case Wh:case fn:return{byteLength:2,components:1};case vc:case _c:return{byteLength:2,components:4};case Ii:case Mc:case di:return{byteLength:4,components:1};case Kh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function U0(){let i=null,e=!1,t=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function yx(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ax=`#ifdef USE_AOMAP
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
#endif`,Rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Px=`#ifdef USE_BATCHING
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
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Dx=`#ifdef USE_BUMPMAP
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
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Xx=`#define PI 3.141592653589793
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
} // validated`,Vx=`vec3 transformedNormal = objectNormal;
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
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",jx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r1=`#ifdef USE_GRADIENTMAP
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
}`,o1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,h1=`#ifdef USE_ENVMAP
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
#endif`,d1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g1=`PhysicalMaterial material;
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
#endif`,b1=`uniform sampler2D dfgLUT;
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
}`,x1=`
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
#endif`,y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,M1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,_1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w1=`#if defined( USE_POINTS_UV )
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
#endif`,L1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k1=`#if defined( USE_MORPHCOLORS )
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
#endif`,D1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
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
#endif`,C1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O1=`#ifdef USE_NORMALMAP
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
#endif`,X1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sy=`float getShadowMask() {
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
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform float backgroundBlurriness;
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
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
}`,Ay=`#if DEPTH_PACKING == 3200
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
}`,Ry=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,ky=`#include <common>
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Ny=`#define LAMBERT
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
}`,Cy=`#define LAMBERT
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
}`,Uy=`#define MATCAP
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
}`,By=`#define MATCAP
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
}`,Hy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,qy=`#define PHONG
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
}`,Oy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,Vy=`#define STANDARD
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
}`,Yy=`#define TOON
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
}`,$y=`#define TOON
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
}`,Qy=`uniform float size;
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
}`,zy=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,jy=`uniform vec3 color;
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
}`,Wy=`uniform float rotation;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:Mx,alphahash_pars_fragment:vx,alphamap_fragment:_x,alphamap_pars_fragment:Sx,alphatest_fragment:Tx,alphatest_pars_fragment:Ex,aomap_fragment:Ax,aomap_pars_fragment:Rx,batching_pars_vertex:Px,batching_vertex:wx,begin_vertex:Lx,beginnormal_vertex:Ix,bsdfs:Fx,iridescence_fragment:kx,bumpmap_pars_fragment:Dx,clipping_planes_fragment:Nx,clipping_planes_pars_fragment:Cx,clipping_planes_pars_vertex:Ux,clipping_planes_vertex:Bx,color_fragment:Hx,color_pars_fragment:Gx,color_pars_vertex:qx,color_vertex:Ox,common:Xx,defaultnormal_vertex:Vx,displacementmap_pars_vertex:Yx,displacementmap_vertex:$x,emissivemap_fragment:Qx,emissivemap_pars_fragment:zx,colorspace_fragment:Jx,colorspace_pars_fragment:jx,envmap_fragment:Wx,envmap_common_pars_fragment:Kx,envmap_pars_fragment:Zx,envmap_pars_vertex:e1,envmap_physical_pars_fragment:h1,envmap_vertex:t1,fog_vertex:n1,fog_pars_vertex:i1,fog_fragment:s1,fog_pars_fragment:a1,gradientmap_pars_fragment:r1,lightmap_pars_fragment:o1,lights_lambert_fragment:l1,lights_lambert_pars_fragment:c1,lights_pars_begin:u1,lights_toon_fragment:d1,lights_toon_pars_fragment:f1,lights_phong_fragment:p1,lights_phong_pars_fragment:m1,lights_physical_fragment:g1,lights_physical_pars_fragment:b1,lights_fragment_begin:x1,lights_fragment_maps:y1,lights_fragment_end:M1,lightprobes_pars_fragment:v1,logdepthbuf_fragment:_1,logdepthbuf_pars_fragment:S1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:E1,map_fragment:A1,map_pars_fragment:R1,map_particle_fragment:P1,map_particle_pars_fragment:w1,metalnessmap_fragment:L1,metalnessmap_pars_fragment:I1,morphinstance_vertex:F1,morphcolor_vertex:k1,morphnormal_vertex:D1,morphtarget_pars_vertex:N1,morphtarget_vertex:C1,normal_fragment_begin:U1,normal_fragment_maps:B1,normal_pars_fragment:H1,normal_pars_vertex:G1,normal_vertex:q1,normalmap_pars_fragment:O1,clearcoat_normal_fragment_begin:X1,clearcoat_normal_fragment_maps:V1,clearcoat_pars_fragment:Y1,iridescence_pars_fragment:$1,opaque_fragment:Q1,packing:z1,premultiplied_alpha_fragment:J1,project_vertex:j1,dithering_fragment:W1,dithering_pars_fragment:K1,roughnessmap_fragment:Z1,roughnessmap_pars_fragment:ey,shadowmap_pars_fragment:ty,shadowmap_pars_vertex:ny,shadowmap_vertex:iy,shadowmask_pars_fragment:sy,skinbase_vertex:ay,skinning_pars_vertex:ry,skinning_vertex:oy,skinnormal_vertex:ly,specularmap_fragment:cy,specularmap_pars_fragment:uy,tonemapping_fragment:hy,tonemapping_pars_fragment:dy,transmission_fragment:fy,transmission_pars_fragment:py,uv_pars_fragment:my,uv_pars_vertex:gy,uv_vertex:by,worldpos_vertex:xy,background_vert:yy,background_frag:My,backgroundCube_vert:vy,backgroundCube_frag:_y,cube_vert:Sy,cube_frag:Ty,depth_vert:Ey,depth_frag:Ay,distance_vert:Ry,distance_frag:Py,equirect_vert:wy,equirect_frag:Ly,linedashed_vert:Iy,linedashed_frag:Fy,meshbasic_vert:ky,meshbasic_frag:Dy,meshlambert_vert:Ny,meshlambert_frag:Cy,meshmatcap_vert:Uy,meshmatcap_frag:By,meshnormal_vert:Hy,meshnormal_frag:Gy,meshphong_vert:qy,meshphong_frag:Oy,meshphysical_vert:Xy,meshphysical_frag:Vy,meshtoon_vert:Yy,meshtoon_frag:$y,points_vert:Qy,points_frag:zy,shadow_vert:Jy,shadow_frag:jy,sprite_vert:Wy,sprite_frag:Ky},qe={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Vi={basic:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Qn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Qn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new fe(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Qn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Qn([qe.points,qe.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Qn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Qn([qe.common,qe.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Qn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Qn([qe.sprite,qe.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Qn([qe.common,qe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Qn([qe.lights,qe.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Vi.physical={uniforms:Qn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var au={r:0,b:0,g:0},Zy=new je,B0=new ut;B0.set(-1,0,0,0,1,0,0,0,1);function eM(i,e,t,n,s,a){let r=new fe(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let _=y.isScene===!0?y.background:null;if(_&&_.isTexture){let M=y.backgroundBlurriness>0;_=e.get(_,M)}return _}function p(y){let _=!1,M=f(y);M===null?g(r,o):M&&M.isColor&&(g(M,1),_=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,_){let M=f(_);M&&M.isCubeTexture?(c===void 0&&(c=new we(new bi(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:da(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(B0),c.material.toneMapped=yt.getTransfer(M.colorSpace)!==Ht,(u!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new we(new ks(2,2),new Kt({name:"BackgroundMaterial",uniforms:da(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=yt.getTransfer(M.colorSpace)!==Ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,_){y.getRGB(au,pd(i)),t.buffers.color.setClear(au.r,au.g,au.b,_,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,_=1){r.set(y),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(r,o)},render:p,addToRenderList:x,dispose:m}}function tM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),a=s,r=!1;function o(G,q,U,E,D){let w=!1,P=h(G,E,U,q);a!==P&&(a=P,c(a.object)),w=f(G,E,U,D),w&&p(G,E,U,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(w||r)&&(r=!1,M(G,q,U,E),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(G){return i.bindVertexArray(G)}function u(G){return i.deleteVertexArray(G)}function h(G,q,U,E){let D=E.wireframe===!0,w=n[q.id];w===void 0&&(w={},n[q.id]=w);let P=G.isInstancedMesh===!0?G.id:0,Y=w[P];Y===void 0&&(Y={},w[P]=Y);let O=Y[U.id];O===void 0&&(O={},Y[U.id]=O);let B=O[D];return B===void 0&&(B=d(l()),O[D]=B),B}function d(G){let q=[],U=[],E=[];for(let D=0;D<t;D++)q[D]=0,U[D]=0,E[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:U,attributeDivisors:E,object:G,attributes:{},index:null}}function f(G,q,U,E){let D=a.attributes,w=q.attributes,P=0,Y=U.getAttributes();for(let O in Y)if(Y[O].location>=0){let $=D[O],H=w[O];if(H===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&(H=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&(H=G.instanceColor)),$===void 0||$.attribute!==H||H&&$.data!==H.data)return!0;P++}return a.attributesNum!==P||a.index!==E}function p(G,q,U,E){let D={},w=q.attributes,P=0,Y=U.getAttributes();for(let O in Y)if(Y[O].location>=0){let $=w[O];$===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&($=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&($=G.instanceColor));let H={};H.attribute=$,$&&$.data&&(H.data=$.data),D[O]=H,P++}a.attributes=D,a.attributesNum=P,a.index=E}function x(){let G=a.newAttributes;for(let q=0,U=G.length;q<U;q++)G[q]=0}function g(G){m(G,0)}function m(G,q){let U=a.newAttributes,E=a.enabledAttributes,D=a.attributeDivisors;U[G]=1,E[G]===0&&(i.enableVertexAttribArray(G),E[G]=1),D[G]!==q&&(i.vertexAttribDivisor(G,q),D[G]=q)}function y(){let G=a.newAttributes,q=a.enabledAttributes;for(let U=0,E=q.length;U<E;U++)q[U]!==G[U]&&(i.disableVertexAttribArray(U),q[U]=0)}function _(G,q,U,E,D,w,P){P===!0?i.vertexAttribIPointer(G,q,U,D,w):i.vertexAttribPointer(G,q,U,E,D,w)}function M(G,q,U,E){x();let D=E.attributes,w=U.getAttributes(),P=q.defaultAttributeValues;for(let Y in w){let O=w[Y];if(O.location>=0){let B=D[Y];if(B===void 0&&(Y==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),Y==="instanceColor"&&G.instanceColor&&(B=G.instanceColor)),B!==void 0){let $=B.normalized,H=B.itemSize,j=e.get(B);if(j===void 0)continue;let X=j.buffer,W=j.type,ie=j.bytesPerElement,me=W===i.INT||W===i.UNSIGNED_INT||B.gpuType===Mc;if(B.isInterleavedBufferAttribute){let he=B.data,Re=he.isInterleavedBuffer===!0?he.stride:he.itemSize,De=B.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Ce=0;Ce<O.locationSize;Ce++)m(O.location+Ce,he.meshPerAttribute);G.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ce=0;Ce<O.locationSize;Ce++)g(O.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,X);for(let Ce=0;Ce<O.locationSize;Ce++)_(O.location+Ce,H/O.locationSize,W,$,Re*ie,(De+H/O.locationSize*Ce)*ie,me)}else{if(B.isInstancedBufferAttribute){for(let he=0;he<O.locationSize;he++)m(O.location+he,B.meshPerAttribute);G.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let he=0;he<O.locationSize;he++)g(O.location+he);i.bindBuffer(i.ARRAY_BUFFER,X);for(let he=0;he<O.locationSize;he++)_(O.location+he,H/O.locationSize,W,$,H*ie,H/O.locationSize*he*ie,me)}}else if(P!==void 0){let $=P[Y];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(O.location,$);break;case 3:i.vertexAttrib3fv(O.location,$);break;case 4:i.vertexAttrib4fv(O.location,$);break;default:i.vertexAttrib1fv(O.location,$)}}}}y()}function S(){F();for(let G in n){let q=n[G];for(let U in q){let E=q[U];for(let D in E){let w=E[D];for(let P in w)u(w[P].object),delete w[P];delete E[D]}}delete n[G]}}function T(G){if(n[G.id]===void 0)return;let q=n[G.id];for(let U in q){let E=q[U];for(let D in E){let w=E[D];for(let P in w)u(w[P].object),delete w[P];delete E[D]}}delete n[G.id]}function b(G){for(let q in n){let U=n[q];for(let E in U){let D=U[E];if(D[G.id]===void 0)continue;let w=D[G.id];for(let P in w)u(w[P].object),delete w[P];delete D[G.id]}}}function v(G){for(let q in n){let U=n[q],E=G.isInstancedMesh===!0?G.id:0,D=U[E];if(D!==void 0){for(let w in D){let P=D[w];for(let Y in P)u(P[Y].object),delete P[Y];delete D[w]}delete U[E],Object.keys(U).length===0&&delete n[q]}}}function F(){L(),r=!0,a!==s&&(a=s,c(a.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function nM(i,e,t){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function iM(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==oi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let v=b===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==$n&&b!==di&&!v&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&Je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:M,maxSamples:S,samples:T}}function sM(i){let e=this,t=null,n=0,s=!1,a=!1,r=new Ri,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||a&&!g)a?u(null):c();else{let y=a?0:n,_=y*4,M=m.clippingState||null;l.value=M,M=u(p,d,_,f);for(let S=0;S!==_;++S)M[S]=t[S];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,M=f;_!==x;++_,M+=4)r.copy(h[_]).applyMatrix4(y,o),r.normal.toArray(g,M),g[M+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Xo=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bi(5,5,5),a=new Kt({name:"CubemapFromEquirect",uniforms:da(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Ln});a.uniforms.tEquirect.value=t;let r=new we(s,a),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=yn),new nr(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}},g0=256,aM=3,rM=20,H0=256,G0=16,oM=3,lM=new k,cM=new fe,Mi=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new nr(1,10,null),this._boxMesh=new we(new bi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){let{size:r=256,position:o=lM}=a,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(cM));let g=new nr(n,s,u);return g.position.copy(o),g.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(g0,ud(e))}_fromTexture(e,t){e.mapping===ca||e.mapping===ar?this._setSize(e.image.length===0?g0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=b0(e,!1,!1),n=Math.log2(e)-aM;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=b0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,a=this._cubeCamera;s.material=n,a.renderTarget=e,a.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),a.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ca||e.mapping===ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=y0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=x0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=uM(),this._integrationMaterial=hM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/G0);for(let r=0;r<=n;r++){let o=i.lodToRoughness(r,n);if(r>n-oM)a.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(H0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=dM());let n=this._blurMaterial,s=n.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(a,0,n)}};function b0(i,e,t){return new Xo(i,{minFilter:ri,generateMipmaps:e,type:fn,colorSpace:Mn,depthBuffer:t})}function Vo(i,e,t){return new Kt({name:i,uniforms:e,vertexShader:St.cube_vert,fragmentShader:t,side:Sn,blending:Ln,depthTest:!1,depthWrite:!1})}function uM(){return Vo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${H0}u

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
	`)}function hM(){return Vo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:G0}},`

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
	`)}function dM(){return Vo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${rM}
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
	`)}function x0(){return Vo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function y0(){return Vo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?r(d):a(d)}function a(d){if(d&&d.isTexture){let f=d.mapping;if(f===bc||f===xc)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Xo(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===bc||f===xc,x=f===ca||f===ar;if(p||x){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Mi(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Mi(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===bc?d.mapping=ca:f===xc&&(d.mapping=ar),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function pM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ks("WebGLRenderer: "+n+" extension not supported."),s}}}function mM(i,e,t,n){let s={},a=new WeakMap,r=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],r.unregister(p);let x=a.get(p);x&&(e.remove(x),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),r.register(x,x.id,x),t.memory.geometries++),x}function u(p){let x=p.attributes;for(let g in x)e.update(x[g],i.ARRAY_BUFFER)}function h(p){let x=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let y=x!==null?x.array.length:g.array.length/3-1,_=g.count>=65535?Jr:zr,M=new _(Math.ceil(y/3)*6,1),S=M.array;if(x!==null){let b=x.array;m=x.version;for(let v=0,F=0;v<y;v+=3){let L=b[v+0],G=b[v+1],q=b[v+2];S[F++]=L,S[F++]=G,S[F++]=G,S[F++]=q,S[F++]=q,S[F++]=L}}else{m=g.version;for(let b=0,v=0;b<y;b+=3){let F=b+0,L=b+1,G=b+2;S[v++]=F,S[v++]=L,S[v++]=L,S[v++]=G,S[v++]=G,S[v++]=F}}M.version=m;let T=a.get(p);T&&e.remove(T),a.set(p,M)}function d(p){let x=a.get(p);if(x){let g=p.index;g!==null&&x.version<g.version&&h(p)}else h(p);return a.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function gM(i,e,t){let n;function s(h){n=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,d){i.drawElements(n,d,a,h*r),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,a,h*r,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function bM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:st("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xM(i,e,t){let n=new WeakMap,s=new Nt;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let F=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),x===!0&&(_=3);let M=o.attributes.position.count*_,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*S*4*h),b=new $r(T,M,S,h);b.type=di,b.needsUpdate=!0;let v=_*4;for(let L=0;L<h;L++){let G=g[L],q=m[L],U=y[L],E=M*S*4*L;for(let D=0;D<G.count;D++){let w=D*v;f===!0&&(s.fromBufferAttribute(G,D),T[E+w+0]=s.x,T[E+w+1]=s.y,T[E+w+2]=s.z,T[E+w+3]=0),p===!0&&(s.fromBufferAttribute(q,D),T[E+w+4]=s.x,T[E+w+5]=s.y,T[E+w+6]=s.z,T[E+w+7]=0),x===!0&&(s.fromBufferAttribute(U,D),T[E+w+8]=s.x,T[E+w+9]=s.y,T[E+w+10]=s.z,T[E+w+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:b,size:new pe(M,S)},n.set(o,d),o.addEventListener("dispose",F)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function yM(i,e,t,n,s){let a=new WeakMap;function r(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(a.get(d)!==u&&(e.update(d),a.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return d}function o(){a=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var MM={[Po]:"LINEAR_TONE_MAPPING",[wo]:"REINHARD_TONE_MAPPING",[Lo]:"CINEON_TONE_MAPPING",[la]:"ACES_FILMIC_TONE_MAPPING",[Fo]:"AGX_TONE_MAPPING",[ko]:"NEUTRAL_TONE_MAPPING",[Io]:"CUSTOM_TONE_MAPPING"};function vM(i,e,t,n,s,a){let r=new rn(e,t,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new dt;u.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new at([0,2,0,0,2,0],2));let h=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new we(u,h),f=new hs(-1,1,1,-1,0,1),p=null,x=null,g=!1,m,y=null,_=[],M=!1;this.setSize=function(S,T){r.setSize(S,T),o!==null&&o.setSize(S,T),l!==null&&l.setSize(S,T);for(let b=0;b<_.length;b++){let v=_[b];v.setSize&&v.setSize(S,T)}},this.setEffects=function(S){_=S,M=_.length>0&&_[0].isRenderPass===!0;let T=r.width,b=r.height;_.length>0&&o===null&&(o=new rn(T,b,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(T,b,{type:fn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&_.some(F=>F.needsDepthTexture===!0);v!==(r.depthTexture!==null)&&(v===!0&&c===null&&(c=new wi(T,b),a===!0&&(c.format=Fi,c.type=ds)),r.dispose(),r.depthTexture=v?c:null,r.resolveDepthBuffer=v,r.storeMultisampledDepthBuffer=v);for(let F=0;F<_.length;F++){let L=_[F];L.setSize&&L.setSize(T,b),v&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(S,T){if(g||S.toneMapping===Oi&&_.length===0)return!1;if(y=T,T!==null){let b=T.width,v=T.height;(r.width!==b||r.height!==v)&&this.setSize(b,v)}return M===!1&&S.setRenderTarget(r),m=S.toneMapping,S.toneMapping=Oi,!0},this.hasRenderPass=function(){return M},this.end=function(S,T){S.toneMapping=m,g=!0;let b=r,v=o;for(let F=0;F<_.length;F++){let L=_[F];L.enabled!==!1&&(L.render(S,v,b,T),L.needsSwap!==!1&&(b=v,v=v===o?l:o))}if(p!==S.outputColorSpace||x!==S.toneMapping){p=S.outputColorSpace,x=S.toneMapping,h.defines={},yt.getTransfer(p)===Ht&&(h.defines.SRGB_TRANSFER="");let F=MM[x];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(y),S.render(d,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var q0=new vn,O0=new wi(1,1),X0=new eo(1),V0=new $r,Y0=new jl,$0=new Zr,M0=[],v0=[],_0=new Float32Array(16),S0=new Float32Array(9),T0=new Float32Array(4);function ur(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,a=M0[s];if(a===void 0&&(a=new Float32Array(s),M0[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function Tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function En(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lu(i,e){let t=v0[e];t===void 0&&(t=new Int32Array(e),v0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _M(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function SM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2fv(this.addr,e),En(t,e)}}function TM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;i.uniform3fv(this.addr,e),En(t,e)}}function EM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4fv(this.addr,e),En(t,e)}}function AM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(Tn(t,n))return;T0.set(n),i.uniformMatrix2fv(this.addr,!1,T0),En(t,n)}}function RM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(Tn(t,n))return;S0.set(n),i.uniformMatrix3fv(this.addr,!1,S0),En(t,n)}}function PM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(Tn(t,n))return;_0.set(n),i.uniformMatrix4fv(this.addr,!1,_0),En(t,n)}}function wM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function LM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2iv(this.addr,e),En(t,e)}}function IM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3iv(this.addr,e),En(t,e)}}function FM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4iv(this.addr,e),En(t,e)}}function kM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function DM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2uiv(this.addr,e),En(t,e)}}function NM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3uiv(this.addr,e),En(t,e)}}function CM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4uiv(this.addr,e),En(t,e)}}function cu(i){return i.version===0&&(i.compareFunction=rd,i.needsUpdate=!0),i}function UM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?a=cu(O0):a=q0,t.setTexture2D(e||a,s)}function BM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Y0,s)}function HM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_CUBE_SHADOW?a=cu(X0):a=$0,t.setTextureCube(e||a,s)}function GM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||V0,s)}function qM(i){switch(i){case 5126:return _M;case 35664:return SM;case 35665:return TM;case 35666:return EM;case 35674:return AM;case 35675:return RM;case 35676:return PM;case 5124:case 35670:return wM;case 35667:case 35671:return LM;case 35668:case 35672:return IM;case 35669:case 35673:return FM;case 5125:return kM;case 36294:return DM;case 36295:return NM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}function OM(i,e){i.uniform1fv(this.addr,e)}function XM(i,e){let t=ur(e,this.size,2);i.uniform2fv(this.addr,t)}function VM(i,e){let t=ur(e,this.size,3);i.uniform3fv(this.addr,t)}function YM(i,e){let t=ur(e,this.size,4);i.uniform4fv(this.addr,t)}function $M(i,e){let t=ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function QM(i,e){let t=ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zM(i,e){let t=ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function JM(i,e){i.uniform1iv(this.addr,e)}function jM(i,e){i.uniform2iv(this.addr,e)}function WM(i,e){i.uniform3iv(this.addr,e)}function KM(i,e){i.uniform4iv(this.addr,e)}function ZM(i,e){i.uniform1uiv(this.addr,e)}function ev(i,e){i.uniform2uiv(this.addr,e)}function tv(i,e){i.uniform3uiv(this.addr,e)}function nv(i,e){i.uniform4uiv(this.addr,e)}function iv(i,e,t){let n=this.cache,s=e.length,a=lu(t,s);Tn(n,a)||(i.uniform1iv(this.addr,a),En(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=cu(O0):r=q0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function sv(i,e,t){let n=this.cache,s=e.length,a=lu(t,s);Tn(n,a)||(i.uniform1iv(this.addr,a),En(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Y0,a[r])}function av(i,e,t){let n=this.cache,s=e.length,a=lu(t,s);Tn(n,a)||(i.uniform1iv(this.addr,a),En(n,a));let r;this.type===i.SAMPLER_CUBE_SHADOW?r=cu(X0):r=$0;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||r,a[o])}function rv(i,e,t){let n=this.cache,s=e.length,a=lu(t,s);Tn(n,a)||(i.uniform1iv(this.addr,a),En(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||V0,a[r])}function ov(i){switch(i){case 5126:return OM;case 35664:return XM;case 35665:return VM;case 35666:return YM;case 35674:return $M;case 35675:return QM;case 35676:return zM;case 5124:case 35670:return JM;case 35667:case 35671:return jM;case 35668:case 35672:return WM;case 35669:case 35673:return KM;case 5125:return ZM;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return rv}}var Ed=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qM(t.type)}},Ad=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ov(t.type)}},Rd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(e,t[o.id],n)}}},Sd=/(\w+)(\])?(\[|\.)?/g;function E0(i,e){i.seq.push(e),i.map[e.id]=e}function lv(i,e,t){let n=i.name,s=n.length;for(Sd.lastIndex=0;;){let a=Sd.exec(n),r=Sd.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){E0(t,c===void 0?new Ed(o,i,e):new Ad(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Rd(o),E0(t,h)),t=h}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);lv(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){let a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){let o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,a=e.length;s!==a;++s){let r=e[s];r.id in t&&n.push(r)}return n}};function A0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var cv=37297,uv=0;function hv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}var R0=new ut;function dv(i){yt._getMatrix(R0,yt.workingColorSpace,i);let e=`mat3( ${R0.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case Vr:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function P0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+hv(i.getShaderSource(e),o)}else return a}function fv(i,e){let t=dv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var pv={[Po]:"Linear",[wo]:"Reinhard",[Lo]:"Cineon",[la]:"ACESFilmic",[Fo]:"AgX",[ko]:"Neutral",[Io]:"Custom"};function mv(i,e){let t=pv[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ru=new k;function gv(){yt.getLuminanceCoefficients(ru);let i=ru.x.toFixed(4),e=ru.y.toFixed(4),t=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function xv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let a=i.getActiveAttrib(e,s),r=a.name,o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Oo(i){return i!==""}function w0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function L0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(i){return i.replace(Mv,vv)}function vv(i,e){let t=St[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Pd(t)}var _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I0(i){return i.replace(_v,Sv)}function Sv(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function F0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Tv={[ra]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function Ev(i){return Tv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Av={[ar]:"ENVMAP_MODE_REFRACTION"};function Rv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Av[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pv={[Ro]:"ENVMAP_BLENDING_MULTIPLY",[Qp]:"ENVMAP_BLENDING_MIX",[zp]:"ENVMAP_BLENDING_ADD"};function wv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Pv[i.combine]||"ENVMAP_BLENDING_NONE"}function Lv(i,e,t,n){let s=i.getContext(),a=t.defines,r=t.vertexShader,o=t.fragmentShader,l=Ev(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Rv(t),h=wv(t),d=bv(t),f=xv(a),p=s.createProgram(),x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Oo).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(x=[F0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[F0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?St.tonemapping_pars_fragment:"",t.toneMapping!==Oi?mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,fv("linearToOutputTexel",t.outputColorSpace),gv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),r=Pd(r),r=w0(r,t),r=L0(r,t),o=Pd(o),o=w0(o,t),o=L0(o,t),r=I0(r),o=I0(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+x+r,_=m+g+o,M=A0(s,s.VERTEX_SHADER,y),S=A0(s,s.FRAGMENT_SHADER,_);s.attachShader(p,M),s.attachShader(p,S),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(L){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(p)||"",q=s.getShaderInfoLog(M)||"",U=s.getShaderInfoLog(S)||"",E=G.trim(),D=q.trim(),w=U.trim(),P=!0,Y=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(P=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,S);else{let O=P0(s,M,"vertex"),B=P0(s,S,"fragment");st("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+E+`
`+O+`
`+B)}else E!==""?Je("WebGLProgram: Program Info Log:",E):(D===""||w==="")&&(Y=!1);Y&&(L.diagnostics={runnable:P,programLog:E,vertexShader:{log:D,prefix:x},fragmentShader:{log:w,prefix:g}})}s.deleteShader(M),s.deleteShader(S),b=new cr(s,p),v=yv(s,p)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(p,cv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=S,this}var Iv=0,wd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ld(e),t.set(e,n)),n}},Ld=class{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}};function Fv(i){return i===Cs||i===Bo||i===Ho}function kv(i,e,t,n,s,a){let r=new $a,o=new wd,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,v,F,L,G,q){let U=L.fog,E=G.geometry,D=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,w=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,P=e.get(b.envMap||D,w),Y=d[b.type],O=n.precision;b.precision!==null&&(O=n.getMaxPrecision(b.precision),O!==b.precision&&Je("WebGLProgram.getParameters:",b.precision,"not supported, using",O,"instead."));let B=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,$=B!==void 0?B.length:0,H=0;E.morphAttributes.position!==void 0&&(H=1),E.morphAttributes.normal!==void 0&&(H=2),E.morphAttributes.color!==void 0&&(H=3);let j,X,W,ie;if(Y){let Ne=Vi[Y];j=Ne.vertexShader,X=Ne.fragmentShader}else{j=b.vertexShader,X=b.fragmentShader;let Ne=o.getVertexShaderStage(b),Dt=o.getFragmentShaderStage(b);o.update(b,Ne,Dt),W=Ne.id,ie=Dt.id}let me=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Re=G.isInstancedMesh===!0,De=G.isBatchedMesh===!0,Ce=!!b.map,Ge=!!b.matcap,be=!!P,te=be&&P.isPMREMTexture===!0,V=!!b.aoMap,ae=!!b.lightMap,Ae=!!b.bumpMap&&b.wireframe===!1,Me=!!b.normalMap,tt=!!b.displacementMap,Fe=!!b.emissiveMap,ft=!!b.metalnessMap,bt=!!b.roughnessMap,Mt=b.anisotropy>0,z=b.clearcoat>0,Ut=b.diffuseRoughness>0,ht=b.dispersion>0,Ft=b.retroreflectivity>0,Te=b.iridescence>0,Ue=b.sheen>0,Xe=b.transmission>0,Ke=Mt&&!!b.anisotropyMap,N=z&&!!b.clearcoatMap,A=z&&!!b.clearcoatNormalMap,K=z&&!!b.clearcoatRoughnessMap,ge=Ut&&!!b.diffuseRoughnessMap,de=Te&&!!b.iridescenceMap,ve=Te&&!!b.iridescenceThicknessMap,_e=Ue&&!!b.sheenColorMap,re=Ue&&!!b.sheenRoughnessMap,le=!!b.specularMap,xe=!!b.specularColorMap,Q=!!b.specularIntensityMap,ce=Xe&&!!b.transmissionMap,oe=Xe&&!!b.thicknessMap,Ie=!!b.gradientMap,Se=!!b.alphaMap,Pe=b.alphaTest>0,ze=!!b.alphaHash,pt=!!b.extensions,ye=Oi;b.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ye=i.toneMapping);let We=te?P.isCompressedCubeTexture?P.image[0].mipmaps:P.mipmaps:null,mt={shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:j,fragmentShader:X,defines:b.defines,customVertexShaderID:W,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:O,batching:De,batchingColor:De&&G._colorsTexture!==null,instancing:Re,instancingColor:Re&&G.instanceColor!==null,instancingMorph:Re&&G.morphTexture!==null,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ce,matcap:Ge,envMap:be,envMapMode:be&&P.mapping,envMapPMREM:te,envMapMaxLod:te?We.length-1:null,envMapSize:te?We[0].width:null,aoMap:V,lightMap:ae,bumpMap:Ae,normalMap:Me,displacementMap:tt,emissiveMap:Fe,normalMapObjectSpace:Me&&b.normalMapType===Kp,normalMapTangentSpace:Me&&b.normalMapType===ha,packedNormalMap:Me&&b.normalMapType===ha&&Fv(b.normalMap.format),metalnessMap:ft,roughnessMap:bt,anisotropy:Mt,anisotropyMap:Ke,clearcoat:z,clearcoatMap:N,clearcoatNormalMap:A,clearcoatRoughnessMap:K,diffuseRoughness:Ut,diffuseRoughnessMap:ge,dispersion:ht,retroreflection:Ft,iridescence:Te,iridescenceMap:de,iridescenceThicknessMap:ve,sheen:Ue,sheenColorMap:_e,sheenRoughnessMap:re,specularMap:le,specularColorMap:xe,specularIntensityMap:Q,transmission:Xe,transmissionMap:ce,thicknessMap:oe,gradientMap:Ie,opaque:b.transparent===!1&&b.blending===sr&&b.alphaToCoverage===!1,alphaMap:Se,alphaTest:Pe,alphaHash:ze,combine:b.combine,mapUv:Ce&&f(b.map.channel),aoMapUv:V&&f(b.aoMap.channel),lightMapUv:ae&&f(b.lightMap.channel),bumpMapUv:Ae&&f(b.bumpMap.channel),normalMapUv:Me&&f(b.normalMap.channel),displacementMapUv:tt&&f(b.displacementMap.channel),emissiveMapUv:Fe&&f(b.emissiveMap.channel),metalnessMapUv:ft&&f(b.metalnessMap.channel),roughnessMapUv:bt&&f(b.roughnessMap.channel),anisotropyMapUv:Ke&&f(b.anisotropyMap.channel),clearcoatMapUv:N&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:A&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&f(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&f(b.diffuseRoughnessMap.channel),iridescenceMapUv:de&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:re&&f(b.sheenRoughnessMap.channel),specularMapUv:le&&f(b.specularMap.channel),specularColorMapUv:xe&&f(b.specularColorMap.channel),specularIntensityMapUv:Q&&f(b.specularIntensityMap.channel),transmissionMapUv:ce&&f(b.transmissionMap.channel),thicknessMapUv:oe&&f(b.thicknessMap.channel),alphaMapUv:Se&&f(b.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(Me||Mt),vertexNormals:!!E.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!E.attributes.uv&&(Ce||Se),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||E.attributes.normal===void 0&&Me===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:H,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:q.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:Ce&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===Ht,decodeVideoTextureEmissive:Fe&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===Ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$t,flipSided:b.side===Sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:pt&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&b.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function x(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let F in b.defines)v.push(F),v.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(g(v,b),m(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function g(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapPMREM),b.push(v.envMapMaxLod),b.push(v.envMapSize),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.diffuseRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.numSunLights),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numSunLightShadows),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.numLightProbeGrids),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function m(b,v){r.disableAll(),v.instancing&&r.enable(0),v.instancingColor&&r.enable(1),v.instancingMorph&&r.enable(2),v.matcap&&r.enable(3),v.envMap&&r.enable(4),v.normalMapObjectSpace&&r.enable(5),v.normalMapTangentSpace&&r.enable(6),v.clearcoat&&r.enable(7),v.iridescence&&r.enable(8),v.alphaTest&&r.enable(9),v.vertexColors&&r.enable(10),v.vertexAlphas&&r.enable(11),v.vertexUv1s&&r.enable(12),v.vertexUv2s&&r.enable(13),v.vertexUv3s&&r.enable(14),v.vertexTangents&&r.enable(15),v.anisotropy&&r.enable(16),v.alphaHash&&r.enable(17),v.batching&&r.enable(18),v.dispersion&&r.enable(19),v.retroreflection&&r.enable(24),v.diffuseRoughness&&r.enable(25),v.batchingColor&&r.enable(20),v.gradientMap&&r.enable(21),v.packedNormalMap&&r.enable(22),v.vertexNormals&&r.enable(23),b.push(r.mask),r.disableAll(),v.fog&&r.enable(0),v.useFog&&r.enable(1),v.flatShading&&r.enable(2),v.logarithmicDepthBuffer&&r.enable(3),v.reversedDepthBuffer&&r.enable(4),v.skinning&&r.enable(5),v.morphTargets&&r.enable(6),v.morphNormals&&r.enable(7),v.morphColors&&r.enable(8),v.premultipliedAlpha&&r.enable(9),v.shadowMapEnabled&&r.enable(10),v.doubleSided&&r.enable(11),v.flipSided&&r.enable(12),v.useDepthPacking&&r.enable(13),v.dithering&&r.enable(14),v.transmission&&r.enable(15),v.sheen&&r.enable(16),v.opaque&&r.enable(17),v.pointsUvs&&r.enable(18),v.decodeVideoTexture&&r.enable(19),v.decodeVideoTextureEmissive&&r.enable(20),v.alphaToCoverage&&r.enable(21),v.numLightProbeGrids>0&&r.enable(22),v.hasPositionAttribute&&r.enable(23),b.push(r.mask)}function y(b){let v=d[b.type],F;if(v){let L=Vi[v];F=ei.clone(L.uniforms)}else F=b.uniforms;return F}function _(b,v){let F=u.get(v);return F!==void 0?++F.usedTimes:(F=new Lv(i,v,b,s),c.push(F),u.set(v,F)),F}function M(b){if(--b.usedTimes===0){let v=c.indexOf(b);c[v]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function S(b){o.remove(b)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:_,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:T}}function Dv(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Nv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function k0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function D0(){let i=[],e=0,t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,g,m){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:r(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=r(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=g,y.group=m),e++,y}function l(d,f,p,x,g,m,y){y.reversedDepth===!0&&(g=-g);let _=o(d,f,p,x,g,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function c(d,f,p,x,g,m){let y=o(d,f,p,x,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||Nv),n.length>1&&n.sort(f||k0),s.length>1&&s.sort(f||k0)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:h,sort:u}}function Cv(){let i=new WeakMap;function e(n,s){let a=i.get(n),r;return a===void 0?(r=new D0,i.set(n,[r])):s>=a.length?(r=new D0,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function Uv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new fe};break;case"SpotLight":t={position:new k,direction:new k,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Bv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Hv=0;function Gv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qv(i){let e=new Uv,t=Bv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,a=new je,r=new je;function o(c){let u=0,h=0,d=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,y=0,_=0,M=0,S=0,T=0,b=0,v=0,F=0,L=0;c.sort(Gv);for(let q=0,U=c.length;q<U;q++){let E=c[q],D=E.color,w=E.intensity,P=E.distance,Y=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Cs?Y=E.shadow.map.texture:Y=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=D.r*w,h+=D.g*w,d+=D.b*w;else if(E.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(E.sh.coefficients[O],w);L++}else if(E.isSunLight){let O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let B=E.shadow,$=t.get(E);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=Y;let H=B.getViewportCount();for(let j=0;j<H;j++)n.sunShadowMatrix[x+j]=B.getMatrix(j),n.sunShadowCascade[x+j]=B._cascadeData[j];x+=H,p++}n.sun[f]=O,f++}else if(E.isDirectionalLight){let O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let B=E.shadow,$=t.get(E);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=E.shadow.matrix,S++}n.directional[g]=O,g++}else if(E.isSpotLight){let O=e.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(D).multiplyScalar(w),O.distance=P,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[y]=O;let B=E.shadow;if(E.map&&(n.spotLightMap[v]=E.map,v++,B.updateMatrices(E),E.castShadow&&F++),n.spotLightMatrix[y]=B.matrix,E.castShadow){let $=t.get(E);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,n.spotShadow[y]=$,n.spotShadowMap[y]=Y,b++}y++}else if(E.isRectAreaLight){let O=e.get(E);O.color.copy(D).multiplyScalar(w),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),n.rectArea[_]=O,_++}else if(E.isPointLight){let O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){let B=E.shadow,$=t.get(E);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=E.shadow.matrix,T++}n.point[m]=O,m++}else if(E.isHemisphereLight){let O=e.get(E);O.skyColor.copy(E.color).multiplyScalar(w),O.groundColor.copy(E.groundColor).multiplyScalar(w),n.hemi[M]=O,M++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qe.LTC_FLOAT_1,n.rectAreaLTC2=qe.LTC_FLOAT_2):(n.rectAreaLTC1=qe.LTC_HALF_1,n.rectAreaLTC2=qe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let G=n.hash;(G.sunLength!==f||G.directionalLength!==g||G.pointLength!==m||G.spotLength!==y||G.rectAreaLength!==_||G.hemiLength!==M||G.numSunShadows!==p||G.numDirectionalShadows!==S||G.numPointShadows!==T||G.numSpotShadows!==b||G.numSpotMaps!==v||G.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=_,n.point.length=m,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+v-F,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=L,G.sunLength=f,G.directionalLength=g,G.pointLength=m,G.spotLength=y,G.rectAreaLength=_,G.hemiLength=M,G.numSunShadows=p,G.numDirectionalShadows=S,G.numPointShadows=T,G.numSpotShadows=b,G.numSpotMaps=v,G.numLightProbes=L,n.version=Hv++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let y=0,_=c.length;y<_;y++){let M=c[y];if(M.isSunLight){let S=n.sun[h];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),h++}else if(M.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(M.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),r.identity(),a.copy(M.matrixWorld),a.premultiply(m),r.extractRotation(a),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),x++}else if(M.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function N0(i){let e=new qv(i),t=[],n=[],s=[];function a(h){u.camera=h,t.length=0,n.length=0,s.length=0}function r(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){n.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Ov(i){let e=new WeakMap;function t(s,a=0){let r=e.get(s),o;return r===void 0?(o=new N0(i),e.set(s,[o])):a>=r.length?(o=new N0(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vv=`uniform sampler2D shadow_pass;
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
}`,Yv=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],$v=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],C0=new je,qo=new k,Td=new k;function Qv(i,e,t){let n=new ws,s=new pe,a=new pe,r=new Nt,o=new Za,l=new rc,c={},u=t.maxTextureSize,h={[qi]:Sn,[Sn]:qi,[$t]:$t},d=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Xv,fragmentShader:Vv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new dt;p.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new we(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ra;let m=this.type;this.render=function(T,b,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Fp&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ra);let F=i.getRenderTarget(),L=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Ln),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let U=m!==this.type;U&&b.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(D=>D.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,D=T.length;E<D;E++){let w=T[E],P=w.shadow;if(P===void 0){Je("WebGLShadowMap:",w,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);let Y=P.getFrameExtents();s.multiply(Y),a.copy(P.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/Y.x),s.x=a.x*Y.x,P.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/Y.y),s.y=a.y*Y.y,P.mapSize.y=a.y));let O=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=O,P.map===null||U===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===ir){if(w.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new rn(s.x,s.y,{format:Cs,type:fn,minFilter:yn,magFilter:yn,generateMipmaps:!1}),P.map.texture.name=w.name+".shadowMap",P.map.depthTexture=new wi(s.x,s.y,di),P.map.depthTexture.name=w.name+".shadowMapDepth",P.map.depthTexture.format=ss,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=an,P.map.depthTexture.magFilter=an}else w.isPointLight?(P.map=new Xo(s.x),P.map.depthTexture=new eo(s.x,Ii)):(P.map=new rn(s.x,s.y),P.map.depthTexture=new wi(s.x,s.y,Ii)),P.map.depthTexture.name=w.name+".shadowMap",P.map.depthTexture.format=ss,this.type===ra?(P.map.depthTexture.compareFunction=O?ad:sd,P.map.depthTexture.minFilter=yn,P.map.depthTexture.magFilter=yn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=an,P.map.depthTexture.magFilter=an);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==s.x||P.map.height!==s.y)&&P.map.setSize(s.x,s.y);let B=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();w.isPointLight!==!0&&P.updateMatrices(w,v);let $=(P.camera.layers.mask&4294967294)!==0?P.camera.layers:v.layers;for(let H=0;H<B;H++){let j=P.getCamera(H);if(w.isPointLight){let X=P.camera,W=P.matrix,ie=w.distance||X.far;ie!==X.far&&(X.far=ie,X.updateProjectionMatrix()),qo.setFromMatrixPosition(w.matrixWorld),X.position.copy(qo),Td.copy(X.position),Td.add(Yv[H]),X.up.copy($v[H]),X.lookAt(Td),X.updateMatrixWorld(),W.makeTranslation(-qo.x,-qo.y,-qo.z),C0.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),P._frustum.setFromProjectionMatrix(C0,X.coordinateSystem,X.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,H),i.clear();else{H===0&&(i.setRenderTarget(P.map),i.clear());let X=P.getViewport(H);r.set(a.x*X.x,a.y*X.y,a.x*X.z,a.y*X.w),q.viewport(r)}n=P.getFrustum(H),M(b,v,j,w,$,this.type)}P.isPointLightShadow!==!0&&this.type===ir&&y(P,v),P.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(F,L,G)};function y(T,b){let v=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new rn(s.x,s.y,{format:Cs,type:fn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,v,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,v,f,x,null)}function _(T,b,v,F){let L=null,G=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)L=G;else if(L=v.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let q=L.uuid,U=b.uuid,E=c[q];E===void 0&&(E={},c[q]=E);let D=E[U];D===void 0&&(D=L.clone(),E[U]=D,b.addEventListener("dispose",S)),L=D}if(L.visible=b.visible,L.wireframe=b.wireframe,F===ir?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:h[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let q=i.properties.get(L);q.light=v}return L}function M(T,b,v,F,L,G){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&G===ir)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let E=e.update(T),D=T.material;if(Array.isArray(D)){let w=E.groups;for(let P=0,Y=w.length;P<Y;P++){let O=w[P],B=D[O.materialIndex];if(B&&B.visible){let $=_(T,B,F,G);T.onBeforeShadow(i,T,b,v,E,$,O),i.renderBufferDirect(v,null,E,$,T,O),T.onAfterShadow(i,T,b,v,E,$,O)}}}else if(D.visible){let w=_(T,D,F,G);T.onBeforeShadow(i,T,b,v,E,w,null),i.renderBufferDirect(v,null,E,w,T,null),T.onAfterShadow(i,T,b,v,E,w,null)}}let U=T.children;for(let E=0,D=U.length;E<D;E++)M(U[E],b,v,F,L,G)}function S(T){T.target.removeEventListener("dispose",S);for(let v in c){let F=c[v],L=T.target.uuid;L in F&&(F[L].dispose(),delete F[L])}}}function zv(i,e){function t(){let Q=!1,ce=new Nt,oe=null,Ie=new Nt(0,0,0,0);return{setMask:function(Se){oe!==Se&&!Q&&(i.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){Q=Se},setClear:function(Se,Pe,ze,pt,ye){ye===!0&&(Se*=pt,Pe*=pt,ze*=pt),ce.set(Se,Pe,ze,pt),Ie.equals(ce)===!1&&(i.clearColor(Se,Pe,ze,pt),Ie.copy(ce))},reset:function(){Q=!1,oe=null,Ie.set(-1,0,0,0)}}}function n(){let Q=!1,ce=!1,oe=null,Ie=null,Se=null;return{setReversed:function(Pe){if(ce!==Pe){let ze=e.get("EXT_clip_control");Pe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ce=Pe;let pt=Se;Se=null,this.setClear(pt)}},getReversed:function(){return ce},setTest:function(Pe){Pe?he(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Pe){oe!==Pe&&!Q&&(i.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(ce&&(Pe=l0[Pe]),Ie!==Pe){switch(Pe){case ql:i.depthFunc(i.NEVER);break;case Ol:i.depthFunc(i.ALWAYS);break;case Xl:i.depthFunc(i.LESS);break;case Ga:i.depthFunc(i.LEQUAL);break;case Vl:i.depthFunc(i.EQUAL);break;case Yl:i.depthFunc(i.GEQUAL);break;case $l:i.depthFunc(i.GREATER);break;case Ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=Pe}},setLocked:function(Pe){Q=Pe},setClear:function(Pe){Se!==Pe&&(Se=Pe,ce&&(Pe=1-Pe),i.clearDepth(Pe))},reset:function(){Q=!1,oe=null,Ie=null,Se=null,ce=!1}}}function s(){let Q=!1,ce=null,oe=null,Ie=null,Se=null,Pe=null,ze=null,pt=null,ye=null;return{setTest:function(We){Q||(We?he(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(We){ce!==We&&!Q&&(i.stencilMask(We),ce=We)},setFunc:function(We,mt,Ne){(oe!==We||Ie!==mt||Se!==Ne)&&(i.stencilFunc(We,mt,Ne),oe=We,Ie=mt,Se=Ne)},setOp:function(We,mt,Ne){(Pe!==We||ze!==mt||pt!==Ne)&&(i.stencilOp(We,mt,Ne),Pe=We,ze=mt,pt=Ne)},setLocked:function(We){Q=We},setClear:function(We){ye!==We&&(i.clearStencil(We),ye=We)},reset:function(){Q=!1,ce=null,oe=null,Ie=null,Se=null,Pe=null,ze=null,pt=null,ye=null}}}let a=new t,r=new n,o=new s,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,_=null,M=null,S=null,T=null,b=null,v=new fe(0,0,0),F=0,L=!1,G=null,q=null,U=null,E=null,D=null,w=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,Y=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(O)[1]),P=Y>=1):O.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),P=Y>=2);let B=null,$={},H=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),X=new Nt().fromArray(H),W=new Nt().fromArray(j);function ie(Q,ce,oe,Ie){let Se=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(Q,Pe),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<oe;ze++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(ce+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return Pe}let me={};me[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),he(i.DEPTH_TEST),r.setFunc(Ga),Ae(!1),Me(Vh),he(i.CULL_FACE),V(Ln);function he(Q){u[Q]!==!0&&(i.enable(Q),u[Q]=!0)}function Re(Q){u[Q]!==!1&&(i.disable(Q),u[Q]=!1)}function De(Q,ce){return d[Q]!==ce?(i.bindFramebuffer(Q,ce),d[Q]=ce,Q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),Q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ce(Q,ce){let oe=p,Ie=!1;if(Q){oe=f.get(ce),oe===void 0&&(oe=[],f.set(ce,oe));let Se=Q.textures;if(oe.length!==Se.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,ze=Se.length;Pe<ze;Pe++)oe[Pe]=i.COLOR_ATTACHMENT0+Pe;oe.length=Se.length,Ie=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(oe)}function Ge(Q){return x!==Q?(i.useProgram(Q),x=Q,!0):!1}let be={[yi]:i.FUNC_ADD,[kp]:i.FUNC_SUBTRACT,[Dp]:i.FUNC_REVERSE_SUBTRACT};be[Np]=i.MIN,be[Cp]=i.MAX;let te={[oa]:i.ZERO,[Up]:i.ONE,[Bp]:i.SRC_COLOR,[Qh]:i.SRC_ALPHA,[Op]:i.SRC_ALPHA_SATURATE,[Ao]:i.DST_COLOR,[Eo]:i.DST_ALPHA,[Hp]:i.ONE_MINUS_SRC_COLOR,[zh]:i.ONE_MINUS_SRC_ALPHA,[qp]:i.ONE_MINUS_DST_COLOR,[Gp]:i.ONE_MINUS_DST_ALPHA,[Xp]:i.CONSTANT_COLOR,[Vp]:i.ONE_MINUS_CONSTANT_COLOR,[Yp]:i.CONSTANT_ALPHA,[$p]:i.ONE_MINUS_CONSTANT_ALPHA};function V(Q,ce,oe,Ie,Se,Pe,ze,pt,ye,We){if(Q===Ln){g===!0&&(Re(i.BLEND),g=!1);return}if(g===!1&&(he(i.BLEND),g=!0),Q!==gc){if(Q!==m||We!==L){if((y!==yi||S!==yi)&&(i.blendEquation(i.FUNC_ADD),y=yi,S=yi),We)switch(Q){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.ONE,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $h:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",Q);break}else switch(Q){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yh:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $h:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",Q);break}_=null,M=null,T=null,b=null,v.set(0,0,0),F=0,m=Q,L=We}return}Se=Se||ce,Pe=Pe||oe,ze=ze||Ie,(ce!==y||Se!==S)&&(i.blendEquationSeparate(be[ce],be[Se]),y=ce,S=Se),(oe!==_||Ie!==M||Pe!==T||ze!==b)&&(i.blendFuncSeparate(te[oe],te[Ie],te[Pe],te[ze]),_=oe,M=Ie,T=Pe,b=ze),(pt.equals(v)===!1||ye!==F)&&(i.blendColor(pt.r,pt.g,pt.b,ye),v.copy(pt),F=ye),m=Q,L=!1}function ae(Q,ce){Q.side===$t?Re(i.CULL_FACE):he(i.CULL_FACE);let oe=Q.side===Sn;ce&&(oe=!oe),Ae(oe),Q.blending===sr&&Q.transparent===!1?V(Ln):V(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),r.setFunc(Q.depthFunc),r.setTest(Q.depthTest),r.setMask(Q.depthWrite),a.setMask(Q.colorWrite);let Ie=Q.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(Q.stencilWriteMask),o.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),o.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Fe(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(Q){G!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),G=Q)}function Me(Q){Q!==Lp?(he(i.CULL_FACE),Q!==q&&(Q===Vh?i.cullFace(i.BACK):Q===Ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),q=Q}function tt(Q){Q!==U&&(P&&i.lineWidth(Q),U=Q)}function Fe(Q,ce,oe){Q?(he(i.POLYGON_OFFSET_FILL),(E!==ce||D!==oe)&&(E=ce,D=oe,r.getReversed()&&(ce=-ce,oe=-oe),i.polygonOffset(ce,oe))):Re(i.POLYGON_OFFSET_FILL)}function ft(Q){Q?he(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function bt(Q){Q===void 0&&(Q=i.TEXTURE0+w-1),B!==Q&&(i.activeTexture(Q),B=Q)}function Mt(Q,ce,oe){oe===void 0&&(B===null?oe=i.TEXTURE0+w-1:oe=B);let Ie=$[oe];Ie===void 0&&(Ie={type:void 0,texture:void 0},$[oe]=Ie),(Ie.type!==Q||Ie.texture!==ce)&&(B!==oe&&(i.activeTexture(oe),B=oe),i.bindTexture(Q,ce||me[Q]),Ie.type=Q,Ie.texture=ce)}function z(){let Q=$[B];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function Ut(){try{i.compressedTexImage2D(...arguments)}catch(Q){st("WebGLState:",Q)}}function ht(){try{i.compressedTexImage3D(...arguments)}catch(Q){st("WebGLState:",Q)}}function Ft(){try{i.texSubImage2D(...arguments)}catch(Q){st("WebGLState:",Q)}}function Te(){try{i.texSubImage3D(...arguments)}catch(Q){st("WebGLState:",Q)}}function Ue(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){st("WebGLState:",Q)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){st("WebGLState:",Q)}}function Ke(){try{i.texStorage2D(...arguments)}catch(Q){st("WebGLState:",Q)}}function N(){try{i.texStorage3D(...arguments)}catch(Q){st("WebGLState:",Q)}}function A(){try{i.texImage2D(...arguments)}catch(Q){st("WebGLState:",Q)}}function K(){try{i.texImage3D(...arguments)}catch(Q){st("WebGLState:",Q)}}function ge(Q){return h[Q]!==void 0?h[Q]:i.getParameter(Q)}function de(Q,ce){h[Q]!==ce&&(i.pixelStorei(Q,ce),h[Q]=ce)}function ve(Q){X.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),X.copy(Q))}function _e(Q){W.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),W.copy(Q))}function re(Q,ce){let oe=c.get(ce);oe===void 0&&(oe=new WeakMap,c.set(ce,oe));let Ie=oe.get(Q);Ie===void 0&&(Ie=i.getUniformBlockIndex(ce,Q.name),i.uniformBlockBinding(ce,Ie,Ie),oe.set(Q,Ie))}function le(Q,ce,oe){let Se=c.get(ce).get(Q);l[Se]!==oe&&(i.bindBufferBase(i.UNIFORM_BUFFER,Se,oe),l[Se]=oe)}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},B=null,$={},d={},l={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,_=null,M=null,S=null,T=null,b=null,v=new fe(0,0,0),F=0,L=!1,G=null,q=null,U=null,E=null,D=null,X.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:he,disable:Re,bindFramebuffer:De,drawBuffers:Ce,useProgram:Ge,setBlending:V,setMaterial:ae,setFlipSided:Ae,setCullFace:Me,setLineWidth:tt,setPolygonOffset:Fe,setScissorTest:ft,activeTexture:bt,bindTexture:Mt,unbindTexture:z,compressedTexImage2D:Ut,compressedTexImage3D:ht,texImage2D:A,texImage3D:K,pixelStorei:de,getParameter:ge,updateUBOMapping:re,uniformBlockBinding:le,texStorage2D:Ke,texStorage3D:N,texSubImage2D:Ft,texSubImage3D:Te,compressedTexSubImage2D:Ue,compressedTexSubImage3D:Xe,scissor:ve,viewport:_e,reset:xe}}function Jv(i,e,t,n,s,a,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap,h=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(N=>p.delete(N)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,A){return g?new OffscreenCanvas(N,A):Xa("canvas")}function y(N,A,K){let ge=1,de=Ke(N);if((de.width>K||de.height>K)&&(ge=K/Math.max(de.width,de.height)),ge<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ve=Math.floor(ge*de.width),_e=Math.floor(ge*de.height);d===void 0&&(d=m(ve,_e));let re=A?m(ve,_e):d;return re.width=ve,re.height=_e,re.getContext("2d").drawImage(N,0,0,ve,_e),Je("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ve+"x"+_e+")."),re}else return"data"in N&&Je("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),N;return N}function _(N){return N.generateMipmaps}function M(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(N,A,K,ge,de,ve=!1){if(N!==null){if(i[N]!==void 0)return i[N];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let _e;ge&&(_e=e.get("EXT_texture_norm16"),_e||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=A;if(A===i.RED&&(K===i.FLOAT&&(re=i.R32F),K===i.HALF_FLOAT&&(re=i.R16F),K===i.UNSIGNED_BYTE&&(re=i.R8),K===i.UNSIGNED_SHORT&&_e&&(re=_e.R16_EXT),K===i.SHORT&&_e&&(re=_e.R16_SNORM_EXT)),A===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.R8UI),K===i.UNSIGNED_SHORT&&(re=i.R16UI),K===i.UNSIGNED_INT&&(re=i.R32UI),K===i.BYTE&&(re=i.R8I),K===i.SHORT&&(re=i.R16I),K===i.INT&&(re=i.R32I)),A===i.RG&&(K===i.FLOAT&&(re=i.RG32F),K===i.HALF_FLOAT&&(re=i.RG16F),K===i.UNSIGNED_BYTE&&(re=i.RG8),K===i.UNSIGNED_SHORT&&_e&&(re=_e.RG16_EXT),K===i.SHORT&&_e&&(re=_e.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RG8UI),K===i.UNSIGNED_SHORT&&(re=i.RG16UI),K===i.UNSIGNED_INT&&(re=i.RG32UI),K===i.BYTE&&(re=i.RG8I),K===i.SHORT&&(re=i.RG16I),K===i.INT&&(re=i.RG32I)),A===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RGB8UI),K===i.UNSIGNED_SHORT&&(re=i.RGB16UI),K===i.UNSIGNED_INT&&(re=i.RGB32UI),K===i.BYTE&&(re=i.RGB8I),K===i.SHORT&&(re=i.RGB16I),K===i.INT&&(re=i.RGB32I)),A===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),K===i.UNSIGNED_INT&&(re=i.RGBA32UI),K===i.BYTE&&(re=i.RGBA8I),K===i.SHORT&&(re=i.RGBA16I),K===i.INT&&(re=i.RGBA32I)),A===i.RGB&&(K===i.UNSIGNED_SHORT&&_e&&(re=_e.RGB16_EXT),K===i.SHORT&&_e&&(re=_e.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),A===i.RGBA){let le=ve?Vr:yt.getTransfer(de);K===i.FLOAT&&(re=i.RGBA32F),K===i.HALF_FLOAT&&(re=i.RGBA16F),K===i.UNSIGNED_BYTE&&(re=le===Ht?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&_e&&(re=_e.RGBA16_EXT),K===i.SHORT&&_e&&(re=_e.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function b(N,A){let K;return N?A===null||A===Ii||A===ds?K=i.DEPTH24_STENCIL8:A===di?K=i.DEPTH32F_STENCIL8:A===or&&(K=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ii||A===ds?K=i.DEPTH_COMPONENT24:A===di?K=i.DEPTH_COMPONENT32F:A===or&&(K=i.DEPTH_COMPONENT16),K}function v(N,A){return _(N)===!0||N.isFramebufferTexture&&N.minFilter!==an&&N.minFilter!==yn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function F(N){let A=new WeakRef(N);n.get(N).__ref=A,p.add(A),x.register(N,A,A)}function L(N){let A=n.get(N).__ref;A!==void 0&&(p.delete(A),x.unregister(A))}function G(N){U(N.target)}function q(N){E(N.target)}function U(N){N.removeEventListener("dispose",G),L(N),w(N),N.isVideoTexture&&u.delete(N),N.isHTMLTexture&&h.delete(N)}function E(N){N.removeEventListener("dispose",q),L(N),Y(N)}function D(){for(let N of p){let A=N.deref();A!==void 0&&(A.isRenderTarget===!0?E(A):U(A))}p.clear(),h.clear()}function w(N){let A=n.get(N);if(A.__webglInit===void 0)return;let K=N.source,ge=f.get(K);if(ge){let de=ge[A.__cacheKey];de.usedTimes--,de.usedTimes===0&&P(N),Object.keys(ge).length===0&&f.delete(K)}n.remove(N)}function P(N){let A=n.get(N);i.deleteTexture(A.__webglTexture);let K=N.source,ge=f.get(K);delete ge[A.__cacheKey],r.memory.textures--}function Y(N){let A=n.get(N);A.__depthDisposeCallback&&A.__depthDisposeCallback();let K=N.depthTexture;if(K&&K.renderTarget===N&&U(K),N.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(A.__webglFramebuffer[de]))for(let ve=0;ve<A.__webglFramebuffer[de].length;ve++)i.deleteFramebuffer(A.__webglFramebuffer[de][ve]);else i.deleteFramebuffer(A.__webglFramebuffer[de]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[de])}else{if(Array.isArray(A.__webglFramebuffer))for(let de=0;de<A.__webglFramebuffer.length;de++)i.deleteFramebuffer(A.__webglFramebuffer[de]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let de=0;de<A.__webglColorRenderbuffer.length;de++)A.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[de]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let ge=N.textures;for(let de=0,ve=ge.length;de<ve;de++){let _e=n.get(ge[de]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),r.memory.textures--),n.remove(ge[de])}n.remove(N)}let O=0;function B(){O=0}function $(){return O}function H(N){O=N}function j(){let N=O;return N>=s.maxTextures&&Je("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,N}function X(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.mipmapsAutoUpdate),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function W(N,A){let K=n.get(N);if(N.isVideoTexture&&Ue(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&K.__version!==N.version){let ge=N.image;if(ge===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(K,N,A);return}}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+A)}function ie(N,A){let K=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){ae(K,N,A);return}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+A)}function me(N,A){let K=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){ae(K,N,A);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+A)}function he(N,A){let K=n.get(N);if(N.version>0&&K.__version!==N.version){Ae(K,N,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+A)}let Re={[Yt]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},De={[an]:i.NEAREST,[yc]:i.NEAREST_MIPMAP_NEAREST,[ua]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[rr]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},Ce={[e0]:i.NEVER,[rd]:i.ALWAYS,[t0]:i.LESS,[sd]:i.LEQUAL,[n0]:i.EQUAL,[ad]:i.GEQUAL,[i0]:i.GREATER,[s0]:i.NOTEQUAL};function Ge(N,A){if(A.type===di&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===yn||A.magFilter===rr||A.magFilter===ua||A.magFilter===ri||A.minFilter===yn||A.minFilter===rr||A.minFilter===ua||A.minFilter===ri)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Re[A.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Re[A.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Re[A.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,De[A.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,De[A.minFilter]),A.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Ce[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===an||A.minFilter!==ua&&A.minFilter!==ri||A.type===di&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function be(N,A){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",G),F(A));let ge=A.source,de=f.get(ge);de===void 0&&(de={},f.set(ge,de));let ve=X(A);if(ve!==N.__cacheKey){de[ve]===void 0&&(de[ve]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,K=!0),de[ve].usedTimes++;let _e=de[N.__cacheKey];_e!==void 0&&(de[N.__cacheKey].usedTimes--,_e.usedTimes===0&&P(A)),N.__cacheKey=ve,N.__webglTexture=de[ve].texture}return K}function te(N,A,K){return Math.floor(Math.floor(N/K)/A)}function V(N,A,K,ge){let ve=N.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,K,ge,A.data);else{ve.sort((Q,ce)=>Q.start-ce.start);let _e=0;for(let Q=1;Q<ve.length;Q++){let ce=ve[_e],oe=ve[Q],Ie=ce.start+ce.count,Se=te(oe.start,A.width,4),Pe=te(ce.start,A.width,4);oe.start<=Ie+1&&Se===Pe&&te(oe.start+oe.count-1,A.width,4)===Se?ce.count=Math.max(ce.count,oe.start+oe.count-ce.start):(++_e,ve[_e]=oe)}ve.length=_e+1;let re=t.getParameter(i.UNPACK_ROW_LENGTH),le=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Q=0,ce=ve.length;Q<ce;Q++){let oe=ve[Q],Ie=Math.floor(oe.start/4),Se=Math.ceil(oe.count/4),Pe=Ie%A.width,ze=Math.floor(Ie/A.width),pt=Se,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(i.TEXTURE_2D,0,Pe,ze,pt,ye,K,ge,A.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,re),t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function ae(N,A,K){let ge=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=i.TEXTURE_3D);let de=be(N,A),ve=A.source;t.bindTexture(ge,N.__webglTexture,i.TEXTURE0+K);let _e=n.get(ve);if(ve.version!==_e.__version||de===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let ye=yt.getPrimaries(yt.workingColorSpace),We=A.colorSpace===fs?null:yt.getPrimaries(A.colorSpace),mt=A.colorSpace===fs||ye===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let le=y(A.image,!1,s.maxTextureSize);le=Xe(A,le);let xe=a.convert(A.format,A.colorSpace),Q=a.convert(A.type),ce=T(A.internalFormat,xe,Q,A.normalized,A.colorSpace,A.isVideoTexture);Ge(ge,A);let oe,Ie=A.mipmaps,Se=A.isVideoTexture!==!0,Pe=_e.__version===void 0||de===!0,ze=ve.dataReady,pt=v(A,le);if(A.isDepthTexture)ce=b(A.format===Fi,A.type),Pe&&(Se?t.texStorage2D(i.TEXTURE_2D,1,ce,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,ce,le.width,le.height,0,xe,Q,null));else if(A.isDataTexture)if(Ie.length>0){Se&&Pe&&t.texStorage2D(i.TEXTURE_2D,pt,ce,Ie[0].width,Ie[0].height);for(let ye=0,We=Ie.length;ye<We;ye++)oe=Ie[ye],Se?ze&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,oe.width,oe.height,xe,Q,oe.data):t.texImage2D(i.TEXTURE_2D,ye,ce,oe.width,oe.height,0,xe,Q,oe.data);A.generateMipmaps=!1}else Se?(Pe&&t.texStorage2D(i.TEXTURE_2D,pt,ce,le.width,le.height),ze&&V(A,le,xe,Q)):t.texImage2D(i.TEXTURE_2D,0,ce,le.width,le.height,0,xe,Q,le.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Se&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ce,Ie[0].width,Ie[0].height,le.depth);for(let ye=0,We=Ie.length;ye<We;ye++)if(oe=Ie[ye],A.format!==oi)if(xe!==null)if(Se){if(ze)if(A.layerUpdates.size>0){let mt=bd(oe.width,oe.height,A.format,A.type);for(let Ne of A.layerUpdates){let Dt=oe.data.subarray(Ne*mt/oe.data.BYTES_PER_ELEMENT,(Ne+1)*mt/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Ne,oe.width,oe.height,1,xe,Dt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,oe.width,oe.height,le.depth,xe,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,ce,oe.width,oe.height,le.depth,0,oe.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,oe.width,oe.height,le.depth,xe,Q,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,ce,oe.width,oe.height,le.depth,0,xe,Q,oe.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Se&&Pe&&t.texStorage2D(i.TEXTURE_2D,pt,ce,Ie[0].width,Ie[0].height);for(let ye=0,We=Ie.length;ye<We;ye++)oe=Ie[ye],A.format!==oi?xe!==null?Se?ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,oe.width,oe.height,xe,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,ce,oe.width,oe.height,0,oe.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?ze&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,oe.width,oe.height,xe,Q,oe.data):t.texImage2D(i.TEXTURE_2D,ye,ce,oe.width,oe.height,0,xe,Q,oe.data)}else if(A.isDataArrayTexture)if(Se){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ce,le.width,le.height,le.depth),ze)if(A.layerUpdates.size>0){let ye=bd(le.width,le.height,A.format,A.type);for(let We of A.layerUpdates){let mt=le.data.subarray(We*ye/le.data.BYTES_PER_ELEMENT,(We+1)*ye/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,We,le.width,le.height,1,xe,Q,mt)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,Q,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,le.width,le.height,le.depth,0,xe,Q,le.data);else if(A.isData3DTexture)Se?(Pe&&t.texStorage3D(i.TEXTURE_3D,pt,ce,le.width,le.height,le.depth),ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,Q,le.data)):t.texImage3D(i.TEXTURE_3D,0,ce,le.width,le.height,le.depth,0,xe,Q,le.data);else if(A.isFramebufferTexture){if(Pe)if(Se)t.texStorage2D(i.TEXTURE_2D,pt,ce,le.width,le.height);else{let ye=le.width,We=le.height;for(let mt=0;mt<pt;mt++)t.texImage2D(i.TEXTURE_2D,mt,ce,ye,We,0,xe,Q,null),ye>>=1,We>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),le.parentNode!==ye){ye.appendChild(le),h.add(A),ye.onpaint=We=>{let mt=We.changedElements;for(let Ne of h)mt.includes(Ne.image)&&(Ne.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,le);else{let mt=i.RGBA,Ne=i.RGBA,Dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,Ne,Dt,le)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Se&&Pe){let ye=Ke(Ie[0]);t.texStorage2D(i.TEXTURE_2D,pt,ce,ye.width,ye.height)}for(let ye=0,We=Ie.length;ye<We;ye++)oe=Ie[ye],Se?ze&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,xe,Q,oe):t.texImage2D(i.TEXTURE_2D,ye,ce,xe,Q,oe);A.generateMipmaps=!1}else if(Se){if(Pe){let ye=Ke(le);t.texStorage2D(i.TEXTURE_2D,pt,ce,ye.width,ye.height)}ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Q,le)}else t.texImage2D(i.TEXTURE_2D,0,ce,xe,Q,le);_(A)&&A.mipmapsAutoUpdate===!0&&M(ge),_e.__version=ve.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Ae(N,A,K){if(A.image.length!==6)return;let ge=be(N,A),de=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+K);let ve=n.get(de);if(de.version!==ve.__version||ge===!0){t.activeTexture(i.TEXTURE0+K);let _e=yt.getPrimaries(yt.workingColorSpace),re=A.colorSpace===fs?null:yt.getPrimaries(A.colorSpace),le=A.colorSpace===fs||_e===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let xe=A.isCompressedTexture||A.image[0].isCompressedTexture,Q=A.image[0]&&A.image[0].isDataTexture,ce=[];for(let Ne=0;Ne<6;Ne++)!xe&&!Q?ce[Ne]=y(A.image[Ne],!0,s.maxCubemapSize):ce[Ne]=Q?A.image[Ne].image:A.image[Ne],ce[Ne]=Xe(A,ce[Ne]);let oe=ce[0],Ie=a.convert(A.format,A.colorSpace),Se=a.convert(A.type),Pe=T(A.internalFormat,Ie,Se,A.normalized,A.colorSpace),ze=A.isVideoTexture!==!0,pt=ve.__version===void 0||ge===!0,ye=de.dataReady,We=v(A,oe);Ge(i.TEXTURE_CUBE_MAP,A);let mt;if(A.isDepthTexture){if(Pe=b(A.format===Fi,A.type),pt)if(ze)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pe,oe.width,oe.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Pe,oe.width,oe.height,0,Ie,Se,null)}else if(xe){ze&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Pe,oe.width,oe.height);for(let Ne=0;Ne<6;Ne++){mt=ce[Ne].mipmaps;for(let Dt=0;Dt<mt.length;Dt++){let xt=mt[Dt];A.format!==oi?Ie!==null?ze?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Dt,0,0,xt.width,xt.height,Ie,xt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Dt,Pe,xt.width,xt.height,0,xt.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Dt,0,0,xt.width,xt.height,Ie,Se,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Dt,Pe,xt.width,xt.height,0,Ie,Se,xt.data)}}}else{if(mt=A.mipmaps,ze&&pt){mt.length>0&&We++;let Ne=Ke(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Pe,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(Q){ze?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ce[Ne].width,ce[Ne].height,Ie,Se,ce[Ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Pe,ce[Ne].width,ce[Ne].height,0,Ie,Se,ce[Ne].data);for(let Dt=0;Dt<mt.length;Dt++){let Si=mt[Dt].image[Ne].image;ze?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Dt+1,0,0,Si.width,Si.height,Ie,Se,Si.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Dt+1,Pe,Si.width,Si.height,0,Ie,Se,Si.data)}}else{ze?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Ie,Se,ce[Ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Pe,Ie,Se,ce[Ne]);for(let Dt=0;Dt<mt.length;Dt++){let xt=mt[Dt];ze?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Dt+1,0,0,Ie,Se,xt.image[Ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Dt+1,Pe,Ie,Se,xt.image[Ne])}}}_(A)&&A.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ve.__version=de.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Me(N,A,K,ge,de,ve){let _e=a.convert(K.format,K.colorSpace),re=a.convert(K.type),le=T(K.internalFormat,_e,re,K.normalized,K.colorSpace),xe=n.get(A),Q=n.get(K);if(Q.__renderTarget=A,!xe.__hasExternalTextures){let ce=Math.max(1,A.width>>ve),oe=Math.max(1,A.height>>ve);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ve,le,ce,oe,A.depth,0,_e,re,null):t.texImage2D(de,ve,le,ce,oe,0,_e,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Te(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,de,Q.__webglTexture,0,Ft(A)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,de,Q.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(N,A,K){if(i.bindRenderbuffer(i.RENDERBUFFER,N),A.depthBuffer){let ge=A.depthTexture,de=ge&&ge.isDepthTexture?ge.type:null,ve=b(A.stencilBuffer,de),_e=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(A),ve,A.width,A.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(A),ve,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,N)}else{let ge=A.textures;for(let de=0;de<ge.length;de++){let ve=ge[de],_e=a.convert(ve.format,ve.colorSpace),re=a.convert(ve.type),le=T(ve.internalFormat,_e,re,ve.normalized,ve.colorSpace);Te(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(A),le,A.width,A.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(A),le,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,le,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(N,A,K){let ge=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let de=n.get(A.depthTexture);de.__renderTarget=A;let ve=ge?A.depthTexture.image[0]:A.depthTexture.image;(!de.__webglTexture||ve.width!==A.width||ve.height!==A.height)&&(ve.width=A.width,ve.height=A.height,A.depthTexture.needsUpdate=!0),ge?he(A.depthTexture,0):W(A.depthTexture,0);let _e=de.__webglTexture,re=Ft(A),le=ge?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,xe=A.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===ss)Te(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,le,_e,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,xe,le,_e,0);else if(A.depthTexture.format===Fi)Te(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,le,_e,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,xe,le,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(N){let A=n.get(N),K=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let ge=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){let de=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",de)};ge.addEventListener("dispose",de),A.__depthDisposeCallback=de}A.__boundDepthTexture=ge}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(K)for(let ge=0;ge<6;ge++)Fe(A.__webglFramebuffer[ge],N,ge);else N.texture.mipmaps.length>0?Fe(A.__webglFramebuffer[0],N,0):Fe(A.__webglFramebuffer,N,0);else if(K){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=i.createRenderbuffer(),tt(A.__webglDepthbuffer[ge],N,!1);else{let de=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ve)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),tt(A.__webglDepthbuffer,N,!1);else{let de=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(N,A,K){let ge=n.get(N);A!==void 0&&Me(ge.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ft(N)}function Mt(N){let A=N.texture,K=n.get(N),ge=n.get(A);N.addEventListener("dispose",q),F(N);let de=N.textures,ve=N.isWebGLCubeRenderTarget===!0,_e=de.length>1;if(_e||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=A.version,r.memory.textures++),ve){K.__webglFramebuffer=[];for(let re=0;re<6;re++)if(A.mipmaps.length>0){K.__webglFramebuffer[re]=[];for(let le=0;le<A.mipmaps.length;le++)K.__webglFramebuffer[re][le]=i.createFramebuffer()}else K.__webglFramebuffer[re]=i.createFramebuffer()}else{if(A.mipmaps.length>0){K.__webglFramebuffer=[];for(let re=0;re<A.mipmaps.length;re++)K.__webglFramebuffer[re]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(_e)for(let re=0,le=de.length;re<le;re++){let xe=n.get(de[re]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),r.memory.textures++)}if(N.samples>0&&Te(N)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let re=0;re<de.length;re++){let le=de[re];K.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[re]);let xe=a.convert(le.format,le.colorSpace),Q=a.convert(le.type),ce=T(le.internalFormat,xe,Q,le.normalized,le.colorSpace,N.isXRRenderTarget===!0),oe=Ft(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ce,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,K.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(K.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,A);for(let re=0;re<6;re++)if(A.mipmaps.length>0)for(let le=0;le<A.mipmaps.length;le++)Me(K.__webglFramebuffer[re][le],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else Me(K.__webglFramebuffer[re],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);_(A)?M(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let re=0,le=de.length;re<le;re++){let xe=de[re],Q=n.get(xe),ce=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),Ge(ce,xe),Me(K.__webglFramebuffer,N,xe,i.COLOR_ATTACHMENT0+re,ce,0),_(xe)&&M(ce)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(re=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,ge.__webglTexture),Ge(re,A),A.mipmaps.length>0)for(let le=0;le<A.mipmaps.length;le++)Me(K.__webglFramebuffer[le],N,A,i.COLOR_ATTACHMENT0,re,le);else Me(K.__webglFramebuffer,N,A,i.COLOR_ATTACHMENT0,re,0);_(A)?M(re):A.mipmaps.length>0&&i.texParameteri(re,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&ft(N)}function z(N){let A=N.textures;for(let K=0,ge=A.length;K<ge;K++){let de=A[K];if(_(de)&&de.mipmapsAutoUpdate===!0){let ve=S(N),_e=n.get(de).__webglTexture;t.bindTexture(ve,_e),M(ve),t.unbindTexture()}}}let Ut=[];function ht(N){if(N.samples>0){if(Te(N)===!1){let A=N.textures,K=N.width,ge=N.height,de=i.COLOR_BUFFER_BIT,ve=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(N),re=A.length>1;if(re)for(let xe=0;xe<A.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let xe=0;xe<A.length;xe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);let Q=n.get(A[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,K,ge,0,0,K,ge,de,i.NEAREST),l===!0&&(Ut.length=0,Ut.push(i.COLOR_ATTACHMENT0+xe),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Ut.push(ve),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let xe=0;xe<A.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);let Q=n.get(A[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let A=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ft(N){return Math.min(s.maxSamples,N.samples)}function Te(N){let A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ue(N){let A=r.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function Xe(N,A){let K=N.colorSpace,ge=N.format,de=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==Mn&&K!==fs&&(yt.getTransfer(K)===Ht?(ge!==oi||de!==$n)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",K)),A}function Ke(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=B,this.getTextureUnits=$,this.setTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=ie,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=bt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Te,this.dispose=D}function jv(i,e){function t(n,s=fs){let a,r=yt.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jh)return i.BYTE;if(n===Wh)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===Mc)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===ed)return i.ALPHA;if(n===td)return i.RGB;if(n===oi)return i.RGBA;if(n===ss)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Sc)return i.RED;if(n===Tc)return i.RED_INTEGER;if(n===Cs)return i.RG;if(n===Ec)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===Do||n===No||n===Co||n===Uo)if(r===Ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Do)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Do)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Pc||n===wc||n===Lc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Rc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ic||n===Fc||n===kc||n===Dc||n===Nc||n===Bo||n===Cc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ic||n===Fc)return r===Ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===kc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Dc)return a.COMPRESSED_R11_EAC;if(n===Nc)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Bo)return a.COMPRESSED_RG11_EAC;if(n===Cc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uc||n===Bc||n===Hc||n===Gc||n===qc||n===Oc||n===Xc||n===Vc||n===Yc||n===$c||n===Qc||n===zc||n===Jc||n===jc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Uc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return r===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wc||n===Kc||n===Zc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Wc)return r===Ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eu||n===tu||n===Ho||n===nu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===eu)return a.COMPRESSED_RED_RGTC1_EXT;if(n===tu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kv=`
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

}`,Id=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new to(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kt({vertexShader:Wv,fragmentShader:Kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fd=class extends Bi{constructor(e,t){super();let n=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Id,m={},y=t.getContextAttributes(),_=null,M=null,S=[],T=[],b=new pe,v=null,F=null,L=new tn;L.viewport=new Nt;let G=new tn;G.viewport=new Nt;let q=[L,G],U=new pc,E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let W=S[X];return W===void 0&&(W=new Qa,S[X]=W),W.getTargetRaySpace()},this.getControllerGrip=function(X){let W=S[X];return W===void 0&&(W=new Qa,S[X]=W),W.getGripSpace()},this.getHand=function(X){let W=S[X];return W===void 0&&(W=new Qa,S[X]=W),W.getHandSpace()};function w(X){let W=T.indexOf(X.inputSource);if(W===-1)return;let ie=S[W];ie!==void 0&&(ie.update(X.inputSource,X.frame,c||r),ie.dispatchEvent({type:X.type,data:X.inputSource}))}function P(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",Y);for(let X=0;X<S.length;X++){let W=T[X];W!==null&&(T[X]=null,S[X].disconnect(W))}E=null,D=null,g.reset();for(let X in m)delete m[X];if(e.setRenderTarget(_),f=null,d=null,h=null,s=null,M=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(b.width,b.height,!1),F!==null){let X=F.camera;X.fov=F.fov,X.zoom=F.zoom,X.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",P),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,me=null,he=null;y.depth&&(he=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=y.stencil?Fi:ss,me=y.stencil?ds:Ii);let Re={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new rn(d.textureWidth,d.textureHeight,{format:oi,type:$n,depthTexture:new wi(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new rn(f.framebufferWidth,f.framebufferHeight,{format:oi,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(X){for(let W=0;W<X.removed.length;W++){let ie=X.removed[W],me=T.indexOf(ie);me>=0&&(T[me]=null,S[me].disconnect(ie))}for(let W=0;W<X.added.length;W++){let ie=X.added[W],me=T.indexOf(ie);if(me===-1){for(let Re=0;Re<S.length;Re++)if(Re>=T.length){T.push(ie),me=Re;break}else if(T[Re]===null){T[Re]=ie,me=Re;break}if(me===-1)break}let he=S[me];he&&he.connect(ie)}}function O(X,W){W===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(W.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let W=X.near,ie=X.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),U.near=G.near=L.near=W,U.far=G.far=L.far=ie,(E!==U.near||D!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),E=U.near,D=U.far),U.layers.mask=X.layers.mask|6,L.layers.mask=U.layers.mask&-5,G.layers.mask=U.layers.mask&-3;let me=X.parent,he=U.cameras;O(U,me);for(let Re=0;Re<he.length;Re++)O(he[Re],me);U.projectionMatrix.copy(L.projectionMatrix),U.projectionMatrixInverse.copy(L.projectionMatrixInverse),F===null&&X.isPerspectiveCamera&&(F={camera:X,fov:X.fov,zoom:X.zoom}),B(X,U,me)};function B(X,W,ie){ie===null?X.matrix.copy(W.matrixWorld):(X.matrix.copy(ie.matrixWorld),X.matrix.invert(),X.matrix.multiply(W.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(W.projectionMatrix),X.projectionMatrixInverse.copy(W.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ta*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(X){return m[X]};let $=null;function H(X,W){if(u=W.getViewerPose(c||r),p=W,u!==null){let ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let me=!1;ie.length!==U.cameras.length&&(U.cameras.length=0,me=!0);for(let Ce=0;Ce<ie.length;Ce++){let Ge=ie[Ce],be=null;if(f!==null)be=f.getViewport(Ge);else{let V=h.getViewSubImage(d,Ge);be=V.viewport,Ce===0&&(e.setRenderTargetTextures(M,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(M))}let te=q[Ce];te===void 0&&(te=new tn,te.layers.enable(Ce),te.viewport=new Nt,q[Ce]=te),te.matrix.fromArray(Ge.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Ge.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(be.x,be.y,be.width,be.height),Ce===0&&(U.matrix.copy(te.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),me===!0&&U.cameras.push(te)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Ce=h.getDepthInformation(ie[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(Ce,s.renderState)}if(he&&he.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Ce=0;Ce<ie.length;Ce++){let Ge=ie[Ce].camera;if(Ge){let be=m[Ge];be||(be=new to,m[Ge]=be);let te=h.getCameraImage(Ge);be.sourceTexture=te}}}}for(let ie=0;ie<S.length;ie++){let me=T[ie],he=S[ie];me!==null&&he!==void 0&&he.update(me,W,c||r)}$&&$(X,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),p=null}let j=new U0;j.setAnimationLoop(H),this.setAnimationLoop=function(X){$=X},this.dispose=function(){}}},Zv=new je,Q0=new ut;Q0.set(-1,0,0,0,1,0,0,0,1);function e2(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,pd(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,_,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(g,m):m.isMeshLambertMaterial?(a(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(g,m),h(g,m)):m.isMeshPhongMaterial?(a(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(a(g,m),p(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),x(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),_=y.envMap,M=y.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Q0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function t2(i,e,t,n){let s={},a={};function r(y,_){let M=_.program;n.uniformBlockBinding(y,M,s[y.id])}function o(y,_){let M=s[y.id];M===void 0&&(p(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",g));let S=_.program;n.updateUBOMapping(y,S);let T=e.render.frame;a[y.id]!==T&&(c(y),a[y.id]=T)}function l(y){let _=i.createBuffer(),M=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,M,S),i.bindBuffer(i.UNIFORM_BUFFER,null),_}function c(y){let _=s[y.id],M=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,b=M.length;T<b;T++){let v=M[T];if(Array.isArray(v))for(let F=0,L=v.length;F<L;F++)u(v[F],T,F,S);else u(v,T,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,_,M,S){if(d(y,_,M,S)===!0){let T=y.__offset,b=y.value;if(Array.isArray(b)){let v=0;for(let F=0;F<b.length;F++){let L=b[F],G=x(L,!0);h(L,y.__data,v),v+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else h(b,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function h(y,_,M){typeof y=="number"||typeof y=="boolean"?_[M]=y:y.isMatrix3?(_[M]=y.elements[0],_[M+1]=y.elements[1],_[M+2]=y.elements[2],_[M+3]=0,_[M+4]=y.elements[3],_[M+5]=y.elements[4],_[M+6]=y.elements[5],_[M+7]=0,_[M+8]=y.elements[6],_[M+9]=y.elements[7],_[M+10]=y.elements[8],_[M+11]=0):ArrayBuffer.isView(y)?_.set(y.subarray(0,_.length-M),M):y.toArray(_,M)}function d(y,_,M,S){let T=y.value,b=_+"_"+M;if(Array.isArray(T)){S[b]===void 0&&(S[b]=[]);let v=S[b],F=!1;for(let L=0;L<T.length;L++)f(T[L],v,L)===!0&&(F=!0);return F}return f(T,S,b)}function f(y,_,M){if(_[M]===void 0)return typeof y=="number"||typeof y=="boolean"?_[M]=y:ArrayBuffer.isView(y)?_[M]=y.slice():_[M]=y.clone(),!0;{let S=_[M];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return _[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function p(y){let _=y.uniforms,M=0,S=16;for(let b=0,v=_.length;b<v;b++){let F=Array.isArray(_[b])?_[b]:[_[b]];for(let L=0,G=F.length;L<G;L++){let q=F[L],U=Array.isArray(q.value)?q.value:[q.value],E=Array.isArray(_[b])||Array.isArray(q.value),D=M;for(let P=0,Y=U.length;P<Y;P++){let O=U[P],B=x(O,E),$=M%S,H=$%B.boundary,j=$+H;M+=H,j!==0&&S-j<B.storage&&(M+=S-j),P===0&&(D=M),M+=B.storage}let w=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new w((M-D)/Float32Array.BYTES_PER_ELEMENT),q.__offset=D}}let T=M%S;return T>0&&(M+=S-T),y.__size=M,y.__cache={},this}function x(y,_){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",y),_===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(y){let _=y.target;_.removeEventListener("dispose",g),i.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);s={},a={}}return{bind:r,update:o,dispose:m}}var n2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function i2(){return Xi===null&&(Xi=new Hi(n2,16,16,Cs,fn),Xi.name="DFG_LUT",Xi.minFilter=yn,Xi.magFilter=yn,Xi.wrapS=mi,Xi.wrapT=mi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var ou=class{constructor(e={}){let{canvas:t=a0(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=$n}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let x=f,g=new Set([Ac,Ec,Tc]),m=new Set([$n,Ii,or,ds,vc,_c]),y=new Uint32Array(4),_=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},S=null,T=null,b=[],v=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,G=!1,q=null,U=null,E=null,D=null;this._outputColorSpace=gt;let w=0,P=0,Y=null,O=-1,B=null,$=new Nt,H=new Nt,j=null,X=new fe(0),W=0,ie=t.width,me=t.height,he=1,Re=null,De=null,Ce=new Nt(0,0,ie,me),Ge=new Nt(0,0,ie,me),be=!1,te=new ws,V=new Wl,ae=!1,Ae=!1,Me=new je,tt=new k,Fe=new Nt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function Mt(){return Y===null?he:1}let z=n;function Ut(R,J){return t.getContext(R,J)}let ht,Ft,Te,Ue,Xe,Ke,N,A,K,ge,de,ve,_e,re,le,xe,Q,ce,oe,Ie,Se,Pe,ze;try{let R={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),z===null){let J="webgl2";if(z=Ut(J,R),z===null)throw Ut(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pt()}catch(R){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),st("WebGLRenderer: "+R.message),R}function pt(){ht=new pM(z),ht.init(),Se=new jv(z,ht),Ft=new iM(z,ht,e,Se),Te=new zv(z,ht),Ft.reversedDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),U=z.createFramebuffer(),E=z.createFramebuffer(),D=z.createFramebuffer(),Ue=new bM(z),Xe=new Dv,Ke=new Jv(z,ht,Te,Xe,Ft,Se,Ue),N=new fM(L),A=new yx(z),Pe=new tM(z,A),K=new mM(z,A,Ue,Pe),ge=new yM(z,K,A,Pe,Ue),ce=new xM(z,Ft,Ke),le=new sM(Xe),de=new kv(L,N,ht,Ft,Pe,le),ve=new e2(L,Xe),_e=new Cv,re=new Ov(ht),Q=new eM(L,N,Te,ge,p,l),xe=new Qv(L,ge,Ft),ze=new t2(z,Ue,Ft,Te),oe=new nM(z,ht,Ue),Ie=new gM(z,ht,Ue),Ue.programs=de.programs,L.capabilities=Ft,L.extensions=ht,L.properties=Xe,L.renderLists=_e,L.shadowMap=xe,L.state=Te,L.info=Ue}x!==$n&&(F=new vM(x,t.width,t.height,o,s,a));let ye=new Fd(L,z);this.xr=ye,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(R){R!==void 0&&(he=R,this.setSize(ie,me,!1))},this.getSize=function(R){return R.set(ie,me)},this.setSize=function(R,J,ne=!0){if(ye.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=R,me=J,t.width=Math.floor(R*he),t.height=Math.floor(J*he),ne===!0&&(t.style.width=R+"px",t.style.height=J+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(ie*he,me*he).floor()},this.setDrawingBufferSize=function(R,J,ne){ie=R,me=J,he=ne,t.width=Math.floor(R*ne),t.height=Math.floor(J*ne),this.setViewport(0,0,R,J)},this.setEffects=function(R){if(x===$n){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let J=0;J<R.length;J++)if(R[J].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy($)},this.getViewport=function(R){return R.copy(Ce)},this.setViewport=function(R,J,ne,Z){R.isVector4?Ce.set(R.x,R.y,R.z,R.w):Ce.set(R,J,ne,Z),Te.viewport($.copy(Ce).multiplyScalar(Mt()).round())},this.getScissor=function(R){return R.copy(Ge)},this.setScissor=function(R,J,ne,Z){R.isVector4?Ge.set(R.x,R.y,R.z,R.w):Ge.set(R,J,ne,Z),Te.scissor(H.copy(Ge).multiplyScalar(Mt()).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){Te.setScissorTest(be=R)},this.setOpaqueSort=function(R){Re=R},this.setTransparentSort=function(R){De=R},this.getClearColor=function(R){return R.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(R=!0,J=!0,ne=!0){let Z=0;if(R){let ee=!1;if(Y!==null){let ke=Y.texture.format;ee=g.has(ke)}if(ee){let ke=Y.texture.type,Ve=m.has(ke),Le=Q.getClearColor(),He=Q.getClearAlpha(),$e=Le.r,rt=Le.g,_t=Le.b;Ve?(y[0]=$e,y[1]=rt,y[2]=_t,y[3]=He,z.clearBufferuiv(z.COLOR,0,y)):(_[0]=$e,_[1]=rt,_[2]=_t,_[3]=He,z.clearBufferiv(z.COLOR,0,_))}else Z|=z.COLOR_BUFFER_BIT}J&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Q.dispose(),_e.dispose(),re.dispose(),Ke.dispose(),Xe.dispose(),N.dispose(),ge.dispose(),K.dispose(),Pe.dispose(),ze.dispose(),de.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ol),ye.removeEventListener("sessionend",Ma),en.stop()};function We(R){R.preventDefault(),Yr("WebGLRenderer: Context Lost."),G=!0}function mt(){Yr("WebGLRenderer: Context Restored."),G=!1;let R=Ue.autoReset,J=xe.enabled,ne=xe.autoUpdate,Z=xe.needsUpdate,ee=xe.type;pt(),Ue.autoReset=R,xe.enabled=J,xe.autoUpdate=ne,xe.needsUpdate=Z,xe.type=ee}function Ne(R){st("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Dt(R){let J=R.target;J.removeEventListener("dispose",Dt),xt(J)}function xt(R){Si(R),Xe.remove(R)}function Si(R){let J=Xe.get(R).programs;J!==void 0&&(J.forEach(function(ne){de.releaseProgram(ne)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,ne,Z,ee,ke){J===null&&(J=ft);let Ve=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Le=ll(R,J,ne,Z,ee);Te.setMaterial(Z,Ve);let He=ne.index,$e=1;if(Z.wireframe===!0){if(He=K.getWireframeAttribute(ne),He===void 0)return;$e=2}let rt=ne.drawRange,_t=ne.attributes.position,Ye=rt.start*$e,Tt=(rt.start+rt.count)*$e;ke!==null&&(Ye=Math.max(Ye,ke.start*$e),Tt=Math.min(Tt,(ke.start+ke.count)*$e)),He!==null?(Ye=Math.max(Ye,0),Tt=Math.min(Tt,He.count)):_t!=null&&(Ye=Math.max(Ye,0),Tt=Math.min(Tt,_t.count));let ln=Tt-Ye;if(ln<0||ln===1/0)return;Pe.setup(ee,Z,Le,ne,He);let Qt,qt=oe;if(He!==null&&(Qt=A.get(He),qt=Ie,qt.setIndex(Qt)),ee.isMesh)Z.wireframe===!0?(Te.setLineWidth(Z.wireframeLinewidth*Mt()),qt.setMode(z.LINES)):qt.setMode(z.TRIANGLES);else if(ee.isLine){let I=Z.linewidth;I===void 0&&(I=1),Te.setLineWidth(I*Mt()),ee.isLineSegments?qt.setMode(z.LINES):ee.isLineLoop?qt.setMode(z.LINE_LOOP):qt.setMode(z.LINE_STRIP)}else ee.isPoints?qt.setMode(z.POINTS):ee.isSprite&&qt.setMode(z.TRIANGLES);if(ee.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))qt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let I=ee._multiDrawStarts,C=ee._multiDrawCounts,se=ee._multiDrawCount,ue=He?A.get(He).bytesPerElement:1,Be=Xe.get(Z).currentProgram.getUniforms();for(let Qe=0;Qe<se;Qe++)Be.setValue(z,"_gl_DrawID",Qe),qt.render(I[Qe]/ue,C[Qe])}else if(ee.isInstancedMesh)qt.renderInstances(Ye,ln,ee.count);else if(ne.isInstancedBufferGeometry){let I=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,C=Math.min(ne.instanceCount,I);qt.renderInstances(Ye,ln,C)}else qt.render(Ye,ln)};function $s(R,J,ne,Z){q!==null&&R.isNodeMaterial&&q.setObject(Z,R),ae===!0&&le.setState(R,ne,!1),R.transparent===!0&&R.side===$t&&R.forceSinglePass===!1?(R.side=Sn,R.needsUpdate=!0,Di(R,J,Z),R.side=qi,R.needsUpdate=!0,Di(R,J,Z),R.side=$t):Di(R,J,Z)}this.compile=function(R,J,ne=null){ne===null&&(ne=R),q!==null&&q.renderStart(R,J,ne),T=re.get(ne),T.init(J),v.push(T),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),R!==ne&&R.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),T.setupLights(),q!==null&&q.updateLights(T.state.lightsArray),Ae=this.localClippingEnabled,ae=le.init(this.clippingPlanes,Ae),ae===!0&&le.setGlobalState(this.clippingPlanes,J),q!==null&&xe.render(T.state.shadowsArray,ne,J);let Z=new Set;return R.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let ke=ee.material;if(ke)if(Array.isArray(ke))for(let Ve=0;Ve<ke.length;Ve++){let Le=ke[Ve];$s(Le,ne,J,ee),Z.add(Le)}else $s(ke,ne,J,ee),Z.add(ke)}),T=v.pop(),q!==null&&q.renderEnd(),Z},this.compileAsync=function(R,J,ne=null){let Z=this.compile(R,J,ne);return new Promise(ee=>{function ke(){if(Z.forEach(function(Ve){let He=Xe.get(Ve).currentProgram;(He===void 0||He.isReady())&&Z.delete(Ve)}),Z.size===0){ee(R);return}setTimeout(ke,10)}ht.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let ya=null;function Wu(R){ya&&ya(R)}function ol(){en.stop()}function Ma(){en.start()}let en=new U0;en.setAnimationLoop(Wu),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(R){ya=R,ye.setAnimationLoop(R),R===null?en.stop():en.start()},ye.addEventListener("sessionstart",ol),ye.addEventListener("sessionend",Ma),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(R,J);let ne=ye.enabled===!0&&ye.isPresenting===!0,Z=F!==null&&(Y===null||ne)&&F.begin(L,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(J),J=ye.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,J,Y),T=re.get(R,v.length),T.init(J),T.state.textureUnits=Ke.getTextureUnits(),v.push(T),Me.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),J.isArrayCamera?V.setFromArrayCamera(J):te.setFromProjectionMatrix(Me,gi,J.reversedDepth),Ae=this.localClippingEnabled,ae=le.init(this.clippingPlanes,Ae),S=_e.get(R,b.length),S.init(),b.push(S),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){let Ve=L.xr.getDepthSensingMesh();Ve!==null&&ji(Ve,J,-1/0,L.sortObjects)}ji(R,J,0,L.sortObjects),S.finish(),q!==null&&q.updateLights(T.state.lightsArray),L.sortObjects===!0&&S.sort(Re,De),bt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,bt&&Q.addToRenderList(S,R),this.info.autoReset===!0&&this.info.reset(),ae===!0&&le.beginShadows();let ee=T.state.shadowsArray;if(xe.render(ee,R,J),ae===!0&&le.endShadows(),(Z&&F.hasRenderPass())===!1){let Ve=S.opaque,Le=S.transmissive;if(T.setupLights(),J.isArrayCamera){let He=J.cameras;if(Le.length>0)for(let $e=0,rt=He.length;$e<rt;$e++){let _t=He[$e];In(Ve,Le,R,_t)}bt&&Q.render(R);for(let $e=0,rt=He.length;$e<rt;$e++){let _t=He[$e];va(S,R,_t,_t.viewport)}}else Le.length>0&&In(Ve,Le,R,J),bt&&Q.render(R),va(S,R,J)}Y!==null&&P===0&&(Ke.updateMultisampleRenderTarget(Y),Ke.updateRenderTargetMipmap(Y)),Z&&F.end(L),R.isScene===!0&&R.onAfterRender(L,R,J),Pe.resetDefaultState(),O=-1,B=null,v.pop(),v.length>0?(T=v[v.length-1],Ke.setTextureUnits(T.state.textureUnits),ae===!0&&le.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?S=b[b.length-1]:S=null,q!==null&&q.renderEnd()};function ji(R,J,ne,Z){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){let Ve=J.isArrayCamera?V:te;if(!R.frustumCulled||R.intersectsFrustum(Ve)){Z&&Fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Me);let Le=ge.update(R),He=R.material;He.visible&&S.push(R,Le,He,ne,Fe.z,null,J)}}else if(R.isMesh||R.isLine||R.isPoints){let Ve=J.isArrayCamera?V:te;if(!R.frustumCulled||R.intersectsFrustum(Ve)){let Le=ge.update(R),He=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Fe.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Fe.copy(Le.boundingSphere.center)),Fe.applyMatrix4(R.matrixWorld).applyMatrix4(Me)),Array.isArray(He)){let $e=Le.groups;for(let rt=0,_t=$e.length;rt<_t;rt++){let Ye=$e[rt],Tt=He[Ye.materialIndex];Tt&&Tt.visible&&S.push(R,Le,Tt,ne,Fe.z,Ye,J)}}else He.visible&&S.push(R,Le,He,ne,Fe.z,null,J)}}}let ke=R.children;for(let Ve=0,Le=ke.length;Ve<Le;Ve++)ji(ke[Ve],J,ne,Z)}function va(R,J,ne,Z){let{opaque:ee,transmissive:ke,transparent:Ve}=R;T.setupLightsView(ne),ae===!0&&le.setGlobalState(L.clippingPlanes,ne),Z&&Te.viewport($.copy(Z)),ee.length>0&&Fn(ee,J,ne),ke.length>0&&Fn(ke,J,ne),Ve.length>0&&Fn(Ve,J,ne),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function In(R,J,ne,Z){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){let Ye=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new rn(1,1,{generateMipmaps:!0,type:Ye?fn:$n,minFilter:ri,samples:Math.max(4,Ft.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let ke=T.state.transmissionRenderTarget[Z.id],Ve=Z.viewport||$;ke.setSize(Ve.z*L.transmissionResolutionScale,Ve.w*L.transmissionResolutionScale);let Le=L.getRenderTarget(),He=L.getActiveCubeFace(),$e=L.getActiveMipmapLevel();L.setRenderTarget(ke),L.getClearColor(X),W=L.getClearAlpha(),W<1&&L.setClearColor(16777215,.5),L.clear(),bt&&Q.render(ne);let rt=L.toneMapping;L.toneMapping=Oi;let _t=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),ae===!0&&le.setGlobalState(L.clippingPlanes,Z),Fn(R,ne,Z),Ke.updateMultisampleRenderTarget(ke),Ke.updateRenderTargetMipmap(ke),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Tt=0,ln=J.length;Tt<ln;Tt++){let Qt=J[Tt],{object:qt,geometry:I,material:C,group:se}=Qt;if(C.side===$t&&qt.layers.test(Z.layers)){let ue=C.side;C.side=Sn,C.needsUpdate=!0,Qs(qt,ne,Z,I,C,se),C.side=ue,C.needsUpdate=!0,Ye=!0}}Ye===!0&&(Ke.updateMultisampleRenderTarget(ke),Ke.updateRenderTargetMipmap(ke))}L.setRenderTarget(Le,He,$e),L.setClearColor(X,W),_t!==void 0&&(Z.viewport=_t),L.toneMapping=rt}function Fn(R,J,ne){let Z=J.isScene===!0?J.overrideMaterial:null;for(let ee=0,ke=R.length;ee<ke;ee++){let Ve=R[ee],{object:Le,geometry:He,group:$e}=Ve,rt=Ve.material;rt.allowOverride===!0&&Z!==null&&(rt=Z),Le.layers.test(ne.layers)&&Qs(Le,J,ne,He,rt,$e)}}function Qs(R,J,ne,Z,ee,ke){q!==null&&ee.isNodeMaterial&&q.setObject(R,ee),R.onBeforeRender(L,J,ne,Z,ee,ke),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ee.onBeforeRender(L,J,ne,Z,R,ke),ee.transparent===!0&&ee.side===$t&&ee.forceSinglePass===!1?(ee.side=Sn,ee.needsUpdate=!0,L.renderBufferDirect(ne,J,Z,ee,R,ke),ee.side=qi,ee.needsUpdate=!0,L.renderBufferDirect(ne,J,Z,ee,R,ke),ee.side=$t):L.renderBufferDirect(ne,J,Z,ee,R,ke),R.onAfterRender(L,J,ne,Z,ee,ke)}function Sr(R){let J=0;for(let ne of R)ne.texture!==null&&J++;return J}function Di(R,J,ne){J.isScene!==!0&&(J=ft);let Z=Xe.get(R),ee=T.state.lights,ke=T.state.shadowsArray,Ve=ee.state.version,Le=de.getParameters(R,ee.state,ke,J,ne,T.state.lightProbeGridArray),He=de.getProgramCacheKey(Le),$e=Z.programs;Z.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?J.environment:null,Z.fog=J.fog;let rt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Z.envMap=N.get(R.envMap||Z.environment,rt),Z.envMapRotation=Z.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",Dt),$e=new Map,Z.programs=$e,Z.programVariants=new Map);let _t=$e.get(He);if(_t!==void 0){if(Z.currentProgram===_t&&Z.lightsStateVersion===Ve)return Ar(R,Le),_t}else Le.uniforms=de.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,ne,Le),R.onBeforeCompile(Le,L),_t=de.acquireProgram(Le,He),$e.set(He,_t),Z.uniforms=Le.uniforms;let Ye=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=le.uniform),Ar(R,Le),Z.needsLights=cl(R),Z.lightsStateVersion=Ve,Z.needsLights&&(Ye.ambientLightColor.value=ee.state.ambient,Ye.lightProbe.value=ee.state.probe,Ye.sunLights.value=ee.state.sun,Ye.sunLightShadows.value=ee.state.sunShadow,Ye.directionalLights.value=ee.state.directional,Ye.directionalLightShadows.value=ee.state.directionalShadow,Ye.spotLights.value=ee.state.spot,Ye.spotLightShadows.value=ee.state.spotShadow,Ye.rectAreaLights.value=ee.state.rectArea,Ye.ltc_1.value=ee.state.rectAreaLTC1,Ye.ltc_2.value=ee.state.rectAreaLTC2,Ye.pointLights.value=ee.state.point,Ye.pointLightShadows.value=ee.state.pointShadow,Ye.hemisphereLights.value=ee.state.hemi,Ye.sunShadowMatrix.value=ee.state.sunShadowMatrix,Ye.sunShadowCascade.value=ee.state.sunShadowCascade,Ye.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ee.state.spotLightMatrix,Ye.spotLightMap.value=ee.state.spotLightMap,Ye.pointShadowMatrix.value=ee.state.pointShadowMatrix),Z.numLightProbeGrids=Sr(T.state.lightProbeGridArray),Z.currentProgram=_t,Z.uniformsList=null,_t}function Tr(R,J,ne,Z,ee){let ke=Xe.get(R),Ve=ke.currentProgram.id+","+Z+","+ee,Le=ke.programVariants.get(Ve);return Le===void 0?(Le=Di(R,J,ne),ke.programVariants.set(Ve,Le)):(ke.currentProgram=Le,ke.uniformsList=null,ke.outputColorSpace=Z,ke.toneMapping=ee),Le}function Er(R){if(R.uniformsList===null){let J=R.currentProgram.getUniforms();R.uniformsList=cr.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function Ar(R,J){let ne=Xe.get(R);ne.outputColorSpace=J.outputColorSpace,ne.batching=J.batching,ne.batchingColor=J.batchingColor,ne.instancing=J.instancing,ne.instancingColor=J.instancingColor,ne.instancingMorph=J.instancingMorph,ne.skinning=J.skinning,ne.morphTargets=J.morphTargets,ne.morphNormals=J.morphNormals,ne.morphColors=J.morphColors,ne.morphTargetsCount=J.morphTargetsCount,ne.numClippingPlanes=J.numClippingPlanes,ne.numIntersection=J.numClipIntersection,ne.vertexAlphas=J.vertexAlphas,ne.vertexTangents=J.vertexTangents,ne.toneMapping=J.toneMapping}function ll(R,J,ne,Z,ee){J.isScene!==!0&&(J=ft),Ke.resetTextureUnits();let ke=J.fog,Ve=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?J.environment:null,Le=Y===null?L.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:yt.workingColorSpace,He=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,$e=N.get(Z.envMap||Ve,He),rt=Z.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,_t=!!ne.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ye=!!ne.morphAttributes.position,Tt=!!ne.morphAttributes.normal,ln=!!ne.morphAttributes.color,Qt=Oi;Z.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qt=L.toneMapping);let qt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,I=qt!==void 0?qt.length:0,C=Xe.get(Z),se=T.state.lights;if(ae===!0&&(Ae===!0||R!==B)){let ot=R===B&&Z.id===O;le.setState(Z,R,ot)}let ue=!1,Be=!1;Z.version===C.__version?C.needsLights&&C.lightsStateVersion!==se.state.version||ee.isBatchedMesh&&C.batching===!1||!ee.isBatchedMesh&&C.batching===!0||ee.isBatchedMesh&&C.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&C.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&C.instancing===!1||!ee.isInstancedMesh&&C.instancing===!0||ee.isSkinnedMesh&&C.skinning===!1||!ee.isSkinnedMesh&&C.skinning===!0||ee.isInstancedMesh&&C.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&C.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&C.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&C.instancingMorph===!1&&ee.morphTexture!==null||C.envMap!==$e||Z.fog===!0&&C.fog!==ke||C.numClippingPlanes!==void 0&&(C.numClippingPlanes!==le.numPlanes||C.numIntersection!==le.numIntersection)||C.vertexAlphas!==rt||C.vertexTangents!==_t||C.morphTargets!==Ye||C.morphNormals!==Tt||C.morphColors!==ln||C.morphTargetsCount!==I||C.numLightProbeGrids!==Sr(T.state.lightProbeGridArray)?ue=!0:(C.outputColorSpace!==Le||C.toneMapping!==Qt)&&(Be=!0):(ue=!0,C.__version=Z.version);let Qe=C.currentProgram;(ue===!0||Be===!0)&&(Qe=Be===!0?Tr(Z,J,ee,Le,Qt):Di(Z,J,ee),q&&Z.isNodeMaterial&&q.onUpdateProgram(Z,Qe,C));let wt=!1,Bt=!1,Lt=!1,Ze=Qe.getUniforms(),Rt=C.uniforms;if(Te.useProgram(Qe.program)&&(wt=!0,Bt=!0,Lt=!0),Z.id!==O&&(O=Z.id,Bt=!0),wt||B!==R){Te.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ze.setValue(z,"projectionMatrix",R.projectionMatrix),Ze.setValue(z,"viewMatrix",R.matrixWorldInverse);let cn=Ze.map.cameraPosition;cn!==void 0&&cn.setValue(z,tt.setFromMatrixPosition(R.matrixWorld)),Ft.logarithmicDepthBuffer&&Ze.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ze.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,Bt=!0,Lt=!0)}if(C.needsLights&&(se.state.sunShadowMap.length>0&&Ze.setValue(z,"sunShadowMap",se.state.sunShadowMap,Ke),se.state.directionalShadowMap.length>0&&Ze.setValue(z,"directionalShadowMap",se.state.directionalShadowMap,Ke),se.state.spotShadowMap.length>0&&Ze.setValue(z,"spotShadowMap",se.state.spotShadowMap,Ke),se.state.pointShadowMap.length>0&&Ze.setValue(z,"pointShadowMap",se.state.pointShadowMap,Ke)),ee.isSkinnedMesh){Ze.setOptional(z,ee,"bindMatrix"),Ze.setOptional(z,ee,"bindMatrixInverse");let ot=ee.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),Ze.setValue(z,"boneTexture",ot.boneTexture,Ke))}ee.isBatchedMesh&&(Ze.setOptional(z,ee,"batchingTexture"),Ze.setValue(z,"batchingTexture",ee._matricesTexture,Ke),Ze.setOptional(z,ee,"batchingIdTexture"),Ze.setValue(z,"batchingIdTexture",ee._indirectTexture,Ke),Ze.setOptional(z,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ze.setValue(z,"batchingColorTexture",ee._colorsTexture,Ke));let It=ne.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&ce.update(ee,ne,Qe),(Bt||C.receiveShadow!==ee.receiveShadow)&&(C.receiveShadow=ee.receiveShadow,Ze.setValue(z,"receiveShadow",ee.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&J.environment!==null&&(Rt.envMapIntensity.value=J.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=i2()),Bt){if(Ze.setValue(z,"toneMappingExposure",L.toneMappingExposure),C.needsLights&&Ku(Rt,Lt),ke&&Z.fog===!0&&ve.refreshFogUniforms(Rt,ke),ve.refreshMaterialUniforms(Rt,Z,he,me,T.state.transmissionRenderTarget[R.id]),C.needsLights&&C.numLightProbeGrids>0){let ot=M,cn=0;for(let Gn of T.state.lightProbeGridArray)Gn.texture!==null&&(ot.textures[cn]=Gn.texture,ot.min[cn]=Gn.boundingBox.min,ot.max[cn]=Gn.boundingBox.max,ot.resolution[cn]=Gn.resolution,cn++);for(let Gn in ot)ot[Gn].length=cn;Rt.probesSH.value=ot.textures,Rt.probesMin.value=ot.min,Rt.probesMax.value=ot.max,Rt.probesResolution.value=ot.resolution}cr.upload(z,Er(C),Rt,Ke)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(cr.upload(z,Er(C),Rt,Ke),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ze.setValue(z,"center",ee.center),Ze.setValue(z,"modelViewMatrix",ee.modelViewMatrix),Ze.setValue(z,"normalMatrix",ee.normalMatrix),Ze.setValue(z,"modelMatrix",ee.matrixWorld),Z.uniformsGroups!==void 0){let ot=Z.uniformsGroups;for(let cn=0,Gn=ot.length;cn<Gn;cn++){let Jn=ot[cn];ze.update(Jn,Qe),ze.bind(Jn,Qe)}}return Qe}function Ku(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.sunLights.needsUpdate=J,R.sunLightShadows.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function cl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,J,ne){let Z=Xe.get(R);Z.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Xe.get(R.texture).__webglTexture=J,Xe.get(R.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ne,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,J){let ne=Xe.get(R);ne.__webglFramebuffer=J,ne.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(R,J=0,ne=0){Y=R,w=J,P=ne;let Z=null,ee=!1,ke=!1;if(R){let Le=Xe.get(R);if(Le.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(z.FRAMEBUFFER,Le.__webglFramebuffer),$.copy(R.viewport),H.copy(R.scissor),j=R.scissorTest,Te.viewport($),Te.scissor(H),Te.setScissorTest(j),O=-1;return}else if(Le.__webglFramebuffer===void 0)Ke.setupRenderTarget(R);else if(Le.__hasExternalTextures)Ke.rebindTextures(R,Xe.get(R.texture).__webglTexture,Xe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let rt=R.depthTexture;if(Le.__boundDepthTexture!==rt){if(rt!==null&&Xe.has(rt)&&(R.width!==rt.image.width||R.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(R)}}let He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ke=!0);let $e=Xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[J])?Z=$e[J][ne]:Z=$e[J],ee=!0):R.samples>0&&Ke.useMultisampledRTT(R)===!1?Z=Xe.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?Z=$e[ne]:Z=$e,$.copy(R.viewport),H.copy(R.scissor),j=R.scissorTest}else $.copy(Ce).multiplyScalar(he).floor(),H.copy(Ge).multiplyScalar(he).floor(),j=be;if(ne!==0&&(Z=U),Te.bindFramebuffer(z.FRAMEBUFFER,Z)&&Te.drawBuffers(R,Z),Te.viewport($),Te.scissor(H),Te.setScissorTest(j),ee){let Le=Xe.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le.__webglTexture,ne)}else if(ke){let Le=J;for(let He=0;He<R.textures.length;He++){let $e=Xe.get(R.textures[He]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+He,$e.__webglTexture,ne,Le)}}else if(R!==null&&ne!==0){let Le=Xe.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Le.__webglTexture,ne)}O=-1};function Rr(R){let J=Xe.get(R);return(J.__readFormat!==R.format||J.__readType!==R.type)&&(J.__readFormat=R.format,J.__readType=R.type,J.__formatReadable=Ft.textureFormatReadable(R.format),J.__typeReadable=Ft.textureTypeReadable(R.type)),J}this.readRenderTargetPixels=function(R,J,ne,Z,ee,ke,Ve,Le=0){if(!(R&&R.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(He=He[Ve],Array.isArray(He)&&(He=He[0])),He){Te.bindFramebuffer(z.FRAMEBUFFER,He);try{let $e=R.textures[Le],rt=$e.format,_t=$e.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Le);let Ye=Rr($e);if(Ye.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-Z&&ne>=0&&ne<=R.height-ee&&z.readPixels(J,ne,Z,ee,Se.convert(rt),Se.convert(_t),ke)}finally{let $e=Y!==null?Xe.get(Y).__webglFramebuffer:null;Te.bindFramebuffer(z.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,J,ne,Z,ee,ke,Ve,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(He=He[Ve],Array.isArray(He)&&(He=He[0])),He)if(J>=0&&J<=R.width-Z&&ne>=0&&ne<=R.height-ee){Te.bindFramebuffer(z.FRAMEBUFFER,He);let $e=R.textures[Le],rt=$e.format,_t=$e.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Le);let Ye=Rr($e);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Tt),z.bufferData(z.PIXEL_PACK_BUFFER,ke.byteLength,z.STREAM_READ),z.readPixels(J,ne,Z,ee,Se.convert(rt),Se.convert(_t),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let ln=Y!==null?Xe.get(Y).__webglFramebuffer:null;Te.bindFramebuffer(z.FRAMEBUFFER,ln);let Qt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await o0(z,Qt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Tt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ke),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Tt),z.deleteSync(Qt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,J=null,ne=0){let Z=Math.pow(2,-ne),ee=Math.floor(R.image.width*Z),ke=Math.floor(R.image.height*Z),Ve=J!==null?J.x:0,Le=J!==null?J.y:0;Ke.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ne,0,0,Ve,Le,ee,ke),Te.unbindTexture()},this.copyTextureToTexture=function(R,J,ne=null,Z=null,ee=0,ke=0){let Ve,Le,He,$e,rt,_t,Ye,Tt,ln,Qt=R.isCompressedTexture?R.mipmaps[ke]:R.image;if(ne!==null)Ve=ne.max.x-ne.min.x,Le=ne.max.y-ne.min.y,He=ne.isBox3?ne.max.z-ne.min.z:1,$e=ne.min.x,rt=ne.min.y,_t=ne.isBox3?ne.min.z:0;else{let Ze=Math.pow(2,-ee);Ve=Math.floor(Qt.width*Ze),Le=Math.floor(Qt.height*Ze),R.isDataArrayTexture?He=Qt.depth:R.isData3DTexture?He=Math.floor(Qt.depth*Ze):He=1,$e=0,rt=0,_t=0}Z!==null?(Ye=Z.x,Tt=Z.y,ln=Z.z):(Ye=0,Tt=0,ln=0);let qt=Se.convert(J.format),I=Se.convert(J.type),C;J.isData3DTexture?(Ke.setTexture3D(J,0),C=z.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Ke.setTexture2DArray(J,0),C=z.TEXTURE_2D_ARRAY):(Ke.setTexture2D(J,0),C=z.TEXTURE_2D),Te.activeTexture(z.TEXTURE0),Te.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,J.flipY),Te.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Te.pixelStorei(z.UNPACK_ALIGNMENT,J.unpackAlignment);let se=Te.getParameter(z.UNPACK_ROW_LENGTH),ue=Te.getParameter(z.UNPACK_IMAGE_HEIGHT),Be=Te.getParameter(z.UNPACK_SKIP_PIXELS),Qe=Te.getParameter(z.UNPACK_SKIP_ROWS),wt=Te.getParameter(z.UNPACK_SKIP_IMAGES);Te.pixelStorei(z.UNPACK_ROW_LENGTH,Qt.width),Te.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Qt.height),Te.pixelStorei(z.UNPACK_SKIP_PIXELS,$e),Te.pixelStorei(z.UNPACK_SKIP_ROWS,rt),Te.pixelStorei(z.UNPACK_SKIP_IMAGES,_t);let Bt=R.isDataArrayTexture||R.isData3DTexture,Lt=J.isDataArrayTexture||J.isData3DTexture;if(R.isDepthTexture){let Ze=Xe.get(R),Rt=Xe.get(J),It=Xe.get(Ze.__renderTarget),ot=Xe.get(Rt.__renderTarget);Te.bindFramebuffer(z.READ_FRAMEBUFFER,It.__webglFramebuffer),Te.bindFramebuffer(z.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let cn=0;cn<He;cn++)Bt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.get(R).__webglTexture,ee,_t+cn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.get(J).__webglTexture,ke,ln+cn)),z.blitFramebuffer($e,rt,$e+Ve,rt+Le,Ye,Tt,Ye+Ve,Tt+Le,z.DEPTH_BUFFER_BIT,z.NEAREST);Te.bindFramebuffer(z.READ_FRAMEBUFFER,null),Te.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ee!==0||R.isRenderTargetTexture||Xe.has(R)){let Ze=Xe.get(R),Rt=Xe.get(J);Te.bindFramebuffer(z.READ_FRAMEBUFFER,E),Te.bindFramebuffer(z.DRAW_FRAMEBUFFER,D);for(let It=0;It<He;It++)Bt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ze.__webglTexture,ee,_t+It):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ze.__webglTexture,ee),Lt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.__webglTexture,ke,ln+It):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Rt.__webglTexture,ke),ee!==0?z.blitFramebuffer($e,rt,$e+Ve,rt+Le,Ye,Tt,Ye+Ve,Tt+Le,z.COLOR_BUFFER_BIT,z.NEAREST):Lt?z.copyTexSubImage3D(C,ke,Ye,Tt,ln+It,$e,rt,Ve,Le):z.copyTexSubImage2D(C,ke,Ye,Tt,$e,rt,Ve,Le);Te.bindFramebuffer(z.READ_FRAMEBUFFER,null),Te.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Lt?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(C,ke,Ye,Tt,ln,Ve,Le,He,qt,I,Qt.data):J.isCompressedArrayTexture?z.compressedTexSubImage3D(C,ke,Ye,Tt,ln,Ve,Le,He,qt,Qt.data):z.texSubImage3D(C,ke,Ye,Tt,ln,Ve,Le,He,qt,I,Qt):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ke,Ye,Tt,Ve,Le,qt,I,Qt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ke,Ye,Tt,Qt.width,Qt.height,qt,Qt.data):z.texSubImage2D(z.TEXTURE_2D,ke,Ye,Tt,Ve,Le,qt,I,Qt);Te.pixelStorei(z.UNPACK_ROW_LENGTH,se),Te.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ue),Te.pixelStorei(z.UNPACK_SKIP_PIXELS,Be),Te.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),Te.pixelStorei(z.UNPACK_SKIP_IMAGES,wt),ke===0&&J.generateMipmaps===!0&&J.mipmapsAutoUpdate===!0&&z.generateMipmap(C),Te.unbindTexture()},this.initRenderTarget=function(R){Xe.get(R).__webglFramebuffer===void 0&&Ke.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ke.setTextureCube(R,0):R.isData3DTexture?Ke.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ke.setTexture2DArray(R,0):Ke.setTexture2D(R,0),Te.unbindTexture()},this.resetState=function(){w=0,P=0,Y=null,Te.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var nt=Math.PI*2,Oe=i=>document.querySelector(i),Ct=(i,e,t)=>Math.max(e,Math.min(t,i)),An=(i,e,t)=>i+(e-i)*t,kt=(i,e,t)=>{let n=Ct((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Xt(i){let e=i>>>0;return function(){e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var z0=()=>new Promise(i=>setTimeout(i,0));var s2=[{id:"kulit",name:"Kulit luar",sci:"Periderm",col:5979434,ui:"#c8946a",ro:2.5,ri:2.28,what:"Lapisan terluar yang sebagian besar sudah mati. Dindingnya mengandung suberin sehingga kedap air.",fn:"Melindungi jaringan hidup di dalamnya dari hama, penyakit, panas, api ringan, dan hilangnya air.",fact:"Corak dan ketebalan kulit kayu berbeda pada tiap spesies, jadi sering dipakai untuk mengenali jenis pohon.",short:"Pelindung terluar, kedap air."},{id:"floem",name:"Floem",sci:"Floem sekunder (kulit dalam)",col:13482106,ui:"#e6d493",ro:2.28,ri:2,what:"Jaringan hidup tepat di bawah kulit luar. Penyusun utamanya adalah buluh tapis yang dibantu sel pendamping.",fn:"Mengangkut hasil fotosintesis, terutama sukrosa, dari daun ke akar, buah, dan bagian lain yang sedang tumbuh atau menyimpan cadangan.",fact:"Gula mengalir dari sumber (daun dewasa) ke tempat pakai atau simpan (akar, tunas, buah), jadi arahnya bisa ke bawah maupun ke atas.",short:"Jalur gula dari daun."},{id:"kambium",name:"Kambium",sci:"Kambium vaskular",col:9425258,ui:"#a6e57a",ro:2,ri:1.86,what:"Lapisan sangat tipis berisi sel yang terus membelah.",fn:"Membentuk xilem baru ke arah dalam dan floem baru ke arah luar, sehingga batang bertambah besar (pertumbuhan sekunder).",fact:"Kambium membuat batang menebal, bukan memanjang. Pertambahan tinggi terjadi di ujung tunas.",short:"Penghasil jaringan baru."},{id:"xilem",name:"Xilem aktif",sci:"Kayu gubal (sapwood)",col:14992011,ui:"#f2d3a0",ro:1.86,ri:1.2,what:"Bagian kayu yang masih berfungsi. Pembuluh dan trakeidnya adalah sel mati berdinding lignin yang tersusun menjadi pipa panjang.",fn:"Mengangkut air dan mineral dari akar ke daun, sekaligus menopang batang. Jari-jari empulur menyalurkan zat ke arah samping.",fact:"Air naik tanpa pompa. Penguapan di daun (transpirasi) menarik kolom air yang saling menempel di dalam pipa xilem. Pohon bisa mengangkat air puluhan meter, dan pada pohon tertinggi lebih dari 100 meter.",short:"Jalur air dan mineral ke daun."},{id:"teras",name:"Kayu teras",sci:"Heartwood",col:11036987,ui:"#e0925a",ro:1.2,ri:.3,what:"Xilem tua di bagian dalam yang sudah berhenti mengangkut air. Biasanya lebih gelap karena terisi resin, tanin, dan senyawa lain.",fn:"Menopang pohon dan lebih tahan terhadap pembusukan serta serangan serangga.",fact:"Pada beberapa spesies, kayu teras yang awet membuat kayunya bernilai tinggi. Pohon yang terasnya berlubang pun bisa tetap hidup selama kayu gubal dan kambiumnya sehat.",short:"Penopang, tahan lapuk."},{id:"empulur",name:"Empulur",sci:"Pith",col:15918793,ui:"#f6ecd2",ro:.3,ri:0,what:"Jaringan lunak di pusat batang, sisa dari tahap awal ketika batang masih muda.",fn:"Pada batang muda menyimpan cadangan makanan. Pada pohon tua ukurannya kecil dan sering tidak lagi aktif.",fact:"Cincin tahun tersusun mengelilingi empulur. Makin ke tengah, makin tua umurnya.",short:"Pusat batang yang lunak."}],a2=[{id:"jati",name:"Pohon Jati",short:"jati",sci:"Tectona grandis",family:"Lamiaceae",x:8,z:-8,fact:"Jati meranggas (menggugurkan daun) di musim kemarau dan bertunas lagi saat musim hujan. Kayunya terkenal awet dan banyak dipakai untuk mebel dan konstruksi.",notes:{kulit:"Kulit jati cokelat keabu-abuan, tipis, dan mengelupas memanjang berserat.",xilem:"Jati termasuk kayu berpori cincin: pembuluh besar yang terbentuk di awal musim tumbuh membuat cincin tahunnya jelas.",teras:"Teras jati berwarna cokelat keemasan dan mengandung minyak serta senyawa seperti tektokuinon yang membuatnya tahan rayap dan jamur."},wood:{bark:"oak",barkTint:14207152,rings:14,contrast:.34,pores:"ring",rays:.07,cortex:[.8,.7,.46],sapE:[.93,.82,.58],sapL:[.76,.58,.34],heartE:[.72,.48,.22],heartL:[.46,.27,.11],pith:[.9,.82,.66]}},{id:"mahoni",name:"Pohon Mahoni",short:"mahoni",sci:"Swietenia mahagoni",family:"Meliaceae",x:-10,z:-4,fact:"Mahoni berasal dari Amerika tropis dan didatangkan ke Indonesia pada masa kolonial. Banyak ditanam sebagai pohon peneduh di tepi jalan. Buahnya berupa kapsul berkayu yang pecah menjadi lima bagian dan melepas biji bersayap.",notes:{kulit:"Kulit mahoni cokelat tua keabu-abuan, bersisik dengan alur dangkal.",xilem:"Pori kayu mahoni tersebar merata (berpori baur), tidak mengelompok membentuk cincin seperti pada jati.",teras:"Teras mahoni cokelat kemerahan dan makin gelap seiring umur. Seratnya halus, jadi kayunya dihargai untuk mebel."},wood:{bark:"oak",barkTint:10125424,rings:11,contrast:.2,pores:"diffuse",rays:.06,cortex:[.78,.64,.44],sapE:[.9,.72,.52],sapL:[.78,.56,.38],heartE:[.66,.34,.2],heartL:[.44,.19,.1],pith:[.88,.76,.62]}},{id:"beringin",name:"Pohon Beringin",short:"beringin",sci:"Ficus benjamina",family:"Moraceae",x:13,z:9,fact:"Beringin bisa memulai hidup menumpang di pohon lain. Akar gantungnya turun ke tanah, menebal, lalu menjadi batang tambahan. Beringin termasuk marga Ficus, yang getahnya putih seperti susu (lateks).",notes:{kulit:"Kulit beringin halus dan berwarna abu-abu terang.",floem:"Getah putih beringin (lateks) berasal dari sel khusus penghasil lateks yang tersebar di jaringan kulit dan daun.",xilem:"Kayu beringin relatif lunak dan ringan, jarang dipakai sebagai kayu konstruksi."},wood:{bark:"birch",barkTint:11840156,rings:8,contrast:.1,pores:"diffuse",rays:.05,cortex:[.86,.82,.62],sapE:[.94,.89,.74],sapL:[.88,.8,.62],heartE:[.84,.74,.54],heartL:[.74,.62,.42],pith:[.94,.9,.78]}},{id:"pinus",name:"Pinus Merkusii",short:"pinus",sci:"Pinus merkusii",family:"Pinaceae",x:-18,z:-24,fact:"Pinus merkusii adalah satu-satunya jenis pinus alami yang tumbuh sampai ke selatan garis khatulistiwa, yaitu di Sumatra. Di Jawa banyak ditanam, dan getahnya disadap untuk diolah menjadi gondorukem dan terpentin.",notes:{kulit:"Kulit pinus merkusii tebal, beralur dalam, dan cokelat kemerahan.",floem:"Getah pinus keluar dari saluran resin saat batang dilukai. Getah itu diolah menjadi gondorukem dan terpentin.",xilem:"Kayu pinus tersusun hampir seluruhnya dari trakeid, tanpa pembuluh berpori besar seperti pada jati. Saluran resin tersebar di dalamnya.",teras:"Teras pinus lebih gelap dan banyak mengandung resin."},wood:{bark:"pine",barkTint:14729384,rings:19,contrast:.46,pores:"resin",rays:.04,cortex:[.82,.66,.42],sapE:[.96,.86,.62],sapL:[.82,.6,.34],heartE:[.86,.62,.34],heartL:[.62,.36,.16],pith:[.92,.82,.62]}},{id:"trembesi",name:"Pohon Trembesi",short:"trembesi",sci:"Samanea saman",family:"Fabaceae",x:26,z:-10,fact:"Trembesi berasal dari Amerika tropis. Tajuknya lebar seperti payung dan bisa lebih lebar daripada tingginya. Daun majemuknya melipat saat malam atau mendung.",notes:{kulit:"Kulit trembesi cokelat tua keabu-abuan, kasar, dan beralur.",xilem:"Kayu trembesi bercorak serat indah dan sering dipakai untuk meja dan ukiran.",teras:"Teras trembesi berwarna cokelat tua dengan corak garis yang lebih gelap."},wood:{bark:"oak",barkTint:9074792,rings:9,contrast:.16,pores:"diffuse",rays:.05,cortex:[.8,.7,.48],sapE:[.88,.78,.58],sapL:[.76,.62,.42],heartE:[.52,.34,.2],heartL:[.3,.18,.1],pith:[.88,.8,.66]}}],r2=[{id:"q1",q:"Jaringan mana yang mengangkut air dan mineral dari akar ke daun?",o:["Xilem","Floem","Kambium","Empulur"],a:0,e:"Xilem tersusun dari sel mati berdinding lignin yang membentuk pipa. Air bergerak naik karena tarikan penguapan di daun."},{id:"q2",q:"Apa yang terutama diangkut oleh floem?",o:["Air dan mineral dari tanah","Gula hasil fotosintesis dari daun ke bagian lain","Gas oksigen ke akar","Klorofil ke daun muda"],a:1,e:"Floem membawa sukrosa dari tempat dibuatnya (daun dewasa) ke tempat dipakai atau disimpan, misalnya akar, tunas, dan buah."},{id:"q3",q:"Lapisan mana yang membelah dan membentuk xilem baru ke arah dalam serta floem baru ke arah luar?",o:["Kulit luar","Kayu teras","Kambium","Empulur"],a:2,e:"Kambium vaskular membuat batang menebal. Xilem baru menumpuk di sisi dalamnya, floem baru di sisi luarnya."},{id:"q4",q:"Di daerah yang punya musim jelas, mengapa penampang batang menunjukkan cincin tahun?",o:["Floem menumpuk satu lapis setiap tahun","Sel xilem yang dibentuk di awal dan akhir musim tumbuh berbeda ukuran dan tebal dindingnya","Kulit luar mengelupas setiap tahun","Kambium berhenti bekerja setelah setahun"],a:1,e:"Pada awal musim tumbuh sel xilem besar dan berdinding tipis, di akhir musim kecil dan berdinding tebal. Perbedaan itu tampak sebagai cincin."},{id:"q5",q:"Kulit pohon dikelupas melingkar sampai ke kayu (girdling). Apa dampaknya dalam jangka panjang?",o:["Gula tidak bisa turun ke akar sehingga pohon perlahan mati","Air langsung berhenti naik dan semua daun gugur dalam sehari","Pohon tumbuh makin tinggi","Tidak ada dampak apa pun"],a:0,e:"Floem ikut terkelupas, jadi gula dari daun tidak sampai ke akar. Xilem masih mengangkut air untuk sementara, tetapi akar yang kelaparan akhirnya membuat pohon mati."},{id:"s-jati1",sp:"jati",q:"Mengapa kayu teras jati awet dan tahan rayap?",o:["Mengandung minyak dan senyawa pelindung seperti tektokuinon","Terisi penuh oleh air","Tidak punya xilem sama sekali","Kulitnya sangat tebal"],a:0,e:"Senyawa dan minyak di kayu teras jati membuatnya tahan jamur dan rayap, itu sebabnya jati awet."},{id:"s-jati2",sp:"jati",q:'Apa arti jati "meranggas"?',o:["Menggugurkan daun saat musim kering","Tumbuh tanpa akar","Mengeluarkan getah putih","Berbuah sepanjang tahun"],a:0,e:"Jati menggugurkan daunnya di musim kemarau untuk mengurangi penguapan, lalu bertunas lagi saat hujan datang."},{id:"s-mahoni1",sp:"mahoni",q:"Dari mana asal mahoni yang banyak ditanam di Indonesia?",o:["Amerika tropis","Eropa utara","Gurun Australia","Afrika bagian selatan"],a:0,e:"Mahoni didatangkan dari Amerika tropis pada masa kolonial dan kini banyak ditanam sebagai pohon peneduh."},{id:"s-mahoni2",sp:"mahoni",q:"Bagian mahoni mana yang pecah menjadi lima bagian dan melepas biji bersayap?",o:["Buahnya (kapsul berkayu)","Kulit kayunya","Akarnya","Empulurnya"],a:0,e:"Buah mahoni berupa kapsul berkayu. Saat matang ia terbelah dan biji bersayapnya terbawa angin."},{id:"s-bering1",sp:"beringin",q:"Cairan putih seperti susu yang keluar dari luka beringin disebut apa?",o:["Lateks","Klorofil","Sukrosa","Lignin"],a:0,e:"Lateks dihasilkan sel khusus pada tumbuhan marga Ficus. Fungsinya antara lain menutup luka dan menolak pemangsa."},{id:"s-bering2",sp:"beringin",q:"Akar gantung beringin yang sampai ke tanah lama-kelamaan akan...",o:["Menebal dan menjadi batang tambahan","Mati seketika","Berubah menjadi daun","Berhenti tumbuh selamanya"],a:0,e:"Akar gantung yang menjangkau tanah ikut menyerap air dan menebal, sehingga tampak seperti batang tambahan."},{id:"s-pinus1",sp:"pinus",q:"Kayu pinus tersusun hampir seluruhnya dari sel panjang yang mengangkut air sekaligus menopang. Apa namanya?",o:["Trakeid","Stomata","Kambium","Lateks"],a:0,e:"Konifer seperti pinus tidak punya pembuluh berpori besar. Trakeid menjalankan tugas mengangkut air dan menopang batang."},{id:"s-pinus2",sp:"pinus",q:"Getah pinus yang disadap diolah menjadi apa?",o:["Gondorukem dan terpentin","Minyak kayu putih","Karet alam","Serat kapas"],a:0,e:"Resin pinus disuling menjadi gondorukem (padat) dan terpentin (cair), yang dipakai pada cat, perekat, dan industri lain."},{id:"s-tremb1",sp:"trembesi",q:"Bentuk tajuk trembesi paling mirip apa?",o:["Payung yang lebar","Kerucut sempit","Tiang lurus","Bola kecil"],a:0,e:"Cabang trembesi menyebar ke samping sehingga tajuknya lebar seperti payung dan teduh."},{id:"s-tremb2",sp:"trembesi",q:"Banyak anggota keluarga kacang-kacangan (Fabaceae), termasuk trembesi, punya bintil akar. Apa fungsinya?",o:["Bersimbiosis dengan bakteri pengikat nitrogen","Menyerap garam laut","Menghasilkan listrik","Menyimpan air untuk setahun"],a:0,e:"Bakteri di bintil akar mengubah nitrogen udara menjadi bentuk yang bisa dipakai tumbuhan, sehingga tanah ikut subur."}],uu={id:"pohon",name:"Pohon",layers:s2,specimens:a2,quiz:r2};var J0="./dist/assets/grass-CMLLWMRR.jpg";var Us="./dist/assets/dirt_color-XQ4XPJKX.jpg";var Bs="./dist/assets/dirt_normal-OTHNHK75.jpg";var sn=-1.4,Hs=240,j0=220,zn={x:-34,z:26,r:15},hu={x:0,z:2};function u2(i,e){return Math.sin(i*.045+1.3)*Math.cos(e*.038)*2+Math.sin(i*.1+e*.08)*.5+Math.cos(i*.02-e*.03)*1.5}function hn(i,e){let t=u2(i,e);t*=kt(9,26,Math.hypot(i,e));let n=Math.hypot(i-zn.x,e-zn.z);return n<zn.r+9&&(t=An(t,-3.3,1-kt(zn.r*.3,zn.r+9,n))),t}function h2(i,e){let t=Math.sin(i*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)}var Yo=[];function W0(i){Yo.length=0,i.forEach((e,t)=>{let n=e.x-hu.x,s=e.z-hu.z,a=Math.hypot(n,s);Yo.push({ax:hu.x,az:hu.z,bx:e.x,bz:e.z,L:a,dx:n/a,dz:s/a,seed:t*1.7+.3})})}function hr(i,e){let t=1e9;for(let n of Yo){let s=i-n.ax,a=e-n.az,r=Ct((s*n.dx+a*n.dz)/n.L,0,1),o=Math.sin(r*n.L*.17+n.seed)*1.3*Math.sin(Math.PI*r),l=n.ax+n.dx*r*n.L-n.dz*o,c=n.az+n.dz*r*n.L+n.dx*o;t=Math.min(t,Math.hypot(i-l,e-c))}return t}var du=1.25,fu={uTime:{value:0}},Dd=`
float tS(float a,float b,float x){ float t=clamp((x-a)/(b-a),0.,1.); return t*t*(3.-2.*t); }
float tBase(vec2 p){ return sin(p.x*0.045+1.3)*cos(p.y*0.038)*2.0 + sin(p.x*0.1+p.y*0.08)*0.5 + cos(p.x*0.02-p.y*0.03)*1.5; }
float tHeight(vec2 p){ float h=tBase(p)*tS(9.,26.,length(p)); float dl=length(p-vec2(${zn.x}.,${zn.z}.)); if(dl<${zn.r+9}.) h=mix(h,-3.3,1.-tS(${zn.r*.3},${zn.r+9}.,dl)); return h; }
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
`;function K0(){let i=[],e=[];for(let t=0;t<8;t++){let n=Yo[t];i.push(n?new Nt(n.ax,n.az,n.dx,n.dz):new Nt),e.push(n?new k(n.L,n.seed,0):new k(1,0,0))}return{uPath:{value:i},uPathP:{value:e},uPathN:{value:Yo.length}}}function kd(i,e,t){let n=new Un().load(i);return n.wrapS=n.wrapT=Yt,n.anisotropy=8,e&&(n.colorSpace=gt),t&&n.repeat.set(t,t),n}function Z0(i){let e=new ks(Hs,Hs,j0,j0);e.rotateX(-Math.PI/2);let t=e.attributes.position,n=t.count,s=new Float32Array(n*3),a=new Float32Array(n*2),r=new fe,o=new Float32Array(n);for(let f=0;f<n;f++){let p=hn(t.getX(f),t.getZ(f));o[f]=p,t.setY(f,p)}for(let f=0;f<n;f++){let p=t.getX(f),x=t.getZ(f),g=o[f],m=.8,y=hn(p+m,x)-hn(p-m,x),_=hn(p,x+m)-hn(p,x-m),M=Math.hypot(y,_)/(2*m),S=Math.sin(p*.07+1.3)*Math.sin(x*.06)*.5+.5,T=Math.sin(p*.31)*Math.sin(x*.27+2)*.5+.5,b=kt(.28,.6,M)+kt(.78,.95,T)*.45;b=Math.max(b,1-kt(du*.45,du*1.05,hr(p,x)));let v=1-kt(sn+.1,sn+.75,g);a[f*2]=Ct(b,0,1)*(1-v),a[f*2+1]=v,r.setRGB(.8+S*.28,.9+S*.22-T*.05,.62+S*.14),r.multiplyScalar((.92+h2(p,x)*.16)*1.9),s[f*3]=r.r,s[f*3+1]=r.g,s[f*3+2]=r.b}e.setAttribute("color",new lt(s,3)),e.setAttribute("aMix",new lt(a,2)),e.computeVertexNormals();let l=kd(J0,!0,Hs/4.5),c=kd(Us,!0,1),u=kd(Bs,!1,Hs/4.5),h=new et({map:l,normalMap:u,normalScale:new pe(.55,.55),vertexColors:!0,roughness:.96,metalness:0});h.onBeforeCompile=f=>{f.uniforms.uDirt={value:c},f.uniforms.uTime=fu.uTime,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
        { float uw = ${sn.toFixed(2)} - vWPt.y;            // dasar danau: lebih gelap-kehijauan + kaustik
          if (uw > 0.0) {
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.45, 0.68, 0.64), clamp(uw * 0.55, 0.0, 1.0));
            diffuseColor.rgb += caust(vWPt.xz * 1.6, uTime) * 0.12 * exp(-uw * 0.35) * vec3(0.75, 1.0, 0.92);
          } }`)};let d=new we(e,h);return d.receiveShadow=!0,i.add(d),d}function d2(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=new Float32Array(256*256),a=[[3,2,1,0],[5,-4,.7,1.3],[-7,6,.45,2.1],[11,9,.28,.7],[-14,5,.2,3.3]];for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=0;for(let u of a)c+=Math.sin((l*u[0]+o*u[1])/256*nt+u[3])*u[2];s[o*256+l]=c}for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=s[o*256+(l+1)%256]-s[o*256+(l+256-1)%256],u=s[(o+1)%256*256+l]-s[(o+256-1)%256*256+l],h=-c*.5,d=-u*.5,f=1,p=Math.hypot(h,d,f);h/=p,d/=p,f/=p;let x=(o*256+l)*4;n.data[x]=(h*.5+.5)*255,n.data[x+1]=(d*.5+.5)*255,n.data[x+2]=(f*.5+.5)*255,n.data[x+3]=255}t.putImageData(n,0,0);let r=new _n(e);return r.wrapS=r.wrapT=Yt,r.repeat.set(Hs/7,Hs/7),r.anisotropy=8,r}function em(i){let e=d2();e.repeat.set(1,1);let t=Array.from({length:8},()=>new Nt(0,0,-99,0)),n=0,s={uTime:{value:0},uWN:{value:e},uRip:{value:t}},a=new et({color:16777215,roughness:.05,metalness:0,transparent:!0,depthWrite:!1,envMapIntensity:1.5,side:$t});a.onBeforeCompile=o=>{Object.assign(o.uniforms,s),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position,1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWP; uniform float uTime; uniform sampler2D uWN; uniform vec4 uRip[8];
        vec3 ripple(vec2 p){ vec3 o = vec3(0.0);
          for (int i = 0; i < 8; i++) { float age = uTime - uRip[i].z; if (age < 0.0 || age > 3.0) continue;
            vec2 dv = p - uRip[i].xy; float d = length(dv) + 1e-4, R = 0.25 + age * 1.25;
            float w = exp(-pow((d - R) * 4.0, 2.0)) * (1.0 - age / 3.0) * uRip[i].w;
            o.xy += dv / d * sin((d - R) * 22.0) * w * 1.6; o.z += w; }
          return o; }
        ${Dd}
        vec3 wNorm(vec2 p){
          vec3 a = texture2D(uWN, p/7.0 + vec2(uTime*0.020, uTime*0.012)).xyz*2.-1.;
          vec3 b = texture2D(uWN, vec2(p.y,-p.x)/3.1 + vec2(-uTime*0.028, uTime*0.019)).xyz*2.-1.;
          vec3 c = texture2D(uWN, p/1.7 + vec2(uTime*0.05, -uTime*0.04)).xyz*2.-1.;
          vec3 r = ripple(p);
          return vec3(a.xy*0.55 + b.xy*0.45 + c.xy*0.22 + r.xy, r.z);
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        float wd = ${sn.toFixed(2)} - tHeight(vWP.xz);   // kedalaman air di titik ini (m)
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
          normal = normalize((viewMatrix * vec4(nW * (gl_FrontFacing ? 1.0 : -1.0), 0.0)).xyz); }`)};let r=new we(new ks(Hs,Hs),a);return r.rotation.x=-Math.PI/2,r.position.y=sn,r.userData.noAO=!0,i.add(r),{mesh:r,update(o){s.uTime.value=o,fu.uTime.value=o},ripple(o,l,c){t[n].set(o,l,s.uTime.value,c),n=(n+1)%t.length}}}var f2=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  gl_Position.z = gl_Position.w; // selalu di bidang jauh
}`,p2=`
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
}`;function tm(){return{uZenith:{value:new fe},uHorizon:{value:new fe},uBelow:{value:new fe},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new fe},uCloudLit:{value:new fe},uCloudDark:{value:new fe},uTime:{value:0},uCloud:{value:.8},uSunDisc:{value:1}}}function nm(i,e){let t=new we(new Cn(e,48,32),new Kt({uniforms:i,vertexShader:f2,fragmentShader:p2,side:Sn,depthWrite:!1,fog:!1}));return t.frustumCulled=!1,t.renderOrder=-10,t.userData.noAO=!0,t}var dr=(i,e,t)=>new fe().setRGB(i,e,t,Mn),im={z:dr(.003,.007,.024),h:dr(.012,.024,.06)},sm={z:dr(.05,.2,.58),h:dr(.5,.66,.84)},am={z:dr(.06,.12,.3),h:dr(1.05,.4,.17)},rm=new fe;function om(i,e){let t=tm(),n=nm(t,900);i.add(n);let s=tm();s.uCloud.value=0,s.uSunDisc.value=.35;let a=new Wn;a.add(nm(s,50));let r=new Mi(e),o=null,l=(()=>{let y=Xt(5),_=700,M=new Float32Array(_*3);for(let b=0;b<_;b++){let v=y()*nt,F=y()*.95+.05,L=Math.sqrt(1-F*F);M[b*3]=Math.cos(v)*L*800,M[b*3+1]=F*800,M[b*3+2]=Math.sin(v)*L*800}let S=new dt;S.setAttribute("position",new lt(M,3));let T=new Kn(S,new Yn({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));return T.frustumCulled=!1,T.userData.noAO=!0,i.add(T),T})(),c=new we(new Cn(18,24,16),new on({color:new fe(2.2,2.3,2.6),fog:!1,toneMapped:!0}));c.userData.noAO=!0,i.add(c);let u=new wn(16777215,3);u.castShadow=!0;let h=u.shadow.camera;h.left=-42,h.right=42,h.top=42,h.bottom=-42,h.near=1,h.far=320,u.shadow.bias=-4e-4,u.shadow.normalBias=.05,i.add(u),i.add(u.target);let d=new wn(8361432,0);i.add(d),i.fog=new Qr(11189196,.0155);let f=new k,p=99,x=9,g=!1,m={sun:u,sunDir:f,day:1,elev:1,get isNight(){return g},envEvery:2.5,setShadowSize(y){u.shadow.mapSize.x!==y&&(u.shadow.mapSize.set(y,y),u.shadow.map&&(u.shadow.map.dispose(),u.shadow.map=null))},update(y,_,M,S,T){let b=(y-.25)*nt,v=Math.sin(b),F=kt(-.12,.3,v),L=Math.exp(-Math.pow(v/.2,2));m.day=F,m.elev=v,f.set(Math.cos(b)*.8,v,.45).normalize();for(let P of[t,s])P.uZenith.value.copy(im.z).lerp(sm.z,F).lerp(am.z,L*.5),P.uHorizon.value.copy(im.h).lerp(sm.h,F).lerp(am.h,L*.75),P.uSunDir.value.copy(f),P.uSunColor.value.setRGB(1,.62+.38*kt(0,.5,v),.38+.62*kt(0,.6,v)).multiplyScalar(kt(-.1,.08,v)),P.uCloudLit.value.setRGB(An(.03,.95,F),An(.04,.96,F),An(.07,1,F)).lerp(rm.setRGB(1.3,.62,.38),L*.65),P.uCloudDark.value.copy(P.uCloudLit.value).multiplyScalar(.5).lerp(rm.setRGB(.05,.08,.16),.25),P.uTime.value=_;s.uBelow.value.setRGB(.05,.07,.03).multiplyScalar(.15+.85*F),t.uBelow.value.copy(t.uHorizon.value),i.fog.color.copy(t.uHorizon.value),T?(i.fog.color.setRGB(.012,.06,.065).multiplyScalar(.25+.75*F),i.fog.density=.11,n.visible=!1,l.visible=!1,c.visible=!1,i.background=i.fog.color):(i.fog.density=.0155,n.visible=!0,l.visible=!0,i.background=null),i.environmentIntensity=.42+.85*F;let G=S.x,q=S.y,U=S.z;n.position.set(G,q,U),l.position.set(G,0,U),l.material.opacity=Math.pow(1-F,2)*.95,c.position.set(G-f.x*700,q-f.y*700,U-f.z*700),c.visible=v<.1&&!T;let E=Math.round(G*2)/2,D=Math.round(U*2)/2;u.position.set(E+f.x*120,q+f.y*120,D+f.z*120),u.target.position.set(E,q,D),u.target.updateMatrixWorld(),u.intensity=6*kt(-.02,.28,v),u.color.setRGB(1,.72+.28*kt(0,.5,v),.5+.5*kt(0,.6,v)),u.castShadow=v>.01,d.intensity=.95*(1-F),d.position.set(G-f.x*100,q-f.y*100+20,U-f.z*100);let w=F<.25;w!==g&&(g=w),p+=M,p>m.envEvery&&Math.abs(v-x)>.002&&(p=0,x=v,m.refreshEnv(i))},refreshEnv(y){let _=r.fromScene(a,0,.1,100,{size:128});o&&o.dispose(),o=_,y.environment=_.texture}};return m}function Gs(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),a={},r={},o=i[0].morphTargetsRelative,l=new dt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0,f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in a){let h=lm(a[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in r){let h=r[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<r[u].length;++x)f.push(r[u][x][d]);let p=lm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function lm(i){let e,t,n,s=-1,a=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.count*t}let r=new e(a),o=new lt(r,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);o.setComponent(d+h,p,x)}}else r.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function Nd(i,e){if(e===nd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===lr||e===Go){let t=i.getIndex();if(t===null){let a=[],r=i.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)a.push(o);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===lr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function cm(i){let e=new Map,t=new Map,n=i.clone();return um(i,n,function(s,a){e.set(a,s),t.set(s,a)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let a=s,r=e.get(s),o=r.skeleton.bones;a.skeleton=r.skeleton.clone(),a.bindMatrix.copy(r.bindMatrix),a.skeleton.bones=o.map(function(l){return t.get(l)}),a.bind(a.skeleton,a.bindMatrix)}),n}function um(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)um(i.children[n],e.children[n],t)}var pu=class extends xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Od(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new mu(t,At.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new mu(t,At.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new nf(t)})}load(e,t,n,s){let a=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let c=hi.extractUrlBase(e);r=hi.resolveURL(c,this.path)}else r=hi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),a.manager.itemError(e),a.manager.itemEnd(e)},l=new us(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{a.parse(c,r,function(u){t(u),a.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let a,r={},o={},l=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mm){try{r[At.KHR_BINARY_GLTF]=new sf(e)}catch(h){s&&s(h);return}a=JSON.parse(r[At.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new hf(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,r[h.name]=!0}if(a.extensionsUsed)for(let u=0;u<a.extensionsUsed.length;++u){let h=a.extensionsUsed[u],d=a.extensionsRequired||[];switch(h){case At.KHR_MATERIALS_UNLIT:r[h]=new Gd;break;case At.KHR_DRACO_MESH_COMPRESSION:r[h]=new af(a,this.dracoLoader);break;case At.KHR_TEXTURE_TRANSFORM:r[h]=new rf;break;case At.KHR_MESH_QUANTIZATION:r[h]=new of;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,a){n.parse(e,t,s,a)})}};function m2(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function dn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var At={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Hd=class{constructor(e){this.parser=e,this.name=At.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],c,u=new fe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Mn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new wn(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new aa(u),c.distance=h;break;case"spot":c=new yo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Gd=class{constructor(){this.name=At.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){let s=[];e.color=new fe(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Mn),e.opacity=r[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",a.baseColorTexture,gt))}return Promise.all(s)}},qd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Od=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let a=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(a,a)}return Promise.all(s)}},Xd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Vd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_DISPERSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Yd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},$d=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SHEEN}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let a=n.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Mn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,gt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Qd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},zd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_VOLUME}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let a=n.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(a[0],a[1],a[2],Mn),Promise.all(s)}},Jd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IOR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},jd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SPECULAR}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let a=n.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(a[0],a[1],a[2],Mn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,gt)),Promise.all(s)}},Wd=class{constructor(e){this.parser=e,this.name=At.EXT_MATERIALS_BUMP}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Kd=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return dn(this.parser,e,this.name)!==null?Zt:null}extendMaterialParams(e,t){let n=dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Zd=class{constructor(e){this.parser=e,this.name=At.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let a=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}},ef=class{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;let r=a.extensions[t],o=s.images[r.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,r.source,l)}},tf=class{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;let r=a.extensions[t],o=s.images[r.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,r.source,l)}},mu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):r.ready.then(function(){let f=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},nf=class{constructor(e){this.name=At.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=n.extensions[this.name].attributes,o=[],l={};for(let c in r)o.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let x=new je,g=new k,m=new Pt,y=new k(1,1,1),_=new Pn(p.geometry,p.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,S),l.SCALE&&y.fromBufferAttribute(l.SCALE,S),_.setMatrixAt(S,x.compose(g,m,y));let M=null;for(let S in l)if(S==="_COLOR_0"){let T=l[S];_.instanceColor=new Pi(T.array,T.itemSize,T.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(M===null){let b=_.geometry;M=new dt,M.name=b.name;for(let v in b.attributes)M.setAttribute(v,b.attributes[v]);for(let v in b.morphAttributes)M.morphAttributes[v]=b.morphAttributes[v];b.index!==null&&M.setIndex(b.index),M.morphTargetsRelative=b.morphTargetsRelative;for(let v of b.groups)M.addGroup(v.start,v.count,v.materialIndex);b.boundingBox!==null&&(M.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(M.boundingSphere=b.boundingSphere.clone()),M.drawRange.start=b.drawRange.start,M.drawRange.count=b.drawRange.count,M.userData=Object.assign({},b.userData),_.geometry=M}let T=l[S];M.setAttribute(S,new Pi(T.array,T.itemSize,T.normalized))}Ot.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},mm="glTF",$o=12,hm={JSON:1313821514,BIN:5130562},sf=class{constructor(e){this.name=At.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,$o),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-$o,a=new DataView(e,$o),r=0;for(;r<s;){let o=a.getUint32(r,!0);r+=4;let l=a.getUint32(r,!0);if(r+=4,l===hm.JSON){let c=new Uint8Array(e,$o+r,o);this.content=n.decode(c)}else if(l===hm.BIN){let c=$o+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},af=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=At.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(let u in r){let h=cf[u]||u.toLowerCase();o[h]=r[u]}for(let u in e.attributes){let h=cf[u]||u.toLowerCase();if(r[u]!==void 0){let d=n.accessors[e.attributes[u]],f=fr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let x=f.attributes[p],g=l[p];g!==void 0&&(x.normalized=g)}h(f)},o,c,Mn,d)})})}},rf=class{constructor(){this.name=At.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},of=class{constructor(){this.name=At.KHR_MESH_QUANTIZATION}},gu=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let r=0;r!==s;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,x=p-c,g=-2*f+3*d,m=f-d,y=1-g,_=m-d+h;for(let M=0;M!==o;M++){let S=r[x+M+o],T=r[x+M+l]*u,b=r[p+M+o],v=r[p+M]*u;a[M]=y*S+_*T+g*b+m*v}return a}},g2=new Pt,lf=class extends gu{interpolate_(e,t,n,s){let a=super.interpolate_(e,t,n,s);return g2.fromArray(a).normalize().toArray(a),a}},vi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dm={9728:an,9729:yn,9984:yc,9985:rr,9986:ua,9987:ri},fm={33071:mi,33648:qa,10497:Yt},Cd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},b2={CUBICSPLINE:void 0,LINEAR:ea,STEP:Zs},Ud={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function x2(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new et({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qi})),i.DefaultMaterial}function fa(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function y2(i,e,t){let n=!1,s=!1,a=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(i);let r=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;r.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(a){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),a&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function M2(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function v2(i){let e,t=i.extensions&&i.extensions[At.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bd(t.attributes):e=i.indices+":"+Bd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Bd(i.targets[n]);return e}function Bd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function uf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _2(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var S2=new je,hf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new m2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,a=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||a&&r<98?(this.textureLoader=new Un(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new vo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new us(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){let o={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:n,userData:{}};return fa(a,o,s),Yi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){let r=t[s].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let s=0,a=e.length;s<a;s++){let r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),a=(r,o)=>{let l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(let[c,u]of r.children.entries())a(u,o.children[c])};return a(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let a=e(t[s]);a&&n.push(a)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[At.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(a,r){n.load(hi.resolveURL(t.uri,s.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let r=Cd[s.type],o=fr[s.componentType],l=s.normalized===!0,c=new o(s.count*r);return Promise.resolve(new lt(c,r,l))}let a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(r){let o=r[0],l=Cd[s.type],c=fr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(f&&f!==h){let m=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(y);_||(x=new c(o,m*f,s.count*f/u),_=new As(x,f/u),t.cache.add(y,_)),g=new Rs(_,l,d%f/u,p)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),g=new lt(x,l,p);if(s.sparse!==void 0){let m=Cd.SCALAR,y=fr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,S=new y(r[1],_,s.sparse.count*m),T=new c(r[2],M,s.sparse.count*l);o!==null&&(g=new lt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let b=0,v=S.length;b<v;b++){let F=S[b];if(g.setX(F,T[b*l]),l>=2&&g.setY(F,T[b*l+1]),l>=3&&g.setZ(F,T[b*l+2]),l>=4&&g.setW(F,T[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a],o=this.textureLoader;if(r.uri){let l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){let s=this,a=this.json,r=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(a.samplers||{})[r.sampler]||{};return u.magFilter=dm[d.magFilter]||yn,u.minFilter=dm[d.minFilter]||ri,u.wrapS=fm[d.wrapS]||Yt,u.wrapT=fm[d.wrapT]||Yt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==an&&u.minFilter!==yn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let r=s.images[e],o=self.URL||self.webkitURL,l=r.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&r.bufferView!==void 0)u=n.getDependency("bufferView",r.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:r.mimeType});return l=o.createObjectURL(f),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let x=f;t.isImageBitmapLoader===!0&&(x=function(g){let m=new vn(g);m.needsUpdate=!0,f(m)}),t.load(hi.resolveURL(d,a.path),x,void 0,p)})})}let h=u.then(function(d){return c===!0&&o.revokeObjectURL(l),Yi(d,r),d.userData.mimeType=r.mimeType||_2(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[At.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[At.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=a.associations.get(r);r=a.extensions[At.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,l)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Yn,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ls,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||a||r){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),a&&(l.vertexColors=!0),r&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return et}loadMaterial(e){let t=this,n=this.json,s=this.extensions,a=n.materials[e],r,o={},l=a.extensions||{},c=[];if(l[At.KHR_MATERIALS_UNLIT]){let h=s[At.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(o,a,t))}else{let h=a.pbrMetallicRoughness||{};if(o.color=new fe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Mn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,gt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=$t);let u=a.alphaMode||Ud.OPAQUE;if(u===Ud.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ud.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==on&&(c.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new pe(1,1),a.normalTexture.scale!==void 0)){let h=a.normalTexture.scale;o.normalScale.set(h,h)}if(a.occlusionTexture!==void 0&&r!==on&&(c.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==on){let h=a.emissiveFactor;o.emissive=new fe().setRGB(h[0],h[1],h[2],Mn)}return a.emissiveTexture!==void 0&&r!==on&&c.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,gt)),Promise.all(c).then(function(){let h=new r(o);return a.name&&(h.name=a.name),Yi(h,a),t.associations.set(h,{materials:e}),a.extensions&&fa(s,h,a),h})}createUniqueName(e){let t=Jt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function a(o){return n[At.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return pm(l,o,t)})}let r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=v2(c),h=s[u];if(h)r.push(h.promise);else{let d;c.extensions&&c.extensions[At.KHR_DRACO_MESH_COMPRESSION]?d=a(c):d=pm(new dt,c,t),c.mode===vi.TRIANGLE_STRIP?d=d.then(f=>Nd(f,Go)):c.mode===vi.TRIANGLE_FAN&&(d=d.then(f=>Nd(f,lr))),s[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){let t=this,n=this.json,s=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let l=0,c=r.length;l<c;l++){let u=r[l].material===void 0?x2(this.cache):this.getDependency("material",r[l].material);o.push(u)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let x=u[f],g=r[f],m,y=c[f];if(g.mode===vi.TRIANGLES||g.mode===vi.TRIANGLE_STRIP||g.mode===vi.TRIANGLE_FAN||g.mode===void 0){let _=a.isSkinnedMesh===!0,M=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");_&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=_&&M?new jr(x,y):new we(x,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===vi.LINES)m=new ia(x,y);else if(g.mode===vi.LINE_STRIP)m=new na(x,y);else if(g.mode===vi.LINE_LOOP)m=new Kr(x,y);else if(g.mode===vi.POINTS)m=new Kn(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&M2(m,a),m.name=t.createUniqueName(a.name||"mesh_"+e),Yi(m,a),g.extensions&&fa(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return a.extensions&&fa(s,h[0],a),h[0];let d=new jt;a.extensions&&fa(s,d,a),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(su.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new hs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,a=t.joints.length;s<a;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let a=s.pop(),r=s,o=[],l=[];for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h){o.push(h);let d=new je;a!==null&&d.fromArray(a.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Wr(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,r=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],x=f.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(x))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],x=h[3],g=h[4],m=[];for(let _=0,M=d.length;_<M;_++){let S=d[_],T=f[_],b=p[_],v=x[_],F=g[_];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let L=n._createAnimationTracks(S,T,b,v,F);if(L)for(let G=0;G<L.length;G++)m.push(L[G])}let y=new bo(a,void 0,m);return Yi(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){let r=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),r})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)r.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(r),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,S2)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new k().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],r=a.name?s.createUniqueName(a.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(s.getDependency("camera",a.camera).then(function(c){return s._getNodeRef(s.cameraCache,a.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(a.isBone===!0?u=new za:c.length>1?u=new jt:c.length===1?u=c[0]:u=new Ot,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(a.name&&(u.userData.name=a.name,u.name=r),Yi(u,a),a.extensions&&fa(n,u,a),a.matrix!==void 0){let h=new je;h.fromArray(a.matrix),u.applyMatrix4(h)}else a.translation!==void 0&&u.position.fromArray(a.translation),a.rotation!==void 0&&u.quaternion.fromArray(a.rotation),a.scale!==void 0&&u.scale.fromArray(a.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,a=new jt;n.name&&(a.name=s.createUniqueName(n.name)),Yi(a,n),n.extensions&&fa(t,a,n);let r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(s.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?a.add(cm(d)):a.add(d)}let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Nn||d instanceof vn)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(a),a})}_createAnimationTracks(e,t,n,s,a){let r=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}qs[a.path]===qs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(qs[a.path]){case qs.weights:u=os;break;case qs.rotation:u=ls;break;case qs.translation:case qs.scale:u=Ns;break;default:n.itemSize===1?u=os:u=Ns;break}let h=s.interpolation!==void 0?b2[s.interpolation]:ea,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let x=new u(l[f]+"."+qs[a.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),r.push(x)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=uf(t.constructor),s=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)s[a]=t[a]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ls?lf:gu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function T2(i,e,t){let n=e.attributes,s=new Vn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){let u=uf(fr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=e.targets;if(a!==void 0){let o=new k,l=new k;for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=uf(fr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let r=new si;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=r}function pm(i,e,t){let n=e.attributes,s=[];function a(r,o){return t.getDependency("accessor",r).then(function(l){i.setAttribute(o,l)})}for(let r in n){let o=cf[r]||r.toLowerCase();o in i.attributes||s.push(a(n[r],o))}if(e.indices!==void 0&&!i.index){let r=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(r)}return yt.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),Yi(i,e),T2(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?y2(i,e.targets,t):i})}var df=new WeakMap,E2=new URL("../libs/draco/draco_decoder.wasm",import.meta.url).toString(),A2=new URL("../libs/draco/draco_wasm_wrapper.js",import.meta.url).toString(),R2=new URL("../libs/draco/draco_decoder.js",import.meta.url).toString(),jE={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",import.meta.url).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",import.meta.url).toString()},bu=class extends xi{constructor(e){super(e),this.decoderPaths={js:A2,wasm:E2,dep_js:R2},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=hi.resolveURL("draco_wasm_wrapper.js",e),t.wasm=hi.resolveURL("draco_decoder.wasm",e),t.dep_js=hi.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let a=new us(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,r=>{this.parse(r,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,gt,n).catch(n)}decodeDracoFile(e,t,n,s,a=Mn,r=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:a};return this.decodeGeometry(e,o).then(t).catch(r)}decodeGeometry(e,t){let n=JSON.stringify(t);if(df.has(e)){let l=df.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,a=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(a,r).then(l=>(s=l,new Promise((c,u)=>{s._callbacks[a]={resolve:c,reject:u},s.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{s&&a&&this._releaseTask(s,a)}),df.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new dt;e.index&&t.setIndex(new lt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:s,array:a,itemSize:r,stride:o,vertexColorSpace:l}=e.attributes[n],c;if(r===o)c=new lt(a,r);else{let u=new As(a,o);c=new Rs(u,r,0)}s==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(a instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==gt)return;let n=new fe;for(let s=0,a=e.count;s<a;s++)n.fromBufferAttribute(e,s),yt.colorSpaceToWorking(n,gt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new us(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,a)=>{n.load(e,s,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(s=>{let a=s[0];e||(this.decoderConfig.wasmBinary=s[1]);let r=P2.toString(),o=["/* draco decoder */",a,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(a){let r=a.data;switch(r.type){case"decode":s._callbacks[r.id].resolve(r);break;case"error":s._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,a){return s._taskLoad>a._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function P2(){let i,e;onmessage=function(r){let o=r.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":let l=o.buffer,c=o.taskConfig;e.then(u=>{let h=u.draco,d=new h.Decoder;try{let f=t(h,d,new Int8Array(l),c),p=f.attributes.map(x=>x.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(d)}});break}};function t(r,o,l,c){let u=c.attributeIDs,h=c.attributeTypes,d,f,p=o.GetEncodedGeometryType(l);if(p===r.TRIANGULAR_MESH)d=new r.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(p===r.POINT_CLOUD)d=new r.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let x={index:null,attributes:[]};for(let g in u){let m=self[h[g]],y,_;if(c.useUniqueIDs)_=u[g],y=o.GetAttributeByUniqueId(d,_);else{if(_=o.GetAttributeId(d,r[u[g]]),_===-1)continue;y=o.GetAttribute(d,_)}let M=s(r,o,d,g,m,y);g==="color"&&(M.vertexColorSpace=c.vertexColorSpace),x.attributes.push(M)}return p===r.TRIANGULAR_MESH&&(x.index=n(r,o,d)),r.destroy(d),x}function n(r,o,l){let u=l.num_faces()*3,h=u*4,d=r._malloc(h);o.GetTrianglesUInt32Array(l,h,d);let f=new Uint32Array(r.HEAPF32.buffer,d,u).slice();return r._free(d),{array:f,itemSize:1}}function s(r,o,l,c,u,h){let d=l.num_points(),f=h.num_components(),p=a(r,u),x=f*u.BYTES_PER_ELEMENT,g=Math.ceil(x/4)*4,m=g/u.BYTES_PER_ELEMENT,y=d*x,_=d*g,M=r._malloc(y);o.GetAttributeDataArrayForAllPoints(l,h,p,y,M);let S=new u(r.HEAPF32.buffer,M,y/u.BYTES_PER_ELEMENT),T;if(x===g)T=S.slice();else{T=new u(_/u.BYTES_PER_ELEMENT);let b=0;for(let v=0;v<d;v++){for(let F=0;F<f;F++)T[b+F]=S[v*f+F];b+=m}}return r._free(M),{name:c,count:d,itemSize:f,array:T,stride:m}}function a(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}var Qo=class{constructor(e){xs(this,"m_w",123456789);xs(this,"m_z",987654321);xs(this,"mask",4294967295);this.m_w=123456789+e&this.mask,this.m_z=987654321-e&this.mask}random(e=1,t=0){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let n=(this.m_z<<16)+(this.m_w&65535)>>>0;return n/=4294967296,(e-t)*n+t}};var pr=class{constructor(e=new k,t=new Wt,n=0,s=0,a=0,r=0,o=0){this.origin=e.clone(),this.orientation=t.clone(),this.length=n,this.radius=s,this.level=a,this.sectionCount=r,this.segmentCount=o}};var ff={Birch:"birch",Oak:"oak",Pine:"pine",Willow:"willow"},zo={Single:"single",Double:"double"},pf={Ash:"ash",Aspen:"aspen",Pine:"pine",Oak:"oak"},pa={Deciduous:"deciduous",Evergreen:"evergreen"};var ma=class{constructor(){this.seed=0,this.type=pa.Deciduous,this.bark={type:ff.Oak,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},this.branch={levels:3,angle:{1:70,2:60,3:60},children:{0:7,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:.01},gnarliness:{0:.15,1:.2,2:.3,3:.02},length:{0:20,1:20,2:10,3:1},radius:{0:1.5,1:.7,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.4,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},this.leaves={type:pf.Oak,billboard:zo.Double,angle:10,count:1,start:0,size:2.5,sizeVariance:.7,tint:16777215,alphaTest:.5},this.trellis={enabled:!1,position:{x:0,y:0,z:-2},width:10,height:20,spacing:2,force:{strength:.02,maxDistance:3,falloff:1},cylinderRadius:.05,visible:!0,color:9127187}}copy(e,t=this){for(let n in e)e.hasOwnProperty(n)&&t.hasOwnProperty(n)&&(typeof e[n]=="object"&&e[n]!==null?this.copy(e[n],t[n]):t[n]=e[n])}};var gm={seed:26867,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:2,angle:{"1":48,"2":75,"3":60},children:{"0":10,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.11,"1":.09,"2":.05,"3":.09},length:{"0":23.87,"1":18,"2":5.59,"3":4.6},radius:{"0":.81,"1":.56,"2":.76,"3":.7},sections:{"0":12,"1":10,"2":10,"3":10},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.53,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:30,start:0,size:2.05,sizeVariance:.717,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var bm={seed:36330,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":48,"2":75,"3":60},children:{"0":7,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.06},gnarliness:{"0":.03,"1":.25,"2":.2,"3":.09},length:{"0":43.47,"1":27.14,"2":9.51,"3":4.6},radius:{"0":2,"1":.63,"2":.76,"3":.7},sections:{"0":12,"1":8,"2":6,"3":4},segments:{"0":12,"1":6,"2":4,"3":3},start:{"1":.23,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.09,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:16,start:0,size:2.67,sizeVariance:.72,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var xm={seed:29919,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":39,"2":39,"3":51},children:{"0":10,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.010869565217391311},gnarliness:{"0":-.05,"1":.2,"2":.16,"3":.049999999999999996},length:{"0":45,"1":29.42,"2":15.3,"3":4.6},radius:{"0":3.03,"1":.53,"2":.79,"3":1.11},sections:{"0":12,"1":8,"2":6,"3":4},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.32,"2":.34,"3":0},taper:{"0":.7,"1":.6199999999999999,"2":.7599999999999999,"3":0},twist:{"0":.09,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:30,count:10,start:.01,size:4.62,sizeVariance:.72,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var ym={seed:36330,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":70,"2":35,"3":7},children:{"0":4,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:.010869565217391311},gnarliness:{"0":.04,"1":-.010000000000000007,"2":.12,"3":.02},length:{"0":23.99,"1":3.36,"2":7.699999999999999,"3":1},radius:{"0":.36999999999999994,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.44999999999999996,"2":.32999999999999996,"3":0},taper:{"0":.37,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:30,count:13,start:.2,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},trellis:{enabled:!1}};var Mm={seed:18020,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":75,"2":32,"3":7},children:{"0":10,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:.0148},gnarliness:{"0":.05,"1":.12,"2":.12,"3":.02},length:{"0":50,"1":6.07,"2":11.19,"3":1},radius:{"0":.72,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.59,"2":.35,"3":0},taper:{"0":.37,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:30,count:11,start:.124,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},trellis:{enabled:!1}};var vm={seed:30631,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":47,"2":63,"3":7},children:{"0":10,"1":6,"2":0},force:{direction:{x:0,y:1,z:0},strength:.021739130434782622},gnarliness:{"0":.05,"1":-.030000000000000006,"2":.12,"3":.02},length:{"0":69.60000000000001,"1":18.56,"2":11.19,"3":1},radius:{"0":1.11,"1":.5800000000000001,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.62,"2":.049999999999999975,"3":0},taper:{"0":.7000000000000001,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:36,count:20,start:.15217391304347827,size:3.4782608695652173,sizeVariance:.7,tint:16580390,alphaTest:.5},trellis:{enabled:!1}};var _m={seed:45590,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":21.521739130434785,"2":62.608695652173914,"3":60},children:{"0":7,"1":3,"2":2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.11,"1":.09,"2":.05,"3":.09},length:{"0":.1,"1":15.302173913043479,"2":5.59,"3":4.6},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.76,"3":.7},sections:{"0":6,"1":6,"2":10,"3":10},segments:{"0":4,"1":4,"2":4,"3":3},start:{"1":.53,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:12,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},trellis:{enabled:!1}};var Sm={seed:45590,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:2,angle:{"1":19.565217391304348,"2":27.39130434782609,"3":60},children:{"0":10,"1":3,"2":2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.021739130434782594,"1":.10869565217391308,"2":.05,"3":.09},length:{"0":.1,"1":19.645652173913046,"2":7.701086956521739,"3":4.6},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.76,"3":.7},sections:{"0":3,"1":4,"2":10,"3":10},segments:{"0":4,"1":4,"2":4,"3":3},start:{"1":.6413043478260869,"2":.7065217391304348,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3586956521739131,"1":-.043478260869565244,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:55,count:7,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},trellis:{enabled:!1}};var Tm={seed:31343,type:"evergreen",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":66.52173913043478,"2":52.82608695652174,"3":0},children:{"0":13,"1":4,"2":4},force:{direction:{x:0,y:1,z:0},strength:-.007},gnarliness:{"0":.05434782608695654,"1":.06521739130434778,"2":.05,"3":.09},length:{"0":10.958695652173914,"1":21.81739130434783,"2":13.130434782608695,"3":5.529347826086957},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.6858695652173914,"3":.7391304347826086},sections:{"0":4,"1":3,"2":3,"3":10},segments:{"0":3,"1":3,"2":3,"3":3},start:{"1":.14130434782608695,"2":.29347826086956524,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.03260869565217389,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:54,count:3,start:.15217391304347827,size:3.0434782608695654,sizeVariance:.45652173913043476,tint:10339327,alphaTest:.5},trellis:{enabled:!1}};var Em={seed:30895,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":58,"3":32},children:{"0":4,"1":2,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{"0":.07,"1":-.08,"2":.11,"3":.09},length:{"0":28.08,"1":4.55,"2":9.78,"3":7.16},radius:{"0":1,"1":1.02,"2":.69,"3":1.19},sections:{"0":16,"1":9,"2":8,"3":1},segments:{"0":7,"1":5,"2":3,"3":3},start:{"1":.49,"2":.06,"3":.12},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:42,count:14,start:.16,size:1.38,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var Am={seed:35729,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":58,"3":32},children:{"0":6,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{"0":0,"1":-.1,"2":-.15,"3":.09},length:{"0":37.24,"1":11.08,"2":12.39,"3":7.16},radius:{"0":1.41,"1":.9,"2":.69,"3":1.19},sections:{"0":8,"1":6,"2":3,"3":1},segments:{"0":7,"1":5,"2":3,"3":3},start:{"1":.49,"2":.06,"3":.12},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:42,count:18,start:.16,size:2.5,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var Rm={seed:23399,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":43,"3":32},children:{"0":9,"1":5,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.025},gnarliness:{"0":-.04,"1":.16,"2":-.06,"3":.09},length:{"0":47.7,"1":29.39,"2":17.62,"3":7.16},radius:{"0":3,"1":.69,"2":.69,"3":1.19},sections:{"0":16,"1":9,"2":8,"3":3},segments:{"0":12,"1":5,"2":3,"3":3},start:{"1":.35,"2":.1,"3":0},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:36,count:10,start:.16,size:4.5,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var Pm={seed:11744,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":117,"2":60,"3":60},children:{"0":91,"1":7,"2":5},force:{direction:{x:0,y:1,z:0},strength:0},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":39.55,"1":12.12,"2":10,"3":1},radius:{"0":.55,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.16,"2":.3,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:10,count:21,start:0,size:.965,sizeVariance:.7,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var wm={seed:13977,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":110,"2":16,"3":60},children:{"0":82,"1":3,"2":5},force:{direction:{x:0,y:1,z:0},strength:-.003},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":50,"1":23.87,"2":14.08,"3":1},radius:{"0":1.05,"1":.36,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.27,"2":.14,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:39,count:30,start:.09,size:1.435,sizeVariance:.201,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var Lm={seed:44166,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":129.1304347826087,"2":16,"3":60},children:{"0":100,"1":3,"2":0},force:{direction:{x:0,y:1,z:0},strength:.009000000000000001},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":65.25217391304348,"1":34.84782608695652,"2":27.246739130434783,"3":1},radius:{"0":1.271739130434783,"1":.366304347826087,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.29347826086956524,"2":.14,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:17,count:18,start:.07608695652173914,size:2.608695652173913,sizeVariance:.201,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var Im={seed:41563,type:"deciduous",bark:{type:"oak",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:8}},branch:{levels:3,angle:{"1":26,"2":79,"3":0},children:{"0":7,"1":5,"2":1},force:{direction:{x:0,y:1,z:0},strength:.026},gnarliness:{"0":0,"1":.02,"2":-.41,"3":.09},length:{"0":4.8,"1":16.9,"2":11.3,"3":11.1},radius:{"0":.27,"1":.71,"2":.84,"3":.48},sections:{"0":6,"1":12,"2":10,"3":4},segments:{"0":3,"1":3,"2":3,"3":3},start:{"1":.19,"2":.1,"3":.06},taper:{"0":.6,"1":.5,"2":.5,"3":.5},twist:{"0":-.02,"1":-.01,"2":.09,"3":0}},leaves:{type:"ash",billboard:"single",angle:30,count:13,start:0,size:1.7,sizeVariance:.5,tint:15204310,alphaTest:.5},trellis:{enabled:!0,position:{x:0,y:0,z:1.3},width:20,height:32,spacing:4,force:{strength:.014,maxDistance:18.2,falloff:1.3},cylinderRadius:.08,visible:!0,color:5519173}};var xu={"Ash Small":gm,"Ash Medium":bm,"Ash Large":xm,"Aspen Small":ym,"Aspen Medium":Mm,"Aspen Large":vm,"Bush 1":_m,"Bush 2":Sm,"Bush 3":Tm,"Oak Small":Em,"Oak Medium":Am,"Oak Large":Rm,"Pine Small":Pm,"Pine Medium":wm,"Pine Large":Lm,Trellis:Im};function Fm(i){let e=xu[i];return e?structuredClone(e):new ma}var yu="./dist/assets/birch_ao_1k-M2EJQD6U.jpg";var Mu="./dist/assets/birch_color_1k-4PBNIVXY.jpg";var vu="./dist/assets/birch_normal_1k-FVP2SILN.jpg";var _u="./dist/assets/birch_roughness_1k-GWSNOJHT.jpg";var Su="./dist/assets/oak_ao_1k-OF45DLVF.jpg";var Tu="./dist/assets/oak_color_1k-2M2JUF3C.jpg";var Eu="./dist/assets/oak_normal_1k-OXREJG4N.jpg";var Au="./dist/assets/oak_roughness_1k-Z2ZMHKAG.jpg";var Ru="./dist/assets/pine_ao_1k-FCNELEZP.jpg";var Pu="./dist/assets/pine_color_1k-CXUMSRID.jpg";var wu="./dist/assets/pine_normal_1k-O2AXH5ZF.jpg";var Lu="./dist/assets/pine_roughness_1k-AEQ6CLQ3.jpg";var Iu="./dist/assets/willow_ao_1k-XPYUNGG3.jpg";var Fu="./dist/assets/willow_color_1k-RCBPBDE7.jpg";var ku="./dist/assets/willow_normal_1k-SBJUCNBQ.jpg";var Du="./dist/assets/willow_roughness_1k-LIIAXLS2.jpg";var km="./dist/assets/ash_color-D7NZKJW5.png";var Dm="./dist/assets/aspen_color-FK2SNQDU.png";var Nm="./dist/assets/oak_color-3V4YA6HA.png";var Cm="./dist/assets/pine_color-FUSX6YQW.png";var h_=new Un;function Jo(i,e,t={x:1,y:1}){let n=Bm.bark[i][e];return n.wrapS=Yt,n.wrapT=Yt,n.repeat.x=t.x,n.repeat.y=1/t.y,n}function Um(i){return Bm.leaves[i]}var gn=(i,e=!0)=>{let t=h_.load(i);return t.premultiplyAlpha=!0,e&&(t.colorSpace=gt),t},Bm={bark:{birch:{ao:gn(yu,!1),color:gn(Mu),normal:gn(vu,!1),roughness:gn(_u,!1)},oak:{ao:gn(Su,!1),color:gn(Tu),normal:gn(Eu,!1),roughness:gn(Au,!1)},pine:{ao:gn(Ru,!1),color:gn(Pu),normal:gn(wu,!1),roughness:gn(Lu,!1)},willow:{ao:gn(Iu,!1),color:gn(Fu),normal:gn(ku,!1),roughness:gn(Du,!1)}},leaves:{ash:gn(km),aspen:gn(Dm),oak:gn(Nm),pine:gn(Cm)}};var jo=class extends jt{constructor(e){super(),this.name="Trellis",this.options=e,this.material=null,this.hCylinderGeo=null,this.vCylinderGeo=null}generate(){let e=this.options;this.dispose(),this.material=new et({color:e.color,roughness:.8}),this.hCylinderGeo=new nn(e.cylinderRadius,e.cylinderRadius,e.width,8),this.hCylinderGeo.rotateZ(Math.PI/2),this.vCylinderGeo=new nn(e.cylinderRadius,e.cylinderRadius,e.height,8);let t=Math.floor(e.height/e.spacing)+1;for(let s=0;s<t;s++){let a=s*e.spacing,r=new we(this.hCylinderGeo,this.material);r.position.set(e.position.x,e.position.y+a,e.position.z),this.add(r)}let n=Math.floor(e.width/e.spacing)+1;for(let s=0;s<n;s++){let a=-e.width/2+s*e.spacing,r=new we(this.vCylinderGeo,this.material);r.position.set(e.position.x+a,e.position.y+e.height/2,e.position.z),this.add(r)}}getNearestPoint(e){let t=this.options,n=t.position.x,s=t.position.y,a=t.position.z,r=n-t.width/2,o=n+t.width/2,l=s,c=s+t.height,u=Math.max(r,Math.min(o,e.x)),h=Math.max(l,Math.min(c,e.y)),d=Math.round((h-l)/t.spacing)*t.spacing+l,f=Math.max(l,Math.min(c,d)),p=Math.round((u-r)/t.spacing)*t.spacing+r,x=Math.max(r,Math.min(o,p)),g=new k(u,f,a),m=new k(x,h,a),y=e.distanceTo(g),_=e.distanceTo(m);return y<_?g:m}dispose(){this.children.forEach(e=>{e.geometry&&(e.geometry=null)}),this.clear(),this.hCylinderGeo&&(this.hCylinderGeo.dispose(),this.hCylinderGeo=null),this.vCylinderGeo&&(this.vCylinderGeo.dispose(),this.vCylinderGeo=null),this.material&&(this.material.dispose(),this.material=null)}};var Wo=class extends jt{constructor(t=new ma){super();xs(this,"rng");xs(this,"options");xs(this,"branchQueue",[]);this.name="Tree",this.branchesMesh=new we,this.leavesMesh=new we,this.trellisMesh=null,this.add(this.branchesMesh),this.add(this.leavesMesh),this.options=t}update(t){let n=this.leavesMesh.material.userData.shader;n&&(n.uniforms.uTime.value=t)}loadPreset(t){let n=Fm(t);this.loadFromJson(n)}loadFromJson(t){this.options.copy(t),this.generate()}generate(){for(this.branches={verts:[],normals:[],indices:[],uvs:[],windFactor:[]},this.leaves={verts:[],normals:[],indices:[],uvs:[]},this.rng=new Qo(this.options.seed),this.branchQueue.push(new pr(new k,new Wt,this.options.branch.length[0],this.options.branch.radius[0],0,this.options.branch.sections[0],this.options.branch.segments[0]));this.branchQueue.length>0;){let t=this.branchQueue.shift();this.generateBranch(t)}this.createBranchesGeometry(),this.createLeavesGeometry(),this.createTrellis()}generateBranch(t){let n=this.branches.verts.length/3,s=t.orientation.clone(),a=t.origin.clone(),r=t.length/t.sectionCount/(this.options.type==="Deciduous"?this.options.branch.levels-1:1),o=[];for(let l=0;l<=t.sectionCount;l++){let c=t.radius;l===t.sectionCount&&t.level===this.options.branch.levels?c=.001:this.options.type===pa.Deciduous?c*=1-this.options.branch.taper[t.level]*(l/t.sectionCount):this.options.type===pa.Evergreen&&(c*=1-l/t.sectionCount);let u;for(let x=0;x<t.segmentCount;x++){let g=2*Math.PI*x/t.segmentCount,m=new k(Math.cos(g),0,Math.sin(g)).multiplyScalar(c).applyEuler(s).add(a),y=new k(Math.cos(g),0,Math.sin(g)).applyEuler(s).normalize(),_=new pe(x/t.segmentCount,l%2===0?0:1);this.branches.verts.push(...Object.values(m)),this.branches.normals.push(...Object.values(y)),this.branches.uvs.push(...Object.values(_)),x===0&&(u={vertex:m,normal:y,uv:_})}this.branches.verts.push(...Object.values(u.vertex)),this.branches.normals.push(...Object.values(u.normal)),this.branches.uvs.push(1,u.uv.y),o.push({origin:a.clone(),orientation:s.clone(),radius:c}),a.add(new k(0,r,0).applyEuler(s));let h=Math.max(1,1/Math.sqrt(c))*this.options.branch.gnarliness[t.level];s.x+=this.rng.random(h,-h),s.z+=this.rng.random(h,-h);let d=new Pt().setFromEuler(s),f=new Pt().setFromAxisAngle(new k(0,1,0),this.options.branch.twist[t.level]),p=new Pt().setFromUnitVectors(new k(0,1,0),new k().copy(this.options.branch.force.direction));if(d.multiply(f),d.rotateTowards(p,this.options.branch.force.strength/c),this.options.trellis.enabled){let x=this.calculateTrellisForce(a,c);if(x){let g=new Pt().setFromUnitVectors(new k(0,1,0),x.direction);d.rotateTowards(g,x.strength)}}s.setFromQuaternion(d)}if(this.generateBranchIndices(n,t),this.options.type==="deciduous"){let l=o[o.length-1];t.level<this.options.branch.levels?this.branchQueue.push(new pr(l.origin,l.orientation,this.options.branch.length[t.level+1],l.radius,t.level+1,t.sectionCount,t.segmentCount)):this.generateLeaf(l.origin,l.orientation)}t.level===this.options.branch.levels?this.generateLeaves(o):t.level<this.options.branch.levels&&this.generateChildBranches(this.options.branch.children[t.level],t.level+1,o)}generateChildBranches(t,n,s){let a=this.rng.random();for(let r=0;r<t;r++){let o=this.rng.random(1,this.options.branch.start[n]),l=Math.floor(o*(s.length-1)),c,u;c=s[l],l===s.length-1?u=c:u=s[l+1];let h=(o-l/(s.length-1))/(1/(s.length-1)),d=new k().lerpVectors(c.origin,u.origin,h),f=this.options.branch.radius[n]*((1-h)*c.radius+h*u.radius),p=new Pt().setFromEuler(c.orientation),x=new Pt().setFromEuler(u.orientation),g=new Wt().setFromQuaternion(x.slerp(p,h)),m=2*Math.PI*(a+r/t),y=new Pt().setFromAxisAngle(new k(1,0,0),this.options.branch.angle[n]/(180/Math.PI)),_=new Pt().setFromAxisAngle(new k(0,1,0),m),M=new Pt().setFromEuler(g),S=new Wt().setFromQuaternion(M.multiply(_.multiply(y))),T=this.options.branch.length[n]*(this.options.type===pa.Evergreen?1-o:1);this.branchQueue.push(new pr(d,S,T,f,n,this.options.branch.sections[n],this.options.branch.segments[n]))}}generateLeaves(t){let n=this.rng.random();for(let s=0;s<this.options.leaves.count;s++){let a=this.rng.random(1,this.options.leaves.start),r=Math.floor(a*(t.length-1)),o,l;o=t[r],r===t.length-1?l=o:l=t[r+1];let c=(a-r/(t.length-1))/(1/(t.length-1)),u=new k().lerpVectors(o.origin,l.origin,c),h=new Pt().setFromEuler(o.orientation),d=new Pt().setFromEuler(l.orientation),f=new Wt().setFromQuaternion(d.slerp(h,c)),p=2*Math.PI*(n+s/this.options.leaves.count),x=new Pt().setFromAxisAngle(new k(1,0,0),this.options.leaves.angle/(180/Math.PI)),g=new Pt().setFromAxisAngle(new k(0,1,0),p),m=new Pt().setFromEuler(f),y=new Wt().setFromQuaternion(m.multiply(g.multiply(x)));this.generateLeaf(u,y)}}generateLeaf(t,n){let s=this.leaves.verts.length/3,a=this.options.leaves.size*(1+this.rng.random(this.options.leaves.sizeVariance,-this.options.leaves.sizeVariance)),r=a,o=a,l=c=>{let u=[new k(-r/2,o,0),new k(-r/2,0,0),new k(r/2,0,0),new k(r/2,o,0)].map(d=>d.applyEuler(new Wt(0,c,0)).applyEuler(n).add(t));this.leaves.verts.push(u[0].x,u[0].y,u[0].z,u[1].x,u[1].y,u[1].z,u[2].x,u[2].y,u[2].z,u[3].x,u[3].y,u[3].z);let h=new k(0,0,1).applyEuler(n);this.leaves.normals.push(h.x,h.y,h.z,h.x,h.y,h.z,h.x,h.y,h.z,h.x,h.y,h.z),this.leaves.uvs.push(0,1,0,0,1,0,1,1),this.leaves.indices.push(s,s+1,s+2,s,s+2,s+3),s+=4};l(0),this.options.leaves.billboard===zo.Double&&l(Math.PI/2)}generateBranchIndices(t,n){let s,a,r,o,l=n.segmentCount+1;for(let c=0;c<n.sectionCount;c++)for(let u=0;u<n.segmentCount;u++)s=t+c*l+u,a=t+c*l+(u+1),r=s+l,o=a+l,this.branches.indices.push(s,r,a,a,r,o)}createBranchesGeometry(){let t=new dt;t.setAttribute("position",new lt(new Float32Array(this.branches.verts),3)),t.setAttribute("normal",new lt(new Float32Array(this.branches.normals),3)),t.setAttribute("uv",new lt(new Float32Array(this.branches.uvs),2)),t.setIndex(new lt(new Uint16Array(this.branches.indices),1)),t.computeBoundingSphere();let n=new Ka({name:"branches",flatShading:this.options.bark.flatShading,color:new fe(this.options.bark.tint)});this.options.bark.textured&&(n.aoMap=Jo(this.options.bark.type,"ao",this.options.bark.textureScale),n.map=Jo(this.options.bark.type,"color",this.options.bark.textureScale),n.normalMap=Jo(this.options.bark.type,"normal",this.options.bark.textureScale),n.roughnessMap=Jo(this.options.bark.type,"roughness",this.options.bark.textureScale)),this.branchesMesh.geometry.dispose(),this.branchesMesh.geometry=t,this.branchesMesh.material.dispose(),this.branchesMesh.material=n,this.branchesMesh.castShadow=!0,this.branchesMesh.receiveShadow=!0}createLeavesGeometry(){let t=new dt;t.setAttribute("position",new lt(new Float32Array(this.leaves.verts),3)),t.setAttribute("uv",new lt(new Float32Array(this.leaves.uvs),2)),t.setIndex(new lt(new Uint16Array(this.leaves.indices),1)),t.computeVertexNormals(),t.computeBoundingSphere();let n=new Ka({name:"leaves",map:Um(this.options.leaves.type),color:new fe(this.options.leaves.tint),side:$t,alphaTest:this.options.leaves.alphaTest,dithering:!0});n.onBeforeCompile=s=>{s.uniforms.uTime={value:0},s.uniforms.uWindStrength={value:new k(.5,0,.5)},s.uniforms.uWindFrequency={value:.5},s.uniforms.uWindScale={value:70},s.vertexShader=`
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
        `),n.userData.shader=s},this.leavesMesh.geometry.dispose(),this.leavesMesh.geometry=t,this.leavesMesh.material.dispose(),this.leavesMesh.material=n,this.leavesMesh.castShadow=!0,this.leavesMesh.receiveShadow=!0}createTrellis(){this.trellisMesh&&(this.remove(this.trellisMesh),this.trellisMesh.dispose(),this.trellisMesh=null),this.options.trellis.enabled&&this.options.trellis.visible&&(this.trellisMesh=new jo(this.options.trellis),this.trellisMesh.generate(),this.add(this.trellisMesh))}getNearestTrellisPoint(t){let n=this.options.trellis,s=n.position.x,a=n.position.y,r=n.position.z,o=s-n.width/2,l=s+n.width/2,c=a,u=a+n.height,h=Math.max(o,Math.min(l,t.x)),d=Math.max(c,Math.min(u,t.y)),f=Math.round((d-c)/n.spacing)*n.spacing+c,p=Math.max(c,Math.min(u,f)),x=Math.round((h-o)/n.spacing)*n.spacing+o,g=Math.max(o,Math.min(l,x)),m=new k(h,p,r),y=new k(g,d,r),_=t.distanceTo(m),M=t.distanceTo(y);return _<M?m:y}calculateTrellisForce(t,n){let s=this.options.trellis,a=this.getNearestTrellisPoint(t),r=t.distanceTo(a);if(r>s.force.maxDistance||r<.001)return null;let o=new k().subVectors(a,t).normalize(),l=1-Math.pow(r/s.force.maxDistance,s.force.falloff),c=s.force.strength*l/n;return{direction:o,strength:c}}get vertexCount(){return(this.branches.verts.length+this.leaves.verts.length)/3}get triangleCount(){return(this.branches.indices.length+this.leaves.indices.length)/3}};var d_={jati:{preset:"Ash Large",seed:4211,height:18,leafScale:2.3,leafCount:.7,tint:7314484,tweak(i){i.branch.gnarliness[0]=.02,i.branch.length[0]*=1.15,i.branch.angle[1]=55}},mahoni:{preset:"Oak Large",seed:9083,height:19,leaf:"ash",leafScale:1,leafCount:1.9,tint:2908976},beringin:{preset:"Oak Large",seed:1377,height:14,bark:"willow",leaf:"aspen",leafScale:.85,leafCount:1.9,tint:4885562,roots:!0,tweak(i){i.branch.length[0]*=.7,i.branch.radius[0]*=1.5,i.branch.length[1]*=1.25,i.branch.angle[1]=80}},pinus:{preset:"Pine Large",seed:6654,height:22,tint:4090426},trembesi:{preset:"Oak Large",seed:2025,height:15,leaf:"ash",leafScale:.9,leafCount:1.9,tint:6003260,tweak(i){i.branch.length[0]*=.65,i.branch.radius[0]*=1.35,i.branch.length[1]*=1.7,i.branch.angle[1]=88,i.branch.gnarliness[1]=.12}}},Uu={uTime:{value:0},uWindAmp:{value:1}},mf={};function gf(i){return JSON.parse(JSON.stringify(i))}function Nu(i,e){let t=new Wo;if(t.options.copy(gf(xu[i])),t.options.seed=e.seed,e.bark&&(t.options.bark.type=e.bark),e.leaf&&(t.options.leaves.type=e.leaf),e.leafCount&&(t.options.leaves.count=Math.round(t.options.leaves.count*e.leafCount)),e.leafScale&&(t.options.leaves.size*=e.leafScale),e.tint!=null&&(t.options.leaves.tint=e.tint),e.tweak&&e.tweak(t.options),e.lite){let S=t.options;S.leaves.count=Math.max(2,Math.round(S.leaves.count*(e.liteLeaf||.5))),S.leaves.size*=1/Math.sqrt(e.liteLeaf||.5);let T=e.liteBranch||.5;for(let b of[0,1,2,3])S.branch.sections[b]&&(S.branch.sections[b]=Math.max(2,Math.ceil(S.branch.sections[b]*T))),S.branch.segments[b]&&(S.branch.segments[b]=Math.max(3,Math.ceil(S.branch.segments[b]*(T>.7?.8:.55))))}let n=t.options.bark.type;mf[n]?t.options.bark.textureScale=gf(mf[n]):mf[n]=gf(t.options.bark.textureScale),t.generate();let s=t.branchesMesh,a=t.leavesMesh;s.geometry.computeBoundingBox(),a.geometry.computeBoundingBox();let r=s.geometry.boundingBox.clone().union(a.geometry.boundingBox),o=e.height/Math.max(.01,r.max.y),l=a.geometry,c=l.attributes.position,u=new Float32Array(c.count*3),h=l.boundingBox.min.y*.4+l.boundingBox.max.y*.6,d=new k;for(let S=0;S<c.count;S++)d.set(c.getX(S),c.getY(S)-h,c.getZ(S)).normalize(),d.y=d.y*.7+.45,d.normalize(),u[S*3]=d.x,u[S*3+1]=d.y,u[S*3+2]=d.z;l.setAttribute("normal",new lt(u,3));let f=s.material,p=new et({map:f.map,normalMap:f.normalMap,roughnessMap:f.roughnessMap,aoMap:f.aoMap,color:f.color.clone(),roughness:1,metalness:0}),x=f_(a.material.map,new fe(t.options.leaves.tint)),g=new Za({depthPacking:id,map:a.material.map,alphaTest:.5,side:$t}),m=(t.options.branch.radius[0]||1)*o,y=(s.geometry.index.count+a.geometry.index.count)/3,_=s.geometry.index.count/3,M=a.geometry.index.count/3;return f.dispose(),a.material.dispose(),{barkGeo:s.geometry,leafGeo:a.geometry,barkMat:p,leafMat:x,depthMat:g,scale:o,height:e.height,trunkR:m,tris:y,btris:_,ltris:M,tree:t}}function f_(i,e){let t=new et({map:i,color:e,alphaTest:.5,alphaToCoverage:!0,side:$t,roughness:.74,metalness:0});return t.onBeforeCompile=n=>{n.uniforms.uTime=Uu.uTime,n.uniforms.uWindAmp=Uu.uWindAmp,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uWindAmp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          vec3 ip = vec3(0.0);
          #ifdef USE_INSTANCING
            ip = instanceMatrix[3].xyz;
          #endif
          float ph = ip.x * 0.21 + ip.z * 0.17 + position.x * 0.05 + position.y * 0.04;
          float w = 0.5 * sin(uTime * 1.3 + ph) + 0.3 * sin(uTime * 2.7 + ph * 1.7) + 0.2 * sin(uTime * 5.1 + ph * 2.3);
          transformed.xz += vec2(w * 0.9, w * 0.6) * uv.y * uWindAmp;
        }`)},t}function p_(){let i=Xt(3),e=[],t=[],n=[],s=[],a=new fe().setRGB(.01,.03,.005),r=new fe().setRGB(.13,.23,.05),o=9;for(let c=0;c<o;c++){let u=c/o*nt+i()*.7,h=.02+i()*.09,d=Math.cos(u)*h,f=Math.sin(u)*h,p=.13+i()*.26,x=.011+i()*.01,g=(i()-.5)*.22,m=i()*nt,y=Math.cos(m),_=Math.sin(m),M=-_,S=y,T=e.length/3,b=(v,F,L,G)=>{e.push(v,F,L),t.push(G.r,G.g,G.b),n.push(0,1,0)};b(d-M*x,0,f-S*x,a),b(d+M*x,0,f+S*x,a),b(d+y*g,p,f+_*g,r),s.push(T,T+1,T+2)}let l=new Mo;return l.setAttribute("position",new at(e,3)),l.setAttribute("color",new at(t,3)),l.setAttribute("normal",new at(n,3)),l.setIndex(s),l}function m_(i,e){let t=p_(),n=Xt(77),s=22,a=new Float32Array(e*4);for(let c=0;c<e;c++)a[c*4]=(n()*2-1)*s,a[c*4+1]=(n()*2-1)*s,a[c*4+2]=n(),a[c*4+3]=.8+n()*.7;t.setAttribute("aOff",new Pi(a,4)),t.instanceCount=e;let r={uPlayer:{value:new k},uR:{value:s},uTime:Uu.uTime,uWater:{value:sn},uPathW:{value:du},...K0()},o=new et({vertexColors:!0,roughness:.92,metalness:0,side:$t});o.onBeforeCompile=c=>{Object.assign(c.uniforms,r),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aOff; uniform vec3 uPlayer; uniform float uR, uTime, uWater, uPathW;
        ${Dd}`).replace("#include <color_vertex>",`#include <color_vertex>
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
 normal = normalize(vNormal);`)};let l=new we(t,o);return l.frustumCulled=!1,l.receiveShadow=!0,l.userData.noAO=!0,i.add(l),{mesh:l,u:r,maxCount:e,geo:t}}function bf(i,e,t,n,s,a){let r=new Map;for(let f of t){let p=Math.floor(f.x/s)+","+Math.floor(f.z/s);(r.get(p)||r.set(p,[]).get(p)).push(f)}let o=new je,l=new Pt,c=new k,u=new k,h=new Wt,d=new fe;r.forEach((f,p)=>{let[x,g]=p.split(",").map(Number),m=new Pn(e.barkGeo,e.barkMat,f.length),y=new Pn(e.leafGeo,e.leafMat,f.length);y.customDepthMaterial=e.depthMat,y.userData.noAO=!0,f.forEach((_,M)=>{h.set(0,_.r*nt,0),l.setFromEuler(h),c.set(_.x,_.y-.1,_.z);let S=e.scale*_.s;u.set(S,S,S*(.92+_.c*.16)),o.compose(c,l,u),m.setMatrixAt(M,o),y.setMatrixAt(M,o),d.setRGB(.82+_.c*.3,.86+_.c*.26,.78+_.c*.2),y.setColorAt(M,d)});for(let _ of[m,y])_.castShadow=a===0,_.receiveShadow=!0,_.instanceMatrix.needsUpdate=!0,_.computeBoundingSphere(),_.visible=!1,i.add(_);m.userData.bark=!0,y.instanceColor.needsUpdate=!0,n.push({cx:(x+.5)*s,cz:(g+.5)*s,half:s*.72,meshes:[m,y],n:f.length,lod:a||0,bush:!!e.bush})})}var Cu=null;async function Hm(i){Cu||(Cu=new bu,Cu.setDecoderPath("assets/draco/"));let e=new pu;return e.setDRACOLoader(Cu),e.loadAsync(i)}function Gm(i,e){let t=new Vn().setFromObject(i),n=t.getSize(new k),s=e/Math.max(n.x,n.y,n.z),a=[];i.updateMatrixWorld(!0),i.traverse(o=>{if(!o.isMesh)return;let l=o.geometry.clone();l.applyMatrix4(o.matrixWorld),l.scale(s,s,s),a.push({geo:l,mat:o.material})});let r=new Vn;return a.forEach(o=>{o.geo.computeBoundingBox(),r.union(o.geo.boundingBox)}),a.forEach(o=>o.geo.translate(-(r.min.x+r.max.x)/2,-r.min.y,-(r.min.z+r.max.z)/2)),a}async function qm({scene:i,heroes:e,clear:t=[],addObs:n,progress:s,quality:a}){let o=[],l={v:a==="hemat"},c=async(U,E)=>{s&&s(E,U),await z0()};await c("Menumbuhkan pohon\u2026",.05);let u=[{k:"oak",preset:"Oak Medium",seed:11,height:11,w:.26},{k:"oak",preset:"Oak Medium",seed:23,height:13,w:.2,tint:5081652},{k:"ash",preset:"Ash Medium",seed:5,height:12,w:.16},{k:"pine",preset:"Pine Medium",seed:3,height:15,w:.2},{k:"pine",preset:"Pine Medium",seed:9,height:12,w:.1},{k:"aspen",preset:"Aspen Medium",seed:8,height:12,w:.08}],h=[],d=[];for(let U=0;U<u.length;U++)h.push(Nu(u[U].preset,{...u[U],lite:!0,liteLeaf:.65,liteBranch:.8})),d.push(Nu(u[U].preset,{...u[U],lite:!0,liteLeaf:.32})),await c("Menumbuhkan pohon\u2026",.05+.25*(U+1)/u.length);let f=Xt(7),p=[],x=8,g=0,m=230;for(;p.length<m&&g<9e3;){g++;let U=(f()*2-1)*108,E=(f()*2-1)*108;if(Math.hypot(U,E)<10)continue;let D=hn(U,E);D<sn+.9||hr(U,E)<2.6||e.some(w=>Math.hypot(U-w.x,E-w.z)<x)||t.some(w=>Math.hypot(U-w.x,E-w.z)<w.r+2)||p.some(w=>Math.hypot(U-w.x,E-w.z)<4.2)||p.push({x:U,y:D,z:E,s:.8+f()*.5,r:f(),c:f(),n:Math.sin(U*.03)*Math.cos(E*.025)})}let y=h.map(()=>[]),_=u.reduce((U,E)=>U+E.w,0);for(let U of p){let E=Ct((U.n*.5+.5)*.7+U.c*.3,0,.999)*_,D=0,w=0;for(let P=0;P<u.length;P++)if(D+=u[P].w,E<D){w=P;break}y[w].push(U),n(U.x,U.z,Math.max(.28,Math.min(.9,h[w].trunkR*U.s*.6)))}h.forEach((U,E)=>{y[E].length&&(bf(i,U,y[E],o,40,0),bf(i,d[E],y[E],o,40,1))}),await c("Menanam semak\u2026",.4);let S=[["Bush 1",31,1.5],["Bush 2",32,1.2],["Bush 3",33,1.4]].map(U=>{let E=Nu(U[0],{seed:U[1],height:U[2],lite:!0,liteLeaf:.6});return E.bush=!0,E}),T=[[],[],[]],b=Xt(99);for(let U=0,E=0;U<150&&E<3e3;E++){let D=(b()*2-1)*108,w=(b()*2-1)*108,P=hn(D,w);P<sn+.7||Math.hypot(D,w)<6||hr(D,w)<1.8||(T[U%3].push({x:D,y:P,z:w,s:.7+b()*.7,r:b(),c:b()}),U++)}S.forEach((U,E)=>bf(i,U,T[E],o,40,0)),await c("Menanam rumput\u2026",.5);let v=[],F=[];for(let U=0;U<e.length;U++){let E=e[U],D=d_[E.id],w=Nu(D.preset,D),P=new jt,Y=hn(E.x,E.z);P.position.set(E.x,Y-.1,E.z),P.rotation.y=U*2.1;let O=new we(w.barkGeo,w.barkMat),B=new we(w.leafGeo,w.leafMat);B.customDepthMaterial=w.depthMat,B.userData.noAO=!0;for(let W of[O,B])W.castShadow=!0,W.receiveShadow=!0,W.scale.setScalar(w.scale),P.add(W);if(D.roots){let W=Xt(88+U),ie=[];for(let he=0;he<34;he++){let Re=W()*nt,De=1.2+Math.pow(W(),.7)*5.2,Ce=.012+W()*.02,Ge=4.2+W()*3.6,be=Ge-(W()<.35?0:W()*(Ge-.6)),te=new nn(Ce*.5,Ce,be,4,3,!0);te.translate(0,-be/2,0);let V=te.attributes.position;for(let ae=0;ae<V.count;ae++){let Ae=V.getY(ae);V.setX(ae,V.getX(ae)+Math.sin(Ae*1.7+he)*.05)}te.rotateZ((W()-.5)*.1),te.translate(Math.cos(Re)*De,Ge,Math.sin(Re)*De),ie.push(te)}let me=new we(Gs(ie),w.barkMat);me.castShadow=!0,P.add(me)}i.add(P),E.top=w.height;let $=new we(new Fs(.5,0),new et({color:16765786,emissive:16754688,emissiveIntensity:2.2,roughness:.3}));$.position.set(E.x,Y+w.height+2.2,E.z),$.userData.noAO=!0,i.add($);let H=new Ds(1.9,2.15,64,1);H.rotateX(-Math.PI/2);{let W=H.attributes.position;for(let ie=0;ie<W.count;ie++)W.setY(ie,hn(E.x+W.getX(ie),E.z+W.getZ(ie))-Y+.14)}let j=new we(H,new on({color:new fe(2.2,1.7,.5),transparent:!0,opacity:.8,side:$t,depthWrite:!1}));j.position.set(E.x,Y,E.z),j.userData.noAO=!0,i.add(j);let X=new we(new nn(2.6,2.6,w.height+2,8),new on({visible:!1}));X.position.set(E.x,Y+(w.height+2)/2,E.z),X.userData.hero=U,i.add(X),F.push(X),v.push({g:P,mk:$,ring:j,y:Y}),n(E.x,E.z,Math.max(.8,w.trunkR*.9)),await c("Menumbuhkan pohon bertanda\u2026",.5+.2*(U+1)/e.length)}let L=m_(i,a==="hemat"?8e3:34e3);L.maxCount=34e3,await c("Menata batu dan bunga\u2026",.78);let G=[];try{let U=Xt(404),E=new je,D=new Pt,w=new Wt,P=new k,Y=new k;for(let O of["rock1","rock2","rock3"]){let B=await Hm("assets/models/"+O+".glb"),$=Gm(B.scene,1),H=16;for(let j of $){let X=new Pn(j.geo,j.mat,H);for(let W=0;W<H;W++){let ie,me,he,Re=0;do{let Ce=U()*nt,Ge=U()<.4?zn.r+2+U()*8:12+U()*95;ie=(U()<.4?zn.x:0)+Math.cos(Ce)*Ge,me=(U()<.4?zn.z:0)+Math.sin(Ce)*Ge,he=hn(ie,me),Re++}while((he<sn-.3||Math.hypot(ie,me)<8||hr(ie,me)<2||Math.abs(ie)>110||Math.abs(me)>110)&&Re<40);let De=.5+U()*U()*2.4;w.set((U()-.5)*.4,U()*nt,(U()-.5)*.4),D.setFromEuler(w),P.set(ie,he+De*.06,me),Y.set(De*(.9+U()*.4),De*(.7+U()*.3),De),E.compose(P,D,Y),X.setMatrixAt(W,E),De>1.2&&j===$[0]&&n(ie,me,De*.42)}X.castShadow=!0,X.receiveShadow=!0,X.instanceMatrix.needsUpdate=!0,i.add(X),G.push(X)}}}catch(U){console.warn("rock load failed",U)}try{let U=Xt(808),E=new je,D=new Pt,w=new Wt,P=new k,Y=new k,O=[];for(let B=0,$=0;B<80&&$<2e3;$++){let H=U()*nt,j=5+U()*55,X=Math.cos(H)*j,W=Math.sin(H)*j;if(!(hn(X,W)<sn+.6||hr(X,W)<1.4)){for(let me=0;me<3;me++){let he=X+(U()-.5)*3,Re=W+(U()-.5)*3,De=hn(he,Re);De>sn+.5&&O.push({x:he,y:De,z:Re,s:.7+U()*.6,r:U()*nt})}B++}}for(let B of["flower_blue","flower_white","flower_yellow"]){let $=await Hm("assets/models/"+B+".glb"),H=Gm($.scene,.4),j=O.filter((X,W)=>W%3===["flower_blue","flower_white","flower_yellow"].indexOf(B));for(let X of H){let W=new Pn(X.geo,X.mat,j.length);j.forEach((ie,me)=>{w.set(0,ie.r,0),D.setFromEuler(w),P.set(ie.x,ie.y-.02,ie.z),Y.setScalar(ie.s),E.compose(P,D,Y),W.setMatrixAt(me,E)}),W.instanceMatrix.needsUpdate=!0,W.frustumCulled=!1,W.userData.noAO=!0,i.add(W)}}}catch(U){console.warn("flower load failed",U)}await c("Selesai",1);let q={treeVariants:h.map((U,E)=>({b:U.btris,l:U.ltris,lb:d[E].btris,ll:d[E].ltris})),bush:S.map(U=>({b:U.btris,l:U.ltris})),chunkCount:o.length};return{heroObjs:v,heroHits:F,grass:L,chunks:o,info:q,setQuality(U){l.v=U==="hemat";for(let E of o)E.lod===0&&!E.bush&&(E.meshes[0].castShadow=!l.v);L.geo.instanceCount=U==="hemat"?8e3:34e3},update(U,E,D){Uu.uTime.value=E,L.u.uPlayer.value.set(U.x,U.y,U.z);let w=l.v?60:130,P=l.v?17:42,Y=l.v?.45:1;for(let O of o){let B=Math.hypot(U.x-O.cx,U.z-O.cz)-O.half,$;O.bush?$=B<w*.38:O.lod===0?$=B<P:$=B>=P&&B<w;for(let H of O.meshes)H.visible=$,$&&(H.count=Math.max(1,Math.ceil(O.n*(O.bush?1:Y))))}}}}var $i={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},g_=new hs(-1,1,1,-1,0,1),xf=class extends dt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},b_=new xf,Qi=class{constructor(e){this._mesh=new we(b_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,g_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Bu=class extends ti{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ei.clone(e.uniforms),this.material=new Kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Qi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ko=class extends ti{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}},Hu=class extends ti{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Gu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new pe);this._width=n.width,this._height=n.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bu($i),this.copyPass.material.blending=Ln,this.timer=new _o}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,a=this.passes.length;s<a;s++){let r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ko!==void 0&&(r instanceof Ko?n=!0:r instanceof Hu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qu=class extends ti{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new fe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}};var Zo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

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
		}`},el={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ou={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Om(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=x_(e),n=t.length,s=new Uint8Array(n*4);for(let r=0;r<n;++r){let o=t[r],l=2*Math.PI*o/n,c=new k(Math.cos(l),Math.sin(l),0).normalize();s[r*4]=(c.x*.5+.5)*255,s[r*4+1]=(c.y*.5+.5)*255,s[r*4+2]=127,s[r*4+3]=255}let a=new Hi(s,e,e);return a.wrapS=Yt,a.wrapT=Yt,a.needsUpdate=!0,a}function x_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),a=e-1;for(let r=1;r<=t;){if(s===-1&&a===e?(a=e-2,s=0):(a===e&&(a=0),s<0&&(s=e-1)),n[s*e+a]!==0){a-=2,s++;continue}else n[s*e+a]=r++;a++,s--}return n}var tl={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:yf(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function yf(i,e,t){let n=y_(i,e,t),s="vec3[SAMPLES](";for(let a=0;a<i;a++){let r=n[a];s+=`vec3(${r.x}, ${r.y}, ${r.z})${a<i-1?",":")"}`}return s}function y_(i,e,t){let n=[];for(let s=0;s<i;s++){let a=2*Math.PI*e*s/i,r=Math.pow(s/(i-1),t);n.push(new k(Math.cos(a),Math.sin(a),r))}return n}var Xu=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,a,r=.5*(Math.sqrt(3)-1),o=(e+t)*r,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,p=e-d,x=t-f,g,m;p>x?(g=1,m=0):(g=0,m=1);let y=p-g+u,_=x-m+u,M=p-1+2*u,S=x-1+2*u,T=l&255,b=c&255,v=this.perm[T+this.perm[b]]%12,F=this.perm[T+g+this.perm[b+m]]%12,L=this.perm[T+1+this.perm[b+1]]%12,G=.5-p*p-x*x;G<0?n=0:(G*=G,n=G*G*this._dot(this.grad3[v],p,x));let q=.5-y*y-_*_;q<0?s=0:(q*=q,s=q*q*this._dot(this.grad3[F],y,_));let U=.5-M*M-S*S;return U<0?a=0:(U*=U,a=U*U*this._dot(this.grad3[L],M,S)),70*(n+s+a)}noise3d(e,t,n){let s,a,r,o,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,p=(u+h+d)*f,x=u-p,g=h-p,m=d-p,y=e-x,_=t-g,M=n-m,S,T,b,v,F,L;y>=_?_>=M?(S=1,T=0,b=0,v=1,F=1,L=0):y>=M?(S=1,T=0,b=0,v=1,F=0,L=1):(S=0,T=0,b=1,v=1,F=0,L=1):_<M?(S=0,T=0,b=1,v=0,F=1,L=1):y<M?(S=0,T=1,b=0,v=0,F=1,L=1):(S=0,T=1,b=0,v=1,F=1,L=0);let G=y-S+f,q=_-T+f,U=M-b+f,E=y-v+2*f,D=_-F+2*f,w=M-L+2*f,P=y-1+3*f,Y=_-1+3*f,O=M-1+3*f,B=u&255,$=h&255,H=d&255,j=this.perm[B+this.perm[$+this.perm[H]]]%12,X=this.perm[B+S+this.perm[$+T+this.perm[H+b]]]%12,W=this.perm[B+v+this.perm[$+F+this.perm[H+L]]]%12,ie=this.perm[B+1+this.perm[$+1+this.perm[H+1]]]%12,me=.6-y*y-_*_-M*M;me<0?s=0:(me*=me,s=me*me*this._dot3(this.grad3[j],y,_,M));let he=.6-G*G-q*q-U*U;he<0?a=0:(he*=he,a=he*he*this._dot3(this.grad3[X],G,q,U));let Re=.6-E*E-D*D-w*w;Re<0?r=0:(Re*=Re,r=Re*Re*this._dot3(this.grad3[W],E,D,w));let De=.6-P*P-Y*Y-O*O;return De<0?o=0:(De*=De,o=De*De*this._dot3(this.grad3[ie],P,Y,O)),32*(s+a+r+o)}noise4d(e,t,n,s){let a=this.grad4,r=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,p,x=(e+t+n+s)*l,g=Math.floor(e+x),m=Math.floor(t+x),y=Math.floor(n+x),_=Math.floor(s+x),M=(g+m+y+_)*c,S=g-M,T=m-M,b=y-M,v=_-M,F=e-S,L=t-T,G=n-b,q=s-v,U=F>L?32:0,E=F>G?16:0,D=L>G?8:0,w=F>q?4:0,P=L>q?2:0,Y=G>q?1:0,O=U+E+D+w+P+Y,B=r[O][0]>=3?1:0,$=r[O][1]>=3?1:0,H=r[O][2]>=3?1:0,j=r[O][3]>=3?1:0,X=r[O][0]>=2?1:0,W=r[O][1]>=2?1:0,ie=r[O][2]>=2?1:0,me=r[O][3]>=2?1:0,he=r[O][0]>=1?1:0,Re=r[O][1]>=1?1:0,De=r[O][2]>=1?1:0,Ce=r[O][3]>=1?1:0,Ge=F-B+c,be=L-$+c,te=G-H+c,V=q-j+c,ae=F-X+2*c,Ae=L-W+2*c,Me=G-ie+2*c,tt=q-me+2*c,Fe=F-he+3*c,ft=L-Re+3*c,bt=G-De+3*c,Mt=q-Ce+3*c,z=F-1+4*c,Ut=L-1+4*c,ht=G-1+4*c,Ft=q-1+4*c,Te=g&255,Ue=m&255,Xe=y&255,Ke=_&255,N=o[Te+o[Ue+o[Xe+o[Ke]]]]%32,A=o[Te+B+o[Ue+$+o[Xe+H+o[Ke+j]]]]%32,K=o[Te+X+o[Ue+W+o[Xe+ie+o[Ke+me]]]]%32,ge=o[Te+he+o[Ue+Re+o[Xe+De+o[Ke+Ce]]]]%32,de=o[Te+1+o[Ue+1+o[Xe+1+o[Ke+1]]]]%32,ve=.6-F*F-L*L-G*G-q*q;ve<0?u=0:(ve*=ve,u=ve*ve*this._dot4(a[N],F,L,G,q));let _e=.6-Ge*Ge-be*be-te*te-V*V;_e<0?h=0:(_e*=_e,h=_e*_e*this._dot4(a[A],Ge,be,te,V));let re=.6-ae*ae-Ae*Ae-Me*Me-tt*tt;re<0?d=0:(re*=re,d=re*re*this._dot4(a[K],ae,Ae,Me,tt));let le=.6-Fe*Fe-ft*ft-bt*bt-Mt*Mt;le<0?f=0:(le*=le,f=le*le*this._dot4(a[ge],Fe,ft,bt,Mt));let xe=.6-z*z-Ut*Ut-ht*ht-Ft*Ft;return xe<0?p=0:(xe*=xe,p=xe*xe*this._dot4(a[de],z,Ut,ht,Ft)),27*(u+h+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,a){return e[0]*t+e[1]*n+e[2]*s+e[3]*a}};var nl=class i extends ti{constructor(e,t,n=512,s=512,a,r,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Om(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new rn(this.width,this.height,{type:fn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Kt({defines:Object.assign({},Zo.defines),uniforms:ei.clone(Zo.uniforms),vertexShader:Zo.vertexShader,fragmentShader:Zo.fragmentShader,blending:Ln,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new po,this.normalMaterial.blending=Ln,this.pdMaterial=new Kt({defines:Object.assign({},tl.defines),uniforms:ei.clone(tl.uniforms),vertexShader:tl.vertexShader,fragmentShader:tl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Kt({defines:Object.assign({},el.defines),uniforms:ei.clone(el.uniforms),vertexShader:el.vertexShader,fragmentShader:el.fragmentShader,blending:Ln}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Kt({uniforms:ei.clone($i.uniforms),vertexShader:$i.vertexShader,fragmentShader:$i.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ao,blendDst:oa,blendEquation:yi,blendSrcAlpha:Eo,blendDstAlpha:oa,blendEquationAlpha:yi}),this.blendMaterial=new Kt({uniforms:ei.clone(Ou.uniforms),vertexShader:Ou.vertexShader,fragmentShader:Ou.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:gc,blendSrc:Ao,blendDst:oa,blendEquation:yi,blendSrcAlpha:Eo,blendDstAlpha:oa,blendEquationAlpha:yi}),this._fsQuad=new Qi(null),this._originalClearColor=new fe,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new wi;s.format=Fi,s.type=ds,this.normalRenderTarget=new rn(this.width,this.height,{minFilter:an,magFilter:an,type:fn,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=yf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ln,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ln,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ln,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Ln,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ln,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,a){e.getClearColor(this._originalClearColor);let r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_renderOverride(e,t,n,s,a){e.getClearColor(this._originalClearColor);let r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,a=t.clearAlpha||a,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Xu,n=e*e*4,s=new Uint8Array(n);for(let r=0;r<e;r++)for(let o=0;o<e;o++){let l=r,c=o;s[(r*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(r*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(r*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(r*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let a=new Hi(s,e,e,oi,$n);return a.wrapS=Yt,a.wrapT=Yt,a.needsUpdate=!0,a}};nl.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Xm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var mr=class i extends ti{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new pe(e.x,e.y):new pe(256,256),this.clearColor=new fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(a,r,{type:fn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new rn(a,r,{type:fn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new rn(a,r,{type:fn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),a=Math.round(a/2),r=Math.round(r/2)}let o=Xm;this.highPassUniforms=ei.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new pe(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ei.clone($i.uniforms),this.blendMaterial=new Kt({uniforms:this.copyUniforms,vertexShader:$i.vertexShader,fragmentShader:$i.fragmentShader,premultipliedAlpha:!0,blending:To,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new fe,this._oldClearAlpha=1,this._basic=new on,this._fsQuad=new Qi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new pe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let s=[],a=[];for(let r=1;r<e;r+=2){let o=t[r],l=r+1<e?t[r+1]:0,c=o+l;s.push((r*o+(r+1)*l)/c),a.push(c)}return new Kt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:a}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};mr.BlurDirectionX=new pe(1,0);mr.BlurDirectionY=new pe(0,1);var il={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Vu=class extends ti{constructor(){super(),this.isOutputPass=!0,this.uniforms=ei.clone(il.uniforms),this.material=new Wa({name:il.name,uniforms:this.uniforms,vertexShader:il.vertexShader,fragmentShader:il.fragmentShader}),this._fsQuad=new Qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Po?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===la?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Io&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Yu(i,e,t,n={}){let s=new rn(4,4,{type:fn,samples:4}),a=new Gu(i,s);a.addPass(new qu(e,t));let r=new nl(e,t,4,4);r.blendIntensity=n.aoStrength??1,r.updateGtaoMaterial({radius:n.aoRadius??.7,distanceExponent:1,thickness:1.5,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:12});let o=r._overrideVisibility.bind(r);r._overrideVisibility=function(){o(),e.traverse(c=>{c.userData&&c.userData.noAO&&c.visible&&(c.visible=!1,r._visibilityCache.push(c))})},a.addPass(r);let l=new mr(new pe(4,4),n.bloomStrength??.3,.7,n.bloomThreshold??1);return a.addPass(l),a.addPass(new Vu),{composer:a,gtao:r,bloom:l,setSize(c,u,h){a.setPixelRatio(h),a.setSize(c,u)},setQuality(c){r.enabled=l.enabled=c==="tinggi";let u=c==="tinggi"?4:2;for(let h of[a.renderTarget1,a.renderTarget2])h.samples!==u&&(h.samples=u,h.dispose())},render(c){a.render(c)},dispose(){a.dispose&&a.dispose()}}}var Os=class extends Wn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new bi;e.deleteAttribute("uv");let t=new et({side:Sn}),n=new et,s=new aa(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let a=new we(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let r=new Pn(e,n,6),o=new Ot;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new we(e,gr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new we(e,gr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new we(e,gr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new we(e,gr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new we(e,gr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new we(e,gr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function gr(i){return new mo({color:0,emissive:16777215,emissiveIntensity:i})}var Xs=6;var Vs=320*Math.PI/180,Qu=Vs+260*Math.PI/180,$u=5.2,br=new Float32Array(256*256);{let i=Xt(1234);for(let e=0;e<br.length;e++)br[e]=i()}function _i(i,e,t=256,n=256){let s=Math.floor(i),a=Math.floor(e),r=i-s,o=e-a,l=r*r*(3-2*r),c=o*o*(3-2*o),u=(s%t+t)%t,h=(u+1)%t,d=(a%n+n)%n,f=(d+1)%n,p=br[(d&255)*256+(u&255)],x=br[(d&255)*256+(h&255)],g=br[(f&255)*256+(u&255)],m=br[(f&255)*256+(h&255)];return p+(x-p)*l+(g-p)*c+(p-x-g+m)*l*c}function al(i,e,t=3,n=256,s=256){let a=0,r=.5,o=1;for(let l=0;l<t;l++)a+=r*_i(i*o,e*o,n*o,s*o),o*=2,r*=.5;return a}var vf=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t];function M_(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),a=s.createImageData(i,i),r=a.data,o=Object.fromEntries(e.map(M=>[M.id,M])),l=t.barkA,c=t.barkB,u=t.cortex,h=[.56,.76,.33],d=o.floem.ro,f=o.kambium.ro,p=o.xilem.ro,x=o.teras.ro,g=o.empulur.ro,m=t.rings,y=t.contrast;for(let M=0;M<i;M++)for(let S=0;S<i;S++){let T=(S/i-.5)*$u,b=(.5-M/i)*$u,v=Math.hypot(T,b),F=Math.atan2(b,T),L,G=(al(T*1.4+3,b*1.4+7,3)-.35)*.09+Math.sin(F*3+1.2)*.012,q=v+G;if(v>=d){let w=al(F*9,v*7,3),P=kt(.52,.72,al(F*16+5,v*3.2,3));L=vf(l,c,w*.9+P*.7);let Y=.82+.3*_i(F*70,v*9);L=L.map(O=>O*Y)}else if(v>=f){let w=_i(F*90,v*14),P=_i(F*28,v*5);L=u.map(Y=>Y*(.86+.2*w)*(.95+.1*P))}else if(v>=p)L=h.map(w=>w*(.94+.1*_i(F*50,v*40)));else if(v>=g){let w=v<x,P=(q-g)*m,Y=P-Math.floor(P),O=Math.floor(P),B=kt(.5,.93,Y)*(1-kt(.965,1,Y)),$=.95+.08*(O*7919%13/13-.5)*2,H=Math.pow(_i(F*60,v*1.6),3)*t.rays,j=(_i(T*45,b*45)-.5)*.05,X=w?t.heartE:t.sapE,W=w?t.heartL:t.sapL;L=vf(X,W,B*y*2.2).map(me=>me*$+H+j);let ie=_i(T*150+11,b*150+5);if(t.pores==="ring"?Y<.16&&ie>.62&&(L=L.map(me=>me*.55)):t.pores==="diffuse"?ie>.87&&(L=L.map(me=>me*.78)):t.pores==="resin"&&_i(T*55+3,b*55+9)>.972&&(L=[.55,.34,.14]),w){let me=kt(.78,.9,_i(F*5+9,v*.4))*kt(1,.4,v);L=L.map(he=>he*(1-me*.35))}}else{let w=v/g;L=t.pith.map(P=>P*(.9+.14*_i(T*80,b*80))*(1-.35*(1-w)*(1-w)))}let U=Math.min(Math.abs(v-d),Math.abs(v-f),Math.abs(v-p),Math.abs(v-x)),E=1-.38*(1-kt(0,.012,U)),D=(M*i+S)*4;r[D]=Ct(L[0]*E,0,1)*255,r[D+1]=Ct(L[1]*E,0,1)*255,r[D+2]=Ct(L[2]*E,0,1)*255,r[D+3]=255}s.putImageData(a,0,0);let _=new _n(n);return _.colorSpace=gt,_.anisotropy=8,_.generateMipmaps=!0,_.minFilter=ri,_.repeat.set(1/$u,1/$u),_.offset.set(.5,.5),_}function sl(i,e,t={}){let a=document.createElement("canvas");a.width=256,a.height=512;let r=a.getContext("2d"),o=r.createImageData(256,512),l=o.data,c=t.fu||48,u=t.fv||4;for(let d=0;d<512;d++)for(let f=0;f<256;f++){let p=f/256,x=d/512,g=al(p*c+0,x*u,2,c,u),m=.5+.5*Math.sin((p*6+al(p*3,x*1.5,2,3,2)*5)*nt),y=Ct(.35+.65*g,0,1),_=vf(i,e,Ct((1-y)*.8+m*(t.band??.25),0,1)),M=_i(p*220,x*6,220,6)>.93?.88:1,S=(d*256+f)*4;l[S]=Ct(_[0]*M,0,1)*255,l[S+1]=Ct(_[1]*M,0,1)*255,l[S+2]=Ct(_[2]*M,0,1)*255,l[S+3]=255}r.putImageData(o,0,0);let h=new _n(a);return h.colorSpace=gt,h.wrapS=h.wrapT=Yt,h.anisotropy=8,h.repeat.set(1/1.3,1/3),h}function Mf(i,e,t,n){let s=new Un().load(i);return s.wrapS=s.wrapT=Yt,s.anisotropy=8,e&&(s.colorSpace=gt),s.repeat.set(t,n),s}function v_(i,e){let t=new Li;e<=.001?(t.moveTo(0,0),t.lineTo(i*Math.cos(Vs),i*Math.sin(Vs)),t.absarc(0,0,i,Vs,Qu,!1),t.lineTo(0,0)):(t.absarc(0,0,i,Vs,Qu,!1),t.absarc(0,0,e,Qu,Vs,!0),t.closePath());let n=new Is(t,{depth:Xs,bevelEnabled:!1,curveSegments:96});n.rotateX(-Math.PI/2),n.translate(0,-Xs/2,0);let s=n.attributes.position,a=n.attributes.uv,r=.001;for(let o of n.groups)for(let l=o.start;l<o.start+o.count;l+=3){let c=[0,1,2].map(h=>Math.hypot(s.getX(l+h),s.getZ(l+h))),u="cap";o.materialIndex===1&&(u=c.every(h=>Math.abs(h-i)<r)?"outer":e>0&&c.every(h=>Math.abs(h-e)<r)?"inner":"cut");for(let h=0;h<3;h++){let d=s.getX(l+h),f=s.getY(l+h),p=s.getZ(l+h),x,g;if(u==="cap")x=d,g=-p;else if(u==="outer"||u==="inner"){let m=Math.atan2(-p,d)-Vs;m=(m%nt+nt)%nt,m>5.5&&(m-=nt),x=m*(u==="outer"?i:e),g=f}else x=Math.hypot(d,p),g=f;a.setXY(l+h,x,g)}}return a.needsUpdate=!0,n}function __(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,nt),e.fill(),new _n(i)}function Vm(i,e){let t=new Wn;{let E=document.createElement("canvas");E.width=E.height=512;let D=E.getContext("2d"),w=D.createRadialGradient(256,230,20,256,256,420);w.addColorStop(0,"#1f4a42"),w.addColorStop(.55,"#0f2a26"),w.addColorStop(1,"#040c0a"),D.fillStyle=w,D.fillRect(0,0,512,512);let P=new _n(E);P.colorSpace=gt,t.background=P}let n=new Mi(i);t.environment=n.fromScene(new Os,.04).texture,t.environmentIntensity=.45;let s=new tn(38,1,.1,100),a=new wn(16773596,2.4);a.position.set(4,9,8),a.castShadow=!0,a.shadow.mapSize.set(2048,2048);let r=a.shadow.camera;r.left=-6,r.right=6,r.top=6,r.bottom=-6,r.near=1,r.far=30,a.shadow.bias=-5e-4,a.shadow.normalBias=.03,t.add(a);let o=new wn(9425151,1.3);o.position.set(-6,3,-5),t.add(o);let c=matchMedia("(pointer:coarse)").matches?1024:1280,u={oak:[Tu,Eu,Au,Su],pine:[Pu,wu,Lu,Ru],birch:[Mu,vu,_u,yu],willow:[Fu,ku,Du,Iu]},h={},d={},f=E=>h[E]||(h[E]=u[E].map((D,w)=>Mf(D,w===0,1/2.4,1/2.4)));function p(E){let D=E.id;if(d[D])return d[D];let w=new fe(E.barkTint),P=[w.r,w.g,w.b],Y={...E,barkA:P.map(B=>B*.5),barkB:P.map(B=>B*.95)},O={floem:sl(E.cortex,E.cortex.map(B=>B*.72),{fu:64,band:.12}),kambium:sl([.56,.76,.34],[.42,.62,.24],{fu:64,band:.05}),xilem:sl(E.sapE,E.sapL,{fu:40,band:.3}),teras:sl(E.heartE,E.heartL,{fu:40,band:.35+E.contrast*.3}),empulur:sl(E.pith,E.pith.map(B=>B*.85),{fu:90,band:.05})};return d[D]={cap:M_(c,e,Y),side:O,bark:f(E.bark),tint:new fe(E.barkTint)}}let x=[],g={};e.forEach(E=>{let D=new fe(E.col),w=new et({bumpScale:.6,roughness:E.id==="kambium"?.5:.78,metalness:0}),P=E.id==="kulit"?new et({roughness:1,metalness:0}):new et({roughness:E.id==="kambium"?.5:.78,metalness:0}),Y=new we(v_(E.ro,E.ri),[w,P]);Y.castShadow=!0,Y.receiveShadow=!0,Y.userData.layer=E.id,t.add(Y),E.id==="kulit"&&Y.geometry.setAttribute("uv1",Y.geometry.attributes.uv),x.push(Y),g[E.id]={mats:[w,P],base:new fe(1,1,1),emi:D,k:0}});let m=null;function y(E){if(m===E.id)return;m=E.id;let D=p(E);e.forEach(w=>{let[P,Y]=g[w.id].mats;if(P.map=P.bumpMap=D.cap,P.needsUpdate=!0,w.id==="kulit"){let[O,B,$,H]=D.bark;Y.map=O,Y.normalMap=B,Y.roughnessMap=$,Y.aoMap=H,Y.userData.tint=D.tint,g[w.id].tint=D.tint.clone().lerp(new fe(1,1,1),.25)}else Y.map=D.side[w.id];Y.needsUpdate=!0})}let _=Mf(Us,!0,2.2,2.2),M=Mf(Bs,!1,2.2,2.2),S=new we(new nn(3.7,3.9,.34,72),new et({map:_,normalMap:M,color:new fe(.8,.72,.62),roughness:1}));S.position.y=-Xs/2-.17,S.receiveShadow=!0,S.userData.noAO=!0,t.add(S);let T=__();function b(E,D,w,P,Y,O){let B=Xt(O),$=[];for(let X=0;X<E;X++)$.push({f:X%2,r:D[0]+B()*(D[1]-D[0]),y:(B()-.5)*Xs,v:.7+B()*.7,p:B()*nt});let H=new dt;H.setAttribute("position",new lt(new Float32Array(E*3),3));let j=new Kn(H,new Yn({map:T,color:P,size:Y,sizeAttenuation:!0,transparent:!0,depthWrite:!1}));return j.frustumCulled=!1,j.userData.noAO=!0,t.add(j),{pts:j,data:$,dir:w}}let v=.03,F=b(110,[1.32,1.82],1,new fe(.5,1.5,2.6),.22,31),L=b(80,[2.04,2.24],-1,new fe(2.6,1.55,.35),.22,32);function G(E,D,w,P){let Y=E.pts.geometry.attributes.position;for(let O=0;O<E.data.length;O++){let B=E.data[O];B.y+=E.dir*B.v*D*w,B.y>Xs/2?B.y-=Xs:B.y<-Xs/2&&(B.y+=Xs);let $=(B.f===0?Vs-v:Qu+v)+Math.sin(P*1.6+B.p)*.006;Y.setXYZ(O,B.r*Math.cos($),B.y,-B.r*Math.sin($))}Y.needsUpdate=!0}let q={yaw:0,pitch:.5,dist:14,user:!1,sun:.65},U=new fe(.2,.26,.24);return{scene:t,camera:s,layerMeshes:x,layerMat:g,waterFlow:F,sugarFlow:L,state:q,setSpecies:y,update(E,D,w,P){q.user||(q.yaw=.3*Math.sin(D*.45));let Y=Math.cos(q.pitch),O=Math.sin(q.pitch);s.position.set(Math.sin(q.yaw)*Y*q.dist,O*q.dist,Math.cos(q.yaw)*Y*q.dist),s.lookAt(0,0,0);let B=q.sun;a.intensity=1+1.9*B,t.environmentIntensity=.3+.25*B,G(F,.25+1.7*B,E,D),G(L,.12+.75*B,E,D),e.forEach($=>{let H=g[$.id],j=w&&w!==$.id?.7:0;H.k+=(j-H.k)*Math.min(1,E*10);let X=w===$.id?.12:P===$.id?.07:0;H.mats.forEach((W,ie)=>{W.color.copy(H.base),ie===1&&H.tint&&W.color.multiply(H.tint),W.color.lerp(U,H.k),W.emissive.copy(H.emi).multiplyScalar(X)})})}}}var S_=[{id:"kulit",name:"Kulit dan bulu",sci:"Integumen",ui:"#e0a56a",short:"Pelindung tubuh dan pengatur suhu.",what:"Kulit dan bulu adalah lapisan terluar. Bulu kucing terdiri dari bulu pelindung yang panjang dan bulu halus di bawahnya (undercoat). Kumis (vibrissae) adalah rambut peraba yang sangat peka.",fn:"Melindungi dari luka, kuman, dan panas atau dingin. Bulu menjebak udara sehingga menahan panas tubuh. Kumis membantu kucing merasakan lebar celah dan gerakan udara.",fact:"Suhu tubuh normal kucing sekitar 38 sampai 39 derajat Celsius, sedikit lebih hangat dari manusia. Kucing hanya sedikit berkeringat, terutama lewat telapak kaki."},{id:"otot",name:"Otot",sci:"Sistem muskuler",ui:"#d0594a",short:"Penggerak tubuh lewat kontraksi.",what:"Otot rangka menempel ke tulang lewat tendon. Saat otot berkontraksi (memendek), tulang ditarik dan sendi bergerak. Otot kucing panjang dan lentur, terutama di kaki belakang dan punggung.",fn:"Menggerakkan tubuh untuk berjalan, melompat, dan memanjat. Otot dan tendon di kaki juga menarik cakar masuk dan keluar (cakar retraktil), sehingga cakar tetap tajam.",fact:"Kucing bisa melompat beberapa kali tinggi tubuhnya, sekitar lima kali menurut banyak rujukan, berkat otot kaki belakang yang kuat."},{id:"rangka",name:"Rangka",sci:"Sistem rangka",ui:"#eae0c4",short:"Kerangka penopang dan pelindung organ.",what:"Rangka kucing terdiri dari sekitar 230 tulang (manusia dewasa 206). Ada tengkorak, tulang belakang dengan ruas ekor yang panjang, 13 pasang tulang rusuk, dan tulang kaki.",fn:"Menopang tubuh, melindungi organ penting (otak oleh tengkorak, jantung dan paru oleh tulang rusuk), dan menjadi tempat melekatnya otot.",fact:"Tulang selangka kucing sangat kecil dan tidak tersambung ke tulang lain. Itu membuat bahu lentur, jadi kucing bisa menyelip di celah sempit selama kepalanya muat."},{id:"otak",name:"Otak",sci:"Sistem saraf pusat",ui:"#e8a8b0",short:"Pusat kendali dan pengolah informasi.",what:"Otak berada di dalam tengkorak dan berlekuk-lekuk. Otak besar mengolah indra dan perilaku, otak kecil (cerebellum) mengatur keseimbangan dan koordinasi gerak.",fn:"Menerima sinyal dari mata, telinga, hidung, kumis, dan kulit, lalu memerintahkan otot bergerak lewat saraf.",fact:"Beratnya hanya sekitar 25 sampai 30 gram. Kucing melihat baik di tempat redup karena mata punya lapisan pemantul cahaya (tapetum lucidum), itulah sebabnya mata kucing tampak bersinar saat disorot lampu."},{id:"jantung",name:"Jantung",sci:"Sistem peredaran darah",ui:"#e0505e",short:"Pompa yang mengalirkan darah ke seluruh tubuh.",what:"Jantung kucing berbilik empat seperti jantung manusia: dua serambi (atrium) menerima darah dan dua bilik (ventrikel) memompanya keluar.",fn:"Memompa darah yang membawa oksigen dan nutrisi ke seluruh tubuh, dan mengirim darah miskin oksigen ke paru-paru untuk diisi ulang.",fact:"Detak jantung kucing sehat umumnya sekitar 140 sampai 220 kali per menit, jauh lebih cepat dari manusia, dan naik saat aktif atau takut. Kucing tidak bisa membuat cukup taurin sendiri, jadi harus mendapatnya dari makanan berbahan daging. Kekurangan taurin dapat merusak otot jantung."},{id:"paru",name:"Paru-paru",sci:"Sistem pernapasan",ui:"#f0a0a8",short:"Tempat pertukaran oksigen dan karbon dioksida.",what:"Udara masuk lewat hidung, trakea (batang tenggorok), lalu bercabang ke dalam paru-paru. Di ujung cabangnya ada kantong kecil (alveolus) tempat gas bertukar dengan darah.",fn:"Mengambil oksigen dari udara ke darah dan membuang karbon dioksida. Otot diafragma dan otot antar rusuk membuat paru mengembang dan mengempis.",fact:"Kucing sehat bernapas sekitar 20 sampai 30 kali per menit saat istirahat. Kucing jarang terengah-engah, jadi kucing yang bernapas terengah atau cepat saat santai perlu dibawa ke dokter hewan."},{id:"hati",name:"Hati",sci:"Sistem pencernaan dan metabolisme",ui:"#b0463c",short:"Pabrik kimia tubuh: empedu, penawar racun, penyimpan nutrisi.",what:"Hati adalah organ besar berwarna cokelat kemerahan di depan perut, tepat di belakang diafragma.",fn:"Membuat empedu untuk membantu mencerna lemak, menetralkan zat berbahaya, menyimpan nutrisi, dan membuat protein darah.",fact:"Hati kucing sulit memecah beberapa zat, sehingga banyak obat manusia, misalnya parasetamol, beracun bagi kucing. Jangan memberi obat manusia tanpa saran dokter hewan."},{id:"lambung",name:"Lambung",sci:"Sistem pencernaan",ui:"#e89a8a",short:"Kantong pencerna awal dengan asam dan enzim.",what:"Makanan turun dari mulut lewat kerongkongan (esofagus) menuju lambung, kantong berotot dengan dinding yang melipat.",fn:"Mengaduk makanan, mencampurnya dengan asam lambung dan enzim sehingga protein mulai terurai menjadi bubur makanan (kimus).",fact:"Kucing adalah karnivora obligat, artinya tubuhnya dirancang untuk makan daging. Lambungnya kecil, itu sebabnya kucing cocok makan sedikit tapi sering."},{id:"usus",name:"Usus",sci:"Sistem pencernaan",ui:"#f0b8a8",short:"Menyerap nutrisi dan air, lalu membentuk tinja.",what:"Usus terdiri dari usus halus yang berkelok-kelok dan usus besar yang lebih pendek dan lebih lebar, berakhir di anus.",fn:"Usus halus menyerap nutrisi ke dalam darah. Usus besar menyerap air dan membentuk sisa makanan menjadi tinja.",fact:"Usus kucing relatif pendek dibanding hewan pemakan tumbuhan karena daging lebih mudah dicerna. Titik kuning yang bergerak di animasi menunjukkan perjalanan makanan dari mulut sampai anus."},{id:"ginjal",name:"Ginjal",sci:"Sistem ekskresi",ui:"#a04a3a",short:"Penyaring darah yang membuat urine.",what:"Ada dua ginjal berbentuk kacang di bagian belakang rongga perut, dekat tulang punggung.",fn:"Menyaring darah, membuang sisa metabolisme, mengatur kadar air dan garam, lalu membentuk urine.",fact:"Ginjal kucing bisa membuat urine yang sangat pekat sehingga kucing tidak banyak minum. Penyakit ginjal kronis cukup sering terjadi pada kucing yang menua."},{id:"kandung",name:"Kandung kemih",sci:"Sistem ekskresi",ui:"#f0dc8a",short:"Menampung urine sebelum dibuang.",what:"Kandung kemih adalah kantong berdinding otot di bagian belakang perut. Urine mengalir dari ginjal ke sana lewat dua saluran (ureter).",fn:"Menampung urine sementara, lalu mengeluarkannya lewat saluran uretra saat kucing buang air kecil.",fact:"Pada kucing jantan, uretra lebih sempit sehingga lebih mudah tersumbat. Kucing jantan yang mengejan di kotak pasir tanpa urine keluar harus segera ditangani dokter hewan."}],T_={id:"kucing",kind:"animal",tagNear:5,name:"Kucing",short:"kucing",sci:"Felis catus",family:"Felidae",x:-5,z:7,top:.7,mkOff:1.1,promptY:.55,fact:"Kucing domestik termasuk keluarga Felidae, sama seperti singa dan harimau. Tubuhnya dirancang untuk berburu: refleks cepat, cakar yang bisa ditarik, mata peka cahaya redup, dan kumis peraba.",hint:"Geser slider Kedalaman untuk mengupas lapisan dari kulit sampai organ dalam, atau ketuk bagian tubuh dan daftar di samping. Geser Aktivitas untuk melihat jantung dan paru bekerja lebih cepat."},E_=[{id:"c1",sp:"kucing",q:"Lapisan mana yang terletak paling dalam, setelah kulit, otot, dan rangka dikupas?",o:["Organ dalam seperti jantung dan paru","Bulu pelindung","Kumis","Cakar"],a:0,e:"Urutannya dari luar: kulit dan bulu, otot, rangka, lalu organ dalam yang dilindungi tulang rusuk dan otot perut."},{id:"c2",sp:"kucing",q:"Jantung kucing berbilik empat. Apa tugas bilik (ventrikel)?",o:["Memompa darah keluar dari jantung","Menyimpan makanan","Menyaring urine","Membuat empedu"],a:0,e:"Serambi menerima darah, bilik memompanya keluar. Bilik kanan ke paru, bilik kiri ke seluruh tubuh."},{id:"c3",sp:"kucing",q:"Kira-kira berapa detak jantung kucing sehat per menit?",o:["10 sampai 30","60 sampai 80","140 sampai 220","500 sampai 600"],a:2,e:"Kisaran umumnya 140 sampai 220 kali per menit, lebih cepat daripada manusia (sekitar 60 sampai 100)."},{id:"c4",sp:"kucing",q:"Apa fungsi utama paru-paru?",o:["Menukar oksigen dan karbon dioksida","Membuat empedu","Menyaring darah jadi urine","Menyerap air dari sisa makanan"],a:0,e:"Di alveolus, oksigen masuk ke darah dan karbon dioksida dilepas ke udara napas."},{id:"c5",sp:"kucing",q:"Organ mana yang membuat empedu untuk membantu mencerna lemak?",o:["Hati","Ginjal","Lambung","Kandung kemih"],a:0,e:"Empedu dibuat di hati lalu dialirkan ke usus halus."},{id:"c6",sp:"kucing",q:"Kucing disebut karnivora obligat. Apa artinya?",o:["Tubuhnya dirancang makan daging dan butuh zat dari daging, misalnya taurin","Hanya makan sayur","Bisa hidup tanpa makan","Makan apa saja sama baiknya"],a:0,e:"Kucing tidak bisa membuat cukup taurin sendiri, jadi harus mendapatnya dari makanan berbahan daging."},{id:"c7",sp:"kucing",q:"Di mana nutrisi dari makanan terutama diserap ke dalam darah?",o:["Usus halus","Kerongkongan","Kandung kemih","Trakea"],a:0,e:"Usus halus punya permukaan lipatan luas untuk menyerap nutrisi. Usus besar terutama menyerap air."},{id:"c8",sp:"kucing",q:"Apa tugas ginjal?",o:["Menyaring darah dan membentuk urine","Memompa darah","Mencerna protein","Menyimpan oksigen"],a:0,e:"Ginjal membuang sisa metabolisme dan mengatur air serta garam dalam tubuh, hasilnya urine."},{id:"c9",sp:"kucing",q:"Mengapa kucing yang bernapas terengah-engah saat santai perlu dibawa ke dokter hewan?",o:["Kucing sehat jarang terengah, jadi itu bisa tanda gangguan napas atau jantung","Itu tanda kucing sedang senang","Itu cara normal kucing mendinginkan diri","Itu tanda kucing lapar"],a:0,e:"Napas istirahat normal sekitar 20 sampai 30 kali per menit dan tenang. Napas terengah pada kucing perlu diperiksa."}];var Ym={id:"kucing",name:"Kucing",layers:S_,specimen:T_,quiz:E_};var A_=i=>{let e=i==="sapi";return[{id:"kulit",name:"Kulit dan rambut",sci:"Integumen",ui:e?"#e8e2d6":"#e0cfae",short:"Pelindung tubuh dan pengatur suhu.",what:e?"Sapi perah Friesian Holstein (FH) berambut pendek belang hitam-putih. Pola belang tiap sapi berbeda, jadi bisa dipakai untuk mengenali sapi satu per satu.":"Kambing Peranakan Etawa (PE) adalah hasil persilangan kambing Etawa (Jamnapari) dari India dengan kambing kacang lokal. Cirinya telinga panjang menggantung, hidung melengkung, dan rambut panjang di paha belakang.",fn:"Melindungi tubuh dari luka, kuman, sengatan matahari, dan serangga, serta membantu mengatur suhu tubuh.",fact:e?"Sapi FH berasal dari daerah beriklim sejuk di Eropa, jadi di Indonesia biasanya dipelihara di dataran tinggi yang dingin, misalnya di lereng gunung di Jawa Timur. Udara panas membuat produksi susunya turun.":"Kambing PE termasuk kambing dwiguna: dipelihara untuk diambil susu dan dagingnya."},{id:"otot",name:"Otot",sci:"Sistem muskuler",ui:"#d0594a",short:"Penggerak tubuh dan rahang pengunyah.",what:"Otot rangka menempel ke tulang lewat tendon dan menggerakkan sendi. Otot rahang ruminansia sangat kuat karena dipakai mengunyah berjam-jam.",fn:"Menggerakkan kaki untuk berjalan, leher untuk merenggut pakan, dan rahang untuk mengunyah, termasuk mengunyah ulang saat memamah biak.",fact:e?"Otot sapi yang kita makan disebut daging. Bagian yang banyak bergerak, seperti kaki, lebih liat dibanding bagian punggung yang jarang bekerja keras.":"Kambing pemanjat yang lincah dan suka meramban, yaitu memakan daun dan ranting semak, bukan hanya merumput di tanah."},{id:"rangka",name:"Rangka",sci:"Sistem rangka",ui:"#eae0c4",short:"Kerangka penopang tubuh yang besar.",what:"Rangka terdiri dari tengkorak, tulang belakang, 13 pasang tulang rusuk, panggul, dan tulang kaki. Tiap kaki berakhir pada dua kuku (kuku belah).",fn:"Menopang berat tubuh, melindungi organ dalam, dan menjadi tempat melekatnya otot.",fact:e?"Sapi tidak punya gigi seri di rahang atas. Sebagai gantinya ada bantalan gigi yang keras. Sapi merenggut rumput dengan lidah, lalu menjepitnya di antara gigi seri bawah dan bantalan itu.":"Tanduk kambing terdiri dari inti tulang yang dibungkus lapisan keratin (bahan yang sama dengan kuku). Tanduk tumbuh seumur hidup dan tidak lepas tiap tahun, berbeda dengan ranggah rusa."},{id:"otak",name:"Otak dan mata",sci:"Sistem saraf",ui:"#e8a8b0",short:"Pusat kendali; mata di samping kepala.",what:"Otak mengolah informasi dari indra dan mengatur gerak serta perilaku. Mata ruminansia terletak di sisi kepala.",fn:"Mata di samping memberi bidang pandang sangat luas untuk mengawasi pemangsa sambil merunduk makan. Gantinya, area yang terlihat oleh dua mata sekaligus sempit, sehingga menilai jarak kurang tepat.",fact:e?"Pupil sapi berbentuk lonjong mendatar. Bentuk ini membantu melihat garis cakrawala yang luas di sekelilingnya.":"Pupil kambing berbentuk persegi panjang mendatar. Saat kambing menunduk untuk makan, bola matanya berputar sehingga pupil tetap sejajar dengan tanah."},{id:"jantung",name:"Jantung",sci:"Sistem peredaran darah",ui:"#e0505e",short:"Pompa darah berbilik empat.",what:"Jantung berbilik empat: dua serambi menerima darah dan dua bilik memompanya keluar, sama seperti jantung kucing dan manusia.",fn:"Memompa darah berisi oksigen dan nutrisi ke seluruh tubuh, termasuk ke ambing yang butuh banyak darah untuk membuat susu.",fact:e?"Detak jantung sapi dewasa yang istirahat umumnya sekitar 48 sampai 84 kali per menit, lebih lambat daripada kucing. Hewan bertubuh besar cenderung berdetak lebih lambat.":"Detak jantung kambing dewasa yang istirahat umumnya sekitar 70 sampai 90 kali per menit."},{id:"paru",name:"Paru-paru",sci:"Sistem pernapasan",ui:"#f0a0a8",short:"Pertukaran oksigen dan karbon dioksida.",what:"Udara masuk lewat hidung dan trakea, lalu bercabang di dalam paru-paru sampai ke kantong udara kecil (alveolus).",fn:"Mengambil oksigen ke darah dan membuang karbon dioksida. Napas juga membantu membuang panas tubuh.",fact:e?"Sapi dewasa yang istirahat bernapas sekitar 26 sampai 50 kali per menit. Saat kepanasan, napasnya jauh lebih cepat untuk membuang panas.":"Kambing dewasa yang istirahat bernapas sekitar 15 sampai 30 kali per menit."},{id:"hati",name:"Hati",sci:"Sistem pencernaan dan metabolisme",ui:"#b0463c",short:"Pengolah nutrisi dan penetral racun.",what:"Hati terletak di sisi kanan bagian depan perut, tepat di belakang diafragma.",fn:"Mengolah zat hasil pencernaan, menetralkan racun, menyimpan nutrisi, dan membuat empedu.",fact:"Ruminansia mendapat sangat sedikit gula langsung dari usus. Hati mereka membuat sebagian besar gula darah dari asam lemak hasil fermentasi di rumen."},{id:"rumen",name:"Rumen",sci:"Lambung ruang 1",ui:"#c9a27e",short:"Tangki fermentasi raksasa berisi mikroba.",what:"Rumen adalah ruang lambung terbesar dan menempati hampir seluruh sisi kiri perut. Dindingnya dipenuhi tonjolan kecil (papila) yang menyerap hasil fermentasi.",fn:"Bakteri, protozoa, dan jamur di dalam rumen memecah selulosa rumput yang tidak bisa dicerna hewan sendiri. Hasilnya asam lemak yang menjadi sumber energi utama, serta gas.",fact:e?"Pada sapi dewasa rumen bisa menampung lebih dari 100 liter. Rumen berkontraksi sekitar 1 sampai 3 kali per menit untuk mengaduk isinya. Gas metana dari fermentasi dikeluarkan lewat sendawa dan termasuk gas rumah kaca.":"Rumen kambing bekerja sama seperti pada sapi, tetapi kambing lebih pemilih: ia memilih daun dan pucuk yang paling bergizi."},{id:"retikulum",name:"Retikulum",sci:"Lambung ruang 2",ui:"#d8a898",short:"Ruang bersekat seperti sarang lebah.",what:"Retikulum berada di depan rumen, dekat jantung dan diafragma. Dinding dalamnya bersekat-sekat seperti sarang lebah.",fn:"Bersama rumen mengaduk makanan, memilah partikel kasar dan halus, serta mendorong gumpalan makanan (bolus) naik kembali ke mulut untuk dikunyah ulang.",fact:"Benda berat yang ikut tertelan, seperti paku atau kawat, bisa tersangkut di retikulum dan melukai dinding sampai ke jantung. Peternak kadang memasukkan magnet khusus ke lambung sapi untuk menangkap logam itu."},{id:"omasum",name:"Omasum",sci:"Lambung ruang 3",ui:"#b8907c",short:"Ruang berlembar-lembar seperti buku.",what:"Omasum berbentuk bulat dengan dinding dalam berupa lipatan tipis yang tersusun seperti halaman buku.",fn:"Menyerap air dan mineral dari makanan, serta menyaring partikel yang masih kasar sebelum masuk ke abomasum.",fact:"Lembaran-lembaran omasum memperluas permukaan penyerapan, mirip prinsip lipatan pada usus halus."},{id:"abomasum",name:"Abomasum",sci:"Lambung ruang 4 (lambung sejati)",ui:"#e08880",short:"Lambung sejati dengan asam dan enzim.",what:"Abomasum adalah ruang keempat yang disebut lambung sejati karena cara kerjanya mirip lambung manusia.",fn:"Menghasilkan asam lambung dan enzim yang mencerna protein, termasuk protein dari mikroba rumen yang ikut terbawa.",fact:"Pada anak sapi atau anak kambing yang masih menyusu, susu mengalir lewat lekukan khusus (alur esofagus) langsung ke abomasum, melewati rumen yang belum berkembang."},{id:"usus",name:"Usus",sci:"Sistem pencernaan",ui:"#f0b8a8",short:"Penyerap nutrisi dan air.",what:"Usus halus sangat panjang dan berkelok, lalu berlanjut ke usus besar yang berakhir di anus.",fn:"Usus halus menyerap nutrisi ke dalam darah. Usus besar menyerap air dan membentuk kotoran.",fact:e?"Usus halus sapi dewasa bisa mencapai puluhan meter. Pakan berserat butuh jalur cerna yang panjang.":"Kotoran kambing berbentuk butiran kecil karena usus besarnya menyerap air dengan sangat efisien."},{id:"ginjal",name:"Ginjal",sci:"Sistem ekskresi",ui:"#a04a3a",short:"Penyaring darah pembuat urine.",what:e?"Ginjal sapi tampak bergelambir, terdiri dari banyak lobus kecil yang menyatu.":"Ginjal kambing halus berbentuk kacang, tidak bergelambir seperti ginjal sapi.",fn:"Menyaring darah, membuang sisa metabolisme, dan mengatur kadar air serta garam tubuh.",fact:"Bentuk ginjal berbeda antarspesies: ginjal sapi berlobus, sedangkan ginjal kambing, domba, dan kucing halus."},{id:"kandung",name:"Kandung kemih",sci:"Sistem ekskresi",ui:"#f0dc8a",short:"Penampung urine.",what:"Kantong berdinding otot di bagian belakang rongga perut.",fn:"Menampung urine dari ginjal sebelum dikeluarkan.",fact:"Urine dan kotoran ternak bisa diolah menjadi pupuk organik dan biogas, sumber energi yang dipakai di banyak peternakan rakyat."},{id:"ambing",name:"Ambing",sci:"Kelenjar susu",ui:"#f4c8c0",short:"Pabrik susu.",what:e?"Ambing sapi terbagi menjadi empat kuartir yang terpisah, masing-masing dengan satu puting.":"Ambing kambing terbagi menjadi dua bagian, masing-masing dengan satu puting.",fn:"Kelenjar susu mengambil zat dari darah lalu mengubahnya menjadi susu yang berisi lemak, protein, gula susu (laktosa), dan mineral.",fact:e?"Untuk membuat 1 liter susu, sekitar 400 sampai 500 liter darah perlu mengalir melewati ambing.":"Susu kambing PE banyak dijual sebagai susu segar dan produk olahan di peternakan rakyat Indonesia."}]},R_=i=>{let e=i==="sapi";return[{id:i+"1",sp:i,q:"Ruang lambung mana yang paling besar dan berisi mikroba pemecah selulosa?",o:["Rumen","Retikulum","Omasum","Abomasum"],a:0,e:"Rumen adalah tangki fermentasi. Mikroba di dalamnya memecah selulosa menjadi asam lemak yang menjadi sumber energi."},{id:i+"2",sp:i,q:'Ruang lambung mana yang disebut "lambung sejati" karena mirip lambung manusia?',o:["Abomasum","Rumen","Retikulum","Omasum"],a:0,e:"Abomasum menghasilkan asam dan enzim pencerna protein."},{id:i+"3",sp:i,q:"Apa yang dimaksud memamah biak?",o:["Makanan yang sudah ditelan dikembalikan ke mulut untuk dikunyah ulang","Makan sambil berjalan","Minum air sangat banyak","Menyimpan makanan di pipi"],a:0,e:"Gumpalan makanan (bolus) didorong dari retikulum ke mulut, dikunyah lagi, lalu ditelan kembali. Titik hijau di animasi menunjukkan perjalanan ini."},{id:i+"4",sp:i,q:"Dinding dalam retikulum berbentuk seperti apa?",o:["Sarang lebah","Halaman buku","Bulu halus","Licin tanpa lipatan"],a:0,e:"Sekat-sekat seperti sarang lebah membantu memilah partikel makanan."},{id:i+"5",sp:i,q:"Apa fungsi utama omasum?",o:["Menyerap air dan mineral","Membuat susu","Memompa darah","Menghasilkan metana"],a:0,e:"Lipatan-lipatan omasum yang seperti halaman buku memperluas permukaan penyerapan."},{id:i+"6",sp:i,q:"Mengapa mata "+(e?"sapi":"kambing")+" terletak di sisi kepala?",o:["Supaya bisa mengawasi sekeliling untuk menghindari pemangsa","Supaya bisa melihat dalam gelap total","Supaya tidak silau","Supaya bisa membaca"],a:0,e:"Hewan mangsa butuh bidang pandang yang sangat luas. Pemangsa seperti kucing punya mata menghadap depan untuk menilai jarak."},e?{id:i+"7",sp:i,q:"Berapa jumlah puting pada ambing sapi?",o:["4","2","6","8"],a:0,e:"Ambing sapi terbagi menjadi empat kuartir yang masing-masing punya satu puting."}:{id:i+"7",sp:i,q:"Tanduk kambing tersusun dari apa?",o:["Inti tulang yang dibungkus keratin","Tulang rawan saja","Rambut yang mengeras","Kalsium dari susu"],a:0,e:"Inti tulang dilapisi keratin. Tanduk tidak lepas setiap tahun, berbeda dengan ranggah rusa."},e?{id:i+"8",sp:i,q:"Mengapa sapi FH di Indonesia banyak dipelihara di dataran tinggi?",o:["Karena berasal dari daerah sejuk dan produksi susunya turun saat kepanasan","Karena rumput hanya tumbuh di gunung","Karena sapi takut laut","Karena lebih dekat ke pasar"],a:0,e:"Sapi FH berasal dari Eropa yang beriklim sejuk. Udara panas membuat sapi stres dan susunya berkurang."}:{id:i+"8",sp:i,q:"Bentuk pupil kambing adalah ...",o:["Persegi panjang mendatar","Celah tegak seperti kucing","Bulat seperti manusia","Bintang"],a:0,e:"Pupil mendatar membantu melihat luas ke sekeliling, dan tetap mendatar saat kambing menunduk makan."},{id:i+"9",sp:i,q:"Gas apa yang dihasilkan fermentasi di rumen dan dikeluarkan lewat sendawa?",o:["Metana","Oksigen","Helium","Klorin"],a:0,e:"Metana adalah gas rumah kaca. Para peneliti sedang mencari pakan yang bisa mengurangi metana dari ternak."}]};function _f(i){let e=i==="sapi";return{id:i,name:e?"Sapi":"Kambing",layers:A_(i),quiz:R_(i),specimen:e?{id:"sapi",kind:"animal",name:"Sapi perah",short:"sapi",sci:"Bos taurus (Friesian Holstein)",family:"Bovidae",x:10,z:21,top:1.7,mkOff:.9,promptY:1.1,tagNear:7,fact:"Sapi adalah ruminansia, hewan memamah biak dengan lambung empat ruang. Sapi perah Friesian Holstein dipelihara untuk diambil susunya.",hint:"Geser Kedalaman untuk mengupas lapisan. Di bagian organ, titik oranye adalah perjalanan makanan dan titik hijau adalah gumpalan makanan yang naik lagi ke mulut untuk dikunyah ulang (memamah biak). Kamera mulai dari sisi kiri supaya rumen terlihat."}:{id:"kambing",kind:"animal",name:"Kambing PE",short:"kambing",sci:"Capra hircus (Peranakan Etawa)",family:"Bovidae",x:16,z:24,top:1.05,mkOff:.7,promptY:.75,tagNear:6,fact:"Kambing juga ruminansia berlambung empat ruang. Kambing PE terkenal dengan telinga panjangnya yang menggantung.",hint:"Geser Kedalaman untuk mengupas lapisan. Titik oranye adalah perjalanan makanan, titik hijau adalah gumpalan makanan yang dikunyah ulang (memamah biak). Bandingkan ginjal dan ambingnya dengan sapi."}}}var bn=i=>new k(i[0],i[1],i[2]),it=i=>Gs(i,!1),ni=(i,e,t)=>new fe().setRGB(i,e,t,gt),zi=1,ps=i=>{zi=i};function Ee(i,e,t=22,n){let s=new Cn(1,t,Math.max(8,Math.round(t*.7)));return s.scale(i[0]*zi,i[1]*zi,i[2]*zi),n&&(s.rotateX(n[0]),s.rotateY(n[1]),s.rotateZ(n[2])),s.translate(e[0],e[1],e[2]),s}function ct(i,e,t,n,s=10){let a=zi;t*=a,n*=a,zi=1;let r=bn(i),o=bn(e),l=o.clone().sub(r),c=l.length(),u=new nn(n,t,c,s,1,!0);u.applyQuaternion(new Pt().setFromUnitVectors(new k(0,1,0),l.clone().normalize())),u.translate((r.x+o.x)/2,(r.y+o.y)/2,(r.z+o.z)/2);let h=it([u,Ee([t,t,t],i,s),Ee([n,n,n],e,s)]);return zi=a,h}function pn(i,e,t=24,n=8){return new as(new Zn(i.map(bn)),t,e*zi,n,!1)}function xr(i,e,t,n,s=8){let a=new no(i*zi,e*zi,s,1);return n&&(a.rotateX(n[0]),a.rotateY(n[1]),a.rotateZ(n[2])),a.translate(t[0],t[1],t[2]),a}var ii=(i,e)=>(i.translate(-e[0],-e[1],-e[2]),i);function Ji(i,e,t){let n=document.createElement("canvas");n.width=n.height=i,e(n.getContext("2d"),i);let s=new _n(n);return s.colorSpace=gt,s.wrapS=s.wrapT=Yt,s.anisotropy=4,t&&s.repeat.set(t[0],t[1]),s}function ga(i,e,t=11,n=[2,2],s=5200){return Ji(256,(a,r)=>{let o=Xt(t);a.fillStyle=i,a.fillRect(0,0,r,r),e&&e(a,r,o);for(let l=0;l<s;l++){a.strokeStyle=o()<.5?"rgba(255,240,220,0.09)":"rgba(30,18,8,0.09)",a.lineWidth=1;let c=o()*r,u=o()*r;a.beginPath(),a.moveTo(c,u),a.lineTo(c+(o()-.5)*3,u+4+o()*6),a.stroke()}},n)}function ms(i,e=[1,.85,.62],t=.95){return new Zt({map:i,bumpMap:i,bumpScale:.6,roughness:t,metalness:0,sheen:1,sheenRoughness:.55,sheenColor:new fe(e[0],e[1],e[2])})}function P_(){return Ji(256,(i,e)=>{let t=Xt(23);i.fillStyle="#8a2b22",i.fillRect(0,0,e,e);for(let n=0;n<900;n++){i.strokeStyle=t()<.5?"rgba(196,82,64,0.35)":"rgba(70,16,12,0.35)",i.lineWidth=1+t()*2.5;let s=t()*e;i.beginPath(),i.moveTo(s,0),i.bezierCurveTo(s+6,e*.3,s-6,e*.7,s+(t()-.5)*8,e),i.stroke()}for(let n=0;n<14;n++){i.strokeStyle="rgba(240,215,200,0.22)",i.lineWidth=1.2;let s=t()*e;i.beginPath(),i.moveTo(s,0),i.lineTo(s+(t()-.5)*20,e),i.stroke()}},[3,2])}function w_(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,nt),e.fill(),new _n(i)}function Ys(i,e,t){let n=new Zt({color:ni(...t.iris),roughness:.08,clearcoat:1,clearcoatRoughness:.05,transparent:!0}),s=new et({color:263172,roughness:.2,transparent:!0});for(let a of[1,-1]){let r=new we(new Cn(1,20,16),n),o=t.scale||[.75,1,1];r.scale.set(t.r*o[0],t.r*o[1],t.r*o[2]),r.position.set(t.p[0]-e[0],t.p[1]-e[1],a*t.p[2]-e[2]),i.add(r);let l=t.side?new k(.35,.05,a).normalize():new k(1,0,a*.35).normalize(),c;t.pupil==="slit"?c=new Cn(1,10,8).scale(t.r*.16,t.r*.78,t.r*.1):t.pupil==="bar"?c=new bi(t.r*1,t.r*.3,t.r*.1):t.pupil==="oval"?c=new Cn(1,12,10).scale(t.r*.6,t.r*.32,t.r*.1):c=new Cn(1,12,10).scale(t.r*.45,t.r*.45,t.r*.1);let u=new we(c,s);u.position.copy(r.position).addScaledVector(l,t.r*(t.side?.93:.76)),u.lookAt(u.position.clone().add(l)),i.add(u)}return[n,s]}function Sf(i,e,t,n){let s=d=>t.isMaterial?t:t[d]||t.body,a=new jt,r=[],o=(d,f,p)=>{let x=new we(d,s(p));x.castShadow=x.receiveShadow=!0,x.userData.layer=n;let g=new jt;return g.position.set(f[0],f[1],f[2]),g.add(x),r.push(x),a.add(g),g},l=new we(e.body,s("body"));l.castShadow=l.receiveShadow=!0,l.userData.layer=n,a.add(l),r.push(l);let c=o(e.head,i.pivots.head,"head"),u=o(e.tail,i.pivots.tail,"tail");if(e.extra)for(let[d,f]of e.extra){let p=new we(d,s(f));p.castShadow=!0,p.userData.layer=n,a.add(p),r.push(p)}let h=e.legs.map((d,f)=>o(d,i.pivots.legs[f],"legs"));return{root:a,meshes:r,head:c,tail:u,legs:h}}function $m(i,e,t,n,s=404,a=null){let{heightAt:r,WATER:o}=e,l=t.worldScale,c=-t.groundY,u=Sf(t,t.bodyParts(1),t.skinMats(),"kulit");t.face&&t.face(u,t.pivots.head),u.root.scale.setScalar(l);let h=new jt;h.add(u.root),i.add(h);let d=new we(new Cn(t.hitR,8,6),new on({visible:!1}));i.add(d);let f=t.walk,p=Xt(s),x={group:h,hit:d,x:n.x,z:n.z,y:r(n.x,n.z),yaw:p()*nt,parts:u},g="idle",m=2+p()*3,y=n.x,_=n.z,M=0,S=0,T=0,b=0;return x.update=(v,F,L)=>{let G=L.x-x.x,q=L.z-x.z,U=Math.hypot(G,q),E=0;if(g==="idle"){if(m-=v,U<3&&!f.graze){let Y=Math.atan2(-q,G)-x.yaw;Y=Math.atan2(Math.sin(Y),Math.cos(Y)),x.yaw+=Y*Math.min(1,v*3)}if(m<=0&&U>f.keep){for(let P=0;P<10;P++){let Y=p()*nt,O=1.5+p()*f.radius,B=n.x+Math.cos(Y)*O,$=n.z+Math.sin(Y)*O;if(r(B,$)>o+.5&&(!a||Math.hypot(B-a.x,$-a.z)<a.r-1.6)){y=B,_=$,g="walk";break}}m=3+p()*6}}else{let P=y-x.x,Y=_-x.z,O=Math.hypot(P,Y);if(O<.25||U<f.keep*.7)g="idle",m=3+p()*7,b=f.graze?2+p()*6:0;else{let $=Math.atan2(-Y,P)-x.yaw;$=Math.atan2(Math.sin($),Math.cos($)),x.yaw+=$*Math.min(1,v*3),E=f.speed,x.x+=P/O*E*v,x.z+=Y/O*E*v}}b-=v;let D=g==="idle"&&b>0?1:0;T+=(D-T)*Math.min(1,v*2),S+=((E>0?1:0)-S)*Math.min(1,v*6),M+=E*v*f.step;let w=Math.sin(M)*f.swing*S;u.legs[0].rotation.z=w,u.legs[3].rotation.z=w*.9,u.legs[1].rotation.z=-w,u.legs[2].rotation.z=-w*.9,u.tail.rotation.y=Math.sin(F*(f.tailF||1.4))*(f.tailA||.28),u.head.rotation.z=Math.sin(F*.8)*.04-S*.04-T*(f.graze||0)+(T>.5?Math.sin(F*7)*.03:0),x.y+=(r(x.x,x.z)-x.y)*Math.min(1,v*10),h.position.set(x.x,x.y+c*l+Math.abs(Math.sin(M))*.012*S,x.z),h.rotation.y=x.yaw,d.position.set(x.x,x.y+t.hitY,x.z)},x}function Qm(i,e){let t=new Wn;{let B=document.createElement("canvas");B.width=B.height=512;let $=B.getContext("2d"),H=$.createRadialGradient(256,230,20,256,256,420);H.addColorStop(0,e.bg[0]),H.addColorStop(.55,e.bg[1]),H.addColorStop(1,"#05090e"),$.fillStyle=H,$.fillRect(0,0,512,512);let j=new _n(B);j.colorSpace=gt,t.background=j}let n=new Mi(i);t.environment=n.fromScene(new Os,.04).texture,t.environmentIntensity=.5;let s=new tn(38,1,.1,120),a=new wn(16773596,2.6);a.position.set(4,9,8),a.castShadow=!0,a.shadow.mapSize.set(1024,1024);let r=a.shadow.camera;r.left=-8,r.right=8,r.top=8,r.bottom=-8,r.near=1,r.far=32,a.shadow.bias=-5e-4,a.shadow.normalBias=.03,t.add(a);let o=new wn(9425151,1.2);o.position.set(-6,3,-5),t.add(o);let l=new wn(16777215,.6);l.position.set(-3,4,-9),t.add(l);let c=new Un().load(Us),u=new Un().load(Bs);for(let B of[c,u])B.wrapS=B.wrapT=Yt,B.repeat.set(2.4,2.4);c.colorSpace=gt;let h=new we(new nn(e.pedR||5.6,(e.pedR||5.6)+.2,.3,64),new et({map:c,normalMap:u,color:new fe(.7,.66,.62),roughness:1}));h.position.y=e.groundY-.15,h.receiveShadow=!0,h.userData.noAO=!0,e.noPed||t.add(h);let d=new jt;t.add(d);let f=[],p={},x=(B,$)=>{p[B]||(p[B]={mats:[],meshes:[]}),p[B].mats.includes($.material)||p[B].mats.push($.material),p[B].meshes.push($),$.userData.layer=B,f.push($)},g=Sf(e,e.bodyParts(1),e.skinMats(),"kulit"),m=e.face?e.face(g,e.pivots.head):[];d.add(g.root),g.meshes.forEach(B=>x("kulit",B));let y=e.muscleMat?e.muscleMat():new Zt({map:P_(),roughness:.5,clearcoat:.35,clearcoatRoughness:.4}),_=Sf(e,e.bodyParts(e.muscleShrink||.84),y,"otot");d.add(_.root),_.meshes.forEach(B=>x("otot",B));let M=new et({color:ni(.9,.85,.72),roughness:.55}),S=new we(e.bones(),M);if(S.castShadow=!0,S.receiveShadow=!0,d.add(S),x("rangka",S),e.boneExtras)for(let[B,$]of e.boneExtras()){let H=new we(B,$);H.castShadow=!0,d.add(H),x("rangka",H)}let T=(B,$=.42,H=.35,j)=>new Zt({color:ni(B[0],B[1],B[2]),map:j||null,roughness:$,clearcoat:H,clearcoatRoughness:.3,transparent:!0}),b=(B,$,H,j)=>{let X=new we($,H);return j&&X.position.set(j[0],j[1],j[2]),X.castShadow=X.receiveShadow=!0,d.add(X),x(B,X),X},v=e.organs(b,T),F=w_(),L=[];function G(B,$,H,j,X,W={}){let ie=new Zn(B.map(bn),!!X),me=new dt;me.setAttribute("position",new lt(new Float32Array(H*3),3));let he=new Kn(me,new Yn({map:F,color:$,size:e.dotSize||.16,sizeAttenuation:!0,transparent:!0,depthWrite:!1}));he.frustumCulled=!1,he.userData.noAO=!0,d.add(he),L.push({p:he,path:ie,n:H,speed:j,dir:W.dir,show:W.show,jit:W.jit??.07,u:Array.from({length:H},(Re,De)=>De/H),j:Array.from({length:H},()=>[Math.random()-.5,Math.random()-.5])})}G(e.food.main,new fe(2.4,1.3,.35),e.food.n||70,1,!1),e.food.cud&&G(e.food.cud,new fe(.6,2.2,.5),26,1.6,!1);for(let B of e.flows||[])G(B.pts,B.color,B.n,B.speed,!1,B);let q={yaw:e.camYaw||0,yaw0:e.camYaw||0,pitch:.3,dist:16,user:!1,sun:.2,depth:0,depthT:0};for(let B in p)for(let $ of p[B].mats)$.userData.base=$.color.clone(),$.transparent=!0;p.kulit.mats.push(...m);let U={};for(let B in p)U[B]=0;let E={kulit:1,otot:1,rangka:1},D=0,w=0,P=bn(e.camTarget),Y={pts:{visible:!0}},O=B=>B==="kulit"||B==="otot"||B==="rangka";return{scene:t,camera:s,layerMeshes:f,state:q,waterFlow:Y,sugarFlow:Y,spec:e,vitals:e.vitals,update(B,$,H,j){q.user||(q.yaw=q.yaw0+.35*Math.sin($*.4));let X=Math.cos(q.pitch),W=Math.sin(q.pitch);s.position.set(P.x+Math.sin(q.yaw)*X*q.dist,P.y+W*q.dist,P.z+Math.cos(q.yaw)*X*q.dist),s.lookAt(P),q.depth+=(q.depthT-q.depth)*Math.min(1,B*6);let ie=q.depth;E.kulit=1-kt(.1,.28,ie),E.otot=1-kt(.4,.55,ie),E.rangka=1-.72*kt(.78,.95,ie);for(let be of["kulit","otot","rangka"]){let te=E[be];for(let V of p[be].mats)V.opacity=te,V.depthWrite=te>.98;for(let V of p[be].meshes)V.visible=te>.02&&(be!=="rangka"||ie>.38),V.castShadow=te>.5}g.head.visible=E.kulit>.02;let me=e.vitals(q.sun);D+=B*me.bpm/60*nt,w+=B*me.rr/60*nt;let he=Math.pow(Math.max(0,Math.sin(D)),6),Re=Math.pow(Math.max(0,Math.sin(D*2-1.1)),8)*.5;v.heart&&v.heart.scale.setScalar(1+.13*he+.05*Re);let De=.5+.5*Math.sin(w);(v.lungs||[]).forEach(be=>be.scale.set(1+.05*De,1+.09*De,1+.07*De));for(let be of v.pulse||[]){be.ph=(be.ph||0)+B*be.rate(q.sun)/60*nt;let te=Math.pow(Math.max(0,Math.sin(be.ph)),4)*be.amp;be.mesh.scale.set(1-te*.5,1-te,1-te*.5)}let Ce=ie>.55;for(let be in p)if(!O(be))for(let te of p[be].meshes)te.visible=ie>.4;for(let be of L){if(be.p.visible=Ce&&(!be.show||be.show(q)),!be.p.visible)continue;let te=be.p.geometry.attributes.position,V=(.03+.07*q.sun)*be.speed*(be.dir?be.dir(q):1);for(let ae=0;ae<be.n;ae++){be.u[ae]=((be.u[ae]+V*B)%1+1)%1;let Ae=be.path.getPoint(be.u[ae]);te.setXYZ(ae,Ae.x+be.j[ae][0]*be.jit,Ae.y+be.j[ae][1]*be.jit,Ae.z)}te.needsUpdate=!0}e.onUpdate&&e.onUpdate(q,d,v,B,$);let Ge=H&&p[H]&&!O(H);for(let be in p){let te=Ge&&!O(be)&&H!==be?1:0;U[be]+=(te-U[be])*Math.min(1,B*8);let V=H===be?.16:j===be?.08:0;for(let ae of p[be].mats)O(be)||(ae.opacity=1-.8*U[be],ae.depthWrite=U[be]<.05),ae.emissive&&ae.userData.base&&ae.emissive.copy(ae.userData.base).multiplyScalar(V)}}}}function yr(i){let e=[];for(let a of i.skull)e.push(Ee(a[0],a[1],a[2]||18));for(let a of i.jaw||[])e.push(ct(a[0],a[1],a[2],a[3]));let t=new Zn(i.spine.map(bn));for(let a=0;a<i.nV;a++){let r=t.getPoint(a/(i.nV-1));e.push(Ee([i.vr*1.2,i.vr,i.vr],[r.x,r.y,r.z],8))}if(i.tail){let a=new Zn(i.tail.map(bn));for(let r=1;r<i.nT;r++){let o=a.getPoint(r/i.nT),l=i.tr*(1-r/i.nT*.6);e.push(Ee([l,l,l],[o.x,o.y,o.z],7))}}let n=i.ribs;for(let a=0;a<n.n;a++)for(let r of[1,-1]){let o=n.x0-a*n.dx,l=1-.38*Math.abs(a-n.n*.32)/n.n,c=n.cy,u=n.hh,h=n.hw,d=new Zn([bn([o,c+u*.82,r*h*.15]),bn([o,c+u*.42*l,r*h*.88*l]),bn([o,c-u*.2*l,r*h*l]),bn([o,c-u*.78*l,r*h*.62*l]),bn([o,c-u*l,r*h*.1])]);e.push(new as(d,10,n.t||.045,5,!1))}i.sternum&&e.push(ct(i.sternum[0],i.sternum[1],i.sternum[2],i.sternum[2]));let s=i.br||[.11,.09,.07,.05];for(let a of[1,-1]){let r=o=>[o[0],o[1],o[2]*a];i.scap&&e.push(Ee(i.scap[0],r(i.scap[1]),10,[0,0,.3]));for(let o of i.front){let[l,c,u,h]=o.map(r);e.push(ct(l,c,s[0],s[1]),ct(c,u,s[1],s[2]),ct(u,h,s[2],s[3]),Ee([s[0]*1.35,s[0]*1.35,s[0]*1.35],l,8),Ee([s[1]*1.3,s[1]*1.3,s[1]*1.3],c,8))}for(let o of i.hind){let[l,c,u,h]=o.map(r);e.push(ct(l,c,s[0]*1.25,s[1]),ct(c,u,s[1],s[2]),ct(u,h,s[2],s[3]),Ee([s[0]*1.5,s[0]*1.5,s[0]*1.5],l,8),Ee([s[1]*1.3,s[1]*1.3,s[1]*1.3],c,8))}}return i.pelvis&&e.push(Ee(i.pelvis[0],i.pelvis[1],12,i.pelvis[2])),it(e)}function Mr(i,e){let t=Ee(i,[0,0,0],40),n=t.attributes.position,s=t.attributes.normal,a=1/i[0];for(let r=0;r<n.count;r++){let o=n.getX(r)*a*.5,l=n.getY(r)*a*.5,c=n.getZ(r)*a*.5,u=(Math.sin(o*11)*Math.sin(l*9+1)*Math.sin(c*12)*.045+Math.sin(o*20+c*17)*.015)*i[0]*2;n.setXYZ(r,n.getX(r)+s.getX(r)*u,n.getY(r)+s.getY(r)*u,n.getZ(r)+s.getZ(r)*u)}return t.computeVertexNormals(),it([t,Ee(e[0],e[1],14)])}var zm=[3,.85,0],Jm=[-2.6,.2,0],jm=[[1.75,-.3,.58],[1.75,-.3,-.58],[-1.7,-.1,.65],[-1.7,-.1,-.65]],Tf=[[-2.6,.2,0],[-3.4,.45,.05],[-4.1,1.1,.1],[-4.4,2,0],[-4.3,2.5,-.1]],Ef=[[0,-.62,-.1],[-.45,-.72,.4],[-.9,-.6,-.4],[-1.2,-.74,.4],[-1.5,-.55,-.35],[-1.7,-.3,.2],[-2,-.15,0],[-2.7,-.1,0]],Wm=null;function L_(){return Wm||(Wm=ga("#b4793c",(i,e,t)=>{for(let n=0;n<18;n++){let s=n/18*e+t()*8,a=5+t()*9;i.fillStyle="rgba(48,28,14,0.55)",i.beginPath(),i.moveTo(s,0);for(let r=0;r<=e;r+=16)i.lineTo(s+Math.sin(r*.06+n)*6,r);for(let r=e;r>=0;r-=16)i.lineTo(s+a+Math.sin(r*.06+n)*6,r);i.fill()}},11))}var Km={id:"kucing",groundY:-1.6,worldScale:.1,hitR:.75,hitY:.35,pivots:{head:zm,tail:Jm,legs:jm},walk:{speed:.9,step:5.5,swing:.6,radius:6,keep:1.6,tailA:.28},camTarget:[.2,.1,0],bg:["#2a3f52","#121f2b"],vitals:i=>({bpm:Math.round(An(140,220,i)),rr:Math.round(An(24,48,i))}),bodyParts(i){ps(i);let e=it([Ee([2.55,1.12,.95],[0,0,0],28),Ee([1.3,1.15,.95],[1.35,-.05,0]),Ee([1.2,1.15,1.02],[-1.55,-.05,0]),Ee([2.1,.9,.9],[0,-.3,0]),ct([2.2,.3,0],[3,.85,0],.78,.62)]),t=[1,-1].map(r=>xr(.36,.7,[3.4,1.85,r*.52],[r*.28,Math.PI/4,0],4)),n=ii(it([Ee([.85,.78,.82],[3.55,1.1,0]),Ee([.42,.3,.42],[4.3,.88,0]),Ee([.45,.38,.7],[3.8,.85,0]),...t]),zm),s=ii(it([pn(Tf,.2,28,8),Ee([.2,.2,.2],Tf[4],10)]),Jm),a=jm.map((r,o)=>o<2?it([ct([0,0,0],[.1,-.7,0],.36,.27),ct([.1,-.7,0],[.05,-1.28,0],.25,.2),Ee([.34,.17,.26],[.2,-1.34,0],14)]):it([Ee([.6,.85,.52],[0,-.45,0]),ct([0,-.8,0],[-.2,-1.28,0],.3,.2),Ee([.36,.17,.27],[-.05,-1.42,0],14)]));return ps(1),{body:e,head:n,tail:s,legs:a}},skinMats(){return ms(L_())},face(i,e){let t=Ys(i.head,e,{p:[4.18,1.27,.4],r:.2,scale:[.7,1,1],iris:[.5,.72,.18],pupil:"slit"}),n=new et({color:14256778,roughness:.5,transparent:!0}),s=new Ls({color:16117734,transparent:!0,opacity:.9}),a=new we(Ee([.09,.07,.12],[4.7-e[0],.98-e[1],0],10),n);i.head.add(a);for(let r of[1,-1]){let o=[];for(let l=0;l<3;l++){let c=(l-1)*.22;o.push(bn([4.25-e[0],.9-e[1],r*.25]),bn([4.45-e[0],.92-e[1]+c,r*1.2]))}i.head.add(new ia(new dt().setFromPoints(o),s))}return t.concat([n,s])},bones(){return yr({skull:[[[.7,.58,.6],[3.55,1.1,0],20]],jaw:[[[3.9,1,0],[4.3,.88,0],.3,.2],[[3.7,.66,0],[4.25,.68,0],.16,.12]],spine:[[3,.85,0],[2,.78,0],[0,.7,0],[-1.8,.55,0],[-2.6,.25,0]],nV:26,vr:.13,tail:Tf,nT:19,tr:.14,ribs:{n:13,x0:2.1,dx:.2,cy:-.08,hh:.87,hw:.85},sternum:[[2,-.95,0],[.1,-.95,0],.07],scap:[[.12,.5,.26],[1.95,.3,.4]],pelvis:[[.28,.5,.75],[-1.85,.3,0],[0,0,.2]],front:[[[1.75,-.3,.58],[1.85,-.95,.55],[1.8,-1.4,.5],[2,-1.62,.48]]],hind:[[[-1.7,-.1,.65],[-1.45,-.8,.62],[-1.85,-1.3,.58],[-1.7,-1.62,.56]]]})},organs(i,e){i("otak",Mr([.5,.38,.4],[[.2,.17,.2],[-.42,-.14,0]]),e([.86,.64,.66],.5,.3),[3.5,1.3,0]);let t=[1.35,-.3,.05],n=i("jantung",ii(it([Ee([.34,.42,.3],t,24),Ee([.27,.3,.26],[1.47,-.18,-.1],20),ct([1.42,0,0],[1.55,.4,0],.1,.08),ct([1.3,0,.1],[1.15,.38,.12],.08,.07)]),t),e([.62,.07,.1],.3,.8),t),s=[1,-1].map(a=>{let r=[1.3,.42,a*.5];return i("paru",ii(it([Ee([.72,.5,.32],r,24,[0,0,.12]),Ee([.36,.34,.28],[.85,.3,a*.46],16)]),r),e([.88,.45,.5],.55,.2),r)});i("paru",it([pn([[3,.72,0],[2.1,.5,0],[1.6,.3,0]],.09,16,8),ct([1.6,.3,0],[1.4,.25,.5],.07,.05),ct([1.6,.3,0],[1.4,.25,-.5],.07,.05)]),e([.88,.86,.82],.4,.4)),i("hati",it([Ee([.45,.42,.58],[.72,-.42,.12],22),Ee([.35,.3,.4],[.5,-.58,-.22],18)]),e([.4,.1,.08],.35,.7)),i("lambung",it([Ee([.5,.36,.34],[.05,-.5,-.32],22,[0,0,.5]),pn([[2.9,.7,0],[1.9,.18,-.05],[.9,-.3,-.25],[.3,-.4,-.3]],.07,24,8)]),e([.9,.52,.48],.4,.6)),i("usus",it([pn(Ef.slice(0,6),.14,150,8),pn(Ef.slice(5),.17,30,8)]),e([.94,.68,.64],.45,.6));for(let a of[1,-1])i("ginjal",Ee([.3,.19,.2],[-.65,.4,a*.28],16,[0,0,.3]),e([.5,.14,.1],.35,.7));return i("kandung",Ee([.3,.28,.28],[-1.78,-.62,0],18),e([.95,.85,.5],.25,.9)),{heart:n,lungs:s}},food:{main:[[4.35,.82,0],[3.4,.6,0],[2.3,.25,0],[1,-.3,-.15],[.1,-.5,-.3],...Ef]}};var Af=null;function I_(){if(Af)return Af;let i=Ji(256,(n,s)=>{let a=Xt(5);n.fillStyle="#b89478",n.fillRect(0,0,s,s);for(let r=0;r<2600;r++){let o=a()*s,l=a()*s,c=1.5+a()*2.5;n.fillStyle=a()<.5?"rgba(120,80,55,0.55)":"rgba(230,200,170,0.4)",n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}},[3,3]),e=Ji(256,(n,s)=>{n.fillStyle="#c49a86",n.fillRect(0,0,s,s),n.strokeStyle="rgba(90,50,40,0.75)",n.lineWidth=3;let a=16,r=a*Math.sqrt(3);for(let o=-1;o<s/r*2+2;o++)for(let l=-1;l<s/(a*3)+2;l++){let c=l*a*3+(o%2?a*1.5:0),u=o*r/2;n.beginPath();for(let h=0;h<=6;h++){let d=h*Math.PI/3;n.lineTo(c+Math.cos(d)*a,u+Math.sin(d)*a)}n.stroke()}},[2,2]),t=Ji(256,(n,s)=>{n.fillStyle="#a88470",n.fillRect(0,0,s,s);for(let a=0;a<22;a++){let r=a/22*s;n.fillStyle="rgba(70,40,30,0.55)",n.fillRect(r,0,3,s),n.fillStyle="rgba(240,210,190,0.35)",n.fillRect(r+4,0,2,s)}},[2,1]);return Af={pap:i,hon:e,lea:t}}function zu(i,e,t,n){let s=m=>[m[0]*t.sx+(t.ox||0),m[1]*t.sy+(t.oy||0),m[2]*t.sz],a=t.k,r=(m,y,_,M)=>Ee(m.map(S=>S*a),s(y),_,M),o=(m,y,_,M)=>ct(s(m),s(y),_*a,M*a),l=(m,y,_,M)=>pn(m.map(s),y*a,_,M),c=I_();i("otak",Mr(n.brain.r,n.brain.cb),e([.86,.64,.66],.5,.3),n.brain.p);let u=s([1.75,-.15,.1]),h=i("jantung",ii(it([r([.45,.55,.4],[1.75,-.15,.1],24),r([.35,.4,.34],[1.95,0,-.12],20),o([1.85,.3,0],[1.9,.95,0],.13,.11),o([1.7,.3,.12],[1.5,.85,.15],.1,.09)]),u),e([.62,.07,.1],.3,.8),u),d=[1,-1].map(m=>{let y=s([1.6,.8,m*.6]);return i("paru",ii(it([r([1,.6,.42],[1.6,.8,m*.6],24,[0,0,.1]),r([.5,.45,.35],[.9,.6,m*.55],16)]),y),e([.88,.45,.5],.55,.2),y)}),f=n.neck.map(m=>[m[0],m[1]-.14*a,m[2]]);i("paru",it([pn(f.concat([s([2.6,.95,0]),s([2.1,.9,0])]),.09*a,24,8),o([2.1,.9,0],[1.8,.85,.6],.08,.06),o([2.1,.9,0],[1.8,.85,-.6],.08,.06)]),e([.88,.86,.82],.4,.4)),i("hati",it([r([.62,.55,.36],[1.05,.45,.55],22),r([.42,.38,.28],[.8,.12,.5],18)]),e([.4,.1,.08],.35,.7));let p=s([-.55,.25,-.42]),x=i("rumen",ii(it([r([1.6,.62,.72],[-.5,.75,-.42],26),r([1.55,.68,.75],[-.6,-.25,-.42],26)]),p),e([.85,.7,.6],.6,.2,c.pap),p);i("rumen",pn(n.neck.concat([s([2.6,.75,0]),s([1.7,.55,-.15]),s([1,.5,-.3])]),.075*a,30,8),e([.9,.55,.5],.4,.5)),i("retikulum",r([.52,.5,.45],[1.15,-.5,-.15],22),e([.9,.75,.7],.55,.25,c.hon)),i("omasum",r([.48,.46,.42],[.72,-.4,.6],22),e([.85,.7,.62],.55,.25,c.lea)),i("abomasum",r([.9,.33,.35],[.05,-.95,.45],22,[0,0,-.25]),e([.88,.5,.48],.4,.6)),i("usus",l(Zm,.13,200,8),e([.94,.68,.64],.45,.6));for(let m of[1,-1])if(n.lobedKidney){let y=[],_=Xt(m>0?7:8);for(let M=0;M<9;M++)y.push(r([.14,.11,.11],[-.9+(_()-.5)*.45,1.05+(_()-.5)*.25,m*.42+(_()-.5)*.15],10));i("ginjal",it(y),e([.5,.14,.1],.35,.7))}else i("ginjal",r([.34,.2,.22],[-.9,1.05,m*.42],16,[0,0,.3]),e([.5,.14,.1],.35,.7));i("kandung",r([.3,.28,.28],[-2.5,-.35,0],18),e([.95,.85,.5],.25,.9));let g=[r([.55,.36,.5],[-1.4,-.95,0],20)];for(let m of n.teats)g.push(o([-1.4+m[0],-1.05,m[1]],[-1.4+m[0],-1.5,m[1]*1.1],.06,.05));return i("ambing",it(g),e([.96,.78,.74],.5,.3)),{heart:h,lungs:d,pulse:[{mesh:x,rate:m=>1.5+1.5*m,amp:.07}]}}var Zm=[[-.8,-.75,.5],[-1.2,-.95,.75],[-1.6,-.6,.3],[-1.2,-.35,.75],[-1.8,-.1,.4],[-1.4,.2,.75],[-2.1,.3,.45],[-2.5,.6,.15],[-3.1,.95,0]];function Ju(i,e){let t=u=>[u[0]*i.sx+(i.ox||0),u[1]*i.sy+(i.oy||0),u[2]*i.sz],n=[[2.6,.75,0],[1.7,.55,-.15],[1,.5,-.3]].map(t),s=[[.2,.9,-.5],[-1.2,.9,-.45],[-1.6,.1,-.4],[-.8,-.5,-.45],[.4,-.4,-.4]].map(t),a=t([1.15,-.45,-.15]),r=e.concat(n,s,[a,t([.72,-.4,.6]),t([.6,-.8,.45]),t([-.6,-.95,.45])],Zm.map(t)),o=n.slice().reverse(),l=e.slice().reverse(),c=[a].concat(o,l,[e[0],e[0]],e,n,[s[0],t([.5,.2,-.4]),a]);return{main:r,cud:c,n:80}}var eg=[2.2,.65,0],tg=[-3.15,1.1,0],ng=[[1.85,-.35,.62],[1.85,-.35,-.62],[-2,.05,.68],[-2,.05,-.68]],ig=[[4.95,.6,0],[4.3,.9,0],[3.4,1,0],[2.7,.85,0]],sg={sx:1,sy:1,sz:1,k:1},ag=null;function F_(){return ag||(ag=ga("#f1ede4",(i,e,t)=>{i.fillStyle="#141210";for(let n=0;n<7;n++){let s=t()*e,a=t()*e,r=22+t()*34;for(let o=0;o<14;o++){let l=t()*Math.PI*2,c=t()*r*.8;i.beginPath(),i.ellipse(s+Math.cos(l)*c,a+Math.sin(l)*c,r*(.4+t()*.5),r*(.3+t()*.4),t()*3,0,Math.PI*2),i.fill();for(let u of[-e,0,e])for(let h of[-e,0,e])(u||h)&&(i.beginPath(),i.ellipse(s+Math.cos(l)*c+u,a+Math.sin(l)*c+h,r*.5,r*.35,0,0,Math.PI*2),i.fill())}}},31,[1.5,1.5],4e3))}var rg={id:"sapi",groundY:-2.45,worldScale:.42,hitR:1.4,hitY:.9,muscleShrink:.86,pivots:{head:eg,tail:tg,legs:ng},walk:{speed:.7,step:3.4,swing:.32,radius:6,keep:2.6,graze:1.15,tailA:.15,tailF:.9},camTarget:[.9,-.1,0],camYaw:Math.PI,bg:["#3a4a2e","#18210f"],pedR:6.2,dotSize:.2,vitals:i=>({bpm:Math.round(An(48,96,i)),rr:Math.round(An(26,60,i))}),bodyParts(i){ps(i);let e=[];for(let o of[.22,-.22])for(let l of[1,-1])e.push(ct([-1.4+o,-1.3,l*.24],[-1.4+o,-1.62,l*.26],.09,.07));let t=it([Ee([3,1.3,1.15],[0,.5,0],30),Ee([1.45,1.4,1.15],[1.7,.4,0]),Ee([1.35,1.35,1.18],[-2,.6,0]),Ee([2.5,1.2,1.25],[-.1,.05,0]),Ee([.9,.5,.7],[1.9,1.55,0]),Ee([.35,.3,.3],[-1.7,1.75,.75]),Ee([.35,.3,.3],[-1.7,1.75,-.75]),Ee([1,.6,.28],[2.75,.2,0]),Ee([.62,.45,.58],[-1.4,-.95,0]),...e]),n=[1,-1].map(o=>Ee([.38,.12,.22],[3.72,1.45,o*.78],14,[o*.3,0,.25])),s=ii(it([ct([2.2,.65,0],[3.6,1.2,0],.95,.62),Ee([.7,.6,.55],[3.9,1.3,0]),ct([4,1.2,0],[4.85,.62,0],.5,.36),Ee([.34,.32,.42],[4.98,.55,0]),Ee([.35,.2,.4],[3.95,1.85,0]),...n]),eg),a=ii(it([pn([[-3.15,1.1,0],[-3.35,.6,0],[-3.4,-.4,0],[-3.35,-1.3,0]],.08,24,6),Ee([.14,.38,.14],[-3.35,-1.6,0],10)]),tg),r=ng.map((o,l)=>l<2?it([ct([0,0,0],[.08,-1.05,0],.45,.24),ct([.08,-1.05,0],[.05,-1.95,0],.17,.15),Ee([.19,.17,.19],[.06,-1.88,0],10)]):it([Ee([.78,1.15,.58],[.05,-.45,0]),ct([0,-1,0],[-.35,-1.6,0],.3,.18),ct([-.35,-1.6,0],[-.25,-2.35,0],.16,.15),Ee([.19,.17,.19],[-.25,-2.27,0],10)]));return ps(1),{body:t,head:s,tail:a,legs:r}},skinMats(){return ms(F_(),[.45,.45,.45],.95)},face(i,e){let t=Ys(i.head,e,{p:[3.98,1.42,.47],r:.17,scale:[1,1,.8],iris:[.2,.12,.07],pupil:"oval",side:!0}),n=new et({color:ni(.55,.42,.42),roughness:.35,transparent:!0}),s=new et({color:ni(.85,.8,.68),roughness:.45,transparent:!0}),a=new et({color:ni(.12,.1,.09),roughness:.6,transparent:!0}),r=new we(Ee([.12,.26,.36],[5.24-e[0],.55-e[1],0],14),n);i.head.add(r);for(let o of[1,-1])i.head.add(new we(it([ct([3.95-e[0],1.9-e[1],o*.32],[4.05-e[0],2.15-e[1],o*.62],.1,.06),xr(.06,.2,[4.08-e[0],2.25-e[1],o*.68],[o*-.6,0,-.3],8)]),s));return i.legs.forEach((o,l)=>{let c=l<2?-1.95:-2.35,u=l<2?.05:-.25;for(let h of[.08,-.08]){let d=new we(new nn(.1,.13,.17,10),a);d.position.set(u+.03,c-.07,h),o.add(d)}}),t.concat([n,s,a])},bones(){return yr({skull:[[[.62,.52,.48],[3.9,1.3,0],18]],jaw:[[[4,1.25,0],[4.95,.65,0],.36,.24],[[3.75,.85,0],[4.85,.42,0],.15,.12]],spine:[[3.55,1.1,0],[2.6,.95,0],[1.9,1.45,0],[0,1.45,0],[-2,1.45,0],[-3.1,1.05,0]],nV:30,vr:.16,tail:[[-3.15,1.05,0],[-3.35,.55,0],[-3.4,-.4,0],[-3.35,-1.3,0]],nT:18,tr:.1,ribs:{n:13,x0:2.3,dx:.21,cy:.3,hh:1.05,hw:1,t:.06},sternum:[[2.3,-.75,0],[.4,-.8,0],.09],scap:[[.15,.75,.35],[2.1,.95,.6]],pelvis:[[.4,.6,.85],[-2,1.1,0],[0,0,.25]],front:[[[1.85,-.35,.62],[1.95,-1.4,.6],[1.9,-2,.58],[1.95,-2.4,.58]]],hind:[[[-2,.6,.68],[-1.75,-.55,.66],[-2.35,-1.6,.62],[-2.25,-2.4,.6]]],br:[.16,.13,.1,.08]})},organs(i,e){return zu(i,e,sg,{brain:{r:[.32,.25,.26],cb:[[.13,.11,.13],[-.28,-.08,0]],p:[3.85,1.42,0]},neck:ig,lobedKidney:!0,teats:[[.22,.24],[.22,-.24],[-.22,.24],[-.22,-.24]]})},food:Ju(sg,ig)};var og=[1.75,.55,0],lg=[-2.35,.85,0],cg=[[1.4,-.25,.48],[1.4,-.25,-.48],[-1.5,0,.52],[-1.5,0,-.52]],ug=[[3.66,1.18,0],[3.2,1.45,0],[2.6,1.3,0],[2.1,.85,0]],hg={sx:.72,sy:.7,sz:.73,oy:.04,k:.72},dg=null,fg=null,Rf=()=>dg||(dg=ga("#ece3d2",(i,e,t)=>{for(let n=0;n<4;n++)i.fillStyle="rgba(150,110,70,0.25)",i.beginPath(),i.ellipse(t()*e,t()*e,30+t()*30,20+t()*20,t()*3,0,Math.PI*2),i.fill()},41,[2,2],6500)),k_=()=>fg||(fg=ga("#4a3020",(i,e,t)=>{for(let n=0;n<6;n++)i.fillStyle="rgba(20,12,8,0.4)",i.beginPath(),i.ellipse(t()*e,t()*e,40,25,t()*3,0,Math.PI*2),i.fill()},42,[2,2],6e3)),pg={id:"kambing",groundY:-2,worldScale:.24,hitR:.75,hitY:.5,pivots:{head:og,tail:lg,legs:cg},walk:{speed:.8,step:4.6,swing:.42,radius:5,keep:2,graze:1,tailA:.35,tailF:3},camTarget:[.4,.3,0],camYaw:Math.PI,bg:["#40382a","#1c1810"],pedR:5.2,dotSize:.15,vitals:i=>({bpm:Math.round(An(70,120,i)),rr:Math.round(An(15,40,i))}),bodyParts(i){ps(i);let e=it([Ee([2.2,1,.82],[0,.35,0],28),Ee([1.1,1.05,.85],[1.25,.25,0]),Ee([1,1,.86],[-1.45,.4,0]),Ee([1.8,.9,.92],[0,.05,0]),Ee([.42,.32,.4],[-1.05,-.6,0]),ct([-1.05,-.8,.17],[-1,-1.05,.2],.07,.05),ct([-1.05,-.8,-.17],[-1,-1.05,-.2],.07,.05)]),t=[1,-1].map(r=>Ee([.13,.58,.07],[2.88,1.32,r*.5],16,[r*.35,0,.2])),n=ii(it([ct([1.75,.55,0],[2.65,1.5,0],.62,.4),Ee([.5,.45,.4],[2.95,1.75,0]),ct([3.05,1.7,0],[3.62,1.2,0],.32,.22),Ee([.25,.18,.24],[3.25,1.62,0]),Ee([.2,.18,.22],[3.68,1.12,0]),xr(.13,.55,[3.42,.72,0],[0,0,Math.PI]),...t]),og),s=ii(it([pn([[-2.35,.85,0],[-2.6,1.1,0],[-2.7,1.35,0]],.09,12,6),Ee([.1,.16,.1],[-2.72,1.42,0],8)]),lg),a=cg.map((r,o)=>o<2?it([ct([0,0,0],[.05,-.75,0],.3,.15),ct([.05,-.75,0],[.05,-1.6,0],.11,.09),Ee([.12,.11,.12],[.05,-1.55,0],10)]):it([Ee([.5,.75,.4],[.02,-.35,0]),ct([0,-.7,0],[-.3,-1.2,0],.2,.12),ct([-.3,-1.2,0],[-.2,-1.85,0],.1,.09),Ee([.12,.11,.12],[-.2,-1.8,0],10)]));return ps(1),{body:e,head:n,tail:s,legs:a}},skinMats(){return{body:ms(Rf(),[1,.95,.85],.95),head:ms(k_(),[.9,.7,.5],.9),tail:ms(Rf()),legs:ms(Rf())}},face(i,e){let t=Ys(i.head,e,{p:[3.04,1.86,.35],r:.13,scale:[1,1,.8],iris:[.85,.62,.15],pupil:"bar",side:!0}),n=new et({color:ni(.32,.27,.22),roughness:.5,transparent:!0}),s=new et({color:ni(.15,.12,.1),roughness:.6,transparent:!0}),a=new et({color:ni(.2,.15,.13),roughness:.4,transparent:!0});for(let r of[1,-1])i.head.add(new we(it([pn([[2.85-e[0],2.05-e[1],r*.15],[2.65-e[0],2.5-e[1],r*.22],[2.3-e[0],2.62-e[1],r*.3],[2.1-e[0],2.45-e[1],r*.33]],.07,16,8),Ee([.075,.075,.075],[2.85-e[0],2.05-e[1],r*.15],8)]),n));return i.head.add(new we(Ee([.06,.12,.17],[3.86-e[0],1.13-e[1],0],10),a)),i.legs.forEach((r,o)=>{let l=o<2?-1.6:-1.85,c=o<2?.05:-.2;for(let u of[.05,-.05]){let h=new we(new nn(.06,.08,.15,8),s);h.position.set(c+.02,l-.08,u),r.add(h)}}),t.concat([n,s,a])},bones(){return yr({skull:[[[.45,.4,.35],[2.95,1.75,0],18]],jaw:[[[3,1.65,0],[3.62,1.15,0],.24,.15],[[2.85,1.35,0],[3.55,1,0],.1,.08]],spine:[[2.8,1.6,0],[2.2,1.1,0],[1.5,1.15,0],[0,1.15,0],[-1.5,1.15,0],[-2.35,.85,0]],nV:28,vr:.11,tail:[[-2.35,.85,0],[-2.6,1.1,0],[-2.7,1.35,0]],nT:6,tr:.07,ribs:{n:13,x0:1.75,dx:.16,cy:.25,hh:.82,hw:.78,t:.045},sternum:[[1.75,-.55,0],[.2,-.6,0],.06],scap:[[.1,.55,.25],[1.55,.75,.45]],pelvis:[[.3,.45,.6],[-1.5,.85,0],[0,0,.25]],front:[[[1.4,-.25,.48],[1.5,-.95,.47],[1.45,-1.5,.46],[1.5,-1.95,.46]]],hind:[[[-1.5,.45,.52],[-1.3,-.4,.5],[-1.8,-1.25,.48],[-1.7,-1.95,.47]]],br:[.11,.09,.07,.055]})},organs(i,e){return zu(i,e,hg,{brain:{r:[.26,.2,.21],cb:[[.1,.09,.1],[-.22,-.06,0]],p:[2.92,1.82,0]},neck:ug,lobedKidney:!1,teats:[[0,.24],[0,-.24]]})},food:Ju(hg,ug)};var mg={mas:{name:"Ikan mas",sci:"Cyprinus carpio",family:"Cyprinidae",fact:"Ikan mas sudah dibudidayakan di Indonesia sejak lama di kolam dan sawah (minapadi). Ikan mas tidak punya gigi di mulut, tetapi punya gigi di tenggorokan (gigi faring) untuk menggerus makanan.",P:{id:"mas",H:1,W:.6,pm:.55,shape:.75,belly:.95,tailMin:.22,blunt:.35,arch:1,back:"#6e5a1c",side:"#d9a23a",belly2:"#f3e2a8",fin:"#c9883a",scale:22,scaleShine:!0,caudal:"forked",dorsal:[[.42,.72,.55,.3]],anal:[[.3,.38,.5]],barbels:[[.05,-.02,.12,[.1,-.25,.15]],[.25,-.08,.2,[0,-.3,.1]]],barbelCol:[.55,.4,.2],twoChamber:!0,iris:[.85,.68,.2],eyeR:.17,neutral:.5,seed:3},world:{count:4,school:!0,depth:.5,scale:.09,speed:.6},notes:{kulit:"Sisik ikan mas besar dan bertumpuk seperti genteng. Ikan mas punya dua pasang sungut pendek di sekitar mulut.",rangka:"Ikan mas punya banyak duri halus (tulang kecil di antara otot), itulah sebabnya makan ikan mas harus hati-hati.",gelembung:"Gelembung renang ikan mas terdiri dari dua ruang dan tersambung ke saluran pencernaan, jadi ikan mas bisa mengisi atau membuang udara lewat mulut."}},nila:{name:"Ikan nila",sci:"Oreochromis niloticus",family:"Cichlidae",fact:"Nila berasal dari Afrika, termasuk Sungai Nil, dan kini menjadi salah satu ikan budidaya paling populer di Indonesia. Induk betina mengerami telur dan menjaga anaknya di dalam mulut.",P:{id:"nila",H:1.05,W:.48,pm:.55,shape:.8,belly:.9,tailMin:.25,blunt:.32,arch:1.2,back:"#3d4a52",side:"#8a989e",belly2:"#dde3e4",fin:"#a85a55",scale:20,bars:8,caudal:"truncate",dorsal:[[.3,.78,.6,.15]],anal:[[.25,.4,.55]],iris:[.75,.6,.25],eyeR:.16,neutral:.5,seed:4},world:{count:4,school:!0,depth:.55,scale:.08,speed:.65},notes:{kulit:"Tubuh nila bergaris-garis tegak samar, dan sirip ekornya bergaris. Sirip punggungnya panjang dengan bagian depan berupa duri keras.",gelembung:"Gelembung renang nila tertutup (tidak tersambung ke saluran pencernaan). Gasnya diatur lewat pembuluh darah khusus."}},lele:{name:"Ikan lele",sci:"Clarias sp.",family:"Clariidae",fact:"Lele hidup di dasar perairan dan aktif mencari makan di malam hari dengan mengandalkan sungutnya. Lele bisa bertahan di air yang miskin oksigen karena bisa menghirup udara langsung dari permukaan.",P:{id:"lele",H:.6,W:.62,headW:.5,pm:.75,shape:.55,belly:.85,tailMin:.35,blunt:.65,arch:.3,back:"#2a2724",side:"#4a4540",belly2:"#cfc4b2",fin:"#3a3530",scale:0,caudal:"round",cauH:.75,dorsal:[[.1,.66,.32,.05]],anal:[[.08,.5,.3,.05]],pecT:.78,pecL:.7,finLow:.6,barbels:[[.02,.02,.15,[.3,.05,1.3],.03],[.05,-.1,.1,[.1,-.3,.9]],[.15,-.15,.18,[0,-.4,.8]],[.2,-.12,.08,[-.1,-.45,.5]]],labirin:"pohon",iris:[.3,.24,.18],eyeR:.1,eyeY:.45,eyeT:.89,neutral:.42,seed:5},world:{count:3,school:!1,depth:.05,bedOff:.22,scale:.1,speed:.45,amp:.25,freq:5},notes:{kulit:"Lele tidak bersisik. Kulitnya licin karena berlendir. Lele punya empat pasang sungut peraba yang sangat peka.",rangka:"Sirip dada lele punya duri keras (patil) yang bisa melukai tangan. Hati-hati saat memegang lele.",labirin:"Pada lele organ ini disebut organ arborescent, berbentuk bercabang seperti pohon, terletak di atas insang."},extraLayer:{id:"labirin",name:"Organ arborescent",sci:"Alat napas tambahan",ui:"#e09098",short:"Alat untuk menghirup udara.",what:"Jaringan bercabang seperti pohon kecil di rongga di atas insang, kaya pembuluh darah.",fn:"Menyerap oksigen dari udara yang dihirup lele di permukaan air, sehingga lele bertahan di air yang kekurangan oksigen.",fact:"Karena alat ini, lele bisa hidup di kolam padat dan berlumpur, dan bisa bertahan lama di luar air selama tubuhnya tetap lembap."}},gurami:{name:"Ikan gurami",sci:"Osphronemus goramy",family:"Osphronemidae",fact:"Gurami adalah ikan asli Indonesia dan Asia Tenggara. Gurami jantan membangun sarang dari serat tanaman untuk telur-telurnya. Pertumbuhannya lambat, jadi harganya relatif mahal.",P:{id:"gurami",H:1.35,W:.42,pm:.5,shape:.85,belly:1.05,tailMin:.28,blunt:.3,arch:1.4,mouthUp:.4,back:"#5d564a",side:"#b4a48c",belly2:"#e8dfcc",fin:"#7d7060",scale:14,caudal:"round",cauH:1.1,dorsal:[[.28,.55,.55,.2]],anal:[[.1,.58,.6,.1]],thread:!0,pelT:.6,labirin:"labirin",iris:[.8,.25,.15],eyeR:.15,neutral:.5,seed:6},world:{count:3,school:!0,depth:.6,scale:.11,speed:.45},notes:{kulit:"Tubuh gurami pipih dan tinggi. Sirip perutnya memanjang seperti benang dan dipakai sebagai alat peraba.",labirin:"Gurami punya organ labirin, lipatan-lipatan tulang tipis berlapis selaput kaya pembuluh darah, untuk menyerap oksigen dari udara."},extraLayer:{id:"labirin",name:"Organ labirin",sci:"Alat napas tambahan",ui:"#e09098",short:"Alat untuk menghirup udara.",what:"Rongga di atas insang berisi lipatan berliku seperti labirin, dilapisi selaput tipis yang kaya pembuluh darah.",fn:"Menyerap oksigen dari udara yang dihirup di permukaan air.",fact:"Gurami dewasa perlu naik ke permukaan untuk mengambil udara. Kalau tidak bisa mencapai permukaan, gurami bisa lemas walaupun airnya cukup oksigen."}},arwana:{name:"Arwana",sci:"Scleropages formosus",family:"Osteoglossidae",fact:"Arwana Asia hidup di sungai dan rawa Kalimantan dan Sumatra. Spesies ini dilindungi dan terdaftar di CITES Apendiks I, sehingga perdagangannya hanya boleh dari hasil penangkaran resmi. Jantan mengerami telur di dalam mulutnya.",P:{id:"arwana",H:.72,W:.4,pm:.62,shape:.7,belly:1,tailMin:.3,blunt:.3,arch:.3,mouthUp:.6,back:"#3e5248",side:"#d8c48a",belly2:"#f3e7c6",fin:"#b84a2e",scale:44,scaleEdge:"rgba(170,40,25,0.75)",scaleShine:!0,metal:.2,caudal:"round",dorsal:[[.1,.3,.5,.1]],anal:[[.08,.33,.55,.1]],pecT:.76,pecL:1.3,barbels:[[.1,-.25,.06,[.45,.08,.03],.03]],barbelCol:[.6,.5,.3],iris:[.85,.7,.3],eyeR:.2,eyeY:.4,neutral:.52,seed:7},world:{count:1,school:!1,depth:.85,scale:.14,speed:.7},notes:{kulit:"Sisik arwana sangat besar dan mengilap. Sepasang sungut di dagu membantu merasakan mangsa di permukaan air.",otak:"Mulut arwana menghadap ke atas, cocok untuk menyambar serangga dan ikan kecil di permukaan air. Arwana bahkan bisa melompat keluar air untuk menangkap mangsa."}}},D_=[{id:"kulit",name:"Kulit dan sisik",sci:"Integumen",ui:"#d8c48a",short:"Pelindung tubuh, gurat sisi.",what:"Kulit ikan dilapisi lendir dan, pada kebanyakan ikan, sisik yang bertumpuk seperti genteng. Di sepanjang sisi tubuh ada garis titik-titik yang disebut gurat sisi.",fn:"Lendir dan sisik melindungi dari kuman dan luka. Gurat sisi adalah indra yang merasakan getaran dan arus air, sehingga ikan bisa merasakan gerakan di sekitarnya, bahkan di air keruh.",fact:"Sisik bertambah besar seiring umur dan membentuk lingkaran pertumbuhan, mirip cincin tahun pada kayu. Peneliti bisa memperkirakan umur ikan dari lingkaran ini."},{id:"otot",name:"Otot",sci:"Miomer",ui:"#e9b9a6",short:"Otot berlapis berbentuk zig-zag.",what:"Otot ikan tersusun dalam segmen-segmen berbentuk zig-zag yang disebut miomer. Itulah sebabnya daging ikan matang mudah terlepas berlapis-lapis.",fn:"Miomer di kedua sisi tubuh berkontraksi bergantian, membuat tubuh dan ekor meliuk sehingga ikan terdorong maju.",fact:"Daging ikan kebanyakan berwarna putih karena didominasi otot untuk gerakan cepat yang singkat. Ikan yang berenang jauh terus-menerus punya lebih banyak otot merah."},{id:"rangka",name:"Rangka",sci:"Sistem rangka",ui:"#eae0c4",short:"Tulang belakang, rusuk, dan jari-jari sirip.",what:"Rangka ikan bertulang sejati terdiri dari tengkorak, tulang belakang yang panjang, tulang rusuk, dan jari-jari yang menegakkan sirip.",fn:"Menopang tubuh, tempat melekatnya otot, dan menegakkan sirip untuk mengarahkan gerak.",fact:"Sirip punya tugas masing-masing: sirip ekor mendorong, sirip punggung dan dubur menjaga tubuh tetap tegak, sirip dada dan perut untuk mengerem dan berbelok."},{id:"otak",name:"Otak dan mata",sci:"Sistem saraf",ui:"#e8a8b0",short:"Pusat kendali dan indra.",what:"Otak ikan kecil dibanding tubuhnya. Bagian yang mengolah penglihatan (lobus optik) relatif besar. Mata ikan berada di sisi kepala.",fn:"Mengolah informasi dari mata, gurat sisi, penciuman, dan sungut, lalu mengatur gerak.",fact:"Ikan tidak punya kelopak mata. Matanya selalu dibasahi air."},{id:"insang",name:"Insang",sci:"Sistem pernapasan",ui:"#e05060",short:"Penyerap oksigen dari air.",what:"Di bawah tutup insang (operkulum) ada empat lengkung insang di tiap sisi. Tiap lengkung punya ratusan filamen merah, dan tiap filamen punya lipatan tipis (lamela) yang kaya pembuluh darah.",fn:"Air masuk lewat mulut, mengalir melewati filamen, lalu keluar lewat celah tutup insang. Oksigen dari air masuk ke darah, karbon dioksida keluar ke air.",fact:'Di lamela, darah mengalir berlawanan arah dengan air (arus berlawanan). Cara ini membuat ikan bisa mengambil sebagian besar oksigen dari air. Coba matikan "Aliran berlawanan arah" untuk membandingkan.'},{id:"jantung",name:"Jantung",sci:"Sistem peredaran darah",ui:"#e0505e",short:"Pompa darah dua ruang.",what:"Jantung ikan terletak di bawah insang dan hanya punya dua ruang utama: satu serambi dan satu bilik.",fn:"Memompa darah ke insang untuk mengambil oksigen. Dari insang darah langsung mengalir ke seluruh tubuh, lalu kembali ke jantung. Darah hanya sekali melewati jantung dalam satu putaran (peredaran darah tunggal).",fact:"Detak jantung ikan sangat dipengaruhi suhu air. Di air hangat jantung berdetak lebih cepat daripada di air dingin."},{id:"gelembung",name:"Gelembung renang",sci:"Vesica natatoria",ui:"#c8d0d8",short:"Pelampung yang bisa diatur.",what:"Kantong berisi gas di bagian atas rongga tubuh, di bawah tulang belakang.",fn:"Mengatur daya apung. Dengan menambah atau mengurangi gas, ikan bisa melayang di kedalaman tertentu tanpa banyak mengeluarkan tenaga.",fact:"Coba slider Gelembung renang: kalau gasnya kurang, ikan tenggelam. Kalau terlalu banyak, ikan naik. Cari titik pas supaya ikan melayang."},{id:"hati",name:"Hati",sci:"Sistem pencernaan",ui:"#b0463c",short:"Penyimpan cadangan makanan.",what:"Hati berada di bagian depan rongga perut, di belakang jantung.",fn:"Membuat empedu untuk mencerna lemak, menyimpan cadangan energi, dan menetralkan zat berbahaya.",fact:"Minyak hati ikan, misalnya dari ikan kod, kaya vitamin A dan D."},{id:"usus",name:"Saluran pencernaan",sci:"Lambung dan usus",ui:"#f0b8a8",short:"Mencerna dan menyerap makanan.",what:"Makanan masuk lewat mulut, kerongkongan, lambung (pada sebagian ikan), lalu usus yang berkelok sampai ke anus di depan sirip dubur.",fn:"Mencerna makanan dan menyerap nutrisi ke dalam darah.",fact:"Panjang usus sesuai makanannya: ikan pemakan tumbuhan punya usus jauh lebih panjang daripada ikan pemakan daging."},{id:"ginjal",name:"Ginjal",sci:"Sistem ekskresi",ui:"#a04a3a",short:"Pembuang kelebihan air.",what:"Ginjal ikan berupa organ memanjang berwarna merah gelap, tepat di bawah tulang belakang.",fn:"Menyaring darah dan membuang sisa metabolisme.",fact:"Air tawar terus meresap masuk ke tubuh ikan air tawar, sehingga ginjalnya membuang banyak urine yang sangat encer."}],N_=[["Organ apa yang dipakai ikan untuk mengambil oksigen dari air?",["Insang","Paru-paru","Gelembung renang","Hati"],"Insang menyerap oksigen terlarut dari air yang mengalir melewati filamennya."],["Apa fungsi gelembung renang?",["Mengatur daya apung","Mencerna makanan","Memompa darah","Menyaring urine"],"Dengan mengatur isi gas, ikan bisa melayang di kedalaman tertentu tanpa banyak tenaga."],["Berapa ruang utama jantung ikan?",["Dua","Tiga","Empat","Satu"],"Satu serambi dan satu bilik. Darah mengalir dalam peredaran tunggal."],["Gurat sisi pada ikan berfungsi untuk ...",["Merasakan getaran dan arus air","Bernapas","Menyimpan lemak","Menarik pasangan dengan warna"],"Gurat sisi adalah indra yang membuat ikan peka terhadap gerakan di sekitarnya."],["Mengapa arus berlawanan arah di insang menguntungkan?",["Oksigen lebih banyak terserap ke darah","Air lebih cepat keluar","Insang lebih ringan","Ikan tidak perlu membuka mulut"],"Karena darah selalu bertemu air yang lebih kaya oksigen, perpindahan oksigen terjadi di sepanjang lamela."]],C_={mas:["Ikan mas tidak punya gigi di mulut. Di mana gigi pengunyahnya?",["Di tenggorokan (gigi faring)","Di lidah","Di sirip","Tidak punya sama sekali"],"Gigi faring di tenggorokan menggerus makanan sebelum masuk ke saluran pencernaan."],nila:["Apa yang dilakukan induk betina nila dengan telurnya?",["Mengerami di dalam mulut","Menempelkan di daun","Mengubur di pasir lalu pergi","Menitipkan pada ikan lain"],"Nila termasuk pengeram mulut. Anak-anaknya juga berlindung di mulut induk saat ada bahaya."],lele:["Mengapa lele bisa hidup di air yang miskin oksigen?",["Punya organ arborescent untuk menghirup udara","Tidak butuh oksigen","Insangnya sangat besar","Menyimpan oksigen di sisik"],"Organ bercabang di atas insang menyerap oksigen dari udara yang dihirup di permukaan."],gurami:["Sirip perut gurami yang panjang seperti benang berfungsi sebagai ...",["Alat peraba","Alat bernapas","Penyimpan telur","Pelampung"],"Gurami memakai sirip perutnya untuk meraba sekitar, terutama di air yang keruh."],arwana:["Mengapa arwana Asia tidak boleh ditangkap dan diperdagangkan sembarangan?",["Karena dilindungi dan terdaftar di CITES Apendiks I","Karena beracun","Karena hanya hidup di laut","Karena tidak bisa dimakan"],"Arwana Asia terancam punah di alam. Perdagangan hanya boleh dari penangkaran resmi."]},gg=Object.keys(mg);function bg(i,e){let t=mg[i],n=D_.map(a=>t.notes[a.id]?Object.assign({},a,{fact:a.fact+" "+t.notes[a.id]}):a);t.extraLayer&&n.splice(5,0,Object.assign({},t.extraLayer,t.notes.labirin?{fact:t.extraLayer.fact+" "+t.notes.labirin}:{}));let s=N_.concat([C_[i]]).map((a,r)=>({id:i+"q"+r,sp:i,q:a[0],o:a[1],a:0,e:a[2]}));return{id:i,name:t.name,layers:n,quiz:s,P:t.P,world:t.world,specimen:{id:i,kind:"fish",name:t.name,short:t.name.toLowerCase(),sci:t.sci,family:t.family,x:-34,z:26,top:0,mkOff:0,promptY:-.5,reach:4,tagNear:0,needSwim:!0,fact:t.fact,hint:"Geser Kedalaman untuk mengupas lapisan. Geser Gelembung renang sampai ikan melayang diam. Nyalakan atau matikan aliran berlawanan arah untuk melihat cara insang bekerja (titik biru air, titik merah darah)."}}}var Hn=7,Gt=Hn/2;function Mg(i,e){let t=Math.log(.5)/Math.log(i.pm),n=Math.pow(Math.max(0,Math.sin(Math.PI*Math.pow(e,t))),i.shape);return n=Math.max(n,i.tailMin*(1-kt(0,.3,e))),e>.86&&(n=Math.max(n,Math.min(n+.3,i.blunt*Math.sqrt(Math.max(0,(1-e)/.14))))),n}var xn=(i,e)=>i.arch*Math.sin(Math.PI*e)*i.H*.12+(i.mouthUp||0)*kt(.82,1,e)*.18,fi=(i,e)=>i.H*Mg(i,e),gs=(i,e)=>i.W*Mg(i,e)*(1+(i.headW||0)*kt(.55,.95,e)),ju=i=>(i+Gt)/Hn,rl=(i,e)=>{let t=ju(e);return xn(i,t)+fi(i,t)},vr=(i,e)=>{let t=ju(e);return xn(i,t)-fi(i,t)*i.belly};function U_(i,e=1,t=48,n=24){let s=[],a=[],r=[],o=[];for(let g=0;g<=t;g++){let m=.012+.983*g/t,y=-Gt+m*Hn,_=xn(i,m),M=fi(i,m)*e,S=Math.max(.01,gs(i,m)*e),T=(fi(i,Math.min(1,m+.004))-fi(i,Math.max(0,m-.004)))/(2*.004*Hn)*e;for(let b=0;b<=n;b++){let v=b/n*nt,F=Math.sin(v),L=Math.cos(v),G=F>0?M:M*i.belly;s.push(y,_+G*F,S*L);let q=new k(-T*(F>0?1:i.belly)*Math.abs(F)-T*.6*Math.abs(L),F/Math.max(.01,G),L/S).normalize();a.push(q.x,q.y,q.z),r.push(m,b/n)}}for(let g=0;g<t;g++)for(let m=0;m<n;m++){let y=g*(n+1)+m,_=y+n+1;o.push(y,_,y+1,_,_+1,y+1)}let h=new dt;h.setAttribute("position",new at(s,3)),h.setAttribute("normal",new at(a,3)),h.setAttribute("uv",new at(r,2)),h.setIndex(o);let d=.012,f=.995,p=Ee([.05,fi(i,d)*e,gs(i,d)*e],[-Gt+d*Hn,xn(i,d),0],12),x=Ee([.08,Math.max(.03,fi(i,f)*e),Math.max(.03,gs(i,f)*e)],[-Gt+f*Hn,xn(i,f),0],12);return it([h,p,x])}function Pf(i){return new fo(new Li(i.map(e=>new pe(e[0],e[1]))))}function xg(i,e,t,n,s,a=.5){let r=[];for(let f=8;f>=0;f--){let p=-Gt+(e+(t-e)*f/8)*Hn;r.push([p,s?rl(i,p)-.06:vr(i,p)+.06])}let l=-Gt+e*Hn,c=-Gt+t*Hn,u=s?1:-1,h=s?rl(i,l):vr(i,l),d=s?rl(i,c):vr(i,c);return r.push([l-a*n,h+u*n*.95]),r.push([(l+c)/2-a*n*.6,(h+d)/2+u*n*.85]),r.push([c-.1,d+u*n*.35]),Pf(s?r.reverse():r)}function B_(i){let e=-Gt+.1,t=i.cauH||1,n=xn(i,.02),s=[];if(i.caudal==="forked")s.push([e,.22*t],[e-1.35*t,1*t],[e-1.1*t,.75*t],[e-.8*t,.05],[e-.8*t,-.05],[e-1.1*t,-.75*t],[e-1.35*t,-1*t],[e,-.22*t]);else if(i.caudal==="truncate")s.push([e,.22*t],[e-1.1*t,.78*t],[e-1.2*t,0],[e-1.1*t,-.78*t],[e,-.22*t]);else{s.push([e,.25*t]);for(let r=0;r<=12;r++){let o=Math.PI*(.6+.8*r/12);s.push([e-.25*t+Math.cos(o)*1*t,Math.sin(o)*.95*t])}s.push([e,-.25*t])}let a=Pf(s);return a.translate(0,n,0),a}function yg(i,e,t,n,s,a,r){let o=Pf([[0,.06],[-t*.55,n*.6],[-t,n*.1],[-t*.8,-n*.4],[-.05,-.08]]);o.rotateX(r*(Math.PI/2-s)),o.rotateY(r*a);let l=-Gt+e*Hn;return o.translate(l,xn(i,e)-fi(i,e)*(i.finLow||.45),r*gs(i,e)*.8),o}function H_(i){let e=[B_(i)];for(let t of i.dorsal||[])e.push(xg(i,t[0],t[1],t[2],!0,t[3]??.5));for(let t of i.anal||[])e.push(xg(i,t[0],t[1],t[2],!1,t[3]??.4));for(let t of[1,-1])if(e.push(yg(i,i.pecT||.74,i.pecL||.9,.42,.35,.5,t)),e.push(yg(i,i.pelT||.5,i.pelL||.6,.3,.15,.25,t)),i.thread){let n=-Gt+(i.pelT||.5)*Hn,s=vr(i,n);e.push(pn([[n,s,t*.12],[n-.8,s-.5,t*.25],[n-2,s-.6,t*.3],[n-3.2,s-.3,t*.3]],.025,24,4))}return e}function G_(i){return Ji(128,(e,t)=>{e.fillStyle=i,e.fillRect(0,0,t,t);for(let n=0;n<10;n++)e.fillStyle="rgba(0,0,0,0.28)",e.fillRect(n*t/10,0,2,t),e.fillStyle="rgba(255,255,255,0.15)",e.fillRect(n*t/10+4,0,1,t)},[5,5])}function vg(i){let e=[],t=Gt-.05,n=xn(i,1)-.05;for(let s of i.barbels||[])for(let a of[1,-1]){let r=[t-s[0],n+s[1],a*s[2]],o=s[3];e.push(pn([r,[r[0]+o[0]*.5,r[1]+o[1]*.5,r[2]+a*o[2]*.5],[r[0]+o[0],r[1]+o[1],r[2]+a*o[2]]],s[4]||.025,10,4))}return e}function q_(i){return Ji(512,(e,t)=>{let n=new fe(i.back),s=new fe(i.side),a=new fe(i.belly2),r=new fe;for(let l=0;l<t;l++){let c=l/t,u=Math.sin(nt*c);r.copy(s).lerp(u>0?n:a,Math.pow(Math.abs(u),.8)),e.fillStyle="#"+r.getHexString(),e.fillRect(0,l,t,1)}let o=Xt(i.seed||3);if(i.bars)for(let l=0;l<i.bars;l++)e.fillStyle="rgba(20,25,30,0.16)",e.fillRect(t*(.28+l*.065),0,t*.03,t);if(i.scale){let l=i.scale;e.lineWidth=l>30?3:1.4;for(let c=0;c<t/(l*.6)+1;c++)for(let u=0;u<t/l+1;u++){let h=u*l+c%2*l/2,d=c*l*.6;e.strokeStyle=i.scaleEdge||"rgba(0,0,0,0.22)",e.beginPath(),e.arc(h,d,l*.55,-Math.PI*.5,Math.PI*.5),e.stroke(),i.scaleShine&&(e.fillStyle="rgba(255,255,255,0.08)",e.beginPath(),e.arc(h-l*.15,d,l*.3,0,nt),e.fill())}}else for(let l=0;l<3e3;l++)e.fillStyle=o()<.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.04)",e.fillRect(o()*t,o()*t,2,2);for(let l of[0,.5,1]){e.strokeStyle="rgba(20,20,20,0.45)",e.lineWidth=2,e.setLineDash([5,3]),e.beginPath();for(let u=.12;u<=.84;u+=.02)e.lineTo(u*t,l*t+Math.sin(u*5)*3-(l===.5?10:-10)*.4);e.stroke(),e.setLineDash([]),e.strokeStyle="rgba(25,15,10,0.55)",e.lineWidth=3,e.beginPath();let c=(i.opT||.8)*t;for(let u=-.14;u<=.14;u+=.01)e.lineTo(c-Math.cos(u*11)*12,(l+u)*t);e.stroke()}},[1,1])}function O_(){return Ji(256,(i,e)=>{i.fillStyle="#e9b9a6",i.fillRect(0,0,e,e),i.strokeStyle="rgba(170,90,75,0.55)",i.lineWidth=2;for(let t=-2;t<26;t++){i.beginPath();for(let n=0;n<=e;n+=4){let s=n/e;i.lineTo(t*11+Math.abs(Math.sin(s*nt*2))*14,n)}i.stroke()}},[1,1])}function wf(i){let e=i.H,t=i.W,n=xn(i,.5),s=i.iris||[.85,.7,.25],a=i.eyeT||.87,r=-Gt+a*Hn,o=c=>n+c*e,l=c=>c*t;return{id:i.id,kind:"fish",groundY:-2.3,noPed:!0,worldScale:1,hitR:.5,hitY:0,pivots:{head:[0,0,0],tail:[0,0,0],legs:[]},camTarget:[0,0,0],camYaw:0,bg:["#1f5774","#0a1f2e"],dotSize:.12,muscleShrink:.86,vitals:c=>({bpm:Math.round(An(40,90,c)),rr:Math.round(An(40,110,c))}),bodyParts(c){let u=U_(i,c),h=Ee([.1,.07*c,.14*c],[Gt-.02,xn(i,1)-.06,0],10),d=c===1?it(H_(i)):Ee([.05,.05,.05],[0,0,0],6);return{body:u,head:h,tail:d,legs:[]}},muscleMat(){return new Zt({map:O_(),roughness:.45,clearcoat:.5,clearcoatRoughness:.3})},skinMats(){let c=new Zt({map:q_(i),roughness:i.scale?.42:.5,metalness:i.metal??.05,clearcoat:.3,clearcoatRoughness:.35,envMapIntensity:.55}),u=new et({map:G_(i.fin),side:$t,roughness:.55,transparent:!0,opacity:.85});return{body:c,head:c,tail:u,legs:c}},face(c,u){let h=xn(i,a)+fi(i,a)*(i.eyeY??.3),d=gs(i,a)*.86,f=Ys(c.head,u,{p:[r,h,d],r:i.eyeR||.17,scale:[1,1,.55],iris:s,pupil:"round",side:!0}),p=new et({color:ni(...i.barbelCol||[.12,.1,.09]),roughness:.6,transparent:!0}),x=vg(i);return x.length&&c.head.add(new we(it(x),p)),c.head.add(new we(Ee([.04,.05,.12],[Gt+.04,xn(i,1)-.08,0],8),p)),f.concat([p])},bones(){let c=[],u=x=>xn(i,ju(x));c.push(Ee([.62,fi(i,.9)*.8,gs(i,.9)*.75],[Gt-.75,u(Gt-.75),0],16),ct([Gt-.4,u(Gt)-.05,0],[Gt-.02,u(Gt)-.1,0],.07,.05));let h=34,d=Gt-1.1,f=-Gt+.25;for(let x=0;x<h;x++){let g=d+(f-d)*x/(h-1),m=ju(g),y=xn(i,m)+fi(i,m)*.12,_=rl(i,g)*.92+y*.08,M=vr(i,g)*.85+y*.15;if(c.push(Ee([.07,.06,.06],[g,y,0],6),ct([g,y,0],[g-.12,_,0],.012,.008)),m<.42)c.push(ct([g,y,0],[g-.12,M,0],.012,.008));else if(m<.74)for(let S of[1,-1])c.push(pn([[g,y,S*.05],[g-.05,(y+M)/2,S*gs(i,m)*.75],[g-.12,M*.9,S*gs(i,m)*.4]],.018,6,4))}let p=x=>{x.computeBoundingBox()};for(let x of(i.dorsal||[]).concat(i.anal||[])){let g=(i.dorsal||[]).includes(x);for(let m=0;m<=6;m++){let y=-Gt+(x[0]+(x[1]-x[0])*m/6)*Hn,_=g?rl(i,y):vr(i,y);c.push(ct([y,_,0],[y-x[2]*.5,_+(g?1:-1)*x[2]*.8,0],.01,.006))}}for(let x=-4;x<=4;x++)c.push(ct([-Gt+.1,xn(i,.02),0],[-Gt-1*(i.cauH||1),xn(i,.02)+x*.2*(i.cauH||1),0],.012,.006));return p(c[0]),it(c)},organs(c,u){c("otak",Mr([.22,.13,.13],[[.1,.08,.09],[-.2,-.02,0]]),u([.9,.72,.7],.5,.3),[r-.25,xn(i,a)+fi(i,a)*.35,0]);let h=[],d=r-.75;for(let M of[1,-1])for(let S=0;S<4;S++){let T=d+.1-S*.11,b=[[T,o(.35),M*.1],[T-.05,o(.05),l(M*.55)],[T,o(-.4),M*.1]];h.push(pn(b,.03,14,5));for(let v=0;v<9;v++){let F=new Zn(b.map(bn)).getPoint(.1+v*.09);h.push(ct([F.x,F.y,F.z],[F.x-.22,F.y,F.z*.92],.028,.008,5))}}c("insang",it(h),u([.78,.1,.16],.45,.5));let f=[d-.2,o(-.55),0],p=c("jantung",it([Ee([.16,.12,.14],[-.15,.02,0],14),Ee([.17,.15,.14],[.05,-.02,0],14),ct([.15,0,0],[.45,.12,0],.06,.05)]),u([.55,.06,.1],.3,.8),f);c("hati",Ee([.55,.3*e,.32*t],[d-.75,o(-.35),l(.15)],18),u([.45,.14,.1],.35,.7));let x=[-.15,o(.28),0],g=i.twoChamber?it([Ee([.55,.26*e,.26*t],[.55,.02,0],18),Ee([.85,.28*e,.28*t],[-.75,-.02,0],18)]):Ee([1.35,.28*e,.28*t],[0,0,0],20),m=c("gelembung",g,new Zt({color:ni(.88,.9,.92),roughness:.15,metalness:.35,clearcoat:1,transparent:!0}),x),y=-Gt+(i.anal&&i.anal[0]?i.anal[0][0]:.35)*Hn+.1,_=[[d-.3,o(-.15),0],[d-.9,o(-.45),-.1],[.3,o(-.5),l(.3)],[-.2,o(-.35),l(-.3)],[-.6,o(-.6),l(.3)],[y+.4,o(-.5),0],[y,o(-.85),0]];if(c("usus",it([Ee([.45,.22*e,.22*t],[d-1,o(-.3),0],16),pn(_,.07,80,6)]),u([.92,.68,.6],.45,.6)),c("ginjal",pn([[d-.2,o(.42),0],[0,o(.5),0],[y,o(.45),0]],.07,24,6),u([.4,.1,.1],.4,.6)),i.labirin){let M=[];if(i.labirin==="pohon")for(let S of[1,-1]){let T=[d+.05,o(.35),l(S*.3)];for(let b=0;b<5;b++){let v=[T[0]-.1+b*.05,T[1]+.2+b%2*.1,T[2]+S*.05*b];M.push(ct(T,v,.035,.02,5));for(let F=0;F<2;F++)M.push(ct(v,[v[0]+(F?.08:-.08),v[1]+.12,v[2]],.018,.01,4))}}else for(let S of[1,-1])for(let T=0;T<7;T++)M.push(Ee([.08,.06,.06],[d+.05+Math.sin(T*1.7)*.12,o(.32)+Math.cos(T*2.3)*.08,l(S*.32)+Math.sin(T)*.05],8));c("labirin",it(M),u([.82,.42,.45],.4,.5))}return{heart:p,lungs:[],bladder:m,BC:x}},food:{main:[[Gt-.05,xn(i,1)-.08,0],[r-.5,o(-.1),0],[r-1.2,o(-.25),0],[r-1.75,o(-.3),0],[.3,o(-.5),l(.3)],[-.2,o(-.35),l(-.3)],[-.6,o(-.6),l(.3)],[-Gt+(i.anal&&i.anal[0]?i.anal[0][0]:.35)*Hn+.1,o(-.85),0]],n:45},flows:[{pts:[[Gt-.05,xn(i,1),0],[r-.3,o(0),l(.15)],[r-.75,o(0),l(.5)],[r-1.15,o(-.1),l(.95)],[r-1.6,o(-.15),l(1.3)]],color:new fe(.5,1.5,2.6),n:50,speed:2.2,jit:.16},{pts:[[r-1,o(-.05),l(.42)],[r-.45,o(0),l(.42)]],color:new fe(2.6,.25,.25),n:34,speed:3.2,jit:.28,dir:c=>c.counter===!1?-1:1}],neutral:i.neutral??.5,onUpdate(c,u,h,d,f){c.gas==null&&(c.gas=.25,c.vy=0,c.fy=0,c.hold=0,c.counter=!0);let p=this.neutral,x=(c.gas-p)*4.2;c.vy+=x*d,c.vy*=Math.exp(-1.6*d),c.fy+=c.vy*d,c.fy<-1.2&&(c.fy=-1.2,c.vy=0),c.fy>1.4&&(c.fy=1.4,c.vy=0),u.position.y=c.fy,u.rotation.z=Ct(c.vy*.25,-.25,.25)+Math.sin(f*1.2)*.015,h.bladder&&h.bladder.scale.setScalar(.55+.9*c.gas),c.status=c.gas<p-.04?"tenggelam":c.gas>p+.04?"mengapung":"melayang",c.status==="melayang"&&Math.abs(c.vy)<.12?c.hold+=d:c.hold=0,c.hold>2.5&&!c.buoyOk&&(c.buoyOk=!0)}}}function _g(i,e,t,n){let{heightAt:s,WATER:a}=e,r={uTime:{value:0}},o=[],l=(m,y,_)=>{m.onBeforeCompile=M=>{M.uniforms.uTime=r.uTime,M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      { float tt = clamp((${Gt.toFixed(2)} - position.x) / ${Hn.toFixed(2)}, 0.0, 1.0); float ph = float(gl_InstanceID) * 2.37;
        transformed.z += sin(position.x * 1.1 + uTime * ${_.toFixed(2)} + ph) * ${y.toFixed(3)} * tt * tt; }`)}},c=Xt(77),u=(m,y)=>{for(let _=0;_<20;_++){let M=c()*nt,S=Math.sqrt(c())*(n.r-4),T=n.x+Math.cos(M)*S,b=n.z+Math.sin(M)*S,v=s(T,b);if(a-v>1){let F=An(v+y,a-.35,m+(c()-.5)*.25);return[T,Ct(F,v+.25,a-.3),b]}}return[n.x,a-1,n.z]};for(let m of t){let y=m.P,_=wf(y),M=m.count,S=_.bodyParts(1),T=_.skinMats(),b=new et({map:T.body.map,roughness:.45,metalness:.05}),v=T.tail,F=[],L=xn(y,y.eyeT||.87)+fi(y,y.eyeT||.87)*(y.eyeY??.3),G=gs(y,y.eyeT||.87)*.86,q=-Gt+(y.eyeT||.87)*Hn,U=y.eyeR||.17;for(let H of[1,-1]){let j=Ee([U,U,U*.55],[q,L,H*G],10),X=Ee([U*.5,U*.5,U*.2],[q+.02,L,H*(G+U*.48)],8),W=new Float32Array(j.attributes.position.count*3).fill(0),ie=ni(...y.iris||[.85,.7,.25]);for(let me=0;me<W.length;me+=3)W[me]=ie.r,W[me+1]=ie.g,W[me+2]=ie.b;j.setAttribute("color",new lt(W,3)),X.setAttribute("color",new lt(new Float32Array(X.attributes.position.count*3).fill(.02),3)),F.push(j,X)}let E=new et({vertexColors:!0,roughness:.15}),D=it([S.tail,...vg(y)]),w=m.amp||.18,P=m.freq||6;[b,v,E].forEach(H=>l(H,w,P));let Y=new Pn(it([S.body,S.head]),b,M),O=new Pn(D,v,M),B=new Pn(it(F),E,M);for(let H of[Y,O,B])H.frustumCulled=!1,H.castShadow=!1,H.userData.noAO=!0,i.add(H);let $=[];for(let H=0;H<M;H++){let j=u(m.depth,m.bedOff||.35);$.push({p:bn(j),v:new k(c()-.5,0,c()-.5).multiplyScalar(.3),tgt:bn(u(m.depth,m.bedOff||.35)),off:new k((c()-.5)*2,(c()-.5)*.5,(c()-.5)*2),yaw:c()*nt,pitch:0})}o.push({item:m,P:y,body:Y,fins:O,eyes:B,fish:$,scale:m.scale})}let h=new je,d=new Pt,f=new Wt(0,0,0,"YZX"),p=new k,x=new k,g=new k;return{groups:o,update(m,y,_,M){r.uTime.value=y;let S=Math.hypot(_.x-n.x,_.z-n.z)>n.r+35;for(let T of o){if(T.body.visible=T.fins.visible=T.eyes.visible=!S,S)continue;let b=T.item.speed||.6;T.fish.forEach((v,F)=>{let L=T.fish[0],G=F===0||!T.item.school?v.tgt:x.copy(L.p).add(v.off);(F===0||!T.item.school)&&v.p.distanceTo(v.tgt)<.8&&v.tgt.copy(bn(u(T.item.depth,T.item.bedOff||.35))),x.copy(G).sub(v.p);let q=x.length();q>.001&&x.multiplyScalar(b/q),g.set(v.p.x-_.x,v.p.y-M,v.p.z-_.z);let U=g.length();U<1.6&&x.add(g.multiplyScalar((1.6-U)*1.5/Math.max(.1,U))),v.v.lerp(x,Math.min(1,m*1.2)),v.p.addScaledVector(v.v,m);let E=s(v.p.x,v.p.z);v.p.y=Ct(v.p.y,E+.22,a-.25),Math.hypot(v.p.x-n.x,v.p.z-n.z)>n.r-3&&(v.p.x+=(n.x-v.p.x)*m*.5,v.p.z+=(n.z-v.p.z)*m*.5);let D=Math.hypot(v.v.x,v.v.z);if(D>.02){let P=Math.atan2(-v.v.z,v.v.x)-v.yaw;P=Math.atan2(Math.sin(P),Math.cos(P)),v.yaw+=P*Math.min(1,m*3)}v.pitch+=(Ct(Math.atan2(v.v.y,D+.01),-.5,.5)-v.pitch)*Math.min(1,m*3),f.set(0,v.yaw,v.pitch),d.setFromEuler(f),p.setScalar(T.scale),h.compose(v.p,d,p),T.body.setMatrixAt(F,h),T.fins.setMatrixAt(F,h),T.eyes.setMatrixAt(F,h)}),T.body.instanceMatrix.needsUpdate=T.fins.instanceMatrix.needsUpdate=T.eyes.instanceMatrix.needsUpdate=!0}}}}var Sg=i=>({id:"berkas",name:"Berkas pembuluh",sci:"Xilem dan floem tersebar",ui:"#6b4a2a",short:"Saluran air dan makanan, tersebar.",what:"Tiap berkas berisi xilem (pembuluh besar berwarna biru di gambar penampang) dan floem (hijau) yang berdampingan, dibungkus serat keras (cokelat). Di antara xilem dan floem tidak ada kambium, sehingga disebut berkas kolateral tertutup.",fn:"Xilem mengangkut air dan mineral dari akar ke daun. Floem mengangkut gula hasil fotosintesis dari daun ke seluruh tubuh. Serat pembungkusnya membuat batang kuat.",fact:i==="kelapa"?"Berkas makin rapat ke arah tepi, jadi bagian luar batang kelapa jauh lebih keras daripada bagian tengahnya. Kayu kelapa (glugu) dipakai untuk rangka rumah dan mebel.":"Pada bambu, berkas paling rapat di bagian luar dinding buluh. Serat di sekitar berkas inilah yang membuat bambu kuat sekaligus lentur, sehingga dipakai untuk rumah, jembatan, dan perancah."}),X_=[{id:"kulit",name:"Lapisan luar",sci:"Epidermis dan bekas pelepah",ui:"#7d7262",short:"Permukaan keras bercincin.",what:"Permukaan batang kelapa keras dan bercincin. Tiap cincin adalah bekas tempat menempelnya satu pelepah daun yang sudah gugur.",fn:"Melindungi jaringan di dalamnya dari luka, serangga, dan kehilangan air.",fact:"Lapisan luar batang kelapa bukan kulit kayu seperti pada pohon jati atau mahoni, karena batang kelapa tidak punya kambium gabus yang terus membentuk kulit baru."},{id:"korteks",name:"Korteks",sci:"Jaringan tepi berserat",ui:"#b79a6a",short:"Lapisan tipis berserat di bawah permukaan.",what:"Lapisan tipis di bawah permukaan yang berisi banyak serat.",fn:"Menambah kekuatan bagian tepi batang.",fact:"Pada batang monokotil, batas antara korteks dan bagian dalam batang tidak tegas, karena berkas pembuluh tersebar sampai dekat tepi."},{id:"parenkim",name:"Jaringan dasar",sci:"Parenkim",ui:"#e6d9b8",short:"Pengisi batang tempat berkas tersebar.",what:"Jaringan dasar berupa sel-sel parenkim yang mengisi seluruh batang. Berkas pembuluh tersebar di dalamnya.",fn:"Menyimpan air dan cadangan makanan, serta menjadi tempat tertanamnya berkas pembuluh.",fact:"Karena tidak ada kambium, penampang kelapa tidak punya cincin tahun. Umur kelapa lebih mudah diperkirakan dari jumlah bekas pelepah, karena kelapa dewasa membentuk sekitar satu pelepah baru tiap bulan."},Sg("kelapa")],V_=[{id:"kulit",name:"Kulit buluh",sci:"Epidermis bersilika",ui:"#6f9a34",short:"Lapisan luar licin dan keras.",what:"Lapisan terluar buluh bambu tipis, licin, dan keras karena mengandung silika, zat yang sama dengan bahan utama pasir.",fn:"Melindungi buluh dari air, jamur, dan serangga.",fact:"Di bawah tiap buku sering terlihat lapisan seperti bedak putih. Itu lapisan lilin yang membantu mengurangi penguapan."},{id:"dinding",name:"Dinding buluh",sci:"Parenkim dan serat",ui:"#d9cf9e",short:"Dinding tebal tempat berkas tersebar.",what:"Dinding buluh terdiri dari parenkim dan serat, dengan berkas pembuluh tersebar di dalamnya, makin rapat ke arah luar.",fn:"Menopang buluh setinggi belasan meter sambil tetap lentur saat diterpa angin.",fact:"Bambu termasuk keluarga rumput-rumputan (Poaceae), sama seperti padi dan jagung. Bambu adalah salah satu tumbuhan dengan pertumbuhan tercepat: rebungnya bisa bertambah tinggi puluhan sentimeter dalam sehari."},Sg("bambu"),{id:"buku",name:"Buku dan sekat",sci:"Nodus dan diafragma",ui:"#c8b874",short:"Cincin penguat dan sekat melintang.",what:"Buku adalah cincin menonjol pada buluh. Di dalamnya ada sekat melintang (diafragma) yang menutup rongga.",fn:"Sekat membuat buluh tidak mudah gepeng atau patah. Dari buku juga tumbuh cabang dan daun.",fact:"Bagian di antara dua buku disebut ruas. Panjang ruas berbeda-beda tiap jenis bambu."},{id:"rongga",name:"Rongga",sci:"Lakuna",ui:"#9fd6ff",short:"Ruang kosong di tengah buluh.",what:"Bagian tengah buluh kosong berisi udara, dibatasi sekat di tiap buku.",fn:"Membuat batang ringan tetapi tetap kaku, seperti pipa. Bahan dipakai di tepi, tempat paling efektif menahan tekukan.",fact:"Prinsip yang sama dipakai pada tiang lampu, rangka sepeda, dan tulang burung: berongga supaya ringan tapi kuat."}],Y_=i=>{let e=i==="kelapa";return[["Mengapa penampang batang "+i+" tidak punya cincin tahun?",["Karena tidak punya kambium","Karena tumbuh di daerah tropis","Karena batangnya berongga","Karena terlalu muda"],"Cincin tahun dibuat oleh kambium. Monokotil tidak punya kambium, jadi tidak ada lapisan kayu baru tiap tahun."],["Bagaimana susunan berkas pembuluh pada batang monokotil?",["Tersebar di seluruh jaringan dasar","Melingkar rapi membentuk cincin","Hanya di bagian tengah","Tidak punya berkas pembuluh"],"Pada dikotil seperti jati, berkas tersusun melingkar. Pada monokotil, berkas tersebar."],["Apa isi satu berkas pembuluh monokotil?",["Xilem dan floem yang dibungkus serat","Kambium dan empulur","Hanya xilem","Stomata"],"Xilem dan floem berdampingan dibungkus serat sklerenkim, tanpa kambium di antaranya (kolateral tertutup)."],e?["Cincin-cincin di permukaan batang kelapa adalah ...",["Bekas pelepah daun yang gugur","Cincin tahun","Bekas gigitan hewan","Retakan karena panas"],"Tiap cincin menandai tempat satu pelepah pernah menempel."]:["Bambu termasuk keluarga tumbuhan apa?",["Rumput-rumputan (Poaceae)","Palem","Polong-polongan","Pakis"],"Bambu adalah rumput raksasa, sekerabat dengan padi dan jagung."],e?["Bagian mana dari batang kelapa yang paling keras?",["Bagian tepi, karena berkas paling rapat","Bagian tengah","Sama keras di semua bagian","Pucuknya"],"Berkas pembuluh dan seratnya makin rapat ke arah tepi."]:["Apa fungsi sekat (diafragma) di buku bambu?",["Memperkuat buluh agar tidak mudah gepeng atau patah","Menyimpan air hujan","Menghasilkan bunga","Membuat bambu berbunyi"],"Sekat melintang menahan dinding buluh tetap bulat saat ditekan."],["Mengapa batang "+i+" hampir tidak bertambah besar setelah tumbuh tinggi?",["Tidak ada kambium untuk pertumbuhan ke samping","Kekurangan air","Karena dipangkas","Karena akarnya serabut"],"Pertumbuhan ke samping (sekunder) dibuat oleh kambium. Tanpa kambium, diameter batang sudah ditentukan sejak muda."]].map((t,n)=>({id:i+"m"+n,sp:i,q:t[0],o:t[1],a:0,e:t[2]}))};function Tg(i){let e=i==="kelapa";return{id:i,name:e?"Kelapa":"Bambu",layers:e?X_:V_,quiz:Y_(i),specimen:e?{id:"kelapa",kind:"mono",name:"Pohon Kelapa",short:"kelapa",sci:"Cocos nucifera",family:"Arecaceae",x:-17,z:33,top:9,mkOff:1.2,fact:"Kelapa adalah tumbuhan monokotil dari keluarga palem. Akarnya serabut, daunnya bertulang sejajar, dan batangnya tidak bercabang. Hampir semua bagiannya berguna: buah, sabut, tempurung, daun, nira, dan batang.",hint:"Geser Kedalaman untuk mengupas lapisan sampai berkas pembuluh terlihat. Bandingkan dengan penampang jati: di sini tidak ada cincin tahun dan tidak ada kambium. Geser Matahari untuk melihat air (biru) naik dan gula (oranye) turun."}:{id:"bambu",kind:"mono",name:"Rumpun Bambu",short:"bambu",sci:"Gigantochloa apus",family:"Poaceae",x:28,z:14,top:9,mkOff:1.2,fact:"Bambu apus banyak ditanam di Jawa dan dipakai untuk bangunan, anyaman, dan kerajinan. Bambu tumbuh berumpun dari akar rimpang, dan tunas mudanya (rebung) bisa dimasak.",hint:"Geser Kedalaman untuk mengupas kulit buluh dan melihat berkas pembuluh di dinding. Perhatikan sekat di buku dan rongga di tengah. Geser Matahari untuk melihat aliran air dan gula."}}}var _r=(i,e,t)=>new fe().setRGB(i,e,t,gt);function xa(i,e,t,n=!0){let s=document.createElement("canvas");s.width=s.height=i,e(s.getContext("2d"),i);let a=new _n(s);return n&&(a.colorSpace=gt),a.wrapS=a.wrapT=Yt,a.anisotropy=4,t&&a.repeat.set(t[0],t[1]),a}function Eg(i,e){return xa(128,(t,n)=>{t.clearRect(0,0,n,n);let s=t.createLinearGradient(0,0,n,0);s.addColorStop(0,i[0]),s.addColorStop(.5,i[1]),s.addColorStop(1,i[0]),t.fillStyle=s,t.beginPath(),t.moveTo(n/2,0),t.bezierCurveTo(n*.95,n*.25,n*.95,n*.7,n/2,n),t.bezierCurveTo(n*.05,n*.7,n*.05,n*.25,n/2,0),t.fill(),t.strokeStyle=e,t.lineWidth=3,t.beginPath(),t.moveTo(n/2,0),t.lineTo(n/2,n),t.stroke()},null)}function Ag(i,e,t){return i.onBeforeCompile=n=>{n.uniforms.uTime=fu.uTime,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
    { float hh = max(0.0, position.y - ${t.toFixed(2)}); float w = hh * hh * ${e.toFixed(4)};
      transformed.x += sin(uTime * 1.3 + position.z * 0.4 + position.x * 0.2) * w; transformed.z += cos(uTime * 1.1 + position.x * 0.4) * w * 0.7; }`)},i}function Rg(i){let e=[],t=[],n=[],s=0,a=new k,r=new k,o=new k;for(let c of i){a.copy(c.p),r.copy(c.d).normalize(),o.copy(c.s).normalize().multiplyScalar(c.w/2);let u=a.clone().addScaledVector(r,c.l).add(c.droop||new k);e.push(a.x-o.x,a.y-o.y,a.z-o.z,a.x+o.x,a.y+o.y,a.z+o.z,u.x+o.x,u.y+o.y,u.z+o.z,u.x-o.x,u.y-o.y,u.z-o.z),t.push(0,0,1,0,1,1,0,1),n.push(s,s+1,s+2,s,s+2,s+3),s+=4}let l=new dt;return l.setAttribute("position",new at(e,3)),l.setAttribute("uv",new at(t,2)),l.setIndex(n),l.computeVertexNormals(),l}var Lf=null;function $_(){if(Lf)return Lf;let i=Xt(91),e=xa(256,(a,r)=>{a.fillStyle="#7d7262",a.fillRect(0,0,r,r);for(let o=0;o<1600;o++)a.fillStyle=i()<.5?"rgba(40,32,24,0.15)":"rgba(220,210,190,0.12)",a.fillRect(i()*r,i()*r,1+i()*2,6+i()*14);for(let o=0;o<16;o++)a.fillStyle="rgba(40,30,22,0.55)",a.fillRect(o*r/16,0,3,r),a.fillStyle="rgba(200,190,170,0.25)",a.fillRect(o*r/16+3,0,2,r)},[3,1]),t=new et({map:e,roughness:.92}),n=Ag(new et({map:Eg(["#3f6a1f","#6a9a2c"],"#c9d08a"),alphaTest:.45,side:$t,roughness:.6}),.004,6.5),s=new et({color:_r(.42,.5,.16),roughness:.55});return Lf={trunkM:t,leafM:n,nutM:s}}function Q_(i,e){let t=Xt(i),n=new k(t()-.5,0,t()-.5).normalize().multiplyScalar(.8+t()*1.2),s=new Zn([new k(0,-.3,0),new k(n.x*.15,e*.35,n.z*.15),new k(n.x*.55,e*.75,n.z*.55),new k(n.x,e,n.z)]),a=new as(s,24,1,10,!1),r=a.attributes.position,o=new k;for(let f=0;f<r.count;f++){let p=Math.floor(f/11),x=p/24;s.getPoint(x,o);let g=.17+.12*Math.pow(1-x,6);r.setXYZ(f,o.x+(r.getX(f)-o.x)*g,o.y+(r.getY(f)-o.y)*g,o.z+(r.getZ(f)-o.z)*g)}a.computeVertexNormals();let l=s.getPoint(1),c=[],u=16;for(let f=0;f<u;f++){let p=f/u*nt+t()*.3,x=.35-f%3*.28-t()*.2,g=3.4+t()*1.2,m=new k(Math.cos(p),x,Math.sin(p)).normalize(),y=new k(-Math.sin(p),0,Math.cos(p)),_=M=>l.clone().addScaledVector(m,M*g).add(new k(0,-M*M*g*.55,0));for(let M=2;M<40;M++){let S=M/40,T=_(S),b=_(Math.min(1,S+.03)).sub(T).normalize(),v=(.55+.45*Math.sin(Math.PI*Math.min(1,S*1.15)))*.85;for(let F of[1,-1]){let L=y.clone().multiplyScalar(F).addScaledVector(b,.55).add(new k(0,-.35,0));c.push({p:T,d:L,s:b,l:v,w:.09,droop:new k(0,-.12*v,0)})}}}let h=Rg(c),d=[];for(let f=0;f<7;f++){let p=f/7*nt,x=new Cn(.13,10,8);x.scale(1,1.15,1),x.translate(l.x+Math.cos(p)*.22,l.y-.28-f%2*.1,l.z+Math.sin(p)*.22),d.push(x)}return{trunk:a,leaves:h,nuts:Gs(d),top:l}}function If(i,e,t,n,s=1,a=9){let r=$_(),o=Q_(s,a),l=new jt,c=new we(o.trunk,r.trunkM),u=new we(o.leaves,r.leafM),h=new we(o.nuts,r.nutM);return c.castShadow=c.receiveShadow=!0,u.castShadow=!0,h.castShadow=!0,u.userData.noAO=!0,l.add(c,u,h),l.position.set(e,t,n),i.add(l),{group:l,top:o.top.y}}function Pg(){let i=Xt(17);return xa(256,(e,t)=>{let n=e.createLinearGradient(0,0,0,t);n.addColorStop(0,"#5f8a2e"),n.addColorStop(.5,"#7aa23c"),n.addColorStop(1,"#5f8a2e"),e.fillStyle=n,e.fillRect(0,0,t,t);for(let s=0;s<900;s++)e.fillStyle=i()<.5?"rgba(30,60,10,0.12)":"rgba(230,240,190,0.1)",e.fillRect(i()*t,i()*t,10+i()*30,1);for(let s=0;s<4;s++){let a=s*t/4;e.fillStyle="rgba(60,70,25,0.9)",e.fillRect(a,0,4,t),e.fillStyle="rgba(235,235,215,0.55)",e.fillRect(a+4,0,8,t)}},[1,1])}function wg(i,e,t,n,s=3){let a=Xt(s),r=new et({map:Pg(),roughness:.38,metalness:0}),o=Ag(new et({map:Eg(["#4f7a26","#86ad3e"],"#bcd27a"),alphaTest:.45,side:$t,roughness:.6}),.003,3),l=[],c=[],u=15,h=.42;for(let x=0;x<u;x++){let g=a()*nt,m=Math.sqrt(a())*.9,y=8+a()*3.5,_=.12+a()*.12,M=.045+a()*.025,S=new k(Math.cos(g)*m,-.2,Math.sin(g)*m),T=new k(Math.cos(g)*_,1,Math.sin(g)*_).normalize(),b=new Zn([S,S.clone().addScaledVector(T,y*.5),S.clone().addScaledVector(T,y*.85).add(new k(Math.cos(g)*y*.08,0,Math.sin(g)*y*.08)),S.clone().addScaledVector(T,y).add(new k(Math.cos(g)*y*.22,-y*.05,Math.sin(g)*y*.22))]),v=new as(b,30,M,7,!1),F=v.attributes.uv;for(let L=0;L<F.count;L++)F.setX(L,F.getX(L)*y/h/4);l.push(v);for(let L=0;L<34;L++){let G=.32+.68*L/34,q=b.getPoint(G),U=new k(a()-.5,(a()-.3)*.4,a()-.5).normalize(),E=.5+a()*.9*(1-G*.5);for(let D=0;D<11;D++){let w=q.clone().addScaledVector(U,E*(.35+.65*D/11)).add(new k(0,-.1*D/11,0)),P=U.clone().add(new k((a()-.5)*1.2,-.45-a()*.5,(a()-.5)*1.2)).normalize();c.push({p:w,d:P,s:new k(0,1,0).cross(P).normalize(),l:.24+a()*.12,w:.055})}}}let d=new jt,f=new we(Gs(l),r),p=new we(Rg(c),o);return f.castShadow=f.receiveShadow=!0,p.castShadow=!0,p.userData.noAO=!0,d.add(f,p),d.position.set(e,t,n),i.add(d),{group:d,top:9}}function Lg(i,e,t=Math.PI*.25,n=Math.PI*1.75,s=64){let a=new Li;for(let r=0;r<=s;r++){let o=t+(n-t)*r/s,l=Math.cos(o)*i,c=Math.sin(o)*i;r?a.lineTo(l,c):a.moveTo(l,c)}if(e>0)for(let r=s;r>=0;r--){let o=t+(n-t)*r/s;a.lineTo(Math.cos(o)*e,Math.sin(o)*e)}else a.lineTo(0,0);return a.closePath(),a}function ba(i,e,t,n=0){let s=new Is(Lg(i,e),{depth:t,bevelEnabled:!1,curveSegments:64});s.rotateX(-Math.PI/2),s.translate(0,n,0);let a=s.attributes.position,r=s.attributes.normal,o=s.attributes.uv,l=6;for(let c=0;c<a.count;c++)Math.abs(r.getY(c))>.9?o.setXY(c,a.getX(c)/l+.5,-a.getZ(c)/l+.5):o.setXY(c,Math.atan2(a.getZ(c),a.getX(c))/nt*4,a.getY(c)/3);return s}function z_(i,e,t,n){i.fillStyle="#5b3a1e",i.beginPath(),i.ellipse(e,t,n*1.05,n*1.25,0,0,nt),i.fill(),i.fillStyle="#d9c9a0",i.beginPath(),i.ellipse(e,t+n*.15,n*.75,n*.85,0,0,nt),i.fill(),i.fillStyle="#a3c36b",i.beginPath(),i.ellipse(e,t-n*.35,n*.42,n*.3,0,0,nt),i.fill(),i.fillStyle="#3a6fa8";for(let s of[-1,1])i.beginPath(),i.arc(e+s*n*.38,t+n*.3,n*.24,0,nt),i.fill()}function Ig(i,e){let t=new Wn;{let H=document.createElement("canvas");H.width=H.height=512;let j=H.getContext("2d"),X=j.createRadialGradient(256,230,20,256,256,420);X.addColorStop(0,"#2f4a2c"),X.addColorStop(.55,"#132014"),X.addColorStop(1,"#05090e"),j.fillStyle=X,j.fillRect(0,0,512,512);let W=new _n(H);W.colorSpace=gt,t.background=W}t.environment=new Mi(i).fromScene(new Os,.04).texture,t.environmentIntensity=.5;let n=new tn(38,1,.1,120),s=new wn(16773596,2.6);s.position.set(5,10,7),s.castShadow=!0,s.shadow.mapSize.set(1024,1024);let a=s.shadow.camera;a.left=-7,a.right=7,a.top=7,a.bottom=-7,a.near=1,a.far=32,s.shadow.bias=-5e-4,s.shadow.normalBias=.03,t.add(s);{let H=new wn(10475263,1.1);H.position.set(-6,3,-5),t.add(H)}let r=new Un().load(Us),o=new Un().load(Bs);for(let H of[r,o])H.wrapS=H.wrapT=Yt,H.repeat.set(2.4,2.4);r.colorSpace=gt;let l=new we(new nn(4.6,4.8,.3,64),new et({map:r,normalMap:o,color:_r(.75,.7,.66),roughness:1}));l.position.y=-.15,l.receiveShadow=!0,l.userData.noAO=!0,t.add(l);let c=e.type==="bambu",u=c?2.4:2.6,h=5.2,d=Xt(c?5:9),f=[],p=c?1.72:.05,x=c?2.3:2.18,g=c?230:280;for(;f.length<g;){let H=d()*nt,j=Math.pow(d(),c?.45:.6),X=p+(x-p)*j;H>Math.PI*.25-.02&&H<Math.PI*1.75+.02&&f.push([Math.cos(H)*X,Math.sin(H)*X,.035+.03*(1-j)+d()*.01])}let m=6,y=xa(1024,(H,j)=>{let X=j/m,W=j/2,ie=j/2;H.fillStyle=c?"#d9cf9e":"#e6d9b8",H.fillRect(0,0,j,j);let me=Xt(3);for(let he=0;he<5e3;he++)H.fillStyle=me()<.5?"rgba(120,100,60,0.08)":"rgba(255,255,240,0.1)",H.fillRect(me()*j,me()*j,2,2);c||(H.strokeStyle="rgba(110,80,40,0.6)",H.lineWidth=.25*X,H.beginPath(),H.arc(W,ie,2.42*X,0,nt),H.stroke(),H.fillStyle="#b79a6a",H.beginPath(),H.arc(W,ie,2.6*X,0,nt),H.arc(W,ie,2.3*X,0,nt,!0),H.fill());for(let he of f)z_(H,W+he[0]*X,ie-he[1]*X,he[2]*X*1.3)},[1,1]),_=new jt;t.add(_);let M=[],S={},T=(H,j)=>{S[H]||(S[H]={mats:[],meshes:[]}),S[H].mats.includes(j.material)||S[H].mats.push(j.material),S[H].meshes.push(j),j.userData.layer=H,M.push(j)},b=(H,j,X)=>{let W=new we(j,X);return W.castShadow=W.receiveShadow=!0,_.add(W),T(H,W),W},v=H=>new Zt(Object.assign({roughness:.75,transparent:!0},H)),F=xa(256,(H,j)=>{H.fillStyle=c?"#d8cc98":"#cdb88a",H.fillRect(0,0,j,j);for(let X=0;X<160;X++)H.fillStyle="rgba(110,80,40,0.35)",H.fillRect(X/160*j+Math.random()*2,0,1+Math.random()*2,j)},[6,2]);if(c){let H=Pg();H.repeat.set(4,1),b("kulit",ba(u,2.32,h),[v({map:y}),v({map:H,roughness:.35,clearcoat:.4})]),b("dinding",ba(2.32,1.7,h),[v({map:y}),v({map:F})]);let j=h*.55,X=new Is(Lg(1.72,0),{depth:.18,bevelEnabled:!1,curveSegments:48});X.rotateX(-Math.PI/2),X.translate(0,j,0);let W=ba(u+.08,u-.02,.16,j+.01);b("buku",Gs([X,W]),v({color:_r(.78,.72,.45),roughness:.6})),b("rongga",ba(1.69,0,h*.98,.02),v({color:_r(.6,.85,1),roughness:.1,opacity:.12,depthWrite:!1}))}else{let H=xa(256,(j,X)=>{j.fillStyle="#7d7262",j.fillRect(0,0,X,X);for(let W=0;W<2e3;W++)j.fillStyle=Math.random()<.5?"rgba(40,32,24,0.18)":"rgba(220,210,190,0.12)",j.fillRect(Math.random()*X,Math.random()*X,6+Math.random()*14,1+Math.random()*2);for(let W=0;W<6;W++)j.fillStyle="rgba(40,30,22,0.5)",j.fillRect(0,W*X/6,X,4)},[3,1]);b("kulit",ba(u,2.42,h),[v({map:y}),v({map:H,roughness:.95})]),b("korteks",ba(2.42,2.2,h),[v({map:y}),v({map:F})]),b("parenkim",ba(2.2,0,h),[v({map:y}),v({map:F,color:_r(1,.98,.92)})])}let L=v({color:_r(.42,.28,.14),roughness:.5}),G=new Pn(new nn(1,1,1,6),L,f.length),q=new je;f.forEach((H,j)=>{q.compose(new k(H[0],h/2,-H[1]),new Pt,new k(H[2],h*.995,H[2])),G.setMatrixAt(j,q)}),G.castShadow=!0,_.add(G),T("berkas",G);let U=xa(64,(H,j)=>{let X=H.createRadialGradient(32,32,2,32,32,30);X.addColorStop(0,"rgba(255,255,255,1)"),X.addColorStop(.55,"rgba(255,255,255,0.9)"),X.addColorStop(1,"rgba(255,255,255,0)"),H.fillStyle=X,H.fillRect(0,0,j,j)},null,!1),E=(H,j,X)=>{let W=new dt;W.setAttribute("position",new lt(new Float32Array(j*3),3));let ie=new Kn(W,new Yn({map:U,color:H,size:.14,transparent:!0,depthWrite:!1}));return ie.frustumCulled=!1,ie.userData.noAO=!0,_.add(ie),{pts:ie,n:j,up:X,b:Array.from({length:j},()=>f[Math.floor(d()*f.length)]),u:Array.from({length:j},()=>d())}},D=E(new fe(.5,1.6,2.8),70,!0),w=E(new fe(2.6,1.4,.3),45,!1),P={yaw:1.15,yaw0:1.15,pitch:.55,dist:14,user:!1,sun:.65,depth:0,depthT:0};for(let H in S)for(let j of[].concat(...S[H].mats))j.userData.base=j.color.clone();let Y={};for(let H in S)Y[H]=0;let O=new k(0,h*.45,0),B=new fe(.2,.22,.26),$=(H,j)=>H==="kulit"?1-kt(.12,.32,j):H==="korteks"?1-kt(.4,.58,j):H==="parenkim"||H==="dinding"?1-.85*kt(.75,.95,j):1;return{scene:t,camera:n,layerMeshes:M,state:P,waterFlow:D,sugarFlow:w,depthFor:H=>({kulit:0,korteks:.45,parenkim:.6,dinding:.5,buku:.5,rongga:.5,berkas:1})[H]??1,update(H,j,X,W){P.user||(P.yaw=P.yaw0+.3*Math.sin(j*.35));let ie=Math.cos(P.pitch),me=Math.sin(P.pitch);n.position.set(O.x+Math.sin(P.yaw)*ie*P.dist,O.y+me*P.dist,O.z+Math.cos(P.yaw)*ie*P.dist),n.lookAt(O),P.depth+=(P.depthT-P.depth)*Math.min(1,H*6);let he=P.depth;for(let De in S){let Ce=$(De,he),Ge=[].concat(...S[De].mats),be=X&&X!==De&&De!=="berkas"&&X!=="rongga"?.5:0;Y[De]+=(be-Y[De])*Math.min(1,H*8);let te=X===De?.14:W===De?.07:0;for(let V of Ge)De!=="rongga"&&(V.opacity=Ce,V.depthWrite=Ce>.98),V.userData.base&&V.color.copy(V.userData.base).lerp(B,Y[De]*.6),V.emissive&&V.userData.base&&V.emissive.copy(V.userData.base).multiplyScalar(te);for(let V of S[De].meshes)V.visible=Ce>.02}let Re=.05+.3*P.sun;for(let De of[D,w]){let Ce=De.pts.geometry.attributes.position;for(let Ge=0;Ge<De.n;Ge++){De.u[Ge]=(De.u[Ge]+Re*(De.up?1:.6)*H)%1;let be=De.up?De.u[Ge]*h:(1-De.u[Ge])*h,te=De.b[Ge];Ce.setXYZ(Ge,te[0],be,-te[1])}Ce.needsUpdate=!0}}}}function Fg(){let i=null,e=null,t=null,n=!1,s=null,a=null,r=null,o=null,l=null,c=null,u=!0,h=.8,d=3,f=0,p=6,x=0;function g(){if(i){i.state==="suspended"&&i.resume();return}let E=window.AudioContext||window.webkitAudioContext;if(!E)return;i=new E,e=i.createGain(),e.gain.value=u?h:0,t=i.createBiquadFilter(),t.type="lowpass",t.frequency.value=2e4,t.Q.value=.7,e.connect(t),t.connect(i.destination);let D=i.sampleRate*3;c=i.createBuffer(1,D,i.sampleRate);let w=c.getChannelData(0),P=0,Y=0,O=0;for(let be=0;be<D;be++){let te=Math.random()*2-1;P=.99765*P+te*.099,Y=.963*Y+te*.2965,O=.57*O+te*1.0526,w[be]=(P+Y+O+te*.1848)*.2}let B=(be,te,V)=>{let ae=i.createBufferSource();ae.buffer=c,ae.loop=!0,ae.loopStart=Math.random()*2;let Ae=i.createBiquadFilter();Ae.type=be,Ae.frequency.value=te,Ae.Q.value=V;let Me=i.createGain();return Me.gain.value=0,ae.connect(Ae),Ae.connect(Me),Me.connect(e),ae.start(),{g:Me,fl:Ae}},$=B("bandpass",380,.5);s=$.g,a=$.fl,r=B("highpass",2500,.4).g;let j=i.createOscillator();j.type="sine",j.frequency.value=4300;let X=i.createGain();X.gain.value=0;let W=i.createOscillator();W.frequency.value=16;let ie=i.createGain();ie.gain.value=.5;let me=i.createGain();me.gain.value=.5,o=i.createGain(),o.gain.value=0,W.connect(ie),ie.connect(X.gain),j.connect(X),X.connect(o),o.connect(e),j.start(),W.start();let he=i.createBufferSource();he.buffer=c,he.loop=!0;let Re=i.createBiquadFilter();Re.type="lowpass",Re.frequency.value=190,Re.Q.value=.8;let De=i.createGain();De.gain.value=.55;let Ce=i.createOscillator();Ce.frequency.value=25;let Ge=i.createGain();Ge.gain.value=.45,Ce.connect(Ge),Ge.connect(De.gain),l=i.createGain(),l.gain.value=0,he.connect(Re),Re.connect(De),De.connect(l),l.connect(e),he.start(),Ce.start()}function m(E){if(i.createStereoPanner){let D=i.createStereoPanner();return D.pan.value=Math.max(-1,Math.min(1,E)),D}return i.createGain()}function y(E,D,w,P,Y,O){let B=i.createOscillator(),$=i.createGain(),H=m(O);B.type="sine",B.frequency.setValueAtTime(D,E),B.frequency.exponentialRampToValueAtTime(w,E+P),$.gain.setValueAtTime(1e-4,E),$.gain.exponentialRampToValueAtTime(Y,E+P*.2),$.gain.exponentialRampToValueAtTime(1e-4,E+P),B.connect($),$.connect(H),H.connect(e),B.start(E),B.stop(E+P+.02)}function _(E){let D=i.currentTime+.02,w=Math.random()*2-1,P=Math.floor(Math.random()*3),Y=2300+Math.random()*1800;if(P===0){let O=2+Math.floor(Math.random()*4);for(let B=0;B<O;B++)y(D+B*.13,Y*(1+Math.random()*.1),Y*1.5,.09,E,w)}else if(P===1)for(let O=0;O<3;O++)y(D+O*.22,Y*.8,Y*1.4,.16,E,w),y(D+O*.22+.1,Y*1.5,Y*1,.1,E*.8,w);else y(D,Y,Y*1.8,.28,E,w),y(D+.3,Y*1.7,Y*.9,.22,E*.9,w)}function M(E,D){if(!i||!u)return;let w=i.currentTime+.02,P=.75+Math.random()*.25,Y=420+Math.random()*120,O=i.createOscillator();O.type="sawtooth",O.frequency.setValueAtTime(Y,w),O.frequency.linearRampToValueAtTime(Y*1.65,w+P*.35),O.frequency.linearRampToValueAtTime(Y*1.05,w+P);let B=i.createBiquadFilter(),$=i.createBiquadFilter();B.type=$.type="bandpass",B.Q.value=$.Q.value=5,B.frequency.setValueAtTime(700,w),B.frequency.linearRampToValueAtTime(1100,w+P*.4),B.frequency.linearRampToValueAtTime(800,w+P),$.frequency.setValueAtTime(1900,w),$.frequency.linearRampToValueAtTime(2600,w+P*.4),$.frequency.linearRampToValueAtTime(2e3,w+P);let H=i.createGain(),j=m(D);H.gain.setValueAtTime(1e-4,w),H.gain.exponentialRampToValueAtTime(E,w+.09),H.gain.setValueAtTime(E,w+P*.55),H.gain.exponentialRampToValueAtTime(1e-4,w+P);let X=i.createOscillator();X.frequency.value=6;let W=i.createGain();W.gain.value=8,X.connect(W),W.connect(O.frequency),X.start(w),X.stop(w+P+.05),O.connect(B),O.connect($);let ie=i.createGain();ie.gain.value=.55,B.connect(ie),$.connect(ie),ie.connect(H),H.connect(j),j.connect(e),O.start(w),O.stop(w+P+.05)}function S(E,D,w,P,Y,O="bandpass",B=0){let $=i.createBufferSource();$.buffer=c;let H=i.createBiquadFilter();H.type=O,H.frequency.value=D,H.Q.value=w;let j=i.createGain(),X=m(B);j.gain.setValueAtTime(1e-4,E),j.gain.exponentialRampToValueAtTime(Y,E+.012),j.gain.exponentialRampToValueAtTime(1e-4,E+P),$.connect(H),H.connect(j),j.connect(X),X.connect(e),$.start(E,Math.random()*2),$.stop(E+P+.05)}function T(E,D=1){if(!i||!u)return;let w=i.currentTime+.01;if(E>=2){S(w,900,.6,.9,.5*D),S(w+.03,2600,.8,.6,.25*D,"highpass");let P=i.createOscillator(),Y=i.createGain();P.frequency.setValueAtTime(140,w),P.frequency.exponentialRampToValueAtTime(45,w+.35),Y.gain.setValueAtTime(1e-4,w),Y.gain.exponentialRampToValueAtTime(.35*D,w+.02),Y.gain.exponentialRampToValueAtTime(1e-4,w+.4),P.connect(Y),Y.connect(e),P.start(w),P.stop(w+.45);for(let O=0;O<7;O++)b(w+.25+Math.random()*.9,.05*D)}else E>=1?(S(w,1400,.9,.35,.22*D),S(w+.02,3200,1,.2,.08*D,"highpass"),b(w+.15,.03*D)):S(w,1100+Math.random()*600,1.2,.18,.12*D)}function b(E,D){let w=i.createOscillator(),P=i.createGain(),Y=900+Math.random()*1500;w.type="sine",w.frequency.setValueAtTime(Y,E),w.frequency.exponentialRampToValueAtTime(Y*2.2,E+.05),P.gain.setValueAtTime(1e-4,E),P.gain.exponentialRampToValueAtTime(D,E+.005),P.gain.exponentialRampToValueAtTime(1e-4,E+.07),w.connect(P),P.connect(e),w.start(E),w.stop(E+.09)}function v(E=6,D=.05){if(!i||!u)return;let w=i.currentTime;for(let P=0;P<E;P++){let Y=w+P*(.04+Math.random()*.08),O=250+Math.random()*500,B=i.createOscillator(),$=i.createGain();B.frequency.setValueAtTime(O,Y),B.frequency.exponentialRampToValueAtTime(O*2.5,Y+.06),$.gain.setValueAtTime(1e-4,Y),$.gain.exponentialRampToValueAtTime(D,Y+.01),$.gain.exponentialRampToValueAtTime(1e-4,Y+.08),B.connect($),$.connect(e),B.start(Y),B.stop(Y+.1)}}function F(E){!i||E===n||(n=E,t.frequency.setTargetAtTime(E?520:2e4,i.currentTime,.12))}function L(E,D){if(!i||!u)return;let w=i.currentTime+.02,P=1.3+Math.random()*.5,Y=95+Math.random()*25,O=i.createOscillator();O.type="sawtooth",O.frequency.setValueAtTime(Y*.85,w),O.frequency.linearRampToValueAtTime(Y*1.15,w+P*.3),O.frequency.linearRampToValueAtTime(Y*.9,w+P);let B=i.createBiquadFilter(),$=i.createBiquadFilter();B.type=$.type="bandpass",B.Q.value=4,$.Q.value=5,B.frequency.setValueAtTime(320,w),B.frequency.linearRampToValueAtTime(520,w+P*.4),B.frequency.linearRampToValueAtTime(350,w+P),$.frequency.setValueAtTime(800,w),$.frequency.linearRampToValueAtTime(1e3,w+P*.4);let H=i.createGain(),j=m(D);H.gain.setValueAtTime(1e-4,w),H.gain.exponentialRampToValueAtTime(E*1.4,w+.25),H.gain.setValueAtTime(E*1.4,w+P*.7),H.gain.exponentialRampToValueAtTime(1e-4,w+P);let X=i.createGain();X.gain.value=.9,O.connect(B),O.connect($),B.connect(X),$.connect(X),X.connect(H),H.connect(j),j.connect(e),O.start(w),O.stop(w+P+.05)}function G(E,D){if(!i||!u)return;let w=i.currentTime+.02,P=.7+Math.random()*.3,Y=330+Math.random()*80,O=i.createOscillator();O.type="sawtooth",O.frequency.setValueAtTime(Y,w),O.frequency.linearRampToValueAtTime(Y*1.1,w+P*.3),O.frequency.linearRampToValueAtTime(Y*.92,w+P);let B=i.createOscillator();B.frequency.value=13;let $=i.createGain();$.gain.value=.45;let H=i.createGain();H.gain.value=.55,B.connect($),$.connect(H.gain);let j=i.createBiquadFilter(),X=i.createBiquadFilter();j.type=X.type="bandpass",j.Q.value=5,X.Q.value=6,j.frequency.value=650,X.frequency.value=1900,j.frequency.setValueAtTime(450,w),j.frequency.linearRampToValueAtTime(700,w+.12);let W=i.createGain(),ie=m(D);W.gain.setValueAtTime(1e-4,w),W.gain.exponentialRampToValueAtTime(E,w+.06),W.gain.setValueAtTime(E,w+P*.6),W.gain.exponentialRampToValueAtTime(1e-4,w+P),O.connect(H),H.connect(j),H.connect(X);let me=i.createGain();me.gain.value=.7,j.connect(me),X.connect(me),me.connect(W),W.connect(ie),ie.connect(e),O.start(w),O.stop(w+P+.05),B.start(w),B.stop(w+P+.05)}function q(E,D,w){E==="sapi"?L(D,w):E==="kambing"?G(D*.9,w):M(D*.8,w)}function U(E,D,w=.6){E.gain.setTargetAtTime(D,i.currentTime,w)}return{init:g,get enabled(){return u},setEnabled(E){u=E,i&&e.gain.setTargetAtTime(u?h:0,i.currentTime,.1)},meow:M,call:q,splash:T,bubbles:v,setUnder:F,update(E,D){if(!i||!u)return;x+=E;let w=(D.world?1:.25)*(D.under?.25:1),P=.5+.5*Math.sin(x*.23)*Math.sin(x*.071+1.3);U(s,(.05+.1*P)*w),a.frequency.setTargetAtTime(260+420*P,i.currentTime,.8),U(r,(.004+.02*P*P)*w*(.4+.6*D.day)),U(o,.012*Math.max(0,1-D.day*2.2)*w),U(l,D.catSub?.22:0,.4),D.world&&!D.under&&D.day>.35&&(d-=E,d<=0&&(_(.035+Math.random()*.03),f>0?(f--,d=.4+Math.random()*.9):(f=Math.random()<.3?2+Math.floor(Math.random()*3):0,d=3+Math.random()*7)))}}}function J_(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.5,"rgba(255,255,255,0.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,nt),e.fill(),new _n(i)}function kg(i,e,t,n,s){let a=new Float32Array(e*3).fill(-999),r=new dt;r.setAttribute("position",new lt(a,3));let o=new Kn(r,new Yn({map:s,color:t,size:n,sizeAttenuation:!0,transparent:!0,depthWrite:!1,opacity:.85}));return o.frustumCulled=!1,o.userData.noAO=!0,i.add(o),{pts:o,pos:a,vel:new Float32Array(e*3),life:new Float32Array(e),N:e,next:0}}function Dg(i,e){let t=J_(),n=kg(i,180,new fe(.9,.97,1),.075,t),s=kg(i,70,new fe(.8,.95,1),.028,t),a=r=>{let o=r.next;return r.next=(r.next+1)%r.N,o};return{splash(r,o,l,c){for(let u=0;u<l;u++){let h=a(n),d=Math.random()*nt,f=Math.random()*.18,p=(.4+Math.random())*c;n.pos[h*3]=r+Math.cos(d)*f,n.pos[h*3+1]=e+.02,n.pos[h*3+2]=o+Math.sin(d)*f;let x=(.4+Math.random()*1.1)*c;n.vel[h*3]=Math.cos(d)*x,n.vel[h*3+1]=1.4+p*2.4,n.vel[h*3+2]=Math.sin(d)*x,n.life[h]=1.6}},bubbles(r,o,l,c){for(let u=0;u<c;u++){let h=a(s);s.pos[h*3]=r+(Math.random()-.5)*.3,s.pos[h*3+1]=o,s.pos[h*3+2]=l+(Math.random()-.5)*.3,s.vel[h*3]=Math.random()*nt,s.vel[h*3+1]=.5+Math.random()*.5,s.life[h]=4}},update(r,o){for(let l=0;l<n.N;l++)n.life[l]<=0||(n.life[l]-=r,n.vel[l*3+1]-=9.8*r,n.pos[l*3]+=n.vel[l*3]*r,n.pos[l*3+1]+=n.vel[l*3+1]*r,n.pos[l*3+2]+=n.vel[l*3+2]*r,(n.pos[l*3+1]<e&&n.vel[l*3+1]<0||n.life[l]<=0)&&(n.life[l]=0,n.pos[l*3+1]=-999));for(let l=0;l<s.N;l++){if(s.life[l]<=0)continue;s.life[l]-=r;let c=s.vel[l*3];s.pos[l*3]+=Math.sin(o*6+c)*.15*r,s.pos[l*3+1]+=s.vel[l*3+1]*r,s.pos[l*3+2]+=Math.cos(o*5+c)*.15*r,(s.pos[l*3+1]>e-.02||s.life[l]<=0)&&(s.life[l]=0,s.pos[l*3+1]=-999)}n.pts.geometry.attributes.position.needsUpdate=!0,s.pts.geometry.attributes.position.needsUpdate=!0}}}(async function(){"use strict";let i="hutan-ilmu-v1",e="hutan-ilmu-q",t=uu.layers,n=uu.specimens,s=uu.quiz,a=[{data:Ym,spec:Km},{data:_f("sapi"),spec:rg},{data:_f("kambing"),spec:pg}],r=gg.map(function(I){let C=bg(I);return{data:C,spec:wf(C.P),fish:!0}}),o=["kelapa","bambu"].map(function(I){return{data:Tg(I),mono:!0,buildD:function(se){return Ig(se,{type:I})}}}),l=a.concat(r,o),c=n.concat(l.map(function(I){return I.data.specimen}));l.forEach(function(I,C){I.hi=n.length+C});let u={x:13,z:22.5,r:8.5},h=t,d="tree",f=function(){return d!=="tree"},p=function(I){return l.find(function(C){return C.data.id===I})},x=function(){return f()&&!!p(d).fish},g=function(){return r.filter(function(I){return b.trees[I.data.id]}).length},m=function(I){return d==="tree"?I:(d==="kucing"?"cat:":d+":")+I},y=function(){return a.filter(function(I){return b.trees[I.data.id]}).length},_=function(){return n.filter(function(I){return b.trees[I.id]}).length},M=function(){return Object.keys(b.found).filter(function(I){return I.indexOf(":")<0}).length},S="ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer:coarse)").matches,T=/[?&]debug/.test(location.search),b={xp:0,found:{},trees:{},qdone:{},mission:!1};try{let I=localStorage.getItem(i);if(I){let C=JSON.parse(I);C&&typeof C=="object"&&(b.xp=C.xp|0,b.found=C.found||{},b.trees=C.trees||{},b.qdone=C.qdone||{},b.mission=!!C.mission)}}catch{}function v(){try{localStorage.setItem(i,JSON.stringify(b))}catch{}}let F=0;function L(I){let C=Oe("#toast");C.textContent=I,C.classList.add("on"),clearTimeout(F),F=setTimeout(function(){C.classList.remove("on")},2400)}function G(){let I=M(),C=_();if(!b.mission)return"Temukan 6 lapisan batang: "+I+"/6";if(C<n.length)return"Bedah semua pohon bertanda: "+C+"/"+n.length;if(y()<a.length)return"Bedah hewan: kucing, sapi, kambing "+y()+"/"+a.length;let se=o.filter(function(ue){return b.trees[ue.data.id]}).length;return se<o.length?"Bedah tumbuhan monokotil (kelapa, bambu) dan bandingkan dengan jati: "+se+"/"+o.length:g()<r.length?"Selami danau dan bedah 5 jenis ikan: "+g()+"/"+r.length:"Semua misi selesai. Coba kuis untuk XP tambahan."}function q(){let I=Math.floor(b.xp/100)+1;Oe("#lvl").textContent="Level "+I,Oe("#xpTxt").textContent=b.xp%100+" / 100 XP",Oe("#xpBar").style.width=b.xp%100+"%",Oe("#mission").textContent=G()}function U(I,C){b.xp+=I,L("+"+I+" XP "+C),q(),v()}function E(){!b.mission&&M()>=t.length&&(b.mission=!0,U(60,"misi selesai"),q())}let D=null;try{D=localStorage.getItem(e)}catch{}D!=="tinggi"&&D!=="hemat"&&(D=S?"hemat":"tinggi");let w=(location.search.match(/[?&]q=(tinggi|hemat)/)||[])[1];T&&w&&(D=w);let P;try{P=new ou({canvas:Oe("#view"),antialias:!1,powerPreference:"high-performance"})}catch{Oe("#nogl").style.display="flex",Oe("#loading").style.display="none";return}let Y=P.domElement;P.toneMapping=la,P.toneMappingExposure=1,P.shadowMap.enabled=!0,P.shadowMap.type=ra;let O=function(){let I=window.devicePixelRatio||1;return D==="tinggi"?Math.min(I,2):Math.min(I,1.25)};function B(I,C){Oe("#loadBar").style.width=Math.round(I*100)+"%",C&&(Oe("#loadTxt").textContent=C)}let $=function(){return new Promise(function(I){setTimeout(I,0)})};W0(n.concat(o.map(function(I){return I.data.specimen})));let H=new Wn,j=new tn(66,1,.15,1200);j.rotation.order="YXZ";let X=om(H,P);Z0(H);let W=em(H),ie=Dg(H,sn),me=8,he=new Map;function Re(I,C,se){let ue=Math.floor(I/me)+","+Math.floor(C/me),Be=he.get(ue);Be||(Be=[],he.set(ue,Be)),Be.push({x:I,z:C,r:se})}function De(I){let C=Math.floor(I.x/me),se=Math.floor(I.z/me);for(let ue=-1;ue<=1;ue++)for(let Be=-1;Be<=1;Be++){let Qe=he.get(C+ue+","+(se+Be));if(Qe)for(let wt=0;wt<Qe.length;wt++){let Bt=Qe[wt],Lt=I.x-Bt.x,Ze=I.z-Bt.z,Rt=Math.hypot(Lt,Ze),It=Bt.r+.45;Rt<It&&Rt>1e-4&&(I.x=Bt.x+Lt/Rt*It,I.z=Bt.z+Ze/Rt*It)}}}let Ce=await qm({scene:H,heroes:n,clear:[u].concat(o.map(function(I){let C=I.data.specimen;return{x:C.x,z:C.z,r:5}}),[{x:-18,z:38,r:5}]),addObs:Re,quality:D,progress:function(I,C){B(.1+I*.6,C)}}),Ge=Ce.heroObjs,be=Ce.heroHits;a.forEach(function(I,C){let se=I.data.specimen;I.w=$m(H,{heightAt:hn,WATER:sn},I.spec,{x:se.x,z:se.z},404+C*31,I.data.id==="kucing"?null:u);let ue=new we(new Fs(I.data.id==="sapi"?.3:.16,0),new et({color:16765786,emissive:16754688,emissiveIntensity:2.2,roughness:.3}));ue.userData.noAO=!0,H.add(ue);let Be=I.data.id==="sapi"?1.6:I.data.id==="kambing"?.9:.55,Qe=new Ds(Be,Be+.1,48,1);Qe.rotateX(-Math.PI/2);let wt=new we(Qe,new on({color:new fe(2.2,1.7,.5),transparent:!0,opacity:.8,side:$t,depthWrite:!1}));wt.userData.noAO=!0,H.add(wt),I.w.hit.userData.hero=I.hi,be.push(I.w.hit),Ge.push({g:I.w.group,mk:ue,ring:wt,y:I.w.y}),I.callT=4+C*5});let te=_g(H,{heightAt:hn,WATER:sn},r.map(function(I){return Object.assign({P:I.data.P},I.data.world)}),zn);r.forEach(function(I,C){let se=new we(new Cn(.6,8,6),new on({visible:!1}));se.userData.hero=I.hi,H.add(se),be.push(se),I.hit=se,I.G=te.groups[C],Ge.push({g:new Ot,mk:new Ot,ring:new Ot,y:sn-1})}),o.forEach(function(I){let C=I.data.specimen,se=hn(C.x,C.z);I.data.id==="kelapa"?(If(H,C.x,se,C.z,7,9.5),Re(C.x,C.z,.35),[[-20,40,3,8],[-14,37,5,10],[-22,43,9,7.5]].forEach(function(Bt){If(H,Bt[0],hn(Bt[0],Bt[1]),Bt[1],Bt[2],Bt[3]),Re(Bt[0],Bt[1],.3)})):(wg(H,C.x,se,C.z,3),Re(C.x,C.z,1.1));let ue=new we(new Fs(.3,0),new et({color:16765786,emissive:16754688,emissiveIntensity:2.2,roughness:.3}));ue.position.set(C.x,0,C.z),ue.userData.noAO=!0,H.add(ue);let Be=new Ds(1.4,1.55,48,1);Be.rotateX(-Math.PI/2);let Qe=new we(Be,new on({color:new fe(2.2,1.7,.5),transparent:!0,opacity:.8,side:$t,depthWrite:!1}));Qe.position.set(C.x,se+.05,C.z),Qe.userData.noAO=!0,H.add(Qe);let wt=new we(new nn(1.2,1.2,6,8),new on({visible:!1}));wt.position.set(C.x,se+3,C.z),wt.userData.hero=I.hi,H.add(wt),be.push(wt),Ge.push({g:new Ot,mk:ue,ring:Qe,y:se})}),(function(){let C=Math.atan2(2-u.z,0-u.x),se=[],ue=[],Be=[];for(let Lt=0;Lt<28;Lt++){let Ze=Lt/28*Math.PI*2,Rt=u.x+Math.cos(Ze)*u.r,It=u.z+Math.sin(Ze)*u.r;Be.push({a:Ze,x:Rt,z:It,y:hn(Rt,It)})}let Qe=function(Lt,Ze){return Math.abs(Math.atan2(Math.sin(Lt-Ze),Math.cos(Lt-Ze)))};Be.forEach(function(Lt,Ze){let Rt=new nn(.07,.09,1.2,6);Rt.translate(Lt.x,Lt.y+.55,Lt.z),se.push(Rt),Re(Lt.x,Lt.z,.12);let It=Be[(Ze+1)%28],ot=(Lt.a+It.a)/2+(Ze===27?Math.PI:0);if(Qe(ot,C)<.18)return;let cn=Math.hypot(It.x-Lt.x,It.z-Lt.z);for(let Gn of[.45,.9]){let Jn=new bi(cn,.07,.05);Jn.rotateY(-Math.atan2(It.z-Lt.z,It.x-Lt.x)),Jn.translate((Lt.x+It.x)/2,(Lt.y+It.y)/2+Gn,(Lt.z+It.z)/2),ue.push(Jn)}});let wt=new et({color:new fe().setRGB(.36,.25,.16,gt),roughness:.9}),Bt=new we(it(se.concat(ue)),wt);Bt.castShadow=!0,Bt.receiveShadow=!0,H.add(Bt)})();let V={x:0,z:2,y:0,face:Math.PI,phase:0,jh:0,jv:0,swim:!1,ey:0,eyeS:0,wet:!1,under:!1,step:0,stroke:0,bub:0};V.y=hn(V.x,V.z);let ae={yaw:0,pitch:-.04,fov:66},Ae=1,Me=1;function tt(I){Ae=Ct(Ae*I,.3,1.15)}let Fe=Fg(),ft="hutan-ilmu-snd";try{localStorage.getItem(ft)==="0"&&Fe.setEnabled(!1)}catch{}function bt(){let I=Oe("#bSnd");I&&(I.querySelector("span").textContent="Suara: "+(Fe.enabled?"Nyala":"Mati"))}["pointerdown","keydown","touchstart"].forEach(function(I){window.addEventListener(I,function(){Fe.init()},{passive:!0})}),B(.72,"Menyiapkan bedah batang\u2026"),await $();let Mt=Vm(P,t),z=Mt,Ut=z.camera,ht=z.layerMeshes,Ft=z.waterFlow,Te=z.sugarFlow,Ue=z.state,Xe=null,Ke=null;B(.85,"Menyiapkan efek visual\u2026"),await $();let N=Yu(P,H,j),A=Yu(P,Mt.scene,Mt.camera,{aoRadius:.45,bloomStrength:.45}),K=.3,ge=0;function de(){let I=K*24%24,C=Math.floor(I),se=Math.floor((I-C)*60);Oe("#clockTxt").textContent=(C<10?"0":"")+C+":"+(se<10?"0":"")+se;let ue=X.day<.25;ue!==ve&&(ve=ue,Oe("#clock").classList.toggle("night",ue))}let ve=!1;function _e(I){D=I;try{localStorage.setItem(e,I)}catch{}N.setQuality(I),A.setQuality(I),l.forEach(function(se){se.fx&&se.fx.setQuality(I)}),X.setShadowSize(I==="tinggi"?2048:1024),X.envEvery=I==="tinggi"?2.5:5,Ce.setQuality(I);let C=Oe("#bQual");C&&(C.querySelector("span").textContent="Grafik: "+(I==="tinggi"?"Tinggi":"Hemat")),Le()}function re(I){if(d=I,I!=="tree"){let C=p(I);C.D||(C.D=C.buildD?C.buildD(P):Qm(P,C.spec),C.fx=Yu(P,C.D.scene,C.D.camera,{aoRadius:.4,bloomStrength:.35}),C.fx.setQuality(D),C.fx.setSize(window.innerWidth,window.innerHeight,O())),z=C.D,h=C.data.layers}else z=Mt,h=t;Ut=z.camera,ht=z.layerMeshes,Ft=z.waterFlow,Te=z.sugarFlow,Ue=z.state,document.body.classList.toggle("catmode",I!=="tree"),document.body.classList.toggle("monomode",I!=="tree"&&!!p(I).mono),document.body.classList.toggle("fishmode",I!=="tree"&&!!p(I).fish)}let le=function(){return d==="tree"?A:p(d).fx},xe="world",Q=0;function ce(){let I=Ue.sun;if(f()&&p(d).mono){Oe("#sunCap").textContent=I>.6?"Cahaya kuat: stomata di daun terbuka lebar, penguapan (transpirasi) tinggi, sehingga air naik cepat lewat xilem di berkas pembuluh. Gula hasil fotosintesis turun lewat floem.":I>.25?"Cahaya sedang: air naik lebih pelan.":"Gelap: stomata menutup, aliran air melambat.";return}if(x()){Oe("#sunCap").textContent=I>.6?"Ikan aktif: tutup insang bergerak cepat supaya lebih banyak air melewati insang, dan jantung berdetak lebih cepat.":I>.3?"Aktivitas sedang: tutup insang membuka-menutup dengan teratur.":"Ikan beristirahat: gerakan tutup insang dan detak jantung melambat.";return}if(f()){let C=z.vitals(I);Oe("#sunCap").textContent="Perkiraan: jantung "+C.bpm+" detak per menit, napas "+C.rr+" kali per menit. Saat aktif, otot butuh lebih banyak oksigen sehingga jantung dan paru bekerja lebih cepat."+(d!=="kucing"?" Rumen ikut berkontraksi lebih sering.":"")+" Angka ini kisaran umum, bukan patokan diagnosis.";return}Oe("#sunCap").textContent=I>.66?"Matahari terik: daun menguapkan banyak air (transpirasi), sehingga air tertarik naik cepat. Fotosintesis tinggi, banyak gula dikirim lewat floem.":I>.33?"Cahaya sedang: transpirasi dan fotosintesis berjalan sedang.":"Cahaya rendah atau malam: stomata cenderung menutup, aliran air melambat, dan gula yang dibuat berkurang."}let oe='<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>';function Ie(){let I=Oe("#chips");I.innerHTML=h.map(function(C){return'<button type="button" role="listitem" class="chip'+(Xe===C.id?" sel":"")+'" data-id="'+C.id+'"><span class="sw" style="background:'+C.ui+'"></span>'+C.name+(b.found[m(C.id)]?oe:"")+"</button>"}).join("")}function Se(){let I=Oe("#info"),C=c[Q];if(!Xe&&f()&&p(d).mono){I.innerHTML="<h2>Penampang batang "+C.short+'</h2><p class="sci">'+C.sci+' \xB7 monokotil</p><p class="hint">'+C.hint+"</p><h3>Tentang "+C.short+"</h3><p>"+C.fact+"</p>";return}if(!Xe&&f()){I.innerHTML="<h2>Anatomi "+C.short+'</h2><p class="sci">'+C.sci+'</p><p class="hint">'+C.hint+"</p><h3>Tentang "+C.short+"</h3><p>"+C.fact+"</p>";return}if(!Xe){I.innerHTML='<h2>Penampang batang</h2><p class="sci">'+C.name+'</p><p class="hint">Ketuk lapisan pada batang, atau pilih dari daftar, untuk mempelajarinya. Titik biru adalah air yang naik lewat xilem. Titik kuning adalah gula yang turun lewat floem.</p><h3>Tentang pohon ini</h3><p>'+C.fact+"</p>";return}let se=h.find(function(ue){return ue.id===Xe});I.innerHTML='<h2 style="color:'+se.ui+'">'+se.name+'</h2><p class="sci">'+se.sci+"</p><h3>Apa ini</h3><p>"+se.what+"</p><h3>Fungsi</h3><p>"+se.fn+"</p><h3>Tahukah kamu</h3><p>"+se.fact+"</p>"+(C.notes&&C.notes[se.id]?"<h3>Pada "+C.short+"</h3><p>"+C.notes[se.id]+"</p>":"")}function Pe(I){if(Xe=I,I&&!b.found[m(I)]&&(b.found[m(I)]=1,U(20,f()?"bagian tubuh baru":"lapisan baru"),E()),f()&&I){let se=z.depthFor?z.depthFor(I):{kulit:0,otot:.32,rangka:.68}[I];Ue.depthT=se!==void 0?se:1;let ue=Oe("#depth");ue&&(ue.value=Math.round(Ue.depthT*100))}Ie(),Se();let C=Oe("#panel");C&&(C.scrollTop=0)}function ze(I){let C=Oe("#fade");C.style.opacity=1,setTimeout(function(){I(),C.style.opacity=0},window.matchMedia("(prefers-reduced-motion:reduce)").matches?0:380)}function pt(I){ze(function(){Q=I;let C=c[I];if(re(C.kind?C.id:"tree"),f()&&C.kind==="animal"&&Fe.call(C.id,.2,0),d==="tree"&&z.setSpecies(Object.assign({id:C.id},C.wood)),xe="dissect",document.body.classList.add("dissect"),Oe("#dName").textContent=C.name,Oe("#dSci").textContent=(f()&&C.kind!=="mono"?"Anatomi dan fisiologi \xB7 ":"Penampang batang \xB7 ")+C.sci,Ue.yaw=Ue.yaw0||0,Ue.user=!1,C.kind==="mono"){Ue.pitch=.55,Ue.dist=window.innerWidth<760?24:14,Ue.depthT=0,Ue.depth=0,Ue.sun=.65;let se=Oe("#sun"),ue=Oe("#depth");se&&(se.value=65),ue&&(ue.value=0)}else if(x()){Ue.pitch=.25,Ue.dist=window.innerWidth<760?35:13,Ue.depthT=0,Ue.depth=0,Ue.sun=.3,Ue.gas=.25,Ue.vy=0,Ue.fy=0,Ue.hold=0,Ue.counter=!0,Ue.buoyOk=!!b.found[m("buoy")];let se=Oe("#sun"),ue=Oe("#depth"),Be=Oe("#gas"),Qe=Oe("#counter");se&&(se.value=30),ue&&(ue.value=0),Be&&(Be.value=25),Qe&&(Qe.checked=!0)}else if(f()){Ue.pitch=.3,Ue.dist=window.innerWidth<760?C.id==="sapi"?46:38:C.id==="sapi"?21:16,Ue.depthT=0,Ue.depth=0,Ue.sun=.2;let se=Oe("#sun"),ue=Oe("#depth");se&&(se.value=20),ue&&(ue.value=0)}else Ue.pitch=.5,Ue.dist=window.innerWidth<760?19:14;b.trees[C.id]||(b.trees[C.id]=1,U(10,f()?C.short+" dibedah":"pohon baru")),Xe=null,Ie(),Se(),ce(),q(),Le(),en={},In.x=0,In.y=0})}function ye(){ze(function(){xe="world",re("tree"),document.body.classList.remove("dissect"),Ma(),q(),Le()})}function We(I){Oe("#sheet").innerHTML=I,Oe("#modal").classList.add("on"),en={},In.x=0,In.y=0}function mt(){Oe("#modal").classList.remove("on")}function Ne(){return Oe("#modal").classList.contains("on")}function Dt(){let I=M(),C=_(),se=t.map(function(Be){return b.found[Be.id]?'<div class="jc"><b><i style="background:'+Be.ui+'"></i>'+Be.name+"</b><em>"+Be.sci+"</em><p>"+Be.short+"</p></div>":'<div class="jc lock"><b><i style="background:#3b4f47"></i>???</b><em>Belum ditemukan</em><p>Bedah sebuah pohon untuk menemukannya.</p></div>'}).join(""),ue=n.map(function(Be){return b.trees[Be.id]?'<div class="jc"><b>'+Be.name+"</b><em>"+Be.sci+"</em><p>"+Be.fact+"</p></div>":'<div class="jc lock"><b>???</b><em>Belum dibedah</em><p>Cari pohon bertanda di hutan.</p></div>'}).join("");We('<div class="head"><div><h2>Jurnal</h2><p style="color:var(--muted);font-size:14px">'+I+"/"+t.length+" lapisan batang, "+C+"/"+n.length+' pohon</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><h3>Lapisan batang</h3><div class="grid">'+se+'</div><h3>Pohon</h3><div class="grid">'+ue+"</div>")}let xt=null;function Si(I,C){for(let se=I.length-1;se>0;se--){let ue=Math.floor(C()*(se+1)),Be=I[se];I[se]=I[ue],I[ue]=Be}return I}function $s(){let I=Math.random,C=f()&&xe==="dissect"?p(d).data.quiz.slice():s.filter(function(ue){return!ue.sp||b.trees[ue.sp]}).concat([].concat.apply([],l.map(function(ue){return b.trees[ue.data.id]&&xe==="world"?ue.data.quiz:[]}))),se=Si(C.slice(),I).slice(0,6);xt={i:0,score:0,gain:0,set:se,order:se.map(function(ue,Be){return Be}),done:!1},ya()}function ya(){let I=xt.set[xt.order[xt.i]];(!xt.optOrder||xt.optOrder.q!==I.id)&&(xt.optOrder={q:I.id,o:Si(I.o.map(function(se,ue){return ue}),Math.random)});let C=xt.optOrder.o.map(function(se,ue){return'<button type="button" class="opt" data-o="'+se+'">'+I.o[se]+"</button>"}).join("");We('<div class="head"><div><p style="color:var(--muted);font-size:13px;font-weight:800">Soal '+(xt.i+1)+" dari "+xt.set.length+'</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">'+I.q+'</p><div class="opts" id="opts">'+C+'</div><div id="qfb"></div>')}function Wu(I){let C=xt.set[xt.order[xt.i]],se=I===C.a;document.querySelectorAll("#opts .opt").forEach(function(Be){let Qe=+Be.dataset.o;Be.disabled=!0,Qe===C.a?Be.classList.add("ok"):Qe===I&&Be.classList.add("bad")}),se&&(xt.score++,b.qdone[C.id]||(b.qdone[C.id]=1,xt.gain+=15,b.xp+=15,q(),v()));let ue=xt.i>=xt.set.length-1;Oe("#qfb").innerHTML='<div class="exp"><b>'+(se?"Benar. ":"Belum tepat. ")+"</b>"+C.e+'</div><div class="actions"><button type="button" class="btn primary" id="qnext">'+(ue?"Lihat hasil":"Lanjut")+"</button></div>"}function ol(){if(xt.i>=xt.set.length-1){We('<div class="head"><h2>Hasil kuis</h2><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">Skor '+xt.score+" dari "+xt.set.length+'</p><p style="color:var(--muted)">'+(xt.gain?"Kamu mendapat tambahan "+xt.gain+" XP dari soal yang baru benar pertama kali.":"XP hanya diberikan saat soal pertama kali dijawab benar.")+'</p><div class="actions"><button type="button" class="btn primary" id="qagain">Ulangi</button><button type="button" class="btn" data-close>Tutup</button></div>');return}xt.i++,ya()}Oe("#modal").addEventListener("click",function(I){let C=I.target;if(C.id==="modal"||C.closest("[data-close]")){mt();return}let se=C.closest(".opt");if(se&&!se.disabled){Wu(+se.dataset.o);return}if(C.closest("#qnext")){ol();return}C.closest("#qagain")&&$s()}),Oe("#bJournal").addEventListener("click",Dt),Oe("#bQuizW").addEventListener("click",$s),Oe("#dQuiz").addEventListener("click",$s),Oe("#bBack").addEventListener("click",ye),Oe("#chips").addEventListener("click",function(I){let C=I.target.closest(".chip");C&&Pe(Xe===C.dataset.id?null:C.dataset.id)}),Oe("#tWater").addEventListener("change",function(I){Ft.pts.visible=I.target.checked}),Oe("#tSugar").addEventListener("change",function(I){Te.pts.visible=I.target.checked}),Oe("#sun").addEventListener("input",function(I){Ue.sun=+I.target.value/100,ce()}),Oe("#depth").addEventListener("input",function(I){Ue.depthT=+I.target.value/100,Ue.user=!0}),Oe("#gas").addEventListener("input",function(I){Ue.gas=+I.target.value/100}),Oe("#counter").addEventListener("change",function(I){Ue.counter=I.target.checked});function Ma(){Oe("#tip").style.display="none"}Oe("#tipX").addEventListener("click",Ma),setTimeout(Ma,2e4);let en={},ji=!1,va=!1,In={x:0,y:0};S&&document.body.classList.add("touch"),window.addEventListener("keydown",function(I){if(I.target&&I.target.tagName==="INPUT"&&I.target.type!=="checkbox"&&I.target.type!=="range")return;let C=I.key.toLowerCase();if(C==="escape"){Ne()?mt():xe==="dissect"&&ye();return}Ne()||xe==="world"&&(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"," ","c","control"].indexOf(C)>=0&&(en[C]=!0,I.preventDefault()),C==="e"&&Rr(),(C==="+"||C==="=")&&tt(.8),(C==="-"||C==="_")&&tt(1.25),C===" "&&(ji=!0,I.preventDefault()),C==="j"&&Dt())}),window.addEventListener("keyup",function(I){delete en[I.key.toLowerCase()]}),window.addEventListener("blur",function(){en={}}),(function(){let I=Oe("#joy"),C=Oe("#joyK"),se=null;function ue(Qe){let wt=I.getBoundingClientRect(),Bt=wt.left+wt.width/2,Lt=wt.top+wt.height/2,Ze=Qe.clientX-Bt,Rt=Qe.clientY-Lt,It=Math.hypot(Ze,Rt),ot=wt.width/2-8;It>ot&&(Ze=Ze/It*ot,Rt=Rt/It*ot),C.style.transform="translate("+Ze+"px,"+Rt+"px)",In.x=Ze/ot,In.y=-Rt/ot}I.addEventListener("pointerdown",function(Qe){se=Qe.pointerId,I.setPointerCapture(se),ue(Qe),Qe.preventDefault()}),I.addEventListener("pointermove",function(Qe){Qe.pointerId===se&&ue(Qe)});function Be(Qe){Qe.pointerId===se&&(se=null,In.x=0,In.y=0,C.style.transform="")}I.addEventListener("pointerup",Be),I.addEventListener("pointercancel",Be)})();let Fn=new Map,Qs=0,Sr=0,Di=0,Tr=new So,Er=new pe;function Ar(I,C,se){let ue=Y.getBoundingClientRect();Er.set((I-ue.left)/ue.width*2-1,-((C-ue.top)/ue.height)*2+1),Tr.setFromCamera(Er,se)}function ll(I,C){Ar(I,C,Ut);let se=Tr.intersectObjects(ht.filter(function(ue){return ue.visible}),!1)[0];return se?se.object.userData.layer:null}function Ku(I,C){Ar(I,C,j);let se=Tr.intersectObjects(be,!1)[0];return se?se.object.userData.hero:-1}function cl(){let I=-1,C=1e9;return c.forEach(function(se,ue){if(se.needSwim&&!(V.swim||V.under))return;let Be=Math.hypot(V.x-se.x,V.z-se.z)+(se.reach?8-se.reach:0);Be<C&&(C=Be,I=ue)}),{i:I,d:C}}function Rr(){let I=cl();I.d<8?pt(I.i):L("Dekati pohon bertanda dulu ("+Math.round(I.d-7)+" m lagi)")}Y.addEventListener("pointerdown",function(I){if(!Ne()){if(Y.setPointerCapture(I.pointerId),Fn.set(I.pointerId,{x:I.clientX,y:I.clientY}),Fn.size===1&&(Qs=0,Sr=performance.now()),Fn.size===2){let C=Array.from(Fn.values());Di=Math.hypot(C[0].x-C[1].x,C[0].y-C[1].y)}Y.classList.add("dragging")}}),Y.addEventListener("pointermove",function(I){let C=Fn.get(I.pointerId);if(!C){if(xe==="dissect"&&I.pointerType==="mouse"){let Be=ll(I.clientX,I.clientY);Be!==Ke&&(Ke=Be,Y.style.cursor=Be?"pointer":"grab");let Qe=Oe("#tipL");Be?(Qe.style.display="block",Qe.textContent=h.find(function(wt){return wt.id===Be}).name,Qe.style.left=I.clientX+14+"px",Qe.style.top=I.clientY+14+"px"):Qe.style.display="none"}return}let se=I.clientX-C.x,ue=I.clientY-C.y;if(C.x=I.clientX,C.y=I.clientY,Fn.size===1)if(Qs+=Math.abs(se)+Math.abs(ue),xe==="world"){let Be=Math.max(.45,Me);ae.yaw-=se*.0045*Be,ae.pitch=Ct(ae.pitch-ue*.004*Be,-1.3,1.3)}else Ue.user=!0,Ue.yaw-=se*.008,Ue.pitch=Ct(Ue.pitch+ue*.006,-.25,1.2);else if(Fn.size===2){let Be=Array.from(Fn.values()),Qe=Math.hypot(Be[0].x-Be[1].x,Be[0].y-Be[1].y);if(Di>0){let wt=Di/Qe;xe==="dissect"?(Ue.user=!0,Ue.dist=Ct(Ue.dist*wt,6,46)):tt(wt)}Di=Qe,Qs+=20}});function R(I){if(!Fn.has(I.pointerId))return;let C=Fn.size===1;if(Fn.delete(I.pointerId),Fn.size===0&&Y.classList.remove("dragging"),C&&I.type==="pointerup"&&Qs<8&&performance.now()-Sr<600)if(xe==="world"){let se=Ku(I.clientX,I.clientY);if(se>=0&&!(c[se].needSwim&&!(V.swim||V.under))){let ue=c[se],Be=Math.hypot(V.x-ue.x,V.z-ue.z);Be<(ue.reach||9)?pt(se):L("Terlalu jauh. Dekati "+ue.name+" ("+Math.round(Be-8)+" m lagi)")}}else{let se=ll(I.clientX,I.clientY);se&&Pe(se)}}Y.addEventListener("pointerup",R),Y.addEventListener("pointercancel",R),Y.addEventListener("pointerleave",function(){Oe("#tipL").style.display="none"}),Y.addEventListener("wheel",function(I){I.preventDefault();let C=Math.exp(I.deltaY*.001);xe==="dissect"?(Ue.user=!0,Ue.dist=Ct(Ue.dist*C,6,46)):Ne()||tt(Math.exp(I.deltaY*.0012))},{passive:!1}),Oe("#act").addEventListener("click",Rr),Oe("#zIn").addEventListener("click",function(){tt(.78)}),Oe("#zOut").addEventListener("click",function(){tt(1.28)}),Oe("#bSnd").addEventListener("click",function(){Fe.init(),Fe.setEnabled(!Fe.enabled);try{localStorage.setItem(ft,Fe.enabled?"1":"0")}catch{}bt(),Fe.enabled&&Fe.meow(.08,0)}),bt(),Oe("#jump").addEventListener("pointerdown",function(I){I.preventDefault(),ji=!0,va=!0}),["pointerup","pointercancel","pointerleave"].forEach(function(I){Oe("#jump").addEventListener(I,function(){va=!1})});let J=c.map(function(I){let C=document.createElement("div");return C.className="tag",Oe("#tags").appendChild(C),C}),ne=new k,Z=0,ee=0;function ke(I){let C=Oe("#drops");if(!(!C||window.matchMedia("(prefers-reduced-motion:reduce)").matches))for(let se=0;se<I;se++){let ue=document.createElement("i"),Be=18+Math.random()*46;ue.style.width=ue.style.height=Be+"px",ue.style.left=Math.random()*100+"%",ue.style.top=Math.random()*85+"%",ue.style.animationDelay=Math.random()*.15+"s",C.appendChild(ue),setTimeout(function(){ue.remove()},1900)}}function Ve(I){let C=(en.d||en.arrowright?1:0)-(en.a||en.arrowleft?1:0),se=(en.w||en.arrowup?1:0)-(en.s||en.arrowdown?1:0),ue=Ct(C+In.x,-1,1),Be=Ct(se+In.y,-1,1),Qe=-Math.sin(ae.yaw),wt=-Math.cos(ae.yaw),Bt=Math.cos(ae.yaw),Lt=-Math.sin(ae.yaw),Ze=Qe*Be+Bt*ue,Rt=wt*Be+Lt*ue,It=Math.min(1,Math.hypot(Ze,Rt)),ot=0,cn=sn-hn(V.x,V.z);if(It>.06){let vt=Math.hypot(Ze,Rt),Vt=Ze/vt,zt=Rt/vt,kn=en.shift||In.x*In.x+In.y*In.y>.72;V.swim?ot=(kn?3.6:2.3)*It:(ot=(kn?8.2:4.6)*It,cn>0&&(ot*=1-.55*Ct(cn/1.3,0,1)));let Dn=V.x+Vt*ot*I,qn=V.z+zt*ot*I,bs=function(eh,Hg){return Math.hypot(eh,Hg)<112};bs(Dn,V.z)&&(V.x=Dn),bs(V.x,qn)&&(V.z=qn),De(V),V.phase+=ot*I*1.25}let Gn=hn(V.x,V.z),Jn=sn-Gn;V.y+=(Gn-V.y)*Math.min(1,I*14);let _a=V.x+Qe*.55,Sa=V.z+wt*.55,Ff=1.35;!V.swim&&Jn>Ff&&(V.swim=!0,V.ey=Math.max(V.y+1.68+V.jh,sn-.1),ie.splash(_a,Sa,46,1.3),W.ripple(V.x,V.z,1),Fe.splash(2),ke(9)),V.swim&&Jn<Ff-.2&&(V.swim=!1,V.jh=0,V.jv=0);let Ng=V.jh>0;if(V.swim){let vt=0;It>.06&&(vt+=Math.sin(ae.pitch)*Be*ot*1.1),(en[" "]||va)&&(vt+=1.9),(en.c||en.control)&&(vt-=1.9),Math.abs(vt)<.05&&(vt+=.32),V.ey=Ct(V.ey+vt*I,Gn+.45,sn+.24),ji=!1,V.jh=0,V.jv=0}else ji&&V.jh<=.001&&Jn<.8&&(V.jv=6.4),ji=!1,(V.jh>0||V.jv>0)&&(V.jv-=20*I,V.jh=Math.max(0,V.jh+V.jv*I),V.jh===0&&(V.jv=0)),Ng&&V.jh===0&&Jn>.05&&(ie.splash(_a,Sa,30,1),W.ripple(V.x,V.z,.9),Fe.splash(Jn>.5?2:1),Jn>.3&&ke(5));let ul=!V.swim&&Jn>.03;ul&&!V.wet&&ot>0&&(ie.splash(_a,Sa,10,.6),W.ripple(V.x,V.z,.6),Fe.splash(1,.7)),V.wet=ul;let hl=Math.floor(V.phase/(Math.PI/2));if(hl!==V.step&&(V.step=hl,ul&&ot>.5&&V.jh===0)){let vt=Ct(Jn/1.2,.15,1);ie.splash(_a+Bt*(hl%2?.15:-.15),Sa+Lt*(hl%2?.15:-.15),Math.round(5+vt*10),.35+vt*.6*(ot/6)),W.ripple(V.x,V.z,.35+vt*.4),Fe.splash(0,.5+vt)}V.swim&&ot>.3&&V.ey>sn-.35&&(V.stroke-=I,V.stroke<=0&&(V.stroke=.8,ie.splash(_a,Sa,9,.45),W.ripple(_a,Sa,.6),Fe.splash(0,.8)));let kf=Math.min(1,ot/4.6),Cg=Math.sin(V.phase*2)*.032*kf,Df=Math.cos(V.phase)*.018*kf,Nf=V.swim?V.ey+(V.ey>sn-.3?Math.sin(ge*1.7)*.05:Math.sin(ge*.9)*.03):V.y+1.68+Cg*(ul?.5:1)+V.jh;V.eyeS=V.eyeS?V.eyeS+(Nf-V.eyeS)*Math.min(1,I*(V.swim?6:16)):Nf,j.position.set(V.x+Math.cos(ae.yaw)*Df,V.eyeS,V.z-Math.sin(ae.yaw)*Df);let Ta=j.position.y<sn-.03&&sn-Gn>.05;Ta!==V.under&&(V.under=Ta,document.body.classList.toggle("underwater",Ta),Fe.setUnder(Ta),Ta?(ie.bubbles(V.x+Qe*.4,V.eyeS-.1,V.z+wt*.4,14),Fe.bubbles(8)):(ie.splash(V.x+Qe*.4,V.z+wt*.4,12,.5),Fe.splash(1,.6),ke(6))),Ta&&(V.bub-=I,V.bub<=0&&(V.bub=ot>.3?.5:1.6,ie.bubbles(V.x+Qe*.7,V.eyeS-.35,V.z+wt*.7,ot>.3?4:2),Math.random()<.4&&Fe.bubbles(2,.03))),ie.update(I,ge),j.rotation.set(ae.pitch,ae.yaw,0),Me+=(Ae-Me)*Math.min(1,I*8);let Ug=(66+(ot>6?5:0))*Me;ae.fov+=(Ug-ae.fov)*Math.min(1,I*5),Math.abs(j.fov-ae.fov)>.02&&(j.fov=ae.fov,j.updateProjectionMatrix()),a.forEach(function(vt){let Vt=vt.w;Vt.update(I,ge,V);let zt=c[vt.hi],kn=Ge[vt.hi];zt.x=Vt.x,zt.z=Vt.z,kn.y=Vt.y,kn.mk.position.x=Vt.x,kn.mk.position.z=Vt.z,kn.ring.position.set(Vt.x,Vt.y+.04,Vt.z);let Dn=Vt.x-V.x,qn=Vt.z-V.z,bs=Math.hypot(Dn,qn)||1;vt.callT-=I,vt.callT<=0&&(vt.callT=8+Math.random()*16,bs<14&&!V.under&&Fe.call(vt.data.id,.2*Math.max(.15,1-bs/15),(Dn*Math.cos(ae.yaw)-qn*Math.sin(ae.yaw))/bs))}),te.update(I,ge,V,j.position.y),r.forEach(function(vt){let Vt=vt.G.fish[0].p,zt=c[vt.hi],kn=Ge[vt.hi];zt.x=Vt.x,zt.z=Vt.z,kn.y=Vt.y,vt.hit.position.copy(Vt)});let Bg=V.swim||V.under,Zu=1e9,Pr=-1;Ge.forEach(function(vt,Vt){let zt=c[Vt];vt.mk.rotation.y+=I*1.6,vt.mk.position.y=vt.y+zt.top+(zt.mkOff!=null?zt.mkOff:2.2)+Math.sin(ge*2+Vt)*(zt.kind==="animal"?.06:.3);let kn=1+.1*Math.sin(ge*3+Vt);vt.ring.scale.set(kn,kn,kn);let Dn=Math.hypot(V.x-zt.x,V.z-zt.z),qn=J[Vt];if(zt.needSwim&&!Bg){J[Vt].style.display="none";return}if(Dn<Zu&&Dn<(zt.reach||9)&&(Zu=Dn,Pr=Vt),ne.set(zt.x,vt.y+zt.top*.6,zt.z).project(j),ne.z<1&&Dn<(zt.needSwim?14:60)&&Dn>(zt.tagNear||11)){let bs=window.innerWidth,eh=window.innerHeight;qn.style.display="block",qn.style.transform="translate("+(ne.x*.5+.5)*bs+"px,"+(-ne.y*.5+.5)*eh+"px) translate(-50%,-100%)",qn.className="tag"+(b.trees[zt.id]?" done":""),qn.innerHTML=zt.name+"<small>"+Math.round(Dn)+" m</small>"}else qn.style.display="none"});let wr=Oe("#act");if(Zu<9&&!Ne()){let vt=c[Pr],Vt=Ge[Pr];ne.set(vt.x,Vt.y+(vt.promptY||1.7),vt.z).project(j);let zt=window.innerWidth,kn=window.innerHeight,Dn=(ne.x*.5+.5)*zt,qn=(-ne.y*.5+.5)*kn;ne.z>1&&(Dn=zt*.5,qn=kn*.62),Dn=Ct(Dn,110,zt-110),qn=Ct(qn,100,kn-170),wr.style.transform="translate("+Dn+"px,"+qn+"px) translate(-50%,-50%)",wr.dataset.i!==String(Pr)&&(wr.dataset.i=Pr,Oe("#actName").textContent=vt.name),wr.classList.add("on")}else wr.classList.remove("on");if(Z+=I,Z>.2){Z=0;let vt=cl(),Vt=c[vt.i];Oe("#near").textContent="Terdekat: "+Vt.name+", "+Math.round(vt.d)+" m"}}function Le(){let I=window.innerWidth,C=window.innerHeight,se=O();P.setPixelRatio(se),P.setSize(I,C,!1),N.setSize(I,C,se),A.setSize(I,C,se),l.forEach(function(ue){ue.fx&&ue.fx.setSize(I,C,se)}),j.aspect=I/C,j.updateProjectionMatrix(),Ut.aspect=I/C,I>760?Ut.setViewOffset(I,C,Math.min(120,I*.09),0,I,C):f()?Ut.setViewOffset(I,C,0,Math.round(C*.13),I,C):Ut.clearViewOffset(),Ut.updateProjectionMatrix()}window.addEventListener("resize",Le),Oe("#bQual").addEventListener("click",function(){_e(D==="tinggi"?"hemat":"tinggi")}),_e(D),q(),X.update(K,ge,.016,{x:V.x,y:V.y+1.6,z:V.z}),de(),Oe("#loading").classList.add("done"),setTimeout(function(){Oe("#loading").style.display="none"},700),T&&(window.__hi={enter:pt,select:Pe,P:V,cam:ae,startQuiz:$s,openJournal:Dt,renderer:P,world:H,veg:Ce,sky:X,applyQuality:_e,setTime:function(I){K=I},look:function(I,C){let se=c[I];C=C||11;let ue=Math.hypot(se.x,se.z-2)||1;V.x=se.x+(0-se.x)/ue*C,V.z=se.z+(2-se.z)/ue*C,V.y=hn(V.x,V.z),ae.yaw=Math.atan2(V.x-se.x,V.z-se.z),ae.pitch=.22},getMode:function(){return xe},ds:function(){return Ue},fishW:te});let He=performance.now(),$e=!1;function rt(I){if(ge+=I,xe==="world")K=(K+I/240)%1,Ve(I),X.update(K,ge,I,{x:V.x,y:V.y+1.6,z:V.z},V.under),de(),Ce.update(V,ge,I),W.update(ge),Fe.update(I,{day:X.day,world:!0,under:V.under}),N.render(I);else{if(z.update(I,ge,Xe,Ke),x()){if(ee+=I,ee>.15){ee=0;let C=Ue.status;Oe("#gasCap").textContent=(C==="melayang"?"Ikan melayang: daya apung seimbang dengan berat tubuh.":C==="tenggelam"?"Ikan tenggelam: gas di gelembung renang kurang.":"Ikan naik: gas di gelembung renang terlalu banyak.")+(Ue.counter===!1?" Aliran searah: darah dan air sejalan, oksigen yang terserap jauh lebih sedikit.":" Aliran berlawanan arah: darah (merah) melawan arus air (biru), oksigen terserap maksimal.")}Ue.buoyOk&&!b.found[m("buoy")]&&(b.found[m("buoy")]=1,U(30,"ikan melayang seimbang"),v())}Fe.update(I,{day:X.day,world:!1,under:!1,catSub:d==="kucing"}),le().render(I)}}let _t=0,Ye=0,Tt=0,ln=!1;function Qt(I){ln||D!=="tinggi"||xe!=="world"||T||(Tt+=I,!(Tt<5)&&(_t+=I,Ye++,_t>=4&&(ln=!0,_t/Ye>.034&&(_e("hemat"),L("Grafik diturunkan ke Hemat agar tetap lancar. Ganti lewat tombol Grafik.")))))}function qt(I){let C=Math.min(.05,(I-He)/1e3);He=I,$e||(rt(C),Qt(C)),requestAnimationFrame(qt)}T&&(window.__hi.pause=function(I){$e=I!==!1},window.__hi.step=rt),requestAnimationFrame(qt)})().catch(function(i){console.error(i);let e=document.getElementById("loadTxt");e&&(e.textContent="Gagal memuat: "+(i&&i.message||i))});
