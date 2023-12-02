"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[5014],{69274:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o=A(r(67294)),a=r(55558),i=S(r(36211)),l=A(r(45733)),s=A(r(83941)),u=S(r(41908)),d=S(r(92974)),f=A(r(16997)),c=S(r(24509)),p=S(r(11947)),h=S(r(62441)),v=S(r(68286)),m=A(r(84455)),g=S(r(74257)),y=S(r(80828)),M=S(r(79950)),_=r(19290),C=r(70348),O=r(34596);function S(e){return e&&e.__esModule?e:{default:e}}function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function A(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null
;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}function E(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var l=new Array(i),s=0;s<i;s++)l[s]=arguments[s+3];t.children=l}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function R(e,t){R=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return R(e,t)}var k=E(v.default,{defaultValue:null,name:"entitlementStartsAt",isModalInput:!0}),I=E(v.default,{defaultValue:null,name:"entitlementEndsAt",isModalInput:!0}),N=E(M.default,{name:"amount"}),P=E(M.default,{name:"description",maxLength:128}),D=E(m.GridChild,{columnSpread:12},void 0,E(c.default,{})),G=E(y.default,{}),w=function(e){!function(e,t){e.prototype=Object.create(t.prototype)
;e.prototype.constructor=e;R(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=e.call.apply(e,[this].concat(n))||this).state={isLoading:!0,isSubmitting:!1,selectedSkuId:"",selectedBranchId:"",error:null};t.handleFormSubmit=function(e){var r=t.props,n=r.onClose,o=r.match,a=Number(e.amount);Number.isNaN(a)||a<1||a>C.MAXIMUM_GIFT_CODES_IN_BATCH?t.setState({error:O.Messages.GiftCodes.AMOUNT_MUST_BE_NUMBER.format({maxNum:C.MAXIMUM_GIFT_CODES_IN_BATCH})}):t.setState({isSubmitting:!0},(function(){s.createGiftCodeBatch(e,o.params.id).then(n).catch((function(e){t.setState({isSubmitting:!1,error:(0,_.getMessageFromAPIError)(e,O.Messages.Errors.ERROR_SUBMITTING_FORM.format())})}))}))};t.handleRequestClose=function(){var e=t.props.onClose;t.state.isSubmitting||e()};t.handleSkuSelectChange=function(e){t.setState({selectedSkuId:e.value})};t.handleBranchIdSelectChange=function(e){t.setState({selectedBranchId:e.value})};return t}var r=t.prototype
;r.componentDidMount=function(){var e=this,t=this.props.match;l.fetchBranches(t.params.id).then((function(){e.setState({isLoading:!1})})).catch((function(t){e.setState({isLoading:!1,error:(0,_.getMessageFromAPIError)(t,O.Messages.Errors.ERROR_LOADING_BRANCHES.format())})}))};r.getSelectOptions=function(e){return null==e?[]:e.map((function(e){return{label:e.name.default||e.name,value:e.id}}))};r.renderErrorMessage=function(){var e=this.props.branches,t=this.state.error;return null!=t?E(f.ModalAlert,{},void 0,t):null!=e&&0===e.length?E(f.ModalAlert,{},void 0,O.Messages.GiftCodes.APP_MUST_HAVE_BRANCHES):null};r.renderModalBody=function(){var e=this.props,t=e.skus,r=e.branches,n=this.state,o=n.selectedSkuId,a=n.selectedBranchId;return E(m.default,{},void 0,E(m.GridSection,{},void 0,E(m.GridChild,{columnSpread:6},void 0,E(d.default,{isRequired:!0},void 0,O.Messages.GiftCodes.CHOOSE_SKU),E(g.default,{name:"skuId",clearable:!1,options:this.getSelectOptions(t),
onChange:this.handleSkuSelectChange,value:o})),E(m.GridChild,{columnSpread:6},void 0,E(d.default,{isRequired:!0},void 0,O.Messages.GiftCodes.CHOOSE_BRANCH),E(g.default,{name:"branchId",clearable:!1,options:this.getSelectOptions(r),onChange:this.handleBranchIdSelectChange,value:a})),E(m.GridChild,{columnSpread:6},void 0,E(d.default,{},void 0,O.Messages.GiftCodes.VALID_FROM),k),E(m.GridChild,{columnSpread:6},void 0,E(d.default,{},void 0,O.Messages.GiftCodes.VALID_UNTIL),I),E(m.GridChild,{columnSpread:6},void 0,E(d.default,{isRequired:!0},void 0,O.Messages.Common.AMOUNT),N),E(m.GridChild,{columnSpread:6},void 0,E(d.default,{isRequired:!0},void 0,O.Messages.Common.DESCRIPTION),P),D))};r.render=function(){var e=this.props,t=e.isOpen,r=e.branches,n=this.state,o=n.isSubmitting,a=n.isLoading;return E(f.default,{onRequestClose:this.handleRequestClose,open:t},void 0,E(u.default,{onSubmit:this.handleFormSubmit
},void 0,E(f.ModalContent,{},void 0,E(f.ModalHeader,{},void 0,O.Messages.GiftCodes.CREATE_GIFT_CODES),this.renderErrorMessage(),a?G:this.renderModalBody()),E(f.ModalFooter,{},void 0,E(f.ModalCancel,{onClick:this.handleRequestClose},void 0,O.Messages.Actions.CANCEL),E(f.ModalConfirm,{type:"submit",submitting:o,disabled:a||null==r||0===r.length},void 0,O.Messages.Actions.GENERATE))))};return t}(o.Component);w.displayName="GiftCodeModal";var T=(0,a.withRouter)(i.default.connectStores([h.default,p.default],(function(e){var t=e.match.params.id;return{skus:h.default.getSkus(t),branches:p.default.getBranches(t)}}))(w));t.default=T},216:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0
;var n,o=I(r(67294)),a=R(r(95639)),i=R(r(23855)),l=R(r(36211)),s=I(r(45733)),u=I(r(83941)),d=R(r(67177)),f=R(r(77932)),c=R(r(31055)),p=R(r(81061)),h=R(r(86750)),v=R(r(86460)),m=R(r(58350)),g=R(r(11947)),y=R(r(67045)),M=R(r(56117)),_=R(r(80828)),C=I(r(25991)),O=r(19290),S=R(r(69274)),b=r(70348),A=r(34596),E=R(r(59790));function R(e){return e&&e.__esModule?e:{default:e}}function k(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(k=function(e){return e?r:t})(e)}function I(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=k(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}function N(e,t,r,o){
n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var l=new Array(i),s=0;s<i;s++)l[s]=arguments[s+3];t.children=l}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function P(){P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return P.apply(this,arguments)}function D(e,t){D=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return D(e,t)}var G=N(_.default,{}),w=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;D(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=e.call.apply(e,[this].concat(n))||this).state={isLoading:!0,error:null,
isModalOpen:!1,modalKey:1};t.getTableRows=function(){var e=t.props.giftCodeBatches;return null==e?[]:e.map((function(e){return P({amount:e.target_amount,validDates:t.getBatchDateRange(e),branchName:t.getBranchName(e),downloadLink:t.renderDownloadLink(e),rowProps:{className:E.default.tableRow}},e)}))};t.handleOpenModal=function(){t.setState({isModalOpen:!0})};t.handleCloseModal=function(){t.setState((function(e){return{isModalOpen:!1,modalKey:e.modalKey+1}}))};t.handleClickDownloadLink=function(e,r){if(null!=e){var n=t.props.match;u.fetchGiftCodeBatchCSV(n.params.id,e,r).then((function(){t.setState({error:null})})).catch((function(e){t.setState({error:(0,O.getMessageFromAPIError)(e,A.Messages.Errors.ERROR_DOWNLOADING_CSV.format())})}))}};return t}var r=t.prototype;r.componentDidMount=function(){var e=this,t=this.props.match.params.id,r=[u.fetchGiftCodeBatchesForApplication(t),s.fetchBranches(t)];Promise.all(r).then((function(){e.setState({isLoading:!1})})).catch((function(t){var r=(0,
O.getMessageFromAPIError)(t,A.Messages.Errors.ERROR_LOADING_GIFT_CODE_BATCHES.format());e.setState({isLoading:!1,error:r})}))};r.getBatchDateRange=function(e){if(null==e.entitlement_starts_at&&null==e.entitlement_ends_at)return"";var t=null==e.entitlement_starts_at?null:(0,a.default)((0,i.default)(e.entitlement_starts_at),b.DATE_FORMAT),r=null==e.entitlement_ends_at?null:(0,a.default)((0,i.default)(e.entitlement_ends_at),b.DATE_FORMAT);return null==t?A.Messages.GiftCodes.ENDS_AT.format({endsAt:r}):null==r?A.Messages.GiftCodes.STARTS_AT.format({startsAt:t}):t+" – "+r};r.getBranchName=function(e){var t=this.props.branches;if(null==t)return"";var r=e.entitlement_branches[0],n=t.find((function(e){return e.id===r}));return null==n?"":n.name};r.renderDownloadLink=function(e){return N(d.default,{onClick:this.handleClickDownloadLink,filename:e.description,id:e.id,className:E.default.anchorTag},void 0,A.Messages.GiftCodes.DOWNLOAD_CSV)};r.renderTable=function(){var e=this.props.giftCodeBatches
;return this.state.isLoading?G:null!=e&&0===e.length?N(f.default,{imageUri:b.Images.EMPTY_GENERIC,primaryCopy:A.Messages.GiftCodes.NO_CODES_PRIMARY,secondaryCopy:A.Messages.GiftCodes.NO_CODES_SECONDARY}):N(C.default,{columns:[{heading:A.Messages.Common.AMOUNT,key:"amount",cellProps:{columnSpread:1}},{heading:A.Messages.Common.DESCRIPTION,key:"description",cellProps:{columnSpread:3}},{heading:A.Messages.GiftCodes.VALID_DATE_RANGE,key:"validDates",cellProps:{columnSpread:3}},{heading:A.Messages.GiftCodes.BRANCH_NAME,key:"branchName",cellProps:{columnSpread:3}},{key:"downloadLink",cellProps:{columnSpread:2}}],rows:this.getTableRows(),className:E.default.table,tableWrapPoint:C.ViewportWrapWidth.MEDIUM})};r.renderErrorAlert=function(){var e=this.state.error;return null==e?null:N(c.default,{type:c.default.Types.ERROR},void 0,e)};r.render=function(){var e=this.state,t=e.isModalOpen,r=e.modalKey
;return N(o.Fragment,{},void 0,N(h.default,{},void 0,N(p.default,{},void 0,A.Messages.GiftCodes.PAGE_HEADING),N(m.default,{isFlush:!0},void 0,A.Messages.GiftCodes.PAGE_SUBHEADING),this.renderErrorAlert()),N(h.default,{isFlush:!0},void 0,N("div",{className:E.default.pageSectionHeadingWrapper},void 0,N(v.default,{},void 0,A.Messages.GiftCodes.GENERATED_GIFT_CODES),N(M.default,{onClick:this.handleOpenModal},void 0,A.Messages.GiftCodes.CREATE_GIFT_CODES)),this.renderTable()),N(S.default,{isOpen:t,onClose:this.handleCloseModal},r))};return t}(o.Component);w.displayName="GiftCodes";var T=l.default.connectStores([g.default,y.default],(function(e){var t=e.match.params.id;return{giftCodeBatches:y.default.getGiftCodeBatchesForApplication(t),branches:g.default.getBranches(t)}}))(w);t.default=T},67177:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(67294)),i=(n=r(56117))&&n.__esModule?n:{default:n};function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function s(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=n;else if(i>1){for(var l=new Array(i),s=0;s<i;s++)l[s]=arguments[s+3];t.children=l}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function u(e,t){
u=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return u(e,t)}var d=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;u(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=e.call.apply(e,[this].concat(n))||this).handleButtonClick=function(){var e=t.props,r=e.id,n=e.filename,o=e.onClick;null!=o&&o(r,n)};return t}t.prototype.render=function(){var e=this.props,t=e.className,r=e.children,n=e.href,o=e.onClick;return s(i.default,{className:t,look:i.default.Look.LINK,height:i.default.Height.AUTO,color:i.default.Color.LINK,href:n,onClick:null!=o?this.handleButtonClick:null},void 0,r)};return t}(a.Component);t.default=d;d.displayName="CsvButton"},24509:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e)
;var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n)}(r(67294));var n,o,a=(n=r(45758))&&n.__esModule?n:{default:n},i=r(34596);function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function s(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=n;else if(i>1){for(var l=new Array(i),s=0;s<i;s++)l[s]=arguments[s+3];t.children=l}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var u=function(e,t){return s(a.default,{tag:"span",color:a.default.Colors.RED},t,e)}
;u.displayName="requiredIndicatorHook";var d=function(){return s(a.default,{color:a.default.Colors.PRIMARY_400,size:a.default.Sizes.MEDIUM_SMALL,weight:a.default.Weights.SEMIBOLD},void 0,i.Messages.Common.FIELDS_MARKED.format({requiredIndicatorHook:u}))};d.displayName="RequiredDescription";var f=d;t.default=f}}]);
//# sourceMappingURL=872c48e3c5a39f136588.js.map