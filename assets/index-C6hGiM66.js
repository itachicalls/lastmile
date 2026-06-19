var Th=Object.defineProperty;var Ah=(s,t,e)=>t in s?Th(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var F=(s,t,e)=>Ah(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Ar={coins:0,unlockedLevels:["1-1"],levelStars:{},purchases:{},equippedTurrets:[],equippedAbility:null,totalDeliveries:0,selectedCharacter:"johnny",mobileAutoFire:!0},Lo={convoy:5,maxConvoy:50,integrity:3,maxIntegrity:3,packages:0,maxPackages:25,stamps:0,coins:0,speed:11,baseSpeed:11,distance:0,integrityLost:!1,bonusRoute:!1},Io="last-mile-save";class Ch{constructor(){F(this,"data");this.data=this.load()}load(){try{const t=localStorage.getItem(Io);if(t)return{...Ar,...JSON.parse(t)}}catch{}return{...Ar}}save(){localStorage.setItem(Io,JSON.stringify(this.data))}get(){return this.data}addCoins(t){this.data.coins+=t,this.save()}spendCoins(t){return this.data.coins<t?!1:(this.data.coins-=t,this.save(),!0)}unlockLevel(t){this.data.unlockedLevels.includes(t)||(this.data.unlockedLevels.push(t),this.save())}setStars(t,e){const n=this.data.levelStars[t]??0;e>n&&(this.data.levelStars[t]=e,this.save())}getPurchaseLevel(t){return this.data.purchases[t]??0}setPurchaseLevel(t,e){this.data.purchases[t]=e,this.save()}equipTurret(t){const e=this.data.equippedTurrets;e.includes(t)?this.data.equippedTurrets=e.filter(n=>n!==t):e.length<2&&this.data.equippedTurrets.push(t),this.save()}equipAbility(t){this.data.equippedAbility=t,this.save()}setCharacter(t){this.data.selectedCharacter=t,this.save()}setMobileAutoFire(t){this.data.mobileAutoFire=t,this.save()}recordWin(){this.data.totalDeliveries+=1,this.save()}reset(){this.data={...Ar},this.save()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="171",Rh=0,Uo=1,Ph=2,Fh=0,Ec=1,Dh=2,Ln=3,Kn=0,$e=1,se=2,kn=0,Zn=1,qt=2,No=3,ko=4,Lh=5,ci=100,Ih=101,Uh=102,Nh=103,kh=104,Bh=200,zh=201,Oh=202,Hh=203,va=204,_a=205,Gh=206,Vh=207,Wh=208,Xh=209,qh=210,Yh=211,$h=212,Zh=213,jh=214,xa=0,ya=1,Ma=2,Gi=3,ba=4,Sa=5,wa=6,Ea=7,Tc=0,Jh=1,Kh=2,jn=0,Qh=1,tu=2,eu=3,Ac=4,nu=5,iu=6,su=7,Cc=300,Vi=301,Wi=302,Ta=303,Aa=304,vr=306,bn=1e3,ui=1001,Ca=1002,_n=1003,ru=1004,Es=1005,wn=1006,Cr=1007,di=1008,Hn=1009,Rc=1010,Pc=1011,_s=1012,ao=1013,mi=1014,Un=1015,Bn=1016,oo=1017,lo=1018,Xi=1020,Fc=35902,Dc=1021,Lc=1022,gn=1023,Ic=1024,Uc=1025,zi=1026,qi=1027,Nc=1028,co=1029,kc=1030,ho=1031,uo=1033,Ks=33776,Qs=33777,tr=33778,er=33779,Ra=35840,Pa=35841,Fa=35842,Da=35843,La=36196,Ia=37492,Ua=37496,Na=37808,ka=37809,Ba=37810,za=37811,Oa=37812,Ha=37813,Ga=37814,Va=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,$a=37820,Za=37821,nr=36492,ja=36494,Ja=36495,Bc=36283,Ka=36284,Qa=36285,to=36286,au=3200,ou=3201,zc=0,lu=1,$n="",ue="srgb",Yi="srgb-linear",rr="linear",he="srgb",vi=7680,Bo=519,cu=512,hu=513,uu=514,Oc=515,du=516,fu=517,pu=518,mu=519,eo=35044,zo="300 es",Nn=2e3,ar=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oo=1234567;const fs=Math.PI/180,xs=180/Math.PI;function zn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Vt(s,t,e){return Math.max(t,Math.min(e,s))}function fo(s,t){return(s%t+t)%t}function gu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function vu(s,t,e){return s!==t?(e-s)/(t-s):0}function ps(s,t,e){return(1-e)*s+e*t}function _u(s,t,e,n){return ps(s,t,1-Math.exp(-e*n))}function xu(s,t=1){return t-Math.abs(fo(s,t*2)-t)}function yu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Mu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function bu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Su(s,t){return s+Math.random()*(t-s)}function wu(s){return s*(.5-Math.random())}function Eu(s){s!==void 0&&(Oo=s);let t=Oo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tu(s){return s*fs}function Au(s){return s*xs}function Cu(s){return(s&s-1)===0&&s!==0}function Ru(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fu(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Oi={DEG2RAD:fs,RAD2DEG:xs,generateUUID:zn,clamp:Vt,euclideanModulo:fo,mapLinear:gu,inverseLerp:vu,lerp:ps,damp:_u,pingpong:xu,smoothstep:yu,smootherstep:Mu,randInt:bu,randFloat:Su,randFloatSpread:wu,seededRandom:Eu,degToRad:Tu,radToDeg:Au,isPowerOfTwo:Cu,ceilPowerOfTwo:Ru,floorPowerOfTwo:Pu,setQuaternionFromProperEuler:Fu,normalize:le,denormalize:mn};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],x=i[4],y=i[7],C=i[2],T=i[5],P=i[8];return r[0]=a*_+o*b+l*C,r[3]=a*m+o*x+l*T,r[6]=a*p+o*y+l*P,r[1]=c*_+h*b+u*C,r[4]=c*m+h*x+u*T,r[7]=c*p+h*y+u*P,r[2]=d*_+f*b+g*C,r[5]=d*m+f*x+g*T,r[8]=d*p+f*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Rr.makeScale(t,e)),this}rotate(t){return this.premultiply(Rr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rr=new Ot;function Hc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Du(){const s=or("canvas");return s.style.display="block",s}const Ho={};function ki(s){s in Ho||(Ho[s]=!0,console.warn(s))}function Lu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Iu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Go=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vo=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nu(){const s={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(i.r=On(i.r),i.g=On(i.g),i.b=On(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$n?rr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Yi]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:Go,fromXYZ:Vo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ue},outputColorSpaceConfig:{drawingBufferColorSpace:ue}},[ue]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Go,fromXYZ:Vo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ue}}}),s}const te=Nu();function On(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let _i;class ku{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=or("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bu=0;class Gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Pr(i[a].image)):r.push(Pr(i[a]))}else r=Pr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Pr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ku.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zu=0;class We extends ji{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=ui,i=ui,r=wn,a=di,o=gn,l=Hn,c=We.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=zn(),this.name="",this.source=new Gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bn:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bn:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Cc;We.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,i=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(f+1)/2,C=(p+1)/2,T=(h+d)/4,P=(u+_)/4,I=(g+m)/4;return x>y&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=P/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=P/r,i=I/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ou extends ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new We(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends Ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vc extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hu extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,p*b);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const y=o*b;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fr.copy(this).projectOnVector(t),this.sub(Fr)}reflect(t){return this.sub(Fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new D,Wo=new ys;class Ms{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),As.subVectors(this.max,ns),xi.subVectors(t.a,ns),yi.subVectors(t.b,ns),Mi.subVectors(t.c,ns),Gn.subVectors(yi,xi),Vn.subVectors(Mi,yi),ei.subVectors(xi,Mi);let e=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-ei.z,ei.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,ei.z,0,-ei.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-ei.y,ei.x,0];return!Dr(e,xi,yi,Mi,As)||(e=[1,0,0,0,1,0,0,0,1],!Dr(e,xi,yi,Mi,As))?!1:(Cs.crossVectors(Gn,Vn),e=[Cs.x,Cs.y,Cs.z],Dr(e,xi,yi,Mi,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new D,new D,new D,new D,new D,new D,new D,new D],dn=new D,Ts=new Ms,xi=new D,yi=new D,Mi=new D,Gn=new D,Vn=new D,ei=new D,ns=new D,As=new D,Cs=new D,ni=new D;function Dr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ni.fromArray(s,r);const o=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),l=t.dot(ni),c=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Gu=new Ms,is=new D,Lr=new D;class po{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(Lr)),this.expandByPoint(is.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new D,Ir=new D,Rs=new D,Wn=new D,Ur=new D,Ps=new D,Nr=new D;class Vu{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ir.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(Ir);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Rs),o=Wn.dot(this.direction),l=-Wn.dot(Rs),c=Wn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ir).addScaledVector(Rs,d),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,i,r){Ur.subVectors(e,t),Ps.subVectors(n,t),Nr.crossVectors(Ur,Ps);let a=this.direction.dot(Nr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,t);const l=o*this.direction.dot(Ps.crossVectors(Wn,Ps));if(l<0)return null;const c=o*this.direction.dot(Ur.cross(Wn));if(c<0||l+c>a)return null;const h=-o*Wn.dot(Nr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/bi.setFromMatrixColumn(t,0).length(),r=1/bi.setFromMatrixColumn(t,1).length(),a=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wu,t,Xu)}lookAt(t,e,n){const i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Xn.crossVectors(n,Je),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Xn.crossVectors(n,Je)),Xn.normalize(),Fs.crossVectors(Je,Xn),i[0]=Xn.x,i[4]=Fs.x,i[8]=Je.x,i[1]=Xn.y,i[5]=Fs.y,i[9]=Je.y,i[2]=Xn.z,i[6]=Fs.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],x=n[7],y=n[11],C=n[15],T=i[0],P=i[4],I=i[8],M=i[12],w=i[1],U=i[5],X=i[9],V=i[13],$=i[2],tt=i[6],Z=i[10],nt=i[14],Y=i[3],ut=i[7],vt=i[11],Tt=i[15];return r[0]=a*T+o*w+l*$+c*Y,r[4]=a*P+o*U+l*tt+c*ut,r[8]=a*I+o*X+l*Z+c*vt,r[12]=a*M+o*V+l*nt+c*Tt,r[1]=h*T+u*w+d*$+f*Y,r[5]=h*P+u*U+d*tt+f*ut,r[9]=h*I+u*X+d*Z+f*vt,r[13]=h*M+u*V+d*nt+f*Tt,r[2]=g*T+_*w+m*$+p*Y,r[6]=g*P+_*U+m*tt+p*ut,r[10]=g*I+_*X+m*Z+p*vt,r[14]=g*M+_*V+m*nt+p*Tt,r[3]=b*T+x*w+y*$+C*Y,r[7]=b*P+x*U+y*tt+C*ut,r[11]=b*I+x*X+y*Z+C*vt,r[15]=b*M+x*V+y*nt+C*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,C=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=e*b+n*x+i*y+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return t[0]=b*P,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*P,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*P,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*P,t[4]=x*P,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*P,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*P,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*P,t[8]=y*P,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*P,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*P,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*P,t[12]=C*P,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*P,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*P,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,b=l*c,x=l*h,y=l*u,C=n.x,T=n.y,P=n.z;return i[0]=(1-(_+p))*C,i[1]=(f+y)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+p))*T,i[6]=(m+b)*T,i[7]=0,i[8]=(g+x)*P,i[9]=(m-b)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=bi.set(i[0],i[1],i[2]).length();const a=bi.set(i[4],i[5],i[6]).length(),o=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],fn.copy(this);const c=1/r,h=1/a,u=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Nn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===Nn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ar)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Nn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h;let g,_;if(o===Nn)g=(a+r)*u,_=-2*u;else if(o===ar)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new D,fn=new ve,Wu=new D(0,0,0),Xu=new D(1,1,1),Xn=new D,Fs=new D,Je=new D,Xo=new ve,qo=new ys;class En{constructor(t=0,e=0,n=0,i=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qo.setFromEuler(this),this.setFromQuaternion(qo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qu=0;const Yo=new D,Si=new ys,Pn=new ve,Ds=new D,ss=new D,Yu=new D,$u=new ys,$o=new D(1,0,0),Zo=new D(0,1,0),jo=new D(0,0,1),Jo={type:"added"},Zu={type:"removed"},wi={type:"childadded",child:null},kr={type:"childremoved",child:null};class De extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new D,e=new En,n=new ys,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new Ot}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis($o,t)}rotateY(t){return this.rotateOnAxis(Zo,t)}rotateZ(t){return this.rotateOnAxis(jo,t)}translateOnAxis(t,e){return Yo.copy(t).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($o,t)}translateY(t){return this.translateOnAxis(Zo,t)}translateZ(t){return this.translateOnAxis(jo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ss,Ds,this.up):Pn.lookAt(Ds,ss,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(Pn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jo),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zu),kr.child=t,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jo),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,Yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,$u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}De.DEFAULT_UP=new D(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new D,Fn=new D,Br=new D,Dn=new D,Ei=new D,Ti=new D,Ko=new D,zr=new D,Or=new D,Hr=new D,Gr=new de,Vr=new de,Wr=new de;class ln{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){pn.subVectors(i,e),Fn.subVectors(n,e),Br.subVectors(t,e);const a=pn.dot(pn),o=pn.dot(Fn),l=pn.dot(Br),c=Fn.dot(Fn),h=Fn.dot(Br),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Gr.setScalar(0),Vr.setScalar(0),Wr.setScalar(0),Gr.fromBufferAttribute(t,e),Vr.fromBufferAttribute(t,n),Wr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Gr,r.x),a.addScaledVector(Vr,r.y),a.addScaledVector(Wr,r.z),a}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),Fn.subVectors(t,e),pn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ei.subVectors(i,n),Ti.subVectors(r,n),zr.subVectors(t,n);const l=Ei.dot(zr),c=Ti.dot(zr);if(l<=0&&c<=0)return e.copy(n);Or.subVectors(t,i);const h=Ei.dot(Or),u=Ti.dot(Or);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ei,a);Hr.subVectors(t,r);const f=Ei.dot(Hr),g=Ti.dot(Hr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ti,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ko.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Ko,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Ei,a).addScaledVector(Ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Xr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=fo(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xr(a,r,t+1/3),this.g=Xr(a,r,t),this.b=Xr(a,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){const n=Xc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return te.fromWorkingColorSpace(ke.copy(this),t),Math.round(Vt(ke.r*255,0,255))*65536+Math.round(Vt(ke.g*255,0,255))*256+Math.round(Vt(ke.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,i=ke.g,r=ke.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=ue){te.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,i=ke.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Ls);const n=ps(qn.h,Ls.h,e),i=ps(qn.s,Ls.s,e),r=ps(qn.l,Ls.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new bt;bt.NAMES=Xc;let ju=0;class Ji extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Zn,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=_a,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rt extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new D,Is=new at;class yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eo,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eo&&(t.usage=this.usage),t}}class qc extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ju=0;const rn=new ve,qr=new De,Ai=new D,Ke=new Ms,rs=new Ms,Pe=new D;class ze extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hc(t)?Yc:qc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return qr.lookAt(t),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Ke.min,rs.min),Ke.expandByPoint(Pe),Pe.addVectors(Ke.max,rs.max),Ke.expandByPoint(Pe)):(Ke.expandByPoint(rs.min),Ke.expandByPoint(rs.max))}Ke.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(t,c),Pe.add(Ai)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new D,l[I]=new D;const c=new D,h=new D,u=new D,d=new at,f=new at,g=new at,_=new D,m=new D;function p(I,M,w){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,w),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(U),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),o[I].add(_),o[M].add(_),o[w].add(_),l[I].add(m),l[M].add(m),l[w].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,M=b.length;I<M;++I){const w=b[I],U=w.start,X=w.count;for(let V=U,$=U+X;V<$;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const x=new D,y=new D,C=new D,T=new D;function P(I){C.fromBufferAttribute(i,I),T.copy(C);const M=o[I];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(T,M);const U=y.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,U)}for(let I=0,M=b.length;I<M;++I){const w=b[I],U=w.start,X=w.count;for(let V=U,$=U+X;V<$;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new yn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qo=new ve,ii=new Vu,Us=new po,tl=new D,Ns=new D,ks=new D,Bs=new D,Yr=new D,zs=new D,el=new D,Os=new D;class re extends De{constructor(t=new ze,e=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Yr.fromBufferAttribute(u,t),a?zs.addScaledVector(Yr,h):zs.addScaledVector(Yr.sub(e),h))}e.add(zs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(Us.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Us,tl)===null||ii.origin.distanceToSquared(tl)>(t.far-t.near)**2))&&(Qo.copy(r).invert(),ii.copy(t.ray).applyMatrix4(Qo),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,C=x;y<C;y+=3){const T=o.getX(y),P=o.getX(y+1),I=o.getX(y+2);i=Hs(this,p,t,n,c,h,u,T,P,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=Hs(this,a,t,n,c,h,u,b,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,C=x;y<C;y+=3){const T=y,P=y+1,I=y+2;i=Hs(this,p,t,n,c,h,u,T,P,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,x=m+1,y=m+2;i=Hs(this,a,t,n,c,h,u,b,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ku(s,t,e,n,i,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Kn,o),l===null)return null;Os.copy(o),Os.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:s}}function Hs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Ns),s.getVertexPosition(l,ks),s.getVertexPosition(c,Bs);const h=Ku(s,t,e,n,Ns,ks,Bs,el);if(h){const u=new D;ln.getBarycoord(el,Ns,ks,Bs,u),i&&(h.uv=ln.getInterpolatedAttribute(i,o,l,c,u,new at)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,l,c,u,new at)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};ln.getNormal(Ns,ks,Bs,d.normal),h.face=d,h.barycoord=u}return h}class L extends ze{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(_,m,p,b,x,y,C,T,P,I,M){const w=y/P,U=C/I,X=y/2,V=C/2,$=T/2,tt=P+1,Z=I+1;let nt=0,Y=0;const ut=new D;for(let vt=0;vt<Z;vt++){const Tt=vt*U-V;for(let Wt=0;Wt<tt;Wt++){const fe=Wt*w-X;ut[_]=fe*b,ut[m]=Tt*x,ut[p]=$,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[p]=T>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Wt/P),u.push(1-vt/I),nt+=1}}for(let vt=0;vt<I;vt++)for(let Tt=0;Tt<P;Tt++){const Wt=d+Tt+tt*vt,fe=d+Tt+tt*(vt+1),J=d+(Tt+1)+tt*(vt+1),rt=d+(Tt+1)+tt*vt;l.push(Wt,fe,rt),l.push(fe,J,rt),Y+=6}o.addGroup(f,Y,M),f+=Y,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new L(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $i(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=$i(s[e]);for(const i in n)t[i]=n[i]}return t}function Qu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $c(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const lr={clone:$i,merge:Ge};var td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=td,this.fragmentShader=ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Qu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zc extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new D,nl=new at,il=new at;class Ye extends Zc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,nl,il),e.subVectors(il,nl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ci=-90,Ri=1;class nd extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ye(Ci,Ri,t,e);i.layers=this.layers,this.add(i);const r=new Ye(Ci,Ri,t,e);r.layers=this.layers,this.add(r);const a=new Ye(Ci,Ri,t,e);a.layers=this.layers,this.add(a);const o=new Ye(Ci,Ri,t,e);o.layers=this.layers,this.add(o);const l=new Ye(Ci,Ri,t,e);l.layers=this.layers,this.add(l);const c=new Ye(Ci,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jc extends We{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class id extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new L(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:kn});r.uniforms.tEquirect.value=e;const a=new re(i,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=wn),new nd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class cr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new cr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Jc extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eo,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new D;class hr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new yn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mo extends Ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Pi;const as=new D,Fi=new D,Di=new D,Li=new at,os=new at,Kc=new ve,Gs=new D,ls=new D,Vs=new D,sl=new at,$r=new at,rl=new at;class _r extends De{constructor(t=new mo){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sd(e,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new hr(n,3,0,!1)),Pi.setAttribute("uv",new hr(n,2,3,!1))}this.geometry=Pi,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),Kc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Di.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ws(Gs.set(-.5,-.5,0),Di,a,Fi,i,r),Ws(ls.set(.5,-.5,0),Di,a,Fi,i,r),Ws(Vs.set(.5,.5,0),Di,a,Fi,i,r),sl.set(0,0),$r.set(1,0),rl.set(1,1);let o=t.ray.intersectTriangle(Gs,ls,Vs,!1,as);if(o===null&&(Ws(ls.set(-.5,.5,0),Di,a,Fi,i,r),$r.set(0,1),o=t.ray.intersectTriangle(Gs,Vs,ls,!1,as),o===null))return;const l=t.ray.origin.distanceTo(as);l<t.near||l>t.far||e.push({distance:l,point:as.clone(),uv:ln.getInterpolation(as,Gs,ls,Vs,sl,$r,rl,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ws(s,t,e,n,i,r){Li.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(os.x=r*Li.x-i*Li.y,os.y=i*Li.x+r*Li.y):os.copy(Li),s.copy(t),s.x+=os.x,s.y+=os.y,s.applyMatrix4(Kc)}const Zr=new D,rd=new D,ad=new Ot;class oi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Zr.subVectors(n,e).cross(rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ad.getNormalMatrix(t),i=this.coplanarPoint(Zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new po,Xs=new D;class go{constructor(t=new oi,e=new oi,n=new oi,i=new oi,r=new oi,a=new oi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],b=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+h,m+g,y+b).normalize(),n[3].setComponents(l-a,d-h,m-g,y-b).normalize(),n[4].setComponents(l-o,d-u,m-_,y-x).normalize(),e===Nn)n[5].setComponents(l+o,d+u,m+_,y+x).normalize();else if(e===ar)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Xs.x=i.normal.x>0?t.max.x:t.min.x,Xs.y=i.normal.y>0?t.max.y:t.min.y,Xs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lt extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Be extends We{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qc extends We{constructor(t,e,n,i,r,a,o,l,c,h=zi){if(h!==zi&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=mi),n===void 0&&h===qi&&(n=Xi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new at:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],r=[],a=[],o=new D,l=new ve;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Vt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Vt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vo extends Tn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class od extends vo{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function _o(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const qs=new D,jr=new _o,Jr=new _o,Kr=new _o;class ld extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(qs.subVectors(i[0],i[1]).add(i[0]),c=qs);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(qs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=qs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),jr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Jr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Kr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(jr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Jr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Kr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(jr.calc(l),Jr.calc(l),Kr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function al(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function cd(s,t){const e=1-s;return e*e*t}function hd(s,t){return 2*(1-s)*s*t}function ud(s,t){return s*s*t}function ms(s,t,e,n){return cd(s,t)+hd(s,e)+ud(s,n)}function dd(s,t){const e=1-s;return e*e*e*t}function fd(s,t){const e=1-s;return 3*e*e*s*t}function pd(s,t){return 3*(1-s)*s*s*t}function md(s,t){return s*s*s*t}function gs(s,t,e,n,i){return dd(s,t)+fd(s,e)+pd(s,n)+md(s,i)}class th extends Tn{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(t,i.x,r.x,a.x,o.x),gs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gd extends Tn{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(t,i.x,r.x,a.x,o.x),gs(t,i.y,r.y,a.y,o.y),gs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eh extends Tn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vd extends Tn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nh extends Tn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ms(t,i.x,r.x,a.x),ms(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _d extends Tn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ms(t,i.x,r.x,a.x),ms(t,i.y,r.y,a.y),ms(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ih extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(al(o,l.x,c.x,h.x,u.x),al(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new at().fromArray(i))}return this}}var ol=Object.freeze({__proto__:null,ArcCurve:od,CatmullRomCurve3:ld,CubicBezierCurve:th,CubicBezierCurve3:gd,EllipseCurve:vo,LineCurve:eh,LineCurve3:vd,QuadraticBezierCurve:nh,QuadraticBezierCurve3:_d,SplineCurve:ih});class xd extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ol[i.type]().fromJSON(i))}return this}}class yd extends xd{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new eh(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new nh(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new th(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ih(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new vo(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class xo extends ze{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Vt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new D,d=new at,f=new D,g=new D,_=new D;let m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let b=0;b<=e;b++){const x=n+b*h*i,y=Math.sin(x),C=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*C,a.push(u.x,u.y,u.z),d.x=b/e,d.y=T/(t.length-1),o.push(d.x,d.y);const P=l[3*T+0]*y,I=l[3*T+1],M=l[3*T+0]*C;c.push(P,I,M)}}for(let b=0;b<e;b++)for(let x=0;x<t.length-1;x++){const y=x+b*t.length,C=y,T=y+t.length,P=y+t.length+1,I=y+1;r.push(C,T,I),r.push(P,I,T)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.points,t.segments,t.phiStart,t.phiLength)}}class Mn extends xo{constructor(t=1,e=1,n=4,i=8){const r=new yd;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Mn(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ie extends ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new D,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ot extends ze{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function b(){const y=new D,C=new D;let T=0;const P=(e-t)/n;for(let I=0;I<=r;I++){const M=[],w=I/r,U=w*(e-t)+t;for(let X=0;X<=i;X++){const V=X/i,$=V*l+o,tt=Math.sin($),Z=Math.cos($);C.x=U*tt,C.y=-w*n+m,C.z=U*Z,u.push(C.x,C.y,C.z),y.set(tt,P,Z).normalize(),d.push(y.x,y.y,y.z),f.push(V,1-w),M.push(g++)}_.push(M)}for(let I=0;I<i;I++)for(let M=0;M<r;M++){const w=_[M][I],U=_[M+1][I],X=_[M+1][I+1],V=_[M][I+1];(t>0||M!==0)&&(h.push(w,U,V),T+=3),(e>0||M!==r-1)&&(h.push(U,X,V),T+=3)}c.addGroup(p,T,0),p+=T}function x(y){const C=g,T=new at,P=new D;let I=0;const M=y===!0?t:e,w=y===!0?1:-1;for(let X=1;X<=i;X++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;const U=g;for(let X=0;X<=i;X++){const $=X/i*l+o,tt=Math.cos($),Z=Math.sin($);P.x=M*Z,P.y=m*w,P.z=M*tt,u.push(P.x,P.y,P.z),d.push(0,w,0),T.x=tt*.5+.5,T.y=Z*.5*w+.5,f.push(T.x,T.y),g++}for(let X=0;X<i;X++){const V=C+X,$=U+X;y===!0?h.push($,$+1,V):h.push($+1,$,V),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ot(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cn extends ot{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new cn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bs extends ze{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const x=new D,y=new D,C=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],y),f(e[T+2],C),l(x,y,C,b)}function l(b,x,y,C){const T=C+1,P=[];for(let I=0;I<=T;I++){P[I]=[];const M=b.clone().lerp(y,I/T),w=x.clone().lerp(y,I/T),U=T-I;for(let X=0;X<=U;X++)X===0&&I===T?P[I][X]=M:P[I][X]=M.clone().lerp(w,X/U)}for(let I=0;I<T;I++)for(let M=0;M<2*(T-I)-1;M++){const w=Math.floor(M/2);M%2===0?(d(P[I][w+1]),d(P[I+1][w]),d(P[I][w])):(d(P[I][w+1]),d(P[I+1][w+1]),d(P[I+1][w]))}}function c(b){const x=new D;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(b),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const b=new D;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const y=m(b)/2/Math.PI+.5,C=p(b)/Math.PI+.5;a.push(y,1-C)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){const x=a[b+0],y=a[b+2],C=a[b+4],T=Math.max(x,y,C),P=Math.min(x,y,C);T>.9&&P<.1&&(x<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),C<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,x){const y=b*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){const b=new D,x=new D,y=new D,C=new D,T=new at,P=new at,I=new at;for(let M=0,w=0;M<r.length;M+=9,w+=6){b.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),T.set(a[w+0],a[w+1]),P.set(a[w+2],a[w+3]),I.set(a[w+4],a[w+5]),C.copy(b).add(x).add(y).divideScalar(3);const U=m(C);_(T,w+0,b,U),_(P,w+2,x,U),_(I,w+4,y,U)}}function _(b,x,y,C){C<0&&b.x===1&&(a[x]=b.x-1),y.x===0&&y.z===0&&(a[x]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.vertices,t.indices,t.radius,t.details)}}class xr extends bs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xr(t.radius,t.detail)}}class yo extends bs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yo(t.radius,t.detail)}}class yr extends bs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yr(t.radius,t.detail)}}class ce extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*d-a;for(let x=0;x<c;x++){const y=x*u-r;g.push(y,-b,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const x=b+c*p,y=b+c*(p+1),C=b+1+c*(p+1),T=b+1+c*p;f.push(x,y,T),f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qe extends ze{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new D,g=new at;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const b=p+m,x=b,y=b+n+1,C=b+n+2,T=b+1;o.push(x,y,T),o.push(y,C,T)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Et extends ze{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],x=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const T=C/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+y,1-x),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const x=h[p][b+1],y=h[p][b],C=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&f.push(x,y,T),(p!==n-1||l<Math.PI)&&f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Et(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tn extends ze{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,b=(i+1)*f+g;a.push(_,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ye extends Ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Md extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bd extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mr extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Sd extends Mr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qr=new ve,ll=new D,cl=new D;class sh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(ll),cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cl),e.updateMatrixWorld(),Qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hl=new ve,cs=new D,ta=new D;class wd extends sh{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(cs),ta.copy(n.position),ta.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ta),n.updateMatrixWorld(),i.makeTranslation(-cs.x,-cs.y,-cs.z),hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl)}}class ur extends Mr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Mo extends Zc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ed extends sh{constructor(){super(new Mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vs extends Mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Ed}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rh extends Mr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Td extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ad{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ul(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ul();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ul(){return performance.now()}function dl(s,t,e,n){const i=Cd(n);switch(e){case Dc:return s*t;case Ic:return s*t;case Uc:return s*t*2;case Nc:return s*t/i.components*i.byteLength;case co:return s*t/i.components*i.byteLength;case kc:return s*t*2/i.components*i.byteLength;case ho:return s*t*2/i.components*i.byteLength;case Lc:return s*t*3/i.components*i.byteLength;case gn:return s*t*4/i.components*i.byteLength;case uo:return s*t*4/i.components*i.byteLength;case Ks:case Qs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Da:return Math.max(s,16)*Math.max(t,8)/4;case Ra:case Fa:return Math.max(s,8)*Math.max(t,8)/2;case La:case Ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case za:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Va:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case nr:case ja:case Ja:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Bc:case Ka:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Qa:case to:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cd(s){switch(s){case Hn:case Rc:return{byteLength:1,components:1};case _s:case Pc:case Bn:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case mi:case ao:case Un:return{byteLength:4,components:1};case Fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ah(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Rd(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fd=`#ifdef USE_ALPHAHASH
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
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vd=`#ifdef USE_IRIDESCENCE
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
#endif`,Wd=`#ifdef USE_BUMPMAP
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,tf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ef=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
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
}`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Rf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,If=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Of=`#if defined( USE_POINTS_UV )
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
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
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
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
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
#endif`,t0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,m0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,g0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,_0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E0=`#ifdef USE_TRANSMISSION
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F0=`uniform sampler2D t2D;
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
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
}`,k0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,B0=`#define DISTANCE
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
}`,z0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`uniform float scale;
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
}`,V0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#define LAMBERT
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
}`,Y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,$0=`#define MATCAP
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
}`,Z0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,J0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K0=`#define PHONG
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
}`,Q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,tp=`#define STANDARD
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
}`,ep=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,np=`#define TOON
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
}`,ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sp=`uniform float size;
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
}`,rp=`uniform vec3 diffuse;
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
}`,ap=`#include <common>
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
}`,op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,lp=`uniform float rotation;
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
}`,cp=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Pd,alphahash_pars_fragment:Fd,alphamap_fragment:Dd,alphamap_pars_fragment:Ld,alphatest_fragment:Id,alphatest_pars_fragment:Ud,aomap_fragment:Nd,aomap_pars_fragment:kd,batching_pars_vertex:Bd,batching_vertex:zd,begin_vertex:Od,beginnormal_vertex:Hd,bsdfs:Gd,iridescence_fragment:Vd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:$d,color_fragment:Zd,color_pars_fragment:jd,color_pars_vertex:Jd,color_vertex:Kd,common:Qd,cube_uv_reflection_fragment:tf,defaultnormal_vertex:ef,displacementmap_pars_vertex:nf,displacementmap_vertex:sf,emissivemap_fragment:rf,emissivemap_pars_fragment:af,colorspace_fragment:of,colorspace_pars_fragment:lf,envmap_fragment:cf,envmap_common_pars_fragment:hf,envmap_pars_fragment:uf,envmap_pars_vertex:df,envmap_physical_pars_fragment:Sf,envmap_vertex:ff,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:gf,fog_pars_fragment:vf,gradientmap_pars_fragment:_f,lightmap_pars_fragment:xf,lights_lambert_fragment:yf,lights_lambert_pars_fragment:Mf,lights_pars_begin:bf,lights_toon_fragment:wf,lights_toon_pars_fragment:Ef,lights_phong_fragment:Tf,lights_phong_pars_fragment:Af,lights_physical_fragment:Cf,lights_physical_pars_fragment:Rf,lights_fragment_begin:Pf,lights_fragment_maps:Ff,lights_fragment_end:Df,logdepthbuf_fragment:Lf,logdepthbuf_pars_fragment:If,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Nf,map_fragment:kf,map_pars_fragment:Bf,map_particle_fragment:zf,map_particle_pars_fragment:Of,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:Vf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:qf,morphtarget_vertex:Yf,normal_fragment_begin:$f,normal_fragment_maps:Zf,normal_pars_fragment:jf,normal_pars_vertex:Jf,normal_vertex:Kf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:t0,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:s0,packing:r0,premultiplied_alpha_fragment:a0,project_vertex:o0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:h0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:d0,shadowmap_pars_vertex:f0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:g0,skinning_pars_vertex:v0,skinning_vertex:_0,skinnormal_vertex:x0,specularmap_fragment:y0,specularmap_pars_fragment:M0,tonemapping_fragment:b0,tonemapping_pars_fragment:S0,transmission_fragment:w0,transmission_pars_fragment:E0,uv_pars_fragment:T0,uv_pars_vertex:A0,uv_vertex:C0,worldpos_vertex:R0,background_vert:P0,background_frag:F0,backgroundCube_vert:D0,backgroundCube_frag:L0,cube_vert:I0,cube_frag:U0,depth_vert:N0,depth_frag:k0,distanceRGBA_vert:B0,distanceRGBA_frag:z0,equirect_vert:O0,equirect_frag:H0,linedashed_vert:G0,linedashed_frag:V0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:q0,meshlambert_frag:Y0,meshmatcap_vert:$0,meshmatcap_frag:Z0,meshnormal_vert:j0,meshnormal_frag:J0,meshphong_vert:K0,meshphong_frag:Q0,meshphysical_vert:tp,meshphysical_frag:ep,meshtoon_vert:np,meshtoon_frag:ip,points_vert:sp,points_frag:rp,shadow_vert:ap,shadow_frag:op,sprite_vert:lp,sprite_frag:cp},lt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Sn={basic:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ge([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ge([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ge([lt.points,lt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ge([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ge([lt.common,lt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ge([lt.sprite,lt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ge([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ge([lt.lights,lt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Sn.physical={uniforms:Ge([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Ys={r:0,b:0,g:0},ri=new En,hp=new ve;function up(s,t,e,n,i,r,a){const o=new bt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const C=g(x);C===null?p(o,l):C&&C.isColor&&(p(C,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===vr)?(h===void 0&&(h=new re(new L(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:$i(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ri.copy(y.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hp.makeRotationFromEuler(ri)),h.material.toneMapped=te.getTransfer(C.colorSpace)!==he,(u!==C||d!==C.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new re(new ce(2,2),new Ve({name:"BackgroundMaterial",uniforms:$i(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(C.colorSpace)!==he,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Ys,$c(s)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,y,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m,dispose:b}}function dp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(w,U,X,V,$){let tt=!1;const Z=u(V,X,U);r!==Z&&(r=Z,c(r.object)),tt=f(w,V,X,$),tt&&g(w,V,X,$),$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,y(w,U,X,V),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function u(w,U,X){const V=X.wireframe===!0;let $=n[w.id];$===void 0&&($={},n[w.id]=$);let tt=$[U.id];tt===void 0&&(tt={},$[U.id]=tt);let Z=tt[V];return Z===void 0&&(Z=d(l()),tt[V]=Z),Z}function d(w){const U=[],X=[],V=[];for(let $=0;$<e;$++)U[$]=0,X[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:V,object:w,attributes:{},index:null}}function f(w,U,X,V){const $=r.attributes,tt=U.attributes;let Z=0;const nt=X.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const vt=$[Y];let Tt=tt[Y];if(Tt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor)),vt===void 0||vt.attribute!==Tt||Tt&&vt.data!==Tt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==V}function g(w,U,X,V){const $={},tt=U.attributes;let Z=0;const nt=X.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let vt=tt[Y];vt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor));const Tt={};Tt.attribute=vt,vt&&vt.data&&(Tt.data=vt.data),$[Y]=Tt,Z++}r.attributes=$,r.attributesNum=Z,r.index=V}function _(){const w=r.newAttributes;for(let U=0,X=w.length;U<X;U++)w[U]=0}function m(w){p(w,0)}function p(w,U){const X=r.newAttributes,V=r.enabledAttributes,$=r.attributeDivisors;X[w]=1,V[w]===0&&(s.enableVertexAttribArray(w),V[w]=1),$[w]!==U&&(s.vertexAttribDivisor(w,U),$[w]=U)}function b(){const w=r.newAttributes,U=r.enabledAttributes;for(let X=0,V=U.length;X<V;X++)U[X]!==w[X]&&(s.disableVertexAttribArray(X),U[X]=0)}function x(w,U,X,V,$,tt,Z){Z===!0?s.vertexAttribIPointer(w,U,X,$,tt):s.vertexAttribPointer(w,U,X,V,$,tt)}function y(w,U,X,V){_();const $=V.attributes,tt=X.getAttributes(),Z=U.defaultAttributeValues;for(const nt in tt){const Y=tt[nt];if(Y.location>=0){let ut=$[nt];if(ut===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor)),ut!==void 0){const vt=ut.normalized,Tt=ut.itemSize,Wt=t.get(ut);if(Wt===void 0)continue;const fe=Wt.buffer,J=Wt.type,rt=Wt.bytesPerElement,St=J===s.INT||J===s.UNSIGNED_INT||ut.gpuType===ao;if(ut.isInterleavedBufferAttribute){const dt=ut.data,It=dt.stride,Bt=ut.offset;if(dt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)p(Y.location+Xt,dt.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)m(Y.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let Xt=0;Xt<Y.locationSize;Xt++)x(Y.location+Xt,Tt/Y.locationSize,J,vt,It*rt,(Bt+Tt/Y.locationSize*Xt)*rt,St)}else{if(ut.isInstancedBufferAttribute){for(let dt=0;dt<Y.locationSize;dt++)p(Y.location+dt,ut.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let dt=0;dt<Y.locationSize;dt++)m(Y.location+dt);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let dt=0;dt<Y.locationSize;dt++)x(Y.location+dt,Tt/Y.locationSize,J,vt,Tt*rt,Tt/Y.locationSize*dt*rt,St)}}else if(Z!==void 0){const vt=Z[nt];if(vt!==void 0)switch(vt.length){case 2:s.vertexAttrib2fv(Y.location,vt);break;case 3:s.vertexAttrib3fv(Y.location,vt);break;case 4:s.vertexAttrib4fv(Y.location,vt);break;default:s.vertexAttrib1fv(Y.location,vt)}}}}b()}function C(){I();for(const w in n){const U=n[w];for(const X in U){const V=U[X];for(const $ in V)h(V[$].object),delete V[$];delete U[X]}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const U=n[w.id];for(const X in U){const V=U[X];for(const $ in V)h(V[$].object),delete V[$];delete U[X]}delete n[w.id]}function P(w){for(const U in n){const X=n[U];if(X[w.id]===void 0)continue;const V=X[w.id];for(const $ in V)h(V[$].object),delete V[$];delete X[w.id]}}function I(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function fp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==gn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const I=P===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Hn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Un&&!I)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function mp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new oi,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,x=b*4;let y=p.clippingState||null;l.value=y,y=h(g,d,x,f);for(let C=0;C!==x;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function gp(s){let t=new WeakMap;function e(a,o){return o===Ta?a.mapping=Vi:o===Aa&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ta||o===Aa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new id(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Bi=4,fl=[.125,.215,.35,.446,.526,.582],hi=20,ea=new Mo,pl=new bt;let na=null,ia=0,sa=0,ra=!1;const li=(1+Math.sqrt(5))/2,Ii=1/li,ml=[new D(-li,Ii,0),new D(li,Ii,0),new D(-Ii,0,li),new D(Ii,0,li),new D(0,li,-Ii),new D(0,li,Ii),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class gl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,sa),this._renderer.xr.enabled=ra,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Bn,format:gn,colorSpace:Yi,depthBuffer:!1},i=vl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vp(r)),this._blurMaterial=_p(r,t,e)}return i}_compileMaterial(t){const e=new re(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,i){const o=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pl),h.toneMapping=jn,h.autoClear=!1;const f=new Rt({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new re(new L,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(pl),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;$s(i,b*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Vi||t.mapping===Wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;$s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ml[(i-r-1)%ml.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new re(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):hi;m>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const p=[];let b=0;for(let P=0;P<hi;++P){const I=P/_,M=Math.exp(-I*I/2);p.push(M),P===0?b+=M:P<m&&(b+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[i],C=3*y*(i>x-Bi?i-x+Bi:0),T=4*(this._cubeSize-y);$s(e,C,T,3*y,2*y),l.setRenderTarget(e),l.render(u,ea)}}function vp(s){const t=[],e=[],n=[];let i=s;const r=s-Bi+1+fl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Bi?l=fl[a-s+Bi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const P=T%3*2/3-1,I=T>2?0:-1,M=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];b.set(M,_*g*T),x.set(d,m*g*T);const w=[T,T,T,T,T,T];y.set(w,p*g*T)}const C=new ze;C.setAttribute("position",new yn(b,_)),C.setAttribute("uv",new yn(x,m)),C.setAttribute("faceIndex",new yn(y,p)),t.push(C),i>Bi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vl(s,t,e){const n=new xn(s,t,e);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function _p(s,t,e){const n=new Float32Array(hi),i=new D(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function _l(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function xl(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ta||l===Aa,h=l===Vi||l===Wi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new gl(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new gl(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function yp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ki("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Mp(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let x=0,y=b.length;x<y;x+=3){const C=b[x+0],T=b[x+1],P=b[x+2];d.push(C,T,T,P,P,C)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,y=b.length/3-1;x<y;x+=3){const C=x+0,T=x+1,P=x+2;d.push(C,T,T,P,P,C)}}else return;const m=new(Hc(d)?Yc:qc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function bp(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function wp(s,t,e){const n=new WeakMap,i=new de;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let w=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=o.attributes.position.count*y,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*T*4*u),I=new Vc(P,C,T,u);I.type=Un,I.needsUpdate=!0;const M=y*4;for(let U=0;U<u;U++){const X=p[U],V=b[U],$=x[U],tt=C*T*4*U;for(let Z=0;Z<X.count;Z++){const nt=Z*M;g===!0&&(i.fromBufferAttribute(X,Z),P[tt+nt+0]=i.x,P[tt+nt+1]=i.y,P[tt+nt+2]=i.z,P[tt+nt+3]=0),_===!0&&(i.fromBufferAttribute(V,Z),P[tt+nt+4]=i.x,P[tt+nt+5]=i.y,P[tt+nt+6]=i.z,P[tt+nt+7]=0),m===!0&&(i.fromBufferAttribute($,Z),P[tt+nt+8]=i.x,P[tt+nt+9]=i.y,P[tt+nt+10]=i.z,P[tt+nt+11]=$.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new at(C,T)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ep(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const oh=new We,yl=new Qc(1,1),lh=new Vc,ch=new Hu,hh=new jc,Ml=[],bl=[],Sl=new Float32Array(16),wl=new Float32Array(9),El=new Float32Array(4);function Ki(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ml[i];if(r===void 0&&(r=new Float32Array(i),Ml[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function br(s,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Tp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function Cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function Rp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function Pp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;El.set(n),s.uniformMatrix2fv(this.addr,!1,El),Re(e,n)}}function Fp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;wl.set(n),s.uniformMatrix3fv(this.addr,!1,wl),Re(e,n)}}function Dp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Sl.set(n),s.uniformMatrix4fv(this.addr,!1,Sl),Re(e,n)}}function Lp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function kp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function Op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function Hp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(yl.compareFunction=Oc,r=yl):r=oh,e.setTexture2D(t||r,i)}function Gp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ch,i)}function Vp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hh,i)}function Wp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lh,i)}function Xp(s){switch(s){case 5126:return Tp;case 35664:return Ap;case 35665:return Cp;case 35666:return Rp;case 35674:return Pp;case 35675:return Fp;case 35676:return Dp;case 5124:case 35670:return Lp;case 35667:case 35671:return Ip;case 35668:case 35672:return Up;case 35669:case 35673:return Np;case 5125:return kp;case 36294:return Bp;case 36295:return zp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Wp}}function qp(s,t){s.uniform1fv(this.addr,t)}function Yp(s,t){const e=Ki(t,this.size,2);s.uniform2fv(this.addr,e)}function $p(s,t){const e=Ki(t,this.size,3);s.uniform3fv(this.addr,e)}function Zp(s,t){const e=Ki(t,this.size,4);s.uniform4fv(this.addr,e)}function jp(s,t){const e=Ki(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Jp(s,t){const e=Ki(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Kp(s,t){const e=Ki(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Qp(s,t){s.uniform1iv(this.addr,t)}function tm(s,t){s.uniform2iv(this.addr,t)}function em(s,t){s.uniform3iv(this.addr,t)}function nm(s,t){s.uniform4iv(this.addr,t)}function im(s,t){s.uniform1uiv(this.addr,t)}function sm(s,t){s.uniform2uiv(this.addr,t)}function rm(s,t){s.uniform3uiv(this.addr,t)}function am(s,t){s.uniform4uiv(this.addr,t)}function om(s,t,e){const n=this.cache,i=t.length,r=br(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||oh,r[a])}function lm(s,t,e){const n=this.cache,i=t.length,r=br(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ch,r[a])}function cm(s,t,e){const n=this.cache,i=t.length,r=br(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||hh,r[a])}function hm(s,t,e){const n=this.cache,i=t.length,r=br(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||lh,r[a])}function um(s){switch(s){case 5126:return qp;case 35664:return Yp;case 35665:return $p;case 35666:return Zp;case 35674:return jp;case 35675:return Jp;case 35676:return Kp;case 5124:case 35670:return Qp;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}class dm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xp(e.type)}}class fm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=um(e.type)}}class pm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Tl(s,t){s.seq.push(t),s.map[t.id]=t}function mm(s,t,e){const n=s.name,i=n.length;for(aa.lastIndex=0;;){const r=aa.exec(n),a=aa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Tl(e,c===void 0?new dm(o,s,t):new fm(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new pm(o),Tl(e,u)),e=u}}}class ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);mm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Al(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const gm=37297;let vm=0;function _m(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Cl=new Ot;function xm(s){te._getMatrix(Cl,te.workingColorSpace,s);const t=`mat3( ${Cl.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case rr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+_m(s.getShaderSource(t),a)}else return i}function ym(s,t){const e=xm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mm(s,t){let e;switch(t){case Qh:e="Linear";break;case tu:e="Reinhard";break;case eu:e="Cineon";break;case Ac:e="ACESFilmic";break;case iu:e="AgX";break;case su:e="Neutral";break;case nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zs=new D;function bm(){te.getLuminanceCoefficients(Zs);const s=Zs.x.toFixed(4),t=Zs.y.toFixed(4),e=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function wm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Em(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ds(s){return s!==""}function Pl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(s){return s.replace(Tm,Cm)}const Am=new Map;function Cm(s,t){let e=Gt[t];if(e===void 0){const n=Am.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return no(e)}const Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(s){return s.replace(Rm,Pm)}function Pm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ll(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Dm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vi:case Wi:t="ENVMAP_TYPE_CUBE";break;case vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function Im(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Tc:t="ENVMAP_BLENDING_MULTIPLY";break;case Jh:t="ENVMAP_BLENDING_MIX";break;case Kh:t="ENVMAP_BLENDING_ADD";break}return t}function Um(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Fm(e),c=Dm(e),h=Lm(e),u=Im(e),d=Um(e),f=Sm(e),g=wm(r),_=i.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),p.length>0&&(p+=`
`)):(m=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),p=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==jn?Mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,ym("linearToOutputTexel",e.outputColorSpace),bm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),a=no(a),a=Pl(a,e),a=Fl(a,e),o=no(o),o=Pl(o,e),o=Fl(o,e),a=Dl(a),o=Dl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=b+m+a,y=b+p+o,C=Al(i,i.VERTEX_SHADER,x),T=Al(i,i.FRAGMENT_SHADER,y);i.attachShader(_,C),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(U){if(s.debug.checkShaderErrors){const X=i.getProgramInfoLog(_).trim(),V=i.getShaderInfoLog(C).trim(),$=i.getShaderInfoLog(T).trim();let tt=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,T);else{const nt=Rl(i,C,"vertex"),Y=Rl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+nt+`
`+Y)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||$==="")&&(Z=!1);Z&&(U.diagnostics={runnable:tt,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:p}})}i.deleteShader(C),i.deleteShader(T),I=new ir(i,_),M=Em(i,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,gm)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let km=0;class Bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zm(t),e.set(t,n)),n}}class zm{constructor(t){this.id=km++,this.code=t,this.usedTimes=0}}function Om(s,t,e,n,i,r,a){const o=new Wc,l=new Bm,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,w,U,X,V){const $=X.fog,tt=V.geometry,Z=M.isMeshStandardMaterial?X.environment:null,nt=(M.isMeshStandardMaterial?e:t).get(M.envMap||Z),Y=nt&&nt.mapping===vr?nt.image.height:null,ut=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const vt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Tt=vt!==void 0?vt.length:0;let Wt=0;tt.morphAttributes.position!==void 0&&(Wt=1),tt.morphAttributes.normal!==void 0&&(Wt=2),tt.morphAttributes.color!==void 0&&(Wt=3);let fe,J,rt,St;if(ut){const oe=Sn[ut];fe=oe.vertexShader,J=oe.fragmentShader}else fe=M.vertexShader,J=M.fragmentShader,l.update(M),rt=l.getVertexShaderID(M),St=l.getFragmentShaderID(M);const dt=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),Bt=V.isInstancedMesh===!0,Xt=V.isBatchedMesh===!0,xe=!!M.map,jt=!!M.matcap,we=!!nt,N=!!M.aoMap,en=!!M.lightMap,Yt=!!M.bumpMap,$t=!!M.normalMap,At=!!M.displacementMap,ge=!!M.emissiveMap,Ct=!!M.metalnessMap,R=!!M.roughnessMap,S=M.anisotropy>0,H=M.clearcoat>0,K=M.dispersion>0,et=M.iridescence>0,j=M.sheen>0,wt=M.transmission>0,ft=S&&!!M.anisotropyMap,_t=H&&!!M.clearcoatMap,Jt=H&&!!M.clearcoatNormalMap,st=H&&!!M.clearcoatRoughnessMap,xt=et&&!!M.iridescenceMap,Dt=et&&!!M.iridescenceThicknessMap,Ut=j&&!!M.sheenColorMap,yt=j&&!!M.sheenRoughnessMap,Zt=!!M.specularMap,Ht=!!M.specularColorMap,me=!!M.specularIntensityMap,k=wt&&!!M.transmissionMap,ct=wt&&!!M.thicknessMap,q=!!M.gradientMap,Q=!!M.alphaMap,mt=M.alphaTest>0,pt=!!M.alphaHash,zt=!!M.extensions;let be=jn;M.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(be=s.toneMapping);const Ue={shaderID:ut,shaderType:M.type,shaderName:M.name,vertexShader:fe,fragmentShader:J,defines:M.defines,customVertexShaderID:rt,customFragmentShaderID:St,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&V._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&V.instanceColor!==null,instancingMorph:Bt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Yi,alphaToCoverage:!!M.alphaToCoverage,map:xe,matcap:jt,envMap:we,envMapMode:we&&nt.mapping,envMapCubeUVHeight:Y,aoMap:N,lightMap:en,bumpMap:Yt,normalMap:$t,displacementMap:d&&At,emissiveMap:ge,normalMapObjectSpace:$t&&M.normalMapType===lu,normalMapTangentSpace:$t&&M.normalMapType===zc,metalnessMap:Ct,roughnessMap:R,anisotropy:S,anisotropyMap:ft,clearcoat:H,clearcoatMap:_t,clearcoatNormalMap:Jt,clearcoatRoughnessMap:st,dispersion:K,iridescence:et,iridescenceMap:xt,iridescenceThicknessMap:Dt,sheen:j,sheenColorMap:Ut,sheenRoughnessMap:yt,specularMap:Zt,specularColorMap:Ht,specularIntensityMap:me,transmission:wt,transmissionMap:k,thicknessMap:ct,gradientMap:q,opaque:M.transparent===!1&&M.blending===Zn&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:mt,alphaHash:pt,combine:M.combine,mapUv:xe&&_(M.map.channel),aoMapUv:N&&_(M.aoMap.channel),lightMapUv:en&&_(M.lightMap.channel),bumpMapUv:Yt&&_(M.bumpMap.channel),normalMapUv:$t&&_(M.normalMap.channel),displacementMapUv:At&&_(M.displacementMap.channel),emissiveMapUv:ge&&_(M.emissiveMap.channel),metalnessMapUv:Ct&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:ft&&_(M.anisotropyMap.channel),clearcoatMapUv:_t&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(M.sheenRoughnessMap.channel),specularMapUv:Zt&&_(M.specularMap.channel),specularColorMapUv:Ht&&_(M.specularColorMap.channel),specularIntensityMapUv:me&&_(M.specularIntensityMap.channel),transmissionMapUv:k&&_(M.transmissionMap.channel),thicknessMapUv:ct&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&($t||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!tt.attributes.uv&&(xe||Q),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:V.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Wt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:xe&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===he,decodeVideoTextureEmissive:ge&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===he,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===se,flipSided:M.side===$e,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:zt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&M.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)w.push(U),w.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(b(w,M),x(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function b(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const w=g[M.type];let U;if(w){const X=Sn[w];U=lr.clone(X.uniforms)}else U=M.uniforms;return U}function C(M,w){let U;for(let X=0,V=h.length;X<V;X++){const $=h[X];if($.cacheKey===w){U=$,++U.usedTimes;break}}return U===void 0&&(U=new Nm(s,w,M,r),h.push(U)),U}function T(M){if(--M.usedTimes===0){const w=h.indexOf(M);h[w]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:I}}function Hm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Gm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Il(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ul(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Gm),n.length>1&&n.sort(d||Il),i.length>1&&i.sort(d||Il)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Vm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ul,s.set(n,[a])):i>=r.length?(a=new Ul,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Wm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new bt};break;case"SpotLight":e={position:new D,direction:new D,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Xm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let qm=0;function Ym(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $m(s){const t=new Wm,e=Xm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new ve,a=new ve;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,x=0,y=0,C=0,T=0,P=0;c.sort(Ym);for(let M=0,w=c.length;M<w;M++){const U=c[M],X=U.color,V=U.intensity,$=U.distance,tt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=X.r*V,u+=X.g*V,d+=X.b*V;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(U.sh.coefficients[Z],V);P++}else if(U.isDirectionalLight){const Z=t.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const nt=U.shadow,Y=e.get(U);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=tt,n.directionalShadowMatrix[f]=U.shadow.matrix,b++}n.directional[f]=Z,f++}else if(U.isSpotLight){const Z=t.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(X).multiplyScalar(V),Z.distance=$,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,n.spot[_]=Z;const nt=U.shadow;if(U.map&&(n.spotLightMap[C]=U.map,C++,nt.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[_]=nt.matrix,U.castShadow){const Y=e.get(U);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=tt,y++}_++}else if(U.isRectAreaLight){const Z=t.get(U);Z.color.copy(X).multiplyScalar(V),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=Z,m++}else if(U.isPointLight){const Z=t.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){const nt=U.shadow,Y=e.get(U);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,Y.shadowCameraNear=nt.camera.near,Y.shadowCameraFar=nt.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=U.shadow.matrix,x++}n.point[g]=Z,g++}else if(U.isHemisphereLight){const Z=t.get(U);Z.skyColor.copy(U.color).multiplyScalar(V),Z.groundColor.copy(U.groundColor).multiplyScalar(V),n.hemi[p]=Z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==C||I.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=C,I.numLightProbes=P,n.version=qm++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const x=c[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Nl(s){const t=new $m(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Zm(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Nl(s),t.set(i,[o])):r>=a.length?(o=new Nl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Km(s,t,e){let n=new go;const i=new at,r=new at,a=new de,o=new Md({depthPacking:ou}),l=new bd,c={},h=e.maxTextureSize,u={[Kn]:$e,[$e]:Kn,[se]:se},d=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:jm,fragmentShader:Jm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let p=this.type;this.render=function(T,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),w=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),X=s.state;X.setBlending(kn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=p!==Ln&&this.type===Ln,$=p===Ln&&this.type!==Ln;for(let tt=0,Z=T.length;tt<Z;tt++){const nt=T[tt],Y=nt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const ut=Y.getFrameExtents();if(i.multiply(ut),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ut.x),i.x=r.x*ut.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ut.y),i.y=r.y*ut.y,Y.mapSize.y=r.y)),Y.map===null||V===!0||$===!0){const Tt=this.type!==Ln?{minFilter:_n,magFilter:_n}:{};Y.map!==null&&Y.map.dispose(),Y.map=new xn(i.x,i.y,Tt),Y.map.texture.name=nt.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const vt=Y.getViewportCount();for(let Tt=0;Tt<vt;Tt++){const Wt=Y.getViewport(Tt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),X.viewport(a),Y.updateMatrices(nt,Tt),n=Y.getFrustum(),y(P,I,Y.camera,nt,this.type)}Y.isPointLightShadow!==!0&&this.type===Ln&&b(Y,I),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,w,U)};function b(T,P){const I=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(P,null,I,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(P,null,I,f,_,null)}function x(T,P,I,M){let w=null;const U=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)w=U;else if(w=I.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const X=w.uuid,V=P.uuid;let $=c[X];$===void 0&&($={},c[X]=$);let tt=$[V];tt===void 0&&(tt=w.clone(),$[V]=tt,P.addEventListener("dispose",C)),w=tt}if(w.visible=P.visible,w.wireframe=P.wireframe,M===Ln?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:u[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const X=s.properties.get(w);X.light=I}return w}function y(T,P,I,M,w){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Ln)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const V=t.update(T),$=T.material;if(Array.isArray($)){const tt=V.groups;for(let Z=0,nt=tt.length;Z<nt;Z++){const Y=tt[Z],ut=$[Y.materialIndex];if(ut&&ut.visible){const vt=x(T,ut,M,w);T.onBeforeShadow(s,T,P,I,V,vt,Y),s.renderBufferDirect(I,null,V,vt,T,Y),T.onAfterShadow(s,T,P,I,V,vt,Y)}}}else if($.visible){const tt=x(T,$,M,w);T.onBeforeShadow(s,T,P,I,V,tt,null),s.renderBufferDirect(I,null,V,tt,T,null),T.onAfterShadow(s,T,P,I,V,tt,null)}}const X=T.children;for(let V=0,$=X.length;V<$;V++)y(X[V],P,I,M,w)}function C(T){T.target.removeEventListener("dispose",C);for(const I in c){const M=c[I],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const Qm={[xa]:ya,[Ma]:wa,[ba]:Ea,[Gi]:Sa,[ya]:xa,[wa]:Ma,[Ea]:ba,[Sa]:Gi};function tg(s,t){function e(){let k=!1;const ct=new de;let q=null;const Q=new de(0,0,0,0);return{setMask:function(mt){q!==mt&&!k&&(s.colorMask(mt,mt,mt,mt),q=mt)},setLocked:function(mt){k=mt},setClear:function(mt,pt,zt,be,Ue){Ue===!0&&(mt*=be,pt*=be,zt*=be),ct.set(mt,pt,zt,be),Q.equals(ct)===!1&&(s.clearColor(mt,pt,zt,be),Q.copy(ct))},reset:function(){k=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let k=!1,ct=!1,q=null,Q=null,mt=null;return{setReversed:function(pt){if(ct!==pt){const zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const be=mt;mt=null,this.setClear(be)}ct=pt},getReversed:function(){return ct},setTest:function(pt){pt?dt(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(pt){q!==pt&&!k&&(s.depthMask(pt),q=pt)},setFunc:function(pt){if(ct&&(pt=Qm[pt]),Q!==pt){switch(pt){case xa:s.depthFunc(s.NEVER);break;case ya:s.depthFunc(s.ALWAYS);break;case Ma:s.depthFunc(s.LESS);break;case Gi:s.depthFunc(s.LEQUAL);break;case ba:s.depthFunc(s.EQUAL);break;case Sa:s.depthFunc(s.GEQUAL);break;case wa:s.depthFunc(s.GREATER);break;case Ea:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=pt}},setLocked:function(pt){k=pt},setClear:function(pt){mt!==pt&&(ct&&(pt=1-pt),s.clearDepth(pt),mt=pt)},reset:function(){k=!1,q=null,Q=null,mt=null,ct=!1}}}function i(){let k=!1,ct=null,q=null,Q=null,mt=null,pt=null,zt=null,be=null,Ue=null;return{setTest:function(oe){k||(oe?dt(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(oe){ct!==oe&&!k&&(s.stencilMask(oe),ct=oe)},setFunc:function(oe,hn,An){(q!==oe||Q!==hn||mt!==An)&&(s.stencilFunc(oe,hn,An),q=oe,Q=hn,mt=An)},setOp:function(oe,hn,An){(pt!==oe||zt!==hn||be!==An)&&(s.stencilOp(oe,hn,An),pt=oe,zt=hn,be=An)},setLocked:function(oe){k=oe},setClear:function(oe){Ue!==oe&&(s.clearStencil(oe),Ue=oe)},reset:function(){k=!1,ct=null,q=null,Q=null,mt=null,pt=null,zt=null,be=null,Ue=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,x=null,y=null,C=null,T=null,P=new bt(0,0,0),I=0,M=!1,w=null,U=null,X=null,V=null,$=null;const tt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,nt=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=nt>=2);let ut=null,vt={};const Tt=s.getParameter(s.SCISSOR_BOX),Wt=s.getParameter(s.VIEWPORT),fe=new de().fromArray(Tt),J=new de().fromArray(Wt);function rt(k,ct,q,Q){const mt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(k,pt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<q;zt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(ct+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return pt}const St={};St[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(s.DEPTH_TEST),a.setFunc(Gi),Yt(!1),$t(Uo),dt(s.CULL_FACE),N(kn);function dt(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function It(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Bt(k,ct){return u[k]!==ct?(s.bindFramebuffer(k,ct),u[k]=ct,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Xt(k,ct){let q=f,Q=!1;if(k){q=d.get(ct),q===void 0&&(q=[],d.set(ct,q));const mt=k.textures;if(q.length!==mt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,zt=mt.length;pt<zt;pt++)q[pt]=s.COLOR_ATTACHMENT0+pt;q.length=mt.length,Q=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,Q=!0);Q&&s.drawBuffers(q)}function xe(k){return g!==k?(s.useProgram(k),g=k,!0):!1}const jt={[ci]:s.FUNC_ADD,[Ih]:s.FUNC_SUBTRACT,[Uh]:s.FUNC_REVERSE_SUBTRACT};jt[Nh]=s.MIN,jt[kh]=s.MAX;const we={[Bh]:s.ZERO,[zh]:s.ONE,[Oh]:s.SRC_COLOR,[va]:s.SRC_ALPHA,[qh]:s.SRC_ALPHA_SATURATE,[Wh]:s.DST_COLOR,[Gh]:s.DST_ALPHA,[Hh]:s.ONE_MINUS_SRC_COLOR,[_a]:s.ONE_MINUS_SRC_ALPHA,[Xh]:s.ONE_MINUS_DST_COLOR,[Vh]:s.ONE_MINUS_DST_ALPHA,[Yh]:s.CONSTANT_COLOR,[$h]:s.ONE_MINUS_CONSTANT_COLOR,[Zh]:s.CONSTANT_ALPHA,[jh]:s.ONE_MINUS_CONSTANT_ALPHA};function N(k,ct,q,Q,mt,pt,zt,be,Ue,oe){if(k===kn){_===!0&&(It(s.BLEND),_=!1);return}if(_===!1&&(dt(s.BLEND),_=!0),k!==Lh){if(k!==m||oe!==M){if((p!==ci||y!==ci)&&(s.blendEquation(s.FUNC_ADD),p=ci,y=ci),oe)switch(k){case Zn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qt:s.blendFunc(s.ONE,s.ONE);break;case No:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ko:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Zn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case No:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ko:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}b=null,x=null,C=null,T=null,P.set(0,0,0),I=0,m=k,M=oe}return}mt=mt||ct,pt=pt||q,zt=zt||Q,(ct!==p||mt!==y)&&(s.blendEquationSeparate(jt[ct],jt[mt]),p=ct,y=mt),(q!==b||Q!==x||pt!==C||zt!==T)&&(s.blendFuncSeparate(we[q],we[Q],we[pt],we[zt]),b=q,x=Q,C=pt,T=zt),(be.equals(P)===!1||Ue!==I)&&(s.blendColor(be.r,be.g,be.b,Ue),P.copy(be),I=Ue),m=k,M=!1}function en(k,ct){k.side===se?It(s.CULL_FACE):dt(s.CULL_FACE);let q=k.side===$e;ct&&(q=!q),Yt(q),k.blending===Zn&&k.transparent===!1?N(kn):N(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const Q=k.stencilWrite;o.setTest(Q),Q&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ge(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function $t(k){k!==Rh?(dt(s.CULL_FACE),k!==U&&(k===Uo?s.cullFace(s.BACK):k===Ph?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),U=k}function At(k){k!==X&&(Z&&s.lineWidth(k),X=k)}function ge(k,ct,q){k?(dt(s.POLYGON_OFFSET_FILL),(V!==ct||$!==q)&&(s.polygonOffset(ct,q),V=ct,$=q)):It(s.POLYGON_OFFSET_FILL)}function Ct(k){k?dt(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function R(k){k===void 0&&(k=s.TEXTURE0+tt-1),ut!==k&&(s.activeTexture(k),ut=k)}function S(k,ct,q){q===void 0&&(ut===null?q=s.TEXTURE0+tt-1:q=ut);let Q=vt[q];Q===void 0&&(Q={type:void 0,texture:void 0},vt[q]=Q),(Q.type!==k||Q.texture!==ct)&&(ut!==q&&(s.activeTexture(q),ut=q),s.bindTexture(k,ct||St[k]),Q.type=k,Q.texture=ct)}function H(){const k=vt[ut];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(k){fe.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),fe.copy(k))}function yt(k){J.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function Zt(k,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let Q=q.get(k);Q===void 0&&(Q=s.getUniformBlockIndex(ct,k.name),q.set(k,Q))}function Ht(k,ct){const Q=c.get(ct).get(k);l.get(ct)!==Q&&(s.uniformBlockBinding(ct,Q,k.__bindingPointIndex),l.set(ct,Q))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ut=null,vt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,x=null,y=null,C=null,T=null,P=new bt(0,0,0),I=0,M=!1,w=null,U=null,X=null,V=null,$=null,fe.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:It,bindFramebuffer:Bt,drawBuffers:Xt,useProgram:xe,setBlending:N,setMaterial:en,setFlipSided:Yt,setCullFace:$t,setLineWidth:At,setPolygonOffset:ge,setScissorTest:Ct,activeTexture:R,bindTexture:S,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:xt,texImage3D:Dt,updateUBOMapping:Zt,uniformBlockBinding:Ht,texStorage2D:Jt,texStorage3D:st,texSubImage2D:j,texSubImage3D:wt,compressedTexSubImage2D:ft,compressedTexSubImage3D:_t,scissor:Ut,viewport:yt,reset:me}}function eg(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):or("canvas")}function _(R,S,H){let K=1;const et=Ct(R);if((et.width>H||et.height>H)&&(K=H/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(K*et.width),wt=Math.floor(K*et.height);u===void 0&&(u=g(j,wt));const ft=S?g(j,wt):u;return ft.width=j,ft.height=wt,ft.getContext("2d").drawImage(R,0,0,j,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+wt+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(R,S,H,K,et=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=S;if(S===s.RED&&(H===s.FLOAT&&(j=s.R32F),H===s.HALF_FLOAT&&(j=s.R16F),H===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.R8UI),H===s.UNSIGNED_SHORT&&(j=s.R16UI),H===s.UNSIGNED_INT&&(j=s.R32UI),H===s.BYTE&&(j=s.R8I),H===s.SHORT&&(j=s.R16I),H===s.INT&&(j=s.R32I)),S===s.RG&&(H===s.FLOAT&&(j=s.RG32F),H===s.HALF_FLOAT&&(j=s.RG16F),H===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RG8UI),H===s.UNSIGNED_SHORT&&(j=s.RG16UI),H===s.UNSIGNED_INT&&(j=s.RG32UI),H===s.BYTE&&(j=s.RG8I),H===s.SHORT&&(j=s.RG16I),H===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGB8UI),H===s.UNSIGNED_SHORT&&(j=s.RGB16UI),H===s.UNSIGNED_INT&&(j=s.RGB32UI),H===s.BYTE&&(j=s.RGB8I),H===s.SHORT&&(j=s.RGB16I),H===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),H===s.UNSIGNED_INT&&(j=s.RGBA32UI),H===s.BYTE&&(j=s.RGBA8I),H===s.SHORT&&(j=s.RGBA16I),H===s.INT&&(j=s.RGBA32I)),S===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){const wt=et?rr:te.getTransfer(K);H===s.FLOAT&&(j=s.RGBA32F),H===s.HALF_FLOAT&&(j=s.RGBA16F),H===s.UNSIGNED_BYTE&&(j=wt===he?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(R,S){let H;return R?S===null||S===mi||S===Xi?H=s.DEPTH24_STENCIL8:S===Un?H=s.DEPTH32F_STENCIL8:S===_s&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===mi||S===Xi?H=s.DEPTH_COMPONENT24:S===Un?H=s.DEPTH_COMPONENT32F:S===_s&&(H=s.DEPTH_COMPONENT16),H}function C(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==wn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),I(S),S.isVideoTexture&&h.delete(S)}function P(R){const S=R.target;S.removeEventListener("dispose",P),w(S)}function I(R){const S=n.get(R);if(S.__webglInit===void 0)return;const H=R.source,K=d.get(H);if(K){const et=K[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(R),Object.keys(K).length===0&&d.delete(H)}n.remove(R)}function M(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const H=R.source,K=d.get(H);delete K[S.__cacheKey],a.memory.textures--}function w(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let et=0;et<S.__webglFramebuffer[K].length;et++)s.deleteFramebuffer(S.__webglFramebuffer[K][et]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=R.textures;for(let K=0,et=H.length;K<et;K++){const j=n.get(H[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(H[K])}n.remove(R)}let U=0;function X(){U=0}function V(){const R=U;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),U+=1,R}function $(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function tt(R,S){const H=n.get(R);if(R.isVideoTexture&&At(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,R,S);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function Z(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){J(H,R,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function nt(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){J(H,R,S);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function Y(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){rt(H,R,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}const ut={[bn]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[Ca]:s.MIRRORED_REPEAT},vt={[_n]:s.NEAREST,[ru]:s.NEAREST_MIPMAP_NEAREST,[Es]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[Cr]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},Tt={[cu]:s.NEVER,[mu]:s.ALWAYS,[hu]:s.LESS,[Oc]:s.LEQUAL,[uu]:s.EQUAL,[pu]:s.GEQUAL,[du]:s.GREATER,[fu]:s.NOTEQUAL};function Wt(R,S){if(S.type===Un&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===wn||S.magFilter===Cr||S.magFilter===Es||S.magFilter===di||S.minFilter===wn||S.minFilter===Cr||S.minFilter===Es||S.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ut[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ut[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ut[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,vt[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,vt[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Tt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_n||S.minFilter!==Es&&S.minFilter!==di||S.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function fe(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const K=S.source;let et=d.get(K);et===void 0&&(et={},d.set(K,et));const j=$(S);if(j!==R.__cacheKey){et[j]===void 0&&(et[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[j].usedTimes++;const wt=et[R.__cacheKey];wt!==void 0&&(et[R.__cacheKey].usedTimes--,wt.usedTimes===0&&M(S)),R.__cacheKey=j,R.__webglTexture=et[j].texture}return H}function J(R,S,H){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);const et=fe(R,S),j=S.source;e.bindTexture(K,R.__webglTexture,s.TEXTURE0+H);const wt=n.get(j);if(j.version!==wt.__version||et===!0){e.activeTexture(s.TEXTURE0+H);const ft=te.getPrimaries(te.workingColorSpace),_t=S.colorSpace===$n?null:te.getPrimaries(S.colorSpace),Jt=S.colorSpace===$n||ft===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let st=_(S.image,!1,i.maxTextureSize);st=ge(S,st);const xt=r.convert(S.format,S.colorSpace),Dt=r.convert(S.type);let Ut=x(S.internalFormat,xt,Dt,S.colorSpace,S.isVideoTexture);Wt(K,S);let yt;const Zt=S.mipmaps,Ht=S.isVideoTexture!==!0,me=wt.__version===void 0||et===!0,k=j.dataReady,ct=C(S,st);if(S.isDepthTexture)Ut=y(S.format===qi,S.type),me&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Dt,null));else if(S.isDataTexture)if(Zt.length>0){Ht&&me&&e.texStorage2D(s.TEXTURE_2D,ct,Ut,Zt[0].width,Zt[0].height);for(let q=0,Q=Zt.length;q<Q;q++)yt=Zt[q],Ht?k&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,yt.width,yt.height,xt,Dt,yt.data):e.texImage2D(s.TEXTURE_2D,q,Ut,yt.width,yt.height,0,xt,Dt,yt.data);S.generateMipmaps=!1}else Ht?(me&&e.texStorage2D(s.TEXTURE_2D,ct,Ut,st.width,st.height),k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,xt,Dt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Dt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Ut,Zt[0].width,Zt[0].height,st.depth);for(let q=0,Q=Zt.length;q<Q;q++)if(yt=Zt[q],S.format!==gn)if(xt!==null)if(Ht){if(k)if(S.layerUpdates.size>0){const mt=dl(yt.width,yt.height,S.format,S.type);for(const pt of S.layerUpdates){const zt=yt.data.subarray(pt*mt/yt.data.BYTES_PER_ELEMENT,(pt+1)*mt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,pt,yt.width,yt.height,1,xt,zt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,st.depth,xt,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ut,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,st.depth,xt,Dt,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Ut,yt.width,yt.height,st.depth,0,xt,Dt,yt.data)}else{Ht&&me&&e.texStorage2D(s.TEXTURE_2D,ct,Ut,Zt[0].width,Zt[0].height);for(let q=0,Q=Zt.length;q<Q;q++)yt=Zt[q],S.format!==gn?xt!==null?Ht?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Ut,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?k&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,yt.width,yt.height,xt,Dt,yt.data):e.texImage2D(s.TEXTURE_2D,q,Ut,yt.width,yt.height,0,xt,Dt,yt.data)}else if(S.isDataArrayTexture)if(Ht){if(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Ut,st.width,st.height,st.depth),k)if(S.layerUpdates.size>0){const q=dl(st.width,st.height,S.format,S.type);for(const Q of S.layerUpdates){const mt=st.data.subarray(Q*q/st.data.BYTES_PER_ELEMENT,(Q+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,xt,Dt,mt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Dt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,xt,Dt,st.data);else if(S.isData3DTexture)Ht?(me&&e.texStorage3D(s.TEXTURE_3D,ct,Ut,st.width,st.height,st.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Dt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,xt,Dt,st.data);else if(S.isFramebufferTexture){if(me)if(Ht)e.texStorage2D(s.TEXTURE_2D,ct,Ut,st.width,st.height);else{let q=st.width,Q=st.height;for(let mt=0;mt<ct;mt++)e.texImage2D(s.TEXTURE_2D,mt,Ut,q,Q,0,xt,Dt,null),q>>=1,Q>>=1}}else if(Zt.length>0){if(Ht&&me){const q=Ct(Zt[0]);e.texStorage2D(s.TEXTURE_2D,ct,Ut,q.width,q.height)}for(let q=0,Q=Zt.length;q<Q;q++)yt=Zt[q],Ht?k&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,xt,Dt,yt):e.texImage2D(s.TEXTURE_2D,q,Ut,xt,Dt,yt);S.generateMipmaps=!1}else if(Ht){if(me){const q=Ct(st);e.texStorage2D(s.TEXTURE_2D,ct,Ut,q.width,q.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Dt,st)}else e.texImage2D(s.TEXTURE_2D,0,Ut,xt,Dt,st);m(S)&&p(K),wt.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function rt(R,S,H){if(S.image.length!==6)return;const K=fe(R,S),et=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);const j=n.get(et);if(et.version!==j.__version||K===!0){e.activeTexture(s.TEXTURE0+H);const wt=te.getPrimaries(te.workingColorSpace),ft=S.colorSpace===$n?null:te.getPrimaries(S.colorSpace),_t=S.colorSpace===$n||wt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Jt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!Jt&&!st?xt[Q]=_(S.image[Q],!0,i.maxCubemapSize):xt[Q]=st?S.image[Q].image:S.image[Q],xt[Q]=ge(S,xt[Q]);const Dt=xt[0],Ut=r.convert(S.format,S.colorSpace),yt=r.convert(S.type),Zt=x(S.internalFormat,Ut,yt,S.colorSpace),Ht=S.isVideoTexture!==!0,me=j.__version===void 0||K===!0,k=et.dataReady;let ct=C(S,Dt);Wt(s.TEXTURE_CUBE_MAP,S);let q;if(Jt){Ht&&me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Zt,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){q=xt[Q].mipmaps;for(let mt=0;mt<q.length;mt++){const pt=q[mt];S.format!==gn?Ut!==null?Ht?k&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,pt.width,pt.height,Ut,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Zt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,pt.width,pt.height,Ut,yt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Zt,pt.width,pt.height,0,Ut,yt,pt.data)}}}else{if(q=S.mipmaps,Ht&&me){q.length>0&&ct++;const Q=Ct(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Zt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Ht?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Ut,yt,xt[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,xt[Q].width,xt[Q].height,0,Ut,yt,xt[Q].data);for(let mt=0;mt<q.length;mt++){const zt=q[mt].image[Q].image;Ht?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,zt.width,zt.height,Ut,yt,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Zt,zt.width,zt.height,0,Ut,yt,zt.data)}}else{Ht?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ut,yt,xt[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,Ut,yt,xt[Q]);for(let mt=0;mt<q.length;mt++){const pt=q[mt];Ht?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Ut,yt,pt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Zt,Ut,yt,pt.image[Q])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=et.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function St(R,S,H,K,et,j){const wt=r.convert(H.format,H.colorSpace),ft=r.convert(H.type),_t=x(H.internalFormat,wt,ft,H.colorSpace),Jt=n.get(S),st=n.get(H);if(st.__renderTarget=S,!Jt.__hasExternalTextures){const xt=Math.max(1,S.width>>j),Dt=Math.max(1,S.height>>j);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,j,_t,xt,Dt,S.depth,0,wt,ft,null):e.texImage2D(et,j,_t,xt,Dt,0,wt,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),$t(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,et,st.__webglTexture,0,Yt(S)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,et,st.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(R,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const K=S.depthTexture,et=K&&K.isDepthTexture?K.type:null,j=y(S.stencilBuffer,et),wt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=Yt(S);$t(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,j,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,R)}else{const K=S.textures;for(let et=0;et<K.length;et++){const j=K[et],wt=r.convert(j.format,j.colorSpace),ft=r.convert(j.type),_t=x(j.internalFormat,wt,ft,j.colorSpace),Jt=Yt(S);H&&$t(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,_t,S.width,S.height):$t(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,_t,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_t,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),tt(S.depthTexture,0);const et=K.__webglTexture,j=Yt(S);if(S.depthTexture.format===zi)$t(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(S.depthTexture.format===qi)$t(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Bt(R){const S=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=K}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");It(S.__webglFramebuffer,R)}else if(H){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),dt(S.__webglDepthbuffer[K],R,!1);else{const et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),dt(S.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(R,S,H){const K=n.get(R);S!==void 0&&St(K.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Bt(R)}function xe(R){const S=R.texture,H=n.get(R),K=n.get(S);R.addEventListener("dispose",P);const et=R.textures,j=R.isWebGLCubeRenderTarget===!0,wt=et.length>1;if(wt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,a.memory.textures++),j){H.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ft]=[];for(let _t=0;_t<S.mipmaps.length;_t++)H.__webglFramebuffer[ft][_t]=s.createFramebuffer()}else H.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)H.__webglFramebuffer[ft]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ft=0,_t=et.length;ft<_t;ft++){const Jt=n.get(et[ft]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&$t(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const _t=et[ft];H.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[ft]);const Jt=r.convert(_t.format,_t.colorSpace),st=r.convert(_t.type),xt=x(_t.internalFormat,Jt,st,_t.colorSpace,R.isXRRenderTarget===!0),Dt=Yt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,xt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,H.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)St(H.__webglFramebuffer[ft][_t],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,_t);else St(H.__webglFramebuffer[ft],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ft=0,_t=et.length;ft<_t;ft++){const Jt=et[ft],st=n.get(Jt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Wt(s.TEXTURE_2D,Jt),St(H.__webglFramebuffer,R,Jt,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),m(Jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,K.__webglTexture),Wt(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)St(H.__webglFramebuffer[_t],R,S,s.COLOR_ATTACHMENT0,ft,_t);else St(H.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,ft,0);m(S)&&p(ft),e.unbindTexture()}R.depthBuffer&&Bt(R)}function jt(R){const S=R.textures;for(let H=0,K=S.length;H<K;H++){const et=S[H];if(m(et)){const j=b(R),wt=n.get(et).__webglTexture;e.bindTexture(j,wt),p(j),e.unbindTexture()}}}const we=[],N=[];function en(R){if(R.samples>0){if($t(R)===!1){const S=R.textures,H=R.width,K=R.height;let et=s.COLOR_BUFFER_BIT;const j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(R),ft=S.length>1;if(ft)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const Jt=n.get(S[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,H,K,0,0,H,K,et,s.NEAREST),l===!0&&(we.length=0,N.length=0,we.push(s.COLOR_ATTACHMENT0+_t),R.depthBuffer&&R.resolveDepthBuffer===!1&&(we.push(j),N.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const Jt=n.get(S[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Yt(R){return Math.min(i.maxSamples,R.samples)}function $t(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ge(R,S){const H=R.colorSpace,K=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Yi&&H!==$n&&(te.getTransfer(H)===he?(K!==gn||et!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=tt,this.setTexture2DArray=Z,this.setTexture3D=nt,this.setTextureCube=Y,this.rebindTextures=Xt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=$t}function ng(s,t){function e(n,i=$n){let r;const a=te.getTransfer(i);if(n===Hn)return s.UNSIGNED_BYTE;if(n===oo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return s.BYTE;if(n===Pc)return s.SHORT;if(n===_s)return s.UNSIGNED_SHORT;if(n===ao)return s.INT;if(n===mi)return s.UNSIGNED_INT;if(n===Un)return s.FLOAT;if(n===Bn)return s.HALF_FLOAT;if(n===Dc)return s.ALPHA;if(n===Lc)return s.RGB;if(n===gn)return s.RGBA;if(n===Ic)return s.LUMINANCE;if(n===Uc)return s.LUMINANCE_ALPHA;if(n===zi)return s.DEPTH_COMPONENT;if(n===qi)return s.DEPTH_STENCIL;if(n===Nc)return s.RED;if(n===co)return s.RED_INTEGER;if(n===kc)return s.RG;if(n===ho)return s.RG_INTEGER;if(n===uo)return s.RGBA_INTEGER;if(n===Ks||n===Qs||n===tr||n===er)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Pa||n===Fa||n===Da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Ia||n===Ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Ia)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===ka||n===Ba||n===za||n===Oa||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nr||n===ja||n===Ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nr)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===Ka||n===Qa||n===to)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const ig={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new We,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:sg,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new ce(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class og extends ji{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new ag,m=e.getContextAttributes();let p=null,b=null;const x=[],y=[],C=new at;let T=null;const P=new Ye;P.viewport=new de;const I=new Ye;I.viewport=new de;const M=[P,I],w=new Td;let U=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let rt=x[J];return rt===void 0&&(rt=new oa,x[J]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(J){let rt=x[J];return rt===void 0&&(rt=new oa,x[J]=rt),rt.getGripSpace()},this.getHand=function(J){let rt=x[J];return rt===void 0&&(rt=new oa,x[J]=rt),rt.getHandSpace()};function V(J){const rt=y.indexOf(J.inputSource);if(rt===-1)return;const St=x[rt];St!==void 0&&(St.update(J.inputSource,J.frame,c||a),St.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",tt);for(let J=0;J<x.length;J++){const rt=y[J];rt!==null&&(y[J]=null,x[J].disconnect(rt))}U=null,X=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,b=null,fe.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",$),i.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new xn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,St=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?qi:zi,St=m.stencil?Xi:mi);const It={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(It),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new xn(d.textureWidth,d.textureHeight,{format:gn,type:Hn,depthTexture:new Qc(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function tt(J){for(let rt=0;rt<J.removed.length;rt++){const St=J.removed[rt],dt=y.indexOf(St);dt>=0&&(y[dt]=null,x[dt].disconnect(St))}for(let rt=0;rt<J.added.length;rt++){const St=J.added[rt];let dt=y.indexOf(St);if(dt===-1){for(let Bt=0;Bt<x.length;Bt++)if(Bt>=y.length){y.push(St),dt=Bt;break}else if(y[Bt]===null){y[Bt]=St,dt=Bt;break}if(dt===-1)break}const It=x[dt];It&&It.connect(St)}}const Z=new D,nt=new D;function Y(J,rt,St){Z.setFromMatrixPosition(rt.matrixWorld),nt.setFromMatrixPosition(St.matrixWorld);const dt=Z.distanceTo(nt),It=rt.projectionMatrix.elements,Bt=St.projectionMatrix.elements,Xt=It[14]/(It[10]-1),xe=It[14]/(It[10]+1),jt=(It[9]+1)/It[5],we=(It[9]-1)/It[5],N=(It[8]-1)/It[0],en=(Bt[8]+1)/Bt[0],Yt=Xt*N,$t=Xt*en,At=dt/(-N+en),ge=At*-N;if(rt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ge),J.translateZ(At),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),It[10]===-1)J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Ct=Xt+At,R=xe+At,S=Yt-ge,H=$t+(dt-ge),K=jt*xe/R*Ct,et=we*xe/R*Ct;J.projectionMatrix.makePerspective(S,H,K,et,Ct,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ut(J,rt){rt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(rt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let rt=J.near,St=J.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(St=_.depthFar)),w.near=I.near=P.near=rt,w.far=I.far=P.far=St,(U!==w.near||X!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),U=w.near,X=w.far),P.layers.mask=J.layers.mask|2,I.layers.mask=J.layers.mask|4,w.layers.mask=P.layers.mask|I.layers.mask;const dt=J.parent,It=w.cameras;ut(w,dt);for(let Bt=0;Bt<It.length;Bt++)ut(It[Bt],dt);It.length===2?Y(w,P,I):w.projectionMatrix.copy(P.projectionMatrix),vt(J,w,dt)};function vt(J,rt,St){St===null?J.matrix.copy(rt.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(rt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let Tt=null;function Wt(J,rt){if(h=rt.getViewerPose(c||a),g=rt,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let dt=!1;St.length!==w.cameras.length&&(w.cameras.length=0,dt=!0);for(let Bt=0;Bt<St.length;Bt++){const Xt=St[Bt];let xe=null;if(f!==null)xe=f.getViewport(Xt);else{const we=u.getViewSubImage(d,Xt);xe=we.viewport,Bt===0&&(t.setRenderTargetTextures(b,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(b))}let jt=M[Bt];jt===void 0&&(jt=new Ye,jt.layers.enable(Bt),jt.viewport=new de,M[Bt]=jt),jt.matrix.fromArray(Xt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Xt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(xe.x,xe.y,xe.width,xe.height),Bt===0&&(w.matrix.copy(jt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),dt===!0&&w.cameras.push(jt)}const It=i.enabledFeatures;if(It&&It.includes("depth-sensing")){const Bt=u.getDepthInformation(St[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,i.renderState)}}for(let St=0;St<x.length;St++){const dt=y[St],It=x[St];dt!==null&&It!==void 0&&It.update(dt,rt,c||a)}Tt&&Tt(J,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const fe=new ah;fe.setAnimationLoop(Wt),this.setAnimationLoop=function(J){Tt=J},this.dispose=function(){}}}const ai=new En,lg=new ve;function cg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$c(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),x=b.envMap,y=b.envMapRotation;x&&(m.envMap.value=x,ai.copy(y),ai.x*=-1,ai.y*=-1,ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(ai)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hg(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const y=x.program;n.uniformBlockBinding(b,y)}function c(b,x){let y=i[b.id];y===void 0&&(g(b),y=h(b),i[b.id]=y,b.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(b,C);const T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){const x=u();b.__bindingPointIndex=x;const y=s.createBuffer(),C=b.__size,T=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],y=b.uniforms,C=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,P=y.length;T<P;T++){const I=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,w=I.length;M<w;M++){const U=I[M];if(f(U,T,M,C)===!0){const X=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let $=0;for(let tt=0;tt<V.length;tt++){const Z=V[tt],nt=_(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,X+$,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,$),$+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,x,y,C){const T=b.value,P=x+"_"+y;if(C[P]===void 0)return typeof T=="number"||typeof T=="boolean"?C[P]=T:C[P]=T.clone(),!0;{const I=C[P];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[P]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(b){const x=b.uniforms;let y=0;const C=16;for(let P=0,I=x.length;P<I;P++){const M=Array.isArray(x[P])?x[P]:[x[P]];for(let w=0,U=M.length;w<U;w++){const X=M[w],V=Array.isArray(X.value)?X.value:[X.value];for(let $=0,tt=V.length;$<tt;$++){const Z=V[$],nt=_(Z),Y=y%C,ut=Y%nt.boundary,vt=Y+ut;y+=ut,vt!==0&&C-vt<nt.storage&&(y+=C-vt),X.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=nt.storage}}}const T=y%C;return T>0&&(y+=C-T),b.__size=y,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class uh{constructor(t={}){const{canvas:e=Du(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this.toneMapping=jn,this.toneMappingExposure=1;const y=this;let C=!1,T=0,P=0,I=null,M=-1,w=null;const U=new de,X=new de;let V=null;const $=new bt(0);let tt=0,Z=e.width,nt=e.height,Y=1,ut=null,vt=null;const Tt=new de(0,0,Z,nt),Wt=new de(0,0,Z,nt);let fe=!1;const J=new go;let rt=!1,St=!1;const dt=new ve,It=new ve,Bt=new D,Xt=new de,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function we(){return I===null?Y:1}let N=n;function en(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ro}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),N===null){const B="webgl2";if(N=en(B,E),N===null)throw en(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Yt,$t,At,ge,Ct,R,S,H,K,et,j,wt,ft,_t,Jt,st,xt,Dt,Ut,yt,Zt,Ht,me,k;function ct(){Yt=new yp(N),Yt.init(),Ht=new ng(N,Yt),$t=new pp(N,Yt,t,Ht),At=new tg(N,Yt),$t.reverseDepthBuffer&&d&&At.buffers.depth.setReversed(!0),ge=new Sp(N),Ct=new Hm,R=new eg(N,Yt,At,Ct,$t,Ht,ge),S=new gp(y),H=new xp(y),K=new Rd(N),me=new dp(N,K),et=new Mp(N,K,ge,me),j=new Ep(N,et,K,ge),Ut=new wp(N,$t,R),st=new mp(Ct),wt=new Om(y,S,H,Yt,$t,me,st),ft=new cg(y,Ct),_t=new Vm,Jt=new Zm(Yt),Dt=new up(y,S,H,At,j,f,l),xt=new Km(y,j,$t),k=new hg(N,ge,$t,At),yt=new fp(N,Yt,ge),Zt=new bp(N,Yt,ge),ge.programs=wt.programs,y.capabilities=$t,y.extensions=Yt,y.properties=Ct,y.renderLists=_t,y.shadowMap=xt,y.state=At,y.info=ge}ct();const q=new og(y,N);this.xr=q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(Z,nt,!1))},this.getSize=function(E){return E.set(Z,nt)},this.setSize=function(E,B,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,nt=B,e.width=Math.floor(E*Y),e.height=Math.floor(B*Y),G===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Z*Y,nt*Y).floor()},this.setDrawingBufferSize=function(E,B,G){Z=E,nt=B,Y=G,e.width=Math.floor(E*G),e.height=Math.floor(B*G),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,B,G,W){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,B,G,W),At.viewport(U.copy(Tt).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(Wt)},this.setScissor=function(E,B,G,W){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,B,G,W),At.scissor(X.copy(Wt).multiplyScalar(Y).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){At.setScissorTest(fe=E)},this.setOpaqueSort=function(E){ut=E},this.setTransparentSort=function(E){vt=E},this.getClearColor=function(E){return E.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(E=!0,B=!0,G=!0){let W=0;if(E){let z=!1;if(I!==null){const it=I.texture.format;z=it===uo||it===ho||it===co}if(z){const it=I.texture.type,ht=it===Hn||it===mi||it===_s||it===Xi||it===oo||it===lo,gt=Dt.getClearColor(),Mt=Dt.getClearAlpha(),Nt=gt.r,kt=gt.g,Pt=gt.b;ht?(g[0]=Nt,g[1]=kt,g[2]=Pt,g[3]=Mt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Nt,_[1]=kt,_[2]=Pt,_[3]=Mt,N.clearBufferiv(N.COLOR,0,_))}else W|=N.COLOR_BUFFER_BIT}B&&(W|=N.DEPTH_BUFFER_BIT),G&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Dt.dispose(),_t.dispose(),Jt.dispose(),Ct.dispose(),S.dispose(),H.dispose(),j.dispose(),me.dispose(),k.dispose(),wt.dispose(),q.dispose(),q.removeEventListener("sessionstart",To),q.removeEventListener("sessionend",Ao),Qn.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=ge.autoReset,B=xt.enabled,G=xt.autoUpdate,W=xt.needsUpdate,z=xt.type;ct(),ge.autoReset=E,xt.enabled=B,xt.autoUpdate=G,xt.needsUpdate=W,xt.type=z}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zt(E){const B=E.target;B.removeEventListener("dispose",zt),be(B)}function be(E){Ue(E),Ct.remove(E)}function Ue(E){const B=Ct.get(E).programs;B!==void 0&&(B.forEach(function(G){wt.releaseProgram(G)}),E.isShaderMaterial&&wt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,G,W,z,it){B===null&&(B=xe);const ht=z.isMesh&&z.matrixWorld.determinant()<0,gt=Mh(E,B,G,W,z);At.setMaterial(W,ht);let Mt=G.index,Nt=1;if(W.wireframe===!0){if(Mt=et.getWireframeAttribute(G),Mt===void 0)return;Nt=2}const kt=G.drawRange,Pt=G.attributes.position;let Kt=kt.start*Nt,ne=(kt.start+kt.count)*Nt;it!==null&&(Kt=Math.max(Kt,it.start*Nt),ne=Math.min(ne,(it.start+it.count)*Nt)),Mt!==null?(Kt=Math.max(Kt,0),ne=Math.min(ne,Mt.count)):Pt!=null&&(Kt=Math.max(Kt,0),ne=Math.min(ne,Pt.count));const Ee=ne-Kt;if(Ee<0||Ee===1/0)return;me.setup(z,W,gt,G,Mt);let Se,Qt=yt;if(Mt!==null&&(Se=K.get(Mt),Qt=Zt,Qt.setIndex(Se)),z.isMesh)W.wireframe===!0?(At.setLineWidth(W.wireframeLinewidth*we()),Qt.setMode(N.LINES)):Qt.setMode(N.TRIANGLES);else if(z.isLine){let Ft=W.linewidth;Ft===void 0&&(Ft=1),At.setLineWidth(Ft*we()),z.isLineSegments?Qt.setMode(N.LINES):z.isLineLoop?Qt.setMode(N.LINE_LOOP):Qt.setMode(N.LINE_STRIP)}else z.isPoints?Qt.setMode(N.POINTS):z.isSprite&&Qt.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ft=z._multiDrawStarts,Le=z._multiDrawCounts,ie=z._multiDrawCount,un=Mt?K.get(Mt).bytesPerElement:1,gi=Ct.get(W).currentProgram.getUniforms();for(let je=0;je<ie;je++)gi.setValue(N,"_gl_DrawID",je),Qt.render(Ft[je]/un,Le[je])}else if(z.isInstancedMesh)Qt.renderInstances(Kt,Ee,z.count);else if(G.isInstancedBufferGeometry){const Ft=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Le=Math.min(G.instanceCount,Ft);Qt.renderInstances(Kt,Ee,Le)}else Qt.render(Kt,Ee)};function oe(E,B,G){E.transparent===!0&&E.side===se&&E.forceSinglePass===!1?(E.side=$e,E.needsUpdate=!0,ws(E,B,G),E.side=Kn,E.needsUpdate=!0,ws(E,B,G),E.side=se):ws(E,B,G)}this.compile=function(E,B,G=null){G===null&&(G=E),p=Jt.get(G),p.init(B),x.push(p),G.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const W=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const it=z.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const gt=it[ht];oe(gt,G,z),W.add(gt)}else oe(it,G,z),W.add(it)}),x.pop(),p=null,W},this.compileAsync=function(E,B,G=null){const W=this.compile(E,B,G);return new Promise(z=>{function it(){if(W.forEach(function(ht){Ct.get(ht).currentProgram.isReady()&&W.delete(ht)}),W.size===0){z(E);return}setTimeout(it,10)}Yt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let hn=null;function An(E){hn&&hn(E)}function To(){Qn.stop()}function Ao(){Qn.start()}const Qn=new ah;Qn.setAnimationLoop(An),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(E){hn=E,q.setAnimationLoop(E),E===null?Qn.stop():Qn.start()},q.addEventListener("sessionstart",To),q.addEventListener("sessionend",Ao),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,B,I),p=Jt.get(E,x.length),p.init(B),x.push(p),It.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(It),St=this.localClippingEnabled,rt=st.init(this.clippingPlanes,St),m=_t.get(E,b.length),m.init(),b.push(m),q.enabled===!0&&q.isPresenting===!0){const it=y.xr.getDepthSensingMesh();it!==null&&Er(it,B,-1/0,y.sortObjects)}Er(E,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ut,vt),jt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,jt&&Dt.addToRenderList(m,E),this.info.render.frame++,rt===!0&&st.beginShadows();const G=p.state.shadowsArray;xt.render(G,E,B),rt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const it=B.cameras;if(z.length>0)for(let ht=0,gt=it.length;ht<gt;ht++){const Mt=it[ht];Ro(W,z,E,Mt)}jt&&Dt.render(E);for(let ht=0,gt=it.length;ht<gt;ht++){const Mt=it[ht];Co(m,E,Mt,Mt.viewport)}}else z.length>0&&Ro(W,z,E,B),jt&&Dt.render(E),Co(m,E,B);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(y,E,B),me.resetDefaultState(),M=-1,w=null,x.pop(),x.length>0?(p=x[x.length-1],rt===!0&&st.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Er(E,B,G,W){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){W&&Xt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);const ht=j.update(E),gt=E.material;gt.visible&&m.push(E,ht,gt,G,Xt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){const ht=j.update(E),gt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xt.copy(E.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Xt.copy(ht.boundingSphere.center)),Xt.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray(gt)){const Mt=ht.groups;for(let Nt=0,kt=Mt.length;Nt<kt;Nt++){const Pt=Mt[Nt],Kt=gt[Pt.materialIndex];Kt&&Kt.visible&&m.push(E,ht,Kt,G,Xt.z,Pt)}}else gt.visible&&m.push(E,ht,gt,G,Xt.z,null)}}const it=E.children;for(let ht=0,gt=it.length;ht<gt;ht++)Er(it[ht],B,G,W)}function Co(E,B,G,W){const z=E.opaque,it=E.transmissive,ht=E.transparent;p.setupLightsView(G),rt===!0&&st.setGlobalState(y.clippingPlanes,G),W&&At.viewport(U.copy(W)),z.length>0&&Ss(z,B,G),it.length>0&&Ss(it,B,G),ht.length>0&&Ss(ht,B,G),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Ro(E,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new xn(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Bn:Hn,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const it=p.state.transmissionRenderTarget[W.id],ht=W.viewport||U;it.setSize(ht.z,ht.w);const gt=y.getRenderTarget();y.setRenderTarget(it),y.getClearColor($),tt=y.getClearAlpha(),tt<1&&y.setClearColor(16777215,.5),y.clear(),jt&&Dt.render(G);const Mt=y.toneMapping;y.toneMapping=jn;const Nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),rt===!0&&st.setGlobalState(y.clippingPlanes,W),Ss(E,G,W),R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Pt=0,Kt=B.length;Pt<Kt;Pt++){const ne=B[Pt],Ee=ne.object,Se=ne.geometry,Qt=ne.material,Ft=ne.group;if(Qt.side===se&&Ee.layers.test(W.layers)){const Le=Qt.side;Qt.side=$e,Qt.needsUpdate=!0,Po(Ee,G,W,Se,Qt,Ft),Qt.side=Le,Qt.needsUpdate=!0,kt=!0}}kt===!0&&(R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it))}y.setRenderTarget(gt),y.setClearColor($,tt),Nt!==void 0&&(W.viewport=Nt),y.toneMapping=Mt}function Ss(E,B,G){const W=B.isScene===!0?B.overrideMaterial:null;for(let z=0,it=E.length;z<it;z++){const ht=E[z],gt=ht.object,Mt=ht.geometry,Nt=W===null?ht.material:W,kt=ht.group;gt.layers.test(G.layers)&&Po(gt,B,G,Mt,Nt,kt)}}function Po(E,B,G,W,z,it){E.onBeforeRender(y,B,G,W,z,it),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(y,B,G,W,E,it),z.transparent===!0&&z.side===se&&z.forceSinglePass===!1?(z.side=$e,z.needsUpdate=!0,y.renderBufferDirect(G,B,W,z,E,it),z.side=Kn,z.needsUpdate=!0,y.renderBufferDirect(G,B,W,z,E,it),z.side=se):y.renderBufferDirect(G,B,W,z,E,it),E.onAfterRender(y,B,G,W,z,it)}function ws(E,B,G){B.isScene!==!0&&(B=xe);const W=Ct.get(E),z=p.state.lights,it=p.state.shadowsArray,ht=z.state.version,gt=wt.getParameters(E,z.state,it,B,G),Mt=wt.getProgramCacheKey(gt);let Nt=W.programs;W.environment=E.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(E.isMeshStandardMaterial?H:S).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",zt),Nt=new Map,W.programs=Nt);let kt=Nt.get(Mt);if(kt!==void 0){if(W.currentProgram===kt&&W.lightsStateVersion===ht)return Do(E,gt),kt}else gt.uniforms=wt.getUniforms(E),E.onBeforeCompile(gt,y),kt=wt.acquireProgram(gt,Mt),Nt.set(Mt,kt),W.uniforms=gt.uniforms;const Pt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=st.uniform),Do(E,gt),W.needsLights=Sh(E),W.lightsStateVersion=ht,W.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.directionalShadowMap.value=z.state.directionalShadowMap,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotShadowMap.value=z.state.spotShadowMap,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMap.value=z.state.pointShadowMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=kt,W.uniformsList=null,kt}function Fo(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=ir.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Do(E,B){const G=Ct.get(E);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Mh(E,B,G,W,z){B.isScene!==!0&&(B=xe),R.resetTextureUnits();const it=B.fog,ht=W.isMeshStandardMaterial?B.environment:null,gt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Yi,Mt=(W.isMeshStandardMaterial?H:S).get(W.envMap||ht),Nt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,kt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pt=!!G.morphAttributes.position,Kt=!!G.morphAttributes.normal,ne=!!G.morphAttributes.color;let Ee=jn;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ee=y.toneMapping);const Se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=Se!==void 0?Se.length:0,Ft=Ct.get(W),Le=p.state.lights;if(rt===!0&&(St===!0||E!==w)){const Oe=E===w&&W.id===M;st.setState(W,E,Oe)}let ie=!1;W.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Le.state.version||Ft.outputColorSpace!==gt||z.isBatchedMesh&&Ft.batching===!1||!z.isBatchedMesh&&Ft.batching===!0||z.isBatchedMesh&&Ft.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ft.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ft.instancing===!1||!z.isInstancedMesh&&Ft.instancing===!0||z.isSkinnedMesh&&Ft.skinning===!1||!z.isSkinnedMesh&&Ft.skinning===!0||z.isInstancedMesh&&Ft.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ft.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ft.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ft.instancingMorph===!1&&z.morphTexture!==null||Ft.envMap!==Mt||W.fog===!0&&Ft.fog!==it||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==st.numPlanes||Ft.numIntersection!==st.numIntersection)||Ft.vertexAlphas!==Nt||Ft.vertexTangents!==kt||Ft.morphTargets!==Pt||Ft.morphNormals!==Kt||Ft.morphColors!==ne||Ft.toneMapping!==Ee||Ft.morphTargetsCount!==Qt)&&(ie=!0):(ie=!0,Ft.__version=W.version);let un=Ft.currentProgram;ie===!0&&(un=ws(W,B,z));let gi=!1,je=!1,es=!1;const _e=un.getUniforms(),nn=Ft.uniforms;if(At.useProgram(un.program)&&(gi=!0,je=!0,es=!0),W.id!==M&&(M=W.id,je=!0),gi||w!==E){At.buffers.depth.getReversed()?(dt.copy(E.projectionMatrix),Iu(dt),Uu(dt),_e.setValue(N,"projectionMatrix",dt)):_e.setValue(N,"projectionMatrix",E.projectionMatrix),_e.setValue(N,"viewMatrix",E.matrixWorldInverse);const Xe=_e.map.cameraPosition;Xe!==void 0&&Xe.setValue(N,Bt.setFromMatrixPosition(E.matrixWorld)),$t.logarithmicDepthBuffer&&_e.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_e.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,je=!0,es=!0)}if(z.isSkinnedMesh){_e.setOptional(N,z,"bindMatrix"),_e.setOptional(N,z,"bindMatrixInverse");const Oe=z.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),_e.setValue(N,"boneTexture",Oe.boneTexture,R))}z.isBatchedMesh&&(_e.setOptional(N,z,"batchingTexture"),_e.setValue(N,"batchingTexture",z._matricesTexture,R),_e.setOptional(N,z,"batchingIdTexture"),_e.setValue(N,"batchingIdTexture",z._indirectTexture,R),_e.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&_e.setValue(N,"batchingColorTexture",z._colorsTexture,R));const sn=G.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Ut.update(z,G,un),(je||Ft.receiveShadow!==z.receiveShadow)&&(Ft.receiveShadow=z.receiveShadow,_e.setValue(N,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(nn.envMap.value=Mt,nn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(nn.envMapIntensity.value=B.environmentIntensity),je&&(_e.setValue(N,"toneMappingExposure",y.toneMappingExposure),Ft.needsLights&&bh(nn,es),it&&W.fog===!0&&ft.refreshFogUniforms(nn,it),ft.refreshMaterialUniforms(nn,W,Y,nt,p.state.transmissionRenderTarget[E.id]),ir.upload(N,Fo(Ft),nn,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ir.upload(N,Fo(Ft),nn,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_e.setValue(N,"center",z.center),_e.setValue(N,"modelViewMatrix",z.modelViewMatrix),_e.setValue(N,"normalMatrix",z.normalMatrix),_e.setValue(N,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Oe=W.uniformsGroups;for(let Xe=0,Tr=Oe.length;Xe<Tr;Xe++){const ti=Oe[Xe];k.update(ti,un),k.bind(ti,un)}}return un}function bh(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Sh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,B,G){Ct.get(E.texture).__webglTexture=B,Ct.get(E.depthTexture).__webglTexture=G;const W=Ct.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const G=Ct.get(E);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,G=0){I=E,T=B,P=G;let W=!0,z=null,it=!1,ht=!1;if(E){const Mt=Ct.get(E);if(Mt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(Mt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Mt.__hasExternalTextures)R.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pt=E.depthTexture;if(Mt.__boundDepthTexture!==Pt){if(Pt!==null&&Ct.has(Pt)&&(E.width!==Pt.image.width||E.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ht=!0);const kt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(kt[B])?z=kt[B][G]:z=kt[B],it=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?z=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(kt)?z=kt[G]:z=kt,U.copy(E.viewport),X.copy(E.scissor),V=E.scissorTest}else U.copy(Tt).multiplyScalar(Y).floor(),X.copy(Wt).multiplyScalar(Y).floor(),V=fe;if(At.bindFramebuffer(N.FRAMEBUFFER,z)&&W&&At.drawBuffers(E,z),At.viewport(U),At.scissor(X),At.setScissorTest(V),it){const Mt=Ct.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,G)}else if(ht){const Mt=Ct.get(E.texture),Nt=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,G||0,Nt)}M=-1},this.readRenderTargetPixels=function(E,B,G,W,z,it,ht){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){At.bindFramebuffer(N.FRAMEBUFFER,gt);try{const Mt=E.texture,Nt=Mt.format,kt=Mt.type;if(!$t.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-W&&G>=0&&G<=E.height-z&&N.readPixels(B,G,W,z,Ht.convert(Nt),Ht.convert(kt),it)}finally{const Mt=I!==null?Ct.get(I).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(E,B,G,W,z,it,ht){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){const Mt=E.texture,Nt=Mt.format,kt=Mt.type;if(!$t.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-W&&G>=0&&G<=E.height-z){At.bindFramebuffer(N.FRAMEBUFFER,gt);const Pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),N.readPixels(B,G,W,z,Ht.convert(Nt),Ht.convert(kt),0);const Kt=I!==null?Ct.get(I).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,Kt);const ne=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Lu(N,ne,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer(Pt),N.deleteSync(ne),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,G=0){E.isTexture!==!0&&(ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),z=Math.floor(E.image.width*W),it=Math.floor(E.image.height*W),ht=B!==null?B.x:0,gt=B!==null?B.y:0;R.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ht,gt,z,it),At.unbindTexture()};const wh=N.createFramebuffer(),Eh=N.createFramebuffer();this.copyTextureToTexture=function(E,B,G=null,W=null,z=0,it=null){E.isTexture!==!0&&(ki("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],B=arguments[2],it=arguments[3]||0,G=null),it===null&&(z!==0?(ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=z,z=0):it=0);let ht,gt,Mt,Nt,kt,Pt,Kt,ne,Ee;const Se=E.isCompressedTexture?E.mipmaps[it]:E.image;if(G!==null)ht=G.max.x-G.min.x,gt=G.max.y-G.min.y,Mt=G.isBox3?G.max.z-G.min.z:1,Nt=G.min.x,kt=G.min.y,Pt=G.isBox3?G.min.z:0;else{const sn=Math.pow(2,-z);ht=Math.floor(Se.width*sn),gt=Math.floor(Se.height*sn),E.isDataArrayTexture?Mt=Se.depth:E.isData3DTexture?Mt=Math.floor(Se.depth*sn):Mt=1,Nt=0,kt=0,Pt=0}W!==null?(Kt=W.x,ne=W.y,Ee=W.z):(Kt=0,ne=0,Ee=0);const Qt=Ht.convert(B.format),Ft=Ht.convert(B.type);let Le;B.isData3DTexture?(R.setTexture3D(B,0),Le=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),Le=N.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),Le=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const ie=N.getParameter(N.UNPACK_ROW_LENGTH),un=N.getParameter(N.UNPACK_IMAGE_HEIGHT),gi=N.getParameter(N.UNPACK_SKIP_PIXELS),je=N.getParameter(N.UNPACK_SKIP_ROWS),es=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Se.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Se.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Nt),N.pixelStorei(N.UNPACK_SKIP_ROWS,kt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt);const _e=E.isDataArrayTexture||E.isData3DTexture,nn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const sn=Ct.get(E),Oe=Ct.get(B),Xe=Ct.get(sn.__renderTarget),Tr=Ct.get(Oe.__renderTarget);At.bindFramebuffer(N.READ_FRAMEBUFFER,Xe.__webglFramebuffer),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let ti=0;ti<Mt;ti++)_e&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,z,Pt+ti),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(B).__webglTexture,it,Ee+ti)),N.blitFramebuffer(Nt,kt,ht,gt,Kt,ne,ht,gt,N.DEPTH_BUFFER_BIT,N.NEAREST);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Ct.has(E)){const sn=Ct.get(E),Oe=Ct.get(B);At.bindFramebuffer(N.READ_FRAMEBUFFER,wh),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,Eh);for(let Xe=0;Xe<Mt;Xe++)_e?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,sn.__webglTexture,z,Pt+Xe):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,sn.__webglTexture,z),nn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oe.__webglTexture,it,Ee+Xe):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Oe.__webglTexture,it),z!==0?N.blitFramebuffer(Nt,kt,ht,gt,Kt,ne,ht,gt,N.COLOR_BUFFER_BIT,N.NEAREST):nn?N.copyTexSubImage3D(Le,it,Kt,ne,Ee+Xe,Nt,kt,ht,gt):N.copyTexSubImage2D(Le,it,Kt,ne,Nt,kt,ht,gt);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else nn?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Le,it,Kt,ne,Ee,ht,gt,Mt,Qt,Ft,Se.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Le,it,Kt,ne,Ee,ht,gt,Mt,Qt,Se.data):N.texSubImage3D(Le,it,Kt,ne,Ee,ht,gt,Mt,Qt,Ft,Se):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,it,Kt,ne,ht,gt,Qt,Ft,Se.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,it,Kt,ne,Se.width,Se.height,Qt,Se.data):N.texSubImage2D(N.TEXTURE_2D,it,Kt,ne,ht,gt,Qt,Ft,Se);N.pixelStorei(N.UNPACK_ROW_LENGTH,ie),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,un),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gi),N.pixelStorei(N.UNPACK_SKIP_ROWS,je),N.pixelStorei(N.UNPACK_SKIP_IMAGES,es),it===0&&B.generateMipmaps&&N.generateMipmap(Le),At.unbindTexture()},this.copyTextureToTexture3D=function(E,B,G=null,W=null,z=0){return E.isTexture!==!0&&(ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],B=arguments[3],z=arguments[4]||0),ki('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,G,W,z)},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),At.unbindTexture()},this.resetState=function(){T=0,P=0,I=null,At.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const O=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|iPod|Mobile/i.test(typeof navigator<"u"?navigator.userAgent:""),ug=!1,dg=!1,kl=O?.4:.32,fg=O?48:58,pg=O?72:80,mg=O?28:32,Bl=O?256:320,gg=O?.35:.45;function la(){const s=typeof window<"u"?window.devicePixelRatio:1;return O?Math.min(s,1.25):Math.min(s,1.1)}function Jn(s,t,e=fg){return Math.abs(s-t)<=e}function an(s){s.traverse(t=>{t.matrixAutoUpdate=!1,t.updateMatrix()})}function on(s,t,e){const n=new bt(s),i=new bt(t);return n.lerp(i,e).getStyle()}const zl=120;function vg(s){const t=s%zl/zl;return t<.4?0:t<.58?(t-.4)/.18*.28:t<.78?.28+(t-.58)/.2*.52:t<.92?.8+(t-.78)/.14*.2:1-(t-.92)/.08}function sr(s){return s<=.55?0:Math.min(1,(s-.55)/.3)}function Ol(s){return s<=.5?0:Math.min(1,(s-.5)/.38)}function Hl(s){if(s<=.28)return s*.12;if(s<=.55)return .034+(s-.28)*.55;const t=sr(s);return .18+(s-.55)*1.05+t*.35}const Gl=new Map;function _g(s,t){return[s,t.roughness??.65,t.metalness??0,t.emissive??"",t.emissiveIntensity??0,t.transparent?1:0,t.opacity??1].join("|")}function A(s,t={}){const e=_g(s,t);let n=Gl.get(e);return n||(n=new ye({color:s,roughness:.65,...t}),Gl.set(e,n)),n}function v(s,t,e,n=0,i=0,r=0,a=!O){const o=new re(t,e);return o.position.set(n,i,r),o.castShadow=a,o.receiveShadow=!O,O||(o.frustumCulled=!0),s.add(o),o}function Ze(s){s.traverse(t=>{var e;t instanceof re&&t.geometry.dispose(),t instanceof _r&&((e=t.material.map)==null||e.dispose(),t.material.dispose())})}class xg{constructor(t){F(this,"root",new Lt);F(this,"ufos",[]);F(this,"stars",[]);F(this,"warFlashes",[]);F(this,"jets",[]);F(this,"starTimer",0);F(this,"night",0);this.scene=t,this.scene.add(this.root),this.root.name="skyEffects"}build(t,e){this.clear();const n=O?4:5;for(let i=0;i<n;i++){const r=40+e()*(t+80),a=this.makeSkyUfo(e),o=(e()-.5)*55,l=22+e()*16;a.position.set(o,l,r),this.root.add(a),this.ufos.push({group:a,worldZ:r,baseX:o,baseY:l,phase:e()*10,speed:.4+e()*.5})}}makeSkyUfo(t){const e=new Lt;e.userData.isSkyUfo=!0,v(e,new ot(.55,.85,.12,O?8:12),A("#78909C",{metalness:.55,roughness:.35,emissive:"#00E676",emissiveIntensity:.25}),0,0,0),v(e,new tn(.72,.03,6,O?10:14),A("#69F0AE",{emissive:"#00E676",emissiveIntensity:.85}),0,-.04,0),v(e,new Et(.28,8,6,0,Math.PI*2,0,Math.PI/2),A("#80DEEA",{transparent:!0,opacity:.55,emissive:"#00BCD4",emissiveIntensity:.45}),0,.12,0);for(let i=0;i<5;i++){const r=i/5*Math.PI*2;v(e,new L(.06,.06,.06),A(i%2===0?"#FFEB3B":"#FF1744",{emissive:i%2===0?"#FFC107":"#FF1744",emissiveIntensity:.9}),Math.cos(r)*.65,-.02,Math.sin(r)*.65)}const n=v(e,new ot(.02,.35,2.2,8,1,!0),new Rt({color:"#69F0AE",transparent:!0,opacity:.12,side:se,depthWrite:!1}),0,-1.1,0,!1);return n.userData.isUfoBeam=!0,e.rotation.y=t()*Math.PI*2,e}spawnShootingStar(t,e){if(this.stars.length>=(O?2:4))return;const n=v(this.root,new L(.04,.04,2.8),new Rt({color:"#FFFFFF",transparent:!0,opacity:.92}),(e()-.5)*40,28+e()*12,t+30+e()*40,!1);n.rotation.x=-.6-e()*.4,n.rotation.z=(e()-.5)*.8;const i=v(n,new L(.12,.12,1.2),new Rt({color:"#80DEEA",transparent:!0,opacity:.35,blending:qt}),0,0,1.4,!1);i.userData.isTail=!0,this.stars.push({mesh:n,vx:(e()-.5)*8,vy:-18-e()*12,vz:-25-e()*15,life:.9+e()*.4})}setNight(t){this.night=t;for(const e of this.ufos)e.group.visible=t>.25,e.group.traverse(n=>{n instanceof re&&n.userData.isUfoBeam&&(n.material.opacity=.08+t*.12)})}playSpectacle(t,e){if(t==="dogfight"){this.spawnJet(e+35+Math.random()*20,-1),this.spawnJet(e+38+Math.random()*20,1);return}if(t==="meteor-streak"){for(let i=0;i<(O?2:4);i++)this.spawnShootingStar(e,Math.random);return}const n=t==="distant-barrage"?O?2:4:O?1:2;for(let i=0;i<n;i++)this.spawnWarFlash(e+25+Math.random()*45,t)}spawnWarFlash(t,e){const n=(Math.random()-.5)*50,i=e==="orbital-flash"?"#FF5252":e==="energy-surge"?"#00E5FF":"#FFAB40",r=v(this.root,new ce(3.5+Math.random()*4,2+Math.random()*2),new Rt({color:i,transparent:!0,opacity:.85,blending:qt,depthWrite:!1,side:se}),n,6+Math.random()*8,t,!1);r.rotation.y=(Math.random()-.5)*.6,this.warFlashes.push({mesh:r,life:.35+Math.random()*.35})}spawnJet(t,e){const n=new Lt;n.position.set(e*22,16+Math.random()*6,t),v(n,new cn(.35,1.2,5),A("#546E7A",{metalness:.6}),0,0,0),v(n,new ce(.8,.25),new Rt({color:"#FF5252",transparent:!0,opacity:.7}),-.5,0,0,!1),n.rotation.y=e>0?-Math.PI/2:Math.PI/2,n.rotation.z=e*.15,this.root.add(n),this.jets.push({group:n,life:3.5})}update(t,e,n){this.root.position.set(0,0,0);for(const i of this.ufos){if(Math.abs(i.worldZ-n)>(O?90:120)){i.group.visible=!1;continue}i.group.visible=this.night>.2,i.group.position.set(i.baseX+Math.sin(t*.15+i.phase)*2.5,i.baseY+Math.sin(t*i.speed+i.phase)*1.2,i.worldZ),i.group.rotation.y+=e*(.25+i.speed*.15)}if(this.night>.45){this.starTimer+=e;const i=O?2.2:1.1;this.starTimer>=i&&(this.starTimer=0,this.spawnShootingStar(n,Math.random))}for(let i=this.stars.length-1;i>=0;i--){const r=this.stars[i];r.life-=e,r.mesh.position.x+=r.vx*e,r.mesh.position.y+=r.vy*e,r.mesh.position.z+=r.vz*e,r.mesh.material.opacity=Math.max(0,r.life),(r.life<=0||r.mesh.position.y<8)&&(this.root.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),r.mesh.traverse(a=>{a instanceof re&&a!==r.mesh&&(a.geometry.dispose(),a.material.dispose())}),this.stars.splice(i,1))}for(let i=this.warFlashes.length-1;i>=0;i--){const r=this.warFlashes[i];r.life-=e;const a=r.mesh.material;a.opacity=Math.max(0,r.life*2.2),r.mesh.scale.setScalar(1+(.35-r.life)*2),r.life<=0&&(this.root.remove(r.mesh),r.mesh.geometry.dispose(),a.dispose(),this.warFlashes.splice(i,1))}for(let i=this.jets.length-1;i>=0;i--){const r=this.jets[i];r.life-=e,r.group.position.x+=e*14*Math.sign(r.group.position.x||1),r.group.position.z-=e*6,(r.life<=0||Math.abs(r.group.position.z-n)>100)&&(Ze(r.group),this.jets.splice(i,1))}}clear(){for(const t of this.stars)this.root.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.stars=[];for(const t of this.warFlashes)this.root.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.warFlashes=[];for(const t of this.jets)Ze(t.group);this.jets=[];for(const t of this.ufos)Ze(t.group);for(this.ufos=[];this.root.children.length;)this.root.remove(this.root.children[0])}dispose(){this.clear(),this.scene.remove(this.root)}}const Vl=new Map;function Qi(s,t,e=128){let n=Vl.get(s);if(n)return n;const i=document.createElement("canvas");return i.width=e,i.height=e,t(i.getContext("2d"),e,e),n=new Be(i),n.wrapS=n.wrapT=bn,n.colorSpace=ue,Vl.set(s,n),n}function yg(s){const t=`brick-${Math.floor(s*100)}`;return Qi(t,(e,n,i)=>{const r=new bt().setHSL(s,.35,.42);e.fillStyle=r.getStyle(),e.fillRect(0,0,n,i);const a=n/4,o=i/8;for(let l=0;l<8;l++){const c=l%2===0?0:a/2;for(let h=-1;h<5;h++){const u=h*a+c,d=l*o,f=(l+h)%3;e.fillStyle=`rgba(${f===0?0:20},${f===1?0:15},${f===2?0:10},0.12)`,e.fillRect(u+1,d+1,a-2,o-2),e.strokeStyle="rgba(0,0,0,0.22)",e.lineWidth=1,e.strokeRect(u+.5,d+.5,a-1,o-1)}}},128)}function Wl(s){const t=`siding-${Math.floor(s*100)}`;return Qi(t,(e,n,i)=>{const r=new bt().setHSL(s,.28,.72);e.fillStyle=r.getStyle(),e.fillRect(0,0,n,i);for(let a=0;a<i;a+=6)e.fillStyle=a%12===0?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.06)",e.fillRect(0,a,n,3);for(let a=0;a<n;a+=32)e.strokeStyle="rgba(0,0,0,0.08)",e.beginPath(),e.moveTo(a,0),e.lineTo(a,i),e.stroke()},128)}function Mg(s="#5D4037"){return Qi(`roof-${s}`,(t,e,n)=>{t.fillStyle=s,t.fillRect(0,0,e,n);for(let i=0;i<12;i++){const r=i%2===0?0:10;for(let a=-1;a<8;a++)t.fillStyle=`rgba(0,0,0,${.06+i%3*.03})`,t.beginPath(),t.arc(a*20+r+10,i*10+8,9,0,Math.PI,!0),t.fill()}},128)}function bg(){return Qi("bark",(s,t,e)=>{s.fillStyle="#4E342E",s.fillRect(0,0,t,e);for(let n=0;n<24;n++)s.strokeStyle=`rgba(0,0,0,${.08+n%4*.04})`,s.lineWidth=1+n%3,s.beginPath(),s.moveTo(n*17%t,0),s.bezierCurveTo(n*23%t,e*.3,n*31%t,e*.7,n*13%t,e),s.stroke()},64)}function Sg(){return Qi("leaf",(s,t,e)=>{s.fillStyle="#388E3C",s.fillRect(0,0,t,e);for(let n=0;n<80;n++){const i=n*37%t,r=n*53%e;s.fillStyle=n%3===0?"rgba(129,199,132,0.45)":"rgba(27,94,32,0.25)",s.beginPath(),s.ellipse(i,r,3+n%4,2+n%3,n*.5,0,Math.PI*2),s.fill()}},64)}function wg(){return Qi("hexpad",(s,t,e)=>{s.fillStyle="#1a237e",s.fillRect(0,0,t,e);const n=14;for(let i=0;i<9;i++)for(let r=0;r<9;r++){const a=r*n*1.75+(i%2?n*.875:0)+16,o=i*n*1.5+16;s.beginPath();for(let l=0;l<6;l++){const c=Math.PI/3*l-Math.PI/6,h=a+Math.cos(c)*n,u=o+Math.sin(c)*n;l===0?s.moveTo(h,u):s.lineTo(h,u)}s.closePath(),s.fillStyle=(i+r)%2===0?"rgba(0,230,118,0.35)":"rgba(255,213,79,0.25)",s.fill(),s.strokeStyle="rgba(0,230,118,0.55)",s.lineWidth=1,s.stroke()}},256)}function Xl(s){return vg(s)}class Eg{constructor(t){F(this,"scene");F(this,"rootMeshes",[]);F(this,"animProps",[]);F(this,"roadTexture");F(this,"roadEmissiveTex",null);F(this,"roadGlowTex",null);F(this,"roadMesh",null);F(this,"roadGlowMesh",null);F(this,"roadStreakTex",null);F(this,"roadStreakMesh",null);F(this,"roadRainTex",null);F(this,"roadRainMesh",null);F(this,"boostPads",[]);F(this,"roadAccent",{primary:"#FFE082",secondary:"#FFF8E1",edge:"#FFFFFF"});F(this,"roadFx",{turbo:!1,speed:16,baseSpeed:16,playerX:0});F(this,"wetFactor",0);F(this,"districtId",1);F(this,"lightPoolTexture",null);F(this,"skyTexture",null);F(this,"skyCanvas",null);F(this,"skyTheme");F(this,"hemiLight");F(this,"ambientLight");F(this,"sunLight");F(this,"fillLight");F(this,"rimLight");F(this,"accentLight",null);F(this,"roadNightLight",null);F(this,"skyPhase",-1);F(this,"skyTick",0);F(this,"skyNight",0);F(this,"skyNightFx",0);F(this,"blackoutBoost",0);F(this,"playerZ",0);F(this,"cullTimer",0);F(this,"skyEffects",null);this.scene=t}build(t,e){this.clear(),this.skyTheme=t,this.districtId=t.id,this.setupLighting(t,e),this.buildSky(t);const n=(O?.016:.011)*(200/t.fogFar);this.scene.fog=new cr(t.fog,n);const i=this.makeGrassTexture(t);i.wrapS=i.wrapT=bn,i.repeat.set(6,(e+140)/10);const r=v(this.scene,new ce(50,e+140),new ye({map:i,color:t.ground,roughness:1}),0,0,e/2,!1);r.rotation.x=-Math.PI/2,r.position.y=-.02,r.receiveShadow=!O,r.userData.isTerrain=!0,this.rootMeshes.push(r);const a=this.makeSidewalkTexture();a.wrapS=a.wrapT=bn,a.repeat.set(2,(e+140)/6);for(const C of[-5.2,5.2]){const T=v(this.scene,new ce(3.5,e+140),new ye({map:a,roughness:.95}),C,0,e/2,!1);T.rotation.x=-Math.PI/2,T.position.y=.015,T.receiveShadow=!O,T.userData.isTerrain=!0,this.rootMeshes.push(T)}this.roadAccent=this.roadAccentForTheme(t);const o=this.makeRoadTextures(t);this.roadTexture=o.color,this.roadEmissiveTex=o.emissive,this.roadGlowTex=o.glow;const l=(e+140)/8;for(const C of[this.roadTexture,this.roadEmissiveTex,this.roadGlowTex])C.wrapS=C.wrapT=bn,C.repeat.set(1,l);const c=v(this.scene,new ce(9.5,e+140),new ye({map:this.roadTexture,emissiveMap:this.roadEmissiveTex,emissive:this.roadAccent.primary,emissiveIntensity:.1,color:"#c8cdd2",roughness:.76,metalness:.1,envMapIntensity:.45}),0,0,e/2,!1);c.rotation.x=-Math.PI/2,c.position.y=.025,c.receiveShadow=!O,c.userData.isTerrain=!0,this.roadMesh=c,this.rootMeshes.push(c);const h=v(this.scene,new ce(9.5,e+140),new Rt({map:this.roadGlowTex,color:this.roadAccent.primary,transparent:!0,opacity:O?.18:.26,blending:qt,depthWrite:!1}),0,.032,e/2,!1);h.rotation.x=-Math.PI/2,h.userData.isTerrain=!0,this.roadGlowMesh=h,this.rootMeshes.push(h);const u=this.getRoadStreakTexture(),d=v(this.scene,new ce(9.5,e+140),new Rt({map:u,color:this.roadAccent.secondary,transparent:!0,opacity:0,blending:qt,depthWrite:!1}),0,.033,e/2,!1);d.rotation.x=-Math.PI/2,d.userData.isTerrain=!0,this.roadStreakTex=u,this.roadStreakMesh=d,this.rootMeshes.push(d);const f=this.getRoadRainTexture(),g=v(this.scene,new ce(9.8,e+140),new Rt({map:f,color:"#B3E5FC",transparent:!0,opacity:0,blending:qt,depthWrite:!1}),0,.034,e/2,!1);g.rotation.x=-Math.PI/2,g.userData.isTerrain=!0,this.roadRainTex=f,this.roadRainMesh=g,this.rootMeshes.push(g),this.placeBoostPads(t,e);const _=this.makeCurbTexture();_.wrapS=_.wrapT=bn,_.repeat.set(1,(e+140)/4);for(const C of[-3.4,3.4]){const T=v(this.scene,new L(.35,.18,e+140),new ye({map:_,color:"#CFD8DC",roughness:.92,metalness:.04}),C,.09,e/2,!1);v(T,new L(.06,.04,e+140),A("#B0BEC5",{roughness:.85}),C>0?-.14:.14,.1,0,!1),v(T,new L(.05,.19,e+140),A("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.22}),C>0?-.17:.17,0,0,!1),T.userData.isTerrain=!0,this.rootMeshes.push(T)}if(this.placeStreetLights(t,e),!O)for(let C=30;C<e;C+=28)for(const T of[-5.2,5.2]){const P=v(this.scene,new ce(3.2,1.2),A("#90A4AE",{roughness:.9}),T,.018,C,!1);P.rotation.x=-Math.PI/2,P.userData.isTerrain=!0,this.rootMeshes.push(P)}const m=Tg(t.id*1337+e);this.skyEffects&&this.skyEffects.dispose(),this.skyEffects=new xg(this.scene),this.skyEffects.build(e,m);const p=O?3:5;for(let C=0;C<p;C++){const T=this.makeCloud(m),P=m()*(e+60);T.position.set((m()-.5)*40,18+m()*14,P),this.scene.add(T),this.rootMeshes.push(T),this.animProps.push({obj:T,worldZ:P,kind:"cloud",speed:.15+m()*.2,baseY:T.position.y,phase:m()*10})}const b=O?22:26,x=O?5:9,y=[];for(let C=0;C<e+50;C+=b+Math.floor(m()*x))for(const T of[-1,1]){if(m()>(O?.22:.2)){const M=this.makeBuilding(t,m,T),w=C+m()*5;M.position.set(T*(8+m()*5),0,w),an(M),this.scene.add(M),this.rootMeshes.push(M),y.push({side:T,z:w})}else if(t.id<=2&&m()>.32){const M=this.makeTree(m);M.position.set(T*(13+m()*3.5),0,C+m()*4),an(M),this.scene.add(M),this.rootMeshes.push(M)}else if(t.id===3&&m()>.38){const M=this.makeCactus(m);M.position.set(T*(12+m()*4),0,C+m()*4),an(M),this.scene.add(M),this.rootMeshes.push(M)}else if(t.id===4&&m()>.28){const M=this.makePalmTree(m);M.position.set(T*(12+m()*4),0,C+m()*4),an(M),this.scene.add(M),this.rootMeshes.push(M)}if(m()>(O?.82:.68)){const M=this.makeMailbox(),w=C+m()*3;M.position.set(T*(6.4+m()*.8),0,w),an(M),this.scene.add(M),this.rootMeshes.push(M)}if(!O&&m()>.88){const M=this.makeAlienCrash();M.position.set(T*(7+m()*2),0,C),an(M),this.scene.add(M),this.rootMeshes.push(M),this.animProps.push({obj:M.children[1],worldZ:C,kind:"bob",speed:2,baseY:.12,phase:m()*5})}}if(t.id<=2){const C=O?14:11;for(let T=24;T<e+40;T+=C+Math.floor(m()*5))for(const P of[-1,1]){if(y.some(w=>w.side===P&&Math.abs(w.z-T)<8)||m()>.58)continue;const M=this.makeTree(m);M.position.set(P*(12.5+m()*4),0,T+m()*3),an(M),this.scene.add(M),this.rootMeshes.push(M)}}else if(t.id===3)for(let C=20;C<e+40;C+=16+Math.floor(m()*8)){for(const T of[-1,1]){if(m()>.45)continue;const P=this.makeCactus(m);P.position.set(T*(11+m()*5),0,C+m()*3),an(P),this.scene.add(P),this.rootMeshes.push(P)}if(m()>.7){const T=this.makeDesertRock(m);T.position.set((m()>.5?1:-1)*(10+m()*6),0,C),an(T),this.scene.add(T),this.rootMeshes.push(T)}}else if(t.id===4){const C=O?12:9;for(let T=20;T<e+40;T+=C+Math.floor(m()*4))for(const P of[-1,1]){if(y.some(w=>w.side===P&&Math.abs(w.z-T)<7)||m()>.35)continue;const M=this.makePalmTree(m);M.position.set(P*(11.5+m()*4.5),0,T+m()*3),an(M),this.scene.add(M),this.rootMeshes.push(M)}}this.addMilestoneArch(8,"#66BB6A","START"),this.addMilestoneArch(e-5,"#FFD54F","ZONE")}buildSky(t){var n;this.skyCanvas=document.createElement("canvas"),this.skyCanvas.width=Bl,this.skyCanvas.height=Bl,this.skyTexture=new Be(this.skyCanvas),this.skyTexture.colorSpace=ue,this.scene.background=this.skyTexture;const e=Xl(0);this.skyNight=e,this.skyNightFx=sr(e),this.paintSky(e,t),this.applySkyLighting(e),(n=this.skyEffects)==null||n.setNight(e)}drawSkyCloud(t,e,n,i,r){t.save(),t.globalAlpha=r,t.fillStyle="#ffffff";const a=28*i;t.beginPath(),t.arc(e,n,a,0,Math.PI*2),t.arc(e+a*.9,n-a*.15,a*.82,0,Math.PI*2),t.arc(e+a*1.75,n+a*.05,a*.7,0,Math.PI*2),t.arc(e-a*.75,n+a*.08,a*.65,0,Math.PI*2),t.fill(),t.restore()}drawAurora(t,e,n,i){if(!(i<=0)){t.save(),t.globalAlpha=i;for(let r=0;r<3;r++){t.beginPath();for(let o=0;o<=e;o+=8){const l=n*(.18+r*.08)+Math.sin(o*.02+r*2)*22+Math.cos(o*.008)*14;o===0?t.moveTo(o,l):t.lineTo(o,l)}t.lineTo(e,n*.55),t.lineTo(0,n*.55),t.closePath();const a=t.createLinearGradient(0,0,e,n*.5);a.addColorStop(0,r===0?"rgba(0,230,118,0)":r===1?"rgba(0,229,255,0)":"rgba(224,64,251,0)"),a.addColorStop(.5,r===0?"rgba(0,230,118,0.35)":r===1?"rgba(0,229,255,0.28)":"rgba(224,64,251,0.22)"),a.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=a,t.fill()}t.restore()}}paintSky(t,e){var _;if(!this.skyCanvas)return;const n=this.skyCanvas.getContext("2d"),i=this.skyCanvas.width,r=this.skyCanvas.height,a=on(e.sky,"#64B5F6",.4),o=on(e.skyBottom,"#BBDEFB",.45),l=on("#FFECB3",e.fog,.25),c=on("#E3F2FD",e.ground,.2),h=on(a,"#0a0520",t),u=on(o,"#1a1040",t),d=on(l,"#120820",t),f=on(c,"#050510",t),g=n.createLinearGradient(0,0,0,r);if(g.addColorStop(0,h),g.addColorStop(.28,u),g.addColorStop(.55,d),g.addColorStop(.78,f),g.addColorStop(1,on(e.fog,"#0a0a12",t)),n.fillStyle=g,n.fillRect(0,0,i,r),t>.22&&t<.72){const m=Math.sin((t-.22)/.5*Math.PI)*.85,p=n.createLinearGradient(0,r*.45,0,r);p.addColorStop(0,"rgba(255,120,60,0)"),p.addColorStop(.45,`rgba(255,140,80,${.35*m})`),p.addColorStop(.75,`rgba(255,87,34,${.25*m})`),p.addColorStop(1,"rgba(80,20,60,0)"),n.fillStyle=p,n.fillRect(0,0,i,r)}if(t>.55){this.drawAurora(n,i,r,Math.min(1,(t-.55)*1.8));const m=n.createLinearGradient(i*.2,0,i*.8,r);m.addColorStop(0,"rgba(255,255,255,0)"),m.addColorStop(.45,`rgba(200,210,255,${.08*t})`),m.addColorStop(.55,`rgba(255,255,255,${.12*t})`),m.addColorStop(.65,`rgba(200,210,255,${.08*t})`),m.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=m,n.fillRect(0,0,i,r)}if(t<.75){const m=Math.max(0,1-Math.max(0,t-.15)*1.25),p=i*(.62+t*.12),b=r*(.28+t*.12),x=n.createRadialGradient(p,b,0,p,b,140);x.addColorStop(0,`rgba(255,255,240,${.98*m})`),x.addColorStop(.2,`rgba(255,240,160,${.7*m})`),x.addColorStop(.45,`rgba(255,200,100,${.35*m})`),x.addColorStop(1,"rgba(255,200,80,0)"),n.fillStyle=x,n.fillRect(0,0,i,r)}if(t>.48){const m=Math.min(1,(t-.48)*1.6),p=i*.78,b=r*.22;n.fillStyle=`rgba(240,240,255,${.9*m})`,n.beginPath(),n.arc(p,b,26,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(10,5,32,${.85*m})`,n.beginPath(),n.arc(p+10,b-6,22,0,Math.PI*2),n.fill()}if(t<.45){const m=.6*(1-t*1.35),p=[[.12,.28,1.1],[.42,.22,.95],[.68,.31,1.25],[.86,.24,.85],[.28,.38,.75],[.55,.42,.9]];for(const[b,x,y]of p)this.drawSkyCloud(n,b*i,x*r,y,m)}if(t>.42){const m=Math.min(1,(t-.42)*1.45),p=O?50:65;for(let b=0;b<p;b++){const x=b*97%1e3/1e3,y=b*53%720/1e3,C=.45+b*17%10/18;n.fillStyle=`rgba(255,255,255,${m*C})`;const T=b%7===0?2.2:b%4===0?1.5:.9;n.beginPath(),n.arc(x*i,y*r*.62,T,0,Math.PI*2),n.fill(),b%11===0&&m>.5&&(n.strokeStyle=`rgba(180,220,255,${m*.35})`,n.lineWidth=1,n.beginPath(),n.moveTo(x*i-4,y*r*.62),n.lineTo(x*i+4,y*r*.62),n.moveTo(x*i,y*r*.62-4),n.lineTo(x*i,y*r*.62+4),n.stroke())}}(_=this.skyEffects)==null||_.setNight(t),this.skyTexture&&(this.skyTexture.needsUpdate=!0)}applySkyLighting(t){const e=this.skyTheme,n=sr(t),i=Hl(t),r=on(e.fog,e.id>=6?"#120828":"#050510",i);this.scene.fog instanceof cr&&this.scene.fog.color.set(r);const a=new bt(e.sky),o=new bt(e.id>=6?"#1a0a40":"#223355"),l=a.clone().lerp(o,i),c=new bt(e.ground),h=new bt("#0a0a14"),u=c.clone().lerp(h,i*.85);if(this.hemiLight&&(this.hemiLight.color.copy(l),this.hemiLight.groundColor.copy(u),this.hemiLight.intensity=e.ambient*.78*(1-i*.45)),this.ambientLight){const d=new bt("#ffffff").lerp(new bt("#8899cc"),i*.65);this.ambientLight.color.copy(d);const f=Ol(t);this.ambientLight.intensity=e.ambient*.32*(1-i*.42)+f*.22}if(this.sunLight){const d=new bt(e.id>=3?"#FFF0D0":"#FFF8F0"),f=new bt("#6688bb");this.sunLight.color.copy(d.lerp(f,i)),this.sunLight.intensity=e.sun*.88*(1-i*.55)}if(this.fillLight){const d=new bt(e.skyBottom||e.sky),f=new bt(e.id>=4?"#004D40":"#1a237e");this.fillLight.color.copy(d.lerp(f,i*.75)),this.fillLight.intensity=e.ambient*.24*(.55+i*.45)}if(this.rimLight&&(this.rimLight.intensity=.1+(1-i)*.14,this.rimLight.color.set(on("#FFE082","#80DEEA",n*.85))),this.accentLight&&(this.accentLight.intensity=(e.id>=6?.55:.25)*(.25+n*.95)),this.roadNightLight&&(this.roadNightLight.intensity=n*(O?.45:.58),this.roadNightLight.color.set(on("#FFE082","#FFF3E0",1-n*.25))),this.roadMesh){const d=this.roadMesh.material,f=.08+(1-i)*.1;d.emissiveIntensity=f+n*(O?.38:.55),d.emissive.set(this.roadAccent.primary).lerp(new bt(this.roadAccent.secondary),n*.35),d.roughness=.82-i*.1-n*.08,d.metalness=.06+n*.14,d.color.set("#c8cdd2").lerp(new bt("#9aa8b8"),i*.25)}if(this.roadGlowMesh){const d=this.roadGlowMesh.material,f=O?.16:.24;d.opacity=n>.04?f+n*(O?.42:.58):0,d.color.set(this.roadAccent.primary).lerp(new bt(this.roadAccent.secondary),n*.25),this.roadGlowMesh.visible=n>.04}}roadAccentForTheme(t){return t.id>=6?{primary:"#EA80FC",secondary:"#80DEEA",edge:"#E1BEE7"}:t.id>=5?{primary:"#FF7043",secondary:"#FFD54F",edge:"#FFCC80"}:t.id>=4?{primary:"#69F0AE",secondary:"#80DEEA",edge:"#B2FF59"}:t.id>=3?{primary:"#FFB74D",secondary:"#FFE082",edge:"#FFF8E1"}:t.id>=2?{primary:"#FFD54F",secondary:"#FFAB40",edge:"#FFFFFF"}:{primary:"#FFE082",secondary:"#FFF59D",edge:"#FFFFFF"}}rainWetForDistrict(t,e){return t.id===5?Math.min(1,.6+e*.4):t.id===4?Math.min(1,.38+e*.55):t.id===3?Math.min(1,.06+e*.12):t.id>=6?Math.min(1,.22+e*.5):Math.min(1,e*.58)}drawDistrictRoadSurface(t,e,n,i,r,a){const o=i.id,l=r/2,c=(u,d,f)=>{const g=t.createLinearGradient(0,0,r,0);g.addColorStop(0,u),g.addColorStop(.5,d),g.addColorStop(1,f),t.fillStyle=g,t.fillRect(0,0,r,r)};if(o===2){t.fillStyle="#5D4037",t.fillRect(0,0,r*.2,r),t.fillRect(r*.8,0,r*.2,r);for(let d=0;d<r;d+=10)for(let f=0;f<2;f++){const g=f===0?0:r*.8;for(let _=0;_<r*.2;_+=10)t.fillStyle=(_+d+f)%20===0?"#6D4C41":"#A1887F",t.fillRect(g+_,d,10,10)}const u=t.createLinearGradient(r*.2,0,r*.8,0);u.addColorStop(0,"#252c32"),u.addColorStop(.5,"#3a444c"),u.addColorStop(1,"#252c32"),t.fillStyle=u,t.fillRect(r*.2,0,r*.6,r)}else if(o===3){c("#C4A574","#4a4035","#C4A574"),t.fillStyle="rgba(212,165,116,0.55)",t.fillRect(0,0,r*.16,r),t.fillRect(r*.84,0,r*.16,r);for(let u=0;u<12;u++){const d=(u%2===0?0:r*.84)+u%3*8,f=u*37%(r-30);t.fillStyle="rgba(255,224,178,0.35)",t.beginPath(),t.ellipse(d+12,f,18,8,.2,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(62,47,35,0.35)";for(let u=0;u<8;u++){const d=r*.3+u*29%(r*.4),f=u*53%r;t.beginPath(),t.moveTo(d,f),t.lineTo(d+12,f+8),t.stroke()}}else if(o===4){c("#1a2820","#243830","#1a2820"),t.fillStyle="rgba(46,125,50,0.35)",t.fillRect(0,0,r*.14,r),t.fillRect(r*.86,0,r*.14,r);for(let d=0;d<40;d++)t.fillStyle=`rgba(${80+d%3*30},${120+d%4*20},70,0.2)`,t.fillRect(d*19%r,d*31%r,3,2);const u=t.createLinearGradient(l-r*.1,0,l+r*.1,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(80,160,140,0.14)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.fillRect(0,0,r,r)}else if(o===5){c("#2a3036","#3d454c","#2a3036");for(let u=0;u<6;u++){const d=r*.25+u*41%(r*.5),f=u*67%(r-40);t.fillStyle="#546E7A",t.fillRect(d,f,28,22),t.strokeStyle="rgba(255,255,255,0.12)";for(let g=0;g<4;g++)t.beginPath(),t.moveTo(d+g*7,f),t.lineTo(d+g*7+14,f+22),t.stroke()}t.fillStyle="rgba(20,20,25,0.2)";for(let u=0;u<10;u++)t.beginPath(),t.ellipse(u*43%r,u*61%r,10,6,0,0,Math.PI*2),t.fill()}else if(o>=6){c("#14101f","#1e1830","#14101f"),t.strokeStyle=a.primary,t.globalAlpha=.2,t.lineWidth=1;for(let u=0;u<r;u+=16)t.beginPath(),t.moveTo(u,0),t.lineTo(u,r),t.stroke();for(let u=0;u<r;u+=16)t.beginPath(),t.moveTo(0,u),t.lineTo(r,u),t.stroke();t.globalAlpha=1,n.fillStyle=a.primary,n.globalAlpha=.08;for(let u=0;u<r;u+=16)n.fillRect(u,0,1,r),n.fillRect(0,u,r,1);if(n.globalAlpha=1,o>=7){t.strokeStyle="rgba(229,57,53,0.25)";for(let u=0;u<6;u++){const d=r*.35+u*37%(r*.3),f=u*71%r;t.beginPath(),t.moveTo(d,f),t.lineTo(d+20,f+6),t.stroke()}}}else c("#1e252b","#3d4850","#1e252b"),o===1&&(t.fillStyle="rgba(180,200,160,0.04)",t.fillRect(0,0,r*.12,r),t.fillRect(r*.88,0,r*.12,r));const h=n.createLinearGradient(l-r*.1,0,l+r*.1,0);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(.5,"rgba(120,180,220,0.1)"),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h,n.fillRect(l-r*.12,0,r*.24,r)}getRoadStreakTexture(){if(this.roadStreakTex)return this.roadStreakTex;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#000000",e.fillRect(0,0,128,128);for(const n of[0,1])for(let i=0;i<14;i++){const r=n===0?6+i%4*5:122-i%4*5,a=i*23%110,o=18+i%4*10,l=e.createLinearGradient(r,a,r,a+o);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.4,`rgba(255,255,255,${.06+i%3*.02})`),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(r-1,a,2,o)}return this.roadStreakTex=new Be(t),this.roadStreakTex.colorSpace=ue,this.roadStreakTex.wrapS=this.roadStreakTex.wrapT=bn,this.roadStreakTex}getRoadRainTexture(){if(this.roadRainTex)return this.roadRainTex;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.strokeStyle="rgba(180,220,255,0.22)",e.lineWidth=1.2;for(let n=0;n<48;n++){const i=n*23%128,r=n*41%128;e.beginPath(),e.moveTo(i,r),e.lineTo(i-6,r+14),e.stroke()}e.fillStyle="rgba(150,200,255,0.06)";for(let n=0;n<20;n++)e.fillRect(n*31%120,n*47%120,2,8);return this.roadRainTex=new Be(t),this.roadRainTex.colorSpace=ue,this.roadRainTex.wrapS=this.roadRainTex.wrapT=bn,this.roadRainTex}placeBoostPads(t,e){const n=this.roadAccentForTheme(t),i=O?58:46;for(let r=52;r<e-24;r+=i){const a=new Lt;a.position.set(0,0,r);const o=v(a,new Qe(.75,1.05,O?20:28),new Rt({color:n.primary,transparent:!0,opacity:.22,blending:qt,depthWrite:!1,side:se}),0,.034,0,!1);o.rotation.x=-Math.PI/2;const l=v(a,new Ie(.72,O?16:24),new Rt({color:n.secondary,transparent:!0,opacity:.1,blending:qt,depthWrite:!1}),0,.035,0,!1);l.rotation.x=-Math.PI/2;for(let c=0;c<3;c++){const h=v(a,new ce(.35,.22),new Rt({color:n.primary,transparent:!0,opacity:.35,blending:qt,depthWrite:!1,side:se}),0,.036,-.25+c*.25,!1);h.rotation.x=-Math.PI/2,h.userData.isPadArrow=!0}an(a),this.scene.add(a),this.rootMeshes.push(a),this.boostPads.push({group:a,z:r,flash:0})}}getSkyNight(){return Math.min(1,this.skyNight+this.blackoutBoost)}getNightFx(){return Math.min(1,this.skyNightFx+this.blackoutBoost*.85)}getGameplayNight(){return Ol(Math.min(1,this.skyNight+this.blackoutBoost*.45))}setBlackout(t){this.blackoutBoost=Math.max(0,Math.min(.75,t))}updateSkyCycle(t,e){var i;const n=Xl(t);this.skyNight=n,this.skyNightFx=sr(n),(i=this.skyEffects)==null||i.setNight(n),this.applySkyLighting(n),this.skyTick+=e,!(this.skyTick<gg)&&(this.skyTick=0,this.paintSky(n,this.skyTheme))}makeRoadTextures(t){const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d"),r=document.createElement("canvas");r.width=256,r.height=256;const a=r.getContext("2d");a.fillStyle="#000000",a.fillRect(0,0,256,256);const o=document.createElement("canvas");o.width=256,o.height=256;const l=o.getContext("2d");l.fillStyle="#000000",l.fillRect(0,0,256,256);const c=this.roadAccentForTheme(t);this.drawDistrictRoadSurface(i,a,l,t,256,c);for(let x=0;x<256*2;x++){const y=x*47%256,C=x*83%256,T=(y*17+C*31)%100/100;i.fillStyle=T>.55?"rgba(255,255,255,0.015)":"rgba(0,0,0,0.025)",i.fillRect(y,C,1,1)}i.fillStyle="rgba(0,0,0,0.11)";for(let x=0;x<18;x++){const y=x*37%216,C=x*59%226;i.beginPath(),i.ellipse(y+20,C+15,14+x%5,8+x%4,x*.4,0,Math.PI*2),i.fill()}i.fillStyle="rgba(90,110,130,0.06)";for(let x=0;x<8;x++)i.fillRect(x*61%206,x*73%166,36,70+x%3*20);const h=[Math.floor(256*.04),Math.floor(256*.92)],u=256/2,d=[256*.2,256*.4,256*.6,256*.8],f=(x,y,C,T,P,I)=>{I&&x.setLineDash(I);for(const M of[T*2.2,T*1.4,T])x.strokeStyle=C,x.globalAlpha=P*(M===T?1:M===T*1.4?.45:.2),x.lineWidth=M,x.lineCap="round",x.beginPath(),x.moveTo(y,0),x.lineTo(y,256),x.stroke();x.globalAlpha=1,I&&x.setLineDash([])};for(const x of h)i.strokeStyle="rgba(255,255,255,0.92)",i.lineWidth=Math.max(3,256/64),i.beginPath(),i.moveTo(x,0),i.lineTo(x,256),i.stroke(),f(a,x,c.edge,Math.max(3,256/64),.95),f(l,x,"#ffffff",Math.max(5,256/42),.35);i.strokeStyle="#FFEB3B",i.lineWidth=Math.max(4,256/48),i.lineCap="round",i.setLineDash([256*.045,256*.028]);for(const x of[-256*.014,256*.014])i.beginPath(),i.moveTo(u+x,0),i.lineTo(u+x,256),i.stroke(),f(a,u+x,"#FFD54F",Math.max(4,256/48),1,[256*.045,256*.028]),f(l,u+x,c.primary,Math.max(6,256/36),.55,[256*.045,256*.028]);i.setLineDash([]);const g=l.createLinearGradient(u-256*.08,0,u+256*.08,0);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(.35,"rgba(255,220,120,0.12)"),g.addColorStop(.5,"rgba(255,240,180,0.28)"),g.addColorStop(.65,"rgba(255,220,120,0.12)"),g.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=g,l.fillRect(u-256*.1,0,256*.2,256);const _=a.createLinearGradient(u-256*.06,0,u+256*.06,0);_.addColorStop(0,"rgba(0,0,0,0)"),_.addColorStop(.5,"rgba(255,213,79,0.35)"),_.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=_,a.fillRect(u-256*.08,0,256*.16,256),i.strokeStyle="rgba(255,255,255,0.32)",i.lineWidth=Math.max(2,256/96),i.setLineDash([256*.035,256*.04]);for(const x of d)i.beginPath(),i.moveTo(x,0),i.lineTo(x,256),i.stroke(),f(a,x,"rgba(255,255,255,0.55)",Math.max(2,256/96),.7,[256*.035,256*.04]);i.setLineDash([]);for(let x=0;x<4;x++){const y=x*64+16;i.fillStyle="rgba(255,255,255,0.88)";for(let C=0;C<6;C++){const T=97.28+C*10.24;i.fillRect(T,y,256*.028,256*.07),a.fillStyle="rgba(255,255,255,0.72)",a.fillRect(T-1,y-1,256*.03+2,256*.072+2),l.fillStyle="rgba(255,255,255,0.4)",l.fillRect(T-2,y-2,256*.034+4,256*.076+4)}}for(let x=0;x<4;x++){const y=x*64+32;for(let C=0;C<3;C++){const T=u+(C-1)*256*.055;a.fillStyle="rgba(255,235,120,0.55)",a.beginPath(),a.moveTo(T,y+256*.04),a.lineTo(T-256*.022,y),a.lineTo(T+256*.022,y),a.closePath(),a.fill(),l.fillStyle="rgba(255,220,100,0.28)",l.beginPath(),l.moveTo(T,y+256*.05),l.lineTo(T-256*.028,y-256*.01),l.lineTo(T+256*.028,y-256*.01),l.closePath(),l.fill()}}i.fillStyle="rgba(255,213,79,0.42)";for(let x=0;x<16;x++)i.fillRect(h[0]+4,x*256/16+4,256*.012,256*.04),i.fillRect(h[1]-8,x*256/16+10,256*.012,256*.04),a.fillStyle="rgba(255,193,7,0.65)",a.fillRect(h[0]+3,x*256/16+3,256*.014,256*.044),a.fillRect(h[1]-9,x*256/16+9,256*.014,256*.044);for(let x=0;x<5;x++){const y=64+x*256/5,C=x*97%216;i.fillStyle="#1a2026",i.beginPath(),i.arc(y,C+20,256*.035,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(100,120,140,0.35)",i.lineWidth=1,i.stroke()}const m=new Be(n);m.colorSpace=ue;const p=new Be(r);p.colorSpace=ue;const b=new Be(o);return b.colorSpace=ue,{color:m,emissive:p,glow:b}}makeCurbTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle="#B0BEC5",e.fillRect(0,0,64,64),e.fillStyle="rgba(255,255,255,0.12)",e.fillRect(0,0,64,3),e.fillStyle="rgba(0,0,0,0.08)";for(let i=0;i<8;i++)e.fillRect(0,i*8+4,64,2);e.fillStyle="rgba(0,0,0,0.05)";for(let i=0;i<12;i++)e.fillRect(i*11%58,i*17%58,6,4);const n=new Be(t);return n.colorSpace=ue,n}getLightPoolTexture(){if(this.lightPoolTexture)return this.lightPoolTexture;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,"rgba(255, 224, 178, 0.9)"),n.addColorStop(.25,"rgba(255, 204, 128, 0.45)"),n.addColorStop(.55,"rgba(255, 183, 77, 0.12)"),n.addColorStop(1,"rgba(255, 183, 77, 0)"),e.fillStyle=n,e.fillRect(0,0,128,128),this.lightPoolTexture=new Be(t),this.lightPoolTexture.colorSpace=ue,this.lightPoolTexture}placeStreetLights(t,e){const n=O?32:38;let i=1;for(let r=22;r<e-12;r+=n){const a=this.makeStreetLamp(t);a.position.set(i*4.18,0,r),a.rotation.y=i>0?0:Math.PI,an(a),this.scene.add(a),this.rootMeshes.push(a),this.animProps.push({obj:a,worldZ:r,kind:"flicker",speed:2.2+r*17%80/40,baseY:0,phase:r*.13,bulb:a.userData.flickerBulb,lightPool:a.userData.lightPool}),i*=-1}}makeGrassTexture(t){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle=t.ground,n.fillRect(0,0,256,256);for(let r=0;r<256;r+=2)for(let a=0;a<256;a+=2){const o=(a*13+r*7)%100/100;n.fillStyle=o>.5?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)",n.fillRect(a,r,2,2)}for(let r=0;r<48;r++)n.fillStyle=`rgba(0,0,0,${.03+r%4*.015})`,n.beginPath(),n.ellipse(r*19%256,r*41%256,6+r%5,4+r%3,r*.3,0,Math.PI*2),n.fill();for(let r=0;r<200;r++){const a=r*37%256,o=r*53%256;n.strokeStyle=r%2===0?"rgba(46,125,50,0.15)":"rgba(129,199,132,0.12)",n.lineWidth=1,n.beginPath(),n.moveTo(a,o),n.lineTo(a+r%3-1,o-3-r%4),n.stroke()}const i=new Be(e);return i.colorSpace=ue,i}makeSidewalkTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#B0BEC5",e.fillRect(0,0,128,128),e.strokeStyle="rgba(255,255,255,0.28)",e.lineWidth=1;for(let i=0;i<128;i+=16)for(let r=0;r<128;r+=16)e.strokeRect(r+.5,i+.5,15,15),(r+i)%32===0&&(e.fillStyle="rgba(255,255,255,0.06)",e.fillRect(r+2,i+2,12,12));e.fillStyle="rgba(0,0,0,0.05)";for(let i=0;i<14;i++)e.fillRect(i*19%118,i*27%118,7,5);e.fillStyle="rgba(255,255,255,0.04)",e.fillRect(0,0,128,2);const n=new Be(t);return n.colorSpace=ue,n}makeCloud(t){const e=new Lt,n=A("#FFFFFF",{transparent:!0,opacity:.92,roughness:1}),i=O?4:6;for(let r=0;r<i;r++)v(e,new Et(1.1+t()*1.4,10,8),n,(r-i/2)*1.05,.15+t()*.55,(t()-.5)*.9,!1).scale.set(1,.5+t()*.15,1);return v(e,new Et(1.8,8,8),A("#FFFFFF",{transparent:!0,opacity:.35}),0,-.2,0,!1).scale.set(2.2,.3,1.4),e}addWindow(t,e,n,i,r,a,o,l){const c=A("#ECEFF1",{roughness:.7}),h=A(o?l.id>=4?"#E1BEE7":"#FFF9C4":"#546E7A",{emissive:o?l.id>=4?"#CE93D8":"#FFD54F":"#263238",emissiveIntensity:o?l.id>=4?.95:.45:.05,metalness:.2,roughness:.25});v(t,new L(r+.08,a+.08,.05),c,e,n,i),v(t,new L(r,a,.04),h,e,n,i+.02),v(t,new L(r+.14,.06,.08),A("#455A64",{roughness:.8}),e,n-a/2-.04,i+.03),o&&a>.35&&(v(t,new L(.03,a*.85,.02),c,e,n,i+.04),v(t,new L(r*.85,.03,.02),c,e,n,i+.04))}addFacadeWindows(t,e,n,i,r,a,o){const l=e>0?-n/2-.03:n/2+.03,c=Math.max(2,Math.floor(n/1.85)),h=Math.max(2,Math.floor((i-2)/1.75)),u=Math.min(.62,(n-.6)/c-.12),d=Math.min(.82,(i-2.2)/h-.12);for(let f=0;f<h;f++)for(let g=0;g<c;g++){const _=1.35+f*(d+.18),m=-r/2+.55+g*(u+.18)+u/2;if(f===0&&g===Math.floor(c/2)&&a.id<=2)continue;const p=o()>(a.id>=3?.35:.22);this.addWindow(t,l,_,m,u,d,p,a)}}makeBuilding(t,e,n){const i=new Lt,r=t.id===3?"desert":t.id===4?"jungle":t.id>=6?"neon":t.id>=5?"industrial":t.id>=2?"downtown":"suburban",a=r==="desert"?4+e()*3:r==="jungle"?5+e()*5:r==="downtown"?10+e()*14:r==="suburban"?5+e()*4:7+e()*9,o=r==="downtown"?5+e()*3:r==="desert"?4+e()*2.5:4.5+e()*3.5,l=5+e()*4,c=t.buildingHue+e()*.08,h=new bt().setHSL(c,r==="suburban"?.42:.32,r==="neon"?.22:.38+t.id*.03),u=new bt().setHSL(c,.25,r==="suburban"?.78:.55),d=r==="desert"||r==="jungle"||r==="suburban"?Wl(c):yg(c);d.repeat.set(o/2,a/2);const f=new ye({map:d,color:r==="desert"?"#D7CCC8":r==="jungle"?"#8D6E63":h,roughness:r==="desert"?.95:.88}),g=A(r==="desert"?"#BF360C":r==="jungle"?"#33691E":u.getStyle(),{roughness:.75}),_=Mg(r==="suburban"?"#BF360C":r==="desert"?"#A1887F":r==="jungle"?"#558B2F":"#455A64");_.repeat.set(o/2,1.5);const m=new ye({map:_,color:r==="neon"?"#311B92":r==="suburban"?"#BF360C":r==="desert"?"#A1887F":r==="jungle"?"#558B2F":"#455A64",roughness:.85,emissive:r==="neon"?"#7B1FA2":"#000000",emissiveIntensity:r==="neon"?.25:0});if(v(i,new L(o,a,l),f,0,a/2,0),v(i,new L(o+.16,.28,l+.16),A(r==="desert"?"#BCAAA4":r==="jungle"?"#3E2723":"#37474F",{roughness:.92}),0,.14,0),v(i,new L(o+.2,.1,l+.2),g,0,.32,0),r==="suburban"){const b=v(i,new L(o/2+.1,.18,l+.35),m,-o/4,a+.1,0);b.rotation.z=.42;const x=v(i,new L(o/2+.1,.18,l+.35),m,o/4,a+.1,0);x.rotation.z=-.42,v(i,new L(.45,1.1,.45),A("#78909C",{roughness:.8}),o*.28,a+.85,l*.15),v(i,new L(1.5,.1,.85),g,n>0?-o/2-.55:o/2+.55,.35,.2);for(let y=0;y<3;y++)v(i,new L(.85,.12,.55),A("#78909C",{roughness:.85}),n>0?-o/2-.65:o/2+.65,.06+y*.12,.15-y*.05)}else if(r==="desert")v(i,new L(o+.15,.12,l+.15),m,0,a+.06,0),v(i,new L(o*.35,.55,.35),A("#FFCC80",{roughness:.9}),0,a+.35,0),e()>.5&&v(i,new ot(.08,.12,.6,6),A("#8D6E63"),o*.35,a+.65,l*.2);else if(r==="jungle"){v(i,new L(o+.25,.35,l+.25),A("#5D4037",{roughness:.9}),0,a+.5,0),v(i,new L(o+.4,.22,l+.4),m,0,a+.85,0);for(let b=0;b<4;b++){const x=b/4*Math.PI*2;v(i,new ot(.06,.08,1.2,6),A("#6D4C41",{roughness:.95}),Math.cos(x)*(o*.35),.6,Math.sin(x)*(l*.35))}v(i,new L(.12,a*.7,.08),A("#2E7D32",{emissive:"#1B5E20",emissiveIntensity:.15}),n>0?-o/2-.12:o/2+.12,a*.45,0)}else if(r==="downtown"){v(i,new L(o+.2,.35,l+.2),A("#37474F"),0,a+.18,0),v(i,new L(1.2,.55,1),A("#546E7A",{metalness:.35}),o*.25,a+.55,0);for(let b=1;b<4;b++)v(i,new L(o+.06,.08,l+.06),g,0,b*(a/4),0)}else if(r==="industrial"){v(i,new L(o+.15,.28,l+.15),A("#263238"),0,a+.14,0);for(let b=0;b<5;b++)v(i,new L(o+.02,.04,.08),A("#37474F"),0,1.2+b*1.4,l/2+.05)}else v(i,new L(o+.1,.2,l+.1),m,0,a+.1,0),v(i,new L(o*.7,.12,.08),A("#E040FB",{emissive:"#E040FB",emissiveIntensity:1.1}),0,a*.55,l/2+.06);const p=n>0?-o/2-.05:o/2+.05;if(v(i,new L(.1,1.75,1.05),A("#3E2723"),p,.88,.1),v(i,new L(.08,1.65,.95),A("#5D4037",{roughness:.9}),p+(n>0?-.03:.03),.88,.12),v(i,new Et(.06,8,8),A("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.5}),p+(n>0?-.02:.02),.95,.62),this.addFacadeWindows(i,n,o,a,l,t,e),!O){const b=Math.max(1,Math.floor(l/1.8));for(let x=0;x<b;x++){const y=-l/2+.8+x*(l/b),C=n>0?o/2+.03:-o/2-.03;for(const T of[1.8,3.2,4.8])T>a-.8||this.addWindow(i,C,T,y,.5,.68,e()>.4,t)}}if(r==="suburban"&&e()>.4){const b=n>0?-o/2-1.1:o/2+1.1;v(i,new L(1.6,.9,.12),A("#A5D6A7",{roughness:.9}),b,.45,l*.2),v(i,new L(1.6,.9,.12),A("#A5D6A7",{roughness:.9}),b,.45,-l*.2)}if(t.id<=2&&e()>.55){const b=n>0?-o/2-.8:o/2+.8;v(i,new L(.08,.65,1.8),A("#8D6E63"),b,.33,0),v(i,new L(.06,.55,1.6),A("#A5D6A7",{roughness:.95}),b+(n>0?-.12:.12),.55,0)}return i.rotation.y=0,i}makeTree(t){const e=new Lt,n=1.4+t()*.5,i=bg();i.repeat.set(1,n/2);const r=new ye({map:i,color:"#5D4037",roughness:.95});v(e,new ot(.16,.28,n,8),r,0,n/2,0),v(e,new Et(.16,8,8),A("#4E342E"),0,n+.15,0);for(let l=0;l<3;l++){const c=l/3*Math.PI*2;v(e,new L(.12,.08,.35),A("#4E342E"),Math.cos(c)*.2,.08,Math.sin(c)*.2)}const a=Sg(),o=["#43A047","#66BB6A","#2E7D32","#81C784"];for(let l=0;l<4;l++)v(e,new cn(1.4-l*.2,2-l*.22,8),new ye({map:a,color:o[l%o.length],emissive:"#1B5E20",emissiveIntensity:.08,roughness:.95}),(t()-.5)*.15,n+.85+l*1.1,(t()-.5)*.15).scale.set(1.08-l*.07,1,1.08-l*.07);if(!O){for(let l=0;l<2;l++)v(e,new Et(.55+l*.15,8,8),new ye({map:a,color:"#388E3C",transparent:!0,opacity:.35,roughness:1}),(l-.5)*.4,.35,(t()-.5)*.5);v(e,new Et(.07,6,6),A("#FF5252",{emissive:"#D50000",emissiveIntensity:.3}),.35,n+1.1,.25)}return e}makeCactus(t){const e=new Lt,n=A("#558B2F",{roughness:.92}),i=A("#33691E",{roughness:.95}),r=1.6+t()*1.4;v(e,new ot(.22,.28,r,8),n,0,r/2,0);const a=r*(.45+t()*.2),o=r*(.45+t()*.15),l=t()>.5?1:-1;if(v(e,new ot(.14,.18,a*.55,6),n,l*.28,o,0),v(e,new ot(.12,.14,a,6),n,l*.42,o+a*.35,0),t()>.4){const c=-l;v(e,new ot(.12,.16,a*.5,6),i,c*.24,r*.35,0),v(e,new ot(.1,.12,a*.75,6),i,c*.36,r*.35+a*.3,0)}return e}makePalmTree(t){const e=new Lt,n=2.8+t()*1.8,i=A("#6D4C41",{roughness:.95});v(e,new ot(.18,.32,n,8),i,0,n/2,0);for(let o=0;o<4;o++){const l=.4+o*(n/4);v(e,new tn(.22,.04,6,10),A("#5D4037"),0,l,0)}const r=new ye({color:"#2E7D32",emissive:"#1B5E20",emissiveIntensity:.12,roughness:.9,side:se}),a=O?5:7;for(let o=0;o<a;o++){const l=o/a*Math.PI*2+t()*.2,c=v(e,new L(.08,.04,2.2+t()*.6),r,0,n+.15,0);c.rotation.y=l,c.rotation.x=-.55-t()*.15,c.position.x=Math.cos(l)*.15,c.position.z=Math.sin(l)*.15}return!O&&t()>.6&&v(e,new Et(.12,6,6),A("#FF7043",{emissive:"#E64A19",emissiveIntensity:.25}),.2,n*.6,.15),e}makeDesertRock(t){const e=new Lt,n=A("#A1887F",{roughness:.98}),i=.8+t()*1.2,r=.5+t()*.9,a=v(e,new L(i,r,i*(.7+t()*.4)),n,0,r/2,0);if(a.rotation.y=t()*Math.PI,a.rotation.z=(t()-.5)*.25,!O&&t()>.5){const o=i*.55,l=r*.45;v(e,new L(o,l,o),A("#8D6E63",{roughness:.98}),i*.35,l/2,i*.2)}return e}makeStreetLamp(t){const e=new Lt;e.userData.flicker=!0;const n="#FFCC80",i=A("#546E7A",{metalness:.72,roughness:.38}),r=A("#455A64",{metalness:.65,roughness:.42});v(e,new ot(.16,.18,.07,10),i,0,.035,0),v(e,new ot(.06,.09,.1,8),i,0,.12,0),v(e,new ot(.05,.075,4.15,10),i,0,2.14,0);const a=new Lt;a.position.set(0,4.18,0),e.add(a),v(a,new L(.95,.065,.065),i,-.47,0,0),v(a,new L(.06,.32,.06),i,-.92,-.12,0);const o=-.92;v(a,new ot(.2,.17,.1,10),r,o,-.28,0),v(a,new ot(.17,.2,.06,10,1,!0),A("#FFF8E1",{emissive:n,emissiveIntensity:.85,transparent:!0,opacity:.92,roughness:.2,metalness:.05}),o,-.36,0);const l=v(a,new Et(.07,8,8),A("#FFFDE7",{emissive:"#FFE0B2",emissiveIntensity:1.1}),o,-.38,0);l.userData.isBulb=!0,e.userData.flickerBulb=l;const c=O?3.2:4.2,h=v(e,new ce(c,c*1.55),new Rt({map:this.getLightPoolTexture(),transparent:!0,opacity:.42,blending:qt,depthWrite:!1,color:n}),-2.4,.028,0,!1);return h.rotation.x=-Math.PI/2,e.userData.lightPool=h,e}makeMailbox(){const t=new Lt;v(t,new ot(.05,.06,.7,8),A("#78909C",{metalness:.7}),0,.35,0),v(t,new L(.55,.75,.42),A("#1565C0",{roughness:.55}),0,.82,0),v(t,new L(.58,.1,.44),A("#0D47A1"),0,1.22,0),v(t,new L(.12,.18,.06),A("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.45}),.2,1.05,.24);const e=v(t,new L(.22,.14,.03),A("#E53935",{emissive:"#FF1744",emissiveIntensity:.35}),.28,1.18,.18);return e.rotation.z=-.55,t}makeAlienCrash(){const t=new Lt;v(t,new ot(.9,1.1,.15,12),A("#607D8B",{metalness:.7,emissive:"#00E676",emissiveIntensity:.3}),0,.08,0),v(t,new Et(.55,10,8,0,Math.PI*2,0,Math.PI/2),A("#80DEEA",{transparent:!0,opacity:.6}),0,.15,0);const e=v(t,new Ie(1.1,16),A("#76FF03",{emissive:"#33691E",emissiveIntensity:.5,transparent:!0,opacity:.65}),0,.02,0,!1);e.rotation.x=-Math.PI/2;for(let n=0;n<4;n++){const i=n/4*Math.PI*2;v(t,new L(.25,.08,.25),A("#CFD8DC",{metalness:.5}),Math.cos(i)*.9,.04,Math.sin(i)*.9)}return t}addMilestoneArch(t,e,n){const i=new Lt;i.position.set(0,0,t);for(const c of[-4.5,4.5])v(i,new ot(.2,.22,5,10),A("#ECEFF1"),c,2.5,0);v(i,new L(10,.35,.35),A(e,{emissive:e,emissiveIntensity:.35}),0,4.8,0);const r=document.createElement("canvas");r.width=256,r.height=64;const a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,256,64),a.fillStyle="#000",a.font="bold 28px Segoe UI",a.textAlign="center",a.fillText(n,128,42);const o=new Be(r),l=new re(new ce(3.5,.9),new Rt({map:o}));l.position.set(0,5.5,0),i.add(l),this.scene.add(i),this.rootMeshes.push(i)}setupLighting(t,e){this.hemiLight=new Sd(t.sky,t.ground,t.ambient*.95),this.hemiLight.name="hemi",this.scene.add(this.hemiLight),this.ambientLight=new rh(16777215,t.ambient*.38),this.ambientLight.name="ambient",this.scene.add(this.ambientLight),this.sunLight=new vs(16774376,t.sun),this.sunLight.position.set(20,45,-25),this.sunLight.castShadow=!1,this.sunLight.name="sun",this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.fillLight=new vs(t.skyBottom||t.sky,t.ambient*.22),this.fillLight.position.set(-18,22,12),this.fillLight.name="fill",this.scene.add(this.fillLight),this.rimLight=new vs("#FFE082",.22),this.rimLight.position.set(0,14,-28),this.rimLight.name="rim",this.scene.add(this.rimLight),t.id>=5&&(this.accentLight=new ur(t.id>=6?"#7C4DFF":"#FF7043",.35,70,1.6),this.accentLight.position.set(0,10,30),this.accentLight.name="accent",this.scene.add(this.accentLight)),this.roadNightLight=new ur("#FFE082",0,O?24:30,2),this.roadNightLight.name="roadNight",this.scene.add(this.roadNightLight)}setPlayerZ(t,e){if(this.playerZ=t,this.cullTimer+=e,this.cullTimer<(O?.12:.08))return;this.cullTimer=0;const n=t-mg,i=t+pg;for(const r of this.rootMeshes){if(r.userData.isTerrain)continue;const a=r.position.z;r.visible=a>=n&&a<=i}}followSun(t,e){this.sunLight&&(this.sunLight.position.set(t+18,42,e-22),this.sunLight.target.position.set(t*.3,0,e+35),this.sunLight.target.updateMatrixWorld(),this.fillLight&&this.fillLight.position.set(t-16,24,e+8),this.rimLight&&this.rimLight.position.set(t*.5,16,e-26),this.accentLight&&this.accentLight.position.set(t,11,e+28),this.roadNightLight&&this.roadNightLight.position.set(t,5.5,e+3))}playSpectacle(t,e){var n;(n=this.skyEffects)==null||n.playSpectacle(t,e)}update(t,e=this.playerZ,n=.016,i){var _,m;i&&(this.roadFx=i),this.playerZ=e,this.wetFactor=this.rainWetForDistrict(this.skyTheme,this.skyNight),this.updateSkyCycle(t,n),(_=this.skyEffects)==null||_.update(t,n,e);const r=t*.12,a=this.roadFx.baseSpeed>0?this.roadFx.speed/this.roadFx.baseSpeed:1,o=this.roadFx.turbo,l=r*(o?2.4+a*.35:1);this.roadTexture&&(this.roadTexture.offset.y=-r),this.roadEmissiveTex&&(this.roadEmissiveTex.offset.y=-r),this.roadGlowTex&&(this.roadGlowTex.offset.y=-r),this.roadStreakTex&&(this.roadStreakTex.offset.y=-l),this.roadRainTex&&(this.roadRainTex.offset.y=-t*.85);const c=this.skyNight,h=this.skyNightFx,u=Hl(c),d=1+this.wetFactor*(this.wetFactor>.45?1:.65);if(this.roadMesh){const p=this.roadMesh.material,x=.1+(1-u)*.12+h*(O?.38:.55),y=1+Math.sin(t*2.4)*.04*h;p.emissiveIntensity=x*y*(o?1.12:1),p.roughness=.82-u*.1-this.wetFactor*.12,p.metalness=.06+h*.14+this.wetFactor*.14}if(this.roadGlowMesh){const p=this.roadGlowMesh.material,b=(O?.16:.24)+h*(O?.42:.58),x=this.roadFx.combatIntensity??0,y=this.roadFx.shootPulse??0,C=1+Math.sin(t*3.1+.5)*.06*h;p.opacity=h>.04?b*C*d*(o?1.15:1)*(1+x*.35+y*.5):0,this.roadGlowMesh.visible=h>.04,o?p.color.set(this.roadAccent.secondary):y>.2?p.color.set(this.roadAccent.primary).lerp(new bt("#00E5FF"),y):x>.3&&p.color.set(this.roadAccent.secondary)}if(this.roadStreakMesh){const p=this.roadStreakMesh.material,b=o?.12+(a-1)*.08:0;p.opacity+=(b-p.opacity)*Math.min(1,n*10),p.visible=p.opacity>.01,o&&p.color.set(this.roadAccent.secondary)}if(this.roadRainMesh){const p=this.roadRainMesh.material;p.opacity=this.wetFactor*(O?.16:.24),p.visible=this.wetFactor>.18}const f=O?42:58;for(const p of this.boostPads){const b=Math.abs(p.z-e)<f;p.group.visible=b,b&&(Math.abs(e-p.z)<1.4&&Math.abs(this.roadFx.playerX)<1.6&&(p.flash=1),p.flash=Math.max(0,p.flash-n*2.8),p.group.traverse(x=>{if(!(x instanceof re))return;const y=x.material,C=x.userData.isPadArrow?.28:.2,T=x.userData.isPadArrow?.95:.75;y.opacity=C+p.flash*(T-C)}),p.flash>.85?p.group.scale.setScalar(1+p.flash*.06):p.group.scale.setScalar(1))}if(!O&&((m=this.rootMeshes[0])!=null&&m.userData.isTerrain)){const b=this.rootMeshes[0].material;b.map&&(b.map.offset.y=-e*.02)}const g=O?38:55;for(const p of this.animProps)if(!(Math.abs(p.worldZ-e)>g))switch(p.kind){case"bob":p.obj.position.y=p.baseY+Math.sin(t*p.speed+p.phase)*.06;break;case"spin":p.obj.rotation.y=t*p.speed;break;case"cloud":p.obj.position.x+=Math.sin(t*.1+p.phase)*.008,p.obj.position.y=p.baseY+Math.sin(t*p.speed+p.phase)*.4;break;case"flicker":{const b=.72+Math.sin(t*p.speed+p.phase)*.08+Math.sin(t*p.speed*3.1+p.phase)*.04;if(p.bulb){const x=p.bulb.material;x.emissiveIntensity=b*(.35+this.skyNight*.95)}if(p.lightPool){const x=p.lightPool.material;x.opacity=this.skyNight*(.42+Math.sin(t*p.speed*.6+p.phase)*.04),p.lightPool.visible=this.skyNight>.1}break}}}clear(){var t;(t=this.skyEffects)==null||t.dispose(),this.skyEffects=null;for(const e of this.rootMeshes)this.scene.remove(e),Ze(e);this.rootMeshes=[],this.animProps=[],this.boostPads=[],this.roadTexture&&this.roadTexture.dispose(),this.roadEmissiveTex&&(this.roadEmissiveTex.dispose(),this.roadEmissiveTex=null),this.roadGlowTex&&(this.roadGlowTex.dispose(),this.roadGlowTex=null),this.roadStreakTex&&(this.roadStreakTex.dispose(),this.roadStreakTex=null),this.roadRainTex&&(this.roadRainTex.dispose(),this.roadRainTex=null),this.lightPoolTexture&&(this.lightPoolTexture.dispose(),this.lightPoolTexture=null),this.roadMesh=null,this.roadGlowMesh=null,this.roadStreakMesh=null,this.roadRainMesh=null,this.skyTexture&&(this.skyTexture.dispose(),this.skyTexture=null),this.skyCanvas=null,this.skyPhase=-1;for(const e of["hemi","ambient","sun","fill","rim","accent","roadNight","neon"]){const n=this.scene.getObjectByName(e);n&&this.scene.remove(n)}this.accentLight=null,this.roadNightLight=null}}function Tg(s){let t=s;return()=>(t=(t*16807+0)%2147483647,(t-1)/2147483646)}const dh={core:"#FF9800",mid:"#FFB74D",glow:"#FFD54F",particle:"#FFF8E1",shell:"#FF6F00",ribbon:"#FFC107"},Ag={core:"#FFFDE7",mid:"#FFF9C4",glow:"#FFD54F",particle:"#FFFFFF",shell:"#FFEB3B",ribbon:"#00E5FF"},ql=O?8:12,Cg=O?4:6;function In(s,t,e=1){return A(s,{emissive:s,emissiveIntensity:t,transparent:e<1,opacity:e,roughness:.18,metalness:.06})}function Yl(s,t){return new Rt({color:s,transparent:!0,opacity:t,depthWrite:!1,blending:qt})}function Rg(s){return s>=7?{core:"#FF5252",mid:"#FF1744",glow:"#FF8A80",particle:"#FFCDD2",shell:"#D50000",ribbon:"#FFD54F"}:s>=6?{core:"#E1BEE7",mid:"#AB47BC",glow:"#EA80FC",particle:"#F3E5F5",shell:"#7B1FA2",ribbon:"#FFD54F"}:s===5?{core:"#448AFF",mid:"#2979FF",glow:"#82B1FF",particle:"#E3F2FD",shell:"#1565C0",ribbon:"#FFD54F"}:s===4?{core:"#66BB6A",mid:"#43A047",glow:"#A5D6A7",particle:"#E8F5E9",shell:"#2E7D32",ribbon:"#FFD54F"}:s===3?{core:"#FFB74D",mid:"#FF9800",glow:"#FFE082",particle:"#FFF8E1",shell:"#F57C00",ribbon:"#00E5FF"}:dh}function Pg(s,t,e,n){const i=new Lt;i.userData.orbit=e;for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=v(i,new Et(.035+r%2*.012,5,5),In(t,1.2,.9),Math.cos(a)*e,Math.sin(r*1.5)*.06,Math.sin(a)*e,!1);o.userData.angle=a,o.userData.orbit=e,o.userData.wobble=r*1.1}return s.add(i),i}function Fg(s,t,e,n){const i=new Lt;i.position.y=n,v(i,new L(.34*t,.05*t,.36*t),In(e.ribbon,.85),0,0,0,!1),v(i,new L(.05*t,.28*t,.36*t),In(e.ribbon,.85),0,.02*t,0,!1);for(const r of[-1,1])v(i,new Et(.07*t,6,6),In(e.ribbon,1),r*.08*t,.16*t,.06*t,!1);return v(i,new L(.14*t,.04*t,.02*t),A("#FFFDE7",{emissive:"#FFFFFF",emissiveIntensity:.35}),0,.14*t,.2*t),s.add(i),i}function Dg(s,t){v(s,new L(.38*t,.05*t,.02*t),A("#FFEB3B",{emissive:"#FFC107",emissiveIntensity:.45}),0,-.02*t,.2*t);for(let e=0;e<3;e++)v(s,new L(.08*t,.055*t,.025*t),A(e%2===0?"#212121":"#FFEB3B"),-.1*t+e*.1*t,-.02*t,.22*t)}function Sr(s,t=dh){const e=s==="pickup"?1:s==="carried"?.36:s==="throw"?.58:.48,n=new Lt;n.userData.packageOrb=!0,n.userData.theme={...t};const i=s==="pickup"?.55:s==="carried"?0:.35,r=new Lt;r.position.y=i,n.add(r);let a;s==="pickup"&&(a=v(n,new Qe(.38*e,.62*e,O?12:18),Yl(t.glow,.38),0,.04,0,!1),a.rotation.x=-Math.PI/2,n.userData.groundRing=a);const o=v(r,new Et(.48*e,ql,ql),Yl(t.glow,.18),0,0,0,!1);n.userData.outerGlow=o;const l=v(r,new L(.42*e,.38*e,.42*e),In(t.shell,.5,.38),0,0,0,!1);n.userData.midShell=l;const c=s==="mail"?v(r,new L(.28*e,.18*e,.06*e),In(t.core,1.1),0,0,.04*e,!1):v(r,new L(.32*e,.3*e,.32*e),In(t.core,1.25),0,0,0,!1);n.userData.core=c,v(r,new Et(.1*e,6,6),In("#FFFFFF",1.2,.82),.08*e,.1*e,.14*e,!1),s!=="mail"?(Fg(r,e,t,.18*e),s!=="carried"&&Dg(c,e)):v(r,new L(.06*e,.12*e,.02*e),In(t.ribbon,1),0,.02*e,.08*e,!1);const h=s==="carried"?.28*e:.42*e;return n.userData.particles=Pg(r,t.particle,h,s==="carried"?3:Cg),{group:n,core:c,outerGlow:o,midShell:l,groundRing:a}}function Lg(s,t,e){const n=Rg(t);s.userData.theme=n,s.traverse(i=>{if(!(i instanceof re))return;const r=s.userData;i===r.core&&i.material instanceof ye&&(i.material.color.set(n.core),i.material.emissive.set(n.core),i.material.emissiveIntensity=.9+e*.4),i===r.outerGlow&&i.material instanceof Rt&&i.material.color.set(n.glow),i===r.midShell&&i.material instanceof ye&&(i.material.color.set(n.shell),i.material.emissive.set(n.shell)),i===r.groundRing&&i.material instanceof Rt&&i.material.color.set(n.glow)})}function fh(s,t,e=0,n=!0){if(n){const h=Math.sin(t*3+e)*.12;s.position.y=h}s.rotation.y=t*1.4+e;const i=s.userData.core,r=s.userData.outerGlow,a=s.userData.midShell,o=s.userData.groundRing,l=s.userData.particles,c=1+Math.sin(t*4.2+e)*.06;i&&i.scale.setScalar(c),r&&(r.scale.setScalar(1+Math.sin(t*3+e)*.08),r.material.opacity=.14+Math.sin(t*5+e)*.05),a&&(a.rotation.y=-t*2.2),o&&o.scale.setScalar(1+Math.sin(t*4+e)*.08),l&&(l.rotation.y=t*1.6,l.children.forEach((h,u)=>{if(!(h instanceof re))return;const d=h.userData.angle+t*(1.1+u%3*.12),f=h.userData.orbit;h.position.x=Math.cos(d)*f,h.position.z=Math.sin(d)*f,h.position.y=Math.sin(t*4+h.userData.wobble)*.08}))}function Ig(s,t){const e=s.userData.core,n=s.userData.outerGlow,i=1+Math.sin(t*4)*.04;e&&e.scale.setScalar(i),n&&(n.scale.setScalar(i),n.material.opacity=.12+Math.sin(t*5)*.05);const r=s.userData.particles;r&&(r.rotation.y=t*1.2)}function ph(s){Ze(s)}function $l(s,t,e){const n=new Lt;return n.position.set(s,.48,.02),v(n,new Mn(.085,.22,5,8),t,0,-.12,0),v(n,new Mn(.075,.18,5,8),t,0,-.38,0),v(n,new L(.15,.09,.26),e,0,-.54,.05),v(n,new L(.12,.04,.06),A("#37474F",{roughness:.85}),0,-.54,.16),n}function Zl(s,t,e,n){const i=new Lt;i.position.set(s*.34,1.1,0),v(i,new Mn(.065,.2,5,8),t,0,-.08,0),v(i,new Mn(.055,.18,5,8),e,0,-.3,0),v(i,new Et(.065,8,8),n,0,-.46,0);for(const r of[-.035,0,.035])v(i,new Mn(.014,.045,3,4),n,r,-.52,.02);return i}function Ug(s,t){const e=new Lt;e.position.set(0,1,-.1);const n=A(t.packMain,{roughness:.88}),i=A(t.packDark,{roughness:.92}),r=A("#263238",{roughness:.8}),a=A("#90A4AE",{metalness:.72,roughness:.35}),o=A(t.packTrim,{emissive:t.packTrim,emissiveIntensity:.18});v(e,new L(.4,.44,.13),i,0,.06,-.04),v(e,new L(.38,.14,.12),n,0,.3,-.03),v(e,new L(.42,.05,.14),i,0,.36,-.04);for(const c of[-.13,.13])v(e,new L(.055,.34,.035),r,c,.26,.04),v(e,new L(.045,.2,.03),r,c*.85,.46,.06),v(e,new L(.07,.035,.025),a,c,.2,.06);v(e,new L(.44,.05,.03),r,0,-.08,.02),v(e,new L(.08,.06,.025),a,0,-.08,.04);for(const c of[-1,1])v(e,new L(.09,.16,.09),n,c*.22,.02,.01),v(e,new L(.1,.03,.01),o,c*.22,.1,.06);v(e,new L(.41,.035,.01),o,0,.14,.07);const l=Sr("carried");return l.group.position.set(0,.46,.04),l.group.rotation.y=.35,e.add(l.group),v(e,new ot(.01,.01,.12,6),A("#455A64",{metalness:.65}),.15,.42,.03),v(e,new Et(.022,8,8),A("#00E676",{emissive:"#00E676",emissiveIntensity:.75}),.15,.49,.03),s.add(e),{pack:e,vipPouch:l.core,vipGlow:l.outerGlow,packageOrb:l.group}}function Ng(){const s=new Lt,t=A("#607D8B",{metalness:.78,roughness:.28}),e=A("#37474F",{metalness:.82,roughness:.22}),n=A("#FF9800",{emissive:"#FF9800",emissiveIntensity:.3});v(s,new L(.07,.15,.08),e,0,-.07,.01),v(s,new L(.05,.04,.05),A("#263238",{roughness:.9}),.04,-.1,.02),v(s,new L(.12,.12,.28),t,0,.02,.1),v(s,new L(.1,.035,.2),A("#FFF8E1",{roughness:.7}),0,.09,.08),v(s,new L(.08,.006,.16),n,0,.115,.08);for(const r of[-.035,.035])v(s,new L(.012,.05,.14),e,r,.02,.1);v(s,new ot(.038,.044,.2,8),e,0,.02,.32),v(s,new ot(.032,.038,.08,8),t,0,.02,.44);const i=v(s,new tn(.048,.01,6,12),A("#00E5FF",{emissive:"#00E5FF",emissiveIntensity:.65}),0,.02,.5);return i.userData.isMailMuzzle=!0,v(s,new L(.018,.03,.05),A("#00E676",{emissive:"#00E676",emissiveIntensity:.7}),0,.1,.22),v(s,new L(.04,.025,.06),A("#455A64",{metalness:.6}),0,.1,.14),s.rotation.set(-.2,-.15,.05),{gun:s,muzzle:i}}function mh(s){const t=new Lt,e=new Lt,n=A(s.skin),i=A(s.jacket,{roughness:.4,metalness:.08}),r=A(s.jacketLight,{roughness:.35}),a=A(s.jacketTrim,{emissive:s.jacketTrim,emissiveIntensity:.2}),o=A(s.hat,{roughness:.45,metalness:.1}),l=A(s.hatBrim,{roughness:.5}),c=A("#263238",{roughness:.85}),h=A("#1A1A1A",{roughness:.9,metalness:.15}),u=A("#80DEEA",{emissive:"#00BCD4",emissiveIntensity:.55,metalness:.65,transparent:!0,opacity:.88}),d=new Lt;v(d,new L(.82,.09,1.15),A("#37474F",{metalness:.45,roughness:.55}),0,.06,.04),v(d,new L(.7,.035,1),A("#546E7A",{metalness:.35,roughness:.65}),0,.11,.04),v(d,new L(.55,.02,.85),A("#263238",{roughness:.9}),0,.13,.04);for(const P of[-.3,.3])v(d,new ot(.1,.1,.035,12),A("#78909C",{metalness:.65,roughness:.4}),P,.05,-.38),v(d,new tn(.11,.014,8,16),A("#455A64",{metalness:.5}),P,.05,-.38,!1);t.add(d),v(e,new Mn(.22,.18,6,10),c,0,.58,0),v(e,new Mn(.26,.42,8,12),i,0,.98,0),v(e,new L(.5,.1,.28),r,0,1.18,.02),v(e,new L(.52,.08,.3),a,0,1.26,.01),v(e,new L(.14,.28,.06),a,0,1,.17);for(const P of[-1,1])v(e,new Et(.11,10,8),r,P*.32,1.22,0);v(e,new Et(.24,14,12),n,0,1.48,.02),v(e,new Et(.27,14,12,0,Math.PI*2,0,Math.PI*.55),o,0,1.52,0),v(e,new L(.44,.12,.14),l,0,1.62,.06),v(e,new L(.38,.09,.05),u,0,1.52,.22);const f=$l(-.13,c,h),g=$l(.13,c,h);e.add(f,g);const _=Zl(-1,i,r,n),m=Zl(1,i,r,n);e.add(_,m);const{pack:p,vipPouch:b,vipGlow:x,packageOrb:y}=Ug(e,s),{gun:C,muzzle:T}=Ng();return C.position.set(.08,-.4,.1),m.add(C),e.position.y=.28,t.add(e),{mesh:t,body:e,leftLeg:f,rightLeg:g,leftArm:_,rightArm:m,packageMesh:b,packageGlow:x,packageOrb:y,hoverboard:d,backpack:p,mailGun:C,mailGunMuzzle:T}}class kg{constructor(t,e){F(this,"mesh");F(this,"x",0);F(this,"z",0);F(this,"targetX",0);F(this,"hurtFlash",0);F(this,"runPhase",0);F(this,"jumpY",0);F(this,"ghostMode",!1);F(this,"jumpVel",0);F(this,"jumpPower",12);F(this,"isJumping",!1);F(this,"isSliding",!1);F(this,"slideTimer",0);F(this,"baseBodyY",.28);F(this,"shadow");F(this,"speedTrails",[]);F(this,"trailPhase",0);F(this,"nightLevel",0);F(this,"footLight");F(this,"playerLight");F(this,"headLight");F(this,"mailGunMuzzle");F(this,"visorMesh",null);F(this,"body");F(this,"leftLeg");F(this,"rightLeg");F(this,"leftArm");F(this,"rightArm");F(this,"packageOrb");F(this,"hoverboard");F(this,"backpack");F(this,"characterName");this.characterName=e.name;const n=mh(e);this.mesh=n.mesh,this.body=n.body,this.leftLeg=n.leftLeg,this.rightLeg=n.rightLeg,this.leftArm=n.leftArm,this.rightArm=n.rightArm,this.packageOrb=n.packageOrb,this.hoverboard=n.hoverboard,this.backpack=n.backpack,this.mailGunMuzzle=n.mailGunMuzzle,this.mailGunMuzzle.userData.baseEmissiveIntensity=this.mailGunMuzzle.material.emissiveIntensity,this.body.traverse(r=>{r instanceof re&&r.material instanceof ye&&(r.material.emissive&&r.material.emissive.getHex()>0&&r!==this.mailGunMuzzle&&(r.userData.baseEmissiveIntensity=r.material.emissiveIntensity),r.material.transparent&&r.material.opacity<1&&r.position.y>1.45&&(this.visorMesh=r))}),this.shadow=v(t,new Ie(.42,12),new Rt({color:"#000000",transparent:!0,opacity:.28,depthWrite:!1}),0,.03,0,!1),this.shadow.rotation.x=-Math.PI/2;const i=new Rt({color:"#80DEEA",transparent:!0,opacity:0,blending:qt,depthWrite:!1,side:se});for(let r=0;r<(O?3:4);r++){const a=v(t,new ce(.35,.06),i.clone(),0,.12,0,!1);a.rotation.x=-Math.PI/2,a.visible=!1,this.speedTrails.push(a)}this.footLight=v(t,new Ie(.22,10),new Rt({color:"#B0BEC5",transparent:!0,opacity:0,blending:qt,depthWrite:!1}),0,.035,0,!1),this.footLight.rotation.x=-Math.PI/2,this.playerLight=new ur("#FFF8E1",0,9,1.35),this.playerLight.position.set(0,1.15,.35),this.mesh.add(this.playerLight),this.headLight=new ur("#E1F5FE",0,16,1.15),this.headLight.position.set(0,1.6,2.8),this.mesh.add(this.headLight),t.add(this.mesh)}update(t,e,n,i=12,r=0){this.x+=(this.targetX-this.x)*Math.min(1,9*t),this.x=Oi.clamp(this.x,-e,e),this.targetX=Oi.clamp(this.targetX,-e,e),this.slideTimer>0&&(this.slideTimer-=t,this.slideTimer<=0&&(this.slideTimer=0,this.isSliding=!1)),this.isJumping&&(this.jumpVel-=34*t,this.jumpY+=this.jumpVel*t,this.jumpY<=0&&(this.jumpY=0,this.jumpVel=0,this.isJumping=!1)),this.mesh.position.set(this.x,this.jumpY,this.z),this.shadow.position.set(this.x,.03,this.z);const o=1-Math.min(.45,this.jumpY*.12);this.shadow.scale.set(o,o,1),this.shadow.material.opacity=.18+o*.14,this.nightLevel=r,this.updateNightGear(n);const l=n&&i>13&&!this.isJumping;l&&(this.trailPhase+=t*(i*.8));for(let c=0;c<this.speedTrails.length;c++){const h=this.speedTrails[c];if(!l){h.visible=!1;continue}h.visible=!0;const u=c/this.speedTrails.length;h.position.set(this.x+Math.sin(this.trailPhase+c)*.08,.08+u*.04,this.z+.45+c*.22),h.rotation.z=this.x*.04;const d=h.material;d.opacity=(.35-u*.28)*Math.min(1,(i-12)/8),h.scale.set(.8+(1-u)*.6,1,1)}if(this.isSliding)this.body.position.y=.08,this.body.rotation.x=.55,this.leftLeg.rotation.x=1.1,this.rightLeg.rotation.x=1.25,this.leftArm.rotation.x=.35,this.rightArm.rotation.x=.35,this.hoverboard.rotation.x=.15,this.hoverboard.position.y=.02,this.backpack.rotation.x=.25;else if(n){this.runPhase+=t*13;const c=Math.sin(this.runPhase)*.48;this.leftLeg.rotation.x=c,this.rightLeg.rotation.x=-c,this.leftArm.rotation.x=-c*.5,this.rightArm.rotation.x=c*.5,this.body.rotation.x=0,this.body.position.y=this.baseBodyY+Math.abs(Math.sin(this.runPhase*2))*.045,this.hoverboard.rotation.x=0,this.hoverboard.position.y=0,this.isJumping&&(this.leftLeg.rotation.x=-.65,this.rightLeg.rotation.x=-.35,this.body.position.y=this.baseBodyY+.15,this.body.rotation.x=-.08),this.hoverboard.rotation.z=this.x*.032,this.backpack.rotation.x=Math.sin(this.runPhase)*.04,this.backpack.rotation.z=Math.sin(this.runPhase*.5)*.03}else this.body.rotation.x=0,this.body.position.y=this.baseBodyY;if(Ig(this.packageOrb,Date.now()*.001),this.hurtFlash>0){this.hurtFlash-=t;const c=this.hurtFlash>0;this.body.traverse(h=>{h instanceof re&&h.material instanceof ye&&(h.material.emissive.set(c?"#FF1744":"#000000"),h.material.emissiveIntensity=c?.55:0)})}}updateNightGear(t){var a;const e=this.nightLevel;this.playerLight.intensity=e*(O?3.2:4.4),this.playerLight.color.set(e>.5?"#E1F5FE":"#FFF8E1"),this.headLight.intensity=e*(O?2.4:3.6),this.headLight.color.set("#B3E5FC");const n=this.footLight.material;n.opacity=e*.22,this.footLight.position.set(this.x,.035,this.z),this.footLight.visible=e>.04;const i=this.mailGunMuzzle.material,r=this.mailGunMuzzle.userData.baseEmissiveIntensity??.65;if(i.emissiveIntensity=r+e*.55+(t?.14:0),((a=this.visorMesh)==null?void 0:a.material)instanceof ye){const o=this.visorMesh.material,l=this.visorMesh.userData.baseEmissiveIntensity??.55;o.emissiveIntensity=l+e*.45}this.body.traverse(o=>{if(!(o instanceof re)||!(o.material instanceof ye)||o===this.mailGunMuzzle||o===this.visorMesh)return;const l=o.userData.baseEmissiveIntensity;if(l!==void 0){o.material.emissiveIntensity=l+e*.35;return}e>.08&&!o.material.transparent&&(o.material.emissive.set("#FFF3E0"),o.material.emissiveIntensity=e*.18)})}knockback(t,e=1.2){this.targetX+=this.x>=t?e:-e}jump(){return this.isJumping||this.isSliding?!1:(this.isJumping=!0,this.jumpVel=this.jumpPower,!0)}slide(){return this.isJumping||this.isSliding?!1:(this.isSliding=!0,this.slideTimer=.82,!0)}setJumpPower(t){this.jumpPower=t}flashHurt(){this.hurtFlash=.45}setGhostMode(t){this.ghostMode=t;const e=t?.22:1;this.mesh.traverse(n=>{if(n instanceof re&&n!==this.shadow){const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i)r.transparent=t||r.transparent,r.opacity=e}})}throwAnim(){this.rightArm.rotation.x=-1.5,setTimeout(()=>{this.rightArm.rotation.x=0},220)}mailGunAnim(){this.rightArm.rotation.x=-.85;const t=this.mailGunMuzzle.material;t.emissiveIntensity=1.4,setTimeout(()=>{this.rightArm.rotation.x=0,this.updateNightGear(!0)},120)}setPackageGlow(t,e){Lg(this.packageOrb,e,t)}dashOffset(){this.z+=4}dispose(t){t.remove(this.mesh),t.remove(this.shadow),t.remove(this.footLight);for(const e of this.speedTrails)t.remove(e),e.geometry.dispose(),e.material.dispose();this.speedTrails=[],Ze(this.mesh),this.shadow.geometry.dispose(),this.shadow.material.dispose(),this.footLight.geometry.dispose(),this.footLight.material.dispose()}}class Bg{constructor(t){F(this,"group");F(this,"units",[]);F(this,"reactTimer",0);F(this,"reactKind","none");F(this,"count",0);this.scene=t,this.group=new Lt,t.add(this.group)}setCount(t){for(this.count=Math.max(0,t);this.units.length<this.count;)this.units.push(this.buildHelper());for(;this.units.length>this.count;){const e=this.units.pop();this.group.remove(e),Ze(e)}this.layout()}reactQuake(){this.reactKind="swerve",this.reactTimer=.85}reactTurbo(){this.reactKind="honk",this.reactTimer=.65}buildHelper(){const t=new Lt,e=A("#FF6F00",{emissive:"#E65100",emissiveIntensity:.2}),n=A("#FFCC80");v(t,new Mn(.14,.26,4,8),A("#37474F"),0,.38,0),v(t,new Mn(.15,.28,4,8),e,0,.52,0),v(t,new L(.22,.18,.1),A("#5D4037"),0,.52,-.1),v(t,new Et(.15,10,8),n,0,.82,.02),v(t,new L(.28,.06,.05),A("#FFD54F"),0,.94,.04);for(const i of[-.05,.05])v(t,new Et(.025,6,6),A("#111"),i,.84,.1);return v(t,new L(.06,.02,.02),A("#FF8A65"),0,.78,.12),this.group.add(t),t}layout(){const t=Math.ceil(Math.sqrt(Math.max(1,this.count)));this.units.forEach((e,n)=>{const i=Math.floor(n/t),r=n%t;e.position.set((r-(t-1)/2)*.55,0,-(i+1)*.58)})}update(t,e,n){this.reactTimer>0&&(this.reactTimer-=.016),this.group.position.set(t,0,e),this.units.forEach((i,r)=>{let a=Math.sin(n*4+r)*.12,o=Math.sin(n*7+r*.6)*.035;this.reactTimer>0&&(this.reactKind==="honk"?(a+=Math.sin(n*22+r)*.18,o+=.04):this.reactKind==="swerve"&&(i.position.x+=Math.sin(n*16+r*2)*.12,i.rotation.z=Math.sin(n*12+r)*.12)),i.rotation.y=a,i.position.y=o,this.reactKind!=="swerve"&&(i.rotation.z=Math.sin(n*5+r)*.04)})}dispose(){for(const t of this.units)Ze(t);this.units=[],this.scene.remove(this.group)}}function zg(s,t,e){const n=new Lt;n.position.set(0,0,t);const r=Kl(2.35,e==="left"),a=Kl(-2.35,e==="right");n.add(r.panel,a.panel);const o=v(n,new L(.18,3.5,.12),A("#37474F",{roughness:.8}),0,1.75,.05);return s.add(n),{kind:"route",mesh:n,z:t,safeSide:e,resolved:!1,leftMesh:r.panel,rightMesh:a.panel,leftPortal:r.portal,rightPortal:a.portal,leftLabel:r.label,rightLabel:a.label,centerWall:o,animTime:0}}function Og(s,t){const e=new Lt;e.position.set(0,0,t);const n=O?16:24,i=wg();i.repeat.set(2,2);const r=v(e,new ot(3.6,3.9,.28,n),new ye({map:i,color:"#FFD54F",emissive:"#FF8F00",emissiveIntensity:.45,metalness:.35,roughness:.45}),0,.16,0);v(e,new ot(3.15,3.15,.04,n),A("#00E676",{emissive:"#00E676",emissiveIntensity:.55,transparent:!0,opacity:.55}),0,.32,0,!1);const a=[];for(const[h,u,d,f]of[[3,3.25,.08,.45],[2.4,2.58,.12,.35],[1.75,1.92,.16,.5]]){const g=v(e,new Qe(h,u,n),new Rt({color:"#FFD54F",transparent:!0,opacity:f*.55,side:se}),0,d,0,!1);g.rotation.x=-Math.PI/2,a.push(g)}for(let h=0;h<6;h++){const u=h/6*Math.PI*2,d=Math.cos(u)*3.35,f=Math.sin(u)*3.35;v(e,new L(.12,2.8,.12),A("#37474F",{metalness:.5,roughness:.4}),d,1.4,f),v(e,new L(.08,2.4,.04),A("#00E676",{emissive:"#00E676",emissiveIntensity:.85}),d+Math.cos(u)*.08,1.4,f+Math.sin(u)*.08),v(e,new Et(.14,8,8),A("#FFD54F",{emissive:"#FFC107",emissiveIntensity:1}),d,2.85,f)}const o=v(e,new ot(.15,1.8,5.5,n,1,!0),new Rt({color:"#69F0AE",transparent:!0,opacity:.22,side:se,depthWrite:!1,blending:qt}),0,2.75,0,!1);for(const h of[-1,1]){const u=v(e,new cn(.35,.7,4),A("#FFD54F",{emissive:"#FFAB00",emissiveIntensity:.65,transparent:!0,opacity:.75}),h*2.2,3.8,0,!1);u.rotation.z=h*Math.PI}v(e,new L(.55,.45,.35),A("#FF9800",{emissive:"#FF6F00",emissiveIntensity:.6}),0,4.2,0),v(e,new L(.6,.08,.08),A("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.8}),0,4.48,0);const l=Ql("◆ DROP-OFF ZONE ◆","#00E676","rgba(0,20,40,0.82)");l.position.set(0,5.2,0),l.scale.set(6,1.4,1),e.add(l);const c=Ql("DELIVER PACKAGE TO WIN","#FFD54F","rgba(0,0,0,0.65)");return c.position.set(0,4.35,0),c.scale.set(4.5,.75,1),e.add(c),s.add(e),{kind:"dropoff",mesh:e,z:t,reached:!1,platform:r,rings:a,beam:o,holoSign:l}}function jl(s,t,e){const n=new Lt;n.position.set(0,0,t);const i=e==="jump",r=i?.48:1.82,a=i?1.28:2.72,o=O?8:12,l=i?"#FFD54F":"#E040FB",c=i?"#80DEEA":"#EA80FC",h=i?"#FFEB3B":"#E1BEE7",u=i?"#B2FF59":"#B388FF",d=i?"#CCFF90":"#CE93D8";v(n,new L(.14,.05,.55),A("#37474F",{metalness:.4}),-2.4,.025,.18),v(n,new ot(.05,.06,.45,6),A("#455A64",{metalness:.55}),-2.55,.04,-.12),v(n,new L(.1,.04,.35),A("#263238"),2.1,.02,-.08);for(const[x,y]of[[-3.7,0],[3.7,-.12]]){const C=v(n,new ot(.085,.105,a,o),A("#6D4C41",{roughness:.92}),x,a/2,0);C.rotation.z=y,v(n,new L(.48,.06,.06),A("#546E7A",{metalness:.45,roughness:.5}),x+y*.35,r+.02,.04),v(n,new ot(.055,.07,.12,6),A("#ECEFF1",{roughness:.45}),x+y*.4,r,.06)}const f=7.35,g=O?4:6;for(let x=0;x<g;x++){const y=x/g,C=(x+1)/g,T=-f/2+y*f,P=-f/2+C*f,I=r-.1*Math.sin(y*Math.PI),M=r-.1*Math.sin(C*Math.PI),w=(T+P)/2,U=(I+M)/2,X=Math.hypot(P-T,M-I),V=Math.atan2(M-I,P-T),$=v(n,new ot(.055,.055,X,8),A("#37474F",{metalness:.65,roughness:.4}),w,U,0);$.rotation.z=V-Math.PI/2}const _=v(n,new ot(i?.07:.085,i?.07:.085,f,o),A("#263238",{metalness:.75,roughness:.35,emissive:l,emissiveIntensity:i?.15:.35}),0,r-.05,0);_.rotation.z=Math.PI/2;const m=v(n,new ot(i?.11:.14,i?.11:.14,f-.05,o),new Rt({color:c,transparent:!0,opacity:i?.32:.48,blending:qt,depthWrite:!1}),0,r-.05,0,!1);m.rotation.z=Math.PI/2;const p=[],b=O?5:8;for(let x=0;x<b;x++){const y=x/(b-1),C=-f/2+.4+y*(f-.8),T=r-.1*Math.sin(y*Math.PI)-.05,P=v(n,new Et(.035+x%2*.015,6,6),new Rt({color:x%3===0?h:u,transparent:!0,opacity:i?.65:.78,blending:qt,depthWrite:!1}),C,T+x%2*.06,(x%3-1)*.08,!1);P.userData.isSpark=!0,P.userData.sparkPhase=x,P.userData.baseY=P.position.y,p.push(P)}for(let x=0;x<(O?2:4);x++){const y=v(n,new ce(.32,.06),new Rt({color:d,transparent:!0,opacity:i?.4:.55,side:se,blending:qt,depthWrite:!1}),-2.2+x*1.45,r-.14-x%2*.05,.1,!1);y.userData.isArc=!0,y.userData.sparkPhase=x+.5,p.push(y)}return s.add(n),{kind:"vault",mesh:n,z:t,clearance:e,resolved:!1,penalized:!1,barrierMesh:_,glowMesh:m,sparks:p}}function Hg(s,t){if(s.resolved){s.mesh.visible=!1;return}const e=s.clearance==="slide",n=.22+Math.sin(t*14+s.z)*.1+Math.sin(t*27)*.06,i=s.glowMesh.material;i.opacity=(n+.12)*(e?1.35:1);const r=s.barrierMesh.material,a=e?.25:.1;r.emissiveIntensity=a+Math.abs(Math.sin(t*11+s.z*.3))*(e?.55:.35);for(const o of s.sparks){const l=o.userData.sparkPhase??0,c=o.material;o.userData.isArc?(c.opacity=.08+Math.abs(Math.sin(t*9+l*1.7))*.42,o.scale.x=.7+Math.abs(Math.sin(t*13+l))*.55,o.rotation.z=Math.sin(t*6+l)*.35):(c.opacity=.2+Math.abs(Math.sin(t*16+l*2.1))*.55,o.position.y=o.userData.baseY+Math.sin(t*20+l)*.012)}}const ca={},ha={};function Gg(s){const t=s?"safe":"die";if(ca[t])return ca[t];const e=256,n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d"),r=e/2,a=e/2;i.fillStyle="#000000",i.fillRect(0,0,e,e);const o=i.createRadialGradient(r,a,0,r,a,e*.48);o.addColorStop(0,s?"#000810":"#120008"),o.addColorStop(.22,s?"#003328":"#3a0018"),o.addColorStop(.55,s?"#00C853":"#D50000"),o.addColorStop(.78,s?"#004D40":"#4A0020"),o.addColorStop(1,"#000000"),i.fillStyle=o,i.fillRect(0,0,e,e);for(let c=0;c<6;c++){i.beginPath(),i.strokeStyle=s?"rgba(105,240,174,0.75)":"rgba(255,82,82,0.78)",i.lineWidth=c%2===0?4:2.5;for(let h=0;h<140;h++){const u=c*(Math.PI/3)+h*.105,d=6+h*.82,f=r+Math.cos(u)*d,g=a+Math.sin(u)*d;h===0?i.moveTo(f,g):i.lineTo(f,g)}i.stroke()}i.globalCompositeOperation="lighter";for(let c=0;c<6;c++){i.beginPath(),i.strokeStyle=s?"rgba(178,255,89,0.35)":"rgba(255,138,128,0.38)",i.lineWidth=8;for(let h=0;h<90;h++){const u=c*(Math.PI/3)+h*.105+.4,d=20+h*.82,f=r+Math.cos(u)*d,g=a+Math.sin(u)*d;h===0?i.moveTo(f,g):i.lineTo(f,g)}i.stroke()}i.globalCompositeOperation="source-over";for(let c=0;c<16;c++){const h=c/16*Math.PI*2,u=e*.36+c%2*6,d=r+Math.cos(h)*u,f=a+Math.sin(h)*u;i.fillStyle=s?"rgba(0,229,255,0.55)":"rgba(255,64,129,0.55)",i.beginPath(),i.moveTo(d,f-5),i.lineTo(d+4,f+3),i.lineTo(d-4,f+3),i.closePath(),i.fill()}const l=new Be(n);return l.colorSpace=ue,ca[t]=l,l}function Vg(s){const t=s?"safe":"die";if(ha[t])return ha[t];const e=256,n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d"),r=e/2,a=e/2;i.clearRect(0,0,e,e);for(let l=0;l<24;l++){const c=l/24*Math.PI*2,h=e*.41,u=r+Math.cos(c)*h,d=a+Math.sin(c)*h;i.save(),i.translate(u,d),i.rotate(c+Math.PI/2),i.strokeStyle=s?"rgba(105,240,174,0.85)":"rgba(255,82,82,0.85)",i.lineWidth=2,i.beginPath(),i.moveTo(0,-7),i.lineTo(5,0),i.lineTo(0,7),i.lineTo(-5,0),i.closePath(),i.stroke(),i.restore()}i.strokeStyle=s?"rgba(0,229,255,0.35)":"rgba(255,64,129,0.35)",i.lineWidth=3,i.beginPath(),i.arc(r,a,e*.43,0,Math.PI*2),i.stroke();const o=new Be(n);return o.colorSpace=ue,ha[t]=o,o}function Wg(s){const t=new Lt;t.userData.isSafe=s;const e=s?"#00E676":"#FF1744",n=s?"#69F0AE":"#FF5252",i=s?"#00E5FF":"#EA80FC",r=O?24:36,a=Gg(s),o=Vg(s);v(t,new Ie(1.08,r),new Rt({color:s?"#001a14":"#1a0008",transparent:!0,opacity:.92,depthWrite:!1}),0,0,-.06,!1);const l=O?4:6;for(let g=0;g<l;g++){const _=g/l,m=1-_*.55,p=v(t,new Qe(.32*m,.48*m,r),new Rt({color:g%2===0?e:n,transparent:!0,opacity:.22-_*.08,blending:qt,depthWrite:!1,side:se}),0,0,-.02+_*.04,!1);p.userData.tunnelIndex=g,p.userData.tunnelSpeed=g%2===0?1.6-_*.4:-(1.2-_*.3)}const c=v(t,new Ie(.98,r),new Rt({map:a,transparent:!0,opacity:.92,blending:qt,depthWrite:!1}),0,0,.02,!1);c.userData.portalLayer="vortexA";const h=v(t,new Ie(.82,r),new Rt({map:a,transparent:!0,opacity:.55,blending:qt,depthWrite:!1,color:s?"#B2FF59":"#FF8A80"}),0,0,.05,!1);h.userData.portalLayer="vortexB";const u=v(t,new Ie(1.02,r),new Rt({map:o,transparent:!0,opacity:.78,blending:qt,depthWrite:!1}),0,0,.07,!1);u.userData.portalLayer="runes";for(const g of[-.92,.92]){const _=v(t,new L(.1,1.65,.08),new ye({color:"#263238",metalness:.55,roughness:.35,emissive:e,emissiveIntensity:.25}),g,0,.04);v(_,new L(.04,1.45,.02),new Rt({color:i,transparent:!0,opacity:.65,blending:qt,depthWrite:!1}),g>0?-.03:.03,0,.05,!1),_.userData.portalLayer="pillar"}for(let g=0;g<(O?3:5);g++){const _=v(t,new Qe(.88+g*.08,.96+g*.08,r),new Rt({color:g%2===0?n:i,transparent:!0,opacity:.14-g*.02,blending:qt,depthWrite:!1,side:se}),0,0,.03+g*.004,!1);_.userData.portalLayer="corona",_.userData.coronaIndex=g}const d=v(t,new Ie(.18,O?12:16),new Rt({color:"#FFFFFF",transparent:!0,opacity:.75,blending:qt,depthWrite:!1}),0,0,.09,!1);d.userData.portalLayer="core";const f=O?6:10;for(let g=0;g<f;g++){const _=v(t,new ce(.08,.42),new Rt({color:i,transparent:!0,opacity:.35,blending:qt,depthWrite:!1,side:se}),0,0,.08,!1);_.userData.portalLayer="shard",_.userData.shardIndex=g,_.userData.shardCount=f}return t}function Jl(s,t,e){const n=1+Math.sin(t*3.8)*.035;s.scale.set(n,n,1);const i=e?"#00E676":"#FF1744",r=e?"#69F0AE":"#FF5252";for(const a of s.children){const o=a.userData,l=o.portalLayer;if(o.tunnelIndex!==void 0){a.rotation.z=t*o.tunnelSpeed;const c=a.material;c.opacity=.2-o.tunnelIndex*.03+Math.sin(t*4+o.tunnelIndex)*.06}if(l==="vortexA"){a.rotation.z=t*1.35;const c=a.material;c.opacity=.78+Math.sin(t*5)*.12}else if(l==="vortexB")a.rotation.z=-t*.95,a.scale.setScalar(.92+Math.sin(t*2.6)*.06);else if(l==="runes"){a.rotation.z=t*.45;const c=a.material;c.opacity=.62+Math.sin(t*6)*.14}else if(l==="core"){const c=1+Math.sin(t*7)*.18;a.scale.set(c,c,1);const h=a.material;h.opacity=.55+Math.sin(t*8)*.25,h.color.set(e?"#E0F7FA":"#FFCDD2")}else if(l==="corona"){a.rotation.z=t*(.6+o.coronaIndex*.15)*(e?1:-1);const c=a.material;c.opacity=.1+Math.sin(t*3.5+o.coronaIndex)*.06}else if(l==="shard"){const c=o.shardIndex,h=o.shardCount,u=t*2.2+c/h*Math.PI*2,d=.52+Math.sin(t*3.5+c*1.7)*.22;a.position.set(Math.cos(u)*d,Math.sin(u)*d,.08+c%3*.012),a.rotation.z=u+Math.PI/2;const f=a.material;f.opacity=.15+Math.abs(Math.sin(t*5+c*2))*.35,f.color.set(c%2===0?r:i)}else l==="pillar"&&(a.rotation.z=Math.sin(t*2+a.position.x)*.02)}}function Kl(s,t){const e=new Lt;e.position.set(s,1.85,.08);const n=Wg(t);n.scale.set(1.55,1.72,1),e.add(n);const i=Xg(t),r=new re(new ce(4.15,3.55),new Rt({map:i,transparent:!0,opacity:.94,side:se,depthWrite:!1,blending:Zn}));e.add(r);const a=v(e,new ce(4.28,3.68),new Rt({color:t?"#69F0AE":"#FF5252",transparent:!0,opacity:.22,blending:qt,depthWrite:!1,side:se}),0,0,-.02,!1);a.userData.isGateRim=!0;const o=new _r(new mo({visible:!1}));return o.position.set(s,3.2,0),{panel:e,portal:n,label:o,rimGlow:a}}function Xg(s){const t=document.createElement("canvas");t.width=256,t.height=352;const e=t.getContext("2d"),n=t.width,i=t.height,r=s?"#69F0AE":"#FF5252",a=s?"#00E5FF":"#EA80FC",o=s?"rgba(20,60,40,0.55)":"rgba(60,15,25,0.58)";e.fillStyle=o,e.beginPath(),e.roundRect(16,16,n-32,i-32,18),e.fill();const l=e.createRadialGradient(n/2,i/2,20,n/2,i/2,n*.38);l.addColorStop(0,"rgba(0,0,0,0.88)"),l.addColorStop(.55,"rgba(0,0,0,0.45)"),l.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=l,e.fillRect(0,0,n,i),e.strokeStyle=r,e.lineWidth=6,e.shadowColor=r,e.shadowBlur=14,e.beginPath(),e.roundRect(20,20,n-40,i-40,16),e.stroke(),e.shadowBlur=0,e.lineWidth=2,e.strokeStyle=a,e.beginPath(),e.roundRect(34,34,n-68,i-68,12),e.stroke();for(const[h,u]of[[48,48],[n-48,48],[48,i-48],[n-48,i-48]])e.save(),e.translate(h,u),e.strokeStyle=a,e.lineWidth=3,e.beginPath(),e.moveTo(-12,0),e.lineTo(0,-12),e.lineTo(12,0),e.lineTo(0,12),e.closePath(),e.stroke(),e.beginPath(),e.arc(0,0,16,0,Math.PI*2),e.stroke(),e.restore();e.fillStyle=s?"rgba(105,240,174,0.18)":"rgba(255,82,82,0.18)",e.font="bold 28px Segoe UI, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(s?"◆ WARP ◆":"☠ VOID ☠",n/2,i-52);const c=new Be(t);return c.colorSpace=ue,c}function Ql(s,t,e){const n=document.createElement("canvas");n.width=512,n.height=128;const i=n.getContext("2d");i.fillStyle=e,i.beginPath(),i.roundRect(8,8,496,112,14),i.fill(),i.strokeStyle="rgba(255,255,255,0.15)",i.lineWidth=2,i.stroke(),i.fillStyle=t,i.font="bold 72px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,256,64);const r=new Be(n);return new _r(new mo({map:r,transparent:!0,depthTest:!1}))}function qg(s,t){s.animTime=t;const e=s.safeSide==="left",n=1+Math.sin(t*3.5)*.012;s.leftMesh.scale.set(n,n,n),s.rightMesh.scale.set(n,n,n),Jl(s.leftPortal,t,e),Jl(s.rightPortal,t,!e);for(const i of[s.leftMesh,s.rightMesh]){const r=i.children.find(a=>a.userData.isGateRim);if(r){const a=r.material,o=i===s.leftMesh?e:!e;a.opacity=.16+Math.sin(t*4.5)*.08,a.color.set(o?"#69F0AE":"#FF5252")}}s.centerWall.visible=!s.resolved}function Yg(s,t){s.platform.rotation.y=t*.65,s.platform.position.y=.16+Math.sin(t*2.2)*.05,s.rings.forEach((n,i)=>{n.rotation.z=t*(i%2===0?1.2:-.9)+i;const r=n.material;r.opacity=.18+Math.sin(t*2.5+i)*.08});const e=s.beam.material;e.opacity=.14+Math.sin(t*4)*.1,s.beam.scale.set(1+Math.sin(t*5)*.06,1,1+Math.sin(t*5)*.06),s.holoSign.position.y=5.2+Math.sin(t*2.5)*.12,s.holoSign.material.opacity=.88+Math.sin(t*6)*.1}function ua(s,t){t.remove(s),s.traverse(e=>{var n;if(e instanceof re){e.geometry.dispose();const i=e.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i.dispose()}e instanceof _r&&((n=e.material.map)==null||n.dispose(),e.material.dispose())})}const $g=new ot(.25,.25,.08,O?10:14),Zg=new ye({color:"#FFD54F",emissive:"#FF8F00",emissiveIntensity:.55,metalness:.82,roughness:.22});function da(s,t,e,n=3){const i=[],r=[-3.2,-1.6,0,1.6,3.2],a=O?Math.min(e,3):e;for(let o=0;o<a;o++){const l=r[Math.floor(Math.random()*r.length)],c=new re($g,Zg);c.rotation.x=Math.PI/2,c.position.set(l,.6,t+o%2*.5),c.frustumCulled=!0,s.add(c),i.push({mesh:c,z:t+o%2*.5,x:l,collected:!1})}return i}function jg(s,t,e,n){for(const i of s){if(i.collected||!Jn(i.z,n))continue;i.mesh.rotation.z+=t*3.5,i.mesh.position.y=.6+Math.sin(e*5+i.x)*.12;const r=i.mesh.material;r.emissiveIntensity=.45+Math.sin(e*8+i.x*2)*.25}}function Jg(s,t,e,n){let i=0;const r=n*n;for(const a of s){if(a.collected)continue;const o=a.x-t,l=a.z-e;o*o+l*l<r&&(a.collected=!0,a.mesh.visible=!1,i+=5)}return i}function tc(s,t){for(const e of s)t.remove(e.mesh)}const Kg={"1-1":["newsbox-row","dog-fence","mailbox-row","package-spill"],"1-2":["dog-fence","party-tent","lawn-sprinkler","bin-alley"],"1-3":["party-tent","bin-alley","package-spill","hoa-gate"],"1-4":["bin-alley","hoa-gate","newsbox-row","lawn-sprinkler"],"1-5":["hoa-gate","newsbox-row","dog-fence","mailbox-row"],"2-1":["news-stand","food-cart","traffic-barricade","burst-hydrant"],"2-2":["food-cart","alien-beacon","bus-shelter","fallen-sign"],"2-3":["alien-beacon","fallen-sign","checkpoint","traffic-barricade"],"2-4":["fallen-sign","checkpoint","news-stand","burst-hydrant"],"2-5":["checkpoint","news-stand","food-cart","bus-shelter"],"3-1":["cactus-wall","mirage-rock","tumbleweed","sand-drift"],"3-2":["mirage-rock","rockslide","bone-arch","cactus-wall"],"3-3":["rockslide","sand-drift","sun-bleached-wreck","skull-rock"],"3-4":["sand-drift","skull-rock","tumbleweed","rockslide"],"3-5":["skull-rock","cactus-wall","mirage-rock","bone-arch"],"4-1":["fallen-log","temple-rubble","vine-snare","thorn-bramble"],"4-2":["temple-rubble","thorn-bramble","quicksand-pit","fallen-log"],"4-3":["thorn-bramble","flood-wreck","idol-shrine","temple-rubble"],"4-4":["flood-wreck","totem-gate","vine-snare","quicksand-pit"],"4-5":["totem-gate","fallen-log","flood-wreck","idol-shrine"]},So={"newsbox-row":{clearHeight:.55,radius:.9,label:"News Boxes"},"dog-fence":{clearHeight:.62,radius:1,label:"Dog Fence"},"party-tent":{clearHeight:.58,radius:1.05,label:"Party Tent"},"bin-alley":{clearHeight:.72,radius:1,label:"Bin Alley"},"hoa-gate":{clearHeight:.88,radius:1.15,label:"HOA Gate"},"mailbox-row":{clearHeight:.52,radius:.88,label:"Mailboxes"},"lawn-sprinkler":{clearHeight:.48,radius:.85,label:"Sprinklers"},"package-spill":{clearHeight:.5,radius:.92,label:"Spilled Packages"},"news-stand":{clearHeight:.68,radius:.95,label:"News Stand"},"food-cart":{clearHeight:.75,radius:1,label:"Food Cart"},"alien-beacon":{clearHeight:.55,radius:.92,label:"Alien Beacon"},"fallen-sign":{clearHeight:.48,radius:.88,label:"Fallen Sign"},checkpoint:{clearHeight:.85,radius:1.12,label:"Checkpoint"},"traffic-barricade":{clearHeight:.65,radius:1,label:"Barricades"},"burst-hydrant":{clearHeight:.55,radius:.9,label:"Burst Hydrant"},"bus-shelter":{clearHeight:.82,radius:1.05,label:"Bus Shelter"},"cactus-wall":{clearHeight:.65,radius:1.05,label:"Cactus Wall"},"mirage-rock":{clearHeight:.52,radius:.95,label:"Mirage Rocks"},rockslide:{clearHeight:.58,radius:1.08,label:"Rockslide"},"sand-drift":{clearHeight:.45,radius:.9,label:"Sand Drift"},"skull-rock":{clearHeight:.62,radius:1.05,label:"Skull Rock"},tumbleweed:{clearHeight:.42,radius:.88,label:"Tumbleweed"},"bone-arch":{clearHeight:.72,radius:1,label:"Bone Arch"},"sun-bleached-wreck":{clearHeight:.55,radius:.98,label:"Sun-Bleached Wreck"},"fallen-log":{clearHeight:.55,radius:1,label:"Fallen Log"},"temple-rubble":{clearHeight:.6,radius:1.02,label:"Temple Rubble"},"thorn-bramble":{clearHeight:.68,radius:.95,label:"Thorn Bramble"},"flood-wreck":{clearHeight:.5,radius:.98,label:"Flood Wreck"},"totem-gate":{clearHeight:.9,radius:1.15,label:"Totem Gate"},"vine-snare":{clearHeight:.62,radius:.95,label:"Vine Snare"},"quicksand-pit":{clearHeight:.38,radius:.95,label:"Quicksand"},"idol-shrine":{clearHeight:.78,radius:1.02,label:"Idol Shrine"}},Qg=["newsbox-row","dog-fence","mailbox-row","package-spill"];function gh(s){return Kg[s]??Qg}function tv(s){const t=gh(s);return t[Math.floor(Math.random()*t.length)]}function ev(s){return gh(s).map(t=>So[t].label).join(" · ")}const Fe=O?8:12;function nv(s,t){switch(t){case"newsbox-row":iv(s);break;case"dog-fence":sv(s);break;case"party-tent":rv(s);break;case"bin-alley":av(s);break;case"hoa-gate":ov(s);break;case"mailbox-row":lv(s);break;case"lawn-sprinkler":cv(s);break;case"package-spill":hv(s);break;case"news-stand":uv(s);break;case"food-cart":dv(s);break;case"alien-beacon":fv(s);break;case"fallen-sign":pv(s);break;case"checkpoint":mv(s);break;case"traffic-barricade":gv(s);break;case"burst-hydrant":vv(s);break;case"bus-shelter":_v(s);break;case"cactus-wall":xv(s);break;case"mirage-rock":yv(s);break;case"rockslide":Mv(s);break;case"sand-drift":bv(s);break;case"skull-rock":Sv(s);break;case"tumbleweed":wv(s);break;case"bone-arch":Ev(s);break;case"sun-bleached-wreck":Tv(s);break;case"fallen-log":Av(s);break;case"temple-rubble":Cv(s);break;case"thorn-bramble":Rv(s);break;case"flood-wreck":Pv(s);break;case"totem-gate":Fv(s);break;case"vine-snare":Dv(s);break;case"quicksand-pit":Lv(s);break;case"idol-shrine":Iv(s);break}}function ee(s,t){const e=v(s,new Ie(t*.98,Fe*2),A("#0a0c12",{transparent:!0,opacity:.52,roughness:1}),0,.005,0,!1);e.rotation.x=-Math.PI/2;const n=v(s,new Qe(t*.72,t*.96,Fe*2),new Rt({color:"#FF9800",transparent:!0,opacity:.42,blending:qt,depthWrite:!1}),0,.012,0,!1);n.rotation.x=-Math.PI/2,n.userData.isGlow=!0;const i=v(s,new Qe(t*.38,t*.52,Fe*2),new Rt({color:"#FFE082",transparent:!0,opacity:.22,blending:qt,depthWrite:!1}),0,.014,0,!1);i.rotation.x=-Math.PI/2;for(let r=0;r<4;r++){const a=r/4*Math.PI*2+Math.PI/4,o=v(s,new ot(.025,.035,.28,4),A("#FF9800",{emissive:"#FF9800",emissiveIntensity:.35,roughness:.6}),Math.cos(a)*t*.82,.14,Math.sin(a)*t*.82);v(o,new Et(.045,6,6),A("#FFEB3B",{emissive:"#FFC107",emissiveIntensity:.55}),0,.16,0)}}function vn(s){return A(s,{roughness:.88,metalness:.02})}function Me(s,t=.55){return A(s,{roughness:.35,metalness:t})}function vh(s,t,e,n,i){const r=v(s,new L(t,e,.06),A("#1c1c1c",{roughness:.85}),0,n,i);for(let a=0;a<Math.floor(t/.18);a++)v(r,new L(.09,e+.02,.02),A(a%2===0?"#F9A825":"#1c1c1c",{roughness:.7}),-t/2+.09+a*.18,0,.04)}function iv(s){ee(s,.95);for(const t of[-.55,0,.55]){const e=v(s,new L(.44,.68,.4),Me("#1E4E8C",.4),t,.34,0);v(e,new L(.46,.1,.42),Me("#0D2F5C"),0,.39,0),v(e,new ce(.34,.42),A("#E8F4FD",{roughness:.4}),0,.02,.21),v(e,new L(.36,.05,.02),A("#F5C518",{roughness:.5}),0,.22,.22),v(s,new ot(.02,.02,.08,6),Me("#78909C"),t+.18,.08,.15)}}function sv(s){ee(s,1);for(const t of[-.88,.88])v(s,new L(.07,.78,.07),vn("#D7CCC8"),t,.39,0),v(s,new L(.1,.1,.1),vn("#A1887F"),t,.82,0);for(let t=0;t<6;t++){const e=-.75+t*.3;v(s,new L(.26,.08,.05),vn("#EFEBE9"),e,.2+t%2*.28,0),v(s,new cn(.05,.12,4),vn("#BCAAA4"),e,.58,0)}v(s,new ot(.13,.15,.1,8),Me("#607D8B"),.38,.05,.14),v(s,new ot(.17,.14,.07,8),A("#BF360C",{roughness:.6}),-.38,.035,.12)}function rv(s){ee(s,1.05);const t=Me("#546E7A",.45);for(const[n,i]of[[-.72,-.38],[.72,-.38],[0,.48]])v(s,new ot(.035,.045,.9,8),t,n,.45,i);const e=v(s,new cn(1,.58,4),A("#C2185B",{roughness:.75}),0,.76,0);e.rotation.y=Math.PI/4,v(e,new cn(.98,.56,4),A("#880E4F",{roughness:.8}),0,.01,0);for(let n=0;n<5;n++){const i=n/5*Math.PI*2,r=v(s,new Et(.09,8,8),A(["#FDD835","#42A5F5","#66BB6A","#FF7043","#AB47BC"][n],{roughness:.5}),Math.cos(i)*.58,.38+n%2*.12,Math.sin(i)*.38);r.userData.isBob=!0,r.userData.bobPhase=n}v(s,new L(.55,.38,.52),vn("#5D4037"),0,.19,0),v(s,new ot(.04,.04,.12,6),A("#ECEFF1"),.15,.44,.1)}function av(s){ee(s,1);const t=["#2E7D32","#1565C0","#E65100"];for(let e=0;e<3;e++){const n=-.55+e*.55,i=v(s,new L(.4,.82,.4),A(t[e],{roughness:.5,metalness:.2}),n,.41,0);v(i,new L(.44,.07,.44),Me("#37474F"),0,.44,0),v(i,new L(.14,.05,.02),A("#FDD835",{roughness:.55}),0,.12,.21),v(i,new ot(.03,.03,.06,6),Me("#455A64"),.14,.55,.12),i.rotation.z=(e-1)*.07}}function ov(s){ee(s,1.15);for(const t of[-.98,.98])v(s,new L(.14,1,.14),vn("#4E342E"),t,.5,0),v(s,new Et(.11,8,8),A("#F9A825",{roughness:.45}),t,1.02,0);v(s,new L(2.05,.12,.1),Me("#455A64"),0,.88,0),vh(s,1.65,.58,.48,.07),v(s,new L(.58,.38,.05),A("#C62828",{roughness:.55}),0,.58,.11),v(s,new ce(.38,.1),A("#FAFAFA",{roughness:.6}),0,.58,.14)}function lv(s){ee(s,.88);for(const t of[-.5,0,.5]){v(s,new ot(.04,.05,.55,6),Me("#546E7A"),t,.28,0);const e=v(s,new L(.32,.28,.48),A("#1565C0",{roughness:.45,metalness:.35}),t,.58,0);v(e,new L(.34,.06,.5),Me("#0D47A1"),0,.17,0),v(e,new ce(.22,.14),A("#ECEFF1",{roughness:.4}),0,.02,.25),v(s,new L(.08,.04,.02),A("#FDD835"),t,.52,.26)}}function cv(s){ee(s,.85);for(const[t,e]of[[-.35,.1],[.35,-.08]]){v(s,new ot(.05,.07,.06,8),Me("#78909C"),t,.03,e),v(s,new ot(.04,.05,.18,8),Me("#455A64"),t,.12,e);for(let n=0;n<3;n++){const i=n/3*Math.PI*2+t,r=v(s,new ot(.008,.015,.35,4),A("#81D4FA",{transparent:!0,opacity:.55,roughness:.2}),t+Math.cos(i)*.12,.32,e+Math.sin(i)*.12);r.rotation.z=.85,r.rotation.y=i,r.userData.isBob=!0,r.userData.bobPhase=n}}v(s,new L(.7,.02,.35),A("#33691E",{roughness:.95}),0,.01,0)}function hv(s){ee(s,.92);const t=["#8D6E63","#5D4037","#795548","#6D4C41"];for(let e=0;e<5;e++){const n=-.45+e%3*.42,i=-.15+Math.floor(e/3)*.28,r=v(s,new L(.28+e%2*.06,.22+e%3*.04,.24),A(t[e],{roughness:.85}),n,.12+e%2*.08,i);r.rotation.y=e*.45,v(r,new L(.14,.04,.02),A("#FDD835",{roughness:.6}),0,.08,.13),v(r,new L(.04,.14,.02),A("#37474F"),-.06,0,.13)}v(s,new ce(.55,.35),A("#ECEFF1",{transparent:!0,opacity:.35}),.1,.02,.2,!1)}function uv(s){ee(s,.95);for(const t of[-.42,.42])v(s,new L(.07,.7,.07),Me("#37474F"),t,.35,0);v(s,new L(1,.1,.58),Me("#263238",.5),0,.66,0),v(s,new L(.9,.48,.48),A("#1a1a1a",{roughness:.9}),0,.4,0);for(let t=0;t<5;t++)v(s,new L(.14,.4,.02),A(t%2===0?"#F9A825":"#212121",{roughness:.65}),-.32+t*.16,.42,.25);v(s,new L(.52,.14,.02),A("#C62828",{roughness:.55}),0,.76,.22)}function dv(s){ee(s,1);for(const e of[-.38,.38])v(s,new ot(.06,.06,.02,8),Me("#263238"),e,.06,-.22),v(s,new ot(.06,.06,.02,8),A("#212121",{roughness:.8}),e,.06,.22),v(s,new ot(.04,.04,.52,8),Me("#37474F"),e,.32,-.22);v(s,new L(.9,.58,.58),A("#E64A19",{roughness:.55}),0,.58,0),v(s,new L(.95,.08,.62),A("#BF360C",{roughness:.7}),0,.88,0),v(s,new L(.68,.38,.02),A("#FFF8E1",{roughness:.5}),0,.68,.31);for(let e=0;e<3;e++)v(s,new ot(.05,.05,.03,8),A("#FDD835",{roughness:.45}),-.22+e*.22,.92,.16);const t=v(s,new Et(.1,6,6),A("#ECEFF1",{transparent:!0,opacity:.2}),0,.98,.08,!1);t.userData.isBob=!0}function fv(s){ee(s,.92),v(s,new ot(.58,.74,.16,Fe),Me("#455A64",.65),0,.08,0),v(s,new tn(.42,.04,8,Fe),Me("#607D8B"),0,.16,0),v(s,new Et(.36,12,8,0,Math.PI*2,0,Math.PI/2),A("#4DD0E1",{transparent:!0,opacity:.5,roughness:.3}),0,.14,0);const t=v(s,new yr(.16,0),A("#76FF03",{emissive:"#558B2F",emissiveIntensity:.35,roughness:.4}),0,.58,0);t.userData.isBob=!0;for(let e=0;e<4;e++){const n=e/4*Math.PI*2;v(s,new L(.03,.42,.03),A("#AEEA00",{transparent:!0,opacity:.45}),Math.cos(n)*.28,.32,Math.sin(n)*.28)}}function pv(s){ee(s,.88),v(s,new ot(.05,.07,.95,8),Me("#78909C"),.32,.1,.22);const t=v(s,new L(1.15,.68,.07),A("#F9A825",{roughness:.55}),-.12,.2,-.06);t.rotation.z=1.12,v(t,new L(.16,.48,.02),A("#212121"),0,0,.05),v(t,new L(.12,.12,.02),A("#212121"),.16,-.12,.05);for(let e=0;e<4;e++)v(s,new L(.07,.04,.28),Me("#607D8B"),-.32+e*.14,.04,.08+e*.07)}function mv(s){ee(s,1.12);for(const t of[-.92,.92])v(s,new L(.11,.92,.11),A("#1a1a1a",{roughness:.85}),t,.46,0),v(s,new L(.15,.15,.15),A("#F9A825",{roughness:.45}),t,.96,0);v(s,new L(1.9,.14,.12),A("#1565C0",{roughness:.5,metalness:.25}),0,.82,0),vh(s,1.45,.52,.44,.09),v(s,new L(.38,.38,.05),A("#C62828",{roughness:.55}),0,.58,.13)}function gv(s){ee(s,1);for(const t of[-.55,.55])v(s,new L(.08,.62,.08),Me("#37474F"),t,.31,0),v(s,new ot(.04,.04,.02,6),A("#212121"),t,.02,.12);for(let t=0;t<3;t++){const e=v(s,new L(1.15,.14,.08),A(t%2===0?"#F9A825":"#212121",{roughness:.6}),0,.22+t*.18,0);e.rotation.z=(t-1)*.04}v(s,new L(.35,.22,.03),A("#FAFAFA",{roughness:.7}),0,.48,.06)}function vv(s){ee(s,.9),v(s,new ot(.14,.16,.38,10),A("#C62828",{roughness:.45,metalness:.3}),0,.19,0),v(s,new ot(.1,.1,.08,10),A("#B71C1C",{roughness:.45}),0,.4,0);for(const t of[-.12,.12])v(s,new ot(.05,.05,.14,8),A("#C62828",{roughness:.45}),t,.28,.1);for(let t=0;t<5;t++){const e=t/5*Math.PI*2,n=v(s,new Et(.04+t%2*.02,6,6),A("#29B6F6",{transparent:!0,opacity:.65,roughness:.2}),Math.cos(e)*.22,.55+t*.06,Math.sin(e)*.22);n.userData.isBob=!0,n.userData.bobPhase=t}v(s,new Ie(.55,Fe),A("#0288D1",{transparent:!0,opacity:.25}),0,.01,0,!1)}function _v(s){ee(s,1.05);for(const t of[-.75,.75])v(s,new L(.08,.88,.08),Me("#455A64"),t,.44,-.15);v(s,new L(1.6,.1,.55),A("#37474F",{roughness:.55,metalness:.35}),0,.82,-.05),v(s,new L(1.55,.55,.04),A("#81D4FA",{transparent:!0,opacity:.35,roughness:.2}),0,.55,.18),v(s,new L(.55,.38,.06),A("#546E7A",{roughness:.7}),0,.22,.05),v(s,new L(.12,.12,.02),A("#FDD835"),0,.65,.22)}function xv(s){ee(s,1.05),v(s,new L(1.65,.05,.55),A("#A1887F",{roughness:.95}),0,.025,0);for(const t of[-.58,0,.58]){const e=v(s,new ot(.13,.17,.78+Math.abs(t)*.08,10),A("#558B2F",{roughness:.92}),t,.4,0);v(e,new ot(.09,.11,.32,8),A("#33691E",{roughness:.95}),t+(t>=0?.16:-.16),.58,0);for(let n=0;n<5;n++)v(s,new cn(.025,.05,4),A("#33691E"),t+.1,.18+n*.13,.09)}}function yv(s){ee(s,.95);for(let t=0;t<4;t++){const e=v(s,new xr(.24+t%3*.07,0),A("#8D6E63",{roughness:.98}),-.42+t*.28,.2+t%2*.1,(t-1.5)*.1);e.rotation.set(.25,t*.55,.12),e.userData.isBob=!0,e.userData.bobPhase=t}v(s,new ce(1.1,.35),A("#FFF9C4",{transparent:!0,opacity:.12,side:se}),0,.15,0,!1)}function Mv(s){ee(s,1.08),v(s,new L(1.45,.38,.72),A("#78909C",{roughness:.95}),0,.19,0);for(let t=0;t<6;t++){const e=v(s,new xr(.2+t%3*.07,0),A(t%2===0?"#78909C":"#607D8B",{roughness:.98}),-.55+t*.22,.36+t%2*.14,(t-2.5)*.09);e.rotation.y=t*.65}for(let t=0;t<2;t++){const e=v(s,new Et(.12,6,6),A("#BCAAA4",{transparent:!0,opacity:.18}),.15+t*.2,.52,.08);e.userData.isBob=!0,e.userData.bobPhase=t}}function bv(s){ee(s,.9),v(s,new Et(.78,Fe,Fe,0,Math.PI*2,0,Math.PI/2.2),A("#FFE082",{roughness:.98}),0,.08,0),v(s,new Et(.48,Fe,Fe,0,Math.PI*2,0,Math.PI/2.5),A("#FFCC80",{roughness:.98}),.42,.06,.16),v(s,new Et(.38,Fe,Fe,0,Math.PI*2,0,Math.PI/2.5),A("#FFCC80",{roughness:.98}),-.38,.05,-.12);for(let t=0;t<3;t++){const e=v(s,new Et(.07,6,6),A("#FFF8E1",{transparent:!0,opacity:.28}),(t-1)*.22,.32+t*.07,.18);e.userData.isBob=!0,e.userData.bobPhase=t}}function Sv(s){ee(s,1.05),v(s,new L(1.25,.42,.68),A("#8D6E63",{roughness:.96}),0,.21,0);const t=v(s,new Et(.34,12,12),A("#BCAAA4",{roughness:.92}),0,.54,.16);v(t,new L(.09,.11,.02),A("#212121"),-.11,.05,.3),v(t,new L(.09,.11,.02),A("#212121"),.11,.05,.3),v(t,new L(.15,.07,.02),A("#212121"),0,-.09,.3),v(s,new ot(.035,.035,.52,6),A("#795548",{roughness:.9}),.48,.56,-.1),v(s,new ot(.035,.035,.48,6),A("#795548",{roughness:.9}),-.42,.53,-.16)}function wv(s){ee(s,.88);const t=v(s,new yo(.42,1),A("#8D6E63",{roughness:.98}),0,.38,0);for(let e=0;e<12;e++){const n=e/12*Math.PI*2;v(t,new ot(.008,.008,.35,4),A("#6D4C41",{roughness:.95}),Math.cos(n)*.28,e%3*.08-.08,Math.sin(n)*.28)}t.userData.isSpin=!0,v(s,new Ie(.35,Fe),A("#A1887F",{transparent:!0,opacity:.2}),0,.01,0,!1)}function Ev(s){ee(s,1);for(const t of[-.62,.62]){const e=v(s,new ot(.08,.1,.85,8),A("#EFEBE9",{roughness:.85}),t,.42,0);v(e,new Et(.1,8,8),A("#ECEFF1",{roughness:.8}),0,.48,0),v(e,new Et(.08,8,8),A("#ECEFF1",{roughness:.8}),0,-.48,0)}v(s,new tn(.55,.07,8,Fe,0,Math.PI),A("#EFEBE9",{roughness:.85}),0,.78,0),v(s,new L(.35,.08,.08),A("#EFEBE9",{roughness:.85}),0,.72,.12)}function Tv(s){ee(s,.98),v(s,new L(.85,.32,.55),A("#BCAAA4",{roughness:.92}),.15,.16,0),v(s,new L(.45,.22,.38),A("#A1887F",{roughness:.95}),-.35,.11,.08),v(s,new ot(.04,.04,.55,6),A("#8D6E63",{roughness:.95}),.45,.35,-.12),v(s,new ce(.65,.4),A("#FFFDE7",{transparent:!0,opacity:.15,side:se}),0,.45,.2,!1);for(let t=0;t<3;t++)v(s,new L(.06,.04,.2),A("#78909C",{roughness:.8}),-.2+t*.15,.04,.15)}function Av(s){ee(s,1);const t=v(s,new ot(.3,.34,1.65,Fe),vn("#4E342E"),0,.3,0);t.rotation.z=Math.PI/2,v(t,new Ie(.3,Fe),vn("#6D4C41"),.82,0,0);for(let e=0;e<4;e++)v(s,new L(.05,.22,.02),A("#2E7D32",{roughness:.9}),-.35+e*.22,.14,.26);v(s,new Et(.1,6,6),A("#FF7043",{roughness:.7}),.55,.34,.22)}function Cv(s){ee(s,1.02),v(s,new L(.58,.78,.48),A("#78909C",{roughness:.88}),-.38,.39,0),v(s,new L(.48,.38,.42),A("#607D8B",{roughness:.9}),.32,.19,.1);const t=v(s,new ot(.17,.21,.58,10),A("#B0BEC5",{roughness:.85}),.38,.58,-.16);t.rotation.z=.32,v(s,new L(.52,.08,.52),A("#455A64",{roughness:.85}),0,.04,0);for(let e=0;e<4;e++)v(s,new L(.1,.1,.02),A("#F9A825",{roughness:.5}),-.12+e*.1,.56,.26)}function Rv(s){ee(s,.95),v(s,new Et(.58,10,10),A("#2E7D32",{roughness:.95}),0,.36,0);for(let t=0;t<10;t++){const e=t/10*Math.PI*2,n=v(s,new cn(.035,.38,4),A("#33691E",{roughness:.92}),Math.cos(e)*.48,.26+t%3*.1,Math.sin(e)*.48);n.rotation.x=-.55,n.rotation.y=e}v(s,new L(.26,.26,.04),A("#C62828",{roughness:.55}),0,.56,.36)}function Pv(s){ee(s,.98),v(s,new L(1.15,.1,.62),A("#0288D1",{transparent:!0,opacity:.45,roughness:.3}),0,.05,0),v(s,new L(.58,.38,.42),Me("#546E7A",.45),.22,.24,0),v(s,new L(.38,.22,.32),A("#78909C",{roughness:.7,metalness:.3}),-.38,.16,.06);const t=v(s,new L(.32,.32,.32),A("#689F38",{roughness:.85}),-.16,.3,.16);t.userData.isBob=!0}function Fv(s){ee(s,1.15);for(const t of[-.68,.68]){const e=v(s,new ot(.17,.21,1.08,10),vn("#4E342E"),t,.54,0);v(e,new L(.3,.13,.3),A("#E64A19",{roughness:.65}),0,.36,.13),v(e,new L(.24,.11,.24),A("#F9A825",{roughness:.55}),0,.66,.13),v(e,new L(.09,.09,.02),A("#212121"),-.04,.8,.15),v(e,new L(.09,.09,.02),A("#212121"),.04,.8,.15)}v(s,new L(1.55,.13,.12),A("#33691E",{roughness:.85}),0,.98,0),v(s,new L(.07,.58,.07),A("#33691E",{roughness:.85}),0,.74,.16)}function Dv(s){ee(s,.95);for(const t of[-.45,.45])v(s,new ot(.05,.07,.72,8),vn("#5D4037"),t,.36,0);v(s,new L(1.05,.08,.08),vn("#6D4C41"),0,.62,0);for(let t=0;t<6;t++){const e=t/6*Math.PI,n=v(s,new tn(.18+t%2*.06,.025,6,10,0,Math.PI),A("#2E7D32",{roughness:.9}),Math.cos(e)*.15,.28+t*.06,Math.sin(e)*.1);n.rotation.y=e,n.userData.isBob=!0,n.userData.bobPhase=t}}function Lv(s){ee(s,.95),v(s,new ot(.72,.82,.06,Fe),A("#D7CCC8",{roughness:.98}),0,.03,0),v(s,new ot(.55,.65,.04,Fe),A("#BCAAA4",{roughness:.98}),0,.05,0);for(let t=0;t<4;t++){const e=t/4*Math.PI*2,n=v(s,new Et(.05,6,6),A("#A1887F",{transparent:!0,opacity:.5}),Math.cos(e)*.28,.08,Math.sin(e)*.28);n.userData.isBob=!0,n.userData.bobPhase=t}v(s,new L(.22,.04,.14),A("#795548",{roughness:.9}),.15,.06,.1)}function Iv(s){ee(s,1.02),v(s,new L(.95,.12,.65),A("#455A64",{roughness:.85}),0,.06,0),v(s,new L(.75,.08,.55),A("#37474F",{roughness:.85}),0,.14,0);const t=v(s,new ot(.22,.28,.62,10),A("#F9A825",{roughness:.45,metalness:.35}),0,.52,0);v(t,new L(.38,.12,.18),A("#F9A825",{roughness:.45,metalness:.35}),0,.38,0),v(t,new Et(.14,10,10),A("#F9A825",{roughness:.45,metalness:.35}),0,.72,0);for(const e of[-.42,.42])v(s,new ot(.06,.08,.45,8),A("#33691E",{roughness:.9}),e,.22,.22),v(s,new tn(.12,.025,6,8),A("#F9A825",{roughness:.5}),e,.48,.22)}function Uv(s,t,e,n){const i=new Lt;i.position.set(e,.02,n),nv(i,t),s.add(i);const r=So[t];return{mesh:i,x:e,z:n,kind:t,radius:r.radius,hit:!1}}function Nv(s){return So[s].clearHeight}function kv(s,t,e,n=0){for(const i of s)i.hit||!Jn(i.z,e)||(i.mesh.traverse(r=>{if(!(r instanceof re))return;const a=r.userData.bobPhase??0,o=r.userData.blinkPhase??0;if(r.userData.isGlow){r.rotation.z=t*.25+i.x;const l=r.material;l.opacity!==void 0&&(l.opacity=.32+Math.sin(t*2.5+i.z)*.1)}if(r.userData.isBob&&(r.position.y=r.userData.baseY??r.position.y,r.userData.baseY===void 0&&(r.userData.baseY=r.position.y),r.position.y=r.userData.baseY+Math.sin(t*3+i.z+a)*.05),r.userData.isBlink){const l=r.material;l.emissiveIntensity!==void 0&&(r.userData.baseEmissiveIntensity===void 0&&(r.userData.baseEmissiveIntensity=l.emissiveIntensity),l.emissiveIntensity=r.userData.baseEmissiveIntensity+.22+Math.sin(t*4+o)*.12+n*.35)}if(r.material instanceof ye&&!r.userData.isBlink){r.userData.baseEmissiveIntensity===void 0&&(r.userData.baseEmissiveIntensity=r.material.emissiveIntensity);const l=r.userData.baseEmissiveIntensity;n>.08&&!r.material.transparent?(r.material.emissive.set("#FFF3E0"),r.material.emissiveIntensity=l+n*.18):r.material.emissiveIntensity=l}r.userData.isSpin&&(r.rotation.y=t*2+a)}),i.mesh.position.y=Math.sin(t*2.5+i.x*.5)*.012)}function ec(s,t){for(const e of s)t.remove(e.mesh),Ze(e.mesh)}function Bv(s,t,e,n=3.5){const i=[],r=[-3.2,-1.6,0,1.6,3.2];for(let a=0;a<e;a++){const o=r[Math.floor(Math.random()*r.length)],l=t+a%3*.6,c=a*1.2+Math.random(),h=Sr("pickup");h.group.position.set(o,0,l),s.add(h.group),i.push({mesh:h.group,x:o,z:l,collected:!1,bobPhase:c})}return i}function zv(s,t,e){for(const n of s)n.collected||!Jn(n.z,e,O?55:75)||(n.mesh.position.x=n.x,n.mesh.position.z=n.z,fh(n.mesh,t,n.bobPhase,!0))}function Ov(s,t,e,n){let i=0,r=0;for(const a of s){if(a.collected)continue;const o=a.x-t,l=a.z-e;o*o+l*l<n*n&&(a.collected=!0,a.mesh.visible=!1,a.golden?r++:i++)}return{packages:i,golden:r}}function Hv(s){const t=new re(new ce(.08,.35),new Rt({color:"#00E5FF",transparent:!0,opacity:.55,blending:qt,depthWrite:!1,side:se}));return t.rotation.x=-Math.PI/2,t.position.set(0,-.05,-.2),s.add(t),t}const Gv={core:"#FFD54F",mid:"#FFC107",glow:"#FFEB3B",particle:"#FFFDE7",shell:"#FF8F00",ribbon:"#FFFFFF"};function Vv(s,t,e){const n=Sr("pickup",Gv);return n.group.position.set(t,.35,e),n.group.scale.setScalar(1.25),n.outerGlow&&(n.outerGlow.material.opacity=.55),s.add(n.group),{mesh:n.group,x:t,z:e,collected:!1,bobPhase:Math.random()*6,golden:!0}}function nc(s,t,e,n,i,r,a={}){const o=Sr("mail",Ag);o.group.position.set(t+.35,1.05,e+.2);const l=o.core;l.material.emissiveIntensity=1.1,o.outerGlow&&(o.outerGlow.material.opacity=.35),s.add(o.group);const c=new D(n-t,0,i-e).normalize(),h=a.spreadIndex??0;if(h!==0){const f=h*.14,g=Math.cos(f),_=Math.sin(f),m=c.x*g-c.z*_,p=c.x*_+c.z*g;c.set(m,0,p)}const u=new D(c.x*28,2,c.z*28),d=Hv(o.group);return{mesh:o.group,velocity:u,life:.85,damage:r,bobPhase:Math.random()*6,kind:"mail",pierceLeft:a.pierceLeft??0,homing:a.homing??!1,trail:d}}function ic(s,t,e,n=0,i=[],r=1){const a=[];for(const o of s){if(o.homing&&i.length){let l=null,c=1/0;for(const h of i){if(!h.alive)continue;const u=h.z-o.mesh.position.z;if(u<-2||u>45)continue;const d=(h.x-o.mesh.position.x)**2+u*u;d<c&&(c=d,l=h)}if(l){const h=new D(l.x-o.mesh.position.x,0,l.z-o.mesh.position.z);if(h.lengthSq()>.01){h.normalize().multiplyScalar(16*t*r),o.velocity.x+=h.x,o.velocity.z+=h.z;const u=Math.min(32,Math.hypot(o.velocity.x,o.velocity.z)),d=new D(o.velocity.x,0,o.velocity.z).normalize();o.velocity.x=d.x*u,o.velocity.z=d.z*u}}}o.life-=t,o.velocity.y-=o.kind==="mail"?8*t:28*t,o.mesh.position.addScaledVector(o.velocity,t),o.mesh.rotation.x+=t*(o.kind==="mail"?12:8),o.mesh.rotation.z+=t*(o.kind==="mail"?10:6),o.trail&&(o.trail.material.opacity=.35+Math.sin(n*20)*.15),fh(o.mesh,n+o.bobPhase,o.bobPhase,!1),o.life>0&&o.mesh.position.y>.1?a.push(o):(e.remove(o.mesh),ph(o.mesh))}return a}function sc(s,t){for(const e of s)t.remove(e.mesh),ph(e.mesh)}const dr=O?6:8,Wv={grunt:["alien","monkey","frog"],raider:["bull","fox","cat"],boss:["bull","alien","frog"]};function Xv(s,t,e=.08){return A(s,{emissive:t,emissiveIntensity:e,roughness:.92,metalness:0})}function rc(s,t,e,n,i,r){const a=new Lt;return a.position.set(t*.34*e,i,0),v(a,new ot(.07*e,.075*e,.22*e,dr),n,0,-.11*e,0),v(a,new ot(.065*e,.07*e,.18*e,dr),n,0,-.3*e,0),v(a,new L(.11*e,.08*e,.1*e),r??n,0,-.42*e,0),s.add(a),a}function ac(s,t,e,n,i){const r=new Lt;return r.position.set(t*.14*e,.02*e,0),v(r,new ot(.08*e,.085*e,.2*e,dr),n,0,-.1*e,0),v(r,new ot(.075*e,.08*e,.16*e,dr),n,0,-.28*e,0),v(r,new L(.14*e,.07*e,.2*e),i,0,-.4*e,.03*e),s.add(r),r}function oc(s,t,e){v(s,new L(.34*t*e,.2*t*e,.16*t*e),A("#D4B896",{roughness:.95}),0,-.06*t,.2*t)}function lc(s,t,e){const n=A("#0A0A0A",{emissive:e,emissiveIntensity:.35,roughness:1});for(const i of[-1,1]){const r=v(s,new L(.13*t,.17*t,.035*t),n,i*.11*t,.07*t,.24*t);r.rotation.z=i*.12,v(s,new L(.035*t,.035*t,.02*t),A("#FFFFFF",{roughness:1}),i*.14*t,.1*t,.27*t)}}function hs(s,t,e=.1){return v(s,new L(e*t,.025*t,.02*t),A("#1A1A1A",{roughness:1}),0,-.02*t,.28*t)}function qv(s,t,e,n){const i=n==="boss"?1.3:1;switch(e){case"alien":return oc(s,t,i),lc(s,t,"#76FF03"),hs(s,t);case"monkey":{v(s,new L(.36*t,.14*t,.12*t),A("#FFCC80",{roughness:.95}),0,-.04*t,.22*t);for(const r of[-1,1])v(s,new L(.12*t,.08*t,.04*t),A("#3E2723",{roughness:1}),r*.11*t,.12*t,.25*t),v(s,new L(.08*t,.06*t,.03*t),A("#FFFFFF"),r*.11*t,.1*t,.27*t);return hs(s,t,.08)}case"bull":{oc(s,t,i*.9),v(s,new L(.4*t,.09*t,.06*t),A("#212121",{emissive:"#000",emissiveIntensity:.2,roughness:.7}),0,.08*t,.26*t);for(const r of[-1,1]){const a=v(s,new L(.08*t,.22*t,.08*t),A("#ECEFF1"),r*.2*t,.48*t,0);a.rotation.z=r*-.35}return hs(s,t,.09)}case"cat":{v(s,new L(.32*t,.12*t,.1*t),A("#ECEFF1",{roughness:.95}),0,-.03*t,.22*t);for(const r of[-1,1]){const a=v(s,new L(.1*t,.12*t,.06*t),A("#78909C"),r*.18*t,.42*t,0);a.rotation.z=r*.25,v(s,new L(.09*t,.11*t,.03*t),A("#FFEB3B",{emissive:"#FBC02D",emissiveIntensity:.25}),r*.11*t,.08*t,.25*t),v(s,new L(.02*t,.07*t,.02*t),A("#111"),r*.11*t,.08*t,.27*t)}return hs(s,t,.06)}case"fox":{v(s,new L(.34*t,.16*t,.14*t),A("#FFF3E0",{roughness:.95}),0,-.05*t,.21*t),lc(s,t,"#FF7043");for(const r of[-1,1]){const a=v(s,new L(.1*t,.14*t,.05*t),A("#FF7043"),r*.2*t,.44*t,-.02*t);a.rotation.z=r*.3}return v(s,new L(.05*t,.05*t,.03*t),A("#212121"),0,-.01*t,.29*t),hs(s,t,.07)}case"frog":{for(const r of[-1,1])v(s,new L(.14*t,.14*t,.12*t),A("#FFFFFF",{roughness:1}),r*.13*t,.38*t,.02*t),v(s,new L(.07*t,.07*t,.04*t),A("#111"),r*.13*t,.38*t,.09*t);return v(s,new L(.22*t,.08*t,.08*t),A("#388E3C",{roughness:.9}),0,-.04*t,.24*t),v(s,new L(.16*t,.04*t,.03*t),A("#2E7D32"),0,-.06*t,.28*t)}}}function Yv(s){switch(s){case"monkey":return{skin:"#FF9800",emissive:"#F57C00",belly:"#FFF8E1",shoe:"#5D4037",paw:"#FFCC80"};case"bull":return{skin:"#795548",emissive:"#FF1744",shoe:"#3E2723"};case"cat":return{skin:"#90A4AE",emissive:"#FFC107",belly:"#ECEFF1",shoe:"#FFFFFF",paw:"#FFFFFF"};case"fox":return{skin:"#FF7043",emissive:"#FF5722",belly:"#FFF3E0",shoe:"#FFFFFF",paw:"#FFFFFF"};case"frog":return{skin:"#66BB6A",emissive:"#00E676",belly:"#A5D6A7",shoe:"#33691E"};default:return{skin:"#B8E986",emissive:"#76FF03",belly:"#E8F5C8",shoe:"#2E2E2E"}}}function $v(s,t,e,n,i){if(e==="grunt"&&n==="alien"&&v(s,new L(.18*t,.2*t,.14*t),A("#FF8F00",{emissive:"#FF6F00",emissiveIntensity:.25}),-.32*t,.48*t,-.06*t),e==="raider"&&(v(s,new L(.05*t,.05*t,.42*t),A("#00E5FF",{emissive:"#00B0FF",emissiveIntensity:.9}),.36*t,.38*t,.12*t),n==="bull"&&v(i,new L(.44*t,.1*t,.06*t),A("#E53935",{emissive:"#B71C1C",emissiveIntensity:.35}),0,.22*t,.24*t)),e==="boss"){for(const r of[-1,0,1])v(i,new L(.08*t,.14*t,.08*t),A("#FFD54F",{emissive:"#FFA000",emissiveIntensity:.5,metalness:.3}),r*.12*t,.48*t,0);v(s,new L(.62*t,.48*t,.06*t),A("#4A148C",{emissive:"#311B92",emissiveIntensity:.15,roughness:.9}),0,.44*t,-.18*t)}}function Zv(s,t,e="grunt"){const n=new Lt,i=Yv(s),r=Xv(i.skin,i.emissive,e==="boss"?.16:.1),a=A(i.shoe,{roughness:.9}),o=i.paw?A(i.paw,{roughness:.92}):r;v(n,new L(.46*t,.44*t,.3*t),r,0,.42*t,0),i.belly&&v(n,new L(.38*t,.28*t,.08*t),A(i.belly,{roughness:.95}),0,.38*t,.14*t);const l=new Lt;l.position.y=.72*t,n.add(l),v(l,new L(.48*t,.46*t,.42*t),r,0,.2*t,0);const c=qv(l,t,s,e);$v(n,t,e,s,l);const h={leftArm:rc(n,-1,t,r,.58*t,o),rightArm:rc(n,1,t,r,.58*t,o),leftLeg:ac(n,-1,t,r,a),rightLeg:ac(n,1,t,r,a),mouth:c,head:l};return n.userData={limbs:h,bobPhase:Math.random()*6,species:s},n}function jv(s){const t=Wv[s];return t[Math.floor(Math.random()*t.length)]}function Jv(s,t,e){const n=s.userData;if(!(n!=null&&n.limbs))return;const{limbs:i,bobPhase:r,species:a}=n,o=t*11+r,l=.65,c=a==="frog"?1.25:1;i.leftArm.rotation.x=Math.sin(o)*l,i.rightArm.rotation.x=-Math.sin(o)*l,i.leftLeg.rotation.x=-Math.sin(o)*l*.75,i.rightLeg.rotation.x=Math.sin(o)*l*.75,i.head&&(i.head.rotation.y=Math.sin(t*2.2+r)*.18),i.mouth&&e&&(i.mouth.scale.y=1+Math.abs(Math.sin(t*9+r))*(a==="frog"?.5:.35)),s.position.y=Math.abs(Math.sin(t*9+r))*(.09*c)}const Kv={grunt:{scale:.82,emissive:"#76FF03",speed:10,hp:1,label:"Grunt"},raider:{scale:.92,emissive:"#FFC107",speed:14,hp:2,label:"Raider"},stalker:{scale:1.05,emissive:"#FF1744",speed:19,hp:3,label:"Stalker"}},Qv={grunt:"grunt",raider:"raider",stalker:"boss"};function fa(s,t,e,n,i={}){const r=Kv[t],a=!!i.elite,o=!!i.boss,l=o?1.35:a?1.12:1,c=Qv[t],h=jv(c),u=new Lt;u.position.set(e,0,n);const d=Zv(h,r.scale*l,c);d.rotation.y=Math.PI,u.add(d);const f=.44*r.scale*l,g=v(u,new Ie(f,O?10:14),new Rt({color:"#101018",transparent:!0,opacity:.28,depthWrite:!1}),0,.02,0,!1);g.rotation.x=-Math.PI/2,g.scale.set(1.15,1,.82);let _;(a||o)&&(_=v(u,new Qe(f*.88,f*1.02,O?12:18),new Rt({color:o?"#9A7B2F":"#6B5B45",transparent:!0,opacity:o?.2:.12,side:se,depthWrite:!1}),0,.025,0,!1),_.rotation.x=-Math.PI/2);const m=.55*r.scale*l*2.2,p=v(u,new Et(.07*l,O?6:8,O?6:8),new Rt({color:"#CC4444",transparent:!0,opacity:t==="grunt"?0:.22,depthWrite:!1}),0,m,.06*l,!1);p.visible=t!=="grunt",s.add(u);let b=r.hp+(a?1:0);return o&&(b=8),{mesh:u,x:e,z:n,tier:t,species:h,hp:b,maxHp:b,speed:r.speed*(o?.85:1),baseSpeed:r.speed*(o?.85:1),alive:!0,footShadow:g,eliteRing:_,weakPoint:p,elite:a,isBoss:o,telegraph:0,telegraphT:0}}function t_(s,t,e,n,i,r,a=0){for(const o of s){if(!o.alive)continue;const l=o.z-i,c=Jn(o.z,i,O?60:85);if(o.mesh.visible=c,!c)continue;o.tier==="stalker"&&l>2.5&&l<22&&o.telegraph===0&&(o.telegraph=1,o.telegraphT=0,r==null||r(o));let h=o.baseSpeed;const u=o.footShadow.material;if(o.telegraph===1){if(o.telegraphT+=t,h=o.baseSpeed*.35,u.color.set("#4a1520"),u.opacity=.34+Math.sin(e*16)*.1,o.eliteRing){const f=o.eliteRing.material;f.color.set("#8B3030"),f.opacity=.28+Math.sin(e*16)*.08}o.telegraphT>=.55&&(o.telegraph=2,o.telegraphT=0)}else if(o.telegraph===2)o.telegraphT+=t,h=o.baseSpeed*2.4,u.color.set("#101018"),u.opacity=.32,o.telegraphT>=.45&&(o.telegraph=0);else if(u.color.set("#101018"),u.opacity=.24+(o.elite||o.isBoss?.06:0),o.eliteRing){const f=o.eliteRing.material;f.color.set(o.isBoss?"#9A7B2F":"#6B5B45"),f.opacity=(o.isBoss?.18:.1)+Math.sin(e*3+o.z)*.04}o.z-=h*t*n,o.mesh.position.set(o.x,0,o.z);const d=o.mesh.children[0];if(d&&(Jv(d,e+o.x,!0),o.telegraph===1?d.scale.setScalar(1+Math.sin(e*20)*.06):d.scale.setScalar(1),d.rotation.y=Math.PI+(O?0:Math.sin(e*3+o.x)*.08)),o.weakPoint.visible){const f=o.weakPoint.material;f.opacity=o.telegraph===1?.38:.16+Math.sin(e*6+o.x)*.06}d&&d.traverse(f=>{if(!(f instanceof re)||!(f.material instanceof ye))return;f.userData.baseEmissiveIntensity===void 0&&(f.userData.baseEmissiveIntensity=f.material.emissiveIntensity);const g=f.userData.baseEmissiveIntensity;a>.08&&!f.material.transparent?(f.material.emissive.set("#FFF3E0"),f.material.emissiveIntensity=g+a*.18):f.material.emissiveIntensity=g})}}function cc(s){const t=Math.random();return s>=7&&t<.25?"stalker":s>=4&&t<.45?"raider":"grunt"}function e_(s){return s==="stalker"?1.1:s==="raider"?.95:.85}function n_(s,t){if(t.tier==="grunt")return!1;const e=t.weakPoint.position.y;return s>=e-.12}function pa(s,t){t.remove(s.mesh),Ze(s.mesh),s.alive=!1}function hc(s,t){for(const e of s)t.remove(e.mesh),Ze(e.mesh)}class i_{constructor(){F(this,"ctx",null);F(this,"master",.42);F(this,"musicGain",null);F(this,"musicOscs",[]);F(this,"districtId",1);F(this,"night",0);F(this,"muted",!0);F(this,"combatLayer",0)}ensure(){var t;if(this.muted){this.muted=!1;try{this.ctx=new AudioContext,this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.08,this.musicGain.connect(this.ctx.destination)}catch{return null}}return((t=this.ctx)==null?void 0:t.state)==="suspended"&&this.ctx.resume(),this.ctx}setDistrict(t){this.districtId=t,this.refreshMusic()}setNight(t){Math.abs(t-this.night)<.08||(this.night=t,this.refreshMusic())}refreshMusic(){const t=this.ensure();if(!t||!this.musicGain)return;for(const r of this.musicOscs)try{r.stop()}catch{}this.musicOscs=[];const e=this.districtId>=6?196:this.districtId>=4?220:this.districtId>=2?247:262,n=.65+this.night*.35,i=[e*n,e*1.25*n,e*1.5*n];for(const r of i){const a=t.createOscillator();a.type=this.districtId>=6?"sawtooth":"triangle",a.frequency.value=r;const o=t.createGain();o.gain.value=.012/i.length,a.connect(o),o.connect(this.musicGain),a.start(),this.musicOscs.push(a)}}tone(t,e,n="square",i=.12,r=0){const a=this.ensure();if(!a)return;const o=a.currentTime,l=a.createOscillator(),c=a.createGain();l.type=n,l.frequency.setValueAtTime(t,o),r&&l.frequency.linearRampToValueAtTime(t+r,o+e),c.gain.setValueAtTime(i*this.master,o),c.gain.exponentialRampToValueAtTime(.001,o+e),l.connect(c),c.connect(a.destination),l.start(o),l.stop(o+e+.02)}noise(t,e=.06){const n=this.ensure();if(!n)return;const i=n.sampleRate*t,r=n.createBuffer(1,i,n.sampleRate),a=r.getChannelData(0);for(let c=0;c<i;c++)a[c]=(Math.random()*2-1)*(1-c/i);const o=n.createBufferSource();o.buffer=r;const l=n.createGain();l.gain.value=e*this.master,o.connect(l),l.connect(n.destination),o.start()}setCombatIntensity(t){this.combatLayer=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=.06+this.combatLayer*.05)}spectacle(t){this.noise(.15,.06+this.combatLayer*.04),t==="orbital-flash"?this.tone(55,.35,"sawtooth",.1,-15):t==="dogfight"?(this.tone(220,.08,"square",.06),this.tone(180,.1,"square",.05)):this.tone(140+Math.random()*40,.12,"sawtooth",.05)}shootMail(){this.tone(880,.06,"square",.08,-120),this.noise(.04,.03)}shootPackage(){this.tone(320,.1,"triangle",.1,80)}alienHit(){this.tone(180+Math.random()*40,.08,"sawtooth",.09,-60)}alienKill(){this.tone(520,.05,"square",.1),this.tone(780,.08,"triangle",.07,200)}headshot(){this.tone(1200,.04,"square",.11),this.tone(960,.06,"triangle",.08,-300)}combo(t){this.tone(440+t*40,.07,"triangle",.09)}comboStinger(){this.tone(523,.08,"triangle",.1),this.tone(659,.08,"triangle",.09),this.tone(784,.12,"triangle",.11),this.tone(988,.16,"triangle",.1,120)}jump(){this.tone(420,.07,"sine",.06,180)}gatePass(){this.tone(660,.12,"triangle",.08)}vaultBuzz(){this.tone(140,.15,"sawtooth",.07)}delivery(){this.tone(523,.15,"triangle",.1),this.tone(659,.15,"triangle",.09),this.tone(784,.25,"triangle",.11)}alienChatter(){Math.random()>.35||this.tone(90+Math.random()*50,.05+Math.random()*.04,"sawtooth",.04)}telegraphWarn(){this.tone(220,.12,"sawtooth",.05,40)}honk(){this.tone(180,.2,"square",.1),this.tone(220,.15,"square",.08)}ufoBeam(){this.tone(110,.25,"sawtooth",.07,30),this.noise(.18,.05),this.tone(880,.08,"sine",.05)}nearMiss(){this.tone(600,.05,"sine",.06,100)}eliteSpawn(){this.tone(880,.1,"triangle",.08),this.tone(1100,.12,"triangle",.07)}quake(){this.noise(.25,.12),this.tone(60,.3,"sawtooth",.1,-20)}turbo(){this.tone(300,.15,"sawtooth",.07,150)}stopMusic(){for(const t of this.musicOscs)try{t.stop()}catch{}this.musicOscs=[]}dispose(){var t;this.stopMusic(),(t=this.ctx)==null||t.close(),this.ctx=null}}const pe=new i_;class s_{constructor(t){F(this,"group",new Lt);F(this,"ufo");F(this,"groundSpot");F(this,"beam");F(this,"ring");F(this,"phase","idle");F(this,"beamX",0);F(this,"beamZ",0);F(this,"timer",0);F(this,"scanDir",1);F(this,"ufoOffsetX",0);F(this,"exposure",0);F(this,"warned",!1);this.scene=t,this.ufo=this.buildUfo(),this.group.add(this.ufo);const e=O?20:28;this.groundSpot=v(this.group,new Ie(1.05,e),new Rt({color:"#69F0AE",transparent:!0,opacity:.55,blending:qt,depthWrite:!1}),0,.04,0,!1),this.groundSpot.rotation.x=-Math.PI/2,this.groundSpot.scale.set(1.15,1.15,1),this.ring=v(this.group,new Qe(.92,1.18,e),new Rt({color:"#B2FF59",transparent:!0,opacity:.42,blending:qt,depthWrite:!1,side:se}),0,.045,0,!1),this.ring.rotation.x=-Math.PI/2,this.beam=v(this.group,new ot(.08,1.05,14,e,1,!0),new Rt({color:"#80DEEA",transparent:!0,opacity:.28,side:se,depthWrite:!1,blending:qt}),0,7,0,!1),this.group.visible=!1,t.add(this.group)}buildUfo(){const t=new Lt,e=O?10:14;v(t,new ot(.65,1.05,.16,e),new ye({color:"#546E7A",metalness:.65,roughness:.3,emissive:"#00E676",emissiveIntensity:.35}),0,0,0),v(t,new tn(.88,.04,6,e),new Rt({color:"#69F0AE",transparent:!0,opacity:.85}),0,-.05,0,!1),v(t,new Et(.34,e,e/2,0,Math.PI*2,0,Math.PI/2),new Rt({color:"#80DEEA",transparent:!0,opacity:.65,blending:qt,depthWrite:!1}),0,.14,0,!1);for(let n=0;n<6;n++){const i=n/6*Math.PI*2;v(t,new Et(.05,6,6),new Rt({color:n%2===0?"#FFEB3B":"#FF5252",transparent:!0,opacity:.9}),Math.cos(i)*.78,-.02,Math.sin(i)*.78,!1)}return t}get active(){return this.phase!=="idle"}start(t,e){this.phase="incoming",this.timer=0,this.exposure=0,this.warned=!1,this.beamZ=e+42,this.beamX=Oi.clamp(t,-2.5,2.5),this.scanDir=Math.random()<.5?1:-1,this.ufoOffsetX=this.scanDir>0?-14:14,this.group.visible=!0,this.syncPose(0)}syncPose(t){const e=this.beamX+this.ufoOffsetX*(this.phase==="incoming"?1:this.phase==="exit"?1.4:.15),n=14+Math.sin(t*2.2)*.35;this.ufo.position.set(e,n,this.beamZ),this.ufo.rotation.y=t*1.8,this.groundSpot.position.set(this.beamX,.04,this.beamZ),this.ring.position.set(this.beamX,.045,this.beamZ),this.beam.position.set(this.beamX,7,this.beamZ);const i=1+Math.sin(t*8)*.08;this.groundSpot.scale.set(1.15*i,1.15*i,1),this.groundSpot.material.opacity=.4+Math.sin(t*6)*.12,this.ring.material.opacity=.32+Math.sin(t*5+1)*.1,this.ring.rotation.z=t*2.4,this.beam.material.opacity=.22+Math.sin(t*7)*.08}update(t,e,n){if(this.phase!=="idle"){if(this.timer+=t,this.phase==="incoming")this.ufoOffsetX=Oi.lerp(this.ufoOffsetX,0,t*1.8),this.timer>=1.6&&(this.phase="scanning",this.timer=0);else if(this.phase==="scanning")this.beamX+=this.scanDir*t*4.2,this.beamX>3.4?(this.beamX=3.4,this.scanDir=-1):this.beamX<-3.4&&(this.beamX=-3.4,this.scanDir=1),this.timer>=4.8&&(this.phase="exit",this.timer=0);else if(this.phase==="exit"&&(this.ufoOffsetX=Oi.lerp(this.ufoOffsetX,this.scanDir*18,t*2.5),this.timer>=1.4)){this.end();return}if(Math.abs(this.beamZ-n)>(O?75:95)){this.end();return}this.syncPose(e)}}consumeWarning(){return this.warned||this.phase!=="scanning"||this.timer>.35?!1:(this.warned=!0,!0)}tickExposure(t,e,n,i){if(this.phase!=="scanning")return this.exposure=0,!1;if(i)return this.exposure=Math.max(0,this.exposure-t*4),!1;const r=Math.abs(n-this.beamZ)<2.2,a=Math.abs(e-this.beamX)<1.05;return r&&a?(this.exposure+=t,this.exposure>=.55):(this.exposure=Math.max(0,this.exposure-t*2.5),!1)}getExposure(){return this.exposure}end(){this.phase="idle",this.group.visible=!1,this.exposure=0}dispose(){this.scene.remove(this.group),Ze(this.group)}}const r_={slowmo:{core:"#80DEEA",mid:"#00BCD4",glow:"#00E5FF",particle:"#E0F7FA",shell:"#4DD0E1",bad:!1},fastshot:{core:"#FFEB3B",mid:"#FF9800",glow:"#FF6D00",particle:"#FFD54F",shell:"#FF5722",bad:!1},invincible:{core:"#E1F5FE",mid:"#29B6F6",glow:"#00B0FF",particle:"#FFFFFF",shell:"#0288D1",bad:!1},health:{core:"#A5D6A7",mid:"#43A047",glow:"#00E676",particle:"#C8E6C9",shell:"#2E7D32",bad:!1},turbo:{core:"#FF8A65",mid:"#FF3D00",glow:"#FF1744",particle:"#FFAB91",shell:"#D50000",bad:!0},blur:{core:"#CE93D8",mid:"#7B1FA2",glow:"#E040FB",particle:"#4A148C",shell:"#311B92",bad:!0}},Ui=O?10:14,uc=O?4:6;function qe(s,t,e=1){return A(s,{emissive:s,emissiveIntensity:t,transparent:e<1,opacity:e,roughness:.15,metalness:.05})}function dc(s,t){return new Rt({color:s,transparent:!0,opacity:t,depthWrite:!1,blending:qt})}function a_(s,t,e){const n=new Lt;n.userData.orbit=e;for(let i=0;i<uc;i++){const r=i/uc*Math.PI*2,a=v(n,new Et(.045+i%3*.015,6,6),qe(t,1.4,.92),Math.cos(r)*e,Math.sin(i*1.7)*.08,Math.sin(r)*e,!1);a.userData.angle=r,a.userData.orbit=e,a.userData.wobble=i*1.3}return s.add(n),n}function o_(s,t,e){const n=new Lt;if(n.position.y=.55,t==="slowmo")for(const[i,r]of[[0,.28],[.12,.22],[-.1,.24]]){const a=v(n,new tn(r,.025,6,O?12:16),qe(e.glow,.9,.75),0,i,0,!1);a.rotation.x=Math.PI/2+i*.4,a.rotation.z=i*2}else if(t==="fastshot")for(let i=0;i<5;i++){const r=i/5*Math.PI*2,a=v(n,new cn(.07,.22,4),qe(e.glow,1.1),Math.cos(r)*.18,Math.sin(i)*.04,Math.sin(r)*.18,!1);a.rotation.x=Math.PI/2,a.rotation.z=r}else if(t==="invincible"){for(let i=0;i<4;i++){const r=v(n,new L(.04,.34,.04),qe("#FFFFFF",1.5),0,0,0,!1);r.rotation.z=i/4*Math.PI*2,r.rotation.x=.5+i*.2,r.position.set(Math.cos(r.rotation.z)*.08,Math.sin(i)*.06,Math.sin(r.rotation.z)*.08)}v(n,new yr(.12,0),qe(e.particle,1.3),0,0,0,!1)}else if(t==="health"){for(let i=0;i<4;i++){const r=i/4*Math.PI*2+.4,a=v(n,new Et(.1,6,6),qe(e.mid,1),Math.cos(r)*.3,-.08+Math.sin(i)*.05,Math.sin(r)*.3,!1);a.scale.set(1.4,.45,.8),a.rotation.y=r}v(n,new Et(.14,8,8),qe("#FFFFFF",.8),0,.02,.08,!1)}else if(t==="turbo"){for(let i=0;i<6;i++){const r=i/6*Math.PI*2,a=v(n,new cn(.06,.28,3),qe("#FF1744",1.2),Math.cos(r)*.2,0,Math.sin(r)*.2,!1);a.rotation.x=Math.PI/2,a.rotation.z=r+Math.PI}v(n,new L(.28,.06,.06),A("#212121",{emissive:"#FF1744",emissiveIntensity:.4}),0,.18,0,!1)}else{v(n,new Et(.16,8,8),qe(e.particle,.7,.55),0,0,0,!1),v(n,new Et(.22,8,8),qe(e.mid,.5,.35),0,0,0,!1);for(let i=0;i<3;i++){const r=i/3*Math.PI*2;v(n,new tn(.12+i*.05,.018,6,10),qe(e.glow,.85,.6),0,0,0,!1).rotation.set(Math.PI/2,r,0)}}return s.add(n),n}function fc(s,t,e,n){const i=r_[t],r=new Lt;r.position.set(e,0,n);const a=v(r,new Qe(.42,.72,O?14:22),dc(i.glow,i.bad?.28:.38),0,.04,0,!1);a.rotation.x=-Math.PI/2,r.userData.groundRing=a;const o=v(r,new Et(.52,Ui,Ui),dc(i.glow,i.bad?.14:.2),0,.55,0,!1);r.userData.outerGlow=o;const l=v(r,new Et(.4,Ui,Ui),qe(i.shell,.55,.42),0,.55,0,!1);r.userData.midShell=l;const c=v(r,new Et(.3,Ui,Ui),qe(i.core,i.bad?1.15:1.35),0,.55,0,!1);return r.userData.core=c,v(r,new Et(.14,8,8),qe("#FFFFFF",i.bad?.9:1.4,.85),0,.58,.1,!1),r.userData.particles=a_(r,i.particle,.48),r.userData.accent=o_(r,t,i),i.bad&&(v(r,new Qe(.58,.66,O?12:16),new Rt({color:"#FF1744",transparent:!0,opacity:.45,side:se}),0,.55,0,!1).rotation.x=Math.PI/2),s.add(r),{mesh:r,x:e,z:n,kind:t,collected:!1,bobPhase:Math.random()*6,isBad:i.bad}}function l_(s,t,e){for(const n of s){if(n.collected||!Jn(n.z,e,O?48:62))continue;const i=.52+Math.sin(t*3+n.bobPhase)*.12;n.mesh.position.y=i-.52,n.mesh.rotation.y=t*1.6;const r=n.mesh.userData.core,a=n.mesh.userData.outerGlow,o=n.mesh.userData.midShell,l=n.mesh.userData.groundRing,c=n.mesh.userData.particles,h=n.mesh.userData.accent,u=1+Math.sin(t*4.5+n.bobPhase)*.06;if(r&&r.scale.setScalar(u),a){const d=1+Math.sin(t*3.2+n.bobPhase)*.1;a.scale.setScalar(d);const f=a.material;f.opacity=(n.isBad?.14:.2)+Math.sin(t*5+n.bobPhase)*.04}o&&(o.rotation.y=-t*2.4),l&&l.scale.setScalar(1+Math.sin(t*4+n.bobPhase)*.07),h&&(h.rotation.y=t*2.8),c&&(c.rotation.y=t*1.8,c.children.forEach((d,f)=>{if(!(d instanceof re))return;const g=d.userData.angle+t*(1.2+f%3*.15),_=d.userData.orbit;d.position.x=Math.cos(g)*_,d.position.z=Math.sin(g)*_,d.position.y=Math.sin(t*4+d.userData.wobble)*.1}))}}function c_(s,t,e,n){for(const i of s){if(i.collected)continue;const r=i.x-t,a=i.z-e;if(r*r+a*a<n*n)return i.collected=!0,i.mesh.visible=!1,i.kind}return null}function pc(){const s=Math.random();return s<.08?"health":s<.15?"turbo":s<.22?"blur":s<.28?"slowmo":s<.64?"fastshot":"invincible"}function mc(s,t){for(const e of s)t.remove(e.mesh),Ze(e.mesh)}const h_={slowmo:"Slow-Mo!",fastshot:"Fast Shot!",invincible:"Invincible!",health:"❤ +1 Health!",turbo:"⚠ Overdrive — too fast!",blur:"⚠ Ghosted — hard to see!"},fr=[-3.2,-1.6,0,1.6,3.2];function js(){return fr[Math.floor(Math.random()*fr.length)]}function u_(){const s=Math.random()<.16?2:1,t=[],e=new Set;for(;t.length<s;){const n=fr[Math.floor(Math.random()*fr.length)];e.has(n)||(e.add(n),t.push(n))}return Math.random()<.22&&!t.includes(0)&&(t[0]=0),t}function d_(s){return tv(s)}function f_(s){return Math.max(16,28-s*1.1)}function p_(s){return Math.max(11,22-s*1.35)}function m_(){return 32+Math.random()*22}function g_(){return 22+Math.random()*18}const v_=O?28:48,ma=new L(.1,.1,.1),gc=new ce(.14,.04);class __{constructor(t){F(this,"particles",[]);F(this,"scene");F(this,"materials",new Map);this.scene=t;for(let e=0;e<v_;e++){const n=this.getMaterial("#ffffff"),i=new re(ma,n);i.visible=!1,this.scene.add(i),this.particles.push({mesh:i,vel:new D,life:0,maxLife:1,active:!1})}}getMaterial(t,e=!0){const n=`${t}|${e?1:0}`;let i=this.materials.get(n);return i||(i=new Rt({color:t,transparent:!0,blending:e?qt:Zn,depthWrite:!1}),this.materials.set(n,i)),i}burst(t,e,n,i,r=12,a=4){const o=O?Math.min(r,10):r;let l=0;for(const c of this.particles){if(l>=o)break;c.active||(c.active=!0,c.mesh.visible=!0,c.mesh.geometry=ma,c.mesh.material=this.getMaterial(i),c.mesh.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),c.mesh.position.set(t,e,n),c.mesh.scale.setScalar(.8+Math.random()*.6),c.vel.set((Math.random()-.5)*a,Math.random()*a*.85+1.2,(Math.random()-.5)*a),c.maxLife=.55+Math.random()*.45,c.life=c.maxLife,l++)}}sparkStreak(t,e,n,i,r=4){let a=0;const o=O?3:r;for(const l of this.particles){if(a>=o)break;l.active||(l.active=!0,l.mesh.visible=!0,l.mesh.geometry=gc,l.mesh.material=this.getMaterial(i),l.mesh.position.set(t+(Math.random()-.5)*.4,e,n+(Math.random()-.5)*.4),l.mesh.rotation.y=Math.random()*Math.PI*2,l.mesh.rotation.z=(Math.random()-.5)*.8,l.mesh.scale.setScalar(1.2+Math.random()),l.vel.set(0,.5+Math.random(),-2-Math.random()*2),l.maxLife=.25+Math.random()*.2,l.life=l.maxLife,a++)}}collectBurst(t,e){this.burst(t,1,e,"#FFE082",8,3.5),this.sparkStreak(t,1.1,e,"#FFD54F",3),O||this.burst(t,1.2,e,"#FF9800",5,2.5)}hitBurst(t,e){this.burst(t,1,e,"#FF5252",O?8:12,5.5),this.sparkStreak(t,1,e,"#FF1744",4)}alienHit(t,e,n,i=!1){const r=i?"#EA80FC":"#76FF03";this.burst(t,e,n,r,O?6:10,i?6.5:4.5),this.sparkStreak(t,e,n,i?"#E040FB":"#B2FF59",i?5:3)}muzzleFlash(t,e,n){this.burst(t,e,n,"#00E5FF",O?4:6,3.5),this.sparkStreak(t,e,n,"#FFF59D",O?2:4)}gateBurst(t,e,n){this.burst(t,2,e,n,O?12:18,6.5),this.sparkStreak(t,2.2,e,n,O?2:5)}update(t){for(const e of this.particles){if(!e.active)continue;e.life-=t,e.vel.y-=14*t,e.mesh.position.addScaledVector(e.vel,t);const n=Math.max(0,e.life/e.maxLife);e.mesh.material.opacity=n,e.mesh.scale.multiplyScalar(.985),e.life<=0&&(e.active=!1,e.mesh.visible=!1)}}clear(){for(const t of this.particles)t.active=!1,t.mesh.visible=!1}dispose(){this.clear();for(const t of this.particles)this.scene.remove(t.mesh);ma.dispose(),gc.dispose(),this.materials.forEach(t=>t.dispose()),this.materials.clear(),this.particles=[]}}class x_{constructor(){F(this,"intensity",0)}shake(t){this.intensity=Math.max(this.intensity,t)}apply(t,e,n){this.intensity>.001?(t.position.x=e.x+(Math.random()-.5)*this.intensity,t.position.y=e.y+(Math.random()-.5)*this.intensity*.5,t.position.z=e.z+(Math.random()-.5)*this.intensity*.3,this.intensity*=.88):t.position.copy(e),t.lookAt(n)}}const _h={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const y_=new Mo(-1,1,1,-1,0,1);class M_ extends ze{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}}const b_=new M_;class wo{constructor(t){this._mesh=new re(b_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,y_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class S_ extends ts{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=lr.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new wo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vc extends ts{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class w_ extends ts{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class E_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new S_(_h),this.copyPass.material.blending=kn,this.clock=new Ad}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vc!==void 0&&(a instanceof vc?n=!0:a instanceof w_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class T_ extends ts{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new bt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const A_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Zi extends ts{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new xn(r,a,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new xn(r,a,{type:Bn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new xn(r,a,{type:Bn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=A_;this.highPassUniforms=lr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=_h;this.copyUniforms=lr.clone(h.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new bt,this.oldClearAlpha=1,this.basic=new Rt,this.fsQuad=new wo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Zi.BlurDirectionX=new at(1,0);Zi.BlurDirectionY=new at(0,1);class C_ extends ts{constructor(){super();F(this,"material");F(this,"fsQuad");this.material=new Ve({uniforms:{tDiffuse:{value:null},vignette:{value:O?.28:.38},aberration:{value:O?.0012:.0022},saturation:{value:O?1.06:1.12},pulse:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float vignette;
        uniform float aberration;
        uniform float saturation;
        uniform float pulse;
        varying vec2 vUv;
        void main() {
          vec2 uv = vUv;
          vec2 dir = uv - 0.5;
          float ab = aberration * (1.0 + pulse * 2.5);
          vec3 col;
          col.r = texture2D(tDiffuse, uv + dir * ab).r;
          col.g = texture2D(tDiffuse, uv).g;
          col.b = texture2D(tDiffuse, uv - dir * ab).b;
          float luma = dot(col, vec3(0.299, 0.587, 0.114));
          float sat = saturation + pulse * 0.18;
          col = mix(vec3(luma), col, sat);
          float vig = 1.0 - dot(dir, dir) * vignette * 2.4;
          col *= clamp(vig, 0.0, 1.0);
          col *= 1.0 + pulse * 0.14;
          gl_FragColor = vec4(col, 1.0);
        }
      `}),this.fsQuad=new wo(this.material)}setPulse(e){this.material.uniforms.pulse.value=e}render(e,n,i){this.material.uniforms.tDiffuse.value=i.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class R_{constructor(t,e,n){F(this,"composer");F(this,"bloomPass");F(this,"gradePass");this.renderer=t,this.composer=new E_(t),this.composer.addPass(new T_(e,n)),this.bloomPass=new Zi(new at(1,1),O?.34:.38,O?.32:.36,O?.85:.78),this.composer.addPass(this.bloomPass),this.gradePass=new C_,this.gradePass.renderToScreen=!0,this.composer.addPass(this.gradePass)}setSize(t,e){this.composer.setSize(t,e);const n=Math.max(1,Math.floor(t*kl)),i=Math.max(1,Math.floor(e*kl));this.bloomPass.resolution.set(n,i)}setBloomStrength(t){this.bloomPass.strength=t}setGradePulse(t){this.gradePass.setPulse(t)}render(){this.composer.render()}dispose(){this.gradePass.dispose(),this.composer.dispose()}}class P_{constructor(){F(this,"nextEventZ",55);F(this,"pulse",0);F(this,"combatIntensity",0);F(this,"active",null);F(this,"activeT",0)}reset(){this.nextEventZ=55+Math.random()*20,this.pulse=0,this.combatIntensity=0,this.active=null,this.activeT=0}getPostPulse(){return this.pulse}getCombatIntensity(){return this.combatIntensity}getActive(){return this.active}bumpCombat(t){this.combatIntensity=Math.min(1,this.combatIntensity+t),this.pulse=Math.min(1,this.pulse+t*.35)}update(t,e){if(this.combatIntensity=Math.max(0,this.combatIntensity-t*.08),this.pulse=Math.max(0,this.pulse-t*1.4),this.active&&(this.activeT-=t,this.activeT<=0&&(this.active=null)),e.playerZ<this.nextEventZ)return null;this.nextEventZ=e.playerZ+(O?26:22)+Math.random()*14;const n=this.pickEvent(e);return this.active=n,this.activeT=n.duration,this.pulse=Math.min(1,this.pulse+n.pulse),this.combatIntensity=Math.min(1,this.combatIntensity+n.pulse*.5),n}pickEvent(t){const e=Math.random();return t.night>.45&&e<.28?{kind:"orbital-flash",message:"☄ ORBITAL STRIKE — keep moving!",pulse:.55,duration:2.8}:e<.45?{kind:"dogfight",message:"✈ Jets vs UFOs overhead!",pulse:.35,duration:4}:e<.62?{kind:"meteor-streak",message:"🌠 Meteor shower!",pulse:.4,duration:3.2}:e<.78?{kind:"energy-surge",message:"⚡ Energy surge on the highway!",pulse:.45,duration:2.5}:t.runnerCount>=3&&e<.9?{kind:"alien-rain",message:"👾 Alien drop pods incoming!",pulse:.38,duration:2.2}:{kind:"distant-barrage",message:"💥 War zone ahead!",pulse:.42,duration:3}}}const xh="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content";function yh(){const s=window.visualViewport;return s?{width:Math.max(1,Math.round(s.width)),height:Math.max(1,Math.round(s.height)),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,scale:s.scale}:{width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight),offsetTop:0,offsetLeft:0,scale:1}}const pr=new Set;function F_(s){return pr.add(s),()=>pr.delete(s)}function D_(){window.scrollTo(0,0);const s=window.visualViewport;if(!s||s.scale===1)return;const t=document.querySelector('meta[name="viewport"]');t&&t.setAttribute("content",xh)}function fi(){const s=yh();if(!O)return s;D_(),window.scrollTo(0,0);const t=document.getElementById("app"),e=document.getElementById("game-canvas");if(!t)return s;const{width:n,height:i,offsetLeft:r,offsetTop:a}=s;return t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width=`${n}px`,t.style.height=`${i}px`,t.style.padding="0",t.style.margin="0",t.style.overflow="hidden",t.style.transform=`translate(${-r}px, ${-a}px)`,t.style.transformOrigin="top left",t.style.willChange="transform",e&&(e.style.width=`${n}px`,e.style.height=`${i}px`),s}function Ni(){O&&fi(),pr.forEach(s=>s())}function L_(){const s=document.querySelector('meta[name="viewport"]');s&&s.setAttribute("content",xh),fi(),window.addEventListener("resize",Ni),window.addEventListener("orientationchange",()=>{window.scrollTo(0,0),setTimeout(Ni,50),setTimeout(Ni,150),setTimeout(Ni,400)}),window.visualViewport&&(window.visualViewport.addEventListener("resize",Ni),window.visualViewport.addEventListener("scroll",Ni))}function Js(s){document.body.classList.toggle("game-active",s),s&&O&&(fi(),requestAnimationFrame(()=>{fi(),pr.forEach(t=>t())}))}const io=[{id:"johnny",name:"Johnny",tagline:"Classic courier",skin:"#FFE0BD",jacket:"#1565C0",jacketLight:"#42A5F5",jacketTrim:"#FFD54F",hat:"#D32F2F",hatBrim:"#B71C1C",packMain:"#78909C",packDark:"#546E7A",packTrim:"#ECEFF1"},{id:"dingo",name:"Dingo",tagline:"Night-shift legend",skin:"#3D2314",jacket:"#1A237E",jacketLight:"#3949AB",jacketTrim:"#00E676",hat:"#00897B",hatBrim:"#00695C",packMain:"#2E7D32",packDark:"#1B5E20",packTrim:"#A5D6A7"},{id:"mert",name:"Mert",tagline:"Desert-route pro",skin:"#C68642",jacket:"#4E342E",jacketLight:"#795548",jacketTrim:"#FFAB40",hat:"#EF6C00",hatBrim:"#E65100",packMain:"#6D4C41",packDark:"#4E342E",packTrim:"#FFCC80"}];function Eo(s){return io.find(t=>t.id===s)??io[0]}function Ae(s,t,e,n,i,r,a,o){return{id:s,district:t,name:e,briefing:n,difficulty:a,timeLimit:o,segments:[...r.map(l=>({kind:"gate",z:l.z,safe:l.safe})),{kind:"dropoff",z:i}]}}const pi=[Ae("1-1",1,"First Delivery","Jump obstacles · pick GREEN fork · click to shoot · collect 📦 for heavy shots",750,[{z:160,safe:"left"},{z:360,safe:"right"},{z:580,safe:"left"}],2,180),Ae("1-2",1,"Dog Park Detour","Aliens run AT you — dodge or shoot them! Colors = difficulty.",850,[{z:200,safe:"right"},{z:450,safe:"left"},{z:700,safe:"right"}],3,200),Ae("1-3",1,"Block Party Run","Grab power-ups: Slow-Mo, Fast Shot, Shield.",900,[{z:220,safe:"left"},{z:480,safe:"right"},{z:720,safe:"left"}],4,220),Ae("1-4",1,"Suburban Sprint","Center lane gets blocked too — stay alert!",950,[{z:180,safe:"right"},{z:420,safe:"left"},{z:650,safe:"right"},{z:850,safe:"left"}],5,240),Ae("1-5",1,"Boss: HOA Alien","Red stalkers are fast — shoot first!",1050,[{z:250,safe:"left"},{z:520,safe:"right"},{z:780,safe:"left"},{z:980,safe:"right"}],6,280),Ae("2-1",2,"Morning Commute","Downtown speed run — faster pace!",920,[{z:200,safe:"right"},{z:480,safe:"left"},{z:750,safe:"right"}],5,240),Ae("2-2",2,"Food Truck Alley","Dense hazards — power-ups save lives.",950,[{z:220,safe:"left"},{z:500,safe:"right"},{z:780,safe:"left"}],6,260),Ae("2-3",2,"Alien Territory","Yellow raiders need 2 hits. Red stalkers need 3.",1e3,[{z:240,safe:"right"},{z:520,safe:"left"},{z:820,safe:"right"}],7,280),Ae("2-4",2,"Rush Hour","Everything at once. Shield up!",1050,[{z:200,safe:"left"},{z:450,safe:"right"},{z:700,safe:"left"},{z:920,safe:"right"}],8,300),Ae("2-5",2,"Boss: Alien Commander","Final marathon — survive the stalkers.",1150,[{z:250,safe:"left"},{z:550,safe:"right"},{z:850,safe:"left"},{z:1050,safe:"right"}],9,320),Ae("3-1",3,"Scorpion Route","Blazing sand — watch for heat mirages and raiders in the haze.",980,[{z:210,safe:"left"},{z:500,safe:"right"},{z:780,safe:"left"}],7,280),Ae("3-2",3,"Mirage Mile","Desert gates come fast. Stock packages at oases.",1020,[{z:230,safe:"right"},{z:520,safe:"left"},{z:820,safe:"right"}],8,300),Ae("3-3",3,"Canyon Dash","Narrow canyon run — aliens love the shade.",1080,[{z:200,safe:"left"},{z:480,safe:"right"},{z:760,safe:"left"},{z:980,safe:"right"}],8,310),Ae("3-4",3,"Sandstorm Alley","Low visibility — listen for stalker footsteps.",1120,[{z:240,safe:"right"},{z:540,safe:"left"},{z:860,safe:"right"}],9,320),Ae("3-5",3,"Boss: Dune Warlord","Clear the dunes. The warlord waits at the depot.",1200,[{z:260,safe:"left"},{z:560,safe:"right"},{z:880,safe:"left"},{z:1080,safe:"right"}],10,340),Ae("4-1",4,"Canopy Run","Welcome to the jungle — vines, ruins, and ambush aliens.",1e3,[{z:220,safe:"right"},{z:510,safe:"left"},{z:800,safe:"right"}],9,300),Ae("4-2",4,"Temple Steps","Ancient gates guard the old mail route.",1040,[{z:240,safe:"left"},{z:530,safe:"right"},{z:840,safe:"left"}],10,320),Ae("4-3",4,"Vine Gauntlet","Thick cover — stalkers burst from the trees.",1100,[{z:210,safe:"right"},{z:500,safe:"left"},{z:790,safe:"right"},{z:1e3,safe:"left"}],10,330),Ae("4-4",4,"Monsoon Rush","Wet roads, wild power-ups, heavy traffic.",1140,[{z:250,safe:"left"},{z:550,safe:"right"},{z:870,safe:"left"}],11,350),Ae("4-5",4,"Boss: Jungle Overlord","Final jungle delivery — defeat the overlord!",1250,[{z:270,safe:"right"},{z:580,safe:"left"},{z:900,safe:"right"},{z:1120,safe:"left"}],12,360)];function I_(s){return pi.find(t=>t.id===s)}function _c(s){const t=pi.findIndex(e=>e.id===s);return t<0||t>=pi.length-1?null:pi[t+1].id}function U_(){return[...new Set(pi.map(s=>s.district))].sort((s,t)=>s-t)}const xc=[{id:1,name:"Sunny Suburbs",sky:"#29B6F6",skyBottom:"#4FC3F7",fog:"#B3E5FC",ground:"#689F38",ambient:.72,sun:1,fogNear:50,fogFar:200,buildingHue:.12},{id:2,name:"Busy Downtown",sky:"#FF7043",skyBottom:"#FFAB91",fog:"#FFCC80",ground:"#607D8B",ambient:.72,sun:1.05,fogNear:35,fogFar:160,buildingHue:.08},{id:3,name:"Sunbleached Desert",sky:"#FFA726",skyBottom:"#FFE082",fog:"#FFE0B2",ground:"#D4A574",ambient:.78,sun:1.1,fogNear:45,fogFar:190,buildingHue:.09},{id:4,name:"Emerald Jungle",sky:"#00897B",skyBottom:"#26A69A",fog:"#80CBC4",ground:"#388E3C",ambient:.78,sun:.95,fogNear:32,fogFar:150,buildingHue:.32},{id:5,name:"Industrial Rain",sky:"#546E7A",skyBottom:"#78909C",fog:"#78909C",ground:"#455A64",ambient:.45,sun:.5,fogNear:25,fogFar:110,buildingHue:.55},{id:6,name:"Neon Night",sky:"#1A237E",skyBottom:"#311B92",fog:"#311B92",ground:"#263238",ambient:.35,sun:.3,fogNear:20,fogFar:100,buildingHue:.75},{id:7,name:"The Black Zone",sky:"#1B0000",skyBottom:"#4A0000",fog:"#4A0000",ground:"#212121",ambient:.25,sun:.15,fogNear:15,fogFar:80,buildingHue:0}];function so(s){return xc[Math.min(s-1,xc.length-1)]}class mr{constructor(t,e,n){F(this,"canvas");F(this,"renderer");F(this,"pipeline",null);F(this,"scene");F(this,"camera");F(this,"world");F(this,"particles");F(this,"shake");F(this,"player");F(this,"convoy");F(this,"level");F(this,"run",{...Lo});F(this,"save");F(this,"routeGates",[]);F(this,"vaultGates",[]);F(this,"runners",[]);F(this,"coins",[]);F(this,"packagePickups",[]);F(this,"obstacles",[]);F(this,"powerUps",[]);F(this,"throws",[]);F(this,"dropoff");F(this,"keys",new Set);F(this,"touchSteerLeft",!1);F(this,"touchSteerRight",!1);F(this,"inputCleanup",null);F(this,"running",!1);F(this,"dead",!1);F(this,"elapsed",0);F(this,"levelLength",200);F(this,"roadHalfWidth",4.2);F(this,"steerSpeed",11);F(this,"obstacleCooldown",0);F(this,"hurtIFrames",0);F(this,"gameTime",0);F(this,"smokeTimer",0);F(this,"dashTimer",0);F(this,"dashActive",!1);F(this,"abilityCd",0);F(this,"abilityMaxCd",12);F(this,"shootCd",0);F(this,"mailGunDamage",3);F(this,"mailGunRate",.22);F(this,"startPackages",0);F(this,"pickupRadius",2.2);F(this,"specialCharge",0);F(this,"specialShakesLeft",0);F(this,"specialShakeTimer",0);F(this,"quakeRadius",7.5);F(this,"invincibleTimer",0);F(this,"slowMoTimer",0);F(this,"fastShotTimer",0);F(this,"turboTimer",0);F(this,"blurTimer",0);F(this,"timeScale",1);F(this,"autoFireEnabled",!1);F(this,"viewportCleanup",null);F(this,"lastVpW",0);F(this,"lastVpH",0);F(this,"lastVpScale",1);F(this,"lastVpOffTop",0);F(this,"lastVpOffLeft",0);F(this,"forkHint","");F(this,"vaultHint","");F(this,"powerUpLabel","");F(this,"deathReason","stolen");F(this,"nextObstacleZ",35);F(this,"nextVaultZ",52);F(this,"nextRunnerZ",50);F(this,"nextPowerUpZ",80);F(this,"nextPackageZ",25);F(this,"nextCoinZ",45);F(this,"spawnHorizon",0);F(this,"comboCount",0);F(this,"comboTimer",0);F(this,"nextMiniEventZ",200);F(this,"nextUfoHazardZ",130);F(this,"ufoHazard",null);F(this,"blackoutTimer",0);F(this,"bossSpawned",!1);F(this,"shootSpread",!1);F(this,"shootPierce",0);F(this,"shootHoming",!1);F(this,"homingSteerBoost",1);F(this,"baseShootSpread",!1);F(this,"baseShootPierce",0);F(this,"baseShootHoming",!1);F(this,"gearTrialTimer",0);F(this,"gearTrialTurret",null);F(this,"styleStreak",0);F(this,"styleStreakTimer",0);F(this,"magnetTimer",0);F(this,"comboStingerPlayed",!1);F(this,"styleToastTimer",0);F(this,"spectacle",new P_);F(this,"shootPulse",0);F(this,"cb");F(this,"raf",0);F(this,"lastFrame",0);F(this,"hudTimer",0);F(this,"lastConvoyCount",-1);F(this,"baseCamera",new D);F(this,"lookTarget",new D);F(this,"loop",()=>{if(!this.running)return;this.raf=requestAnimationFrame(this.loop);const t=performance.now(),e=Math.min(.05,Math.max(.001,(t-this.lastFrame)/1e3));this.lastFrame=t,this.update(e),this.render()});F(this,"sunTick",0);this.canvas=t,this.save=e,this.cb=n,this.renderer=new uh({canvas:t,antialias:dg,powerPreference:O?"low-power":"high-performance",stencil:!1,depth:!0,alpha:!1,precision:O?"mediump":"highp"}),this.renderer.setPixelRatio(la()),this.renderer.shadowMap.enabled=ug,this.renderer.shadowMap.type=Fh,this.renderer.toneMapping=Ac,this.renderer.toneMappingExposure=O?.92:1.02,this.renderer.outputColorSpace=ue,this.renderer.sortObjects=!1,this.renderer.info.autoReset=!0,this.scene=new Jc,this.camera=new Ye(55,1,.1,O?150:180),this.pipeline=new R_(this.renderer,this.scene,this.camera),this.world=new Eg(this.scene),this.particles=new __(this.scene),this.shake=new x_,this.bindKeyboard(),this.bindPointer(),window.addEventListener("resize",()=>this.resize()),this.viewportCleanup=F_(()=>this.resize()),window.visualViewport&&window.visualViewport.addEventListener("resize",()=>this.resize()),this.resize()}setAutoFire(t){this.autoFireEnabled=t}bindTouchControls(t){var r;(r=this.inputCleanup)==null||r.call(this);const e=[],n=(a,o)=>{if(!a)return;const l=u=>{o?this.touchSteerLeft=u:this.touchSteerRight=u},c=u=>{u.preventDefault(),l(!0)},h=()=>l(!1);a.addEventListener("pointerdown",c),a.addEventListener("pointerup",h),a.addEventListener("pointerleave",h),a.addEventListener("pointercancel",h),e.push(()=>{a.removeEventListener("pointerdown",c),a.removeEventListener("pointerup",h),a.removeEventListener("pointerleave",h),a.removeEventListener("pointercancel",h)})};n(t.querySelector("#steer-left"),!0),n(t.querySelector("#steer-right"),!1);const i=a=>{!this.running||this.dead||a.target.closest("#steer-left, #steer-right, #ability-btn, #special-btn, #jump-btn, #slide-btn, #shoot-btn, #hud-back-btn, #autofire-toggle, .hud-panel, .hud-actions-right, .btn")||this.shoot()};t.addEventListener("pointerdown",i),this.inputCleanup=()=>{t.removeEventListener("pointerdown",i),e.forEach(a=>a())}}startLevel(t){const e=I_(t);if(!e)return;this.cleanup(),this.level=e,this.running=!0,this.dead=!1,this.elapsed=0,this.gameTime=0,this.lastFrame=performance.now(),this.hudTimer=0,this.lastConvoyCount=-1,this.forkHint="",this.vaultHint="",this.powerUpLabel="",this.throws=[],this.smokeTimer=0,this.dashTimer=0,this.dashActive=!1,this.abilityCd=0,this.shootCd=0,this.hurtIFrames=0,this.invincibleTimer=0,this.slowMoTimer=0,this.fastShotTimer=0,this.turboTimer=0,this.blurTimer=0,this.timeScale=1,this.specialCharge=0,this.specialShakesLeft=0,this.specialShakeTimer=0,this.touchSteerLeft=!1,this.touchSteerRight=!1,this.autoFireEnabled=O&&this.save.mobileAutoFire,this.lastVpW=0,this.lastVpH=0,this.lastVpScale=1,this.lastVpOffTop=0,this.lastVpOffLeft=0,this.applyUpgrades();const n=e.difficulty,i=(O?18:16.4)+n*(O?.4:.32);if(this.run={...Lo,convoy:5,packages:this.startPackages,maxConvoy:50,maxPackages:20,integrity:3+(this.save.purchases["package-armor"]??0),maxIntegrity:3+(this.save.purchases["package-armor"]??0),baseSpeed:i,speed:i},this.mailGunRate=.22,this.save.equippedTurrets.includes("pepper-drone")&&(this.mailGunRate=Math.max(.12,.22-(this.save.purchases["pepper-drone"]??0)*.03)),this.save.equippedTurrets.includes("box-cannon")&&(this.mailGunDamage+=1+(this.save.purchases["box-cannon"]??0)),this.save.equippedTurrets.includes("helper-beacon")){const o=this.save.purchases["helper-beacon"]??0;this.mailGunDamage+=o*2}this.shootSpread=this.save.equippedTurrets.includes("spread-mail"),this.shootPierce=this.save.equippedTurrets.includes("pierce-pack")?1+(this.save.purchases["pierce-pack"]??0):0,this.shootHoming=this.save.equippedTurrets.includes("homing-stamp"),this.baseShootSpread=this.shootSpread,this.baseShootPierce=this.shootPierce,this.baseShootHoming=this.shootHoming,this.applyGearSynergies(),this.gearTrialTimer=0,this.gearTrialTurret=null,this.styleStreak=0,this.styleStreakTimer=0,this.magnetTimer=0,this.comboStingerPlayed=!1,this.homingSteerBoost=1,this.comboCount=0,this.comboTimer=0,this.nextMiniEventZ=200,this.nextUfoHazardZ=120+Math.random()*35,this.ufoHazard&&(this.ufoHazard.dispose(),this.ufoHazard=null),this.blackoutTimer=0,this.bossSpawned=!1,this.world.setBlackout(0),this.pickupRadius=2.2+(this.save.purchases["coin-magnet"]??0)*.4,this.spectacle.reset(),this.shootPulse=0;const r=e.segments[e.segments.length-1];this.levelLength=r.kind==="dropoff"?r.z+20:800,this.spawnHorizon=this.levelLength-30,this.nextObstacleZ=38,this.nextVaultZ=78+Math.floor(Math.random()*24),this.nextRunnerZ=38+Math.random()*12,this.nextPowerUpZ=28+Math.random()*12,this.nextPackageZ=20,this.nextCoinZ=35;const a=so(e.district);this.world.build(a,this.levelLength),pe.setDistrict(e.district),this.player=new kg(this.scene,Eo(this.save.selectedCharacter??"johnny")),this.player.setJumpPower(12+(this.save.purchases["jump-boots"]??0)*1.4),this.player.z=0,this.player.targetX=0,this.player.x=0,this.convoy=new Bg(this.scene),this.convoy.setCount(O?0:2);for(const o of e.segments)o.kind==="gate"?this.routeGates.push(zg(this.scene,o.z,o.safe)):o.kind==="vault"?this.vaultGates.push(jl(this.scene,o.z,o.clearance)):o.kind==="dropoff"&&(this.dropoff=Og(this.scene,o.z));this.player.setPackageGlow(.5,e.district),O&&(fi(),this.resize(),requestAnimationFrame(()=>this.resize())),this.loop()}applyUpgrades(){this.startPackages=(this.save.purchases["starter-pouches"]??0)*2;const t=this.save.equippedAbility;t==="smoke-bomb"?this.abilityMaxCd=12-(this.save.purchases["smoke-bomb"]??0)*2:t==="rally-horn"?this.abilityMaxCd=15-(this.save.purchases["rally-horn"]??0)*3:t==="dash"?this.abilityMaxCd=10-(this.save.purchases.dash??0)*2:this.abilityMaxCd=12}bindKeyboard(){window.addEventListener("keydown",t=>{this.keys.add(t.code),t.code==="KeyE"&&(t.preventDefault(),t.repeat||this.useSpecialQuake()),t.code==="KeyQ"&&(t.preventDefault(),t.repeat||this.useAbility()),t.code==="Space"&&(t.preventDefault(),t.repeat||this.jump()),(t.code==="KeyS"||t.code==="ArrowDown")&&(t.preventDefault(),t.repeat||this.slide()),(t.code==="ArrowLeft"||t.code==="KeyA")&&t.preventDefault(),(t.code==="ArrowRight"||t.code==="KeyD")&&t.preventDefault()}),window.addEventListener("keyup",t=>this.keys.delete(t.code))}bindPointer(){this.canvas.addEventListener("pointerdown",t=>{!this.running||this.dead||t.button===0&&(t.preventDefault(),this.shoot())}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),O&&this.canvas.addEventListener("touchstart",t=>{t.touches.length===1&&t.preventDefault()},{passive:!1})}jump(){!this.running||this.dead||this.player.jump()&&(this.shake.shake(.08),pe.jump())}slide(){!this.running||this.dead||this.player.slide()&&this.shake.shake(.05)}shoot(){if(!this.running||this.dead||this.shootCd>0)return;const t=this.mailGunRate;this.shootCd=this.fastShotTimer>0?t*.45:t;let e=this.player.x,n=this.player.z+40;const i=this.nearestRunner();i&&(e=i.x,n=i.z),this.player.mailGunAnim(),pe.shootMail(),this.shootPulse=.5,this.shake.shake(.035),this.spectacle.bumpCombat(.07),this.particles.muzzleFlash(this.player.x+.35,1.05,this.player.z+.55);const r={pierceLeft:this.shootPierce,homing:this.shootHoming};if(this.shootSpread)for(const a of[-1,0,1])this.throws.push(nc(this.scene,this.player.x,this.player.z,e,n,this.mailGunDamage,{...r,spreadIndex:a}));else this.throws.push(nc(this.scene,this.player.x,this.player.z,e,n,this.mailGunDamage,r))}fireMailGun(){this.shoot()}throwPackage(){this.shoot()}nearestRunner(){let t=null,e=1/0;for(const n of this.runners){if(!n.alive)continue;const i=n.z-this.player.z;i>0&&i<55&&i<e&&(e=i,t=n)}return t}useSpecialQuake(){!this.running||this.dead||this.specialShakesLeft>0||this.specialCharge<1||(this.specialCharge=0,this.specialShakesLeft=3,this.specialShakeTimer=0,this.convoy.reactQuake(),pe.quake(),this.cb.onToast("💥 GROUND QUAKE ×3!"),this.emitHud(this.level.timeLimit-this.elapsed))}useAbility(){if(!this.running||this.dead||this.abilityCd>0)return;const t=this.save.equippedAbility;t&&(t==="smoke-bomb"?(this.smokeTimer=4,this.cb.onToast("Smoke!")):t==="rally-horn"?(this.invincibleTimer=Math.max(this.invincibleTimer,2),this.cb.onToast("Brief shield!")):t==="dash"&&(this.dashActive=!0,this.dashTimer=.6,this.player.dashOffset(),this.cb.onToast("Dash!")),this.abilityCd=this.abilityMaxCd)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}update(t){if(this.dead)return;this.syncViewport(),this.slowMoTimer>0?(this.slowMoTimer-=t,this.timeScale=.42,this.slowMoTimer<=0&&(this.timeScale=1)):this.timeScale=1,this.invincibleTimer>0&&(this.invincibleTimer-=t),this.hurtIFrames>0&&(this.hurtIFrames-=t),this.fastShotTimer>0&&(this.fastShotTimer-=t),this.turboTimer>0&&(this.turboTimer-=t,this.turboTimer<=0&&(this.run.speed=this.run.baseSpeed)),this.blurTimer>0&&(this.blurTimer-=t,this.blurTimer<=0&&this.player.setGhostMode(!1)),this.powerUpLabel=this.invincibleTimer>0?"🛡 SHIELD":this.hurtIFrames>0?"💥 HIT!":this.turboTimer>0?"🔥 OVERDRIVE":this.blurTimer>0?"👻 GHOSTED":this.fastShotTimer>0?"⚡ FAST":this.slowMoTimer>0?"🐢 SLOW-MO":"";const e=t*this.timeScale;this.elapsed+=t,this.gameTime+=t,this.abilityCd>0&&(this.abilityCd=Math.max(0,this.abilityCd-t)),this.shootCd>0&&(this.shootCd=Math.max(0,this.shootCd-t)),O&&this.autoFireEnabled&&this.shootCd<=0&&this.shoot(),this.smokeTimer>0&&(this.smokeTimer-=t),this.dashActive&&(this.dashTimer-=t,this.dashTimer<=0&&(this.dashActive=!1)),this.obstacleCooldown>0&&(this.obstacleCooldown-=t),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.comboCount=0)),this.blackoutTimer>0&&(this.blackoutTimer-=t,this.blackoutTimer<=0&&this.world.setBlackout(0)),this.styleStreakTimer>0&&(this.styleStreakTimer-=t,this.styleStreakTimer<=0&&(this.styleStreak=0)),this.magnetTimer>0&&(this.magnetTimer-=t),this.gearTrialTimer>0&&(this.gearTrialTimer-=t,this.gearTrialTimer<=0&&this.endGearTrial()),pe.setNight(this.world.getSkyNight()),this.player.z+=this.run.speed*e,this.run.distance=this.player.z,this.specialCharge=Math.min(1,this.specialCharge+this.run.speed*e*5e-4),this.updateSpecialQuake(t),(this.keys.has("ArrowLeft")||this.keys.has("KeyA")||this.touchSteerLeft)&&(this.player.targetX+=this.steerSpeed*t),(this.keys.has("ArrowRight")||this.keys.has("KeyD")||this.touchSteerRight)&&(this.player.targetX-=this.steerSpeed*t),this.player.targetX=Oi.clamp(this.player.targetX,-this.roadHalfWidth,this.roadHalfWidth),this.player.update(t,this.roadHalfWidth,!0,this.run.speed,this.world.getGameplayNight()),this.run.convoy!==this.lastConvoyCount&&(this.convoy.setCount(O?0:Math.min(2,this.run.convoy)),this.lastConvoyCount=this.run.convoy),this.convoy.update(this.player.x,this.player.z,this.gameTime),this.proceduralSpawn(),this.updateMiniEvents(),this.updateSpectacle(t),this.updateUfoHazard(t),this.maybeSpawnBoss(),this.cullBehind();const n=this.player.z;this.world.setPlayerZ(n,t),this.sunTick+=t,this.sunTick>=(O?.1:.05)&&(this.sunTick=0,this.world.followSun(this.player.x,n)),jg(this.coins,t,this.gameTime,n),zv(this.packagePickups,this.gameTime,n),l_(this.powerUps,this.gameTime,n),t_(this.runners,e,this.gameTime,1,n,h=>{pe.telegraphWarn(),Math.random()<.4&&pe.alienChatter()},this.world.getGameplayNight()),this.throws=ic(this.throws,t,this.scene,this.gameTime,this.runners,this.homingSteerBoost),this.particles.update(t),this.shootPulse=Math.max(0,this.shootPulse-t*2.8),this.world.update(this.gameTime,n,t,{turbo:this.turboTimer>0,speed:this.run.speed,baseSpeed:this.run.baseSpeed,playerX:this.player.x,shootPulse:this.shootPulse,combatIntensity:this.spectacle.getCombatIntensity()});for(const h of this.routeGates)!h.resolved&&Jn(h.z,n,O?42:55)&&qg(h,this.gameTime);for(const h of this.vaultGates)!h.resolved&&Jn(h.z,n,O?42:55)&&Hg(h,this.gameTime);this.dropoff&&Jn(this.dropoff.z,n,O?42:55)&&Yg(this.dropoff,this.gameTime),kv(this.obstacles,this.gameTime,n,this.world.getGameplayNight());const i=this.pickupRadius+(this.magnetTimer>0?2.8:0),r=Jg(this.coins,this.player.x,this.player.z,i);r&&(this.run.coins+=r,this.particles.collectBurst(this.player.x,this.player.z));const a=Ov(this.packagePickups,this.player.x,this.player.z,i);a.packages&&(this.run.packages=Math.min(this.run.maxPackages,this.run.packages+a.packages),this.particles.collectBurst(this.player.x,this.player.z),this.spectacle.bumpCombat(.04)),a.golden&&(this.run.coins+=18*a.golden,this.fastShotTimer=Math.max(this.fastShotTimer,4),this.particles.collectBurst(this.player.x,this.player.z),this.cb.onToast("✨ Golden Mail — fast shots!"),pe.combo(4));const o=c_(this.powerUps,this.player.x,this.player.z,i);o&&(this.applyPowerUp(o),this.particles.collectBurst(this.player.x,this.player.z)),this.checkThrowHits(),this.checkObstacles(),this.checkNearMisses(),this.checkRunners(),this.checkRouteGates(),this.checkVaultGates(),this.checkDropoff(),this.checkLose();const l=this.level.timeLimit-this.elapsed;if(l<=0){this.die("timeout");return}this.hudTimer+=t;const c=O?.12:.08;this.hudTimer>=c&&(this.hudTimer=0,this.emitHud(l)),this.cb.onCombat(!1),this.baseCamera.set(this.player.x*.35,10+this.player.jumpY*.15,this.player.z-12),this.lookTarget.set(this.player.x*.25,1.5+this.player.jumpY*.2,this.player.z+18),this.shake.apply(this.camera,this.baseCamera,this.lookTarget)}applyPowerUp(t){this.cb.onToast(h_[t]),t==="slowmo"?this.slowMoTimer=3.5:t==="fastshot"?this.fastShotTimer=5:t==="invincible"?this.invincibleTimer=4:t==="health"?this.run.integrity<this.run.maxIntegrity?this.run.integrity++:(this.run.coins+=15,this.cb.onToast("Full health — +15 coins!")):t==="turbo"?(this.turboTimer=4,this.run.speed=this.run.baseSpeed*1.55,this.shake.shake(.35),this.convoy.reactTurbo(),pe.turbo(),pe.honk()):t==="blur"&&(this.blurTimer=3.5,this.player.setGhostMode(!0)),this.emitHud(this.level.timeLimit-this.elapsed)}emitHud(t){this.cb.onHudUpdate({integrity:this.run.integrity,maxIntegrity:this.run.maxIntegrity,coins:this.run.coins,packages:this.run.packages,distance:this.run.distance,totalDistance:this.levelLength,timeLeft:t,abilityCd:this.abilityCd,abilityReady:this.abilityCd<=0&&!!this.save.equippedAbility,specialCharge:this.specialCharge,specialReady:this.specialCharge>=1&&this.specialShakesLeft<=0,specialShakes:this.specialShakesLeft,shootReady:this.shootCd<=0,jumpReady:!this.player.isJumping&&!this.player.isSliding,slideReady:!this.player.isJumping&&!this.player.isSliding,forkHint:this.forkHint||void 0,vaultHint:this.vaultHint||void 0,powerUpLabel:this.comboCount>=2?`⚡ ${this.comboCount}x COMBO`:this.magnetTimer>0?"🧲 STYLE MAGNET":this.gearTrialTimer>0&&this.gearTrialTurret?`🎁 ${mr.gearTrialName(this.gearTrialTurret)}`:this.powerUpLabel||void 0,invincible:this.invincibleTimer>0,screenBlur:this.blurTimer>0})}proceduralSpawn(){const t=this.level.difficulty,e=O?72:92,n=this.player.z+e,i=1,r=O?9:12,a=O?9:12,o=O?6:10;let l=0;for(;this.nextObstacleZ<n&&this.nextObstacleZ<this.spawnHorizon&&l<i&&!(this.obstacles.length>=r);){const f=u_(),g=O?1:f.length;for(let _=0;_<g;_++)this.obstacles.push(Uv(this.scene,d_(this.level.id),f[_],this.nextObstacleZ));this.nextObstacleZ+=f_(t)+Math.random()*10,l++}const c=O?3:5;if(this.nextVaultZ<n&&this.nextVaultZ<this.spawnHorizon&&this.vaultGates.filter(f=>!f.resolved).length<c){const f=this.vaultGates.length%2===0?"jump":"slide";this.vaultGates.push(jl(this.scene,this.nextVaultZ,f)),this.nextVaultZ+=58+Math.random()*32+t*.35}let h=0;for(;this.nextRunnerZ<n&&this.nextRunnerZ<this.spawnHorizon&&h<i&&!(this.runners.length>=a);){const f=cc(t),g=js(),_=Math.random()<(O?.05:.08);if(this.runners.push(fa(this.scene,f,g,this.nextRunnerZ,{elite:_})),_&&pe.eliteSpawn(),!O&&t>=3&&Math.random()<.28&&this.runners.length<a){let m=js();for(let p=0;p<4&&m===g;p++)m=js();m!==g&&this.runners.push(fa(this.scene,cc(t),m,this.nextRunnerZ+.5))}this.nextRunnerZ+=p_(t)+Math.random()*8,h++}this.nextPowerUpZ<n&&this.nextPowerUpZ<this.spawnHorizon&&this.powerUps.length<o&&(this.powerUps.push(fc(this.scene,pc(),js(),this.nextPowerUpZ)),this.nextPowerUpZ+=m_());let u=0;for(;this.nextPackageZ<n&&this.nextPackageZ<this.spawnHorizon&&u<i;)this.packagePickups.push(...Bv(this.scene,this.nextPackageZ,1,0)),this.nextPackageZ+=g_(),u++;let d=0;for(;this.nextCoinZ<n&&this.nextCoinZ<this.spawnHorizon&&d<i;){const f=O?2+Math.floor(Math.random()*2):3+Math.floor(Math.random()*3);this.coins.push(...da(this.scene,this.nextCoinZ,f,3.5)),this.nextCoinZ+=O?28+Math.random()*20:22+Math.random()*18,d++}}addSpecialCharge(t){this.specialCharge=Math.min(1,this.specialCharge+t)}updateSpecialQuake(t){this.specialShakesLeft<=0||(this.specialShakeTimer-=t,!(this.specialShakeTimer>0)&&(this.executeQuakePulse(),this.specialShakesLeft--,this.specialShakeTimer=this.specialShakesLeft>0?.38:0))}executeQuakePulse(){this.shake.shake(1.5);const t=this.player.x,e=this.player.z,n=this.quakeRadius*this.quakeRadius;for(const r of this.obstacles){if(r.hit)continue;const a=r.x-t,o=r.z-e;a*a+o*o<=n&&(r.hit=!0,r.mesh.visible=!1,this.particles.hitBurst(r.x,r.z))}const i=[];for(const r of this.runners){if(!r.alive)continue;const a=r.x-t,o=r.z-e;a*a+o*o<=n&&(this.run.coins+=r.tier==="stalker"?15:r.tier==="raider"?10:5,i.push(r),this.particles.hitBurst(r.x,r.z))}for(const r of i)pa(r,this.scene),this.runners=this.runners.filter(a=>a!==r);this.particles.gateBurst(t,e,"#FF9800")}cullBehind(){const t=this.player.z-25,e=this.obstacles.filter(o=>o.z<t);e.length&&(ec(e,this.scene),this.obstacles=this.obstacles.filter(o=>o.z>=t));const n=this.runners.filter(o=>o.z<t);n.length&&(hc(n,this.scene),this.runners=this.runners.filter(o=>o.z>=t));const i=this.coins.filter(o=>o.collected||o.z<t);i.length&&(tc(i,this.scene),this.coins=this.coins.filter(o=>!o.collected&&o.z>=t));const r=this.packagePickups.filter(o=>o.collected||o.z<t);r.length&&(sc(r,this.scene),this.packagePickups=this.packagePickups.filter(o=>!o.collected&&o.z>=t));const a=this.powerUps.filter(o=>o.collected||o.z<t);a.length&&(mc(a,this.scene),this.powerUps=this.powerUps.filter(o=>!o.collected&&o.z>=t))}applyGearSynergies(){const t=this.save.equippedTurrets;t.includes("spread-mail")&&t.includes("pierce-pack")&&(this.shootPierce+=1,this.mailGunDamage=Math.floor(this.mailGunDamage*1.12),this.cb.onToast("⚡ Lane Sweeper — spread pierces!")),t.includes("homing-stamp")&&t.includes("pepper-drone")&&(this.mailGunRate*=.88,this.homingSteerBoost=1.45,this.cb.onToast("🎯 Stamp Lock — homing fast fire!"))}static gearTrialName(t){return t==="spread-mail"?"Spread Envelope":t==="pierce-pack"?"Piercing Post":"Tracking Stamps"}startGearTrial(){const e=["spread-mail","pierce-pack","homing-stamp"].filter(i=>!this.save.equippedTurrets.includes(i));if(!e.length)return;const n=e[Math.floor(Math.random()*e.length)];this.gearTrialTurret=n,this.gearTrialTimer=45,n==="spread-mail"&&(this.shootSpread=!0),n==="pierce-pack"&&(this.shootPierce=Math.max(this.shootPierce,2)),n==="homing-stamp"&&(this.shootHoming=!0),this.cb.onToast(`🎁 Trial: ${mr.gearTrialName(n)}!`)}endGearTrial(){this.shootSpread=this.baseShootSpread,this.shootPierce=this.baseShootPierce,this.shootHoming=this.baseShootHoming;const t=this.save.equippedTurrets;t.includes("spread-mail")&&t.includes("pierce-pack")&&(this.shootPierce+=1),this.homingSteerBoost=t.includes("homing-stamp")&&t.includes("pepper-drone")?1.45:1,this.gearTrialTurret=null}onRunnerKill(t,e){this.comboTimer=3.2,this.comboCount++;const n=1+(this.comboCount-1)*.12;let i=(t.tier==="stalker"?15:t.tier==="raider"?10:5)*n;t.elite&&(i+=25),t.isBoss&&(i+=50),e&&(i*=1.5),this.run.coins+=Math.floor(i),this.addSpecialCharge(.14+this.comboCount*.035),this.spectacle.bumpCombat(t.isBoss?.25:t.elite?.15:.1),pe.alienKill(),e&&pe.headshot(),this.comboCount>=2&&pe.combo(this.comboCount),this.comboCount>=5&&!this.comboStingerPlayed&&(this.comboStingerPlayed=!0,pe.comboStinger()),this.comboCount<=1&&(this.comboStingerPlayed=!1),this.particles.hitBurst(t.x,t.z),t.elite&&!t.isBoss&&(this.coins.push(...da(this.scene,t.z,O?5:8,4)),this.packagePickups.push(Vv(this.scene,t.x,t.z))),t.isBoss&&(this.startGearTrial(),this.powerUps.push(fc(this.scene,pc(),0,t.z)),this.cb.onToast("💥 Boss down — deliver the mail!"))}updateSpectacle(t){const e=this.spectacle.update(t,{playerZ:this.player.z,comboCount:this.comboCount,runnerCount:this.runners.filter(n=>n.alive).length,night:this.world.getSkyNight()});e&&(this.cb.onToast(e.message),this.world.playSpectacle(e.kind,this.player.z),this.shake.shake(e.pulse*.14),pe.spectacle(e.kind),e.kind==="energy-surge"&&(this.world.setBlackout(.35),this.blackoutTimer=Math.max(this.blackoutTimer,2.5))),pe.setCombatIntensity(this.spectacle.getCombatIntensity())}updateUfoHazard(t){var i;if(this.world.getSkyNight()<=.4){(i=this.ufoHazard)!=null&&i.active&&this.ufoHazard.end();return}if(this.ufoHazard||(this.ufoHazard=new s_(this.scene)),!this.ufoHazard.active&&this.player.z>=this.nextUfoHazardZ&&(this.nextUfoHazardZ+=155+Math.random()*70,this.ufoHazard.start(this.player.x,this.player.z),this.cb.onToast("🛸 UFO overhead — dodge the beam!"),pe.ufoBeam()),!this.ufoHazard.active)return;this.ufoHazard.update(t,this.gameTime,this.player.z);const n=this.player.jumpY>.4||this.player.isSliding||this.dashActive||this.invincibleTimer>0;this.ufoHazard.tickExposure(t,this.player.x,this.player.z,n)&&(this.isProtected()||(this.takeHit("obstacle"),this.cb.onToast("👽 Caught in the beam!"),this.ufoHazard.end()))}updateMiniEvents(){if(this.player.z<this.nextMiniEventZ)return;this.nextMiniEventZ+=200+Math.random()*50;const t=this.level.district,e=Math.random(),n=()=>{this.cb.onToast("🛸 UFO convoy — coin shower!"),this.coins.push(...da(this.scene,this.player.z+45,O?6:10,5))},i=()=>{this.cb.onToast("📬 Escort convoy rolling!"),this.convoy.reactTurbo(),pe.honk()},r=()=>{this.cb.onToast("🌑 Blackout zone — eyes up!"),this.world.setBlackout(.58),this.blackoutTimer=9};t===3?e<.55?n():e<.82?i():r():t===5||t===7?e<.48?r():e<.74?i():n():t>=6?e<.38?r():e<.68?n():i():e<.34?n():e<.67?i():r()}maybeSpawnBoss(){this.bossSpawned||!this.dropoff||this.level.name.includes("Boss")&&(this.player.z<this.dropoff.z-95||(this.bossSpawned=!0,this.runners.push(fa(this.scene,"stalker",0,this.dropoff.z-8,{boss:!0})),pe.eliteSpawn(),this.cb.onToast("👾 BOSS ALIEN guards the drop-off!")))}checkNearMisses(){for(const t of this.obstacles){if(t.hit)continue;const e=this.player.z-t.z;if(e<.8||e>2.2)continue;const n=Math.abs(this.player.x-t.x),i=t.radius-.05,r=t.radius+.45;n>=i&&n<=r&&(this.player.isJumping||this.player.isSliding||this.dashActive)&&(t.mesh.userData.styleAwarded||(t.mesh.userData.styleAwarded=!0,this.run.coins+=5,pe.nearMiss(),this.convoy.reactTurbo(),this.styleStreak++,this.styleStreakTimer=4,this.styleStreak>=3?(this.styleStreak=0,this.magnetTimer=5,this.cb.onToast("🔗 STYLE MAGNET!"),pe.honk()):this.styleStreak===2?this.cb.onToast("✨ Style ×2 — one more!"):this.cb.onToast("✨ STYLE +5")))}}checkThrowHits(){for(const t of this.throws){if(t.life<=0)continue;const e=t.mesh.position.z,n=t.mesh.position.y;for(const i of this.runners){if(!i.alive||Math.abs(i.z-e)>2.5)continue;const r=t.mesh.position.x-i.x,a=t.mesh.position.z-i.z;if(r*r+a*a>=1.85)continue;const o=n_(n,i),l=o?t.damage*2:t.damage;i.hp-=l,pe.alienHit(),this.particles.alienHit(t.mesh.position.x,t.mesh.position.y,t.mesh.position.z,o),this.spectacle.bumpCombat(o?.12:.06),t.pierceLeft>0?t.pierceLeft--:t.life=0,i.hp<=0&&(this.onRunnerKill(i,o),pa(i,this.scene),this.runners=this.runners.filter(c=>c!==i))}}}isProtected(){return this.invincibleTimer>0||this.hurtIFrames>0}takeHit(t){this.isProtected()||(this.run.integrity--,this.run.integrityLost=!0,this.hurtIFrames=1.5,this.obstacleCooldown=.6,this.player.flashHurt(),this.shake.shake(.75),this.cb.onDamageFlash(),this.particles.hitBurst(this.player.x,this.player.z),t==="runner"&&this.player.knockback(this.player.x>=0?2:-2),this.run.integrity<=0?this.die(t==="runner"?"overwhelmed":"stolen"):this.emitHud(this.level.timeLimit-this.elapsed))}checkObstacles(){if(!this.isProtected()){for(const t of this.obstacles)if(!(t.hit||Math.abs(this.player.z-t.z)>1.4||Math.abs(this.player.x-t.x)>t.radius+.3)&&!(this.player.jumpY>Nv(t.kind)+.08)){if(this.dashActive){t.hit=!0,t.mesh.visible=!1,this.particles.hitBurst(t.x,t.z);continue}t.hit=!0,t.mesh.visible=!1,this.takeHit("obstacle");return}}}checkRunners(){if(!(this.isProtected()||this.smokeTimer>0))for(const t of this.runners){if(!t.alive)continue;const e=Math.abs(this.player.x-t.x),n=Math.abs(this.player.z-t.z),i=e_(t.tier);if(e<i&&n<1.3&&this.player.jumpY<.55){pa(t,this.scene),this.runners=this.runners.filter(r=>r!==t),this.takeHit("runner");return}}}checkRouteGates(){this.forkHint="";for(const t of this.routeGates){if(t.resolved)continue;const e=t.z-this.player.z;if(e>0&&e<32&&(this.forkHint="⚠ FORK!"),this.player.z>=t.z-3&&this.player.z<=t.z+2&&Math.abs(this.player.x)<1.2){this.die("wrong_turn");return}if(this.player.z<t.z+.4)continue;const n=this.player.x>.75,i=this.player.x<-.75;if(!n&&!i){this.die("wrong_turn");return}const r=n?"left":"right";if(t.resolved=!0,t.centerWall.visible=!1,r!==t.safeSide){this.die("wrong_turn");return}this.run.coins+=8,this.particles.gateBurst(r==="left"?3:-3,t.z,"#00E676"),pe.gatePass()}}takeVaultMiss(){this.isProtected()||(this.run.integrity--,this.run.integrityLost=!0,this.hurtIFrames=1.8,this.obstacleCooldown=.8,this.player.flashHurt(),this.shake.shake(.65),this.cb.onDamageFlash(),this.particles.hitBurst(this.player.x,this.player.z),this.run.integrity<=0?this.die("stolen"):this.emitHud(this.level.timeLimit-this.elapsed))}checkVaultGates(){for(const n of this.vaultGates){if(n.resolved||Math.abs(this.player.x)>3.6||!(this.player.z>=n.z+-1.5&&this.player.z<=n.z+2.4))continue;const r=this.player.jumpY>.1||this.player.isJumping,a=this.player.isSliding,o=n.clearance==="jump"?r:a,l=n.clearance==="jump"&&a||n.clearance==="slide"&&r,c=this.player.z>=n.z-.15;!n.penalized&&c&&(l||!o)&&(n.penalized=!0,pe.vaultBuzz(),this.takeVaultMiss()),this.player.z>n.z+2.4-.35&&(n.resolved=!0,o&&!n.penalized&&(this.run.coins+=4,pe.vaultBuzz()))}}checkDropoff(){!this.dropoff||this.dropoff.reached||this.runners.some(t=>t.alive&&t.isBoss)||this.player.z>=this.dropoff.z-3&&(this.dropoff.reached=!0,this.particles.gateBurst(0,this.dropoff.z,"#FFD54F"),pe.delivery(),this.endGame(!0))}checkLose(){this.run.integrity<=0&&!this.dead&&this.die("stolen")}die(t){this.dead||(this.dead=!0,this.deathReason=t,this.player.flashHurt(),this.shake.shake(1.2),this.cb.onDamageFlash(),this.particles.burst(this.player.x,1.5,this.player.z,"#FF1744",O?18:30,6),setTimeout(()=>this.endGame(!1),1200))}endGame(t){if(!this.running)return;this.running=!1;let e=0;t&&(e=1,!this.run.integrityLost&&this.run.packages>=6&&(e=2),!this.run.integrityLost&&this.run.packages>=12&&this.run.coins>=40&&(e=3));const n=t?this.run.packages*3:0,i=t?25+e*20:Math.floor(this.run.coins*.3),r=this.run.coins+(t?i+n:0),a={stolen:"Crashed into a hazard!",overwhelmed:"An alien tackled you!",timeout:"Delivery window expired!",blocked:"Blocked!",wrong_turn:"Wrong turn — dead end!"};this.cb.onEnd({won:t,stars:e,coinsEarned:r,levelId:this.level.id,time:this.elapsed,deathReason:t?void 0:a[this.deathReason]})}render(){{const t=this.world.getNightFx(),e=this.world.getGameplayNight(),n=O?.96:1.06;this.renderer.toneMappingExposure=n*(1-t*.08)+e*.1}if(this.pipeline){const t=this.world.getNightFx(),e=this.spectacle.getCombatIntensity(),n=this.spectacle.getPostPulse()+this.shootPulse*.35,i=(O?.22:.24)+t*(O?.2:.28)+e*(O?.08:.12);this.pipeline.setBloomStrength(i),this.pipeline.setGradePulse(n),this.pipeline.render()}else this.renderer.render(this.scene,this.camera)}syncViewport(){if(!O||!this.running)return;const t=yh();t.width===this.lastVpW&&t.height===this.lastVpH&&t.scale===this.lastVpScale&&t.offsetTop===this.lastVpOffTop&&t.offsetLeft===this.lastVpOffLeft||(this.lastVpW=t.width,this.lastVpH=t.height,this.lastVpScale=t.scale,this.lastVpOffTop=t.offsetTop,this.lastVpOffLeft=t.offsetLeft,fi(),this.renderer.setPixelRatio(la()),this.renderer.setSize(t.width,t.height,!1),this.camera.aspect=t.width/t.height,this.camera.updateProjectionMatrix())}resize(){var n;let t,e;if(O){const i=fi();t=i.width,e=i.height,this.lastVpW=t,this.lastVpH=e,this.lastVpScale=i.scale,this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`}else t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;t<1||e<1||(this.renderer.setPixelRatio(la()),this.renderer.setSize(t,e,!1),(n=this.pipeline)==null||n.setSize(t,e),this.camera.aspect=t/e,this.camera.far=O?150:180,this.camera.updateProjectionMatrix())}cleanup(){for(const t of this.routeGates)ua(t.mesh,this.scene);for(const t of this.vaultGates)ua(t.mesh,this.scene);hc(this.runners,this.scene),tc(this.coins,this.scene),sc(this.packagePickups,this.scene),mc(this.powerUps,this.scene),ec(this.obstacles,this.scene),this.throws=ic(this.throws,999,this.scene),this.dropoff&&ua(this.dropoff.mesh,this.scene),this.particles.clear(),this.routeGates=[],this.vaultGates=[],this.runners=[],this.coins=[],this.packagePickups=[],this.powerUps=[],this.obstacles=[],this.player&&this.player.dispose(this.scene),this.convoy&&this.convoy.dispose(),this.ufoHazard&&(this.ufoHazard.dispose(),this.ufoHazard=null)}dispose(){var t,e,n;(t=this.inputCleanup)==null||t.call(this),this.inputCleanup=null,(e=this.viewportCleanup)==null||e.call(this),this.viewportCleanup=null,this.stop(),this.cleanup(),(n=this.pipeline)==null||n.dispose(),this.pipeline=null,this.renderer.dispose()}}const ga=[{id:"pepper-drone",category:"gear",name:"Mail Blaster",description:"Faster shoot cooldown — spam mail at charging aliens.",baseCost:70,maxLevel:3},{id:"box-cannon",category:"gear",name:"Parcel Launcher",description:"Package & mail shots hit harder — drop stalkers faster.",baseCost:110,maxLevel:3},{id:"helper-beacon",category:"gear",name:"Target Lock",description:"Auto-aim shots deal bonus damage to runner aliens.",baseCost:90,maxLevel:3},{id:"homing-stamp",category:"gear",name:"Tracking Stamps",description:"Mail shots curve toward the nearest charging alien.",baseCost:125,maxLevel:3},{id:"spread-mail",category:"gear",name:"Spread Envelope",description:"Fire a 3-way mail burst — blanket the lane.",baseCost:95,maxLevel:2},{id:"pierce-pack",category:"gear",name:"Piercing Post",description:"Mail punches through multiple aliens in a line.",baseCost:105,maxLevel:3},{id:"smoke-bomb",category:"ability",name:"Smoke Screen",description:"Aliens cannot tackle you for 4 seconds. 12s cooldown.",baseCost:140,maxLevel:2},{id:"rally-horn",category:"ability",name:"Shield Burst",description:"Brief invincibility to shrug off a hit. 15s cooldown.",baseCost:120,maxLevel:2},{id:"dash",category:"ability",name:"Express Dash",description:"Invulnerable burst — smash through one hazard. 10s cooldown.",baseCost:130,maxLevel:2},{id:"package-armor",category:"upgrade",name:"Extra Heart",description:"+1 max life — survive an extra obstacle or alien hit.",baseCost:80,maxLevel:3},{id:"jump-boots",category:"upgrade",name:"Jump Boots",description:"Higher jumps — clear barricades and pods more easily.",baseCost:60,maxLevel:3},{id:"starter-pouches",category:"upgrade",name:"Starter Pouches",description:"Begin each run with extra packages already collected.",baseCost:55,maxLevel:4},{id:"coin-magnet",category:"upgrade",name:"Coin Magnet",description:"Wider pickup radius for coins and power-ups.",baseCost:50,maxLevel:3}];function yc(s,t){return Math.floor(s.baseCost*Math.pow(1.55,t))}const N_=[{key:"gear",label:"Gear",hint:"Equip up to 2"},{key:"ability",label:"Abilities",hint:"Equip 1"},{key:"upgrade",label:"Upgrades",hint:"Passive — always on"}];function k_(){return`
    <div class="animated-backdrop" aria-hidden="true">
      <div class="backdrop-sky"></div>
      <div class="backdrop-aurora"></div>
      <div class="backdrop-stars"></div>
      <div class="backdrop-shooting-stars">
        <span class="shoot-star ss-1"></span>
        <span class="shoot-star ss-2"></span>
        <span class="shoot-star ss-3"></span>
      </div>
      <div class="backdrop-city"></div>
      <div class="backdrop-road"></div>
      <div class="backdrop-glow backdrop-glow-a"></div>
      <div class="backdrop-glow backdrop-glow-b"></div>
      <div class="backdrop-glow backdrop-glow-c"></div>
      <span class="float-icon fi-1">📦</span>
      <span class="float-icon fi-2">📦</span>
      <span class="float-icon fi-3">🛸</span>
      <span class="float-icon fi-4">👽</span>
      <span class="float-icon fi-5">🪙</span>
      <span class="float-icon fi-6">⭐</span>
      <span class="float-icon fi-7">📋</span>
      <span class="float-icon fi-8">✉️</span>
    </div>`}const gr=128,Mc=new Map;let us=null;function B_(){return us||(us=new uh({antialias:!1,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),us.setPixelRatio(1),us.outputColorSpace=ue),us}function z_(s){const t=Mc.get(s);if(t)return t;const e=Eo(s),n=new Jc;n.background=null;const i=new Ye(32,1,.1,40);i.position.set(.15,1.15,3.35),i.lookAt(0,1.05,0),n.add(new rh(16777215,.9));const r=new vs(16777215,1.15);r.position.set(2.5,5,4),n.add(r);const a=new vs(10406911,.55);a.position.set(-2.5,2,3),n.add(a);const{mesh:o}=mh(e);o.rotation.y=-.42,n.add(o);const l=B_();l.setSize(gr,gr,!1),l.render(n,i);const c=l.domElement.toDataURL("image/png");return Mc.set(s,c),Ze(o),c}function O_(s,t){const e=document.createElement("img");e.className="character-preview-img",e.alt=Eo(t).name,e.width=gr,e.height=gr,e.decoding="async",e.src=z_(t),s.replaceChildren(e)}const bc={1:"district-sunny",2:"district-downtown",3:"district-desert",4:"district-jungle",5:"district-industrial",6:"district-neon",7:"district-blackzone"},Sc={1:{icon:"🏡",tagline:"Suburban first contacts — aliens in the hedges"},2:{icon:"🏙️",tagline:"Downtown chaos — deliver through the warzone"},3:{icon:"🏜️",tagline:"Desert heat — sand, scorpions, and saucers"},4:{icon:"🌴",tagline:"Jungle overrun — vines, spores, and stalkers"},5:{icon:"🏭",tagline:"Industrial rain — acid leaks and blackouts"},6:{icon:"🌃",tagline:"Neon night — synthwave slaughter highway"},7:{icon:"☠️",tagline:"The Black Zone — no mercy, no overtime"}};function H_(s){for(let t=s.segments.length-1;t>=0;t--){const e=s.segments[t];if(e.kind==="dropoff")return e.z}return 750}function G_(s){return ev(s).split(" · ").map(t=>`<span class="hazard-chip">${t}</span>`).join("")}class V_{constructor(t,e){F(this,"root");F(this,"save");F(this,"game",null);F(this,"screen","menu");F(this,"hudCache",{});F(this,"tapHintTimer",null);F(this,"activeLevelId","");this.root=t,this.save=e,this.showMenu()}el(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}clear(){this.tapHintTimer&&(clearTimeout(this.tapHintTimer),this.tapHintTimer=null),this.root.innerHTML=""}setCanvasVisible(t){const e=document.getElementById("game-canvas");e&&(e.style.visibility=t?"visible":"hidden")}wrapScreen(t,e=""){return this.el(`
      <div class="screen-wrap ${e}">
        ${k_()}
        ${t}
      </div>`)}showMenu(){var r;this.screen="menu",Js(!1),(r=this.game)==null||r.stop(),this.setCanvasVisible(!1),this.clear();const t=this.save.get(),e=t.selectedCharacter??"johnny",n=io.map(a=>`
        <button type="button" class="character-card ${e===a.id?"selected":""}" data-id="${a.id}" aria-pressed="${e===a.id}">
          <div class="character-preview" data-preview="${a.id}" aria-hidden="true"></div>
          <span class="character-name">${a.name}</span>
          <span class="character-tag">${a.tagline}</span>
        </button>`).join(""),i=this.wrapScreen(`
      <div class="screen menu-screen">
        <div class="menu-hero-card">
          <div class="menu-hero-glow" aria-hidden="true"></div>
          <div class="logo-wrap">
            <div class="logo-emblem" aria-hidden="true">
              <span class="logo-emblem-ring"></span>
              <span class="logo-emblem-icon">📬</span>
            </div>
            <h1 class="game-title">
              <span class="title-mail">MAIL</span>
              <span class="title-run">RUN</span>
            </h1>
            <p class="game-tagline">Steer · Shoot · Deliver</p>
          </div>
          <div class="character-select">
            <p class="character-select-label">Pick your courier</p>
            <div class="character-cards">${n}</div>
          </div>
          <div class="menu-stats">
            <div class="stat-pill stat-pill-glow"><span>🪙</span> ${t.coins}</div>
            <div class="stat-pill"><span>📦</span> ${t.totalDeliveries} drops</div>
          </div>
          <div class="menu-buttons">
            <button class="btn btn-primary btn-glow btn-hero" id="btn-play">▶ Start Run</button>
            <button class="btn btn-secondary btn-hero-secondary" id="btn-shop">🛒 Shop & Loadout</button>
          </div>
          <button class="btn btn-ghost btn-small" id="btn-reset">Reset Save</button>
        </div>
      </div>
    `);this.root.appendChild(i),i.querySelectorAll(".character-preview").forEach(a=>{const o=a.dataset.preview;O_(a,o)}),i.querySelectorAll(".character-card").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.id;this.save.setCharacter(o),i.querySelectorAll(".character-card").forEach(l=>{const c=l,h=c.dataset.id===o;c.classList.toggle("selected",h),c.setAttribute("aria-pressed",String(h))})})}),i.querySelector("#btn-play").addEventListener("click",()=>this.showLevels()),i.querySelector("#btn-shop").addEventListener("click",()=>this.showShop()),i.querySelector("#btn-reset").addEventListener("click",()=>{confirm("Reset all progress?")&&(this.save.reset(),this.showMenu())})}showLevels(){this.screen="levels",this.setCanvasVisible(!1),this.clear();const t=this.save.get();let e=`
      <div class="screen route-screen scroll-touch">
        <header class="route-header">
          <button type="button" class="btn btn-secondary route-back" id="btn-back">← Back</button>
          <div class="route-title-block">
            <span class="route-eyebrow">MAIL RUN · INVASION ROUTES</span>
            <h1>Select Route</h1>
          </div>
          <div class="stat-pill route-coins"><span>🪙</span> ${t.coins.toLocaleString()}</div>
        </header>
        <div class="route-scroll">`;for(const i of U_()){const r=so(i),a=bc[i]??"district-sunny",o=Sc[i]??{icon:"📍",tagline:r.name},l=pi.filter(h=>h.district===i),c=l.filter(h=>(t.levelStars[h.id]??0)>0).length;e+=`
        <section class="route-district ${a}">
          <div class="route-district-head">
            <span class="route-district-icon" aria-hidden="true">${o.icon}</span>
            <div class="route-district-copy">
              <h2>${r.name}</h2>
              <p>${o.tagline}</p>
            </div>
            <span class="route-district-progress">${c}/${l.length}</span>
          </div>
          <div class="route-level-grid">`;for(const h of l){const u=!t.unlockedLevels.includes(h.id),d=t.levelStars[h.id]??0,f=h.name.toLowerCase().includes("boss");e+=`
            <button type="button" class="route-level-card ${u?"locked":""} ${d>=3?"perfect":""} ${f?"boss":""}" data-id="${h.id}" ${u?"disabled":""}>
              <span class="rlc-id">${h.id}</span>
              <span class="rlc-name">${h.name}</span>
              <span class="rlc-stars" aria-label="${d} of 3 stars">${"★".repeat(d)}${"☆".repeat(3-d)}</span>
              ${f?'<span class="rlc-boss-tag">BOSS</span>':""}
            </button>`}e+="</div></section>"}e+="</div></div>";const n=this.wrapScreen(e);this.root.appendChild(n),n.querySelectorAll(".route-level-card:not(.locked)").forEach(i=>{i.addEventListener("click",()=>this.showBriefing(i.dataset.id))}),n.querySelector("#btn-back").addEventListener("click",()=>this.showMenu())}showBriefing(t){const e=pi.find(c=>c.id===t),n=so(e.district),i=bc[e.district]??"district-sunny",r=Sc[e.district]??{icon:"📍",tagline:n.name},a=H_(e),o=e.name.toLowerCase().includes("boss");this.screen="briefing",this.setCanvasVisible(!1),this.clear();const l=this.wrapScreen(`
      <div class="screen mission-screen ${i}">
        <div class="mission-card">
          <div class="mission-top">
            <span class="mission-district">${r.icon} ${n.name}</span>
            <span class="mission-id">${e.id}${o?" · BOSS":""}</span>
          </div>
          <h1 class="mission-title">${e.name}</h1>
          <div class="mission-stats">
            <span class="mission-stat"><strong>${a}m</strong> route</span>
            <span class="mission-stat"><strong>${e.timeLimit}s</strong> limit</span>
            <span class="mission-stat"><strong>📦</strong> collect & deliver</span>
          </div>
          <p class="mission-brief">${e.briefing}</p>
          <div class="mission-hazards">
            <span class="mission-hazards-label">Route hazards</span>
            <div class="hazard-chips">${G_(t)}</div>
          </div>
          <div class="mission-controls">
            <div class="mission-control"><kbd>A</kbd><kbd>D</kbd><span>Steer lanes</span></div>
            <div class="mission-control"><span class="ctrl-icon">👆</span><span>Click / tap = mail blaster (unlimited)</span></div>
            <div class="mission-control"><kbd>SPACE</kbd><span>Jump</span><kbd>S</kbd><span>Slide</span></div>
            <div class="mission-control"><span class="ctrl-icon">📦</span><span>Grab packages for delivery score — shooting never spends them</span></div>
            <div class="mission-control"><span class="ctrl-icon">⚡</span><span>Ability · Convoy fights aliens · Day/night cycle mid-run</span></div>
          </div>
          <div class="mission-actions">
            <button type="button" class="btn btn-primary btn-glow mission-start" id="btn-start">🚀 Start Delivery</button>
            <button type="button" class="btn btn-secondary" id="btn-back">← Routes</button>
          </div>
        </div>
      </div>
    `);this.root.appendChild(l),l.querySelector("#btn-start").addEventListener("click",()=>this.startGame(t)),l.querySelector("#btn-back").addEventListener("click",()=>this.showLevels())}showShop(){this.screen="shop",Js(!1),this.setCanvasVisible(!1),this.clear();const t=this.save.get();let e="";for(const r of N_){const a=ga.filter(o=>o.category===r.key);if(a.length){e+=`<h2 class="shop-section-title">${r.label} <span class="shop-section-hint">${r.hint}</span></h2>`,e+='<div class="shop-grid">';for(const o of a){const l=this.save.getPurchaseLevel(o.id),c=l>=o.maxLevel,h=c?0:yc(o,l),u=!c&&t.coins>=h,d=o.category==="gear",f=o.category==="ability",g=d&&t.equippedTurrets.includes(o.id)||f&&t.equippedAbility===o.id;e+=`
        <div class="shop-item ${g?"equipped":""}">
          <div class="shop-item-head">
            <span class="shop-cat">${d?"🎯":f?"⚡":"💎"}</span>
            <h3>${o.name} ${l>0?`<small>Lv.${l}</small>`:""}</h3>
          </div>
          <p>${o.description}</p>
          <div class="meta">
            <span class="price">${c?"✓ MAX":`🪙 ${h}`}</span>
            <div class="shop-actions">
              ${d||f?`<button class="btn btn-small btn-secondary equip-btn" data-id="${o.id}">${g?"✓ Equipped":"Equip"}</button>`:""}
              <button class="btn btn-small btn-primary buy-btn" data-id="${o.id}" ${u?"":"disabled"}>${c?"Maxed":"Buy"}</button>
            </div>
          </div>
        </div>`}e+="</div>"}}const n=`
      <div class="screen shop-screen screen-glass">
        <div class="shop-topbar">
          <button class="btn btn-secondary shop-back-btn" id="btn-back" type="button">← Back</button>
          <h1 class="shop-title">Shop</h1>
          <div class="stat-pill gold shop-coins"><span>🪙</span> ${t.coins}</div>
        </div>
        <p class="shop-hint">Buy upgrades · equip up to 2 gear + 1 ability</p>
        <div class="shop-scroll scroll-touch">${e}</div>
      </div>`,i=this.wrapScreen(n);this.root.appendChild(i),i.querySelectorAll(".buy-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.id,o=ga.find(h=>h.id===a),l=this.save.getPurchaseLevel(a);if(l>=o.maxLevel)return;const c=yc(o,l);this.save.spendCoins(c)&&(this.save.setPurchaseLevel(a,l+1),this.showShop())})}),i.querySelectorAll(".equip-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.id,o=ga.find(l=>l.id===a);if(o.category==="gear"){if(this.save.getPurchaseLevel(a)<=0){alert("Buy this gear first!");return}this.save.equipTurret(a)}else if(o.category==="ability"){if(this.save.getPurchaseLevel(a)<=0){alert("Buy this ability first!");return}const l=this.save.get();this.save.equipAbility(l.equippedAbility===a?null:a)}this.showShop()})}),i.querySelector("#btn-back").addEventListener("click",()=>this.showMenu())}startGame(t){var h,u;this.activeLevelId=t,this.screen="game",Js(!0),this.hudCache={},this.setCanvasVisible(!0),this.clear();const e=this.el(`
      <div class="hud" id="hud">
        <div class="touch-steer touch-steer-left" id="steer-left" aria-label="Steer left">
          <span class="steer-arrow">◀</span>
        </div>
        <div class="touch-steer touch-steer-right" id="steer-right" aria-label="Steer right">
          <span class="steer-arrow">▶</span>
        </div>

        <div class="hud-hearts" id="hud-hearts"></div>
        <div class="hud-ammo" id="hud-ammo">📦 0</div>
        <div class="hud-powerup hidden" id="hud-powerup"></div>
        ${O?`<button type="button" class="autofire-toggle ${this.save.get().mobileAutoFire?"on":"off"}" id="autofire-toggle" aria-pressed="${this.save.get().mobileAutoFire}">
          <span class="autofire-icon">🔫</span>
          <span id="autofire-label">${this.save.get().mobileAutoFire?"AUTO ON":"AUTO OFF"}</span>
        </button>`:""}

        <div class="hud-panel hud-right hud-minimal">
          <div class="hud-stat-inline">🪙 <span id="hud-coins">0</span></div>
          <div class="progress-track">
            <div class="progress-fill" id="progress-fill"></div>
          </div>
          <div class="progress-label" id="hud-dist">0m</div>
        </div>

        <div class="fork-hint hidden" id="fork-hint"></div>
        <div class="screen-blur hidden" id="screen-blur"></div>

        <div class="tap-hint" id="tap-hint">${O?"Jump · Mail · Slide — tap screen also shoots":"Jump · Slide · Shoot · Swerve at forks!"}</div>

        <div class="combat-banner hidden" id="combat-banner">
          <div class="combat-title" id="combat-title">⚠ INTERCEPT!</div>
          <div class="combat-bar-wrap">
            <div class="combat-bar-fill" id="combat-bar"></div>
          </div>
          <div class="combat-hint">LMB mail · RMB throw 📦 · Convoy fights for you</div>
        </div>

        <div class="scan-prompt hidden" id="scan-prompt"></div>

        <div class="damage-flash hidden" id="damage-flash"></div>

        <div class="hud-bottom ${O?"hud-bottom-mobile":""}">
          <button class="action-btn jump-btn" id="jump-btn" title="Jump${O?"":" (SPACE)"}">
            <span class="action-icon">⬆</span>
            <span>JUMP</span>
          </button>
          <button class="action-btn shoot-btn" id="shoot-btn" title="Shoot">
            <span class="action-icon" id="shoot-icon">📧</span>
            <span id="shoot-label">${O?"MAIL":"SHOOT"}</span>
            <div class="ability-cd hidden" id="shoot-cd"></div>
          </button>
          <button class="action-btn slide-btn" id="slide-btn" title="Slide${O?"":" (S)"}">
            <span class="action-icon">⬇</span>
            <span>SLIDE</span>
          </button>
          ${O?"":`<button class="action-btn special-btn" id="special-btn" title="Ground Quake (E) — 3 hits">
            <div class="special-meter"><div class="special-fill" id="special-fill"></div></div>
            <span class="action-icon">💥</span>
            <span id="special-label">QUAKE</span>
            <span class="special-count hidden" id="special-shakes"></span>
          </button>
          ${this.save.get().equippedAbility?`<button class="action-btn ability-btn" id="ability-btn" title="Shop ability (Q)">
            <span class="action-icon">⚡</span>
            <span id="ability-label">Ability</span>
            <div class="ability-cd hidden" id="ability-cd"></div>
          </button>`:""}`}
        </div>

        ${O?`<div class="hud-actions-right">
          <button type="button" class="action-btn hud-back-btn" id="hud-back-btn" title="Back to levels">
            <span class="action-icon">←</span>
            <span>BACK</span>
          </button>
          <button class="action-btn special-btn" id="special-btn" title="Ground Quake">
            <div class="special-meter"><div class="special-fill" id="special-fill"></div></div>
            <span class="action-icon">💥</span>
            <span id="special-label">QUAKE</span>
            <span class="special-count hidden" id="special-shakes"></span>
          </button>
          ${this.save.get().equippedAbility?`<button class="action-btn ability-btn" id="ability-btn" title="Ability">
            <span class="action-icon">⚡</span>
            <span id="ability-label">Ability</span>
            <div class="ability-cd hidden" id="ability-cd"></div>
          </button>`:""}
        </div>`:""}
      </div>
    `);this.root.appendChild(e);const n=document.getElementById("game-canvas");(h=this.game)==null||h.dispose(),this.game=new mr(n,this.save.get(),{onHudUpdate:d=>this.updateHud(d),onToast:d=>this.toast(d),onCombat:d=>{var f;(f=document.getElementById("combat-banner"))==null||f.classList.toggle("hidden",!d)},onDamageFlash:()=>{const d=document.getElementById("damage-flash");d&&(d.classList.remove("hidden"),setTimeout(()=>d.classList.add("hidden"),400))},onEnd:d=>this.onGameEnd(d)});const i=this.save.get().equippedAbility,r=document.getElementById("ability-btn"),a=document.getElementById("ability-label");if(i&&r&&a){const d={"smoke-bomb":"Smoke","rally-horn":"Rally",dash:"Dash"};a.textContent=d[i]??"Ability",r.disabled=!1,r.onclick=()=>{var f;return(f=this.game)==null?void 0:f.useAbility()},r.addEventListener("pointerdown",f=>f.stopPropagation())}const o=document.getElementById("autofire-toggle");o&&o.addEventListener("pointerdown",d=>{var _;d.preventDefault(),d.stopPropagation();const f=!this.save.get().mobileAutoFire;this.save.setMobileAutoFire(f),(_=this.game)==null||_.setAutoFire(f),o.classList.toggle("on",f),o.classList.toggle("off",!f),o.setAttribute("aria-pressed",String(f));const g=document.getElementById("autofire-label");g&&(g.textContent=f?"AUTO ON":"AUTO OFF")});const l=document.getElementById("hud");this.game.bindTouchControls(l),document.getElementById("jump-btn").addEventListener("pointerdown",d=>{var f;d.preventDefault(),d.stopPropagation(),(f=this.game)==null||f.jump()}),document.getElementById("slide-btn").addEventListener("pointerdown",d=>{var f;d.preventDefault(),d.stopPropagation(),(f=this.game)==null||f.slide()});const c=document.getElementById("shoot-btn");c==null||c.addEventListener("pointerdown",d=>{var f;d.preventDefault(),d.stopPropagation(),(f=this.game)==null||f.shoot()}),(u=document.getElementById("hud-back-btn"))==null||u.addEventListener("pointerdown",d=>{var f;d.preventDefault(),d.stopPropagation(),(f=this.game)==null||f.dispose(),this.game=null,Js(!1),this.showLevels()}),document.getElementById("special-btn").addEventListener("pointerdown",d=>{var f;d.preventDefault(),d.stopPropagation(),(f=this.game)==null||f.useSpecialQuake()}),this.game.startLevel(t),this.tapHintTimer=setTimeout(()=>{var d;(d=document.getElementById("tap-hint"))==null||d.classList.add("hidden"),this.tapHintTimer=null},3e3)}updateHud(t){var l,c,h,u,d,f,g;const e=document.getElementById("hud-hearts");if(e&&(t.integrity!==this.hudCache.integrity||t.maxIntegrity!==this.hudCache.maxIntegrity)&&(e.textContent="❤".repeat(t.integrity)+"🖤".repeat(Math.max(0,t.maxIntegrity-t.integrity))),t.coins!==this.hudCache.coins){const _=document.getElementById("hud-coins");_&&(_.textContent=String(t.coins))}if(t.distance!==this.hudCache.distance){const _=document.getElementById("hud-dist");_&&(_.textContent=`${Math.floor(t.distance)}m`)}if(t.distance!==this.hudCache.distance||t.totalDistance!==this.hudCache.totalDistance){const _=document.getElementById("progress-fill");_&&(_.style.width=`${Math.min(100,t.distance/t.totalDistance*100)}%`)}if(t.packages!==this.hudCache.packages){const _=document.getElementById("hud-ammo");_&&(_.textContent=`📦 ${t.packages}`);const m=document.getElementById("shoot-icon"),p=document.getElementById("shoot-label");m&&(m.textContent="📧"),p&&(p.textContent=O?"MAIL":"SHOOT")}const n=document.getElementById("hud-powerup");n&&t.powerUpLabel!==this.hudCache.powerUpLabel&&(t.powerUpLabel?(n.textContent=t.powerUpLabel,n.classList.remove("hidden")):n.classList.add("hidden")),t.invincible!==this.hudCache.invincible&&(t.invincible?e==null||e.classList.add("invincible-glow"):(l=document.getElementById("hud-hearts"))==null||l.classList.remove("invincible-glow")),t.screenBlur!==this.hudCache.screenBlur&&((c=document.getElementById("screen-blur"))==null||c.classList.toggle("hidden",!t.screenBlur));const i=document.getElementById("fork-hint"),r=t.vaultHint||t.forkHint;if(i&&r!==(this.hudCache.vaultHint||this.hudCache.forkHint)&&(r?(i.textContent=r,i.classList.remove("hidden"),i.classList.toggle("vault-hint",!!t.vaultHint)):(i.classList.add("hidden"),i.classList.remove("vault-hint"))),t.jumpReady!==this.hudCache.jumpReady&&((h=document.getElementById("jump-btn"))==null||h.classList.toggle("ready",t.jumpReady)),t.slideReady!==this.hudCache.slideReady&&((u=document.getElementById("slide-btn"))==null||u.classList.toggle("ready",t.slideReady)),t.shootReady!==this.hudCache.shootReady&&((d=document.getElementById("shoot-btn"))==null||d.classList.toggle("ready",t.shootReady),(f=document.getElementById("shoot-cd"))==null||f.classList.toggle("hidden",t.shootReady)),t.specialCharge!==this.hudCache.specialCharge||t.specialReady!==this.hudCache.specialReady||t.specialShakes!==this.hudCache.specialShakes){const _=document.getElementById("special-fill");_&&(_.style.height=`${Math.round(t.specialCharge*100)}%`);const m=document.getElementById("special-btn");m==null||m.classList.toggle("ready",t.specialReady);const p=document.getElementById("special-shakes");p&&(t.specialShakes>0?(p.textContent=String(t.specialShakes),p.classList.remove("hidden")):p.classList.add("hidden"))}t.jumpReady!==this.hudCache.jumpReady&&((g=document.getElementById("jump-btn"))==null||g.classList.toggle("ready",t.jumpReady));const a=document.getElementById("ability-cd"),o=document.getElementById("ability-btn");a&&o&&(t.abilityCd!==this.hudCache.abilityCd||t.abilityReady!==this.hudCache.abilityReady)&&(t.abilityCd>0?(a.classList.remove("hidden"),a.textContent=Math.ceil(t.abilityCd).toString(),o.disabled=!0):t.abilityReady&&(a.classList.add("hidden"),o.disabled=!1)),this.hudCache={...t}}toast(t){const e=this.el(`<div class="message-toast">${t}</div>`);this.root.appendChild(e),setTimeout(()=>e.remove(),2200)}onGameEnd(t){if(t.won){this.save.addCoins(t.coinsEarned),this.save.setStars(t.levelId,t.stars),this.save.recordWin();const e=_c(t.levelId);e&&this.save.unlockLevel(e)}else this.save.addCoins(Math.floor(t.coinsEarned*.3));this.showResults(t)}showResults(t){var a;this.screen="results",(a=this.game)==null||a.stop(),this.setCanvasVisible(!1),this.clear();const e=_c(t.levelId),n=this.save.get(),i=t.won&&e&&n.unlockedLevels.includes(e),r=this.wrapScreen(`
      <div class="screen results-screen screen-glass ${t.won?"won":"lost"}">
        <div class="results-icon">${t.won?"📦":"💀"}</div>
        <div class="results-title">${t.won?"Delivered!":"Mission Failed"}</div>
        ${t.deathReason?`<p class="death-reason">${t.deathReason}</p>`:""}
        <div class="stars-display">${"★".repeat(t.stars)}${"☆".repeat(3-t.stars)}</div>
        <div class="results-reward">+${t.coinsEarned} 🪙 · ${t.time.toFixed(1)}s</div>
        <div class="results-buttons">
          ${i?'<button class="btn btn-primary btn-glow" id="btn-next">Next Level →</button>':""}
          <button class="btn btn-primary" id="btn-retry">↺ Retry</button>
          <button class="btn btn-secondary" id="btn-shop">🛒 Shop</button>
          <button class="btn btn-secondary" id="btn-menu">Menu</button>
        </div>
      </div>
    `);this.root.appendChild(r),i&&r.querySelector("#btn-next").addEventListener("click",()=>this.showBriefing(e)),r.querySelector("#btn-retry").addEventListener("click",()=>this.showBriefing(t.levelId)),r.querySelector("#btn-shop").addEventListener("click",()=>this.showShop()),r.querySelector("#btn-menu").addEventListener("click",()=>this.showMenu())}}const W_=new Ch,X_=document.getElementById("ui-root");new V_(X_,W_);L_();function wr(s){s.target.closest(".shop-scroll, .levels-screen, .scroll-touch")||s.preventDefault()}document.addEventListener("touchmove",wr,{passive:!1});document.addEventListener("gesturestart",wr);document.addEventListener("gesturechange",wr);document.addEventListener("gestureend",wr);document.addEventListener("touchstart",s=>{if(s.touches.length>1){s.preventDefault();return}document.body.classList.contains("game-active")&&(s.target.closest("button, .touch-steer")||s.preventDefault())},{passive:!1,capture:!0});let wc=0;document.addEventListener("touchend",s=>{const t=Date.now();t-wc<=320&&s.preventDefault(),wc=t,O&&window.scrollTo(0,0)},{passive:!1});document.addEventListener("contextmenu",s=>{s.target.closest("#game-canvas, .hud")&&s.preventDefault()});
