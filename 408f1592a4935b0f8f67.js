(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{574:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=o?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(t,n,i):t[n]=e[n]}t.default=e,r&&r.set(e,t);return t}(t(1));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function u(e,r,t,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,i=arguments.length-3;if(r||0===i||(r={children:void 0}),1===i)r.children=n;else if(i>1){for(var u=new Array(i),f=0;f<i;f++)u[f]=arguments[f+3];r.children=u}if(r&&l)for(var a in l)void 0===r[a]&&(r[a]=l[a]);else r||(r=l||{});return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}var f=function(e){var r,t;function o(){return e.apply(this,arguments)||this}return t=e,(r=o).prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t,o.prototype.render=function(){var e=this.props,r=e.foreground,t=e.color,o=function(e,r){if(null==e)return{};var t,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["foreground","color"]);return n.createElement("svg",i({},o,{viewBox:"0 0 24 24"}),u("path",{className:r,fill:t,fillRule:"nonzero",d:"M4.02059355,11.4423344 C4.01945365,11.4404183 4.01831222,11.4385005 4.01716923,11.4365812 C4.28998974,7.28403419 7.74428034,4 11.9658872,4 C16.3652034,4 19.9316991,7.56642735 19.9316991,11.965812 C19.9316991,16.3651282 16.3652034,19.9316239 11.9658872,19.9316239 C8.37461899,19.9316239 5.33841655,17.5553909 4.34412015,14.2891558 L7.3602735,15.5336752 C7.51220513,16.2126496 7.97798291,16.8082051 8.66516239,17.0947009 C9.78947009,17.5644444 11.085812,17.0290598 11.5535043,15.9042735 C11.6752137,15.6102564 11.7319658,15.3018803 11.7237607,14.994188 L14.5128205,13.0010256 C14.5353846,13.0017094 14.5586325,13.0023932 14.5811966,13.0023932 C16.2502564,13.0023932 17.6068376,11.6417094 17.6068376,9.97073504 C17.6068376,8.29962393 16.2502564,6.94017094 14.5811966,6.94017094 C12.9128205,6.94017094 11.5555556,8.29962393 11.5555556,9.97073504 C11.5555556,9.98413675 11.5555556,9.99753846 11.5562393,10.0101197 L9.60697436,12.8417094 C9.29121368,12.8273504 8.97435897,12.882735 8.67391453,13.0064957 C8.54147009,13.0605128 8.41736752,13.1268376 8.30092308,13.2034188 L4.02064957,11.4413675 C4.02065005,11.4413675 4.0206308,11.4416917 4.02059355,11.4423344 Z M11.0878632,15.7087179 C10.7258803,16.5777778 9.72717949,16.9900855 8.85907692,16.6283761 C8.45859829,16.4615385 8.15623932,16.1558974 7.98181197,15.791453 L8.96676923,16.1996581 C9.60697436,16.4663248 10.3414701,16.162735 10.6075897,15.522735 C10.8745299,14.8820513 10.5716923,14.1463248 9.93182906,13.8796581 L8.91364103,13.4577778 C9.30652991,13.3087179 9.75316239,13.3032479 10.1704615,13.4769231 C10.5911795,13.6519658 10.9176068,13.9815385 11.0905983,14.402735 C11.2635897,14.8239316 11.262906,15.2888889 11.0878632,15.7087179 L11.0878632,15.7087179 Z M14.5811966,11.9904274 C13.4700855,11.9904274 12.5654701,11.0844444 12.5654701,9.97073504 C12.5654701,8.85791453 13.4700855,7.95165812 14.5811966,7.95165812 C15.6929915,7.95165812 16.5976068,8.85791453 16.5976068,9.97073504 C16.5976068,11.0844444 15.6929915,11.9904274 14.5811966,11.9904274 Z M13.0707692,9.96765812 L13.0707692,9.96765812 C13.0707692,10.8055385 13.7490598,11.4844444 14.5846154,11.4844444 C15.4208547,11.4844444 16.0991453,10.8055385 16.0991453,9.96765812 C16.0991453,9.12984615 15.4208547,8.45032479 14.5846154,8.45032479 C13.7490598,8.45032479 13.0707692,9.12984615 13.0707692,9.96765812 Z"}))},o}(n.PureComponent);f.displayName="PlatformSteam",f.defaultProps={width:16,height:16,color:"currentColor"};var a=f;r.default=a}}]);
//# sourceMappingURL=408f1592a4935b0f8f67.js.map