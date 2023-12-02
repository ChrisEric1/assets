(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{1417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(1)),n=u(r(5)),s=i(r(127)),o=u(r(1282));function u(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=a?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(r,n,s):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e){var t,r;function u(){return e.apply(this,arguments)||this}return r=e,(t=u).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,u.prototype.render=function(){var e=this.props,t=e.className,r=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["className"]);return a.createElement(s.default,c({},r,{className:(0,n.default)(o.default.formStatusAlert,t)}))},u}(a.Component);t.default=d,d.displayName="FormStatusAlert",d.Types=s.AlertTypes},1435:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=a?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(r,n,s):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(r(1)),s=d(r(5)),o=r(420),u=r(74),l=d(r(182)),i=r(3),c=d(r(1285));function d(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var u=new Array(o),l=0;l<o;l++)u[l]=arguments[l+3];t.children=u}if(t&&s)for(var i in s)void 0===t[i]&&(t[i]=s[i]);else t||(t=s||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var y={DEFAULT:"default",INVERTED:"inverted",GHOST:"ghost"},E={BOX:c.default.box,ROUND:c.default.round},S=function(e){var t,r;function a(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).state={focused:!1},t.handleFocus=function(){t.setState({focused:!0})},t.handleBlur=function(){t.setState({focused:!1})},t.handleChange=function(e){var r=t.props,a=r.onChange,n=r.name;null!=a&&a(e.currentTarget.checked,n)},t}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var n=a.prototype;return n.getInputMode=function(){return this.props.disabled?"disabled":this.props.readOnly?"readonly":"default"},n.getStyle=function(){var e=this.props,t=e.value,r=e.type,a=e.color,n=this.props.style||{};if(!1===t)return n;switch(n=h({},n),r){case y.DEFAULT:n.borderColor=a;break;case y.GHOST:n.borderColor=(0,o.hex2rgb)(a,.15),n.backgroundColor=(0,o.hex2rgb)(a,.15);break;case y.INVERTED:n.backgroundColor=a,n.borderColor=a}return n},n.getColor=function(){var e=this.props,t=e.value,r=e.type,a=e.color,n=r===y.INVERTED?i.Colors.WHITE:a;return r===y.INVERTED&&a===i.Colors.WHITE&&(n=i.Colors.BLACK),t?n:"transparent"},n.render=function(){var e,t=this.state.focused,r=this.props,a=r.disabled,n=r.readOnly,o=r.value,d=r.shape,f=r.className,y=r.children,E=r.size;return p("label",{className:(0,s.default)((0,u.getClass)(c.default,"checkboxWrapper",a?"disabled":""),f),style:{height:E}},void 0,p("input",{className:(0,u.getClass)(c.default,"input",this.getInputMode()),type:"checkbox",onChange:a||n?i.NOOP:this.handleChange,onFocus:a||n?i.NOOP:this.handleFocus,onBlur:this.handleBlur,checked:o,style:{width:E,height:E}}),p("div",{className:(0,s.default)(c.default.checkbox,d,(e={},e[c.default.checked]=o,e[c.default.focused]=t,e)),style:h({width:E,height:E},this.getStyle())},void 0,p(l.default,{name:l.default.Names.CHECKMARK,width:18,height:18,color:this.getColor()})),y?p("div",{className:c.default.label,style:{lineHeight:E+"px"}},void 0,y):null)},a}(n.PureComponent);S.displayName="Checkbox",S.Types=y,S.Shapes=E,S.defaultProps={size:24,disabled:!1,readOnly:!1,value:!1,type:y.DEFAULT,color:i.Colors.WHITE,shape:E.BOX,onChange:i.NOOP};var v=S;t.default=v},1800:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=F(r(1)),s=O(r(12)),o=F(r(1453)),u=O(r(186)),l=O(r(1435)),i=F(r(408)),c=O(r(414)),d=O(r(1417)),f=O(r(412)),p=O(r(410)),h=O(r(415)),y=O(r(413)),E=O(r(416)),S=r(3),v=r(18);function O(e){return e&&e.__esModule?e:{default:e}}function g(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function F(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=a?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(r,n,s):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function b(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var u=new Array(o),l=0;l<o;l++)u[l]=arguments[l+3];t.children=u}if(t&&s)for(var i in s)void 0===t[i]&&(t[i]=s[i]);else t||(t=s||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var _=function(){var e;return(e={})[S.SKUFeatureTypes.SINGLE_PLAYER]=v.Messages.Features.FEATURE_SINGLE_PLAYER,e[S.SKUFeatureTypes.ONLINE_MULTIPLAYER]=v.Messages.Features.FEATURE_ONLINE_MULTIPLAYER,e[S.SKUFeatureTypes.LOCAL_MULTIPLAYER]=v.Messages.Features.FEATURE_LOCAL_MULTIPLAYER,e[S.SKUFeatureTypes.PVP]=v.Messages.Features.FEATURE_PVP,e[S.SKUFeatureTypes.LOCAL_COOP]=v.Messages.Features.FEATURE_LOCAL_COOP,e[S.SKUFeatureTypes.CROSS_PLATFORM]=v.Messages.Features.FEATURE_CROSS_PLATFORM,e[S.SKUFeatureTypes.RICH_PRESENCE]=v.Messages.Features.FEATURE_RICH_PRESENCE,e[S.SKUFeatureTypes.DISCORD_GAME_INVITES]=v.Messages.Features.FEATURE_DISCORD_GAME_INVITES,e[S.SKUFeatureTypes.SPECTATOR_MODE]=v.Messages.Features.FEATURE_SPECTATOR_MODE,e[S.SKUFeatureTypes.CONTROLLER_SUPPORT]=v.Messages.Features.FEATURE_CONTROLLER_SUPPORT,e[S.SKUFeatureTypes.CLOUD_SAVES]=v.Messages.Features.FEATURE_CLOUD_SAVES,e[S.SKUFeatureTypes.ONLINE_COOP]=v.Messages.Features.FEATURE_ONLINE_COOP,e[S.SKUFeatureTypes.SECURE_NETWORKING]=v.Messages.Features.FEATURE_SECURE_NETWORKING,e},C=Object.keys(S.SKUFeatureTypes).sort(function(e,t){return S.SKUFeatureTypes[e]-S.SKUFeatureTypes[t]}),T=function(e){return null!=e.features?e.features:[]},m=function(e){var t,r;function a(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).state={hasError:!1,hasSubmitted:!1,hasUnsavedChanges:!1,isSubmitting:!1,selectedFeatures:T(t.props.sku)},t.handleCheckboxChange=function(e,r){if(null!=r){var a=S.SKUFeatureTypes[r];t.setState(function(e){var t=e.selectedFeatures;return t.includes(a)?{selectedFeatures:t.filter(function(e){return e!==a})}:{selectedFeatures:t.concat(a)}},t.handleFormChange)}},t.handleFormChange=function(){t.state.hasUnsavedChanges||t.setState({hasUnsavedChanges:!0})},t.handleFormReset=function(){t.setState({hasUnsavedChanges:!1,selectedFeatures:T(t.props.sku)})},t.handleFormSubmit=function(){var e=t.props.match.params,r=e.id,a=e.skuId,n={features:t.state.selectedFeatures};o.updateSku(r,a,n).then(function(){t.setState({isSubmitting:!1,hasError:!1,hasSubmitted:!0,hasUnsavedChanges:!1})}).catch(function(){t.setState({isSubmitting:!1,hasError:!0,hasSubmitted:!1})})},t.renderFormStatus=function(){var e=t.state,r=e.hasError,a=e.hasSubmitted;return r?b(d.default,{type:d.default.Types.ERROR},void 0,v.Messages.Alerts.ERROR):a?b(d.default,{type:d.default.Types.SUCCESS},void 0,v.Messages.Alerts.SUCCESS_CHANGES_SAVED):null},t.renderFeaturesCheckboxes=function(){var e=t.state.selectedFeatures,r=_();return C.map(function(a){var n=S.SKUFeatureTypes[a];return b(i.GridChild,{columnSpread:3,columnSpreadMedium:4,columnSpreadSmallMedium:6,columnSpreadSmall:6,columnSpreadExtraSmall:12},a,b(l.default,{onChange:t.handleCheckboxChange,value:e.includes(n),name:a,type:l.default.Types.INVERTED},void 0,r[n]||a))})},t}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.state,t=e.hasUnsavedChanges,r=e.isSubmitting;return b(c.default,{onChange:this.handleFormChange,onSubmit:this.handleFormSubmit},void 0,b(p.default,{},void 0,b(f.default,{},void 0,v.Messages.Features.HEADING),b(y.default,{isFlush:!0},void 0,v.Messages.Features.SUBHEADING),this.renderFormStatus()),b(p.default,{isFlush:!0},void 0,b(h.default,{bottomMargin:h.default.BottomMarginSizes.LARGE},void 0,v.Messages.Features.AVAILABLE_FEATURES_HEADING),b(i.default,{},void 0,b(i.GridSection,{},void 0,this.renderFeaturesCheckboxes()))),b(E.default,{isVisible:t,onReset:this.handleFormReset,submitting:r}))},a}(n.Component);m.displayName="SkuFeatures";var R=s.default.connectStores([u.default],function(e){return{sku:u.default.getSku(e.match.params.skuId)}})(m);t.default=R}}]);
//# sourceMappingURL=fcde113a1c6e51b846bf.js.map