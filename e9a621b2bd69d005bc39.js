(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[92403,48400,1513],{477412:e=>{e.exports=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n&&!1!==r(e[t],t,e););return e}},234865:(e,r,t)=>{var n=t(789465),o=t(977813),c=Object.prototype.hasOwnProperty;e.exports=function(e,r,t){var i=e[r];c.call(e,r)&&o(i,t)&&(void 0!==t||r in e)||n(e,r,t)}},744037:(e,r,t)=>{var n=t(698363),o=t(3674);e.exports=function(e,r){return e&&n(r,o(r),e)}},163886:(e,r,t)=>{var n=t(698363),o=t(481704);e.exports=function(e,r){return e&&n(r,o(r),e)}},789465:(e,r,t)=>{var n=t(538777);e.exports=function(e,r,t){"__proto__"==r&&n?n(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}},285990:(e,r,t)=>{
var n=t(646384),o=t(477412),c=t(234865),i=t(744037),u=t(163886),a=t(364626),s=t(200278),l=t(318805),f=t(201911),p=t(458234),d=t(946904),v=t(664160),h=t(43824),y=t(529148),b=t(738517),m=t(701469),g=t(644144),j=t(356688),O=t(513218),x=t(472928),w=t(3674),P="[object Arguments]",S="[object Function]",_="[object Object]",A={};A[P]=A["[object Array]"]=A["[object ArrayBuffer]"]=A["[object DataView]"]=A["[object Boolean]"]=A["[object Date]"]=A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Map]"]=A["[object Number]"]=A[_]=A["[object RegExp]"]=A["[object Set]"]=A["[object String]"]=A["[object Symbol]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0;A["[object Error]"]=A[S]=A["[object WeakMap]"]=!1;e.exports=function e(r,t,E,C,N,I){var R,Z=1&t,M=2&t,k=4&t;E&&(R=N?E(r,C,N,I):E(r));if(void 0!==R)return R;if(!O(r))return r;var U=m(r);if(U){R=h(r)
;if(!Z)return s(r,R)}else{var T=v(r),D=T==S||"[object GeneratorFunction]"==T;if(g(r))return a(r,Z);if(T==_||T==P||D&&!N){R=M||D?{}:b(r);if(!Z)return M?f(r,u(R,r)):l(r,i(R,r))}else{if(!A[T])return N?r:{};R=y(r,T,Z)}}I||(I=new n);var L=I.get(r);if(L)return L;I.set(r,R);x(r)?r.forEach((function(n){R.add(e(n,t,E,n,r,I))})):j(r)&&r.forEach((function(n,o){R.set(o,e(n,t,E,o,r,I))}));var F=k?M?d:p:M?keysIn:w,B=U?void 0:F(r);o(B||r,(function(n,o){B&&(n=r[o=n]);c(R,o,e(n,t,E,o,r,I))}));return R}},603118:(e,r,t)=>{var n=t(513218),o=Object.create,c=function(){function e(){}return function(r){if(!n(r))return{};if(o)return o(r);e.prototype=r;var t=new e;e.prototype=void 0;return t}}();e.exports=c},225588:(e,r,t)=>{var n=t(664160),o=t(637005);e.exports=function(e){return o(e)&&"[object Map]"==n(e)}},829221:(e,r,t)=>{var n=t(664160),o=t(637005);e.exports=function(e){return o(e)&&"[object Set]"==n(e)}},710313:(e,r,t)=>{var n=t(513218),o=t(225726),c=t(133498),i=Object.prototype.hasOwnProperty
;e.exports=function(e){if(!n(e))return c(e);var r=o(e),t=[];for(var u in e)("constructor"!=u||!r&&i.call(e,u))&&t.push(u);return t}},314259:e=>{e.exports=function(e,r,t){var n=-1,o=e.length;r<0&&(r=-r>o?0:o+r);(t=t>o?o:t)<0&&(t+=o);o=r>t?0:t-r>>>0;r>>>=0;for(var c=Array(o);++n<o;)c[n]=e[n+r];return c}},457406:(e,r,t)=>{var n=t(671811),o=t(610928),c=t(340292),i=t(240327);e.exports=function(e,r){r=n(r,e);return null==(e=c(e,r))||delete e[i(o(r))]}},274318:(e,r,t)=>{var n=t(611149);e.exports=function(e){var r=new e.constructor(e.byteLength);new n(r).set(new n(e));return r}},364626:(e,r,t)=>{e=t.nmd(e);var n=t(555639),o=r&&!r.nodeType&&r,c=o&&e&&!e.nodeType&&e,i=c&&c.exports===o?n.Buffer:void 0,u=i?i.allocUnsafe:void 0;e.exports=function(e,r){if(r)return e.slice();var t=e.length,n=u?u(t):new e.constructor(t);e.copy(n);return n}},257157:(e,r,t)=>{var n=t(274318);e.exports=function(e,r){var t=r?n(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}},593147:e=>{
var r=/\w*$/;e.exports=function(e){var t=new e.constructor(e.source,r.exec(e));t.lastIndex=e.lastIndex;return t}},540419:(e,r,t)=>{var n=t(562705),o=n?n.prototype:void 0,c=o?o.valueOf:void 0;e.exports=function(e){return c?Object(c.call(e)):{}}},477133:(e,r,t)=>{var n=t(274318);e.exports=function(e,r){var t=r?n(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}},200278:e=>{e.exports=function(e,r){var t=-1,n=e.length;r||(r=Array(n));for(;++t<n;)r[t]=e[t];return r}},698363:(e,r,t)=>{var n=t(234865),o=t(789465);e.exports=function(e,r,t,c){var i=!t;t||(t={});for(var u=-1,a=r.length;++u<a;){var s=r[u],l=c?c(t[s],e[s],s,t,e):void 0;void 0===l&&(l=e[s]);i?o(t,s,l):n(t,s,l)}return t}},318805:(e,r,t)=>{var n=t(698363),o=t(799551);e.exports=function(e,r){return n(e,o(e),r)}},201911:(e,r,t)=>{var n=t(698363),o=t(151442);e.exports=function(e,r){return n(e,o(e),r)}},360696:(e,r,t)=>{var n=t(968630);e.exports=function(e){return n(e)?void 0:e}},499021:(e,r,t)=>{
var n=t(385564),o=t(545357),c=t(430061);e.exports=function(e){return c(o(e,void 0,n),e+"")}},946904:(e,r,t)=>{var n=t(868866),o=t(151442),c=t(481704);e.exports=function(e){return n(e,c,o)}},385924:(e,r,t)=>{var n=t(205569)(Object.getPrototypeOf,Object);e.exports=n},151442:(e,r,t)=>{var n=t(862488),o=t(385924),c=t(799551),i=t(770479),u=Object.getOwnPropertySymbols?function(e){for(var r=[];e;){n(r,c(e));e=o(e)}return r}:i;e.exports=u},43824:e=>{var r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,n=new e.constructor(t);if(t&&"string"==typeof e[0]&&r.call(e,"index")){n.index=e.index;n.input=e.input}return n}},529148:(e,r,t)=>{var n=t(274318),o=t(257157),c=t(593147),i=t(540419),u=t(477133);e.exports=function(e,r,t){var a=e.constructor;switch(r){case"[object ArrayBuffer]":return n(e);case"[object Boolean]":case"[object Date]":return new a(+e);case"[object DataView]":return o(e,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":
case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return u(e,t);case"[object Map]":case"[object Set]":return new a;case"[object Number]":case"[object String]":return new a(e);case"[object RegExp]":return c(e);case"[object Symbol]":return i(e)}}},738517:(e,r,t)=>{var n=t(603118),o=t(385924),c=t(225726);e.exports=function(e){return"function"!=typeof e.constructor||c(e)?{}:n(o(e))}},133498:e=>{e.exports=function(e){var r=[];if(null!=e)for(var t in Object(e))r.push(t);return r}},340292:(e,r,t)=>{var n=t(297786),o=t(314259);e.exports=function(e,r){return r.length<2?e:n(e,o(r,0,-1))}},356688:(e,r,t)=>{var n=t(225588),o=t(307518),c=t(531167),i=c&&c.isMap,u=i?o(i):n;e.exports=u},968630:(e,r,t)=>{var n=t(644239),o=t(385924),c=t(637005),i=Function.prototype,u=Object.prototype,a=i.toString,s=u.hasOwnProperty,l=a.call(Object);e.exports=function(e){
if(!c(e)||"[object Object]"!=n(e))return!1;var r=o(e);if(null===r)return!0;var t=s.call(r,"constructor")&&r.constructor;return"function"==typeof t&&t instanceof t&&a.call(t)==l}},472928:(e,r,t)=>{var n=t(829221),o=t(307518),c=t(531167),i=c&&c.isSet,u=i?o(i):n;e.exports=u},481704:(e,r,t)=>{var n=t(14636),o=t(710313),c=t(498612);e.exports=function(e){return c(e)?n(e,!0):o(e)}},610928:e=>{e.exports=function(e){var r=null==e?0:e.length;return r?e[r-1]:void 0}},957557:(e,r,t)=>{var n=t(829932),o=t(285990),c=t(457406),i=t(671811),u=t(698363),a=t(360696),s=t(499021),l=t(946904),f=s((function(e,r){var t={};if(null==e)return t;var s=!1;r=n(r,(function(r){r=i(r,e);s||(s=r.length>1);return r}));u(e,l(e),t);s&&(t=o(t,7,a));for(var f=r.length;f--;)c(t,r[f]);return t}));e.exports=f},48509:(e,r,t)=>{"use strict";t.d(r,{Z:()=>g});var n=t(785893),o=t(667294),c=t(294184),i=t.n(c),u=t(331535),a=t(67416),s=t(959797),l=t(949095),f=t.n(l);function p(e,r){
if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return d(e)}function v(e,r){return!r||"object"!==y(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function h(e,r){h=Object.setPrototypeOf||function(e,r){e.__proto__=r;return e};return h(e,r)}var y=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,n=d(e);if(r){var o=d(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments)
;return v(this,t)}}var m=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}});r&&h(e,r)}(t,e);var r=b(t);function t(){p(this,t);var e;(e=r.apply(this,arguments)).state={code:"",errorMessage:"",retrySuccess:!1};e.setRef=function(r){e._input=r};e.getLabelText=function(){var r;return null!==(r=e.props.label)&&void 0!==r?r:e.props.disallowBackupCodes?s.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL:s.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL};e.getSupportedCodeTypes=function(){return e.props.disallowBackupCodes?s.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP:s.Z.Messages.TWO_FA_AUTH_CODE};e.getPlaceholder=function(){return e.props.forceNoPlaceholder?null:null!==(r=e.props.placeholder)&&void 0!==r?r:e.getSupportedCodeTypes();var r};e.errorPresent=function(){
return null!=e.props.error&&""!==e.props.error||null!=e.state.errorMessage&&""!==e.state.errorMessage};e.handleRetry=function(){var r=e.props.onRetry;null==r||r().then((function(){return e.setState({retrySuccess:!0})}))};e.handleSubmit=function(r){r.preventDefault();var t=e.props,n=t.handleSubmit,o=t.onError;n(e.state.code).catch((function(r){if(null!=r.body){null==o||o(r.body);r.body.message&&e.setState({errorMessage:r.body.message})}}))};e.handleCancel=function(){var r=e.props,t=r.onClose,n=r.handleEarlyClose;t();null==n||n()};e.handleCodeChange=function(r){e.setState({code:r})};return e}t.prototype.render=function(){var e,r=this.props,t=r.title,c=r.actionText,l=r.children,p=r.error,d=r.isLoading,v=r.maxLength,h=r.transitionState,y=r.helpMessage,b=r.retryPrompt,m=r.retrySuccessMessage,g=this.state,j=g.code,O=g.errorMessage,x=g.retrySuccess,w=o.Children.count(l)>0?(0,n.jsx)(u.Zb,{type:u.Zb.Types.WARNING,className:f().card,children:(0,n.jsx)(u.xv,{variant:"text-md/normal",children:l})
}):null,P=null!=b?(0,n.jsxs)(u.xv,{className:i()(f().submitText,f().spacing),variant:"text-sm/normal",children:[(0,n.jsx)("br",{}),(0,n.jsx)(u.P3,{className:i()(f().spacing,f().link),onClick:this.handleRetry,children:(0,n.jsx)(u.ee,{children:b})})]}):null,S=x?(0,n.jsx)(u.Zb,{type:u.Zb.Types.SUCCESS,className:f().card,children:(0,n.jsx)(u.xv,{variant:"text-md/normal",children:m})}):null;return(0,n.jsx)(a.Y0,{transitionState:h,children:(0,n.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,n.jsx)(a.xB,{separator:!1,children:(0,n.jsx)(u.X6,{variant:"heading-lg/semibold",children:t})}),(0,n.jsxs)(a.hz,{children:[null!=y?(0,n.jsx)(u.xv,{color:"text-normal",variant:"text-md/normal",className:f().spacing,children:y}):null,w,S,(0,n.jsxs)(u.xJ,{title:this.getLabelText(),className:f().spacing,children:[(0,n.jsx)(u.oi,{inputRef:this.setRef,onChange:this.handleCodeChange,placeholder:null!==(e=this.getPlaceholder())&&void 0!==e?e:void 0,maxLength:null!=v?v:10,value:j,
autoComplete:"one-time-code",autoFocus:!0}),this.errorPresent()?(0,n.jsx)(u.xv,{color:"text-danger",variant:"text-xs/normal",className:f().error,children:null!=p?p:O}):null,P]})]}),(0,n.jsxs)(a.mz,{children:[(0,n.jsx)(u.zx,{type:"submit",disabled:d||0===j.length,children:null!=c?c:s.Z.Messages.CONFIRM}),(0,n.jsx)(u.zx,{onClick:this.handleCancel,disabled:d,look:u.zx.Looks.LINK,color:u.zx.Colors.PRIMARY,children:s.Z.Messages.CANCEL})]})]})})};return t}(o.PureComponent);m.defaultProps={btnClass:"",isLoading:!1,disallowBackupCodes:!1,error:null,forceNoPlaceholder:!1};const g=m},902225:(e,r,t)=>{"use strict";t.r(r);t.d(r,{default:()=>B});var n=t(785893),o=t(667294),c=t(294184),i=t.n(c),u=t(363010),a=t(331535),s=t(281081),l=t(354290),f=t(952013),p=t(332233),d=t(23816),v=t(775041),h=t(631134),y=t(212218),b=t(653772),m=t(272729),g=t(16870),j=t(67416),O=t(897576),x=t(436053),w=t(932847),P=t(95467),S=t(275550),_=t(467532),A=t(461061),E=t(959797),C=t(76545),N=t.n(C),I=t(427215),R=t.n(I)
;function Z(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function M(e,r,t,n,o,c,i){try{var u=e[c](i),a=u.value}catch(e){t(e);return}u.done?r(a):Promise.resolve(a).then(n,o)}function k(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var c=e.apply(r,t);function i(e){M(c,n,o,i,u,"next",e)}function u(e){M(c,n,o,i,u,"throw",e)}i(void 0)}))}}function U(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){U(e,r,t[r])}))}return e}function D(e,r){r=null!=r?r:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function L(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,c=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done);i=!0){c.push(n.value);if(r&&c.length===r)break}}catch(e){u=!0;o=e}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return c}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return Z(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name)
;if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F=function(e,r){var t,n,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function u(c){return function(u){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;(n=0,o)&&(c=[2&c[0],o.value]);switch(c[0]){case 0:case 1:o=c;break;case 4:i.label++;return{value:c[1],done:!1};case 5:i.label++;n=c[1];c=[0];continue;case 7:c=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,
o=o.length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1];o=c;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(c);break}o[2]&&i.ops.pop();i.trys.pop();continue}c=r.call(e,i)}catch(e){c=[6,e];n=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};const B=function(e){var r=e.guildId,c=e.transitionState,C=e.onClose,I=(0,u.e7)([b.Z],(function(){return b.Z.getGuild(r)}),[r]),Z=(0,u.e7)([h.default],(function(){return h.default.getId()})),M=(0,u.e7)([y.ZP],(function(){return y.ZP.getMember(r,Z)})),U=L(o.useState([]),2),B=U[0],z=U[1],K=(0,f.ZP)(),H=(0,m.Dt)();o.useEffect((function(){0!==B.length&&w.default.track(A.rMx.PASSPORT_ENTRY_VIEWED,T({role_ids:B.map((function(e){return e.role_id}))},(0,d.hH)(r)))}),[r,B]);o.useEffect((function(){l.Z.getGuildRoleConnectionsConfigurations(r).then((function(e){return z(e)}))}),[r]);if(null==I||null==M)return null
;var G=Object.values(I.roles).filter((function(e){var r;return null===(null===(r=e.tags)||void 0===r?void 0:r.guild_connections)}));return(0,n.jsxs)(j.Y0,{transitionState:c,"aria-labelledby":H,className:N().modal,children:[(0,n.jsxs)(j.xB,{separator:!1,children:[(0,n.jsx)(S.Z,{className:N().headerIcon,size:24}),(0,n.jsx)(a.X6,{variant:"text-md/medium",color:"header-primary",children:E.Z.Messages.CONNECTIONS_ROLES_CHANNEL_NAME}),(0,n.jsx)(j.ol,{className:N().modalCloseButton,onClick:C})]}),(0,n.jsxs)(j.hz,{className:N().container,children:[(0,n.jsx)(a.X6,{variant:"heading-md/semibold",color:"header-primary",children:E.Z.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({helpdeskArticleUrl:P.Z.getArticleURL(A.BhN.CONNECTION_DETAILS)})}),(0,n.jsx)("div",{className:N().verifiedRoles,children:G.map((function(e){var c=M.roles.includes(e.id),u=function(e){var t=B.find((function(r){return r.role_id===e}));if(null==t)return[];var o={},c=!0,u=!1,a=void 0;try{
for(var s,l=t.rules.flat()[Symbol.iterator]();!(c=(s=l.next()).done);c=!0){var f=s.value,d=void 0;if(null!=f.application_id){var h,y=null===(h=t.applications)||void 0===h?void 0:h[f.application_id];d=null!=(null==y?void 0:y.bot)?(0,n.jsx)("img",{src:new v.Z(y.bot).getAvatarURL(r,24),alt:"",className:i()(N().botAvatar,R().avatar)}):null}else{var b=p.Z.get(f.connection_type);d=(0,n.jsx)("img",{src:K===A.BRd.LIGHT?b.icon.lightSVG:b.icon.darkSVG,alt:"",className:R().avatar})}null!=d&&(o["".concat(f.connection_type,":").concat(f.application_id)]=d)}}catch(e){u=!0;a=e}finally{try{c||null==l.return||l.return()}finally{if(u)throw a}}return Object.values(o)}(e.id);return(0,n.jsxs)(a.P3,{className:i()(N().verifiedRole,c?N().verifiedRoleHasRole:null),onClick:c?void 0:function(){return function(e,r){(0,O.ZD)(k((function(){var o,c;return F(this,(function(i){switch(i.label){case 0:return[4,Promise.all([t.e(40532),t.e(41189)]).then(t.bind(t,841189))];case 1:o=i.sent(),c=o.default
;return[2,function(t){return(0,n.jsx)(c,T({role:e,guildId:r},t))}]}}))})))}(e,r)},onContextMenu:c?function(r){return function(e,r,o){(0,s.jW)(o,k((function(){var o,c;return F(this,(function(i){switch(i.label){case 0:return[4,t.e(35952).then(t.bind(t,535952))];case 1:o=i.sent(),c=o.default;return[2,function(t){return(0,n.jsx)(c,D(T({},t),{roleId:r,onLeaveRole:function(){return l.Z.unassignGuildRoleConnection(e,r)}}))}]}}))})))}(I.id,e.id,r)}:void 0,children:[c?(0,n.jsx)("div",{className:N().roleCheckmark,children:(0,n.jsx)(g.Z,{})}):null,(0,n.jsx)(_.Z,{guildId:r,role:e,size:24}),(0,n.jsxs)("div",{className:N().verifiedRoleNameDescriptionContainer,children:[(0,n.jsx)(a.xv,{variant:"text-md/medium",color:"header-primary",className:N().verifiedRoleName,children:e.name}),void 0!==e.description?(0,n.jsx)(a.xv,{variant:"text-xs/normal",color:"header-secondary",className:N().verifiedRoleDescription,children:e.description}):null]}),(0,n.jsx)(x.Z,{showUserPopout:!1,guildId:r,
users:u.map((function(){return null})),renderUser:function(e,r,t){return(0,n.jsx)(o.Fragment,{children:u[t]},t)},max:3})]},e.id)}))})]})]})}},467532:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var n=t(785893),o=(t(667294),t(316921)),c=t(508528),i=t(584720),u=t(275550),a=t(461061);function s(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function l(e){var r,t=e.guildId,l=e.role,f=e.size,p=e.className,d=(0,c.p9)({guildId:t,roleId:l.id,size:f});return null!=d?(0,n.jsx)(i.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){s(e,r,t[r])}))}return e}({className:p},d)):(0,n.jsx)(u.Z,{color:null!==(r=l.colorString)&&void 0!==r?r:(0,o.Rf)(a.p6O),className:p,size:f})}},436053:(e,r,t)=>{
"use strict";t.d(r,{u:()=>E,Z:()=>R});var n=t(785893),o=t(667294),c=t(294184),i=t.n(c),u=t(441143),a=t.n(u),s=t(331535),l=t(356002),f=t(327090),p=t(775041),d=t(761434),v=t(915306),h=t(402919),y=t(440455),b=t(427215),m=t.n(b);function g(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function j(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function O(e){O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return O(e)}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){j(e,r,t[r])}))}return e}function w(e,r){r=null!=r?r:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function P(e,r){return!r||"object"!==_(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function S(e,r){S=Object.setPrototypeOf||function(e,r){e.__proto__=r;return e};return S(e,r)}var _=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function A(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,n=O(e);if(r){var o=O(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return P(this,t)}}var E={SIZE_16:16,SIZE_24:24,SIZE_32:32,SIZE_56:56};function C(e,r){var t=e instanceof p.Z?e:null!=e?e.user:null;return null!=t?t.id:"user-".concat(r)}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E.SIZE_24;switch(e){case E.SIZE_16:return m().size16;case E.SIZE_24:return m().size24;case E.SIZE_32:return m().size32;case E.SIZE_56:return m().size56;default:return m().size24}}var I=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}});r&&S(e,r)}(t,e);var r=A(t);function t(){g(this,t);var e;(e=r.apply(this,arguments)).state={
popoutUserId:null};e._ref=o.createRef();e.defaultRenderUser=function(r,t,o){var c=e.props,i=c.showUserPopout,u=c.guildId,a=c.size;if(null==r){if(e.props.showDefaultAvatarsForNullUsers){var l=(null!=o?o:0)%h.Z.DEFAULT_AVATARS.length,f=h.Z.DEFAULT_AVATARS[l];return(0,n.jsx)("img",{src:f,alt:"",className:m().avatar})}return(0,n.jsx)("div",{className:m().emptyUser})}var p=(0,n.jsx)("img",{src:r.getAvatarURL(u,a),alt:r.username,className:m().avatar},r.id);return i?(0,n.jsx)(s.P3,{className:m().clickableAvatar,onClick:function(){null!=e._ref.current&&null!=r&&e.setState({popoutUserId:r.id})},tabIndex:-1,children:p},r.id):p};return e}var c=t.prototype;c.renderUsers=function(){for(var e=this.props,r=e.users,t=e.max,o=e.renderUser,c=void 0===o?this.defaultRenderUser:o,i=e.size,u=e.extraDetail,a=[],s=r.length===t?r.length:t-1,l=this.renderMoreUsers(s),f=0;f<s&&f<r.length;){var p,d=null==l&&null==u&&f===r.length-1,v=c(r[f],d,f);a.push(d?(0,n.jsx)("div",{className:m().avatarContainer,children:v
},C(null!==(p=r[f])&&void 0!==p?p:null,f)):(0,n.jsx)(y.ZP,{className:m().avatarContainerMasked,height:i,width:i,mask:y.ZP.Masks.VOICE_USER_SUMMARY_ITEM,children:v},C(r[f],f)));f++}null!=u?a.push(u):null!=l&&a.push(l);return a};c.renderMoreUsers=function(e){var r=this.props,t=r.max,c=r.count,i=r.hideMoreUsers,u=r.renderMoreUsers,a=r.users,s=Math.min(e,a.length);if(!i)if(null!=c){if(c>=t)return(0,n.jsx)(o.Fragment,{children:u("".concat(t,"+"),t)},"more-users");if(c>a.length){var l=c-a.length;return(0,n.jsx)(o.Fragment,{children:u("+".concat(l),l)},"more-users")}}else if(s<a.length){var f=Math.min(a.length-s,99);return(0,n.jsx)(o.Fragment,{children:u("+".concat(f),f)},"more-users")}};c.renderIcon=function(){return this.props.renderIcon?(0,n.jsx)(v.Z,{foreground:m().foreground,className:m().icon}):null};c.render=function(){var e=this,r=this.props,t=r.className,o=r.size,c=r.users,u=r.guildId,s=r.showUserPopout,p=this.state.popoutUserId,v=c.find((function(e){return null!=e&&e.id===p}))
;return(0,n.jsx)(d.ZP,{position:d.ZP.Positions.RIGHT,preload:null==v?void 0:function(){return(0,l.Z)(v.id,v.getAvatarURL(u,80),{guildId:u})},shouldShow:!0===s&&null!=p,fixed:!0,renderPopout:function(r){a()(null!=p,"UserSummaryItem.render - renderPopout: popoutUserId cannot be null");return(0,n.jsx)(f.Z,w(x({},e.props,r),{userId:p,guildId:e.props.guildId}))},onRequestClose:function(){return e.setState({popoutUserId:null})},children:function(r){return(0,n.jsxs)("div",w(x({className:i()(t,m().container,N(o)),ref:e._ref},r),{children:[e.renderIcon(),e.renderUsers()]}))}})};return t}(o.PureComponent);I.defaultProps={max:10,renderMoreUsers:function(e){return(0,n.jsx)("div",{className:m().moreUsers,children:e})},renderIcon:!1,showDefaultAvatarsForNullUsers:!1,size:E.SIZE_24};const R=I},301513:(e,r,t)=>{"use strict";t.d(r,{Z:()=>b});const n=(0,t(553494).B)({kind:"user",id:"2023-01_mfa_v2",label:"New MFA",defaultConfig:{enabled:!1},treatments:[{id:1,label:"Enabled",config:{enabled:!0}}]})
;var o=t(859023),c=t(496486),i=function(e){return"function"==typeof e?e():e};t.n(c)().curry((function(e,r,t){return i(r)?e(t):t({})}));function u(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){u(e,r,t[r])}))}return e}function s(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){
Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++){t=c[n];r.indexOf(t)>=0||(o[t]=e[t])}return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++){t=c[n];r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}var f,p,d=function(){throw new Error("updateModal has not been implemented.")},v=t(988518);f=v.showModal;d=v.updateModalProps;p=t(897576).Mr;function h(e){var r=e.promiseFn,t=e.resolve,n=e.reject,o=e.modalProps,c=void 0===o?{}:o,i=e.hooks,u=(void 0===i?{}:i).onEarlyClose,l=function(){null==u||u()},v=function(e){p(m);t(e)},h=function(e){p(m);n(e)},b=function(e){var r=e.res;d(m,g,l,s(a({},c),{error:r.body.message}))};if(null!=f)var m=f(g,l,c);else null==u||u();function g(e){d(m,g,l,s(a({},c),{isLoading:!0}));return y({promiseFn:r,resolve:v,
reject:h,code:e,mfaCodeHandler:b,isModalOpen:!0})}}function y(e){var r=e.promiseFn,t=e.resolve,n=e.reject,o=e.code,c=e.mfaCodeHandler,i=void 0===c?h:c,u=e.isModalOpen,s=void 0!==u&&u,f=l(e,["promiseFn","resolve","reject","code","mfaCodeHandler","isModalOpen"]);return r(null!=o?{code:o}:{}).then(t,(function(e){if(function(e,r){return e.body&&60008===e.body.code||r&&429===e.status}(e,s))return i(a({promiseFn:r,resolve:t,reject:n,res:e},f));n(e)}))}function b(e,r){if(n.getCurrentConfig({}).enabled)return e({});var t,c,u=null!=r?r:{},s=u.checkEnabled,f=void 0===s?null!==(c=null===(t=o.default.getCurrentUser())||void 0===t?void 0:t.mfaEnabled)&&void 0!==c&&c:s,p=l(u,["checkEnabled"]);return new Promise((function(r,t){(i(f)?h:y)(a({promiseFn:e,resolve:r,reject:t},p))}))}},988518:(e,r,t)=>{"use strict";t.r(r);t.d(r,{showModal:()=>a,updateModalProps:()=>s});var n=t(785893),o=(t(667294),t(48509)),c=t(897576);function i(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,
configurable:!0,writable:!0}):e[r]=t;return e}var u=function(e,r,t){return function(c){return(0,n.jsx)(o.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){i(e,r,t[r])}))}return e}({handleSubmit:e,handleEarlyClose:r},t,c))}};function a(e,r,t){return(0,c.h7)(u(e,r,t))}function s(e,r,t,n){return(0,c.o)(e,u(r,t,n))}},611345:(e,r,t)=>{"use strict";t.d(r,{P:()=>S,EQ:()=>_});var n=Symbol("@ts-pattern/matcher"),o="@ts-pattern/anonymous-select-key",c=function(e){return Boolean(e&&"object"==typeof e)},i=function(e){return e&&!!e[n]},u=function e(r,t,o){if(c(r)){if(i(r)){var u=r[n]().match(t),a=u.matched,s=u.selections;return a&&s&&Object.keys(s).forEach((function(e){return o(e,s[e])})),a}if(!c(t))return!1
;if(Array.isArray(r))return!!Array.isArray(t)&&r.length===t.length&&r.every((function(r,n){return e(r,t[n],o)}));if(r instanceof Map)return t instanceof Map&&Array.from(r.keys()).every((function(n){return e(r.get(n),t.get(n),o)}));if(r instanceof Set){if(!(t instanceof Set))return!1;if(0===r.size)return 0===t.size;if(1===r.size){var l=Array.from(r.values())[0];return i(l)?Array.from(t.values()).every((function(r){return e(l,r,o)})):t.has(l)}return Array.from(r.values()).every((function(e){return t.has(e)}))}return Object.keys(r).every((function(c){var u,a=r[c];return(c in t||i(u=a)&&"optional"===u[n]().matcherType)&&e(a,t[c],o)}))}return Object.is(t,r)},a=function e(r){var t,o,u;return c(r)?i(r)?null!=(t=null==(o=(u=r[n]()).getSelectionKeys)?void 0:o.call(u))?t:[]:Array.isArray(r)?s(r,e):s(Object.values(r),e):[]},s=function(e,r){return e.reduce((function(e,t){return e.concat(r(t))}),[])};function l(e){var r;return(r={})[n]=function(){return{match:function(r){var t={},n=function(e,r){
t[e]=r};return void 0===r?(a(e).forEach((function(e){return n(e,void 0)})),{matched:!0,selections:t}):{matched:u(e,r,n),selections:t}},getSelectionKeys:function(){return a(e)},matcherType:"optional"}},r}function f(e){var r;return(r={})[n]=function(){return{match:function(r){if(!Array.isArray(r))return{matched:!1};var t={};if(0===r.length)return a(e).forEach((function(e){t[e]=[]})),{matched:!0,selections:t};var n=function(e,r){t[e]=(t[e]||[]).concat([r])};return{matched:r.every((function(r){return u(e,r,n)})),selections:t}},getSelectionKeys:function(){return a(e)}}},r}function p(){var e,r=[].slice.call(arguments);return(e={})[n]=function(){return{match:function(e){var t={},n=function(e,r){t[e]=r};return{matched:r.every((function(r){return u(r,e,n)})),selections:t}},getSelectionKeys:function(){return s(r,a)},matcherType:"and"}},e}function d(){var e,r=[].slice.call(arguments);return(e={})[n]=function(){return{match:function(e){var t={},n=function(e,r){t[e]=r}
;return s(r,a).forEach((function(e){return n(e,void 0)})),{matched:r.some((function(r){return u(r,e,n)})),selections:t}},getSelectionKeys:function(){return s(r,a)},matcherType:"or"}},e}function v(e){var r;return(r={})[n]=function(){return{match:function(r){return{matched:!u(e,r,(function(){}))}},getSelectionKeys:function(){return[]},matcherType:"not"}},r}function h(e){var r;return(r={})[n]=function(){return{match:function(r){return{matched:Boolean(e(r))}}}},r}function y(){var e,r=[].slice.call(arguments),t="string"==typeof r[0]?r[0]:void 0,c=2===r.length?r[1]:"string"==typeof r[0]?void 0:r[0];return(e={})[n]=function(){return{match:function(e){var r,n=((r={})[null!=t?t:o]=e,r);return{matched:void 0===c||u(c,e,(function(e,r){n[e]=r})),selections:n}},getSelectionKeys:function(){return[null!=t?t:o].concat(void 0===c?[]:a(c))}}},e}var b=h((function(e){return!0})),m=b,g=h((function(e){return"string"==typeof e})),j=h((function(e){return"number"==typeof e})),O=h((function(e){
return"boolean"==typeof e})),x=h((function(e){return"bigint"==typeof e})),w=h((function(e){return"symbol"==typeof e})),P=h((function(e){return null==e})),S={__proto__:null,optional:l,array:f,intersection:p,union:d,not:v,when:h,select:y,any:b,_:m,string:g,number:j,boolean:O,bigint:x,symbol:w,nullish:P,instanceOf:function(e){return h(function(e){return function(r){return r instanceof e}}(e))},typed:function(){return{array:f,optional:l,intersection:p,union:d,not:v,select:y,when:h}}},_=function(e){return new A(e,[])},A=function(){function e(e,r){this.value=void 0,this.cases=void 0,this.value=e,this.cases=r}var r=e.prototype;return r.with=function(){var r=[].slice.call(arguments),t=r[r.length-1],n=[r[0]],c=[];return 3===r.length&&"function"==typeof r[1]?(n.push(r[0]),c.push(r[1])):r.length>2&&n.push.apply(n,r.slice(1,r.length-1)),new e(this.value,this.cases.concat([{match:function(e){var r={},t=Boolean(n.some((function(t){return u(t,e,(function(e,t){r[e]=t}))}))&&c.every((function(r){
return r(e)})));return{matched:t,value:t&&Object.keys(r).length?o in r?r[o]:r:e}},handler:t}]))},r.when=function(r,t){return new e(this.value,this.cases.concat([{match:function(e){return{matched:Boolean(r(e)),value:e}},handler:t}]))},r.otherwise=function(r){return new e(this.value,this.cases.concat([{match:function(e){return{matched:!0,value:e}},handler:r}])).run()},r.exhaustive=function(){return this.run()},r.run=function(){for(var e=this.value,r=void 0,t=0;t<this.cases.length;t++){var n=this.cases[t],o=n.match(this.value);if(o.matched){e=o.value,r=n.handler;break}}if(!r){var c;try{c=JSON.stringify(this.value)}catch(e){c=this.value}throw new Error("Pattern matching error: no pattern matches value "+c)}return r(e,this.value)},e}()}}]);
//# sourceMappingURL=e9a621b2bd69d005bc39.js.map