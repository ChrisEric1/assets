"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[1951],{810574:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(730381),o=r.n(t),i=r(354290);function u(e,n,r,t,o,i,u){try{var l=e[i](u),a=l.value}catch(e){r(e);return}l.done?n(a):Promise.resolve(a).then(t,o)}var l=function(e,n){var r,t,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;t=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,
o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e];t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};const a={setCommunicationDisabledDuration:function(e,n,r,t){return(a=function(){return l(this,(function(u){switch(u.label){case 0:return[4,i.Z.setCommunicationDisabledUntil(e,n,null!=r?o()().add(r,"s").toISOString():null,r,t)];case 1:u.sent();return[2]}}))},function(){var e=this,n=arguments;return new Promise((function(r,t){var o=a.apply(e,n);function i(e){u(o,r,t,i,l,"next",e)}function l(e){u(o,r,t,i,l,"throw",e)}i(void 0)}))})();var a}}},96511:(e,n,r)=>{r.d(n,{Z:()=>Z})
;var t=r(785893),o=r(667294),i=r(363010),u=r(481542),l=r(769672),a=r(881699),c=r(356002),s=r(631134),f=r(653772),d=r(940712),b=r(859023),p=r(897576),v=r(461061),y=r(959797),h=r(35637),g=r.n(h);function m(e,n,r,t,o,i,u){try{var l=e[i](u),a=l.value}catch(e){r(e);return}l.done?n(a):Promise.resolve(a).then(t,o)}function E(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function u(e){m(i,t,o,u,l,"next",e)}function l(e){m(i,t,o,u,l,"throw",e)}u(void 0)}))}}function O(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function S(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));r.push.apply(r,t)}return r
}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}));return e}var w=function(e,n){var r,t,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;t=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2]
;u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e];t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};function Z(e,n,h,m,Z){var P=f.Z.getGuild(e),I=s.default.getId(),M=(0,i.e7)([b.default],(function(){return b.default.getUser(n)}));(0,i.e7)([d.Z],(function(){return d.Z.getGuildVersion(e)}),[e]);var j=o.useMemo((function(){return O({},e,[n])}),[e,n]);(0,u.$)(j);var N=m===v.IlC.POPOUT,_=(0,a.Z)({guild:P,analyticsLocation:h});if(null==P||N)return null;var A=I===n&&(d.Z.can(v.Plq.CHANGE_NICKNAME,P)||d.Z.can(v.Plq.MANAGE_NICKNAMES,P)),C=I===n,R=d.Z.canManageUser(v.Plq.MANAGE_NICKNAMES,n,P);if(!(A||R||C))return null;if(null==M)return null;var x=P.hasFeature(v.oNc.HUB)?y.Z.Messages.HUB_EDIT_PROFILE:y.Z.Messages.CHANGE_IDENTITY,D=C?x:y.Z.Messages.CHANGE_NICKNAME;return(0,t.jsx)(l.sN,{id:"change-nickname",label:(0,t.jsx)("div",{className:g().labelWrapper,children:(0,t.jsx)("span",{className:g().label,children:D})}),
icon:Z,action:function(){if(C){(0,c.Z)(M.id,M.getAvatarURL(e,80),{guildId:e});_()}else(0,p.ZD)(E((function(){var n,o;return w(this,(function(i){switch(i.label){case 0:return[4,Promise.all([r.e(40532),r.e(74253)]).then(r.bind(r,374253))];case 1:n=i.sent(),o=n.default;return[2,function(n){return(0,t.jsx)(o,S(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){O(e,n,r[n])}))}return e}({},n),{guildId:e,user:M,analyticsSource:h}))}]}}))})))}})}},271273:(e,n,r)=>{r.d(n,{Z:()=>F});var t=r(785893),o=r(667294),i=r(363010),u=r(810574),l=r(354290),a=r(481542),c=r(897576);function s(e,n,r,t,o,i,u){try{var l=e[i](u),a=l.value}catch(e){r(e);return}l.done?n(a):Promise.resolve(a).then(t,o)}function f(e){return function(){var n=this,r=arguments
;return new Promise((function(t,o){var i=e.apply(n,r);function u(e){s(i,t,o,u,l,"next",e)}function l(e){s(i,t,o,u,l,"throw",e)}u(void 0)}))}}function d(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function b(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){d(e,n,r[n])}))}return e}var p=function(e,n){var r,t,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,
t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;t=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e];t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};var v=r(539116),y=r(113204),h=r(204424),g=r(769672),m=r(356004),E=r(212218),O=r(653772),S=r(940712),w=r(859023),Z=r(882687),P=r(112712),I=r(911324),M=r(418674),j=r(570992),N=r(461061),_=r(809096),A=r(959797);function C(e,n){(null==n||n>e.length)&&(n=e.length)
;for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function R(e,n,r,t,o,i,u){try{var l=e[i](u),a=l.value}catch(e){r(e);return}l.done?n(a):Promise.resolve(a).then(t,o)}function x(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function u(e){R(i,t,o,u,l,"next",e)}function l(e){R(i,t,o,u,l,"throw",e)}u(void 0)}))}}function D(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function k(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){D(e,n,r[n])}))}return e}function U(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e)
;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}));return e}function T(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(t=r.next()).done);u=!0){i.push(t.value);if(n&&i.length===n)break}}catch(e){l=!0;o=e}finally{try{u||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,n)||L(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){
if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||L(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,n){if(e){if("string"==typeof e)return C(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,n):void 0}}var B=function(e,n){var r,t,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),
0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;t=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e];t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};function F(e,n,s){var d=o.useMemo((function(){return D({},n,[e.id])}),[n,e.id]);(0,a.$)(d);(0,i.e7)([S.Z],(function(){return S.Z.getGuildVersion(n)}),[n]);var C,R=(0,i.e7)([O.Z],(function(){return O.Z.getGuild(n)}),[n]),L=(0,i.e7)([w.default],(function(){var n;return(null===(n=w.default.getCurrentUser())||void 0===n?void 0:n.id)===e.id
}),[e.id]),F=(0,i.e7)([m.Z],(function(){return m.Z.getChannel(s)}),[s]),V=T((0,y.ZP)(e.id,n),2)[1],q=null==F?void 0:F.isGuildStageVoice(),K=(0,i.cj)([Z.Z],(function(){var r,t,o,i=Z.Z.getVoiceState(n,e.id);return{muted:null!==(r=null==i?void 0:i.mute)&&void 0!==r&&r,deafened:null!==(t=null==i?void 0:i.deaf)&&void 0!==t&&t,suppressed:null!==(o=null==i?void 0:i.suppress)&&void 0!==o&&o,voiceChannelId:null==i?void 0:i.channelId}})),Y=K.muted,H=K.deafened,W=K.suppressed,Q=K.voiceChannelId,$=(0,i.e7)([E.ZP],(function(){return E.ZP.getMember(n,e.id)})),z=(0,v.Z)(n,e.id),J=null!=Q&&null!=s&&S.Z.canWithPartialContext(N.Plq.VIEW_CHANNEL,{channelId:Q})?[(!q||q&&!W)&&S.Z.canWithPartialContext(N.Plq.MUTE_MEMBERS,{channelId:s})?(0,t.jsx)(g.S8,{id:"voice-mute",label:A.Z.Messages.SERVER_VOICE_MUTE,checked:Y,color:"danger",action:function(){return l.Z.setServerMute(n,e.id,!Y)}},"voice-mute"):null,(!q||q&&!W)&&S.Z.canWithPartialContext(N.Plq.DEAFEN_MEMBERS,{channelId:s})?(0,t.jsx)(g.S8,{
id:"voice-deafen",label:A.Z.Messages.SERVER_DEAFEN,checked:H,color:"danger",action:function(){return l.Z.setServerDeaf(n,e.id,!H)}},"voice-deafen"):null,!L&&null!=R&&S.Z.canWithPartialContext(N.Plq.MOVE_MEMBERS,{channelId:s})?(0,t.jsx)(g.sN,{id:"voice-disconnect",label:L?A.Z.Messages.DISCONNECT_SELF:A.Z.Messages.DISCONNECT_OTHER,color:"danger",action:function(){return l.Z.setChannel(n,e.id,null)}},"voice-disconnect"):null]:[],X=(C=x((function(n,r,t){var o;return B(this,(function(i){switch(i.label){case 0:if(!n.ctrlKey&&!n.metaKey)return[3,4];i.label=1;case 1:i.trys.push([1,3,,4]);return[4,u.Z.setCommunicationDisabledDuration(r,t,_.UK.DURATION_60_SEC)];case 2:i.sent();(0,I.CF)((0,P.Yz)(A.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({user:null!==(o=j.Z.getName(r,null,e))&&void 0!==o?o:""}),P.pC.SUCCESS));return[3,4];case 3:i.sent();(0,I.CF)((0,P.Yz)(A.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR,P.pC.FAILURE));return[3,4];case 4:return[2]}}))})),function(e,n,r){
return C.apply(this,arguments)}),ee=null;if(!L&&null!=R&&null!=$&&null!=$.joinedAt&&S.Z.canManageUser(N.Plq.MODERATE_MEMBERS,e,R)&&R.hasFeature(N.oNc.GUILD_ONBOARDING_EVER_ENABLED)){var ne;if((0,M.yE)(null!==(ne=$.flags)&&void 0!==ne?ne:0,h.qQ.BYPASSES_VERIFICATION)){var re;ee=(0,t.jsx)(g.sN,{id:"verify",label:A.Z.Messages.MANUALLY_UNVERIFY_MEMBER,action:function(){return l.Z.setMemberFlags(R.id,e.id,(0,M.mB)(null!==(re=$.flags)&&void 0!==re?re:0,h.qQ.BYPASSES_VERIFICATION,!1))}},"verify")}else{var te;ee=(0,t.jsx)(g.sN,{id:"verify",label:A.Z.Messages.MANUALLY_VERIFY_MEMBER,action:function(){return l.Z.setMemberFlags(R.id,e.id,(0,M.mB)(null!==(te=$.flags)&&void 0!==te?te:0,h.qQ.BYPASSES_VERIFICATION,!0))}},"verify")}}var oe=L||null==R?[]:[ee,z?V?(0,t.jsx)(g.sN,{id:"removetimeout",label:A.Z.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({user:e.username}),color:"danger",action:function(){!function(e,n){(0,c.ZD)(f((function(){var o,i;return p(this,(function(u){switch(u.label){case 0:
return[4,Promise.all([r.e(40532),r.e(99964)]).then(r.bind(r,499964))];case 1:o=u.sent(),i=o.default;return[2,function(r){return(0,t.jsx)(i,b({guildId:e,userId:n},r))}]}}))})))}(n,e.id)}},"removetimeout"):(0,t.jsx)(g.sN,{id:"timeout",label:A.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({user:e.username}),color:"danger",action:function(o){if(o.ctrlKey||o.metaKey)return X(o,n,e.id);!function(e,n){(0,c.ZD)(f((function(){var o,i;return p(this,(function(u){switch(u.label){case 0:return[4,Promise.all([r.e(40532),r.e(43895)]).then(r.bind(r,843895))];case 1:o=u.sent(),i=o.default;return[2,function(r){return(0,t.jsx)(i,b({guildId:e,userId:n},r))}]}}))})))}(n,e.id)}},"timeout"):null,S.Z.canManageUser(N.Plq.KICK_MEMBERS,e,R)?(0,t.jsx)(g.sN,{id:"kick",label:A.Z.Messages.KICK_USER.format({user:e.username}),color:"danger",action:function(){return(0,c.ZD)(x((function(){var o,i;return B(this,(function(u){switch(u.label){case 0:
return[4,Promise.all([r.e(40532),r.e(87646)]).then(r.bind(r,687646))];case 1:o=u.sent(),i=o.default;return[2,function(r){return(0,t.jsx)(i,U(k({},r),{guildId:n,user:e}))}]}}))})))}},"kick"):null,S.Z.canManageUser(N.Plq.BAN_MEMBERS,e,R)?(0,t.jsx)(g.sN,{id:"ban",label:A.Z.Messages.BAN_USER.format({user:e.username}),color:"danger",action:function(){return(0,c.ZD)(x((function(){var o,i;return B(this,(function(u){switch(u.label){case 0:return[4,Promise.all([r.e(40532),r.e(14325)]).then(r.bind(r,314325))];case 1:o=u.sent(),i=o.default;return[2,function(r){return(0,t.jsx)(i,U(k({},r),{guildId:n,user:e}))}]}}))})))}},"ban"):null];return G(J).concat(G(oe))}},974230:(e,n,r)=>{r.d(n,{Z:()=>g});var t=r(785893),o=(r(667294),r(316921)),i=r(363010),u=r(730189),l=r(7046),a=r(769672),c=r(212218),s=r(653772),f=r(940712),d=r(153532),b=r(461061),p=r(959797),v=r(950677),y=r.n(v);function h(e,n){var r,i;return(0,t.jsxs)("div",{className:y().roleRow,children:["dot"===n?(0,t.jsx)(d.Z,{className:y().roleDot,
color:null!==(r=e.colorString)&&void 0!==r?r:(0,o.Rf)(b.p6O),background:!1,tooltip:!1}):(0,t.jsx)(d.x,{className:y().roleDot,color:null!==(i=e.colorString)&&void 0!==i?i:(0,o.Rf)(b.p6O)}),(0,t.jsx)("div",{children:e.name})]})}function g(e,n){var r=(0,i.e7)([s.Z],(function(){return s.Z.getGuild(n)}),[n]),o=(0,i.e7)([u.Z],(function(){return u.Z.roleStyle})),d=(0,i.cj)([c.ZP,f.Z],(function(){var t=c.ZP.getMember(n,e);return{userRoles:null!=t?t.roles:[],isGuildMember:null!=t,canManageRoles:null!=r&&f.Z.can(b.Plq.MANAGE_ROLES,r)}}),[e,n,r]),v=d.userRoles,y=d.isGuildMember,g=d.canManageRoles;if(__OVERLAY__)return null;if(null==v||null==r)return null;if(!y)return null;var m=f.Z.getHighestRole(r),E=Object.values(r.roles).filter((function(e){return e.id!==r.id})),O=g?E.map((function(i){var u=i.managed||!f.Z.isRoleHigher(r,m,i),c=-1!==v.indexOf(i.id);return u&&!c?null:(0,t.jsx)(a.S8,{id:i.id,label:function(){return h(i,o)},disabled:u,action:function(){return function(r){
v.includes(r.id)?l.Z.updateMemberRoles(n,e,v.filter((function(e){return e!==r.id})),[],[r.id]):l.Z.updateMemberRoles(n,e,v.concat([r.id]),[r.id],[])}(i)},checked:c},i.id)})):E.filter((function(e){return-1!==v.indexOf(e.id)})).map((function(e){return e.id===r.id?null:(0,t.jsx)(a.sN,{id:e.id,label:function(){return h(e,o)}},e.id)}));return 0===O.length?null:(0,t.jsx)(a.sN,{id:"roles",label:p.Z.Messages.ROLES_LIST.format({numRoles:3}),children:O})}}}]);
//# sourceMappingURL=6ecd3b3145ba708fe261.js.map