"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[4423],{884994:(e,n,t)=>{t.r(n);t.d(n,{default:()=>_});var r,a=t(785893),i=t(667294),o=t(294184),l=t.n(o),s=t(131795),u=t.n(s),c=t(606076),d=t(974119),f=t(363010),m=t(331535),p=t(767870),O=t(80635),g=t(631134),h=t(859023),x=t(272729),v=t(67416),y=t(932847),N=t(503280),S=t(461061),D=t(959797),A=t(5863),j=t.n(A);function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function I(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(r=t.next()).done);o=!0){i.push(r.value);if(n&&i.length===n)break}}catch(e){l=!0;a=e}finally{try{o||null==t.return||t.return()}finally{if(l)throw a}}
return i}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(e){e[e.OSX=0]="OSX";e[e.WINDOWS=1]="WINDOWS";e[e.LINUX=2]="LINUX";e[e.IOS=3]="IOS";e[e.ANDROID=4]="ANDROID"}(r||(r={}));var M=[{getOs:function(){return D.Z.Messages.PLATFORM_MACOS},icon:j().apple,url:function(){return(0,N.w4)("osx",!1)},platformKey:r.OSX},{getOs:function(){return D.Z.Messages.PLATFORM_WINDOWS},icon:j().windows,url:function(){return(0,N.w4)("win",!1)},platformKey:r.WINDOWS},{getOs:function(){return D.Z.Messages.PLATFORM_LINUX},icon:j().linux,url:[{url:function(){return(0,
N.w4)("linux",!1,"deb")},getText:function(){return D.Z.Messages.DEB}},{url:function(){return(0,N.w4)("linux",!1,"tar.gz")},getText:function(){return D.Z.Messages.TAR_GZ}}],platformKey:r.LINUX}],W=[{getOs:function(){return D.Z.Messages.PLATFORM_IOS},icon:j().ios,url:function(){return S.fzT.IOS},platformKey:r.IOS},{getOs:function(){return D.Z.Messages.PLATFORM_ANDROID},icon:j().android,url:function(){return S.fzT.ANDROID},platformKey:r.ANDROID}];var L=function(e){var n=e.url,t=e.text,r=e.onClick;return(0,a.jsx)(m.ee,{useDefaultUnderlineStyles:!1,href:n,className:j().downloadButton,onClick:r,children:t})},T=function(e){var n,t=e.platform,r=e.onClick,i=e.onMouseEnter,o=e.isActive,s=e.claimed,u=e.theme,c=t.getOs,d=t.icon,f=t.url,p=t.platformKey,O=c(),g=l()(j().icon,d,u);if(Array.isArray(f))n=f.map((function(e,n){var t=s?e.url():"";return(0,a.jsx)(L,{url:t,onClick:function(){return r(O)},text:e.getText()},"".concat(t,"-").concat(n))}));else{var h=s?f():void 0;n=(0,a.jsx)(L,{url:h,
onClick:function(){return r(O)},text:D.Z.Messages.DOWNLOAD})}return(0,a.jsx)("li",{className:l()(j().platform,I({},j().active,o)),onMouseEnter:function(){return i(p)},children:(0,a.jsxs)("div",{className:j().contentWrapper,children:[(0,a.jsxs)("div",{className:j().iconWrap,children:[(0,a.jsx)("div",{className:g}),(0,a.jsx)("div",{className:l()(j().active,g)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(m.X6,{className:j().platformName,variant:"heading-lg/semibold",children:O}),(0,a.jsx)("div",{className:l()(j().downloadButtons,I({},j().list,Array.isArray(n))),children:n})]})]})})};function _(e){var n=e.source,t=e.onClose,o=e.transitionState,l=function(e){null==d.Z.getToken()&&null==b||y.default.track(S.rMx.DOWNLOAD_APP,{platform:e,ptb:!1,released:!0,has_e_mail:I,referring_location:n,qr_code:!1});if(!I){t();p.j()}},s=function(e){Z(e)},N=(0,f.e7)([h.default],(function(){return h.default.getCurrentUser()})),A=(0,f.e7)([O.Z],(function(){return O.Z.theme})),b=(0,f.e7)([g.default],(function(){
return g.default.getFingerprint()})),I=null==N||N.isClaimed(),L=w(i.useState(function(){var e;switch(null===(e=u().os)||void 0===e?void 0:e.family){case"OS X":return r.OSX;case"Windows":return r.WINDOWS;case"Ubuntu":case"Debian":case"Fedora":case"Red Hat":case"SuSE":case"Linux":return r.LINUX;case"iOS":return r.IOS;case"Android":return r.ANDROID;default:return}}()),2),_=L[0],Z=L[1];i.useEffect((function(){y.default.track(S.rMx.OPEN_MODAL,{type:"Download App",source:{location:n}})}),[n]);var E=(0,x.Dt)();return(0,a.jsx)(v.Y0,{className:j().downloadApps,transitionState:o,"aria-labelledby":E,children:(0,a.jsx)("div",{className:j().inner,children:(0,a.jsxs)(m.y5,{component:(0,a.jsx)(m.nn,{children:(0,a.jsx)(m.H,{id:E,children:D.Z.Messages.DOWNLOAD_APP})}),children:[(0,a.jsx)(v.ol,{onClick:t,className:j().modalCloseButton}),!c.tq&&(0,a.jsx)("div",{className:j().platformsWrap,children:(0,a.jsx)(m.y5,{component:(0,a.jsx)(m.X6,{variant:"heading-lg/semibold",className:j().header,
children:D.Z.Messages.DOWNLOAD_DESKTOP_TITLE}),children:(0,a.jsx)("ul",{className:j().platforms,children:M.map((function(e){return(0,a.jsx)(T,{theme:A,isActive:_===e.platformKey,platform:e,onClick:l,onMouseEnter:s,claimed:I},e.platformKey)}))})})}),(0,a.jsx)("div",{className:j().platformsWrap,children:(0,a.jsxs)(m.y5,{component:(0,a.jsx)(a.Fragment,{children:!c.tq&&(0,a.jsx)(m.X6,{variant:"heading-lg/semibold",className:j().header,children:D.Z.Messages.DOWNLOAD_MOBILE_TITLE})}),children:[(0,a.jsx)("ul",{className:j().platforms,children:W.map((function(e){return(0,a.jsx)(T,{theme:A,isActive:_===e.platformKey,platform:e,onClick:l,onMouseEnter:s,claimed:I},e.platformKey)}))}),(0,a.jsx)(m.xv,{className:j().footer,variant:"text-sm/normal",children:D.Z.Messages.DOWNLOAD_DESKTOP_FOOTER.format()})]})})]})})})}},503280:(e,n,t)=>{t.d(n,{w4:()=>y,DW:()=>S,t3:()=>D,Gn:()=>A});var r,a=t(131795),i=t.n(a),o=t(531286),l=t(631134),s=t(461061);function u(e,n,t){n in e?Object.defineProperty(e,n,{value:t,
enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}var c="Ubuntu",d="Debian",f="Fedora",m="Red Hat",p="SuSE",O="Linux",g="OS X",h="win",x="osx",v="linux";function y(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0,r=n?"/ptb":"",a=null!=t?"&format=".concat(t):"";return"".concat(s.fzT.DESKTOP).concat(r,"?platform=").concat(e).concat(a)}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null===(r=i().os)||void 0===r?void 0:r.family;return null==e?h:-1!==e.indexOf(c)||-1!==e.indexOf(d)||-1!==e.indexOf(f)||-1!==e.indexOf(m)||-1!==e.indexOf(p)||-1!==e.indexOf(O)?v:-1!==e.indexOf(g)?x:h}function S(e){var n;return(u(n={},h,"Windows"),u(n,x,"Mac"),u(n,v,"Linux"),n)[N(e)]}function D(){var e=N();return y(e,!1,e===v?"tar.gz":null)}function A(e,n,t){var r=null!=t?t.toString():null;switch(n){case"iOS":return(0,o.ZP)(null!=r?r:"https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",{utmSource:e,
fingerprint:l.default.getFingerprint(),attemptId:(0,o.WS)()});case"Android":return(0,o.ZP)(null!=r?r:"https://play.google.com/store/apps/details",{utmSource:e,id:"com.discord",fingerprint:l.default.getFingerprint(),attemptId:(0,o.WS)()});default:return null!=r?r:"https://www.discord.com"}}}}]);
//# sourceMappingURL=5ff4570fcad2955722cb.js.map