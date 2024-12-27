var U=Object.defineProperty;var N=(a,e,t)=>e in a?U(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var u=(a,e,t)=>(N(a,typeof e!="symbol"?e+"":e,t),t);function A(a){return{name:"WatermarkOptions",type:"object",required:!0,allowEmpty:!1,properties:{imageUrl:{required:!0,type:"string"},x:{required:!1,type:"number"},y:{required:!1,type:"number"},size:{required:!1,type:["string","object","number"]}},validate(e,t,o,T){var p;let{RtcError:r,ErrorCode:d,ErrorCodeDictionary:i}=a.errorModule;if(!e)return;let{imageUrl:m}=e,c=m.split("?")[0].split(".").pop();if((c==="jpg"||c==="jpeg")&&a.log.warn("The image format is not recommended to be jpg/jpeg, because the format does not support transparency."),!((p=a.room.videoManager.cameraTrack)!=null&&p.mediaTrack))throw new r({code:d.INVALID_OPERATION,extraCode:i.INVALID_OPERATION_NEED_VIDEO,fnName:o});if(a.utils.isString(e.size)&&e.size!=="contain"&&e.size!=="cover")throw new r({code:d.INVALID_PARAMETER,extraCode:i.INVALID_PARAMETER_TYPE,message:"The size parameter must be 'contain' or 'cover'",fnName:o});if(a.utils.isNumber(e.size)&&(e.size<=0||e.size>1))throw new r({code:d.INVALID_PARAMETER,extraCode:i.INVALID_PARAMETER_RANGE,message:"The size parameter must be greater than 0",fnName:o});if(a.utils.isObject(e.size)){if(!e.size.width||!e.size.height)throw new r({code:d.INVALID_PARAMETER,extraCode:i.INVALID_PARAMETER_TYPE,message:"The size parameter must be an object with width and height properties",fnName:o});if(e.size.width<=0||e.size.height<=0)throw new r({code:d.INVALID_PARAMETER,extraCode:i.INVALID_PARAMETER_RANGE,message:"The size parameter must be greater than 0",fnName:o})}}}}function D(a){return{name:"StopWatermarkOptions",required:!1}}var S=0,E=class E{constructor(e){this.core=e;u(this,"seq");u(this,"_core");u(this,"log");u(this,"startResolve");u(this,"startReject");S=S+1,this.seq=S,this._core=e,this.log=e.log.createChild({id:`${this.getAlias()}${S}`}),this.log.info("created")}getName(){return E.Name}getAlias(){return"w"}getValidateRule(e){switch(e){case"start":return A(this._core);case"update":return A(this._core);case"stop":return D(this._core)}}getGroup(){return"w"}async start(e){return this.doStart(e)}async update(e){this.doStart(e)}async stop(){return this._core.room.videoManager.deleteWatermark()}async doStart(e){let{x:t=0,y:o=0}=e,T=await this.processWatermark(e);return this._core.room.videoManager.setWatermark({x:t,y:o,imageUrl:T})}async processWatermark(e){let{imageUrl:t,x:o=0,y:T=0,size:r="cover"}=e,{settings:d}=this._core.room.videoManager.cameraTrack,i;try{i=await this._core.utils.loadImage(t)}catch(x){let{RtcError:P,ErrorCode:h}=this.core.errorModule;throw new P({code:h.INVALID_PARAMETER,message:`load image failed, url: ${t}`})}let{width:m,height:l}=d,{width:c,height:p}=i,s=c,n=p;this._core.utils.isObject(r)&&(s=(r==null?void 0:r.width)||s,n=(r==null?void 0:r.height)||n),this._core.utils.isNumber(r)&&(s=c*r,n=p*r);let b=c/p,O=m/l,_=b>O;r==="contain"&&(_?(s=m,n=m/b):(s=l*b,n=l)),r==="cover"&&(_?(n=l,s=l*b):(s=m,n=m/b));let g=document.createElement("canvas"),R=g.getContext("2d");return g.width=Math.min(m-o,s),g.height=Math.min(l-T,n),R==null||R.drawImage(i,0,0,s,n),g.toDataURL("image/png")}};u(E,"Name","Watermark");var I=E;var B=I;export{I as Watermark,B as default};
