"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[69656],{361417:(t,e,r)=>{r.d(e,{W3:()=>G,pD:()=>y,e_:()=>P,C0:()=>O,X8:()=>L,dG:()=>N,bG:()=>b});var n=r(675860),_=r(173436),i=r(323657),I=r(490640);function u(t){u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return u(t)}function o(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t,e){E=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return E(t,e)}var s=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0
}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var _=u(this).constructor;r=Reflect.construct(n,arguments,_)}else r=n.apply(this,arguments);return o(this,r)}}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&E(t,e)}(r,t);var e=T(r);function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var n;(n=e.call(this)).id=t.id;n.guildId=t.guildId;n.userId=t.userId;n.user=t.user;n.ended=t.ended;n.endsAt=null!=t.endsAt?t.endsAt:null;return n}r.createFromServer=function(t){return new r({id:t.id,guildId:t.guild_id,userId:null!=t.user?t.user.id:t.user_id,user:t.user,ended:t.ended,endsAt:null!=t.ends_at&&""!==t.ends_at?new Date(t.ends_at):null})};return r}(I.Z);const c=a;var l=r(425600),R=r(461061);function S(t,e,r,n,_,i,I){try{
var u=t[i](I),o=u.value}catch(t){r(t);return}u.done?e(o):Promise.resolve(o).then(n,_)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,_){var i=t.apply(e,r);function I(t){S(i,n,_,I,u,"next",t)}function u(t){S(i,n,_,I,u,"throw",t)}I(void 0)}))}}var U=function(t,e){var r,n,_,i,I={label:0,sent:function(){if(1&_[0])throw _[1];return _[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;I;)try{if(r=1,n&&(_=2&i[0]?n.return:i[0]?n.throw||((_=n.return)&&_.call(n),0):n.next)&&!(_=_.call(n,i[1])).done)return _;(n=0,_)&&(i=[2&i[0],_.value]);switch(i[0]){case 0:case 1:_=i;break;case 4:I.label++;return{value:i[1],done:!1};case 5:I.label++;n=i[1];i=[0];continue;case 7:i=I.ops.pop();I.trys.pop();continue;default:if(!(_=I.trys,
_=_.length>0&&_[_.length-1])&&(6===i[0]||2===i[0])){I=0;continue}if(3===i[0]&&(!_||i[1]>_[0]&&i[1]<_[3])){I.label=i[1];break}if(6===i[0]&&I.label<_[1]){I.label=_[1];_=i;break}if(_&&I.label<_[2]){I.label=_[2];I.ops.push(i);break}_[2]&&I.ops.pop();I.trys.pop();continue}i=e.call(t,I)}catch(t){i=[6,t];n=0}finally{r=_=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function O(t){return M.apply(this,arguments)}function M(){return(M=f((function(t){var e,r;return U(this,(function(i){switch(i.label){case 0:return[4,n.Z.get({url:R.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(t),oldFormErrors:!0})];case 1:e=i.sent();r=e.body.map((function(t){return c.createFromServer(t)}));_.Z.dispatch({type:"GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",guildId:t,appliedBoosts:r});return[2,r]}}))}))).apply(this,arguments)}function L(){return D.apply(this,arguments)}function D(){return(D=f((function(){var t,e;return U(this,(function(r){switch(r.label){case 0:return[4,n.Z.get({
url:R.ANM.USER_GUILD_BOOST_SLOTS,oldFormErrors:!0})];case 1:t=r.sent();e=t.body.map((function(t){return l.Z.createFromServer(t)}));_.Z.dispatch({type:"GUILD_BOOST_SLOTS_FETCH_SUCCESS",guildBoostSlots:e});return[2,e]}}))}))).apply(this,arguments)}function P(){return p.apply(this,arguments)}function p(){return(p=f((function(){var t,e,r;return U(this,(function(I){switch(I.label){case 0:I.trys.push([0,2,,3]);return[4,n.Z.get({url:R.ANM.APPLIED_GUILD_BOOST_COOLDOWN,oldFormErrors:!0})];case 1:t=I.sent();e=t.body.ends_at;_.Z.dispatch({type:"APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS",endsAt:e});return[2,e];case 2:if(404===(r=I.sent()).status){_.Z.dispatch({type:"APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS",endsAt:null});return[2,null]}throw new i.zN(r);case 3:return[2]}}))}))).apply(this,arguments)}function G(t,e){return d.apply(this,arguments)}function d(){return(d=f((function(t,e){var r,I,u,o;return U(this,(function(E){switch(E.label){case 0:_.Z.dispatch({type:"GUILD_APPLY_BOOST_START"});E.label=1
;case 1:E.trys.push([1,3,,4]);return[4,n.Z.put({url:R.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(t),body:{user_premium_guild_subscription_slot_ids:e},oldFormErrors:!0})];case 2:r=E.sent();I=Array.isArray(r.body)?r.body.map(c.createFromServer):[c.createFromServer(r.body)];_.Z.dispatch({type:"GUILD_APPLY_BOOST_SUCCESS",appliedGuildBoost:I});L();return[2,I];case 3:u=E.sent();o=new i.zN(u);_.Z.dispatch({type:"GUILD_APPLY_BOOST_FAIL",error:o});throw o;case 4:return[2]}}))}))).apply(this,arguments)}function N(t,e){return A.apply(this,arguments)}function A(){return(A=f((function(t,e){var r,I;return U(this,(function(u){switch(u.label){case 0:_.Z.dispatch({type:"GUILD_UNAPPLY_BOOST_START"});u.label=1;case 1:u.trys.push([1,3,,4]);return[4,n.Z.delete({url:R.ANM.APPLIED_GUILD_BOOST(t,e),oldFormErrors:!0})];case 2:u.sent();L();return[3,4];case 3:r=u.sent();I=new i.zN(r);_.Z.dispatch({type:"GUILD_UNAPPLY_BOOST_FAIL",error:I});throw I;case 4:_.Z.dispatch({type:"GUILD_UNAPPLY_BOOST_SUCCESS",boostId:e})
;return[2]}}))}))).apply(this,arguments)}function y(t){return h.apply(this,arguments)}function h(){return(h=f((function(t){var e,r;return U(this,(function(i){switch(i.label){case 0:return[4,n.Z.post({url:R.ANM.USER_GUILD_BOOST_SLOT_CANCEL(t),oldFormErrors:!0})];case 1:e=i.sent();r=l.Z.createFromServer(e.body);_.Z.dispatch({type:"GUILD_BOOST_SLOT_UPDATE_SUCCESS",guildBoostSlot:r});return[2,r]}}))}))).apply(this,arguments)}function b(t){return m.apply(this,arguments)}function m(){return(m=f((function(t){var e,r;return U(this,(function(i){switch(i.label){case 0:return[4,n.Z.post({url:R.ANM.USER_GUILD_BOOST_SLOT_UNCANCEL(t),oldFormErrors:!0})];case 1:e=i.sent();r=l.Z.createFromServer(e.body);_.Z.dispatch({type:"GUILD_BOOST_SLOT_UPDATE_SUCCESS",guildBoostSlot:r});return[2,r]}}))}))).apply(this,arguments)}},814071:(t,e,r)=>{r.d(e,{Z:()=>U});var n=r(363010),_=r(173436);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){
for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1;n.configurable=!0;"value"in n&&(n.writable=!0);Object.defineProperty(t,n.key,n)}}function u(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}function o(t){o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return o(t)}function E(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}));return t}function s(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){
if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t,e){T=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return T(t,e)}var a=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var r,n=o(t);if(e){var _=o(this).constructor;r=Reflect.construct(n,arguments,_)}else r=n.apply(this,arguments);return s(this,r)}}var l=!1,R={};function S(t){var e=t.guildBoostSlot;R=E(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r)
;"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))));n.forEach((function(e){u(t,e,r[e])}))}return t}({},R),u({},e.id,e))}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&T(t,e)}(r,t);var e=c(r);function r(){i(this,r);return e.apply(this,arguments)}var n=r.prototype;n.getGuildBoostSlot=function(t){return R[t]};n.__getLocalVars=function(){return{hasFetched:l,guildBoostSlots:R}};!function(t,e,r){e&&I(t.prototype,e);r&&I(t,r)}(r,[{key:"hasFetched",get:function(){return l}},{key:"boostSlots",get:function(){return R}}]);return r}(n.ZP.Store);f.displayName="GuildBoostSlotStore";const U=new f(_.Z,{GUILD_BOOST_SLOTS_FETCH_SUCCESS:function(t){var e=t.guildBoostSlots;R={}
;e.forEach((function(t){R[t.id]=t}));l=!0},GUILD_BOOST_SLOT_UPDATE_SUCCESS:S,GUILD_BOOST_SLOT_CREATE:S,GUILD_BOOST_SLOT_UPDATE:S,LOGOUT:function(){R={};l=!1}})},75141:(t,e,r)=>{r.d(e,{Ro:()=>n,$8:()=>D,FZ:()=>P,A3:()=>p,ig:()=>G,cP:()=>d,nW:()=>N,e9:()=>A,yw:()=>y,ge:()=>h,rF:()=>b,Fd:()=>m,xf:()=>g,FR:()=>v,tb:()=>C,f2:()=>Z,iK:()=>w,vx:()=>K,aq:()=>B,Vx:()=>j,_k:()=>H,vn:()=>F,MO:()=>Y,gZ:()=>x,Qi:()=>k,KK:()=>V});var n,_=r(496486),i=r.n(_),I=r(730381),u=r.n(I),o=r(814071),E=r(720897),s=r(371452),T=r(90816),a=r(95467),c=r(74030),l=r(461061),R=r(298716),S=r(959797);function f(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}!function(t){t[t.EMOJI=1]="EMOJI";t[t.AUDIO=2]="AUDIO";t[t.ANIMATED=3]="ANIMATED";t[t.CUSTOMIZATION=4]="CUSTOMIZATION";t[t.UPLOAD=5]="UPLOAD";t[t.VANITY=6]="VANITY";t[t.STREAM=7]="STREAM";t[t.STICKER=8]="STICKER";t[t.CUSTOM_ROLE_ICON=11]="CUSTOM_ROLE_ICON";t[t.STAGE_VIDEO=12]="STAGE_VIDEO"}(n||(n={}))
;var U,O,M=[l.Eu4.NONE,l.Eu4.TIER_1,l.Eu4.TIER_2,l.Eu4.TIER_3],L=(f(U={},l.Eu4.NONE,5),f(U,l.Eu4.TIER_1,10),f(U,l.Eu4.TIER_2,15),f(U,l.Eu4.TIER_3,30),U),D=(f(O={},l.Eu4.NONE,L[l.Eu4.NONE]),f(O,l.Eu4.TIER_1,L[l.Eu4.NONE]+L[l.Eu4.TIER_1]),f(O,l.Eu4.TIER_2,L[l.Eu4.NONE]+L[l.Eu4.TIER_1]+L[l.Eu4.TIER_2]),f(O,l.Eu4.TIER_3,L[l.Eu4.NONE]+L[l.Eu4.TIER_1]+L[l.Eu4.TIER_2]+L[l.Eu4.TIER_3]),O),P=function(t,e){var r;return t===l.Eu4.NONE?l.Eu4.TIER_1:null===(r=Y(e).find((function(e){return e.tier===t})))||void 0===r?void 0:r.nextTier},p=function(t){return D[t]},G=function(t){return L[t]},d=function(t){return[{tier:l.Eu4.TIER_1,title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,perks:[{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({adding:R.HO[l.Eu4.TIER_1].limits.emoji-R.HO[l.Eu4.NONE].limits.emoji,total:R.HO[l.Eu4.TIER_1].limits.emoji}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,icon:n.EMOJI},{
title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({adding:G(l.Eu4.TIER_1),total:p(l.Eu4.TIER_1)}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,icon:n.STICKER},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({bitrate:R.HO[l.Eu4.TIER_1].limits.bitrate/1e3}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,icon:n.AUDIO},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),icon:n.ANIMATED},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,icon:n.CUSTOMIZATION},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,icon:n.STREAM}].filter(T.lm)},{tier:l.Eu4.TIER_2,title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,perks:[{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({adding:R.HO[l.Eu4.TIER_2].limits.emoji-R.HO[l.Eu4.TIER_1].limits.emoji,total:R.HO[l.Eu4.TIER_2].limits.emoji}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,icon:n.EMOJI},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({adding:G(l.Eu4.TIER_2),total:p(l.Eu4.TIER_2)}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,icon:n.STICKER},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({bitrate:R.HO[l.Eu4.TIER_2].limits.bitrate/1e3}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,icon:n.AUDIO},{
title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,icon:n.CUSTOMIZATION},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({fileSize:(0,s.BU)(R.HO[l.Eu4.TIER_2].limits.fileSize/1024,{useKibibytes:!0})}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),icon:n.UPLOAD},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,icon:n.STREAM},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,icon:n.CUSTOM_ROLE_ICON},t?{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({limit:l.eez}),
description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({limit:l.eez}),icon:n.STAGE_VIDEO}:null].filter(T.lm)},{tier:l.Eu4.TIER_3,title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,perks:[{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({adding:R.HO[l.Eu4.TIER_3].limits.emoji-R.HO[l.Eu4.TIER_2].limits.emoji,total:R.HO[l.Eu4.TIER_3].limits.emoji}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,icon:n.EMOJI},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({adding:G(l.Eu4.TIER_3),total:p(l.Eu4.TIER_3)}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,icon:n.STICKER},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({bitrate:R.HO[l.Eu4.TIER_3].limits.bitrate/1e3}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
icon:n.AUDIO},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({helpdeskArticle:a.Z.getArticleURL(l.BhN.GUILD_VANITY_URL)}),icon:n.VANITY},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({fileSize:(0,s.BU)(R.HO[l.Eu4.TIER_3].limits.fileSize/1024,{useKibibytes:!0})}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),icon:n.UPLOAD},{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,icon:n.ANIMATED},t?{title:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({limit:l.RcX}),description:S.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({limit:l.RcX}),icon:n.STAGE_VIDEO}:null].filter(T.lm)}]};function N(t){
switch(t){case l.Eu4.NONE:return S.Z.Messages.PREMIUM_GUILD_TIER_0;case l.Eu4.TIER_1:return S.Z.Messages.PREMIUM_GUILD_TIER_1;case l.Eu4.TIER_2:return S.Z.Messages.PREMIUM_GUILD_TIER_2;case l.Eu4.TIER_3:return S.Z.Messages.PREMIUM_GUILD_TIER_3;default:throw new Error("Not a valid tier type")}}function A(t){switch(t){case l.Eu4.NONE:return S.Z.Messages.PREMIUM_GUILD_TIER_0;case l.Eu4.TIER_1:return S.Z.Messages.PREMIUM_GUILD_TIER_1_SHORT;case l.Eu4.TIER_2:return S.Z.Messages.PREMIUM_GUILD_TIER_2_SHORT;case l.Eu4.TIER_3:return S.Z.Messages.PREMIUM_GUILD_TIER_3_SHORT;default:throw new Error("Not a valid tier type")}}var y=i().memoize((function(t){return R.HO[l.Eu4.TIER_1].features.includes(t)?l.Eu4.TIER_1:R.HO[l.Eu4.TIER_2].features.includes(t)?l.Eu4.TIER_2:R.HO[l.Eu4.TIER_3].features.includes(t)?l.Eu4.TIER_3:null})),h=function(t){return t===l.Eu4.NONE?l.Qqv.NONE:t===l.Eu4.TIER_1?l.Qqv.TIER_1:t===l.Eu4.TIER_2?l.Qqv.TIER_2:t===l.Eu4.TIER_3?l.Qqv.TIER_3:null};function b(t,e){
var r=!0,n=!1,_=void 0;try{for(var i,I=Y(e)[Symbol.iterator]();!(r=(i=I.next()).done);r=!0){var u=i.value;if(t>=u.amount)return u.tier}}catch(t){n=!0;_=t}finally{try{r||null==I.return||I.return()}finally{if(n)throw _}}return l.Eu4.NONE}function m(t,e){var r=!0,n=!1,_=void 0;try{for(var i,I=Y(e)[Symbol.iterator]();!(r=(i=I.next()).done);r=!0){var u=i.value;if(t>=u.amount)return u.nextTier}}catch(t){n=!0;_=t}finally{try{r||null==I.return||I.return()}finally{if(n)throw _}}return l.Eu4.TIER_1}function g(t){var e;return null!==(e=u()().diff(u()(t),"months"))&&void 0!==e?e:1}function v(t){var e=u()().diff(t,"months"),r=1,n=!0,_=!1,i=void 0;try{for(var I,o=Object.keys(l.yix)[Symbol.iterator]();!(n=(I=o.next()).done);n=!0){var E=I.value;e<l.yix[E]||(r=+E)}}catch(t){_=!0;i=t}finally{try{n||null==o.return||o.return()}finally{if(_)throw i}}return r}function C(t,e){return null==e||null!=t&&t>=e}function Z(t,e){return C(t.premiumTier,e)}function w(t){
var e=t.premiumSubscriberCount,r=t.premiumTier,n=m(e,t.id);if(null==n)return 100;var _=F(t.id),i=Y(t.id).length,I=_[r],u=100*r/i,o=100*(e-I)/(_[n]-I);return Math.min(u+o/i,100)}function K(t){return i().values(t).filter((function(t){return t.isAvailable()}))}function B(){var t=E.Z.getPremiumTypeSubscription();if(null==t)return null;if(K(o.Z.boostSlots).length>0)return null;if(t.status===l.O0b.PAST_DUE)return S.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;if(t.status===l.O0b.ACCOUNT_HOLD)return S.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;if(null==t.renewalMutations)return null;var e=c.uV(t.renewalMutations.additionalPlans);return c.uV(t.additionalPlans)>e?S.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION:S.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN}function j(t,e){return H(t,e)>0}function H(t,e){
var r=b(t.length,e),n=F(e)[r],_=t.filter((function(t){return null!=t.endsAt}));return n-(t.length-_.length)}function F(t){return l.oCV}function Y(t){var e=F();return[{tier:l.Eu4.TIER_3,amount:e[l.Eu4.TIER_3],nextTier:null},{tier:l.Eu4.TIER_2,amount:e[l.Eu4.TIER_2],nextTier:l.Eu4.TIER_3},{tier:l.Eu4.TIER_1,amount:e[l.Eu4.TIER_1],nextTier:l.Eu4.TIER_2}]}function x(t,e){var r=H(t,e);if(r>0){var n=function(t){return t.sort((function(t,e){return null!=t.endsAt&&null!=e.endsAt?t.endsAt.getTime()-e.endsAt.getTime():-1}))}(t).filter((function(t){return null!=t.endsAt}));return n[n.length-r].endsAt}return null}function k(t,e){var r=G(e),n=M.indexOf(e);if(-1===n)return 0;var _=M[n-1],i=null!=_?p(_):0,I=p(e);return Math.max(0,r-t.slice(i,I).length)}function V(t,e){var r=t.premiumSubscriberCount,n=F(t.id)[e];return Math.max(0,n-r)}}}]);
//# sourceMappingURL=0882c50079a176bc5adc.js.map