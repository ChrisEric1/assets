(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1517:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=d(r(1)),a=p(r(5)),i=d(r(56)),u=p(r(182)),l=p(r(411)),s=r(18),c=p(r(1317));function p(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function v(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function h(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var y=function(e){function t(t){var r;return(r=e.call(this,t)||this).hasError=function(e){var t=r.props.validator;return null!=t&&!t(e)},r.handleInputBlur=function(e,t){var n=e.currentTarget.value;r.setState({hasError:r.hasError(n)}),r.props.onChange(t,n)},r.handleRemoveClick=function(){var e=r.props,t=e.name;(0,e.onRemove)(t)},r.state={hasError:r.hasError(t.value)},r}return h(t,e),t.prototype.render=function(){var e,t=this.state.hasError,r=this.props,n=r.name,o=r.maxLength,i=r.validator,s=r.value,p=null!=i;return v("div",{className:c.default.inputWrapper},void 0,v(l.default,{className:c.default.input,inputClassName:(0,a.default)((e={},e[c.default.isValid]=p&&s&&!t,e[c.default.hasError]=p&&s&&t,e)),name:n,defaultValue:s,onBlur:this.handleInputBlur,maxLength:o}),v("button",{className:c.default.removeButton,onClick:this.handleRemoveClick,tabIndex:-1,type:"button"},void 0,v(u.default,{className:c.default.removeButtonIcon,name:u.default.Names.CLOSE})))},t}(o.PureComponent);y.displayName="Input";var m=function(e){return{inputs:e.values}},b=function(e){var t=e.split("#")[1];return Number(t)},g=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state=m(t.props),t.getButtonText=function(){if(t.state.inputs.length>0)return s.Messages.MultiTextInput.ADD_ANOTHER;var e=t.props.type.substr(0,1).toUpperCase()+t.props.type.substr(1);return s.Messages.MultiTextInput.ADD_ONE.format({name:e})},t.handleAddClick=function(){var e=t.props.onChange,r=[].concat(t.state.inputs,[""]);t.setState({inputs:r}),e&&e(r)},t.handleInputChange=function(e,r){var n=t.props.onChange;if(null!=e){var o=[].concat(t.state.inputs);o[b(e)]=r,t.setState({inputs:o}),n&&n(o)}},t.handleInputRemove=function(e){if(!(t.state.inputs.length<=0)){var r=t.props.onChange,n=[].concat(t.state.inputs);n.splice(b(e),1),t.setState({inputs:n}),r&&r(n)}},t.resetInputFields=function(){t.setState(m(t.props))},t}h(t,e);var r=t.prototype;return r.renderAddAction=function(){var e=this.props.maxCount,t=this.state.inputs;return null!=e&&t.length>=e?null:v(i.default,{height:i.ButtonHeight.MEDIUM,onClick:this.handleAddClick},void 0,this.getButtonText())},r.renderInputFields=function(){var e,t=this,r=this.props,n=r.maxCount,o=r.maxLength,i=r.namePrefix,u=r.type,l=r.validator,s=this.state.inputs;if(0===s.length)return null;var p=s.map(function(e,r){return v(y,{type:u,maxLength:o,name:i+"#"+r,value:e,onChange:t.handleInputChange,onRemove:t.handleInputRemove,validator:l},e+"-"+r)});return v("div",{className:(0,a.default)(c.default.inputsWrapper,(e={},e[c.default.inputsWrapperFlush]=null!=n&&s.length>=n,e))},void 0,p)},r.render=function(){return v("div",{},void 0,this.renderInputFields(),this.renderAddAction())},t}(o.PureComponent);g.displayName="TextboxInputRepeater",g.defaultProps={values:[]};var O=g;t.default=O},1690:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=P(r(1)),a=S(r(12)),i=(S(r(59)),P(r(129))),u=S(r(128)),l=S(r(58)),s=S(r(414)),c=S(r(1417)),p=(S(r(1517)),S(r(412))),f=S(r(410)),d=S(r(415)),v=S(r(1425)),h=S(r(413)),y=S(r(1691)),m=S(r(416)),b=S(r(2237)),g=S(r(2238)),O=r(3),_=r(18);function S(e){return e&&e.__esModule?e:{default:e}}function C(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return C=function(){return e},e}function P(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=C();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function w(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var M=function(e){return{error:null,hasSubmitted:!1,isSubmitting:!1,hasUnsavedChanges:!1,redirectUris:e.applicationDetails.redirect_uris,rpcOrigins:[]}},j=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).uriInputRef=o.createRef(),t.redirectsRef=null,t.state=A({},M(t.props)),t.handleFormChange=function(){var e=t.state,r=e.error,n=e.hasSubmitted,o=e.hasUnsavedChanges;null==r&&!n&&o||t.setState({error:null,hasSubmitted:!1,hasUnsavedChanges:!0})},t.handleFormSubmit=function(){var e=t.state,r=e.redirectUris,n=e.rpcOrigins;t.setState({isSubmitting:!0},function(){i.updateApplication(t.props.applicationDetails.id,{redirect_uris:r,rpc_origins:n}).then(function(){t.setState({error:null,hasSubmitted:!0,hasUnsavedChanges:!1,isSubmitting:!1})}).catch(function(e){t.setState({isSubmitting:!1,error:null!=e.getFieldMessage("redirect_uris")?_.Messages.OAuth2.INVALID_REDIRECT_URI:e.message})})})},t.handleOAuth2RedirectsChange=function(e){t.setState({redirectUris:e,hasUnsavedChanges:!0})},t.handleRPCOriginsChange=function(e){t.setState({rpcOrigins:e,hasUnsavedChanges:!0})},t.handleFormReset=function(){null!=t.redirectsRef&&t.redirectsRef.resetRedirects(),t.setState(A({},M(t.props)))},t.setRedirectsRef=function(e){t.redirectsRef=e},t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.renderFormStatus=function(){var e=this.state,t=e.error,r=e.hasSubmitted;return null!=t?w(c.default,{type:c.default.Types.ERROR},void 0,t):r?w(c.default,{type:c.default.Types.SUCCESS},void 0,_.Messages.Alerts.SUCCESS_CHANGES_SAVED):null},a.render=function(){var e=this.props.applicationDetails,t=this.state,r=t.hasUnsavedChanges,n=t.isSubmitting,a=t.redirectUris;return w(o.Fragment,{},void 0,w(s.default,{onSubmit:this.handleFormSubmit},void 0,w(f.default,{},void 0,w(p.default,{},void 0,_.Messages.OAuth2.HEADING),w(h.default,{},void 0,_.Messages.OAuth2.SUBHEADING),w("p",{},void 0,_.Messages.OAuth2.SUBHEADING_LINK.format({link:l.default.prependBasename(O.Routes.DOCS_TOPICS_OAUTH2)})),this.renderFormStatus()),w(f.default,{},void 0,o.createElement(b.default,{onChange:this.handleOAuth2RedirectsChange,application:e,ref:this.setRedirectsRef})),e.rpc_application_state!==O.RPCApplicationApprovalStates.DISABLED?w(f.default,{},void 0,w(d.default,{},void 0,_.Messages.OAuth2.RPC_ORIGINS),w(v.default,{},void 0,_.Messages.OAuth2.RPC_ORIGINS_DESCRIPTION),o.createElement(y.default,{namePrefix:"rpcOrigins",onChange:this.handleRPCOriginsChange,type:"RPC Origin",values:e.rpc_origins,ref:this.uriInputRef})):null),w(f.default,{isFlush:!0},void 0,w(g.default,{application:e,redirectUris:a})),w(m.default,{isVisible:r,onReset:this.handleFormReset,submitting:n,onSave:this.handleFormSubmit}))},n}(o.Component);j.displayName="OAuth2";var R=a.default.connectStores([u.default],function(e){var t=e.match.params.id;return{applicationDetails:u.default.getApplication(t)}})(j);t.default=R},1691:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(1)),a=r(2230),i=(n=r(1517))&&n.__esModule?n:{default:n},u=r(3);function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}var s=function(e){return""!==e&&null!=e&&a.ValidationRules.isURL(e)},c=o.forwardRef(function(e,t){var r=e.className,n=e.namePrefix,a=e.onChange,l=e.type,c=e.values;return o.createElement(i.default,{className:r,maxLength:u.MAXIMUM_REDIRECT_URI_LENGTH,namePrefix:n,onChange:a,ref:t,type:l,validator:s,values:c})});t.default=c},1692:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(1)),a=i(r(5));i(r(25));function i(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var s=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={errorMessage:""},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.getDerivedStateFromProps=function(e,t){return{errorMessage:(r=e,n=t,o=r.readableName,a=r.name,i=r.errorMessage,u=r.value,l=r.hasError,s=null,a&&l&&(s="function"==typeof i?i(o,a,u,n.errorMessage):null!=i?i:""),s)};var r,n,o,a,i,u,l,s},n.prototype.render=function(){var e,t=this.props,r=t.hasError,n=t.label,o=t.asteriskMessage,i=t.showAsterisk,u=t.children,s=this.state.errorMessage,c=r&&s?l("div",{className:"error"},void 0,s):null;return i&&(e=l("i",{title:o,className:(0,a.default)("isRequired",{label:n})},void 0,"*")),l("span",{},void 0,n?l("span",{},void 0,l("label",{className:"form-label"},void 0,e,n),u):l("div",{className:"form-input-wrapper"},void 0,e,u),c)},n}(o.Component);s.displayName="ComponentWrapper";var c=s;t.default=c},2230:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Form",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"FormSubmit",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"FormStatus",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"TextInput",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"TextArea",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"ValidationRules",{enumerable:!0,get:function(){return l.default}});var n=s(r(2231)),o=s(r(2232)),a=s(r(2233)),i=s(r(2234)),u=s(r(2235)),l=s(r(2236));function s(e){return e&&e.__esModule?e:{default:e}}},2231:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(1));(n=r(25))&&n.__esModule;function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}var i=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={submittable:!Object.keys(t.props.requiredFields).length},t.submitFormFn=function(){var e={},r=t.refs.Form.elements;Array.from(r).forEach(function(t){if(t.name&&""!==t.name)if("radio"===t.type)"yes"===t.value&&!0===t.checked?e[t.name]="yes":e[t.name]||(e[t.name]="no");else if("checkbox"===t.type)t.checked?e[t.name+t.value]="on":e[t.name+t.value]="off";else if(-1!==t.name.indexOf("#")){if(t.value){var r=t.name.split("#")[0];e[r]?e[r][e[r].length]=t.value:e[r]=[t.value]}}else e[t.name]=t.value}),t.props.submitCallback(e)},t.requiredFieldUpdate=function(e){t.props.requiredFields[e.name]=e.isValid,e.init||t.validateForm()},t.validateForm=function(){var e=t.props.requiredFields,r=Object.keys(e).some(function(t){return!1===e[t]});t.setState({submittable:!r})},t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.componentDidMount=function(){this.props.verifyOnInit&&this.validateForm()},a.render=function(){var e=this.props,t=e.className,r=e.styles;return o.createElement("form",{ref:"Form",className:t,style:r.formBox,onSubmit:this.submitFormFn},this.props.children({styles:r,submittable:this.state.submittable,submitFormFn:this.submitFormFn,requiredFieldUpdate:this.requiredFieldUpdate}))},n}(o.Component);i.displayName="Form",i.defaultProps={styles:{},requiredFields:{},endpoint:"",verifyOnInit:!1,submitCallback:function(){}};var u=i;t.default=u},2232:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(1)),a=i(r(5));i(r(25));function i(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var s=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.submittable,r=e.isSubmitting,n=e.submitFormFn,o=e.errorText,i=e.submittingText,u=e.continueText,s=e.className;return t?r?l("div",{className:"submit-btn isSubmitting"},void 0,l("div",{className:"submit-btn-fill"},void 0,l("div",{className:"submit-btn-text"},void 0,i||u))):l("div",{className:(0,a.default)({"submit-btn":!0,isSubmitting:r},s),onClick:n},void 0,l("div",{className:"submit-btn-fill"},void 0,l("div",{className:"submit-btn-text"},void 0,u))):l("div",{className:(0,a.default)("submit-btn Error",s)},void 0,l("div",{className:"submit-btn-fill"},void 0,l("div",{className:"submit-btn-text"},void 0,o)))},n}(o.PureComponent);s.displayName="FormSubmit",s.defaultProps={isSubmitting:!1,errorText:"Please fill required fields",continueText:"Submit!"};var c=s;t.default=c},2233:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(1));(n=r(25))&&n.__esModule;function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=n;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var l=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={closed:!1},t.handleCloseStatus=function(){t.setState({closed:!0})},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){if(this.state.closed)return null;var e=this.props,t=e.statusType,r=e.label,n=e.messages,o=e.allowClosing,a=[];n.map(function(e,r){return a.push(u("div",{className:"Form-"+t+"-Item"},r,e))});var i=o?u("i",{className:"Form-Button-Close",onClick:this.handleCloseStatus},void 0,"×"):null;return u("div",{className:"Form-"+t},void 0,u("div",{className:"Form-"+t+"-Label"},void 0,r),a,i)},n}(a.Component);l.displayName="FormStatus",l.defaultProps={statusType:"Errors",label:"Unexpected Errors:",allowClosing:!0};var s=l;t.default=s},2234:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(1)),a=l(r(5)),i=l(r(1692)),u=l(r(1347));function l(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var p=function(e){var t,r;function n(t){var r;(r=e.call(this,t)||this).autofillInterval=null,r.onFocus=function(){r.setState({focused:!0})},r.onBlur=function(){r.setState({focused:!1}),r.props.isRequired&&r.onChange()},r.onChange=function(){var e=r.props,t=e.onUpdate,n=e.onChange,o=e.name,a=e.validator,i=e.hasError,u=r.inputRef,l=a(u.value);r.state.isValid!==l&&(r.setState({isValid:l&&!i}),t({name:o,isValid:l})),n&&n({name:o,text:u.value}),r.setState({hasBeenEdited:!0})},r.focusField=function(){r.inputRef.focus()},r.clearValue=function(){null!=r.inputRef&&(r.inputRef.value="")},r.getValue=function(){return null!=r.inputRef?r.inputRef.value:""};var n=t.validator,o=t.isRequired,a=t.value,i=t.name,u=t.onUpdate;if(o){var l=n(a);return u({name:i,isValid:l,init:!0}),r.state={isValid:l,hasBeenEdited:!1},function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)}return r.state={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var l=n.prototype;return l.componentDidMount=function(){var e=this;if(this.props.isRequired&&this.props.intervalCheck){var t,r=this.props,n=r.onUpdate,o=r.name,a=r.value,i=r.validator,u=this.inputRef,l=a;this.autofillInterval=setInterval(function(){u.value!==l&&(t=i(u.value),e.state.isValid!==t&&(e.setState({isValid:t}),n({name:o,isValid:t}),l=u.value))},2e3)}},l.componentWillUnmount=function(){this.autofillInterval&&(clearInterval(this.autofillInterval),this.autofillInterval=null)},l.render=function(){var e=this,t=this.props,r=t.name,n=t.readableName,l=t.value,s=t.showAsterisk,p=t.placeholder,f=t.label,d=t.prefix,v=t.errorMessage,h=t.onChange,y=t.className,m=this.state,b=m.isValid,g=m.focused,O=m.hasBeenEdited&&!b||this.props.hasError,_=b&&!O,S=this.getValue(),C=d?c("div",{className:(0,a.default)("text-input-prefix",{isValid:_,hasError:O,focus:g}),onClick:this.focusField},void 0,d):null;return c("div",{className:"form-inputWrapper text-input"},void 0,c(i.default,{label:f,showAsterisk:s,hasError:O,errorMessage:v,name:r,readableName:n,className:y,value:S},void 0,C,o.createElement("input",{onFocus:this.onFocus,type:"text",className:(0,a.default)("Input","TextInput",u.default.textInput,{isValid:_,hasError:O,prefixed:d}),name:r,defaultValue:l,placeholder:p,ref:function(t){return e.inputRef=t},onBlur:this.onBlur,onChange:h})))},n}(o.PureComponent);p.displayName="TextInput",p.defaultProps={value:"",isRequired:!1,showAsterisk:!1,intervalCheck:!1,validator:function(e){return e.length>0},placeholder:"",onUpdate:function(){}};var f=p;t.default=f},2235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(1)),a=u(r(5)),i=(u(r(25)),u(r(1692)));function u(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var c=function(e){var t,r;function n(t){var r;(r=e.call(this,t)||this).autofillInterval=null,r.onChange=function(){var e=r.props,t=e.onUpdate,n=e.name,o=e.validator,a=r.refs[n],i=o(a.value);r.state.isValid!==i&&(r.setState({isValid:i,value:a.value}),t({name:n,isValid:i,value:a.value})),r.setState({hasBeenEdited:!0})},r.handleBlur=function(){r.props.isRequired&&r.onChange()};var n=t.validator,o=t.isRequired,a=t.value,i=t.name,u=t.onUpdate;if(o){var l=n(a);return u({name:i,isValid:l,value:a,init:!0}),r.state={isValid:l,value:a},function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)}return r.state={value:a},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var u=n.prototype;return u.componentDidMount=function(){var e=this;if(this.props.isRequired&&this.props.intervalCheck){var t,r=this.props,n=r.onUpdate,o=r.name,a=r.value,i=r.validator,u=this.refs[o],l=a;this.autofillInterval=setInterval(function(){u.value!==l&&(t=i(u.value),e.state.isValid!==t&&(e.setState({isValid:t,value:u.value}),n({name:o,isValid:t,value:u.value}),l=u.value))},2e3)}},u.componentWillUnmount=function(){this.autofillInterval&&(clearInterval(this.autofillInterval),this.autofillInterval=null)},u.render=function(){var e=this.props,t=e.name,r=e.value,n=e.showAsterisk,u=e.placeholder,l=e.label,c=e.errorMessage,p=e.className,f=this.state,d=f.hasBeenEdited,v=f.isValid,h=d&&!v||this.props.hasError,y=v&&!h;return s("div",{className:"form-inputWrapper type-textarea"},void 0,s(i.default,{label:l,showAsterisk:n,hasError:h,errorMessage:c,name:t,value:this.state.value},void 0,o.createElement("textarea",{name:t,placeholder:u,ref:t,defaultValue:r,onBlur:this.handleBlur,className:(0,a.default)("Input","TextArea",p,{hasError:h,isValid:y})})))},n}(o.PureComponent);c.displayName="TextArea",c.defaultProps={value:"",isRequired:!1,intervalCheck:!1,showAsterisk:!1,validator:function(e){return e.length>0},placeholder:"",onUpdate:function(){}};var p=c;t.default=p},2236:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={isEmail:function(e){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i.test(e)},isURL:function(e){return/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%\/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(e)},isURLOrigin:function(e){return/^(file:\/\/|https?:\/\/(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\.)+[A-Z]{2,63}\.?|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::\d+)?)$/i.test(e)},twitch:function(e){return null!=e.match(/^[a-zA-Z0-9_]{1,25}$/)},reddit:function(e){return null!=e.match(/^[a-zA-Z0-9_-]{3,20}$/)},youtube:function(e){return null!=e.match(/^(channel|user|c)\/[a-zA-Z0-9_-]{1,}$/)},twitter:function(e){return null!=e.match(/^[a-zA-Z0-9_]{1,15}$/)},facebook:function(e){return null!=e.match(/(?:https?:\/\/)?(?:www\.)?facebook\.com\/.(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*([\w\-.]*)/)},hoodieSize:function(e){return null!=e.match(/^(xxs|xs|s|m|l|xl|2xl|3xl)$/i)},nonExpiringInviteLink:function(e){return null!=e.match(/^https:\/\/discord.gg\/[a-zA-Z0-9]{7}$/)}}},2237:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=f(r(1)),a=f(r(408)),i=(c(r(1517)),c(r(415))),u=c(r(1425)),l=c(r(1691)),s=r(18);function c(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function d(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var v=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).uriInputRef=o.createRef(),t.handleUriInputChange=function(e){t.props.onChange(e)},t.resetRedirects=function(){var e=t.uriInputRef.current;null!=e&&e.resetInputFields()},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.application;return null==e?null:d(o.Fragment,{},void 0,d(i.default,{},void 0,s.Messages.OAuth2.REDIRECT_SECTION_HEADING),d(u.default,{},void 0,s.Messages.OAuth2.REDIRECT_SECTION_SUBHEADING),d(a.default,{},void 0,d(a.GridSection,{},void 0,d(a.GridChild,{columnSpread:12,columnSpreadMedium:8,columnSpreadLarge:6,columnSpreadExtraLarge:6},void 0,o.createElement(l.default,{namePrefix:"redirect_uris",onChange:this.handleUriInputChange,type:"redirect",values:e.redirect_uris,ref:this.uriInputRef})))))},n}(o.Component);t.default=v,v.displayName="OAuth2Redirects"},2238:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=O(r(1)),a=r(193),i=O(r(408)),u=b(r(1429)),l=b(r(183)),s=b(r(29)),c=b(r(1687)),p=b(r(1472)),f=b(r(409)),d=b(r(415)),v=b(r(1425)),h=b(r(2239)),y=r(3),m=r(18);function b(e){return e&&e.__esModule?e:{default:e}}function g(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function O(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function S(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var C=function(e){var t,r;function n(t){var r;(r=e.call(this,t)||this).handlePermissionsChange=function(e){r.setState({permissions:e})},r.handleScopeChange=function(e){r.setState({activeScopes:e,showCalculator:y.OAuth2Scopes.BOT in e})},r.handleredirectUriselection=function(e){r.setState({activeRedirectUri:e.value})},r.renderRedirectUriOption=function(e){return e.value};var n=(0,a.parse)(location.search);return r.state={activeScopes:null,activeRedirectUri:n.redirect_uri||(t.redirectUris?t.redirectUris[0]:null),permissions:0,showCalculator:"true"===n.is_bot,querystring:n},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var b=n.prototype;return b.getRedirectUrlOptions=function(){var e=this.props.redirectUris;return null==e?[]:e.map(function(e){return{name:e,value:e}})},b.renderPermissionsCalculator=function(){return this.state.showCalculator?S(i.GridSection,{},void 0,S(i.GridChild,{columnSpread:12},void 0,S(f.default,{},void 0,m.Messages.OAuth2.BOT_PERMISSIONS),S(u.default,{},void 0,S(c.default,{onChange:this.handlePermissionsChange,showInteger:!1})))):null},b.render=function(){var e=this.state,t=e.activeRedirectUri,r=e.activeScopes,n=e.permissions,a=e.querystring,c=this.props.application,b=a.is_bot,g=a.require_grant,O="true"===b||null!=r&&y.OAuth2Scopes.BOT in r,C="true"===g;return S(o.Fragment,{},void 0,S(d.default,{},void 0,m.Messages.OAuth2.URL_GENERATOR_HEADING),S(v.default,{},void 0,m.Messages.OAuth2.URL_GENERATOR_SUBHEADING),S(i.default,{},void 0,S(i.GridSection,{},void 0,S(i.GridChild,{columnSpread:6,columnSpreadSmall:12,columnSpreadExtraSmall:12},void 0,S(f.default,{},void 0,m.Messages.OAuth2.SELECT_REDIRECT_URL),S(l.default,{value:t,clearable:!1,searchable:!1,options:this.getRedirectUrlOptions(),onChange:this.handleredirectUriselection,optionRenderer:this.renderRedirectUriOption,valueRenderer:this.renderRedirectUriOption})),S(i.GridChild,{columnSpread:6,columnSpreadSmall:12,columnSpreadExtraSmall:12},void 0,S(f.default,{},void 0,m.Messages.OAuth2.APP_CLIENT_ID),S(p.default,{textToCopy:c.id},void 0,S(s.default,{family:s.default.Family.CODE},void 0,c.id)))),S(i.GridSection,{},void 0,S(i.GridChild,{columnSpread:12},void 0,S(f.default,{},void 0,m.Messages.OAuth2.SCOPES),S(u.default,{},void 0,o.createElement(h.default,_({clientId:c.id,permissions:n,onChange:this.handleScopeChange,isBot:O,redirectUri:t,requireGrant:C},a))))),this.renderPermissionsCalculator()))},n}(o.PureComponent);C.displayName="OAuth2UrlGenerator";var P=C;t.default=P},2239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=g(r(1)),a=r(193),i=r(73),u=r(100),l=r(1688),s=m(r(1435)),c=g(r(408)),p=m(r(99)),f=m(r(1472)),d=m(r(409)),v=r(3),h=r(18),y=m(r(1316));function m(e){return e&&e.__esModule?e:{default:e}}function b(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return b=function(){return e},e}function g(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=b();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function O(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function _(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var S=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleChange=function(){var e=t.props,r=e.onChange,n=e.scope;r&&r(n)},t}_(t,e);var r=t.prototype;return r.isChecked=function(){var e=this.props,t=e.scopes;return e.scope in t},r.render=function(){return O(s.default,{className:y.default.checkbox,onChange:this.handleChange,type:s.default.Types.INVERTED,color:u.Colors.WHITE,value:this.isChecked()},void 0,O("div",{className:y.default.checkboxLabel},void 0,this.props.scope))},t}(o.Component);S.displayName="ScopeCheckbox";var C=function(e){function t(){for(var t,r,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=e.call.apply(e,[this].concat(o))||this).state={scopes:r.props.isBot?(t={},t[v.OAuth2Scopes.BOT]=v.OAuth2Scopes.BOT,t):{}},r.handleScopeChange=function(e){var t=r.state.scopes,n=r.props.onChange;e in t?delete t[e]:t[e]=e,r.setState({scopes:t}),n&&n(t)},r.handleCopyClick=function(){r.trackCopyAction()},r.trackCopyAction=function(){var e=p.default.getApplicationProperties(r.props.location)||{};p.default.track(v.AnalyticsEvents.AUTH_URL_COPIED,e)},r}_(t,e);var r=t.prototype;return r.generateOAuth2URL=function(){var e=this.state.scopes,t=this.props,r=t.clientId,n=t.redirectUri,o=t.requireGrant,i=this.props.permissions,u=o||Object.keys(e).some(function(e){return e!==v.OAuth2Scopes.BOT});if(!r)return h.Messages.DeveloperPages.MISSING_CLIENT_ID;if(u&&!n)return h.Messages.DeveloperPages.MISSING_REDIRECT_URI;if(0===Object.keys(e).length)return h.Messages.DeveloperPages.TOO_FEW_SCOPES;i=(i&l.ADMIN_FLAG)===l.ADMIN_FLAG?l.ADMIN_FLAG:i;var s={permissions:v.OAuth2Scopes.BOT in e?i:void 0,client_id:r,response_type:u?"code":void 0,redirect_uri:n||void 0,scope:Object.keys(e).map(function(t){return e[t]}).join(" ")||void 0};return""+location.protocol+window.GLOBAL_ENV.API_ENDPOINT+v.Endpoints.OAUTH2_AUTHORIZE+"?"+(0,a.stringify)(s)},r.renderScopeCheckboxes=function(){for(var e=this,t=Object.keys(v.OAuth2Scopes),r=Math.floor(t.length/3),n=t.length%3,o=[],a=0,i=0;i<3;i++){var u=n-- >0?a+r:a+r-1,l=t.slice(a,u+1);a=u+1,o.push(O(c.GridChild,{columnSpread:12,columnSpreadSmallMedium:12,columnSpreadMedium:4,columnSpreadLarge:4,columnSpreadExtraLarge:4},i,l.map(function(t){return O(S,{onChange:e.handleScopeChange,scopes:e.state.scopes,scope:v.OAuth2Scopes[t]},v.OAuth2Scopes[t])})))}return O(c.GridSection,{},void 0,o)},r.render=function(){var e=this.generateOAuth2URL(),t=!/^http/.test(e);return O(c.default,{},void 0,this.renderScopeCheckboxes(),O(c.GridSection,{},void 0,O(c.GridChild,{columnSpread:12},void 0,O(d.default,{},void 0,h.Messages.DeveloperPages.AUTHORIZATION_URL),O(f.default,{isButtonDisabled:t,onCopy:this.handleCopyClick,type:f.default.Types.TEXTBOX,textToCopy:e}))))},t}(o.Component);C.displayName="OAuth2URLGeneratorScopes";var P=(0,i.withRouter)(C);t.default=P}}]);
//# sourceMappingURL=f17a7710d9756f63b5fa.js.map