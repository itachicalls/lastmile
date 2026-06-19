var Lh=Object.defineProperty;var Ih=(s,t,e)=>t in s?Lh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var F=(s,t,e)=>Ih(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Cr={coins:0,unlockedLevels:["1-1"],levelStars:{},purchases:{},equippedTurrets:[],equippedAbility:null,totalDeliveries:0,selectedCharacter:"johnny",mobileAutoFire:!0},Uo={convoy:5,maxConvoy:50,integrity:3,maxIntegrity:3,packages:0,maxPackages:25,stamps:0,coins:0,speed:11,baseSpeed:11,distance:0,integrityLost:!1,bonusRoute:!1},No="last-mile-save";class Uh{constructor(){F(this,"data");this.data=this.load()}load(){try{const t=localStorage.getItem(No);if(t)return{...Cr,...JSON.parse(t)}}catch{}return{...Cr}}save(){localStorage.setItem(No,JSON.stringify(this.data))}get(){return this.data}addCoins(t){this.data.coins+=t,this.save()}spendCoins(t){return this.data.coins<t?!1:(this.data.coins-=t,this.save(),!0)}unlockLevel(t){this.data.unlockedLevels.includes(t)||(this.data.unlockedLevels.push(t),this.save())}setStars(t,e){const n=this.data.levelStars[t]??0;e>n&&(this.data.levelStars[t]=e,this.save())}getPurchaseLevel(t){return this.data.purchases[t]??0}setPurchaseLevel(t,e){this.data.purchases[t]=e,this.save()}equipTurret(t){const e=this.data.equippedTurrets;e.includes(t)?this.data.equippedTurrets=e.filter(n=>n!==t):e.length<2&&this.data.equippedTurrets.push(t),this.save()}equipAbility(t){this.data.equippedAbility=t,this.save()}setCharacter(t){this.data.selectedCharacter=t,this.save()}setMobileAutoFire(t){this.data.mobileAutoFire=t,this.save()}recordWin(){this.data.totalDeliveries+=1,this.save()}reset(){this.data={...Cr},this.save()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="171",Nh=0,Bo=1,Bh=2,kh=0,Fc=1,zh=2,In=3,Kn=0,Je=1,he=2,kn=0,jn=1,Yt=2,ko=3,zo=4,Oh=5,hi=100,Hh=101,Gh=102,Vh=103,Wh=104,Xh=200,qh=201,Yh=202,$h=203,xa=204,ya=205,Zh=206,jh=207,Jh=208,Kh=209,Qh=210,tu=211,eu=212,nu=213,iu=214,Ma=0,ba=1,Sa=2,Wi=3,wa=4,Ea=5,Ta=6,Aa=7,Dc=0,su=1,ru=2,Jn=0,au=1,ou=2,lu=3,Lc=4,cu=5,hu=6,uu=7,Ic=300,Xi=301,qi=302,Ca=303,Ra=304,xr=306,Sn=1e3,di=1001,Pa=1002,xn=1003,du=1004,Ps=1005,En=1006,Rr=1007,fi=1008,Gn=1009,Uc=1010,Nc=1011,bs=1012,lo=1013,vi=1014,Nn=1015,zn=1016,co=1017,ho=1018,Yi=1020,Bc=35902,kc=1021,zc=1022,vn=1023,Oc=1024,Hc=1025,Hi=1026,$i=1027,Gc=1028,uo=1029,Vc=1030,fo=1031,po=1033,nr=33776,ir=33777,sr=33778,rr=33779,Fa=35840,Da=35841,La=35842,Ia=35843,Ua=36196,Na=37492,Ba=37496,ka=37808,za=37809,Oa=37810,Ha=37811,Ga=37812,Va=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,$a=37818,Za=37819,ja=37820,Ja=37821,ar=36492,Ka=36494,Qa=36495,Wc=36283,to=36284,eo=36285,no=36286,fu=3200,pu=3201,Xc=0,mu=1,Zn="",de="srgb",Zi="srgb-linear",cr="linear",ue="srgb",xi=7680,Oo=519,gu=512,vu=513,_u=514,qc=515,xu=516,yu=517,Mu=518,bu=519,io=35044,Ho="300 es",Bn=2e3,hr=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Go=1234567;const ms=Math.PI/180,Ss=180/Math.PI;function On(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Wt(s,t,e){return Math.max(t,Math.min(e,s))}function mo(s,t){return(s%t+t)%t}function Su(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function wu(s,t,e){return s!==t?(e-s)/(t-s):0}function gs(s,t,e){return(1-e)*s+e*t}function Eu(s,t,e,n){return gs(s,t,1-Math.exp(-e*n))}function Tu(s,t=1){return t-Math.abs(mo(s,t*2)-t)}function Au(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Cu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ru(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Pu(s,t){return s+Math.random()*(t-s)}function Fu(s){return s*(.5-Math.random())}function Du(s){s!==void 0&&(Go=s);let t=Go+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lu(s){return s*ms}function Iu(s){return s*Ss}function Uu(s){return(s&s-1)===0&&s!==0}function Nu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ku(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Gi={DEG2RAD:ms,RAD2DEG:Ss,generateUUID:On,clamp:Wt,euclideanModulo:mo,mapLinear:Su,inverseLerp:wu,lerp:gs,damp:Eu,pingpong:Tu,smoothstep:Au,smootherstep:Cu,randInt:Ru,randFloat:Pu,randFloatSpread:Fu,seededRandom:Du,degToRad:Lu,radToDeg:Iu,isPowerOfTwo:Uu,ceilPowerOfTwo:Nu,floorPowerOfTwo:Bu,setQuaternionFromProperEuler:ku,normalize:ce,denormalize:gn};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],x=i[4],y=i[7],C=i[2],T=i[5],P=i[8];return r[0]=a*_+o*M+l*C,r[3]=a*m+o*x+l*T,r[6]=a*p+o*y+l*P,r[1]=c*_+h*M+u*C,r[4]=c*m+h*x+u*T,r[7]=c*p+h*y+u*P,r[2]=d*_+f*M+g*C,r[5]=d*m+f*x+g*T,r[8]=d*p+f*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Ot;function Yc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zu(){const s=ur("canvas");return s.style.display="block",s}const Vo={};function zi(s){s in Vo||(Vo[s]=!0,console.warn(s))}function Ou(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Hu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wo=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xo=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vu(){const s={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zn?cr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zi]:{primaries:t,whitePoint:n,transfer:cr,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:de},outputColorSpaceConfig:{drawingBufferColorSpace:de}},[de]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:de}}}),s}const ee=Vu();function Hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let yi;class Wu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=ur("canvas")),yi.width=t.width,yi.height=t.height;const n=yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xu=0;class $c{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fr(i[a].image)):r.push(Fr(i[a]))}else r=Fr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qu=0;class We extends Ki{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=di,i=di,r=En,a=fi,o=vn,l=Gn,c=We.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=On(),this.name="",this.source=new $c(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sn:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sn:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Ic;We.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,i=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(f+1)/2,C=(p+1)/2,T=(h+d)/4,P=(u+_)/4,I=(g+m)/4;return x>y&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=P/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=P/r,i=I/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new We(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $c(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zc extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $u extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,p*M);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const y=o*M;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new D,qo=new ws;class Es{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Ds.subVectors(this.max,ss),Mi.subVectors(t.a,ss),bi.subVectors(t.b,ss),Si.subVectors(t.c,ss),Vn.subVectors(bi,Mi),Wn.subVectors(Si,bi),ni.subVectors(Mi,Si);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-ni.z,ni.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,ni.z,0,-ni.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-ni.y,ni.x,0];return!Lr(e,Mi,bi,Si,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Lr(e,Mi,bi,Si,Ds))?!1:(Ls.crossVectors(Vn,Wn),e=[Ls.x,Ls.y,Ls.z],Lr(e,Mi,bi,Si,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new D,new D,new D,new D,new D,new D,new D,new D],fn=new D,Fs=new Es,Mi=new D,bi=new D,Si=new D,Vn=new D,Wn=new D,ni=new D,ss=new D,Ds=new D,Ls=new D,ii=new D;function Lr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ii.fromArray(s,r);const o=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Zu=new Es,rs=new D,Ir=new D;class go{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);const e=rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ir.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(Ir)),this.expandByPoint(rs.copy(t.center).sub(Ir))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new D,Ur=new D,Is=new D,Xn=new D,Nr=new D,Us=new D,Br=new D;class ju{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ur.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(Ur);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Is),o=Xn.dot(this.direction),l=-Xn.dot(Is),c=Xn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ur).addScaledVector(Is,d),f}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,i,r){Nr.subVectors(e,t),Us.subVectors(n,t),Br.crossVectors(Nr,Us);let a=this.direction.dot(Br),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const l=o*this.direction.dot(Us.crossVectors(Xn,Us));if(l<0)return null;const c=o*this.direction.dot(Nr.cross(Xn));if(c<0||l+c>a)return null;const h=-o*Xn.dot(Br);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ju,t,Ku)}lookAt(t,e,n){const i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),qn.crossVectors(n,Qe),qn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),qn.crossVectors(n,Qe)),qn.normalize(),Ns.crossVectors(Qe,qn),i[0]=qn.x,i[4]=Ns.x,i[8]=Qe.x,i[1]=qn.y,i[5]=Ns.y,i[9]=Qe.y,i[2]=qn.z,i[6]=Ns.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],y=n[11],C=n[15],T=i[0],P=i[4],I=i[8],b=i[12],w=i[1],N=i[5],X=i[9],W=i[13],Z=i[2],tt=i[6],$=i[10],nt=i[14],Y=i[3],ut=i[7],vt=i[11],Tt=i[15];return r[0]=a*T+o*w+l*Z+c*Y,r[4]=a*P+o*N+l*tt+c*ut,r[8]=a*I+o*X+l*$+c*vt,r[12]=a*b+o*W+l*nt+c*Tt,r[1]=h*T+u*w+d*Z+f*Y,r[5]=h*P+u*N+d*tt+f*ut,r[9]=h*I+u*X+d*$+f*vt,r[13]=h*b+u*W+d*nt+f*Tt,r[2]=g*T+_*w+m*Z+p*Y,r[6]=g*P+_*N+m*tt+p*ut,r[10]=g*I+_*X+m*$+p*vt,r[14]=g*b+_*W+m*nt+p*Tt,r[3]=M*T+x*w+y*Z+C*Y,r[7]=M*P+x*N+y*tt+C*ut,r[11]=M*I+x*X+y*$+C*vt,r[15]=M*b+x*W+y*nt+C*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,C=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=e*M+n*x+i*y+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return t[0]=M*P,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*P,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*P,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*P,t[4]=x*P,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*P,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*P,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*P,t[8]=y*P,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*P,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*P,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*P,t[12]=C*P,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*P,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*P,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,M=l*c,x=l*h,y=l*u,C=n.x,T=n.y,P=n.z;return i[0]=(1-(_+p))*C,i[1]=(f+y)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+p))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(g+x)*P,i[9]=(m-M)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=wi.set(i[0],i[1],i[2]).length();const a=wi.set(i[4],i[5],i[6]).length(),o=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);const c=1/r,h=1/a,u=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Bn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===Bn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===hr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Bn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h;let g,_;if(o===Bn)g=(a+r)*u,_=-2*u;else if(o===hr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new D,pn=new ve,Ju=new D(0,0,0),Ku=new D(1,1,1),qn=new D,Ns=new D,Qe=new D,Yo=new ve,$o=new ws;class Tn{constructor(t=0,e=0,n=0,i=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $o.setFromEuler(this),this.setFromQuaternion($o,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qu=0;const Zo=new D,Ei=new ws,Fn=new ve,Bs=new D,as=new D,td=new D,ed=new ws,jo=new D(1,0,0),Jo=new D(0,1,0),Ko=new D(0,0,1),Qo={type:"added"},nd={type:"removed"},Ti={type:"childadded",child:null},kr={type:"childremoved",child:null};class Le extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new D,e=new Tn,n=new ws,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new Ot}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(jo,t)}rotateY(t){return this.rotateOnAxis(Jo,t)}rotateZ(t){return this.rotateOnAxis(Ko,t)}translateOnAxis(t,e){return Zo.copy(t).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jo,t)}translateY(t){return this.translateOnAxis(Jo,t)}translateZ(t){return this.translateOnAxis(Ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(as,Bs,this.up):Fn.lookAt(Bs,as,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qo),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nd),kr.child=t,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qo),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Le.DEFAULT_UP=new D(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new D,Dn=new D,zr=new D,Ln=new D,Ai=new D,Ci=new D,tl=new D,Or=new D,Hr=new D,Gr=new D,Vr=new fe,Wr=new fe,Xr=new fe;class hn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){mn.subVectors(i,e),Dn.subVectors(n,e),zr.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Dn),l=mn.dot(zr),c=Dn.dot(Dn),h=Dn.dot(zr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Vr.setScalar(0),Wr.setScalar(0),Xr.setScalar(0),Vr.fromBufferAttribute(t,e),Wr.fromBufferAttribute(t,n),Xr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Vr,r.x),a.addScaledVector(Wr,r.y),a.addScaledVector(Xr,r.z),a}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),Dn.subVectors(t,e),mn.cross(Dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),mn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ai.subVectors(i,n),Ci.subVectors(r,n),Or.subVectors(t,n);const l=Ai.dot(Or),c=Ci.dot(Or);if(l<=0&&c<=0)return e.copy(n);Hr.subVectors(t,i);const h=Ai.dot(Hr),u=Ci.dot(Hr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ai,a);Gr.subVectors(t,r);const f=Ai.dot(Gr),g=Ci.dot(Gr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ci,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return tl.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(tl,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Ai,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function qr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=mo(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=qr(a,r,t+1/3),this.g=qr(a,r,t),this.b=qr(a,r,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=de){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){const n=Jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return ee.fromWorkingColorSpace(Be.copy(this),t),Math.round(Wt(Be.r*255,0,255))*65536+Math.round(Wt(Be.g*255,0,255))*256+Math.round(Wt(Be.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,r=Be.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=de){ee.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(ks);const n=gs(Yn.h,ks.h,e),i=gs(Yn.s,ks.s,e),r=gs(Yn.l,ks.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new bt;bt.NAMES=Jc;let id=0;class Qi extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=On(),this.name="",this.type="Material",this.blending=jn,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=ya,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dt extends Qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new D,zs=new at;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=io,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==io&&(t.usage=this.usage),t}}class Kc extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qc extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sd=0;const ln=new ve,Yr=new Le,Ri=new D,tn=new Es,os=new Es,De=new D;class ze extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yc(t)?Qc:Kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Yr.lookAt(t),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];os.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(tn.min,os.min),tn.expandByPoint(De),De.addVectors(tn.max,os.max),tn.expandByPoint(De)):(tn.expandByPoint(os.min),tn.expandByPoint(os.max))}tn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(t,c),De.add(Ri)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new D,l[I]=new D;const c=new D,h=new D,u=new D,d=new at,f=new at,g=new at,_=new D,m=new D;function p(I,b,w){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,w),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(N),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),o[I].add(_),o[b].add(_),o[w].add(_),l[I].add(m),l[b].add(m),l[w].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,b=M.length;I<b;++I){const w=M[I],N=w.start,X=w.count;for(let W=N,Z=N+X;W<Z;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const x=new D,y=new D,C=new D,T=new D;function P(I){C.fromBufferAttribute(i,I),T.copy(C);const b=o[I];x.copy(b),x.sub(C.multiplyScalar(C.dot(b))).normalize(),y.crossVectors(T,b);const N=y.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,N)}for(let I=0,b=M.length;I<b;++I){const w=M[I],N=w.start,X=w.count;for(let W=N,Z=N+X;W<Z;W+=3)P(t.getX(W+0)),P(t.getX(W+1)),P(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const el=new ve,si=new ju,Os=new go,nl=new D,Hs=new D,Gs=new D,Vs=new D,$r=new D,Ws=new D,il=new D,Xs=new D;class se extends Le{constructor(t=new ze,e=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&($r.fromBufferAttribute(u,t),a?Ws.addScaledVector($r,h):Ws.addScaledVector($r.sub(e),h))}e.add(Ws)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(Os.containsPoint(si.origin)===!1&&(si.intersectSphere(Os,nl)===null||si.origin.distanceToSquared(nl)>(t.far-t.near)**2))&&(el.copy(r).invert(),si.copy(t.ray).applyMatrix4(el),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,C=x;y<C;y+=3){const T=o.getX(y),P=o.getX(y+1),I=o.getX(y+2);i=qs(this,p,t,n,c,h,u,T,P,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=qs(this,a,t,n,c,h,u,M,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,C=x;y<C;y+=3){const T=y,P=y+1,I=y+2;i=qs(this,p,t,n,c,h,u,T,P,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,y=m+2;i=qs(this,a,t,n,c,h,u,M,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function rd(s,t,e,n,i,r,a,o){let l;if(t.side===Je?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Kn,o),l===null)return null;Xs.copy(o),Xs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Xs);return c<e.near||c>e.far?null:{distance:c,point:Xs.clone(),object:s}}function qs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Hs),s.getVertexPosition(l,Gs),s.getVertexPosition(c,Vs);const h=rd(s,t,e,n,Hs,Gs,Vs,il);if(h){const u=new D;hn.getBarycoord(il,Hs,Gs,Vs,u),i&&(h.uv=hn.getInterpolatedAttribute(i,o,l,c,u,new at)),r&&(h.uv1=hn.getInterpolatedAttribute(r,o,l,c,u,new at)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};hn.getNormal(Hs,Gs,Vs,d.normal),h.face=d,h.barycoord=u}return h}class L extends ze{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(_,m,p,M,x,y,C,T,P,I,b){const w=y/P,N=C/I,X=y/2,W=C/2,Z=T/2,tt=P+1,$=I+1;let nt=0,Y=0;const ut=new D;for(let vt=0;vt<$;vt++){const Tt=vt*N-W;for(let Xt=0;Xt<tt;Xt++){const pe=Xt*w-X;ut[_]=pe*M,ut[m]=Tt*x,ut[p]=Z,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[p]=T>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Xt/P),u.push(1-vt/I),nt+=1}}for(let vt=0;vt<I;vt++)for(let Tt=0;Tt<P;Tt++){const Xt=d+Tt+tt*vt,pe=d+Tt+tt*(vt+1),J=d+(Tt+1)+tt*(vt+1),rt=d+(Tt+1)+tt*vt;l.push(Xt,pe,rt),l.push(pe,J,rt),Y+=6}o.addGroup(f,Y,b),f+=Y,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new L(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=ji(s[e]);for(const i in n)t[i]=n[i]}return t}function ad(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function th(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const dr={clone:ji,merge:Ge};var od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends Qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class eh extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new D,sl=new at,rl=new at;class je extends eh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,sl,rl),e.subVectors(rl,sl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ms*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Fi=1;class cd extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new je(Pi,Fi,t,e);i.layers=this.layers,this.add(i);const r=new je(Pi,Fi,t,e);r.layers=this.layers,this.add(r);const a=new je(Pi,Fi,t,e);a.layers=this.layers,this.add(a);const o=new je(Pi,Fi,t,e);o.layers=this.layers,this.add(o);const l=new je(Pi,Fi,t,e);l.layers=this.layers,this.add(l);const c=new je(Pi,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nh extends We{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hd extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new L(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:kn});r.uniforms.tEquirect.value=e;const a=new se(i,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=En),new cd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class fr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new fr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ih extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ud{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=io,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new D;class pr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vo extends Qi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Di;const ls=new D,Li=new D,Ii=new D,Ui=new at,cs=new at,sh=new ve,Ys=new D,hs=new D,$s=new D,al=new at,Zr=new at,ol=new at;class yr extends Le{constructor(t=new vo){if(super(),this.isSprite=!0,this.type="Sprite",Di===void 0){Di=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ud(e,5);Di.setIndex([0,1,2,0,2,3]),Di.setAttribute("position",new pr(n,3,0,!1)),Di.setAttribute("uv",new pr(n,2,3,!1))}this.geometry=Di,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),sh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ii.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Ii.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Zs(Ys.set(-.5,-.5,0),Ii,a,Li,i,r),Zs(hs.set(.5,-.5,0),Ii,a,Li,i,r),Zs($s.set(.5,.5,0),Ii,a,Li,i,r),al.set(0,0),Zr.set(1,0),ol.set(1,1);let o=t.ray.intersectTriangle(Ys,hs,$s,!1,ls);if(o===null&&(Zs(hs.set(-.5,.5,0),Ii,a,Li,i,r),Zr.set(0,1),o=t.ray.intersectTriangle(Ys,$s,hs,!1,ls),o===null))return;const l=t.ray.origin.distanceTo(ls);l<t.near||l>t.far||e.push({distance:l,point:ls.clone(),uv:hn.getInterpolation(ls,Ys,hs,$s,al,Zr,ol,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zs(s,t,e,n,i,r){Ui.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(cs.x=r*Ui.x-i*Ui.y,cs.y=i*Ui.x+r*Ui.y):cs.copy(Ui),s.copy(t),s.x+=cs.x,s.y+=cs.y,s.applyMatrix4(sh)}const jr=new D,dd=new D,fd=new Ot;class li{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=jr.subVectors(n,e).cross(dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fd.getNormalMatrix(t),i=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new go,js=new D;class _o{constructor(t=new li,e=new li,n=new li,i=new li,r=new li,a=new li){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+h,m+g,y+M).normalize(),n[3].setComponents(l-a,d-h,m-g,y-M).normalize(),n[4].setComponents(l-o,d-u,m-_,y-x).normalize(),e===Bn)n[5].setComponents(l+o,d+u,m+_,y+x).normalize();else if(e===hr)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(js.x=i.normal.x>0?t.max.x:t.min.x,js.y=i.normal.y>0?t.max.y:t.min.y,js.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pt extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ke extends We{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rh extends We{constructor(t,e,n,i,r,a,o,l,c,h=Hi){if(h!==Hi&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=vi),n===void 0&&h===$i&&(n=Yi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new at:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],r=[],a=[],o=new D,l=new ve;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Wt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Wt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xo extends An{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class pd extends xo{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yo(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Js=new D,Jr=new yo,Kr=new yo,Qr=new yo;class md extends An{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Js.subVectors(i[0],i[1]).add(i[0]),c=Js);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Js.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Js),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Jr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Kr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Qr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Jr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Kr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Qr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Jr.calc(l),Kr.calc(l),Qr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ll(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function gd(s,t){const e=1-s;return e*e*t}function vd(s,t){return 2*(1-s)*s*t}function _d(s,t){return s*s*t}function vs(s,t,e,n){return gd(s,t)+vd(s,e)+_d(s,n)}function xd(s,t){const e=1-s;return e*e*e*t}function yd(s,t){const e=1-s;return 3*e*e*s*t}function Md(s,t){return 3*(1-s)*s*s*t}function bd(s,t){return s*s*s*t}function _s(s,t,e,n,i){return xd(s,t)+yd(s,e)+Md(s,n)+bd(s,i)}class ah extends An{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(t,i.x,r.x,a.x,o.x),_s(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sd extends An{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(t,i.x,r.x,a.x,o.x),_s(t,i.y,r.y,a.y,o.y),_s(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class oh extends An{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wd extends An{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lh extends An{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,i.x,r.x,a.x),vs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ed extends An{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,i.x,r.x,a.x),vs(t,i.y,r.y,a.y),vs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ch extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ll(o,l.x,c.x,h.x,u.x),ll(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new at().fromArray(i))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:pd,CatmullRomCurve3:md,CubicBezierCurve:ah,CubicBezierCurve3:Sd,EllipseCurve:xo,LineCurve:oh,LineCurve3:wd,QuadraticBezierCurve:lh,QuadraticBezierCurve3:Ed,SplineCurve:ch});class Td extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new cl[i.type]().fromJSON(i))}return this}}class Ad extends Td{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new oh(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new lh(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new ah(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ch(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new xo(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Mo extends ze{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Wt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new D,d=new at,f=new D,g=new D,_=new D;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const x=n+M*h*i,y=Math.sin(x),C=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*C,a.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),o.push(d.x,d.y);const P=l[3*T+0]*y,I=l[3*T+1],b=l[3*T+0]*C;c.push(P,I,b)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const y=x+M*t.length,C=y,T=y+t.length,P=y+t.length+1,I=y+1;r.push(C,T,I),r.push(P,I,T)}this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("uv",new oe(o,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.points,t.segments,t.phiStart,t.phiLength)}}class bn extends Mo{constructor(t=1,e=1,n=4,i=8){const r=new Ad;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new bn(t.radius,t.length,t.capSegments,t.radialSegments)}}class Re extends ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new D,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ot extends ze{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function M(){const y=new D,C=new D;let T=0;const P=(e-t)/n;for(let I=0;I<=r;I++){const b=[],w=I/r,N=w*(e-t)+t;for(let X=0;X<=i;X++){const W=X/i,Z=W*l+o,tt=Math.sin(Z),$=Math.cos(Z);C.x=N*tt,C.y=-w*n+m,C.z=N*$,u.push(C.x,C.y,C.z),y.set(tt,P,$).normalize(),d.push(y.x,y.y,y.z),f.push(W,1-w),b.push(g++)}_.push(b)}for(let I=0;I<i;I++)for(let b=0;b<r;b++){const w=_[b][I],N=_[b+1][I],X=_[b+1][I+1],W=_[b][I+1];(t>0||b!==0)&&(h.push(w,N,W),T+=3),(e>0||b!==r-1)&&(h.push(N,X,W),T+=3)}c.addGroup(p,T,0),p+=T}function x(y){const C=g,T=new at,P=new D;let I=0;const b=y===!0?t:e,w=y===!0?1:-1;for(let X=1;X<=i;X++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;const N=g;for(let X=0;X<=i;X++){const Z=X/i*l+o,tt=Math.cos(Z),$=Math.sin(Z);P.x=b*$,P.y=m*w,P.z=b*tt,u.push(P.x,P.y,P.z),d.push(0,w,0),T.x=tt*.5+.5,T.y=$*.5*w+.5,f.push(T.x,T.y),g++}for(let X=0;X<i;X++){const W=C+X,Z=N+X;y===!0?h.push(Z,Z+1,W):h.push(Z+1,Z,W),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ot(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sn extends ot{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new sn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ts extends ze{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new D,y=new D,C=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],y),f(e[T+2],C),l(x,y,C,M)}function l(M,x,y,C){const T=C+1,P=[];for(let I=0;I<=T;I++){P[I]=[];const b=M.clone().lerp(y,I/T),w=x.clone().lerp(y,I/T),N=T-I;for(let X=0;X<=N;X++)X===0&&I===T?P[I][X]=b:P[I][X]=b.clone().lerp(w,X/N)}for(let I=0;I<T;I++)for(let b=0;b<2*(T-I)-1;b++){const w=Math.floor(b/2);b%2===0?(d(P[I][w+1]),d(P[I+1][w]),d(P[I][w])):(d(P[I][w+1]),d(P[I+1][w+1]),d(P[I+1][w]))}}function c(M){const x=new D;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const M=new D;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const y=m(M)/2/Math.PI+.5,C=p(M)/Math.PI+.5;a.push(y,1-C)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const x=a[M+0],y=a[M+2],C=a[M+4],T=Math.max(x,y,C),P=Math.min(x,y,C);T>.9&&P<.1&&(x<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),C<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){const y=M*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){const M=new D,x=new D,y=new D,C=new D,T=new at,P=new at,I=new at;for(let b=0,w=0;b<r.length;b+=9,w+=6){M.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),T.set(a[w+0],a[w+1]),P.set(a[w+2],a[w+3]),I.set(a[w+4],a[w+5]),C.copy(M).add(x).add(y).divideScalar(3);const N=m(C);_(T,w+0,M,N),_(P,w+2,x,N),_(I,w+4,y,N)}}function _(M,x,y,C){C<0&&M.x===1&&(a[x]=M.x-1),y.x===0&&y.z===0&&(a[x]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.vertices,t.indices,t.radius,t.details)}}class Mr extends Ts{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mr(t.radius,t.detail)}}class bo extends Ts{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bo(t.radius,t.detail)}}class As extends Ts{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new As(t.radius,t.detail)}}class ie extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let x=0;x<c;x++){const y=x*u-r;g.push(y,-M,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const x=M+c*p,y=M+c*(p+1),C=M+1+c*(p+1),T=M+1+c*p;f.push(x,y,T),f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.widthSegments,t.heightSegments)}}class qe extends ze{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new D,g=new at;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,x=M,y=M+n+1,C=M+n+2,T=M+1;o.push(x,y,T),o.push(y,C,T)}}this.setIndex(o),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wt extends ze{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const T=C/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+y,1-x),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=h[p][M+1],y=h[p][M],C=h[p+1][M],T=h[p+1][M+1];(p!==0||a>0)&&f.push(x,y,T),(p!==n-1||l<Math.PI)&&f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ye extends ze{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;a.push(_,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ye extends Qi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cd extends Qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rd extends Qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class br extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Pd extends br{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ta=new ve,hl=new D,ul=new D;class hh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hl.setFromMatrixPosition(t.matrixWorld),e.position.copy(hl),ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ul),e.updateMatrixWorld(),ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const dl=new ve,us=new D,ea=new D;class Fd extends hh{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),us.setFromMatrixPosition(t.matrixWorld),n.position.copy(us),ea.copy(n.position),ea.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ea),n.updateMatrixWorld(),i.makeTranslation(-us.x,-us.y,-us.z),dl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl)}}class xs extends br{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class So extends eh{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Dd extends hh{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ys extends br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Dd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uh extends br{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ld extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Id{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fl(){return performance.now()}function pl(s,t,e,n){const i=Ud(n);switch(e){case kc:return s*t;case Oc:return s*t;case Hc:return s*t*2;case Gc:return s*t/i.components*i.byteLength;case uo:return s*t/i.components*i.byteLength;case Vc:return s*t*2/i.components*i.byteLength;case fo:return s*t*2/i.components*i.byteLength;case zc:return s*t*3/i.components*i.byteLength;case vn:return s*t*4/i.components*i.byteLength;case po:return s*t*4/i.components*i.byteLength;case nr:case ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Da:case Ia:return Math.max(s,16)*Math.max(t,8)/4;case Fa:case La:return Math.max(s,8)*Math.max(t,8)/2;case Ua:case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ar:case Ka:case Qa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Wc:case to:return Math.ceil(s/4)*Math.ceil(t/4)*8;case eo:case no:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ud(s){switch(s){case Gn:case Uc:return{byteLength:1,components:1};case bs:case Nc:case zn:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case vi:case lo:case Nn:return{byteLength:4,components:1};case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Nd(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,of=`#define PI 3.141592653589793
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
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cf=`vec3 transformedNormal = objectNormal;
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
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
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
}`,Tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
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
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uf=`PhysicalMaterial material;
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
#endif`,Nf=`struct PhysicalMaterial {
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
}`,Bf=`
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yf=`#if defined( USE_POINTS_UV )
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
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b0=`float getShadowMask() {
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
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,E0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k0=`uniform sampler2D t2D;
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,X0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`uniform float scale;
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
}`,j0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,K0=`uniform vec3 diffuse;
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
}`,Q0=`#define LAMBERT
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
}`,tp=`#define LAMBERT
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
}`,ep=`#define MATCAP
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
}`,np=`#define MATCAP
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
}`,ip=`#define NORMAL
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
}`,sp=`#define NORMAL
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
}`,rp=`#define PHONG
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
}`,ap=`#define PHONG
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
}`,op=`#define STANDARD
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
}`,lp=`#define STANDARD
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
}`,cp=`#define TOON
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
}`,hp=`#define TOON
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
}`,up=`uniform float size;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 color;
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
}`,mp=`uniform float rotation;
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
}`,gp=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Bd,alphahash_pars_fragment:kd,alphamap_fragment:zd,alphamap_pars_fragment:Od,alphatest_fragment:Hd,alphatest_pars_fragment:Gd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:Yd,beginnormal_vertex:$d,bsdfs:Zd,iridescence_fragment:jd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:tf,clipping_planes_vertex:ef,color_fragment:nf,color_pars_fragment:sf,color_pars_vertex:rf,color_vertex:af,common:of,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:hf,displacementmap_vertex:uf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,colorspace_fragment:pf,colorspace_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:vf,envmap_pars_fragment:_f,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Pf,envmap_vertex:yf,fog_vertex:Mf,fog_pars_vertex:bf,fog_fragment:Sf,fog_pars_fragment:wf,gradientmap_pars_fragment:Ef,lightmap_pars_fragment:Tf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Cf,lights_pars_begin:Rf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Df,lights_phong_fragment:Lf,lights_phong_pars_fragment:If,lights_physical_fragment:Uf,lights_physical_pars_fragment:Nf,lights_fragment_begin:Bf,lights_fragment_maps:kf,lights_fragment_end:zf,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Vf,map_fragment:Wf,map_pars_fragment:Xf,map_particle_fragment:qf,map_particle_pars_fragment:Yf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Zf,morphinstance_vertex:jf,morphcolor_vertex:Jf,morphnormal_vertex:Kf,morphtarget_pars_vertex:Qf,morphtarget_vertex:t0,normal_fragment_begin:e0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:u0,packing:d0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:v0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:y0,shadowmap_vertex:M0,shadowmask_pars_fragment:b0,skinbase_vertex:S0,skinning_pars_vertex:w0,skinning_vertex:E0,skinnormal_vertex:T0,specularmap_fragment:A0,specularmap_pars_fragment:C0,tonemapping_fragment:R0,tonemapping_pars_fragment:P0,transmission_fragment:F0,transmission_pars_fragment:D0,uv_pars_fragment:L0,uv_pars_vertex:I0,uv_vertex:U0,worldpos_vertex:N0,background_vert:B0,background_frag:k0,backgroundCube_vert:z0,backgroundCube_frag:O0,cube_vert:H0,cube_frag:G0,depth_vert:V0,depth_frag:W0,distanceRGBA_vert:X0,distanceRGBA_frag:q0,equirect_vert:Y0,equirect_frag:$0,linedashed_vert:Z0,linedashed_frag:j0,meshbasic_vert:J0,meshbasic_frag:K0,meshlambert_vert:Q0,meshlambert_frag:tp,meshmatcap_vert:ep,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:sp,meshphong_vert:rp,meshphong_frag:ap,meshphysical_vert:op,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:hp,points_vert:up,points_frag:dp,shadow_vert:fp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},lt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},wn={basic:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ge([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ge([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ge([lt.points,lt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ge([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ge([lt.common,lt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ge([lt.sprite,lt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ge([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ge([lt.lights,lt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};wn.physical={uniforms:Ge([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Ks={r:0,b:0,g:0},ai=new Tn,vp=new ve;function _p(s,t,e,n,i,r,a){const o=new bt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const C=g(x);C===null?p(o,l):C&&C.isColor&&(p(C,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===xr)?(h===void 0&&(h=new se(new L(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:ji(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ai.copy(y.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vp.makeRotationFromEuler(ai)),h.material.toneMapped=ee.getTransfer(C.colorSpace)!==ue,(u!==C||d!==C.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new se(new ie(2,2),new Ve({name:"BackgroundMaterial",uniforms:ji(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ee.getTransfer(C.colorSpace)!==ue,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Ks,th(s)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,y,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m,dispose:M}}function xp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(w,N,X,W,Z){let tt=!1;const $=u(W,X,N);r!==$&&(r=$,c(r.object)),tt=f(w,W,X,Z),tt&&g(w,W,X,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,y(w,N,X,W),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function u(w,N,X){const W=X.wireframe===!0;let Z=n[w.id];Z===void 0&&(Z={},n[w.id]=Z);let tt=Z[N.id];tt===void 0&&(tt={},Z[N.id]=tt);let $=tt[W];return $===void 0&&($=d(l()),tt[W]=$),$}function d(w){const N=[],X=[],W=[];for(let Z=0;Z<e;Z++)N[Z]=0,X[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:W,object:w,attributes:{},index:null}}function f(w,N,X,W){const Z=r.attributes,tt=N.attributes;let $=0;const nt=X.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const vt=Z[Y];let Tt=tt[Y];if(Tt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor)),vt===void 0||vt.attribute!==Tt||Tt&&vt.data!==Tt.data)return!0;$++}return r.attributesNum!==$||r.index!==W}function g(w,N,X,W){const Z={},tt=N.attributes;let $=0;const nt=X.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let vt=tt[Y];vt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor));const Tt={};Tt.attribute=vt,vt&&vt.data&&(Tt.data=vt.data),Z[Y]=Tt,$++}r.attributes=Z,r.attributesNum=$,r.index=W}function _(){const w=r.newAttributes;for(let N=0,X=w.length;N<X;N++)w[N]=0}function m(w){p(w,0)}function p(w,N){const X=r.newAttributes,W=r.enabledAttributes,Z=r.attributeDivisors;X[w]=1,W[w]===0&&(s.enableVertexAttribArray(w),W[w]=1),Z[w]!==N&&(s.vertexAttribDivisor(w,N),Z[w]=N)}function M(){const w=r.newAttributes,N=r.enabledAttributes;for(let X=0,W=N.length;X<W;X++)N[X]!==w[X]&&(s.disableVertexAttribArray(X),N[X]=0)}function x(w,N,X,W,Z,tt,$){$===!0?s.vertexAttribIPointer(w,N,X,Z,tt):s.vertexAttribPointer(w,N,X,W,Z,tt)}function y(w,N,X,W){_();const Z=W.attributes,tt=X.getAttributes(),$=N.defaultAttributeValues;for(const nt in tt){const Y=tt[nt];if(Y.location>=0){let ut=Z[nt];if(ut===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor)),ut!==void 0){const vt=ut.normalized,Tt=ut.itemSize,Xt=t.get(ut);if(Xt===void 0)continue;const pe=Xt.buffer,J=Xt.type,rt=Xt.bytesPerElement,St=J===s.INT||J===s.UNSIGNED_INT||ut.gpuType===lo;if(ut.isInterleavedBufferAttribute){const dt=ut.data,It=dt.stride,kt=ut.offset;if(dt.isInstancedInterleavedBuffer){for(let qt=0;qt<Y.locationSize;qt++)p(Y.location+qt,dt.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let qt=0;qt<Y.locationSize;qt++)m(Y.location+qt);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let qt=0;qt<Y.locationSize;qt++)x(Y.location+qt,Tt/Y.locationSize,J,vt,It*rt,(kt+Tt/Y.locationSize*qt)*rt,St)}else{if(ut.isInstancedBufferAttribute){for(let dt=0;dt<Y.locationSize;dt++)p(Y.location+dt,ut.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let dt=0;dt<Y.locationSize;dt++)m(Y.location+dt);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let dt=0;dt<Y.locationSize;dt++)x(Y.location+dt,Tt/Y.locationSize,J,vt,Tt*rt,Tt/Y.locationSize*dt*rt,St)}}else if($!==void 0){const vt=$[nt];if(vt!==void 0)switch(vt.length){case 2:s.vertexAttrib2fv(Y.location,vt);break;case 3:s.vertexAttrib3fv(Y.location,vt);break;case 4:s.vertexAttrib4fv(Y.location,vt);break;default:s.vertexAttrib1fv(Y.location,vt)}}}}M()}function C(){I();for(const w in n){const N=n[w];for(const X in N){const W=N[X];for(const Z in W)h(W[Z].object),delete W[Z];delete N[X]}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const N=n[w.id];for(const X in N){const W=N[X];for(const Z in W)h(W[Z].object),delete W[Z];delete N[X]}delete n[w.id]}function P(w){for(const N in n){const X=n[N];if(X[w.id]===void 0)continue;const W=X[w.id];for(const Z in W)h(W[Z].object),delete W[Z];delete X[w.id]}}function I(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function yp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Mp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==vn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const I=P===zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Gn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Nn&&!I)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function bp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new li,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,x=M*4;let y=p.clippingState||null;l.value=y,y=h(g,d,x,f);for(let C=0;C!==x;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Sp(s){let t=new WeakMap;function e(a,o){return o===Ca?a.mapping=Xi:o===Ra&&(a.mapping=qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ca||o===Ra)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hd(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Oi=4,ml=[.125,.215,.35,.446,.526,.582],ui=20,na=new So,gl=new bt;let ia=null,sa=0,ra=0,aa=!1;const ci=(1+Math.sqrt(5))/2,Ni=1/ci,vl=[new D(-ci,Ni,0),new D(ci,Ni,0),new D(-Ni,0,ci),new D(Ni,0,ci),new D(0,ci,-Ni),new D(0,ci,Ni),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class _l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ia,sa,ra),this._renderer.xr.enabled=aa,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:zn,format:vn,colorSpace:Zi,depthBuffer:!1},i=xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wp(r)),this._blurMaterial=Ep(r,t,e)}return i}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,na)}_sceneToCubeUV(t,e,n,i){const o=new je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gl),h.toneMapping=Jn,h.autoClear=!1;const f=new Dt({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new se(new L,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(gl),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Qs(i,M*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Xi||t.mapping===qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,na)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vl[(i-r-1)%vl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new se(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const p=[];let M=0;for(let P=0;P<ui;++P){const I=P/_,b=Math.exp(-I*I/2);p.push(b),P===0?M+=b:P<m&&(M+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[i],C=3*y*(i>x-Oi?i-x+Oi:0),T=4*(this._cubeSize-y);Qs(e,C,T,3*y,2*y),l.setRenderTarget(e),l.render(u,na)}}function wp(s){const t=[],e=[],n=[];let i=s;const r=s-Oi+1+ml.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Oi?l=ml[a-s+Oi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const P=T%3*2/3-1,I=T>2?0:-1,b=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];M.set(b,_*g*T),x.set(d,m*g*T);const w=[T,T,T,T,T,T];y.set(w,p*g*T)}const C=new ze;C.setAttribute("position",new Mn(M,_)),C.setAttribute("uv",new Mn(x,m)),C.setAttribute("faceIndex",new Mn(y,p)),t.push(C),i>Oi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xl(s,t,e){const n=new yn(s,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ep(s,t,e){const n=new Float32Array(ui),i=new D(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function yl(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ml(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function wo(){return`

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
	`}function Tp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ca||l===Ra,h=l===Xi||l===qi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new _l(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new _l(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ap(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&zi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cp(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,y=M.length;x<y;x+=3){const C=M[x+0],T=M[x+1],P=M[x+2];d.push(C,T,T,P,P,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const C=x+0,T=x+1,P=x+2;d.push(C,T,T,P,P,C)}}else return;const m=new(Yc(d)?Qc:Kc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Rp(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Fp(s,t,e){const n=new WeakMap,i=new fe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let w=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=o.attributes.position.count*y,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*T*4*u),I=new Zc(P,C,T,u);I.type=Nn,I.needsUpdate=!0;const b=y*4;for(let N=0;N<u;N++){const X=p[N],W=M[N],Z=x[N],tt=C*T*4*N;for(let $=0;$<X.count;$++){const nt=$*b;g===!0&&(i.fromBufferAttribute(X,$),P[tt+nt+0]=i.x,P[tt+nt+1]=i.y,P[tt+nt+2]=i.z,P[tt+nt+3]=0),_===!0&&(i.fromBufferAttribute(W,$),P[tt+nt+4]=i.x,P[tt+nt+5]=i.y,P[tt+nt+6]=i.z,P[tt+nt+7]=0),m===!0&&(i.fromBufferAttribute(Z,$),P[tt+nt+8]=i.x,P[tt+nt+9]=i.y,P[tt+nt+10]=i.z,P[tt+nt+11]=Z.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new at(C,T)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Dp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const fh=new We,bl=new rh(1,1),ph=new Zc,mh=new $u,gh=new nh,Sl=[],wl=[],El=new Float32Array(16),Tl=new Float32Array(9),Al=new Float32Array(4);function ts(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Sl[i];if(r===void 0&&(r=new Float32Array(i),Sl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Fe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Sr(s,t){let e=wl[t];e===void 0&&(e=new Int32Array(t),wl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Lp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),Fe(e,t)}}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),Fe(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),Fe(e,t)}}function Bp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Pe(e,n))return;Al.set(n),s.uniformMatrix2fv(this.addr,!1,Al),Fe(e,n)}}function kp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Pe(e,n))return;Tl.set(n),s.uniformMatrix3fv(this.addr,!1,Tl),Fe(e,n)}}function zp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Pe(e,n))return;El.set(n),s.uniformMatrix4fv(this.addr,!1,El),Fe(e,n)}}function Op(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),Fe(e,t)}}function Gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),Fe(e,t)}}function Vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),Fe(e,t)}}function Wp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),Fe(e,t)}}function qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),Fe(e,t)}}function Yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),Fe(e,t)}}function $p(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(bl.compareFunction=qc,r=bl):r=fh,e.setTexture2D(t||r,i)}function Zp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mh,i)}function jp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gh,i)}function Jp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ph,i)}function Kp(s){switch(s){case 5126:return Lp;case 35664:return Ip;case 35665:return Up;case 35666:return Np;case 35674:return Bp;case 35675:return kp;case 35676:return zp;case 5124:case 35670:return Op;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Jp}}function Qp(s,t){s.uniform1fv(this.addr,t)}function tm(s,t){const e=ts(t,this.size,2);s.uniform2fv(this.addr,e)}function em(s,t){const e=ts(t,this.size,3);s.uniform3fv(this.addr,e)}function nm(s,t){const e=ts(t,this.size,4);s.uniform4fv(this.addr,e)}function im(s,t){const e=ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function sm(s,t){const e=ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function rm(s,t){const e=ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function am(s,t){s.uniform1iv(this.addr,t)}function om(s,t){s.uniform2iv(this.addr,t)}function lm(s,t){s.uniform3iv(this.addr,t)}function cm(s,t){s.uniform4iv(this.addr,t)}function hm(s,t){s.uniform1uiv(this.addr,t)}function um(s,t){s.uniform2uiv(this.addr,t)}function dm(s,t){s.uniform3uiv(this.addr,t)}function fm(s,t){s.uniform4uiv(this.addr,t)}function pm(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||fh,r[a])}function mm(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||mh,r[a])}function gm(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||gh,r[a])}function vm(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ph,r[a])}function _m(s){switch(s){case 5126:return Qp;case 35664:return tm;case 35665:return em;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return vm}}class xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kp(e.type)}}class ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_m(e.type)}}class Mm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function Cl(s,t){s.seq.push(t),s.map[t.id]=t}function bm(s,t,e){const n=s.name,i=n.length;for(oa.lastIndex=0;;){const r=oa.exec(n),a=oa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Cl(e,c===void 0?new xm(o,s,t):new ym(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Mm(o),Cl(e,u)),e=u}}}class or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);bm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Rl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Sm=37297;let wm=0;function Em(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Pl=new Ot;function Tm(s){ee._getMatrix(Pl,ee.workingColorSpace,s);const t=`mat3( ${Pl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case cr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Fl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Em(s.getShaderSource(t),a)}else return i}function Am(s,t){const e=Tm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Cm(s,t){let e;switch(t){case au:e="Linear";break;case ou:e="Reinhard";break;case lu:e="Cineon";break;case Lc:e="ACESFilmic";break;case hu:e="AgX";break;case uu:e="Neutral";break;case cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tr=new D;function Rm(){ee.getLuminanceCoefficients(tr);const s=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function Fm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ps(s){return s!==""}function Dl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ll(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(s){return s.replace(Lm,Um)}const Im=new Map;function Um(s,t){let e=Gt[t];if(e===void 0){const n=Im.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return so(e)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(s){return s.replace(Nm,Bm)}function Bm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ul(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function km(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===zh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function zm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xi:case qi:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Om(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dc:t="ENVMAP_BLENDING_MULTIPLY";break;case su:t="ENVMAP_BLENDING_MIX";break;case ru:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=km(e),c=zm(e),h=Om(e),u=Hm(e),d=Gm(e),f=Pm(e),g=Fm(r),_=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),p.length>0&&(p+=`
`)):(m=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?Cm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Am("linearToOutputTexel",e.outputColorSpace),Rm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),a=so(a),a=Dl(a,e),a=Ll(a,e),o=so(o),o=Dl(o,e),o=Ll(o,e),a=Il(a),o=Il(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+a,y=M+p+o,C=Rl(i,i.VERTEX_SHADER,x),T=Rl(i,i.FRAGMENT_SHADER,y);i.attachShader(_,C),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(N){if(s.debug.checkShaderErrors){const X=i.getProgramInfoLog(_).trim(),W=i.getShaderInfoLog(C).trim(),Z=i.getShaderInfoLog(T).trim();let tt=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,T);else{const nt=Fl(i,C,"vertex"),Y=Fl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+X+`
`+nt+`
`+Y)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||Z==="")&&($=!1);$&&(N.diagnostics={runnable:tt,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(C),i.deleteShader(T),I=new or(i,_),b=Dm(i,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,Sm)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qm(t),e.set(t,n)),n}}class qm{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}}function Ym(s,t,e,n,i,r,a){const o=new jc,l=new Xm,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,w,N,X,W){const Z=X.fog,tt=W.geometry,$=b.isMeshStandardMaterial?X.environment:null,nt=(b.isMeshStandardMaterial?e:t).get(b.envMap||$),Y=nt&&nt.mapping===xr?nt.image.height:null,ut=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const vt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Tt=vt!==void 0?vt.length:0;let Xt=0;tt.morphAttributes.position!==void 0&&(Xt=1),tt.morphAttributes.normal!==void 0&&(Xt=2),tt.morphAttributes.color!==void 0&&(Xt=3);let pe,J,rt,St;if(ut){const le=wn[ut];pe=le.vertexShader,J=le.fragmentShader}else pe=b.vertexShader,J=b.fragmentShader,l.update(b),rt=l.getVertexShaderID(b),St=l.getFragmentShaderID(b);const dt=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),kt=W.isInstancedMesh===!0,qt=W.isBatchedMesh===!0,xe=!!b.map,Jt=!!b.matcap,we=!!nt,B=!!b.aoMap,rn=!!b.lightMap,$t=!!b.bumpMap,Zt=!!b.normalMap,At=!!b.displacementMap,ge=!!b.emissiveMap,Ct=!!b.metalnessMap,R=!!b.roughnessMap,S=b.anisotropy>0,H=b.clearcoat>0,K=b.dispersion>0,et=b.iridescence>0,j=b.sheen>0,Et=b.transmission>0,ft=S&&!!b.anisotropyMap,_t=H&&!!b.clearcoatMap,Kt=H&&!!b.clearcoatNormalMap,st=H&&!!b.clearcoatRoughnessMap,xt=et&&!!b.iridescenceMap,Lt=et&&!!b.iridescenceThicknessMap,Ut=j&&!!b.sheenColorMap,yt=j&&!!b.sheenRoughnessMap,jt=!!b.specularMap,Ht=!!b.specularColorMap,me=!!b.specularIntensityMap,k=Et&&!!b.transmissionMap,ct=Et&&!!b.thicknessMap,q=!!b.gradientMap,Q=!!b.alphaMap,mt=b.alphaTest>0,pt=!!b.alphaHash,zt=!!b.extensions;let be=Jn;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(be=s.toneMapping);const Ue={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:pe,fragmentShader:J,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:qt,batchingColor:qt&&W._colorsTexture!==null,instancing:kt,instancingColor:kt&&W.instanceColor!==null,instancingMorph:kt&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Zi,alphaToCoverage:!!b.alphaToCoverage,map:xe,matcap:Jt,envMap:we,envMapMode:we&&nt.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:rn,bumpMap:$t,normalMap:Zt,displacementMap:d&&At,emissiveMap:ge,normalMapObjectSpace:Zt&&b.normalMapType===mu,normalMapTangentSpace:Zt&&b.normalMapType===Xc,metalnessMap:Ct,roughnessMap:R,anisotropy:S,anisotropyMap:ft,clearcoat:H,clearcoatMap:_t,clearcoatNormalMap:Kt,clearcoatRoughnessMap:st,dispersion:K,iridescence:et,iridescenceMap:xt,iridescenceThicknessMap:Lt,sheen:j,sheenColorMap:Ut,sheenRoughnessMap:yt,specularMap:jt,specularColorMap:Ht,specularIntensityMap:me,transmission:Et,transmissionMap:k,thicknessMap:ct,gradientMap:q,opaque:b.transparent===!1&&b.blending===jn&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:mt,alphaHash:pt,combine:b.combine,mapUv:xe&&_(b.map.channel),aoMapUv:B&&_(b.aoMap.channel),lightMapUv:rn&&_(b.lightMap.channel),bumpMapUv:$t&&_(b.bumpMap.channel),normalMapUv:Zt&&_(b.normalMap.channel),displacementMapUv:At&&_(b.displacementMap.channel),emissiveMapUv:ge&&_(b.emissiveMap.channel),metalnessMapUv:Ct&&_(b.metalnessMap.channel),roughnessMapUv:R&&_(b.roughnessMap.channel),anisotropyMapUv:ft&&_(b.anisotropyMap.channel),clearcoatMapUv:_t&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(b.sheenRoughnessMap.channel),specularMapUv:jt&&_(b.specularMap.channel),specularColorMapUv:Ht&&_(b.specularColorMap.channel),specularIntensityMapUv:me&&_(b.specularIntensityMap.channel),transmissionMapUv:k&&_(b.transmissionMap.channel),thicknessMapUv:ct&&_(b.thicknessMap.channel),alphaMapUv:Q&&_(b.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Zt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!tt.attributes.uv&&(xe||Q),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:W.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Xt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:xe&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===ue,decodeVideoTextureEmissive:ge&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===ue,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===he,flipSided:b.side===Je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)w.push(N),w.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(M(w,b),x(w,b),w.push(s.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function M(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){const w=g[b.type];let N;if(w){const X=wn[w];N=dr.clone(X.uniforms)}else N=b.uniforms;return N}function C(b,w){let N;for(let X=0,W=h.length;X<W;X++){const Z=h[X];if(Z.cacheKey===w){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new Vm(s,w,b,r),h.push(N)),N}function T(b){if(--b.usedTimes===0){const w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function P(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:I}}function $m(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Zm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Nl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Bl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Zm),n.length>1&&n.sort(d||Nl),i.length>1&&i.sort(d||Nl)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function jm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Bl,s.set(n,[a])):i>=r.length?(a=new Bl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Jm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new bt};break;case"SpotLight":e={position:new D,direction:new D,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Km(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Qm=0;function tg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function eg(s){const t=new Jm,e=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new ve,a=new ve;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,x=0,y=0,C=0,T=0,P=0;c.sort(tg);for(let b=0,w=c.length;b<w;b++){const N=c[b],X=N.color,W=N.intensity,Z=N.distance,tt=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=X.r*W,u+=X.g*W,d+=X.b*W;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],W);P++}else if(N.isDirectionalLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const nt=N.shadow,Y=e.get(N);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=tt,n.directionalShadowMatrix[f]=N.shadow.matrix,M++}n.directional[f]=$,f++}else if(N.isSpotLight){const $=t.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(X).multiplyScalar(W),$.distance=Z,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[_]=$;const nt=N.shadow;if(N.map&&(n.spotLightMap[C]=N.map,C++,nt.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[_]=nt.matrix,N.castShadow){const Y=e.get(N);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=tt,y++}_++}else if(N.isRectAreaLight){const $=t.get(N);$.color.copy(X).multiplyScalar(W),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=$,m++}else if(N.isPointLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const nt=N.shadow,Y=e.get(N);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,Y.shadowCameraNear=nt.camera.near,Y.shadowCameraFar=nt.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=N.shadow.matrix,x++}n.point[g]=$,g++}else if(N.isHemisphereLight){const $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(W),$.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[p]=$,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==C||I.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=C,I.numLightProbes=P,n.version=Qm++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function kl(s){const t=new eg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ng(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new kl(s),t.set(i,[o])):r>=a.length?(o=new kl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sg=`uniform sampler2D shadow_pass;
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
}`;function rg(s,t,e){let n=new _o;const i=new at,r=new at,a=new fe,o=new Cd({depthPacking:pu}),l=new Rd,c={},h=e.maxTextureSize,u={[Kn]:Je,[Je]:Kn,[he]:he},d=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:ig,fragmentShader:sg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new se(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let p=this.type;this.render=function(T,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=s.getRenderTarget(),w=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),X=s.state;X.setBlending(kn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const W=p!==In&&this.type===In,Z=p===In&&this.type!==In;for(let tt=0,$=T.length;tt<$;tt++){const nt=T[tt],Y=nt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const ut=Y.getFrameExtents();if(i.multiply(ut),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ut.x),i.x=r.x*ut.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ut.y),i.y=r.y*ut.y,Y.mapSize.y=r.y)),Y.map===null||W===!0||Z===!0){const Tt=this.type!==In?{minFilter:xn,magFilter:xn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new yn(i.x,i.y,Tt),Y.map.texture.name=nt.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const vt=Y.getViewportCount();for(let Tt=0;Tt<vt;Tt++){const Xt=Y.getViewport(Tt);a.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),X.viewport(a),Y.updateMatrices(nt,Tt),n=Y.getFrustum(),y(P,I,Y.camera,nt,this.type)}Y.isPointLightShadow!==!0&&this.type===In&&M(Y,I),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,w,N)};function M(T,P){const I=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(P,null,I,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(P,null,I,f,_,null)}function x(T,P,I,b){let w=null;const N=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)w=N;else if(w=I.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const X=w.uuid,W=P.uuid;let Z=c[X];Z===void 0&&(Z={},c[X]=Z);let tt=Z[W];tt===void 0&&(tt=w.clone(),Z[W]=tt,P.addEventListener("dispose",C)),w=tt}if(w.visible=P.visible,w.wireframe=P.wireframe,b===In?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:u[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const X=s.properties.get(w);X.light=I}return w}function y(T,P,I,b,w){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===In)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const W=t.update(T),Z=T.material;if(Array.isArray(Z)){const tt=W.groups;for(let $=0,nt=tt.length;$<nt;$++){const Y=tt[$],ut=Z[Y.materialIndex];if(ut&&ut.visible){const vt=x(T,ut,b,w);T.onBeforeShadow(s,T,P,I,W,vt,Y),s.renderBufferDirect(I,null,W,vt,T,Y),T.onAfterShadow(s,T,P,I,W,vt,Y)}}}else if(Z.visible){const tt=x(T,Z,b,w);T.onBeforeShadow(s,T,P,I,W,tt,null),s.renderBufferDirect(I,null,W,tt,T,null),T.onAfterShadow(s,T,P,I,W,tt,null)}}const X=T.children;for(let W=0,Z=X.length;W<Z;W++)y(X[W],P,I,b,w)}function C(T){T.target.removeEventListener("dispose",C);for(const I in c){const b=c[I],w=T.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const ag={[Ma]:ba,[Sa]:Ta,[wa]:Aa,[Wi]:Ea,[ba]:Ma,[Ta]:Sa,[Aa]:wa,[Ea]:Wi};function og(s,t){function e(){let k=!1;const ct=new fe;let q=null;const Q=new fe(0,0,0,0);return{setMask:function(mt){q!==mt&&!k&&(s.colorMask(mt,mt,mt,mt),q=mt)},setLocked:function(mt){k=mt},setClear:function(mt,pt,zt,be,Ue){Ue===!0&&(mt*=be,pt*=be,zt*=be),ct.set(mt,pt,zt,be),Q.equals(ct)===!1&&(s.clearColor(mt,pt,zt,be),Q.copy(ct))},reset:function(){k=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let k=!1,ct=!1,q=null,Q=null,mt=null;return{setReversed:function(pt){if(ct!==pt){const zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const be=mt;mt=null,this.setClear(be)}ct=pt},getReversed:function(){return ct},setTest:function(pt){pt?dt(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(pt){q!==pt&&!k&&(s.depthMask(pt),q=pt)},setFunc:function(pt){if(ct&&(pt=ag[pt]),Q!==pt){switch(pt){case Ma:s.depthFunc(s.NEVER);break;case ba:s.depthFunc(s.ALWAYS);break;case Sa:s.depthFunc(s.LESS);break;case Wi:s.depthFunc(s.LEQUAL);break;case wa:s.depthFunc(s.EQUAL);break;case Ea:s.depthFunc(s.GEQUAL);break;case Ta:s.depthFunc(s.GREATER);break;case Aa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=pt}},setLocked:function(pt){k=pt},setClear:function(pt){mt!==pt&&(ct&&(pt=1-pt),s.clearDepth(pt),mt=pt)},reset:function(){k=!1,q=null,Q=null,mt=null,ct=!1}}}function i(){let k=!1,ct=null,q=null,Q=null,mt=null,pt=null,zt=null,be=null,Ue=null;return{setTest:function(le){k||(le?dt(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(le){ct!==le&&!k&&(s.stencilMask(le),ct=le)},setFunc:function(le,un,Cn){(q!==le||Q!==un||mt!==Cn)&&(s.stencilFunc(le,un,Cn),q=le,Q=un,mt=Cn)},setOp:function(le,un,Cn){(pt!==le||zt!==un||be!==Cn)&&(s.stencilOp(le,un,Cn),pt=le,zt=un,be=Cn)},setLocked:function(le){k=le},setClear:function(le){Ue!==le&&(s.clearStencil(le),Ue=le)},reset:function(){k=!1,ct=null,q=null,Q=null,mt=null,pt=null,zt=null,be=null,Ue=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,x=null,y=null,C=null,T=null,P=new bt(0,0,0),I=0,b=!1,w=null,N=null,X=null,W=null,Z=null;const tt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,nt=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=nt>=2);let ut=null,vt={};const Tt=s.getParameter(s.SCISSOR_BOX),Xt=s.getParameter(s.VIEWPORT),pe=new fe().fromArray(Tt),J=new fe().fromArray(Xt);function rt(k,ct,q,Q){const mt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(k,pt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<q;zt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(ct+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return pt}const St={};St[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(s.DEPTH_TEST),a.setFunc(Wi),$t(!1),Zt(Bo),dt(s.CULL_FACE),B(kn);function dt(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function It(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function kt(k,ct){return u[k]!==ct?(s.bindFramebuffer(k,ct),u[k]=ct,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function qt(k,ct){let q=f,Q=!1;if(k){q=d.get(ct),q===void 0&&(q=[],d.set(ct,q));const mt=k.textures;if(q.length!==mt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,zt=mt.length;pt<zt;pt++)q[pt]=s.COLOR_ATTACHMENT0+pt;q.length=mt.length,Q=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,Q=!0);Q&&s.drawBuffers(q)}function xe(k){return g!==k?(s.useProgram(k),g=k,!0):!1}const Jt={[hi]:s.FUNC_ADD,[Hh]:s.FUNC_SUBTRACT,[Gh]:s.FUNC_REVERSE_SUBTRACT};Jt[Vh]=s.MIN,Jt[Wh]=s.MAX;const we={[Xh]:s.ZERO,[qh]:s.ONE,[Yh]:s.SRC_COLOR,[xa]:s.SRC_ALPHA,[Qh]:s.SRC_ALPHA_SATURATE,[Jh]:s.DST_COLOR,[Zh]:s.DST_ALPHA,[$h]:s.ONE_MINUS_SRC_COLOR,[ya]:s.ONE_MINUS_SRC_ALPHA,[Kh]:s.ONE_MINUS_DST_COLOR,[jh]:s.ONE_MINUS_DST_ALPHA,[tu]:s.CONSTANT_COLOR,[eu]:s.ONE_MINUS_CONSTANT_COLOR,[nu]:s.CONSTANT_ALPHA,[iu]:s.ONE_MINUS_CONSTANT_ALPHA};function B(k,ct,q,Q,mt,pt,zt,be,Ue,le){if(k===kn){_===!0&&(It(s.BLEND),_=!1);return}if(_===!1&&(dt(s.BLEND),_=!0),k!==Oh){if(k!==m||le!==b){if((p!==hi||y!==hi)&&(s.blendEquation(s.FUNC_ADD),p=hi,y=hi),le)switch(k){case jn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yt:s.blendFunc(s.ONE,s.ONE);break;case ko:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case jn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ko:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,x=null,C=null,T=null,P.set(0,0,0),I=0,m=k,b=le}return}mt=mt||ct,pt=pt||q,zt=zt||Q,(ct!==p||mt!==y)&&(s.blendEquationSeparate(Jt[ct],Jt[mt]),p=ct,y=mt),(q!==M||Q!==x||pt!==C||zt!==T)&&(s.blendFuncSeparate(we[q],we[Q],we[pt],we[zt]),M=q,x=Q,C=pt,T=zt),(be.equals(P)===!1||Ue!==I)&&(s.blendColor(be.r,be.g,be.b,Ue),P.copy(be),I=Ue),m=k,b=!1}function rn(k,ct){k.side===he?It(s.CULL_FACE):dt(s.CULL_FACE);let q=k.side===Je;ct&&(q=!q),$t(q),k.blending===jn&&k.transparent===!1?B(kn):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const Q=k.stencilWrite;o.setTest(Q),Q&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ge(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function Zt(k){k!==Nh?(dt(s.CULL_FACE),k!==N&&(k===Bo?s.cullFace(s.BACK):k===Bh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),N=k}function At(k){k!==X&&($&&s.lineWidth(k),X=k)}function ge(k,ct,q){k?(dt(s.POLYGON_OFFSET_FILL),(W!==ct||Z!==q)&&(s.polygonOffset(ct,q),W=ct,Z=q)):It(s.POLYGON_OFFSET_FILL)}function Ct(k){k?dt(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function R(k){k===void 0&&(k=s.TEXTURE0+tt-1),ut!==k&&(s.activeTexture(k),ut=k)}function S(k,ct,q){q===void 0&&(ut===null?q=s.TEXTURE0+tt-1:q=ut);let Q=vt[q];Q===void 0&&(Q={type:void 0,texture:void 0},vt[q]=Q),(Q.type!==k||Q.texture!==ct)&&(ut!==q&&(s.activeTexture(q),ut=q),s.bindTexture(k,ct||St[k]),Q.type=k,Q.texture=ct)}function H(){const k=vt[ut];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(k){pe.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),pe.copy(k))}function yt(k){J.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function jt(k,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let Q=q.get(k);Q===void 0&&(Q=s.getUniformBlockIndex(ct,k.name),q.set(k,Q))}function Ht(k,ct){const Q=c.get(ct).get(k);l.get(ct)!==Q&&(s.uniformBlockBinding(ct,Q,k.__bindingPointIndex),l.set(ct,Q))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ut=null,vt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,x=null,y=null,C=null,T=null,P=new bt(0,0,0),I=0,b=!1,w=null,N=null,X=null,W=null,Z=null,pe.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:It,bindFramebuffer:kt,drawBuffers:qt,useProgram:xe,setBlending:B,setMaterial:rn,setFlipSided:$t,setCullFace:Zt,setLineWidth:At,setPolygonOffset:ge,setScissorTest:Ct,activeTexture:R,bindTexture:S,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:xt,texImage3D:Lt,updateUBOMapping:jt,uniformBlockBinding:Ht,texStorage2D:Kt,texStorage3D:st,texSubImage2D:j,texSubImage3D:Et,compressedTexSubImage2D:ft,compressedTexSubImage3D:_t,scissor:Ut,viewport:yt,reset:me}}function lg(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):ur("canvas")}function _(R,S,H){let K=1;const et=Ct(R);if((et.width>H||et.height>H)&&(K=H/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(K*et.width),Et=Math.floor(K*et.height);u===void 0&&(u=g(j,Et));const ft=S?g(j,Et):u;return ft.width=j,ft.height=Et,ft.getContext("2d").drawImage(R,0,0,j,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+Et+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(R,S,H,K,et=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=S;if(S===s.RED&&(H===s.FLOAT&&(j=s.R32F),H===s.HALF_FLOAT&&(j=s.R16F),H===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.R8UI),H===s.UNSIGNED_SHORT&&(j=s.R16UI),H===s.UNSIGNED_INT&&(j=s.R32UI),H===s.BYTE&&(j=s.R8I),H===s.SHORT&&(j=s.R16I),H===s.INT&&(j=s.R32I)),S===s.RG&&(H===s.FLOAT&&(j=s.RG32F),H===s.HALF_FLOAT&&(j=s.RG16F),H===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RG8UI),H===s.UNSIGNED_SHORT&&(j=s.RG16UI),H===s.UNSIGNED_INT&&(j=s.RG32UI),H===s.BYTE&&(j=s.RG8I),H===s.SHORT&&(j=s.RG16I),H===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGB8UI),H===s.UNSIGNED_SHORT&&(j=s.RGB16UI),H===s.UNSIGNED_INT&&(j=s.RGB32UI),H===s.BYTE&&(j=s.RGB8I),H===s.SHORT&&(j=s.RGB16I),H===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),H===s.UNSIGNED_INT&&(j=s.RGBA32UI),H===s.BYTE&&(j=s.RGBA8I),H===s.SHORT&&(j=s.RGBA16I),H===s.INT&&(j=s.RGBA32I)),S===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){const Et=et?cr:ee.getTransfer(K);H===s.FLOAT&&(j=s.RGBA32F),H===s.HALF_FLOAT&&(j=s.RGBA16F),H===s.UNSIGNED_BYTE&&(j=Et===ue?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(R,S){let H;return R?S===null||S===vi||S===Yi?H=s.DEPTH24_STENCIL8:S===Nn?H=s.DEPTH32F_STENCIL8:S===bs&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===Yi?H=s.DEPTH_COMPONENT24:S===Nn?H=s.DEPTH_COMPONENT32F:S===bs&&(H=s.DEPTH_COMPONENT16),H}function C(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==En?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),I(S),S.isVideoTexture&&h.delete(S)}function P(R){const S=R.target;S.removeEventListener("dispose",P),w(S)}function I(R){const S=n.get(R);if(S.__webglInit===void 0)return;const H=R.source,K=d.get(H);if(K){const et=K[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(R),Object.keys(K).length===0&&d.delete(H)}n.remove(R)}function b(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const H=R.source,K=d.get(H);delete K[S.__cacheKey],a.memory.textures--}function w(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let et=0;et<S.__webglFramebuffer[K].length;et++)s.deleteFramebuffer(S.__webglFramebuffer[K][et]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=R.textures;for(let K=0,et=H.length;K<et;K++){const j=n.get(H[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(H[K])}n.remove(R)}let N=0;function X(){N=0}function W(){const R=N;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),N+=1,R}function Z(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function tt(R,S){const H=n.get(R);if(R.isVideoTexture&&At(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,R,S);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function $(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){J(H,R,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function nt(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){J(H,R,S);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function Y(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){rt(H,R,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}const ut={[Sn]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[Pa]:s.MIRRORED_REPEAT},vt={[xn]:s.NEAREST,[du]:s.NEAREST_MIPMAP_NEAREST,[Ps]:s.NEAREST_MIPMAP_LINEAR,[En]:s.LINEAR,[Rr]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},Tt={[gu]:s.NEVER,[bu]:s.ALWAYS,[vu]:s.LESS,[qc]:s.LEQUAL,[_u]:s.EQUAL,[Mu]:s.GEQUAL,[xu]:s.GREATER,[yu]:s.NOTEQUAL};function Xt(R,S){if(S.type===Nn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===En||S.magFilter===Rr||S.magFilter===Ps||S.magFilter===fi||S.minFilter===En||S.minFilter===Rr||S.minFilter===Ps||S.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ut[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ut[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ut[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,vt[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,vt[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Tt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==Ps&&S.minFilter!==fi||S.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function pe(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const K=S.source;let et=d.get(K);et===void 0&&(et={},d.set(K,et));const j=Z(S);if(j!==R.__cacheKey){et[j]===void 0&&(et[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[j].usedTimes++;const Et=et[R.__cacheKey];Et!==void 0&&(et[R.__cacheKey].usedTimes--,Et.usedTimes===0&&b(S)),R.__cacheKey=j,R.__webglTexture=et[j].texture}return H}function J(R,S,H){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);const et=pe(R,S),j=S.source;e.bindTexture(K,R.__webglTexture,s.TEXTURE0+H);const Et=n.get(j);if(j.version!==Et.__version||et===!0){e.activeTexture(s.TEXTURE0+H);const ft=ee.getPrimaries(ee.workingColorSpace),_t=S.colorSpace===Zn?null:ee.getPrimaries(S.colorSpace),Kt=S.colorSpace===Zn||ft===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let st=_(S.image,!1,i.maxTextureSize);st=ge(S,st);const xt=r.convert(S.format,S.colorSpace),Lt=r.convert(S.type);let Ut=x(S.internalFormat,xt,Lt,S.colorSpace,S.isVideoTexture);Xt(K,S);let yt;const jt=S.mipmaps,Ht=S.isVideoTexture!==!0,me=Et.__version===void 0||et===!0,k=j.dataReady,ct=C(S,st);if(S.isDepthTexture)Ut=y(S.format===$i,S.type),me&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Lt,null));else if(S.isDataTexture)if(jt.length>0){Ht&&me&&e.texStorage2D(s.TEXTURE_2D,ct,Ut,jt[0].width,jt[0].height);for(let q=0,Q=jt.length;q<Q;q++)yt=jt[q],Ht?k&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,yt.width,yt.height,xt,Lt,yt.data):e.texImage2D(s.TEXTURE_2D,q,Ut,yt.width,yt.height,0,xt,Lt,yt.data);S.generateMipmaps=!1}else Ht?(me&&e.texStorage2D(s.TEXTURE_2D,ct,Ut,st.width,st.height),k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,xt,Lt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Lt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Ut,jt[0].width,jt[0].height,st.depth);for(let q=0,Q=jt.length;q<Q;q++)if(yt=jt[q],S.format!==vn)if(xt!==null)if(Ht){if(k)if(S.layerUpdates.size>0){const mt=pl(yt.width,yt.height,S.format,S.type);for(const pt of S.layerUpdates){const zt=yt.data.subarray(pt*mt/yt.data.BYTES_PER_ELEMENT,(pt+1)*mt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,pt,yt.width,yt.height,1,xt,zt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,st.depth,xt,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ut,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,st.depth,xt,Lt,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Ut,yt.width,yt.height,st.depth,0,xt,Lt,yt.data)}else{Ht&&me&&e.texStorage2D(s.TEXTURE_2D,ct,Ut,jt[0].width,jt[0].height);for(let q=0,Q=jt.length;q<Q;q++)yt=jt[q],S.format!==vn?xt!==null?Ht?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Ut,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?k&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,yt.width,yt.height,xt,Lt,yt.data):e.texImage2D(s.TEXTURE_2D,q,Ut,yt.width,yt.height,0,xt,Lt,yt.data)}else if(S.isDataArrayTexture)if(Ht){if(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Ut,st.width,st.height,st.depth),k)if(S.layerUpdates.size>0){const q=pl(st.width,st.height,S.format,S.type);for(const Q of S.layerUpdates){const mt=st.data.subarray(Q*q/st.data.BYTES_PER_ELEMENT,(Q+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,xt,Lt,mt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Lt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,xt,Lt,st.data);else if(S.isData3DTexture)Ht?(me&&e.texStorage3D(s.TEXTURE_3D,ct,Ut,st.width,st.height,st.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Lt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,xt,Lt,st.data);else if(S.isFramebufferTexture){if(me)if(Ht)e.texStorage2D(s.TEXTURE_2D,ct,Ut,st.width,st.height);else{let q=st.width,Q=st.height;for(let mt=0;mt<ct;mt++)e.texImage2D(s.TEXTURE_2D,mt,Ut,q,Q,0,xt,Lt,null),q>>=1,Q>>=1}}else if(jt.length>0){if(Ht&&me){const q=Ct(jt[0]);e.texStorage2D(s.TEXTURE_2D,ct,Ut,q.width,q.height)}for(let q=0,Q=jt.length;q<Q;q++)yt=jt[q],Ht?k&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,xt,Lt,yt):e.texImage2D(s.TEXTURE_2D,q,Ut,xt,Lt,yt);S.generateMipmaps=!1}else if(Ht){if(me){const q=Ct(st);e.texStorage2D(s.TEXTURE_2D,ct,Ut,q.width,q.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Lt,st)}else e.texImage2D(s.TEXTURE_2D,0,Ut,xt,Lt,st);m(S)&&p(K),Et.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function rt(R,S,H){if(S.image.length!==6)return;const K=pe(R,S),et=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);const j=n.get(et);if(et.version!==j.__version||K===!0){e.activeTexture(s.TEXTURE0+H);const Et=ee.getPrimaries(ee.workingColorSpace),ft=S.colorSpace===Zn?null:ee.getPrimaries(S.colorSpace),_t=S.colorSpace===Zn||Et===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Kt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!Kt&&!st?xt[Q]=_(S.image[Q],!0,i.maxCubemapSize):xt[Q]=st?S.image[Q].image:S.image[Q],xt[Q]=ge(S,xt[Q]);const Lt=xt[0],Ut=r.convert(S.format,S.colorSpace),yt=r.convert(S.type),jt=x(S.internalFormat,Ut,yt,S.colorSpace),Ht=S.isVideoTexture!==!0,me=j.__version===void 0||K===!0,k=et.dataReady;let ct=C(S,Lt);Xt(s.TEXTURE_CUBE_MAP,S);let q;if(Kt){Ht&&me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,jt,Lt.width,Lt.height);for(let Q=0;Q<6;Q++){q=xt[Q].mipmaps;for(let mt=0;mt<q.length;mt++){const pt=q[mt];S.format!==vn?Ut!==null?Ht?k&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,pt.width,pt.height,Ut,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,jt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,pt.width,pt.height,Ut,yt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,jt,pt.width,pt.height,0,Ut,yt,pt.data)}}}else{if(q=S.mipmaps,Ht&&me){q.length>0&&ct++;const Q=Ct(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Ht?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Ut,yt,xt[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,xt[Q].width,xt[Q].height,0,Ut,yt,xt[Q].data);for(let mt=0;mt<q.length;mt++){const zt=q[mt].image[Q].image;Ht?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,zt.width,zt.height,Ut,yt,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,jt,zt.width,zt.height,0,Ut,yt,zt.data)}}else{Ht?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ut,yt,xt[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,Ut,yt,xt[Q]);for(let mt=0;mt<q.length;mt++){const pt=q[mt];Ht?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Ut,yt,pt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,jt,Ut,yt,pt.image[Q])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=et.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function St(R,S,H,K,et,j){const Et=r.convert(H.format,H.colorSpace),ft=r.convert(H.type),_t=x(H.internalFormat,Et,ft,H.colorSpace),Kt=n.get(S),st=n.get(H);if(st.__renderTarget=S,!Kt.__hasExternalTextures){const xt=Math.max(1,S.width>>j),Lt=Math.max(1,S.height>>j);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,j,_t,xt,Lt,S.depth,0,Et,ft,null):e.texImage2D(et,j,_t,xt,Lt,0,Et,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Zt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,et,st.__webglTexture,0,$t(S)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,et,st.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(R,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const K=S.depthTexture,et=K&&K.isDepthTexture?K.type:null,j=y(S.stencilBuffer,et),Et=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=$t(S);Zt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,j,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,R)}else{const K=S.textures;for(let et=0;et<K.length;et++){const j=K[et],Et=r.convert(j.format,j.colorSpace),ft=r.convert(j.type),_t=x(j.internalFormat,Et,ft,j.colorSpace),Kt=$t(S);H&&Zt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,_t,S.width,S.height):Zt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,_t,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_t,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),tt(S.depthTexture,0);const et=K.__webglTexture,j=$t(S);if(S.depthTexture.format===Hi)Zt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(S.depthTexture.format===$i)Zt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function kt(R){const S=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=K}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");It(S.__webglFramebuffer,R)}else if(H){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),dt(S.__webglDepthbuffer[K],R,!1);else{const et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),dt(S.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(R,S,H){const K=n.get(R);S!==void 0&&St(K.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&kt(R)}function xe(R){const S=R.texture,H=n.get(R),K=n.get(S);R.addEventListener("dispose",P);const et=R.textures,j=R.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,a.memory.textures++),j){H.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ft]=[];for(let _t=0;_t<S.mipmaps.length;_t++)H.__webglFramebuffer[ft][_t]=s.createFramebuffer()}else H.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)H.__webglFramebuffer[ft]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Et)for(let ft=0,_t=et.length;ft<_t;ft++){const Kt=n.get(et[ft]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Zt(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const _t=et[ft];H.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[ft]);const Kt=r.convert(_t.format,_t.colorSpace),st=r.convert(_t.type),xt=x(_t.internalFormat,Kt,st,_t.colorSpace,R.isXRRenderTarget===!0),Lt=$t(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,xt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,H.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Xt(s.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)St(H.__webglFramebuffer[ft][_t],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,_t);else St(H.__webglFramebuffer[ft],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ft=0,_t=et.length;ft<_t;ft++){const Kt=et[ft],st=n.get(Kt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Xt(s.TEXTURE_2D,Kt),St(H.__webglFramebuffer,R,Kt,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),m(Kt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,K.__webglTexture),Xt(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)St(H.__webglFramebuffer[_t],R,S,s.COLOR_ATTACHMENT0,ft,_t);else St(H.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,ft,0);m(S)&&p(ft),e.unbindTexture()}R.depthBuffer&&kt(R)}function Jt(R){const S=R.textures;for(let H=0,K=S.length;H<K;H++){const et=S[H];if(m(et)){const j=M(R),Et=n.get(et).__webglTexture;e.bindTexture(j,Et),p(j),e.unbindTexture()}}}const we=[],B=[];function rn(R){if(R.samples>0){if(Zt(R)===!1){const S=R.textures,H=R.width,K=R.height;let et=s.COLOR_BUFFER_BIT;const j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(R),ft=S.length>1;if(ft)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Kt=n.get(S[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Kt,0)}s.blitFramebuffer(0,0,H,K,0,0,H,K,et,s.NEAREST),l===!0&&(we.length=0,B.length=0,we.push(s.COLOR_ATTACHMENT0+_t),R.depthBuffer&&R.resolveDepthBuffer===!1&&(we.push(j),B.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Kt=n.get(S[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function $t(R){return Math.min(i.maxSamples,R.samples)}function Zt(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ge(R,S){const H=R.colorSpace,K=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Zi&&H!==Zn&&(ee.getTransfer(H)===ue?(K!==vn||et!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.setTexture2D=tt,this.setTexture2DArray=$,this.setTexture3D=nt,this.setTextureCube=Y,this.rebindTextures=qt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Zt}function cg(s,t){function e(n,i=Zn){let r;const a=ee.getTransfer(i);if(n===Gn)return s.UNSIGNED_BYTE;if(n===co)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Uc)return s.BYTE;if(n===Nc)return s.SHORT;if(n===bs)return s.UNSIGNED_SHORT;if(n===lo)return s.INT;if(n===vi)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===zn)return s.HALF_FLOAT;if(n===kc)return s.ALPHA;if(n===zc)return s.RGB;if(n===vn)return s.RGBA;if(n===Oc)return s.LUMINANCE;if(n===Hc)return s.LUMINANCE_ALPHA;if(n===Hi)return s.DEPTH_COMPONENT;if(n===$i)return s.DEPTH_STENCIL;if(n===Gc)return s.RED;if(n===uo)return s.RED_INTEGER;if(n===Vc)return s.RG;if(n===fo)return s.RG_INTEGER;if(n===po)return s.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Da||n===La||n===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Na||n===Ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Na)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===za||n===Oa||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===ja||n===Ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ar||n===Ka||n===Qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ar)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wc||n===to||n===eo||n===no)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const hg={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dg=`
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

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new We,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:ug,fragmentShader:dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends Ki{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new fg,m=e.getContextAttributes();let p=null,M=null;const x=[],y=[],C=new at;let T=null;const P=new je;P.viewport=new fe;const I=new je;I.viewport=new fe;const b=[P,I],w=new Ld;let N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let rt=x[J];return rt===void 0&&(rt=new la,x[J]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(J){let rt=x[J];return rt===void 0&&(rt=new la,x[J]=rt),rt.getGripSpace()},this.getHand=function(J){let rt=x[J];return rt===void 0&&(rt=new la,x[J]=rt),rt.getHandSpace()};function W(J){const rt=y.indexOf(J.inputSource);if(rt===-1)return;const St=x[rt];St!==void 0&&(St.update(J.inputSource,J.frame,c||a),St.dispatchEvent({type:J.type,data:J.inputSource}))}function Z(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",tt);for(let J=0;J<x.length;J++){const rt=y[J];rt!==null&&(y[J]=null,x[J].disconnect(rt))}N=null,X=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,pe.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new yn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,St=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?$i:Hi,St=m.stencil?Yi:vi);const It={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(It),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new yn(d.textureWidth,d.textureHeight,{format:vn,type:Gn,depthTexture:new rh(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function tt(J){for(let rt=0;rt<J.removed.length;rt++){const St=J.removed[rt],dt=y.indexOf(St);dt>=0&&(y[dt]=null,x[dt].disconnect(St))}for(let rt=0;rt<J.added.length;rt++){const St=J.added[rt];let dt=y.indexOf(St);if(dt===-1){for(let kt=0;kt<x.length;kt++)if(kt>=y.length){y.push(St),dt=kt;break}else if(y[kt]===null){y[kt]=St,dt=kt;break}if(dt===-1)break}const It=x[dt];It&&It.connect(St)}}const $=new D,nt=new D;function Y(J,rt,St){$.setFromMatrixPosition(rt.matrixWorld),nt.setFromMatrixPosition(St.matrixWorld);const dt=$.distanceTo(nt),It=rt.projectionMatrix.elements,kt=St.projectionMatrix.elements,qt=It[14]/(It[10]-1),xe=It[14]/(It[10]+1),Jt=(It[9]+1)/It[5],we=(It[9]-1)/It[5],B=(It[8]-1)/It[0],rn=(kt[8]+1)/kt[0],$t=qt*B,Zt=qt*rn,At=dt/(-B+rn),ge=At*-B;if(rt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ge),J.translateZ(At),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),It[10]===-1)J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Ct=qt+At,R=xe+At,S=$t-ge,H=Zt+(dt-ge),K=Jt*xe/R*Ct,et=we*xe/R*Ct;J.projectionMatrix.makePerspective(S,H,K,et,Ct,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ut(J,rt){rt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(rt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let rt=J.near,St=J.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(St=_.depthFar)),w.near=I.near=P.near=rt,w.far=I.far=P.far=St,(N!==w.near||X!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),N=w.near,X=w.far),P.layers.mask=J.layers.mask|2,I.layers.mask=J.layers.mask|4,w.layers.mask=P.layers.mask|I.layers.mask;const dt=J.parent,It=w.cameras;ut(w,dt);for(let kt=0;kt<It.length;kt++)ut(It[kt],dt);It.length===2?Y(w,P,I):w.projectionMatrix.copy(P.projectionMatrix),vt(J,w,dt)};function vt(J,rt,St){St===null?J.matrix.copy(rt.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(rt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ss*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let Tt=null;function Xt(J,rt){if(h=rt.getViewerPose(c||a),g=rt,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let dt=!1;St.length!==w.cameras.length&&(w.cameras.length=0,dt=!0);for(let kt=0;kt<St.length;kt++){const qt=St[kt];let xe=null;if(f!==null)xe=f.getViewport(qt);else{const we=u.getViewSubImage(d,qt);xe=we.viewport,kt===0&&(t.setRenderTargetTextures(M,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(M))}let Jt=b[kt];Jt===void 0&&(Jt=new je,Jt.layers.enable(kt),Jt.viewport=new fe,b[kt]=Jt),Jt.matrix.fromArray(qt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(qt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(xe.x,xe.y,xe.width,xe.height),kt===0&&(w.matrix.copy(Jt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),dt===!0&&w.cameras.push(Jt)}const It=i.enabledFeatures;if(It&&It.includes("depth-sensing")){const kt=u.getDepthInformation(St[0]);kt&&kt.isValid&&kt.texture&&_.init(t,kt,i.renderState)}}for(let St=0;St<x.length;St++){const dt=y[St],It=x[St];dt!==null&&It!==void 0&&It.update(dt,rt,c||a)}Tt&&Tt(J,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const pe=new dh;pe.setAnimationLoop(Xt),this.setAnimationLoop=function(J){Tt=J},this.dispose=function(){}}}const oi=new Tn,mg=new ve;function gg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,th(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,y=M.envMapRotation;x&&(m.envMap.value=x,oi.copy(y),oi.x*=-1,oi.y*=-1,oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(oi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vg(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(M,C);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const x=u();M.__bindingPointIndex=x;const y=s.createBuffer(),C=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],y=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,P=y.length;T<P;T++){const I=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,w=I.length;b<w;b++){const N=I[b];if(f(N,T,b,C)===!0){const X=N.__offset,W=Array.isArray(N.value)?N.value:[N.value];let Z=0;for(let tt=0;tt<W.length;tt++){const $=W[tt],nt=_($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,X+Z,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,Z),Z+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,x,y,C){const T=M.value,P=x+"_"+y;if(C[P]===void 0)return typeof T=="number"||typeof T=="boolean"?C[P]=T:C[P]=T.clone(),!0;{const I=C[P];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[P]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(M){const x=M.uniforms;let y=0;const C=16;for(let P=0,I=x.length;P<I;P++){const b=Array.isArray(x[P])?x[P]:[x[P]];for(let w=0,N=b.length;w<N;w++){const X=b[w],W=Array.isArray(X.value)?X.value:[X.value];for(let Z=0,tt=W.length;Z<tt;Z++){const $=W[Z],nt=_($),Y=y%C,ut=Y%nt.boundary,vt=Y+ut;y+=ut,vt!==0&&C-vt<nt.storage&&(y+=C-vt),X.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=nt.storage}}}const T=y%C;return T>0&&(y+=C-T),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class vh{constructor(t={}){const{canvas:e=zu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this.toneMapping=Jn,this.toneMappingExposure=1;const y=this;let C=!1,T=0,P=0,I=null,b=-1,w=null;const N=new fe,X=new fe;let W=null;const Z=new bt(0);let tt=0,$=e.width,nt=e.height,Y=1,ut=null,vt=null;const Tt=new fe(0,0,$,nt),Xt=new fe(0,0,$,nt);let pe=!1;const J=new _o;let rt=!1,St=!1;const dt=new ve,It=new ve,kt=new D,qt=new fe,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function we(){return I===null?Y:1}let B=n;function rn(E,z){return e.getContext(E,z)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),B===null){const z="webgl2";if(B=rn(z,E),B===null)throw rn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $t,Zt,At,ge,Ct,R,S,H,K,et,j,Et,ft,_t,Kt,st,xt,Lt,Ut,yt,jt,Ht,me,k;function ct(){$t=new Ap(B),$t.init(),Ht=new cg(B,$t),Zt=new Mp(B,$t,t,Ht),At=new og(B,$t),Zt.reverseDepthBuffer&&d&&At.buffers.depth.setReversed(!0),ge=new Pp(B),Ct=new $m,R=new lg(B,$t,At,Ct,Zt,Ht,ge),S=new Sp(y),H=new Tp(y),K=new Nd(B),me=new xp(B,K),et=new Cp(B,K,ge,me),j=new Dp(B,et,K,ge),Ut=new Fp(B,Zt,R),st=new bp(Ct),Et=new Ym(y,S,H,$t,Zt,me,st),ft=new gg(y,Ct),_t=new jm,Kt=new ng($t),Lt=new _p(y,S,H,At,j,f,l),xt=new rg(y,j,Zt),k=new vg(B,ge,Zt,At),yt=new yp(B,$t,ge),jt=new Rp(B,$t,ge),ge.programs=Et.programs,y.capabilities=Zt,y.extensions=$t,y.properties=Ct,y.renderLists=_t,y.shadowMap=xt,y.state=At,y.info=ge}ct();const q=new pg(y,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=$t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize($,nt,!1))},this.getSize=function(E){return E.set($,nt)},this.setSize=function(E,z,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,nt=z,e.width=Math.floor(E*Y),e.height=Math.floor(z*Y),G===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set($*Y,nt*Y).floor()},this.setDrawingBufferSize=function(E,z,G){$=E,nt=z,Y=G,e.width=Math.floor(E*G),e.height=Math.floor(z*G),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,z,G,V){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,z,G,V),At.viewport(N.copy(Tt).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,z,G,V){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,z,G,V),At.scissor(X.copy(Xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(E){At.setScissorTest(pe=E)},this.setOpaqueSort=function(E){ut=E},this.setTransparentSort=function(E){vt=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(E=!0,z=!0,G=!0){let V=0;if(E){let O=!1;if(I!==null){const it=I.texture.format;O=it===po||it===fo||it===uo}if(O){const it=I.texture.type,ht=it===Gn||it===vi||it===bs||it===Yi||it===co||it===ho,gt=Lt.getClearColor(),Mt=Lt.getClearAlpha(),Nt=gt.r,Bt=gt.g,Rt=gt.b;ht?(g[0]=Nt,g[1]=Bt,g[2]=Rt,g[3]=Mt,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=Nt,_[1]=Bt,_[2]=Rt,_[3]=Mt,B.clearBufferiv(B.COLOR,0,_))}else V|=B.COLOR_BUFFER_BIT}z&&(V|=B.DEPTH_BUFFER_BIT),G&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Lt.dispose(),_t.dispose(),Kt.dispose(),Ct.dispose(),S.dispose(),H.dispose(),j.dispose(),me.dispose(),k.dispose(),Et.dispose(),q.dispose(),q.removeEventListener("sessionstart",Co),q.removeEventListener("sessionend",Ro),ti.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=ge.autoReset,z=xt.enabled,G=xt.autoUpdate,V=xt.needsUpdate,O=xt.type;ct(),ge.autoReset=E,xt.enabled=z,xt.autoUpdate=G,xt.needsUpdate=V,xt.type=O}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zt(E){const z=E.target;z.removeEventListener("dispose",zt),be(z)}function be(E){Ue(E),Ct.remove(E)}function Ue(E){const z=Ct.get(E).programs;z!==void 0&&(z.forEach(function(G){Et.releaseProgram(G)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,G,V,O,it){z===null&&(z=xe);const ht=O.isMesh&&O.matrixWorld.determinant()<0,gt=Ch(E,z,G,V,O);At.setMaterial(V,ht);let Mt=G.index,Nt=1;if(V.wireframe===!0){if(Mt=et.getWireframeAttribute(G),Mt===void 0)return;Nt=2}const Bt=G.drawRange,Rt=G.attributes.position;let Qt=Bt.start*Nt,re=(Bt.start+Bt.count)*Nt;it!==null&&(Qt=Math.max(Qt,it.start*Nt),re=Math.min(re,(it.start+it.count)*Nt)),Mt!==null?(Qt=Math.max(Qt,0),re=Math.min(re,Mt.count)):Rt!=null&&(Qt=Math.max(Qt,0),re=Math.min(re,Rt.count));const Ee=re-Qt;if(Ee<0||Ee===1/0)return;me.setup(O,V,gt,G,Mt);let Se,te=yt;if(Mt!==null&&(Se=K.get(Mt),te=jt,te.setIndex(Se)),O.isMesh)V.wireframe===!0?(At.setLineWidth(V.wireframeLinewidth*we()),te.setMode(B.LINES)):te.setMode(B.TRIANGLES);else if(O.isLine){let Ft=V.linewidth;Ft===void 0&&(Ft=1),At.setLineWidth(Ft*we()),O.isLineSegments?te.setMode(B.LINES):O.isLineLoop?te.setMode(B.LINE_LOOP):te.setMode(B.LINE_STRIP)}else O.isPoints?te.setMode(B.POINTS):O.isSprite&&te.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)te.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))te.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ft=O._multiDrawStarts,Ie=O._multiDrawCounts,ae=O._multiDrawCount,dn=Mt?K.get(Mt).bytesPerElement:1,_i=Ct.get(V).currentProgram.getUniforms();for(let Ke=0;Ke<ae;Ke++)_i.setValue(B,"_gl_DrawID",Ke),te.render(Ft[Ke]/dn,Ie[Ke])}else if(O.isInstancedMesh)te.renderInstances(Qt,Ee,O.count);else if(G.isInstancedBufferGeometry){const Ft=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ie=Math.min(G.instanceCount,Ft);te.renderInstances(Qt,Ee,Ie)}else te.render(Qt,Ee)};function le(E,z,G){E.transparent===!0&&E.side===he&&E.forceSinglePass===!1?(E.side=Je,E.needsUpdate=!0,Rs(E,z,G),E.side=Kn,E.needsUpdate=!0,Rs(E,z,G),E.side=he):Rs(E,z,G)}this.compile=function(E,z,G=null){G===null&&(G=E),p=Kt.get(G),p.init(z),x.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const it=O.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const gt=it[ht];le(gt,G,O),V.add(gt)}else le(it,G,O),V.add(it)}),x.pop(),p=null,V},this.compileAsync=function(E,z,G=null){const V=this.compile(E,z,G);return new Promise(O=>{function it(){if(V.forEach(function(ht){Ct.get(ht).currentProgram.isReady()&&V.delete(ht)}),V.size===0){O(E);return}setTimeout(it,10)}$t.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let un=null;function Cn(E){un&&un(E)}function Co(){ti.stop()}function Ro(){ti.start()}const ti=new dh;ti.setAnimationLoop(Cn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(E){un=E,q.setAnimationLoop(E),E===null?ti.stop():ti.start()},q.addEventListener("sessionstart",Co),q.addEventListener("sessionend",Ro),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(z),z=q.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,z,I),p=Kt.get(E,x.length),p.init(z),x.push(p),It.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),J.setFromProjectionMatrix(It),St=this.localClippingEnabled,rt=st.init(this.clippingPlanes,St),m=_t.get(E,M.length),m.init(),M.push(m),q.enabled===!0&&q.isPresenting===!0){const it=y.xr.getDepthSensingMesh();it!==null&&Tr(it,z,-1/0,y.sortObjects)}Tr(E,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ut,vt),Jt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Jt&&Lt.addToRenderList(m,E),this.info.render.frame++,rt===!0&&st.beginShadows();const G=p.state.shadowsArray;xt.render(G,E,z),rt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(p.setupLights(),z.isArrayCamera){const it=z.cameras;if(O.length>0)for(let ht=0,gt=it.length;ht<gt;ht++){const Mt=it[ht];Fo(V,O,E,Mt)}Jt&&Lt.render(E);for(let ht=0,gt=it.length;ht<gt;ht++){const Mt=it[ht];Po(m,E,Mt,Mt.viewport)}}else O.length>0&&Fo(V,O,E,z),Jt&&Lt.render(E),Po(m,E,z);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(y,E,z),me.resetDefaultState(),b=-1,w=null,x.pop(),x.length>0?(p=x[x.length-1],rt===!0&&st.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Tr(E,z,G,V){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){V&&qt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);const ht=j.update(E),gt=E.material;gt.visible&&m.push(E,ht,gt,G,qt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){const ht=j.update(E),gt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qt.copy(E.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),qt.copy(ht.boundingSphere.center)),qt.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray(gt)){const Mt=ht.groups;for(let Nt=0,Bt=Mt.length;Nt<Bt;Nt++){const Rt=Mt[Nt],Qt=gt[Rt.materialIndex];Qt&&Qt.visible&&m.push(E,ht,Qt,G,qt.z,Rt)}}else gt.visible&&m.push(E,ht,gt,G,qt.z,null)}}const it=E.children;for(let ht=0,gt=it.length;ht<gt;ht++)Tr(it[ht],z,G,V)}function Po(E,z,G,V){const O=E.opaque,it=E.transmissive,ht=E.transparent;p.setupLightsView(G),rt===!0&&st.setGlobalState(y.clippingPlanes,G),V&&At.viewport(N.copy(V)),O.length>0&&Cs(O,z,G),it.length>0&&Cs(it,z,G),ht.length>0&&Cs(ht,z,G),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Fo(E,z,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new yn(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?zn:Gn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const it=p.state.transmissionRenderTarget[V.id],ht=V.viewport||N;it.setSize(ht.z,ht.w);const gt=y.getRenderTarget();y.setRenderTarget(it),y.getClearColor(Z),tt=y.getClearAlpha(),tt<1&&y.setClearColor(16777215,.5),y.clear(),Jt&&Lt.render(G);const Mt=y.toneMapping;y.toneMapping=Jn;const Nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),rt===!0&&st.setGlobalState(y.clippingPlanes,V),Cs(E,G,V),R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Rt=0,Qt=z.length;Rt<Qt;Rt++){const re=z[Rt],Ee=re.object,Se=re.geometry,te=re.material,Ft=re.group;if(te.side===he&&Ee.layers.test(V.layers)){const Ie=te.side;te.side=Je,te.needsUpdate=!0,Do(Ee,G,V,Se,te,Ft),te.side=Ie,te.needsUpdate=!0,Bt=!0}}Bt===!0&&(R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it))}y.setRenderTarget(gt),y.setClearColor(Z,tt),Nt!==void 0&&(V.viewport=Nt),y.toneMapping=Mt}function Cs(E,z,G){const V=z.isScene===!0?z.overrideMaterial:null;for(let O=0,it=E.length;O<it;O++){const ht=E[O],gt=ht.object,Mt=ht.geometry,Nt=V===null?ht.material:V,Bt=ht.group;gt.layers.test(G.layers)&&Do(gt,z,G,Mt,Nt,Bt)}}function Do(E,z,G,V,O,it){E.onBeforeRender(y,z,G,V,O,it),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(y,z,G,V,E,it),O.transparent===!0&&O.side===he&&O.forceSinglePass===!1?(O.side=Je,O.needsUpdate=!0,y.renderBufferDirect(G,z,V,O,E,it),O.side=Kn,O.needsUpdate=!0,y.renderBufferDirect(G,z,V,O,E,it),O.side=he):y.renderBufferDirect(G,z,V,O,E,it),E.onAfterRender(y,z,G,V,O,it)}function Rs(E,z,G){z.isScene!==!0&&(z=xe);const V=Ct.get(E),O=p.state.lights,it=p.state.shadowsArray,ht=O.state.version,gt=Et.getParameters(E,O.state,it,z,G),Mt=Et.getProgramCacheKey(gt);let Nt=V.programs;V.environment=E.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(E.isMeshStandardMaterial?H:S).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",zt),Nt=new Map,V.programs=Nt);let Bt=Nt.get(Mt);if(Bt!==void 0){if(V.currentProgram===Bt&&V.lightsStateVersion===ht)return Io(E,gt),Bt}else gt.uniforms=Et.getUniforms(E),E.onBeforeCompile(gt,y),Bt=Et.acquireProgram(gt,Mt),Nt.set(Mt,Bt),V.uniforms=gt.uniforms;const Rt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=st.uniform),Io(E,gt),V.needsLights=Ph(E),V.lightsStateVersion=ht,V.needsLights&&(Rt.ambientLightColor.value=O.state.ambient,Rt.lightProbe.value=O.state.probe,Rt.directionalLights.value=O.state.directional,Rt.directionalLightShadows.value=O.state.directionalShadow,Rt.spotLights.value=O.state.spot,Rt.spotLightShadows.value=O.state.spotShadow,Rt.rectAreaLights.value=O.state.rectArea,Rt.ltc_1.value=O.state.rectAreaLTC1,Rt.ltc_2.value=O.state.rectAreaLTC2,Rt.pointLights.value=O.state.point,Rt.pointLightShadows.value=O.state.pointShadow,Rt.hemisphereLights.value=O.state.hemi,Rt.directionalShadowMap.value=O.state.directionalShadowMap,Rt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Rt.spotShadowMap.value=O.state.spotShadowMap,Rt.spotLightMatrix.value=O.state.spotLightMatrix,Rt.spotLightMap.value=O.state.spotLightMap,Rt.pointShadowMap.value=O.state.pointShadowMap,Rt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Bt,V.uniformsList=null,Bt}function Lo(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=or.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Io(E,z){const G=Ct.get(E);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function Ch(E,z,G,V,O){z.isScene!==!0&&(z=xe),R.resetTextureUnits();const it=z.fog,ht=V.isMeshStandardMaterial?z.environment:null,gt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Zi,Mt=(V.isMeshStandardMaterial?H:S).get(V.envMap||ht),Nt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Bt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!G.morphAttributes.position,Qt=!!G.morphAttributes.normal,re=!!G.morphAttributes.color;let Ee=Jn;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ee=y.toneMapping);const Se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=Se!==void 0?Se.length:0,Ft=Ct.get(V),Ie=p.state.lights;if(rt===!0&&(St===!0||E!==w)){const Oe=E===w&&V.id===b;st.setState(V,E,Oe)}let ae=!1;V.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ie.state.version||Ft.outputColorSpace!==gt||O.isBatchedMesh&&Ft.batching===!1||!O.isBatchedMesh&&Ft.batching===!0||O.isBatchedMesh&&Ft.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ft.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ft.instancing===!1||!O.isInstancedMesh&&Ft.instancing===!0||O.isSkinnedMesh&&Ft.skinning===!1||!O.isSkinnedMesh&&Ft.skinning===!0||O.isInstancedMesh&&Ft.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ft.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ft.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ft.instancingMorph===!1&&O.morphTexture!==null||Ft.envMap!==Mt||V.fog===!0&&Ft.fog!==it||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==st.numPlanes||Ft.numIntersection!==st.numIntersection)||Ft.vertexAlphas!==Nt||Ft.vertexTangents!==Bt||Ft.morphTargets!==Rt||Ft.morphNormals!==Qt||Ft.morphColors!==re||Ft.toneMapping!==Ee||Ft.morphTargetsCount!==te)&&(ae=!0):(ae=!0,Ft.__version=V.version);let dn=Ft.currentProgram;ae===!0&&(dn=Rs(V,z,O));let _i=!1,Ke=!1,is=!1;const _e=dn.getUniforms(),an=Ft.uniforms;if(At.useProgram(dn.program)&&(_i=!0,Ke=!0,is=!0),V.id!==b&&(b=V.id,Ke=!0),_i||w!==E){At.buffers.depth.getReversed()?(dt.copy(E.projectionMatrix),Hu(dt),Gu(dt),_e.setValue(B,"projectionMatrix",dt)):_e.setValue(B,"projectionMatrix",E.projectionMatrix),_e.setValue(B,"viewMatrix",E.matrixWorldInverse);const $e=_e.map.cameraPosition;$e!==void 0&&$e.setValue(B,kt.setFromMatrixPosition(E.matrixWorld)),Zt.logarithmicDepthBuffer&&_e.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&_e.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Ke=!0,is=!0)}if(O.isSkinnedMesh){_e.setOptional(B,O,"bindMatrix"),_e.setOptional(B,O,"bindMatrixInverse");const Oe=O.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),_e.setValue(B,"boneTexture",Oe.boneTexture,R))}O.isBatchedMesh&&(_e.setOptional(B,O,"batchingTexture"),_e.setValue(B,"batchingTexture",O._matricesTexture,R),_e.setOptional(B,O,"batchingIdTexture"),_e.setValue(B,"batchingIdTexture",O._indirectTexture,R),_e.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&_e.setValue(B,"batchingColorTexture",O._colorsTexture,R));const on=G.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Ut.update(O,G,dn),(Ke||Ft.receiveShadow!==O.receiveShadow)&&(Ft.receiveShadow=O.receiveShadow,_e.setValue(B,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(an.envMap.value=Mt,an.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&z.environment!==null&&(an.envMapIntensity.value=z.environmentIntensity),Ke&&(_e.setValue(B,"toneMappingExposure",y.toneMappingExposure),Ft.needsLights&&Rh(an,is),it&&V.fog===!0&&ft.refreshFogUniforms(an,it),ft.refreshMaterialUniforms(an,V,Y,nt,p.state.transmissionRenderTarget[E.id]),or.upload(B,Lo(Ft),an,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(or.upload(B,Lo(Ft),an,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&_e.setValue(B,"center",O.center),_e.setValue(B,"modelViewMatrix",O.modelViewMatrix),_e.setValue(B,"normalMatrix",O.normalMatrix),_e.setValue(B,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Oe=V.uniformsGroups;for(let $e=0,Ar=Oe.length;$e<Ar;$e++){const ei=Oe[$e];k.update(ei,dn),k.bind(ei,dn)}}return dn}function Rh(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Ph(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,z,G){Ct.get(E.texture).__webglTexture=z,Ct.get(E.depthTexture).__webglTexture=G;const V=Ct.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const G=Ct.get(E);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,G=0){I=E,T=z,P=G;let V=!0,O=null,it=!1,ht=!1;if(E){const Mt=Ct.get(E);if(Mt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(B.FRAMEBUFFER,null),V=!1;else if(Mt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Mt.__hasExternalTextures)R.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Rt=E.depthTexture;if(Mt.__boundDepthTexture!==Rt){if(Rt!==null&&Ct.has(Rt)&&(E.width!==Rt.image.width||E.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ht=!0);const Bt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[z])?O=Bt[z][G]:O=Bt[z],it=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?O=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?O=Bt[G]:O=Bt,N.copy(E.viewport),X.copy(E.scissor),W=E.scissorTest}else N.copy(Tt).multiplyScalar(Y).floor(),X.copy(Xt).multiplyScalar(Y).floor(),W=pe;if(At.bindFramebuffer(B.FRAMEBUFFER,O)&&V&&At.drawBuffers(E,O),At.viewport(N),At.scissor(X),At.setScissorTest(W),it){const Mt=Ct.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,G)}else if(ht){const Mt=Ct.get(E.texture),Nt=z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Mt.__webglTexture,G||0,Nt)}b=-1},this.readRenderTargetPixels=function(E,z,G,V,O,it,ht){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){At.bindFramebuffer(B.FRAMEBUFFER,gt);try{const Mt=E.texture,Nt=Mt.format,Bt=Mt.type;if(!Zt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-V&&G>=0&&G<=E.height-O&&B.readPixels(z,G,V,O,Ht.convert(Nt),Ht.convert(Bt),it)}finally{const Mt=I!==null?Ct.get(I).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(E,z,G,V,O,it,ht){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){const Mt=E.texture,Nt=Mt.format,Bt=Mt.type;if(!Zt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-V&&G>=0&&G<=E.height-O){At.bindFramebuffer(B.FRAMEBUFFER,gt);const Rt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Rt),B.bufferData(B.PIXEL_PACK_BUFFER,it.byteLength,B.STREAM_READ),B.readPixels(z,G,V,O,Ht.convert(Nt),Ht.convert(Bt),0);const Qt=I!==null?Ct.get(I).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,Qt);const re=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ou(B,re,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Rt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,it),B.deleteBuffer(Rt),B.deleteSync(re),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,G=0){E.isTexture!==!0&&(zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-G),O=Math.floor(E.image.width*V),it=Math.floor(E.image.height*V),ht=z!==null?z.x:0,gt=z!==null?z.y:0;R.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,ht,gt,O,it),At.unbindTexture()};const Fh=B.createFramebuffer(),Dh=B.createFramebuffer();this.copyTextureToTexture=function(E,z,G=null,V=null,O=0,it=null){E.isTexture!==!0&&(zi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],z=arguments[2],it=arguments[3]||0,G=null),it===null&&(O!==0?(zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=O,O=0):it=0);let ht,gt,Mt,Nt,Bt,Rt,Qt,re,Ee;const Se=E.isCompressedTexture?E.mipmaps[it]:E.image;if(G!==null)ht=G.max.x-G.min.x,gt=G.max.y-G.min.y,Mt=G.isBox3?G.max.z-G.min.z:1,Nt=G.min.x,Bt=G.min.y,Rt=G.isBox3?G.min.z:0;else{const on=Math.pow(2,-O);ht=Math.floor(Se.width*on),gt=Math.floor(Se.height*on),E.isDataArrayTexture?Mt=Se.depth:E.isData3DTexture?Mt=Math.floor(Se.depth*on):Mt=1,Nt=0,Bt=0,Rt=0}V!==null?(Qt=V.x,re=V.y,Ee=V.z):(Qt=0,re=0,Ee=0);const te=Ht.convert(z.format),Ft=Ht.convert(z.type);let Ie;z.isData3DTexture?(R.setTexture3D(z,0),Ie=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(R.setTexture2DArray(z,0),Ie=B.TEXTURE_2D_ARRAY):(R.setTexture2D(z,0),Ie=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const ae=B.getParameter(B.UNPACK_ROW_LENGTH),dn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_i=B.getParameter(B.UNPACK_SKIP_PIXELS),Ke=B.getParameter(B.UNPACK_SKIP_ROWS),is=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Se.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Nt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Bt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Rt);const _e=E.isDataArrayTexture||E.isData3DTexture,an=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const on=Ct.get(E),Oe=Ct.get(z),$e=Ct.get(on.__renderTarget),Ar=Ct.get(Oe.__renderTarget);At.bindFramebuffer(B.READ_FRAMEBUFFER,$e.__webglFramebuffer),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let ei=0;ei<Mt;ei++)_e&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,O,Rt+ei),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(z).__webglTexture,it,Ee+ei)),B.blitFramebuffer(Nt,Bt,ht,gt,Qt,re,ht,gt,B.DEPTH_BUFFER_BIT,B.NEAREST);At.bindFramebuffer(B.READ_FRAMEBUFFER,null),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||Ct.has(E)){const on=Ct.get(E),Oe=Ct.get(z);At.bindFramebuffer(B.READ_FRAMEBUFFER,Fh),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,Dh);for(let $e=0;$e<Mt;$e++)_e?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,on.__webglTexture,O,Rt+$e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,on.__webglTexture,O),an?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,it,Ee+$e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,it),O!==0?B.blitFramebuffer(Nt,Bt,ht,gt,Qt,re,ht,gt,B.COLOR_BUFFER_BIT,B.NEAREST):an?B.copyTexSubImage3D(Ie,it,Qt,re,Ee+$e,Nt,Bt,ht,gt):B.copyTexSubImage2D(Ie,it,Qt,re,Nt,Bt,ht,gt);At.bindFramebuffer(B.READ_FRAMEBUFFER,null),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else an?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Ie,it,Qt,re,Ee,ht,gt,Mt,te,Ft,Se.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Ie,it,Qt,re,Ee,ht,gt,Mt,te,Se.data):B.texSubImage3D(Ie,it,Qt,re,Ee,ht,gt,Mt,te,Ft,Se):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,it,Qt,re,ht,gt,te,Ft,Se.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,it,Qt,re,Se.width,Se.height,te,Se.data):B.texSubImage2D(B.TEXTURE_2D,it,Qt,re,ht,gt,te,Ft,Se);B.pixelStorei(B.UNPACK_ROW_LENGTH,ae),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_i),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,is),it===0&&z.generateMipmaps&&B.generateMipmap(Ie),At.unbindTexture()},this.copyTextureToTexture3D=function(E,z,G=null,V=null,O=0){return E.isTexture!==!0&&(zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,E=arguments[2],z=arguments[3],O=arguments[4]||0),zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,G,V,O)},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),At.unbindTexture()},this.resetState=function(){T=0,P=0,I=null,At.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const U=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|iPod|Mobile/i.test(typeof navigator<"u"?navigator.userAgent:""),_g=!1,xg=!1,zl=U?.4:.32,yg=U?48:58,Mg=U?72:80,bg=U?28:32,Ol=U?256:320,Sg=U?.35:.45;function ca(){const s=typeof window<"u"?window.devicePixelRatio:1;return U?Math.min(s,1.25):Math.min(s,1.1)}function Qn(s,t,e=yg){return Math.abs(s-t)<=e}function cn(s){s.traverse(t=>{t.matrixAutoUpdate=!1,t.updateMatrix()})}function en(s,t,e){const n=new bt(s),i=new bt(t);return n.lerp(i,e).getStyle()}const Hl=120;function wg(s){const t=s%Hl/Hl;return t<.4?0:t<.58?(t-.4)/.18*.28:t<.78?.28+(t-.58)/.2*.52:t<.92?.8+(t-.78)/.14*.2:1-(t-.92)/.08}function lr(s){return s<=.55?0:Math.min(1,(s-.55)/.3)}function Gl(s){return s<=.5?0:Math.min(1,(s-.5)/.38)}function Vl(s){if(s<=.28)return s*.12;if(s<=.55)return .034+(s-.28)*.55;const t=lr(s);return .18+(s-.55)*1.05+t*.35}const Wl=new Map;function Eg(s,t){return[s,t.roughness??.65,t.metalness??0,t.emissive??"",t.emissiveIntensity??0,t.transparent?1:0,t.opacity??1].join("|")}function A(s,t={}){const e=Eg(s,t);let n=Wl.get(e);return n||(n=new ye({color:s,roughness:.65,...t}),Wl.set(e,n)),n}function v(s,t,e,n=0,i=0,r=0,a=!U){const o=new se(t,e);return o.position.set(n,i,r),o.castShadow=a,o.receiveShadow=!U,U||(o.frustumCulled=!0),s.add(o),o}function Xe(s){s.traverse(t=>{var e;t instanceof se&&t.geometry.dispose(),t instanceof yr&&((e=t.material.map)==null||e.dispose(),t.material.dispose())})}class Tg{constructor(t){F(this,"root",new Pt);F(this,"ufos",[]);F(this,"stars",[]);F(this,"warFlashes",[]);F(this,"jets",[]);F(this,"starTimer",0);F(this,"night",0);this.scene=t,this.scene.add(this.root),this.root.name="skyEffects"}build(t,e){this.clear();const n=U?4:5;for(let i=0;i<n;i++){const r=40+e()*(t+80),a=this.makeSkyUfo(e),o=(e()-.5)*55,l=22+e()*16;a.position.set(o,l,r),this.root.add(a),this.ufos.push({group:a,worldZ:r,baseX:o,baseY:l,phase:e()*10,speed:.4+e()*.5})}}makeSkyUfo(t){const e=new Pt;e.userData.isSkyUfo=!0,v(e,new ot(.55,.85,.12,U?8:12),A("#78909C",{metalness:.55,roughness:.35,emissive:"#00E676",emissiveIntensity:.25}),0,0,0),v(e,new Ye(.72,.03,6,U?10:14),A("#69F0AE",{emissive:"#00E676",emissiveIntensity:.85}),0,-.04,0),v(e,new wt(.28,8,6,0,Math.PI*2,0,Math.PI/2),A("#80DEEA",{transparent:!0,opacity:.55,emissive:"#00BCD4",emissiveIntensity:.45}),0,.12,0);for(let i=0;i<5;i++){const r=i/5*Math.PI*2;v(e,new L(.06,.06,.06),A(i%2===0?"#FFEB3B":"#FF1744",{emissive:i%2===0?"#FFC107":"#FF1744",emissiveIntensity:.9}),Math.cos(r)*.65,-.02,Math.sin(r)*.65)}const n=v(e,new ot(.02,.35,2.2,8,1,!0),new Dt({color:"#69F0AE",transparent:!0,opacity:.12,side:he,depthWrite:!1}),0,-1.1,0,!1);return n.userData.isUfoBeam=!0,e.rotation.y=t()*Math.PI*2,e}spawnShootingStar(t,e){if(this.stars.length>=(U?2:4))return;const n=v(this.root,new L(.04,.04,2.8),new Dt({color:"#FFFFFF",transparent:!0,opacity:.92}),(e()-.5)*40,28+e()*12,t+30+e()*40,!1);n.rotation.x=-.6-e()*.4,n.rotation.z=(e()-.5)*.8;const i=v(n,new L(.12,.12,1.2),new Dt({color:"#80DEEA",transparent:!0,opacity:.35,blending:Yt}),0,0,1.4,!1);i.userData.isTail=!0,this.stars.push({mesh:n,vx:(e()-.5)*8,vy:-18-e()*12,vz:-25-e()*15,life:.9+e()*.4})}setNight(t){this.night=t;for(const e of this.ufos)e.group.visible=t>.25,e.group.traverse(n=>{n instanceof se&&n.userData.isUfoBeam&&(n.material.opacity=.08+t*.12)})}playSpectacle(t,e){if(t==="dogfight"){this.spawnJet(e+35+Math.random()*20,-1),this.spawnJet(e+38+Math.random()*20,1);return}if(t==="meteor-streak"){for(let i=0;i<(U?2:4);i++)this.spawnShootingStar(e,Math.random);return}const n=t==="distant-barrage"?U?2:4:U?1:2;for(let i=0;i<n;i++)this.spawnWarFlash(e+25+Math.random()*45,t)}spawnWarFlash(t,e){const n=(Math.random()-.5)*50,i=e==="orbital-flash"?"#FF5252":e==="energy-surge"?"#00E5FF":"#FFAB40",r=v(this.root,new ie(3.5+Math.random()*4,2+Math.random()*2),new Dt({color:i,transparent:!0,opacity:.85,blending:Yt,depthWrite:!1,side:he}),n,6+Math.random()*8,t,!1);r.rotation.y=(Math.random()-.5)*.6,this.warFlashes.push({mesh:r,life:.35+Math.random()*.35})}spawnJet(t,e){const n=new Pt;n.position.set(e*22,16+Math.random()*6,t),v(n,new sn(.35,1.2,5),A("#546E7A",{metalness:.6}),0,0,0),v(n,new ie(.8,.25),new Dt({color:"#FF5252",transparent:!0,opacity:.7}),-.5,0,0,!1),n.rotation.y=e>0?-Math.PI/2:Math.PI/2,n.rotation.z=e*.15,this.root.add(n),this.jets.push({group:n,life:3.5})}update(t,e,n){this.root.position.set(0,0,0);for(const i of this.ufos){if(Math.abs(i.worldZ-n)>(U?90:120)){i.group.visible=!1;continue}i.group.visible=this.night>.2,i.group.position.set(i.baseX+Math.sin(t*.15+i.phase)*2.5,i.baseY+Math.sin(t*i.speed+i.phase)*1.2,i.worldZ),i.group.rotation.y+=e*(.25+i.speed*.15)}if(this.night>.45){this.starTimer+=e;const i=U?2.2:1.1;this.starTimer>=i&&(this.starTimer=0,this.spawnShootingStar(n,Math.random))}for(let i=this.stars.length-1;i>=0;i--){const r=this.stars[i];r.life-=e,r.mesh.position.x+=r.vx*e,r.mesh.position.y+=r.vy*e,r.mesh.position.z+=r.vz*e,r.mesh.material.opacity=Math.max(0,r.life),(r.life<=0||r.mesh.position.y<8)&&(this.root.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),r.mesh.traverse(a=>{a instanceof se&&a!==r.mesh&&(a.geometry.dispose(),a.material.dispose())}),this.stars.splice(i,1))}for(let i=this.warFlashes.length-1;i>=0;i--){const r=this.warFlashes[i];r.life-=e;const a=r.mesh.material;a.opacity=Math.max(0,r.life*2.2),r.mesh.scale.setScalar(1+(.35-r.life)*2),r.life<=0&&(this.root.remove(r.mesh),r.mesh.geometry.dispose(),a.dispose(),this.warFlashes.splice(i,1))}for(let i=this.jets.length-1;i>=0;i--){const r=this.jets[i];r.life-=e,r.group.position.x+=e*14*Math.sign(r.group.position.x||1),r.group.position.z-=e*6,(r.life<=0||Math.abs(r.group.position.z-n)>100)&&(Xe(r.group),this.jets.splice(i,1))}}clear(){for(const t of this.stars)this.root.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.stars=[];for(const t of this.warFlashes)this.root.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.warFlashes=[];for(const t of this.jets)Xe(t.group);this.jets=[];for(const t of this.ufos)Xe(t.group);for(this.ufos=[];this.root.children.length;)this.root.remove(this.root.children[0])}dispose(){this.clear(),this.scene.remove(this.root)}}const Xl=new Map;function es(s,t,e=128){let n=Xl.get(s);if(n)return n;const i=document.createElement("canvas");return i.width=e,i.height=e,t(i.getContext("2d"),e,e),n=new ke(i),n.wrapS=n.wrapT=Sn,n.colorSpace=de,Xl.set(s,n),n}function Ag(s){const t=`brick-${Math.floor(s*100)}`;return es(t,(e,n,i)=>{const r=new bt().setHSL(s,.35,.42);e.fillStyle=r.getStyle(),e.fillRect(0,0,n,i);const a=n/4,o=i/8;for(let l=0;l<8;l++){const c=l%2===0?0:a/2;for(let h=-1;h<5;h++){const u=h*a+c,d=l*o,f=(l+h)%3;e.fillStyle=`rgba(${f===0?0:20},${f===1?0:15},${f===2?0:10},0.12)`,e.fillRect(u+1,d+1,a-2,o-2),e.strokeStyle="rgba(0,0,0,0.22)",e.lineWidth=1,e.strokeRect(u+.5,d+.5,a-1,o-1)}}},128)}function ql(s){const t=`siding-${Math.floor(s*100)}`;return es(t,(e,n,i)=>{const r=new bt().setHSL(s,.28,.72);e.fillStyle=r.getStyle(),e.fillRect(0,0,n,i);for(let a=0;a<i;a+=6)e.fillStyle=a%12===0?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.06)",e.fillRect(0,a,n,3);for(let a=0;a<n;a+=32)e.strokeStyle="rgba(0,0,0,0.08)",e.beginPath(),e.moveTo(a,0),e.lineTo(a,i),e.stroke()},128)}function Cg(s="#5D4037"){return es(`roof-${s}`,(t,e,n)=>{t.fillStyle=s,t.fillRect(0,0,e,n);for(let i=0;i<12;i++){const r=i%2===0?0:10;for(let a=-1;a<8;a++)t.fillStyle=`rgba(0,0,0,${.06+i%3*.03})`,t.beginPath(),t.arc(a*20+r+10,i*10+8,9,0,Math.PI,!0),t.fill()}},128)}function Rg(){return es("bark",(s,t,e)=>{s.fillStyle="#4E342E",s.fillRect(0,0,t,e);for(let n=0;n<24;n++)s.strokeStyle=`rgba(0,0,0,${.08+n%4*.04})`,s.lineWidth=1+n%3,s.beginPath(),s.moveTo(n*17%t,0),s.bezierCurveTo(n*23%t,e*.3,n*31%t,e*.7,n*13%t,e),s.stroke()},64)}function Pg(){return es("leaf",(s,t,e)=>{s.fillStyle="#388E3C",s.fillRect(0,0,t,e);for(let n=0;n<80;n++){const i=n*37%t,r=n*53%e;s.fillStyle=n%3===0?"rgba(129,199,132,0.45)":"rgba(27,94,32,0.25)",s.beginPath(),s.ellipse(i,r,3+n%4,2+n%3,n*.5,0,Math.PI*2),s.fill()}},64)}function Fg(){return es("hexpad",(s,t,e)=>{s.fillStyle="#1a237e",s.fillRect(0,0,t,e);const n=14;for(let i=0;i<9;i++)for(let r=0;r<9;r++){const a=r*n*1.75+(i%2?n*.875:0)+16,o=i*n*1.5+16;s.beginPath();for(let l=0;l<6;l++){const c=Math.PI/3*l-Math.PI/6,h=a+Math.cos(c)*n,u=o+Math.sin(c)*n;l===0?s.moveTo(h,u):s.lineTo(h,u)}s.closePath(),s.fillStyle=(i+r)%2===0?"rgba(0,230,118,0.35)":"rgba(255,213,79,0.25)",s.fill(),s.strokeStyle="rgba(0,230,118,0.55)",s.lineWidth=1,s.stroke()}},256)}function Yl(s){return wg(s)}class Dg{constructor(t){F(this,"scene");F(this,"rootMeshes",[]);F(this,"animProps",[]);F(this,"roadTexture");F(this,"roadEmissiveTex",null);F(this,"roadGlowTex",null);F(this,"roadMesh",null);F(this,"roadGlowMesh",null);F(this,"roadStreakTex",null);F(this,"roadStreakMesh",null);F(this,"roadRainTex",null);F(this,"roadRainMesh",null);F(this,"boostPads",[]);F(this,"roadAccent",{primary:"#FFE082",secondary:"#FFF8E1",edge:"#FFFFFF"});F(this,"roadFx",{turbo:!1,speed:16,baseSpeed:16,playerX:0});F(this,"wetFactor",0);F(this,"districtId",1);F(this,"lightPoolTexture",null);F(this,"skyTexture",null);F(this,"skyCanvas",null);F(this,"skyTheme");F(this,"hemiLight");F(this,"ambientLight");F(this,"sunLight");F(this,"fillLight");F(this,"rimLight");F(this,"accentLight",null);F(this,"roadNightLight",null);F(this,"roadFillLight",null);F(this,"skyPhase",-1);F(this,"skyTick",0);F(this,"skyNight",0);F(this,"skyNightFx",0);F(this,"blackoutBoost",0);F(this,"playerZ",0);F(this,"cullTimer",0);F(this,"skyEffects",null);this.scene=t}build(t,e){this.clear(),this.skyTheme=t,this.districtId=t.id,this.setupLighting(t,e),this.buildSky(t);const n=(U?.009:.011)*(200/t.fogFar);this.scene.fog=new fr(t.fog,n);const i=this.makeGrassTexture(t);i.wrapS=i.wrapT=Sn,i.repeat.set(6,(e+140)/10);const r=v(this.scene,new ie(50,e+140),new ye({map:i,color:t.ground,roughness:1}),0,0,e/2,!1);r.rotation.x=-Math.PI/2,r.position.y=-.02,r.receiveShadow=!U,r.userData.isTerrain=!0,this.rootMeshes.push(r);const a=this.makeSidewalkTexture();a.wrapS=a.wrapT=Sn,a.repeat.set(2,(e+140)/6);for(const C of[-5.2,5.2]){const T=v(this.scene,new ie(3.5,e+140),new ye({map:a,roughness:.95}),C,0,e/2,!1);T.rotation.x=-Math.PI/2,T.position.y=.015,T.receiveShadow=!U,T.userData.isTerrain=!0,this.rootMeshes.push(T)}this.roadAccent=this.roadAccentForTheme(t);const o=this.makeRoadTextures(t);this.roadTexture=o.color,this.roadEmissiveTex=o.emissive,this.roadGlowTex=o.glow;const l=(e+140)/8;for(const C of[this.roadTexture,this.roadEmissiveTex,this.roadGlowTex])C.wrapS=C.wrapT=Sn,C.repeat.set(1,l);const c=v(this.scene,new ie(9.5,e+140),new ye({map:this.roadTexture,emissiveMap:this.roadEmissiveTex,emissive:this.roadAccent.primary,emissiveIntensity:.1,color:U?"#d4dae0":"#c8cdd2",roughness:.76,metalness:.1,envMapIntensity:.45}),0,0,e/2,!1);c.rotation.x=-Math.PI/2,c.position.y=.025,c.receiveShadow=!U,c.userData.isTerrain=!0,this.roadMesh=c,this.rootMeshes.push(c);const h=v(this.scene,new ie(9.5,e+140),new Dt({map:this.roadGlowTex,color:this.roadAccent.primary,transparent:!0,opacity:U?.18:.26,blending:Yt,depthWrite:!1}),0,.032,e/2,!1);h.rotation.x=-Math.PI/2,h.userData.isTerrain=!0,this.roadGlowMesh=h,this.rootMeshes.push(h);const u=this.getRoadStreakTexture(),d=v(this.scene,new ie(9.5,e+140),new Dt({map:u,color:this.roadAccent.secondary,transparent:!0,opacity:0,blending:Yt,depthWrite:!1}),0,.033,e/2,!1);d.rotation.x=-Math.PI/2,d.userData.isTerrain=!0,this.roadStreakTex=u,this.roadStreakMesh=d,this.rootMeshes.push(d);const f=this.getRoadRainTexture(),g=v(this.scene,new ie(9.8,e+140),new Dt({map:f,color:"#B3E5FC",transparent:!0,opacity:0,blending:Yt,depthWrite:!1}),0,.034,e/2,!1);g.rotation.x=-Math.PI/2,g.userData.isTerrain=!0,this.roadRainTex=f,this.roadRainMesh=g,this.rootMeshes.push(g),this.placeBoostPads(t,e);const _=this.makeCurbTexture();_.wrapS=_.wrapT=Sn,_.repeat.set(1,(e+140)/4);for(const C of[-3.4,3.4]){const T=v(this.scene,new L(.35,.18,e+140),new ye({map:_,color:"#CFD8DC",roughness:.92,metalness:.04}),C,.09,e/2,!1);v(T,new L(.06,.04,e+140),A("#B0BEC5",{roughness:.85}),C>0?-.14:.14,.1,0,!1),v(T,new L(.05,.19,e+140),A("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.22}),C>0?-.17:.17,0,0,!1),T.userData.isTerrain=!0,this.rootMeshes.push(T)}if(this.placeStreetLights(t,e),!U)for(let C=30;C<e;C+=28)for(const T of[-5.2,5.2]){const P=v(this.scene,new ie(3.2,1.2),A("#90A4AE",{roughness:.9}),T,.018,C,!1);P.rotation.x=-Math.PI/2,P.userData.isTerrain=!0,this.rootMeshes.push(P)}const m=Lg(t.id*1337+e);this.skyEffects&&this.skyEffects.dispose(),this.skyEffects=new Tg(this.scene),this.skyEffects.build(e,m);const p=U?3:5;for(let C=0;C<p;C++){const T=this.makeCloud(m),P=m()*(e+60);T.position.set((m()-.5)*40,18+m()*14,P),this.scene.add(T),this.rootMeshes.push(T),this.animProps.push({obj:T,worldZ:P,kind:"cloud",speed:.15+m()*.2,baseY:T.position.y,phase:m()*10})}const M=U?22:26,x=U?5:9,y=[];for(let C=0;C<e+50;C+=M+Math.floor(m()*x))for(const T of[-1,1]){if(m()>(U?.22:.2)){const b=this.makeBuilding(t,m,T),w=C+m()*5;b.position.set(T*(8+m()*5),0,w),cn(b),this.scene.add(b),this.rootMeshes.push(b),y.push({side:T,z:w})}else if(t.id<=2&&m()>.32){const b=this.makeTree(m);b.position.set(T*(13+m()*3.5),0,C+m()*4),cn(b),this.scene.add(b),this.rootMeshes.push(b)}else if(t.id===3&&m()>.38){const b=this.makeCactus(m);b.position.set(T*(12+m()*4),0,C+m()*4),cn(b),this.scene.add(b),this.rootMeshes.push(b)}else if(t.id===4&&m()>.28){const b=this.makePalmTree(m);b.position.set(T*(12+m()*4),0,C+m()*4),cn(b),this.scene.add(b),this.rootMeshes.push(b)}if(m()>(U?.82:.68)){const b=this.makeMailbox(),w=C+m()*3;b.position.set(T*(6.4+m()*.8),0,w),cn(b),this.scene.add(b),this.rootMeshes.push(b)}if(!U&&m()>.88){const b=this.makeAlienCrash();b.position.set(T*(7+m()*2),0,C),cn(b),this.scene.add(b),this.rootMeshes.push(b),this.animProps.push({obj:b.children[1],worldZ:C,kind:"bob",speed:2,baseY:.12,phase:m()*5})}}if(t.id<=2){const C=U?14:11;for(let T=24;T<e+40;T+=C+Math.floor(m()*5))for(const P of[-1,1]){if(y.some(w=>w.side===P&&Math.abs(w.z-T)<8)||m()>.58)continue;const b=this.makeTree(m);b.position.set(P*(12.5+m()*4),0,T+m()*3),cn(b),this.scene.add(b),this.rootMeshes.push(b)}}else if(t.id===3)for(let C=20;C<e+40;C+=16+Math.floor(m()*8)){for(const T of[-1,1]){if(m()>.45)continue;const P=this.makeCactus(m);P.position.set(T*(11+m()*5),0,C+m()*3),cn(P),this.scene.add(P),this.rootMeshes.push(P)}if(m()>.7){const T=this.makeDesertRock(m);T.position.set((m()>.5?1:-1)*(10+m()*6),0,C),cn(T),this.scene.add(T),this.rootMeshes.push(T)}}else if(t.id===4){const C=U?12:9;for(let T=20;T<e+40;T+=C+Math.floor(m()*4))for(const P of[-1,1]){if(y.some(w=>w.side===P&&Math.abs(w.z-T)<7)||m()>.35)continue;const b=this.makePalmTree(m);b.position.set(P*(11.5+m()*4.5),0,T+m()*3),cn(b),this.scene.add(b),this.rootMeshes.push(b)}}this.addMilestoneArch(8,"#66BB6A","START"),this.addMilestoneArch(e-5,"#FFD54F","ZONE")}buildSky(t){var n;this.skyCanvas=document.createElement("canvas"),this.skyCanvas.width=Ol,this.skyCanvas.height=Ol,this.skyTexture=new ke(this.skyCanvas),this.skyTexture.colorSpace=de,this.scene.background=this.skyTexture;const e=Yl(0);this.skyNight=e,this.skyNightFx=lr(e),this.paintSky(e,t),this.applySkyLighting(e),(n=this.skyEffects)==null||n.setNight(e)}drawSkyCloud(t,e,n,i,r){t.save(),t.globalAlpha=r,t.fillStyle="#ffffff";const a=28*i;t.beginPath(),t.arc(e,n,a,0,Math.PI*2),t.arc(e+a*.9,n-a*.15,a*.82,0,Math.PI*2),t.arc(e+a*1.75,n+a*.05,a*.7,0,Math.PI*2),t.arc(e-a*.75,n+a*.08,a*.65,0,Math.PI*2),t.fill(),t.restore()}drawAurora(t,e,n,i){if(!(i<=0)){t.save(),t.globalAlpha=i;for(let r=0;r<3;r++){t.beginPath();for(let o=0;o<=e;o+=8){const l=n*(.18+r*.08)+Math.sin(o*.02+r*2)*22+Math.cos(o*.008)*14;o===0?t.moveTo(o,l):t.lineTo(o,l)}t.lineTo(e,n*.55),t.lineTo(0,n*.55),t.closePath();const a=t.createLinearGradient(0,0,e,n*.5);a.addColorStop(0,r===0?"rgba(0,230,118,0)":r===1?"rgba(0,229,255,0)":"rgba(224,64,251,0)"),a.addColorStop(.5,r===0?"rgba(0,230,118,0.35)":r===1?"rgba(0,229,255,0.28)":"rgba(224,64,251,0.22)"),a.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=a,t.fill()}t.restore()}}paintSky(t,e){var _;if(!this.skyCanvas)return;const n=this.skyCanvas.getContext("2d"),i=this.skyCanvas.width,r=this.skyCanvas.height,a=en(e.sky,"#64B5F6",.4),o=en(e.skyBottom,"#BBDEFB",.45),l=en("#FFECB3",e.fog,.25),c=en("#E3F2FD",e.ground,.2),h=en(a,"#0a0520",t),u=en(o,"#1a1040",t),d=en(l,"#120820",t),f=en(c,"#050510",t),g=n.createLinearGradient(0,0,0,r);if(g.addColorStop(0,h),g.addColorStop(.28,u),g.addColorStop(.55,d),g.addColorStop(.78,f),g.addColorStop(1,en(e.fog,"#0a0a12",t)),n.fillStyle=g,n.fillRect(0,0,i,r),t>.22&&t<.72){const m=Math.sin((t-.22)/.5*Math.PI)*.85,p=n.createLinearGradient(0,r*.45,0,r);p.addColorStop(0,"rgba(255,120,60,0)"),p.addColorStop(.45,`rgba(255,140,80,${.35*m})`),p.addColorStop(.75,`rgba(255,87,34,${.25*m})`),p.addColorStop(1,"rgba(80,20,60,0)"),n.fillStyle=p,n.fillRect(0,0,i,r)}if(t>.55){this.drawAurora(n,i,r,Math.min(1,(t-.55)*1.8));const m=n.createLinearGradient(i*.2,0,i*.8,r);m.addColorStop(0,"rgba(255,255,255,0)"),m.addColorStop(.45,`rgba(200,210,255,${.08*t})`),m.addColorStop(.55,`rgba(255,255,255,${.12*t})`),m.addColorStop(.65,`rgba(200,210,255,${.08*t})`),m.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=m,n.fillRect(0,0,i,r)}if(t<.75){const m=Math.max(0,1-Math.max(0,t-.15)*1.25),p=i*(.62+t*.12),M=r*(.28+t*.12),x=n.createRadialGradient(p,M,0,p,M,140);x.addColorStop(0,`rgba(255,255,240,${.98*m})`),x.addColorStop(.2,`rgba(255,240,160,${.7*m})`),x.addColorStop(.45,`rgba(255,200,100,${.35*m})`),x.addColorStop(1,"rgba(255,200,80,0)"),n.fillStyle=x,n.fillRect(0,0,i,r)}if(t>.48){const m=Math.min(1,(t-.48)*1.6),p=i*.78,M=r*.22;n.fillStyle=`rgba(240,240,255,${.9*m})`,n.beginPath(),n.arc(p,M,26,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(10,5,32,${.85*m})`,n.beginPath(),n.arc(p+10,M-6,22,0,Math.PI*2),n.fill()}if(t<.45){const m=.6*(1-t*1.35),p=[[.12,.28,1.1],[.42,.22,.95],[.68,.31,1.25],[.86,.24,.85],[.28,.38,.75],[.55,.42,.9]];for(const[M,x,y]of p)this.drawSkyCloud(n,M*i,x*r,y,m)}if(t>.42){const m=Math.min(1,(t-.42)*1.45),p=U?50:65;for(let M=0;M<p;M++){const x=M*97%1e3/1e3,y=M*53%720/1e3,C=.45+M*17%10/18;n.fillStyle=`rgba(255,255,255,${m*C})`;const T=M%7===0?2.2:M%4===0?1.5:.9;n.beginPath(),n.arc(x*i,y*r*.62,T,0,Math.PI*2),n.fill(),M%11===0&&m>.5&&(n.strokeStyle=`rgba(180,220,255,${m*.35})`,n.lineWidth=1,n.beginPath(),n.moveTo(x*i-4,y*r*.62),n.lineTo(x*i+4,y*r*.62),n.moveTo(x*i,y*r*.62-4),n.lineTo(x*i,y*r*.62+4),n.stroke())}}(_=this.skyEffects)==null||_.setNight(t),this.skyTexture&&(this.skyTexture.needsUpdate=!0)}applySkyLighting(t){const e=this.skyTheme,n=lr(t);let i=Vl(t);U&&(i*=.72);const r=U?1.22:1,a=en(e.fog,e.id>=6?"#120828":"#050510",i);this.scene.fog instanceof fr&&this.scene.fog.color.set(a);const o=new bt(e.sky),l=new bt(e.id>=6?"#1a0a40":"#223355"),c=o.clone().lerp(l,i),h=new bt(e.ground),u=new bt("#0a0a14"),d=h.clone().lerp(u,i*.85);if(this.hemiLight&&(this.hemiLight.color.copy(c),this.hemiLight.groundColor.copy(d),this.hemiLight.intensity=e.ambient*.78*(1-i*.45)*r),this.ambientLight){const f=new bt("#ffffff").lerp(new bt("#8899cc"),i*.65);this.ambientLight.color.copy(f);const g=Gl(t);this.ambientLight.intensity=(e.ambient*.32*(1-i*.42)+g*.22)*r+(U?.14:0)}if(this.sunLight){const f=new bt(e.id>=3?"#FFF0D0":"#FFF8F0"),g=new bt("#6688bb");this.sunLight.color.copy(f.lerp(g,i)),this.sunLight.intensity=e.sun*.88*(1-i*.55)*r}if(this.fillLight){const f=new bt(e.skyBottom||e.sky),g=new bt(e.id>=4?"#004D40":"#1a237e");this.fillLight.color.copy(f.lerp(g,i*.75)),this.fillLight.intensity=e.ambient*.24*(.55+i*.45)*r}if(this.rimLight&&(this.rimLight.intensity=.1+(1-i)*.14,this.rimLight.color.set(en("#FFE082","#80DEEA",n*.85))),this.accentLight&&(this.accentLight.intensity=(e.id>=6?.55:.25)*(.25+n*.95)),this.roadNightLight&&(this.roadNightLight.intensity=n*(U?.45:.58),this.roadNightLight.color.set(en("#FFE082","#FFF3E0",1-n*.25))),this.roadFillLight){const f=U?.52:.44;this.roadFillLight.intensity=f*(1-i*.22)+n*.1,this.roadFillLight.color.set(en("#FFF8F0","#E8F4FF",i*.35))}if(this.roadMesh){const f=this.roadMesh.material,g=(U?.12:.08)+(1-i)*(U?.14:.1);f.emissiveIntensity=g+n*(U?.32:.55),f.emissive.set(this.roadAccent.primary).lerp(new bt(this.roadAccent.secondary),n*.35),f.roughness=.82-i*.1-n*.08,f.metalness=.06+n*.14;const _=U?"#d8dee4":"#c8cdd2",m=U?"#b8c2cc":"#9aa8b8";f.color.set(_).lerp(new bt(m),i*(U?.18:.25))}if(this.roadGlowMesh){const f=this.roadGlowMesh.material,g=U?.16:.24;f.opacity=n>.04?g+n*(U?.42:.58):0,f.color.set(this.roadAccent.primary).lerp(new bt(this.roadAccent.secondary),n*.25),this.roadGlowMesh.visible=n>.04}}roadAccentForTheme(t){return t.id>=6?{primary:"#EA80FC",secondary:"#80DEEA",edge:"#E1BEE7"}:t.id>=5?{primary:"#FF7043",secondary:"#FFD54F",edge:"#FFCC80"}:t.id>=4?{primary:"#69F0AE",secondary:"#80DEEA",edge:"#B2FF59"}:t.id>=3?{primary:"#FFB74D",secondary:"#FFE082",edge:"#FFF8E1"}:t.id>=2?{primary:"#FFD54F",secondary:"#FFAB40",edge:"#FFFFFF"}:{primary:"#FFE082",secondary:"#FFF59D",edge:"#FFFFFF"}}rainWetForDistrict(t,e){return t.id===5?Math.min(1,.6+e*.4):t.id===4?Math.min(1,.38+e*.55):t.id===3?Math.min(1,.06+e*.12):t.id>=6?Math.min(1,.22+e*.5):Math.min(1,e*.58)}drawDistrictRoadSurface(t,e,n,i,r,a){const o=i.id,l=r/2,c=(u,d,f)=>{const g=t.createLinearGradient(0,0,r,0);g.addColorStop(0,u),g.addColorStop(.5,d),g.addColorStop(1,f),t.fillStyle=g,t.fillRect(0,0,r,r)};if(o===2){t.fillStyle="#5D4037",t.fillRect(0,0,r*.2,r),t.fillRect(r*.8,0,r*.2,r);for(let d=0;d<r;d+=10)for(let f=0;f<2;f++){const g=f===0?0:r*.8;for(let _=0;_<r*.2;_+=10)t.fillStyle=(_+d+f)%20===0?"#6D4C41":"#A1887F",t.fillRect(g+_,d,10,10)}const u=t.createLinearGradient(r*.2,0,r*.8,0);u.addColorStop(0,"#252c32"),u.addColorStop(.5,"#3a444c"),u.addColorStop(1,"#252c32"),t.fillStyle=u,t.fillRect(r*.2,0,r*.6,r)}else if(o===3){c("#C4A574","#4a4035","#C4A574"),t.fillStyle="rgba(212,165,116,0.55)",t.fillRect(0,0,r*.16,r),t.fillRect(r*.84,0,r*.16,r);for(let u=0;u<12;u++){const d=(u%2===0?0:r*.84)+u%3*8,f=u*37%(r-30);t.fillStyle="rgba(255,224,178,0.35)",t.beginPath(),t.ellipse(d+12,f,18,8,.2,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(62,47,35,0.35)";for(let u=0;u<8;u++){const d=r*.3+u*29%(r*.4),f=u*53%r;t.beginPath(),t.moveTo(d,f),t.lineTo(d+12,f+8),t.stroke()}}else if(o===4){c("#1a2820","#243830","#1a2820"),t.fillStyle="rgba(46,125,50,0.35)",t.fillRect(0,0,r*.14,r),t.fillRect(r*.86,0,r*.14,r);for(let d=0;d<40;d++)t.fillStyle=`rgba(${80+d%3*30},${120+d%4*20},70,0.2)`,t.fillRect(d*19%r,d*31%r,3,2);const u=t.createLinearGradient(l-r*.1,0,l+r*.1,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(80,160,140,0.14)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.fillRect(0,0,r,r)}else if(o===5){c("#2a3036","#3d454c","#2a3036");for(let u=0;u<6;u++){const d=r*.25+u*41%(r*.5),f=u*67%(r-40);t.fillStyle="#546E7A",t.fillRect(d,f,28,22),t.strokeStyle="rgba(255,255,255,0.12)";for(let g=0;g<4;g++)t.beginPath(),t.moveTo(d+g*7,f),t.lineTo(d+g*7+14,f+22),t.stroke()}t.fillStyle="rgba(20,20,25,0.2)";for(let u=0;u<10;u++)t.beginPath(),t.ellipse(u*43%r,u*61%r,10,6,0,0,Math.PI*2),t.fill()}else if(o>=6){c("#14101f","#1e1830","#14101f"),t.strokeStyle=a.primary,t.globalAlpha=.2,t.lineWidth=1;for(let u=0;u<r;u+=16)t.beginPath(),t.moveTo(u,0),t.lineTo(u,r),t.stroke();for(let u=0;u<r;u+=16)t.beginPath(),t.moveTo(0,u),t.lineTo(r,u),t.stroke();t.globalAlpha=1,n.fillStyle=a.primary,n.globalAlpha=.08;for(let u=0;u<r;u+=16)n.fillRect(u,0,1,r),n.fillRect(0,u,r,1);if(n.globalAlpha=1,o>=7){t.strokeStyle="rgba(229,57,53,0.25)";for(let u=0;u<6;u++){const d=r*.35+u*37%(r*.3),f=u*71%r;t.beginPath(),t.moveTo(d,f),t.lineTo(d+20,f+6),t.stroke()}}}else c("#1e252b","#3d4850","#1e252b"),o===1&&(t.fillStyle="rgba(180,200,160,0.04)",t.fillRect(0,0,r*.12,r),t.fillRect(r*.88,0,r*.12,r));const h=n.createLinearGradient(l-r*.1,0,l+r*.1,0);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(.5,"rgba(120,180,220,0.1)"),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h,n.fillRect(l-r*.12,0,r*.24,r)}getRoadStreakTexture(){if(this.roadStreakTex)return this.roadStreakTex;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#000000",e.fillRect(0,0,128,128);for(const n of[0,1])for(let i=0;i<14;i++){const r=n===0?6+i%4*5:122-i%4*5,a=i*23%110,o=18+i%4*10,l=e.createLinearGradient(r,a,r,a+o);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.4,`rgba(255,255,255,${.06+i%3*.02})`),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(r-1,a,2,o)}return this.roadStreakTex=new ke(t),this.roadStreakTex.colorSpace=de,this.roadStreakTex.wrapS=this.roadStreakTex.wrapT=Sn,this.roadStreakTex}getRoadRainTexture(){if(this.roadRainTex)return this.roadRainTex;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.strokeStyle="rgba(180,220,255,0.22)",e.lineWidth=1.2;for(let n=0;n<48;n++){const i=n*23%128,r=n*41%128;e.beginPath(),e.moveTo(i,r),e.lineTo(i-6,r+14),e.stroke()}e.fillStyle="rgba(150,200,255,0.06)";for(let n=0;n<20;n++)e.fillRect(n*31%120,n*47%120,2,8);return this.roadRainTex=new ke(t),this.roadRainTex.colorSpace=de,this.roadRainTex.wrapS=this.roadRainTex.wrapT=Sn,this.roadRainTex}placeBoostPads(t,e){const n=this.roadAccentForTheme(t),i=U?58:46;for(let r=52;r<e-24;r+=i){const a=new Pt;a.position.set(0,0,r);const o=v(a,new qe(.75,1.05,U?20:28),new Dt({color:n.primary,transparent:!0,opacity:.22,blending:Yt,depthWrite:!1,side:he}),0,.034,0,!1);o.rotation.x=-Math.PI/2;const l=v(a,new Re(.72,U?16:24),new Dt({color:n.secondary,transparent:!0,opacity:.1,blending:Yt,depthWrite:!1}),0,.035,0,!1);l.rotation.x=-Math.PI/2;for(let c=0;c<3;c++){const h=v(a,new ie(.35,.22),new Dt({color:n.primary,transparent:!0,opacity:.35,blending:Yt,depthWrite:!1,side:he}),0,.036,-.25+c*.25,!1);h.rotation.x=-Math.PI/2,h.userData.isPadArrow=!0}cn(a),this.scene.add(a),this.rootMeshes.push(a),this.boostPads.push({group:a,z:r,flash:0})}}getSkyNight(){return Math.min(1,this.skyNight+this.blackoutBoost)}getNightFx(){return Math.min(1,this.skyNightFx+this.blackoutBoost*.85)}getGameplayNight(){return Gl(Math.min(1,this.skyNight+this.blackoutBoost*.45))}setBlackout(t){this.blackoutBoost=Math.max(0,Math.min(.75,t))}updateSkyCycle(t,e){var i;const n=Yl(t);this.skyNight=n,this.skyNightFx=lr(n),(i=this.skyEffects)==null||i.setNight(n),this.applySkyLighting(n),this.skyTick+=e,!(this.skyTick<Sg)&&(this.skyTick=0,this.paintSky(n,this.skyTheme))}makeRoadTextures(t){const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d"),r=document.createElement("canvas");r.width=256,r.height=256;const a=r.getContext("2d");a.fillStyle="#000000",a.fillRect(0,0,256,256);const o=document.createElement("canvas");o.width=256,o.height=256;const l=o.getContext("2d");l.fillStyle="#000000",l.fillRect(0,0,256,256);const c=this.roadAccentForTheme(t);this.drawDistrictRoadSurface(i,a,l,t,256,c);for(let x=0;x<256*2;x++){const y=x*47%256,C=x*83%256,T=(y*17+C*31)%100/100;i.fillStyle=T>.55?"rgba(255,255,255,0.015)":"rgba(0,0,0,0.025)",i.fillRect(y,C,1,1)}i.fillStyle="rgba(0,0,0,0.11)";for(let x=0;x<18;x++){const y=x*37%216,C=x*59%226;i.beginPath(),i.ellipse(y+20,C+15,14+x%5,8+x%4,x*.4,0,Math.PI*2),i.fill()}i.fillStyle="rgba(90,110,130,0.06)";for(let x=0;x<8;x++)i.fillRect(x*61%206,x*73%166,36,70+x%3*20);const h=[Math.floor(256*.04),Math.floor(256*.92)],u=256/2,d=[256*.2,256*.4,256*.6,256*.8],f=(x,y,C,T,P,I)=>{I&&x.setLineDash(I);for(const b of[T*2.2,T*1.4,T])x.strokeStyle=C,x.globalAlpha=P*(b===T?1:b===T*1.4?.45:.2),x.lineWidth=b,x.lineCap="round",x.beginPath(),x.moveTo(y,0),x.lineTo(y,256),x.stroke();x.globalAlpha=1,I&&x.setLineDash([])};for(const x of h)i.strokeStyle="rgba(255,255,255,0.92)",i.lineWidth=Math.max(3,256/64),i.beginPath(),i.moveTo(x,0),i.lineTo(x,256),i.stroke(),f(a,x,c.edge,Math.max(3,256/64),.95),f(l,x,"#ffffff",Math.max(5,256/42),.35);i.strokeStyle="#FFEB3B",i.lineWidth=Math.max(4,256/48),i.lineCap="round",i.setLineDash([256*.045,256*.028]);for(const x of[-256*.014,256*.014])i.beginPath(),i.moveTo(u+x,0),i.lineTo(u+x,256),i.stroke(),f(a,u+x,"#FFD54F",Math.max(4,256/48),1,[256*.045,256*.028]),f(l,u+x,c.primary,Math.max(6,256/36),.55,[256*.045,256*.028]);i.setLineDash([]);const g=l.createLinearGradient(u-256*.08,0,u+256*.08,0);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(.35,"rgba(255,220,120,0.12)"),g.addColorStop(.5,"rgba(255,240,180,0.28)"),g.addColorStop(.65,"rgba(255,220,120,0.12)"),g.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=g,l.fillRect(u-256*.1,0,256*.2,256);const _=a.createLinearGradient(u-256*.06,0,u+256*.06,0);_.addColorStop(0,"rgba(0,0,0,0)"),_.addColorStop(.5,"rgba(255,213,79,0.35)"),_.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=_,a.fillRect(u-256*.08,0,256*.16,256),i.strokeStyle="rgba(255,255,255,0.32)",i.lineWidth=Math.max(2,256/96),i.setLineDash([256*.035,256*.04]);for(const x of d)i.beginPath(),i.moveTo(x,0),i.lineTo(x,256),i.stroke(),f(a,x,"rgba(255,255,255,0.55)",Math.max(2,256/96),.7,[256*.035,256*.04]);i.setLineDash([]);for(let x=0;x<4;x++){const y=x*64+16;i.fillStyle="rgba(255,255,255,0.88)";for(let C=0;C<6;C++){const T=97.28+C*10.24;i.fillRect(T,y,256*.028,256*.07),a.fillStyle="rgba(255,255,255,0.72)",a.fillRect(T-1,y-1,256*.03+2,256*.072+2),l.fillStyle="rgba(255,255,255,0.4)",l.fillRect(T-2,y-2,256*.034+4,256*.076+4)}}for(let x=0;x<4;x++){const y=x*64+32;for(let C=0;C<3;C++){const T=u+(C-1)*256*.055;a.fillStyle="rgba(255,235,120,0.55)",a.beginPath(),a.moveTo(T,y+256*.04),a.lineTo(T-256*.022,y),a.lineTo(T+256*.022,y),a.closePath(),a.fill(),l.fillStyle="rgba(255,220,100,0.28)",l.beginPath(),l.moveTo(T,y+256*.05),l.lineTo(T-256*.028,y-256*.01),l.lineTo(T+256*.028,y-256*.01),l.closePath(),l.fill()}}i.fillStyle="rgba(255,213,79,0.42)";for(let x=0;x<16;x++)i.fillRect(h[0]+4,x*256/16+4,256*.012,256*.04),i.fillRect(h[1]-8,x*256/16+10,256*.012,256*.04),a.fillStyle="rgba(255,193,7,0.65)",a.fillRect(h[0]+3,x*256/16+3,256*.014,256*.044),a.fillRect(h[1]-9,x*256/16+9,256*.014,256*.044);for(let x=0;x<5;x++){const y=64+x*256/5,C=x*97%216;i.fillStyle="#1a2026",i.beginPath(),i.arc(y,C+20,256*.035,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(100,120,140,0.35)",i.lineWidth=1,i.stroke()}const m=new ke(n);m.colorSpace=de;const p=new ke(r);p.colorSpace=de;const M=new ke(o);return M.colorSpace=de,{color:m,emissive:p,glow:M}}makeCurbTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle="#B0BEC5",e.fillRect(0,0,64,64),e.fillStyle="rgba(255,255,255,0.12)",e.fillRect(0,0,64,3),e.fillStyle="rgba(0,0,0,0.08)";for(let i=0;i<8;i++)e.fillRect(0,i*8+4,64,2);e.fillStyle="rgba(0,0,0,0.05)";for(let i=0;i<12;i++)e.fillRect(i*11%58,i*17%58,6,4);const n=new ke(t);return n.colorSpace=de,n}getLightPoolTexture(){if(this.lightPoolTexture)return this.lightPoolTexture;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,"rgba(255, 224, 178, 0.9)"),n.addColorStop(.25,"rgba(255, 204, 128, 0.45)"),n.addColorStop(.55,"rgba(255, 183, 77, 0.12)"),n.addColorStop(1,"rgba(255, 183, 77, 0)"),e.fillStyle=n,e.fillRect(0,0,128,128),this.lightPoolTexture=new ke(t),this.lightPoolTexture.colorSpace=de,this.lightPoolTexture}placeStreetLights(t,e){const n=U?32:38;let i=1;for(let r=22;r<e-12;r+=n){const a=this.makeStreetLamp(t);a.position.set(i*4.18,0,r),a.rotation.y=i>0?0:Math.PI,cn(a),this.scene.add(a),this.rootMeshes.push(a),this.animProps.push({obj:a,worldZ:r,kind:"flicker",speed:2.2+r*17%80/40,baseY:0,phase:r*.13,bulb:a.userData.flickerBulb,lightPool:a.userData.lightPool}),i*=-1}}makeGrassTexture(t){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle=t.ground,n.fillRect(0,0,256,256);for(let r=0;r<256;r+=2)for(let a=0;a<256;a+=2){const o=(a*13+r*7)%100/100;n.fillStyle=o>.5?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)",n.fillRect(a,r,2,2)}for(let r=0;r<48;r++)n.fillStyle=`rgba(0,0,0,${.03+r%4*.015})`,n.beginPath(),n.ellipse(r*19%256,r*41%256,6+r%5,4+r%3,r*.3,0,Math.PI*2),n.fill();for(let r=0;r<200;r++){const a=r*37%256,o=r*53%256;n.strokeStyle=r%2===0?"rgba(46,125,50,0.15)":"rgba(129,199,132,0.12)",n.lineWidth=1,n.beginPath(),n.moveTo(a,o),n.lineTo(a+r%3-1,o-3-r%4),n.stroke()}const i=new ke(e);return i.colorSpace=de,i}makeSidewalkTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#B0BEC5",e.fillRect(0,0,128,128),e.strokeStyle="rgba(255,255,255,0.28)",e.lineWidth=1;for(let i=0;i<128;i+=16)for(let r=0;r<128;r+=16)e.strokeRect(r+.5,i+.5,15,15),(r+i)%32===0&&(e.fillStyle="rgba(255,255,255,0.06)",e.fillRect(r+2,i+2,12,12));e.fillStyle="rgba(0,0,0,0.05)";for(let i=0;i<14;i++)e.fillRect(i*19%118,i*27%118,7,5);e.fillStyle="rgba(255,255,255,0.04)",e.fillRect(0,0,128,2);const n=new ke(t);return n.colorSpace=de,n}makeCloud(t){const e=new Pt,n=A("#FFFFFF",{transparent:!0,opacity:.92,roughness:1}),i=U?4:6;for(let r=0;r<i;r++)v(e,new wt(1.1+t()*1.4,10,8),n,(r-i/2)*1.05,.15+t()*.55,(t()-.5)*.9,!1).scale.set(1,.5+t()*.15,1);return v(e,new wt(1.8,8,8),A("#FFFFFF",{transparent:!0,opacity:.35}),0,-.2,0,!1).scale.set(2.2,.3,1.4),e}addWindow(t,e,n,i,r,a,o,l){const c=A("#ECEFF1",{roughness:.7}),h=A(o?l.id>=4?"#E1BEE7":"#FFF9C4":"#546E7A",{emissive:o?l.id>=4?"#CE93D8":"#FFD54F":"#263238",emissiveIntensity:o?l.id>=4?.95:.45:.05,metalness:.2,roughness:.25});v(t,new L(r+.08,a+.08,.05),c,e,n,i),v(t,new L(r,a,.04),h,e,n,i+.02),v(t,new L(r+.14,.06,.08),A("#455A64",{roughness:.8}),e,n-a/2-.04,i+.03),o&&a>.35&&(v(t,new L(.03,a*.85,.02),c,e,n,i+.04),v(t,new L(r*.85,.03,.02),c,e,n,i+.04))}addFacadeWindows(t,e,n,i,r,a,o){const l=e>0?-n/2-.03:n/2+.03,c=Math.max(2,Math.floor(n/1.85)),h=Math.max(2,Math.floor((i-2)/1.75)),u=Math.min(.62,(n-.6)/c-.12),d=Math.min(.82,(i-2.2)/h-.12);for(let f=0;f<h;f++)for(let g=0;g<c;g++){const _=1.35+f*(d+.18),m=-r/2+.55+g*(u+.18)+u/2;if(f===0&&g===Math.floor(c/2)&&a.id<=2)continue;const p=o()>(a.id>=3?.35:.22);this.addWindow(t,l,_,m,u,d,p,a)}}makeBuilding(t,e,n){const i=new Pt,r=t.id===3?"desert":t.id===4?"jungle":t.id>=6?"neon":t.id>=5?"industrial":t.id>=2?"downtown":"suburban",a=r==="desert"?4+e()*3:r==="jungle"?5+e()*5:r==="downtown"?10+e()*14:r==="suburban"?5+e()*4:7+e()*9,o=r==="downtown"?5+e()*3:r==="desert"?4+e()*2.5:4.5+e()*3.5,l=5+e()*4,c=t.buildingHue+e()*.08,h=new bt().setHSL(c,r==="suburban"?.42:.32,r==="neon"?.22:.38+t.id*.03),u=new bt().setHSL(c,.25,r==="suburban"?.78:.55),d=r==="desert"||r==="jungle"||r==="suburban"?ql(c):Ag(c);d.repeat.set(o/2,a/2);const f=new ye({map:d,color:r==="desert"?"#D7CCC8":r==="jungle"?"#8D6E63":h,roughness:r==="desert"?.95:.88}),g=A(r==="desert"?"#BF360C":r==="jungle"?"#33691E":u.getStyle(),{roughness:.75}),_=Cg(r==="suburban"?"#BF360C":r==="desert"?"#A1887F":r==="jungle"?"#558B2F":"#455A64");_.repeat.set(o/2,1.5);const m=new ye({map:_,color:r==="neon"?"#311B92":r==="suburban"?"#BF360C":r==="desert"?"#A1887F":r==="jungle"?"#558B2F":"#455A64",roughness:.85,emissive:r==="neon"?"#7B1FA2":"#000000",emissiveIntensity:r==="neon"?.25:0});if(v(i,new L(o,a,l),f,0,a/2,0),v(i,new L(o+.16,.28,l+.16),A(r==="desert"?"#BCAAA4":r==="jungle"?"#3E2723":"#37474F",{roughness:.92}),0,.14,0),v(i,new L(o+.2,.1,l+.2),g,0,.32,0),r==="suburban"){const M=v(i,new L(o/2+.1,.18,l+.35),m,-o/4,a+.1,0);M.rotation.z=.42;const x=v(i,new L(o/2+.1,.18,l+.35),m,o/4,a+.1,0);x.rotation.z=-.42,v(i,new L(.45,1.1,.45),A("#78909C",{roughness:.8}),o*.28,a+.85,l*.15),v(i,new L(1.5,.1,.85),g,n>0?-o/2-.55:o/2+.55,.35,.2);for(let y=0;y<3;y++)v(i,new L(.85,.12,.55),A("#78909C",{roughness:.85}),n>0?-o/2-.65:o/2+.65,.06+y*.12,.15-y*.05)}else if(r==="desert")v(i,new L(o+.15,.12,l+.15),m,0,a+.06,0),v(i,new L(o*.35,.55,.35),A("#FFCC80",{roughness:.9}),0,a+.35,0),e()>.5&&v(i,new ot(.08,.12,.6,6),A("#8D6E63"),o*.35,a+.65,l*.2);else if(r==="jungle"){v(i,new L(o+.25,.35,l+.25),A("#5D4037",{roughness:.9}),0,a+.5,0),v(i,new L(o+.4,.22,l+.4),m,0,a+.85,0);for(let M=0;M<4;M++){const x=M/4*Math.PI*2;v(i,new ot(.06,.08,1.2,6),A("#6D4C41",{roughness:.95}),Math.cos(x)*(o*.35),.6,Math.sin(x)*(l*.35))}v(i,new L(.12,a*.7,.08),A("#2E7D32",{emissive:"#1B5E20",emissiveIntensity:.15}),n>0?-o/2-.12:o/2+.12,a*.45,0)}else if(r==="downtown"){v(i,new L(o+.2,.35,l+.2),A("#37474F"),0,a+.18,0),v(i,new L(1.2,.55,1),A("#546E7A",{metalness:.35}),o*.25,a+.55,0);for(let M=1;M<4;M++)v(i,new L(o+.06,.08,l+.06),g,0,M*(a/4),0)}else if(r==="industrial"){v(i,new L(o+.15,.28,l+.15),A("#263238"),0,a+.14,0);for(let M=0;M<5;M++)v(i,new L(o+.02,.04,.08),A("#37474F"),0,1.2+M*1.4,l/2+.05)}else v(i,new L(o+.1,.2,l+.1),m,0,a+.1,0),v(i,new L(o*.7,.12,.08),A("#E040FB",{emissive:"#E040FB",emissiveIntensity:1.1}),0,a*.55,l/2+.06);const p=n>0?-o/2-.05:o/2+.05;if(v(i,new L(.1,1.75,1.05),A("#3E2723"),p,.88,.1),v(i,new L(.08,1.65,.95),A("#5D4037",{roughness:.9}),p+(n>0?-.03:.03),.88,.12),v(i,new wt(.06,8,8),A("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.5}),p+(n>0?-.02:.02),.95,.62),this.addFacadeWindows(i,n,o,a,l,t,e),!U){const M=Math.max(1,Math.floor(l/1.8));for(let x=0;x<M;x++){const y=-l/2+.8+x*(l/M),C=n>0?o/2+.03:-o/2-.03;for(const T of[1.8,3.2,4.8])T>a-.8||this.addWindow(i,C,T,y,.5,.68,e()>.4,t)}}if(r==="suburban"&&e()>.4){const M=n>0?-o/2-1.1:o/2+1.1;v(i,new L(1.6,.9,.12),A("#A5D6A7",{roughness:.9}),M,.45,l*.2),v(i,new L(1.6,.9,.12),A("#A5D6A7",{roughness:.9}),M,.45,-l*.2)}if(t.id<=2&&e()>.55){const M=n>0?-o/2-.8:o/2+.8;v(i,new L(.08,.65,1.8),A("#8D6E63"),M,.33,0),v(i,new L(.06,.55,1.6),A("#A5D6A7",{roughness:.95}),M+(n>0?-.12:.12),.55,0)}return i.rotation.y=0,i}makeTree(t){const e=new Pt,n=1.4+t()*.5,i=Rg();i.repeat.set(1,n/2);const r=new ye({map:i,color:"#5D4037",roughness:.95});v(e,new ot(.16,.28,n,8),r,0,n/2,0),v(e,new wt(.16,8,8),A("#4E342E"),0,n+.15,0);for(let l=0;l<3;l++){const c=l/3*Math.PI*2;v(e,new L(.12,.08,.35),A("#4E342E"),Math.cos(c)*.2,.08,Math.sin(c)*.2)}const a=Pg(),o=["#43A047","#66BB6A","#2E7D32","#81C784"];for(let l=0;l<4;l++)v(e,new sn(1.4-l*.2,2-l*.22,8),new ye({map:a,color:o[l%o.length],emissive:"#1B5E20",emissiveIntensity:.08,roughness:.95}),(t()-.5)*.15,n+.85+l*1.1,(t()-.5)*.15).scale.set(1.08-l*.07,1,1.08-l*.07);if(!U){for(let l=0;l<2;l++)v(e,new wt(.55+l*.15,8,8),new ye({map:a,color:"#388E3C",transparent:!0,opacity:.35,roughness:1}),(l-.5)*.4,.35,(t()-.5)*.5);v(e,new wt(.07,6,6),A("#FF5252",{emissive:"#D50000",emissiveIntensity:.3}),.35,n+1.1,.25)}return e}makeCactus(t){const e=new Pt,n=A("#558B2F",{roughness:.92}),i=A("#33691E",{roughness:.95}),r=1.6+t()*1.4;v(e,new ot(.22,.28,r,8),n,0,r/2,0);const a=r*(.45+t()*.2),o=r*(.45+t()*.15),l=t()>.5?1:-1;if(v(e,new ot(.14,.18,a*.55,6),n,l*.28,o,0),v(e,new ot(.12,.14,a,6),n,l*.42,o+a*.35,0),t()>.4){const c=-l;v(e,new ot(.12,.16,a*.5,6),i,c*.24,r*.35,0),v(e,new ot(.1,.12,a*.75,6),i,c*.36,r*.35+a*.3,0)}return e}makePalmTree(t){const e=new Pt,n=2.8+t()*1.8,i=A("#6D4C41",{roughness:.95});v(e,new ot(.18,.32,n,8),i,0,n/2,0);for(let o=0;o<4;o++){const l=.4+o*(n/4);v(e,new Ye(.22,.04,6,10),A("#5D4037"),0,l,0)}const r=new ye({color:"#2E7D32",emissive:"#1B5E20",emissiveIntensity:.12,roughness:.9,side:he}),a=U?5:7;for(let o=0;o<a;o++){const l=o/a*Math.PI*2+t()*.2,c=v(e,new L(.08,.04,2.2+t()*.6),r,0,n+.15,0);c.rotation.y=l,c.rotation.x=-.55-t()*.15,c.position.x=Math.cos(l)*.15,c.position.z=Math.sin(l)*.15}return!U&&t()>.6&&v(e,new wt(.12,6,6),A("#FF7043",{emissive:"#E64A19",emissiveIntensity:.25}),.2,n*.6,.15),e}makeDesertRock(t){const e=new Pt,n=A("#A1887F",{roughness:.98}),i=.8+t()*1.2,r=.5+t()*.9,a=v(e,new L(i,r,i*(.7+t()*.4)),n,0,r/2,0);if(a.rotation.y=t()*Math.PI,a.rotation.z=(t()-.5)*.25,!U&&t()>.5){const o=i*.55,l=r*.45;v(e,new L(o,l,o),A("#8D6E63",{roughness:.98}),i*.35,l/2,i*.2)}return e}makeStreetLamp(t){const e=new Pt;e.userData.flicker=!0;const n="#FFCC80",i=A("#546E7A",{metalness:.72,roughness:.38}),r=A("#455A64",{metalness:.65,roughness:.42});v(e,new ot(.16,.18,.07,10),i,0,.035,0),v(e,new ot(.06,.09,.1,8),i,0,.12,0),v(e,new ot(.05,.075,4.15,10),i,0,2.14,0);const a=new Pt;a.position.set(0,4.18,0),e.add(a),v(a,new L(.95,.065,.065),i,-.47,0,0),v(a,new L(.06,.32,.06),i,-.92,-.12,0);const o=-.92;v(a,new ot(.2,.17,.1,10),r,o,-.28,0),v(a,new ot(.17,.2,.06,10,1,!0),A("#FFF8E1",{emissive:n,emissiveIntensity:.85,transparent:!0,opacity:.92,roughness:.2,metalness:.05}),o,-.36,0);const l=v(a,new wt(.07,8,8),A("#FFFDE7",{emissive:"#FFE0B2",emissiveIntensity:1.1}),o,-.38,0);l.userData.isBulb=!0,e.userData.flickerBulb=l;const c=U?3.2:4.2,h=v(e,new ie(c,c*1.55),new Dt({map:this.getLightPoolTexture(),transparent:!0,opacity:.42,blending:Yt,depthWrite:!1,color:n}),-2.4,.028,0,!1);return h.rotation.x=-Math.PI/2,e.userData.lightPool=h,e}makeMailbox(){const t=new Pt;v(t,new ot(.05,.06,.7,8),A("#78909C",{metalness:.7}),0,.35,0),v(t,new L(.55,.75,.42),A("#1565C0",{roughness:.55}),0,.82,0),v(t,new L(.58,.1,.44),A("#0D47A1"),0,1.22,0),v(t,new L(.12,.18,.06),A("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.45}),.2,1.05,.24);const e=v(t,new L(.22,.14,.03),A("#E53935",{emissive:"#FF1744",emissiveIntensity:.35}),.28,1.18,.18);return e.rotation.z=-.55,t}makeAlienCrash(){const t=new Pt;v(t,new ot(.9,1.1,.15,12),A("#607D8B",{metalness:.7,emissive:"#00E676",emissiveIntensity:.3}),0,.08,0),v(t,new wt(.55,10,8,0,Math.PI*2,0,Math.PI/2),A("#80DEEA",{transparent:!0,opacity:.6}),0,.15,0);const e=v(t,new Re(1.1,16),A("#76FF03",{emissive:"#33691E",emissiveIntensity:.5,transparent:!0,opacity:.65}),0,.02,0,!1);e.rotation.x=-Math.PI/2;for(let n=0;n<4;n++){const i=n/4*Math.PI*2;v(t,new L(.25,.08,.25),A("#CFD8DC",{metalness:.5}),Math.cos(i)*.9,.04,Math.sin(i)*.9)}return t}addMilestoneArch(t,e,n){const i=new Pt;i.position.set(0,0,t);for(const c of[-4.5,4.5])v(i,new ot(.2,.22,5,10),A("#ECEFF1"),c,2.5,0);v(i,new L(10,.35,.35),A(e,{emissive:e,emissiveIntensity:.35}),0,4.8,0);const r=document.createElement("canvas");r.width=256,r.height=64;const a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,256,64),a.fillStyle="#000",a.font="bold 28px Segoe UI",a.textAlign="center",a.fillText(n,128,42);const o=new ke(r),l=new se(new ie(3.5,.9),new Dt({map:o}));l.position.set(0,5.5,0),i.add(l),this.scene.add(i),this.rootMeshes.push(i)}setupLighting(t,e){this.hemiLight=new Pd(t.sky,t.ground,t.ambient*.95),this.hemiLight.name="hemi",this.scene.add(this.hemiLight),this.ambientLight=new uh(16777215,t.ambient*.38),this.ambientLight.name="ambient",this.scene.add(this.ambientLight),this.sunLight=new ys(16774376,t.sun),this.sunLight.position.set(20,45,-25),this.sunLight.castShadow=!1,this.sunLight.name="sun",this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.fillLight=new ys(t.skyBottom||t.sky,t.ambient*.22),this.fillLight.position.set(-18,22,12),this.fillLight.name="fill",this.scene.add(this.fillLight),this.rimLight=new ys("#FFE082",.22),this.rimLight.position.set(0,14,-28),this.rimLight.name="rim",this.scene.add(this.rimLight),t.id>=5&&(this.accentLight=new xs(t.id>=6?"#7C4DFF":"#FF7043",.35,70,1.6),this.accentLight.position.set(0,10,30),this.accentLight.name="accent",this.scene.add(this.accentLight)),this.roadNightLight=new xs("#FFE082",0,U?24:30,2),this.roadNightLight.name="roadNight",this.scene.add(this.roadNightLight),this.roadFillLight=new xs("#FFF8F0",U?.48:.4,U?32:40,1.6),this.roadFillLight.name="roadFill",this.scene.add(this.roadFillLight)}setPlayerZ(t,e){if(this.playerZ=t,this.cullTimer+=e,this.cullTimer<(U?.12:.08))return;this.cullTimer=0;const n=t-bg,i=t+Mg;for(const r of this.rootMeshes){if(r.userData.isTerrain)continue;const a=r.position.z;r.visible=a>=n&&a<=i}}followSun(t,e){this.sunLight&&(this.sunLight.position.set(t+18,42,e-22),this.sunLight.target.position.set(t*.3,0,e+35),this.sunLight.target.updateMatrixWorld(),this.fillLight&&this.fillLight.position.set(t-16,24,e+8),this.rimLight&&this.rimLight.position.set(t*.5,16,e-26),this.accentLight&&this.accentLight.position.set(t,11,e+28),this.roadNightLight&&this.roadNightLight.position.set(t,5.5,e+3),this.roadFillLight&&this.roadFillLight.position.set(t*.15,U?7.5:8.5,e+12))}playSpectacle(t,e){var n;(n=this.skyEffects)==null||n.playSpectacle(t,e)}update(t,e=this.playerZ,n=.016,i){var _,m;i&&(this.roadFx=i),this.playerZ=e,this.wetFactor=this.rainWetForDistrict(this.skyTheme,this.skyNight),this.updateSkyCycle(t,n),(_=this.skyEffects)==null||_.update(t,n,e);const r=t*.12,a=this.roadFx.baseSpeed>0?this.roadFx.speed/this.roadFx.baseSpeed:1,o=this.roadFx.turbo,l=r*(o?2.4+a*.35:1);this.roadTexture&&(this.roadTexture.offset.y=-r),this.roadEmissiveTex&&(this.roadEmissiveTex.offset.y=-r),this.roadGlowTex&&(this.roadGlowTex.offset.y=-r),this.roadStreakTex&&(this.roadStreakTex.offset.y=-l),this.roadRainTex&&(this.roadRainTex.offset.y=-t*.85);const c=this.skyNight,h=this.skyNightFx;let u=Vl(c);U&&(u*=.72);const d=1+this.wetFactor*(this.wetFactor>.45?1:.65);if(this.roadMesh){const p=this.roadMesh.material,x=(U?.12:.1)+(1-u)*(U?.14:.12)+h*(U?.32:.55),y=1+Math.sin(t*2.4)*.04*h;p.emissiveIntensity=x*y*(o?1.12:1),p.roughness=.82-u*.1-this.wetFactor*.12,p.metalness=.06+h*.14+this.wetFactor*.14;const C=U?"#d8dee4":"#c8cdd2",T=U?"#b8c2cc":"#9aa8b8";p.color.set(C).lerp(new bt(T),u*(U?.18:.25))}if(this.roadGlowMesh){const p=this.roadGlowMesh.material,M=(U?.16:.24)+h*(U?.42:.58),x=this.roadFx.combatIntensity??0,y=this.roadFx.shootPulse??0,C=1+Math.sin(t*3.1+.5)*.06*h;p.opacity=h>.04?M*C*d*(o?1.15:1)*(1+x*.35+y*.5):0,this.roadGlowMesh.visible=h>.04,o?p.color.set(this.roadAccent.secondary):y>.2?p.color.set(this.roadAccent.primary).lerp(new bt("#00E5FF"),y):x>.3&&p.color.set(this.roadAccent.secondary)}if(this.roadStreakMesh){const p=this.roadStreakMesh.material,M=o?.12+(a-1)*.08:0;p.opacity+=(M-p.opacity)*Math.min(1,n*10),p.visible=p.opacity>.01,o&&p.color.set(this.roadAccent.secondary)}if(this.roadRainMesh){const p=this.roadRainMesh.material;p.opacity=this.wetFactor*(U?.16:.24),p.visible=this.wetFactor>.18}const f=U?42:58;for(const p of this.boostPads){const M=Math.abs(p.z-e)<f;p.group.visible=M,M&&(Math.abs(e-p.z)<1.4&&Math.abs(this.roadFx.playerX)<1.6&&(p.flash=1),p.flash=Math.max(0,p.flash-n*2.8),p.group.traverse(x=>{if(!(x instanceof se))return;const y=x.material,C=x.userData.isPadArrow?.28:.2,T=x.userData.isPadArrow?.95:.75;y.opacity=C+p.flash*(T-C)}),p.flash>.85?p.group.scale.setScalar(1+p.flash*.06):p.group.scale.setScalar(1))}if(!U&&((m=this.rootMeshes[0])!=null&&m.userData.isTerrain)){const M=this.rootMeshes[0].material;M.map&&(M.map.offset.y=-e*.02)}const g=U?38:55;for(const p of this.animProps)if(!(Math.abs(p.worldZ-e)>g))switch(p.kind){case"bob":p.obj.position.y=p.baseY+Math.sin(t*p.speed+p.phase)*.06;break;case"spin":p.obj.rotation.y=t*p.speed;break;case"cloud":p.obj.position.x+=Math.sin(t*.1+p.phase)*.008,p.obj.position.y=p.baseY+Math.sin(t*p.speed+p.phase)*.4;break;case"flicker":{const M=.72+Math.sin(t*p.speed+p.phase)*.08+Math.sin(t*p.speed*3.1+p.phase)*.04;if(p.bulb){const x=p.bulb.material;x.emissiveIntensity=M*(.35+this.skyNight*.95)}if(p.lightPool){const x=p.lightPool.material;x.opacity=this.skyNight*(.42+Math.sin(t*p.speed*.6+p.phase)*.04),p.lightPool.visible=this.skyNight>.1}break}}}clear(){var t;(t=this.skyEffects)==null||t.dispose(),this.skyEffects=null;for(const e of this.rootMeshes)this.scene.remove(e),Xe(e);this.rootMeshes=[],this.animProps=[],this.boostPads=[],this.roadTexture&&this.roadTexture.dispose(),this.roadEmissiveTex&&(this.roadEmissiveTex.dispose(),this.roadEmissiveTex=null),this.roadGlowTex&&(this.roadGlowTex.dispose(),this.roadGlowTex=null),this.roadStreakTex&&(this.roadStreakTex.dispose(),this.roadStreakTex=null),this.roadRainTex&&(this.roadRainTex.dispose(),this.roadRainTex=null),this.lightPoolTexture&&(this.lightPoolTexture.dispose(),this.lightPoolTexture=null),this.roadMesh=null,this.roadGlowMesh=null,this.roadStreakMesh=null,this.roadRainMesh=null,this.skyTexture&&(this.skyTexture.dispose(),this.skyTexture=null),this.skyCanvas=null,this.skyPhase=-1;for(const e of["hemi","ambient","sun","fill","rim","accent","roadNight","neon"]){const n=this.scene.getObjectByName(e);n&&this.scene.remove(n)}this.accentLight=null,this.roadNightLight=null,this.roadFillLight=null}}function Lg(s){let t=s;return()=>(t=(t*16807+0)%2147483647,(t-1)/2147483646)}const _h={core:"#FF9800",mid:"#FFB74D",glow:"#FFD54F",particle:"#FFF8E1",shell:"#FF6F00",ribbon:"#FFC107"},Ig={core:"#FFFDE7",mid:"#FFF9C4",glow:"#FFD54F",particle:"#FFFFFF",shell:"#FFEB3B",ribbon:"#00E5FF"},$l=U?8:12,Ug=U?4:6;function Un(s,t,e=1){return A(s,{emissive:s,emissiveIntensity:t,transparent:e<1,opacity:e,roughness:.18,metalness:.06})}function Zl(s,t){return new Dt({color:s,transparent:!0,opacity:t,depthWrite:!1,blending:Yt})}function Ng(s){return s>=7?{core:"#FF5252",mid:"#FF1744",glow:"#FF8A80",particle:"#FFCDD2",shell:"#D50000",ribbon:"#FFD54F"}:s>=6?{core:"#E1BEE7",mid:"#AB47BC",glow:"#EA80FC",particle:"#F3E5F5",shell:"#7B1FA2",ribbon:"#FFD54F"}:s===5?{core:"#448AFF",mid:"#2979FF",glow:"#82B1FF",particle:"#E3F2FD",shell:"#1565C0",ribbon:"#FFD54F"}:s===4?{core:"#66BB6A",mid:"#43A047",glow:"#A5D6A7",particle:"#E8F5E9",shell:"#2E7D32",ribbon:"#FFD54F"}:s===3?{core:"#FFB74D",mid:"#FF9800",glow:"#FFE082",particle:"#FFF8E1",shell:"#F57C00",ribbon:"#00E5FF"}:_h}function Bg(s,t,e,n){const i=new Pt;i.userData.orbit=e;for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=v(i,new wt(.035+r%2*.012,5,5),Un(t,1.2,.9),Math.cos(a)*e,Math.sin(r*1.5)*.06,Math.sin(a)*e,!1);o.userData.angle=a,o.userData.orbit=e,o.userData.wobble=r*1.1}return s.add(i),i}function kg(s,t,e,n){const i=new Pt;i.position.y=n,v(i,new L(.34*t,.05*t,.36*t),Un(e.ribbon,.85),0,0,0,!1),v(i,new L(.05*t,.28*t,.36*t),Un(e.ribbon,.85),0,.02*t,0,!1);for(const r of[-1,1])v(i,new wt(.07*t,6,6),Un(e.ribbon,1),r*.08*t,.16*t,.06*t,!1);return v(i,new L(.14*t,.04*t,.02*t),A("#FFFDE7",{emissive:"#FFFFFF",emissiveIntensity:.35}),0,.14*t,.2*t),s.add(i),i}function zg(s,t){v(s,new L(.38*t,.05*t,.02*t),A("#FFEB3B",{emissive:"#FFC107",emissiveIntensity:.45}),0,-.02*t,.2*t);for(let e=0;e<3;e++)v(s,new L(.08*t,.055*t,.025*t),A(e%2===0?"#212121":"#FFEB3B"),-.1*t+e*.1*t,-.02*t,.22*t)}function wr(s,t=_h){const e=s==="pickup"?1:s==="carried"?.36:s==="throw"?.58:.48,n=new Pt;n.userData.packageOrb=!0,n.userData.theme={...t};const i=s==="pickup"?.55:s==="carried"?0:.35,r=new Pt;r.position.y=i,n.add(r);let a;s==="pickup"&&(a=v(n,new qe(.38*e,.62*e,U?12:18),Zl(t.glow,.38),0,.04,0,!1),a.rotation.x=-Math.PI/2,n.userData.groundRing=a);const o=v(r,new wt(.48*e,$l,$l),Zl(t.glow,.18),0,0,0,!1);n.userData.outerGlow=o;const l=v(r,new L(.42*e,.38*e,.42*e),Un(t.shell,.5,.38),0,0,0,!1);n.userData.midShell=l;const c=s==="mail"?v(r,new L(.28*e,.18*e,.06*e),Un(t.core,1.1),0,0,.04*e,!1):v(r,new L(.32*e,.3*e,.32*e),Un(t.core,1.25),0,0,0,!1);n.userData.core=c,v(r,new wt(.1*e,6,6),Un("#FFFFFF",1.2,.82),.08*e,.1*e,.14*e,!1),s!=="mail"?(kg(r,e,t,.18*e),s!=="carried"&&zg(c,e)):v(r,new L(.06*e,.12*e,.02*e),Un(t.ribbon,1),0,.02*e,.08*e,!1);const h=s==="carried"?.28*e:.42*e;return n.userData.particles=Bg(r,t.particle,h,s==="carried"?3:Ug),{group:n,core:c,outerGlow:o,midShell:l,groundRing:a}}function Og(s,t,e){const n=Ng(t);s.userData.theme=n,s.traverse(i=>{if(!(i instanceof se))return;const r=s.userData;i===r.core&&i.material instanceof ye&&(i.material.color.set(n.core),i.material.emissive.set(n.core),i.material.emissiveIntensity=.9+e*.4),i===r.outerGlow&&i.material instanceof Dt&&i.material.color.set(n.glow),i===r.midShell&&i.material instanceof ye&&(i.material.color.set(n.shell),i.material.emissive.set(n.shell)),i===r.groundRing&&i.material instanceof Dt&&i.material.color.set(n.glow)})}function xh(s,t,e=0,n=!0){if(n){const h=Math.sin(t*3+e)*.12;s.position.y=h}s.rotation.y=t*1.4+e;const i=s.userData.core,r=s.userData.outerGlow,a=s.userData.midShell,o=s.userData.groundRing,l=s.userData.particles,c=1+Math.sin(t*4.2+e)*.06;i&&i.scale.setScalar(c),r&&(r.scale.setScalar(1+Math.sin(t*3+e)*.08),r.material.opacity=.14+Math.sin(t*5+e)*.05),a&&(a.rotation.y=-t*2.2),o&&o.scale.setScalar(1+Math.sin(t*4+e)*.08),l&&(l.rotation.y=t*1.6,l.children.forEach((h,u)=>{if(!(h instanceof se))return;const d=h.userData.angle+t*(1.1+u%3*.12),f=h.userData.orbit;h.position.x=Math.cos(d)*f,h.position.z=Math.sin(d)*f,h.position.y=Math.sin(t*4+h.userData.wobble)*.08}))}function Hg(s,t){const e=s.userData.core,n=s.userData.outerGlow,i=1+Math.sin(t*4)*.04;e&&e.scale.setScalar(i),n&&(n.scale.setScalar(i),n.material.opacity=.12+Math.sin(t*5)*.05);const r=s.userData.particles;r&&(r.rotation.y=t*1.2)}function yh(s){Xe(s)}function jl(s,t,e){const n=new Pt;return n.position.set(s,.48,.02),v(n,new bn(.085,.22,5,8),t,0,-.12,0),v(n,new bn(.075,.18,5,8),t,0,-.38,0),v(n,new L(.15,.09,.26),e,0,-.54,.05),v(n,new L(.12,.04,.06),A("#37474F",{roughness:.85}),0,-.54,.16),n}function Jl(s,t,e,n){const i=new Pt;i.position.set(s*.34,1.1,0),v(i,new bn(.065,.2,5,8),t,0,-.08,0),v(i,new bn(.055,.18,5,8),e,0,-.3,0),v(i,new wt(.065,8,8),n,0,-.46,0);for(const r of[-.035,0,.035])v(i,new bn(.014,.045,3,4),n,r,-.52,.02);return i}function Gg(s,t){const e=new Pt;e.position.set(0,1,-.1);const n=A(t.packMain,{roughness:.88}),i=A(t.packDark,{roughness:.92}),r=A("#263238",{roughness:.8}),a=A("#90A4AE",{metalness:.72,roughness:.35}),o=A(t.packTrim,{emissive:t.packTrim,emissiveIntensity:.18});v(e,new L(.4,.44,.13),i,0,.06,-.04),v(e,new L(.38,.14,.12),n,0,.3,-.03),v(e,new L(.42,.05,.14),i,0,.36,-.04);for(const c of[-.13,.13])v(e,new L(.055,.34,.035),r,c,.26,.04),v(e,new L(.045,.2,.03),r,c*.85,.46,.06),v(e,new L(.07,.035,.025),a,c,.2,.06);v(e,new L(.44,.05,.03),r,0,-.08,.02),v(e,new L(.08,.06,.025),a,0,-.08,.04);for(const c of[-1,1])v(e,new L(.09,.16,.09),n,c*.22,.02,.01),v(e,new L(.1,.03,.01),o,c*.22,.1,.06);v(e,new L(.41,.035,.01),o,0,.14,.07);const l=wr("carried");return l.group.position.set(0,.46,.04),l.group.rotation.y=.35,e.add(l.group),v(e,new ot(.01,.01,.12,6),A("#455A64",{metalness:.65}),.15,.42,.03),v(e,new wt(.022,8,8),A("#00E676",{emissive:"#00E676",emissiveIntensity:.75}),.15,.49,.03),s.add(e),{pack:e,vipPouch:l.core,vipGlow:l.outerGlow,packageOrb:l.group}}function Vg(){const s=new Pt,t=A("#607D8B",{metalness:.78,roughness:.28}),e=A("#37474F",{metalness:.82,roughness:.22}),n=A("#FF9800",{emissive:"#FF9800",emissiveIntensity:.3});v(s,new L(.07,.15,.08),e,0,-.07,.01),v(s,new L(.05,.04,.05),A("#263238",{roughness:.9}),.04,-.1,.02),v(s,new L(.12,.12,.28),t,0,.02,.1),v(s,new L(.1,.035,.2),A("#FFF8E1",{roughness:.7}),0,.09,.08),v(s,new L(.08,.006,.16),n,0,.115,.08);for(const r of[-.035,.035])v(s,new L(.012,.05,.14),e,r,.02,.1);v(s,new ot(.038,.044,.2,8),e,0,.02,.32),v(s,new ot(.032,.038,.08,8),t,0,.02,.44);const i=v(s,new Ye(.048,.01,6,12),A("#00E5FF",{emissive:"#00E5FF",emissiveIntensity:.65}),0,.02,.5);return i.userData.isMailMuzzle=!0,v(s,new L(.018,.03,.05),A("#00E676",{emissive:"#00E676",emissiveIntensity:.7}),0,.1,.22),v(s,new L(.04,.025,.06),A("#455A64",{metalness:.6}),0,.1,.14),s.rotation.set(-.2,-.15,.05),{gun:s,muzzle:i}}function Mh(s){const t=new Pt,e=new Pt,n=A(s.skin),i=A(s.jacket,{roughness:.4,metalness:.08}),r=A(s.jacketLight,{roughness:.35}),a=A(s.jacketTrim,{emissive:s.jacketTrim,emissiveIntensity:.2}),o=A(s.hat,{roughness:.45,metalness:.1}),l=A(s.hatBrim,{roughness:.5}),c=A("#263238",{roughness:.85}),h=A("#1A1A1A",{roughness:.9,metalness:.15}),u=A("#80DEEA",{emissive:"#00BCD4",emissiveIntensity:.55,metalness:.65,transparent:!0,opacity:.88}),d=new Pt;v(d,new L(.82,.09,1.15),A("#37474F",{metalness:.45,roughness:.55}),0,.06,.04),v(d,new L(.7,.035,1),A("#546E7A",{metalness:.35,roughness:.65}),0,.11,.04),v(d,new L(.55,.02,.85),A("#263238",{roughness:.9}),0,.13,.04);for(const P of[-.3,.3])v(d,new ot(.1,.1,.035,12),A("#78909C",{metalness:.65,roughness:.4}),P,.05,-.38),v(d,new Ye(.11,.014,8,16),A("#455A64",{metalness:.5}),P,.05,-.38,!1);t.add(d),v(e,new bn(.22,.18,6,10),c,0,.58,0),v(e,new bn(.26,.42,8,12),i,0,.98,0),v(e,new L(.5,.1,.28),r,0,1.18,.02),v(e,new L(.52,.08,.3),a,0,1.26,.01),v(e,new L(.14,.28,.06),a,0,1,.17);for(const P of[-1,1])v(e,new wt(.11,10,8),r,P*.32,1.22,0);v(e,new wt(.24,14,12),n,0,1.48,.02),v(e,new wt(.27,14,12,0,Math.PI*2,0,Math.PI*.55),o,0,1.52,0),v(e,new L(.44,.12,.14),l,0,1.62,.06),v(e,new L(.38,.09,.05),u,0,1.52,.22);const f=jl(-.13,c,h),g=jl(.13,c,h);e.add(f,g);const _=Jl(-1,i,r,n),m=Jl(1,i,r,n);e.add(_,m);const{pack:p,vipPouch:M,vipGlow:x,packageOrb:y}=Gg(e,s),{gun:C,muzzle:T}=Vg();return C.position.set(.08,-.4,.1),m.add(C),e.position.y=.28,t.add(e),{mesh:t,body:e,leftLeg:f,rightLeg:g,leftArm:_,rightArm:m,packageMesh:M,packageGlow:x,packageOrb:y,hoverboard:d,backpack:p,mailGun:C,mailGunMuzzle:T}}class Wg{constructor(t,e){F(this,"mesh");F(this,"x",0);F(this,"z",0);F(this,"targetX",0);F(this,"hurtFlash",0);F(this,"runPhase",0);F(this,"jumpY",0);F(this,"ghostMode",!1);F(this,"jumpVel",0);F(this,"jumpPower",12);F(this,"isJumping",!1);F(this,"isSliding",!1);F(this,"slideTimer",0);F(this,"baseBodyY",.28);F(this,"shadow");F(this,"speedTrails",[]);F(this,"trailPhase",0);F(this,"nightLevel",0);F(this,"footLight");F(this,"playerLight");F(this,"headLight");F(this,"mailGunMuzzle");F(this,"visorMesh",null);F(this,"body");F(this,"leftLeg");F(this,"rightLeg");F(this,"leftArm");F(this,"rightArm");F(this,"packageOrb");F(this,"hoverboard");F(this,"backpack");F(this,"characterName");this.characterName=e.name;const n=Mh(e);this.mesh=n.mesh,this.body=n.body,this.leftLeg=n.leftLeg,this.rightLeg=n.rightLeg,this.leftArm=n.leftArm,this.rightArm=n.rightArm,this.packageOrb=n.packageOrb,this.hoverboard=n.hoverboard,this.backpack=n.backpack,this.mailGunMuzzle=n.mailGunMuzzle,this.mailGunMuzzle.userData.baseEmissiveIntensity=this.mailGunMuzzle.material.emissiveIntensity,this.body.traverse(r=>{r instanceof se&&r.material instanceof ye&&(r.material.emissive&&r.material.emissive.getHex()>0&&r!==this.mailGunMuzzle&&(r.userData.baseEmissiveIntensity=r.material.emissiveIntensity),r.material.transparent&&r.material.opacity<1&&r.position.y>1.45&&(this.visorMesh=r))}),this.shadow=v(t,new Re(.42,12),new Dt({color:"#000000",transparent:!0,opacity:.28,depthWrite:!1}),0,.03,0,!1),this.shadow.rotation.x=-Math.PI/2;const i=new Dt({color:"#80DEEA",transparent:!0,opacity:0,blending:Yt,depthWrite:!1,side:he});for(let r=0;r<(U?3:4);r++){const a=v(t,new ie(.35,.06),i.clone(),0,.12,0,!1);a.rotation.x=-Math.PI/2,a.visible=!1,this.speedTrails.push(a)}this.footLight=v(t,new Re(.22,10),new Dt({color:"#B0BEC5",transparent:!0,opacity:0,blending:Yt,depthWrite:!1}),0,.035,0,!1),this.footLight.rotation.x=-Math.PI/2,this.playerLight=new xs("#FFF8E1",0,9,1.35),this.playerLight.position.set(0,1.15,.35),this.mesh.add(this.playerLight),this.headLight=new xs("#E1F5FE",0,16,1.15),this.headLight.position.set(0,1.6,2.8),this.mesh.add(this.headLight),t.add(this.mesh)}update(t,e,n,i=12,r=0){this.x+=(this.targetX-this.x)*Math.min(1,9*t),this.x=Gi.clamp(this.x,-e,e),this.targetX=Gi.clamp(this.targetX,-e,e),this.slideTimer>0&&(this.slideTimer-=t,this.slideTimer<=0&&(this.slideTimer=0,this.isSliding=!1)),this.isJumping&&(this.jumpVel-=34*t,this.jumpY+=this.jumpVel*t,this.jumpY<=0&&(this.jumpY=0,this.jumpVel=0,this.isJumping=!1)),this.mesh.position.set(this.x,this.jumpY,this.z),this.shadow.position.set(this.x,.03,this.z);const o=1-Math.min(.45,this.jumpY*.12);this.shadow.scale.set(o,o,1),this.shadow.material.opacity=.18+o*.14,this.nightLevel=r,this.updateNightGear(n);const l=n&&i>13&&!this.isJumping;l&&(this.trailPhase+=t*(i*.8));for(let c=0;c<this.speedTrails.length;c++){const h=this.speedTrails[c];if(!l){h.visible=!1;continue}h.visible=!0;const u=c/this.speedTrails.length;h.position.set(this.x+Math.sin(this.trailPhase+c)*.08,.08+u*.04,this.z+.45+c*.22),h.rotation.z=this.x*.04;const d=h.material;d.opacity=(.35-u*.28)*Math.min(1,(i-12)/8),h.scale.set(.8+(1-u)*.6,1,1)}if(this.isSliding)this.body.position.y=.08,this.body.rotation.x=.55,this.leftLeg.rotation.x=1.1,this.rightLeg.rotation.x=1.25,this.leftArm.rotation.x=.35,this.rightArm.rotation.x=.35,this.hoverboard.rotation.x=.15,this.hoverboard.position.y=.02,this.backpack.rotation.x=.25;else if(n){this.runPhase+=t*13;const c=Math.sin(this.runPhase)*.48;this.leftLeg.rotation.x=c,this.rightLeg.rotation.x=-c,this.leftArm.rotation.x=-c*.5,this.rightArm.rotation.x=c*.5,this.body.rotation.x=0,this.body.position.y=this.baseBodyY+Math.abs(Math.sin(this.runPhase*2))*.045,this.hoverboard.rotation.x=0,this.hoverboard.position.y=0,this.isJumping&&(this.leftLeg.rotation.x=-.65,this.rightLeg.rotation.x=-.35,this.body.position.y=this.baseBodyY+.15,this.body.rotation.x=-.08),this.hoverboard.rotation.z=this.x*.032,this.backpack.rotation.x=Math.sin(this.runPhase)*.04,this.backpack.rotation.z=Math.sin(this.runPhase*.5)*.03}else this.body.rotation.x=0,this.body.position.y=this.baseBodyY;if(Hg(this.packageOrb,Date.now()*.001),this.hurtFlash>0){this.hurtFlash-=t;const c=this.hurtFlash>0;this.body.traverse(h=>{h instanceof se&&h.material instanceof ye&&(h.material.emissive.set(c?"#FF1744":"#000000"),h.material.emissiveIntensity=c?.55:0)})}}updateNightGear(t){var a;const e=this.nightLevel;this.playerLight.intensity=e*(U?3.2:4.4),this.playerLight.color.set(e>.5?"#E1F5FE":"#FFF8E1"),this.headLight.intensity=e*(U?2.4:3.6),this.headLight.color.set("#B3E5FC");const n=this.footLight.material;n.opacity=e*.22,this.footLight.position.set(this.x,.035,this.z),this.footLight.visible=e>.04;const i=this.mailGunMuzzle.material,r=this.mailGunMuzzle.userData.baseEmissiveIntensity??.65;if(i.emissiveIntensity=r+e*.55+(t?.14:0),((a=this.visorMesh)==null?void 0:a.material)instanceof ye){const o=this.visorMesh.material,l=this.visorMesh.userData.baseEmissiveIntensity??.55;o.emissiveIntensity=l+e*.45}this.body.traverse(o=>{if(!(o instanceof se)||!(o.material instanceof ye)||o===this.mailGunMuzzle||o===this.visorMesh)return;const l=o.userData.baseEmissiveIntensity;if(l!==void 0){o.material.emissiveIntensity=l+e*.35;return}e>.08&&!o.material.transparent&&(o.material.emissive.set("#FFF3E0"),o.material.emissiveIntensity=e*.18)})}knockback(t,e=1.2){this.targetX+=this.x>=t?e:-e}jump(){return this.isJumping||this.isSliding?!1:(this.isJumping=!0,this.jumpVel=this.jumpPower,!0)}slide(){return this.isJumping||this.isSliding?!1:(this.isSliding=!0,this.slideTimer=.82,!0)}setJumpPower(t){this.jumpPower=t}flashHurt(){this.hurtFlash=.45}setGhostMode(t){this.ghostMode=t;const e=t?.22:1;this.mesh.traverse(n=>{if(n instanceof se&&n!==this.shadow){const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i)r.transparent=t||r.transparent,r.opacity=e}})}throwAnim(){this.rightArm.rotation.x=-1.5,setTimeout(()=>{this.rightArm.rotation.x=0},220)}mailGunAnim(){this.rightArm.rotation.x=-.85;const t=this.mailGunMuzzle.material;t.emissiveIntensity=1.4,setTimeout(()=>{this.rightArm.rotation.x=0,this.updateNightGear(!0)},120)}setPackageGlow(t,e){Og(this.packageOrb,e,t)}dashOffset(){this.z+=4}dispose(t){t.remove(this.mesh),t.remove(this.shadow),t.remove(this.footLight);for(const e of this.speedTrails)t.remove(e),e.geometry.dispose(),e.material.dispose();this.speedTrails=[],Xe(this.mesh),this.shadow.geometry.dispose(),this.shadow.material.dispose(),this.footLight.geometry.dispose(),this.footLight.material.dispose()}}class Xg{constructor(t){F(this,"group");F(this,"units",[]);F(this,"reactTimer",0);F(this,"reactKind","none");F(this,"count",0);this.scene=t,this.group=new Pt,t.add(this.group)}setCount(t){for(this.count=Math.max(0,t);this.units.length<this.count;)this.units.push(this.buildHelper());for(;this.units.length>this.count;){const e=this.units.pop();this.group.remove(e),Xe(e)}this.layout()}reactQuake(){this.reactKind="swerve",this.reactTimer=.85}reactTurbo(){this.reactKind="honk",this.reactTimer=.65}buildHelper(){const t=new Pt,e=A("#FF6F00",{emissive:"#E65100",emissiveIntensity:.2}),n=A("#FFCC80");v(t,new bn(.14,.26,4,8),A("#37474F"),0,.38,0),v(t,new bn(.15,.28,4,8),e,0,.52,0),v(t,new L(.22,.18,.1),A("#5D4037"),0,.52,-.1),v(t,new wt(.15,10,8),n,0,.82,.02),v(t,new L(.28,.06,.05),A("#FFD54F"),0,.94,.04);for(const i of[-.05,.05])v(t,new wt(.025,6,6),A("#111"),i,.84,.1);return v(t,new L(.06,.02,.02),A("#FF8A65"),0,.78,.12),this.group.add(t),t}layout(){const t=Math.ceil(Math.sqrt(Math.max(1,this.count)));this.units.forEach((e,n)=>{const i=Math.floor(n/t),r=n%t;e.position.set((r-(t-1)/2)*.55,0,-(i+1)*.58)})}update(t,e,n){this.reactTimer>0&&(this.reactTimer-=.016),this.group.position.set(t,0,e),this.units.forEach((i,r)=>{let a=Math.sin(n*4+r)*.12,o=Math.sin(n*7+r*.6)*.035;this.reactTimer>0&&(this.reactKind==="honk"?(a+=Math.sin(n*22+r)*.18,o+=.04):this.reactKind==="swerve"&&(i.position.x+=Math.sin(n*16+r*2)*.12,i.rotation.z=Math.sin(n*12+r)*.12)),i.rotation.y=a,i.position.y=o,this.reactKind!=="swerve"&&(i.rotation.z=Math.sin(n*5+r)*.04)})}dispose(){for(const t of this.units)Xe(t);this.units=[],this.scene.remove(this.group)}}const qg=[-3.2,-1.6,0,1.6,3.2],bh=.82,Kl=[{wire:"#FFD54F",glow:"#80DEEA",core:"#FFFFFF",sparkA:"#FFEB3B",sparkB:"#B2FF59",arc:"#CCFF90",floor:"#FFE082"},{wire:"#EA80FC",glow:"#B388FF",core:"#F3E5F5",sparkA:"#E1BEE7",sparkB:"#CE93D8",arc:"#AB47BC",floor:"#EA80FC"},{wire:"#FFB74D",glow:"#FFCC80",core:"#FFF8E1",sparkA:"#FFE082",sparkB:"#FFAB40",arc:"#FF9800",floor:"#FFCC80"},{wire:"#69F0AE",glow:"#A7FFEB",core:"#E0F7FA",sparkA:"#B9F6CA",sparkB:"#00E676",arc:"#1DE9B6",floor:"#A7FFEB"}];function Yg(s,t){const e=Kl[Math.min(Math.max(0,s-1),Kl.length-1)];return t==="slide"?{wire:"#E040FB",glow:"#EA80FC",core:"#FCE4EC",sparkA:"#F48FB1",sparkB:"#B388FF",arc:"#CE93D8",floor:"#E1BEE7"}:e}function $g(s){return s==="full"?7.35:s==="lane-2"?3.25:1.55}function Zg(s){return s.length===0?0:s.reduce((t,e)=>t+e,0)/s.length}function nn(s,t){return new Dt({color:s,transparent:!0,opacity:t,blending:Yt,depthWrite:!1})}function jg(s,t,e,n){const i=[],r=U?10:16,a=v(s,new Re(t*.52,r),A("#1a1f28",{roughness:.95,metalness:.15}),0,.004,0,!1);a.rotation.x=-Math.PI/2;const o=v(s,new qe(t*.38,t*.54,r),nn(e.floor,U?.55:.72),0,.006,0,!1);o.rotation.x=-Math.PI/2,o.userData.isFloorRing=!0,i.push(o);const l=v(s,new qe(t*.12,t*.22,r),nn(e.glow,.35),0,.007,0,!1);l.rotation.x=-Math.PI/2,l.userData.isFloorRing=!0,i.push(l);for(let c=0;c<4;c++){const h=c/4*Math.PI*2,u=v(s,new ie(.22,.22),nn(n==="jump"?e.sparkA:e.sparkB,.5),Math.cos(h)*t*.32,.02,Math.sin(h)*t*.32,!1);u.rotation.x=-Math.PI/2,u.rotation.z=h+Math.PI/2,u.userData.isChevron=!0,u.userData.chevPhase=c}return i}function Jg(s,t,e,n,i){const a=n==="jump"?1.35:2.85,o=U?8:12;v(s,new ot(.11,.14,a,o),A("#37474F",{metalness:.72,roughness:.28}),t,a/2,0),v(s,new ot(.16,.2,.18,o),A("#546E7A",{metalness:.85,roughness:.2,emissive:i.wire,emissiveIntensity:.35}),t,a-.08,0);const l=v(s,new As(.11,0),A(i.core,{emissive:i.glow,emissiveIntensity:.85,metalness:.4,roughness:.2}),t,e,.08);l.userData.isCore=!0,l.userData.corePhase=t;for(let c=0;c<3;c++){const h=v(s,new Ye(.14+c*.05,.012,6,o),nn(i.glow,.45-c*.08),t,e-.15+c*.12,.06,!1);h.rotation.x=Math.PI/2,h.userData.isPillarRing=!0,h.userData.ringPhase=c+t}}function Kg(s,t,e,n,i){s.userData.spinSign=i,s.userData.spinAxis=n?"z":"y";const r=U?2:3;for(let o=0;o<r;o++){const l=new Pt;s.add(l),l.rotation.z=o/r*Math.PI*2,v(l,new L(t,.06,.06),A("#263238",{metalness:.8,roughness:.25,emissive:e.wire,emissiveIntensity:.45}),t/2,0,0);const c=v(l,new wt(.07,U?6:8,U?6:8),nn(e.sparkA,.85),t,0,0,!1);c.userData.isArmTip=!0;const h=v(l,new ie(t*.85,.14),nn(e.glow,.28),t*.42,0,0,!1);h.userData.isArmTrail=!0,n?h.rotation.y=Math.PI/2:h.rotation.x=Math.PI/2}const a=v(s,new wt(.09,8,8),nn(e.core,.75),0,0,0,!1);a.userData.isHubGlow=!0}function Qg(s,t,e,n,i){const r=U?10:14,a=v(s,new ot(i?.055:.072,i?.055:.072,t,r),A("#111820",{metalness:.9,roughness:.15,emissive:n.wire,emissiveIntensity:i?.35:.55}),0,e,0);a.rotation.z=Math.PI/2;const o=v(s,new ot(i?.095:.12,i?.095:.12,t-.02,r),nn(n.glow,i?.42:.58),0,e,0,!1);o.rotation.z=Math.PI/2;const l=v(s,new ot(.025,.025,t-.08,6),nn(n.core,.9),0,e,.02,!1);return l.rotation.z=Math.PI/2,l.userData.isCoreBeam=!0,{barrierMesh:a,glowMesh:o}}function tv(s,t,e,n){const i=[],r=U?3:5,a=t/2;for(let o=0;o<r;o++){const l=v(s,new Ye(.11,.018,6,U?8:12),nn(o%2===0?n.sparkA:n.sparkB,.55),-a+o/(r-1||1)*t,e,.04,!1);l.rotation.y=Math.PI/2,l.userData.isOrbitRing=!0,l.userData.orbitPhase=o*1.7,l.userData.orbitHalf=a,i.push(l)}return i}function ev(s,t,e,n){const i=[],r=t/2,a=U?6:10;for(let l=0;l<a;l++){const c=a>1?l/(a-1):.5,h=-r+.2+c*(t-.4),u=v(s,new wt(.022+l%3*.01,6,6),nn(l%2===0?n.sparkA:n.sparkB,.75),h,e+l%2*.06-.03,(l%3-1)*.05,!1);u.userData.isSpark=!0,u.userData.sparkPhase=l,u.userData.baseY=u.position.y,i.push(u)}const o=U?3:5;for(let l=0;l<o;l++){const c=v(s,new ie(.35,.07),nn(n.arc,.5),-r*.7+l*(t/(o-.5||1)),e-.14,.08,!1);c.userData.isArc=!0,c.userData.sparkPhase=l+.5,i.push(c)}return i}function nv(s,t,e,n,i){const r=[],a=n==="jump";for(const o of[-1,1]){const l=new Pt;l.position.set(o*t*.55,e+(a?.55:-.35),.15),s.add(l),v(l,new L(.42,.42,.04),A("#263238",{metalness:.7,emissive:i.wire,emissiveIntensity:.4}),0,0,0);const c=v(l,new sn(.12,.22,4),nn(i.core,.9),0,a?.08:-.08,.04,!1);a||(c.rotation.x=Math.PI),c.userData.isWarningArrow=!0,l.userData.isWarningGlyph=!0,l.userData.glyphPhase=o,r.push(l)}return r}function iv(s,t,e,n){const i=new Pt;s.add(i);const r=e==="jump",a=r?.48:1.82,o=t/2,l=jg(i,t,n,e);for(const _ of[-o,o])Jg(i,_,a,e,n);const{barrierMesh:c,glowMesh:h}=Qg(i,t,a,n,r),u=[];for(const _ of[-o,o]){const m=new Pt;m.position.set(_,a,0),i.add(m),Kg(m,Math.min(o*.55,1.35),n,r,_<0?1:-1),u.push(m)}const d=tv(i,t,a,n),f=ev(i,t,a,n),g=nv(i,o,a,e,n);return{assembly:i,barrierMesh:c,glowMesh:h,sparks:f,rotors:u,orbitRings:d,floorPulse:l,warningGlyphs:g}}function Ql(s,t,e){const{span:n,clearance:i,motion:r="static",district:a=1}=e;let o=e.lanes??[];n==="full"?o=[...qg]:o.length===0&&(o=[0]);const l=n==="full"?0:Zg(o),c=$g(n),h=Yg(a,i),u=new Pt;u.position.set(0,0,t);const d=iv(u,c,i,h);return d.assembly.position.x=r==="sweep"?Math.random()<.5?-5.2:5.2:l,s.add(u),{mesh:u,barAssembly:d.assembly,z:t,x:l,span:n,clearance:i,motion:r,laneXs:o,resolved:!1,penalized:!1,barrierMesh:d.barrierMesh,glowMesh:d.glowMesh,sparks:d.sparks,rotors:d.rotors,orbitRings:d.orbitRings,floorPulse:d.floorPulse,warningGlyphs:d.warningGlyphs,sweepStarted:!1,sweepTelegraphed:!1,sweepT0:0,sweepDir:Math.random()<.5?1:-1,styleAwarded:!1}}function sv(s,t){const e=s.clearance==="slide",n=s.motion==="sweep"&&s.sweepTelegraphed&&!s.sweepStarted?.45:0,i=.5+Math.sin(t*8+s.z*.2)*.5,r=s.glowMesh.material;r.opacity=(e?.52:.42)+i*.18+n;const a=s.barrierMesh.material;a.emissiveIntensity=(e?.45:.28)+Math.abs(Math.sin(t*11+s.z*.3))*.4+n*.6;const o=(e?2.8:3.6)+n*2;for(const l of s.rotors){const c=l.userData.spinSign??1;l.userData.spinAxis==="y"?l.rotation.y=c*t*o:l.rotation.z=c*t*o}for(const l of s.orbitRings){const c=l.userData.orbitPhase??0,h=l.userData.orbitHalf??2;l.position.x=Math.sin(t*2.2+c)*h*.85,l.rotation.x=Math.PI/2+Math.sin(t*3+c)*.35,l.rotation.z=t*1.5+c;const u=l.material;u.opacity=.35+Math.abs(Math.sin(t*5+c))*.35+n*.3}for(const l of s.floorPulse){const c=l.material;c.opacity=.4+i*.3+n*.25,l.rotation.z=t*.6,l.scale.setScalar(1+i*.06+n*.08)}for(const l of s.warningGlyphs){const c=l.userData.glyphPhase??0;l.position.y+=Math.sin(t*4+c)*8e-4,l.rotation.y=Math.sin(t*2+c)*.12}s.barAssembly.traverse(l=>{if(!(l instanceof se))return;const c=l.userData.sparkPhase??l.userData.corePhase??0;if(l.userData.isCore){l.rotation.y=t*2.5,l.rotation.x=Math.sin(t*3+c)*.4;const h=l.material;h.emissiveIntensity=.75+i*.45+n*.4,l.scale.setScalar(1+i*.12)}if(l.userData.isPillarRing&&(l.rotation.z=t*(1.5+c*.1)),l.userData.isCoreBeam){const h=l.material;h.opacity=.65+i*.35}if(l.userData.isArmTip){const h=l.material;h.opacity=.55+Math.abs(Math.sin(t*18+c))*.45,l.scale.setScalar(1+Math.sin(t*12+c)*.2)}if(l.userData.isArmTrail){const h=l.material;h.opacity=.15+Math.abs(Math.sin(t*10+c))*.25}if(l.userData.isSpark){const h=l.material;h.opacity=.35+Math.abs(Math.sin(t*16+c*2.1))*.55+n*.3,l.position.y=l.userData.baseY+Math.sin(t*20+c)*.025}if(l.userData.isArc){const h=l.material;h.opacity=.12+Math.abs(Math.sin(t*9+c*1.7))*.48+n*.35,l.scale.x=.6+Math.abs(Math.sin(t*13+c))*.65,l.rotation.z=Math.sin(t*6+c)*.45}if(l.userData.isChevron){const h=l.material;h.opacity=.35+i*.35}if(l.userData.isWarningArrow){const h=l.material;h.opacity=.6+Math.abs(Math.sin(t*6+c))*.4}})}function rv(s,t){const e=t-s.sweepT0,i=Math.min(1,Math.max(0,e/1.05)),r=i*i*(3-2*i),a=s.sweepDir===1?-5.2:5.2,o=s.sweepDir===1?5.2:-5.2;return a+(o-a)*r}function tc(s,t){if(t.span==="full")return!0;for(const e of t.laneXs)if(Math.abs(s-e)<bh+.12)return!0;return!1}function av(s,t,e,n){for(const i of s){if(i.resolved){i.mesh.visible=!1;continue}if(Qn(i.z,e,U?48:60)){if(i.motion==="sweep"){const r=i.z-e;r<16&&r>0&&!i.sweepTelegraphed&&(i.sweepTelegraphed=!0,n==null||n(i)),r<8&&r>-2&&!i.sweepStarted&&(i.sweepStarted=!0,i.sweepT0=t),i.sweepStarted&&(i.barAssembly.position.x=rv(i,t))}sv(i,t)}}}function ec(s,t){for(const e of s)t.remove(e.mesh),Xe(e.mesh)}function ov(s){return s.motion==="sweep"&&s.sweepStarted?s.barAssembly.position.x:s.x}function lv(s,t,e){const n=new Pt;n.position.set(0,0,t);const r=ic(2.35,e==="left"),a=ic(-2.35,e==="right");n.add(r.panel,a.panel);const o=v(n,new L(.18,3.5,.12),A("#37474F",{roughness:.8}),0,1.75,.05);return s.add(n),{kind:"route",mesh:n,z:t,safeSide:e,resolved:!1,leftMesh:r.panel,rightMesh:a.panel,leftPortal:r.portal,rightPortal:a.portal,leftLabel:r.label,rightLabel:a.label,centerWall:o,animTime:0}}function cv(s,t){const e=new Pt;e.position.set(0,0,t);const n=U?16:24,i=Fg();i.repeat.set(2,2);const r=v(e,new ot(3.6,3.9,.28,n),new ye({map:i,color:"#FFD54F",emissive:"#FF8F00",emissiveIntensity:.45,metalness:.35,roughness:.45}),0,.16,0);v(e,new ot(3.15,3.15,.04,n),A("#00E676",{emissive:"#00E676",emissiveIntensity:.55,transparent:!0,opacity:.55}),0,.32,0,!1);const a=[];for(const[h,u,d,f]of[[3,3.25,.08,.45],[2.4,2.58,.12,.35],[1.75,1.92,.16,.5]]){const g=v(e,new qe(h,u,n),new Dt({color:"#FFD54F",transparent:!0,opacity:f*.55,side:he}),0,d,0,!1);g.rotation.x=-Math.PI/2,a.push(g)}for(let h=0;h<6;h++){const u=h/6*Math.PI*2,d=Math.cos(u)*3.35,f=Math.sin(u)*3.35;v(e,new L(.12,2.8,.12),A("#37474F",{metalness:.5,roughness:.4}),d,1.4,f),v(e,new L(.08,2.4,.04),A("#00E676",{emissive:"#00E676",emissiveIntensity:.85}),d+Math.cos(u)*.08,1.4,f+Math.sin(u)*.08),v(e,new wt(.14,8,8),A("#FFD54F",{emissive:"#FFC107",emissiveIntensity:1}),d,2.85,f)}const o=v(e,new ot(.15,1.8,5.5,n,1,!0),new Dt({color:"#69F0AE",transparent:!0,opacity:.22,side:he,depthWrite:!1,blending:Yt}),0,2.75,0,!1);for(const h of[-1,1]){const u=v(e,new sn(.35,.7,4),A("#FFD54F",{emissive:"#FFAB00",emissiveIntensity:.65,transparent:!0,opacity:.75}),h*2.2,3.8,0,!1);u.rotation.z=h*Math.PI}v(e,new L(.55,.45,.35),A("#FF9800",{emissive:"#FF6F00",emissiveIntensity:.6}),0,4.2,0),v(e,new L(.6,.08,.08),A("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.8}),0,4.48,0);const l=sc("◆ DROP-OFF ZONE ◆","#00E676","rgba(0,20,40,0.82)");l.position.set(0,5.2,0),l.scale.set(6,1.4,1),e.add(l);const c=sc("DELIVER PACKAGE TO WIN","#FFD54F","rgba(0,0,0,0.65)");return c.position.set(0,4.35,0),c.scale.set(4.5,.75,1),e.add(c),s.add(e),{kind:"dropoff",mesh:e,z:t,reached:!1,platform:r,rings:a,beam:o,holoSign:l}}const ha={},ua={};function hv(s){const t=s?"safe":"die";if(ha[t])return ha[t];const e=256,n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d"),r=e/2,a=e/2;i.fillStyle="#000000",i.fillRect(0,0,e,e);const o=i.createRadialGradient(r,a,0,r,a,e*.48);o.addColorStop(0,s?"#000810":"#120008"),o.addColorStop(.22,s?"#003328":"#3a0018"),o.addColorStop(.55,s?"#00C853":"#D50000"),o.addColorStop(.78,s?"#004D40":"#4A0020"),o.addColorStop(1,"#000000"),i.fillStyle=o,i.fillRect(0,0,e,e);for(let c=0;c<6;c++){i.beginPath(),i.strokeStyle=s?"rgba(105,240,174,0.75)":"rgba(255,82,82,0.78)",i.lineWidth=c%2===0?4:2.5;for(let h=0;h<140;h++){const u=c*(Math.PI/3)+h*.105,d=6+h*.82,f=r+Math.cos(u)*d,g=a+Math.sin(u)*d;h===0?i.moveTo(f,g):i.lineTo(f,g)}i.stroke()}i.globalCompositeOperation="lighter";for(let c=0;c<6;c++){i.beginPath(),i.strokeStyle=s?"rgba(178,255,89,0.35)":"rgba(255,138,128,0.38)",i.lineWidth=8;for(let h=0;h<90;h++){const u=c*(Math.PI/3)+h*.105+.4,d=20+h*.82,f=r+Math.cos(u)*d,g=a+Math.sin(u)*d;h===0?i.moveTo(f,g):i.lineTo(f,g)}i.stroke()}i.globalCompositeOperation="source-over";for(let c=0;c<16;c++){const h=c/16*Math.PI*2,u=e*.36+c%2*6,d=r+Math.cos(h)*u,f=a+Math.sin(h)*u;i.fillStyle=s?"rgba(0,229,255,0.55)":"rgba(255,64,129,0.55)",i.beginPath(),i.moveTo(d,f-5),i.lineTo(d+4,f+3),i.lineTo(d-4,f+3),i.closePath(),i.fill()}const l=new ke(n);return l.colorSpace=de,ha[t]=l,l}function uv(s){const t=s?"safe":"die";if(ua[t])return ua[t];const e=256,n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d"),r=e/2,a=e/2;i.clearRect(0,0,e,e);for(let l=0;l<24;l++){const c=l/24*Math.PI*2,h=e*.41,u=r+Math.cos(c)*h,d=a+Math.sin(c)*h;i.save(),i.translate(u,d),i.rotate(c+Math.PI/2),i.strokeStyle=s?"rgba(105,240,174,0.85)":"rgba(255,82,82,0.85)",i.lineWidth=2,i.beginPath(),i.moveTo(0,-7),i.lineTo(5,0),i.lineTo(0,7),i.lineTo(-5,0),i.closePath(),i.stroke(),i.restore()}i.strokeStyle=s?"rgba(0,229,255,0.35)":"rgba(255,64,129,0.35)",i.lineWidth=3,i.beginPath(),i.arc(r,a,e*.43,0,Math.PI*2),i.stroke();const o=new ke(n);return o.colorSpace=de,ua[t]=o,o}function dv(s){const t=new Pt;t.userData.isSafe=s;const e=s?"#00E676":"#FF1744",n=s?"#69F0AE":"#FF5252",i=s?"#00E5FF":"#EA80FC",r=U?24:36,a=hv(s),o=uv(s);v(t,new Re(1.08,r),new Dt({color:s?"#001a14":"#1a0008",transparent:!0,opacity:.92,depthWrite:!1}),0,0,-.06,!1);const l=U?4:6;for(let g=0;g<l;g++){const _=g/l,m=1-_*.55,p=v(t,new qe(.32*m,.48*m,r),new Dt({color:g%2===0?e:n,transparent:!0,opacity:.22-_*.08,blending:Yt,depthWrite:!1,side:he}),0,0,-.02+_*.04,!1);p.userData.tunnelIndex=g,p.userData.tunnelSpeed=g%2===0?1.6-_*.4:-(1.2-_*.3)}const c=v(t,new Re(.98,r),new Dt({map:a,transparent:!0,opacity:.92,blending:Yt,depthWrite:!1}),0,0,.02,!1);c.userData.portalLayer="vortexA";const h=v(t,new Re(.82,r),new Dt({map:a,transparent:!0,opacity:.55,blending:Yt,depthWrite:!1,color:s?"#B2FF59":"#FF8A80"}),0,0,.05,!1);h.userData.portalLayer="vortexB";const u=v(t,new Re(1.02,r),new Dt({map:o,transparent:!0,opacity:.78,blending:Yt,depthWrite:!1}),0,0,.07,!1);u.userData.portalLayer="runes";for(const g of[-.92,.92]){const _=v(t,new L(.1,1.65,.08),new ye({color:"#263238",metalness:.55,roughness:.35,emissive:e,emissiveIntensity:.25}),g,0,.04);v(_,new L(.04,1.45,.02),new Dt({color:i,transparent:!0,opacity:.65,blending:Yt,depthWrite:!1}),g>0?-.03:.03,0,.05,!1),_.userData.portalLayer="pillar"}for(let g=0;g<(U?3:5);g++){const _=v(t,new qe(.88+g*.08,.96+g*.08,r),new Dt({color:g%2===0?n:i,transparent:!0,opacity:.14-g*.02,blending:Yt,depthWrite:!1,side:he}),0,0,.03+g*.004,!1);_.userData.portalLayer="corona",_.userData.coronaIndex=g}const d=v(t,new Re(.18,U?12:16),new Dt({color:"#FFFFFF",transparent:!0,opacity:.75,blending:Yt,depthWrite:!1}),0,0,.09,!1);d.userData.portalLayer="core";const f=U?6:10;for(let g=0;g<f;g++){const _=v(t,new ie(.08,.42),new Dt({color:i,transparent:!0,opacity:.35,blending:Yt,depthWrite:!1,side:he}),0,0,.08,!1);_.userData.portalLayer="shard",_.userData.shardIndex=g,_.userData.shardCount=f}return t}function nc(s,t,e){const n=1+Math.sin(t*3.8)*.035;s.scale.set(n,n,1);const i=e?"#00E676":"#FF1744",r=e?"#69F0AE":"#FF5252";for(const a of s.children){const o=a.userData,l=o.portalLayer;if(o.tunnelIndex!==void 0){a.rotation.z=t*o.tunnelSpeed;const c=a.material;c.opacity=.2-o.tunnelIndex*.03+Math.sin(t*4+o.tunnelIndex)*.06}if(l==="vortexA"){a.rotation.z=t*1.35;const c=a.material;c.opacity=.78+Math.sin(t*5)*.12}else if(l==="vortexB")a.rotation.z=-t*.95,a.scale.setScalar(.92+Math.sin(t*2.6)*.06);else if(l==="runes"){a.rotation.z=t*.45;const c=a.material;c.opacity=.62+Math.sin(t*6)*.14}else if(l==="core"){const c=1+Math.sin(t*7)*.18;a.scale.set(c,c,1);const h=a.material;h.opacity=.55+Math.sin(t*8)*.25,h.color.set(e?"#E0F7FA":"#FFCDD2")}else if(l==="corona"){a.rotation.z=t*(.6+o.coronaIndex*.15)*(e?1:-1);const c=a.material;c.opacity=.1+Math.sin(t*3.5+o.coronaIndex)*.06}else if(l==="shard"){const c=o.shardIndex,h=o.shardCount,u=t*2.2+c/h*Math.PI*2,d=.52+Math.sin(t*3.5+c*1.7)*.22;a.position.set(Math.cos(u)*d,Math.sin(u)*d,.08+c%3*.012),a.rotation.z=u+Math.PI/2;const f=a.material;f.opacity=.15+Math.abs(Math.sin(t*5+c*2))*.35,f.color.set(c%2===0?r:i)}else l==="pillar"&&(a.rotation.z=Math.sin(t*2+a.position.x)*.02)}}function ic(s,t){const e=new Pt;e.position.set(s,1.85,.08);const n=dv(t);n.scale.set(1.55,1.72,1),e.add(n);const i=fv(t),r=new se(new ie(4.15,3.55),new Dt({map:i,transparent:!0,opacity:.94,side:he,depthWrite:!1,blending:jn}));e.add(r);const a=v(e,new ie(4.28,3.68),new Dt({color:t?"#69F0AE":"#FF5252",transparent:!0,opacity:.22,blending:Yt,depthWrite:!1,side:he}),0,0,-.02,!1);a.userData.isGateRim=!0;const o=new yr(new vo({visible:!1}));return o.position.set(s,3.2,0),{panel:e,portal:n,label:o,rimGlow:a}}function fv(s){const t=document.createElement("canvas");t.width=256,t.height=352;const e=t.getContext("2d"),n=t.width,i=t.height,r=s?"#69F0AE":"#FF5252",a=s?"#00E5FF":"#EA80FC",o=s?"rgba(20,60,40,0.55)":"rgba(60,15,25,0.58)";e.fillStyle=o,e.beginPath(),e.roundRect(16,16,n-32,i-32,18),e.fill();const l=e.createRadialGradient(n/2,i/2,20,n/2,i/2,n*.38);l.addColorStop(0,"rgba(0,0,0,0.88)"),l.addColorStop(.55,"rgba(0,0,0,0.45)"),l.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=l,e.fillRect(0,0,n,i),e.strokeStyle=r,e.lineWidth=6,e.shadowColor=r,e.shadowBlur=14,e.beginPath(),e.roundRect(20,20,n-40,i-40,16),e.stroke(),e.shadowBlur=0,e.lineWidth=2,e.strokeStyle=a,e.beginPath(),e.roundRect(34,34,n-68,i-68,12),e.stroke();for(const[h,u]of[[48,48],[n-48,48],[48,i-48],[n-48,i-48]])e.save(),e.translate(h,u),e.strokeStyle=a,e.lineWidth=3,e.beginPath(),e.moveTo(-12,0),e.lineTo(0,-12),e.lineTo(12,0),e.lineTo(0,12),e.closePath(),e.stroke(),e.beginPath(),e.arc(0,0,16,0,Math.PI*2),e.stroke(),e.restore();e.fillStyle=s?"rgba(105,240,174,0.18)":"rgba(255,82,82,0.18)",e.font="bold 28px Segoe UI, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(s?"◆ WARP ◆":"☠ VOID ☠",n/2,i-52);const c=new ke(t);return c.colorSpace=de,c}function sc(s,t,e){const n=document.createElement("canvas");n.width=512,n.height=128;const i=n.getContext("2d");i.fillStyle=e,i.beginPath(),i.roundRect(8,8,496,112,14),i.fill(),i.strokeStyle="rgba(255,255,255,0.15)",i.lineWidth=2,i.stroke(),i.fillStyle=t,i.font="bold 72px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,256,64);const r=new ke(n);return new yr(new vo({map:r,transparent:!0,depthTest:!1}))}function pv(s,t){s.animTime=t;const e=s.safeSide==="left",n=1+Math.sin(t*3.5)*.012;s.leftMesh.scale.set(n,n,n),s.rightMesh.scale.set(n,n,n),nc(s.leftPortal,t,e),nc(s.rightPortal,t,!e);for(const i of[s.leftMesh,s.rightMesh]){const r=i.children.find(a=>a.userData.isGateRim);if(r){const a=r.material,o=i===s.leftMesh?e:!e;a.opacity=.16+Math.sin(t*4.5)*.08,a.color.set(o?"#69F0AE":"#FF5252")}}s.centerWall.visible=!s.resolved}function mv(s,t){s.platform.rotation.y=t*.65,s.platform.position.y=.16+Math.sin(t*2.2)*.05,s.rings.forEach((n,i)=>{n.rotation.z=t*(i%2===0?1.2:-.9)+i;const r=n.material;r.opacity=.18+Math.sin(t*2.5+i)*.08});const e=s.beam.material;e.opacity=.14+Math.sin(t*4)*.1,s.beam.scale.set(1+Math.sin(t*5)*.06,1,1+Math.sin(t*5)*.06),s.holoSign.position.y=5.2+Math.sin(t*2.5)*.12,s.holoSign.material.opacity=.88+Math.sin(t*6)*.1}function rc(s,t){t.remove(s),s.traverse(e=>{var n;if(e instanceof se){e.geometry.dispose();const i=e.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i.dispose()}e instanceof yr&&((n=e.material.map)==null||n.dispose(),e.material.dispose())})}const gv=new ot(.25,.25,.08,U?10:14),vv=new ye({color:"#FFD54F",emissive:"#FF8F00",emissiveIntensity:.55,metalness:.82,roughness:.22});function da(s,t,e,n=3){const i=[],r=[-3.2,-1.6,0,1.6,3.2],a=U?Math.min(e,3):e;for(let o=0;o<a;o++){const l=r[Math.floor(Math.random()*r.length)],c=new se(gv,vv);c.rotation.x=Math.PI/2,c.position.set(l,.6,t+o%2*.5),c.frustumCulled=!0,s.add(c),i.push({mesh:c,z:t+o%2*.5,x:l,collected:!1})}return i}function _v(s,t,e,n){for(const i of s){if(i.collected||!Qn(i.z,n))continue;i.mesh.rotation.z+=t*3.5,i.mesh.position.y=.6+Math.sin(e*5+i.x)*.12;const r=i.mesh.material;r.emissiveIntensity=.45+Math.sin(e*8+i.x*2)*.25}}function xv(s,t,e,n){let i=0;const r=n*n;for(const a of s){if(a.collected)continue;const o=a.x-t,l=a.z-e;o*o+l*l<r&&(a.collected=!0,a.mesh.visible=!1,i+=5)}return i}function ac(s,t){for(const e of s)t.remove(e.mesh)}const yv={"1-1":["newsbox-row","dog-fence","mailbox-row","package-spill"],"1-2":["dog-fence","party-tent","lawn-sprinkler","bin-alley"],"1-3":["party-tent","bin-alley","package-spill","hoa-gate"],"1-4":["bin-alley","hoa-gate","newsbox-row","lawn-sprinkler"],"1-5":["hoa-gate","newsbox-row","dog-fence","mailbox-row"],"2-1":["news-stand","food-cart","traffic-barricade","burst-hydrant"],"2-2":["food-cart","alien-beacon","bus-shelter","fallen-sign"],"2-3":["alien-beacon","fallen-sign","checkpoint","traffic-barricade"],"2-4":["fallen-sign","checkpoint","news-stand","burst-hydrant"],"2-5":["checkpoint","news-stand","food-cart","bus-shelter"],"3-1":["cactus-wall","mirage-rock","tumbleweed","sand-drift"],"3-2":["mirage-rock","rockslide","bone-arch","cactus-wall"],"3-3":["rockslide","sand-drift","sun-bleached-wreck","skull-rock"],"3-4":["sand-drift","skull-rock","tumbleweed","rockslide"],"3-5":["skull-rock","cactus-wall","mirage-rock","bone-arch"],"4-1":["fallen-log","temple-rubble","vine-snare","thorn-bramble"],"4-2":["temple-rubble","thorn-bramble","quicksand-pit","fallen-log"],"4-3":["thorn-bramble","flood-wreck","idol-shrine","temple-rubble"],"4-4":["flood-wreck","totem-gate","vine-snare","quicksand-pit"],"4-5":["totem-gate","fallen-log","flood-wreck","idol-shrine"]},Eo={"newsbox-row":{clearHeight:.55,radius:.9,label:"News Boxes"},"dog-fence":{clearHeight:.62,radius:1,label:"Dog Fence"},"party-tent":{clearHeight:.58,radius:1.05,label:"Party Tent"},"bin-alley":{clearHeight:.72,radius:1,label:"Bin Alley"},"hoa-gate":{clearHeight:.88,radius:1.15,label:"HOA Gate"},"mailbox-row":{clearHeight:.52,radius:.88,label:"Mailboxes"},"lawn-sprinkler":{clearHeight:.48,radius:.85,label:"Sprinklers"},"package-spill":{clearHeight:.5,radius:.92,label:"Spilled Packages"},"news-stand":{clearHeight:.68,radius:.95,label:"News Stand"},"food-cart":{clearHeight:.75,radius:1,label:"Food Cart"},"alien-beacon":{clearHeight:.55,radius:.92,label:"Alien Beacon"},"fallen-sign":{clearHeight:.48,radius:.88,label:"Fallen Sign"},checkpoint:{clearHeight:.85,radius:1.12,label:"Checkpoint"},"traffic-barricade":{clearHeight:.65,radius:1,label:"Barricades"},"burst-hydrant":{clearHeight:.55,radius:.9,label:"Burst Hydrant"},"bus-shelter":{clearHeight:.82,radius:1.05,label:"Bus Shelter"},"cactus-wall":{clearHeight:.65,radius:1.05,label:"Cactus Wall"},"mirage-rock":{clearHeight:.52,radius:.95,label:"Mirage Rocks"},rockslide:{clearHeight:.58,radius:1.08,label:"Rockslide"},"sand-drift":{clearHeight:.45,radius:.9,label:"Sand Drift"},"skull-rock":{clearHeight:.62,radius:1.05,label:"Skull Rock"},tumbleweed:{clearHeight:.42,radius:.88,label:"Tumbleweed"},"bone-arch":{clearHeight:.72,radius:1,label:"Bone Arch"},"sun-bleached-wreck":{clearHeight:.55,radius:.98,label:"Sun-Bleached Wreck"},"fallen-log":{clearHeight:.55,radius:1,label:"Fallen Log"},"temple-rubble":{clearHeight:.6,radius:1.02,label:"Temple Rubble"},"thorn-bramble":{clearHeight:.68,radius:.95,label:"Thorn Bramble"},"flood-wreck":{clearHeight:.5,radius:.98,label:"Flood Wreck"},"totem-gate":{clearHeight:.9,radius:1.15,label:"Totem Gate"},"vine-snare":{clearHeight:.62,radius:.95,label:"Vine Snare"},"quicksand-pit":{clearHeight:.38,radius:.95,label:"Quicksand"},"idol-shrine":{clearHeight:.78,radius:1.02,label:"Idol Shrine"}},Mv=["newsbox-row","dog-fence","mailbox-row","package-spill"];function Sh(s){return yv[s]??Mv}function bv(s){const t=Sh(s);return t[Math.floor(Math.random()*t.length)]}function Sv(s){return Sh(s).map(t=>Eo[t].label).join(" · ")}const Ce=U?8:12;function wv(s,t){switch(t){case"newsbox-row":Ev(s);break;case"dog-fence":Tv(s);break;case"party-tent":Av(s);break;case"bin-alley":Cv(s);break;case"hoa-gate":Rv(s);break;case"mailbox-row":Pv(s);break;case"lawn-sprinkler":Fv(s);break;case"package-spill":Dv(s);break;case"news-stand":Lv(s);break;case"food-cart":Iv(s);break;case"alien-beacon":Uv(s);break;case"fallen-sign":Nv(s);break;case"checkpoint":Bv(s);break;case"traffic-barricade":kv(s);break;case"burst-hydrant":zv(s);break;case"bus-shelter":Ov(s);break;case"cactus-wall":Hv(s);break;case"mirage-rock":Gv(s);break;case"rockslide":Vv(s);break;case"sand-drift":Wv(s);break;case"skull-rock":Xv(s);break;case"tumbleweed":qv(s);break;case"bone-arch":Yv(s);break;case"sun-bleached-wreck":$v(s);break;case"fallen-log":Zv(s);break;case"temple-rubble":jv(s);break;case"thorn-bramble":Jv(s);break;case"flood-wreck":Kv(s);break;case"totem-gate":Qv(s);break;case"vine-snare":t_(s);break;case"quicksand-pit":e_(s);break;case"idol-shrine":n_(s);break}}function ne(s,t){if(U){const r=v(s,new Re(t*.68,Ce*2),A("#ECEFF1",{roughness:.92,metalness:.02}),0,.008,0,!1);r.rotation.x=-Math.PI/2,r.userData.isHazardPad=!0}const e=v(s,new Re(t*.98,Ce*2),A("#0a0c12",{transparent:!0,opacity:U?.28:.52,roughness:1}),0,.005,0,!1);e.rotation.x=-Math.PI/2;const n=v(s,new qe(t*.72,t*.96,Ce*2),new Dt({color:"#FF9800",transparent:!0,opacity:U?.58:.42,blending:Yt,depthWrite:!1}),0,.012,0,!1);n.rotation.x=-Math.PI/2,n.userData.isGlow=!0;const i=v(s,new qe(t*.38,t*.52,Ce*2),new Dt({color:"#FFE082",transparent:!0,opacity:U?.38:.22,blending:Yt,depthWrite:!1}),0,.014,0,!1);i.rotation.x=-Math.PI/2,i.userData.isGlow=!0;for(let r=0;r<4;r++){const a=r/4*Math.PI*2+Math.PI/4,o=v(s,new ot(.025,.035,.28,4),A("#FF9800",{emissive:"#FF9800",emissiveIntensity:U?.55:.35,roughness:.6}),Math.cos(a)*t*.82,.14,Math.sin(a)*t*.82);v(o,new wt(.045,6,6),A("#FFEB3B",{emissive:"#FFC107",emissiveIntensity:.55}),0,.16,0)}}function _n(s){return A(s,{roughness:.88,metalness:.02})}function Me(s,t=.55){return A(s,{roughness:.35,metalness:t})}function wh(s,t,e,n,i){const r=v(s,new L(t,e,.06),A("#1c1c1c",{roughness:.85}),0,n,i);for(let a=0;a<Math.floor(t/.18);a++)v(r,new L(.09,e+.02,.02),A(a%2===0?"#F9A825":"#1c1c1c",{roughness:.7}),-t/2+.09+a*.18,0,.04)}function Ev(s){ne(s,.95);for(const t of[-.55,0,.55]){const e=v(s,new L(.44,.68,.4),Me("#1E4E8C",.4),t,.34,0);v(e,new L(.46,.1,.42),Me("#0D2F5C"),0,.39,0),v(e,new ie(.34,.42),A("#E8F4FD",{roughness:.4}),0,.02,.21),v(e,new L(.36,.05,.02),A("#F5C518",{roughness:.5}),0,.22,.22),v(s,new ot(.02,.02,.08,6),Me("#78909C"),t+.18,.08,.15)}}function Tv(s){ne(s,1);for(const t of[-.88,.88])v(s,new L(.07,.78,.07),_n("#D7CCC8"),t,.39,0),v(s,new L(.1,.1,.1),_n("#A1887F"),t,.82,0);for(let t=0;t<6;t++){const e=-.75+t*.3;v(s,new L(.26,.08,.05),_n("#EFEBE9"),e,.2+t%2*.28,0),v(s,new sn(.05,.12,4),_n("#BCAAA4"),e,.58,0)}v(s,new ot(.13,.15,.1,8),Me("#607D8B"),.38,.05,.14),v(s,new ot(.17,.14,.07,8),A("#BF360C",{roughness:.6}),-.38,.035,.12)}function Av(s){ne(s,1.05);const t=Me("#546E7A",.45);for(const[n,i]of[[-.72,-.38],[.72,-.38],[0,.48]])v(s,new ot(.035,.045,.9,8),t,n,.45,i);const e=v(s,new sn(1,.58,4),A("#C2185B",{roughness:.75}),0,.76,0);e.rotation.y=Math.PI/4,v(e,new sn(.98,.56,4),A("#880E4F",{roughness:.8}),0,.01,0);for(let n=0;n<5;n++){const i=n/5*Math.PI*2,r=v(s,new wt(.09,8,8),A(["#FDD835","#42A5F5","#66BB6A","#FF7043","#AB47BC"][n],{roughness:.5}),Math.cos(i)*.58,.38+n%2*.12,Math.sin(i)*.38);r.userData.isBob=!0,r.userData.bobPhase=n}v(s,new L(.55,.38,.52),_n("#5D4037"),0,.19,0),v(s,new ot(.04,.04,.12,6),A("#ECEFF1"),.15,.44,.1)}function Cv(s){ne(s,1);const t=["#2E7D32","#1565C0","#E65100"];for(let e=0;e<3;e++){const n=-.55+e*.55,i=v(s,new L(.4,.82,.4),A(t[e],{roughness:.5,metalness:.2}),n,.41,0);v(i,new L(.44,.07,.44),Me("#37474F"),0,.44,0),v(i,new L(.14,.05,.02),A("#FDD835",{roughness:.55}),0,.12,.21),v(i,new ot(.03,.03,.06,6),Me("#455A64"),.14,.55,.12),i.rotation.z=(e-1)*.07}}function Rv(s){ne(s,1.15);for(const t of[-.98,.98])v(s,new L(.14,1,.14),_n("#4E342E"),t,.5,0),v(s,new wt(.11,8,8),A("#F9A825",{roughness:.45}),t,1.02,0);v(s,new L(2.05,.12,.1),Me("#455A64"),0,.88,0),wh(s,1.65,.58,.48,.07),v(s,new L(.58,.38,.05),A("#C62828",{roughness:.55}),0,.58,.11),v(s,new ie(.38,.1),A("#FAFAFA",{roughness:.6}),0,.58,.14)}function Pv(s){ne(s,.88);for(const t of[-.5,0,.5]){v(s,new ot(.04,.05,.55,6),Me("#546E7A"),t,.28,0);const e=v(s,new L(.32,.28,.48),A("#1565C0",{roughness:.45,metalness:.35}),t,.58,0);v(e,new L(.34,.06,.5),Me("#0D47A1"),0,.17,0),v(e,new ie(.22,.14),A("#ECEFF1",{roughness:.4}),0,.02,.25),v(s,new L(.08,.04,.02),A("#FDD835"),t,.52,.26)}}function Fv(s){ne(s,.85);for(const[t,e]of[[-.35,.1],[.35,-.08]]){v(s,new ot(.05,.07,.06,8),Me("#78909C"),t,.03,e),v(s,new ot(.04,.05,.18,8),Me("#455A64"),t,.12,e);for(let n=0;n<3;n++){const i=n/3*Math.PI*2+t,r=v(s,new ot(.008,.015,.35,4),A("#81D4FA",{transparent:!0,opacity:.55,roughness:.2}),t+Math.cos(i)*.12,.32,e+Math.sin(i)*.12);r.rotation.z=.85,r.rotation.y=i,r.userData.isBob=!0,r.userData.bobPhase=n}}v(s,new L(.7,.02,.35),A("#33691E",{roughness:.95}),0,.01,0)}function Dv(s){ne(s,.92);const t=["#8D6E63","#5D4037","#795548","#6D4C41"];for(let e=0;e<5;e++){const n=-.45+e%3*.42,i=-.15+Math.floor(e/3)*.28,r=v(s,new L(.28+e%2*.06,.22+e%3*.04,.24),A(t[e],{roughness:.85}),n,.12+e%2*.08,i);r.rotation.y=e*.45,v(r,new L(.14,.04,.02),A("#FDD835",{roughness:.6}),0,.08,.13),v(r,new L(.04,.14,.02),A("#37474F"),-.06,0,.13)}v(s,new ie(.55,.35),A("#ECEFF1",{transparent:!0,opacity:.35}),.1,.02,.2,!1)}function Lv(s){ne(s,.95);for(const t of[-.42,.42])v(s,new L(.07,.7,.07),Me("#37474F"),t,.35,0);v(s,new L(1,.1,.58),Me("#263238",.5),0,.66,0),v(s,new L(.9,.48,.48),A("#1a1a1a",{roughness:.9}),0,.4,0);for(let t=0;t<5;t++)v(s,new L(.14,.4,.02),A(t%2===0?"#F9A825":"#212121",{roughness:.65}),-.32+t*.16,.42,.25);v(s,new L(.52,.14,.02),A("#C62828",{roughness:.55}),0,.76,.22)}function Iv(s){ne(s,1);for(const e of[-.38,.38])v(s,new ot(.06,.06,.02,8),Me("#263238"),e,.06,-.22),v(s,new ot(.06,.06,.02,8),A("#212121",{roughness:.8}),e,.06,.22),v(s,new ot(.04,.04,.52,8),Me("#37474F"),e,.32,-.22);v(s,new L(.9,.58,.58),A("#E64A19",{roughness:.55}),0,.58,0),v(s,new L(.95,.08,.62),A("#BF360C",{roughness:.7}),0,.88,0),v(s,new L(.68,.38,.02),A("#FFF8E1",{roughness:.5}),0,.68,.31);for(let e=0;e<3;e++)v(s,new ot(.05,.05,.03,8),A("#FDD835",{roughness:.45}),-.22+e*.22,.92,.16);const t=v(s,new wt(.1,6,6),A("#ECEFF1",{transparent:!0,opacity:.2}),0,.98,.08,!1);t.userData.isBob=!0}function Uv(s){ne(s,.92),v(s,new ot(.58,.74,.16,Ce),Me("#455A64",.65),0,.08,0),v(s,new Ye(.42,.04,8,Ce),Me("#607D8B"),0,.16,0),v(s,new wt(.36,12,8,0,Math.PI*2,0,Math.PI/2),A("#4DD0E1",{transparent:!0,opacity:.5,roughness:.3}),0,.14,0);const t=v(s,new As(.16,0),A("#76FF03",{emissive:"#558B2F",emissiveIntensity:.35,roughness:.4}),0,.58,0);t.userData.isBob=!0;for(let e=0;e<4;e++){const n=e/4*Math.PI*2;v(s,new L(.03,.42,.03),A("#AEEA00",{transparent:!0,opacity:.45}),Math.cos(n)*.28,.32,Math.sin(n)*.28)}}function Nv(s){ne(s,.88),v(s,new ot(.05,.07,.95,8),Me("#78909C"),.32,.1,.22);const t=v(s,new L(1.15,.68,.07),A("#F9A825",{roughness:.55}),-.12,.2,-.06);t.rotation.z=1.12,v(t,new L(.16,.48,.02),A("#212121"),0,0,.05),v(t,new L(.12,.12,.02),A("#212121"),.16,-.12,.05);for(let e=0;e<4;e++)v(s,new L(.07,.04,.28),Me("#607D8B"),-.32+e*.14,.04,.08+e*.07)}function Bv(s){ne(s,1.12);for(const t of[-.92,.92])v(s,new L(.11,.92,.11),A("#1a1a1a",{roughness:.85}),t,.46,0),v(s,new L(.15,.15,.15),A("#F9A825",{roughness:.45}),t,.96,0);v(s,new L(1.9,.14,.12),A("#1565C0",{roughness:.5,metalness:.25}),0,.82,0),wh(s,1.45,.52,.44,.09),v(s,new L(.38,.38,.05),A("#C62828",{roughness:.55}),0,.58,.13)}function kv(s){ne(s,1);for(const t of[-.55,.55])v(s,new L(.08,.62,.08),Me("#37474F"),t,.31,0),v(s,new ot(.04,.04,.02,6),A("#212121"),t,.02,.12);for(let t=0;t<3;t++){const e=v(s,new L(1.15,.14,.08),A(t%2===0?"#F9A825":"#212121",{roughness:.6}),0,.22+t*.18,0);e.rotation.z=(t-1)*.04}v(s,new L(.35,.22,.03),A("#FAFAFA",{roughness:.7}),0,.48,.06)}function zv(s){ne(s,.9),v(s,new ot(.14,.16,.38,10),A("#C62828",{roughness:.45,metalness:.3}),0,.19,0),v(s,new ot(.1,.1,.08,10),A("#B71C1C",{roughness:.45}),0,.4,0);for(const t of[-.12,.12])v(s,new ot(.05,.05,.14,8),A("#C62828",{roughness:.45}),t,.28,.1);for(let t=0;t<5;t++){const e=t/5*Math.PI*2,n=v(s,new wt(.04+t%2*.02,6,6),A("#29B6F6",{transparent:!0,opacity:.65,roughness:.2}),Math.cos(e)*.22,.55+t*.06,Math.sin(e)*.22);n.userData.isBob=!0,n.userData.bobPhase=t}v(s,new Re(.55,Ce),A("#0288D1",{transparent:!0,opacity:.25}),0,.01,0,!1)}function Ov(s){ne(s,1.05);for(const t of[-.75,.75])v(s,new L(.08,.88,.08),Me("#455A64"),t,.44,-.15);v(s,new L(1.6,.1,.55),A("#37474F",{roughness:.55,metalness:.35}),0,.82,-.05),v(s,new L(1.55,.55,.04),A("#81D4FA",{transparent:!0,opacity:.35,roughness:.2}),0,.55,.18),v(s,new L(.55,.38,.06),A("#546E7A",{roughness:.7}),0,.22,.05),v(s,new L(.12,.12,.02),A("#FDD835"),0,.65,.22)}function Hv(s){ne(s,1.05),v(s,new L(1.65,.05,.55),A("#A1887F",{roughness:.95}),0,.025,0);for(const t of[-.58,0,.58]){const e=v(s,new ot(.13,.17,.78+Math.abs(t)*.08,10),A("#558B2F",{roughness:.92}),t,.4,0);v(e,new ot(.09,.11,.32,8),A("#33691E",{roughness:.95}),t+(t>=0?.16:-.16),.58,0);for(let n=0;n<5;n++)v(s,new sn(.025,.05,4),A("#33691E"),t+.1,.18+n*.13,.09)}}function Gv(s){ne(s,.95);for(let t=0;t<4;t++){const e=v(s,new Mr(.24+t%3*.07,0),A("#8D6E63",{roughness:.98}),-.42+t*.28,.2+t%2*.1,(t-1.5)*.1);e.rotation.set(.25,t*.55,.12),e.userData.isBob=!0,e.userData.bobPhase=t}v(s,new ie(1.1,.35),A("#FFF9C4",{transparent:!0,opacity:.12,side:he}),0,.15,0,!1)}function Vv(s){ne(s,1.08),v(s,new L(1.45,.38,.72),A("#78909C",{roughness:.95}),0,.19,0);for(let t=0;t<6;t++){const e=v(s,new Mr(.2+t%3*.07,0),A(t%2===0?"#78909C":"#607D8B",{roughness:.98}),-.55+t*.22,.36+t%2*.14,(t-2.5)*.09);e.rotation.y=t*.65}for(let t=0;t<2;t++){const e=v(s,new wt(.12,6,6),A("#BCAAA4",{transparent:!0,opacity:.18}),.15+t*.2,.52,.08);e.userData.isBob=!0,e.userData.bobPhase=t}}function Wv(s){ne(s,.9),v(s,new wt(.78,Ce,Ce,0,Math.PI*2,0,Math.PI/2.2),A("#FFE082",{roughness:.98}),0,.08,0),v(s,new wt(.48,Ce,Ce,0,Math.PI*2,0,Math.PI/2.5),A("#FFCC80",{roughness:.98}),.42,.06,.16),v(s,new wt(.38,Ce,Ce,0,Math.PI*2,0,Math.PI/2.5),A("#FFCC80",{roughness:.98}),-.38,.05,-.12);for(let t=0;t<3;t++){const e=v(s,new wt(.07,6,6),A("#FFF8E1",{transparent:!0,opacity:.28}),(t-1)*.22,.32+t*.07,.18);e.userData.isBob=!0,e.userData.bobPhase=t}}function Xv(s){ne(s,1.05),v(s,new L(1.25,.42,.68),A("#8D6E63",{roughness:.96}),0,.21,0);const t=v(s,new wt(.34,12,12),A("#BCAAA4",{roughness:.92}),0,.54,.16);v(t,new L(.09,.11,.02),A("#212121"),-.11,.05,.3),v(t,new L(.09,.11,.02),A("#212121"),.11,.05,.3),v(t,new L(.15,.07,.02),A("#212121"),0,-.09,.3),v(s,new ot(.035,.035,.52,6),A("#795548",{roughness:.9}),.48,.56,-.1),v(s,new ot(.035,.035,.48,6),A("#795548",{roughness:.9}),-.42,.53,-.16)}function qv(s){ne(s,.88);const t=v(s,new bo(.42,1),A("#8D6E63",{roughness:.98}),0,.38,0);for(let e=0;e<12;e++){const n=e/12*Math.PI*2;v(t,new ot(.008,.008,.35,4),A("#6D4C41",{roughness:.95}),Math.cos(n)*.28,e%3*.08-.08,Math.sin(n)*.28)}t.userData.isSpin=!0,v(s,new Re(.35,Ce),A("#A1887F",{transparent:!0,opacity:.2}),0,.01,0,!1)}function Yv(s){ne(s,1);for(const t of[-.62,.62]){const e=v(s,new ot(.08,.1,.85,8),A("#EFEBE9",{roughness:.85}),t,.42,0);v(e,new wt(.1,8,8),A("#ECEFF1",{roughness:.8}),0,.48,0),v(e,new wt(.08,8,8),A("#ECEFF1",{roughness:.8}),0,-.48,0)}v(s,new Ye(.55,.07,8,Ce,0,Math.PI),A("#EFEBE9",{roughness:.85}),0,.78,0),v(s,new L(.35,.08,.08),A("#EFEBE9",{roughness:.85}),0,.72,.12)}function $v(s){ne(s,.98),v(s,new L(.85,.32,.55),A("#BCAAA4",{roughness:.92}),.15,.16,0),v(s,new L(.45,.22,.38),A("#A1887F",{roughness:.95}),-.35,.11,.08),v(s,new ot(.04,.04,.55,6),A("#8D6E63",{roughness:.95}),.45,.35,-.12),v(s,new ie(.65,.4),A("#FFFDE7",{transparent:!0,opacity:.15,side:he}),0,.45,.2,!1);for(let t=0;t<3;t++)v(s,new L(.06,.04,.2),A("#78909C",{roughness:.8}),-.2+t*.15,.04,.15)}function Zv(s){ne(s,1);const t=v(s,new ot(.3,.34,1.65,Ce),_n("#4E342E"),0,.3,0);t.rotation.z=Math.PI/2,v(t,new Re(.3,Ce),_n("#6D4C41"),.82,0,0);for(let e=0;e<4;e++)v(s,new L(.05,.22,.02),A("#2E7D32",{roughness:.9}),-.35+e*.22,.14,.26);v(s,new wt(.1,6,6),A("#FF7043",{roughness:.7}),.55,.34,.22)}function jv(s){ne(s,1.02),v(s,new L(.58,.78,.48),A("#78909C",{roughness:.88}),-.38,.39,0),v(s,new L(.48,.38,.42),A("#607D8B",{roughness:.9}),.32,.19,.1);const t=v(s,new ot(.17,.21,.58,10),A("#B0BEC5",{roughness:.85}),.38,.58,-.16);t.rotation.z=.32,v(s,new L(.52,.08,.52),A("#455A64",{roughness:.85}),0,.04,0);for(let e=0;e<4;e++)v(s,new L(.1,.1,.02),A("#F9A825",{roughness:.5}),-.12+e*.1,.56,.26)}function Jv(s){ne(s,.95),v(s,new wt(.58,10,10),A("#2E7D32",{roughness:.95}),0,.36,0);for(let t=0;t<10;t++){const e=t/10*Math.PI*2,n=v(s,new sn(.035,.38,4),A("#33691E",{roughness:.92}),Math.cos(e)*.48,.26+t%3*.1,Math.sin(e)*.48);n.rotation.x=-.55,n.rotation.y=e}v(s,new L(.26,.26,.04),A("#C62828",{roughness:.55}),0,.56,.36)}function Kv(s){ne(s,.98),v(s,new L(1.15,.1,.62),A("#0288D1",{transparent:!0,opacity:.45,roughness:.3}),0,.05,0),v(s,new L(.58,.38,.42),Me("#546E7A",.45),.22,.24,0),v(s,new L(.38,.22,.32),A("#78909C",{roughness:.7,metalness:.3}),-.38,.16,.06);const t=v(s,new L(.32,.32,.32),A("#689F38",{roughness:.85}),-.16,.3,.16);t.userData.isBob=!0}function Qv(s){ne(s,1.15);for(const t of[-.68,.68]){const e=v(s,new ot(.17,.21,1.08,10),_n("#4E342E"),t,.54,0);v(e,new L(.3,.13,.3),A("#E64A19",{roughness:.65}),0,.36,.13),v(e,new L(.24,.11,.24),A("#F9A825",{roughness:.55}),0,.66,.13),v(e,new L(.09,.09,.02),A("#212121"),-.04,.8,.15),v(e,new L(.09,.09,.02),A("#212121"),.04,.8,.15)}v(s,new L(1.55,.13,.12),A("#33691E",{roughness:.85}),0,.98,0),v(s,new L(.07,.58,.07),A("#33691E",{roughness:.85}),0,.74,.16)}function t_(s){ne(s,.95);for(const t of[-.45,.45])v(s,new ot(.05,.07,.72,8),_n("#5D4037"),t,.36,0);v(s,new L(1.05,.08,.08),_n("#6D4C41"),0,.62,0);for(let t=0;t<6;t++){const e=t/6*Math.PI,n=v(s,new Ye(.18+t%2*.06,.025,6,10,0,Math.PI),A("#2E7D32",{roughness:.9}),Math.cos(e)*.15,.28+t*.06,Math.sin(e)*.1);n.rotation.y=e,n.userData.isBob=!0,n.userData.bobPhase=t}}function e_(s){ne(s,.95),v(s,new ot(.72,.82,.06,Ce),A("#D7CCC8",{roughness:.98}),0,.03,0),v(s,new ot(.55,.65,.04,Ce),A("#BCAAA4",{roughness:.98}),0,.05,0);for(let t=0;t<4;t++){const e=t/4*Math.PI*2,n=v(s,new wt(.05,6,6),A("#A1887F",{transparent:!0,opacity:.5}),Math.cos(e)*.28,.08,Math.sin(e)*.28);n.userData.isBob=!0,n.userData.bobPhase=t}v(s,new L(.22,.04,.14),A("#795548",{roughness:.9}),.15,.06,.1)}function n_(s){ne(s,1.02),v(s,new L(.95,.12,.65),A("#455A64",{roughness:.85}),0,.06,0),v(s,new L(.75,.08,.55),A("#37474F",{roughness:.85}),0,.14,0);const t=v(s,new ot(.22,.28,.62,10),A("#F9A825",{roughness:.45,metalness:.35}),0,.52,0);v(t,new L(.38,.12,.18),A("#F9A825",{roughness:.45,metalness:.35}),0,.38,0),v(t,new wt(.14,10,10),A("#F9A825",{roughness:.45,metalness:.35}),0,.72,0);for(const e of[-.42,.42])v(s,new ot(.06,.08,.45,8),A("#33691E",{roughness:.9}),e,.22,.22),v(s,new Ye(.12,.025,6,8),A("#F9A825",{roughness:.5}),e,.48,.22)}function i_(s,t,e,n){const i=new Pt;i.position.set(e,.02,n),wv(i,t),s.add(i);const r=Eo[t];return{mesh:i,x:e,z:n,kind:t,radius:r.radius,hit:!1}}function s_(s){return Eo[s].clearHeight}function r_(s,t){if(s.userData.baseColor===void 0&&s.color&&(s.userData.baseColor=s.color.getHex()),U&&s.userData.baseColor!==void 0){const i=new bt(s.userData.baseColor);i.lerp(new bt("#FFCC80"),.22),s.color.copy(i)}s.userData.baseEmissiveIntensity===void 0&&(s.userData.baseEmissiveIntensity=s.emissiveIntensity);const e=s.userData.baseEmissiveIntensity,n=U?.12+t*.22:t*.18;n>.02&&!s.transparent?(s.emissive.set(U?"#FFE0B2":"#FFF3E0"),s.emissiveIntensity=e+n):s.emissiveIntensity=e}function a_(s,t,e,n=0){for(const i of s)i.hit||!Qn(i.z,e)||(i.mesh.traverse(r=>{if(!(r instanceof se))return;const a=r.userData.bobPhase??0,o=r.userData.blinkPhase??0;if(r.userData.isGlow){r.rotation.z=t*.25+i.x;const l=r.material;if(l.opacity!==void 0){const c=(U?.48:.32)+Math.sin(t*2.5+i.z)*.1;l.opacity=c}}if(r.userData.isBob&&(r.position.y=r.userData.baseY??r.position.y,r.userData.baseY===void 0&&(r.userData.baseY=r.position.y),r.position.y=r.userData.baseY+Math.sin(t*3+i.z+a)*.05),r.userData.isBlink){const l=r.material;l.emissiveIntensity!==void 0&&(r.userData.baseEmissiveIntensity===void 0&&(r.userData.baseEmissiveIntensity=l.emissiveIntensity),l.emissiveIntensity=r.userData.baseEmissiveIntensity+.22+Math.sin(t*4+o)*.12+n*(U?.45:.35))}r.material instanceof ye&&!r.userData.isBlink&&!r.userData.isHazardPad&&r_(r.material,n),r.userData.isSpin&&(r.rotation.y=t*2+a)}),i.mesh.position.y=Math.sin(t*2.5+i.x*.5)*.012)}function oc(s,t){for(const e of s)t.remove(e.mesh),Xe(e.mesh)}function o_(s,t,e,n=3.5){const i=[],r=[-3.2,-1.6,0,1.6,3.2];for(let a=0;a<e;a++){const o=r[Math.floor(Math.random()*r.length)],l=t+a%3*.6,c=a*1.2+Math.random(),h=wr("pickup");h.group.position.set(o,0,l),s.add(h.group),i.push({mesh:h.group,x:o,z:l,collected:!1,bobPhase:c})}return i}function l_(s,t,e){for(const n of s)n.collected||!Qn(n.z,e,U?55:75)||(n.mesh.position.x=n.x,n.mesh.position.z=n.z,xh(n.mesh,t,n.bobPhase,!0))}function c_(s,t,e,n){let i=0,r=0;for(const a of s){if(a.collected)continue;const o=a.x-t,l=a.z-e;o*o+l*l<n*n&&(a.collected=!0,a.mesh.visible=!1,a.golden?r++:i++)}return{packages:i,golden:r}}function h_(s){const t=new se(new ie(.08,.35),new Dt({color:"#00E5FF",transparent:!0,opacity:.55,blending:Yt,depthWrite:!1,side:he}));return t.rotation.x=-Math.PI/2,t.position.set(0,-.05,-.2),s.add(t),t}const u_={core:"#FFD54F",mid:"#FFC107",glow:"#FFEB3B",particle:"#FFFDE7",shell:"#FF8F00",ribbon:"#FFFFFF"};function d_(s,t,e){const n=wr("pickup",u_);return n.group.position.set(t,.35,e),n.group.scale.setScalar(1.25),n.outerGlow&&(n.outerGlow.material.opacity=.55),s.add(n.group),{mesh:n.group,x:t,z:e,collected:!1,bobPhase:Math.random()*6,golden:!0}}function lc(s,t,e,n,i,r,a={}){const o=wr("mail",Ig);o.group.position.set(t+.35,1.05,e+.2);const l=o.core;l.material.emissiveIntensity=1.1,o.outerGlow&&(o.outerGlow.material.opacity=.35),s.add(o.group);const c=new D(n-t,0,i-e).normalize(),h=a.spreadIndex??0;if(h!==0){const f=h*.14,g=Math.cos(f),_=Math.sin(f),m=c.x*g-c.z*_,p=c.x*_+c.z*g;c.set(m,0,p)}const u=new D(c.x*28,2,c.z*28),d=h_(o.group);return{mesh:o.group,velocity:u,life:.85,damage:r,bobPhase:Math.random()*6,kind:"mail",pierceLeft:a.pierceLeft??0,homing:a.homing??!1,trail:d}}function cc(s,t,e,n=0,i=[],r=1){const a=[];for(const o of s){if(o.homing&&i.length){let l=null,c=1/0;for(const h of i){if(!h.alive)continue;const u=h.z-o.mesh.position.z;if(u<-2||u>45)continue;const d=(h.x-o.mesh.position.x)**2+u*u;d<c&&(c=d,l=h)}if(l){const h=new D(l.x-o.mesh.position.x,0,l.z-o.mesh.position.z);if(h.lengthSq()>.01){h.normalize().multiplyScalar(16*t*r),o.velocity.x+=h.x,o.velocity.z+=h.z;const u=Math.min(32,Math.hypot(o.velocity.x,o.velocity.z)),d=new D(o.velocity.x,0,o.velocity.z).normalize();o.velocity.x=d.x*u,o.velocity.z=d.z*u}}}o.life-=t,o.velocity.y-=o.kind==="mail"?8*t:28*t,o.mesh.position.addScaledVector(o.velocity,t),o.mesh.rotation.x+=t*(o.kind==="mail"?12:8),o.mesh.rotation.z+=t*(o.kind==="mail"?10:6),o.trail&&(o.trail.material.opacity=.35+Math.sin(n*20)*.15),xh(o.mesh,n+o.bobPhase,o.bobPhase,!1),o.life>0&&o.mesh.position.y>.1?a.push(o):(e.remove(o.mesh),yh(o.mesh))}return a}function hc(s,t){for(const e of s)t.remove(e.mesh),yh(e.mesh)}const mr=U?6:8,f_={grunt:["alien","monkey","frog"],raider:["bull","fox","cat"],boss:["bull","alien","frog"]};function p_(s,t,e=.08){return A(s,{emissive:t,emissiveIntensity:e,roughness:.92,metalness:0})}function uc(s,t,e,n,i,r){const a=new Pt;return a.position.set(t*.34*e,i,0),v(a,new ot(.07*e,.075*e,.22*e,mr),n,0,-.11*e,0),v(a,new ot(.065*e,.07*e,.18*e,mr),n,0,-.3*e,0),v(a,new L(.11*e,.08*e,.1*e),r??n,0,-.42*e,0),s.add(a),a}function dc(s,t,e,n,i){const r=new Pt;return r.position.set(t*.14*e,.02*e,0),v(r,new ot(.08*e,.085*e,.2*e,mr),n,0,-.1*e,0),v(r,new ot(.075*e,.08*e,.16*e,mr),n,0,-.28*e,0),v(r,new L(.14*e,.07*e,.2*e),i,0,-.4*e,.03*e),s.add(r),r}function fc(s,t,e){v(s,new L(.34*t*e,.2*t*e,.16*t*e),A("#D4B896",{roughness:.95}),0,-.06*t,.2*t)}function pc(s,t,e){const n=A("#0A0A0A",{emissive:e,emissiveIntensity:.35,roughness:1});for(const i of[-1,1]){const r=v(s,new L(.13*t,.17*t,.035*t),n,i*.11*t,.07*t,.24*t);r.rotation.z=i*.12,v(s,new L(.035*t,.035*t,.02*t),A("#FFFFFF",{roughness:1}),i*.14*t,.1*t,.27*t)}}function ds(s,t,e=.1){return v(s,new L(e*t,.025*t,.02*t),A("#1A1A1A",{roughness:1}),0,-.02*t,.28*t)}function m_(s,t,e,n){const i=n==="boss"?1.3:1;switch(e){case"alien":return fc(s,t,i),pc(s,t,"#76FF03"),ds(s,t);case"monkey":{v(s,new L(.36*t,.14*t,.12*t),A("#FFCC80",{roughness:.95}),0,-.04*t,.22*t);for(const r of[-1,1])v(s,new L(.12*t,.08*t,.04*t),A("#3E2723",{roughness:1}),r*.11*t,.12*t,.25*t),v(s,new L(.08*t,.06*t,.03*t),A("#FFFFFF"),r*.11*t,.1*t,.27*t);return ds(s,t,.08)}case"bull":{fc(s,t,i*.9),v(s,new L(.4*t,.09*t,.06*t),A("#212121",{emissive:"#000",emissiveIntensity:.2,roughness:.7}),0,.08*t,.26*t);for(const r of[-1,1]){const a=v(s,new L(.08*t,.22*t,.08*t),A("#ECEFF1"),r*.2*t,.48*t,0);a.rotation.z=r*-.35}return ds(s,t,.09)}case"cat":{v(s,new L(.32*t,.12*t,.1*t),A("#ECEFF1",{roughness:.95}),0,-.03*t,.22*t);for(const r of[-1,1]){const a=v(s,new L(.1*t,.12*t,.06*t),A("#78909C"),r*.18*t,.42*t,0);a.rotation.z=r*.25,v(s,new L(.09*t,.11*t,.03*t),A("#FFEB3B",{emissive:"#FBC02D",emissiveIntensity:.25}),r*.11*t,.08*t,.25*t),v(s,new L(.02*t,.07*t,.02*t),A("#111"),r*.11*t,.08*t,.27*t)}return ds(s,t,.06)}case"fox":{v(s,new L(.34*t,.16*t,.14*t),A("#FFF3E0",{roughness:.95}),0,-.05*t,.21*t),pc(s,t,"#FF7043");for(const r of[-1,1]){const a=v(s,new L(.1*t,.14*t,.05*t),A("#FF7043"),r*.2*t,.44*t,-.02*t);a.rotation.z=r*.3}return v(s,new L(.05*t,.05*t,.03*t),A("#212121"),0,-.01*t,.29*t),ds(s,t,.07)}case"frog":{for(const r of[-1,1])v(s,new L(.14*t,.14*t,.12*t),A("#FFFFFF",{roughness:1}),r*.13*t,.38*t,.02*t),v(s,new L(.07*t,.07*t,.04*t),A("#111"),r*.13*t,.38*t,.09*t);return v(s,new L(.22*t,.08*t,.08*t),A("#388E3C",{roughness:.9}),0,-.04*t,.24*t),v(s,new L(.16*t,.04*t,.03*t),A("#2E7D32"),0,-.06*t,.28*t)}}}function g_(s){switch(s){case"monkey":return{skin:"#FF9800",emissive:"#F57C00",belly:"#FFF8E1",shoe:"#5D4037",paw:"#FFCC80"};case"bull":return{skin:"#795548",emissive:"#FF1744",shoe:"#3E2723"};case"cat":return{skin:"#90A4AE",emissive:"#FFC107",belly:"#ECEFF1",shoe:"#FFFFFF",paw:"#FFFFFF"};case"fox":return{skin:"#FF7043",emissive:"#FF5722",belly:"#FFF3E0",shoe:"#FFFFFF",paw:"#FFFFFF"};case"frog":return{skin:"#66BB6A",emissive:"#00E676",belly:"#A5D6A7",shoe:"#33691E"};default:return{skin:"#B8E986",emissive:"#76FF03",belly:"#E8F5C8",shoe:"#2E2E2E"}}}function v_(s,t,e,n,i){if(e==="grunt"&&n==="alien"&&v(s,new L(.18*t,.2*t,.14*t),A("#FF8F00",{emissive:"#FF6F00",emissiveIntensity:.25}),-.32*t,.48*t,-.06*t),e==="raider"&&(v(s,new L(.05*t,.05*t,.42*t),A("#00E5FF",{emissive:"#00B0FF",emissiveIntensity:.9}),.36*t,.38*t,.12*t),n==="bull"&&v(i,new L(.44*t,.1*t,.06*t),A("#E53935",{emissive:"#B71C1C",emissiveIntensity:.35}),0,.22*t,.24*t)),e==="boss"){for(const r of[-1,0,1])v(i,new L(.08*t,.14*t,.08*t),A("#FFD54F",{emissive:"#FFA000",emissiveIntensity:.5,metalness:.3}),r*.12*t,.48*t,0);v(s,new L(.62*t,.48*t,.06*t),A("#4A148C",{emissive:"#311B92",emissiveIntensity:.15,roughness:.9}),0,.44*t,-.18*t)}}function __(s,t,e="grunt"){const n=new Pt,i=g_(s),r=p_(i.skin,i.emissive,e==="boss"?.16:.1),a=A(i.shoe,{roughness:.9}),o=i.paw?A(i.paw,{roughness:.92}):r;v(n,new L(.46*t,.44*t,.3*t),r,0,.42*t,0),i.belly&&v(n,new L(.38*t,.28*t,.08*t),A(i.belly,{roughness:.95}),0,.38*t,.14*t);const l=new Pt;l.position.y=.72*t,n.add(l),v(l,new L(.48*t,.46*t,.42*t),r,0,.2*t,0);const c=m_(l,t,s,e);v_(n,t,e,s,l);const h={leftArm:uc(n,-1,t,r,.58*t,o),rightArm:uc(n,1,t,r,.58*t,o),leftLeg:dc(n,-1,t,r,a),rightLeg:dc(n,1,t,r,a),mouth:c,head:l};return n.userData={limbs:h,bobPhase:Math.random()*6,species:s},n}function x_(s){const t=f_[s];return t[Math.floor(Math.random()*t.length)]}function y_(s,t,e){const n=s.userData;if(!(n!=null&&n.limbs))return;const{limbs:i,bobPhase:r,species:a}=n,o=t*11+r,l=.65,c=a==="frog"?1.25:1;i.leftArm.rotation.x=Math.sin(o)*l,i.rightArm.rotation.x=-Math.sin(o)*l,i.leftLeg.rotation.x=-Math.sin(o)*l*.75,i.rightLeg.rotation.x=Math.sin(o)*l*.75,i.head&&(i.head.rotation.y=Math.sin(t*2.2+r)*.18),i.mouth&&e&&(i.mouth.scale.y=1+Math.abs(Math.sin(t*9+r))*(a==="frog"?.5:.35)),s.position.y=Math.abs(Math.sin(t*9+r))*(.09*c)}const M_={grunt:{scale:1.02,emissive:"#76FF03",speed:10,hp:1,label:"Grunt"},raider:{scale:1.14,emissive:"#FFC107",speed:14,hp:2,label:"Raider"},stalker:{scale:1.28,emissive:"#FF1744",speed:19,hp:3,label:"Stalker"}},b_={grunt:"grunt",raider:"raider",stalker:"boss"};function fa(s,t,e,n,i={}){const r=M_[t],a=!!i.elite,o=!!i.boss,l=o?1.5:a?1.22:1,c=b_[t],h=x_(c),u=new Pt;u.position.set(e,0,n);const d=__(h,r.scale*l,c);d.rotation.y=Math.PI,u.add(d);const f=.44*r.scale*l,g=v(u,new Re(f,U?10:14),new Dt({color:"#101018",transparent:!0,opacity:.28,depthWrite:!1}),0,.02,0,!1);g.rotation.x=-Math.PI/2,g.scale.set(1.15,1,.82);let _;(a||o)&&(_=v(u,new qe(f*.88,f*1.02,U?12:18),new Dt({color:o?"#9A7B2F":"#6B5B45",transparent:!0,opacity:o?.2:.12,side:he,depthWrite:!1}),0,.025,0,!1),_.rotation.x=-Math.PI/2);const m=.55*r.scale*l*2.2,p=v(u,new wt(.07*l,U?6:8,U?6:8),new Dt({color:"#CC4444",transparent:!0,opacity:t==="grunt"?0:.22,depthWrite:!1}),0,m,.06*l,!1);p.visible=t!=="grunt",s.add(u);let M=r.hp+(a?1:0);return o&&(M=8),{mesh:u,x:e,z:n,tier:t,species:h,hp:M,maxHp:M,speed:r.speed*(o?.85:1),baseSpeed:r.speed*(o?.85:1),alive:!0,footShadow:g,eliteRing:_,weakPoint:p,elite:a,isBoss:o,telegraph:0,telegraphT:0}}function S_(s,t,e,n,i,r,a=0){for(const o of s){if(!o.alive)continue;const l=o.z-i,c=Qn(o.z,i,U?60:85);if(o.mesh.visible=c,!c)continue;o.tier==="stalker"&&l>2.5&&l<22&&o.telegraph===0&&(o.telegraph=1,o.telegraphT=0,r==null||r(o));let h=o.baseSpeed;const u=o.footShadow.material;if(o.telegraph===1){if(o.telegraphT+=t,h=o.baseSpeed*.35,u.color.set("#4a1520"),u.opacity=.34+Math.sin(e*16)*.1,o.eliteRing){const f=o.eliteRing.material;f.color.set("#8B3030"),f.opacity=.28+Math.sin(e*16)*.08}o.telegraphT>=.55&&(o.telegraph=2,o.telegraphT=0)}else if(o.telegraph===2)o.telegraphT+=t,h=o.baseSpeed*2.4,u.color.set("#101018"),u.opacity=.32,o.telegraphT>=.45&&(o.telegraph=0);else if(u.color.set("#101018"),u.opacity=.24+(o.elite||o.isBoss?.06:0),o.eliteRing){const f=o.eliteRing.material;f.color.set(o.isBoss?"#9A7B2F":"#6B5B45"),f.opacity=(o.isBoss?.18:.1)+Math.sin(e*3+o.z)*.04}o.z-=h*t*n,o.mesh.position.set(o.x,0,o.z);const d=o.mesh.children[0];if(d&&(y_(d,e+o.x,!0),o.telegraph===1?d.scale.setScalar(1+Math.sin(e*20)*.06):d.scale.setScalar(1),d.rotation.y=Math.PI+(U?0:Math.sin(e*3+o.x)*.08)),o.weakPoint.visible){const f=o.weakPoint.material;f.opacity=o.telegraph===1?.38:.16+Math.sin(e*6+o.x)*.06}d&&d.traverse(f=>{if(!(f instanceof se)||!(f.material instanceof ye))return;f.userData.baseEmissiveIntensity===void 0&&(f.userData.baseEmissiveIntensity=f.material.emissiveIntensity);const g=f.userData.baseEmissiveIntensity;a>.08&&!f.material.transparent?(f.material.emissive.set("#FFF3E0"),f.material.emissiveIntensity=g+a*.18):f.material.emissiveIntensity=g})}}function mc(s){const t=Math.random();return s>=7&&t<.25?"stalker":s>=4&&t<.45?"raider":"grunt"}function w_(s){return s==="stalker"?1.18:s==="raider"?1.05:.95}function E_(s,t){if(t.tier==="grunt")return!1;const e=t.weakPoint.position.y;return s>=e-.12}function pa(s,t){t.remove(s.mesh),Xe(s.mesh),s.alive=!1}function gc(s,t){for(const e of s)t.remove(e.mesh),Xe(e.mesh)}const ma=[{root:262,scale:[0,2,4,7,9],melody:[0,2,4,2,0,4,7,4,2,0,4,2,0,9,7,4],bass:[0,0,7,7,4,4,7,0],lead:"triangle",bpm:128},{root:247,scale:[0,2,3,7,9],melody:[4,2,0,2,4,7,9,7,4,2,0,2,4,7,4,2],bass:[0,4,0,7,4,0,7,4],lead:"square",bpm:132},{root:220,scale:[0,3,5,7,10],melody:[0,3,5,3,0,5,10,5,3,0,5,3,0,10,7,5],bass:[0,0,5,5,3,3,5,0],lead:"sawtooth",bpm:126},{root:196,scale:[0,3,5,8,10],melody:[0,5,8,5,3,0,5,10,8,5,3,0,5,8,10,8],bass:[0,5,3,0,5,8,5,3],lead:"sawtooth",bpm:124}];class T_{constructor(){F(this,"ctx",null);F(this,"masterGain",null);F(this,"sfxGain",null);F(this,"musicGain",null);F(this,"master",U?.38:.44);F(this,"musicVol",U?.11:.13);F(this,"districtId",1);F(this,"night",0);F(this,"combatLayer",0);F(this,"unlocked",!1);F(this,"musicPlaying",!1);F(this,"musicTimer",null);F(this,"step",0);F(this,"nextNoteTime",0);F(this,"themeIdx",0)}ensure(){var t;if(!this.unlocked){this.unlocked=!0;try{this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.master,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=1,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicVol,this.musicGain.connect(this.masterGain)}catch{return null}}return((t=this.ctx)==null?void 0:t.state)==="suspended"&&this.ctx.resume(),this.ctx}freqFromScale(t,e,n=0){const i=t.scale[(e%t.scale.length+t.scale.length)%t.scale.length]??0;return t.root*Math.pow(2,(i+n*12)/12)}toneAt(t,e,n,i,r,a,o=0,l){const c=this.ctx;if(!c)return;const h=c.createOscillator(),u=c.createGain();if(h.type=i,h.frequency.setValueAtTime(t,e),o&&h.frequency.linearRampToValueAtTime(Math.max(20,t+o),e+n),u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(Math.max(1e-4,r),e+.008),u.gain.exponentialRampToValueAtTime(1e-4,e+n),l){const d=c.createBiquadFilter();d.type="lowpass",d.frequency.value=l,h.connect(d),d.connect(u)}else h.connect(u);u.connect(a),h.start(e),h.stop(e+n+.03)}noiseAt(t,e,n,i,r=0){const a=this.ctx;if(!a)return;const o=Math.max(1,Math.floor(a.sampleRate*e)),l=a.createBuffer(1,o,a.sampleRate),c=l.getChannelData(0);for(let d=0;d<o;d++)c[d]=(Math.random()*2-1)*(1-d/o);const h=a.createBufferSource();h.buffer=l;const u=a.createGain();if(u.gain.setValueAtTime(n,t),u.gain.exponentialRampToValueAtTime(1e-4,t+e),r>0){const d=a.createBiquadFilter();d.type="highpass",d.frequency.value=r,h.connect(d),d.connect(u)}else h.connect(u);u.connect(i),h.start(t),h.stop(t+e+.02)}tone(t,e,n="square",i=.12,r=0,a){const o=this.ensure();!o||!this.sfxGain||this.toneAt(t,o.currentTime,e,n,i,this.sfxGain,r,a)}noise(t,e=.06,n=0){const i=this.ensure();!i||!this.sfxGain||this.noiseAt(i.currentTime,t,e,this.sfxGain,n)}setDistrict(t){this.districtId=t,this.themeIdx=Math.min(Math.max(0,t-1),ma.length-1),this.refreshMusic()}setNight(t){Math.abs(t-this.night)<.1||(this.night=t)}setCombatIntensity(t){this.combatLayer=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=this.musicVol*(.85+this.combatLayer*.35))}refreshMusic(){this.stopMusic();const t=this.ensure();t&&(this.musicPlaying=!0,this.step=0,this.nextNoteTime=t.currentTime+.08,this.scheduleMusic())}scheduleMusic(){if(!this.musicPlaying)return;const t=this.ctx,e=this.musicGain;if(!t||!e)return;const n=ma[this.themeIdx]??ma[0],i=60/n.bpm/4,r=.18,a=this.night*.55,o=2400-a*900+this.combatLayer*400;for(;this.nextNoteTime<t.currentTime+r;){const l=this.step,c=this.nextNoteTime,h=l%16;h%4===0&&(this.toneAt(55+(h===0?8:0),c,.09,"sine",.22,e,-18),this.noiseAt(c,.03,.06,e,120)),(h===4||h===12)&&(this.noiseAt(c,.07,.09,e,800),this.toneAt(180,c,.05,"triangle",.05,e,-40)),this.combatLayer>.15&&l%2===1&&this.noiseAt(c,.025,.035*(.5+this.combatLayer),e,6e3);const u=Math.floor(l/2)%n.bass.length,d=n.bass[u]??0,f=n.root*Math.pow(2,(d-12)/12);l%2===0&&this.toneAt(f,c,i*1.8,"triangle",.1,e);const g=l%n.melody.length,_=n.melody[g]??0,m=_>=7?1:0,p=this.freqFromScale(n,_,m),M=.045+(1-a)*.02+this.combatLayer*.012;if(l%1===0&&g%2===0&&this.toneAt(p,c,i*.9,n.lead,M,e,0,o),l%8===0){const x=this.freqFromScale(n,n.melody[g]??0,1);this.toneAt(x,c,i*6,"sine",.018,e,0,900)}this.nextNoteTime+=i,this.step++}this.musicTimer=window.setTimeout(()=>this.scheduleMusic(),28)}stopMusic(){this.musicPlaying=!1,this.musicTimer!==null&&(clearTimeout(this.musicTimer),this.musicTimer=null)}shootMail(){this.tone(920,.05,"square",.07,-280,3200),this.tone(640,.07,"sine",.05,-120,2400),this.noise(.035,.04,900)}shootPackage(){this.tone(280,.12,"triangle",.09,120),this.noise(.06,.05,200)}alienHit(){this.tone(160+Math.random()*30,.07,"sawtooth",.08,-80,1800),this.noise(.04,.05)}alienKill(){this.tone(520,.06,"square",.09),this.tone(780,.09,"triangle",.07,180),this.noise(.05,.04,400)}headshot(){this.tone(1200,.04,"square",.1),this.tone(880,.07,"triangle",.08,-350),this.tone(660,.1,"sine",.06,-200,4e3)}combo(t){this.tone(440+t*35,.06,"triangle",.08)}comboStinger(){const t=this.ensure();if(!t||!this.sfxGain)return;const e=t.currentTime;[523,659,784,988].forEach((i,r)=>{this.toneAt(i,e+r*.07,.1+r*.02,"triangle",.09-r*.01,this.sfxGain,r===3?100:0,5e3)})}jump(){this.tone(280,.1,"sine",.06,220,1800),this.noise(.05,.035,300)}slide(){this.noise(.12,.07,250),this.tone(120,.1,"sawtooth",.04,-30,600)}coin(t=1){const e=880+Math.min(t,5)*40;this.tone(e,.05,"sine",.07),this.tone(e*1.5,.04,"triangle",.04)}pickup(){this.tone(660,.06,"triangle",.07),this.tone(880,.08,"sine",.06,60)}powerUp(){[523,659,784,988].forEach((t,e)=>{window.setTimeout(()=>this.tone(t,.08,"triangle",.07),e*55)})}hurt(){this.tone(90,.18,"sawtooth",.1,-25),this.tone(140,.12,"square",.07,-40),this.noise(.08,.08)}gatePass(){this.tone(660,.1,"triangle",.07),this.tone(880,.12,"sine",.06)}vaultBuzz(){this.tone(140,.14,"sawtooth",.07,30),this.tone(210,.1,"square",.05,-20)}delivery(){const t=this.ensure();if(!t||!this.sfxGain)return;const e=t.currentTime;[523,659,784,1047].forEach((n,i)=>{this.toneAt(n,e+i*.12,.2,"triangle",.1,this.sfxGain,i===3?80:0,6e3)}),this.noiseAt(e+.45,.15,.05,this.sfxGain,500)}gameOver(){const t=this.ensure();if(!t||!this.sfxGain)return;const e=t.currentTime;[392,330,262,196].forEach((n,i)=>{this.toneAt(n,e+i*.14,.22,"sawtooth",.09,this.sfxGain,-30,1200)}),this.stopMusic()}alienChatter(){Math.random()>.35||this.tone(80+Math.random()*60,.04+Math.random()*.05,"sawtooth",.04,Math.random()*40-20)}telegraphWarn(){this.tone(220,.1,"sawtooth",.05,35),this.tone(180,.08,"triangle",.04)}honk(){this.tone(196,.18,"square",.09),this.tone(247,.14,"square",.07)}ufoBeam(){this.tone(110,.28,"sawtooth",.07,45),this.noise(.2,.06,200),this.tone(880,.1,"sine",.05,-200,3e3)}nearMiss(){this.tone(620,.05,"sine",.06,140),this.noise(.03,.03,2e3)}eliteSpawn(){this.tone(880,.1,"triangle",.08),this.tone(1100,.14,"triangle",.07,80),this.noise(.06,.04,500)}quake(){this.noise(.3,.14),this.tone(55,.35,"sawtooth",.11,-25),this.tone(82,.25,"sine",.07,-15)}turbo(){this.tone(220,.2,"sawtooth",.07,180),this.noise(.12,.05,400)}spectacle(t){this.noise(.14,.05+this.combatLayer*.04),t==="orbital-flash"?(this.tone(55,.35,"sawtooth",.09,-18),this.tone(110,.2,"sine",.05,40)):t==="dogfight"?(this.tone(220,.08,"square",.06),this.tone(180,.1,"square",.05,-30)):this.tone(130+Math.random()*50,.12,"sawtooth",.05,Math.random()*30)}dispose(){var t;this.stopMusic(),(t=this.ctx)==null||t.close(),this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null}}const Vt=new T_;class A_{constructor(t){F(this,"group",new Pt);F(this,"ufo");F(this,"groundSpot");F(this,"beam");F(this,"ring");F(this,"phase","idle");F(this,"beamX",0);F(this,"beamZ",0);F(this,"timer",0);F(this,"scanDir",1);F(this,"ufoOffsetX",0);F(this,"exposure",0);F(this,"warned",!1);this.scene=t,this.ufo=this.buildUfo(),this.group.add(this.ufo);const e=U?20:28;this.groundSpot=v(this.group,new Re(1.05,e),new Dt({color:"#69F0AE",transparent:!0,opacity:.55,blending:Yt,depthWrite:!1}),0,.04,0,!1),this.groundSpot.rotation.x=-Math.PI/2,this.groundSpot.scale.set(1.15,1.15,1),this.ring=v(this.group,new qe(.92,1.18,e),new Dt({color:"#B2FF59",transparent:!0,opacity:.42,blending:Yt,depthWrite:!1,side:he}),0,.045,0,!1),this.ring.rotation.x=-Math.PI/2,this.beam=v(this.group,new ot(.08,1.05,14,e,1,!0),new Dt({color:"#80DEEA",transparent:!0,opacity:.28,side:he,depthWrite:!1,blending:Yt}),0,7,0,!1),this.group.visible=!1,t.add(this.group)}buildUfo(){const t=new Pt,e=U?10:14;v(t,new ot(.65,1.05,.16,e),new ye({color:"#546E7A",metalness:.65,roughness:.3,emissive:"#00E676",emissiveIntensity:.35}),0,0,0),v(t,new Ye(.88,.04,6,e),new Dt({color:"#69F0AE",transparent:!0,opacity:.85}),0,-.05,0,!1),v(t,new wt(.34,e,e/2,0,Math.PI*2,0,Math.PI/2),new Dt({color:"#80DEEA",transparent:!0,opacity:.65,blending:Yt,depthWrite:!1}),0,.14,0,!1);for(let n=0;n<6;n++){const i=n/6*Math.PI*2;v(t,new wt(.05,6,6),new Dt({color:n%2===0?"#FFEB3B":"#FF5252",transparent:!0,opacity:.9}),Math.cos(i)*.78,-.02,Math.sin(i)*.78,!1)}return t}get active(){return this.phase!=="idle"}start(t,e){this.phase="incoming",this.timer=0,this.exposure=0,this.warned=!1,this.beamZ=e+42,this.beamX=Gi.clamp(t,-2.5,2.5),this.scanDir=Math.random()<.5?1:-1,this.ufoOffsetX=this.scanDir>0?-14:14,this.group.visible=!0,this.syncPose(0)}syncPose(t){const e=this.beamX+this.ufoOffsetX*(this.phase==="incoming"?1:this.phase==="exit"?1.4:.15),n=14+Math.sin(t*2.2)*.35;this.ufo.position.set(e,n,this.beamZ),this.ufo.rotation.y=t*1.8,this.groundSpot.position.set(this.beamX,.04,this.beamZ),this.ring.position.set(this.beamX,.045,this.beamZ),this.beam.position.set(this.beamX,7,this.beamZ);const i=1+Math.sin(t*8)*.08;this.groundSpot.scale.set(1.15*i,1.15*i,1),this.groundSpot.material.opacity=.4+Math.sin(t*6)*.12,this.ring.material.opacity=.32+Math.sin(t*5+1)*.1,this.ring.rotation.z=t*2.4,this.beam.material.opacity=.22+Math.sin(t*7)*.08}update(t,e,n){if(this.phase!=="idle"){if(this.timer+=t,this.phase==="incoming")this.ufoOffsetX=Gi.lerp(this.ufoOffsetX,0,t*1.8),this.timer>=1.6&&(this.phase="scanning",this.timer=0);else if(this.phase==="scanning")this.beamX+=this.scanDir*t*4.2,this.beamX>3.4?(this.beamX=3.4,this.scanDir=-1):this.beamX<-3.4&&(this.beamX=-3.4,this.scanDir=1),this.timer>=4.8&&(this.phase="exit",this.timer=0);else if(this.phase==="exit"&&(this.ufoOffsetX=Gi.lerp(this.ufoOffsetX,this.scanDir*18,t*2.5),this.timer>=1.4)){this.end();return}if(Math.abs(this.beamZ-n)>(U?75:95)){this.end();return}this.syncPose(e)}}consumeWarning(){return this.warned||this.phase!=="scanning"||this.timer>.35?!1:(this.warned=!0,!0)}tickExposure(t,e,n,i){if(this.phase!=="scanning")return this.exposure=0,!1;if(i)return this.exposure=Math.max(0,this.exposure-t*4),!1;const r=Math.abs(n-this.beamZ)<2.2,a=Math.abs(e-this.beamX)<1.05;return r&&a?(this.exposure+=t,this.exposure>=.55):(this.exposure=Math.max(0,this.exposure-t*2.5),!1)}getExposure(){return this.exposure}end(){this.phase="idle",this.group.visible=!1,this.exposure=0}dispose(){this.scene.remove(this.group),Xe(this.group)}}const C_={slowmo:{core:"#80DEEA",mid:"#00BCD4",glow:"#00E5FF",particle:"#E0F7FA",shell:"#4DD0E1",bad:!1},fastshot:{core:"#FFEB3B",mid:"#FF9800",glow:"#FF6D00",particle:"#FFD54F",shell:"#FF5722",bad:!1},invincible:{core:"#E1F5FE",mid:"#29B6F6",glow:"#00B0FF",particle:"#FFFFFF",shell:"#0288D1",bad:!1},health:{core:"#A5D6A7",mid:"#43A047",glow:"#00E676",particle:"#C8E6C9",shell:"#2E7D32",bad:!1},turbo:{core:"#FF8A65",mid:"#FF3D00",glow:"#FF1744",particle:"#FFAB91",shell:"#D50000",bad:!0},blur:{core:"#CE93D8",mid:"#7B1FA2",glow:"#E040FB",particle:"#4A148C",shell:"#311B92",bad:!0}},Bi=U?10:14,vc=U?4:6;function Ze(s,t,e=1){return A(s,{emissive:s,emissiveIntensity:t,transparent:e<1,opacity:e,roughness:.15,metalness:.05})}function _c(s,t){return new Dt({color:s,transparent:!0,opacity:t,depthWrite:!1,blending:Yt})}function R_(s,t,e){const n=new Pt;n.userData.orbit=e;for(let i=0;i<vc;i++){const r=i/vc*Math.PI*2,a=v(n,new wt(.045+i%3*.015,6,6),Ze(t,1.4,.92),Math.cos(r)*e,Math.sin(i*1.7)*.08,Math.sin(r)*e,!1);a.userData.angle=r,a.userData.orbit=e,a.userData.wobble=i*1.3}return s.add(n),n}function P_(s,t,e){const n=new Pt;if(n.position.y=.55,t==="slowmo")for(const[i,r]of[[0,.28],[.12,.22],[-.1,.24]]){const a=v(n,new Ye(r,.025,6,U?12:16),Ze(e.glow,.9,.75),0,i,0,!1);a.rotation.x=Math.PI/2+i*.4,a.rotation.z=i*2}else if(t==="fastshot")for(let i=0;i<5;i++){const r=i/5*Math.PI*2,a=v(n,new sn(.07,.22,4),Ze(e.glow,1.1),Math.cos(r)*.18,Math.sin(i)*.04,Math.sin(r)*.18,!1);a.rotation.x=Math.PI/2,a.rotation.z=r}else if(t==="invincible"){for(let i=0;i<4;i++){const r=v(n,new L(.04,.34,.04),Ze("#FFFFFF",1.5),0,0,0,!1);r.rotation.z=i/4*Math.PI*2,r.rotation.x=.5+i*.2,r.position.set(Math.cos(r.rotation.z)*.08,Math.sin(i)*.06,Math.sin(r.rotation.z)*.08)}v(n,new As(.12,0),Ze(e.particle,1.3),0,0,0,!1)}else if(t==="health"){for(let i=0;i<4;i++){const r=i/4*Math.PI*2+.4,a=v(n,new wt(.1,6,6),Ze(e.mid,1),Math.cos(r)*.3,-.08+Math.sin(i)*.05,Math.sin(r)*.3,!1);a.scale.set(1.4,.45,.8),a.rotation.y=r}v(n,new wt(.14,8,8),Ze("#FFFFFF",.8),0,.02,.08,!1)}else if(t==="turbo"){for(let i=0;i<6;i++){const r=i/6*Math.PI*2,a=v(n,new sn(.06,.28,3),Ze("#FF1744",1.2),Math.cos(r)*.2,0,Math.sin(r)*.2,!1);a.rotation.x=Math.PI/2,a.rotation.z=r+Math.PI}v(n,new L(.28,.06,.06),A("#212121",{emissive:"#FF1744",emissiveIntensity:.4}),0,.18,0,!1)}else{v(n,new wt(.16,8,8),Ze(e.particle,.7,.55),0,0,0,!1),v(n,new wt(.22,8,8),Ze(e.mid,.5,.35),0,0,0,!1);for(let i=0;i<3;i++){const r=i/3*Math.PI*2;v(n,new Ye(.12+i*.05,.018,6,10),Ze(e.glow,.85,.6),0,0,0,!1).rotation.set(Math.PI/2,r,0)}}return s.add(n),n}function xc(s,t,e,n){const i=C_[t],r=new Pt;r.position.set(e,0,n);const a=v(r,new qe(.42,.72,U?14:22),_c(i.glow,i.bad?.28:.38),0,.04,0,!1);a.rotation.x=-Math.PI/2,r.userData.groundRing=a;const o=v(r,new wt(.52,Bi,Bi),_c(i.glow,i.bad?.14:.2),0,.55,0,!1);r.userData.outerGlow=o;const l=v(r,new wt(.4,Bi,Bi),Ze(i.shell,.55,.42),0,.55,0,!1);r.userData.midShell=l;const c=v(r,new wt(.3,Bi,Bi),Ze(i.core,i.bad?1.15:1.35),0,.55,0,!1);return r.userData.core=c,v(r,new wt(.14,8,8),Ze("#FFFFFF",i.bad?.9:1.4,.85),0,.58,.1,!1),r.userData.particles=R_(r,i.particle,.48),r.userData.accent=P_(r,t,i),i.bad&&(v(r,new qe(.58,.66,U?12:16),new Dt({color:"#FF1744",transparent:!0,opacity:.45,side:he}),0,.55,0,!1).rotation.x=Math.PI/2),s.add(r),{mesh:r,x:e,z:n,kind:t,collected:!1,bobPhase:Math.random()*6,isBad:i.bad}}function F_(s,t,e){for(const n of s){if(n.collected||!Qn(n.z,e,U?48:62))continue;const i=.52+Math.sin(t*3+n.bobPhase)*.12;n.mesh.position.y=i-.52,n.mesh.rotation.y=t*1.6;const r=n.mesh.userData.core,a=n.mesh.userData.outerGlow,o=n.mesh.userData.midShell,l=n.mesh.userData.groundRing,c=n.mesh.userData.particles,h=n.mesh.userData.accent,u=1+Math.sin(t*4.5+n.bobPhase)*.06;if(r&&r.scale.setScalar(u),a){const d=1+Math.sin(t*3.2+n.bobPhase)*.1;a.scale.setScalar(d);const f=a.material;f.opacity=(n.isBad?.14:.2)+Math.sin(t*5+n.bobPhase)*.04}o&&(o.rotation.y=-t*2.4),l&&l.scale.setScalar(1+Math.sin(t*4+n.bobPhase)*.07),h&&(h.rotation.y=t*2.8),c&&(c.rotation.y=t*1.8,c.children.forEach((d,f)=>{if(!(d instanceof se))return;const g=d.userData.angle+t*(1.2+f%3*.15),_=d.userData.orbit;d.position.x=Math.cos(g)*_,d.position.z=Math.sin(g)*_,d.position.y=Math.sin(t*4+d.userData.wobble)*.1}))}}function D_(s,t,e,n){for(const i of s){if(i.collected)continue;const r=i.x-t,a=i.z-e;if(r*r+a*a<n*n)return i.collected=!0,i.mesh.visible=!1,i.kind}return null}function yc(){const s=Math.random();return s<.08?"health":s<.15?"turbo":s<.22?"blur":s<.28?"slowmo":s<.64?"fastshot":"invincible"}function Mc(s,t){for(const e of s)t.remove(e.mesh),Xe(e.mesh)}const L_={slowmo:"Slow-Mo!",fastshot:"Fast Shot!",invincible:"Invincible!",health:"❤ +1 Health!",turbo:"⚠ Overdrive — too fast!",blur:"⚠ Ghosted — hard to see!"},Ms=[-3.2,-1.6,0,1.6,3.2];function pi(){return Ms[Math.floor(Math.random()*Ms.length)]}function I_(){const s=Math.floor(Math.random()*(Ms.length-1));return[Ms[s],Ms[s+1]]}let ga=!1;function U_(s){const t=s>=6?.12:s>=4?.08:s>=2?.05:.02,e=s>=5?.16:s>=3?.11:.06,n=s>=3?.2:s>=2?.14:.08;ga=!ga;const i=s<2||ga?"jump":"slide",r=Math.random();return r<t?{span:"full",clearance:Math.random()<.55?"jump":"slide",motion:"sweep"}:r<t+e?{span:"full",clearance:i,motion:"static"}:r<t+e+n?{span:"lane-2",clearance:i,motion:"static",lanes:I_()}:{span:"lane-1",clearance:s<3&&Math.random()<.75?"jump":i,motion:"static",lanes:[pi()]}}function N_(s){const t=Math.max(20,32-s*1);return U?t+8:t}function B_(){if(Math.random()<(U?.06:.12)){const s=new Set,t=[];for(;t.length<2;){const e=pi();s.has(e)||(s.add(e),t.push(e))}return t}return[pi()]}function k_(s){return bv(s)}function z_(s){const t=Math.max(32,48-s*.85);return U?t+14:t}function O_(s){return Math.max(11,22-s*1.35)}function H_(){return 32+Math.random()*22}function G_(){return 22+Math.random()*18}const V_=U?28:48,va=new L(.1,.1,.1),bc=new ie(.14,.04);class W_{constructor(t){F(this,"particles",[]);F(this,"scene");F(this,"materials",new Map);this.scene=t;for(let e=0;e<V_;e++){const n=this.getMaterial("#ffffff"),i=new se(va,n);i.visible=!1,this.scene.add(i),this.particles.push({mesh:i,vel:new D,life:0,maxLife:1,active:!1})}}getMaterial(t,e=!0){const n=`${t}|${e?1:0}`;let i=this.materials.get(n);return i||(i=new Dt({color:t,transparent:!0,blending:e?Yt:jn,depthWrite:!1}),this.materials.set(n,i)),i}burst(t,e,n,i,r=12,a=4){const o=U?Math.min(r,10):r;let l=0;for(const c of this.particles){if(l>=o)break;c.active||(c.active=!0,c.mesh.visible=!0,c.mesh.geometry=va,c.mesh.material=this.getMaterial(i),c.mesh.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),c.mesh.position.set(t,e,n),c.mesh.scale.setScalar(.8+Math.random()*.6),c.vel.set((Math.random()-.5)*a,Math.random()*a*.85+1.2,(Math.random()-.5)*a),c.maxLife=.55+Math.random()*.45,c.life=c.maxLife,l++)}}sparkStreak(t,e,n,i,r=4){let a=0;const o=U?3:r;for(const l of this.particles){if(a>=o)break;l.active||(l.active=!0,l.mesh.visible=!0,l.mesh.geometry=bc,l.mesh.material=this.getMaterial(i),l.mesh.position.set(t+(Math.random()-.5)*.4,e,n+(Math.random()-.5)*.4),l.mesh.rotation.y=Math.random()*Math.PI*2,l.mesh.rotation.z=(Math.random()-.5)*.8,l.mesh.scale.setScalar(1.2+Math.random()),l.vel.set(0,.5+Math.random(),-2-Math.random()*2),l.maxLife=.25+Math.random()*.2,l.life=l.maxLife,a++)}}collectBurst(t,e){this.burst(t,1,e,"#FFE082",8,3.5),this.sparkStreak(t,1.1,e,"#FFD54F",3),U||this.burst(t,1.2,e,"#FF9800",5,2.5)}hitBurst(t,e){this.burst(t,1,e,"#FF5252",U?8:12,5.5),this.sparkStreak(t,1,e,"#FF1744",4)}alienHit(t,e,n,i=!1){const r=i?"#EA80FC":"#76FF03";this.burst(t,e,n,r,U?6:10,i?6.5:4.5),this.sparkStreak(t,e,n,i?"#E040FB":"#B2FF59",i?5:3)}muzzleFlash(t,e,n){this.burst(t,e,n,"#00E5FF",U?4:6,3.5),this.sparkStreak(t,e,n,"#FFF59D",U?2:4)}gateBurst(t,e,n){this.burst(t,2,e,n,U?12:18,6.5),this.sparkStreak(t,2.2,e,n,U?2:5)}update(t){for(const e of this.particles){if(!e.active)continue;e.life-=t,e.vel.y-=14*t,e.mesh.position.addScaledVector(e.vel,t);const n=Math.max(0,e.life/e.maxLife);e.mesh.material.opacity=n,e.mesh.scale.multiplyScalar(.985),e.life<=0&&(e.active=!1,e.mesh.visible=!1)}}clear(){for(const t of this.particles)t.active=!1,t.mesh.visible=!1}dispose(){this.clear();for(const t of this.particles)this.scene.remove(t.mesh);va.dispose(),bc.dispose(),this.materials.forEach(t=>t.dispose()),this.materials.clear(),this.particles=[]}}class X_{constructor(){F(this,"intensity",0)}shake(t){this.intensity=Math.max(this.intensity,t)}apply(t,e,n){this.intensity>.001?(t.position.x=e.x+(Math.random()-.5)*this.intensity,t.position.y=e.y+(Math.random()-.5)*this.intensity*.5,t.position.z=e.z+(Math.random()-.5)*this.intensity*.3,this.intensity*=.88):t.position.copy(e),t.lookAt(n)}}const Eh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ns{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const q_=new So(-1,1,1,-1,0,1);class Y_ extends ze{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}}const $_=new Y_;class To{constructor(t){this._mesh=new se($_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,q_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Z_ extends ns{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=dr.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new To(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Sc extends ns{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class j_ extends ns{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class J_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Z_(Eh),this.copyPass.material.blending=kn,this.clock=new Id}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Sc!==void 0&&(a instanceof Sc?n=!0:a instanceof j_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class K_ extends ns{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new bt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Q_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ji extends ns{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new yn(r,a,{type:zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new yn(r,a,{type:zn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new yn(r,a,{type:zn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Q_;this.highPassUniforms=dr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Eh;this.copyUniforms=dr.clone(h.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new bt,this.oldClearAlpha=1,this.basic=new Dt,this.fsQuad=new To(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ji.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ji.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ji.BlurDirectionX=new at(1,0);Ji.BlurDirectionY=new at(0,1);class t1 extends ns{constructor(){super();F(this,"material");F(this,"fsQuad");this.material=new Ve({uniforms:{tDiffuse:{value:null},vignette:{value:U?.18:.38},aberration:{value:U?.0012:.0022},saturation:{value:U?1.06:1.12},pulse:{value:0}},vertexShader:`
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
      `}),this.fsQuad=new To(this.material)}setPulse(e){this.material.uniforms.pulse.value=e}render(e,n,i){this.material.uniforms.tDiffuse.value=i.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class e1{constructor(t,e,n){F(this,"composer");F(this,"bloomPass");F(this,"gradePass");this.renderer=t,this.composer=new J_(t),this.composer.addPass(new K_(e,n)),this.bloomPass=new Ji(new at(1,1),U?.34:.38,U?.32:.36,U?.85:.78),this.composer.addPass(this.bloomPass),this.gradePass=new t1,this.gradePass.renderToScreen=!0,this.composer.addPass(this.gradePass)}setSize(t,e){this.composer.setSize(t,e);const n=Math.max(1,Math.floor(t*zl)),i=Math.max(1,Math.floor(e*zl));this.bloomPass.resolution.set(n,i)}setBloomStrength(t){this.bloomPass.strength=t}setGradePulse(t){this.gradePass.setPulse(t)}render(){this.composer.render()}dispose(){this.gradePass.dispose(),this.composer.dispose()}}class n1{constructor(){F(this,"nextEventZ",55);F(this,"pulse",0);F(this,"combatIntensity",0);F(this,"active",null);F(this,"activeT",0)}reset(){this.nextEventZ=55+Math.random()*20,this.pulse=0,this.combatIntensity=0,this.active=null,this.activeT=0}getPostPulse(){return this.pulse}getCombatIntensity(){return this.combatIntensity}getActive(){return this.active}bumpCombat(t){this.combatIntensity=Math.min(1,this.combatIntensity+t),this.pulse=Math.min(1,this.pulse+t*.35)}update(t,e){if(this.combatIntensity=Math.max(0,this.combatIntensity-t*.08),this.pulse=Math.max(0,this.pulse-t*1.4),this.active&&(this.activeT-=t,this.activeT<=0&&(this.active=null)),e.playerZ<this.nextEventZ)return null;this.nextEventZ=e.playerZ+(U?26:22)+Math.random()*14;const n=this.pickEvent(e);return this.active=n,this.activeT=n.duration,this.pulse=Math.min(1,this.pulse+n.pulse),this.combatIntensity=Math.min(1,this.combatIntensity+n.pulse*.5),n}pickEvent(t){const e=Math.random();return t.night>.45&&e<.28?{kind:"orbital-flash",message:"☄ ORBITAL STRIKE — keep moving!",pulse:.55,duration:2.8}:e<.45?{kind:"dogfight",message:"✈ Jets vs UFOs overhead!",pulse:.35,duration:4}:e<.62?{kind:"meteor-streak",message:"🌠 Meteor shower!",pulse:.4,duration:3.2}:e<.78?{kind:"energy-surge",message:"⚡ Energy surge on the highway!",pulse:.45,duration:2.5}:t.runnerCount>=3&&e<.9?{kind:"alien-rain",message:"👾 Alien drop pods incoming!",pulse:.38,duration:2.2}:{kind:"distant-barrage",message:"💥 War zone ahead!",pulse:.42,duration:3}}}const Th="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content";function Ah(){const s=window.visualViewport;return s?{width:Math.max(1,Math.round(s.width)),height:Math.max(1,Math.round(s.height)),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,scale:s.scale}:{width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight),offsetTop:0,offsetLeft:0,scale:1}}const gr=new Set;function i1(s){return gr.add(s),()=>gr.delete(s)}function s1(){window.scrollTo(0,0);const s=window.visualViewport;if(!s||s.scale===1)return;const t=document.querySelector('meta[name="viewport"]');t&&t.setAttribute("content",Th)}function mi(){const s=Ah();if(!U)return s;s1(),window.scrollTo(0,0);const t=document.getElementById("app"),e=document.getElementById("game-canvas");if(!t)return s;const{width:n,height:i,offsetLeft:r,offsetTop:a}=s;return t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width=`${n}px`,t.style.height=`${i}px`,t.style.padding="0",t.style.margin="0",t.style.overflow="hidden",t.style.transform=`translate(${-r}px, ${-a}px)`,t.style.transformOrigin="top left",t.style.willChange="transform",e&&(e.style.width=`${n}px`,e.style.height=`${i}px`),s}function ki(){U&&mi(),gr.forEach(s=>s())}function r1(){const s=document.querySelector('meta[name="viewport"]');s&&s.setAttribute("content",Th),mi(),window.addEventListener("resize",ki),window.addEventListener("orientationchange",()=>{window.scrollTo(0,0),setTimeout(ki,50),setTimeout(ki,150),setTimeout(ki,400)}),window.visualViewport&&(window.visualViewport.addEventListener("resize",ki),window.visualViewport.addEventListener("scroll",ki))}function er(s){document.body.classList.toggle("game-active",s),s&&U&&(mi(),requestAnimationFrame(()=>{mi(),gr.forEach(t=>t())}))}const ro=[{id:"johnny",name:"Johnny",tagline:"Classic courier",skin:"#FFE0BD",jacket:"#1565C0",jacketLight:"#42A5F5",jacketTrim:"#FFD54F",hat:"#D32F2F",hatBrim:"#B71C1C",packMain:"#78909C",packDark:"#546E7A",packTrim:"#ECEFF1"},{id:"dingo",name:"Dingo",tagline:"Night-shift legend",skin:"#3D2314",jacket:"#1A237E",jacketLight:"#3949AB",jacketTrim:"#00E676",hat:"#00897B",hatBrim:"#00695C",packMain:"#2E7D32",packDark:"#1B5E20",packTrim:"#A5D6A7"},{id:"mert",name:"Mert",tagline:"Desert-route pro",skin:"#C68642",jacket:"#4E342E",jacketLight:"#795548",jacketTrim:"#FFAB40",hat:"#EF6C00",hatBrim:"#E65100",packMain:"#6D4C41",packDark:"#4E342E",packTrim:"#FFCC80"}];function Ao(s){return ro.find(t=>t.id===s)??ro[0]}function Ae(s,t,e,n,i,r,a,o){return{id:s,district:t,name:e,briefing:n,difficulty:a,timeLimit:o,segments:[...r.map(l=>({kind:"gate",z:l.z,safe:l.safe})),{kind:"dropoff",z:i}]}}const gi=[Ae("1-1",1,"First Delivery","Jump/slide electric bars · dodge props · shoot aliens · collect 📦",750,[{z:160,safe:"left"},{z:360,safe:"right"},{z:580,safe:"left"}],2,180),Ae("1-2",1,"Dog Park Detour","Aliens run AT you — dodge or shoot them! Colors = difficulty.",850,[{z:200,safe:"right"},{z:450,safe:"left"},{z:700,safe:"right"}],3,200),Ae("1-3",1,"Block Party Run","Grab power-ups: Slow-Mo, Fast Shot, Shield.",900,[{z:220,safe:"left"},{z:480,safe:"right"},{z:720,safe:"left"}],4,220),Ae("1-4",1,"Suburban Sprint","Center lane gets blocked too — stay alert!",950,[{z:180,safe:"right"},{z:420,safe:"left"},{z:650,safe:"right"},{z:850,safe:"left"}],5,240),Ae("1-5",1,"Boss: HOA Alien","Red stalkers are fast — shoot first!",1050,[{z:250,safe:"left"},{z:520,safe:"right"},{z:780,safe:"left"},{z:980,safe:"right"}],6,280),Ae("2-1",2,"Morning Commute","Downtown speed run — faster pace!",920,[{z:200,safe:"right"},{z:480,safe:"left"},{z:750,safe:"right"}],5,240),Ae("2-2",2,"Food Truck Alley","Dense hazards — power-ups save lives.",950,[{z:220,safe:"left"},{z:500,safe:"right"},{z:780,safe:"left"}],6,260),Ae("2-3",2,"Alien Territory","Yellow raiders need 2 hits. Red stalkers need 3.",1e3,[{z:240,safe:"right"},{z:520,safe:"left"},{z:820,safe:"right"}],7,280),Ae("2-4",2,"Rush Hour","Everything at once. Shield up!",1050,[{z:200,safe:"left"},{z:450,safe:"right"},{z:700,safe:"left"},{z:920,safe:"right"}],8,300),Ae("2-5",2,"Boss: Alien Commander","Final marathon — survive the stalkers.",1150,[{z:250,safe:"left"},{z:550,safe:"right"},{z:850,safe:"left"},{z:1050,safe:"right"}],9,320),Ae("3-1",3,"Scorpion Route","Blazing sand — watch for heat mirages and raiders in the haze.",980,[{z:210,safe:"left"},{z:500,safe:"right"},{z:780,safe:"left"}],7,280),Ae("3-2",3,"Mirage Mile","Desert gates come fast. Stock packages at oases.",1020,[{z:230,safe:"right"},{z:520,safe:"left"},{z:820,safe:"right"}],8,300),Ae("3-3",3,"Canyon Dash","Narrow canyon run — aliens love the shade.",1080,[{z:200,safe:"left"},{z:480,safe:"right"},{z:760,safe:"left"},{z:980,safe:"right"}],8,310),Ae("3-4",3,"Sandstorm Alley","Low visibility — listen for stalker footsteps.",1120,[{z:240,safe:"right"},{z:540,safe:"left"},{z:860,safe:"right"}],9,320),Ae("3-5",3,"Boss: Dune Warlord","Clear the dunes. The warlord waits at the depot.",1200,[{z:260,safe:"left"},{z:560,safe:"right"},{z:880,safe:"left"},{z:1080,safe:"right"}],10,340),Ae("4-1",4,"Canopy Run","Welcome to the jungle — vines, ruins, and ambush aliens.",1e3,[{z:220,safe:"right"},{z:510,safe:"left"},{z:800,safe:"right"}],9,300),Ae("4-2",4,"Temple Steps","Ancient gates guard the old mail route.",1040,[{z:240,safe:"left"},{z:530,safe:"right"},{z:840,safe:"left"}],10,320),Ae("4-3",4,"Vine Gauntlet","Thick cover — stalkers burst from the trees.",1100,[{z:210,safe:"right"},{z:500,safe:"left"},{z:790,safe:"right"},{z:1e3,safe:"left"}],10,330),Ae("4-4",4,"Monsoon Rush","Wet roads, wild power-ups, heavy traffic.",1140,[{z:250,safe:"left"},{z:550,safe:"right"},{z:870,safe:"left"}],11,350),Ae("4-5",4,"Boss: Jungle Overlord","Final jungle delivery — defeat the overlord!",1250,[{z:270,safe:"right"},{z:580,safe:"left"},{z:900,safe:"right"},{z:1120,safe:"left"}],12,360)];function a1(s){return gi.find(t=>t.id===s)}function wc(s){const t=gi.findIndex(e=>e.id===s);return t<0||t>=gi.length-1?null:gi[t+1].id}function o1(){return[...new Set(gi.map(s=>s.district))].sort((s,t)=>s-t)}const Ec=[{id:1,name:"Sunny Suburbs",sky:"#29B6F6",skyBottom:"#4FC3F7",fog:"#B3E5FC",ground:"#689F38",ambient:.72,sun:1,fogNear:50,fogFar:200,buildingHue:.12},{id:2,name:"Busy Downtown",sky:"#FF7043",skyBottom:"#FFAB91",fog:"#FFCC80",ground:"#607D8B",ambient:.72,sun:1.05,fogNear:35,fogFar:160,buildingHue:.08},{id:3,name:"Sunbleached Desert",sky:"#FFA726",skyBottom:"#FFE082",fog:"#FFE0B2",ground:"#D4A574",ambient:.78,sun:1.1,fogNear:45,fogFar:190,buildingHue:.09},{id:4,name:"Emerald Jungle",sky:"#00897B",skyBottom:"#26A69A",fog:"#80CBC4",ground:"#388E3C",ambient:.78,sun:.95,fogNear:32,fogFar:150,buildingHue:.32},{id:5,name:"Industrial Rain",sky:"#546E7A",skyBottom:"#78909C",fog:"#78909C",ground:"#455A64",ambient:.45,sun:.5,fogNear:25,fogFar:110,buildingHue:.55},{id:6,name:"Neon Night",sky:"#1A237E",skyBottom:"#311B92",fog:"#311B92",ground:"#263238",ambient:.35,sun:.3,fogNear:20,fogFar:100,buildingHue:.75},{id:7,name:"The Black Zone",sky:"#1B0000",skyBottom:"#4A0000",fog:"#4A0000",ground:"#212121",ambient:.25,sun:.15,fogNear:15,fogFar:80,buildingHue:0}];function ao(s){return Ec[Math.min(s-1,Ec.length-1)]}class vr{constructor(t,e,n){F(this,"canvas");F(this,"renderer");F(this,"pipeline",null);F(this,"scene");F(this,"camera");F(this,"world");F(this,"particles");F(this,"shake");F(this,"player");F(this,"convoy");F(this,"level");F(this,"run",{...Uo});F(this,"save");F(this,"routeGates",[]);F(this,"electricBars",[]);F(this,"obstacles",[]);F(this,"runners",[]);F(this,"coins",[]);F(this,"packagePickups",[]);F(this,"powerUps",[]);F(this,"throws",[]);F(this,"dropoff");F(this,"keys",new Set);F(this,"touchSteerLeft",!1);F(this,"touchSteerRight",!1);F(this,"inputCleanup",null);F(this,"running",!1);F(this,"dead",!1);F(this,"elapsed",0);F(this,"levelLength",200);F(this,"roadHalfWidth",4.2);F(this,"steerSpeed",11);F(this,"obstacleCooldown",0);F(this,"hurtIFrames",0);F(this,"gameTime",0);F(this,"smokeTimer",0);F(this,"dashTimer",0);F(this,"dashActive",!1);F(this,"abilityCd",0);F(this,"abilityMaxCd",12);F(this,"shootCd",0);F(this,"mailGunDamage",3);F(this,"mailGunRate",.22);F(this,"startPackages",0);F(this,"pickupRadius",2.2);F(this,"specialCharge",0);F(this,"specialShakesLeft",0);F(this,"specialShakeTimer",0);F(this,"quakeRadius",7.5);F(this,"invincibleTimer",0);F(this,"slowMoTimer",0);F(this,"fastShotTimer",0);F(this,"turboTimer",0);F(this,"blurTimer",0);F(this,"timeScale",1);F(this,"autoFireEnabled",!1);F(this,"viewportCleanup",null);F(this,"lastVpW",0);F(this,"lastVpH",0);F(this,"lastVpScale",1);F(this,"lastVpOffTop",0);F(this,"lastVpOffLeft",0);F(this,"forkHint","");F(this,"vaultHint","");F(this,"powerUpLabel","");F(this,"deathReason","stolen");F(this,"nextBarZ",35);F(this,"nextObstacleZ",55);F(this,"nextRunnerZ",50);F(this,"nextPowerUpZ",80);F(this,"nextPackageZ",25);F(this,"nextCoinZ",45);F(this,"spawnHorizon",0);F(this,"comboCount",0);F(this,"comboTimer",0);F(this,"nextMiniEventZ",200);F(this,"nextUfoHazardZ",130);F(this,"ufoHazard",null);F(this,"blackoutTimer",0);F(this,"bossSpawned",!1);F(this,"shootSpread",!1);F(this,"shootPierce",0);F(this,"shootHoming",!1);F(this,"homingSteerBoost",1);F(this,"baseShootSpread",!1);F(this,"baseShootPierce",0);F(this,"baseShootHoming",!1);F(this,"gearTrialTimer",0);F(this,"gearTrialTurret",null);F(this,"styleStreak",0);F(this,"styleStreakTimer",0);F(this,"magnetTimer",0);F(this,"comboStingerPlayed",!1);F(this,"styleToastTimer",0);F(this,"spectacle",new n1);F(this,"shootPulse",0);F(this,"cb");F(this,"raf",0);F(this,"lastFrame",0);F(this,"hudTimer",0);F(this,"lastConvoyCount",-1);F(this,"baseCamera",new D);F(this,"lookTarget",new D);F(this,"loop",()=>{if(!this.running)return;this.raf=requestAnimationFrame(this.loop);const t=performance.now(),e=Math.min(.05,Math.max(.001,(t-this.lastFrame)/1e3));this.lastFrame=t,this.update(e),this.render()});F(this,"sunTick",0);this.canvas=t,this.save=e,this.cb=n,this.renderer=new vh({canvas:t,antialias:xg,powerPreference:U?"low-power":"high-performance",stencil:!1,depth:!0,alpha:!1,precision:U?"mediump":"highp"}),this.renderer.setPixelRatio(ca()),this.renderer.shadowMap.enabled=_g,this.renderer.shadowMap.type=kh,this.renderer.toneMapping=Lc,this.renderer.toneMappingExposure=U?1.1:1.02,this.renderer.outputColorSpace=de,this.renderer.sortObjects=!1,this.renderer.info.autoReset=!0,this.scene=new ih,this.camera=new je(55,1,.1,U?150:180),this.pipeline=new e1(this.renderer,this.scene,this.camera),this.world=new Dg(this.scene),this.particles=new W_(this.scene),this.shake=new X_,this.bindKeyboard(),this.bindPointer(),window.addEventListener("resize",()=>this.resize()),this.viewportCleanup=i1(()=>this.resize()),window.visualViewport&&window.visualViewport.addEventListener("resize",()=>this.resize()),this.resize()}setAutoFire(t){this.autoFireEnabled=t}bindTouchControls(t){var r;(r=this.inputCleanup)==null||r.call(this);const e=[],n=(a,o)=>{if(!a)return;const l=u=>{o?this.touchSteerLeft=u:this.touchSteerRight=u},c=u=>{u.preventDefault(),l(!0)},h=()=>l(!1);a.addEventListener("pointerdown",c),a.addEventListener("pointerup",h),a.addEventListener("pointerleave",h),a.addEventListener("pointercancel",h),e.push(()=>{a.removeEventListener("pointerdown",c),a.removeEventListener("pointerup",h),a.removeEventListener("pointerleave",h),a.removeEventListener("pointercancel",h)})};n(t.querySelector("#steer-left"),!0),n(t.querySelector("#steer-right"),!1);const i=a=>{!this.running||this.dead||a.target.closest("#steer-left, #steer-right, #ability-btn, #special-btn, #jump-btn, #slide-btn, #shoot-btn, #hud-back-btn, #autofire-toggle, .hud-panel, .hud-actions-right, .btn")||this.shoot()};t.addEventListener("pointerdown",i),this.inputCleanup=()=>{t.removeEventListener("pointerdown",i),e.forEach(a=>a())}}startLevel(t){const e=a1(t);if(!e)return;this.cleanup(),this.level=e,this.running=!0,this.dead=!1,this.elapsed=0,this.gameTime=0,this.lastFrame=performance.now(),this.hudTimer=0,this.lastConvoyCount=-1,this.forkHint="",this.vaultHint="",this.powerUpLabel="",this.throws=[],this.smokeTimer=0,this.dashTimer=0,this.dashActive=!1,this.abilityCd=0,this.shootCd=0,this.hurtIFrames=0,this.invincibleTimer=0,this.slowMoTimer=0,this.fastShotTimer=0,this.turboTimer=0,this.blurTimer=0,this.timeScale=1,this.specialCharge=0,this.specialShakesLeft=0,this.specialShakeTimer=0,this.touchSteerLeft=!1,this.touchSteerRight=!1,this.autoFireEnabled=U&&this.save.mobileAutoFire,this.lastVpW=0,this.lastVpH=0,this.lastVpScale=1,this.lastVpOffTop=0,this.lastVpOffLeft=0,this.applyUpgrades();const n=e.difficulty,i=(U?15.2:16.4)+n*(U?.28:.32);if(this.run={...Uo,convoy:5,packages:this.startPackages,maxConvoy:50,maxPackages:20,integrity:3+(this.save.purchases["package-armor"]??0),maxIntegrity:3+(this.save.purchases["package-armor"]??0),baseSpeed:i,speed:i},this.mailGunRate=.22,this.save.equippedTurrets.includes("pepper-drone")&&(this.mailGunRate=Math.max(.12,.22-(this.save.purchases["pepper-drone"]??0)*.03)),this.save.equippedTurrets.includes("box-cannon")&&(this.mailGunDamage+=1+(this.save.purchases["box-cannon"]??0)),this.save.equippedTurrets.includes("helper-beacon")){const o=this.save.purchases["helper-beacon"]??0;this.mailGunDamage+=o*2}this.shootSpread=this.save.equippedTurrets.includes("spread-mail"),this.shootPierce=this.save.equippedTurrets.includes("pierce-pack")?1+(this.save.purchases["pierce-pack"]??0):0,this.shootHoming=this.save.equippedTurrets.includes("homing-stamp"),this.baseShootSpread=this.shootSpread,this.baseShootPierce=this.shootPierce,this.baseShootHoming=this.shootHoming,this.applyGearSynergies(),this.gearTrialTimer=0,this.gearTrialTurret=null,this.styleStreak=0,this.styleStreakTimer=0,this.magnetTimer=0,this.comboStingerPlayed=!1,this.homingSteerBoost=1,this.comboCount=0,this.comboTimer=0,this.nextMiniEventZ=200,this.nextUfoHazardZ=120+Math.random()*35,this.ufoHazard&&(this.ufoHazard.dispose(),this.ufoHazard=null),this.blackoutTimer=0,this.bossSpawned=!1,this.world.setBlackout(0),this.pickupRadius=2.2+(this.save.purchases["coin-magnet"]??0)*.4,this.spectacle.reset(),this.shootPulse=0;const r=e.segments[e.segments.length-1];this.levelLength=r.kind==="dropoff"?r.z+20:800,this.spawnHorizon=this.levelLength-30,this.nextBarZ=38,this.nextObstacleZ=62+Math.floor(Math.random()*18),this.nextRunnerZ=38+Math.random()*12,this.nextPowerUpZ=28+Math.random()*12,this.nextPackageZ=20,this.nextCoinZ=35;const a=ao(e.district);this.world.build(a,this.levelLength),Vt.setDistrict(e.district),this.player=new Wg(this.scene,Ao(this.save.selectedCharacter??"johnny")),this.player.setJumpPower(12+(this.save.purchases["jump-boots"]??0)*1.4),this.player.z=0,this.player.targetX=0,this.player.x=0,this.convoy=new Xg(this.scene),this.convoy.setCount(U?0:2);for(const o of e.segments)o.kind==="gate"?this.routeGates.push(lv(this.scene,o.z,o.safe)):o.kind==="vault"?this.electricBars.push(Ql(this.scene,o.z,{span:"full",clearance:o.clearance,motion:"static",district:e.district})):o.kind==="dropoff"&&(this.dropoff=cv(this.scene,o.z));this.player.setPackageGlow(.5,e.district),U&&(mi(),this.resize(),requestAnimationFrame(()=>this.resize())),this.loop()}applyUpgrades(){this.startPackages=(this.save.purchases["starter-pouches"]??0)*2;const t=this.save.equippedAbility;t==="smoke-bomb"?this.abilityMaxCd=12-(this.save.purchases["smoke-bomb"]??0)*2:t==="rally-horn"?this.abilityMaxCd=15-(this.save.purchases["rally-horn"]??0)*3:t==="dash"?this.abilityMaxCd=10-(this.save.purchases.dash??0)*2:this.abilityMaxCd=12}bindKeyboard(){window.addEventListener("keydown",t=>{this.keys.add(t.code),t.code==="KeyE"&&(t.preventDefault(),t.repeat||this.useSpecialQuake()),t.code==="KeyQ"&&(t.preventDefault(),t.repeat||this.useAbility()),t.code==="Space"&&(t.preventDefault(),t.repeat||this.jump()),(t.code==="KeyS"||t.code==="ArrowDown")&&(t.preventDefault(),t.repeat||this.slide()),(t.code==="ArrowLeft"||t.code==="KeyA")&&t.preventDefault(),(t.code==="ArrowRight"||t.code==="KeyD")&&t.preventDefault()}),window.addEventListener("keyup",t=>this.keys.delete(t.code))}bindPointer(){this.canvas.addEventListener("pointerdown",t=>{!this.running||this.dead||t.button===0&&(t.preventDefault(),this.shoot())}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),U&&this.canvas.addEventListener("touchstart",t=>{t.touches.length===1&&t.preventDefault()},{passive:!1})}jump(){!this.running||this.dead||this.player.jump()&&(this.shake.shake(.08),Vt.jump())}slide(){!this.running||this.dead||this.player.slide()&&(this.shake.shake(.05),Vt.slide())}shoot(){if(!this.running||this.dead||this.shootCd>0)return;const t=this.mailGunRate;this.shootCd=this.fastShotTimer>0?t*.45:t;let e=this.player.x,n=this.player.z+40;const i=this.nearestRunner();i&&(e=i.x,n=i.z),this.player.mailGunAnim(),Vt.shootMail(),this.shootPulse=.5,this.shake.shake(.035),this.spectacle.bumpCombat(.07),this.particles.muzzleFlash(this.player.x+.35,1.05,this.player.z+.55);const r={pierceLeft:this.shootPierce,homing:this.shootHoming};if(this.shootSpread)for(const a of[-1,0,1])this.throws.push(lc(this.scene,this.player.x,this.player.z,e,n,this.mailGunDamage,{...r,spreadIndex:a}));else this.throws.push(lc(this.scene,this.player.x,this.player.z,e,n,this.mailGunDamage,r))}fireMailGun(){this.shoot()}throwPackage(){this.shoot()}nearestRunner(){let t=null,e=1/0;for(const n of this.runners){if(!n.alive)continue;const i=n.z-this.player.z;i>0&&i<55&&i<e&&(e=i,t=n)}return t}useSpecialQuake(){!this.running||this.dead||this.specialShakesLeft>0||this.specialCharge<1||(this.specialCharge=0,this.specialShakesLeft=3,this.specialShakeTimer=0,this.convoy.reactQuake(),Vt.quake(),this.cb.onToast("💥 GROUND QUAKE ×3!"),this.emitHud(this.level.timeLimit-this.elapsed))}useAbility(){if(!this.running||this.dead||this.abilityCd>0)return;const t=this.save.equippedAbility;t&&(t==="smoke-bomb"?(this.smokeTimer=4,this.cb.onToast("Smoke!")):t==="rally-horn"?(this.invincibleTimer=Math.max(this.invincibleTimer,2),this.cb.onToast("Brief shield!")):t==="dash"&&(this.dashActive=!0,this.dashTimer=.6,this.player.dashOffset(),this.cb.onToast("Dash!")),this.abilityCd=this.abilityMaxCd)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}update(t){if(this.dead)return;this.syncViewport(),this.slowMoTimer>0?(this.slowMoTimer-=t,this.timeScale=.42,this.slowMoTimer<=0&&(this.timeScale=1)):this.timeScale=1,this.invincibleTimer>0&&(this.invincibleTimer-=t),this.hurtIFrames>0&&(this.hurtIFrames-=t),this.fastShotTimer>0&&(this.fastShotTimer-=t),this.turboTimer>0&&(this.turboTimer-=t,this.turboTimer<=0&&(this.run.speed=this.run.baseSpeed)),this.blurTimer>0&&(this.blurTimer-=t,this.blurTimer<=0&&this.player.setGhostMode(!1)),this.powerUpLabel=this.invincibleTimer>0?"🛡 SHIELD":this.hurtIFrames>0?"💥 HIT!":this.turboTimer>0?"🔥 OVERDRIVE":this.blurTimer>0?"👻 GHOSTED":this.fastShotTimer>0?"⚡ FAST":this.slowMoTimer>0?"🐢 SLOW-MO":"";const e=t*this.timeScale;this.elapsed+=t,this.gameTime+=t,this.abilityCd>0&&(this.abilityCd=Math.max(0,this.abilityCd-t)),this.shootCd>0&&(this.shootCd=Math.max(0,this.shootCd-t)),U&&this.autoFireEnabled&&this.shootCd<=0&&this.shoot(),this.smokeTimer>0&&(this.smokeTimer-=t),this.dashActive&&(this.dashTimer-=t,this.dashTimer<=0&&(this.dashActive=!1)),this.obstacleCooldown>0&&(this.obstacleCooldown-=t),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.comboCount=0)),this.blackoutTimer>0&&(this.blackoutTimer-=t,this.blackoutTimer<=0&&this.world.setBlackout(0)),this.styleStreakTimer>0&&(this.styleStreakTimer-=t,this.styleStreakTimer<=0&&(this.styleStreak=0)),this.magnetTimer>0&&(this.magnetTimer-=t),this.gearTrialTimer>0&&(this.gearTrialTimer-=t,this.gearTrialTimer<=0&&this.endGearTrial()),Vt.setNight(this.world.getSkyNight()),this.player.z+=this.run.speed*e,this.run.distance=this.player.z,this.specialCharge=Math.min(1,this.specialCharge+this.run.speed*e*5e-4),this.updateSpecialQuake(t),(this.keys.has("ArrowLeft")||this.keys.has("KeyA")||this.touchSteerLeft)&&(this.player.targetX+=this.steerSpeed*t),(this.keys.has("ArrowRight")||this.keys.has("KeyD")||this.touchSteerRight)&&(this.player.targetX-=this.steerSpeed*t),this.player.targetX=Gi.clamp(this.player.targetX,-this.roadHalfWidth,this.roadHalfWidth),this.player.update(t,this.roadHalfWidth,!0,this.run.speed,this.world.getGameplayNight()),this.run.convoy!==this.lastConvoyCount&&(this.convoy.setCount(U?0:Math.min(2,this.run.convoy)),this.lastConvoyCount=this.run.convoy),this.convoy.update(this.player.x,this.player.z,this.gameTime),this.proceduralSpawn(),this.updateMiniEvents(),this.updateSpectacle(t),this.updateUfoHazard(t),this.maybeSpawnBoss(),this.cullBehind();const n=this.player.z;this.world.setPlayerZ(n,t),this.sunTick+=t,this.sunTick>=(U?.1:.05)&&(this.sunTick=0,this.world.followSun(this.player.x,n)),_v(this.coins,t,this.gameTime,n),l_(this.packagePickups,this.gameTime,n),F_(this.powerUps,this.gameTime,n),S_(this.runners,e,this.gameTime,1,n,h=>{Vt.telegraphWarn(),Math.random()<.4&&Vt.alienChatter()},this.world.getGameplayNight()),this.throws=cc(this.throws,t,this.scene,this.gameTime,this.runners,this.homingSteerBoost),this.particles.update(t),this.shootPulse=Math.max(0,this.shootPulse-t*2.8),this.world.update(this.gameTime,n,t,{turbo:this.turboTimer>0,speed:this.run.speed,baseSpeed:this.run.baseSpeed,playerX:this.player.x,shootPulse:this.shootPulse,combatIntensity:this.spectacle.getCombatIntensity()});for(const h of this.routeGates)!h.resolved&&Qn(h.z,n,U?42:55)&&pv(h,this.gameTime);this.dropoff&&Qn(this.dropoff.z,n,U?42:55)&&mv(this.dropoff,this.gameTime),av(this.electricBars,this.gameTime,n,()=>Vt.telegraphWarn()),a_(this.obstacles,this.gameTime,n,this.world.getGameplayNight());const i=this.pickupRadius+(this.magnetTimer>0?2.8:0),r=xv(this.coins,this.player.x,this.player.z,i);r&&(this.run.coins+=r,this.particles.collectBurst(this.player.x,this.player.z),Vt.coin(r));const a=c_(this.packagePickups,this.player.x,this.player.z,i);a.packages&&(this.run.packages=Math.min(this.run.maxPackages,this.run.packages+a.packages),this.particles.collectBurst(this.player.x,this.player.z),this.spectacle.bumpCombat(.04),Vt.pickup()),a.golden&&(this.run.coins+=18*a.golden,this.fastShotTimer=Math.max(this.fastShotTimer,4),this.particles.collectBurst(this.player.x,this.player.z),this.cb.onToast("✨ Golden Mail — fast shots!"),Vt.combo(4));const o=D_(this.powerUps,this.player.x,this.player.z,i);o&&(this.applyPowerUp(o),this.particles.collectBurst(this.player.x,this.player.z)),this.checkThrowHits(),this.checkElectricBars(),this.checkObstacles(),this.checkNearMisses(),this.checkRunners(),this.checkRouteGates(),this.checkDropoff(),this.checkLose();const l=this.level.timeLimit-this.elapsed;if(l<=0){this.die("timeout");return}this.hudTimer+=t;const c=U?.12:.08;this.hudTimer>=c&&(this.hudTimer=0,this.emitHud(l)),this.cb.onCombat(!1),this.baseCamera.set(this.player.x*.35,10+this.player.jumpY*.15,this.player.z-12),this.lookTarget.set(this.player.x*.25,1.5+this.player.jumpY*.2,this.player.z+18),this.shake.apply(this.camera,this.baseCamera,this.lookTarget)}applyPowerUp(t){this.cb.onToast(L_[t]),t==="slowmo"?this.slowMoTimer=3.5:t==="fastshot"?this.fastShotTimer=5:t==="invincible"?this.invincibleTimer=4:t==="health"?this.run.integrity<this.run.maxIntegrity?this.run.integrity++:(this.run.coins+=15,this.cb.onToast("Full health — +15 coins!")):t==="turbo"?(this.turboTimer=4,this.run.speed=this.run.baseSpeed*1.55,this.shake.shake(.35),this.convoy.reactTurbo(),Vt.turbo(),Vt.honk()):t==="blur"&&(this.blurTimer=3.5,this.player.setGhostMode(!0)),t!=="turbo"&&Vt.powerUp(),this.emitHud(this.level.timeLimit-this.elapsed)}emitHud(t){this.cb.onHudUpdate({integrity:this.run.integrity,maxIntegrity:this.run.maxIntegrity,coins:this.run.coins,packages:this.run.packages,distance:this.run.distance,totalDistance:this.levelLength,timeLeft:t,abilityCd:this.abilityCd,abilityReady:this.abilityCd<=0&&!!this.save.equippedAbility,specialCharge:this.specialCharge,specialReady:this.specialCharge>=1&&this.specialShakesLeft<=0,specialShakes:this.specialShakesLeft,shootReady:this.shootCd<=0,jumpReady:!this.player.isJumping&&!this.player.isSliding,slideReady:!this.player.isJumping&&!this.player.isSliding,forkHint:this.forkHint||void 0,vaultHint:this.vaultHint||void 0,powerUpLabel:this.comboCount>=2?`⚡ ${this.comboCount}x COMBO`:this.magnetTimer>0?"🧲 STYLE MAGNET":this.gearTrialTimer>0&&this.gearTrialTurret?`🎁 ${vr.gearTrialName(this.gearTrialTurret)}`:this.powerUpLabel||void 0,invincible:this.invincibleTimer>0,screenBlur:this.blurTimer>0})}proceduralSpawn(){const t=this.level.difficulty,e=U?72:92,n=this.player.z+e,i=1,r=U?5:8,a=U?4:6,o=U?9:12,l=U?6:10;let c=0;for(;this.nextBarZ<n&&this.nextBarZ<this.spawnHorizon&&c<i&&!(this.electricBars.filter(m=>!m.resolved).length>=r);){const _=U_(t);this.electricBars.push(Ql(this.scene,this.nextBarZ,{..._,district:this.level.district})),this.nextBarZ+=N_(t)+Math.random()*10,c++}let h=0;for(;this.nextObstacleZ<n&&this.nextObstacleZ<this.spawnHorizon&&h<i&&!(this.obstacles.filter(m=>!m.hit).length>=a);){const g=B_(),_=U?1:g.length;for(let m=0;m<_;m++)this.obstacles.push(i_(this.scene,k_(this.level.id),g[m],this.nextObstacleZ));this.nextObstacleZ+=z_(t)+Math.random()*14,h++}let u=0;for(;this.nextRunnerZ<n&&this.nextRunnerZ<this.spawnHorizon&&u<i&&!(this.runners.length>=o);){const g=mc(t),_=pi(),m=Math.random()<(U?.05:.08);if(this.runners.push(fa(this.scene,g,_,this.nextRunnerZ,{elite:m})),m&&Vt.eliteSpawn(),!U&&t>=3&&Math.random()<.28&&this.runners.length<o){let p=pi();for(let M=0;M<4&&p===_;M++)p=pi();p!==_&&this.runners.push(fa(this.scene,mc(t),p,this.nextRunnerZ+.5))}this.nextRunnerZ+=O_(t)+Math.random()*8,u++}this.nextPowerUpZ<n&&this.nextPowerUpZ<this.spawnHorizon&&this.powerUps.length<l&&(this.powerUps.push(xc(this.scene,yc(),pi(),this.nextPowerUpZ)),this.nextPowerUpZ+=H_());let d=0;for(;this.nextPackageZ<n&&this.nextPackageZ<this.spawnHorizon&&d<i;)this.packagePickups.push(...o_(this.scene,this.nextPackageZ,1,0)),this.nextPackageZ+=G_(),d++;let f=0;for(;this.nextCoinZ<n&&this.nextCoinZ<this.spawnHorizon&&f<i;){const g=U?2+Math.floor(Math.random()*2):3+Math.floor(Math.random()*3);this.coins.push(...da(this.scene,this.nextCoinZ,g,3.5)),this.nextCoinZ+=U?28+Math.random()*20:22+Math.random()*18,f++}}addSpecialCharge(t){this.specialCharge=Math.min(1,this.specialCharge+t)}updateSpecialQuake(t){this.specialShakesLeft<=0||(this.specialShakeTimer-=t,!(this.specialShakeTimer>0)&&(this.executeQuakePulse(),this.specialShakesLeft--,this.specialShakeTimer=this.specialShakesLeft>0?.38:0))}executeQuakePulse(){this.shake.shake(1.5);const t=this.player.x,e=this.player.z,n=this.quakeRadius*this.quakeRadius;for(const r of this.electricBars){if(r.resolved)continue;const a=r.span==="full"?0:r.x,o=a-t,l=r.z-e;o*o+l*l<=n&&(r.resolved=!0,r.mesh.visible=!1,this.particles.hitBurst(a,r.z))}for(const r of this.obstacles){if(r.hit)continue;const a=r.x-t,o=r.z-e;a*a+o*o<=n&&(r.hit=!0,r.mesh.visible=!1,this.particles.hitBurst(r.x,r.z))}const i=[];for(const r of this.runners){if(!r.alive)continue;const a=r.x-t,o=r.z-e;a*a+o*o<=n&&(this.run.coins+=r.tier==="stalker"?15:r.tier==="raider"?10:5,i.push(r),this.particles.hitBurst(r.x,r.z))}for(const r of i)pa(r,this.scene),this.runners=this.runners.filter(a=>a!==r);this.particles.gateBurst(t,e,"#FF9800")}cullBehind(){const t=this.player.z-25,e=this.electricBars.filter(l=>l.z<t);e.length&&(ec(e,this.scene),this.electricBars=this.electricBars.filter(l=>l.z>=t));const n=this.obstacles.filter(l=>l.z<t);n.length&&(oc(n,this.scene),this.obstacles=this.obstacles.filter(l=>l.z>=t));const i=this.runners.filter(l=>l.z<t);i.length&&(gc(i,this.scene),this.runners=this.runners.filter(l=>l.z>=t));const r=this.coins.filter(l=>l.collected||l.z<t);r.length&&(ac(r,this.scene),this.coins=this.coins.filter(l=>!l.collected&&l.z>=t));const a=this.packagePickups.filter(l=>l.collected||l.z<t);a.length&&(hc(a,this.scene),this.packagePickups=this.packagePickups.filter(l=>!l.collected&&l.z>=t));const o=this.powerUps.filter(l=>l.collected||l.z<t);o.length&&(Mc(o,this.scene),this.powerUps=this.powerUps.filter(l=>!l.collected&&l.z>=t))}applyGearSynergies(){const t=this.save.equippedTurrets;t.includes("spread-mail")&&t.includes("pierce-pack")&&(this.shootPierce+=1,this.mailGunDamage=Math.floor(this.mailGunDamage*1.12),this.cb.onToast("⚡ Lane Sweeper — spread pierces!")),t.includes("homing-stamp")&&t.includes("pepper-drone")&&(this.mailGunRate*=.88,this.homingSteerBoost=1.45,this.cb.onToast("🎯 Stamp Lock — homing fast fire!"))}static gearTrialName(t){return t==="spread-mail"?"Spread Envelope":t==="pierce-pack"?"Piercing Post":"Tracking Stamps"}startGearTrial(){const e=["spread-mail","pierce-pack","homing-stamp"].filter(i=>!this.save.equippedTurrets.includes(i));if(!e.length)return;const n=e[Math.floor(Math.random()*e.length)];this.gearTrialTurret=n,this.gearTrialTimer=45,n==="spread-mail"&&(this.shootSpread=!0),n==="pierce-pack"&&(this.shootPierce=Math.max(this.shootPierce,2)),n==="homing-stamp"&&(this.shootHoming=!0),this.cb.onToast(`🎁 Trial: ${vr.gearTrialName(n)}!`)}endGearTrial(){this.shootSpread=this.baseShootSpread,this.shootPierce=this.baseShootPierce,this.shootHoming=this.baseShootHoming;const t=this.save.equippedTurrets;t.includes("spread-mail")&&t.includes("pierce-pack")&&(this.shootPierce+=1),this.homingSteerBoost=t.includes("homing-stamp")&&t.includes("pepper-drone")?1.45:1,this.gearTrialTurret=null}onRunnerKill(t,e){this.comboTimer=3.2,this.comboCount++;const n=1+(this.comboCount-1)*.12;let i=(t.tier==="stalker"?15:t.tier==="raider"?10:5)*n;t.elite&&(i+=25),t.isBoss&&(i+=50),e&&(i*=1.5),this.run.coins+=Math.floor(i),this.addSpecialCharge(.14+this.comboCount*.035),this.spectacle.bumpCombat(t.isBoss?.25:t.elite?.15:.1),Vt.alienKill(),e&&Vt.headshot(),this.comboCount>=2&&Vt.combo(this.comboCount),this.comboCount>=5&&!this.comboStingerPlayed&&(this.comboStingerPlayed=!0,Vt.comboStinger()),this.comboCount<=1&&(this.comboStingerPlayed=!1),this.particles.hitBurst(t.x,t.z),t.elite&&!t.isBoss&&(this.coins.push(...da(this.scene,t.z,U?5:8,4)),this.packagePickups.push(d_(this.scene,t.x,t.z))),t.isBoss&&(this.startGearTrial(),this.powerUps.push(xc(this.scene,yc(),0,t.z)),this.cb.onToast("💥 Boss down — deliver the mail!"))}updateSpectacle(t){const e=this.spectacle.update(t,{playerZ:this.player.z,comboCount:this.comboCount,runnerCount:this.runners.filter(n=>n.alive).length,night:this.world.getSkyNight()});e&&(this.cb.onToast(e.message),this.world.playSpectacle(e.kind,this.player.z),this.shake.shake(e.pulse*.14),Vt.spectacle(e.kind),e.kind==="energy-surge"&&(this.world.setBlackout(.35),this.blackoutTimer=Math.max(this.blackoutTimer,2.5))),Vt.setCombatIntensity(this.spectacle.getCombatIntensity())}updateUfoHazard(t){var i;if(this.world.getSkyNight()<=.4){(i=this.ufoHazard)!=null&&i.active&&this.ufoHazard.end();return}if(this.ufoHazard||(this.ufoHazard=new A_(this.scene)),!this.ufoHazard.active&&this.player.z>=this.nextUfoHazardZ&&(this.nextUfoHazardZ+=155+Math.random()*70,this.ufoHazard.start(this.player.x,this.player.z),this.cb.onToast("🛸 UFO overhead — dodge the beam!"),Vt.ufoBeam()),!this.ufoHazard.active)return;this.ufoHazard.update(t,this.gameTime,this.player.z);const n=this.player.jumpY>.4||this.player.isSliding||this.dashActive||this.invincibleTimer>0;this.ufoHazard.tickExposure(t,this.player.x,this.player.z,n)&&(this.isProtected()||(this.takeHit("obstacle"),this.cb.onToast("👽 Caught in the beam!"),this.ufoHazard.end()))}updateMiniEvents(){if(this.player.z<this.nextMiniEventZ)return;this.nextMiniEventZ+=200+Math.random()*50;const t=this.level.district,e=Math.random(),n=()=>{this.cb.onToast("🛸 UFO convoy — coin shower!"),this.coins.push(...da(this.scene,this.player.z+45,U?6:10,5))},i=()=>{this.cb.onToast("📬 Escort convoy rolling!"),this.convoy.reactTurbo(),Vt.honk()},r=()=>{this.cb.onToast("🌑 Blackout zone — eyes up!"),this.world.setBlackout(.58),this.blackoutTimer=9};t===3?e<.55?n():e<.82?i():r():t===5||t===7?e<.48?r():e<.74?i():n():t>=6?e<.38?r():e<.68?n():i():e<.34?n():e<.67?i():r()}maybeSpawnBoss(){this.bossSpawned||!this.dropoff||this.level.name.includes("Boss")&&(this.player.z<this.dropoff.z-95||(this.bossSpawned=!0,this.runners.push(fa(this.scene,"stalker",0,this.dropoff.z-8,{boss:!0})),Vt.eliteSpawn(),this.cb.onToast("👾 BOSS ALIEN guards the drop-off!")))}checkNearMisses(){for(const t of this.electricBars){if(t.resolved||t.span==="full"||t.styleAwarded)continue;const e=this.player.z-t.z;e<.8||e>2.5||tc(this.player.x,t)||(this.player.isJumping||this.player.isSliding||this.dashActive)&&(t.styleAwarded=!0,this.awardStyleNearMiss())}for(const t of this.obstacles){if(t.hit)continue;const e=this.player.z-t.z;if(e<.8||e>2.2)continue;const n=Math.abs(this.player.x-t.x),i=t.radius-.05,r=t.radius+.45;n>=i&&n<=r&&(this.player.isJumping||this.player.isSliding||this.dashActive)&&(t.mesh.userData.styleAwarded||(t.mesh.userData.styleAwarded=!0,this.awardStyleNearMiss()))}}awardStyleNearMiss(){this.run.coins+=5,Vt.nearMiss(),this.convoy.reactTurbo(),this.styleStreak++,this.styleStreakTimer=4,this.styleStreak>=3?(this.styleStreak=0,this.magnetTimer=5,this.cb.onToast("🔗 STYLE MAGNET!"),Vt.honk()):this.styleStreak===2?this.cb.onToast("✨ Style ×2 — one more!"):this.cb.onToast("✨ STYLE +5")}checkThrowHits(){for(const t of this.throws){if(t.life<=0)continue;const e=t.mesh.position.z,n=t.mesh.position.y;for(const i of this.runners){if(!i.alive||Math.abs(i.z-e)>2.5)continue;const r=t.mesh.position.x-i.x,a=t.mesh.position.z-i.z;if(r*r+a*a>=1.85)continue;const o=E_(n,i),l=o?t.damage*2:t.damage;i.hp-=l,Vt.alienHit(),this.particles.alienHit(t.mesh.position.x,t.mesh.position.y,t.mesh.position.z,o),this.spectacle.bumpCombat(o?.12:.06),t.pierceLeft>0?t.pierceLeft--:t.life=0,i.hp<=0&&(this.onRunnerKill(i,o),pa(i,this.scene),this.runners=this.runners.filter(c=>c!==i))}}}isProtected(){return this.invincibleTimer>0||this.hurtIFrames>0}takeHit(t){this.isProtected()||(this.run.integrity--,this.run.integrityLost=!0,this.hurtIFrames=1.5,this.obstacleCooldown=.6,this.player.flashHurt(),this.shake.shake(.75),this.cb.onDamageFlash(),this.particles.hitBurst(this.player.x,this.player.z),Vt.hurt(),t==="runner"&&this.player.knockback(this.player.x>=0?2:-2),this.run.integrity<=0?this.die(t==="runner"?"overwhelmed":"stolen"):this.emitHud(this.level.timeLimit-this.elapsed))}checkObstacles(){if(!this.isProtected()){for(const t of this.obstacles)if(!(t.hit||Math.abs(this.player.z-t.z)>1.4||Math.abs(this.player.x-t.x)>t.radius+.3)&&!(this.player.jumpY>s_(t.kind)+.08)){if(this.dashActive){t.hit=!0,t.mesh.visible=!1,this.particles.hitBurst(t.x,t.z);continue}t.hit=!0,t.mesh.visible=!1,this.takeHit("obstacle");return}}}checkElectricBars(){this.vaultHint="";const t=2.4,e=-1.5;for(const n of this.electricBars){if(n.resolved)continue;const i=n.z-this.player.z;if(i>0&&i<30){const u=n.clearance==="jump"?"⬆ JUMP":"⬇ SLIDE";n.motion==="sweep"?this.vaultHint=`⚡ SWEEP — ${u}`:n.span==="full"?this.vaultHint=`${u} BAR`:this.vaultHint=`${u} · dodge lane`}const r=this.player.jumpY>.1||this.player.isJumping,a=this.player.isSliding,o=n.clearance==="jump"?r:a,l=n.clearance==="jump"&&a||n.clearance==="slide"&&r;if(n.motion==="sweep"){if(this.player.z<n.z-.5||this.player.z>n.z+2.2||!n.sweepStarted)continue;const u=ov(n);if(Math.abs(this.player.x-u)>bh+.25||this.isProtected())continue;if(this.dashActive){n.resolved=!0;continue}!n.penalized&&(l||!o)&&(n.penalized=!0,Vt.vaultBuzz(),this.takeVaultMiss()),this.player.z>n.z+1.6&&(n.resolved=!0,o&&!n.penalized&&(this.run.coins+=5,Vt.vaultBuzz()));continue}if(!tc(this.player.x,n)||!(this.player.z>=n.z+e&&this.player.z<=n.z+t))continue;if(this.dashActive&&this.player.z>=n.z-.3){n.resolved=!0,this.particles.hitBurst(n.x,n.z);continue}const h=this.player.z>=n.z-.15;!this.isProtected()&&!n.penalized&&h&&(l||!o)&&(n.penalized=!0,Vt.vaultBuzz(),this.takeVaultMiss()),this.player.z>n.z+t-.35&&(n.resolved=!0,o&&!n.penalized&&(this.run.coins+=n.span==="full"?4:3,Vt.vaultBuzz()))}}checkRunners(){if(!(this.isProtected()||this.smokeTimer>0))for(const t of this.runners){if(!t.alive)continue;const e=Math.abs(this.player.x-t.x),n=Math.abs(this.player.z-t.z),i=w_(t.tier);if(e<i&&n<1.3&&this.player.jumpY<.55){pa(t,this.scene),this.runners=this.runners.filter(r=>r!==t),this.takeHit("runner");return}}}checkRouteGates(){this.forkHint="";for(const t of this.routeGates){if(t.resolved)continue;const e=t.z-this.player.z;if(e>0&&e<32&&(this.forkHint="⚠ FORK!"),this.player.z>=t.z-3&&this.player.z<=t.z+2&&Math.abs(this.player.x)<1.2){this.die("wrong_turn");return}if(this.player.z<t.z+.4)continue;const n=this.player.x>.75,i=this.player.x<-.75;if(!n&&!i){this.die("wrong_turn");return}const r=n?"left":"right";if(t.resolved=!0,t.centerWall.visible=!1,r!==t.safeSide){this.die("wrong_turn");return}this.run.coins+=8,this.particles.gateBurst(r==="left"?3:-3,t.z,"#00E676"),Vt.gatePass()}}takeVaultMiss(){this.isProtected()||(this.run.integrity--,this.run.integrityLost=!0,this.hurtIFrames=1.8,this.obstacleCooldown=.8,this.player.flashHurt(),this.shake.shake(.65),this.cb.onDamageFlash(),this.particles.hitBurst(this.player.x,this.player.z),this.run.integrity<=0?this.die("stolen"):this.emitHud(this.level.timeLimit-this.elapsed))}checkDropoff(){!this.dropoff||this.dropoff.reached||this.runners.some(t=>t.alive&&t.isBoss)||this.player.z>=this.dropoff.z-3&&(this.dropoff.reached=!0,this.particles.gateBurst(0,this.dropoff.z,"#FFD54F"),Vt.delivery(),this.endGame(!0))}checkLose(){this.run.integrity<=0&&!this.dead&&this.die("stolen")}die(t){this.dead||(this.dead=!0,this.deathReason=t,this.player.flashHurt(),this.shake.shake(1.2),this.cb.onDamageFlash(),this.particles.burst(this.player.x,1.5,this.player.z,"#FF1744",U?18:30,6),Vt.gameOver(),setTimeout(()=>this.endGame(!1),1200))}endGame(t){if(!this.running)return;this.running=!1,Vt.stopMusic();let e=0;t&&(e=1,!this.run.integrityLost&&this.run.packages>=6&&(e=2),!this.run.integrityLost&&this.run.packages>=12&&this.run.coins>=40&&(e=3));const n=t?this.run.packages*3:0,i=t?25+e*20:Math.floor(this.run.coins*.3),r=this.run.coins+(t?i+n:0),a={stolen:"Crashed into a hazard!",overwhelmed:"An alien tackled you!",timeout:"Delivery window expired!",blocked:"Blocked!",wrong_turn:"Wrong turn — dead end!"};this.cb.onEnd({won:t,stars:e,coinsEarned:r,levelId:this.level.id,time:this.elapsed,deathReason:t?void 0:a[this.deathReason]})}render(){{const t=this.world.getNightFx(),e=this.world.getGameplayNight(),n=U?1.1:1.06;this.renderer.toneMappingExposure=n*(1-t*(U?.04:.08))+e*(U?.14:.1)}if(this.pipeline){const t=this.world.getNightFx(),e=this.spectacle.getCombatIntensity(),n=this.spectacle.getPostPulse()+this.shootPulse*.35,i=(U?.26:.24)+t*(U?.16:.28)+e*(U?.06:.12);this.pipeline.setBloomStrength(i),this.pipeline.setGradePulse(n),this.pipeline.render()}else this.renderer.render(this.scene,this.camera)}syncViewport(){if(!U||!this.running)return;const t=Ah();t.width===this.lastVpW&&t.height===this.lastVpH&&t.scale===this.lastVpScale&&t.offsetTop===this.lastVpOffTop&&t.offsetLeft===this.lastVpOffLeft||(this.lastVpW=t.width,this.lastVpH=t.height,this.lastVpScale=t.scale,this.lastVpOffTop=t.offsetTop,this.lastVpOffLeft=t.offsetLeft,mi(),this.renderer.setPixelRatio(ca()),this.renderer.setSize(t.width,t.height,!1),this.camera.aspect=t.width/t.height,this.camera.updateProjectionMatrix())}resize(){var n;let t,e;if(U){const i=mi();t=i.width,e=i.height,this.lastVpW=t,this.lastVpH=e,this.lastVpScale=i.scale,this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`}else t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;t<1||e<1||(this.renderer.setPixelRatio(ca()),this.renderer.setSize(t,e,!1),(n=this.pipeline)==null||n.setSize(t,e),this.camera.aspect=t/e,this.camera.far=U?150:180,this.camera.updateProjectionMatrix())}cleanup(){for(const t of this.routeGates)rc(t.mesh,this.scene);ec(this.electricBars,this.scene),oc(this.obstacles,this.scene),gc(this.runners,this.scene),ac(this.coins,this.scene),hc(this.packagePickups,this.scene),Mc(this.powerUps,this.scene),this.throws=cc(this.throws,999,this.scene),this.dropoff&&rc(this.dropoff.mesh,this.scene),this.particles.clear(),this.routeGates=[],this.electricBars=[],this.obstacles=[],this.runners=[],this.coins=[],this.packagePickups=[],this.powerUps=[],this.player&&this.player.dispose(this.scene),this.convoy&&this.convoy.dispose(),this.ufoHazard&&(this.ufoHazard.dispose(),this.ufoHazard=null)}dispose(){var t,e,n;(t=this.inputCleanup)==null||t.call(this),this.inputCleanup=null,(e=this.viewportCleanup)==null||e.call(this),this.viewportCleanup=null,this.stop(),Vt.stopMusic(),Vt.dispose(),this.cleanup(),(n=this.pipeline)==null||n.dispose(),this.pipeline=null,this.renderer.dispose()}}const _a=[{id:"pepper-drone",category:"gear",name:"Mail Blaster",description:"Faster shoot cooldown — spam mail at charging aliens.",baseCost:70,maxLevel:3},{id:"box-cannon",category:"gear",name:"Parcel Launcher",description:"Package & mail shots hit harder — drop stalkers faster.",baseCost:110,maxLevel:3},{id:"helper-beacon",category:"gear",name:"Target Lock",description:"Auto-aim shots deal bonus damage to runner aliens.",baseCost:90,maxLevel:3},{id:"homing-stamp",category:"gear",name:"Tracking Stamps",description:"Mail shots curve toward the nearest charging alien.",baseCost:125,maxLevel:3},{id:"spread-mail",category:"gear",name:"Spread Envelope",description:"Fire a 3-way mail burst — blanket the lane.",baseCost:95,maxLevel:2},{id:"pierce-pack",category:"gear",name:"Piercing Post",description:"Mail punches through multiple aliens in a line.",baseCost:105,maxLevel:3},{id:"smoke-bomb",category:"ability",name:"Smoke Screen",description:"Aliens cannot tackle you for 4 seconds. 12s cooldown.",baseCost:140,maxLevel:2},{id:"rally-horn",category:"ability",name:"Shield Burst",description:"Brief invincibility to shrug off a hit. 15s cooldown.",baseCost:120,maxLevel:2},{id:"dash",category:"ability",name:"Express Dash",description:"Invulnerable burst — smash through one hazard. 10s cooldown.",baseCost:130,maxLevel:2},{id:"package-armor",category:"upgrade",name:"Extra Heart",description:"+1 max life — survive an extra obstacle or alien hit.",baseCost:80,maxLevel:3},{id:"jump-boots",category:"upgrade",name:"Jump Boots",description:"Higher jumps — clear barricades and pods more easily.",baseCost:60,maxLevel:3},{id:"starter-pouches",category:"upgrade",name:"Starter Pouches",description:"Begin each run with extra packages already collected.",baseCost:55,maxLevel:4},{id:"coin-magnet",category:"upgrade",name:"Coin Magnet",description:"Wider pickup radius for coins and power-ups.",baseCost:50,maxLevel:3}];function Tc(s,t){return Math.floor(s.baseCost*Math.pow(1.55,t))}const l1=[{key:"gear",label:"Gear",hint:"Equip up to 2"},{key:"ability",label:"Abilities",hint:"Equip 1"},{key:"upgrade",label:"Upgrades",hint:"Passive — always on"}];function c1(){return`
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
    </div>`}const _r=128,Ac=new Map;let fs=null;function h1(){return fs||(fs=new vh({antialias:!1,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),fs.setPixelRatio(1),fs.outputColorSpace=de),fs}function u1(s){const t=Ac.get(s);if(t)return t;const e=Ao(s),n=new ih;n.background=null;const i=new je(32,1,.1,40);i.position.set(.15,1.15,3.35),i.lookAt(0,1.05,0),n.add(new uh(16777215,.9));const r=new ys(16777215,1.15);r.position.set(2.5,5,4),n.add(r);const a=new ys(10406911,.55);a.position.set(-2.5,2,3),n.add(a);const{mesh:o}=Mh(e);o.rotation.y=-.42,n.add(o);const l=h1();l.setSize(_r,_r,!1),l.render(n,i);const c=l.domElement.toDataURL("image/png");return Ac.set(s,c),Xe(o),c}function d1(s,t){const e=document.createElement("img");e.className="character-preview-img",e.alt=Ao(t).name,e.width=_r,e.height=_r,e.decoding="async",e.src=u1(t),s.replaceChildren(e)}const Cc={1:"district-sunny",2:"district-downtown",3:"district-desert",4:"district-jungle",5:"district-industrial",6:"district-neon",7:"district-blackzone"},Rc={1:{icon:"🏡",tagline:"Suburban first contacts — aliens in the hedges"},2:{icon:"🏙️",tagline:"Downtown chaos — deliver through the warzone"},3:{icon:"🏜️",tagline:"Desert heat — sand, scorpions, and saucers"},4:{icon:"🌴",tagline:"Jungle overrun — vines, spores, and stalkers"},5:{icon:"🏭",tagline:"Industrial rain — acid leaks and blackouts"},6:{icon:"🌃",tagline:"Neon night — synthwave slaughter highway"},7:{icon:"☠️",tagline:"The Black Zone — no mercy, no overtime"}};function f1(s){for(let t=s.segments.length-1;t>=0;t--){const e=s.segments[t];if(e.kind==="dropoff")return e.z}return 750}function p1(s){return Sv(s).split(" · ").map(t=>`<span class="hazard-chip">${t}</span>`).join("")}class m1{constructor(t,e){F(this,"root");F(this,"save");F(this,"game",null);F(this,"screen","menu");F(this,"hudCache",{});F(this,"tapHintTimer",null);F(this,"activeLevelId","");this.root=t,this.save=e,this.showMenu()}el(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}clear(){this.tapHintTimer&&(clearTimeout(this.tapHintTimer),this.tapHintTimer=null),this.root.innerHTML=""}setCanvasVisible(t){const e=document.getElementById("game-canvas");e&&(e.style.visibility=t?"visible":"hidden")}wrapScreen(t,e=""){return this.el(`
      <div class="screen-wrap ${e}">
        ${c1()}
        ${t}
      </div>`)}showMenu(){var r;this.screen="menu",er(!1),(r=this.game)==null||r.stop(),this.setCanvasVisible(!1),this.clear();const t=this.save.get(),e=t.selectedCharacter??"johnny",n=ro.map(a=>`
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
    `);this.root.appendChild(i),i.querySelectorAll(".character-preview").forEach(a=>{const o=a.dataset.preview;d1(a,o)}),i.querySelectorAll(".character-card").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.id;this.save.setCharacter(o),i.querySelectorAll(".character-card").forEach(l=>{const c=l,h=c.dataset.id===o;c.classList.toggle("selected",h),c.setAttribute("aria-pressed",String(h))})})}),i.querySelector("#btn-play").addEventListener("click",()=>this.showLevels()),i.querySelector("#btn-shop").addEventListener("click",()=>this.showShop()),i.querySelector("#btn-reset").addEventListener("click",()=>{confirm("Reset all progress?")&&(this.save.reset(),this.showMenu())})}showLevels(){this.screen="levels",this.setCanvasVisible(!1),this.clear();const t=this.save.get();let e=`
      <div class="screen route-screen scroll-touch">
        <header class="route-header">
          <button type="button" class="btn btn-secondary route-back" id="btn-back">← Back</button>
          <div class="route-title-block">
            <span class="route-eyebrow">MAIL RUN · INVASION ROUTES</span>
            <h1>Select Route</h1>
          </div>
          <div class="stat-pill route-coins"><span>🪙</span> ${t.coins.toLocaleString()}</div>
        </header>
        <div class="route-scroll">`;for(const i of o1()){const r=ao(i),a=Cc[i]??"district-sunny",o=Rc[i]??{icon:"📍",tagline:r.name},l=gi.filter(h=>h.district===i),c=l.filter(h=>(t.levelStars[h.id]??0)>0).length;e+=`
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
            </button>`}e+="</div></section>"}e+="</div></div>";const n=this.wrapScreen(e);this.root.appendChild(n),n.querySelectorAll(".route-level-card:not(.locked)").forEach(i=>{i.addEventListener("click",()=>this.showBriefing(i.dataset.id))}),n.querySelector("#btn-back").addEventListener("click",()=>this.showMenu())}showBriefing(t){const e=gi.find(c=>c.id===t),n=ao(e.district),i=Cc[e.district]??"district-sunny",r=Rc[e.district]??{icon:"📍",tagline:n.name},a=f1(e),o=e.name.toLowerCase().includes("boss");this.screen="briefing",this.setCanvasVisible(!1),this.clear();const l=this.wrapScreen(`
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
            <div class="hazard-chips">${p1(t)}</div>
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
    `);this.root.appendChild(l),l.querySelector("#btn-start").addEventListener("click",()=>this.startGame(t)),l.querySelector("#btn-back").addEventListener("click",()=>this.showLevels())}showShop(){this.screen="shop",er(!1),this.setCanvasVisible(!1),this.clear();const t=this.save.get();let e="";for(const r of l1){const a=_a.filter(o=>o.category===r.key);if(a.length){e+=`<h2 class="shop-section-title">${r.label} <span class="shop-section-hint">${r.hint}</span></h2>`,e+='<div class="shop-grid">';for(const o of a){const l=this.save.getPurchaseLevel(o.id),c=l>=o.maxLevel,h=c?0:Tc(o,l),u=!c&&t.coins>=h,d=o.category==="gear",f=o.category==="ability",g=d&&t.equippedTurrets.includes(o.id)||f&&t.equippedAbility===o.id;e+=`
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
      </div>`,i=this.wrapScreen(n);this.root.appendChild(i),i.querySelectorAll(".buy-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.id,o=_a.find(h=>h.id===a),l=this.save.getPurchaseLevel(a);if(l>=o.maxLevel)return;const c=Tc(o,l);this.save.spendCoins(c)&&(this.save.setPurchaseLevel(a,l+1),this.showShop())})}),i.querySelectorAll(".equip-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.id,o=_a.find(l=>l.id===a);if(o.category==="gear"){if(this.save.getPurchaseLevel(a)<=0){alert("Buy this gear first!");return}this.save.equipTurret(a)}else if(o.category==="ability"){if(this.save.getPurchaseLevel(a)<=0){alert("Buy this ability first!");return}const l=this.save.get();this.save.equipAbility(l.equippedAbility===a?null:a)}this.showShop()})}),i.querySelector("#btn-back").addEventListener("click",()=>this.showMenu())}startGame(t){var h,u;this.activeLevelId=t,this.screen="game",er(!0),this.hudCache={},this.setCanvasVisible(!0),this.clear();const e=this.el(`
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
        ${U?`<button type="button" class="autofire-toggle ${this.save.get().mobileAutoFire?"on":"off"}" id="autofire-toggle" aria-pressed="${this.save.get().mobileAutoFire}">
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

        <div class="tap-hint" id="tap-hint">${U?"Jump · Mail · Slide — tap screen also shoots":"Jump · Slide · Shoot · Swerve at forks!"}</div>

        <div class="combat-banner hidden" id="combat-banner">
          <div class="combat-title" id="combat-title">⚠ INTERCEPT!</div>
          <div class="combat-bar-wrap">
            <div class="combat-bar-fill" id="combat-bar"></div>
          </div>
          <div class="combat-hint">LMB mail · RMB throw 📦 · Convoy fights for you</div>
        </div>

        <div class="scan-prompt hidden" id="scan-prompt"></div>

        <div class="damage-flash hidden" id="damage-flash"></div>

        <div class="hud-bottom ${U?"hud-bottom-mobile":""}">
          <button class="action-btn jump-btn" id="jump-btn" title="Jump${U?"":" (SPACE)"}">
            <span class="action-icon">⬆</span>
            <span>JUMP</span>
          </button>
          <button class="action-btn shoot-btn" id="shoot-btn" title="Shoot">
            <span class="action-icon" id="shoot-icon">📧</span>
            <span id="shoot-label">${U?"MAIL":"SHOOT"}</span>
            <div class="ability-cd hidden" id="shoot-cd"></div>
          </button>
          <button class="action-btn slide-btn" id="slide-btn" title="Slide${U?"":" (S)"}">
            <span class="action-icon">⬇</span>
            <span>SLIDE</span>
          </button>
          ${U?"":`<button class="action-btn special-btn" id="special-btn" title="Ground Quake (E) — 3 hits">
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

        ${U?`<div class="hud-actions-right">
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
    `);this.root.appendChild(e);const n=document.getElementById("game-canvas");(h=this.game)==null||h.dispose(),this.game=new vr(n,this.save.get(),{onHudUpdate:d=>this.updateHud(d),onToast:d=>this.toast(d),onCombat:d=>{var f;(f=document.getElementById("combat-banner"))==null||f.classList.toggle("hidden",!d)},onDamageFlash:()=>{const d=document.getElementById("damage-flash");d&&(d.classList.remove("hidden"),setTimeout(()=>d.classList.add("hidden"),400))},onEnd:d=>this.onGameEnd(d)});const i=this.save.get().equippedAbility,r=document.getElementById("ability-btn"),a=document.getElementById("ability-label");if(i&&r&&a){const d={"smoke-bomb":"Smoke","rally-horn":"Rally",dash:"Dash"};a.textContent=d[i]??"Ability",r.disabled=!1,r.onclick=()=>{var f;return(f=this.game)==null?void 0:f.useAbility()},r.addEventListener("pointerdown",f=>f.stopPropagation())}const o=document.getElementById("autofire-toggle");o&&o.addEventListener("pointerdown",d=>{var _;d.preventDefault(),d.stopPropagation();const f=!this.save.get().mobileAutoFire;this.save.setMobileAutoFire(f),(_=this.game)==null||_.setAutoFire(f),o.classList.toggle("on",f),o.classList.toggle("off",!f),o.setAttribute("aria-pressed",String(f));const g=document.getElementById("autofire-label");g&&(g.textContent=f?"AUTO ON":"AUTO OFF")});const l=document.getElementById("hud");this.game.bindTouchControls(l),document.getElementById("jump-btn").addEventListener("pointerdown",d=>{var f;d.preventDefault(),d.stopPropagation(),(f=this.game)==null||f.jump()}),document.getElementById("slide-btn").addEventListener("pointerdown",d=>{var f;d.preventDefault(),d.stopPropagation(),(f=this.game)==null||f.slide()});const c=document.getElementById("shoot-btn");c==null||c.addEventListener("pointerdown",d=>{var f;d.preventDefault(),d.stopPropagation(),(f=this.game)==null||f.shoot()}),(u=document.getElementById("hud-back-btn"))==null||u.addEventListener("pointerdown",d=>{var f;d.preventDefault(),d.stopPropagation(),(f=this.game)==null||f.dispose(),this.game=null,er(!1),this.showLevels()}),document.getElementById("special-btn").addEventListener("pointerdown",d=>{var f;d.preventDefault(),d.stopPropagation(),(f=this.game)==null||f.useSpecialQuake()}),this.game.startLevel(t),this.tapHintTimer=setTimeout(()=>{var d;(d=document.getElementById("tap-hint"))==null||d.classList.add("hidden"),this.tapHintTimer=null},3e3)}updateHud(t){var l,c,h,u,d,f,g;const e=document.getElementById("hud-hearts");if(e&&(t.integrity!==this.hudCache.integrity||t.maxIntegrity!==this.hudCache.maxIntegrity)&&(e.textContent="❤".repeat(t.integrity)+"🖤".repeat(Math.max(0,t.maxIntegrity-t.integrity))),t.coins!==this.hudCache.coins){const _=document.getElementById("hud-coins");_&&(_.textContent=String(t.coins))}if(t.distance!==this.hudCache.distance){const _=document.getElementById("hud-dist");_&&(_.textContent=`${Math.floor(t.distance)}m`)}if(t.distance!==this.hudCache.distance||t.totalDistance!==this.hudCache.totalDistance){const _=document.getElementById("progress-fill");_&&(_.style.width=`${Math.min(100,t.distance/t.totalDistance*100)}%`)}if(t.packages!==this.hudCache.packages){const _=document.getElementById("hud-ammo");_&&(_.textContent=`📦 ${t.packages}`);const m=document.getElementById("shoot-icon"),p=document.getElementById("shoot-label");m&&(m.textContent="📧"),p&&(p.textContent=U?"MAIL":"SHOOT")}const n=document.getElementById("hud-powerup");n&&t.powerUpLabel!==this.hudCache.powerUpLabel&&(t.powerUpLabel?(n.textContent=t.powerUpLabel,n.classList.remove("hidden")):n.classList.add("hidden")),t.invincible!==this.hudCache.invincible&&(t.invincible?e==null||e.classList.add("invincible-glow"):(l=document.getElementById("hud-hearts"))==null||l.classList.remove("invincible-glow")),t.screenBlur!==this.hudCache.screenBlur&&((c=document.getElementById("screen-blur"))==null||c.classList.toggle("hidden",!t.screenBlur));const i=document.getElementById("fork-hint"),r=t.vaultHint||t.forkHint;if(i&&r!==(this.hudCache.vaultHint||this.hudCache.forkHint)&&(r?(i.textContent=r,i.classList.remove("hidden"),i.classList.toggle("vault-hint",!!t.vaultHint)):(i.classList.add("hidden"),i.classList.remove("vault-hint"))),t.jumpReady!==this.hudCache.jumpReady&&((h=document.getElementById("jump-btn"))==null||h.classList.toggle("ready",t.jumpReady)),t.slideReady!==this.hudCache.slideReady&&((u=document.getElementById("slide-btn"))==null||u.classList.toggle("ready",t.slideReady)),t.shootReady!==this.hudCache.shootReady&&((d=document.getElementById("shoot-btn"))==null||d.classList.toggle("ready",t.shootReady),(f=document.getElementById("shoot-cd"))==null||f.classList.toggle("hidden",t.shootReady)),t.specialCharge!==this.hudCache.specialCharge||t.specialReady!==this.hudCache.specialReady||t.specialShakes!==this.hudCache.specialShakes){const _=document.getElementById("special-fill");_&&(_.style.height=`${Math.round(t.specialCharge*100)}%`);const m=document.getElementById("special-btn");m==null||m.classList.toggle("ready",t.specialReady);const p=document.getElementById("special-shakes");p&&(t.specialShakes>0?(p.textContent=String(t.specialShakes),p.classList.remove("hidden")):p.classList.add("hidden"))}t.jumpReady!==this.hudCache.jumpReady&&((g=document.getElementById("jump-btn"))==null||g.classList.toggle("ready",t.jumpReady));const a=document.getElementById("ability-cd"),o=document.getElementById("ability-btn");a&&o&&(t.abilityCd!==this.hudCache.abilityCd||t.abilityReady!==this.hudCache.abilityReady)&&(t.abilityCd>0?(a.classList.remove("hidden"),a.textContent=Math.ceil(t.abilityCd).toString(),o.disabled=!0):t.abilityReady&&(a.classList.add("hidden"),o.disabled=!1)),this.hudCache={...t}}toast(t){const e=this.el(`<div class="message-toast">${t}</div>`);this.root.appendChild(e),setTimeout(()=>e.remove(),2200)}onGameEnd(t){if(t.won){this.save.addCoins(t.coinsEarned),this.save.setStars(t.levelId,t.stars),this.save.recordWin();const e=wc(t.levelId);e&&this.save.unlockLevel(e)}else this.save.addCoins(Math.floor(t.coinsEarned*.3));this.showResults(t)}showResults(t){var a;this.screen="results",(a=this.game)==null||a.stop(),this.setCanvasVisible(!1),this.clear();const e=wc(t.levelId),n=this.save.get(),i=t.won&&e&&n.unlockedLevels.includes(e),r=this.wrapScreen(`
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
    `);this.root.appendChild(r),i&&r.querySelector("#btn-next").addEventListener("click",()=>this.showBriefing(e)),r.querySelector("#btn-retry").addEventListener("click",()=>this.showBriefing(t.levelId)),r.querySelector("#btn-shop").addEventListener("click",()=>this.showShop()),r.querySelector("#btn-menu").addEventListener("click",()=>this.showMenu())}}const g1=new Uh,v1=document.getElementById("ui-root");new m1(v1,g1);r1();function Er(s){s.target.closest(".shop-scroll, .levels-screen, .scroll-touch")||s.preventDefault()}document.addEventListener("touchmove",Er,{passive:!1});document.addEventListener("gesturestart",Er);document.addEventListener("gesturechange",Er);document.addEventListener("gestureend",Er);document.addEventListener("touchstart",s=>{if(s.touches.length>1){s.preventDefault();return}document.body.classList.contains("game-active")&&(s.target.closest("button, .touch-steer")||s.preventDefault())},{passive:!1,capture:!0});let Pc=0;document.addEventListener("touchend",s=>{const t=Date.now();t-Pc<=320&&s.preventDefault(),Pc=t,U&&window.scrollTo(0,0)},{passive:!1});document.addEventListener("contextmenu",s=>{s.target.closest("#game-canvas, .hud")&&s.preventDefault()});
