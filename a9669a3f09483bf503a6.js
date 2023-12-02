"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[30822,77596],{64833:(t,e,n)=>{n.d(e,{Z:()=>h});var r=n(785893),o=n(667294),a=n(110251),i=n.n(a),c=n(496486),u=n.n(c);function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done);i=!0){a.push(r.value);if(e&&a.length===e)break}}catch(t){c=!0;o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){
if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);return"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}var d=o.createContext([]);function p(t){var e=t.children,n=t.currentContext;return(0,r.jsx)(d.Provider,{value:n,children:e})}function b(t,e){if(0===e.length)return t;var n=u().flatten(e);return s(t).concat(s(n))}function h(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=f(o.useState(e),2),c=a[0],u=a[1],l=o.useContext(d),s=o.useMemo((function(){return b(l,c)}),[c,l]),y=o.useMemo((function(){
return b(l,c.slice(0,c.length-1))}),[c,l]);o.useEffect((function(){i()(e,c)||u(e)}),[e]);var h=o.useCallback((function(t){var e=t.children;return(0,r.jsx)(p,{currentContext:s,children:e})}),[s]);return{AnalyticsLocationProvider:h,analyticsLocations:s,sourceAnalyticsLocations:y}}},430822:(t,e,n)=>{n.r(e);n.d(e,{default:()=>h});var r=n(785893),o=n(667294),a=n(388721),i=n(281081),c=n(286867),u=n(769672),l=n(578168),f=n(366081),s=n(742269),y=n(588641),d=n(959797);function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done);i=!0){a.push(r.value);if(e&&a.length===e)break}}catch(t){c=!0;o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return
;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t){var e=t.text,n=t.target,p=t.onHeightUpdate,h=t.onSelect,v=t.isChannelTextArea,S=void 0!==v&&v,m=o.useCallback((function(){(0,i.Zy)();if((0,a.k)(n,HTMLElement)){n.focus();setTimeout((function(){return n.focus()}),0)}}),[n]),g=b((0,f.Z)({text:e,target:n,onHeightUpdate:p}),2),E=g[0],O=g[1],j=(0,l.Z)();if(!s.FB)return null;if(!(0,a.k)(n,HTMLInputElement)&&!(0,a.k)(n,HTMLTextAreaElement))return null;var A=""!==e?[(0,r.jsx)(u.sN,{id:"copy",label:d.Z.Messages.COPY,hint:(0,s.id)()?"⌘C":"Ctrl+C",action:function(){
return y.default.copy(e)}},"copy"),(0,r.jsx)(u.sN,{id:"cut",label:d.Z.Messages.CUT,hint:(0,s.id)()?"⌘X":"Ctrl+X",action:function(){return setTimeout((function(){return y.default.cut()}),0)}},"cut")]:null;return(0,r.jsxs)(u.ZP,{className:c.h,navId:"textarea-context",onClose:m,"aria-label":d.Z.Messages.TEXTAREA_ACTIONS_MENU_LABEL,onSelect:h,children:[S&&(0,r.jsx)(u.kS,{children:j}),(0,r.jsx)(u.kS,{children:E}),(0,r.jsx)(u.kS,{children:O}),(0,r.jsxs)(u.kS,{children:[A,(0,r.jsx)(u.sN,{id:"paste",label:d.Z.Messages.PASTE,hint:(0,s.id)()?"⌘V":"Ctrl+V",action:function(){return setTimeout((function(){return y.default.paste()}),0)}})]})]})}},578168:(t,e,n)=>{n.d(e,{Z:()=>f});var r=n(785893),o=(n(667294),n(64833)),a=n(769672),i=n(409271),c=n(932847),u=n(461061),l=n(959797);function f(){var t=i.up.useSetting(),e=(0,o.Z)().analyticsLocations;return(0,r.jsx)(a.S8,{id:"sticker-suggestions",label:l.Z.Messages.SUGGEST_STICKERS,checked:t,action:function(){
c.default.track(u.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED,{enabled:!t,location:{object:u.qAy.CONTEXT_MENU},location_stack:e});i.up.updateSetting(!t)}})}},366081:(t,e,n)=>{n.d(e,{Z:()=>m});var r=n(785893),o=n(667294),a=n(388721),i=n(363010),c=n(173436);var u=n(769672),l=n(273192),f=n(95467),s=n(784041),y=n(461061),d=n(959797);function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){b(t,e,n[e])}))}return t}function v(t,e){e=null!=e?e:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done);i=!0){a.push(r.value);if(e&&a.length===e)break}}catch(t){c=!0;o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name)
;if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t){var e=t.text,n=void 0===e?"":e,p=t.target,b=(0,i.e7)([l.Z],(function(){return l.Z.isEnabled()})),m=o.useRef(v(h({},t),{spellcheckEnabled:b}));m.current=v(h({},t),{spellcheckEnabled:b});var g=o.useRef(!1),E=S(o.useState(!1),2),O=E[0],j=E[1],A=S(o.useState([]),2),C=A[0],w=A[1],L=o.useCallback((function(){var t=m.current,e=t.spellcheckEnabled,n=t.text,r=t.onHeightUpdate;e&&(0,s.Gb)()&&Promise.all([(0,s.f5)(n,!0),(0,s.WA)(n,!0)]).then((function(t){var e=S(t,2),n=e[0],o=e[1];if(g.current){j(n);w(o);r()}}))}),[]),x=o.useCallback((function(){if((0,a.k)(p,HTMLInputElement)||(0,a.k)(p,HTMLTextAreaElement)){var t=p.selectionStart,e=p.selectionEnd,n=p.value;p.value=""
;p.value=n;if("email"!==p.type){p.selectionStart=t;p.selectionEnd=e}}}),[p]);o.useEffect((function(){(0,s.RD)(L);g.current=!0;return function(){g.current=!1;(0,s.y9)(L)}}),[L]);o.useEffect((function(){L()}),[n,b,L]);return(0,s.Gb)()?[C.map((function(t,e){return(0,r.jsx)(u.sN,{id:"correction-".concat(e),label:t,action:function(){(0,s.Rs)(t);p.focus()}},"correction-".concat(e))})),(0,r.jsxs)(r.Fragment,{children:[O?(0,r.jsx)(u.sN,{id:"add-to-dictionary",label:d.Z.Messages.ADD_TO_DICTIONARY,action:function(){t=n,c.Z.dispatch({type:"SPELLCHECK_LEARN_WORD",word:t});var t;x()}}):null,(0,r.jsx)(u.S8,{id:"spellcheck",label:d.Z.Messages.SPELLCHECK,checked:b,action:function(){c.Z.dispatch({type:"SPELLCHECK_TOGGLE"});x()}}),b?(0,r.jsx)(u.sN,{id:"languages",label:d.Z.Messages.LANGUAGES,action:function(){return window.open(f.Z.getArticleURL(y.BhN.SPELLCHECK))}}):null]})]:[null,null]}},273192:(t,e,n)=>{n.d(e,{Z:()=>S});var r=n(363010),o=n(444450),a=n(173436),i=n(784041);function c(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t){u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return u(t)}function l(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e){f=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return f(t,e)}var s=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
;return l(this,n)}}var d="SpellcheckStore",p=!0,b=new Set;function h(){o.Z.set(d,{enabled:p,learnedWords:b})}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&f(t,e)}(n,t);var e=y(n);function n(){c(this,n);return e.apply(this,arguments)}var r=n.prototype;r.initialize=function(){var t=o.Z.get(d);if(null!=t){p=t.enabled;b=new Set(t.learnedWords);(0,i.gL)(p);(0,i.fG)(b)}};r.isEnabled=function(){return p};r.__getLocalVars=function(){return{STORAGE_KEY:d,enabled:p,learnedWords:b}};return n}(r.ZP.Store);v.displayName="SpellcheckStore";const S=new v(a.Z,{SPELLCHECK_TOGGLE:function(){p=!p;(0,i.gL)(p);h()},SPELLCHECK_LEARN_WORD:function(t){var e=t.word;b.add(e.toLocaleLowerCase());(0,i.fG)(b);h()},I18N_LOAD_SUCCESS:function(t){var e=t.locale;(0,i._2)(e)}})}}]);
//# sourceMappingURL=a9669a3f09483bf503a6.js.map