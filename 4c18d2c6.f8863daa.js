(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),i=(t(0),t(95)),a={id:"bind-decorator.md",title:"Bind decorator",sidebar_label:"Bind decorator",slug:"/bind-decorator"},c={unversionedId:"bind-decorator.md",id:"bind-decorator.md",isDocsHomePage:!1,title:"Bind decorator",description:"This bind decorator is used in the component.",source:"@site/docs\\bind-decorator.md",slug:"/bind-decorator",permalink:"/docs/bind-decorator",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/bind-decorator.md",version:"current",sidebar_label:"Bind decorator",sidebar:"someSidebar",previous:{title:"Available pipes",permalink:"/docs/available-pipes"},next:{title:"What is MonsterJS CLI",permalink:"/docs/cli-what-is-cli"}},s=[{value:"Possible errors",id:"possible-errors",children:[]}],p={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This bind decorator is used in the component.\nThis is to prevent the component from creating new function every time we use ",Object(i.b)("inlineCode",{parentName:"p"},".bind")," method.\nWe can also solve this problem by using the ",Object(i.b)("inlineCode",{parentName:"p"},".bind")," method in the constructor but it will cause a bloated constructor.\nUsing this bind decorator will promote clean codes."),Object(i.b)("p",null,"Ex."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Bind } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n\n    message = 'Hello World!';\n\n    @Bind\n    getMessage() {\n        return this.message;\n    }\n\n    render() {\n        return <app-child prop:get-message={this.getMessage}></app-child>\n    }\n}\n")),Object(i.b)("h2",{id:"possible-errors"},"Possible errors"),Object(i.b)("p",null,"Using bind in a method that has an argument with an interface might throw a compilation error.\nTo solve this issue we just need to add the ",Object(i.b)("inlineCode",{parentName:"p"},"type")," to the interface's import declaration."),Object(i.b)("p",null,"Ex."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Bind } from '@monster-js/core';\nimport type { UserInterface } from './user.interface';\n\n@Component('app-greeting')\nexport class Greeting {\n\n    message = 'Hello ';\n\n    @Bind\n    getMessage(user: UserInterface) {\n        return this.message + user.name + '!';\n    }\n\n    render() {\n        return <app-child prop:get-message={this.getMessage}></app-child>\n    }\n}\n")))}l.isMDXComponent=!0},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||i;return t?o.a.createElement(m,c(c({ref:n},p),{},{components:t})):o.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);