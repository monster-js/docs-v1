(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(2),r=(n(0),n(100));const i={id:"module.md",title:"Module",sidebar_label:"Module",slug:"/module"},l={unversionedId:"module.md",id:"module.md",isDocsHomePage:!1,title:"Module",description:"Module is a way to group components, directives, services, pipes and modules of application that are related to each other.",source:"@site/docs\\module.md",slug:"/module",permalink:"/docs/module",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/module.md",version:"current",sidebar_label:"Module",sidebar:"someSidebar",previous:{title:"Function component",permalink:"/docs/function-component"},next:{title:"Event handling",permalink:"/docs/event-handling"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Root component",id:"root-component",children:[]},{value:"Register components",id:"register-components",children:[]},{value:"Export components",id:"export-components",children:[]},{value:"Register services",id:"register-services",children:[]},{value:"Export services",id:"export-services",children:[]},{value:"Register directives",id:"register-directives",children:[]},{value:"Export directives",id:"export-directives",children:[]},{value:"Register pipes",id:"register-pipes",children:[]},{value:"Export pipes",id:"export-pipes",children:[]},{value:"Import modules",id:"import-modules",children:[]}],a={rightToc:s};function c(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(o.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Module is a way to group components, directives, services, pipes and modules of application that are related to each other.\nThis feature is very helpful in organizing the codes to make the project more maintainable as it grows in scale.\nAnother cool thing for a MonsterJS module is that it is lazy loaded when used in a route."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"Module is not directly available in the core package so we need to install it first if not yet installed before we can use it.\nTo install this package, we can run the following command in the root directory of our project."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install @monster-js/module\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @monster-js/module\n")),Object(r.b)("h2",{id:"root-component"},"Root component"),Object(r.b)("p",null,"Some module has a root component.\nThis component is the one being mounted in the dom tree when the module is used in a route.\nRoot component is the last component to be defined to make sure all the child components are already defined."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'import { Module, BaseModule } from "@monster-js/core";\nimport { App } from "./app.component";\n\n@Module({\n    root: App\n})\nexport class AppModule extends BaseModule {}\n')),Object(r.b)("p",null,"In this example, ",Object(r.b)("inlineCode",{parentName:"p"},"App")," is the root component."),Object(r.b)("h2",{id:"register-components"},"Register components"),Object(r.b)("p",null,"Components can be registered to a module so that they can interact with each other."),Object(r.b)("p",null,"For example, we have a parent component and a child component.\nThe child component is rendered inside the view of the parent component.\nSo the parent and child components needs to be registered in the module."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { Parent } from './parent.component';\nimport { Child } from './child.component';\n\n@Module({\n    components: [Parent, Child]\n})\nexport class AppModule extends BaseModule { }\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Components must be registered to a one module only."))),Object(r.b)("h2",{id:"export-components"},"Export components"),Object(r.b)("p",null,"Components defined in a module cannot be defined in another module."),Object(r.b)("p",null,"For the example above,\nif the parent and child components are registered in different modules,\nwe need to export the component that will be used in another module and import the module to the module that needs the exported component."),Object(r.b)("p",null,"Ex."),Object(r.b)("h4",{id:"child-module"},"Child module"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { Child } from './child.component';\n\n@Module({\n    exports: {\n        components: [Child]\n    }\n})\nexport class ChildModule extends BaseModule { }\n")),Object(r.b)("h4",{id:"parent-module"},"Parent module"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { Parent } from './parent.component';\nimport { ChildModule } from './child.module';\n\n@Module({\n    components: [Parent],\n    modules: [ChildModule]\n})\nexport class ParentModule extends BaseModule { }\n")),Object(r.b)("h2",{id:"register-services"},"Register services"),Object(r.b)("p",null,"Services can be registered to a module so that all components and other classes registered to the module can use the services.\nA service can be registered to any number of modules unlike components which can be registered only in one module."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { GreetingService } from './greeting.service';\n\n@Module({\n    services: [GreetingService]\n})\nexport class AppModule extends BaseModule { }\n")),Object(r.b)("h2",{id:"export-services"},"Export services"),Object(r.b)("p",null,"A service can also be exported from the module.\nExported services can be used by the components inside the module that imports the module that has the exported services."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { GreetingService } from './greeting.service';\n\n@Module({\n    exports: {\n        services: [GreetingService]\n    }\n})\nexport class AppModule extends BaseModule { }\n")),Object(r.b)("h2",{id:"register-directives"},"Register directives"),Object(r.b)("p",null,"Directives can be registered to a module so that all components registered to the module can use the directives.\nA directive can be registered to any number of modules unlike components which can be registered only in one module."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { HighlightDirective } from './highlight.directive';\n\n@Module({\n    directives: [HighlightDirective]\n})\nexport class AppModule extends BaseModule { }\n")),Object(r.b)("h2",{id:"export-directives"},"Export directives"),Object(r.b)("p",null,"A directive can also be exported from the module.\nExported directives can be used by the components inside the module that imports the module that has the exported directives."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { HighlightDirective } from './highlight.directive';\n\n@Module({\n    exports: {\n        directives: [HighlightDirective]\n    }\n})\nexport class AppModule extends BaseModule { }\n")),Object(r.b)("h2",{id:"register-pipes"},"Register pipes"),Object(r.b)("p",null,"Pipes can be registered to a module so that all components registered to the module can use the pipes.\nA pipe can be registered to any number of modules unlike components which can be registered only in one module."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { UppercasePipe } from './uppercase.pipe';\n\n@Module({\n    pipes: [UppercasePipe]\n})\nexport class AppModule extends BaseModule { }\n")),Object(r.b)("h2",{id:"export-pipes"},"Export pipes"),Object(r.b)("p",null,"A pipe can also be exported from the module.\nExported pipes can be used by the components inside the module that imports the module that has the exported pipes."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { UppercasePipe } from './uppercase.pipe';\n\n@Module({\n    exports: {\n        pipes: [UppercasePipe]\n    }\n})\nexport class AppModule extends BaseModule { }\n")),Object(r.b)("h2",{id:"import-modules"},"Import modules"),Object(r.b)("p",null,"A module can be imported to another module.\nThe purpose of this is to make the parent module to be able to use the components, services, pipes and directives that are exported from the child module."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { ChildModule } from './child.module';\n\n@Module({\n    modules: [ChildModule]\n})\nexport class AppModule extends BaseModule { }\n")))}c.isMDXComponent=!0}}]);