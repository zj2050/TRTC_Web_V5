"use strict";var CrossRoom=(()=>{var y=Object.defineProperty,H=Object.defineProperties,N=Object.getOwnPropertyDescriptor,W=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertyNames,x=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var I=(o,e,r)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,E=(o,e)=>{for(var r in e||(e={}))k.call(e,r)&&I(o,r,e[r]);if(x)for(var r of x(e))K.call(e,r)&&I(o,r,e[r]);return o},f=(o,e)=>H(o,W(e));var j=(o,e)=>{for(var r in e)y(o,r,{get:e[r],enumerable:!0})},q=(o,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of F(e))!k.call(o,t)&&t!==r&&y(o,t,{get:()=>e[t],enumerable:!(a=N(e,t))||a.enumerable});return o};var X=o=>q(y({},"__esModule",{value:!0}),o),_=(o,e,r,a)=>{for(var t=a>1?void 0:a?N(e,r):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&y(e,r,t),t};var b=(o,e,r)=>(I(o,typeof e!="symbol"?e+"":e,r),r);var $={};j($,{CrossRoom:()=>O,default:()=>z});var L={properties:{roomId:{type:"number"},strRoomId:{type:"string"}}},P={name:"option",required:!0,properties:f(E({},L.properties),{userId:{type:"string"}})},V={name:"option",required:!0,properties:{updateList:{type:"array",required:!0,arrayItem:{required:!0,type:"object",properties:f(E({},P.properties),{userId:{required:!1,type:"string"},muteAudio:{type:"boolean"},muteVideo:{type:"boolean"},muteSubStream:{type:"boolean"}})}}}},B={name:"option",properties:E({},L.properties)};var p=o=>typeof o=="function";var v=0,Y=1,M=2;function J({retryFunction:o,settings:e,onError:r,onRetrying:a,onRetryFailed:t,onRetrySuccess:i,context:n}){return function(...d){let{retries:m=5,timeout:u=1e3}=e,s=0,l=-1,c=v,T=async(h,A)=>{let G=n||this;try{let R=await o.apply(G,d);s>0&&i&&i.call(this,s),s=0,h(R)}catch(R){let U=()=>{clearTimeout(l),s=0,c=M,A(R)},C=()=>{c!==M&&s<(p(m)?m():m)?(s++,c=Y,p(a)&&a.call(this,s,U),l=window.setTimeout(()=>{l=-1,T(h,A)},p(u)?u(s):u)):(U(),p(t)&&t.call(this,R))};p(r)?r.call(this,{error:R,retry:C,reject:A,retryFuncArgs:d,retriedCount:s}):C()}};return new Promise(T)}}var w=J;var S=new WeakMap;function D({settings:o={retries:5,timeout:2e3},onError:e,onRetrying:r,onRetryFailed:a}){return function(t,i,n){let d=w({retryFunction:n.value,settings:o,onError({error:m,retry:u,reject:s,retryFuncArgs:l}){var c;e?e.call(this,m,()=>{var T;(T=S.get(t))!=null&&T.has(i)?u():s(m)},s,l):(c=S.get(t))!=null&&c.has(i)?u():s(m)},onRetrying(m,u){var s;p(r)&&r.call(this,m,u),(s=S.get(t))!=null&&s.has(i)&&(S.get(t).get(i).stopRetry=u)},onRetryFailed:a});return n.value=function(...m){let u=S.get(t);return u?u.set(i,{args:m}):S.set(t,new Map([[i,{args:m}]])),d.apply(this,m).finally(()=>{var s;return(s=S.get(t))==null?void 0:s.delete(i)})},n}}var g=class g{constructor(e){this.core=e;b(this,"disableRandomCall",!0);b(this,"connectedRoomIdSet",new Set);b(this,"updateSeq",0);b(this,"_log");this._log=this.core.log.createChild({id:`${this.getAlias()}`})}getName(){return g.Name}getAlias(){return"crs-r"}getGroup(e){var a;let r=(e==null?void 0:e.userId)||((a=e==null?void 0:e.updateList)==null?void 0:a[0].userId)||"";return r||(e?e.updateList?String(e.updateList[0].roomId)||e.updateList[0].strRoomId||"":String(e.roomId)||e.strRoomId||"":"*")}getValidateRule(e){switch(e){case"start":return P;case"update":return V;case"stop":return B}}async start({roomId:e,strRoomId:r,userId:a}){let{RtcError:t,ErrorCode:i}=this.core.errorModule;if(!this.core.room.sendSignalMessage)throw new t({code:i.ENV_NOT_SUPPORTED});let n=e||r,d=await this.core.room.sendSignalMessage({command:"connect_other_room",responseCommand:String(8209),data:{roomId:n,userId:a,localRoomId:a?void 0:this.core.room.roomId},retries:3});if(d.data.code!==0)throw new t({code:i.SERVER_ERROR,extraCode:d.data.code,message:d.data.message});a||this.connectedRoomIdSet.add(n)}async update({updateList:e}){var n;let{RtcError:r,ErrorCode:a}=this.core.errorModule;if(!this.core.room.sendSignalMessage)throw new r({code:a.ENV_NOT_SUPPORTED});let t=e.find(d=>d.userId)?0:1,i=await this.core.room.sendSignalMessage({command:"update_other_room_forward_mode",responseCommand:String(8213),data:{seq:++this.updateSeq,operationType:t,updateList:e.map(({roomId:d,strRoomId:m,userId:u,muteAudio:s,muteVideo:l,muteSubStream:c})=>({roomId:d||m,userId:u,muteAudio:s,muteVideo:l,muteSubStream:c}))},retries:3});if(i.data.data.expectSeq)return this.updateSeq=i.data.data.expectSeq,this.update({updateList:e});if(i.data.code!==0)throw new r({code:a.SERVER_ERROR,extraCode:i.data.code,message:i.data.message});if(((n=i.data.data.errorList)==null?void 0:n.length)>0)throw new r({code:a.UNKNOWN_ERROR,message:i.data.data.errorList[0].message})}async stop({roomId:e,strRoomId:r}={}){let a=e||r;if(a)await this.doStop(a);else if(this.connectedRoomIdSet.size>0)for(let t of[...this.connectedRoomIdSet.values()])await this.doStop(t);else await this.doStop()}async doStop(e){let{RtcError:r,ErrorCode:a}=this.core.errorModule;if(!this.core.room.sendSignalMessage)throw new r({code:a.ENV_NOT_SUPPORTED});let t=await this.core.room.sendSignalMessage({command:"disconnect_other_room",responseCommand:String(8211),data:{roomId:e,localRoomId:this.core.room.roomId},retries:3});if(t.data.code!==0)throw new r({code:a.SERVER_ERROR,extraCode:t.data.code,message:t.data.message});this.connectedRoomIdSet.delete(e)}destroy(){}};b(g,"Name","CrossRoom"),_([D({settings:{retries:3,timeout:1e3},onRetrying(o){this._log.warn(`retry start: ${o}`)}})],g.prototype,"start",1),_([D({settings:{retries:3,timeout:1e3},onRetrying(o){this._log.warn(`retry update: ${o}`)}})],g.prototype,"update",1);var O=g;var z=O;return X($);})().default;
