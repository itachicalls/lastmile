var cu=Object.defineProperty;var hu=(i,t,e)=>t in i?cu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var U=(i,t,e)=>hu(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const na={coins:0,unlockedLevels:["1-1"],levelStars:{},purchases:{},equippedTurrets:[],equippedAbility:null,totalDeliveries:0,selectedCharacter:"johnny",mobileAutoFire:!0},cl={convoy:5,maxConvoy:50,integrity:3,maxIntegrity:3,packages:0,maxPackages:25,stamps:0,coins:0,speed:11,baseSpeed:11,distance:0,integrityLost:!1,bonusRoute:!1},hl="last-mile-save";class uu{constructor(){U(this,"data");this.data=this.load()}load(){try{const t=localStorage.getItem(hl);if(t)return{...na,...JSON.parse(t)}}catch{}return{...na}}save(){localStorage.setItem(hl,JSON.stringify(this.data))}get(){return this.data}addCoins(t){this.data.coins+=t,this.save()}spendCoins(t){return this.data.coins<t?!1:(this.data.coins-=t,this.save(),!0)}unlockLevel(t){this.data.unlockedLevels.includes(t)||(this.data.unlockedLevels.push(t),this.save())}setStars(t,e){const n=this.data.levelStars[t]??0;e>n&&(this.data.levelStars[t]=e,this.save())}getPurchaseLevel(t){return this.data.purchases[t]??0}setPurchaseLevel(t,e){this.data.purchases[t]=e,this.save()}equipTurret(t){const e=this.data.equippedTurrets;e.includes(t)?this.data.equippedTurrets=e.filter(n=>n!==t):e.length<2&&this.data.equippedTurrets.push(t),this.save()}equipAbility(t){this.data.equippedAbility=t,this.save()}setCharacter(t){this.data.selectedCharacter=t,this.save()}setMobileAutoFire(t){this.data.mobileAutoFire=t,this.save()}recordWin(){this.data.totalDeliveries+=1,this.save()}reset(){this.data={...na},this.save()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="171",fu=0,ul=1,du=2,pu=0,hh=1,mu=2,ai=3,Ti=0,Rn=1,We=2,ui=0,wi=1,ke=2,fl=3,dl=4,gu=5,Bi=100,vu=101,xu=102,_u=103,yu=104,bu=200,Mu=201,Su=202,wu=203,ja=204,Za=205,Eu=206,Tu=207,Au=208,Cu=209,Ru=210,Pu=211,Fu=212,Lu=213,Du=214,Ka=0,Ja=1,Qa=2,ys=3,to=4,eo=5,no=6,io=7,uh=0,Iu=1,Uu=2,Ei=0,Nu=1,Bu=2,ku=3,fh=4,Ou=5,zu=6,Hu=7,dh=300,bs=301,Ms=302,so=303,ro=304,jr=306,Nn=1e3,zi=1001,ao=1002,qn=1003,Gu=1004,sr=1005,Jn=1006,ia=1007,Hi=1008,mi=1009,ph=1010,mh=1011,Ks=1012,zo=1013,Wi=1014,li=1015,fi=1016,Ho=1017,Go=1018,Ss=1020,gh=35902,vh=1021,xh=1022,Wn=1023,_h=1024,yh=1025,ms=1026,ws=1027,bh=1028,Vo=1029,Mh=1030,Wo=1031,Xo=1033,Lr=33776,Dr=33777,Ir=33778,Ur=33779,oo=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37808,go=37809,vo=37810,xo=37811,_o=37812,yo=37813,bo=37814,Mo=37815,So=37816,wo=37817,Eo=37818,To=37819,Ao=37820,Co=37821,Nr=36492,Ro=36494,Po=36495,Sh=36283,Fo=36284,Lo=36285,Do=36286,Vu=3200,Wu=3201,wh=0,Xu=1,Si="",Be="srgb",Es="srgb-linear",Or="linear",Ge="srgb",Xi=7680,pl=519,qu=512,Yu=513,$u=514,Eh=515,ju=516,Zu=517,Ku=518,Ju=519,Io=35044,ml="300 es",ci=2e3,zr=2001;class Cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gl=1234567;const qs=Math.PI/180,Js=180/Math.PI;function di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function qo(i,t){return(i%t+t)%t}function Qu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function tf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ys(i,t,e){return(1-e)*i+e*t}function ef(i,t,e,n){return Ys(i,t,1-Math.exp(-e*n))}function nf(i,t=1){return t-Math.abs(qo(i,t*2)-t)}function sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function af(i,t){return i+Math.floor(Math.random()*(t-i+1))}function of(i,t){return i+Math.random()*(t-i)}function lf(i){return i*(.5-Math.random())}function cf(i){i!==void 0&&(gl=i);let t=gl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hf(i){return i*qs}function uf(i){return i*Js}function ff(i){return(i&i-1)===0&&i!==0}function df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mf(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gs={DEG2RAD:qs,RAD2DEG:Js,generateUUID:di,clamp:Se,euclideanModulo:qo,mapLinear:Qu,inverseLerp:tf,lerp:Ys,damp:ef,pingpong:nf,smoothstep:sf,smootherstep:rf,randInt:af,randFloat:of,randFloatSpread:lf,seededRandom:cf,degToRad:hf,radToDeg:uf,isPowerOfTwo:ff,ceilPowerOfTwo:df,floorPowerOfTwo:pf,setQuaternionFromProperEuler:mf,normalize:He,denormalize:Vn};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(t,e,n,s,r,a,o,l,c){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],v=n[8],y=s[0],g=s[3],d=s[6],S=s[1],C=s[4],E=s[7],B=s[2],F=s[5],L=s[8];return r[0]=a*y+o*S+l*B,r[3]=a*g+o*C+l*F,r[6]=a*d+o*E+l*L,r[1]=c*y+h*S+u*B,r[4]=c*g+h*C+u*F,r[7]=c*d+h*E+u*L,r[2]=f*y+p*S+v*B,r[5]=f*g+p*C+v*F,r[8]=f*d+p*E+v*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,v=e*u+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new xe;function Th(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gf(){const i=Hr("canvas");return i.style.display="block",i}const vl={};function us(i){i in vl||(vl[i]=!0,console.warn(i))}function vf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function xf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _f(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xl=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yf(){const i={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ge&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ge&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Or:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Es]:{primaries:t,whitePoint:n,transfer:Or,toXYZ:xl,fromXYZ:_l,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:Ge,toXYZ:xl,fromXYZ:_l,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}const Ie=yf();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class bf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=Hr("canvas")),qi.width=t.width,qi.height=t.height;const n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mf=0;class Ah{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ra(s[a].image)):r.push(ra(s[a]))}else r=ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sf=0;class Sn extends Cs{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,n=zi,s=zi,r=Jn,a=Hi,o=Wn,l=mi,c=Sn.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=di(),this.name="",this.source=new Ah(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nn:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nn:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=dh;Sn.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,e=0,n=0,s=1){Ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],v=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(c+1)/2,E=(p+1)/2,B=(d+1)/2,F=(h+f)/4,L=(u+y)/4,k=(v+g)/4;return C>E&&C>B?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=F/n,r=L/n):E>B?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=F/s,r=k/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=L/r,s=k/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-v)*(g-v)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-v)/S,this.y=(u-y)/S,this.z=(f-h)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wf extends Cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ah(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ch extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ef extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],v=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=y;return}if(u!==y||l!==f||c!==p||h!==v){let g=1-o;const d=l*f+c*p+h*v+u*y,S=d>=0?1:-1,C=1-d*d;if(C>Number.EPSILON){const B=Math.sqrt(C),F=Math.atan2(B,d*S);g=Math.sin(g*F)/B,o=Math.sin(o*F)/B}const E=o*S;if(l=l*g+f*E,c=c*g+p*E,h=h*g+v*E,u=u*g+y*E,g===1-o){const B=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=B,c*=B,h*=B,u*=B}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+h*u+l*p-c*f,t[e+1]=l*v+h*f+c*u-o*p,t[e+2]=c*v+h*p+o*f-l*u,t[e+3]=h*v-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"YXZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"ZXY":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"ZYX":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"YZX":this._x=f*h*u+c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u-f*p*v;break;case"XZY":this._x=f*h*u-c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,n=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new V,yl=new Qs;class tr{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),ar.subVectors(this.max,Ds),Yi.subVectors(t.a,Ds),$i.subVectors(t.b,Ds),ji.subVectors(t.c,Ds),vi.subVectors($i,Yi),xi.subVectors(ji,$i),Ci.subVectors(Yi,ji);let e=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Ci.z,Ci.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Ci.z,0,-Ci.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Ci.y,Ci.x,0];return!oa(e,Yi,$i,ji,ar)||(e=[1,0,0,0,1,0,0,0,1],!oa(e,Yi,$i,ji,ar))?!1:(or.crossVectors(vi,xi),e=[or.x,or.y,or.z],oa(e,Yi,$i,ji,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new V,new V,new V,new V,new V,new V,new V,new V],On=new V,rr=new tr,Yi=new V,$i=new V,ji=new V,vi=new V,xi=new V,Ci=new V,Ds=new V,ar=new V,or=new V,Ri=new V;function oa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);const o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tf=new tr,Is=new V,la=new V;class Yo{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(la)),this.expandByPoint(Is.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new V,ca=new V,lr=new V,_i=new V,ha=new V,cr=new V,ua=new V;class Af{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ca.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(ca);const r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=_i.dot(this.direction),l=-_i.dot(lr),c=_i.lengthSq(),h=Math.abs(1-a*a);let u,f,p,v;if(h>0)if(u=a*l-o,f=a*o-l,v=r*h,u>=0)if(f>=-v)if(f<=v){const y=1/h;u*=y,f*=y,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ca).addScaledVector(lr,f),p}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){ha.subVectors(e,t),cr.subVectors(n,t),ua.crossVectors(ha,cr);let a=this.direction.dot(ua),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);const l=o*this.direction.dot(cr.crossVectors(_i,cr));if(l<0)return null;const c=o*this.direction.dot(ha.cross(_i));if(c<0||l+c>a)return null;const h=-o*_i.dot(ua);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,v,y,g){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,v,y,g)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,v,y,g){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=v,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,v=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+v*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=v+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,v=c*h,y=c*u;e[0]=f+y*o,e[4]=v*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-v,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,v=c*h,y=c*u;e[0]=f-y*o,e[4]=-a*u,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,v=o*h,y=o*u;e[0]=l*h,e[4]=v*c-p,e[8]=f*c+y,e[1]=l*u,e[5]=y*c+f,e[9]=p*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,v=o*l,y=o*c;e[0]=l*h,e[4]=y-f*u,e[8]=v*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+v,e[10]=f-y*u}else if(t.order==="XZY"){const f=a*l,p=a*c,v=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+y,e[5]=a*h,e[9]=p*u-v,e[2]=v*u-p,e[6]=o*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cf,t,Rf)}lookAt(t,e,n){const s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),yi.crossVectors(n,Pn),yi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),yi.crossVectors(n,Pn)),yi.normalize(),hr.crossVectors(Pn,yi),s[0]=yi.x,s[4]=hr.x,s[8]=Pn.x,s[1]=yi.y,s[5]=hr.y,s[9]=Pn.y,s[2]=yi.z,s[6]=hr.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],v=n[2],y=n[6],g=n[10],d=n[14],S=n[3],C=n[7],E=n[11],B=n[15],F=s[0],L=s[4],k=s[8],P=s[12],b=s[1],z=s[5],it=s[9],nt=s[13],vt=s[2],bt=s[6],ut=s[10],Et=s[14],lt=s[3],Pt=s[7],Vt=s[11],Jt=s[15];return r[0]=a*F+o*b+l*vt+c*lt,r[4]=a*L+o*z+l*bt+c*Pt,r[8]=a*k+o*it+l*ut+c*Vt,r[12]=a*P+o*nt+l*Et+c*Jt,r[1]=h*F+u*b+f*vt+p*lt,r[5]=h*L+u*z+f*bt+p*Pt,r[9]=h*k+u*it+f*ut+p*Vt,r[13]=h*P+u*nt+f*Et+p*Jt,r[2]=v*F+y*b+g*vt+d*lt,r[6]=v*L+y*z+g*bt+d*Pt,r[10]=v*k+y*it+g*ut+d*Vt,r[14]=v*P+y*nt+g*Et+d*Jt,r[3]=S*F+C*b+E*vt+B*lt,r[7]=S*L+C*z+E*bt+B*Pt,r[11]=S*k+C*it+E*ut+B*Vt,r[15]=S*P+C*nt+E*Et+B*Jt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],v=t[3],y=t[7],g=t[11],d=t[15];return v*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+y*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+g*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],v=t[12],y=t[13],g=t[14],d=t[15],S=u*g*c-y*f*c+y*l*p-o*g*p-u*l*d+o*f*d,C=v*f*c-h*g*c-v*l*p+a*g*p+h*l*d-a*f*d,E=h*y*c-v*u*c+v*o*p-a*y*p-h*o*d+a*u*d,B=v*u*l-h*y*l-v*o*f+a*y*f+h*o*g-a*u*g,F=e*S+n*C+s*E+r*B;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/F;return t[0]=S*L,t[1]=(y*f*r-u*g*r-y*s*p+n*g*p+u*s*d-n*f*d)*L,t[2]=(o*g*r-y*l*r+y*s*c-n*g*c-o*s*d+n*l*d)*L,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*L,t[4]=C*L,t[5]=(h*g*r-v*f*r+v*s*p-e*g*p-h*s*d+e*f*d)*L,t[6]=(v*l*r-a*g*r-v*s*c+e*g*c+a*s*d-e*l*d)*L,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*L,t[8]=E*L,t[9]=(v*u*r-h*y*r-v*n*p+e*y*p+h*n*d-e*u*d)*L,t[10]=(a*y*r-v*o*r+v*n*c-e*y*c-a*n*d+e*o*d)*L,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*L,t[12]=B*L,t[13]=(h*y*s-v*u*s+v*n*f-e*y*f-h*n*g+e*u*g)*L,t[14]=(v*o*s-a*y*s-v*n*l+e*y*l+a*n*g-e*o*g)*L,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,v=r*u,y=a*h,g=a*u,d=o*u,S=l*c,C=l*h,E=l*u,B=n.x,F=n.y,L=n.z;return s[0]=(1-(y+d))*B,s[1]=(p+E)*B,s[2]=(v-C)*B,s[3]=0,s[4]=(p-E)*F,s[5]=(1-(f+d))*F,s[6]=(g+S)*F,s[7]=0,s[8]=(v+C)*L,s[9]=(g-S)*L,s[10]=(1-(f+y))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Zi.set(s[0],s[1],s[2]).length();const a=Zi.set(s[4],s[5],s[6]).length(),o=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],zn.copy(this);const c=1/r,h=1/a,u=1/o;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ci){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,v;if(o===ci)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===zr)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ci){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,p=(n+s)*h;let v,y;if(o===ci)v=(a+r)*u,y=-2*u;else if(o===zr)v=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new V,zn=new Ye,Cf=new V(0,0,0),Rf=new V(1,1,1),yi=new V,hr=new V,Pn=new V,bl=new Ye,Ml=new Qs;class Qn{constructor(t=0,e=0,n=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pf=0;const Sl=new V,Ki=new Qs,ii=new Ye,ur=new V,Us=new V,Ff=new V,Lf=new Qs,wl=new V(1,0,0),El=new V(0,1,0),Tl=new V(0,0,1),Al={type:"added"},Df={type:"removed"},Ji={type:"childadded",child:null},fa={type:"childremoved",child:null};class cn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const t=new V,e=new Qn,n=new Qs,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new xe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(wl,t)}rotateY(t){return this.rotateOnAxis(El,t)}rotateZ(t){return this.rotateOnAxis(Tl,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wl,t)}translateY(t){return this.translateOnAxis(El,t)}translateZ(t){return this.translateOnAxis(Tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Us,ur,this.up):ii.lookAt(ur,Us,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(ii),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Al),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Df),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Al),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}cn.DEFAULT_UP=new V(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new V,si=new V,da=new V,ri=new V,Qi=new V,ts=new V,Cl=new V,pa=new V,ma=new V,ga=new V,va=new Ve,xa=new Ve,_a=new Ve;class Bn{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),si.subVectors(n,e),da.subVectors(t,e);const a=Hn.dot(Hn),o=Hn.dot(si),l=Hn.dot(da),c=si.dot(si),h=si.dot(da),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,v=(a*h-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return va.setScalar(0),xa.setScalar(0),_a.setScalar(0),va.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,n),_a.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(va,r.x),a.addScaledVector(xa,r.y),a.addScaledVector(_a,r.z),a}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),si.subVectors(t,e),Hn.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Hn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Qi.subVectors(s,n),ts.subVectors(r,n),pa.subVectors(t,n);const l=Qi.dot(pa),c=ts.dot(pa);if(l<=0&&c<=0)return e.copy(n);ma.subVectors(t,s);const h=Qi.dot(ma),u=ts.dot(ma);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Qi,a);ga.subVectors(t,r);const p=Qi.dot(ga),v=ts.dot(ga);if(v>=0&&p<=v)return e.copy(r);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(ts,o);const g=h*v-p*u;if(g<=0&&u-h>=0&&p-v>=0)return Cl.subVectors(r,s),o=(u-h)/(u-h+(p-v)),e.copy(s).addScaledVector(Cl,o);const d=1/(g+y+f);return a=y*d,o=f*d,e.copy(n).addScaledVector(Qi,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},fr={h:0,s:0,l:0};function ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ie.workingColorSpace){if(t=qo(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ya(a,r,t+1/3),this.g=ya(a,r,t),this.b=ya(a,r,t-1/3)}return Ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Ie.fromWorkingColorSpace(vn.copy(this),t),Math.round(Se(vn.r*255,0,255))*65536+Math.round(Se(vn.g*255,0,255))*256+Math.round(Se(vn.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,s=vn.g,r=vn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=Be){Ie.fromWorkingColorSpace(vn.copy(this),t);const e=vn.r,n=vn.g,s=vn.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(fr);const n=Ys(bi.h,fr.h,e),s=Ys(bi.s,fr.s,e),r=Ys(bi.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Yt;Yt.NAMES=Ph;let If=0;class Rs extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=di(),this.name="",this.type="Material",this.blending=wi,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Za,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ue extends Rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const en=new V,dr=new Ct;class $n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Io,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Io&&(t.usage=this.usage),t}}class Fh extends $n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lh extends $n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Oe extends $n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uf=0;const Un=new Ye,ba=new cn,es=new V,Fn=new tr,Ns=new tr,on=new V;class _n extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Th(t)?Lh:Fh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Fn.min,Ns.min),Fn.expandByPoint(on),on.addVectors(Fn.max,Ns.max),Fn.expandByPoint(on)):(Fn.expandByPoint(Ns.min),Fn.expandByPoint(Ns.max))}Fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)on.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(on));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)on.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(t,c),on.add(es)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<n.count;k++)o[k]=new V,l[k]=new V;const c=new V,h=new V,u=new V,f=new Ct,p=new Ct,v=new Ct,y=new V,g=new V;function d(k,P,b){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,k),p.fromBufferAttribute(r,P),v.fromBufferAttribute(r,b),h.sub(c),u.sub(c),p.sub(f),v.sub(f);const z=1/(p.x*v.y-v.x*p.y);isFinite(z)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(z),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(z),o[k].add(y),o[P].add(y),o[b].add(y),l[k].add(g),l[P].add(g),l[b].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let k=0,P=S.length;k<P;++k){const b=S[k],z=b.start,it=b.count;for(let nt=z,vt=z+it;nt<vt;nt+=3)d(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const C=new V,E=new V,B=new V,F=new V;function L(k){B.fromBufferAttribute(s,k),F.copy(B);const P=o[k];C.copy(P),C.sub(B.multiplyScalar(B.dot(P))).normalize(),E.crossVectors(F,P);const z=E.dot(l[k])<0?-1:1;a.setXYZW(k,C.x,C.y,C.z,z)}for(let k=0,P=S.length;k<P;++k){const b=S[k],z=b.start,it=b.count;for(let nt=z,vt=z+it;nt<vt;nt+=3)L(t.getX(nt+0)),L(t.getX(nt+1)),L(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,h=new V,u=new V;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),y=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let d=0;d<h;d++)f[v++]=c[p++]}return new $n(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new Ye,Pi=new Af,pr=new Yo,Pl=new V,mr=new V,gr=new V,vr=new V,Ma=new V,xr=new V,Fl=new V,_r=new V;class Ne extends cn{constructor(t=new _n,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ma.fromBufferAttribute(u,t),a?xr.addScaledVector(Ma,h):xr.addScaledVector(Ma.sub(e),h))}e.add(xr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(pr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(pr,Pl)===null||Pi.origin.distanceToSquared(Pl)>(t.far-t.near)**2))&&(Rl.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const g=f[v],d=a[g.materialIndex],S=Math.max(g.start,p.start),C=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let E=S,B=C;E<B;E+=3){const F=o.getX(E),L=o.getX(E+1),k=o.getX(E+2);s=yr(this,d,t,n,c,h,u,F,L,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=v,d=y;g<d;g+=3){const S=o.getX(g),C=o.getX(g+1),E=o.getX(g+2);s=yr(this,a,t,n,c,h,u,S,C,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const g=f[v],d=a[g.materialIndex],S=Math.max(g.start,p.start),C=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let E=S,B=C;E<B;E+=3){const F=E,L=E+1,k=E+2;s=yr(this,d,t,n,c,h,u,F,L,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,d=y;g<d;g+=3){const S=g,C=g+1,E=g+2;s=yr(this,a,t,n,c,h,u,S,C,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Nf(i,t,e,n,s,r,a,o){let l;if(t.side===Rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ti,o),l===null)return null;_r.copy(o),_r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:i}}function yr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,vr);const h=Nf(i,t,e,n,mr,gr,vr,Fl);if(h){const u=new V;Bn.getBarycoord(Fl,mr,gr,vr,u),s&&(h.uv=Bn.getInterpolatedAttribute(s,o,l,c,u,new Ct)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,o,l,c,u,new Ct)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,l,c,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};Bn.getNormal(mr,gr,vr,f.normal),h.face=f,h.barycoord=u}return h}class W extends _n{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2));function v(y,g,d,S,C,E,B,F,L,k,P){const b=E/L,z=B/k,it=E/2,nt=B/2,vt=F/2,bt=L+1,ut=k+1;let Et=0,lt=0;const Pt=new V;for(let Vt=0;Vt<ut;Vt++){const Jt=Vt*z-nt;for(let ve=0;ve<bt;ve++){const Me=ve*b-it;Pt[y]=Me*S,Pt[g]=Jt*C,Pt[d]=vt,c.push(Pt.x,Pt.y,Pt.z),Pt[y]=0,Pt[g]=0,Pt[d]=F>0?1:-1,h.push(Pt.x,Pt.y,Pt.z),u.push(ve/L),u.push(1-Vt/k),Et+=1}}for(let Vt=0;Vt<k;Vt++)for(let Jt=0;Jt<L;Jt++){const ve=f+Jt+bt*Vt,Me=f+Jt+bt*(Vt+1),ft=f+(Jt+1)+bt*(Vt+1),mt=f+(Jt+1)+bt*Vt;l.push(ve,Me,mt),l.push(Me,ft,mt),lt+=6}o.addGroup(p,lt,P),p+=lt,f+=Et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new W(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function bn(i){const t={};for(let e=0;e<i.length;e++){const n=Ts(i[e]);for(const s in n)t[s]=n[s]}return t}function Bf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const Gr={clone:Ts,merge:bn};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ih extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new V,Ll=new Ct,Dl=new Ct;class Cn extends Ih{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Ll,Dl),e.subVectors(Dl,Ll)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ns=-90,is=1;class zf extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(ns,is,t,e);s.layers=this.layers,this.add(s);const r=new Cn(ns,is,t,e);r.layers=this.layers,this.add(r);const a=new Cn(ns,is,t,e);a.layers=this.layers,this.add(a);const o=new Cn(ns,is,t,e);o.layers=this.layers,this.add(o);const l=new Cn(ns,is,t,e);l.layers=this.layers,this.add(l);const c=new Cn(ns,is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Uh extends Sn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hf extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new W(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:ui});r.uniforms.tEquirect.value=e;const a=new Ne(s,r),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Jn),new zf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Vr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=e}clone(){return new Vr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nh extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Io,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yn=new V;class Wr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $o extends Rs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ss;const Bs=new V,rs=new V,as=new V,os=new Ct,ks=new Ct,Bh=new Ye,br=new V,Os=new V,Mr=new V,Il=new Ct,Sa=new Ct,Ul=new Ct;class Zr extends cn{constructor(t=new $o){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new _n;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gf(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new Wr(n,3,0,!1)),ss.setAttribute("uv",new Wr(n,2,3,!1))}this.geometry=ss,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Bh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-as.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Sr(br.set(-.5,-.5,0),as,a,rs,s,r),Sr(Os.set(.5,-.5,0),as,a,rs,s,r),Sr(Mr.set(.5,.5,0),as,a,rs,s,r),Il.set(0,0),Sa.set(1,0),Ul.set(1,1);let o=t.ray.intersectTriangle(br,Os,Mr,!1,Bs);if(o===null&&(Sr(Os.set(-.5,.5,0),as,a,rs,s,r),Sa.set(0,1),o=t.ray.intersectTriangle(br,Mr,Os,!1,Bs),o===null))return;const l=t.ray.origin.distanceTo(Bs);l<t.near||l>t.far||e.push({distance:l,point:Bs.clone(),uv:Bn.getInterpolation(Bs,br,Os,Mr,Il,Sa,Ul,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Sr(i,t,e,n,s,r){os.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ks.x=r*os.x-s*os.y,ks.y=s*os.x+r*os.y):ks.copy(os),i.copy(t),i.x+=ks.x,i.y+=ks.y,i.applyMatrix4(Bh)}const wa=new V,Vf=new V,Wf=new xe;class Ui{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wa.subVectors(n,e).cross(Vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wf.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Yo,wr=new V;class jo{constructor(t=new Ui,e=new Ui,n=new Ui,s=new Ui,r=new Ui,a=new Ui){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],v=s[9],y=s[10],g=s[11],d=s[12],S=s[13],C=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,g-p,E-d).normalize(),n[1].setComponents(l+r,f+c,g+p,E+d).normalize(),n[2].setComponents(l+a,f+h,g+v,E+S).normalize(),n[3].setComponents(l-a,f-h,g-v,E-S).normalize(),n[4].setComponents(l-o,f-u,g-y,E-C).normalize(),e===ci)n[5].setComponents(l+o,f+u,g+y,E+C).normalize();else if(e===zr)n[5].setComponents(o,u,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ie extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ln extends Sn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kh extends Sn{constructor(t,e,n,s,r,a,o,l,c,h=ms){if(h!==ms&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ms&&(n=Wi),n===void 0&&h===ws&&(n=Ss),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ct:new V);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new V,s=[],r=[],a=[],o=new V,l=new Ye;for(let p=0;p<=t;p++){const v=p/t;s[p]=this.getTangentAt(v,new V)}r[0]=new V,a[0]=new V;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Se(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Se(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zo extends ti{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xf extends Zo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ko(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Er=new V,Ea=new Ko,Ta=new Ko,Aa=new Ko;class qf extends ti{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Er.subVectors(s[0],s[1]).add(s[0]),c=Er);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Er.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Er),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);y<1e-4&&(y=1),v<1e-4&&(v=y),g<1e-4&&(g=y),Ea.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,y,g),Ta.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,y,g),Aa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,y,g)}else this.curveType==="catmullrom"&&(Ea.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ta.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Aa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ea.calc(l),Ta.calc(l),Aa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Yf(i,t){const e=1-i;return e*e*t}function $f(i,t){return 2*(1-i)*i*t}function jf(i,t){return i*i*t}function $s(i,t,e,n){return Yf(i,t)+$f(i,e)+jf(i,n)}function Zf(i,t){const e=1-i;return e*e*e*t}function Kf(i,t){const e=1-i;return 3*e*e*i*t}function Jf(i,t){return 3*(1-i)*i*i*t}function Qf(i,t){return i*i*i*t}function js(i,t,e,n,s){return Zf(i,t)+Kf(i,e)+Jf(i,n)+Qf(i,s)}class Oh extends ti{constructor(t=new Ct,e=new Ct,n=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ct){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(js(t,s.x,r.x,a.x,o.x),js(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class td extends ti{constructor(t=new V,e=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new V){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(js(t,s.x,r.x,a.x,o.x),js(t,s.y,r.y,a.y,o.y),js(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zh extends ti{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ed extends ti{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends ti{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($s(t,s.x,r.x,a.x),$s(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nd extends ti{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($s(t,s.x,r.x,a.x),$s(t,s.y,r.y,a.y),$s(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gh extends ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Nl(o,l.x,c.x,h.x,u.x),Nl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}}var Bl=Object.freeze({__proto__:null,ArcCurve:Xf,CatmullRomCurve3:qf,CubicBezierCurve:Oh,CubicBezierCurve3:td,EllipseCurve:Zo,LineCurve:zh,LineCurve3:ed,QuadraticBezierCurve:Hh,QuadraticBezierCurve3:nd,SplineCurve:Gh});class id extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Bl[s.type]().fromJSON(s))}return this}}class sd extends id{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zh(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Hh(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Oh(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s),new Ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Gh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Zo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jo extends _n{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Se(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new V,f=new Ct,p=new V,v=new V,y=new V;let g=0,d=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,p.x=d*1,p.y=-g,p.z=d*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,p.x=d*1,p.y=-g,p.z=d*0,v.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(v)}for(let S=0;S<=e;S++){const C=n+S*h*s,E=Math.sin(C),B=Math.cos(C);for(let F=0;F<=t.length-1;F++){u.x=t[F].x*E,u.y=t[F].y,u.z=t[F].x*B,a.push(u.x,u.y,u.z),f.x=S/e,f.y=F/(t.length-1),o.push(f.x,f.y);const L=l[3*F+0]*E,k=l[3*F+1],P=l[3*F+0]*B;c.push(L,k,P)}}for(let S=0;S<e;S++)for(let C=0;C<t.length-1;C++){const E=C+S*t.length,B=E,F=E+t.length,L=E+t.length+1,k=E+1;r.push(B,F,k),r.push(L,k,F)}this.setIndex(r),this.setAttribute("position",new Oe(a,3)),this.setAttribute("uv",new Oe(o,2)),this.setAttribute("normal",new Oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.points,t.segments,t.phiStart,t.phiLength)}}class jn extends Jo{constructor(t=1,e=1,n=4,s=8){const r=new sd;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new jn(t.radius,t.length,t.capSegments,t.radialSegments)}}class un extends _n{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new V,h=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(o,3)),this.setAttribute("uv",new Oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ft extends _n{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let v=0;const y=[],g=n/2;let d=0;S(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(p,2));function S(){const E=new V,B=new V;let F=0;const L=(e-t)/n;for(let k=0;k<=r;k++){const P=[],b=k/r,z=b*(e-t)+t;for(let it=0;it<=s;it++){const nt=it/s,vt=nt*l+o,bt=Math.sin(vt),ut=Math.cos(vt);B.x=z*bt,B.y=-b*n+g,B.z=z*ut,u.push(B.x,B.y,B.z),E.set(bt,L,ut).normalize(),f.push(E.x,E.y,E.z),p.push(nt,1-b),P.push(v++)}y.push(P)}for(let k=0;k<s;k++)for(let P=0;P<r;P++){const b=y[P][k],z=y[P+1][k],it=y[P+1][k+1],nt=y[P][k+1];(t>0||P!==0)&&(h.push(b,z,nt),F+=3),(e>0||P!==r-1)&&(h.push(z,it,nt),F+=3)}c.addGroup(d,F,0),d+=F}function C(E){const B=v,F=new Ct,L=new V;let k=0;const P=E===!0?t:e,b=E===!0?1:-1;for(let it=1;it<=s;it++)u.push(0,g*b,0),f.push(0,b,0),p.push(.5,.5),v++;const z=v;for(let it=0;it<=s;it++){const vt=it/s*l+o,bt=Math.cos(vt),ut=Math.sin(vt);L.x=P*ut,L.y=g*b,L.z=P*bt,u.push(L.x,L.y,L.z),f.push(0,b,0),F.x=bt*.5+.5,F.y=ut*.5*b+.5,p.push(F.x,F.y),v++}for(let it=0;it<s;it++){const nt=B+it,vt=z+it;E===!0?h.push(vt,vt+1,nt):h.push(vt+1,vt,nt),k+=3}c.addGroup(d,k,E===!0?1:2),d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ft(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dn extends Ft{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Dn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class er extends _n{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(r.slice(),3)),this.setAttribute("uv",new Oe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const C=new V,E=new V,B=new V;for(let F=0;F<e.length;F+=3)p(e[F+0],C),p(e[F+1],E),p(e[F+2],B),l(C,E,B,S)}function l(S,C,E,B){const F=B+1,L=[];for(let k=0;k<=F;k++){L[k]=[];const P=S.clone().lerp(E,k/F),b=C.clone().lerp(E,k/F),z=F-k;for(let it=0;it<=z;it++)it===0&&k===F?L[k][it]=P:L[k][it]=P.clone().lerp(b,it/z)}for(let k=0;k<F;k++)for(let P=0;P<2*(F-k)-1;P++){const b=Math.floor(P/2);P%2===0?(f(L[k][b+1]),f(L[k+1][b]),f(L[k][b])):(f(L[k][b+1]),f(L[k+1][b+1]),f(L[k+1][b]))}}function c(S){const C=new V;for(let E=0;E<r.length;E+=3)C.x=r[E+0],C.y=r[E+1],C.z=r[E+2],C.normalize().multiplyScalar(S),r[E+0]=C.x,r[E+1]=C.y,r[E+2]=C.z}function h(){const S=new V;for(let C=0;C<r.length;C+=3){S.x=r[C+0],S.y=r[C+1],S.z=r[C+2];const E=g(S)/2/Math.PI+.5,B=d(S)/Math.PI+.5;a.push(E,1-B)}v(),u()}function u(){for(let S=0;S<a.length;S+=6){const C=a[S+0],E=a[S+2],B=a[S+4],F=Math.max(C,E,B),L=Math.min(C,E,B);F>.9&&L<.1&&(C<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),B<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function p(S,C){const E=S*3;C.x=t[E+0],C.y=t[E+1],C.z=t[E+2]}function v(){const S=new V,C=new V,E=new V,B=new V,F=new Ct,L=new Ct,k=new Ct;for(let P=0,b=0;P<r.length;P+=9,b+=6){S.set(r[P+0],r[P+1],r[P+2]),C.set(r[P+3],r[P+4],r[P+5]),E.set(r[P+6],r[P+7],r[P+8]),F.set(a[b+0],a[b+1]),L.set(a[b+2],a[b+3]),k.set(a[b+4],a[b+5]),B.copy(S).add(C).add(E).divideScalar(3);const z=g(B);y(F,b+0,S,z),y(L,b+2,C,z),y(k,b+4,E,z)}}function y(S,C,E,B){B<0&&S.x===1&&(a[C]=S.x-1),E.x===0&&E.z===0&&(a[C]=B/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.vertices,t.indices,t.radius,t.details)}}class Kr extends er{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kr(t.radius,t.detail)}}class Qo extends er{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qo(t.radius,t.detail)}}class nr extends er{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nr(t.radius,t.detail)}}class Pe extends _n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],v=[],y=[],g=[];for(let d=0;d<h;d++){const S=d*f-a;for(let C=0;C<c;C++){const E=C*u-r;v.push(E,-S,0),y.push(0,0,1),g.push(C/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const C=S+c*d,E=S+c*(d+1),B=S+1+c*(d+1),F=S+1+c*d;p.push(C,E,F),p.push(E,B,F)}this.setIndex(p),this.setAttribute("position",new Oe(v,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.widthSegments,t.heightSegments)}}class In extends _n{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,p=new V,v=new Ct;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){const d=r+g/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/e+1)/2,v.y=(p.y/e+1)/2,h.push(v.x,v.y)}u+=f}for(let y=0;y<s;y++){const g=y*(n+1);for(let d=0;d<n;d++){const S=d+g,C=S,E=S+n+1,B=S+n+2,F=S+1;o.push(C,E,F),o.push(E,B,F)}}this.setIndex(o),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Kt extends _n{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new V,f=new V,p=[],v=[],y=[],g=[];for(let d=0;d<=n;d++){const S=[],C=d/n;let E=0;d===0&&a===0?E=.5/e:d===n&&l===Math.PI&&(E=-.5/e);for(let B=0;B<=e;B++){const F=B/e;u.x=-t*Math.cos(s+F*r)*Math.sin(a+C*o),u.y=t*Math.cos(a+C*o),u.z=t*Math.sin(s+F*r)*Math.sin(a+C*o),v.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),g.push(F+E,1-C),S.push(c++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){const C=h[d][S+1],E=h[d][S],B=h[d+1][S],F=h[d+1][S+1];(d!==0||a>0)&&p.push(C,E,F),(d!==n-1||l<Math.PI)&&p.push(E,B,F)}this.setIndex(p),this.setAttribute("position",new Oe(v,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class En extends _n{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new V,u=new V,f=new V;for(let p=0;p<=n;p++)for(let v=0;v<=s;v++){const y=v/s*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=s;v++){const y=(s+1)*p+v-1,g=(s+1)*(p-1)+v-1,d=(s+1)*(p-1)+v,S=(s+1)*p+v;a.push(y,g,S),a.push(g,d,S)}this.setIndex(a),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class je extends Rs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rd extends Rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ad extends Rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Jr extends cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class od extends Jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ca=new Ye,kl=new V,Ol=new V;class Vh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(kl),Ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ol),e.updateMatrixWorld(),Ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zl=new Ye,zs=new V,Ra=new V;class ld extends Vh{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(zs),Ra.copy(n.position),Ra.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ra),n.updateMatrixWorld(),s.makeTranslation(-zs.x,-zs.y,-zs.z),zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl)}}class xs extends Jr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ld}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class tl extends Ih{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class cd extends Vh{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fs extends Jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new cd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Wh extends Jr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class hd extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ud{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Hl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Hl(){return performance.now()}function Gl(i,t,e,n){const s=fd(n);switch(e){case vh:return i*t;case _h:return i*t;case yh:return i*t*2;case bh:return i*t/s.components*s.byteLength;case Vo:return i*t/s.components*s.byteLength;case Mh:return i*t*2/s.components*s.byteLength;case Wo:return i*t*2/s.components*s.byteLength;case xh:return i*t*3/s.components*s.byteLength;case Wn:return i*t*4/s.components*s.byteLength;case Xo:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:case ho:return Math.max(i,16)*Math.max(t,8)/4;case oo:case co:return Math.max(i,8)*Math.max(t,8)/2;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nr:case Ro:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sh:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lo:case Do:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fd(i){switch(i){case mi:case ph:return{byteLength:1,components:1};case Ks:case mh:case fi:return{byteLength:2,components:1};case Ho:case Go:return{byteLength:2,components:4};case Wi:case zo:case li:return{byteLength:4,components:1};case gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<u.length;p++){const v=u[f],y=u[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,u[f]=y)}u.length=f+1;for(let p=0,v=u.length;p<v;p++){const y=u[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
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
#endif`,Sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bd=`#define PI 3.141592653589793
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
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Od=`vec3 transformedNormal = objectNormal;
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
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
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
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
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
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
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
#endif`,f0=`struct PhysicalMaterial {
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
}`,d0=`
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
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
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
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
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J0=`float getShadowMask() {
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
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,yp=`#if DEPTH_PACKING == 3200
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
}`,bp=`#define DISTANCE
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
}`,Mp=`#define DISTANCE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Rp=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
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
}`,Fp=`#define MATCAP
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
}`,Lp=`#define MATCAP
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
}`,Dp=`#define NORMAL
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
}`,Ip=`#define NORMAL
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
}`,Up=`#define PHONG
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
}`,Np=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,kp=`#define STANDARD
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
}`,Op=`#define TOON
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
}`,zp=`#define TOON
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
}`,Hp=`uniform float size;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Wp=`uniform vec3 color;
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
}`,Xp=`uniform float rotation;
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
}`,qp=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:vd,alphatest_fragment:xd,alphatest_pars_fragment:_d,aomap_fragment:yd,aomap_pars_fragment:bd,batching_pars_vertex:Md,batching_vertex:Sd,begin_vertex:wd,beginnormal_vertex:Ed,bsdfs:Td,iridescence_fragment:Ad,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Ld,color_fragment:Dd,color_pars_fragment:Id,color_pars_vertex:Ud,color_vertex:Nd,common:Bd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Od,displacementmap_pars_vertex:zd,displacementmap_vertex:Hd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Vd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:$d,envmap_pars_vertex:jd,envmap_physical_pars_fragment:a0,envmap_vertex:Zd,fog_vertex:Kd,fog_pars_vertex:Jd,fog_fragment:Qd,fog_pars_fragment:t0,gradientmap_pars_fragment:e0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:h0,lights_physical_fragment:u0,lights_physical_pars_fragment:f0,lights_fragment_begin:d0,lights_fragment_maps:p0,lights_fragment_end:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:v0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:_0,map_fragment:y0,map_pars_fragment:b0,map_particle_fragment:M0,map_particle_pars_fragment:S0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:E0,morphinstance_vertex:T0,morphcolor_vertex:A0,morphnormal_vertex:C0,morphtarget_pars_vertex:R0,morphtarget_vertex:P0,normal_fragment_begin:F0,normal_fragment_maps:L0,normal_pars_fragment:D0,normal_pars_vertex:I0,normal_vertex:U0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:z0,opaque_fragment:H0,packing:G0,premultiplied_alpha_fragment:V0,project_vertex:W0,dithering_fragment:X0,dithering_pars_fragment:q0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Z0,shadowmap_vertex:K0,shadowmask_pars_fragment:J0,skinbase_vertex:Q0,skinning_pars_vertex:tp,skinning_vertex:ep,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:rp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:hp,uv_vertex:up,worldpos_vertex:fp,background_vert:dp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:vp,cube_frag:xp,depth_vert:_p,depth_frag:yp,distanceRGBA_vert:bp,distanceRGBA_frag:Mp,equirect_vert:Sp,equirect_frag:wp,linedashed_vert:Ep,linedashed_frag:Tp,meshbasic_vert:Ap,meshbasic_frag:Cp,meshlambert_vert:Rp,meshlambert_frag:Pp,meshmatcap_vert:Fp,meshmatcap_frag:Lp,meshnormal_vert:Dp,meshnormal_frag:Ip,meshphong_vert:Up,meshphong_frag:Np,meshphysical_vert:Bp,meshphysical_frag:kp,meshtoon_vert:Op,meshtoon_frag:zp,points_vert:Hp,points_frag:Gp,shadow_vert:Vp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:qp},It={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Kn={basic:{uniforms:bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Yt(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:bn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:bn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Yt(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:bn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:bn([It.points,It.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:bn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:bn([It.common,It.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:bn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:bn([It.sprite,It.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:bn([It.common,It.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:bn([It.lights,It.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Kn.physical={uniforms:bn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Tr={r:0,b:0,g:0},Li=new Qn,Yp=new Ye;function $p(i,t,e,n,s,r,a){const o=new Yt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function v(C){let E=C.isScene===!0?C.background:null;return E&&E.isTexture&&(E=(C.backgroundBlurriness>0?e:t).get(E)),E}function y(C){let E=!1;const B=v(C);B===null?d(o,l):B&&B.isColor&&(d(B,1),E=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(C,E){const B=v(E);B&&(B.isCubeTexture||B.mapping===jr)?(h===void 0&&(h=new Ne(new W(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ts(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Li.copy(E.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=B,h.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(Li)),h.material.toneMapped=Ie.getTransfer(B.colorSpace)!==Ge,(u!==B||f!==B.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=B,f=B.version,p=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):B&&B.isTexture&&(c===void 0&&(c=new Ne(new Pe(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ts(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=B,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ie.getTransfer(B.colorSpace)!==Ge,B.matrixAutoUpdate===!0&&B.updateMatrix(),c.material.uniforms.uvTransform.value.copy(B.matrix),(u!==B||f!==B.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=B,f=B.version,p=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function d(C,E){C.getRGB(Tr,Dh(i)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,E,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(C,E=1){o.set(C),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,d(o,l)},render:y,addToRenderList:g,dispose:S}}function jp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(b,z,it,nt,vt){let bt=!1;const ut=u(nt,it,z);r!==ut&&(r=ut,c(r.object)),bt=p(b,nt,it,vt),bt&&v(b,nt,it,vt),vt!==null&&t.update(vt,i.ELEMENT_ARRAY_BUFFER),(bt||a)&&(a=!1,E(b,z,it,nt),vt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,z,it){const nt=it.wireframe===!0;let vt=n[b.id];vt===void 0&&(vt={},n[b.id]=vt);let bt=vt[z.id];bt===void 0&&(bt={},vt[z.id]=bt);let ut=bt[nt];return ut===void 0&&(ut=f(l()),bt[nt]=ut),ut}function f(b){const z=[],it=[],nt=[];for(let vt=0;vt<e;vt++)z[vt]=0,it[vt]=0,nt[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:it,attributeDivisors:nt,object:b,attributes:{},index:null}}function p(b,z,it,nt){const vt=r.attributes,bt=z.attributes;let ut=0;const Et=it.getAttributes();for(const lt in Et)if(Et[lt].location>=0){const Vt=vt[lt];let Jt=bt[lt];if(Jt===void 0&&(lt==="instanceMatrix"&&b.instanceMatrix&&(Jt=b.instanceMatrix),lt==="instanceColor"&&b.instanceColor&&(Jt=b.instanceColor)),Vt===void 0||Vt.attribute!==Jt||Jt&&Vt.data!==Jt.data)return!0;ut++}return r.attributesNum!==ut||r.index!==nt}function v(b,z,it,nt){const vt={},bt=z.attributes;let ut=0;const Et=it.getAttributes();for(const lt in Et)if(Et[lt].location>=0){let Vt=bt[lt];Vt===void 0&&(lt==="instanceMatrix"&&b.instanceMatrix&&(Vt=b.instanceMatrix),lt==="instanceColor"&&b.instanceColor&&(Vt=b.instanceColor));const Jt={};Jt.attribute=Vt,Vt&&Vt.data&&(Jt.data=Vt.data),vt[lt]=Jt,ut++}r.attributes=vt,r.attributesNum=ut,r.index=nt}function y(){const b=r.newAttributes;for(let z=0,it=b.length;z<it;z++)b[z]=0}function g(b){d(b,0)}function d(b,z){const it=r.newAttributes,nt=r.enabledAttributes,vt=r.attributeDivisors;it[b]=1,nt[b]===0&&(i.enableVertexAttribArray(b),nt[b]=1),vt[b]!==z&&(i.vertexAttribDivisor(b,z),vt[b]=z)}function S(){const b=r.newAttributes,z=r.enabledAttributes;for(let it=0,nt=z.length;it<nt;it++)z[it]!==b[it]&&(i.disableVertexAttribArray(it),z[it]=0)}function C(b,z,it,nt,vt,bt,ut){ut===!0?i.vertexAttribIPointer(b,z,it,vt,bt):i.vertexAttribPointer(b,z,it,nt,vt,bt)}function E(b,z,it,nt){y();const vt=nt.attributes,bt=it.getAttributes(),ut=z.defaultAttributeValues;for(const Et in bt){const lt=bt[Et];if(lt.location>=0){let Pt=vt[Et];if(Pt===void 0&&(Et==="instanceMatrix"&&b.instanceMatrix&&(Pt=b.instanceMatrix),Et==="instanceColor"&&b.instanceColor&&(Pt=b.instanceColor)),Pt!==void 0){const Vt=Pt.normalized,Jt=Pt.itemSize,ve=t.get(Pt);if(ve===void 0)continue;const Me=ve.buffer,ft=ve.type,mt=ve.bytesPerElement,Ot=ft===i.INT||ft===i.UNSIGNED_INT||Pt.gpuType===zo;if(Pt.isInterleavedBufferAttribute){const Ut=Pt.data,re=Ut.stride,fe=Pt.offset;if(Ut.isInstancedInterleavedBuffer){for(let ge=0;ge<lt.locationSize;ge++)d(lt.location+ge,Ut.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let ge=0;ge<lt.locationSize;ge++)g(lt.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ge=0;ge<lt.locationSize;ge++)C(lt.location+ge,Jt/lt.locationSize,ft,Vt,re*mt,(fe+Jt/lt.locationSize*ge)*mt,Ot)}else{if(Pt.isInstancedBufferAttribute){for(let Ut=0;Ut<lt.locationSize;Ut++)d(lt.location+Ut,Pt.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let Ut=0;Ut<lt.locationSize;Ut++)g(lt.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ut=0;Ut<lt.locationSize;Ut++)C(lt.location+Ut,Jt/lt.locationSize,ft,Vt,Jt*mt,Jt/lt.locationSize*Ut*mt,Ot)}}else if(ut!==void 0){const Vt=ut[Et];if(Vt!==void 0)switch(Vt.length){case 2:i.vertexAttrib2fv(lt.location,Vt);break;case 3:i.vertexAttrib3fv(lt.location,Vt);break;case 4:i.vertexAttrib4fv(lt.location,Vt);break;default:i.vertexAttrib1fv(lt.location,Vt)}}}}S()}function B(){k();for(const b in n){const z=n[b];for(const it in z){const nt=z[it];for(const vt in nt)h(nt[vt].object),delete nt[vt];delete z[it]}delete n[b]}}function F(b){if(n[b.id]===void 0)return;const z=n[b.id];for(const it in z){const nt=z[it];for(const vt in nt)h(nt[vt].object),delete nt[vt];delete z[it]}delete n[b.id]}function L(b){for(const z in n){const it=n[z];if(it[b.id]===void 0)continue;const nt=it[b.id];for(const vt in nt)h(nt[vt].object),delete nt[vt];delete it[b.id]}}function k(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:P,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:g,disableUnusedAttributes:S}}function Zp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let y=0;y<u;y++)v+=h[y]*f[y];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Wn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const k=L===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==mi&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==li&&!k)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=v>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:E,vertexTextures:B,maxSamples:F}}function Jp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ui,o=new xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const v=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,d=i.get(u);if(!s||v===null||v.length===0||r&&!g)r?h(null):c();else{const S=r?0:n,C=S*4;let E=d.clippingState||null;l.value=E,E=h(v,f,C,p);for(let B=0;B!==C;++B)E[B]=e[B];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,v){const y=u!==null?u.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const d=p+y*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<d)&&(g=new Float32Array(d));for(let C=0,E=p;C!==y;++C,E+=4)a.copy(u[C]).applyMatrix4(S,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function Qp(i){let t=new WeakMap;function e(a,o){return o===so?a.mapping=bs:o===ro&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===so||o===ro)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ds=4,Vl=[.125,.215,.35,.446,.526,.582],ki=20,Pa=new tl,Wl=new Yt;let Fa=null,La=0,Da=0,Ia=!1;const Ni=(1+Math.sqrt(5))/2,ls=1/Ni,Xl=[new V(-Ni,ls,0),new V(Ni,ls,0),new V(-ls,0,Ni),new V(ls,0,Ni),new V(0,Ni,-ls),new V(0,Ni,ls),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class ql{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,La,Da),this._renderer.xr.enabled=Ia,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:fi,format:Wn,colorSpace:Es,depthBuffer:!1},s=Yl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(r)),this._blurMaterial=em(r,t,e)}return s}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,n,s){const o=new Cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Wl),h.toneMapping=Ei,h.autoClear=!1;const p=new ue({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),v=new Ne(new W,p);let y=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,y=!0):(p.color.copy(Wl),y=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const C=this._cubeSize;Ar(s,S*C,d>2?C:0,C,C),h.setRenderTarget(s),y&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===bs||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xl[(s-r-1)%Xl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ne(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),y=r/v,g=isFinite(r)?1+Math.floor(h*y):ki;g>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ki}`);const d=[];let S=0;for(let L=0;L<ki;++L){const k=L/y,P=Math.exp(-k*k/2);d.push(P),L===0?S+=P:L<g&&(S+=2*P)}for(let L=0;L<d.length;L++)d[L]=d[L]/S;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:C}=this;f.dTheta.value=v,f.mipInt.value=C-n;const E=this._sizeLods[s],B=3*E*(s>C-ds?s-C+ds:0),F=4*(this._cubeSize-E);Ar(e,B,F,3*E,2*E),l.setRenderTarget(e),l.render(u,Pa)}}function tm(i){const t=[],e=[],n=[];let s=i;const r=i-ds+1+Vl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ds?l=Vl[a-i+ds-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,y=3,g=2,d=1,S=new Float32Array(y*v*p),C=new Float32Array(g*v*p),E=new Float32Array(d*v*p);for(let F=0;F<p;F++){const L=F%3*2/3-1,k=F>2?0:-1,P=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];S.set(P,y*v*F),C.set(f,g*v*F);const b=[F,F,F,F,F,F];E.set(b,d*v*F)}const B=new _n;B.setAttribute("position",new $n(S,y)),B.setAttribute("uv",new $n(C,g)),B.setAttribute("faceIndex",new $n(E,d)),t.push(B),s>ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yl(i,t,e){const n=new Yn(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function em(i,t,e){const n=new Float32Array(ki),s=new V(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:el(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function $l(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function jl(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function nm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===so||l===ro,h=l===bs||l===Ms;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ql(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ql(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function im(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,v=u.attributes.position;let y=0;if(p!==null){const S=p.array;y=p.version;for(let C=0,E=S.length;C<E;C+=3){const B=S[C+0],F=S[C+1],L=S[C+2];f.push(B,F,F,L,L,B)}}else if(v!==void 0){const S=v.array;y=v.version;for(let C=0,E=S.length/3-1;C<E;C+=3){const B=C+0,F=C+1,L=C+2;f.push(B,F,F,L,L,B)}}else return;const g=new(Th(f)?Lh:Fh)(f,1);g.version=y;const d=r.get(u);d&&t.remove(d),r.set(u,g)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function rm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,f*a,v),e.update(p,n,v))}function h(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let g=0;for(let d=0;d<v;d++)g+=p[d];e.update(g,n,1)}function u(f,p,v,y){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],y[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,v);let d=0;for(let S=0;S<v;S++)d+=p[S]*y[S];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function am(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function om(i,t,e){const n=new WeakMap,s=new Ve;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let b=function(){k.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),g===!0&&(E=3);let B=o.attributes.position.count*E,F=1;B>t.maxTextureSize&&(F=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const L=new Float32Array(B*F*4*u),k=new Ch(L,B,F,u);k.type=li,k.needsUpdate=!0;const P=E*4;for(let z=0;z<u;z++){const it=d[z],nt=S[z],vt=C[z],bt=B*F*4*z;for(let ut=0;ut<it.count;ut++){const Et=ut*P;v===!0&&(s.fromBufferAttribute(it,ut),L[bt+Et+0]=s.x,L[bt+Et+1]=s.y,L[bt+Et+2]=s.z,L[bt+Et+3]=0),y===!0&&(s.fromBufferAttribute(nt,ut),L[bt+Et+4]=s.x,L[bt+Et+5]=s.y,L[bt+Et+6]=s.z,L[bt+Et+7]=0),g===!0&&(s.fromBufferAttribute(vt,ut),L[bt+Et+8]=s.x,L[bt+Et+9]=s.y,L[bt+Et+10]=s.z,L[bt+Et+11]=vt.itemSize===4?s.w:1)}}f={count:u,texture:k,size:new Ct(B,F)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function lm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const qh=new Sn,Zl=new kh(1,1),Yh=new Ch,$h=new Ef,jh=new Uh,Kl=[],Jl=[],Ql=new Float32Array(16),tc=new Float32Array(9),ec=new Float32Array(4);function Ps(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Kl[s];if(r===void 0&&(r=new Float32Array(s),Kl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function an(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qr(i,t){let e=Jl[t];e===void 0&&(e=new Int32Array(t),Jl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),an(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),an(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),an(e,t)}}function dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;ec.set(n),i.uniformMatrix2fv(this.addr,!1,ec),an(e,n)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;tc.set(n),i.uniformMatrix3fv(this.addr,!1,tc),an(e,n)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Ql.set(n),i.uniformMatrix4fv(this.addr,!1,Ql),an(e,n)}}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),an(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),an(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),an(e,t)}}function ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),an(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),an(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),an(e,t)}}function wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zl.compareFunction=Eh,r=Zl):r=qh,e.setTexture2D(t||r,s)}function Em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$h,s)}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jh,s)}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yh,s)}function Cm(i){switch(i){case 5126:return cm;case 35664:return hm;case 35665:return um;case 35666:return fm;case 35674:return dm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return vm;case 35668:case 35672:return xm;case 35669:case 35673:return _m;case 5125:return ym;case 36294:return bm;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Am}}function Rm(i,t){i.uniform1fv(this.addr,t)}function Pm(i,t){const e=Ps(t,this.size,2);i.uniform2fv(this.addr,e)}function Fm(i,t){const e=Ps(t,this.size,3);i.uniform3fv(this.addr,e)}function Lm(i,t){const e=Ps(t,this.size,4);i.uniform4fv(this.addr,e)}function Dm(i,t){const e=Ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Im(i,t){const e=Ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Um(i,t){const e=Ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Nm(i,t){i.uniform1iv(this.addr,t)}function Bm(i,t){i.uniform2iv(this.addr,t)}function km(i,t){i.uniform3iv(this.addr,t)}function Om(i,t){i.uniform4iv(this.addr,t)}function zm(i,t){i.uniform1uiv(this.addr,t)}function Hm(i,t){i.uniform2uiv(this.addr,t)}function Gm(i,t){i.uniform3uiv(this.addr,t)}function Vm(i,t){i.uniform4uiv(this.addr,t)}function Wm(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||qh,r[a])}function Xm(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$h,r[a])}function qm(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||jh,r[a])}function Ym(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yh,r[a])}function $m(i){switch(i){case 5126:return Rm;case 35664:return Pm;case 35665:return Fm;case 35666:return Lm;case 35674:return Dm;case 35675:return Im;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Bm;case 35668:case 35672:return km;case 35669:case 35673:return Om;case 5125:return zm;case 36294:return Hm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}class jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cm(e.type)}}class Zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$m(e.type)}}class Km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function nc(i,t){i.seq.push(t),i.map[t.id]=t}function Jm(i,t,e){const n=i.name,s=n.length;for(Ua.lastIndex=0;;){const r=Ua.exec(n),a=Ua.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nc(e,c===void 0?new jm(o,i,t):new Zm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Km(o),nc(e,u)),e=u}}}class Br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Jm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ic(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qm=37297;let tg=0;function eg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const sc=new xe;function ng(i){Ie._getMatrix(sc,Ie.workingColorSpace,i);const t=`mat3( ${sc.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(i)){case Or:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+eg(i.getShaderSource(t),a)}else return s}function ig(i,t){const e=ng(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sg(i,t){let e;switch(t){case Nu:e="Linear";break;case Bu:e="Reinhard";break;case ku:e="Cineon";break;case fh:e="ACESFilmic";break;case zu:e="AgX";break;case Hu:e="Neutral";break;case Ou:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cr=new V;function rg(){Ie.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),t=Cr.y.toFixed(4),e=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function og(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ws(i){return i!==""}function ac(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(i){return i.replace(cg,ug)}const hg=new Map;function ug(i,t){let e=be[t];if(e===void 0){const n=hg.get(t);if(n!==void 0)e=be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uo(e)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(i){return i.replace(fg,dg)}function dg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function pg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===mu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function mg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ms:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function vg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uh:t="ENVMAP_BLENDING_MULTIPLY";break;case Iu:t="ENVMAP_BLENDING_MIX";break;case Uu:t="ENVMAP_BLENDING_ADD";break}return t}function xg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _g(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pg(e),c=mg(e),h=gg(e),u=vg(e),f=xg(e),p=ag(e),v=og(r),y=s.createProgram();let g,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ws).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ws).join(`
`),d.length>0&&(d+=`
`)):(g=[cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),d=[cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?be.tonemapping_pars_fragment:"",e.toneMapping!==Ei?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,ig("linearToOutputTexel",e.outputColorSpace),rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),a=Uo(a),a=ac(a,e),a=oc(a,e),o=Uo(o),o=ac(o,e),o=oc(o,e),a=lc(a),o=lc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const C=S+g+a,E=S+d+o,B=ic(s,s.VERTEX_SHADER,C),F=ic(s,s.FRAGMENT_SHADER,E);s.attachShader(y,B),s.attachShader(y,F),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(z){if(i.debug.checkShaderErrors){const it=s.getProgramInfoLog(y).trim(),nt=s.getShaderInfoLog(B).trim(),vt=s.getShaderInfoLog(F).trim();let bt=!0,ut=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(bt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,B,F);else{const Et=rc(s,B,"vertex"),lt=rc(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+it+`
`+Et+`
`+lt)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(nt===""||vt==="")&&(ut=!1);ut&&(z.diagnostics={runnable:bt,programLog:it,vertexShader:{log:nt,prefix:g},fragmentShader:{log:vt,prefix:d}})}s.deleteShader(B),s.deleteShader(F),k=new Br(s,y),P=lg(s,y)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let P;this.getAttributes=function(){return P===void 0&&L(this),P};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,Qm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=B,this.fragmentShader=F,this}let yg=0;class bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mg(t),e.set(t,n)),n}}class Mg{constructor(t){this.id=yg++,this.code=t,this.usedTimes=0}}function Sg(i,t,e,n,s,r,a){const o=new Rh,l=new bg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(P){return c.add(P),P===0?"uv":`uv${P}`}function g(P,b,z,it,nt){const vt=it.fog,bt=nt.geometry,ut=P.isMeshStandardMaterial?it.environment:null,Et=(P.isMeshStandardMaterial?e:t).get(P.envMap||ut),lt=Et&&Et.mapping===jr?Et.image.height:null,Pt=v[P.type];P.precision!==null&&(p=s.getMaxPrecision(P.precision),p!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",p,"instead."));const Vt=bt.morphAttributes.position||bt.morphAttributes.normal||bt.morphAttributes.color,Jt=Vt!==void 0?Vt.length:0;let ve=0;bt.morphAttributes.position!==void 0&&(ve=1),bt.morphAttributes.normal!==void 0&&(ve=2),bt.morphAttributes.color!==void 0&&(ve=3);let Me,ft,mt,Ot;if(Pt){const Le=Kn[Pt];Me=Le.vertexShader,ft=Le.fragmentShader}else Me=P.vertexShader,ft=P.fragmentShader,l.update(P),mt=l.getVertexShaderID(P),Ot=l.getFragmentShaderID(P);const Ut=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),fe=nt.isInstancedMesh===!0,ge=nt.isBatchedMesh===!0,Xe=!!P.map,we=!!P.matcap,$e=!!Et,X=!!P.aoMap,Tn=!!P.lightMap,Ae=!!P.bumpMap,Ee=!!P.normalMap,Qt=!!P.displacementMap,Fe=!!P.emissiveMap,jt=!!P.metalnessMap,I=!!P.roughnessMap,A=P.anisotropy>0,Q=P.clearcoat>0,_t=P.dispersion>0,wt=P.iridescence>0,gt=P.sheen>0,$t=P.transmission>0,Dt=A&&!!P.anisotropyMap,Wt=Q&&!!P.clearcoatMap,Ce=Q&&!!P.clearcoatNormalMap,At=Q&&!!P.clearcoatRoughnessMap,Xt=wt&&!!P.iridescenceMap,te=wt&&!!P.iridescenceThicknessMap,se=gt&&!!P.sheenColorMap,zt=gt&&!!P.sheenRoughnessMap,_e=!!P.specularMap,pe=!!P.specularColorMap,De=!!P.specularIntensityMap,q=$t&&!!P.transmissionMap,Lt=$t&&!!P.thicknessMap,ct=!!P.gradientMap,Mt=!!P.alphaMap,kt=P.alphaTest>0,Rt=!!P.alphaHash,oe=!!P.extensions;let ze=Ei;P.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(ze=i.toneMapping);const tn={shaderID:Pt,shaderType:P.type,shaderName:P.name,vertexShader:Me,fragmentShader:ft,defines:P.defines,customVertexShaderID:mt,customFragmentShaderID:Ot,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:p,batching:ge,batchingColor:ge&&nt._colorsTexture!==null,instancing:fe,instancingColor:fe&&nt.instanceColor!==null,instancingMorph:fe&&nt.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:Es,alphaToCoverage:!!P.alphaToCoverage,map:Xe,matcap:we,envMap:$e,envMapMode:$e&&Et.mapping,envMapCubeUVHeight:lt,aoMap:X,lightMap:Tn,bumpMap:Ae,normalMap:Ee,displacementMap:f&&Qt,emissiveMap:Fe,normalMapObjectSpace:Ee&&P.normalMapType===Xu,normalMapTangentSpace:Ee&&P.normalMapType===wh,metalnessMap:jt,roughnessMap:I,anisotropy:A,anisotropyMap:Dt,clearcoat:Q,clearcoatMap:Wt,clearcoatNormalMap:Ce,clearcoatRoughnessMap:At,dispersion:_t,iridescence:wt,iridescenceMap:Xt,iridescenceThicknessMap:te,sheen:gt,sheenColorMap:se,sheenRoughnessMap:zt,specularMap:_e,specularColorMap:pe,specularIntensityMap:De,transmission:$t,transmissionMap:q,thicknessMap:Lt,gradientMap:ct,opaque:P.transparent===!1&&P.blending===wi&&P.alphaToCoverage===!1,alphaMap:Mt,alphaTest:kt,alphaHash:Rt,combine:P.combine,mapUv:Xe&&y(P.map.channel),aoMapUv:X&&y(P.aoMap.channel),lightMapUv:Tn&&y(P.lightMap.channel),bumpMapUv:Ae&&y(P.bumpMap.channel),normalMapUv:Ee&&y(P.normalMap.channel),displacementMapUv:Qt&&y(P.displacementMap.channel),emissiveMapUv:Fe&&y(P.emissiveMap.channel),metalnessMapUv:jt&&y(P.metalnessMap.channel),roughnessMapUv:I&&y(P.roughnessMap.channel),anisotropyMapUv:Dt&&y(P.anisotropyMap.channel),clearcoatMapUv:Wt&&y(P.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&y(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&y(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&y(P.iridescenceMap.channel),iridescenceThicknessMapUv:te&&y(P.iridescenceThicknessMap.channel),sheenColorMapUv:se&&y(P.sheenColorMap.channel),sheenRoughnessMapUv:zt&&y(P.sheenRoughnessMap.channel),specularMapUv:_e&&y(P.specularMap.channel),specularColorMapUv:pe&&y(P.specularColorMap.channel),specularIntensityMapUv:De&&y(P.specularIntensityMap.channel),transmissionMapUv:q&&y(P.transmissionMap.channel),thicknessMapUv:Lt&&y(P.thicknessMap.channel),alphaMapUv:Mt&&y(P.alphaMap.channel),vertexTangents:!!bt.attributes.tangent&&(Ee||A),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!bt.attributes.color&&bt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!bt.attributes.uv&&(Xe||Mt),fog:!!vt,useFog:P.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:re,skinning:nt.isSkinnedMesh===!0,morphTargets:bt.morphAttributes.position!==void 0,morphNormals:bt.morphAttributes.normal!==void 0,morphColors:bt.morphAttributes.color!==void 0,morphTargetsCount:Jt,morphTextureStride:ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Xe&&P.map.isVideoTexture===!0&&Ie.getTransfer(P.map.colorSpace)===Ge,decodeVideoTextureEmissive:Fe&&P.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(P.emissiveMap.colorSpace)===Ge,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===We,flipSided:P.side===Rn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:oe&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&P.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return tn.vertexUv1s=c.has(1),tn.vertexUv2s=c.has(2),tn.vertexUv3s=c.has(3),c.clear(),tn}function d(P){const b=[];if(P.shaderID?b.push(P.shaderID):(b.push(P.customVertexShaderID),b.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)b.push(z),b.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(S(b,P),C(b,P),b.push(i.outputColorSpace)),b.push(P.customProgramCacheKey),b.join()}function S(P,b){P.push(b.precision),P.push(b.outputColorSpace),P.push(b.envMapMode),P.push(b.envMapCubeUVHeight),P.push(b.mapUv),P.push(b.alphaMapUv),P.push(b.lightMapUv),P.push(b.aoMapUv),P.push(b.bumpMapUv),P.push(b.normalMapUv),P.push(b.displacementMapUv),P.push(b.emissiveMapUv),P.push(b.metalnessMapUv),P.push(b.roughnessMapUv),P.push(b.anisotropyMapUv),P.push(b.clearcoatMapUv),P.push(b.clearcoatNormalMapUv),P.push(b.clearcoatRoughnessMapUv),P.push(b.iridescenceMapUv),P.push(b.iridescenceThicknessMapUv),P.push(b.sheenColorMapUv),P.push(b.sheenRoughnessMapUv),P.push(b.specularMapUv),P.push(b.specularColorMapUv),P.push(b.specularIntensityMapUv),P.push(b.transmissionMapUv),P.push(b.thicknessMapUv),P.push(b.combine),P.push(b.fogExp2),P.push(b.sizeAttenuation),P.push(b.morphTargetsCount),P.push(b.morphAttributeCount),P.push(b.numDirLights),P.push(b.numPointLights),P.push(b.numSpotLights),P.push(b.numSpotLightMaps),P.push(b.numHemiLights),P.push(b.numRectAreaLights),P.push(b.numDirLightShadows),P.push(b.numPointLightShadows),P.push(b.numSpotLightShadows),P.push(b.numSpotLightShadowsWithMaps),P.push(b.numLightProbes),P.push(b.shadowMapType),P.push(b.toneMapping),P.push(b.numClippingPlanes),P.push(b.numClipIntersection),P.push(b.depthPacking)}function C(P,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),P.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),P.push(o.mask)}function E(P){const b=v[P.type];let z;if(b){const it=Kn[b];z=Gr.clone(it.uniforms)}else z=P.uniforms;return z}function B(P,b){let z;for(let it=0,nt=h.length;it<nt;it++){const vt=h[it];if(vt.cacheKey===b){z=vt,++z.usedTimes;break}}return z===void 0&&(z=new _g(i,b,P,r),h.push(z)),z}function F(P){if(--P.usedTimes===0){const b=h.indexOf(P);h[b]=h[h.length-1],h.pop(),P.destroy()}}function L(P){l.remove(P)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:E,acquireProgram:B,releaseProgram:F,releaseShaderCache:L,programs:h,dispose:k}}function wg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Eg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,v,y,g){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:v,renderOrder:u.renderOrder,z:y,group:g},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=y,d.group=g),t++,d}function o(u,f,p,v,y,g){const d=a(u,f,p,v,y,g);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,v,y,g){const d=a(u,f,p,v,y,g);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Eg),n.length>1&&n.sort(f||hc),s.length>1&&s.sort(f||hc)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Tg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new uc,i.set(n,[a])):s>=r.length?(a=new uc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Yt};break;case"SpotLight":e={position:new V,direction:new V,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function Cg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Rg=0;function Pg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Fg(i){const t=new Ag,e=Cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new Ye,a=new Ye;function o(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,v=0,y=0,g=0,d=0,S=0,C=0,E=0,B=0,F=0,L=0;c.sort(Pg);for(let P=0,b=c.length;P<b;P++){const z=c[P],it=z.color,nt=z.intensity,vt=z.distance,bt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=it.r*nt,u+=it.g*nt,f+=it.b*nt;else if(z.isLightProbe){for(let ut=0;ut<9;ut++)n.probe[ut].addScaledVector(z.sh.coefficients[ut],nt);L++}else if(z.isDirectionalLight){const ut=t.get(z);if(ut.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Et=z.shadow,lt=e.get(z);lt.shadowIntensity=Et.intensity,lt.shadowBias=Et.bias,lt.shadowNormalBias=Et.normalBias,lt.shadowRadius=Et.radius,lt.shadowMapSize=Et.mapSize,n.directionalShadow[p]=lt,n.directionalShadowMap[p]=bt,n.directionalShadowMatrix[p]=z.shadow.matrix,S++}n.directional[p]=ut,p++}else if(z.isSpotLight){const ut=t.get(z);ut.position.setFromMatrixPosition(z.matrixWorld),ut.color.copy(it).multiplyScalar(nt),ut.distance=vt,ut.coneCos=Math.cos(z.angle),ut.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ut.decay=z.decay,n.spot[y]=ut;const Et=z.shadow;if(z.map&&(n.spotLightMap[B]=z.map,B++,Et.updateMatrices(z),z.castShadow&&F++),n.spotLightMatrix[y]=Et.matrix,z.castShadow){const lt=e.get(z);lt.shadowIntensity=Et.intensity,lt.shadowBias=Et.bias,lt.shadowNormalBias=Et.normalBias,lt.shadowRadius=Et.radius,lt.shadowMapSize=Et.mapSize,n.spotShadow[y]=lt,n.spotShadowMap[y]=bt,E++}y++}else if(z.isRectAreaLight){const ut=t.get(z);ut.color.copy(it).multiplyScalar(nt),ut.halfWidth.set(z.width*.5,0,0),ut.halfHeight.set(0,z.height*.5,0),n.rectArea[g]=ut,g++}else if(z.isPointLight){const ut=t.get(z);if(ut.color.copy(z.color).multiplyScalar(z.intensity),ut.distance=z.distance,ut.decay=z.decay,z.castShadow){const Et=z.shadow,lt=e.get(z);lt.shadowIntensity=Et.intensity,lt.shadowBias=Et.bias,lt.shadowNormalBias=Et.normalBias,lt.shadowRadius=Et.radius,lt.shadowMapSize=Et.mapSize,lt.shadowCameraNear=Et.camera.near,lt.shadowCameraFar=Et.camera.far,n.pointShadow[v]=lt,n.pointShadowMap[v]=bt,n.pointShadowMatrix[v]=z.shadow.matrix,C++}n.point[v]=ut,v++}else if(z.isHemisphereLight){const ut=t.get(z);ut.skyColor.copy(z.color).multiplyScalar(nt),ut.groundColor.copy(z.groundColor).multiplyScalar(nt),n.hemi[d]=ut,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const k=n.hash;(k.directionalLength!==p||k.pointLength!==v||k.spotLength!==y||k.rectAreaLength!==g||k.hemiLength!==d||k.numDirectionalShadows!==S||k.numPointShadows!==C||k.numSpotShadows!==E||k.numSpotMaps!==B||k.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=g,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=E+B-F,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=L,k.directionalLength=p,k.pointLength=v,k.spotLength=y,k.rectAreaLength=g,k.hemiLength=d,k.numDirectionalShadows=S,k.numPointShadows=C,k.numSpotShadows=E,k.numSpotMaps=B,k.numLightProbes=L,n.version=Rg++)}function l(c,h){let u=0,f=0,p=0,v=0,y=0;const g=h.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const C=c[d];if(C.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),u++}else if(C.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(C.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(C.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(C.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(g),f++}else if(C.isHemisphereLight){const E=n.hemi[y];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:n}}function fc(i){const t=new Fg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Lg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new fc(i),t.set(s,[o])):r>=a.length?(o=new fc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Ug(i,t,e){let n=new jo;const s=new Ct,r=new Ct,a=new Ve,o=new rd({depthPacking:Wu}),l=new ad,c={},h=e.maxTextureSize,u={[Ti]:Rn,[Rn]:Ti,[We]:We},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Dg,fragmentShader:Ig}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new _n;v.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ne(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let d=this.type;this.render=function(F,L,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||F.length===0)return;const P=i.getRenderTarget(),b=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),it=i.state;it.setBlending(ui),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const nt=d!==ai&&this.type===ai,vt=d===ai&&this.type!==ai;for(let bt=0,ut=F.length;bt<ut;bt++){const Et=F[bt],lt=Et.shadow;if(lt===void 0){console.warn("THREE.WebGLShadowMap:",Et,"has no shadow.");continue}if(lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;s.copy(lt.mapSize);const Pt=lt.getFrameExtents();if(s.multiply(Pt),r.copy(lt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Pt.x),s.x=r.x*Pt.x,lt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Pt.y),s.y=r.y*Pt.y,lt.mapSize.y=r.y)),lt.map===null||nt===!0||vt===!0){const Jt=this.type!==ai?{minFilter:qn,magFilter:qn}:{};lt.map!==null&&lt.map.dispose(),lt.map=new Yn(s.x,s.y,Jt),lt.map.texture.name=Et.name+".shadowMap",lt.camera.updateProjectionMatrix()}i.setRenderTarget(lt.map),i.clear();const Vt=lt.getViewportCount();for(let Jt=0;Jt<Vt;Jt++){const ve=lt.getViewport(Jt);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),it.viewport(a),lt.updateMatrices(Et,Jt),n=lt.getFrustum(),E(L,k,lt.camera,Et,this.type)}lt.isPointLightShadow!==!0&&this.type===ai&&S(lt,k),lt.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(P,b,z)};function S(F,L){const k=t.update(y);f.defines.VSM_SAMPLES!==F.blurSamples&&(f.defines.VSM_SAMPLES=F.blurSamples,p.defines.VSM_SAMPLES=F.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Yn(s.x,s.y)),f.uniforms.shadow_pass.value=F.map.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(L,null,k,f,y,null),p.uniforms.shadow_pass.value=F.mapPass.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(L,null,k,p,y,null)}function C(F,L,k,P){let b=null;const z=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)b=z;else if(b=k.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const it=b.uuid,nt=L.uuid;let vt=c[it];vt===void 0&&(vt={},c[it]=vt);let bt=vt[nt];bt===void 0&&(bt=b.clone(),vt[nt]=bt,L.addEventListener("dispose",B)),b=bt}if(b.visible=L.visible,b.wireframe=L.wireframe,P===ai?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:u[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const it=i.properties.get(b);it.light=k}return b}function E(F,L,k,P,b){if(F.visible===!1)return;if(F.layers.test(L.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&b===ai)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const nt=t.update(F),vt=F.material;if(Array.isArray(vt)){const bt=nt.groups;for(let ut=0,Et=bt.length;ut<Et;ut++){const lt=bt[ut],Pt=vt[lt.materialIndex];if(Pt&&Pt.visible){const Vt=C(F,Pt,P,b);F.onBeforeShadow(i,F,L,k,nt,Vt,lt),i.renderBufferDirect(k,null,nt,Vt,F,lt),F.onAfterShadow(i,F,L,k,nt,Vt,lt)}}}else if(vt.visible){const bt=C(F,vt,P,b);F.onBeforeShadow(i,F,L,k,nt,bt,null),i.renderBufferDirect(k,null,nt,bt,F,null),F.onAfterShadow(i,F,L,k,nt,bt,null)}}const it=F.children;for(let nt=0,vt=it.length;nt<vt;nt++)E(it[nt],L,k,P,b)}function B(F){F.target.removeEventListener("dispose",B);for(const k in c){const P=c[k],b=F.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}const Ng={[Ka]:Ja,[Qa]:no,[to]:io,[ys]:eo,[Ja]:Ka,[no]:Qa,[io]:to,[eo]:ys};function Bg(i,t){function e(){let q=!1;const Lt=new Ve;let ct=null;const Mt=new Ve(0,0,0,0);return{setMask:function(kt){ct!==kt&&!q&&(i.colorMask(kt,kt,kt,kt),ct=kt)},setLocked:function(kt){q=kt},setClear:function(kt,Rt,oe,ze,tn){tn===!0&&(kt*=ze,Rt*=ze,oe*=ze),Lt.set(kt,Rt,oe,ze),Mt.equals(Lt)===!1&&(i.clearColor(kt,Rt,oe,ze),Mt.copy(Lt))},reset:function(){q=!1,ct=null,Mt.set(-1,0,0,0)}}}function n(){let q=!1,Lt=!1,ct=null,Mt=null,kt=null;return{setReversed:function(Rt){if(Lt!==Rt){const oe=t.get("EXT_clip_control");Lt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT);const ze=kt;kt=null,this.setClear(ze)}Lt=Rt},getReversed:function(){return Lt},setTest:function(Rt){Rt?Ut(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(Rt){ct!==Rt&&!q&&(i.depthMask(Rt),ct=Rt)},setFunc:function(Rt){if(Lt&&(Rt=Ng[Rt]),Mt!==Rt){switch(Rt){case Ka:i.depthFunc(i.NEVER);break;case Ja:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case to:i.depthFunc(i.EQUAL);break;case eo:i.depthFunc(i.GEQUAL);break;case no:i.depthFunc(i.GREATER);break;case io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=Rt}},setLocked:function(Rt){q=Rt},setClear:function(Rt){kt!==Rt&&(Lt&&(Rt=1-Rt),i.clearDepth(Rt),kt=Rt)},reset:function(){q=!1,ct=null,Mt=null,kt=null,Lt=!1}}}function s(){let q=!1,Lt=null,ct=null,Mt=null,kt=null,Rt=null,oe=null,ze=null,tn=null;return{setTest:function(Le){q||(Le?Ut(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(Le){Lt!==Le&&!q&&(i.stencilMask(Le),Lt=Le)},setFunc:function(Le,An,kn){(ct!==Le||Mt!==An||kt!==kn)&&(i.stencilFunc(Le,An,kn),ct=Le,Mt=An,kt=kn)},setOp:function(Le,An,kn){(Rt!==Le||oe!==An||ze!==kn)&&(i.stencilOp(Le,An,kn),Rt=Le,oe=An,ze=kn)},setLocked:function(Le){q=Le},setClear:function(Le){tn!==Le&&(i.clearStencil(Le),tn=Le)},reset:function(){q=!1,Lt=null,ct=null,Mt=null,kt=null,Rt=null,oe=null,ze=null,tn=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],v=null,y=!1,g=null,d=null,S=null,C=null,E=null,B=null,F=null,L=new Yt(0,0,0),k=0,P=!1,b=null,z=null,it=null,nt=null,vt=null;const bt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ut=!1,Et=0;const lt=i.getParameter(i.VERSION);lt.indexOf("WebGL")!==-1?(Et=parseFloat(/^WebGL (\d)/.exec(lt)[1]),ut=Et>=1):lt.indexOf("OpenGL ES")!==-1&&(Et=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),ut=Et>=2);let Pt=null,Vt={};const Jt=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Me=new Ve().fromArray(Jt),ft=new Ve().fromArray(ve);function mt(q,Lt,ct,Mt){const kt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(q,Rt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<ct;oe++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,kt):i.texImage2D(Lt+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,kt);return Rt}const Ot={};Ot[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ot[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ot[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ut(i.DEPTH_TEST),a.setFunc(ys),Ae(!1),Ee(ul),Ut(i.CULL_FACE),X(ui);function Ut(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function re(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function fe(q,Lt){return u[q]!==Lt?(i.bindFramebuffer(q,Lt),u[q]=Lt,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Lt),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function ge(q,Lt){let ct=p,Mt=!1;if(q){ct=f.get(Lt),ct===void 0&&(ct=[],f.set(Lt,ct));const kt=q.textures;if(ct.length!==kt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,oe=kt.length;Rt<oe;Rt++)ct[Rt]=i.COLOR_ATTACHMENT0+Rt;ct.length=kt.length,Mt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(ct)}function Xe(q){return v!==q?(i.useProgram(q),v=q,!0):!1}const we={[Bi]:i.FUNC_ADD,[vu]:i.FUNC_SUBTRACT,[xu]:i.FUNC_REVERSE_SUBTRACT};we[_u]=i.MIN,we[yu]=i.MAX;const $e={[bu]:i.ZERO,[Mu]:i.ONE,[Su]:i.SRC_COLOR,[ja]:i.SRC_ALPHA,[Ru]:i.SRC_ALPHA_SATURATE,[Au]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[wu]:i.ONE_MINUS_SRC_COLOR,[Za]:i.ONE_MINUS_SRC_ALPHA,[Cu]:i.ONE_MINUS_DST_COLOR,[Tu]:i.ONE_MINUS_DST_ALPHA,[Pu]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Du]:i.ONE_MINUS_CONSTANT_ALPHA};function X(q,Lt,ct,Mt,kt,Rt,oe,ze,tn,Le){if(q===ui){y===!0&&(re(i.BLEND),y=!1);return}if(y===!1&&(Ut(i.BLEND),y=!0),q!==gu){if(q!==g||Le!==P){if((d!==Bi||E!==Bi)&&(i.blendEquation(i.FUNC_ADD),d=Bi,E=Bi),Le)switch(q){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ke:i.blendFunc(i.ONE,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ke:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}S=null,C=null,B=null,F=null,L.set(0,0,0),k=0,g=q,P=Le}return}kt=kt||Lt,Rt=Rt||ct,oe=oe||Mt,(Lt!==d||kt!==E)&&(i.blendEquationSeparate(we[Lt],we[kt]),d=Lt,E=kt),(ct!==S||Mt!==C||Rt!==B||oe!==F)&&(i.blendFuncSeparate($e[ct],$e[Mt],$e[Rt],$e[oe]),S=ct,C=Mt,B=Rt,F=oe),(ze.equals(L)===!1||tn!==k)&&(i.blendColor(ze.r,ze.g,ze.b,tn),L.copy(ze),k=tn),g=q,P=!1}function Tn(q,Lt){q.side===We?re(i.CULL_FACE):Ut(i.CULL_FACE);let ct=q.side===Rn;Lt&&(ct=!ct),Ae(ct),q.blending===wi&&q.transparent===!1?X(ui):X(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);const Mt=q.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Fe(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Ut(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(q){b!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),b=q)}function Ee(q){q!==fu?(Ut(i.CULL_FACE),q!==z&&(q===ul?i.cullFace(i.BACK):q===du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),z=q}function Qt(q){q!==it&&(ut&&i.lineWidth(q),it=q)}function Fe(q,Lt,ct){q?(Ut(i.POLYGON_OFFSET_FILL),(nt!==Lt||vt!==ct)&&(i.polygonOffset(Lt,ct),nt=Lt,vt=ct)):re(i.POLYGON_OFFSET_FILL)}function jt(q){q?Ut(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function I(q){q===void 0&&(q=i.TEXTURE0+bt-1),Pt!==q&&(i.activeTexture(q),Pt=q)}function A(q,Lt,ct){ct===void 0&&(Pt===null?ct=i.TEXTURE0+bt-1:ct=Pt);let Mt=Vt[ct];Mt===void 0&&(Mt={type:void 0,texture:void 0},Vt[ct]=Mt),(Mt.type!==q||Mt.texture!==Lt)&&(Pt!==ct&&(i.activeTexture(ct),Pt=ct),i.bindTexture(q,Lt||Ot[q]),Mt.type=q,Mt.texture=Lt)}function Q(){const q=Vt[Pt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function gt(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $t(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ce(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xt(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function se(q){Me.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Me.copy(q))}function zt(q){ft.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),ft.copy(q))}function _e(q,Lt){let ct=c.get(Lt);ct===void 0&&(ct=new WeakMap,c.set(Lt,ct));let Mt=ct.get(q);Mt===void 0&&(Mt=i.getUniformBlockIndex(Lt,q.name),ct.set(q,Mt))}function pe(q,Lt){const Mt=c.get(Lt).get(q);l.get(Lt)!==Mt&&(i.uniformBlockBinding(Lt,Mt,q.__bindingPointIndex),l.set(Lt,Mt))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Pt=null,Vt={},u={},f=new WeakMap,p=[],v=null,y=!1,g=null,d=null,S=null,C=null,E=null,B=null,F=null,L=new Yt(0,0,0),k=0,P=!1,b=null,z=null,it=null,nt=null,vt=null,Me.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ut,disable:re,bindFramebuffer:fe,drawBuffers:ge,useProgram:Xe,setBlending:X,setMaterial:Tn,setFlipSided:Ae,setCullFace:Ee,setLineWidth:Qt,setPolygonOffset:Fe,setScissorTest:jt,activeTexture:I,bindTexture:A,unbindTexture:Q,compressedTexImage2D:_t,compressedTexImage3D:wt,texImage2D:Xt,texImage3D:te,updateUBOMapping:_e,uniformBlockBinding:pe,texStorage2D:Ce,texStorage3D:At,texSubImage2D:gt,texSubImage3D:$t,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Wt,scissor:se,viewport:zt,reset:De}}function kg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,A){return p?new OffscreenCanvas(I,A):Hr("canvas")}function y(I,A,Q){let _t=1;const wt=jt(I);if((wt.width>Q||wt.height>Q)&&(_t=Q/Math.max(wt.width,wt.height)),_t<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const gt=Math.floor(_t*wt.width),$t=Math.floor(_t*wt.height);u===void 0&&(u=v(gt,$t));const Dt=A?v(gt,$t):u;return Dt.width=gt,Dt.height=$t,Dt.getContext("2d").drawImage(I,0,0,gt,$t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+wt.width+"x"+wt.height+") to ("+gt+"x"+$t+")."),Dt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+wt.width+"x"+wt.height+")."),I;return I}function g(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(I,A,Q,_t,wt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt=A;if(A===i.RED&&(Q===i.FLOAT&&(gt=i.R32F),Q===i.HALF_FLOAT&&(gt=i.R16F),Q===i.UNSIGNED_BYTE&&(gt=i.R8)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(gt=i.R8UI),Q===i.UNSIGNED_SHORT&&(gt=i.R16UI),Q===i.UNSIGNED_INT&&(gt=i.R32UI),Q===i.BYTE&&(gt=i.R8I),Q===i.SHORT&&(gt=i.R16I),Q===i.INT&&(gt=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(gt=i.RG32F),Q===i.HALF_FLOAT&&(gt=i.RG16F),Q===i.UNSIGNED_BYTE&&(gt=i.RG8)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(gt=i.RG8UI),Q===i.UNSIGNED_SHORT&&(gt=i.RG16UI),Q===i.UNSIGNED_INT&&(gt=i.RG32UI),Q===i.BYTE&&(gt=i.RG8I),Q===i.SHORT&&(gt=i.RG16I),Q===i.INT&&(gt=i.RG32I)),A===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),Q===i.UNSIGNED_INT&&(gt=i.RGB32UI),Q===i.BYTE&&(gt=i.RGB8I),Q===i.SHORT&&(gt=i.RGB16I),Q===i.INT&&(gt=i.RGB32I)),A===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),Q===i.UNSIGNED_INT&&(gt=i.RGBA32UI),Q===i.BYTE&&(gt=i.RGBA8I),Q===i.SHORT&&(gt=i.RGBA16I),Q===i.INT&&(gt=i.RGBA32I)),A===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),A===i.RGBA){const $t=wt?Or:Ie.getTransfer(_t);Q===i.FLOAT&&(gt=i.RGBA32F),Q===i.HALF_FLOAT&&(gt=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(gt=$t===Ge?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function E(I,A){let Q;return I?A===null||A===Wi||A===Ss?Q=i.DEPTH24_STENCIL8:A===li?Q=i.DEPTH32F_STENCIL8:A===Ks&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Wi||A===Ss?Q=i.DEPTH_COMPONENT24:A===li?Q=i.DEPTH_COMPONENT32F:A===Ks&&(Q=i.DEPTH_COMPONENT16),Q}function B(I,A){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==qn&&I.minFilter!==Jn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function F(I){const A=I.target;A.removeEventListener("dispose",F),k(A),A.isVideoTexture&&h.delete(A)}function L(I){const A=I.target;A.removeEventListener("dispose",L),b(A)}function k(I){const A=n.get(I);if(A.__webglInit===void 0)return;const Q=I.source,_t=f.get(Q);if(_t){const wt=_t[A.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&P(I),Object.keys(_t).length===0&&f.delete(Q)}n.remove(I)}function P(I){const A=n.get(I);i.deleteTexture(A.__webglTexture);const Q=I.source,_t=f.get(Q);delete _t[A.__cacheKey],a.memory.textures--}function b(I){const A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(A.__webglFramebuffer[_t]))for(let wt=0;wt<A.__webglFramebuffer[_t].length;wt++)i.deleteFramebuffer(A.__webglFramebuffer[_t][wt]);else i.deleteFramebuffer(A.__webglFramebuffer[_t]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[_t])}else{if(Array.isArray(A.__webglFramebuffer))for(let _t=0;_t<A.__webglFramebuffer.length;_t++)i.deleteFramebuffer(A.__webglFramebuffer[_t]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _t=0;_t<A.__webglColorRenderbuffer.length;_t++)A.__webglColorRenderbuffer[_t]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[_t]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=I.textures;for(let _t=0,wt=Q.length;_t<wt;_t++){const gt=n.get(Q[_t]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(Q[_t])}n.remove(I)}let z=0;function it(){z=0}function nt(){const I=z;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),z+=1,I}function vt(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function bt(I,A){const Q=n.get(I);if(I.isVideoTexture&&Qt(I),I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){const _t=I.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(Q,I,A);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function ut(I,A){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){ft(Q,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function Et(I,A){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){ft(Q,I,A);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function lt(I,A){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){mt(Q,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}const Pt={[Nn]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},Vt={[qn]:i.NEAREST,[Gu]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[Jn]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},Jt={[qu]:i.NEVER,[Ju]:i.ALWAYS,[Yu]:i.LESS,[Eh]:i.LEQUAL,[$u]:i.EQUAL,[Ku]:i.GEQUAL,[ju]:i.GREATER,[Zu]:i.NOTEQUAL};function ve(I,A){if(A.type===li&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Jn||A.magFilter===ia||A.magFilter===sr||A.magFilter===Hi||A.minFilter===Jn||A.minFilter===ia||A.minFilter===sr||A.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Pt[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Pt[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Pt[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Vt[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Vt[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Jt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===qn||A.minFilter!==sr&&A.minFilter!==Hi||A.type===li&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Me(I,A){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",F));const _t=A.source;let wt=f.get(_t);wt===void 0&&(wt={},f.set(_t,wt));const gt=vt(A);if(gt!==I.__cacheKey){wt[gt]===void 0&&(wt[gt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),wt[gt].usedTimes++;const $t=wt[I.__cacheKey];$t!==void 0&&(wt[I.__cacheKey].usedTimes--,$t.usedTimes===0&&P(A)),I.__cacheKey=gt,I.__webglTexture=wt[gt].texture}return Q}function ft(I,A,Q){let _t=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_t=i.TEXTURE_3D);const wt=Me(I,A),gt=A.source;e.bindTexture(_t,I.__webglTexture,i.TEXTURE0+Q);const $t=n.get(gt);if(gt.version!==$t.__version||wt===!0){e.activeTexture(i.TEXTURE0+Q);const Dt=Ie.getPrimaries(Ie.workingColorSpace),Wt=A.colorSpace===Si?null:Ie.getPrimaries(A.colorSpace),Ce=A.colorSpace===Si||Dt===Wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let At=y(A.image,!1,s.maxTextureSize);At=Fe(A,At);const Xt=r.convert(A.format,A.colorSpace),te=r.convert(A.type);let se=C(A.internalFormat,Xt,te,A.colorSpace,A.isVideoTexture);ve(_t,A);let zt;const _e=A.mipmaps,pe=A.isVideoTexture!==!0,De=$t.__version===void 0||wt===!0,q=gt.dataReady,Lt=B(A,At);if(A.isDepthTexture)se=E(A.format===ws,A.type),De&&(pe?e.texStorage2D(i.TEXTURE_2D,1,se,At.width,At.height):e.texImage2D(i.TEXTURE_2D,0,se,At.width,At.height,0,Xt,te,null));else if(A.isDataTexture)if(_e.length>0){pe&&De&&e.texStorage2D(i.TEXTURE_2D,Lt,se,_e[0].width,_e[0].height);for(let ct=0,Mt=_e.length;ct<Mt;ct++)zt=_e[ct],pe?q&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,zt.width,zt.height,Xt,te,zt.data):e.texImage2D(i.TEXTURE_2D,ct,se,zt.width,zt.height,0,Xt,te,zt.data);A.generateMipmaps=!1}else pe?(De&&e.texStorage2D(i.TEXTURE_2D,Lt,se,At.width,At.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At.width,At.height,Xt,te,At.data)):e.texImage2D(i.TEXTURE_2D,0,se,At.width,At.height,0,Xt,te,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){pe&&De&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,se,_e[0].width,_e[0].height,At.depth);for(let ct=0,Mt=_e.length;ct<Mt;ct++)if(zt=_e[ct],A.format!==Wn)if(Xt!==null)if(pe){if(q)if(A.layerUpdates.size>0){const kt=Gl(zt.width,zt.height,A.format,A.type);for(const Rt of A.layerUpdates){const oe=zt.data.subarray(Rt*kt/zt.data.BYTES_PER_ELEMENT,(Rt+1)*kt/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Rt,zt.width,zt.height,1,Xt,oe)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,zt.width,zt.height,At.depth,Xt,zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,se,zt.width,zt.height,At.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,zt.width,zt.height,At.depth,Xt,te,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,se,zt.width,zt.height,At.depth,0,Xt,te,zt.data)}else{pe&&De&&e.texStorage2D(i.TEXTURE_2D,Lt,se,_e[0].width,_e[0].height);for(let ct=0,Mt=_e.length;ct<Mt;ct++)zt=_e[ct],A.format!==Wn?Xt!==null?pe?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,zt.width,zt.height,Xt,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,se,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?q&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,zt.width,zt.height,Xt,te,zt.data):e.texImage2D(i.TEXTURE_2D,ct,se,zt.width,zt.height,0,Xt,te,zt.data)}else if(A.isDataArrayTexture)if(pe){if(De&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,se,At.width,At.height,At.depth),q)if(A.layerUpdates.size>0){const ct=Gl(At.width,At.height,A.format,A.type);for(const Mt of A.layerUpdates){const kt=At.data.subarray(Mt*ct/At.data.BYTES_PER_ELEMENT,(Mt+1)*ct/At.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,At.width,At.height,1,Xt,te,kt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Xt,te,At.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,se,At.width,At.height,At.depth,0,Xt,te,At.data);else if(A.isData3DTexture)pe?(De&&e.texStorage3D(i.TEXTURE_3D,Lt,se,At.width,At.height,At.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Xt,te,At.data)):e.texImage3D(i.TEXTURE_3D,0,se,At.width,At.height,At.depth,0,Xt,te,At.data);else if(A.isFramebufferTexture){if(De)if(pe)e.texStorage2D(i.TEXTURE_2D,Lt,se,At.width,At.height);else{let ct=At.width,Mt=At.height;for(let kt=0;kt<Lt;kt++)e.texImage2D(i.TEXTURE_2D,kt,se,ct,Mt,0,Xt,te,null),ct>>=1,Mt>>=1}}else if(_e.length>0){if(pe&&De){const ct=jt(_e[0]);e.texStorage2D(i.TEXTURE_2D,Lt,se,ct.width,ct.height)}for(let ct=0,Mt=_e.length;ct<Mt;ct++)zt=_e[ct],pe?q&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Xt,te,zt):e.texImage2D(i.TEXTURE_2D,ct,se,Xt,te,zt);A.generateMipmaps=!1}else if(pe){if(De){const ct=jt(At);e.texStorage2D(i.TEXTURE_2D,Lt,se,ct.width,ct.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,te,At)}else e.texImage2D(i.TEXTURE_2D,0,se,Xt,te,At);g(A)&&d(_t),$t.__version=gt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function mt(I,A,Q){if(A.image.length!==6)return;const _t=Me(I,A),wt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Q);const gt=n.get(wt);if(wt.version!==gt.__version||_t===!0){e.activeTexture(i.TEXTURE0+Q);const $t=Ie.getPrimaries(Ie.workingColorSpace),Dt=A.colorSpace===Si?null:Ie.getPrimaries(A.colorSpace),Wt=A.colorSpace===Si||$t===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Ce=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,Xt=[];for(let Mt=0;Mt<6;Mt++)!Ce&&!At?Xt[Mt]=y(A.image[Mt],!0,s.maxCubemapSize):Xt[Mt]=At?A.image[Mt].image:A.image[Mt],Xt[Mt]=Fe(A,Xt[Mt]);const te=Xt[0],se=r.convert(A.format,A.colorSpace),zt=r.convert(A.type),_e=C(A.internalFormat,se,zt,A.colorSpace),pe=A.isVideoTexture!==!0,De=gt.__version===void 0||_t===!0,q=wt.dataReady;let Lt=B(A,te);ve(i.TEXTURE_CUBE_MAP,A);let ct;if(Ce){pe&&De&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,_e,te.width,te.height);for(let Mt=0;Mt<6;Mt++){ct=Xt[Mt].mipmaps;for(let kt=0;kt<ct.length;kt++){const Rt=ct[kt];A.format!==Wn?se!==null?pe?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt,0,0,Rt.width,Rt.height,se,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt,_e,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt,0,0,Rt.width,Rt.height,se,zt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt,_e,Rt.width,Rt.height,0,se,zt,Rt.data)}}}else{if(ct=A.mipmaps,pe&&De){ct.length>0&&Lt++;const Mt=jt(Xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,_e,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(At){pe?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Xt[Mt].width,Xt[Mt].height,se,zt,Xt[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,_e,Xt[Mt].width,Xt[Mt].height,0,se,zt,Xt[Mt].data);for(let kt=0;kt<ct.length;kt++){const oe=ct[kt].image[Mt].image;pe?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt+1,0,0,oe.width,oe.height,se,zt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt+1,_e,oe.width,oe.height,0,se,zt,oe.data)}}else{pe?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,se,zt,Xt[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,_e,se,zt,Xt[Mt]);for(let kt=0;kt<ct.length;kt++){const Rt=ct[kt];pe?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt+1,0,0,se,zt,Rt.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt+1,_e,se,zt,Rt.image[Mt])}}}g(A)&&d(i.TEXTURE_CUBE_MAP),gt.__version=wt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Ot(I,A,Q,_t,wt,gt){const $t=r.convert(Q.format,Q.colorSpace),Dt=r.convert(Q.type),Wt=C(Q.internalFormat,$t,Dt,Q.colorSpace),Ce=n.get(A),At=n.get(Q);if(At.__renderTarget=A,!Ce.__hasExternalTextures){const Xt=Math.max(1,A.width>>gt),te=Math.max(1,A.height>>gt);wt===i.TEXTURE_3D||wt===i.TEXTURE_2D_ARRAY?e.texImage3D(wt,gt,Wt,Xt,te,A.depth,0,$t,Dt,null):e.texImage2D(wt,gt,Wt,Xt,te,0,$t,Dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Ee(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,wt,At.__webglTexture,0,Ae(A)):(wt===i.TEXTURE_2D||wt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,wt,At.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(I,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const _t=A.depthTexture,wt=_t&&_t.isDepthTexture?_t.type:null,gt=E(A.stencilBuffer,wt),$t=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=Ae(A);Ee(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,gt,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,gt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$t,i.RENDERBUFFER,I)}else{const _t=A.textures;for(let wt=0;wt<_t.length;wt++){const gt=_t[wt],$t=r.convert(gt.format,gt.colorSpace),Dt=r.convert(gt.type),Wt=C(gt.internalFormat,$t,Dt,gt.colorSpace),Ce=Ae(A);Q&&Ee(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Wt,A.width,A.height):Ee(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Wt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Wt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function re(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=n.get(A.depthTexture);_t.__renderTarget=A,(!_t.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),bt(A.depthTexture,0);const wt=_t.__webglTexture,gt=Ae(A);if(A.depthTexture.format===ms)Ee(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,wt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,wt,0);else if(A.depthTexture.format===ws)Ee(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,wt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,wt,0);else throw new Error("Unknown depthTexture format")}function fe(I){const A=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const _t=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_t){const wt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_t.removeEventListener("dispose",wt)};_t.addEventListener("dispose",wt),A.__depthDisposeCallback=wt}A.__boundDepthTexture=_t}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");re(A.__webglFramebuffer,I)}else if(Q){A.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[_t]),A.__webglDepthbuffer[_t]===void 0)A.__webglDepthbuffer[_t]=i.createRenderbuffer(),Ut(A.__webglDepthbuffer[_t],I,!1);else{const wt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[_t];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,gt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Ut(A.__webglDepthbuffer,I,!1);else{const _t=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,wt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(I,A,Q){const _t=n.get(I);A!==void 0&&Ot(_t.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&fe(I)}function Xe(I){const A=I.texture,Q=n.get(I),_t=n.get(A);I.addEventListener("dispose",L);const wt=I.textures,gt=I.isWebGLCubeRenderTarget===!0,$t=wt.length>1;if($t||(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=A.version,a.memory.textures++),gt){Q.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Dt]=[];for(let Wt=0;Wt<A.mipmaps.length;Wt++)Q.__webglFramebuffer[Dt][Wt]=i.createFramebuffer()}else Q.__webglFramebuffer[Dt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Dt=0;Dt<A.mipmaps.length;Dt++)Q.__webglFramebuffer[Dt]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if($t)for(let Dt=0,Wt=wt.length;Dt<Wt;Dt++){const Ce=n.get(wt[Dt]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Ee(I)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Dt=0;Dt<wt.length;Dt++){const Wt=wt[Dt];Q.__webglColorRenderbuffer[Dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Dt]);const Ce=r.convert(Wt.format,Wt.colorSpace),At=r.convert(Wt.type),Xt=C(Wt.internalFormat,Ce,At,Wt.colorSpace,I.isXRRenderTarget===!0),te=Ae(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Xt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),ve(i.TEXTURE_CUBE_MAP,A);for(let Dt=0;Dt<6;Dt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Wt=0;Wt<A.mipmaps.length;Wt++)Ot(Q.__webglFramebuffer[Dt][Wt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Wt);else Ot(Q.__webglFramebuffer[Dt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);g(A)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($t){for(let Dt=0,Wt=wt.length;Dt<Wt;Dt++){const Ce=wt[Dt],At=n.get(Ce);e.bindTexture(i.TEXTURE_2D,At.__webglTexture),ve(i.TEXTURE_2D,Ce),Ot(Q.__webglFramebuffer,I,Ce,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,0),g(Ce)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let Dt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Dt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,_t.__webglTexture),ve(Dt,A),A.mipmaps&&A.mipmaps.length>0)for(let Wt=0;Wt<A.mipmaps.length;Wt++)Ot(Q.__webglFramebuffer[Wt],I,A,i.COLOR_ATTACHMENT0,Dt,Wt);else Ot(Q.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,Dt,0);g(A)&&d(Dt),e.unbindTexture()}I.depthBuffer&&fe(I)}function we(I){const A=I.textures;for(let Q=0,_t=A.length;Q<_t;Q++){const wt=A[Q];if(g(wt)){const gt=S(I),$t=n.get(wt).__webglTexture;e.bindTexture(gt,$t),d(gt),e.unbindTexture()}}}const $e=[],X=[];function Tn(I){if(I.samples>0){if(Ee(I)===!1){const A=I.textures,Q=I.width,_t=I.height;let wt=i.COLOR_BUFFER_BIT;const gt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$t=n.get(I),Dt=A.length>1;if(Dt)for(let Wt=0;Wt<A.length;Wt++)e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let Wt=0;Wt<A.length;Wt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(wt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(wt|=i.STENCIL_BUFFER_BIT)),Dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$t.__webglColorRenderbuffer[Wt]);const Ce=n.get(A[Wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,Q,_t,0,0,Q,_t,wt,i.NEAREST),l===!0&&($e.length=0,X.length=0,$e.push(i.COLOR_ATTACHMENT0+Wt),I.depthBuffer&&I.resolveDepthBuffer===!1&&($e.push(gt),X.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Dt)for(let Wt=0;Wt<A.length;Wt++){e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,$t.__webglColorRenderbuffer[Wt]);const Ce=n.get(A[Wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,Ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ae(I){return Math.min(s.maxSamples,I.samples)}function Ee(I){const A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Qt(I){const A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function Fe(I,A){const Q=I.colorSpace,_t=I.format,wt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Es&&Q!==Si&&(Ie.getTransfer(Q)===Ge?(_t!==Wn||wt!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function jt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=it,this.setTexture2D=bt,this.setTexture2DArray=ut,this.setTexture3D=Et,this.setTextureCube=lt,this.rebindTextures=ge,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Ee}function Og(i,t){function e(n,s=Si){let r;const a=Ie.getTransfer(s);if(n===mi)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===zo)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===vh)return i.ALPHA;if(n===xh)return i.RGB;if(n===Wn)return i.RGBA;if(n===_h)return i.LUMINANCE;if(n===yh)return i.LUMINANCE_ALPHA;if(n===ms)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===bh)return i.RED;if(n===Vo)return i.RED_INTEGER;if(n===Mh)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Ir||n===Ur)if(a===Ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===fo)return a===Ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===po)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mo||n===go||n===vo||n===xo||n===_o||n===yo||n===bo||n===Mo||n===So||n===wo||n===Eo||n===To||n===Ao||n===Co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mo)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===Ro||n===Po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Nr)return a===Ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sh||n===Fo||n===Lo||n===Do)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const zg={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const g=e.getJointPose(y,n),d=this._getHandJoint(c,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gg=`
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

}`;class Vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mn({vertexShader:Hg,fragmentShader:Gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wg extends Cs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,v=null;const y=new Vg,g=e.getContextAttributes();let d=null,S=null;const C=[],E=[],B=new Ct;let F=null;const L=new Cn;L.viewport=new Ve;const k=new Cn;k.viewport=new Ve;const P=[L,k],b=new hd;let z=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let mt=C[ft];return mt===void 0&&(mt=new Na,C[ft]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(ft){let mt=C[ft];return mt===void 0&&(mt=new Na,C[ft]=mt),mt.getGripSpace()},this.getHand=function(ft){let mt=C[ft];return mt===void 0&&(mt=new Na,C[ft]=mt),mt.getHandSpace()};function nt(ft){const mt=E.indexOf(ft.inputSource);if(mt===-1)return;const Ot=C[mt];Ot!==void 0&&(Ot.update(ft.inputSource,ft.frame,c||a),Ot.dispatchEvent({type:ft.type,data:ft.inputSource}))}function vt(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",vt),s.removeEventListener("inputsourceschange",bt);for(let ft=0;ft<C.length;ft++){const mt=E[ft];mt!==null&&(E[ft]=null,C[ft].disconnect(mt))}z=null,it=null,y.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,S=null,Me.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){r=ft,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){o=ft,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ft){c=ft},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ft){if(s=ft,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",vt),s.addEventListener("inputsourceschange",bt),g.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Yn(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let mt=null,Ot=null,Ut=null;g.depth&&(Ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=g.stencil?ws:ms,Ot=g.stencil?Ss:Wi);const re={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(re),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Yn(f.textureWidth,f.textureHeight,{format:Wn,type:mi,depthTexture:new kh(f.textureWidth,f.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function bt(ft){for(let mt=0;mt<ft.removed.length;mt++){const Ot=ft.removed[mt],Ut=E.indexOf(Ot);Ut>=0&&(E[Ut]=null,C[Ut].disconnect(Ot))}for(let mt=0;mt<ft.added.length;mt++){const Ot=ft.added[mt];let Ut=E.indexOf(Ot);if(Ut===-1){for(let fe=0;fe<C.length;fe++)if(fe>=E.length){E.push(Ot),Ut=fe;break}else if(E[fe]===null){E[fe]=Ot,Ut=fe;break}if(Ut===-1)break}const re=C[Ut];re&&re.connect(Ot)}}const ut=new V,Et=new V;function lt(ft,mt,Ot){ut.setFromMatrixPosition(mt.matrixWorld),Et.setFromMatrixPosition(Ot.matrixWorld);const Ut=ut.distanceTo(Et),re=mt.projectionMatrix.elements,fe=Ot.projectionMatrix.elements,ge=re[14]/(re[10]-1),Xe=re[14]/(re[10]+1),we=(re[9]+1)/re[5],$e=(re[9]-1)/re[5],X=(re[8]-1)/re[0],Tn=(fe[8]+1)/fe[0],Ae=ge*X,Ee=ge*Tn,Qt=Ut/(-X+Tn),Fe=Qt*-X;if(mt.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(Fe),ft.translateZ(Qt),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),re[10]===-1)ft.projectionMatrix.copy(mt.projectionMatrix),ft.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const jt=ge+Qt,I=Xe+Qt,A=Ae-Fe,Q=Ee+(Ut-Fe),_t=we*Xe/I*jt,wt=$e*Xe/I*jt;ft.projectionMatrix.makePerspective(A,Q,_t,wt,jt,I),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function Pt(ft,mt){mt===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(mt.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(s===null)return;let mt=ft.near,Ot=ft.far;y.texture!==null&&(y.depthNear>0&&(mt=y.depthNear),y.depthFar>0&&(Ot=y.depthFar)),b.near=k.near=L.near=mt,b.far=k.far=L.far=Ot,(z!==b.near||it!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),z=b.near,it=b.far),L.layers.mask=ft.layers.mask|2,k.layers.mask=ft.layers.mask|4,b.layers.mask=L.layers.mask|k.layers.mask;const Ut=ft.parent,re=b.cameras;Pt(b,Ut);for(let fe=0;fe<re.length;fe++)Pt(re[fe],Ut);re.length===2?lt(b,L,k):b.projectionMatrix.copy(L.projectionMatrix),Vt(ft,b,Ut)};function Vt(ft,mt,Ot){Ot===null?ft.matrix.copy(mt.matrixWorld):(ft.matrix.copy(Ot.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(mt.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(mt.projectionMatrix),ft.projectionMatrixInverse.copy(mt.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=Js*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ft){l=ft,f!==null&&(f.fixedFoveation=ft),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ft)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let Jt=null;function ve(ft,mt){if(h=mt.getViewerPose(c||a),v=mt,h!==null){const Ot=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Ut=!1;Ot.length!==b.cameras.length&&(b.cameras.length=0,Ut=!0);for(let fe=0;fe<Ot.length;fe++){const ge=Ot[fe];let Xe=null;if(p!==null)Xe=p.getViewport(ge);else{const $e=u.getViewSubImage(f,ge);Xe=$e.viewport,fe===0&&(t.setRenderTargetTextures(S,$e.colorTexture,f.ignoreDepthValues?void 0:$e.depthStencilTexture),t.setRenderTarget(S))}let we=P[fe];we===void 0&&(we=new Cn,we.layers.enable(fe),we.viewport=new Ve,P[fe]=we),we.matrix.fromArray(ge.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(ge.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),fe===0&&(b.matrix.copy(we.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ut===!0&&b.cameras.push(we)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")){const fe=u.getDepthInformation(Ot[0]);fe&&fe.isValid&&fe.texture&&y.init(t,fe,s.renderState)}}for(let Ot=0;Ot<C.length;Ot++){const Ut=E[Ot],re=C[Ot];Ut!==null&&re!==void 0&&re.update(Ut,mt,c||a)}Jt&&Jt(ft,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),v=null}const Me=new Xh;Me.setAnimationLoop(ve),this.setAnimationLoop=function(ft){Jt=ft},this.dispose=function(){}}}const Di=new Qn,Xg=new Ye;function qg(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Dh(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,S,C,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,E)):d.isMeshMatcapMaterial?(r(g,d),v(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),y(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,S,C):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Rn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Rn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const S=t.get(d),C=S.envMap,E=S.envMapRotation;C&&(g.envMap.value=C,Di.copy(E),Di.x*=-1,Di.y*=-1,Di.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),g.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(Di)),g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,S,C){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*S,g.scale.value=C*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,S){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const S=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,C){const E=C.program;n.uniformBlockBinding(S,E)}function c(S,C){let E=s[S.id];E===void 0&&(v(S),E=h(S),s[S.id]=E,S.addEventListener("dispose",g));const B=C.program;n.updateUBOMapping(S,B);const F=t.render.frame;r[S.id]!==F&&(f(S),r[S.id]=F)}function h(S){const C=u();S.__bindingPointIndex=C;const E=i.createBuffer(),B=S.__size,F=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,B,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,E),E}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const C=s[S.id],E=S.uniforms,B=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let F=0,L=E.length;F<L;F++){const k=Array.isArray(E[F])?E[F]:[E[F]];for(let P=0,b=k.length;P<b;P++){const z=k[P];if(p(z,F,P,B)===!0){const it=z.__offset,nt=Array.isArray(z.value)?z.value:[z.value];let vt=0;for(let bt=0;bt<nt.length;bt++){const ut=nt[bt],Et=y(ut);typeof ut=="number"||typeof ut=="boolean"?(z.__data[0]=ut,i.bufferSubData(i.UNIFORM_BUFFER,it+vt,z.__data)):ut.isMatrix3?(z.__data[0]=ut.elements[0],z.__data[1]=ut.elements[1],z.__data[2]=ut.elements[2],z.__data[3]=0,z.__data[4]=ut.elements[3],z.__data[5]=ut.elements[4],z.__data[6]=ut.elements[5],z.__data[7]=0,z.__data[8]=ut.elements[6],z.__data[9]=ut.elements[7],z.__data[10]=ut.elements[8],z.__data[11]=0):(ut.toArray(z.__data,vt),vt+=Et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,it,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,C,E,B){const F=S.value,L=C+"_"+E;if(B[L]===void 0)return typeof F=="number"||typeof F=="boolean"?B[L]=F:B[L]=F.clone(),!0;{const k=B[L];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return B[L]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function v(S){const C=S.uniforms;let E=0;const B=16;for(let L=0,k=C.length;L<k;L++){const P=Array.isArray(C[L])?C[L]:[C[L]];for(let b=0,z=P.length;b<z;b++){const it=P[b],nt=Array.isArray(it.value)?it.value:[it.value];for(let vt=0,bt=nt.length;vt<bt;vt++){const ut=nt[vt],Et=y(ut),lt=E%B,Pt=lt%Et.boundary,Vt=lt+Pt;E+=Pt,Vt!==0&&B-Vt<Et.storage&&(E+=B-Vt),it.__data=new Float32Array(Et.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=E,E+=Et.storage}}}const F=E%B;return F>0&&(E+=B-F),S.__size=E,S.__cache={},this}function y(S){const C={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(C.boundary=4,C.storage=4):S.isVector2?(C.boundary=8,C.storage=8):S.isVector3||S.isColor?(C.boundary=16,C.storage=12):S.isVector4?(C.boundary=16,C.storage=16):S.isMatrix3?(C.boundary=48,C.storage=48):S.isMatrix4?(C.boundary=64,C.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),C}function g(S){const C=S.target;C.removeEventListener("dispose",g);const E=a.indexOf(C.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function d(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Zh{constructor(t={}){const{canvas:e=gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),y=new Int32Array(4);let g=null,d=null;const S=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Ei,this.toneMappingExposure=1;const E=this;let B=!1,F=0,L=0,k=null,P=-1,b=null;const z=new Ve,it=new Ve;let nt=null;const vt=new Yt(0);let bt=0,ut=e.width,Et=e.height,lt=1,Pt=null,Vt=null;const Jt=new Ve(0,0,ut,Et),ve=new Ve(0,0,ut,Et);let Me=!1;const ft=new jo;let mt=!1,Ot=!1;const Ut=new Ye,re=new Ye,fe=new V,ge=new Ve,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function $e(){return k===null?lt:1}let X=n;function Tn(M,H){return e.getContext(M,H)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),X===null){const H="webgl2";if(X=Tn(H,M),X===null)throw Tn(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ae,Ee,Qt,Fe,jt,I,A,Q,_t,wt,gt,$t,Dt,Wt,Ce,At,Xt,te,se,zt,_e,pe,De,q;function Lt(){Ae=new im(X),Ae.init(),pe=new Og(X,Ae),Ee=new Kp(X,Ae,t,pe),Qt=new Bg(X,Ae),Ee.reverseDepthBuffer&&f&&Qt.buffers.depth.setReversed(!0),Fe=new am(X),jt=new wg,I=new kg(X,Ae,Qt,jt,Ee,pe,Fe),A=new Qp(E),Q=new nm(E),_t=new dd(X),De=new jp(X,_t),wt=new sm(X,_t,Fe,De),gt=new lm(X,wt,_t,Fe),se=new om(X,Ee,I),At=new Jp(jt),$t=new Sg(E,A,Q,Ae,Ee,De,At),Dt=new qg(E,jt),Wt=new Tg,Ce=new Lg(Ae),te=new $p(E,A,Q,Qt,gt,p,l),Xt=new Ug(E,gt,Ee),q=new Yg(X,Fe,Ee,Qt),zt=new Zp(X,Ae,Fe),_e=new rm(X,Ae,Fe),Fe.programs=$t.programs,E.capabilities=Ee,E.extensions=Ae,E.properties=jt,E.renderLists=Wt,E.shadowMap=Xt,E.state=Qt,E.info=Fe}Lt();const ct=new Wg(E,X);this.xr=ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const M=Ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(M){M!==void 0&&(lt=M,this.setSize(ut,Et,!1))},this.getSize=function(M){return M.set(ut,Et)},this.setSize=function(M,H,$=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ut=M,Et=H,e.width=Math.floor(M*lt),e.height=Math.floor(H*lt),$===!0&&(e.style.width=M+"px",e.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(ut*lt,Et*lt).floor()},this.setDrawingBufferSize=function(M,H,$){ut=M,Et=H,lt=$,e.width=Math.floor(M*$),e.height=Math.floor(H*$),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(Jt)},this.setViewport=function(M,H,$,Y){M.isVector4?Jt.set(M.x,M.y,M.z,M.w):Jt.set(M,H,$,Y),Qt.viewport(z.copy(Jt).multiplyScalar(lt).round())},this.getScissor=function(M){return M.copy(ve)},this.setScissor=function(M,H,$,Y){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,H,$,Y),Qt.scissor(it.copy(ve).multiplyScalar(lt).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(M){Qt.setScissorTest(Me=M)},this.setOpaqueSort=function(M){Pt=M},this.setTransparentSort=function(M){Vt=M},this.getClearColor=function(M){return M.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(M=!0,H=!0,$=!0){let Y=0;if(M){let G=!1;if(k!==null){const st=k.texture.format;G=st===Xo||st===Wo||st===Vo}if(G){const st=k.texture.type,rt=st===mi||st===Wi||st===Ks||st===Ss||st===Ho||st===Go,dt=te.getClearColor(),ot=te.getClearAlpha(),yt=dt.r,St=dt.g,ht=dt.b;rt?(v[0]=yt,v[1]=St,v[2]=ht,v[3]=ot,X.clearBufferuiv(X.COLOR,0,v)):(y[0]=yt,y[1]=St,y[2]=ht,y[3]=ot,X.clearBufferiv(X.COLOR,0,y))}else Y|=X.COLOR_BUFFER_BIT}H&&(Y|=X.DEPTH_BUFFER_BIT),$&&(Y|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),te.dispose(),Wt.dispose(),Ce.dispose(),jt.dispose(),A.dispose(),Q.dispose(),gt.dispose(),De.dispose(),q.dispose(),$t.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",fn),ct.removeEventListener("sessionend",Ls),x.stop()};function Mt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const M=Fe.autoReset,H=Xt.enabled,$=Xt.autoUpdate,Y=Xt.needsUpdate,G=Xt.type;Lt(),Fe.autoReset=M,Xt.enabled=H,Xt.autoUpdate=$,Xt.needsUpdate=Y,Xt.type=G}function Rt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){const H=M.target;H.removeEventListener("dispose",oe),ze(H)}function ze(M){tn(M),jt.remove(M)}function tn(M){const H=jt.get(M).programs;H!==void 0&&(H.forEach(function($){$t.releaseProgram($)}),M.isShaderMaterial&&$t.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,$,Y,G,st){H===null&&(H=Xe);const rt=G.isMesh&&G.matrixWorld.determinant()<0,dt=qt(M,H,$,Y,G);Qt.setMaterial(Y,rt);let ot=$.index,yt=1;if(Y.wireframe===!0){if(ot=wt.getWireframeAttribute($),ot===void 0)return;yt=2}const St=$.drawRange,ht=$.attributes.position;let Z=St.start*yt,K=(St.start+St.count)*yt;st!==null&&(Z=Math.max(Z,st.start*yt),K=Math.min(K,(st.start+st.count)*yt)),ot!==null?(Z=Math.max(Z,0),K=Math.min(K,ot.count)):ht!=null&&(Z=Math.max(Z,0),K=Math.min(K,ht.count));const pt=K-Z;if(pt<0||pt===1/0)return;De.setup(G,Y,dt,$,ot);let at,et=zt;if(ot!==null&&(at=_t.get(ot),et=_e,et.setIndex(at)),G.isMesh)Y.wireframe===!0?(Qt.setLineWidth(Y.wireframeLinewidth*$e()),et.setMode(X.LINES)):et.setMode(X.TRIANGLES);else if(G.isLine){let tt=Y.linewidth;tt===void 0&&(tt=1),Qt.setLineWidth(tt*$e()),G.isLineSegments?et.setMode(X.LINES):G.isLineLoop?et.setMode(X.LINE_LOOP):et.setMode(X.LINE_STRIP)}else G.isPoints?et.setMode(X.POINTS):G.isSprite&&et.setMode(X.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)et.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const tt=G._multiDrawStarts,Ht=G._multiDrawCounts,Bt=G._multiDrawCount,ee=ot?_t.get(ot).bytesPerElement:1,ce=jt.get(Y).currentProgram.getUniforms();for(let N=0;N<Bt;N++)ce.setValue(X,"_gl_DrawID",N),et.render(tt[N]/ee,Ht[N])}else if(G.isInstancedMesh)et.renderInstances(Z,pt,G.count);else if($.isInstancedBufferGeometry){const tt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ht=Math.min($.instanceCount,tt);et.renderInstances(Z,pt,Ht)}else et.render(Z,pt)};function Le(M,H,$){M.transparent===!0&&M.side===We&&M.forceSinglePass===!1?(M.side=Rn,M.needsUpdate=!0,J(M,H,$),M.side=Ti,M.needsUpdate=!0,J(M,H,$),M.side=We):J(M,H,$)}this.compile=function(M,H,$=null){$===null&&($=M),d=Ce.get($),d.init(H),C.push(d),$.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),M!==$&&M.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const Y=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const st=G.material;if(st)if(Array.isArray(st))for(let rt=0;rt<st.length;rt++){const dt=st[rt];Le(dt,$,G),Y.add(dt)}else Le(st,$,G),Y.add(st)}),C.pop(),d=null,Y},this.compileAsync=function(M,H,$=null){const Y=this.compile(M,H,$);return new Promise(G=>{function st(){if(Y.forEach(function(rt){jt.get(rt).currentProgram.isReady()&&Y.delete(rt)}),Y.size===0){G(M);return}setTimeout(st,10)}Ae.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let An=null;function kn(M){An&&An(M)}function fn(){x.stop()}function Ls(){x.start()}const x=new Xh;x.setAnimationLoop(kn),typeof self<"u"&&x.setContext(self),this.setAnimationLoop=function(M){An=M,ct.setAnimationLoop(M),M===null?x.stop():x.start()},ct.addEventListener("sessionstart",fn),ct.addEventListener("sessionend",Ls),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(H),H=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,H,k),d=Ce.get(M,C.length),d.init(H),C.push(d),re.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ft.setFromProjectionMatrix(re),Ot=this.localClippingEnabled,mt=At.init(this.clippingPlanes,Ot),g=Wt.get(M,S.length),g.init(),S.push(g),ct.enabled===!0&&ct.isPresenting===!0){const st=E.xr.getDepthSensingMesh();st!==null&&T(st,H,-1/0,E.sortObjects)}T(M,H,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(Pt,Vt),we=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,we&&te.addToRenderList(g,M),this.info.render.frame++,mt===!0&&At.beginShadows();const $=d.state.shadowsArray;Xt.render($,M,H),mt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,G=g.transmissive;if(d.setupLights(),H.isArrayCamera){const st=H.cameras;if(G.length>0)for(let rt=0,dt=st.length;rt<dt;rt++){const ot=st[rt];m(Y,G,M,ot)}we&&te.render(M);for(let rt=0,dt=st.length;rt<dt;rt++){const ot=st[rt];w(g,M,ot,ot.viewport)}}else G.length>0&&m(Y,G,M,H),we&&te.render(M),w(g,M,H);k!==null&&(I.updateMultisampleRenderTarget(k),I.updateRenderTargetMipmap(k)),M.isScene===!0&&M.onAfterRender(E,M,H),De.resetDefaultState(),P=-1,b=null,C.pop(),C.length>0?(d=C[C.length-1],mt===!0&&At.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function T(M,H,$,Y){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ft.intersectsSprite(M)){Y&&ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(re);const rt=gt.update(M),dt=M.material;dt.visible&&g.push(M,rt,dt,$,ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ft.intersectsObject(M))){const rt=gt.update(M),dt=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ge.copy(M.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),ge.copy(rt.boundingSphere.center)),ge.applyMatrix4(M.matrixWorld).applyMatrix4(re)),Array.isArray(dt)){const ot=rt.groups;for(let yt=0,St=ot.length;yt<St;yt++){const ht=ot[yt],Z=dt[ht.materialIndex];Z&&Z.visible&&g.push(M,rt,Z,$,ge.z,ht)}}else dt.visible&&g.push(M,rt,dt,$,ge.z,null)}}const st=M.children;for(let rt=0,dt=st.length;rt<dt;rt++)T(st[rt],H,$,Y)}function w(M,H,$,Y){const G=M.opaque,st=M.transmissive,rt=M.transparent;d.setupLightsView($),mt===!0&&At.setGlobalState(E.clippingPlanes,$),Y&&Qt.viewport(z.copy(Y)),G.length>0&&R(G,H,$),st.length>0&&R(st,H,$),rt.length>0&&R(rt,H,$),Qt.buffers.depth.setTest(!0),Qt.buffers.depth.setMask(!0),Qt.buffers.color.setMask(!0),Qt.setPolygonOffset(!1)}function m(M,H,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new Yn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?fi:mi,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const st=d.state.transmissionRenderTarget[Y.id],rt=Y.viewport||z;st.setSize(rt.z,rt.w);const dt=E.getRenderTarget();E.setRenderTarget(st),E.getClearColor(vt),bt=E.getClearAlpha(),bt<1&&E.setClearColor(16777215,.5),E.clear(),we&&te.render($);const ot=E.toneMapping;E.toneMapping=Ei;const yt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),mt===!0&&At.setGlobalState(E.clippingPlanes,Y),R(M,$,Y),I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let ht=0,Z=H.length;ht<Z;ht++){const K=H[ht],pt=K.object,at=K.geometry,et=K.material,tt=K.group;if(et.side===We&&pt.layers.test(Y.layers)){const Ht=et.side;et.side=Rn,et.needsUpdate=!0,j(pt,$,Y,at,et,tt),et.side=Ht,et.needsUpdate=!0,St=!0}}St===!0&&(I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st))}E.setRenderTarget(dt),E.setClearColor(vt,bt),yt!==void 0&&(Y.viewport=yt),E.toneMapping=ot}function R(M,H,$){const Y=H.isScene===!0?H.overrideMaterial:null;for(let G=0,st=M.length;G<st;G++){const rt=M[G],dt=rt.object,ot=rt.geometry,yt=Y===null?rt.material:Y,St=rt.group;dt.layers.test($.layers)&&j(dt,H,$,ot,yt,St)}}function j(M,H,$,Y,G,st){M.onBeforeRender(E,H,$,Y,G,st),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(E,H,$,Y,M,st),G.transparent===!0&&G.side===We&&G.forceSinglePass===!1?(G.side=Rn,G.needsUpdate=!0,E.renderBufferDirect($,H,Y,G,M,st),G.side=Ti,G.needsUpdate=!0,E.renderBufferDirect($,H,Y,G,M,st),G.side=We):E.renderBufferDirect($,H,Y,G,M,st),M.onAfterRender(E,H,$,Y,G,st)}function J(M,H,$){H.isScene!==!0&&(H=Xe);const Y=jt.get(M),G=d.state.lights,st=d.state.shadowsArray,rt=G.state.version,dt=$t.getParameters(M,G.state,st,H,$),ot=$t.getProgramCacheKey(dt);let yt=Y.programs;Y.environment=M.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(M.isMeshStandardMaterial?Q:A).get(M.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,yt===void 0&&(M.addEventListener("dispose",oe),yt=new Map,Y.programs=yt);let St=yt.get(ot);if(St!==void 0){if(Y.currentProgram===St&&Y.lightsStateVersion===rt)return Tt(M,dt),St}else dt.uniforms=$t.getUniforms(M),M.onBeforeCompile(dt,E),St=$t.acquireProgram(dt,ot),yt.set(ot,St),Y.uniforms=dt.uniforms;const ht=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ht.clippingPlanes=At.uniform),Tt(M,dt),Y.needsLights=Re(M),Y.lightsStateVersion=rt,Y.needsLights&&(ht.ambientLightColor.value=G.state.ambient,ht.lightProbe.value=G.state.probe,ht.directionalLights.value=G.state.directional,ht.directionalLightShadows.value=G.state.directionalShadow,ht.spotLights.value=G.state.spot,ht.spotLightShadows.value=G.state.spotShadow,ht.rectAreaLights.value=G.state.rectArea,ht.ltc_1.value=G.state.rectAreaLTC1,ht.ltc_2.value=G.state.rectAreaLTC2,ht.pointLights.value=G.state.point,ht.pointLightShadows.value=G.state.pointShadow,ht.hemisphereLights.value=G.state.hemi,ht.directionalShadowMap.value=G.state.directionalShadowMap,ht.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ht.spotShadowMap.value=G.state.spotShadowMap,ht.spotLightMatrix.value=G.state.spotLightMatrix,ht.spotLightMap.value=G.state.spotLightMap,ht.pointShadowMap.value=G.state.pointShadowMap,ht.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=St,Y.uniformsList=null,St}function xt(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=Br.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function Tt(M,H){const $=jt.get(M);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function qt(M,H,$,Y,G){H.isScene!==!0&&(H=Xe),I.resetTextureUnits();const st=H.fog,rt=Y.isMeshStandardMaterial?H.environment:null,dt=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Es,ot=(Y.isMeshStandardMaterial?Q:A).get(Y.envMap||rt),yt=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,St=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ht=!!$.morphAttributes.position,Z=!!$.morphAttributes.normal,K=!!$.morphAttributes.color;let pt=Ei;Y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(pt=E.toneMapping);const at=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,et=at!==void 0?at.length:0,tt=jt.get(Y),Ht=d.state.lights;if(mt===!0&&(Ot===!0||M!==b)){const ae=M===b&&Y.id===P;At.setState(Y,M,ae)}let Bt=!1;Y.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Ht.state.version||tt.outputColorSpace!==dt||G.isBatchedMesh&&tt.batching===!1||!G.isBatchedMesh&&tt.batching===!0||G.isBatchedMesh&&tt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&tt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&tt.instancing===!1||!G.isInstancedMesh&&tt.instancing===!0||G.isSkinnedMesh&&tt.skinning===!1||!G.isSkinnedMesh&&tt.skinning===!0||G.isInstancedMesh&&tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&tt.instancingMorph===!1&&G.morphTexture!==null||tt.envMap!==ot||Y.fog===!0&&tt.fog!==st||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==At.numPlanes||tt.numIntersection!==At.numIntersection)||tt.vertexAlphas!==yt||tt.vertexTangents!==St||tt.morphTargets!==ht||tt.morphNormals!==Z||tt.morphColors!==K||tt.toneMapping!==pt||tt.morphTargetsCount!==et)&&(Bt=!0):(Bt=!0,tt.__version=Y.version);let ee=tt.currentProgram;Bt===!0&&(ee=J(Y,H,G));let ce=!1,N=!1,me=!1;const Zt=ee.getUniforms(),de=tt.uniforms;if(Qt.useProgram(ee.program)&&(ce=!0,N=!0,me=!0),Y.id!==P&&(P=Y.id,N=!0),ce||b!==M){Qt.buffers.depth.getReversed()?(Ut.copy(M.projectionMatrix),xf(Ut),_f(Ut),Zt.setValue(X,"projectionMatrix",Ut)):Zt.setValue(X,"projectionMatrix",M.projectionMatrix),Zt.setValue(X,"viewMatrix",M.matrixWorldInverse);const he=Zt.map.cameraPosition;he!==void 0&&he.setValue(X,fe.setFromMatrixPosition(M.matrixWorld)),Ee.logarithmicDepthBuffer&&Zt.setValue(X,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Zt.setValue(X,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,N=!0,me=!0)}if(G.isSkinnedMesh){Zt.setOptional(X,G,"bindMatrix"),Zt.setOptional(X,G,"bindMatrixInverse");const ae=G.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),Zt.setValue(X,"boneTexture",ae.boneTexture,I))}G.isBatchedMesh&&(Zt.setOptional(X,G,"batchingTexture"),Zt.setValue(X,"batchingTexture",G._matricesTexture,I),Zt.setOptional(X,G,"batchingIdTexture"),Zt.setValue(X,"batchingIdTexture",G._indirectTexture,I),Zt.setOptional(X,G,"batchingColorTexture"),G._colorsTexture!==null&&Zt.setValue(X,"batchingColorTexture",G._colorsTexture,I));const ne=$.morphAttributes;if((ne.position!==void 0||ne.normal!==void 0||ne.color!==void 0)&&se.update(G,$,ee),(N||tt.receiveShadow!==G.receiveShadow)&&(tt.receiveShadow=G.receiveShadow,Zt.setValue(X,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(de.envMap.value=ot,de.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(de.envMapIntensity.value=H.environmentIntensity),N&&(Zt.setValue(X,"toneMappingExposure",E.toneMappingExposure),tt.needsLights&&Nt(de,me),st&&Y.fog===!0&&Dt.refreshFogUniforms(de,st),Dt.refreshMaterialUniforms(de,Y,lt,Et,d.state.transmissionRenderTarget[M.id]),Br.upload(X,xt(tt),de,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Br.upload(X,xt(tt),de,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Zt.setValue(X,"center",G.center),Zt.setValue(X,"modelViewMatrix",G.modelViewMatrix),Zt.setValue(X,"normalMatrix",G.normalMatrix),Zt.setValue(X,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ae=Y.uniformsGroups;for(let he=0,qe=ae.length;he<qe;he++){const Te=ae[he];q.update(Te,ee),q.bind(Te,ee)}}return ee}function Nt(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function Re(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,H,$){jt.get(M.texture).__webglTexture=H,jt.get(M.depthTexture).__webglTexture=$;const Y=jt.get(M);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,H){const $=jt.get(M);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(M,H=0,$=0){k=M,F=H,L=$;let Y=!0,G=null,st=!1,rt=!1;if(M){const ot=jt.get(M);if(ot.__useDefaultFramebuffer!==void 0)Qt.bindFramebuffer(X.FRAMEBUFFER,null),Y=!1;else if(ot.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(ot.__hasExternalTextures)I.rebindTextures(M,jt.get(M.texture).__webglTexture,jt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ht=M.depthTexture;if(ot.__boundDepthTexture!==ht){if(ht!==null&&jt.has(ht)&&(M.width!==ht.image.width||M.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const yt=M.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(rt=!0);const St=jt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(St[H])?G=St[H][$]:G=St[H],st=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?G=jt.get(M).__webglMultisampledFramebuffer:Array.isArray(St)?G=St[$]:G=St,z.copy(M.viewport),it.copy(M.scissor),nt=M.scissorTest}else z.copy(Jt).multiplyScalar(lt).floor(),it.copy(ve).multiplyScalar(lt).floor(),nt=Me;if(Qt.bindFramebuffer(X.FRAMEBUFFER,G)&&Y&&Qt.drawBuffers(M,G),Qt.viewport(z),Qt.scissor(it),Qt.setScissorTest(nt),st){const ot=jt.get(M.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,ot.__webglTexture,$)}else if(rt){const ot=jt.get(M.texture),yt=H||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,ot.__webglTexture,$||0,yt)}P=-1},this.readRenderTargetPixels=function(M,H,$,Y,G,st,rt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=jt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){Qt.bindFramebuffer(X.FRAMEBUFFER,dt);try{const ot=M.texture,yt=ot.format,St=ot.type;if(!Ee.textureFormatReadable(yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-Y&&$>=0&&$<=M.height-G&&X.readPixels(H,$,Y,G,pe.convert(yt),pe.convert(St),st)}finally{const ot=k!==null?jt.get(k).__webglFramebuffer:null;Qt.bindFramebuffer(X.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(M,H,$,Y,G,st,rt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=jt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){const ot=M.texture,yt=ot.format,St=ot.type;if(!Ee.textureFormatReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=M.width-Y&&$>=0&&$<=M.height-G){Qt.bindFramebuffer(X.FRAMEBUFFER,dt);const ht=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ht),X.bufferData(X.PIXEL_PACK_BUFFER,st.byteLength,X.STREAM_READ),X.readPixels(H,$,Y,G,pe.convert(yt),pe.convert(St),0);const Z=k!==null?jt.get(k).__webglFramebuffer:null;Qt.bindFramebuffer(X.FRAMEBUFFER,Z);const K=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await vf(X,K,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ht),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,st),X.deleteBuffer(ht),X.deleteSync(K),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,H=null,$=0){M.isTexture!==!0&&(us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1]);const Y=Math.pow(2,-$),G=Math.floor(M.image.width*Y),st=Math.floor(M.image.height*Y),rt=H!==null?H.x:0,dt=H!==null?H.y:0;I.setTexture2D(M,0),X.copyTexSubImage2D(X.TEXTURE_2D,$,0,0,rt,dt,G,st),Qt.unbindTexture()};const Gt=X.createFramebuffer(),le=X.createFramebuffer();this.copyTextureToTexture=function(M,H,$=null,Y=null,G=0,st=null){M.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,M=arguments[1],H=arguments[2],st=arguments[3]||0,$=null),st===null&&(G!==0?(us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=G,G=0):st=0);let rt,dt,ot,yt,St,ht,Z,K,pt;const at=M.isCompressedTexture?M.mipmaps[st]:M.image;if($!==null)rt=$.max.x-$.min.x,dt=$.max.y-$.min.y,ot=$.isBox3?$.max.z-$.min.z:1,yt=$.min.x,St=$.min.y,ht=$.isBox3?$.min.z:0;else{const ne=Math.pow(2,-G);rt=Math.floor(at.width*ne),dt=Math.floor(at.height*ne),M.isDataArrayTexture?ot=at.depth:M.isData3DTexture?ot=Math.floor(at.depth*ne):ot=1,yt=0,St=0,ht=0}Y!==null?(Z=Y.x,K=Y.y,pt=Y.z):(Z=0,K=0,pt=0);const et=pe.convert(H.format),tt=pe.convert(H.type);let Ht;H.isData3DTexture?(I.setTexture3D(H,0),Ht=X.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(I.setTexture2DArray(H,0),Ht=X.TEXTURE_2D_ARRAY):(I.setTexture2D(H,0),Ht=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment);const Bt=X.getParameter(X.UNPACK_ROW_LENGTH),ee=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ce=X.getParameter(X.UNPACK_SKIP_PIXELS),N=X.getParameter(X.UNPACK_SKIP_ROWS),me=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,at.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,at.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,yt),X.pixelStorei(X.UNPACK_SKIP_ROWS,St),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ht);const Zt=M.isDataArrayTexture||M.isData3DTexture,de=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){const ne=jt.get(M),ae=jt.get(H),he=jt.get(ne.__renderTarget),qe=jt.get(ae.__renderTarget);Qt.bindFramebuffer(X.READ_FRAMEBUFFER,he.__webglFramebuffer),Qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Te=0;Te<ot;Te++)Zt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,jt.get(M).__webglTexture,G,ht+Te),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,jt.get(H).__webglTexture,st,pt+Te)),X.blitFramebuffer(yt,St,rt,dt,Z,K,rt,dt,X.DEPTH_BUFFER_BIT,X.NEAREST);Qt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||jt.has(M)){const ne=jt.get(M),ae=jt.get(H);Qt.bindFramebuffer(X.READ_FRAMEBUFFER,Gt),Qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,le);for(let he=0;he<ot;he++)Zt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ne.__webglTexture,G,ht+he):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ne.__webglTexture,G),de?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ae.__webglTexture,st,pt+he):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ae.__webglTexture,st),G!==0?X.blitFramebuffer(yt,St,rt,dt,Z,K,rt,dt,X.COLOR_BUFFER_BIT,X.NEAREST):de?X.copyTexSubImage3D(Ht,st,Z,K,pt+he,yt,St,rt,dt):X.copyTexSubImage2D(Ht,st,Z,K,yt,St,rt,dt);Qt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else de?M.isDataTexture||M.isData3DTexture?X.texSubImage3D(Ht,st,Z,K,pt,rt,dt,ot,et,tt,at.data):H.isCompressedArrayTexture?X.compressedTexSubImage3D(Ht,st,Z,K,pt,rt,dt,ot,et,at.data):X.texSubImage3D(Ht,st,Z,K,pt,rt,dt,ot,et,tt,at):M.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,st,Z,K,rt,dt,et,tt,at.data):M.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,st,Z,K,at.width,at.height,et,at.data):X.texSubImage2D(X.TEXTURE_2D,st,Z,K,rt,dt,et,tt,at);X.pixelStorei(X.UNPACK_ROW_LENGTH,Bt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ee),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ce),X.pixelStorei(X.UNPACK_SKIP_ROWS,N),X.pixelStorei(X.UNPACK_SKIP_IMAGES,me),st===0&&H.generateMipmaps&&X.generateMipmap(Ht),Qt.unbindTexture()},this.copyTextureToTexture3D=function(M,H,$=null,Y=null,G=0){return M.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Y=arguments[1]||null,M=arguments[2],H=arguments[3],G=arguments[4]||0),us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,H,$,Y,G)},this.initRenderTarget=function(M){jt.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),Qt.unbindTexture()},this.resetState=function(){F=0,L=0,k=null,Qt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}}const O=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|iPod|Mobile/i.test(typeof navigator<"u"?navigator.userAgent:""),$g=!1,jg=!1,dc=O?.4:.32,Zg=O?44:58,Kg=O?72:80,Jg=O?28:32,pc=O?256:320,Qg=O?.35:.45;function Ba(){const i=typeof window<"u"?window.devicePixelRatio:1;return O?Math.min(i,1.25):Math.min(i,1.1)}function Ai(i,t,e=Zg){return Math.abs(i-t)<=e}function Gn(i){i.traverse(t=>{t.matrixAutoUpdate=!1,t.updateMatrix()})}function Ln(i,t,e){const n=new Yt(i),s=new Yt(t);return n.lerp(s,e).getStyle()}const mc=120;function tv(i){const t=i%mc/mc;return t<.4?0:t<.58?(t-.4)/.18*.28:t<.78?.28+(t-.58)/.2*.52:t<.92?.8+(t-.78)/.14*.2:1-(t-.92)/.08}function kr(i){return i<=.55?0:Math.min(1,(i-.55)/.3)}function gc(i){return i<=.5?0:Math.min(1,(i-.5)/.38)}function vc(i){if(i<=.28)return i*.12;if(i<=.55)return .034+(i-.28)*.55;const t=kr(i);return .18+(i-.55)*1.05+t*.35}const xc=new Map;function ev(i,t){return[i,t.roughness??.65,t.metalness??0,t.emissive??"",t.emissiveIntensity??0,t.transparent?1:0,t.opacity??1].join("|")}function D(i,t={}){const e=ev(i,t);let n=xc.get(e);return n||(n=new je({color:i,roughness:.65,...t}),xc.set(e,n)),n}function _(i,t,e,n=0,s=0,r=0,a=!O){const o=new Ne(t,e);return o.position.set(n,s,r),o.castShadow=a,o.receiveShadow=!O,O||(o.frustumCulled=!0),i.add(o),o}function wn(i){i.traverse(t=>{var e;t instanceof Ne&&t.geometry.dispose(),t instanceof Zr&&((e=t.material.map)==null||e.dispose(),t.material.dispose())})}class nv{constructor(t){U(this,"root",new ie);U(this,"ufos",[]);U(this,"stars",[]);U(this,"warFlashes",[]);U(this,"jets",[]);U(this,"starTimer",0);U(this,"night",0);this.scene=t,this.scene.add(this.root),this.root.name="skyEffects"}build(t,e){this.clear();const n=O?4:5;for(let s=0;s<n;s++){const r=40+e()*(t+80),a=this.makeSkyUfo(e),o=(e()-.5)*55,l=22+e()*16;a.position.set(o,l,r),this.root.add(a),this.ufos.push({group:a,worldZ:r,baseX:o,baseY:l,phase:e()*10,speed:.4+e()*.5})}}makeSkyUfo(t){const e=new ie;e.userData.isSkyUfo=!0,_(e,new Ft(.55,.85,.12,O?8:12),D("#78909C",{metalness:.55,roughness:.35,emissive:"#00E676",emissiveIntensity:.25}),0,0,0),_(e,new En(.72,.03,6,O?10:14),D("#69F0AE",{emissive:"#00E676",emissiveIntensity:.85}),0,-.04,0),_(e,new Kt(.28,8,6,0,Math.PI*2,0,Math.PI/2),D("#80DEEA",{transparent:!0,opacity:.55,emissive:"#00BCD4",emissiveIntensity:.45}),0,.12,0);for(let s=0;s<5;s++){const r=s/5*Math.PI*2;_(e,new W(.06,.06,.06),D(s%2===0?"#FFEB3B":"#FF1744",{emissive:s%2===0?"#FFC107":"#FF1744",emissiveIntensity:.9}),Math.cos(r)*.65,-.02,Math.sin(r)*.65)}const n=_(e,new Ft(.02,.35,2.2,8,1,!0),new ue({color:"#69F0AE",transparent:!0,opacity:.12,side:We,depthWrite:!1}),0,-1.1,0,!1);return n.userData.isUfoBeam=!0,e.rotation.y=t()*Math.PI*2,e}spawnShootingStar(t,e){if(this.stars.length>=(O?2:4))return;const n=_(this.root,new W(.04,.04,2.8),new ue({color:"#FFFFFF",transparent:!0,opacity:.92}),(e()-.5)*40,28+e()*12,t+30+e()*40,!1);n.rotation.x=-.6-e()*.4,n.rotation.z=(e()-.5)*.8;const s=_(n,new W(.12,.12,1.2),new ue({color:"#80DEEA",transparent:!0,opacity:.35,blending:ke}),0,0,1.4,!1);s.userData.isTail=!0,this.stars.push({mesh:n,vx:(e()-.5)*8,vy:-18-e()*12,vz:-25-e()*15,life:.9+e()*.4})}setNight(t){this.night=t;for(const e of this.ufos)e.group.visible=t>.25,e.group.traverse(n=>{n instanceof Ne&&n.userData.isUfoBeam&&(n.material.opacity=.08+t*.12)})}playSpectacle(t,e){if(t==="dogfight"){this.spawnJet(e+35+Math.random()*20,-1),this.spawnJet(e+38+Math.random()*20,1);return}if(t==="meteor-streak"){for(let s=0;s<(O?2:4);s++)this.spawnShootingStar(e,Math.random);return}const n=t==="distant-barrage"?O?2:4:O?1:2;for(let s=0;s<n;s++)this.spawnWarFlash(e+25+Math.random()*45,t)}spawnWarFlash(t,e){const n=(Math.random()-.5)*50,s=e==="orbital-flash"?"#FF5252":e==="energy-surge"?"#00E5FF":"#FFAB40",r=_(this.root,new Pe(3.5+Math.random()*4,2+Math.random()*2),new ue({color:s,transparent:!0,opacity:.85,blending:ke,depthWrite:!1,side:We}),n,6+Math.random()*8,t,!1);r.rotation.y=(Math.random()-.5)*.6,this.warFlashes.push({mesh:r,life:.35+Math.random()*.35})}spawnJet(t,e){const n=new ie;n.position.set(e*22,16+Math.random()*6,t),_(n,new Dn(.35,1.2,5),D("#546E7A",{metalness:.6}),0,0,0),_(n,new Pe(.8,.25),new ue({color:"#FF5252",transparent:!0,opacity:.7}),-.5,0,0,!1),n.rotation.y=e>0?-Math.PI/2:Math.PI/2,n.rotation.z=e*.15,this.root.add(n),this.jets.push({group:n,life:3.5})}update(t,e,n){this.root.position.set(0,0,0);for(const s of this.ufos){if(Math.abs(s.worldZ-n)>(O?90:120)){s.group.visible=!1;continue}s.group.visible=this.night>.2,s.group.position.set(s.baseX+Math.sin(t*.15+s.phase)*2.5,s.baseY+Math.sin(t*s.speed+s.phase)*1.2,s.worldZ),s.group.rotation.y+=e*(.25+s.speed*.15)}if(this.night>.45){this.starTimer+=e;const s=O?2.2:1.1;this.starTimer>=s&&(this.starTimer=0,this.spawnShootingStar(n,Math.random))}for(let s=this.stars.length-1;s>=0;s--){const r=this.stars[s];r.life-=e,r.mesh.position.x+=r.vx*e,r.mesh.position.y+=r.vy*e,r.mesh.position.z+=r.vz*e,r.mesh.material.opacity=Math.max(0,r.life),(r.life<=0||r.mesh.position.y<8)&&(this.root.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),r.mesh.traverse(a=>{a instanceof Ne&&a!==r.mesh&&(a.geometry.dispose(),a.material.dispose())}),this.stars.splice(s,1))}for(let s=this.warFlashes.length-1;s>=0;s--){const r=this.warFlashes[s];r.life-=e;const a=r.mesh.material;a.opacity=Math.max(0,r.life*2.2),r.mesh.scale.setScalar(1+(.35-r.life)*2),r.life<=0&&(this.root.remove(r.mesh),r.mesh.geometry.dispose(),a.dispose(),this.warFlashes.splice(s,1))}for(let s=this.jets.length-1;s>=0;s--){const r=this.jets[s];r.life-=e,r.group.position.x+=e*14*Math.sign(r.group.position.x||1),r.group.position.z-=e*6,(r.life<=0||Math.abs(r.group.position.z-n)>100)&&(wn(r.group),this.jets.splice(s,1))}}clear(){for(const t of this.stars)this.root.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.stars=[];for(const t of this.warFlashes)this.root.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.warFlashes=[];for(const t of this.jets)wn(t.group);this.jets=[];for(const t of this.ufos)wn(t.group);for(this.ufos=[];this.root.children.length;)this.root.remove(this.root.children[0])}dispose(){this.clear(),this.scene.remove(this.root)}}const _c=new Map;function ir(i,t,e=128){let n=_c.get(i);if(n)return n;const s=document.createElement("canvas");return s.width=e,s.height=e,t(s.getContext("2d"),e,e),n=new ln(s),n.wrapS=n.wrapT=Nn,n.colorSpace=Be,_c.set(i,n),n}function iv(i){const t=`brick-${Math.floor(i*100)}`;return ir(t,(e,n,s)=>{const r=new Yt().setHSL(i,.35,.42);e.fillStyle=r.getStyle(),e.fillRect(0,0,n,s);const a=n/4,o=s/8;for(let l=0;l<8;l++){const c=l%2===0?0:a/2;for(let h=-1;h<5;h++){const u=h*a+c,f=l*o,p=(l+h)%3;e.fillStyle=`rgba(${p===0?0:20},${p===1?0:15},${p===2?0:10},0.12)`,e.fillRect(u+1,f+1,a-2,o-2),e.strokeStyle="rgba(0,0,0,0.22)",e.lineWidth=1,e.strokeRect(u+.5,f+.5,a-1,o-1)}}},128)}function yc(i){const t=`siding-${Math.floor(i*100)}`;return ir(t,(e,n,s)=>{const r=new Yt().setHSL(i,.28,.72);e.fillStyle=r.getStyle(),e.fillRect(0,0,n,s);for(let a=0;a<s;a+=6)e.fillStyle=a%12===0?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.06)",e.fillRect(0,a,n,3);for(let a=0;a<n;a+=32)e.strokeStyle="rgba(0,0,0,0.08)",e.beginPath(),e.moveTo(a,0),e.lineTo(a,s),e.stroke()},128)}function sv(i="#5D4037"){return ir(`roof-${i}`,(t,e,n)=>{t.fillStyle=i,t.fillRect(0,0,e,n);for(let s=0;s<12;s++){const r=s%2===0?0:10;for(let a=-1;a<8;a++)t.fillStyle=`rgba(0,0,0,${.06+s%3*.03})`,t.beginPath(),t.arc(a*20+r+10,s*10+8,9,0,Math.PI,!0),t.fill()}},128)}function rv(){return ir("bark",(i,t,e)=>{i.fillStyle="#4E342E",i.fillRect(0,0,t,e);for(let n=0;n<24;n++)i.strokeStyle=`rgba(0,0,0,${.08+n%4*.04})`,i.lineWidth=1+n%3,i.beginPath(),i.moveTo(n*17%t,0),i.bezierCurveTo(n*23%t,e*.3,n*31%t,e*.7,n*13%t,e),i.stroke()},64)}function av(){return ir("leaf",(i,t,e)=>{i.fillStyle="#388E3C",i.fillRect(0,0,t,e);for(let n=0;n<80;n++){const s=n*37%t,r=n*53%e;i.fillStyle=n%3===0?"rgba(129,199,132,0.45)":"rgba(27,94,32,0.25)",i.beginPath(),i.ellipse(s,r,3+n%4,2+n%3,n*.5,0,Math.PI*2),i.fill()}},64)}const hn=O?8:12,hi="#FFC107",_s="#FF9800",gi="#1a1a1a";let Ii=null;function nl(){if(Ii)return Ii;const i=O?64:96,t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d");e.fillStyle=hi,e.fillRect(0,0,i,i),e.fillStyle=gi;const n=O?10:14;for(let s=-i;s<i*2;s+=n*2)e.beginPath(),e.moveTo(s,0),e.lineTo(s+n,0),e.lineTo(s+n-i,i),e.lineTo(s-i,i),e.fill();return Ii=new ln(t),Ii.colorSpace=Be,Ii.wrapS=Ii.wrapT=Nn,Ii}function ov(){const i=O?64:80,t=O?128:160,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");n.fillStyle="#3d2858",n.fillRect(0,0,i,t);const s=["#FF6B9D","#FFD93D","#6BCBFF","#FF8C42"],r=6;for(let o=0;o<r;o++){const l=t*.78-o*(t/(r+1)),c=s[o%s.length];n.fillStyle=c,n.strokeStyle="#2a1838",n.lineWidth=2;for(const h of[i*.27,i*.5,i*.73])n.beginPath(),n.moveTo(h,l-t*.045),n.lineTo(h-i*.1,l+t*.03),n.lineTo(h+i*.1,l+t*.03),n.closePath(),n.fill(),n.stroke()}n.strokeStyle="#2a1838",n.lineWidth=5,n.strokeRect(3,3,i-6,t-6);const a=new ln(e);return a.colorSpace=Be,a.wrapT=Nn,a}function lv(i,t){switch(t){case"newsbox-row":uv(i);break;case"dog-fence":fv(i);break;case"party-tent":dv(i);break;case"bin-alley":pv(i);break;case"hoa-gate":mv(i);break;case"mailbox-row":gv(i);break;case"lawn-sprinkler":vv(i);break;case"package-spill":xv(i);break;case"news-stand":_v(i);break;case"food-cart":yv(i);break;case"alien-beacon":bv(i);break;case"fallen-sign":Mv(i);break;case"checkpoint":Sv(i);break;case"traffic-barricade":wv(i);break;case"burst-hydrant":Ev(i);break;case"bus-shelter":Tv(i);break;case"cactus-wall":Av(i);break;case"mirage-rock":Cv(i);break;case"rockslide":Rv(i);break;case"sand-drift":Pv(i);break;case"skull-rock":Fv(i);break;case"tumbleweed":Lv(i);break;case"bone-arch":Dv(i);break;case"sun-bleached-wreck":Iv(i);break;case"fallen-log":Uv(i);break;case"temple-rubble":Nv(i);break;case"thorn-bramble":Bv(i);break;case"flood-wreck":kv(i);break;case"totem-gate":Ov(i);break;case"vine-snare":zv(i);break;case"quicksand-pit":Hv(i);break;case"idol-shrine":Gv(i);break}hv(i)}function cv(){const i=nl();return i.repeat.set(1.2,1),D("#FFFFFF",{map:i,roughness:.72,emissive:_s,emissiveIntensity:O?.06:.1})}function il(i,t,e,n,s,r=0){const a=_(i,new Pe(t,e),cv(),0,n,s,!1);a.rotation.y=r,a.userData.isCautionBand=!0}function hv(i){i.traverse(t=>{if(!(t instanceof Ne)||t.userData.isCautionBand||t.userData.isGlow||!(t.material instanceof je))return;const e=t.material.color.getHex();(e===2171169||e===1710618||e===1842204||e===658450||e===2503224||e===3622735)&&(t.material.emissive.set(_s),t.material.emissiveIntensity=O?.1:.14,t.material.color.lerp(new Yt(hi),O?.14:.18))})}function Ue(i,t){const e=_(i,new un(t*.94,hn*2),D("#5a6570",{roughness:.95,metalness:.04}),0,.004,0,!1);e.rotation.x=-Math.PI/2;for(let s=0;s<8;s++){const r=s/8*Math.PI*2,a=Math.PI/4,o=s%2===0?hi:_s,l=_(i,new In(t*.74,t*.98,O?3:4,1,r,a),D(o,{roughness:.68,emissive:o,emissiveIntensity:O?.1:.14}),0,.01,0,!1);l.rotation.x=-Math.PI/2,l.userData.isGlow=!0}const n=_(i,new In(t*.42,t*.58,hn),D(gi,{roughness:.9,emissive:_s,emissiveIntensity:.06}),0,.012,0,!1);n.rotation.x=-Math.PI/2;for(let s=0;s<4;s++){const r=s/4*Math.PI*2+Math.PI/4,a=_(i,new Ft(.028,.038,.3,4),D(_s,{emissive:hi,emissiveIntensity:.35,roughness:.6}),Math.cos(r)*t*.84,.15,Math.sin(r)*t*.84);_(a,new Kt(.048,6,6),D(hi,{emissive:hi,emissiveIntensity:.5}),0,.17,0)}}function Xn(i){return D(i,{roughness:.88,metalness:.02})}function Ze(i,t=.55){return D(i,{roughness:.35,metalness:t})}function Kh(i,t,e,n,s){const r=_(i,new W(t,e,.06),D(gi,{roughness:.85}),0,n,s),a=nl();a.repeat.set(Math.max(2,t/.2),1),_(r,new Pe(t*.96,e*.92),D("#FFFFFF",{map:a,roughness:.7,emissive:_s,emissiveIntensity:.08}),0,0,.04)}function uv(i){Ue(i,.95);for(const t of[-.55,0,.55]){const e=_(i,new W(.44,.68,.4),Ze("#1E4E8C",.4),t,.34,0);_(e,new W(.46,.1,.42),Ze("#0D2F5C"),0,.39,0),_(e,new Pe(.34,.42),D("#E8F4FD",{roughness:.4}),0,.02,.21),_(e,new W(.36,.05,.02),D("#F5C518",{roughness:.5}),0,.22,.22),_(i,new Ft(.02,.02,.08,6),Ze("#78909C"),t+.18,.08,.15)}}function fv(i){Ue(i,1);for(const t of[-.88,.88])_(i,new W(.07,.78,.07),Xn("#D7CCC8"),t,.39,0),_(i,new W(.1,.1,.1),Xn("#A1887F"),t,.82,0);for(let t=0;t<6;t++){const e=-.75+t*.3;_(i,new W(.26,.08,.05),Xn("#EFEBE9"),e,.2+t%2*.28,0),_(i,new Dn(.05,.12,4),Xn("#BCAAA4"),e,.58,0)}_(i,new Ft(.13,.15,.1,8),Ze("#607D8B"),.38,.05,.14),_(i,new Ft(.17,.14,.07,8),D("#BF360C",{roughness:.6}),-.38,.035,.12)}function dv(i){Ue(i,1.05);const t=Ze("#546E7A",.45);for(const[n,s]of[[-.72,-.38],[.72,-.38],[0,.48]])_(i,new Ft(.035,.045,.9,8),t,n,.45,s);const e=_(i,new Dn(1,.58,4),D("#C2185B",{roughness:.75}),0,.76,0);e.rotation.y=Math.PI/4,_(e,new Dn(.98,.56,4),D("#880E4F",{roughness:.8}),0,.01,0);for(let n=0;n<5;n++){const s=n/5*Math.PI*2,r=_(i,new Kt(.09,8,8),D(["#FDD835","#42A5F5","#66BB6A","#FF7043","#AB47BC"][n],{roughness:.5}),Math.cos(s)*.58,.38+n%2*.12,Math.sin(s)*.38);r.userData.isBob=!0,r.userData.bobPhase=n}_(i,new W(.55,.38,.52),Xn("#5D4037"),0,.19,0),_(i,new Ft(.04,.04,.12,6),D("#ECEFF1"),.15,.44,.1)}function pv(i){Ue(i,1);const t=["#2E7D32","#1565C0","#E65100"];for(let e=0;e<3;e++){const n=-.55+e*.55,s=_(i,new W(.4,.82,.4),D(t[e],{roughness:.5,metalness:.2}),n,.41,0);_(s,new W(.44,.07,.44),Ze("#37474F"),0,.44,0),_(s,new W(.14,.05,.02),D("#FDD835",{roughness:.55}),0,.12,.21),_(s,new Ft(.03,.03,.06,6),Ze("#455A64"),.14,.55,.12),s.rotation.z=(e-1)*.07}}function mv(i){Ue(i,1.15);for(const t of[-.98,.98])_(i,new W(.14,1,.14),Xn("#4E342E"),t,.5,0),_(i,new Kt(.11,8,8),D("#F9A825",{roughness:.45}),t,1.02,0);_(i,new W(2.05,.12,.1),Ze("#455A64"),0,.88,0),Kh(i,1.65,.58,.48,.07),_(i,new W(.58,.38,.05),D("#C62828",{roughness:.55}),0,.58,.11),_(i,new Pe(.38,.1),D("#FAFAFA",{roughness:.6}),0,.58,.14)}function gv(i){Ue(i,.88);for(const t of[-.5,0,.5]){_(i,new Ft(.04,.05,.55,6),Ze("#546E7A"),t,.28,0);const e=_(i,new W(.32,.28,.48),D("#1565C0",{roughness:.45,metalness:.35}),t,.58,0);_(e,new W(.34,.06,.5),Ze("#0D47A1"),0,.17,0),_(e,new Pe(.22,.14),D("#ECEFF1",{roughness:.4}),0,.02,.25),_(i,new W(.08,.04,.02),D("#FDD835"),t,.52,.26)}}function vv(i){Ue(i,.85);for(const[t,e]of[[-.35,.1],[.35,-.08]]){_(i,new Ft(.05,.07,.06,8),Ze("#78909C"),t,.03,e),_(i,new Ft(.04,.05,.18,8),Ze("#455A64"),t,.12,e);for(let n=0;n<3;n++){const s=n/3*Math.PI*2+t,r=_(i,new Ft(.008,.015,.35,4),D("#81D4FA",{transparent:!0,opacity:.55,roughness:.2}),t+Math.cos(s)*.12,.32,e+Math.sin(s)*.12);r.rotation.z=.85,r.rotation.y=s,r.userData.isBob=!0,r.userData.bobPhase=n}}_(i,new W(.7,.02,.35),D("#33691E",{roughness:.95}),0,.01,0)}function xv(i){Ue(i,.92);const t=["#8D6E63","#5D4037","#795548","#6D4C41"];for(let e=0;e<5;e++){const n=-.45+e%3*.42,s=-.15+Math.floor(e/3)*.28,r=_(i,new W(.28+e%2*.06,.22+e%3*.04,.24),D(t[e],{roughness:.85}),n,.12+e%2*.08,s);r.rotation.y=e*.45,_(r,new W(.14,.04,.02),D("#FDD835",{roughness:.6}),0,.08,.13),_(r,new W(.04,.14,.02),D("#37474F"),-.06,0,.13)}_(i,new Pe(.55,.35),D("#ECEFF1",{transparent:!0,opacity:.35}),.1,.02,.2,!1)}function _v(i){Ue(i,.95);for(const t of[-.42,.42])_(i,new W(.07,.7,.07),Ze("#37474F"),t,.35,0);_(i,new W(1,.1,.58),Ze("#263238",.5),0,.66,0),_(i,new W(.9,.48,.48),D(gi,{roughness:.9}),0,.4,0),il(i,.82,.12,.52,.26);for(let t=0;t<5;t++)_(i,new W(.14,.4,.02),D(t%2===0?hi:gi,{roughness:.65}),-.32+t*.16,.42,.25);_(i,new W(.52,.14,.02),D("#C62828",{roughness:.55}),0,.76,.22)}function yv(i){Ue(i,1);for(const e of[-.38,.38])_(i,new Ft(.06,.06,.02,8),Ze("#263238"),e,.06,-.22),_(i,new Ft(.06,.06,.02,8),D("#212121",{roughness:.8}),e,.06,.22),_(i,new Ft(.04,.04,.52,8),Ze("#37474F"),e,.32,-.22);_(i,new W(.9,.58,.58),D("#E64A19",{roughness:.55}),0,.58,0),_(i,new W(.95,.08,.62),D("#BF360C",{roughness:.7}),0,.88,0),_(i,new W(.68,.38,.02),D("#FFF8E1",{roughness:.5}),0,.68,.31);for(let e=0;e<3;e++)_(i,new Ft(.05,.05,.03,8),D("#FDD835",{roughness:.45}),-.22+e*.22,.92,.16);const t=_(i,new Kt(.1,6,6),D("#ECEFF1",{transparent:!0,opacity:.2}),0,.98,.08,!1);t.userData.isBob=!0}function bv(i){Ue(i,.92),_(i,new Ft(.58,.74,.16,hn),Ze("#455A64",.65),0,.08,0),_(i,new En(.42,.04,8,hn),Ze("#607D8B"),0,.16,0),_(i,new Kt(.36,12,8,0,Math.PI*2,0,Math.PI/2),D("#4DD0E1",{transparent:!0,opacity:.5,roughness:.3}),0,.14,0);const t=_(i,new nr(.16,0),D("#76FF03",{emissive:"#558B2F",emissiveIntensity:.35,roughness:.4}),0,.58,0);t.userData.isBob=!0;for(let e=0;e<4;e++){const n=e/4*Math.PI*2;_(i,new W(.03,.42,.03),D("#AEEA00",{transparent:!0,opacity:.45}),Math.cos(n)*.28,.32,Math.sin(n)*.28)}}function Mv(i){Ue(i,.88),_(i,new Ft(.05,.07,.95,8),Ze("#78909C"),.32,.1,.22);const t=_(i,new W(1.15,.68,.07),D("#F9A825",{roughness:.55}),-.12,.2,-.06);t.rotation.z=1.12,_(t,new W(.16,.48,.02),D(gi),0,0,.05),il(t,.14,.1,.02,.04),_(t,new W(.12,.12,.02),D(gi),.16,-.12,.05);for(let e=0;e<4;e++)_(i,new W(.07,.04,.28),Ze("#607D8B"),-.32+e*.14,.04,.08+e*.07)}function Sv(i){Ue(i,1.12);for(const t of[-.92,.92]){const e=_(i,new W(.11,.92,.11),D(gi,{roughness:.85}),t,.46,0);il(e,.13,.55,0,.07,Math.PI/2),_(i,new W(.15,.15,.15),D(hi,{roughness:.45}),t,.96,0)}_(i,new W(1.9,.14,.12),D("#1565C0",{roughness:.5,metalness:.25}),0,.82,0),Kh(i,1.45,.52,.44,.09),_(i,new W(.38,.38,.05),D("#C62828",{roughness:.55}),0,.58,.13)}function wv(i){Ue(i,1);for(const t of[-.55,.55])_(i,new W(.08,.62,.08),Ze("#37474F"),t,.31,0),_(i,new Ft(.04,.04,.02,6),D("#212121"),t,.02,.12);for(let t=0;t<3;t++){const e=_(i,new W(1.15,.14,.08),D(t%2===0?hi:gi,{roughness:.6}),0,.22+t*.18,0);e.rotation.z=(t-1)*.04}_(i,new W(.35,.22,.03),D("#FAFAFA",{roughness:.7}),0,.48,.06)}function Ev(i){Ue(i,.9),_(i,new Ft(.14,.16,.38,10),D("#C62828",{roughness:.45,metalness:.3}),0,.19,0),_(i,new Ft(.1,.1,.08,10),D("#B71C1C",{roughness:.45}),0,.4,0);for(const t of[-.12,.12])_(i,new Ft(.05,.05,.14,8),D("#C62828",{roughness:.45}),t,.28,.1);for(let t=0;t<5;t++){const e=t/5*Math.PI*2,n=_(i,new Kt(.04+t%2*.02,6,6),D("#29B6F6",{transparent:!0,opacity:.65,roughness:.2}),Math.cos(e)*.22,.55+t*.06,Math.sin(e)*.22);n.userData.isBob=!0,n.userData.bobPhase=t}_(i,new un(.55,hn),D("#0288D1",{transparent:!0,opacity:.25}),0,.01,0,!1)}function Tv(i){Ue(i,1.05);for(const t of[-.75,.75])_(i,new W(.08,.88,.08),Ze("#455A64"),t,.44,-.15);_(i,new W(1.6,.1,.55),D("#37474F",{roughness:.55,metalness:.35}),0,.82,-.05),_(i,new W(1.55,.55,.04),D("#81D4FA",{transparent:!0,opacity:.35,roughness:.2}),0,.55,.18),_(i,new W(.55,.38,.06),D("#546E7A",{roughness:.7}),0,.22,.05),_(i,new W(.12,.12,.02),D("#FDD835"),0,.65,.22)}function Av(i){Ue(i,1.05),_(i,new W(1.65,.05,.55),D("#A1887F",{roughness:.95}),0,.025,0);for(const t of[-.58,0,.58]){const e=_(i,new Ft(.13,.17,.78+Math.abs(t)*.08,10),D("#558B2F",{roughness:.92}),t,.4,0);_(e,new Ft(.09,.11,.32,8),D("#33691E",{roughness:.95}),t+(t>=0?.16:-.16),.58,0);for(let n=0;n<5;n++)_(i,new Dn(.025,.05,4),D("#33691E"),t+.1,.18+n*.13,.09)}}function Cv(i){Ue(i,.95);for(let t=0;t<4;t++){const e=_(i,new Kr(.24+t%3*.07,0),D("#8D6E63",{roughness:.98}),-.42+t*.28,.2+t%2*.1,(t-1.5)*.1);e.rotation.set(.25,t*.55,.12),e.userData.isBob=!0,e.userData.bobPhase=t}_(i,new Pe(1.1,.35),D("#FFF9C4",{transparent:!0,opacity:.12,side:We}),0,.15,0,!1)}function Rv(i){Ue(i,1.08),_(i,new W(1.45,.38,.72),D("#78909C",{roughness:.95}),0,.19,0);for(let t=0;t<6;t++){const e=_(i,new Kr(.2+t%3*.07,0),D(t%2===0?"#78909C":"#607D8B",{roughness:.98}),-.55+t*.22,.36+t%2*.14,(t-2.5)*.09);e.rotation.y=t*.65}for(let t=0;t<2;t++){const e=_(i,new Kt(.12,6,6),D("#BCAAA4",{transparent:!0,opacity:.18}),.15+t*.2,.52,.08);e.userData.isBob=!0,e.userData.bobPhase=t}}function Pv(i){Ue(i,.9),_(i,new Kt(.78,hn,hn,0,Math.PI*2,0,Math.PI/2.2),D("#FFE082",{roughness:.98}),0,.08,0),_(i,new Kt(.48,hn,hn,0,Math.PI*2,0,Math.PI/2.5),D("#FFCC80",{roughness:.98}),.42,.06,.16),_(i,new Kt(.38,hn,hn,0,Math.PI*2,0,Math.PI/2.5),D("#FFCC80",{roughness:.98}),-.38,.05,-.12);for(let t=0;t<3;t++){const e=_(i,new Kt(.07,6,6),D("#FFF8E1",{transparent:!0,opacity:.28}),(t-1)*.22,.32+t*.07,.18);e.userData.isBob=!0,e.userData.bobPhase=t}}function Fv(i){Ue(i,1.05),_(i,new W(1.25,.42,.68),D("#8D6E63",{roughness:.96}),0,.21,0);const t=_(i,new Kt(.34,12,12),D("#BCAAA4",{roughness:.92}),0,.54,.16);_(t,new W(.09,.11,.02),D("#212121"),-.11,.05,.3),_(t,new W(.09,.11,.02),D("#212121"),.11,.05,.3),_(t,new W(.15,.07,.02),D("#212121"),0,-.09,.3),_(i,new Ft(.035,.035,.52,6),D("#795548",{roughness:.9}),.48,.56,-.1),_(i,new Ft(.035,.035,.48,6),D("#795548",{roughness:.9}),-.42,.53,-.16)}function Lv(i){Ue(i,.88);const t=_(i,new Qo(.42,1),D("#8D6E63",{roughness:.98}),0,.38,0);for(let e=0;e<12;e++){const n=e/12*Math.PI*2;_(t,new Ft(.008,.008,.35,4),D("#6D4C41",{roughness:.95}),Math.cos(n)*.28,e%3*.08-.08,Math.sin(n)*.28)}t.userData.isSpin=!0,_(i,new un(.35,hn),D("#A1887F",{transparent:!0,opacity:.2}),0,.01,0,!1)}function Dv(i){Ue(i,1);for(const t of[-.62,.62]){const e=_(i,new Ft(.08,.1,.85,8),D("#EFEBE9",{roughness:.85}),t,.42,0);_(e,new Kt(.1,8,8),D("#ECEFF1",{roughness:.8}),0,.48,0),_(e,new Kt(.08,8,8),D("#ECEFF1",{roughness:.8}),0,-.48,0)}_(i,new En(.55,.07,8,hn,0,Math.PI),D("#EFEBE9",{roughness:.85}),0,.78,0),_(i,new W(.35,.08,.08),D("#EFEBE9",{roughness:.85}),0,.72,.12)}function Iv(i){Ue(i,.98),_(i,new W(.85,.32,.55),D("#BCAAA4",{roughness:.92}),.15,.16,0),_(i,new W(.45,.22,.38),D("#A1887F",{roughness:.95}),-.35,.11,.08),_(i,new Ft(.04,.04,.55,6),D("#8D6E63",{roughness:.95}),.45,.35,-.12),_(i,new Pe(.65,.4),D("#FFFDE7",{transparent:!0,opacity:.15,side:We}),0,.45,.2,!1);for(let t=0;t<3;t++)_(i,new W(.06,.04,.2),D("#78909C",{roughness:.8}),-.2+t*.15,.04,.15)}function Uv(i){Ue(i,1);const t=_(i,new Ft(.3,.34,1.65,hn),Xn("#4E342E"),0,.3,0);t.rotation.z=Math.PI/2,_(t,new un(.3,hn),Xn("#6D4C41"),.82,0,0);for(let e=0;e<4;e++)_(i,new W(.05,.22,.02),D("#2E7D32",{roughness:.9}),-.35+e*.22,.14,.26);_(i,new Kt(.1,6,6),D("#FF7043",{roughness:.7}),.55,.34,.22)}function Nv(i){Ue(i,1.02),_(i,new W(.58,.78,.48),D("#78909C",{roughness:.88}),-.38,.39,0),_(i,new W(.48,.38,.42),D("#607D8B",{roughness:.9}),.32,.19,.1);const t=_(i,new Ft(.17,.21,.58,10),D("#B0BEC5",{roughness:.85}),.38,.58,-.16);t.rotation.z=.32,_(i,new W(.52,.08,.52),D("#455A64",{roughness:.85}),0,.04,0);for(let e=0;e<4;e++)_(i,new W(.1,.1,.02),D("#F9A825",{roughness:.5}),-.12+e*.1,.56,.26)}function Bv(i){Ue(i,.95),_(i,new Kt(.58,10,10),D("#2E7D32",{roughness:.95}),0,.36,0);for(let t=0;t<10;t++){const e=t/10*Math.PI*2,n=_(i,new Dn(.035,.38,4),D("#33691E",{roughness:.92}),Math.cos(e)*.48,.26+t%3*.1,Math.sin(e)*.48);n.rotation.x=-.55,n.rotation.y=e}_(i,new W(.26,.26,.04),D("#C62828",{roughness:.55}),0,.56,.36)}function kv(i){Ue(i,.98),_(i,new W(1.15,.1,.62),D("#0288D1",{transparent:!0,opacity:.45,roughness:.3}),0,.05,0),_(i,new W(.58,.38,.42),Ze("#546E7A",.45),.22,.24,0),_(i,new W(.38,.22,.32),D("#78909C",{roughness:.7,metalness:.3}),-.38,.16,.06);const t=_(i,new W(.32,.32,.32),D("#689F38",{roughness:.85}),-.16,.3,.16);t.userData.isBob=!0}function Ov(i){Ue(i,1.15);for(const t of[-.68,.68]){const e=_(i,new Ft(.17,.21,1.08,10),Xn("#4E342E"),t,.54,0);_(e,new W(.3,.13,.3),D("#E64A19",{roughness:.65}),0,.36,.13),_(e,new W(.24,.11,.24),D("#F9A825",{roughness:.55}),0,.66,.13),_(e,new W(.09,.09,.02),D("#212121"),-.04,.8,.15),_(e,new W(.09,.09,.02),D("#212121"),.04,.8,.15)}_(i,new W(1.55,.13,.12),D("#33691E",{roughness:.85}),0,.98,0),_(i,new W(.07,.58,.07),D("#33691E",{roughness:.85}),0,.74,.16)}function zv(i){Ue(i,.95);for(const t of[-.45,.45])_(i,new Ft(.05,.07,.72,8),Xn("#5D4037"),t,.36,0);_(i,new W(1.05,.08,.08),Xn("#6D4C41"),0,.62,0);for(let t=0;t<6;t++){const e=t/6*Math.PI,n=_(i,new En(.18+t%2*.06,.025,6,10,0,Math.PI),D("#2E7D32",{roughness:.9}),Math.cos(e)*.15,.28+t*.06,Math.sin(e)*.1);n.rotation.y=e,n.userData.isBob=!0,n.userData.bobPhase=t}}function Hv(i){Ue(i,.95),_(i,new Ft(.72,.82,.06,hn),D("#D7CCC8",{roughness:.98}),0,.03,0),_(i,new Ft(.55,.65,.04,hn),D("#BCAAA4",{roughness:.98}),0,.05,0);for(let t=0;t<4;t++){const e=t/4*Math.PI*2,n=_(i,new Kt(.05,6,6),D("#A1887F",{transparent:!0,opacity:.5}),Math.cos(e)*.28,.08,Math.sin(e)*.28);n.userData.isBob=!0,n.userData.bobPhase=t}_(i,new W(.22,.04,.14),D("#795548",{roughness:.9}),.15,.06,.1)}function Gv(i){Ue(i,1.02),_(i,new W(.95,.12,.65),D("#455A64",{roughness:.85}),0,.06,0),_(i,new W(.75,.08,.55),D("#37474F",{roughness:.85}),0,.14,0);const t=_(i,new Ft(.22,.28,.62,10),D("#F9A825",{roughness:.45,metalness:.35}),0,.52,0);_(t,new W(.38,.12,.18),D("#F9A825",{roughness:.45,metalness:.35}),0,.38,0),_(t,new Kt(.14,10,10),D("#F9A825",{roughness:.45,metalness:.35}),0,.72,0);for(const e of[-.42,.42])_(i,new Ft(.06,.08,.45,8),D("#33691E",{roughness:.9}),e,.22,.22),_(i,new En(.12,.025,6,8),D("#F9A825",{roughness:.5}),e,.48,.22)}function bc(i){return tv(i)}const Mc=[-3.2,-1.6,0,1.6,3.2],Sc=["#FF6B9D","#FFD93D","#6BCBFF","#FF8C42","#B388FF"];class Vv{constructor(t){U(this,"scene");U(this,"rootMeshes",[]);U(this,"animProps",[]);U(this,"roadTexture");U(this,"roadEmissiveTex",null);U(this,"roadGlowTex",null);U(this,"roadMesh",null);U(this,"roadGlowMesh",null);U(this,"roadStreakTex",null);U(this,"roadStreakMesh",null);U(this,"roadRainTex",null);U(this,"roadRainMesh",null);U(this,"boostPads",[]);U(this,"boostLaneTex",null);U(this,"roadAccent",{primary:"#FFE082",secondary:"#FFF8E1",edge:"#FFFFFF"});U(this,"roadFx",{turbo:!1,speed:16,baseSpeed:16,playerX:0});U(this,"wetFactor",0);U(this,"districtId",1);U(this,"lightPoolTexture",null);U(this,"skyTexture",null);U(this,"skyCanvas",null);U(this,"skyTheme");U(this,"hemiLight");U(this,"ambientLight");U(this,"sunLight");U(this,"fillLight");U(this,"rimLight");U(this,"accentLight",null);U(this,"roadNightLight",null);U(this,"roadFillLight",null);U(this,"gameplayRimLight",null);U(this,"skyPhase",-1);U(this,"skyTick",0);U(this,"skyNight",0);U(this,"skyNightFx",0);U(this,"blackoutBoost",0);U(this,"playerZ",0);U(this,"cullTimer",0);U(this,"skyEffects",null);this.scene=t}build(t,e){this.clear(),this.skyTheme=t,this.districtId=t.id,this.setupLighting(t,e),this.buildSky(t);const n=(O?.007:.009)*(200/t.fogFar);this.scene.fog=new Vr(t.fog,n);const s=this.makeGrassTexture(t);s.wrapS=s.wrapT=Nn,s.repeat.set(6,(e+140)/10);const r=new Yt(t.ground).multiplyScalar(O?.62:.68),a=_(this.scene,new Pe(50,e+140),new je({map:s,color:r,roughness:1}),0,0,e/2,!1);a.rotation.x=-Math.PI/2,a.position.y=-.02,a.receiveShadow=!O,a.userData.isTerrain=!0,this.rootMeshes.push(a);const o=this.makeSidewalkTexture();o.wrapS=o.wrapT=Nn,o.repeat.set(2,(e+140)/6);for(const F of[-5.2,5.2]){const L=_(this.scene,new Pe(3.5,e+140),new je({map:o,color:"#8a959e",roughness:.96}),F,0,e/2,!1);L.rotation.x=-Math.PI/2,L.position.y=.015,L.receiveShadow=!O,L.userData.isTerrain=!0,this.rootMeshes.push(L)}this.roadAccent=this.roadAccentForTheme(t);const l=this.makeRoadTextures(t);this.roadTexture=l.color,this.roadEmissiveTex=l.emissive,this.roadGlowTex=l.glow;const c=(e+140)/8;for(const F of[this.roadTexture,this.roadEmissiveTex,this.roadGlowTex])F.wrapS=F.wrapT=Nn,F.repeat.set(1,c);const h=_(this.scene,new Pe(9.5,e+140),new je({map:this.roadTexture,emissiveMap:this.roadEmissiveTex,emissive:this.roadAccent.primary,emissiveIntensity:O?.18:.14,color:O?"#e8edf2":"#dfe6ec",roughness:.68,metalness:.14,envMapIntensity:.45}),0,0,e/2,!1);h.rotation.x=-Math.PI/2,h.position.y=.025,h.receiveShadow=!O,h.userData.isTerrain=!0,this.roadMesh=h,this.rootMeshes.push(h);const u=_(this.scene,new Pe(9.5,e+140),new ue({map:this.roadGlowTex,color:this.roadAccent.primary,transparent:!0,opacity:O?.26:.32,blending:ke,depthWrite:!1}),0,.032,e/2,!1);u.rotation.x=-Math.PI/2,u.userData.isTerrain=!0,this.roadGlowMesh=u,this.rootMeshes.push(u);const f=this.getRoadStreakTexture(),p=_(this.scene,new Pe(9.5,e+140),new ue({map:f,color:this.roadAccent.secondary,transparent:!0,opacity:0,blending:ke,depthWrite:!1}),0,.033,e/2,!1);p.rotation.x=-Math.PI/2,p.userData.isTerrain=!0,this.roadStreakTex=f,this.roadStreakMesh=p,this.rootMeshes.push(p);const v=this.getRoadRainTexture(),y=_(this.scene,new Pe(9.8,e+140),new ue({map:v,color:"#B3E5FC",transparent:!0,opacity:0,blending:ke,depthWrite:!1}),0,.034,e/2,!1);y.rotation.x=-Math.PI/2,y.userData.isTerrain=!0,this.roadRainTex=v,this.roadRainMesh=y,this.rootMeshes.push(y),this.placeBoostPads(t,e);const g=this.makeCurbTexture();g.wrapS=g.wrapT=Nn,g.repeat.set(1,(e+140)/4);for(const F of[-3.4,3.4]){const L=_(this.scene,new W(.35,.18,e+140),new je({map:g,color:"#ECEFF1",roughness:.82,metalness:.12,emissive:"#FFFFFF",emissiveIntensity:.04}),F,.09,e/2,!1);_(L,new W(.06,.04,e+140),D("#B0BEC5",{roughness:.85}),F>0?-.14:.14,.1,0,!1),_(L,new W(.05,.19,e+140),D("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.22}),F>0?-.17:.17,0,0,!1),L.userData.isTerrain=!0,this.rootMeshes.push(L)}if(this.placeStreetLights(t,e),!O)for(let F=30;F<e;F+=28)for(const L of[-5.2,5.2]){const k=_(this.scene,new Pe(3.2,1.2),D("#90A4AE",{roughness:.9}),L,.018,F,!1);k.rotation.x=-Math.PI/2,k.userData.isTerrain=!0,this.rootMeshes.push(k)}const d=Wv(t.id*1337+e);this.skyEffects&&this.skyEffects.dispose(),this.skyEffects=new nv(this.scene),this.skyEffects.build(e,d);const S=O?3:5;for(let F=0;F<S;F++){const L=this.makeCloud(d),k=d()*(e+60);L.position.set((d()-.5)*40,18+d()*14,k),this.scene.add(L),this.rootMeshes.push(L),this.animProps.push({obj:L,worldZ:k,kind:"cloud",speed:.15+d()*.2,baseY:L.position.y,phase:d()*10})}const C=O?22:26,E=O?5:9,B=[];for(let F=0;F<e+50;F+=C+Math.floor(d()*E))for(const L of[-1,1]){if(d()>(O?.22:.2)){const b=this.makeBuilding(t,d,L),z=F+d()*5;b.position.set(L*(8+d()*5),0,z),Gn(b),this.scene.add(b),this.rootMeshes.push(b),B.push({side:L,z})}else if(t.id<=2&&d()>.32){const b=this.makeTree(d);b.position.set(L*(13+d()*3.5),0,F+d()*4),Gn(b),this.scene.add(b),this.rootMeshes.push(b)}else if(t.id===3&&d()>.38){const b=this.makeCactus(d);b.position.set(L*(12+d()*4),0,F+d()*4),Gn(b),this.scene.add(b),this.rootMeshes.push(b)}else if(t.id===4&&d()>.28){const b=this.makePalmTree(d);b.position.set(L*(12+d()*4),0,F+d()*4),Gn(b),this.scene.add(b),this.rootMeshes.push(b)}if(d()>(O?.82:.68)){const b=this.makeMailbox(),z=F+d()*3;b.position.set(L*(6.4+d()*.8),0,z),Gn(b),this.scene.add(b),this.rootMeshes.push(b)}if(!O&&d()>.88){const b=this.makeAlienCrash();b.position.set(L*(7+d()*2),0,F),Gn(b),this.scene.add(b),this.rootMeshes.push(b),this.animProps.push({obj:b.children[1],worldZ:F,kind:"bob",speed:2,baseY:.12,phase:d()*5})}}if(t.id<=2){const F=O?14:11;for(let L=24;L<e+40;L+=F+Math.floor(d()*5))for(const k of[-1,1]){if(B.some(z=>z.side===k&&Math.abs(z.z-L)<8)||d()>.58)continue;const b=this.makeTree(d);b.position.set(k*(12.5+d()*4),0,L+d()*3),Gn(b),this.scene.add(b),this.rootMeshes.push(b)}}else if(t.id===3)for(let F=20;F<e+40;F+=16+Math.floor(d()*8)){for(const L of[-1,1]){if(d()>.45)continue;const k=this.makeCactus(d);k.position.set(L*(11+d()*5),0,F+d()*3),Gn(k),this.scene.add(k),this.rootMeshes.push(k)}if(d()>.7){const L=this.makeDesertRock(d);L.position.set((d()>.5?1:-1)*(10+d()*6),0,F),Gn(L),this.scene.add(L),this.rootMeshes.push(L)}}else if(t.id===4){const F=O?12:9;for(let L=20;L<e+40;L+=F+Math.floor(d()*4))for(const k of[-1,1]){if(B.some(z=>z.side===k&&Math.abs(z.z-L)<7)||d()>.35)continue;const b=this.makePalmTree(d);b.position.set(k*(11.5+d()*4.5),0,L+d()*3),Gn(b),this.scene.add(b),this.rootMeshes.push(b)}}this.addMilestoneArch(8,"#66BB6A","START"),this.addMilestoneArch(e-5,"#FFD54F","ZONE")}buildSky(t){var n;this.skyCanvas=document.createElement("canvas"),this.skyCanvas.width=pc,this.skyCanvas.height=pc,this.skyTexture=new ln(this.skyCanvas),this.skyTexture.colorSpace=Be,this.scene.background=this.skyTexture;const e=bc(0);this.skyNight=e,this.skyNightFx=kr(e),this.paintSky(e,t),this.applySkyLighting(e),(n=this.skyEffects)==null||n.setNight(e)}drawSkyCloud(t,e,n,s,r){t.save(),t.globalAlpha=r,t.fillStyle="#ffffff";const a=28*s;t.beginPath(),t.arc(e,n,a,0,Math.PI*2),t.arc(e+a*.9,n-a*.15,a*.82,0,Math.PI*2),t.arc(e+a*1.75,n+a*.05,a*.7,0,Math.PI*2),t.arc(e-a*.75,n+a*.08,a*.65,0,Math.PI*2),t.fill(),t.restore()}drawAurora(t,e,n,s){if(!(s<=0)){t.save(),t.globalAlpha=s;for(let r=0;r<3;r++){t.beginPath();for(let o=0;o<=e;o+=8){const l=n*(.18+r*.08)+Math.sin(o*.02+r*2)*22+Math.cos(o*.008)*14;o===0?t.moveTo(o,l):t.lineTo(o,l)}t.lineTo(e,n*.55),t.lineTo(0,n*.55),t.closePath();const a=t.createLinearGradient(0,0,e,n*.5);a.addColorStop(0,r===0?"rgba(0,230,118,0)":r===1?"rgba(0,229,255,0)":"rgba(224,64,251,0)"),a.addColorStop(.5,r===0?"rgba(0,230,118,0.35)":r===1?"rgba(0,229,255,0.28)":"rgba(224,64,251,0.22)"),a.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=a,t.fill()}t.restore()}}paintSky(t,e){var y;if(!this.skyCanvas)return;const n=this.skyCanvas.getContext("2d"),s=this.skyCanvas.width,r=this.skyCanvas.height,a=Ln(e.sky,"#64B5F6",.4),o=Ln(e.skyBottom,"#BBDEFB",.45),l=Ln("#FFECB3",e.fog,.25),c=Ln("#E3F2FD",e.ground,.2),h=Ln(a,"#0a0520",t),u=Ln(o,"#1a1040",t),f=Ln(l,"#120820",t),p=Ln(c,"#050510",t),v=n.createLinearGradient(0,0,0,r);if(v.addColorStop(0,h),v.addColorStop(.28,u),v.addColorStop(.55,f),v.addColorStop(.78,p),v.addColorStop(1,Ln(e.fog,"#0a0a12",t)),n.fillStyle=v,n.fillRect(0,0,s,r),t>.22&&t<.72){const g=Math.sin((t-.22)/.5*Math.PI)*.85,d=n.createLinearGradient(0,r*.45,0,r);d.addColorStop(0,"rgba(255,120,60,0)"),d.addColorStop(.45,`rgba(255,140,80,${.35*g})`),d.addColorStop(.75,`rgba(255,87,34,${.25*g})`),d.addColorStop(1,"rgba(80,20,60,0)"),n.fillStyle=d,n.fillRect(0,0,s,r)}if(t>.55){this.drawAurora(n,s,r,Math.min(1,(t-.55)*1.8));const g=n.createLinearGradient(s*.2,0,s*.8,r);g.addColorStop(0,"rgba(255,255,255,0)"),g.addColorStop(.45,`rgba(200,210,255,${.08*t})`),g.addColorStop(.55,`rgba(255,255,255,${.12*t})`),g.addColorStop(.65,`rgba(200,210,255,${.08*t})`),g.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=g,n.fillRect(0,0,s,r)}if(t<.75){const g=Math.max(0,1-Math.max(0,t-.15)*1.25),d=s*(.62+t*.12),S=r*(.28+t*.12),C=n.createRadialGradient(d,S,0,d,S,140);C.addColorStop(0,`rgba(255,255,240,${.98*g})`),C.addColorStop(.2,`rgba(255,240,160,${.7*g})`),C.addColorStop(.45,`rgba(255,200,100,${.35*g})`),C.addColorStop(1,"rgba(255,200,80,0)"),n.fillStyle=C,n.fillRect(0,0,s,r)}if(t>.48){const g=Math.min(1,(t-.48)*1.6),d=s*.78,S=r*.22;n.fillStyle=`rgba(240,240,255,${.9*g})`,n.beginPath(),n.arc(d,S,26,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(10,5,32,${.85*g})`,n.beginPath(),n.arc(d+10,S-6,22,0,Math.PI*2),n.fill()}if(t<.45){const g=.6*(1-t*1.35),d=[[.12,.28,1.1],[.42,.22,.95],[.68,.31,1.25],[.86,.24,.85],[.28,.38,.75],[.55,.42,.9]];for(const[S,C,E]of d)this.drawSkyCloud(n,S*s,C*r,E,g)}if(t>.42){const g=Math.min(1,(t-.42)*1.45),d=O?50:65;for(let S=0;S<d;S++){const C=S*97%1e3/1e3,E=S*53%720/1e3,B=.45+S*17%10/18;n.fillStyle=`rgba(255,255,255,${g*B})`;const F=S%7===0?2.2:S%4===0?1.5:.9;n.beginPath(),n.arc(C*s,E*r*.62,F,0,Math.PI*2),n.fill(),S%11===0&&g>.5&&(n.strokeStyle=`rgba(180,220,255,${g*.35})`,n.lineWidth=1,n.beginPath(),n.moveTo(C*s-4,E*r*.62),n.lineTo(C*s+4,E*r*.62),n.moveTo(C*s,E*r*.62-4),n.lineTo(C*s,E*r*.62+4),n.stroke())}}(y=this.skyEffects)==null||y.setNight(t),this.skyTexture&&(this.skyTexture.needsUpdate=!0)}applySkyLighting(t){const e=this.skyTheme,n=kr(t);let s=vc(t);O&&(s*=.72);const r=O?1.32:1.12,a=Ln(e.fog,e.id>=6?"#120828":"#050510",s);this.scene.fog instanceof Vr&&this.scene.fog.color.set(a);const o=new Yt(e.sky),l=new Yt(e.id>=6?"#1a0a40":"#223355"),c=o.clone().lerp(l,s),h=new Yt(e.ground),u=new Yt("#0a0a14"),f=h.clone().lerp(u,s*.85);if(this.hemiLight&&(this.hemiLight.color.copy(c),this.hemiLight.groundColor.copy(f),this.hemiLight.intensity=e.ambient*.92*(1-s*.38)*r),this.ambientLight){const p=new Yt("#ffffff").lerp(new Yt("#8899cc"),s*.55);this.ambientLight.color.copy(p);const v=gc(t);this.ambientLight.intensity=(e.ambient*.42*(1-s*.35)+v*.24)*r+(O?.18:.12)}if(this.sunLight){const p=new Yt(e.id>=3?"#FFF4E0":"#FFFBF5"),v=new Yt("#6688bb");this.sunLight.color.copy(p.lerp(v,s)),this.sunLight.intensity=e.sun*1.05*(1-s*.48)*r}if(this.fillLight){const p=new Yt(e.skyBottom||e.sky),v=new Yt(e.id>=4?"#004D40":"#1a237e");this.fillLight.color.copy(p.lerp(v,s*.75)),this.fillLight.intensity=e.ambient*.32*(.55+s*.45)*r}if(this.rimLight&&(this.rimLight.intensity=.22+(1-s)*.32,this.rimLight.color.set(Ln("#FFF8E8","#80DEEA",n*.85))),this.gameplayRimLight&&(this.gameplayRimLight.intensity=.28+(1-s)*.38),this.accentLight&&(this.accentLight.intensity=(e.id>=6?.55:.25)*(.25+n*.95)),this.roadNightLight&&(this.roadNightLight.intensity=n*(O?.45:.58),this.roadNightLight.color.set(Ln("#FFE082","#FFF3E0",1-n*.25))),this.roadFillLight){const p=O?.62:.52;this.roadFillLight.intensity=p*(1-s*.18)+n*.12,this.roadFillLight.color.set(Ln("#FFFBF5","#E8F4FF",s*.35))}if(this.roadMesh){const p=this.roadMesh.material,v=(O?.12:.08)+(1-s)*(O?.14:.1);p.emissiveIntensity=v+n*(O?.32:.55),p.emissive.set(this.roadAccent.primary).lerp(new Yt(this.roadAccent.secondary),n*.35),p.roughness=.82-s*.1-n*.08,p.metalness=.06+n*.14;const y=O?"#e8edf2":"#dfe6ec",g=O?"#c8d2dc":"#b0bcc8";p.color.set(y).lerp(new Yt(g),s*(O?.15:.22))}if(this.roadGlowMesh){const p=this.roadGlowMesh.material,v=O?.16:.24;p.opacity=n>.04?v+n*(O?.42:.58):0,p.color.set(this.roadAccent.primary).lerp(new Yt(this.roadAccent.secondary),n*.25),this.roadGlowMesh.visible=n>.04}}roadAccentForTheme(t){return t.id>=6?{primary:"#EA80FC",secondary:"#80DEEA",edge:"#E1BEE7"}:t.id>=5?{primary:"#FF7043",secondary:"#FFD54F",edge:"#FFCC80"}:t.id>=4?{primary:"#69F0AE",secondary:"#80DEEA",edge:"#B2FF59"}:t.id>=3?{primary:"#FFB74D",secondary:"#FFE082",edge:"#FFF8E1"}:t.id>=2?{primary:"#FFD54F",secondary:"#FFAB40",edge:"#FFFFFF"}:{primary:"#FFE082",secondary:"#FFF59D",edge:"#FFFFFF"}}rainWetForDistrict(t,e){return t.id===5?Math.min(1,.6+e*.4):t.id===4?Math.min(1,.38+e*.55):t.id===3?Math.min(1,.06+e*.12):t.id>=6?Math.min(1,.22+e*.5):Math.min(1,e*.58)}drawDistrictRoadSurface(t,e,n,s,r,a){const o=s.id,l=r/2,c=(u,f,p)=>{const v=t.createLinearGradient(0,0,r,0);v.addColorStop(0,u),v.addColorStop(.5,f),v.addColorStop(1,p),t.fillStyle=v,t.fillRect(0,0,r,r)};if(o===2){t.fillStyle="#5D4037",t.fillRect(0,0,r*.2,r),t.fillRect(r*.8,0,r*.2,r);for(let f=0;f<r;f+=10)for(let p=0;p<2;p++){const v=p===0?0:r*.8;for(let y=0;y<r*.2;y+=10)t.fillStyle=(y+f+p)%20===0?"#6D4C41":"#A1887F",t.fillRect(v+y,f,10,10)}const u=t.createLinearGradient(r*.2,0,r*.8,0);u.addColorStop(0,"#4a5560"),u.addColorStop(.5,"#6a7884"),u.addColorStop(1,"#4a5560"),t.fillStyle=u,t.fillRect(r*.2,0,r*.6,r)}else if(o===3){c("#C4A574","#4a4035","#C4A574"),t.fillStyle="rgba(212,165,116,0.55)",t.fillRect(0,0,r*.16,r),t.fillRect(r*.84,0,r*.16,r);for(let u=0;u<12;u++){const f=(u%2===0?0:r*.84)+u%3*8,p=u*37%(r-30);t.fillStyle="rgba(255,224,178,0.35)",t.beginPath(),t.ellipse(f+12,p,18,8,.2,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(62,47,35,0.35)";for(let u=0;u<8;u++){const f=r*.3+u*29%(r*.4),p=u*53%r;t.beginPath(),t.moveTo(f,p),t.lineTo(f+12,p+8),t.stroke()}}else if(o===4){c("#1a2820","#243830","#1a2820"),t.fillStyle="rgba(46,125,50,0.35)",t.fillRect(0,0,r*.14,r),t.fillRect(r*.86,0,r*.14,r);for(let f=0;f<40;f++)t.fillStyle=`rgba(${80+f%3*30},${120+f%4*20},70,0.2)`,t.fillRect(f*19%r,f*31%r,3,2);const u=t.createLinearGradient(l-r*.1,0,l+r*.1,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(80,160,140,0.14)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.fillRect(0,0,r,r)}else if(o===5){c("#2a3036","#3d454c","#2a3036");for(let u=0;u<6;u++){const f=r*.25+u*41%(r*.5),p=u*67%(r-40);t.fillStyle="#546E7A",t.fillRect(f,p,28,22),t.strokeStyle="rgba(255,255,255,0.12)";for(let v=0;v<4;v++)t.beginPath(),t.moveTo(f+v*7,p),t.lineTo(f+v*7+14,p+22),t.stroke()}t.fillStyle="rgba(20,20,25,0.2)";for(let u=0;u<10;u++)t.beginPath(),t.ellipse(u*43%r,u*61%r,10,6,0,0,Math.PI*2),t.fill()}else if(o>=6){c("#14101f","#1e1830","#14101f"),t.strokeStyle=a.primary,t.globalAlpha=.2,t.lineWidth=1;for(let u=0;u<r;u+=16)t.beginPath(),t.moveTo(u,0),t.lineTo(u,r),t.stroke();for(let u=0;u<r;u+=16)t.beginPath(),t.moveTo(0,u),t.lineTo(r,u),t.stroke();t.globalAlpha=1,n.fillStyle=a.primary,n.globalAlpha=.08;for(let u=0;u<r;u+=16)n.fillRect(u,0,1,r),n.fillRect(0,u,r,1);if(n.globalAlpha=1,o>=7){t.strokeStyle="rgba(229,57,53,0.25)";for(let u=0;u<6;u++){const f=r*.35+u*37%(r*.3),p=u*71%r;t.beginPath(),t.moveTo(f,p),t.lineTo(f+20,p+6),t.stroke()}}}else c("#3a4550","#5c6a78","#3a4550"),o===1&&(t.fillStyle="rgba(180,200,160,0.06)",t.fillRect(0,0,r*.12,r),t.fillRect(r*.88,0,r*.12,r));const h=n.createLinearGradient(l-r*.1,0,l+r*.1,0);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(.5,"rgba(120,180,220,0.1)"),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h,n.fillRect(l-r*.12,0,r*.24,r)}getRoadStreakTexture(){if(this.roadStreakTex)return this.roadStreakTex;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#000000",e.fillRect(0,0,128,128);for(const n of[0,1])for(let s=0;s<14;s++){const r=n===0?6+s%4*5:122-s%4*5,a=s*23%110,o=18+s%4*10,l=e.createLinearGradient(r,a,r,a+o);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.4,`rgba(255,255,255,${.06+s%3*.02})`),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(r-1,a,2,o)}return this.roadStreakTex=new ln(t),this.roadStreakTex.colorSpace=Be,this.roadStreakTex.wrapS=this.roadStreakTex.wrapT=Nn,this.roadStreakTex}getRoadRainTexture(){if(this.roadRainTex)return this.roadRainTex;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.strokeStyle="rgba(180,220,255,0.22)",e.lineWidth=1.2;for(let n=0;n<48;n++){const s=n*23%128,r=n*41%128;e.beginPath(),e.moveTo(s,r),e.lineTo(s-6,r+14),e.stroke()}e.fillStyle="rgba(150,200,255,0.06)";for(let n=0;n<20;n++)e.fillRect(n*31%120,n*47%120,2,8);return this.roadRainTex=new ln(t),this.roadRainTex.colorSpace=Be,this.roadRainTex.wrapS=this.roadRainTex.wrapT=Nn,this.roadRainTex}placeBoostPads(t,e){this.boostLaneTex||(this.boostLaneTex=ov());const n=O?72:56,s=O?1.28:1.48,r=O?2.75:3.2;let a=0;for(let o=58;o<e-24;o+=n){const l=Mc[a%Mc.length],c=Sc[a%Sc.length];a+=O?2:1;const h=new ie;h.position.set(l,0,o);const u=Math.random()*Math.PI*2,f=_(h,new un(s*.54,O?12:16),new ue({color:c,transparent:!0,opacity:.42,depthWrite:!1}),0,.033,0,!1);f.rotation.x=-Math.PI/2;const p=_(h,new Pe(s*.94,r*.96),new ue({map:this.boostLaneTex,color:c,transparent:!0,opacity:.88,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),0,.036,0,!1);p.rotation.x=-Math.PI/2,p.rotation.z=Math.PI,p.userData.isBoostDecal=!0,this.scene.add(h),this.rootMeshes.push(h),this.boostPads.push({group:h,x:l,z:o,flash:0,cooldown:0,underlay:f,decal:p,pulsePhase:u,accent:c})}}tryTriggerBoostPad(t,e){for(const n of this.boostPads)if(!(n.cooldown>0)&&!(Math.abs(e-n.z)>1.35)&&!(Math.abs(t-n.x)>.78))return n.flash=1,n.cooldown=1.1,!0;return!1}getSkyNight(){return Math.min(1,this.skyNight+this.blackoutBoost)}getNightFx(){return Math.min(1,this.skyNightFx+this.blackoutBoost*.85)}getGameplayNight(){return gc(Math.min(1,this.skyNight+this.blackoutBoost*.45))}setBlackout(t){this.blackoutBoost=Math.max(0,Math.min(.75,t))}updateSkyCycle(t,e){var s;const n=bc(t);this.skyNight=n,this.skyNightFx=kr(n),(s=this.skyEffects)==null||s.setNight(n),this.applySkyLighting(n),this.skyTick+=e,!(this.skyTick<Qg)&&(this.skyTick=0,this.paintSky(n,this.skyTheme))}makeRoadTextures(t){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d"),r=document.createElement("canvas");r.width=256,r.height=256;const a=r.getContext("2d");a.fillStyle="#000000",a.fillRect(0,0,256,256);const o=document.createElement("canvas");o.width=256,o.height=256;const l=o.getContext("2d");l.fillStyle="#000000",l.fillRect(0,0,256,256);const c=this.roadAccentForTheme(t);this.drawDistrictRoadSurface(s,a,l,t,256,c);for(let g=0;g<256*2;g++){const d=g*47%256,S=g*83%256,C=(d*17+S*31)%100/100;s.fillStyle=C>.55?"rgba(255,255,255,0.015)":"rgba(0,0,0,0.025)",s.fillRect(d,S,1,1)}s.fillStyle="rgba(0,0,0,0.11)";for(let g=0;g<18;g++){const d=g*37%216,S=g*59%226;s.beginPath(),s.ellipse(d+20,S+15,14+g%5,8+g%4,g*.4,0,Math.PI*2),s.fill()}s.fillStyle="rgba(90,110,130,0.06)";for(let g=0;g<8;g++)s.fillRect(g*61%206,g*73%166,36,70+g%3*20);const h=[Math.floor(256*.04),Math.floor(256*.92)],u=[256*.2,256*.4,256*.6,256*.8],f=(g,d,S,C,E,B)=>{B&&g.setLineDash(B);for(const F of[C*2.2,C*1.4,C])g.strokeStyle=S,g.globalAlpha=E*(F===C?1:F===C*1.4?.45:.2),g.lineWidth=F,g.lineCap="round",g.beginPath(),g.moveTo(d,0),g.lineTo(d,256),g.stroke();g.globalAlpha=1,B&&g.setLineDash([])};s.strokeStyle="rgba(255,255,255,0.92)",s.lineWidth=Math.max(3,256/64),s.beginPath(),s.moveTo(h[0],0),s.lineTo(h[0],256),s.stroke(),f(a,h[0],c.edge,Math.max(3,256/64),.95),f(l,h[0],"#ffffff",Math.max(5,256/42),.35),s.beginPath(),s.moveTo(h[1],0),s.lineTo(h[1],256),s.stroke(),f(a,h[1],c.edge,Math.max(3,256/64),.95),f(l,h[1],"#ffffff",Math.max(5,256/42),.35),s.strokeStyle="rgba(255,255,255,0.38)",s.lineWidth=Math.max(2,256/88),s.setLineDash([256*.035,256*.038]);for(const g of u)s.beginPath(),s.moveTo(g,0),s.lineTo(g,256),s.stroke(),f(a,g,"rgba(255,255,255,0.55)",Math.max(2,256/88),.55,[256*.035,256*.038]),f(l,g,c.edge,Math.max(3,256/72),.22,[256*.035,256*.038]);s.setLineDash([]);for(let g=0;g<4;g++){const d=g*64+16;for(const S of h){const C=S<128?1:-1,E=S+C*Math.max(8,256/28);s.fillStyle="rgba(255,255,255,0.72)";for(let B=0;B<4;B++){const F=d+B*14.08,L=256*.022,k=256*.055,P=C>0?E:E-L;s.fillRect(P,F,L,k),a.fillStyle="rgba(255,255,255,0.5)",a.fillRect(P-1,F-1,L+2,k+2),l.fillStyle="rgba(255,255,255,0.22)",l.fillRect(P-2,F-2,L+4,k+4)}}}s.fillStyle="rgba(255,213,79,0.42)";for(let g=0;g<16;g++)s.fillRect(h[0]+4,g*256/16+4,256*.012,256*.04),s.fillRect(h[1]-8,g*256/16+10,256*.012,256*.04),a.fillStyle="rgba(255,193,7,0.65)",a.fillRect(h[0]+3,g*256/16+3,256*.014,256*.044),a.fillRect(h[1]-9,g*256/16+9,256*.014,256*.044);for(let g=0;g<5;g++){const d=30.72+g*256/6,S=g*97%216;s.fillStyle="#3a4550",s.beginPath(),s.arc(d,S+20,256*.022,0,Math.PI*2),s.fill()}const p=new ln(n);p.colorSpace=Be;const v=new ln(r);v.colorSpace=Be;const y=new ln(o);return y.colorSpace=Be,{color:p,emissive:v,glow:y}}makeCurbTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle="#B0BEC5",e.fillRect(0,0,64,64),e.fillStyle="rgba(255,255,255,0.12)",e.fillRect(0,0,64,3),e.fillStyle="rgba(0,0,0,0.08)";for(let s=0;s<8;s++)e.fillRect(0,s*8+4,64,2);e.fillStyle="rgba(0,0,0,0.05)";for(let s=0;s<12;s++)e.fillRect(s*11%58,s*17%58,6,4);const n=new ln(t);return n.colorSpace=Be,n}getLightPoolTexture(){if(this.lightPoolTexture)return this.lightPoolTexture;const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,"rgba(255, 224, 178, 0.9)"),n.addColorStop(.25,"rgba(255, 204, 128, 0.45)"),n.addColorStop(.55,"rgba(255, 183, 77, 0.12)"),n.addColorStop(1,"rgba(255, 183, 77, 0)"),e.fillStyle=n,e.fillRect(0,0,128,128),this.lightPoolTexture=new ln(t),this.lightPoolTexture.colorSpace=Be,this.lightPoolTexture}placeStreetLights(t,e){const n=O?32:38;let s=1;for(let r=22;r<e-12;r+=n){const a=this.makeStreetLamp(t);a.position.set(s*4.18,0,r),a.rotation.y=s>0?0:Math.PI,Gn(a),this.scene.add(a),this.rootMeshes.push(a),this.animProps.push({obj:a,worldZ:r,kind:"flicker",speed:2.2+r*17%80/40,baseY:0,phase:r*.13,bulb:a.userData.flickerBulb,lightPool:a.userData.lightPool}),s*=-1}}makeGrassTexture(t){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle=t.ground,n.fillRect(0,0,256,256);for(let r=0;r<256;r+=2)for(let a=0;a<256;a+=2){const o=(a*13+r*7)%100/100;n.fillStyle=o>.5?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)",n.fillRect(a,r,2,2)}for(let r=0;r<48;r++)n.fillStyle=`rgba(0,0,0,${.03+r%4*.015})`,n.beginPath(),n.ellipse(r*19%256,r*41%256,6+r%5,4+r%3,r*.3,0,Math.PI*2),n.fill();for(let r=0;r<200;r++){const a=r*37%256,o=r*53%256;n.strokeStyle=r%2===0?"rgba(46,125,50,0.15)":"rgba(129,199,132,0.12)",n.lineWidth=1,n.beginPath(),n.moveTo(a,o),n.lineTo(a+r%3-1,o-3-r%4),n.stroke()}const s=new ln(e);return s.colorSpace=Be,s}makeSidewalkTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#B0BEC5",e.fillRect(0,0,128,128),e.strokeStyle="rgba(255,255,255,0.28)",e.lineWidth=1;for(let s=0;s<128;s+=16)for(let r=0;r<128;r+=16)e.strokeRect(r+.5,s+.5,15,15),(r+s)%32===0&&(e.fillStyle="rgba(255,255,255,0.06)",e.fillRect(r+2,s+2,12,12));e.fillStyle="rgba(0,0,0,0.05)";for(let s=0;s<14;s++)e.fillRect(s*19%118,s*27%118,7,5);e.fillStyle="rgba(255,255,255,0.04)",e.fillRect(0,0,128,2);const n=new ln(t);return n.colorSpace=Be,n}makeCloud(t){const e=new ie,n=D("#FFFFFF",{transparent:!0,opacity:.92,roughness:1}),s=O?4:6;for(let r=0;r<s;r++)_(e,new Kt(1.1+t()*1.4,10,8),n,(r-s/2)*1.05,.15+t()*.55,(t()-.5)*.9,!1).scale.set(1,.5+t()*.15,1);return _(e,new Kt(1.8,8,8),D("#FFFFFF",{transparent:!0,opacity:.35}),0,-.2,0,!1).scale.set(2.2,.3,1.4),e}addWindow(t,e,n,s,r,a,o,l){const c=D("#ECEFF1",{roughness:.7}),h=D(o?l.id>=4?"#E1BEE7":"#FFF9C4":"#546E7A",{emissive:o?l.id>=4?"#CE93D8":"#FFD54F":"#263238",emissiveIntensity:o?l.id>=4?.95:.45:.05,metalness:.2,roughness:.25});_(t,new W(r+.08,a+.08,.05),c,e,n,s),_(t,new W(r,a,.04),h,e,n,s+.02),_(t,new W(r+.14,.06,.08),D("#455A64",{roughness:.8}),e,n-a/2-.04,s+.03),o&&a>.35&&(_(t,new W(.03,a*.85,.02),c,e,n,s+.04),_(t,new W(r*.85,.03,.02),c,e,n,s+.04))}addFacadeWindows(t,e,n,s,r,a,o){const l=e>0?-n/2-.03:n/2+.03,c=Math.max(2,Math.floor(n/1.85)),h=Math.max(2,Math.floor((s-2)/1.75)),u=Math.min(.62,(n-.6)/c-.12),f=Math.min(.82,(s-2.2)/h-.12);for(let p=0;p<h;p++)for(let v=0;v<c;v++){const y=1.35+p*(f+.18),g=-r/2+.55+v*(u+.18)+u/2;if(p===0&&v===Math.floor(c/2)&&a.id<=2)continue;const d=o()>(a.id>=3?.35:.22);this.addWindow(t,l,y,g,u,f,d,a)}}makeBuilding(t,e,n){const s=new ie,r=t.id===3?"desert":t.id===4?"jungle":t.id>=6?"neon":t.id>=5?"industrial":t.id>=2?"downtown":"suburban",a=r==="desert"?4+e()*3:r==="jungle"?5+e()*5:r==="downtown"?10+e()*14:r==="suburban"?5+e()*4:7+e()*9,o=r==="downtown"?5+e()*3:r==="desert"?4+e()*2.5:4.5+e()*3.5,l=5+e()*4,c=t.buildingHue+e()*.08,h=new Yt().setHSL(c,r==="suburban"?.42:.32,r==="neon"?.22:.38+t.id*.03),u=new Yt().setHSL(c,.25,r==="suburban"?.78:.55),f=r==="desert"||r==="jungle"||r==="suburban"?yc(c):iv(c);f.repeat.set(o/2,a/2);const p=new je({map:f,color:r==="desert"?"#D7CCC8":r==="jungle"?"#8D6E63":h,roughness:r==="desert"?.95:.88}),v=D(r==="desert"?"#BF360C":r==="jungle"?"#33691E":u.getStyle(),{roughness:.75}),y=sv(r==="suburban"?"#BF360C":r==="desert"?"#A1887F":r==="jungle"?"#558B2F":"#455A64");y.repeat.set(o/2,1.5);const g=new je({map:y,color:r==="neon"?"#311B92":r==="suburban"?"#BF360C":r==="desert"?"#A1887F":r==="jungle"?"#558B2F":"#455A64",roughness:.85,emissive:r==="neon"?"#7B1FA2":"#000000",emissiveIntensity:r==="neon"?.25:0});if(_(s,new W(o,a,l),p,0,a/2,0),_(s,new W(o+.16,.28,l+.16),D(r==="desert"?"#BCAAA4":r==="jungle"?"#3E2723":"#37474F",{roughness:.92}),0,.14,0),_(s,new W(o+.2,.1,l+.2),v,0,.32,0),r==="suburban"){const S=_(s,new W(o/2+.1,.18,l+.35),g,-o/4,a+.1,0);S.rotation.z=.42;const C=_(s,new W(o/2+.1,.18,l+.35),g,o/4,a+.1,0);C.rotation.z=-.42,_(s,new W(.45,1.1,.45),D("#78909C",{roughness:.8}),o*.28,a+.85,l*.15),_(s,new W(1.5,.1,.85),v,n>0?-o/2-.55:o/2+.55,.35,.2);for(let E=0;E<3;E++)_(s,new W(.85,.12,.55),D("#78909C",{roughness:.85}),n>0?-o/2-.65:o/2+.65,.06+E*.12,.15-E*.05)}else if(r==="desert")_(s,new W(o+.15,.12,l+.15),g,0,a+.06,0),_(s,new W(o*.35,.55,.35),D("#FFCC80",{roughness:.9}),0,a+.35,0),e()>.5&&_(s,new Ft(.08,.12,.6,6),D("#8D6E63"),o*.35,a+.65,l*.2);else if(r==="jungle"){_(s,new W(o+.25,.35,l+.25),D("#5D4037",{roughness:.9}),0,a+.5,0),_(s,new W(o+.4,.22,l+.4),g,0,a+.85,0);for(let S=0;S<4;S++){const C=S/4*Math.PI*2;_(s,new Ft(.06,.08,1.2,6),D("#6D4C41",{roughness:.95}),Math.cos(C)*(o*.35),.6,Math.sin(C)*(l*.35))}_(s,new W(.12,a*.7,.08),D("#2E7D32",{emissive:"#1B5E20",emissiveIntensity:.15}),n>0?-o/2-.12:o/2+.12,a*.45,0)}else if(r==="downtown"){_(s,new W(o+.2,.35,l+.2),D("#37474F"),0,a+.18,0),_(s,new W(1.2,.55,1),D("#546E7A",{metalness:.35}),o*.25,a+.55,0);for(let S=1;S<4;S++)_(s,new W(o+.06,.08,l+.06),v,0,S*(a/4),0)}else if(r==="industrial"){_(s,new W(o+.15,.28,l+.15),D("#263238"),0,a+.14,0);for(let S=0;S<5;S++)_(s,new W(o+.02,.04,.08),D("#37474F"),0,1.2+S*1.4,l/2+.05)}else _(s,new W(o+.1,.2,l+.1),g,0,a+.1,0),_(s,new W(o*.7,.12,.08),D("#E040FB",{emissive:"#E040FB",emissiveIntensity:1.1}),0,a*.55,l/2+.06);const d=n>0?-o/2-.05:o/2+.05;if(_(s,new W(.1,1.75,1.05),D("#3E2723"),d,.88,.1),_(s,new W(.08,1.65,.95),D("#5D4037",{roughness:.9}),d+(n>0?-.03:.03),.88,.12),_(s,new Kt(.06,8,8),D("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.5}),d+(n>0?-.02:.02),.95,.62),this.addFacadeWindows(s,n,o,a,l,t,e),!O){const S=Math.max(1,Math.floor(l/1.8));for(let C=0;C<S;C++){const E=-l/2+.8+C*(l/S),B=n>0?o/2+.03:-o/2-.03;for(const F of[1.8,3.2,4.8])F>a-.8||this.addWindow(s,B,F,E,.5,.68,e()>.4,t)}}if(r==="suburban"&&e()>.4){const S=n>0?-o/2-1.1:o/2+1.1;_(s,new W(1.6,.9,.12),D("#A5D6A7",{roughness:.9}),S,.45,l*.2),_(s,new W(1.6,.9,.12),D("#A5D6A7",{roughness:.9}),S,.45,-l*.2)}if(t.id<=2&&e()>.55){const S=n>0?-o/2-.8:o/2+.8;_(s,new W(.08,.65,1.8),D("#8D6E63"),S,.33,0),_(s,new W(.06,.55,1.6),D("#A5D6A7",{roughness:.95}),S+(n>0?-.12:.12),.55,0)}return s.rotation.y=0,s}makeTree(t){const e=new ie,n=1.4+t()*.5,s=rv();s.repeat.set(1,n/2);const r=new je({map:s,color:"#5D4037",roughness:.95});_(e,new Ft(.16,.28,n,8),r,0,n/2,0),_(e,new Kt(.16,8,8),D("#4E342E"),0,n+.15,0);for(let l=0;l<3;l++){const c=l/3*Math.PI*2;_(e,new W(.12,.08,.35),D("#4E342E"),Math.cos(c)*.2,.08,Math.sin(c)*.2)}const a=av(),o=["#43A047","#66BB6A","#2E7D32","#81C784"];for(let l=0;l<4;l++)_(e,new Dn(1.4-l*.2,2-l*.22,8),new je({map:a,color:o[l%o.length],emissive:"#1B5E20",emissiveIntensity:.08,roughness:.95}),(t()-.5)*.15,n+.85+l*1.1,(t()-.5)*.15).scale.set(1.08-l*.07,1,1.08-l*.07);if(!O){for(let l=0;l<2;l++)_(e,new Kt(.55+l*.15,8,8),new je({map:a,color:"#388E3C",transparent:!0,opacity:.35,roughness:1}),(l-.5)*.4,.35,(t()-.5)*.5);_(e,new Kt(.07,6,6),D("#FF5252",{emissive:"#D50000",emissiveIntensity:.3}),.35,n+1.1,.25)}return e}makeCactus(t){const e=new ie,n=D("#558B2F",{roughness:.92}),s=D("#33691E",{roughness:.95}),r=1.6+t()*1.4;_(e,new Ft(.22,.28,r,8),n,0,r/2,0);const a=r*(.45+t()*.2),o=r*(.45+t()*.15),l=t()>.5?1:-1;if(_(e,new Ft(.14,.18,a*.55,6),n,l*.28,o,0),_(e,new Ft(.12,.14,a,6),n,l*.42,o+a*.35,0),t()>.4){const c=-l;_(e,new Ft(.12,.16,a*.5,6),s,c*.24,r*.35,0),_(e,new Ft(.1,.12,a*.75,6),s,c*.36,r*.35+a*.3,0)}return e}makePalmTree(t){const e=new ie,n=2.8+t()*1.8,s=D("#6D4C41",{roughness:.95});_(e,new Ft(.18,.32,n,8),s,0,n/2,0);for(let o=0;o<4;o++){const l=.4+o*(n/4);_(e,new En(.22,.04,6,10),D("#5D4037"),0,l,0)}const r=new je({color:"#2E7D32",emissive:"#1B5E20",emissiveIntensity:.12,roughness:.9,side:We}),a=O?5:7;for(let o=0;o<a;o++){const l=o/a*Math.PI*2+t()*.2,c=_(e,new W(.08,.04,2.2+t()*.6),r,0,n+.15,0);c.rotation.y=l,c.rotation.x=-.55-t()*.15,c.position.x=Math.cos(l)*.15,c.position.z=Math.sin(l)*.15}return!O&&t()>.6&&_(e,new Kt(.12,6,6),D("#FF7043",{emissive:"#E64A19",emissiveIntensity:.25}),.2,n*.6,.15),e}makeDesertRock(t){const e=new ie,n=D("#A1887F",{roughness:.98}),s=.8+t()*1.2,r=.5+t()*.9,a=_(e,new W(s,r,s*(.7+t()*.4)),n,0,r/2,0);if(a.rotation.y=t()*Math.PI,a.rotation.z=(t()-.5)*.25,!O&&t()>.5){const o=s*.55,l=r*.45;_(e,new W(o,l,o),D("#8D6E63",{roughness:.98}),s*.35,l/2,s*.2)}return e}makeStreetLamp(t){const e=new ie;e.userData.flicker=!0;const n="#FFCC80",s=D("#546E7A",{metalness:.72,roughness:.38}),r=D("#455A64",{metalness:.65,roughness:.42});_(e,new Ft(.16,.18,.07,10),s,0,.035,0),_(e,new Ft(.06,.09,.1,8),s,0,.12,0),_(e,new Ft(.05,.075,4.15,10),s,0,2.14,0);const a=new ie;a.position.set(0,4.18,0),e.add(a),_(a,new W(.95,.065,.065),s,-.47,0,0),_(a,new W(.06,.32,.06),s,-.92,-.12,0);const o=-.92;_(a,new Ft(.2,.17,.1,10),r,o,-.28,0),_(a,new Ft(.17,.2,.06,10,1,!0),D("#FFF8E1",{emissive:n,emissiveIntensity:.85,transparent:!0,opacity:.92,roughness:.2,metalness:.05}),o,-.36,0);const l=_(a,new Kt(.07,8,8),D("#FFFDE7",{emissive:"#FFE0B2",emissiveIntensity:1.1}),o,-.38,0);l.userData.isBulb=!0,e.userData.flickerBulb=l;const c=O?3.2:4.2,h=_(e,new Pe(c,c*1.55),new ue({map:this.getLightPoolTexture(),transparent:!0,opacity:.42,blending:ke,depthWrite:!1,color:n}),-2.4,.028,0,!1);return h.rotation.x=-Math.PI/2,e.userData.lightPool=h,e}makeMailbox(){const t=new ie;_(t,new Ft(.05,.06,.7,8),D("#78909C",{metalness:.7}),0,.35,0),_(t,new W(.55,.75,.42),D("#1565C0",{roughness:.55}),0,.82,0),_(t,new W(.58,.1,.44),D("#0D47A1"),0,1.22,0),_(t,new W(.12,.18,.06),D("#FFD54F",{emissive:"#FFC107",emissiveIntensity:.45}),.2,1.05,.24);const e=_(t,new W(.22,.14,.03),D("#E53935",{emissive:"#FF1744",emissiveIntensity:.35}),.28,1.18,.18);return e.rotation.z=-.55,t}makeAlienCrash(){const t=new ie;_(t,new Ft(.9,1.1,.15,12),D("#607D8B",{metalness:.7,emissive:"#00E676",emissiveIntensity:.3}),0,.08,0),_(t,new Kt(.55,10,8,0,Math.PI*2,0,Math.PI/2),D("#80DEEA",{transparent:!0,opacity:.6}),0,.15,0);const e=_(t,new un(1.1,16),D("#76FF03",{emissive:"#33691E",emissiveIntensity:.5,transparent:!0,opacity:.65}),0,.02,0,!1);e.rotation.x=-Math.PI/2;for(let n=0;n<4;n++){const s=n/4*Math.PI*2;_(t,new W(.25,.08,.25),D("#CFD8DC",{metalness:.5}),Math.cos(s)*.9,.04,Math.sin(s)*.9)}return t}addMilestoneArch(t,e,n){const s=new ie;s.position.set(0,0,t);for(const c of[-4.5,4.5])_(s,new Ft(.2,.22,5,10),D("#ECEFF1"),c,2.5,0);_(s,new W(10,.35,.35),D(e,{emissive:e,emissiveIntensity:.35}),0,4.8,0);const r=document.createElement("canvas");r.width=256,r.height=64;const a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,256,64),a.fillStyle="#000",a.font="bold 28px Segoe UI",a.textAlign="center",a.fillText(n,128,42);const o=new ln(r),l=new Ne(new Pe(3.5,.9),new ue({map:o}));l.position.set(0,5.5,0),s.add(l),this.scene.add(s),this.rootMeshes.push(s)}setupLighting(t,e){this.hemiLight=new od(t.sky,t.ground,t.ambient*1.05),this.hemiLight.name="hemi",this.scene.add(this.hemiLight),this.ambientLight=new Wh(16777215,t.ambient*.48),this.ambientLight.name="ambient",this.scene.add(this.ambientLight),this.sunLight=new fs(16775408,t.sun*1.12),this.sunLight.position.set(20,45,-25),this.sunLight.castShadow=!1,this.sunLight.name="sun",this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.fillLight=new fs(t.skyBottom||t.sky,t.ambient*.22),this.fillLight.position.set(-18,22,12),this.fillLight.name="fill",this.scene.add(this.fillLight),this.rimLight=new fs("#FFF8E8",.38),this.rimLight.position.set(0,14,-28),this.rimLight.name="rim",this.scene.add(this.rimLight),t.id>=5&&(this.accentLight=new xs(t.id>=6?"#7C4DFF":"#FF7043",.35,70,1.6),this.accentLight.position.set(0,10,30),this.accentLight.name="accent",this.scene.add(this.accentLight)),this.roadNightLight=new xs("#FFE082",0,O?24:30,2),this.roadNightLight.name="roadNight",this.scene.add(this.roadNightLight),this.roadFillLight=new xs("#FFFBF5",O?.58:.48,O?36:44,1.4),this.roadFillLight.name="roadFill",this.scene.add(this.roadFillLight),this.gameplayRimLight=new fs("#E8F4FF",.42),this.gameplayRimLight.name="gameplayRim",this.scene.add(this.gameplayRimLight),this.scene.add(this.gameplayRimLight.target)}setPlayerZ(t,e){if(this.playerZ=t,this.cullTimer+=e,this.cullTimer<(O?.12:.08))return;this.cullTimer=0;const n=t-Jg,s=t+Kg;for(const r of this.rootMeshes){if(r.userData.isTerrain)continue;const a=r.position.z;r.visible=a>=n&&a<=s}}followSun(t,e){this.sunLight&&(this.sunLight.position.set(t+18,42,e-22),this.sunLight.target.position.set(t*.3,0,e+35),this.sunLight.target.updateMatrixWorld(),this.fillLight&&this.fillLight.position.set(t-16,24,e+8),this.rimLight&&this.rimLight.position.set(t*.5,16,e-26),this.accentLight&&this.accentLight.position.set(t,11,e+28),this.roadNightLight&&this.roadNightLight.position.set(t,5.5,e+3),this.roadFillLight&&this.roadFillLight.position.set(t*.12,O?8:9,e+14),this.gameplayRimLight&&(this.gameplayRimLight.position.set(t,7,e-16),this.gameplayRimLight.target.position.set(t*.2,.8,e+24),this.gameplayRimLight.target.updateMatrixWorld()))}playSpectacle(t,e){var n;(n=this.skyEffects)==null||n.playSpectacle(t,e)}update(t,e=this.playerZ,n=.016,s){var y,g;s&&(this.roadFx=s),this.playerZ=e,this.wetFactor=this.rainWetForDistrict(this.skyTheme,this.skyNight),this.updateSkyCycle(t,n),(y=this.skyEffects)==null||y.update(t,n,e);const r=t*.12,a=this.roadFx.baseSpeed>0?this.roadFx.speed/this.roadFx.baseSpeed:1,o=this.roadFx.turbo,l=r*(o?2.4+a*.35:1);this.roadTexture&&(this.roadTexture.offset.y=-r),this.roadEmissiveTex&&(this.roadEmissiveTex.offset.y=-r),this.roadGlowTex&&(this.roadGlowTex.offset.y=-r),this.roadStreakTex&&(this.roadStreakTex.offset.y=-l),this.roadRainTex&&(this.roadRainTex.offset.y=-t*.85);const c=this.skyNight,h=this.skyNightFx;let u=vc(c);O&&(u*=.72);const f=1+this.wetFactor*(this.wetFactor>.45?1:.65);if(this.roadMesh){const d=this.roadMesh.material,C=(O?.12:.1)+(1-u)*(O?.14:.12)+h*(O?.32:.55),E=1+Math.sin(t*2.4)*.04*h;d.emissiveIntensity=C*E*(o?1.12:1),d.roughness=.82-u*.1-this.wetFactor*.12,d.metalness=.06+h*.14+this.wetFactor*.14;const B=O?"#e8edf2":"#dfe6ec",F=O?"#c8d2dc":"#b0bcc8";d.color.set(B).lerp(new Yt(F),u*(O?.15:.22))}if(this.roadGlowMesh){const d=this.roadGlowMesh.material,S=(O?.14:.18)*(1-u*.35),C=(O?.16:.24)+h*(O?.42:.58),E=this.roadFx.combatIntensity??0,B=this.roadFx.shootPulse??0,F=1+Math.sin(t*3.1+.5)*.06*Math.max(h,.25);d.opacity=Math.max(S,h>.04?C*F*f*(o?1.15:1)*(1+E*.35+B*.5):0),this.roadGlowMesh.visible=d.opacity>.02,o?d.color.set(this.roadAccent.secondary):B>.2?d.color.set(this.roadAccent.primary).lerp(new Yt("#00E5FF"),B):E>.3&&d.color.set(this.roadAccent.secondary)}if(this.roadStreakMesh){const d=this.roadStreakMesh.material,S=o?.12+(a-1)*.08:0;d.opacity+=(S-d.opacity)*Math.min(1,n*10),d.visible=d.opacity>.01,o&&d.color.set(this.roadAccent.secondary)}if(this.roadRainMesh){const d=this.roadRainMesh.material;d.opacity=this.wetFactor*(O?.16:.24),d.visible=this.wetFactor>.18}const p=O?40:54;for(const d of this.boostPads){const S=Math.abs(d.z-e)<p;if(d.group.visible=S,!S)continue;d.cooldown=Math.max(0,d.cooldown-n),d.flash=Math.max(0,d.flash-n*2.4);const C=t+d.pulsePhase,E=.5+.5*Math.sin(C*2.6),B=.5+.5*Math.sin(C*5.2),F=d.flash,L=d.underlay.material;L.opacity=.34+E*.18+F*.22;const k=new Yt(d.accent),P=k.clone().multiplyScalar(.72);L.color.copy(P).lerp(k,.35+E*.45+F*.2);const b=d.decal.material;b.opacity=.76+B*.12+F*.1,b.map&&(b.map.offset.y=(t*.22+d.pulsePhase*.05)%1);const z=1+E*.035+F*.07;d.group.scale.set(z,1,z)}if(!O&&((g=this.rootMeshes[0])!=null&&g.userData.isTerrain)){const S=this.rootMeshes[0].material;S.map&&(S.map.offset.y=-e*.02)}const v=O?38:55;for(const d of this.animProps)if(!(Math.abs(d.worldZ-e)>v))switch(d.kind){case"bob":d.obj.position.y=d.baseY+Math.sin(t*d.speed+d.phase)*.06;break;case"spin":d.obj.rotation.y=t*d.speed;break;case"cloud":d.obj.position.x+=Math.sin(t*.1+d.phase)*.008,d.obj.position.y=d.baseY+Math.sin(t*d.speed+d.phase)*.4;break;case"flicker":{const S=.72+Math.sin(t*d.speed+d.phase)*.08+Math.sin(t*d.speed*3.1+d.phase)*.04;if(d.bulb){const C=d.bulb.material;C.emissiveIntensity=S*(.35+this.skyNight*.95)}if(d.lightPool){const C=d.lightPool.material;C.opacity=this.skyNight*(.42+Math.sin(t*d.speed*.6+d.phase)*.04),d.lightPool.visible=this.skyNight>.1}break}}}clear(){var t;(t=this.skyEffects)==null||t.dispose(),this.skyEffects=null;for(const e of this.rootMeshes)this.scene.remove(e),wn(e);this.rootMeshes=[],this.animProps=[],this.boostPads=[],this.boostLaneTex&&(this.boostLaneTex.dispose(),this.boostLaneTex=null),this.roadTexture&&this.roadTexture.dispose(),this.roadEmissiveTex&&(this.roadEmissiveTex.dispose(),this.roadEmissiveTex=null),this.roadGlowTex&&(this.roadGlowTex.dispose(),this.roadGlowTex=null),this.roadStreakTex&&(this.roadStreakTex.dispose(),this.roadStreakTex=null),this.roadRainTex&&(this.roadRainTex.dispose(),this.roadRainTex=null),this.lightPoolTexture&&(this.lightPoolTexture.dispose(),this.lightPoolTexture=null),this.roadMesh=null,this.roadGlowMesh=null,this.roadStreakMesh=null,this.roadRainMesh=null,this.skyTexture&&(this.skyTexture.dispose(),this.skyTexture=null),this.skyCanvas=null,this.skyPhase=-1;for(const e of["hemi","ambient","sun","fill","rim","accent","roadNight","neon"]){const n=this.scene.getObjectByName(e);n&&this.scene.remove(n)}this.accentLight=null,this.roadNightLight=null,this.roadFillLight=null,this.gameplayRimLight=null}}function Wv(i){let t=i;return()=>(t=(t*16807+0)%2147483647,(t-1)/2147483646)}const Jh={core:"#FF9800",mid:"#FFB74D",glow:"#FFD54F",particle:"#FFF8E1",shell:"#FF6F00",ribbon:"#FFC107"},Xv={core:"#FFFDE7",mid:"#FFF9C4",glow:"#FFD54F",particle:"#FFFFFF",shell:"#FFEB3B",ribbon:"#00E5FF"},wc=O?8:12,qv=O?4:6;function oi(i,t,e=1){return D(i,{emissive:i,emissiveIntensity:t,transparent:e<1,opacity:e,roughness:.18,metalness:.06})}function Ec(i,t){return new ue({color:i,transparent:!0,opacity:t,depthWrite:!1,blending:ke})}function Yv(i){return i>=7?{core:"#FF5252",mid:"#FF1744",glow:"#FF8A80",particle:"#FFCDD2",shell:"#D50000",ribbon:"#FFD54F"}:i>=6?{core:"#E1BEE7",mid:"#AB47BC",glow:"#EA80FC",particle:"#F3E5F5",shell:"#7B1FA2",ribbon:"#FFD54F"}:i===5?{core:"#448AFF",mid:"#2979FF",glow:"#82B1FF",particle:"#E3F2FD",shell:"#1565C0",ribbon:"#FFD54F"}:i===4?{core:"#66BB6A",mid:"#43A047",glow:"#A5D6A7",particle:"#E8F5E9",shell:"#2E7D32",ribbon:"#FFD54F"}:i===3?{core:"#FFB74D",mid:"#FF9800",glow:"#FFE082",particle:"#FFF8E1",shell:"#F57C00",ribbon:"#00E5FF"}:Jh}function $v(i,t,e,n){const s=new ie;s.userData.orbit=e;for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=_(s,new Kt(.035+r%2*.012,5,5),oi(t,1.2,.9),Math.cos(a)*e,Math.sin(r*1.5)*.06,Math.sin(a)*e,!1);o.userData.angle=a,o.userData.orbit=e,o.userData.wobble=r*1.1}return i.add(s),s}function jv(i,t,e,n){const s=new ie;s.position.y=n,_(s,new W(.34*t,.05*t,.36*t),oi(e.ribbon,.85),0,0,0,!1),_(s,new W(.05*t,.28*t,.36*t),oi(e.ribbon,.85),0,.02*t,0,!1);for(const r of[-1,1])_(s,new Kt(.07*t,6,6),oi(e.ribbon,1),r*.08*t,.16*t,.06*t,!1);return _(s,new W(.14*t,.04*t,.02*t),D("#FFFDE7",{emissive:"#FFFFFF",emissiveIntensity:.35}),0,.14*t,.2*t),i.add(s),s}function Zv(i,t){_(i,new W(.38*t,.05*t,.02*t),D("#FFEB3B",{emissive:"#FFC107",emissiveIntensity:.45}),0,-.02*t,.2*t);for(let e=0;e<3;e++)_(i,new W(.08*t,.055*t,.025*t),D(e%2===0?"#212121":"#FFEB3B"),-.1*t+e*.1*t,-.02*t,.22*t)}function ta(i,t=Jh){const e=i==="pickup"?1:i==="carried"?.36:i==="throw"?.58:.48,n=new ie;n.userData.packageOrb=!0,n.userData.theme={...t};const s=i==="pickup"?.55:i==="carried"?0:.35,r=new ie;r.position.y=s,n.add(r);let a;i==="pickup"&&(a=_(n,new In(.38*e,.62*e,O?12:18),Ec(t.glow,.38),0,.04,0,!1),a.rotation.x=-Math.PI/2,n.userData.groundRing=a);const o=_(r,new Kt(.48*e,wc,wc),Ec(t.glow,.18),0,0,0,!1);n.userData.outerGlow=o;const l=_(r,new W(.42*e,.38*e,.42*e),oi(t.shell,.5,.38),0,0,0,!1);n.userData.midShell=l;const c=i==="mail"?_(r,new W(.28*e,.18*e,.06*e),oi(t.core,1.1),0,0,.04*e,!1):_(r,new W(.32*e,.3*e,.32*e),oi(t.core,1.25),0,0,0,!1);n.userData.core=c,_(r,new Kt(.1*e,6,6),oi("#FFFFFF",1.2,.82),.08*e,.1*e,.14*e,!1),i!=="mail"?(jv(r,e,t,.18*e),i!=="carried"&&Zv(c,e)):_(r,new W(.06*e,.12*e,.02*e),oi(t.ribbon,1),0,.02*e,.08*e,!1);const h=i==="carried"?.28*e:.42*e;return n.userData.particles=$v(r,t.particle,h,i==="carried"?3:qv),{group:n,core:c,outerGlow:o,midShell:l,groundRing:a}}function Kv(i,t,e){const n=Yv(t);i.userData.theme=n,i.traverse(s=>{if(!(s instanceof Ne))return;const r=i.userData;s===r.core&&s.material instanceof je&&(s.material.color.set(n.core),s.material.emissive.set(n.core),s.material.emissiveIntensity=.9+e*.4),s===r.outerGlow&&s.material instanceof ue&&s.material.color.set(n.glow),s===r.midShell&&s.material instanceof je&&(s.material.color.set(n.shell),s.material.emissive.set(n.shell)),s===r.groundRing&&s.material instanceof ue&&s.material.color.set(n.glow)})}function Qh(i,t,e=0,n=!0){if(n){const h=Math.sin(t*3+e)*.12;i.position.y=h}i.rotation.y=t*1.4+e;const s=i.userData.core,r=i.userData.outerGlow,a=i.userData.midShell,o=i.userData.groundRing,l=i.userData.particles,c=1+Math.sin(t*4.2+e)*.06;s&&s.scale.setScalar(c),r&&(r.scale.setScalar(1+Math.sin(t*3+e)*.08),r.material.opacity=.14+Math.sin(t*5+e)*.05),a&&(a.rotation.y=-t*2.2),o&&o.scale.setScalar(1+Math.sin(t*4+e)*.08),l&&(l.rotation.y=t*1.6,l.children.forEach((h,u)=>{if(!(h instanceof Ne))return;const f=h.userData.angle+t*(1.1+u%3*.12),p=h.userData.orbit;h.position.x=Math.cos(f)*p,h.position.z=Math.sin(f)*p,h.position.y=Math.sin(t*4+h.userData.wobble)*.08}))}function Jv(i,t){const e=i.userData.core,n=i.userData.outerGlow,s=1+Math.sin(t*4)*.04;e&&e.scale.setScalar(s),n&&(n.scale.setScalar(s),n.material.opacity=.12+Math.sin(t*5)*.05);const r=i.userData.particles;r&&(r.rotation.y=t*1.2)}function tu(i){wn(i)}function Tc(i,t,e){const n=new ie;return n.position.set(i,.48,.02),_(n,new jn(.085,.22,5,8),t,0,-.12,0),_(n,new jn(.075,.18,5,8),t,0,-.38,0),_(n,new W(.15,.09,.26),e,0,-.54,.05),_(n,new W(.12,.04,.06),D("#37474F",{roughness:.85}),0,-.54,.16),n}function Ac(i,t,e,n){const s=new ie;s.position.set(i*.34,1.1,0),_(s,new jn(.065,.2,5,8),t,0,-.08,0),_(s,new jn(.055,.18,5,8),e,0,-.3,0),_(s,new Kt(.065,8,8),n,0,-.46,0);for(const r of[-.035,0,.035])_(s,new jn(.014,.045,3,4),n,r,-.52,.02);return s}function Qv(i,t){const e=new ie;e.position.set(0,1,-.1);const n=D(t.packMain,{roughness:.88}),s=D(t.packDark,{roughness:.92}),r=D("#263238",{roughness:.8}),a=D("#90A4AE",{metalness:.72,roughness:.35}),o=D(t.packTrim,{emissive:t.packTrim,emissiveIntensity:.18});_(e,new W(.4,.44,.13),s,0,.06,-.04),_(e,new W(.38,.14,.12),n,0,.3,-.03),_(e,new W(.42,.05,.14),s,0,.36,-.04);for(const c of[-.13,.13])_(e,new W(.055,.34,.035),r,c,.26,.04),_(e,new W(.045,.2,.03),r,c*.85,.46,.06),_(e,new W(.07,.035,.025),a,c,.2,.06);_(e,new W(.44,.05,.03),r,0,-.08,.02),_(e,new W(.08,.06,.025),a,0,-.08,.04);for(const c of[-1,1])_(e,new W(.09,.16,.09),n,c*.22,.02,.01),_(e,new W(.1,.03,.01),o,c*.22,.1,.06);_(e,new W(.41,.035,.01),o,0,.14,.07);const l=ta("carried");return l.group.position.set(0,.46,.04),l.group.rotation.y=.35,e.add(l.group),_(e,new Ft(.01,.01,.12,6),D("#455A64",{metalness:.65}),.15,.42,.03),_(e,new Kt(.022,8,8),D("#00E676",{emissive:"#00E676",emissiveIntensity:.75}),.15,.49,.03),i.add(e),{pack:e,vipPouch:l.core,vipGlow:l.outerGlow,packageOrb:l.group}}function t1(){const i=new ie,t=D("#607D8B",{metalness:.78,roughness:.28}),e=D("#37474F",{metalness:.82,roughness:.22}),n=D("#FF9800",{emissive:"#FF9800",emissiveIntensity:.3});_(i,new W(.07,.15,.08),e,0,-.07,.01),_(i,new W(.05,.04,.05),D("#263238",{roughness:.9}),.04,-.1,.02),_(i,new W(.12,.12,.28),t,0,.02,.1),_(i,new W(.1,.035,.2),D("#FFF8E1",{roughness:.7}),0,.09,.08),_(i,new W(.08,.006,.16),n,0,.115,.08);for(const r of[-.035,.035])_(i,new W(.012,.05,.14),e,r,.02,.1);_(i,new Ft(.038,.044,.2,8),e,0,.02,.32),_(i,new Ft(.032,.038,.08,8),t,0,.02,.44);const s=_(i,new En(.048,.01,6,12),D("#00E5FF",{emissive:"#00E5FF",emissiveIntensity:.65}),0,.02,.5);return s.userData.isMailMuzzle=!0,_(i,new W(.018,.03,.05),D("#00E676",{emissive:"#00E676",emissiveIntensity:.7}),0,.1,.22),_(i,new W(.04,.025,.06),D("#455A64",{metalness:.6}),0,.1,.14),i.rotation.set(-.2,-.15,.05),{gun:i,muzzle:s}}function eu(i){const t=new ie,e=new ie,n=D(i.skin),s=D(i.jacket,{roughness:.4,metalness:.08}),r=D(i.jacketLight,{roughness:.35}),a=D(i.jacketTrim,{emissive:i.jacketTrim,emissiveIntensity:.2}),o=D(i.hat,{roughness:.45,metalness:.1}),l=D(i.hatBrim,{roughness:.5}),c=D("#263238",{roughness:.85}),h=D("#1A1A1A",{roughness:.9,metalness:.15}),u=D("#80DEEA",{emissive:"#00BCD4",emissiveIntensity:.55,metalness:.65,transparent:!0,opacity:.88}),f=new ie;_(f,new W(.82,.09,1.15),D("#37474F",{metalness:.45,roughness:.55}),0,.06,.04),_(f,new W(.7,.035,1),D("#546E7A",{metalness:.35,roughness:.65}),0,.11,.04),_(f,new W(.55,.02,.85),D("#263238",{roughness:.9}),0,.13,.04);for(const L of[-.3,.3])_(f,new Ft(.1,.1,.035,12),D("#78909C",{metalness:.65,roughness:.4}),L,.05,-.38),_(f,new En(.11,.014,8,16),D("#455A64",{metalness:.5}),L,.05,-.38,!1);t.add(f),_(e,new jn(.22,.18,6,10),c,0,.58,0),_(e,new jn(.26,.42,8,12),s,0,.98,0),_(e,new W(.5,.1,.28),r,0,1.18,.02),_(e,new W(.52,.08,.3),a,0,1.26,.01),_(e,new W(.14,.28,.06),a,0,1,.17);for(const L of[-1,1])_(e,new Kt(.11,10,8),r,L*.32,1.22,0);_(e,new Kt(.24,14,12),n,0,1.48,.02),_(e,new Kt(.27,14,12,0,Math.PI*2,0,Math.PI*.55),o,0,1.52,0),_(e,new W(.44,.12,.14),l,0,1.62,.06),_(e,new W(.38,.09,.05),u,0,1.52,.22);const p=Tc(-.13,c,h),v=Tc(.13,c,h);e.add(p,v);const y=Ac(-1,s,r,n),g=Ac(1,s,r,n);e.add(y,g);const{pack:d,vipPouch:S,vipGlow:C,packageOrb:E}=Qv(e,i),{gun:B,muzzle:F}=t1();return B.position.set(.08,-.4,.1),g.add(B),e.position.y=.28,t.add(e),{mesh:t,body:e,leftLeg:p,rightLeg:v,leftArm:y,rightArm:g,packageMesh:S,packageGlow:C,packageOrb:E,hoverboard:f,backpack:d,mailGun:B,mailGunMuzzle:F}}class e1{constructor(t,e){U(this,"mesh");U(this,"x",0);U(this,"z",0);U(this,"targetX",0);U(this,"hurtFlash",0);U(this,"runPhase",0);U(this,"jumpY",0);U(this,"jumpVel",0);U(this,"jumpPower",12);U(this,"isJumping",!1);U(this,"isSliding",!1);U(this,"slideTimer",0);U(this,"baseBodyY",.28);U(this,"shadow");U(this,"speedTrails",[]);U(this,"trailPhase",0);U(this,"nightLevel",0);U(this,"footLight");U(this,"playerLight");U(this,"headLight");U(this,"mailGunMuzzle");U(this,"visorMesh",null);U(this,"body");U(this,"leftLeg");U(this,"rightLeg");U(this,"leftArm");U(this,"rightArm");U(this,"packageOrb");U(this,"hoverboard");U(this,"backpack");U(this,"characterName");this.characterName=e.name;const n=eu(e);this.mesh=n.mesh,this.body=n.body,this.leftLeg=n.leftLeg,this.rightLeg=n.rightLeg,this.leftArm=n.leftArm,this.rightArm=n.rightArm,this.packageOrb=n.packageOrb,this.hoverboard=n.hoverboard,this.backpack=n.backpack,this.mailGunMuzzle=n.mailGunMuzzle,this.mailGunMuzzle.userData.baseEmissiveIntensity=this.mailGunMuzzle.material.emissiveIntensity,this.body.traverse(r=>{r instanceof Ne&&r.material instanceof je&&(r.material.emissive&&r.material.emissive.getHex()>0&&r!==this.mailGunMuzzle&&(r.userData.baseEmissiveIntensity=r.material.emissiveIntensity),r.material.transparent&&r.material.opacity<1&&r.position.y>1.45&&(this.visorMesh=r))}),this.shadow=_(t,new un(.42,12),new ue({color:"#000000",transparent:!0,opacity:.28,depthWrite:!1}),0,.03,0,!1),this.shadow.rotation.x=-Math.PI/2;const s=new ue({color:"#80DEEA",transparent:!0,opacity:0,blending:ke,depthWrite:!1,side:We});for(let r=0;r<(O?3:4);r++){const a=_(t,new Pe(.35,.06),s.clone(),0,.12,0,!1);a.rotation.x=-Math.PI/2,a.visible=!1,this.speedTrails.push(a)}this.footLight=_(t,new un(.22,10),new ue({color:"#B0BEC5",transparent:!0,opacity:0,blending:ke,depthWrite:!1}),0,.035,0,!1),this.footLight.rotation.x=-Math.PI/2,this.playerLight=new xs("#FFF8E1",0,9,1.35),this.playerLight.position.set(0,1.15,.35),this.mesh.add(this.playerLight),this.headLight=new xs("#E1F5FE",0,16,1.15),this.headLight.position.set(0,1.6,2.8),this.mesh.add(this.headLight),t.add(this.mesh)}update(t,e,n,s=12,r=0){this.x+=(this.targetX-this.x)*Math.min(1,9*t),this.x=gs.clamp(this.x,-e,e),this.targetX=gs.clamp(this.targetX,-e,e),this.slideTimer>0&&(this.slideTimer-=t,this.slideTimer<=0&&(this.slideTimer=0,this.isSliding=!1)),this.isJumping&&(this.jumpVel-=34*t,this.jumpY+=this.jumpVel*t,this.jumpY<=0&&(this.jumpY=0,this.jumpVel=0,this.isJumping=!1)),this.mesh.position.set(this.x,this.jumpY,this.z),this.shadow.position.set(this.x,.03,this.z);const o=1-Math.min(.45,this.jumpY*.12);this.shadow.scale.set(o,o,1),this.shadow.material.opacity=.18+o*.14,this.nightLevel=r,this.updateNightGear(n);const l=n&&s>13&&!this.isJumping;l&&(this.trailPhase+=t*(s*.8));for(let c=0;c<this.speedTrails.length;c++){const h=this.speedTrails[c];if(!l){h.visible=!1;continue}h.visible=!0;const u=c/this.speedTrails.length;h.position.set(this.x+Math.sin(this.trailPhase+c)*.08,.08+u*.04,this.z+.45+c*.22),h.rotation.z=this.x*.04;const f=h.material;f.opacity=(.35-u*.28)*Math.min(1,(s-12)/8),h.scale.set(.8+(1-u)*.6,1,1)}if(this.isSliding)this.body.position.y=.08,this.body.rotation.x=.55,this.leftLeg.rotation.x=1.1,this.rightLeg.rotation.x=1.25,this.leftArm.rotation.x=.35,this.rightArm.rotation.x=.35,this.hoverboard.rotation.x=.15,this.hoverboard.position.y=.02,this.backpack.rotation.x=.25;else if(n){this.runPhase+=t*13;const c=Math.sin(this.runPhase)*.48;this.leftLeg.rotation.x=c,this.rightLeg.rotation.x=-c,this.leftArm.rotation.x=-c*.5,this.rightArm.rotation.x=c*.5,this.body.rotation.x=0,this.body.position.y=this.baseBodyY+Math.abs(Math.sin(this.runPhase*2))*.045,this.hoverboard.rotation.x=0,this.hoverboard.position.y=0,this.isJumping&&(this.leftLeg.rotation.x=-.65,this.rightLeg.rotation.x=-.35,this.body.position.y=this.baseBodyY+.15,this.body.rotation.x=-.08),this.hoverboard.rotation.z=this.x*.032,this.backpack.rotation.x=Math.sin(this.runPhase)*.04,this.backpack.rotation.z=Math.sin(this.runPhase*.5)*.03}else this.body.rotation.x=0,this.body.position.y=this.baseBodyY;if(Jv(this.packageOrb,Date.now()*.001),this.hurtFlash>0){this.hurtFlash-=t;const c=this.hurtFlash>0;this.body.traverse(h=>{h instanceof Ne&&h.material instanceof je&&(h.material.emissive.set(c?"#FF1744":"#000000"),h.material.emissiveIntensity=c?.55:0)})}}updateNightGear(t){var a;const e=this.nightLevel;this.playerLight.intensity=e*(O?3.2:4.4),this.playerLight.color.set(e>.5?"#E1F5FE":"#FFF8E1"),this.headLight.intensity=e*(O?2.4:3.6),this.headLight.color.set("#B3E5FC");const n=this.footLight.material;n.opacity=e*.22,this.footLight.position.set(this.x,.035,this.z),this.footLight.visible=e>.04;const s=this.mailGunMuzzle.material,r=this.mailGunMuzzle.userData.baseEmissiveIntensity??.65;if(s.emissiveIntensity=r+e*.55+(t?.14:0),((a=this.visorMesh)==null?void 0:a.material)instanceof je){const o=this.visorMesh.material,l=this.visorMesh.userData.baseEmissiveIntensity??.55;o.emissiveIntensity=l+e*.45}this.body.traverse(o=>{if(!(o instanceof Ne)||!(o.material instanceof je)||o===this.mailGunMuzzle||o===this.visorMesh)return;const l=o.userData.baseEmissiveIntensity;if(l!==void 0){o.material.emissiveIntensity=l+e*.35;return}e>.08&&!o.material.transparent&&(o.material.emissive.set("#FFF3E0"),o.material.emissiveIntensity=e*.18)})}knockback(t,e=1.2){this.targetX+=this.x>=t?e:-e}jump(){return this.isJumping||this.isSliding?!1:(this.isJumping=!0,this.jumpVel=this.jumpPower,!0)}slide(){return this.isJumping||this.isSliding?!1:(this.isSliding=!0,this.slideTimer=.82,!0)}boostSlide(t=1.15){this.isJumping=!1,this.jumpY=0,this.jumpVel=0,this.isSliding=!0,this.slideTimer=Math.max(this.slideTimer,t)}setJumpPower(t){this.jumpPower=t}flashHurt(){this.hurtFlash=.45}throwAnim(){this.rightArm.rotation.x=-1.5,setTimeout(()=>{this.rightArm.rotation.x=0},220)}mailGunAnim(){this.rightArm.rotation.x=-.85;const t=this.mailGunMuzzle.material;t.emissiveIntensity=1.4,setTimeout(()=>{this.rightArm.rotation.x=0,this.updateNightGear(!0)},120)}setPackageGlow(t,e){Kv(this.packageOrb,e,t)}dashOffset(){this.z+=4}dispose(t){t.remove(this.mesh),t.remove(this.shadow),t.remove(this.footLight);for(const e of this.speedTrails)t.remove(e),e.geometry.dispose(),e.material.dispose();this.speedTrails=[],wn(this.mesh),this.shadow.geometry.dispose(),this.shadow.material.dispose(),this.footLight.geometry.dispose(),this.footLight.material.dispose()}}class n1{constructor(t){U(this,"group");U(this,"units",[]);U(this,"reactTimer",0);U(this,"reactKind","none");U(this,"count",0);this.scene=t,this.group=new ie,t.add(this.group)}setCount(t){for(this.count=Math.max(0,t);this.units.length<this.count;)this.units.push(this.buildHelper());for(;this.units.length>this.count;){const e=this.units.pop();this.group.remove(e),wn(e)}this.layout()}reactQuake(){this.reactKind="swerve",this.reactTimer=.85}reactTurbo(){this.reactKind="honk",this.reactTimer=.65}buildHelper(){const t=new ie,e=D("#FF6F00",{emissive:"#E65100",emissiveIntensity:.2}),n=D("#FFCC80");_(t,new jn(.14,.26,4,8),D("#37474F"),0,.38,0),_(t,new jn(.15,.28,4,8),e,0,.52,0),_(t,new W(.22,.18,.1),D("#5D4037"),0,.52,-.1),_(t,new Kt(.15,10,8),n,0,.82,.02),_(t,new W(.28,.06,.05),D("#FFD54F"),0,.94,.04);for(const s of[-.05,.05])_(t,new Kt(.025,6,6),D("#111"),s,.84,.1);return _(t,new W(.06,.02,.02),D("#FF8A65"),0,.78,.12),this.group.add(t),t}layout(){const t=Math.ceil(Math.sqrt(Math.max(1,this.count)));this.units.forEach((e,n)=>{const s=Math.floor(n/t),r=n%t;e.position.set((r-(t-1)/2)*.55,0,-(s+1)*.58)})}update(t,e,n){this.reactTimer>0&&(this.reactTimer-=.016),this.group.position.set(t,0,e),this.units.forEach((s,r)=>{let a=Math.sin(n*4+r)*.12,o=Math.sin(n*7+r*.6)*.035;this.reactTimer>0&&(this.reactKind==="honk"?(a+=Math.sin(n*22+r)*.18,o+=.04):this.reactKind==="swerve"&&(s.position.x+=Math.sin(n*16+r*2)*.12,s.rotation.z=Math.sin(n*12+r)*.12)),s.rotation.y=a,s.position.y=o,this.reactKind!=="swerve"&&(s.rotation.z=Math.sin(n*5+r)*.04)})}dispose(){for(const t of this.units)wn(t);this.units=[],this.scene.remove(this.group)}}const i1=[-3.2,-1.6,0,1.6,3.2],nu=.82,Cc=[{wire:"#FFD54F",glow:"#80DEEA",core:"#FFFFFF",sparkA:"#FFEB3B",sparkB:"#B2FF59",arc:"#CCFF90",floor:"#FFE082"},{wire:"#EA80FC",glow:"#B388FF",core:"#F3E5F5",sparkA:"#E1BEE7",sparkB:"#CE93D8",arc:"#AB47BC",floor:"#EA80FC"},{wire:"#FFB74D",glow:"#FFCC80",core:"#FFF8E1",sparkA:"#FFE082",sparkB:"#FFAB40",arc:"#FF9800",floor:"#FFCC80"},{wire:"#69F0AE",glow:"#A7FFEB",core:"#E0F7FA",sparkA:"#B9F6CA",sparkB:"#00E676",arc:"#1DE9B6",floor:"#A7FFEB"}];function s1(i,t){const e=Cc[Math.min(Math.max(0,i-1),Cc.length-1)];return t==="slide"?{wire:"#E040FB",glow:"#EA80FC",core:"#FCE4EC",sparkA:"#F48FB1",sparkB:"#B388FF",arc:"#CE93D8",floor:"#E1BEE7"}:e}function r1(i){return i==="full"?7.35:i==="lane-2"?3.25:1.55}function a1(i){return i.length===0?0:i.reduce((t,e)=>t+e,0)/i.length}function Zn(i,t){return new ue({color:i,transparent:!0,opacity:t,blending:ke,depthWrite:!1})}function o1(i,t,e,n){const s=[],r=t*1.05,a=O?1.35:1.65,o=nl();o.repeat.set(r/.35,1);const l=_(i,new Pe(r,a),D("#3d4650",{roughness:.96,metalness:.04}),0,.004,0,!1);l.rotation.x=-Math.PI/2;const c=_(i,new Pe(r*.94,a*.72),D("#FFFFFF",{map:o,transparent:!0,opacity:O?.55:.68,roughness:.85,emissive:e.floor,emissiveIntensity:.08,depthWrite:!1}),0,.006,0,!1);if(c.rotation.x=-Math.PI/2,c.userData.isFloorRing=!0,s.push(c),!O){const h=_(i,new Pe(.28,.28),Zn(e.sparkA,.45),0,.02,0,!1);h.rotation.x=-Math.PI/2,h.userData.isChevron=!0}for(let h=0;h<(O?2:3);h++){const u=(h-1)*(r*.32),f=_(i,new Ft(.025,.032,.22,4),D("#FFC107",{emissive:"#FF9800",emissiveIntensity:.35,roughness:.65}),u,.11,a*.38);f.userData.isWarningPost=!0}return s}function l1(i,t,e,n,s){const a=n==="jump"?1.35:2.85,o=O?8:12;_(i,new Ft(.11,.14,a,o),D("#37474F",{metalness:.72,roughness:.28}),t,a/2,0),_(i,new Ft(.16,.2,.18,o),D("#546E7A",{metalness:.85,roughness:.2,emissive:s.wire,emissiveIntensity:.35}),t,a-.08,0);const l=_(i,new nr(.11,0),D(s.core,{emissive:s.glow,emissiveIntensity:.85,metalness:.4,roughness:.2}),t,e,.08);l.userData.isCore=!0,l.userData.corePhase=t;for(let c=0;c<3;c++){const h=_(i,new En(.14+c*.05,.012,6,o),Zn(s.glow,.45-c*.08),t,e-.15+c*.12,.06,!1);h.rotation.x=Math.PI/2,h.userData.isPillarRing=!0,h.userData.ringPhase=c+t}}function c1(i,t,e,n,s){i.userData.spinSign=s,i.userData.spinAxis=n?"z":"y";const r=O?2:3;for(let o=0;o<r;o++){const l=new ie;i.add(l),l.rotation.z=o/r*Math.PI*2,_(l,new W(t,.06,.06),D("#263238",{metalness:.8,roughness:.25,emissive:e.wire,emissiveIntensity:.45}),t/2,0,0);const c=_(l,new Kt(.07,O?6:8,O?6:8),Zn(e.sparkA,.85),t,0,0,!1);c.userData.isArmTip=!0;const h=_(l,new Pe(t*.85,.14),Zn(e.glow,.28),t*.42,0,0,!1);h.userData.isArmTrail=!0,n?h.rotation.y=Math.PI/2:h.rotation.x=Math.PI/2}const a=_(i,new Kt(.09,8,8),Zn(e.core,.75),0,0,0,!1);a.userData.isHubGlow=!0}function h1(i,t,e,n,s){const r=O?10:14,a=_(i,new Ft(s?.055:.072,s?.055:.072,t,r),D("#111820",{metalness:.9,roughness:.15,emissive:n.wire,emissiveIntensity:s?.35:.55}),0,e,0);a.rotation.z=Math.PI/2;const o=_(i,new Ft(s?.095:.12,s?.095:.12,t-.02,r),Zn(n.glow,s?.42:.58),0,e,0,!1);o.rotation.z=Math.PI/2;const l=_(i,new Ft(.025,.025,t-.08,6),Zn(n.core,.9),0,e,.02,!1);return l.rotation.z=Math.PI/2,l.userData.isCoreBeam=!0,{barrierMesh:a,glowMesh:o}}function u1(i,t,e,n){const s=[],r=O?3:5,a=t/2;for(let o=0;o<r;o++){const l=_(i,new En(.11,.018,6,O?8:12),Zn(o%2===0?n.sparkA:n.sparkB,.55),-a+o/(r-1||1)*t,e,.04,!1);l.rotation.y=Math.PI/2,l.userData.isOrbitRing=!0,l.userData.orbitPhase=o*1.7,l.userData.orbitHalf=a,s.push(l)}return s}function f1(i,t,e,n){const s=[],r=t/2,a=O?6:10;for(let l=0;l<a;l++){const c=a>1?l/(a-1):.5,h=-r+.2+c*(t-.4),u=_(i,new Kt(.022+l%3*.01,6,6),Zn(l%2===0?n.sparkA:n.sparkB,.75),h,e+l%2*.06-.03,(l%3-1)*.05,!1);u.userData.isSpark=!0,u.userData.sparkPhase=l,u.userData.baseY=u.position.y,s.push(u)}const o=O?3:5;for(let l=0;l<o;l++){const c=_(i,new Pe(.35,.07),Zn(n.arc,.5),-r*.7+l*(t/(o-.5||1)),e-.14,.08,!1);c.userData.isArc=!0,c.userData.sparkPhase=l+.5,s.push(c)}return s}function d1(i,t,e,n,s){const r=[],a=n==="jump";for(const o of[-1,1]){const l=new ie;l.position.set(o*t*.55,e+(a?.55:-.35),.15),i.add(l),_(l,new W(.42,.42,.04),D("#263238",{metalness:.7,emissive:s.wire,emissiveIntensity:.4}),0,0,0);const c=_(l,new Dn(.12,.22,4),Zn(s.core,.9),0,a?.08:-.08,.04,!1);a||(c.rotation.x=Math.PI),c.userData.isWarningArrow=!0,l.userData.isWarningGlyph=!0,l.userData.glyphPhase=o,r.push(l)}return r}function p1(i,t,e,n){const s=new ie;i.add(s);const r=e==="jump",a=r?.48:1.82,o=t/2,l=o1(s,t,n);for(const y of[-o,o])l1(s,y,a,e,n);const{barrierMesh:c,glowMesh:h}=h1(s,t,a,n,r),u=[];for(const y of[-o,o]){const g=new ie;g.position.set(y,a,0),s.add(g),c1(g,Math.min(o*.55,1.35),n,r,y<0?1:-1),u.push(g)}const f=u1(s,t,a,n),p=f1(s,t,a,n),v=d1(s,o,a,e,n);return{assembly:s,barrierMesh:c,glowMesh:h,sparks:p,rotors:u,orbitRings:f,floorPulse:l,warningGlyphs:v}}function Rr(i,t,e){const{span:n,clearance:s,motion:r="static",district:a=1}=e;let o=e.lanes??[];n==="full"?o=[...i1]:o.length===0&&(o=[0]);const l=n==="full"?0:a1(o),c=r1(n),h=s1(a,s),u=new ie;u.position.set(0,0,t);const f=p1(u,c,s,h);return f.assembly.position.x=r==="sweep"?Math.random()<.5?-5.2:5.2:l,i.add(u),{mesh:u,barAssembly:f.assembly,z:t,x:l,span:n,clearance:s,motion:r,laneXs:o,resolved:!1,penalized:!1,barrierMesh:f.barrierMesh,glowMesh:f.glowMesh,sparks:f.sparks,rotors:f.rotors,orbitRings:f.orbitRings,floorPulse:f.floorPulse,warningGlyphs:f.warningGlyphs,sweepStarted:!1,sweepTelegraphed:!1,sweepT0:0,sweepDir:Math.random()<.5?1:-1,styleAwarded:!1}}function m1(i,t){const e=i.clearance==="slide",n=i.motion==="sweep"&&i.sweepTelegraphed&&!i.sweepStarted?.45:0,s=.5+Math.sin(t*8+i.z*.2)*.5,r=i.glowMesh.material;r.opacity=(e?.52:.42)+s*.18+n;const a=i.barrierMesh.material;a.emissiveIntensity=(e?.45:.28)+Math.abs(Math.sin(t*11+i.z*.3))*.4+n*.6;const o=(e?2.8:3.6)+n*2;for(const l of i.rotors){const c=l.userData.spinSign??1;l.userData.spinAxis==="y"?l.rotation.y=c*t*o:l.rotation.z=c*t*o}for(const l of i.orbitRings){const c=l.userData.orbitPhase??0,h=l.userData.orbitHalf??2;l.position.x=Math.sin(t*2.2+c)*h*.85,l.rotation.x=Math.PI/2+Math.sin(t*3+c)*.35,l.rotation.z=t*1.5+c;const u=l.material;u.opacity=.35+Math.abs(Math.sin(t*5+c))*.35+n*.3}for(const l of i.floorPulse){const c=l.material;c.opacity=(O?.48:.58)+s*.22+n*.2,l.scale.setScalar(1+s*.03+n*.05)}for(const l of i.warningGlyphs){const c=l.userData.glyphPhase??0;l.position.y+=Math.sin(t*4+c)*8e-4,l.rotation.y=Math.sin(t*2+c)*.12}i.barAssembly.traverse(l=>{if(!(l instanceof Ne))return;const c=l.userData.sparkPhase??l.userData.corePhase??0;if(l.userData.isCore){l.rotation.y=t*2.5,l.rotation.x=Math.sin(t*3+c)*.4;const h=l.material;h.emissiveIntensity=.75+s*.45+n*.4,l.scale.setScalar(1+s*.12)}if(l.userData.isPillarRing&&(l.rotation.z=t*(1.5+c*.1)),l.userData.isCoreBeam){const h=l.material;h.opacity=.65+s*.35}if(l.userData.isArmTip){const h=l.material;h.opacity=.55+Math.abs(Math.sin(t*18+c))*.45,l.scale.setScalar(1+Math.sin(t*12+c)*.2)}if(l.userData.isArmTrail){const h=l.material;h.opacity=.15+Math.abs(Math.sin(t*10+c))*.25}if(l.userData.isSpark){const h=l.material;h.opacity=.35+Math.abs(Math.sin(t*16+c*2.1))*.55+n*.3,l.position.y=l.userData.baseY+Math.sin(t*20+c)*.025}if(l.userData.isArc){const h=l.material;h.opacity=.12+Math.abs(Math.sin(t*9+c*1.7))*.48+n*.35,l.scale.x=.6+Math.abs(Math.sin(t*13+c))*.65,l.rotation.z=Math.sin(t*6+c)*.45}if(l.userData.isChevron){const h=l.material;h.opacity=.35+s*.35}if(l.userData.isWarningArrow){const h=l.material;h.opacity=.6+Math.abs(Math.sin(t*6+c))*.4}})}function g1(i,t){const e=t-i.sweepT0,s=Math.min(1,Math.max(0,e/1.05)),r=s*s*(3-2*s),a=i.sweepDir===1?-5.2:5.2,o=i.sweepDir===1?5.2:-5.2;return a+(o-a)*r}function Rc(i,t){if(t.span==="full")return!0;for(const e of t.laneXs)if(Math.abs(i-e)<nu+.12)return!0;return!1}function v1(i,t,e,n){for(const s of i){if(s.resolved){s.mesh.visible=!1;continue}if(Ai(s.z,e,O?48:60)){if(s.motion==="sweep"){const r=s.z-e;r<16&&r>0&&!s.sweepTelegraphed&&(s.sweepTelegraphed=!0,n==null||n(s)),r<8&&r>-2&&!s.sweepStarted&&(s.sweepStarted=!0,s.sweepT0=t),s.sweepStarted&&(s.barAssembly.position.x=g1(s,t))}m1(s,t)}}}function Pc(i,t){for(const e of i)t.remove(e.mesh),wn(e.mesh)}function x1(i){return i.motion==="sweep"&&i.sweepStarted?i.barAssembly.position.x:i.x}function _1(i,t,e){const n=new ie;n.position.set(0,0,t);const r=Lc(2.35,e==="left"),a=Lc(-2.35,e==="right");n.add(r.panel,a.panel);const o=_(n,new W(.18,3.5,.12),D("#37474F",{roughness:.8}),0,1.75,.05);return i.add(n),{kind:"route",mesh:n,z:t,safeSide:e,resolved:!1,leftMesh:r.panel,rightMesh:a.panel,leftPortal:r.portal,rightPortal:a.portal,leftLabel:r.label,rightLabel:a.label,centerWall:o,animTime:0}}function y1(i,t){const e=new ie;e.position.set(0,0,t);const n=O?12:20,s=_(e,new Ft(3.4,3.55,.12,n),new je({color:"#B0BEC5",roughness:.88,metalness:.08,emissive:"#ECEFF1",emissiveIntensity:.06}),0,.07,0),r=_(e,new In(2.85,3.15,n),new ue({color:"#4FC3F7",transparent:!0,opacity:.35,side:We}),0,.13,0,!1);r.rotation.x=-Math.PI/2;const a=_(e,new In(1.2,1.35,n),new ue({color:"#FFFFFF",transparent:!0,opacity:.42,side:We}),0,.135,0,!1);a.rotation.x=-Math.PI/2;const o=[r,a];for(const[f,p]of[[-2.6,0],[2.6,0]]){_(e,new W(.1,1.85,.1),D("#546E7A",{metalness:.55,roughness:.35}),f,.92,p),_(e,new W(.22,.14,.14),D("#78909C",{metalness:.6,roughness:.3}),f,1.88,p);const v=_(e,new Kt(.08,8,8),D("#E3F2FD",{emissive:"#81D4FA",emissiveIntensity:.35}),f,1.98,p);v.userData.isLamp=!0}_(e,new W(.55,.75,.38),D("#1565C0",{metalness:.35,roughness:.45,emissive:"#0D47A1",emissiveIntensity:.12}),0,.48,-1.1),_(e,new W(.48,.08,.02),D("#FFFFFF",{emissive:"#FFFFFF",emissiveIntensity:.15}),0,.62,-.9);const l=_(e,new Ft(.04,1.1,3.2,n,1,!0),new ue({color:"#81D4FA",transparent:!0,opacity:.06,side:We,depthWrite:!1,blending:ke}),0,1.65,0,!1),c=Dc("DROP OFF","#FFFFFF","rgba(13,71,161,0.88)");c.position.set(0,2.35,-.85),c.scale.set(3.8,.85,1),e.add(c);const h=Dc("Deliver here to win","#B3E5FC","rgba(0,0,0,0.45)");h.position.set(0,1.85,-.85),h.scale.set(3.2,.55,1),e.add(h);const u=new xs("#E3F2FD",O?.35:.45,12,2);return u.position.set(0,2.2,.5),e.add(u),i.add(e),{kind:"dropoff",mesh:e,z:t,reached:!1,platform:s,rings:o,beam:l,holoSign:c}}const ka={},Oa={};function b1(i){const t=i?"safe":"die";if(ka[t])return ka[t];const e=256,n=document.createElement("canvas");n.width=e,n.height=e;const s=n.getContext("2d"),r=e/2,a=e/2;s.fillStyle="#000000",s.fillRect(0,0,e,e);const o=s.createRadialGradient(r,a,0,r,a,e*.48);o.addColorStop(0,i?"#000810":"#120008"),o.addColorStop(.22,i?"#003328":"#3a0018"),o.addColorStop(.55,i?"#00C853":"#D50000"),o.addColorStop(.78,i?"#004D40":"#4A0020"),o.addColorStop(1,"#000000"),s.fillStyle=o,s.fillRect(0,0,e,e);for(let c=0;c<6;c++){s.beginPath(),s.strokeStyle=i?"rgba(105,240,174,0.75)":"rgba(255,82,82,0.78)",s.lineWidth=c%2===0?4:2.5;for(let h=0;h<140;h++){const u=c*(Math.PI/3)+h*.105,f=6+h*.82,p=r+Math.cos(u)*f,v=a+Math.sin(u)*f;h===0?s.moveTo(p,v):s.lineTo(p,v)}s.stroke()}s.globalCompositeOperation="lighter";for(let c=0;c<6;c++){s.beginPath(),s.strokeStyle=i?"rgba(178,255,89,0.35)":"rgba(255,138,128,0.38)",s.lineWidth=8;for(let h=0;h<90;h++){const u=c*(Math.PI/3)+h*.105+.4,f=20+h*.82,p=r+Math.cos(u)*f,v=a+Math.sin(u)*f;h===0?s.moveTo(p,v):s.lineTo(p,v)}s.stroke()}s.globalCompositeOperation="source-over";for(let c=0;c<16;c++){const h=c/16*Math.PI*2,u=e*.36+c%2*6,f=r+Math.cos(h)*u,p=a+Math.sin(h)*u;s.fillStyle=i?"rgba(0,229,255,0.55)":"rgba(255,64,129,0.55)",s.beginPath(),s.moveTo(f,p-5),s.lineTo(f+4,p+3),s.lineTo(f-4,p+3),s.closePath(),s.fill()}const l=new ln(n);return l.colorSpace=Be,ka[t]=l,l}function M1(i){const t=i?"safe":"die";if(Oa[t])return Oa[t];const e=256,n=document.createElement("canvas");n.width=e,n.height=e;const s=n.getContext("2d"),r=e/2,a=e/2;s.clearRect(0,0,e,e);for(let l=0;l<24;l++){const c=l/24*Math.PI*2,h=e*.41,u=r+Math.cos(c)*h,f=a+Math.sin(c)*h;s.save(),s.translate(u,f),s.rotate(c+Math.PI/2),s.strokeStyle=i?"rgba(105,240,174,0.85)":"rgba(255,82,82,0.85)",s.lineWidth=2,s.beginPath(),s.moveTo(0,-7),s.lineTo(5,0),s.lineTo(0,7),s.lineTo(-5,0),s.closePath(),s.stroke(),s.restore()}s.strokeStyle=i?"rgba(0,229,255,0.35)":"rgba(255,64,129,0.35)",s.lineWidth=3,s.beginPath(),s.arc(r,a,e*.43,0,Math.PI*2),s.stroke();const o=new ln(n);return o.colorSpace=Be,Oa[t]=o,o}function S1(i){const t=new ie;t.userData.isSafe=i;const e=i?"#00E676":"#FF1744",n=i?"#69F0AE":"#FF5252",s=i?"#00E5FF":"#EA80FC",r=O?24:36,a=b1(i),o=M1(i);_(t,new un(1.08,r),new ue({color:i?"#001a14":"#1a0008",transparent:!0,opacity:.92,depthWrite:!1}),0,0,-.06,!1);const l=O?4:6;for(let v=0;v<l;v++){const y=v/l,g=1-y*.55,d=_(t,new In(.32*g,.48*g,r),new ue({color:v%2===0?e:n,transparent:!0,opacity:.22-y*.08,blending:ke,depthWrite:!1,side:We}),0,0,-.02+y*.04,!1);d.userData.tunnelIndex=v,d.userData.tunnelSpeed=v%2===0?1.6-y*.4:-(1.2-y*.3)}const c=_(t,new un(.98,r),new ue({map:a,transparent:!0,opacity:.92,blending:ke,depthWrite:!1}),0,0,.02,!1);c.userData.portalLayer="vortexA";const h=_(t,new un(.82,r),new ue({map:a,transparent:!0,opacity:.55,blending:ke,depthWrite:!1,color:i?"#B2FF59":"#FF8A80"}),0,0,.05,!1);h.userData.portalLayer="vortexB";const u=_(t,new un(1.02,r),new ue({map:o,transparent:!0,opacity:.78,blending:ke,depthWrite:!1}),0,0,.07,!1);u.userData.portalLayer="runes";for(const v of[-.92,.92]){const y=_(t,new W(.1,1.65,.08),new je({color:"#263238",metalness:.55,roughness:.35,emissive:e,emissiveIntensity:.25}),v,0,.04);_(y,new W(.04,1.45,.02),new ue({color:s,transparent:!0,opacity:.65,blending:ke,depthWrite:!1}),v>0?-.03:.03,0,.05,!1),y.userData.portalLayer="pillar"}for(let v=0;v<(O?3:5);v++){const y=_(t,new In(.88+v*.08,.96+v*.08,r),new ue({color:v%2===0?n:s,transparent:!0,opacity:.14-v*.02,blending:ke,depthWrite:!1,side:We}),0,0,.03+v*.004,!1);y.userData.portalLayer="corona",y.userData.coronaIndex=v}const f=_(t,new un(.18,O?12:16),new ue({color:"#FFFFFF",transparent:!0,opacity:.75,blending:ke,depthWrite:!1}),0,0,.09,!1);f.userData.portalLayer="core";const p=O?6:10;for(let v=0;v<p;v++){const y=_(t,new Pe(.08,.42),new ue({color:s,transparent:!0,opacity:.35,blending:ke,depthWrite:!1,side:We}),0,0,.08,!1);y.userData.portalLayer="shard",y.userData.shardIndex=v,y.userData.shardCount=p}return t}function Fc(i,t,e){const n=1+Math.sin(t*3.8)*.035;i.scale.set(n,n,1);const s=e?"#00E676":"#FF1744",r=e?"#69F0AE":"#FF5252";for(const a of i.children){const o=a.userData,l=o.portalLayer;if(o.tunnelIndex!==void 0){a.rotation.z=t*o.tunnelSpeed;const c=a.material;c.opacity=.2-o.tunnelIndex*.03+Math.sin(t*4+o.tunnelIndex)*.06}if(l==="vortexA"){a.rotation.z=t*1.35;const c=a.material;c.opacity=.78+Math.sin(t*5)*.12}else if(l==="vortexB")a.rotation.z=-t*.95,a.scale.setScalar(.92+Math.sin(t*2.6)*.06);else if(l==="runes"){a.rotation.z=t*.45;const c=a.material;c.opacity=.62+Math.sin(t*6)*.14}else if(l==="core"){const c=1+Math.sin(t*7)*.18;a.scale.set(c,c,1);const h=a.material;h.opacity=.55+Math.sin(t*8)*.25,h.color.set(e?"#E0F7FA":"#FFCDD2")}else if(l==="corona"){a.rotation.z=t*(.6+o.coronaIndex*.15)*(e?1:-1);const c=a.material;c.opacity=.1+Math.sin(t*3.5+o.coronaIndex)*.06}else if(l==="shard"){const c=o.shardIndex,h=o.shardCount,u=t*2.2+c/h*Math.PI*2,f=.52+Math.sin(t*3.5+c*1.7)*.22;a.position.set(Math.cos(u)*f,Math.sin(u)*f,.08+c%3*.012),a.rotation.z=u+Math.PI/2;const p=a.material;p.opacity=.15+Math.abs(Math.sin(t*5+c*2))*.35,p.color.set(c%2===0?r:s)}else l==="pillar"&&(a.rotation.z=Math.sin(t*2+a.position.x)*.02)}}function Lc(i,t){const e=new ie;e.position.set(i,1.85,.08);const n=S1(t);n.scale.set(1.55,1.72,1),e.add(n);const s=w1(t),r=new Ne(new Pe(4.15,3.55),new ue({map:s,transparent:!0,opacity:.94,side:We,depthWrite:!1,blending:wi}));e.add(r);const a=_(e,new Pe(4.28,3.68),new ue({color:t?"#69F0AE":"#FF5252",transparent:!0,opacity:.22,blending:ke,depthWrite:!1,side:We}),0,0,-.02,!1);a.userData.isGateRim=!0;const o=new Zr(new $o({visible:!1}));return o.position.set(i,3.2,0),{panel:e,portal:n,label:o,rimGlow:a}}function w1(i){const t=document.createElement("canvas");t.width=256,t.height=352;const e=t.getContext("2d"),n=t.width,s=t.height,r=i?"#69F0AE":"#FF5252",a=i?"#00E5FF":"#EA80FC",o=i?"rgba(20,60,40,0.55)":"rgba(60,15,25,0.58)";e.fillStyle=o,e.beginPath(),e.roundRect(16,16,n-32,s-32,18),e.fill();const l=e.createRadialGradient(n/2,s/2,20,n/2,s/2,n*.38);l.addColorStop(0,"rgba(0,0,0,0.88)"),l.addColorStop(.55,"rgba(0,0,0,0.45)"),l.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=l,e.fillRect(0,0,n,s),e.strokeStyle=r,e.lineWidth=6,e.shadowColor=r,e.shadowBlur=14,e.beginPath(),e.roundRect(20,20,n-40,s-40,16),e.stroke(),e.shadowBlur=0,e.lineWidth=2,e.strokeStyle=a,e.beginPath(),e.roundRect(34,34,n-68,s-68,12),e.stroke();for(const[h,u]of[[48,48],[n-48,48],[48,s-48],[n-48,s-48]])e.save(),e.translate(h,u),e.strokeStyle=a,e.lineWidth=3,e.beginPath(),e.moveTo(-12,0),e.lineTo(0,-12),e.lineTo(12,0),e.lineTo(0,12),e.closePath(),e.stroke(),e.beginPath(),e.arc(0,0,16,0,Math.PI*2),e.stroke(),e.restore();e.fillStyle=i?"rgba(105,240,174,0.18)":"rgba(255,82,82,0.18)",e.font="bold 28px Segoe UI, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i?"◆ WARP ◆":"☠ VOID ☠",n/2,s-52);const c=new ln(t);return c.colorSpace=Be,c}function Dc(i,t,e){const n=document.createElement("canvas");n.width=512,n.height=128;const s=n.getContext("2d");s.fillStyle=e,s.beginPath(),s.roundRect(8,8,496,112,14),s.fill(),s.strokeStyle="rgba(255,255,255,0.15)",s.lineWidth=2,s.stroke(),s.fillStyle=t,s.font="bold 72px Segoe UI, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,256,64);const r=new ln(n);return new Zr(new $o({map:r,transparent:!0,depthTest:!1}))}function E1(i,t){i.animTime=t;const e=i.safeSide==="left",n=1+Math.sin(t*3.5)*.012;i.leftMesh.scale.set(n,n,n),i.rightMesh.scale.set(n,n,n),Fc(i.leftPortal,t,e),Fc(i.rightPortal,t,!e);for(const s of[i.leftMesh,i.rightMesh]){const r=s.children.find(a=>a.userData.isGateRim);if(r){const a=r.material,o=s===i.leftMesh?e:!e;a.opacity=.16+Math.sin(t*4.5)*.08,a.color.set(o?"#69F0AE":"#FF5252")}}i.centerWall.visible=!i.resolved}function T1(i,t){i.holoSign.position.y=2.35+Math.sin(t*1.8)*.04,i.holoSign.material.opacity=.92+Math.sin(t*3)*.05;const e=i.beam.material;e.opacity=.04+Math.sin(t*2.5)*.025,i.rings.forEach((n,s)=>{const r=n.material;r.opacity=(s===0?.28:.38)+Math.sin(t*2+s)*.06}),i.mesh.traverse(n=>{if(n instanceof Ne&&n.userData.isLamp){const s=n.material;s.emissiveIntensity=.28+Math.sin(t*4+n.position.x)*.12}})}function Ic(i,t){t.remove(i),i.traverse(e=>{var n;if(e instanceof Ne){e.geometry.dispose();const s=e.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s.dispose()}e instanceof Zr&&((n=e.material.map)==null||n.dispose(),e.material.dispose())})}const A1=new Ft(.25,.25,.08,O?10:14),C1=new je({color:"#FFE082",emissive:"#FFAB00",emissiveIntensity:.72,metalness:.88,roughness:.18});function Pr(i,t,e,n=3){const s=[],r=[-3.2,-1.6,0,1.6,3.2],a=O?Math.min(e,3):e;for(let o=0;o<a;o++){const l=r[Math.floor(Math.random()*r.length)],c=new Ne(A1,C1);c.rotation.x=Math.PI/2,c.position.set(l,.6,t+o%2*.5),c.frustumCulled=!0,i.add(c),s.push({mesh:c,z:t+o%2*.5,x:l,collected:!1})}return s}function R1(i,t,e,n){for(const s of i){if(s.collected||!Ai(s.z,n))continue;s.mesh.rotation.z+=t*3.5,s.mesh.position.y=.6+Math.sin(e*5+s.x)*.12;const r=s.mesh.material;r.emissiveIntensity=.58+Math.sin(e*8+s.x*2)*.28}}function P1(i,t,e,n){let s=0;const r=n*n;for(const a of i){if(a.collected)continue;const o=a.x-t,l=a.z-e;o*o+l*l<r&&(a.collected=!0,a.mesh.visible=!1,s+=5)}return s}function Uc(i,t){for(const e of i)t.remove(e.mesh)}const F1={"1-1":["newsbox-row","dog-fence","mailbox-row","package-spill"],"1-2":["dog-fence","party-tent","lawn-sprinkler","bin-alley"],"1-3":["party-tent","bin-alley","package-spill","hoa-gate"],"1-4":["bin-alley","hoa-gate","newsbox-row","lawn-sprinkler"],"1-5":["hoa-gate","newsbox-row","dog-fence","mailbox-row"],"2-1":["news-stand","food-cart","traffic-barricade","burst-hydrant"],"2-2":["food-cart","alien-beacon","bus-shelter","fallen-sign"],"2-3":["alien-beacon","fallen-sign","checkpoint","traffic-barricade"],"2-4":["fallen-sign","checkpoint","news-stand","burst-hydrant"],"2-5":["checkpoint","news-stand","food-cart","bus-shelter"],"3-1":["cactus-wall","mirage-rock","tumbleweed","sand-drift"],"3-2":["mirage-rock","rockslide","bone-arch","cactus-wall"],"3-3":["rockslide","sand-drift","sun-bleached-wreck","skull-rock"],"3-4":["sand-drift","skull-rock","tumbleweed","rockslide"],"3-5":["skull-rock","cactus-wall","mirage-rock","bone-arch"],"4-1":["fallen-log","temple-rubble","vine-snare","thorn-bramble"],"4-2":["temple-rubble","thorn-bramble","quicksand-pit","fallen-log"],"4-3":["thorn-bramble","flood-wreck","idol-shrine","temple-rubble"],"4-4":["flood-wreck","totem-gate","vine-snare","quicksand-pit"],"4-5":["totem-gate","fallen-log","flood-wreck","idol-shrine"]},sl={"newsbox-row":{clearHeight:.55,radius:.9,label:"News Boxes"},"dog-fence":{clearHeight:.62,radius:1,label:"Dog Fence"},"party-tent":{clearHeight:.58,radius:1.05,label:"Party Tent"},"bin-alley":{clearHeight:.72,radius:1,label:"Bin Alley"},"hoa-gate":{clearHeight:.88,radius:1.15,label:"HOA Gate"},"mailbox-row":{clearHeight:.52,radius:.88,label:"Mailboxes"},"lawn-sprinkler":{clearHeight:.48,radius:.85,label:"Sprinklers"},"package-spill":{clearHeight:.5,radius:.92,label:"Spilled Packages"},"news-stand":{clearHeight:.68,radius:.95,label:"News Stand"},"food-cart":{clearHeight:.75,radius:1,label:"Food Cart"},"alien-beacon":{clearHeight:.55,radius:.92,label:"Alien Beacon"},"fallen-sign":{clearHeight:.48,radius:.88,label:"Fallen Sign"},checkpoint:{clearHeight:.85,radius:1.12,label:"Checkpoint"},"traffic-barricade":{clearHeight:.65,radius:1,label:"Barricades"},"burst-hydrant":{clearHeight:.55,radius:.9,label:"Burst Hydrant"},"bus-shelter":{clearHeight:.82,radius:1.05,label:"Bus Shelter"},"cactus-wall":{clearHeight:.65,radius:1.05,label:"Cactus Wall"},"mirage-rock":{clearHeight:.52,radius:.95,label:"Mirage Rocks"},rockslide:{clearHeight:.58,radius:1.08,label:"Rockslide"},"sand-drift":{clearHeight:.45,radius:.9,label:"Sand Drift"},"skull-rock":{clearHeight:.62,radius:1.05,label:"Skull Rock"},tumbleweed:{clearHeight:.42,radius:.88,label:"Tumbleweed"},"bone-arch":{clearHeight:.72,radius:1,label:"Bone Arch"},"sun-bleached-wreck":{clearHeight:.55,radius:.98,label:"Sun-Bleached Wreck"},"fallen-log":{clearHeight:.55,radius:1,label:"Fallen Log"},"temple-rubble":{clearHeight:.6,radius:1.02,label:"Temple Rubble"},"thorn-bramble":{clearHeight:.68,radius:.95,label:"Thorn Bramble"},"flood-wreck":{clearHeight:.5,radius:.98,label:"Flood Wreck"},"totem-gate":{clearHeight:.9,radius:1.15,label:"Totem Gate"},"vine-snare":{clearHeight:.62,radius:.95,label:"Vine Snare"},"quicksand-pit":{clearHeight:.38,radius:.95,label:"Quicksand"},"idol-shrine":{clearHeight:.78,radius:1.02,label:"Idol Shrine"}},L1=["newsbox-row","dog-fence","mailbox-row","package-spill"];function iu(i){return F1[i]??L1}function D1(i){const t=iu(i);return t[Math.floor(Math.random()*t.length)]}function I1(i){return iu(i).map(t=>sl[t].label).join(" · ")}function U1(i,t,e,n){const s=new ie;s.position.set(e,.02,n),lv(s,t),i.add(s);const r=sl[t];return{mesh:s,x:e,z:n,kind:t,radius:r.radius,hit:!1}}function N1(i){return sl[i].clearHeight}function B1(i,t){i.userData.baseEmissiveIntensity===void 0&&(i.userData.baseEmissiveIntensity=i.emissiveIntensity);const e=i.userData.baseEmissiveIntensity;t>.08&&!i.transparent?(i.emissive.set("#FFF3E0"),i.emissiveIntensity=e+t*.18):i.emissiveIntensity=e}function k1(i,t,e,n=0){for(const s of i)s.hit||!Ai(s.z,e)||(s.mesh.traverse(r=>{if(!(r instanceof Ne))return;const a=r.userData.bobPhase??0,o=r.userData.blinkPhase??0;if(r.userData.isGlow){r.rotation.z=t*.25+s.x;const l=r.material;if(l.opacity!==void 0){const c=.32+Math.sin(t*2.5+s.z)*.1;l.opacity=c}}if(r.userData.isBob&&(r.position.y=r.userData.baseY??r.position.y,r.userData.baseY===void 0&&(r.userData.baseY=r.position.y),r.position.y=r.userData.baseY+Math.sin(t*3+s.z+a)*.05),r.userData.isBlink){const l=r.material;l.emissiveIntensity!==void 0&&(r.userData.baseEmissiveIntensity===void 0&&(r.userData.baseEmissiveIntensity=l.emissiveIntensity),l.emissiveIntensity=r.userData.baseEmissiveIntensity+.22+Math.sin(t*4+o)*.12+n*.35)}r.material instanceof je&&!r.userData.isBlink&&!r.userData.isHazardPad&&B1(r.material,n),r.userData.isSpin&&(r.rotation.y=t*2+a)}),s.mesh.position.y=Math.sin(t*2.5+s.x*.5)*.012)}function Nc(i,t){for(const e of i)t.remove(e.mesh),wn(e.mesh)}function O1(i,t,e,n=3.5){const s=[],r=[-3.2,-1.6,0,1.6,3.2];for(let a=0;a<e;a++){const o=r[Math.floor(Math.random()*r.length)],l=t+a%3*.6,c=a*1.2+Math.random(),h=ta("pickup");h.group.position.set(o,0,l),i.add(h.group),s.push({mesh:h.group,x:o,z:l,collected:!1,bobPhase:c})}return s}function z1(i,t,e){for(const n of i)n.collected||!Ai(n.z,e,O?55:75)||(n.mesh.position.x=n.x,n.mesh.position.z=n.z,Qh(n.mesh,t,n.bobPhase,!0))}function H1(i,t,e,n){let s=0,r=0;for(const a of i){if(a.collected)continue;const o=a.x-t,l=a.z-e;o*o+l*l<n*n&&(a.collected=!0,a.mesh.visible=!1,a.golden?r++:s++)}return{packages:s,golden:r}}function G1(i){const t=new Ne(new Pe(.08,.35),new ue({color:"#00E5FF",transparent:!0,opacity:.55,blending:ke,depthWrite:!1,side:We}));return t.rotation.x=-Math.PI/2,t.position.set(0,-.05,-.2),i.add(t),t}const V1={core:"#FFD54F",mid:"#FFC107",glow:"#FFEB3B",particle:"#FFFDE7",shell:"#FF8F00",ribbon:"#FFFFFF"};function W1(i,t,e){const n=ta("pickup",V1);return n.group.position.set(t,.35,e),n.group.scale.setScalar(1.25),n.outerGlow&&(n.outerGlow.material.opacity=.55),i.add(n.group),{mesh:n.group,x:t,z:e,collected:!1,bobPhase:Math.random()*6,golden:!0}}function Bc(i,t,e,n,s,r,a={}){const o=ta("mail",Xv);o.group.position.set(t+.35,1.05,e+.2);const l=o.core;l.material.emissiveIntensity=1.1,o.outerGlow&&(o.outerGlow.material.opacity=.35),i.add(o.group);const c=new V(n-t,0,s-e).normalize(),h=a.spreadIndex??0;if(h!==0){const p=h*.14,v=Math.cos(p),y=Math.sin(p),g=c.x*v-c.z*y,d=c.x*y+c.z*v;c.set(g,0,d)}const u=new V(c.x*28,2,c.z*28),f=G1(o.group);return{mesh:o.group,velocity:u,life:.85,damage:r,bobPhase:Math.random()*6,kind:"mail",pierceLeft:a.pierceLeft??0,homing:a.homing??!1,trail:f}}function kc(i,t,e,n=0,s=[],r=1){const a=[];for(const o of i){if(o.homing&&s.length){let l=null,c=1/0;for(const h of s){if(!h.alive)continue;const u=h.z-o.mesh.position.z;if(u<-2||u>45)continue;const f=(h.x-o.mesh.position.x)**2+u*u;f<c&&(c=f,l=h)}if(l){const h=new V(l.x-o.mesh.position.x,0,l.z-o.mesh.position.z);if(h.lengthSq()>.01){h.normalize().multiplyScalar(16*t*r),o.velocity.x+=h.x,o.velocity.z+=h.z;const u=Math.min(32,Math.hypot(o.velocity.x,o.velocity.z)),f=new V(o.velocity.x,0,o.velocity.z).normalize();o.velocity.x=f.x*u,o.velocity.z=f.z*u}}}o.life-=t,o.velocity.y-=o.kind==="mail"?8*t:28*t,o.mesh.position.addScaledVector(o.velocity,t),o.mesh.rotation.x+=t*(o.kind==="mail"?12:8),o.mesh.rotation.z+=t*(o.kind==="mail"?10:6),o.trail&&(o.trail.material.opacity=.35+Math.sin(n*20)*.15),Qh(o.mesh,n+o.bobPhase,o.bobPhase,!1),o.life>0&&o.mesh.position.y>.1?a.push(o):(e.remove(o.mesh),tu(o.mesh))}return a}function Oc(i,t){for(const e of i)t.remove(e.mesh),tu(e.mesh)}const Xr=O?6:8,X1={grunt:["alien","monkey","frog"],raider:["bull","fox","cat"],boss:["bull","alien","frog"]};function q1(i,t,e=.08){return D(i,{emissive:t,emissiveIntensity:e,roughness:.92,metalness:0})}function zc(i,t,e,n,s,r){const a=new ie;return a.position.set(t*.34*e,s,0),_(a,new Ft(.07*e,.075*e,.22*e,Xr),n,0,-.11*e,0),_(a,new Ft(.065*e,.07*e,.18*e,Xr),n,0,-.3*e,0),_(a,new W(.11*e,.08*e,.1*e),r??n,0,-.42*e,0),i.add(a),a}function Hc(i,t,e,n,s){const r=new ie;return r.position.set(t*.14*e,.02*e,0),_(r,new Ft(.08*e,.085*e,.2*e,Xr),n,0,-.1*e,0),_(r,new Ft(.075*e,.08*e,.16*e,Xr),n,0,-.28*e,0),_(r,new W(.14*e,.07*e,.2*e),s,0,-.4*e,.03*e),i.add(r),r}function Gc(i,t,e){_(i,new W(.34*t*e,.2*t*e,.16*t*e),D("#D4B896",{roughness:.95}),0,-.06*t,.2*t)}function Vc(i,t,e){const n=D("#0A0A0A",{emissive:e,emissiveIntensity:.35,roughness:1});for(const s of[-1,1]){const r=_(i,new W(.13*t,.17*t,.035*t),n,s*.11*t,.07*t,.24*t);r.rotation.z=s*.12,_(i,new W(.035*t,.035*t,.02*t),D("#FFFFFF",{roughness:1}),s*.14*t,.1*t,.27*t)}}function Hs(i,t,e=.1){return _(i,new W(e*t,.025*t,.02*t),D("#1A1A1A",{roughness:1}),0,-.02*t,.28*t)}function Y1(i,t,e,n){const s=n==="boss"?1.3:1;switch(e){case"alien":return Gc(i,t,s),Vc(i,t,"#76FF03"),Hs(i,t);case"monkey":{_(i,new W(.36*t,.14*t,.12*t),D("#FFCC80",{roughness:.95}),0,-.04*t,.22*t);for(const r of[-1,1])_(i,new W(.12*t,.08*t,.04*t),D("#3E2723",{roughness:1}),r*.11*t,.12*t,.25*t),_(i,new W(.08*t,.06*t,.03*t),D("#FFFFFF"),r*.11*t,.1*t,.27*t);return Hs(i,t,.08)}case"bull":{Gc(i,t,s*.9),_(i,new W(.4*t,.09*t,.06*t),D("#212121",{emissive:"#000",emissiveIntensity:.2,roughness:.7}),0,.08*t,.26*t);for(const r of[-1,1]){const a=_(i,new W(.08*t,.22*t,.08*t),D("#ECEFF1"),r*.2*t,.48*t,0);a.rotation.z=r*-.35}return Hs(i,t,.09)}case"cat":{_(i,new W(.32*t,.12*t,.1*t),D("#ECEFF1",{roughness:.95}),0,-.03*t,.22*t);for(const r of[-1,1]){const a=_(i,new W(.1*t,.12*t,.06*t),D("#78909C"),r*.18*t,.42*t,0);a.rotation.z=r*.25,_(i,new W(.09*t,.11*t,.03*t),D("#FFEB3B",{emissive:"#FBC02D",emissiveIntensity:.25}),r*.11*t,.08*t,.25*t),_(i,new W(.02*t,.07*t,.02*t),D("#111"),r*.11*t,.08*t,.27*t)}return Hs(i,t,.06)}case"fox":{_(i,new W(.34*t,.16*t,.14*t),D("#FFF3E0",{roughness:.95}),0,-.05*t,.21*t),Vc(i,t,"#FF7043");for(const r of[-1,1]){const a=_(i,new W(.1*t,.14*t,.05*t),D("#FF7043"),r*.2*t,.44*t,-.02*t);a.rotation.z=r*.3}return _(i,new W(.05*t,.05*t,.03*t),D("#212121"),0,-.01*t,.29*t),Hs(i,t,.07)}case"frog":{for(const r of[-1,1])_(i,new W(.14*t,.14*t,.12*t),D("#FFFFFF",{roughness:1}),r*.13*t,.38*t,.02*t),_(i,new W(.07*t,.07*t,.04*t),D("#111"),r*.13*t,.38*t,.09*t);return _(i,new W(.22*t,.08*t,.08*t),D("#388E3C",{roughness:.9}),0,-.04*t,.24*t),_(i,new W(.16*t,.04*t,.03*t),D("#2E7D32"),0,-.06*t,.28*t)}}}function $1(i){switch(i){case"monkey":return{skin:"#FF9800",emissive:"#F57C00",belly:"#FFF8E1",shoe:"#5D4037",paw:"#FFCC80"};case"bull":return{skin:"#795548",emissive:"#FF1744",shoe:"#3E2723"};case"cat":return{skin:"#90A4AE",emissive:"#FFC107",belly:"#ECEFF1",shoe:"#FFFFFF",paw:"#FFFFFF"};case"fox":return{skin:"#FF7043",emissive:"#FF5722",belly:"#FFF3E0",shoe:"#FFFFFF",paw:"#FFFFFF"};case"frog":return{skin:"#66BB6A",emissive:"#00E676",belly:"#A5D6A7",shoe:"#33691E"};default:return{skin:"#B8E986",emissive:"#76FF03",belly:"#E8F5C8",shoe:"#2E2E2E"}}}function j1(i,t,e,n,s){if(e==="grunt"&&n==="alien"&&_(i,new W(.18*t,.2*t,.14*t),D("#FF8F00",{emissive:"#FF6F00",emissiveIntensity:.25}),-.32*t,.48*t,-.06*t),e==="raider"&&(_(i,new W(.05*t,.05*t,.42*t),D("#00E5FF",{emissive:"#00B0FF",emissiveIntensity:.9}),.36*t,.38*t,.12*t),n==="bull"&&_(s,new W(.44*t,.1*t,.06*t),D("#E53935",{emissive:"#B71C1C",emissiveIntensity:.35}),0,.22*t,.24*t)),e==="boss"){for(const r of[-1,0,1])_(s,new W(.08*t,.14*t,.08*t),D("#FFD54F",{emissive:"#FFA000",emissiveIntensity:.5,metalness:.3}),r*.12*t,.48*t,0);_(i,new W(.62*t,.48*t,.06*t),D("#4A148C",{emissive:"#311B92",emissiveIntensity:.15,roughness:.9}),0,.44*t,-.18*t)}}function Z1(i,t,e="grunt"){const n=new ie,s=$1(i),r=q1(s.skin,s.emissive,e==="boss"?.16:.1),a=D(s.shoe,{roughness:.9}),o=s.paw?D(s.paw,{roughness:.92}):r;_(n,new W(.46*t,.44*t,.3*t),r,0,.42*t,0),s.belly&&_(n,new W(.38*t,.28*t,.08*t),D(s.belly,{roughness:.95}),0,.38*t,.14*t);const l=new ie;l.position.y=.72*t,n.add(l),_(l,new W(.48*t,.46*t,.42*t),r,0,.2*t,0);const c=Y1(l,t,i,e);j1(n,t,e,i,l);const h={leftArm:zc(n,-1,t,r,.58*t,o),rightArm:zc(n,1,t,r,.58*t,o),leftLeg:Hc(n,-1,t,r,a),rightLeg:Hc(n,1,t,r,a),mouth:c,head:l};return n.userData={limbs:h,bobPhase:Math.random()*6,species:i},n}function K1(i){const t=X1[i];return t[Math.floor(Math.random()*t.length)]}function J1(i,t,e){const n=i.userData;if(!(n!=null&&n.limbs))return;const{limbs:s,bobPhase:r,species:a}=n,o=t*11+r,l=.65,c=a==="frog"?1.25:1;s.leftArm.rotation.x=Math.sin(o)*l,s.rightArm.rotation.x=-Math.sin(o)*l,s.leftLeg.rotation.x=-Math.sin(o)*l*.75,s.rightLeg.rotation.x=Math.sin(o)*l*.75,s.head&&(s.head.rotation.y=Math.sin(t*2.2+r)*.18),s.mouth&&e&&(s.mouth.scale.y=1+Math.abs(Math.sin(t*9+r))*(a==="frog"?.5:.35)),i.position.y=Math.abs(Math.sin(t*9+r))*(.09*c)}const Q1={grunt:{scale:1.02,emissive:"#76FF03",speed:10,hp:1,label:"Grunt"},raider:{scale:1.14,emissive:"#FFC107",speed:14,hp:2,label:"Raider"},stalker:{scale:1.28,emissive:"#FF1744",speed:19,hp:3,label:"Stalker"}},tx={grunt:"grunt",raider:"raider",stalker:"boss"};function za(i,t,e,n,s={}){const r=Q1[t],a=!!s.elite,o=!!s.boss,l=o?1.5:a?1.22:1,c=tx[t],h=K1(c),u=new ie;u.position.set(e,0,n);const f=Z1(h,r.scale*l,c);f.rotation.y=Math.PI,u.add(f);const p=.44*r.scale*l,v=_(u,new un(p,O?10:14),new ue({color:"#101018",transparent:!0,opacity:.28,depthWrite:!1}),0,.02,0,!1);v.rotation.x=-Math.PI/2,v.scale.set(1.15,1,.82);let y;(a||o)&&(y=_(u,new In(p*.88,p*1.02,O?12:18),new ue({color:o?"#9A7B2F":"#6B5B45",transparent:!0,opacity:o?.2:.12,side:We,depthWrite:!1}),0,.025,0,!1),y.rotation.x=-Math.PI/2);const g=.55*r.scale*l*2.2,d=_(u,new Kt(.07*l,O?6:8,O?6:8),new ue({color:"#CC4444",transparent:!0,opacity:t==="grunt"?0:.22,depthWrite:!1}),0,g,.06*l,!1);d.visible=t!=="grunt",i.add(u);let S=r.hp+(a?1:0);return o&&(S=8),{mesh:u,x:e,z:n,tier:t,species:h,hp:S,maxHp:S,speed:r.speed*(o?.85:1),baseSpeed:r.speed*(o?.85:1),alive:!0,footShadow:v,eliteRing:y,weakPoint:d,elite:a,isBoss:o,telegraph:0,telegraphT:0}}function ex(i,t,e,n,s,r,a=0){for(const o of i){if(!o.alive)continue;const l=o.z-s,c=Ai(o.z,s,O?60:85);if(o.mesh.visible=c,!c)continue;o.tier==="stalker"&&l>2.5&&l<22&&o.telegraph===0&&(o.telegraph=1,o.telegraphT=0,r==null||r(o));let h=o.baseSpeed;const u=o.footShadow.material;if(o.telegraph===1){if(o.telegraphT+=t,h=o.baseSpeed*.35,u.color.set("#4a1520"),u.opacity=.34+Math.sin(e*16)*.1,o.eliteRing){const p=o.eliteRing.material;p.color.set("#8B3030"),p.opacity=.28+Math.sin(e*16)*.08}o.telegraphT>=.55&&(o.telegraph=2,o.telegraphT=0)}else if(o.telegraph===2)o.telegraphT+=t,h=o.baseSpeed*2.4,u.color.set("#101018"),u.opacity=.32,o.telegraphT>=.45&&(o.telegraph=0);else if(u.color.set("#101018"),u.opacity=.24+(o.elite||o.isBoss?.06:0),o.eliteRing){const p=o.eliteRing.material;p.color.set(o.isBoss?"#9A7B2F":"#6B5B45"),p.opacity=(o.isBoss?.18:.1)+Math.sin(e*3+o.z)*.04}o.z-=h*t*n,o.mesh.position.set(o.x,0,o.z);const f=o.mesh.children[0];if(f&&(J1(f,e+o.x,!0),o.telegraph===1?f.scale.setScalar(1+Math.sin(e*20)*.06):f.scale.setScalar(1),f.rotation.y=Math.PI+(O?0:Math.sin(e*3+o.x)*.08)),o.weakPoint.visible){const p=o.weakPoint.material;p.opacity=o.telegraph===1?.38:.16+Math.sin(e*6+o.x)*.06}f&&f.traverse(p=>{if(!(p instanceof Ne)||!(p.material instanceof je))return;p.userData.baseEmissiveIntensity===void 0&&(p.userData.baseEmissiveIntensity=p.material.emissiveIntensity);const v=p.userData.baseEmissiveIntensity;a>.08&&!p.material.transparent?(p.material.emissive.set("#FFF3E0"),p.material.emissiveIntensity=v+a*.18):p.material.emissiveIntensity=v})}}function Ha(i){const t=Math.random();return i>=7&&t<.25?"stalker":i>=4&&t<.45?"raider":"grunt"}function nx(i){return i==="stalker"?1.18:i==="raider"?1.05:.95}function ix(i,t){if(t.tier==="grunt")return!1;const e=t.weakPoint.position.y;return i>=e-.12}function Ga(i,t){t.remove(i.mesh),wn(i.mesh),i.alive=!1}function Wc(i,t){for(const e of i)t.remove(e.mesh),wn(e.mesh)}const Va=[{root:262,scale:[0,2,4,7,9],melody:[0,2,4,2,0,4,7,4,2,0,4,2,0,9,7,4],bass:[0,0,7,7,4,4,7,0],lead:"triangle",bpm:128},{root:247,scale:[0,2,3,7,9],melody:[4,2,0,2,4,7,9,7,4,2,0,2,4,7,4,2],bass:[0,4,0,7,4,0,7,4],lead:"square",bpm:132},{root:220,scale:[0,3,5,7,10],melody:[0,3,5,3,0,5,10,5,3,0,5,3,0,10,7,5],bass:[0,0,5,5,3,3,5,0],lead:"sawtooth",bpm:126},{root:196,scale:[0,3,5,8,10],melody:[0,5,8,5,3,0,5,10,8,5,3,0,5,8,10,8],bass:[0,5,3,0,5,8,5,3],lead:"sawtooth",bpm:124}];class sx{constructor(){U(this,"ctx",null);U(this,"masterGain",null);U(this,"sfxGain",null);U(this,"musicGain",null);U(this,"master",O?.38:.44);U(this,"musicVol",O?.11:.13);U(this,"districtId",1);U(this,"night",0);U(this,"combatLayer",0);U(this,"unlocked",!1);U(this,"musicPlaying",!1);U(this,"musicTimer",null);U(this,"step",0);U(this,"nextNoteTime",0);U(this,"themeIdx",0);U(this,"bossMode",!1)}ensure(){var t;if(!this.unlocked){this.unlocked=!0;try{this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.master,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=1,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicVol,this.musicGain.connect(this.masterGain)}catch{return null}}return((t=this.ctx)==null?void 0:t.state)==="suspended"&&this.ctx.resume(),this.ctx}freqFromScale(t,e,n=0){const s=t.scale[(e%t.scale.length+t.scale.length)%t.scale.length]??0;return t.root*Math.pow(2,(s+n*12)/12)}toneAt(t,e,n,s,r,a,o=0,l){const c=this.ctx;if(!c)return;const h=c.createOscillator(),u=c.createGain();if(h.type=s,h.frequency.setValueAtTime(t,e),o&&h.frequency.linearRampToValueAtTime(Math.max(20,t+o),e+n),u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(Math.max(1e-4,r),e+.008),u.gain.exponentialRampToValueAtTime(1e-4,e+n),l){const f=c.createBiquadFilter();f.type="lowpass",f.frequency.value=l,h.connect(f),f.connect(u)}else h.connect(u);u.connect(a),h.start(e),h.stop(e+n+.03)}noiseAt(t,e,n,s,r=0){const a=this.ctx;if(!a)return;const o=Math.max(1,Math.floor(a.sampleRate*e)),l=a.createBuffer(1,o,a.sampleRate),c=l.getChannelData(0);for(let f=0;f<o;f++)c[f]=(Math.random()*2-1)*(1-f/o);const h=a.createBufferSource();h.buffer=l;const u=a.createGain();if(u.gain.setValueAtTime(n,t),u.gain.exponentialRampToValueAtTime(1e-4,t+e),r>0){const f=a.createBiquadFilter();f.type="highpass",f.frequency.value=r,h.connect(f),f.connect(u)}else h.connect(u);u.connect(s),h.start(t),h.stop(t+e+.02)}tone(t,e,n="square",s=.12,r=0,a){const o=this.ensure();!o||!this.sfxGain||this.toneAt(t,o.currentTime,e,n,s,this.sfxGain,r,a)}noise(t,e=.06,n=0){const s=this.ensure();!s||!this.sfxGain||this.noiseAt(s.currentTime,t,e,this.sfxGain,n)}setDistrict(t){this.districtId=t,this.themeIdx=Math.min(Math.max(0,t-1),Va.length-1),this.bossMode||this.refreshMusic()}startBossMusic(){this.bossMode=!0,this.refreshMusic()}endBossMusic(){this.bossMode&&(this.bossMode=!1,this.refreshMusic())}setNight(t){Math.abs(t-this.night)<.1||(this.night=t)}setCombatIntensity(t){this.combatLayer=Math.max(0,Math.min(1,t)),this.musicGain&&(this.musicGain.gain.value=this.musicVol*(.85+this.combatLayer*.35))}refreshMusic(){this.stopMusic();const t=this.ensure();t&&(this.musicPlaying=!0,this.step=0,this.nextNoteTime=t.currentTime+.08,this.scheduleMusic())}scheduleMusic(){if(!this.musicPlaying)return;const t=this.ctx,e=this.musicGain;if(!t||!e)return;const n=Va[this.bossMode?2:this.themeIdx]??Va[0],s=60/(this.bossMode?148:n.bpm)/4,r=.18,a=this.night*.55,o=2400-a*900+this.combatLayer*400;for(;this.nextNoteTime<t.currentTime+r;){const l=this.step,c=this.nextNoteTime,h=l%16;h%4===0&&(this.toneAt(55+(h===0?8:0),c,.09,"sine",.22,e,-18),this.noiseAt(c,.03,.06,e,120)),(h===4||h===12)&&(this.noiseAt(c,.07,.09,e,800),this.toneAt(180,c,.05,"triangle",.05,e,-40)),this.combatLayer>.15&&l%2===1&&this.noiseAt(c,.025,.035*(.5+this.combatLayer),e,6e3);const u=Math.floor(l/2)%n.bass.length,f=n.bass[u]??0,p=n.root*Math.pow(2,(f-12)/12);l%2===0&&this.toneAt(p,c,s*1.8,"triangle",.1,e);const v=l%n.melody.length,y=n.melody[v]??0,g=y>=7?1:0,d=this.freqFromScale(n,y,g),S=(this.bossMode?.058:.045)+(1-a)*.02+this.combatLayer*.012;if(l%1===0&&(v%2===0||this.bossMode)&&this.toneAt(d,c,s*.9,this.bossMode?"square":n.lead,S,e,0,o),this.bossMode&&h%8===4&&this.toneAt(82,c,s*2,"sawtooth",.055,e,-10,420),l%8===0){const C=this.freqFromScale(n,n.melody[v]??0,1);this.toneAt(C,c,s*6,"sine",.018,e,0,900)}this.nextNoteTime+=s,this.step++}this.musicTimer=window.setTimeout(()=>this.scheduleMusic(),28)}stopMusic(){this.bossMode=!1,this.musicPlaying=!1,this.musicTimer!==null&&(clearTimeout(this.musicTimer),this.musicTimer=null)}shootMail(){this.tone(920,.05,"square",.07,-280,3200),this.tone(640,.07,"sine",.05,-120,2400),this.noise(.035,.04,900)}shootPackage(){this.tone(280,.12,"triangle",.09,120),this.noise(.06,.05,200)}alienHit(){this.tone(160+Math.random()*30,.07,"sawtooth",.08,-80,1800),this.noise(.04,.05)}alienKill(){this.tone(520,.06,"square",.09),this.tone(780,.09,"triangle",.07,180),this.noise(.05,.04,400)}headshot(){this.tone(1200,.04,"square",.1),this.tone(880,.07,"triangle",.08,-350),this.tone(660,.1,"sine",.06,-200,4e3)}combo(t){this.tone(440+t*35,.06,"triangle",.08)}comboStinger(){const t=this.ensure();if(!t||!this.sfxGain)return;const e=t.currentTime;[523,659,784,988].forEach((s,r)=>{this.toneAt(s,e+r*.07,.1+r*.02,"triangle",.09-r*.01,this.sfxGain,r===3?100:0,5e3)})}jump(){this.tone(280,.1,"sine",.06,220,1800),this.noise(.05,.035,300)}slide(){this.noise(.12,.07,250),this.tone(120,.1,"sawtooth",.04,-30,600)}coin(t=1){const e=880+Math.min(t,5)*40;this.tone(e,.05,"sine",.07),this.tone(e*1.5,.04,"triangle",.04)}pickup(){this.tone(660,.06,"triangle",.07),this.tone(880,.08,"sine",.06,60)}powerUp(){[523,659,784,988].forEach((t,e)=>{window.setTimeout(()=>this.tone(t,.08,"triangle",.07),e*55)})}hurt(){this.tone(90,.18,"sawtooth",.1,-25),this.tone(140,.12,"square",.07,-40),this.noise(.08,.08)}gatePass(){this.tone(660,.1,"triangle",.07),this.tone(880,.12,"sine",.06)}vaultBuzz(){this.tone(140,.14,"sawtooth",.07,30),this.tone(210,.1,"square",.05,-20)}delivery(){const t=this.ensure();if(!t||!this.sfxGain)return;const e=t.currentTime;[523,659,784,1047].forEach((n,s)=>{this.toneAt(n,e+s*.12,.2,"triangle",.1,this.sfxGain,s===3?80:0,6e3)}),this.noiseAt(e+.45,.15,.05,this.sfxGain,500)}gameOver(){const t=this.ensure();if(!t||!this.sfxGain)return;const e=t.currentTime;[392,330,262,196].forEach((n,s)=>{this.toneAt(n,e+s*.14,.22,"sawtooth",.09,this.sfxGain,-30,1200)}),this.stopMusic()}alienChatter(){Math.random()>.35||this.tone(80+Math.random()*60,.04+Math.random()*.05,"sawtooth",.04,Math.random()*40-20)}telegraphWarn(){this.tone(220,.1,"sawtooth",.05,35),this.tone(180,.08,"triangle",.04)}honk(){this.tone(196,.18,"square",.09),this.tone(247,.14,"square",.07)}ufoBeam(){this.tone(110,.28,"sawtooth",.07,45),this.noise(.2,.06,200),this.tone(880,.1,"sine",.05,-200,3e3)}nearMiss(){this.tone(620,.05,"sine",.06,140),this.noise(.03,.03,2e3)}eliteSpawn(){this.tone(880,.1,"triangle",.08),this.tone(1100,.14,"triangle",.07,80),this.noise(.06,.04,500)}quake(){this.noise(.3,.14),this.tone(55,.35,"sawtooth",.11,-25),this.tone(82,.25,"sine",.07,-15)}turbo(){this.tone(220,.2,"sawtooth",.07,180),this.noise(.12,.05,400)}slideBoost(){this.tone(420,.08,"square",.08,120,2800),this.tone(660,.14,"triangle",.07,80,3200),this.noise(.1,.05,500)}bossShoot(){this.tone(180,.08,"sawtooth",.06,-40),this.noise(.05,.04,300)}bossDefeated(){this.tone(330,.12,"square",.09),this.tone(440,.12,"square",.08,0,80),this.tone(550,.18,"triangle",.1,0,120),this.tone(660,.28,"triangle",.09,0,180),this.noise(.2,.06,200)}spectacle(t){this.noise(.14,.05+this.combatLayer*.04),t==="orbital-flash"?(this.tone(55,.35,"sawtooth",.09,-18),this.tone(110,.2,"sine",.05,40)):t==="dogfight"?(this.tone(220,.08,"square",.06),this.tone(180,.1,"square",.05,-30)):this.tone(130+Math.random()*50,.12,"sawtooth",.05,Math.random()*30)}dispose(){var t;this.stopMusic(),(t=this.ctx)==null||t.close(),this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null}}const ye=new sx;class rx{constructor(t){U(this,"group",new ie);U(this,"ufo");U(this,"groundSpot");U(this,"beam");U(this,"ring");U(this,"phase","idle");U(this,"beamX",0);U(this,"beamZ",0);U(this,"timer",0);U(this,"scanDir",1);U(this,"ufoOffsetX",0);U(this,"exposure",0);U(this,"warned",!1);this.scene=t,this.ufo=this.buildUfo(),this.group.add(this.ufo);const e=O?20:28;this.groundSpot=_(this.group,new un(1.05,e),new ue({color:"#69F0AE",transparent:!0,opacity:.55,blending:ke,depthWrite:!1}),0,.04,0,!1),this.groundSpot.rotation.x=-Math.PI/2,this.groundSpot.scale.set(1.15,1.15,1),this.ring=_(this.group,new In(.92,1.18,e),new ue({color:"#B2FF59",transparent:!0,opacity:.42,blending:ke,depthWrite:!1,side:We}),0,.045,0,!1),this.ring.rotation.x=-Math.PI/2,this.beam=_(this.group,new Ft(.08,1.05,14,e,1,!0),new ue({color:"#80DEEA",transparent:!0,opacity:.28,side:We,depthWrite:!1,blending:ke}),0,7,0,!1),this.group.visible=!1,t.add(this.group)}buildUfo(){const t=new ie,e=O?10:14;_(t,new Ft(.65,1.05,.16,e),new je({color:"#546E7A",metalness:.65,roughness:.3,emissive:"#00E676",emissiveIntensity:.35}),0,0,0),_(t,new En(.88,.04,6,e),new ue({color:"#69F0AE",transparent:!0,opacity:.85}),0,-.05,0,!1),_(t,new Kt(.34,e,e/2,0,Math.PI*2,0,Math.PI/2),new ue({color:"#80DEEA",transparent:!0,opacity:.65,blending:ke,depthWrite:!1}),0,.14,0,!1);for(let n=0;n<6;n++){const s=n/6*Math.PI*2;_(t,new Kt(.05,6,6),new ue({color:n%2===0?"#FFEB3B":"#FF5252",transparent:!0,opacity:.9}),Math.cos(s)*.78,-.02,Math.sin(s)*.78,!1)}return t}get active(){return this.phase!=="idle"}start(t,e){this.phase="incoming",this.timer=0,this.exposure=0,this.warned=!1,this.beamZ=e+42,this.beamX=gs.clamp(t,-2.5,2.5),this.scanDir=Math.random()<.5?1:-1,this.ufoOffsetX=this.scanDir>0?-14:14,this.group.visible=!0,this.syncPose(0)}syncPose(t){const e=this.beamX+this.ufoOffsetX*(this.phase==="incoming"?1:this.phase==="exit"?1.4:.15),n=14+Math.sin(t*2.2)*.35;this.ufo.position.set(e,n,this.beamZ),this.ufo.rotation.y=t*1.8,this.groundSpot.position.set(this.beamX,.04,this.beamZ),this.ring.position.set(this.beamX,.045,this.beamZ),this.beam.position.set(this.beamX,7,this.beamZ);const s=1+Math.sin(t*8)*.08;this.groundSpot.scale.set(1.15*s,1.15*s,1),this.groundSpot.material.opacity=.4+Math.sin(t*6)*.12,this.ring.material.opacity=.32+Math.sin(t*5+1)*.1,this.ring.rotation.z=t*2.4,this.beam.material.opacity=.22+Math.sin(t*7)*.08}update(t,e,n){if(this.phase!=="idle"){if(this.timer+=t,this.phase==="incoming")this.ufoOffsetX=gs.lerp(this.ufoOffsetX,0,t*1.8),this.timer>=1.6&&(this.phase="scanning",this.timer=0);else if(this.phase==="scanning")this.beamX+=this.scanDir*t*4.2,this.beamX>3.4?(this.beamX=3.4,this.scanDir=-1):this.beamX<-3.4&&(this.beamX=-3.4,this.scanDir=1),this.timer>=4.8&&(this.phase="exit",this.timer=0);else if(this.phase==="exit"&&(this.ufoOffsetX=gs.lerp(this.ufoOffsetX,this.scanDir*18,t*2.5),this.timer>=1.4)){this.end();return}if(Math.abs(this.beamZ-n)>(O?75:95)){this.end();return}this.syncPose(e)}}consumeWarning(){return this.warned||this.phase!=="scanning"||this.timer>.35?!1:(this.warned=!0,!0)}tickExposure(t,e,n,s){if(this.phase!=="scanning")return this.exposure=0,!1;if(s)return this.exposure=Math.max(0,this.exposure-t*4),!1;const r=Math.abs(n-this.beamZ)<2.2,a=Math.abs(e-this.beamX)<1.05;return r&&a?(this.exposure+=t,this.exposure>=.55):(this.exposure=Math.max(0,this.exposure-t*2.5),!1)}getExposure(){return this.exposure}end(){this.phase="idle",this.group.visible=!1,this.exposure=0}dispose(){this.scene.remove(this.group),wn(this.group)}}const ax={slowmo:{core:"#80DEEA",mid:"#00BCD4",glow:"#00E5FF",particle:"#E0F7FA",shell:"#4DD0E1",bad:!1},fastshot:{core:"#FFEB3B",mid:"#FF9800",glow:"#FF6D00",particle:"#FFD54F",shell:"#FF5722",bad:!1},invincible:{core:"#E1F5FE",mid:"#29B6F6",glow:"#00B0FF",particle:"#FFFFFF",shell:"#0288D1",bad:!1},health:{core:"#A5D6A7",mid:"#43A047",glow:"#00E676",particle:"#C8E6C9",shell:"#2E7D32",bad:!1},turbo:{core:"#FF8A65",mid:"#FF3D00",glow:"#FF1744",particle:"#FFAB91",shell:"#D50000",bad:!0},triplefire:{core:"#FFCC80",mid:"#FF6D00",glow:"#FF9100",particle:"#FFE0B2",shell:"#E65100",bad:!1}},cs=O?10:14,Xc=O?4:6;function xn(i,t,e=1){return D(i,{emissive:i,emissiveIntensity:t,transparent:e<1,opacity:e,roughness:.15,metalness:.05})}function qc(i,t){return new ue({color:i,transparent:!0,opacity:t,depthWrite:!1,blending:ke})}function ox(i,t,e){const n=new ie;n.userData.orbit=e;for(let s=0;s<Xc;s++){const r=s/Xc*Math.PI*2,a=_(n,new Kt(.045+s%3*.015,6,6),xn(t,1.4,.92),Math.cos(r)*e,Math.sin(s*1.7)*.08,Math.sin(r)*e,!1);a.userData.angle=r,a.userData.orbit=e,a.userData.wobble=s*1.3}return i.add(n),n}function lx(i,t,e){const n=new ie;if(n.position.y=.55,t==="slowmo")for(const[s,r]of[[0,.28],[.12,.22],[-.1,.24]]){const a=_(n,new En(r,.025,6,O?12:16),xn(e.glow,.9,.75),0,s,0,!1);a.rotation.x=Math.PI/2+s*.4,a.rotation.z=s*2}else if(t==="fastshot")for(let s=0;s<5;s++){const r=s/5*Math.PI*2,a=_(n,new Dn(.07,.22,4),xn(e.glow,1.1),Math.cos(r)*.18,Math.sin(s)*.04,Math.sin(r)*.18,!1);a.rotation.x=Math.PI/2,a.rotation.z=r}else if(t==="invincible"){for(let s=0;s<4;s++){const r=_(n,new W(.04,.34,.04),xn("#FFFFFF",1.5),0,0,0,!1);r.rotation.z=s/4*Math.PI*2,r.rotation.x=.5+s*.2,r.position.set(Math.cos(r.rotation.z)*.08,Math.sin(s)*.06,Math.sin(r.rotation.z)*.08)}_(n,new nr(.12,0),xn(e.particle,1.3),0,0,0,!1)}else if(t==="health"){for(let s=0;s<4;s++){const r=s/4*Math.PI*2+.4,a=_(n,new Kt(.1,6,6),xn(e.mid,1),Math.cos(r)*.3,-.08+Math.sin(s)*.05,Math.sin(r)*.3,!1);a.scale.set(1.4,.45,.8),a.rotation.y=r}_(n,new Kt(.14,8,8),xn("#FFFFFF",.8),0,.02,.08,!1)}else if(t==="triplefire")for(const[s,r,a]of[[-.22,.12,.35],[0,0,0],[.22,.12,-.35]]){const o=_(n,new Ft(.04,.05,.26,5),xn(e.glow,1.05),s,.02,r,!1);o.rotation.x=Math.PI/2,o.rotation.z=a,_(n,new Dn(.06,.14,4),xn("#FFFFFF",1.2),s+Math.sin(a)*.14,.06,r+Math.cos(a)*.14,!1).rotation.set(Math.PI/2,0,a)}else if(t==="turbo"){for(let s=0;s<6;s++){const r=s/6*Math.PI*2,a=_(n,new Dn(.06,.28,3),xn("#FF1744",1.2),Math.cos(r)*.2,0,Math.sin(r)*.2,!1);a.rotation.x=Math.PI/2,a.rotation.z=r+Math.PI}_(n,new W(.28,.06,.06),D("#212121",{emissive:"#FF1744",emissiveIntensity:.4}),0,.18,0,!1)}else{_(n,new Kt(.16,8,8),xn(e.particle,.7,.55),0,0,0,!1),_(n,new Kt(.22,8,8),xn(e.mid,.5,.35),0,0,0,!1);for(let s=0;s<3;s++){const r=s/3*Math.PI*2;_(n,new En(.12+s*.05,.018,6,10),xn(e.glow,.85,.6),0,0,0,!1).rotation.set(Math.PI/2,r,0)}}return i.add(n),n}function cx(i,t,e,n){const s=ax[t],r=new ie;r.position.set(e,0,n);const a=_(r,new In(.42,.72,O?14:22),qc(s.glow,s.bad?.28:.38),0,.04,0,!1);a.rotation.x=-Math.PI/2,r.userData.groundRing=a;const o=_(r,new Kt(.52,cs,cs),qc(s.glow,s.bad?.14:.2),0,.55,0,!1);r.userData.outerGlow=o;const l=_(r,new Kt(.4,cs,cs),xn(s.shell,.55,.42),0,.55,0,!1);r.userData.midShell=l;const c=_(r,new Kt(.3,cs,cs),xn(s.core,s.bad?1.15:1.35),0,.55,0,!1);return r.userData.core=c,_(r,new Kt(.14,8,8),xn("#FFFFFF",s.bad?.9:1.4,.85),0,.58,.1,!1),r.userData.particles=ox(r,s.particle,.48),r.userData.accent=lx(r,t,s),s.bad&&(_(r,new In(.58,.66,O?12:16),new ue({color:"#FF1744",transparent:!0,opacity:.45,side:We}),0,.55,0,!1).rotation.x=Math.PI/2),i.add(r),{mesh:r,x:e,z:n,kind:t,collected:!1,bobPhase:Math.random()*6,isBad:s.bad}}function hx(i,t,e){for(const n of i){if(n.collected||!Ai(n.z,e,O?48:62))continue;const s=.52+Math.sin(t*3+n.bobPhase)*.12;n.mesh.position.y=s-.52,n.mesh.rotation.y=t*1.6;const r=n.mesh.userData.core,a=n.mesh.userData.outerGlow,o=n.mesh.userData.midShell,l=n.mesh.userData.groundRing,c=n.mesh.userData.particles,h=n.mesh.userData.accent,u=1+Math.sin(t*4.5+n.bobPhase)*.06;if(r&&r.scale.setScalar(u),a){const f=1+Math.sin(t*3.2+n.bobPhase)*.1;a.scale.setScalar(f);const p=a.material;p.opacity=(n.isBad?.14:.2)+Math.sin(t*5+n.bobPhase)*.04}o&&(o.rotation.y=-t*2.4),l&&l.scale.setScalar(1+Math.sin(t*4+n.bobPhase)*.07),h&&(h.rotation.y=t*2.8),c&&(c.rotation.y=t*1.8,c.children.forEach((f,p)=>{if(!(f instanceof Ne))return;const v=f.userData.angle+t*(1.2+p%3*.15),y=f.userData.orbit;f.position.x=Math.cos(v)*y,f.position.z=Math.sin(v)*y,f.position.y=Math.sin(t*4+f.userData.wobble)*.1}))}}function ux(i,t,e,n){for(const s of i){if(s.collected)continue;const r=s.x-t,a=s.z-e;if(r*r+a*a<n*n)return s.collected=!0,s.mesh.visible=!1,s.kind}return null}function fx(){const i=Math.random();return i<.08?"health":i<.15?"turbo":i<.22?"slowmo":i<.3?"triplefire":i<.64?"fastshot":"invincible"}function Yc(i,t){for(const e of i)t.remove(e.mesh),wn(e.mesh)}const dx={slowmo:"Slow-Mo!",fastshot:"Fast Shot!",invincible:"Invincible!",health:"❤ +1 Health!",turbo:"⚠ Overdrive — too fast!",triplefire:"🔫 Triple Fire!"},Zs=[-3.2,-1.6,0,1.6,3.2];function Oi(){return Zs[Math.floor(Math.random()*Zs.length)]}function px(){const i=Math.floor(Math.random()*(Zs.length-1));return[Zs[i],Zs[i+1]]}let Wa=!1;function mx(i){Wa=!Wa;const t=i<2||Wa?"jump":"slide",e=i>=5?.14:i>=3?.09:.04;return Math.random()<e?{span:"full",clearance:Math.random()<.5?"jump":"slide",motion:"sweep"}:Math.random()<.52?{span:"full",clearance:t,motion:"static"}:{span:"lane-2",clearance:t,motion:"static",lanes:px()}}function gx(i){const t=Math.max(20,32-i*1);return O?t+8:t}function $c(){if(Math.random()<(O?.06:.12)){const i=new Set,t=[];for(;t.length<2;){const e=Oi();i.has(e)||(i.add(e),t.push(e))}return t}return[Oi()]}function vx(i){return D1(i)}function xx(i){const t=Math.max(32,48-i*.85);return O?t+14:t}function _x(i){return Math.max(11,22-i*1.35)}function yx(){return 32+Math.random()*22}function bx(){return 22+Math.random()*18}const Mx=O?28:48,Xa=new W(.1,.1,.1),jc=new Pe(.14,.04);class Sx{constructor(t){U(this,"particles",[]);U(this,"scene");U(this,"materials",new Map);this.scene=t;for(let e=0;e<Mx;e++){const n=this.getMaterial("#ffffff"),s=new Ne(Xa,n);s.visible=!1,this.scene.add(s),this.particles.push({mesh:s,vel:new V,life:0,maxLife:1,active:!1})}}getMaterial(t,e=!0){const n=`${t}|${e?1:0}`;let s=this.materials.get(n);return s||(s=new ue({color:t,transparent:!0,blending:e?ke:wi,depthWrite:!1}),this.materials.set(n,s)),s}burst(t,e,n,s,r=12,a=4){const o=O?Math.min(r,10):r;let l=0;for(const c of this.particles){if(l>=o)break;c.active||(c.active=!0,c.mesh.visible=!0,c.mesh.geometry=Xa,c.mesh.material=this.getMaterial(s),c.mesh.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),c.mesh.position.set(t,e,n),c.mesh.scale.setScalar(.8+Math.random()*.6),c.vel.set((Math.random()-.5)*a,Math.random()*a*.85+1.2,(Math.random()-.5)*a),c.maxLife=.55+Math.random()*.45,c.life=c.maxLife,l++)}}sparkStreak(t,e,n,s,r=4){let a=0;const o=O?3:r;for(const l of this.particles){if(a>=o)break;l.active||(l.active=!0,l.mesh.visible=!0,l.mesh.geometry=jc,l.mesh.material=this.getMaterial(s),l.mesh.position.set(t+(Math.random()-.5)*.4,e,n+(Math.random()-.5)*.4),l.mesh.rotation.y=Math.random()*Math.PI*2,l.mesh.rotation.z=(Math.random()-.5)*.8,l.mesh.scale.setScalar(1.2+Math.random()),l.vel.set(0,.5+Math.random(),-2-Math.random()*2),l.maxLife=.25+Math.random()*.2,l.life=l.maxLife,a++)}}collectBurst(t,e){this.burst(t,1,e,"#FFE082",8,3.5),this.sparkStreak(t,1.1,e,"#FFD54F",3),O||this.burst(t,1.2,e,"#FF9800",5,2.5)}hitBurst(t,e){this.burst(t,1,e,"#FF5252",O?8:12,5.5),this.sparkStreak(t,1,e,"#FF1744",4)}alienHit(t,e,n,s=!1){const r=s?"#EA80FC":"#76FF03";this.burst(t,e,n,r,O?6:10,s?6.5:4.5),this.sparkStreak(t,e,n,s?"#E040FB":"#B2FF59",s?5:3)}muzzleFlash(t,e,n){this.burst(t,e,n,"#00E5FF",O?4:6,3.5),this.sparkStreak(t,e,n,"#FFF59D",O?2:4)}gateBurst(t,e,n){this.burst(t,2,e,n,O?12:18,6.5),this.sparkStreak(t,2.2,e,n,O?2:5)}update(t){for(const e of this.particles){if(!e.active)continue;e.life-=t,e.vel.y-=14*t,e.mesh.position.addScaledVector(e.vel,t);const n=Math.max(0,e.life/e.maxLife);e.mesh.material.opacity=n,e.mesh.scale.multiplyScalar(.985),e.life<=0&&(e.active=!1,e.mesh.visible=!1)}}clear(){for(const t of this.particles)t.active=!1,t.mesh.visible=!1}dispose(){this.clear();for(const t of this.particles)this.scene.remove(t.mesh);Xa.dispose(),jc.dispose(),this.materials.forEach(t=>t.dispose()),this.materials.clear(),this.particles=[]}}class wx{constructor(){U(this,"intensity",0)}shake(t){this.intensity=Math.max(this.intensity,t)}apply(t,e,n){this.intensity>.001?(t.position.x=e.x+(Math.random()-.5)*this.intensity,t.position.y=e.y+(Math.random()-.5)*this.intensity*.5,t.position.z=e.z+(Math.random()-.5)*this.intensity*.3,this.intensity*=.88):t.position.copy(e),t.lookAt(n)}}const su={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ex=new tl(-1,1,1,-1,0,1);class Tx extends _n{constructor(){super(),this.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Oe([0,2,0,0,2,0],2))}}const Ax=new Tx;class rl{constructor(t){this._mesh=new Ne(Ax,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ex)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Cx extends Fs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Mn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Gr.clone(t.uniforms),this.material=new Mn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new rl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zc extends Fs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Rx extends Fs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Px{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Ct);this._width=n.width,this._height=n.height,e=new Yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cx(su),this.copyPass.material.blending=ui,this.clock=new ud}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Zc!==void 0&&(a instanceof Zc?n=!0:a instanceof Rx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Fx extends Fs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Yt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Lx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class As extends Fs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new Yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Yn(r,a,{type:fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Yn(r,a,{type:fi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Yn(r,a,{type:fi});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=Lx;this.highPassUniforms=Gr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ct(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=su;this.copyUniforms=Gr.clone(h.uniforms),this.blendMaterial=new Mn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ke,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Yt,this.oldClearAlpha=1,this.basic=new ue,this.fsQuad=new rl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ct(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=As.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=As.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Mn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Mn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}As.BlurDirectionX=new Ct(1,0);As.BlurDirectionY=new Ct(0,1);class Dx extends Fs{constructor(){super();U(this,"material");U(this,"fsQuad");this.material=new Mn({uniforms:{tDiffuse:{value:null},vignette:{value:O?.12:.28},aberration:{value:O?8e-4:.0016},saturation:{value:O?1.1:1.14},pathLift:{value:O?.14:.1},pulse:{value:0}},vertexShader:`
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
      `}),this.fsQuad=new rl(this.material)}setPulse(e){this.material.uniforms.pulse.value=e}render(e,n,s){this.material.uniforms.tDiffuse.value=s.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ix{constructor(t,e,n){U(this,"composer");U(this,"bloomPass");U(this,"gradePass");this.renderer=t,this.composer=new Px(t),this.composer.addPass(new Fx(e,n)),this.bloomPass=new As(new Ct(1,1),O?.34:.38,O?.32:.36,O?.72:.68),this.composer.addPass(this.bloomPass),this.gradePass=new Dx,this.gradePass.renderToScreen=!0,this.composer.addPass(this.gradePass)}setSize(t,e){this.composer.setSize(t,e);const n=Math.max(1,Math.floor(t*dc)),s=Math.max(1,Math.floor(e*dc));this.bloomPass.resolution.set(n,s)}setBloomStrength(t){this.bloomPass.strength=t}setGradePulse(t){this.gradePass.setPulse(t)}render(){this.composer.render()}dispose(){this.gradePass.dispose(),this.composer.dispose()}}class Ux{constructor(){U(this,"nextEventZ",55);U(this,"pulse",0);U(this,"combatIntensity",0);U(this,"active",null);U(this,"activeT",0)}reset(){this.nextEventZ=55+Math.random()*20,this.pulse=0,this.combatIntensity=0,this.active=null,this.activeT=0}getPostPulse(){return this.pulse}getCombatIntensity(){return this.combatIntensity}getActive(){return this.active}bumpCombat(t){this.combatIntensity=Math.min(1,this.combatIntensity+t),this.pulse=Math.min(1,this.pulse+t*.35)}update(t,e){if(this.combatIntensity=Math.max(0,this.combatIntensity-t*.08),this.pulse=Math.max(0,this.pulse-t*1.4),this.active&&(this.activeT-=t,this.activeT<=0&&(this.active=null)),e.playerZ<this.nextEventZ)return null;this.nextEventZ=e.playerZ+(O?52:46)+Math.random()*28;const n=this.pickEvent(e);return this.active=n,this.activeT=n.duration,this.pulse=Math.min(1,this.pulse+n.pulse),this.combatIntensity=Math.min(1,this.combatIntensity+n.pulse*.5),n}pickEvent(t){const e=Math.random();return t.night>.45&&e<.28?{kind:"orbital-flash",message:"☄ Jump bar incoming!",pulse:.55,duration:2.8,gameplay:!0}:e<.45?{kind:"dogfight",message:"",pulse:.35,duration:4,gameplay:!1}:e<.62?{kind:"meteor-streak",message:"🌠 Coin shower!",pulse:.4,duration:3.2,gameplay:!0}:e<.78?{kind:"energy-surge",message:"⚡ Slide under the surge!",pulse:.45,duration:2.5,gameplay:!0}:t.runnerCount>=3&&e<.9?{kind:"alien-rain",message:"👾 Reinforcements dropping!",pulse:.38,duration:2.2,gameplay:!0}:{kind:"distant-barrage",message:"",pulse:.42,duration:3,gameplay:!1}}}const ru="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content";function au(){const i=window.visualViewport;return i?{width:Math.max(1,Math.round(i.width)),height:Math.max(1,Math.round(i.height)),offsetTop:i.offsetTop,offsetLeft:i.offsetLeft,scale:i.scale}:{width:Math.max(1,window.innerWidth),height:Math.max(1,window.innerHeight),offsetTop:0,offsetLeft:0,scale:1}}const qr=new Set;function Nx(i){return qr.add(i),()=>qr.delete(i)}function Bx(){window.scrollTo(0,0);const i=window.visualViewport;if(!i||i.scale===1)return;const t=document.querySelector('meta[name="viewport"]');t&&t.setAttribute("content",ru)}function Gi(){const i=au();if(!O)return i;Bx(),window.scrollTo(0,0);const t=document.getElementById("app"),e=document.getElementById("game-canvas");if(!t)return i;const{width:n,height:s,offsetLeft:r,offsetTop:a}=i;return t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width=`${n}px`,t.style.height=`${s}px`,t.style.padding="0",t.style.margin="0",t.style.overflow="hidden",t.style.transform=`translate(${-r}px, ${-a}px)`,t.style.transformOrigin="top left",t.style.willChange="transform",e&&(e.style.width=`${n}px`,e.style.height=`${s}px`),i}function hs(){O&&Gi(),qr.forEach(i=>i())}function kx(){const i=document.querySelector('meta[name="viewport"]');i&&i.setAttribute("content",ru),Gi(),window.addEventListener("resize",hs),window.addEventListener("orientationchange",()=>{window.scrollTo(0,0),setTimeout(hs,50),setTimeout(hs,150),setTimeout(hs,400)}),window.visualViewport&&(window.visualViewport.addEventListener("resize",hs),window.visualViewport.addEventListener("scroll",hs))}function Fr(i){document.body.classList.toggle("game-active",i),i&&O&&(Gi(),requestAnimationFrame(()=>{Gi(),qr.forEach(t=>t())}))}const No=[{id:"johnny",name:"Johnny",tagline:"Classic courier",skin:"#FFE0BD",jacket:"#1565C0",jacketLight:"#42A5F5",jacketTrim:"#FFD54F",hat:"#D32F2F",hatBrim:"#B71C1C",packMain:"#78909C",packDark:"#546E7A",packTrim:"#ECEFF1"},{id:"dingo",name:"Dingo",tagline:"Night-shift legend",skin:"#3D2314",jacket:"#1A237E",jacketLight:"#3949AB",jacketTrim:"#00E676",hat:"#00897B",hatBrim:"#00695C",packMain:"#2E7D32",packDark:"#1B5E20",packTrim:"#A5D6A7"},{id:"mert",name:"Mert",tagline:"Desert-route pro",skin:"#C68642",jacket:"#4E342E",jacketLight:"#795548",jacketTrim:"#FFAB40",hat:"#EF6C00",hatBrim:"#E65100",packMain:"#6D4C41",packDark:"#4E342E",packTrim:"#FFCC80"}];function al(i){return No.find(t=>t.id===i)??No[0]}function nn(i,t,e,n,s,r,a,o){return{id:i,district:t,name:e,briefing:n,difficulty:a,timeLimit:o,segments:[...r.map(l=>({kind:"gate",z:l.z,safe:l.safe})),{kind:"dropoff",z:s}]}}const Vi=[nn("1-1",1,"First Delivery","Jump/slide electric bars · dodge props · shoot aliens · collect 📦",750,[{z:160,safe:"left"},{z:360,safe:"right"},{z:580,safe:"left"}],2,180),nn("1-2",1,"Dog Park Detour","Aliens run AT you — dodge or shoot them! Colors = difficulty.",850,[{z:200,safe:"right"},{z:450,safe:"left"},{z:700,safe:"right"}],3,200),nn("1-3",1,"Block Party Run","Grab power-ups: Slow-Mo, Fast Shot, Shield.",900,[{z:220,safe:"left"},{z:480,safe:"right"},{z:720,safe:"left"}],4,220),nn("1-4",1,"Suburban Sprint","Center lane gets blocked too — stay alert!",950,[{z:180,safe:"right"},{z:420,safe:"left"},{z:650,safe:"right"},{z:850,safe:"left"}],5,240),nn("1-5",1,"Boss: HOA Alien","Longer route — extra aliens and hazards. Deliver!",1050,[{z:250,safe:"left"},{z:520,safe:"right"},{z:780,safe:"left"},{z:980,safe:"right"}],6,280),nn("2-1",2,"Morning Commute","Downtown speed run — faster pace!",920,[{z:200,safe:"right"},{z:480,safe:"left"},{z:750,safe:"right"}],5,240),nn("2-2",2,"Food Truck Alley","Dense hazards — power-ups save lives.",950,[{z:220,safe:"left"},{z:500,safe:"right"},{z:780,safe:"left"}],6,260),nn("2-3",2,"Alien Territory","Yellow raiders need 2 hits. Red stalkers need 3.",1e3,[{z:240,safe:"right"},{z:520,safe:"left"},{z:820,safe:"right"}],7,280),nn("2-4",2,"Rush Hour","Everything at once. Shield up!",1050,[{z:200,safe:"left"},{z:450,safe:"right"},{z:700,safe:"left"},{z:920,safe:"right"}],8,300),nn("2-5",2,"Boss: Alien Commander","Tough finale — shoot, dodge, deliver!",1150,[{z:250,safe:"left"},{z:550,safe:"right"},{z:850,safe:"left"},{z:1050,safe:"right"}],9,320),nn("3-1",3,"Scorpion Route","Blazing sand — watch for heat mirages and raiders in the haze.",980,[{z:210,safe:"left"},{z:500,safe:"right"},{z:780,safe:"left"}],7,280),nn("3-2",3,"Mirage Mile","Desert gates come fast. Stock packages at oases.",1020,[{z:230,safe:"right"},{z:520,safe:"left"},{z:820,safe:"right"}],8,300),nn("3-3",3,"Canyon Dash","Narrow canyon run — aliens love the shade.",1080,[{z:200,safe:"left"},{z:480,safe:"right"},{z:760,safe:"left"},{z:980,safe:"right"}],8,310),nn("3-4",3,"Sandstorm Alley","Low visibility — listen for stalker footsteps.",1120,[{z:240,safe:"right"},{z:540,safe:"left"},{z:860,safe:"right"}],9,320),nn("3-5",3,"Boss: Dune Warlord","Hardest desert run — reach the depot!",1200,[{z:260,safe:"left"},{z:560,safe:"right"},{z:880,safe:"left"},{z:1080,safe:"right"}],10,340),nn("4-1",4,"Canopy Run","Welcome to the jungle — vines, ruins, and ambush aliens.",1e3,[{z:220,safe:"right"},{z:510,safe:"left"},{z:800,safe:"right"}],9,300),nn("4-2",4,"Temple Steps","Ancient gates guard the old mail route.",1040,[{z:240,safe:"left"},{z:530,safe:"right"},{z:840,safe:"left"}],10,320),nn("4-3",4,"Vine Gauntlet","Thick cover — stalkers burst from the trees.",1100,[{z:210,safe:"right"},{z:500,safe:"left"},{z:790,safe:"right"},{z:1e3,safe:"left"}],10,330),nn("4-4",4,"Monsoon Rush","Wet roads, wild power-ups, heavy traffic.",1140,[{z:250,safe:"left"},{z:550,safe:"right"},{z:870,safe:"left"}],11,350),nn("4-5",4,"Boss: Jungle Overlord","Jungle gauntlet — deliver at the depot!",1250,[{z:270,safe:"right"},{z:580,safe:"left"},{z:900,safe:"right"},{z:1120,safe:"left"}],12,360)];function Ox(i){return Vi.find(t=>t.id===i)}function Kc(i){const t=Vi.findIndex(e=>e.id===i);return t<0||t>=Vi.length-1?null:Vi[t+1].id}function zx(){return[...new Set(Vi.map(i=>i.district))].sort((i,t)=>i-t)}const Jc=[{id:1,name:"Sunny Suburbs",sky:"#29B6F6",skyBottom:"#4FC3F7",fog:"#B3E5FC",ground:"#689F38",ambient:.72,sun:1,fogNear:50,fogFar:200,buildingHue:.12},{id:2,name:"Busy Downtown",sky:"#FF7043",skyBottom:"#FFAB91",fog:"#FFCC80",ground:"#607D8B",ambient:.72,sun:1.05,fogNear:35,fogFar:160,buildingHue:.08},{id:3,name:"Sunbleached Desert",sky:"#FFA726",skyBottom:"#FFE082",fog:"#FFE0B2",ground:"#D4A574",ambient:.78,sun:1.1,fogNear:45,fogFar:190,buildingHue:.09},{id:4,name:"Emerald Jungle",sky:"#00897B",skyBottom:"#26A69A",fog:"#80CBC4",ground:"#388E3C",ambient:.78,sun:.95,fogNear:32,fogFar:150,buildingHue:.32},{id:5,name:"Industrial Rain",sky:"#546E7A",skyBottom:"#78909C",fog:"#78909C",ground:"#455A64",ambient:.45,sun:.5,fogNear:25,fogFar:110,buildingHue:.55},{id:6,name:"Neon Night",sky:"#1A237E",skyBottom:"#311B92",fog:"#311B92",ground:"#263238",ambient:.35,sun:.3,fogNear:20,fogFar:100,buildingHue:.75},{id:7,name:"The Black Zone",sky:"#1B0000",skyBottom:"#4A0000",fog:"#4A0000",ground:"#212121",ambient:.25,sun:.15,fogNear:15,fogFar:80,buildingHue:0}];function Bo(i){return Jc[Math.min(i-1,Jc.length-1)]}class Yr{constructor(t,e,n){U(this,"canvas");U(this,"renderer");U(this,"pipeline",null);U(this,"scene");U(this,"camera");U(this,"world");U(this,"particles");U(this,"shake");U(this,"player");U(this,"convoy");U(this,"level");U(this,"run",{...cl});U(this,"save");U(this,"routeGates",[]);U(this,"electricBars",[]);U(this,"obstacles",[]);U(this,"runners",[]);U(this,"coins",[]);U(this,"packagePickups",[]);U(this,"powerUps",[]);U(this,"throws",[]);U(this,"dropoff");U(this,"keys",new Set);U(this,"touchSteerLeft",!1);U(this,"touchSteerRight",!1);U(this,"inputCleanup",null);U(this,"running",!1);U(this,"dead",!1);U(this,"elapsed",0);U(this,"levelLength",200);U(this,"roadHalfWidth",4.2);U(this,"steerSpeed",11);U(this,"obstacleCooldown",0);U(this,"hurtIFrames",0);U(this,"gameTime",0);U(this,"smokeTimer",0);U(this,"dashTimer",0);U(this,"dashActive",!1);U(this,"abilityCd",0);U(this,"abilityMaxCd",12);U(this,"shootCd",0);U(this,"mailGunDamage",3);U(this,"mailGunRate",.22);U(this,"startPackages",0);U(this,"pickupRadius",2.2);U(this,"specialCharge",0);U(this,"specialShakesLeft",0);U(this,"specialShakeTimer",0);U(this,"quakeRadius",7.5);U(this,"invincibleTimer",0);U(this,"slowMoTimer",0);U(this,"fastShotTimer",0);U(this,"turboTimer",0);U(this,"slideBoostTimer",0);U(this,"tripleFireTimer",0);U(this,"timeScale",1);U(this,"autoFireEnabled",!1);U(this,"viewportCleanup",null);U(this,"lastVpW",0);U(this,"lastVpH",0);U(this,"lastVpScale",1);U(this,"lastVpOffTop",0);U(this,"lastVpOffLeft",0);U(this,"forkHint","");U(this,"vaultHint","");U(this,"powerUpLabel","");U(this,"deathReason","stolen");U(this,"nextBarZ",35);U(this,"nextObstacleZ",55);U(this,"nextRunnerZ",50);U(this,"nextPowerUpZ",80);U(this,"nextPackageZ",25);U(this,"nextCoinZ",45);U(this,"spawnHorizon",0);U(this,"comboCount",0);U(this,"comboTimer",0);U(this,"nextMiniEventZ",200);U(this,"nextUfoHazardZ",130);U(this,"ufoHazard",null);U(this,"blackoutTimer",0);U(this,"shootSpread",!1);U(this,"shootPierce",0);U(this,"shootHoming",!1);U(this,"homingSteerBoost",1);U(this,"baseShootSpread",!1);U(this,"baseShootPierce",0);U(this,"baseShootHoming",!1);U(this,"gearTrialTimer",0);U(this,"gearTrialTurret",null);U(this,"styleStreak",0);U(this,"styleStreakTimer",0);U(this,"magnetTimer",0);U(this,"comboStingerPlayed",!1);U(this,"styleToastTimer",0);U(this,"spectacle",new Ux);U(this,"shootPulse",0);U(this,"cb");U(this,"raf",0);U(this,"lastFrame",0);U(this,"hudTimer",0);U(this,"lastConvoyCount",-1);U(this,"baseCamera",new V);U(this,"lookTarget",new V);U(this,"loop",()=>{if(!this.running)return;this.raf=requestAnimationFrame(this.loop);const t=performance.now(),e=Math.min(.05,Math.max(.001,(t-this.lastFrame)/1e3));this.lastFrame=t,this.update(e),this.render()});U(this,"sunTick",0);this.canvas=t,this.save=e,this.cb=n,this.renderer=new Zh({canvas:t,antialias:jg,powerPreference:O?"low-power":"high-performance",stencil:!1,depth:!0,alpha:!1,precision:O?"mediump":"highp"}),this.renderer.setPixelRatio(Ba()),this.renderer.shadowMap.enabled=$g,this.renderer.shadowMap.type=pu,this.renderer.toneMapping=fh,this.renderer.toneMappingExposure=O?1.18:1.08,this.renderer.outputColorSpace=Be,this.renderer.sortObjects=!1,this.renderer.info.autoReset=!0,this.scene=new Nh,this.camera=new Cn(55,1,.1,O?150:180),this.pipeline=new Ix(this.renderer,this.scene,this.camera),this.world=new Vv(this.scene),this.particles=new Sx(this.scene),this.shake=new wx,this.bindKeyboard(),this.bindPointer(),window.addEventListener("resize",()=>this.resize()),this.viewportCleanup=Nx(()=>this.resize()),window.visualViewport&&window.visualViewport.addEventListener("resize",()=>this.resize()),this.resize()}setAutoFire(t){this.autoFireEnabled=t}bindTouchControls(t){var r;(r=this.inputCleanup)==null||r.call(this);const e=[],n=(a,o)=>{if(!a)return;const l=u=>{o?this.touchSteerLeft=u:this.touchSteerRight=u},c=u=>{u.preventDefault(),l(!0)},h=()=>l(!1);a.addEventListener("pointerdown",c),a.addEventListener("pointerup",h),a.addEventListener("pointerleave",h),a.addEventListener("pointercancel",h),e.push(()=>{a.removeEventListener("pointerdown",c),a.removeEventListener("pointerup",h),a.removeEventListener("pointerleave",h),a.removeEventListener("pointercancel",h)})};n(t.querySelector("#steer-left"),!0),n(t.querySelector("#steer-right"),!1);const s=a=>{!this.running||this.dead||a.target.closest("#steer-left, #steer-right, #ability-btn, #special-btn, #jump-btn, #slide-btn, #shoot-btn, #hud-back-btn, #autofire-toggle, .hud-panel, .hud-actions-right, .btn")||this.shoot()};t.addEventListener("pointerdown",s),this.inputCleanup=()=>{t.removeEventListener("pointerdown",s),e.forEach(a=>a())}}startLevel(t){const e=Ox(t);if(!e)return;this.cleanup(),this.level=e,this.running=!0,this.dead=!1,this.elapsed=0,this.gameTime=0,this.lastFrame=performance.now(),this.hudTimer=0,this.lastConvoyCount=-1,this.forkHint="",this.vaultHint="",this.powerUpLabel="",this.throws=[],this.smokeTimer=0,this.dashTimer=0,this.dashActive=!1,this.abilityCd=0,this.shootCd=0,this.hurtIFrames=0,this.invincibleTimer=0,this.slowMoTimer=0,this.fastShotTimer=0,this.turboTimer=0,this.slideBoostTimer=0,this.tripleFireTimer=0,this.timeScale=1,this.specialCharge=0,this.specialShakesLeft=0,this.specialShakeTimer=0,this.touchSteerLeft=!1,this.touchSteerRight=!1,this.autoFireEnabled=O&&this.save.mobileAutoFire,this.lastVpW=0,this.lastVpH=0,this.lastVpScale=1,this.lastVpOffTop=0,this.lastVpOffLeft=0,this.applyUpgrades();const n=e.difficulty,s=(O?15.2:16.4)+n*(O?.28:.32);if(this.run={...cl,convoy:5,packages:this.startPackages,maxConvoy:50,maxPackages:20,integrity:3+(this.save.purchases["package-armor"]??0),maxIntegrity:3+(this.save.purchases["package-armor"]??0),baseSpeed:s,speed:s},this.mailGunRate=.22,this.save.equippedTurrets.includes("pepper-drone")&&(this.mailGunRate=Math.max(.12,.22-(this.save.purchases["pepper-drone"]??0)*.03)),this.save.equippedTurrets.includes("box-cannon")&&(this.mailGunDamage+=1+(this.save.purchases["box-cannon"]??0)),this.save.equippedTurrets.includes("helper-beacon")){const o=this.save.purchases["helper-beacon"]??0;this.mailGunDamage+=o*2}this.shootSpread=this.save.equippedTurrets.includes("spread-mail"),this.shootPierce=this.save.equippedTurrets.includes("pierce-pack")?1+(this.save.purchases["pierce-pack"]??0):0,this.shootHoming=this.save.equippedTurrets.includes("homing-stamp"),this.baseShootSpread=this.shootSpread,this.baseShootPierce=this.shootPierce,this.baseShootHoming=this.shootHoming,this.applyGearSynergies(),this.gearTrialTimer=0,this.gearTrialTurret=null,this.styleStreak=0,this.styleStreakTimer=0,this.magnetTimer=0,this.comboStingerPlayed=!1,this.homingSteerBoost=1,this.comboCount=0,this.comboTimer=0,this.nextMiniEventZ=200,this.nextUfoHazardZ=120+Math.random()*35,this.ufoHazard&&(this.ufoHazard.dispose(),this.ufoHazard=null),this.blackoutTimer=0,this.world.setBlackout(0),this.pickupRadius=2.2+(this.save.purchases["coin-magnet"]??0)*.4,this.spectacle.reset(),this.shootPulse=0;const r=e.segments[e.segments.length-1];this.levelLength=r.kind==="dropoff"?r.z+20:800,this.spawnHorizon=this.levelLength-30,this.nextBarZ=38,this.nextObstacleZ=62+Math.floor(Math.random()*18),this.nextRunnerZ=38+Math.random()*12,this.nextPowerUpZ=28+Math.random()*12,this.nextPackageZ=20,this.nextCoinZ=35;const a=Bo(e.district);this.world.build(a,this.levelLength),ye.setDistrict(e.district),this.player=new e1(this.scene,al(this.save.selectedCharacter??"johnny")),this.player.setJumpPower(12+(this.save.purchases["jump-boots"]??0)*1.4),this.player.z=0,this.player.targetX=0,this.player.x=0,this.convoy=new n1(this.scene),this.convoy.setCount(O?0:2);for(const o of e.segments)o.kind==="gate"?this.routeGates.push(_1(this.scene,o.z,o.safe)):o.kind==="vault"?this.electricBars.push(Rr(this.scene,o.z,{span:"full",clearance:o.clearance,motion:"static",district:e.district})):o.kind==="dropoff"&&(this.dropoff=y1(this.scene,o.z));this.player.setPackageGlow(.5,e.district),O&&(Gi(),this.resize(),requestAnimationFrame(()=>this.resize())),this.loop()}applyUpgrades(){this.startPackages=(this.save.purchases["starter-pouches"]??0)*2;const t=this.save.equippedAbility;t==="smoke-bomb"?this.abilityMaxCd=12-(this.save.purchases["smoke-bomb"]??0)*2:t==="rally-horn"?this.abilityMaxCd=15-(this.save.purchases["rally-horn"]??0)*3:t==="dash"?this.abilityMaxCd=10-(this.save.purchases.dash??0)*2:this.abilityMaxCd=12}bindKeyboard(){window.addEventListener("keydown",t=>{this.keys.add(t.code),t.code==="KeyE"&&(t.preventDefault(),t.repeat||this.useSpecialQuake()),t.code==="KeyQ"&&(t.preventDefault(),t.repeat||this.useAbility()),t.code==="Space"&&(t.preventDefault(),t.repeat||this.jump()),(t.code==="KeyS"||t.code==="ArrowDown")&&(t.preventDefault(),t.repeat||this.slide()),(t.code==="ArrowLeft"||t.code==="KeyA")&&t.preventDefault(),(t.code==="ArrowRight"||t.code==="KeyD")&&t.preventDefault()}),window.addEventListener("keyup",t=>this.keys.delete(t.code))}bindPointer(){this.canvas.addEventListener("pointerdown",t=>{!this.running||this.dead||t.button===0&&(t.preventDefault(),this.shoot())}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),O&&this.canvas.addEventListener("touchstart",t=>{t.touches.length===1&&t.preventDefault()},{passive:!1})}jump(){!this.running||this.dead||this.player.jump()&&(this.shake.shake(.08),ye.jump())}slide(){!this.running||this.dead||this.player.slide()&&(this.shake.shake(.05),ye.slide())}shoot(){if(!this.running||this.dead||this.shootCd>0)return;const t=this.mailGunRate;this.shootCd=this.fastShotTimer>0?t*.45:t;let e=this.player.x,n=this.player.z+40;const s=this.nearestRunner();s&&(e=s.x,n=s.z),this.player.mailGunAnim(),ye.shootMail(),this.shootPulse=.5,this.shake.shake(.035),this.spectacle.bumpCombat(.07),this.particles.muzzleFlash(this.player.x+.35,1.05,this.player.z+.55);const r={pierceLeft:this.shootPierce,homing:this.shootHoming};if(this.shootSpread)for(const a of[-1,0,1])this.throws.push(Bc(this.scene,this.player.x,this.player.z,e,n,this.mailGunDamage,{...r,spreadIndex:a}));else this.throws.push(Bc(this.scene,this.player.x,this.player.z,e,n,this.mailGunDamage,r))}fireMailGun(){this.shoot()}throwPackage(){this.shoot()}nearestRunner(){let t=null,e=1/0;for(const n of this.runners){if(!n.alive)continue;const s=n.z-this.player.z;s>0&&s<55&&s<e&&(e=s,t=n)}return t}useSpecialQuake(){!this.running||this.dead||this.specialShakesLeft>0||this.specialCharge<1||(this.specialCharge=0,this.specialShakesLeft=3,this.specialShakeTimer=0,this.convoy.reactQuake(),ye.quake(),this.cb.onToast("💥 GROUND QUAKE ×3!"),this.emitHud(this.level.timeLimit-this.elapsed))}useAbility(){if(!this.running||this.dead||this.abilityCd>0)return;const t=this.save.equippedAbility;t&&(t==="smoke-bomb"?(this.smokeTimer=4,this.cb.onToast("Smoke!")):t==="rally-horn"?(this.invincibleTimer=Math.max(this.invincibleTimer,2),this.cb.onToast("Brief shield!")):t==="dash"&&(this.dashActive=!0,this.dashTimer=.6,this.player.dashOffset(),this.cb.onToast("Dash!")),this.abilityCd=this.abilityMaxCd)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}update(t){if(this.dead)return;this.syncViewport(),this.slowMoTimer>0?(this.slowMoTimer-=t,this.timeScale=.42,this.slowMoTimer<=0&&(this.timeScale=1)):this.timeScale=1,this.invincibleTimer>0&&(this.invincibleTimer-=t),this.hurtIFrames>0&&(this.hurtIFrames-=t),this.fastShotTimer>0&&(this.fastShotTimer-=t),this.turboTimer>0&&(this.turboTimer-=t,this.turboTimer<=0&&(this.run.speed=this.run.baseSpeed)),this.slideBoostTimer>0&&(this.slideBoostTimer-=t,this.slideBoostTimer<=0&&this.turboTimer<=0&&(this.run.speed=this.run.baseSpeed)),this.tripleFireTimer>0&&(this.tripleFireTimer-=t,this.tripleFireTimer<=0&&this.refreshShootSpread()),this.powerUpLabel=this.invincibleTimer>0?"🛡 SHIELD":this.hurtIFrames>0?"💥 HIT!":this.turboTimer>0?"🔥 OVERDRIVE":this.tripleFireTimer>0?"🔫 TRIPLE FIRE":this.slideBoostTimer>0?"⚡ SLIDE BOOST":this.fastShotTimer>0?"⚡ FAST":this.slowMoTimer>0?"🐢 SLOW-MO":"";const e=t*this.timeScale;this.elapsed+=t,this.gameTime+=t,this.abilityCd>0&&(this.abilityCd=Math.max(0,this.abilityCd-t)),this.shootCd>0&&(this.shootCd=Math.max(0,this.shootCd-t)),O&&this.autoFireEnabled&&this.shootCd<=0&&this.shoot(),this.smokeTimer>0&&(this.smokeTimer-=t),this.dashActive&&(this.dashTimer-=t,this.dashTimer<=0&&(this.dashActive=!1)),this.obstacleCooldown>0&&(this.obstacleCooldown-=t),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.comboCount=0)),this.blackoutTimer>0&&(this.blackoutTimer-=t,this.blackoutTimer<=0&&this.world.setBlackout(0)),this.styleStreakTimer>0&&(this.styleStreakTimer-=t,this.styleStreakTimer<=0&&(this.styleStreak=0)),this.magnetTimer>0&&(this.magnetTimer-=t),this.gearTrialTimer>0&&(this.gearTrialTimer-=t,this.gearTrialTimer<=0&&this.endGearTrial()),ye.setNight(this.world.getSkyNight()),this.player.z+=this.run.speed*e,this.run.distance=this.player.z,this.specialCharge=Math.min(1,this.specialCharge+this.run.speed*e*5e-4),this.updateSpecialQuake(t),(this.keys.has("ArrowLeft")||this.keys.has("KeyA")||this.touchSteerLeft)&&(this.player.targetX+=this.steerSpeed*t),(this.keys.has("ArrowRight")||this.keys.has("KeyD")||this.touchSteerRight)&&(this.player.targetX-=this.steerSpeed*t),this.player.targetX=gs.clamp(this.player.targetX,-this.roadHalfWidth,this.roadHalfWidth),this.player.update(t,this.roadHalfWidth,!0,this.run.speed,this.world.getGameplayNight()),this.run.convoy!==this.lastConvoyCount&&(this.convoy.setCount(O?0:Math.min(2,this.run.convoy)),this.lastConvoyCount=this.run.convoy),this.convoy.update(this.player.x,this.player.z,this.gameTime),this.proceduralSpawn(),this.updateMiniEvents(),this.updateSpectacle(t),this.updateUfoHazard(t),this.cullBehind();const n=this.player.z;this.world.setPlayerZ(n,t),this.sunTick+=t,this.sunTick>=(O?.1:.05)&&(this.sunTick=0,this.world.followSun(this.player.x,n)),R1(this.coins,t,this.gameTime,n),z1(this.packagePickups,this.gameTime,n),hx(this.powerUps,this.gameTime,n),ex(this.runners,e,this.gameTime,1,n,h=>{ye.telegraphWarn(),Math.random()<.4&&ye.alienChatter()},this.world.getGameplayNight()),this.throws=kc(this.throws,t,this.scene,this.gameTime,this.runners,this.homingSteerBoost),this.particles.update(t),this.shootPulse=Math.max(0,this.shootPulse-t*2.8),this.world.update(this.gameTime,n,t,{turbo:this.turboTimer>0||this.slideBoostTimer>0,speed:this.run.speed,baseSpeed:this.run.baseSpeed,playerX:this.player.x,shootPulse:this.shootPulse,combatIntensity:this.spectacle.getCombatIntensity()});for(const h of this.routeGates)!h.resolved&&Ai(h.z,n,O?42:55)&&E1(h,this.gameTime);this.dropoff&&Ai(this.dropoff.z,n,O?42:55)&&T1(this.dropoff,this.gameTime),v1(this.electricBars,this.gameTime,n,()=>ye.telegraphWarn()),k1(this.obstacles,this.gameTime,n,this.world.getGameplayNight());const s=this.pickupRadius+(this.magnetTimer>0?2.8:0),r=P1(this.coins,this.player.x,this.player.z,s);r&&(this.run.coins+=r,this.particles.collectBurst(this.player.x,this.player.z),ye.coin(r));const a=H1(this.packagePickups,this.player.x,this.player.z,s);a.packages&&(this.run.packages=Math.min(this.run.maxPackages,this.run.packages+a.packages),this.particles.collectBurst(this.player.x,this.player.z),this.spectacle.bumpCombat(.04),ye.pickup()),a.golden&&(this.run.coins+=18*a.golden,this.fastShotTimer=Math.max(this.fastShotTimer,4),this.particles.collectBurst(this.player.x,this.player.z),this.cb.onToast("✨ Golden Mail — fast shots!"),ye.combo(4));const o=ux(this.powerUps,this.player.x,this.player.z,s);o&&(this.applyPowerUp(o),this.particles.collectBurst(this.player.x,this.player.z)),this.checkThrowHits(),this.checkElectricBars(),this.checkObstacles(),this.checkNearMisses(),this.checkBoostPads(),this.checkRunners(),this.checkRouteGates(),this.checkDropoff(),this.checkLose();const l=this.level.timeLimit-this.elapsed;if(l<=0){this.die("timeout");return}this.hudTimer+=t;const c=O?.12:.08;this.hudTimer>=c&&(this.hudTimer=0,this.emitHud(l)),this.cb.onCombat(!1),this.baseCamera.set(this.player.x*.35,10+this.player.jumpY*.15,this.player.z-12),this.lookTarget.set(this.player.x*.25,1.5+this.player.jumpY*.2,this.player.z+18),this.shake.apply(this.camera,this.baseCamera,this.lookTarget)}applyPowerUp(t){this.cb.onToast(dx[t]),t==="slowmo"?this.slowMoTimer=3.5:t==="fastshot"?this.fastShotTimer=5:t==="invincible"?this.invincibleTimer=4:t==="health"?this.run.integrity<this.run.maxIntegrity?this.run.integrity++:(this.run.coins+=15,this.cb.onToast("Full health — +15 coins!")):t==="turbo"?(this.turboTimer=4,this.run.speed=this.run.baseSpeed*1.55,this.shake.shake(.35),this.convoy.reactTurbo(),ye.turbo(),ye.honk()):t==="triplefire"&&(this.tripleFireTimer=8,this.shootSpread=!0),t!=="turbo"&&ye.powerUp(),this.emitHud(this.level.timeLimit-this.elapsed)}emitHud(t){this.cb.onHudUpdate({integrity:this.run.integrity,maxIntegrity:this.run.maxIntegrity,coins:this.run.coins,packages:this.run.packages,distance:this.run.distance,totalDistance:this.levelLength,timeLeft:t,abilityCd:this.abilityCd,abilityReady:this.abilityCd<=0&&!!this.save.equippedAbility,specialCharge:this.specialCharge,specialReady:this.specialCharge>=1&&this.specialShakesLeft<=0,specialShakes:this.specialShakesLeft,shootReady:this.shootCd<=0,jumpReady:!this.player.isJumping&&!this.player.isSliding,slideReady:!this.player.isJumping&&!this.player.isSliding,forkHint:this.forkHint||void 0,vaultHint:this.vaultHint||void 0,powerUpLabel:this.comboCount>=2?`⚡ ${this.comboCount}x COMBO`:this.magnetTimer>0?"🧲 STYLE MAGNET":this.gearTrialTimer>0&&this.gearTrialTurret?`🎁 ${Yr.gearTrialName(this.gearTrialTurret)}`:this.powerUpLabel||void 0,invincible:this.invincibleTimer>0})}proceduralSpawn(){const t=this.level.difficulty,e=O?72:92,n=this.player.z+e,s=1,r=this.spawnHorizon,a=O?5:8,o=O?4:6,l=O?9:12,c=O?6:10;let h=0;for(;this.nextBarZ<n&&this.nextBarZ<r&&h<s&&!(this.electricBars.filter(d=>!d.resolved).length>=a);){const g=mx(t);this.electricBars.push(Rr(this.scene,this.nextBarZ,{...g,district:this.level.district})),this.nextBarZ+=gx(t)+Math.random()*10,h++}let u=0;for(;this.nextObstacleZ<n&&this.nextObstacleZ<r&&u<s&&!(this.obstacles.filter(d=>!d.hit).length>=o);){const y=$c(),g=O?1:y.length;for(let d=0;d<g;d++)this.obstacles.push(U1(this.scene,vx(this.level.id),y[d],this.nextObstacleZ));this.nextObstacleZ+=xx(t)+Math.random()*14,u++}let f=0;for(;this.nextRunnerZ<n&&this.nextRunnerZ<r&&f<s&&!(this.runners.length>=l);){const y=Ha(t),g=Oi(),d=Math.random()<(O?.05:.08);if(this.runners.push(za(this.scene,y,g,this.nextRunnerZ,{elite:d})),d&&ye.eliteSpawn(),!O&&t>=3&&Math.random()<.28&&this.runners.length<l){let S=Oi();for(let C=0;C<4&&S===g;C++)S=Oi();S!==g&&this.runners.push(za(this.scene,Ha(t),S,this.nextRunnerZ+.5))}this.nextRunnerZ+=_x(t)+Math.random()*8,f++}this.nextPowerUpZ<n&&this.nextPowerUpZ<r&&this.powerUps.length<c&&(this.powerUps.push(cx(this.scene,fx(),Oi(),this.nextPowerUpZ)),this.nextPowerUpZ+=yx());let p=0;for(;this.nextPackageZ<n&&this.nextPackageZ<r&&p<s;)this.packagePickups.push(...O1(this.scene,this.nextPackageZ,1,0)),this.nextPackageZ+=bx(),p++;let v=0;for(;this.nextCoinZ<n&&this.nextCoinZ<r&&v<s;){const y=O?2+Math.floor(Math.random()*2):3+Math.floor(Math.random()*3);this.coins.push(...Pr(this.scene,this.nextCoinZ,y,3.5)),this.nextCoinZ+=O?28+Math.random()*20:22+Math.random()*18,v++}}addSpecialCharge(t){this.specialCharge=Math.min(1,this.specialCharge+t)}updateSpecialQuake(t){this.specialShakesLeft<=0||(this.specialShakeTimer-=t,!(this.specialShakeTimer>0)&&(this.executeQuakePulse(),this.specialShakesLeft--,this.specialShakeTimer=this.specialShakesLeft>0?.38:0))}executeQuakePulse(){this.shake.shake(1.5);const t=this.player.x,e=this.player.z,n=this.quakeRadius*this.quakeRadius;for(const r of this.electricBars){if(r.resolved)continue;const a=r.span==="full"?0:r.x,o=a-t,l=r.z-e;o*o+l*l<=n&&(r.resolved=!0,r.mesh.visible=!1,this.particles.hitBurst(a,r.z))}for(const r of this.obstacles){if(r.hit)continue;const a=r.x-t,o=r.z-e;a*a+o*o<=n&&(r.hit=!0,r.mesh.visible=!1,this.particles.hitBurst(r.x,r.z))}const s=[];for(const r of this.runners){if(!r.alive)continue;const a=r.x-t,o=r.z-e;a*a+o*o<=n&&(this.run.coins+=r.tier==="stalker"?15:r.tier==="raider"?10:5,s.push(r),this.particles.hitBurst(r.x,r.z))}for(const r of s)Ga(r,this.scene),this.runners=this.runners.filter(a=>a!==r);this.particles.gateBurst(t,e,"#FF9800")}cullBehind(){const t=this.player.z-25,e=this.electricBars.filter(l=>l.z<t);e.length&&(Pc(e,this.scene),this.electricBars=this.electricBars.filter(l=>l.z>=t));const n=this.obstacles.filter(l=>l.z<t);n.length&&(Nc(n,this.scene),this.obstacles=this.obstacles.filter(l=>l.z>=t));const s=this.runners.filter(l=>l.z<t);s.length&&(Wc(s,this.scene),this.runners=this.runners.filter(l=>l.z>=t));const r=this.coins.filter(l=>l.collected||l.z<t);r.length&&(Uc(r,this.scene),this.coins=this.coins.filter(l=>!l.collected&&l.z>=t));const a=this.packagePickups.filter(l=>l.collected||l.z<t);a.length&&(Oc(a,this.scene),this.packagePickups=this.packagePickups.filter(l=>!l.collected&&l.z>=t));const o=this.powerUps.filter(l=>l.collected||l.z<t);o.length&&(Yc(o,this.scene),this.powerUps=this.powerUps.filter(l=>!l.collected&&l.z>=t))}applyGearSynergies(){const t=this.save.equippedTurrets;t.includes("spread-mail")&&t.includes("pierce-pack")&&(this.shootPierce+=1,this.mailGunDamage=Math.floor(this.mailGunDamage*1.12),this.cb.onToast("⚡ Lane Sweeper — spread pierces!")),t.includes("homing-stamp")&&t.includes("pepper-drone")&&(this.mailGunRate*=.88,this.homingSteerBoost=1.45,this.cb.onToast("🎯 Stamp Lock — homing fast fire!"))}static gearTrialName(t){return t==="spread-mail"?"Spread Envelope":t==="pierce-pack"?"Piercing Post":"Tracking Stamps"}startGearTrial(){const e=["spread-mail","pierce-pack","homing-stamp"].filter(s=>!this.save.equippedTurrets.includes(s));if(!e.length)return;const n=e[Math.floor(Math.random()*e.length)];this.gearTrialTurret=n,this.gearTrialTimer=45,n==="spread-mail"&&(this.shootSpread=!0),n==="pierce-pack"&&(this.shootPierce=Math.max(this.shootPierce,2)),n==="homing-stamp"&&(this.shootHoming=!0),this.cb.onToast(`🎁 Trial: ${Yr.gearTrialName(n)}!`)}refreshShootSpread(){this.shootSpread=this.baseShootSpread||this.tripleFireTimer>0||this.gearTrialTurret==="spread-mail"&&this.gearTrialTimer>0}endGearTrial(){this.refreshShootSpread(),this.shootPierce=this.baseShootPierce,this.shootHoming=this.baseShootHoming;const t=this.save.equippedTurrets;t.includes("spread-mail")&&t.includes("pierce-pack")&&(this.shootPierce+=1),this.homingSteerBoost=t.includes("homing-stamp")&&t.includes("pepper-drone")?1.45:1,this.gearTrialTurret=null}onRunnerKill(t,e){this.comboTimer=3.2,this.comboCount++;const n=1+(this.comboCount-1)*.12;let s=(t.tier==="stalker"?15:t.tier==="raider"?10:5)*n;t.elite&&(s+=25),t.isBoss&&(s+=50),e&&(s*=1.5),this.run.coins+=Math.floor(s),this.addSpecialCharge(.14+this.comboCount*.035),this.spectacle.bumpCombat(t.isBoss?.25:t.elite?.15:.1),ye.alienKill(),e&&ye.headshot(),this.comboCount>=2&&ye.combo(this.comboCount),this.comboCount>=5&&!this.comboStingerPlayed&&(this.comboStingerPlayed=!0,ye.comboStinger()),this.comboCount<=1&&(this.comboStingerPlayed=!1),this.particles.hitBurst(t.x,t.z),t.elite&&!t.isBoss&&(this.coins.push(...Pr(this.scene,t.z,O?5:8,4)),this.packagePickups.push(W1(this.scene,t.x,t.z)))}applySpectacleGameplay(t){const e=this.player.z+(O?36:44),n=this.level.district,s=r=>this.electricBars.some(a=>Math.abs(a.z-r)<10);switch(t){case"energy-surge":return s(e)?!1:(this.electricBars.push(Rr(this.scene,e,{span:"full",clearance:"slide",district:n})),!0);case"orbital-flash":return s(e)?!1:(this.electricBars.push(Rr(this.scene,e,{span:"full",clearance:"jump",district:n})),!0);case"meteor-streak":return this.coins.push(...Pr(this.scene,e,O?8:12,5)),this.world.playSpectacle(t,this.player.z),!0;case"alien-rain":{const r=$c();for(let a=0;a<(O?1:2);a++)this.runners.push(za(this.scene,Ha(this.level.difficulty),r[a]??Oi(),e+a*5));return!0}case"dogfight":case"distant-barrage":return this.world.playSpectacle(t,this.player.z),!1;default:return this.world.playSpectacle(t,this.player.z),!1}}updateSpectacle(t){const e=this.spectacle.update(t,{playerZ:this.player.z,comboCount:this.comboCount,runnerCount:this.runners.filter(n=>n.alive).length,night:this.world.getSkyNight()});if(e){const n=this.applySpectacleGameplay(e.kind);e.gameplay&&n&&e.message&&this.cb.onToast(e.message),(n||!e.gameplay)&&(this.shake.shake(e.pulse*(e.gameplay?.12:.06)),ye.spectacle(e.kind))}ye.setCombatIntensity(this.spectacle.getCombatIntensity())}updateUfoHazard(t){var s;if(this.world.getSkyNight()<=.4){(s=this.ufoHazard)!=null&&s.active&&this.ufoHazard.end();return}if(this.ufoHazard||(this.ufoHazard=new rx(this.scene)),!this.ufoHazard.active&&this.player.z>=this.nextUfoHazardZ&&(this.nextUfoHazardZ+=155+Math.random()*70,this.ufoHazard.start(this.player.x,this.player.z),this.cb.onToast("🛸 UFO overhead — dodge the beam!"),ye.ufoBeam()),!this.ufoHazard.active)return;this.ufoHazard.update(t,this.gameTime,this.player.z);const n=this.player.jumpY>.4||this.player.isSliding||this.dashActive||this.invincibleTimer>0;this.ufoHazard.tickExposure(t,this.player.x,this.player.z,n)&&(this.isProtected()||(this.takeHit("obstacle"),this.cb.onToast("👽 Caught in the beam!"),this.ufoHazard.end()))}updateMiniEvents(){if(this.player.z<this.nextMiniEventZ)return;this.nextMiniEventZ+=340+Math.random()*90;const t=this.level.district,e=Math.random(),n=()=>{this.coins.push(...Pr(this.scene,this.player.z+45,O?6:10,5)),this.cb.onToast("🌠 Bonus coins ahead!")},s=()=>{this.convoy.reactTurbo(),ye.honk()},r=()=>{this.cb.onToast("🌑 Blackout zone — eyes up!"),this.world.setBlackout(.58),this.blackoutTimer=9};t===3?e<.55?n():e<.82?s():r():t===5||t===7?e<.48?r():e<.74?s():n():t>=6?e<.38?r():e<.68?n():s():e<.34?n():e<.67?s():r()}checkBoostPads(){!this.running||this.dead||this.world.tryTriggerBoostPad(this.player.x,this.player.z)&&this.applySlideBoost()}applySlideBoost(){this.player.boostSlide(O?1.05:1.2),this.slideBoostTimer=O?1.25:1.45,this.run.speed=this.run.baseSpeed*(O?1.34:1.42),this.shake.shake(.24),ye.slideBoost(),ye.slide(),this.convoy.reactTurbo(),this.particles.collectBurst(this.player.x,this.player.z),this.shootPulse=.4,this.spectacle.bumpCombat(.06)}checkNearMisses(){for(const t of this.electricBars){if(t.resolved||t.span==="full"||t.styleAwarded)continue;const e=this.player.z-t.z;e<.8||e>2.5||Rc(this.player.x,t)||(this.player.isJumping||this.player.isSliding||this.dashActive)&&(t.styleAwarded=!0,this.awardStyleNearMiss())}for(const t of this.obstacles){if(t.hit)continue;const e=this.player.z-t.z;if(e<.8||e>2.2)continue;const n=Math.abs(this.player.x-t.x),s=t.radius-.05,r=t.radius+.45;n>=s&&n<=r&&(this.player.isJumping||this.player.isSliding||this.dashActive)&&(t.mesh.userData.styleAwarded||(t.mesh.userData.styleAwarded=!0,this.awardStyleNearMiss()))}}awardStyleNearMiss(){this.run.coins+=5,ye.nearMiss(),this.convoy.reactTurbo(),this.styleStreak++,this.styleStreakTimer=4,this.styleStreak>=3?(this.styleStreak=0,this.magnetTimer=5,this.cb.onToast("🔗 STYLE MAGNET!"),ye.honk()):this.styleStreak===2?this.cb.onToast("✨ Style ×2 — one more!"):this.cb.onToast("✨ STYLE +5")}checkThrowHits(){for(const t of this.throws){if(t.life<=0)continue;const e=t.mesh.position.z,n=t.mesh.position.y;for(const s of this.runners){if(!s.alive||Math.abs(s.z-e)>2.5)continue;const r=t.mesh.position.x-s.x,a=t.mesh.position.z-s.z;if(r*r+a*a>=1.85)continue;const o=ix(n,s),l=o?t.damage*2:t.damage;s.hp-=l,ye.alienHit(),this.particles.alienHit(t.mesh.position.x,t.mesh.position.y,t.mesh.position.z,o),this.spectacle.bumpCombat(o?.12:.06),t.pierceLeft>0?t.pierceLeft--:t.life=0,s.hp<=0&&(this.onRunnerKill(s,o),Ga(s,this.scene),this.runners=this.runners.filter(c=>c!==s))}}}isProtected(){return this.invincibleTimer>0||this.hurtIFrames>0}takeHit(t){this.isProtected()||(this.run.integrity--,this.run.integrityLost=!0,this.hurtIFrames=1.5,this.obstacleCooldown=.6,this.player.flashHurt(),this.shake.shake(.75),this.cb.onDamageFlash(),this.particles.hitBurst(this.player.x,this.player.z),ye.hurt(),t==="runner"&&this.player.knockback(this.player.x>=0?2:-2),this.run.integrity<=0?this.die(t==="runner"?"overwhelmed":"stolen"):this.emitHud(this.level.timeLimit-this.elapsed))}checkObstacles(){if(!this.isProtected()){for(const t of this.obstacles)if(!(t.hit||Math.abs(this.player.z-t.z)>1.4||Math.abs(this.player.x-t.x)>t.radius+.3)&&!(this.player.jumpY>N1(t.kind)+.08)){if(this.dashActive){t.hit=!0,t.mesh.visible=!1,this.particles.hitBurst(t.x,t.z);continue}t.hit=!0,t.mesh.visible=!1,this.takeHit("obstacle");return}}}checkElectricBars(){this.vaultHint="";const t=2.4,e=-1.5;for(const n of this.electricBars){if(n.resolved)continue;const s=n.z-this.player.z;if(s>0&&s<30){const u=n.clearance==="jump"?"⬆ JUMP":"⬇ SLIDE";n.motion==="sweep"?this.vaultHint=`⚡ SWEEP — ${u}`:n.span==="full"?this.vaultHint=`${u} BAR`:this.vaultHint=`${u} · dodge lane`}const r=this.player.jumpY>.1||this.player.isJumping,a=this.player.isSliding,o=n.clearance==="jump"?r:a,l=n.clearance==="jump"&&a||n.clearance==="slide"&&r;if(n.motion==="sweep"){if(this.player.z<n.z-.5||this.player.z>n.z+2.2||!n.sweepStarted)continue;const u=x1(n);if(Math.abs(this.player.x-u)>nu+.25||this.isProtected())continue;if(this.dashActive){n.resolved=!0;continue}!n.penalized&&(l||!o)&&(n.penalized=!0,ye.vaultBuzz(),this.takeVaultMiss()),this.player.z>n.z+1.6&&(n.resolved=!0,o&&!n.penalized&&(this.run.coins+=5,ye.vaultBuzz()));continue}if(!Rc(this.player.x,n)||!(this.player.z>=n.z+e&&this.player.z<=n.z+t))continue;if(this.dashActive&&this.player.z>=n.z-.3){n.resolved=!0,this.particles.hitBurst(n.x,n.z);continue}const h=this.player.z>=n.z-.15;!this.isProtected()&&!n.penalized&&h&&(l||!o)&&(n.penalized=!0,ye.vaultBuzz(),this.takeVaultMiss()),this.player.z>n.z+t-.35&&(n.resolved=!0,o&&!n.penalized&&(this.run.coins+=n.span==="full"?4:3,ye.vaultBuzz()))}}checkRunners(){if(!(this.isProtected()||this.smokeTimer>0))for(const t of this.runners){if(!t.alive)continue;const e=Math.abs(this.player.x-t.x),n=Math.abs(this.player.z-t.z),s=nx(t.tier);if(e<s&&n<1.3&&this.player.jumpY<.55){Ga(t,this.scene),this.runners=this.runners.filter(r=>r!==t),this.takeHit("runner");return}}}checkRouteGates(){this.forkHint="";for(const t of this.routeGates){if(t.resolved)continue;const e=t.z-this.player.z;if(e>0&&e<32&&(this.forkHint="⚠ FORK!"),this.player.z>=t.z-3&&this.player.z<=t.z+2&&Math.abs(this.player.x)<1.2){this.die("wrong_turn");return}if(this.player.z<t.z+.4)continue;const n=this.player.x>.75,s=this.player.x<-.75;if(!n&&!s){this.die("wrong_turn");return}const r=n?"left":"right";if(t.resolved=!0,t.centerWall.visible=!1,r!==t.safeSide){this.die("wrong_turn");return}this.run.coins+=8,this.particles.gateBurst(r==="left"?3:-3,t.z,"#00E676"),ye.gatePass()}}takeVaultMiss(){this.isProtected()||(this.run.integrity--,this.run.integrityLost=!0,this.hurtIFrames=1.8,this.obstacleCooldown=.8,this.player.flashHurt(),this.shake.shake(.65),this.cb.onDamageFlash(),this.particles.hitBurst(this.player.x,this.player.z),this.run.integrity<=0?this.die("stolen"):this.emitHud(this.level.timeLimit-this.elapsed))}checkDropoff(){!this.dropoff||this.dropoff.reached||this.player.z>=this.dropoff.z-3&&(this.dropoff.reached=!0,this.particles.gateBurst(0,this.dropoff.z,"#81D4FA"),ye.delivery(),this.endGame(!0))}checkLose(){this.run.integrity<=0&&!this.dead&&this.die("stolen")}die(t){this.dead||(this.dead=!0,this.deathReason=t,this.player.flashHurt(),this.shake.shake(1.2),this.cb.onDamageFlash(),this.particles.burst(this.player.x,1.5,this.player.z,"#FF1744",O?18:30,6),ye.gameOver(),setTimeout(()=>this.endGame(!1),1200))}endGame(t){if(!this.running)return;this.running=!1,ye.stopMusic();let e=0;t&&(e=1,!this.run.integrityLost&&this.run.packages>=6&&(e=2),!this.run.integrityLost&&this.run.packages>=12&&this.run.coins>=40&&(e=3));const n=t?this.run.packages*3:0,s=t?25+e*20:Math.floor(this.run.coins*.3),r=this.run.coins+(t?s+n:0),a={stolen:"Crashed into a hazard!",overwhelmed:"An alien tackled you!",timeout:"Delivery window expired!",blocked:"Blocked!",wrong_turn:"Wrong turn — dead end!"};this.cb.onEnd({won:t,stars:e,coinsEarned:r,levelId:this.level.id,time:this.elapsed,deathReason:t?void 0:a[this.deathReason]})}render(){{const t=this.world.getNightFx(),e=this.world.getGameplayNight(),n=O?1.18:1.08;this.renderer.toneMappingExposure=n*(1-t*(O?.04:.08))+e*(O?.14:.1)}if(this.pipeline){const t=this.world.getNightFx(),e=this.spectacle.getCombatIntensity(),n=this.spectacle.getPostPulse()+this.shootPulse*.35,s=(O?.26:.24)+t*(O?.16:.28)+e*(O?.06:.12);this.pipeline.setBloomStrength(s),this.pipeline.setGradePulse(n),this.pipeline.render()}else this.renderer.render(this.scene,this.camera)}syncViewport(){if(!O||!this.running)return;const t=au();t.width===this.lastVpW&&t.height===this.lastVpH&&t.scale===this.lastVpScale&&t.offsetTop===this.lastVpOffTop&&t.offsetLeft===this.lastVpOffLeft||(this.lastVpW=t.width,this.lastVpH=t.height,this.lastVpScale=t.scale,this.lastVpOffTop=t.offsetTop,this.lastVpOffLeft=t.offsetLeft,Gi(),this.renderer.setPixelRatio(Ba()),this.renderer.setSize(t.width,t.height,!1),this.camera.aspect=t.width/t.height,this.camera.updateProjectionMatrix())}resize(){var n;let t,e;if(O){const s=Gi();t=s.width,e=s.height,this.lastVpW=t,this.lastVpH=e,this.lastVpScale=s.scale,this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`}else t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;t<1||e<1||(this.renderer.setPixelRatio(Ba()),this.renderer.setSize(t,e,!1),(n=this.pipeline)==null||n.setSize(t,e),this.camera.aspect=t/e,this.camera.far=O?150:180,this.camera.updateProjectionMatrix())}cleanup(){for(const t of this.routeGates)Ic(t.mesh,this.scene);Pc(this.electricBars,this.scene),Nc(this.obstacles,this.scene),Wc(this.runners,this.scene),Uc(this.coins,this.scene),Oc(this.packagePickups,this.scene),Yc(this.powerUps,this.scene),this.throws=kc(this.throws,999,this.scene),this.dropoff&&Ic(this.dropoff.mesh,this.scene),this.particles.clear(),this.routeGates=[],this.electricBars=[],this.obstacles=[],this.runners=[],this.coins=[],this.packagePickups=[],this.powerUps=[],this.player&&this.player.dispose(this.scene),this.convoy&&this.convoy.dispose(),this.ufoHazard&&(this.ufoHazard.dispose(),this.ufoHazard=null)}dispose(){var t,e,n;(t=this.inputCleanup)==null||t.call(this),this.inputCleanup=null,(e=this.viewportCleanup)==null||e.call(this),this.viewportCleanup=null,this.stop(),ye.stopMusic(),ye.dispose(),this.cleanup(),(n=this.pipeline)==null||n.dispose(),this.pipeline=null,this.renderer.dispose()}}const qa=[{id:"pepper-drone",category:"gear",name:"Mail Blaster",description:"Faster shoot cooldown — spam mail at charging aliens.",baseCost:70,maxLevel:3},{id:"box-cannon",category:"gear",name:"Parcel Launcher",description:"Package & mail shots hit harder — drop stalkers faster.",baseCost:110,maxLevel:3},{id:"helper-beacon",category:"gear",name:"Target Lock",description:"Auto-aim shots deal bonus damage to runner aliens.",baseCost:90,maxLevel:3},{id:"homing-stamp",category:"gear",name:"Tracking Stamps",description:"Mail shots curve toward the nearest charging alien.",baseCost:125,maxLevel:3},{id:"spread-mail",category:"gear",name:"Spread Envelope",description:"Fire a 3-way mail burst — blanket the lane.",baseCost:95,maxLevel:2},{id:"pierce-pack",category:"gear",name:"Piercing Post",description:"Mail punches through multiple aliens in a line.",baseCost:105,maxLevel:3},{id:"smoke-bomb",category:"ability",name:"Smoke Screen",description:"Aliens cannot tackle you for 4 seconds. 12s cooldown.",baseCost:140,maxLevel:2},{id:"rally-horn",category:"ability",name:"Shield Burst",description:"Brief invincibility to shrug off a hit. 15s cooldown.",baseCost:120,maxLevel:2},{id:"dash",category:"ability",name:"Express Dash",description:"Invulnerable burst — smash through one hazard. 10s cooldown.",baseCost:130,maxLevel:2},{id:"package-armor",category:"upgrade",name:"Extra Heart",description:"+1 max life — survive an extra obstacle or alien hit.",baseCost:80,maxLevel:3},{id:"jump-boots",category:"upgrade",name:"Jump Boots",description:"Higher jumps — clear barricades and pods more easily.",baseCost:60,maxLevel:3},{id:"starter-pouches",category:"upgrade",name:"Starter Pouches",description:"Begin each run with extra packages already collected.",baseCost:55,maxLevel:4},{id:"coin-magnet",category:"upgrade",name:"Coin Magnet",description:"Wider pickup radius for coins and power-ups.",baseCost:50,maxLevel:3}];function Qc(i,t){return Math.floor(i.baseCost*Math.pow(1.55,t))}const Hx=[{key:"gear",label:"Gear",hint:"Equip up to 2"},{key:"ability",label:"Abilities",hint:"Equip 1"},{key:"upgrade",label:"Upgrades",hint:"Passive — always on"}];function Gx(){return`
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
    </div>`}const $r=128,th=new Map;let Gs=null;function Vx(){return Gs||(Gs=new Zh({antialias:!1,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),Gs.setPixelRatio(1),Gs.outputColorSpace=Be),Gs}function Wx(i){const t=th.get(i);if(t)return t;const e=al(i),n=new Nh;n.background=null;const s=new Cn(32,1,.1,40);s.position.set(.15,1.15,3.35),s.lookAt(0,1.05,0),n.add(new Wh(16777215,.9));const r=new fs(16777215,1.15);r.position.set(2.5,5,4),n.add(r);const a=new fs(10406911,.55);a.position.set(-2.5,2,3),n.add(a);const{mesh:o}=eu(e);o.rotation.y=-.42,n.add(o);const l=Vx();l.setSize($r,$r,!1),l.render(n,s);const c=l.domElement.toDataURL("image/png");return th.set(i,c),wn(o),c}function Xx(i,t){const e=document.createElement("img");e.className="character-preview-img",e.alt=al(t).name,e.width=$r,e.height=$r,e.decoding="async",e.src=Wx(t),i.replaceChildren(e)}const qx=3;function Yx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function $x(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var t=i.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),e}function jx(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ya={exports:{}};const Zx={},Kx=Object.freeze(Object.defineProperty({__proto__:null,default:Zx},Symbol.toStringTag,{value:"Module"})),Jx=$x(Kx);var eh;function Qx(){return eh||(eh=1,(function(i){(function(t){var e=function(x){var T,w=new Float64Array(16);if(x)for(T=0;T<x.length;T++)w[T]=x[T];return w},n=function(){throw new Error("no PRNG")},s=new Uint8Array(16),r=new Uint8Array(32);r[0]=9;var a=e(),o=e([1]),l=e([56129,1]),c=e([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),h=e([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),u=e([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),f=e([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),p=e([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function v(x,T,w,m){x[T]=w>>24&255,x[T+1]=w>>16&255,x[T+2]=w>>8&255,x[T+3]=w&255,x[T+4]=m>>24&255,x[T+5]=m>>16&255,x[T+6]=m>>8&255,x[T+7]=m&255}function y(x,T,w,m,R){var j,J=0;for(j=0;j<R;j++)J|=x[T+j]^w[m+j];return(1&J-1>>>8)-1}function g(x,T,w,m){return y(x,T,w,m,16)}function d(x,T,w,m){return y(x,T,w,m,32)}function S(x,T,w,m){for(var R=m[0]&255|(m[1]&255)<<8|(m[2]&255)<<16|(m[3]&255)<<24,j=w[0]&255|(w[1]&255)<<8|(w[2]&255)<<16|(w[3]&255)<<24,J=w[4]&255|(w[5]&255)<<8|(w[6]&255)<<16|(w[7]&255)<<24,xt=w[8]&255|(w[9]&255)<<8|(w[10]&255)<<16|(w[11]&255)<<24,Tt=w[12]&255|(w[13]&255)<<8|(w[14]&255)<<16|(w[15]&255)<<24,qt=m[4]&255|(m[5]&255)<<8|(m[6]&255)<<16|(m[7]&255)<<24,Nt=T[0]&255|(T[1]&255)<<8|(T[2]&255)<<16|(T[3]&255)<<24,Re=T[4]&255|(T[5]&255)<<8|(T[6]&255)<<16|(T[7]&255)<<24,Gt=T[8]&255|(T[9]&255)<<8|(T[10]&255)<<16|(T[11]&255)<<24,le=T[12]&255|(T[13]&255)<<8|(T[14]&255)<<16|(T[15]&255)<<24,M=m[8]&255|(m[9]&255)<<8|(m[10]&255)<<16|(m[11]&255)<<24,H=w[16]&255|(w[17]&255)<<8|(w[18]&255)<<16|(w[19]&255)<<24,$=w[20]&255|(w[21]&255)<<8|(w[22]&255)<<16|(w[23]&255)<<24,Y=w[24]&255|(w[25]&255)<<8|(w[26]&255)<<16|(w[27]&255)<<24,G=w[28]&255|(w[29]&255)<<8|(w[30]&255)<<16|(w[31]&255)<<24,st=m[12]&255|(m[13]&255)<<8|(m[14]&255)<<16|(m[15]&255)<<24,rt=R,dt=j,ot=J,yt=xt,St=Tt,ht=qt,Z=Nt,K=Re,pt=Gt,at=le,et=M,tt=H,Ht=$,Bt=Y,ee=G,ce=st,N,me=0;me<20;me+=2)N=rt+Ht|0,St^=N<<7|N>>>25,N=St+rt|0,pt^=N<<9|N>>>23,N=pt+St|0,Ht^=N<<13|N>>>19,N=Ht+pt|0,rt^=N<<18|N>>>14,N=ht+dt|0,at^=N<<7|N>>>25,N=at+ht|0,Bt^=N<<9|N>>>23,N=Bt+at|0,dt^=N<<13|N>>>19,N=dt+Bt|0,ht^=N<<18|N>>>14,N=et+Z|0,ee^=N<<7|N>>>25,N=ee+et|0,ot^=N<<9|N>>>23,N=ot+ee|0,Z^=N<<13|N>>>19,N=Z+ot|0,et^=N<<18|N>>>14,N=ce+tt|0,yt^=N<<7|N>>>25,N=yt+ce|0,K^=N<<9|N>>>23,N=K+yt|0,tt^=N<<13|N>>>19,N=tt+K|0,ce^=N<<18|N>>>14,N=rt+yt|0,dt^=N<<7|N>>>25,N=dt+rt|0,ot^=N<<9|N>>>23,N=ot+dt|0,yt^=N<<13|N>>>19,N=yt+ot|0,rt^=N<<18|N>>>14,N=ht+St|0,Z^=N<<7|N>>>25,N=Z+ht|0,K^=N<<9|N>>>23,N=K+Z|0,St^=N<<13|N>>>19,N=St+K|0,ht^=N<<18|N>>>14,N=et+at|0,tt^=N<<7|N>>>25,N=tt+et|0,pt^=N<<9|N>>>23,N=pt+tt|0,at^=N<<13|N>>>19,N=at+pt|0,et^=N<<18|N>>>14,N=ce+ee|0,Ht^=N<<7|N>>>25,N=Ht+ce|0,Bt^=N<<9|N>>>23,N=Bt+Ht|0,ee^=N<<13|N>>>19,N=ee+Bt|0,ce^=N<<18|N>>>14;rt=rt+R|0,dt=dt+j|0,ot=ot+J|0,yt=yt+xt|0,St=St+Tt|0,ht=ht+qt|0,Z=Z+Nt|0,K=K+Re|0,pt=pt+Gt|0,at=at+le|0,et=et+M|0,tt=tt+H|0,Ht=Ht+$|0,Bt=Bt+Y|0,ee=ee+G|0,ce=ce+st|0,x[0]=rt>>>0&255,x[1]=rt>>>8&255,x[2]=rt>>>16&255,x[3]=rt>>>24&255,x[4]=dt>>>0&255,x[5]=dt>>>8&255,x[6]=dt>>>16&255,x[7]=dt>>>24&255,x[8]=ot>>>0&255,x[9]=ot>>>8&255,x[10]=ot>>>16&255,x[11]=ot>>>24&255,x[12]=yt>>>0&255,x[13]=yt>>>8&255,x[14]=yt>>>16&255,x[15]=yt>>>24&255,x[16]=St>>>0&255,x[17]=St>>>8&255,x[18]=St>>>16&255,x[19]=St>>>24&255,x[20]=ht>>>0&255,x[21]=ht>>>8&255,x[22]=ht>>>16&255,x[23]=ht>>>24&255,x[24]=Z>>>0&255,x[25]=Z>>>8&255,x[26]=Z>>>16&255,x[27]=Z>>>24&255,x[28]=K>>>0&255,x[29]=K>>>8&255,x[30]=K>>>16&255,x[31]=K>>>24&255,x[32]=pt>>>0&255,x[33]=pt>>>8&255,x[34]=pt>>>16&255,x[35]=pt>>>24&255,x[36]=at>>>0&255,x[37]=at>>>8&255,x[38]=at>>>16&255,x[39]=at>>>24&255,x[40]=et>>>0&255,x[41]=et>>>8&255,x[42]=et>>>16&255,x[43]=et>>>24&255,x[44]=tt>>>0&255,x[45]=tt>>>8&255,x[46]=tt>>>16&255,x[47]=tt>>>24&255,x[48]=Ht>>>0&255,x[49]=Ht>>>8&255,x[50]=Ht>>>16&255,x[51]=Ht>>>24&255,x[52]=Bt>>>0&255,x[53]=Bt>>>8&255,x[54]=Bt>>>16&255,x[55]=Bt>>>24&255,x[56]=ee>>>0&255,x[57]=ee>>>8&255,x[58]=ee>>>16&255,x[59]=ee>>>24&255,x[60]=ce>>>0&255,x[61]=ce>>>8&255,x[62]=ce>>>16&255,x[63]=ce>>>24&255}function C(x,T,w,m){for(var R=m[0]&255|(m[1]&255)<<8|(m[2]&255)<<16|(m[3]&255)<<24,j=w[0]&255|(w[1]&255)<<8|(w[2]&255)<<16|(w[3]&255)<<24,J=w[4]&255|(w[5]&255)<<8|(w[6]&255)<<16|(w[7]&255)<<24,xt=w[8]&255|(w[9]&255)<<8|(w[10]&255)<<16|(w[11]&255)<<24,Tt=w[12]&255|(w[13]&255)<<8|(w[14]&255)<<16|(w[15]&255)<<24,qt=m[4]&255|(m[5]&255)<<8|(m[6]&255)<<16|(m[7]&255)<<24,Nt=T[0]&255|(T[1]&255)<<8|(T[2]&255)<<16|(T[3]&255)<<24,Re=T[4]&255|(T[5]&255)<<8|(T[6]&255)<<16|(T[7]&255)<<24,Gt=T[8]&255|(T[9]&255)<<8|(T[10]&255)<<16|(T[11]&255)<<24,le=T[12]&255|(T[13]&255)<<8|(T[14]&255)<<16|(T[15]&255)<<24,M=m[8]&255|(m[9]&255)<<8|(m[10]&255)<<16|(m[11]&255)<<24,H=w[16]&255|(w[17]&255)<<8|(w[18]&255)<<16|(w[19]&255)<<24,$=w[20]&255|(w[21]&255)<<8|(w[22]&255)<<16|(w[23]&255)<<24,Y=w[24]&255|(w[25]&255)<<8|(w[26]&255)<<16|(w[27]&255)<<24,G=w[28]&255|(w[29]&255)<<8|(w[30]&255)<<16|(w[31]&255)<<24,st=m[12]&255|(m[13]&255)<<8|(m[14]&255)<<16|(m[15]&255)<<24,rt=R,dt=j,ot=J,yt=xt,St=Tt,ht=qt,Z=Nt,K=Re,pt=Gt,at=le,et=M,tt=H,Ht=$,Bt=Y,ee=G,ce=st,N,me=0;me<20;me+=2)N=rt+Ht|0,St^=N<<7|N>>>25,N=St+rt|0,pt^=N<<9|N>>>23,N=pt+St|0,Ht^=N<<13|N>>>19,N=Ht+pt|0,rt^=N<<18|N>>>14,N=ht+dt|0,at^=N<<7|N>>>25,N=at+ht|0,Bt^=N<<9|N>>>23,N=Bt+at|0,dt^=N<<13|N>>>19,N=dt+Bt|0,ht^=N<<18|N>>>14,N=et+Z|0,ee^=N<<7|N>>>25,N=ee+et|0,ot^=N<<9|N>>>23,N=ot+ee|0,Z^=N<<13|N>>>19,N=Z+ot|0,et^=N<<18|N>>>14,N=ce+tt|0,yt^=N<<7|N>>>25,N=yt+ce|0,K^=N<<9|N>>>23,N=K+yt|0,tt^=N<<13|N>>>19,N=tt+K|0,ce^=N<<18|N>>>14,N=rt+yt|0,dt^=N<<7|N>>>25,N=dt+rt|0,ot^=N<<9|N>>>23,N=ot+dt|0,yt^=N<<13|N>>>19,N=yt+ot|0,rt^=N<<18|N>>>14,N=ht+St|0,Z^=N<<7|N>>>25,N=Z+ht|0,K^=N<<9|N>>>23,N=K+Z|0,St^=N<<13|N>>>19,N=St+K|0,ht^=N<<18|N>>>14,N=et+at|0,tt^=N<<7|N>>>25,N=tt+et|0,pt^=N<<9|N>>>23,N=pt+tt|0,at^=N<<13|N>>>19,N=at+pt|0,et^=N<<18|N>>>14,N=ce+ee|0,Ht^=N<<7|N>>>25,N=Ht+ce|0,Bt^=N<<9|N>>>23,N=Bt+Ht|0,ee^=N<<13|N>>>19,N=ee+Bt|0,ce^=N<<18|N>>>14;x[0]=rt>>>0&255,x[1]=rt>>>8&255,x[2]=rt>>>16&255,x[3]=rt>>>24&255,x[4]=ht>>>0&255,x[5]=ht>>>8&255,x[6]=ht>>>16&255,x[7]=ht>>>24&255,x[8]=et>>>0&255,x[9]=et>>>8&255,x[10]=et>>>16&255,x[11]=et>>>24&255,x[12]=ce>>>0&255,x[13]=ce>>>8&255,x[14]=ce>>>16&255,x[15]=ce>>>24&255,x[16]=Z>>>0&255,x[17]=Z>>>8&255,x[18]=Z>>>16&255,x[19]=Z>>>24&255,x[20]=K>>>0&255,x[21]=K>>>8&255,x[22]=K>>>16&255,x[23]=K>>>24&255,x[24]=pt>>>0&255,x[25]=pt>>>8&255,x[26]=pt>>>16&255,x[27]=pt>>>24&255,x[28]=at>>>0&255,x[29]=at>>>8&255,x[30]=at>>>16&255,x[31]=at>>>24&255}function E(x,T,w,m){S(x,T,w,m)}function B(x,T,w,m){C(x,T,w,m)}var F=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function L(x,T,w,m,R,j,J){var xt=new Uint8Array(16),Tt=new Uint8Array(64),qt,Nt;for(Nt=0;Nt<16;Nt++)xt[Nt]=0;for(Nt=0;Nt<8;Nt++)xt[Nt]=j[Nt];for(;R>=64;){for(E(Tt,xt,J,F),Nt=0;Nt<64;Nt++)x[T+Nt]=w[m+Nt]^Tt[Nt];for(qt=1,Nt=8;Nt<16;Nt++)qt=qt+(xt[Nt]&255)|0,xt[Nt]=qt&255,qt>>>=8;R-=64,T+=64,m+=64}if(R>0)for(E(Tt,xt,J,F),Nt=0;Nt<R;Nt++)x[T+Nt]=w[m+Nt]^Tt[Nt];return 0}function k(x,T,w,m,R){var j=new Uint8Array(16),J=new Uint8Array(64),xt,Tt;for(Tt=0;Tt<16;Tt++)j[Tt]=0;for(Tt=0;Tt<8;Tt++)j[Tt]=m[Tt];for(;w>=64;){for(E(J,j,R,F),Tt=0;Tt<64;Tt++)x[T+Tt]=J[Tt];for(xt=1,Tt=8;Tt<16;Tt++)xt=xt+(j[Tt]&255)|0,j[Tt]=xt&255,xt>>>=8;w-=64,T+=64}if(w>0)for(E(J,j,R,F),Tt=0;Tt<w;Tt++)x[T+Tt]=J[Tt];return 0}function P(x,T,w,m,R){var j=new Uint8Array(32);B(j,m,R,F);for(var J=new Uint8Array(8),xt=0;xt<8;xt++)J[xt]=m[xt+16];return k(x,T,w,J,j)}function b(x,T,w,m,R,j,J){var xt=new Uint8Array(32);B(xt,j,J,F);for(var Tt=new Uint8Array(8),qt=0;qt<8;qt++)Tt[qt]=j[qt+16];return L(x,T,w,m,R,Tt,xt)}var z=function(x){this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0;var T,w,m,R,j,J,xt,Tt;T=x[0]&255|(x[1]&255)<<8,this.r[0]=T&8191,w=x[2]&255|(x[3]&255)<<8,this.r[1]=(T>>>13|w<<3)&8191,m=x[4]&255|(x[5]&255)<<8,this.r[2]=(w>>>10|m<<6)&7939,R=x[6]&255|(x[7]&255)<<8,this.r[3]=(m>>>7|R<<9)&8191,j=x[8]&255|(x[9]&255)<<8,this.r[4]=(R>>>4|j<<12)&255,this.r[5]=j>>>1&8190,J=x[10]&255|(x[11]&255)<<8,this.r[6]=(j>>>14|J<<2)&8191,xt=x[12]&255|(x[13]&255)<<8,this.r[7]=(J>>>11|xt<<5)&8065,Tt=x[14]&255|(x[15]&255)<<8,this.r[8]=(xt>>>8|Tt<<8)&8191,this.r[9]=Tt>>>5&127,this.pad[0]=x[16]&255|(x[17]&255)<<8,this.pad[1]=x[18]&255|(x[19]&255)<<8,this.pad[2]=x[20]&255|(x[21]&255)<<8,this.pad[3]=x[22]&255|(x[23]&255)<<8,this.pad[4]=x[24]&255|(x[25]&255)<<8,this.pad[5]=x[26]&255|(x[27]&255)<<8,this.pad[6]=x[28]&255|(x[29]&255)<<8,this.pad[7]=x[30]&255|(x[31]&255)<<8};z.prototype.blocks=function(x,T,w){for(var m=this.fin?0:2048,R,j,J,xt,Tt,qt,Nt,Re,Gt,le,M,H,$,Y,G,st,rt,dt,ot,yt=this.h[0],St=this.h[1],ht=this.h[2],Z=this.h[3],K=this.h[4],pt=this.h[5],at=this.h[6],et=this.h[7],tt=this.h[8],Ht=this.h[9],Bt=this.r[0],ee=this.r[1],ce=this.r[2],N=this.r[3],me=this.r[4],Zt=this.r[5],de=this.r[6],ne=this.r[7],ae=this.r[8],he=this.r[9];w>=16;)R=x[T+0]&255|(x[T+1]&255)<<8,yt+=R&8191,j=x[T+2]&255|(x[T+3]&255)<<8,St+=(R>>>13|j<<3)&8191,J=x[T+4]&255|(x[T+5]&255)<<8,ht+=(j>>>10|J<<6)&8191,xt=x[T+6]&255|(x[T+7]&255)<<8,Z+=(J>>>7|xt<<9)&8191,Tt=x[T+8]&255|(x[T+9]&255)<<8,K+=(xt>>>4|Tt<<12)&8191,pt+=Tt>>>1&8191,qt=x[T+10]&255|(x[T+11]&255)<<8,at+=(Tt>>>14|qt<<2)&8191,Nt=x[T+12]&255|(x[T+13]&255)<<8,et+=(qt>>>11|Nt<<5)&8191,Re=x[T+14]&255|(x[T+15]&255)<<8,tt+=(Nt>>>8|Re<<8)&8191,Ht+=Re>>>5|m,Gt=0,le=Gt,le+=yt*Bt,le+=St*(5*he),le+=ht*(5*ae),le+=Z*(5*ne),le+=K*(5*de),Gt=le>>>13,le&=8191,le+=pt*(5*Zt),le+=at*(5*me),le+=et*(5*N),le+=tt*(5*ce),le+=Ht*(5*ee),Gt+=le>>>13,le&=8191,M=Gt,M+=yt*ee,M+=St*Bt,M+=ht*(5*he),M+=Z*(5*ae),M+=K*(5*ne),Gt=M>>>13,M&=8191,M+=pt*(5*de),M+=at*(5*Zt),M+=et*(5*me),M+=tt*(5*N),M+=Ht*(5*ce),Gt+=M>>>13,M&=8191,H=Gt,H+=yt*ce,H+=St*ee,H+=ht*Bt,H+=Z*(5*he),H+=K*(5*ae),Gt=H>>>13,H&=8191,H+=pt*(5*ne),H+=at*(5*de),H+=et*(5*Zt),H+=tt*(5*me),H+=Ht*(5*N),Gt+=H>>>13,H&=8191,$=Gt,$+=yt*N,$+=St*ce,$+=ht*ee,$+=Z*Bt,$+=K*(5*he),Gt=$>>>13,$&=8191,$+=pt*(5*ae),$+=at*(5*ne),$+=et*(5*de),$+=tt*(5*Zt),$+=Ht*(5*me),Gt+=$>>>13,$&=8191,Y=Gt,Y+=yt*me,Y+=St*N,Y+=ht*ce,Y+=Z*ee,Y+=K*Bt,Gt=Y>>>13,Y&=8191,Y+=pt*(5*he),Y+=at*(5*ae),Y+=et*(5*ne),Y+=tt*(5*de),Y+=Ht*(5*Zt),Gt+=Y>>>13,Y&=8191,G=Gt,G+=yt*Zt,G+=St*me,G+=ht*N,G+=Z*ce,G+=K*ee,Gt=G>>>13,G&=8191,G+=pt*Bt,G+=at*(5*he),G+=et*(5*ae),G+=tt*(5*ne),G+=Ht*(5*de),Gt+=G>>>13,G&=8191,st=Gt,st+=yt*de,st+=St*Zt,st+=ht*me,st+=Z*N,st+=K*ce,Gt=st>>>13,st&=8191,st+=pt*ee,st+=at*Bt,st+=et*(5*he),st+=tt*(5*ae),st+=Ht*(5*ne),Gt+=st>>>13,st&=8191,rt=Gt,rt+=yt*ne,rt+=St*de,rt+=ht*Zt,rt+=Z*me,rt+=K*N,Gt=rt>>>13,rt&=8191,rt+=pt*ce,rt+=at*ee,rt+=et*Bt,rt+=tt*(5*he),rt+=Ht*(5*ae),Gt+=rt>>>13,rt&=8191,dt=Gt,dt+=yt*ae,dt+=St*ne,dt+=ht*de,dt+=Z*Zt,dt+=K*me,Gt=dt>>>13,dt&=8191,dt+=pt*N,dt+=at*ce,dt+=et*ee,dt+=tt*Bt,dt+=Ht*(5*he),Gt+=dt>>>13,dt&=8191,ot=Gt,ot+=yt*he,ot+=St*ae,ot+=ht*ne,ot+=Z*de,ot+=K*Zt,Gt=ot>>>13,ot&=8191,ot+=pt*me,ot+=at*N,ot+=et*ce,ot+=tt*ee,ot+=Ht*Bt,Gt+=ot>>>13,ot&=8191,Gt=(Gt<<2)+Gt|0,Gt=Gt+le|0,le=Gt&8191,Gt=Gt>>>13,M+=Gt,yt=le,St=M,ht=H,Z=$,K=Y,pt=G,at=st,et=rt,tt=dt,Ht=ot,T+=16,w-=16;this.h[0]=yt,this.h[1]=St,this.h[2]=ht,this.h[3]=Z,this.h[4]=K,this.h[5]=pt,this.h[6]=at,this.h[7]=et,this.h[8]=tt,this.h[9]=Ht},z.prototype.finish=function(x,T){var w=new Uint16Array(10),m,R,j,J;if(this.leftover){for(J=this.leftover,this.buffer[J++]=1;J<16;J++)this.buffer[J]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(m=this.h[1]>>>13,this.h[1]&=8191,J=2;J<10;J++)this.h[J]+=m,m=this.h[J]>>>13,this.h[J]&=8191;for(this.h[0]+=m*5,m=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=m,m=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=m,w[0]=this.h[0]+5,m=w[0]>>>13,w[0]&=8191,J=1;J<10;J++)w[J]=this.h[J]+m,m=w[J]>>>13,w[J]&=8191;for(w[9]-=8192,R=(m^1)-1,J=0;J<10;J++)w[J]&=R;for(R=~R,J=0;J<10;J++)this.h[J]=this.h[J]&R|w[J];for(this.h[0]=(this.h[0]|this.h[1]<<13)&65535,this.h[1]=(this.h[1]>>>3|this.h[2]<<10)&65535,this.h[2]=(this.h[2]>>>6|this.h[3]<<7)&65535,this.h[3]=(this.h[3]>>>9|this.h[4]<<4)&65535,this.h[4]=(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14)&65535,this.h[5]=(this.h[6]>>>2|this.h[7]<<11)&65535,this.h[6]=(this.h[7]>>>5|this.h[8]<<8)&65535,this.h[7]=(this.h[8]>>>8|this.h[9]<<5)&65535,j=this.h[0]+this.pad[0],this.h[0]=j&65535,J=1;J<8;J++)j=(this.h[J]+this.pad[J]|0)+(j>>>16)|0,this.h[J]=j&65535;x[T+0]=this.h[0]>>>0&255,x[T+1]=this.h[0]>>>8&255,x[T+2]=this.h[1]>>>0&255,x[T+3]=this.h[1]>>>8&255,x[T+4]=this.h[2]>>>0&255,x[T+5]=this.h[2]>>>8&255,x[T+6]=this.h[3]>>>0&255,x[T+7]=this.h[3]>>>8&255,x[T+8]=this.h[4]>>>0&255,x[T+9]=this.h[4]>>>8&255,x[T+10]=this.h[5]>>>0&255,x[T+11]=this.h[5]>>>8&255,x[T+12]=this.h[6]>>>0&255,x[T+13]=this.h[6]>>>8&255,x[T+14]=this.h[7]>>>0&255,x[T+15]=this.h[7]>>>8&255},z.prototype.update=function(x,T,w){var m,R;if(this.leftover){for(R=16-this.leftover,R>w&&(R=w),m=0;m<R;m++)this.buffer[this.leftover+m]=x[T+m];if(w-=R,T+=R,this.leftover+=R,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(w>=16&&(R=w-w%16,this.blocks(x,T,R),T+=R,w-=R),w){for(m=0;m<w;m++)this.buffer[this.leftover+m]=x[T+m];this.leftover+=w}};function it(x,T,w,m,R,j){var J=new z(j);return J.update(w,m,R),J.finish(x,T),0}function nt(x,T,w,m,R,j){var J=new Uint8Array(16);return it(J,0,w,m,R,j),g(x,T,J,0)}function vt(x,T,w,m,R){var j;if(w<32)return-1;for(b(x,0,T,0,w,m,R),it(x,16,x,32,w-32,x),j=0;j<16;j++)x[j]=0;return 0}function bt(x,T,w,m,R){var j,J=new Uint8Array(32);if(w<32||(P(J,0,32,m,R),nt(T,16,T,32,w-32,J)!==0))return-1;for(b(x,0,T,0,w,m,R),j=0;j<32;j++)x[j]=0;return 0}function ut(x,T){var w;for(w=0;w<16;w++)x[w]=T[w]|0}function Et(x){var T,w,m=1;for(T=0;T<16;T++)w=x[T]+m+65535,m=Math.floor(w/65536),x[T]=w-m*65536;x[0]+=m-1+37*(m-1)}function lt(x,T,w){for(var m,R=~(w-1),j=0;j<16;j++)m=R&(x[j]^T[j]),x[j]^=m,T[j]^=m}function Pt(x,T){var w,m,R,j=e(),J=e();for(w=0;w<16;w++)J[w]=T[w];for(Et(J),Et(J),Et(J),m=0;m<2;m++){for(j[0]=J[0]-65517,w=1;w<15;w++)j[w]=J[w]-65535-(j[w-1]>>16&1),j[w-1]&=65535;j[15]=J[15]-32767-(j[14]>>16&1),R=j[15]>>16&1,j[14]&=65535,lt(J,j,1-R)}for(w=0;w<16;w++)x[2*w]=J[w]&255,x[2*w+1]=J[w]>>8}function Vt(x,T){var w=new Uint8Array(32),m=new Uint8Array(32);return Pt(w,x),Pt(m,T),d(w,0,m,0)}function Jt(x){var T=new Uint8Array(32);return Pt(T,x),T[0]&1}function ve(x,T){var w;for(w=0;w<16;w++)x[w]=T[2*w]+(T[2*w+1]<<8);x[15]&=32767}function Me(x,T,w){for(var m=0;m<16;m++)x[m]=T[m]+w[m]}function ft(x,T,w){for(var m=0;m<16;m++)x[m]=T[m]-w[m]}function mt(x,T,w){var m,R,j=0,J=0,xt=0,Tt=0,qt=0,Nt=0,Re=0,Gt=0,le=0,M=0,H=0,$=0,Y=0,G=0,st=0,rt=0,dt=0,ot=0,yt=0,St=0,ht=0,Z=0,K=0,pt=0,at=0,et=0,tt=0,Ht=0,Bt=0,ee=0,ce=0,N=w[0],me=w[1],Zt=w[2],de=w[3],ne=w[4],ae=w[5],he=w[6],qe=w[7],Te=w[8],Ke=w[9],Je=w[10],Qe=w[11],sn=w[12],dn=w[13],pn=w[14],mn=w[15];m=T[0],j+=m*N,J+=m*me,xt+=m*Zt,Tt+=m*de,qt+=m*ne,Nt+=m*ae,Re+=m*he,Gt+=m*qe,le+=m*Te,M+=m*Ke,H+=m*Je,$+=m*Qe,Y+=m*sn,G+=m*dn,st+=m*pn,rt+=m*mn,m=T[1],J+=m*N,xt+=m*me,Tt+=m*Zt,qt+=m*de,Nt+=m*ne,Re+=m*ae,Gt+=m*he,le+=m*qe,M+=m*Te,H+=m*Ke,$+=m*Je,Y+=m*Qe,G+=m*sn,st+=m*dn,rt+=m*pn,dt+=m*mn,m=T[2],xt+=m*N,Tt+=m*me,qt+=m*Zt,Nt+=m*de,Re+=m*ne,Gt+=m*ae,le+=m*he,M+=m*qe,H+=m*Te,$+=m*Ke,Y+=m*Je,G+=m*Qe,st+=m*sn,rt+=m*dn,dt+=m*pn,ot+=m*mn,m=T[3],Tt+=m*N,qt+=m*me,Nt+=m*Zt,Re+=m*de,Gt+=m*ne,le+=m*ae,M+=m*he,H+=m*qe,$+=m*Te,Y+=m*Ke,G+=m*Je,st+=m*Qe,rt+=m*sn,dt+=m*dn,ot+=m*pn,yt+=m*mn,m=T[4],qt+=m*N,Nt+=m*me,Re+=m*Zt,Gt+=m*de,le+=m*ne,M+=m*ae,H+=m*he,$+=m*qe,Y+=m*Te,G+=m*Ke,st+=m*Je,rt+=m*Qe,dt+=m*sn,ot+=m*dn,yt+=m*pn,St+=m*mn,m=T[5],Nt+=m*N,Re+=m*me,Gt+=m*Zt,le+=m*de,M+=m*ne,H+=m*ae,$+=m*he,Y+=m*qe,G+=m*Te,st+=m*Ke,rt+=m*Je,dt+=m*Qe,ot+=m*sn,yt+=m*dn,St+=m*pn,ht+=m*mn,m=T[6],Re+=m*N,Gt+=m*me,le+=m*Zt,M+=m*de,H+=m*ne,$+=m*ae,Y+=m*he,G+=m*qe,st+=m*Te,rt+=m*Ke,dt+=m*Je,ot+=m*Qe,yt+=m*sn,St+=m*dn,ht+=m*pn,Z+=m*mn,m=T[7],Gt+=m*N,le+=m*me,M+=m*Zt,H+=m*de,$+=m*ne,Y+=m*ae,G+=m*he,st+=m*qe,rt+=m*Te,dt+=m*Ke,ot+=m*Je,yt+=m*Qe,St+=m*sn,ht+=m*dn,Z+=m*pn,K+=m*mn,m=T[8],le+=m*N,M+=m*me,H+=m*Zt,$+=m*de,Y+=m*ne,G+=m*ae,st+=m*he,rt+=m*qe,dt+=m*Te,ot+=m*Ke,yt+=m*Je,St+=m*Qe,ht+=m*sn,Z+=m*dn,K+=m*pn,pt+=m*mn,m=T[9],M+=m*N,H+=m*me,$+=m*Zt,Y+=m*de,G+=m*ne,st+=m*ae,rt+=m*he,dt+=m*qe,ot+=m*Te,yt+=m*Ke,St+=m*Je,ht+=m*Qe,Z+=m*sn,K+=m*dn,pt+=m*pn,at+=m*mn,m=T[10],H+=m*N,$+=m*me,Y+=m*Zt,G+=m*de,st+=m*ne,rt+=m*ae,dt+=m*he,ot+=m*qe,yt+=m*Te,St+=m*Ke,ht+=m*Je,Z+=m*Qe,K+=m*sn,pt+=m*dn,at+=m*pn,et+=m*mn,m=T[11],$+=m*N,Y+=m*me,G+=m*Zt,st+=m*de,rt+=m*ne,dt+=m*ae,ot+=m*he,yt+=m*qe,St+=m*Te,ht+=m*Ke,Z+=m*Je,K+=m*Qe,pt+=m*sn,at+=m*dn,et+=m*pn,tt+=m*mn,m=T[12],Y+=m*N,G+=m*me,st+=m*Zt,rt+=m*de,dt+=m*ne,ot+=m*ae,yt+=m*he,St+=m*qe,ht+=m*Te,Z+=m*Ke,K+=m*Je,pt+=m*Qe,at+=m*sn,et+=m*dn,tt+=m*pn,Ht+=m*mn,m=T[13],G+=m*N,st+=m*me,rt+=m*Zt,dt+=m*de,ot+=m*ne,yt+=m*ae,St+=m*he,ht+=m*qe,Z+=m*Te,K+=m*Ke,pt+=m*Je,at+=m*Qe,et+=m*sn,tt+=m*dn,Ht+=m*pn,Bt+=m*mn,m=T[14],st+=m*N,rt+=m*me,dt+=m*Zt,ot+=m*de,yt+=m*ne,St+=m*ae,ht+=m*he,Z+=m*qe,K+=m*Te,pt+=m*Ke,at+=m*Je,et+=m*Qe,tt+=m*sn,Ht+=m*dn,Bt+=m*pn,ee+=m*mn,m=T[15],rt+=m*N,dt+=m*me,ot+=m*Zt,yt+=m*de,St+=m*ne,ht+=m*ae,Z+=m*he,K+=m*qe,pt+=m*Te,at+=m*Ke,et+=m*Je,tt+=m*Qe,Ht+=m*sn,Bt+=m*dn,ee+=m*pn,ce+=m*mn,j+=38*dt,J+=38*ot,xt+=38*yt,Tt+=38*St,qt+=38*ht,Nt+=38*Z,Re+=38*K,Gt+=38*pt,le+=38*at,M+=38*et,H+=38*tt,$+=38*Ht,Y+=38*Bt,G+=38*ee,st+=38*ce,R=1,m=j+R+65535,R=Math.floor(m/65536),j=m-R*65536,m=J+R+65535,R=Math.floor(m/65536),J=m-R*65536,m=xt+R+65535,R=Math.floor(m/65536),xt=m-R*65536,m=Tt+R+65535,R=Math.floor(m/65536),Tt=m-R*65536,m=qt+R+65535,R=Math.floor(m/65536),qt=m-R*65536,m=Nt+R+65535,R=Math.floor(m/65536),Nt=m-R*65536,m=Re+R+65535,R=Math.floor(m/65536),Re=m-R*65536,m=Gt+R+65535,R=Math.floor(m/65536),Gt=m-R*65536,m=le+R+65535,R=Math.floor(m/65536),le=m-R*65536,m=M+R+65535,R=Math.floor(m/65536),M=m-R*65536,m=H+R+65535,R=Math.floor(m/65536),H=m-R*65536,m=$+R+65535,R=Math.floor(m/65536),$=m-R*65536,m=Y+R+65535,R=Math.floor(m/65536),Y=m-R*65536,m=G+R+65535,R=Math.floor(m/65536),G=m-R*65536,m=st+R+65535,R=Math.floor(m/65536),st=m-R*65536,m=rt+R+65535,R=Math.floor(m/65536),rt=m-R*65536,j+=R-1+37*(R-1),R=1,m=j+R+65535,R=Math.floor(m/65536),j=m-R*65536,m=J+R+65535,R=Math.floor(m/65536),J=m-R*65536,m=xt+R+65535,R=Math.floor(m/65536),xt=m-R*65536,m=Tt+R+65535,R=Math.floor(m/65536),Tt=m-R*65536,m=qt+R+65535,R=Math.floor(m/65536),qt=m-R*65536,m=Nt+R+65535,R=Math.floor(m/65536),Nt=m-R*65536,m=Re+R+65535,R=Math.floor(m/65536),Re=m-R*65536,m=Gt+R+65535,R=Math.floor(m/65536),Gt=m-R*65536,m=le+R+65535,R=Math.floor(m/65536),le=m-R*65536,m=M+R+65535,R=Math.floor(m/65536),M=m-R*65536,m=H+R+65535,R=Math.floor(m/65536),H=m-R*65536,m=$+R+65535,R=Math.floor(m/65536),$=m-R*65536,m=Y+R+65535,R=Math.floor(m/65536),Y=m-R*65536,m=G+R+65535,R=Math.floor(m/65536),G=m-R*65536,m=st+R+65535,R=Math.floor(m/65536),st=m-R*65536,m=rt+R+65535,R=Math.floor(m/65536),rt=m-R*65536,j+=R-1+37*(R-1),x[0]=j,x[1]=J,x[2]=xt,x[3]=Tt,x[4]=qt,x[5]=Nt,x[6]=Re,x[7]=Gt,x[8]=le,x[9]=M,x[10]=H,x[11]=$,x[12]=Y,x[13]=G,x[14]=st,x[15]=rt}function Ot(x,T){mt(x,T,T)}function Ut(x,T){var w=e(),m;for(m=0;m<16;m++)w[m]=T[m];for(m=253;m>=0;m--)Ot(w,w),m!==2&&m!==4&&mt(w,w,T);for(m=0;m<16;m++)x[m]=w[m]}function re(x,T){var w=e(),m;for(m=0;m<16;m++)w[m]=T[m];for(m=250;m>=0;m--)Ot(w,w),m!==1&&mt(w,w,T);for(m=0;m<16;m++)x[m]=w[m]}function fe(x,T,w){var m=new Uint8Array(32),R=new Float64Array(80),j,J,xt=e(),Tt=e(),qt=e(),Nt=e(),Re=e(),Gt=e();for(J=0;J<31;J++)m[J]=T[J];for(m[31]=T[31]&127|64,m[0]&=248,ve(R,w),J=0;J<16;J++)Tt[J]=R[J],Nt[J]=xt[J]=qt[J]=0;for(xt[0]=Nt[0]=1,J=254;J>=0;--J)j=m[J>>>3]>>>(J&7)&1,lt(xt,Tt,j),lt(qt,Nt,j),Me(Re,xt,qt),ft(xt,xt,qt),Me(qt,Tt,Nt),ft(Tt,Tt,Nt),Ot(Nt,Re),Ot(Gt,xt),mt(xt,qt,xt),mt(qt,Tt,Re),Me(Re,xt,qt),ft(xt,xt,qt),Ot(Tt,xt),ft(qt,Nt,Gt),mt(xt,qt,l),Me(xt,xt,Nt),mt(qt,qt,xt),mt(xt,Nt,Gt),mt(Nt,Tt,R),Ot(Tt,Re),lt(xt,Tt,j),lt(qt,Nt,j);for(J=0;J<16;J++)R[J+16]=xt[J],R[J+32]=qt[J],R[J+48]=Tt[J],R[J+64]=Nt[J];var le=R.subarray(32),M=R.subarray(16);return Ut(le,le),mt(M,M,le),Pt(x,M),0}function ge(x,T){return fe(x,T,r)}function Xe(x,T){return n(T,32),ge(x,T)}function we(x,T,w){var m=new Uint8Array(32);return fe(m,w,T),B(x,s,m,F)}var $e=vt,X=bt;function Tn(x,T,w,m,R,j){var J=new Uint8Array(32);return we(J,R,j),$e(x,T,w,m,J)}function Ae(x,T,w,m,R,j){var J=new Uint8Array(32);return we(J,R,j),X(x,T,w,m,J)}var Ee=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function Qt(x,T,w,m){for(var R=new Int32Array(16),j=new Int32Array(16),J,xt,Tt,qt,Nt,Re,Gt,le,M,H,$,Y,G,st,rt,dt,ot,yt,St,ht,Z,K,pt,at,et,tt,Ht=x[0],Bt=x[1],ee=x[2],ce=x[3],N=x[4],me=x[5],Zt=x[6],de=x[7],ne=T[0],ae=T[1],he=T[2],qe=T[3],Te=T[4],Ke=T[5],Je=T[6],Qe=T[7],sn=0;m>=128;){for(St=0;St<16;St++)ht=8*St+sn,R[St]=w[ht+0]<<24|w[ht+1]<<16|w[ht+2]<<8|w[ht+3],j[St]=w[ht+4]<<24|w[ht+5]<<16|w[ht+6]<<8|w[ht+7];for(St=0;St<80;St++)if(J=Ht,xt=Bt,Tt=ee,qt=ce,Nt=N,Re=me,Gt=Zt,le=de,M=ne,H=ae,$=he,Y=qe,G=Te,st=Ke,rt=Je,dt=Qe,Z=de,K=Qe,pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=(N>>>14|Te<<18)^(N>>>18|Te<<14)^(Te>>>9|N<<23),K=(Te>>>14|N<<18)^(Te>>>18|N<<14)^(N>>>9|Te<<23),pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,Z=N&me^~N&Zt,K=Te&Ke^~Te&Je,pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,Z=Ee[St*2],K=Ee[St*2+1],pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,Z=R[St%16],K=j[St%16],pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,ot=et&65535|tt<<16,yt=pt&65535|at<<16,Z=ot,K=yt,pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=(Ht>>>28|ne<<4)^(ne>>>2|Ht<<30)^(ne>>>7|Ht<<25),K=(ne>>>28|Ht<<4)^(Ht>>>2|ne<<30)^(Ht>>>7|ne<<25),pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,Z=Ht&Bt^Ht&ee^Bt&ee,K=ne&ae^ne&he^ae&he,pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,le=et&65535|tt<<16,dt=pt&65535|at<<16,Z=qt,K=Y,pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=ot,K=yt,pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,qt=et&65535|tt<<16,Y=pt&65535|at<<16,Bt=J,ee=xt,ce=Tt,N=qt,me=Nt,Zt=Re,de=Gt,Ht=le,ae=M,he=H,qe=$,Te=Y,Ke=G,Je=st,Qe=rt,ne=dt,St%16===15)for(ht=0;ht<16;ht++)Z=R[ht],K=j[ht],pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=R[(ht+9)%16],K=j[(ht+9)%16],pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,ot=R[(ht+1)%16],yt=j[(ht+1)%16],Z=(ot>>>1|yt<<31)^(ot>>>8|yt<<24)^ot>>>7,K=(yt>>>1|ot<<31)^(yt>>>8|ot<<24)^(yt>>>7|ot<<25),pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,ot=R[(ht+14)%16],yt=j[(ht+14)%16],Z=(ot>>>19|yt<<13)^(yt>>>29|ot<<3)^ot>>>6,K=(yt>>>19|ot<<13)^(ot>>>29|yt<<3)^(yt>>>6|ot<<26),pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,R[ht]=et&65535|tt<<16,j[ht]=pt&65535|at<<16;Z=Ht,K=ne,pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=x[0],K=T[0],pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,x[0]=Ht=et&65535|tt<<16,T[0]=ne=pt&65535|at<<16,Z=Bt,K=ae,pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=x[1],K=T[1],pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,x[1]=Bt=et&65535|tt<<16,T[1]=ae=pt&65535|at<<16,Z=ee,K=he,pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=x[2],K=T[2],pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,x[2]=ee=et&65535|tt<<16,T[2]=he=pt&65535|at<<16,Z=ce,K=qe,pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=x[3],K=T[3],pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,x[3]=ce=et&65535|tt<<16,T[3]=qe=pt&65535|at<<16,Z=N,K=Te,pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=x[4],K=T[4],pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,x[4]=N=et&65535|tt<<16,T[4]=Te=pt&65535|at<<16,Z=me,K=Ke,pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=x[5],K=T[5],pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,x[5]=me=et&65535|tt<<16,T[5]=Ke=pt&65535|at<<16,Z=Zt,K=Je,pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=x[6],K=T[6],pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,x[6]=Zt=et&65535|tt<<16,T[6]=Je=pt&65535|at<<16,Z=de,K=Qe,pt=K&65535,at=K>>>16,et=Z&65535,tt=Z>>>16,Z=x[7],K=T[7],pt+=K&65535,at+=K>>>16,et+=Z&65535,tt+=Z>>>16,at+=pt>>>16,et+=at>>>16,tt+=et>>>16,x[7]=de=et&65535|tt<<16,T[7]=Qe=pt&65535|at<<16,sn+=128,m-=128}return m}function Fe(x,T,w){var m=new Int32Array(8),R=new Int32Array(8),j=new Uint8Array(256),J,xt=w;for(m[0]=1779033703,m[1]=3144134277,m[2]=1013904242,m[3]=2773480762,m[4]=1359893119,m[5]=2600822924,m[6]=528734635,m[7]=1541459225,R[0]=4089235720,R[1]=2227873595,R[2]=4271175723,R[3]=1595750129,R[4]=2917565137,R[5]=725511199,R[6]=4215389547,R[7]=327033209,Qt(m,R,T,w),w%=128,J=0;J<w;J++)j[J]=T[xt-w+J];for(j[w]=128,w=256-128*(w<112?1:0),j[w-9]=0,v(j,w-8,xt/536870912|0,xt<<3),Qt(m,R,j,w),J=0;J<8;J++)v(x,8*J,m[J],R[J]);return 0}function jt(x,T){var w=e(),m=e(),R=e(),j=e(),J=e(),xt=e(),Tt=e(),qt=e(),Nt=e();ft(w,x[1],x[0]),ft(Nt,T[1],T[0]),mt(w,w,Nt),Me(m,x[0],x[1]),Me(Nt,T[0],T[1]),mt(m,m,Nt),mt(R,x[3],T[3]),mt(R,R,h),mt(j,x[2],T[2]),Me(j,j,j),ft(J,m,w),ft(xt,j,R),Me(Tt,j,R),Me(qt,m,w),mt(x[0],J,xt),mt(x[1],qt,Tt),mt(x[2],Tt,xt),mt(x[3],J,qt)}function I(x,T,w){var m;for(m=0;m<4;m++)lt(x[m],T[m],w)}function A(x,T){var w=e(),m=e(),R=e();Ut(R,T[2]),mt(w,T[0],R),mt(m,T[1],R),Pt(x,m),x[31]^=Jt(w)<<7}function Q(x,T,w){var m,R;for(ut(x[0],a),ut(x[1],o),ut(x[2],o),ut(x[3],a),R=255;R>=0;--R)m=w[R/8|0]>>(R&7)&1,I(x,T,m),jt(T,x),jt(x,x),I(x,T,m)}function _t(x,T){var w=[e(),e(),e(),e()];ut(w[0],u),ut(w[1],f),ut(w[2],o),mt(w[3],u,f),Q(x,w,T)}function wt(x,T,w){var m=new Uint8Array(64),R=[e(),e(),e(),e()],j;for(w||n(T,32),Fe(m,T,32),m[0]&=248,m[31]&=127,m[31]|=64,_t(R,m),A(x,R),j=0;j<32;j++)T[j+32]=x[j];return 0}var gt=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function $t(x,T){var w,m,R,j;for(m=63;m>=32;--m){for(w=0,R=m-32,j=m-12;R<j;++R)T[R]+=w-16*T[m]*gt[R-(m-32)],w=Math.floor((T[R]+128)/256),T[R]-=w*256;T[R]+=w,T[m]=0}for(w=0,R=0;R<32;R++)T[R]+=w-(T[31]>>4)*gt[R],w=T[R]>>8,T[R]&=255;for(R=0;R<32;R++)T[R]-=w*gt[R];for(m=0;m<32;m++)T[m+1]+=T[m]>>8,x[m]=T[m]&255}function Dt(x){var T=new Float64Array(64),w;for(w=0;w<64;w++)T[w]=x[w];for(w=0;w<64;w++)x[w]=0;$t(x,T)}function Wt(x,T,w,m){var R=new Uint8Array(64),j=new Uint8Array(64),J=new Uint8Array(64),xt,Tt,qt=new Float64Array(64),Nt=[e(),e(),e(),e()];Fe(R,m,32),R[0]&=248,R[31]&=127,R[31]|=64;var Re=w+64;for(xt=0;xt<w;xt++)x[64+xt]=T[xt];for(xt=0;xt<32;xt++)x[32+xt]=R[32+xt];for(Fe(J,x.subarray(32),w+32),Dt(J),_t(Nt,J),A(x,Nt),xt=32;xt<64;xt++)x[xt]=m[xt];for(Fe(j,x,w+64),Dt(j),xt=0;xt<64;xt++)qt[xt]=0;for(xt=0;xt<32;xt++)qt[xt]=J[xt];for(xt=0;xt<32;xt++)for(Tt=0;Tt<32;Tt++)qt[xt+Tt]+=j[xt]*R[Tt];return $t(x.subarray(32),qt),Re}function Ce(x,T){var w=e(),m=e(),R=e(),j=e(),J=e(),xt=e(),Tt=e();return ut(x[2],o),ve(x[1],T),Ot(R,x[1]),mt(j,R,c),ft(R,R,x[2]),Me(j,x[2],j),Ot(J,j),Ot(xt,J),mt(Tt,xt,J),mt(w,Tt,R),mt(w,w,j),re(w,w),mt(w,w,R),mt(w,w,j),mt(w,w,j),mt(x[0],w,j),Ot(m,x[0]),mt(m,m,j),Vt(m,R)&&mt(x[0],x[0],p),Ot(m,x[0]),mt(m,m,j),Vt(m,R)?-1:(Jt(x[0])===T[31]>>7&&ft(x[0],a,x[0]),mt(x[3],x[0],x[1]),0)}function At(x,T,w,m){var R,j=new Uint8Array(32),J=new Uint8Array(64),xt=[e(),e(),e(),e()],Tt=[e(),e(),e(),e()];if(w<64||Ce(Tt,m))return-1;for(R=0;R<w;R++)x[R]=T[R];for(R=0;R<32;R++)x[R+32]=m[R];if(Fe(J,x,w),Dt(J),Q(xt,Tt,J),_t(Tt,T.subarray(32)),jt(xt,Tt),A(j,xt),w-=64,d(T,0,j,0)){for(R=0;R<w;R++)x[R]=0;return-1}for(R=0;R<w;R++)x[R]=T[R+64];return w}var Xt=32,te=24,se=32,zt=16,_e=32,pe=32,De=32,q=32,Lt=32,ct=te,Mt=se,kt=zt,Rt=64,oe=32,ze=64,tn=32,Le=64;t.lowlevel={crypto_core_hsalsa20:B,crypto_stream_xor:b,crypto_stream:P,crypto_stream_salsa20_xor:L,crypto_stream_salsa20:k,crypto_onetimeauth:it,crypto_onetimeauth_verify:nt,crypto_verify_16:g,crypto_verify_32:d,crypto_secretbox:vt,crypto_secretbox_open:bt,crypto_scalarmult:fe,crypto_scalarmult_base:ge,crypto_box_beforenm:we,crypto_box_afternm:$e,crypto_box:Tn,crypto_box_open:Ae,crypto_box_keypair:Xe,crypto_hash:Fe,crypto_sign:Wt,crypto_sign_keypair:wt,crypto_sign_open:At,crypto_secretbox_KEYBYTES:Xt,crypto_secretbox_NONCEBYTES:te,crypto_secretbox_ZEROBYTES:se,crypto_secretbox_BOXZEROBYTES:zt,crypto_scalarmult_BYTES:_e,crypto_scalarmult_SCALARBYTES:pe,crypto_box_PUBLICKEYBYTES:De,crypto_box_SECRETKEYBYTES:q,crypto_box_BEFORENMBYTES:Lt,crypto_box_NONCEBYTES:ct,crypto_box_ZEROBYTES:Mt,crypto_box_BOXZEROBYTES:kt,crypto_sign_BYTES:Rt,crypto_sign_PUBLICKEYBYTES:oe,crypto_sign_SECRETKEYBYTES:ze,crypto_sign_SEEDBYTES:tn,crypto_hash_BYTES:Le,gf:e,D:c,L:gt,pack25519:Pt,unpack25519:ve,M:mt,A:Me,S:Ot,Z:ft,pow2523:re,add:jt,set25519:ut,modL:$t,scalarmult:Q,scalarbase:_t};function An(x,T){if(x.length!==Xt)throw new Error("bad key size");if(T.length!==te)throw new Error("bad nonce size")}function kn(x,T){if(x.length!==De)throw new Error("bad public key size");if(T.length!==q)throw new Error("bad secret key size")}function fn(){for(var x=0;x<arguments.length;x++)if(!(arguments[x]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function Ls(x){for(var T=0;T<x.length;T++)x[T]=0}t.randomBytes=function(x){var T=new Uint8Array(x);return n(T,x),T},t.secretbox=function(x,T,w){fn(x,T,w),An(w,T);for(var m=new Uint8Array(se+x.length),R=new Uint8Array(m.length),j=0;j<x.length;j++)m[j+se]=x[j];return vt(R,m,m.length,T,w),R.subarray(zt)},t.secretbox.open=function(x,T,w){fn(x,T,w),An(w,T);for(var m=new Uint8Array(zt+x.length),R=new Uint8Array(m.length),j=0;j<x.length;j++)m[j+zt]=x[j];return m.length<32||bt(R,m,m.length,T,w)!==0?null:R.subarray(se)},t.secretbox.keyLength=Xt,t.secretbox.nonceLength=te,t.secretbox.overheadLength=zt,t.scalarMult=function(x,T){if(fn(x,T),x.length!==pe)throw new Error("bad n size");if(T.length!==_e)throw new Error("bad p size");var w=new Uint8Array(_e);return fe(w,x,T),w},t.scalarMult.base=function(x){if(fn(x),x.length!==pe)throw new Error("bad n size");var T=new Uint8Array(_e);return ge(T,x),T},t.scalarMult.scalarLength=pe,t.scalarMult.groupElementLength=_e,t.box=function(x,T,w,m){var R=t.box.before(w,m);return t.secretbox(x,T,R)},t.box.before=function(x,T){fn(x,T),kn(x,T);var w=new Uint8Array(Lt);return we(w,x,T),w},t.box.after=t.secretbox,t.box.open=function(x,T,w,m){var R=t.box.before(w,m);return t.secretbox.open(x,T,R)},t.box.open.after=t.secretbox.open,t.box.keyPair=function(){var x=new Uint8Array(De),T=new Uint8Array(q);return Xe(x,T),{publicKey:x,secretKey:T}},t.box.keyPair.fromSecretKey=function(x){if(fn(x),x.length!==q)throw new Error("bad secret key size");var T=new Uint8Array(De);return ge(T,x),{publicKey:T,secretKey:new Uint8Array(x)}},t.box.publicKeyLength=De,t.box.secretKeyLength=q,t.box.sharedKeyLength=Lt,t.box.nonceLength=ct,t.box.overheadLength=t.secretbox.overheadLength,t.sign=function(x,T){if(fn(x,T),T.length!==ze)throw new Error("bad secret key size");var w=new Uint8Array(Rt+x.length);return Wt(w,x,x.length,T),w},t.sign.open=function(x,T){if(fn(x,T),T.length!==oe)throw new Error("bad public key size");var w=new Uint8Array(x.length),m=At(w,x,x.length,T);if(m<0)return null;for(var R=new Uint8Array(m),j=0;j<R.length;j++)R[j]=w[j];return R},t.sign.detached=function(x,T){for(var w=t.sign(x,T),m=new Uint8Array(Rt),R=0;R<m.length;R++)m[R]=w[R];return m},t.sign.detached.verify=function(x,T,w){if(fn(x,T,w),T.length!==Rt)throw new Error("bad signature size");if(w.length!==oe)throw new Error("bad public key size");var m=new Uint8Array(Rt+x.length),R=new Uint8Array(Rt+x.length),j;for(j=0;j<Rt;j++)m[j]=T[j];for(j=0;j<x.length;j++)m[j+Rt]=x[j];return At(R,m,m.length,w)>=0},t.sign.keyPair=function(){var x=new Uint8Array(oe),T=new Uint8Array(ze);return wt(x,T),{publicKey:x,secretKey:T}},t.sign.keyPair.fromSecretKey=function(x){if(fn(x),x.length!==ze)throw new Error("bad secret key size");for(var T=new Uint8Array(oe),w=0;w<T.length;w++)T[w]=x[32+w];return{publicKey:T,secretKey:new Uint8Array(x)}},t.sign.keyPair.fromSeed=function(x){if(fn(x),x.length!==tn)throw new Error("bad seed size");for(var T=new Uint8Array(oe),w=new Uint8Array(ze),m=0;m<32;m++)w[m]=x[m];return wt(T,w,!0),{publicKey:T,secretKey:w}},t.sign.publicKeyLength=oe,t.sign.secretKeyLength=ze,t.sign.seedLength=tn,t.sign.signatureLength=Rt,t.hash=function(x){fn(x);var T=new Uint8Array(Le);return Fe(T,x,x.length),T},t.hash.hashLength=Le,t.verify=function(x,T){return fn(x,T),x.length===0||T.length===0||x.length!==T.length?!1:y(x,0,T,0,x.length)===0},t.setPRNG=function(x){n=x},(function(){var x=typeof self<"u"?self.crypto||self.msCrypto:null;if(x&&x.getRandomValues){var T=65536;t.setPRNG(function(w,m){var R,j=new Uint8Array(m);for(R=0;R<m;R+=T)x.getRandomValues(j.subarray(R,R+Math.min(m-R,T)));for(R=0;R<m;R++)w[R]=j[R];Ls(j)})}else typeof jx<"u"&&(x=Jx,x&&x.randomBytes&&t.setPRNG(function(w,m){var R,j=x.randomBytes(m);for(R=0;R<m;R++)w[R]=j[R];Ls(j)}))})()})(i.exports?i.exports:self.nacl=self.nacl||{})})(Ya)),Ya.exports}var t_=Qx();const ou=Yx(t_);function e_(i){if(i.length>=255)throw new TypeError("Alphabet too long");const t=new Uint8Array(256);for(let c=0;c<t.length;c++)t[c]=255;for(let c=0;c<i.length;c++){const h=i.charAt(c),u=h.charCodeAt(0);if(t[u]!==255)throw new TypeError(h+" is ambiguous");t[u]=c}const e=i.length,n=i.charAt(0),s=Math.log(e)/Math.log(256),r=Math.log(256)/Math.log(e);function a(c){if(c instanceof Uint8Array||(ArrayBuffer.isView(c)?c=new Uint8Array(c.buffer,c.byteOffset,c.byteLength):Array.isArray(c)&&(c=Uint8Array.from(c))),!(c instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(c.length===0)return"";let h=0,u=0,f=0;const p=c.length;for(;f!==p&&c[f]===0;)f++,h++;const v=(p-f)*r+1>>>0,y=new Uint8Array(v);for(;f!==p;){let S=c[f],C=0;for(let E=v-1;(S!==0||C<u)&&E!==-1;E--,C++)S+=256*y[E]>>>0,y[E]=S%e>>>0,S=S/e>>>0;if(S!==0)throw new Error("Non-zero carry");u=C,f++}let g=v-u;for(;g!==v&&y[g]===0;)g++;let d=n.repeat(h);for(;g<v;++g)d+=i.charAt(y[g]);return d}function o(c){if(typeof c!="string")throw new TypeError("Expected String");if(c.length===0)return new Uint8Array;let h=0,u=0,f=0;for(;c[h]===n;)u++,h++;const p=(c.length-h)*s+1>>>0,v=new Uint8Array(p);for(;h<c.length;){const S=c.charCodeAt(h);if(S>255)return;let C=t[S];if(C===255)return;let E=0;for(let B=p-1;(C!==0||E<f)&&B!==-1;B--,E++)C+=e*v[B]>>>0,v[B]=C%256>>>0,C=C/256>>>0;if(C!==0)throw new Error("Non-zero carry");f=E,h++}let y=p-f;for(;y!==p&&v[y]===0;)y++;const g=new Uint8Array(u+(p-y));let d=u;for(;y!==p;)g[d++]=v[y++];return g}function l(c){const h=o(c);if(h)return h;throw new Error("Non-base"+e+" character")}return{encode:a,decodeUnsafe:o,decode:l}}var n_="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";const ps=e_(n_);function ko(i){const t=i.publicKey;return t?typeof t.toBase58=="function"?t.toBase58():t.toString():null}function nh(i){if(i&&typeof i=="object"){const t=i;if(t.code===4001)return"Request rejected in wallet.";if(typeof t.message=="string"&&t.message.trim())return t.message}return i instanceof Error&&i.message.trim()?i.message:"Wallet request failed."}function i_(i){return["Sign in to Mail Run","","This proves you own the wallet. No transaction or fee.",`Site: ${window.location.host}`,`Wallet: ${i}`,`Time: ${new Date().toISOString()}`].join(`
`)}async function s_(i,t){if(!i.signMessage)throw new Error("This wallet cannot sign messages. Use Phantom or Solflare.");const e=i_(t),n=new TextEncoder().encode(e),s=await i.signMessage(n,"utf8"),r=ko({publicKey:s.publicKey});if(r&&r!==t)throw new Error("Signed wallet does not match the connected wallet.")}const lu="mailrun_phantom_mobile";function ol(){try{const i=sessionStorage.getItem(lu);return i?JSON.parse(i):null}catch{return null}}function ih(i){sessionStorage.setItem(lu,JSON.stringify(i))}function Xs(){const i=new URL(window.location.href);i.searchParams.delete("phantom"),i.searchParams.delete("phantom_encryption_public_key"),i.searchParams.delete("nonce"),i.searchParams.delete("data"),i.searchParams.delete("errorCode"),i.searchParams.delete("errorMessage"),window.history.replaceState({},document.title,i.pathname+i.search+i.hash)}function sh(i,t,e){const n=ou.box.open.after(ps.decode(i),ps.decode(t),e);if(!n)throw new Error("Unable to decrypt Phantom response");return JSON.parse(new TextDecoder().decode(n))}function rh(){var i;return!!((i=window.solana)!=null&&i.isPhantom)}function r_(){const i=new URL(window.location.href);return i.searchParams.delete("phantom"),i.searchParams.delete("phantom_encryption_public_key"),i.searchParams.delete("nonce"),i.searchParams.delete("data"),i.searchParams.delete("errorCode"),i.searchParams.delete("errorMessage"),i.toString()}function Vs(){const i=ol();return i!=null&&i.walletAddress?i.walletAddress:null}function a_(){const i=ol();return!!(i!=null&&i.signed&&i.walletAddress)}function o_(){const i=new URLSearchParams(window.location.search);if(!i.get("errorCode"))return null;const t=i.get("errorMessage")||"Request rejected in wallet.";return Xs(),t}function l_(){const i=new URLSearchParams(window.location.search),t=i.get("phantom");if(!t)return"none";if(i.get("errorCode"))return Xs(),"rejected";const e=ol();if(!(e!=null&&e.dappSecretKey))throw Xs(),new Error("Wallet session expired. Tap Connect again.");const n=ps.decode(e.dappSecretKey);if(t==="connect"){const s=i.get("phantom_encryption_public_key"),r=i.get("nonce"),a=i.get("data");if(!s||!r||!a)return"none";const o=ou.box.before(ps.decode(s),n),l=sh(a,r,o);return ih({...e,sharedSecret:ps.encode(o),phantomSession:l.session,walletAddress:l.public_key,signed:!0}),Xs(),"connect_ok"}if(t==="sign"){const s=i.get("nonce"),r=i.get("data");return!s||!r||!e.sharedSecret?"none":(sh(r,s,ps.decode(e.sharedSecret)),ih({...e,signed:!0}),Xs(),"sign_ok")}return"none"}const ah={1:"district-sunny",2:"district-downtown",3:"district-desert",4:"district-jungle",5:"district-industrial",6:"district-neon",7:"district-blackzone"},oh={1:{icon:"🏡",tagline:"Suburban first contacts — aliens in the hedges"},2:{icon:"🏙️",tagline:"Downtown chaos — deliver through the warzone"},3:{icon:"🏜️",tagline:"Desert heat — sand, scorpions, and saucers"},4:{icon:"🌴",tagline:"Jungle overrun — vines, spores, and stalkers"},5:{icon:"🏭",tagline:"Industrial rain — acid leaks and blackouts"},6:{icon:"🌃",tagline:"Neon night — synthwave slaughter highway"},7:{icon:"☠️",tagline:"The Black Zone — no mercy, no overtime"}};function c_(i){for(let t=i.segments.length-1;t>=0;t--){const e=i.segments[t];if(e.kind==="dropoff")return e.z}return 750}function h_(i){return I1(i).split(" · ").map(t=>`<span class="hazard-chip">${t}</span>`).join("")}class u_{constructor(t,e,n){U(this,"root");U(this,"save");U(this,"tokenGate");U(this,"gateUnsub",null);U(this,"menuScreen",null);U(this,"game",null);U(this,"screen","menu");U(this,"hudCache",{});U(this,"tapHintTimer",null);U(this,"activeLevelId","");this.root=t,this.save=e,this.tokenGate=n,this.gateUnsub=n.subscribe(()=>{this.screen==="menu"&&this.menuScreen&&this.syncWalletGateUI(this.menuScreen)}),this.showMenu()}el(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}clear(){this.tapHintTimer&&(clearTimeout(this.tapHintTimer),this.tapHintTimer=null),this.root.innerHTML=""}setCanvasVisible(t){const e=document.getElementById("game-canvas");e&&(e.style.visibility=t?"visible":"hidden")}wrapScreen(t,e=""){return this.el(`
      <div class="screen-wrap ${e}">
        ${Gx()}
        ${t}
      </div>`)}showMenu(){var a;this.screen="menu",Fr(!1),(a=this.game)==null||a.stop(),this.setCanvasVisible(!1),this.clear();const t=this.save.get(),e=t.selectedCharacter??"johnny",n=No.map(o=>`
        <button type="button" class="character-card ${e===o.id?"selected":""}" data-id="${o.id}" aria-pressed="${e===o.id}">
          <div class="character-preview" data-preview="${o.id}" aria-hidden="true"></div>
          <span class="character-name">${o.name}</span>
          <span class="character-tag">${o.tagline}</span>
        </button>`).join(""),s=this.wrapScreen(`
      <div class="screen menu-screen">
        <div class="menu-layout">
          <div class="menu-scroll scroll-touch">
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
              
            </div>
          </div>
          <footer class="menu-action-bar">
            <div class="menu-buttons">
              <button class="btn btn-primary btn-glow btn-hero" id="btn-play" >▶ Start Run</button>
              <button class="btn btn-secondary btn-hero-secondary" id="btn-shop">🛒 Shop & Loadout</button>
            </div>
            <button class="btn btn-ghost btn-small menu-reset-btn" id="btn-reset" type="button">Reset Save</button>
          </footer>
        </div>
      </div>
    `);this.root.appendChild(s),this.menuScreen=s;const r=s.querySelector("#btn-copy-safari-link");r&&r.addEventListener("click",()=>{const o=r_();navigator.clipboard.writeText(o).then(()=>this.toast("Link copied — paste in Safari or Chrome"),()=>{window.prompt("Copy this link and open in Safari:",o)})}),s.querySelectorAll(".character-preview").forEach(o=>{const l=o.dataset.preview;Xx(o,l)}),s.querySelectorAll(".character-card").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.id;this.save.setCharacter(l),s.querySelectorAll(".character-card").forEach(c=>{const h=c,u=h.dataset.id===l;h.classList.toggle("selected",u),h.setAttribute("aria-pressed",String(u))})})}),s.querySelector("#btn-play").addEventListener("click",()=>{this.requireTokenAccess(()=>this.showLevels())}),s.querySelector("#btn-shop").addEventListener("click",()=>this.showShop()),s.querySelector("#btn-reset").addEventListener("click",()=>{confirm("Reset all progress?")&&(this.save.reset(),this.showMenu())})}bindWalletGate(t){t.querySelector("#btn-wallet-connect").addEventListener("click",()=>{if(O&&rh()){this.toast("Copy the link and open mailrun.xyz in Safari or Chrome");return}this.tokenGate.connect()}),t.querySelector("#btn-wallet-recheck").addEventListener("click",()=>{this.tokenGate.verify()}),t.querySelector("#btn-wallet-disconnect").addEventListener("click",()=>{this.tokenGate.disconnect()}),this.syncWalletGateUI(t)}syncWalletGateUI(t){const e=this.tokenGate.getSnapshot(),n=t.querySelector("#wallet-gate-status"),s=t.querySelector("#wallet-status-chip"),r=t.querySelector("#wallet-status-label"),a=t.querySelector("#btn-play"),o=t.querySelector("#btn-wallet-connect"),l=t.querySelector("#wallet-connected-pill"),c=t.querySelector("#wallet-action-row"),h=t.querySelector("#btn-wallet-recheck"),u=t.querySelector("#btn-wallet-disconnect"),f=t.querySelector("#wallet-gate");if(!n||!s||!r||!a||!o||!l||!c||!h||!u||!f)return;f.classList.remove("granted","denied","checking","signing","error","connected"),s.classList.remove("granted","denied","checking","signing","error","disconnected"),e.status==="granted"?(f.classList.add("granted"),s.classList.add("granted"),r.textContent="Access granted"):e.status==="denied"?(f.classList.add("denied"),s.classList.add("denied"),r.textContent="Insufficient balance"):e.status==="connecting"?(f.classList.add("checking"),s.classList.add("checking"),r.textContent="Waiting for wallet"):e.status==="signing"?(f.classList.add("signing"),s.classList.add("signing"),r.textContent="Approve in wallet"):e.status==="checking"?(f.classList.add("checking"),s.classList.add("checking"),r.textContent="Checking balance"):e.status==="error"?(f.classList.add("error"),s.classList.add("error"),r.textContent="Something went wrong"):(s.classList.add("disconnected"),r.textContent="Not verified yet");const p=["checking","granted","denied","error"].includes(e.status)&&e.walletAddress!=null;if(p&&f.classList.add("connected"),e.walletAddress&&p){const d=e.holdingUsd!=null&&e.tokenSymbol?`<div class="wallet-holding-value">~$${e.holdingUsd.toFixed(2)} <span>of $${e.tokenSymbol}</span></div>`:"";n.innerHTML=`
        <div class="wallet-address-row">
          <span class="wallet-address-label">Wallet</span>
          <span class="wallet-address">${e.walletAddress.slice(0,4)}…${e.walletAddress.slice(-4)}</span>
        </div>
        ${d}
        <div class="wallet-message">${typeof e.message=="string"?e.message:"Verification failed. Tap Recheck."}</div>`}else e.walletAddress&&(e.status==="connecting"||e.status==="signing"||e.status==="checking")?n.innerHTML=`<div class="wallet-message">${e.message}</div>`:n.innerHTML=`<div class="wallet-message">${typeof e.message=="string"?e.message:"Connect your wallet to verify holdings."}</div>`;const v=this.tokenGate.hasAccess();a.disabled=!v,a.title=v?"":`Hold at least $${qx} of the game token to play`;const y=e.status==="checking";o.classList.toggle("hidden",p),l.classList.toggle("hidden",!p),c.classList.toggle("hidden",!p);const g=O&&rh();p||(o.textContent=g?"Use Safari to connect":e.status==="connecting"?"Opening Phantom…":e.status==="signing"?"Approve in wallet…":"Connect Wallet"),o.disabled=y||g&&!p,h.disabled=y,u.disabled=y}async requireTokenAccess(t){if(this.tokenGate.hasAccess()){t();return}if(await this.tokenGate.verify()){t();return}const n=this.tokenGate.getSnapshot().message;this.toast(n.includes("Phantom")||n.includes("wallet")?n:`Connect your wallet first. ${n}`)}showLevels(){this.menuScreen=null,this.screen="levels",this.setCanvasVisible(!1),this.clear();const t=this.save.get();let e=`
      <div class="screen route-screen scroll-touch">
        <header class="route-header">
          <button type="button" class="btn btn-secondary route-back" id="btn-back">← Back</button>
          <div class="route-title-block">
            <span class="route-eyebrow">MAIL RUN · INVASION ROUTES</span>
            <h1>Select Route</h1>
          </div>
          <div class="stat-pill route-coins"><span>🪙</span> ${t.coins.toLocaleString()}</div>
        </header>
        <div class="route-scroll">`;for(const s of zx()){const r=Bo(s),a=ah[s]??"district-sunny",o=oh[s]??{icon:"📍",tagline:r.name},l=Vi.filter(h=>h.district===s),c=l.filter(h=>(t.levelStars[h.id]??0)>0).length;e+=`
        <section class="route-district ${a}">
          <div class="route-district-head">
            <span class="route-district-icon" aria-hidden="true">${o.icon}</span>
            <div class="route-district-copy">
              <h2>${r.name}</h2>
              <p>${o.tagline}</p>
            </div>
            <span class="route-district-progress">${c}/${l.length}</span>
          </div>
          <div class="route-level-grid">`;for(const h of l){const u=!t.unlockedLevels.includes(h.id),f=t.levelStars[h.id]??0,p=h.name.toLowerCase().includes("boss");e+=`
            <button type="button" class="route-level-card ${u?"locked":""} ${f>=3?"perfect":""} ${p?"boss":""}" data-id="${h.id}" ${u?"disabled":""}>
              <span class="rlc-id">${h.id}</span>
              <span class="rlc-name">${h.name}</span>
              <span class="rlc-stars" aria-label="${f} of 3 stars">${"★".repeat(f)}${"☆".repeat(3-f)}</span>
              ${p?'<span class="rlc-boss-tag">BOSS</span>':""}
            </button>`}e+="</div></section>"}e+="</div></div>";const n=this.wrapScreen(e);this.root.appendChild(n),n.querySelectorAll(".route-level-card:not(.locked)").forEach(s=>{s.addEventListener("click",()=>this.showBriefing(s.dataset.id))}),n.querySelector("#btn-back").addEventListener("click",()=>this.showMenu())}showBriefing(t){const e=Vi.find(c=>c.id===t),n=Bo(e.district),s=ah[e.district]??"district-sunny",r=oh[e.district]??{icon:"📍",tagline:n.name},a=c_(e),o=e.name.toLowerCase().includes("boss");this.screen="briefing",this.setCanvasVisible(!1),this.clear();const l=this.wrapScreen(`
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
            <div class="hazard-chips">${h_(t)}</div>
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
    `);this.root.appendChild(l),l.querySelector("#btn-start").addEventListener("click",()=>{this.requireTokenAccess(()=>this.startGame(t))}),l.querySelector("#btn-back").addEventListener("click",()=>this.showLevels())}showShop(){this.screen="shop",Fr(!1),this.setCanvasVisible(!1),this.clear();const t=this.save.get();let e="";for(const r of Hx){const a=qa.filter(o=>o.category===r.key);if(a.length){e+=`<h2 class="shop-section-title">${r.label} <span class="shop-section-hint">${r.hint}</span></h2>`,e+='<div class="shop-grid">';for(const o of a){const l=this.save.getPurchaseLevel(o.id),c=l>=o.maxLevel,h=c?0:Qc(o,l),u=!c&&t.coins>=h,f=o.category==="gear",p=o.category==="ability",v=f&&t.equippedTurrets.includes(o.id)||p&&t.equippedAbility===o.id;e+=`
        <div class="shop-item ${v?"equipped":""}">
          <div class="shop-item-head">
            <span class="shop-cat">${f?"🎯":p?"⚡":"💎"}</span>
            <h3>${o.name} ${l>0?`<small>Lv.${l}</small>`:""}</h3>
          </div>
          <p>${o.description}</p>
          <div class="meta">
            <span class="price">${c?"✓ MAX":`🪙 ${h}`}</span>
            <div class="shop-actions">
              ${f||p?`<button class="btn btn-small btn-secondary equip-btn" data-id="${o.id}">${v?"✓ Equipped":"Equip"}</button>`:""}
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
      </div>`,s=this.wrapScreen(n);this.root.appendChild(s),s.querySelectorAll(".buy-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.id,o=qa.find(h=>h.id===a),l=this.save.getPurchaseLevel(a);if(l>=o.maxLevel)return;const c=Qc(o,l);this.save.spendCoins(c)&&(this.save.setPurchaseLevel(a,l+1),this.showShop())})}),s.querySelectorAll(".equip-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.id,o=qa.find(l=>l.id===a);if(o.category==="gear"){if(this.save.getPurchaseLevel(a)<=0){alert("Buy this gear first!");return}this.save.equipTurret(a)}else if(o.category==="ability"){if(this.save.getPurchaseLevel(a)<=0){alert("Buy this ability first!");return}const l=this.save.get();this.save.equipAbility(l.equippedAbility===a?null:a)}this.showShop()})}),s.querySelector("#btn-back").addEventListener("click",()=>this.showMenu())}startGame(t){var h,u;if(!this.tokenGate.hasAccess()){this.toast(this.tokenGate.getSnapshot().message),this.showMenu();return}this.activeLevelId=t,this.screen="game",Fr(!0),this.hudCache={},this.setCanvasVisible(!0),this.clear();const e=this.el(`
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
    `);this.root.appendChild(e);const n=document.getElementById("game-canvas");(h=this.game)==null||h.dispose(),this.game=new Yr(n,this.save.get(),{onHudUpdate:f=>this.updateHud(f),onToast:f=>this.toast(f),onCombat:f=>{var p;(p=document.getElementById("combat-banner"))==null||p.classList.toggle("hidden",!f)},onDamageFlash:()=>{const f=document.getElementById("damage-flash");f&&(f.classList.remove("hidden"),setTimeout(()=>f.classList.add("hidden"),400))},onEnd:f=>this.onGameEnd(f)});const s=this.save.get().equippedAbility,r=document.getElementById("ability-btn"),a=document.getElementById("ability-label");if(s&&r&&a){const f={"smoke-bomb":"Smoke","rally-horn":"Rally",dash:"Dash"};a.textContent=f[s]??"Ability",r.disabled=!1,r.onclick=()=>{var p;return(p=this.game)==null?void 0:p.useAbility()},r.addEventListener("pointerdown",p=>p.stopPropagation())}const o=document.getElementById("autofire-toggle");o&&o.addEventListener("pointerdown",f=>{var y;f.preventDefault(),f.stopPropagation();const p=!this.save.get().mobileAutoFire;this.save.setMobileAutoFire(p),(y=this.game)==null||y.setAutoFire(p),o.classList.toggle("on",p),o.classList.toggle("off",!p),o.setAttribute("aria-pressed",String(p));const v=document.getElementById("autofire-label");v&&(v.textContent=p?"AUTO ON":"AUTO OFF")});const l=document.getElementById("hud");this.game.bindTouchControls(l),document.getElementById("jump-btn").addEventListener("pointerdown",f=>{var p;f.preventDefault(),f.stopPropagation(),(p=this.game)==null||p.jump()}),document.getElementById("slide-btn").addEventListener("pointerdown",f=>{var p;f.preventDefault(),f.stopPropagation(),(p=this.game)==null||p.slide()});const c=document.getElementById("shoot-btn");c==null||c.addEventListener("pointerdown",f=>{var p;f.preventDefault(),f.stopPropagation(),(p=this.game)==null||p.shoot()}),(u=document.getElementById("hud-back-btn"))==null||u.addEventListener("pointerdown",f=>{var p;f.preventDefault(),f.stopPropagation(),(p=this.game)==null||p.dispose(),this.game=null,Fr(!1),this.requireTokenAccess(()=>this.showLevels())}),document.getElementById("special-btn").addEventListener("pointerdown",f=>{var p;f.preventDefault(),f.stopPropagation(),(p=this.game)==null||p.useSpecialQuake()}),this.game.startLevel(t),this.tapHintTimer=setTimeout(()=>{var f;(f=document.getElementById("tap-hint"))==null||f.classList.add("hidden"),this.tapHintTimer=null},3e3)}updateHud(t){var l,c,h,u,f,p;const e=document.getElementById("hud-hearts");if(e&&(t.integrity!==this.hudCache.integrity||t.maxIntegrity!==this.hudCache.maxIntegrity)&&(e.textContent="❤".repeat(t.integrity)+"🖤".repeat(Math.max(0,t.maxIntegrity-t.integrity))),t.coins!==this.hudCache.coins){const v=document.getElementById("hud-coins");v&&(v.textContent=String(t.coins))}if(t.distance!==this.hudCache.distance){const v=document.getElementById("hud-dist");v&&(v.textContent=`${Math.floor(t.distance)}m`)}if(t.distance!==this.hudCache.distance||t.totalDistance!==this.hudCache.totalDistance){const v=document.getElementById("progress-fill");v&&(v.style.width=`${Math.min(100,t.distance/t.totalDistance*100)}%`)}if(t.packages!==this.hudCache.packages){const v=document.getElementById("hud-ammo");v&&(v.textContent=`📦 ${t.packages}`);const y=document.getElementById("shoot-icon"),g=document.getElementById("shoot-label");y&&(y.textContent="📧"),g&&(g.textContent=O?"MAIL":"SHOOT")}const n=document.getElementById("hud-powerup");n&&t.powerUpLabel!==this.hudCache.powerUpLabel&&(t.powerUpLabel?(n.textContent=t.powerUpLabel,n.classList.remove("hidden")):n.classList.add("hidden")),t.invincible!==this.hudCache.invincible&&(t.invincible?e==null||e.classList.add("invincible-glow"):(l=document.getElementById("hud-hearts"))==null||l.classList.remove("invincible-glow"));const s=document.getElementById("fork-hint"),r=t.vaultHint||t.forkHint;if(s&&r!==(this.hudCache.vaultHint||this.hudCache.forkHint)&&(r?(s.textContent=r,s.classList.remove("hidden"),s.classList.toggle("vault-hint",!!t.vaultHint)):(s.classList.add("hidden"),s.classList.remove("vault-hint"))),t.jumpReady!==this.hudCache.jumpReady&&((c=document.getElementById("jump-btn"))==null||c.classList.toggle("ready",t.jumpReady)),t.slideReady!==this.hudCache.slideReady&&((h=document.getElementById("slide-btn"))==null||h.classList.toggle("ready",t.slideReady)),t.shootReady!==this.hudCache.shootReady&&((u=document.getElementById("shoot-btn"))==null||u.classList.toggle("ready",t.shootReady),(f=document.getElementById("shoot-cd"))==null||f.classList.toggle("hidden",t.shootReady)),t.specialCharge!==this.hudCache.specialCharge||t.specialReady!==this.hudCache.specialReady||t.specialShakes!==this.hudCache.specialShakes){const v=document.getElementById("special-fill");v&&(v.style.height=`${Math.round(t.specialCharge*100)}%`);const y=document.getElementById("special-btn");y==null||y.classList.toggle("ready",t.specialReady);const g=document.getElementById("special-shakes");g&&(t.specialShakes>0?(g.textContent=String(t.specialShakes),g.classList.remove("hidden")):g.classList.add("hidden"))}t.jumpReady!==this.hudCache.jumpReady&&((p=document.getElementById("jump-btn"))==null||p.classList.toggle("ready",t.jumpReady));const a=document.getElementById("ability-cd"),o=document.getElementById("ability-btn");a&&o&&(t.abilityCd!==this.hudCache.abilityCd||t.abilityReady!==this.hudCache.abilityReady)&&(t.abilityCd>0?(a.classList.remove("hidden"),a.textContent=Math.ceil(t.abilityCd).toString(),o.disabled=!0):t.abilityReady&&(a.classList.add("hidden"),o.disabled=!1)),this.hudCache={...t}}toast(t){const e=this.el(`<div class="message-toast">${t}</div>`);this.root.appendChild(e),setTimeout(()=>e.remove(),2200)}onGameEnd(t){if(t.won){this.save.addCoins(t.coinsEarned),this.save.setStars(t.levelId,t.stars),this.save.recordWin();const e=Kc(t.levelId);e&&this.save.unlockLevel(e)}else this.save.addCoins(Math.floor(t.coinsEarned*.3));this.showResults(t)}showResults(t){var a;this.screen="results",(a=this.game)==null||a.stop(),this.setCanvasVisible(!1),this.clear();const e=Kc(t.levelId),n=this.save.get(),s=t.won&&e&&n.unlockedLevels.includes(e),r=this.wrapScreen(`
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
    `);this.root.appendChild(r),s&&r.querySelector("#btn-next").addEventListener("click",()=>{this.requireTokenAccess(()=>this.showBriefing(e))}),r.querySelector("#btn-retry").addEventListener("click",()=>{this.requireTokenAccess(()=>this.showBriefing(t.levelId))}),r.querySelector("#btn-shop").addEventListener("click",()=>this.showShop()),r.querySelector("#btn-menu").addEventListener("click",()=>this.showMenu())}}function $a(i,t,e){return new Promise((n,s)=>{const r=window.setTimeout(()=>s(new Error(e)),t);i.then(a=>{window.clearTimeout(r),n(a)},a=>{window.clearTimeout(r),s(a)})})}const f_={status:"bypassed",walletAddress:null,tokenSymbol:"GAME",tokenBalance:null,tokenPriceUsd:null,holdingUsd:null,message:"Token gate bypassed for local development."},d_=1e4,lh=12e4;class p_{constructor(){U(this,"snapshot",{...f_});U(this,"listeners",new Set);U(this,"provider",null);U(this,"signedWallet",null);U(this,"verifySeq",0);U(this,"verifyPromise",null);U(this,"checkingWatchdog",null);U(this,"disconnecting",!1);U(this,"boundOnWalletChange",()=>{this.disconnecting||(this.signedWallet=null,this.verifySeq+=1,this.verify())})}onPageVisible(){}subscribe(t){return this.listeners.add(t),t(this.snapshot),()=>this.listeners.delete(t)}getSnapshot(){return this.snapshot}hasAccess(){return!0}async connect(){}async connectInjected(t){this.detachWalletListeners();try{(t.isConnected||t.publicKey)&&await $a(t.disconnect(),8e3,"Disconnect timed out").catch(()=>{})}catch{}this.provider=t,this.attachWalletListeners();try{this.setSnapshot({status:"connecting",walletAddress:null,message:"Approve the connection in your wallet…"}),await $a(t.connect({onlyIfTrusted:!1}),lh,"Connection timed out. Tap Connect again.");const e=ko(t);if(!e)throw new Error("Wallet connected but no address was returned.");this.setSnapshot({status:"signing",walletAddress:e,message:"Approve the signature in your wallet…"}),await $a(s_(t,e),lh,"Signature timed out. Tap Connect again."),this.signedWallet=e,await this.verify()}catch(e){this.signedWallet=null,this.setSnapshot({status:"error",walletAddress:ko(t),message:nh(e)})}}async verify(){return!0}async resumeMobileFlow(){const t=o_();if(t){this.setSnapshot({status:"error",walletAddress:Vs(),message:t});return}try{const e=l_();if(e==="connect_ok"){const n=Vs();if(!n)return;this.signedWallet=n,this.setSnapshot({status:"checking",walletAddress:n,message:"Connected. Checking your balance…"}),await this.verify();return}if(e==="sign_ok"){const n=Vs();if(!n)return;this.signedWallet=n,await this.verify();return}}catch(e){this.setSnapshot({status:"error",walletAddress:Vs(),message:nh(e)});return}if(a_()){const e=Vs();e&&(this.signedWallet=e)}}async runVerify(){return!0}async disconnect(){}attachWalletListeners(){const t=this.provider;!(t!=null&&t.on)||!t.removeListener||(t.removeListener("disconnect",this.boundOnWalletChange),t.removeListener("accountChanged",this.boundOnWalletChange),t.on("disconnect",this.boundOnWalletChange),t.on("accountChanged",this.boundOnWalletChange))}detachWalletListeners(){const t=this.provider;t!=null&&t.removeListener&&(t.removeListener("disconnect",this.boundOnWalletChange),t.removeListener("accountChanged",this.boundOnWalletChange))}armCheckingWatchdog(t,e){this.clearCheckingWatchdog(),this.checkingWatchdog=setTimeout(()=>{t!==this.verifySeq||this.snapshot.status!=="checking"||(this.verifySeq+=1,this.verifyPromise=null,this.setSnapshot({status:"error",walletAddress:e,message:"Balance check timed out. Tap Recheck."}))},d_)}clearCheckingWatchdog(){this.checkingWatchdog&&(clearTimeout(this.checkingWatchdog),this.checkingWatchdog=null)}setSnapshot(t){this.snapshot={...this.snapshot,...t};for(const e of this.listeners)e(this.snapshot)}}const m_=new uu,ll=new p_,g_=document.getElementById("ui-root");new u_(g_,m_,ll);kx();window.addEventListener("pageshow",()=>{ll.onPageVisible()});document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&ll.onPageVisible()});function ea(i){i.target.closest(".shop-scroll, .levels-screen, .scroll-touch, .menu-scroll")||i.preventDefault()}document.addEventListener("touchmove",ea,{passive:!1});document.addEventListener("gesturestart",ea);document.addEventListener("gesturechange",ea);document.addEventListener("gestureend",ea);document.addEventListener("touchstart",i=>{if(i.touches.length>1){i.preventDefault();return}document.body.classList.contains("game-active")&&(i.target.closest("button, .touch-steer")||i.preventDefault())},{passive:!1,capture:!0});let ch=0;document.addEventListener("touchend",i=>{const t=Date.now();t-ch<=320&&i.preventDefault(),ch=t,O&&window.scrollTo(0,0)},{passive:!1});document.addEventListener("contextmenu",i=>{i.target.closest("#game-canvas, .hud")&&i.preventDefault()});
