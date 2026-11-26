var E0=Object.defineProperty;var A0=(i,e,t)=>e in i?E0(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ns=(i,e,t)=>A0(i,typeof e!="symbol"?e+"":e,t);var Wf=0,yh=1,jf=2;var qs=1,Kf=2,Cr=3,Li=0,an=1,Yt=2,fn=0,Ur=1,eo=2,Mh=3,_h=4,Ql=5;var ri=100,Zf=101,ep=102,tp=103,np=104,Xs=200,ip=201,sp=202,rp=203,vh=204,Sh=205,to=206,ap=207,no=208,op=209,lp=210,cp=211,up=212,hp=213,dp=214,bl=0,yl=1,Ml=2,gr=3,_l=4,vl=5,Sl=6,Tl=7,io=0,fp=1,pp=2,wi=0,so=1,ro=2,ao=3,Vs=4,oo=5,lo=6,co=7,ih="attached",mp="detached",Th=300,Ys=301,kr=302,zl=303,Jl=304,Nt=1e3,ti=1001,xr=1002,Ht=1003,Wl=1004;var $s=1005;var tn=1006,Br=1007;var kn=1008;var Sn=1009,Eh=1010,Ah=1011,Hr=1012,jl=1013,xi=1014,Wn=1015,zt=1016,Kl=1017,Zl=1018,Ki=1020,Rh=35902,Ph=35899,Lh=1021,wh=1022,Bn=1023,Yi=1026,bi=1027,ec=1028,tc=1029,bs=1030,nc=1031;var ic=1033,uo=33776,ho=33777,fo=33778,po=33779,sc=35840,rc=35841,ac=35842,oc=35843,lc=36196,cc=37492,uc=37496,hc=37488,dc=37489,mo=37490,fc=37491,pc=37808,mc=37809,gc=37810,xc=37811,bc=37812,yc=37813,Mc=37814,_c=37815,vc=37816,Sc=37817,Tc=37818,Ec=37819,Ac=37820,Rc=37821,Pc=36492,Lc=36494,wc=36495,Ic=36283,Fc=36284,go=36285,Dc=36286;var Ds=2300,Ns=2301,gl=2302,sh=2303,rh=2400,ah=2401,oh=2402,gp=2500;var Ih=0,xo=1,Gr=2,xp=3200,Fh=3201;var Qs=0,bp=1,Zi="",xt="srgb",nn="srgb-linear",_a="linear",Et="srgb";var xl=7680;var yp=519,Mp=512,_p=513,vp=514,Dh=515,Sp=516,Tp=517,Nh=518,Ch=519,Uh=35044;var kh="300 es",ni=2e3,br=2001;function R0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function P0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ep(){let i=yr("canvas");return i.style.display="block",i}var tf={},Mr=null;function va(...i){let e="THREE."+i.shift();Mr?Mr("log",e,...i):console.log(e,...i)}function Ap(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=Ap(i);let e="THREE."+i.shift();if(Mr)Mr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=Ap(i);let e="THREE."+i.shift();if(Mr)Mr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fs(...i){let e=i.join(" ");e in tf||(tf[e]=!0,$e(...i))}function Rp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Pp={[bl]:bl,[Ml]:Sl,[_l]:_l,[gr]:vl,[yl]:yl,[Sl]:Ml,[Tl]:Tl,[vl]:gr},Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nf=1234567,xa=Math.PI/180,Cs=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Bh(i,e){return(i%e+e)%e}function L0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function w0(i,e,t){return i!==e?(t-i)/(e-i):0}function ba(i,e,t){return(1-t)*i+t*e}function I0(i,e,t,n){return ba(i,e,1-Math.exp(-t*n))}function F0(i,e=1){return e-Math.abs(Bh(i,e*2)-e)}function D0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function N0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function C0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function U0(i,e){return i+Math.random()*(e-i)}function k0(i){return i*(.5-Math.random())}function B0(i){i!==void 0&&(nf=i);let e=nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function H0(i){return i*xa}function G0(i){return i*Cs}function O0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function q0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function X0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*u,o*c);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gh(i,e){if(e.constructor===Float32Array)return i;let t=Nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Oh(i,e){if(e.constructor===Float32Array)return i;let t=Nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Cc={DEG2RAD:xa,RAD2DEG:Cs,generateUUID:yi,clamp:dt,euclideanModulo:Bh,mapLinear:L0,inverseLerp:w0,lerp:ba,damp:I0,pingpong:F0,smoothstep:D0,smootherstep:N0,randInt:C0,randFloat:U0,randFloatSpread:k0,seededRandom:B0,degToRad:H0,radToDeg:G0,isPowerOfTwo:O0,ceilPowerOfTwo:q0,floorPowerOfTwo:Hh,setQuaternionFromProperEuler:X0,normalize:Oh,denormalize:Gh},Qh=class Qh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qh.prototype.isVector2=!0;var he=Qh,_t=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],b=r[a+3];if(h!==b||l!==d||c!==f||u!==p){let g=l*d+c*f+u*p+h*b;g<0&&(d=-d,f=-f,p=-p,b=-b,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),_=Math.sin(M);m=Math.sin(m*M)/_,o=Math.sin(o*M)/_,l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+b*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+b*o;let M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-o*f,e[t+2]=c*p+u*f+o*d-l*h,e[t+3]=u*p-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zh=class zh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zh.prototype.isVector3=!0;var U=zh,wu=new U,sf=new _t,Jh=class Jh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],b=s[0],g=s[3],m=s[6],M=s[1],_=s[4],y=s[7],T=s[2],S=s[5],x=s[8];return r[0]=a*b+o*M+l*T,r[3]=a*g+o*_+l*S,r[6]=a*m+o*y+l*x,r[1]=c*b+u*M+h*T,r[4]=c*g+u*_+h*S,r[7]=c*m+u*y+h*x,r[2]=d*b+f*M+p*T,r[5]=d*g+f*_+p*S,r[8]=d*m+f*y+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return e[0]=h*b,e[1]=(s*c-u*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Iu.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Iu.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Iu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jh.prototype.isMatrix3=!0;var it=Jh,Iu=new it,rf=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),af=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V0(){let i={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zi?_a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nn]:{primaries:e,whitePoint:n,transfer:_a,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var lt=V0();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var tr,El=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{tr===void 0&&(tr=yr("canvas")),tr.width=e.width,tr.height=e.height;let s=tr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=tr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Y0=0,_r=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fu(s[a].image)):r.push(Fu(s[a]))}else r=Fu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Fu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?El.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var $0=0,Du=new U,sn=class i extends Ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ti,s=ti,r=tn,a=kn,o=Bn,l=Sn,c=i.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=yi(),this.name="",this.source=new _r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Du).x}get height(){return this.source.getSize(Du).y}get depth(){return this.source.getSize(Du).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nt:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nt:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Th;sn.DEFAULT_ANISOTROPY=1;var Wh=class Wh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,T=(m+1)/2,S=(u+d)/4,x=(h+b)/4,v=(p+g)/4;return _>y&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=x/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=v/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(h-b)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wh.prototype.isVector4=!0;var St=Wh,Al=class extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new sn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new _r(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends Al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sa=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rl=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $l=class $l{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,p,b,g)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,p,b,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),a=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,p=o*u,b=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,b=c*h;t[0]=d+b*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,b=c*h;t[0]=d-b*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,p=o*u,b=o*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+b,t[1]=l*h,t[5]=b*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,b=o*c;t[0]=l*u,t[4]=b-d*h,t[8]=p*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-b*h}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,b=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+b,t[5]=a*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q0,e,z0)}lookAt(e,t,n){let s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),is.crossVectors(n,Vn),is.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),is.crossVectors(n,Vn)),is.normalize(),Xo.crossVectors(Vn,is),s[0]=is.x,s[4]=Xo.x,s[8]=Vn.x,s[1]=is.y,s[5]=Xo.y,s[9]=Vn.y,s[2]=is.z,s[6]=Xo.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],b=n[6],g=n[10],m=n[14],M=n[3],_=n[7],y=n[11],T=n[15],S=s[0],x=s[4],v=s[8],D=s[12],L=s[1],w=s[5],P=s[9],I=s[13],A=s[2],N=s[6],B=s[10],k=s[14],Y=s[3],X=s[7],$=s[11],J=s[15];return r[0]=a*S+o*L+l*A+c*Y,r[4]=a*x+o*w+l*N+c*X,r[8]=a*v+o*P+l*B+c*$,r[12]=a*D+o*I+l*k+c*J,r[1]=u*S+h*L+d*A+f*Y,r[5]=u*x+h*w+d*N+f*X,r[9]=u*v+h*P+d*B+f*$,r[13]=u*D+h*I+d*k+f*J,r[2]=p*S+b*L+g*A+m*Y,r[6]=p*x+b*w+g*N+m*X,r[10]=p*v+b*P+g*B+m*$,r[14]=p*D+b*I+g*k+m*J,r[3]=M*S+_*L+y*A+T*Y,r[7]=M*x+_*w+y*N+T*X,r[11]=M*v+_*P+y*B+T*$,r[15]=M*D+_*I+y*k+T*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],b=e[7],g=e[11],m=e[15],M=l*f-c*d,_=o*f-c*h,y=o*d-l*h,T=a*f-c*u,S=a*d-l*u,x=a*h-o*u;return t*(b*M-g*_+m*y)-n*(p*M-g*T+m*S)+s*(p*_-b*T+m*x)-r*(p*y-b*S+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],b=e[13],g=e[14],m=e[15],M=t*o-n*a,_=t*l-s*a,y=t*c-r*a,T=n*l-s*o,S=n*c-r*o,x=s*c-r*l,v=u*b-h*p,D=u*g-d*p,L=u*m-f*p,w=h*g-d*b,P=h*m-f*b,I=d*m-f*g,A=M*I-_*P+y*w+T*L-S*D+x*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/A;return e[0]=(o*I-l*P+c*w)*N,e[1]=(s*P-n*I-r*w)*N,e[2]=(b*x-g*S+m*T)*N,e[3]=(d*S-h*x-f*T)*N,e[4]=(l*L-a*I-c*D)*N,e[5]=(t*I-s*L+r*D)*N,e[6]=(g*y-p*x-m*_)*N,e[7]=(u*x-d*y+f*_)*N,e[8]=(a*P-o*L+c*v)*N,e[9]=(n*L-t*P-r*v)*N,e[10]=(p*S-b*y+m*M)*N,e[11]=(h*y-u*S-f*M)*N,e[12]=(o*D-a*w-l*v)*N,e[13]=(t*w-n*D+s*v)*N,e[14]=(b*_-p*T-g*M)*N,e[15]=(u*T-h*_+d*M)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,p=r*h,b=a*u,g=a*h,m=o*h,M=l*c,_=l*u,y=l*h,T=n.x,S=n.y,x=n.z;return s[0]=(1-(b+m))*T,s[1]=(f+y)*T,s[2]=(p-_)*T,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(d+m))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(p+_)*x,s[9]=(g-M)*x,s[10]=(1-(d+b))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=nr.set(s[0],s[1],s[2]).length(),o=nr.set(s[4],s[5],s[6]).length(),l=nr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hi.copy(this);let c=1/a,u=1/o,h=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,t.setFromRotationMatrix(hi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=ni,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,b;if(l)p=r/(a-r),b=a*r/(a-r);else if(o===ni)p=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===br)p=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ni,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,b;if(l)p=1/(a-r),b=a/(a-r);else if(o===ni)p=-2/(a-r),b=-(a+r)/(a-r);else if(o===br)p=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$l.prototype.isMatrix4=!0;var We=$l,nr=new U,hi=new We,Q0=new U(0,0,0),z0=new U(1,1,1),is=new U,Xo=new U,Vn=new U,of=new We,lf=new _t,Ot=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lf.setFromEuler(this),this.setFromQuaternion(lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ot.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},J0=0,cf=new U,ir=new _t,Bi=new We,Vo=new U,oa=new U,W0=new U,j0=new _t,uf=new U(1,0,0),hf=new U(0,1,0),df=new U(0,0,1),ff={type:"added"},K0={type:"removed"},sr={type:"childadded",child:null},Nu={type:"childremoved",child:null},kt=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Ot,n=new _t,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new it}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(uf,e)}rotateY(e){return this.rotateOnAxis(hf,e)}rotateZ(e){return this.rotateOnAxis(df,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uf,e)}translateY(e){return this.translateOnAxis(hf,e)}translateZ(e){return this.translateOnAxis(df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vo.copy(e):Vo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(oa,Vo,this.up):Bi.lookAt(Vo,oa,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Bi),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ff),sr.child=e,this.dispatchEvent(sr),sr.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(K0),Nu.child=e,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ff),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,W0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,j0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new U(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Z0={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function Cu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Bh(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cu(a,r,e+1/3),this.g=Cu(a,r,e),this.b=Cu(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=Lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return lt.workingToColorSpace(Mn.copy(this),e),Math.round(dt(Mn.r*255,0,255))*65536+Math.round(dt(Mn.g*255,0,255))*256+Math.round(dt(Mn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=xt){lt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Yo);let n=ba(ss.h,Yo.h,t),s=ba(ss.s,Yo.s,t),r=ba(ss.l,Yo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new de;de.NAMES=Lp;var Ta=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var $n=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ot,this.environmentIntensity=1,this.environmentRotation=new Ot,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},di=new U,Hi=new U,Uu=new U,Gi=new U,rr=new U,ar=new U,pf=new U,ku=new U,Bu=new U,Hu=new U,Gu=new St,Ou=new St,qu=new St,cs=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){di.subVectors(s,t),Hi.subVectors(n,t),Uu.subVectors(e,t);let a=di.dot(di),o=di.dot(Hi),l=di.dot(Uu),c=Hi.dot(Hi),u=Hi.dot(Uu),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,p=(a*u-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(a,Gi.y),l.addScaledVector(o,Gi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Gu.setScalar(0),Ou.setScalar(0),qu.setScalar(0),Gu.fromBufferAttribute(e,t),Ou.fromBufferAttribute(e,n),qu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Gu,r.x),a.addScaledVector(Ou,r.y),a.addScaledVector(qu,r.z),a}static isFrontFacing(e,t,n,s){return di.subVectors(n,t),Hi.subVectors(e,t),di.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;rr.subVectors(s,n),ar.subVectors(r,n),ku.subVectors(e,n);let l=rr.dot(ku),c=ar.dot(ku);if(l<=0&&c<=0)return t.copy(n);Bu.subVectors(e,s);let u=rr.dot(Bu),h=ar.dot(Bu);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(rr,a);Hu.subVectors(e,r);let f=rr.dot(Hu),p=ar.dot(Hu);if(p>=0&&f<=p)return t.copy(r);let b=f*c-l*p;if(b<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ar,o);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return pf.subVectors(r,s),o=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(pf,o);let m=1/(g+b+d);return a=b*m,o=d*m,t.copy(n).addScaledVector(rr,a).addScaledVector(ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_n=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$o.copy(n.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Qo.subVectors(this.max,la),or.subVectors(e.a,la),lr.subVectors(e.b,la),cr.subVectors(e.c,la),rs.subVectors(lr,or),as.subVectors(cr,lr),Rs.subVectors(or,cr);let t=[0,-rs.z,rs.y,0,-as.z,as.y,0,-Rs.z,Rs.y,rs.z,0,-rs.x,as.z,0,-as.x,Rs.z,0,-Rs.x,-rs.y,rs.x,0,-as.y,as.x,0,-Rs.y,Rs.x,0];return!Xu(t,or,lr,cr,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Xu(t,or,lr,cr,Qo))?!1:(zo.crossVectors(rs,as),t=[zo.x,zo.y,zo.z],Xu(t,or,lr,cr,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new U,new U,new U,new U,new U,new U,new U,new U],fi=new U,$o=new _n,or=new U,lr=new U,cr=new U,rs=new U,as=new U,Rs=new U,la=new U,Qo=new U,zo=new U,Ps=new U;function Xu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ps.fromArray(i,r);let o=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=e.dot(Ps),c=t.dot(Ps),u=n.dot(Ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Kt=new U,Jo=new he,eg=0,ct=class extends Ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uh,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?Nc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Gh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Oh(e,this.array)}};var Ea=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Aa=class extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},tg=new _n,ca=new U,Vu=new U,Fn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);let t=ca.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ca,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Vu)),this.expandByPoint(ca.copy(e.center).sub(Vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ng=0,ei=new We,Yu=new kt,ur=new U,Yn=new _n,ua=new _n,dn=new U,gt=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R0(e)?Aa:Ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(Yn.min,ua.min),Yn.expandByPoint(dn),dn.addVectors(Yn.max,ua.max),Yn.expandByPoint(dn)):(Yn.expandByPoint(ua.min),Yn.expandByPoint(ua.max))}Yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dn.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(e,c),dn.add(ur)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new U,l[D]=new U;let u=new U,h=new U,d=new U,f=new he,p=new he,b=new he,g=new U,m=new U;function M(D,L,w){c[D]=c[L]=c[w]=1,u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,w),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,L),b.fromBufferAttribute(r,w),h.sub(u),d.sub(u),p.sub(f),b.sub(f);let P=1/(p.x*b.y-b.x*p.y);isFinite(P)&&(g.copy(h).multiplyScalar(b.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-b.x).multiplyScalar(P),o[D].add(g),o[L].add(g),o[w].add(g),l[D].add(m),l[L].add(m),l[w].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let D=0,L=_.length;D<L;++D){let w=_[D],P=w.start,I=w.count;for(let A=P,N=P+I;A<N;A+=3)M(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let y=new U,T=new U,S=new U,x=new U;function v(D){S.fromBufferAttribute(s,D),x.copy(S);let L=o[D];y.copy(L),y.sub(S.multiplyScalar(S.dot(L))).normalize(),T.crossVectors(x,L);let P=T.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,L=n.count;D<L;++D)c[D]&&v(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new ct(d,u,h)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},us=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uh,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function mf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=yi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var En=new U,hs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Nc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Gh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Oh(e,this.data.array)}},$u=new U,ig=new U,sg=new it,pi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$u.subVectors(n,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($u),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sg.getNormalMatrix(e),s=this.coplanarPoint($u).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rg=0,mn=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Ur,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=Sh,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new de().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var qi=new U,Qu=new U,Wo=new U,jo=new U,ds=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qu.copy(e).add(t).multiplyScalar(.5),Wo.copy(t).sub(e).normalize(),jo.copy(this.origin).sub(Qu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Wo),o=jo.dot(this.direction),l=-jo.dot(Wo),c=jo.lengthSq(),u=Math.abs(1-a*a),h,d,f,p;if(u>0)if(h=a*l-o,d=a*o-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let b=1/u;h*=b,d*=b,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qu).addScaledVector(Wo,d),f}intersectSphere(e,t){if(e.radius<0)return null;qi.subVectors(e.center,this.origin);let n=qi.dot(this.direction),s=qi.dot(qi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,b=t.y-a.y,g=t.z-a.z,m=n.x-a.x,M=n.y-a.y,_=n.z-a.z,y=Math.abs(l),T=Math.abs(c),S=Math.abs(u),x,v,D,L,w,P,I,A,N,B,k,Y;if(y>=T&&y>=S?(D=l,P=h,N=p,Y=m,l>=0?(x=c,v=u,L=d,w=f,I=b,A=g,B=M,k=_):(x=u,v=c,L=f,w=d,I=g,A=b,B=_,k=M)):T>=S?(D=c,P=d,N=b,Y=M,c>=0?(x=u,v=l,L=f,w=h,I=g,A=p,B=_,k=m):(x=l,v=u,L=h,w=f,I=p,A=g,B=m,k=_)):(D=u,P=f,N=g,Y=_,u>=0?(x=l,v=c,L=h,w=d,I=p,A=b,B=m,k=M):(x=c,v=l,L=d,w=h,I=b,A=p,B=M,k=m)),D===0)return null;let X=x/D,$=v/D,J=1/D,ce=L-X*P,ge=w-$*P,Q=I-X*N,te=A-$*N,O=B-X*Y,K=k-$*Y,oe=O*te-K*Q,pe=ce*K-ge*O,ke=Q*ge-te*ce;if(s){if(oe<0||pe<0||ke<0)return null}else if((oe<0||pe<0||ke<0)&&(oe>0||pe>0||ke>0))return null;let xe=oe+pe+ke;if(xe===0)return null;let Je=J*(oe*P+pe*N+ke*Y);return(xe>0?Je<0:Je>0)?null:this.at(Je/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wt=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ot,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gf=new We,Ls=new ds,Ko=new Fn,xf=new U,Zo=new U,el=new U,tl=new U,zu=new U,nl=new U,bf=new U,il=new U,Ve=class extends kt{constructor(e=new gt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){nl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(zu.fromBufferAttribute(h,e),a?nl.addScaledVector(zu,u):nl.addScaledVector(zu.sub(t),u))}t.add(nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(Ko.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ko,xf)===null||Ls.origin.distanceToSquared(xf)>(e.far-e.near)**2))&&(gf.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(gf),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,b=d.length;p<b;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,T=_;y<T;y+=3){let S=o.getX(y),x=o.getX(y+1),v=o.getX(y+2);s=sl(this,m,e,n,c,u,h,S,x,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=p,m=b;g<m;g+=3){let M=o.getX(g),_=o.getX(g+1),y=o.getX(g+2);s=sl(this,a,e,n,c,u,h,M,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,b=d.length;p<b;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,T=_;y<T;y+=3){let S=y,x=y+1,v=y+2;s=sl(this,m,e,n,c,u,h,S,x,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=p,m=b;g<m;g+=3){let M=g,_=g+1,y=g+2;s=sl(this,a,e,n,c,u,h,M,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ag(i,e,t,n,s,r,a,o){let l;if(e.side===an?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Li,o),l===null)return null;il.copy(o),il.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(il);return c<t.near||c>t.far?null:{distance:c,point:il.clone(),object:i}}function sl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Zo),i.getVertexPosition(l,el),i.getVertexPosition(c,tl);let u=ag(i,e,t,n,Zo,el,tl,bf);if(u){let h=new U;cs.getBarycoord(bf,Zo,el,tl,h),s&&(u.uv=cs.getInterpolatedAttribute(s,o,l,c,h,new he)),r&&(u.uv1=cs.getInterpolatedAttribute(r,o,l,c,h,new he)),a&&(u.normal=cs.getInterpolatedAttribute(a,o,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};cs.getNormal(Zo,el,tl,d.normal),u.face=d,u.barycoord=h}return u}var ha=new St,yf=new St,Mf=new St,og=new St,_f=new We,rl=new U,Ju=new Fn,vf=new We,Wu=new ds,Ra=class extends Ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ih,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingBox.expandByPoint(rl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingSphere.expandByPoint(rl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ju.copy(this.boundingSphere),Ju.applyMatrix4(s),e.ray.intersectsSphere(Ju)!==!1&&(vf.copy(s).invert(),Wu.copy(e.ray).applyMatrix4(vf),!(this.boundingBox!==null&&Wu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mp?this.bindMatrixInverse.copy(this.bindMatrix).invert():$e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;yf.fromBufferAttribute(s.attributes.skinIndex,e),Mf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ha.copy(t),t.set(0,0,0,0)):(ha.set(t.x,t.y,t.z,1),t.set(0,0,0)),ha.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Mf.getComponent(r);if(a!==0){let o=yf.getComponent(r);_f.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(og.copy(ha).applyMatrix4(_f),a)}}return t.isVector4&&(t.w=ha.w),t.applyMatrix4(this.bindMatrixInverse)}},Tr=class extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ei=class extends sn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ht,u=Ht,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sf=new We,lg=new We,Pa=class i{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){$e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:lg;Sf.multiplyMatrices(o,t[r]),Sf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ei(t,e,e,Bn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&($e("Skeleton: No bone found with UUID:",r),a=new Tr),this.bones.push(a),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},mi=class extends ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new We,Tf=new We,al=[],Ef=new _n,cg=new We,da=new Ve,fa=new Fn,ii=class extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),Ef.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(Ef)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),fa.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(da.geometry=this.geometry,da.material=this.material,da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(n),e.ray.intersectsSphere(fa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),Tf.multiplyMatrices(n,hr),da.matrixWorld=Tf,da.raycast(e,al);for(let a=0,o=al.length;a<o;a++){let l=al[a];l.instanceId=r,l.object=this,t.push(l)}al.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ei(new Float32Array(s*this.count),s,this.count,ec,Wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ws=new Fn,ug=new he(.5,.5),ol=new U,fs=class{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],b=r[9],g=r[10],m=r[11],M=r[12],_=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,f-u,m-p,T-M).normalize(),s[1].setComponents(c+a,f+u,m+p,T+M).normalize(),s[2].setComponents(c+o,f+h,m+b,T+_).normalize(),s[3].setComponents(c-o,f-h,m-b,T-_).normalize(),n)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,m-g,T-y).normalize();else if(s[4].setComponents(c-l,f-d,m-g,T-y).normalize(),t===ni)s[5].setComponents(c+l,f+d,m+g,T+y).normalize();else if(t===br)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=ug.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ol.x=s.normal.x>0?e.max.x:e.min.x,ol.y=s.normal.y>0?e.max.y:e.min.y,ol.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Af=new We,Pl=class i{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Af.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new fs),n[s].setFromProjectionMatrix(Af,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new fs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ps=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ll=new U,wl=new U,Rf=new We,pa=new ds,ll=new Fn,ju=new U,Pf=new U,Us=class extends kt{constructor(e=new gt,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ll.fromBufferAttribute(t,s-1),wl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ll.distanceTo(wl);e.setAttribute("lineDistance",new ft(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(s),ll.radius+=r,e.ray.intersectsSphere(ll)===!1)return;Rf.copy(s).invert(),pa.copy(e.ray).applyMatrix4(Rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let b=f,g=p-1;b<g;b+=c){let m=u.getX(b),M=u.getX(b+1),_=cl(this,e,pa,l,m,M,b);_&&t.push(_)}if(this.isLineLoop){let b=u.getX(p-1),g=u.getX(f),m=cl(this,e,pa,l,b,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let b=f,g=p-1;b<g;b+=c){let m=cl(this,e,pa,l,b,b+1,b);m&&t.push(m)}if(this.isLineLoop){let b=cl(this,e,pa,l,p-1,f,p-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Ll.fromBufferAttribute(o,s),wl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ll,wl,ju,Pf)>n)return;ju.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ju);if(!(c<e.near||c>e.far))return{distance:c,point:Pf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Lf=new U,wf=new U,ks=class extends Us{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Lf.fromBufferAttribute(t,s),wf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lf.distanceTo(wf);e.setAttribute("lineDistance",new ft(n,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},La=class extends Us{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Dn=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},If=new We,lh=new ds,ul=new Fn,hl=new U,Qn=class extends kt{constructor(e=new gt,t=new Dn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;If.copy(s).invert(),lh.copy(e.ray).applyMatrix4(If);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,b=f;p<b;p++){let g=c.getX(p);hl.fromBufferAttribute(h,g),Ff(hl,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,b=f;p<b;p++)hl.fromBufferAttribute(h,p),Ff(hl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ff(i,e,t,n,s,r,a){let o=lh.distanceSqToPoint(i);if(o<t){let l=new U;lh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var wa=class extends sn{constructor(e=[],t=Ys,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vn=class extends sn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gi=class extends sn{constructor(e,t,n=xi,s,r,a,o=Ht,l=Ht,c,u=Yi,h=1){if(u!==Yi&&u!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ia=class extends gi{constructor(e,t=xi,n=Ys,s,r,a=Ht,o=Ht,l,c=Yi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fa=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ms=class i extends gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2));function p(b,g,m,M,_,y,T,S,x,v,D){let L=y/x,w=T/v,P=y/2,I=T/2,A=S/2,N=x+1,B=v+1,k=0,Y=0,X=new U;for(let $=0;$<B;$++){let J=$*w-I;for(let ce=0;ce<N;ce++){let ge=ce*L-P;X[b]=ge*M,X[g]=J*_,X[m]=A,c.push(X.x,X.y,X.z),X[b]=0,X[g]=0,X[m]=S>0?1:-1,u.push(X.x,X.y,X.z),h.push(ce/x),h.push(1-$/v),k+=1}}for(let $=0;$<v;$++)for(let J=0;J<x;J++){let ce=d+J+N*$,ge=d+J+N*($+1),Q=d+(J+1)+N*($+1),te=d+(J+1)+N*$;l.push(ce,ge,te),l.push(ge,Q,te),Y+=6}o.addGroup(f,Y,D),f+=Y,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var An=class i extends gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,b=[],g=n/2,m=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function M(){let y=new U,T=new U,S=0,x=(t-e)/n;for(let v=0;v<=r;v++){let D=[],L=v/r,w=L*(t-e)+e;for(let P=0;P<=s;P++){let I=P/s,A=I*l+o,N=Math.sin(A),B=Math.cos(A);T.x=w*N,T.y=-L*n+g,T.z=w*B,h.push(T.x,T.y,T.z),y.set(N,x,B).normalize(),d.push(y.x,y.y,y.z),f.push(I,1-L),D.push(p++)}b.push(D)}for(let v=0;v<s;v++)for(let D=0;D<r;D++){let L=b[D][v],w=b[D+1][v],P=b[D+1][v+1],I=b[D][v+1];(e>0||D!==0)&&(u.push(L,w,I),S+=3),(t>0||D!==r-1)&&(u.push(w,P,I),S+=3)}c.addGroup(m,S,0),m+=S}function _(y){let T=p,S=new he,x=new U,v=0,D=y===!0?e:t,L=y===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,g*L,0),d.push(0,L,0),f.push(.5,.5),p++;let w=p;for(let P=0;P<=s;P++){let A=P/s*l+o,N=Math.cos(A),B=Math.sin(A);x.x=D*B,x.y=g*L,x.z=D*N,h.push(x.x,x.y,x.z),d.push(0,L,0),S.x=N*.5+.5,S.y=B*.5*L+.5,f.push(S.x,S.y),p++}for(let P=0;P<s;P++){let I=T+P,A=w+P;y===!0?u.push(A,A+1,I):u.push(A+1,A,I),v+=3}c.addGroup(m,v,y===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Da=class i extends An{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Il=class i extends gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new U,y=new U,T=new U;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],y),f(t[S+2],T),l(_,y,T,M)}function l(M,_,y,T){let S=T+1,x=[];for(let v=0;v<=S;v++){x[v]=[];let D=M.clone().lerp(y,v/S),L=_.clone().lerp(y,v/S),w=S-v;for(let P=0;P<=w;P++)P===0&&v===S?x[v][P]=D:x[v][P]=D.clone().lerp(L,P/w)}for(let v=0;v<S;v++)for(let D=0;D<2*(S-v)-1;D++){let L=Math.floor(D/2);D%2===0?(d(x[v][L+1]),d(x[v+1][L]),d(x[v][L])):(d(x[v][L+1]),d(x[v+1][L+1]),d(x[v+1][L]))}}function c(M){let _=new U;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(M),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function u(){let M=new U;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let y=g(M)/2/Math.PI+.5,T=m(M)/Math.PI+.5;a.push(y,1-T)}p(),h()}function h(){for(let M=0;M<a.length;M+=6){let _=a[M+0],y=a[M+2],T=a[M+4],S=Math.max(_,y,T),x=Math.min(_,y,T);S>.9&&x<.1&&(_<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,_){let y=M*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function p(){let M=new U,_=new U,y=new U,T=new U,S=new he,x=new he,v=new he;for(let D=0,L=0;D<r.length;D+=9,L+=6){M.set(r[D+0],r[D+1],r[D+2]),_.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),S.set(a[L+0],a[L+1]),x.set(a[L+2],a[L+3]),v.set(a[L+4],a[L+5]),T.copy(M).add(_).add(y).divideScalar(3);let w=g(T);b(S,L+0,M,w),b(x,L+2,_,w),b(v,L+4,y,w)}}function b(M,_,y,T){T<0&&M.x===1&&(a[_]=M.x-1),y.x===0&&y.z===0&&(a[_]=T/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new We;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Er=class extends zn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fl=class extends Er{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function qh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Df=new U,Nf=new U,Ku=new qh,Zu=new qh,eh=new qh,Ai=class extends zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Nf.subVectors(s[0],s[1]).add(s[0]),c=Nf);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Df.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Df),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),b=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);b<1e-4&&(b=1),p<1e-4&&(p=b),g<1e-4&&(g=b),Ku.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,b,g),Zu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,b,g),eh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,b,g)}else this.curveType==="catmullrom"&&(Ku.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Zu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),eh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ku.calc(l),Zu.calc(l),eh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Cf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function hg(i,e){let t=1-i;return t*t*e}function dg(i,e){return 2*(1-i)*i*e}function fg(i,e){return i*i*e}function ya(i,e,t,n){return hg(i,e)+dg(i,t)+fg(i,n)}function pg(i,e){let t=1-i;return t*t*t*e}function mg(i,e){let t=1-i;return 3*t*t*i*e}function gg(i,e){return 3*(1-i)*i*i*e}function xg(i,e){return i*i*i*e}function Ma(i,e,t,n,s){return pg(i,e)+mg(i,t)+gg(i,n)+xg(i,s)}var Na=class extends zn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ma(e,s.x,r.x,a.x,o.x),Ma(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dl=class extends zn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ma(e,s.x,r.x,a.x,o.x),Ma(e,s.y,r.y,a.y,o.y),Ma(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ca=class extends zn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nl=class extends zn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends zn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends zn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y),ya(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Cf(o,l.x,c.x,u.x,h.x),Cf(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Cl=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:Ai,CubicBezierCurve:Na,CubicBezierCurve3:Dl,EllipseCurve:Er,LineCurve:Ca,LineCurve3:Nl,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:ka,SplineCurve:Ba}),Ul=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Cl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ha=class extends Ul{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ca(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ua(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Na(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ba(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Er(e,t,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ar=class extends Ha{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ha().fromJSON(s))}return this}};function bg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=wp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Sg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,h=l;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return Ga(r,a,t,o,l,c,0),a}function wp(i,e,t,n,s){let r;if(s===Ng(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Uf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Uf(a/n|0,i[a],i[a+1],r);return r&&Rr(r,r.next)&&(qa(r),r=r.next),r}function Bs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Rr(t,t.next)||Vt(t.prev,t,t.next)===0)){if(qa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ga(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Pg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Mg(i,n,s,r):yg(i)){e.push(l.i,i.i,c.i),qa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=_g(Bs(i),e),Ga(i,e,t,n,s,r,2)):a===2&&vg(i,e,t,n,s,r):Ga(Bs(i),e,t,n,s,r,1);break}}}function yg(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),h=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&ma(s,o,r,l,a,c,p.x,p.y)&&Vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Mg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Vt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(u,h,d),b=Math.max(o,l,c),g=Math.max(u,h,d),m=ch(f,p,e,t,n),M=ch(b,g,e,t,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=m&&y&&y.z<=M;){if(_.x>=f&&_.x<=b&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&ma(o,u,l,h,c,d,_.x,_.y)&&Vt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=b&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&ma(o,u,l,h,c,d,y.x,y.y)&&Vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=b&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&ma(o,u,l,h,c,d,_.x,_.y)&&Vt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=b&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&ma(o,u,l,h,c,d,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function _g(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Rr(n,s)&&Fp(n,t,t.next,s)&&Oa(n,s)&&Oa(s,n)&&(e.push(n.i,t.i,s.i),qa(t),qa(t.next),t=i=s),t=t.next}while(t!==i);return Bs(t)}function vg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ig(a,o)){let l=Dp(a,o);a=Bs(a,a.next),l=Bs(l,l.next),Ga(a,e,t,n,s,r,0),Ga(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Sg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=wp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(wg(c))}s.sort(Tg);for(let r=0;r<s.length;r++)t=Eg(s[r],t);return t}function Tg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Eg(i,e){let t=Ag(i,e);if(!t)return e;let n=Dp(t,i);return Bs(n,n.next),Bs(t,t.next)}function Ag(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Rr(i,t))return t;do{if(Rr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ip(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);Oa(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Rg(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Rg(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function Pg(i,e,t,n){let s=i;do s.z===0&&(s.z=ch(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lg(s)}function Lg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function ch(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ip(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ma(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Ip(i,e,t,n,s,r,a,o)}function Ig(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Fg(i,e)&&(Oa(i,e)&&Oa(e,i)&&Dg(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||Rr(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Rr(i,e){return i.x===e.x&&i.y===e.y}function Fp(i,e,t,n){let s=fl(Vt(i,e,t)),r=fl(Vt(i,e,n)),a=fl(Vt(t,n,i)),o=fl(Vt(t,n,e));return!!(s!==r&&a!==o||s===0&&dl(i,t,e)||r===0&&dl(i,n,e)||a===0&&dl(t,i,n)||o===0&&dl(t,e,n))}function dl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fl(i){return i>0?1:i<0?-1:0}function Fg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Oa(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function Dg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Dp(i,e){let t=uh(i.i,i.x,i.y),n=uh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Uf(i,e,t,n){let s=uh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ng(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var hh=class{static triangulate(e,t,n=2){return bg(e,t,n)}},Is=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];kf(e),Bf(n,e);let a=e.length;t.forEach(kf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Bf(n,t[l]);let o=hh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function kf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Xa=class i extends gt{constructor(e=new Ar([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Cg,_,y=!1,T,S,x,v;if(m){_=m.getSpacedPoints(u),y=!0,d=!1;let ee=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(u,ee),S=new U,x=new U,v=new U}d||(g=0,f=0,p=0,b=0);let D=o.extractPoints(c),L=D.shape,w=D.holes;if(!Is.isClockWise(L)){L=L.reverse();for(let ee=0,me=w.length;ee<me;ee++){let fe=w[ee];Is.isClockWise(fe)&&(w[ee]=fe.reverse())}}function I(ee){let fe=10000000000000001e-36,Ie=ee[0];for(let Ee=1;Ee<=ee.length;Ee++){let Ze=Ee%ee.length,Ge=ee[Ze],He=Ge.x-Ie.x,et=Ge.y-Ie.y,Be=He*He+et*et,G=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(Ie.x),Math.abs(Ie.y)),bt=fe*G*G;if(Be<=bt){ee.splice(Ze,1),Ee--;continue}Ie=Ge}}I(L),w.forEach(I);let A=w.length,N=L;for(let ee=0;ee<A;ee++){let me=w[ee];L=L.concat(me)}function B(ee,me,fe){return me||tt("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(me,fe)}let k=L.length;function Y(ee,me,fe){let Ie,Ee,Ze,Ge=ee.x-me.x,He=ee.y-me.y,et=fe.x-ee.x,Be=fe.y-ee.y,G=Ge*Ge+He*He,bt=Ge*Be-He*et;if(Math.abs(bt)>Number.EPSILON){let je=Math.sqrt(G),st=Math.sqrt(et*et+Be*Be),be=me.x-He/je,At=me.y+Ge/je,Xe=fe.x-Be/st,Qe=fe.y+et/st,C=((Xe-be)*Be-(Qe-At)*et)/(Ge*Be-He*et);Ie=be+Ge*C-ee.x,Ee=At+He*C-ee.y;let E=Ie*Ie+Ee*Ee;if(E<=2)return new he(Ie,Ee);Ze=Math.sqrt(E/2)}else{let je=!1;Ge>Number.EPSILON?et>Number.EPSILON&&(je=!0):Ge<-Number.EPSILON?et<-Number.EPSILON&&(je=!0):Math.sign(He)===Math.sign(Be)&&(je=!0),je?(Ie=-He,Ee=Ge,Ze=Math.sqrt(G)):(Ie=Ge,Ee=He,Ze=Math.sqrt(G/2))}return new he(Ie/Ze,Ee/Ze)}let X=[];for(let ee=0,me=N.length,fe=me-1,Ie=ee+1;ee<me;ee++,fe++,Ie++)fe===me&&(fe=0),Ie===me&&(Ie=0),X[ee]=Y(N[ee],N[fe],N[Ie]);let $=[],J,ce=X.concat();for(let ee=0,me=A;ee<me;ee++){let fe=w[ee];J=[];for(let Ie=0,Ee=fe.length,Ze=Ee-1,Ge=Ie+1;Ie<Ee;Ie++,Ze++,Ge++)Ze===Ee&&(Ze=0),Ge===Ee&&(Ge=0),J[Ie]=Y(fe[Ie],fe[Ze],fe[Ge]);$.push(J),ce=ce.concat(J)}let ge;if(g===0)ge=Is.triangulateShape(N,w);else{let ee=[],me=[];for(let fe=0;fe<g;fe++){let Ie=fe/g,Ee=f*Math.cos(Ie*Math.PI/2),Ze=p*Math.sin(Ie*Math.PI/2)+b;for(let Ge=0,He=N.length;Ge<He;Ge++){let et=B(N[Ge],X[Ge],Ze);pe(et.x,et.y,-Ee),Ie===0&&ee.push(et)}for(let Ge=0,He=A;Ge<He;Ge++){let et=w[Ge];J=$[Ge];let Be=[];for(let G=0,bt=et.length;G<bt;G++){let je=B(et[G],J[G],Ze);pe(je.x,je.y,-Ee),Ie===0&&Be.push(je)}Ie===0&&me.push(Be)}}ge=Is.triangulateShape(ee,me)}let Q=ge.length,te=p+b;for(let ee=0;ee<k;ee++){let me=d?B(L[ee],ce[ee],te):L[ee];y?(x.copy(T.normals[0]).multiplyScalar(me.x),S.copy(T.binormals[0]).multiplyScalar(me.y),v.copy(_[0]).add(x).add(S),pe(v.x,v.y,v.z)):pe(me.x,me.y,0)}for(let ee=1;ee<=u;ee++)for(let me=0;me<k;me++){let fe=d?B(L[me],ce[me],te):L[me];y?(x.copy(T.normals[ee]).multiplyScalar(fe.x),S.copy(T.binormals[ee]).multiplyScalar(fe.y),v.copy(_[ee]).add(x).add(S),pe(v.x,v.y,v.z)):pe(fe.x,fe.y,h/u*ee)}for(let ee=g-1;ee>=0;ee--){let me=ee/g,fe=f*Math.cos(me*Math.PI/2),Ie=p*Math.sin(me*Math.PI/2)+b;for(let Ee=0,Ze=N.length;Ee<Ze;Ee++){let Ge=B(N[Ee],X[Ee],Ie);pe(Ge.x,Ge.y,h+fe)}for(let Ee=0,Ze=w.length;Ee<Ze;Ee++){let Ge=w[Ee];J=$[Ee];for(let He=0,et=Ge.length;He<et;He++){let Be=B(Ge[He],J[He],Ie);y?pe(Be.x,Be.y+_[u-1].y,_[u-1].x+fe):pe(Be.x,Be.y,h+fe)}}}O(),K();function O(){let ee=s.length/3;if(d){let me=0,fe=k*me;for(let Ie=0;Ie<Q;Ie++){let Ee=ge[Ie];ke(Ee[2]+fe,Ee[1]+fe,Ee[0]+fe)}me=u+g*2,fe=k*me;for(let Ie=0;Ie<Q;Ie++){let Ee=ge[Ie];ke(Ee[0]+fe,Ee[1]+fe,Ee[2]+fe)}}else{for(let me=0;me<Q;me++){let fe=ge[me];ke(fe[2],fe[1],fe[0])}for(let me=0;me<Q;me++){let fe=ge[me];ke(fe[0]+k*u,fe[1]+k*u,fe[2]+k*u)}}n.addGroup(ee,s.length/3-ee,0)}function K(){let ee=s.length/3,me=0;oe(N,me),me+=N.length;for(let fe=0,Ie=w.length;fe<Ie;fe++){let Ee=w[fe];oe(Ee,me),me+=Ee.length}n.addGroup(ee,s.length/3-ee,1)}function oe(ee,me){let fe=ee.length;for(;--fe>=0;){let Ie=fe,Ee=fe-1;Ee<0&&(Ee=ee.length-1);for(let Ze=0,Ge=u+g*2;Ze<Ge;Ze++){let He=k*Ze,et=k*(Ze+1),Be=me+Ie+He,G=me+Ee+He,bt=me+Ee+et,je=me+Ie+et;xe(Be,G,bt,je)}}}function pe(ee,me,fe){l.push(ee),l.push(me),l.push(fe)}function ke(ee,me,fe){Je(ee),Je(me),Je(fe);let Ie=s.length/3,Ee=M.generateTopUV(n,s,Ie-3,Ie-2,Ie-1);Oe(Ee[0]),Oe(Ee[1]),Oe(Ee[2])}function xe(ee,me,fe,Ie){Je(ee),Je(me),Je(Ie),Je(me),Je(fe),Je(Ie);let Ee=s.length/3,Ze=M.generateSideWallUV(n,s,Ee-6,Ee-3,Ee-2,Ee-1);Oe(Ze[0]),Oe(Ze[1]),Oe(Ze[3]),Oe(Ze[1]),Oe(Ze[2]),Oe(Ze[3])}function Je(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function Oe(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ug(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Cl[s.type]().fromJSON(s)),new i(n,e.options)}},Cg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],b=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-h),new he(d,1-p),new he(b,1-m)]:[new he(o,1-l),new he(u,1-h),new he(f,1-p),new he(g,1-m)]}};function Ug(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Hs=class i extends Il{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},gs=class i extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],p=[],b=[],g=[];for(let m=0;m<u;m++){let M=m*d-a;for(let _=0;_<c;_++){let y=_*h-r;p.push(y,-M,0),b.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let _=M+c*m,y=M+c*(m+1),T=M+1+c*(m+1),S=M+1+c*m;f.push(_,y,S),f.push(y,T,S)}this.setIndex(f),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(b,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Gs=class i extends gt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new U,p=new he;for(let b=0;b<=s;b++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let b=0;b<s;b++){let g=b*(n+1);for(let m=0;m<n;m++){let M=m+g,_=M,y=M+n+1,T=M+n+2,S=M+1;o.push(_,y,S),o.push(y,T,S)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ri=class i extends gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new U,d=new U,f=[],p=[],b=[],g=[];for(let m=0;m<=n;m++){let M=[],_=m/n,y=a+_*o,T=e*Math.cos(y),S=Math.sqrt(e*e-T*T),x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let v=0;v<=t;v++){let D=v/t,L=s+D*r;h.x=-S*Math.cos(L),h.y=T,h.z=S*Math.sin(L),p.push(h.x,h.y,h.z),d.copy(h).normalize(),b.push(d.x,d.y,d.z),g.push(D+x,1-_),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let _=u[m][M+1],y=u[m][M],T=u[m+1][M],S=u[m+1][M+1];(m!==0||a>0)&&f.push(_,y,S),(m!==n-1||l<Math.PI)&&f.push(y,T,S)}this.setIndex(f),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(b,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Pr=class i extends gt{constructor(e=new ka(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new he,u=new U,h=[],d=[],f=[],p=[];b(),this.setIndex(p),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function b(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),M(),m()}function g(_){u=e.getPointAt(_/t,u);let y=a.normals[_],T=a.binormals[_];for(let S=0;S<=s;S++){let x=S/s*Math.PI*2,v=Math.sin(x),D=-Math.cos(x);l.x=D*y.x+v*T.x,l.y=D*y.y+v*T.y,l.z=D*y.z+v*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let T=(s+1)*(_-1)+(y-1),S=(s+1)*_+(y-1),x=(s+1)*_+y,v=(s+1)*(_-1)+y;p.push(T,S,v),p.push(S,x,v)}}function M(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Cl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Hf(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Hf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=zs(i[t]);for(let s in n)e[s]=n[s]}return e}function Hf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Rn={clone:zs,merge:Tn},Bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=kg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new it().fromArray(s.value);break;case"m4":this.uniforms[n].value=new We().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lr=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tt=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ot,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rn=class extends Tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},wr=class extends mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ot,this.combine=io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Va=class extends mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Ya=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ot,this.combine=io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ir=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kl=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ls(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ga(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Gg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Gf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Og(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Pi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bl=class extends Pi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ah:r=e,o=2*t-n;break;case oh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ah:a=e,l=2*n-t;break;case oh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),b=p*p,g=b*p,m=-d*g+2*d*b-d*p,M=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*b+.5*p,y=f*g-f*b;for(let T=0;T!==o;++T)r[T]=m*a[u+T]+M*a[c+T]+_*a[l+T]+y*a[h+T];return r}},Hl=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},Gl=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ol=class extends Pi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),b=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*b+a[l+g]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let b=a[c+p],g=a[l+p],m=f*d+p*2,M=h[m],_=h[m+1],y=e*d+p*2,T=u[y],S=u[y+1],x=Xg(n,t,M,T,s);r[p]=Np(x,b,_,S,g)}return r}};function Np(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function qg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Xg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Np(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=qg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ls(t,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ls(e.times,Array),values:ls(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ga(e.settings)&&(n.settings={inTangents:ls(e.settings.inTangents,Array),outTangents:ls(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break;case sh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ga(this.settings)&&(Of(this.settings.inTangents,e),Of(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ga(this.settings)&&(qf(this.settings.inTangents,e),qf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){tt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&P0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let b=t[h+p];if(b!==t[d+p]||b!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ga(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Of(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function qf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Ns;var $i=class extends Nn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Ds;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};$a.prototype.ValueTypeName="color";var Qi=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Qi.prototype.ValueTypeName="number";var ql=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)_t.slerpFlat(r,0,a,c-o,a,c,l);return r}},zi=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};zi.prototype.ValueTypeName="quaternion";zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Nn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Ds;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};xs.prototype.ValueTypeName="vector";var Qa=class{constructor(e="",t=-1,n=[],s=gp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Yg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Nn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=Gg(l);l=Gf(l,1,u),c=Gf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Qi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Vg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return $a;case"quaternion":return zi;case"bool":case"boolean":return $i;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Yg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Vg(i.type);if(i.times===void 0){let n=[],s=[];Og(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ga(i.settings)&&(t.settings={inTangents:ls(i.settings.inTangents,Float32Array),outTangents:ls(i.settings.outTangents,Float32Array)}),t}var Si={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Xf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Xf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Xf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Xl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cp=new Xl,si=class{constructor(e){this.manager=e!==void 0?e:Cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};si.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xi={},dh=class extends Error{constructor(e,t){super(e),this.response=t}},Wi=class extends si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Si.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:s});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&$e("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Xi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,b=0,g=new ReadableStream({start(m){M();function M(){h.read().then(({done:_,value:y})=>{if(_)m.close();else{b+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:b,total:f});for(let S=0,x=u.length;S<x;S++){let v=u[S];v.onProgress&&v.onProgress(T)}m.enqueue(y),M()}},_=>{m.error(_)})}}});return new Response(g)}else throw new dh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Si.add(`file:${e}`,c);let u=Xi[e];delete Xi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var dr=new WeakMap,Vl=class extends si{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Si.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=dr.get(a);h===void 0&&(h=[],dr.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=yr("img");function l(){u(),t&&t(this);let h=dr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}dr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Si.remove(`image:${e}`);let d=dr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}dr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Si.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Cn=class extends si{constructor(e){super(e)}load(e,t,n,s){let r=new sn,a=new Vl(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Fr=class extends kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var th=new We,Vf=new U,Yf=new U,Dr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vf),Yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){th.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(th,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===br||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pl=new U,ml=new _t,vi=new U,za=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pl,ml,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pl,ml,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new U,$f=new he,Qf=new he,Xt=class extends za{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,$f,Qf),t.subVectors(Qf,$f)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fh=class extends Dr{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Cs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ja=class extends Fr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ph=class extends Dr{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},Os=class extends Fr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ph}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ji=class extends za{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mh=class extends Dr{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Un=class extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new mh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Jn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Wa=class extends gt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var nh=new WeakMap,ja=class extends si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&$e("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&$e("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Si.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{nh.has(a)===!0?(s&&s(nh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),nh.set(l,c),Si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Si.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fr=-90,pr=1,Nr=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(fr,pr,e,t);s.layers=this.layers,this.add(s);let r=new Xt(fr,pr,e,t);r.layers=this.layers,this.add(r);let a=new Xt(fr,pr,e,t);a.layers=this.layers,this.add(a);let o=new Xt(fr,pr,e,t);o.layers=this.layers,this.add(o);let l=new Xt(fr,pr,e,t);l.layers=this.layers,this.add(l);let c=new Xt(fr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Yl=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ka=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$g.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function $g(){this._document.hidden===!1&&this.reset()}var Vh="\\[\\]\\.:\\/",Qg=new RegExp("["+Vh+"]","g"),Yh="[^"+Vh+"]",zg="[^"+Vh.replace("\\.","")+"]",Jg=/((?:WC+[\/:])*)/.source.replace("WC",Yh),Wg=/(WCOD+)?/.source.replace("WCOD",zg),jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),Kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),Zg=new RegExp("^"+Jg+Wg+jg+Kg+"$"),ex=["material","materials","bones","map"],gh=class{constructor(e,t,n){let s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qg,"")}static parseTrackName(e){let t=Zg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ex.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=gh;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gv=new Float32Array(1);var zf=new We,Za=class{constructor(e,t,n=0,s=1/0){this.ray=new ds(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zf),this}intersectObject(e,t=!0,n=[]){return xh(e,this,n,t),n.sort(Jf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xh(e[s],this,n,t);return n.sort(Jf),n}};function Jf(i,e){return i.distance-e.distance}function xh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)xh(r[a],e,t,!0)}}var jh=class jh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};jh.prototype.isMatrix2=!0;var bh=jh;function $h(i,e,t,n){let s=tx(n);switch(t){case Lh:return i*e;case ec:return i*e/s.components*s.byteLength;case tc:return i*e/s.components*s.byteLength;case bs:return i*e*2/s.components*s.byteLength;case nc:return i*e*2/s.components*s.byteLength;case wh:return i*e*3/s.components*s.byteLength;case Bn:return i*e*4/s.components*s.byteLength;case ic:return i*e*4/s.components*s.byteLength;case uo:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:case oc:return Math.max(i,16)*Math.max(e,8)/4;case sc:case ac:return Math.max(i,8)*Math.max(e,8)/2;case lc:case cc:case hc:case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uc:case mo:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Lc:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ic:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case go:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tx(i){switch(i){case Sn:case Eh:return{byteLength:1,components:1};case Hr:case Ah:case zt:return{byteLength:2,components:1};case Kl:case Zl:return{byteLength:2,components:4};case xi:case jl:case Wn:return{byteLength:4,components:1};case Rh:case Ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function im(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ix(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],b=h[f];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++d,h[d]=b)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let b=h[f];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rx=`#ifdef USE_ALPHAHASH
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
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ux=`#ifdef USE_AOMAP
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
#endif`,hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dx=`#ifdef USE_BATCHING
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
#endif`,fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xx=`#ifdef USE_IRIDESCENCE
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
#endif`,bx=`#ifdef USE_BUMPMAP
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
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rx=`#define PI 3.141592653589793
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
} // validated`,Px=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vx=`#ifdef USE_GRADIENTMAP
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
}`,Yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eb=`PhysicalMaterial material;
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
#endif`,tb=`uniform sampler2D dfgLUT;
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
}`,nb=`
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
#endif`,ib=`#if defined( RE_IndirectDiffuse )
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
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fb=`#if defined( USE_POINTS_UV )
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
#endif`,pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
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
#endif`,bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
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
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ab=`#ifdef USE_NORMALMAP
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
#endif`,Rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qb=`float getShadowMask() {
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
}`,Xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vb=`#ifdef USE_SKINNING
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
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$b=`#ifdef USE_SKINNING
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
#endif`,Qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jb=`#ifdef USE_TRANSMISSION
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
#endif`,Kb=`#ifdef USE_TRANSMISSION
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform float backgroundBlurriness;
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
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
}`,u1=`#if DEPTH_PACKING == 3200
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
}`,h1=`#define DISTANCE
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
}`,d1=`#define DISTANCE
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
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
}`,g1=`uniform vec3 diffuse;
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
}`,x1=`#include <common>
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
}`,b1=`uniform vec3 diffuse;
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
}`,y1=`#define LAMBERT
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
}`,M1=`#define LAMBERT
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
}`,_1=`#define MATCAP
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
}`,v1=`#define MATCAP
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
}`,S1=`#define NORMAL
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
}`,T1=`#define NORMAL
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
}`,E1=`#define PHONG
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
}`,A1=`#define PHONG
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
}`,R1=`#define STANDARD
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
}`,P1=`#define STANDARD
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
}`,L1=`#define TOON
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
}`,w1=`#define TOON
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
}`,I1=`uniform float size;
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
}`,F1=`uniform vec3 diffuse;
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
}`,D1=`#include <common>
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
}`,N1=`uniform vec3 color;
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
}`,C1=`uniform float rotation;
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
}`,U1=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:sx,alphahash_pars_fragment:rx,alphamap_fragment:ax,alphamap_pars_fragment:ox,alphatest_fragment:lx,alphatest_pars_fragment:cx,aomap_fragment:ux,aomap_pars_fragment:hx,batching_pars_vertex:dx,batching_vertex:fx,begin_vertex:px,beginnormal_vertex:mx,bsdfs:gx,iridescence_fragment:xx,bumpmap_pars_fragment:bx,clipping_planes_fragment:yx,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:_x,clipping_planes_vertex:vx,color_fragment:Sx,color_pars_fragment:Tx,color_pars_vertex:Ex,color_vertex:Ax,common:Rx,defaultnormal_vertex:Px,displacementmap_pars_vertex:Lx,displacementmap_vertex:wx,emissivemap_fragment:Ix,emissivemap_pars_fragment:Fx,colorspace_fragment:Dx,colorspace_pars_fragment:Nx,envmap_fragment:Cx,envmap_common_pars_fragment:Ux,envmap_pars_fragment:kx,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:Jx,envmap_vertex:Hx,fog_vertex:Gx,fog_pars_vertex:Ox,fog_fragment:qx,fog_pars_fragment:Xx,gradientmap_pars_fragment:Vx,lightmap_pars_fragment:Yx,lights_lambert_fragment:$x,lights_lambert_pars_fragment:Qx,lights_pars_begin:zx,lights_toon_fragment:Wx,lights_toon_pars_fragment:jx,lights_phong_fragment:Kx,lights_phong_pars_fragment:Zx,lights_physical_fragment:eb,lights_physical_pars_fragment:tb,lights_fragment_begin:nb,lights_fragment_maps:ib,lights_fragment_end:sb,lightprobes_pars_fragment:rb,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:ob,logdepthbuf_pars_vertex:lb,logdepthbuf_vertex:cb,map_fragment:ub,map_pars_fragment:hb,map_particle_fragment:db,map_particle_pars_fragment:fb,metalnessmap_fragment:pb,metalnessmap_pars_fragment:mb,morphinstance_vertex:gb,morphcolor_vertex:xb,morphnormal_vertex:bb,morphtarget_pars_vertex:yb,morphtarget_vertex:Mb,normal_fragment_begin:_b,normal_fragment_maps:vb,normal_pars_fragment:Sb,normal_pars_vertex:Tb,normal_vertex:Eb,normalmap_pars_fragment:Ab,clearcoat_normal_fragment_begin:Rb,clearcoat_normal_fragment_maps:Pb,clearcoat_pars_fragment:Lb,iridescence_pars_fragment:wb,opaque_fragment:Ib,packing:Fb,premultiplied_alpha_fragment:Db,project_vertex:Nb,dithering_fragment:Cb,dithering_pars_fragment:Ub,roughnessmap_fragment:kb,roughnessmap_pars_fragment:Bb,shadowmap_pars_fragment:Hb,shadowmap_pars_vertex:Gb,shadowmap_vertex:Ob,shadowmask_pars_fragment:qb,skinbase_vertex:Xb,skinning_pars_vertex:Vb,skinning_vertex:Yb,skinnormal_vertex:$b,specularmap_fragment:Qb,specularmap_pars_fragment:zb,tonemapping_fragment:Jb,tonemapping_pars_fragment:Wb,transmission_fragment:jb,transmission_pars_fragment:Kb,uv_pars_fragment:Zb,uv_pars_vertex:e1,uv_vertex:t1,worldpos_vertex:n1,background_vert:i1,background_frag:s1,backgroundCube_vert:r1,backgroundCube_frag:a1,cube_vert:o1,cube_frag:l1,depth_vert:c1,depth_frag:u1,distance_vert:h1,distance_frag:d1,equirect_vert:f1,equirect_frag:p1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:x1,meshbasic_frag:b1,meshlambert_vert:y1,meshlambert_frag:M1,meshmatcap_vert:_1,meshmatcap_frag:v1,meshnormal_vert:S1,meshnormal_frag:T1,meshphong_vert:E1,meshphong_frag:A1,meshphysical_vert:R1,meshphysical_frag:P1,meshtoon_vert:L1,meshtoon_frag:w1,points_vert:I1,points_frag:F1,shadow_vert:D1,shadow_frag:N1,sprite_vert:C1,sprite_frag:U1},Ue={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Fi={basic:{uniforms:Tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Tn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Tn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Tn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Tn([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Tn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Tn([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Tn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Tn([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Tn([Ue.common,Ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Tn([Ue.lights,Ue.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Fi.physical={uniforms:Tn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Uc={r:0,b:0,g:0},k1=new We,sm=new it;sm.set(-1,0,0,0,1,0,0,0,1);function B1(i,e,t,n,s,r){let a=new de(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(M){let _=M.isScene===!0?M.background:null;if(_&&_.isTexture){let y=M.backgroundBlurriness>0;_=e.get(_,y)}return _}function p(M){let _=!1,y=f(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),_=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(M,_){let y=f(_);y&&y.isCubeTexture?(c===void 0&&(c=new Ve(new ms(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:zs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sm),c.material.toneMapped=lt.getTransfer(y.colorSpace)!==Et,(u!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ve(new gs(2,2),new Ct({name:"BackgroundMaterial",uniforms:zs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,_){M.getRGB(Uc,Xh(i)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,_,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),o=_,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:p,addToRenderList:b,dispose:m}}function H1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(w,P,I,A,N){let B=!1,k=h(w,A,I,P);r!==k&&(r=k,c(r.object)),B=f(w,A,I,N),B&&p(w,A,I,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(w,P,I,A),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,P,I,A){let N=A.wireframe===!0,B=n[P.id];B===void 0&&(B={},n[P.id]=B);let k=w.isInstancedMesh===!0?w.id:0,Y=B[k];Y===void 0&&(Y={},B[k]=Y);let X=Y[I.id];X===void 0&&(X={},Y[I.id]=X);let $=X[N];return $===void 0&&($=d(l()),X[N]=$),$}function d(w){let P=[],I=[],A=[];for(let N=0;N<t;N++)P[N]=0,I[N]=0,A[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:A,object:w,attributes:{},index:null}}function f(w,P,I,A){let N=r.attributes,B=P.attributes,k=0,Y=I.getAttributes();for(let X in Y)if(Y[X].location>=0){let J=N[X],ce=B[X];if(ce===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;k++}return r.attributesNum!==k||r.index!==A}function p(w,P,I,A){let N={},B=P.attributes,k=0,Y=I.getAttributes();for(let X in Y)if(Y[X].location>=0){let J=B[X];J===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(J=w.instanceColor));let ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),N[X]=ce,k++}r.attributes=N,r.attributesNum=k,r.index=A}function b(){let w=r.newAttributes;for(let P=0,I=w.length;P<I;P++)w[P]=0}function g(w){m(w,0)}function m(w,P){let I=r.newAttributes,A=r.enabledAttributes,N=r.attributeDivisors;I[w]=1,A[w]===0&&(i.enableVertexAttribArray(w),A[w]=1),N[w]!==P&&(i.vertexAttribDivisor(w,P),N[w]=P)}function M(){let w=r.newAttributes,P=r.enabledAttributes;for(let I=0,A=P.length;I<A;I++)P[I]!==w[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function _(w,P,I,A,N,B,k){k===!0?i.vertexAttribIPointer(w,P,I,N,B):i.vertexAttribPointer(w,P,I,A,N,B)}function y(w,P,I,A){b();let N=A.attributes,B=I.getAttributes(),k=P.defaultAttributeValues;for(let Y in B){let X=B[Y];if(X.location>=0){let $=N[Y];if($===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),$!==void 0){let J=$.normalized,ce=$.itemSize,ge=e.get($);if(ge===void 0)continue;let Q=ge.buffer,te=ge.type,O=ge.bytesPerElement,K=te===i.INT||te===i.UNSIGNED_INT||$.gpuType===jl;if($.isInterleavedBufferAttribute){let oe=$.data,pe=oe.isInterleavedBuffer===!0?oe.stride:oe.itemSize,ke=$.offset;if(oe.isInstancedInterleavedBuffer||oe.isInstancedBufferAttribute){for(let xe=0;xe<X.locationSize;xe++)m(X.location+xe,oe.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let xe=0;xe<X.locationSize;xe++)g(X.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let xe=0;xe<X.locationSize;xe++)_(X.location+xe,ce/X.locationSize,te,J,pe*O,(ke+ce/X.locationSize*xe)*O,K)}else{if($.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)m(X.location+oe,$.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<X.locationSize;oe++)g(X.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let oe=0;oe<X.locationSize;oe++)_(X.location+oe,ce/X.locationSize,te,J,ce*O,ce/X.locationSize*oe*O,K)}}else if(k!==void 0){let J=k[Y];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(X.location,J);break;case 3:i.vertexAttrib3fv(X.location,J);break;case 4:i.vertexAttrib4fv(X.location,J);break;default:i.vertexAttrib1fv(X.location,J)}}}}M()}function T(){D();for(let w in n){let P=n[w];for(let I in P){let A=P[I];for(let N in A){let B=A[N];for(let k in B)u(B[k].object),delete B[k];delete A[N]}}delete n[w]}}function S(w){if(n[w.id]===void 0)return;let P=n[w.id];for(let I in P){let A=P[I];for(let N in A){let B=A[N];for(let k in B)u(B[k].object),delete B[k];delete A[N]}}delete n[w.id]}function x(w){for(let P in n){let I=n[P];for(let A in I){let N=I[A];if(N[w.id]===void 0)continue;let B=N[w.id];for(let k in B)u(B[k].object),delete B[k];delete N[w.id]}}}function v(w){for(let P in n){let I=n[P],A=w.isInstancedMesh===!0?w.id:0,N=I[A];if(N!==void 0){for(let B in N){let k=N[B];for(let Y in k)u(k[Y].object),delete k[Y];delete N[B]}delete I[A],Object.keys(I).length===0&&delete n[P]}}}function D(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:g,disableUnusedAttributes:M}}function G1(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function O1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Bn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let v=x===zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Sn&&x!==Wn&&!v&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,maxSamples:T,samples:S}}function q1(i){let e=this,t=null,n=0,s=!1,r=!1,a=new pi,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,b=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let M=r?0:n,_=M*4,y=m.clippingState||null;l.value=y,y=u(p,d,_,f);for(let T=0;T!==_;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let b=h!==null?h.length:0,g=null;if(b!==0){if(g=l.value,p!==!0||g===null){let m=f+b*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,y=f;_!==b;++_,y+=4)a.copy(h[_]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var Mo=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ms(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:fn});r.uniforms.tEquirect.value=t;let a=new Ve(s,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=tn),new Nr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Up=256,X1=3,V1=20,rm=256,am=16,Y1=3,$1=new U,Q1=new de,Di=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Nr(1,10,null),this._boxMesh=new Ve(new ms(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=$1}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(Q1));let g=new Nr(n,s,u);return g.position.copy(o),g.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=b,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Up,Hh(e))}_fromTexture(e,t){e.mapping===Ys||e.mapping===kr?this._setSize(e.image.length===0?Up:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=kp(e,!1,!1),n=Math.log2(e)-X1;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=kp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ys||e.mapping===kr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=z1(),this._integrationMaterial=J1());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/am);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Y1)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(rm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=W1());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function kp(i,e,t){return new Mo(i,{minFilter:kn,generateMipmaps:e,type:zt,colorSpace:nn,depthBuffer:t})}function _o(i,e,t){return new Ct({name:i,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:an,blending:fn,depthTest:!1,depthWrite:!1})}function z1(){return _o("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rm}u

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
	`)}function J1(){return _o("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:am}},`

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
	`)}function W1(){return _o("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${V1}
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
	`)}function Bp(){return _o("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Hp(){return _o("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function j1(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===zl||f===Jl)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let b=new Mo(p.height);return b.fromEquirectangularTexture(i,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===zl||f===Jl,b=f===Ys||f===kr;if(p||b){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Di(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return p&&M&&M.height>0||b&&M&&l(M)?(n===null&&(n=new Di(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===zl?d.mapping=Ys:f===Jl&&(d.mapping=kr),d}function l(d){let f=0,p=6;for(let b=0;b<p;b++)d[b]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function K1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Z1(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let b=r.get(p);b&&(e.remove(b),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function u(p){let b=p.attributes;for(let g in b)e.update(b[g],i.ARRAY_BUFFER)}function h(p){let b=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let M=b!==null?b.array.length:g.array.length/3-1,_=g.count>=65535?Aa:Ea,y=new _(Math.ceil(M/3)*6,1),T=y.array;if(b!==null){let x=b.array;m=b.version;for(let v=0,D=0;v<M;v+=3){let L=x[v+0],w=x[v+1],P=x[v+2];T[D++]=L,T[D++]=w,T[D++]=w,T[D++]=P,T[D++]=P,T[D++]=L}}else{m=g.version;for(let x=0,v=0;x<M;x+=3){let D=x+0,L=x+1,w=x+2;T[v++]=D,T[v++]=L,T[v++]=L,T[v++]=w,T[v++]=w,T[v++]=D}}y.version=m;let S=r.get(p);S&&e.remove(S),r.set(p,y)}function d(p){let b=r.get(p);if(b){let g=p.index;g!==null&&b.version<g.version&&h(p)}else h(p);return r.get(p)}function f(){for(let p in s){let b=s[p].deref();b!==void 0&&l(b)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function ey(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let b=0;for(let g=0;g<f;g++)b+=d[g];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ty(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ny(i,e,t){let n=new WeakMap,s=new St;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let D=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),b===!0&&(_=3);let y=o.attributes.position.count*_,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*T*4*h),x=new Sa(S,y,T,h);x.type=Wn,x.needsUpdate=!0;let v=_*4;for(let L=0;L<h;L++){let w=g[L],P=m[L],I=M[L],A=y*T*4*L;for(let N=0;N<w.count;N++){let B=N*v;f===!0&&(s.fromBufferAttribute(w,N),S[A+B+0]=s.x,S[A+B+1]=s.y,S[A+B+2]=s.z,S[A+B+3]=0),p===!0&&(s.fromBufferAttribute(P,N),S[A+B+4]=s.x,S[A+B+5]=s.y,S[A+B+6]=s.z,S[A+B+7]=0),b===!0&&(s.fromBufferAttribute(I,N),S[A+B+8]=s.x,S[A+B+9]=s.y,S[A+B+10]=s.z,S[A+B+11]=I.itemSize===4?s.w:1)}}d={count:h,texture:x,size:new he(y,T)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function iy(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var sy={[so]:"LINEAR_TONE_MAPPING",[ro]:"REINHARD_TONE_MAPPING",[ao]:"CINEON_TONE_MAPPING",[Vs]:"ACES_FILMIC_TONE_MAPPING",[lo]:"AGX_TONE_MAPPING",[co]:"NEUTRAL_TONE_MAPPING",[oo]:"CUSTOM_TONE_MAPPING"};function ry(i,e,t,n,s,r){let a=new Gt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new gt;u.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ft([0,2,0,0,2,0],2));let h=new Lr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ve(u,h),f=new ji(-1,1,1,-1,0,1),p=null,b=null,g=!1,m,M=null,_=[],y=!1;this.setSize=function(T,S){a.setSize(T,S),o!==null&&o.setSize(T,S),l!==null&&l.setSize(T,S);for(let x=0;x<_.length;x++){let v=_[x];v.setSize&&v.setSize(T,S)}},this.setEffects=function(T){_=T,y=_.length>0&&_[0].isRenderPass===!0;let S=a.width,x=a.height;_.length>0&&o===null&&(o=new Gt(S,x,{type:zt,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(S,x,{type:zt,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&_.some(D=>D.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new gi(S,x),r===!0&&(c.format=bi,c.type=Ki)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let D=0;D<_.length;D++){let L=_[D];L.setSize&&L.setSize(S,x),v&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(T,S){if(g||T.toneMapping===wi&&_.length===0)return!1;if(M=S,S!==null){let x=S.width,v=S.height;(a.width!==x||a.height!==v)&&this.setSize(x,v)}return y===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=wi,!0},this.hasRenderPass=function(){return y},this.end=function(T,S){T.toneMapping=m,g=!0;let x=a,v=o;for(let D=0;D<_.length;D++){let L=_[D];L.enabled!==!1&&(L.render(T,v,x,S),L.needsSwap!==!1&&(x=v,v=v===o?l:o))}if(p!==T.outputColorSpace||b!==T.toneMapping){p=T.outputColorSpace,b=T.toneMapping,h.defines={},lt.getTransfer(p)===Et&&(h.defines.SRGB_TRANSFER="");let D=sy[b];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(M),T.render(d,f),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var om=new sn,lm=new gi(1,1),cm=new Ia(1),um=new Sa,hm=new Rl,dm=new wa,Gp=[],Op=[],qp=new Float32Array(16),Xp=new Float32Array(9),Vp=new Float32Array(4);function qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gp[s];if(r===void 0&&(r=new Float32Array(s),Gp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hc(i,e){let t=Op[e];t===void 0&&(t=new Int32Array(e),Op[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ay(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function uy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Vp.set(n),i.uniformMatrix2fv(this.addr,!1,Vp),ln(t,n)}}function hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Xp.set(n),i.uniformMatrix3fv(this.addr,!1,Xp),ln(t,n)}}function dy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;qp.set(n),i.uniformMatrix4fv(this.addr,!1,qp),ln(t,n)}}function fy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function xy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function by(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function Gc(i){return i.version===0&&(i.compareFunction=Ch,i.needsUpdate=!0),i}function _y(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Gc(lm):r=om,t.setTexture2D(e||r,s)}function vy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hm,s)}function Sy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Gc(cm):r=dm,t.setTextureCube(e||r,s)}function Ty(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||um,s)}function Ey(i){switch(i){case 5126:return ay;case 35664:return oy;case 35665:return ly;case 35666:return cy;case 35674:return uy;case 35675:return hy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return xy;case 36294:return by;case 36295:return yy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return Ty}}function Ay(i,e){i.uniform1fv(this.addr,e)}function Ry(i,e){let t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}function Py(i,e){let t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ly(i,e){let t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}function wy(i,e){let t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Iy(i,e){let t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fy(i,e){let t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dy(i,e){i.uniform1iv(this.addr,e)}function Ny(i,e){i.uniform2iv(this.addr,e)}function Cy(i,e){i.uniform3iv(this.addr,e)}function Uy(i,e){i.uniform4iv(this.addr,e)}function ky(i,e){i.uniform1uiv(this.addr,e)}function By(i,e){i.uniform2uiv(this.addr,e)}function Hy(i,e){i.uniform3uiv(this.addr,e)}function Gy(i,e){i.uniform4uiv(this.addr,e)}function Oy(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gc(lm):a=om;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function qy(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hm,r[a])}function Xy(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Gc(cm):a=dm;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Vy(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||um,r[a])}function Yy(i){switch(i){case 5126:return Ay;case 35664:return Ry;case 35665:return Py;case 35666:return Ly;case 35674:return wy;case 35675:return Iy;case 35676:return Fy;case 5124:case 35670:return Dy;case 35667:case 35671:return Ny;case 35668:case 35672:return Cy;case 35669:case 35673:return Uy;case 5125:return ky;case 36294:return By;case 36295:return Hy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return Vy}}var ed=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ey(t.type)}},td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yy(t.type)}},nd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Kh=/(\w+)(\])?(\[|\.)?/g;function Yp(i,e){i.seq.push(e),i.map[e.id]=e}function $y(i,e,t){let n=i.name,s=n.length;for(Kh.lastIndex=0;;){let r=Kh.exec(n),a=Kh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Yp(t,c===void 0?new ed(o,i,e):new td(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new nd(o),Yp(t,h)),t=h}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$y(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function $p(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Qy=37297,zy=0;function Jy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Qp=new it;function Wy(i){lt._getMatrix(Qp,lt.workingColorSpace,i);let e=`mat3( ${Qp.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case _a:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Jy(i.getShaderSource(e),o)}else return r}function jy(i,e){let t=Wy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ky={[so]:"Linear",[ro]:"Reinhard",[ao]:"Cineon",[Vs]:"ACESFilmic",[lo]:"AgX",[co]:"Neutral",[oo]:"Custom"};function Zy(i,e){let t=Ky[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kc=new U;function eM(){lt.getLuminanceCoefficients(kc);let i=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function nM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function yo(i){return i!==""}function Jp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Wp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sM=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(i){return i.replace(sM,rM)}function rM(i,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return id(t)}var aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jp(i){return i.replace(aM,oM)}function oM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var lM={[qs]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function cM(i){return lM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uM={[kr]:"ENVMAP_MODE_REFRACTION"};function hM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dM={[io]:"ENVMAP_BLENDING_MULTIPLY",[fp]:"ENVMAP_BLENDING_MIX",[pp]:"ENVMAP_BLENDING_ADD"};function fM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dM[i.combine]||"ENVMAP_BLENDING_NONE"}function pM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=cM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=hM(t),h=fM(t),d=tM(t),f=nM(r),p=s.createProgram(),b,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(yo).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(yo).join(`
`),g.length>0&&(g+=`
`)):(b=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),g=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ht.tonemapping_pars_fragment:"",t.toneMapping!==wi?Zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,jy("linearToOutputTexel",t.outputColorSpace),eM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),a=id(a),a=Jp(a,t),a=Wp(a,t),o=id(o),o=Jp(o,t),o=Wp(o,t),a=jp(a),o=jp(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=m+b+a,_=m+g+o,y=$p(s,s.VERTEX_SHADER,M),T=$p(s,s.FRAGMENT_SHADER,_);s.attachShader(p,y),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(L){if(i.debug.checkShaderErrors){let w=s.getProgramInfoLog(p)||"",P=s.getShaderInfoLog(y)||"",I=s.getShaderInfoLog(T)||"",A=w.trim(),N=P.trim(),B=I.trim(),k=!0,Y=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,T);else{let X=zp(s,y,"vertex"),$=zp(s,T,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+A+`
`+X+`
`+$)}else A!==""?$e("WebGLProgram: Program Info Log:",A):(N===""||B==="")&&(Y=!1);Y&&(L.diagnostics={runnable:k,programLog:A,vertexShader:{log:N,prefix:b},fragmentShader:{log:B,prefix:g}})}s.deleteShader(y),s.deleteShader(T),x=new Or(s,p),v=iM(s,p)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,Qy)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}var mM=0,sd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rd(e),t.set(e,n)),n}},rd=class{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}};function gM(i){return i===bs||i===mo||i===go}function xM(i,e,t,n,s,r){let a=new vr,o=new sd,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,v,D,L,w,P){let I=L.fog,A=w.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||N,B),Y=d[x.type],X=n.precision;x.precision!==null&&(X=n.getMaxPrecision(x.precision),X!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let $=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,J=$!==void 0?$.length:0,ce=0;A.morphAttributes.position!==void 0&&(ce=1),A.morphAttributes.normal!==void 0&&(ce=2),A.morphAttributes.color!==void 0&&(ce=3);let ge,Q,te,O;if(Y){let De=Fi[Y];ge=De.vertexShader,Q=De.fragmentShader}else{ge=x.vertexShader,Q=x.fragmentShader;let De=o.getVertexShaderStage(x),vt=o.getFragmentShaderStage(x);o.update(x,De,vt),te=De.id,O=vt.id}let K=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),pe=w.isInstancedMesh===!0,ke=w.isBatchedMesh===!0,xe=!!x.map,Je=!!x.matcap,Oe=!!k,ee=Oe&&k.isPMREMTexture===!0,me=!!x.aoMap,fe=!!x.lightMap,Ie=!!x.bumpMap&&x.wireframe===!1,Ee=!!x.normalMap,Ze=!!x.displacementMap,Ge=!!x.emissiveMap,He=!!x.metalnessMap,et=!!x.roughnessMap,Be=x.anisotropy>0,G=x.clearcoat>0,bt=x.diffuseRoughness>0,je=x.dispersion>0,st=x.retroreflectivity>0,be=x.iridescence>0,At=x.sheen>0,Xe=x.transmission>0,Qe=Be&&!!x.anisotropyMap,C=G&&!!x.clearcoatMap,E=G&&!!x.clearcoatNormalMap,z=G&&!!x.clearcoatRoughnessMap,ye=bt&&!!x.diffuseRoughnessMap,ue=be&&!!x.iridescenceMap,Se=be&&!!x.iridescenceThicknessMap,Ae=At&&!!x.sheenColorMap,se=At&&!!x.sheenRoughnessMap,re=!!x.specularMap,Te=!!x.specularColorMap,H=!!x.specularIntensityMap,le=Xe&&!!x.transmissionMap,ne=Xe&&!!x.thicknessMap,Pe=!!x.gradientMap,_e=!!x.alphaMap,Re=x.alphaTest>0,Fe=!!x.alphaHash,at=!!x.extensions,Me=wi;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Me=i.toneMapping);let ze=ee?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,ot={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:ge,fragmentShader:Q,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:O,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:ke,batchingColor:ke&&w._colorsTexture!==null,instancing:pe,instancingColor:pe&&w.instanceColor!==null,instancingMorph:pe&&w.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xe,matcap:Je,envMap:Oe,envMapMode:Oe&&k.mapping,envMapPMREM:ee,envMapMaxLod:ee?ze.length-1:null,envMapSize:ee?ze[0].width:null,aoMap:me,lightMap:fe,bumpMap:Ie,normalMap:Ee,displacementMap:Ze,emissiveMap:Ge,normalMapObjectSpace:Ee&&x.normalMapType===bp,normalMapTangentSpace:Ee&&x.normalMapType===Qs,packedNormalMap:Ee&&x.normalMapType===Qs&&gM(x.normalMap.format),metalnessMap:He,roughnessMap:et,anisotropy:Be,anisotropyMap:Qe,clearcoat:G,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:z,diffuseRoughness:bt,diffuseRoughnessMap:ye,dispersion:je,retroreflection:st,iridescence:be,iridescenceMap:ue,iridescenceThicknessMap:Se,sheen:At,sheenColorMap:Ae,sheenRoughnessMap:se,specularMap:re,specularColorMap:Te,specularIntensityMap:H,transmission:Xe,transmissionMap:le,thicknessMap:ne,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===Ur&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:Re,alphaHash:Fe,combine:x.combine,mapUv:xe&&f(x.map.channel),aoMapUv:me&&f(x.aoMap.channel),lightMapUv:fe&&f(x.lightMap.channel),bumpMapUv:Ie&&f(x.bumpMap.channel),normalMapUv:Ee&&f(x.normalMap.channel),displacementMapUv:Ze&&f(x.displacementMap.channel),emissiveMapUv:Ge&&f(x.emissiveMap.channel),metalnessMapUv:He&&f(x.metalnessMap.channel),roughnessMapUv:et&&f(x.roughnessMap.channel),anisotropyMapUv:Qe&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:se&&f(x.sheenRoughnessMap.channel),specularMapUv:re&&f(x.specularMap.channel),specularColorMapUv:Te&&f(x.specularColorMap.channel),specularIntensityMapUv:H&&f(x.specularIntensityMap.channel),transmissionMapUv:le&&f(x.transmissionMap.channel),thicknessMapUv:ne&&f(x.thicknessMap.channel),alphaMapUv:_e&&f(x.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Ee||Be),vertexNormals:!!A.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!A.attributes.uv&&(xe||_e),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||A.attributes.normal===void 0&&Ee===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:w.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ce,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:P.filter(De=>De.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===Et,decodeVideoTextureEmissive:Ge&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Yt,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function b(x){let v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)v.push(D),v.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(v,x),m(v,x),v.push(i.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function g(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapPMREM),x.push(v.envMapMaxLod),x.push(v.envMapSize),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.diffuseRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.numSunLights),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numSunLightShadows),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.numLightProbeGrids),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function m(x,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let v=d[x.type],D;if(v){let L=Fi[v];D=Rn.clone(L.uniforms)}else D=x.uniforms;return D}function _(x,v){let D=u.get(v);return D!==void 0?++D.usedTimes:(D=new pM(i,v,x,s),c.push(D),u.set(v,D)),D}function y(x){if(--x.usedTimes===0){let v=c.indexOf(x);c[v]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function S(){o.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:M,acquireProgram:_,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:S}}function bM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function yM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function em(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,b,g,m){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:m},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=a(d),M.groupOrder=b,M.renderOrder=d.renderOrder,M.z=g,M.group=m),e++,M}function l(d,f,p,b,g,m,M){M.reversedDepth===!0&&(g=-g);let _=o(d,f,p,b,g,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function c(d,f,p,b,g,m){let M=o(d,f,p,b,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):t.unshift(M)}function u(d,f){t.length>1&&t.sort(d||yM),n.length>1&&n.sort(f||Zp),s.length>1&&s.sort(f||Zp)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function MM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new em,i.set(n,[a])):s>=r.length?(a=new em,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function _M(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new de};break;case"SpotLight":t={position:new U,direction:new U,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function vM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var SM=0;function TM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function EM(i){let e=new _M,t=vM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new We,a=new We;function o(c){let u=0,h=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,p=0,b=0,g=0,m=0,M=0,_=0,y=0,T=0,S=0,x=0,v=0,D=0,L=0;c.sort(TM);for(let P=0,I=c.length;P<I;P++){let A=c[P],N=A.color,B=A.intensity,k=A.distance,Y=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===bs?Y=A.shadow.map.texture:Y=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=N.r*B,h+=N.g*B,d+=N.b*B;else if(A.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(A.sh.coefficients[X],B);L++}else if(A.isSunLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let $=A.shadow,J=t.get(A);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=Y;let ce=$.getViewportCount();for(let ge=0;ge<ce;ge++)n.sunShadowMatrix[b+ge]=$.getMatrix(ge),n.sunShadowCascade[b+ge]=$._cascadeData[ge];b+=ce,p++}n.sun[f]=X,f++}else if(A.isDirectionalLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let $=A.shadow,J=t.get(A);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=A.shadow.matrix,T++}n.directional[g]=X,g++}else if(A.isSpotLight){let X=e.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(N).multiplyScalar(B),X.distance=k,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,n.spot[M]=X;let $=A.shadow;if(A.map&&(n.spotLightMap[v]=A.map,v++,$.updateMatrices(A),A.castShadow&&D++),n.spotLightMatrix[M]=$.matrix,A.castShadow){let J=t.get(A);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=Y,x++}M++}else if(A.isRectAreaLight){let X=e.get(A);X.color.copy(N).multiplyScalar(B),X.halfWidth.set(A.width*.5,0,0),X.halfHeight.set(0,A.height*.5,0),n.rectArea[_]=X,_++}else if(A.isPointLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){let $=A.shadow,J=t.get(A);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=A.shadow.matrix,S++}n.point[m]=X,m++}else if(A.isHemisphereLight){let X=e.get(A);X.skyColor.copy(A.color).multiplyScalar(B),X.groundColor.copy(A.groundColor).multiplyScalar(B),n.hemi[y]=X,y++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let w=n.hash;(w.sunLength!==f||w.directionalLength!==g||w.pointLength!==m||w.spotLength!==M||w.rectAreaLength!==_||w.hemiLength!==y||w.numSunShadows!==p||w.numDirectionalShadows!==T||w.numPointShadows!==S||w.numSpotShadows!==x||w.numSpotMaps!==v||w.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=_,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+v-D,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=L,w.sunLength=f,w.directionalLength=g,w.pointLength=m,w.spotLength=M,w.rectAreaLength=_,w.hemiLength=y,w.numSunShadows=p,w.numDirectionalShadows=T,w.numPointShadows=S,w.numSpotShadows=x,w.numSpotMaps=v,w.numLightProbes=L,n.version=SM++)}function l(c,u){let h=0,d=0,f=0,p=0,b=0,g=0,m=u.matrixWorldInverse;for(let M=0,_=c.length;M<_;M++){let y=c[M];if(y.isSunLight){let T=n.sun[h];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),h++}else if(y.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(y.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let T=n.rectArea[b];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),b++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let T=n.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function tm(i){let e=new EM(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){n.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function AM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new tm(i),e.set(s,[o])):r>=a.length?(o=new tm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PM=`uniform sampler2D shadow_pass;
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
}`,LM=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],wM=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],nm=new We,bo=new U,Zh=new U;function IM(i,e,t){let n=new fs,s=new he,r=new he,a=new St,o=new Ir,l=new kl,c={},u=t.maxTextureSize,h={[Li]:an,[an]:Li,[Yt]:Yt},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:RM,fragmentShader:PM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new gt;p.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ve(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let m=this.type;this.render=function(S,x,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Kf&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);let D=i.getRenderTarget(),L=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),P=i.state;P.setBlending(fn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let I=m!==this.type;I&&x.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(N=>N.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,N=S.length;A<N;A++){let B=S[A],k=B.shadow;if(k===void 0){$e("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Y=k.getFrameExtents();s.multiply(Y),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,k.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||I===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Cr){if(B.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Gt(s.x,s.y,{format:bs,type:zt,minFilter:tn,magFilter:tn,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new gi(s.x,s.y,Wn),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=Yi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ht,k.map.depthTexture.magFilter=Ht}else B.isPointLight?(k.map=new Mo(s.x),k.map.depthTexture=new Ia(s.x,xi)):(k.map=new Gt(s.x,s.y),k.map.depthTexture=new gi(s.x,s.y,xi)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=Yi,this.type===qs?(k.map.depthTexture.compareFunction=X?Nh:Dh,k.map.depthTexture.minFilter=tn,k.map.depthTexture.magFilter=tn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ht,k.map.depthTexture.magFilter=Ht);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let $=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();B.isPointLight!==!0&&k.updateMatrices(B,v);let J=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:v.layers;for(let ce=0;ce<$;ce++){let ge=k.getCamera(ce);if(B.isPointLight){let Q=k.camera,te=k.matrix,O=B.distance||Q.far;O!==Q.far&&(Q.far=O,Q.updateProjectionMatrix()),bo.setFromMatrixPosition(B.matrixWorld),Q.position.copy(bo),Zh.copy(Q.position),Zh.add(LM[ce]),Q.up.copy(wM[ce]),Q.lookAt(Zh),Q.updateMatrixWorld(),te.makeTranslation(-bo.x,-bo.y,-bo.z),nm.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),k._frustum.setFromProjectionMatrix(nm,Q.coordinateSystem,Q.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(k.map),i.clear());let Q=k.getViewport(ce);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),P.viewport(a)}n=k.getFrustum(ce),y(x,v,ge,B,J,this.type)}k.isPointLightShadow!==!0&&this.type===Cr&&M(k,v),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(D,L,w)};function M(S,x){let v=e.update(b);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Gt(s.x,s.y,{format:bs,type:zt}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(x,null,v,d,b,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(x,null,v,f,b,null)}function _(S,x,v,D){let L=null,w=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)L=w;else if(L=v.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let P=L.uuid,I=x.uuid,A=c[P];A===void 0&&(A={},c[P]=A);let N=A[I];N===void 0&&(N=L.clone(),A[I]=N,x.addEventListener("dispose",T)),L=N}if(L.visible=x.visible,L.wireframe=x.wireframe,D===Cr?L.side=x.shadowSide!==null?x.shadowSide:x.side:L.side=x.shadowSide!==null?x.shadowSide:h[x.side],L.alphaMap=x.alphaMap,L.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let P=i.properties.get(L);P.light=v}return L}function y(S,x,v,D,L,w){if(S.visible===!1)return;if(S.layers.test(L)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Cr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let A=e.update(S),N=S.material;if(Array.isArray(N)){let B=A.groups;for(let k=0,Y=B.length;k<Y;k++){let X=B[k],$=N[X.materialIndex];if($&&$.visible){let J=_(S,$,D,w);S.onBeforeShadow(i,S,x,v,A,J,X),i.renderBufferDirect(v,null,A,J,S,X),S.onAfterShadow(i,S,x,v,A,J,X)}}}else if(N.visible){let B=_(S,N,D,w);S.onBeforeShadow(i,S,x,v,A,B,null),i.renderBufferDirect(v,null,A,B,S,null),S.onAfterShadow(i,S,x,v,A,B,null)}}let I=S.children;for(let A=0,N=I.length;A<N;A++)y(I[A],x,v,D,L,w)}function T(S){S.target.removeEventListener("dispose",T);for(let v in c){let D=c[v],L=S.target.uuid;L in D&&(D[L].dispose(),delete D[L])}}}function FM(i,e){function t(){let H=!1,le=new St,ne=null,Pe=new St(0,0,0,0);return{setMask:function(_e){ne!==_e&&!H&&(i.colorMask(_e,_e,_e,_e),ne=_e)},setLocked:function(_e){H=_e},setClear:function(_e,Re,Fe,at,Me){Me===!0&&(_e*=at,Re*=at,Fe*=at),le.set(_e,Re,Fe,at),Pe.equals(le)===!1&&(i.clearColor(_e,Re,Fe,at),Pe.copy(le))},reset:function(){H=!1,ne=null,Pe.set(-1,0,0,0)}}}function n(){let H=!1,le=!1,ne=null,Pe=null,_e=null;return{setReversed:function(Re){if(le!==Re){let Fe=e.get("EXT_clip_control");Re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),le=Re;let at=_e;_e=null,this.setClear(at)}},getReversed:function(){return le},setTest:function(Re){Re?oe(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Re){ne!==Re&&!H&&(i.depthMask(Re),ne=Re)},setFunc:function(Re){if(le&&(Re=Pp[Re]),Pe!==Re){switch(Re){case bl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=Re}},setLocked:function(Re){H=Re},setClear:function(Re){_e!==Re&&(_e=Re,le&&(Re=1-Re),i.clearDepth(Re))},reset:function(){H=!1,ne=null,Pe=null,_e=null,le=!1}}}function s(){let H=!1,le=null,ne=null,Pe=null,_e=null,Re=null,Fe=null,at=null,Me=null;return{setTest:function(ze){H||(ze?oe(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(ze){le!==ze&&!H&&(i.stencilMask(ze),le=ze)},setFunc:function(ze,ot,De){(ne!==ze||Pe!==ot||_e!==De)&&(i.stencilFunc(ze,ot,De),ne=ze,Pe=ot,_e=De)},setOp:function(ze,ot,De){(Re!==ze||Fe!==ot||at!==De)&&(i.stencilOp(ze,ot,De),Re=ze,Fe=ot,at=De)},setLocked:function(ze){H=ze},setClear:function(ze){Me!==ze&&(i.clearStencil(ze),Me=ze)},reset:function(){H=!1,le=null,ne=null,Pe=null,_e=null,Re=null,Fe=null,at=null,Me=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],b=null,g=!1,m=null,M=null,_=null,y=null,T=null,S=null,x=null,v=new de(0,0,0),D=0,L=!1,w=null,P=null,I=null,A=null,N=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Y=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=Y>=2);let $=null,J={},ce=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Q=new St().fromArray(ce),te=new St().fromArray(ge);function O(H,le,ne,Pe){let _e=new Uint8Array(4),Re=i.createTexture();i.bindTexture(H,Re),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<ne;Fe++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(le+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return Re}let K={};K[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(gr),Ie(!1),Ee(yh),oe(i.CULL_FACE),me(fn);function oe(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function pe(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function ke(H,le){return d[H]!==le?(i.bindFramebuffer(H,le),d[H]=le,H===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=le),H===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=le),!0):!1}function xe(H,le){let ne=p,Pe=!1;if(H){ne=f.get(le),ne===void 0&&(ne=[],f.set(le,ne));let _e=H.textures;if(ne.length!==_e.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,Fe=_e.length;Re<Fe;Re++)ne[Re]=i.COLOR_ATTACHMENT0+Re;ne.length=_e.length,Pe=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(ne)}function Je(H){return b!==H?(i.useProgram(H),b=H,!0):!1}let Oe={[ri]:i.FUNC_ADD,[Zf]:i.FUNC_SUBTRACT,[ep]:i.FUNC_REVERSE_SUBTRACT};Oe[tp]=i.MIN,Oe[np]=i.MAX;let ee={[Xs]:i.ZERO,[ip]:i.ONE,[sp]:i.SRC_COLOR,[vh]:i.SRC_ALPHA,[lp]:i.SRC_ALPHA_SATURATE,[no]:i.DST_COLOR,[to]:i.DST_ALPHA,[rp]:i.ONE_MINUS_SRC_COLOR,[Sh]:i.ONE_MINUS_SRC_ALPHA,[op]:i.ONE_MINUS_DST_COLOR,[ap]:i.ONE_MINUS_DST_ALPHA,[cp]:i.CONSTANT_COLOR,[up]:i.ONE_MINUS_CONSTANT_COLOR,[hp]:i.CONSTANT_ALPHA,[dp]:i.ONE_MINUS_CONSTANT_ALPHA};function me(H,le,ne,Pe,_e,Re,Fe,at,Me,ze){if(H===fn){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&(oe(i.BLEND),g=!0),H!==Ql){if(H!==m||ze!==L){if((M!==ri||T!==ri)&&(i.blendEquation(i.FUNC_ADD),M=ri,T=ri),ze)switch(H){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFunc(i.ONE,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _h:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",H);break}else switch(H){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mh:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _h:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",H);break}_=null,y=null,S=null,x=null,v.set(0,0,0),D=0,m=H,L=ze}return}_e=_e||le,Re=Re||ne,Fe=Fe||Pe,(le!==M||_e!==T)&&(i.blendEquationSeparate(Oe[le],Oe[_e]),M=le,T=_e),(ne!==_||Pe!==y||Re!==S||Fe!==x)&&(i.blendFuncSeparate(ee[ne],ee[Pe],ee[Re],ee[Fe]),_=ne,y=Pe,S=Re,x=Fe),(at.equals(v)===!1||Me!==D)&&(i.blendColor(at.r,at.g,at.b,Me),v.copy(at),D=Me),m=H,L=!1}function fe(H,le){H.side===Yt?pe(i.CULL_FACE):oe(i.CULL_FACE);let ne=H.side===an;le&&(ne=!ne),Ie(ne),H.blending===Ur&&H.transparent===!1?me(fn):me(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Pe=H.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ge(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(H){w!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),w=H)}function Ee(H){H!==Wf?(oe(i.CULL_FACE),H!==P&&(H===yh?i.cullFace(i.BACK):H===jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),P=H}function Ze(H){H!==I&&(k&&i.lineWidth(H),I=H)}function Ge(H,le,ne){H?(oe(i.POLYGON_OFFSET_FILL),(A!==le||N!==ne)&&(A=le,N=ne,a.getReversed()&&(le=-le,ne=-ne),i.polygonOffset(le,ne))):pe(i.POLYGON_OFFSET_FILL)}function He(H){H?oe(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function et(H){H===void 0&&(H=i.TEXTURE0+B-1),$!==H&&(i.activeTexture(H),$=H)}function Be(H,le,ne){ne===void 0&&($===null?ne=i.TEXTURE0+B-1:ne=$);let Pe=J[ne];Pe===void 0&&(Pe={type:void 0,texture:void 0},J[ne]=Pe),(Pe.type!==H||Pe.texture!==le)&&($!==ne&&(i.activeTexture(ne),$=ne),i.bindTexture(H,le||K[H]),Pe.type=H,Pe.texture=le)}function G(){let H=J[$];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function je(){try{i.compressedTexImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function st(){try{i.texSubImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function be(){try{i.texSubImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function At(){try{i.compressedTexSubImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function Qe(){try{i.texStorage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function C(){try{i.texStorage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function E(){try{i.texImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function z(){try{i.texImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function ye(H){return h[H]!==void 0?h[H]:i.getParameter(H)}function ue(H,le){h[H]!==le&&(i.pixelStorei(H,le),h[H]=le)}function Se(H){Q.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Q.copy(H))}function Ae(H){te.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),te.copy(H))}function se(H,le){let ne=c.get(le);ne===void 0&&(ne=new WeakMap,c.set(le,ne));let Pe=ne.get(H);Pe===void 0&&(Pe=i.getUniformBlockIndex(le,H.name),i.uniformBlockBinding(le,Pe,Pe),ne.set(H,Pe))}function re(H,le,ne){let _e=c.get(le).get(H);l[_e]!==ne&&(i.bindBufferBase(i.UNIFORM_BUFFER,_e,ne),l[_e]=ne)}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},$=null,J={},d={},l={},f=new WeakMap,p=[],b=null,g=!1,m=null,M=null,_=null,y=null,T=null,S=null,x=null,v=new de(0,0,0),D=0,L=!1,w=null,P=null,I=null,A=null,N=null,Q.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:pe,bindFramebuffer:ke,drawBuffers:xe,useProgram:Je,setBlending:me,setMaterial:fe,setFlipSided:Ie,setCullFace:Ee,setLineWidth:Ze,setPolygonOffset:Ge,setScissorTest:He,activeTexture:et,bindTexture:Be,unbindTexture:G,compressedTexImage2D:bt,compressedTexImage3D:je,texImage2D:E,texImage3D:z,pixelStorei:ue,getParameter:ye,updateUBOMapping:se,uniformBlockBinding:re,texStorage2D:Qe,texStorage3D:C,texSubImage2D:st,texSubImage3D:be,compressedTexSubImage2D:At,compressedTexSubImage3D:Xe,scissor:Se,viewport:Ae,reset:Te}}function DM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap,h=new Set,d,f=new WeakMap,p=new Set,b=new FinalizationRegistry(C=>p.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,E){return g?new OffscreenCanvas(C,E):yr("canvas")}function M(C,E,z){let ye=1,ue=Qe(C);if((ue.width>z||ue.height>z)&&(ye=z/Math.max(ue.width,ue.height)),ye<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Se=Math.floor(ye*ue.width),Ae=Math.floor(ye*ue.height);d===void 0&&(d=m(Se,Ae));let se=E?m(Se,Ae):d;return se.width=Se,se.height=Ae,se.getContext("2d").drawImage(C,0,0,Se,Ae),$e("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Se+"x"+Ae+")."),se}else return"data"in C&&$e("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),C;return C}function _(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,E,z,ye,ue,Se=!1){if(C!==null){if(i[C]!==void 0)return i[C];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ae;ye&&(Ae=e.get("EXT_texture_norm16"),Ae||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=E;if(E===i.RED&&(z===i.FLOAT&&(se=i.R32F),z===i.HALF_FLOAT&&(se=i.R16F),z===i.UNSIGNED_BYTE&&(se=i.R8),z===i.UNSIGNED_SHORT&&Ae&&(se=Ae.R16_EXT),z===i.SHORT&&Ae&&(se=Ae.R16_SNORM_EXT)),E===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(se=i.R8UI),z===i.UNSIGNED_SHORT&&(se=i.R16UI),z===i.UNSIGNED_INT&&(se=i.R32UI),z===i.BYTE&&(se=i.R8I),z===i.SHORT&&(se=i.R16I),z===i.INT&&(se=i.R32I)),E===i.RG&&(z===i.FLOAT&&(se=i.RG32F),z===i.HALF_FLOAT&&(se=i.RG16F),z===i.UNSIGNED_BYTE&&(se=i.RG8),z===i.UNSIGNED_SHORT&&Ae&&(se=Ae.RG16_EXT),z===i.SHORT&&Ae&&(se=Ae.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(se=i.RG8UI),z===i.UNSIGNED_SHORT&&(se=i.RG16UI),z===i.UNSIGNED_INT&&(se=i.RG32UI),z===i.BYTE&&(se=i.RG8I),z===i.SHORT&&(se=i.RG16I),z===i.INT&&(se=i.RG32I)),E===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(se=i.RGB8UI),z===i.UNSIGNED_SHORT&&(se=i.RGB16UI),z===i.UNSIGNED_INT&&(se=i.RGB32UI),z===i.BYTE&&(se=i.RGB8I),z===i.SHORT&&(se=i.RGB16I),z===i.INT&&(se=i.RGB32I)),E===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),z===i.UNSIGNED_INT&&(se=i.RGBA32UI),z===i.BYTE&&(se=i.RGBA8I),z===i.SHORT&&(se=i.RGBA16I),z===i.INT&&(se=i.RGBA32I)),E===i.RGB&&(z===i.UNSIGNED_SHORT&&Ae&&(se=Ae.RGB16_EXT),z===i.SHORT&&Ae&&(se=Ae.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),E===i.RGBA){let re=Se?_a:lt.getTransfer(ue);z===i.FLOAT&&(se=i.RGBA32F),z===i.HALF_FLOAT&&(se=i.RGBA16F),z===i.UNSIGNED_BYTE&&(se=re===Et?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&Ae&&(se=Ae.RGBA16_EXT),z===i.SHORT&&Ae&&(se=Ae.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(C,E){let z;return C?E===null||E===xi||E===Ki?z=i.DEPTH24_STENCIL8:E===Wn?z=i.DEPTH32F_STENCIL8:E===Hr&&(z=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xi||E===Ki?z=i.DEPTH_COMPONENT24:E===Wn?z=i.DEPTH_COMPONENT32F:E===Hr&&(z=i.DEPTH_COMPONENT16),z}function v(C,E){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ht&&C.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function D(C){let E=new WeakRef(C);n.get(C).__ref=E,p.add(E),b.register(C,E,E)}function L(C){let E=n.get(C).__ref;E!==void 0&&(p.delete(E),b.unregister(E))}function w(C){I(C.target)}function P(C){A(C.target)}function I(C){C.removeEventListener("dispose",w),L(C),B(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function A(C){C.removeEventListener("dispose",P),L(C),Y(C)}function N(){for(let C of p){let E=C.deref();E!==void 0&&(E.isRenderTarget===!0?A(E):I(E))}p.clear(),h.clear()}function B(C){let E=n.get(C);if(E.__webglInit===void 0)return;let z=C.source,ye=f.get(z);if(ye){let ue=ye[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&k(C),Object.keys(ye).length===0&&f.delete(z)}n.remove(C)}function k(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let z=C.source,ye=f.get(z);delete ye[E.__cacheKey],a.memory.textures--}function Y(C){let E=n.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();let z=C.depthTexture;if(z&&z.renderTarget===C&&I(z),C.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let Se=0;Se<E.__webglFramebuffer[ue].length;Se++)i.deleteFramebuffer(E.__webglFramebuffer[ue][Se]);else i.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)i.deleteFramebuffer(E.__webglFramebuffer[ue]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ye=C.textures;for(let ue=0,Se=ye.length;ue<Se;ue++){let Ae=n.get(ye[ue]);Ae.__webglTexture&&(i.deleteTexture(Ae.__webglTexture),a.memory.textures--),n.remove(ye[ue])}n.remove(C)}let X=0;function $(){X=0}function J(){return X}function ce(C){X=C}function ge(){let C=X;return C>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,C}function Q(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function te(C,E){let z=n.get(C);if(C.isVideoTexture&&At(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let ye=C.image;if(ye===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(z,C,E);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+E)}function O(C,E){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){fe(z,C,E);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+E)}function K(C,E){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){fe(z,C,E);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+E)}function oe(C,E){let z=n.get(C);if(C.version>0&&z.__version!==C.version){Ie(z,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+E)}let pe={[Nt]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[xr]:i.MIRRORED_REPEAT},ke={[Ht]:i.NEAREST,[Wl]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Br]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},xe={[Mp]:i.NEVER,[Ch]:i.ALWAYS,[_p]:i.LESS,[Dh]:i.LEQUAL,[vp]:i.EQUAL,[Nh]:i.GEQUAL,[Sp]:i.GREATER,[Tp]:i.NOTEQUAL};function Je(C,E){if(E.type===Wn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===tn||E.magFilter===Br||E.magFilter===$s||E.magFilter===kn||E.minFilter===tn||E.minFilter===Br||E.minFilter===$s||E.minFilter===kn)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,pe[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,pe[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,pe[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ke[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ke[E.minFilter]),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ht||E.minFilter!==$s&&E.minFilter!==kn||E.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(C,E){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",w),D(E));let ye=E.source,ue=f.get(ye);ue===void 0&&(ue={},f.set(ye,ue));let Se=Q(E);if(Se!==C.__cacheKey){ue[Se]===void 0&&(ue[Se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ue[Se].usedTimes++;let Ae=ue[C.__cacheKey];Ae!==void 0&&(ue[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&k(E)),C.__cacheKey=Se,C.__webglTexture=ue[Se].texture}return z}function ee(C,E,z){return Math.floor(Math.floor(C/z)/E)}function me(C,E,z,ye){let Se=C.updateRanges;if(Se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,z,ye,E.data);else{Se.sort((H,le)=>H.start-le.start);let Ae=0;for(let H=1;H<Se.length;H++){let le=Se[Ae],ne=Se[H],Pe=le.start+le.count,_e=ee(ne.start,E.width,4),Re=ee(le.start,E.width,4);ne.start<=Pe+1&&_e===Re&&ee(ne.start+ne.count-1,E.width,4)===_e?le.count=Math.max(le.count,ne.start+ne.count-le.start):(++Ae,Se[Ae]=ne)}Se.length=Ae+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),Te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let H=0,le=Se.length;H<le;H++){let ne=Se[H],Pe=Math.floor(ne.start/4),_e=Math.ceil(ne.count/4),Re=Pe%E.width,Fe=Math.floor(Pe/E.width),at=_e,Me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(i.TEXTURE_2D,0,Re,Fe,at,Me,z,ye,E.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function fe(C,E,z){let ye=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ye=i.TEXTURE_3D);let ue=Oe(C,E),Se=E.source;t.bindTexture(ye,C.__webglTexture,i.TEXTURE0+z);let Ae=n.get(Se);if(Se.version!==Ae.__version||ue===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Me=lt.getPrimaries(lt.workingColorSpace),ze=E.colorSpace===Zi?null:lt.getPrimaries(E.colorSpace),ot=E.colorSpace===Zi||Me===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let re=M(E.image,!1,s.maxTextureSize);re=Xe(E,re);let Te=r.convert(E.format,E.colorSpace),H=r.convert(E.type),le=S(E.internalFormat,Te,H,E.normalized,E.colorSpace,E.isVideoTexture);Je(ye,E);let ne,Pe=E.mipmaps,_e=E.isVideoTexture!==!0,Re=Ae.__version===void 0||ue===!0,Fe=Se.dataReady,at=v(E,re);if(E.isDepthTexture)le=x(E.format===bi,E.type),Re&&(_e?t.texStorage2D(i.TEXTURE_2D,1,le,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,le,re.width,re.height,0,Te,H,null));else if(E.isDataTexture)if(Pe.length>0){_e&&Re&&t.texStorage2D(i.TEXTURE_2D,at,le,Pe[0].width,Pe[0].height);for(let Me=0,ze=Pe.length;Me<ze;Me++)ne=Pe[Me],_e?Fe&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ne.width,ne.height,Te,H,ne.data):t.texImage2D(i.TEXTURE_2D,Me,le,ne.width,ne.height,0,Te,H,ne.data);E.generateMipmaps=!1}else _e?(Re&&t.texStorage2D(i.TEXTURE_2D,at,le,re.width,re.height),Fe&&me(E,re,Te,H)):t.texImage2D(i.TEXTURE_2D,0,le,re.width,re.height,0,Te,H,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){_e&&Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,at,le,Pe[0].width,Pe[0].height,re.depth);for(let Me=0,ze=Pe.length;Me<ze;Me++)if(ne=Pe[Me],E.format!==Bn)if(Te!==null)if(_e){if(Fe)if(E.layerUpdates.size>0){let ot=$h(ne.width,ne.height,E.format,E.type);for(let De of E.layerUpdates){let vt=ne.data.subarray(De*ot/ne.data.BYTES_PER_ELEMENT,(De+1)*ot/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,De,ne.width,ne.height,1,Te,vt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ne.width,ne.height,re.depth,Te,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,le,ne.width,ne.height,re.depth,0,ne.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?Fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ne.width,ne.height,re.depth,Te,H,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,le,ne.width,ne.height,re.depth,0,Te,H,ne.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{_e&&Re&&t.texStorage2D(i.TEXTURE_2D,at,le,Pe[0].width,Pe[0].height);for(let Me=0,ze=Pe.length;Me<ze;Me++)ne=Pe[Me],E.format!==Bn?Te!==null?_e?Fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,ne.width,ne.height,Te,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,le,ne.width,ne.height,0,ne.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?Fe&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ne.width,ne.height,Te,H,ne.data):t.texImage2D(i.TEXTURE_2D,Me,le,ne.width,ne.height,0,Te,H,ne.data)}else if(E.isDataArrayTexture)if(_e){if(Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,at,le,re.width,re.height,re.depth),Fe)if(E.layerUpdates.size>0){let Me=$h(re.width,re.height,E.format,E.type);for(let ze of E.layerUpdates){let ot=re.data.subarray(ze*Me/re.data.BYTES_PER_ELEMENT,(ze+1)*Me/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ze,re.width,re.height,1,Te,H,ot)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Te,H,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,re.width,re.height,re.depth,0,Te,H,re.data);else if(E.isData3DTexture)_e?(Re&&t.texStorage3D(i.TEXTURE_3D,at,le,re.width,re.height,re.depth),Fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Te,H,re.data)):t.texImage3D(i.TEXTURE_3D,0,le,re.width,re.height,re.depth,0,Te,H,re.data);else if(E.isFramebufferTexture){if(Re)if(_e)t.texStorage2D(i.TEXTURE_2D,at,le,re.width,re.height);else{let Me=re.width,ze=re.height;for(let ot=0;ot<at;ot++)t.texImage2D(i.TEXTURE_2D,ot,le,Me,ze,0,Te,H,null),Me>>=1,ze>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let Me=i.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),re.parentNode!==Me){Me.appendChild(re),h.add(E),Me.onpaint=ze=>{let ot=ze.changedElements;for(let De of h)ot.includes(De.image)&&(De.needsUpdate=!0)},Me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let ot=i.RGBA,De=i.RGBA,vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ot,De,vt,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(_e&&Re){let Me=Qe(Pe[0]);t.texStorage2D(i.TEXTURE_2D,at,le,Me.width,Me.height)}for(let Me=0,ze=Pe.length;Me<ze;Me++)ne=Pe[Me],_e?Fe&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Te,H,ne):t.texImage2D(i.TEXTURE_2D,Me,le,Te,H,ne);E.generateMipmaps=!1}else if(_e){if(Re){let Me=Qe(re);t.texStorage2D(i.TEXTURE_2D,at,le,Me.width,Me.height)}Fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,H,re)}else t.texImage2D(i.TEXTURE_2D,0,le,Te,H,re);_(E)&&E.mipmapsAutoUpdate===!0&&y(ye),Ae.__version=Se.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ie(C,E,z){if(E.image.length!==6)return;let ye=Oe(C,E),ue=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let Se=n.get(ue);if(ue.version!==Se.__version||ye===!0){t.activeTexture(i.TEXTURE0+z);let Ae=lt.getPrimaries(lt.workingColorSpace),se=E.colorSpace===Zi?null:lt.getPrimaries(E.colorSpace),re=E.colorSpace===Zi||Ae===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Te=E.isCompressedTexture||E.image[0].isCompressedTexture,H=E.image[0]&&E.image[0].isDataTexture,le=[];for(let De=0;De<6;De++)!Te&&!H?le[De]=M(E.image[De],!0,s.maxCubemapSize):le[De]=H?E.image[De].image:E.image[De],le[De]=Xe(E,le[De]);let ne=le[0],Pe=r.convert(E.format,E.colorSpace),_e=r.convert(E.type),Re=S(E.internalFormat,Pe,_e,E.normalized,E.colorSpace),Fe=E.isVideoTexture!==!0,at=Se.__version===void 0||ye===!0,Me=ue.dataReady,ze=v(E,ne);Je(i.TEXTURE_CUBE_MAP,E);let ot;if(E.isDepthTexture){if(Re=x(E.format===bi,E.type),at)if(Fe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Re,ne.width,ne.height);else for(let De=0;De<6;De++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Re,ne.width,ne.height,0,Pe,_e,null)}else if(Te){Fe&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,Re,ne.width,ne.height);for(let De=0;De<6;De++){ot=le[De].mipmaps;for(let vt=0;vt<ot.length;vt++){let yt=ot[vt];E.format!==Bn?Pe!==null?Fe?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,vt,0,0,yt.width,yt.height,Pe,yt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,vt,Re,yt.width,yt.height,0,yt.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,vt,0,0,yt.width,yt.height,Pe,_e,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,vt,Re,yt.width,yt.height,0,Pe,_e,yt.data)}}}else{if(ot=E.mipmaps,Fe&&at){ot.length>0&&ze++;let De=Qe(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,Re,De.width,De.height)}for(let De=0;De<6;De++)if(H){Fe?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,le[De].width,le[De].height,Pe,_e,le[De].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Re,le[De].width,le[De].height,0,Pe,_e,le[De].data);for(let vt=0;vt<ot.length;vt++){let Ln=ot[vt].image[De].image;Fe?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,vt+1,0,0,Ln.width,Ln.height,Pe,_e,Ln.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,vt+1,Re,Ln.width,Ln.height,0,Pe,_e,Ln.data)}}else{Fe?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,Pe,_e,le[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Re,Pe,_e,le[De]);for(let vt=0;vt<ot.length;vt++){let yt=ot[vt];Fe?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,vt+1,0,0,Pe,_e,yt.image[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,vt+1,Re,Pe,_e,yt.image[De])}}}_(E)&&E.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),Se.__version=ue.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ee(C,E,z,ye,ue,Se){let Ae=r.convert(z.format,z.colorSpace),se=r.convert(z.type),re=S(z.internalFormat,Ae,se,z.normalized,z.colorSpace),Te=n.get(E),H=n.get(z);if(H.__renderTarget=E,!Te.__hasExternalTextures){let le=Math.max(1,E.width>>Se),ne=Math.max(1,E.height>>Se);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,Se,re,le,ne,E.depth,0,Ae,se,null):t.texImage2D(ue,Se,re,le,ne,0,Ae,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),be(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ue,H.__webglTexture,0,st(E)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,ue,H.__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(C,E,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer){let ye=E.depthTexture,ue=ye&&ye.isDepthTexture?ye.type:null,Se=x(E.stencilBuffer,ue),Ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(E),Se,E.width,E.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(E),Se,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Se,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,C)}else{let ye=E.textures;for(let ue=0;ue<ye.length;ue++){let Se=ye[ue],Ae=r.convert(Se.format,Se.colorSpace),se=r.convert(Se.type),re=S(Se.internalFormat,Ae,se,Se.normalized,Se.colorSpace);be(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(E),re,E.width,E.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(E),re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,re,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(C,E,z){let ye=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=n.get(E.depthTexture);ue.__renderTarget=E;let Se=ye?E.depthTexture.image[0]:E.depthTexture.image;(!ue.__webglTexture||Se.width!==E.width||Se.height!==E.height)&&(Se.width=E.width,Se.height=E.height,E.depthTexture.needsUpdate=!0),ye?oe(E.depthTexture,0):te(E.depthTexture,0);let Ae=ue.__webglTexture,se=st(E),re=ye?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Te=E.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Yi)be(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,re,Ae,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Te,re,Ae,0);else if(E.depthTexture.format===bi)be(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,re,Ae,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Te,re,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(C){let E=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let ye=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ye){let ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ye.removeEventListener("dispose",ue)};ye.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=ye}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(z)for(let ye=0;ye<6;ye++)Ge(E.__webglFramebuffer[ye],C,ye);else C.texture.mipmaps.length>0?Ge(E.__webglFramebuffer[0],C,0):Ge(E.__webglFramebuffer,C,0);else if(z){E.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ye]),E.__webglDepthbuffer[ye]===void 0)E.__webglDepthbuffer[ye]=i.createRenderbuffer(),Ze(E.__webglDepthbuffer[ye],C,!1);else{let ue=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer[ye];i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,Se)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ze(E.__webglDepthbuffer,C,!1);else{let ue=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,Se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(C,E,z){let ye=n.get(C);E!==void 0&&Ee(ye.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&He(C)}function Be(C){let E=C.texture,z=n.get(C),ye=n.get(E);C.addEventListener("dispose",P),D(C);let ue=C.textures,Se=C.isWebGLCubeRenderTarget===!0,Ae=ue.length>1;if(Ae||(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=E.version,a.memory.textures++),Se){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(E.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let re=0;re<E.mipmaps.length;re++)z.__webglFramebuffer[se][re]=i.createFramebuffer()}else z.__webglFramebuffer[se]=i.createFramebuffer()}else{if(E.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)z.__webglFramebuffer[se]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let se=0,re=ue.length;se<re;se++){let Te=n.get(ue[se]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&be(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<ue.length;se++){let re=ue[se];z.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[se]);let Te=r.convert(re.format,re.colorSpace),H=r.convert(re.type),le=S(re.internalFormat,Te,H,re.normalized,re.colorSpace,C.isXRRenderTarget===!0),ne=st(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,le,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,z.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Se){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),Je(i.TEXTURE_CUBE_MAP,E);for(let se=0;se<6;se++)if(E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)Ee(z.__webglFramebuffer[se][re],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,re);else Ee(z.__webglFramebuffer[se],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);_(E)?y(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let se=0,re=ue.length;se<re;se++){let Te=ue[se],H=n.get(Te),le=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,H.__webglTexture),Je(le,Te),Ee(z.__webglFramebuffer,C,Te,i.COLOR_ATTACHMENT0+se,le,0),_(Te)&&y(le)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,ye.__webglTexture),Je(se,E),E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)Ee(z.__webglFramebuffer[re],C,E,i.COLOR_ATTACHMENT0,se,re);else Ee(z.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,se,0);_(E)?y(se):E.mipmaps.length>0&&i.texParameteri(se,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&He(C)}function G(C){let E=C.textures;for(let z=0,ye=E.length;z<ye;z++){let ue=E[z];if(_(ue)&&ue.mipmapsAutoUpdate===!0){let Se=T(C),Ae=n.get(ue).__webglTexture;t.bindTexture(Se,Ae),y(Se),t.unbindTexture()}}}let bt=[];function je(C){if(C.samples>0){if(be(C)===!1){let E=C.textures,z=C.width,ye=C.height,ue=i.COLOR_BUFFER_BIT,Se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(C),se=E.length>1;if(se)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let H=n.get(E[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,H,0)}i.blitFramebuffer(0,0,z,ye,0,0,z,ye,ue,i.NEAREST),l===!0&&(bt.length=0,bt.push(i.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&bt.push(Se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let H=n.get(E[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,H,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let E=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function st(C){return Math.min(s.maxSamples,C.samples)}function be(C){let E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function At(C){let E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function Xe(C,E){let z=C.colorSpace,ye=C.format,ue=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==nn&&z!==Zi&&(lt.getTransfer(z)===Et?(ye!==Bn||ue!==Sn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",z)),E}function Qe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ge,this.resetTextureUnits=$,this.getTextureUnits=J,this.setTextureUnits=ce,this.setTexture2D=te,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=oe,this.rebindTextures=et,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=be,this.dispose=N}function NM(i,e){function t(n,s=Zi){let r,a=lt.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===Ah)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===zt)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===wh)return i.RGB;if(n===Bn)return i.RGBA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===nc)return i.RG_INTEGER;if(n===ic)return i.RGBA_INTEGER;if(n===uo||n===ho||n===fo||n===po)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===rc||n===ac||n===oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===cc||n===uc||n===hc||n===dc||n===mo||n===fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lc||n===cc)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hc)return r.COMPRESSED_R11_EAC;if(n===dc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===mo)return r.COMPRESSED_RG11_EAC;if(n===fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pc||n===mc||n===gc||n===xc||n===bc||n===yc||n===Mc||n===_c||n===vc||n===Sc||n===Tc||n===Ec||n===Ac||n===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Lc||n===wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pc)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===Fc||n===go||n===Dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ic)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var CM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UM=`
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

}`,ad=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:CM,fragmentShader:UM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},od=class extends Ti{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,b=typeof XRWebGLBinding<"u",g=new ad,m={},M=t.getContextAttributes(),_=null,y=null,T=[],S=[],x=new he,v=null,D=null,L=new Xt;L.viewport=new St;let w=new Xt;w.viewport=new St;let P=[L,w],I=new Yl,A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let te=T[Q];return te===void 0&&(te=new Sr,T[Q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Q){let te=T[Q];return te===void 0&&(te=new Sr,T[Q]=te),te.getGripSpace()},this.getHand=function(Q){let te=T[Q];return te===void 0&&(te=new Sr,T[Q]=te),te.getHandSpace()};function B(Q){let te=S.indexOf(Q.inputSource);if(te===-1)return;let O=T[te];O!==void 0&&(O.update(Q.inputSource,Q.frame,c||a),O.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<T.length;Q++){let te=S[Q];te!==null&&(S[Q]=null,T[Q].disconnect(te))}A=null,N=null,g.reset();for(let Q in m)delete m[Q];if(e.setRenderTarget(_),f=null,d=null,h=null,s=null,y=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(x.width,x.height,!1),D!==null){let Q=D.camera;Q.fov=D.fov,Q.zoom=D.zoom,Q.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let O=null,K=null,oe=null;M.depth&&(oe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=M.stencil?bi:Yi,K=M.stencil?Ki:xi);let pe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Gt(d.textureWidth,d.textureHeight,{format:Bn,type:Sn,depthTexture:new gi(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let O={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,O),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Gt(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(Q){for(let te=0;te<Q.removed.length;te++){let O=Q.removed[te],K=S.indexOf(O);K>=0&&(S[K]=null,T[K].disconnect(O))}for(let te=0;te<Q.added.length;te++){let O=Q.added[te],K=S.indexOf(O);if(K===-1){for(let pe=0;pe<T.length;pe++)if(pe>=S.length){S.push(O),K=pe;break}else if(S[pe]===null){S[pe]=O,K=pe;break}if(K===-1)break}let oe=T[K];oe&&oe.connect(O)}}function X(Q,te){te===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(te.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let te=Q.near,O=Q.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(O=g.depthFar)),I.near=w.near=L.near=te,I.far=w.far=L.far=O,(A!==I.near||N!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),A=I.near,N=I.far),I.layers.mask=Q.layers.mask|6,L.layers.mask=I.layers.mask&-5,w.layers.mask=I.layers.mask&-3;let K=Q.parent,oe=I.cameras;X(I,K);for(let pe=0;pe<oe.length;pe++)X(oe[pe],K);I.projectionMatrix.copy(L.projectionMatrix),I.projectionMatrixInverse.copy(L.projectionMatrixInverse),D===null&&Q.isPerspectiveCamera&&(D={camera:Q,fov:Q.fov,zoom:Q.zoom}),$(Q,I,K)};function $(Q,te,O){O===null?Q.matrix.copy(te.matrixWorld):(Q.matrix.copy(O.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(te.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(te.projectionMatrix),Q.projectionMatrixInverse.copy(te.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Cs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(Q){return m[Q]};let J=null;function ce(Q,te){if(u=te.getViewerPose(c||a),p=te,u!==null){let O=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let K=!1;O.length!==I.cameras.length&&(I.cameras.length=0,K=!0);for(let xe=0;xe<O.length;xe++){let Je=O[xe],Oe=null;if(f!==null)Oe=f.getViewport(Je);else{let me=h.getViewSubImage(d,Je);Oe=me.viewport,xe===0&&(e.setRenderTargetTextures(y,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(y))}let ee=P[xe];ee===void 0&&(ee=new Xt,ee.layers.enable(xe),ee.viewport=new St,P[xe]=ee),ee.matrix.fromArray(Je.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Je.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),xe===0&&(I.matrix.copy(ee.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),K===!0&&I.cameras.push(ee)}let oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=n.getBinding();let xe=h.getDepthInformation(O[0]);xe&&xe.isValid&&xe.texture&&g.init(xe,s.renderState)}if(oe&&oe.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let xe=0;xe<O.length;xe++){let Je=O[xe].camera;if(Je){let Oe=m[Je];Oe||(Oe=new Fa,m[Je]=Oe);let ee=h.getCameraImage(Je);Oe.sourceTexture=ee}}}}for(let O=0;O<T.length;O++){let K=S[O],oe=T[O];K!==null&&oe!==void 0&&oe.update(K,te,c||a)}J&&J(Q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}let ge=new im;ge.setAnimationLoop(ce),this.setAnimationLoop=function(Q){J=Q},this.dispose=function(){}}},kM=new We,fm=new it;fm.set(-1,0,0,0,1,0,0,0,1);function BM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Xh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,_,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),b(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===an&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===an&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),_=M.envMap,y=M.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(kM.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(fm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function HM(i,e,t,n){let s={},r={};function a(M,_){let y=_.program;n.uniformBlockBinding(M,y,s[M.id])}function o(M,_){let y=s[M.id];y===void 0&&(p(M),y=l(M),s[M.id]=y,M.addEventListener("dispose",g));let T=_.program;n.updateUBOMapping(M,T);let S=e.render.frame;r[M.id]!==S&&(c(M),r[M.id]=S)}function l(M){let _=i.createBuffer(),y=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),_}function c(M){let _=s[M.id],y=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,x=y.length;S<x;S++){let v=y[S];if(Array.isArray(v))for(let D=0,L=v.length;D<L;D++)u(v[D],S,D,T);else u(v,S,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,_,y,T){if(d(M,_,y,T)===!0){let S=M.__offset,x=M.value;if(Array.isArray(x)){let v=0;for(let D=0;D<x.length;D++){let L=x[D],w=b(L,!0);h(L,M.__data,v),v+=w.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,M.__data)}}function h(M,_,y){typeof M=="number"||typeof M=="boolean"?_[y]=M:M.isMatrix3?(_[y]=M.elements[0],_[y+1]=M.elements[1],_[y+2]=M.elements[2],_[y+3]=0,_[y+4]=M.elements[3],_[y+5]=M.elements[4],_[y+6]=M.elements[5],_[y+7]=0,_[y+8]=M.elements[6],_[y+9]=M.elements[7],_[y+10]=M.elements[8],_[y+11]=0):ArrayBuffer.isView(M)?_.set(M.subarray(0,_.length-y),y):M.toArray(_,y)}function d(M,_,y,T){let S=M.value,x=_+"_"+y;if(Array.isArray(S)){T[x]===void 0&&(T[x]=[]);let v=T[x],D=!1;for(let L=0;L<S.length;L++)f(S[L],v,L)===!0&&(D=!0);return D}return f(S,T,x)}function f(M,_,y){if(_[y]===void 0)return typeof M=="number"||typeof M=="boolean"?_[y]=M:ArrayBuffer.isView(M)?_[y]=M.slice():_[y]=M.clone(),!0;{let T=_[y];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return _[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function p(M){let _=M.uniforms,y=0,T=16;for(let x=0,v=_.length;x<v;x++){let D=Array.isArray(_[x])?_[x]:[_[x]];for(let L=0,w=D.length;L<w;L++){let P=D[L],I=Array.isArray(P.value)?P.value:[P.value],A=Array.isArray(_[x])||Array.isArray(P.value),N=y;for(let k=0,Y=I.length;k<Y;k++){let X=I[k],$=b(X,A),J=y%T,ce=J%$.boundary,ge=J+ce;y+=ce,ge!==0&&T-ge<$.storage&&(y+=T-ge),k===0&&(N=y),y+=$.storage}let B=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new B((y-N)/Float32Array.BYTES_PER_ELEMENT),P.__offset=N}}let S=y%T;return S>0&&(y+=T-S),M.__size=y,M.__cache={},this}function b(M,_){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",M),_===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(M){let _=M.target;_.removeEventListener("dispose",g),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var GM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function OM(){return Ii===null&&(Ii=new Ei(GM,16,16,bs,zt),Ii.name="DFG_LUT",Ii.minFilter=tn,Ii.magFilter=tn,Ii.wrapS=ti,Ii.wrapT=ti,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var Bc=class{constructor(e={}){let{canvas:t=Ep(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Sn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let b=f,g=new Set([ic,nc,tc]),m=new Set([Sn,xi,Hr,Ki,Kl,Zl]),M=new Uint32Array(4),_=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,S=null,x=[],v=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,w=!1,P=null,I=null,A=null,N=null;this._outputColorSpace=xt;let B=0,k=0,Y=null,X=-1,$=null,J=new St,ce=new St,ge=null,Q=new de(0),te=0,O=t.width,K=t.height,oe=1,pe=null,ke=null,xe=new St(0,0,O,K),Je=new St(0,0,O,K),Oe=!1,ee=new fs,me=new Pl,fe=!1,Ie=!1,Ee=new We,Ze=new U,Ge=new St,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function Be(){return Y===null?oe:1}let G=n;function bt(R,V){return t.getContext(R,V)}let je,st,be,At,Xe,Qe,C,E,z,ye,ue,Se,Ae,se,re,Te,H,le,ne,Pe,_e,Re,Fe;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",De,!1),G===null){let V="webgl2";if(G=bt(V,R),G===null)throw bt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(R){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",De,!1),tt("WebGLRenderer: "+R.message),R}function at(){je=new K1(G),je.init(),_e=new NM(G,je),st=new O1(G,je,e,_e),be=new FM(G,je),st.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),I=G.createFramebuffer(),A=G.createFramebuffer(),N=G.createFramebuffer(),At=new ty(G),Xe=new bM,Qe=new DM(G,je,be,Xe,st,_e,At),C=new j1(L),E=new ix(G),Re=new H1(G,E),z=new Z1(G,E,At,Re),ye=new iy(G,z,E,Re,At),le=new ny(G,st,Qe),re=new q1(Xe),ue=new xM(L,C,je,st,Re,re),Se=new BM(L,Xe),Ae=new MM,se=new AM(je),H=new B1(L,C,be,ye,p,l),Te=new IM(L,ye,st),Fe=new HM(G,At,st,be),ne=new G1(G,je,At),Pe=new ey(G,je,At),At.programs=ue.programs,L.capabilities=st,L.extensions=je,L.properties=Xe,L.renderLists=Ae,L.shadowMap=Te,L.state=be,L.info=At}b!==Sn&&(D=new ry(b,t.width,t.height,o,s,r));let Me=new od(L,G);this.xr=Me,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let R=je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(R){R!==void 0&&(oe=R,this.setSize(O,K,!1))},this.getSize=function(R){return R.set(O,K)},this.setSize=function(R,V,Z=!0){if(Me.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,K=V,t.width=Math.floor(R*oe),t.height=Math.floor(V*oe),Z===!0&&(t.style.width=R+"px",t.style.height=V+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(O*oe,K*oe).floor()},this.setDrawingBufferSize=function(R,V,Z){O=R,K=V,oe=Z,t.width=Math.floor(R*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(b===Sn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(J)},this.getViewport=function(R){return R.copy(xe)},this.setViewport=function(R,V,Z,W){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,V,Z,W),be.viewport(J.copy(xe).multiplyScalar(Be()).round())},this.getScissor=function(R){return R.copy(Je)},this.setScissor=function(R,V,Z,W){R.isVector4?Je.set(R.x,R.y,R.z,R.w):Je.set(R,V,Z,W),be.scissor(ce.copy(Je).multiplyScalar(Be()).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(R){be.setScissorTest(Oe=R)},this.setOpaqueSort=function(R){pe=R},this.setTransparentSort=function(R){ke=R},this.getClearColor=function(R){return R.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,Z=!0){let W=0;if(R){let j=!1;if(Y!==null){let Le=Y.texture.format;j=g.has(Le)}if(j){let Le=Y.texture.type,qe=m.has(Le),we=H.getClearColor(),Ne=H.getClearAlpha(),F=we.r,q=we.g,ae=we.b;qe?(M[0]=F,M[1]=q,M[2]=ae,M[3]=Ne,G.clearBufferuiv(G.COLOR,0,M)):(_[0]=F,_[1]=q,_[2]=ae,_[3]=Ne,G.clearBufferiv(G.COLOR,0,_))}else W|=G.COLOR_BUFFER_BIT}V&&(W|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),P=R},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",De,!1),H.dispose(),Ae.dispose(),se.dispose(),Qe.dispose(),Xe.dispose(),C.dispose(),ye.dispose(),z.dispose(),Re.dispose(),Fe.dispose(),ue.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Ss),Me.removeEventListener("sessionend",Zr),Kn.stop()};function ze(R){R.preventDefault(),va("WebGLRenderer: Context Lost."),w=!0}function ot(){va("WebGLRenderer: Context Restored."),w=!1;let R=At.autoReset,V=Te.enabled,Z=Te.autoUpdate,W=Te.needsUpdate,j=Te.type;at(),At.autoReset=R,Te.enabled=V,Te.autoUpdate=Z,Te.needsUpdate=W,Te.type=j}function De(R){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){let V=R.target;V.removeEventListener("dispose",vt),yt(V)}function yt(R){Ln(R),Xe.remove(R)}function Ln(R){let V=Xe.get(R).programs;V!==void 0&&(V.forEach(function(Z){ue.releaseProgram(Z)}),R.isShaderMaterial&&ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Z,W,j,Le){V===null&&(V=He);let qe=j.isMesh&&j.matrixWorld.determinantAffine()<0,we=ia(R,V,Z,W,j);be.setMaterial(W,qe);let Ne=Z.index,F=1;if(W.wireframe===!0){if(Ne=z.getWireframeAttribute(Z),Ne===void 0)return;F=2}let q=Z.drawRange,ae=Z.attributes.position,ie=q.start*F,ve=(q.start+q.count)*F;Le!==null&&(ie=Math.max(ie,Le.start*F),ve=Math.min(ve,(Le.start+Le.count)*F)),Ne!==null?(ie=Math.max(ie,0),ve=Math.min(ve,Ne.count)):ae!=null&&(ie=Math.max(ie,0),ve=Math.min(ve,ae.count));let Ke=ve-ie;if(Ke<0||Ke===1/0)return;Re.setup(j,W,we,Z,Ne);let nt,mt=ne;if(Ne!==null&&(nt=E.get(Ne),mt=Pe,mt.setIndex(nt)),j.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*Be()),mt.setMode(G.LINES)):mt.setMode(G.TRIANGLES);else if(j.isLine){let Bt=W.linewidth;Bt===void 0&&(Bt=1),be.setLineWidth(Bt*Be()),j.isLineSegments?mt.setMode(G.LINES):j.isLineLoop?mt.setMode(G.LINE_LOOP):mt.setMode(G.LINE_STRIP)}else j.isPoints?mt.setMode(G.POINTS):j.isSprite&&mt.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(je.get("WEBGL_multi_draw"))mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Bt=j._multiDrawStarts,Ce=j._multiDrawCounts,Lt=j._multiDrawCount,rt=Ne?E.get(Ne).bytesPerElement:1,wt=Xe.get(W).currentProgram.getUniforms();for(let en=0;en<Lt;en++)wt.setValue(G,"_gl_DrawID",en),mt.render(Bt[en]/rt,Ce[en])}else if(j.isInstancedMesh)mt.renderInstances(ie,Ke,j.count);else if(Z.isInstancedBufferGeometry){let Bt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ce=Math.min(Z.instanceCount,Bt);mt.renderInstances(ie,Ke,Ce)}else mt.render(ie,Ke)};function Zs(R,V,Z,W){P!==null&&R.isNodeMaterial&&P.setObject(W,R),fe===!0&&re.setState(R,Z,!1),R.transparent===!0&&R.side===Yt&&R.forceSinglePass===!1?(R.side=an,R.needsUpdate=!0,ts(R,V,W),R.side=Li,R.needsUpdate=!0,ts(R,V,W),R.side=Yt):ts(R,V,W)}this.compile=function(R,V,Z=null){Z===null&&(Z=R),P!==null&&P.renderStart(R,V,Z),S=se.get(Z),S.init(V),v.push(S),Z.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),R!==Z&&R.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),Ie=this.localClippingEnabled,fe=re.init(this.clippingPlanes,Ie),fe===!0&&re.setGlobalState(this.clippingPlanes,V),P!==null&&Te.render(S.state.shadowsArray,Z,V);let W=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Le=j.material;if(Le)if(Array.isArray(Le))for(let qe=0;qe<Le.length;qe++){let we=Le[qe];Zs(we,Z,V,j),W.add(we)}else Zs(Le,Z,V,j),W.add(Le)}),S=v.pop(),P!==null&&P.renderEnd(),W},this.compileAsync=function(R,V,Z=null){let W=this.compile(R,V,Z);return new Promise(j=>{function Le(){if(W.forEach(function(qe){let Ne=Xe.get(qe).currentProgram;(Ne===void 0||Ne.isReady())&&W.delete(qe)}),W.size===0){j(R);return}setTimeout(Le,10)}je.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let un=null;function wn(R){un&&un(R)}function Ss(){Kn.stop()}function Zr(){Kn.start()}let Kn=new im;Kn.setAnimationLoop(wn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(R){un=R,Me.setAnimationLoop(R),R===null?Kn.stop():Kn.start()},Me.addEventListener("sessionstart",Ss),Me.addEventListener("sessionend",Zr),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;P!==null&&P.renderStart(R,V);let Z=Me.enabled===!0&&Me.isPresenting===!0,W=D!==null&&(Y===null||Z)&&D.begin(L,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(V),V=Me.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,V,Y),S=se.get(R,v.length),S.init(V),S.state.textureUnits=Qe.getTextureUnits(),v.push(S),Ee.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?me.setFromArrayCamera(V):ee.setFromProjectionMatrix(Ee,ni,V.reversedDepth),Ie=this.localClippingEnabled,fe=re.init(this.clippingPlanes,Ie),T=Ae.get(R,x.length),T.init(),x.push(T),this.info.render.frame++,Me.enabled===!0&&Me.isPresenting===!0){let qe=L.xr.getDepthSensingMesh();qe!==null&&Ts(qe,V,-1/0,L.sortObjects)}Ts(R,V,0,L.sortObjects),T.finish(),P!==null&&P.updateLights(S.state.lightsArray),L.sortObjects===!0&&T.sort(pe,ke),et=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,et&&H.addToRenderList(T,R),this.info.autoReset===!0&&this.info.reset(),fe===!0&&re.beginShadows();let j=S.state.shadowsArray;if(Te.render(j,R,V),fe===!0&&re.endShadows(),(W&&D.hasRenderPass())===!1){let qe=T.opaque,we=T.transmissive;if(S.setupLights(),V.isArrayCamera){let Ne=V.cameras;if(we.length>0)for(let F=0,q=Ne.length;F<q;F++){let ae=Ne[F];ta(qe,we,R,ae)}et&&H.render(R);for(let F=0,q=Ne.length;F<q;F++){let ae=Ne[F];ea(T,R,ae,ae.viewport)}}else we.length>0&&ta(qe,we,R,V),et&&H.render(R),ea(T,R,V)}Y!==null&&k===0&&(Qe.updateMultisampleRenderTarget(Y),Qe.updateRenderTargetMipmap(Y)),W&&D.end(L),R.isScene===!0&&R.onAfterRender(L,R,V),Re.resetDefaultState(),X=-1,$=null,v.pop(),v.length>0?(S=v[v.length-1],Qe.setTextureUnits(S.state.textureUnits),fe===!0&&re.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,P!==null&&P.renderEnd()};function Ts(R,V,Z,W){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){let qe=V.isArrayCamera?me:ee;if(!R.frustumCulled||R.intersectsFrustum(qe)){W&&Ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ee);let we=ye.update(R),Ne=R.material;Ne.visible&&T.push(R,we,Ne,Z,Ge.z,null,V)}}else if(R.isMesh||R.isLine||R.isPoints){let qe=V.isArrayCamera?me:ee;if(!R.frustumCulled||R.intersectsFrustum(qe)){let we=ye.update(R),Ne=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ge.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ge.copy(we.boundingSphere.center)),Ge.applyMatrix4(R.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ne)){let F=we.groups;for(let q=0,ae=F.length;q<ae;q++){let ie=F[q],ve=Ne[ie.materialIndex];ve&&ve.visible&&T.push(R,we,ve,Z,Ge.z,ie,V)}}else Ne.visible&&T.push(R,we,Ne,Z,Ge.z,null,V)}}}let Le=R.children;for(let qe=0,we=Le.length;qe<we;qe++)Ts(Le[qe],V,Z,W)}function ea(R,V,Z,W){let{opaque:j,transmissive:Le,transparent:qe}=R;S.setupLightsView(Z),fe===!0&&re.setGlobalState(L.clippingPlanes,Z),W&&be.viewport(J.copy(W)),j.length>0&&Es(j,V,Z),Le.length>0&&Es(Le,V,Z),qe.length>0&&Es(qe,V,Z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ta(R,V,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[W.id]===void 0){let ie=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[W.id]=new Gt(1,1,{generateMipmaps:!0,type:ie?zt:Sn,minFilter:kn,samples:Math.max(4,st.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Le=S.state.transmissionRenderTarget[W.id],qe=W.viewport||J;Le.setSize(qe.z*L.transmissionResolutionScale,qe.w*L.transmissionResolutionScale);let we=L.getRenderTarget(),Ne=L.getActiveCubeFace(),F=L.getActiveMipmapLevel();L.setRenderTarget(Le),L.getClearColor(Q),te=L.getClearAlpha(),te<1&&L.setClearColor(16777215,.5),L.clear(),et&&H.render(Z);let q=L.toneMapping;L.toneMapping=wi;let ae=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),S.setupLightsView(W),fe===!0&&re.setGlobalState(L.clippingPlanes,W),Es(R,Z,W),Qe.updateMultisampleRenderTarget(Le),Qe.updateRenderTargetMipmap(Le),je.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let ve=0,Ke=V.length;ve<Ke;ve++){let nt=V[ve],{object:mt,geometry:Bt,material:Ce,group:Lt}=nt;if(Ce.side===Yt&&mt.layers.test(W.layers)){let rt=Ce.side;Ce.side=an,Ce.needsUpdate=!0,Bo(mt,Z,W,Bt,Ce,Lt),Ce.side=rt,Ce.needsUpdate=!0,ie=!0}}ie===!0&&(Qe.updateMultisampleRenderTarget(Le),Qe.updateRenderTargetMipmap(Le))}L.setRenderTarget(we,Ne,F),L.setClearColor(Q,te),ae!==void 0&&(W.viewport=ae),L.toneMapping=q}function Es(R,V,Z){let W=V.isScene===!0?V.overrideMaterial:null;for(let j=0,Le=R.length;j<Le;j++){let qe=R[j],{object:we,geometry:Ne,group:F}=qe,q=qe.material;q.allowOverride===!0&&W!==null&&(q=W),we.layers.test(Z.layers)&&Bo(we,V,Z,Ne,q,F)}}function Bo(R,V,Z,W,j,Le){P!==null&&j.isNodeMaterial&&P.setObject(R,j),R.onBeforeRender(L,V,Z,W,j,Le),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(L,V,Z,W,R,Le),j.transparent===!0&&j.side===Yt&&j.forceSinglePass===!1?(j.side=an,j.needsUpdate=!0,L.renderBufferDirect(Z,V,W,j,R,Le),j.side=Li,j.needsUpdate=!0,L.renderBufferDirect(Z,V,W,j,R,Le),j.side=Yt):L.renderBufferDirect(Z,V,W,j,R,Le),R.onAfterRender(L,V,Z,W,j,Le)}function na(R){let V=0;for(let Z of R)Z.texture!==null&&V++;return V}function ts(R,V,Z){V.isScene!==!0&&(V=He);let W=Xe.get(R),j=S.state.lights,Le=S.state.shadowsArray,qe=j.state.version,we=ue.getParameters(R,j.state,Le,V,Z,S.state.lightProbeGridArray),Ne=ue.getProgramCacheKey(we),F=W.programs;W.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,W.fog=V.fog;let q=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;W.envMap=C.get(R.envMap||W.environment,q),W.envMapRotation=W.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,F===void 0&&(R.addEventListener("dispose",vt),F=new Map,W.programs=F,W.programVariants=new Map);let ae=F.get(Ne);if(ae!==void 0){if(W.currentProgram===ae&&W.lightsStateVersion===qe)return ui(R,we),ae}else we.uniforms=ue.getUniforms(R),P!==null&&R.isNodeMaterial&&P.build(R,Z,we),R.onBeforeCompile(we,L),ae=ue.acquireProgram(we,Ne),F.set(Ne,ae),W.uniforms=we.uniforms;let ie=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ie.clippingPlanes=re.uniform),ui(R,we),W.needsLights=Ru(R),W.lightsStateVersion=qe,W.needsLights&&(ie.ambientLightColor.value=j.state.ambient,ie.lightProbe.value=j.state.probe,ie.sunLights.value=j.state.sun,ie.sunLightShadows.value=j.state.sunShadow,ie.directionalLights.value=j.state.directional,ie.directionalLightShadows.value=j.state.directionalShadow,ie.spotLights.value=j.state.spot,ie.spotLightShadows.value=j.state.spotShadow,ie.rectAreaLights.value=j.state.rectArea,ie.ltc_1.value=j.state.rectAreaLTC1,ie.ltc_2.value=j.state.rectAreaLTC2,ie.pointLights.value=j.state.point,ie.pointLightShadows.value=j.state.pointShadow,ie.hemisphereLights.value=j.state.hemi,ie.sunShadowMatrix.value=j.state.sunShadowMatrix,ie.sunShadowCascade.value=j.state.sunShadowCascade,ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ie.spotLightMatrix.value=j.state.spotLightMatrix,ie.spotLightMap.value=j.state.spotLightMap,ie.pointShadowMatrix.value=j.state.pointShadowMatrix),W.numLightProbeGrids=na(S.state.lightProbeGridArray),W.currentProgram=ae,W.uniformsList=null,ae}function Ho(R,V,Z,W,j){let Le=Xe.get(R),qe=Le.currentProgram.id+","+W+","+j,we=Le.programVariants.get(qe);return we===void 0?(we=ts(R,V,Z),Le.programVariants.set(qe,we)):(Le.currentProgram=we,Le.uniformsList=null,Le.outputColorSpace=W,Le.toneMapping=j),we}function Go(R){if(R.uniformsList===null){let V=R.currentProgram.getUniforms();R.uniformsList=Or.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function ui(R,V){let Z=Xe.get(R);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function ia(R,V,Z,W,j){V.isScene!==!0&&(V=He),Qe.resetTextureUnits();let Le=V.fog,qe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?V.environment:null,we=Y===null?L.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:lt.workingColorSpace,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,F=C.get(W.envMap||qe,Ne),q=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ae=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ie=!!Z.morphAttributes.position,ve=!!Z.morphAttributes.normal,Ke=!!Z.morphAttributes.color,nt=wi;W.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(nt=L.toneMapping);let mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Bt=mt!==void 0?mt.length:0,Ce=Xe.get(W),Lt=S.state.lights;if(fe===!0&&(Ie===!0||R!==$)){let It=R===$&&W.id===X;re.setState(W,R,It)}let rt=!1,wt=!1;W.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==Lt.state.version||j.isBatchedMesh&&Ce.batching===!1||!j.isBatchedMesh&&Ce.batching===!0||j.isBatchedMesh&&Ce.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ce.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ce.instancing===!1||!j.isInstancedMesh&&Ce.instancing===!0||j.isSkinnedMesh&&Ce.skinning===!1||!j.isSkinnedMesh&&Ce.skinning===!0||j.isInstancedMesh&&Ce.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ce.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ce.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ce.instancingMorph===!1&&j.morphTexture!==null||Ce.envMap!==F||W.fog===!0&&Ce.fog!==Le||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==re.numPlanes||Ce.numIntersection!==re.numIntersection)||Ce.vertexAlphas!==q||Ce.vertexTangents!==ae||Ce.morphTargets!==ie||Ce.morphNormals!==ve||Ce.morphColors!==Ke||Ce.morphTargetsCount!==Bt||Ce.numLightProbeGrids!==na(S.state.lightProbeGridArray)?rt=!0:(Ce.outputColorSpace!==we||Ce.toneMapping!==nt)&&(wt=!0):(rt=!0,Ce.__version=W.version);let en=Ce.currentProgram;(rt===!0||wt===!0)&&(en=wt===!0?Ho(W,V,j,we,nt):ts(W,V,j),P&&W.isNodeMaterial&&P.onUpdateProgram(W,en,Ce));let ki=!1,pn=!1,In=!1,ut=en.getUniforms(),jt=Ce.uniforms;if(be.useProgram(en.program)&&(ki=!0,pn=!0,In=!0),W.id!==X&&(X=W.id,pn=!0),ki||$!==R){be.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ut.setValue(G,"projectionMatrix",R.projectionMatrix),ut.setValue(G,"viewMatrix",R.matrixWorldInverse);let qt=ut.map.cameraPosition;qt!==void 0&&qt.setValue(G,Ze.setFromMatrixPosition(R.matrixWorld)),st.logarithmicDepthBuffer&&ut.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),$!==R&&($=R,pn=!0,In=!0)}if(Ce.needsLights&&(Lt.state.sunShadowMap.length>0&&ut.setValue(G,"sunShadowMap",Lt.state.sunShadowMap,Qe),Lt.state.directionalShadowMap.length>0&&ut.setValue(G,"directionalShadowMap",Lt.state.directionalShadowMap,Qe),Lt.state.spotShadowMap.length>0&&ut.setValue(G,"spotShadowMap",Lt.state.spotShadowMap,Qe),Lt.state.pointShadowMap.length>0&&ut.setValue(G,"pointShadowMap",Lt.state.pointShadowMap,Qe)),j.isSkinnedMesh){ut.setOptional(G,j,"bindMatrix"),ut.setOptional(G,j,"bindMatrixInverse");let It=j.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ut.setValue(G,"boneTexture",It.boneTexture,Qe))}j.isBatchedMesh&&(ut.setOptional(G,j,"batchingTexture"),ut.setValue(G,"batchingTexture",j._matricesTexture,Qe),ut.setOptional(G,j,"batchingIdTexture"),ut.setValue(G,"batchingIdTexture",j._indirectTexture,Qe),ut.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&ut.setValue(G,"batchingColorTexture",j._colorsTexture,Qe));let On=Z.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&le.update(j,Z,en),(pn||Ce.receiveShadow!==j.receiveShadow)&&(Ce.receiveShadow=j.receiveShadow,ut.setValue(G,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&V.environment!==null&&(jt.envMapIntensity.value=V.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=OM()),pn){if(ut.setValue(G,"toneMappingExposure",L.toneMappingExposure),Ce.needsLights&&sa(jt,In),Le&&W.fog===!0&&Se.refreshFogUniforms(jt,Le),Se.refreshMaterialUniforms(jt,W,oe,K,S.state.transmissionRenderTarget[R.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){let It=y,qt=0;for(let Zn of S.state.lightProbeGridArray)Zn.texture!==null&&(It.textures[qt]=Zn.texture,It.min[qt]=Zn.boundingBox.min,It.max[qt]=Zn.boundingBox.max,It.resolution[qt]=Zn.resolution,qt++);for(let Zn in It)It[Zn].length=qt;jt.probesSH.value=It.textures,jt.probesMin.value=It.min,jt.probesMax.value=It.max,jt.probesResolution.value=It.resolution}Or.upload(G,Go(Ce),jt,Qe)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Or.upload(G,Go(Ce),jt,Qe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(G,"center",j.center),ut.setValue(G,"modelViewMatrix",j.modelViewMatrix),ut.setValue(G,"normalMatrix",j.normalMatrix),ut.setValue(G,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){let It=W.uniformsGroups;for(let qt=0,Zn=It.length;qt<Zn;qt++){let Oo=It[qt];Fe.update(Oo,en),Fe.bind(Oo,en)}}return en}function sa(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Ru(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,V,Z){let W=Xe.get(R);W.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Xe.get(R.texture).__webglTexture=V,Xe.get(R.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){let Z=Xe.get(R);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,Z=0){Y=R,B=V,k=Z;let W=null,j=!1,Le=!1;if(R){let we=Xe.get(R);if(we.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(G.FRAMEBUFFER,we.__webglFramebuffer),J.copy(R.viewport),ce.copy(R.scissor),ge=R.scissorTest,be.viewport(J),be.scissor(ce),be.setScissorTest(ge),X=-1;return}else if(we.__webglFramebuffer===void 0)Qe.setupRenderTarget(R);else if(we.__hasExternalTextures)Qe.rebindTextures(R,Xe.get(R.texture).__webglTexture,Xe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let q=R.depthTexture;if(we.__boundDepthTexture!==q){if(q!==null&&Xe.has(q)&&(R.width!==q.image.width||R.height!==q.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(R)}}let Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Le=!0);let F=Xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(F[V])?W=F[V][Z]:W=F[V],j=!0):R.samples>0&&Qe.useMultisampledRTT(R)===!1?W=Xe.get(R).__webglMultisampledFramebuffer:Array.isArray(F)?W=F[Z]:W=F,J.copy(R.viewport),ce.copy(R.scissor),ge=R.scissorTest}else J.copy(xe).multiplyScalar(oe).floor(),ce.copy(Je).multiplyScalar(oe).floor(),ge=Oe;if(Z!==0&&(W=I),be.bindFramebuffer(G.FRAMEBUFFER,W)&&be.drawBuffers(R,W),be.viewport(J),be.scissor(ce),be.setScissorTest(ge),j){let we=Xe.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+V,we.__webglTexture,Z)}else if(Le){let we=V;for(let Ne=0;Ne<R.textures.length;Ne++){let F=Xe.get(R.textures[Ne]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ne,F.__webglTexture,Z,we)}}else if(R!==null&&Z!==0){let we=Xe.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,we.__webglTexture,Z)}X=-1};function As(R){let V=Xe.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=st.textureFormatReadable(R.format),V.__typeReadable=st.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,Z,W,j,Le,qe,we=0){if(!(R&&R.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&(Ne=Ne[qe],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){be.bindFramebuffer(G.FRAMEBUFFER,Ne);try{let F=R.textures[we],q=F.format,ae=F.type;R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+we);let ie=As(F);if(ie.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ie.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-W&&Z>=0&&Z<=R.height-j&&G.readPixels(V,Z,W,j,_e.convert(q),_e.convert(ae),Le)}finally{let F=Y!==null?Xe.get(Y).__webglFramebuffer:null;be.bindFramebuffer(G.FRAMEBUFFER,F)}}},this.readRenderTargetPixelsAsync=async function(R,V,Z,W,j,Le,qe,we=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&(Ne=Ne[qe],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(V>=0&&V<=R.width-W&&Z>=0&&Z<=R.height-j){be.bindFramebuffer(G.FRAMEBUFFER,Ne);let F=R.textures[we],q=F.format,ae=F.type;R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+we);let ie=As(F);if(ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ve),G.bufferData(G.PIXEL_PACK_BUFFER,Le.byteLength,G.STREAM_READ),G.readPixels(V,Z,W,j,_e.convert(q),_e.convert(ae),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Ke=Y!==null?Xe.get(Y).__webglFramebuffer:null;be.bindFramebuffer(G.FRAMEBUFFER,Ke);let nt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Rp(G,nt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ve),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Le),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ve),G.deleteSync(nt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,Z=0){let W=Math.pow(2,-Z),j=Math.floor(R.image.width*W),Le=Math.floor(R.image.height*W),qe=V!==null?V.x:0,we=V!==null?V.y:0;Qe.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,Z,0,0,qe,we,j,Le),be.unbindTexture()},this.copyTextureToTexture=function(R,V,Z=null,W=null,j=0,Le=0){let qe,we,Ne,F,q,ae,ie,ve,Ke,nt=R.isCompressedTexture?R.mipmaps[Le]:R.image;if(Z!==null)qe=Z.max.x-Z.min.x,we=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,F=Z.min.x,q=Z.min.y,ae=Z.isBox3?Z.min.z:0;else{let ut=Math.pow(2,-j);qe=Math.floor(nt.width*ut),we=Math.floor(nt.height*ut),R.isDataArrayTexture?Ne=nt.depth:R.isData3DTexture?Ne=Math.floor(nt.depth*ut):Ne=1,F=0,q=0,ae=0}W!==null?(ie=W.x,ve=W.y,Ke=W.z):(ie=0,ve=0,Ke=0);let mt=_e.convert(V.format),Bt=_e.convert(V.type),Ce;V.isData3DTexture?(Qe.setTexture3D(V,0),Ce=G.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Qe.setTexture2DArray(V,0),Ce=G.TEXTURE_2D_ARRAY):(Qe.setTexture2D(V,0),Ce=G.TEXTURE_2D),be.activeTexture(G.TEXTURE0),be.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),be.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),be.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);let Lt=be.getParameter(G.UNPACK_ROW_LENGTH),rt=be.getParameter(G.UNPACK_IMAGE_HEIGHT),wt=be.getParameter(G.UNPACK_SKIP_PIXELS),en=be.getParameter(G.UNPACK_SKIP_ROWS),ki=be.getParameter(G.UNPACK_SKIP_IMAGES);be.pixelStorei(G.UNPACK_ROW_LENGTH,nt.width),be.pixelStorei(G.UNPACK_IMAGE_HEIGHT,nt.height),be.pixelStorei(G.UNPACK_SKIP_PIXELS,F),be.pixelStorei(G.UNPACK_SKIP_ROWS,q),be.pixelStorei(G.UNPACK_SKIP_IMAGES,ae);let pn=R.isDataArrayTexture||R.isData3DTexture,In=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){let ut=Xe.get(R),jt=Xe.get(V),On=Xe.get(ut.__renderTarget),It=Xe.get(jt.__renderTarget);be.bindFramebuffer(G.READ_FRAMEBUFFER,On.__webglFramebuffer),be.bindFramebuffer(G.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let qt=0;qt<Ne;qt++)pn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.get(R).__webglTexture,j,ae+qt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.get(V).__webglTexture,Le,Ke+qt)),G.blitFramebuffer(F,q,F+qe,q+we,ie,ve,ie+qe,ve+we,G.DEPTH_BUFFER_BIT,G.NEAREST);be.bindFramebuffer(G.READ_FRAMEBUFFER,null),be.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Xe.has(R)){let ut=Xe.get(R),jt=Xe.get(V);be.bindFramebuffer(G.READ_FRAMEBUFFER,A),be.bindFramebuffer(G.DRAW_FRAMEBUFFER,N);for(let On=0;On<Ne;On++)pn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ut.__webglTexture,j,ae+On):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ut.__webglTexture,j),In?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,jt.__webglTexture,Le,Ke+On):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,jt.__webglTexture,Le),j!==0?G.blitFramebuffer(F,q,F+qe,q+we,ie,ve,ie+qe,ve+we,G.COLOR_BUFFER_BIT,G.NEAREST):In?G.copyTexSubImage3D(Ce,Le,ie,ve,Ke+On,F,q,qe,we):G.copyTexSubImage2D(Ce,Le,ie,ve,F,q,qe,we);be.bindFramebuffer(G.READ_FRAMEBUFFER,null),be.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else In?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ce,Le,ie,ve,Ke,qe,we,Ne,mt,Bt,nt.data):V.isCompressedArrayTexture?G.compressedTexSubImage3D(Ce,Le,ie,ve,Ke,qe,we,Ne,mt,nt.data):G.texSubImage3D(Ce,Le,ie,ve,Ke,qe,we,Ne,mt,Bt,nt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Le,ie,ve,qe,we,mt,Bt,nt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Le,ie,ve,nt.width,nt.height,mt,nt.data):G.texSubImage2D(G.TEXTURE_2D,Le,ie,ve,qe,we,mt,Bt,nt);be.pixelStorei(G.UNPACK_ROW_LENGTH,Lt),be.pixelStorei(G.UNPACK_IMAGE_HEIGHT,rt),be.pixelStorei(G.UNPACK_SKIP_PIXELS,wt),be.pixelStorei(G.UNPACK_SKIP_ROWS,en),be.pixelStorei(G.UNPACK_SKIP_IMAGES,ki),Le===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&G.generateMipmap(Ce),be.unbindTexture()},this.initRenderTarget=function(R){Xe.get(R).__webglFramebuffer===void 0&&Qe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Qe.setTextureCube(R,0):R.isData3DTexture?Qe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Qe.setTexture2DArray(R,0):Qe.setTexture2D(R,0),be.unbindTexture()},this.resetState=function(){B=0,k=0,Y=null,be.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Pt=Math.PI*2,Ye=i=>document.querySelector(i),Ft=(i,e,t)=>Math.max(e,Math.min(t,i)),es=(i,e,t)=>i+(e-i)*t,Ut=(i,e,t)=>{let n=Ft((t-i)/(e-i),0,1);return n*n*(3-2*n)};function gn(i){let e=i>>>0;return function(){e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var pm=()=>new Promise(i=>setTimeout(i,0));var qM=[{id:"kulit",name:"Kulit luar",sci:"Periderm",col:5979434,ui:"#c8946a",ro:2.5,ri:2.28,what:"Lapisan terluar yang sebagian besar sudah mati. Dindingnya mengandung suberin sehingga kedap air.",fn:"Melindungi jaringan hidup di dalamnya dari hama, penyakit, panas, api ringan, dan hilangnya air.",fact:"Corak dan ketebalan kulit kayu berbeda pada tiap spesies, jadi sering dipakai untuk mengenali jenis pohon.",short:"Pelindung terluar, kedap air."},{id:"floem",name:"Floem",sci:"Floem sekunder (kulit dalam)",col:13482106,ui:"#e6d493",ro:2.28,ri:2,what:"Jaringan hidup tepat di bawah kulit luar. Penyusun utamanya adalah buluh tapis yang dibantu sel pendamping.",fn:"Mengangkut hasil fotosintesis, terutama sukrosa, dari daun ke akar, buah, dan bagian lain yang sedang tumbuh atau menyimpan cadangan.",fact:"Gula mengalir dari sumber (daun dewasa) ke tempat pakai atau simpan (akar, tunas, buah), jadi arahnya bisa ke bawah maupun ke atas.",short:"Jalur gula dari daun."},{id:"kambium",name:"Kambium",sci:"Kambium vaskular",col:9425258,ui:"#a6e57a",ro:2,ri:1.86,what:"Lapisan sangat tipis berisi sel yang terus membelah.",fn:"Membentuk xilem baru ke arah dalam dan floem baru ke arah luar, sehingga batang bertambah besar (pertumbuhan sekunder).",fact:"Kambium membuat batang menebal, bukan memanjang. Pertambahan tinggi terjadi di ujung tunas.",short:"Penghasil jaringan baru."},{id:"xilem",name:"Xilem aktif",sci:"Kayu gubal (sapwood)",col:14992011,ui:"#f2d3a0",ro:1.86,ri:1.2,what:"Bagian kayu yang masih berfungsi. Pembuluh dan trakeidnya adalah sel mati berdinding lignin yang tersusun menjadi pipa panjang.",fn:"Mengangkut air dan mineral dari akar ke daun, sekaligus menopang batang. Jari-jari empulur menyalurkan zat ke arah samping.",fact:"Air naik tanpa pompa. Penguapan di daun (transpirasi) menarik kolom air yang saling menempel di dalam pipa xilem. Pohon bisa mengangkat air puluhan meter, dan pada pohon tertinggi lebih dari 100 meter.",short:"Jalur air dan mineral ke daun."},{id:"teras",name:"Kayu teras",sci:"Heartwood",col:11036987,ui:"#e0925a",ro:1.2,ri:.3,what:"Xilem tua di bagian dalam yang sudah berhenti mengangkut air. Biasanya lebih gelap karena terisi resin, tanin, dan senyawa lain.",fn:"Menopang pohon dan lebih tahan terhadap pembusukan serta serangan serangga.",fact:"Pada beberapa spesies, kayu teras yang awet membuat kayunya bernilai tinggi. Pohon yang terasnya berlubang pun bisa tetap hidup selama kayu gubal dan kambiumnya sehat.",short:"Penopang, tahan lapuk."},{id:"empulur",name:"Empulur",sci:"Pith",col:15918793,ui:"#f6ecd2",ro:.3,ri:0,what:"Jaringan lunak di pusat batang, sisa dari tahap awal ketika batang masih muda.",fn:"Pada batang muda menyimpan cadangan makanan. Pada pohon tua ukurannya kecil dan sering tidak lagi aktif.",fact:"Cincin tahun tersusun mengelilingi empulur. Makin ke tengah, makin tua umurnya.",short:"Pusat batang yang lunak."}],XM=[{id:"jati",name:"Pohon Jati",short:"jati",sci:"Tectona grandis",family:"Lamiaceae",x:8,z:-8,fact:"Jati meranggas (menggugurkan daun) di musim kemarau dan bertunas lagi saat musim hujan. Kayunya terkenal awet dan banyak dipakai untuk mebel dan konstruksi.",notes:{kulit:"Kulit jati cokelat keabu-abuan, tipis, dan mengelupas memanjang berserat.",xilem:"Jati termasuk kayu berpori cincin: pembuluh besar yang terbentuk di awal musim tumbuh membuat cincin tahunnya jelas.",teras:"Teras jati berwarna cokelat keemasan dan mengandung minyak serta senyawa seperti tektokuinon yang membuatnya tahan rayap dan jamur."},wood:{bark:"oak",barkTint:14207152,rings:14,contrast:.34,pores:"ring",rays:.07,cortex:[.8,.7,.46],sapE:[.93,.82,.58],sapL:[.76,.58,.34],heartE:[.72,.48,.22],heartL:[.46,.27,.11],pith:[.9,.82,.66]}},{id:"mahoni",name:"Pohon Mahoni",short:"mahoni",sci:"Swietenia mahagoni",family:"Meliaceae",x:-10,z:-4,fact:"Mahoni berasal dari Amerika tropis dan didatangkan ke Indonesia pada masa kolonial. Banyak ditanam sebagai pohon peneduh di tepi jalan. Buahnya berupa kapsul berkayu yang pecah menjadi lima bagian dan melepas biji bersayap.",notes:{kulit:"Kulit mahoni cokelat tua keabu-abuan, bersisik dengan alur dangkal.",xilem:"Pori kayu mahoni tersebar merata (berpori baur), tidak mengelompok membentuk cincin seperti pada jati.",teras:"Teras mahoni cokelat kemerahan dan makin gelap seiring umur. Seratnya halus, jadi kayunya dihargai untuk mebel."},wood:{bark:"oak",barkTint:10125424,rings:11,contrast:.2,pores:"diffuse",rays:.06,cortex:[.78,.64,.44],sapE:[.9,.72,.52],sapL:[.78,.56,.38],heartE:[.66,.34,.2],heartL:[.44,.19,.1],pith:[.88,.76,.62]}},{id:"beringin",name:"Pohon Beringin",short:"beringin",sci:"Ficus benjamina",family:"Moraceae",x:13,z:9,fact:"Beringin bisa memulai hidup menumpang di pohon lain. Akar gantungnya turun ke tanah, menebal, lalu menjadi batang tambahan. Beringin termasuk marga Ficus, yang getahnya putih seperti susu (lateks).",notes:{kulit:"Kulit beringin halus dan berwarna abu-abu terang.",floem:"Getah putih beringin (lateks) berasal dari sel khusus penghasil lateks yang tersebar di jaringan kulit dan daun.",xilem:"Kayu beringin relatif lunak dan ringan, jarang dipakai sebagai kayu konstruksi."},wood:{bark:"birch",barkTint:11840156,rings:8,contrast:.1,pores:"diffuse",rays:.05,cortex:[.86,.82,.62],sapE:[.94,.89,.74],sapL:[.88,.8,.62],heartE:[.84,.74,.54],heartL:[.74,.62,.42],pith:[.94,.9,.78]}},{id:"pinus",name:"Pinus Merkusii",short:"pinus",sci:"Pinus merkusii",family:"Pinaceae",x:-18,z:-24,fact:"Pinus merkusii adalah satu-satunya jenis pinus alami yang tumbuh sampai ke selatan garis khatulistiwa, yaitu di Sumatra. Di Jawa banyak ditanam, dan getahnya disadap untuk diolah menjadi gondorukem dan terpentin.",notes:{kulit:"Kulit pinus merkusii tebal, beralur dalam, dan cokelat kemerahan.",floem:"Getah pinus keluar dari saluran resin saat batang dilukai. Getah itu diolah menjadi gondorukem dan terpentin.",xilem:"Kayu pinus tersusun hampir seluruhnya dari trakeid, tanpa pembuluh berpori besar seperti pada jati. Saluran resin tersebar di dalamnya.",teras:"Teras pinus lebih gelap dan banyak mengandung resin."},wood:{bark:"pine",barkTint:14729384,rings:19,contrast:.46,pores:"resin",rays:.04,cortex:[.82,.66,.42],sapE:[.96,.86,.62],sapL:[.82,.6,.34],heartE:[.86,.62,.34],heartL:[.62,.36,.16],pith:[.92,.82,.62]}},{id:"trembesi",name:"Pohon Trembesi",short:"trembesi",sci:"Samanea saman",family:"Fabaceae",x:26,z:-10,fact:"Trembesi berasal dari Amerika tropis. Tajuknya lebar seperti payung dan bisa lebih lebar daripada tingginya. Daun majemuknya melipat saat malam atau mendung.",notes:{kulit:"Kulit trembesi cokelat tua keabu-abuan, kasar, dan beralur.",xilem:"Kayu trembesi bercorak serat indah dan sering dipakai untuk meja dan ukiran.",teras:"Teras trembesi berwarna cokelat tua dengan corak garis yang lebih gelap."},wood:{bark:"oak",barkTint:9074792,rings:9,contrast:.16,pores:"diffuse",rays:.05,cortex:[.8,.7,.48],sapE:[.88,.78,.58],sapL:[.76,.62,.42],heartE:[.52,.34,.2],heartL:[.3,.18,.1],pith:[.88,.8,.66]}}],VM=[{id:"q1",q:"Jaringan mana yang mengangkut air dan mineral dari akar ke daun?",o:["Xilem","Floem","Kambium","Empulur"],a:0,e:"Xilem tersusun dari sel mati berdinding lignin yang membentuk pipa. Air bergerak naik karena tarikan penguapan di daun."},{id:"q2",q:"Apa yang terutama diangkut oleh floem?",o:["Air dan mineral dari tanah","Gula hasil fotosintesis dari daun ke bagian lain","Gas oksigen ke akar","Klorofil ke daun muda"],a:1,e:"Floem membawa sukrosa dari tempat dibuatnya (daun dewasa) ke tempat dipakai atau disimpan, misalnya akar, tunas, dan buah."},{id:"q3",q:"Lapisan mana yang membelah dan membentuk xilem baru ke arah dalam serta floem baru ke arah luar?",o:["Kulit luar","Kayu teras","Kambium","Empulur"],a:2,e:"Kambium vaskular membuat batang menebal. Xilem baru menumpuk di sisi dalamnya, floem baru di sisi luarnya."},{id:"q4",q:"Di daerah yang punya musim jelas, mengapa penampang batang menunjukkan cincin tahun?",o:["Floem menumpuk satu lapis setiap tahun","Sel xilem yang dibentuk di awal dan akhir musim tumbuh berbeda ukuran dan tebal dindingnya","Kulit luar mengelupas setiap tahun","Kambium berhenti bekerja setelah setahun"],a:1,e:"Pada awal musim tumbuh sel xilem besar dan berdinding tipis, di akhir musim kecil dan berdinding tebal. Perbedaan itu tampak sebagai cincin."},{id:"q5",q:"Kulit pohon dikelupas melingkar sampai ke kayu (girdling). Apa dampaknya dalam jangka panjang?",o:["Gula tidak bisa turun ke akar sehingga pohon perlahan mati","Air langsung berhenti naik dan semua daun gugur dalam sehari","Pohon tumbuh makin tinggi","Tidak ada dampak apa pun"],a:0,e:"Floem ikut terkelupas, jadi gula dari daun tidak sampai ke akar. Xilem masih mengangkut air untuk sementara, tetapi akar yang kelaparan akhirnya membuat pohon mati."},{id:"s-jati1",sp:"jati",q:"Mengapa kayu teras jati awet dan tahan rayap?",o:["Mengandung minyak dan senyawa pelindung seperti tektokuinon","Terisi penuh oleh air","Tidak punya xilem sama sekali","Kulitnya sangat tebal"],a:0,e:"Senyawa dan minyak di kayu teras jati membuatnya tahan jamur dan rayap, itu sebabnya jati awet."},{id:"s-jati2",sp:"jati",q:'Apa arti jati "meranggas"?',o:["Menggugurkan daun saat musim kering","Tumbuh tanpa akar","Mengeluarkan getah putih","Berbuah sepanjang tahun"],a:0,e:"Jati menggugurkan daunnya di musim kemarau untuk mengurangi penguapan, lalu bertunas lagi saat hujan datang."},{id:"s-mahoni1",sp:"mahoni",q:"Dari mana asal mahoni yang banyak ditanam di Indonesia?",o:["Amerika tropis","Eropa utara","Gurun Australia","Afrika bagian selatan"],a:0,e:"Mahoni didatangkan dari Amerika tropis pada masa kolonial dan kini banyak ditanam sebagai pohon peneduh."},{id:"s-mahoni2",sp:"mahoni",q:"Bagian mahoni mana yang pecah menjadi lima bagian dan melepas biji bersayap?",o:["Buahnya (kapsul berkayu)","Kulit kayunya","Akarnya","Empulurnya"],a:0,e:"Buah mahoni berupa kapsul berkayu. Saat matang ia terbelah dan biji bersayapnya terbawa angin."},{id:"s-bering1",sp:"beringin",q:"Cairan putih seperti susu yang keluar dari luka beringin disebut apa?",o:["Lateks","Klorofil","Sukrosa","Lignin"],a:0,e:"Lateks dihasilkan sel khusus pada tumbuhan marga Ficus. Fungsinya antara lain menutup luka dan menolak pemangsa."},{id:"s-bering2",sp:"beringin",q:"Akar gantung beringin yang sampai ke tanah lama-kelamaan akan...",o:["Menebal dan menjadi batang tambahan","Mati seketika","Berubah menjadi daun","Berhenti tumbuh selamanya"],a:0,e:"Akar gantung yang menjangkau tanah ikut menyerap air dan menebal, sehingga tampak seperti batang tambahan."},{id:"s-pinus1",sp:"pinus",q:"Kayu pinus tersusun hampir seluruhnya dari sel panjang yang mengangkut air sekaligus menopang. Apa namanya?",o:["Trakeid","Stomata","Kambium","Lateks"],a:0,e:"Konifer seperti pinus tidak punya pembuluh berpori besar. Trakeid menjalankan tugas mengangkut air dan menopang batang."},{id:"s-pinus2",sp:"pinus",q:"Getah pinus yang disadap diolah menjadi apa?",o:["Gondorukem dan terpentin","Minyak kayu putih","Karet alam","Serat kapas"],a:0,e:"Resin pinus disuling menjadi gondorukem (padat) dan terpentin (cair), yang dipakai pada cat, perekat, dan industri lain."},{id:"s-tremb1",sp:"trembesi",q:"Bentuk tajuk trembesi paling mirip apa?",o:["Payung yang lebar","Kerucut sempit","Tiang lurus","Bola kecil"],a:0,e:"Cabang trembesi menyebar ke samping sehingga tajuknya lebar seperti payung dan teduh."},{id:"s-tremb2",sp:"trembesi",q:"Banyak anggota keluarga kacang-kacangan (Fabaceae), termasuk trembesi, punya bintil akar. Apa fungsinya?",o:["Bersimbiosis dengan bakteri pengikat nitrogen","Menyerap garam laut","Menghasilkan listrik","Menyimpan air untuk setahun"],a:0,e:"Bakteri di bintil akar mengubah nitrogen udara menjadi bentuk yang bisa dipakai tumbuhan, sehingga tanah ikut subur."}],Oc={id:"pohon",name:"Pohon",layers:qM,specimens:XM,quiz:VM};var mm="./dist/assets/grass-CMLLWMRR.jpg";var Xr="./dist/assets/dirt_color-XQ4XPJKX.jpg";var Vr="./dist/assets/dirt_normal-OTHNHK75.jpg";var $t=-1.4,ys=240,gm=220,Hn={x:-34,z:26,r:15},qc={x:0,z:2};function zM(i,e){return Math.sin(i*.045+1.3)*Math.cos(e*.038)*2+Math.sin(i*.1+e*.08)*.5+Math.cos(i*.02-e*.03)*1.5}function cn(i,e){let t=zM(i,e);t*=Ut(9,26,Math.hypot(i,e));let n=Math.hypot(i-Hn.x,e-Hn.z);return n<Hn.r+9&&(t=es(t,-3.3,1-Ut(Hn.r*.3,Hn.r+9,n))),t}function JM(i,e){let t=Math.sin(i*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)}var vo=[];function xm(i){vo.length=0,i.forEach((e,t)=>{let n=e.x-qc.x,s=e.z-qc.z,r=Math.hypot(n,s);vo.push({ax:qc.x,az:qc.z,bx:e.x,bz:e.z,L:r,dx:n/r,dz:s/r,seed:t*1.7+.3})})}function Yr(i,e){let t=1e9;for(let n of vo){let s=i-n.ax,r=e-n.az,a=Ft((s*n.dx+r*n.dz)/n.L,0,1),o=Math.sin(a*n.L*.17+n.seed)*1.3*Math.sin(Math.PI*a),l=n.ax+n.dx*a*n.L-n.dz*o,c=n.az+n.dz*a*n.L+n.dx*o;t=Math.min(t,Math.hypot(i-l,e-c))}return t}var Xc=1.25,bm={uTime:{value:0}},cd=`
float tS(float a,float b,float x){ float t=clamp((x-a)/(b-a),0.,1.); return t*t*(3.-2.*t); }
float tBase(vec2 p){ return sin(p.x*0.045+1.3)*cos(p.y*0.038)*2.0 + sin(p.x*0.1+p.y*0.08)*0.5 + cos(p.x*0.02-p.y*0.03)*1.5; }
float tHeight(vec2 p){ float h=tBase(p)*tS(9.,26.,length(p)); float dl=length(p-vec2(${Hn.x}.,${Hn.z}.)); if(dl<${Hn.r+9}.) h=mix(h,-3.3,1.-tS(${Hn.r*.3},${Hn.r+9}.,dl)); return h; }
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
`;function ym(){let i=[],e=[];for(let t=0;t<8;t++){let n=vo[t];i.push(n?new St(n.ax,n.az,n.dx,n.dz):new St),e.push(n?new U(n.L,n.seed,0):new U(1,0,0))}return{uPath:{value:i},uPathP:{value:e},uPathN:{value:vo.length}}}function ld(i,e,t){let n=new Cn().load(i);return n.wrapS=n.wrapT=Nt,n.anisotropy=8,e&&(n.colorSpace=xt),t&&n.repeat.set(t,t),n}function Mm(i){let e=new gs(ys,ys,gm,gm);e.rotateX(-Math.PI/2);let t=e.attributes.position,n=t.count,s=new Float32Array(n*3),r=new Float32Array(n*2),a=new de,o=new Float32Array(n);for(let f=0;f<n;f++){let p=cn(t.getX(f),t.getZ(f));o[f]=p,t.setY(f,p)}for(let f=0;f<n;f++){let p=t.getX(f),b=t.getZ(f),g=o[f],m=.8,M=cn(p+m,b)-cn(p-m,b),_=cn(p,b+m)-cn(p,b-m),y=Math.hypot(M,_)/(2*m),T=Math.sin(p*.07+1.3)*Math.sin(b*.06)*.5+.5,S=Math.sin(p*.31)*Math.sin(b*.27+2)*.5+.5,x=Ut(.28,.6,y)+Ut(.78,.95,S)*.45;x=Math.max(x,1-Ut(Xc*.45,Xc*1.05,Yr(p,b)));let v=1-Ut($t+.1,$t+.75,g);r[f*2]=Ft(x,0,1)*(1-v),r[f*2+1]=v,a.setRGB(.8+T*.28,.9+T*.22-S*.05,.62+T*.14),a.multiplyScalar((.92+JM(p,b)*.16)*1.9),s[f*3]=a.r,s[f*3+1]=a.g,s[f*3+2]=a.b}e.setAttribute("color",new ct(s,3)),e.setAttribute("aMix",new ct(r,2)),e.computeVertexNormals();let l=ld(mm,!0,ys/4.5),c=ld(Xr,!0,1),u=ld(Vr,!1,ys/4.5),h=new Tt({map:l,normalMap:u,normalScale:new he(.55,.55),vertexColors:!0,roughness:.96,metalness:0});h.onBeforeCompile=f=>{f.uniforms.uDirt={value:c},f.uniforms.uTime=bm.uTime,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
        { float uw = ${$t.toFixed(2)} - vWPt.y;            // dasar danau: lebih gelap-kehijauan + kaustik
          if (uw > 0.0) {
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.45, 0.68, 0.64), clamp(uw * 0.55, 0.0, 1.0));
            diffuseColor.rgb += caust(vWPt.xz, uTime) * 0.22 * exp(-uw * 0.35) * vec3(0.75, 1.0, 0.92);
          } }`)};let d=new Ve(e,h);return d.receiveShadow=!0,i.add(d),d}function WM(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=new Float32Array(256*256),r=[[3,2,1,0],[5,-4,.7,1.3],[-7,6,.45,2.1],[11,9,.28,.7],[-14,5,.2,3.3]];for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=0;for(let u of r)c+=Math.sin((l*u[0]+o*u[1])/256*Pt+u[3])*u[2];s[o*256+l]=c}for(let o=0;o<256;o++)for(let l=0;l<256;l++){let c=s[o*256+(l+1)%256]-s[o*256+(l+256-1)%256],u=s[(o+1)%256*256+l]-s[(o+256-1)%256*256+l],h=-c*.5,d=-u*.5,f=1,p=Math.hypot(h,d,f);h/=p,d/=p,f/=p;let b=(o*256+l)*4;n.data[b]=(h*.5+.5)*255,n.data[b+1]=(d*.5+.5)*255,n.data[b+2]=(f*.5+.5)*255,n.data[b+3]=255}t.putImageData(n,0,0);let a=new vn(e);return a.wrapS=a.wrapT=Nt,a.repeat.set(ys/7,ys/7),a.anisotropy=8,a}function _m(i){let e=WM();e.repeat.set(1,1);let t=Array.from({length:8},()=>new St(0,0,-99,0)),n=0,s={uTime:{value:0},uWN:{value:e},uRip:{value:t}},r=new Tt({color:16777215,roughness:.05,metalness:0,transparent:!0,depthWrite:!1,envMapIntensity:1.5,side:Yt});r.onBeforeCompile=o=>{Object.assign(o.uniforms,s),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position,1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWP; uniform float uTime; uniform sampler2D uWN; uniform vec4 uRip[8];
        vec3 ripple(vec2 p){ vec3 o = vec3(0.0);
          for (int i = 0; i < 8; i++) { float age = uTime - uRip[i].z; if (age < 0.0 || age > 3.0) continue;
            vec2 dv = p - uRip[i].xy; float d = length(dv) + 1e-4, R = 0.25 + age * 1.25;
            float w = exp(-pow((d - R) * 4.0, 2.0)) * (1.0 - age / 3.0) * uRip[i].w;
            o.xy += dv / d * sin((d - R) * 22.0) * w * 1.6; o.z += w; }
          return o; }
        ${cd}
        vec3 wNorm(vec2 p){
          vec3 a = texture2D(uWN, p/7.0 + vec2(uTime*0.020, uTime*0.012)).xyz*2.-1.;
          vec3 b = texture2D(uWN, vec2(p.y,-p.x)/3.1 + vec2(-uTime*0.028, uTime*0.019)).xyz*2.-1.;
          vec3 c = texture2D(uWN, p/1.7 + vec2(uTime*0.05, -uTime*0.04)).xyz*2.-1.;
          vec3 r = ripple(p);
          return vec3(a.xy*0.55 + b.xy*0.45 + c.xy*0.22 + r.xy, r.z);
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        float wd = ${$t.toFixed(2)} - tHeight(vWP.xz);   // kedalaman air di titik ini (m)
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
          normal = normalize((viewMatrix * vec4(nW * (gl_FrontFacing ? 1.0 : -1.0), 0.0)).xyz); }`)};let a=new Ve(new gs(ys,ys),r);return a.rotation.x=-Math.PI/2,a.position.y=$t,a.userData.noAO=!0,i.add(a),{mesh:a,update(o){s.uTime.value=o,bm.uTime.value=o},ripple(o,l,c){t[n].set(o,l,s.uTime.value,c),n=(n+1)%t.length}}}var jM=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  gl_Position.z = gl_Position.w; // selalu di bidang jauh
}`,KM=`
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
}`;function vm(){return{uZenith:{value:new de},uHorizon:{value:new de},uBelow:{value:new de},uSunDir:{value:new U(0,1,0)},uSunColor:{value:new de},uCloudLit:{value:new de},uCloudDark:{value:new de},uTime:{value:0},uCloud:{value:.8},uSunDisc:{value:1}}}function Sm(i,e){let t=new Ve(new Ri(e,48,32),new Ct({uniforms:i,vertexShader:jM,fragmentShader:KM,side:an,depthWrite:!1,fog:!1}));return t.frustumCulled=!1,t.renderOrder=-10,t.userData.noAO=!0,t}var $r=(i,e,t)=>new de().setRGB(i,e,t,nn),Tm={z:$r(.003,.007,.024),h:$r(.012,.024,.06)},Em={z:$r(.05,.2,.58),h:$r(.5,.66,.84)},Am={z:$r(.06,.12,.3),h:$r(1.05,.4,.17)},Rm=new de;function Pm(i,e){let t=vm(),n=Sm(t,900);i.add(n);let s=vm();s.uCloud.value=0,s.uSunDisc.value=.35;let r=new $n;r.add(Sm(s,50));let a=new Di(e),o=null,l=(()=>{let M=gn(5),_=700,y=new Float32Array(_*3);for(let x=0;x<_;x++){let v=M()*Pt,D=M()*.95+.05,L=Math.sqrt(1-D*D);y[x*3]=Math.cos(v)*L*800,y[x*3+1]=D*800,y[x*3+2]=Math.sin(v)*L*800}let T=new gt;T.setAttribute("position",new ct(y,3));let S=new Qn(T,new Dn({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));return S.frustumCulled=!1,S.userData.noAO=!0,i.add(S),S})(),c=new Ve(new Ri(18,24,16),new Wt({color:new de(2.2,2.3,2.6),fog:!1,toneMapped:!0}));c.userData.noAO=!0,i.add(c);let u=new Un(16777215,3);u.castShadow=!0;let h=u.shadow.camera;h.left=-42,h.right=42,h.top=42,h.bottom=-42,h.near=1,h.far=320,u.shadow.bias=-4e-4,u.shadow.normalBias=.05,i.add(u),i.add(u.target);let d=new Un(8361432,0);i.add(d),i.fog=new Ta(11189196,.0155);let f=new U,p=99,b=9,g=!1,m={sun:u,sunDir:f,day:1,elev:1,get isNight(){return g},envEvery:2.5,setShadowSize(M){u.shadow.mapSize.x!==M&&(u.shadow.mapSize.set(M,M),u.shadow.map&&(u.shadow.map.dispose(),u.shadow.map=null))},update(M,_,y,T,S){let x=(M-.25)*Pt,v=Math.sin(x),D=Ut(-.12,.3,v),L=Math.exp(-Math.pow(v/.2,2));m.day=D,m.elev=v,f.set(Math.cos(x)*.8,v,.45).normalize();for(let k of[t,s])k.uZenith.value.copy(Tm.z).lerp(Em.z,D).lerp(Am.z,L*.5),k.uHorizon.value.copy(Tm.h).lerp(Em.h,D).lerp(Am.h,L*.75),k.uSunDir.value.copy(f),k.uSunColor.value.setRGB(1,.62+.38*Ut(0,.5,v),.38+.62*Ut(0,.6,v)).multiplyScalar(Ut(-.1,.08,v)),k.uCloudLit.value.setRGB(es(.03,.95,D),es(.04,.96,D),es(.07,1,D)).lerp(Rm.setRGB(1.3,.62,.38),L*.65),k.uCloudDark.value.copy(k.uCloudLit.value).multiplyScalar(.5).lerp(Rm.setRGB(.05,.08,.16),.25),k.uTime.value=_;s.uBelow.value.setRGB(.05,.07,.03).multiplyScalar(.15+.85*D),t.uBelow.value.copy(t.uHorizon.value),i.fog.color.copy(t.uHorizon.value),S?(i.fog.color.setRGB(.012,.06,.065).multiplyScalar(.25+.75*D),i.fog.density=.11,n.visible=!1,l.visible=!1,c.visible=!1,i.background=i.fog.color):(i.fog.density=.0155,n.visible=!0,l.visible=!0,i.background=null),i.environmentIntensity=.42+.85*D;let w=T.x,P=T.y,I=T.z;n.position.set(w,P,I),l.position.set(w,0,I),l.material.opacity=Math.pow(1-D,2)*.95,c.position.set(w-f.x*700,P-f.y*700,I-f.z*700),c.visible=v<.1&&!S;let A=Math.round(w*2)/2,N=Math.round(I*2)/2;u.position.set(A+f.x*120,P+f.y*120,N+f.z*120),u.target.position.set(A,P,N),u.target.updateMatrixWorld(),u.intensity=6*Ut(-.02,.28,v),u.color.setRGB(1,.72+.28*Ut(0,.5,v),.5+.5*Ut(0,.6,v)),u.castShadow=v>.01,d.intensity=.95*(1-D),d.position.set(w-f.x*100,P-f.y*100+20,I-f.z*100);let B=D<.25;B!==g&&(g=B),p+=y,p>m.envEvery&&Math.abs(v-b)>.002&&(p=0,b=v,m.refreshEnv(i))},refreshEnv(M){let _=a.fromScene(r,0,.1,100,{size:128});o&&o.dispose(),o=_,M.environment=_.texture}};return m}function Vc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new gt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0,f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Lm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let b=0;b<a[u].length;++b)f.push(a[u][b][d]);let p=Lm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Lm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new ct(a,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let b=u.getComponent(d,p);o.setComponent(d+h,p,b)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function ud(i,e){if(e===Ih)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Gr||e===xo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Gr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function wm(i){let e=new Map,t=new Map,n=i.clone();return Im(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Im(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Im(i.children[n],e.children[n],t)}var Yc=class extends si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new $c(t,pt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new $c(t,pt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Id(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Jn.extractUrlBase(e);a=Jn.resolveURL(c,this.path)}else a=Jn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Wi(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Um){try{a[pt.KHR_BINARY_GLTF]=new Fd(e)}catch(h){s&&s(h);return}r=JSON.parse(a[pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Hd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case pt.KHR_MATERIALS_UNLIT:a[h]=new md;break;case pt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Dd(r,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:a[h]=new Nd;break;case pt.KHR_MESH_QUANTIZATION:a[h]=new Cd;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function ZM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Qt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},pd=class{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new de(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],nn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Un(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Os(u),c.distance=h;break;case"spot":c=new Ja(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},md=class{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){let s=[];e.color=new de(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],nn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,xt))}return Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},xd=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(r,r)}return Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},yd=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Md=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new de(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],nn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,xt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},vd=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Sd=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new de().setRGB(r[0],r[1],r[2],nn),Promise.all(s)}},Td=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ed=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new de().setRGB(r[0],r[1],r[2],nn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,xt)),Promise.all(s)}},Ad=class{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Rd=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Pd=class{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ld=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},wd=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},$c=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Id=class{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==oi.TRIANGLES&&c.mode!==oi.TRIANGLE_STRIP&&c.mode!==oi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let b=new We,g=new U,m=new _t,M=new U(1,1,1),_=new ii(p.geometry,p.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&M.fromBufferAttribute(l.SCALE,T),_.setMatrixAt(T,b.compose(g,m,M));let y=null;for(let T in l)if(T==="_COLOR_0"){let S=l[T];_.instanceColor=new mi(S.array,S.itemSize,S.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(y===null){let x=_.geometry;y=new gt,y.name=x.name;for(let v in x.attributes)y.setAttribute(v,x.attributes[v]);for(let v in x.morphAttributes)y.morphAttributes[v]=x.morphAttributes[v];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(let v of x.groups)y.addGroup(v.start,v.count,v.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),_.geometry=y}let S=l[T];y.setAttribute(T,new mi(S.array,S.itemSize,S.normalized))}kt.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Um="glTF",So=12,Fm={JSON:1313821514,BIN:5130562},Fd=class{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,So),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Um)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-So,r=new DataView(e,So),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Fm.JSON){let c=new Uint8Array(e,So+a,o);this.content=n.decode(c)}else if(l===Fm.BIN){let c=So+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Dd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=kd[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=kd[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Qr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let b=f.attributes[p],g=l[p];g!==void 0&&(b.normalized=g)}h(f)},o,c,nn,d)})})}},Nd=class{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Cd=class{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}},Qc=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,b=p-c,g=-2*f+3*d,m=f-d,M=1-g,_=m-d+h;for(let y=0;y!==o;y++){let T=a[b+y+o],S=a[b+y+l]*u,x=a[p+y+o],v=a[p+y]*u;r[y]=M*T+_*S+g*x+m*v}return r}},e_=new _t,Ud=class extends Qc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return e_.fromArray(r).normalize().toArray(r),r}},oi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dm={9728:Ht,9729:tn,9984:Wl,9985:Br,9986:$s,9987:kn},Nm={33071:ti,33648:xr,10497:Nt},hd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},t_={CUBICSPLINE:void 0,LINEAR:Ns,STEP:Ds},dd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function n_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),i.DefaultMaterial}function Js(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function i_(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function s_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function r_(i){let e,t=i.extensions&&i.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fd(t.attributes):e=i.indices+":"+fd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+fd(i.targets[n]);return e}function fd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function a_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var o_=new We,Hd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ZM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new Cn(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ja(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wi(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Js(r,o,s),Ni(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Jn.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=hd[s.type],o=Qr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new ct(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=hd[s.type],c=Qr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,b,g;if(f&&f!==h){let m=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(M);_||(b=new c(o,m*f,s.count*f/u),_=new us(b,f/u),t.cache.add(M,_)),g=new hs(_,l,d%f/u,p)}else o===null?b=new c(s.count*l):b=new c(o,d,s.count*l),g=new ct(b,l,p);if(s.sparse!==void 0){let m=hd.SCALAR,M=Qr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new M(a[1],_,s.sparse.count*m),S=new c(a[2],y,s.sparse.count*l);o!==null&&(g=new ct(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let x=0,v=T.length;x<v;x++){let D=T[x];if(g.setX(D,S[x*l]),l>=2&&g.setY(D,S[x*l+1]),l>=3&&g.setZ(D,S[x*l+2]),l>=4&&g.setW(D,S[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Dm[d.magFilter]||tn,u.minFilter=Dm[d.minFilter]||kn,u.wrapS=Nm[d.wrapS]||Nt,u.wrapT=Nm[d.wrapT]||Nt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ht&&u.minFilter!==tn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let b=f;t.isImageBitmapLoader===!0&&(b=function(g){let m=new sn(g);m.needsUpdate=!0,f(m)}),t.load(Jn.resolveURL(d,r.path),b,void 0,p)})})}let h=u.then(function(d){return c===!0&&o.revokeObjectURL(l),Ni(d,a),d.userData.mimeType=a.mimeType||a_(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[pt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Dn,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ps,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Tt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){let h=s[pt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new de(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],nn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,xt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Yt);let u=r.alphaMode||dd.OPAQUE;if(u===dd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===dd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new he(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Wt){let h=r.emissiveFactor;o.emissive=new de().setRGB(h[0],h[1],h[2],nn)}return r.emissiveTexture!==void 0&&a!==Wt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,xt)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),Ni(h,r),t.associations.set(h,{materials:e}),r.extensions&&Js(s,h,r),h})}createUniqueName(e){let t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Cm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=r_(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Cm(new gt,c,t),c.mode===oi.TRIANGLE_STRIP?d=d.then(f=>ud(f,xo)):c.mode===oi.TRIANGLE_FAN&&(d=d.then(f=>ud(f,Gr))),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?n_(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let b=u[f],g=a[f],m,M=c[f];if(g.mode===oi.TRIANGLES||g.mode===oi.TRIANGLE_STRIP||g.mode===oi.TRIANGLE_FAN||g.mode===void 0){let _=r.isSkinnedMesh===!0,y=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");_&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=_&&y?new Ra(b,M):new Ve(b,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===oi.LINES)m=new ks(b,M);else if(g.mode===oi.LINE_STRIP)m=new Us(b,M);else if(g.mode===oi.LINE_LOOP)m=new La(b,M);else if(g.mode===oi.POINTS)m=new Qn(b,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&s_(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ni(m,r),g.extensions&&Js(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Js(s,h[0],r),h[0];let d=new Jt;r.extensions&&Js(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Cc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ji(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ni(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Pa(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],b=f.target,g=b.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,M=s.parameters!==void 0?s.parameters[p.output]:p.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(p),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],b=h[3],g=h[4],m=[];for(let _=0,y=d.length;_<y;_++){let T=d[_],S=f[_],x=p[_],v=b[_],D=g[_];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let L=n._createAnimationTracks(T,S,x,v,D);if(L)for(let w=0;w<L.length;w++)m.push(L[w])}let M=new Qa(r,void 0,m);return Ni(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,o_)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new U().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Tr:c.length>1?u=new Jt:c.length===1?u=c[0]:u=new kt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Ni(u,r),r.extensions&&Js(n,u,r),r.matrix!==void 0){let h=new We;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Jt;n.name&&(r.name=s.createUniqueName(n.name)),Ni(r,n),n.extensions&&Js(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(wm(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof mn||d instanceof sn)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ms[r.path]===Ms.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Ms[r.path]){case Ms.weights:u=Qi;break;case Ms.rotation:u=zi;break;case Ms.translation:case Ms.scale:u=xs;break;default:n.itemSize===1?u=Qi:u=xs;break}let h=s.interpolation!==void 0?t_[s.interpolation]:Ns,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let b=new u(l[f]+"."+Ms[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Bd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof zi?Ud:Qc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function l_(i,e,t){let n=e.attributes,s=new _n;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){let u=Bd(Qr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new U,l=new U;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let b=Bd(Qr[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Fn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Cm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=kd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return lt.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Ni(i,e),l_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?i_(i,e.targets,t):i})}var Gd=new WeakMap,c_=new URL("../libs/draco/draco_decoder.wasm",import.meta.url).toString(),u_=new URL("../libs/draco/draco_wasm_wrapper.js",import.meta.url).toString(),h_=new URL("../libs/draco/draco_decoder.js",import.meta.url).toString(),g2={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",import.meta.url).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",import.meta.url).toString()},zc=class extends si{constructor(e){super(e),this.decoderPaths={js:u_,wasm:c_,dep_js:h_},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=Jn.resolveURL("draco_wasm_wrapper.js",e),t.wasm=Jn.resolveURL("draco_decoder.wasm",e),t.dep_js=Jn.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new Wi(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,xt,n).catch(n)}decodeDracoFile(e,t,n,s,r=nn,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Gd.has(e)){let l=Gd.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(s=l,new Promise((c,u)=>{s._callbacks[r]={resolve:c,reject:u},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Gd.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new gt;e.index&&t.setIndex(new ct(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:s,array:r,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[n],c;if(a===o)c=new ct(r,a);else{let u=new us(r,o);c=new hs(u,a,0)}s==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==xt)return;let n=new de;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),lt.colorSpaceToWorking(n,xt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new Wi(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(s=>{let r=s[0];e||(this.decoderConfig.wasmBinary=s[1]);let a=d_.toString(),o=["/* draco decoder */",r,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function d_(){let i,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":let l=o.buffer,c=o.taskConfig;e.then(u=>{let h=u.draco,d=new h.Decoder;try{let f=t(h,d,new Int8Array(l),c),p=f.attributes.map(b=>b.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(d)}});break}};function t(a,o,l,c){let u=c.attributeIDs,h=c.attributeTypes,d,f,p=o.GetEncodedGeometryType(l);if(p===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(p===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let b={index:null,attributes:[]};for(let g in u){let m=self[h[g]],M,_;if(c.useUniqueIDs)_=u[g],M=o.GetAttributeByUniqueId(d,_);else{if(_=o.GetAttributeId(d,a[u[g]]),_===-1)continue;M=o.GetAttribute(d,_)}let y=s(a,o,d,g,m,M);g==="color"&&(y.vertexColorSpace=c.vertexColorSpace),b.attributes.push(y)}return p===a.TRIANGULAR_MESH&&(b.index=n(a,o,d)),a.destroy(d),b}function n(a,o,l){let u=l.num_faces()*3,h=u*4,d=a._malloc(h);o.GetTrianglesUInt32Array(l,h,d);let f=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:f,itemSize:1}}function s(a,o,l,c,u,h){let d=l.num_points(),f=h.num_components(),p=r(a,u),b=f*u.BYTES_PER_ELEMENT,g=Math.ceil(b/4)*4,m=g/u.BYTES_PER_ELEMENT,M=d*b,_=d*g,y=a._malloc(M);o.GetAttributeDataArrayForAllPoints(l,h,p,M,y);let T=new u(a.HEAPF32.buffer,y,M/u.BYTES_PER_ELEMENT),S;if(b===g)S=T.slice();else{S=new u(_/u.BYTES_PER_ELEMENT);let x=0;for(let v=0;v<d;v++){for(let D=0;D<f;D++)S[x+D]=T[v*f+D];x+=m}}return a._free(y),{name:c,count:d,itemSize:f,array:S,stride:m}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var To=class{constructor(e){ns(this,"m_w",123456789);ns(this,"m_z",987654321);ns(this,"mask",4294967295);this.m_w=123456789+e&this.mask,this.m_z=987654321-e&this.mask}random(e=1,t=0){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let n=(this.m_z<<16)+(this.m_w&65535)>>>0;return n/=4294967296,(e-t)*n+t}};var zr=class{constructor(e=new U,t=new Ot,n=0,s=0,r=0,a=0,o=0){this.origin=e.clone(),this.orientation=t.clone(),this.length=n,this.radius=s,this.level=r,this.sectionCount=a,this.segmentCount=o}};var Od={Birch:"birch",Oak:"oak",Pine:"pine",Willow:"willow"},Eo={Single:"single",Double:"double"},qd={Ash:"ash",Aspen:"aspen",Pine:"pine",Oak:"oak"},Ws={Deciduous:"deciduous",Evergreen:"evergreen"};var js=class{constructor(){this.seed=0,this.type=Ws.Deciduous,this.bark={type:Od.Oak,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},this.branch={levels:3,angle:{1:70,2:60,3:60},children:{0:7,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:.01},gnarliness:{0:.15,1:.2,2:.3,3:.02},length:{0:20,1:20,2:10,3:1},radius:{0:1.5,1:.7,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.4,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},this.leaves={type:qd.Oak,billboard:Eo.Double,angle:10,count:1,start:0,size:2.5,sizeVariance:.7,tint:16777215,alphaTest:.5},this.trellis={enabled:!1,position:{x:0,y:0,z:-2},width:10,height:20,spacing:2,force:{strength:.02,maxDistance:3,falloff:1},cylinderRadius:.05,visible:!0,color:9127187}}copy(e,t=this){for(let n in e)e.hasOwnProperty(n)&&t.hasOwnProperty(n)&&(typeof e[n]=="object"&&e[n]!==null?this.copy(e[n],t[n]):t[n]=e[n])}};var km={seed:26867,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:2,angle:{"1":48,"2":75,"3":60},children:{"0":10,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.11,"1":.09,"2":.05,"3":.09},length:{"0":23.87,"1":18,"2":5.59,"3":4.6},radius:{"0":.81,"1":.56,"2":.76,"3":.7},sections:{"0":12,"1":10,"2":10,"3":10},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.53,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:30,start:0,size:2.05,sizeVariance:.717,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var Bm={seed:36330,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":48,"2":75,"3":60},children:{"0":7,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.06},gnarliness:{"0":.03,"1":.25,"2":.2,"3":.09},length:{"0":43.47,"1":27.14,"2":9.51,"3":4.6},radius:{"0":2,"1":.63,"2":.76,"3":.7},sections:{"0":12,"1":8,"2":6,"3":4},segments:{"0":12,"1":6,"2":4,"3":3},start:{"1":.23,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.09,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:16,start:0,size:2.67,sizeVariance:.72,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var Hm={seed:29919,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":39,"2":39,"3":51},children:{"0":10,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.010869565217391311},gnarliness:{"0":-.05,"1":.2,"2":.16,"3":.049999999999999996},length:{"0":45,"1":29.42,"2":15.3,"3":4.6},radius:{"0":3.03,"1":.53,"2":.79,"3":1.11},sections:{"0":12,"1":8,"2":6,"3":4},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.32,"2":.34,"3":0},taper:{"0":.7,"1":.6199999999999999,"2":.7599999999999999,"3":0},twist:{"0":.09,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:30,count:10,start:.01,size:4.62,sizeVariance:.72,tint:16777215,alphaTest:.5},trellis:{enabled:!1}};var Gm={seed:36330,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":70,"2":35,"3":7},children:{"0":4,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:.010869565217391311},gnarliness:{"0":.04,"1":-.010000000000000007,"2":.12,"3":.02},length:{"0":23.99,"1":3.36,"2":7.699999999999999,"3":1},radius:{"0":.36999999999999994,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.44999999999999996,"2":.32999999999999996,"3":0},taper:{"0":.37,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:30,count:13,start:.2,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},trellis:{enabled:!1}};var Om={seed:18020,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":75,"2":32,"3":7},children:{"0":10,"1":3,"2":3},force:{direction:{x:0,y:1,z:0},strength:.0148},gnarliness:{"0":.05,"1":.12,"2":.12,"3":.02},length:{"0":50,"1":6.07,"2":11.19,"3":1},radius:{"0":.72,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.59,"2":.35,"3":0},taper:{"0":.37,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:30,count:11,start:.124,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},trellis:{enabled:!1}};var qm={seed:30631,type:"deciduous",bark:{type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:2,angle:{"1":47,"2":63,"3":7},children:{"0":10,"1":6,"2":0},force:{direction:{x:0,y:1,z:0},strength:.021739130434782622},gnarliness:{"0":.05,"1":-.030000000000000006,"2":.12,"3":.02},length:{"0":69.60000000000001,"1":18.56,"2":11.19,"3":1},radius:{"0":1.11,"1":.5800000000000001,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.62,"2":.049999999999999975,"3":0},taper:{"0":.7000000000000001,"1":.13,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:36,count:20,start:.15217391304347827,size:3.4782608695652173,sizeVariance:.7,tint:16580390,alphaTest:.5},trellis:{enabled:!1}};var Xm={seed:45590,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":21.521739130434785,"2":62.608695652173914,"3":60},children:{"0":7,"1":3,"2":2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.11,"1":.09,"2":.05,"3":.09},length:{"0":.1,"1":15.302173913043479,"2":5.59,"3":4.6},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.76,"3":.7},sections:{"0":6,"1":6,"2":10,"3":10},segments:{"0":4,"1":4,"2":4,"3":3},start:{"1":.53,"2":.33,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.07,"2":0,"3":0}},leaves:{type:"ash",billboard:"double",angle:55,count:12,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},trellis:{enabled:!1}};var Vm={seed:45590,type:"deciduous",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:2,angle:{"1":19.565217391304348,"2":27.39130434782609,"3":60},children:{"0":10,"1":3,"2":2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{"0":.021739130434782594,"1":.10869565217391308,"2":.05,"3":.09},length:{"0":.1,"1":19.645652173913046,"2":7.701086956521739,"3":4.6},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.76,"3":.7},sections:{"0":3,"1":4,"2":10,"3":10},segments:{"0":4,"1":4,"2":4,"3":3},start:{"1":.6413043478260869,"2":.7065217391304348,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3586956521739131,"1":-.043478260869565244,"2":0,"3":0}},leaves:{type:"aspen",billboard:"double",angle:55,count:7,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},trellis:{enabled:!1}};var Ym={seed:31343,type:"evergreen",bark:{type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},branch:{levels:3,angle:{"1":66.52173913043478,"2":52.82608695652174,"3":0},children:{"0":13,"1":4,"2":4},force:{direction:{x:0,y:1,z:0},strength:-.007},gnarliness:{"0":.05434782608695654,"1":.06521739130434778,"2":.05,"3":.09},length:{"0":10.958695652173914,"1":21.81739130434783,"2":13.130434782608695,"3":5.529347826086957},radius:{"0":.5793478260869566,"1":.9521739130434783,"2":.6858695652173914,"3":.7391304347826086},sections:{"0":4,"1":3,"2":3,"3":10},segments:{"0":3,"1":3,"2":3,"3":3},start:{"1":.14130434782608695,"2":.29347826086956524,"3":0},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":.3,"1":-.03260869565217389,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:54,count:3,start:.15217391304347827,size:3.0434782608695654,sizeVariance:.45652173913043476,tint:10339327,alphaTest:.5},trellis:{enabled:!1}};var $m={seed:30895,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":58,"3":32},children:{"0":4,"1":2,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{"0":.07,"1":-.08,"2":.11,"3":.09},length:{"0":28.08,"1":4.55,"2":9.78,"3":7.16},radius:{"0":1,"1":1.02,"2":.69,"3":1.19},sections:{"0":16,"1":9,"2":8,"3":1},segments:{"0":7,"1":5,"2":3,"3":3},start:{"1":.49,"2":.06,"3":.12},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:42,count:14,start:.16,size:1.38,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var Qm={seed:35729,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":58,"3":32},children:{"0":6,"1":4,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{"0":0,"1":-.1,"2":-.15,"3":.09},length:{"0":37.24,"1":11.08,"2":12.39,"3":7.16},radius:{"0":1.41,"1":.9,"2":.69,"3":1.19},sections:{"0":8,"1":6,"2":3,"3":1},segments:{"0":7,"1":5,"2":3,"3":3},start:{"1":.49,"2":.06,"3":.12},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:42,count:18,start:.16,size:2.5,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var zm={seed:23399,type:"deciduous",bark:{type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},branch:{levels:3,angle:{"1":54,"2":43,"3":32},children:{"0":9,"1":5,"2":3},force:{direction:{x:0,y:1,z:0},strength:-.025},gnarliness:{"0":-.04,"1":.16,"2":-.06,"3":.09},length:{"0":47.7,"1":29.39,"2":17.62,"3":7.16},radius:{"0":3,"1":.69,"2":.69,"3":1.19},sections:{"0":16,"1":9,"2":8,"3":3},segments:{"0":12,"1":5,"2":3,"3":3},start:{"1":.35,"2":.1,"3":0},taper:{"0":.73,"1":.42,"2":.69,"3":.75},twist:{"0":-.23,"1":.42,"2":0,"3":0}},leaves:{type:"oak",billboard:"double",angle:36,count:10,start:.16,size:4.5,sizeVariance:.7,tint:14013901,alphaTest:.5},trellis:{enabled:!1}};var Jm={seed:11744,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":117,"2":60,"3":60},children:{"0":91,"1":7,"2":5},force:{direction:{x:0,y:1,z:0},strength:0},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":39.55,"1":12.12,"2":10,"3":1},radius:{"0":.55,"1":.41,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.16,"2":.3,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:10,count:21,start:0,size:.965,sizeVariance:.7,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var Wm={seed:13977,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":110,"2":16,"3":60},children:{"0":82,"1":3,"2":5},force:{direction:{x:0,y:1,z:0},strength:-.003},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":50,"1":23.87,"2":14.08,"3":1},radius:{"0":1.05,"1":.36,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.27,"2":.14,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:39,count:30,start:.09,size:1.435,sizeVariance:.201,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var jm={seed:44166,type:"evergreen",bark:{type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},branch:{levels:1,angle:{"1":129.1304347826087,"2":16,"3":60},children:{"0":100,"1":3,"2":0},force:{direction:{x:0,y:1,z:0},strength:.009000000000000001},gnarliness:{"0":.05,"1":.08,"2":0,"3":0},length:{"0":65.25217391304348,"1":34.84782608695652,"2":27.246739130434783,"3":1},radius:{"0":1.271739130434783,"1":.366304347826087,"2":.7,"3":.7},sections:{"0":12,"1":10,"2":8,"3":6},segments:{"0":8,"1":6,"2":4,"3":3},start:{"1":.29347826086956524,"2":.14,"3":.3},taper:{"0":.7,"1":.7,"2":.7,"3":.7},twist:{"0":0,"1":0,"2":0,"3":0}},leaves:{type:"pine",billboard:"double",angle:17,count:18,start:.07608695652173914,size:2.608695652173913,sizeVariance:.201,tint:16777215,alphaTest:.3},trellis:{enabled:!1}};var Km={seed:41563,type:"deciduous",bark:{type:"oak",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:8}},branch:{levels:3,angle:{"1":26,"2":79,"3":0},children:{"0":7,"1":5,"2":1},force:{direction:{x:0,y:1,z:0},strength:.026},gnarliness:{"0":0,"1":.02,"2":-.41,"3":.09},length:{"0":4.8,"1":16.9,"2":11.3,"3":11.1},radius:{"0":.27,"1":.71,"2":.84,"3":.48},sections:{"0":6,"1":12,"2":10,"3":4},segments:{"0":3,"1":3,"2":3,"3":3},start:{"1":.19,"2":.1,"3":.06},taper:{"0":.6,"1":.5,"2":.5,"3":.5},twist:{"0":-.02,"1":-.01,"2":.09,"3":0}},leaves:{type:"ash",billboard:"single",angle:30,count:13,start:0,size:1.7,sizeVariance:.5,tint:15204310,alphaTest:.5},trellis:{enabled:!0,position:{x:0,y:0,z:1.3},width:20,height:32,spacing:4,force:{strength:.014,maxDistance:18.2,falloff:1.3},cylinderRadius:.08,visible:!0,color:5519173}};var Jc={"Ash Small":km,"Ash Medium":Bm,"Ash Large":Hm,"Aspen Small":Gm,"Aspen Medium":Om,"Aspen Large":qm,"Bush 1":Xm,"Bush 2":Vm,"Bush 3":Ym,"Oak Small":$m,"Oak Medium":Qm,"Oak Large":zm,"Pine Small":Jm,"Pine Medium":Wm,"Pine Large":jm,Trellis:Km};function Zm(i){let e=Jc[i];return e?structuredClone(e):new js}var Wc="./dist/assets/birch_ao_1k-M2EJQD6U.jpg";var jc="./dist/assets/birch_color_1k-4PBNIVXY.jpg";var Kc="./dist/assets/birch_normal_1k-FVP2SILN.jpg";var Zc="./dist/assets/birch_roughness_1k-GWSNOJHT.jpg";var eu="./dist/assets/oak_ao_1k-OF45DLVF.jpg";var tu="./dist/assets/oak_color_1k-2M2JUF3C.jpg";var nu="./dist/assets/oak_normal_1k-OXREJG4N.jpg";var iu="./dist/assets/oak_roughness_1k-Z2ZMHKAG.jpg";var su="./dist/assets/pine_ao_1k-FCNELEZP.jpg";var ru="./dist/assets/pine_color_1k-CXUMSRID.jpg";var au="./dist/assets/pine_normal_1k-O2AXH5ZF.jpg";var ou="./dist/assets/pine_roughness_1k-AEQ6CLQ3.jpg";var lu="./dist/assets/willow_ao_1k-XPYUNGG3.jpg";var cu="./dist/assets/willow_color_1k-RCBPBDE7.jpg";var uu="./dist/assets/willow_normal_1k-SBJUCNBQ.jpg";var hu="./dist/assets/willow_roughness_1k-LIIAXLS2.jpg";var e0="./dist/assets/ash_color-D7NZKJW5.png";var t0="./dist/assets/aspen_color-FK2SNQDU.png";var n0="./dist/assets/oak_color-3V4YA6HA.png";var i0="./dist/assets/pine_color-FUSX6YQW.png";var J_=new Cn;function Ao(i,e,t={x:1,y:1}){let n=r0.bark[i][e];return n.wrapS=Nt,n.wrapT=Nt,n.repeat.x=t.x,n.repeat.y=1/t.y,n}function s0(i){return r0.leaves[i]}var Zt=(i,e=!0)=>{let t=J_.load(i);return t.premultiplyAlpha=!0,e&&(t.colorSpace=xt),t},r0={bark:{birch:{ao:Zt(Wc,!1),color:Zt(jc),normal:Zt(Kc,!1),roughness:Zt(Zc,!1)},oak:{ao:Zt(eu,!1),color:Zt(tu),normal:Zt(nu,!1),roughness:Zt(iu,!1)},pine:{ao:Zt(su,!1),color:Zt(ru),normal:Zt(au,!1),roughness:Zt(ou,!1)},willow:{ao:Zt(lu,!1),color:Zt(cu),normal:Zt(uu,!1),roughness:Zt(hu,!1)}},leaves:{ash:Zt(e0),aspen:Zt(t0),oak:Zt(n0),pine:Zt(i0)}};var Ro=class extends Jt{constructor(e){super(),this.name="Trellis",this.options=e,this.material=null,this.hCylinderGeo=null,this.vCylinderGeo=null}generate(){let e=this.options;this.dispose(),this.material=new Tt({color:e.color,roughness:.8}),this.hCylinderGeo=new An(e.cylinderRadius,e.cylinderRadius,e.width,8),this.hCylinderGeo.rotateZ(Math.PI/2),this.vCylinderGeo=new An(e.cylinderRadius,e.cylinderRadius,e.height,8);let t=Math.floor(e.height/e.spacing)+1;for(let s=0;s<t;s++){let r=s*e.spacing,a=new Ve(this.hCylinderGeo,this.material);a.position.set(e.position.x,e.position.y+r,e.position.z),this.add(a)}let n=Math.floor(e.width/e.spacing)+1;for(let s=0;s<n;s++){let r=-e.width/2+s*e.spacing,a=new Ve(this.vCylinderGeo,this.material);a.position.set(e.position.x+r,e.position.y+e.height/2,e.position.z),this.add(a)}}getNearestPoint(e){let t=this.options,n=t.position.x,s=t.position.y,r=t.position.z,a=n-t.width/2,o=n+t.width/2,l=s,c=s+t.height,u=Math.max(a,Math.min(o,e.x)),h=Math.max(l,Math.min(c,e.y)),d=Math.round((h-l)/t.spacing)*t.spacing+l,f=Math.max(l,Math.min(c,d)),p=Math.round((u-a)/t.spacing)*t.spacing+a,b=Math.max(a,Math.min(o,p)),g=new U(u,f,r),m=new U(b,h,r),M=e.distanceTo(g),_=e.distanceTo(m);return M<_?g:m}dispose(){this.children.forEach(e=>{e.geometry&&(e.geometry=null)}),this.clear(),this.hCylinderGeo&&(this.hCylinderGeo.dispose(),this.hCylinderGeo=null),this.vCylinderGeo&&(this.vCylinderGeo.dispose(),this.vCylinderGeo=null),this.material&&(this.material.dispose(),this.material=null)}};var Po=class extends Jt{constructor(t=new js){super();ns(this,"rng");ns(this,"options");ns(this,"branchQueue",[]);this.name="Tree",this.branchesMesh=new Ve,this.leavesMesh=new Ve,this.trellisMesh=null,this.add(this.branchesMesh),this.add(this.leavesMesh),this.options=t}update(t){let n=this.leavesMesh.material.userData.shader;n&&(n.uniforms.uTime.value=t)}loadPreset(t){let n=Zm(t);this.loadFromJson(n)}loadFromJson(t){this.options.copy(t),this.generate()}generate(){for(this.branches={verts:[],normals:[],indices:[],uvs:[],windFactor:[]},this.leaves={verts:[],normals:[],indices:[],uvs:[]},this.rng=new To(this.options.seed),this.branchQueue.push(new zr(new U,new Ot,this.options.branch.length[0],this.options.branch.radius[0],0,this.options.branch.sections[0],this.options.branch.segments[0]));this.branchQueue.length>0;){let t=this.branchQueue.shift();this.generateBranch(t)}this.createBranchesGeometry(),this.createLeavesGeometry(),this.createTrellis()}generateBranch(t){let n=this.branches.verts.length/3,s=t.orientation.clone(),r=t.origin.clone(),a=t.length/t.sectionCount/(this.options.type==="Deciduous"?this.options.branch.levels-1:1),o=[];for(let l=0;l<=t.sectionCount;l++){let c=t.radius;l===t.sectionCount&&t.level===this.options.branch.levels?c=.001:this.options.type===Ws.Deciduous?c*=1-this.options.branch.taper[t.level]*(l/t.sectionCount):this.options.type===Ws.Evergreen&&(c*=1-l/t.sectionCount);let u;for(let b=0;b<t.segmentCount;b++){let g=2*Math.PI*b/t.segmentCount,m=new U(Math.cos(g),0,Math.sin(g)).multiplyScalar(c).applyEuler(s).add(r),M=new U(Math.cos(g),0,Math.sin(g)).applyEuler(s).normalize(),_=new he(b/t.segmentCount,l%2===0?0:1);this.branches.verts.push(...Object.values(m)),this.branches.normals.push(...Object.values(M)),this.branches.uvs.push(...Object.values(_)),b===0&&(u={vertex:m,normal:M,uv:_})}this.branches.verts.push(...Object.values(u.vertex)),this.branches.normals.push(...Object.values(u.normal)),this.branches.uvs.push(1,u.uv.y),o.push({origin:r.clone(),orientation:s.clone(),radius:c}),r.add(new U(0,a,0).applyEuler(s));let h=Math.max(1,1/Math.sqrt(c))*this.options.branch.gnarliness[t.level];s.x+=this.rng.random(h,-h),s.z+=this.rng.random(h,-h);let d=new _t().setFromEuler(s),f=new _t().setFromAxisAngle(new U(0,1,0),this.options.branch.twist[t.level]),p=new _t().setFromUnitVectors(new U(0,1,0),new U().copy(this.options.branch.force.direction));if(d.multiply(f),d.rotateTowards(p,this.options.branch.force.strength/c),this.options.trellis.enabled){let b=this.calculateTrellisForce(r,c);if(b){let g=new _t().setFromUnitVectors(new U(0,1,0),b.direction);d.rotateTowards(g,b.strength)}}s.setFromQuaternion(d)}if(this.generateBranchIndices(n,t),this.options.type==="deciduous"){let l=o[o.length-1];t.level<this.options.branch.levels?this.branchQueue.push(new zr(l.origin,l.orientation,this.options.branch.length[t.level+1],l.radius,t.level+1,t.sectionCount,t.segmentCount)):this.generateLeaf(l.origin,l.orientation)}t.level===this.options.branch.levels?this.generateLeaves(o):t.level<this.options.branch.levels&&this.generateChildBranches(this.options.branch.children[t.level],t.level+1,o)}generateChildBranches(t,n,s){let r=this.rng.random();for(let a=0;a<t;a++){let o=this.rng.random(1,this.options.branch.start[n]),l=Math.floor(o*(s.length-1)),c,u;c=s[l],l===s.length-1?u=c:u=s[l+1];let h=(o-l/(s.length-1))/(1/(s.length-1)),d=new U().lerpVectors(c.origin,u.origin,h),f=this.options.branch.radius[n]*((1-h)*c.radius+h*u.radius),p=new _t().setFromEuler(c.orientation),b=new _t().setFromEuler(u.orientation),g=new Ot().setFromQuaternion(b.slerp(p,h)),m=2*Math.PI*(r+a/t),M=new _t().setFromAxisAngle(new U(1,0,0),this.options.branch.angle[n]/(180/Math.PI)),_=new _t().setFromAxisAngle(new U(0,1,0),m),y=new _t().setFromEuler(g),T=new Ot().setFromQuaternion(y.multiply(_.multiply(M))),S=this.options.branch.length[n]*(this.options.type===Ws.Evergreen?1-o:1);this.branchQueue.push(new zr(d,T,S,f,n,this.options.branch.sections[n],this.options.branch.segments[n]))}}generateLeaves(t){let n=this.rng.random();for(let s=0;s<this.options.leaves.count;s++){let r=this.rng.random(1,this.options.leaves.start),a=Math.floor(r*(t.length-1)),o,l;o=t[a],a===t.length-1?l=o:l=t[a+1];let c=(r-a/(t.length-1))/(1/(t.length-1)),u=new U().lerpVectors(o.origin,l.origin,c),h=new _t().setFromEuler(o.orientation),d=new _t().setFromEuler(l.orientation),f=new Ot().setFromQuaternion(d.slerp(h,c)),p=2*Math.PI*(n+s/this.options.leaves.count),b=new _t().setFromAxisAngle(new U(1,0,0),this.options.leaves.angle/(180/Math.PI)),g=new _t().setFromAxisAngle(new U(0,1,0),p),m=new _t().setFromEuler(f),M=new Ot().setFromQuaternion(m.multiply(g.multiply(b)));this.generateLeaf(u,M)}}generateLeaf(t,n){let s=this.leaves.verts.length/3,r=this.options.leaves.size*(1+this.rng.random(this.options.leaves.sizeVariance,-this.options.leaves.sizeVariance)),a=r,o=r,l=c=>{let u=[new U(-a/2,o,0),new U(-a/2,0,0),new U(a/2,0,0),new U(a/2,o,0)].map(d=>d.applyEuler(new Ot(0,c,0)).applyEuler(n).add(t));this.leaves.verts.push(u[0].x,u[0].y,u[0].z,u[1].x,u[1].y,u[1].z,u[2].x,u[2].y,u[2].z,u[3].x,u[3].y,u[3].z);let h=new U(0,0,1).applyEuler(n);this.leaves.normals.push(h.x,h.y,h.z,h.x,h.y,h.z,h.x,h.y,h.z,h.x,h.y,h.z),this.leaves.uvs.push(0,1,0,0,1,0,1,1),this.leaves.indices.push(s,s+1,s+2,s,s+2,s+3),s+=4};l(0),this.options.leaves.billboard===Eo.Double&&l(Math.PI/2)}generateBranchIndices(t,n){let s,r,a,o,l=n.segmentCount+1;for(let c=0;c<n.sectionCount;c++)for(let u=0;u<n.segmentCount;u++)s=t+c*l+u,r=t+c*l+(u+1),a=s+l,o=r+l,this.branches.indices.push(s,a,r,r,a,o)}createBranchesGeometry(){let t=new gt;t.setAttribute("position",new ct(new Float32Array(this.branches.verts),3)),t.setAttribute("normal",new ct(new Float32Array(this.branches.normals),3)),t.setAttribute("uv",new ct(new Float32Array(this.branches.uvs),2)),t.setIndex(new ct(new Uint16Array(this.branches.indices),1)),t.computeBoundingSphere();let n=new wr({name:"branches",flatShading:this.options.bark.flatShading,color:new de(this.options.bark.tint)});this.options.bark.textured&&(n.aoMap=Ao(this.options.bark.type,"ao",this.options.bark.textureScale),n.map=Ao(this.options.bark.type,"color",this.options.bark.textureScale),n.normalMap=Ao(this.options.bark.type,"normal",this.options.bark.textureScale),n.roughnessMap=Ao(this.options.bark.type,"roughness",this.options.bark.textureScale)),this.branchesMesh.geometry.dispose(),this.branchesMesh.geometry=t,this.branchesMesh.material.dispose(),this.branchesMesh.material=n,this.branchesMesh.castShadow=!0,this.branchesMesh.receiveShadow=!0}createLeavesGeometry(){let t=new gt;t.setAttribute("position",new ct(new Float32Array(this.leaves.verts),3)),t.setAttribute("uv",new ct(new Float32Array(this.leaves.uvs),2)),t.setIndex(new ct(new Uint16Array(this.leaves.indices),1)),t.computeVertexNormals(),t.computeBoundingSphere();let n=new wr({name:"leaves",map:s0(this.options.leaves.type),color:new de(this.options.leaves.tint),side:Yt,alphaTest:this.options.leaves.alphaTest,dithering:!0});n.onBeforeCompile=s=>{s.uniforms.uTime={value:0},s.uniforms.uWindStrength={value:new U(.5,0,.5)},s.uniforms.uWindFrequency={value:.5},s.uniforms.uWindScale={value:70},s.vertexShader=`
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
        `),n.userData.shader=s},this.leavesMesh.geometry.dispose(),this.leavesMesh.geometry=t,this.leavesMesh.material.dispose(),this.leavesMesh.material=n,this.leavesMesh.castShadow=!0,this.leavesMesh.receiveShadow=!0}createTrellis(){this.trellisMesh&&(this.remove(this.trellisMesh),this.trellisMesh.dispose(),this.trellisMesh=null),this.options.trellis.enabled&&this.options.trellis.visible&&(this.trellisMesh=new Ro(this.options.trellis),this.trellisMesh.generate(),this.add(this.trellisMesh))}getNearestTrellisPoint(t){let n=this.options.trellis,s=n.position.x,r=n.position.y,a=n.position.z,o=s-n.width/2,l=s+n.width/2,c=r,u=r+n.height,h=Math.max(o,Math.min(l,t.x)),d=Math.max(c,Math.min(u,t.y)),f=Math.round((d-c)/n.spacing)*n.spacing+c,p=Math.max(c,Math.min(u,f)),b=Math.round((h-o)/n.spacing)*n.spacing+o,g=Math.max(o,Math.min(l,b)),m=new U(h,p,a),M=new U(g,d,a),_=t.distanceTo(m),y=t.distanceTo(M);return _<y?m:M}calculateTrellisForce(t,n){let s=this.options.trellis,r=this.getNearestTrellisPoint(t),a=t.distanceTo(r);if(a>s.force.maxDistance||a<.001)return null;let o=new U().subVectors(r,t).normalize(),l=1-Math.pow(a/s.force.maxDistance,s.force.falloff),c=s.force.strength*l/n;return{direction:o,strength:c}}get vertexCount(){return(this.branches.verts.length+this.leaves.verts.length)/3}get triangleCount(){return(this.branches.indices.length+this.leaves.indices.length)/3}};var W_={jati:{preset:"Ash Large",seed:4211,height:18,leafScale:2.3,leafCount:.7,tint:7314484,tweak(i){i.branch.gnarliness[0]=.02,i.branch.length[0]*=1.15,i.branch.angle[1]=55}},mahoni:{preset:"Oak Large",seed:9083,height:19,leaf:"ash",leafScale:1,leafCount:1.9,tint:2908976},beringin:{preset:"Oak Large",seed:1377,height:14,bark:"willow",leaf:"aspen",leafScale:.85,leafCount:1.9,tint:4885562,roots:!0,tweak(i){i.branch.length[0]*=.7,i.branch.radius[0]*=1.5,i.branch.length[1]*=1.25,i.branch.angle[1]=80}},pinus:{preset:"Pine Large",seed:6654,height:22,tint:4090426},trembesi:{preset:"Oak Large",seed:2025,height:15,leaf:"ash",leafScale:.9,leafCount:1.9,tint:6003260,tweak(i){i.branch.length[0]*=.65,i.branch.radius[0]*=1.35,i.branch.length[1]*=1.7,i.branch.angle[1]=88,i.branch.gnarliness[1]=.12}}},pu={uTime:{value:0},uWindAmp:{value:1}},Xd={};function Vd(i){return JSON.parse(JSON.stringify(i))}function du(i,e){let t=new Po;if(t.options.copy(Vd(Jc[i])),t.options.seed=e.seed,e.bark&&(t.options.bark.type=e.bark),e.leaf&&(t.options.leaves.type=e.leaf),e.leafCount&&(t.options.leaves.count=Math.round(t.options.leaves.count*e.leafCount)),e.leafScale&&(t.options.leaves.size*=e.leafScale),e.tint!=null&&(t.options.leaves.tint=e.tint),e.tweak&&e.tweak(t.options),e.lite){let T=t.options;T.leaves.count=Math.max(2,Math.round(T.leaves.count*(e.liteLeaf||.5))),T.leaves.size*=1/Math.sqrt(e.liteLeaf||.5);let S=e.liteBranch||.5;for(let x of[0,1,2,3])T.branch.sections[x]&&(T.branch.sections[x]=Math.max(2,Math.ceil(T.branch.sections[x]*S))),T.branch.segments[x]&&(T.branch.segments[x]=Math.max(3,Math.ceil(T.branch.segments[x]*(S>.7?.8:.55))))}let n=t.options.bark.type;Xd[n]?t.options.bark.textureScale=Vd(Xd[n]):Xd[n]=Vd(t.options.bark.textureScale),t.generate();let s=t.branchesMesh,r=t.leavesMesh;s.geometry.computeBoundingBox(),r.geometry.computeBoundingBox();let a=s.geometry.boundingBox.clone().union(r.geometry.boundingBox),o=e.height/Math.max(.01,a.max.y),l=r.geometry,c=l.attributes.position,u=new Float32Array(c.count*3),h=l.boundingBox.min.y*.4+l.boundingBox.max.y*.6,d=new U;for(let T=0;T<c.count;T++)d.set(c.getX(T),c.getY(T)-h,c.getZ(T)).normalize(),d.y=d.y*.7+.45,d.normalize(),u[T*3]=d.x,u[T*3+1]=d.y,u[T*3+2]=d.z;l.setAttribute("normal",new ct(u,3));let f=s.material,p=new Tt({map:f.map,normalMap:f.normalMap,roughnessMap:f.roughnessMap,aoMap:f.aoMap,color:f.color.clone(),roughness:1,metalness:0}),b=j_(r.material.map,new de(t.options.leaves.tint)),g=new Ir({depthPacking:Fh,map:r.material.map,alphaTest:.5,side:Yt}),m=(t.options.branch.radius[0]||1)*o,M=(s.geometry.index.count+r.geometry.index.count)/3,_=s.geometry.index.count/3,y=r.geometry.index.count/3;return f.dispose(),r.material.dispose(),{barkGeo:s.geometry,leafGeo:r.geometry,barkMat:p,leafMat:b,depthMat:g,scale:o,height:e.height,trunkR:m,tris:M,btris:_,ltris:y,tree:t}}function j_(i,e){let t=new Tt({map:i,color:e,alphaTest:.5,alphaToCoverage:!0,side:Yt,roughness:.74,metalness:0});return t.onBeforeCompile=n=>{n.uniforms.uTime=pu.uTime,n.uniforms.uWindAmp=pu.uWindAmp,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uWindAmp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          vec3 ip = vec3(0.0);
          #ifdef USE_INSTANCING
            ip = instanceMatrix[3].xyz;
          #endif
          float ph = ip.x * 0.21 + ip.z * 0.17 + position.x * 0.05 + position.y * 0.04;
          float w = 0.5 * sin(uTime * 1.3 + ph) + 0.3 * sin(uTime * 2.7 + ph * 1.7) + 0.2 * sin(uTime * 5.1 + ph * 2.3);
          transformed.xz += vec2(w * 0.9, w * 0.6) * uv.y * uWindAmp;
        }`)},t}function K_(){let i=gn(3),e=[],t=[],n=[],s=[],r=new de().setRGB(.01,.03,.005),a=new de().setRGB(.13,.23,.05),o=9;for(let c=0;c<o;c++){let u=c/o*Pt+i()*.7,h=.02+i()*.09,d=Math.cos(u)*h,f=Math.sin(u)*h,p=.13+i()*.26,b=.011+i()*.01,g=(i()-.5)*.22,m=i()*Pt,M=Math.cos(m),_=Math.sin(m),y=-_,T=M,S=e.length/3,x=(v,D,L,w)=>{e.push(v,D,L),t.push(w.r,w.g,w.b),n.push(0,1,0)};x(d-y*b,0,f-T*b,r),x(d+y*b,0,f+T*b,r),x(d+M*g,p,f+_*g,a),s.push(S,S+1,S+2)}let l=new Wa;return l.setAttribute("position",new ft(e,3)),l.setAttribute("color",new ft(t,3)),l.setAttribute("normal",new ft(n,3)),l.setIndex(s),l}function Z_(i,e){let t=K_(),n=gn(77),s=22,r=new Float32Array(e*4);for(let c=0;c<e;c++)r[c*4]=(n()*2-1)*s,r[c*4+1]=(n()*2-1)*s,r[c*4+2]=n(),r[c*4+3]=.8+n()*.7;t.setAttribute("aOff",new mi(r,4)),t.instanceCount=e;let a={uPlayer:{value:new U},uR:{value:s},uTime:pu.uTime,uWater:{value:$t},uPathW:{value:Xc},...ym()},o=new Tt({vertexColors:!0,roughness:.92,metalness:0,side:Yt});o.onBeforeCompile=c=>{Object.assign(c.uniforms,a),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aOff; uniform vec3 uPlayer; uniform float uR, uTime, uWater, uPathW;
        ${cd}`).replace("#include <color_vertex>",`#include <color_vertex>
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
 normal = normalize(vNormal);`)};let l=new Ve(t,o);return l.frustumCulled=!1,l.receiveShadow=!0,l.userData.noAO=!0,i.add(l),{mesh:l,u:a,maxCount:e,geo:t}}function Yd(i,e,t,n,s,r){let a=new Map;for(let f of t){let p=Math.floor(f.x/s)+","+Math.floor(f.z/s);(a.get(p)||a.set(p,[]).get(p)).push(f)}let o=new We,l=new _t,c=new U,u=new U,h=new Ot,d=new de;a.forEach((f,p)=>{let[b,g]=p.split(",").map(Number),m=new ii(e.barkGeo,e.barkMat,f.length),M=new ii(e.leafGeo,e.leafMat,f.length);M.customDepthMaterial=e.depthMat,M.userData.noAO=!0,f.forEach((_,y)=>{h.set(0,_.r*Pt,0),l.setFromEuler(h),c.set(_.x,_.y-.1,_.z);let T=e.scale*_.s;u.set(T,T,T*(.92+_.c*.16)),o.compose(c,l,u),m.setMatrixAt(y,o),M.setMatrixAt(y,o),d.setRGB(.82+_.c*.3,.86+_.c*.26,.78+_.c*.2),M.setColorAt(y,d)});for(let _ of[m,M])_.castShadow=r===0,_.receiveShadow=!0,_.instanceMatrix.needsUpdate=!0,_.computeBoundingSphere(),_.visible=!1,i.add(_);m.userData.bark=!0,M.instanceColor.needsUpdate=!0,n.push({cx:(b+.5)*s,cz:(g+.5)*s,half:s*.72,meshes:[m,M],n:f.length,lod:r||0,bush:!!e.bush})})}var fu=null;async function a0(i){fu||(fu=new zc,fu.setDecoderPath("assets/draco/"));let e=new Yc;return e.setDRACOLoader(fu),e.loadAsync(i)}function o0(i,e){let t=new _n().setFromObject(i),n=t.getSize(new U),s=e/Math.max(n.x,n.y,n.z),r=[];i.updateMatrixWorld(!0),i.traverse(o=>{if(!o.isMesh)return;let l=o.geometry.clone();l.applyMatrix4(o.matrixWorld),l.scale(s,s,s),r.push({geo:l,mat:o.material})});let a=new _n;return r.forEach(o=>{o.geo.computeBoundingBox(),a.union(o.geo.boundingBox)}),r.forEach(o=>o.geo.translate(-(a.min.x+a.max.x)/2,-a.min.y,-(a.min.z+a.max.z)/2)),r}async function l0({scene:i,heroes:e,addObs:t,progress:n,quality:s}){let a=[],o={v:s==="hemat"},l=async(P,I)=>{n&&n(I,P),await pm()};await l("Menumbuhkan pohon\u2026",.05);let c=[{k:"oak",preset:"Oak Medium",seed:11,height:11,w:.26},{k:"oak",preset:"Oak Medium",seed:23,height:13,w:.2,tint:5081652},{k:"ash",preset:"Ash Medium",seed:5,height:12,w:.16},{k:"pine",preset:"Pine Medium",seed:3,height:15,w:.2},{k:"pine",preset:"Pine Medium",seed:9,height:12,w:.1},{k:"aspen",preset:"Aspen Medium",seed:8,height:12,w:.08}],u=[],h=[];for(let P=0;P<c.length;P++)u.push(du(c[P].preset,{...c[P],lite:!0,liteLeaf:.65,liteBranch:.8})),h.push(du(c[P].preset,{...c[P],lite:!0,liteLeaf:.32})),await l("Menumbuhkan pohon\u2026",.05+.25*(P+1)/c.length);let d=gn(7),f=[],p=8,b=0,g=230;for(;f.length<g&&b<9e3;){b++;let P=(d()*2-1)*108,I=(d()*2-1)*108;if(Math.hypot(P,I)<10)continue;let A=cn(P,I);A<$t+.9||Yr(P,I)<2.6||e.some(N=>Math.hypot(P-N.x,I-N.z)<p)||f.some(N=>Math.hypot(P-N.x,I-N.z)<4.2)||f.push({x:P,y:A,z:I,s:.8+d()*.5,r:d(),c:d(),n:Math.sin(P*.03)*Math.cos(I*.025)})}let m=u.map(()=>[]),M=c.reduce((P,I)=>P+I.w,0);for(let P of f){let I=Ft((P.n*.5+.5)*.7+P.c*.3,0,.999)*M,A=0,N=0;for(let B=0;B<c.length;B++)if(A+=c[B].w,I<A){N=B;break}m[N].push(P),t(P.x,P.z,Math.max(.28,Math.min(.9,u[N].trunkR*P.s*.6)))}u.forEach((P,I)=>{m[I].length&&(Yd(i,P,m[I],a,40,0),Yd(i,h[I],m[I],a,40,1))}),await l("Menanam semak\u2026",.4);let y=[["Bush 1",31,1.5],["Bush 2",32,1.2],["Bush 3",33,1.4]].map(P=>{let I=du(P[0],{seed:P[1],height:P[2],lite:!0,liteLeaf:.6});return I.bush=!0,I}),T=[[],[],[]],S=gn(99);for(let P=0,I=0;P<150&&I<3e3;I++){let A=(S()*2-1)*108,N=(S()*2-1)*108,B=cn(A,N);B<$t+.7||Math.hypot(A,N)<6||Yr(A,N)<1.8||(T[P%3].push({x:A,y:B,z:N,s:.7+S()*.7,r:S(),c:S()}),P++)}y.forEach((P,I)=>Yd(i,P,T[I],a,40,0)),await l("Menanam rumput\u2026",.5);let x=[],v=[];for(let P=0;P<e.length;P++){let I=e[P],A=W_[I.id],N=du(A.preset,A),B=new Jt,k=cn(I.x,I.z);B.position.set(I.x,k-.1,I.z),B.rotation.y=P*2.1;let Y=new Ve(N.barkGeo,N.barkMat),X=new Ve(N.leafGeo,N.leafMat);X.customDepthMaterial=N.depthMat,X.userData.noAO=!0;for(let Q of[Y,X])Q.castShadow=!0,Q.receiveShadow=!0,Q.scale.setScalar(N.scale),B.add(Q);if(A.roots){let Q=gn(88+P),te=[];for(let K=0;K<34;K++){let oe=Q()*Pt,pe=1.2+Math.pow(Q(),.7)*5.2,ke=.012+Q()*.02,xe=4.2+Q()*3.6,Je=xe-(Q()<.35?0:Q()*(xe-.6)),Oe=new An(ke*.5,ke,Je,4,3,!0);Oe.translate(0,-Je/2,0);let ee=Oe.attributes.position;for(let me=0;me<ee.count;me++){let fe=ee.getY(me);ee.setX(me,ee.getX(me)+Math.sin(fe*1.7+K)*.05)}Oe.rotateZ((Q()-.5)*.1),Oe.translate(Math.cos(oe)*pe,xe,Math.sin(oe)*pe),te.push(Oe)}let O=new Ve(Vc(te),N.barkMat);O.castShadow=!0,B.add(O)}i.add(B),I.top=N.height;let $=new Ve(new Hs(.5,0),new Tt({color:16765786,emissive:16754688,emissiveIntensity:2.2,roughness:.3}));$.position.set(I.x,k+N.height+2.2,I.z),$.userData.noAO=!0,i.add($);let J=new Gs(1.9,2.15,64,1);J.rotateX(-Math.PI/2);{let Q=J.attributes.position;for(let te=0;te<Q.count;te++)Q.setY(te,cn(I.x+Q.getX(te),I.z+Q.getZ(te))-k+.14)}let ce=new Ve(J,new Wt({color:new de(2.2,1.7,.5),transparent:!0,opacity:.8,side:Yt,depthWrite:!1}));ce.position.set(I.x,k,I.z),ce.userData.noAO=!0,i.add(ce);let ge=new Ve(new An(2.6,2.6,N.height+2,8),new Wt({visible:!1}));ge.position.set(I.x,k+(N.height+2)/2,I.z),ge.userData.hero=P,i.add(ge),v.push(ge),x.push({g:B,mk:$,ring:ce,y:k}),t(I.x,I.z,Math.max(.8,N.trunkR*.9)),await l("Menumbuhkan pohon bertanda\u2026",.5+.2*(P+1)/e.length)}let D=Z_(i,s==="hemat"?8e3:34e3);D.maxCount=34e3,await l("Menata batu dan bunga\u2026",.78);let L=[];try{let P=gn(404),I=new We,A=new _t,N=new Ot,B=new U,k=new U;for(let Y of["rock1","rock2","rock3"]){let X=await a0("assets/models/"+Y+".glb"),$=o0(X.scene,1),J=16;for(let ce of $){let ge=new ii(ce.geo,ce.mat,J);for(let Q=0;Q<J;Q++){let te,O,K,oe=0;do{let ke=P()*Pt,xe=P()<.4?Hn.r+2+P()*8:12+P()*95;te=(P()<.4?Hn.x:0)+Math.cos(ke)*xe,O=(P()<.4?Hn.z:0)+Math.sin(ke)*xe,K=cn(te,O),oe++}while((K<$t-.3||Math.hypot(te,O)<8||Yr(te,O)<2||Math.abs(te)>110||Math.abs(O)>110)&&oe<40);let pe=.5+P()*P()*2.4;N.set((P()-.5)*.4,P()*Pt,(P()-.5)*.4),A.setFromEuler(N),B.set(te,K+pe*.06,O),k.set(pe*(.9+P()*.4),pe*(.7+P()*.3),pe),I.compose(B,A,k),ge.setMatrixAt(Q,I),pe>1.2&&ce===$[0]&&t(te,O,pe*.42)}ge.castShadow=!0,ge.receiveShadow=!0,ge.instanceMatrix.needsUpdate=!0,i.add(ge),L.push(ge)}}}catch(P){console.warn("rock load failed",P)}try{let P=gn(808),I=new We,A=new _t,N=new Ot,B=new U,k=new U,Y=[];for(let X=0,$=0;X<80&&$<2e3;$++){let J=P()*Pt,ce=5+P()*55,ge=Math.cos(J)*ce,Q=Math.sin(J)*ce;if(!(cn(ge,Q)<$t+.6||Yr(ge,Q)<1.4)){for(let O=0;O<3;O++){let K=ge+(P()-.5)*3,oe=Q+(P()-.5)*3,pe=cn(K,oe);pe>$t+.5&&Y.push({x:K,y:pe,z:oe,s:.7+P()*.6,r:P()*Pt})}X++}}for(let X of["flower_blue","flower_white","flower_yellow"]){let $=await a0("assets/models/"+X+".glb"),J=o0($.scene,.4),ce=Y.filter((ge,Q)=>Q%3===["flower_blue","flower_white","flower_yellow"].indexOf(X));for(let ge of J){let Q=new ii(ge.geo,ge.mat,ce.length);ce.forEach((te,O)=>{N.set(0,te.r,0),A.setFromEuler(N),B.set(te.x,te.y-.02,te.z),k.setScalar(te.s),I.compose(B,A,k),Q.setMatrixAt(O,I)}),Q.instanceMatrix.needsUpdate=!0,Q.frustumCulled=!1,Q.userData.noAO=!0,i.add(Q)}}}catch(P){console.warn("flower load failed",P)}await l("Selesai",1);let w={treeVariants:u.map((P,I)=>({b:P.btris,l:P.ltris,lb:h[I].btris,ll:h[I].ltris})),bush:y.map(P=>({b:P.btris,l:P.ltris})),chunkCount:a.length};return{heroObjs:x,heroHits:v,grass:D,chunks:a,info:w,setQuality(P){o.v=P==="hemat";for(let I of a)I.lod===0&&!I.bush&&(I.meshes[0].castShadow=!o.v);D.geo.instanceCount=P==="hemat"?8e3:34e3},update(P,I,A){pu.uTime.value=I,D.u.uPlayer.value.set(P.x,P.y,P.z);let N=o.v?60:130,B=o.v?17:42,k=o.v?.45:1;for(let Y of a){let X=Math.hypot(P.x-Y.cx,P.z-Y.cz)-Y.half,$;Y.bush?$=X<N*.38:Y.lod===0?$=X<B:$=X>=B&&X<N;for(let J of Y.meshes)J.visible=$,$&&(J.count=Math.max(1,Math.ceil(Y.n*(Y.bush?1:k))))}}}}var Ci={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ev=new ji(-1,1,1,-1,0,1),$d=class extends gt{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}},tv=new $d,Ui=class{constructor(e){this._mesh=new Ve(tv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ev)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var mu=class extends Pn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rn.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ui(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Lo=class extends Pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},gu=class extends Pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var xu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mu(Ci),this.copyPass.material.blending=fn,this.timer=new Ka}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Lo!==void 0&&(a instanceof Lo?n=!0:a instanceof gu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var bu=class extends Pn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var wo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new he},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new We},cameraProjectionMatrixInverse:{value:new We},cameraWorldMatrix:{value:new We},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},Io={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},yu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function c0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=nv(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new U(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ei(s,e,e);return r.wrapS=Nt,r.wrapT=Nt,r.needsUpdate=!0,r}function nv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Fo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Qd(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new he},cameraProjectionMatrixInverse:{value:new We},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Qd(i,e,t){let n=iv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function iv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new U(Math.cos(r),Math.sin(r),a))}return n}var Mu=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,p=e-d,b=t-f,g,m;p>b?(g=1,m=0):(g=0,m=1);let M=p-g+u,_=b-m+u,y=p-1+2*u,T=b-1+2*u,S=l&255,x=c&255,v=this.perm[S+this.perm[x]]%12,D=this.perm[S+g+this.perm[x+m]]%12,L=this.perm[S+1+this.perm[x+1]]%12,w=.5-p*p-b*b;w<0?n=0:(w*=w,n=w*w*this._dot(this.grad3[v],p,b));let P=.5-M*M-_*_;P<0?s=0:(P*=P,s=P*P*this._dot(this.grad3[D],M,_));let I=.5-y*y-T*T;return I<0?r=0:(I*=I,r=I*I*this._dot(this.grad3[L],y,T)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,p=(u+h+d)*f,b=u-p,g=h-p,m=d-p,M=e-b,_=t-g,y=n-m,T,S,x,v,D,L;M>=_?_>=y?(T=1,S=0,x=0,v=1,D=1,L=0):M>=y?(T=1,S=0,x=0,v=1,D=0,L=1):(T=0,S=0,x=1,v=1,D=0,L=1):_<y?(T=0,S=0,x=1,v=0,D=1,L=1):M<y?(T=0,S=1,x=0,v=0,D=1,L=1):(T=0,S=1,x=0,v=1,D=1,L=0);let w=M-T+f,P=_-S+f,I=y-x+f,A=M-v+2*f,N=_-D+2*f,B=y-L+2*f,k=M-1+3*f,Y=_-1+3*f,X=y-1+3*f,$=u&255,J=h&255,ce=d&255,ge=this.perm[$+this.perm[J+this.perm[ce]]]%12,Q=this.perm[$+T+this.perm[J+S+this.perm[ce+x]]]%12,te=this.perm[$+v+this.perm[J+D+this.perm[ce+L]]]%12,O=this.perm[$+1+this.perm[J+1+this.perm[ce+1]]]%12,K=.6-M*M-_*_-y*y;K<0?s=0:(K*=K,s=K*K*this._dot3(this.grad3[ge],M,_,y));let oe=.6-w*w-P*P-I*I;oe<0?r=0:(oe*=oe,r=oe*oe*this._dot3(this.grad3[Q],w,P,I));let pe=.6-A*A-N*N-B*B;pe<0?a=0:(pe*=pe,a=pe*pe*this._dot3(this.grad3[te],A,N,B));let ke=.6-k*k-Y*Y-X*X;return ke<0?o=0:(ke*=ke,o=ke*ke*this._dot3(this.grad3[O],k,Y,X)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,p,b=(e+t+n+s)*l,g=Math.floor(e+b),m=Math.floor(t+b),M=Math.floor(n+b),_=Math.floor(s+b),y=(g+m+M+_)*c,T=g-y,S=m-y,x=M-y,v=_-y,D=e-T,L=t-S,w=n-x,P=s-v,I=D>L?32:0,A=D>w?16:0,N=L>w?8:0,B=D>P?4:0,k=L>P?2:0,Y=w>P?1:0,X=I+A+N+B+k+Y,$=a[X][0]>=3?1:0,J=a[X][1]>=3?1:0,ce=a[X][2]>=3?1:0,ge=a[X][3]>=3?1:0,Q=a[X][0]>=2?1:0,te=a[X][1]>=2?1:0,O=a[X][2]>=2?1:0,K=a[X][3]>=2?1:0,oe=a[X][0]>=1?1:0,pe=a[X][1]>=1?1:0,ke=a[X][2]>=1?1:0,xe=a[X][3]>=1?1:0,Je=D-$+c,Oe=L-J+c,ee=w-ce+c,me=P-ge+c,fe=D-Q+2*c,Ie=L-te+2*c,Ee=w-O+2*c,Ze=P-K+2*c,Ge=D-oe+3*c,He=L-pe+3*c,et=w-ke+3*c,Be=P-xe+3*c,G=D-1+4*c,bt=L-1+4*c,je=w-1+4*c,st=P-1+4*c,be=g&255,At=m&255,Xe=M&255,Qe=_&255,C=o[be+o[At+o[Xe+o[Qe]]]]%32,E=o[be+$+o[At+J+o[Xe+ce+o[Qe+ge]]]]%32,z=o[be+Q+o[At+te+o[Xe+O+o[Qe+K]]]]%32,ye=o[be+oe+o[At+pe+o[Xe+ke+o[Qe+xe]]]]%32,ue=o[be+1+o[At+1+o[Xe+1+o[Qe+1]]]]%32,Se=.6-D*D-L*L-w*w-P*P;Se<0?u=0:(Se*=Se,u=Se*Se*this._dot4(r[C],D,L,w,P));let Ae=.6-Je*Je-Oe*Oe-ee*ee-me*me;Ae<0?h=0:(Ae*=Ae,h=Ae*Ae*this._dot4(r[E],Je,Oe,ee,me));let se=.6-fe*fe-Ie*Ie-Ee*Ee-Ze*Ze;se<0?d=0:(se*=se,d=se*se*this._dot4(r[z],fe,Ie,Ee,Ze));let re=.6-Ge*Ge-He*He-et*et-Be*Be;re<0?f=0:(re*=re,f=re*re*this._dot4(r[ye],Ge,He,et,Be));let Te=.6-G*G-bt*bt-je*je-st*st;return Te<0?p=0:(Te*=Te,p=Te*Te*this._dot4(r[ue],G,bt,je,st)),27*(u+h+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Do=class i extends Pn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=c0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Gt(this.width,this.height,{type:zt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ct({defines:Object.assign({},wo.defines),uniforms:Rn.clone(wo.uniforms),vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Va,this.normalMaterial.blending=fn,this.pdMaterial=new Ct({defines:Object.assign({},Fo.defines),uniforms:Rn.clone(Fo.uniforms),vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ct({defines:Object.assign({},Io.defines),uniforms:Rn.clone(Io.uniforms),vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader,blending:fn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ct({uniforms:Rn.clone(Ci.uniforms),vertexShader:Ci.vertexShader,fragmentShader:Ci.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:no,blendDst:Xs,blendEquation:ri,blendSrcAlpha:to,blendDstAlpha:Xs,blendEquationAlpha:ri}),this.blendMaterial=new Ct({uniforms:Rn.clone(yu.uniforms),vertexShader:yu.vertexShader,fragmentShader:yu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ql,blendSrc:no,blendDst:Xs,blendEquation:ri,blendSrcAlpha:to,blendDstAlpha:Xs,blendEquationAlpha:ri}),this._fsQuad=new Ui(null),this._originalClearColor=new de,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new gi;s.format=bi,s.type=Ki,this.normalRenderTarget=new Gt(this.width,this.height,{minFilter:Ht,magFilter:Ht,type:zt,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Qd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=fn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Mu,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ei(s,e,e,Bn,Sn);return r.wrapS=Nt,r.wrapT=Nt,r.needsUpdate=!0,r}};Do.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var u0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Jr=class i extends Pn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Gt(r,a,{type:zt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Gt(r,a,{type:zt,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Gt(r,a,{type:zt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=u0;this.highPassUniforms=Rn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new he(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rn.clone(Ci.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:Ci.vertexShader,fragmentShader:Ci.fragmentShader,premultipliedAlpha:!0,blending:eo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new Wt,this._fsQuad=new Ui(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ct({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Jr.BlurDirectionX=new he(1,0);Jr.BlurDirectionY=new he(0,1);var No={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var _u=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Rn.clone(No.uniforms),this.material=new Lr({name:No.name,uniforms:this.uniforms,vertexShader:No.vertexShader,fragmentShader:No.fragmentShader}),this._fsQuad=new Ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===so?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===co?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function vu(i,e,t,n={}){let s=new Gt(4,4,{type:zt,samples:4}),r=new xu(i,s);r.addPass(new bu(e,t));let a=new Do(e,t,4,4);a.blendIntensity=n.aoStrength??1,a.updateGtaoMaterial({radius:n.aoRadius??.7,distanceExponent:1,thickness:1.5,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),a.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:12});let o=a._overrideVisibility.bind(a);a._overrideVisibility=function(){o(),e.traverse(c=>{c.userData&&c.userData.noAO&&c.visible&&(c.visible=!1,a._visibilityCache.push(c))})},r.addPass(a);let l=new Jr(new he(4,4),n.bloomStrength??.3,.7,n.bloomThreshold??1);return r.addPass(l),r.addPass(new _u),{composer:r,gtao:a,bloom:l,setSize(c,u,h){r.setPixelRatio(h),r.setSize(c,u)},setQuality(c){a.enabled=l.enabled=c==="tinggi";let u=c==="tinggi"?4:2;for(let h of[r.renderTarget1,r.renderTarget2])h.samples!==u&&(h.samples=u,h.dispose())},render(c){r.render(c)},dispose(){r.dispose&&r.dispose()}}}var jr=class extends $n{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ms;e.deleteAttribute("uv");let t=new Tt({side:an}),n=new Tt,s=new Os(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ve(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ii(e,n,6),o=new kt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ve(e,Wr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ve(e,Wr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ve(e,Wr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Ve(e,Wr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new Ve(e,Wr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ve(e,Wr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Wr(i){return new Ya({color:0,emissive:16777215,emissiveIntensity:i})}var _s=6;var vs=320*Math.PI/180,Tu=vs+260*Math.PI/180,Su=5.2,Kr=new Float32Array(256*256);{let i=gn(1234);for(let e=0;e<Kr.length;e++)Kr[e]=i()}function li(i,e,t=256,n=256){let s=Math.floor(i),r=Math.floor(e),a=i-s,o=e-r,l=a*a*(3-2*a),c=o*o*(3-2*o),u=(s%t+t)%t,h=(u+1)%t,d=(r%n+n)%n,f=(d+1)%n,p=Kr[(d&255)*256+(u&255)],b=Kr[(d&255)*256+(h&255)],g=Kr[(f&255)*256+(u&255)],m=Kr[(f&255)*256+(h&255)];return p+(b-p)*l+(g-p)*c+(p-b-g+m)*l*c}function Uo(i,e,t=3,n=256,s=256){let r=0,a=.5,o=1;for(let l=0;l<t;l++)r+=a*li(i*o,e*o,n*o,s*o),o*=2,a*=.5;return r}var Jd=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t];function sv(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),a=r.data,o=Object.fromEntries(e.map(y=>[y.id,y])),l=t.barkA,c=t.barkB,u=t.cortex,h=[.56,.76,.33],d=o.floem.ro,f=o.kambium.ro,p=o.xilem.ro,b=o.teras.ro,g=o.empulur.ro,m=t.rings,M=t.contrast;for(let y=0;y<i;y++)for(let T=0;T<i;T++){let S=(T/i-.5)*Su,x=(.5-y/i)*Su,v=Math.hypot(S,x),D=Math.atan2(x,S),L,w=(Uo(S*1.4+3,x*1.4+7,3)-.35)*.09+Math.sin(D*3+1.2)*.012,P=v+w;if(v>=d){let B=Uo(D*9,v*7,3),k=Ut(.52,.72,Uo(D*16+5,v*3.2,3));L=Jd(l,c,B*.9+k*.7);let Y=.82+.3*li(D*70,v*9);L=L.map(X=>X*Y)}else if(v>=f){let B=li(D*90,v*14),k=li(D*28,v*5);L=u.map(Y=>Y*(.86+.2*B)*(.95+.1*k))}else if(v>=p)L=h.map(B=>B*(.94+.1*li(D*50,v*40)));else if(v>=g){let B=v<b,k=(P-g)*m,Y=k-Math.floor(k),X=Math.floor(k),$=Ut(.5,.93,Y)*(1-Ut(.965,1,Y)),J=.95+.08*(X*7919%13/13-.5)*2,ce=Math.pow(li(D*60,v*1.6),3)*t.rays,ge=(li(S*45,x*45)-.5)*.05,Q=B?t.heartE:t.sapE,te=B?t.heartL:t.sapL;L=Jd(Q,te,$*M*2.2).map(K=>K*J+ce+ge);let O=li(S*150+11,x*150+5);if(t.pores==="ring"?Y<.16&&O>.62&&(L=L.map(K=>K*.55)):t.pores==="diffuse"?O>.87&&(L=L.map(K=>K*.78)):t.pores==="resin"&&li(S*55+3,x*55+9)>.972&&(L=[.55,.34,.14]),B){let K=Ut(.78,.9,li(D*5+9,v*.4))*Ut(1,.4,v);L=L.map(oe=>oe*(1-K*.35))}}else{let B=v/g;L=t.pith.map(k=>k*(.9+.14*li(S*80,x*80))*(1-.35*(1-B)*(1-B)))}let I=Math.min(Math.abs(v-d),Math.abs(v-f),Math.abs(v-p),Math.abs(v-b)),A=1-.38*(1-Ut(0,.012,I)),N=(y*i+T)*4;a[N]=Ft(L[0]*A,0,1)*255,a[N+1]=Ft(L[1]*A,0,1)*255,a[N+2]=Ft(L[2]*A,0,1)*255,a[N+3]=255}s.putImageData(r,0,0);let _=new vn(n);return _.colorSpace=xt,_.anisotropy=8,_.generateMipmaps=!0,_.minFilter=kn,_.repeat.set(1/Su,1/Su),_.offset.set(.5,.5),_}function Co(i,e,t={}){let r=document.createElement("canvas");r.width=256,r.height=512;let a=r.getContext("2d"),o=a.createImageData(256,512),l=o.data,c=t.fu||48,u=t.fv||4;for(let d=0;d<512;d++)for(let f=0;f<256;f++){let p=f/256,b=d/512,g=Uo(p*c+0,b*u,2,c,u),m=.5+.5*Math.sin((p*6+Uo(p*3,b*1.5,2,3,2)*5)*Pt),M=Ft(.35+.65*g,0,1),_=Jd(i,e,Ft((1-M)*.8+m*(t.band??.25),0,1)),y=li(p*220,b*6,220,6)>.93?.88:1,T=(d*256+f)*4;l[T]=Ft(_[0]*y,0,1)*255,l[T+1]=Ft(_[1]*y,0,1)*255,l[T+2]=Ft(_[2]*y,0,1)*255,l[T+3]=255}a.putImageData(o,0,0);let h=new vn(r);return h.colorSpace=xt,h.wrapS=h.wrapT=Nt,h.anisotropy=8,h.repeat.set(1/1.3,1/3),h}function zd(i,e,t,n){let s=new Cn().load(i);return s.wrapS=s.wrapT=Nt,s.anisotropy=8,e&&(s.colorSpace=xt),s.repeat.set(t,n),s}function rv(i,e){let t=new Ar;e<=.001?(t.moveTo(0,0),t.lineTo(i*Math.cos(vs),i*Math.sin(vs)),t.absarc(0,0,i,vs,Tu,!1),t.lineTo(0,0)):(t.absarc(0,0,i,vs,Tu,!1),t.absarc(0,0,e,Tu,vs,!0),t.closePath());let n=new Xa(t,{depth:_s,bevelEnabled:!1,curveSegments:96});n.rotateX(-Math.PI/2),n.translate(0,-_s/2,0);let s=n.attributes.position,r=n.attributes.uv,a=.001;for(let o of n.groups)for(let l=o.start;l<o.start+o.count;l+=3){let c=[0,1,2].map(h=>Math.hypot(s.getX(l+h),s.getZ(l+h))),u="cap";o.materialIndex===1&&(u=c.every(h=>Math.abs(h-i)<a)?"outer":e>0&&c.every(h=>Math.abs(h-e)<a)?"inner":"cut");for(let h=0;h<3;h++){let d=s.getX(l+h),f=s.getY(l+h),p=s.getZ(l+h),b,g;if(u==="cap")b=d,g=-p;else if(u==="outer"||u==="inner"){let m=Math.atan2(-p,d)-vs;m=(m%Pt+Pt)%Pt,m>5.5&&(m-=Pt),b=m*(u==="outer"?i:e),g=f}else b=Math.hypot(d,p),g=f;r.setXY(l+h,b,g)}}return r.needsUpdate=!0,n}function av(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,Pt),e.fill(),new vn(i)}function h0(i,e){let t=new $n;{let A=document.createElement("canvas");A.width=A.height=512;let N=A.getContext("2d"),B=N.createRadialGradient(256,230,20,256,256,420);B.addColorStop(0,"#1f4a42"),B.addColorStop(.55,"#0f2a26"),B.addColorStop(1,"#040c0a"),N.fillStyle=B,N.fillRect(0,0,512,512);let k=new vn(A);k.colorSpace=xt,t.background=k}let n=new Di(i);t.environment=n.fromScene(new jr,.04).texture,t.environmentIntensity=.45;let s=new Xt(38,1,.1,100),r=new Un(16773596,2.4);r.position.set(4,9,8),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);let a=r.shadow.camera;a.left=-6,a.right=6,a.top=6,a.bottom=-6,a.near=1,a.far=30,r.shadow.bias=-5e-4,r.shadow.normalBias=.03,t.add(r);let o=new Un(9425151,1.3);o.position.set(-6,3,-5),t.add(o);let c=matchMedia("(pointer:coarse)").matches?1024:1280,u={oak:[tu,nu,iu,eu],pine:[ru,au,ou,su],birch:[jc,Kc,Zc,Wc],willow:[cu,uu,hu,lu]},h={},d={},f=A=>h[A]||(h[A]=u[A].map((N,B)=>zd(N,B===0,1/2.4,1/2.4)));function p(A){let N=A.id;if(d[N])return d[N];let B=new de(A.barkTint),k=[B.r,B.g,B.b],Y={...A,barkA:k.map($=>$*.5),barkB:k.map($=>$*.95)},X={floem:Co(A.cortex,A.cortex.map($=>$*.72),{fu:64,band:.12}),kambium:Co([.56,.76,.34],[.42,.62,.24],{fu:64,band:.05}),xilem:Co(A.sapE,A.sapL,{fu:40,band:.3}),teras:Co(A.heartE,A.heartL,{fu:40,band:.35+A.contrast*.3}),empulur:Co(A.pith,A.pith.map($=>$*.85),{fu:90,band:.05})};return d[N]={cap:sv(c,e,Y),side:X,bark:f(A.bark),tint:new de(A.barkTint)}}let b=[],g={};e.forEach(A=>{let N=new de(A.col),B=new Tt({bumpScale:.6,roughness:A.id==="kambium"?.5:.78,metalness:0}),k=A.id==="kulit"?new Tt({roughness:1,metalness:0}):new Tt({roughness:A.id==="kambium"?.5:.78,metalness:0}),Y=new Ve(rv(A.ro,A.ri),[B,k]);Y.castShadow=!0,Y.receiveShadow=!0,Y.userData.layer=A.id,t.add(Y),A.id==="kulit"&&Y.geometry.setAttribute("uv1",Y.geometry.attributes.uv),b.push(Y),g[A.id]={mats:[B,k],base:new de(1,1,1),emi:N,k:0}});let m=null;function M(A){if(m===A.id)return;m=A.id;let N=p(A);e.forEach(B=>{let[k,Y]=g[B.id].mats;if(k.map=k.bumpMap=N.cap,k.needsUpdate=!0,B.id==="kulit"){let[X,$,J,ce]=N.bark;Y.map=X,Y.normalMap=$,Y.roughnessMap=J,Y.aoMap=ce,Y.userData.tint=N.tint,g[B.id].tint=N.tint.clone().lerp(new de(1,1,1),.25)}else Y.map=N.side[B.id];Y.needsUpdate=!0})}let _=zd(Xr,!0,2.2,2.2),y=zd(Vr,!1,2.2,2.2),T=new Ve(new An(3.7,3.9,.34,72),new Tt({map:_,normalMap:y,color:new de(.8,.72,.62),roughness:1}));T.position.y=-_s/2-.17,T.receiveShadow=!0,T.userData.noAO=!0,t.add(T);let S=av();function x(A,N,B,k,Y,X){let $=gn(X),J=[];for(let Q=0;Q<A;Q++)J.push({f:Q%2,r:N[0]+$()*(N[1]-N[0]),y:($()-.5)*_s,v:.7+$()*.7,p:$()*Pt});let ce=new gt;ce.setAttribute("position",new ct(new Float32Array(A*3),3));let ge=new Qn(ce,new Dn({map:S,color:k,size:Y,sizeAttenuation:!0,transparent:!0,depthWrite:!1}));return ge.frustumCulled=!1,ge.userData.noAO=!0,t.add(ge),{pts:ge,data:J,dir:B}}let v=.03,D=x(110,[1.32,1.82],1,new de(.5,1.5,2.6),.22,31),L=x(80,[2.04,2.24],-1,new de(2.6,1.55,.35),.22,32);function w(A,N,B,k){let Y=A.pts.geometry.attributes.position;for(let X=0;X<A.data.length;X++){let $=A.data[X];$.y+=A.dir*$.v*N*B,$.y>_s/2?$.y-=_s:$.y<-_s/2&&($.y+=_s);let J=($.f===0?vs-v:Tu+v)+Math.sin(k*1.6+$.p)*.006;Y.setXYZ(X,$.r*Math.cos(J),$.y,-$.r*Math.sin(J))}Y.needsUpdate=!0}let P={yaw:0,pitch:.5,dist:14,user:!1,sun:.65},I=new de(.2,.26,.24);return{scene:t,camera:s,layerMeshes:b,layerMat:g,waterFlow:D,sugarFlow:L,state:P,setSpecies:M,update(A,N,B,k){P.user||(P.yaw=.3*Math.sin(N*.45));let Y=Math.cos(P.pitch),X=Math.sin(P.pitch);s.position.set(Math.sin(P.yaw)*Y*P.dist,X*P.dist,Math.cos(P.yaw)*Y*P.dist),s.lookAt(0,0,0);let $=P.sun;r.intensity=1+1.9*$,t.environmentIntensity=.3+.25*$,w(D,.25+1.7*$,A,N),w(L,.12+.75*$,A,N),e.forEach(J=>{let ce=g[J.id],ge=B&&B!==J.id?.7:0;ce.k+=(ge-ce.k)*Math.min(1,A*10);let Q=B===J.id?.12:k===J.id?.07:0;ce.mats.forEach((te,O)=>{te.color.copy(ce.base),O===1&&ce.tint&&te.color.multiply(ce.tint),te.color.lerp(I,ce.k),te.emissive.copy(ce.emi).multiplyScalar(Q)})})}}}var ov=[{id:"kulit",name:"Kulit dan bulu",sci:"Integumen",ui:"#e0a56a",short:"Pelindung tubuh dan pengatur suhu.",what:"Kulit dan bulu adalah lapisan terluar. Bulu kucing terdiri dari bulu pelindung yang panjang dan bulu halus di bawahnya (undercoat). Kumis (vibrissae) adalah rambut peraba yang sangat peka.",fn:"Melindungi dari luka, kuman, dan panas atau dingin. Bulu menjebak udara sehingga menahan panas tubuh. Kumis membantu kucing merasakan lebar celah dan gerakan udara.",fact:"Suhu tubuh normal kucing sekitar 38 sampai 39 derajat Celsius, sedikit lebih hangat dari manusia. Kucing hanya sedikit berkeringat, terutama lewat telapak kaki."},{id:"otot",name:"Otot",sci:"Sistem muskuler",ui:"#d0594a",short:"Penggerak tubuh lewat kontraksi.",what:"Otot rangka menempel ke tulang lewat tendon. Saat otot berkontraksi (memendek), tulang ditarik dan sendi bergerak. Otot kucing panjang dan lentur, terutama di kaki belakang dan punggung.",fn:"Menggerakkan tubuh untuk berjalan, melompat, dan memanjat. Otot dan tendon di kaki juga menarik cakar masuk dan keluar (cakar retraktil), sehingga cakar tetap tajam.",fact:"Kucing bisa melompat beberapa kali tinggi tubuhnya, sekitar lima kali menurut banyak rujukan, berkat otot kaki belakang yang kuat."},{id:"rangka",name:"Rangka",sci:"Sistem rangka",ui:"#eae0c4",short:"Kerangka penopang dan pelindung organ.",what:"Rangka kucing terdiri dari sekitar 230 tulang (manusia dewasa 206). Ada tengkorak, tulang belakang dengan ruas ekor yang panjang, 13 pasang tulang rusuk, dan tulang kaki.",fn:"Menopang tubuh, melindungi organ penting (otak oleh tengkorak, jantung dan paru oleh tulang rusuk), dan menjadi tempat melekatnya otot.",fact:"Tulang selangka kucing sangat kecil dan tidak tersambung ke tulang lain. Itu membuat bahu lentur, jadi kucing bisa menyelip di celah sempit selama kepalanya muat."},{id:"otak",name:"Otak",sci:"Sistem saraf pusat",ui:"#e8a8b0",short:"Pusat kendali dan pengolah informasi.",what:"Otak berada di dalam tengkorak dan berlekuk-lekuk. Otak besar mengolah indra dan perilaku, otak kecil (cerebellum) mengatur keseimbangan dan koordinasi gerak.",fn:"Menerima sinyal dari mata, telinga, hidung, kumis, dan kulit, lalu memerintahkan otot bergerak lewat saraf.",fact:"Beratnya hanya sekitar 25 sampai 30 gram. Kucing melihat baik di tempat redup karena mata punya lapisan pemantul cahaya (tapetum lucidum), itulah sebabnya mata kucing tampak bersinar saat disorot lampu."},{id:"jantung",name:"Jantung",sci:"Sistem peredaran darah",ui:"#e0505e",short:"Pompa yang mengalirkan darah ke seluruh tubuh.",what:"Jantung kucing berbilik empat seperti jantung manusia: dua serambi (atrium) menerima darah dan dua bilik (ventrikel) memompanya keluar.",fn:"Memompa darah yang membawa oksigen dan nutrisi ke seluruh tubuh, dan mengirim darah miskin oksigen ke paru-paru untuk diisi ulang.",fact:"Detak jantung kucing sehat umumnya sekitar 140 sampai 220 kali per menit, jauh lebih cepat dari manusia, dan naik saat aktif atau takut. Kucing tidak bisa membuat cukup taurin sendiri, jadi harus mendapatnya dari makanan berbahan daging. Kekurangan taurin dapat merusak otot jantung."},{id:"paru",name:"Paru-paru",sci:"Sistem pernapasan",ui:"#f0a0a8",short:"Tempat pertukaran oksigen dan karbon dioksida.",what:"Udara masuk lewat hidung, trakea (batang tenggorok), lalu bercabang ke dalam paru-paru. Di ujung cabangnya ada kantong kecil (alveolus) tempat gas bertukar dengan darah.",fn:"Mengambil oksigen dari udara ke darah dan membuang karbon dioksida. Otot diafragma dan otot antar rusuk membuat paru mengembang dan mengempis.",fact:"Kucing sehat bernapas sekitar 20 sampai 30 kali per menit saat istirahat. Kucing jarang terengah-engah, jadi kucing yang bernapas terengah atau cepat saat santai perlu dibawa ke dokter hewan."},{id:"hati",name:"Hati",sci:"Sistem pencernaan dan metabolisme",ui:"#b0463c",short:"Pabrik kimia tubuh: empedu, penawar racun, penyimpan nutrisi.",what:"Hati adalah organ besar berwarna cokelat kemerahan di depan perut, tepat di belakang diafragma.",fn:"Membuat empedu untuk membantu mencerna lemak, menetralkan zat berbahaya, menyimpan nutrisi, dan membuat protein darah.",fact:"Hati kucing sulit memecah beberapa zat, sehingga banyak obat manusia, misalnya parasetamol, beracun bagi kucing. Jangan memberi obat manusia tanpa saran dokter hewan."},{id:"lambung",name:"Lambung",sci:"Sistem pencernaan",ui:"#e89a8a",short:"Kantong pencerna awal dengan asam dan enzim.",what:"Makanan turun dari mulut lewat kerongkongan (esofagus) menuju lambung, kantong berotot dengan dinding yang melipat.",fn:"Mengaduk makanan, mencampurnya dengan asam lambung dan enzim sehingga protein mulai terurai menjadi bubur makanan (kimus).",fact:"Kucing adalah karnivora obligat, artinya tubuhnya dirancang untuk makan daging. Lambungnya kecil, itu sebabnya kucing cocok makan sedikit tapi sering."},{id:"usus",name:"Usus",sci:"Sistem pencernaan",ui:"#f0b8a8",short:"Menyerap nutrisi dan air, lalu membentuk tinja.",what:"Usus terdiri dari usus halus yang berkelok-kelok dan usus besar yang lebih pendek dan lebih lebar, berakhir di anus.",fn:"Usus halus menyerap nutrisi ke dalam darah. Usus besar menyerap air dan membentuk sisa makanan menjadi tinja.",fact:"Usus kucing relatif pendek dibanding hewan pemakan tumbuhan karena daging lebih mudah dicerna. Titik kuning yang bergerak di animasi menunjukkan perjalanan makanan dari mulut sampai anus."},{id:"ginjal",name:"Ginjal",sci:"Sistem ekskresi",ui:"#a04a3a",short:"Penyaring darah yang membuat urine.",what:"Ada dua ginjal berbentuk kacang di bagian belakang rongga perut, dekat tulang punggung.",fn:"Menyaring darah, membuang sisa metabolisme, mengatur kadar air dan garam, lalu membentuk urine.",fact:"Ginjal kucing bisa membuat urine yang sangat pekat sehingga kucing tidak banyak minum. Penyakit ginjal kronis cukup sering terjadi pada kucing yang menua."},{id:"kandung",name:"Kandung kemih",sci:"Sistem ekskresi",ui:"#f0dc8a",short:"Menampung urine sebelum dibuang.",what:"Kandung kemih adalah kantong berdinding otot di bagian belakang perut. Urine mengalir dari ginjal ke sana lewat dua saluran (ureter).",fn:"Menampung urine sementara, lalu mengeluarkannya lewat saluran uretra saat kucing buang air kecil.",fact:"Pada kucing jantan, uretra lebih sempit sehingga lebih mudah tersumbat. Kucing jantan yang mengejan di kotak pasir tanpa urine keluar harus segera ditangani dokter hewan."}],lv={id:"kucing",kind:"cat",name:"Kucing",short:"kucing",sci:"Felis catus",family:"Felidae",x:-5,z:7,top:.7,mkOff:1.1,promptY:.55,fact:"Kucing domestik termasuk keluarga Felidae, sama seperti singa dan harimau. Tubuhnya dirancang untuk berburu: refleks cepat, cakar yang bisa ditarik, mata peka cahaya redup, dan kumis peraba.",hint:"Geser slider Kedalaman untuk mengupas lapisan dari kulit sampai organ dalam, atau ketuk bagian tubuh dan daftar di samping. Geser Aktivitas untuk melihat jantung dan paru bekerja lebih cepat."},cv=[{id:"c1",sp:"kucing",q:"Lapisan mana yang terletak paling dalam, setelah kulit, otot, dan rangka dikupas?",o:["Organ dalam seperti jantung dan paru","Bulu pelindung","Kumis","Cakar"],a:0,e:"Urutannya dari luar: kulit dan bulu, otot, rangka, lalu organ dalam yang dilindungi tulang rusuk dan otot perut."},{id:"c2",sp:"kucing",q:"Jantung kucing berbilik empat. Apa tugas bilik (ventrikel)?",o:["Memompa darah keluar dari jantung","Menyimpan makanan","Menyaring urine","Membuat empedu"],a:0,e:"Serambi menerima darah, bilik memompanya keluar. Bilik kanan ke paru, bilik kiri ke seluruh tubuh."},{id:"c3",sp:"kucing",q:"Kira-kira berapa detak jantung kucing sehat per menit?",o:["10 sampai 30","60 sampai 80","140 sampai 220","500 sampai 600"],a:2,e:"Kisaran umumnya 140 sampai 220 kali per menit, lebih cepat daripada manusia (sekitar 60 sampai 100)."},{id:"c4",sp:"kucing",q:"Apa fungsi utama paru-paru?",o:["Menukar oksigen dan karbon dioksida","Membuat empedu","Menyaring darah jadi urine","Menyerap air dari sisa makanan"],a:0,e:"Di alveolus, oksigen masuk ke darah dan karbon dioksida dilepas ke udara napas."},{id:"c5",sp:"kucing",q:"Organ mana yang membuat empedu untuk membantu mencerna lemak?",o:["Hati","Ginjal","Lambung","Kandung kemih"],a:0,e:"Empedu dibuat di hati lalu dialirkan ke usus halus."},{id:"c6",sp:"kucing",q:"Kucing disebut karnivora obligat. Apa artinya?",o:["Tubuhnya dirancang makan daging dan butuh zat dari daging, misalnya taurin","Hanya makan sayur","Bisa hidup tanpa makan","Makan apa saja sama baiknya"],a:0,e:"Kucing tidak bisa membuat cukup taurin sendiri, jadi harus mendapatnya dari makanan berbahan daging."},{id:"c7",sp:"kucing",q:"Di mana nutrisi dari makanan terutama diserap ke dalam darah?",o:["Usus halus","Kerongkongan","Kandung kemih","Trakea"],a:0,e:"Usus halus punya permukaan lipatan luas untuk menyerap nutrisi. Usus besar terutama menyerap air."},{id:"c8",sp:"kucing",q:"Apa tugas ginjal?",o:["Menyaring darah dan membentuk urine","Memompa darah","Mencerna protein","Menyimpan oksigen"],a:0,e:"Ginjal membuang sisa metabolisme dan mengatur air serta garam dalam tubuh, hasilnya urine."},{id:"c9",sp:"kucing",q:"Mengapa kucing yang bernapas terengah-engah saat santai perlu dibawa ke dokter hewan?",o:["Kucing sehat jarang terengah, jadi itu bisa tanda gangguan napas atau jantung","Itu tanda kucing sedang senang","Itu cara normal kucing mendinginkan diri","Itu tanda kucing lapar"],a:0,e:"Napas istirahat normal sekitar 20 sampai 30 kali per menit dan tenang. Napas terengah pada kucing perlu diperiksa."}];var Ks={id:"kucing",name:"Kucing",layers:ov,specimen:lv,quiz:cv};var jn=i=>new U(i[0],i[1],i[2]),Gn=i=>Vc(i,!1),Mi=1,Eu=(i,e,t)=>new de().setRGB(i,e,t,xt);function Mt(i,e,t=22,n){let s=new Ri(1,t,Math.max(8,Math.round(t*.7)));return s.scale(i[0]*Mi,i[1]*Mi,i[2]*Mi),n&&(s.rotateX(n[0]),s.rotateY(n[1]),s.rotateZ(n[2])),s.translate(e[0],e[1],e[2]),s}function xn(i,e,t,n,s=10){let r=Mi;t*=r,n*=r,Mi=1;let a=jn(i),o=jn(e),l=o.clone().sub(a),c=l.length(),u=new An(n,t,c,s,1,!0);u.applyQuaternion(new _t().setFromUnitVectors(new U(0,1,0),l.clone().normalize())),u.translate((a.x+o.x)/2,(a.y+o.y)/2,(a.z+o.z)/2);let h=Gn([u,Mt([t,t,t],i,s),Mt([n,n,n],e,s)]);return Mi=r,h}function ko(i,e,t=24,n=8){return new Pr(new Ai(i.map(jn)),t,e*Mi,n,!1)}var Au=(i,e)=>(i.translate(-e[0],-e[1],-e[2]),i),ci=[3,.85,0],f0=[-2.6,.2,0],p0=[[1.75,-.3,.58],[1.75,-.3,-.58],[-1.7,-.1,.65],[-1.7,-.1,-.65]];function Wd(i=1){Mi=i;let e=Gn([Mt([2.55,1.12,.95],[0,0,0],28),Mt([1.3,1.15,.95],[1.35,-.05,0]),Mt([1.2,1.15,1.02],[-1.55,-.05,0]),Mt([2.1,.9,.9],[0,-.3,0]),xn([2.2,.3,0],[3,.85,0],.78,.62)]),t=[1,-1].map(a=>{let o=new Da(.36*Mi,.7*Mi,4,1);return o.rotateY(Math.PI/4),o.rotateX(a*.28),o.translate(3.4,1.85,a*.52),o}),n=Au(Gn([Mt([.85,.78,.82],[3.55,1.1,0]),Mt([.42,.3,.42],[4.3,.88,0]),Mt([.45,.38,.7],[3.8,.85,0]),...t]),ci),s=Au(Gn([ko([[-2.6,.2,0],[-3.4,.45,.05],[-4.1,1.1,.1],[-4.4,2,0],[-4.3,2.5,-.1]],.2,28,8),Mt([.2,.2,.2],[-4.3,2.5,-.1],10)]),f0),r=p0.map((a,o)=>o<2?Gn([xn([0,0,0],[.1,-.7,0],.36,.27),xn([.1,-.7,0],[.05,-1.28,0],.25,.2),Mt([.34,.17,.26],[.2,-1.34,0],14)]):Gn([Mt([.6,.85,.52],[0,-.45,0]),xn([0,-.8,0],[-.2,-1.28,0],.3,.2),Mt([.36,.17,.27],[-.05,-1.42,0],14)]));return Mi=1,{body:e,head:n,tail:s,legs:r}}function d0(i,e){let t=i.clone();return t.scale(e,e,e),t}function m0(i,e,t){let n=document.createElement("canvas");n.width=n.height=i,e(n.getContext("2d"),i);let s=new vn(n);return s.colorSpace=xt,s.wrapS=s.wrapT=Nt,s.anisotropy=4,t&&s.repeat.set(t[0],t[1]),s}function uv(){return m0(256,(i,e)=>{let t=gn(11);i.fillStyle="#b4793c",i.fillRect(0,0,e,e);for(let n=0;n<18;n++){let s=n/18*e+t()*8,r=5+t()*9;i.fillStyle="rgba(48,28,14,0.55)",i.beginPath(),i.moveTo(s,0);for(let a=0;a<=e;a+=16)i.lineTo(s+Math.sin(a*.06+n)*6,a);for(let a=e;a>=0;a-=16)i.lineTo(s+r+Math.sin(a*.06+n)*6,a);i.fill()}for(let n=0;n<5200;n++){i.strokeStyle=t()<.5?"rgba(255,220,170,0.10)":"rgba(40,20,8,0.10)",i.lineWidth=1;let s=t()*e,r=t()*e;i.beginPath(),i.moveTo(s,r),i.lineTo(s+(t()-.5)*3,r+5+t()*7),i.stroke()}},[2,2])}function hv(){return m0(256,(i,e)=>{let t=gn(23);i.fillStyle="#8a2b22",i.fillRect(0,0,e,e);for(let n=0;n<900;n++){i.strokeStyle=t()<.5?"rgba(196,82,64,0.35)":"rgba(70,16,12,0.35)",i.lineWidth=1+t()*2.5;let s=t()*e;i.beginPath(),i.moveTo(s,0),i.bezierCurveTo(s+6,e*.3,s-6,e*.7,s+(t()-.5)*8,e),i.stroke()}for(let n=0;n<14;n++){i.strokeStyle="rgba(240,215,200,0.22)",i.lineWidth=1.2;let s=t()*e;i.beginPath(),i.moveTo(s,0),i.lineTo(s+(t()-.5)*20,e),i.stroke()}},[3,2])}function dv(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,Pt),e.fill(),new vn(i)}function g0(){let i=uv();return new rn({map:i,bumpMap:i,bumpScale:.6,roughness:.95,metalness:0,sheen:1,sheenRoughness:.55,sheenColor:new de(1,.85,.62)})}function jd(i,e,t,n){let s=new Jt,r=[],a=(h,d)=>{let f=new Ve(d0(h,e),t);f.castShadow=f.receiveShadow=!0,f.userData.layer=n;let p=new Jt;return p.position.set(d[0]*e,d[1]*e,d[2]*e),p.add(f),r.push(f),s.add(p),p},o=new Ve(d0(i.body,e),t);o.castShadow=o.receiveShadow=!0,o.userData.layer=n,s.add(o),r.push(o);let l=a(i.head,ci),c=a(i.tail,f0),u=i.legs.map((h,d)=>a(h,p0[d]));return{root:s,meshes:r,head:l,tail:c,legs:u}}function x0(i){let e=[],t=new Tt({color:Eu(.5,.72,.18),emissive:Eu(.25,.4,.05),emissiveIntensity:.2,roughness:.12,transparent:!0}),n=new Tt({color:328965,roughness:.3,transparent:!0}),s=new Tt({color:14256778,roughness:.5,transparent:!0}),r=new ps({color:16117734,transparent:!0,opacity:.9});e.push(t,n,s,r);for(let o of[1,-1]){let l=new Ve(new Ri(1,18,14),t);l.scale.set(.14,.2,.2),l.position.set(4.18-ci[0],1.27-ci[1],o*.4),i.add(l);let c=new Ve(Mt([.05,.16,.07],[0,0,0],10),n);c.position.set(4.3-ci[0],1.27-ci[1],o*.4),c.userData.noPick=!0,i.add(c);let u=[];for(let d=0;d<3;d++){let f=(d-1)*.22;u.push(jn([4.25-ci[0],.9-ci[1],o*.25]),jn([4.45-ci[0],.92-ci[1]+f,o*1.2]))}let h=new ks(new gt().setFromPoints(u),r);i.add(h)}let a=new Ve(Mt([.09,.07,.12],[4.7,.98,0],10),s);return a.position.set(-ci[0],-ci[1],0),i.add(a),e}function b0(i,e,t){let{heightAt:n,WATER:s}=e,r=.1,a=Wd(),o=g0(),l=jd(a,1,o,"kulit");x0(l.head),l.root.scale.setScalar(r);let c=new Jt;c.add(l.root),i.add(c);let u=new Ve(new Ri(.75,8,6),new Wt({visible:!1}));u.position.set(t.x,.4,t.z),i.add(u);let h=gn(404),d={group:c,hit:u,x:t.x,z:t.z,y:n(t.x,t.z),yaw:0},f="idle",p=2,b=t.x,g=t.z,m=0,M=0;return d.update=(_,y,T)=>{let S=T.x-d.x,x=T.z-d.z,v=Math.hypot(S,x),D=0;if(f==="idle"){if(p-=_,v<3){let P=Math.atan2(-x,S)-d.yaw;P=Math.atan2(Math.sin(P),Math.cos(P)),d.yaw+=P*Math.min(1,_*3)}if(p<=0&&v>1.6){for(let w=0;w<10;w++){let P=h()*Pt,I=2+h()*6,A=t.x+Math.cos(P)*I,N=t.z+Math.sin(P)*I;if(n(A,N)>s+.5){b=A,g=N,f="walk";break}}p=3+h()*5}}else{let w=b-d.x,P=g-d.z,I=Math.hypot(w,P);if(I<.25||v<1)f="idle",p=3+h()*6;else{let N=Math.atan2(-P,w)-d.yaw;N=Math.atan2(Math.sin(N),Math.cos(N)),d.yaw+=N*Math.min(1,_*4),D=.9,d.x+=w/I*D*_,d.z+=P/I*D*_}}M+=((D>0?1:0)-M)*Math.min(1,_*6),m+=D*_*5.5;let L=Math.sin(m)*.6*M;l.legs[0].rotation.z=L,l.legs[3].rotation.z=L,l.legs[1].rotation.z=-L,l.legs[2].rotation.z=-L,l.tail.rotation.y=Math.sin(y*1.4)*.28,l.head.rotation.z=Math.sin(y*.8)*.05-M*.05,d.y+=(n(d.x,d.z)-d.y)*Math.min(1,_*10),c.position.set(d.x,d.y+1.6*r+Math.abs(Math.sin(m))*.012*M,d.z),c.rotation.y=d.yaw,u.position.set(d.x,d.y+.35,d.z)},d}function Kd(i){return{bpm:Math.round(es(140,220,i)),rr:Math.round(es(24,48,i))}}function fv(){let i=[];i.push(Mt([.7,.58,.6],[3.55,1.1,0],20),xn([3.9,1,0],[4.3,.88,0],.3,.2),xn([3.7,.66,0],[4.25,.68,0],.16,.12));let e=new Ai([[3,.85,0],[2,.78,0],[0,.7,0],[-1.8,.55,0],[-2.6,.25,0]].map(jn));for(let n=0;n<26;n++){let s=e.getPoint(n/25);i.push(Mt([.16,.13,.13],[s.x,s.y,s.z],8))}let t=new Ai([[-2.6,.2,0],[-3.4,.45,.05],[-4.1,1.1,.1],[-4.4,2,0],[-4.3,2.5,-.1]].map(jn));for(let n=1;n<19;n++){let s=t.getPoint(n/19),r=.14-n*.004;i.push(Mt([r,r,r],[s.x,s.y,s.z],7))}for(let n=0;n<13;n++)for(let s of[1,-1]){let r=2.1-n*.2,a=1-.38*Math.abs(n-4)/9,o=new Ai([jn([r,.62,s*.15]),jn([r,.35*a,s*.75*a]),jn([r,-.25*a,s*.85*a]),jn([r,-.75*a,s*.55*a]),jn([r,-.95*a,s*.1])]);i.push(new Pr(o,10,.045,5,!1))}i.push(xn([2,-.95,0],[.1,-.95,0],.07,.07));for(let n of[1,-1]){i.push(Mt([.12,.5,.26],[1.95,.3,n*.4],10,[0,0,.3]));let[s,r,a,o]=[[1.75,-.3,n*.58],[1.85,-.95,n*.55],[1.8,-1.4,n*.5],[2,-1.62,n*.48]];i.push(xn(s,r,.11,.09),xn(r,a,.09,.07),xn(a,o,.07,.05),Mt([.15,.15,.15],s,8),Mt([.12,.12,.12],r,8));let[l,c,u,h]=[[-1.7,-.1,n*.65],[-1.45,-.8,n*.62],[-1.85,-1.3,n*.58],[-1.7,-1.62,n*.56]];i.push(xn(l,c,.14,.1),xn(c,u,.1,.07),xn(u,h,.07,.05),Mt([.17,.17,.17],l,8),Mt([.12,.12,.12],c,8))}return i.push(Mt([.28,.5,.75],[-1.85,.3,0],12,[0,0,.2])),Gn(i)}function y0(i,e){let t=new $n;{let K=document.createElement("canvas");K.width=K.height=512;let oe=K.getContext("2d"),pe=oe.createRadialGradient(256,230,20,256,256,420);pe.addColorStop(0,"#2a3f52"),pe.addColorStop(.55,"#121f2b"),pe.addColorStop(1,"#05090e"),oe.fillStyle=pe,oe.fillRect(0,0,512,512);let ke=new vn(K);ke.colorSpace=xt,t.background=ke}let n=new Di(i);t.environment=n.fromScene(new jr,.04).texture,t.environmentIntensity=.5;let s=new Xt(38,1,.1,120),r=new Un(16773596,2.6);r.position.set(4,9,8),r.castShadow=!0,r.shadow.mapSize.set(1024,1024);let a=r.shadow.camera;a.left=-7,a.right=7,a.top=7,a.bottom=-7,a.near=1,a.far=30,r.shadow.bias=-5e-4,r.shadow.normalBias=.03,t.add(r);let o=new Un(9425151,1.2);o.position.set(-6,3,-5),t.add(o);let l=new Cn().load(Xr),c=new Cn().load(Vr);for(let K of[l,c])K.wrapS=K.wrapT=Nt,K.repeat.set(2.4,2.4);l.colorSpace=xt;let u=new Ve(new An(5.4,5.6,.3,64),new Tt({map:l,normalMap:c,color:new de(.7,.66,.62),roughness:1}));u.position.y=-1.75,u.receiveShadow=!0,u.userData.noAO=!0,t.add(u);let h=Wd(),d=[],f={},p=(K,oe)=>{f[K]||(f[K]={mats:[],meshes:[]}),f[K].mats.includes(oe.material)||f[K].mats.push(oe.material),f[K].meshes.push(oe),oe.userData.layer=K,d.push(oe)},b=jd(h,1,g0(),"kulit"),g=x0(b.head);b.root.userData.fade="kulit",t.add(b.root),b.meshes.forEach(K=>p("kulit",K));let m=new rn({map:hv(),roughness:.5,clearcoat:.35,clearcoatRoughness:.4}),M=jd(Wd(.84),1,m,"otot");t.add(M.root),M.meshes.forEach(K=>p("otot",K));let _=new Tt({color:Eu(.9,.85,.72),roughness:.55}),y=new Ve(fv(),_);y.castShadow=!0,y.receiveShadow=!0,t.add(y),p("rangka",y);let T=(K,oe=.42,pe=.35)=>new rn({color:Eu(K[0],K[1],K[2]),roughness:oe,clearcoat:pe,clearcoatRoughness:.3,transparent:!0}),S=(K,oe,pe,ke)=>{let xe=new Ve(oe,pe);return ke&&xe.position.set(ke[0],ke[1],ke[2]),xe.castShadow=xe.receiveShadow=!0,t.add(xe),p(K,xe),xe};{let K=Mt([.5,.38,.4],[0,0,0],40),oe=K.attributes.position,pe=K.attributes.normal;for(let ke=0;ke<oe.count;ke++){let xe=oe.getX(ke),Je=oe.getY(ke),Oe=oe.getZ(ke),ee=Math.sin(xe*11)*Math.sin(Je*9+1)*Math.sin(Oe*12)*.045+Math.sin(xe*20+Oe*17)*.015;oe.setXYZ(ke,xe+pe.getX(ke)*ee,Je+pe.getY(ke)*ee,Oe+pe.getZ(ke)*ee)}K.computeVertexNormals(),S("otak",Gn([K,Mt([.2,.17,.2],[-.42,-.14,0],14)]),T([.86,.64,.66],.5,.3),[3.5,1.3,0])}let x=[1.35,-.3,.05],v=S("jantung",Au(Gn([Mt([.34,.42,.3],[1.3,-.3,.05],24),Mt([.27,.3,.26],[1.47,-.18,-.1],20),xn([1.42,-0,0],[1.55,.4,0],.1,.08),xn([1.3,0,.1],[1.15,.38,.12],.08,.07)]),x),T([.62,.07,.1],.3,.8),x),D=[1,-1].map(K=>S("paru",Au(Gn([Mt([.72,.5,.32],[1.3,.42,K*.5],24,[0,0,.12]),Mt([.36,.34,.28],[.85,.3,K*.46],16)]),[1.3,.42,K*.5]),T([.88,.45,.5],.55,.2),[1.3,.42,K*.5]));S("paru",Gn([ko([[3,.72,0],[2.1,.5,0],[1.6,.3,0]],.09,16,8),xn([1.6,.3,0],[1.4,.25,.5],.07,.05),xn([1.6,.3,0],[1.4,.25,-.5],.07,.05)]),T([.88,.86,.82],.4,.4)),S("hati",Gn([Mt([.45,.42,.58],[.72,-.42,.12],22),Mt([.35,.3,.4],[.5,-.58,-.22],18)]),T([.4,.1,.08],.35,.7)),S("lambung",Gn([Mt([.5,.36,.34],[.05,-.5,-.32],22,[0,0,.5]),ko([[2.9,.7,0],[1.9,.18,-.05],[.9,-.3,-.25],[.3,-.4,-.3]],.07,24,8)]),T([.9,.52,.48],.4,.6));let L=[[0,-.62,-.1],[-.45,-.72,.4],[-.9,-.6,-.4],[-1.2,-.74,.4],[-1.5,-.55,-.35],[-1.7,-.3,.2],[-2,-.15,0],[-2.7,-.1,0]];S("usus",Gn([ko(L.slice(0,6),.14,150,8),ko(L.slice(5),.17,30,8)]),T([.94,.68,.64],.45,.6));for(let K of[1,-1])S("ginjal",Mt([.3,.19,.2],[-.65,.4,K*.28],16,[0,0,.3]),T([.5,.14,.1],.35,.7));S("kandung",Mt([.3,.28,.28],[-1.78,-.62,0],18),T([.95,.85,.5],.25,.9));let w=dv(),P=new Ai([[4.35,.82,0],[3.4,.6,0],[2.3,.25,0],[1,-.3,-.15],[.1,-.5,-.3],...L.map(K=>K.slice())].map(jn)),I=70,A=new gt;A.setAttribute("position",new ct(new Float32Array(I*3),3));let N=new Qn(A,new Dn({map:w,color:new de(2.4,1.3,.35),size:.16,sizeAttenuation:!0,transparent:!0,depthWrite:!1}));N.frustumCulled=!1,N.userData.noAO=!0,t.add(N);let B=Array.from({length:I},(K,oe)=>oe/I),k=Array.from({length:I},()=>[Math.random()-.5,Math.random()-.5]),Y={yaw:0,pitch:.3,dist:16,user:!1,sun:.2,depth:0,depthT:0},X=new de(.18,.2,.24),$=new de;for(let K in f)for(let oe of f[K].mats)oe.userData.base=oe.color.clone(),oe.transparent=!0;f.kulit.mats.push(...g);let J={};for(let K in f)J[K]=0;let ce={kulit:1,otot:1,rangka:1},ge=0,Q=0,te=new U(.2,.1,0),O={pts:{visible:!0}};return{scene:t,camera:s,layerMeshes:d,state:Y,waterFlow:O,sugarFlow:O,update(K,oe,pe,ke){Y.user||(Y.yaw=.35*Math.sin(oe*.4));let xe=Math.cos(Y.pitch),Je=Math.sin(Y.pitch);s.position.set(te.x+Math.sin(Y.yaw)*xe*Y.dist,te.y+Je*Y.dist,te.z+Math.cos(Y.yaw)*xe*Y.dist),s.lookAt(te),Y.depth+=(Y.depthT-Y.depth)*Math.min(1,K*6);let Oe=Y.depth;ce.kulit=1-Ut(.1,.28,Oe),ce.otot=1-Ut(.4,.55,Oe),ce.rangka=1-.72*Ut(.78,.95,Oe);for(let Be of["kulit","otot","rangka"]){let G=ce[Be];for(let bt of f[Be].mats)bt.opacity=G,bt.depthWrite=G>.98;for(let bt of f[Be].meshes)bt.visible=G>.02&&(Be!=="rangka"||Oe>.38),bt.castShadow=G>.5}let ee=b.head;ee.visible=ce.kulit>.02;let me=Kd(Y.sun);ge+=K*me.bpm/60*Pt,Q+=K*me.rr/60*Pt;let fe=Math.pow(Math.max(0,Math.sin(ge)),6),Ie=Math.pow(Math.max(0,Math.sin(ge*2-1.1)),8)*.5;v.scale.setScalar(1+.13*fe+.05*Ie);let Ee=.5+.5*Math.sin(Q);D.forEach(Be=>Be.scale.set(1+.05*Ee,1+.09*Ee,1+.07*Ee));let Ze=Oe>.55,Ge=A.attributes.position,He=.03+.07*Y.sun;N.visible=Ze;for(let Be in f)if(Be!=="kulit"&&Be!=="otot"&&Be!=="rangka")for(let G of f[Be].meshes)G.visible=Oe>.4;if(Ze){for(let Be=0;Be<I;Be++){B[Be]=(B[Be]+He*K)%1;let G=P.getPoint(B[Be]);Ge.setXYZ(Be,G.x+k[Be][0]*.07,G.y+k[Be][1]*.07,G.z)}Ge.needsUpdate=!0}let et=pe&&f[pe]&&pe!=="kulit"&&pe!=="otot"&&pe!=="rangka";for(let Be in f){let G=Be!=="kulit"&&Be!=="otot"&&Be!=="rangka",bt=et&&G&&pe!==Be?1:0;J[Be]+=(bt-J[Be])*Math.min(1,K*8);let je=pe===Be?.16:ke===Be?.08:0;for(let st of f[Be].mats)G&&(st.opacity=1-.8*J[Be],st.depthWrite=J[Be]<.05),st.emissive&&st.userData.base&&st.emissive.copy(st.userData.base).multiplyScalar(je)}}}}function M0(){let i=null,e=null,t=null,n=!1,s=null,r=null,a=null,o=null,l=null,c=null,u=!0,h=.8,d=3,f=0,p=6,b=0;function g(){if(i){i.state==="suspended"&&i.resume();return}let w=window.AudioContext||window.webkitAudioContext;if(!w)return;i=new w,e=i.createGain(),e.gain.value=u?h:0,t=i.createBiquadFilter(),t.type="lowpass",t.frequency.value=2e4,t.Q.value=.7,e.connect(t),t.connect(i.destination);let P=i.sampleRate*3;c=i.createBuffer(1,P,i.sampleRate);let I=c.getChannelData(0),A=0,N=0,B=0;for(let ke=0;ke<P;ke++){let xe=Math.random()*2-1;A=.99765*A+xe*.099,N=.963*N+xe*.2965,B=.57*B+xe*1.0526,I[ke]=(A+N+B+xe*.1848)*.2}let k=(ke,xe,Je)=>{let Oe=i.createBufferSource();Oe.buffer=c,Oe.loop=!0,Oe.loopStart=Math.random()*2;let ee=i.createBiquadFilter();ee.type=ke,ee.frequency.value=xe,ee.Q.value=Je;let me=i.createGain();return me.gain.value=0,Oe.connect(ee),ee.connect(me),me.connect(e),Oe.start(),{g:me,fl:ee}},Y=k("bandpass",380,.5);s=Y.g,r=Y.fl,a=k("highpass",2500,.4).g;let $=i.createOscillator();$.type="sine",$.frequency.value=4300;let J=i.createGain();J.gain.value=0;let ce=i.createOscillator();ce.frequency.value=16;let ge=i.createGain();ge.gain.value=.5;let Q=i.createGain();Q.gain.value=.5,o=i.createGain(),o.gain.value=0,ce.connect(ge),ge.connect(J.gain),$.connect(J),J.connect(o),o.connect(e),$.start(),ce.start();let te=i.createBufferSource();te.buffer=c,te.loop=!0;let O=i.createBiquadFilter();O.type="lowpass",O.frequency.value=190,O.Q.value=.8;let K=i.createGain();K.gain.value=.55;let oe=i.createOscillator();oe.frequency.value=25;let pe=i.createGain();pe.gain.value=.45,oe.connect(pe),pe.connect(K.gain),l=i.createGain(),l.gain.value=0,te.connect(O),O.connect(K),K.connect(l),l.connect(e),te.start(),oe.start()}function m(w){if(i.createStereoPanner){let P=i.createStereoPanner();return P.pan.value=Math.max(-1,Math.min(1,w)),P}return i.createGain()}function M(w,P,I,A,N,B){let k=i.createOscillator(),Y=i.createGain(),X=m(B);k.type="sine",k.frequency.setValueAtTime(P,w),k.frequency.exponentialRampToValueAtTime(I,w+A),Y.gain.setValueAtTime(1e-4,w),Y.gain.exponentialRampToValueAtTime(N,w+A*.2),Y.gain.exponentialRampToValueAtTime(1e-4,w+A),k.connect(Y),Y.connect(X),X.connect(e),k.start(w),k.stop(w+A+.02)}function _(w){let P=i.currentTime+.02,I=Math.random()*2-1,A=Math.floor(Math.random()*3),N=2300+Math.random()*1800;if(A===0){let B=2+Math.floor(Math.random()*4);for(let k=0;k<B;k++)M(P+k*.13,N*(1+Math.random()*.1),N*1.5,.09,w,I)}else if(A===1)for(let B=0;B<3;B++)M(P+B*.22,N*.8,N*1.4,.16,w,I),M(P+B*.22+.1,N*1.5,N*1,.1,w*.8,I);else M(P,N,N*1.8,.28,w,I),M(P+.3,N*1.7,N*.9,.22,w*.9,I)}function y(w,P){if(!i||!u)return;let I=i.currentTime+.02,A=.75+Math.random()*.25,N=420+Math.random()*120,B=i.createOscillator();B.type="sawtooth",B.frequency.setValueAtTime(N,I),B.frequency.linearRampToValueAtTime(N*1.65,I+A*.35),B.frequency.linearRampToValueAtTime(N*1.05,I+A);let k=i.createBiquadFilter(),Y=i.createBiquadFilter();k.type=Y.type="bandpass",k.Q.value=Y.Q.value=5,k.frequency.setValueAtTime(700,I),k.frequency.linearRampToValueAtTime(1100,I+A*.4),k.frequency.linearRampToValueAtTime(800,I+A),Y.frequency.setValueAtTime(1900,I),Y.frequency.linearRampToValueAtTime(2600,I+A*.4),Y.frequency.linearRampToValueAtTime(2e3,I+A);let X=i.createGain(),$=m(P);X.gain.setValueAtTime(1e-4,I),X.gain.exponentialRampToValueAtTime(w,I+.09),X.gain.setValueAtTime(w,I+A*.55),X.gain.exponentialRampToValueAtTime(1e-4,I+A);let J=i.createOscillator();J.frequency.value=6;let ce=i.createGain();ce.gain.value=8,J.connect(ce),ce.connect(B.frequency),J.start(I),J.stop(I+A+.05),B.connect(k),B.connect(Y);let ge=i.createGain();ge.gain.value=.55,k.connect(ge),Y.connect(ge),ge.connect(X),X.connect($),$.connect(e),B.start(I),B.stop(I+A+.05)}function T(w,P,I,A,N,B="bandpass",k=0){let Y=i.createBufferSource();Y.buffer=c;let X=i.createBiquadFilter();X.type=B,X.frequency.value=P,X.Q.value=I;let $=i.createGain(),J=m(k);$.gain.setValueAtTime(1e-4,w),$.gain.exponentialRampToValueAtTime(N,w+.012),$.gain.exponentialRampToValueAtTime(1e-4,w+A),Y.connect(X),X.connect($),$.connect(J),J.connect(e),Y.start(w,Math.random()*2),Y.stop(w+A+.05)}function S(w,P=1){if(!i||!u)return;let I=i.currentTime+.01;if(w>=2){T(I,900,.6,.9,.5*P),T(I+.03,2600,.8,.6,.25*P,"highpass");let A=i.createOscillator(),N=i.createGain();A.frequency.setValueAtTime(140,I),A.frequency.exponentialRampToValueAtTime(45,I+.35),N.gain.setValueAtTime(1e-4,I),N.gain.exponentialRampToValueAtTime(.35*P,I+.02),N.gain.exponentialRampToValueAtTime(1e-4,I+.4),A.connect(N),N.connect(e),A.start(I),A.stop(I+.45);for(let B=0;B<7;B++)x(I+.25+Math.random()*.9,.05*P)}else w>=1?(T(I,1400,.9,.35,.22*P),T(I+.02,3200,1,.2,.08*P,"highpass"),x(I+.15,.03*P)):T(I,1100+Math.random()*600,1.2,.18,.12*P)}function x(w,P){let I=i.createOscillator(),A=i.createGain(),N=900+Math.random()*1500;I.type="sine",I.frequency.setValueAtTime(N,w),I.frequency.exponentialRampToValueAtTime(N*2.2,w+.05),A.gain.setValueAtTime(1e-4,w),A.gain.exponentialRampToValueAtTime(P,w+.005),A.gain.exponentialRampToValueAtTime(1e-4,w+.07),I.connect(A),A.connect(e),I.start(w),I.stop(w+.09)}function v(w=6,P=.05){if(!i||!u)return;let I=i.currentTime;for(let A=0;A<w;A++){let N=I+A*(.04+Math.random()*.08),B=250+Math.random()*500,k=i.createOscillator(),Y=i.createGain();k.frequency.setValueAtTime(B,N),k.frequency.exponentialRampToValueAtTime(B*2.5,N+.06),Y.gain.setValueAtTime(1e-4,N),Y.gain.exponentialRampToValueAtTime(P,N+.01),Y.gain.exponentialRampToValueAtTime(1e-4,N+.08),k.connect(Y),Y.connect(e),k.start(N),k.stop(N+.1)}}function D(w){!i||w===n||(n=w,t.frequency.setTargetAtTime(w?520:2e4,i.currentTime,.12))}function L(w,P,I=.6){w.gain.setTargetAtTime(P,i.currentTime,I)}return{init:g,get enabled(){return u},setEnabled(w){u=w,i&&e.gain.setTargetAtTime(u?h:0,i.currentTime,.1)},meow:y,splash:S,bubbles:v,setUnder:D,update(w,P){if(!i||!u)return;b+=w;let I=(P.world?1:.25)*(P.under?.25:1),A=.5+.5*Math.sin(b*.23)*Math.sin(b*.071+1.3);L(s,(.05+.1*A)*I),r.frequency.setTargetAtTime(260+420*A,i.currentTime,.8),L(a,(.004+.02*A*A)*I*(.4+.6*P.day)),L(o,.012*Math.max(0,1-P.day*2.2)*I),L(l,P.catSub?.22:0,.4),P.world&&!P.under&&P.day>.35&&(d-=w,d<=0&&(_(.035+Math.random()*.03),f>0?(f--,d=.4+Math.random()*.9):(f=Math.random()<.3?2+Math.floor(Math.random()*3):0,d=3+Math.random()*7))),P.world&&P.catDist<9&&(p-=w,p<=0&&(y(.16*Math.max(.15,1-P.catDist/10),P.catPan),p=9+Math.random()*14))}}}function pv(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.5,"rgba(255,255,255,0.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,30,0,Pt),e.fill(),new vn(i)}function _0(i,e,t,n,s){let r=new Float32Array(e*3).fill(-999),a=new gt;a.setAttribute("position",new ct(r,3));let o=new Qn(a,new Dn({map:s,color:t,size:n,sizeAttenuation:!0,transparent:!0,depthWrite:!1,opacity:.85}));return o.frustumCulled=!1,o.userData.noAO=!0,i.add(o),{pts:o,pos:r,vel:new Float32Array(e*3),life:new Float32Array(e),N:e,next:0}}function v0(i,e){let t=pv(),n=_0(i,180,new de(.9,.97,1),.075,t),s=_0(i,70,new de(.8,.95,1),.05,t),r=a=>{let o=a.next;return a.next=(a.next+1)%a.N,o};return{splash(a,o,l,c){for(let u=0;u<l;u++){let h=r(n),d=Math.random()*Pt,f=Math.random()*.18,p=(.4+Math.random())*c;n.pos[h*3]=a+Math.cos(d)*f,n.pos[h*3+1]=e+.02,n.pos[h*3+2]=o+Math.sin(d)*f;let b=(.4+Math.random()*1.1)*c;n.vel[h*3]=Math.cos(d)*b,n.vel[h*3+1]=1.4+p*2.4,n.vel[h*3+2]=Math.sin(d)*b,n.life[h]=1.6}},bubbles(a,o,l,c){for(let u=0;u<c;u++){let h=r(s);s.pos[h*3]=a+(Math.random()-.5)*.3,s.pos[h*3+1]=o,s.pos[h*3+2]=l+(Math.random()-.5)*.3,s.vel[h*3]=Math.random()*Pt,s.vel[h*3+1]=.5+Math.random()*.5,s.life[h]=4}},update(a,o){for(let l=0;l<n.N;l++)n.life[l]<=0||(n.life[l]-=a,n.vel[l*3+1]-=9.8*a,n.pos[l*3]+=n.vel[l*3]*a,n.pos[l*3+1]+=n.vel[l*3+1]*a,n.pos[l*3+2]+=n.vel[l*3+2]*a,(n.pos[l*3+1]<e&&n.vel[l*3+1]<0||n.life[l]<=0)&&(n.life[l]=0,n.pos[l*3+1]=-999));for(let l=0;l<s.N;l++){if(s.life[l]<=0)continue;s.life[l]-=a;let c=s.vel[l*3];s.pos[l*3]+=Math.sin(o*6+c)*.15*a,s.pos[l*3+1]+=s.vel[l*3+1]*a,s.pos[l*3+2]+=Math.cos(o*5+c)*.15*a,(s.pos[l*3+1]>e-.02||s.life[l]<=0)&&(s.life[l]=0,s.pos[l*3+1]=-999)}n.pts.geometry.attributes.position.needsUpdate=!0,s.pts.geometry.attributes.position.needsUpdate=!0}}}(async function(){"use strict";let i="hutan-ilmu-v1",e="hutan-ilmu-q",t=Oc.layers,n=Oc.specimens,s=Oc.quiz,r=n.concat([Ks.specimen]),a=r.length-1,o=t,l="tree",c=function(F){return l==="cat"?"cat:"+F:F},u=function(){return Object.keys(p.trees).filter(function(F){return F!=="kucing"}).length},h=function(){return Object.keys(p.found).filter(function(F){return F.indexOf(":")<0}).length},d="ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer:coarse)").matches,f=/[?&]debug/.test(location.search),p={xp:0,found:{},trees:{},qdone:{},mission:!1};try{let F=localStorage.getItem(i);if(F){let q=JSON.parse(F);q&&typeof q=="object"&&(p.xp=q.xp|0,p.found=q.found||{},p.trees=q.trees||{},p.qdone=q.qdone||{},p.mission=!!q.mission)}}catch{}function b(){try{localStorage.setItem(i,JSON.stringify(p))}catch{}}let g=0;function m(F){let q=Ye("#toast");q.textContent=F,q.classList.add("on"),clearTimeout(g),g=setTimeout(function(){q.classList.remove("on")},2400)}function M(){let F=h(),q=u();return p.mission?q<n.length?"Bedah semua pohon bertanda: "+q+"/"+n.length:p.trees.kucing?"Semua misi selesai. Coba kuis untuk XP tambahan.":"Bedah kucing yang berkeliaran di dekat jalan setapak.":"Temukan 6 lapisan batang: "+F+"/6"}function _(){let F=Math.floor(p.xp/100)+1;Ye("#lvl").textContent="Level "+F,Ye("#xpTxt").textContent=p.xp%100+" / 100 XP",Ye("#xpBar").style.width=p.xp%100+"%",Ye("#mission").textContent=M()}function y(F,q){p.xp+=F,m("+"+F+" XP "+q),_(),b()}function T(){!p.mission&&h()>=t.length&&(p.mission=!0,y(60,"misi selesai"),_())}let S=null;try{S=localStorage.getItem(e)}catch{}S!=="tinggi"&&S!=="hemat"&&(S=d?"hemat":"tinggi");let x=(location.search.match(/[?&]q=(tinggi|hemat)/)||[])[1];f&&x&&(S=x);let v;try{v=new Bc({canvas:Ye("#view"),antialias:!1,powerPreference:"high-performance"})}catch{Ye("#nogl").style.display="flex",Ye("#loading").style.display="none";return}let D=v.domElement;v.toneMapping=Vs,v.toneMappingExposure=1,v.shadowMap.enabled=!0,v.shadowMap.type=qs;let L=function(){let F=window.devicePixelRatio||1;return S==="tinggi"?Math.min(F,2):Math.min(F,1.25)};function w(F,q){Ye("#loadBar").style.width=Math.round(F*100)+"%",q&&(Ye("#loadTxt").textContent=q)}let P=function(){return new Promise(function(F){setTimeout(F,0)})};xm(n);let I=new $n,A=new Xt(66,1,.15,1200);A.rotation.order="YXZ";let N=Pm(I,v);Mm(I);let B=_m(I),k=v0(I,$t),Y=8,X=new Map;function $(F,q,ae){let ie=Math.floor(F/Y)+","+Math.floor(q/Y),ve=X.get(ie);ve||(ve=[],X.set(ie,ve)),ve.push({x:F,z:q,r:ae})}function J(F){let q=Math.floor(F.x/Y),ae=Math.floor(F.z/Y);for(let ie=-1;ie<=1;ie++)for(let ve=-1;ve<=1;ve++){let Ke=X.get(q+ie+","+(ae+ve));if(Ke)for(let nt=0;nt<Ke.length;nt++){let mt=Ke[nt],Bt=F.x-mt.x,Ce=F.z-mt.z,Lt=Math.hypot(Bt,Ce),rt=mt.r+.45;Lt<rt&&Lt>1e-4&&(F.x=mt.x+Bt/Lt*rt,F.z=mt.z+Ce/Lt*rt)}}}let ce=await l0({scene:I,heroes:n,addObs:$,quality:S,progress:function(F,q){w(.1+F*.6,q)}}),ge=ce.heroObjs,Q=ce.heroHits,te=b0(I,{heightAt:cn,WATER:$t},{x:Ks.specimen.x,z:Ks.specimen.z});{let F=r[a],q=new Ve(new Hs(.16,0),new Tt({color:16765786,emissive:16754688,emissiveIntensity:2.2,roughness:.3}));q.userData.noAO=!0,I.add(q);let ae=new Gs(.5,.6,40,1);ae.rotateX(-Math.PI/2);let ie=new Ve(ae,new Wt({color:new de(2.2,1.7,.5),transparent:!0,opacity:.8,side:Yt,depthWrite:!1}));ie.userData.noAO=!0,I.add(ie),te.hit.userData.hero=a,Q.push(te.hit),ge.push({g:te.group,mk:q,ring:ie,y:te.y})}let O={x:0,z:2,y:0,face:Math.PI,phase:0,jh:0,jv:0,swim:!1,ey:0,eyeS:0,wet:!1,under:!1,step:0,stroke:0,bub:0};O.y=cn(O.x,O.z);let K={yaw:0,pitch:-.04,fov:66},oe=1,pe=1;function ke(F){oe=Ft(oe*F,.3,1.15)}let xe=M0(),Je="hutan-ilmu-snd";try{localStorage.getItem(Je)==="0"&&xe.setEnabled(!1)}catch{}function Oe(){let F=Ye("#bSnd");F&&(F.querySelector("span").textContent="Suara: "+(xe.enabled?"Nyala":"Mati"))}["pointerdown","keydown","touchstart"].forEach(function(F){window.addEventListener(F,function(){xe.init()},{passive:!0})}),w(.72,"Menyiapkan bedah batang\u2026"),await P();let ee=h0(v,t),me=y0(v),fe=ee,Ie=fe.camera,Ee=fe.layerMeshes,Ze=fe.waterFlow,Ge=fe.sugarFlow,He=fe.state,et=null,Be=null;w(.85,"Menyiapkan efek visual\u2026"),await P();let G=vu(v,I,A),bt=vu(v,ee.scene,ee.camera,{aoRadius:.45,bloomStrength:.45}),je=null,st=.3,be=0;function At(){let F=st*24%24,q=Math.floor(F),ae=Math.floor((F-q)*60);Ye("#clockTxt").textContent=(q<10?"0":"")+q+":"+(ae<10?"0":"")+ae;let ie=N.day<.25;ie!==Xe&&(Xe=ie,Ye("#clock").classList.toggle("night",ie))}let Xe=!1;function Qe(F){S=F;try{localStorage.setItem(e,F)}catch{}G.setQuality(F),bt.setQuality(F),je&&je.setQuality(F),N.setShadowSize(F==="tinggi"?2048:1024),N.envEvery=F==="tinggi"?2.5:5,ce.setQuality(F);let q=Ye("#bQual");q&&(q.querySelector("span").textContent="Grafik: "+(F==="tinggi"?"Tinggi":"Hemat")),As()}function C(F){if(l=F,F==="cat"){if(!je){je=vu(v,me.scene,me.camera,{aoRadius:.4,bloomStrength:.35}),je.setQuality(S);let q=L();je.setSize(window.innerWidth,window.innerHeight,q)}fe=me,o=Ks.layers}else fe=ee,o=t;Ie=fe.camera,Ee=fe.layerMeshes,Ze=fe.waterFlow,Ge=fe.sugarFlow,He=fe.state,document.body.classList.toggle("catmode",F==="cat")}let E=function(){return l==="cat"?je:bt},z="world",ye=0;function ue(){let F=He.sun;if(l==="cat"){let q=Kd(F);Ye("#sunCap").textContent="Perkiraan: jantung "+q.bpm+" detak per menit, napas "+q.rr+" kali per menit. Saat aktif, otot butuh lebih banyak oksigen sehingga jantung dan paru bekerja lebih cepat. Angka ini kisaran umum, bukan patokan diagnosis.";return}Ye("#sunCap").textContent=F>.66?"Matahari terik: daun menguapkan banyak air (transpirasi), sehingga air tertarik naik cepat. Fotosintesis tinggi, banyak gula dikirim lewat floem.":F>.33?"Cahaya sedang: transpirasi dan fotosintesis berjalan sedang.":"Cahaya rendah atau malam: stomata cenderung menutup, aliran air melambat, dan gula yang dibuat berkurang."}let Se='<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>';function Ae(){let F=Ye("#chips");F.innerHTML=o.map(function(q){return'<button type="button" role="listitem" class="chip'+(et===q.id?" sel":"")+'" data-id="'+q.id+'"><span class="sw" style="background:'+q.ui+'"></span>'+q.name+(p.found[c(q.id)]?Se:"")+"</button>"}).join("")}function se(){let F=Ye("#info"),q=r[ye];if(!et&&l==="cat"){F.innerHTML='<h2>Anatomi kucing</h2><p class="sci">Felis catus</p><p class="hint">'+q.hint+"</p><h3>Tentang kucing</h3><p>"+q.fact+"</p>";return}if(!et){F.innerHTML='<h2>Penampang batang</h2><p class="sci">'+q.name+'</p><p class="hint">Ketuk lapisan pada batang, atau pilih dari daftar, untuk mempelajarinya. Titik biru adalah air yang naik lewat xilem. Titik kuning adalah gula yang turun lewat floem.</p><h3>Tentang pohon ini</h3><p>'+q.fact+"</p>";return}let ae=o.find(function(ie){return ie.id===et});F.innerHTML='<h2 style="color:'+ae.ui+'">'+ae.name+'</h2><p class="sci">'+ae.sci+"</p><h3>Apa ini</h3><p>"+ae.what+"</p><h3>Fungsi</h3><p>"+ae.fn+"</p><h3>Tahukah kamu</h3><p>"+ae.fact+"</p>"+(q.notes&&q.notes[ae.id]?"<h3>Pada "+q.short+"</h3><p>"+q.notes[ae.id]+"</p>":"")}function re(F){if(et=F,F&&!p.found[c(F)]&&(p.found[c(F)]=1,y(20,l==="cat"?"bagian tubuh baru":"lapisan baru"),T()),l==="cat"&&F){let ae={kulit:0,otot:.32,rangka:.68}[F];He.depthT=ae!==void 0?ae:1;let ie=Ye("#depth");ie&&(ie.value=Math.round(He.depthT*100))}Ae(),se();let q=Ye("#panel");q&&(q.scrollTop=0)}function Te(F){let q=Ye("#fade");q.style.opacity=1,setTimeout(function(){F(),q.style.opacity=0},window.matchMedia("(prefers-reduced-motion:reduce)").matches?0:380)}function H(F){Te(function(){ye=F;let q=r[F];if(C(q.kind==="cat"?"cat":"tree"),l==="cat"&&xe.meow(.2,0),l==="tree"&&fe.setSpecies(Object.assign({id:q.id},q.wood)),z="dissect",document.body.classList.add("dissect"),Ye("#dName").textContent=q.name,Ye("#dSci").textContent=(l==="cat"?"Anatomi dan fisiologi \xB7 ":"Penampang batang \xB7 ")+q.sci,He.yaw=0,He.user=!1,l==="cat"){He.pitch=.3,He.dist=window.innerWidth<760?38:16,He.depthT=0,He.depth=0,He.sun=.2;let ae=Ye("#sun"),ie=Ye("#depth");ae&&(ae.value=20),ie&&(ie.value=0)}else He.pitch=.5,He.dist=window.innerWidth<760?19:14;p.trees[q.id]||(p.trees[q.id]=1,y(10,l==="cat"?"kucing dibedah":"pohon baru")),et=null,Ae(),se(),ue(),_(),As(),yt={},un.x=0,un.y=0})}function le(){Te(function(){z="world",C("tree"),document.body.classList.remove("dissect"),vt(),_(),As()})}function ne(F){Ye("#sheet").innerHTML=F,Ye("#modal").classList.add("on"),yt={},un.x=0,un.y=0}function Pe(){Ye("#modal").classList.remove("on")}function _e(){return Ye("#modal").classList.contains("on")}function Re(){let F=h(),q=u(),ae=t.map(function(ve){return p.found[ve.id]?'<div class="jc"><b><i style="background:'+ve.ui+'"></i>'+ve.name+"</b><em>"+ve.sci+"</em><p>"+ve.short+"</p></div>":'<div class="jc lock"><b><i style="background:#3b4f47"></i>???</b><em>Belum ditemukan</em><p>Bedah sebuah pohon untuk menemukannya.</p></div>'}).join(""),ie=n.map(function(ve){return p.trees[ve.id]?'<div class="jc"><b>'+ve.name+"</b><em>"+ve.sci+"</em><p>"+ve.fact+"</p></div>":'<div class="jc lock"><b>???</b><em>Belum dibedah</em><p>Cari pohon bertanda di hutan.</p></div>'}).join("");ne('<div class="head"><div><h2>Jurnal</h2><p style="color:var(--muted);font-size:14px">'+F+"/"+t.length+" lapisan batang, "+q+"/"+n.length+' pohon</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><h3>Lapisan batang</h3><div class="grid">'+ae+'</div><h3>Pohon</h3><div class="grid">'+ie+"</div>")}let Fe=null;function at(F,q){for(let ae=F.length-1;ae>0;ae--){let ie=Math.floor(q()*(ae+1)),ve=F[ae];F[ae]=F[ie],F[ie]=ve}return F}function Me(){let F=Math.random,q=l==="cat"&&z==="dissect"?Ks.quiz.slice():s.filter(function(ie){return!ie.sp||p.trees[ie.sp]}).concat(p.trees.kucing&&z==="world"?Ks.quiz:[]),ae=at(q.slice(),F).slice(0,6);Fe={i:0,score:0,gain:0,set:ae,order:ae.map(function(ie,ve){return ve}),done:!1},ze()}function ze(){let F=Fe.set[Fe.order[Fe.i]];(!Fe.optOrder||Fe.optOrder.q!==F.id)&&(Fe.optOrder={q:F.id,o:at(F.o.map(function(ae,ie){return ie}),Math.random)});let q=Fe.optOrder.o.map(function(ae,ie){return'<button type="button" class="opt" data-o="'+ae+'">'+F.o[ae]+"</button>"}).join("");ne('<div class="head"><div><p style="color:var(--muted);font-size:13px;font-weight:800">Soal '+(Fe.i+1)+" dari "+Fe.set.length+'</p></div><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">'+F.q+'</p><div class="opts" id="opts">'+q+'</div><div id="qfb"></div>')}function ot(F){let q=Fe.set[Fe.order[Fe.i]],ae=F===q.a;document.querySelectorAll("#opts .opt").forEach(function(ve){let Ke=+ve.dataset.o;ve.disabled=!0,Ke===q.a?ve.classList.add("ok"):Ke===F&&ve.classList.add("bad")}),ae&&(Fe.score++,p.qdone[q.id]||(p.qdone[q.id]=1,Fe.gain+=15,p.xp+=15,_(),b()));let ie=Fe.i>=Fe.set.length-1;Ye("#qfb").innerHTML='<div class="exp"><b>'+(ae?"Benar. ":"Belum tepat. ")+"</b>"+q.e+'</div><div class="actions"><button type="button" class="btn primary" id="qnext">'+(ie?"Lihat hasil":"Lanjut")+"</button></div>"}function De(){if(Fe.i>=Fe.set.length-1){ne('<div class="head"><h2>Hasil kuis</h2><button class="x" type="button" data-close aria-label="Tutup">&times;</button></div><p class="q">Skor '+Fe.score+" dari "+Fe.set.length+'</p><p style="color:var(--muted)">'+(Fe.gain?"Kamu mendapat tambahan "+Fe.gain+" XP dari soal yang baru benar pertama kali.":"XP hanya diberikan saat soal pertama kali dijawab benar.")+'</p><div class="actions"><button type="button" class="btn primary" id="qagain">Ulangi</button><button type="button" class="btn" data-close>Tutup</button></div>');return}Fe.i++,ze()}Ye("#modal").addEventListener("click",function(F){let q=F.target;if(q.id==="modal"||q.closest("[data-close]")){Pe();return}let ae=q.closest(".opt");if(ae&&!ae.disabled){ot(+ae.dataset.o);return}if(q.closest("#qnext")){De();return}q.closest("#qagain")&&Me()}),Ye("#bJournal").addEventListener("click",Re),Ye("#bQuizW").addEventListener("click",Me),Ye("#dQuiz").addEventListener("click",Me),Ye("#bBack").addEventListener("click",le),Ye("#chips").addEventListener("click",function(F){let q=F.target.closest(".chip");q&&re(et===q.dataset.id?null:q.dataset.id)}),Ye("#tWater").addEventListener("change",function(F){Ze.pts.visible=F.target.checked}),Ye("#tSugar").addEventListener("change",function(F){Ge.pts.visible=F.target.checked}),Ye("#sun").addEventListener("input",function(F){He.sun=+F.target.value/100,ue()}),Ye("#depth").addEventListener("input",function(F){He.depthT=+F.target.value/100,He.user=!0});function vt(){Ye("#tip").style.display="none"}Ye("#tipX").addEventListener("click",vt),setTimeout(vt,2e4);let yt={},Ln=!1,Zs=!1,un={x:0,y:0};d&&document.body.classList.add("touch"),window.addEventListener("keydown",function(F){if(F.target&&F.target.tagName==="INPUT"&&F.target.type!=="checkbox"&&F.target.type!=="range")return;let q=F.key.toLowerCase();if(q==="escape"){_e()?Pe():z==="dissect"&&le();return}_e()||z==="world"&&(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"," ","c","control"].indexOf(q)>=0&&(yt[q]=!0,F.preventDefault()),q==="e"&&ts(),(q==="+"||q==="=")&&ke(.8),(q==="-"||q==="_")&&ke(1.25),q===" "&&(Ln=!0,F.preventDefault()),q==="j"&&Re())}),window.addEventListener("keyup",function(F){delete yt[F.key.toLowerCase()]}),window.addEventListener("blur",function(){yt={}}),(function(){let F=Ye("#joy"),q=Ye("#joyK"),ae=null;function ie(Ke){let nt=F.getBoundingClientRect(),mt=nt.left+nt.width/2,Bt=nt.top+nt.height/2,Ce=Ke.clientX-mt,Lt=Ke.clientY-Bt,rt=Math.hypot(Ce,Lt),wt=nt.width/2-8;rt>wt&&(Ce=Ce/rt*wt,Lt=Lt/rt*wt),q.style.transform="translate("+Ce+"px,"+Lt+"px)",un.x=Ce/wt,un.y=-Lt/wt}F.addEventListener("pointerdown",function(Ke){ae=Ke.pointerId,F.setPointerCapture(ae),ie(Ke),Ke.preventDefault()}),F.addEventListener("pointermove",function(Ke){Ke.pointerId===ae&&ie(Ke)});function ve(Ke){Ke.pointerId===ae&&(ae=null,un.x=0,un.y=0,q.style.transform="")}F.addEventListener("pointerup",ve),F.addEventListener("pointercancel",ve)})();let wn=new Map,Ss=0,Zr=0,Kn=0,Ts=new Za,ea=new he;function ta(F,q,ae){let ie=D.getBoundingClientRect();ea.set((F-ie.left)/ie.width*2-1,-((q-ie.top)/ie.height)*2+1),Ts.setFromCamera(ea,ae)}function Es(F,q){ta(F,q,Ie);let ae=Ts.intersectObjects(Ee.filter(function(ie){return ie.visible}),!1)[0];return ae?ae.object.userData.layer:null}function Bo(F,q){ta(F,q,A);let ae=Ts.intersectObjects(Q,!1)[0];return ae?ae.object.userData.hero:-1}function na(){let F=-1,q=1e9;return r.forEach(function(ae,ie){let ve=Math.hypot(O.x-ae.x,O.z-ae.z);ve<q&&(q=ve,F=ie)}),{i:F,d:q}}function ts(){let F=na();F.d<8?H(F.i):m("Dekati pohon bertanda dulu ("+Math.round(F.d-7)+" m lagi)")}D.addEventListener("pointerdown",function(F){if(!_e()){if(D.setPointerCapture(F.pointerId),wn.set(F.pointerId,{x:F.clientX,y:F.clientY}),wn.size===1&&(Ss=0,Zr=performance.now()),wn.size===2){let q=Array.from(wn.values());Kn=Math.hypot(q[0].x-q[1].x,q[0].y-q[1].y)}D.classList.add("dragging")}}),D.addEventListener("pointermove",function(F){let q=wn.get(F.pointerId);if(!q){if(z==="dissect"&&F.pointerType==="mouse"){let ve=Es(F.clientX,F.clientY);ve!==Be&&(Be=ve,D.style.cursor=ve?"pointer":"grab");let Ke=Ye("#tipL");ve?(Ke.style.display="block",Ke.textContent=o.find(function(nt){return nt.id===ve}).name,Ke.style.left=F.clientX+14+"px",Ke.style.top=F.clientY+14+"px"):Ke.style.display="none"}return}let ae=F.clientX-q.x,ie=F.clientY-q.y;if(q.x=F.clientX,q.y=F.clientY,wn.size===1)if(Ss+=Math.abs(ae)+Math.abs(ie),z==="world"){let ve=Math.max(.45,pe);K.yaw-=ae*.0045*ve,K.pitch=Ft(K.pitch-ie*.004*ve,-1.3,1.3)}else He.user=!0,He.yaw-=ae*.008,He.pitch=Ft(He.pitch+ie*.006,-.25,1.2);else if(wn.size===2){let ve=Array.from(wn.values()),Ke=Math.hypot(ve[0].x-ve[1].x,ve[0].y-ve[1].y);if(Kn>0){let nt=Kn/Ke;z==="dissect"?(He.user=!0,He.dist=Ft(He.dist*nt,6,46)):ke(nt)}Kn=Ke,Ss+=20}});function Ho(F){if(!wn.has(F.pointerId))return;let q=wn.size===1;if(wn.delete(F.pointerId),wn.size===0&&D.classList.remove("dragging"),q&&F.type==="pointerup"&&Ss<8&&performance.now()-Zr<600)if(z==="world"){let ae=Bo(F.clientX,F.clientY);if(ae>=0){let ie=r[ae],ve=Math.hypot(O.x-ie.x,O.z-ie.z);ve<9?H(ae):m("Terlalu jauh. Dekati "+ie.name+" ("+Math.round(ve-8)+" m lagi)")}}else{let ae=Es(F.clientX,F.clientY);ae&&re(ae)}}D.addEventListener("pointerup",Ho),D.addEventListener("pointercancel",Ho),D.addEventListener("pointerleave",function(){Ye("#tipL").style.display="none"}),D.addEventListener("wheel",function(F){F.preventDefault();let q=Math.exp(F.deltaY*.001);z==="dissect"?(He.user=!0,He.dist=Ft(He.dist*q,6,46)):_e()||ke(Math.exp(F.deltaY*.0012))},{passive:!1}),Ye("#act").addEventListener("click",ts),Ye("#zIn").addEventListener("click",function(){ke(.78)}),Ye("#zOut").addEventListener("click",function(){ke(1.28)}),Ye("#bSnd").addEventListener("click",function(){xe.init(),xe.setEnabled(!xe.enabled);try{localStorage.setItem(Je,xe.enabled?"1":"0")}catch{}Oe(),xe.enabled&&xe.meow(.08,0)}),Oe(),Ye("#jump").addEventListener("pointerdown",function(F){F.preventDefault(),Ln=!0,Zs=!0}),["pointerup","pointercancel","pointerleave"].forEach(function(F){Ye("#jump").addEventListener(F,function(){Zs=!1})});let Go=r.map(function(F){let q=document.createElement("div");return q.className="tag",Ye("#tags").appendChild(q),q}),ui=new U,ia=0;function sa(F){let q=Ye("#drops");if(!(!q||window.matchMedia("(prefers-reduced-motion:reduce)").matches))for(let ae=0;ae<F;ae++){let ie=document.createElement("i"),ve=18+Math.random()*46;ie.style.width=ie.style.height=ve+"px",ie.style.left=Math.random()*100+"%",ie.style.top=Math.random()*85+"%",ie.style.animationDelay=Math.random()*.15+"s",q.appendChild(ie),setTimeout(function(){ie.remove()},1900)}}function Ru(F){let q=(yt.d||yt.arrowright?1:0)-(yt.a||yt.arrowleft?1:0),ae=(yt.w||yt.arrowup?1:0)-(yt.s||yt.arrowdown?1:0),ie=Ft(q+un.x,-1,1),ve=Ft(ae+un.y,-1,1),Ke=-Math.sin(K.yaw),nt=-Math.cos(K.yaw),mt=Math.cos(K.yaw),Bt=-Math.sin(K.yaw),Ce=Ke*ve+mt*ie,Lt=nt*ve+Bt*ie,rt=Math.min(1,Math.hypot(Ce,Lt)),wt=0,en=$t-cn(O.x,O.z);if(rt>.06){let Rt=Math.hypot(Ce,Lt),bn=Ce/Rt,hn=Lt/Rt,_i=yt.shift||un.x*un.x+un.y*un.y>.72;O.swim?wt=(_i?3.6:2.3)*rt:(wt=(_i?8.2:4.6)*rt,en>0&&(wt*=1-.55*Ft(en/1.3,0,1)));let qn=O.x+bn*wt*F,Xn=O.z+hn*wt*F,qo=function(Lu,T0){return Math.hypot(Lu,T0)<112};qo(qn,O.z)&&(O.x=qn),qo(O.x,Xn)&&(O.z=Xn),J(O),O.phase+=wt*F*1.25}let ki=cn(O.x,O.z),pn=$t-ki;O.y+=(ki-O.y)*Math.min(1,F*14);let In=O.x+Ke*.55,ut=O.z+nt*.55,jt=1.35;!O.swim&&pn>jt&&(O.swim=!0,O.ey=Math.max(O.y+1.68+O.jh,$t-.1),k.splash(In,ut,46,1.3),B.ripple(O.x,O.z,1),xe.splash(2),sa(9)),O.swim&&pn<jt-.2&&(O.swim=!1,O.jh=0,O.jv=0);let On=O.jh>0;if(O.swim){let Rt=0;rt>.06&&(Rt+=Math.sin(K.pitch)*ve*wt*1.1),(yt[" "]||Zs)&&(Rt+=1.9),(yt.c||yt.control)&&(Rt-=1.9),Math.abs(Rt)<.05&&(Rt+=.32),O.ey=Ft(O.ey+Rt*F,ki+.45,$t+.24),Ln=!1,O.jh=0,O.jv=0}else Ln&&O.jh<=.001&&pn<.8&&(O.jv=6.4),Ln=!1,(O.jh>0||O.jv>0)&&(O.jv-=20*F,O.jh=Math.max(0,O.jh+O.jv*F),O.jh===0&&(O.jv=0)),On&&O.jh===0&&pn>.05&&(k.splash(In,ut,30,1),B.ripple(O.x,O.z,.9),xe.splash(pn>.5?2:1),pn>.3&&sa(5));let It=!O.swim&&pn>.03;It&&!O.wet&&wt>0&&(k.splash(In,ut,10,.6),B.ripple(O.x,O.z,.6),xe.splash(1,.7)),O.wet=It;let qt=Math.floor(O.phase/(Math.PI/2));if(qt!==O.step&&(O.step=qt,It&&wt>.5&&O.jh===0)){let Rt=Ft(pn/1.2,.15,1);k.splash(In+mt*(qt%2?.15:-.15),ut+Bt*(qt%2?.15:-.15),Math.round(5+Rt*10),.35+Rt*.6*(wt/6)),B.ripple(O.x,O.z,.35+Rt*.4),xe.splash(0,.5+Rt)}O.swim&&wt>.3&&O.ey>$t-.35&&(O.stroke-=F,O.stroke<=0&&(O.stroke=.8,k.splash(In,ut,9,.45),B.ripple(In,ut,.6),xe.splash(0,.8)));let Zn=Math.min(1,wt/4.6),Oo=Math.sin(O.phase*2)*.032*Zn,Zd=Math.cos(O.phase)*.018*Zn,ef=O.swim?O.ey+(O.ey>$t-.3?Math.sin(be*1.7)*.05:Math.sin(be*.9)*.03):O.y+1.68+Oo*(It?.5:1)+O.jh;O.eyeS=O.eyeS?O.eyeS+(ef-O.eyeS)*Math.min(1,F*(O.swim?6:16)):ef,A.position.set(O.x+Math.cos(K.yaw)*Zd,O.eyeS,O.z-Math.sin(K.yaw)*Zd);let er=A.position.y<$t-.03&&$t-ki>.05;er!==O.under&&(O.under=er,document.body.classList.toggle("underwater",er),xe.setUnder(er),er?(k.bubbles(O.x+Ke*.4,O.eyeS-.1,O.z+nt*.4,14),xe.bubbles(8)):(k.splash(O.x+Ke*.4,O.z+nt*.4,12,.5),xe.splash(1,.6),sa(6))),er&&(O.bub-=F,O.bub<=0&&(O.bub=wt>.3?.5:1.6,k.bubbles(O.x+Ke*.35,O.eyeS-.15,O.z+nt*.35,wt>.3?4:2),Math.random()<.4&&xe.bubbles(2,.03))),k.update(F,be),A.rotation.set(K.pitch,K.yaw,0),pe+=(oe-pe)*Math.min(1,F*8);let S0=(66+(wt>6?5:0))*pe;K.fov+=(S0-K.fov)*Math.min(1,F*5),Math.abs(A.fov-K.fov)>.02&&(A.fov=K.fov,A.updateProjectionMatrix()),te.update(F,be,O);{let Rt=r[a],bn=ge[a];Rt.x=te.x,Rt.z=te.z,bn.y=te.y,bn.mk.position.x=te.x,bn.mk.position.z=te.z,bn.ring.position.set(te.x,te.y+.04,te.z)}let Pu=1e9,ra=-1;ge.forEach(function(Rt,bn){let hn=r[bn];Rt.mk.rotation.y+=F*1.6,Rt.mk.position.y=Rt.y+hn.top+(hn.mkOff!=null?hn.mkOff:2.2)+Math.sin(be*2+bn)*(hn.kind==="cat"?.06:.3);let _i=1+.1*Math.sin(be*3+bn);Rt.ring.scale.set(_i,_i,_i);let qn=Math.hypot(O.x-hn.x,O.z-hn.z),Xn=Go[bn];if(qn<Pu&&(Pu=qn,ra=bn),ui.set(hn.x,Rt.y+hn.top*.6,hn.z).project(A),ui.z<1&&qn<60&&qn>(hn.kind==="cat"?5:11)){let qo=window.innerWidth,Lu=window.innerHeight;Xn.style.display="block",Xn.style.transform="translate("+(ui.x*.5+.5)*qo+"px,"+(-ui.y*.5+.5)*Lu+"px) translate(-50%,-100%)",Xn.className="tag"+(p.trees[hn.id]?" done":""),Xn.innerHTML=hn.name+"<small>"+Math.round(qn)+" m</small>"}else Xn.style.display="none"});let aa=Ye("#act");if(Pu<9&&!_e()){let Rt=r[ra],bn=ge[ra];ui.set(Rt.x,bn.y+(Rt.promptY||1.7),Rt.z).project(A);let hn=window.innerWidth,_i=window.innerHeight,qn=(ui.x*.5+.5)*hn,Xn=(-ui.y*.5+.5)*_i;ui.z>1&&(qn=hn*.5,Xn=_i*.62),qn=Ft(qn,110,hn-110),Xn=Ft(Xn,100,_i-170),aa.style.transform="translate("+qn+"px,"+Xn+"px) translate(-50%,-50%)",aa.dataset.i!==String(ra)&&(aa.dataset.i=ra,Ye("#actName").textContent=Rt.name),aa.classList.add("on")}else aa.classList.remove("on");if(ia+=F,ia>.2){ia=0;let Rt=na(),bn=r[Rt.i];Ye("#near").textContent="Terdekat: "+bn.name+", "+Math.round(Rt.d)+" m"}}function As(){let F=window.innerWidth,q=window.innerHeight,ae=L();v.setPixelRatio(ae),v.setSize(F,q,!1),G.setSize(F,q,ae),bt.setSize(F,q,ae),je&&je.setSize(F,q,ae),A.aspect=F/q,A.updateProjectionMatrix(),Ie.aspect=F/q,F>760?Ie.setViewOffset(F,q,Math.min(120,F*.09),0,F,q):l==="cat"?Ie.setViewOffset(F,q,0,Math.round(q*.13),F,q):Ie.clearViewOffset(),Ie.updateProjectionMatrix()}window.addEventListener("resize",As),Ye("#bQual").addEventListener("click",function(){Qe(S==="tinggi"?"hemat":"tinggi")}),Qe(S),_(),N.update(st,be,.016,{x:O.x,y:O.y+1.6,z:O.z}),At(),Ye("#loading").classList.add("done"),setTimeout(function(){Ye("#loading").style.display="none"},700),f&&(window.__hi={enter:H,select:re,P:O,cam:K,startQuiz:Me,openJournal:Re,renderer:v,world:I,veg:ce,sky:N,applyQuality:Qe,setTime:function(F){st=F},look:function(F,q){let ae=r[F];q=q||11;let ie=Math.hypot(ae.x,ae.z-2)||1;O.x=ae.x+(0-ae.x)/ie*q,O.z=ae.z+(2-ae.z)/ie*q,O.y=cn(O.x,O.z),K.yaw=Math.atan2(O.x-ae.x,O.z-ae.z),K.pitch=.22},getMode:function(){return z},ds:function(){return He}});let R=performance.now(),V=!1;function Z(F){if(be+=F,z==="world"){st=(st+F/240)%1,Ru(F),N.update(st,be,F,{x:O.x,y:O.y+1.6,z:O.z},O.under),At(),ce.update(O,be,F),B.update(be);{let q=te.x-O.x,ae=te.z-O.z,ie=Math.hypot(q,ae)||1;xe.update(F,{day:N.day,world:!0,under:O.under,catDist:ie,catPan:(q*Math.cos(K.yaw)-ae*Math.sin(K.yaw))/ie})}G.render(F)}else fe.update(F,be,et,Be),xe.update(F,{day:N.day,world:!1,under:!1,catSub:l==="cat",catDist:99,catPan:0}),E().render(F)}let W=0,j=0,Le=0,qe=!1;function we(F){qe||S!=="tinggi"||z!=="world"||f||(Le+=F,!(Le<5)&&(W+=F,j++,W>=4&&(qe=!0,W/j>.034&&(Qe("hemat"),m("Grafik diturunkan ke Hemat agar tetap lancar. Ganti lewat tombol Grafik.")))))}function Ne(F){let q=Math.min(.05,(F-R)/1e3);R=F,V||(Z(q),we(q)),requestAnimationFrame(Ne)}f&&(window.__hi.pause=function(F){V=F!==!1},window.__hi.step=Z),requestAnimationFrame(Ne)})().catch(function(i){console.error(i);let e=document.getElementById("loadTxt");e&&(e.textContent="Gagal memuat: "+(i&&i.message||i))});
