(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeDesktopDownloadURL=u,t.getPlatformReadableName=function(e){var t;return((t={}).win="Windows",t.osx="Mac",t.linux="Linux",t)[l(e)]},t.getCurrentPlatformDownloadURL=function(){var e=l();return u(e,!1,"linux"===e?"tar.gz":null)};var n,o=(n=r(84))&&n.__esModule?n:{default:n},a=r(1);function u(e,t,r){void 0===t&&(t=!1);var n=t?"/ptb":"",o=r?"&format="+r:"";return""+a.DownloadLinks.DESKTOP+n+"?platform="+e+o}function l(e){return void 0===e&&(e=o.default.os.family),e?-1!==e.indexOf("Ubuntu")||-1!==e.indexOf("Debian")||-1!==e.indexOf("Fedora")||-1!==e.indexOf("Red Hat")||-1!==e.indexOf("SuSE")||-1!==e.indexOf("Linux")?"linux":-1!==e.indexOf("OS X")?"osx":"win":"win"}},1180:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showModal=function(e,t,r){return o.default.push((function(o){return n.createElement(a.default,i({handleSubmit:e,handleEarlyClose:t},r,o))}))},t.closeModal=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(0)),o=u(r(32)),a=u(r(1765));function u(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.closeModal=function(e){return o.default.popWithKey(e)}},1195:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,n.useRef)(null),r=(0,n.useRef)(null);Object.is(e,r.current)||(t.current=r.current,r.current=e);return t.current};var n=r(0)},159:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Types=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(0)),o=l(r(5)),a=r(152),u=l(r(5644));function l(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s={PRIMARY:"cardPrimary",DANGER:"cardDanger",WARNING:"cardWarning",SUCCESS:"cardSuccess",BRAND:"cardBrand",CUSTOM:"card"};t.Types=s;var d=function(e){var t,r;function l(){return e.apply(this,arguments)||this}return r=e,(t=l).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,l.prototype.render=function(){var e,t=this.props,r=t.children,l=t.editable,i=t.type,d=t.className,c=t.outline,p=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,["children","editable","type","className","outline"]);return c?e="outline":i===s.PRIMARY&&l&&(e="editable"),n.createElement("div",f({className:(0,o.default)(d,(0,a.getClass)(u.default,i,e))},p),r)},l}(n.PureComponent);d.displayName="Card",d.Types=s,d.defaultProps={type:s.PRIMARY,outline:!1,editable:!1};var c=d;t.default=c},165:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=l(r(0)),a=l(r(49));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function i(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=o;else if(u>1){for(var l=new Array(u),i=0;i<u;i++)l[i]=arguments[i+3];t.children=l}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(e){var t=e.children,r=e.disabled,n=void 0!==r&&r,u=e.className,l=e.titleClassName,s=e.tag,d=void 0===s?a.Tags.H5:s,c=e.required,p=void 0!==c&&c,v=e.style,y=e.title,h=e.error,b=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["children","disabled","className","titleClassName","tag","required","style","title","error"]);return i("div",{className:null!=u?u:void 0,style:null!=v?v:void 0},void 0,null!=y||null!=h?o.createElement(a.default,f({tag:d,disabled:n,required:p,error:h,className:l},b),y):null,t)};s.displayName="FormItem",s.Tags=a.Tags;var d=s;t.default=d},1764:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.resolveThunk=void 0;var n,o=(n=r(8))&&n.__esModule?n:{default:n};var a=function(e){return"function"==typeof e?e():e};t.resolveThunk=a;var u=o.default.curry((function(e,t,r){return a(t)?e(r):r({})}));t.default=u},1765:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(0)),a=v(r(10)),u=v(r(159)),l=v(r(76)),i=v(r(60)),f=v(r(165)),s=v(r(49)),d=v(r(13)),c=v(r(2)),p=v(r(5645));function v(e){return e&&e.__esModule?e:{default:e}}function y(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function h(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=o;else if(u>1){for(var l=new Array(u),i=0;i<u;i++)l[i]=arguments[i+3];t.children=l}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var b=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={code:""},t.setRef=function(e){t._input=e},t.handleSubmit=function(e){e.preventDefault(),(0,t.props.handleSubmit)(t.state.code)},t.handleCancel=function(){var e=t.props,r=e.onClose,n=e.handleEarlyClose;r(),n&&n()},t.handleCodeChange=function(e){t.setState({code:e})},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.title,r=e.actionText,n=e.children,v=e.error,y=e.isLoading,b=this.state.code,m=o.Children.count(n)?h(u.default,{type:u.default.Types.WARNING,className:p.default.card},void 0,h(d.default,{size:d.default.Sizes.SIZE_16},void 0,n)):null;return h(i.default,{tag:"form",onSubmit:this.handleSubmit},void 0,h(i.default.Header,{},void 0,h(s.default,{tag:s.default.Tags.H4},void 0,t)),h(i.default.Content,{},void 0,m,h(f.default,{title:c.default.Messages.TWO_FA_ENTER_TOKEN_LABEL,className:p.default.spacing},void 0,h(l.default,{inputRef:this.setRef,onChange:this.handleCodeChange,placeholder:c.default.Messages.TWO_FA_AUTH_CODE,maxLength:10,value:b,autoComplete:"off",autoFocus:!0}),v?h(d.default,{color:d.default.Colors.STATUS_RED,size:d.default.Sizes.SIZE_12,className:p.default.error},void 0,v):null)),h(i.default.Footer,{},void 0,h(a.default,{type:"submit",disabled:y},void 0,r||c.default.Messages.CONFIRM),h(a.default,{onClick:this.handleCancel,disabled:y,look:a.default.Looks.LINK,color:a.default.Colors.PRIMARY},void 0,c.default.Messages.CANCEL)))},n}(o.PureComponent);b.displayName="MFAConfirm",b.key=function(){return"mfa-confirm-modal"},b.defaultProps={btnClass:"",isLoading:!1,error:null};var m=b;t.default=m},49:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Tags=void 0;var n,o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(0)),u=f(r(5)),l=f(r(13)),i=f(r(1766));function f(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=o;else if(u>1){for(var l=new Array(u),i=0;i<u;i++)l[i]=arguments[i+3];t.children=l}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}t.Tags=o,function(e){e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.LABEL="label"}(o||(t.Tags=o={}));var p=function(e){var t,r=e.tag,n=void 0===r?o.H5:r,f=e.className,s=e.disabled,p=e.required,v=void 0!==p&&p,y=e.children,h=e.faded,b=e.error,m=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["tag","className","disabled","required","children","faded","error"]);return a.createElement(l.default,d({tag:n,className:(0,u.default)(i.default[n],m.color||n===o.H5?null:i.default.defaultColor,f,(t={},t[i.default["defaultMargin"+n]]=null==f,t[i.default.disabled]=s,t[i.default.faded]=h,t[i.default.error]=null!=b,t))},m),y,v&&null==b?c("span",{className:i.default.required},void 0,"*"):null,null!=b?c("span",{className:i.default.errorMessage},void 0,null!=y?c("span",{className:i.default.errorSeparator},void 0,"-"):null,b):null)};p.displayName="FormTitle",p.Tags=o;var v=p;t.default=v},5618:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){o.default.track(a.AnalyticEvents.AGE_GATE_SUBMITTED,{dob:(0,n.default)().diff(e,"years")<18?e.format("YYYY-MM-DD"):null,source:{section:t}})};var n=u(r(7)),o=u(r(14)),a=r(1);function u(e){return e&&e.__esModule?e:{default:e}}},76:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextInputSizes=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(0)),a=d(r(5)),u=r(137),l=r(152),i=d(r(1195)),f=d(r(13)),s=d(r(1094));function d(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function p(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=o;else if(u>1){for(var l=new Array(u),i=0;i<u;i++)l[i]=arguments[i+3];t.children=l}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var h={DEFAULT:"default",MINI:"mini"};function b(e){var t=e.error,r=(0,u.useTransition)(t,null,{config:{tension:250,clamp:!0},from:{marginTop:0,height:0,opacity:0,transform:"translate3d(0, -100%, 0)"},enter:{marginTop:4,height:"auto",opacity:1,transform:"translate3d(0, -0px, 0)"},leave:{marginTop:0,height:0,opacity:0,transform:"translate3d(0, -100%, 0)"}}),n=(0,i.default)(t);return o.createElement(o.Fragment,null,r.map((function(e){var r=e.item,o=e.key,a=e.props,l=a.transform,i=y(a,["transform"]);return r&&p(u.animated.div,{style:v({},i,{overflow:"hidden"})},o,p(u.animated.div,{style:{transform:l}},void 0,p(f.default,{color:f.default.Colors.ERROR,size:f.default.Sizes.SIZE_12},void 0,t||n)))})))}t.TextInputSizes=h;var m=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).onChange=function(e){t.props.onChange&&t.props.onChange(e.currentTarget.value,t.props.name)},t.onFocus=function(e){t.props.onFocus&&t.props.onFocus(e,t.props.name)},t.onBlur=function(e){t.props.onBlur&&t.props.onBlur(e,t.props.name)},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e,t=this.props,r=t.error,n=t.className,u=t.inputClassName,i=t.inputPrefix,f=t.disabled,d=t.size,c=t.editable,h=t.inputRef,m=t.prefixElement,O=y(t,["error","className","inputClassName","inputPrefix","disabled","size","editable","inputRef","prefixElement"]);return p("div",{className:(0,a.default)(s.default.inputWrapper,n)},void 0,null!=m&&m,i?p("span",{className:s.default.inputPrefix},void 0,i):null,o.createElement("input",v({className:(0,a.default)((0,l.getClass)(s.default,"input",d),u,(e={},e[s.default.error]=r,e[s.default.disabled]=f,e[s.default.editable]=c,e)),disabled:f},O,{onChange:this.onChange,onBlur:this.onBlur,onFocus:this.onFocus,ref:h})),p(b,{error:r}))},n}(o.PureComponent);m.displayName="TextInput",m.Sizes=h,m.defaultProps={name:"",size:h.DEFAULT,disabled:!1,type:"text",placeholder:"",autoFocus:!1,maxLength:999};var O=m;t.default=O},994:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,a=s(r(8)),u=s(r(32)),l=s(r(11)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(1764));function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}n=r(1180).showModal,o=r(1180).closeModal;function p(){return l.default.getCurrentUser().mfaEnabled}function v(e){var t=e.promiseFn,r=e.resolve,a=e.reject,l=e.confirmModalProps,i=e.hooks.onEarlyClose;if(null!=n)var f=n((function(e){u.default.update(f,{isLoading:!0});return y({promiseFn:t,resolve:s,reject:d,code:e,mfaCodeHandler:c})}),(function(){i&&i()}),l);else i();function s(e){o(f),r(e)}function d(e){o(f),a(e)}function c(e){var t=e.res;u.default.update(f,{error:t.body.message,isLoading:!1})}}function y(e){var t=e.promiseFn,r=e.resolve,n=e.reject,o=e.code,a=e.mfaCodeHandler,u=void 0===a?v:a,l=d(e,["promiseFn","resolve","reject","code","mfaCodeHandler"]);return t(o?{code:o}:{}).then(r,(function(e){if(function(e){return e.body&&60008===e.body.code}(e))return u(c({promiseFn:t,resolve:r,reject:n,res:e},l));n(e)}))}var h=a.default.curry((function(e,t,r){void 0===r&&(r={});var n=r,o=n.checkEnabled,a=void 0===o?p:o;return function(e,t){var r=e.hooks,n=void 0===r?{}:r,o=d(e,["hooks"]);return(0,i.default)((function(e){return new Promise((function(r,a){((0,i.resolveThunk)(t)?v:y)(c({promiseFn:e,resolve:r,reject:a,hooks:n},o))}))}),!0)}(c({confirmModalProps:e},d(n,["checkEnabled"])),a)(t)}),2);t.default=h}}]);
//# sourceMappingURL=553e8a3e34f35676e703.js.map