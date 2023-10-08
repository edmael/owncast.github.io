(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1234],{26803:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"}},56338:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(5661))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},5661:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(42122)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(a,o,c):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),c=a(n(26803)),s=a(n(92074));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}var UpOutlined=function(e,t){return o.createElement(s.default,(0,l.default)((0,l.default)({},e),{},{ref:t,icon:c.default}))};UpOutlined.displayName="UpOutlined";var u=o.forwardRef(UpOutlined);t.default=u},5789:function(e,t,n){"use strict";t.Z=void 0;var a=n(38614).Col;t.Z=a},8799:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;t.Z=void 0;var l=r(n(10434)),o=r(n(38416)),c=r(n(18698)),s=r(n(27424)),u=r(n(5085)),i=r(n(56338)),d=r(n(94184)),f=r(n(82122)),p=a(n(67294)),m=n(31929),h=r(n(93319)),v=r(n(3236)),b=n(51130),y=n(46549),g=n(47419),x=n(71434),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},w=p.forwardRef(function(e,t){var n=p.useContext(m.ConfigContext),a=n.getPrefixCls,r=n.direction,w=p.useContext(v.default),O=p.useState(!1),C=(0,s.default)(O,2),j=C[0],_=C[1],E=p.useRef(null);p.useImperativeHandle(t,function(){return E.current});var k=e.className,P=e.size,S=e.disabled,N=e.prefixCls,M=e.addonBefore,I=e.addonAfter,T=e.prefix,W=e.bordered,R=void 0===W||W,Z=e.readOnly,A=e.status,U=e.controls,D=__rest(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),F=a("input-number",N),L=(0,y.useCompactItemContext)(F,r),B=L.compactSize,H=L.compactItemClassnames,z=p.createElement(i.default,{className:"".concat(F,"-handler-up-inner")}),G=p.createElement(u.default,{className:"".concat(F,"-handler-down-inner")}),q="boolean"==typeof U?U:void 0;"object"===(0,c.default)(U)&&(z=void 0===U.upIcon?z:p.createElement("span",{className:"".concat(F,"-handler-up-inner")},U.upIcon),G=void 0===U.downIcon?G:p.createElement("span",{className:"".concat(F,"-handler-down-inner")},U.downIcon));var Q=(0,p.useContext)(b.FormItemInputContext),X=Q.hasFeedback,$=Q.status,J=Q.isFormItemInput,K=Q.feedbackIcon,V=(0,x.getMergedStatus)($,A),Y=B||P||w,ee=p.useContext(h.default),et=null!=S?S:ee,en=(0,d.default)((er={},(0,o.default)(er,"".concat(F,"-lg"),"large"===Y),(0,o.default)(er,"".concat(F,"-sm"),"small"===Y),(0,o.default)(er,"".concat(F,"-rtl"),"rtl"===r),(0,o.default)(er,"".concat(F,"-borderless"),!R),(0,o.default)(er,"".concat(F,"-in-form-item"),J),er),(0,x.getStatusClassNames)(F,V),H,k),ea=p.createElement(f.default,(0,l.default)({ref:E,disabled:et,className:en,upHandler:z,downHandler:G,prefixCls:F,readOnly:Z,controls:q},D));if(null!=T||X){var er,el,eo=(0,d.default)("".concat(F,"-affix-wrapper"),(0,x.getStatusClassNames)("".concat(F,"-affix-wrapper"),V,X),(el={},(0,o.default)(el,"".concat(F,"-affix-wrapper-focused"),j),(0,o.default)(el,"".concat(F,"-affix-wrapper-disabled"),e.disabled),(0,o.default)(el,"".concat(F,"-affix-wrapper-sm"),"small"===w),(0,o.default)(el,"".concat(F,"-affix-wrapper-lg"),"large"===w),(0,o.default)(el,"".concat(F,"-affix-wrapper-rtl"),"rtl"===r),(0,o.default)(el,"".concat(F,"-affix-wrapper-readonly"),Z),(0,o.default)(el,"".concat(F,"-affix-wrapper-borderless"),!R),(0,o.default)(el,"".concat(k),!(M||I)&&k),el));ea=p.createElement("div",{className:eo,style:e.style,onMouseUp:function(){return E.current.focus()}},T&&p.createElement("span",{className:"".concat(F,"-prefix")},T),(0,g.cloneElement)(ea,{style:null,value:e.value,onFocus:function(t){var n;_(!0),null===(n=e.onFocus)||void 0===n||n.call(e,t)},onBlur:function(t){var n;_(!1),null===(n=e.onBlur)||void 0===n||n.call(e,t)}}),X&&p.createElement("span",{className:"".concat(F,"-suffix")},K))}if(null!=M||null!=I){var ec,es="".concat(F,"-group"),eu="".concat(es,"-addon"),ei=M?p.createElement("div",{className:eu},M):null,ed=I?p.createElement("div",{className:eu},I):null,ef=(0,d.default)("".concat(F,"-wrapper"),es,(0,o.default)({},"".concat(es,"-rtl"),"rtl"===r)),ep=(0,d.default)("".concat(F,"-group-wrapper"),(ec={},(0,o.default)(ec,"".concat(F,"-group-wrapper-sm"),"small"===w),(0,o.default)(ec,"".concat(F,"-group-wrapper-lg"),"large"===w),(0,o.default)(ec,"".concat(F,"-group-wrapper-rtl"),"rtl"===r),ec),(0,x.getStatusClassNames)("".concat(F,"-group-wrapper"),V,X),k);ea=p.createElement("div",{className:ep,style:e.style},p.createElement("div",{className:ef},ei&&p.createElement(y.NoCompactStyle,null,p.createElement(b.NoFormStyle,{status:!0,override:!0},ei)),(0,g.cloneElement)(ea,{style:null,disabled:et}),ed&&p.createElement(y.NoCompactStyle,null,p.createElement(b.NoFormStyle,{status:!0,override:!0},ed))))}return ea});t.Z=w},16373:function(e,t,n){"use strict";var a=n(64836).default,r=n(75263).default;t.default=void 0;var l=r(n(62704)),o=a(n(87412)),c=l.default;c.Header=l.Header,c.Footer=l.Footer,c.Content=l.Content,c.Sider=o.default,t.default=c},55673:function(e,t,n){"use strict";t.Z=void 0;var a=n(38614).Row;t.Z=a},83514:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=r(n(38416)),c=r(n(94184)),s=a(n(67294)),u=n(31929),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};t.default=function(e){var t,n=e.prefixCls,a=e.className,r=e.checked,i=e.onChange,d=e.onClick,f=__rest(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,s.useContext(u.ConfigContext).getPrefixCls)("tag",n),m=(0,c.default)(p,(t={},(0,o.default)(t,"".concat(p,"-checkable"),!0),(0,o.default)(t,"".concat(p,"-checkable-checked"),r),t),a);return s.createElement("span",(0,l.default)({},f,{className:m,onClick:function(e){null==i||i(!r),null==d||d(e)}}))}},59361:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;t.Z=void 0;var l=r(n(38416)),o=r(n(10434)),c=r(n(27424)),s=r(n(40753)),u=r(n(94184)),i=r(n(18475)),d=a(n(67294)),f=n(31929),p=n(45471),m=r(n(61539));r(n(13594));var h=r(n(83514)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},v=new RegExp("^(".concat(p.PresetColorTypes.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(p.PresetStatusColorTypes.join("|"),")$")),y=d.forwardRef(function(e,t){var n,a=e.prefixCls,r=e.className,p=e.style,h=e.children,y=e.icon,g=e.color,x=e.onClose,w=e.closeIcon,O=e.closable,C=void 0!==O&&O,j=__rest(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),_=d.useContext(f.ConfigContext),E=_.getPrefixCls,k=_.direction,P=d.useState(!0),S=(0,c.default)(P,2),N=S[0],M=S[1];d.useEffect(function(){"visible"in j&&M(j.visible)},[j.visible]);var isPresetColor=function(){return!!g&&(v.test(g)||b.test(g))},I=(0,o.default)({backgroundColor:g&&!isPresetColor()?g:void 0},p),T=isPresetColor(),W=E("tag",a),R=(0,u.default)(W,(n={},(0,l.default)(n,"".concat(W,"-").concat(g),T),(0,l.default)(n,"".concat(W,"-has-color"),g&&!T),(0,l.default)(n,"".concat(W,"-hidden"),!N),(0,l.default)(n,"".concat(W,"-rtl"),"rtl"===k),n),r),handleCloseClick=function(e){e.stopPropagation(),null==x||x(e),!e.defaultPrevented&&("visible"in j||M(!1))},Z="onClick"in j||h&&"a"===h.type,A=(0,i.default)(j,["visible"]),U=y||null,D=U?d.createElement(d.Fragment,null,U,d.createElement("span",null,h)):h,F=d.createElement("span",(0,o.default)({},A,{ref:t,className:R,style:I}),D,C?w?d.createElement("span",{className:"".concat(W,"-close-icon"),onClick:handleCloseClick},w):d.createElement(s.default,{className:"".concat(W,"-close-icon"),onClick:handleCloseClick}):null);return Z?d.createElement(m.default,null,F):F});y.CheckableTag=h.default,t.Z=y},89277:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434));r(n(18698));var o=a(n(67294));r(n(13594));var c=r(n(28460)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},s=o.forwardRef(function(e,t){var n=e.ellipsis,a=e.rel,r=__rest(e,["ellipsis","rel"]),s=(0,l.default)((0,l.default)({},r),{rel:void 0===a&&"_blank"===r.target?"noopener noreferrer":a});return delete s.navigate,o.createElement(c.default,(0,l.default)({},s,{ref:t,ellipsis:!!n,component:"a"}))});t.default=s},21987:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=a(n(67294)),c=r(n(28460)),s=o.forwardRef(function(e,t){return o.createElement(c.default,(0,l.default)({ref:t},e,{component:"div"}))});t.default=s},15394:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=r(n(18698)),c=r(n(18475)),s=a(n(67294));r(n(13594));var u=r(n(28460)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},i=s.forwardRef(function(e,t){var n=e.ellipsis,a=__rest(e,["ellipsis"]),r=s.useMemo(function(){return n&&"object"===(0,o.default)(n)?(0,c.default)(n,["expandable","rows"]):n},[n]);return s.createElement(u.default,(0,l.default)({ref:t},a,{ellipsis:r,component:"span"}))});t.default=i},53740:function(e,t,n){"use strict";var a=n(64836).default;t.default=void 0;var r=a(n(89277)),l=a(n(21987)),o=a(n(15394)),c=a(n(34528)),s=a(n(89652)).default;s.Text=o.default,s.Link=r.default,s.Title=c.default,s.Paragraph=l.default,t.default=s},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return getRoundingMethod}});var a={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function getRoundingMethod(e){return e?a[e]:a.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return differenceInMilliseconds}});var a=n(19013),r=n(13882);function differenceInMilliseconds(e,t){return(0,r.Z)(2,arguments),(0,a.Z)(e).getTime()-(0,a.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return differenceInSeconds}});var a=n(59910),r=n(13882),l=n(93645);function differenceInSeconds(e,t,n){(0,r.Z)(2,arguments);var o=(0,a.Z)(e,t)/1e3;return(0,l.u)(null==n?void 0:n.roundingMethod)(o)}},67742:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/webhooks",function(){return n(85391)}])},85391:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(65400),l=n(31059),o=n(5789),c=n(51024),s=n(56697),u=n(55673),i=n(74048),d=n(2307),f=n(59361),p=n(53740),m=n(94055),h=n(5152),v=n.n(h),b=n(67294),y=n(3111),g=n(52293),x=n(90695);let{Title:w,Paragraph:O}=p.default,C=v()(()=>n.e(7949).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),j={CHAT:{name:"Chat messages",description:"When a user sends a chat message",color:"purple"},USER_JOINED:{name:"User joined",description:"When a user joins the chat",color:"green"},USER_PARTED:{name:"User parted",description:"When a user leaves the chat",color:"green"},NAME_CHANGE:{name:"User name changed",description:"When a user changes their name",color:"blue"},"VISIBILITY-UPDATE":{name:"Message visibility changed",description:"When a message visibility changes, likely due to moderation",color:"red"},STREAM_STARTED:{name:"Stream started",description:"When a stream starts",color:"orange"},STREAM_STOPPED:{name:"Stream stopped",description:"When a stream stops",color:"cyan"},STREAM_TITLE_UPDATED:{name:"Stream title updated",description:"When a stream title is changed",color:"yellow"}},NewWebhookModal=e=>{let{onOk:t,onCancel:n,open:i}=e,[d,f]=(0,b.useState)([]),[p,m]=(0,b.useState)(""),h=Object.keys(j).map(e=>({value:e,label:j[e].description})),v={disabled:(null==d?void 0:d.length)===0||!(0,g.jv)(p)},y=h.map(e=>(0,a.jsx)(o.Z,{span:8,children:(0,a.jsx)(l.default,{value:e.value,children:e.label})},e.value));return(0,a.jsxs)(s.default,{title:"Create New Webhook",open:i,onOk:function(){t(p,d),m(""),f(null)},onCancel:n,okButtonProps:v,children:[(0,a.jsx)("div",{children:(0,a.jsx)(c.default,{value:p,placeholder:"https://myserver.com/webhook",onChange:e=>m(e.currentTarget.value.trim()),type:"url",pattern:g.ax})}),(0,a.jsx)("p",{children:"Select the events that will be sent to this webhook."}),(0,a.jsx)(l.default.Group,{style:{width:"100%"},value:d,onChange:function(e){f(e)},children:(0,a.jsx)(u.Z,{children:y})}),(0,a.jsx)("p",{children:(0,a.jsx)(r.default,{type:"primary",onClick:function(){f(Object.keys(j))},children:"Select all"})})]})},Webhooks=()=>{let[e,t]=(0,b.useState)([]),[n,l]=(0,b.useState)(!1);function handleError(e){console.error("error",e)}async function getWebhooks(){try{let e=await (0,y.rQ)(y.XA);t(e)}catch(e){handleError(e)}}async function handleDelete(e){try{await (0,y.rQ)(y.M_,{method:"POST",data:{id:e}}),getWebhooks()}catch(e){handleError(e)}}async function handleSave(n,a){try{let r=await (0,y.rQ)(y.iG,{method:"POST",data:{url:n,events:a}});t(e.concat(r))}catch(e){handleError(e)}}(0,b.useEffect)(()=>{getWebhooks()},[]);let o=[{title:"",key:"delete",render:(e,t)=>(0,a.jsx)(i.default,{size:"middle",children:(0,a.jsx)(r.default,{onClick:()=>handleDelete(t.id),icon:(0,a.jsx)(C,{})})})},{title:"URL",dataIndex:"url",key:"url"},{title:"Events",dataIndex:"events",key:"events",render:e=>(0,a.jsx)(a.Fragment,{children:e.map(e=>(function(e){if(!e||!j[e])return null;let t=j[e];return(0,a.jsx)(m.default,{title:t.description,children:(0,a.jsx)(f.Z,{color:t.color,children:t.name})},e)})(e))})}];return(0,a.jsxs)("div",{children:[(0,a.jsx)(w,{children:"Webhooks"}),(0,a.jsx)(O,{children:"A webhook is a callback made to an external API in response to an event that takes place within Owncast. This can be used to build chat bots or sending automatic notifications that you've started streaming."}),(0,a.jsxs)(O,{children:["Read more about how to use webhooks, with examples, at"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,a.jsx)(d.Z,{rowKey:e=>e.id,columns:o,dataSource:e,pagination:!1}),(0,a.jsx)("br",{}),(0,a.jsx)(r.default,{type:"primary",onClick:()=>{l(!0)},children:"Create Webhook"}),(0,a.jsx)(NewWebhookModal,{open:n,onOk:(e,t)=>{l(!1),handleSave(e,t)},onCancel:()=>{l(!1)}})]})};Webhooks.getLayout=function(e){return(0,a.jsx)(x.l,{page:e})},t.default=Webhooks},11163:function(e,t,n){e.exports=n(38355)}},function(e){e.O(0,[5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,7752,5891,2891,4749,6627,8966,695,9774,2888,179],function(){return e(e.s=67742)}),_N_E=e.O()}]);