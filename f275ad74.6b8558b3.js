(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return c}));var r=t(2),p=(t(0),t(95));const a={id:"available-pipes.md",title:"Available pipes",sidebar_label:"Available pipes",slug:"/available-pipes"},o={unversionedId:"available-pipes.md",id:"available-pipes.md",isDocsHomePage:!1,title:"Available pipes",description:"MonsterJS provides a set of pipes.",source:"@site/docs\\available-pipes.md",slug:"/available-pipes",permalink:"/docs/available-pipes",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/available-pipes.md",version:"current",sidebar_label:"Available pipes",sidebar:"someSidebar",previous:{title:"Http",permalink:"/docs/http"},next:{title:"Bind decorator",permalink:"/docs/bind-decorator"}},i=[{value:"LowercasePipe",id:"lowercasepipe",children:[]},{value:"UppercasePipe",id:"uppercasepipe",children:[]}],s={rightToc:i};function c({components:e,...n}){return Object(p.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(p.b)("p",null,"MonsterJS provides a set of pipes.\nThese pipes are not available in components by default so we still need to register these pipes in our module or component.\nPlease check the ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"./pipes"}),"pipes")," documentation for more information about pipes."),Object(p.b)("h2",{id:"lowercasepipe"},"LowercasePipe"),Object(p.b)("p",null,"This pipe is used to transform string to lowercase."),Object(p.b)("p",null,"Ex."),Object(p.b)("h4",{id:"in-template"},"In template"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes, LowercasePipe } from '@monster-js/core';\n\n@Pipes(LowercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>{ 'Hello World' | lowercase }</h1>\n    }\n}\n")),Object(p.b)("h4",{id:"in-logic"},"In logic"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes, LowercasePipe } from '@monster-js/core';\n\n@Pipes(LowercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n    message = 'Hello World!';\n\n    constructor(private lowercasePipe: LowercasePipe) {}\n\n    onInit() {\n        this.message = this.lowercasePipe.transform(this.message);\n    }\n\n    render() {\n        return <h1>{this.message}</h1>\n    }\n}\n")),Object(p.b)("h2",{id:"uppercasepipe"},"UppercasePipe"),Object(p.b)("p",null,"This pipe is used to transform string to uppercase."),Object(p.b)("p",null,"Ex."),Object(p.b)("h4",{id:"in-template-1"},"In template"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes, UppercasePipe } from '@monster-js/core';\n\n@Pipes(UppercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>{ 'Hello World' | uppercase }</h1>\n    }\n}\n")),Object(p.b)("h4",{id:"in-logic-1"},"In logic"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes, UppercasePipe } from '@monster-js/core';\n\n@Pipes(UppercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n    message = 'Hello World!';\n\n    constructor(private uppercasePipe: UppercasePipe) {}\n\n    onInit() {\n        this.message = this.uppercasePipe.transform(this.message);\n    }\n\n    render() {\n        return <h1>{this.message}</h1>\n    }\n}\n")))}c.isMDXComponent=!0},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),p=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var c=p.a.createContext({}),l=function(e){var n=p.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return p.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return p.a.createElement(p.a.Fragment,{},n)}},m=p.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return t?p.a.createElement(d,i(i({ref:n},c),{},{components:t})):p.a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);