(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4440],{24308:function(e,n,t){"use strict";t.d(n,{c4:function(){return i}});var r=t(4942),a=t(87462),i=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=new Map,c=-1,l={};n.ZP={matchHandlers:{},dispatch:function(e){return l=e,s.forEach(function(e){return e(l)}),s.size>=1},subscribe:function(e){return s.size||this.register(),c+=1,s.set(c,e),e(l),c},unsubscribe:function(e){s.delete(e),s.size||this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach(function(n){var t=o[n],r=e.matchHandlers[t];null==r||r.mql.removeListener(null==r?void 0:r.listener)}),s.clear()},register:function(){var e=this;Object.keys(o).forEach(function(n){var t=o[n],i=function(t){var i=t.matches;e.dispatch((0,a.Z)((0,a.Z)({},l),(0,r.Z)({},n,i)))},s=window.matchMedia(t);s.addListener(i),e.matchHandlers[t]={mql:s,listener:i},i(s)})}}},15746:function(e,n,t){"use strict";var r=t(21584);n.Z=r.Z},99134:function(e,n,t){"use strict";var r=(0,t(67294).createContext)({});n.Z=r},21584:function(e,n,t){"use strict";var r=t(4942),a=t(87462),i=t(71002),o=t(94184),s=t.n(o),c=t(67294),l=t(53124),u=t(99134),d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t},f=["xs","sm","md","lg","xl","xxl"],p=c.forwardRef(function(e,n){var t,o=c.useContext(l.E_),p=o.getPrefixCls,h=o.direction,m=c.useContext(u.Z),x=m.gutter,g=m.wrap,v=m.supportFlexGap,y=e.prefixCls,b=e.span,Z=e.order,j=e.offset,w=e.push,C=e.pull,k=e.className,N=e.children,E=e.flex,O=e.style,S=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),T=p("col",y),P={};f.forEach(function(n){var t,o={},s=e[n];"number"==typeof s?o.span=s:"object"===(0,i.Z)(s)&&(o=s||{}),delete S[n],P=(0,a.Z)((0,a.Z)({},P),(t={},(0,r.Z)(t,"".concat(T,"-").concat(n,"-").concat(o.span),void 0!==o.span),(0,r.Z)(t,"".concat(T,"-").concat(n,"-order-").concat(o.order),o.order||0===o.order),(0,r.Z)(t,"".concat(T,"-").concat(n,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.Z)(t,"".concat(T,"-").concat(n,"-push-").concat(o.push),o.push||0===o.push),(0,r.Z)(t,"".concat(T,"-").concat(n,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.Z)(t,"".concat(T,"-rtl"),"rtl"===h),t))});var _=s()(T,(t={},(0,r.Z)(t,"".concat(T,"-").concat(b),void 0!==b),(0,r.Z)(t,"".concat(T,"-order-").concat(Z),Z),(0,r.Z)(t,"".concat(T,"-offset-").concat(j),j),(0,r.Z)(t,"".concat(T,"-push-").concat(w),w),(0,r.Z)(t,"".concat(T,"-pull-").concat(C),C),t),k,P),L={};if(x&&x[0]>0){var I=x[0]/2;L.paddingLeft=I,L.paddingRight=I}if(x&&x[1]>0&&!v){var F=x[1]/2;L.paddingTop=F,L.paddingBottom=F}return E&&(L.flex="number"==typeof E?"".concat(E," ").concat(E," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(E)?"0 0 ".concat(E):E,!1!==g||L.minWidth||(L.minWidth=0)),c.createElement("div",(0,a.Z)({},S,{style:(0,a.Z)((0,a.Z)({},L),O),className:_,ref:n}),N)});n.Z=p},92820:function(e,n,t){"use strict";var r=t(87462),a=t(4942),i=t(71002),o=t(97685),s=t(94184),c=t.n(s),l=t(67294),u=t(53124),d=t(98082),f=t(24308),p=t(93355),h=t(99134),m=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};function x(e,n){var t=l.useState("string"==typeof e?e:""),r=(0,o.Z)(t,2),a=r[0],s=r[1],c=function(){if("object"===(0,i.Z)(e))for(var t=0;t<f.c4.length;t++){var r=f.c4[t];if(n[r]){var a=e[r];if(void 0!==a){s(a);return}}}};return l.useEffect(function(){c()},[JSON.stringify(e),n]),a}(0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between","space-evenly");var g=l.forwardRef(function(e,n){var t,s,p=e.prefixCls,g=e.justify,v=e.align,y=e.className,b=e.style,Z=e.children,j=e.gutter,w=void 0===j?0:j,C=e.wrap,k=m(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),N=l.useContext(u.E_),E=N.getPrefixCls,O=N.direction,S=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),T=(0,o.Z)(S,2),P=T[0],_=T[1],L=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),I=(0,o.Z)(L,2),F=I[0],D=I[1],R=x(v,F),M=x(g,F),U=(0,d.Z)(),A=l.useRef(w);l.useEffect(function(){var e=f.ZP.subscribe(function(e){D(e);var n=A.current||0;(!Array.isArray(n)&&"object"===(0,i.Z)(n)||Array.isArray(n)&&("object"===(0,i.Z)(n[0])||"object"===(0,i.Z)(n[1])))&&_(e)});return function(){return f.ZP.unsubscribe(e)}},[]);var H=E("row",p),z=(t=[void 0,void 0],(Array.isArray(w)?w:[w,void 0]).forEach(function(e,n){if("object"===(0,i.Z)(e))for(var r=0;r<f.c4.length;r++){var a=f.c4[r];if(P[a]&&void 0!==e[a]){t[n]=e[a];break}}else t[n]=e}),t),q=c()(H,(s={},(0,a.Z)(s,"".concat(H,"-no-wrap"),!1===C),(0,a.Z)(s,"".concat(H,"-").concat(M),M),(0,a.Z)(s,"".concat(H,"-").concat(R),R),(0,a.Z)(s,"".concat(H,"-rtl"),"rtl"===O),s),y),W={},B=null!=z[0]&&z[0]>0?-(z[0]/2):void 0,V=null!=z[1]&&z[1]>0?-(z[1]/2):void 0;if(B&&(W.marginLeft=B,W.marginRight=B),U){var G=(0,o.Z)(z,2);W.rowGap=G[1]}else V&&(W.marginTop=V,W.marginBottom=V);var J=(0,o.Z)(z,2),K=J[0],Y=J[1],$=l.useMemo(function(){return{gutter:[K,Y],wrap:C,supportFlexGap:U}},[K,Y,C,U]);return l.createElement(h.Z.Provider,{value:$},l.createElement("div",(0,r.Z)({},k,{className:q,style:(0,r.Z)((0,r.Z)({},W),b),ref:n}),Z))});n.Z=g},97183:function(e,n,t){"use strict";var r=t(2897),a=t(7293),i=r.ZP;i.Header=r.h4,i.Footer=r.$_,i.Content=r.VY,i.Sider=a.Z,n.Z=i},71230:function(e,n,t){"use strict";var r=t(92820);n.Z=r.Z},94594:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(87462),a=t(4942),i=t(50888),o=t(94184),s=t.n(o),c=t(97685),l=t(45987),u=t(67294),d=t(21770),f=t(15105),p=u.forwardRef(function(e,n){var t,r=e.prefixCls,i=void 0===r?"rc-switch":r,o=e.className,p=e.checked,h=e.defaultChecked,m=e.disabled,x=e.loadingIcon,g=e.checkedChildren,v=e.unCheckedChildren,y=e.onClick,b=e.onChange,Z=e.onKeyDown,j=(0,l.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),w=(0,d.Z)(!1,{value:p,defaultValue:h}),C=(0,c.Z)(w,2),k=C[0],N=C[1];function E(e,n){var t=k;return m||(N(t=e),null==b||b(t,n)),t}var O=s()(i,o,(t={},(0,a.Z)(t,"".concat(i,"-checked"),k),(0,a.Z)(t,"".concat(i,"-disabled"),m),t));return u.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":k,disabled:m,className:O,ref:n,onKeyDown:function(e){e.which===f.Z.LEFT?E(!1,e):e.which===f.Z.RIGHT&&E(!0,e),null==Z||Z(e)},onClick:function(e){var n=E(!k,e);null==y||y(n,e)}}),x,u.createElement("span",{className:"".concat(i,"-inner")},k?g:v))});p.displayName="Switch";var h=t(53124),m=t(98866),x=t(97647),g=t(68349),v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t},y=u.forwardRef(function(e,n){var t,o=e.prefixCls,c=e.size,l=e.disabled,d=e.loading,f=e.className,y=v(e,["prefixCls","size","disabled","loading","className"]),b=u.useContext(h.E_),Z=b.getPrefixCls,j=b.direction,w=u.useContext(x.Z),C=u.useContext(m.Z),k=Z("switch",o),N=u.createElement("div",{className:"".concat(k,"-handle")},d&&u.createElement(i.Z,{className:"".concat(k,"-loading-icon")})),E=s()((t={},(0,a.Z)(t,"".concat(k,"-small"),"small"===(c||w)),(0,a.Z)(t,"".concat(k,"-loading"),d),(0,a.Z)(t,"".concat(k,"-rtl"),"rtl"===j),t),void 0===f?"":f);return u.createElement(g.Z,{insertExtraNode:!0},u.createElement(p,(0,r.Z)({},y,{prefixCls:k,className:E,disabled:(null!=l?l:C)||d,ref:n,loadingIcon:N})))});y.__ANT_SWITCH=!0;var b=y},93645:function(e,n,t){"use strict";t.d(n,{u:function(){return a}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function a(e){return e?r[e]:r.trunc}},59910:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(19013),a=t(13882);function i(e,n){return(0,a.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(n).getTime()}},11699:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(59910),a=t(13882),i=t(93645);function o(e,n,t){(0,a.Z)(2,arguments);var o=(0,r.Z)(e,n)/1e3;return(0,i.u)(null==t?void 0:t.roundingMethod)(o)}},7148:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-notify",function(){return t(86686)}])},6979:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),a=t(67294),i=t(94594),o=t(41983),s=t(73615),c=t(90745),l=t(99519);let u=e=>{let{apiPath:n,checked:t,reversed:u=!1,configPath:d="",disabled:f=!1,fieldName:p,label:h,tip:m,useSubmit:x,onChange:g}=e,[v,y]=(0,a.useState)(null),b=null,Z=(0,a.useContext)(l.aC),{setFieldInConfigState:j}=Z||{},w=()=>{y(null),clearTimeout(b),b=null},C=async e=>{if(x){y((0,o.kg)(o.Jk));let t=u?!e:e;await (0,c.Si)({apiPath:n,data:{value:t},onSuccess:()=>{j({fieldName:p,value:t,path:d}),y((0,o.kg)(o.zv))},onError:e=>{y((0,o.kg)(o.Un,"There was an error: ".concat(e)))}}),b=setTimeout(w,c.sI)}g&&g(e)},k=null!==v&&v.type===o.Jk;return(0,r.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[h&&(0,r.jsx)("div",{className:"label-side",children:(0,r.jsx)("span",{className:"formfield-label",children:h})}),(0,r.jsxs)("div",{className:"input-side",children:[(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)(i.Z,{className:"switch field-".concat(p),loading:k,onChange:C,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:f}),(0,r.jsx)(s.E,{status:v})]}),(0,r.jsx)("p",{className:"field-tip",children:m})]})]})};u.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},86686:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var r=t(85893),a=t(85818),i=t(14670),o=t(71230),s=t(15746),c=t(71577),l=t(67294),u=t(41664),d=t.n(u),f=t(99519),p=t(79139),h=t(73615),m=t(90745),x=t(6979),g=t(41983);let{Title:v}=a.Z,y=()=>{let e=(0,l.useContext)(f.aC),{serverConfig:n,setFieldInConfigState:t}=e||{},{notifications:a}=n||{},{discord:i}=a||{},{enabled:o,webhook:s,goLiveMessage:u}=i||{},[d,y]=(0,l.useState)({}),[b,Z]=(0,l.useState)(null),[j,w]=(0,l.useState)(!1);(0,l.useEffect)(()=>{y({enabled:o,webhook:s,goLiveMessage:u})},[a,i]);let C=()=>""!==s&&""!==u,k=e=>{let{fieldName:n,value:t}=e;y({...d,[n]:t}),w(C())},N=()=>{Z(null),clearTimeout(null)},E=async()=>{await (0,m.Si)({apiPath:"/notifications/discord",data:{value:d},onSuccess:()=>{t({fieldName:"discord",value:d,path:"notifications"}),Z((0,g.kg)(g.zv,"Updated.")),setTimeout(N,m.sI)},onError:e=>{Z((0,g.kg)(g.Un,e)),setTimeout(N,m.sI)}})},O=e=>{k({fieldName:"enabled",value:e})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{children:"Discord"}),(0,r.jsx)("p",{className:"description reduced-margins",children:"Let your Discord channel know each time you go live."}),(0,r.jsxs)("p",{className:"description reduced-margins",children:[(0,r.jsx)("a",{href:"https://support.discord.com/hc/en-us/articles/228383668",target:"_blank",rel:"noreferrer",children:"Create a webhook"})," ","under ",(0,r.jsx)("i",{children:"Edit Channel / Integrations"})," on your Discord channel and provide it below."]}),(0,r.jsx)(x.Z,{apiPath:"",fieldName:"discordEnabled",label:"Enable Discord",checked:d.enabled,onChange:O}),(0,r.jsx)("div",{style:{display:d.enabled?"block":"none"},children:(0,r.jsx)(p.nv,{...m.oy.webhookUrl,required:!0,value:d.webhook,onChange:k})}),(0,r.jsx)("div",{style:{display:d.enabled?"block":"none"},children:(0,r.jsx)(p.nv,{...m.oy.goLiveMessage,required:!0,value:d.goLiveMessage,onChange:k})}),(0,r.jsx)(c.Z,{type:"primary",onClick:E,style:{display:j?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Save"}),(0,r.jsx)(h.E,{status:b})]})},{Title:b}=a.Z,Z=()=>{let e=(0,l.useContext)(f.aC),{serverConfig:n,setFieldInConfigState:t}=e||{},{notifications:a}=n||{},{browser:i}=a||{},{enabled:o,goLiveMessage:s}=i||{},[u,d]=(0,l.useState)({}),[v,y]=(0,l.useState)(null),[Z,j]=(0,l.useState)(!1);(0,l.useEffect)(()=>{d({enabled:o,goLiveMessage:s})},[a,i]);let w=()=>!0,C=e=>{let{fieldName:n,value:t}=e;console.log(n,t),d({...u,[n]:t}),j(w())},k=e=>{C({fieldName:"enabled",value:e})},N=()=>{y(null),clearTimeout(null)},E=async()=>{await (0,m.Si)({apiPath:"/notifications/browser",data:{value:u},onSuccess:()=>{t({fieldName:"browser",value:u,path:"notifications"}),y((0,g.kg)(g.zv,"Updated.")),setTimeout(N,m.sI)},onError:e=>{y((0,g.kg)(g.Un,e)),setTimeout(N,m.sI)}})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{children:"Browser Alerts"}),(0,r.jsx)("p",{className:"description reduced-margins",children:"Viewers can opt into being notified when you go live with their browser."}),(0,r.jsx)("p",{className:"description reduced-margins",children:"Not all browsers support this."}),(0,r.jsx)(x.Z,{apiPath:"",fieldName:"enabled",label:"Enable browser notifications",onChange:k,checked:u.enabled}),(0,r.jsx)("div",{style:{display:u.enabled?"block":"none"},children:(0,r.jsx)(p.nv,{...m.mv.goLiveMessage,required:!0,type:p.Sk,value:u.goLiveMessage,onChange:C})}),(0,r.jsx)(c.Z,{type:"primary",style:{display:Z?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},onClick:E,children:"Save"}),(0,r.jsx)(h.E,{status:v})]})},{Title:j}=a.Z,w=()=>{let e=(0,l.useContext)(f.aC),{serverConfig:n}=e||{},{federation:t}=n||{},{enabled:a}=t||{},[i,o]=(0,l.useState)({});return(0,l.useEffect)(()=>{o({enabled:a})},[a]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{children:"Fediverse Social"}),(0,r.jsx)("p",{className:"description",children:"Enabling the Fediverse social features will not just alert people to when you go live, but also enable other functionality."}),(0,r.jsxs)("p",{children:["Fediverse social features:"," ",(0,r.jsx)("span",{style:{color:t.enabled?"green":"red"},children:i.enabled?"Enabled":"Disabled"})]}),(0,r.jsx)(d(),{passHref:!0,href:"/config-federation",children:(0,r.jsx)(c.Z,{type:"primary",style:{position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Configure"})})]})};var C=t(46551),k=t(37174),N=t(6960);let{Title:E}=a.Z;function O(){let[e,n]=(0,l.useState)(null),t=(0,l.useContext)(f.aC),{serverConfig:a}=t||{},{yp:u}=a,{instanceUrl:p}=u,[h,x]=(0,l.useState)(!1);(0,l.useEffect)(()=>{n({instanceUrl:p})},[u]);let g=()=>{h&&n({...e,enabled:!1})},v=t=>{let{fieldName:r,value:a}=t;x((0,k.jv)(a)),n({...e,[r]:a})},b=""!==p,j=!b&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(C.$7,{fieldName:"instanceUrl",...m.yi,value:(null==e?void 0:e.instanceUrl)||"",initialValue:u.instanceUrl,type:C.xA,onChange:v,onSubmit:g,required:!0})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E,{children:"Notifications"}),(0,r.jsxs)("p",{className:"description",children:["Let your viewers know when you go live by supporting any of the below notification channels."," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/notifications/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more about live notifications."})]}),j,(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(s.Z,{span:10,className:"form-module ".concat(b?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,r.jsx)(Z,{})}),(0,r.jsx)(s.Z,{span:10,className:"form-module ".concat(b?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,r.jsx)(y,{})}),(0,r.jsx)(s.Z,{span:10,className:"form-module ".concat(b?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,r.jsx)(w,{})}),(0,r.jsxs)(s.Z,{span:10,className:"form-module ".concat(b?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:[(0,r.jsx)(E,{children:"Custom"}),(0,r.jsx)("p",{className:"description",children:"Build your own notifications by using custom webhooks."}),(0,r.jsx)(d(),{passHref:!0,href:"/admin/webhooks",children:(0,r.jsx)(c.Z,{type:"primary",style:{position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Create"})})]})]})]})}O.getLayout=function(e){return(0,r.jsx)(N.l,{page:e})}},9008:function(e,n,t){e.exports=t(83121)},11163:function(e,n,t){e.exports=t(80880)},92703:function(e,n,t){"use strict";var r=t(50414);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,i,o){if(o!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},45697:function(e,n,t){e.exports=t(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[173,164,2138,31,4931,5402,2231,492,5818,7524,9915,180,6960,9774,2888,179],function(){return e(e.s=7148)}),_N_E=e.O()}]);
//# sourceMappingURL=config-notify-3a47450ea3e88150.js.map