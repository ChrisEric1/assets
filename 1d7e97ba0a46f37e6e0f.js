"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[79619],{289965:(e,r,n)=>{n.d(r,{kY:()=>l,Aj:()=>f,d$:()=>d,S1:()=>p,hw:()=>h,kU:()=>E});var t=n(173436),i=n(839574),o=n(642400);function u(e,r,n,t,i,o,u){try{var s=e[o](u),a=s.value}catch(e){n(e);return}s.done?r(a):Promise.resolve(a).then(t,i)}function s(e){return function(){var r=this,n=arguments;return new Promise((function(t,i){var o=e.apply(r,n);function s(e){u(o,t,i,s,a,"next",e)}function a(e){u(o,t,i,s,a,"throw",e)}s(void 0)}))}}var a=function(e,r){var n,t,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,t&&(i=2&o[0]?t.return:o[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,o[1])).done)return i;(t=0,
i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:u.label++;return{value:o[1],done:!1};case 5:u.label++;t=o[1];o=[0];continue;case 7:o=u.ops.pop();u.trys.pop();continue;default:if(!(i=u.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1];i=o;break}if(i&&u.label<i[2]){u.label=i[2];u.ops.push(o);break}i[2]&&u.ops.pop();u.trys.pop();continue}o=r.call(e,u)}catch(e){o=[6,e];t=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};function l(e,r,n,t){return c.apply(this,arguments)}function c(){return(c=s((function(e,r,n,o){var u;return a(this,(function(s){switch(s.label){case 0:return null==(u=e.getGuildId())||r!==u?[3,2]:[4,(0,i.u)(e,o,n)];case 1:if(!s.sent())return[2,!1];s.label=2;case 2:t.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",id:r,allow:n,deny:o});return[2]}}))}))).apply(this,arguments)}
function f(e){t.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",id:e})}function d(e){t.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",advancedMode:e})}function p(){t.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_INIT"})}function h(e,r,n){return E(e,r,[],n)}function E(e,r,n,i){t.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"});return new Promise((function(t){var i=function(){if(0===r.length&&0===n.length)return t();if(r.length>0){var u=r.pop();if(null==u)return i();o.Z.updatePermissionOverwrite(e,u).then(i,i)}else{var s=n.pop();if(null==s)return i();o.Z.clearPermissionOverwrite(e,s).then(i,i)}};i()})).then((function(){t.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",silent:i})}))}},987928:(e,r,n)=>{n.d(r,{Z:()=>m})
;var t=n(226135),i=n(206321),o=n(531243),u=n(976703),s=n(733399),a=n(38415),l=n(932291),c=n(301818),f=n(365063),d=n(888312),p=n(555784),h=n(178517),E=n(556933),v=n(835105),O=n(605390),S=n(110042),_=n(915306),N=n(806499),y=n(806008),I=n(151843),g=n(485923),b=n(461061);function m(e,r){switch(e.type){case b.d4z.DM:return t.Z;case b.d4z.GROUP_DM:return O.Z;case b.d4z.GUILD_ANNOUNCEMENT:return e.isNSFW()?E.Z:(0,g.Z)(e)?h.Z:p.Z;case b.d4z.GUILD_TEXT:return e.id===(null==r?void 0:r.rulesChannelId)?o.Z:e.isNSFW()?a.Z:(0,g.Z)(e)?s.Z:u.Z;case b.d4z.GUILD_FORUM:return e.isNSFW()?f.Z:(0,g.Z)(e)?c.Z:l.Z;case b.d4z.GUILD_STAGE_VOICE:return y.Z;case b.d4z.GUILD_VOICE:return(0,g.Z)(e)?N.Z:_.Z;case b.d4z.ANNOUNCEMENT_THREAD:case b.d4z.PUBLIC_THREAD:return e.isNSFW()?v.Z:e.isForumPost()?d.Z:I.Z;case b.d4z.PRIVATE_THREAD:return e.isNSFW()?v.Z:S.Z;case b.d4z.GUILD_DIRECTORY:return i.Z;default:return null}}},304856:(e,r,n)=>{n.d(r,{GJ:()=>S,X0:()=>N,W:()=>y,aq:()=>I,pM:()=>b,ik:()=>w,Wx:()=>A,kA:()=>R,
RZ:()=>P,iI:()=>D,cR:()=>j,zB:()=>L,yv:()=>U,_A:()=>G,$e:()=>H,Yh:()=>k,Yk:()=>x,RD:()=>V,nT:()=>z,$7:()=>W,Tj:()=>B});var t=n(368365),i=n(316921),o=n(289965),u=n(780921),s=n(53551),a=n(212218),l=n(859023),c=n(268333),f=n(90816),d=n(890889),p=n(964199),h=n(862045),E=n(461061),v=n(959797);function O(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function S(e){return t.Z.has(e.permissions,E.Plq.ADMINISTRATOR)}function _(e){return t.Z.has(e.permissions,E.Plq.ADMINISTRATOR)?h.aC.ADMINISTRATOR:h.aC.ROLE}function N(e){var r,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=_(e);return{rowType:t,colorString:null!==(r=e.colorString)&&void 0!==r?r:(0,i.Rf)(E.p6O),name:e.name,id:e.id,disabled:S(e)||n,key:"".concat(t,":").concat(e.id),tags:e.tags}}function y(e,r){var n=S(e)?0:1,t=S(r)?0:1;return n!==t?n-t:r.position-e.position}function I(){
var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;return[{rowType:h.aC.EMPTY_STATE,colorString:(0,i.Rf)(E.p6O),name:e,disabled:!0,id:"EMPTY_STATE"}]}function g(e,r,n,i){var o=l.default.getCurrentUser();if(null==o)return!1;if(null==e)return o.id!==r;var u=e.permissionOverwrites[r];null!=(null==i?void 0:i[r])&&(u=i[r]);return null==u||!t.Z.has(u.allow,n)}function b(e,r){return e===r}function m(e,r){return!b(e.id,r.id)}function w(e,r,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0};return null==e.roles?[]:Object.values(e.roles).filter((function(i){return!S(i)&&g(r,i.id,n)&&m(e,i)&&t(i.name)})).sort(y).map((function(e){return N(e)}))}function A(e,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0};return null==e.roles?[]:Object.values(e.roles).filter((function(t){return!S(t)&&g(r,t.id,n)&&m(e,t)&&i(t.name)})).sort(y).map((function(e){
return N(e,t.Z.has(e.permissions,n))}))}function R(e,r,n,t){var i=[];if(null==e.roles)return i;i=function(e,r,n,t){return Object.values(e.roles).filter((function(i){return S(i)||!g(r,i.id,n,t)&&m(e,i)}))}(e,r,n,t).sort(y).map((function(e){return N(e)}));return 0===i.length?I(v.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES):i}function P(e,r,n,i){var o=[];if(null==e.roles)return o;o=function(e,r,n,i){return Object.values(e.roles).filter((function(o){var u;return S(o)||!g(r,o.id,n,i)&&m(e,o)||t.Z.has(t.Z.combine(o.permissions,null===(u=r.permissionOverwrites[o.id])||void 0===u?void 0:u.allow),n)}))}(e,r,n,i).sort(y).map((function(e){return N(e,t.Z.has(e.permissions,n))}));return 0===o.length?I(v.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES):o}function M(e,r){var n;return null!==(n=a.ZP.getNick(r.id,e.id))&&void 0!==n?n:p.ZP.getName(e)}function T(e,r){return r.isOwner(e)}function Z(e,r){var n=function(e,r){return r.isOwner(e)?h.aC.OWNER:h.aC.MEMBER}(e,r);return{rowType:n,name:M(e,r),userTag:e.tag,
id:e.id,avatarURL:e.getAvatarURL(r.id,24),bot:e.bot,verifiedBot:e.isVerifiedBot(),disabled:T(e,r),key:"".concat(n,":").concat(e.id)}}function C(e,r){return e.rowType!==r.rowType?e.rowType-r.rowType:e.name.toLocaleLowerCase().localeCompare(r.name.toLocaleLowerCase())}function D(e,r,n,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){return!0};return e.map(l.default.getUser).filter(f.lm).filter((function(e){return!n.isOwner(e)&&g(r,e.id,t)&&(i(M(e,n))||i(e.username)||i(e.discriminator))})).map((function(e){return Z(e,n)})).sort(C)}function j(e,r,n,t,i){return function(e,r,n,t,i){return e.map(l.default.getUser).filter(f.lm).filter((function(e){return!g(r,e.id,t,i)||T(e,n)}))}(e,r,n,t,i).map((function(e){return Z(e,n)})).sort(C)}function L(e,r){switch(e){case h.aC.ROLE:return v.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;case h.aC.OWNER:return v.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;case h.aC.ADMINISTRATOR:
return v.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;case h.aC.MEMBER:return r?v.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER:null;case h.aC.EMPTY_STATE:return null}}function U(e){switch(e){case h.aC.ROLE:return v.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;case h.aC.OWNER:return v.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;case h.aC.ADMINISTRATOR:return v.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;case h.aC.MEMBER:return v.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;case h.aC.EMPTY_STATE:default:return null}}function G(e,r,n){var i=e.permissionOverwrites[e.guild_id];null==i&&(i=d.ZP.makeEveryoneOverwrite(e.guild_id));var o=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))))
;t.forEach((function(r){O(e,r,n[r])}))}return e}({},i);o.deny=t.Z.remove(o.deny,r);o.allow=t.Z.remove(o.allow,r);n||(o.deny=t.Z.add(o.deny,r));return o}function H(e,r,n){var t=G(e,r,n);(0,o.kY)(e,t.id,t.allow,t.deny)}function k(e,r){var n=l.default.getCurrentUser();if(null!=n){var i=e.permissionOverwrites[n.id];if(null==i){var s={id:n.id,type:u.BN.MEMBER,allow:t.Z.add(d.ZP.NONE,r),deny:d.ZP.NONE};(0,o.hw)(e.id,[s],!0)}else{var a=i.allow,c=i.deny;a=t.Z.add(a,r);(0,o.kY)(e,i.id,a,c)}}}function x(e,r){if(null==e)return!1;var n=e.permissionOverwrites[e.guild_id];null!=(null==r?void 0:r[e.guild_id])&&(n=r[e.guild_id]);return null!=n&&t.Z.has(n.deny,e.accessPermissions)}function V(e){var r=Object.keys(e.roles);return 0!==r.length&&(1!==r.length||r[0]!==e.id)}function z(e,r,n){return e===E.d4z.GUILD_TEXT||e===E.d4z.GUILD_ANNOUNCEMENT?r:!(0,s.bw)(e)&&e!==E.d4z.GUILD_CATEGORY||r&&n}function W(e){switch(e){case E.d4z.GUILD_TEXT:case E.d4z.GUILD_ANNOUNCEMENT:
return v.Z.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();case E.d4z.GUILD_VOICE:return v.Z.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();case E.d4z.GUILD_CATEGORY:return v.Z.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();default:return null}}function B(e,r){var n=[];Object.values(e).forEach((function(e){var t=e.row;null!=t.id&&""!==t.id&&(t.rowType===h.aC.ROLE?n.push((0,c.rX)(t.id,r)):t.rowType===h.aC.MEMBER&&n.push((0,c.jZ)(t.id,r)))}));return n}},127949:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(285183);function i(e,r){if(__OVERLAY__){var n=r.getGame(),i=(0,t.QF)();return null==n||null==i?null:{id:n.id,pid:i,pidPath:[],nativeProcessObserverId:0,hidden:!1,elevated:!1,name:n.name,lastFocused:0,exePath:"",exeName:"",cmdLine:"",processName:"",distributor:null,windowHandle:null}}return e.getVisibleGame()}},839574:(e,r,n)=>{n.d(r,{C:()=>S,u:()=>I})
;var t=n(368365),i=n(992497),o=n(7046),u=n(653772),s=n(182434),a=n(836670),l=n(17611),c=n(353637),f=n(461061),d=n(959797);function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function h(e,r,n,t,i,o,u){try{var s=e[o](u),a=s.value}catch(e){n(e);return}s.done?r(a):Promise.resolve(a).then(t,i)}function E(e){return function(){var r=this,n=arguments;return new Promise((function(t,i){var o=e.apply(r,n);function u(e){h(o,t,i,u,s,"next",e)}function s(e){h(o,t,i,u,s,"throw",e)}u(void 0)}))}}function v(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return p(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n)
;if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=function(e,r){var n,t,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,t&&(i=2&o[0]?t.return:o[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,o[1])).done)return i;(t=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:u.label++;return{value:o[1],done:!1};case 5:u.label++;t=o[1];o=[0];continue;case 7:o=u.ops.pop();u.trys.pop();continue;default:if(!(i=u.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0
;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1];i=o;break}if(i&&u.label<i[2]){u.label=i[2];u.ops.push(o);break}i[2]&&u.ops.pop();u.trys.pop();continue}o=r.call(e,u)}catch(e){o=[6,e];t=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};function S(e,r){return _.apply(this,arguments)}function _(){return(_=E((function(e,r){return O(this,(function(n){switch(n.label){case 0:return null==e?[2,!0]:[4,N(e,r,{removingView:!0,removingChat:!0})];case 1:return[2,n.sent()]}}))}))).apply(this,arguments)}function N(e,r,n){return y.apply(this,arguments)}function y(){return(y=E((function(e,r,n){var t,i,o,d,p,h,E;return O(this,(function(O){switch(O.label){case 0:return null==(i=u.Z.getGuild(e))?[2,!0]:(o=null!=i&&(null===(t=i.features)||void 0===t?void 0:t.has(f.oNc.GUILD_ONBOARDING)))?o&&a.Z.shouldFetchPrompts(e)?[4,(0,s.eM)(e)]:[3,2]:[2,!0];case 1:O.sent();O.label=2;case 2:d=a.Z.getDefaultChannelIds(e)
;if(!d.includes(r))return[2,!0];p=n.removingView&&d.length-1<c.md;h=(0,l.od)(e,v(d));E=(n.removingChat||n.removingView)&&h.length-1<c.X;return[2,!p&&!E]}}))}))).apply(this,arguments)}function I(e,r,n){return g.apply(this,arguments)}function g(){return(g=E((function(e,r,n){var u,s,a,l;return O(this,(function(c){switch(c.label){case 0:if(null==(u=e.getGuildId()))return[2,!0];null!=n&&(r=t.Z.filter(r,t.Z.invert(n)));s=e.permissionOverwrites[u];a=null!=s?t.Z.filter(s.deny,t.Z.invert(s.allow)):t.Z.deserialize(0);l={removingView:t.Z.has(r,f.Plq.VIEW_CHANNEL)&&!t.Z.has(a,f.Plq.VIEW_CHANNEL),removingChat:!1};e.isForumChannel()?l.removingChat=t.Z.has(r,f.Plq.SEND_MESSAGES_IN_THREADS)&&!t.Z.has(a,f.Plq.SEND_MESSAGES_IN_THREADS):l.removingChat=t.Z.has(r,f.Plq.SEND_MESSAGES)&&!t.Z.has(a,f.Plq.SEND_MESSAGES);return l.removingChat||l.removingView?[4,N(u,e.id,l)]:[2,!0];case 1:if(!c.sent()){i.Z.show({title:d.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
body:d.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({onClick:function(){i.Z.close();o.Z.open(u,f.pNK.ONBOARDING)}})});return[2,!1]}return[2,!0]}}))}))).apply(this,arguments)}},71284:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(785893),i=(n(667294),n(240243));function o(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function u(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}));return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++){n=o[t]
;r.indexOf(n)>=0||(i[n]=e[n])}return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++){n=o[t];r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}}return i}function a(e){var r=e.width,n=void 0===r?24:r,a=e.height,l=void 0===a?24:a,c=e.color,f=void 0===c?"currentColor":c,d=e.foreground,p=s(e,["width","height","color","foreground"]);return(0,t.jsx)("svg",u(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){o(e,r,n[r])}))}return e}({},(0,i.Z)(p)),{width:n,height:l,viewBox:"0 0 24 24",children:(0,t.jsx)("path",{className:d,fill:f,fillRule:"evenodd",clipRule:"evenodd",
d:"M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z"})}))}},436053:(e,r,n)=>{n.d(r,{u:()=>R,Z:()=>Z});var t=n(785893),i=n(667294),o=n(294184),u=n.n(o),s=n(441143),a=n.n(s),l=n(331535),c=n(356002),f=n(327090),d=n(775041),p=n(761434),h=n(915306),E=n(402919),v=n(440455),O=n(427215),S=n.n(O);function _(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function N(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function y(e){y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return y(e)}function I(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){
return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){N(e,r,n[r])}))}return e}function g(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}));return e}function b(e,r){return!r||"object"!==w(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function m(e,r){m=Object.setPrototypeOf||function(e,r){e.__proto__=r;return e};return m(e,r)}var w=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function A(e){var r=function(){
if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,t=y(e);if(r){var i=y(this).constructor;n=Reflect.construct(t,arguments,i)}else n=t.apply(this,arguments);return b(this,n)}}var R={SIZE_16:16,SIZE_24:24,SIZE_32:32,SIZE_56:56};function P(e,r){var n=e instanceof d.Z?e:null!=e?e.user:null;return null!=n?n.id:"user-".concat(r)}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.SIZE_24;switch(e){case R.SIZE_16:return S().size16;case R.SIZE_24:return S().size24;case R.SIZE_32:return S().size32;case R.SIZE_56:return S().size56;default:return S().size24}}var T=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,
writable:!0,configurable:!0}});r&&m(e,r)}(n,e);var r=A(n);function n(){_(this,n);var e;(e=r.apply(this,arguments)).state={popoutUserId:null};e._ref=i.createRef();e.defaultRenderUser=function(r,n,i){var o=e.props,u=o.showUserPopout,s=o.guildId,a=o.size;if(null==r){if(e.props.showDefaultAvatarsForNullUsers){var c=(null!=i?i:0)%E.Z.DEFAULT_AVATARS.length,f=E.Z.DEFAULT_AVATARS[c];return(0,t.jsx)("img",{src:f,alt:"",className:S().avatar})}return(0,t.jsx)("div",{className:S().emptyUser})}var d=(0,t.jsx)("img",{src:r.getAvatarURL(s,a),alt:r.username,className:S().avatar},r.id);return u?(0,t.jsx)(l.P3,{className:S().clickableAvatar,onClick:function(){null!=e._ref.current&&null!=r&&e.setState({popoutUserId:r.id})},tabIndex:-1,children:d},r.id):d};return e}var o=n.prototype;o.renderUsers=function(){for(var e=this.props,r=e.users,n=e.max,i=e.renderUser,o=void 0===i?this.defaultRenderUser:i,u=e.size,s=e.extraDetail,a=[],l=r.length===n?r.length:n-1,c=this.renderMoreUsers(l),f=0;f<l&&f<r.length;){
var d,p=null==c&&null==s&&f===r.length-1,h=o(r[f],p,f);a.push(p?(0,t.jsx)("div",{className:S().avatarContainer,children:h},P(null!==(d=r[f])&&void 0!==d?d:null,f)):(0,t.jsx)(v.ZP,{className:S().avatarContainerMasked,height:u,width:u,mask:v.ZP.Masks.VOICE_USER_SUMMARY_ITEM,children:h},P(r[f],f)));f++}null!=s?a.push(s):null!=c&&a.push(c);return a};o.renderMoreUsers=function(e){var r=this.props,n=r.max,o=r.count,u=r.hideMoreUsers,s=r.renderMoreUsers,a=r.users,l=Math.min(e,a.length);if(!u)if(null!=o){if(o>=n)return(0,t.jsx)(i.Fragment,{children:s("".concat(n,"+"),n)},"more-users");if(o>a.length){var c=o-a.length;return(0,t.jsx)(i.Fragment,{children:s("+".concat(c),c)},"more-users")}}else if(l<a.length){var f=Math.min(a.length-l,99);return(0,t.jsx)(i.Fragment,{children:s("+".concat(f),f)},"more-users")}};o.renderIcon=function(){return this.props.renderIcon?(0,t.jsx)(h.Z,{foreground:S().foreground,className:S().icon}):null};o.render=function(){
var e=this,r=this.props,n=r.className,i=r.size,o=r.users,s=r.guildId,l=r.showUserPopout,d=this.state.popoutUserId,h=o.find((function(e){return null!=e&&e.id===d}));return(0,t.jsx)(p.ZP,{position:p.ZP.Positions.RIGHT,preload:null==h?void 0:function(){return(0,c.Z)(h.id,h.getAvatarURL(s,80),{guildId:s})},shouldShow:!0===l&&null!=d,fixed:!0,renderPopout:function(r){a()(null!=d,"UserSummaryItem.render - renderPopout: popoutUserId cannot be null");return(0,t.jsx)(f.Z,g(I({},e.props,r),{userId:d,guildId:e.props.guildId}))},onRequestClose:function(){return e.setState({popoutUserId:null})},children:function(r){return(0,t.jsxs)("div",g(I({className:u()(n,S().container,M(i)),ref:e._ref},r),{children:[e.renderIcon(),e.renderUsers()]}))}})};return n}(i.PureComponent);T.defaultProps={max:10,renderMoreUsers:function(e){return(0,t.jsx)("div",{className:S().moreUsers,children:e})},renderIcon:!1,showDefaultAvatarsForNullUsers:!1,size:R.SIZE_24};const Z=T},137680:(e,r,n)=>{n.d(r,{Z:()=>a})
;var t=n(441143),i=n.n(t),o=n(496486),u=n.n(o),s=n(866452);function a(e,r,n){var t=window.DiscordNative;i()(null!=t,"Can't get desktop sources outside of native app");n=null!=n?n:{width:150,height:150};var o=[];if((r=null!=r?r:[s.vA.WINDOW,s.vA.SCREEN]).includes(s.vA.SCREEN)&&e.supports(s.AN.SCREEN_PREVIEWS)){o.push(e.getScreenPreviews(n.width,n.height));r=r.filter((function(e){return e!==s.vA.SCREEN}))}if(r.includes(s.vA.WINDOW)&&e.supports(s.AN.WINDOW_PREVIEWS)){o.push(e.getWindowPreviews(n.width,n.height));r=r.filter((function(e){return e!==s.vA.WINDOW}))}0!==r.length&&o.push(t.desktopCapture.getDesktopCaptureSources({types:r,thumbnailSize:n}));return Promise.all(o).then((function(e){return u().flatten(e)}))}}}]);
//# sourceMappingURL=1d7e97ba0a46f37e6e0f.js.map