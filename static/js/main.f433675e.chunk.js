(this["webpackJsonpbenjaminombeni.com"]=this["webpackJsonpbenjaminombeni.com"]||[]).push([[0],{15:function(e,n,t){},21:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c,i=t(2),s=t(1),a=t.n(s),r=t(23),o=t.n(r),l=t(10),j=(t(21),t(15),t(17));!function(e){e.LIGHT="light",e.DARK="dark"}(c||(c={}));var m=function(e){localStorage.setItem("theme",e)},b=function(){var e=localStorage.getItem("theme");return null===e?c.DARK:e},h=function(e,n){e===c.DARK?(n(c.LIGHT),m(c.LIGHT)):(n(c.DARK),m(c.DARK))};var d=function(e){var n=e.theme,t=e.setTheme;return n===c.LIGHT?Object(i.jsx)(j.a,{className:"pointer moon",onClick:function(){return h(n,t)}}):Object(i.jsx)(j.b,{className:"pointer sun",onClick:function(){return h(n,t)}})},u={initials:{name:"BO",link:t.p+"static/media/profile.bc7d6ff5.png"},home:{name:"Home",link:"/"},work:{name:"Work",link:"/work"},interests:{name:"Interests",link:"/interests"},resume:{name:"Resume",link:""}},x=t(12);var O=function(e){var n=e.name,t=e.link,c=e.animation;return Object(i.jsx)(x.b,{to:t,onClick:function(){return c()},children:Object(i.jsx)("div",{className:"nav-item",children:Object(i.jsx)("div",{className:"pointer bottom-border-onhover",children:n})})})},f=t(25),v="navigation-bar-expanded",p="navigation-bar-shrunk",k="hide-side-nav";var N=function(e){var n,t,c=e.theme,a=e.setTheme,r=Object(s.useState)(v),o=Object(l.a)(r,2),j=o[0],m=o[1],b=Object(s.useState)(k),h=Object(l.a)(b,2),x=h[0],N=h[1],w=function(){j!==p&&m(p)},g=function(){j!==v&&m(v)};return Object(i.jsxs)("div",{className:"".concat(j),children:[Object(i.jsxs)("div",{children:[j===v&&(t=u.initials.link,Object(i.jsx)("img",{className:"portrait",src:t,alt:"Benjamin's Portrait"})),j===p&&(n=u.initials.name,Object(i.jsx)("h2",{children:n}))]}),Object(i.jsxs)("div",{className:"flex-space-between",children:[Object(i.jsx)(f.a,{className:"humberger pointer",onClick:function(){N(x===k?"show-side-nav":k)}}),Object(i.jsxs)("div",{className:"nav-items ".concat(x),children:[Object(i.jsx)(O,{name:u.home.name,link:u.home.link,animation:g}),Object(i.jsx)(O,{name:u.work.name,link:u.work.link,animation:w}),Object(i.jsx)(O,{name:u.interests.name,link:u.interests.link,animation:w}),Object(i.jsx)(O,{name:u.resume.name,link:u.resume.link,animation:g})]}),Object(i.jsx)("div",{className:"theme-toggler",children:Object(i.jsx)(d,{theme:c,setTheme:a})})]})]})},w=t(20);var g=function(){return Object(i.jsxs)("div",{className:"home-wrapper",children:[Object(i.jsx)("div",{className:"home-about-wrapper flex-center flex-1",children:Object(i.jsxs)("div",{className:"home-about",children:[Object(i.jsx)("h1",{children:"Benjamin Ombeni"}),Object(i.jsx)("h3",{children:"Software Enginering Student"}),Object(i.jsxs)("h3",{children:[Object(i.jsx)("a",{className:"bottom-border-onhover",href:"https://www.csusm.edu/",children:"CSUSM"})," 2022"]}),Object(i.jsx)("br",{}),Object(i.jsx)(w.SocialIcon,{url:"https://www.linkedin.com/in/benmob/",fgColor:"#ffffff",className:"media-icon"}),Object(i.jsx)(w.SocialIcon,{url:"https://github.com/BenMob",bgColor:"#000000",fgColor:"#ffffff",className:"media-icon"})]})}),Object(i.jsxs)("div",{className:"flex-center flex-1",children:[Object(i.jsx)("small",{children:"My Projects - "}),Object(i.jsx)("div",{className:"laptop pointer",children:"\ud83d\udcbb"})]})]})};var S=function(){return Object(i.jsx)("div",{className:"section-wrapper flex-center",children:Object(i.jsx)("h1",{children:"Work"})})};var I=function(){return Object(i.jsx)("div",{className:"section-wrapper flex-center",children:Object(i.jsx)("h1",{children:"Interests"})})},C=t(3);var T=function(){var e=Object(s.useState)(b),n=Object(l.a)(e,2),t=n[0],c=n[1];return Object(i.jsx)(x.a,{children:Object(i.jsxs)("div",{className:"main-container ".concat(t," globals"),children:[Object(i.jsx)(N,{theme:t,setTheme:c}),Object(i.jsxs)(C.c,{children:[Object(i.jsx)(C.a,{path:"/",component:g,exact:!0}),Object(i.jsx)(C.a,{path:"/work",component:S}),Object(i.jsx)(C.a,{path:"/interests",component:I})]})]})})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f433675e.chunk.js.map