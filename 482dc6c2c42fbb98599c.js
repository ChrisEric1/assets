"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[5316],{5633:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,i=I(n(67294)),o=n(55558),s=A(n(67258)),l=n(50620),a=A(n(5008)),E=A(n(92974)),u=A(n(89446)),c=I(n(84455)),d=A(n(43264)),f=n(70348),p=n(78036),S=n(34596),_=A(n(92254));function A(e){return e&&e.__esModule?e:{default:e}}function N(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(N=function(e){return e?n:t})(e)}function I(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=N(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}function T(){
T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return T.apply(this,arguments)}function P(e,t,n,i){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),1===s)t.children=i;else if(s>1){for(var l=new Array(s),a=0;a<s;a++)l[a]=arguments[a+3];t.children=l}if(t&&o)for(var E in o)void 0===t[E]&&(t[E]=o[E]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function O(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;R(e,t)}function R(e,t){R=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return R(e,t)}var C=function(e){O(t,e);function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];(t=e.call.apply(e,[this].concat(r))||this).containsFlag=function(){
var e=t.props,n=e.permissions,r=e.flag;return s.default.has(n,r)};t.isDisabled=function(){var e=t.props,n=e.permissions,r=e.flag;return!s.default.equals(r,f.Permissions.ADMINISTRATOR)&&s.default.has(n,f.Permissions.ADMINISTRATOR)};t.isChecked=function(){return t.containsFlag()&&!t.isDisabled()};t.handleChange=function(){var e=t.props,n=e.onChange,r=e.flag;null==n||n(r)};return t}t.prototype.render=function(){return P(u.default,{className:_.default.checkbox,onChange:this.handleChange,type:u.default.Types.INVERTED,color:p.Colors.WHITE,value:this.isChecked(),disabled:this.isDisabled()},void 0,P("div",{className:_.default.checkboxLabel},void 0,this.props.title))};return t}(i.Component);C.displayName="PermissionCheckbox";var M=function(e){O(t,e);function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];(t=e.call.apply(e,[this].concat(r))||this).handleCopy=function(){var e,n=null!==(e=d.default.getApplicationProperties(t.props.location))&&void 0!==e?e:{}
;d.default.track(f.AnalyticsEvents.AUTH_URL_COPIED,n)};t.renderPermissionsCheckboxes=function(){var e=t.props.permissions,n=(0,l.generatePermissionSpec)(S.Messages.Permissions).map((function(n){return P(c.GridChild,{columnSpread:12,columnSpreadSmallMedium:12,columnSpreadMedium:4,columnSpreadLarge:4,columnSpreadExtraLarge:4},n.title,P(E.default,{},void 0,n.title),n.permissions.map((function(n){return i.createElement(C,T({key:n.flag,onChange:t.handlePermissionsChange,permissions:e},n))})))}));return P(i.Fragment,{},void 0,n)};t.renderPermissionsInteger=function(){var e=t.props.permissions;e=s.default.has(e,f.Permissions.ADMINISTRATOR)?f.Permissions.ADMINISTRATOR:e;return P(c.GridSection,{},void 0,P(c.GridChild,{columnSpread:12},void 0,P(E.default,{},void 0,S.Messages.DeveloperPages.PERMISSIONS_CALCULATOR_PERMISSIONS_INTEGER),P(a.default,{onCopy:t.handleCopy,type:a.default.Types.TEXTBOX,textToCopy:e.toString()})))};t.handlePermissionsChange=function(e){
var n=t.props,r=n.permissions,i=n.onChange,o=s.default.has(r,e)?s.default.remove(r,e):s.default.add(r,e);t.setState({permissions:o});null==i||i(o)};return t}t.prototype.render=function(){return P(c.default,{},void 0,P(c.GridSection,{},void 0,this.renderPermissionsCheckboxes()),this.props.showInteger&&this.renderPermissionsInteger())};return t}(i.Component);M.displayName="PermissionsCalculator";var m=(0,o.withRouter)(M);t.default=m},5008:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r
}(n(67294)),o=c(n(94184)),s=c(n(56117)),l=c(n(79950)),a=n(31849),E=n(34596),u=c(n(17632));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t,n,i){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),1===s)t.children=i;else if(s>1){for(var l=new Array(s),a=0;a<s;a++)l[a]=arguments[a+3];t.children=l}if(t&&o)for(var E in o)void 0===t[E]&&(t[E]=o[E]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function p(e,t){p=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return p(e,t)}var S={STACKED:"stacked",TEXTBOX:"textbox"},_=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;p(e,t)}(t,e);function t(){
for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];(t=e.call.apply(e,[this].concat(r))||this).state={isDisplayingFeedback:!1};t.feedbackTimeout=null;t.clearTimeout=function(){null!=t.feedbackTimeout&&(t.feedbackTimeout=clearTimeout(t.feedbackTimeout))};t.handleCopyClick=function(){var e=t.props,n=e.onCopy,r=e.textToCopy;t.clearTimeout();t.setState({isDisplayingFeedback:!0},(function(){t.feedbackTimeout=setTimeout(t.hideFeedback,1e3)}));(0,a.copy)(r);null!=n&&n()};t.hideFeedback=function(){t.setState({isDisplayingFeedback:!1});t.feedbackTimeout=null};return t}var n=t.prototype;n.componentWillUnmount=function(){this.clearTimeout()};n.renderAdditionalActions=function(){var e=this.props.additionalActions;return null==e?null:e};n.renderCopyAction=function(){var e,t;if(!a.SUPPORTS_COPY)return null
;var n=this.state.isDisplayingFeedback,r=this.props,i=r.copyActionContent,l=void 0===i?E.Messages.Actions.COPY:i,c=r.copyActionFeedbackContent,d=void 0===c?E.Messages.Actions.COPIED:c,p=r.className,S=r.isButtonDisabled;return f(s.default,{disabled:S,className:(0,o.default)(u.default.copyAction,p),color:n?s.default.Color.GREEN:s.default.Color.BRAND,height:s.default.Height.SHORT,onClick:this.handleCopyClick},void 0,f("span",{className:(0,o.default)(u.default.copyActionContentFeedback,(e={},e[u.default.copyActionContentHidden]=!n,e))},void 0,d),f("span",{className:(0,o.default)(u.default.copyActionContent,(t={},t[u.default.copyActionContentHidden]=n,t))},void 0,l))};n.renderStackedContent=function(){var e=this.props,t=e.children,n=e.type;return null==t||n!==S.STACKED?null:f("div",{className:u.default.content},void 0,t)};n.renderStackedActions=function(){
return this.props.type!==S.STACKED?null:f(i.Fragment,{},void 0,this.props.textToCopy.length>0?this.renderCopyAction():null,this.renderAdditionalActions())};n.renderTextboxContent=function(){var e=this.props,t=e.textToCopy;return e.type!==S.TEXTBOX?null:f("div",{className:u.default.textboxInputWrapper},void 0,f(l.default,{readOnly:!0,inputClassName:u.default.textboxInput,value:t}),this.renderCopyAction())};n.render=function(){return f(i.Fragment,{},void 0,this.renderStackedContent(),this.renderStackedActions(),this.renderTextboxContent())};return t}(i.Component);t.default=_;_.displayName="CopyToClipboard";_.Types=S;_.defaultProps={isButtonDisabled:!1,type:S.STACKED}},96835:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}r.default=e;n&&n.set(e,r)}(n(67294));var r,i=l(n(94184)),o=l(n(13192)),s=l(n(53019));function l(e){return e&&e.__esModule?e:{default:e}}function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function E(e,t,n,i){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),1===s)t.children=i;else if(s>1){for(var l=new Array(s),a=0;a<s;a++)l[a]=arguments[a+3];t.children=l}if(t&&o)for(var E in o)void 0===t[E]&&(t[E]=o[E]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var u=(0,o.default)({SMALL:null,MEDIUM:null}),c=(0,o.default)({NONE:null,PRIMARY:null,RED:null}),d=(0,o.default)({DARK:null,
LIGHT:null}),f=function(e){var t,n=e.borderColor,r=void 0===n?c.PRIMARY:n,o=e.children,l=e.className,a=e.color,f=void 0===a?d.LIGHT:a,p=e.size,S=void 0===p?u.MEDIUM:p;return E("div",{className:(0,i.default)(s.default.wrapper,l,(t={},t[s.default.small]=S===u.SMALL,t[s.default.medium]=S===u.MEDIUM,t[s.default.borderNone]=r===c.NONE,t[s.default.borderPrimary]=r===c.PRIMARY,t[s.default.borderRed]=r===c.RED,t[s.default.colorDark]=f===d.DARK,t[s.default.colorLight]=f===d.LIGHT,t))},void 0,o)};f.displayName="Panel";f.BorderColor=c;f.Color=d;f.Size=u;var p=f;t.default=p},31849:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.copy=t.SUPPORTS_COPY=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){
var l=o?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(r,s,l):r[s]=e[s]}r.default=e;n&&n.set(e,r);return r}(n(22182));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var o=function(){try{return document.queryCommandEnabled("copy")||document.queryCommandSupported("copy")}catch(e){return!1}}();t.SUPPORTS_COPY=o;t.copy=function(e){return r.copy(e)}},22182:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.copy=function(e){var t=document.body;if(null==t)throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");var n=document.createRange(),r=window.getSelection(),i=document.createElement("textarea");i.value=e;i.contentEditable="true";i.style.visibility="none";t.appendChild(i);n.selectNodeContents(i);null==r||r.removeAllRanges();null==r||r.addRange(n);i.focus();i.setSelectionRange(0,e.length);var o=document.execCommand("copy");t.removeChild(i)
;return o}},50620:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.generateGuildGeneralPermissionSpec=l;t.generateGuildTextPermissionSpec=a;t.generateGuildVoicePermissionSpec=E;t.generatePermissionSpec=function(e,t){return[l(e),a(e),E(e,t)]};var r,i=(r=n(96486))&&r.__esModule?r:{default:r},o=n(78036);function s(e,t){void 0===t&&(t=!1);t||(e.permissions=e.permissions.filter((function(e){return!e.isExperimental})));return e}function l(e){return s({title:e.GENERAL_PERMISSIONS,permissions:[{title:e.ADMINISTRATOR,description:e.ADMINISTRATOR_DESCRIPTION,flag:o.Permissions.ADMINISTRATOR},{title:e.VIEW_AUDIT_LOG,description:e.VIEW_AUDIT_LOG_DESCRIPTION,flag:o.Permissions.VIEW_AUDIT_LOG},{title:e.MANAGE_SERVER,description:e.MANAGE_SERVER_DESCRIPTION,flag:o.Permissions.MANAGE_GUILD},{title:e.MANAGE_ROLES,description:e.MANAGE_ROLES_DESCRIPTION,flag:o.Permissions.MANAGE_ROLES},{title:e.MANAGE_CHANNELS,description:e.MANAGE_CHANNELS_DESCRIPTION,flag:o.Permissions.MANAGE_CHANNELS},{
title:e.KICK_MEMBERS,flag:o.Permissions.KICK_MEMBERS},{title:e.BAN_MEMBERS,flag:o.Permissions.BAN_MEMBERS},{title:e.CREATE_INSTANT_INVITE,flag:o.Permissions.CREATE_INSTANT_INVITE},{title:e.CHANGE_NICKNAME,description:e.CHANGE_NICKNAME_DESCRIPTION,flag:o.Permissions.CHANGE_NICKNAME},{title:e.MANAGE_NICKNAMES,description:e.MANAGE_NICKNAMES_DESCRIPTION,flag:o.Permissions.MANAGE_NICKNAMES},{title:e.MANAGE_EMOJIS_AND_STICKERS,flag:o.Permissions.MANAGE_GUILD_EXPRESSIONS},{title:e.MANAGE_WEBHOOKS,description:e.MANAGE_WEBHOOKS_DESCRIPTION,flag:o.Permissions.MANAGE_WEBHOOKS},{title:e.READ_MESSAGES_VIEW_CHANNELS,flag:o.Permissions.VIEW_CHANNEL},{title:e.MANAGE_EVENTS,flag:o.Permissions.MANAGE_EVENTS},{title:e.MODERATE_MEMBERS,flag:o.Permissions.MODERATE_MEMBERS},{title:e.VIEW_GUILD_ANALYTICS,flag:o.Permissions.VIEW_GUILD_ANALYTICS},{title:e.VIEW_CREATOR_MONETIZATION_ANALYTICS,flag:o.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS}]})}function a(e){return s({title:e.TEXT_PERMISSIONS,
permissions:[{title:e.SEND_MESSAGES,flag:o.Permissions.SEND_MESSAGES},{title:e.CREATE_PUBLIC_THREADS,flag:o.Permissions.CREATE_PUBLIC_THREADS,description:e.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION},{title:e.CREATE_PRIVATE_THREADS,flag:o.Permissions.CREATE_PRIVATE_THREADS,description:e.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION},{title:e.SEND_MESSAGES_IN_THREADS,flag:o.Permissions.SEND_MESSAGES_IN_THREADS,description:e.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION},{title:e.SEND_TTS_MESSAGES,description:e.SEND_TTS_MESSAGES_DESCRIPTION,flag:o.Permissions.SEND_TTS_MESSAGES},{title:e.MANAGE_MESSAGES,description:e.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,flag:o.Permissions.MANAGE_MESSAGES},{title:e.MANAGE_THREADS,description:e.MANAGE_THREADS_DESCRIPTION,flag:o.Permissions.MANAGE_THREADS},{title:e.EMBED_LINKS,flag:o.Permissions.EMBED_LINKS},{title:e.ATTACH_FILES,flag:o.Permissions.ATTACH_FILES},{title:e.READ_MESSAGE_HISTORY,
flag:o.Permissions.READ_MESSAGE_HISTORY},{title:e.MENTION_EVERYONE,description:null!=e.MENTION_EVERYONE_CHANNEL_DESCRIPTION&&"string"!=typeof e.MENTION_EVERYONE_CHANNEL_DESCRIPTION?e.MENTION_EVERYONE_CHANNEL_DESCRIPTION.format():e.MENTION_EVERYONE_CHANNEL_DESCRIPTION,flag:o.Permissions.MENTION_EVERYONE},{title:e.USE_EXTERNAL_EMOJIS,description:e.USE_EXTERNAL_EMOJIS_DESCRIPTION,flag:o.Permissions.USE_EXTERNAL_EMOJIS},{title:e.USE_EXTERNAL_STICKERS,description:e.USE_EXTERNAL_STICKERS_DESCRIPTION,flag:o.Permissions.USE_EXTERNAL_STICKERS},{title:e.ADD_REACTIONS,description:e.ADD_REACTIONS_DESCRIPTION,flag:o.Permissions.ADD_REACTIONS},{title:e.USE_APPLICATION_COMMANDS,description:e.USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,flag:o.Permissions.USE_APPLICATION_COMMANDS}]})}function E(e,t){return s({title:e.VOICE_PERMISSIONS,permissions:[{title:e.CONNECT,flag:o.Permissions.CONNECT},{title:e.SPEAK,flag:o.Permissions.SPEAK},{title:e.VIDEO,flag:o.Permissions.STREAM},{title:e.MUTE_MEMBERS,
flag:o.Permissions.MUTE_MEMBERS},{title:e.DEAFEN_MEMBERS,flag:o.Permissions.DEAFEN_MEMBERS},{title:e.MOVE_MEMBERS,description:e.MOVE_MEMBERS_DESCRIPTION,flag:o.Permissions.MOVE_MEMBERS},{title:e.USE_VAD,description:e.USE_VAD_DESCRIPTION,flag:o.Permissions.USE_VAD},{title:e.PRIORITY_SPEAKER,description:i.default.get(t,"PRIORITY_SPEAKER_DESCRIPTION",e.PRIORITY_SPEAKER_DESCRIPTION),flag:o.Permissions.PRIORITY_SPEAKER},{title:e.REQUEST_TO_SPEAK,flag:o.Permissions.REQUEST_TO_SPEAK},{title:e.USE_EMBEDDED_ACTIVITIES,flag:o.Permissions.USE_EMBEDDED_ACTIVITIES}]},null!=t&&t.showExperimental)}}}]);
//# sourceMappingURL=482dc6c2c42fbb98599c.js.map