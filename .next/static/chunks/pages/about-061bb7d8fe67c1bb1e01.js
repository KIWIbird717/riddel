(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2122:function(e,r,t){"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,{Z:function(){return n}})},7375:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(r,{Z:function(){return n}})},9646:function(e,r,t){"use strict";t.d(r,{r:function(){return l}});var n=t(6156),o=t(5893),c=t(7375),i=t(8249),a=t.n(i);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(e){var r=e.className,t=e.centerX,n=e.centerY,i=e.column,u=e.reverse,l=e.between,f=e.around,d=e.children,p=e.onStart,v=e.onEnd,b=e.autoX,O=e.wrap,h=(0,c.Z)(e,["className","centerX","centerY","column","reverse","between","around","children","onStart","onEnd","autoX","wrap"]);return(0,o.jsx)("div",s(s({className:"\n      ".concat(a().grid,"\n      ").concat(t?a().centerX:"","\n      ").concat(n?a().centerY:"","\n      ").concat(b?a().widthAuto:a().widthFull,"\n      ").concat(i?a().column:"","\n      ").concat(u?a().columnReverse:"","\n      ").concat(l?a().between:"","\n      ").concat(f?a().around:"","\n      ").concat(p?a().start:"","\n      ").concat(v?a().end:"","\n      ").concat(O?a().wrap:"","\n      ").concat(r,"\n      ").replace(/\s\s+/g," ")},h),{},{children:d}))}},1085:function(e,r,t){"use strict";t.d(r,{v:function(){return d}});var n=t(6156),o=t(5893),c=t(7375),i=t(9477),a=t.n(i),u=t(9646);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f=[{name:"About",route:"about"},{name:"Collection",route:"collection"},{name:"Roadmap",route:"roadmap"},{name:"Team",route:"team"},{name:"Faq",route:"faq"},{name1:"Whitepaper",href:""}],d=function(e){var r=e.column,t=(0,c.Z)(e,["column"]);return(0,o.jsx)(u.r,l(l({className:a().menu,column:r,centerX:!0,centerY:!0},t),{},{children:f.map((function(e){var r=e.name,t=e.name1,n=e.href,c=e.route;return(0,o.jsxs)("div",{className:a().link,onClick:function(){return function(e){var r=document.getElementById("".concat(e));r&&window.scrollTo({top:r.offsetTop+3*window.innerHeight+550,behavior:"smooth"})}(c)},children:[(0,o.jsx)("div",{children:r}),(0,o.jsx)("a",{href:n,target:"_blank",style:{textDecoration:"none"},children:(0,o.jsx)("div",{children:t})})]},r||t)}))}))}},5188:function(e,r,t){"use strict";t.d(r,{I:function(){return p}});var n=t(6156),o=t(5893),c=t(2122),i=t(1241),a=t.n(i),u=t(9646),s=t(7294);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=[{icon:"socials/instagram.svg",href:"",name:"instagram"},{icon:"socials/twitter.svg",href:"",name:"twitter"},{icon:"socials/discord.svg",href:"",name:"dicord"}],p=function(e){var r=(0,c.Z)({},e),t=(0,s.useState)(!1),n=(t[0],t[1]),i=(0,s.useState)();i[0],i[1];return(0,s.useEffect)((function(){console.log("mounted"),n(!0)}),[]),(0,o.jsx)(u.r,f(f({},r),{},{children:d.map((function(e){var r=e.icon,t=e.href,n=e.name;return(0,o.jsx)("a",{href:t,target:"_blank",children:(0,o.jsx)("img",{className:a().socials,src:r,alt:n},n)},n)}))}))}},8880:function(e,r,t){"use strict";var n=t(7294);r.Z=function(){var e=(0,n.useState)(!1),r=e[0],t=e[1],o=function(){t(window.innerWidth<960)};return(0,n.useEffect)((function(){return o(),window.addEventListener("resize",(function(){o()})),function(){window.removeEventListener("resize",o)}}),[]),(0,n.useEffect)((function(){}),[r]),r}},7647:function(e,r,t){"use strict";t.d(r,{X:function(){return y}});var n=t(6156),o=t(5893),c=t(2122),i=t(9646),a=t(1085),u=t(5705),s=t.n(u),l=t(1664),f=t(8880),d=t(5188);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var b=function(e){var r=(0,c.Z)({},e),t=(0,f.Z)();return(0,o.jsx)("div",v(v({id:"header",className:"".concat(s().header," noSelect")},r),{},{children:(0,o.jsxs)(i.r,{between:!0,children:[(0,o.jsx)(l.default,{href:"/",children:(0,o.jsx)("div",{className:s().logo,children:(0,o.jsx)("img",{src:"logo.png",alt:"logo"})})}),t?void 0:(0,o.jsx)(a.v,{}),t?(0,o.jsx)("div",{style:{},children:(0,o.jsx)(d.I,{})}):(0,o.jsx)("div",{className:"socialsheader",children:(0,o.jsx)(d.I,{})})]})}))};function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j=function(e){var r=e.children;return(0,o.jsxs)(i.r,{column:!0,children:[(0,o.jsx)(b,{style:{position:"fixed"}}),(0,o.jsx)(i.r,{children:r})]})},y=function(e){return function(r){return(0,o.jsx)(j,{children:(0,o.jsx)(e,h({},r))})}}},6071:function(e,r,t){"use strict";var n=t(3038),o=t(862);r.default=void 0;var c=o(t(7294)),i=t(1689),a=t(2441),u=t(5749),s={};function l(e,r,t,n){if(e&&(0,i.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var r=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.asPath||"/",f=c.default.useMemo((function(){var r=(0,i.resolveHref)(o,e.href,!0),t=n(r,2),c=t[0],a=t[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,b=e.replace,O=e.shallow,h=e.scroll,j=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var y=c.Children.only(v),m=y&&"object"===typeof y&&y.ref,g=(0,u.useIntersection)({rootMargin:"200px"}),_=n(g,2),w=_[0],P=_[1],x=c.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);(0,c.useEffect)((function(){var e=P&&r&&(0,i.isLocalURL)(d),n="undefined"!==typeof j?j:t&&t.locale,o=s[d+"%"+p+(n?"%"+n:"")];e&&!o&&l(t,d,p,{locale:n})}),[p,d,P,j,r,t]);var E={ref:x,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,c,a,u){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),r[o?"replace":"push"](t,n,{shallow:c,locale:u,scroll:a}))}(e,t,d,p,b,O,h,j)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var D="undefined"!==typeof j?j:t&&t.locale,k=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(p,D,t&&t.locales,t&&t.domainLocales);E.href=k||(0,i.addBasePath)((0,i.addLocale)(p,D,t&&t.defaultLocale))}return c.default.cloneElement(y,E)};r.default=f},5749:function(e,r,t){"use strict";var n=t(3038);r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=n(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=a.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return a.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,c=n.observer,i=n.elements;return i.set(e,r),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t(7294),c=t(8391),i="undefined"!==typeof IntersectionObserver;var a=new Map},5681:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(7647),c=t(9646);r.default=(0,o.X)((function(){return(0,n.jsx)(c.r,{children:(0,n.jsx)(c.r,{column:!0,centerX:!0,centerY:!0,children:"Hello"})})}))},4613:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(5681)}])},8249:function(e){e.exports={grid:"Grid_grid__3MtPr",column:"Grid_column__3NdJN",columnReverse:"Grid_columnReverse__2T0ks",centerX:"Grid_centerX___HM46",widthAuto:"Grid_widthAuto__Fdh54",widthFull:"Grid_widthFull__5DU3n",centerY:"Grid_centerY__1h8xq",between:"Grid_between__iRNmS",around:"Grid_around__2pqhu",start:"Grid_start__3jmcj",end:"Grid_end__1jPF0",wrap:"Grid_wrap__5Hdrb"}},9477:function(e){e.exports={link:"Menu_link__3asKp",menuFooter:"Menu_menuFooter__12TQP",a:"Menu_a__1SZ6v"}},1241:function(e){e.exports={socials:"Socials_socials__MW5Pi"}},5705:function(e){e.exports={header:"Header_header__C9Hvv",logo:"Header_logo__jfQ4x",menu:"Header_menu__1AEZv"}},1664:function(e,r,t){e.exports=t(6071)}},function(e){e.O(0,[774,888,179],(function(){return r=4613,e(e.s=r);var r}));var r=e.O();_N_E=r}]);