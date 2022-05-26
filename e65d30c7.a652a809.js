(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(95));const i={id:"index.md",title:"What is MonsterJS?",sidebar_label:"What is MonsterJS?",slug:"/"},o={unversionedId:"index.md",id:"index.md",isDocsHomePage:!1,title:"What is MonsterJS?",description:"MonsterJS is a JavaScript framework for building web applications.",source:"@site/docs\\index.mdx",slug:"/",permalink:"/docs/",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/index.mdx",version:"current",sidebar_label:"What is MonsterJS?",sidebar:"someSidebar",next:{title:"Quick start",permalink:"/docs/quick-start"}},c=[{value:"MonsterJS in other frameworks",id:"monsterjs-in-other-frameworks",children:[]},{value:"Features",id:"features",children:[]},{value:"Contact us",id:"contact-us",children:[]},{value:"Support us",id:"support-us",children:[]},{value:"License",id:"license",children:[]}],s={rightToc:c};function l(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"MonsterJS is a JavaScript framework for building web applications.\nIt is based on web components which is good for encapsulating components and building micro frontend apps.\nThis framework is not using virtual DOM, instead it will create a watcher for each binding and update it only when necessary.\nThis feature is what makes it fast and have a good client run-time performance and memory efficient for large applications."),Object(a.b)("p",null,"Official docs ",Object(a.b)("a",{parentName:"p",href:"https://monster-js.org"},"https://monster-js.org")," ."),Object(a.b)("h2",{id:"monsterjs-in-other-frameworks"},"MonsterJS in other frameworks"),Object(a.b)("p",null,"MonsterJS works perfectly in the other frameworks.\nIt's components are all web components so it can easily be integrated to Angular, Vue, React and other javascript frameworks.\nIt can even work on vanilla javascript applications."),Object(a.b)("p",null,"Developing micro frontend and widgets are made easy using this framework."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./data-binding#model-binding"},"Two way data binding")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./component"},"Components")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./module"},"Modules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./event-handling"},"Event handling")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./store"},"State Management")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./router"},"Router")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./directives"},"Directives")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./cli-what-is-cli"},"Cli"))),Object(a.b)("h2",{id:"contact-us"},"Contact us"),Object(a.b)("p",null,"You can contact the team by sending us an email to ",Object(a.b)("a",{parentName:"p",href:"mailto:mfpjayb@gmail.com"},"mfpjayb@gmail.com"),"."),Object(a.b)("h2",{id:"support-us"},"Support us"),Object(a.b)("p",null,"MonsterJS is licensed with an MIT license and it is completely free to use software.\nHowever, maintaining the code and develop new features requires some financial backing.\nYou can support the development of MonsterJS by following this ",Object(a.b)("a",{parentName:"p",href:"/#support-us-section"},"link")),Object(a.b)("h2",{id:"license"},"License"),Object(a.b)("p",null,"Licensed under the ",Object(a.b)("a",{parentName:"p",href:"./license"},"MIT License"),"."),Object(a.b)("p",null,"Copyright (c) 2022 Darius Bualan Jr."))}l.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);