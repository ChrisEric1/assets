"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[2437],{89843:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=void 0;var r,n=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var i=a(e);if(i&&i.has(t))return i.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var s=n?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=t[o]}r.default=t;i&&i.set(t,r);return r}(i(67294));function a(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(a=function(t){return t?i:e})(t)}function o(t,e,i,n){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=t&&t.defaultProps,o=arguments.length-3;e||0===o||(e={children:void 0});if(1===o)e.children=n;else if(o>1){
for(var s=new Array(o),A=0;A<o;A++)s[A]=arguments[A+3];e.children=s}if(e&&a)for(var u in a)void 0===e[u]&&(e[u]=a[u]);else e||(e=a||{});return{$$typeof:r,type:t,key:void 0===i?null:""+i,ref:null,props:e,_owner:null}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t})(t,e)}var A=function(t){return{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,cursor:t?"not-allowed":"pointer",fontSize:0}},u=function(t){!function(t,e){t.prototype=Object.create(e.prototype);t.prototype.constructor=t;s(t,e)}(e,t);function e(){for(var e,i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];(e=t.call.apply(t,[this].concat(r))||this)._input=null;e.activateUploadDialogue=function(){e.props.embedded?e.handleNativeClick():e._input&&e._input.click()};e.handleNativeClick=function(){e.props.handleNativeClick&&e.props.handleNativeClick(e.props)};e.handleNativeKeyDown=function(t){" "!==t.key&&"Enter"!==t.key||e.handleNativeClick()}
;e.handleBrowserInputMouseDown=function(t){t.currentTarget.value=null};return e}e.prototype.render=function(){var t=this,e=this.props,i=e.disabled,r=e.tabIndex,a=e.className,s=e.name,u=e["aria-label"],h=e["aria-hidden"];if(this.props.embedded)return o("div",{role:"button",style:A(i),className:a||"file-input",tabIndex:r,onKeyDown:i?void 0:this.handleNativeKeyDown,onClick:i?void 0:this.handleNativeClick,"aria-disabled":i,"aria-label":u,"aria-hidden":h||void 0});var l="";this.props.filters&&(l=this.props.filters.map((function(t){return t.extensions.map((function(t){return"."+t})).join(",")})).join(","));return n.createElement("input",{style:A(i),className:a||"file-input",disabled:i,type:"file",tabIndex:r,onMouseDown:this.handleBrowserInputMouseDown,onChange:this.props.onChange,multiple:this.props.multiple,accept:l,name:s,"aria-label":u,"aria-hidden":h||void 0,ref:function(e){return t._input=e}})};return e}(n.Component);u.displayName="FileInput";u.defaultProps={multiple:!1,disabled:!1,
tabIndex:0};var h=u;e.default=h},25799:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=void 0;var r=i(16395)();function n(t,e){var i={src:t.src,dest:null,width:0|t.width,height:0|t.height,toWidth:0|t.toWidth,toHeight:0|t.toHeight,quality:t.quality,alpha:t.alpha,unsharpAmount:t.unsharpAmount,unsharpThreshold:t.unsharpThreshold};r.resizeBuffer(i).then((function(i){var r=t.dest;if(r)for(var n=0,a=i.length;n<a;n++)r[n]=i[n];e(null,i)}))}var a={resizeBuffer:n,resizeCanvas:function(t,e,i,r){var a=t.width,o=t.height,s=e.width,A=e.height;if("function"==typeof i){r=i;i={}}isNaN(i)||(i={quality:i,alpha:!1});var u=e.getContext("2d"),h=u.getImageData(0,0,s,A);n({src:t.getContext("2d").getImageData(0,0,a,o).data,dest:h.data,width:t.width,height:t.height,toWidth:e.width,toHeight:e.height,quality:i.quality,alpha:i.alpha,unsharpAmount:i.unsharpAmount,unsharpThreshold:i.unsharpThreshold},(function(t){if(null!=t)r(t);else{u.putImageData(h,0,0);r()}}))}};e.default=a},16395:t=>{
t.exports=function t(e,i,r){function n(o,s){if(!i[o]){if(!e[o]){if(a)return a(o,!0);var A=new Error("Cannot find module '"+o+"'");throw A.code="MODULE_NOT_FOUND",A}var u=i[o]={exports:{}};e[o][0].call(u.exports,(function(t){return n(e[o][1][t]||t)}),u,u.exports,t,e,i,r)}return i[o].exports}for(var a=void 0,o=0;o<r.length;o++)n(r[o]);return n}({1:[function(t,e,i){var r=t("inherits"),n=t("multimath"),a=t("multimath/lib/unsharp_mask"),o=t("./mm_resize");function s(t){var e=t||[],i={js:e.indexOf("js")>=0,wasm:e.indexOf("wasm")>=0};n.call(this,i);this.features={js:i.js,wasm:i.wasm&&this.has_wasm()};this.use(a);this.use(o)}r(s,n);s.prototype.resizeAndUnsharp=function(t,e){var i=this.resize(t,e);t.unsharpAmount&&this.unsharp_mask(i,t.toWidth,t.toHeight,t.unsharpAmount,t.unsharpRadius,t.unsharpThreshold);return i};e.exports=s},{"./mm_resize":4,inherits:15,multimath:16,"multimath/lib/unsharp_mask":19}],2:[function(t,e,i){function r(t){return t<0?0:t>255?255:t}e.exports={
convolveHorizontally:function(t,e,i,n,a,o){var s,A,u,h,l,f,c,g,d,p,m,I=0,w=0;for(d=0;d<n;d++){l=0;for(p=0;p<a;p++){f=o[l++];c=o[l++];g=I+4*f|0;s=A=u=h=0;for(;c>0;c--){h=h+(m=o[l++])*t[g+3]|0;u=u+m*t[g+2]|0;A=A+m*t[g+1]|0;s=s+m*t[g]|0;g=g+4|0}e[w+3]=r(h+8192>>14);e[w+2]=r(u+8192>>14);e[w+1]=r(A+8192>>14);e[w]=r(s+8192>>14);w=w+4*n|0}w=4*(d+1)|0;I=(d+1)*i*4|0}},convolveVertically:function(t,e,i,n,a,o){var s,A,u,h,l,f,c,g,d,p,m,I=0,w=0;for(d=0;d<n;d++){l=0;for(p=0;p<a;p++){f=o[l++];c=o[l++];g=I+4*f|0;s=A=u=h=0;for(;c>0;c--){h=h+(m=o[l++])*t[g+3]|0;u=u+m*t[g+2]|0;A=A+m*t[g+1]|0;s=s+m*t[g]|0;g=g+4|0}e[w+3]=r(h+8192>>14);e[w+2]=r(u+8192>>14);e[w+1]=r(A+8192>>14);e[w]=r(s+8192>>14);w=w+4*n|0}w=4*(d+1)|0;I=(d+1)*i*4|0}}}},{}],3:[function(t,e,i){
e.exports="AGFzbQEAAAABFAJgBn9/f39/fwBgB39/f39/f38AAg8BA2VudgZtZW1vcnkCAAEDAwIAAQQEAXAAAAcZAghjb252b2x2ZQAACmNvbnZvbHZlSFYAAQkBAArmAwLBAwEQfwJAIANFDQAgBEUNACAFQQRqIRVBACEMQQAhDQNAIA0hDkEAIRFBACEHA0AgB0ECaiESAn8gBSAHQQF0IgdqIgZBAmouAQAiEwRAQQAhCEEAIBNrIRQgFSAHaiEPIAAgDCAGLgEAakECdGohEEEAIQlBACEKQQAhCwNAIBAoAgAiB0EYdiAPLgEAIgZsIAtqIQsgB0H/AXEgBmwgCGohCCAHQRB2Qf8BcSAGbCAKaiEKIAdBCHZB/wFxIAZsIAlqIQkgD0ECaiEPIBBBBGohECAUQQFqIhQNAAsgEiATagwBC0EAIQtBACEKQQAhCUEAIQggEgshByABIA5BAnRqIApBgMAAakEOdSIGQf8BIAZB/wFIG0EQdEGAgPwHcUEAIAZBAEobIAtBgMAAakEOdSIGQf8BIAZB/wFIG0EYdEEAIAZBAEobciAJQYDAAGpBDnUiBkH/ASAGQf8BSBtBCHRBgP4DcUEAIAZBAEobciAIQYDAAGpBDnUiBkH/ASAGQf8BSBtB/wFxQQAgBkEAShtyNgIAIA4gA2ohDiARQQFqIhEgBEcNAAsgDCACaiEMIA1BAWoiDSADRw0ACwsLIQACQEEAIAIgAyAEIAUgABAAIAJBACAEIAUgBiABEAALCw=="},{}],4:[function(t,e,i){e.exports={name:"resize",fn:t("./resize"),wasm_fn:t("./resize_wasm"),wasm_src:t("./convolve_wasm_base64")}},{"./convolve_wasm_base64":3,"./resize":5,"./resize_wasm":8}],5:[function(t,e,i){
var r=t("./resize_filter_gen"),n=t("./convolve").convolveHorizontally,a=t("./convolve").convolveVertically;e.exports=function(t){var e=t.src,i=t.width,o=t.height,s=t.toWidth,A=t.toHeight,u=t.scaleX||t.toWidth/t.width,h=t.scaleY||t.toHeight/t.height,l=t.offsetX||0,f=t.offsetY||0,c=t.dest||new Uint8Array(s*A*4),g=void 0===t.quality?3:t.quality,d=t.alpha||!1,p=r(g,i,s,u,l),m=r(g,o,A,h,f),I=new Uint8Array(s*o*4);n(e,I,i,o,s,p);a(I,c,o,s,A,m);d||function(t,e,i){for(var r=3,n=e*i*4|0;r<n;){t[r]=255;r=r+4|0}}(c,s,A);return c}},{"./convolve":2,"./resize_filter_gen":6}],6:[function(t,e,i){var r=t("./resize_filter_info");function n(t){return Math.round(16383*t)}e.exports=function(t,e,i,a,o){var s,A,u,h,l,f,c,g,d,p,m,I,w,B,b,y,v,_=r[t].filter,E=1/a,C=Math.min(1,a),Q=r[t].win/C,x=Math.floor(2*(Q+1)),D=new Int16Array((x+2)*i),M=0,k=!D.subarray||!D.set;for(s=0;s<i;s++){A=(s+.5)*E+o;u=Math.max(0,Math.floor(A-Q));l=(h=Math.min(e-1,Math.ceil(A+Q)))-u+1;f=new Float32Array(l);c=new Int16Array(l);g=0
;for(d=u,p=0;d<=h;d++,p++){g+=m=_((d+.5-A)*C);f[p]=m}I=0;for(p=0;p<f.length;p++){I+=w=f[p]/g;c[p]=n(w)}c[i>>1]+=n(1-I);B=0;for(;B<c.length&&0===c[B];)B++;if(B<c.length){b=c.length-1;for(;b>0&&0===c[b];)b--;y=u+B;v=b-B+1;D[M++]=y;D[M++]=v;if(k)for(p=B;p<=b;p++)D[M++]=c[p];else{D.set(c.subarray(B,b+1),M);M+=v}}else{D[M++]=0;D[M++]=0}}return D}},{"./resize_filter_info":7}],7:[function(t,e,i){e.exports=[{win:.5,filter:function(t){return t>=-.5&&t<.5?1:0}},{win:1,filter:function(t){if(t<=-1||t>=1)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*(.54+.46*Math.cos(e/1))}},{win:2,filter:function(t){if(t<=-2||t>=2)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*Math.sin(e/2)/(e/2)}},{win:3,filter:function(t){if(t<=-3||t>=3)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*Math.sin(e/3)/(e/3)}}]},{}],8:[function(t,e,i){var r=t("./resize_filter_gen"),n=!0;try{
n=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]}catch(t){}function a(t,e,i){if(n)e.set(function(t){return new Uint8Array(t.buffer,0,t.byteLength)}(t),i);else for(var r=i,a=0;a<t.length;a++){var o=t[a];e[r++]=255&o;e[r++]=o>>8&255}}e.exports=function(t){var e=t.src,i=t.width,n=t.height,o=t.toWidth,s=t.toHeight,A=t.scaleX||t.toWidth/t.width,u=t.scaleY||t.toHeight/t.height,h=t.offsetX||0,l=t.offsetY||0,f=t.dest||new Uint8Array(o*s*4),c=void 0===t.quality?3:t.quality,g=t.alpha||!1,d=r(c,i,o,A,h),p=r(c,n,s,u,l),m=this.__align(0+Math.max(e.byteLength,f.byteLength)),I=this.__align(m+n*o*4),w=this.__align(I+d.byteLength),B=w+p.byteLength,b=this.__instance("resize",B),y=new Uint8Array(this.__memory.buffer),v=new Uint32Array(this.__memory.buffer),_=new Uint32Array(e.buffer);v.set(_);a(d,y,I);a(p,y,w);(b.exports.convolveHV||b.exports._convolveHV)(I,w,m,i,n,o,s);new Uint32Array(f.buffer).set(new Uint32Array(this.__memory.buffer,0,s*o));g||function(t,e,i){for(var r=3,n=e*i*4|0;r<n;){
t[r]=255;r=r+4|0}}(f,o,s);return f}},{"./resize_filter_gen":6}],9:[function(t,e,i){function r(t,e){this.create=t;this.available=[];this.acquired={};this.lastId=1;this.timeoutId=0;this.idle=e||2e3}r.prototype.acquire=function(){var t,e=this;if(0!==this.available.length)t=this.available.pop();else{(t=this.create()).id=this.lastId++;t.release=function(){return e.release(t)}}this.acquired[t.id]=t;return t};r.prototype.release=function(t){var e=this;delete this.acquired[t.id];t.lastUsed=Date.now();this.available.push(t);0===this.timeoutId&&(this.timeoutId=setTimeout((function(){return e.gc()}),100))};r.prototype.gc=function(){var t=this,e=Date.now();this.available=this.available.filter((function(i){if(e-i.lastUsed>t.idle){i.destroy();return!1}return!0}));0!==this.available.length?this.timeoutId=setTimeout((function(){return t.gc()}),100):this.timeoutId=0};e.exports=r},{}],10:[function(t,e,i){e.exports=function(t,e,i,r,n,a){var o=i/t,s=r/e,A=(2*a+2+1)/n;if(A>.5)return[[i,r]]
;var u=Math.ceil(Math.log(Math.min(o,s))/Math.log(A));if(u<=1)return[[i,r]];for(var h=[],l=0;l<u;l++){var f=Math.round(Math.pow(Math.pow(t,u-l-1)*Math.pow(i,l+1),1/u)),c=Math.round(Math.pow(Math.pow(e,u-l-1)*Math.pow(r,l+1),1/u));h.push([f,c])}return h}},{}],11:[function(t,e,i){function r(t){var e=Math.round(t);return Math.abs(t-e)<1e-5?e:Math.floor(t)}function n(t){var e=Math.round(t);return Math.abs(t-e)<1e-5?e:Math.ceil(t)}e.exports=function(t){var e,i,a,o,s,A,u=t.toWidth/t.width,h=t.toHeight/t.height,l=r(t.srcTileSize*u)-2*t.destTileBorder,f=r(t.srcTileSize*h)-2*t.destTileBorder;if(l<1||f<1)throw new Error("Internal error in pica: target tile width/height is too small.");var c,g=[];for(o=0;o<t.toHeight;o+=f)for(a=0;a<t.toWidth;a+=l){(e=a-t.destTileBorder)<0&&(e=0);e+(s=a+l+t.destTileBorder-e)>=t.toWidth&&(s=t.toWidth-e);(i=o-t.destTileBorder)<0&&(i=0);i+(A=o+f+t.destTileBorder-i)>=t.toHeight&&(A=t.toHeight-i);c={toX:e,toY:i,toWidth:s,toHeight:A,toInnerX:a,toInnerY:o,toInnerWidth:l,
toInnerHeight:f,offsetX:e/u-r(e/u),offsetY:i/h-r(i/h),scaleX:u,scaleY:h,x:r(e/u),y:r(i/h),width:n(s/u),height:n(A/h)};g.push(c)}return g}},{}],12:[function(t,e,i){function r(t){return Object.prototype.toString.call(t)}e.exports.isCanvas=function(t){var e=r(t);return"[object HTMLCanvasElement]"===e||"[object Canvas]"===e};e.exports.isImage=function(t){return"[object HTMLImageElement]"===r(t)};e.exports.limiter=function(t){var e=0,i=[];function r(){if(e<t&&i.length){e++;i.shift()()}}return function(t){return new Promise((function(n,a){i.push((function(){t().then((function(t){n(t);e--;r()}),(function(t){a(t);e--;r()}))}));r()}))}};e.exports.cib_quality_name=function(t){switch(t){case 0:return"pixelated";case 1:return"low";case 2:return"medium"}return"high"};e.exports.cib_support=function(){return Promise.resolve().then((function(){if("undefined"==typeof createImageBitmap||"undefined"==typeof document)return!1;var t=document.createElement("canvas");t.width=100;t.height=100
;return createImageBitmap(t,0,0,100,100,{resizeWidth:10,resizeHeight:10,resizeQuality:"high"}).then((function(e){var i=10===e.width;e.close();t=null;return i}))})).catch((function(){return!1}))}},{}],13:[function(t,e,i){e.exports=function(){var e,i=t("./mathlib");onmessage=function(t){var r=t.data.opts;e||(e=new i(t.data.features));var n=e.resizeAndUnsharp(r);postMessage({result:n},[n.buffer])}}},{"./mathlib":1}],14:[function(t,e,i){var r,n,a,o,s,A;function u(t,e,i,r,n,a){var o,s,A,u,h,l,f,c,g,d,p,m,I,w;for(g=0;g<a;g++){f=g;c=0;u=h=(o=t[l=g*n])*r[6];p=r[0];m=r[1];I=r[4];w=r[5];for(d=0;d<n;d++){A=(s=t[l])*p+o*m+u*I+h*w;h=u;u=A;o=s;i[c]=u;c++;l++}c--;f+=a*(n-1);u=h=(o=t[--l])*r[7];s=o;p=r[2];m=r[3];for(d=n-1;d>=0;d--){A=s*p+o*m+u*I+h*w;h=u;u=A;o=s;s=t[l];e[f]=i[c]+u;l--;c--;f-=a}}}e.exports=function(t,e,i,h){if(h){var l=new Uint16Array(t.length),f=new Float32Array(Math.max(e,i)),c=function(t){t<.5&&(t=.5);var e=Math.exp(.527076)/t,i=Math.exp(-e),u=Math.exp(-2*e),h=(1-i)*(1-i)/(1+2*e*i-u)
;r=h;n=h*(e-1)*i;a=h*(e+1)*i;o=-h*u;s=2*i;A=-u;return new Float32Array([r,n,a,o,s,A,(r+n)/(1-s-A),(a+o)/(1-s-A)])}(h);u(t,l,f,c,e,i);u(l,t,f,c,i,e)}}},{}],15:[function(t,e,i){"function"==typeof Object.create?e.exports=function(t,e){if(e){t.super_=e;t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}}:e.exports=function(t,e){if(e){t.super_=e;var i=function(){};i.prototype=e.prototype;t.prototype=new i;t.prototype.constructor=t}}},{}],16:[function(t,e,i){var r=t("object-assign"),n=t("./lib/base64decode"),a=t("./lib/wa_detect"),o={js:!0,wasm:!0};function s(t){if(!(this instanceof s))return new s(t);var e=r({},o,t||{});this.options=e;this.__cache={};this.__init_promise=null;this.__modules=e.modules||{};this.__memory=null;this.__wasm={};this.__isLE=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0];if(!this.options.js&&!this.options.wasm)throw new Error('mathlib: at least "js" or "wasm" should be enabled')}s.prototype.has_wasm=a
;s.prototype.use=function(t){this.__modules[t.name]=t;this.options.wasm&&this.has_wasm()&&t.wasm_fn?this[t.name]=t.wasm_fn:this[t.name]=t.fn;return this};s.prototype.init=function(){if(this.__init_promise)return this.__init_promise;if(!this.options.js&&this.options.wasm&&!this.has_wasm())return Promise.reject(new Error('mathlib: only "wasm" was enabled, but it\'s not supported'));var t=this;this.__init_promise=Promise.all(Object.keys(t.__modules).map((function(e){var i=t.__modules[e];return t.options.wasm&&t.has_wasm()&&i.wasm_fn?t.__wasm[e]?null:WebAssembly.compile(t.__base64decode(i.wasm_src)).then((function(i){t.__wasm[e]=i})):null}))).then((function(){return t}));return this.__init_promise};s.prototype.__base64decode=n;s.prototype.__reallocate=function(t){if(!this.__memory){this.__memory=new WebAssembly.Memory({initial:Math.ceil(t/65536)});return this.__memory}var e=this.__memory.buffer.byteLength;e<t&&this.__memory.grow(Math.ceil((t-e)/65536));return this.__memory}
;s.prototype.__instance=function(t,e,i){e&&this.__reallocate(e);if(!this.__wasm[t]){var n=this.__modules[t];this.__wasm[t]=new WebAssembly.Module(this.__base64decode(n.wasm_src))}if(!this.__cache[t]){var a={memoryBase:0,memory:this.__memory,tableBase:0,table:new WebAssembly.Table({initial:0,element:"anyfunc"})};this.__cache[t]=new WebAssembly.Instance(this.__wasm[t],{env:r(a,i||{})})}return this.__cache[t]};s.prototype.__align=function(t,e){var i=t%(e=e||8);return t+(i?e-i:0)};e.exports=s},{"./lib/base64decode":17,"./lib/wa_detect":23,"object-assign":24}],17:[function(t,e,i){e.exports=function(t){for(var e=t.replace(/[\r\n=]/g,""),i=e.length,r=new Uint8Array(3*i>>2),n=0,a=0,o=0;o<i;o++){if(o%4==0&&o){r[a++]=n>>16&255;r[a++]=n>>8&255;r[a++]=255&n}n=n<<6|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(o))}var s=i%4*6;if(0===s){r[a++]=n>>16&255;r[a++]=n>>8&255;r[a++]=255&n}else if(18===s){r[a++]=n>>10&255;r[a++]=n>>2&255}else 12===s&&(r[a++]=n>>4&255)
;return r}},{}],18:[function(t,e,i){e.exports=function(t,e,i){for(var r,n,a,o,s,A=e*i,u=new Uint16Array(A),h=0;h<A;h++){r=t[4*h];n=t[4*h+1];a=t[4*h+2];s=r>=n&&r>=a?r:n>=a&&n>=r?n:a;o=r<=n&&r<=a?r:n<=a&&n<=r?n:a;u[h]=257*(s+o)>>1}return u}},{}],19:[function(t,e,i){e.exports={name:"unsharp_mask",fn:t("./unsharp_mask"),wasm_fn:t("./unsharp_mask_wasm"),wasm_src:t("./unsharp_mask_wasm_base64")}},{"./unsharp_mask":20,"./unsharp_mask_wasm":21,"./unsharp_mask_wasm_base64":22}],20:[function(t,e,i){var r=t("glur/mono16"),n=t("./hsl_l16");e.exports=function(t,e,i,a,o,s){var A,u,h,l,f,c,g,d,p,m,I,w,B;if(!(0===a||o<.5)){o>2&&(o=2);var b=n(t,e,i),y=new Uint16Array(b);r(y,e,i,o);for(var v=a/100*4096+.5|0,_=257*s|0,E=e*i,C=0;C<E;C++){w=2*(b[C]-y[C]);if(Math.abs(w)>=_){A=t[B=4*C];u=t[B+1];h=t[B+2];c=257*((d=A>=u&&A>=h?A:u>=A&&u>=h?u:h)+(g=A<=u&&A<=h?A:u<=A&&u<=h?u:h))>>1;if(g===d)l=f=0;else{f=c<=32767?4095*(d-g)/(d+g)|0:4095*(d-g)/(510-d-g)|0
;l=A===d?65535*(u-h)/(6*(d-g))|0:u===d?21845+(65535*(h-A)/(6*(d-g))|0):43690+(65535*(A-u)/(6*(d-g))|0)}(c+=v*w+2048>>12)>65535?c=65535:c<0&&(c=0);if(0===f)A=u=h=c>>8;else{p=2*c-(m=c<=32767?c*(4096+f)+2048>>12:c+((65535-c)*f+2048>>12))>>8;m>>=8;A=(I=l+21845&65535)>=43690?p:I>=32767?p+(6*(m-p)*(43690-I)+32768>>16):I>=10922?m:p+(6*(m-p)*I+32768>>16);u=(I=65535&l)>=43690?p:I>=32767?p+(6*(m-p)*(43690-I)+32768>>16):I>=10922?m:p+(6*(m-p)*I+32768>>16);h=(I=l-21845&65535)>=43690?p:I>=32767?p+(6*(m-p)*(43690-I)+32768>>16):I>=10922?m:p+(6*(m-p)*I+32768>>16)}t[B]=A;t[B+1]=u;t[B+2]=h}}}}},{"./hsl_l16":18,"glur/mono16":14}],21:[function(t,e,i){e.exports=function(t,e,i,r,n,a){if(!(0===r||n<.5)){n>2&&(n=2);var o=e*i,s=4*o,A=2*o,u=2*o,h=4*Math.max(e,i),l=s,f=l+A,c=f+u,g=c+u,d=g+h,p=this.__instance("unsharp_mask",s+A+2*u+h+32,{exp:Math.exp}),m=new Uint32Array(t.buffer);new Uint32Array(this.__memory.buffer).set(m);var I=p.exports.hsl_l16||p.exports._hsl_l16;I(0,l,e,i)
;(I=p.exports.blurMono16||p.exports._blurMono16)(l,f,c,g,d,e,i,n);(I=p.exports.unsharp||p.exports._unsharp)(0,0,l,f,e,i,r,a);m.set(new Uint32Array(this.__memory.buffer,0,o))}}},{}],22:[function(t,e,i){
e.exports="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"
},{}],23:[function(t,e,i){var r;e.exports=function(){if(void 0!==r)return r;r=!1;if("undefined"==typeof WebAssembly)return r;try{var t=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),e=new WebAssembly.Module(t);0!==new WebAssembly.Instance(e,{}).exports.test(4)&&(r=!0);return r}catch(t){}return r}},{}],24:[function(t,e,i){var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");t[5]="de";if("5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={}
;"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t}));return"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,s,A=o(t),u=1;u<arguments.length;u++){i=Object(arguments[u]);for(var h in i)n.call(i,h)&&(A[h]=i[h]);if(r){s=r(i);for(var l=0;l<s.length;l++)a.call(i,s[l])&&(A[s[l]]=i[s[l]])}}return A}},{}],25:[function(t,e,i){var r=arguments[3],n=arguments[4],a=arguments[5],o=JSON.stringify;e.exports=function(t,e){for(var i,s=Object.keys(a),A=0,u=s.length;A<u;A++){var h=s[A],l=a[h].exports;if(l===t||l&&l.default===t){i=h;break}}if(!i){i=Math.floor(Math.pow(16,8)*Math.random()).toString(16);var f={};for(A=0,u=s.length;A<u;A++)f[h=s[A]]=h;n[i]=["function(require,module,exports){"+t+"(self); }",f]}var c=Math.floor(Math.pow(16,8)*Math.random()).toString(16),g={};g[i]=i;n[c]=["function(require,module,exports){var f = require("+o(i)+");(f.default ? f.default : f)(self);}",g];var d={};!function t(e){d[e]=!0
;for(var i in n[e][1]){var r=n[e][1][i];d[r]||t(r)}}(c);var p="("+r+")({"+Object.keys(d).map((function(t){return o(t)+":["+n[t][0]+","+o(n[t][1])+"]"})).join(",")+"},{},["+o(c)+"])",m=window.URL||window.webkitURL||window.mozURL||window.msURL,I=new Blob([p],{type:"text/javascript"});if(e&&e.bare)return I;var w=m.createObjectURL(I),B=new Worker(w);B.objectURL=w;return B}},{}],"/":[function(t,e,i){function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],r=!0,n=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){i.push(o.value);if(e&&i.length===e)break}}catch(t){n=!0;a=t}finally{try{r||null==s.return||s.return()}finally{if(n)throw a}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var n=t("object-assign"),a=t("webworkify"),o=t("./lib/mathlib"),s=t("./lib/pool"),A=t("./lib/utils"),u=t("./lib/worker"),h=t("./lib/stepper"),l=t("./lib/tiler"),f={},c=!1;try{
"undefined"!=typeof navigator&&navigator.userAgent&&(c=navigator.userAgent.indexOf("Safari")>=0)}catch(t){}var g=1;"undefined"!=typeof navigator&&(g=Math.min(navigator.hardwareConcurrency||1,4));var d,p,m={tile:1024,concurrency:g,features:["js","wasm","ww"],idle:2e3},I={quality:3,alpha:!1,unsharpAmount:0,unsharpRadius:0,unsharpThreshold:0};function w(){return{value:a(u),destroy:function(){this.value.terminate();if("undefined"!=typeof window){var t=window.URL||window.webkitURL||window.mozURL||window.msURL;t&&t.revokeObjectURL&&this.value.objectURL&&t.revokeObjectURL(this.value.objectURL)}}}}function B(t){if(!(this instanceof B))return new B(t);this.options=n({},m,t||{});var e="lk_".concat(this.options.concurrency);this.__limit=f[e]||A.limiter(this.options.concurrency);f[e]||(f[e]=this.__limit);this.features={js:!1,wasm:!1,cib:!1,ww:!1};this.__workersPool=null;this.__requested_features=[];this.__mathlib=null}B.prototype.init=function(){var e=this
;if(this.__initPromise)return this.__initPromise;if(!1!==d&&!0!==d){d=!1;if("undefined"!=typeof ImageData&&"undefined"!=typeof Uint8ClampedArray)try{new ImageData(new Uint8ClampedArray(400),10,10);d=!0}catch(t){}}if(!1!==p&&!0!==p){p=!1;"undefined"!=typeof ImageBitmap&&(ImageBitmap.prototype&&ImageBitmap.prototype.close?p=!0:this.debug("ImageBitmap does not support .close(), disabled"))}var i=this.options.features.slice();i.indexOf("all")>=0&&(i=["cib","wasm","js","ww"]);this.__requested_features=i;this.__mathlib=new o(i);if(i.indexOf("ww")>=0&&"undefined"!=typeof window&&"Worker"in window)try{t("webworkify")((function(){})).terminate();this.features.ww=!0;var r="wp_".concat(JSON.stringify(this.options));if(f[r])this.__workersPool=f[r];else{this.__workersPool=new s(w,this.options.idle);f[r]=this.__workersPool}}catch(t){}var a,u=this.__mathlib.init().then((function(t){n(e.features,t.features)}));a=p?A.cib_support().then((function(t){
e.features.cib&&i.indexOf("cib")<0?e.debug("createImageBitmap() resize supported, but disabled by config"):i.indexOf("cib")>=0&&(e.features.cib=t)})):Promise.resolve(!1);this.__initPromise=Promise.all([u,a]).then((function(){return e}));return this.__initPromise};B.prototype.resize=function(t,e,i){var a=this;this.debug("Start resize...");var o=n({},I);isNaN(i)?i&&(o=n(o,i)):o=n(o,{quality:i});o.toWidth=e.width;o.toHeight=e.height;o.width=t.naturalWidth||t.width;o.height=t.naturalHeight||t.height;if(0===e.width||0===e.height)return Promise.reject(new Error("Invalid output size: ".concat(e.width,"x").concat(e.height)));o.unsharpRadius>2&&(o.unsharpRadius=2);var s=!1,u=null;o.cancelToken&&(u=o.cancelToken.then((function(t){s=!0;throw t}),(function(t){s=!0;throw t})));var f=Math.ceil(Math.max(3,2.5*o.unsharpRadius|0));return this.init().then((function(){if(s)return u;if(a.features.cib){var i=e.getContext("2d",{alpha:Boolean(o.alpha)});a.debug("Resize via createImageBitmap()")
;return createImageBitmap(t,{resizeWidth:o.toWidth,resizeHeight:o.toHeight,resizeQuality:A.cib_quality_name(o.quality)}).then((function(t){if(s)return u;if(!o.unsharpAmount){i.drawImage(t,0,0);t.close();i=null;a.debug("Finished!");return e}a.debug("Unsharp result");var r=document.createElement("canvas");r.width=o.toWidth;r.height=o.toHeight;var n=r.getContext("2d",{alpha:Boolean(o.alpha)});n.drawImage(t,0,0);t.close();var A=n.getImageData(0,0,o.toWidth,o.toHeight);a.__mathlib.unsharp_mask(A.data,o.toWidth,o.toHeight,o.unsharpAmount,o.unsharpRadius,o.unsharpThreshold);i.putImageData(A,0,0);A=n=r=i=null;a.debug("Finished!");return e}))}var g={},m=function(t,e,i){var r,n,o,h=function(e){return a.__limit((function(){if(s)return u;var h;if(A.isCanvas(t)){a.debug("Get tile pixel data");h=r.getImageData(e.x,e.y,e.width,e.height)}else{a.debug("Draw tile imageBitmap/image to temporary canvas");var l=document.createElement("canvas");l.width=e.width;l.height=e.height;var f=l.getContext("2d",{
alpha:Boolean(i.alpha)});f.globalCompositeOperation="copy";f.drawImage(n||t,e.x,e.y,e.width,e.height,0,0,e.width,e.height);a.debug("Get tile pixel data");h=f.getImageData(0,0,e.width,e.height);f=l=null}var p={src:h.data,width:e.width,height:e.height,toWidth:e.toWidth,toHeight:e.toHeight,scaleX:e.scaleX,scaleY:e.scaleY,offsetX:e.offsetX,offsetY:e.offsetY,quality:i.quality,alpha:i.alpha,unsharpAmount:i.unsharpAmount,unsharpRadius:i.unsharpRadius,unsharpThreshold:i.unsharpThreshold};a.debug("Invoke resize math");return Promise.resolve().then((function(){return function(t){return Promise.resolve().then((function(){return a.features.ww?new Promise((function(e,i){var r=a.__workersPool.acquire();u&&u.catch((function(t){return i(t)}));r.value.onmessage=function(t){r.release();t.data.err?i(t.data.err):e(t.data.result)};r.value.postMessage({opts:t,features:a.__requested_features,preload:{wasm_nodule:a.__mathlib.__}},[t.src.buffer])})):a.__mathlib.resizeAndUnsharp(t,g)}))}(p)
})).then((function(t){if(s)return u;h=null;var i;a.debug("Convert raw rgba tile result to ImageData");if(d)i=new ImageData(new Uint8ClampedArray(t),e.toWidth,e.toHeight);else if((i=o.createImageData(e.toWidth,e.toHeight)).data.set)i.data.set(t);else for(var r=i.data.length-1;r>=0;r--)i.data[r]=t[r];a.debug("Draw tile");c?o.putImageData(i,e.toX,e.toY,e.toInnerX-e.toX,e.toInnerY-e.toY,e.toInnerWidth+1e-5,e.toInnerHeight+1e-5):o.putImageData(i,e.toX,e.toY,e.toInnerX-e.toX,e.toInnerY-e.toY,e.toInnerWidth,e.toInnerHeight);return null}))}))};return Promise.resolve().then((function(){o=e.getContext("2d",{alpha:Boolean(i.alpha)});if(A.isCanvas(t)){r=t.getContext("2d",{alpha:Boolean(i.alpha)});return null}if(A.isImage(t)){if(!p)return null;a.debug("Decode image via createImageBitmap");return createImageBitmap(t).then((function(t){n=t}))}throw new Error('".from" should be image or canvas')})).then((function(){if(s)return u;a.debug("Calculate tiles");var t=l({width:i.width,height:i.height,
srcTileSize:a.options.tile,toWidth:i.toWidth,toHeight:i.toHeight,destTileBorder:f}).map((function(t){return h(t)}));function r(){if(n){n.close();n=null}}a.debug("Process tiles");return Promise.all(t).then((function(){a.debug("Finished!");r();return e}),(function(t){r();throw t}))}))};return function t(e,i,a,o){if(s)return u;var A,h=r(e.shift(),2),l=h[0],f=h[1],c=0===e.length;o=n({},o,{toWidth:l,toHeight:f,quality:c?o.quality:Math.min(1,o.quality)});if(!c){(A=document.createElement("canvas")).width=l;A.height=f}return m(i,c?a:A,o).then((function(){if(c)return a;o.width=l;o.height=f;return t(e,A,a,o)}))}(h(o.width,o.height,o.toWidth,o.toHeight,a.options.tile,f),t,e,o)}))};B.prototype.resizeBuffer=function(t){var e=this,i=n({},I,t);return this.init().then((function(){return e.__mathlib.resizeAndUnsharp(i)}))};B.prototype.toBlob=function(t,e,i){e=e||"image/png";return new Promise((function(r){if(t.toBlob)t.toBlob((function(t){return r(t)}),e,i);else{
for(var n=atob(t.toDataURL(e,i).split(",")[1]),a=n.length,o=new Uint8Array(a),s=0;s<a;s++)o[s]=n.charCodeAt(s);r(new Blob([o],{type:e}))}}))};B.prototype.debug=function(){};e.exports=B},{"./lib/mathlib":1,"./lib/pool":9,"./lib/stepper":10,"./lib/tiler":11,"./lib/utils":12,"./lib/worker":13,"object-assign":24,webworkify:25}]},{},[])("/")}}]);
//# sourceMappingURL=52d67461bca3023643d9.js.map