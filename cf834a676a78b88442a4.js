(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[62780],{455021:(e,t,n)=>{e.exports=n.p+"d55a815e67ecc4faaafeb63dd2379a5a.png"},192998:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(173436),o=n(741655),i=n(549425),a=n(159500),l=n(212271),c=n(923463),u=n(896840),s=n(251356),f=n(25765),p=n(538796),d=n(617509),h=n(819525),y=n(790948),_=n(23816),b=n(461061);function O(e){var t,n,r,o=null!=e.fileItems?e.fileItems.map((function(e){return null!==(t=e.mimeType)&&void 0!==t?t:"unknown"})):[],i=null!==(n=e.errorMessage)&&void 0!==n?n:void 0,a=null!==(r=e.failureCode)&&void 0!==r?r:void 0;(0,_.yw)(b.rMx.SEND_MESSAGE_FAILURE,{failure_code:a,error_message:i,attachment_mimetypes:o})}var g=n(302561),m=n(11870),v=n(178675),E=n(402124),P=n(172701),A=n(897576),w=n(418674),T=n(959797);function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(e){n(e);return}
l.done?t(c):Promise.resolve(c).then(r,o)}function I(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){I(e,t,n[t])}))}return e}function R(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function j(e,t){return function(e){
if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){l=!0;o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var D=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},
"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};function C(e){
var t,u,s=e.channelId,_=e.uploads,A=e.draftType,S=e.parsedMessage,I=e.options,U=void 0===I?{}:I,Z=function(){""!==N.content&&""===E.Z.getDraft(s,A)&&o.Z.saveDraft(s,N.content,A);0===P.Z.getUploadCount(s,A)&&a.Z.setUploads({channelId:s,uploads:_,draftType:A})},x=new f.Z(b.ANM.MESSAGES(s)),N={content:"",nonce:"",channel_id:s,type:b.uaV.DEFAULT,sticker_ids:null==U?void 0:U.stickerIds,captcha_key:null==U||null===(t=U.captchaPayload)||void 0===t?void 0:t.captcha_key,captcha_rqtoken:null==U||null===(u=U.captchaPayload)||void 0===u?void 0:u.captcha_rqtoken};null!=S&&(N.content=null==S?void 0:S.content);if(null!=m.Z.getPendingReply(s)){N.type=b.uaV.REPLY;N.message_reference=U.messageReference;N.allowed_mentions=U.allowedMentions;(0,g.A6)(s)}var k,G=j((0,v.ZP)(N.content),2),z=G[0],B=G[1];if(z){N.content=B;var F;N.flags=(0,w.pj)(null!==(F=N.flags)&&void 0!==F?F:0,b.iLy.SUPPRESS_NOTIFICATIONS)}var H,Y,J,V=(0,y.ZP)({channelId:s,content:N.content,tts:null!==(k=null==S?void 0:S.tts)&&void 0!==k&&k,
type:N.type,messageReference:N.message_reference,flags:N.flags});N.nonce=V.id;V.nonce=N.nonce;x.on("start",(function(e){H=(0,h.e5)(R(M({},V),{id:e.id}));r.Z.dispatch({type:"UPLOAD_START",channelId:s,file:e,message:H,uploader:x})}));x.on("progress",(function(e){r.Z.dispatch({type:"UPLOAD_PROGRESS",channelId:s,file:e})}));x.on("error",(J=(Y=function(e,t,o){var a,u;return D(this,(function(f){switch(f.label){case 0:r.Z.dispatch({type:"UPLOAD_FAIL",channelId:s,file:e,messageRecord:H});O({fileItems:e.items,failureCode:t});if(t===b.evJ.EXPLICIT_CONTENT){i.Z.sendClydeError(s,t);return[2]}if(t===b.evJ.AUTOMOD_MESSAGE_BLOCKED){a={code:t,message:null==o?void 0:o.message};u=null==H?null:{type:c.$V.SEND,message:R(M({},H),{channelId:s})};(0,l.xT)({title:T.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,help:(0,d.uF)(u,a)});return[2]}return null==o||null==o.captcha_key||null!=U.captchaPayload?[3,2]:[4,n.e(41704).then(n.bind(n,141704))];case 1:f.sent().default.showCaptchaAsync((0,
p.z)(o)).then((function(e){C({channelId:s,uploads:_,draftType:A,parsedMessage:S,options:R(M({},U),{captchaPayload:e})})}),(function(){Z()}));return[3,3];case 2:(0,l.xT)({title:T.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,help:T.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP});Z();f.label=3;case 3:return[2]}}))},function(){var e=this,t=arguments;return new Promise((function(n,r){var o=Y.apply(e,t);function i(e){L(o,n,r,i,a,"next",e)}function a(e){L(o,n,r,i,a,"throw",e)}i(void 0)}))}),function(e,t,n){return J.apply(this,arguments)}));x.on("complete",(function(e){r.Z.dispatch({type:"UPLOAD_COMPLETE",channelId:s,file:e,aborted:x._aborted})}));x.uploadFiles(_,N)}const U={instantBatchUpload:function(e,t,n){var r=Array.from(t).map((function(t){return new u.n({file:t,platform:s.o.WEB},e)}));C({channelId:e,uploads:r,draftType:n})},upload:function e(t){var n=t.channelId,a=t.file,c=t.draftType,u=t.message,s={content:"",tts:!1,hasSpoiler:t.hasSpoiler,filename:t.filename};if(null!=u){
s.content=u.content;s.tts=u.tts;s.channel_id=u.channel_id;var p=m.Z.getPendingReply(n);if(null!=p){var d=i.Z.getSendMessageOptionsForReply(p);s.type=b.uaV.REPLY;s.message_reference=d.messageReference;s.allowed_mentions=d.allowedMentions;(0,g.A6)(n)}}var h=new f.Z(b.ANM.MESSAGES(n));h.on("start",(function(e){r.Z.dispatch({type:"UPLOAD_START",channelId:n,file:e,uploader:h})}));h.on("progress",(function(e){r.Z.dispatch({type:"UPLOAD_PROGRESS",channelId:n,file:e})}));h.on("error",(function(t,f){r.Z.dispatch({type:"UPLOAD_FAIL",channelId:n,file:t});O({fileItems:t.items,failureCode:f});if(f!==b.evJ.EXPLICIT_CONTENT){(0,l.xT)({title:T.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,help:T.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({onClick:function(){(0,A.Mr)(l.Am);e({channelId:n,file:a,draftType:c,message:u})}})});""!==s.content&&""===E.Z.getDraft(n,c)&&o.Z.saveDraft(n,s.content,c)}else i.Z.sendClydeError(n,f)}));h.on("complete",(function(e){r.Z.dispatch({type:"UPLOAD_COMPLETE",channelId:n,
file:e})}));h.upload(a,s)},uploadFiles:C,cancel:function(e){r.Z.dispatch({type:"UPLOAD_CANCEL_REQUEST",file:e});if(null!=e.draftContent&&null!=e.channelId){""===E.Z.getDraft(e.channelId,E.d.ChannelMessage)&&r.Z.dispatch({type:"DRAFT_SAVE",channelId:e.channelId,draft:e.draftContent,draftType:E.d.ChannelMessage})}}}},736294:(e,t,n)=>{"use strict";n.d(t,{Z:()=>G,$:()=>z});var r=n(391809),o=n(356004),i=n(337823),a=n(561388),l=n(896840),c=n(717187),u=n.n(c),s=n(496486),f=n.n(s),p=n(832691);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function _(e){_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return _(e)}function b(e){for(var t=1;t<arguments.length;t++){
var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){y(e,t,n[t])}))}return e}function O(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function g(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e,t){m=Object.setPrototypeOf||function(e,t){e.__proto__=t
;return e};return m(e,t)}function v(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}var A=new p.Z("UploaderBase.tsx"),w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&m(e,t)}(n,e);var t=P(n);function n(e){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST";h(this,n);(r=t.call(this))._token="";r._lastUpdate=0;r._loaded=0;r._aborted=!1;r._errored=!1;r.alreadyStarted=!1;r._handleStart=function(e){r._cancel=e;r.alreadyStarted||r.emit("start",r._file);r.alreadyStarted=!0};r._handleProgress=function(e,t){var n=Date.now(),o=Math.min(Math.floor(e/t*100),100),i=Math.floor((e-r._loaded)/((n-r._lastUpdate)/1e3));r._lastUpdate=n
;r._loaded=e;r._file=O(b({},r._file),{currentSize:t,progress:o,rate:i});r.emit("progress",r._file)};r._handleError=function(e,t){r.clearProcessingMessageInterval();if(!r._aborted){r._errored=!0;A.log("_handleError: ".concat(e," for ").concat(r.id));r.emit("error",r._file,e,t);r.removeAllListeners()}};r._handleComplete=function(e){r.clearProcessingMessageInterval();A.log("_handleComplete for ".concat(r.id));r.emit("complete",r._file,e);r.removeAllListeners()};r.id=f().uniqueId("Uploader");r._url=e;r._method=o;return r}var r=n.prototype;r._addAttachmentsToPayload=function(e,t,n){var r=b({},e),o=v(f().get(r,t,[])).concat(v(n));return f().set(r,t,o)};r.clearProcessingMessageInterval=function(){if(null!=this.processingMessageChangeInterval){clearInterval(this.processingMessageChangeInterval);this.processingMessageChangeInterval=void 0}};r.cancel=function(){A.log("cancel() for ".concat(this.id));this._aborted=!0;null!=this._cancel&&this._cancel();this._handleComplete()}
;r.upload=function(e,t,n){if(null!=this._cancel)throw new Error("Uploader.upload(...): An upload is already in progress.");this._lastUpdate=Date.now();this._loaded=0;this._file={id:this.id,name:e.name,currentSize:0,totalPreCompressionSize:0,compressionProgress:0,progress:0,rate:0,hasImage:!1,hasVideo:!1,attachmentsCount:0,draftContent:null==t?void 0:t.content,channelId:null==t?void 0:t.channel_id,items:n}};return n}(u()),T=n(461061),S=n(959797);function L(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(e){n(e);return}l.done?t(c):Promise.resolve(c).then(r,o)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){L(i,r,o,a,l,"next",e)}function l(e){L(i,r,o,a,l,"throw",e)}a(void 0)}))}}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function j(e){
j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return j(e)}function D(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function C(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e,t){U=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return U(e,t)}var Z=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function x(e){var t=function(){
if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C(this,n)}}var N=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0]
;continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},k=new r.Z("CloudUploaderBase.tsx"),G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&U(e,t)}(n,e);var t=x(n);function n(){M(this,n);var e;(e=t.apply(this,arguments)).files=[];return e}var r=n.prototype;r._fileSize=function(){return this.files.reduce((function(e,t){var n;return e+=null!==(n=t.currentSize)&&void 0!==n?n:0}),0)}
;r.compressAndCheckFileSize=function(){var e=this;return I((function(){var t,n,r,l,c,u,s,f,p,d,h;return N(this,(function(y){switch(y.label){case 0:if(e.files.length>T.dN1){k.log("Too many attachments for ".concat(e.id));e._handleError(T.evJ.TOO_MANY_ATTACHMENTS);return[2,!1]}return[3,10];case 1:y.trys.push([1,8,9,10]);l=e.files[Symbol.iterator]();y.label=2;case 2:if(t=(c=l.next()).done)return[3,7];u=c.value;y.label=3;case 3:y.trys.push([3,5,,6]);return[4,u.reactNativeCompressAndExtractData()];case 4:y.sent();if(0===(null!==(s=u.currentSize)&&void 0!==s?s:0)){e._handleError(T.evJ.ENTITY_EMPTY);return[2,!1]}f=o.Z.getBasicChannel(u.channelId);if((null!==(p=u.currentSize)&&void 0!==p?p:0)>(0,i.dg)(null==f?void 0:f.guild_id)){e._handleError(T.evJ.ENTITY_TOO_LARGE);return[2,!1]}return[3,6];case 5:d=y.sent();e._handleError(d);return[2,!1];case 6:t=!0;return[3,2];case 7:return[3,10];case 8:h=y.sent();n=!0;r=h;return[3,10];case 9:try{t||null==l.return||l.return()}finally{if(n)throw r}return[7]
;case 10:if(e._fileSize()>a.zz){e._handleError(T.evJ.ENTITY_TOO_LARGE);return[2,!1]}return[2,!0]}}))}))()};r._filesTooLarge=function(){return this.files.some((function(e){return e.error===T.evJ.ENTITY_TOO_LARGE}))};r.setUploadingTextForUI=function(){var e=1===this.files.length&&null!=this.files[0].filename?this.files[0].filename:S.Z.Messages.UPLOADING_FILES.format({count:this.files.length}),t=this.files.some((function(e){return e.isImage})),n=this.files.some((function(e){return e.isVideo})),r=this._fileSize();k.log("setUploadingTextForUI - total content: ".concat(r," bytes and ").concat(this.files.length," attachments for ").concat(this.id));this._file=D(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){R(e,t,n[t])}))}return e
}({},this._file),{totalPostCompressionSize:r,currentSize:r,name:e,hasVideo:n,hasImage:t,attachmentsCount:this.files.length,items:this.files})};r._recomputeProgress=function(){var e=this._fileSize(),t=this.files.reduce((function(e,t){var n;return e+=null!==(n=t.loaded)&&void 0!==n?n:0}),0);this._handleProgress(t,e);return{loaded:t,total:e}};r.cancel=function(){k.log("Cancel called for ".concat(this.id));if(!this._aborted){this._aborted=!0;null!=this._cancel&&this._cancel();this.files.forEach((function(e){return e.cancel()}));this._handleComplete()}};r.failed=function(){return this.files.some((function(e){return e.status===l.m.ERROR}))};r._remainingUploadCount=function(){var e=this.files;return e.length-e.filter((function(e){return e.status===l.m.COMPLETED})).length};r.clear=function(){this.cancel();this.files=[]};return n}(w);function z(e){return B.apply(this,arguments)}function B(){B=I((function(e){var t,n,r,o=arguments;return N(this,(function(i){switch(i.label){case 0:
t=o.length>1&&void 0!==o[1]&&o[1],n=o.length>2?o[2]:void 0;r=e.map((function(e){return new Promise((function(r,o){switch(e.status){case l.m.NOT_STARTED:e.upload();break;case l.m.COMPLETED:r("complete");break;case l.m.ERROR:t&&e.error!==T.evJ.ENTITY_TOO_LARGE?e.upload():o(new Error("File failed to upload"));break;case l.m.CANCELED:o(new Error("Upload is canceled"))}e.on("complete",(function(){r("complete")}));e.on("error",(function(){o(new Error("File ".concat(e.id," failed to upload")))}));e.on("progress",(function(e,t){null==n||n(e,t)}))}))}));return[4,Promise.all(r)];case 1:i.sent();return[2]}}))}));return B.apply(this,arguments)}},25765:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(675860),o=n(736294),i=n(251356),a=n(561388),l=n(959797);function c(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(e){n(e);return}l.done?t(c):Promise.resolve(c).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){
c(i,r,o,a,l,"next",e)}function l(e){c(i,r,o,a,l,"throw",e)}a(void 0)}))}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function p(e,t,n){p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}};return p(e,t,n||e)}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return d(e)}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))))
;r.forEach((function(t){f(e,t,n[t])}))}return e}function y(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function _(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){b=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return b(e,t)}var O=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}var m=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:
if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&b(e,t)}(n,e);var t=g(n);function n(){s(this,n);return t.apply(this,arguments)}var c=n.prototype;c.uploadFiles=function(e,t,r){var i=this,a=this;return u((function(){var c;return m(this,(function(u){switch(u.label){case 0:p(d(n.prototype),"upload",i).call(a,{name:l.Z.Messages.ATTACHMENT_PROCESSING},t,e);u.label=1;case 1:u.trys.push([1,5,,6]);a.files=e
;if(a._aborted)return[2];c=new AbortController;a._handleStart((function(){return c.abort()}));return[4,a.compressAndCheckFileSize()];case 2:if(!u.sent())return[2];a.setUploadingTextForUI();return[4,(0,o.$)(a.files,!0,a._recomputeProgress.bind(a))];case 3:u.sent();return[4,a._createMessage(c.signal,t,r)];case 4:return[2,u.sent()];case 5:u.sent();a._handleError();return[3,6];case 6:return[2]}}))}))()};c._createMessage=function(e,t,n){var o=this;return u((function(){var l,c,u,s,f,p,d;return m(this,(function(_){switch(_.label){case 0:l=[];o.files.forEach((function(e,t){var n=(0,a.B)(e,t);e.item.platform===i.o.WEB&&l.push(h({},n))}));c=null!=n&&null!=t?o._addAttachmentsToPayload(t,n,l):y(h({},t),{attachments:l});u={url:o._url,body:c,signal:e};s="POST"===o._method?r.Z.post:r.Z.patch;_.label=1;case 1:_.trys.push([1,3,,4]);return[4,s(u)];case 2:f=_.sent();o._handleComplete(f.body);return[3,4];case 3:p=_.sent()
;o._handleError(null==p||null===(d=p.body)||void 0===d?void 0:d.code,null==p?void 0:p.body);return[3,4];case 4:return[2]}}))}))()};return n}(o.Z)},635771:(e,t,n)=>{"use strict";n.r(t);n.d(t,{default:()=>y});var r=n(785893),o=(n(667294),n(402124)),i=n(337823),a=n(56133),l=n(171757),c=n(237886),u=n(298716),s=n(461061),f=n(959797);function p(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function h(e){return null!=(null==e?void 0:e.getGuildId())?s.ZY5.GUILD_CHANNEL:(null==e?void 0:e.isGroupDM())||(null==e?void 0:e.isPrivate())?s.ZY5.DM_CHANNEL:null}
function y(e){var t=function(){_();(0,l.z)(!0)},y=e.channel,_=e.onClose,b=e.content,O=d(e,["channel","onClose","content"]);return(0,r.jsx)(c.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){p(e,t,n[t])}))}return e}({artURL:n(455021),type:u.cd.MESSAGE_LENGTH_UPSELL,title:f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,body:f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({maxLength:s.J6R,onLearnMore:t}),context:f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({maxLength:s.J6R}),glowUp:f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({onLearnMore:t}),analyticsSource:{page:h(y)},analyticsLocation:{section:s.jXE.MESSAGE_LENGTH_UPSELL_MODAL,object:s.qAy.BUTTON_CTA},onClose:_,
secondaryCTA:f.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,onSecondaryClick:function(){_();var e=new Blob([b],{type:"text/plain"});(0,a.d)([(0,i.dp)(e,"message.txt")],y,o.d.ChannelMessage,{requireConfirm:!0,showLargeMessageDialog:!0})}},O))}},56133:(e,t,n)=>{"use strict";n.d(t,{G:()=>m,d:()=>v});var r=n(825524),o=n(159500),i=n(192998),a=n(212271),l=n(251356),c=n(23816),u=n(67874),s=n(172701),f=n(859023),p=n(932847),d=n(337823),h=n(74030),y=n(418368),_=n(461061),b=n(6349),O=n(298716),g=n(959797);function m(e,t){var n=f.default.getCurrentUser(),r=e.getGuildId(),o=d.dg(r),i=[],l=0,u=0,s=0,p=[],m=!0,v=!1,E=void 0;try{for(var P,A=t[Symbol.iterator]();!(m=(P=A.next()).done);m=!0){var w=P.value;s+=1;l+=w.size;i.push(w.size);w.size>u&&(u=w.size);null!=w.type?p.push(w.type):p.push("unknown")}}catch(e){v=!0;E=e}finally{try{m||null==A.return||A.return()}finally{if(v)throw E}}if(u>o){(0,c.yw)(_.rMx.FILE_SIZE_LIMIT_EXCEEDED,{channel_id:e.id,guild_id:r,user_individual_file_size_limit:o,
pre_compression_file_sizes:i,pre_compression_aggregate_file_size:l,num_attachments:s,error_type:b.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,attachment_mimetypes:p});(0,a.xT)({title:g.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,help:(0,y.BK)(n,r),showPremiumUpsell:!(0,h.M5)(n,O.p9.TIER_2),fileSize:u})}else(0,a.xT)({title:g.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,help:g.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({maxSize:d.Ng(d.OC())})})}function v(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},f=c.requireConfirm,d=void 0===f||f,h=c.showLargeMessageDialog,b=void 0!==h&&h;if(!(e.length<1)){var O=t.getGuildId();if((0,y.Bf)(e,O))m(t,e);else if(s.Z.getUploadCount(t.id,n)+e.length>_.dN1){(0,a.xT)({title:g.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,help:g.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({limit:_.dN1})});p.default.track(_.rMx.UPLOAD_FILE_LIMIT_ERROR,{existing_count:s.Z.getUploadCount(t.id,n),new_count:e.length})}else{
t.type!==_.d4z.GUILD_VOICE&&t.type!==_.d4z.GUILD_STAGE_VOICE||u.Z.getChatOpen(t.id)||r.Z.updateChatOpen(t.id,!0);if(d){var v=Array.from(e).map((function(e){return{file:e,platform:l.o.WEB}}));o.Z.addFiles({files:v,channelId:t.id,showLargeMessageDialog:b,draftType:n})}else i.Z.instantBatchUpload(t.id,e,n)}}}},418368:(e,t,n)=>{"use strict";n.d(t,{BK:()=>c,Bf:()=>u,KZ:()=>s});var r=n(251356),o=n(337823),i=n(74030),a=n(298716),l=n(959797);function c(e,t){var n=o.Ng(o.dg(t));return i.ZP.isPremium(e,a.p9.TIER_2)?l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({maxSize:n}):i.ZP.isPremium(e,a.p9.TIER_1)?l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({maxSize:n}):l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({maxSize:n})}function u(e,t){return o.nA(e,t)||o.vY(e)}function s(e){return e.reduce((function(e,t){t.item.platform===r.o.WEB&&e.push(t.item.file);return e}),[])}}}]);
//# sourceMappingURL=cf834a676a78b88442a4.js.map