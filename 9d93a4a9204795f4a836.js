"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[30741],{30741:(n,e,t)=>{t.r(e);t.d(e,{default:()=>p,DeclarativeConfirmModal:()=>v});var r=t(785893),o=t(667294),l=t(294184),u=t.n(l),i=t(331535),c=t(67416),a=t(597126),s=t.n(a);function f(n,e,t,r,o,l,u){try{var i=n[l](u),c=i.value}catch(n){t(n);return}i.done?e(c):Promise.resolve(c).then(r,o)}function d(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var l=n.apply(e,t);function u(n){f(l,r,o,u,i,"next",n)}function i(n){f(l,r,o,u,i,"throw",n)}u(void 0)}))}}function b(n,e,t){e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t;return n}var h=function(n,e){var t,r,o,l,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){
if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;(r=0,o)&&(l=[2&l[0],o.value]);switch(l[0]){case 0:case 1:o=l;break;case 4:u.label++;return{value:l[1],done:!1};case 5:u.label++;r=l[1];l=[0];continue;case 7:l=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){u=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){u.label=l[1];break}if(6===l[0]&&u.label<o[1]){u.label=o[1];o=l;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(l);break}o[2]&&u.ops.pop();u.trys.pop();continue}l=e.call(n,u)}catch(n){l=[6,n];r=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}};function p(n){
var e,t,l=n.header,a=n.children,f=n.confirmText,b=n.cancelText,p=n.className,v=n.onConfirm,y=n.onCancel,m=n.onClose,x=n.onCloseCallback,w=n.bodyClassName,C=n.transitionState,j=n.loading,k=void 0!==j&&j,g=n.confirmButtonColor,O=void 0===g?i.zx.Colors.RED:g,P=n.focusCancel,z=void 0!==P&&P,R=o.useRef(null);o.useEffect((function(){z||setTimeout((function(){var n;return null===(n=R.current)||void 0===n?void 0:n.focus()}),0)}),[z]);o.useLayoutEffect((function(){return function(){return null==x?void 0:x()}}));null!=b&&(e=(0,r.jsx)(i.zx,{type:"button",look:i.zx.Looks.LINK,color:i.zx.Colors.PRIMARY,disabled:k,onClick:function(){null==y||y();m()},autoFocus:z,children:b}));null!=f&&(t=(0,r.jsx)(i.zx,{buttonRef:R,type:"submit",color:O,submitting:k,onClick:d((function(){return h(this,(function(n){switch(n.label){case 0:n.trys.push([0,2,,3]);return[4,null==v?void 0:v()];case 1:n.sent();m();return[3,3];case 2:throw n.sent();case 3:return[2]}}))})),autoFocus:!z,children:f}));return(0,r.jsxs)(c.Y0,{
className:p,transitionState:C,children:[null!=l?(0,r.jsx)(c.xB,{separator:!1,children:(0,r.jsx)(i.X6,{variant:"heading-lg/semibold",children:l})}):null,(0,r.jsx)(c.hz,{className:u()(s().content,w),children:a}),(0,r.jsxs)(c.mz,{children:[t,e]})]})}function v(n){return(0,r.jsx)(c.ZP,{onCloseRequest:n.dismissable?n.onCancel:null,renderModal:function(e){return(0,r.jsx)(p,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))));r.forEach((function(e){b(n,e,t[e])}))}return n}({},e,n))}})}}}]);
//# sourceMappingURL=9d93a4a9204795f4a836.js.map