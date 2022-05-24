(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return i}));var n=r(2),o=(r(0),r(95));const p={id:"props.md",title:"Props",sidebar_label:"Props",slug:"/props"},a={unversionedId:"props.md",id:"props.md",isDocsHomePage:!1,title:"Props",description:"Props is a directive that allows developers to pass any type of data from parent to child.",source:"@site/docs\\props.md",slug:"/props",permalink:"/docs/props",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/props.md",version:"current",sidebar_label:"Props",sidebar:"someSidebar",previous:{title:"Change detection",permalink:"/docs/change-detection"},next:{title:"Observed attributes",permalink:"/docs/observed-attributes"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Pass props from parent to child",id:"pass-props-from-parent-to-child",children:[]},{value:"Get props",id:"get-props",children:[]},{value:"On props change event",id:"on-props-change-event",children:[]}],c={rightToc:s};function i({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Props is a directive that allows developers to pass any type of data from parent to child.\nIt is more advance than ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./observed-attributes"}),"observed attributes")," since attributes can only pass string, number or boolean to child component."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"Props directives are namespaced with ",Object(o.b)("inlineCode",{parentName:"p"},"prop")," followed by the property name. The syntax of props is written as ",Object(o.b)("inlineCode",{parentName:"p"},"prop:<name>=<data>"),"."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'prop:message="Hello World!"\n')),Object(o.b)("h2",{id:"pass-props-from-parent-to-child"},"Pass props from parent to child"),Object(o.b)("p",null,"Here's an example on how to pass properties to child component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\n\n@Component('app-parent')\nexport class Parent {\n    date = new Date();\n    user = { ... };\n    posts = [ ... ];\n\n    render() {\n        return <app-child\n            prop:date={this.date}\n            prop:user={this.user}\n            prop:posts={this.posts}\n        ></app-child>\n    }\n}\n")),Object(o.b)("h2",{id:"get-props"},"Get props"),Object(o.b)("p",null,"To get the props, we need to inject the ",Object(o.b)("inlineCode",{parentName:"p"},"PropsService")," provided by the core package to our child component."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, PropsService } from '@monster-js/core';\n\n@Services(PropsService)\n@Component('app-child')\nexport class Child {\n    constructor(private propsService: PropsService) {}\n\n    onInit() {\n        const props = this.propsService.get();\n        const date = this.propsService.get('date');\n        console.log(props, date);\n    }\n\n    render() {\n        return <h1>Child component</h1>\n    }\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"get")," method of PropsService will return a value of a property if we pass the property name and it will return the whole props object if no property name is passed to the method."),Object(o.b)("h2",{id:"on-props-change-event"},"On props change event"),Object(o.b)("p",null,"We can watch for props changes using the ",Object(o.b)("inlineCode",{parentName:"p"},"onPropsChange")," hook.\nThis hook will trigger once there is a changes in any of the props on the parent component side."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, PropsService } from '@monster-js/core';\n\n@Services(PropsService)\n@Component('app-child')\nexport class Child {\n\n    constructor(private propsService: PropsService) {}\n\n    onPropsChange() {\n        console.log(this.propsService.get());\n    }\n\n    render() {\n        return <h1>Child component</h1>\n    }\n}\n")))}i.isMDXComponent=!0},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||p;return r?o.a.createElement(m,s(s({ref:t},i),{},{components:r})):o.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var i=2;i<p;i++)a[i]=r[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);