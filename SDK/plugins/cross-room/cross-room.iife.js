"use strict";var CrossRoom=(()=>{var E=Object.defineProperty,H=Object.defineProperties,P=Object.getOwnPropertyDescriptor,F=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertyNames,N=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var _=(o,e,r)=>e in o?E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,y=(o,e)=>{for(var r in e||(e={}))L.call(e,r)&&_(o,r,e[r]);if(N)for(var r of N(e))W.call(e,r)&&_(o,r,e[r]);return o},I=(o,e)=>H(o,F(e));var j=(o,e)=>{for(var r in e)E(o,r,{get:e[r],enumerable:!0})},q=(o,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of K(e))!L.call(o,t)&&t!==r&&E(o,t,{get:()=>e[t],enumerable:!(a=P(e,t))||a.enumerable});return o};var X=o=>q(E({},"__esModule",{value:!0}),o),D=(o,e,r,a)=>{for(var t=a>1?void 0:a?P(e,r):e,s=o.length-1,n;s>=0;s--)(n=o[s])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&E(e,r,t),t};var b=(o,e,r)=>(_(o,typeof e!="symbol"?e+"":e,r),r);var Z={};j(Z,{CrossRoom:()=>O,default:()=>z});var k={properties:{roomId:{type:"number"},strRoomId:{type:"string"}}},f={name:"option",required:!0,properties:I(y({},k.properties),{userId:{type:"string"}})},V={name:"option",required:!0,properties:{updateList:{type:"array",required:!0,arrayItem:{required:!0,type:"object",properties:I(y({},f.properties),{userId:{required:!1,type:"string"},muteAudio:{type:"boolean"},muteVideo:{type:"boolean"},muteSubStream:{type:"boolean"}})}}}},B={name:"option",properties:y({},k.properties)};var p=o=>typeof o=="function";var J=0,Y=1,w=2;function $({retryFunction:o,settings:e,onError:r,onRetrying:a,onRetryFailed:t,onRetrySuccess:s,context:n}){return function(...d){let{retries:m=5,timeout:u=1e3}=e,i=0,l=-1,c=J,R=async(U,A)=>{let M=n||this;try{let g=await o.apply(M,d);i>0&&s&&s.call(this,i),i=0,U(g)}catch(g){let x=()=>{clearTimeout(l),i=0,c=w,A(g)},h=()=>{c!==w&&i<(p(m)?m():m)?(i++,c=Y,p(a)&&a.call(this,i,x),l=window.setTimeout(()=>{l=-1,R(U,A)},p(u)?u(i):u)):(x(),p(t)&&t.call(this,g))};p(r)?r.call(this,{error:g,retry:h,reject:A,retryFuncArgs:d,retriedCount:i}):h()}};return new Promise(R)}}var G=$;var T=new WeakMap;function C({settings:o={retries:5,timeout:2e3},onError:e,onRetrying:r,onRetryFailed:a}){return function(t,s,n){let d=G({retryFunction:n.value,settings:o,onError({error:m,retry:u,reject:i,retryFuncArgs:l}){var c;e?e.call(this,m,()=>{var R;(R=T.get(t))!=null&&R.has(s)?u():i(m)},i,l):(c=T.get(t))!=null&&c.has(s)?u():i(m)},onRetrying(m,u){var i;p(r)&&r.call(this,m,u),(i=T.get(t))!=null&&i.has(s)&&(T.get(t).get(s).stopRetry=u)},onRetryFailed:a});return n.value=function(...m){let u=T.get(t);return u?u.set(s,{args:m}):T.set(t,new Map([[s,{args:m}]])),d.apply(this,m).finally(()=>{var i;return(i=T.get(t))==null?void 0:i.delete(s)})},n}}var S=class S{constructor(e){this.core=e;b(this,"disableRandomCall",!0);b(this,"connectedRoomIdSet",new Set);b(this,"updateSeq",0);b(this,"_log");this._log=this.core.log.createChild({id:`${this.getAlias()}`})}getName(){return S.Name}getAlias(){return"crs-r"}getGroup(e){var a;let r=(e==null?void 0:e.userId)||((a=e==null?void 0:e.updateList)==null?void 0:a[0].userId)||"";return r||(e?e.updateList?String(e.updateList[0].roomId)||e.updateList[0].strRoomId||"":String(e.roomId)||e.strRoomId||"":"*")}getValidateRule(e){switch(e){case"start":return f;case"update":return V;case"stop":return B}}async start({roomId:e,strRoomId:r,userId:a}){let{RtcError:t,ErrorCode:s}=this.core.errorModule;if(!this.core.room.sendSignalMessage)throw new t({code:s.ENV_NOT_SUPPORTED});let n=e||r,d=await this.core.room.sendSignalMessage({command:"connect_other_room",responseCommand:String(8209),data:{roomId:n,userId:a,localRoomId:a?void 0:this.core.room.roomId},retries:3});if(d.data.code!==0)throw new t({code:s.SERVER_ERROR,extraCode:d.data.code,message:d.data.message});a||this.connectedRoomIdSet.add(n)}async update({updateList:e}){var n;let{RtcError:r,ErrorCode:a}=this.core.errorModule;if(!this.core.room.sendSignalMessage)throw new r({code:a.ENV_NOT_SUPPORTED});let t=e.find(d=>d.userId)?0:1,s=await this.core.room.sendSignalMessage({command:"update_other_room_forward_mode",responseCommand:String(8213),data:{seq:++this.updateSeq,operationType:t,updateList:e.map(({roomId:d,strRoomId:m,userId:u,muteAudio:i,muteVideo:l,muteSubStream:c})=>({roomId:d||m,userId:u,muteAudio:i,muteVideo:l,muteSubStream:c}))},retries:3});if(s.data.data.expectSeq)return this.updateSeq=s.data.data.expectSeq,this.update({updateList:e});if(s.data.code!==0)throw new r({code:a.SERVER_ERROR,extraCode:s.data.code,message:s.data.message});if(((n=s.data.data.errorList)==null?void 0:n.length)>0)throw new r({code:a.UNKNOWN_ERROR,message:s.data.data.errorList[0].message})}async stop({roomId:e,strRoomId:r}={}){let a=e||r;if(a)await this.doStop(a);else if(this.connectedRoomIdSet.size>0)for(let t of[...this.connectedRoomIdSet.values()])await this.doStop(t);else await this.doStop()}async doStop(e){let{RtcError:r,ErrorCode:a}=this.core.errorModule;if(!this.core.room.sendSignalMessage)throw new r({code:a.ENV_NOT_SUPPORTED});let t=await this.core.room.sendSignalMessage({command:"disconnect_other_room",responseCommand:String(8211),data:{roomId:e,localRoomId:this.core.room.roomId},retries:3});if(t.data.code!==0)throw new r({code:a.SERVER_ERROR,extraCode:t.data.code,message:t.data.message});this.connectedRoomIdSet.delete(e)}destroy(){}};b(S,"Name","CrossRoom"),D([C({settings:{retries:3,timeout:1e3},onRetrying(o){this._log.warn(`retry start: ${o}`)}})],S.prototype,"start",1),D([C({settings:{retries:3,timeout:1e3},onRetrying(o){this._log.warn(`retry update: ${o}`)}})],S.prototype,"update",1);var O=S;var z=O;return X(Z);})().default;
