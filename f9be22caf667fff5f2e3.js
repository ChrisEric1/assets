"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[76987],{976987:(n,e,t)=>{t.r(e);t.d(e,{default:()=>d});var r=t(785893),i=(t(667294),t(281081)),o=t(17611),a=t(7046),l=t(769672),u=t(463254),s=t(461061),c=t(959797);function d(n){var e=n.guild,t=n.onSelect,d=(0,u.Z)(e.id),f=(0,o.wC)(e.id);return(0,r.jsx)(l.ZP,{onSelect:t,navId:"guild-browse-channels-context-menu","aria-label":c.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,onClose:i.Zy,children:(0,r.jsxs)(l.kS,{children:[f&&(0,r.jsx)(l.sN,{id:"go-to-settings",label:c.Z.Messages.EDIT_ONBOARDING,action:function(){a.Z.open(e.id,s.pNK.ONBOARDING)}}),d]})})}},218892:(n,e,t)=>{t.d(e,{hi:()=>v,kH:()=>p,rz:()=>N,DQ:()=>I});var r=t(820028),i=t(204424),o=t(656284),a=t(537127),l=t(1812),u=t(212218),s=t(390504),c=t(418674),d=t(290495),f=t(513073);function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function h(n){return function(n){if(Array.isArray(n))return g(n)
}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"==typeof n)return g(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(n){var e,t,r=(0,f.r1)(n),o=null!==(t=null===(e=u.ZP.getSelfMember(n))||void 0===e?void 0:e.flags)&&void 0!==t?t:0,a=(0,c.yE)(o,i.qQ.COMPLETED_ONBOARDING),l=s.Z.getOptedInChannels(n).size>0;return!r&&!a&&!l}function p(n){if(v(n))N(n);else{var e=(0,f.r1)(n);(0,d.QG)(n,!e)}}function N(n){
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.include,r=void 0===t?new Set:t,i=e.exclude,a=void 0===i?new Set:i,u=l.ZP.getChannels(n),s=h(u[l.sH]).concat(h(u[l.Zb])).filter((function(n){var e=n.channel;return!e.isThread()&&!a.has(e.id)})).map((function(n){return n.channel.id}));r.forEach((function(n){return s.push(n)}));o.Z.onboardExistingMember(n,new Set(s))}function I(n){var e,t,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Z;return null!=n&&(0,c.yE)(null!==(i=null===(t=null===(e=o.settings.guilds)||void 0===e?void 0:e.guilds[n])||void 0===t?void 0:t.guildOnboardingProgress)&&void 0!==i?i:0,r.nI.GUILD_NOTICE_CLEARED)}},463254:(n,e,t)=>{t.d(e,{Z:()=>N});var r=t(785893),i=(t(667294),t(363010)),o=t(769672),a=t(537127),l=t(653772),u=t(859023),s=t(226300),c=t(290495),d=t(218892),f=t(513073),g=t(461061),h=t(959797),v=t(406009),p=t.n(v);function N(n){var e=(0,f.Ks)(n),t=(0,i.e7)([a.Z],(function(){return!(0,d.DQ)(n,a.Z)})),v=(0,f.DM)(n),N=(0,
i.e7)([l.Z],(function(){return l.Z.getGuild(n)})),I=(0,i.e7)([u.default],(function(){return u.default.getCurrentUser()}));return null!=I&&null!=N&&e&&(N.hasFeature(g.oNc.COMMUNITY)||I.isStaff())?(0,r.jsx)(o.S8,{id:"opt-in",label:t?(0,r.jsxs)("div",{className:p().channelOptInItem,children:[(0,r.jsx)("span",{children:h.Z.Messages.GUILD_CHANNEL_OPT_IN}),(0,r.jsx)(s.IG,{text:h.Z.Messages.NEW,className:p().newBadge})]}):h.Z.Messages.GUILD_CHANNEL_OPT_IN,checked:!v,action:function(){(0,d.kH)(n);t&&(0,c.Kt)(n)}}):null}}}]);
//# sourceMappingURL=f9be22caf667fff5f2e3.js.map