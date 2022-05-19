(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),l=(n(0),n(94)),i={id:"module.md",title:"Module",sidebar_label:"Module",slug:"/module"},a={unversionedId:"module.md",id:"module.md",isDocsHomePage:!1,title:"Module",description:"Module is a way to group components, directives, services, pipes and modules of application that are related to each other.",source:"@site/docs\\module.md",slug:"/module",permalink:"/docs-v1/docs/module",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/module.md",version:"current",sidebar_label:"Module",sidebar:"someSidebar",previous:{title:"Component",permalink:"/docs-v1/docs/component"},next:{title:"Event handling",permalink:"/docs-v1/docs/event-handling"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Root component",id:"root-component",children:[]},{value:"Register components",id:"register-components",children:[]},{value:"Export components",id:"export-components",children:[]},{value:"Register services",id:"register-services",children:[]},{value:"Export services",id:"export-services",children:[]},{value:"Register directives",id:"register-directives",children:[]},{value:"Export directives",id:"export-directives",children:[]},{value:"Register pipes",id:"register-pipes",children:[]},{value:"Export pipes",id:"export-pipes",children:[]},{value:"Import modules",id:"import-modules",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Module is a way to group components, directives, services, pipes and modules of application that are related to each other.\nThis feature is very helpful in organizing the codes to make the project more maintainable as it grows in scale.\nAnother cool thing for a MonsterJS module is that it is lazy loaded when used in a route."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"Module is not directly available in the core package so we need to install it first if not yet installed before we can use it.\nTo install this package, we can run the following command in the root directory of our project."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install @monster-js/module\n")),Object(l.b)("p",null,"or"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @monster-js/module\n")),Object(l.b)("h2",{id:"root-component"},"Root component"),Object(l.b)("p",null,"Some module has a root component.\nThis component is the one being mounted in the dom tree when the module is used in a route.\nRoot component is the last component to be defined to make sure all the child components are already defined."),Object(l.b)("p",null,"Ex."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'import { Module, BaseModule } from "@monster-js/core";\nimport { App } from "./app.component";\n\n@Module({\n    root: App\n})\nexport class AppModule extends BaseModule {}\n')),Object(l.b)("p",null,"In this example, ",Object(l.b)("inlineCode",{parentName:"p"},"App")," is the root component."),Object(l.b)("h2",{id:"register-components"},"Register components"),Object(l.b)("p",null,"Components can be registered to a module so that they can interact with each other."),Object(l.b)("p",null,"For example, we have a parent component and a child component.\nThe child component is rendered inside the template of the parent module.\nSo the parent and child module needs to be registered in the module."),Object(l.b)("p",null,"Ex."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { Parent } from './parent.component';\nimport { Child } from './child.component';\n\n@Module({\n    components: [Parent, Child]\n})\nexport class AppModule extends BaseModule { }\n")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Components must be registered to a one module only."))),Object(l.b)("h2",{id:"export-components"},"Export components"),Object(l.b)("p",null,"Components defined in a module cannot be defined in another module."),Object(l.b)("p",null,"For the example above,\nif the parent and child components are registered in different modules,\nwe need to export the component that will be used in another module and import the module to the module that needs the exported component."),Object(l.b)("p",null,"Ex."),Object(l.b)("h4",{id:"child-module"},"Child module"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { Child } from './child.component';\n\n@Module({\n    exports: {\n        components: [Child]\n    }\n})\nexport class ChildModule extends BaseModule { }\n")),Object(l.b)("h4",{id:"parent-module"},"Parent module"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { Parent } from './parent.component';\nimport { ChildModule } from './child.module';\n\n@Module({\n    components: [Parent],\n    modules: [ChildModule]\n})\nexport class ParentModule extends BaseModule { }\n")),Object(l.b)("h2",{id:"register-services"},"Register services"),Object(l.b)("p",null,"Services can be registered to a module so that all components and other classes registered to the module can use the services.\nA service can be registered to any number of modules unlike components which can be registered only in one module."),Object(l.b)("p",null,"Ex."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { GreetingService } from './greeting.service';\n\n@Module({\n    services: [GreetingService]\n})\nexport class AppModule extends BaseModule { }\n")),Object(l.b)("h2",{id:"export-services"},"Export services"),Object(l.b)("p",null,"A service can also be exported from the module."),Object(l.b)("p",null,"Ex."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { GreetingService } from './greeting.service';\n\n@Module({\n    exports: {\n        services: [GreetingService]\n    }\n})\nexport class AppModule extends BaseModule { }\n")),Object(l.b)("h2",{id:"register-directives"},"Register directives"),Object(l.b)("p",null,"Directives can be registered to a module so that all components registered to the module can use the directives.\nA directive can be registered to any number of modules unlike components which can be registered only in one module."),Object(l.b)("p",null,"Ex."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { HighlightDirective } from './highlight.directive';\n\n@Module({\n    directives: [HighlightDirective]\n})\nexport class AppModule extends BaseModule { }\n")),Object(l.b)("h2",{id:"export-directives"},"Export directives"),Object(l.b)("p",null,"A directive can also be exported from the module."),Object(l.b)("p",null,"Ex."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { HighlightDirective } from './highlight.directive';\n\n@Module({\n    exports: {\n        directives: [HighlightDirective]\n    }\n})\nexport class AppModule extends BaseModule { }\n")),Object(l.b)("h2",{id:"register-pipes"},"Register pipes"),Object(l.b)("p",null,"Pipes can be registered to a module so that all components registered to the module can use the pipes.\nA pipe can be registered to any number of modules unlike components which can be registered only in one module."),Object(l.b)("p",null,"Ex."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { UppercasePipe } from './uppercase.pipe';\n\n@Module({\n    pipes: [UppercasePipe]\n})\nexport class AppModule extends BaseModule { }\n")),Object(l.b)("h2",{id:"export-pipes"},"Export pipes"),Object(l.b)("p",null,"A pipe can also be exported from the module."),Object(l.b)("p",null,"Ex."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { UppercasePipe } from './uppercase.pipe';\n\n@Module({\n    exports: {\n        pipes: [UppercasePipe]\n    }\n})\nexport class AppModule extends BaseModule { }\n")),Object(l.b)("h2",{id:"import-modules"},"Import modules"),Object(l.b)("p",null,"A module can be imported to another module.\nThe purpose of this is to make the parent module to be able to use the components, services, pipes and directives that are exported from the child module."),Object(l.b)("p",null,"Ex."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { ChildModule } from './child.module';\n\n@Module({\n    modules: [ChildModule]\n})\nexport class AppModule extends BaseModule { }\n")))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.a.createElement(b,a(a({ref:t},s),{},{components:n})):r.a.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);