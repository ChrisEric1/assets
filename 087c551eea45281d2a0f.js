(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[9539],{43685:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=E(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(67294)),o=r(67373),l=M(r(94184)),i=M(r(77869)),u=M(r(15482)),s=r(55558),c=r(66261),d=M(r(20053)),f=M(r(51097)),p=M(r(59001)),m=M(r(8857)),v=r(84836),g=M(r(69493)),y=M(r(39955)),h=M(r(54920)),_=M(r(57245)),b=M(r(83180)),k=r(70348),w=r(34596),O=M(r(10147)),N=["level","children"],S=["children"],P=["src"],j=["href","children"];function M(e){
return e&&e.__esModule?e:{default:e}}function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(E=function(e){return e?r:t})(e)}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done);l=!0){o.push(n.value);if(t&&o.length===t)break}}catch(e){i=!0;a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name)
;return"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function R(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var i=new Array(l),u=0;u<l;u++)i[u]=arguments[u+3];t.children=i}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function D(){D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return D.apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++){r=o[n];t.indexOf(r)>=0||(a[r]=e[r])}
return a}function W(e){return"string"==typeof e?e:"number"==typeof e?e.toString():a.isValidElement(e)?W(e.props.children):Array.isArray(e)?e.map((function(e){return W(e)})).join(""):""}var T;function x(e){var t=e.level,r=e.children,n=I(e,N),o=W(r).replace(/[.,/#!$%^&*;:{}=\-_—–`'~()?]/g,"").replace(/\s{2,}/g," ").toLowerCase().replace(/ /g,"-");t<6?T=o:6===t&&null!=T&&(o=T+"-"+o);return a.createElement("h"+t,D({},n,{className:(0,l.default)(O.default["h"+t],n.className),id:o}),[r,R(f.default,{className:"hyperlink",href:"#"+o,focusProps:{offset:-4}},void 0,R(c.Element,{name:o}))])}function G(e){var t=e.title,r=e.method,n=e.parts,a=e.key,o=n.map((function(e,t){return"string"==typeof e?R("span",{className:"http-req-variable"},t,e):R(h.default,{className:"http-req-variable",to:{pathname:k.Routes[e.pathname],hash:e.hash}},t,e.text)}));return R("div",{className:"http-req"},a,R(x,{level:2,className:"http-req-title"},void 0,t),R("span",{className:(0,l.default)("http-req-verb",r.toLowerCase())
},void 0,r),R("span",{className:"http-req-url"},void 0,o))}G.displayName="Route";function V(e){var t,r=e.children,n=I(e,S);if(null!=r&&"object"==typeof r&&"props"in r&&(null===(t=r.props.className)||void 0===t?void 0:t.startsWith("language-"))){var o=r.props.className.slice("language-".length);if(null!=i.default.getLanguage(o)){var u=i.default.highlight(o,r.props.children);return a.createElement("pre",D({},n,{className:O.default.pre}),R("code",{className:(0,l.default)("hljs scroller "+u.language,O.default.codeBlock),dangerouslySetInnerHTML:{__html:u.value}}))}}return a.createElement("pre",D({},n,{className:O.default.pre}),R("code",{className:(0,l.default)("hljs scroller",O.default.codeBlock)},void 0,r.props.children))}V.displayName="MDXCode";function $(e){var t,n,o=e.src,l=I(e,P);if(null!=o)if(null!=o.match(/^https?:\/\//))n=o;else try{n=r(44421)("./"+o)}catch(e){}return a.createElement("img",D({},l,{src:n,alt:null!==(t=l.alt)&&void 0!==t?t:""}))}$.displayName="MDXImage";var F={
h1:function(e){return a.createElement(x,D({level:1},e))},h2:function(e){return a.createElement(x,D({level:2},e))},h3:function(e){return a.createElement(x,D({level:3},e))},h4:function(e){return a.createElement(x,D({level:4},e))},h5:function(e){return a.createElement(x,D({level:5},e))},h6:function(e){return a.createElement(x,D({level:6},e))},inlineCode:function(e){return a.createElement("code",e)},pre:V,p:function(e){return a.createElement("p",D({},e,{className:O.default.paragraph}))},img:$,em:function(e){return a.createElement("span",D({},e,{className:O.default.italics}))},strong:function(e){return a.createElement("span",D({},e,{className:O.default.bold}))},u:function(e){return a.createElement("span",D({},e,{className:O.default.underline}))},a:function(e){var t=e.href,r=e.children,n=I(e,j);null!=t&&""!==t||(t="#");var a="_blank",o=d.default.sanitizeUrl(t),l={};if("#"===t.charAt(0)){var i=t.split("/"),u=k.Routes[i[0].split("#")[1]];if(u){var s=null!=i[1]?"#"+i[1]:"";l.pathname=u;l.hash=s
;o=""+u+s;a="_self"}}return null!=o&&(/^https?:/.test(o)||/^mailto:/.test(o))?R(f.default,{className:O.default.link,href:o,target:a,rel:"noreferrer"},n.key,r):R(h.default,{className:O.default.link,to:l},n.key,r)},HelpMessage:m.default,Route:G},H=R(_.default,{});function U(e){var t=e.location,n=e.children,l=a.useRef(null),i=a.useRef(null),s=A(a.useState([]),2),c=s[0],d=s[1];a.useLayoutEffect((function(){if(""===window.location.hash||null===window.location.hash){var e;null===(e=l.current)||void 0===e||e.scrollToTop()}}),[]);var f=function(e){var t,r,n=e.replace(new RegExp("^"+k.API_DOCS_PATH_PREFIX),"").split("/");if(n.length>1){t=n[0];r=n[1]}else r=n[0];return{section:t,topic:r}}(t.pathname),m=f.section,h=f.topic,_=null!=m?m+"/"+h:h,N=k.APIDocsEndpoints.find((function(e){return e.subPath===_}));a.useLayoutEffect((function(){if(null!=i.current){for(var e,t=[],r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r)
;if(Array.isArray(e)||(r=C(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(null===(n=i.current)||void 0===n?void 0:n.querySelectorAll("h2"));!(e=r()).done;){var n,a=e.value;t.push({name:a.innerText,id:a.id})}d(t)}}),[_]);var S=function(e,t){if(!e)return null;var n=null!=t?e.category+"/"+e.filename:""+e.filename;return r(59853)("./"+n).default}(N,m);if(null==S)return H;var P=k.DocumentationPages.find((function(e){var t=e.route.replace(new RegExp("^"+k.API_DOCS_PATH_PREFIX),"").split("/");return null==m?t[0]===h:t[0]===m&&t[1]===h})),j=(0,v.getTitle)(w.Messages.DeveloperPages.PAGE_TITLE,null!=P?P.name:null);return R(a.Fragment,{},void 0,a.createElement(u.default,D({},(0,v.getMetaData)(w.Messages.Developers,k.ImageMetaData.DEVELOPERS),{title:j
})),R(y.default,{id:t.hash}),R(b.default,{subMenu:c,location:t}),a.createElement(g.default,{className:O.default.contentWrapper,ref:l,key:t.pathname},a.createElement("div",{ref:i},R(o.MDXProvider,{components:F},void 0,R(p.default,{parsedMarkdown:R(S,{}),className:O.default.markdown}))),n))}U.displayName="DocumentationWrapper";var B=(0,s.withRouter)(U);t.default=B},39955:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}function a(e,t){a=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return a(e,t)}var o=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;a(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.componentDidMount=function(){this.scroll()};r.componentDidUpdate=function(){this.scroll()};r.scroll=function(){var e=this.props.id
;if(null!=e&&""!==e){var t=document.querySelector("[id='"+e.replace(/^#/,"")+"']");null!=t&&t.scrollIntoView()}};r.render=function(){return null};return t}(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e;r&&r.set(e,a);return a}(r(67294)).Component);t.default=o;o.displayName="ScrollAnchorIntoView"},77781:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n)}(r(67294));var n,a=i(r(94184)),o=i(r(45758)),l=i(r(13990));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function s(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var i=new Array(l),u=0;u<l;u++)i[u]=arguments[u+3];t.children=i}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var c=function(e){var t,r=e.children,n=e.className,i=e.isFlush,u=void 0!==i&&i,c=e.tag,d=void 0===c?"p":c
;return s(o.default,{className:(0,a.default)(l.default.heading,(t={},t[l.default.flush]=u,t),n),color:o.default.Colors.PRIMARY_200,size:o.default.Sizes.SMALL,tag:d,textCase:o.default.Cases.UPPERCASE,weight:o.default.Weights.SEMIBOLD},void 0,r)};c.displayName="SidebarSectionHeading";var d=c;t.default=d},26346:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=v;var n=d(r(67294)),a=r(68457),o=r(73935),l=d(r(75274));r(51770);r(46945);var i,u,s=(i=r(42971))&&i.__esModule?i:{default:i};function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null
;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function f(e,t,r,n){u||(u="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var l=new Array(o),i=0;i<o;i++)l[i]=arguments[i+3];t.children=l}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:u,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done);l=!0){o.push(n.value);if(t&&o.length===t)break}}catch(e){i=!0;a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t)
;var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(){var e=n.useRef(null),t=p(n.useState(!1),2),r=t[0],i=t[1],u=p(n.useState(void 0),2),c=u[0],d=u[1],m=n.useCallback((function(){l.closeMobileMenu();i(!0)}),[i]),v=n.useCallback((function(){i(!1)}),[i]),g=n.useCallback((function(e){i(!0);d(e.key)}),[i,d]);(0,a.useDocSearchKeyboardEvents)({isOpen:r,onOpen:m,onClose:v,onInput:g,searchButtonRef:e});return f("div",{className:s.default.searchContainer},void 0,n.createElement(a.DocSearchButton,{ref:e,onClick:m}),r&&(0,
o.createPortal)(f(a.DocSearchModal,{appId:"7TYOYF10Z2",indexName:"discord",apiKey:"786517d17e19e9d306758dd276bc6574",transformItems:function(e){return e.filter((function(e){return!e.url.includes("#app-mount")}))},onClose:v,initialScrollY:window.scrollY,initialQuery:c}),document.body))}v.displayName="DocumentationSearch"},83180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n
}(r(67294)),o=v(r(62295)),l=v(r(21302)),i=v(r(77781)),u=v(r(51097)),s=r(51056),c=v(r(95527)),d=v(r(26346)),f=v(r(91367)),p=r(70348),m=v(r(83472));function v(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function y(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var i=new Array(l),u=0;u<l;u++)i[u]=arguments[u+3];t.children=i}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function h(e,t){h=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return h(e,t)}var _=y(o.default,{},void 0,null),b=y(d.default,{}),k=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;h(e,t)
}(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.render=function(){var e=this.props,t=e.location,r=e.subMenu;if(null==r)return _;var n,a,o=[];if(null!=t&&null!=t.pathname&&""!==t.pathname){var d=t.pathname.split("/");void 0===(a=d[3])&&"getting-started"===d[2]&&(a="getting-started")}var v=p.DocumentationPages.sort((function(e,t){return e.categoryName!==t.categoryName?0:t.weight-e.weight})).reduce((function(e,l){var d=l.categoryName,f=l.name,v=l.route;if(-1===l.weight)return e;var g=!!v.split("/")[3];e.hasOwnProperty(d)||(e[d]={heading:null,links:[]});if(n!==d&&g){n=d;e[d].heading=y(i.default,{},d,d)}e[d].links.push(y(s.SidebarLink,{pathname:t.pathname,to:v,from:"sidebar_navigation",size:s.SidebarLink.Size.SMALL},f,f));if(null!=a&&""!==a&&n!==p.DocumentationCategories.POLICIES_AND_AGREEMENTS&&v.split("/").pop()===a){var h=r.map((function(e){o.push(e.id);return y(u.default,{href:"#"+e.id,className:m.default.subLink},e.name,e.name)}))
;e[d].links.push(y(c.default,{container:".page-content-scrolling-container",items:o,currentClassName:m.default.activeLink,className:m.default.subLink},f+"-sublinks",h))}return e}),{}),g=Object.keys(v).sort(this.sortCategories).map((function(e,t,r){var n=t===r.length-1,a=v[e];return y(l.default,{isFlush:n},e,a.heading,y(s.SidebarNavList,{},void 0,a.links))}));return y(f.default,{},void 0,b,g)};r.sortCategories=function(e,t){var r=p.DocumentationCategoryOrder.indexOf(e),n=p.DocumentationCategoryOrder.indexOf(t);return r>n?1:r<n?-1:0};return t}(a.PureComponent);t.default=k;k.displayName="DocumentationSidebar"},59001:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(67294)),l=f(r(94184)),i=f(r(77869)),u=f(r(20053)),s=f(r(51097)),c=f(r(74679)),d=f(r(84919));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function m(e,t){m=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return m(e,t)}function v(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=n;else if(l>1){for(var i=new Array(l),u=0;u<l;u++)i[u]=arguments[u+3];t.children=i}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,
props:t,_owner:null}}function g(){g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return g.apply(this,arguments)}var y=new RegExp("https?://"+(null!==(n=window.GLOBAL_ENV.CDN_HOST)&&void 0!==n?n:""));function h(e){return"string"==typeof e.content?e.content:k(e)}var _=g({},u.default.defaultRules,{paragraph:g({},u.default.defaultRules.paragraph,{react:function(e,t,r){return v("div",{className:d.default.paragraph},r.key,t(e.content,r))}}),strong:g({},u.default.defaultRules.strong,{order:6}),em:g({},u.default.defaultRules.em,{order:6}),u:g({},u.default.defaultRules.u,{order:5}),del:g({},u.default.defaultRules.del,{order:6}),link:g({},u.default.defaultRules.link,{order:6,react:function(e,t,r){s.default,e.target,t(e.content,r)}}),blockQuote:g({},u.default.defaultRules.blockQuote,{react:function(e,t,r){return v("blockquote",{className:d.default.blockquote},r.key,h(e.content))}
}),image:g({},u.default.defaultRules.image,{order:6,match:function(e,t,r){var n=u.default.defaultRules.image;if(null==n||null==n.match)return!1;var a=n.match(e,t,r);if(null!=a&&Array.isArray(a)&&a.length>=3){var o=a[2];if("string"==typeof o)return null!=o.match(y)?a:null}return!1}}),inlineCode:g({},u.default.defaultRules.inlineCode,{order:6,react:function(e,t,r){return v("code",{className:d.default.codeInline},r.key,h(e))}}),codeBlock:g({},u.default.defaultRules.codeBlock,{react:function(e,t,r){if(e.lang&&null!=i.default.getLanguage(e.lang)){var n=i.default.highlight(e.lang,e.content,!0);return v(c.default,{},void 0,v("pre",{},r.key,v("code",{className:(0,l.default)("hljs",n.language),dangerouslySetInnerHTML:{__html:n.value}})))}return v(c.default,{},void 0,v("pre",{},r.key,v("code",{className:"hljs"},void 0,h(e))))}})}),b=u.default.parserFor(_),k=u.default.reactFor(u.default.ruleOutput(_,"react")),w=function(e){!function(e,t){e.prototype=Object.create(t.prototype)
;e.prototype.constructor=e;m(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.getParsedMarkdown=function(){var e=this.props,t=e.children,r=e.parsedMarkdown,n=e.parser,a=e.output,o=e.state;return null!=r?r:null==t||null==a||null==n?null:a(n(t+"\n\n",g({inline:!1},o)))};r.render=function(){return v("div",{className:(0,l.default)(d.default.markdown,this.props.className)},void 0,this.getParsedMarkdown())};return t}(o.PureComponent);w.displayName="Markdown";w.rules=_;w.defaultProps={parser:b,output:k};var O=w;t.default=O},51056:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SubNavParent=t.SubNavList=t.SubNavLink=t.SidebarNavList=t.SidebarLink=void 0;var n,a=f(r(67294)),o=c(r(94184)),l=c(r(13192)),i=c(r(54920)),u=f(r(9378)),s=c(r(83075));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function f(e,t){
if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function p(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var i=new Array(l),u=0;u<l;u++)i[u]=arguments[u+3];t.children=i}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function m(){m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
;for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return m.apply(this,arguments)}var v=function(e){return a.createElement(u.default,m({name:u.IconNames.ARROW_CORNER},e))};v.displayName="ArrowCorner";var g=function(e){return a.createElement(u.default,m({name:u.IconNames.ARROW_RIGHT},e))};g.displayName="ArrowRight";var y=function(e){return a.createElement(u.default,m({name:u.IconNames.WARNING_BOX},e))};y.displayName="WarningIcon";var h=(0,l.default)({SMALL:null,MEDIUM:null}),_=function(e){var t,r=e.activeClassName,n=void 0===r?(0,o.default)(s.default.activeLink):r,a=e.children,l=e.className,u=void 0===l?s.default.navLink:l,c=e.from,d=void 0===c?"sidebar":c,f=e.Icon,m=e.isNavLink,v=void 0===m||m,g=e.pathname,_=e.size,b=void 0===_?h.MEDIUM:_,k=e.to,w=e.onClick,O=e.hasWarning,N=void 0!==O&&O;return p("li",{},void 0,p(i.default,{activeClassName:n,className:(0,o.default)(u,(t={},t[s.default.navLinkSmall]=b===h.SMALL,t[s.default.navLinkMedium]=b===h.MEDIUM,t)),
onClick:w,pathname:g,to:k,isNavLink:v,from:d},void 0,null!=f&&p(f,{className:s.default.icon,width:24,height:24}),a,N?p(y,{className:s.default.warningIcon}):null))};t.SidebarLink=_;_.displayName="SidebarLink";_.Size=h;var b=function(e){var t=e.children;return p("ul",{className:s.default.mainList},void 0,t)};t.SidebarNavList=b;b.displayName="SidebarNavList";var k=function(e){var t=e.to,r=e.children;return p(_,{Icon:v,activeClassName:s.default.subLinkActive,to:t,className:s.default.subNav},void 0,r)};t.SubNavLink=k;k.displayName="SubNavLink";var w=function(e){var t=e.children;return p("ul",{className:s.default.subList},void 0,t)};t.SubNavList=w;w.displayName="SubNavList";var O=function(e){var t=e.Icon,r=e.to,n=e.label;return p(_,{Icon:t,activeClassName:s.default.activeLinkSubParent,exact:!1,to:r},void 0,n,p(g,{className:s.default.arrowRight}))};t.SubNavParent=O;O.displayName="SubNavParent"},8857:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0
;c(r(67294));var n,a,o=u(r(94184)),l=c(r(9378)),i=u(r(86668));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function d(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var i=new Array(l),u=0;u<l;u++)i[u]=arguments[u+3];t.children=i}
if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}!function(e){e.WARNING="warn";e.INFO="info";e.ERROR="danger"}(a||(a={}));function f(e){var t=e.children,r=e.messageType,n=e.className,u=function(e){switch(e){case a.WARNING:return l.IconNames.WARNING_CIRCLE;case a.INFO:return l.IconNames.INFO_FILLED;case a.ERROR:return l.IconNames.CLOSE_CIRCLE}}(r),s=function(e){switch(e){case a.WARNING:return i.default.warning;case a.INFO:return i.default.info;case a.ERROR:return i.default.error}}(r);return d("div",{className:(0,o.default)(i.default.messageContainer,s,n)},void 0,d(l.default,{width:20,height:20,className:i.default.icon,name:u}),d("div",{className:i.default.text},void 0,t))}f.displayName="HelpMessage";var p=f;t.default=p},95527:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a,o=function(e,t){if(!t&&e&&e.__esModule)return e
;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(67294));(n=r(45697))&&n.__esModule;function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function i(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=n;else if(l>1){for(var i=new Array(l),u=0;u<l;u++)i[u]=arguments[u+3];t.children=i}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}
function u(e,t){u=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return u(e,t)}var s=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;u(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];(t=e.call.apply(e,[this].concat(n))||this).state={inViewState:[!0]};t.container=null;t._getElemsViewState=function(){var e=[],r=[],n=[],a=!1;t.props.items.forEach((function(o){var l=document.getElementById(o),i=!a&&t._isInView(l);if(i){a=!0;e.push(l)}else r.push(l);n.push(i)}));return e.length?{inView:e,outView:r,viewStatusList:n}:null};t._isInView=function(e){var r=t.container.scrollHeight||window.innerHeight,n=t.container.scrollTop||document.documentElement.scrollTop||document.body.scrollTop,a=n+r,o=e.offsetTop,l=o+e.offsetHeight;return o<a&&l>n};return t}var r=t.prototype;r.componentDidMount=function(){var e=this;this._spy=function(e,t,r){var n,a,o=arguments,l=this;void 0===t&&(t=50)
;return function(){var i=r||l,u=+new Date,s=o;if(n&&u<n+t){clearTimeout(a);a=setTimeout((function(){n=u;e.apply(i,s)}),t)}else{n=u;e.apply(i,s)}}}((function(){var t=e._getElemsViewState();t&&e.setState({inViewState:t.viewStatusList})}),50);this.container=document.querySelectorAll(this.props.container)[0];this.container.addEventListener("scroll",this._spy)};r.componentWillUnmount=function(){this.container.removeEventListener("scroll",this._spy)};r.render=function(){var e=this.state.inViewState,t=this.props,r=t.currentClassName,n=t.children,a=0;return i("div",{className:"ScrollSpy"},void 0,o.Children.map(n,(function(t,n){return o.cloneElement(t,{className:(t.props.className||"")+(e[n]?" "+r:""),key:a++})})))};return t}(o.Component);s.displayName="ScrollSpy";s.defaultProps={container:window};var c=s;t.default=c},59853:(e,t,r)=>{var n={"./Change_Log.md":4412,"./Getting_Started.md":70380,"./Intro.md":34684,"./Reference.md":95414,"./dispatch/Branches_and_Builds.md":58548,
"./dispatch/Dispatch_and_You.md":36482,"./dispatch/Error_Codes.md":80907,"./dispatch/Field_Values.md":93979,"./dispatch/List_of_Commands.md":74590,"./game_and_server_management/Alpha_and_Beta_Testing.md":52471,"./game_and_server_management/How_to_Get_Your_Game_on_Discord.md":77185,"./game_and_server_management/Special_Channels.md":48716,"./game_sdk/Achievements.md":20069,"./game_sdk/Activities.md":25051,"./game_sdk/Applications.md":13100,"./game_sdk/Discord.md":51058,"./game_sdk/Discord_Voice.md":28089,"./game_sdk/Images.md":12438,"./game_sdk/Lobbies.md":36827,"./game_sdk/Networking.md":39978,"./game_sdk/Overlay.md":33536,"./game_sdk/Relationships.md":78264,"./game_sdk/SDK_Starter_Guide.md":79524,"./game_sdk/Storage.md":11063,"./game_sdk/Store.md":57586,"./game_sdk/Users.md":30283,"./interactions/Application_Commands.md":33181,"./interactions/Message_Components.md":11941,"./interactions/Receiving_and_Responding.md":31622,"./policies_and_agreements/Developer_Policy.md":64645,
"./policies_and_agreements/Developer_Terms_of_Service.md":59978,"./policies_and_agreements/Store_Distribution_Agreement.md":93586,"./resources/Application.md":8680,"./resources/Application_Role_Connection_Metadata.md":69686,"./resources/Audit_Log.md":46540,"./resources/Auto_Moderation.md":89741,"./resources/Channel.md":25208,"./resources/Emoji.md":76923,"./resources/Guild.md":50937,"./resources/Guild_Scheduled_Event.md":49025,"./resources/Guild_Template.md":85659,"./resources/Invite.md":82024,"./resources/Stage_Instance.md":48205,"./resources/Sticker.md":13082,"./resources/User.md":26143,"./resources/Voice.md":70805,"./resources/Webhook.md":87597,"./rich_presence/Best_Practices.md":58105,"./rich_presence/FAQ.md":18026,"./rich_presence/How_To.md":99955,"./rich_presence/Launch_Checklist.md":39665,"./topics/Certified_Devices.md":56693,"./topics/Community_Resources.md":81251,"./topics/Gateway.md":83775,"./topics/Gateway_Events.md":16930,"./topics/OAuth2.md":79553,
"./topics/Opcodes_and_Status_Codes.md":97844,"./topics/Permissions.md":30818,"./topics/RPC.md":94571,"./topics/Rate_Limits.md":79827,"./topics/Teams.md":41258,"./topics/Threads.md":44153,"./topics/Voice_Connections.md":35008,"./tutorials/Configuring_App_Metadata_for_Linked_Roles.md":89020,"./tutorials/Hosting_on_Cloudflare_Workers.md":37529,"./tutorials/Upgrading_to_Application_Commands.md":22248};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");t.code="MODULE_NOT_FOUND";throw t}return n[e]}a.keys=function(){return Object.keys(n)};a.resolve=o;e.exports=a;a.id=59853},44421:(e,t,r)=>{var n={"./API_center.gif":5077,"./app-add-bot.png":36252,"./app-create-modal.png":46348,"./ask-to-join.gif":55978,"./available-published.png":42862,"./button-styles.png":89643,"./certified-device.png":69216,"./cloudflare-general-overview.png":78259,"./cloudflare-interactions-endpoint.png":46588,"./cloudflare-ngrok.png":34496,
"./cloudflare-tutorial-demo.gif":24688,"./cloudflare-url-generator.png":59779,"./command-types.png":72532,"./command-with-groups-subcommands-parameters.png":42605,"./command-with-groups-subcommands.png":60285,"./command.png":59880,"./cpp-files-sdk.png":99237,"./create-store-channel.png":29720,"./deferred-example.png":54004,"./desktop-role-select-menu.png":22185,"./desktop-select.png":72784,"./examples-ephemeral-message.png":18112,"./examples-message-reactive.png":6277,"./examples-update-message.png":37257,"./game-overlay-sdk-invite.gif":12894,"./game-overlay-sdk-voice-settings.png":78363,"./game-overlay-sdk-voice-widget.png":586,"./gateway-lifecycle.svg":90804,"./getting-started-demo.gif":28939,"./gift-code-creation.png":40,"./glitch-project-share.png":86784,"./glitch-project.png":59495,"./heroku-baking.gif":12142,"./heroku-buildpack.png":2665,"./heroku-configVars.png":39431,"./heroku-connectGH.png":78063,"./heroku-deploy.png":27135,"./heroku-dynos.png":15687,
"./heroku-login.png":93905,"./heroku-logs.png":15609,"./heroku-procfile.png":47958,"./heroku-token.png":33569,"./interactions-url.png":34202,"./lib-linked-sdk.png":66965,"./linked-roles-connect-account.png":28282,"./linked-roles-connected.png":89452,"./linked-roles-consent-dialog.png":45187,"./linked-roles-glitch-share-url.png":60821,"./linked-roles-glitch.png":40891,"./linked-roles-oauth-config.png":87359,"./linked-roles-register.png":1408,"./linked-roles-verification-setup.png":39045,"./linked-roles-verify-endpoint.png":58916,"./message-command.png":77830,"./mobile-select.png":57396,"./modal-desktop.png":29470,"./new-permissions-flowchart.svg":80116,"./previous-new-server-background.png":86658,"./rp-actionable.png":96248,"./rp-all-fields.png":76264,"./rp-bad-art.png":72867,"./rp-good-art.png":30033,"./rp-legend.png":66976,"./rp-long-strings.png":70426,"./rp-non-actionable.png":32840,"./rp-not-all-fields.png":68537,"./rp-profile-example-1.png":53749,"./rp-profile-example-2.png":33139,
"./rp-short-strings.png":3012,"./server-banner-example.png":76359,"./server-banner-margin-top.png":66629,"./sku-management.png":33585,"./slash-command-options.png":65760,"./snowflake.png":54067,"./snowflake_original_size.png":85155,"./spectate.gif":32284,"./team-2fa.png":84571,"./team-make-app.png":49222,"./team-page.png":9558,"./transfer-app-to-team.png":56435,"./url-generator.png":15550,"./user-command.png":14623};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");t.code="MODULE_NOT_FOUND";throw t}return n[e]}a.keys=function(){return Object.keys(n)};a.resolve=o;e.exports=a;a.id=44421}}]);
//# sourceMappingURL=087c551eea45281d2a0f.js.map