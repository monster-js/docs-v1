(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=(n(0),n(94));const o={id:"observed-attributes.md",title:"Observed attributes",sidebar_label:"Observed attributes",slug:"/observed-attributes"},i={unversionedId:"observed-attributes.md",id:"observed-attributes.md",isDocsHomePage:!1,title:"Observed attributes",description:"Observed attributes are values passed down from parent component to child component and their changes is being observed by the child component.",source:"@site/docs\\observed-attributes.md",slug:"/observed-attributes",permalink:"/docs-v1/docs/observed-attributes",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/observed-attributes.md",version:"current",sidebar_label:"Observed attributes",sidebar:"someSidebar",previous:{title:"Props",permalink:"/docs-v1/docs/props"},next:{title:"Lifecycle hooks",permalink:"/docs-v1/docs/lifecycle-hooks"}},s=[{value:"String attribute",id:"string-attribute",children:[]},{value:"Boolean attribute",id:"boolean-attribute",children:[]},{value:"Number attribute",id:"number-attribute",children:[]},{value:"The attributeChangedCallback hook",id:"the-attributechangedcallback-hook",children:[]}],c={rightToc:s};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Observed attributes are values passed down from parent component to child component and their changes is being observed by the child component.\nThis is different from a normal element attribute.\nThis feature uses the web components observed attributes implementation.\nThe same as web component's observed attributes we cannot pass objects and arrays to it.\nWeb component observed attributes only accepts string values but MonsterJS observed attributes is a little advanced than web component's implementation.\nMonsterJS observed attributes can handle string, number or boolean values."),Object(a.b)("h2",{id:"string-attribute"},"String attribute"),Object(a.b)("p",null,"This type of attribute is the same as the normal web component observed attributes which accepts string as value.\nIt uses the ",Object(a.b)("inlineCode",{parentName:"p"},"@Attr")," decorator to mark the observed attributes in the child module."),Object(a.b)("p",null,"Ex."),Object(a.b)("h4",{id:"child-component"},"Child component"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Attr } from '@monster-js/core';\n\n@Component('app-child')\nexport class Child {\n\n    @Attr\n    textMessage: string = '';\n\n    render() {\n        return <h1>{this.textMessage}</h1>\n    }\n}\n")),Object(a.b)("h4",{id:"parent-component"},"Parent component"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\n\n@Component('app-parent')\nexport class Parent {\n    message: string = 'Hello World!';\n    render() {\n        return <app-child text-message={this.message}></app-child>\n    }\n}\n")),Object(a.b)("p",null,"In the example above the child module has an observed attribute named ",Object(a.b)("inlineCode",{parentName:"p"},"textMessage"),".\nEvery time the ",Object(a.b)("inlineCode",{parentName:"p"},"message")," property of the parent component change, it will also be reflected in the child component's ",Object(a.b)("inlineCode",{parentName:"p"},"textMessage")," property."),Object(a.b)("p",null,"Notice that the ",Object(a.b)("inlineCode",{parentName:"p"},"text-message")," attribute in the ",Object(a.b)("inlineCode",{parentName:"p"},"app-child")," tag is in kebab case and a camel case in the child component."),Object(a.b)("h2",{id:"boolean-attribute"},"Boolean attribute"),Object(a.b)("p",null,"This type of attribute has the same implementation of the string attribute above.\nThe only difference is that the value is converted into boolean value instead of string.\nIt uses the ",Object(a.b)("inlineCode",{parentName:"p"},"@AttrBoolean")," decorator to mark the observed attributes in the child module."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, AttrBoolean } from '@monster-js/core';\n\n@Component('app-child')\nexport class Child {\n\n    @AttrBoolean\n    toggle: boolean = false;\n\n    render() {\n        return <h1 v:if={this.toggle}>Toggle</h1>\n    }\n}\n")),Object(a.b)("h2",{id:"number-attribute"},"Number attribute"),Object(a.b)("p",null,"This type of attribute has the same implementation of the string attribute above.\nThe only difference is that the value is converted into number value instead of string.\nIt uses the ",Object(a.b)("inlineCode",{parentName:"p"},"@AttrNumber")," decorator to mark the observed attributes in the child module."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, AttrNumber } from '@monster-js/core';\n\n@Component('app-child')\nexport class Child {\n\n    @AttrNumber\n    count: number = 0;\n\n    render() {\n        return <h1>{this.count}</h1>\n    }\n}\n")),Object(a.b)("h2",{id:"the-attributechangedcallback-hook"},"The attributeChangedCallback hook"),Object(a.b)("p",null,"This is a hook that runs each time one of the observed attributes is added, removed, or updated.\nIt has four arguments, first is the attribute name, second is the old value, third is the new value, and last is the camel cased attribute name."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Attr } from '@monster-js/core';\n\n@Component('app-child')\nexport class Child {\n\n    @Attr\n    textMessage: string = '';\n\n    attributeChangedCallback(name: string, oldValue: any, newValue: any, camelCaseName: string) {\n        console.log(name, oldValue, newValue, camelCaseName);\n    }\n    ...\n}\n")))}b.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,s(s({ref:t},b),{},{components:n})):a.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);