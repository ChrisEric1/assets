"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[31661],{831661:(e,r,t)=>{t.r(r);t.d(r,{default:()=>M});var n=t(785893),i=t(667294),o=t(294184),a=t.n(o),s=t(441143),l=t.n(s),u=t(363010),c=t(331535),d=t(354290),f=t(653772),h=t(487502),y=t(31165),b=t(941724),m=t(67416),p=t(851288),g=t(510299),x=t(544934),C=t(959797),j=t(643432),v=t.n(j);function I(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function S(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function O(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,o=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(n=t.next()).done);a=!0){o.push(n.value);if(r&&o.length===r)break}}catch(e){s=!0;i=e}finally{try{a||null==t.return||t.return()}finally{if(s)throw i}}return o}
}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return I(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e){var r=e.editPermissions,t=e.guildId,o=e.hasMemberSearch,s=e.headerText,j=e.onClose,I=e.overwrittenKeys,M=e.search,k=e.searchPlaceholderText,A=e.selectedPermissionCount,N=e.transitionState,E=(0,u.e7)([f.Z],(function(){return f.Z.getGuild(t)}),[t]);l()(null!=E,"");var w=O(i.useState(null),2),T=w[0],Z=w[1],P=M(t),_=P.query,D=P.results,R=P.setQuery,z=O(i.useState({}),2),L=z[0],X=z[1],q=i.useMemo((function(){return Object.keys(L).length+A>=x._n}),[A,L]),B=i.useMemo((function(){
return D.filter((function(e){var r=(0,p.rE)(e.id,e.type);return!I.includes(r)}))}),[I,D]),G=i.useCallback((function(e,r){X((function(t){var n=(0,p.rE)(e,r),i=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){S(e,r,t[r])}))}return e}({},t);n in t?delete i[n]:q||(i[n]={id:e,permission:!0,type:r});return i}))}),[q,X]),Y=i.useCallback((function(){Object.keys(L).length>0&&r(L,[]);j()}),[r,j,L]);i.useEffect((function(){return function(){return clearTimeout(T)}}),[T]);var K=i.useCallback((function(e){R(e);o&&Z((function(r){clearTimeout(r);return 0===e.length?null:setTimeout((function(){d.Z.requestMembers(t,e,200,!1)}),500)}))}),[t,o,R,Z]),U=i.useCallback((function(e){var r=B[e],t=(0,p.rE)(r.id,r.type),i=t in L,o=q&&!i;return(0,n.jsx)("div",{
className:v().item,children:(0,n.jsx)(c.XZ,{type:c.XZ.Types.INVERTED,className:a()(S({},v().checkboxItemDisabled,o)),disabled:o,value:i,onChange:function(){return G(r.id,r.type)},children:(0,n.jsx)(g.Z,{guild:E,id:r.id,type:r.type,isLocked:!1})})},t)}),[B,E,q,G,L]);i.useEffect((function(){d.Z.requestMembers(t,void 0,200,!1)}),[t]);return(0,n.jsxs)(m.Y0,{"aria-label":C.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_MODIFY,transitionState:N,children:[(0,n.jsxs)(m.xB,{separator:!1,direction:h.Z.Direction.VERTICAL,children:[(0,n.jsx)(c.X6,{variant:"heading-xl/semibold",className:v().header,children:s}),q?(0,n.jsx)(c.X6,{variant:"heading-sm/medium",color:"text-danger",children:C.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX}):null]}),(0,n.jsxs)(m.hz,{className:v().modalContent,children:[(0,n.jsx)(y.Z,{className:v().searchBar,query:_,placeholder:k,"aria-label":k,onChange:K,onClear:function(){return R("")},size:y.Z.Sizes.MEDIUM}),(0,n.jsx)(b.Z,{role:"listbox",renderRow:U,
rowCount:B.length,rowCountBySection:[B.length],rowHeight:36,className:v().list})]}),(0,n.jsxs)(m.mz,{children:[(0,n.jsx)(c.zx,{type:"submit",onClick:Y,children:C.Z.Messages.ADD}),(0,n.jsx)(c.zx,{onClick:j,look:c.zx.Looks.LINK,color:c.zx.Colors.PRIMARY,children:C.Z.Messages.CANCEL})]})]})}}}]);
//# sourceMappingURL=410daa2b540287bbbab5.js.map