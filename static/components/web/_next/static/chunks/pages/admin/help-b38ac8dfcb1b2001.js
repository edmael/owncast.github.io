(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{59652:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a=n(4942),r=n(87462),o=n(94184),c=n.n(o),l=n(98423),i=n(67294),s=n(53124),d=n(97647),u=n(26303),f=n(44526),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},m=function(e){var t=e.prefixCls,n=e.className,o=e.hoverable,l=void 0===o||o,d=p(e,["prefixCls","className","hoverable"]);return i.createElement(s.C,null,function(e){var o=(0,e.getPrefixCls)("card",t),s=c()("".concat(o,"-grid"),n,(0,a.Z)({},"".concat(o,"-grid-hoverable"),l));return i.createElement("div",(0,r.Z)({},d,{className:s}))})},v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},h=i.forwardRef(function(e,t){var n,o,p,h,g=i.useContext(s.E_),b=g.getPrefixCls,x=g.direction,y=i.useContext(d.Z),w=e.prefixCls,Z=e.className,C=e.extra,E=e.headStyle,j=e.bodyStyle,N=e.title,O=e.loading,k=e.bordered,P=e.size,S=e.type,z=e.cover,_=e.actions,A=e.tabList,R=e.children,T=e.activeTabKey,D=e.defaultActiveTabKey,I=e.tabBarExtraContent,M=e.hoverable,L=e.tabProps,q=v(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),G=b("card",w),V=i.createElement(u.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},R),B=void 0!==T,F=(0,r.Z)((0,r.Z)({},void 0===L?{}:L),(o={},(0,a.Z)(o,B?"activeKey":"defaultActiveKey",B?T:D),(0,a.Z)(o,"tabBarExtraContent",I),o)),H=A&&A.length?i.createElement(f.Z,(0,r.Z)({size:"large"},F,{className:"".concat(G,"-head-tabs"),onChange:function(t){var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)},items:A.map(function(e){var t;return{label:e.tab,key:e.key,disabled:null!==(t=e.disabled)&&void 0!==t&&t}})})):null;(N||C||H)&&(h=i.createElement("div",{className:"".concat(G,"-head"),style:void 0===E?{}:E},i.createElement("div",{className:"".concat(G,"-head-wrapper")},N&&i.createElement("div",{className:"".concat(G,"-head-title")},N),C&&i.createElement("div",{className:"".concat(G,"-extra")},C)),H));var K=z?i.createElement("div",{className:"".concat(G,"-cover")},z):null,U=i.createElement("div",{className:"".concat(G,"-body"),style:void 0===j?{}:j},O?V:R),X=_&&_.length?i.createElement("ul",{className:"".concat(G,"-actions")},_.map(function(e,t){return i.createElement("li",{style:{width:"".concat(100/_.length,"%")},key:"action-".concat(t)},i.createElement("span",null,e))})):null,W=(0,l.Z)(q,["onTabChange"]),Y=P||y,Q=c()(G,(p={},(0,a.Z)(p,"".concat(G,"-loading"),O),(0,a.Z)(p,"".concat(G,"-bordered"),void 0===k||k),(0,a.Z)(p,"".concat(G,"-hoverable"),M),(0,a.Z)(p,"".concat(G,"-contain-grid"),(i.Children.forEach(e.children,function(e){e&&e.type&&e.type===m&&(n=!0)}),n)),(0,a.Z)(p,"".concat(G,"-contain-tabs"),A&&A.length),(0,a.Z)(p,"".concat(G,"-").concat(Y),Y),(0,a.Z)(p,"".concat(G,"-type-").concat(S),!!S),(0,a.Z)(p,"".concat(G,"-rtl"),"rtl"===x),p),Z);return i.createElement("div",(0,r.Z)({ref:t},W,{className:Q}),h,K,U,X)}),g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},b=h;b.Grid=m,b.Meta=function(e){return i.createElement(s.C,null,function(t){var n=t.getPrefixCls,a=e.prefixCls,o=e.className,l=e.avatar,s=e.title,d=e.description,u=g(e,["prefixCls","className","avatar","title","description"]),f=n("card",a),p=c()("".concat(f,"-meta"),o),m=l?i.createElement("div",{className:"".concat(f,"-meta-avatar")},l):null,v=s?i.createElement("div",{className:"".concat(f,"-meta-title")},s):null,h=d?i.createElement("div",{className:"".concat(f,"-meta-description")},d):null,b=v||h?i.createElement("div",{className:"".concat(f,"-meta-detail")},v,h):null;return i.createElement("div",(0,r.Z)({},u,{className:p}),m,b)})};var x=b},27049:function(e,t,n){"use strict";var a=n(87462),r=n(4942),o=n(94184),c=n.n(o),l=n(67294),i=n(53124),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};t.Z=function(e){var t,n=l.useContext(i.E_),o=n.getPrefixCls,d=n.direction,u=e.prefixCls,f=e.type,p=void 0===f?"horizontal":f,m=e.orientation,v=void 0===m?"center":m,h=e.orientationMargin,g=e.className,b=e.children,x=e.dashed,y=e.plain,w=s(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),Z=o("divider",u),C=v.length>0?"-".concat(v):v,E=!!b,j="left"===v&&null!=h,N="right"===v&&null!=h,O=c()(Z,"".concat(Z,"-").concat(p),(t={},(0,r.Z)(t,"".concat(Z,"-with-text"),E),(0,r.Z)(t,"".concat(Z,"-with-text").concat(C),E),(0,r.Z)(t,"".concat(Z,"-dashed"),!!x),(0,r.Z)(t,"".concat(Z,"-plain"),!!y),(0,r.Z)(t,"".concat(Z,"-rtl"),"rtl"===d),(0,r.Z)(t,"".concat(Z,"-no-default-orientation-margin-left"),j),(0,r.Z)(t,"".concat(Z,"-no-default-orientation-margin-right"),N),t),g),k=(0,a.Z)((0,a.Z)({},j&&{marginLeft:h}),N&&{marginRight:h});return l.createElement("div",(0,a.Z)({className:O},w,{role:"separator"}),b&&"vertical"!==p&&l.createElement("span",{className:"".concat(Z,"-inner-text"),style:k},b))}},26303:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var a=n(4942),r=n(87462),o=n(71002),c=n(94184),l=n.n(c),i=n(67294),s=n(53124),d=n(98423),u=function(e){var t,n,o=e.prefixCls,c=e.className,s=e.style,d=e.size,u=e.shape,f=l()((t={},(0,a.Z)(t,"".concat(o,"-lg"),"large"===d),(0,a.Z)(t,"".concat(o,"-sm"),"small"===d),t)),p=l()((n={},(0,a.Z)(n,"".concat(o,"-circle"),"circle"===u),(0,a.Z)(n,"".concat(o,"-square"),"square"===u),(0,a.Z)(n,"".concat(o,"-round"),"round"===u),n)),m=i.useMemo(function(){return"number"==typeof d?{width:d,height:d,lineHeight:"".concat(d,"px")}:{}},[d]);return i.createElement("span",{className:l()(o,f,p,c),style:(0,r.Z)((0,r.Z)({},m),s)})},f=n(1413),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},m=n(42135),v=function(e,t){return i.createElement(m.Z,(0,f.Z)((0,f.Z)({},e),{},{ref:t,icon:p}))};v.displayName="DotChartOutlined";var h=i.forwardRef(v),g=n(74902),b=function(e){var t=function(t){var n=e.width,a=e.rows;return Array.isArray(n)?n[t]:(void 0===a?2:a)-1===t?n:void 0},n=e.prefixCls,a=e.className,r=e.style,o=e.rows,c=(0,g.Z)(Array(o)).map(function(e,n){return i.createElement("li",{key:n,style:{width:t(n)}})});return i.createElement("ul",{className:l()(n,a),style:r},c)},x=function(e){var t=e.prefixCls,n=e.className,a=e.width,o=e.style;return i.createElement("h3",{className:l()(t,n),style:(0,r.Z)({width:a},o)})};function y(e){return e&&"object"===(0,o.Z)(e)?e:{}}var w=function(e){var t=e.prefixCls,n=e.loading,o=e.className,c=e.style,d=e.children,f=e.avatar,p=void 0!==f&&f,m=e.title,v=void 0===m||m,h=e.paragraph,g=void 0===h||h,w=e.active,Z=e.round,C=i.useContext(s.E_),E=C.getPrefixCls,j=C.direction,N=E("skeleton",t);if(n||!("loading"in e)){var O=!!p,k=!!v,P=!!g;if(O){var S=(0,r.Z)((0,r.Z)({prefixCls:"".concat(N,"-avatar")},k&&!P?{size:"large",shape:"square"}:{size:"large",shape:"circle"}),y(p));_=i.createElement("div",{className:"".concat(N,"-header")},i.createElement(u,(0,r.Z)({},S)))}if(k||P){if(k){var z,_,A,R,T,D=(0,r.Z)((0,r.Z)({prefixCls:"".concat(N,"-title")},!O&&P?{width:"38%"}:O&&P?{width:"50%"}:{}),y(v));R=i.createElement(x,(0,r.Z)({},D))}if(P){var I,M=(0,r.Z)((0,r.Z)({prefixCls:"".concat(N,"-paragraph")},(I={},O&&k||(I.width="61%"),!O&&k?I.rows=3:I.rows=2,I)),y(g));T=i.createElement(b,(0,r.Z)({},M))}A=i.createElement("div",{className:"".concat(N,"-content")},R,T)}var L=l()(N,(z={},(0,a.Z)(z,"".concat(N,"-with-avatar"),O),(0,a.Z)(z,"".concat(N,"-active"),w),(0,a.Z)(z,"".concat(N,"-rtl"),"rtl"===j),(0,a.Z)(z,"".concat(N,"-round"),Z),z),o);return i.createElement("div",{className:L,style:c},_,A)}return void 0!==d?d:null};w.Button=function(e){var t,n=e.prefixCls,o=e.className,c=e.active,f=e.block,p=e.size,m=(0,i.useContext(s.E_).getPrefixCls)("skeleton",n),v=(0,d.Z)(e,["prefixCls"]),h=l()(m,"".concat(m,"-element"),(t={},(0,a.Z)(t,"".concat(m,"-active"),c),(0,a.Z)(t,"".concat(m,"-block"),void 0!==f&&f),t),o);return i.createElement("div",{className:h},i.createElement(u,(0,r.Z)({prefixCls:"".concat(m,"-button"),size:void 0===p?"default":p},v)))},w.Avatar=function(e){var t=e.prefixCls,n=e.className,o=e.active,c=e.shape,f=e.size,p=(0,i.useContext(s.E_).getPrefixCls)("skeleton",t),m=(0,d.Z)(e,["prefixCls","className"]),v=l()(p,"".concat(p,"-element"),(0,a.Z)({},"".concat(p,"-active"),o),n);return i.createElement("div",{className:v},i.createElement(u,(0,r.Z)({prefixCls:"".concat(p,"-avatar"),shape:void 0===c?"circle":c,size:void 0===f?"default":f},m)))},w.Input=function(e){var t,n=e.prefixCls,o=e.className,c=e.active,f=e.block,p=e.size,m=(0,i.useContext(s.E_).getPrefixCls)("skeleton",n),v=(0,d.Z)(e,["prefixCls"]),h=l()(m,"".concat(m,"-element"),(t={},(0,a.Z)(t,"".concat(m,"-active"),c),(0,a.Z)(t,"".concat(m,"-block"),f),t),o);return i.createElement("div",{className:h},i.createElement(u,(0,r.Z)({prefixCls:"".concat(m,"-input"),size:void 0===p?"default":p},v)))},w.Image=function(e){var t=e.prefixCls,n=e.className,r=e.style,o=e.active,c=(0,i.useContext(s.E_).getPrefixCls)("skeleton",t),d=l()(c,"".concat(c,"-element"),(0,a.Z)({},"".concat(c,"-active"),o),n);return i.createElement("div",{className:d},i.createElement("div",{className:l()("".concat(c,"-image"),n),style:r},i.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(c,"-image-svg")},i.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(c,"-image-path")}))))},w.Node=function(e){var t=e.prefixCls,n=e.className,r=e.style,o=e.active,c=e.children,d=(0,i.useContext(s.E_).getPrefixCls)("skeleton",t),u=l()(d,"".concat(d,"-element"),(0,a.Z)({},"".concat(d,"-active"),o),n),f=null!=c?c:i.createElement(h,null);return i.createElement("div",{className:u},i.createElement("div",{className:l()("".concat(d,"-image"),n),style:r},f))};var Z=w},89281:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;t.Z=void 0;var o=r(n(10434)),c=r(n(94184)),l=a(n(67294)),i=n(31929),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};t.Z=function(e){return l.createElement(i.ConfigConsumer,null,function(t){var n=t.getPrefixCls,a=e.prefixCls,r=e.className,i=e.avatar,d=e.title,u=e.description,f=s(e,["prefixCls","className","avatar","title","description"]),p=n("card",a),m=(0,c.default)("".concat(p,"-meta"),r),v=i?l.createElement("div",{className:"".concat(p,"-meta-avatar")},i):null,h=d?l.createElement("div",{className:"".concat(p,"-meta-title")},d):null,g=u?l.createElement("div",{className:"".concat(p,"-meta-description")},u):null,b=h||g?l.createElement("div",{className:"".concat(p,"-meta-detail")},h,g):null;return l.createElement("div",(0,o.default)({},f,{className:m}),v,b)})}},20640:function(e,t,n){"use strict";var a=n(11742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,c,l,i,s,d,u,f=!1;t||(t={}),c=t.debug||!1;try{if(i=a(),s=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){c&&console.warn("unable to use e.clipboardData"),c&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(u),s.selectNodeContents(u),d.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(a){c&&console.error("unable to copy using execCommand: ",a),c&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(a){c&&console.error("unable to copy using clipboardData: ",a),c&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=n.replace(/#{\s*key\s*}/g,o),window.prompt(l,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(s):d.removeAllRanges()),u&&document.body.removeChild(u),i()}return f}},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});var a={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function r(e){return e?a[e]:a.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(19013),r=n(13882);function o(e,t){return(0,r.Z)(2,arguments),(0,a.Z)(e).getTime()-(0,a.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(59910),r=n(13882),o=n(93645);function c(e,t,n){(0,r.Z)(2,arguments);var c=(0,a.Z)(e,t)/1e3;return(0,o.u)(null==n?void 0:n.roundingMethod)(c)}},54779:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/help",function(){return n(44130)}])},44130:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(85893),r=n(71230),o=n(15746),c=n(33859),l=n(71577),i=n(27049),s=n(59652),d=n(89281),u=n(11700);n(67294);var f=n(5152),p=n.n(f),m=n(6960);let v=p()(()=>n.e(2424).then(n.t.bind(n,32424,23)),{loadableGenerated:{webpack:()=>[32424]},ssr:!1}),h=p()(()=>n.e(4143).then(n.t.bind(n,14143,23)),{loadableGenerated:{webpack:()=>[14143]},ssr:!1}),g=p()(()=>n.e(6460).then(n.t.bind(n,36460,23)),{loadableGenerated:{webpack:()=>[36460]},ssr:!1}),b=p()(()=>n.e(7118).then(n.t.bind(n,87118,23)),{loadableGenerated:{webpack:()=>[87118]},ssr:!1}),x=p()(()=>n.e(3436).then(n.t.bind(n,3436,23)),{loadableGenerated:{webpack:()=>[3436]},ssr:!1}),y=p()(()=>n.e(4829).then(n.t.bind(n,4829,23)),{loadableGenerated:{webpack:()=>[4829]},ssr:!1}),w=p()(()=>n.e(8864).then(n.t.bind(n,38864,23)),{loadableGenerated:{webpack:()=>[38864]},ssr:!1}),Z=p()(()=>n.e(6802).then(n.t.bind(n,36802,23)),{loadableGenerated:{webpack:()=>[36802]},ssr:!1}),C=p()(()=>n.e(2711).then(n.t.bind(n,2711,23)),{loadableGenerated:{webpack:()=>[2711]},ssr:!1}),E=p()(()=>n.e(1010).then(n.t.bind(n,71010,23)),{loadableGenerated:{webpack:()=>[71010]},ssr:!1});function j(){let e=[{icon:(0,a.jsx)(C,{style:{fontSize:"24px"}}),title:"I want to configure my owncast instance",content:(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://owncast.online/docs/configuration/?source=admin",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(w,{})," Learn more"]})})},{icon:(0,a.jsx)(g,{style:{fontSize:"24px"}}),title:"Help configuring my broadcasting software",content:(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://owncast.online/docs/broadcasting/?source=admin",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(w,{})," Learn more"]})})},{icon:(0,a.jsx)(y,{style:{fontSize:"24px"}}),title:"I want to embed my stream into another site",content:(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://owncast.online/docs/embed/?source=admin",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(w,{})," Learn more"]})})},{icon:(0,a.jsx)(x,{style:{fontSize:"24px"}}),title:"I want to customize my website",content:(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://owncast.online/docs/website/?source=admin",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(w,{})," Learn more"]})})},{icon:(0,a.jsx)(E,{style:{fontSize:"24px"}}),title:"I want to tweak my video output",content:(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://owncast.online/docs/encoding/?source=admin",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(w,{})," Learn more"]})})},{icon:(0,a.jsx)(b,{style:{fontSize:"24px"}}),title:"I want to use an external storage provider",content:(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://owncast.online/docs/storage/?source=admin",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(w,{})," Learn more"]})})}],t=[{icon:(0,a.jsx)(h,{style:{fontSize:"24px"}}),title:"I found a bug",content:(0,a.jsxs)("div",{children:["If you found a bug, then please",(0,a.jsxs)("a",{href:"https://github.com/owncast/owncast/issues/new/choose",target:"_blank",rel:"noopener noreferrer",children:[" ","let us know"]})]})},{icon:(0,a.jsx)(Z,{style:{fontSize:"24px"}}),title:"I have a general question",content:(0,a.jsxs)("div",{children:["Most general questions are answered in our",(0,a.jsxs)("a",{href:"https://owncast.online/faq/?source=admin",target:"_blank",rel:"noopener noreferrer",children:[" ","FAQ"]})," ","or exist in our"," ",(0,a.jsx)("a",{href:"https://github.com/owncast/owncast/discussions",target:"_blank",rel:"noopener noreferrer",children:"discussions"})]})},{icon:(0,a.jsx)(v,{style:{fontSize:"24px"}}),title:"I want to build add-ons for Owncast",content:(0,a.jsxs)("div",{children:["You can build your own bots, overlays, tools and add-ons with our",(0,a.jsx)("a",{href:"https://owncast.online/thirdparty?source=admin",target:"_blank",rel:"noopener noreferrer",children:"\xa0developer APIs.\xa0"})]})}];return(0,a.jsxs)("div",{className:"help-page",children:[(0,a.jsx)(u.Z,{style:{textAlign:"center"},children:"How can we help you?"}),(0,a.jsxs)(r.Z,{gutter:[16,16],justify:"space-around",align:"middle",children:[(0,a.jsxs)(o.Z,{xs:24,lg:12,style:{textAlign:"center"},children:[(0,a.jsx)(c.ZP,{status:"500"}),(0,a.jsx)(u.Z,{level:2,children:"Troubleshooting"}),(0,a.jsx)(l.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://owncast.online/docs/troubleshooting/?source=admin",icon:(0,a.jsx)(w,{}),type:"primary",children:"Fix your problems"})]}),(0,a.jsxs)(o.Z,{xs:24,lg:12,style:{textAlign:"center"},children:[(0,a.jsx)(c.ZP,{status:"404"}),(0,a.jsx)(u.Z,{level:2,children:"Documentation"}),(0,a.jsx)(l.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://owncast.online/docs?source=admin",icon:(0,a.jsx)(w,{}),type:"primary",children:"Read the Docs"})]})]}),(0,a.jsx)(i.Z,{}),(0,a.jsx)(u.Z,{level:2,children:"Common tasks"}),(0,a.jsx)(r.Z,{gutter:[16,16],children:e.map(e=>(0,a.jsx)(o.Z,{xs:24,lg:12,children:(0,a.jsx)(s.Z,{children:(0,a.jsx)(d.Z,{avatar:e.icon,title:e.title,description:e.content})})},e.title))}),(0,a.jsx)(i.Z,{}),(0,a.jsx)(u.Z,{level:2,children:"Other"}),(0,a.jsx)(r.Z,{gutter:[16,16],children:t.map(e=>(0,a.jsx)(o.Z,{xs:24,lg:12,children:(0,a.jsx)(s.Z,{children:(0,a.jsx)(d.Z,{avatar:e.icon,title:e.title,description:e.content})})},e.title))})]})}j.getLayout=function(e){return(0,a.jsx)(m.l,{page:e})}},11163:function(e,t,n){e.exports=n(80880)},60057:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var a=n(4942),r=n(1413),o=n(97685),c=n(45987),l=n(67294),i=n(81263),s=n(94184),d=n.n(s),u={adjustX:1,adjustY:1},f=[0,0],p={topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:f},topCenter:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:f},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:f},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:f},bottomCenter:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:f},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:f}},m=n(15105),v=n(75164),h=n(88603),g=m.Z.ESC,b=m.Z.TAB,x=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"],y=l.forwardRef(function(e,t){var n,s,u,f,m,y,w,Z,C,E,j,N,O,k,P,S,z=e.arrow,_=void 0!==z&&z,A=e.prefixCls,R=void 0===A?"rc-dropdown":A,T=e.transitionName,D=e.animation,I=e.align,M=e.placement,L=e.placements,q=e.getPopupContainer,G=e.showAction,V=e.hideAction,B=e.overlayClassName,F=e.overlayStyle,H=e.visible,K=e.trigger,U=void 0===K?["hover"]:K,X=e.autoFocus,W=(0,c.Z)(e,x),Y=l.useState(),Q=(0,o.Z)(Y,2),J=Q[0],$=Q[1],ee="visible"in e?H:J,et=l.useRef(null);l.useImperativeHandle(t,function(){return et.current}),u=(s={visible:ee,setTriggerVisible:$,triggerRef:et,onVisibleChange:e.onVisibleChange,autoFocus:X}).visible,f=s.setTriggerVisible,m=s.triggerRef,y=s.onVisibleChange,w=s.autoFocus,Z=l.useRef(!1),C=function(){if(u&&m.current){var e,t,n,a;null===(e=m.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||null===(a=n.focus)||void 0===a||a.call(n),f(!1),"function"==typeof y&&y(!1)}},E=function(){var e,t,n,a,r=(0,h.tS)(null===(e=m.current)||void 0===e?void 0:null===(t=e.popupRef)||void 0===t?void 0:null===(n=t.current)||void 0===n?void 0:null===(a=n.getElement)||void 0===a?void 0:a.call(n))[0];return null!=r&&!!r.focus&&(r.focus(),Z.current=!0,!0)},j=function(e){switch(e.keyCode){case g:C();break;case b:var t=!1;Z.current||(t=E()),t?e.preventDefault():C()}},l.useEffect(function(){return u?(window.addEventListener("keydown",j),w&&(0,v.Z)(E,3),function(){window.removeEventListener("keydown",j),Z.current=!1}):function(){Z.current=!1}},[u]);var en=function(){var t=e.overlay;return"function"==typeof t?t():t},ea=function(){var e=en();return l.createElement(l.Fragment,null,_&&l.createElement("div",{className:"".concat(R,"-arrow")}),e)},er=V;return er||-1===U.indexOf("contextMenu")||(er=["click"]),l.createElement(i.Z,(0,r.Z)((0,r.Z)({builtinPlacements:void 0===L?p:L},W),{},{prefixCls:R,ref:et,popupClassName:d()(B,(0,a.Z)({},"".concat(R,"-show-arrow"),_)),popupStyle:F,action:U,showAction:G,hideAction:er||[],popupPlacement:void 0===M?"bottomLeft":M,popupAlign:I,popupTransitionName:T,popupAnimation:D,popupVisible:ee,stretch:(N=e.minOverlayWidthMatchTrigger,O=e.alignPoint,"minOverlayWidthMatchTrigger"in e?N:!O)?"minWidth":"",popup:"function"==typeof e.overlay?ea:ea(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;$(t),"function"==typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;$(!1),n&&n(t)},getPopupContainer:q}),(P=(k=e.children).props?k.props:{},S=d()(P.className,void 0!==(n=e.openClassName)?n:"".concat(R,"-open")),ee&&k?l.cloneElement(k,{className:S}):k))})},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},function(e){e.O(0,[2074,173,164,2744,9680,4931,5402,2231,7381,492,8014,9915,4526,2928,9927,3859,180,6960,9774,2888,179],function(){return e(e.s=54779)}),_N_E=e.O()}]);