"use strict";var Watermark=(()=>{var S=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var C=Object.prototype.hasOwnProperty;var y=(r,e,t)=>e in r?S(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var f=(r,e)=>{for(var t in e)S(r,t,{get:e[t],enumerable:!0})},k=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of x(e))!C.call(r,i)&&i!==t&&S(r,i,{get:()=>e[i],enumerable:!(o=N(e,i))||o.enumerable});return r};var L=r=>k(S({},"__esModule",{value:!0}),r);var d=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);var M={};f(M,{Watermark:()=>R,default:()=>V});function _(r){return{name:"WatermarkOptions",type:"object",required:!0,allowEmpty:!1,properties:{imageUrl:{required:!0,type:"string"},x:{required:!1,type:"number"},y:{required:!1,type:"number"},size:{required:!1,type:["string","object","number"]}},validate(e,t,o,i){var b;let{RtcError:a,ErrorCode:l,ErrorCodeDictionary:s}=r.errorModule;if(!e)return;let{imageUrl:u}=e,p=u.split("?")[0].split(".").pop();if((p==="jpg"||p==="jpeg")&&r.log.warn("The image format is not recommended to be jpg/jpeg, because the format does not support transparency."),!((b=r.room.videoManager.cameraTrack)!=null&&b.mediaTrack))throw new a({code:l.INVALID_OPERATION,extraCode:s.INVALID_OPERATION_NEED_VIDEO,fnName:o});if(r.utils.isString(e.size)&&e.size!=="contain"&&e.size!=="cover")throw new a({code:l.INVALID_PARAMETER,extraCode:s.INVALID_PARAMETER_TYPE,message:"The size parameter must be 'contain' or 'cover'",fnName:o});if(r.utils.isNumber(e.size)&&(e.size<=0||e.size>1))throw new a({code:l.INVALID_PARAMETER,extraCode:s.INVALID_PARAMETER_RANGE,message:"The size parameter must be greater than 0",fnName:o});if(r.utils.isObject(e.size)){if(!e.size.width||!e.size.height)throw new a({code:l.INVALID_PARAMETER,extraCode:s.INVALID_PARAMETER_TYPE,message:"The size parameter must be an object with width and height properties",fnName:o});if(e.size.width<=0||e.size.height<=0)throw new a({code:l.INVALID_PARAMETER,extraCode:s.INVALID_PARAMETER_RANGE,message:"The size parameter must be greater than 0",fnName:o})}}}}function O(r){return{name:"StopWatermarkOptions",required:!1}}var E=0,A=class A{constructor(e){this.core=e;d(this,"seq");d(this,"_core");d(this,"log");d(this,"startResolve");d(this,"startReject");E=E+1,this.seq=E,this._core=e,this.log=e.log.createChild({id:`${this.getAlias()}${E}`}),this.log.info("created")}getName(){return A.Name}getAlias(){return"w"}getValidateRule(e){switch(e){case"start":return _(this._core);case"update":return _(this._core);case"stop":return O(this._core)}}getGroup(){return"w"}async start(e){return this.doStart(e)}async update(e){this.doStart(e)}async stop(){return this._core.room.videoManager.deleteWatermark()}async doStart(e){let{x:t=0,y:o=0}=e,i=await this.processWatermark(e);return this._core.room.videoManager.setWatermark({x:t,y:o,imageUrl:i})}async processWatermark(e){let{imageUrl:t,x:o=0,y:i=0,size:a="cover"}=e,{settings:l}=this._core.room.videoManager.cameraTrack,s;try{s=await this._core.utils.loadImage(t)}catch(B){let{RtcError:h,ErrorCode:U}=this.core.errorModule;throw new h({code:U.INVALID_PARAMETER,message:`load image failed, url: ${t}`})}let{width:u,height:c}=l,{width:p,height:b}=s,n=p,m=b;this._core.utils.isObject(a)&&(n=(a==null?void 0:a.width)||n,m=(a==null?void 0:a.height)||m),this._core.utils.isNumber(a)&&(n=p*a,m=b*a);let T=p/b,P=u/c,D=T>P;a==="contain"&&(D?(n=u,m=u/T):(n=c*T,m=c)),a==="cover"&&(D?(m=c,n=c*T):(n=u,m=u/T));let g=document.createElement("canvas"),I=g.getContext("2d");return g.width=Math.min(u-o,n),g.height=Math.min(c-i,m),I==null||I.drawImage(s,0,0,n,m),g.toDataURL("image/png")}};d(A,"Name","Watermark");var R=A;var V=R;return L(M);})().default;
