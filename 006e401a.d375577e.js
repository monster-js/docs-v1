(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(2),r=(n(0),n(95));const i={id:"pipes.md",title:"Pipes",sidebar_label:"Pipes",slug:"/pipes"},p={unversionedId:"pipes.md",id:"pipes.md",isDocsHomePage:!1,title:"Pipes",description:"Pipes are used to transform a string, object, number and other values for display.",source:"@site/docs\\pipes.md",slug:"/pipes",permalink:"/docs-v1/docs/pipes",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/pipes.md",version:"current",sidebar_label:"Pipes",sidebar:"someSidebar",previous:{title:"Custom Directive",permalink:"/docs-v1/docs/custom-directive"},next:{title:"Custom pipes",permalink:"/docs-v1/docs/custom-pipes"}},o=[{value:"Register pipe",id:"register-pipe",children:[]},{value:"Template pipes",id:"template-pipes",children:[]},{value:"Logic pipes",id:"logic-pipes",children:[]},{value:"Available pipes",id:"available-pipes",children:[]},{value:"Pipe with parameters",id:"pipe-with-parameters",children:[]}],c={rightToc:o};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Pipes are used to transform a string, object, number and other values for display.\nThey are very useful because it can be used directly in template or logic in all of our components."),Object(r.b)("h2",{id:"register-pipe"},"Register pipe"),Object(r.b)("p",null,"Unlike directives, pipes provided by the core package are not automatically available in all components by default.\nWe need to register them to component or module before we can use it."),Object(r.b)("p",null,"Here are the examples on how to register a pipe in component and in module."),Object(r.b)("h4",{id:"in-component"},"In component"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Pipes, LowercasePipe } from '@monster-js/core';\n\n@Pipes(LowercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>{ 'Hello World!' | lowercase }</h1>\n    }\n}\n")),Object(r.b)("h4",{id:"in-module"},"In Module"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { LowercasePipe } from '@monster-js/core';\nimport { Module, BaseModule } from '@monster-js/module';\n\n@Module({\n    pipes: [LowercasePipe]\n})\nexport class GreetingModule extends BaseModule { }\n")),Object(r.b)("h2",{id:"template-pipes"},"Template pipes"),Object(r.b)("p",null,"In the template, we can use the pipes inside jsx expression container ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),".\nThe syntax is ",Object(r.b)("inlineCode",{parentName:"p"},"{ <value> | <pipe selector> }"),"."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"<label>{ 'Hello World' | lowercase }</label>\n")),Object(r.b)("p",null,"In the example above, the ",Object(r.b)("inlineCode",{parentName:"p"},"lowercase")," is the pipe."),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Template pipes may throw a typescript type checking error since the pipe operator is originally an arithmetic operator that accepts any, number and bigint values.\nA temporary fix for this is to set our values to type any.\nThis error will be addressed in later releases."))),Object(r.b)("p",null,"Template pipes can also be chained to another pipe."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"<label>{ 'Hello World 123' | lowercase | removeNumeric }</label>\n")),Object(r.b)("p",null,"In the example above, the ",Object(r.b)("inlineCode",{parentName:"p"},"lowercase")," pipe will run first and the ",Object(r.b)("inlineCode",{parentName:"p"},"removeNumeric")," pipe will run after the lowercase pipe."),Object(r.b)("h2",{id:"logic-pipes"},"Logic pipes"),Object(r.b)("p",null,"To use the pipe in our component's logic, we need to inject the pipe in the constructor.\nAfter injecting the pipe, we can now call the ",Object(r.b)("inlineCode",{parentName:"p"},"transform(value: any, ...params?: any[])")," method of the pipe to transform values."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes } from '@monster-js/core';\nimport { LowercasePipe } from './lowercase.pipe';\n\n@Pipes(LowercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n\n    message = 'Hello World!';\n\n    constructor(private lowercasePipe: LowercasePipe) {}\n\n    onInit() {\n        this.message = this.lowercasePipe.transform(this.message);\n    }\n\n    render() {\n        return <h1>{this.message}</h1>\n    }\n}\n")),Object(r.b)("h2",{id:"available-pipes"},"Available pipes"),Object(r.b)("p",null,"Here are some usable pipes included in the core package."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Pipe"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"./available-pipes#lowercasepipe"}),"UppercasePipe")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Transform string into uppercase.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"./available-pipes#uppercasepipe"}),"LowercasePipe")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Transform string into lowercase.")))),Object(r.b)("h2",{id:"pipe-with-parameters"},"Pipe with parameters"),Object(r.b)("p",null,"Pipes can also have one or more parameters to be used during transformation."),Object(r.b)("h4",{id:"in-template"},"In template"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"<label>{this.date | date('YYYY-MM-DD', 'Invalid date')}</label>\n")),Object(r.b)("h4",{id:"in-logic"},"In logic"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes } from '@monster-js/core';\nimport { DatePipe } from './date.pipe';\n\n@Pipes(DatePipe)\n@Component('app-greeting')\nexport class DateComponent {\n\n    date = new Date();\n\n    constructor(private datePipe: DatePipe) {}\n\n    onInit() {\n        this.date = this.datePipe.transform(this.date, 'YYYY-MM-DD', 'Invalid date');\n    }\n\n    render() {\n        return <h1>{this.date}</h1>\n    }\n}\n")))}l.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,u=b["".concat(p,".").concat(d)]||b[d]||m[d]||i;return n?r.a.createElement(u,o(o({ref:t},l),{},{components:n})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);