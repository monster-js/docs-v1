(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(2),o=(t(0),t(94));const a={id:"event-handling.md",title:"Event handling",sidebar_label:"Event handling",slug:"/event-handling"},c={unversionedId:"event-handling.md",id:"event-handling.md",isDocsHomePage:!1,title:"Event handling",description:"Event handling is a directive lets the component to respond to user action on the UI like button clicks, text inputs, drag elements and other actions.",source:"@site/docs\\event-handling.md",slug:"/event-handling",permalink:"/docs-v1/docs/event-handling",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/event-handling.md",version:"current",sidebar_label:"Event handling",sidebar:"someSidebar",previous:{title:"Module",permalink:"/docs-v1/docs/module"},next:{title:"Data binding",permalink:"/docs-v1/docs/data-binding"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Method parameters",id:"method-parameters",children:[]},{value:"Event variable",id:"event-variable",children:[]}],l={rightToc:i};function s({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Event handling is a directive lets the component to respond to user action on the UI like button clicks, text inputs, drag elements and other actions.\nIt uses a directive with namespace of ",Object(o.b)("inlineCode",{parentName:"p"},"on")," to bind the component methods to an element as an event listener."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"The syntax of event handling directive is ",Object(o.b)("inlineCode",{parentName:"p"},"on:<event_name>={<component_method>}"),".\nThe component_method must be a function and not a function call expression."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n    clickMe() {\n        console.log('Hello World!');\n    }\n\n    render() {\n        return <button on:click={this.clickMe}>Greet</button>\n    }\n}\n")),Object(o.b)("h2",{id:"method-parameters"},"Method parameters"),Object(o.b)("p",null,"Since event handling directive accepts a function as directive value.\nWe need to pass an unnamed function or fat arrow function and return the call expression of the component method in order for us to be able to pass some parameters to it."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n    clickMe(name: string) {\n        console.log(`Hello ${name}!`);\n    }\n\n    render() {\n        return <button on:click={() => this.clickMe('Johnny')}>Greet</button>\n    }\n}\n")),Object(o.b)("h2",{id:"event-variable"},"Event variable"),Object(o.b)("p",null,"We can also get the event variable that holds the data of the event."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n    clickMe(event) {\n        console.log(event);\n    }\n\n    render() {\n        return <button on:click={(event) => this.clickMe(event)}>Greet</button>\n    }\n}\n")),Object(o.b)("p",null,"or just simply"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n    clickMe(event) {\n        console.log(event);\n    }\n\n    render() {\n        return <button on:click={this.clickMe}>Greet</button>\n    }\n}\n")))}s.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return t?o.a.createElement(m,i(i({ref:n},s),{},{components:t})):o.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);