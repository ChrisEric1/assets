"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[16898],{616898:(e,n,t)=>{t.r(n);t.d(n,{EmojiAddModal:()=>v});var r=t(785893),a=t(667294),i=t(331535),o=t(276842),s=t(272729),l=t(67416),c=t(917870),d=t(25305),u=t(959797),m=t(80572),h=t.n(m);function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done);o=!0){i.push(r.value);if(n&&i.length===n)break}}catch(e){s=!0;a=e}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t)
;if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){var n=e.emoji,t=e.onChange,a=e.value,o=c.ZP.getEmojiURL({id:n.id,animated:n.animated,size:24});return(0,r.jsx)(i.XZ,{size:20,className:h().emojiRow,onChange:t,type:i.XZ.Types.INVERTED,value:a,reverse:!0,children:(0,r.jsxs)("div",{className:h().emojiLabel,children:[(0,r.jsx)("img",{className:h().emojiImage,src:o,width:24,height:24,alt:""}),(0,r.jsx)(i.xv,{color:"header-primary",variant:"text-md/medium",className:h().emojiAlias,children:n.name})]})})}function v(e){var n=e.guildId,t=e.initialTierEmojiIds,c=e.onSubmit,m=e.transitionToManageEmoji,j=e.transitionState,v=e.onClose,y=(0,d.Z)(n),I=f(a.useState(new Set),2),g=I[0],p=I[1],_=g.size>0,b=(0,s.Dt)();return(0,r.jsx)("form",{onSubmit:function(e){
e.preventDefault();c(g);v()},children:(0,r.jsxs)(l.Y0,{transitionState:j,"aria-labelledby":b,children:[(0,r.jsxs)(l.xB,{children:[(0,r.jsx)(i.X6,{variant:"heading-md/semibold",id:b,children:u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_HEADER}),(0,r.jsx)(l.ol,{className:h().closeButton,onClick:v})]}),(0,r.jsxs)(l.hz,{className:h().modalContent,children:[(0,r.jsx)(i.xv,{variant:"text-sm/normal",color:"header-secondary",children:u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_DESCRIPTION.format({transitionToManageEmoji:m})}),(0,r.jsx)(o.Z,{size:16}),null!=y&&y.length>0&&(0,r.jsx)("div",{className:h().emojiContainer,children:y.map((function(e){return null!=t&&t.has(e.id)?null:(0,r.jsx)(x,{emoji:e,onChange:function(){return n=e.id,void p((function(e){var t=new Set(e);g.has(n)?t.delete(n):t.add(n);return t}));var n},value:g.has(e.id)},e.id)}))}),(0,r.jsx)(o.Z,{size:8})]}),(0,r.jsxs)(l.mz,{className:h().modalFooter,children:[(0,r.jsx)(i.zx,{type:"submit",disabled:!_,
children:u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_SAVE_BUTTON.format({totalEmoji:g.size})}),(0,r.jsx)(i.zx,{look:i.zx.Looks.LINK,color:i.zx.Colors.PRIMARY,className:h().cancelButton,onClick:v,children:u.Z.Messages.CANCEL})]})]})})}}}]);
//# sourceMappingURL=70200b56dfb297dc1278.js.map