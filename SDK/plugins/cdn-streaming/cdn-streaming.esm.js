var le=Object.create;var z=Object.defineProperty,ce=Object.defineProperties,he=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,be=Object.getPrototypeOf,ee=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var X=(c,e,r)=>e in c?z(c,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[e]=r,_=(c,e)=>{for(var r in e||(e={}))ee.call(e,r)&&X(c,r,e[r]);if(Q)for(var r of Q(e))Se.call(e,r)&&X(c,r,e[r]);return c},H=(c,e)=>ce(c,pe(e));var Te=(c,e)=>()=>(e||c((e={exports:{}}).exports,e),e.exports);var _e=(c,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ge(e))!ee.call(c,i)&&i!==r&&z(c,i,{get:()=>e[i],enumerable:!(o=he(e,i))||o.enumerable});return c};var Y=(c,e,r)=>(r=c!=null?le(be(c)):{},_e(e||!c||!c.__esModule?z(r,"default",{value:c,enumerable:!0}):r,c));var g=(c,e,r)=>(X(c,typeof e!="symbol"?e+"":e,r),r);var F=Te((re,$)=>{(function(c){"use strict";function e(t,h){var a=(t&65535)+(h&65535),b=(t>>16)+(h>>16)+(a>>16);return b<<16|a&65535}function r(t,h){return t<<h|t>>>32-h}function o(t,h,a,b,T,C){return e(r(e(e(h,t),e(b,C)),T),a)}function i(t,h,a,b,T,C,P){return o(h&a|~h&b,t,h,T,C,P)}function l(t,h,a,b,T,C,P){return o(h&b|a&~b,t,h,T,C,P)}function s(t,h,a,b,T,C,P){return o(h^a^b,t,h,T,C,P)}function p(t,h,a,b,T,C,P){return o(a^(h|~b),t,h,T,C,P)}function S(t,h){t[h>>5]|=128<<h%32,t[(h+64>>>9<<4)+14]=h;var a,b,T,C,P,n=1732584193,m=-271733879,d=-1732584194,u=271733878;for(a=0;a<t.length;a+=16)b=n,T=m,C=d,P=u,n=i(n,m,d,u,t[a],7,-680876936),u=i(u,n,m,d,t[a+1],12,-389564586),d=i(d,u,n,m,t[a+2],17,606105819),m=i(m,d,u,n,t[a+3],22,-1044525330),n=i(n,m,d,u,t[a+4],7,-176418897),u=i(u,n,m,d,t[a+5],12,1200080426),d=i(d,u,n,m,t[a+6],17,-1473231341),m=i(m,d,u,n,t[a+7],22,-45705983),n=i(n,m,d,u,t[a+8],7,1770035416),u=i(u,n,m,d,t[a+9],12,-1958414417),d=i(d,u,n,m,t[a+10],17,-42063),m=i(m,d,u,n,t[a+11],22,-1990404162),n=i(n,m,d,u,t[a+12],7,1804603682),u=i(u,n,m,d,t[a+13],12,-40341101),d=i(d,u,n,m,t[a+14],17,-1502002290),m=i(m,d,u,n,t[a+15],22,1236535329),n=l(n,m,d,u,t[a+1],5,-165796510),u=l(u,n,m,d,t[a+6],9,-1069501632),d=l(d,u,n,m,t[a+11],14,643717713),m=l(m,d,u,n,t[a],20,-373897302),n=l(n,m,d,u,t[a+5],5,-701558691),u=l(u,n,m,d,t[a+10],9,38016083),d=l(d,u,n,m,t[a+15],14,-660478335),m=l(m,d,u,n,t[a+4],20,-405537848),n=l(n,m,d,u,t[a+9],5,568446438),u=l(u,n,m,d,t[a+14],9,-1019803690),d=l(d,u,n,m,t[a+3],14,-187363961),m=l(m,d,u,n,t[a+8],20,1163531501),n=l(n,m,d,u,t[a+13],5,-1444681467),u=l(u,n,m,d,t[a+2],9,-51403784),d=l(d,u,n,m,t[a+7],14,1735328473),m=l(m,d,u,n,t[a+12],20,-1926607734),n=s(n,m,d,u,t[a+5],4,-378558),u=s(u,n,m,d,t[a+8],11,-2022574463),d=s(d,u,n,m,t[a+11],16,1839030562),m=s(m,d,u,n,t[a+14],23,-35309556),n=s(n,m,d,u,t[a+1],4,-1530992060),u=s(u,n,m,d,t[a+4],11,1272893353),d=s(d,u,n,m,t[a+7],16,-155497632),m=s(m,d,u,n,t[a+10],23,-1094730640),n=s(n,m,d,u,t[a+13],4,681279174),u=s(u,n,m,d,t[a],11,-358537222),d=s(d,u,n,m,t[a+3],16,-722521979),m=s(m,d,u,n,t[a+6],23,76029189),n=s(n,m,d,u,t[a+9],4,-640364487),u=s(u,n,m,d,t[a+12],11,-421815835),d=s(d,u,n,m,t[a+15],16,530742520),m=s(m,d,u,n,t[a+2],23,-995338651),n=p(n,m,d,u,t[a],6,-198630844),u=p(u,n,m,d,t[a+7],10,1126891415),d=p(d,u,n,m,t[a+14],15,-1416354905),m=p(m,d,u,n,t[a+5],21,-57434055),n=p(n,m,d,u,t[a+12],6,1700485571),u=p(u,n,m,d,t[a+3],10,-1894986606),d=p(d,u,n,m,t[a+10],15,-1051523),m=p(m,d,u,n,t[a+1],21,-2054922799),n=p(n,m,d,u,t[a+8],6,1873313359),u=p(u,n,m,d,t[a+15],10,-30611744),d=p(d,u,n,m,t[a+6],15,-1560198380),m=p(m,d,u,n,t[a+13],21,1309151649),n=p(n,m,d,u,t[a+4],6,-145523070),u=p(u,n,m,d,t[a+11],10,-1120210379),d=p(d,u,n,m,t[a+2],15,718787259),m=p(m,d,u,n,t[a+9],21,-343485551),n=e(n,b),m=e(m,T),d=e(d,C),u=e(u,P);return[n,m,d,u]}function D(t){var h,a="",b=t.length*32;for(h=0;h<b;h+=8)a+=String.fromCharCode(t[h>>5]>>>h%32&255);return a}function I(t){var h,a=[];for(a[(t.length>>2)-1]=void 0,h=0;h<a.length;h+=1)a[h]=0;var b=t.length*8;for(h=0;h<b;h+=8)a[h>>5]|=(t.charCodeAt(h/8)&255)<<h%32;return a}function E(t){return D(S(I(t),t.length*8))}function G(t,h){var a,b=I(t),T=[],C=[],P;for(T[15]=C[15]=void 0,b.length>16&&(b=S(b,t.length*8)),a=0;a<16;a+=1)T[a]=b[a]^909522486,C[a]=b[a]^1549556828;return P=S(T.concat(I(h)),512+h.length*8),D(S(C.concat(P),512+128))}function y(t){var h="0123456789abcdef",a="",b,T;for(T=0;T<t.length;T+=1)b=t.charCodeAt(T),a+=h.charAt(b>>>4&15)+h.charAt(b&15);return a}function N(t){return unescape(encodeURIComponent(t))}function U(t){return E(N(t))}function J(t){return y(U(t))}function B(t,h){return G(N(t),N(h))}function f(t,h){return y(B(t,h))}function V(t,h,a){return h?a?B(h,t):f(h,t):a?U(t):J(t)}typeof define=="function"&&define.amd?define(function(){return V}):typeof $=="object"&&$.exports?$.exports=V:c.md5=V})(re)});var te=Y(F(),1);var M=(i=>(i.PublishMainStreamToCDN="publish-main-stream-to-cdn",i.PublishSubStreamToCDN="publish-sub-stream-to-cdn",i.PublishMixStreamToCDN="publish-mix-stream-to-cdn",i.PublishMixStreamToRoom="publish-mix-stream-to-room",i))(M||{}),K=(r=>(r.Main="main",r.Sub="sub",r))(K||{});var W={IT_AUDIO_VIDEO:0,IT_PICTURE:2,IT_CANVAS:3,IT_PURE_AUDIO:4,IT_PURE_VIDEO:5};var O=class{constructor(e,r){g(this,"_core");g(this,"_room");g(this,"_log");g(this,"_params");g(this,"_publishGivenCDNData",null);this._core=e,this._room=e.room,this._log=r}get isPublishingGivenCDN(){return!!this._params}async startPublishGivenCDN(e){if(this._log.info(`[CDNStreaming] startPublishGivenCDN() current: ${JSON.stringify(this._params)}, params: ${JSON.stringify(e)}`),this.isPublishingGivenCDN){let{appId:r,bizId:o,url:i}=this._params||{};if(r===e.appId&&o===e.bizId&&i===e.url)return;await this.stopPublishGivenCDN()}this._params=e,this._publishGivenCDNData={pushRequestTime:Date.now(),pushAppId:e.appId,pushBizId:e.bizId,pushCdnUrl:e.url,pushStreamType:this.convertStreamType(e==null?void 0:e.publishMode),pushStreamId:e.streamId};try{let r=await this._room.sendStartPublishCDN(this._publishGivenCDNData,!1),{code:o,message:i}=r.data;if(o===0)this._log.info("[CDNStreaming] server success: start given cdn.");else throw this.resetGivenCDN(),this._log.error(`[CDNStreaming] server failed: start given cdn errCode: ${o} errMsg: ${i} options: ${JSON.stringify(e)}`),new Error(`[CDNStreaming] server failed: start given cdn errCode: ${o} errMsg: ${i}`)}catch(r){throw this.resetGivenCDN(),r}}async stopPublishGivenCDN(){if(this._log.info("[CDNStreaming] stopPublishGivenCDN"),!this.isPublishingGivenCDN||!this._publishGivenCDNData){this.resetGivenCDN();return}let{pushAppId:e,pushBizId:r,pushCdnUrl:o,pushStreamType:i,pushStreamId:l}=this._publishGivenCDNData,s={pushRequestTime:Date.now(),pushAppId:e,pushBizId:r,pushCdnUrl:o,pushStreamType:i,pushStreamId:l},p=await this._room.sendStopPublishCDN(s,!1),{code:S,message:D}=p.data;if(S===0)this._log.info("[CDNStreaming] server success: stop given cdn."),this.resetGivenCDN();else throw this._log.error(`[CDNStreaming] server failed: stop given cdn errCode: ${S} errMsg: ${D} data: ${JSON.stringify(s)}`),new Error(`[CDNStreaming] server failed: stop given cdn errCode: ${S} errMsg: ${D}`)}resetGivenCDN(){this._publishGivenCDNData=null,this._params=void 0}convertStreamType(e){return e==="publish-sub-stream-to-cdn"?"aux":"main"}};var x=class{constructor(e,r){g(this,"_core");g(this,"_room");g(this,"_log");g(this,"_config",null);g(this,"_data",null);g(this,"_givenCDNManager");this._core=e,this._room=e.room,this._log=r,this.reset()}get isMixing(){return!!this._data}get isStarted(){return!!this._config}get hasCustomCDN(){var e,r,o;return((e=this._config)==null?void 0:e.target.appId)&&((r=this._config)==null?void 0:r.target.bizId)&&((o=this._config)==null?void 0:o.target.url)}async startMixTranscode(e){if(this._log.info(`startMixTranscode: ${JSON.stringify(e)}`),this._config=e,this.installEvents(),!!this._core.room.isJoined)try{let r=this.getInputParam(e),o=this.getOutputParam(e),i=this.getOutputSessionId({config:e,roomId:this._room.roomId,userId:this._room.userId});this.isMixing&&this._data&&i!==this._data.outputSessionId&&(this._log.info("[CDNStreaming] streamId changed, auto stop mixing before start"),await this.doStopMixTranscode()),await this.doStartMixTranscode({outputSessionId:i,inputParam:r,outputParam:o});let{appId:l,bizId:s,url:p,streamId:S=""}=e.target;l&&s&&p&&(this._givenCDNManager||(this._givenCDNManager=new O(this._core,this._log)),await this._givenCDNManager.startPublishGivenCDN({publishMode:e.target.publishMode,appId:l,bizId:s,url:p,streamId:S}))}catch(r){throw this.reset(),r}}async doStartMixTranscode({outputSessionId:e,inputParam:r,outputParam:o}){let i={roomId:String(this._room.roomId),mcuRequestTime:Date.now(),outputSessionId:e,inputParam:r,outputParam:o};this._log.info(`[CDNStreaming] doStartMixTranscode: ${JSON.stringify(i)}`);let l=await this._room.sendStartMixTranscode(i),{code:s}=l.data,{message:p}=l.data;if(s===0)this._log.info("[CDNStreaming] server success: start mix"),this._data=i;else throw s===-102083&&(p=`Please enable relayed-push in ${this._core.constants.CLOUD_CONSOLE_URL} and try later, refer to ${this._core.constants.DOC_URL}tutorial-26-advanced-publish-cdn-stream.html`),this._log.error(`[CDNStreaming] server failed: start mix errCode: ${s} errMsg: ${p}`),new Error(`[CDNStreaming] server failed: start mix errCode: ${s} errMsg: ${p}`)}async stopMixTranscode(){this._log.info("[CDNStreaming] stopMixTranscode");try{this.isStarted&&this.isMixing&&(await this.doStopMixTranscode(),this._config&&this.hasCustomCDN&&this._givenCDNManager&&await this._givenCDNManager.stopPublishGivenCDN())}catch(e){throw e}this.reset()}async doStopMixTranscode(){let e={mcuRequestTime:Date.now(),outputSessionId:this._data.outputSessionId,streamType:this._data.outputParam.streamType};this._log.info(`[CDNStreaming] doStopMixTranscode: ${JSON.stringify(e)}`);let r=await this._room.sendStopMixTranscode(e),{code:o,message:i}=r.data;if(o===0)this._log.info("[CDNStreaming] server success: stop mix"),this.reset();else throw this._log.error(`[CDNStreaming] server failed: stop mix errCode: ${o} errMsg: ${i}`),new Error(`[CDNStreaming] server failed: stop mix errCode: ${o} errMsg: ${i}`)}reset(){this._config=null,this._data=null,this.uninstallEvents()}installEvents(){this._core.room.on("joined",this.handleRoomJoined,this),this._core.room.on("left",this.handleRoomLeft,this)}uninstallEvents(){this._core.room.off("joined",this.handleRoomJoined,this),this._core.room.off("left",this.handleRoomLeft,this)}async handleRoomJoined(){this._log.info(`[CDNStreaming] handleJoined: ${JSON.stringify(this._config)}`),this.isStarted&&this._config&&await this.startMixTranscode(this._config)}async handleRoomLeft(){this._log.info(`[CDNStreaming] handleRoomLeft: ${JSON.stringify(this._config)}`),this._data=null}getOutputSessionId({config:e,userId:r,roomId:o}){return this._core.utils.isString(e.target.streamId)&&e.target.streamId.length>0?e.target.streamId:(0,te.default)(`${o}_${r}_main`)}getStringRoomId(e,r){return e?String(e):r}getInputParam(e){let{mix:r={}}=e,{audioMixUserList:o=[],videoLayoutList:i=[]}=r,l=i.map(s=>({userId:s.fixedVideoUser.userId,roomId:this.getStringRoomId(s.fixedVideoUser.roomId,s.fixedVideoUser.strRoomId)||this._core.room.roomId,width:s.width||0,height:s.height||0,locationX:s.locationX||0,locationY:s.locationY||0,zOrder:s.zOrder||1,streamType:s.fixedVideoStreamType==="sub"?1:0,inputType:W.IT_PURE_VIDEO,renderMode:s.fillMode||0}));return o.forEach(s=>{let p=this._core.room.roomId;(s.roomId||s.strRoomId)&&(p=this.getStringRoomId(s.roomId,s.strRoomId));let S=l.findIndex(D=>D.userId===s.userId&&D.roomId===p);S!==-1?l[S].inputType=W.IT_AUDIO_VIDEO:l.push({userId:s.userId,roomId:s.roomId||s.strRoomId||this._core.room.roomId,inputType:W.IT_PURE_AUDIO})}),l}getOutputParam(e){let r=e.target.streamId||"",{encoding:o={},mix:i={}}=e;return{streamId:r,streamType:r.length>0?1:0,width:this._core.utils.isUndefined(o.videoWidth)?640:o.videoWidth,height:this._core.utils.isUndefined(o.videoHeight)?480:o.videoHeight,videoBps:o.videoBitrate||0,fps:o.videoFramerate||15,gop:o.videoGOP||2,audioSampleRate:o.audioSampleRate||48e3,audioBps:o.audioBitrate||64,audioChannels:o.audioChannels||1,backgroundColor:i.backgroundColor||0,backgroundImg:i.backgroundImage||"",extraInfo:"",videoCodec:2,audioCodec:0}}};var q=Y(F(),1);var L=class{constructor(e,r){g(this,"_room");g(this,"_core");g(this,"_log");g(this,"_paramsForTencentCDN");g(this,"_initParamsForTencentCDN",{isPublished:!1,isStarted:!1});this._core=e,this._room=e.room,this._log=r,this._paramsForTencentCDN=new Map([["publish-main-stream-to-cdn",this._initParamsForTencentCDN],["publish-sub-stream-to-cdn",this._initParamsForTencentCDN]])}installEvents(){this._core.innerEmitter.on("104",this.handlePublished,this),this._core.room.on("left",this.handleRoomLeft,this)}uninstallEvents(){this._core.innerEmitter.off("104",this.handlePublished,this),this._core.room.off("left",this.handleRoomLeft,this)}async handlePublished({track:e}){var i;if(e.room!==this._room||(this._log.info(`[CDNStreaming] handlePublished: mediaType ${e.mediaType}, roomID ${(i=e==null?void 0:e.room)==null?void 0:i.roomId}`),e.mediaType===1))return;let r=e.mediaType===4?"publish-main-stream-to-cdn":"publish-sub-stream-to-cdn",o=this._paramsForTencentCDN.get(r)||null;o!=null&&o.target&&o.isStarted&&await this.startPublishTencentCDN(o.target)}async handleRoomLeft(){this._log.info("[CDNStreaming] handleRoomLeft"),this.changeDataStatus("publish-main-stream-to-cdn",{isPublished:!1}),this.changeDataStatus("publish-sub-stream-to-cdn",{isPublished:!1})}isStreamPublished(e){return e==="publish-main-stream-to-cdn"&&!this._room.isMainStreamPublished?(this._log.info("[CDNStreaming] Main stream has not already published, will auto reStart after published."),!1):e==="publish-sub-stream-to-cdn"&&!this._room.isAuxStreamPublished?(this._log.info("[CDNStreaming] Sub has not already published, will auto reStart after published."),!1):!0}changeDataStatus(e,r){let o=this._paramsForTencentCDN.get(e),i=_(_({},o),r);this._paramsForTencentCDN.set(e,i)}async startPublishTencentCDN(e){if(this._log.info(`[CDNStreaming] startPublishTencentCDN ${JSON.stringify(e)}`),this.installEvents(),this.changeDataStatus(e.publishMode,{target:e,isStarted:!0}),!this.isStreamPublished(e.publishMode))return;let r=e.streamId||"",o=this.generatePublishCDNStreamId(r,e.publishMode),i=this.generatePublishCDNSessionId(e.publishMode),l=e.publishMode==="publish-sub-stream-to-cdn"?1:0,s={requestTime:Date.now(),sessionId:i,streamId:o,streamType:l};await this.doStartPublishTencentCDN(s,e.publishMode);let{appId:p,bizId:S,url:D}=e;if(p&&S&&D){let I=this._paramsForTencentCDN.get(e.publishMode)||this._initParamsForTencentCDN;I!=null&&I.givenCDNManager||(I.givenCDNManager=new O(this._core,this._log),this._paramsForTencentCDN.set(e.publishMode,I)),await I.givenCDNManager.startPublishGivenCDN({publishMode:e.publishMode,appId:p,bizId:S,url:D,streamId:o})}}async doStartPublishTencentCDN(e,r){this._log.info(`[CDNStreaming] doStartPublishTencentCDN: ${JSON.stringify(e)}`);let o=6,i=500,l=0;for(;;){let s=await this._room.sendStartPublishCDN(e,!0),{code:p}=s.data,{message:S}=s.data;if(p===0){this._log.info("[CDNStreaming] server success: start tencent cdn"),this.changeDataStatus(r,{isPublished:!0});break}else if(p===-10006&&l<o)this._log.warn(`[CDNStreaming] doStartPublishTencentCDN: retry...${l+1}/6, reason: ${S}`),l+=1,await new Promise(D=>setTimeout(D,i));else throw this.changeDataStatus(r,{isPublished:!1}),p===-102083&&(S=`Please enable relayed-push in ${this._core.constants.CLOUD_CONSOLE_URL} and try later, refer to ${this._core.constants.DOC_URL}tutorial-26-advanced-publish-cdn-stream.html`),this._log.error(`[CDNStreaming] server failed: start tencent cdn errCode: ${p} errMsg: ${S}`),new Error(`[CDNStreaming] server failed: start tencent cdn errCode: ${p} errMsg: ${S}`)}}async stopPublishTencentCDN(e){this._log.info(`[CDNStreaming] doStartPublishTencentCDN: ${JSON.stringify(e)}`);let r=this._paramsForTencentCDN.get(e)||this._initParamsForTencentCDN;if(r.isPublished){let{target:o}=r;o!=null&&o.bizId&&o.appId&&o.url&&(r!=null&&r.givenCDNManager)&&await(r==null?void 0:r.givenCDNManager.stopPublishGivenCDN()),await this.doStopPublishTencentCDN(e)}this._paramsForTencentCDN.set(e,this._initParamsForTencentCDN)}async doStopPublishTencentCDN(e){let r={requestTime:Date.now(),sessionId:(0,q.default)(`${this._room.roomId}_${this._room.userId}_${this.convertPublishModeToStreamType(e)}`)};this._log.info(`[CDNStreaming] doStopPublishTencentCDN: ${JSON.stringify(r)}`);let o=await this._room.sendStopPublishCDN(r,!0),{code:i}=o.data,{message:l}=o.data;if(i===0)this._log.info("[CDNStreaming] server success: stop tencent cdn"),this._paramsForTencentCDN.set(e,this._initParamsForTencentCDN),this.reset(e);else throw i===-102069&&(this._paramsForTencentCDN.set(e,this._initParamsForTencentCDN),l=`can not stop in auto relayed-push mode ${l}`),this._log.error(`[CDNStreaming] server failed: stop tencent cdn errCode: ${i} errMsg: ${l}`),new Error(`[CDNStreaming] server failed: stop tencent cdn errCode: ${i} errMsg: ${l}`)}reset(e){this.uninstallEvents(),this._paramsForTencentCDN.set(e,this._initParamsForTencentCDN)}generatePublishCDNStreamId(e,r){if(e===""){let o=`${this._room.roomId}_${this._room.userId}_${this.convertPublishModeToStreamType(r)}`;return/^[A-Za-z\d_-]*$/.test(o)||(o=(0,q.default)(o)),`${this._room.sdkAppId}_${o}`}return e}convertPublishModeToStreamType(e){return e==="publish-main-stream-to-cdn"?"main":"aux"}generatePublishCDNSessionId(e){return(0,q.default)(`${this._room.roomId}_${this._room.userId}_${this.convertPublishModeToStreamType(e)}`)}};var ae=Y(F(),1);var v=class{constructor(e,r){g(this,"_core");g(this,"_room");g(this,"_log");g(this,"_seq");g(this,"_taskId",null);g(this,"_startData",null);g(this,"_updateData",null);g(this,"_stopData",null);this._core=e,this._room=e.room,this._log=r,this._seq=0}async startPushStreamToRoom(e){var l,s;this._seq+=1,this._startData=_({roomid:String(this._room.roomId),roomType:this._room.useStringRoomId?1:0,sessionId:(0,ae.default)(`${this._room.roomId}_${this._room.userId}_start`),agentParam:{cdnRobotUserid:`mcu_robot_${this._room.roomId}_${this._room.userId}`}},this.getCommonParams(e)),this._log.info(`startPushStreamToRoom: ${JSON.stringify(this._startData)}`);let r=await this._room.sendStartPushStreamToRoom(this._startData),{code:o,message:i}=r.data;o===0?(this._taskId=(s=(l=r.data)==null?void 0:l.data)==null?void 0:s.taskId,this._taskId||this.reportServerError("startPushStreamToRoom",o,`can't resolve task id: ${JSON.stringify(r.data)}`),this._log.info("[CDNStreaming] server success: taskId",this._taskId)):this.reportServerError("startPushStreamToRoom",o,i)}async updatePushStreamToRoom(e){this._seq+=1,this._updateData=H(_({taskid:this._taskId},this.getCommonParams(e)),{enableNtpSync:!0}),this._log.info(`updatePushStreamToRoom: ${JSON.stringify(this._updateData)}`);let r=await this._room.sendUpdatePushStreamToRoom(this._updateData),{code:o,message:i}=r.data;o===0?this._log.info("server success: updatePushStreamToRoom"):this.reportServerError("updatePushStreamToRoom",o,i)}async stopPushStreamToRoom(){this._seq+=1,this._stopData={sdkappid:this._room.sdkAppId,taskid:this._taskId},this._log.info(`stopPushStreamToRoom: ${JSON.stringify(this._stopData)}`);let e=await this._room.sendStopPushStreamToRoom(this._stopData),{code:r,message:o}=e.data;r===0?this._log.info("server success: start mix"):this.reportServerError("stopPushStreamToRoom",r,o)}reportServerError(e,r,o){let i=`server failed: ${e} errCode: ${r} errMsg: ${o}`;throw this._log.error(i),new Error(i)}getPushRtcRoomParams(e){let{robotUser:r}=e.target;return r?[{roomid:String((r==null?void 0:r.roomId)||(r==null?void 0:r.strRoomId))||this._room.roomId,roomType:r!=null&&r.roomId?0:1,pushRobotUserid:r==null?void 0:r.userId}]:[]}getCommonParams(e){return{sdkappid:this._room.sdkAppId,transcode:!0,audioParam:this.getAudioParam(e),videoParam:this.getVideoParam(e),pushRtcRoomParams:this.getPushRtcRoomParams(e),sequenceNumber:this._seq}}getAudioParam(e){let{mix:r={},encoding:o={}}=e,i={audioSamplerate:o.audioSampleRate||48e3,audioBitrateKbps:o.audioBitrate||64,audioChannels:o.audioChannels||1},{audioMixUserList:l}=r;return{audioEncodeParam:i,mixAudioUsers:(l==null?void 0:l.map(s=>({roomid:String(s.roomId||s.strRoomId)||this._room.roomId,userid:s.userId,roomType:s.roomId?0:1})))||[]}}getVideoParam(e){let{mix:r={},encoding:o={}}=e,i={videoCodec:2,videoWidth:o.videoWidth||640,videoHeight:o.videoHeight||480,videoFramerate:o.videoFramerate||15,videoGop:o.videoGOP||2,videoBitrateKbps:o.videoBitrate||800},{videoLayoutList:l}=r;return{videoEncodeParam:i,layoutParams:(l==null?void 0:l.map(s=>({userMediaStream:{userInfo:{roomid:String(s.fixedVideoUser.roomId||s.fixedVideoUser.strRoomId)||this._room.roomId,userid:s.fixedVideoUser.userId,roomType:s.fixedVideoUser.roomId?0:1},streamType:s.fixedVideoStreamType==="sub"?1:0},imageWidth:s.width||0,imageHeight:s.height||0,locationX:s.locationX||0,locationY:s.locationY||0,imageZorder:s.zOrder||1,renderMode:s.fillMode||0})))||[],backgroundColor:r.backgroundColor||0,backgroundImageUrl:r.backgroundImage||""}}};var oe=c=>typeof c=="string";var R;function Ce(c,e,r,o){if(!/^[A-Za-z\d_-]*$/.test(c)){let{RtcError:l,ErrorCode:s,ErrorCodeDictionary:p}=R;throw new l({code:s.INVALID_PARAMETER,extraCode:p.INVALID_STREAM_ID,messageParams:{key:"streamId"}})}}function Ie(c,e,r,o){let{RtcError:i,ErrorCode:l,ErrorCodeDictionary:s}=R;if(oe(c))throw new i({code:l.INVALID_PARAMETER,extraCode:s.INVALID_ROOM_ID_INTEGER_STRING,fnName:r,messageParams:{key:"roomId"}});if(c===void 0)return;if(!(/^[1-9]\d*$/.test(String(c))&&c<4294967295))throw new i({code:l.INVALID_PARAMETER,extraCode:s.INVALID_ROOM_ID_INTEGER,fnName:r,messageParams:{key:"roomId"}})}function Pe(c,e,r,o){let{RtcError:i,ErrorCode:l,ErrorCodeDictionary:s}=R;if(!/^[A-Za-z\d\s!#$%&()+\-:;<=.>?@[\]^_{}|~,]{1,64}$/.test(c))throw new i({code:l.INVALID_PARAMETER,extraCode:s.INVALID_ROOM_ID_STRING,fnName:r,messageParams:{key:"strRoomId"}})}var A={type:"number",notLessThanZero:!0},j={type:"object",properties:{userId:{required:!0,type:"string"},roomId:{type:["string","number"],validate:Ie},strRoomId:{type:"string",validate:Pe}}},ie={required:!0,properties:{publishMode:{required:!0,values:["publish-main-stream-to-cdn","publish-mix-stream-to-cdn","publish-sub-stream-to-cdn","publish-mix-stream-to-room"]},streamId:{required:!1,type:"string",validate:Ce},appId:{type:"number",allowEmpty:!1},bizId:{type:"number",allowEmpty:!1},url:{type:"string",allowEmpty:!1},robotUser:_({},j)},validate(c,e,r,o){let{publishMode:i,robotUser:l}=c;if(i==="publish-mix-stream-to-room"&&!l){let{RtcError:s,ErrorCode:p}=R;throw new s({code:p.INVALID_PARAMETER,message:"Invalid parameter target, the value of publishMode is PublishMixStreamToRoom, robotUser is required."})}}},se={required:!1,type:"object",properties:{videoWidth:A,videoHeight:A,videoBitrate:H(_({},A),{allowEmpty:!1}),videoFramerate:{type:"number",validate(c,e,r,o){if(c<=0||c>30){let{RtcError:i,ErrorCode:l}=R;throw new i({code:l.INVALID_PARAMETER,message:"Invalid parameter mixConfig -> videoFramerate, the value must be between (0, 30]."})}}},videoGOP:{type:"number",validate(c,e,r,o){if(c<1||c>8){let{RtcError:i,ErrorCode:l}=R;throw new i({code:l.INVALID_PARAMETER,message:"Invalid parameter mixConfig -> videoGOP, the value must be between [1, 8]."})}}},audioSampleRate:A,audioBitrate:{type:"number",validate(c,e,r,o){if(c<32||c>192){let{RtcError:i,ErrorCode:l}=R;throw new i({code:l.INVALID_PARAMETER,message:"Invalid parameter mixConfig -> audioBitrate, the value must be between [32, 192]."})}}},audioChannels:{type:"number",values:[1,2]}}},ne={required:!1,type:"object",properties:{backgroundColor:{type:"number"},backgroundImage:{type:"string"},audioMixUserList:{type:"array",arrayItem:_({},j)},videoLayoutList:{type:"array",required:!0,arrayItem:{type:"object",properties:{fixedVideoUser:_({},j),fixedVideoStreamType:{type:"string",required:!0,values:["main","sub"]},fillMode:{type:"number",values:[0,1,2,4]},zOrder:{type:"number",required:!0,validate(c,e,r,o){if(c<1||c>15){let{RtcError:i,ErrorCode:l}=R;throw new i({code:l.INVALID_PARAMETER,message:"Invalid parameter mix -> videoLayoutList -> zOrder, the value must be between [1, 15]."})}}},width:A,height:A,locationX:A,locationY:A}}}}};function me(c){return R=c.errorModule,{name:"CDNStreamingOptions",type:"object",required:!0,allowEmpty:!1,properties:{target:_({},ie),encoding:_({},se),mix:_({},ne)},validate(e,r,o,i){var S,D;let{publishMode:l}=e.target,{encoding:s,mix:p}=e;if(l==="publish-mix-stream-to-cdn"){let{RtcError:I,ErrorCode:E,ErrorCodeDictionary:G}=c.errorModule;if(!s)throw new I({code:E.INVALID_PARAMETER,extraCode:G.INVALID_PARAMETER_REQUIRED,fnName:o,messageParams:{key:"encoding"}});if(!p)throw new I({code:E.INVALID_PARAMETER,extraCode:G.INVALID_PARAMETER_REQUIRED,fnName:o,messageParams:{key:"mix"}});if(p&&p.videoLayoutList){let y=0,N=0,U=[];if(p.videoLayoutList.forEach((f,V)=>{U.push(f.fixedVideoUser.userId),f.width+f.locationX>y&&(y=f.width+f.locationX),f.height+f.locationY>N&&(N=f.height+f.locationY)}),U.indexOf(c.room.userId)<0)throw new I({code:E.INVALID_PARAMETER,message:"Invalid parameter mix -> videoLayoutList, the value must be include self."});let J=(S=s==null?void 0:s.videoWidth)!=null?S:640,B=(D=s==null?void 0:s.videoHeight)!=null?D:480;if(J<y||B<N)throw new I({code:E.INVALID_PARAMETER,message:"Invalid parameter encoding, the width and height of the mixed video must encompass all the mixed-in video streams."})}}}}}function de(c){return R=c.errorModule,{name:"CDNStreamingOptions",type:"object",required:!0,allowEmpty:!1,properties:{target:_({},ie),encoding:_({},se),mix:_({},ne)}}}function ue(c){return R=c.errorModule,{name:"CDNStreamingOptions",type:"object",required:!0,allowEmpty:!1,properties:{target:{required:!0,properties:{publishMode:{required:!0,values:["publish-main-stream-to-cdn","publish-mix-stream-to-cdn","publish-sub-stream-to-cdn","publish-mix-stream-to-room"]}}}}}}var k=0,w=class w{constructor(e){this.core=e;g(this,"_mixTranscodeManager");g(this,"_publishCDNManager");g(this,"_pushStreamToRoomManager");g(this,"_core");g(this,"_modeOptions");g(this,"seq");g(this,"_log");k=k+1,this.seq=k,this._log=e.log.createChild({id:`${this.getAlias()}${k}`}),this._log.info(`[CDNStreaming] created id=${this.getAlias()}${k}`),this._core=e,this._modeOptions=new Map,this._mixTranscodeManager=new x(e,this._log),this._publishCDNManager=new L(e,this._log),this._pushStreamToRoomManager=new v(e,this._log)}getName(){return w.Name}getAlias(){return"cdn"}getValidateRule(e){switch(e){case"start":return me(this._core);case"update":return de(this._core);case"stop":return ue(this._core)}}getGroup(e){return e.target.publishMode}async start(e){return this._modeOptions.set(e.target.publishMode,e),e.target.publishMode==="publish-mix-stream-to-room"?this._pushStreamToRoomManager.startPushStreamToRoom(e):await this.doStart(e)}async update(e){let r=this._modeOptions.get(e.target.publishMode);return this._core.utils.deepMerge(r,e),e.target.publishMode==="publish-mix-stream-to-room"?this._pushStreamToRoomManager.updatePushStreamToRoom(r):await this.doStart(r)}async stop(e){switch(e.target.publishMode){case"publish-mix-stream-to-cdn":{await this._mixTranscodeManager.stopMixTranscode();break}case"publish-main-stream-to-cdn":case"publish-sub-stream-to-cdn":{await this._publishCDNManager.stopPublishTencentCDN(e.target.publishMode);break}case"publish-mix-stream-to-room":{this._pushStreamToRoomManager.stopPushStreamToRoom();break}}this._modeOptions.delete(e.target.publishMode)}async doStart(e){switch(this._log.info(`[CDNStreaming] doStart: ${JSON.stringify(e)}`),e.target.publishMode){case"publish-mix-stream-to-cdn":{await this._mixTranscodeManager.startMixTranscode(e);break}case"publish-main-stream-to-cdn":case"publish-sub-stream-to-cdn":{await this._publishCDNManager.startPublishTencentCDN(e.target);break}}}};g(w,"TYPE",{PublishMode:{PublishMainStreamToCDN:"publish-main-stream-to-cdn",PublishSubStreamToCDN:"publish-sub-stream-to-cdn",PublishMixStreamToCDN:"publish-mix-stream-to-cdn",PublishMixStreamToRoom:"publish-mix-stream-to-room"}}),g(w,"Name","CDNStreaming");var Z=w;var lr=Z;export{Z as CDNStreaming,M as PublishMode,K as TRTCStreamType,lr as default};
