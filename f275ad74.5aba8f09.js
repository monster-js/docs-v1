(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return c}));var r=t(2),p=(t(0),t(96));const a={id:"available-pipes.md",title:"Available pipes",sidebar_label:"Available pipes",slug:"/available-pipes"},i={unversionedId:"available-pipes.md",id:"available-pipes.md",isDocsHomePage:!1,title:"Available pipes",description:"MunsterJS provides a set of pipes.",source:"@site/docs\\available-pipes.md",slug:"/available-pipes",permalink:"/docs/docs/available-pipes",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/available-pipes.md",version:"current",sidebar_label:"Available pipes",sidebar:"someSidebar",previous:{title:"Http",permalink:"/docs/docs/http"},next:{title:"Bind decorator",permalink:"/docs/docs/bind-decorator"}},o=[{value:"LowercasePipe",id:"lowercasepipe",children:[]},{value:"UppercasePipe",id:"uppercasepipe",children:[]}],s={rightToc:o};function c({components:e,...n}){return Object(p.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(p.b)("p",null,"MunsterJS provides a set of pipes.\nThese pipes are not available in components by default so we still need to register these pipes in our module or component.\nPlease check the ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"./pipes"}),"pipes")," documentation for more information about pipes."),Object(p.b)("h2",{id:"lowercasepipe"},"LowercasePipe"),Object(p.b)("p",null,"This pipe is used to transform string to lowercase."),Object(p.b)("p",null,"Ex."),Object(p.b)("h4",{id:"in-template"},"In template"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes, LowercasePipe } from '@munster-dev/core';\n\n@Pipes(LowercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>{ 'Hello World' | lowercase }</h1>\n    }\n}\n")),Object(p.b)("h4",{id:"in-logic"},"In logic"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes, LowercasePipe } from '@munster-dev/core';\n\n@Pipes(LowercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n    message = 'Hello World!';\n\n    constructor(private lowercasePipe: LowercasePipe) {}\n\n    onInit() {\n        this.message = this.lowercasePipe.transform(this.message);\n    }\n\n    render() {\n        return <h1>{this.message}</h1>\n    }\n}\n")),Object(p.b)("h2",{id:"uppercasepipe"},"UppercasePipe"),Object(p.b)("p",null,"This pipe is used to transform string to uppercase."),Object(p.b)("p",null,"Ex."),Object(p.b)("h4",{id:"in-template-1"},"In template"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes, UppercasePipe } from '@munster-dev/core';\n\n@Pipes(UppercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>{ 'Hello World' | uppercase }</h1>\n    }\n}\n")),Object(p.b)("h4",{id:"in-logic-1"},"In logic"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes, UppercasePipe } from '@munster-dev/core';\n\n@Pipes(UppercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n    message = 'Hello World!';\n\n    constructor(private uppercasePipe: UppercasePipe) {}\n\n    onInit() {\n        this.message = this.uppercasePipe.transform(this.message);\n    }\n\n    render() {\n        return <h1>{this.message}</h1>\n    }\n}\n")))}c.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),p=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var c=p.a.createContext({}),l=function(e){var n=p.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return p.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return p.a.createElement(p.a.Fragment,{},n)}},m=p.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return t?p.a.createElement(d,o(o({ref:n},c),{},{components:t})):p.a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return p.a.createElement.apply(null,i)}return p.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);