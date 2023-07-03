"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[17810,30241],{173572:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(506884),a=t(856864),o=t(173436),s=t(218276),i=t(390504),l=t(666492),c=t(688417),u=t(461061),d=t(228031);const h={createChannel:function(e){var n=e.guildId,t=e.type,h=e.name,p=e.permissionOverwrites,f=void 0===p?[]:p,E=e.bitrate,C=e.userLimit,N=e.parentId,y=e.skuId,m=e.branchId;o.Z.dispatch({type:"CREATE_CHANNEL_MODAL_SUBMIT"});var v={type:t,name:h,permission_overwrites:f};null!=E&&E!==u.epw&&(v.bitrate=E);null!=C&&C>0&&(v.user_limit=C);null!=N&&(v.parent_id=N);if(t===u.d4z.GUILD_STORE){if(null==y)throw new Error("Unexpected missing SKU");v.sku_id=y;v.branch_id=m}return l.Z.post({url:u.ANM.GUILD_CHANNELS(n),body:v,oldFormErrors:!0,trackedActionData:{event:r.a9.CHANNEL_CREATE,properties:function(e){var n,t;return(0,a.iG)({is_private:f.length>0,channel_id:null==e||null===(n=e.body)||void 0===n?void 0:n.id,
channel_type:null==e||null===(t=e.body)||void 0===t?void 0:t.type})}}}).then((function(e){i.Z.isOptInEnabled(n)&&c.Z.updateChannelOverrideSettings(n,e.body.id,{flags:d.ic.OPT_IN_ENABLED});s.Z.checkGuildTemplateDirty(n);return e}),(function(e){o.Z.dispatch({type:"CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",errors:e.body});throw e}))}}},217810:(e,n,t)=>{t.r(n);t.d(n,{AddMembers:()=>Qe,default:()=>nn});var r=t(785893),a=t(667294),o=t(294184),s=t.n(o),i=t(441143),l=t.n(i),c=t(496486),u=t.n(c),d=t(506884),h=t(87913),p=t(363010),f=t(331535),E=t(173572),C=t(354290),N=t(266142),y=t(173436);function m(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function v(e){v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return v(e)}function _(e,n){return!n||"object"!==b(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}
function g(e,n){g=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return g(e,n)}var b=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function O(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=v(e);if(n){var a=v(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return _(this,t)}}var A={};var I=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&g(e,n)}(t,e);var n=O(t);function t(){m(this,t);return n.apply(this,arguments)}var r=t.prototype;r.getBranches=function(e){var n
;return null!==(n=A[e])&&void 0!==n?n:[]};r.__getLocalVars=function(){return{applicationBranches:A}};return t}(p.ZP.Store);I.displayName="ApplicationBranchStore";const T=new I(y.Z,{OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS:function(e){var n=e.applicationId,t=e.branches;A[n]=t},LOGOUT:function(){A={}}});var S=t(959797);function R(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function L(e){L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return L(e)}function M(e,n){return!n||"object"!==j(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function x(e,n){x=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return x(e,n)}var j=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var n=function(){
if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=L(e);if(n){var a=L(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return M(this,t)}}var w=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&x(e,n)}(t,e);var n=P(t);function t(){R(this,t);var e;(e=n.apply(this,arguments)).handleChange=function(n){e.props.onChange(n)};return e}var a=t.prototype;a.componentDidMount=function(){var e=this.props,n=e.applicationId,t=e.branches,r=e.onHasBranchesChange;(0,N.Z)(n);null==r||r(t.length>0)};a.componentDidUpdate=function(e){
var n=this.props,t=n.onHasBranchesChange,r=n.branches.length>0;null!=t&&r!==e.branches.length>0&&t(r)};a.render=function(){var e=this.props,n=e.branches,t=e.selectedBranchId,a=e.applicationId,o=e.includeMaster,s=e.hide,i=e.className;if(0===n.length||s)return null;var l=o?n:n.filter((function(e){return e.id!==a}));return(0,r.jsx)(f.q4,{options:l.map((function(e){return{label:e.getName(a),value:e.id}})),placeholder:S.Z.Messages.CREATE_STORE_CHANNEL_SELECT_BRANCH,value:t,onChange:this.handleChange,className:i})};return t}(a.Component);w.defaultProps={includeMaster:!1};const Z=p.ZP.connectStores([T],(function(e){var n=e.applicationId;return{branches:T.getBranches(n)}}))(w);var D=t(512172),G=t(512238);function U(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function H(e){H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return H(e)}function B(e,n){
return!n||"object"!==k(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function z(e,n){z=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return z(e,n)}var k=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function F(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=H(e);if(n){var a=H(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return B(this,t)}}var Y=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,
writable:!0,configurable:!0}});n&&z(e,n)}(t,e);var n=F(t);function t(){U(this,t);var e;(e=n.apply(this,arguments)).handleChange=function(n){e.props.onChange(n)};return e}var a=t.prototype;a.componentDidMount=function(){var e=this.props,n=e.applicationId,t=e.skus,r=e.selectedSkuId,a=e.onChange;null==t?(0,D.Kr)(n,!1):1===t.length&&null==r&&a(t[0].id)};a.componentDidUpdate=function(){var e=this.props,n=e.skus,t=e.selectedSkuId,r=e.onChange;null!=n&&1===n.length&&null==t&&r(n[0].id)};a.render=function(){var e=this.props,n=e.skus,t=e.selectedSkuId,a=e.className,o=null!=n&&0===n.length;return(0,r.jsx)(f.q4,{options:null!=n?n.map((function(e){return{label:e.name,value:e.id}})):[],placeholder:o?S.Z.Messages.CREATE_STORE_CHANNEL_NO_SKUS:S.Z.Messages.CREATE_STORE_CHANNEL_SELECT_SKU,value:t,onChange:this.handleChange,className:a,isDisabled:o})};return t}(a.Component);const V=p.ZP.connectStores([G.Z],(function(e){var n=e.applicationId;return{skus:G.Z.getForApplication(n)}}))(Y)
;var K=t(780921),W=t(23816),X=t(53211),q=t(304856),J=t(87310),Q=t(743175),$=t(655695),ee=t(531648),ne=t(20157),te=t(830241),re=t(53551),ae=t(356004),oe=t(367124),se=t(212218),ie=t(653772),le=t(940712),ce=t(105405),ue=t(859023),de=t(554062),he=t(954766),pe=t(272729),fe=t(976703),Ee=t(733399),Ce=t(932291),Ne=t(301818),ye=t(220578),me=t(519073),ve=t(555784),_e=t(915306),ge=t(806499),be=t(806008),Oe=t(875389),Ae=t(67416),Ie=t(897576),Te=t(226300),Se=t(268333),Re=t(95467),Le=t(461061),Me=t(862045),xe=t(809633),je=t(375650),Pe=t(740998),we=t.n(Pe);function Ze(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function De(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ge(e,n,t,r,a,o,s){try{var i=e[o](s),l=i.value}catch(e){t(e);return}i.done?n(l):Promise.resolve(l).then(r,a)}function Ue(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){
var o=e.apply(n,t);function s(e){Ge(o,r,a,s,i,"next",e)}function i(e){Ge(o,r,a,s,i,"throw",e)}s(void 0)}))}}function He(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function Be(e){Be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return Be(e)}function ze(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){He(e,n,t[n])}))}return e}function ke(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){
return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function Fe(e,n){return!n||"object"!==Ke(n)&&"function"!=typeof n?De(e):n}function Ye(e,n){Ye=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return Ye(e,n)}function Ve(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(r=t.next()).done);s=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){i=!0;a=e}finally{try{s||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return Ze(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t)
;if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ze(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ke=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function We(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=Be(e);if(n){var a=Be(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return Fe(this,t)}}var Xe,qe=function(e,n){var t,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},
"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:s.label++;return{value:o[1],done:!1};case 5:s.label++;r=o[1];o=[0];continue;case 7:o=s.ops.pop();s.trys.pop();continue;default:if(!(a=s.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1];a=o;break}if(a&&s.label<a[2]){s.label=a[2];s.ops.push(o);break}a[2]&&s.ops.pop();s.trys.pop();continue}o=n.call(e,s)}catch(e){o=[6,e];r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};function Je(e){
var n=e.isPrivate,t=e.showStoreChannelOption,a=e.showAnnouncementChannelOption,o=e.canCreateStageChannel,s=e.canCreateForumChannel,i=[{icon:n?Ee.Z:fe.Z,label:S.Z.Messages.TEXT_CHANNEL_TYPE,value:Le.d4z.GUILD_TEXT,description:S.Z.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION}];i.push({icon:n?ge.Z:_e.Z,label:S.Z.Messages.VOICE_CHANNEL_TYPE,value:Le.d4z.GUILD_VOICE,description:S.Z.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION});if(s){i.push({icon:n?Ne.Z:Ce.Z,label:S.Z.Messages.FORUM_CHANNEL_TYPE,value:Le.d4z.GUILD_FORUM,description:(0,r.jsxs)(f.xv,{variant:"text-sm/normal",color:"header-secondary",className:we().radioLabelDescription,children:[S.Z.Messages.FORUM_CHANNEL_DESCRIPTION,(0,r.jsx)("br",{}),S.Z.Messages.LEARN_MORE_CLICK.format({onClick:function(){open(xe.V8)}})]})})}a&&i.push({icon:ve.Z,iconSize:24,label:S.Z.Messages.NEWS_CHANNEL_TYPE,value:Le.d4z.GUILD_ANNOUNCEMENT,description:S.Z.Messages.CREATE_NEWS_CHANNEL_DESCRIPTION});t&&i.push({icon:Oe.Z,iconSize:24,
label:S.Z.Messages.STORE_CHANNEL_TYPE,value:Le.d4z.GUILD_STORE,description:S.Z.Messages.CREATE_STORE_CHANNEL_DESCRIPTION});o&&i.push({icon:be.Z,iconSize:24,label:S.Z.Messages.STAGE_VOICE_CHANNEL_TYPE,value:Le.d4z.GUILD_STAGE_VOICE,description:S.Z.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION});return i.map((function(e){var n=e.icon,t=e.iconSize,a=e.label,o=e.value,s=e.description,i=e.isNew;return{name:(0,r.jsxs)("div",{className:we().radioItemName,children:[(0,r.jsx)(n,ke(ze({},null!=t?{width:t,height:t}:null),{className:we().icon,background:we().background,foreground:we().foreground})),(0,r.jsxs)("div",{children:[(0,r.jsxs)(f.xv,{variant:"text-md/medium",className:we().radioLabelName,children:[a,i?(0,r.jsx)(Te.IG,{text:S.Z.Messages.CHANNEL_TYPE_NEW,className:we().newBadge,color:h.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER}):null]}),"string"==typeof s?(0,r.jsx)(f.xv,{variant:"text-sm/normal",color:"header-secondary",className:we().radioLabelDescription,children:s}):s]})]}),value:o,
radioBarClassName:we().radioBar,radioItemIconClassName:we().radioBarIcon}}))}!function(e){e.CHANNEL_INFO="CHANNEL_INFO";e.ADD_MEMBERS="ADD_MEMBERS"}(Xe||(Xe={}));function Qe(e){var n=e.onChange,t=e.guildId,o=e.channelType,s=e.description,i=Ve(a.useState({}),2),l=i[0],c=i[1],u=(0,p.e7)([ie.Z],(function(){return ie.Z.getGuild(t)})),d=o===Le.d4z.GUILD_STAGE_VOICE;a.useEffect((function(){n(l)}),[l,n]);return null==u?null:(0,r.jsx)(Ae.hz,{className:we().addMembersContainer,children:(0,r.jsx)(J.AddMembersBody,{guild:u,channel:null,permission:d?ee.yP:(0,re.CG)(o),pendingAdditions:l,setPendingAdditions:c,isStageChannel:d,description:s})})}function $e(e){switch(e){case Le.d4z.GUILD_CATEGORY:return S.Z.Messages.CATEGORY_NAME_PLACEHOLDER;case Le.d4z.GUILD_FORUM:return S.Z.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER;default:return S.Z.Messages.CHANNEL_NAME_PLACEHOLDER}}var en=function(e){!function(e,n){
if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&Ye(e,n)}(o,e);var n=We(o);function o(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o);var t;(t=n.call(this,e)).headerId=(0,pe.hQ)();t.setInputRef=function(e){t._input=e};t.handleNameChange=function(e){var n=t.state.channelType;re.xL.has(n)&&(e=(0,Se.Nj)(e));t.setState({name:e})};t.handleTypeChange=function(e){var n=e.value,r=t.state.name;re.xL.has(n)&&(r=(0,Se.Nj)(r));n===Le.d4z.GUILD_STAGE_VOICE&&t.setState({isPrivate:!1});t.setState({channelType:n,name:r})};t.handlePrivacyChange=function(e){t.setState({isPrivate:e})};t.handleApplicationChange=function(e){t.setState({applicationId:e})};t.handleSKUChange=function(e){t.setState({skuId:e})};t.handleShowBranchesToggle=function(e){t.setState({showBranches:e,branchId:null})}
;t.handleBranchChange=function(e){t.setState({branchId:e})};t.handleHasBranchesChange=function(e){t.setState({hasBranches:e})};var r,a=De(t);t.handleSubmit=(r=Ue((function(e){var n,t,r,o,s,i,l,c,d,h,p,f,C,N,y,m,v,_,g,b,O,A,I,T;return qe(this,(function(R){switch(R.label){case 0:e.preventDefault();n=a.props,t=n.cloneChannel,r=n.categoryId,o=n.user,s=n.memberRoleIds,i=n.isAdmin,l=n.onClose,c=n.owner;d=a.state,h=d.name,p=d.pendingPermissionOverwrites,f=d.channelType,C=d.skuId,N=d.branchId,y=d.isPrivate;if(null==(m=a.getGuildId()))return[2];if(null!=t){v=u().values(t.permissionOverwrites);_=t.bitrate;g=t.userLimit}else if(f===Le.d4z.GUILD_ANNOUNCEMENT)v=(0,Se.rt)(m);else{if(y){v=(0,Se.oQ)(m,f,[],!0);(b=(0,q.Tj)(p,f)).length>0&&(v=v.concat(b));O=null!=c&&o.id===c.id;v.some((function(e){return s.has(e.id)}))||i||O||v.push((0,Se.jZ)(o.id,f))}if(f===Le.d4z.GUILD_STAGE_VOICE){v=[];Object.values(p).forEach((function(e){var n=e.row;null!=n.id&&""!==n.id&&(n.rowType===Me.aC.ROLE?v.push((0,
te.createModeratorOverwrite)(n.id,K.BN.ROLE)):n.rowType===Me.aC.MEMBER&&v.push((0,te.createModeratorOverwrite)(n.id,K.BN.MEMBER)))}))}}a.setState({errors:{}});R.label=1;case 1:R.trys.push([1,3,,4]);return[4,E.Z.createChannel({guildId:m,type:f,name:h,permissionOverwrites:v,bitrate:_,userLimit:g,parentId:f!==Le.d4z.GUILD_CATEGORY?r:null,skuId:C,branchId:N})];case 2:if(null==(A=R.sent())||201!==A.status)return[2];I=A.body;re.xL.has(f)&&(0,$.XU)(I.guild_id,I.id);l();return[3,4];case 3:null!=(T=R.sent()).body&&"object"==typeof T.body?a.setState({errors:T.body}):a.setState({errors:{message:S.Z.Messages.ERROR_OCCURRED_TRY_AGAIN}});return[3,4];case 4:return[2]}}))})),function(e){return r.apply(this,arguments)});var s=e.channelType,i=e.cloneChannel,l=e.prefillChannelName;t.state={channelType:null!=s?s:Le.d4z.GUILD_TEXT,name:null!=i?(0,X.F6)(i,ue.default,ce.Z):null!=l?l:"",pendingPermissionOverwrites:{},isPrivate:!1,prevGuildId:e.guildId,applicationId:null,skuId:null,branchId:null,
showBranches:!1,hasBranches:!1,slide:Xe.CHANNEL_INFO,errors:{}};t.handlePermissionOverwriteChange=t.handlePermissionOverwriteChange.bind(De(t));return t}var i=o.prototype;i.componentDidMount=function(){var e=this._input;null!=e&&e.select();var n=this.props,t=n.guildId,r=n.applications;n.canCreateStoreChannel&&null==r&&C.Z.fetchApplications(t);W.ZP.trackWithMetadata(Le.rMx.OPEN_MODAL,{type:"Create Channel"});Q.O2.trackExposure({guildId:t})};i.componentDidUpdate=function(e,n){!n.isPrivate&&this.state.isPrivate&&this.state.channelType===Le.d4z.GUILD_ANNOUNCEMENT&&this.setState({channelType:Le.d4z.GUILD_TEXT});!n.isPrivate&&this.state.isPrivate&&W.ZP.trackWithMetadata(Le.rMx.OPEN_MODAL,{type:"Create Private Channel"})};i.getGuildId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;return e.guildId};i.canSubmit=function(){var e=this.props,n=e.canViewChannels,t=e.canConnect,r=this.state,a=r.isPrivate,o=r.channelType,s=r.skuId,i=r.name
;return""!==i&&""!==i.trim()&&(!(a&&!(0,q.nT)(o,n,t))&&(o!==Le.d4z.GUILD_STORE||null!=s))};i.getIconComponent=function(){var e=this.state,n=e.isPrivate,t=e.channelType;switch(t){case Le.d4z.GUILD_TEXT:return n?Ee.Z:fe.Z;case Le.d4z.GUILD_FORUM:return Ce.Z;case Le.d4z.GUILD_VOICE:return n?ge.Z:_e.Z;case Le.d4z.GUILD_STORE:return Oe.Z;case Le.d4z.GUILD_ANNOUNCEMENT:return ve.Z;case Le.d4z.GUILD_STAGE_VOICE:return be.Z;default:return(0,re.zi)(t)?fe.Z:je.Vq}};i.renderHeader=function(){var e,n=this.props,t=n.cloneChannel,a=n.categoryId,o=n.onClose,s=function(e,n){return null!=e?S.Z.Messages.CLONE_CHANNEL:n===Le.d4z.GUILD_CATEGORY?S.Z.Messages.CREATE_CATEGORY:S.Z.Messages.CREATE_CHANNEL}(t,this.state.channelType);if(null!=a){var i,l=ae.Z.getChannel(a);e=(0,r.jsx)(f.xv,{variant:"text-xs/normal",color:"header-secondary",className:we().subtitle,children:S.Z.Messages.IN_CATEGORY.format({categoryName:null!==(i=null==l?void 0:l.name)&&void 0!==i?i:""})})}return(0,r.jsxs)(Ae.xB,{separator:!1,
children:[(0,r.jsxs)("div",{className:we().header,children:[(0,r.jsx)(f.X6,{id:this.headerId,variant:"heading-lg/semibold",className:we().title,children:s}),e]}),(0,r.jsx)(Ae.ol,{onClick:o,className:we().closeButton})]})};i.renderName=function(){var e,n=this,a=this.props,o=a.cloneChannel,s=a.guildId,i=this.state,l=i.errors,c=i.channelType;null!=(null==l?void 0:l.name)&&(e=(0,r.jsx)(f.xv,{variant:"text-xs/normal",color:"text-danger",className:we().error,children:l.name}));var u=c===Le.d4z.GUILD_CATEGORY,d=u?S.Z.Messages.CATEGORY_NAME:S.Z.Messages.FORM_LABEL_CHANNEL_NAME,h=null!=o?(0,r.jsx)(f.R9,{className:we().channelNameNote,type:f.R9.Types.DESCRIPTION,children:S.Z.Messages.CLONE_CHANNEL_HELP.format({name:(0,X.F6)(o,ue.default,ce.Z,!0)})}):c===Le.d4z.GUILD_FORUM?(0,r.jsx)(f.R9,{className:we().channelNameNote,type:f.R9.Types.DESCRIPTION,children:S.Z.Messages.FORUM_CHANNEL_NAME_NOTE.format({forumUpsellHook:function(e,n){return(0,r.jsx)(f.ee,{onClick:function(){return(0,
Ie.ZD)(Ue((function(){var e,n;return qe(this,(function(a){switch(a.label){case 0:return[4,Promise.all([t.e(40532),t.e(26466),t.e(50959)]).then(t.bind(t,750959))];case 1:e=a.sent(),n=e.default;return[2,function(e){return(0,r.jsx)(n,ke(ze({},e),{guildId:s}))}]}}))})))},children:e},n)}})}):null,p=this.getIconComponent();return(0,r.jsx)(pe.FG,{children:function(t){return(0,r.jsxs)(f.xJ,{title:d,tag:"label",htmlFor:t,titleClassName:we().sectionTitle,className:we().name,children:[(0,r.jsx)(f.oi,{value:n.state.name,onChange:n.handleNameChange,id:t,inputRef:n.setInputRef,maxLength:100,placeholder:$e(c),className:we().inputWrapper,inputClassName:u?null:we().inputInner,prefixElement:u?null:(0,r.jsx)(p,{className:we().inputPrefix,width:16,height:16}),autoFocus:!0}),e,h]})}})};i.renderType=function(){
var e=this.props,n=e.cloneChannel,t=e.applications,a=e.canCreateStoreChannel,o=e.canCreateAnnouncementChannel,s=e.canCreateStageChannel,i=e.canCreateForumChannel,l=this.state,c=l.channelType,u=l.isPrivate;if(null==n&&c!==Le.d4z.GUILD_CATEGORY){var d=null!=t&&t.length>0;return(0,r.jsx)(f.xJ,{className:we().type,title:S.Z.Messages.CHANNEL_TYPE,children:(0,r.jsx)(f.Ee,{options:Je({isPrivate:u,showStoreChannelOption:a&&d,showAnnouncementChannelOption:o,canCreateStageChannel:s,canCreateForumChannel:i}),value:c,size:f.Ee.Sizes.NOT_SET,onChange:this.handleTypeChange,itemInfoClassName:we().radioBarLabel})})}};i.renderChannelTypeDescription=function(e){var n;e===Le.d4z.GUILD_ANNOUNCEMENT&&(n=S.Z.Messages.FORM_HELP_NEWS.format({documentationLink:Re.Z.getArticleURL(Le.BhN.ANNOUNCEMENT_CHANNELS)}));return null==n?null:(0,r.jsx)(f.R9,{className:we().channelTypeDescription,type:f.R9.Types.DESCRIPTION,children:n})};i.renderStoreOptions=function(){
var e=this.props.applications,n=this.state,t=n.applicationId,o=n.skuId,s=n.branchId,i=n.showBranches,l=n.hasBranches;if(null==e||0===e.length)throw new Error("Unexpected empty applications");return(0,r.jsxs)("div",{children:[(0,r.jsx)(f.vw,{tag:"h5",children:S.Z.Messages.CREATE_STORE_CHANNEL_APPLICATION}),(0,r.jsx)(f.q4,{options:e.map((function(e){return{label:e.name,value:e.id}})),placeholder:S.Z.Messages.CREATE_STORE_CHANNEL_SELECT_APPLICATION,value:t,onChange:this.handleApplicationChange,className:we().storeChannelOptionSelector}),null!=t?(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(f.vw,{tag:"h5",children:S.Z.Messages.CREATE_STORE_CHANNEL_SKU}),(0,r.jsx)(V,{applicationId:t,onChange:this.handleSKUChange,selectedSkuId:o,className:we().storeChannelOptionSelector},t)]}):null,null!=t&&l?(0,r.jsxs)(f.j7,{hideBorder:!0,onChange:this.handleShowBranchesToggle,value:i,note:S.Z.Messages.CREATE_STORE_CHANNEL_BETA_NOTE.format({devPortalUrl:Le.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT}),
children:[(0,r.jsx)(ye.Z,{className:we().switchIcon}),S.Z.Messages.CREATE_STORE_CHANNEL_BETA_TITLE]}):null,null!=t?(0,r.jsxs)(a.Fragment,{children:[i?(0,r.jsx)(f.vw,{tag:"h5",children:S.Z.Messages.CREATE_STORE_CHANNEL_BRANCH}):null,(0,r.jsx)(Z,{applicationId:t,onChange:this.handleBranchChange,selectedBranchId:s,hide:!i,onHasBranchesChange:this.handleHasBranchesChange,className:we().storeChannelOptionSelector},t)]}):null]})};i.renderPrivacyOptions=function(){var e=this.props.cloneChannel,n=this.state,t=n.channelType,a=n.isPrivate;if(null!=e||t===Le.d4z.GUILD_ANNOUNCEMENT)return null;var o=t===Le.d4z.GUILD_CATEGORY?S.Z.Messages.PRIVATE_CATEGORY:S.Z.Messages.PRIVATE_CHANNEL,s=t===Le.d4z.GUILD_CATEGORY?S.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION:S.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_NEW;return(0,r.jsx)(f.xJ,{children:(0,r.jsxs)(f.j7,{hideBorder:!0,onChange:this.handlePrivacyChange,value:a,note:s,children:[(0,r.jsx)(me.Z,{className:we().switchIcon
}),o]})},"privacy-switch")};i.renderError=function(e){var n,t=this.state,a=t.channelType,o=t.isPrivate,i=t.errors,l=this.props,c=l.canConnect,u=l.canViewChannels;if(Object.values(i).length>0){if(null!=i.message&&""!==i.message)n=i.message;else if(e||null==i.name){var d=Object.values(i)[0];d.length>0&&(n=d)}}else o&&!(0,q.nT)(a,u,c)&&(n=(0,q.$7)(a));if(null!=n)return(0,r.jsx)("div",{className:s()(we().createError,He({},we().addMemberError,e)),children:(0,r.jsx)(de.Z,{messageType:de.Q.ERROR,children:n})})};i.renderFooter=function(){var e,n=this,t=this.props,a=t.channelType,o=t.onClose,s=this.state.channelType,i=this.state.isPrivate;e=a===Le.d4z.GUILD_CATEGORY?S.Z.Messages.CREATE_CATEGORY:S.Z.Messages.CREATE_CHANNEL;var l=i||s===Le.d4z.GUILD_STAGE_VOICE;return(0,r.jsxs)(Ae.mz,{className:we().modalFooter,children:[l?(0,r.jsx)(f.zx,{type:"button",onClick:function(){n.setState({slide:Xe.ADD_MEMBERS,errors:{}})},disabled:!this.canSubmit(),children:S.Z.Messages.NEXT}):(0,r.jsx)(f.zx,{
type:"submit",disabled:!this.canSubmit(),children:e}),(0,r.jsx)(f.zx,{onClick:o,look:f.zx.Looks.LINK,color:f.zx.Colors.PRIMARY,children:S.Z.Messages.CANCEL})]})};i.renderAddMemberFooter=function(){var e,n=this,t=this.props.channelType,a=this.state.pendingPermissionOverwrites;e=0===Object.keys(a).length?S.Z.Messages.SKIP:t===Le.d4z.GUILD_CATEGORY?S.Z.Messages.CREATE_CATEGORY:S.Z.Messages.CREATE_CHANNEL;return(0,r.jsxs)(Ae.mz,{children:[(0,r.jsx)(f.zx,{type:"submit",disabled:!this.canSubmit(),children:e}),(0,r.jsx)(f.zx,{onClick:function(){n.setState({slide:Xe.CHANNEL_INFO})},look:f.zx.Looks.LINK,color:f.zx.Colors.PRIMARY,children:S.Z.Messages.BACK})]})};i.handlePermissionOverwriteChange=function(e){this.setState({pendingPermissionOverwrites:e})};i.renderCreateChannelContent=function(){var e=this.state.channelType;return(0,r.jsxs)(r.Fragment,{children:[this.renderHeader(),(0,r.jsxs)(Ae.hz,{className:we().modalContent,
children:[this.renderType(),this.renderName(),e===Le.d4z.GUILD_STORE?this.renderStoreOptions():null,this.renderChannelTypeDescription(e),e===Le.d4z.GUILD_STAGE_VOICE?null:this.renderPrivacyOptions()]}),this.renderError(),this.renderFooter()]})};i.renderAddMemberSlideContent=function(){var e=this.state,n=e.name,t=e.channelType,a=this.props,o=a.guildId,s=a.onClose,i=this.getIconComponent(),l=t===Le.d4z.GUILD_STAGE_VOICE;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Ae.xB,{separator:!1,children:[(0,r.jsxs)("div",{className:we().header,children:[(0,r.jsx)(f.X6,{variant:"heading-lg/semibold",className:we().title,children:l?S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MODERATOR_TITLE:S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE}),(0,r.jsxs)(f.xv,{variant:"text-xs/normal",color:"header-secondary",className:we().subtitle,children:[(0,r.jsx)(i,{height:16,width:16,className:we().subtitleIcon}),n]})]}),(0,r.jsx)(Ae.ol,{onClick:s,className:we().closeButton})]}),this.renderError(!0),(0,
r.jsx)(Qe,{onChange:this.handlePermissionOverwriteChange,guildId:o,channelType:t}),this.renderAddMemberFooter()]})};i.renderSlides=function(){var e=this.state.slide,n={impression_group:d.AG.CHANNEL_ADD_FLOW};return(0,r.jsx)("div",{children:(0,r.jsxs)(he.My,{activeSlide:e,width:460,children:[(0,r.jsx)(he.Mi,{id:Xe.CHANNEL_INFO,impressionName:d.zs.CHANNEL_ADD_INFO,impressionProperties:n,children:this.renderCreateChannelContent()}),(0,r.jsx)(he.Mi,{id:Xe.ADD_MEMBERS,impressionName:d.zs.CHANNEL_ADD_MEMBERS,impressionProperties:n,children:this.renderAddMemberSlideContent()})]})})};i.render=function(){var e=this.props.transitionState;return(0,r.jsx)("form",{onSubmit:this.handleSubmit,children:(0,r.jsx)(Ae.Y0,{transitionState:e,className:we().modal,"aria-labelledby":this.headerId,children:this.renderSlides()})})};return o}(a.PureComponent);const nn=a.forwardRef((function(e,n){var t=e.channelType,a=e.guildId,o=e.cloneChannelId,s=(0,p.cj)([ie.Z,ue.default,le.Z,ae.Z,oe.Z,se.ZP],(function(){
var e,n=ie.Z.getGuild(a),r=ue.default.getCurrentUser();l()(null!=r,"CreateChannel: user cannot be undefined");var s,i,c=null!=n&&null!=n.ownerId?ue.default.getUser(n.ownerId):null,u=new Set(null!==(s=null===(e=se.ZP.getMember(a,r.id))||void 0===e?void 0:e.roles)&&void 0!==s?s:[]),d=le.Z.can(Le.Plq.ADMINISTRATOR,n),h=ae.Z.getChannel(o);return{applications:oe.Z.getApplicationsForGuild(a),canCreateStoreChannel:null!=n&&n.hasFeature(Le.oNc.COMMERCE),canCreateAnnouncementChannel:null!=n&&n.hasFeature(Le.oNc.NEWS),user:r,owner:c,memberRoleIds:u,canViewChannels:le.Z.can(Le.Plq.VIEW_CHANNEL,n),canConnect:le.Z.can(Le.Plq.CONNECT,n),isAdmin:d,cloneChannel:h,channelType:null!==(i=null==h?void 0:h.type)&&void 0!==i?i:t,canManageRoles:le.Z.can(Le.Plq.MANAGE_ROLES,n),canManageChannels:le.Z.can(Le.Plq.MANAGE_CHANNELS,n)}})),i=s.canManageRoles,c=s.canManageChannels,u=(0,ne.m)(a)&&i&&c,d=(0,Q.W3)(a);return(0,r.jsx)(en,ke(ze({},e,s),{canCreateStageChannel:u,canCreateForumChannel:d,ref:n}))}))},
830241:(e,n,t)=>{t.r(n);t.d(n,{createModeratorOverwrite:()=>T,default:()=>R});var r=t(785893),a=t(667294),o=t(363010),s=t(331535),i=t(289965),l=t(323657),c=t(780921),u=t(87310),d=t(356004),h=t(653772),p=t(487502),f=t(272729),E=t(806008),C=t(67416),N=t(890889),y=t(531648),m=t(862045),v=t(959797),_=t(102437),g=t.n(_);function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function O(e,n,t,r,a,o,s){try{var i=e[o](s),l=i.value}catch(e){t(e);return}i.done?n(l):Promise.resolve(l).then(r,a)}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(r=t.next()).done);s=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){i=!0;a=e}finally{try{s||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n)
;var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I=function(e,n){var t,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:s.label++;return{value:o[1],done:!1}
;case 5:s.label++;r=o[1];o=[0];continue;case 7:o=s.ops.pop();s.trys.pop();continue;default:if(!(a=s.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1];a=o;break}if(a&&s.label<a[2]){s.label=a[2];s.ops.push(o);break}a[2]&&s.ops.pop();s.trys.pop();continue}o=n.call(e,s)}catch(e){o=[6,e];r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};function T(e,n){return{id:e,type:n,deny:N.ZP.NONE,allow:y.yP}}function S(e,n){var t=Object.values(n).filter((function(e){return null!=e.row.id})).map((function(e){var n=e.row;return n.rowType===m.aC.ROLE?T(n.id,c.BN.ROLE):T(n.id,c.BN.MEMBER)}));return(0,i.hw)(e.id,t,!0)}function R(e){var n=e.transitionState,t=e.onClose,i=e.channelId,c=(0,f.Dt)(),N=(0,o.e7)([d.Z],(function(){return d.Z.getChannel(i)})),m=(0,o.e7)([h.Z],(function(){return h.Z.getGuild(null==N?void 0:N.getGuildId())
})),_=A(a.useState({}),2),b=_[0],T=_[1],R=A(a.useState(!1),2),L=R[0],M=R[1],x=A(a.useState(null),2),j=x[0],P=x[1];if(null==N||null==m)return null;var w,Z,D=(Z=(w=function(){var e,n;return I(this,(function(r){switch(r.label){case 0:M(!0);r.label=1;case 1:r.trys.push([1,3,,4]);return[4,S(N,b)];case 2:r.sent();t();return[3,4];case 3:e=r.sent();n=new l.Hx(e);M(!1);P(n);return[3,4];case 4:return[2]}}))},function(){var e=this,n=arguments;return new Promise((function(t,r){var a=w.apply(e,n);function o(e){O(a,t,r,o,s,"next",e)}function s(e){O(a,t,r,o,s,"throw",e)}o(void 0)}))}),function(){return Z.apply(this,arguments)});return(0,r.jsxs)(C.Y0,{transitionState:n,"aria-labelledby":c,size:C.Cg.SMALL,className:g().modalRoot,children:[(0,r.jsxs)(C.xB,{separator:!1,direction:p.Z.Direction.VERTICAL,align:p.Z.Align.CENTER,className:g().header,children:[(0,r.jsx)(s.X6,{variant:"heading-xl/semibold",children:v.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE}),(0,r.jsxs)(s.xv,{variant:"text-md/normal",
color:"header-secondary",className:g().headerSubtitle,children:[(0,r.jsx)(E.Z,{height:16,width:16,className:g().headerSubtitleIcon}),N.name]})]}),(0,r.jsx)(u.AddMembersBody,{guild:m,channel:N,permission:y.yP,pendingAdditions:b,setPendingAdditions:T}),null!=j?(0,r.jsx)(s.xv,{className:g().error,variant:"text-xs/normal",color:"text-danger",children:j.getAnyErrorMessage()}):null,(0,r.jsxs)(C.mz,{children:[(0,r.jsx)(s.zx,{onClick:D,submitting:L,children:v.Z.Messages.ADD}),(0,r.jsx)(s.zx,{look:s.zx.Looks.LINK,color:s.zx.Colors.PRIMARY,onClick:t,children:v.Z.Messages.CANCEL})]})]})}}}]);
//# sourceMappingURL=f68d48f7cbb77b9fb932.js.map