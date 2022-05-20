(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var r=n(2),a=(n(0),n(94));const p={id:"pipes.md",title:"Pipes",sidebar_label:"Pipes",slug:"/pipes"},i={unversionedId:"pipes.md",id:"pipes.md",isDocsHomePage:!1,title:"Pipes",description:"Pipes are used to transform a string, object, number and other values for display.",source:"@site/docs\\pipes.md",slug:"/pipes",permalink:"/docs-v1/docs/pipes",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/pipes.md",version:"current",sidebar_label:"Pipes",sidebar:"someSidebar",previous:{title:"Custom Directive",permalink:"/docs-v1/docs/custom-directive"},next:{title:"Custom pipes",permalink:"/docs-v1/docs/custom-pipes"}},o=[{value:"Register pipe",id:"register-pipe",children:[]},{value:"Template pipes",id:"template-pipes",children:[]},{value:"Logic pipes",id:"logic-pipes",children:[]},{value:"Available pipes",id:"available-pipes",children:[]},{value:"Pipe with parameters",id:"pipe-with-parameters",children:[]}],l={rightToc:o};function c({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Pipes are used to transform a string, object, number and other values for display.\nThey are very useful because then an be used directly in the template or in logic in all of our components."),Object(a.b)("h2",{id:"register-pipe"},"Register pipe"),Object(a.b)("p",null,"Unlike directives, pipes provided by the core package are not automatically available in all components by default.\nWe need to register them to component or module before we can use it."),Object(a.b)("p",null,"Here are the examples on how to register a pipe in component and in module."),Object(a.b)("h4",{id:"in-component"},"In component"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Pipes, DatePipe } from '@monster-js/core';\n\n@Pipes(DatePipe)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>{ new Date() | date('YYYY-MM-DD') }</h1>\n    }\n}\n")),Object(a.b)("h4",{id:"in-module"},"In Module"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { DatePipe } from '@monster-js/core';\nimport { Module, BaseModule } from '@monster-js/module';\n\n@Module({\n    pipes: [DatePipe]\n})\nexport class GreetingModule extends BaseModule { }\n")),Object(a.b)("h2",{id:"template-pipes"},"Template pipes"),Object(a.b)("p",null,"In the view, we can use the pipes inside jsx expression container ",Object(a.b)("inlineCode",{parentName:"p"},"{}"),".\nThe syntax is ",Object(a.b)("inlineCode",{parentName:"p"},"{ <value> | <pipe selector> }"),"."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"<label>{ 'Hello World' | lowercase }</label>\n")),Object(a.b)("p",null,"In the example above, the ",Object(a.b)("inlineCode",{parentName:"p"},"lowercase")," is the pipe."),Object(a.b)("p",null,":::node\nTemplate pipes may throw a typescript type checking error since the pipe operator is originally an arithmetic operator that accepts any, number and bigint values.\nA temporary fix for this is to set our values to type any.\nThis error will be addressed in later releases.\n:::"),Object(a.b)("p",null,"Template pipes can also be chained to another pipe."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"<label>{ 'Hello World 123' | lowercase | removeNumeric }</label>\n")),Object(a.b)("p",null,"In the example above, the ",Object(a.b)("inlineCode",{parentName:"p"},"lowercase")," pipe will run first and the ",Object(a.b)("inlineCode",{parentName:"p"},"removeNumeric")," pipe will run after the lowercase pipe."),Object(a.b)("h2",{id:"logic-pipes"},"Logic pipes"),Object(a.b)("p",null,"To use the pipe in our component's logic, we need to inject the pipe in the constructor.\nAfter injecting the pipe, we can now call the ",Object(a.b)("inlineCode",{parentName:"p"},"transform(value: any, ...params?: any[])")," method of the pipe to transform values."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes } from '@monster-js/core';\nimport { LowercasePipe } from './lowercase.pipe';\n\n@Pipes(LowercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n\n    message = 'Hello World!';\n\n    constructor(private lowercasePipe: LowercasePipe) {}\n\n    onInit() {\n        this.message = this.lowercasePipe.transform(this.message);\n    }\n\n    render() {\n        return <h1>{this.message}</h1>\n    }\n}\n")),Object(a.b)("h2",{id:"available-pipes"},"Available pipes"),Object(a.b)("p",null,"Here are some usable pipes included in the core package."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Pipe"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"./available-pipes#lowercasepipe"}),"UppercasePipe")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Transform string into uppercase.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"./available-pipes#uppercasepipe"}),"LowercasePipe")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Transform string into lowercase.")))),Object(a.b)("h2",{id:"pipe-with-parameters"},"Pipe with parameters"),Object(a.b)("p",null,"Pipes can also have one or more parameters to be used during transformation."),Object(a.b)("h4",{id:"in-template"},"In template"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"<label>{this.date | date('YYYY-MM-DD', 'Invalid date')}</label>\n")),Object(a.b)("h4",{id:"in-logic"},"In logic"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes } from '@monster-js/core';\nimport { DatePipe } from './date.pipe';\n\n@Pipes(DatePipe)\n@Component('app-greeting')\nexport class DateComponent {\n\n    date = new Date();\n\n    constructor(private datePipe: DatePipe) {}\n\n    onInit() {\n        this.date = this.datePipe.transform(this.date, 'YYYY-MM-DD', 'Invalid date');\n    }\n\n    render() {\n        return <h1>{this.date}</h1>\n    }\n}\n")))}c.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||p;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<p;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);