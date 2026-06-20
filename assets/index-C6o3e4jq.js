var Yh=Object.defineProperty;var $h=(i,t,e)=>t in i?Yh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var P=(i,t,e)=>$h(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Br={coins:0,unlockedLevels:["1-1"],levelStars:{},purchases:{},equippedTurrets:[],equippedAbility:null,totalDeliveries:0,selectedCharacter:"johnny",mobileAutoFire:!0},jo={convoy:5,maxConvoy:50,integrity:3,maxIntegrity:3,packages:0,maxPackages:25,stamps:0,coins:0,speed:11,baseSpeed:11,distance:0,integrityLost:!1,bonusRoute:!1},Zo="last-mile-save";class jh{constructor(){P(this,"data");this.data=this.load()}load(){try{const t=localStorage.getItem(Zo);if(t)return{...Br,...JSON.parse(t)}}catch{}return{...Br}}save(){localStorage.setItem(Zo,JSON.stringify(this.data))}get(){return this.data}addCoins(t){this.data.coins+=t,this.save()}spendCoins(t){return this.data.coins<t?!1:(this.data.coins-=t,this.save(),!0)}unlockLevel(t){this.data.unlockedLevels.includes(t)||(this.data.unlockedLevels.push(t),this.save())}setStars(t,e){const n=this.data.levelStars[t]??0;e>n&&(this.data.levelStars[t]=e,this.save())}getPurchaseLevel(t){return this.data.purchases[t]??0}setPurchaseLevel(t,e){this.data.purchases[t]=e,this.save()}equipTurret(t){const e=this.data.equippedTurrets;e.includes(t)?this.data.equippedTurrets=e.filter(n=>n!==t):e.length<2&&this.data.equippedTurrets.push(t),this.save()}equipAbility(t){this.data.equippedAbility=t,this.save()}setCharacter(t){this.data.selectedCharacter=t,this.save()}setMobileAutoFire(t){this.data.mobileAutoFire=t,this.save()}recordWin(){this.data.totalDeliveries+=1,this.save()}reset(){this.data={...Br},this.save()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xo="171",Zh=0,Jo=1,Jh=2,Kh=0,Xc=1,Qh=2,In=3,ni=0,Ze=1,fe=2,zn=0,ti=1,oe=2,Ko=3,Qo=4,tu=5,mi=100,eu=101,nu=102,iu=103,su=104,ru=200,au=201,ou=202,lu=203,Pa=204,Fa=205,cu=206,hu=207,uu=208,du=209,fu=210,pu=211,mu=212,gu=213,vu=214,Da=0,La=1,Ia=2,Ki=3,Ua=4,Na=5,ka=6,Ba=7,qc=0,_u=1,yu=2,ei=0,xu=1,Mu=2,bu=3,Yc=4,Su=5,wu=6,Eu=7,$c=300,Qi=301,ts=302,Oa=303,za=304,Rr=306,ln=1e3,_i=1001,Ha=1002,yn=1003,Tu=1004,ks=1005,En=1006,Or=1007,yi=1008,Wn=1009,jc=1010,Zc=1011,Cs=1012,Mo=1013,bi=1014,kn=1015,Hn=1016,bo=1017,So=1018,es=1020,Jc=35902,Kc=1021,Qc=1022,vn=1023,th=1024,eh=1025,Yi=1026,ns=1027,nh=1028,wo=1029,ih=1030,Eo=1031,To=1033,ur=33776,dr=33777,fr=33778,pr=33779,Ga=35840,Va=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,$a=37496,ja=37808,Za=37809,Ja=37810,Ka=37811,Qa=37812,to=37813,eo=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,mr=36492,co=36494,ho=36495,sh=36283,uo=36284,fo=36285,po=36286,Au=3200,Cu=3201,rh=0,Ru=1,Kn="",ae="srgb",is="srgb-linear",yr="linear",ue="srgb",wi=7680,tl=519,Pu=512,Fu=513,Du=514,ah=515,Lu=516,Iu=517,Uu=518,Nu=519,mo=35044,el="300 es",Bn=2e3,xr=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const Ss=Math.PI/180,Rs=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Ao(i,t){return(i%t+t)%t}function ku(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bu(i,t,e){return i!==t?(e-i)/(t-i):0}function ws(i,t,e){return(1-e)*i+e*t}function Ou(i,t,e,n){return ws(i,t,1-Math.exp(-e*n))}function zu(i,t=1){return t-Math.abs(Ao(i,t*2)-t)}function Hu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wu(i,t){return i+Math.random()*(t-i)}function Xu(i){return i*(.5-Math.random())}function qu(i){i!==void 0&&(nl=i);let t=nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yu(i){return i*Ss}function $u(i){return i*Rs}function ju(i){return(i&i-1)===0&&i!==0}function Zu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ku(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $i={DEG2RAD:Ss,RAD2DEG:Rs,generateUUID:Gn,clamp:Wt,euclideanModulo:Ao,mapLinear:ku,inverseLerp:Bu,lerp:ws,damp:Ou,pingpong:zu,smoothstep:Hu,smootherstep:Gu,randInt:Vu,randFloat:Wu,randFloatSpread:Xu,seededRandom:qu,degToRad:Yu,radToDeg:$u,isPowerOfTwo:ju,ceilPowerOfTwo:Zu,floorPowerOfTwo:Ju,setQuaternionFromProperEuler:Ku,normalize:he,denormalize:gn};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,s,r,a,o,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],x=s[1],S=s[4],b=s[7],D=s[2],T=s[5],A=s[8];return r[0]=a*_+o*x+l*D,r[3]=a*m+o*S+l*T,r[6]=a*f+o*b+l*A,r[1]=c*_+h*x+u*D,r[4]=c*m+h*S+u*T,r[7]=c*f+h*b+u*A,r[2]=d*_+p*x+g*D,r[5]=d*m+p*S+g*T,r[8]=d*f+p*b+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zr.makeScale(t,e)),this}rotate(t){return this.premultiply(zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new zt;function oh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qu(){const i=Mr("canvas");return i.style.display="block",i}const il={};function Wi(i){i in il||(il[i]=!0,console.warn(i))}function td(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ed(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const sl=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function id(){const i={enabled:!0,workingColorSpace:is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?yr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[is]:{primaries:t,whitePoint:n,transfer:yr,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ae},outputColorSpaceConfig:{drawingBufferColorSpace:ae}},[ae]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ae}}}),i}const ee=id();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ei;class sd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Mr("canvas")),Ei.width=t.width,Ei.height=t.height;const n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rd=0;class lh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hr(s[a].image)):r.push(Hr(s[a]))}else r=Hr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Hr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ad=0;class Xe extends as{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=_i,s=_i,r=En,a=yi,o=vn,l=Wn,c=Xe.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Gn(),this.name="",this.source=new lh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ln:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ln:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=$c;Xe.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,b=(p+1)/2,D=(f+1)/2,T=(h+d)/4,A=(u+_)/4,L=(g+m)/4;return S>b&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):b>D?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=L/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=L/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class od extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends od{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ch extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ld extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,x=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const D=Math.sqrt(S),T=Math.atan2(D,f*x);m=Math.sin(m*T)/D,o=Math.sin(o*T)/D}const b=o*x;if(l=l*m+d*b,c=c*m+p*b,h=h*m+g*b,u=u*m+_*b,m===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new I,al=new Ps;class Fs{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),Os.subVectors(this.max,us),Ti.subVectors(t.a,us),Ai.subVectors(t.b,us),Ci.subVectors(t.c,us),qn.subVectors(Ai,Ti),Yn.subVectors(Ci,Ai),ai.subVectors(Ti,Ci);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ai.z,ai.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ai.z,0,-ai.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ai.y,ai.x,0];return!Vr(e,Ti,Ai,Ci,Os)||(e=[1,0,0,0,1,0,0,0,1],!Vr(e,Ti,Ai,Ci,Os))?!1:(zs.crossVectors(qn,Yn),e=[zs.x,zs.y,zs.z],Vr(e,Ti,Ai,Ci,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new I,new I,new I,new I,new I,new I,new I,new I],dn=new I,Bs=new Fs,Ti=new I,Ai=new I,Ci=new I,qn=new I,Yn=new I,ai=new I,us=new I,Os=new I,zs=new I,oi=new I;function Vr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);const o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const cd=new Fs,ds=new I,Wr=new I;class Co{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(Wr)),this.expandByPoint(ds.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new I,Xr=new I,Hs=new I,$n=new I,qr=new I,Gs=new I,Yr=new I;class hd{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xr.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Xr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Hs),o=$n.dot(this.direction),l=-$n.dot(Hs),c=$n.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xr).addScaledVector(Hs,d),p}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,s,r){qr.subVectors(e,t),Gs.subVectors(n,t),Yr.crossVectors(qr,Gs);let a=this.direction.dot(Yr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);const l=o*this.direction.dot(Gs.crossVectors($n,Gs));if(l<0)return null;const c=o*this.direction.dot(qr.cross($n));if(c<0||l+c>a)return null;const h=-o*$n.dot(Yr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ud,t,dd)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),jn.crossVectors(n,Ke),jn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),jn.crossVectors(n,Ke)),jn.normalize(),Vs.crossVectors(Ke,jn),s[0]=jn.x,s[4]=Vs.x,s[8]=Ke.x,s[1]=jn.y,s[5]=Vs.y,s[9]=Ke.y,s[2]=jn.z,s[6]=Vs.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],S=n[7],b=n[11],D=n[15],T=s[0],A=s[4],L=s[8],E=s[12],y=s[1],U=s[5],X=s[9],W=s[13],j=s[2],tt=s[6],$=s[10],nt=s[14],Y=s[3],ut=s[7],vt=s[11],Tt=s[15];return r[0]=a*T+o*y+l*j+c*Y,r[4]=a*A+o*U+l*tt+c*ut,r[8]=a*L+o*X+l*$+c*vt,r[12]=a*E+o*W+l*nt+c*Tt,r[1]=h*T+u*y+d*j+p*Y,r[5]=h*A+u*U+d*tt+p*ut,r[9]=h*L+u*X+d*$+p*vt,r[13]=h*E+u*W+d*nt+p*Tt,r[2]=g*T+_*y+m*j+f*Y,r[6]=g*A+_*U+m*tt+f*ut,r[10]=g*L+_*X+m*$+f*vt,r[14]=g*E+_*W+m*nt+f*Tt,r[3]=x*T+S*y+b*j+D*Y,r[7]=x*A+S*U+b*tt+D*ut,r[11]=x*L+S*X+b*$+D*vt,r[15]=x*E+S*W+b*nt+D*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+_*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],x=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,S=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,b=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,D=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=e*x+n*S+s*b+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=x*A,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*A,t[4]=S*A,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*A,t[8]=b*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=D*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,x=l*c,S=l*h,b=l*u,D=n.x,T=n.y,A=n.z;return s[0]=(1-(_+f))*D,s[1]=(p+b)*D,s[2]=(g-S)*D,s[3]=0,s[4]=(p-b)*T,s[5]=(1-(d+f))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+S)*A,s[9]=(m-x)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const c=1/r,h=1/a,u=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Bn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===Bn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Bn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h;let g,_;if(o===Bn)g=(a+r)*u,_=-2*u;else if(o===xr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new I,fn=new ve,ud=new I(0,0,0),dd=new I(1,1,1),jn=new I,Vs=new I,Ke=new I,ol=new ve,ll=new Ps;class Tn{constructor(t=0,e=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class hh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fd=0;const cl=new I,Pi=new Ps,Fn=new ve,Ws=new I,fs=new I,pd=new I,md=new Ps,hl=new I(1,0,0),ul=new I(0,1,0),dl=new I(0,0,1),fl={type:"added"},gd={type:"removed"},Fi={type:"childadded",child:null},$r={type:"childremoved",child:null};class De extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new I,e=new Tn,n=new Ps,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new zt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(ul,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(ul,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(fs,Ws,this.up):Fn.lookAt(Ws,fs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gd),$r.child=t,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new I(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new I,Dn=new I,jr=new I,Ln=new I,Di=new I,Li=new I,pl=new I,Zr=new I,Jr=new I,Kr=new I,Qr=new de,ta=new de,ea=new de;class cn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),Dn.subVectors(n,e),jr.subVectors(t,e);const a=pn.dot(pn),o=pn.dot(Dn),l=pn.dot(jr),c=Dn.dot(Dn),h=Dn.dot(jr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Qr.setScalar(0),ta.setScalar(0),ea.setScalar(0),Qr.fromBufferAttribute(t,e),ta.fromBufferAttribute(t,n),ea.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qr,r.x),a.addScaledVector(ta,r.y),a.addScaledVector(ea,r.z),a}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),Dn.subVectors(t,e),pn.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),pn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Di.subVectors(s,n),Li.subVectors(r,n),Zr.subVectors(t,n);const l=Di.dot(Zr),c=Li.dot(Zr);if(l<=0&&c<=0)return e.copy(n);Jr.subVectors(t,s);const h=Di.dot(Jr),u=Li.dot(Jr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Di,a);Kr.subVectors(t,r);const p=Di.dot(Kr),g=Li.dot(Kr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Li,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return pl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(pl,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(Di,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Ao(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=na(a,r,t+1/3),this.g=na(a,r,t),this.b=na(a,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ae){const n=uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ae){return ee.fromWorkingColorSpace(Be.copy(this),t),Math.round(Wt(Be.r*255,0,255))*65536+Math.round(Wt(Be.g*255,0,255))*256+Math.round(Wt(Be.b*255,0,255))}getHexString(t=ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=ae){ee.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(Xs);const n=ws(Zn.h,Xs.h,e),s=ws(Zn.s,Xs.s,e),r=ws(Zn.l,Xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Mt;Mt.NAMES=uh;let vd=0;class os extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=ti,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=Fa,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pa&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lt extends os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new I,qs=new at;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mo,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mo&&(t.usage=this.usage),t}}class dh extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fh extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _d=0;const on=new ve,ia=new De,Ii=new I,Qe=new Fs,ps=new Fs,Pe=new I;class ze extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oh(t)?fh:dh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return ia.lookAt(t),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Qe.min,ps.min),Qe.expandByPoint(Pe),Pe.addVectors(Qe.max,ps.max),Qe.expandByPoint(Pe)):(Qe.expandByPoint(ps.min),Qe.expandByPoint(ps.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(t,c),Pe.add(Ii)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new I,l[L]=new I;const c=new I,h=new I,u=new I,d=new at,p=new at,g=new at,_=new I,m=new I;function f(L,E,y){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(U),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),o[L].add(_),o[E].add(_),o[y].add(_),l[L].add(m),l[E].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,E=x.length;L<E;++L){const y=x[L],U=y.start,X=y.count;for(let W=U,j=U+X;W<j;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const S=new I,b=new I,D=new I,T=new I;function A(L){D.fromBufferAttribute(s,L),T.copy(D);const E=o[L];S.copy(E),S.sub(D.multiplyScalar(D.dot(E))).normalize(),b.crossVectors(T,E);const U=b.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,U)}for(let L=0,E=x.length;L<E;++L){const y=x[L],U=y.start,X=y.count;for(let W=U,j=U+X;W<j;W+=3)A(t.getX(W+0)),A(t.getX(W+1)),A(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new ve,li=new hd,Ys=new Co,gl=new I,$s=new I,js=new I,Zs=new I,sa=new I,Js=new I,vl=new I,Ks=new I;class ie extends De{constructor(t=new ze,e=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(sa.fromBufferAttribute(u,t),a?Js.addScaledVector(sa,h):Js.addScaledVector(sa.sub(e),h))}e.add(Js)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(Ys.containsPoint(li.origin)===!1&&(li.intersectSphere(Ys,gl)===null||li.origin.distanceToSquared(gl)>(t.far-t.near)**2))&&(ml.copy(r).invert(),li.copy(t.ray).applyMatrix4(ml),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,D=S;b<D;b+=3){const T=o.getX(b),A=o.getX(b+1),L=o.getX(b+2);s=Qs(this,f,t,n,c,h,u,T,A,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=o.getX(m),S=o.getX(m+1),b=o.getX(m+2);s=Qs(this,a,t,n,c,h,u,x,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,D=S;b<D;b+=3){const T=b,A=b+1,L=b+2;s=Qs(this,f,t,n,c,h,u,T,A,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,S=m+1,b=m+2;s=Qs(this,a,t,n,c,h,u,x,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function yd(i,t,e,n,s,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ni,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:i}}function Qs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,$s),i.getVertexPosition(l,js),i.getVertexPosition(c,Zs);const h=yd(i,t,e,n,$s,js,Zs,vl);if(h){const u=new I;cn.getBarycoord(vl,$s,js,Zs,u),s&&(h.uv=cn.getInterpolatedAttribute(s,o,l,c,u,new at)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,u,new at)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};cn.getNormal($s,js,Zs,d.normal),h.face=d,h.barycoord=u}return h}class N extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(_,m,f,x,S,b,D,T,A,L,E){const y=b/A,U=D/L,X=b/2,W=D/2,j=T/2,tt=A+1,$=L+1;let nt=0,Y=0;const ut=new I;for(let vt=0;vt<$;vt++){const Tt=vt*U-W;for(let Xt=0;Xt<tt;Xt++){const pe=Xt*y-X;ut[_]=pe*x,ut[m]=Tt*S,ut[f]=j,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[f]=T>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Xt/A),u.push(1-vt/L),nt+=1}}for(let vt=0;vt<L;vt++)for(let Tt=0;Tt<A;Tt++){const Xt=d+Tt+tt*vt,pe=d+Tt+tt*(vt+1),J=d+(Tt+1)+tt*(vt+1),rt=d+(Tt+1)+tt*vt;l.push(Xt,pe,rt),l.push(pe,J,rt),Y+=6}o.addGroup(p,Y,E),p+=Y,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new N(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=ss(i[e]);for(const s in n)t[s]=n[s]}return t}function xd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ph(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const br={clone:ss,merge:Ve};var Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new I,_l=new at,yl=new at;class je extends mh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,_l,yl),e.subVectors(yl,_l)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class Sd extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(Ui,Ni,t,e);s.layers=this.layers,this.add(s);const r=new je(Ui,Ni,t,e);r.layers=this.layers,this.add(r);const a=new je(Ui,Ni,t,e);a.layers=this.layers,this.add(a);const o=new je(Ui,Ni,t,e);o.layers=this.layers,this.add(o);const l=new je(Ui,Ni,t,e);l.layers=this.layers,this.add(l);const c=new je(Ui,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gh extends Xe{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wd extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new N(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:zn});r.uniforms.tEquirect.value=e;const a=new ie(s,r),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=En),new Sd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Sr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new Sr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vh extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ed{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mo,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new I;class wr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ro extends os{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ki;const ms=new I,Bi=new I,Oi=new I,zi=new at,gs=new at,_h=new ve,tr=new I,vs=new I,er=new I,xl=new at,ra=new at,Ml=new at;class Pr extends De{constructor(t=new Ro){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ed(e,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new wr(n,3,0,!1)),ki.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=ki,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bi.setFromMatrixScale(this.matrixWorld),_h.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bi.multiplyScalar(-Oi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;nr(tr.set(-.5,-.5,0),Oi,a,Bi,s,r),nr(vs.set(.5,-.5,0),Oi,a,Bi,s,r),nr(er.set(.5,.5,0),Oi,a,Bi,s,r),xl.set(0,0),ra.set(1,0),Ml.set(1,1);let o=t.ray.intersectTriangle(tr,vs,er,!1,ms);if(o===null&&(nr(vs.set(-.5,.5,0),Oi,a,Bi,s,r),ra.set(0,1),o=t.ray.intersectTriangle(tr,er,vs,!1,ms),o===null))return;const l=t.ray.origin.distanceTo(ms);l<t.near||l>t.far||e.push({distance:l,point:ms.clone(),uv:cn.getInterpolation(ms,tr,vs,er,xl,ra,Ml,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nr(i,t,e,n,s,r){zi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(gs.x=r*zi.x-s*zi.y,gs.y=s*zi.x+r*zi.y):gs.copy(zi),i.copy(t),i.x+=gs.x,i.y+=gs.y,i.applyMatrix4(_h)}const aa=new I,Td=new I,Ad=new zt;class fi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=aa.subVectors(n,e).cross(Td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ad.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Co,ir=new I;class Po{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],x=s[13],S=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-p,b-f).normalize(),n[1].setComponents(l+r,d+c,m+p,b+f).normalize(),n[2].setComponents(l+a,d+h,m+g,b+x).normalize(),n[3].setComponents(l-a,d-h,m-g,b-x).normalize(),n[4].setComponents(l-o,d-u,m-_,b-S).normalize(),e===Bn)n[5].setComponents(l+o,d+u,m+_,b+S).normalize();else if(e===xr)n[5].setComponents(o,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ir.x=s.normal.x>0?t.max.x:t.min.x,ir.y=s.normal.y>0?t.max.y:t.min.y,ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pt extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Fe extends Xe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yh extends Xe{constructor(t,e,n,s,r,a,o,l,c,h=Yi){if(h!==Yi&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=bi),n===void 0&&h===ns&&(n=es),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],a=[],o=new I,l=new ve;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Wt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Wt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fo extends An{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cd extends Fo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Do(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const sr=new I,oa=new Do,la=new Do,ca=new Do;class Rd extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(sr.subVectors(s[0],s[1]).add(s[0]),c=sr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),oa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),la.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ca.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),la.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ca.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(oa.calc(l),la.calc(l),ca.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Pd(i,t){const e=1-i;return e*e*t}function Fd(i,t){return 2*(1-i)*i*t}function Dd(i,t){return i*i*t}function Es(i,t,e,n){return Pd(i,t)+Fd(i,e)+Dd(i,n)}function Ld(i,t){const e=1-i;return e*e*e*t}function Id(i,t){const e=1-i;return 3*e*e*i*t}function Ud(i,t){return 3*(1-i)*i*i*t}function Nd(i,t){return i*i*i*t}function Ts(i,t,e,n,s){return Ld(i,t)+Id(i,e)+Ud(i,n)+Nd(i,s)}class xh extends An{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(t,s.x,r.x,a.x,o.x),Ts(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kd extends An{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(t,s.x,r.x,a.x,o.x),Ts(t,s.y,r.y,a.y,o.y),Ts(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mh extends An{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bd extends An{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bh extends An{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Es(t,s.x,r.x,a.x),Es(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Od extends An{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Es(t,s.x,r.x,a.x),Es(t,s.y,r.y,a.y),Es(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sh extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(bl(o,l.x,c.x,h.x,u.x),bl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var Sl=Object.freeze({__proto__:null,ArcCurve:Cd,CatmullRomCurve3:Rd,CubicBezierCurve:xh,CubicBezierCurve3:kd,EllipseCurve:Fo,LineCurve:Mh,LineCurve3:Bd,QuadraticBezierCurve:bh,QuadraticBezierCurve3:Od,SplineCurve:Sh});class zd extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Sl[s.type]().fromJSON(s))}return this}}class Hd extends zd{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Mh(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new bh(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new xh(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Fo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Lo extends ze{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Wt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new I,d=new at,p=new I,g=new I,_=new I;let m=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=e;x++){const S=n+x*h*s,b=Math.sin(S),D=Math.cos(S);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*b,u.y=t[T].y,u.z=t[T].x*D,a.push(u.x,u.y,u.z),d.x=x/e,d.y=T/(t.length-1),o.push(d.x,d.y);const A=l[3*T+0]*b,L=l[3*T+1],E=l[3*T+0]*D;c.push(A,L,E)}}for(let x=0;x<e;x++)for(let S=0;S<t.length-1;S++){const b=S+x*t.length,D=b,T=b+t.length,A=b+t.length+1,L=b+1;r.push(D,T,L),r.push(A,L,T)}this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("uv",new le(o,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.points,t.segments,t.phiStart,t.phiLength)}}class bn extends Lo{constructor(t=1,e=1,n=4,s=8){const r=new Hd;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new bn(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ue extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ot extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;x(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(p,2));function x(){const b=new I,D=new I;let T=0;const A=(e-t)/n;for(let L=0;L<=r;L++){const E=[],y=L/r,U=y*(e-t)+t;for(let X=0;X<=s;X++){const W=X/s,j=W*l+o,tt=Math.sin(j),$=Math.cos(j);D.x=U*tt,D.y=-y*n+m,D.z=U*$,u.push(D.x,D.y,D.z),b.set(tt,A,$).normalize(),d.push(b.x,b.y,b.z),p.push(W,1-y),E.push(g++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const y=_[E][L],U=_[E+1][L],X=_[E+1][L+1],W=_[E][L+1];(t>0||E!==0)&&(h.push(y,U,W),T+=3),(e>0||E!==r-1)&&(h.push(U,X,W),T+=3)}c.addGroup(f,T,0),f+=T}function S(b){const D=g,T=new at,A=new I;let L=0;const E=b===!0?t:e,y=b===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const U=g;for(let X=0;X<=s;X++){const j=X/s*l+o,tt=Math.cos(j),$=Math.sin(j);A.x=E*$,A.y=m*y,A.z=E*tt,u.push(A.x,A.y,A.z),d.push(0,y,0),T.x=tt*.5+.5,T.y=$*.5*y+.5,p.push(T.x,T.y),g++}for(let X=0;X<s;X++){const W=D+X,j=U+X;b===!0?h.push(j,j+1,W):h.push(j+1,j,W),L+=3}c.addGroup(f,L,b===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ot(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class en extends ot{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new en(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ds extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const S=new I,b=new I,D=new I;for(let T=0;T<e.length;T+=3)p(e[T+0],S),p(e[T+1],b),p(e[T+2],D),l(S,b,D,x)}function l(x,S,b,D){const T=D+1,A=[];for(let L=0;L<=T;L++){A[L]=[];const E=x.clone().lerp(b,L/T),y=S.clone().lerp(b,L/T),U=T-L;for(let X=0;X<=U;X++)X===0&&L===T?A[L][X]=E:A[L][X]=E.clone().lerp(y,X/U)}for(let L=0;L<T;L++)for(let E=0;E<2*(T-L)-1;E++){const y=Math.floor(E/2);E%2===0?(d(A[L][y+1]),d(A[L+1][y]),d(A[L][y])):(d(A[L][y+1]),d(A[L+1][y+1]),d(A[L+1][y]))}}function c(x){const S=new I;for(let b=0;b<r.length;b+=3)S.x=r[b+0],S.y=r[b+1],S.z=r[b+2],S.normalize().multiplyScalar(x),r[b+0]=S.x,r[b+1]=S.y,r[b+2]=S.z}function h(){const x=new I;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];const b=m(x)/2/Math.PI+.5,D=f(x)/Math.PI+.5;a.push(b,1-D)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const S=a[x+0],b=a[x+2],D=a[x+4],T=Math.max(S,b,D),A=Math.min(S,b,D);T>.9&&A<.1&&(S<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),D<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,S){const b=x*3;S.x=t[b+0],S.y=t[b+1],S.z=t[b+2]}function g(){const x=new I,S=new I,b=new I,D=new I,T=new at,A=new at,L=new at;for(let E=0,y=0;E<r.length;E+=9,y+=6){x.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),b.set(r[E+6],r[E+7],r[E+8]),T.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),L.set(a[y+4],a[y+5]),D.copy(x).add(S).add(b).divideScalar(3);const U=m(D);_(T,y+0,x,U),_(A,y+2,S,U),_(L,y+4,b,U)}}function _(x,S,b,D){D<0&&x.x===1&&(a[S]=x.x-1),b.x===0&&b.z===0&&(a[S]=D/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.vertices,t.indices,t.radius,t.details)}}class Fr extends Ds{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fr(t.radius,t.detail)}}class Io extends Ds{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Io(t.radius,t.detail)}}class Ls extends Ds{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ls(t.radius,t.detail)}}class Yt extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*d-a;for(let S=0;S<c;S++){const b=S*u-r;g.push(b,-x,0),_.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const S=x+c*f,b=x+c*(f+1),D=x+1+c*(f+1),T=x+1+c*f;p.push(S,b,T),p.push(b,D,T)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.width,t.height,t.widthSegments,t.heightSegments)}}class nn extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new I,g=new at;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const x=f+m,S=x,b=x+n+1,D=x+n+2,T=x+1;o.push(S,b,T),o.push(b,D,T)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wt extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],S=f/n;let b=0;f===0&&a===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let D=0;D<=e;D++){const T=D/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+b,1-S),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const S=h[f][x+1],b=h[f][x],D=h[f+1][x],T=h[f+1][x+1];(f!==0||a>0)&&p.push(S,b,T),(f!==n-1||l<Math.PI)&&p.push(b,D,T)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ye extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,x=(s+1)*p+g;a.push(_,m,x),a.push(m,f,x)}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ye extends os{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gd extends os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vd extends os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Dr extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Wd extends Dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ha=new ve,wl=new I,El=new I;class wh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(wl),El.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(El),e.updateMatrixWorld(),ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tl=new ve,_s=new I,ua=new I;class Xd extends wh{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),n.position.copy(_s),ua.copy(n.position),ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ua),n.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),Tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl)}}class Zi extends Dr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Uo extends mh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class qd extends wh{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xi extends Dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new qd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Eh extends Dr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yd extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $d{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Al(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Al();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Al(){return performance.now()}function Cl(i,t,e,n){const s=jd(n);switch(e){case Kc:return i*t;case th:return i*t;case eh:return i*t*2;case nh:return i*t/s.components*s.byteLength;case wo:return i*t/s.components*s.byteLength;case ih:return i*t*2/s.components*s.byteLength;case Eo:return i*t*2/s.components*s.byteLength;case Qc:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case To:return i*t*4/s.components*s.byteLength;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Ga:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mr:case co:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sh:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jd(i){switch(i){case Wn:case jc:return{byteLength:1,components:1};case Cs:case Zc:case Hn:return{byteLength:2,components:1};case bo:case So:return{byteLength:2,components:4};case bi:case Mo:case kn:return{byteLength:4,components:1};case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Th(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
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
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
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
#endif`,of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uf=`#ifdef USE_IRIDESCENCE
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
#endif`,df=`#ifdef USE_BUMPMAP
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mf=`#define PI 3.141592653589793
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
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sf=`vec3 transformedNormal = objectNormal;
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
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vf=`uniform bool receiveShadow;
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
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jf=`PhysicalMaterial material;
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
#endif`,Zf=`struct PhysicalMaterial {
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
}`,Jf=`
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o0=`#if defined( USE_POINTS_UV )
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
#endif`,l0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
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
#endif`,p0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,M0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
}`,rp=`#define DISTANCE
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
}`,ap=`#define DISTANCE
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#define LAMBERT
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
}`,pp=`#define LAMBERT
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
}`,mp=`#define MATCAP
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
}`,gp=`#define MATCAP
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
}`,vp=`#define NORMAL
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
}`,_p=`#define NORMAL
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
}`,yp=`#define PHONG
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
}`,xp=`#define PHONG
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
}`,Mp=`#define STANDARD
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
}`,bp=`#define STANDARD
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
}`,Sp=`#define TOON
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
}`,wp=`#define TOON
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
}`,Ep=`uniform float size;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Cp=`uniform vec3 color;
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
}`,Rp=`uniform float rotation;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Jd,alphahash_pars_fragment:Kd,alphamap_fragment:Qd,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:af,batching_vertex:of,begin_vertex:lf,beginnormal_vertex:cf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:vf,color_pars_fragment:_f,color_pars_vertex:yf,color_vertex:xf,common:Mf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:Sf,displacementmap_pars_vertex:wf,displacementmap_vertex:Ef,emissivemap_fragment:Tf,emissivemap_pars_fragment:Af,colorspace_fragment:Cf,colorspace_pars_fragment:Rf,envmap_fragment:Pf,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Df,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Wf,envmap_vertex:If,fog_vertex:Uf,fog_pars_vertex:Nf,fog_fragment:kf,fog_pars_fragment:Bf,gradientmap_pars_fragment:Of,lightmap_pars_fragment:zf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Vf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:$f,lights_physical_fragment:jf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Jf,lights_fragment_maps:Kf,lights_fragment_end:Qf,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:n0,logdepthbuf_vertex:i0,map_fragment:s0,map_pars_fragment:r0,map_particle_fragment:a0,map_particle_pars_fragment:o0,metalnessmap_fragment:l0,metalnessmap_pars_fragment:c0,morphinstance_vertex:h0,morphcolor_vertex:u0,morphnormal_vertex:d0,morphtarget_pars_vertex:f0,morphtarget_vertex:p0,normal_fragment_begin:m0,normal_fragment_maps:g0,normal_pars_fragment:v0,normal_pars_vertex:_0,normal_vertex:y0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:b0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:w0,opaque_fragment:E0,packing:T0,premultiplied_alpha_fragment:A0,project_vertex:C0,dithering_fragment:R0,dithering_pars_fragment:P0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:I0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:k0,skinning_pars_vertex:B0,skinning_vertex:O0,skinnormal_vertex:z0,specularmap_fragment:H0,specularmap_pars_fragment:G0,tonemapping_fragment:V0,tonemapping_pars_fragment:W0,transmission_fragment:X0,transmission_pars_fragment:q0,uv_pars_fragment:Y0,uv_pars_vertex:$0,uv_vertex:j0,worldpos_vertex:Z0,background_vert:J0,background_frag:K0,backgroundCube_vert:Q0,backgroundCube_frag:tp,cube_vert:ep,cube_frag:np,depth_vert:ip,depth_frag:sp,distanceRGBA_vert:rp,distanceRGBA_frag:ap,equirect_vert:op,equirect_frag:lp,linedashed_vert:cp,linedashed_frag:hp,meshbasic_vert:up,meshbasic_frag:dp,meshlambert_vert:fp,meshlambert_frag:pp,meshmatcap_vert:mp,meshmatcap_frag:gp,meshnormal_vert:vp,meshnormal_frag:_p,meshphong_vert:yp,meshphong_frag:xp,meshphysical_vert:Mp,meshphysical_frag:bp,meshtoon_vert:Sp,meshtoon_frag:wp,points_vert:Ep,points_frag:Tp,shadow_vert:Ap,shadow_frag:Cp,sprite_vert:Rp,sprite_frag:Pp},lt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},wn={basic:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ve([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ve([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ve([lt.points,lt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ve([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ve([lt.common,lt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ve([lt.sprite,lt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ve([lt.common,lt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ve([lt.lights,lt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};wn.physical={uniforms:Ve([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const rr={r:0,b:0,g:0},hi=new Tn,Fp=new ve;function Dp(i,t,e,n,s,r,a){const o=new Mt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?e:t).get(b)),b}function _(S){let b=!1;const D=g(S);D===null?f(o,l):D&&D.isColor&&(f(D,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,b){const D=g(b);D&&(D.isCubeTexture||D.mapping===Rr)?(h===void 0&&(h=new ie(new N(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:ss(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hi.copy(b.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(hi)),h.material.toneMapped=ee.getTransfer(D.colorSpace)!==ue,(u!==D||d!==D.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=D,d=D.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new ie(new Yt(2,2),new We({name:"BackgroundMaterial",uniforms:ss(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ee.getTransfer(D.colorSpace)!==ue,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||d!==D.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=D,d=D.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,b){S.getRGB(rr,ph(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,b,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:_,addToRenderList:m,dispose:x}}function Lp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,U,X,W,j){let tt=!1;const $=u(W,X,U);r!==$&&(r=$,c(r.object)),tt=p(y,W,X,j),tt&&g(y,W,X,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,b(y,U,X,W),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,U,X){const W=X.wireframe===!0;let j=n[y.id];j===void 0&&(j={},n[y.id]=j);let tt=j[U.id];tt===void 0&&(tt={},j[U.id]=tt);let $=tt[W];return $===void 0&&($=d(l()),tt[W]=$),$}function d(y){const U=[],X=[],W=[];for(let j=0;j<e;j++)U[j]=0,X[j]=0,W[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:W,object:y,attributes:{},index:null}}function p(y,U,X,W){const j=r.attributes,tt=U.attributes;let $=0;const nt=X.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const vt=j[Y];let Tt=tt[Y];if(Tt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor)),vt===void 0||vt.attribute!==Tt||Tt&&vt.data!==Tt.data)return!0;$++}return r.attributesNum!==$||r.index!==W}function g(y,U,X,W){const j={},tt=U.attributes;let $=0;const nt=X.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let vt=tt[Y];vt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor));const Tt={};Tt.attribute=vt,vt&&vt.data&&(Tt.data=vt.data),j[Y]=Tt,$++}r.attributes=j,r.attributesNum=$,r.index=W}function _(){const y=r.newAttributes;for(let U=0,X=y.length;U<X;U++)y[U]=0}function m(y){f(y,0)}function f(y,U){const X=r.newAttributes,W=r.enabledAttributes,j=r.attributeDivisors;X[y]=1,W[y]===0&&(i.enableVertexAttribArray(y),W[y]=1),j[y]!==U&&(i.vertexAttribDivisor(y,U),j[y]=U)}function x(){const y=r.newAttributes,U=r.enabledAttributes;for(let X=0,W=U.length;X<W;X++)U[X]!==y[X]&&(i.disableVertexAttribArray(X),U[X]=0)}function S(y,U,X,W,j,tt,$){$===!0?i.vertexAttribIPointer(y,U,X,j,tt):i.vertexAttribPointer(y,U,X,W,j,tt)}function b(y,U,X,W){_();const j=W.attributes,tt=X.getAttributes(),$=U.defaultAttributeValues;for(const nt in tt){const Y=tt[nt];if(Y.location>=0){let ut=j[nt];if(ut===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ut!==void 0){const vt=ut.normalized,Tt=ut.itemSize,Xt=t.get(ut);if(Xt===void 0)continue;const pe=Xt.buffer,J=Xt.type,rt=Xt.bytesPerElement,St=J===i.INT||J===i.UNSIGNED_INT||ut.gpuType===Mo;if(ut.isInterleavedBufferAttribute){const dt=ut.data,It=dt.stride,Bt=ut.offset;if(dt.isInstancedInterleavedBuffer){for(let qt=0;qt<Y.locationSize;qt++)f(Y.location+qt,dt.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let qt=0;qt<Y.locationSize;qt++)m(Y.location+qt);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let qt=0;qt<Y.locationSize;qt++)S(Y.location+qt,Tt/Y.locationSize,J,vt,It*rt,(Bt+Tt/Y.locationSize*qt)*rt,St)}else{if(ut.isInstancedBufferAttribute){for(let dt=0;dt<Y.locationSize;dt++)f(Y.location+dt,ut.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let dt=0;dt<Y.locationSize;dt++)m(Y.location+dt);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let dt=0;dt<Y.locationSize;dt++)S(Y.location+dt,Tt/Y.locationSize,J,vt,Tt*rt,Tt/Y.locationSize*dt*rt,St)}}else if($!==void 0){const vt=$[nt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(Y.location,vt);break;case 3:i.vertexAttrib3fv(Y.location,vt);break;case 4:i.vertexAttrib4fv(Y.location,vt);break;default:i.vertexAttrib1fv(Y.location,vt)}}}}x()}function D(){L();for(const y in n){const U=n[y];for(const X in U){const W=U[X];for(const j in W)h(W[j].object),delete W[j];delete U[X]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const U=n[y.id];for(const X in U){const W=U[X];for(const j in W)h(W[j].object),delete W[j];delete U[X]}delete n[y.id]}function A(y){for(const U in n){const X=n[U];if(X[y.id]===void 0)continue;const W=X[y.id];for(const j in W)h(W[j].object),delete W[j];delete X[y.id]}}function L(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Ip(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Up(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==kn&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:D,maxSamples:T}}function Np(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new fi,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,S=x*4;let b=f.clippingState||null;l.value=b,b=h(g,d,S,p);for(let D=0;D!==S;++D)b[D]=e[D];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,b=p;S!==_;++S,b+=4)a.copy(u[S]).applyMatrix4(x,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function kp(i){let t=new WeakMap;function e(a,o){return o===Oa?a.mapping=Qi:o===za&&(a.mapping=ts),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Oa||o===za)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const qi=4,Rl=[.125,.215,.35,.446,.526,.582],gi=20,da=new Uo,Pl=new Mt;let fa=null,pa=0,ma=0,ga=!1;const pi=(1+Math.sqrt(5))/2,Hi=1/pi,Fl=[new I(-pi,Hi,0),new I(pi,Hi,0),new I(-Hi,0,pi),new I(Hi,0,pi),new I(0,pi,-Hi),new I(0,pi,Hi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Dl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fa,pa,ma),this._renderer.xr.enabled=ga,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Hn,format:vn,colorSpace:is,depthBuffer:!1},s=Ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=Op(r,t,e)}return s}_compileMaterial(t){const e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,n,s){const o=new je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pl),h.toneMapping=ei,h.autoClear=!1;const p=new Lt({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new ie(new N,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Pl),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;ar(s,x*S,f>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ie(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fl[(s-r-1)%Fl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ie(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const f=[];let x=0;for(let A=0;A<gi;++A){const L=A/_,E=Math.exp(-L*L/2);f.push(E),A===0?x+=E:A<m&&(x+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const b=this._sizeLods[s],D=3*b*(s>S-qi?s-S+qi:0),T=4*(this._cubeSize-b);ar(e,D,T,3*b,2*b),l.setRenderTarget(e),l.render(u,da)}}function Bp(i){const t=[],e=[],n=[];let s=i;const r=i-qi+1+Rl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-qi?l=Rl[a-i+qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),S=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,L=T>2?0:-1,E=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];x.set(E,_*g*T),S.set(d,m*g*T);const y=[T,T,T,T,T,T];b.set(y,f*g*T)}const D=new ze;D.setAttribute("position",new Mn(x,_)),D.setAttribute("uv",new Mn(S,m)),D.setAttribute("faceIndex",new Mn(b,f)),t.push(D),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ll(i,t,e){const n=new xn(i,t,e);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Op(i,t,e){const n=new Float32Array(gi),s=new I(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:No(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Il(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ul(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function No(){return`

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
	`}function zp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Oa||l===za,h=l===Qi||l===ts;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Dl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Dl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Hp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gp(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let S=0,b=x.length;S<b;S+=3){const D=x[S+0],T=x[S+1],A=x[S+2];d.push(D,T,T,A,A,D)}}else if(g!==void 0){const x=g.array;_=g.version;for(let S=0,b=x.length/3-1;S<b;S+=3){const D=S+0,T=S+1,A=S+2;d.push(D,T,T,A,A,D)}}else return;const m=new(oh(d)?fh:dh)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Vp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*_[x];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xp(i,t,e){const n=new WeakMap,s=new de;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let D=o.attributes.position.count*b,T=1;D>t.maxTextureSize&&(T=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const A=new Float32Array(D*T*4*u),L=new ch(A,D,T,u);L.type=kn,L.needsUpdate=!0;const E=b*4;for(let U=0;U<u;U++){const X=f[U],W=x[U],j=S[U],tt=D*T*4*U;for(let $=0;$<X.count;$++){const nt=$*E;g===!0&&(s.fromBufferAttribute(X,$),A[tt+nt+0]=s.x,A[tt+nt+1]=s.y,A[tt+nt+2]=s.z,A[tt+nt+3]=0),_===!0&&(s.fromBufferAttribute(W,$),A[tt+nt+4]=s.x,A[tt+nt+5]=s.y,A[tt+nt+6]=s.z,A[tt+nt+7]=0),m===!0&&(s.fromBufferAttribute(j,$),A[tt+nt+8]=s.x,A[tt+nt+9]=s.y,A[tt+nt+10]=s.z,A[tt+nt+11]=j.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new at(D,T)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Ah=new Xe,Nl=new yh(1,1),Ch=new ch,Rh=new ld,Ph=new gh,kl=[],Bl=[],Ol=new Float32Array(16),zl=new Float32Array(9),Hl=new Float32Array(4);function ls(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=kl[s];if(r===void 0&&(r=new Float32Array(s),kl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lr(i,t){let e=Bl[t];e===void 0&&(e=new Int32Array(t),Bl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Jp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Hl.set(n),i.uniformMatrix2fv(this.addr,!1,Hl),Re(e,n)}}function Kp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;zl.set(n),i.uniformMatrix3fv(this.addr,!1,zl),Re(e,n)}}function Qp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),Re(e,n)}}function tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nl.compareFunction=ah,r=Nl):r=Ah,e.setTexture2D(t||r,s)}function cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rh,s)}function hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ph,s)}function um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ch,s)}function dm(i){switch(i){case 5126:return Yp;case 35664:return $p;case 35665:return jp;case 35666:return Zp;case 35674:return Jp;case 35675:return Kp;case 35676:return Qp;case 5124:case 35670:return tm;case 35667:case 35671:return em;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return sm;case 36294:return rm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}}function fm(i,t){i.uniform1fv(this.addr,t)}function pm(i,t){const e=ls(t,this.size,2);i.uniform2fv(this.addr,e)}function mm(i,t){const e=ls(t,this.size,3);i.uniform3fv(this.addr,e)}function gm(i,t){const e=ls(t,this.size,4);i.uniform4fv(this.addr,e)}function vm(i,t){const e=ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _m(i,t){const e=ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ym(i,t){const e=ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xm(i,t){i.uniform1iv(this.addr,t)}function Mm(i,t){i.uniform2iv(this.addr,t)}function bm(i,t){i.uniform3iv(this.addr,t)}function Sm(i,t){i.uniform4iv(this.addr,t)}function wm(i,t){i.uniform1uiv(this.addr,t)}function Em(i,t){i.uniform2uiv(this.addr,t)}function Tm(i,t){i.uniform3uiv(this.addr,t)}function Am(i,t){i.uniform4uiv(this.addr,t)}function Cm(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ah,r[a])}function Rm(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rh,r[a])}function Pm(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ph,r[a])}function Fm(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ch,r[a])}function Dm(i){switch(i){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return vm;case 35675:return _m;case 35676:return ym;case 5124:case 35670:return xm;case 35667:case 35671:return Mm;case 35668:case 35672:return bm;case 35669:case 35673:return Sm;case 5125:return wm;case 36294:return Em;case 36295:return Tm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Fm}}class Lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dm(e.type)}}class Im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dm(e.type)}}class Um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Gl(i,t){i.seq.push(t),i.map[t.id]=t}function Nm(i,t,e){const n=i.name,s=n.length;for(va.lastIndex=0;;){const r=va.exec(n),a=va.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gl(e,c===void 0?new Lm(o,i,t):new Im(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Um(o),Gl(e,u)),e=u}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Nm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Vl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const km=37297;let Bm=0;function Om(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Wl=new zt;function zm(i){ee._getMatrix(Wl,ee.workingColorSpace,i);const t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case yr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Om(i.getShaderSource(t),a)}else return s}function Hm(i,t){const e=zm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gm(i,t){let e;switch(t){case xu:e="Linear";break;case Mu:e="Reinhard";break;case bu:e="Cineon";break;case Yc:e="ACESFilmic";break;case wu:e="AgX";break;case Eu:e="Neutral";break;case Su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const or=new I;function Vm(){ee.getLuminanceCoefficients(or);const i=or.x.toFixed(4),t=or.y.toFixed(4),e=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function Xm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ms(i){return i!==""}function ql(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(Ym,jm)}const $m=new Map;function jm(i,t){let e=Vt[t];if(e===void 0){const n=$m.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}const Zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(Zm,Jm)}function Jm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jl(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Km(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function Qm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case Rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function eg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qc:t="ENVMAP_BLENDING_MULTIPLY";break;case _u:t="ENVMAP_BLENDING_MIX";break;case yu:t="ENVMAP_BLENDING_ADD";break}return t}function ng(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ig(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Km(e),c=Qm(e),h=tg(e),u=eg(e),d=ng(e),p=Wm(e),g=Xm(r),_=s.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),f.length>0&&(f+=`
`)):(m=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),f=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ei?Gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Hm("linearToOutputTexel",e.outputColorSpace),Vm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),a=go(a),a=ql(a,e),a=Yl(a,e),o=go(o),o=ql(o,e),o=Yl(o,e),a=$l(a),o=$l(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=x+m+a,b=x+f+o,D=Vl(s,s.VERTEX_SHADER,S),T=Vl(s,s.FRAGMENT_SHADER,b);s.attachShader(_,D),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(U){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(_).trim(),W=s.getShaderInfoLog(D).trim(),j=s.getShaderInfoLog(T).trim();let tt=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{const nt=Xl(s,D,"vertex"),Y=Xl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+nt+`
`+Y)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||j==="")&&($=!1);$&&(U.diagnostics={runnable:tt,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:j,prefix:f}})}s.deleteShader(D),s.deleteShader(T),L=new gr(s,_),E=qm(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,km)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let sg=0;class rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ag(t),e.set(t,n)),n}}class ag{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}}function og(i,t,e,n,s,r,a){const o=new hh,l=new rg,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,U,X,W){const j=X.fog,tt=W.geometry,$=E.isMeshStandardMaterial?X.environment:null,nt=(E.isMeshStandardMaterial?e:t).get(E.envMap||$),Y=nt&&nt.mapping===Rr?nt.image.height:null,ut=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const vt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Tt=vt!==void 0?vt.length:0;let Xt=0;tt.morphAttributes.position!==void 0&&(Xt=1),tt.morphAttributes.normal!==void 0&&(Xt=2),tt.morphAttributes.color!==void 0&&(Xt=3);let pe,J,rt,St;if(ut){const ce=wn[ut];pe=ce.vertexShader,J=ce.fragmentShader}else pe=E.vertexShader,J=E.fragmentShader,l.update(E),rt=l.getVertexShaderID(E),St=l.getFragmentShaderID(E);const dt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Bt=W.isInstancedMesh===!0,qt=W.isBatchedMesh===!0,xe=!!E.map,Jt=!!E.matcap,we=!!nt,k=!!E.aoMap,sn=!!E.lightMap,$t=!!E.bumpMap,jt=!!E.normalMap,At=!!E.displacementMap,ge=!!E.emissiveMap,Ct=!!E.metalnessMap,R=!!E.roughnessMap,M=E.anisotropy>0,H=E.clearcoat>0,K=E.dispersion>0,et=E.iridescence>0,Z=E.sheen>0,Et=E.transmission>0,ft=M&&!!E.anisotropyMap,_t=H&&!!E.clearcoatMap,Kt=H&&!!E.clearcoatNormalMap,st=H&&!!E.clearcoatRoughnessMap,yt=et&&!!E.iridescenceMap,Dt=et&&!!E.iridescenceThicknessMap,Ut=Z&&!!E.sheenColorMap,xt=Z&&!!E.sheenRoughnessMap,Zt=!!E.specularMap,Ht=!!E.specularColorMap,me=!!E.specularIntensityMap,B=Et&&!!E.transmissionMap,ct=Et&&!!E.thicknessMap,q=!!E.gradientMap,Q=!!E.alphaMap,mt=E.alphaTest>0,pt=!!E.alphaHash,Ot=!!E.extensions;let be=ei;E.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(be=i.toneMapping);const Ne={shaderID:ut,shaderType:E.type,shaderName:E.name,vertexShader:pe,fragmentShader:J,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:St,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:qt,batchingColor:qt&&W._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&W.instanceColor!==null,instancingMorph:Bt&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:is,alphaToCoverage:!!E.alphaToCoverage,map:xe,matcap:Jt,envMap:we,envMapMode:we&&nt.mapping,envMapCubeUVHeight:Y,aoMap:k,lightMap:sn,bumpMap:$t,normalMap:jt,displacementMap:d&&At,emissiveMap:ge,normalMapObjectSpace:jt&&E.normalMapType===Ru,normalMapTangentSpace:jt&&E.normalMapType===rh,metalnessMap:Ct,roughnessMap:R,anisotropy:M,anisotropyMap:ft,clearcoat:H,clearcoatMap:_t,clearcoatNormalMap:Kt,clearcoatRoughnessMap:st,dispersion:K,iridescence:et,iridescenceMap:yt,iridescenceThicknessMap:Dt,sheen:Z,sheenColorMap:Ut,sheenRoughnessMap:xt,specularMap:Zt,specularColorMap:Ht,specularIntensityMap:me,transmission:Et,transmissionMap:B,thicknessMap:ct,gradientMap:q,opaque:E.transparent===!1&&E.blending===ti&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:mt,alphaHash:pt,combine:E.combine,mapUv:xe&&_(E.map.channel),aoMapUv:k&&_(E.aoMap.channel),lightMapUv:sn&&_(E.lightMap.channel),bumpMapUv:$t&&_(E.bumpMap.channel),normalMapUv:jt&&_(E.normalMap.channel),displacementMapUv:At&&_(E.displacementMap.channel),emissiveMapUv:ge&&_(E.emissiveMap.channel),metalnessMapUv:Ct&&_(E.metalnessMap.channel),roughnessMapUv:R&&_(E.roughnessMap.channel),anisotropyMapUv:ft&&_(E.anisotropyMap.channel),clearcoatMapUv:_t&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(E.sheenRoughnessMap.channel),specularMapUv:Zt&&_(E.specularMap.channel),specularColorMapUv:Ht&&_(E.specularColorMap.channel),specularIntensityMapUv:me&&_(E.specularIntensityMap.channel),transmissionMapUv:B&&_(E.transmissionMap.channel),thicknessMapUv:ct&&_(E.thicknessMap.channel),alphaMapUv:Q&&_(E.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(jt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!tt.attributes.uv&&(xe||Q),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:W.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Xt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:xe&&E.map.isVideoTexture===!0&&ee.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:ge&&E.emissiveMap.isVideoTexture===!0&&ee.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fe,flipSided:E.side===Ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ot&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&E.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)y.push(U),y.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(x(y,E),S(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function x(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function S(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function b(E){const y=g[E.type];let U;if(y){const X=wn[y];U=br.clone(X.uniforms)}else U=E.uniforms;return U}function D(E,y){let U;for(let X=0,W=h.length;X<W;X++){const j=h[X];if(j.cacheKey===y){U=j,++U.usedTimes;break}}return U===void 0&&(U=new ig(i,y,E,r),h.push(U)),U}function T(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:D,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:L}}function lg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||cg),n.length>1&&n.sort(d||Zl),s.length>1&&s.sort(d||Zl)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function hg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Jl,i.set(n,[a])):s>=r.length?(a=new Jl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ug(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Mt};break;case"SpotLight":e={position:new I,direction:new I,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function dg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let fg=0;function pg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mg(i){const t=new ug,e=dg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new ve,a=new ve;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,x=0,S=0,b=0,D=0,T=0,A=0;c.sort(pg);for(let E=0,y=c.length;E<y;E++){const U=c[E],X=U.color,W=U.intensity,j=U.distance,tt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=X.r*W,u+=X.g*W,d+=X.b*W;else if(U.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(U.sh.coefficients[$],W);A++}else if(U.isDirectionalLight){const $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const nt=U.shadow,Y=e.get(U);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=U.shadow.matrix,x++}n.directional[p]=$,p++}else if(U.isSpotLight){const $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(X).multiplyScalar(W),$.distance=j,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,n.spot[_]=$;const nt=U.shadow;if(U.map&&(n.spotLightMap[D]=U.map,D++,nt.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[_]=nt.matrix,U.castShadow){const Y=e.get(U);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=tt,b++}_++}else if(U.isRectAreaLight){const $=t.get(U);$.color.copy(X).multiplyScalar(W),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=$,m++}else if(U.isPointLight){const $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const nt=U.shadow,Y=e.get(U);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,Y.shadowCameraNear=nt.camera.near,Y.shadowCameraFar=nt.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=U.shadow.matrix,S++}n.point[g]=$,g++}else if(U.isHemisphereLight){const $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(W),$.groundColor.copy(U.groundColor).multiplyScalar(W),n.hemi[f]=$,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==x||L.numPointShadows!==S||L.numSpotShadows!==b||L.numSpotMaps!==D||L.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=x,L.numPointShadows=S,L.numSpotShadows=b,L.numSpotMaps=D,L.numLightProbes=A,n.version=fg++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const S=c[f];if(S.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(S.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Kl(i){const t=new mg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function gg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Kl(i),t.set(s,[o])):r>=a.length?(o=new Kl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_g=`uniform sampler2D shadow_pass;
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
}`;function yg(i,t,e){let n=new Po;const s=new at,r=new at,a=new de,o=new Gd({depthPacking:Cu}),l=new Vd,c={},h=e.maxTextureSize,u={[ni]:Ze,[Ze]:ni,[fe]:fe},d=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:vg,fragmentShader:_g}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ie(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let f=this.type;this.render=function(T,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),X=i.state;X.setBlending(zn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const W=f!==In&&this.type===In,j=f===In&&this.type!==In;for(let tt=0,$=T.length;tt<$;tt++){const nt=T[tt],Y=nt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ut=Y.getFrameExtents();if(s.multiply(ut),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,Y.mapSize.y=r.y)),Y.map===null||W===!0||j===!0){const Tt=this.type!==In?{minFilter:yn,magFilter:yn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new xn(s.x,s.y,Tt),Y.map.texture.name=nt.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const vt=Y.getViewportCount();for(let Tt=0;Tt<vt;Tt++){const Xt=Y.getViewport(Tt);a.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),X.viewport(a),Y.updateMatrices(nt,Tt),n=Y.getFrustum(),b(A,L,Y.camera,nt,this.type)}Y.isPointLightShadow!==!0&&this.type===In&&x(Y,L),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,U)};function x(T,A){const L=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,L,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,L,p,_,null)}function S(T,A,L,E){let y=null;const U=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)y=U;else if(y=L.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=y.uuid,W=A.uuid;let j=c[X];j===void 0&&(j={},c[X]=j);let tt=j[W];tt===void 0&&(tt=y.clone(),j[W]=tt,A.addEventListener("dispose",D)),y=tt}if(y.visible=A.visible,y.wireframe=A.wireframe,E===In?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=i.properties.get(y);X.light=L}return y}function b(T,A,L,E,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===In)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const W=t.update(T),j=T.material;if(Array.isArray(j)){const tt=W.groups;for(let $=0,nt=tt.length;$<nt;$++){const Y=tt[$],ut=j[Y.materialIndex];if(ut&&ut.visible){const vt=S(T,ut,E,y);T.onBeforeShadow(i,T,A,L,W,vt,Y),i.renderBufferDirect(L,null,W,vt,T,Y),T.onAfterShadow(i,T,A,L,W,vt,Y)}}}else if(j.visible){const tt=S(T,j,E,y);T.onBeforeShadow(i,T,A,L,W,tt,null),i.renderBufferDirect(L,null,W,tt,T,null),T.onAfterShadow(i,T,A,L,W,tt,null)}}const X=T.children;for(let W=0,j=X.length;W<j;W++)b(X[W],A,L,E,y)}function D(T){T.target.removeEventListener("dispose",D);for(const L in c){const E=c[L],y=T.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const xg={[Da]:La,[Ia]:ka,[Ua]:Ba,[Ki]:Na,[La]:Da,[ka]:Ia,[Ba]:Ua,[Na]:Ki};function Mg(i,t){function e(){let B=!1;const ct=new de;let q=null;const Q=new de(0,0,0,0);return{setMask:function(mt){q!==mt&&!B&&(i.colorMask(mt,mt,mt,mt),q=mt)},setLocked:function(mt){B=mt},setClear:function(mt,pt,Ot,be,Ne){Ne===!0&&(mt*=be,pt*=be,Ot*=be),ct.set(mt,pt,Ot,be),Q.equals(ct)===!1&&(i.clearColor(mt,pt,Ot,be),Q.copy(ct))},reset:function(){B=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let B=!1,ct=!1,q=null,Q=null,mt=null;return{setReversed:function(pt){if(ct!==pt){const Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const be=mt;mt=null,this.setClear(be)}ct=pt},getReversed:function(){return ct},setTest:function(pt){pt?dt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(pt){q!==pt&&!B&&(i.depthMask(pt),q=pt)},setFunc:function(pt){if(ct&&(pt=xg[pt]),Q!==pt){switch(pt){case Da:i.depthFunc(i.NEVER);break;case La:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=pt}},setLocked:function(pt){B=pt},setClear:function(pt){mt!==pt&&(ct&&(pt=1-pt),i.clearDepth(pt),mt=pt)},reset:function(){B=!1,q=null,Q=null,mt=null,ct=!1}}}function s(){let B=!1,ct=null,q=null,Q=null,mt=null,pt=null,Ot=null,be=null,Ne=null;return{setTest:function(ce){B||(ce?dt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ce){ct!==ce&&!B&&(i.stencilMask(ce),ct=ce)},setFunc:function(ce,hn,Cn){(q!==ce||Q!==hn||mt!==Cn)&&(i.stencilFunc(ce,hn,Cn),q=ce,Q=hn,mt=Cn)},setOp:function(ce,hn,Cn){(pt!==ce||Ot!==hn||be!==Cn)&&(i.stencilOp(ce,hn,Cn),pt=ce,Ot=hn,be=Cn)},setLocked:function(ce){B=ce},setClear:function(ce){Ne!==ce&&(i.clearStencil(ce),Ne=ce)},reset:function(){B=!1,ct=null,q=null,Q=null,mt=null,pt=null,Ot=null,be=null,Ne=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,S=null,b=null,D=null,T=null,A=new Mt(0,0,0),L=0,E=!1,y=null,U=null,X=null,W=null,j=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,nt=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=nt>=2);let ut=null,vt={};const Tt=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),pe=new de().fromArray(Tt),J=new de().fromArray(Xt);function rt(B,ct,q,Q){const mt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(B,pt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<q;Ot++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ct+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return pt}const St={};St[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(i.DEPTH_TEST),a.setFunc(Ki),$t(!1),jt(Jo),dt(i.CULL_FACE),k(zn);function dt(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function It(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Bt(B,ct){return u[B]!==ct?(i.bindFramebuffer(B,ct),u[B]=ct,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function qt(B,ct){let q=p,Q=!1;if(B){q=d.get(ct),q===void 0&&(q=[],d.set(ct,q));const mt=B.textures;if(q.length!==mt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Ot=mt.length;pt<Ot;pt++)q[pt]=i.COLOR_ATTACHMENT0+pt;q.length=mt.length,Q=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Q=!0);Q&&i.drawBuffers(q)}function xe(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const Jt={[mi]:i.FUNC_ADD,[eu]:i.FUNC_SUBTRACT,[nu]:i.FUNC_REVERSE_SUBTRACT};Jt[iu]=i.MIN,Jt[su]=i.MAX;const we={[ru]:i.ZERO,[au]:i.ONE,[ou]:i.SRC_COLOR,[Pa]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[uu]:i.DST_COLOR,[cu]:i.DST_ALPHA,[lu]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[du]:i.ONE_MINUS_DST_COLOR,[hu]:i.ONE_MINUS_DST_ALPHA,[pu]:i.CONSTANT_COLOR,[mu]:i.ONE_MINUS_CONSTANT_COLOR,[gu]:i.CONSTANT_ALPHA,[vu]:i.ONE_MINUS_CONSTANT_ALPHA};function k(B,ct,q,Q,mt,pt,Ot,be,Ne,ce){if(B===zn){_===!0&&(It(i.BLEND),_=!1);return}if(_===!1&&(dt(i.BLEND),_=!0),B!==tu){if(B!==m||ce!==E){if((f!==mi||b!==mi)&&(i.blendEquation(i.FUNC_ADD),f=mi,b=mi),ce)switch(B){case ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oe:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,S=null,D=null,T=null,A.set(0,0,0),L=0,m=B,E=ce}return}mt=mt||ct,pt=pt||q,Ot=Ot||Q,(ct!==f||mt!==b)&&(i.blendEquationSeparate(Jt[ct],Jt[mt]),f=ct,b=mt),(q!==x||Q!==S||pt!==D||Ot!==T)&&(i.blendFuncSeparate(we[q],we[Q],we[pt],we[Ot]),x=q,S=Q,D=pt,T=Ot),(be.equals(A)===!1||Ne!==L)&&(i.blendColor(be.r,be.g,be.b,Ne),A.copy(be),L=Ne),m=B,E=!1}function sn(B,ct){B.side===fe?It(i.CULL_FACE):dt(i.CULL_FACE);let q=B.side===Ze;ct&&(q=!q),$t(q),B.blending===ti&&B.transparent===!1?k(zn):k(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const Q=B.stencilWrite;o.setTest(Q),Q&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ge(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(B){y!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),y=B)}function jt(B){B!==Zh?(dt(i.CULL_FACE),B!==U&&(B===Jo?i.cullFace(i.BACK):B===Jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),U=B}function At(B){B!==X&&($&&i.lineWidth(B),X=B)}function ge(B,ct,q){B?(dt(i.POLYGON_OFFSET_FILL),(W!==ct||j!==q)&&(i.polygonOffset(ct,q),W=ct,j=q)):It(i.POLYGON_OFFSET_FILL)}function Ct(B){B?dt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function R(B){B===void 0&&(B=i.TEXTURE0+tt-1),ut!==B&&(i.activeTexture(B),ut=B)}function M(B,ct,q){q===void 0&&(ut===null?q=i.TEXTURE0+tt-1:q=ut);let Q=vt[q];Q===void 0&&(Q={type:void 0,texture:void 0},vt[q]=Q),(Q.type!==B||Q.texture!==ct)&&(ut!==q&&(i.activeTexture(q),ut=q),i.bindTexture(B,ct||St[B]),Q.type=B,Q.texture=ct)}function H(){const B=vt[ut];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ut(B){pe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),pe.copy(B))}function xt(B){J.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function Zt(B,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let Q=q.get(B);Q===void 0&&(Q=i.getUniformBlockIndex(ct,B.name),q.set(B,Q))}function Ht(B,ct){const Q=c.get(ct).get(B);l.get(ct)!==Q&&(i.uniformBlockBinding(ct,Q,B.__bindingPointIndex),l.set(ct,Q))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,vt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,S=null,b=null,D=null,T=null,A=new Mt(0,0,0),L=0,E=!1,y=null,U=null,X=null,W=null,j=null,pe.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:It,bindFramebuffer:Bt,drawBuffers:qt,useProgram:xe,setBlending:k,setMaterial:sn,setFlipSided:$t,setCullFace:jt,setLineWidth:At,setPolygonOffset:ge,setScissorTest:Ct,activeTexture:R,bindTexture:M,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:yt,texImage3D:Dt,updateUBOMapping:Zt,uniformBlockBinding:Ht,texStorage2D:Kt,texStorage3D:st,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:ft,compressedTexSubImage3D:_t,scissor:Ut,viewport:xt,reset:me}}function bg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):Mr("canvas")}function _(R,M,H){let K=1;const et=Ct(R);if((et.width>H||et.height>H)&&(K=H/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(K*et.width),Et=Math.floor(K*et.height);u===void 0&&(u=g(Z,Et));const ft=M?g(Z,Et):u;return ft.width=Z,ft.height=Et,ft.getContext("2d").drawImage(R,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Et+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,M,H,K,et=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=M;if(M===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),M===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),M===i.RGBA){const Et=et?yr:ee.getTransfer(K);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=Et===ue?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function b(R,M){let H;return R?M===null||M===bi||M===es?H=i.DEPTH24_STENCIL8:M===kn?H=i.DEPTH32F_STENCIL8:M===Cs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===bi||M===es?H=i.DEPTH_COMPONENT24:M===kn?H=i.DEPTH_COMPONENT32F:M===Cs&&(H=i.DEPTH_COMPONENT16),H}function D(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==yn&&R.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){const M=R.target;M.removeEventListener("dispose",T),L(M),M.isVideoTexture&&h.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),y(M)}function L(R){const M=n.get(R);if(M.__webglInit===void 0)return;const H=R.source,K=d.get(H);if(K){const et=K[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(R),Object.keys(K).length===0&&d.delete(H)}n.remove(R)}function E(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const H=R.source,K=d.get(H);delete K[M.__cacheKey],a.memory.textures--}function y(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let et=0;et<M.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(M.__webglFramebuffer[K][et]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=R.textures;for(let K=0,et=H.length;K<et;K++){const Z=n.get(H[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(H[K])}n.remove(R)}let U=0;function X(){U=0}function W(){const R=U;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function j(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function tt(R,M){const H=n.get(R);if(R.isVideoTexture&&At(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,R,M);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function $(R,M){const H=n.get(R);if(R.version>0&&H.__version!==R.version){J(H,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function nt(R,M){const H=n.get(R);if(R.version>0&&H.__version!==R.version){J(H,R,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function Y(R,M){const H=n.get(R);if(R.version>0&&H.__version!==R.version){rt(H,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const ut={[ln]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},vt={[yn]:i.NEAREST,[Tu]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Tt={[Pu]:i.NEVER,[Nu]:i.ALWAYS,[Fu]:i.LESS,[ah]:i.LEQUAL,[Du]:i.EQUAL,[Uu]:i.GEQUAL,[Lu]:i.GREATER,[Iu]:i.NOTEQUAL};function Xt(R,M){if(M.type===kn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===En||M.magFilter===Or||M.magFilter===ks||M.magFilter===yi||M.minFilter===En||M.minFilter===Or||M.minFilter===ks||M.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ut[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ut[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ut[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,vt[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,vt[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===yn||M.minFilter!==ks&&M.minFilter!==yi||M.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function pe(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",T));const K=M.source;let et=d.get(K);et===void 0&&(et={},d.set(K,et));const Z=j(M);if(Z!==R.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[Z].usedTimes++;const Et=et[R.__cacheKey];Et!==void 0&&(et[R.__cacheKey].usedTimes--,Et.usedTimes===0&&E(M)),R.__cacheKey=Z,R.__webglTexture=et[Z].texture}return H}function J(R,M,H){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const et=pe(R,M),Z=M.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+H);const Et=n.get(Z);if(Z.version!==Et.__version||et===!0){e.activeTexture(i.TEXTURE0+H);const ft=ee.getPrimaries(ee.workingColorSpace),_t=M.colorSpace===Kn?null:ee.getPrimaries(M.colorSpace),Kt=M.colorSpace===Kn||ft===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let st=_(M.image,!1,s.maxTextureSize);st=ge(M,st);const yt=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type);let Ut=S(M.internalFormat,yt,Dt,M.colorSpace,M.isVideoTexture);Xt(K,M);let xt;const Zt=M.mipmaps,Ht=M.isVideoTexture!==!0,me=Et.__version===void 0||et===!0,B=Z.dataReady,ct=D(M,st);if(M.isDepthTexture)Ut=b(M.format===ns,M.type),me&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ut,st.width,st.height,0,yt,Dt,null));else if(M.isDataTexture)if(Zt.length>0){Ht&&me&&e.texStorage2D(i.TEXTURE_2D,ct,Ut,Zt[0].width,Zt[0].height);for(let q=0,Q=Zt.length;q<Q;q++)xt=Zt[q],Ht?B&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,yt,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,q,Ut,xt.width,xt.height,0,yt,Dt,xt.data);M.generateMipmaps=!1}else Ht?(me&&e.texStorage2D(i.TEXTURE_2D,ct,Ut,st.width,st.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,yt,Dt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,st.width,st.height,0,yt,Dt,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Ut,Zt[0].width,Zt[0].height,st.depth);for(let q=0,Q=Zt.length;q<Q;q++)if(xt=Zt[q],M.format!==vn)if(yt!==null)if(Ht){if(B)if(M.layerUpdates.size>0){const mt=Cl(xt.width,xt.height,M.format,M.type);for(const pt of M.layerUpdates){const Ot=xt.data.subarray(pt*mt/xt.data.BYTES_PER_ELEMENT,(pt+1)*mt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,pt,xt.width,xt.height,1,yt,Ot)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,st.depth,yt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ut,xt.width,xt.height,st.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,st.depth,yt,Dt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ut,xt.width,xt.height,st.depth,0,yt,Dt,xt.data)}else{Ht&&me&&e.texStorage2D(i.TEXTURE_2D,ct,Ut,Zt[0].width,Zt[0].height);for(let q=0,Q=Zt.length;q<Q;q++)xt=Zt[q],M.format!==vn?yt!==null?Ht?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ut,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?B&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,yt,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,q,Ut,xt.width,xt.height,0,yt,Dt,xt.data)}else if(M.isDataArrayTexture)if(Ht){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Ut,st.width,st.height,st.depth),B)if(M.layerUpdates.size>0){const q=Cl(st.width,st.height,M.format,M.type);for(const Q of M.layerUpdates){const mt=st.data.subarray(Q*q/st.data.BYTES_PER_ELEMENT,(Q+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,yt,Dt,mt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,yt,Dt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,yt,Dt,st.data);else if(M.isData3DTexture)Ht?(me&&e.texStorage3D(i.TEXTURE_3D,ct,Ut,st.width,st.height,st.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,yt,Dt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,yt,Dt,st.data);else if(M.isFramebufferTexture){if(me)if(Ht)e.texStorage2D(i.TEXTURE_2D,ct,Ut,st.width,st.height);else{let q=st.width,Q=st.height;for(let mt=0;mt<ct;mt++)e.texImage2D(i.TEXTURE_2D,mt,Ut,q,Q,0,yt,Dt,null),q>>=1,Q>>=1}}else if(Zt.length>0){if(Ht&&me){const q=Ct(Zt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Ut,q.width,q.height)}for(let q=0,Q=Zt.length;q<Q;q++)xt=Zt[q],Ht?B&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,yt,Dt,xt):e.texImage2D(i.TEXTURE_2D,q,Ut,yt,Dt,xt);M.generateMipmaps=!1}else if(Ht){if(me){const q=Ct(st);e.texStorage2D(i.TEXTURE_2D,ct,Ut,q.width,q.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Dt,st)}else e.texImage2D(i.TEXTURE_2D,0,Ut,yt,Dt,st);m(M)&&f(K),Et.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function rt(R,M,H){if(M.image.length!==6)return;const K=pe(R,M),et=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const Z=n.get(et);if(et.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+H);const Et=ee.getPrimaries(ee.workingColorSpace),ft=M.colorSpace===Kn?null:ee.getPrimaries(M.colorSpace),_t=M.colorSpace===Kn||Et===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Kt=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let Q=0;Q<6;Q++)!Kt&&!st?yt[Q]=_(M.image[Q],!0,s.maxCubemapSize):yt[Q]=st?M.image[Q].image:M.image[Q],yt[Q]=ge(M,yt[Q]);const Dt=yt[0],Ut=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),Zt=S(M.internalFormat,Ut,xt,M.colorSpace),Ht=M.isVideoTexture!==!0,me=Z.__version===void 0||K===!0,B=et.dataReady;let ct=D(M,Dt);Xt(i.TEXTURE_CUBE_MAP,M);let q;if(Kt){Ht&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Zt,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){q=yt[Q].mipmaps;for(let mt=0;mt<q.length;mt++){const pt=q[mt];M.format!==vn?Ut!==null?Ht?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,pt.width,pt.height,Ut,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Zt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,pt.width,pt.height,Ut,xt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Zt,pt.width,pt.height,0,Ut,xt,pt.data)}}}else{if(q=M.mipmaps,Ht&&me){q.length>0&&ct++;const Q=Ct(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Zt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Ht?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,yt[Q].width,yt[Q].height,Ut,xt,yt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,yt[Q].width,yt[Q].height,0,Ut,xt,yt[Q].data);for(let mt=0;mt<q.length;mt++){const Ot=q[mt].image[Q].image;Ht?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Ot.width,Ot.height,Ut,xt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Zt,Ot.width,Ot.height,0,Ut,xt,Ot.data)}}else{Ht?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ut,xt,yt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,Ut,xt,yt[Q]);for(let mt=0;mt<q.length;mt++){const pt=q[mt];Ht?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Ut,xt,pt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Zt,Ut,xt,pt.image[Q])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),Z.__version=et.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function St(R,M,H,K,et,Z){const Et=r.convert(H.format,H.colorSpace),ft=r.convert(H.type),_t=S(H.internalFormat,Et,ft,H.colorSpace),Kt=n.get(M),st=n.get(H);if(st.__renderTarget=M,!Kt.__hasExternalTextures){const yt=Math.max(1,M.width>>Z),Dt=Math.max(1,M.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,_t,yt,Dt,M.depth,0,Et,ft,null):e.texImage2D(et,Z,_t,yt,Dt,0,Et,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),jt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,st.__webglTexture,0,$t(M)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,st.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(R,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,et=K&&K.isDepthTexture?K.type:null,Z=b(M.stencilBuffer,et),Et=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=$t(M);jt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Z,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,R)}else{const K=M.textures;for(let et=0;et<K.length;et++){const Z=K[et],Et=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),_t=S(Z.internalFormat,Et,ft,Z.colorSpace),Kt=$t(M);H&&jt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,_t,M.width,M.height):jt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,_t,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_t,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),tt(M.depthTexture,0);const et=K.__webglTexture,Z=$t(M);if(M.depthTexture.format===Yi)jt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(M.depthTexture.format===ns)jt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Bt(R){const M=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");It(M.__webglFramebuffer,R)}else if(H){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),dt(M.__webglDepthbuffer[K],R,!1);else{const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),dt(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(R,M,H){const K=n.get(R);M!==void 0&&St(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Bt(R)}function xe(R){const M=R.texture,H=n.get(R),K=n.get(M);R.addEventListener("dispose",A);const et=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,a.memory.textures++),Z){H.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ft]=[];for(let _t=0;_t<M.mipmaps.length;_t++)H.__webglFramebuffer[ft][_t]=i.createFramebuffer()}else H.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)H.__webglFramebuffer[ft]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ft=0,_t=et.length;ft<_t;ft++){const Kt=n.get(et[ft]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&jt(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const _t=et[ft];H.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ft]);const Kt=r.convert(_t.format,_t.colorSpace),st=r.convert(_t.type),yt=S(_t.internalFormat,Kt,st,_t.colorSpace,R.isXRRenderTarget===!0),Dt=$t(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,H.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)St(H.__webglFramebuffer[ft][_t],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,_t);else St(H.__webglFramebuffer[ft],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(M)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ft=0,_t=et.length;ft<_t;ft++){const Kt=et[ft],st=n.get(Kt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),Xt(i.TEXTURE_2D,Kt),St(H.__webglFramebuffer,R,Kt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(Kt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,K.__webglTexture),Xt(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)St(H.__webglFramebuffer[_t],R,M,i.COLOR_ATTACHMENT0,ft,_t);else St(H.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,ft,0);m(M)&&f(ft),e.unbindTexture()}R.depthBuffer&&Bt(R)}function Jt(R){const M=R.textures;for(let H=0,K=M.length;H<K;H++){const et=M[H];if(m(et)){const Z=x(R),Et=n.get(et).__webglTexture;e.bindTexture(Z,Et),f(Z),e.unbindTexture()}}}const we=[],k=[];function sn(R){if(R.samples>0){if(jt(R)===!1){const M=R.textures,H=R.width,K=R.height;let et=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(R),ft=M.length>1;if(ft)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Kt=n.get(M[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,et,i.NEAREST),l===!0&&(we.length=0,k.length=0,we.push(i.COLOR_ATTACHMENT0+_t),R.depthBuffer&&R.resolveDepthBuffer===!1&&(we.push(Z),k.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Kt=n.get(M[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function $t(R){return Math.min(s.maxSamples,R.samples)}function jt(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ge(R,M){const H=R.colorSpace,K=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==is&&H!==Kn&&(ee.getTransfer(H)===ue?(K!==vn||et!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.setTexture2D=tt,this.setTexture2DArray=$,this.setTexture3D=nt,this.setTextureCube=Y,this.rebindTextures=qt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=jt}function Sg(i,t){function e(n,s=Kn){let r;const a=ee.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return i.BYTE;if(n===Zc)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===Mo)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===vn)return i.RGBA;if(n===th)return i.LUMINANCE;if(n===eh)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===nh)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===ih)return i.RG;if(n===Eo)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===ur||n===dr||n===fr||n===pr)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Va||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Ya||n===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===Ya)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Za||n===Ja||n===Ka||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mr||n===co||n===ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mr)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===uo||n===fo||n===po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const wg={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
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

}`;class Ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new We({vertexShader:Eg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new Yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cg extends as{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new Ag,m=e.getContextAttributes();let f=null,x=null;const S=[],b=[],D=new at;let T=null;const A=new je;A.viewport=new de;const L=new je;L.viewport=new de;const E=[A,L],y=new Yd;let U=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let rt=S[J];return rt===void 0&&(rt=new _a,S[J]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(J){let rt=S[J];return rt===void 0&&(rt=new _a,S[J]=rt),rt.getGripSpace()},this.getHand=function(J){let rt=S[J];return rt===void 0&&(rt=new _a,S[J]=rt),rt.getHandSpace()};function W(J){const rt=b.indexOf(J.inputSource);if(rt===-1)return;const St=S[rt];St!==void 0&&(St.update(J.inputSource,J.frame,c||a),St.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",tt);for(let J=0;J<S.length;J++){const rt=b[J];rt!==null&&(b[J]=null,S[J].disconnect(rt))}U=null,X=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,x=null,pe.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",j),s.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new xn(p.framebufferWidth,p.framebufferHeight,{format:vn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,St=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?ns:Yi,St=m.stencil?es:bi);const It={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new xn(d.textureWidth,d.textureHeight,{format:vn,type:Wn,depthTexture:new yh(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function tt(J){for(let rt=0;rt<J.removed.length;rt++){const St=J.removed[rt],dt=b.indexOf(St);dt>=0&&(b[dt]=null,S[dt].disconnect(St))}for(let rt=0;rt<J.added.length;rt++){const St=J.added[rt];let dt=b.indexOf(St);if(dt===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=b.length){b.push(St),dt=Bt;break}else if(b[Bt]===null){b[Bt]=St,dt=Bt;break}if(dt===-1)break}const It=S[dt];It&&It.connect(St)}}const $=new I,nt=new I;function Y(J,rt,St){$.setFromMatrixPosition(rt.matrixWorld),nt.setFromMatrixPosition(St.matrixWorld);const dt=$.distanceTo(nt),It=rt.projectionMatrix.elements,Bt=St.projectionMatrix.elements,qt=It[14]/(It[10]-1),xe=It[14]/(It[10]+1),Jt=(It[9]+1)/It[5],we=(It[9]-1)/It[5],k=(It[8]-1)/It[0],sn=(Bt[8]+1)/Bt[0],$t=qt*k,jt=qt*sn,At=dt/(-k+sn),ge=At*-k;if(rt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ge),J.translateZ(At),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),It[10]===-1)J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Ct=qt+At,R=xe+At,M=$t-ge,H=jt+(dt-ge),K=Jt*xe/R*Ct,et=we*xe/R*Ct;J.projectionMatrix.makePerspective(M,H,K,et,Ct,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ut(J,rt){rt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(rt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let rt=J.near,St=J.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(St=_.depthFar)),y.near=L.near=A.near=rt,y.far=L.far=A.far=St,(U!==y.near||X!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,X=y.far),A.layers.mask=J.layers.mask|2,L.layers.mask=J.layers.mask|4,y.layers.mask=A.layers.mask|L.layers.mask;const dt=J.parent,It=y.cameras;ut(y,dt);for(let Bt=0;Bt<It.length;Bt++)ut(It[Bt],dt);It.length===2?Y(y,A,L):y.projectionMatrix.copy(A.projectionMatrix),vt(J,y,dt)};function vt(J,rt,St){St===null?J.matrix.copy(rt.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(rt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Rs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Tt=null;function Xt(J,rt){if(h=rt.getViewerPose(c||a),g=rt,h!==null){const St=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let dt=!1;St.length!==y.cameras.length&&(y.cameras.length=0,dt=!0);for(let Bt=0;Bt<St.length;Bt++){const qt=St[Bt];let xe=null;if(p!==null)xe=p.getViewport(qt);else{const we=u.getViewSubImage(d,qt);xe=we.viewport,Bt===0&&(t.setRenderTargetTextures(x,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(x))}let Jt=E[Bt];Jt===void 0&&(Jt=new je,Jt.layers.enable(Bt),Jt.viewport=new de,E[Bt]=Jt),Jt.matrix.fromArray(qt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(qt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(xe.x,xe.y,xe.width,xe.height),Bt===0&&(y.matrix.copy(Jt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),dt===!0&&y.cameras.push(Jt)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Bt=u.getDepthInformation(St[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let St=0;St<S.length;St++){const dt=b[St],It=S[St];dt!==null&&It!==void 0&&It.update(dt,rt,c||a)}Tt&&Tt(J,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const pe=new Th;pe.setAnimationLoop(Xt),this.setAnimationLoop=function(J){Tt=J},this.dispose=function(){}}}const ui=new Tn,Rg=new ve;function Pg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ph(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,S,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),S=x.envMap,b=x.envMapRotation;S&&(m.envMap.value=S,ui.copy(b),ui.x*=-1,ui.y*=-1,ui.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(ui)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const b=S.program;n.uniformBlockBinding(x,b)}function c(x,S){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",m));const D=S.program;n.updateUBOMapping(x,D);const T=t.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){const S=u();x.__bindingPointIndex=S;const b=i.createBuffer(),D=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=s[x.id],b=x.uniforms,D=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=b.length;T<A;T++){const L=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,y=L.length;E<y;E++){const U=L[E];if(p(U,T,E,D)===!0){const X=U.__offset,W=Array.isArray(U.value)?U.value:[U.value];let j=0;for(let tt=0;tt<W.length;tt++){const $=W[tt],nt=_($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,X+j,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,j),j+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,S,b,D){const T=x.value,A=S+"_"+b;if(D[A]===void 0)return typeof T=="number"||typeof T=="boolean"?D[A]=T:D[A]=T.clone(),!0;{const L=D[A];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return D[A]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(x){const S=x.uniforms;let b=0;const D=16;for(let A=0,L=S.length;A<L;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,U=E.length;y<U;y++){const X=E[y],W=Array.isArray(X.value)?X.value:[X.value];for(let j=0,tt=W.length;j<tt;j++){const $=W[j],nt=_($),Y=b%D,ut=Y%nt.boundary,vt=Y+ut;b+=ut,vt!==0&&D-vt<nt.storage&&(b+=D-vt),X.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=nt.storage}}}const T=b%D;return T>0&&(b+=D-T),x.__size=b,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Fh{constructor(t={}){const{canvas:e=Qu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const x=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ae,this.toneMapping=ei,this.toneMappingExposure=1;const b=this;let D=!1,T=0,A=0,L=null,E=-1,y=null;const U=new de,X=new de;let W=null;const j=new Mt(0);let tt=0,$=e.width,nt=e.height,Y=1,ut=null,vt=null;const Tt=new de(0,0,$,nt),Xt=new de(0,0,$,nt);let pe=!1;const J=new Po;let rt=!1,St=!1;const dt=new ve,It=new ve,Bt=new I,qt=new de,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function we(){return L===null?Y:1}let k=n;function sn(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),k===null){const O="webgl2";if(k=sn(O,w),k===null)throw sn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $t,jt,At,ge,Ct,R,M,H,K,et,Z,Et,ft,_t,Kt,st,yt,Dt,Ut,xt,Zt,Ht,me,B;function ct(){$t=new Hp(k),$t.init(),Ht=new Sg(k,$t),jt=new Up(k,$t,t,Ht),At=new Mg(k,$t),jt.reverseDepthBuffer&&d&&At.buffers.depth.setReversed(!0),ge=new Wp(k),Ct=new lg,R=new bg(k,$t,At,Ct,jt,Ht,ge),M=new kp(b),H=new zp(b),K=new Zd(k),me=new Lp(k,K),et=new Gp(k,K,ge,me),Z=new qp(k,et,K,ge),Ut=new Xp(k,jt,R),st=new Np(Ct),Et=new og(b,M,H,$t,jt,me,st),ft=new Pg(b,Ct),_t=new hg,Kt=new gg($t),Dt=new Dp(b,M,H,At,Z,p,l),yt=new yg(b,Z,jt),B=new Fg(k,ge,jt,At),xt=new Ip(k,$t,ge),Zt=new Vp(k,$t,ge),ge.programs=Et.programs,b.capabilities=jt,b.extensions=$t,b.properties=Ct,b.renderLists=_t,b.shadowMap=yt,b.state=At,b.info=ge}ct();const q=new Cg(b,k);this.xr=q,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=$t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize($,nt,!1))},this.getSize=function(w){return w.set($,nt)},this.setSize=function(w,O,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,nt=O,e.width=Math.floor(w*Y),e.height=Math.floor(O*Y),G===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set($*Y,nt*Y).floor()},this.setDrawingBufferSize=function(w,O,G){$=w,nt=O,Y=G,e.width=Math.floor(w*G),e.height=Math.floor(O*G),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Tt)},this.setViewport=function(w,O,G,V){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,O,G,V),At.viewport(U.copy(Tt).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Xt)},this.setScissor=function(w,O,G,V){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,O,G,V),At.scissor(X.copy(Xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(w){At.setScissorTest(pe=w)},this.setOpaqueSort=function(w){ut=w},this.setTransparentSort=function(w){vt=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,O=!0,G=!0){let V=0;if(w){let z=!1;if(L!==null){const it=L.texture.format;z=it===To||it===Eo||it===wo}if(z){const it=L.texture.type,ht=it===Wn||it===bi||it===Cs||it===es||it===bo||it===So,gt=Dt.getClearColor(),bt=Dt.getClearAlpha(),Nt=gt.r,kt=gt.g,Rt=gt.b;ht?(g[0]=Nt,g[1]=kt,g[2]=Rt,g[3]=bt,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=Nt,_[1]=kt,_[2]=Rt,_[3]=bt,k.clearBufferiv(k.COLOR,0,_))}else V|=k.COLOR_BUFFER_BIT}O&&(V|=k.DEPTH_BUFFER_BIT),G&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Dt.dispose(),_t.dispose(),Kt.dispose(),Ct.dispose(),M.dispose(),H.dispose(),Z.dispose(),me.dispose(),B.dispose(),Et.dispose(),q.dispose(),q.removeEventListener("sessionstart",Go),q.removeEventListener("sessionend",Vo),si.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=ge.autoReset,O=yt.enabled,G=yt.autoUpdate,V=yt.needsUpdate,z=yt.type;ct(),ge.autoReset=w,yt.enabled=O,yt.autoUpdate=G,yt.needsUpdate=V,yt.type=z}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ot(w){const O=w.target;O.removeEventListener("dispose",Ot),be(O)}function be(w){Ne(w),Ct.remove(w)}function Ne(w){const O=Ct.get(w).programs;O!==void 0&&(O.forEach(function(G){Et.releaseProgram(G)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,G,V,z,it){O===null&&(O=xe);const ht=z.isMesh&&z.matrixWorld.determinant()<0,gt=Gh(w,O,G,V,z);At.setMaterial(V,ht);let bt=G.index,Nt=1;if(V.wireframe===!0){if(bt=et.getWireframeAttribute(G),bt===void 0)return;Nt=2}const kt=G.drawRange,Rt=G.attributes.position;let Qt=kt.start*Nt,se=(kt.start+kt.count)*Nt;it!==null&&(Qt=Math.max(Qt,it.start*Nt),se=Math.min(se,(it.start+it.count)*Nt)),bt!==null?(Qt=Math.max(Qt,0),se=Math.min(se,bt.count)):Rt!=null&&(Qt=Math.max(Qt,0),se=Math.min(se,Rt.count));const Ee=se-Qt;if(Ee<0||Ee===1/0)return;me.setup(z,V,gt,G,bt);let Se,te=xt;if(bt!==null&&(Se=K.get(bt),te=Zt,te.setIndex(Se)),z.isMesh)V.wireframe===!0?(At.setLineWidth(V.wireframeLinewidth*we()),te.setMode(k.LINES)):te.setMode(k.TRIANGLES);else if(z.isLine){let Ft=V.linewidth;Ft===void 0&&(Ft=1),At.setLineWidth(Ft*we()),z.isLineSegments?te.setMode(k.LINES):z.isLineLoop?te.setMode(k.LINE_LOOP):te.setMode(k.LINE_STRIP)}else z.isPoints?te.setMode(k.POINTS):z.isSprite&&te.setMode(k.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)te.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))te.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ft=z._multiDrawStarts,Le=z._multiDrawCounts,re=z._multiDrawCount,un=bt?K.get(bt).bytesPerElement:1,Si=Ct.get(V).currentProgram.getUniforms();for(let Je=0;Je<re;Je++)Si.setValue(k,"_gl_DrawID",Je),te.render(Ft[Je]/un,Le[Je])}else if(z.isInstancedMesh)te.renderInstances(Qt,Ee,z.count);else if(G.isInstancedBufferGeometry){const Ft=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Le=Math.min(G.instanceCount,Ft);te.renderInstances(Qt,Ee,Le)}else te.render(Qt,Ee)};function ce(w,O,G){w.transparent===!0&&w.side===fe&&w.forceSinglePass===!1?(w.side=Ze,w.needsUpdate=!0,Ns(w,O,G),w.side=ni,w.needsUpdate=!0,Ns(w,O,G),w.side=fe):Ns(w,O,G)}this.compile=function(w,O,G=null){G===null&&(G=w),f=Kt.get(G),f.init(O),S.push(f),G.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),w!==G&&w.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const V=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const it=z.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const gt=it[ht];ce(gt,G,z),V.add(gt)}else ce(it,G,z),V.add(it)}),S.pop(),f=null,V},this.compileAsync=function(w,O,G=null){const V=this.compile(w,O,G);return new Promise(z=>{function it(){if(V.forEach(function(ht){Ct.get(ht).currentProgram.isReady()&&V.delete(ht)}),V.size===0){z(w);return}setTimeout(it,10)}$t.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let hn=null;function Cn(w){hn&&hn(w)}function Go(){si.stop()}function Vo(){si.start()}const si=new Th;si.setAnimationLoop(Cn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(w){hn=w,q.setAnimationLoop(w),w===null?si.stop():si.start()},q.addEventListener("sessionstart",Go),q.addEventListener("sessionend",Vo),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,O,L),f=Kt.get(w,S.length),f.init(O),S.push(f),It.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(It),St=this.localClippingEnabled,rt=st.init(this.clippingPlanes,St),m=_t.get(w,x.length),m.init(),x.push(m),q.enabled===!0&&q.isPresenting===!0){const it=b.xr.getDepthSensingMesh();it!==null&&Nr(it,O,-1/0,b.sortObjects)}Nr(w,O,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ut,vt),Jt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Jt&&Dt.addToRenderList(m,w),this.info.render.frame++,rt===!0&&st.beginShadows();const G=f.state.shadowsArray;yt.render(G,w,O),rt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,z=m.transmissive;if(f.setupLights(),O.isArrayCamera){const it=O.cameras;if(z.length>0)for(let ht=0,gt=it.length;ht<gt;ht++){const bt=it[ht];Xo(V,z,w,bt)}Jt&&Dt.render(w);for(let ht=0,gt=it.length;ht<gt;ht++){const bt=it[ht];Wo(m,w,bt,bt.viewport)}}else z.length>0&&Xo(V,z,w,O),Jt&&Dt.render(w),Wo(m,w,O);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(b,w,O),me.resetDefaultState(),E=-1,y=null,S.pop(),S.length>0?(f=S[S.length-1],rt===!0&&st.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Nr(w,O,G,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){V&&qt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(It);const ht=Z.update(w),gt=w.material;gt.visible&&m.push(w,ht,gt,G,qt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const ht=Z.update(w),gt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qt.copy(w.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),qt.copy(ht.boundingSphere.center)),qt.applyMatrix4(w.matrixWorld).applyMatrix4(It)),Array.isArray(gt)){const bt=ht.groups;for(let Nt=0,kt=bt.length;Nt<kt;Nt++){const Rt=bt[Nt],Qt=gt[Rt.materialIndex];Qt&&Qt.visible&&m.push(w,ht,Qt,G,qt.z,Rt)}}else gt.visible&&m.push(w,ht,gt,G,qt.z,null)}}const it=w.children;for(let ht=0,gt=it.length;ht<gt;ht++)Nr(it[ht],O,G,V)}function Wo(w,O,G,V){const z=w.opaque,it=w.transmissive,ht=w.transparent;f.setupLightsView(G),rt===!0&&st.setGlobalState(b.clippingPlanes,G),V&&At.viewport(U.copy(V)),z.length>0&&Us(z,O,G),it.length>0&&Us(it,O,G),ht.length>0&&Us(ht,O,G),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Xo(w,O,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new xn(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?Hn:Wn,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const it=f.state.transmissionRenderTarget[V.id],ht=V.viewport||U;it.setSize(ht.z,ht.w);const gt=b.getRenderTarget();b.setRenderTarget(it),b.getClearColor(j),tt=b.getClearAlpha(),tt<1&&b.setClearColor(16777215,.5),b.clear(),Jt&&Dt.render(G);const bt=b.toneMapping;b.toneMapping=ei;const Nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),rt===!0&&st.setGlobalState(b.clippingPlanes,V),Us(w,G,V),R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it),$t.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Rt=0,Qt=O.length;Rt<Qt;Rt++){const se=O[Rt],Ee=se.object,Se=se.geometry,te=se.material,Ft=se.group;if(te.side===fe&&Ee.layers.test(V.layers)){const Le=te.side;te.side=Ze,te.needsUpdate=!0,qo(Ee,G,V,Se,te,Ft),te.side=Le,te.needsUpdate=!0,kt=!0}}kt===!0&&(R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it))}b.setRenderTarget(gt),b.setClearColor(j,tt),Nt!==void 0&&(V.viewport=Nt),b.toneMapping=bt}function Us(w,O,G){const V=O.isScene===!0?O.overrideMaterial:null;for(let z=0,it=w.length;z<it;z++){const ht=w[z],gt=ht.object,bt=ht.geometry,Nt=V===null?ht.material:V,kt=ht.group;gt.layers.test(G.layers)&&qo(gt,O,G,bt,Nt,kt)}}function qo(w,O,G,V,z,it){w.onBeforeRender(b,O,G,V,z,it),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(b,O,G,V,w,it),z.transparent===!0&&z.side===fe&&z.forceSinglePass===!1?(z.side=Ze,z.needsUpdate=!0,b.renderBufferDirect(G,O,V,z,w,it),z.side=ni,z.needsUpdate=!0,b.renderBufferDirect(G,O,V,z,w,it),z.side=fe):b.renderBufferDirect(G,O,V,z,w,it),w.onAfterRender(b,O,G,V,z,it)}function Ns(w,O,G){O.isScene!==!0&&(O=xe);const V=Ct.get(w),z=f.state.lights,it=f.state.shadowsArray,ht=z.state.version,gt=Et.getParameters(w,z.state,it,O,G),bt=Et.getProgramCacheKey(gt);let Nt=V.programs;V.environment=w.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Nt===void 0&&(w.addEventListener("dispose",Ot),Nt=new Map,V.programs=Nt);let kt=Nt.get(bt);if(kt!==void 0){if(V.currentProgram===kt&&V.lightsStateVersion===ht)return $o(w,gt),kt}else gt.uniforms=Et.getUniforms(w),w.onBeforeCompile(gt,b),kt=Et.acquireProgram(gt,bt),Nt.set(bt,kt),V.uniforms=gt.uniforms;const Rt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Rt.clippingPlanes=st.uniform),$o(w,gt),V.needsLights=Wh(w),V.lightsStateVersion=ht,V.needsLights&&(Rt.ambientLightColor.value=z.state.ambient,Rt.lightProbe.value=z.state.probe,Rt.directionalLights.value=z.state.directional,Rt.directionalLightShadows.value=z.state.directionalShadow,Rt.spotLights.value=z.state.spot,Rt.spotLightShadows.value=z.state.spotShadow,Rt.rectAreaLights.value=z.state.rectArea,Rt.ltc_1.value=z.state.rectAreaLTC1,Rt.ltc_2.value=z.state.rectAreaLTC2,Rt.pointLights.value=z.state.point,Rt.pointLightShadows.value=z.state.pointShadow,Rt.hemisphereLights.value=z.state.hemi,Rt.directionalShadowMap.value=z.state.directionalShadowMap,Rt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Rt.spotShadowMap.value=z.state.spotShadowMap,Rt.spotLightMatrix.value=z.state.spotLightMatrix,Rt.spotLightMap.value=z.state.spotLightMap,Rt.pointShadowMap.value=z.state.pointShadowMap,Rt.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=kt,V.uniformsList=null,kt}function Yo(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=gr.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function $o(w,O){const G=Ct.get(w);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Gh(w,O,G,V,z){O.isScene!==!0&&(O=xe),R.resetTextureUnits();const it=O.fog,ht=V.isMeshStandardMaterial?O.environment:null,gt=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:is,bt=(V.isMeshStandardMaterial?H:M).get(V.envMap||ht),Nt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,kt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!G.morphAttributes.position,Qt=!!G.morphAttributes.normal,se=!!G.morphAttributes.color;let Ee=ei;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ee=b.toneMapping);const Se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=Se!==void 0?Se.length:0,Ft=Ct.get(V),Le=f.state.lights;if(rt===!0&&(St===!0||w!==y)){const He=w===y&&V.id===E;st.setState(V,w,He)}let re=!1;V.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Le.state.version||Ft.outputColorSpace!==gt||z.isBatchedMesh&&Ft.batching===!1||!z.isBatchedMesh&&Ft.batching===!0||z.isBatchedMesh&&Ft.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ft.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ft.instancing===!1||!z.isInstancedMesh&&Ft.instancing===!0||z.isSkinnedMesh&&Ft.skinning===!1||!z.isSkinnedMesh&&Ft.skinning===!0||z.isInstancedMesh&&Ft.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ft.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ft.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ft.instancingMorph===!1&&z.morphTexture!==null||Ft.envMap!==bt||V.fog===!0&&Ft.fog!==it||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==st.numPlanes||Ft.numIntersection!==st.numIntersection)||Ft.vertexAlphas!==Nt||Ft.vertexTangents!==kt||Ft.morphTargets!==Rt||Ft.morphNormals!==Qt||Ft.morphColors!==se||Ft.toneMapping!==Ee||Ft.morphTargetsCount!==te)&&(re=!0):(re=!0,Ft.__version=V.version);let un=Ft.currentProgram;re===!0&&(un=Ns(V,O,z));let Si=!1,Je=!1,hs=!1;const _e=un.getUniforms(),rn=Ft.uniforms;if(At.useProgram(un.program)&&(Si=!0,Je=!0,hs=!0),V.id!==E&&(E=V.id,Je=!0),Si||y!==w){At.buffers.depth.getReversed()?(dt.copy(w.projectionMatrix),ed(dt),nd(dt),_e.setValue(k,"projectionMatrix",dt)):_e.setValue(k,"projectionMatrix",w.projectionMatrix),_e.setValue(k,"viewMatrix",w.matrixWorldInverse);const $e=_e.map.cameraPosition;$e!==void 0&&$e.setValue(k,Bt.setFromMatrixPosition(w.matrixWorld)),jt.logarithmicDepthBuffer&&_e.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&_e.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Je=!0,hs=!0)}if(z.isSkinnedMesh){_e.setOptional(k,z,"bindMatrix"),_e.setOptional(k,z,"bindMatrixInverse");const He=z.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),_e.setValue(k,"boneTexture",He.boneTexture,R))}z.isBatchedMesh&&(_e.setOptional(k,z,"batchingTexture"),_e.setValue(k,"batchingTexture",z._matricesTexture,R),_e.setOptional(k,z,"batchingIdTexture"),_e.setValue(k,"batchingIdTexture",z._indirectTexture,R),_e.setOptional(k,z,"batchingColorTexture"),z._colorsTexture!==null&&_e.setValue(k,"batchingColorTexture",z._colorsTexture,R));const an=G.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Ut.update(z,G,un),(Je||Ft.receiveShadow!==z.receiveShadow)&&(Ft.receiveShadow=z.receiveShadow,_e.setValue(k,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rn.envMap.value=bt,rn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(rn.envMapIntensity.value=O.environmentIntensity),Je&&(_e.setValue(k,"toneMappingExposure",b.toneMappingExposure),Ft.needsLights&&Vh(rn,hs),it&&V.fog===!0&&ft.refreshFogUniforms(rn,it),ft.refreshMaterialUniforms(rn,V,Y,nt,f.state.transmissionRenderTarget[w.id]),gr.upload(k,Yo(Ft),rn,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(gr.upload(k,Yo(Ft),rn,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&_e.setValue(k,"center",z.center),_e.setValue(k,"modelViewMatrix",z.modelViewMatrix),_e.setValue(k,"normalMatrix",z.normalMatrix),_e.setValue(k,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const He=V.uniformsGroups;for(let $e=0,kr=He.length;$e<kr;$e++){const ri=He[$e];B.update(ri,un),B.bind(ri,un)}}return un}function Vh(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Wh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,O,G){Ct.get(w.texture).__webglTexture=O,Ct.get(w.depthTexture).__webglTexture=G;const V=Ct.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const G=Ct.get(w);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,G=0){L=w,T=O,A=G;let V=!0,z=null,it=!1,ht=!1;if(w){const bt=Ct.get(w);if(bt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(k.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(bt.__hasExternalTextures)R.rebindTextures(w,Ct.get(w.texture).__webglTexture,Ct.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Rt=w.depthTexture;if(bt.__boundDepthTexture!==Rt){if(Rt!==null&&Ct.has(Rt)&&(w.width!==Rt.image.width||w.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ht=!0);const kt=Ct.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?z=kt[O][G]:z=kt[O],it=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?z=Ct.get(w).__webglMultisampledFramebuffer:Array.isArray(kt)?z=kt[G]:z=kt,U.copy(w.viewport),X.copy(w.scissor),W=w.scissorTest}else U.copy(Tt).multiplyScalar(Y).floor(),X.copy(Xt).multiplyScalar(Y).floor(),W=pe;if(At.bindFramebuffer(k.FRAMEBUFFER,z)&&V&&At.drawBuffers(w,z),At.viewport(U),At.scissor(X),At.setScissorTest(W),it){const bt=Ct.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,G)}else if(ht){const bt=Ct.get(w.texture),Nt=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,bt.__webglTexture,G||0,Nt)}E=-1},this.readRenderTargetPixels=function(w,O,G,V,z,it,ht){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){At.bindFramebuffer(k.FRAMEBUFFER,gt);try{const bt=w.texture,Nt=bt.format,kt=bt.type;if(!jt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&G>=0&&G<=w.height-z&&k.readPixels(O,G,V,z,Ht.convert(Nt),Ht.convert(kt),it)}finally{const bt=L!==null?Ct.get(L).__webglFramebuffer:null;At.bindFramebuffer(k.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(w,O,G,V,z,it,ht){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){const bt=w.texture,Nt=bt.format,kt=bt.type;if(!jt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-V&&G>=0&&G<=w.height-z){At.bindFramebuffer(k.FRAMEBUFFER,gt);const Rt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Rt),k.bufferData(k.PIXEL_PACK_BUFFER,it.byteLength,k.STREAM_READ),k.readPixels(O,G,V,z,Ht.convert(Nt),Ht.convert(kt),0);const Qt=L!==null?Ct.get(L).__webglFramebuffer:null;At.bindFramebuffer(k.FRAMEBUFFER,Qt);const se=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await td(k,se,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Rt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,it),k.deleteBuffer(Rt),k.deleteSync(se),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,G=0){w.isTexture!==!0&&(Wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-G),z=Math.floor(w.image.width*V),it=Math.floor(w.image.height*V),ht=O!==null?O.x:0,gt=O!==null?O.y:0;R.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,ht,gt,z,it),At.unbindTexture()};const Xh=k.createFramebuffer(),qh=k.createFramebuffer();this.copyTextureToTexture=function(w,O,G=null,V=null,z=0,it=null){w.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],O=arguments[2],it=arguments[3]||0,G=null),it===null&&(z!==0?(Wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=z,z=0):it=0);let ht,gt,bt,Nt,kt,Rt,Qt,se,Ee;const Se=w.isCompressedTexture?w.mipmaps[it]:w.image;if(G!==null)ht=G.max.x-G.min.x,gt=G.max.y-G.min.y,bt=G.isBox3?G.max.z-G.min.z:1,Nt=G.min.x,kt=G.min.y,Rt=G.isBox3?G.min.z:0;else{const an=Math.pow(2,-z);ht=Math.floor(Se.width*an),gt=Math.floor(Se.height*an),w.isDataArrayTexture?bt=Se.depth:w.isData3DTexture?bt=Math.floor(Se.depth*an):bt=1,Nt=0,kt=0,Rt=0}V!==null?(Qt=V.x,se=V.y,Ee=V.z):(Qt=0,se=0,Ee=0);const te=Ht.convert(O.format),Ft=Ht.convert(O.type);let Le;O.isData3DTexture?(R.setTexture3D(O,0),Le=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),Le=k.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),Le=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);const re=k.getParameter(k.UNPACK_ROW_LENGTH),un=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Si=k.getParameter(k.UNPACK_SKIP_PIXELS),Je=k.getParameter(k.UNPACK_SKIP_ROWS),hs=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Se.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Se.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,kt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Rt);const _e=w.isDataArrayTexture||w.isData3DTexture,rn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const an=Ct.get(w),He=Ct.get(O),$e=Ct.get(an.__renderTarget),kr=Ct.get(He.__renderTarget);At.bindFramebuffer(k.READ_FRAMEBUFFER,$e.__webglFramebuffer),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let ri=0;ri<bt;ri++)_e&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ct.get(w).__webglTexture,z,Rt+ri),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ct.get(O).__webglTexture,it,Ee+ri)),k.blitFramebuffer(Nt,kt,ht,gt,Qt,se,ht,gt,k.DEPTH_BUFFER_BIT,k.NEAREST);At.bindFramebuffer(k.READ_FRAMEBUFFER,null),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||Ct.has(w)){const an=Ct.get(w),He=Ct.get(O);At.bindFramebuffer(k.READ_FRAMEBUFFER,Xh),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,qh);for(let $e=0;$e<bt;$e++)_e?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,an.__webglTexture,z,Rt+$e):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,an.__webglTexture,z),rn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.__webglTexture,it,Ee+$e):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,He.__webglTexture,it),z!==0?k.blitFramebuffer(Nt,kt,ht,gt,Qt,se,ht,gt,k.COLOR_BUFFER_BIT,k.NEAREST):rn?k.copyTexSubImage3D(Le,it,Qt,se,Ee+$e,Nt,kt,ht,gt):k.copyTexSubImage2D(Le,it,Qt,se,Nt,kt,ht,gt);At.bindFramebuffer(k.READ_FRAMEBUFFER,null),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else rn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Le,it,Qt,se,Ee,ht,gt,bt,te,Ft,Se.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(Le,it,Qt,se,Ee,ht,gt,bt,te,Se.data):k.texSubImage3D(Le,it,Qt,se,Ee,ht,gt,bt,te,Ft,Se):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,it,Qt,se,ht,gt,te,Ft,Se.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,it,Qt,se,Se.width,Se.height,te,Se.data):k.texSubImage2D(k.TEXTURE_2D,it,Qt,se,ht,gt,te,Ft,Se);k.pixelStorei(k.UNPACK_ROW_LENGTH,re),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,un),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Si),k.pixelStorei(k.UNPACK_SKIP_ROWS,Je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,hs),it===0&&O.generateMipmaps&&k.generateMipmap(Le),At.unbindTexture()},this.copyTextureToTexture3D=function(w,O,G=null,V=null,z=0){return w.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,w=arguments[2],O=arguments[3],z=arguments[4]||0),Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,G,V,z)},this.initRenderTarget=function(w){Ct.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),At.unbindTexture()},this.resetState=function(){T=0,A=0,L=null,At.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const F=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|iPod|Mobile/i.test(typeof navigator<"u"?navigator.userAgent:""),Dg=!1,Lg=!1,Ql=F?.4:.32,Ig=F?44:58,Ug=F?72:80,Ng=F?28:32,tc=F?256:320,kg=F?.35:.45;function ya(){const i=typeof window<"u"?window.devicePixelRatio:1;return F?Math.min(i,1.25):Math.min(i,1.1)}function ii(i,t,e=Ig){return Math.abs(i-t)<=e}function mn(i){i.traverse(t=>{t.matrixAutoUpdate=!1,t.updateMatrix()})}function tn(i,t,e){const n=new Mt(i),s=new Mt(t);return n.lerp(s,e).getStyle()}const ec=120;function Bg(i){const t=i%ec/ec;return t<.4?0:t<.58?(t-.4)/.18*.28:t<.78?.28+(t-.58)/.2*.52:t<.92?.8+(t-.78)/.14*.2:1-(t-.92)/.08}function vr(i){return i<=.55?0:Math.min(1,(i-.55)/.3)}function nc(i){return i<=.5?0:Math.min(1,(i-.5)/.38)}function ic(i){if(i<=.28)return i*.12;if(i<=.55)return .034+(i-.28)*.55;const t=vr(i);return .18+(i-.55)*1.05+t*.35}const sc=new Map;function Og(i,t){return[i,t.roughness??.65,t.metalness??0,t.emissive??"",t.emissiveIntensity??0,t.transparent?1:0,t.opacity??1].join("|")}function C(i,t={}){const e=Og(i,t);let n=sc.get(e);return n||(n=new ye({color:i,roughness:.65,...t}),sc.set(e,n)),n}function v(i,t,e,n=0,s=0,r=0,a=!F){const o=new ie(t,e);return o.position.set(n,s,r),o.castShadow=a,o.receiveShadow=!F,F||(o.frustumCulled=!0),i.add(o),o}function qe(i){i.traverse(t=>{var e;t instanceof ie&&t.geometry.dispose(),t instanceof Pr&&((e=t.material.map)==null||e.dispose(),t.material.dispose())})}class zg{constructor(t){P(this,"root",new Pt);P(this,"ufos",[]);P(this,"stars",[]);P(this,"warFlashes",[]);P(this,"jets",[]);P(this,"starTimer",0);P(this,"night",0);this.scene=t,this.scene.add(this.root),this.root.name="skyEffects"}build(t,e){this.clear();const n=F?4:5;for(let s=0;s<n;s++){const r=40+e()*(t+80),a=this.makeSkyUfo(e),o=(e()-.5)*55,l=22+e()*16;a.position.set(o,l,r),this.root.add(a),this.ufos.push({group:a,worldZ:r,baseX:o,baseY:l,phase:e()*10,speed:.4+e()*.5})}}makeSkyUfo(t){const e=new Pt;e.userData.isSkyUfo=!0,v(e,new ot(.55,.85,.12,F?8:12),C("#78909C",{metalness:.55,roughness:.35,emissive:"#00E676",emissiveIntensity:.25}),0,0,0),v(e,new Ye(.72,.03,6,F?10:14),C("#69F0AE",{emissive:"#00E676",emissiveIntensity:.85}),0,-.04,0),v(e,new wt(.28,8,6,0,Math.PI*2,0,Math.PI/2),C("#80DEEA",{transparent:!0,opacity:.55,emissive:"#00BCD4",emissiveIntensity:.45}),0,.12,0);for(let s=0;s<5;s++){const r=s/5*Math.PI*2;v(e,new N(.06,.06,.06),C(s%2===0?"#FFEB3B":"#FF1744",{emissive:s%2===0?"#FFC107":"#FF1744",emissiveIntensity:.9}),Math.cos(r)*.65,-.02,Math.sin(r)*.65)}const n=v(e,new ot(.02,.35,2.2,8,1,!0),new Lt({color:"#69F0AE",transparent:!0,opacity:.12,side:fe,depthWrite:!1}),0,-1.1,0,!1);return n.userData.isUfoBeam=!0,e.rotation.y=t()*Math.PI*2,e}spawnShootingStar(t,e){if(this.stars.length>=(F?2:4))return;const n=v(this.root,new N(.04,.04,2.8),new Lt({color:"#FFFFFF",transparent:!0,opacity:.92}),(e()-.5)*40,28+e()*12,t+30+e()*40,!1);n.rotation.x=-.6-e()*.4,n.rotation.z=(e()-.5)*.8;const s=v(n,new N(.12,.12,1.2),new Lt({color:"#80DEEA",transparent:!0,opacity:.35,blending:oe}),0,0,1.4,!1);s.userData.isTail=!0,this.stars.push({mesh:n,vx:(e()-.5)*8,vy:-18-e()*12,vz:-25-e()*15,life:.9+e()*.4})}setNight(t){this.night=t;for(const e of this.ufos)e.group.visible=t>.25,e.group.traverse(n=>{n instanceof ie&&n.userData.isUfoBeam&&(n.material.opacity=.08+t*.12)})}playSpectacle(t,e){if(t==="dogfight"){this.spawnJet(e+35+Math.random()*20,-1),this.spawnJet(e+38+Math.random()*20,1);return}if(t==="meteor-streak"){for(let s=0;s<(F?2:4);s++)this.spawnShootingStar(e,Math.random);return}const n=t==="distant-barrage"?F?2:4:F?1:2;for(let s=0;s<n;s++)this.spawnWarFlash(e+25+Math.random()*45,t)}spawnWarFlash(t,e){const n=(Math.random()-.5)*50,s=e==="orbital-flash"?"#FF5252":e==="energy-surge"?"#00E5FF":"#FFAB40",r=v(this.root,new Yt(3.5+Math.random()*4,2+Math.random()*2),new Lt({color:s,transparent:!0,opacity:.85,blending:oe,depthWrite:!1,side:fe}),n,6+Math.random()*8,t,!1);r.rotation.y=(Math.random()-.5)*.6,this.warFlashes.push({mesh:r,life:.35+Math.random()*.35})}spawnJet(t,e){const n=new Pt;n.position.set(e*22,16+Math.random()*6,t),v(n,new en(.35,1.2,5),C("#546E7A",{metalness:.6}),0,0,0),v(n,new Yt(.8,.25),new Lt({color:"#FF5252",transparent:!0,opacity:.7}),-.5,0,0,!1),n.rotation.y=e>0?-Math.PI/2:Math.PI/2,n.rotation.z=e*.15,this.root.add(n),this.jets.push({group:n,life:3.5})}update(t,e,n){this.root.position.set(0,0,0);for(const s of this.ufos){if(Math.abs(s.worldZ-n)>(F?90:120)){s.group.visible=!1;continue}s.group.visible=this.night>.2,s.group.position.set(s.baseX+Math.sin(t*.15+s.phase)*2.5,s.baseY+Math.sin(t*s.speed+s.phase)*1.2,s.worldZ),s.group.rotation.y+=e*(.25+s.speed*.15)}if(this.night>.45){this.starTimer+=e;const s=F?2.2:1.1;this.starTimer>=s&&(this.starTimer=0,this.spawnShootingStar(n,Math.random))}for(let s=this.stars.length-1;s>=0;s--){const r=this.stars[s];r.life-=e,r.mesh.position.x+=r.vx*e,r.mesh.position.y+=r.vy*e,r.mesh.position.z+=r.vz*e,r.mesh.material.opacity=Math.max(0,r.life),(r.life<=0||r.mesh.position.y<8)&&(this.root.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),r.mesh.traverse(a=>{a instanceof ie&&a!==r.mesh&&(a.geometry.dispose(),a.material.dispose())}),this.stars.splice(s,1))}for(let s=this.warFlashes.length-1;s>=0;s--){const r=this.warFlashes[s];r.life-=e;const a=r.mesh.material;a.opacity=Math.max(0,r.life*2.2),r.mesh.scale.setScalar(1+(.35-r.life)*2),r.life<=0&&(this.root.remove(r.mesh),r.mesh.geometry.dispose(),a.dispose(),this.warFlashes.splice(s,1))}for(let s=this.jets.length-1;s>=0;s--){const r=this.jets[s];r.life-=e,r.group.position.x+=e*14*Math.sign(r.group.position.x||1),r.group.position.z-=e*6,(r.life<=0||Math.abs(r.group.position.z-n)>100)&&(qe(r.group),this.jets.splice(s,1))}}clear(){for(const t of this.stars)this.root.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.stars=[];for(const t of this.warFlashes)this.root.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.warFlashes=[];for(const t of this.jets)qe(t.group);this.jets=[];for(const t of this.ufos)qe(t.group);for(this.ufos=[];this.root.children.length;)this.root.remove(this.root.children[0])}dispose(){this.clear(),this.scene.remove(this.root)}}const rc=new Map;function Is(i,t,e=128){let n=rc.get(i);if(n)return n;const s=document.createElement("canvas");return s.width=e,s.height=e,t(s.getContext("2d"),e,e),n=new Fe(s),n.wrapS=n.wrapT=ln,n.colorSpace=ae,rc.set(i,n),n}function Hg(i){const t=`brick-${Math.floor(i*100)}`;return Is(t,(e,n,s)=>{const r=new Mt().setHSL(i,.35,.42);e.fillStyle=r.getStyle(),e.fillRect(0,0,n,s);const a=n/4,o=s/8;for(let l=0;l<8;l++){const c=l%2===0?0:a/2;for(let h=-1;h<5;h++){const u=h*a+c,d=l*o,p=(l+h)%3;e.fillStyle=`rgba(${p===0?0:20},${p===1?0:15},${p===2?0:10},0.12)`,e.fillRect(u+1,d+1,a-2,o-2),e.strokeStyle="rgba(0,0,0,0.22)",e.lineWidth=1,e.strokeRect(u+.5,d+.5,a-1,o-1)}}},128)}function ac(i){const t=`siding-${Math.floor(i*100)}`;return Is(t,(e,n,s)=>{const r=new Mt().setHSL(i,.28,.72);e.fillStyle=r.getStyle(),e.fillRect(0,0,n,s);for(let a=0;a<s;a+=6)e.fillStyle=a%12===0?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.06)",e.fillRect(0,a,n,3);for(let a=0;a<n;a+=32)e.strokeStyle="rgba(0,0,0,0.08)",e.beginPath(),e.moveTo(a,0),e.lineTo(a,s),e.stroke()},128)}function Gg(i="#5D4037"){return Is(`roof-${i}`,(t,e,n)=>{t.fillStyle=i,t.fillRect(0,0,e,n);for(let s=0;s<12;s++){const r=s%2===0?0:10;for(let a=-1;a<8;a++)t.fillStyle=`rgba(0,0,0,${.06+s%3*.03})`,t.beginPath(),t.arc(a*20+r+10,s*10+8,9,0,Math.PI,!0),t.fill()}},128)}function Vg(){return Is("bark",(i,t,e)=>{i.fillStyle="#4E342E",i.fillRect(0,0,t,e);for(let n=0;n<24;n++)i.strokeStyle=`rgba(0,0,0,${.08+n%4*.04})`,i.lineWidth=1+n%3,i.beginPath(),i.moveTo(n*17%t,0),i.bezierCurveTo(n*23%t,e*.3,n*31%t,e*.7,n*13%t,e),i.stroke()},64)}function Wg(){return Is("leaf",(i,t,e)=>{i.fillStyle="#388E3C",i.fillRect(0,0,t,e);for(let n=0;n<80;n++){const s=n*37%t,r=n*53%e;i.fillStyle=n%3===0?"rgba(129,199,132,0.45)":"rgba(27,94,32,0.25)",i.beginPath(),i.ellipse(s,r,3+n%4,2+n%3,n*.5,0,Math.PI*2),i.fill()}},64)}const Ie=F?8:12,On="#FFC107",Ji="#FF9800",Xn="#1a1a1a";let di=null;function ko(){if(di)return di;const i=F?64:96,t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d");e.fillStyle=On,e.fillRect(0,0,i,i),e.fillStyle=Xn;const n=F?10:14;for(let s=-i;s<i*2;s+=n*2)e.beginPath(),e.moveTo(s,0),e.lineTo(s+n,0),e.lineTo(s+n-i,i),e.lineTo(s-i,i),e.fill();return di=new Fe(t),di.colorSpace=ae,di.wrapS=di.wrapT=ln,di}function Xg(){const i=F?64:80,t=F?128:160,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");n.fillStyle="#3d2858",n.fillRect(0,0,i,t);const s=["#FF6B9D","#FFD93D","#6BCBFF","#FF8C42"],r=6;for(let o=0;o<r;o++){const l=t*.78-o*(t/(r+1)),c=s[o%s.length];n.fillStyle=c,n.strokeStyle="#2a1838",n.lineWidth=2;for(const h of[i*.27,i*.5,i*.73])n.beginPath(),n.moveTo(h,l-t*.045),n.lineTo(h-i*.1,l+t*.03),n.lineTo(h+i*.1,l+t*.03),n.closePath(),n.fill(),n.stroke()}n.strokeStyle="#2a1838",n.lineWidth=5,n.strokeRect(3,3,i-6,t-6);const a=new Fe(e);return a.colorSpace=ae,a.wrapT=ln,a}function qg(i,t){switch(t){case"newsbox-row":jg(i);break;case"dog-fence":Zg(i);break;case"party-tent":Jg(i);break;case"bin-alley":Kg(i);break;case"hoa-gate":Qg(i);break;case"mailbox-row":tv(i);break;case"lawn-sprinkler":ev(i);break;case"package-spill":nv(i);break;case"news-stand":iv(i);break;case"food-cart":sv(i);break;case"alien-beacon":rv(i);break;case"fallen-sign":av(i);break;case"checkpoint":ov(i);break;case"traffic-barricade":lv(i);break;case"burst-hydrant":cv(i);break;case"bus-shelter":hv(i);break;case"cactus-wall":uv(i);break;case"mirage-rock":dv(i);break;case"rockslide":fv(i);break;case"sand-drift":pv(i);break;case"skull-rock":mv(i);break;case"tumbleweed":gv(i);break;case"bone-arch":vv(i);break;case"sun-bleached-wreck":_v(i);break;case"fallen-log":yv(i);break;case"temple-rubble":xv(i);break;case"thorn-bramble":Mv(i);break;case"flood-wreck":bv(i);break;case"totem-gate":Sv(i);break;case"vine-snare":wv(i);break;case"quicksand-pit":Ev(i);break;case"idol-shrine":Tv(i);break}$g(i)}function Yg(){const i=ko();return i.repeat.set(1.2,1),C("#FFFFFF",{map:i,roughness:.72,emissive:Ji,emissiveIntensity:F?.06:.1})}function Bo(i,t,e,n,s,r=0){const a=v(i,new Yt(t,e),Yg(),0,n,s,!1);a.rotation.y=r,a.userData.isCautionBand=!0}function $g(i){i.traverse(t=>{if(!(t instanceof ie)||t.userData.isCautionBand||t.userData.isGlow||!(t.material instanceof ye))return;const e=t.material.color.getHex();(e===2171169||e===1710618||e===1842204||e===658450||e===2503224||e===3622735)&&(t.material.emissive.set(Ji),t.material.emissiveIntensity=F?.1:.14,t.material.color.lerp(new Mt(On),F?.14:.18))})}function ne(i,t){const e=v(i,new Ue(t*.94,Ie*2),C("#5a6570",{roughness:.95,metalness:.04}),0,.004,0,!1);e.rotation.x=-Math.PI/2;for(let s=0;s<8;s++){const r=s/8*Math.PI*2,a=Math.PI/4,o=s%2===0?On:Ji,l=v(i,new nn(t*.74,t*.98,F?3:4,1,r,a),C(o,{roughness:.68,emissive:o,emissiveIntensity:F?.1:.14}),0,.01,0,!1);l.rotation.x=-Math.PI/2,l.userData.isGlow=!0}const n=v(i,new nn(t*.42,t*.58,Ie),C(Xn,{roughness:.9,emissive:Ji,emissiveIntensity:.06}),0,.012,0,!1);n.rotation.x=-Math.PI/2;for(let s=0;s<4;s++){const r=s/4*Math.PI*2+Math.PI/4,a=v(i,new ot(.028,.038,.3,4),C(Ji,{emissive:On,emissiveIntensity:.35,roughness:.6}),Math.cos(r)*t*.84,.15,Math.sin(r)*t*.84);v(a,new wt(.048,6,6),C(On,{emissive:On,emissiveIntensity:.5}),0,.17,0)}}function _n(i){return C(i,{roughness:.88,metalness:.02})}function Me(i,t=.55){return C(i,{roughness:.35,metalness:t})}function Dh(i,t,e,n,s){const r=v(i,new N(t,e,.06),C(Xn,{roughness:.85}),0,n,s),a=ko();a.repeat.set(Math.max(2,t/.2),1),v(r,new Yt(t*.96,e*.92),C("#FFFFFF",{map:a,roughness:.7,emissive:Ji,emissiveIntensity:.08}),0,0,.04)}function jg(i){ne(i,.95);for(const t of[-.55,0,.55]){const e=v(i,new N(.44,.68,.4),Me("#1E4E8C",.4),t,.34,0);v(e,new N(.46,.1,.42),Me("#0D2F5C"),0,.39,0),v(e,new Yt(.34,.42),C("#E8F4FD",{roughness:.4}),0,.02,.21),v(e,new N(.36,.05,.02),C("#F5C518",{roughness:.5}),0,.22,.22),v(i,new ot(.02,.02,.08,6),Me("#78909C"),t+.18,.08,.15)}}function Zg(i){ne(i,1);for(const t of[-.88,.88])v(i,new N(.07,.78,.07),_n("#D7CCC8"),t,.39,0),v(i,new N(.1,.1,.1),_n("#A1887F"),t,.82,0);for(let t=0;t<6;t++){const e=-.75+t*.3;v(i,new N(.26,.08,.05),_n("#EFEBE9"),e,.2+t%2*.28,0),v(i,new en(.05,.12,4),_n("#BCAAA4"),e,.58,0)}v(i,new ot(.13,.15,.1,8),Me("#607D8B"),.38,.05,.14),v(i,new ot(.17,.14,.07,8),C("#BF360C",{roughness:.6}),-.38,.035,.12)}function Jg(i){ne(i,1.05);const t=Me("#546E7A",.45);for(const[n,s]of[[-.72,-.38],[.72,-.38],[0,.48]])v(i,new ot(.035,.045,.9,8),t,n,.45,s);const e=v(i,new en(1,.58,4),C("#C2185B",{roughness:.75}),0,.76,0);e.rotation.y=Math.PI/4,v(e,new en(.98,.56,4),C("#880E4F",{roughness:.8}),0,.01,0);for(let n=0;n<5;n++){const s=n/5*Math.PI*2,r=v(i,new wt(.09,8,8),C(["#FDD835","#42A5F5","#66BB6A","#FF7043","#AB47BC"][n],{roughness:.5}),Math.cos(s)*.58,.38+n%2*.12,Math.sin(s)*.38);r.userData.isBob=!0,r.userData.bobPhase=n}v(i,new N(.55,.38,.52),_n("#5D4037"),0,.19,0),v(i,new ot(.04,.04,.12,6),C("#ECEFF1"),.15,.44,.1)}function Kg(i){ne(i,1);const t=["#2E7D32","#1565C0","#E65100"];for(let e=0;e<3;e++){const n=-.55+e*.55,s=v(i,new N(.4,.82,.4),C(t[e],{roughness:.5,metalness:.2}),n,.41,0);v(s,new N(.44,.07,.44),Me("#37474F"),0,.44,0),v(s,new N(.14,.05,.02),C("#FDD835",{roughness:.55}),0,.12,.21),v(s,new ot(.03,.03,.06,6),Me("#455A64"),.14,.55,.12),s.rotation.z=(e-1)*.07}}function Qg(i){ne(i,1.15);for(const t of[-.98,.98])v(i,new N(.14,1,.14),_n("#4E342E"),t,.5,0),v(i,new wt(.11,8,8),C("#F9A825",{roughness:.45}),t,1.02,0);v(i,new N(2.05,.12,.1),Me("#455A64"),0,.88,0),Dh(i,1.65,.58,.48,.07),v(i,new N(.58,.38,.05),C("#C62828",{roughness:.55}),0,.58,.11),v(i,new Yt(.38,.1),C("#FAFAFA",{roughness:.6}),0,.58,.14)}function tv(i){ne(i,.88);for(const t of[-.5,0,.5]){v(i,new ot(.04,.05,.55,6),Me("#546E7A"),t,.28,0);const e=v(i,new N(.32,.28,.48),C("#1565C0",{roughness:.45,metalness:.35}),t,.58,0);v(e,new N(.34,.06,.5),Me("#0D47A1"),0,.17,0),v(e,new Yt(.22,.14),C("#ECEFF1",{roughness:.4}),0,.02,.25),v(i,new N(.08,.04,.02),C("#FDD835"),t,.52,.26)}}function ev(i){ne(i,.85);for(const[t,e]of[[-.35,.1],[.35,-.08]]){v(i,new ot(.05,.07,.06,8),Me("#78909C"),t,.03,e),v(i,new ot(.04,.05,.18,8),Me("#455A64"),t,.12,e);for(let n=0;n<3;n++){const s=n/3*Math.PI*2+t,r=v(i,new ot(.008,.015,.35,4),C("#81D4FA",{transparent:!0,opacity:.55,roughness:.2}),t+Math.cos(s)*.12,.32,e+Math.sin(s)*.12);r.rotation.z=.85,r.rotation.y=s,r.userData.isBob=!0,r.userData.bobPhase=n}}v(i,new N(.7,.02,.35),C("#33691E",{roughness:.95}),0,.01,0)}function nv(i){ne(i,.92);const t=["#8D6E63","#5D4037","#795548","#6D4C41"];for(let e=0;e<5;e++){const n=-.45+e%3*.42,s=-.15+Math.floor(e/3)*.28,r=v(i,new N(.28+e%2*.06,.22+e%3*.04,.24),C(t[e],{roughness:.85}),n,.12+e%2*.08,s);r.rotation.y=e*.45,v(r,new N(.14,.04,.02),C("#FDD835",{roughness:.6}),0,.08,.13),v(r,new N(.04,.14,.02),C("#37474F"),-.06,0,.13)}v(i,new Yt(.55,.35),C("#ECEFF1",{transparent:!0,opacity:.35}),.1,.02,.2,!1)}function iv(i){ne(i,.95);for(const t of[-.42,.42])v(i,new N(.07,.7,.07),Me("#37474F"),t,.35,0);v(i,new N(1,.1,.58),Me("#263238",.5),0,.66,0),v(i,new N(.9,.48,.48),C(Xn,{roughness:.9}),0,.4,0),Bo(i,.82,.12,.52,.26);for(let t=0;t<5;t++)v(i,new N(.14,.4,.02),C(t%2===0?On:Xn,{roughness:.65}),-.32+t*.16,.42,.25);v(i,new N(.52,.14,.02),C("#C62828",{roughness:.55}),0,.76,.22)}function sv(i){ne(i,1);for(const e of[-.38,.38])v(i,new ot(.06,.06,.02,8),Me("#263238"),e,.06,-.22),v(i,new ot(.06,.06,.02,8),C("#212121",{roughness:.8}),e,.06,.22),v(i,new ot(.04,.04,.52,8),Me("#37474F"),e,.32,-.22);v(i,new N(.9,.58,.58),C("#E64A19",{roughness:.55}),0,.58,0),v(i,new N(.95,.08,.62),C("#BF360C",{roughness:.7}),0,.88,0),v(i,new N(.68,.38,.02),C("#FFF8E1",{roughness:.5}),0,.68,.31);for(let e=0;e<3;e++)v(i,new ot(.05,.05,.03,8),C("#FDD835",{roughness:.45}),-.22+e*.22,.92,.16);const t=v(i,new wt(.1,6,6),C("#ECEFF1",{transparent:!0,opacity:.2}),0,.98,.08,!1);t.userData.isBob=!0}function rv(i){ne(i,.92),v(i,new ot(.58,.74,.16,Ie),Me("#455A64",.65),0,.08,0),v(i,new Ye(.42,.04,8,Ie),Me("#607D8B"),0,.16,0),v(i,new wt(.36,12,8,0,Math.PI*2,0,Math.PI/2),C("#4DD0E1",{transparent:!0,opacity:.5,roughness:.3}),0,.14,0);const t=v(i,new Ls(.16,0),C("#76FF03",{emissive:"#558B2F",emissiveIntensity:.35,roughness:.4}),0,.58,0);t.userData.isBob=!0;for(let e=0;e<4;e++){const n=e/4*Math.PI*2;v(i,new N(.03,.42,.03),C("#AEEA00",{transparent:!0,opacity:.45}),Math.cos(n)*.28,.32,Math.sin(n)*.28)}}function av(i){ne(i,.88),v(i,new ot(.05,.07,.95,8),Me("#78909C"),.32,.1,.22);const t=v(i,new N(1.15,.68,.07),C("#F9A825",{roughness:.55}),-.12,.2,-.06);t.rotation.z=1.12,v(t,new N(.16,.48,.02),C(Xn),0,0,.05),Bo(t,.14,.1,.02,.04),v(t,new N(.12,.12,.02),C(Xn),.16,-.12,.05);for(let e=0;e<4;e++)v(i,new N(.07,.04,.28),Me("#607D8B"),-.32+e*.14,.04,.08+e*.07)}function ov(i){ne(i,1.12);for(const t of[-.92,.92]){const e=v(i,new N(.11,.92,.11),C(Xn,{roughness:.85}),t,.46,0);Bo(e,.13,.55,0,.07,Math.PI/2),v(i,new N(.15,.15,.15),C(On,{roughness:.45}),t,.96,0)}v(i,new N(1.9,.14,.12),C("#1565C0",{roughness:.5,metalness:.25}),0,.82,0),Dh(i,1.45,.52,.44,.09),v(i,new N(.38,.38,.05),C("#C62828",{roughness:.55}),0,.58,.13)}function lv(i){ne(i,1);for(const t of[-.55,.55])v(i,new N(.08,.62,.08),Me("#37474F"),t,.31,0),v(i,new ot(.04,.04,.02,6),C("#212121"),t,.02,.12);for(let t=0;t<3;t++){const e=v(i,new N(1.15,.14,.08),C(t%2===0?On:Xn,{roughness:.6}),0,.22+t*.18,0);e.rotation.z=(t-1)*.04}v(i,new N(.35,.22,.03),C("#FAFAFA",{roughness:.7}),0,.48,.06)}function cv(i){ne(i,.9),v(i,new ot(.14,.16,.38,10),C("#C62828",{roughness:.45,metalness:.3}),0,.19,0),v(i,new ot(.1,.1,.08,10),C("#B71C1C",{roughness:.45}),0,.4,0);for(const t of[-.12,.12])v(i,new ot(.05,.05,.14,8),C("#C62828",{roughness:.45}),t,.28,.1);for(let t=0;t<5;t++){const e=t/5*Math.PI*2,n=v(i,new wt(.04+t%2*.02,6,6),C("#29B6F6",{transparent:!0,opacity:.65,roughness:.2}),Math.cos(e)*.22,.55+t*.06,Math.sin(e)*.22);n.userData.isBob=!0,n.userData.bobPhase=t}v(i,new Ue(.55,Ie),C("#0288D1",{transparent:!0,opacity:.25}),0,.01,0,!1)}function hv(i){ne(i,1.05);for(const t of[-.75,.75])v(i,new N(.08,.88,.08),Me("#455A64"),t,.44,-.15);v(i,new N(1.6,.1,.55),C("#37474F",{roughness:.55,metalness:.35}),0,.82,-.05),v(i,new N(1.55,.55,.04),C("#81D4FA",{transparent:!0,opacity:.35,roughness:.2}),0,.55,.18),v(i,new N(.55,.38,.06),C("#546E7A",{roughness:.7}),0,.22,.05),v(i,new N(.12,.12,.02),C("#FDD835"),0,.65,.22)}function uv(i){ne(i,1.05),v(i,new N(1.65,.05,.55),C("#A1887F",{roughness:.95}),0,.025,0);for(const t of[-.58,0,.58]){const e=v(i,new ot(.13,.17,.78+Math.abs(t)*.08,10),C("#558B2F",{roughness:.92}),t,.4,0);v(e,new ot(.09,.11,.32,8),C("#33691E",{roughness:.95}),t+(t>=0?.16:-.16),.58,0);for(let n=0;n<5;n++)v(i,new en(.025,.05,4),C("#33691E"),t+.1,.18+n*.13,.09)}}function dv(i){ne(i,.95);for(let t=0;t<4;t++){const e=v(i,new Fr(.24+t%3*.07,0),C("#8D6E63",{roughness:.98}),-.42+t*.28,.2+t%2*.1,(t-1.5)*.1);e.rotation.set(.25,t*.55,.12),e.userData.isBob=!0,e.userData.bobPhase=t}v(i,new Yt(1.1,.35),C("#FFF9C4",{transparent:!0,opacity:.12,side:fe}),0,.15,0,!1)}function fv(i){ne(i,1.08),v(i,new N(1.45,.38,.72),C("#78909C",{roughness:.95}),0,.19,0);for(let t=0;t<6;t++){const e=v(i,new Fr(.2+t%3*.07,0),C(t%2===0?"#78909C":"#607D8B",{roughness:.98}),-.55+t*.22,.36+t%2*.14,(t-2.5)*.09);e.rotation.y=t*.65}for(let t=0;t<2;t++){const e=v(i,new wt(.12,6,6),C("#BCAAA4",{transparent:!0,opacity:.18}),.15+t*.2,.52,.08);e.userData.isBob=!0,e.userData.bobPhase=t}}function pv(i){ne(i,.9),v(i,new wt(.78,Ie,Ie,0,Math.PI*2,0,Math.PI/2.2),C("#FFE082",{roughness:.98}),0,.08,0),v(i,new wt(.48,Ie,Ie,0,Math.PI*2,0,Math.PI/2.5),C("#FFCC80",{roughness:.98}),.42,.06,.16),v(i,new wt(.38,Ie,Ie,0,Math.PI*2,0,Math.PI/2.5),C("#FFCC80",{roughness:.98}),-.38,.05,-.12);for(let t=0;t<3;t++){const e=v(i,new wt(.07,6,6),C("#FFF8E1",{transparent:!0,opacity:.28}),(t-1)*.22,.32+t*.07,.18);e.userData.isBob=!0,e.userData.bobPhase=t}}function mv(i){ne(i,1.05),v(i,new N(1.25,.42,.68),C("#8D6E63",{roughness:.96}),0,.21,0);const t=v(i,new wt(.34,12,12),C("#BCAAA4",{roughness:.92}),0,.54,.16);v(t,new N(.09,.11,.02),C("#212121"),-.11,.05,.3),v(t,new N(.09,.11,.02),C("#212121"),.11,.05,.3),v(t,new N(.15,.07,.02),C("#212121"),0,-.09,.3),v(i,new ot(.035,.035,.52,6),C("#795548",{roughness:.9}),.48,.56,-.1),v(i,new ot(.035,.035,.48,6),C("#795548",{roughness:.9}),-.42,.53,-.16)}function gv(i){ne(i,.88);const t=v(i,new Io(.42,1),C("#8D6E63",{roughness:.98}),0,.38,0);for(let e=0;e<12;e++){const n=e/12*Math.PI*2;v(t,new ot(.008,.008,.35,4),C("#6D4C41",{roughness:.95}),Math.cos(n)*.28,e%3*.08-.08,Math.sin(n)*.28)}t.userData.isSpin=!0,v(i,new Ue(.35,Ie),C("#A1887F",{transparent:!0,opacity:.2}),0,.01,0,!1)}function vv(i){ne(i,1);for(const t of[-.62,.62]){const e=v(i,new ot(.08,.1,.85,8),C("#EFEBE9",{roughness:.85}),t,.42,0);v(e,new wt(.1,8,8),C("#ECEFF1",{roughness:.8}),0,.48,0),v(e,new wt(.08,8,8),C("#ECEFF1",{roughness:.8}),0,-.48,0)}v(i,new Ye(.55,.07,8,Ie,0,Math.PI),C("#EFEBE9",{roughness:.85}),0,.78,0),v(i,new N(.35,.08,.08),C("#EFEBE9",{roughness:.85}),0,.72,.12)}function _v(i){ne(i,.98),v(i,new N(.85,.32,.55),C("#BCAAA4",{roughness:.92}),.15,.16,0),v(i,new N(.45,.22,.38),C("#A1887F",{roughness:.95}),-.35,.11,.08),v(i,new ot(.04,.04,.55,6),C("#8D6E63",{roughness:.95}),.45,.35,-.12),v(i,new Yt(.65,.4),C("#FFFDE7",{transparent:!0,opacity:.15,side:fe}),0,.45,.2,!1);for(let t=0;t<3;t++)v(i,new N(.06,.04,.2),C("#78909C",{roughness:.8}),-.2+t*.15,.04,.15)}function yv(i){ne(i,1);const t=v(i,new ot(.3,.34,1.65,Ie),_n("#4E342E"),0,.3,0);t.rotation.z=Math.PI/2,v(t,new Ue(.3,Ie),_n("#6D4C41"),.82,0,0);for(let e=0;e<4;e++)v(i,new N(.05,.22,.02),C("#2E7D32",{roughness:.9}),-.35+e*.22,.14,.26);v(i,new wt(.1,6,6),C("#FF7043",{roughness:.7}),.55,.34,.22)}function xv(i){ne(i,1.02),v(i,new N(.58,.78,.48),C("#78909C",{roughness:.88}),-.38,.39,0),v(i,new N(.48,.38,.42),C("#607D8B",{roughness:.9}),.32,.19,.1);const t=v(i,new ot(.17,.21,.58,10),C("#B0BEC5",{roughness:.85}),.38,.58,-.16);t.rotation.z=.32,v(i,new N(.52,.08,.52),C("#455A64",{roughness:.85}),0,.04,0);for(let e=0;e<4;e++)v(i,new N(.1,.1,.02),C("#F9A825",{roughness:.5}),-.12+e*.1,.56,.26)}function Mv(i){ne(i,.95),v(i,new wt(.58,10,10),C("#2E7D32",{roughness:.95}),0,.36,0);for(let t=0;t<10;t++){const e=t/10*Math.PI*2,n=v(i,new en(.035,.38,4),C("#33691E",{roughness:.92}),Math.cos(e)*.48,.26+t%3*.1,Math.sin(e)*.48);n.rotation.x=-.55,n.rotation.y=e}v(i,new N(.26,.26,.04),C("#C62828",{roughness:.55}),0,.56,.36)}function bv(i){ne(i,.98),v(i,new N(1.15,.1,.62),C("#0288D1",{transparent:!0,opacity:.45,roughness:.3}),0,.05,0),v(i,new N(.58,.38,.42),Me("#546E7A",.45),.22,.24,0),v(i,new N(.38,.22,.32),C("#78909C",{roughness:.7,metalness:.3}),-.38,.16,.06);const t=v(i,new N(.32,.32,.32),C("#689F38",{roughness:.85}),-.16,.3,.16);t.userData.isBob=!0}function Sv(i){ne(i,1.15);for(const t of[-.68,.68]){const e=v(i,new ot(.17,.21,1.08,10),_n("#4E342E"),t,.54,0);v(e,new N(.3,.13,.3),C("#E64A19",{roughness:.65}),0,.36,.13),v(e,new N(.24,.11,.24),C("#F9A825",{roughness:.55}),0,.66,.13),v(e,new N(.09,.09,.02),C("#212121"),-.04,.8,.15),v(e,new N(.09,.09,.02),C("#212121"),.04,.8,.15)}v(i,new N(1.55,.13,.12),C("#33691E",{roughness:.85}),0,.98,0),v(i,new N(.07,.58,.07),C("#33691E",{roughness:.85}),0,.74,.16)}function wv(i){ne(i,.95);for(const t of[-.45,.45])v(i,new ot(.05,.07,.72,8),_n("#5D4037"),t,.36,0);v(i,new N(1.05,.08,.08),_n("#6D4C41"),0,.62,0);for(let t=0;t<6;t++){const e=t/6*Math.PI,n=v(i,new Ye(.18+t%2*.06,.025,6,10,0,Math.PI),C("#2E7D32",{roughness:.9}),Math.cos(e)*.15,.28+t*.06,Math.sin(e)*.1);n.rotation.y=e,n.userData.isBob=!0,n.userData.bobPhase=t}}function Ev(i){ne(i,.95),v(i,new ot(.72,.82,.06,Ie),C("#D7CCC8",{roughness:.98}),0,.03,0),v(i,new ot(.55,.65,.04,Ie),C("#BCAAA4",{roughness:.98}),0,.05,0);for(let t=0;t<4;t++){const e=t/4*Math.PI*2,n=v(i,new wt(.05,6,6),C("#A1887F",{transparent:!0,opacity:.5}),Math.cos(e)*.28,.08,Math.sin(e)*.28);n.userData.isBob=!0,n.userData.bobPhase=t}v(i,new N(.22,.04,.14),C("#795548",{roughness:.9}),.15,.06,.1)}function Tv(i){ne(i,1.02),v(i,new N(.95,.12,.65),C("#455A64",{roughness:.85}),0,.06,0),v(i,new N(.75,.08,.55),C("#37474F",{roughness:.85}),0,.14,0);const t=v(i,new ot(.22,.28,.62,10),C("#F9A825",{roughness:.45,metalness:.35}),0,.52,0);v(t,new N(.38,.12,.18),C("#F9A825",{roughness:.45,metalness:.35}),0,.38,0),v(t,new wt(.14,10,10),C("#F9A825",{roughness:.45,metalness:.35}),0,.72,0);for(const e of[-.42,.42])v(i,new ot(.06,.08,.45,8),C("#33691E",{roughness:.9}),e,.22,.22),v(i,new Ye(.12,.025,6,8),C("#F9A825",{roughness:.5}),e,.48,.22)}function oc(i){return Bg(i)}const lc=[-3.2,-1.6,0,1.6,3.2],cc=["#FF6B9D","#FFD93D","#6BCBFF","#FF8C42","#B388FF"];class Av{constructor(t){P(this,"scene");P(this,"rootMeshes",[]);P(this,"animProps",[]);P(this,"roadTexture");P(this,"roadEmissiveTex",null);P(this,"roadGlowTex",null);P(this,"roadMesh",null);P(this,"roadGlowMesh",null);P(this,"roadStreakTex",null);P(this,"roadStreakMesh",null);P(this,"roadRainTex",null);P(this,"roadRainMesh",null);P(this,"boostPads",[]);P(this,"boostLaneTex",null);P(this,"roadAccent",{primary:"#FFE082",secondary:"#FFF8E1",edge:"#FFFFFF"});P(this,"roadFx",{turbo:!1,speed:16,baseSpeed:16,playerX:0});P(this,"wetFactor",0);P(this,"districtId",1);P(this,"lightPoolTexture",null);P(this,"skyTexture",null);P(this,"skyCanvas",null);P(this,"skyTheme");P(this,"hemiLight");P(this,"ambientLight");P(this,"sunLight");P(this,"fillLight");P(this,"rimLight");P(this,"accentLight",null);P(this,"roadNightLight",null);P(this,"roadFillLight",null);P(this,"gameplayRimLight",null);P(this,"skyPhase",-1);P(this,"skyTick",0);P(this,"skyNight",0);P(this,"skyNightFx",0);P(this,"blackoutBoost",0);P(this,"playerZ",0);P(this,"cullTimer",0);P(this,"skyEffects",null);this.scene=t}build(t,e){this.clear(),this.skyTheme=t,this.districtId=t.id,this.setupLighting(t,e),this.buildSky(t);const n=(F?.007:.009)*(200/t.fogFar);this.scene.fog=new Sr(t.fog,n);const s=this.makeGrassTexture(t);s.wrapS=s.wrapT=ln,s.repeat.set(6,(e+140)/10);const r=new Mt(t.ground).multiplyScalar(F?.62:.68),a=v(this.scene,new Yt(50,e+140),new ye({map:s,color:r,roughness:1}),0,0,e/2,!1);a.rotation.x=-Math.PI/2,a.position.y=-.02,a.receiveShadow=!F,a.userData.isTerrain=!0,this.rootMeshes.push(a);const o=this.makeSidewalkTexture();o.wrapS=o.wrapT=ln,o.repeat.set(2,(e+140)/6);for(const T of[-5.2,5.2]){const A=v(this.scene,new Yt(3.5,e+140),new ye({map:o,color:"#8a959e",roughness:.96}),T,0,e/2,!1);A.rotation.x=-Math.PI/2,A.position.y=.015,A.receiveShadow=!F,A.userData.isTerrain=!0,this.rootMeshes.push(A)}this.roadAccent=this.roadAccentForTheme(t);const l=this.makeRoadTextures(t);this.roadTexture=l.color,this.roadEmissiveTex=l.emissive,this.roadGlowTex=l.glow;const c=(e+140)/8;for(const T of[this.roadTexture,this.roadEmissiveTex,this.roadGlowTex])T.wrapS=T.wrapT=ln,T.repeat.set(1,c);const h=v(this.scene,new Yt(9.5,e+140),new ye({map:this.roadTexture,emissiveMap:this.roadEmissiveTex,emissive:this.roadAccent.primary,emissiveIntensity:F?.18:.14,color:F?"#e8edf2":"#dfe6ec",roughness:.68,metalness:.14,envMapIntensity:.45}),0,0,e/2,!1);h.rotation.x=-Math.PI/2,h.position.y=.025,h.receiveShadow=!F,h.userData.isTerrain=!0,this.roadMesh=h,this.rootMeshes.push(h);const u=v(this.scene,new Yt(9.5,e+140),new Lt({map:this.roadGlowTex,color:this.roadAccent.primary,transparent:!0,opacity:F?.26:.32,blending:oe,depthWrite:!1}),0,.032,e/2,!1);u.rotation.x=-Math.PI/2,u.userData.isTerrain=!0,this.roadGlowMesh=u,this.rootMeshes.push(u);const d=this.getRoadStreakTexture(),p=v(this.scene,new Yt(9.5,e+140),new Lt({map:d,color:this.roadAccent.secondary,transparent:!0,opacity:0,blending:oe,depthWrite:!1}),0,.033,e/2,!1);p.rotation.x=-Math.PI/2,p.userData.isTerrain=!0,this.roadStreakTex=d,this.roadStreakMesh=p,this.rootMeshes.push(p);const g=this.getRoadRainTexture(),_=v(this.scene,new Yt(9.8,e+140),new Lt({map:g,color:"#B3E5FC",transparent:!0,opacity:0,blending:oe,depthWrite:!1}),0,.034,e/2,!1);_.rotation.x=-Math.PI/2,_.userData.isTerrain=!0,this.roadRainTex=g,this.roadRainMesh=_,this.rootMeshes.push(_),this.placeBoostPads(t,e);const m=this.makeCurbTexture();m.wrapS=m.wrapT=ln,m.repeat.set(1,(e+140)/4);for(const T of[-3.4,3.4]){const A=v(this.scene,new N(.35,.18,e+140),new ye({map:m,color:"#ECEFF1",roughness:.82,metalness:.12,emissive:"#FFFFFF",emissiveIntensity:.04}),T,.09,e/2,!1);v(A,new N(.06,.04,e+140),C("#B0BEC5",{roughness:.85}),T>0?-.14:.14,.1,0,!1),v(A,new N(.05,.19,e+140),C("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.22}),T>0?-.17:.17,0,0,!1),A.userData.isTerrain=!0,this.rootMeshes.push(A)}if(this.placeStreetLights(t,e),!F)for(let T=30;T<e;T+=28)for(const A of[-5.2,5.2]){const L=v(this.scene,new Yt(3.2,1.2),C("#90A4AE",{roughness:.9}),A,.018,T,!1);L.rotation.x=-Math.PI/2,L.userData.isTerrain=!0,this.rootMeshes.push(L)}const f=Cv(t.id*1337+e);this.skyEffects&&this.skyEffects.dispose(),this.skyEffects=new zg(this.scene),this.skyEffects.build(e,f);const x=F?3:5;for(let T=0;T<x;T++){const A=this.makeCloud(f),L=f()*(e+60);A.position.set((f()-.5)*40,18+f()*14,L),this.scene.add(A),this.rootMeshes.push(A),this.animProps.push({obj:A,worldZ:L,kind:"cloud",speed:.15+f()*.2,baseY:A.position.y,phase:f()*10})}const S=F?22:26,b=F?5:9,D=[];for(let T=0;T<e+50;T+=S+Math.floor(f()*b))for(const A of[-1,1]){if(f()>(F?.22:.2)){const y=this.makeBuilding(t,f,A),U=T+f()*5;y.position.set(A*(8+f()*5),0,U),mn(y),this.scene.add(y),this.rootMeshes.push(y),D.push({side:A,z:U})}else if(t.id<=2&&f()>.32){const y=this.makeTree(f);y.position.set(A*(13+f()*3.5),0,T+f()*4),mn(y),this.scene.add(y),this.rootMeshes.push(y)}else if(t.id===3&&f()>.38){const y=this.makeCactus(f);y.position.set(A*(12+f()*4),0,T+f()*4),mn(y),this.scene.add(y),this.rootMeshes.push(y)}else if(t.id===4&&f()>.28){const y=this.makePalmTree(f);y.position.set(A*(12+f()*4),0,T+f()*4),mn(y),this.scene.add(y),this.rootMeshes.push(y)}if(f()>(F?.82:.68)){const y=this.makeMailbox(),U=T+f()*3;y.position.set(A*(6.4+f()*.8),0,U),mn(y),this.scene.add(y),this.rootMeshes.push(y)}if(!F&&f()>.88){const y=this.makeAlienCrash();y.position.set(A*(7+f()*2),0,T),mn(y),this.scene.add(y),this.rootMeshes.push(y),this.animProps.push({obj:y.children[1],worldZ:T,kind:"bob",speed:2,baseY:.12,phase:f()*5})}}if(t.id<=2){const T=F?14:11;for(let A=24;A<e+40;A+=T+Math.floor(f()*5))for(const L of[-1,1]){if(D.some(U=>U.side===L&&Math.abs(U.z-A)<8)||f()>.58)continue;const y=this.makeTree(f);y.position.set(L*(12.5+f()*4),0,A+f()*3),mn(y),this.scene.add(y),this.rootMeshes.push(y)}}else if(t.id===3)for(let T=20;T<e+40;T+=16+Math.floor(f()*8)){for(const A of[-1,1]){if(f()>.45)continue;const L=this.makeCactus(f);L.position.set(A*(11+f()*5),0,T+f()*3),mn(L),this.scene.add(L),this.rootMeshes.push(L)}if(f()>.7){const A=this.makeDesertRock(f);A.position.set((f()>.5?1:-1)*(10+f()*6),0,T),mn(A),this.scene.add(A),this.rootMeshes.push(A)}}else if(t.id===4){const T=F?12:9;for(let A=20;A<e+40;A+=T+Math.floor(f()*4))for(const L of[-1,1]){if(D.some(U=>U.side===L&&Math.abs(U.z-A)<7)||f()>.35)continue;const y=this.makePalmTree(f);y.position.set(L*(11.5+f()*4.5),0,A+f()*3),mn(y),this.scene.add(y),this.rootMeshes.push(y)}}this.addMilestoneArch(8,"#66BB6A","START"),this.addMilestoneArch(e-5,"#FFD54F","ZONE")}buildSky(t){var n;this.skyCanvas=document.createElement("canvas"),this.skyCanvas.width=tc,this.skyCanvas.height=tc,this.skyTexture=new Fe(this.skyCanvas),this.skyTexture.colorSpace=ae,this.scene.background=this.skyTexture;const e=oc(0);this.skyNight=e,this.skyNightFx=vr(e),this.paintSky(e,t),this.applySkyLighting(e),(n=this.skyEffects)==null||n.setNight(e)}drawSkyCloud(t,e,n,s,r){t.save(),t.globalAlpha=r,t.fillStyle="#ffffff";const a=28*s;t.beginPath(),t.arc(e,n,a,0,Math.PI*2),t.arc(e+a*.9,n-a*.15,a*.82,0,Math.PI*2),t.arc(e+a*1.75,n+a*.05,a*.7,0,Math.PI*2),t.arc(e-a*.75,n+a*.08,a*.65,0,Math.PI*2),t.fill(),t.restore()}drawAurora(t,e,n,s){if(!(s<=0)){t.save(),t.globalAlpha=s;for(let r=0;r<3;r++){t.beginPath();for(let o=0;o<=e;o+=8){const l=n*(.18+r*.08)+Math.sin(o*.02+r*2)*22+Math.cos(o*.008)*14;o===0?t.moveTo(o,l):t.lineTo(o,l)}t.lineTo(e,n*.55),t.lineTo(0,n*.55),t.closePath();const a=t.createLinearGradient(0,0,e,n*.5);a.addColorStop(0,r===0?"rgba(0,230,118,0)":r===1?"rgba(0,229,255,0)":"rgba(224,64,251,0)"),a.addColorStop(.5,r===0?"rgba(0,230,118,0.35)":r===1?"rgba(0,229,255,0.28)":"rgba(224,64,251,0.22)"),a.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=a,t.fill()}t.restore()}}paintSky(t,e){var _;if(!this.skyCanvas)return;const n=this.skyCanvas.getContext("2d"),s=this.skyCanvas.width,r=this.skyCanvas.height,a=tn(e.sky,"#64B5F6",.4),o=tn(e.skyBottom,"#BBDEFB",.45),l=tn("#FFECB3",e.fog,.25),c=tn("#E3F2FD",e.ground,.2),h=tn(a,"#0a0520",t),u=tn(o,"#1a1040",t),d=tn(l,"#120820",t),p=tn(c,"#050510",t),g=n.createLinearGradient(0,0,0,r);if(g.addColorStop(0,h),g.addColorStop(.28,u),g.addColorStop(.55,d),g.addColorStop(.78,p),g.addColorStop(1,tn(e.fog,"#0a0a12",t)),n.fillStyle=g,n.fillRect(0,0,s,r),t>.22&&t<.72){const m=Math.sin((t-.22)/.5*Math.PI)*.85,f=n.createLinearGradient(0,r*.45,0,r);f.addColorStop(0,"rgba(255,120,60,0)"),f.addColorStop(.45,`rgba(255,140,80,${.35*m})`),f.addColorStop(.75,`rgba(255,87,34,${.25*m})`),f.addColorStop(1,"rgba(80,20,60,0)"),n.fillStyle=f,n.fillRect(0,0,s,r)}if(t>.55){this.drawAurora(n,s,r,Math.min(1,(t-.55)*1.8));const m=n.createLinearGradient(s*.2,0,s*.8,r);m.addColorStop(0,"rgba(255,255,255,0)"),m.addColorStop(.45,`rgba(200,210,255,${.08*t})`),m.addColorStop(.55,`rgba(255,255,255,${.12*t})`),m.addColorStop(.65,`rgba(200,210,255,${.08*t})`),m.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=m,n.fillRect(0,0,s,r)}if(t<.75){const m=Math.max(0,1-Math.max(0,t-.15)*1.25),f=s*(.62+t*.12),x=r*(.28+t*.12),S=n.createRadialGradient(f,x,0,f,x,140);S.addColorStop(0,`rgba(255,255,240,${.98*m})`),S.addColorStop(.2,`rgba(255,240,160,${.7*m})`),S.addColorStop(.45,`rgba(255,200,100,${.35*m})`),S.addColorStop(1,"rgba(255,200,80,0)"),n.fillStyle=S,n.fillRect(0,0,s,r)}if(t>.48){const m=Math.min(1,(t-.48)*1.6),f=s*.78,x=r*.22;n.fillStyle=`rgba(240,240,255,${.9*m})`,n.beginPath(),n.arc(f,x,26,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(10,5,32,${.85*m})`,n.beginPath(),n.arc(f+10,x-6,22,0,Math.PI*2),n.fill()}if(t<.45){const m=.6*(1-t*1.35),f=[[.12,.28,1.1],[.42,.22,.95],[.68,.31,1.25],[.86,.24,.85],[.28,.38,.75],[.55,.42,.9]];for(const[x,S,b]of f)this.drawSkyCloud(n,x*s,S*r,b,m)}if(t>.42){const m=Math.min(1,(t-.42)*1.45),f=F?50:65;for(let x=0;x<f;x++){const S=x*97%1e3/1e3,b=x*53%720/1e3,D=.45+x*17%10/18;n.fillStyle=`rgba(255,255,255,${m*D})`;const T=x%7===0?2.2:x%4===0?1.5:.9;n.beginPath(),n.arc(S*s,b*r*.62,T,0,Math.PI*2),n.fill(),x%11===0&&m>.5&&(n.strokeStyle=`rgba(180,220,255,${m*.35})`,n.lineWidth=1,n.beginPath(),n.moveTo(S*s-4,b*r*.62),n.lineTo(S*s+4,b*r*.62),n.moveTo(S*s,b*r*.62-4),n.lineTo(S*s,b*r*.62+4),n.stroke())}}(_=this.skyEffects)==null||_.setNight(t),this.skyTexture&&(this.skyTexture.needsUpdate=!0)}applySkyLighting(t){const e=this.skyTheme,n=vr(t);let s=ic(t);F&&(s*=.72);const r=F?1.32:1.12,a=tn(e.fog,e.id>=6?"#120828":"#050510",s);this.scene.fog instanceof Sr&&this.scene.fog.color.set(a);const o=new Mt(e.sky),l=new Mt(e.id>=6?"#1a0a40":"#223355"),c=o.clone().lerp(l,s),h=new Mt(e.ground),u=new Mt("#0a0a14"),d=h.clone().lerp(u,s*.85);if(this.hemiLight&&(this.hemiLight.color.copy(c),this.hemiLight.groundColor.copy(d),this.hemiLight.intensity=e.ambient*.92*(1-s*.38)*r),this.ambientLight){const p=new Mt("#ffffff").lerp(new Mt("#8899cc"),s*.55);this.ambientLight.color.copy(p);const g=nc(t);this.ambientLight.intensity=(e.ambient*.42*(1-s*.35)+g*.24)*r+(F?.18:.12)}if(this.sunLight){const p=new Mt(e.id>=3?"#FFF4E0":"#FFFBF5"),g=new Mt("#6688bb");this.sunLight.color.copy(p.lerp(g,s)),this.sunLight.intensity=e.sun*1.05*(1-s*.48)*r}if(this.fillLight){const p=new Mt(e.skyBottom||e.sky),g=new Mt(e.id>=4?"#004D40":"#1a237e");this.fillLight.color.copy(p.lerp(g,s*.75)),this.fillLight.intensity=e.ambient*.32*(.55+s*.45)*r}if(this.rimLight&&(this.rimLight.intensity=.22+(1-s)*.32,this.rimLight.color.set(tn("#FFF8E8","#80DEEA",n*.85))),this.gameplayRimLight&&(this.gameplayRimLight.intensity=.28+(1-s)*.38),this.accentLight&&(this.accentLight.intensity=(e.id>=6?.55:.25)*(.25+n*.95)),this.roadNightLight&&(this.roadNightLight.intensity=n*(F?.45:.58),this.roadNightLight.color.set(tn("#FFE082","#FFF3E0",1-n*.25))),this.roadFillLight){const p=F?.62:.52;this.roadFillLight.intensity=p*(1-s*.18)+n*.12,this.roadFillLight.color.set(tn("#FFFBF5","#E8F4FF",s*.35))}if(this.roadMesh){const p=this.roadMesh.material,g=(F?.12:.08)+(1-s)*(F?.14:.1);p.emissiveIntensity=g+n*(F?.32:.55),p.emissive.set(this.roadAccent.primary).lerp(new Mt(this.roadAccent.secondary),n*.35),p.roughness=.82-s*.1-n*.08,p.metalness=.06+n*.14;const _=F?"#e8edf2":"#dfe6ec",m=F?"#c8d2dc":"#b0bcc8";p.color.set(_).lerp(new Mt(m),s*(F?.15:.22))}if(this.roadGlowMesh){const p=this.roadGlowMesh.material,g=F?.16:.24;p.opacity=n>.04?g+n*(F?.42:.58):0,p.color.set(this.roadAccent.primary).lerp(new Mt(this.roadAccent.secondary),n*.25),this.roadGlowMesh.visible=n>.04}}roadAccentForTheme(t){return t.id>=6?{primary:"#EA80FC",secondary:"#80DEEA",edge:"#E1BEE7"}:t.id>=5?{primary:"#FF7043",secondary:"#FFD54F",edge:"#FFCC80"}:t.id>=4?{primary:"#69F0AE",secondary:"#80DEEA",edge:"#B2FF59"}:t.id>=3?{primary:"#FFB74D",secondary:"#FFE082",edge:"#FFF8E1"}:t.id>=2?{primary:"#FFD54F",secondary:"#FFAB40",edge:"#FFFFFF"}:{primary:"#FFE082",secondary:"#FFF59D",edge:"#FFFFFF"}}rainWetForDistrict(t,e){return t.id===5?Math.min(1,.6+e*.4):t.id===4?Math.min(1,.38+e*.55):t.id===3?Math.min(1,.06+e*.12):t.id>=6?Math.min(1,.22+e*.5):Math.min(1,e*.58)}drawDistrictRoadSurface(t,e,n,s,r,a){const o=s.id,l=r/2,c=(u,d,p)=>{const g=t.createLinearGradient(0,0,r,0);g.addColorStop(0,u),g.addColorStop(.5,d),g.addColorStop(1,p),t.fillStyle=g,t.fillRect(0,0,r,r)};if(o===2){t.fillStyle="#5D4037",t.fillRect(0,0,r*.2,r),t.fillRect(r*.8,0,r*.2,r);for(let d=0;d<r;d+=10)for(let p=0;p<2;p++){const g=p===0?0:r*.8;for(let _=0;_<r*.2;_+=10)t.fillStyle=(_+d+p)%20===0?"#6D4C41":"#A1887F",t.fillRect(g+_,d,10,10)}const u=t.createLinearGradient(r*.2,0,r*.8,0);u.addColorStop(0,"#4a5560"),u.addColorStop(.5,"#6a7884"),u.addColorStop(1,"#4a5560"),t.fillStyle=u,t.fillRect(r*.2,0,r*.6,r)}else if(o===3){c("#C4A574","#4a4035","#C4A574"),t.fillStyle="rgba(212,165,116,0.55)",t.fillRect(0,0,r*.16,r),t.fillRect(r*.84,0,r*.16,r);for(let u=0;u<12;u++){const d=(u%2===0?0:r*.84)+u%3*8,p=u*37%(r-30);t.fillStyle="rgba(255,224,178,0.35)",t.beginPath(),t.ellipse(d+12,p,18,8,.2,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(62,47,35,0.35)";for(let u=0;u<8;u++){const d=r*.3+u*29%(r*.4),p=u*53%r;t.beginPath(),t.moveTo(d,p),t.lineTo(d+12,p+8),t.stroke()}}else if(o===4){c("#1a2820","#243830","#1a2820"),t.fillStyle="rgba(46,125,50,0.35)",t.fillRect(0,0,r*.14,r),t.fillRect(r*.86,0,r*.14,r);for(let d=0;d<40;d++)t.fillStyle=`rgba(${80+d%3*30},${120+d%4*20},70,0.2)`,t.fillRect(d*19%r,d*31%r,3,2);const u=t.createLinearGradient(l-r*.1,0,l+r*.1,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(80,160,140,0.14)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.fillRect(0,0,r,r)}else if(o===5){c("#2a3036","#3d454c","#2a3036");for(let u=0;u<6;u++){const d=r*.25+u*41%(r*.5),p=u*67%(r-40);t.fillStyle="#546E7A",t.fillRect(d,p,28,22),t.strokeStyle="rgba(255,255,255,0.12)";for(let g=0;g<4;g++)t.beginPath(),t.moveTo(d+g*7,p),t.lineTo(d+g*7+14,p+22),t.stroke()}t.fillStyle="rgba(20,20,25,0.2)";for(let u=0;u<10;u++)t.beginPath(),t.ellipse(u*43%r,u*61%r,10,6,0,0,Math.PI*2),t.fill()}else if(o>=6){c("#14101f","#1e1830","#14101f"),t.strokeStyle=a.primary,t.globalAlpha=.2,t.lineWidth=1;for(let u=0;u<r;u+=16)t.beginPath(),t.moveTo(u,0),t.lineTo(u,r),t.stroke();for(let u=0;u<r;u+=16)t.beginPath(),t.moveTo(0,u),t.lineTo(r,u),t.stroke();t.globalAlpha=1,n.fillStyle=a.primary,n.globalAlpha=.08;for(let u=0;u<r;u+=16)n.fillRect(u,0,1,r),n.fillRect(0,u,r,1);if(n.globalAlpha=1,o>=7){t.strokeStyle="rgba(229,57,53,0.25)";for(let u=0;u<6;u++){const d=r*.35+u*37%(r*.3),p=u*71%r;t.beginPath(),t.moveTo(d,p),t.lineTo(d+20,p+6),t.stroke()}}}else c("#3a4550","#5c6a78","#3a4550"),o===1&&(t.fillStyle="rgba(180,200,160,0.06)",t.fillRect(0,0,r*.12,r),t.fillRect(r*.88,0,r*.12,r));const h=n.createLinearGradient(l-r*.1,0,l+r*.1,0);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(.5,"rgba(120,180,220,0.1)"),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h,n.fillRect(l-r*.12,0,r*.24,r)}getRoadStreakTexture(){if(this.roadStreakTex)return this.roadStreakTex;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#000000",e.fillRect(0,0,128,128);for(const n of[0,1])for(let s=0;s<14;s++){const r=n===0?6+s%4*5:122-s%4*5,a=s*23%110,o=18+s%4*10,l=e.createLinearGradient(r,a,r,a+o);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.4,`rgba(255,255,255,${.06+s%3*.02})`),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(r-1,a,2,o)}return this.roadStreakTex=new Fe(t),this.roadStreakTex.colorSpace=ae,this.roadStreakTex.wrapS=this.roadStreakTex.wrapT=ln,this.roadStreakTex}getRoadRainTexture(){if(this.roadRainTex)return this.roadRainTex;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.strokeStyle="rgba(180,220,255,0.22)",e.lineWidth=1.2;for(let n=0;n<48;n++){const s=n*23%128,r=n*41%128;e.beginPath(),e.moveTo(s,r),e.lineTo(s-6,r+14),e.stroke()}e.fillStyle="rgba(150,200,255,0.06)";for(let n=0;n<20;n++)e.fillRect(n*31%120,n*47%120,2,8);return this.roadRainTex=new Fe(t),this.roadRainTex.colorSpace=ae,this.roadRainTex.wrapS=this.roadRainTex.wrapT=ln,this.roadRainTex}placeBoostPads(t,e){this.boostLaneTex||(this.boostLaneTex=Xg());const n=F?72:56,s=F?1.28:1.48,r=F?2.75:3.2;let a=0;for(let o=58;o<e-24;o+=n){const l=lc[a%lc.length],c=cc[a%cc.length];a+=F?2:1;const h=new Pt;h.position.set(l,0,o);const u=Math.random()*Math.PI*2,d=v(h,new Ue(s*.54,F?12:16),new Lt({color:c,transparent:!0,opacity:.42,depthWrite:!1}),0,.033,0,!1);d.rotation.x=-Math.PI/2;const p=v(h,new Yt(s*.94,r*.96),new Lt({map:this.boostLaneTex,color:c,transparent:!0,opacity:.88,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),0,.036,0,!1);p.rotation.x=-Math.PI/2,p.rotation.z=Math.PI,p.userData.isBoostDecal=!0,this.scene.add(h),this.rootMeshes.push(h),this.boostPads.push({group:h,x:l,z:o,flash:0,cooldown:0,underlay:d,decal:p,pulsePhase:u,accent:c})}}tryTriggerBoostPad(t,e){for(const n of this.boostPads)if(!(n.cooldown>0)&&!(Math.abs(e-n.z)>1.35)&&!(Math.abs(t-n.x)>.78))return n.flash=1,n.cooldown=1.1,!0;return!1}getSkyNight(){return Math.min(1,this.skyNight+this.blackoutBoost)}getNightFx(){return Math.min(1,this.skyNightFx+this.blackoutBoost*.85)}getGameplayNight(){return nc(Math.min(1,this.skyNight+this.blackoutBoost*.45))}setBlackout(t){this.blackoutBoost=Math.max(0,Math.min(.75,t))}updateSkyCycle(t,e){var s;const n=oc(t);this.skyNight=n,this.skyNightFx=vr(n),(s=this.skyEffects)==null||s.setNight(n),this.applySkyLighting(n),this.skyTick+=e,!(this.skyTick<kg)&&(this.skyTick=0,this.paintSky(n,this.skyTheme))}makeRoadTextures(t){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d"),r=document.createElement("canvas");r.width=256,r.height=256;const a=r.getContext("2d");a.fillStyle="#000000",a.fillRect(0,0,256,256);const o=document.createElement("canvas");o.width=256,o.height=256;const l=o.getContext("2d");l.fillStyle="#000000",l.fillRect(0,0,256,256);const c=this.roadAccentForTheme(t);this.drawDistrictRoadSurface(s,a,l,t,256,c);for(let m=0;m<256*2;m++){const f=m*47%256,x=m*83%256,S=(f*17+x*31)%100/100;s.fillStyle=S>.55?"rgba(255,255,255,0.015)":"rgba(0,0,0,0.025)",s.fillRect(f,x,1,1)}s.fillStyle="rgba(0,0,0,0.11)";for(let m=0;m<18;m++){const f=m*37%216,x=m*59%226;s.beginPath(),s.ellipse(f+20,x+15,14+m%5,8+m%4,m*.4,0,Math.PI*2),s.fill()}s.fillStyle="rgba(90,110,130,0.06)";for(let m=0;m<8;m++)s.fillRect(m*61%206,m*73%166,36,70+m%3*20);const h=[Math.floor(256*.04),Math.floor(256*.92)],u=[256*.2,256*.4,256*.6,256*.8],d=(m,f,x,S,b,D)=>{D&&m.setLineDash(D);for(const T of[S*2.2,S*1.4,S])m.strokeStyle=x,m.globalAlpha=b*(T===S?1:T===S*1.4?.45:.2),m.lineWidth=T,m.lineCap="round",m.beginPath(),m.moveTo(f,0),m.lineTo(f,256),m.stroke();m.globalAlpha=1,D&&m.setLineDash([])};s.strokeStyle="rgba(255,255,255,0.92)",s.lineWidth=Math.max(3,256/64),s.beginPath(),s.moveTo(h[0],0),s.lineTo(h[0],256),s.stroke(),d(a,h[0],c.edge,Math.max(3,256/64),.95),d(l,h[0],"#ffffff",Math.max(5,256/42),.35),s.beginPath(),s.moveTo(h[1],0),s.lineTo(h[1],256),s.stroke(),d(a,h[1],c.edge,Math.max(3,256/64),.95),d(l,h[1],"#ffffff",Math.max(5,256/42),.35),s.strokeStyle="rgba(255,255,255,0.38)",s.lineWidth=Math.max(2,256/88),s.setLineDash([256*.035,256*.038]);for(const m of u)s.beginPath(),s.moveTo(m,0),s.lineTo(m,256),s.stroke(),d(a,m,"rgba(255,255,255,0.55)",Math.max(2,256/88),.55,[256*.035,256*.038]),d(l,m,c.edge,Math.max(3,256/72),.22,[256*.035,256*.038]);s.setLineDash([]);for(let m=0;m<4;m++){const f=m*64+16;for(const x of h){const S=x<128?1:-1,b=x+S*Math.max(8,256/28);s.fillStyle="rgba(255,255,255,0.72)";for(let D=0;D<4;D++){const T=f+D*14.08,A=256*.022,L=256*.055,E=S>0?b:b-A;s.fillRect(E,T,A,L),a.fillStyle="rgba(255,255,255,0.5)",a.fillRect(E-1,T-1,A+2,L+2),l.fillStyle="rgba(255,255,255,0.22)",l.fillRect(E-2,T-2,A+4,L+4)}}}s.fillStyle="rgba(255,213,79,0.42)";for(let m=0;m<16;m++)s.fillRect(h[0]+4,m*256/16+4,256*.012,256*.04),s.fillRect(h[1]-8,m*256/16+10,256*.012,256*.04),a.fillStyle="rgba(255,193,7,0.65)",a.fillRect(h[0]+3,m*256/16+3,256*.014,256*.044),a.fillRect(h[1]-9,m*256/16+9,256*.014,256*.044);for(let m=0;m<5;m++){const f=30.72+m*256/6,x=m*97%216;s.fillStyle="#3a4550",s.beginPath(),s.arc(f,x+20,256*.022,0,Math.PI*2),s.fill()}const p=new Fe(n);p.colorSpace=ae;const g=new Fe(r);g.colorSpace=ae;const _=new Fe(o);return _.colorSpace=ae,{color:p,emissive:g,glow:_}}makeCurbTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle="#B0BEC5",e.fillRect(0,0,64,64),e.fillStyle="rgba(255,255,255,0.12)",e.fillRect(0,0,64,3),e.fillStyle="rgba(0,0,0,0.08)";for(let s=0;s<8;s++)e.fillRect(0,s*8+4,64,2);e.fillStyle="rgba(0,0,0,0.05)";for(let s=0;s<12;s++)e.fillRect(s*11%58,s*17%58,6,4);const n=new Fe(t);return n.colorSpace=ae,n}getLightPoolTexture(){if(this.lightPoolTexture)return this.lightPoolTexture;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,"rgba(255, 224, 178, 0.9)"),n.addColorStop(.25,"rgba(255, 204, 128, 0.45)"),n.addColorStop(.55,"rgba(255, 183, 77, 0.12)"),n.addColorStop(1,"rgba(255, 183, 77, 0)"),e.fillStyle=n,e.fillRect(0,0,128,128),this.lightPoolTexture=new Fe(t),this.lightPoolTexture.colorSpace=ae,this.lightPoolTexture}placeStreetLights(t,e){const n=F?32:38;let s=1;for(let r=22;r<e-12;r+=n){const a=this.makeStreetLamp(t);a.position.set(s*4.18,0,r),a.rotation.y=s>0?0:Math.PI,mn(a),this.scene.add(a),this.rootMeshes.push(a),this.animProps.push({obj:a,worldZ:r,kind:"flicker",speed:2.2+r*17%80/40,baseY:0,phase:r*.13,bulb:a.userData.flickerBulb,lightPool:a.userData.lightPool}),s*=-1}}makeGrassTexture(t){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle=t.ground,n.fillRect(0,0,256,256);for(let r=0;r<256;r+=2)for(let a=0;a<256;a+=2){const o=(a*13+r*7)%100/100;n.fillStyle=o>.5?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)",n.fillRect(a,r,2,2)}for(let r=0;r<48;r++)n.fillStyle=`rgba(0,0,0,${.03+r%4*.015})`,n.beginPath(),n.ellipse(r*19%256,r*41%256,6+r%5,4+r%3,r*.3,0,Math.PI*2),n.fill();for(let r=0;r<200;r++){const a=r*37%256,o=r*53%256;n.strokeStyle=r%2===0?"rgba(46,125,50,0.15)":"rgba(129,199,132,0.12)",n.lineWidth=1,n.beginPath(),n.moveTo(a,o),n.lineTo(a+r%3-1,o-3-r%4),n.stroke()}const s=new Fe(e);return s.colorSpace=ae,s}makeSidewalkTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#B0BEC5",e.fillRect(0,0,128,128),e.strokeStyle="rgba(255,255,255,0.28)",e.lineWidth=1;for(let s=0;s<128;s+=16)for(let r=0;r<128;r+=16)e.strokeRect(r+.5,s+.5,15,15),(r+s)%32===0&&(e.fillStyle="rgba(255,255,255,0.06)",e.fillRect(r+2,s+2,12,12));e.fillStyle="rgba(0,0,0,0.05)";for(let s=0;s<14;s++)e.fillRect(s*19%118,s*27%118,7,5);e.fillStyle="rgba(255,255,255,0.04)",e.fillRect(0,0,128,2);const n=new Fe(t);return n.colorSpace=ae,n}makeCloud(t){const e=new Pt,n=C("#FFFFFF",{transparent:!0,opacity:.92,roughness:1}),s=F?4:6;for(let r=0;r<s;r++)v(e,new wt(1.1+t()*1.4,10,8),n,(r-s/2)*1.05,.15+t()*.55,(t()-.5)*.9,!1).scale.set(1,.5+t()*.15,1);return v(e,new wt(1.8,8,8),C("#FFFFFF",{transparent:!0,opacity:.35}),0,-.2,0,!1).scale.set(2.2,.3,1.4),e}addWindow(t,e,n,s,r,a,o,l){const c=C("#ECEFF1",{roughness:.7}),h=C(o?l.id>=4?"#E1BEE7":"#FFF9C4":"#546E7A",{emissive:o?l.id>=4?"#CE93D8":"#FFD54F":"#263238",emissiveIntensity:o?l.id>=4?.95:.45:.05,metalness:.2,roughness:.25});v(t,new N(r+.08,a+.08,.05),c,e,n,s),v(t,new N(r,a,.04),h,e,n,s+.02),v(t,new N(r+.14,.06,.08),C("#455A64",{roughness:.8}),e,n-a/2-.04,s+.03),o&&a>.35&&(v(t,new N(.03,a*.85,.02),c,e,n,s+.04),v(t,new N(r*.85,.03,.02),c,e,n,s+.04))}addFacadeWindows(t,e,n,s,r,a,o){const l=e>0?-n/2-.03:n/2+.03,c=Math.max(2,Math.floor(n/1.85)),h=Math.max(2,Math.floor((s-2)/1.75)),u=Math.min(.62,(n-.6)/c-.12),d=Math.min(.82,(s-2.2)/h-.12);for(let p=0;p<h;p++)for(let g=0;g<c;g++){const _=1.35+p*(d+.18),m=-r/2+.55+g*(u+.18)+u/2;if(p===0&&g===Math.floor(c/2)&&a.id<=2)continue;const f=o()>(a.id>=3?.35:.22);this.addWindow(t,l,_,m,u,d,f,a)}}makeBuilding(t,e,n){const s=new Pt,r=t.id===3?"desert":t.id===4?"jungle":t.id>=6?"neon":t.id>=5?"industrial":t.id>=2?"downtown":"suburban",a=r==="desert"?4+e()*3:r==="jungle"?5+e()*5:r==="downtown"?10+e()*14:r==="suburban"?5+e()*4:7+e()*9,o=r==="downtown"?5+e()*3:r==="desert"?4+e()*2.5:4.5+e()*3.5,l=5+e()*4,c=t.buildingHue+e()*.08,h=new Mt().setHSL(c,r==="suburban"?.42:.32,r==="neon"?.22:.38+t.id*.03),u=new Mt().setHSL(c,.25,r==="suburban"?.78:.55),d=r==="desert"||r==="jungle"||r==="suburban"?ac(c):Hg(c);d.repeat.set(o/2,a/2);const p=new ye({map:d,color:r==="desert"?"#D7CCC8":r==="jungle"?"#8D6E63":h,roughness:r==="desert"?.95:.88}),g=C(r==="desert"?"#BF360C":r==="jungle"?"#33691E":u.getStyle(),{roughness:.75}),_=Gg(r==="suburban"?"#BF360C":r==="desert"?"#A1887F":r==="jungle"?"#558B2F":"#455A64");_.repeat.set(o/2,1.5);const m=new ye({map:_,color:r==="neon"?"#311B92":r==="suburban"?"#BF360C":r==="desert"?"#A1887F":r==="jungle"?"#558B2F":"#455A64",roughness:.85,emissive:r==="neon"?"#7B1FA2":"#000000",emissiveIntensity:r==="neon"?.25:0});if(v(s,new N(o,a,l),p,0,a/2,0),v(s,new N(o+.16,.28,l+.16),C(r==="desert"?"#BCAAA4":r==="jungle"?"#3E2723":"#37474F",{roughness:.92}),0,.14,0),v(s,new N(o+.2,.1,l+.2),g,0,.32,0),r==="suburban"){const x=v(s,new N(o/2+.1,.18,l+.35),m,-o/4,a+.1,0);x.rotation.z=.42;const S=v(s,new N(o/2+.1,.18,l+.35),m,o/4,a+.1,0);S.rotation.z=-.42,v(s,new N(.45,1.1,.45),C("#78909C",{roughness:.8}),o*.28,a+.85,l*.15),v(s,new N(1.5,.1,.85),g,n>0?-o/2-.55:o/2+.55,.35,.2);for(let b=0;b<3;b++)v(s,new N(.85,.12,.55),C("#78909C",{roughness:.85}),n>0?-o/2-.65:o/2+.65,.06+b*.12,.15-b*.05)}else if(r==="desert")v(s,new N(o+.15,.12,l+.15),m,0,a+.06,0),v(s,new N(o*.35,.55,.35),C("#FFCC80",{roughness:.9}),0,a+.35,0),e()>.5&&v(s,new ot(.08,.12,.6,6),C("#8D6E63"),o*.35,a+.65,l*.2);else if(r==="jungle"){v(s,new N(o+.25,.35,l+.25),C("#5D4037",{roughness:.9}),0,a+.5,0),v(s,new N(o+.4,.22,l+.4),m,0,a+.85,0);for(let x=0;x<4;x++){const S=x/4*Math.PI*2;v(s,new ot(.06,.08,1.2,6),C("#6D4C41",{roughness:.95}),Math.cos(S)*(o*.35),.6,Math.sin(S)*(l*.35))}v(s,new N(.12,a*.7,.08),C("#2E7D32",{emissive:"#1B5E20",emissiveIntensity:.15}),n>0?-o/2-.12:o/2+.12,a*.45,0)}else if(r==="downtown"){v(s,new N(o+.2,.35,l+.2),C("#37474F"),0,a+.18,0),v(s,new N(1.2,.55,1),C("#546E7A",{metalness:.35}),o*.25,a+.55,0);for(let x=1;x<4;x++)v(s,new N(o+.06,.08,l+.06),g,0,x*(a/4),0)}else if(r==="industrial"){v(s,new N(o+.15,.28,l+.15),C("#263238"),0,a+.14,0);for(let x=0;x<5;x++)v(s,new N(o+.02,.04,.08),C("#37474F"),0,1.2+x*1.4,l/2+.05)}else v(s,new N(o+.1,.2,l+.1),m,0,a+.1,0),v(s,new N(o*.7,.12,.08),C("#E040FB",{emissive:"#E040FB",emissiveIntensity:1.1}),0,a*.55,l/2+.06);const f=n>0?-o/2-.05:o/2+.05;if(v(s,new N(.1,1.75,1.05),C("#3E2723"),f,.88,.1),v(s,new N(.08,1.65,.95),C("#5D4037",{roughness:.9}),f+(n>0?-.03:.03),.88,.12),v(s,new wt(.06,8,8),C("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.5}),f+(n>0?-.02:.02),.95,.62),this.addFacadeWindows(s,n,o,a,l,t,e),!F){const x=Math.max(1,Math.floor(l/1.8));for(let S=0;S<x;S++){const b=-l/2+.8+S*(l/x),D=n>0?o/2+.03:-o/2-.03;for(const T of[1.8,3.2,4.8])T>a-.8||this.addWindow(s,D,T,b,.5,.68,e()>.4,t)}}if(r==="suburban"&&e()>.4){const x=n>0?-o/2-1.1:o/2+1.1;v(s,new N(1.6,.9,.12),C("#A5D6A7",{roughness:.9}),x,.45,l*.2),v(s,new N(1.6,.9,.12),C("#A5D6A7",{roughness:.9}),x,.45,-l*.2)}if(t.id<=2&&e()>.55){const x=n>0?-o/2-.8:o/2+.8;v(s,new N(.08,.65,1.8),C("#8D6E63"),x,.33,0),v(s,new N(.06,.55,1.6),C("#A5D6A7",{roughness:.95}),x+(n>0?-.12:.12),.55,0)}return s.rotation.y=0,s}makeTree(t){const e=new Pt,n=1.4+t()*.5,s=Vg();s.repeat.set(1,n/2);const r=new ye({map:s,color:"#5D4037",roughness:.95});v(e,new ot(.16,.28,n,8),r,0,n/2,0),v(e,new wt(.16,8,8),C("#4E342E"),0,n+.15,0);for(let l=0;l<3;l++){const c=l/3*Math.PI*2;v(e,new N(.12,.08,.35),C("#4E342E"),Math.cos(c)*.2,.08,Math.sin(c)*.2)}const a=Wg(),o=["#43A047","#66BB6A","#2E7D32","#81C784"];for(let l=0;l<4;l++)v(e,new en(1.4-l*.2,2-l*.22,8),new ye({map:a,color:o[l%o.length],emissive:"#1B5E20",emissiveIntensity:.08,roughness:.95}),(t()-.5)*.15,n+.85+l*1.1,(t()-.5)*.15).scale.set(1.08-l*.07,1,1.08-l*.07);if(!F){for(let l=0;l<2;l++)v(e,new wt(.55+l*.15,8,8),new ye({map:a,color:"#388E3C",transparent:!0,opacity:.35,roughness:1}),(l-.5)*.4,.35,(t()-.5)*.5);v(e,new wt(.07,6,6),C("#FF5252",{emissive:"#D50000",emissiveIntensity:.3}),.35,n+1.1,.25)}return e}makeCactus(t){const e=new Pt,n=C("#558B2F",{roughness:.92}),s=C("#33691E",{roughness:.95}),r=1.6+t()*1.4;v(e,new ot(.22,.28,r,8),n,0,r/2,0);const a=r*(.45+t()*.2),o=r*(.45+t()*.15),l=t()>.5?1:-1;if(v(e,new ot(.14,.18,a*.55,6),n,l*.28,o,0),v(e,new ot(.12,.14,a,6),n,l*.42,o+a*.35,0),t()>.4){const c=-l;v(e,new ot(.12,.16,a*.5,6),s,c*.24,r*.35,0),v(e,new ot(.1,.12,a*.75,6),s,c*.36,r*.35+a*.3,0)}return e}makePalmTree(t){const e=new Pt,n=2.8+t()*1.8,s=C("#6D4C41",{roughness:.95});v(e,new ot(.18,.32,n,8),s,0,n/2,0);for(let o=0;o<4;o++){const l=.4+o*(n/4);v(e,new Ye(.22,.04,6,10),C("#5D4037"),0,l,0)}const r=new ye({color:"#2E7D32",emissive:"#1B5E20",emissiveIntensity:.12,roughness:.9,side:fe}),a=F?5:7;for(let o=0;o<a;o++){const l=o/a*Math.PI*2+t()*.2,c=v(e,new N(.08,.04,2.2+t()*.6),r,0,n+.15,0);c.rotation.y=l,c.rotation.x=-.55-t()*.15,c.position.x=Math.cos(l)*.15,c.position.z=Math.sin(l)*.15}return!F&&t()>.6&&v(e,new wt(.12,6,6),C("#FF7043",{emissive:"#E64A19",emissiveIntensity:.25}),.2,n*.6,.15),e}makeDesertRock(t){const e=new Pt,n=C("#A1887F",{roughness:.98}),s=.8+t()*1.2,r=.5+t()*.9,a=v(e,new N(s,r,s*(.7+t()*.4)),n,0,r/2,0);if(a.rotation.y=t()*Math.PI,a.rotation.z=(t()-.5)*.25,!F&&t()>.5){const o=s*.55,l=r*.45;v(e,new N(o,l,o),C("#8D6E63",{roughness:.98}),s*.35,l/2,s*.2)}return e}makeStreetLamp(t){const e=new Pt;e.userData.flicker=!0;const n="#FFCC80",s=C("#546E7A",{metalness:.72,roughness:.38}),r=C("#455A64",{metalness:.65,roughness:.42});v(e,new ot(.16,.18,.07,10),s,0,.035,0),v(e,new ot(.06,.09,.1,8),s,0,.12,0),v(e,new ot(.05,.075,4.15,10),s,0,2.14,0);const a=new Pt;a.position.set(0,4.18,0),e.add(a),v(a,new N(.95,.065,.065),s,-.47,0,0),v(a,new N(.06,.32,.06),s,-.92,-.12,0);const o=-.92;v(a,new ot(.2,.17,.1,10),r,o,-.28,0),v(a,new ot(.17,.2,.06,10,1,!0),C("#FFF8E1",{emissive:n,emissiveIntensity:.85,transparent:!0,opacity:.92,roughness:.2,metalness:.05}),o,-.36,0);const l=v(a,new wt(.07,8,8),C("#FFFDE7",{emissive:"#FFE0B2",emissiveIntensity:1.1}),o,-.38,0);l.userData.isBulb=!0,e.userData.flickerBulb=l;const c=F?3.2:4.2,h=v(e,new Yt(c,c*1.55),new Lt({map:this.getLightPoolTexture(),transparent:!0,opacity:.42,blending:oe,depthWrite:!1,color:n}),-2.4,.028,0,!1);return h.rotation.x=-Math.PI/2,e.userData.lightPool=h,e}makeMailbox(){const t=new Pt;v(t,new ot(.05,.06,.7,8),C("#78909C",{metalness:.7}),0,.35,0),v(t,new N(.55,.75,.42),C("#1565C0",{roughness:.55}),0,.82,0),v(t,new N(.58,.1,.44),C("#0D47A1"),0,1.22,0),v(t,new N(.12,.18,.06),C("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.45}),.2,1.05,.24);const e=v(t,new N(.22,.14,.03),C("#E53935",{emissive:"#FF1744",emissiveIntensity:.35}),.28,1.18,.18);return e.rotation.z=-.55,t}makeAlienCrash(){const t=new Pt;v(t,new ot(.9,1.1,.15,12),C("#607D8B",{metalness:.7,emissive:"#00E676",emissiveIntensity:.3}),0,.08,0),v(t,new wt(.55,10,8,0,Math.PI*2,0,Math.PI/2),C("#80DEEA",{transparent:!0,opacity:.6}),0,.15,0);const e=v(t,new Ue(1.1,16),C("#76FF03",{emissive:"#33691E",emissiveIntensity:.5,transparent:!0,opacity:.65}),0,.02,0,!1);e.rotation.x=-Math.PI/2;for(let n=0;n<4;n++){const s=n/4*Math.PI*2;v(t,new N(.25,.08,.25),C("#CFD8DC",{metalness:.5}),Math.cos(s)*.9,.04,Math.sin(s)*.9)}return t}addMilestoneArch(t,e,n){const s=new Pt;s.position.set(0,0,t);for(const c of[-4.5,4.5])v(s,new ot(.2,.22,5,10),C("#ECEFF1"),c,2.5,0);v(s,new N(10,.35,.35),C(e,{emissive:e,emissiveIntensity:.35}),0,4.8,0);const r=document.createElement("canvas");r.width=256,r.height=64;const a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,256,64),a.fillStyle="#000",a.font="bold 28px Segoe UI",a.textAlign="center",a.fillText(n,128,42);const o=new Fe(r),l=new ie(new Yt(3.5,.9),new Lt({map:o}));l.position.set(0,5.5,0),s.add(l),this.scene.add(s),this.rootMeshes.push(s)}setupLighting(t,e){this.hemiLight=new Wd(t.sky,t.ground,t.ambient*1.05),this.hemiLight.name="hemi",this.scene.add(this.hemiLight),this.ambientLight=new Eh(16777215,t.ambient*.48),this.ambientLight.name="ambient",this.scene.add(this.ambientLight),this.sunLight=new Xi(16775408,t.sun*1.12),this.sunLight.position.set(20,45,-25),this.sunLight.castShadow=!1,this.sunLight.name="sun",this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.fillLight=new Xi(t.skyBottom||t.sky,t.ambient*.22),this.fillLight.position.set(-18,22,12),this.fillLight.name="fill",this.scene.add(this.fillLight),this.rimLight=new Xi("#FFF8E8",.38),this.rimLight.position.set(0,14,-28),this.rimLight.name="rim",this.scene.add(this.rimLight),t.id>=5&&(this.accentLight=new Zi(t.id>=6?"#7C4DFF":"#FF7043",.35,70,1.6),this.accentLight.position.set(0,10,30),this.accentLight.name="accent",this.scene.add(this.accentLight)),this.roadNightLight=new Zi("#FFE082",0,F?24:30,2),this.roadNightLight.name="roadNight",this.scene.add(this.roadNightLight),this.roadFillLight=new Zi("#FFFBF5",F?.58:.48,F?36:44,1.4),this.roadFillLight.name="roadFill",this.scene.add(this.roadFillLight),this.gameplayRimLight=new Xi("#E8F4FF",.42),this.gameplayRimLight.name="gameplayRim",this.scene.add(this.gameplayRimLight),this.scene.add(this.gameplayRimLight.target)}setPlayerZ(t,e){if(this.playerZ=t,this.cullTimer+=e,this.cullTimer<(F?.12:.08))return;this.cullTimer=0;const n=t-Ng,s=t+Ug;for(const r of this.rootMeshes){if(r.userData.isTerrain)continue;const a=r.position.z;r.visible=a>=n&&a<=s}}followSun(t,e){this.sunLight&&(this.sunLight.position.set(t+18,42,e-22),this.sunLight.target.position.set(t*.3,0,e+35),this.sunLight.target.updateMatrixWorld(),this.fillLight&&this.fillLight.position.set(t-16,24,e+8),this.rimLight&&this.rimLight.position.set(t*.5,16,e-26),this.accentLight&&this.accentLight.position.set(t,11,e+28),this.roadNightLight&&this.roadNightLight.position.set(t,5.5,e+3),this.roadFillLight&&this.roadFillLight.position.set(t*.12,F?8:9,e+14),this.gameplayRimLight&&(this.gameplayRimLight.position.set(t,7,e-16),this.gameplayRimLight.target.position.set(t*.2,.8,e+24),this.gameplayRimLight.target.updateMatrixWorld()))}playSpectacle(t,e){var n;(n=this.skyEffects)==null||n.playSpectacle(t,e)}update(t,e=this.playerZ,n=.016,s){var _,m;s&&(this.roadFx=s),this.playerZ=e,this.wetFactor=this.rainWetForDistrict(this.skyTheme,this.skyNight),this.updateSkyCycle(t,n),(_=this.skyEffects)==null||_.update(t,n,e);const r=t*.12,a=this.roadFx.baseSpeed>0?this.roadFx.speed/this.roadFx.baseSpeed:1,o=this.roadFx.turbo,l=r*(o?2.4+a*.35:1);this.roadTexture&&(this.roadTexture.offset.y=-r),this.roadEmissiveTex&&(this.roadEmissiveTex.offset.y=-r),this.roadGlowTex&&(this.roadGlowTex.offset.y=-r),this.roadStreakTex&&(this.roadStreakTex.offset.y=-l),this.roadRainTex&&(this.roadRainTex.offset.y=-t*.85);const c=this.skyNight,h=this.skyNightFx;let u=ic(c);F&&(u*=.72);const d=1+this.wetFactor*(this.wetFactor>.45?1:.65);if(this.roadMesh){const f=this.roadMesh.material,S=(F?.12:.1)+(1-u)*(F?.14:.12)+h*(F?.32:.55),b=1+Math.sin(t*2.4)*.04*h;f.emissiveIntensity=S*b*(o?1.12:1),f.roughness=.82-u*.1-this.wetFactor*.12,f.metalness=.06+h*.14+this.wetFactor*.14;const D=F?"#e8edf2":"#dfe6ec",T=F?"#c8d2dc":"#b0bcc8";f.color.set(D).lerp(new Mt(T),u*(F?.15:.22))}if(this.roadGlowMesh){const f=this.roadGlowMesh.material,x=(F?.14:.18)*(1-u*.35),S=(F?.16:.24)+h*(F?.42:.58),b=this.roadFx.combatIntensity??0,D=this.roadFx.shootPulse??0,T=1+Math.sin(t*3.1+.5)*.06*Math.max(h,.25);f.opacity=Math.max(x,h>.04?S*T*d*(o?1.15:1)*(1+b*.35+D*.5):0),this.roadGlowMesh.visible=f.opacity>.02,o?f.color.set(this.roadAccent.secondary):D>.2?f.color.set(this.roadAccent.primary).lerp(new Mt("#00E5FF"),D):b>.3&&f.color.set(this.roadAccent.secondary)}if(this.roadStreakMesh){const f=this.roadStreakMesh.material,x=o?.12+(a-1)*.08:0;f.opacity+=(x-f.opacity)*Math.min(1,n*10),f.visible=f.opacity>.01,o&&f.color.set(this.roadAccent.secondary)}if(this.roadRainMesh){const f=this.roadRainMesh.material;f.opacity=this.wetFactor*(F?.16:.24),f.visible=this.wetFactor>.18}const p=F?40:54;for(const f of this.boostPads){const x=Math.abs(f.z-e)<p;if(f.group.visible=x,!x)continue;f.cooldown=Math.max(0,f.cooldown-n),f.flash=Math.max(0,f.flash-n*2.4);const S=t+f.pulsePhase,b=.5+.5*Math.sin(S*2.6),D=.5+.5*Math.sin(S*5.2),T=f.flash,A=f.underlay.material;A.opacity=.34+b*.18+T*.22;const L=new Mt(f.accent),E=L.clone().multiplyScalar(.72);A.color.copy(E).lerp(L,.35+b*.45+T*.2);const y=f.decal.material;y.opacity=.76+D*.12+T*.1,y.map&&(y.map.offset.y=(t*.22+f.pulsePhase*.05)%1);const U=1+b*.035+T*.07;f.group.scale.set(U,1,U)}if(!F&&((m=this.rootMeshes[0])!=null&&m.userData.isTerrain)){const x=this.rootMeshes[0].material;x.map&&(x.map.offset.y=-e*.02)}const g=F?38:55;for(const f of this.animProps)if(!(Math.abs(f.worldZ-e)>g))switch(f.kind){case"bob":f.obj.position.y=f.baseY+Math.sin(t*f.speed+f.phase)*.06;break;case"spin":f.obj.rotation.y=t*f.speed;break;case"cloud":f.obj.position.x+=Math.sin(t*.1+f.phase)*.008,f.obj.position.y=f.baseY+Math.sin(t*f.speed+f.phase)*.4;break;case"flicker":{const x=.72+Math.sin(t*f.speed+f.phase)*.08+Math.sin(t*f.speed*3.1+f.phase)*.04;if(f.bulb){const S=f.bulb.material;S.emissiveIntensity=x*(.35+this.skyNight*.95)}if(f.lightPool){const S=f.lightPool.material;S.opacity=this.skyNight*(.42+Math.sin(t*f.speed*.6+f.phase)*.04),f.lightPool.visible=this.skyNight>.1}break}}}clear(){var t;(t=this.skyEffects)==null||t.dispose(),this.skyEffects=null;for(const e of this.rootMeshes)this.scene.remove(e),qe(e);this.rootMeshes=[],this.animProps=[],this.boostPads=[],this.boostLaneTex&&(this.boostLaneTex.dispose(),this.boostLaneTex=null),this.roadTexture&&this.roadTexture.dispose(),this.roadEmissiveTex&&(this.roadEmissiveTex.dispose(),this.roadEmissiveTex=null),this.roadGlowTex&&(this.roadGlowTex.dispose(),this.roadGlowTex=null),this.roadStreakTex&&(this.roadStreakTex.dispose(),this.roadStreakTex=null),this.roadRainTex&&(this.roadRainTex.dispose(),this.roadRainTex=null),this.lightPoolTexture&&(this.lightPoolTexture.dispose(),this.lightPoolTexture=null),this.roadMesh=null,this.roadGlowMesh=null,this.roadStreakMesh=null,this.roadRainMesh=null,this.skyTexture&&(this.skyTexture.dispose(),this.skyTexture=null),this.skyCanvas=null,this.skyPhase=-1;for(const e of["hemi","ambient","sun","fill","rim","accent","roadNight","neon"]){const n=this.scene.getObjectByName(e);n&&this.scene.remove(n)}this.accentLight=null,this.roadNightLight=null,this.roadFillLight=null,this.gameplayRimLight=null}}function Cv(i){let t=i;return()=>(t=(t*16807+0)%2147483647,(t-1)/2147483646)}const Lh={core:"#FF9800",mid:"#FFB74D",glow:"#FFD54F",particle:"#FFF8E1",shell:"#FF6F00",ribbon:"#FFC107"},Rv={core:"#FFFDE7",mid:"#FFF9C4",glow:"#FFD54F",particle:"#FFFFFF",shell:"#FFEB3B",ribbon:"#00E5FF"},hc=F?8:12,Pv=F?4:6;function Nn(i,t,e=1){return C(i,{emissive:i,emissiveIntensity:t,transparent:e<1,opacity:e,roughness:.18,metalness:.06})}function uc(i,t){return new Lt({color:i,transparent:!0,opacity:t,depthWrite:!1,blending:oe})}function Fv(i){return i>=7?{core:"#FF5252",mid:"#FF1744",glow:"#FF8A80",particle:"#FFCDD2",shell:"#D50000",ribbon:"#FFD54F"}:i>=6?{core:"#E1BEE7",mid:"#AB47BC",glow:"#EA80FC",particle:"#F3E5F5",shell:"#7B1FA2",ribbon:"#FFD54F"}:i===5?{core:"#448AFF",mid:"#2979FF",glow:"#82B1FF",particle:"#E3F2FD",shell:"#1565C0",ribbon:"#FFD54F"}:i===4?{core:"#66BB6A",mid:"#43A047",glow:"#A5D6A7",particle:"#E8F5E9",shell:"#2E7D32",ribbon:"#FFD54F"}:i===3?{core:"#FFB74D",mid:"#FF9800",glow:"#FFE082",particle:"#FFF8E1",shell:"#F57C00",ribbon:"#00E5FF"}:Lh}function Dv(i,t,e,n){const s=new Pt;s.userData.orbit=e;for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=v(s,new wt(.035+r%2*.012,5,5),Nn(t,1.2,.9),Math.cos(a)*e,Math.sin(r*1.5)*.06,Math.sin(a)*e,!1);o.userData.angle=a,o.userData.orbit=e,o.userData.wobble=r*1.1}return i.add(s),s}function Lv(i,t,e,n){const s=new Pt;s.position.y=n,v(s,new N(.34*t,.05*t,.36*t),Nn(e.ribbon,.85),0,0,0,!1),v(s,new N(.05*t,.28*t,.36*t),Nn(e.ribbon,.85),0,.02*t,0,!1);for(const r of[-1,1])v(s,new wt(.07*t,6,6),Nn(e.ribbon,1),r*.08*t,.16*t,.06*t,!1);return v(s,new N(.14*t,.04*t,.02*t),C("#FFFDE7",{emissive:"#FFFFFF",emissiveIntensity:.35}),0,.14*t,.2*t),i.add(s),s}function Iv(i,t){v(i,new N(.38*t,.05*t,.02*t),C("#FFEB3B",{emissive:"#FFC107",emissiveIntensity:.45}),0,-.02*t,.2*t);for(let e=0;e<3;e++)v(i,new N(.08*t,.055*t,.025*t),C(e%2===0?"#212121":"#FFEB3B"),-.1*t+e*.1*t,-.02*t,.22*t)}function Ir(i,t=Lh){const e=i==="pickup"?1:i==="carried"?.36:i==="throw"?.58:.48,n=new Pt;n.userData.packageOrb=!0,n.userData.theme={...t};const s=i==="pickup"?.55:i==="carried"?0:.35,r=new Pt;r.position.y=s,n.add(r);let a;i==="pickup"&&(a=v(n,new nn(.38*e,.62*e,F?12:18),uc(t.glow,.38),0,.04,0,!1),a.rotation.x=-Math.PI/2,n.userData.groundRing=a);const o=v(r,new wt(.48*e,hc,hc),uc(t.glow,.18),0,0,0,!1);n.userData.outerGlow=o;const l=v(r,new N(.42*e,.38*e,.42*e),Nn(t.shell,.5,.38),0,0,0,!1);n.userData.midShell=l;const c=i==="mail"?v(r,new N(.28*e,.18*e,.06*e),Nn(t.core,1.1),0,0,.04*e,!1):v(r,new N(.32*e,.3*e,.32*e),Nn(t.core,1.25),0,0,0,!1);n.userData.core=c,v(r,new wt(.1*e,6,6),Nn("#FFFFFF",1.2,.82),.08*e,.1*e,.14*e,!1),i!=="mail"?(Lv(r,e,t,.18*e),i!=="carried"&&Iv(c,e)):v(r,new N(.06*e,.12*e,.02*e),Nn(t.ribbon,1),0,.02*e,.08*e,!1);const h=i==="carried"?.28*e:.42*e;return n.userData.particles=Dv(r,t.particle,h,i==="carried"?3:Pv),{group:n,core:c,outerGlow:o,midShell:l,groundRing:a}}function Uv(i,t,e){const n=Fv(t);i.userData.theme=n,i.traverse(s=>{if(!(s instanceof ie))return;const r=i.userData;s===r.core&&s.material instanceof ye&&(s.material.color.set(n.core),s.material.emissive.set(n.core),s.material.emissiveIntensity=.9+e*.4),s===r.outerGlow&&s.material instanceof Lt&&s.material.color.set(n.glow),s===r.midShell&&s.material instanceof ye&&(s.material.color.set(n.shell),s.material.emissive.set(n.shell)),s===r.groundRing&&s.material instanceof Lt&&s.material.color.set(n.glow)})}function Ih(i,t,e=0,n=!0){if(n){const h=Math.sin(t*3+e)*.12;i.position.y=h}i.rotation.y=t*1.4+e;const s=i.userData.core,r=i.userData.outerGlow,a=i.userData.midShell,o=i.userData.groundRing,l=i.userData.particles,c=1+Math.sin(t*4.2+e)*.06;s&&s.scale.setScalar(c),r&&(r.scale.setScalar(1+Math.sin(t*3+e)*.08),r.material.opacity=.14+Math.sin(t*5+e)*.05),a&&(a.rotation.y=-t*2.2),o&&o.scale.setScalar(1+Math.sin(t*4+e)*.08),l&&(l.rotation.y=t*1.6,l.children.forEach((h,u)=>{if(!(h instanceof ie))return;const d=h.userData.angle+t*(1.1+u%3*.12),p=h.userData.orbit;h.position.x=Math.cos(d)*p,h.position.z=Math.sin(d)*p,h.position.y=Math.sin(t*4+h.userData.wobble)*.08}))}function Nv(i,t){const e=i.userData.core,n=i.userData.outerGlow,s=1+Math.sin(t*4)*.04;e&&e.scale.setScalar(s),n&&(n.scale.setScalar(s),n.material.opacity=.12+Math.sin(t*5)*.05);const r=i.userData.particles;r&&(r.rotation.y=t*1.2)}function Uh(i){qe(i)}function dc(i,t,e){const n=new Pt;return n.position.set(i,.48,.02),v(n,new bn(.085,.22,5,8),t,0,-.12,0),v(n,new bn(.075,.18,5,8),t,0,-.38,0),v(n,new N(.15,.09,.26),e,0,-.54,.05),v(n,new N(.12,.04,.06),C("#37474F",{roughness:.85}),0,-.54,.16),n}function fc(i,t,e,n){const s=new Pt;s.position.set(i*.34,1.1,0),v(s,new bn(.065,.2,5,8),t,0,-.08,0),v(s,new bn(.055,.18,5,8),e,0,-.3,0),v(s,new wt(.065,8,8),n,0,-.46,0);for(const r of[-.035,0,.035])v(s,new bn(.014,.045,3,4),n,r,-.52,.02);return s}function kv(i,t){const e=new Pt;e.position.set(0,1,-.1);const n=C(t.packMain,{roughness:.88}),s=C(t.packDark,{roughness:.92}),r=C("#263238",{roughness:.8}),a=C("#90A4AE",{metalness:.72,roughness:.35}),o=C(t.packTrim,{emissive:t.packTrim,emissiveIntensity:.18});v(e,new N(.4,.44,.13),s,0,.06,-.04),v(e,new N(.38,.14,.12),n,0,.3,-.03),v(e,new N(.42,.05,.14),s,0,.36,-.04);for(const c of[-.13,.13])v(e,new N(.055,.34,.035),r,c,.26,.04),v(e,new N(.045,.2,.03),r,c*.85,.46,.06),v(e,new N(.07,.035,.025),a,c,.2,.06);v(e,new N(.44,.05,.03),r,0,-.08,.02),v(e,new N(.08,.06,.025),a,0,-.08,.04);for(const c of[-1,1])v(e,new N(.09,.16,.09),n,c*.22,.02,.01),v(e,new N(.1,.03,.01),o,c*.22,.1,.06);v(e,new N(.41,.035,.01),o,0,.14,.07);const l=Ir("carried");return l.group.position.set(0,.46,.04),l.group.rotation.y=.35,e.add(l.group),v(e,new ot(.01,.01,.12,6),C("#455A64",{metalness:.65}),.15,.42,.03),v(e,new wt(.022,8,8),C("#00E676",{emissive:"#00E676",emissiveIntensity:.75}),.15,.49,.03),i.add(e),{pack:e,vipPouch:l.core,vipGlow:l.outerGlow,packageOrb:l.group}}function Bv(){const i=new Pt,t=C("#607D8B",{metalness:.78,roughness:.28}),e=C("#37474F",{metalness:.82,roughness:.22}),n=C("#FF9800",{emissive:"#FF9800",emissiveIntensity:.3});v(i,new N(.07,.15,.08),e,0,-.07,.01),v(i,new N(.05,.04,.05),C("#263238",{roughness:.9}),.04,-.1,.02),v(i,new N(.12,.12,.28),t,0,.02,.1),v(i,new N(.1,.035,.2),C("#FFF8E1",{roughness:.7}),0,.09,.08),v(i,new N(.08,.006,.16),n,0,.115,.08);for(const r of[-.035,.035])v(i,new N(.012,.05,.14),e,r,.02,.1);v(i,new ot(.038,.044,.2,8),e,0,.02,.32),v(i,new ot(.032,.038,.08,8),t,0,.02,.44);const s=v(i,new Ye(.048,.01,6,12),C("#00E5FF",{emissive:"#00E5FF",emissiveIntensity:.65}),0,.02,.5);return s.userData.isMailMuzzle=!0,v(i,new N(.018,.03,.05),C("#00E676",{emissive:"#00E676",emissiveIntensity:.7}),0,.1,.22),v(i,new N(.04,.025,.06),C("#455A64",{metalness:.6}),0,.1,.14),i.rotation.set(-.2,-.15,.05),{gun:i,muzzle:s}}function Nh(i){const t=new Pt,e=new Pt,n=C(i.skin),s=C(i.jacket,{roughness:.4,metalness:.08}),r=C(i.jacketLight,{roughness:.35}),a=C(i.jacketTrim,{emissive:i.jacketTrim,emissiveIntensity:.2}),o=C(i.hat,{roughness:.45,metalness:.1}),l=C(i.hatBrim,{roughness:.5}),c=C("#263238",{roughness:.85}),h=C("#1A1A1A",{roughness:.9,metalness:.15}),u=C("#80DEEA",{emissive:"#00BCD4",emissiveIntensity:.55,metalness:.65,transparent:!0,opacity:.88}),d=new Pt;v(d,new N(.82,.09,1.15),C("#37474F",{metalness:.45,roughness:.55}),0,.06,.04),v(d,new N(.7,.035,1),C("#546E7A",{metalness:.35,roughness:.65}),0,.11,.04),v(d,new N(.55,.02,.85),C("#263238",{roughness:.9}),0,.13,.04);for(const A of[-.3,.3])v(d,new ot(.1,.1,.035,12),C("#78909C",{metalness:.65,roughness:.4}),A,.05,-.38),v(d,new Ye(.11,.014,8,16),C("#455A64",{metalness:.5}),A,.05,-.38,!1);t.add(d),v(e,new bn(.22,.18,6,10),c,0,.58,0),v(e,new bn(.26,.42,8,12),s,0,.98,0),v(e,new N(.5,.1,.28),r,0,1.18,.02),v(e,new N(.52,.08,.3),a,0,1.26,.01),v(e,new N(.14,.28,.06),a,0,1,.17);for(const A of[-1,1])v(e,new wt(.11,10,8),r,A*.32,1.22,0);v(e,new wt(.24,14,12),n,0,1.48,.02),v(e,new wt(.27,14,12,0,Math.PI*2,0,Math.PI*.55),o,0,1.52,0),v(e,new N(.44,.12,.14),l,0,1.62,.06),v(e,new N(.38,.09,.05),u,0,1.52,.22);const p=dc(-.13,c,h),g=dc(.13,c,h);e.add(p,g);const _=fc(-1,s,r,n),m=fc(1,s,r,n);e.add(_,m);const{pack:f,vipPouch:x,vipGlow:S,packageOrb:b}=kv(e,i),{gun:D,muzzle:T}=Bv();return D.position.set(.08,-.4,.1),m.add(D),e.position.y=.28,t.add(e),{mesh:t,body:e,leftLeg:p,rightLeg:g,leftArm:_,rightArm:m,packageMesh:x,packageGlow:S,packageOrb:b,hoverboard:d,backpack:f,mailGun:D,mailGunMuzzle:T}}class Ov{constructor(t,e){P(this,"mesh");P(this,"x",0);P(this,"z",0);P(this,"targetX",0);P(this,"hurtFlash",0);P(this,"runPhase",0);P(this,"jumpY",0);P(this,"jumpVel",0);P(this,"jumpPower",12);P(this,"isJumping",!1);P(this,"isSliding",!1);P(this,"slideTimer",0);P(this,"baseBodyY",.28);P(this,"shadow");P(this,"speedTrails",[]);P(this,"trailPhase",0);P(this,"nightLevel",0);P(this,"footLight");P(this,"playerLight");P(this,"headLight");P(this,"mailGunMuzzle");P(this,"visorMesh",null);P(this,"body");P(this,"leftLeg");P(this,"rightLeg");P(this,"leftArm");P(this,"rightArm");P(this,"packageOrb");P(this,"hoverboard");P(this,"backpack");P(this,"characterName");this.characterName=e.name;const n=Nh(e);this.mesh=n.mesh,this.body=n.body,this.leftLeg=n.leftLeg,this.rightLeg=n.rightLeg,this.leftArm=n.leftArm,this.rightArm=n.rightArm,this.packageOrb=n.packageOrb,this.hoverboard=n.hoverboard,this.backpack=n.backpack,this.mailGunMuzzle=n.mailGunMuzzle,this.mailGunMuzzle.userData.baseEmissiveIntensity=this.mailGunMuzzle.material.emissiveIntensity,this.body.traverse(r=>{r instanceof ie&&r.material instanceof ye&&(r.material.emissive&&r.material.emissive.getHex()>0&&r!==this.mailGunMuzzle&&(r.userData.baseEmissiveIntensity=r.material.emissiveIntensity),r.material.transparent&&r.material.opacity<1&&r.position.y>1.45&&(this.visorMesh=r))}),this.shadow=v(t,new Ue(.42,12),new Lt({color:"#000000",transparent:!0,opacity:.28,depthWrite:!1}),0,.03,0,!1),this.shadow.rotation.x=-Math.PI/2;const s=new Lt({color:"#80DEEA",transparent:!0,opacity:0,blending:oe,depthWrite:!1,side:fe});for(let r=0;r<(F?3:4);r++){const a=v(t,new Yt(.35,.06),s.clone(),0,.12,0,!1);a.rotation.x=-Math.PI/2,a.visible=!1,this.speedTrails.push(a)}this.footLight=v(t,new Ue(.22,10),new Lt({color:"#B0BEC5",transparent:!0,opacity:0,blending:oe,depthWrite:!1}),0,.035,0,!1),this.footLight.rotation.x=-Math.PI/2,this.playerLight=new Zi("#FFF8E1",0,9,1.35),this.playerLight.position.set(0,1.15,.35),this.mesh.add(this.playerLight),this.headLight=new Zi("#E1F5FE",0,16,1.15),this.headLight.position.set(0,1.6,2.8),this.mesh.add(this.headLight),t.add(this.mesh)}update(t,e,n,s=12,r=0){this.x+=(this.targetX-this.x)*Math.min(1,9*t),this.x=$i.clamp(this.x,-e,e),this.targetX=$i.clamp(this.targetX,-e,e),this.slideTimer>0&&(this.slideTimer-=t,this.slideTimer<=0&&(this.slideTimer=0,this.isSliding=!1)),this.isJumping&&(this.jumpVel-=34*t,this.jumpY+=this.jumpVel*t,this.jumpY<=0&&(this.jumpY=0,this.jumpVel=0,this.isJumping=!1)),this.mesh.position.set(this.x,this.jumpY,this.z),this.shadow.position.set(this.x,.03,this.z);const o=1-Math.min(.45,this.jumpY*.12);this.shadow.scale.set(o,o,1),this.shadow.material.opacity=.18+o*.14,this.nightLevel=r,this.updateNightGear(n);const l=n&&s>13&&!this.isJumping;l&&(this.trailPhase+=t*(s*.8));for(let c=0;c<this.speedTrails.length;c++){const h=this.speedTrails[c];if(!l){h.visible=!1;continue}h.visible=!0;const u=c/this.speedTrails.length;h.position.set(this.x+Math.sin(this.trailPhase+c)*.08,.08+u*.04,this.z+.45+c*.22),h.rotation.z=this.x*.04;const d=h.material;d.opacity=(.35-u*.28)*Math.min(1,(s-12)/8),h.scale.set(.8+(1-u)*.6,1,1)}if(this.isSliding)this.body.position.y=.08,this.body.rotation.x=.55,this.leftLeg.rotation.x=1.1,this.rightLeg.rotation.x=1.25,this.leftArm.rotation.x=.35,this.rightArm.rotation.x=.35,this.hoverboard.rotation.x=.15,this.hoverboard.position.y=.02,this.backpack.rotation.x=.25;else if(n){this.runPhase+=t*13;const c=Math.sin(this.runPhase)*.48;this.leftLeg.rotation.x=c,this.rightLeg.rotation.x=-c,this.leftArm.rotation.x=-c*.5,this.rightArm.rotation.x=c*.5,this.body.rotation.x=0,this.body.position.y=this.baseBodyY+Math.abs(Math.sin(this.runPhase*2))*.045,this.hoverboard.rotation.x=0,this.hoverboard.position.y=0,this.isJumping&&(this.leftLeg.rotation.x=-.65,this.rightLeg.rotation.x=-.35,this.body.position.y=this.baseBodyY+.15,this.body.rotation.x=-.08),this.hoverboard.rotation.z=this.x*.032,this.backpack.rotation.x=Math.sin(this.runPhase)*.04,this.backpack.rotation.z=Math.sin(this.runPhase*.5)*.03}else this.body.rotation.x=0,this.body.position.y=this.baseBodyY;if(Nv(this.packageOrb,Date.now()*.001),this.hurtFlash>0){this.hurtFlash-=t;const c=this.hurtFlash>0;this.body.traverse(h=>{h instanceof ie&&h.material instanceof ye&&(h.material.emissive.set(c?"#FF1744":"#000000"),h.material.emissiveIntensity=c?.55:0)})}}updateNightGear(t){var a;const e=this.nightLevel;this.playerLight.intensity=e*(F?3.2:4.4),this.playerLight.color.set(e>.5?"#E1F5FE":"#FFF8E1"),this.headLight.intensity=e*(F?2.4:3.6),this.headLight.color.set("#B3E5FC");const n=this.footLight.material;n.opacity=e*.22,this.footLight.position.set(this.x,.035,this.z),this.footLight.visible=e>.04;const s=this.mailGunMuzzle.material,r=this.mailGunMuzzle.userData.baseEmissiveIntensity??.65;if(s.emissiveIntensity=r+e*.55+(t?.14:0),((a=this.visorMesh)==null?void 0:a.material)instanceof ye){const o=this.visorMesh.material,l=this.visorMesh.userData.baseEmissiveIntensity??.55;o.emissiveIntensity=l+e*.45}this.body.traverse(o=>{if(!(o instanceof ie)||!(o.material instanceof ye)||o===this.mailGunMuzzle||o===this.visorMesh)return;const l=o.userData.baseEmissiveIntensity;if(l!==void 0){o.material.emissiveIntensity=l+e*.35;return}e>.08&&!o.material.transparent&&(o.material.emissive.set("#FFF3E0"),o.material.emissiveIntensity=e*.18)})}knockback(t,e=1.2){this.targetX+=this.x>=t?e:-e}jump(){return this.isJumping||this.isSliding?!1:(this.isJumping=!0,this.jumpVel=this.jumpPower,!0)}slide(){return this.isJumping||this.isSliding?!1:(this.isSliding=!0,this.slideTimer=.82,!0)}boostSlide(t=1.15){this.isJumping=!1,this.jumpY=0,this.jumpVel=0,this.isSliding=!0,this.slideTimer=Math.max(this.slideTimer,t)}setJumpPower(t){this.jumpPower=t}flashHurt(){this.hurtFlash=.45}throwAnim(){this.rightArm.rotation.x=-1.5,setTimeout(()=>{this.rightArm.rotation.x=0},220)}mailGunAnim(){this.rightArm.rotation.x=-.85;const t=this.mailGunMuzzle.material;t.emissiveIntensity=1.4,setTimeout(()=>{this.rightArm.rotation.x=0,this.updateNightGear(!0)},120)}setPackageGlow(t,e){Uv(this.packageOrb,e,t)}dashOffset(){this.z+=4}dispose(t){t.remove(this.mesh),t.remove(this.shadow),t.remove(this.footLight);for(const e of this.speedTrails)t.remove(e),e.geometry.dispose(),e.material.dispose();this.speedTrails=[],qe(this.mesh),this.shadow.geometry.dispose(),this.shadow.material.dispose(),this.footLight.geometry.dispose(),this.footLight.material.dispose()}}class zv{constructor(t){P(this,"group");P(this,"units",[]);P(this,"reactTimer",0);P(this,"reactKind","none");P(this,"count",0);this.scene=t,this.group=new Pt,t.add(this.group)}setCount(t){for(this.count=Math.max(0,t);this.units.length<this.count;)this.units.push(this.buildHelper());for(;this.units.length>this.count;){const e=this.units.pop();this.group.remove(e),qe(e)}this.layout()}reactQuake(){this.reactKind="swerve",this.reactTimer=.85}reactTurbo(){this.reactKind="honk",this.reactTimer=.65}buildHelper(){const t=new Pt,e=C("#FF6F00",{emissive:"#E65100",emissiveIntensity:.2}),n=C("#FFCC80");v(t,new bn(.14,.26,4,8),C("#37474F"),0,.38,0),v(t,new bn(.15,.28,4,8),e,0,.52,0),v(t,new N(.22,.18,.1),C("#5D4037"),0,.52,-.1),v(t,new wt(.15,10,8),n,0,.82,.02),v(t,new N(.28,.06,.05),C("#FFD54F"),0,.94,.04);for(const s of[-.05,.05])v(t,new wt(.025,6,6),C("#111"),s,.84,.1);return v(t,new N(.06,.02,.02),C("#FF8A65"),0,.78,.12),this.group.add(t),t}layout(){const t=Math.ceil(Math.sqrt(Math.max(1,this.count)));this.units.forEach((e,n)=>{const s=Math.floor(n/t),r=n%t;e.position.set((r-(t-1)/2)*.55,0,-(s+1)*.58)})}update(t,e,n){this.reactTimer>0&&(this.reactTimer-=.016),this.group.position.set(t,0,e),this.units.forEach((s,r)=>{let a=Math.sin(n*4+r)*.12,o=Math.sin(n*7+r*.6)*.035;this.reactTimer>0&&(this.reactKind==="honk"?(a+=Math.sin(n*22+r)*.18,o+=.04):this.reactKind==="swerve"&&(s.position.x+=Math.sin(n*16+r*2)*.12,s.rotation.z=Math.sin(n*12+r)*.12)),s.rotation.y=a,s.position.y=o,this.reactKind!=="swerve"&&(s.rotation.z=Math.sin(n*5+r)*.04)})}dispose(){for(const t of this.units)qe(t);this.units=[],this.scene.remove(this.group)}}const Hv=[-3.2,-1.6,0,1.6,3.2],kh=.82,pc=[{wire:"#FFD54F",glow:"#80DEEA",core:"#FFFFFF",sparkA:"#FFEB3B",sparkB:"#B2FF59",arc:"#CCFF90",floor:"#FFE082"},{wire:"#EA80FC",glow:"#B388FF",core:"#F3E5F5",sparkA:"#E1BEE7",sparkB:"#CE93D8",arc:"#AB47BC",floor:"#EA80FC"},{wire:"#FFB74D",glow:"#FFCC80",core:"#FFF8E1",sparkA:"#FFE082",sparkB:"#FFAB40",arc:"#FF9800",floor:"#FFCC80"},{wire:"#69F0AE",glow:"#A7FFEB",core:"#E0F7FA",sparkA:"#B9F6CA",sparkB:"#00E676",arc:"#1DE9B6",floor:"#A7FFEB"}];function Gv(i,t){const e=pc[Math.min(Math.max(0,i-1),pc.length-1)];return t==="slide"?{wire:"#E040FB",glow:"#EA80FC",core:"#FCE4EC",sparkA:"#F48FB1",sparkB:"#B388FF",arc:"#CE93D8",floor:"#E1BEE7"}:e}function Vv(i){return i==="full"?7.35:i==="lane-2"?3.25:1.55}function Wv(i){return i.length===0?0:i.reduce((t,e)=>t+e,0)/i.length}function Sn(i,t){return new Lt({color:i,transparent:!0,opacity:t,blending:oe,depthWrite:!1})}function Xv(i,t,e,n){const s=[],r=t*1.05,a=F?1.35:1.65,o=ko();o.repeat.set(r/.35,1);const l=v(i,new Yt(r,a),C("#3d4650",{roughness:.96,metalness:.04}),0,.004,0,!1);l.rotation.x=-Math.PI/2;const c=v(i,new Yt(r*.94,a*.72),C("#FFFFFF",{map:o,transparent:!0,opacity:F?.55:.68,roughness:.85,emissive:e.floor,emissiveIntensity:.08,depthWrite:!1}),0,.006,0,!1);if(c.rotation.x=-Math.PI/2,c.userData.isFloorRing=!0,s.push(c),!F){const h=v(i,new Yt(.28,.28),Sn(e.sparkA,.45),0,.02,0,!1);h.rotation.x=-Math.PI/2,h.userData.isChevron=!0}for(let h=0;h<(F?2:3);h++){const u=(h-1)*(r*.32),d=v(i,new ot(.025,.032,.22,4),C("#FFC107",{emissive:"#FF9800",emissiveIntensity:.35,roughness:.65}),u,.11,a*.38);d.userData.isWarningPost=!0}return s}function qv(i,t,e,n,s){const a=n==="jump"?1.35:2.85,o=F?8:12;v(i,new ot(.11,.14,a,o),C("#37474F",{metalness:.72,roughness:.28}),t,a/2,0),v(i,new ot(.16,.2,.18,o),C("#546E7A",{metalness:.85,roughness:.2,emissive:s.wire,emissiveIntensity:.35}),t,a-.08,0);const l=v(i,new Ls(.11,0),C(s.core,{emissive:s.glow,emissiveIntensity:.85,metalness:.4,roughness:.2}),t,e,.08);l.userData.isCore=!0,l.userData.corePhase=t;for(let c=0;c<3;c++){const h=v(i,new Ye(.14+c*.05,.012,6,o),Sn(s.glow,.45-c*.08),t,e-.15+c*.12,.06,!1);h.rotation.x=Math.PI/2,h.userData.isPillarRing=!0,h.userData.ringPhase=c+t}}function Yv(i,t,e,n,s){i.userData.spinSign=s,i.userData.spinAxis=n?"z":"y";const r=F?2:3;for(let o=0;o<r;o++){const l=new Pt;i.add(l),l.rotation.z=o/r*Math.PI*2,v(l,new N(t,.06,.06),C("#263238",{metalness:.8,roughness:.25,emissive:e.wire,emissiveIntensity:.45}),t/2,0,0);const c=v(l,new wt(.07,F?6:8,F?6:8),Sn(e.sparkA,.85),t,0,0,!1);c.userData.isArmTip=!0;const h=v(l,new Yt(t*.85,.14),Sn(e.glow,.28),t*.42,0,0,!1);h.userData.isArmTrail=!0,n?h.rotation.y=Math.PI/2:h.rotation.x=Math.PI/2}const a=v(i,new wt(.09,8,8),Sn(e.core,.75),0,0,0,!1);a.userData.isHubGlow=!0}function $v(i,t,e,n,s){const r=F?10:14,a=v(i,new ot(s?.055:.072,s?.055:.072,t,r),C("#111820",{metalness:.9,roughness:.15,emissive:n.wire,emissiveIntensity:s?.35:.55}),0,e,0);a.rotation.z=Math.PI/2;const o=v(i,new ot(s?.095:.12,s?.095:.12,t-.02,r),Sn(n.glow,s?.42:.58),0,e,0,!1);o.rotation.z=Math.PI/2;const l=v(i,new ot(.025,.025,t-.08,6),Sn(n.core,.9),0,e,.02,!1);return l.rotation.z=Math.PI/2,l.userData.isCoreBeam=!0,{barrierMesh:a,glowMesh:o}}function jv(i,t,e,n){const s=[],r=F?3:5,a=t/2;for(let o=0;o<r;o++){const l=v(i,new Ye(.11,.018,6,F?8:12),Sn(o%2===0?n.sparkA:n.sparkB,.55),-a+o/(r-1||1)*t,e,.04,!1);l.rotation.y=Math.PI/2,l.userData.isOrbitRing=!0,l.userData.orbitPhase=o*1.7,l.userData.orbitHalf=a,s.push(l)}return s}function Zv(i,t,e,n){const s=[],r=t/2,a=F?6:10;for(let l=0;l<a;l++){const c=a>1?l/(a-1):.5,h=-r+.2+c*(t-.4),u=v(i,new wt(.022+l%3*.01,6,6),Sn(l%2===0?n.sparkA:n.sparkB,.75),h,e+l%2*.06-.03,(l%3-1)*.05,!1);u.userData.isSpark=!0,u.userData.sparkPhase=l,u.userData.baseY=u.position.y,s.push(u)}const o=F?3:5;for(let l=0;l<o;l++){const c=v(i,new Yt(.35,.07),Sn(n.arc,.5),-r*.7+l*(t/(o-.5||1)),e-.14,.08,!1);c.userData.isArc=!0,c.userData.sparkPhase=l+.5,s.push(c)}return s}function Jv(i,t,e,n,s){const r=[],a=n==="jump";for(const o of[-1,1]){const l=new Pt;l.position.set(o*t*.55,e+(a?.55:-.35),.15),i.add(l),v(l,new N(.42,.42,.04),C("#263238",{metalness:.7,emissive:s.wire,emissiveIntensity:.4}),0,0,0);const c=v(l,new en(.12,.22,4),Sn(s.core,.9),0,a?.08:-.08,.04,!1);a||(c.rotation.x=Math.PI),c.userData.isWarningArrow=!0,l.userData.isWarningGlyph=!0,l.userData.glyphPhase=o,r.push(l)}return r}function Kv(i,t,e,n){const s=new Pt;i.add(s);const r=e==="jump",a=r?.48:1.82,o=t/2,l=Xv(s,t,n);for(const _ of[-o,o])qv(s,_,a,e,n);const{barrierMesh:c,glowMesh:h}=$v(s,t,a,n,r),u=[];for(const _ of[-o,o]){const m=new Pt;m.position.set(_,a,0),s.add(m),Yv(m,Math.min(o*.55,1.35),n,r,_<0?1:-1),u.push(m)}const d=jv(s,t,a,n),p=Zv(s,t,a,n),g=Jv(s,o,a,e,n);return{assembly:s,barrierMesh:c,glowMesh:h,sparks:p,rotors:u,orbitRings:d,floorPulse:l,warningGlyphs:g}}function lr(i,t,e){const{span:n,clearance:s,motion:r="static",district:a=1}=e;let o=e.lanes??[];n==="full"?o=[...Hv]:o.length===0&&(o=[0]);const l=n==="full"?0:Wv(o),c=Vv(n),h=Gv(a,s),u=new Pt;u.position.set(0,0,t);const d=Kv(u,c,s,h);return d.assembly.position.x=r==="sweep"?Math.random()<.5?-5.2:5.2:l,i.add(u),{mesh:u,barAssembly:d.assembly,z:t,x:l,span:n,clearance:s,motion:r,laneXs:o,resolved:!1,penalized:!1,barrierMesh:d.barrierMesh,glowMesh:d.glowMesh,sparks:d.sparks,rotors:d.rotors,orbitRings:d.orbitRings,floorPulse:d.floorPulse,warningGlyphs:d.warningGlyphs,sweepStarted:!1,sweepTelegraphed:!1,sweepT0:0,sweepDir:Math.random()<.5?1:-1,styleAwarded:!1}}function Qv(i,t){const e=i.clearance==="slide",n=i.motion==="sweep"&&i.sweepTelegraphed&&!i.sweepStarted?.45:0,s=.5+Math.sin(t*8+i.z*.2)*.5,r=i.glowMesh.material;r.opacity=(e?.52:.42)+s*.18+n;const a=i.barrierMesh.material;a.emissiveIntensity=(e?.45:.28)+Math.abs(Math.sin(t*11+i.z*.3))*.4+n*.6;const o=(e?2.8:3.6)+n*2;for(const l of i.rotors){const c=l.userData.spinSign??1;l.userData.spinAxis==="y"?l.rotation.y=c*t*o:l.rotation.z=c*t*o}for(const l of i.orbitRings){const c=l.userData.orbitPhase??0,h=l.userData.orbitHalf??2;l.position.x=Math.sin(t*2.2+c)*h*.85,l.rotation.x=Math.PI/2+Math.sin(t*3+c)*.35,l.rotation.z=t*1.5+c;const u=l.material;u.opacity=.35+Math.abs(Math.sin(t*5+c))*.35+n*.3}for(const l of i.floorPulse){const c=l.material;c.opacity=(F?.48:.58)+s*.22+n*.2,l.scale.setScalar(1+s*.03+n*.05)}for(const l of i.warningGlyphs){const c=l.userData.glyphPhase??0;l.position.y+=Math.sin(t*4+c)*8e-4,l.rotation.y=Math.sin(t*2+c)*.12}i.barAssembly.traverse(l=>{if(!(l instanceof ie))return;const c=l.userData.sparkPhase??l.userData.corePhase??0;if(l.userData.isCore){l.rotation.y=t*2.5,l.rotation.x=Math.sin(t*3+c)*.4;const h=l.material;h.emissiveIntensity=.75+s*.45+n*.4,l.scale.setScalar(1+s*.12)}if(l.userData.isPillarRing&&(l.rotation.z=t*(1.5+c*.1)),l.userData.isCoreBeam){const h=l.material;h.opacity=.65+s*.35}if(l.userData.isArmTip){const h=l.material;h.opacity=.55+Math.abs(Math.sin(t*18+c))*.45,l.scale.setScalar(1+Math.sin(t*12+c)*.2)}if(l.userData.isArmTrail){const h=l.material;h.opacity=.15+Math.abs(Math.sin(t*10+c))*.25}if(l.userData.isSpark){const h=l.material;h.opacity=.35+Math.abs(Math.sin(t*16+c*2.1))*.55+n*.3,l.position.y=l.userData.baseY+Math.sin(t*20+c)*.025}if(l.userData.isArc){const h=l.material;h.opacity=.12+Math.abs(Math.sin(t*9+c*1.7))*.48+n*.35,l.scale.x=.6+Math.abs(Math.sin(t*13+c))*.65,l.rotation.z=Math.sin(t*6+c)*.45}if(l.userData.isChevron){const h=l.material;h.opacity=.35+s*.35}if(l.userData.isWarningArrow){const h=l.material;h.opacity=.6+Math.abs(Math.sin(t*6+c))*.4}})}function t_(i,t){const e=t-i.sweepT0,s=Math.min(1,Math.max(0,e/1.05)),r=s*s*(3-2*s),a=i.sweepDir===1?-5.2:5.2,o=i.sweepDir===1?5.2:-5.2;return a+(o-a)*r}function mc(i,t){if(t.span==="full")return!0;for(const e of t.laneXs)if(Math.abs(i-e)<kh+.12)return!0;return!1}function e_(i,t,e,n){for(const s of i){if(s.resolved){s.mesh.visible=!1;continue}if(ii(s.z,e,F?48:60)){if(s.motion==="sweep"){const r=s.z-e;r<16&&r>0&&!s.sweepTelegraphed&&(s.sweepTelegraphed=!0,n==null||n(s)),r<8&&r>-2&&!s.sweepStarted&&(s.sweepStarted=!0,s.sweepT0=t),s.sweepStarted&&(s.barAssembly.position.x=t_(s,t))}Qv(s,t)}}}function gc(i,t){for(const e of i)t.remove(e.mesh),qe(e.mesh)}function n_(i){return i.motion==="sweep"&&i.sweepStarted?i.barAssembly.position.x:i.x}function i_(i,t,e){const n=new Pt;n.position.set(0,0,t);const r=_c(2.35,e==="left"),a=_c(-2.35,e==="right");n.add(r.panel,a.panel);const o=v(n,new N(.18,3.5,.12),C("#37474F",{roughness:.8}),0,1.75,.05);return i.add(n),{kind:"route",mesh:n,z:t,safeSide:e,resolved:!1,leftMesh:r.panel,rightMesh:a.panel,leftPortal:r.portal,rightPortal:a.portal,leftLabel:r.label,rightLabel:a.label,centerWall:o,animTime:0}}function s_(i,t){const e=new Pt;e.position.set(0,0,t);const n=F?12:20,s=v(e,new ot(3.4,3.55,.12,n),new ye({color:"#B0BEC5",roughness:.88,metalness:.08,emissive:"#ECEFF1",emissiveIntensity:.06}),0,.07,0),r=v(e,new nn(2.85,3.15,n),new Lt({color:"#4FC3F7",transparent:!0,opacity:.35,side:fe}),0,.13,0,!1);r.rotation.x=-Math.PI/2;const a=v(e,new nn(1.2,1.35,n),new Lt({color:"#FFFFFF",transparent:!0,opacity:.42,side:fe}),0,.135,0,!1);a.rotation.x=-Math.PI/2;const o=[r,a];for(const[d,p]of[[-2.6,0],[2.6,0]]){v(e,new N(.1,1.85,.1),C("#546E7A",{metalness:.55,roughness:.35}),d,.92,p),v(e,new N(.22,.14,.14),C("#78909C",{metalness:.6,roughness:.3}),d,1.88,p);const g=v(e,new wt(.08,8,8),C("#E3F2FD",{emissive:"#81D4FA",emissiveIntensity:.35}),d,1.98,p);g.userData.isLamp=!0}v(e,new N(.55,.75,.38),C("#1565C0",{metalness:.35,roughness:.45,emissive:"#0D47A1",emissiveIntensity:.12}),0,.48,-1.1),v(e,new N(.48,.08,.02),C("#FFFFFF",{emissive:"#FFFFFF",emissiveIntensity:.15}),0,.62,-.9);const l=v(e,new ot(.04,1.1,3.2,n,1,!0),new Lt({color:"#81D4FA",transparent:!0,opacity:.06,side:fe,depthWrite:!1,blending:oe}),0,1.65,0,!1),c=yc("DROP OFF","#FFFFFF","rgba(13,71,161,0.88)");c.position.set(0,2.35,-.85),c.scale.set(3.8,.85,1),e.add(c);const h=yc("Deliver here to win","#B3E5FC","rgba(0,0,0,0.45)");h.position.set(0,1.85,-.85),h.scale.set(3.2,.55,1),e.add(h);const u=new Zi("#E3F2FD",F?.35:.45,12,2);return u.position.set(0,2.2,.5),e.add(u),i.add(e),{kind:"dropoff",mesh:e,z:t,reached:!1,platform:s,rings:o,beam:l,holoSign:c}}const xa={},Ma={};function r_(i){const t=i?"safe":"die";if(xa[t])return xa[t];const e=256,n=document.createElement("canvas");n.width=e,n.height=e;const s=n.getContext("2d"),r=e/2,a=e/2;s.fillStyle="#000000",s.fillRect(0,0,e,e);const o=s.createRadialGradient(r,a,0,r,a,e*.48);o.addColorStop(0,i?"#000810":"#120008"),o.addColorStop(.22,i?"#003328":"#3a0018"),o.addColorStop(.55,i?"#00C853":"#D50000"),o.addColorStop(.78,i?"#004D40":"#4A0020"),o.addColorStop(1,"#000000"),s.fillStyle=o,s.fillRect(0,0,e,e);for(let c=0;c<6;c++){s.beginPath(),s.strokeStyle=i?"rgba(105,240,174,0.75)":"rgba(255,82,82,0.78)",s.lineWidth=c%2===0?4:2.5;for(let h=0;h<140;h++){const u=c*(Math.PI/3)+h*.105,d=6+h*.82,p=r+Math.cos(u)*d,g=a+Math.sin(u)*d;h===0?s.moveTo(p,g):s.lineTo(p,g)}s.stroke()}s.globalCompositeOperation="lighter";for(let c=0;c<6;c++){s.beginPath(),s.strokeStyle=i?"rgba(178,255,89,0.35)":"rgba(255,138,128,0.38)",s.lineWidth=8;for(let h=0;h<90;h++){const u=c*(Math.PI/3)+h*.105+.4,d=20+h*.82,p=r+Math.cos(u)*d,g=a+Math.sin(u)*d;h===0?s.moveTo(p,g):s.lineTo(p,g)}s.stroke()}s.globalCompositeOperation="source-over";for(let c=0;c<16;c++){const h=c/16*Math.PI*2,u=e*.36+c%2*6,d=r+Math.cos(h)*u,p=a+Math.sin(h)*u;s.fillStyle=i?"rgba(0,229,255,0.55)":"rgba(255,64,129,0.55)",s.beginPath(),s.moveTo(d,p-5),s.lineTo(d+4,p+3),s.lineTo(d-4,p+3),s.closePath(),s.fill()}const l=new Fe(n);return l.colorSpace=ae,xa[t]=l,l}function a_(i){const t=i?"safe":"die";if(Ma[t])return Ma[t];const e=256,n=document.createElement("canvas");n.width=e,n.height=e;const s=n.getContext("2d"),r=e/2,a=e/2;s.clearRect(0,0,e,e);for(let l=0;l<24;l++){const c=l/24*Math.PI*2,h=e*.41,u=r+Math.cos(c)*h,d=a+Math.sin(c)*h;s.save(),s.translate(u,d),s.rotate(c+Math.PI/2),s.strokeStyle=i?"rgba(105,240,174,0.85)":"rgba(255,82,82,0.85)",s.lineWidth=2,s.beginPath(),s.moveTo(0,-7),s.lineTo(5,0),s.lineTo(0,7),s.lineTo(-5,0),s.closePath(),s.stroke(),s.restore()}s.strokeStyle=i?"rgba(0,229,255,0.35)":"rgba(255,64,129,0.35)",s.lineWidth=3,s.beginPath(),s.arc(r,a,e*.43,0,Math.PI*2),s.stroke();const o=new Fe(n);return o.colorSpace=ae,Ma[t]=o,o}function o_(i){const t=new Pt;t.userData.isSafe=i;const e=i?"#00E676":"#FF1744",n=i?"#69F0AE":"#FF5252",s=i?"#00E5FF":"#EA80FC",r=F?24:36,a=r_(i),o=a_(i);v(t,new Ue(1.08,r),new Lt({color:i?"#001a14":"#1a0008",transparent:!0,opacity:.92,depthWrite:!1}),0,0,-.06,!1);const l=F?4:6;for(let g=0;g<l;g++){const _=g/l,m=1-_*.55,f=v(t,new nn(.32*m,.48*m,r),new Lt({color:g%2===0?e:n,transparent:!0,opacity:.22-_*.08,blending:oe,depthWrite:!1,side:fe}),0,0,-.02+_*.04,!1);f.userData.tunnelIndex=g,f.userData.tunnelSpeed=g%2===0?1.6-_*.4:-(1.2-_*.3)}const c=v(t,new Ue(.98,r),new Lt({map:a,transparent:!0,opacity:.92,blending:oe,depthWrite:!1}),0,0,.02,!1);c.userData.portalLayer="vortexA";const h=v(t,new Ue(.82,r),new Lt({map:a,transparent:!0,opacity:.55,blending:oe,depthWrite:!1,color:i?"#B2FF59":"#FF8A80"}),0,0,.05,!1);h.userData.portalLayer="vortexB";const u=v(t,new Ue(1.02,r),new Lt({map:o,transparent:!0,opacity:.78,blending:oe,depthWrite:!1}),0,0,.07,!1);u.userData.portalLayer="runes";for(const g of[-.92,.92]){const _=v(t,new N(.1,1.65,.08),new ye({color:"#263238",metalness:.55,roughness:.35,emissive:e,emissiveIntensity:.25}),g,0,.04);v(_,new N(.04,1.45,.02),new Lt({color:s,transparent:!0,opacity:.65,blending:oe,depthWrite:!1}),g>0?-.03:.03,0,.05,!1),_.userData.portalLayer="pillar"}for(let g=0;g<(F?3:5);g++){const _=v(t,new nn(.88+g*.08,.96+g*.08,r),new Lt({color:g%2===0?n:s,transparent:!0,opacity:.14-g*.02,blending:oe,depthWrite:!1,side:fe}),0,0,.03+g*.004,!1);_.userData.portalLayer="corona",_.userData.coronaIndex=g}const d=v(t,new Ue(.18,F?12:16),new Lt({color:"#FFFFFF",transparent:!0,opacity:.75,blending:oe,depthWrite:!1}),0,0,.09,!1);d.userData.portalLayer="core";const p=F?6:10;for(let g=0;g<p;g++){const _=v(t,new Yt(.08,.42),new Lt({color:s,transparent:!0,opacity:.35,blending:oe,depthWrite:!1,side:fe}),0,0,.08,!1);_.userData.portalLayer="shard",_.userData.shardIndex=g,_.userData.shardCount=p}return t}function vc(i,t,e){const n=1+Math.sin(t*3.8)*.035;i.scale.set(n,n,1);const s=e?"#00E676":"#FF1744",r=e?"#69F0AE":"#FF5252";for(const a of i.children){const o=a.userData,l=o.portalLayer;if(o.tunnelIndex!==void 0){a.rotation.z=t*o.tunnelSpeed;const c=a.material;c.opacity=.2-o.tunnelIndex*.03+Math.sin(t*4+o.tunnelIndex)*.06}if(l==="vortexA"){a.rotation.z=t*1.35;const c=a.material;c.opacity=.78+Math.sin(t*5)*.12}else if(l==="vortexB")a.rotation.z=-t*.95,a.scale.setScalar(.92+Math.sin(t*2.6)*.06);else if(l==="runes"){a.rotation.z=t*.45;const c=a.material;c.opacity=.62+Math.sin(t*6)*.14}else if(l==="core"){const c=1+Math.sin(t*7)*.18;a.scale.set(c,c,1);const h=a.material;h.opacity=.55+Math.sin(t*8)*.25,h.color.set(e?"#E0F7FA":"#FFCDD2")}else if(l==="corona"){a.rotation.z=t*(.6+o.coronaIndex*.15)*(e?1:-1);const c=a.material;c.opacity=.1+Math.sin(t*3.5+o.coronaIndex)*.06}else if(l==="shard"){const c=o.shardIndex,h=o.shardCount,u=t*2.2+c/h*Math.PI*2,d=.52+Math.sin(t*3.5+c*1.7)*.22;a.position.set(Math.cos(u)*d,Math.sin(u)*d,.08+c%3*.012),a.rotation.z=u+Math.PI/2;const p=a.material;p.opacity=.15+Math.abs(Math.sin(t*5+c*2))*.35,p.color.set(c%2===0?r:s)}else l==="pillar"&&(a.rotation.z=Math.sin(t*2+a.position.x)*.02)}}function _c(i,t){const e=new Pt;e.position.set(i,1.85,.08);const n=o_(t);n.scale.set(1.55,1.72,1),e.add(n);const s=l_(t),r=new ie(new Yt(4.15,3.55),new Lt({map:s,transparent:!0,opacity:.94,side:fe,depthWrite:!1,blending:ti}));e.add(r);const a=v(e,new Yt(4.28,3.68),new Lt({color:t?"#69F0AE":"#FF5252",transparent:!0,opacity:.22,blending:oe,depthWrite:!1,side:fe}),0,0,-.02,!1);a.userData.isGateRim=!0;const o=new Pr(new Ro({visible:!1}));return o.position.set(i,3.2,0),{panel:e,portal:n,label:o,rimGlow:a}}function l_(i){const t=document.createElement("canvas");t.width=256,t.height=352;const e=t.getContext("2d"),n=t.width,s=t.height,r=i?"#69F0AE":"#FF5252",a=i?"#00E5FF":"#EA80FC",o=i?"rgba(20,60,40,0.55)":"rgba(60,15,25,0.58)";e.fillStyle=o,e.beginPath(),e.roundRect(16,16,n-32,s-32,18),e.fill();const l=e.createRadialGradient(n/2,s/2,20,n/2,s/2,n*.38);l.addColorStop(0,"rgba(0,0,0,0.88)"),l.addColorStop(.55,"rgba(0,0,0,0.45)"),l.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=l,e.fillRect(0,0,n,s),e.strokeStyle=r,e.lineWidth=6,e.shadowColor=r,e.shadowBlur=14,e.beginPath(),e.roundRect(20,20,n-40,s-40,16),e.stroke(),e.shadowBlur=0,e.lineWidth=2,e.strokeStyle=a,e.beginPath(),e.roundRect(34,34,n-68,s-68,12),e.stroke();for(const[h,u]of[[48,48],[n-48,48],[48,s-48],[n-48,s-48]])e.save(),e.translate(h,u),e.strokeStyle=a,e.lineWidth=3,e.beginPath(),e.moveTo(-12,0),e.lineTo(0,-12),e.lineTo(12,0),e.lineTo(0,12),e.closePath(),e.stroke(),e.beginPath(),e.arc(0,0,16,0,Math.PI*2),e.stroke(),e.restore();e.fillStyle=i?"rgba(105,240,174,0.18)":"rgba(255,82,82,0.18)",e.font="bold 28px Segoe UI, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i?"◆ WARP ◆":"☠ VOID ☠",n/2,s-52);const c=new Fe(t);return c.colorSpace=ae,c}function yc(i,t,e){const n=document.createElement("canvas");n.width=512,n.height=128;const s=n.getContext("2d");s.fillStyle=e,s.beginPath(),s.roundRect(8,8,496,112,14),s.fill(),s.strokeStyle="rgba(255,255,255,0.15)",s.lineWidth=2,s.stroke(),s.fillStyle=t,s.font="bold 72px Segoe UI, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,256,64);const r=new Fe(n);return new Pr(new Ro({map:r,transparent:!0,depthTest:!1}))}function c_(i,t){i.animTime=t;const e=i.safeSide==="left",n=1+Math.sin(t*3.5)*.012;i.leftMesh.scale.set(n,n,n),i.rightMesh.scale.set(n,n,n),vc(i.leftPortal,t,e),vc(i.rightPortal,t,!e);for(const s of[i.leftMesh,i.rightMesh]){const r=s.children.find(a=>a.userData.isGateRim);if(r){const a=r.material,o=s===i.leftMesh?e:!e;a.opacity=.16+Math.sin(t*4.5)*.08,a.color.set(o?"#69F0AE":"#FF5252")}}i.centerWall.visible=!i.resolved}function h_(i,t){i.holoSign.position.y=2.35+Math.sin(t*1.8)*.04,i.holoSign.material.opacity=.92+Math.sin(t*3)*.05;const e=i.beam.material;e.opacity=.04+Math.sin(t*2.5)*.025,i.rings.forEach((n,s)=>{const r=n.material;r.opacity=(s===0?.28:.38)+Math.sin(t*2+s)*.06}),i.mesh.traverse(n=>{if(n instanceof ie&&n.userData.isLamp){const s=n.material;s.emissiveIntensity=.28+Math.sin(t*4+n.position.x)*.12}})}function xc(i,t){t.remove(i),i.traverse(e=>{var n;if(e instanceof ie){e.geometry.dispose();const s=e.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s.dispose()}e instanceof Pr&&((n=e.material.map)==null||n.dispose(),e.material.dispose())})}const u_=new ot(.25,.25,.08,F?10:14),d_=new ye({color:"#FFE082",emissive:"#FFAB00",emissiveIntensity:.72,metalness:.88,roughness:.18});function cr(i,t,e,n=3){const s=[],r=[-3.2,-1.6,0,1.6,3.2],a=F?Math.min(e,3):e;for(let o=0;o<a;o++){const l=r[Math.floor(Math.random()*r.length)],c=new ie(u_,d_);c.rotation.x=Math.PI/2,c.position.set(l,.6,t+o%2*.5),c.frustumCulled=!0,i.add(c),s.push({mesh:c,z:t+o%2*.5,x:l,collected:!1})}return s}function f_(i,t,e,n){for(const s of i){if(s.collected||!ii(s.z,n))continue;s.mesh.rotation.z+=t*3.5,s.mesh.position.y=.6+Math.sin(e*5+s.x)*.12;const r=s.mesh.material;r.emissiveIntensity=.58+Math.sin(e*8+s.x*2)*.28}}function p_(i,t,e,n){let s=0;const r=n*n;for(const a of i){if(a.collected)continue;const o=a.x-t,l=a.z-e;o*o+l*l<r&&(a.collected=!0,a.mesh.visible=!1,s+=5)}return s}function Mc(i,t){for(const e of i)t.remove(e.mesh)}const m_={"1-1":["newsbox-row","dog-fence","mailbox-row","package-spill"],"1-2":["dog-fence","party-tent","lawn-sprinkler","bin-alley"],"1-3":["party-tent","bin-alley","package-spill","hoa-gate"],"1-4":["bin-alley","hoa-gate","newsbox-row","lawn-sprinkler"],"1-5":["hoa-gate","newsbox-row","dog-fence","mailbox-row"],"2-1":["news-stand","food-cart","traffic-barricade","burst-hydrant"],"2-2":["food-cart","alien-beacon","bus-shelter","fallen-sign"],"2-3":["alien-beacon","fallen-sign","checkpoint","traffic-barricade"],"2-4":["fallen-sign","checkpoint","news-stand","burst-hydrant"],"2-5":["checkpoint","news-stand","food-cart","bus-shelter"],"3-1":["cactus-wall","mirage-rock","tumbleweed","sand-drift"],"3-2":["mirage-rock","rockslide","bone-arch","cactus-wall"],"3-3":["rockslide","sand-drift","sun-bleached-wreck","skull-rock"],"3-4":["sand-drift","skull-rock","tumbleweed","rockslide"],"3-5":["skull-rock","cactus-wall","mirage-rock","bone-arch"],"4-1":["fallen-log","temple-rubble","vine-snare","thorn-bramble"],"4-2":["temple-rubble","thorn-bramble","quicksand-pit","fallen-log"],"4-3":["thorn-bramble","flood-wreck","idol-shrine","temple-rubble"],"4-4":["flood-wreck","totem-gate","vine-snare","quicksand-pit"],"4-5":["totem-gate","fallen-log","flood-wreck","idol-shrine"]},Oo={"newsbox-row":{clearHeight:.55,radius:.9,label:"News Boxes"},"dog-fence":{clearHeight:.62,radius:1,label:"Dog Fence"},"party-tent":{clearHeight:.58,radius:1.05,label:"Party Tent"},"bin-alley":{clearHeight:.72,radius:1,label:"Bin Alley"},"hoa-gate":{clearHeight:.88,radius:1.15,label:"HOA Gate"},"mailbox-row":{clearHeight:.52,radius:.88,label:"Mailboxes"},"lawn-sprinkler":{clearHeight:.48,radius:.85,label:"Sprinklers"},"package-spill":{clearHeight:.5,radius:.92,label:"Spilled Packages"},"news-stand":{clearHeight:.68,radius:.95,label:"News Stand"},"food-cart":{clearHeight:.75,radius:1,label:"Food Cart"},"alien-beacon":{clearHeight:.55,radius:.92,label:"Alien Beacon"},"fallen-sign":{clearHeight:.48,radius:.88,label:"Fallen Sign"},checkpoint:{clearHeight:.85,radius:1.12,label:"Checkpoint"},"traffic-barricade":{clearHeight:.65,radius:1,label:"Barricades"},"burst-hydrant":{clearHeight:.55,radius:.9,label:"Burst Hydrant"},"bus-shelter":{clearHeight:.82,radius:1.05,label:"Bus Shelter"},"cactus-wall":{clearHeight:.65,radius:1.05,label:"Cactus Wall"},"mirage-rock":{clearHeight:.52,radius:.95,label:"Mirage Rocks"},rockslide:{clearHeight:.58,radius:1.08,label:"Rockslide"},"sand-drift":{clearHeight:.45,radius:.9,label:"Sand Drift"},"skull-rock":{clearHeight:.62,radius:1.05,label:"Skull Rock"},tumbleweed:{clearHeight:.42,radius:.88,label:"Tumbleweed"},"bone-arch":{clearHeight:.72,radius:1,label:"Bone Arch"},"sun-bleached-wreck":{clearHeight:.55,radius:.98,label:"Sun-Bleached Wreck"},"fallen-log":{clearHeight:.55,radius:1,label:"Fallen Log"},"temple-rubble":{clearHeight:.6,radius:1.02,label:"Temple Rubble"},"thorn-bramble":{clearHeight:.68,radius:.95,label:"Thorn Bramble"},"flood-wreck":{clearHeight:.5,radius:.98,label:"Flood Wreck"},"totem-gate":{clearHeight:.9,radius:1.15,label:"Totem Gate"},"vine-snare":{clearHeight:.62,radius:.95,label:"Vine Snare"},"quicksand-pit":{clearHeight:.38,radius:.95,label:"Quicksand"},"idol-shrine":{clearHeight:.78,radius:1.02,label:"Idol Shrine"}},g_=["newsbox-row","dog-fence","mailbox-row","package-spill"];function Bh(i){return m_[i]??g_}function v_(i){const t=Bh(i);return t[Math.floor(Math.random()*t.length)]}function __(i){return Bh(i).map(t=>Oo[t].label).join(" · ")}function y_(i,t,e,n){const s=new Pt;s.position.set(e,.02,n),qg(s,t),i.add(s);const r=Oo[t];return{mesh:s,x:e,z:n,kind:t,radius:r.radius,hit:!1}}function x_(i){return Oo[i].clearHeight}function M_(i,t){i.userData.baseEmissiveIntensity===void 0&&(i.userData.baseEmissiveIntensity=i.emissiveIntensity);const e=i.userData.baseEmissiveIntensity;t>.08&&!i.transparent?(i.emissive.set("#FFF3E0"),i.emissiveIntensity=e+t*.18):i.emissiveIntensity=e}function b_(i,t,e,n=0){for(const s of i)s.hit||!ii(s.z,e)||(s.mesh.traverse(r=>{if(!(r instanceof ie))return;const a=r.userData.bobPhase??0,o=r.userData.blinkPhase??0;if(r.userData.isGlow){r.rotation.z=t*.25+s.x;const l=r.material;if(l.opacity!==void 0){const c=.32+Math.sin(t*2.5+s.z)*.1;l.opacity=c}}if(r.userData.isBob&&(r.position.y=r.userData.baseY??r.position.y,r.userData.baseY===void 0&&(r.userData.baseY=r.position.y),r.position.y=r.userData.baseY+Math.sin(t*3+s.z+a)*.05),r.userData.isBlink){const l=r.material;l.emissiveIntensity!==void 0&&(r.userData.baseEmissiveIntensity===void 0&&(r.userData.baseEmissiveIntensity=l.emissiveIntensity),l.emissiveIntensity=r.userData.baseEmissiveIntensity+.22+Math.sin(t*4+o)*.12+n*.35)}r.material instanceof ye&&!r.userData.isBlink&&!r.userData.isHazardPad&&M_(r.material,n),r.userData.isSpin&&(r.rotation.y=t*2+a)}),s.mesh.position.y=Math.sin(t*2.5+s.x*.5)*.012)}function bc(i,t){for(const e of i)t.remove(e.mesh),qe(e.mesh)}function S_(i,t,e,n=3.5){const s=[],r=[-3.2,-1.6,0,1.6,3.2];for(let a=0;a<e;a++){const o=r[Math.floor(Math.random()*r.length)],l=t+a%3*.6,c=a*1.2+Math.random(),h=Ir("pickup");h.group.position.set(o,0,l),i.add(h.group),s.push({mesh:h.group,x:o,z:l,collected:!1,bobPhase:c})}return s}function w_(i,t,e){for(const n of i)n.collected||!ii(n.z,e,F?55:75)||(n.mesh.position.x=n.x,n.mesh.position.z=n.z,Ih(n.mesh,t,n.bobPhase,!0))}function E_(i,t,e,n){let s=0,r=0;for(const a of i){if(a.collected)continue;const o=a.x-t,l=a.z-e;o*o+l*l<n*n&&(a.collected=!0,a.mesh.visible=!1,a.golden?r++:s++)}return{packages:s,golden:r}}function T_(i){const t=new ie(new Yt(.08,.35),new Lt({color:"#00E5FF",transparent:!0,opacity:.55,blending:oe,depthWrite:!1,side:fe}));return t.rotation.x=-Math.PI/2,t.position.set(0,-.05,-.2),i.add(t),t}const A_={core:"#FFD54F",mid:"#FFC107",glow:"#FFEB3B",particle:"#FFFDE7",shell:"#FF8F00",ribbon:"#FFFFFF"};function C_(i,t,e){const n=Ir("pickup",A_);return n.group.position.set(t,.35,e),n.group.scale.setScalar(1.25),n.outerGlow&&(n.outerGlow.material.opacity=.55),i.add(n.group),{mesh:n.group,x:t,z:e,collected:!1,bobPhase:Math.random()*6,golden:!0}}function Sc(i,t,e,n,s,r,a={}){const o=Ir("mail",Rv);o.group.position.set(t+.35,1.05,e+.2);const l=o.core;l.material.emissiveIntensity=1.1,o.outerGlow&&(o.outerGlow.material.opacity=.35),i.add(o.group);const c=new I(n-t,0,s-e).normalize(),h=a.spreadIndex??0;if(h!==0){const p=h*.14,g=Math.cos(p),_=Math.sin(p),m=c.x*g-c.z*_,f=c.x*_+c.z*g;c.set(m,0,f)}const u=new I(c.x*28,2,c.z*28),d=T_(o.group);return{mesh:o.group,velocity:u,life:.85,damage:r,bobPhase:Math.random()*6,kind:"mail",pierceLeft:a.pierceLeft??0,homing:a.homing??!1,trail:d}}function wc(i,t,e,n=0,s=[],r=1){const a=[];for(const o of i){if(o.homing&&s.length){let l=null,c=1/0;for(const h of s){if(!h.alive)continue;const u=h.z-o.mesh.position.z;if(u<-2||u>45)continue;const d=(h.x-o.mesh.position.x)**2+u*u;d<c&&(c=d,l=h)}if(l){const h=new I(l.x-o.mesh.position.x,0,l.z-o.mesh.position.z);if(h.lengthSq()>.01){h.normalize().multiplyScalar(16*t*r),o.velocity.x+=h.x,o.velocity.z+=h.z;const u=Math.min(32,Math.hypot(o.velocity.x,o.velocity.z)),d=new I(o.velocity.x,0,o.velocity.z).normalize();o.velocity.x=d.x*u,o.velocity.z=d.z*u}}}o.life-=t,o.velocity.y-=o.kind==="mail"?8*t:28*t,o.mesh.position.addScaledVector(o.velocity,t),o.mesh.rotation.x+=t*(o.kind==="mail"?12:8),o.mesh.rotation.z+=t*(o.kind==="mail"?10:6),o.trail&&(o.trail.material.opacity=.35+Math.sin(n*20)*.15),Ih(o.mesh,n+o.bobPhase,o.bobPhase,!1),o.life>0&&o.mesh.position.y>.1?a.push(o):(e.remove(o.mesh),Uh(o.mesh))}return a}function Ec(i,t){for(const e of i)t.remove(e.mesh),Uh(e.mesh)}const Er=F?6:8,R_={grunt:["alien","monkey","frog"],raider:["bull","fox","cat"],boss:["bull","alien","frog"]};function P_(i,t,e=.08){return C(i,{emissive:t,emissiveIntensity:e,roughness:.92,metalness:0})}function Tc(i,t,e,n,s,r){const a=new Pt;return a.position.set(t*.34*e,s,0),v(a,new ot(.07*e,.075*e,.22*e,Er),n,0,-.11*e,0),v(a,new ot(.065*e,.07*e,.18*e,Er),n,0,-.3*e,0),v(a,new N(.11*e,.08*e,.1*e),r??n,0,-.42*e,0),i.add(a),a}function Ac(i,t,e,n,s){const r=new Pt;return r.position.set(t*.14*e,.02*e,0),v(r,new ot(.08*e,.085*e,.2*e,Er),n,0,-.1*e,0),v(r,new ot(.075*e,.08*e,.16*e,Er),n,0,-.28*e,0),v(r,new N(.14*e,.07*e,.2*e),s,0,-.4*e,.03*e),i.add(r),r}function Cc(i,t,e){v(i,new N(.34*t*e,.2*t*e,.16*t*e),C("#D4B896",{roughness:.95}),0,-.06*t,.2*t)}function Rc(i,t,e){const n=C("#0A0A0A",{emissive:e,emissiveIntensity:.35,roughness:1});for(const s of[-1,1]){const r=v(i,new N(.13*t,.17*t,.035*t),n,s*.11*t,.07*t,.24*t);r.rotation.z=s*.12,v(i,new N(.035*t,.035*t,.02*t),C("#FFFFFF",{roughness:1}),s*.14*t,.1*t,.27*t)}}function ys(i,t,e=.1){return v(i,new N(e*t,.025*t,.02*t),C("#1A1A1A",{roughness:1}),0,-.02*t,.28*t)}function F_(i,t,e,n){const s=n==="boss"?1.3:1;switch(e){case"alien":return Cc(i,t,s),Rc(i,t,"#76FF03"),ys(i,t);case"monkey":{v(i,new N(.36*t,.14*t,.12*t),C("#FFCC80",{roughness:.95}),0,-.04*t,.22*t);for(const r of[-1,1])v(i,new N(.12*t,.08*t,.04*t),C("#3E2723",{roughness:1}),r*.11*t,.12*t,.25*t),v(i,new N(.08*t,.06*t,.03*t),C("#FFFFFF"),r*.11*t,.1*t,.27*t);return ys(i,t,.08)}case"bull":{Cc(i,t,s*.9),v(i,new N(.4*t,.09*t,.06*t),C("#212121",{emissive:"#000",emissiveIntensity:.2,roughness:.7}),0,.08*t,.26*t);for(const r of[-1,1]){const a=v(i,new N(.08*t,.22*t,.08*t),C("#ECEFF1"),r*.2*t,.48*t,0);a.rotation.z=r*-.35}return ys(i,t,.09)}case"cat":{v(i,new N(.32*t,.12*t,.1*t),C("#ECEFF1",{roughness:.95}),0,-.03*t,.22*t);for(const r of[-1,1]){const a=v(i,new N(.1*t,.12*t,.06*t),C("#78909C"),r*.18*t,.42*t,0);a.rotation.z=r*.25,v(i,new N(.09*t,.11*t,.03*t),C("#FFEB3B",{emissive:"#FBC02D",emissiveIntensity:.25}),r*.11*t,.08*t,.25*t),v(i,new N(.02*t,.07*t,.02*t),C("#111"),r*.11*t,.08*t,.27*t)}return ys(i,t,.06)}case"fox":{v(i,new N(.34*t,.16*t,.14*t),C("#FFF3E0",{roughness:.95}),0,-.05*t,.21*t),Rc(i,t,"#FF7043");for(const r of[-1,1]){const a=v(i,new N(.1*t,.14*t,.05*t),C("#FF7043"),r*.2*t,.44*t,-.02*t);a.rotation.z=r*.3}return v(i,new N(.05*t,.05*t,.03*t),C("#212121"),0,-.01*t,.29*t),ys(i,t,.07)}case"frog":{for(const r of[-1,1])v(i,new N(.14*t,.14*t,.12*t),C("#FFFFFF",{roughness:1}),r*.13*t,.38*t,.02*t),v(i,new N(.07*t,.07*t,.04*t),C("#111"),r*.13*t,.38*t,.09*t);return v(i,new N(.22*t,.08*t,.08*t),C("#388E3C",{roughness:.9}),0,-.04*t,.24*t),v(i,new N(.16*t,.04*t,.03*t),C("#2E7D32"),0,-.06*t,.28*t)}}}function D_(i){switch(i){case"monkey":return{skin:"#FF9800",emissive:"#F57C00",belly:"#FFF8E1",shoe:"#5D4037",paw:"#FFCC80"};case"bull":return{skin:"#795548",emissive:"#FF1744",shoe:"#3E2723"};case"cat":return{skin:"#90A4AE",emissive:"#FFC107",belly:"#ECEFF1",shoe:"#FFFFFF",paw:"#FFFFFF"};case"fox":return{skin:"#FF7043",emissive:"#FF5722",belly:"#FFF3E0",shoe:"#FFFFFF",paw:"#FFFFFF"};case"frog":return{skin:"#66BB6A",emissive:"#00E676",belly:"#A5D6A7",shoe:"#33691E"};default:return{skin:"#B8E986",emissive:"#76FF03",belly:"#E8F5C8",shoe:"#2E2E2E"}}}function L_(i,t,e,n,s){if(e==="grunt"&&n==="alien"&&v(i,new N(.18*t,.2*t,.14*t),C("#FF8F00",{emissive:"#FF6F00",emissiveIntensity:.25}),-.32*t,.48*t,-.06*t),e==="raider"&&(v(i,new N(.05*t,.05*t,.42*t),C("#00E5FF",{emissive:"#00B0FF",emissiveIntensity:.9}),.36*t,.38*t,.12*t),n==="bull"&&v(s,new N(.44*t,.1*t,.06*t),C("#E53935",{emissive:"#B71C1C",emissiveIntensity:.35}),0,.22*t,.24*t)),e==="boss"){for(const r of[-1,0,1])v(s,new N(.08*t,.14*t,.08*t),C("#FFD54F",{emissive:"#FFA000",emissiveIntensity:.5,metalness:.3}),r*.12*t,.48*t,0);v(i,new N(.62*t,.48*t,.06*t),C("#4A148C",{emissive:"#311B92",emissiveIntensity:.15,roughness:.9}),0,.44*t,-.18*t)}}function I_(i,t,e="grunt"){const n=new Pt,s=D_(i),r=P_(s.skin,s.emissive,e==="boss"?.16:.1),a=C(s.shoe,{roughness:.9}),o=s.paw?C(s.paw,{roughness:.92}):r;v(n,new N(.46*t,.44*t,.3*t),r,0,.42*t,0),s.belly&&v(n,new N(.38*t,.28*t,.08*t),C(s.belly,{roughness:.95}),0,.38*t,.14*t);const l=new Pt;l.position.y=.72*t,n.add(l),v(l,new N(.48*t,.46*t,.42*t),r,0,.2*t,0);const c=F_(l,t,i,e);L_(n,t,e,i,l);const h={leftArm:Tc(n,-1,t,r,.58*t,o),rightArm:Tc(n,1,t,r,.58*t,o),leftLeg:Ac(n,-1,t,r,a),rightLeg:Ac(n,1,t,r,a),mouth:c,head:l};return n.userData={limbs:h,bobPhase:Math.random()*6,species:i},n}function U_(i){const t=R_[i];return t[Math.floor(Math.random()*t.length)]}function N_(i,t,e){const n=i.userData;if(!(n!=null&&n.limbs))return;const{limbs:s,bobPhase:r,species:a}=n,o=t*11+r,l=.65,c=a==="frog"?1.25:1;s.leftArm.rotation.x=Math.sin(o)*l,s.rightArm.rotation.x=-Math.sin(o)*l,s.leftLeg.rotation.x=-Math.sin(o)*l*.75,s.rightLeg.rotation.x=Math.sin(o)*l*.75,s.head&&(s.head.rotation.y=Math.sin(t*2.2+r)*.18),s.mouth&&e&&(s.mouth.scale.y=1+Math.abs(Math.sin(t*9+r))*(a==="frog"?.5:.35)),i.position.y=Math.abs(Math.sin(t*9+r))*(.09*c)}const k_={grunt:{scale:1.02,emissive:"#76FF03",speed:10,hp:1,label:"Grunt"},raider:{scale:1.14,emissive:"#FFC107",speed:14,hp:2,label:"Raider"},stalker:{scale:1.28,emissive:"#FF1744",speed:19,hp:3,label:"Stalker"}},B_={grunt:"grunt",raider:"raider",stalker:"boss"};function ba(i,t,e,n,s={}){const r=k_[t],a=!!s.elite,o=!!s.boss,l=o?1.5:a?1.22:1,c=B_[t],h=U_(c),u=new Pt;u.position.set(e,0,n);const d=I_(h,r.scale*l,c);d.rotation.y=Math.PI,u.add(d);const p=.44*r.scale*l,g=v(u,new Ue(p,F?10:14),new Lt({color:"#101018",transparent:!0,opacity:.28,depthWrite:!1}),0,.02,0,!1);g.rotation.x=-Math.PI/2,g.scale.set(1.15,1,.82);let _;(a||o)&&(_=v(u,new nn(p*.88,p*1.02,F?12:18),new Lt({color:o?"#9A7B2F":"#6B5B45",transparent:!0,opacity:o?.2:.12,side:fe,depthWrite:!1}),0,.025,0,!1),_.rotation.x=-Math.PI/2);const m=.55*r.scale*l*2.2,f=v(u,new wt(.07*l,F?6:8,F?6:8),new Lt({color:"#CC4444",transparent:!0,opacity:t==="grunt"?0:.22,depthWrite:!1}),0,m,.06*l,!1);f.visible=t!=="grunt",i.add(u);let x=r.hp+(a?1:0);return o&&(x=8),{mesh:u,x:e,z:n,tier:t,species:h,hp:x,maxHp:x,speed:r.speed*(o?.85:1),baseSpeed:r.speed*(o?.85:1),alive:!0,footShadow:g,eliteRing:_,weakPoint:f,elite:a,isBoss:o,telegraph:0,telegraphT:0}}function O_(i,t,e,n,s,r,a=0){for(const o of i){if(!o.alive)continue;const l=o.z-s,c=ii(o.z,s,F?60:85);if(o.mesh.visible=c,!c)continue;o.tier==="stalker"&&l>2.5&&l<22&&o.telegraph===0&&(o.telegraph=1,o.telegraphT=0,r==null||r(o));let h=o.baseSpeed;const u=o.footShadow.material;if(o.telegraph===1){if(o.telegraphT+=t,h=o.baseSpeed*.35,u.color.set("#4a1520"),u.opacity=.34+Math.sin(e*16)*.1,o.eliteRing){const p=o.eliteRing.material;p.color.set("#8B3030"),p.opacity=.28+Math.sin(e*16)*.08}o.telegraphT>=.55&&(o.telegraph=2,o.telegraphT=0)}else if(o.telegraph===2)o.telegraphT+=t,h=o.baseSpeed*2.4,u.color.set("#101018"),u.opacity=.32,o.telegraphT>=.45&&(o.telegraph=0);else if(u.color.set("#101018"),u.opacity=.24+(o.elite||o.isBoss?.06:0),o.eliteRing){const p=o.eliteRing.material;p.color.set(o.isBoss?"#9A7B2F":"#6B5B45"),p.opacity=(o.isBoss?.18:.1)+Math.sin(e*3+o.z)*.04}o.z-=h*t*n,o.mesh.position.set(o.x,0,o.z);const d=o.mesh.children[0];if(d&&(N_(d,e+o.x,!0),o.telegraph===1?d.scale.setScalar(1+Math.sin(e*20)*.06):d.scale.setScalar(1),d.rotation.y=Math.PI+(F?0:Math.sin(e*3+o.x)*.08)),o.weakPoint.visible){const p=o.weakPoint.material;p.opacity=o.telegraph===1?.38:.16+Math.sin(e*6+o.x)*.06}d&&d.traverse(p=>{if(!(p instanceof ie)||!(p.material instanceof ye))return;p.userData.baseEmissiveIntensity===void 0&&(p.userData.baseEmissiveIntensity=p.material.emissiveIntensity);const g=p.userData.baseEmissiveIntensity;a>.08&&!p.material.transparent?(p.material.emissive.set("#FFF3E0"),p.material.emissiveIntensity=g+a*.18):p.material.emissiveIntensity=g})}}function Sa(i){const t=Math.random();return i>=7&&t<.25?"stalker":i>=4&&t<.45?"raider":"grunt"}function z_(i){return i==="stalker"?1.18:i==="raider"?1.05:.95}function H_(i,t){if(t.tier==="grunt")return!1;const e=t.weakPoint.position.y;return i>=e-.12}function wa(i,t){t.remove(i.mesh),qe(i.mesh),i.alive=!1}function Pc(i,t){for(const e of i)t.remove(e.mesh),qe(e.mesh)}const Ea=[{root:262,scale:[0,2,4,7,9],melody:[0,2,4,2,0,4,7,4,2,0,4,2,0,9,7,4],bass:[0,0,7,7,4,4,7,0],lead:"triangle",bpm:128},{root:247,scale:[0,2,3,7,9],melody:[4,2,0,2,4,7,9,7,4,2,0,2,4,7,4,2],bass:[0,4,0,7,4,0,7,4],lead:"square",bpm:132},{root:220,scale:[0,3,5,7,10],melody:[0,3,5,3,0,5,10,5,3,0,5,3,0,10,7,5],bass:[0,0,5,5,3,3,5,0],lead:"sawtooth",bpm:126},{root:196,scale:[0,3,5,8,10],melody:[0,5,8,5,3,0,5,10,8,5,3,0,5,8,10,8],bass:[0,5,3,0,5,8,5,3],lead:"sawtooth",bpm:124}];class G_{constructor(){P(this,"ctx",null);P(this,"masterGain",null);P(this,"sfxGain",null);P(this,"musicGain",null);P(this,"master",F?.38:.44);P(this,"musicVol",F?.11:.13);P(this,"districtId",1);P(this,"night",0);P(this,"combatLayer",0);P(this,"unlocked",!1);P(this,"musicPlaying",!1);P(this,"musicTimer",null);P(this,"step",0);P(this,"nextNoteTime",0);P(this,"themeIdx",0);P(this,"bossMode",!1)}ensure(){var t;if(!this.unlocked){this.unlocked=!0;try{this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.master,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=1,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicVol,this.musicGain.connect(this.masterGain)}catch{return null}}return((t=this.ctx)==null?void 0:t.state)==="suspended"&&this.ctx.resume(),this.ctx}freqFromScale(t,e,n=0){const s=t.scale[(e%t.scale.length+t.scale.length)%t.scale.length]??0;return t.root*Math.pow(2,(s+n*12)/12)}toneAt(t,e,n,s,r,a,o=0,l){const c=this.ctx;if(!c)return;const h=c.createOscillator(),u=c.createGain();if(h.type=s,h.frequency.setValueAtTime(t,e),o&&h.frequency.linearRampToValueAtTime(Math.max(20,t+o),e+n),u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(Math.max(1e-4,r),e+.008),u.gain.exponentialRampToValueAtTime(1e-4,e+n),l){const d=c.createBiquadFilter();d.type="lowpass",d.frequency.value=l,h.connect(d),d.connect(u)}else h.connect(u);u.connect(a),h.start(e),h.stop(e+n+.03)}noiseAt(t,e,n,s,r=0){const a=this.ctx;if(!a)return;const o=Math.max(1,Math.floor(a.sampleRate*e)),l=a.createBuffer(1,o,a.sampleRate),c=l.getChannelData(0);for(let d=0;d<o;d++)c[d]=(Math.random()*2-1)*(1-d/o);const h=a.createBufferSource();h.buffer=l;const u=a.createGain();if(u.gain.setValueAtTime(n,t),u.gain.exponentialRampToValueAtTime(1e-4,t+e),r>0){const d=a.createBiquadFilter();d.type="highpass",d.frequency.value=r,h.connect(d),d.connect(u)}else h.connect(u);u.connect(s),h.start(t),h.stop(t+e+.02)}tone(t,e,n="square",s=.12,r=0,a){const o=this.ensure();!o||!this.sfxGain||this.toneAt(t,o.currentTime,e,n,s,this.sfxGain,r,a)}noise(t,e=.06,n=0){const s=this.ensure();!s||!this.sfxGain||this.noiseAt(s.currentTime,t,e,this.sfxGain,n)}setDistrict(t){this.districtId=t,this.themeIdx=Math.min(Math.max(0,t-1),Ea.length-1),this.bossMode||this.refreshMusic()}startBossMusic(){this.bossMode=!0,this.refreshMusic()}endBossMusic(){this.bossMode&&(this.bossMode=!1,this.refreshMusic())}setNight(t){Math.abs(t-this.night)<.1||(this.night=t)}setCombatIntensity(t){this.combatLayer=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=this.musicVol*(.85+this.combatLayer*.35))}refreshMusic(){this.stopMusic();const t=this.ensure();t&&(this.musicPlaying=!0,this.step=0,this.nextNoteTime=t.currentTime+.08,this.scheduleMusic())}scheduleMusic(){if(!this.musicPlaying)return;const t=this.ctx,e=this.musicGain;if(!t||!e)return;const n=Ea[this.bossMode?2:this.themeIdx]??Ea[0],s=60/(this.bossMode?148:n.bpm)/4,r=.18,a=this.night*.55,o=2400-a*900+this.combatLayer*400;for(;this.nextNoteTime<t.currentTime+r;){const l=this.step,c=this.nextNoteTime,h=l%16;h%4===0&&(this.toneAt(55+(h===0?8:0),c,.09,"sine",.22,e,-18),this.noiseAt(c,.03,.06,e,120)),(h===4||h===12)&&(this.noiseAt(c,.07,.09,e,800),this.toneAt(180,c,.05,"triangle",.05,e,-40)),this.combatLayer>.15&&l%2===1&&this.noiseAt(c,.025,.035*(.5+this.combatLayer),e,6e3);const u=Math.floor(l/2)%n.bass.length,d=n.bass[u]??0,p=n.root*Math.pow(2,(d-12)/12);l%2===0&&this.toneAt(p,c,s*1.8,"triangle",.1,e);const g=l%n.melody.length,_=n.melody[g]??0,m=_>=7?1:0,f=this.freqFromScale(n,_,m),x=(this.bossMode?.058:.045)+(1-a)*.02+this.combatLayer*.012;if(l%1===0&&(g%2===0||this.bossMode)&&this.toneAt(f,c,s*.9,this.bossMode?"square":n.lead,x,e,0,o),this.bossMode&&h%8===4&&this.toneAt(82,c,s*2,"sawtooth",.055,e,-10,420),l%8===0){const S=this.freqFromScale(n,n.melody[g]??0,1);this.toneAt(S,c,s*6,"sine",.018,e,0,900)}this.nextNoteTime+=s,this.step++}this.musicTimer=window.setTimeout(()=>this.scheduleMusic(),28)}stopMusic(){this.bossMode=!1,this.musicPlaying=!1,this.musicTimer!==null&&(clearTimeout(this.musicTimer),this.musicTimer=null)}shootMail(){this.tone(920,.05,"square",.07,-280,3200),this.tone(640,.07,"sine",.05,-120,2400),this.noise(.035,.04,900)}shootPackage(){this.tone(280,.12,"triangle",.09,120),this.noise(.06,.05,200)}alienHit(){this.tone(160+Math.random()*30,.07,"sawtooth",.08,-80,1800),this.noise(.04,.05)}alienKill(){this.tone(520,.06,"square",.09),this.tone(780,.09,"triangle",.07,180),this.noise(.05,.04,400)}headshot(){this.tone(1200,.04,"square",.1),this.tone(880,.07,"triangle",.08,-350),this.tone(660,.1,"sine",.06,-200,4e3)}combo(t){this.tone(440+t*35,.06,"triangle",.08)}comboStinger(){const t=this.ensure();if(!t||!this.sfxGain)return;const e=t.currentTime;[523,659,784,988].forEach((s,r)=>{this.toneAt(s,e+r*.07,.1+r*.02,"triangle",.09-r*.01,this.sfxGain,r===3?100:0,5e3)})}jump(){this.tone(280,.1,"sine",.06,220,1800),this.noise(.05,.035,300)}slide(){this.noise(.12,.07,250),this.tone(120,.1,"sawtooth",.04,-30,600)}coin(t=1){const e=880+Math.min(t,5)*40;this.tone(e,.05,"sine",.07),this.tone(e*1.5,.04,"triangle",.04)}pickup(){this.tone(660,.06,"triangle",.07),this.tone(880,.08,"sine",.06,60)}powerUp(){[523,659,784,988].forEach((t,e)=>{window.setTimeout(()=>this.tone(t,.08,"triangle",.07),e*55)})}hurt(){this.tone(90,.18,"sawtooth",.1,-25),this.tone(140,.12,"square",.07,-40),this.noise(.08,.08)}gatePass(){this.tone(660,.1,"triangle",.07),this.tone(880,.12,"sine",.06)}vaultBuzz(){this.tone(140,.14,"sawtooth",.07,30),this.tone(210,.1,"square",.05,-20)}delivery(){const t=this.ensure();if(!t||!this.sfxGain)return;const e=t.currentTime;[523,659,784,1047].forEach((n,s)=>{this.toneAt(n,e+s*.12,.2,"triangle",.1,this.sfxGain,s===3?80:0,6e3)}),this.noiseAt(e+.45,.15,.05,this.sfxGain,500)}gameOver(){const t=this.ensure();if(!t||!this.sfxGain)return;const e=t.currentTime;[392,330,262,196].forEach((n,s)=>{this.toneAt(n,e+s*.14,.22,"sawtooth",.09,this.sfxGain,-30,1200)}),this.stopMusic()}alienChatter(){Math.random()>.35||this.tone(80+Math.random()*60,.04+Math.random()*.05,"sawtooth",.04,Math.random()*40-20)}telegraphWarn(){this.tone(220,.1,"sawtooth",.05,35),this.tone(180,.08,"triangle",.04)}honk(){this.tone(196,.18,"square",.09),this.tone(247,.14,"square",.07)}ufoBeam(){this.tone(110,.28,"sawtooth",.07,45),this.noise(.2,.06,200),this.tone(880,.1,"sine",.05,-200,3e3)}nearMiss(){this.tone(620,.05,"sine",.06,140),this.noise(.03,.03,2e3)}eliteSpawn(){this.tone(880,.1,"triangle",.08),this.tone(1100,.14,"triangle",.07,80),this.noise(.06,.04,500)}quake(){this.noise(.3,.14),this.tone(55,.35,"sawtooth",.11,-25),this.tone(82,.25,"sine",.07,-15)}turbo(){this.tone(220,.2,"sawtooth",.07,180),this.noise(.12,.05,400)}slideBoost(){this.tone(420,.08,"square",.08,120,2800),this.tone(660,.14,"triangle",.07,80,3200),this.noise(.1,.05,500)}bossShoot(){this.tone(180,.08,"sawtooth",.06,-40),this.noise(.05,.04,300)}bossDefeated(){this.tone(330,.12,"square",.09),this.tone(440,.12,"square",.08,0,80),this.tone(550,.18,"triangle",.1,0,120),this.tone(660,.28,"triangle",.09,0,180),this.noise(.2,.06,200)}spectacle(t){this.noise(.14,.05+this.combatLayer*.04),t==="orbital-flash"?(this.tone(55,.35,"sawtooth",.09,-18),this.tone(110,.2,"sine",.05,40)):t==="dogfight"?(this.tone(220,.08,"square",.06),this.tone(180,.1,"square",.05,-30)):this.tone(130+Math.random()*50,.12,"sawtooth",.05,Math.random()*30)}dispose(){var t;this.stopMusic(),(t=this.ctx)==null||t.close(),this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null}}const Gt=new G_;class V_{constructor(t){P(this,"group",new Pt);P(this,"ufo");P(this,"groundSpot");P(this,"beam");P(this,"ring");P(this,"phase","idle");P(this,"beamX",0);P(this,"beamZ",0);P(this,"timer",0);P(this,"scanDir",1);P(this,"ufoOffsetX",0);P(this,"exposure",0);P(this,"warned",!1);this.scene=t,this.ufo=this.buildUfo(),this.group.add(this.ufo);const e=F?20:28;this.groundSpot=v(this.group,new Ue(1.05,e),new Lt({color:"#69F0AE",transparent:!0,opacity:.55,blending:oe,depthWrite:!1}),0,.04,0,!1),this.groundSpot.rotation.x=-Math.PI/2,this.groundSpot.scale.set(1.15,1.15,1),this.ring=v(this.group,new nn(.92,1.18,e),new Lt({color:"#B2FF59",transparent:!0,opacity:.42,blending:oe,depthWrite:!1,side:fe}),0,.045,0,!1),this.ring.rotation.x=-Math.PI/2,this.beam=v(this.group,new ot(.08,1.05,14,e,1,!0),new Lt({color:"#80DEEA",transparent:!0,opacity:.28,side:fe,depthWrite:!1,blending:oe}),0,7,0,!1),this.group.visible=!1,t.add(this.group)}buildUfo(){const t=new Pt,e=F?10:14;v(t,new ot(.65,1.05,.16,e),new ye({color:"#546E7A",metalness:.65,roughness:.3,emissive:"#00E676",emissiveIntensity:.35}),0,0,0),v(t,new Ye(.88,.04,6,e),new Lt({color:"#69F0AE",transparent:!0,opacity:.85}),0,-.05,0,!1),v(t,new wt(.34,e,e/2,0,Math.PI*2,0,Math.PI/2),new Lt({color:"#80DEEA",transparent:!0,opacity:.65,blending:oe,depthWrite:!1}),0,.14,0,!1);for(let n=0;n<6;n++){const s=n/6*Math.PI*2;v(t,new wt(.05,6,6),new Lt({color:n%2===0?"#FFEB3B":"#FF5252",transparent:!0,opacity:.9}),Math.cos(s)*.78,-.02,Math.sin(s)*.78,!1)}return t}get active(){return this.phase!=="idle"}start(t,e){this.phase="incoming",this.timer=0,this.exposure=0,this.warned=!1,this.beamZ=e+42,this.beamX=$i.clamp(t,-2.5,2.5),this.scanDir=Math.random()<.5?1:-1,this.ufoOffsetX=this.scanDir>0?-14:14,this.group.visible=!0,this.syncPose(0)}syncPose(t){const e=this.beamX+this.ufoOffsetX*(this.phase==="incoming"?1:this.phase==="exit"?1.4:.15),n=14+Math.sin(t*2.2)*.35;this.ufo.position.set(e,n,this.beamZ),this.ufo.rotation.y=t*1.8,this.groundSpot.position.set(this.beamX,.04,this.beamZ),this.ring.position.set(this.beamX,.045,this.beamZ),this.beam.position.set(this.beamX,7,this.beamZ);const s=1+Math.sin(t*8)*.08;this.groundSpot.scale.set(1.15*s,1.15*s,1),this.groundSpot.material.opacity=.4+Math.sin(t*6)*.12,this.ring.material.opacity=.32+Math.sin(t*5+1)*.1,this.ring.rotation.z=t*2.4,this.beam.material.opacity=.22+Math.sin(t*7)*.08}update(t,e,n){if(this.phase!=="idle"){if(this.timer+=t,this.phase==="incoming")this.ufoOffsetX=$i.lerp(this.ufoOffsetX,0,t*1.8),this.timer>=1.6&&(this.phase="scanning",this.timer=0);else if(this.phase==="scanning")this.beamX+=this.scanDir*t*4.2,this.beamX>3.4?(this.beamX=3.4,this.scanDir=-1):this.beamX<-3.4&&(this.beamX=-3.4,this.scanDir=1),this.timer>=4.8&&(this.phase="exit",this.timer=0);else if(this.phase==="exit"&&(this.ufoOffsetX=$i.lerp(this.ufoOffsetX,this.scanDir*18,t*2.5),this.timer>=1.4)){this.end();return}if(Math.abs(this.beamZ-n)>(F?75:95)){this.end();return}this.syncPose(e)}}consumeWarning(){return this.warned||this.phase!=="scanning"||this.timer>.35?!1:(this.warned=!0,!0)}tickExposure(t,e,n,s){if(this.phase!=="scanning")return this.exposure=0,!1;if(s)return this.exposure=Math.max(0,this.exposure-t*4),!1;const r=Math.abs(n-this.beamZ)<2.2,a=Math.abs(e-this.beamX)<1.05;return r&&a?(this.exposure+=t,this.exposure>=.55):(this.exposure=Math.max(0,this.exposure-t*2.5),!1)}getExposure(){return this.exposure}end(){this.phase="idle",this.group.visible=!1,this.exposure=0}dispose(){this.scene.remove(this.group),qe(this.group)}}const W_={slowmo:{core:"#80DEEA",mid:"#00BCD4",glow:"#00E5FF",particle:"#E0F7FA",shell:"#4DD0E1",bad:!1},fastshot:{core:"#FFEB3B",mid:"#FF9800",glow:"#FF6D00",particle:"#FFD54F",shell:"#FF5722",bad:!1},invincible:{core:"#E1F5FE",mid:"#29B6F6",glow:"#00B0FF",particle:"#FFFFFF",shell:"#0288D1",bad:!1},health:{core:"#A5D6A7",mid:"#43A047",glow:"#00E676",particle:"#C8E6C9",shell:"#2E7D32",bad:!1},turbo:{core:"#FF8A65",mid:"#FF3D00",glow:"#FF1744",particle:"#FFAB91",shell:"#D50000",bad:!0},triplefire:{core:"#FFCC80",mid:"#FF6D00",glow:"#FF9100",particle:"#FFE0B2",shell:"#E65100",bad:!1}},Gi=F?10:14,Fc=F?4:6;function Oe(i,t,e=1){return C(i,{emissive:i,emissiveIntensity:t,transparent:e<1,opacity:e,roughness:.15,metalness:.05})}function Dc(i,t){return new Lt({color:i,transparent:!0,opacity:t,depthWrite:!1,blending:oe})}function X_(i,t,e){const n=new Pt;n.userData.orbit=e;for(let s=0;s<Fc;s++){const r=s/Fc*Math.PI*2,a=v(n,new wt(.045+s%3*.015,6,6),Oe(t,1.4,.92),Math.cos(r)*e,Math.sin(s*1.7)*.08,Math.sin(r)*e,!1);a.userData.angle=r,a.userData.orbit=e,a.userData.wobble=s*1.3}return i.add(n),n}function q_(i,t,e){const n=new Pt;if(n.position.y=.55,t==="slowmo")for(const[s,r]of[[0,.28],[.12,.22],[-.1,.24]]){const a=v(n,new Ye(r,.025,6,F?12:16),Oe(e.glow,.9,.75),0,s,0,!1);a.rotation.x=Math.PI/2+s*.4,a.rotation.z=s*2}else if(t==="fastshot")for(let s=0;s<5;s++){const r=s/5*Math.PI*2,a=v(n,new en(.07,.22,4),Oe(e.glow,1.1),Math.cos(r)*.18,Math.sin(s)*.04,Math.sin(r)*.18,!1);a.rotation.x=Math.PI/2,a.rotation.z=r}else if(t==="invincible"){for(let s=0;s<4;s++){const r=v(n,new N(.04,.34,.04),Oe("#FFFFFF",1.5),0,0,0,!1);r.rotation.z=s/4*Math.PI*2,r.rotation.x=.5+s*.2,r.position.set(Math.cos(r.rotation.z)*.08,Math.sin(s)*.06,Math.sin(r.rotation.z)*.08)}v(n,new Ls(.12,0),Oe(e.particle,1.3),0,0,0,!1)}else if(t==="health"){for(let s=0;s<4;s++){const r=s/4*Math.PI*2+.4,a=v(n,new wt(.1,6,6),Oe(e.mid,1),Math.cos(r)*.3,-.08+Math.sin(s)*.05,Math.sin(r)*.3,!1);a.scale.set(1.4,.45,.8),a.rotation.y=r}v(n,new wt(.14,8,8),Oe("#FFFFFF",.8),0,.02,.08,!1)}else if(t==="triplefire")for(const[s,r,a]of[[-.22,.12,.35],[0,0,0],[.22,.12,-.35]]){const o=v(n,new ot(.04,.05,.26,5),Oe(e.glow,1.05),s,.02,r,!1);o.rotation.x=Math.PI/2,o.rotation.z=a,v(n,new en(.06,.14,4),Oe("#FFFFFF",1.2),s+Math.sin(a)*.14,.06,r+Math.cos(a)*.14,!1).rotation.set(Math.PI/2,0,a)}else if(t==="turbo"){for(let s=0;s<6;s++){const r=s/6*Math.PI*2,a=v(n,new en(.06,.28,3),Oe("#FF1744",1.2),Math.cos(r)*.2,0,Math.sin(r)*.2,!1);a.rotation.x=Math.PI/2,a.rotation.z=r+Math.PI}v(n,new N(.28,.06,.06),C("#212121",{emissive:"#FF1744",emissiveIntensity:.4}),0,.18,0,!1)}else{v(n,new wt(.16,8,8),Oe(e.particle,.7,.55),0,0,0,!1),v(n,new wt(.22,8,8),Oe(e.mid,.5,.35),0,0,0,!1);for(let s=0;s<3;s++){const r=s/3*Math.PI*2;v(n,new Ye(.12+s*.05,.018,6,10),Oe(e.glow,.85,.6),0,0,0,!1).rotation.set(Math.PI/2,r,0)}}return i.add(n),n}function Y_(i,t,e,n){const s=W_[t],r=new Pt;r.position.set(e,0,n);const a=v(r,new nn(.42,.72,F?14:22),Dc(s.glow,s.bad?.28:.38),0,.04,0,!1);a.rotation.x=-Math.PI/2,r.userData.groundRing=a;const o=v(r,new wt(.52,Gi,Gi),Dc(s.glow,s.bad?.14:.2),0,.55,0,!1);r.userData.outerGlow=o;const l=v(r,new wt(.4,Gi,Gi),Oe(s.shell,.55,.42),0,.55,0,!1);r.userData.midShell=l;const c=v(r,new wt(.3,Gi,Gi),Oe(s.core,s.bad?1.15:1.35),0,.55,0,!1);return r.userData.core=c,v(r,new wt(.14,8,8),Oe("#FFFFFF",s.bad?.9:1.4,.85),0,.58,.1,!1),r.userData.particles=X_(r,s.particle,.48),r.userData.accent=q_(r,t,s),s.bad&&(v(r,new nn(.58,.66,F?12:16),new Lt({color:"#FF1744",transparent:!0,opacity:.45,side:fe}),0,.55,0,!1).rotation.x=Math.PI/2),i.add(r),{mesh:r,x:e,z:n,kind:t,collected:!1,bobPhase:Math.random()*6,isBad:s.bad}}function $_(i,t,e){for(const n of i){if(n.collected||!ii(n.z,e,F?48:62))continue;const s=.52+Math.sin(t*3+n.bobPhase)*.12;n.mesh.position.y=s-.52,n.mesh.rotation.y=t*1.6;const r=n.mesh.userData.core,a=n.mesh.userData.outerGlow,o=n.mesh.userData.midShell,l=n.mesh.userData.groundRing,c=n.mesh.userData.particles,h=n.mesh.userData.accent,u=1+Math.sin(t*4.5+n.bobPhase)*.06;if(r&&r.scale.setScalar(u),a){const d=1+Math.sin(t*3.2+n.bobPhase)*.1;a.scale.setScalar(d);const p=a.material;p.opacity=(n.isBad?.14:.2)+Math.sin(t*5+n.bobPhase)*.04}o&&(o.rotation.y=-t*2.4),l&&l.scale.setScalar(1+Math.sin(t*4+n.bobPhase)*.07),h&&(h.rotation.y=t*2.8),c&&(c.rotation.y=t*1.8,c.children.forEach((d,p)=>{if(!(d instanceof ie))return;const g=d.userData.angle+t*(1.2+p%3*.15),_=d.userData.orbit;d.position.x=Math.cos(g)*_,d.position.z=Math.sin(g)*_,d.position.y=Math.sin(t*4+d.userData.wobble)*.1}))}}function j_(i,t,e,n){for(const s of i){if(s.collected)continue;const r=s.x-t,a=s.z-e;if(r*r+a*a<n*n)return s.collected=!0,s.mesh.visible=!1,s.kind}return null}function Z_(){const i=Math.random();return i<.08?"health":i<.15?"turbo":i<.22?"slowmo":i<.3?"triplefire":i<.64?"fastshot":"invincible"}function Lc(i,t){for(const e of i)t.remove(e.mesh),qe(e.mesh)}const J_={slowmo:"Slow-Mo!",fastshot:"Fast Shot!",invincible:"Invincible!",health:"❤ +1 Health!",turbo:"⚠ Overdrive — too fast!",triplefire:"🔫 Triple Fire!"},As=[-3.2,-1.6,0,1.6,3.2];function vi(){return As[Math.floor(Math.random()*As.length)]}function K_(){const i=Math.floor(Math.random()*(As.length-1));return[As[i],As[i+1]]}let Ta=!1;function Q_(i){Ta=!Ta;const t=i<2||Ta?"jump":"slide",e=i>=5?.14:i>=3?.09:.04;return Math.random()<e?{span:"full",clearance:Math.random()<.5?"jump":"slide",motion:"sweep"}:Math.random()<.52?{span:"full",clearance:t,motion:"static"}:{span:"lane-2",clearance:t,motion:"static",lanes:K_()}}function t1(i){const t=Math.max(20,32-i*1);return F?t+8:t}function Ic(){if(Math.random()<(F?.06:.12)){const i=new Set,t=[];for(;t.length<2;){const e=vi();i.has(e)||(i.add(e),t.push(e))}return t}return[vi()]}function e1(i){return v_(i)}function n1(i){const t=Math.max(32,48-i*.85);return F?t+14:t}function i1(i){return Math.max(11,22-i*1.35)}function s1(){return 32+Math.random()*22}function r1(){return 22+Math.random()*18}const a1=F?28:48,Aa=new N(.1,.1,.1),Uc=new Yt(.14,.04);class o1{constructor(t){P(this,"particles",[]);P(this,"scene");P(this,"materials",new Map);this.scene=t;for(let e=0;e<a1;e++){const n=this.getMaterial("#ffffff"),s=new ie(Aa,n);s.visible=!1,this.scene.add(s),this.particles.push({mesh:s,vel:new I,life:0,maxLife:1,active:!1})}}getMaterial(t,e=!0){const n=`${t}|${e?1:0}`;let s=this.materials.get(n);return s||(s=new Lt({color:t,transparent:!0,blending:e?oe:ti,depthWrite:!1}),this.materials.set(n,s)),s}burst(t,e,n,s,r=12,a=4){const o=F?Math.min(r,10):r;let l=0;for(const c of this.particles){if(l>=o)break;c.active||(c.active=!0,c.mesh.visible=!0,c.mesh.geometry=Aa,c.mesh.material=this.getMaterial(s),c.mesh.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),c.mesh.position.set(t,e,n),c.mesh.scale.setScalar(.8+Math.random()*.6),c.vel.set((Math.random()-.5)*a,Math.random()*a*.85+1.2,(Math.random()-.5)*a),c.maxLife=.55+Math.random()*.45,c.life=c.maxLife,l++)}}sparkStreak(t,e,n,s,r=4){let a=0;const o=F?3:r;for(const l of this.particles){if(a>=o)break;l.active||(l.active=!0,l.mesh.visible=!0,l.mesh.geometry=Uc,l.mesh.material=this.getMaterial(s),l.mesh.position.set(t+(Math.random()-.5)*.4,e,n+(Math.random()-.5)*.4),l.mesh.rotation.y=Math.random()*Math.PI*2,l.mesh.rotation.z=(Math.random()-.5)*.8,l.mesh.scale.setScalar(1.2+Math.random()),l.vel.set(0,.5+Math.random(),-2-Math.random()*2),l.maxLife=.25+Math.random()*.2,l.life=l.maxLife,a++)}}collectBurst(t,e){this.burst(t,1,e,"#FFE082",8,3.5),this.sparkStreak(t,1.1,e,"#FFD54F",3),F||this.burst(t,1.2,e,"#FF9800",5,2.5)}hitBurst(t,e){this.burst(t,1,e,"#FF5252",F?8:12,5.5),this.sparkStreak(t,1,e,"#FF1744",4)}alienHit(t,e,n,s=!1){const r=s?"#EA80FC":"#76FF03";this.burst(t,e,n,r,F?6:10,s?6.5:4.5),this.sparkStreak(t,e,n,s?"#E040FB":"#B2FF59",s?5:3)}muzzleFlash(t,e,n){this.burst(t,e,n,"#00E5FF",F?4:6,3.5),this.sparkStreak(t,e,n,"#FFF59D",F?2:4)}gateBurst(t,e,n){this.burst(t,2,e,n,F?12:18,6.5),this.sparkStreak(t,2.2,e,n,F?2:5)}update(t){for(const e of this.particles){if(!e.active)continue;e.life-=t,e.vel.y-=14*t,e.mesh.position.addScaledVector(e.vel,t);const n=Math.max(0,e.life/e.maxLife);e.mesh.material.opacity=n,e.mesh.scale.multiplyScalar(.985),e.life<=0&&(e.active=!1,e.mesh.visible=!1)}}clear(){for(const t of this.particles)t.active=!1,t.mesh.visible=!1}dispose(){this.clear();for(const t of this.particles)this.scene.remove(t.mesh);Aa.dispose(),Uc.dispose(),this.materials.forEach(t=>t.dispose()),this.materials.clear(),this.particles=[]}}class l1{constructor(){P(this,"intensity",0)}shake(t){this.intensity=Math.max(this.intensity,t)}apply(t,e,n){this.intensity>.001?(t.position.x=e.x+(Math.random()-.5)*this.intensity,t.position.y=e.y+(Math.random()-.5)*this.intensity*.5,t.position.z=e.z+(Math.random()-.5)*this.intensity*.3,this.intensity*=.88):t.position.copy(e),t.lookAt(n)}}const Oh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class cs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const c1=new Uo(-1,1,1,-1,0,1);class h1 extends ze{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}}const u1=new h1;class zo{constructor(t){this._mesh=new ie(u1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,c1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class d1 extends cs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=br.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new zo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nc extends cs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class f1 extends cs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class p1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new d1(Oh),this.copyPass.material.blending=zn,this.clock=new $d}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Nc!==void 0&&(a instanceof Nc?n=!0:a instanceof f1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class m1 extends cs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Mt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const g1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class rs extends cs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new xn(r,a,{type:Hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new xn(r,a,{type:Hn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new xn(r,a,{type:Hn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=g1;this.highPassUniforms=br.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Oh;this.copyUniforms=br.clone(h.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:oe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Mt,this.oldClearAlpha=1,this.basic=new Lt,this.fsQuad=new zo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=rs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=rs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new We({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new We({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}rs.BlurDirectionX=new at(1,0);rs.BlurDirectionY=new at(0,1);class v1 extends cs{constructor(){super();P(this,"material");P(this,"fsQuad");this.material=new We({uniforms:{tDiffuse:{value:null},vignette:{value:F?.12:.28},aberration:{value:F?8e-4:.0016},saturation:{value:F?1.1:1.14},pathLift:{value:F?.14:.1},pulse:{value:0}},vertexShader:`
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
        uniform float pathLift;
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
          float path = smoothstep(0.42, 0.0, abs(uv.x - 0.5)) * smoothstep(1.0, 0.48, uv.y);
          col *= 1.0 + path * pathLift;
          col = mix(col, col * vec3(1.02, 1.05, 1.08), path * pathLift * 0.65);
          float vig = 1.0 - dot(dir, dir) * vignette * 2.4;
          col *= clamp(vig, 0.0, 1.0);
          col *= 1.0 + pulse * 0.14;
          gl_FragColor = vec4(col, 1.0);
        }
      `}),this.fsQuad=new zo(this.material)}setPulse(e){this.material.uniforms.pulse.value=e}render(e,n,s){this.material.uniforms.tDiffuse.value=s.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _1{constructor(t,e,n){P(this,"composer");P(this,"bloomPass");P(this,"gradePass");this.renderer=t,this.composer=new p1(t),this.composer.addPass(new m1(e,n)),this.bloomPass=new rs(new at(1,1),F?.34:.38,F?.32:.36,F?.72:.68),this.composer.addPass(this.bloomPass),this.gradePass=new v1,this.gradePass.renderToScreen=!0,this.composer.addPass(this.gradePass)}setSize(t,e){this.composer.setSize(t,e);const n=Math.max(1,Math.floor(t*Ql)),s=Math.max(1,Math.floor(e*Ql));this.bloomPass.resolution.set(n,s)}setBloomStrength(t){this.bloomPass.strength=t}setGradePulse(t){this.gradePass.setPulse(t)}render(){this.composer.render()}dispose(){this.gradePass.dispose(),this.composer.dispose()}}class y1{constructor(){P(this,"nextEventZ",55);P(this,"pulse",0);P(this,"combatIntensity",0);P(this,"active",null);P(this,"activeT",0)}reset(){this.nextEventZ=55+Math.random()*20,this.pulse=0,this.combatIntensity=0,this.active=null,this.activeT=0}getPostPulse(){return this.pulse}getCombatIntensity(){return this.combatIntensity}getActive(){return this.active}bumpCombat(t){this.combatIntensity=Math.min(1,this.combatIntensity+t),this.pulse=Math.min(1,this.pulse+t*.35)}update(t,e){if(this.combatIntensity=Math.max(0,this.combatIntensity-t*.08),this.pulse=Math.max(0,this.pulse-t*1.4),this.active&&(this.activeT-=t,this.activeT<=0&&(this.active=null)),e.playerZ<this.nextEventZ)return null;this.nextEventZ=e.playerZ+(F?52:46)+Math.random()*28;const n=this.pickEvent(e);return this.active=n,this.activeT=n.duration,this.pulse=Math.min(1,this.pulse+n.pulse),this.combatIntensity=Math.min(1,this.combatIntensity+n.pulse*.5),n}pickEvent(t){const e=Math.random();return t.night>.45&&e<.28?{kind:"orbital-flash",message:"☄ Jump bar incoming!",pulse:.55,duration:2.8,gameplay:!0}:e<.45?{kind:"dogfight",message:"",pulse:.35,duration:4,gameplay:!1}:e<.62?{kind:"meteor-streak",message:"🌠 Coin shower!",pulse:.4,duration:3.2,gameplay:!0}:e<.78?{kind:"energy-surge",message:"⚡ Slide under the surge!",pulse:.45,duration:2.5,gameplay:!0}:t.runnerCount>=3&&e<.9?{kind:"alien-rain",message:"👾 Reinforcements dropping!",pulse:.38,duration:2.2,gameplay:!0}:{kind:"distant-barrage",message:"",pulse:.42,duration:3,gameplay:!1}}}const zh="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content";function Hh(){const i=window.visualViewport;return i?{width:Math.max(1,Math.round(i.width)),height:Math.max(1,Math.round(i.height)),offsetTop:i.offsetTop,offsetLeft:i.offsetLeft,scale:i.scale}:{width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight),offsetTop:0,offsetLeft:0,scale:1}}const Tr=new Set;function x1(i){return Tr.add(i),()=>Tr.delete(i)}function M1(){window.scrollTo(0,0);const i=window.visualViewport;if(!i||i.scale===1)return;const t=document.querySelector('meta[name="viewport"]');t&&t.setAttribute("content",zh)}function xi(){const i=Hh();if(!F)return i;M1(),window.scrollTo(0,0);const t=document.getElementById("app"),e=document.getElementById("game-canvas");if(!t)return i;const{width:n,height:s,offsetLeft:r,offsetTop:a}=i;return t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width=`${n}px`,t.style.height=`${s}px`,t.style.padding="0",t.style.margin="0",t.style.overflow="hidden",t.style.transform=`translate(${-r}px, ${-a}px)`,t.style.transformOrigin="top left",t.style.willChange="transform",e&&(e.style.width=`${n}px`,e.style.height=`${s}px`),i}function Vi(){F&&xi(),Tr.forEach(i=>i())}function b1(){const i=document.querySelector('meta[name="viewport"]');i&&i.setAttribute("content",zh),xi(),window.addEventListener("resize",Vi),window.addEventListener("orientationchange",()=>{window.scrollTo(0,0),setTimeout(Vi,50),setTimeout(Vi,150),setTimeout(Vi,400)}),window.visualViewport&&(window.visualViewport.addEventListener("resize",Vi),window.visualViewport.addEventListener("scroll",Vi))}function hr(i){document.body.classList.toggle("game-active",i),i&&F&&(xi(),requestAnimationFrame(()=>{xi(),Tr.forEach(t=>t())}))}const vo=[{id:"johnny",name:"Johnny",tagline:"Classic courier",skin:"#FFE0BD",jacket:"#1565C0",jacketLight:"#42A5F5",jacketTrim:"#FFD54F",hat:"#D32F2F",hatBrim:"#B71C1C",packMain:"#78909C",packDark:"#546E7A",packTrim:"#ECEFF1"},{id:"dingo",name:"Dingo",tagline:"Night-shift legend",skin:"#3D2314",jacket:"#1A237E",jacketLight:"#3949AB",jacketTrim:"#00E676",hat:"#00897B",hatBrim:"#00695C",packMain:"#2E7D32",packDark:"#1B5E20",packTrim:"#A5D6A7"},{id:"mert",name:"Mert",tagline:"Desert-route pro",skin:"#C68642",jacket:"#4E342E",jacketLight:"#795548",jacketTrim:"#FFAB40",hat:"#EF6C00",hatBrim:"#E65100",packMain:"#6D4C41",packDark:"#4E342E",packTrim:"#FFCC80"}];function Ho(i){return vo.find(t=>t.id===i)??vo[0]}function Ae(i,t,e,n,s,r,a,o){return{id:i,district:t,name:e,briefing:n,difficulty:a,timeLimit:o,segments:[...r.map(l=>({kind:"gate",z:l.z,safe:l.safe})),{kind:"dropoff",z:s}]}}const Mi=[Ae("1-1",1,"First Delivery","Jump/slide electric bars · dodge props · shoot aliens · collect 📦",750,[{z:160,safe:"left"},{z:360,safe:"right"},{z:580,safe:"left"}],2,180),Ae("1-2",1,"Dog Park Detour","Aliens run AT you — dodge or shoot them! Colors = difficulty.",850,[{z:200,safe:"right"},{z:450,safe:"left"},{z:700,safe:"right"}],3,200),Ae("1-3",1,"Block Party Run","Grab power-ups: Slow-Mo, Fast Shot, Shield.",900,[{z:220,safe:"left"},{z:480,safe:"right"},{z:720,safe:"left"}],4,220),Ae("1-4",1,"Suburban Sprint","Center lane gets blocked too — stay alert!",950,[{z:180,safe:"right"},{z:420,safe:"left"},{z:650,safe:"right"},{z:850,safe:"left"}],5,240),Ae("1-5",1,"Boss: HOA Alien","Longer route — extra aliens and hazards. Deliver!",1050,[{z:250,safe:"left"},{z:520,safe:"right"},{z:780,safe:"left"},{z:980,safe:"right"}],6,280),Ae("2-1",2,"Morning Commute","Downtown speed run — faster pace!",920,[{z:200,safe:"right"},{z:480,safe:"left"},{z:750,safe:"right"}],5,240),Ae("2-2",2,"Food Truck Alley","Dense hazards — power-ups save lives.",950,[{z:220,safe:"left"},{z:500,safe:"right"},{z:780,safe:"left"}],6,260),Ae("2-3",2,"Alien Territory","Yellow raiders need 2 hits. Red stalkers need 3.",1e3,[{z:240,safe:"right"},{z:520,safe:"left"},{z:820,safe:"right"}],7,280),Ae("2-4",2,"Rush Hour","Everything at once. Shield up!",1050,[{z:200,safe:"left"},{z:450,safe:"right"},{z:700,safe:"left"},{z:920,safe:"right"}],8,300),Ae("2-5",2,"Boss: Alien Commander","Tough finale — shoot, dodge, deliver!",1150,[{z:250,safe:"left"},{z:550,safe:"right"},{z:850,safe:"left"},{z:1050,safe:"right"}],9,320),Ae("3-1",3,"Scorpion Route","Blazing sand — watch for heat mirages and raiders in the haze.",980,[{z:210,safe:"left"},{z:500,safe:"right"},{z:780,safe:"left"}],7,280),Ae("3-2",3,"Mirage Mile","Desert gates come fast. Stock packages at oases.",1020,[{z:230,safe:"right"},{z:520,safe:"left"},{z:820,safe:"right"}],8,300),Ae("3-3",3,"Canyon Dash","Narrow canyon run — aliens love the shade.",1080,[{z:200,safe:"left"},{z:480,safe:"right"},{z:760,safe:"left"},{z:980,safe:"right"}],8,310),Ae("3-4",3,"Sandstorm Alley","Low visibility — listen for stalker footsteps.",1120,[{z:240,safe:"right"},{z:540,safe:"left"},{z:860,safe:"right"}],9,320),Ae("3-5",3,"Boss: Dune Warlord","Hardest desert run — reach the depot!",1200,[{z:260,safe:"left"},{z:560,safe:"right"},{z:880,safe:"left"},{z:1080,safe:"right"}],10,340),Ae("4-1",4,"Canopy Run","Welcome to the jungle — vines, ruins, and ambush aliens.",1e3,[{z:220,safe:"right"},{z:510,safe:"left"},{z:800,safe:"right"}],9,300),Ae("4-2",4,"Temple Steps","Ancient gates guard the old mail route.",1040,[{z:240,safe:"left"},{z:530,safe:"right"},{z:840,safe:"left"}],10,320),Ae("4-3",4,"Vine Gauntlet","Thick cover — stalkers burst from the trees.",1100,[{z:210,safe:"right"},{z:500,safe:"left"},{z:790,safe:"right"},{z:1e3,safe:"left"}],10,330),Ae("4-4",4,"Monsoon Rush","Wet roads, wild power-ups, heavy traffic.",1140,[{z:250,safe:"left"},{z:550,safe:"right"},{z:870,safe:"left"}],11,350),Ae("4-5",4,"Boss: Jungle Overlord","Jungle gauntlet — deliver at the depot!",1250,[{z:270,safe:"right"},{z:580,safe:"left"},{z:900,safe:"right"},{z:1120,safe:"left"}],12,360)];function S1(i){return Mi.find(t=>t.id===i)}function kc(i){const t=Mi.findIndex(e=>e.id===i);return t<0||t>=Mi.length-1?null:Mi[t+1].id}function w1(){return[...new Set(Mi.map(i=>i.district))].sort((i,t)=>i-t)}const Bc=[{id:1,name:"Sunny Suburbs",sky:"#29B6F6",skyBottom:"#4FC3F7",fog:"#B3E5FC",ground:"#689F38",ambient:.72,sun:1,fogNear:50,fogFar:200,buildingHue:.12},{id:2,name:"Busy Downtown",sky:"#FF7043",skyBottom:"#FFAB91",fog:"#FFCC80",ground:"#607D8B",ambient:.72,sun:1.05,fogNear:35,fogFar:160,buildingHue:.08},{id:3,name:"Sunbleached Desert",sky:"#FFA726",skyBottom:"#FFE082",fog:"#FFE0B2",ground:"#D4A574",ambient:.78,sun:1.1,fogNear:45,fogFar:190,buildingHue:.09},{id:4,name:"Emerald Jungle",sky:"#00897B",skyBottom:"#26A69A",fog:"#80CBC4",ground:"#388E3C",ambient:.78,sun:.95,fogNear:32,fogFar:150,buildingHue:.32},{id:5,name:"Industrial Rain",sky:"#546E7A",skyBottom:"#78909C",fog:"#78909C",ground:"#455A64",ambient:.45,sun:.5,fogNear:25,fogFar:110,buildingHue:.55},{id:6,name:"Neon Night",sky:"#1A237E",skyBottom:"#311B92",fog:"#311B92",ground:"#263238",ambient:.35,sun:.3,fogNear:20,fogFar:100,buildingHue:.75},{id:7,name:"The Black Zone",sky:"#1B0000",skyBottom:"#4A0000",fog:"#4A0000",ground:"#212121",ambient:.25,sun:.15,fogNear:15,fogFar:80,buildingHue:0}];function _o(i){return Bc[Math.min(i-1,Bc.length-1)]}class Ar{constructor(t,e,n){P(this,"canvas");P(this,"renderer");P(this,"pipeline",null);P(this,"scene");P(this,"camera");P(this,"world");P(this,"particles");P(this,"shake");P(this,"player");P(this,"convoy");P(this,"level");P(this,"run",{...jo});P(this,"save");P(this,"routeGates",[]);P(this,"electricBars",[]);P(this,"obstacles",[]);P(this,"runners",[]);P(this,"coins",[]);P(this,"packagePickups",[]);P(this,"powerUps",[]);P(this,"throws",[]);P(this,"dropoff");P(this,"keys",new Set);P(this,"touchSteerLeft",!1);P(this,"touchSteerRight",!1);P(this,"inputCleanup",null);P(this,"running",!1);P(this,"dead",!1);P(this,"elapsed",0);P(this,"levelLength",200);P(this,"roadHalfWidth",4.2);P(this,"steerSpeed",11);P(this,"obstacleCooldown",0);P(this,"hurtIFrames",0);P(this,"gameTime",0);P(this,"smokeTimer",0);P(this,"dashTimer",0);P(this,"dashActive",!1);P(this,"abilityCd",0);P(this,"abilityMaxCd",12);P(this,"shootCd",0);P(this,"mailGunDamage",3);P(this,"mailGunRate",.22);P(this,"startPackages",0);P(this,"pickupRadius",2.2);P(this,"specialCharge",0);P(this,"specialShakesLeft",0);P(this,"specialShakeTimer",0);P(this,"quakeRadius",7.5);P(this,"invincibleTimer",0);P(this,"slowMoTimer",0);P(this,"fastShotTimer",0);P(this,"turboTimer",0);P(this,"slideBoostTimer",0);P(this,"tripleFireTimer",0);P(this,"timeScale",1);P(this,"autoFireEnabled",!1);P(this,"viewportCleanup",null);P(this,"lastVpW",0);P(this,"lastVpH",0);P(this,"lastVpScale",1);P(this,"lastVpOffTop",0);P(this,"lastVpOffLeft",0);P(this,"forkHint","");P(this,"vaultHint","");P(this,"powerUpLabel","");P(this,"deathReason","stolen");P(this,"nextBarZ",35);P(this,"nextObstacleZ",55);P(this,"nextRunnerZ",50);P(this,"nextPowerUpZ",80);P(this,"nextPackageZ",25);P(this,"nextCoinZ",45);P(this,"spawnHorizon",0);P(this,"comboCount",0);P(this,"comboTimer",0);P(this,"nextMiniEventZ",200);P(this,"nextUfoHazardZ",130);P(this,"ufoHazard",null);P(this,"blackoutTimer",0);P(this,"shootSpread",!1);P(this,"shootPierce",0);P(this,"shootHoming",!1);P(this,"homingSteerBoost",1);P(this,"baseShootSpread",!1);P(this,"baseShootPierce",0);P(this,"baseShootHoming",!1);P(this,"gearTrialTimer",0);P(this,"gearTrialTurret",null);P(this,"styleStreak",0);P(this,"styleStreakTimer",0);P(this,"magnetTimer",0);P(this,"comboStingerPlayed",!1);P(this,"styleToastTimer",0);P(this,"spectacle",new y1);P(this,"shootPulse",0);P(this,"cb");P(this,"raf",0);P(this,"lastFrame",0);P(this,"hudTimer",0);P(this,"lastConvoyCount",-1);P(this,"baseCamera",new I);P(this,"lookTarget",new I);P(this,"loop",()=>{if(!this.running)return;this.raf=requestAnimationFrame(this.loop);const t=performance.now(),e=Math.min(.05,Math.max(.001,(t-this.lastFrame)/1e3));this.lastFrame=t,this.update(e),this.render()});P(this,"sunTick",0);this.canvas=t,this.save=e,this.cb=n,this.renderer=new Fh({canvas:t,antialias:Lg,powerPreference:F?"low-power":"high-performance",stencil:!1,depth:!0,alpha:!1,precision:F?"mediump":"highp"}),this.renderer.setPixelRatio(ya()),this.renderer.shadowMap.enabled=Dg,this.renderer.shadowMap.type=Kh,this.renderer.toneMapping=Yc,this.renderer.toneMappingExposure=F?1.18:1.08,this.renderer.outputColorSpace=ae,this.renderer.sortObjects=!1,this.renderer.info.autoReset=!0,this.scene=new vh,this.camera=new je(55,1,.1,F?150:180),this.pipeline=new _1(this.renderer,this.scene,this.camera),this.world=new Av(this.scene),this.particles=new o1(this.scene),this.shake=new l1,this.bindKeyboard(),this.bindPointer(),window.addEventListener("resize",()=>this.resize()),this.viewportCleanup=x1(()=>this.resize()),window.visualViewport&&window.visualViewport.addEventListener("resize",()=>this.resize()),this.resize()}setAutoFire(t){this.autoFireEnabled=t}bindTouchControls(t){var r;(r=this.inputCleanup)==null||r.call(this);const e=[],n=(a,o)=>{if(!a)return;const l=u=>{o?this.touchSteerLeft=u:this.touchSteerRight=u},c=u=>{u.preventDefault(),l(!0)},h=()=>l(!1);a.addEventListener("pointerdown",c),a.addEventListener("pointerup",h),a.addEventListener("pointerleave",h),a.addEventListener("pointercancel",h),e.push(()=>{a.removeEventListener("pointerdown",c),a.removeEventListener("pointerup",h),a.removeEventListener("pointerleave",h),a.removeEventListener("pointercancel",h)})};n(t.querySelector("#steer-left"),!0),n(t.querySelector("#steer-right"),!1);const s=a=>{!this.running||this.dead||a.target.closest("#steer-left, #steer-right, #ability-btn, #special-btn, #jump-btn, #slide-btn, #shoot-btn, #hud-back-btn, #autofire-toggle, .hud-panel, .hud-actions-right, .btn")||this.shoot()};t.addEventListener("pointerdown",s),this.inputCleanup=()=>{t.removeEventListener("pointerdown",s),e.forEach(a=>a())}}startLevel(t){const e=S1(t);if(!e)return;this.cleanup(),this.level=e,this.running=!0,this.dead=!1,this.elapsed=0,this.gameTime=0,this.lastFrame=performance.now(),this.hudTimer=0,this.lastConvoyCount=-1,this.forkHint="",this.vaultHint="",this.powerUpLabel="",this.throws=[],this.smokeTimer=0,this.dashTimer=0,this.dashActive=!1,this.abilityCd=0,this.shootCd=0,this.hurtIFrames=0,this.invincibleTimer=0,this.slowMoTimer=0,this.fastShotTimer=0,this.turboTimer=0,this.slideBoostTimer=0,this.tripleFireTimer=0,this.timeScale=1,this.specialCharge=0,this.specialShakesLeft=0,this.specialShakeTimer=0,this.touchSteerLeft=!1,this.touchSteerRight=!1,this.autoFireEnabled=F&&this.save.mobileAutoFire,this.lastVpW=0,this.lastVpH=0,this.lastVpScale=1,this.lastVpOffTop=0,this.lastVpOffLeft=0,this.applyUpgrades();const n=e.difficulty,s=(F?15.2:16.4)+n*(F?.28:.32);if(this.run={...jo,convoy:5,packages:this.startPackages,maxConvoy:50,maxPackages:20,integrity:3+(this.save.purchases["package-armor"]??0),maxIntegrity:3+(this.save.purchases["package-armor"]??0),baseSpeed:s,speed:s},this.mailGunRate=.22,this.save.equippedTurrets.includes("pepper-drone")&&(this.mailGunRate=Math.max(.12,.22-(this.save.purchases["pepper-drone"]??0)*.03)),this.save.equippedTurrets.includes("box-cannon")&&(this.mailGunDamage+=1+(this.save.purchases["box-cannon"]??0)),this.save.equippedTurrets.includes("helper-beacon")){const o=this.save.purchases["helper-beacon"]??0;this.mailGunDamage+=o*2}this.shootSpread=this.save.equippedTurrets.includes("spread-mail"),this.shootPierce=this.save.equippedTurrets.includes("pierce-pack")?1+(this.save.purchases["pierce-pack"]??0):0,this.shootHoming=this.save.equippedTurrets.includes("homing-stamp"),this.baseShootSpread=this.shootSpread,this.baseShootPierce=this.shootPierce,this.baseShootHoming=this.shootHoming,this.applyGearSynergies(),this.gearTrialTimer=0,this.gearTrialTurret=null,this.styleStreak=0,this.styleStreakTimer=0,this.magnetTimer=0,this.comboStingerPlayed=!1,this.homingSteerBoost=1,this.comboCount=0,this.comboTimer=0,this.nextMiniEventZ=200,this.nextUfoHazardZ=120+Math.random()*35,this.ufoHazard&&(this.ufoHazard.dispose(),this.ufoHazard=null),this.blackoutTimer=0,this.world.setBlackout(0),this.pickupRadius=2.2+(this.save.purchases["coin-magnet"]??0)*.4,this.spectacle.reset(),this.shootPulse=0;const r=e.segments[e.segments.length-1];this.levelLength=r.kind==="dropoff"?r.z+20:800,this.spawnHorizon=this.levelLength-30,this.nextBarZ=38,this.nextObstacleZ=62+Math.floor(Math.random()*18),this.nextRunnerZ=38+Math.random()*12,this.nextPowerUpZ=28+Math.random()*12,this.nextPackageZ=20,this.nextCoinZ=35;const a=_o(e.district);this.world.build(a,this.levelLength),Gt.setDistrict(e.district),this.player=new Ov(this.scene,Ho(this.save.selectedCharacter??"johnny")),this.player.setJumpPower(12+(this.save.purchases["jump-boots"]??0)*1.4),this.player.z=0,this.player.targetX=0,this.player.x=0,this.convoy=new zv(this.scene),this.convoy.setCount(F?0:2);for(const o of e.segments)o.kind==="gate"?this.routeGates.push(i_(this.scene,o.z,o.safe)):o.kind==="vault"?this.electricBars.push(lr(this.scene,o.z,{span:"full",clearance:o.clearance,motion:"static",district:e.district})):o.kind==="dropoff"&&(this.dropoff=s_(this.scene,o.z));this.player.setPackageGlow(.5,e.district),F&&(xi(),this.resize(),requestAnimationFrame(()=>this.resize())),this.loop()}applyUpgrades(){this.startPackages=(this.save.purchases["starter-pouches"]??0)*2;const t=this.save.equippedAbility;t==="smoke-bomb"?this.abilityMaxCd=12-(this.save.purchases["smoke-bomb"]??0)*2:t==="rally-horn"?this.abilityMaxCd=15-(this.save.purchases["rally-horn"]??0)*3:t==="dash"?this.abilityMaxCd=10-(this.save.purchases.dash??0)*2:this.abilityMaxCd=12}bindKeyboard(){window.addEventListener("keydown",t=>{this.keys.add(t.code),t.code==="KeyE"&&(t.preventDefault(),t.repeat||this.useSpecialQuake()),t.code==="KeyQ"&&(t.preventDefault(),t.repeat||this.useAbility()),t.code==="Space"&&(t.preventDefault(),t.repeat||this.jump()),(t.code==="KeyS"||t.code==="ArrowDown")&&(t.preventDefault(),t.repeat||this.slide()),(t.code==="ArrowLeft"||t.code==="KeyA")&&t.preventDefault(),(t.code==="ArrowRight"||t.code==="KeyD")&&t.preventDefault()}),window.addEventListener("keyup",t=>this.keys.delete(t.code))}bindPointer(){this.canvas.addEventListener("pointerdown",t=>{!this.running||this.dead||t.button===0&&(t.preventDefault(),this.shoot())}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),F&&this.canvas.addEventListener("touchstart",t=>{t.touches.length===1&&t.preventDefault()},{passive:!1})}jump(){!this.running||this.dead||this.player.jump()&&(this.shake.shake(.08),Gt.jump())}slide(){!this.running||this.dead||this.player.slide()&&(this.shake.shake(.05),Gt.slide())}shoot(){if(!this.running||this.dead||this.shootCd>0)return;const t=this.mailGunRate;this.shootCd=this.fastShotTimer>0?t*.45:t;let e=this.player.x,n=this.player.z+40;const s=this.nearestRunner();s&&(e=s.x,n=s.z),this.player.mailGunAnim(),Gt.shootMail(),this.shootPulse=.5,this.shake.shake(.035),this.spectacle.bumpCombat(.07),this.particles.muzzleFlash(this.player.x+.35,1.05,this.player.z+.55);const r={pierceLeft:this.shootPierce,homing:this.shootHoming};if(this.shootSpread)for(const a of[-1,0,1])this.throws.push(Sc(this.scene,this.player.x,this.player.z,e,n,this.mailGunDamage,{...r,spreadIndex:a}));else this.throws.push(Sc(this.scene,this.player.x,this.player.z,e,n,this.mailGunDamage,r))}fireMailGun(){this.shoot()}throwPackage(){this.shoot()}nearestRunner(){let t=null,e=1/0;for(const n of this.runners){if(!n.alive)continue;const s=n.z-this.player.z;s>0&&s<55&&s<e&&(e=s,t=n)}return t}useSpecialQuake(){!this.running||this.dead||this.specialShakesLeft>0||this.specialCharge<1||(this.specialCharge=0,this.specialShakesLeft=3,this.specialShakeTimer=0,this.convoy.reactQuake(),Gt.quake(),this.cb.onToast("💥 GROUND QUAKE ×3!"),this.emitHud(this.level.timeLimit-this.elapsed))}useAbility(){if(!this.running||this.dead||this.abilityCd>0)return;const t=this.save.equippedAbility;t&&(t==="smoke-bomb"?(this.smokeTimer=4,this.cb.onToast("Smoke!")):t==="rally-horn"?(this.invincibleTimer=Math.max(this.invincibleTimer,2),this.cb.onToast("Brief shield!")):t==="dash"&&(this.dashActive=!0,this.dashTimer=.6,this.player.dashOffset(),this.cb.onToast("Dash!")),this.abilityCd=this.abilityMaxCd)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}update(t){if(this.dead)return;this.syncViewport(),this.slowMoTimer>0?(this.slowMoTimer-=t,this.timeScale=.42,this.slowMoTimer<=0&&(this.timeScale=1)):this.timeScale=1,this.invincibleTimer>0&&(this.invincibleTimer-=t),this.hurtIFrames>0&&(this.hurtIFrames-=t),this.fastShotTimer>0&&(this.fastShotTimer-=t),this.turboTimer>0&&(this.turboTimer-=t,this.turboTimer<=0&&(this.run.speed=this.run.baseSpeed)),this.slideBoostTimer>0&&(this.slideBoostTimer-=t,this.slideBoostTimer<=0&&this.turboTimer<=0&&(this.run.speed=this.run.baseSpeed)),this.tripleFireTimer>0&&(this.tripleFireTimer-=t,this.tripleFireTimer<=0&&this.refreshShootSpread()),this.powerUpLabel=this.invincibleTimer>0?"🛡 SHIELD":this.hurtIFrames>0?"💥 HIT!":this.turboTimer>0?"🔥 OVERDRIVE":this.tripleFireTimer>0?"🔫 TRIPLE FIRE":this.slideBoostTimer>0?"⚡ SLIDE BOOST":this.fastShotTimer>0?"⚡ FAST":this.slowMoTimer>0?"🐢 SLOW-MO":"";const e=t*this.timeScale;this.elapsed+=t,this.gameTime+=t,this.abilityCd>0&&(this.abilityCd=Math.max(0,this.abilityCd-t)),this.shootCd>0&&(this.shootCd=Math.max(0,this.shootCd-t)),F&&this.autoFireEnabled&&this.shootCd<=0&&this.shoot(),this.smokeTimer>0&&(this.smokeTimer-=t),this.dashActive&&(this.dashTimer-=t,this.dashTimer<=0&&(this.dashActive=!1)),this.obstacleCooldown>0&&(this.obstacleCooldown-=t),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.comboCount=0)),this.blackoutTimer>0&&(this.blackoutTimer-=t,this.blackoutTimer<=0&&this.world.setBlackout(0)),this.styleStreakTimer>0&&(this.styleStreakTimer-=t,this.styleStreakTimer<=0&&(this.styleStreak=0)),this.magnetTimer>0&&(this.magnetTimer-=t),this.gearTrialTimer>0&&(this.gearTrialTimer-=t,this.gearTrialTimer<=0&&this.endGearTrial()),Gt.setNight(this.world.getSkyNight()),this.player.z+=this.run.speed*e,this.run.distance=this.player.z,this.specialCharge=Math.min(1,this.specialCharge+this.run.speed*e*5e-4),this.updateSpecialQuake(t),(this.keys.has("ArrowLeft")||this.keys.has("KeyA")||this.touchSteerLeft)&&(this.player.targetX+=this.steerSpeed*t),(this.keys.has("ArrowRight")||this.keys.has("KeyD")||this.touchSteerRight)&&(this.player.targetX-=this.steerSpeed*t),this.player.targetX=$i.clamp(this.player.targetX,-this.roadHalfWidth,this.roadHalfWidth),this.player.update(t,this.roadHalfWidth,!0,this.run.speed,this.world.getGameplayNight()),this.run.convoy!==this.lastConvoyCount&&(this.convoy.setCount(F?0:Math.min(2,this.run.convoy)),this.lastConvoyCount=this.run.convoy),this.convoy.update(this.player.x,this.player.z,this.gameTime),this.proceduralSpawn(),this.updateMiniEvents(),this.updateSpectacle(t),this.updateUfoHazard(t),this.cullBehind();const n=this.player.z;this.world.setPlayerZ(n,t),this.sunTick+=t,this.sunTick>=(F?.1:.05)&&(this.sunTick=0,this.world.followSun(this.player.x,n)),f_(this.coins,t,this.gameTime,n),w_(this.packagePickups,this.gameTime,n),$_(this.powerUps,this.gameTime,n),O_(this.runners,e,this.gameTime,1,n,h=>{Gt.telegraphWarn(),Math.random()<.4&&Gt.alienChatter()},this.world.getGameplayNight()),this.throws=wc(this.throws,t,this.scene,this.gameTime,this.runners,this.homingSteerBoost),this.particles.update(t),this.shootPulse=Math.max(0,this.shootPulse-t*2.8),this.world.update(this.gameTime,n,t,{turbo:this.turboTimer>0||this.slideBoostTimer>0,speed:this.run.speed,baseSpeed:this.run.baseSpeed,playerX:this.player.x,shootPulse:this.shootPulse,combatIntensity:this.spectacle.getCombatIntensity()});for(const h of this.routeGates)!h.resolved&&ii(h.z,n,F?42:55)&&c_(h,this.gameTime);this.dropoff&&ii(this.dropoff.z,n,F?42:55)&&h_(this.dropoff,this.gameTime),e_(this.electricBars,this.gameTime,n,()=>Gt.telegraphWarn()),b_(this.obstacles,this.gameTime,n,this.world.getGameplayNight());const s=this.pickupRadius+(this.magnetTimer>0?2.8:0),r=p_(this.coins,this.player.x,this.player.z,s);r&&(this.run.coins+=r,this.particles.collectBurst(this.player.x,this.player.z),Gt.coin(r));const a=E_(this.packagePickups,this.player.x,this.player.z,s);a.packages&&(this.run.packages=Math.min(this.run.maxPackages,this.run.packages+a.packages),this.particles.collectBurst(this.player.x,this.player.z),this.spectacle.bumpCombat(.04),Gt.pickup()),a.golden&&(this.run.coins+=18*a.golden,this.fastShotTimer=Math.max(this.fastShotTimer,4),this.particles.collectBurst(this.player.x,this.player.z),this.cb.onToast("✨ Golden Mail — fast shots!"),Gt.combo(4));const o=j_(this.powerUps,this.player.x,this.player.z,s);o&&(this.applyPowerUp(o),this.particles.collectBurst(this.player.x,this.player.z)),this.checkThrowHits(),this.checkElectricBars(),this.checkObstacles(),this.checkNearMisses(),this.checkBoostPads(),this.checkRunners(),this.checkRouteGates(),this.checkDropoff(),this.checkLose();const l=this.level.timeLimit-this.elapsed;if(l<=0){this.die("timeout");return}this.hudTimer+=t;const c=F?.12:.08;this.hudTimer>=c&&(this.hudTimer=0,this.emitHud(l)),this.cb.onCombat(!1),this.baseCamera.set(this.player.x*.35,10+this.player.jumpY*.15,this.player.z-12),this.lookTarget.set(this.player.x*.25,1.5+this.player.jumpY*.2,this.player.z+18),this.shake.apply(this.camera,this.baseCamera,this.lookTarget)}applyPowerUp(t){this.cb.onToast(J_[t]),t==="slowmo"?this.slowMoTimer=3.5:t==="fastshot"?this.fastShotTimer=5:t==="invincible"?this.invincibleTimer=4:t==="health"?this.run.integrity<this.run.maxIntegrity?this.run.integrity++:(this.run.coins+=15,this.cb.onToast("Full health — +15 coins!")):t==="turbo"?(this.turboTimer=4,this.run.speed=this.run.baseSpeed*1.55,this.shake.shake(.35),this.convoy.reactTurbo(),Gt.turbo(),Gt.honk()):t==="triplefire"&&(this.tripleFireTimer=8,this.shootSpread=!0),t!=="turbo"&&Gt.powerUp(),this.emitHud(this.level.timeLimit-this.elapsed)}emitHud(t){this.cb.onHudUpdate({integrity:this.run.integrity,maxIntegrity:this.run.maxIntegrity,coins:this.run.coins,packages:this.run.packages,distance:this.run.distance,totalDistance:this.levelLength,timeLeft:t,abilityCd:this.abilityCd,abilityReady:this.abilityCd<=0&&!!this.save.equippedAbility,specialCharge:this.specialCharge,specialReady:this.specialCharge>=1&&this.specialShakesLeft<=0,specialShakes:this.specialShakesLeft,shootReady:this.shootCd<=0,jumpReady:!this.player.isJumping&&!this.player.isSliding,slideReady:!this.player.isJumping&&!this.player.isSliding,forkHint:this.forkHint||void 0,vaultHint:this.vaultHint||void 0,powerUpLabel:this.comboCount>=2?`⚡ ${this.comboCount}x COMBO`:this.magnetTimer>0?"🧲 STYLE MAGNET":this.gearTrialTimer>0&&this.gearTrialTurret?`🎁 ${Ar.gearTrialName(this.gearTrialTurret)}`:this.powerUpLabel||void 0,invincible:this.invincibleTimer>0})}proceduralSpawn(){const t=this.level.difficulty,e=F?72:92,n=this.player.z+e,s=1,r=this.spawnHorizon,a=F?5:8,o=F?4:6,l=F?9:12,c=F?6:10;let h=0;for(;this.nextBarZ<n&&this.nextBarZ<r&&h<s&&!(this.electricBars.filter(f=>!f.resolved).length>=a);){const m=Q_(t);this.electricBars.push(lr(this.scene,this.nextBarZ,{...m,district:this.level.district})),this.nextBarZ+=t1(t)+Math.random()*10,h++}let u=0;for(;this.nextObstacleZ<n&&this.nextObstacleZ<r&&u<s&&!(this.obstacles.filter(f=>!f.hit).length>=o);){const _=Ic(),m=F?1:_.length;for(let f=0;f<m;f++)this.obstacles.push(y_(this.scene,e1(this.level.id),_[f],this.nextObstacleZ));this.nextObstacleZ+=n1(t)+Math.random()*14,u++}let d=0;for(;this.nextRunnerZ<n&&this.nextRunnerZ<r&&d<s&&!(this.runners.length>=l);){const _=Sa(t),m=vi(),f=Math.random()<(F?.05:.08);if(this.runners.push(ba(this.scene,_,m,this.nextRunnerZ,{elite:f})),f&&Gt.eliteSpawn(),!F&&t>=3&&Math.random()<.28&&this.runners.length<l){let x=vi();for(let S=0;S<4&&x===m;S++)x=vi();x!==m&&this.runners.push(ba(this.scene,Sa(t),x,this.nextRunnerZ+.5))}this.nextRunnerZ+=i1(t)+Math.random()*8,d++}this.nextPowerUpZ<n&&this.nextPowerUpZ<r&&this.powerUps.length<c&&(this.powerUps.push(Y_(this.scene,Z_(),vi(),this.nextPowerUpZ)),this.nextPowerUpZ+=s1());let p=0;for(;this.nextPackageZ<n&&this.nextPackageZ<r&&p<s;)this.packagePickups.push(...S_(this.scene,this.nextPackageZ,1,0)),this.nextPackageZ+=r1(),p++;let g=0;for(;this.nextCoinZ<n&&this.nextCoinZ<r&&g<s;){const _=F?2+Math.floor(Math.random()*2):3+Math.floor(Math.random()*3);this.coins.push(...cr(this.scene,this.nextCoinZ,_,3.5)),this.nextCoinZ+=F?28+Math.random()*20:22+Math.random()*18,g++}}addSpecialCharge(t){this.specialCharge=Math.min(1,this.specialCharge+t)}updateSpecialQuake(t){this.specialShakesLeft<=0||(this.specialShakeTimer-=t,!(this.specialShakeTimer>0)&&(this.executeQuakePulse(),this.specialShakesLeft--,this.specialShakeTimer=this.specialShakesLeft>0?.38:0))}executeQuakePulse(){this.shake.shake(1.5);const t=this.player.x,e=this.player.z,n=this.quakeRadius*this.quakeRadius;for(const r of this.electricBars){if(r.resolved)continue;const a=r.span==="full"?0:r.x,o=a-t,l=r.z-e;o*o+l*l<=n&&(r.resolved=!0,r.mesh.visible=!1,this.particles.hitBurst(a,r.z))}for(const r of this.obstacles){if(r.hit)continue;const a=r.x-t,o=r.z-e;a*a+o*o<=n&&(r.hit=!0,r.mesh.visible=!1,this.particles.hitBurst(r.x,r.z))}const s=[];for(const r of this.runners){if(!r.alive)continue;const a=r.x-t,o=r.z-e;a*a+o*o<=n&&(this.run.coins+=r.tier==="stalker"?15:r.tier==="raider"?10:5,s.push(r),this.particles.hitBurst(r.x,r.z))}for(const r of s)wa(r,this.scene),this.runners=this.runners.filter(a=>a!==r);this.particles.gateBurst(t,e,"#FF9800")}cullBehind(){const t=this.player.z-25,e=this.electricBars.filter(l=>l.z<t);e.length&&(gc(e,this.scene),this.electricBars=this.electricBars.filter(l=>l.z>=t));const n=this.obstacles.filter(l=>l.z<t);n.length&&(bc(n,this.scene),this.obstacles=this.obstacles.filter(l=>l.z>=t));const s=this.runners.filter(l=>l.z<t);s.length&&(Pc(s,this.scene),this.runners=this.runners.filter(l=>l.z>=t));const r=this.coins.filter(l=>l.collected||l.z<t);r.length&&(Mc(r,this.scene),this.coins=this.coins.filter(l=>!l.collected&&l.z>=t));const a=this.packagePickups.filter(l=>l.collected||l.z<t);a.length&&(Ec(a,this.scene),this.packagePickups=this.packagePickups.filter(l=>!l.collected&&l.z>=t));const o=this.powerUps.filter(l=>l.collected||l.z<t);o.length&&(Lc(o,this.scene),this.powerUps=this.powerUps.filter(l=>!l.collected&&l.z>=t))}applyGearSynergies(){const t=this.save.equippedTurrets;t.includes("spread-mail")&&t.includes("pierce-pack")&&(this.shootPierce+=1,this.mailGunDamage=Math.floor(this.mailGunDamage*1.12),this.cb.onToast("⚡ Lane Sweeper — spread pierces!")),t.includes("homing-stamp")&&t.includes("pepper-drone")&&(this.mailGunRate*=.88,this.homingSteerBoost=1.45,this.cb.onToast("🎯 Stamp Lock — homing fast fire!"))}static gearTrialName(t){return t==="spread-mail"?"Spread Envelope":t==="pierce-pack"?"Piercing Post":"Tracking Stamps"}startGearTrial(){const e=["spread-mail","pierce-pack","homing-stamp"].filter(s=>!this.save.equippedTurrets.includes(s));if(!e.length)return;const n=e[Math.floor(Math.random()*e.length)];this.gearTrialTurret=n,this.gearTrialTimer=45,n==="spread-mail"&&(this.shootSpread=!0),n==="pierce-pack"&&(this.shootPierce=Math.max(this.shootPierce,2)),n==="homing-stamp"&&(this.shootHoming=!0),this.cb.onToast(`🎁 Trial: ${Ar.gearTrialName(n)}!`)}refreshShootSpread(){this.shootSpread=this.baseShootSpread||this.tripleFireTimer>0||this.gearTrialTurret==="spread-mail"&&this.gearTrialTimer>0}endGearTrial(){this.refreshShootSpread(),this.shootPierce=this.baseShootPierce,this.shootHoming=this.baseShootHoming;const t=this.save.equippedTurrets;t.includes("spread-mail")&&t.includes("pierce-pack")&&(this.shootPierce+=1),this.homingSteerBoost=t.includes("homing-stamp")&&t.includes("pepper-drone")?1.45:1,this.gearTrialTurret=null}onRunnerKill(t,e){this.comboTimer=3.2,this.comboCount++;const n=1+(this.comboCount-1)*.12;let s=(t.tier==="stalker"?15:t.tier==="raider"?10:5)*n;t.elite&&(s+=25),t.isBoss&&(s+=50),e&&(s*=1.5),this.run.coins+=Math.floor(s),this.addSpecialCharge(.14+this.comboCount*.035),this.spectacle.bumpCombat(t.isBoss?.25:t.elite?.15:.1),Gt.alienKill(),e&&Gt.headshot(),this.comboCount>=2&&Gt.combo(this.comboCount),this.comboCount>=5&&!this.comboStingerPlayed&&(this.comboStingerPlayed=!0,Gt.comboStinger()),this.comboCount<=1&&(this.comboStingerPlayed=!1),this.particles.hitBurst(t.x,t.z),t.elite&&!t.isBoss&&(this.coins.push(...cr(this.scene,t.z,F?5:8,4)),this.packagePickups.push(C_(this.scene,t.x,t.z)))}applySpectacleGameplay(t){const e=this.player.z+(F?36:44),n=this.level.district,s=r=>this.electricBars.some(a=>Math.abs(a.z-r)<10);switch(t){case"energy-surge":return s(e)?!1:(this.electricBars.push(lr(this.scene,e,{span:"full",clearance:"slide",district:n})),!0);case"orbital-flash":return s(e)?!1:(this.electricBars.push(lr(this.scene,e,{span:"full",clearance:"jump",district:n})),!0);case"meteor-streak":return this.coins.push(...cr(this.scene,e,F?8:12,5)),this.world.playSpectacle(t,this.player.z),!0;case"alien-rain":{const r=Ic();for(let a=0;a<(F?1:2);a++)this.runners.push(ba(this.scene,Sa(this.level.difficulty),r[a]??vi(),e+a*5));return!0}case"dogfight":case"distant-barrage":return this.world.playSpectacle(t,this.player.z),!1;default:return this.world.playSpectacle(t,this.player.z),!1}}updateSpectacle(t){const e=this.spectacle.update(t,{playerZ:this.player.z,comboCount:this.comboCount,runnerCount:this.runners.filter(n=>n.alive).length,night:this.world.getSkyNight()});if(e){const n=this.applySpectacleGameplay(e.kind);e.gameplay&&n&&e.message&&this.cb.onToast(e.message),(n||!e.gameplay)&&(this.shake.shake(e.pulse*(e.gameplay?.12:.06)),Gt.spectacle(e.kind))}Gt.setCombatIntensity(this.spectacle.getCombatIntensity())}updateUfoHazard(t){var s;if(this.world.getSkyNight()<=.4){(s=this.ufoHazard)!=null&&s.active&&this.ufoHazard.end();return}if(this.ufoHazard||(this.ufoHazard=new V_(this.scene)),!this.ufoHazard.active&&this.player.z>=this.nextUfoHazardZ&&(this.nextUfoHazardZ+=155+Math.random()*70,this.ufoHazard.start(this.player.x,this.player.z),this.cb.onToast("🛸 UFO overhead — dodge the beam!"),Gt.ufoBeam()),!this.ufoHazard.active)return;this.ufoHazard.update(t,this.gameTime,this.player.z);const n=this.player.jumpY>.4||this.player.isSliding||this.dashActive||this.invincibleTimer>0;this.ufoHazard.tickExposure(t,this.player.x,this.player.z,n)&&(this.isProtected()||(this.takeHit("obstacle"),this.cb.onToast("👽 Caught in the beam!"),this.ufoHazard.end()))}updateMiniEvents(){if(this.player.z<this.nextMiniEventZ)return;this.nextMiniEventZ+=340+Math.random()*90;const t=this.level.district,e=Math.random(),n=()=>{this.coins.push(...cr(this.scene,this.player.z+45,F?6:10,5)),this.cb.onToast("🌠 Bonus coins ahead!")},s=()=>{this.convoy.reactTurbo(),Gt.honk()},r=()=>{this.cb.onToast("🌑 Blackout zone — eyes up!"),this.world.setBlackout(.58),this.blackoutTimer=9};t===3?e<.55?n():e<.82?s():r():t===5||t===7?e<.48?r():e<.74?s():n():t>=6?e<.38?r():e<.68?n():s():e<.34?n():e<.67?s():r()}checkBoostPads(){!this.running||this.dead||this.world.tryTriggerBoostPad(this.player.x,this.player.z)&&this.applySlideBoost()}applySlideBoost(){this.player.boostSlide(F?1.05:1.2),this.slideBoostTimer=F?1.25:1.45,this.run.speed=this.run.baseSpeed*(F?1.34:1.42),this.shake.shake(.24),Gt.slideBoost(),Gt.slide(),this.convoy.reactTurbo(),this.particles.collectBurst(this.player.x,this.player.z),this.shootPulse=.4,this.spectacle.bumpCombat(.06)}checkNearMisses(){for(const t of this.electricBars){if(t.resolved||t.span==="full"||t.styleAwarded)continue;const e=this.player.z-t.z;e<.8||e>2.5||mc(this.player.x,t)||(this.player.isJumping||this.player.isSliding||this.dashActive)&&(t.styleAwarded=!0,this.awardStyleNearMiss())}for(const t of this.obstacles){if(t.hit)continue;const e=this.player.z-t.z;if(e<.8||e>2.2)continue;const n=Math.abs(this.player.x-t.x),s=t.radius-.05,r=t.radius+.45;n>=s&&n<=r&&(this.player.isJumping||this.player.isSliding||this.dashActive)&&(t.mesh.userData.styleAwarded||(t.mesh.userData.styleAwarded=!0,this.awardStyleNearMiss()))}}awardStyleNearMiss(){this.run.coins+=5,Gt.nearMiss(),this.convoy.reactTurbo(),this.styleStreak++,this.styleStreakTimer=4,this.styleStreak>=3?(this.styleStreak=0,this.magnetTimer=5,this.cb.onToast("🔗 STYLE MAGNET!"),Gt.honk()):this.styleStreak===2?this.cb.onToast("✨ Style ×2 — one more!"):this.cb.onToast("✨ STYLE +5")}checkThrowHits(){for(const t of this.throws){if(t.life<=0)continue;const e=t.mesh.position.z,n=t.mesh.position.y;for(const s of this.runners){if(!s.alive||Math.abs(s.z-e)>2.5)continue;const r=t.mesh.position.x-s.x,a=t.mesh.position.z-s.z;if(r*r+a*a>=1.85)continue;const o=H_(n,s),l=o?t.damage*2:t.damage;s.hp-=l,Gt.alienHit(),this.particles.alienHit(t.mesh.position.x,t.mesh.position.y,t.mesh.position.z,o),this.spectacle.bumpCombat(o?.12:.06),t.pierceLeft>0?t.pierceLeft--:t.life=0,s.hp<=0&&(this.onRunnerKill(s,o),wa(s,this.scene),this.runners=this.runners.filter(c=>c!==s))}}}isProtected(){return this.invincibleTimer>0||this.hurtIFrames>0}takeHit(t){this.isProtected()||(this.run.integrity--,this.run.integrityLost=!0,this.hurtIFrames=1.5,this.obstacleCooldown=.6,this.player.flashHurt(),this.shake.shake(.75),this.cb.onDamageFlash(),this.particles.hitBurst(this.player.x,this.player.z),Gt.hurt(),t==="runner"&&this.player.knockback(this.player.x>=0?2:-2),this.run.integrity<=0?this.die(t==="runner"?"overwhelmed":"stolen"):this.emitHud(this.level.timeLimit-this.elapsed))}checkObstacles(){if(!this.isProtected()){for(const t of this.obstacles)if(!(t.hit||Math.abs(this.player.z-t.z)>1.4||Math.abs(this.player.x-t.x)>t.radius+.3)&&!(this.player.jumpY>x_(t.kind)+.08)){if(this.dashActive){t.hit=!0,t.mesh.visible=!1,this.particles.hitBurst(t.x,t.z);continue}t.hit=!0,t.mesh.visible=!1,this.takeHit("obstacle");return}}}checkElectricBars(){this.vaultHint="";const t=2.4,e=-1.5;for(const n of this.electricBars){if(n.resolved)continue;const s=n.z-this.player.z;if(s>0&&s<30){const u=n.clearance==="jump"?"⬆ JUMP":"⬇ SLIDE";n.motion==="sweep"?this.vaultHint=`⚡ SWEEP — ${u}`:n.span==="full"?this.vaultHint=`${u} BAR`:this.vaultHint=`${u} · dodge lane`}const r=this.player.jumpY>.1||this.player.isJumping,a=this.player.isSliding,o=n.clearance==="jump"?r:a,l=n.clearance==="jump"&&a||n.clearance==="slide"&&r;if(n.motion==="sweep"){if(this.player.z<n.z-.5||this.player.z>n.z+2.2||!n.sweepStarted)continue;const u=n_(n);if(Math.abs(this.player.x-u)>kh+.25||this.isProtected())continue;if(this.dashActive){n.resolved=!0;continue}!n.penalized&&(l||!o)&&(n.penalized=!0,Gt.vaultBuzz(),this.takeVaultMiss()),this.player.z>n.z+1.6&&(n.resolved=!0,o&&!n.penalized&&(this.run.coins+=5,Gt.vaultBuzz()));continue}if(!mc(this.player.x,n)||!(this.player.z>=n.z+e&&this.player.z<=n.z+t))continue;if(this.dashActive&&this.player.z>=n.z-.3){n.resolved=!0,this.particles.hitBurst(n.x,n.z);continue}const h=this.player.z>=n.z-.15;!this.isProtected()&&!n.penalized&&h&&(l||!o)&&(n.penalized=!0,Gt.vaultBuzz(),this.takeVaultMiss()),this.player.z>n.z+t-.35&&(n.resolved=!0,o&&!n.penalized&&(this.run.coins+=n.span==="full"?4:3,Gt.vaultBuzz()))}}checkRunners(){if(!(this.isProtected()||this.smokeTimer>0))for(const t of this.runners){if(!t.alive)continue;const e=Math.abs(this.player.x-t.x),n=Math.abs(this.player.z-t.z),s=z_(t.tier);if(e<s&&n<1.3&&this.player.jumpY<.55){wa(t,this.scene),this.runners=this.runners.filter(r=>r!==t),this.takeHit("runner");return}}}checkRouteGates(){this.forkHint="";for(const t of this.routeGates){if(t.resolved)continue;const e=t.z-this.player.z;if(e>0&&e<32&&(this.forkHint="⚠ FORK!"),this.player.z>=t.z-3&&this.player.z<=t.z+2&&Math.abs(this.player.x)<1.2){this.die("wrong_turn");return}if(this.player.z<t.z+.4)continue;const n=this.player.x>.75,s=this.player.x<-.75;if(!n&&!s){this.die("wrong_turn");return}const r=n?"left":"right";if(t.resolved=!0,t.centerWall.visible=!1,r!==t.safeSide){this.die("wrong_turn");return}this.run.coins+=8,this.particles.gateBurst(r==="left"?3:-3,t.z,"#00E676"),Gt.gatePass()}}takeVaultMiss(){this.isProtected()||(this.run.integrity--,this.run.integrityLost=!0,this.hurtIFrames=1.8,this.obstacleCooldown=.8,this.player.flashHurt(),this.shake.shake(.65),this.cb.onDamageFlash(),this.particles.hitBurst(this.player.x,this.player.z),this.run.integrity<=0?this.die("stolen"):this.emitHud(this.level.timeLimit-this.elapsed))}checkDropoff(){!this.dropoff||this.dropoff.reached||this.player.z>=this.dropoff.z-3&&(this.dropoff.reached=!0,this.particles.gateBurst(0,this.dropoff.z,"#81D4FA"),Gt.delivery(),this.endGame(!0))}checkLose(){this.run.integrity<=0&&!this.dead&&this.die("stolen")}die(t){this.dead||(this.dead=!0,this.deathReason=t,this.player.flashHurt(),this.shake.shake(1.2),this.cb.onDamageFlash(),this.particles.burst(this.player.x,1.5,this.player.z,"#FF1744",F?18:30,6),Gt.gameOver(),setTimeout(()=>this.endGame(!1),1200))}endGame(t){if(!this.running)return;this.running=!1,Gt.stopMusic();let e=0;t&&(e=1,!this.run.integrityLost&&this.run.packages>=6&&(e=2),!this.run.integrityLost&&this.run.packages>=12&&this.run.coins>=40&&(e=3));const n=t?this.run.packages*3:0,s=t?25+e*20:Math.floor(this.run.coins*.3),r=this.run.coins+(t?s+n:0),a={stolen:"Crashed into a hazard!",overwhelmed:"An alien tackled you!",timeout:"Delivery window expired!",blocked:"Blocked!",wrong_turn:"Wrong turn — dead end!"};this.cb.onEnd({won:t,stars:e,coinsEarned:r,levelId:this.level.id,time:this.elapsed,deathReason:t?void 0:a[this.deathReason]})}render(){{const t=this.world.getNightFx(),e=this.world.getGameplayNight(),n=F?1.18:1.08;this.renderer.toneMappingExposure=n*(1-t*(F?.04:.08))+e*(F?.14:.1)}if(this.pipeline){const t=this.world.getNightFx(),e=this.spectacle.getCombatIntensity(),n=this.spectacle.getPostPulse()+this.shootPulse*.35,s=(F?.26:.24)+t*(F?.16:.28)+e*(F?.06:.12);this.pipeline.setBloomStrength(s),this.pipeline.setGradePulse(n),this.pipeline.render()}else this.renderer.render(this.scene,this.camera)}syncViewport(){if(!F||!this.running)return;const t=Hh();t.width===this.lastVpW&&t.height===this.lastVpH&&t.scale===this.lastVpScale&&t.offsetTop===this.lastVpOffTop&&t.offsetLeft===this.lastVpOffLeft||(this.lastVpW=t.width,this.lastVpH=t.height,this.lastVpScale=t.scale,this.lastVpOffTop=t.offsetTop,this.lastVpOffLeft=t.offsetLeft,xi(),this.renderer.setPixelRatio(ya()),this.renderer.setSize(t.width,t.height,!1),this.camera.aspect=t.width/t.height,this.camera.updateProjectionMatrix())}resize(){var n;let t,e;if(F){const s=xi();t=s.width,e=s.height,this.lastVpW=t,this.lastVpH=e,this.lastVpScale=s.scale,this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`}else t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;t<1||e<1||(this.renderer.setPixelRatio(ya()),this.renderer.setSize(t,e,!1),(n=this.pipeline)==null||n.setSize(t,e),this.camera.aspect=t/e,this.camera.far=F?150:180,this.camera.updateProjectionMatrix())}cleanup(){for(const t of this.routeGates)xc(t.mesh,this.scene);gc(this.electricBars,this.scene),bc(this.obstacles,this.scene),Pc(this.runners,this.scene),Mc(this.coins,this.scene),Ec(this.packagePickups,this.scene),Lc(this.powerUps,this.scene),this.throws=wc(this.throws,999,this.scene),this.dropoff&&xc(this.dropoff.mesh,this.scene),this.particles.clear(),this.routeGates=[],this.electricBars=[],this.obstacles=[],this.runners=[],this.coins=[],this.packagePickups=[],this.powerUps=[],this.player&&this.player.dispose(this.scene),this.convoy&&this.convoy.dispose(),this.ufoHazard&&(this.ufoHazard.dispose(),this.ufoHazard=null)}dispose(){var t,e,n;(t=this.inputCleanup)==null||t.call(this),this.inputCleanup=null,(e=this.viewportCleanup)==null||e.call(this),this.viewportCleanup=null,this.stop(),Gt.stopMusic(),Gt.dispose(),this.cleanup(),(n=this.pipeline)==null||n.dispose(),this.pipeline=null,this.renderer.dispose()}}const Ca=[{id:"pepper-drone",category:"gear",name:"Mail Blaster",description:"Faster shoot cooldown — spam mail at charging aliens.",baseCost:70,maxLevel:3},{id:"box-cannon",category:"gear",name:"Parcel Launcher",description:"Package & mail shots hit harder — drop stalkers faster.",baseCost:110,maxLevel:3},{id:"helper-beacon",category:"gear",name:"Target Lock",description:"Auto-aim shots deal bonus damage to runner aliens.",baseCost:90,maxLevel:3},{id:"homing-stamp",category:"gear",name:"Tracking Stamps",description:"Mail shots curve toward the nearest charging alien.",baseCost:125,maxLevel:3},{id:"spread-mail",category:"gear",name:"Spread Envelope",description:"Fire a 3-way mail burst — blanket the lane.",baseCost:95,maxLevel:2},{id:"pierce-pack",category:"gear",name:"Piercing Post",description:"Mail punches through multiple aliens in a line.",baseCost:105,maxLevel:3},{id:"smoke-bomb",category:"ability",name:"Smoke Screen",description:"Aliens cannot tackle you for 4 seconds. 12s cooldown.",baseCost:140,maxLevel:2},{id:"rally-horn",category:"ability",name:"Shield Burst",description:"Brief invincibility to shrug off a hit. 15s cooldown.",baseCost:120,maxLevel:2},{id:"dash",category:"ability",name:"Express Dash",description:"Invulnerable burst — smash through one hazard. 10s cooldown.",baseCost:130,maxLevel:2},{id:"package-armor",category:"upgrade",name:"Extra Heart",description:"+1 max life — survive an extra obstacle or alien hit.",baseCost:80,maxLevel:3},{id:"jump-boots",category:"upgrade",name:"Jump Boots",description:"Higher jumps — clear barricades and pods more easily.",baseCost:60,maxLevel:3},{id:"starter-pouches",category:"upgrade",name:"Starter Pouches",description:"Begin each run with extra packages already collected.",baseCost:55,maxLevel:4},{id:"coin-magnet",category:"upgrade",name:"Coin Magnet",description:"Wider pickup radius for coins and power-ups.",baseCost:50,maxLevel:3}];function Oc(i,t){return Math.floor(i.baseCost*Math.pow(1.55,t))}const E1=[{key:"gear",label:"Gear",hint:"Equip up to 2"},{key:"ability",label:"Abilities",hint:"Equip 1"},{key:"upgrade",label:"Upgrades",hint:"Passive — always on"}];function T1(){return`
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
    </div>`}const Cr=128,zc=new Map;let xs=null;function A1(){return xs||(xs=new Fh({antialias:!1,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),xs.setPixelRatio(1),xs.outputColorSpace=ae),xs}function C1(i){const t=zc.get(i);if(t)return t;const e=Ho(i),n=new vh;n.background=null;const s=new je(32,1,.1,40);s.position.set(.15,1.15,3.35),s.lookAt(0,1.05,0),n.add(new Eh(16777215,.9));const r=new Xi(16777215,1.15);r.position.set(2.5,5,4),n.add(r);const a=new Xi(10406911,.55);a.position.set(-2.5,2,3),n.add(a);const{mesh:o}=Nh(e);o.rotation.y=-.42,n.add(o);const l=A1();l.setSize(Cr,Cr,!1),l.render(n,s);const c=l.domElement.toDataURL("image/png");return zc.set(i,c),qe(o),c}function R1(i,t){const e=document.createElement("img");e.className="character-preview-img",e.alt=Ho(t).name,e.width=Cr,e.height=Cr,e.decoding="async",e.src=C1(t),i.replaceChildren(e)}const Qn="BzStxA5qec2FurM26CjuFcGQ1en9uKTQd2D1eiVJpump",Un=3,P1=`https://pump.fun/coin/${Qn}`;function F1(i=Qn){return`${i.slice(0,4)}…${i.slice(-4)}`}function bs(){const i=window.solana;if(i!=null&&i.isPhantom)return i;const t=window.solflare;return t!=null&&t.isSolflare?t:i!=null&&i.connect?i:t!=null&&t.connect?t:null}function _r(i){const t=i.publicKey;return t?typeof t.toBase58=="function"?t.toBase58():t.toString():null}function Hc(i){if(i&&typeof i=="object"){const t=i;if(t.code===4001)return"Request rejected in wallet.";if(typeof t.message=="string"&&t.message.trim())return t.message}return i instanceof Error&&i.message.trim()?i.message:"Wallet request failed."}async function D1(i,t){if(!i.signMessage)throw new Error("This wallet cannot sign messages. Use Phantom or Solflare.");const e=["Sign in to Mail Run","","This proves you own the wallet. No transaction or fee.",`Site: ${window.location.host}`,`Wallet: ${t}`,`Time: ${new Date().toISOString()}`].join(`
`),n=new TextEncoder().encode(e),s=await i.signMessage(n,"utf8"),r=_r({publicKey:s.publicKey});if(r&&r!==t)throw new Error("Signed wallet does not match the connected wallet.")}function L1(){var i;return!!((i=window.solana)!=null&&i.isPhantom)}function yo(){return F&&!bs()}function I1(){const i=window.location.href,t=window.location.origin,e=`https://phantom.app/ul/browse/${encodeURIComponent(i)}?ref=${encodeURIComponent(t)}`;window.location.assign(e)}function U1(){return F?L1()?"Tap Connect Phantom and approve both prompts.":"Tap Open in Phantom — the app will load this site with your wallet ready.":"Install the Phantom extension, refresh, then connect."}const Gc={1:"district-sunny",2:"district-downtown",3:"district-desert",4:"district-jungle",5:"district-industrial",6:"district-neon",7:"district-blackzone"},Vc={1:{icon:"🏡",tagline:"Suburban first contacts — aliens in the hedges"},2:{icon:"🏙️",tagline:"Downtown chaos — deliver through the warzone"},3:{icon:"🏜️",tagline:"Desert heat — sand, scorpions, and saucers"},4:{icon:"🌴",tagline:"Jungle overrun — vines, spores, and stalkers"},5:{icon:"🏭",tagline:"Industrial rain — acid leaks and blackouts"},6:{icon:"🌃",tagline:"Neon night — synthwave slaughter highway"},7:{icon:"☠️",tagline:"The Black Zone — no mercy, no overtime"}};function N1(i){for(let t=i.segments.length-1;t>=0;t--){const e=i.segments[t];if(e.kind==="dropoff")return e.z}return 750}function k1(i){return __(i).split(" · ").map(t=>`<span class="hazard-chip">${t}</span>`).join("")}class B1{constructor(t,e,n){P(this,"root");P(this,"save");P(this,"tokenGate");P(this,"gateUnsub",null);P(this,"menuScreen",null);P(this,"game",null);P(this,"screen","menu");P(this,"hudCache",{});P(this,"tapHintTimer",null);P(this,"activeLevelId","");this.root=t,this.save=e,this.tokenGate=n,this.gateUnsub=n.subscribe(()=>{this.screen==="menu"&&this.menuScreen&&this.syncWalletGateUI(this.menuScreen)}),this.showMenu()}el(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}clear(){this.tapHintTimer&&(clearTimeout(this.tapHintTimer),this.tapHintTimer=null),this.root.innerHTML=""}setCanvasVisible(t){const e=document.getElementById("game-canvas");e&&(e.style.visibility=t?"visible":"hidden")}wrapScreen(t,e=""){return this.el(`
      <div class="screen-wrap ${e}">
        ${T1()}
        ${t}
      </div>`)}showMenu(){var r;this.screen="menu",hr(!1),(r=this.game)==null||r.stop(),this.setCanvasVisible(!1),this.clear();const t=this.save.get(),e=t.selectedCharacter??"johnny",n=vo.map(a=>`
        <button type="button" class="character-card ${e===a.id?"selected":""}" data-id="${a.id}" aria-pressed="${e===a.id}">
          <div class="character-preview" data-preview="${a.id}" aria-hidden="true"></div>
          <span class="character-name">${a.name}</span>
          <span class="character-tag">${a.tagline}</span>
        </button>`).join(""),s=this.wrapScreen(`
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
          ${`
          <div class="wallet-gate" id="wallet-gate">
            <div class="wallet-gate-accent" aria-hidden="true"></div>
            <div class="wallet-gate-head">
              <div class="wallet-gate-brand">
                <span class="wallet-gate-icon" aria-hidden="true">◎</span>
                <span class="wallet-gate-badge">Holder Gate</span>
              </div>
              <code class="wallet-gate-mint" title="${Qn}">${F1()}</code>
            </div>
            <p class="wallet-gate-desc">${F?"On mobile, open this site in the <strong>Phantom app</strong>, then sign to verify holdings.":"Connect <strong>Phantom</strong>, sign, and hold <strong>$"+Un+"+</strong> of the token."}</p>
            <div class="wallet-gate-body">
              <div class="wallet-status-chip" id="wallet-status-chip">
                <span class="wallet-status-dot" id="wallet-status-dot" aria-hidden="true"></span>
                <span id="wallet-status-label">Ready to connect</span>
              </div>
              <div class="wallet-gate-status" id="wallet-gate-status">
                <div class="wallet-message">${F?"Tap Open in Phantom if you are in Safari/Chrome. Already in Phantom? Tap Connect Phantom.":"Tap Connect Phantom — approve connection, then approve the signature."}</div>
              </div>
              <div class="wallet-gate-actions">
                <button type="button" class="wallet-btn wallet-btn-connect" id="btn-wallet-connect">${F&&yo()?"Open in Phantom":"Connect Phantom"}</button>
                <div class="wallet-connected-pill hidden" id="wallet-connected-pill" aria-live="polite">
                  <span class="wallet-connected-check" aria-hidden="true">✓</span>
                  Wallet Connected
                </div>
                <div class="wallet-action-row hidden" id="wallet-action-row">
                  <button type="button" class="wallet-btn wallet-btn-ghost" id="btn-wallet-recheck">Recheck</button>
                  <button type="button" class="wallet-btn wallet-btn-ghost wallet-btn-disconnect" id="btn-wallet-disconnect">Disconnect</button>
                </div>
              </div>
            </div>
            <a class="wallet-buy-link" href="${P1}" target="_blank" rel="noopener noreferrer">Buy on Pump.fun ↗</a>
          </div>`}
          <div class="menu-buttons">
            <button class="btn btn-primary btn-glow btn-hero" id="btn-play" disabled>▶ Start Run</button>
            <button class="btn btn-secondary btn-hero-secondary" id="btn-shop">🛒 Shop & Loadout</button>
          </div>
          <button class="btn btn-ghost btn-small" id="btn-reset">Reset Save</button>
        </div>
      </div>
    `);this.root.appendChild(s),this.menuScreen=s,this.bindWalletGate(s),s.querySelectorAll(".character-preview").forEach(a=>{const o=a.dataset.preview;R1(a,o)}),s.querySelectorAll(".character-card").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.id;this.save.setCharacter(o),s.querySelectorAll(".character-card").forEach(l=>{const c=l,h=c.dataset.id===o;c.classList.toggle("selected",h),c.setAttribute("aria-pressed",String(h))})})}),s.querySelector("#btn-play").addEventListener("click",()=>{this.requireTokenAccess(()=>this.showLevels())}),s.querySelector("#btn-shop").addEventListener("click",()=>this.showShop()),s.querySelector("#btn-reset").addEventListener("click",()=>{confirm("Reset all progress?")&&(this.save.reset(),this.showMenu())})}bindWalletGate(t){t.querySelector("#btn-wallet-connect").addEventListener("click",()=>{this.tokenGate.connect()}),t.querySelector("#btn-wallet-recheck").addEventListener("click",()=>{this.tokenGate.verify()}),t.querySelector("#btn-wallet-disconnect").addEventListener("click",()=>{this.tokenGate.disconnect()}),this.syncWalletGateUI(t)}syncWalletGateUI(t){const e=this.tokenGate.getSnapshot(),n=t.querySelector("#wallet-gate-status"),s=t.querySelector("#wallet-status-chip"),r=t.querySelector("#wallet-status-label"),a=t.querySelector("#btn-play"),o=t.querySelector("#btn-wallet-connect"),l=t.querySelector("#wallet-connected-pill"),c=t.querySelector("#wallet-action-row"),h=t.querySelector("#btn-wallet-recheck"),u=t.querySelector("#btn-wallet-disconnect"),d=t.querySelector("#wallet-gate");if(!n||!s||!r||!a||!o||!l||!c||!h||!u||!d)return;d.classList.remove("granted","denied","checking","signing","error","connected"),s.classList.remove("granted","denied","checking","signing","error","disconnected"),e.status==="granted"?(d.classList.add("granted"),s.classList.add("granted"),r.textContent="Access granted"):e.status==="denied"?(d.classList.add("denied"),s.classList.add("denied"),r.textContent="Insufficient balance"):e.status==="connecting"?(d.classList.add("checking"),s.classList.add("checking"),r.textContent="Connect in Phantom"):e.status==="signing"?(d.classList.add("signing"),s.classList.add("signing"),r.textContent="Sign in Phantom"):e.status==="checking"?(d.classList.add("checking"),s.classList.add("checking"),r.textContent="Checking balance"):e.status==="error"?(d.classList.add("error"),s.classList.add("error"),r.textContent="Something went wrong"):(s.classList.add("disconnected"),r.textContent="Not verified yet");const p=["checking","granted","denied","error"].includes(e.status)&&e.walletAddress!=null;if(p&&d.classList.add("connected"),e.walletAddress&&p){const m=e.holdingUsd!=null&&e.tokenSymbol?`<div class="wallet-holding-value">~$${e.holdingUsd.toFixed(2)} <span>of $${e.tokenSymbol}</span></div>`:"";n.innerHTML=`
        <div class="wallet-address-row">
          <span class="wallet-address-label">Wallet</span>
          <span class="wallet-address">${e.walletAddress.slice(0,4)}…${e.walletAddress.slice(-4)}</span>
        </div>
        ${m}
        <div class="wallet-message">${typeof e.message=="string"?e.message:"Verification failed. Tap Recheck."}</div>`}else e.walletAddress&&(e.status==="connecting"||e.status==="signing"||e.status==="checking")?n.innerHTML=`<div class="wallet-message">${e.message}</div>`:n.innerHTML=`<div class="wallet-message">${typeof e.message=="string"?e.message:"Connect your wallet to verify holdings."}</div>`;const g=this.tokenGate.hasAccess();a.disabled=!g,a.title=g?"":`Hold at least $${Un} of the game token to play`;const _=e.status==="connecting"||e.status==="signing"||e.status==="checking";if(o.classList.toggle("hidden",p),l.classList.toggle("hidden",!p),c.classList.toggle("hidden",!p),!p){const m=F&&yo();o.textContent=e.status==="connecting"||e.status==="signing"?"Approve in Phantom…":m?"Open in Phantom":"Connect Phantom"}o.disabled=_,h.disabled=_,u.disabled=_}async requireTokenAccess(t){if(this.tokenGate.hasAccess()){t();return}if(await this.tokenGate.verify()){t();return}const n=this.tokenGate.getSnapshot().message;this.toast(n.includes("Phantom")?n:`Connect Phantom first. ${n}`)}showLevels(){this.menuScreen=null,this.screen="levels",this.setCanvasVisible(!1),this.clear();const t=this.save.get();let e=`
      <div class="screen route-screen scroll-touch">
        <header class="route-header">
          <button type="button" class="btn btn-secondary route-back" id="btn-back">← Back</button>
          <div class="route-title-block">
            <span class="route-eyebrow">MAIL RUN · INVASION ROUTES</span>
            <h1>Select Route</h1>
          </div>
          <div class="stat-pill route-coins"><span>🪙</span> ${t.coins.toLocaleString()}</div>
        </header>
        <div class="route-scroll">`;for(const s of w1()){const r=_o(s),a=Gc[s]??"district-sunny",o=Vc[s]??{icon:"📍",tagline:r.name},l=Mi.filter(h=>h.district===s),c=l.filter(h=>(t.levelStars[h.id]??0)>0).length;e+=`
        <section class="route-district ${a}">
          <div class="route-district-head">
            <span class="route-district-icon" aria-hidden="true">${o.icon}</span>
            <div class="route-district-copy">
              <h2>${r.name}</h2>
              <p>${o.tagline}</p>
            </div>
            <span class="route-district-progress">${c}/${l.length}</span>
          </div>
          <div class="route-level-grid">`;for(const h of l){const u=!t.unlockedLevels.includes(h.id),d=t.levelStars[h.id]??0,p=h.name.toLowerCase().includes("boss");e+=`
            <button type="button" class="route-level-card ${u?"locked":""} ${d>=3?"perfect":""} ${p?"boss":""}" data-id="${h.id}" ${u?"disabled":""}>
              <span class="rlc-id">${h.id}</span>
              <span class="rlc-name">${h.name}</span>
              <span class="rlc-stars" aria-label="${d} of 3 stars">${"★".repeat(d)}${"☆".repeat(3-d)}</span>
              ${p?'<span class="rlc-boss-tag">BOSS</span>':""}
            </button>`}e+="</div></section>"}e+="</div></div>";const n=this.wrapScreen(e);this.root.appendChild(n),n.querySelectorAll(".route-level-card:not(.locked)").forEach(s=>{s.addEventListener("click",()=>this.showBriefing(s.dataset.id))}),n.querySelector("#btn-back").addEventListener("click",()=>this.showMenu())}showBriefing(t){const e=Mi.find(c=>c.id===t),n=_o(e.district),s=Gc[e.district]??"district-sunny",r=Vc[e.district]??{icon:"📍",tagline:n.name},a=N1(e),o=e.name.toLowerCase().includes("boss");this.screen="briefing",this.setCanvasVisible(!1),this.clear();const l=this.wrapScreen(`
      <div class="screen mission-screen ${s}">
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
            <div class="hazard-chips">${k1(t)}</div>
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
    `);this.root.appendChild(l),l.querySelector("#btn-start").addEventListener("click",()=>{this.requireTokenAccess(()=>this.startGame(t))}),l.querySelector("#btn-back").addEventListener("click",()=>this.showLevels())}showShop(){this.screen="shop",hr(!1),this.setCanvasVisible(!1),this.clear();const t=this.save.get();let e="";for(const r of E1){const a=Ca.filter(o=>o.category===r.key);if(a.length){e+=`<h2 class="shop-section-title">${r.label} <span class="shop-section-hint">${r.hint}</span></h2>`,e+='<div class="shop-grid">';for(const o of a){const l=this.save.getPurchaseLevel(o.id),c=l>=o.maxLevel,h=c?0:Oc(o,l),u=!c&&t.coins>=h,d=o.category==="gear",p=o.category==="ability",g=d&&t.equippedTurrets.includes(o.id)||p&&t.equippedAbility===o.id;e+=`
        <div class="shop-item ${g?"equipped":""}">
          <div class="shop-item-head">
            <span class="shop-cat">${d?"🎯":p?"⚡":"💎"}</span>
            <h3>${o.name} ${l>0?`<small>Lv.${l}</small>`:""}</h3>
          </div>
          <p>${o.description}</p>
          <div class="meta">
            <span class="price">${c?"✓ MAX":`🪙 ${h}`}</span>
            <div class="shop-actions">
              ${d||p?`<button class="btn btn-small btn-secondary equip-btn" data-id="${o.id}">${g?"✓ Equipped":"Equip"}</button>`:""}
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
      </div>`,s=this.wrapScreen(n);this.root.appendChild(s),s.querySelectorAll(".buy-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.id,o=Ca.find(h=>h.id===a),l=this.save.getPurchaseLevel(a);if(l>=o.maxLevel)return;const c=Oc(o,l);this.save.spendCoins(c)&&(this.save.setPurchaseLevel(a,l+1),this.showShop())})}),s.querySelectorAll(".equip-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.id,o=Ca.find(l=>l.id===a);if(o.category==="gear"){if(this.save.getPurchaseLevel(a)<=0){alert("Buy this gear first!");return}this.save.equipTurret(a)}else if(o.category==="ability"){if(this.save.getPurchaseLevel(a)<=0){alert("Buy this ability first!");return}const l=this.save.get();this.save.equipAbility(l.equippedAbility===a?null:a)}this.showShop()})}),s.querySelector("#btn-back").addEventListener("click",()=>this.showMenu())}startGame(t){var h,u;if(!this.tokenGate.hasAccess()){this.toast(this.tokenGate.getSnapshot().message),this.showMenu();return}this.activeLevelId=t,this.screen="game",hr(!0),this.hudCache={},this.setCanvasVisible(!0),this.clear();const e=this.el(`
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
        ${F?`<button type="button" class="autofire-toggle ${this.save.get().mobileAutoFire?"on":"off"}" id="autofire-toggle" aria-pressed="${this.save.get().mobileAutoFire}">
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

        <div class="tap-hint" id="tap-hint">${F?"Jump · Mail · Slide — tap screen also shoots":"Jump · Slide · Shoot · Swerve at forks!"}</div>

        <div class="combat-banner hidden" id="combat-banner">
          <div class="combat-title" id="combat-title">⚠ INTERCEPT!</div>
          <div class="combat-bar-wrap">
            <div class="combat-bar-fill" id="combat-bar"></div>
          </div>
          <div class="combat-hint">LMB mail · RMB throw 📦 · Convoy fights for you</div>
        </div>

        <div class="scan-prompt hidden" id="scan-prompt"></div>

        <div class="damage-flash hidden" id="damage-flash"></div>

        <div class="hud-bottom ${F?"hud-bottom-mobile":""}">
          <button class="action-btn jump-btn" id="jump-btn" title="Jump${F?"":" (SPACE)"}">
            <span class="action-icon">⬆</span>
            <span>JUMP</span>
          </button>
          <button class="action-btn shoot-btn" id="shoot-btn" title="Shoot">
            <span class="action-icon" id="shoot-icon">📧</span>
            <span id="shoot-label">${F?"MAIL":"SHOOT"}</span>
            <div class="ability-cd hidden" id="shoot-cd"></div>
          </button>
          <button class="action-btn slide-btn" id="slide-btn" title="Slide${F?"":" (S)"}">
            <span class="action-icon">⬇</span>
            <span>SLIDE</span>
          </button>
          ${F?"":`<button class="action-btn special-btn" id="special-btn" title="Ground Quake (E) — 3 hits">
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

        ${F?`<div class="hud-actions-right">
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
    `);this.root.appendChild(e);const n=document.getElementById("game-canvas");(h=this.game)==null||h.dispose(),this.game=new Ar(n,this.save.get(),{onHudUpdate:d=>this.updateHud(d),onToast:d=>this.toast(d),onCombat:d=>{var p;(p=document.getElementById("combat-banner"))==null||p.classList.toggle("hidden",!d)},onDamageFlash:()=>{const d=document.getElementById("damage-flash");d&&(d.classList.remove("hidden"),setTimeout(()=>d.classList.add("hidden"),400))},onEnd:d=>this.onGameEnd(d)});const s=this.save.get().equippedAbility,r=document.getElementById("ability-btn"),a=document.getElementById("ability-label");if(s&&r&&a){const d={"smoke-bomb":"Smoke","rally-horn":"Rally",dash:"Dash"};a.textContent=d[s]??"Ability",r.disabled=!1,r.onclick=()=>{var p;return(p=this.game)==null?void 0:p.useAbility()},r.addEventListener("pointerdown",p=>p.stopPropagation())}const o=document.getElementById("autofire-toggle");o&&o.addEventListener("pointerdown",d=>{var _;d.preventDefault(),d.stopPropagation();const p=!this.save.get().mobileAutoFire;this.save.setMobileAutoFire(p),(_=this.game)==null||_.setAutoFire(p),o.classList.toggle("on",p),o.classList.toggle("off",!p),o.setAttribute("aria-pressed",String(p));const g=document.getElementById("autofire-label");g&&(g.textContent=p?"AUTO ON":"AUTO OFF")});const l=document.getElementById("hud");this.game.bindTouchControls(l),document.getElementById("jump-btn").addEventListener("pointerdown",d=>{var p;d.preventDefault(),d.stopPropagation(),(p=this.game)==null||p.jump()}),document.getElementById("slide-btn").addEventListener("pointerdown",d=>{var p;d.preventDefault(),d.stopPropagation(),(p=this.game)==null||p.slide()});const c=document.getElementById("shoot-btn");c==null||c.addEventListener("pointerdown",d=>{var p;d.preventDefault(),d.stopPropagation(),(p=this.game)==null||p.shoot()}),(u=document.getElementById("hud-back-btn"))==null||u.addEventListener("pointerdown",d=>{var p;d.preventDefault(),d.stopPropagation(),(p=this.game)==null||p.dispose(),this.game=null,hr(!1),this.requireTokenAccess(()=>this.showLevels())}),document.getElementById("special-btn").addEventListener("pointerdown",d=>{var p;d.preventDefault(),d.stopPropagation(),(p=this.game)==null||p.useSpecialQuake()}),this.game.startLevel(t),this.tapHintTimer=setTimeout(()=>{var d;(d=document.getElementById("tap-hint"))==null||d.classList.add("hidden"),this.tapHintTimer=null},3e3)}updateHud(t){var l,c,h,u,d,p;const e=document.getElementById("hud-hearts");if(e&&(t.integrity!==this.hudCache.integrity||t.maxIntegrity!==this.hudCache.maxIntegrity)&&(e.textContent="❤".repeat(t.integrity)+"🖤".repeat(Math.max(0,t.maxIntegrity-t.integrity))),t.coins!==this.hudCache.coins){const g=document.getElementById("hud-coins");g&&(g.textContent=String(t.coins))}if(t.distance!==this.hudCache.distance){const g=document.getElementById("hud-dist");g&&(g.textContent=`${Math.floor(t.distance)}m`)}if(t.distance!==this.hudCache.distance||t.totalDistance!==this.hudCache.totalDistance){const g=document.getElementById("progress-fill");g&&(g.style.width=`${Math.min(100,t.distance/t.totalDistance*100)}%`)}if(t.packages!==this.hudCache.packages){const g=document.getElementById("hud-ammo");g&&(g.textContent=`📦 ${t.packages}`);const _=document.getElementById("shoot-icon"),m=document.getElementById("shoot-label");_&&(_.textContent="📧"),m&&(m.textContent=F?"MAIL":"SHOOT")}const n=document.getElementById("hud-powerup");n&&t.powerUpLabel!==this.hudCache.powerUpLabel&&(t.powerUpLabel?(n.textContent=t.powerUpLabel,n.classList.remove("hidden")):n.classList.add("hidden")),t.invincible!==this.hudCache.invincible&&(t.invincible?e==null||e.classList.add("invincible-glow"):(l=document.getElementById("hud-hearts"))==null||l.classList.remove("invincible-glow"));const s=document.getElementById("fork-hint"),r=t.vaultHint||t.forkHint;if(s&&r!==(this.hudCache.vaultHint||this.hudCache.forkHint)&&(r?(s.textContent=r,s.classList.remove("hidden"),s.classList.toggle("vault-hint",!!t.vaultHint)):(s.classList.add("hidden"),s.classList.remove("vault-hint"))),t.jumpReady!==this.hudCache.jumpReady&&((c=document.getElementById("jump-btn"))==null||c.classList.toggle("ready",t.jumpReady)),t.slideReady!==this.hudCache.slideReady&&((h=document.getElementById("slide-btn"))==null||h.classList.toggle("ready",t.slideReady)),t.shootReady!==this.hudCache.shootReady&&((u=document.getElementById("shoot-btn"))==null||u.classList.toggle("ready",t.shootReady),(d=document.getElementById("shoot-cd"))==null||d.classList.toggle("hidden",t.shootReady)),t.specialCharge!==this.hudCache.specialCharge||t.specialReady!==this.hudCache.specialReady||t.specialShakes!==this.hudCache.specialShakes){const g=document.getElementById("special-fill");g&&(g.style.height=`${Math.round(t.specialCharge*100)}%`);const _=document.getElementById("special-btn");_==null||_.classList.toggle("ready",t.specialReady);const m=document.getElementById("special-shakes");m&&(t.specialShakes>0?(m.textContent=String(t.specialShakes),m.classList.remove("hidden")):m.classList.add("hidden"))}t.jumpReady!==this.hudCache.jumpReady&&((p=document.getElementById("jump-btn"))==null||p.classList.toggle("ready",t.jumpReady));const a=document.getElementById("ability-cd"),o=document.getElementById("ability-btn");a&&o&&(t.abilityCd!==this.hudCache.abilityCd||t.abilityReady!==this.hudCache.abilityReady)&&(t.abilityCd>0?(a.classList.remove("hidden"),a.textContent=Math.ceil(t.abilityCd).toString(),o.disabled=!0):t.abilityReady&&(a.classList.add("hidden"),o.disabled=!1)),this.hudCache={...t}}toast(t){const e=this.el(`<div class="message-toast">${t}</div>`);this.root.appendChild(e),setTimeout(()=>e.remove(),2200)}onGameEnd(t){if(t.won){this.save.addCoins(t.coinsEarned),this.save.setStars(t.levelId,t.stars),this.save.recordWin();const e=kc(t.levelId);e&&this.save.unlockLevel(e)}else this.save.addCoins(Math.floor(t.coinsEarned*.3));this.showResults(t)}showResults(t){var a;this.screen="results",(a=this.game)==null||a.stop(),this.setCanvasVisible(!1),this.clear();const e=kc(t.levelId),n=this.save.get(),s=t.won&&e&&n.unlockedLevels.includes(e),r=this.wrapScreen(`
      <div class="screen results-screen screen-glass ${t.won?"won":"lost"}">
        <div class="results-icon">${t.won?"📦":"💀"}</div>
        <div class="results-title">${t.won?"Delivered!":"Mission Failed"}</div>
        ${t.deathReason?`<p class="death-reason">${t.deathReason}</p>`:""}
        <div class="stars-display">${"★".repeat(t.stars)}${"☆".repeat(3-t.stars)}</div>
        <div class="results-reward">+${t.coinsEarned} 🪙 · ${t.time.toFixed(1)}s</div>
        <div class="results-buttons">
          ${s?'<button class="btn btn-primary btn-glow" id="btn-next">Next Level →</button>':""}
          <button class="btn btn-primary" id="btn-retry">↺ Retry</button>
          <button class="btn btn-secondary" id="btn-shop">🛒 Shop</button>
          <button class="btn btn-secondary" id="btn-menu">Menu</button>
        </div>
      </div>
    `);this.root.appendChild(r),s&&r.querySelector("#btn-next").addEventListener("click",()=>{this.requireTokenAccess(()=>this.showBriefing(e))}),r.querySelector("#btn-retry").addEventListener("click",()=>{this.requireTokenAccess(()=>this.showBriefing(t.levelId))}),r.querySelector("#btn-shop").addEventListener("click",()=>this.showShop()),r.querySelector("#btn-menu").addEventListener("click",()=>this.showMenu())}}const O1=["https://solana-rpc.publicnode.com","https://api.mainnet-beta.solana.com"];function z1(i){if(typeof i=="string")return i;if(i&&typeof i=="object"){const t=i;return typeof t.message=="string"?t.message:t.message!=null?JSON.stringify(t.message):JSON.stringify(i)}return"RPC request failed"}async function H1(i,t){let e=null;for(const n of O1)try{const s=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:i,params:t})});if(!s.ok){e=new Error(`RPC HTTP ${s.status}`);continue}const r=await s.json();if(r.error){e=new Error(z1(r.error));continue}if(r.result===void 0){e=new Error("RPC returned no result");continue}return r.result}catch(s){e=s instanceof Error?s:new Error(String(s))}throw e??new Error("Could not reach Solana network. Try again.")}async function G1(i,t){return(await H1("getTokenAccountsByOwner",[i,{mint:t},{encoding:"jsonParsed"}])).value.reduce((n,s)=>n+(s.account.data.parsed.info.tokenAmount.uiAmount??0),0)}async function V1(i){var a,o;const t=await fetch(`https://api.dexscreener.com/latest/dex/tokens/${i}`);if(!t.ok)return null;const s=[...(await t.json()).pairs??[]].sort((l,c)=>{var h,u;return(((h=c.liquidity)==null?void 0:h.usd)??0)-(((u=l.liquidity)==null?void 0:u.usd)??0)})[0];if(!(s!=null&&s.priceUsd))return null;const r=Number.parseFloat(s.priceUsd);return!Number.isFinite(r)||r<=0?null:{priceUsd:r,symbol:((o=(a=s.baseToken)==null?void 0:a.symbol)==null?void 0:o.trim())||"GAME"}}async function W1(i){const[t,e]=await Promise.all([V1(Qn),G1(i,Qn)]);if(!t)return{granted:!1,wallet:i,mint:Qn,tokenSymbol:"GAME",tokenBalance:e,tokenPriceUsd:null,holdingUsd:null,minHoldingUsd:Un,message:"Could not fetch token price. Try again in a moment."};const n=e*t.priceUsd;if(n>=Un)return{granted:!0,wallet:i,mint:Qn,tokenSymbol:t.symbol,tokenBalance:e,tokenPriceUsd:t.priceUsd,holdingUsd:n,minHoldingUsd:Un,message:`Access granted · ~$${n.toFixed(2)} of $${t.symbol}`};const r=Math.max(0,Un-n);return{granted:!1,wallet:i,mint:Qn,tokenSymbol:t.symbol,tokenBalance:e,tokenPriceUsd:t.priceUsd,holdingUsd:n,minHoldingUsd:Un,message:e>0?`Need ~$${r.toFixed(2)} more of $${t.symbol} (~$${Un} total).`:`Hold at least $${Un} of $${t.symbol} to play.`}}async function X1(i){return W1(i)}function Ra(i,t){return typeof i=="string"&&i.trim()?i:t}const q1={status:"disconnected",walletAddress:null,tokenSymbol:"GAME",tokenBalance:null,tokenPriceUsd:null,holdingUsd:null,message:U1()};class Y1{constructor(){P(this,"snapshot",{...q1});P(this,"listeners",new Set);P(this,"provider",null);P(this,"signedWallet",null);P(this,"boundOnWalletChange",()=>{this.signedWallet=null,this.verify()});this.provider=bs(),this.attachWalletListeners()}subscribe(t){return this.listeners.add(t),t(this.snapshot),()=>this.listeners.delete(t)}getSnapshot(){return this.snapshot}hasAccess(){return this.snapshot.status==="granted"}async connect(){const t=bs();if(!t){if(yo()){this.setSnapshot({status:"connecting",walletAddress:null,message:"Opening Phantom… once the game loads there, tap Connect Phantom again."}),I1();return}this.setSnapshot({status:"error",walletAddress:null,message:"Phantom not found. Install the extension, refresh, then connect."}),window.open("https://phantom.app/download","_blank","noopener,noreferrer");return}this.provider=t,this.signedWallet=null,this.attachWalletListeners();try{this.setSnapshot({status:"connecting",walletAddress:null,message:"Approve the connection in Phantom…"}),await t.connect({onlyIfTrusted:!1});const e=_r(t);if(!e)throw new Error("Wallet connected but no address was returned.");this.setSnapshot({status:"signing",walletAddress:e,message:"Approve the signature in Phantom…"}),await D1(t,e),this.signedWallet=e,await this.verify()}catch(e){this.signedWallet=null,this.setSnapshot({status:"error",walletAddress:_r(t),message:Hc(e)})}}async verify(){const t=this.provider??bs();if(!t)return this.setSnapshot({status:"disconnected",walletAddress:null,tokenBalance:null,tokenPriceUsd:null,holdingUsd:null,message:"Connect Phantom and sign to verify your token holdings."}),!1;const e=_r(t);if(!e)return this.setSnapshot({status:"disconnected",walletAddress:null,tokenBalance:null,tokenPriceUsd:null,holdingUsd:null,message:"Connect Phantom and sign to verify your token holdings."}),!1;if(this.signedWallet!==e)return this.setSnapshot({status:"disconnected",walletAddress:e,message:"Tap Connect Wallet and approve both prompts in Phantom."}),!1;this.setSnapshot({status:"checking",walletAddress:e,message:"Checking token balance…"});try{const n=await X1(e);return n.tokenPriceUsd?n.granted?(this.setSnapshot({status:"granted",walletAddress:e,tokenSymbol:n.tokenSymbol,tokenBalance:n.tokenBalance,tokenPriceUsd:n.tokenPriceUsd,holdingUsd:n.holdingUsd,message:Ra(n.message,"Access granted.")}),!0):(this.setSnapshot({status:"denied",walletAddress:e,tokenSymbol:n.tokenSymbol,tokenBalance:n.tokenBalance,tokenPriceUsd:n.tokenPriceUsd,holdingUsd:n.holdingUsd,message:Ra(n.message,"Insufficient token balance.")}),!1):(this.setSnapshot({status:"error",walletAddress:e,tokenBalance:n.tokenBalance,tokenPriceUsd:null,holdingUsd:null,message:Ra(n.message,"Could not fetch token price. Try again in a moment.")}),!1)}catch(n){return this.setSnapshot({status:"error",walletAddress:e,message:Hc(n)}),!1}}async disconnect(){const t=this.provider??bs();this.signedWallet=null;try{await(t==null?void 0:t.disconnect())}catch{}this.setSnapshot({status:"disconnected",walletAddress:null,tokenBalance:null,tokenPriceUsd:null,holdingUsd:null,message:"Connect Phantom and sign to verify your token holdings."})}attachWalletListeners(){const t=this.provider;!(t!=null&&t.on)||!t.removeListener||(t.removeListener("disconnect",this.boundOnWalletChange),t.removeListener("accountChanged",this.boundOnWalletChange),t.on("disconnect",this.boundOnWalletChange),t.on("accountChanged",this.boundOnWalletChange))}setSnapshot(t){this.snapshot={...this.snapshot,...t};for(const e of this.listeners)e(this.snapshot)}}const $1=new jh,j1=new Y1,Z1=document.getElementById("ui-root");new B1(Z1,$1,j1);b1();function Ur(i){i.target.closest(".shop-scroll, .levels-screen, .scroll-touch")||i.preventDefault()}document.addEventListener("touchmove",Ur,{passive:!1});document.addEventListener("gesturestart",Ur);document.addEventListener("gesturechange",Ur);document.addEventListener("gestureend",Ur);document.addEventListener("touchstart",i=>{if(i.touches.length>1){i.preventDefault();return}document.body.classList.contains("game-active")&&(i.target.closest("button, .touch-steer")||i.preventDefault())},{passive:!1,capture:!0});let Wc=0;document.addEventListener("touchend",i=>{const t=Date.now();t-Wc<=320&&i.preventDefault(),Wc=t,F&&window.scrollTo(0,0)},{passive:!1});document.addEventListener("contextmenu",i=>{i.target.closest("#game-canvas, .hud")&&i.preventDefault()});
