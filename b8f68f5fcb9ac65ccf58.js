"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[94157],{482395:(e,t,r)=>{r.r(t);r.d(t,{default:()=>I});var n=r(785893),o=r(667294),a=r(142680),c=r(237970),u=r(199059),i=r(363010),s=r(830395),l=r(817513),f=r(932847),p=r(461061),h=r(959797),d=r(492036),y=r.n(d);function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e){b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return b(e)}function m(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e,t){O=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return O(e,t)}var _=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&O(e,t)}(r,e);var t=v(r);function r(){T(this,r);var e;(e=t.apply(this,arguments)).handleHeaderLocaleChange=function(t){t!==e.props.locale&&s.ZP.overrideLocale(t)};return e}var i=r.prototype;i.shouldScrollToTop=function(e){var t=e.location;return t.pathname.startsWith(p.Z5c.APPLICATION_STORE_LISTING_SKU(""))||t.pathname.startsWith(p.Z5c.APPLICATION_STORE_LISTING_APPLICATION(""))};i.render=function(){
var e=this,t=this.props,r=t.location,i=t.className,s=t.render,l=t.locale;return(0,n.jsx)(u.Z,{className:i,shouldScrollToTop:this.shouldScrollToTop,render:function(t,u){return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(c.Z,{avoidRouter:!0,locale:l,authRedirectTo:r.pathname,track:f.default.track,className:y().marketingHeader,onChangeLocale:e.handleHeaderLocaleChange,mobileClassName:y().marketingHeader,openNavAriaLabel:h.Z.Messages.OPEN_NAVIGATION,hideNavAriaLabel:h.Z.Messages.HIDE_NAVIGATION,skipToContentLabel:h.Z.Messages.SKIP_TO_CONTENT}),s(t,u),(0,n.jsx)(a.Z,{locale:l,authRedirectTo:r.pathname,avoidRouter:!0,track:f.default.track,className:y().marketingFooter})]})}})};return r}(o.Component);const I=i.ZP.connectStores([l.default],(function(){return{locale:l.default.locale}}))(N)}}]);
//# sourceMappingURL=b8f68f5fcb9ac65ccf58.js.map