"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[86924],{736294:(e,t,n)=>{n.d(t,{Z:()=>B,$:()=>z});var r=n(391809),o=n(356004),i=n(337823),l=n(561388),a=n(896840),u=n(717187),c=n.n(u),s=n(496486),f=n.n(s),d=n(832691);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function m(e){m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return m(e)}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))))
;r.forEach((function(t){y(e,t,n[t])}))}return e}function b(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function g(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e,t){O=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return O(e,t)}function w(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){
if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}
var S=new d.Z("UploaderBase.tsx"),I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&O(e,t)}(n,e);var t=j(n);function n(e){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST";h(this,n);(r=t.call(this))._token="";r._lastUpdate=0;r._loaded=0;r._aborted=!1;r._errored=!1;r.alreadyStarted=!1;r._handleStart=function(e){r._cancel=e;r.alreadyStarted||r.emit("start",r._file);r.alreadyStarted=!0};r._handleProgress=function(e,t){var n=Date.now(),o=Math.min(Math.floor(e/t*100),100),i=Math.floor((e-r._loaded)/((n-r._lastUpdate)/1e3));r._lastUpdate=n;r._loaded=e;r._file=b(v({},r._file),{currentSize:t,progress:o,rate:i});r.emit("progress",r._file)};r._handleError=function(e,t){r.clearProcessingMessageInterval();if(!r._aborted){r._errored=!0;S.log("_handleError: ".concat(e," for ").concat(r.id))
;r.emit("error",r._file,e,t);r.removeAllListeners()}};r._handleComplete=function(e){r.clearProcessingMessageInterval();S.log("_handleComplete for ".concat(r.id));r.emit("complete",r._file,e);r.removeAllListeners()};r.id=f().uniqueId("Uploader");r._url=e;r._method=o;return r}var r=n.prototype;r._addAttachmentsToPayload=function(e,t,n){var r=v({},e),o=w(f().get(r,t,[])).concat(w(n));return f().set(r,t,o)};r.clearProcessingMessageInterval=function(){if(null!=this.processingMessageChangeInterval){clearInterval(this.processingMessageChangeInterval);this.processingMessageChangeInterval=void 0}};r.cancel=function(){S.log("cancel() for ".concat(this.id));this._aborted=!0;null!=this._cancel&&this._cancel();this._handleComplete()};r.upload=function(e,t,n){if(null!=this._cancel)throw new Error("Uploader.upload(...): An upload is already in progress.");this._lastUpdate=Date.now();this._loaded=0;this._file={id:this.id,name:e.name,currentSize:0,totalPreCompressionSize:0,compressionProgress:0,
progress:0,rate:0,hasImage:!1,hasVideo:!1,attachmentsCount:0,draftContent:null==t?void 0:t.content,channelId:null==t?void 0:t.channel_id,items:n}};return n}(c()),x=n(461061),E=n(959797);function P(e,t,n,r,o,i,l){try{var a=e[i](l),u=a.value}catch(e){n(e);return}a.done?t(u):Promise.resolve(u).then(r,o)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function l(e){P(i,r,o,l,a,"next",e)}function a(e){P(i,r,o,l,a,"throw",e)}l(void 0)}))}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function T(e){T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return T(e)}function N(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){
var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function k(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e,t){U=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return U(e,t)}var D=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){
var n,r=T(e);if(t){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k(this,n)}}var L=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:l.label++;return{value:i[1],done:!1};case 5:l.label++;r=i[1];i=[0];continue;case 7:i=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1];o=i;break}
if(o&&l.label<o[2]){l.label=o[2];l.ops.push(i);break}o[2]&&l.ops.pop();l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},Z=new r.Z("CloudUploaderBase.tsx"),B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&U(e,t)}(n,e);var t=R(n);function n(){C(this,n);var e;(e=t.apply(this,arguments)).files=[];return e}var r=n.prototype;r._fileSize=function(){return this.files.reduce((function(e,t){var n;return e+=null!==(n=t.currentSize)&&void 0!==n?n:0}),0)};r.compressAndCheckFileSize=function(){var e=this;return A((function(){var t,n,r,a,u,c,s,f,d,p,h;return L(this,(function(y){switch(y.label){case 0:if(e.files.length>x.dN1){Z.log("Too many attachments for ".concat(e.id));e._handleError(x.evJ.TOO_MANY_ATTACHMENTS);return[2,!1]}
return[3,10];case 1:y.trys.push([1,8,9,10]);a=e.files[Symbol.iterator]();y.label=2;case 2:if(t=(u=a.next()).done)return[3,7];c=u.value;y.label=3;case 3:y.trys.push([3,5,,6]);return[4,c.reactNativeCompressAndExtractData()];case 4:y.sent();if(0===(null!==(s=c.currentSize)&&void 0!==s?s:0)){e._handleError(x.evJ.ENTITY_EMPTY);return[2,!1]}f=o.Z.getBasicChannel(c.channelId);if((null!==(d=c.currentSize)&&void 0!==d?d:0)>(0,i.dg)(null==f?void 0:f.guild_id)){e._handleError(x.evJ.ENTITY_TOO_LARGE);return[2,!1]}return[3,6];case 5:p=y.sent();e._handleError(p);return[2,!1];case 6:t=!0;return[3,2];case 7:return[3,10];case 8:h=y.sent();n=!0;r=h;return[3,10];case 9:try{t||null==a.return||a.return()}finally{if(n)throw r}return[7];case 10:if(e._fileSize()>l.zz){e._handleError(x.evJ.ENTITY_TOO_LARGE);return[2,!1]}return[2,!0]}}))}))()};r._filesTooLarge=function(){return this.files.some((function(e){return e.error===x.evJ.ENTITY_TOO_LARGE}))};r.setUploadingTextForUI=function(){
var e=1===this.files.length&&null!=this.files[0].filename?this.files[0].filename:E.Z.Messages.UPLOADING_FILES.format({count:this.files.length}),t=this.files.some((function(e){return e.isImage})),n=this.files.some((function(e){return e.isVideo})),r=this._fileSize();Z.log("setUploadingTextForUI - total content: ".concat(r," bytes and ").concat(this.files.length," attachments for ").concat(this.id));this._file=N(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){M(e,t,n[t])}))}return e}({},this._file),{totalPostCompressionSize:r,currentSize:r,name:e,hasVideo:n,hasImage:t,attachmentsCount:this.files.length,items:this.files})};r._recomputeProgress=function(){var e=this._fileSize(),t=this.files.reduce((function(e,t){var n
;return e+=null!==(n=t.loaded)&&void 0!==n?n:0}),0);this._handleProgress(t,e);return{loaded:t,total:e}};r.cancel=function(){Z.log("Cancel called for ".concat(this.id));if(!this._aborted){this._aborted=!0;null!=this._cancel&&this._cancel();this.files.forEach((function(e){return e.cancel()}));this._handleComplete()}};r.failed=function(){return this.files.some((function(e){return e.status===a.m.ERROR}))};r._remainingUploadCount=function(){var e=this.files;return e.length-e.filter((function(e){return e.status===a.m.COMPLETED})).length};r.clear=function(){this.cancel();this.files=[]};return n}(I);function z(e){return F.apply(this,arguments)}function F(){F=A((function(e){var t,n,r,o=arguments;return L(this,(function(i){switch(i.label){case 0:t=o.length>1&&void 0!==o[1]&&o[1],n=o.length>2?o[2]:void 0;r=e.map((function(e){return new Promise((function(r,o){switch(e.status){case a.m.NOT_STARTED:e.upload();break;case a.m.COMPLETED:r("complete");break;case a.m.ERROR:
t&&e.error!==x.evJ.ENTITY_TOO_LARGE?e.upload():o(new Error("File failed to upload"));break;case a.m.CANCELED:o(new Error("Upload is canceled"))}e.on("complete",(function(){r("complete")}));e.on("error",(function(){o(new Error("File ".concat(e.id," failed to upload")))}));e.on("progress",(function(e,t){null==n||n(e,t)}))}))}));return[4,Promise.all(r)];case 1:i.sent();return[2]}}))}));return F.apply(this,arguments)}},888403:(e,t,n)=>{n.d(t,{OU:()=>c,Fi:()=>p,li:()=>f,KF:()=>s,AS:()=>d});n(441143);var r,o,i,l=n(780921),a={__proto__:null,bg:{group:" ",decimal:","},cs:{group:" ",decimal:","},da:{group:".",decimal:","},de:{group:".",decimal:","},el:{group:".",decimal:","},"en-GB":{group:",",decimal:"."},"en-US":{group:",",decimal:"."},"es-ES":{group:".",decimal:","},fi:{group:" ",decimal:","},fr:{group:" ",decimal:","},hi:{group:",",decimal:"."},hr:{group:".",decimal:","},hu:{group:" ",decimal:","},it:{group:".",decimal:","},ja:{group:",",decimal:"."},ko:{group:",",decimal:"."},lt:{
group:" ",decimal:","},nl:{group:".",decimal:","},no:{group:" ",decimal:","},pl:{group:" ",decimal:","},"pt-BR":{group:".",decimal:","},ro:{group:".",decimal:","},ru:{group:" ",decimal:","},"sv-SE":{group:" ",decimal:","},th:{group:",",decimal:"."},tr:{group:".",decimal:","},uk:{group:" ",decimal:","},vi:{group:".",decimal:","},"zh-CN":{group:",",decimal:"."},"zh-TW":{group:",",decimal:"."}},u=n(763611);n(544934);function c(e){return null==e?[]:e.filter((function(t,n){return"text"!==t.type||(n>0&&n<e.length-1?""!==t.text:""!==t.text.trim())}))}function s(e,t){var n=e[t],r="",o=!0,i=!1,l=void 0;try{for(var a,u=n[Symbol.iterator]();!(o=(a=u.next()).done);o=!0){var c=a.value;switch(c.type){case"text":case"textMention":r+=c.text;break;case"userMention":r+="<@".concat(c.userId,">");break;case"channelMention":r+="<#".concat(c.channelId,">");break;case"roleMention":r+="<@&".concat(c.roleId,">");break;case"emoji":r+=c.surrogate;break;case"customEmoji":
r+="<".concat(c.animated?"a":"",":").concat(c.name.replace(/:/g,"").split("~")[0],":").concat(c.emojiId,">")}}}catch(e){i=!0;l=e}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}return r}function f(e,t){return null==e[t]?null:s(e,t)}function d(e,t){if(e!==i){i=e;var n,l=null!==(n=a[e])&&void 0!==n?n:a["en-US"],c=l.group,s=l.decimal;r=new RegExp(u.Z.escape(c),"g");o=new RegExp(u.Z.escape(s),"g")}return t.replace(r,"").replace(o,".")}function p(e,t){var n,r,o={};if(null==t.options)return null;var i=t.options;(null===(n=i[0])||void 0===n?void 0:n.type)===l.jw.SUB_COMMAND_GROUP&&(i=i[0].options);(null===(r=i[0])||void 0===r?void 0:r.type)===l.jw.SUB_COMMAND&&(i=i[0].options);var a=!0,u=!1,c=void 0;try{for(var s,f=function(){var t,n=s.value,r=null===(t=e.options)||void 0===t?void 0:t.find((function(e){return e.name===n.name}));if(n.type===l.jw.ATTACHMENT)return"continue";if(null==r?void 0:r.autocomplete)return"continue";o[n.name]=n
},d=i[Symbol.iterator]();!(a=(s=d.next()).done);a=!0)f()}catch(e){u=!0;c=e}finally{try{a||null==d.return||d.return()}finally{if(u)throw c}}return o}},448450:(e,t,n)=>{n.d(t,{Z:()=>H,d:()=>Y});var r=n(441143),o=n.n(r),i=n(173436),l=n(549425),a=n(159500),u=n(780921),c=n(923463),s=n(736294),f=n(23816),d=n(555581),p=n(722003),h=n(391596),y=n(790948),m=n(682684),v=n(817513),b=n(402124),g=n(392115),O=n(653772),w=n(172701),_=n(859023),j=n(337823),S=n(90816),I=n(561388),x=n(361138),E=n(820294),P=n(888403),A=n(307914),C=n(807322),M=n(99298),T=n(544934),N=n(461061),k=n(6349),U=n(959797);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e,t,n,r,o,i,l){try{var a=e[i](l),u=a.value}catch(e){n(e);return}a.done?t(u):Promise.resolve(u).then(r,o)}function L(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function l(e){R(i,r,o,l,a,"next",e)}function a(e){R(i,r,o,l,a,"throw",e)}l(void 0)}))}
}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={
next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:l.label++;return{value:i[1],done:!1};case 5:l.label++;r=i[1];i=[0];continue;case 7:i=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1];o=i;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(i);break}o[2]&&l.ops.pop();l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},z=function(e,t){var n
;return null===(n=null==e?void 0:e.find((function(e){return e.displayName===t})))||void 0===n?void 0:n.value},F=function(e,t,n){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e},i=e.name===(null===(r=n.autocomplete)||void 0===r?void 0:r.name);if(i)return t;if(""===t)return null;var l=E.Z.getAutocompleteLastChoices(n.channel.id,e.name);if(null!=l){var a;return null!==(a=z(l,t))&&void 0!==a?a:o(t)}return o(t)},G=function(e){var t=e.toLowerCase()===T.WO.toLowerCase(),n=e.toLowerCase()===T.Lu.toLowerCase();return t||n?t:null};function H(e,t,n,r,o){return J.apply(this,arguments)}function J(){return(J=L((function(e,t,n,r,l){var c,s,p,h,y,g,O,_,j,S,I,E,A,T,k,U,D,R,L,Z,H,J,Y,$,Q,W,q,X,ee,te,ne,re,oe,ie,le,ae,ue,ce,se,fe,de,pe;return B(this,(function(B){switch(B.label){case 0:null==n.autocomplete&&i.Z.dispatch({type:"APPLICATION_COMMAND_USED",context:n,command:e});return[4,m.Z.unarchiveThreadIfNecessary(n.channel.id)];case 1:B.sent();p=[];h=[]
;if(null!=e.options){y=!0,g=!1,O=void 0;try{for(_=e.options[Symbol.iterator]();!(y=(j=_.next()).done);y=!0)if((S=j.value).type!==u.jw.SUB_COMMAND&&S.type!==u.jw.SUB_COMMAND_GROUP&&S.name in t){E=(null===(I=n.autocomplete)||void 0===I?void 0:I.name)===S.name||void 0;A=null;if(S.type!==u.jw.STRING)if(S.type!==u.jw.ATTACHMENT){L=P.OU(t[S.name]);o()(null!=n.autocomplete||1===L.length,'Option "'.concat(S.name,'" expects a single option type'));if(null!=L[0]||E){H=null!==(Z=L[0])&&void 0!==Z?Z:{type:"text",text:""};switch(S.type){case u.jw.CHANNEL:if("channelMention"===H.type)A=H.channelId;else if("text"===H.type)if((0,M.BH)(H.text))A=H.text.trim();else{Y=(0,d.K)(H.text,null===(J=n.guild)||void 0===J?void 0:J.id,n.channel.id);o()("channelMention"===(null==Y?void 0:Y.type),"Failed to resolve ".concat(H.text));A=Y.channelId}break;case u.jw.ROLE:if("roleMention"===H.type)A=H.roleId;else if("text"===H.type)if((0,M.BH)(H.text))A=H.text.trim();else{Q=(0,
d.K)(H.text,null===($=n.guild)||void 0===$?void 0:$.id,n.channel.id);o()("roleMention"===(null==Q?void 0:Q.type),"Failed to resolve ".concat(H.text));A=Q.roleId}else"textMention"===H.type&&"@everyone"===H.text&&(A=null===(W=n.guild)||void 0===W?void 0:W.id);break;case u.jw.USER:if("userMention"===H.type)A=H.userId;else if("text"===H.type)if((0,M.BH)(H.text))A=H.text.trim();else{X=(0,d.K)(H.text,null===(q=n.guild)||void 0===q?void 0:q.id,n.channel.id);o()("userMention"===(null==X?void 0:X.type),"Failed to resolve ".concat(H.text));A=X.userId}break;case u.jw.MENTIONABLE:"userMention"===H.type?A=H.userId:"roleMention"===H.type?A=H.roleId:"textMention"===H.type&&"@everyone"===H.text?A=null===(ee=n.guild)||void 0===ee?void 0:ee.id:"text"===H.type&&((0,M.BH)(H.text)?A=H.text.trim():"userMention"===(null==(ne=(0,
d.K)(H.text,null===(te=n.guild)||void 0===te?void 0:te.id,n.channel.id))?void 0:ne.type)?A=ne.userId:"roleMention"===(null==ne?void 0:ne.type)?A=ne.roleId:"textMention"===(null==ne?void 0:ne.type)&&"@everyone"===ne.text?A=null===(re=n.guild)||void 0===re?void 0:re.id:o()(!1,"Failed to resolve ".concat(H.text)));break;case u.jw.BOOLEAN:"text"===H.type&&(A=G(H.text.trim()));break;case u.jw.INTEGER:if("text"===H.type){oe=H.text.trim();A=null!=S.choices?Number(z(S.choices,oe)):S.autocomplete?F(S,oe,n,Number):Number(P.AS(v.default.locale,oe))}break;case u.jw.NUMBER:if("text"===H.type){ie=H.text.trim();A=null!=S.choices?Number(z(S.choices,ie)):S.autocomplete?F(S,ie,n,Number):Number(P.AS(v.default.locale,ie))}break;default:o()(!1,"Unsupported option type: ".concat(S.type));continue}o()(null!=n.autocomplete||null!=A,'Unexpected value for option "'.concat(S.name,'"'));null!=A&&p.push({type:S.type,name:S.name,value:A,focused:E})}}else{if(null!=n.autocomplete)continue
;if(null==(D=w.Z.getUpload(n.channel.id,S.name,b.d.ChannelMessage)))continue;R=w.Z.getUploads(n.channel.id,b.d.ChannelMessage).findIndex((function(e){return D.id===e.id}));h.push(D);A=R;p.push({type:S.type,name:S.name,value:A,focused:E})}else{U=null!==(k=null===(T=P.li(t,S.name))||void 0===T?void 0:T.trim())&&void 0!==k?k:"";A=null!=S.choices?z(S.choices,U):S.autocomplete?F(S,U,n):U;o()(null!=n.autocomplete||null!=A,'Option "'.concat(S.name,'" expects a value'));null!=A&&p.push({type:S.type,name:S.name,value:A,focused:E})}}}catch(e){g=!0;O=e}finally{try{y||null==_.return||_.return()}finally{if(g)throw O}}}if(null!=e.subCommandPath)for(le=e.subCommandPath.length-1;le>=0;le-=1){ae=e.subCommandPath[le],ue=ae.name,ce=ae.type;p=[{type:ce,name:ue,options:p}]}if(null!=e.execute){f.ZP.trackWithMetadata(N.rMx.APPLICATION_COMMAND_USED,{command_id:e.id,application_id:e.applicationId,command_type:e.type});return[2,e.execute(p,n)]}
if(e.inputType===C.iw.BUILT_IN||e.inputType===C.iw.BUILT_IN_TEXT||e.inputType===C.iw.BUILT_IN_INTEGRATION)return[2];de={version:e.version,id:null!==(se=null===(c=e.rootCommand)||void 0===c?void 0:c.id)&&void 0!==se?se:e.id,guild_id:e.guildId,name:null!==(fe=null===(s=e.rootCommand)||void 0===s?void 0:s.name)&&void 0!==fe?fe:e.name,type:e.type,options:p,application_command:e.rootCommand};pe=function(){V(t)};null!=r&&(de.target_id=r);if(null!=n.autocomplete)(0,x.GV)(e,n,de);else{a.Z.clearAll(n.channel.id,b.d.ChannelMessage);K({applicationId:e.applicationId,data:de,context:n,attachments:h,maxSizeCallback:l,onMessageSuccess:pe,commandDisplayName:e.displayName})}return[2]}}))}))).apply(this,arguments)}var V=function(e){var t=Object.values(e).flatMap((function(e){return e.map((function(e){return"emoji"===e.type?{name:e.name.replaceAll(":","")}:"customEmoji"===e.type?g.Z.getCustomEmojiById(e.emojiId):null})).filter(S.lm)}));t.length>0&&i.Z.dispatch({type:"EMOJI_TRACK_USAGE",emojiUsed:t})
},Y=function(e,t,n){if(e.isCommandType()){var r=t.guild_id;null!=e.interactionData&&K({applicationId:n,data:e.interactionData,context:{channel:t,guild:null!=r?O.Z.getGuild(r):null}})}},K=function(e){var t=e.applicationId,n=e.data,r=e.context,o=e.attachments,a=e.maxSizeCallback,c=e.onMessageSuccess,s=e.commandDisplayName,f=r.channel,d=r.guild,h=f.id,m=null==d?void 0:d.id,v=Z(function(e,t,n){var r,o=null===(r=A.ZP.getApplicationSections(e.channel.id,n))||void 0===r?void 0:r.find((function(e){return e.id===t}));if(null!=o){var l,a,u,c=null!==(a=null===(l=o.application)||void 0===l?void 0:l.bot)&&void 0!==a?a:{id:o.id,username:o.name,discriminator:"0000",avatar:null,bot:!0};i.Z.dispatch({type:"STORE_APPLICATION_INTERACTION_FAKE_USER",user:c});return[c,null!==(u=o.application)&&void 0!==u?u:null]}return[null,null]}(r,t,n.type),2),b=v[0],g=v[1],O=n.type===u.yU.CHAT?N.uaV.CHAT_INPUT_COMMAND:N.uaV.CONTEXT_MENU_COMMAND,w=(0,y.ZP)({channelId:h,content:"",tts:!1,type:O,messageReference:void 0,
allowedMentions:void 0,author:null!=b?b:void 0});w.application=null!=g?g:void 0;w.interaction={id:n.id,name:n.name,name_localized:s,type:u.B8.APPLICATION_COMMAND,user:(0,y.pe)(_.default.getCurrentUser())};w.interaction_data=n;var j={applicationId:t,channelId:h,guildId:m,data:n,nonce:w.id,attachments:o,maxSizeCallback:a};l.Z.receiveMessage(h,w,!0,{applicationId:t});p.kz(j.nonce,{messageId:w.id,onCreate:function(e){null!=w.interaction&&(w.interaction.id=e)},onFailure:function(e,t){return function(e,t){null==t&&null!=e&&l.Z.sendClydeError(h,e);i.Z.dispatch({type:"MESSAGE_SEND_FAILED",messageId:w.id,channelId:h,reason:t})}(e,t)},data:{interactionType:u.B8.APPLICATION_COMMAND,channelId:h}});if(null!=o){(function(e,t,n,r){return Q.apply(this,arguments)})(o,j.nonce,m,a).then((function(e){e&&$(j,c)}))}else $(j,c)};function $(e,t){c.ZP.enqueue({type:c.$V.COMMAND,message:e},(function(n){(0,h.Sg)(e.nonce,n);n.ok&&null!=t&&t()}))}function Q(){return(Q=L((function(e,t,n,r){
var o,i,l,a,u,c,f,d,h,y,m,v;return B(this,(function(b){switch(b.label){case 0:o=e;i=(0,j.dg)(n);l=function(){null==r||r(i);p.yr(t,N.evJ.ENTITY_TOO_LARGE,U.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({maxSize:(0,j.Ng)(i)}))};a=0;u=!0,c=!1,f=void 0;b.label=1;case 1:b.trys.push([1,6,7,8]);d=o[Symbol.iterator]();b.label=2;case 2:return(u=(h=d.next()).done)?[3,5]:[4,h.value.getSize()];case 3:y=b.sent();a+=y;if(y>Math.max(i,k.Y1)||a>I.zz){l();return[2,!1]}b.label=4;case 4:u=!0;return[3,2];case 5:return[3,8];case 6:m=b.sent();c=!0;f=m;return[3,8];case 7:try{u||null==d.return||d.return()}finally{if(c)throw f}return[7];case 8:b.trys.push([8,10,,11]);return[4,(0,s.$)(o)];case 9:b.sent();return[3,11];case 10:b.sent();p.yr(t,void 0,U.Z.Messages.UPLOADING_FILES_FAILED.format({count:o.length}));return[3,11];case 11:a=o.reduce((function(e,t){var n;return e+=null!==(n=t.currentSize)&&void 0!==n?n:0}),0);v=o.some((function(e){return e.error===N.evJ.ENTITY_TOO_LARGE}));if(v||a>I.zz){l();return[2,!1]}
return[2,!0]}}))}))).apply(this,arguments)}},865289:(e,t,n)=>{n.d(t,{hV:()=>A,ky:()=>E,Q1:()=>P});n(780921),n(940712),n(346529);var r=n(807322),o=n(785893),i=n(667294),l=n(294184),a=n.n(l),u=n(440455),c=n(917870),s=n(141636),f=n.n(s);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function h(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{}
;var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)
}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e){var t,n=e.section,l=e.isSelected,s=e.width,d=e.height,v=e.className,b=e.selectable,g=void 0!==b&&b,O=e.onFocus,w=e.onBlur,_=e.onMouseOver,j=e.onMouseLeave,S=y(e,["section","isSelected","width","height","className","selectable","onFocus","onBlur","onMouseOver","onMouseLeave"]),I=m(i.useState(!1),2),x=I[0],E=I[1],P=i.useCallback((function(){E(!0);null==O||O()}),[O]),A=i.useCallback((function(){E(!1);null==w||w()}),[w]),C=i.useCallback((function(){E(!0);null==_||_()}),[_]),M=i.useCallback((function(){E(!1);null==j||j()}),[j]),T=i.useMemo((function(){if(n.type===r.Qi.APPLICATION){var e;return c.ZP.getApplicationIconURL({id:n.id,icon:n.icon,bot:null===(e=n.application)||void 0===e?void 0:e.bot,botIconFirst:!0,size:s})}return c.pK[0]}),[n,s]);return(0,o.jsx)("div",h(function(e){
for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){p(e,t,n[t])}))}return e}({},S),{className:a()(f().wrapper,v,(t={},p(t,f().selectable,g),p(t,f().selected,g&&l),t)),onFocus:P,onBlur:A,onMouseOver:C,onMouseLeave:M,children:(0,o.jsx)(u.ZP,{className:f().mask,mask:g&&(l||x)?u.QS.SQUIRCLE:u.QS.AVATAR_DEFAULT,width:s,height:d,children:(0,o.jsx)("img",{alt:"",className:f().icon,style:{width:s,height:d},src:T})})}))}var b=n(377899),g=n(443429),O=n(544934),w=n(497656),_=n.n(w);function j(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
;"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){j(e,t,n[t])}))}return e}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function x(e){var t,n=e.section,r=e.className,i=e.width,l=e.height,u=e.padding,c=e.isSelected,s=e.selectable,f=void 0!==s&&s,d=I(e,["section","className","width","height","padding","isSelected","selectable"]),p=function(e){switch(e.id){case O.bi.BUILT_IN:return b.Z;case O.bi.FRECENCY:return g.Z;default:return}}(n);return(0,o.jsx)("div",{className:a()(_().wrapper,r,(t={},j(t,_().selectable,f),
j(t,_().selected,f&&c),t)),style:{width:i,height:l,padding:null!=u?u:0},children:null!=p?(0,o.jsx)(p,S({className:_().icon,width:i,height:l},d)):null})}n(461061).UF9.DAY;var E=function(e){return e.type===r.Qi.BUILT_IN?x:v};function P(e){return"".concat(e/16,"rem")}function A(e,t){var n=t,r=!1,o=t.indexOf(":");if(o>=0){var i=t.lastIndexOf(" ",o);if(i>=0){t=t.substring(0,i);r=!0}else t=t.substring(0,o)}else t=t.substring(0,t.length);var l=t.split(" ",O.Vd+1);if(l.length>O.Vd){r=!0;l.pop()}t=l.join(" ");if(n.length>t.length||t.endsWith(" ")){r=!0;t=t.trimEnd()}return{text:t,parts:l,hasSpaceTerminator:r}}},555581:(e,t,n)=>{n.d(t,{i:()=>m,K:()=>v});var r=n(725616),o=n(53211),i=n(577028),l=n(356004),a=n(392115),u=n(1812),c=n(212218),s=n(653772),f=n(859023),d=n(774581),p=n(172458);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){
var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t,n){switch(e[0]){case"@":return function(e,t,n){var r=y(e.slice(1).split("#",2),2),o=r[0],i=r[1];if(null!=i){var a=null!=n?l.Z.getChannel(n):null;if(null==a)return null;if(a.isPrivate()){
var u=!0,f=!1,d=void 0;try{for(var p,h=a.recipients[Symbol.iterator]();!(u=(p=h.next()).done);u=!0){var m=p.value;if(b(o,i,m))return{type:"userMention",userId:m,children:[{text:""}]}}}catch(e){f=!0;d=e}finally{try{u||null==h.return||h.return()}finally{if(f)throw d}}}else{var v=c.ZP.getMembers(t),g=!0,O=!1,w=void 0;try{for(var _,j=v[Symbol.iterator]();!(g=(_=j.next()).done);g=!0){var S=_.value.userId;if(b(o,i,S))return{type:"userMention",userId:S,children:[{text:""}]}}}catch(e){O=!0;w=e}finally{try{g||null==j.return||j.return()}finally{if(O)throw w}}}}else{var I=null!=t?s.Z.getGuild(t):null;if(null==I)return null;var x=!0,E=!1,P=void 0;try{for(var A,C=Object.values(I.roles)[Symbol.iterator]();!(x=(A=C.next()).done);x=!0){var M=A.value;if(o===M.name)return{type:"roleMention",roleId:M.id,children:[{text:""}]}}}catch(e){E=!0;P=e}finally{try{x||null==C.return||C.return()}finally{if(E)throw P}}}return null}(e,t,n);case":":return function(e,t){var n=r.ZP.EMOJI_NAME_RE.exec(e)
;if(null==n)return null;var o=n[1],i=a.Z.getDisambiguatedEmojiContext(t).getCustomEmoji();if(null!=i&&o in i){var l=i[o];return{type:"customEmoji",emoji:{emojiId:l.id,name:"require_colons"in l&&l.require_colons?":".concat(l.name,":"):l.name,animated:!0===l.animated,jumboable:!1},children:[{text:""}]}}return null}(e,t);case"#":return function(e,t){if(null==t)return null;var n;n=e.length>3&&'"'===e[1]&&'"'===e[e.length-1]?(0,o.mA)(e.slice(2,e.length-1)):e.slice(1);var r=u.ZP.getTextChannelNameDisambiguations(t),l=!0,a=!1,c=void 0;try{for(var s,f=Object.keys(r)[Symbol.iterator]();!(l=(s=f.next()).done);l=!0){var p=s.value;if(r[p].name===n)return{type:"channelMention",channelId:p,children:[{text:""}]}}}catch(e){a=!0;c=e}finally{try{l||null==f.return||f.return()}finally{if(a)throw c}}var h=!0,y=!1,m=void 0;try{for(var v,b=d.k1[Symbol.iterator]();!(h=(v=b.next()).done);h=!0){var g=v.value;if(g!==u.sH){var O=u.ZP.getChannels(t)[g],w=!0,_=!1,j=void 0;try{
for(var S,I=O[Symbol.iterator]();!(w=(S=I.next()).done);w=!0){var x=S.value.channel;if(x.name===n)return{type:"channelMention",channelId:x.id,children:[{text:""}]}}}catch(e){_=!0;j=e}finally{try{w||null==I.return||I.return()}finally{if(_)throw j}}}}}catch(e){y=!0;m=e}finally{try{h||null==b.return||b.return()}finally{if(y)throw m}}var E=i.Z.getActiveJoinedThreadsForGuild(t),P=!0,A=!1,C=void 0;try{for(var M,T=Object.keys(E)[Symbol.iterator]();!(P=(M=T.next()).done);P=!0){var N=M.value,k=!0,U=!1,D=void 0;try{for(var R,L=Object.keys(E[N])[Symbol.iterator]();!(k=(R=L.next()).done);k=!0){var Z=R.value,B=E[N][Z].channel;if(B.name===n)return{type:"channelMention",channelId:B.id,children:[{text:""}]}}}catch(e){U=!0;D=e}finally{try{k||null==L.return||L.return()}finally{if(U)throw D}}}}catch(e){A=!0;C=e}finally{try{P||null==T.return||T.return()}finally{if(A)throw C}}return null}(e,t)}return null}function v(e,t,n){var r=m(e,t,n);return null==r?null:(0,p.VI)(r)}function b(e,t,n){
var r=f.default.getUser(n);return null!=r&&(r.username===e&&r.discriminator===t)}},686924:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(785893),o=n(667294),i=n(441143),l=n.n(i),a=n(363010),u=n(307914),c=n(807322),s=n(99298),f=n(448450),d=n(865289),p=n(122768),h=n(767846),y=n.n(h);const m=function(){return(0,r.jsx)("div",{className:y().loadingWrapper,children:(0,r.jsx)(p.Z,{dotRadius:4,themed:!0})})};var v=n(769672),b=n(356004),g=n(653772),O=n(544934),w=n(959797),_=n(929945),j=n.n(_);const S=function(e,t,n,i,p){var h=o.useRef(!1),y=o.useRef(0),_=(0,a.cj)([b.Z,g.Z],(function(){var e=b.Z.getChannel(n);return{channel:e,guild:g.Z.getGuild(null!=i?i:null==e?void 0:e.guild_id)}})),S=_.channel,I=_.guild,x=(0,u.JK)(S,e,O.Mn,O.lr),E=x.hasMoreAfter,P=x.scrollDown,A=x.sectionDescriptors,C=x.commands,M=x.placeholders,T=o.useMemo((function(){var e=C.concat(M),t={};A.forEach((function(e){t[e.id]=e}));return{visibleCommands:e,sections:t}}),[C,A,M]),N=T.visibleCommands,k=T.sections,U=o.useMemo((function(){
return(0,s.nT)(S,e,N.length,null==I?void 0:I.applicationCommandCounts)}),[S,e,null==I?void 0:I.applicationCommandCounts,N.length]);o.useEffect((function(){if(U!==h.current){U&&(null==p||p());h.current=U}}),[U,p]);o.useEffect((function(){D(y.current)}),[N]);var D=o.useCallback((function(e){E&&e+500>34*N.length-40&&P();y.current=e}),[E,P,N]),R=o.useCallback((function(e){if(e.inputType===c.iw.PLACEHOLDER)return(0,r.jsx)(v.sN,{id:"menu-command-".concat(e.id),render:function(){return(0,r.jsx)(m,{})}},"menu-command-".concat(e.id));l()(null!=S,"menu item should not show if channel is null");var n=k[e.applicationId],o=null!=n?(0,d.ky)(n):void 0;return(0,r.jsx)(v.sN,{id:e.id,label:e.displayName,showIconFirst:!0,icon:function(){return null!=o?(0,r.jsx)(o,{channel:S,section:n,width:18,height:18,selectable:!1}):null},action:function(){(0,f.Z)(e,{},{channel:S,guild:I},t)}},e.id)}),[S,I,t,k]);return U&&(0,r.jsx)(v.sN,{id:"apps",label:w.Z.Messages.APPS,onChildrenScroll:D,childRowHeight:34,
listClassName:j().list,disabled:0===N.length,children:N.map(R)})}}}]);
//# sourceMappingURL=c4841ffd68ef18e72c74.js.map