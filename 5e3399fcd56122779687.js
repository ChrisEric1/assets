"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[55665],{755665:(e,n,r)=>{r.r(n);r.d(n,{default:()=>tn});var t=r(785893),s=r(667294),o=r(363010),i=r(239396),a=r(481542),l=r(152250),c=r(859169),u=r(64833),d=r(18416),f=r(631134),m=r(962564),p=r(859023),h=r(497762),S=r(67416),v=r(36391),O=r(185139),j=r(857542),y=r(535737),x=r(967250),E=r(725002),I=r(461061),N=r(825955),g=r.n(N),b=r(249152),_=r.n(b);function A(e){var n=e.user,r=(0,o.e7)([d.Z],(function(){return null!=d.Z.getAnyStreamForUser(n.id)})),i=(0,o.e7)([m.Z],(function(){return m.Z.getActivities(n.id)})),a=s.useMemo((function(){return i.filter((function(e){return e.type!==I.IIU.CUSTOM_STATUS}))}),[i]),l=s.useMemo((function(){return r?a.find((function(e){return e.type===I.IIU.PLAYING})):null}),[a,r]),c=s.useMemo((function(){return a.filter((function(e){return e!==l}))}),[l,a]);return(0,t.jsxs)(E.zJ,{className:_().listScroller,fade:!0,children:[r?(0,t.jsx)(x.Z,{type:x.P.PROFILE_V2,user:n,
source:"Profile Modal",className:g().userProfileActivity,activity:l,actionColor:g().actionColor}):null,c.map((function(e){return(0,t.jsx)(x.Z,{type:x.P.PROFILE_V2,activity:e,user:n,useStoreStream:!1,source:"Profile Modal",className:g().userProfileActivity,actionColor:g().actionColor},"".concat(e.application_id,"-").concat(e.session_id,"-").concat(e.name))}))]})}var T=r(331535),C=r(600512),Z=r(959797),P=r(988351),U=r.n(P);function M(e){var n=e.content,r=e.heading;return(0,t.jsxs)("div",{className:U().row,children:[null!=r?(0,t.jsx)(T.X6,{className:U().heading,variant:"text-sm/normal",children:r}):null,(0,t.jsx)(T.xv,{variant:"text-sm/normal",color:"header-secondary",children:n})]})}function D(e){var n=e.flags,r=e.listScrollerStyle,s=(0,C.w)({flags:n}),o=s.hasMessageContent,i=s.hasGuildPresences,a=s.hasGuildMembers;if(null==n)return null;var l=[];o&&l.push((0,t.jsx)(M,{heading:Z.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,content:Z.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
}));i&&l.push((0,t.jsx)(M,{heading:Z.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,content:Z.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY}));a&&l.push((0,t.jsx)(M,{heading:Z.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,content:Z.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY}));l.length>0&&l.push((0,t.jsx)("div",{className:U().divider,children:(0,t.jsx)(T.$i,{})}));l.push((0,t.jsx)(M,{content:Z.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({helpCenterUrl:"https://support.discord.com/hc/articles/7933951485975"})}));return(0,t.jsx)(E.ZP,{className:r,children:l})}function R(e){var n,r=e.user,s=null===(n=(0,o.e7)([v.Z],(function(){return v.Z.getUserProfile(r.id)})))||void 0===n?void 0:n.application;return(0,t.jsx)(D,{flags:null==s?void 0:s.flags,listScrollerStyle:_().listScroller})}var L=r(990033),w=r(560211),F=r(332233),B=r(735696),k=r(893321),G=r(243509),z=r(286178),Y=r(351587),V=r(422058);function H(){return(0,t.jsxs)("div",{className:_().empty,children:[(0,t.jsx)("div",{
className:_().emptyIconStreamerMode}),(0,t.jsx)("div",{className:_().emptyText,children:Z.Z.Messages.STREAMER_MODE_ENABLED})]})}var X=r(266947),q=r.n(X);function Q(e){var n,r,i=e.user,a=e.displayProfile,l=e.autoFocusNote,c=void 0!==l&&l,u=e.scrollToConnections,d=void 0!==u&&u,f=(0,B.X)(!0),m=(0,o.e7)([v.Z],(function(){var e;return null!==(n=null===(e=v.Z.getUserProfile(i.id))||void 0===e?void 0:e.connectedAccounts)&&void 0!==n?n:[]})),p=(0,o.e7)([k.Z],(function(){return k.Z.hidePersonalInformation})),h=(0,G.Z)(i,a).profileTheme,S=w.Z.useExperiment({}).showPronouns,O=s.useMemo((function(){return m.filter((function(e){return f(F.Z.get(e.type))}))}),[m,f]),j=s.useRef(null);s.useLayoutEffect((function(){if(d){var e;null==j||null===(e=j.current)||void 0===e||e.scrollIntoView()}}),[d]);return p?(0,t.jsx)(H,{}):(0,t.jsxs)(E.zJ,{fade:!0,className:q().infoScroller,children:[(0,t.jsxs)("div",{className:q().userInfoSection,
children:[S&&null!=(null==a?void 0:a.pronouns)&&""!==(null==a?void 0:a.pronouns)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(T.X6,{variant:"eyebrow",className:q().userInfoSectionHeader,children:Z.Z.Messages.USER_PROFILE_PRONOUNS}),(0,t.jsx)(T.xv,{className:q().userInfoText,variant:"text-sm/normal",children:a.pronouns})]}),null!=(null==a?void 0:a.bio)&&""!==(null==a?void 0:a.bio)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(T.X6,{variant:"eyebrow",className:q().userInfoSectionHeader,children:Z.Z.Messages.USER_PROFILE_ABOUT_ME}),(0,t.jsx)(z.Z,{className:q().userInfoText,userBio:null!==(r=null==a?void 0:a.bio)&&void 0!==r?r:""})]}),(0,t.jsx)(Y.Z,{userId:i.id,headingClassName:q().userInfoSectionHeader,textClassName:q().userInfoText}),(0,t.jsx)(T.X6,{variant:"eyebrow",className:q().userInfoSectionHeader,children:Z.Z.Messages.NOTE}),(0,t.jsx)(L.Z,{userId:i.id,autoFocus:c,className:q().note})]}),(0,t.jsx)(V.OA,{ref:j,connectedAccounts:O,theme:h,className:q().userInfoSection,userId:i.id})]})}
var $=r(532175),J=r(945927),K=r(570459);function W(e){var n=e.displayProfile,r=e.user,s=e.selectedSection,o=e.autoFocusNote,i=e.onClose;switch(s){case K.oh.ACTIVITY:return(0,t.jsx)(A,{user:r});case K.oh.MUTUAL_GUILDS:return(0,t.jsx)(J.Z,{user:r,onClose:i});case K.oh.MUTUAL_FRIENDS:return(0,t.jsx)($.Z,{user:r,onClose:i});case K.oh.BOT_DATA_ACCESS:return(0,t.jsx)(R,{user:r});case K.oh.USER_INFO_CONNECTIONS:case K.oh.USER_INFO:default:return(0,t.jsx)(Q,{displayProfile:n,autoFocusNote:o,user:r,scrollToConnections:s===K.oh.USER_INFO_CONNECTIONS})}}var ee=r(642400),ne=r(281081),re=r(579220),te=r(735713),se=r(956345),oe=r(823569),ie=r(879022),ae=r(832010),le=r(105405),ce=r(757987),ue=r(895917),de=r(862055),fe=r(81951),me=r(766936),pe=r(71531),he=r(932847),Se=r(917870),ve=r(86124),Oe=r(789482),je=r(588641),ye=r(811778),xe=r(562934),Ee=r(892430),Ie=r(24842),Ne=r(294184),ge=r.n(Ne),be=r(486397),_e=r.n(be);function Ae(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,
writable:!0}):e[n]=r;return e}function Te(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}));return e}function Ce(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++){r=o[t];n.indexOf(r)>=0||(s[r]=e[r])}return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++){r=o[t];n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}}return s}function Ze(e){var n=e.className,r=Ce(e,["className"]);return(0,t.jsx)(T.zx,Te(function(e){for(var n=1;n<arguments.length;n++){
var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){Ae(e,n,r[n])}))}return e}({},r),{look:T.zx.Looks.FILLED,size:T.zx.Sizes.SMALL,className:ge()(_e().actionButton,n)}))}function Pe(e){var n=e.isCurrentUser,r=e.user,s=e.relationshipType,o=e.onAddFriend,i=e.onIgnoreFriend,a=e.onSendMessage;return n||s===I.OGo.BLOCKED?null:s===I.OGo.FRIEND||r.bot?(0,t.jsx)(Ze,{color:T.zx.Colors.GREEN,onClick:a,children:Z.Z.Messages.SEND_MESSAGE}):s===I.OGo.PENDING_OUTGOING?(0,t.jsx)(Ze,{color:T.zx.Colors.GREEN,disabled:!0,children:Z.Z.Messages.ADD_FRIEND_BUTTON_AFTER}):s===I.OGo.PENDING_INCOMING?(0,t.jsxs)("div",{className:_e().pendingIncoming,children:[(0,t.jsx)(Ze,{color:T.zx.Colors.GREEN,onClick:o,children:Z.Z.Messages.FRIEND_REQUEST_ACCEPT}),(0,t.jsx)(Ze,{color:T.zx.Colors.PRIMARY,onClick:i,
className:_e().actionRightButton,children:Z.Z.Messages.FRIEND_REQUEST_IGNORE})]}):(0,t.jsx)(Ze,{color:T.zx.Colors.GREEN,onClick:o,children:Z.Z.Messages.ADD_FRIEND_BUTTON})}var Ue=r(375650),Me=r(525300),De=r.n(Me);function Re(e,n,r,t,s,o,i){try{var a=e[o](i),l=a.value}catch(e){r(e);return}a.done?n(l):Promise.resolve(l).then(t,s)}function Le(e){return function(){var n=this,r=arguments;return new Promise((function(t,s){var o=e.apply(n,r);function i(e){Re(o,t,s,i,a,"next",e)}function a(e){Re(o,t,s,i,a,"throw",e)}i(void 0)}))}}function we(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function Fe(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){we(e,n,r[n])}))}return e}function Be(e,n){
n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}));return e}var ke=function(e,n){var r,t,s,o,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,t&&(s=2&o[0]?t.return:o[0]?t.throw||((s=t.return)&&s.call(t),0):t.next)&&!(s=s.call(t,o[1])).done)return s;(t=0,s)&&(o=[2&o[0],s.value]);switch(o[0]){case 0:case 1:s=o;break;case 4:i.label++;return{
value:o[1],done:!1};case 5:i.label++;t=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(6===o[0]&&i.label<s[1]){i.label=s[1];s=o;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(o);break}s[2]&&i.ops.pop();i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e];t=0}finally{r=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},Ge=me.u8.SIZE_120;var ze=je.default.getEnableHardwareAcceleration()?me.Xo:me.ZP;function Ye(e){var n=e.displayProfile,s=e.user,i=e.guildId,a=e.friendToken,l=e.isStreaming,c=e.onClose,u=function(){c();(0,re.xf)()},d=function(){te.Z.removeFriend(s.id,{location:"User Profile"})},p=function(){ee.Z.openPrivateChannel(s.id);u()},h=function(){try{te.Z.addRelationship({userId:s.id,context:{location:"User Profile"},type:I.OGo.BLOCKED})}catch(e){u()}},S=(0,ye.w)({user:s,size:120
}),O=S.avatarSrc,j=S.eventHandlers,y=S.isAvatarAnimating,x=(0,oe.U)().canUseAvatarDecorations,E=(0,o.e7)([le.Z],(function(){return le.Z.getRelationshipType(s.id)})),N=(0,o.e7)([m.Z],(function(){return m.Z.isMobileOnline(s.id)})),g=(0,o.e7)([m.Z],(function(){return m.Z.getStatus(s.id)})),b=(0,o.e7)([v.Z],(function(){return v.Z.getUserProfile(s.id)})),_=(0,o.e7)([f.default],(function(){return f.default.getId()===s.id})),A=(0,G.Z)(s,n).profileTheme,C=x?(0,Se.NZ)({userId:s.id,avatarDecoration:s.avatarDecoration,size:(0,ie.y)(Ge),canAnimate:y}):null,P=null==b?void 0:b.application;return(0,t.jsxs)("header",{children:[(0,t.jsx)(xe.Z,{displayProfile:n,onClose:u,bannerSrc:null==n?void 0:n.getBannerURL({canAnimate:!0,size:600}),user:s,profileType:K.y0.MODAL,guildId:void 0}),(0,t.jsxs)("div",{className:De().header,children:[(0,t.jsx)("div",Be(Fe({},j),{children:(0,t.jsx)(ze,{src:O,avatarDecoration:C,size:Ge,className:De().avatar,status:l?Ue.Sk.STREAMING:g,statusBackdropColor:(0,pe.QF)(A),
isMobile:N,statusTooltip:!0,"aria-label":s.username})})),(0,t.jsxs)("div",{className:De().headerTop,children:[(null==b?void 0:b.profileFetchFailed)?(0,t.jsx)(ce.ZP,{text:Z.Z.Messages.USER_PROFILE_LOAD_ERROR,spacing:20,children:function(e){return(0,t.jsx)(fe.Z,Be(Fe({},e),{className:De().warningCircleIcon,color:(0,ae.Lq)(I.Ilk.YELLOW_300)}))}}):(0,t.jsx)(Ie.Z,{user:s,profile:b,className:De().badgeList,guildId:i,premiumSince:null==b?void 0:b.premiumSince,premiumGuildSince:null==b?void 0:b.premiumGuildSince,openPremiumSettings:function(){he.default.track(I.rMx.PREMIUM_PROMOTION_OPENED,{location_page:null,location_section:I.jXE.PROFILE_MODAL,location_object:I.qAy.TOOLTIP});u();se.Z.open(I.oAB.PREMIUM)},size:Ie.V.SIZE_24,shrinkAtCount:8,shrinkToSize:Ie.V.SIZE_18}),(0,t.jsxs)("div",{className:De().relationshipButtons,children:[null!=P&&(0,Oe.E)(P.id,P.customInstallUrl,P.installParams)?(0,t.jsx)(T.zx,{look:T.zx.Looks.FILLED,size:T.zx.Sizes.SMALL,onContextMenu:function(e){return(0,
ne.vq)(e,(function(e){return(0,t.jsx)(Ee.Z,Be(Fe({},e),{application:P}))}))},onClick:function(){return(0,Oe.L)(P.id,P.customInstallUrl,P.installParams)},className:De().applicationInstallButton,children:(0,t.jsxs)("div",{className:De().applicationInstallButtonContent,children:[(0,t.jsx)("span",{className:De().applicationInstallButtonText,children:Z.Z.Messages.APPLICATION_ADD_TO_SERVER}),null==P.customInstallUrl||ve.Z.isDiscordUrl(P.customInstallUrl)?null:(0,t.jsx)(ue.Z,{className:De().launchIcon,width:16,height:16})]})}):null,(0,t.jsx)(Pe,{user:s,isCurrentUser:_,relationshipType:E,onAddFriend:function(){try{te.Z.addRelationship({userId:s.id,context:{location:"User Profile"},type:void 0,friendToken:a})}catch(e){u()}},onIgnoreFriend:function(){te.Z.cancelFriendRequest(s.id,{location:"User Profile"})},onSendMessage:p}),_||s.isNonUserBot()?null:(0,t.jsx)(T.P3,{focusProps:{offset:{left:8}},onClick:function(e){(0,ne.jW)(e,Le((function(){var e,n;return ke(this,(function(o){switch(o.label){
case 0:return[4,r.e(90647).then(r.bind(r,490647))];case 1:e=o.sent(),n=e.default;return[2,function(e){return(0,t.jsx)(n,Be(Fe({},e),{relationshipType:E,onRemoveFriend:d,onBlock:h,onMessage:p,user:s}))}]}}))})))},children:(0,t.jsx)(de.Z,{className:De().additionalActionsIcon})})]})]})]})]})}var Ve=r(895076),He=r(652075),Xe=r(964199),qe=r(116628),Qe=r.n(qe);function $e(e){var n=e.user,r=Xe.ZP.getDisplayName(n),s=(0,o.e7)([m.Z],(function(){return m.Z.findActivity(n.id,(function(e){return e.type===I.IIU.CUSTOM_STATUS}))}));return(0,t.jsxs)("div",{className:Qe().container,children:[null==r&&(0,t.jsx)(Ve.Z,{user:n,className:Qe().nameTag,usernameClass:Qe().username,discriminatorClass:Qe().discriminator}),null!=r&&(0,t.jsxs)("div",{children:[(0,t.jsx)(T.xv,{variant:"text-lg/semibold",style:{marginRight:"12px"},children:r}),(0,t.jsx)(Ve.Z,{user:n,forceUsername:!0,usernameClass:Qe().discriminator,discriminatorClass:Qe().discriminator,className:ge()(Qe().nameTag,Qe().nameTagSmall)})]}),null!=s?(0,
t.jsx)("div",{className:Qe().customStatusActivity,children:(0,t.jsx)(T.xv,{variant:"text-sm/normal",color:"header-secondary",className:Qe().customStatusText,children:(0,t.jsx)(He.Z,{activity:s,className:Qe().customStatus,emojiClassName:Qe().customStatusEmoji,soloEmojiClassName:Qe().customStatusSoloEmoji})})}):null]})}var Je=r(86030),Ke=r(967959),We=r.n(Ke);function en(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function nn(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,s,o=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(t=r.next()).done);i=!0){o.push(t.value);if(n&&o.length===n)break}}catch(e){a=!0;s=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw s}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return en(e,n);var r=Object.prototype.toString.call(e).slice(8,-1)
;"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return en(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rn(e){var n=e.user,r=e.isCurrentUser,s=e.section,i=e.setSection,a=e.hasActivity,l=(0,o.e7)([v.Z],(function(){var e,r;return null!=(null===(e=v.Z.getUserProfile(n.id))||void 0===e||null===(r=e.application)||void 0===r?void 0:r.id)}));return(0,t.jsx)("div",{className:We().tabBarContainer,children:(0,t.jsxs)(h.ZP,{selectedItem:s,type:h.Yk.TOP,onItemSelect:i,className:We().tabBar,children:[n.isNonUserBot()?null:(0,t.jsx)(h.ck,{className:We().tabBarItem,id:K.oh.USER_INFO,children:Z.Z.Messages.USER_INFO}),!n.bot&&a?(0,t.jsx)(h.ck,{className:We().tabBarItem,id:K.oh.ACTIVITY,children:Z.Z.Messages.USER_PROFILE_ACTIVITY
}):null,r?null:(0,t.jsx)(h.ck,{className:We().tabBarItem,id:K.oh.MUTUAL_GUILDS,children:Z.Z.Messages.MUTUAL_GUILDS}),n.bot||r?null:(0,t.jsx)(h.ck,{className:We().tabBarItem,id:K.oh.MUTUAL_FRIENDS,children:Z.Z.Messages.MUTUAL_FRIENDS}),n.bot&&l?(0,t.jsx)(h.ck,{className:We().tabBarItem,id:K.oh.BOT_DATA_ACCESS,children:Z.Z.Messages.BOTS_DATA_ACCESS_TAB}):null]})})}function tn(e){var n,r,h=e.user,v=e.guildId,x=e.friendToken,E=e.autoFocusNote,N=e.initialSection,g=void 0===N?K.oh.USER_INFO:N,b=e.transitionState,_=e.onClose,A=(0,u.Z)(c.Z.PROFILE_MODAL).AnalyticsLocationProvider,T=null!==(n=(0,o.e7)([p.default],(function(){return p.default.getUser(h.id)})))&&void 0!==n?n:h,C=(0,O.Z)(null!==(r=null==T?void 0:T.id)&&void 0!==r?r:"");(0,a.$)(function(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}({},v,[T.id]));var P=(0,o.e7)([d.Z],(function(){return null!=d.Z.getAnyStreamForUser(T.id)})),U=(0,o.e7)([m.Z],(function(){
return m.Z.findActivity(T.id,(function(e){return e.type!==I.IIU.CUSTOM_STATUS}))})),M=nn(s.useState(!1),2),D=M[0],R=M[1],L=nn(s.useState(T.isNonUserBot()?K.oh.MUTUAL_GUILDS:g),2),w=L[0],F=L[1],B=(0,o.e7)([f.default],(function(){return f.default.getId()===T.id})),k=null!=U||P,G=!B||k;k||w!==K.oh.ACTIVITY||F(K.oh.USER_INFO);var z=s.useCallback((function(e){R(!0);F(e)}),[]);return(0,t.jsx)(A,{children:(0,t.jsx)(i.Z,{section:I.jXE.PROFILE_MODAL,children:(0,t.jsx)(S.Y0,{transitionState:b,className:We().root,"aria-label":Z.Z.Messages.USER_PROFILE_MODAL,children:(0,t.jsxs)(y.Z,{user:T,profileType:K.y0.MODAL,children:[(0,t.jsx)("div",{className:We().topSection,children:(0,t.jsx)(Ye,{displayProfile:C,user:T,friendToken:x,onClose:_,isStreaming:(0,l.Z)(U),guildId:v})}),(0,t.jsxs)(y.Z.Inner,{children:[b===Je.Dv.ENTERED&&(0,t.jsx)(j.Z,{onTooltipClose:_}),(0,t.jsxs)("div",{className:We().body,children:[(0,t.jsx)($e,{user:T}),G?(0,t.jsx)(rn,{user:T,
section:w===K.oh.USER_INFO_CONNECTIONS?K.oh.USER_INFO:w,setSection:z,hasActivity:k,isCurrentUser:B}):(0,t.jsx)("div",{className:We().divider}),(0,t.jsx)(W,{displayProfile:C,user:T,autoFocusNote:E&&!D,selectedSection:w,onClose:_})]})]})]})})})})}}}]);
//# sourceMappingURL=5e3399fcd56122779687.js.map