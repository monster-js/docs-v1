(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var o=t(2),r=(t(0),t(94));const i={id:"component.md",title:"Component",sidebar_label:"Component",slug:"/component"},a={unversionedId:"component.md",id:"component.md",isDocsHomePage:!1,title:"Component",description:"Components are the most basic building block of an application.",source:"@site/docs\\component.md",slug:"/component",permalink:"/docs-v1/docs/component",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/component.md",version:"current",sidebar_label:"Component",sidebar:"someSidebar",previous:{title:"Quick start",permalink:"/docs-v1/docs/quick-start"},next:{title:"Module",permalink:"/docs-v1/docs/module"}},c=[{value:"Logic and template",id:"logic-and-template",children:[]},{value:"Styles",id:"styles",children:[]},{value:"Define component",id:"define-component",children:[]},{value:"Global components",id:"global-components",children:[]},{value:"Register component to a module",id:"register-component-to-a-module",children:[]},{value:"Render a component into view",id:"render-a-component-into-view",children:[]},{value:"Other web components",id:"other-web-components",children:[]},{value:"Component directives",id:"component-directives",children:[]},{value:"Component pipes",id:"component-pipes",children:[]},{value:"component services",id:"component-services",children:[]}],p={rightToc:c};function s({components:e,...n}){return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Components are the most basic building block of an application.\nIt is composed of template, logic and styles.\nIt is used to split the UI into small and reusable pieces of codes."),Object(r.b)("h2",{id:"logic-and-template"},"Logic and template"),Object(r.b)("p",null,"The logic and the template is combined in a single file.\nIt is a typescript class that has a ",Object(r.b)("inlineCode",{parentName:"p"},"@Component")," decorator and a ",Object(r.b)("inlineCode",{parentName:"p"},"render()")," method that returns a jsx element."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>Hello World!</h1>\n    }\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@Component")," decorator has two parameters.\nFirst is the component selector and second is what type of custom element constructor the component is.\nThe second argument is optional and the default value is ",Object(r.b)("inlineCode",{parentName:"p"},"HTMLElement"),"."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\n\n@Component('app-custom-button', HTMLButtonElement)\nexport class CustomButton {\n    render() {\n        return <button>Click Me</button>\n    }\n}\n")),Object(r.b)("h2",{id:"styles"},"Styles"),Object(r.b)("p",null,"MonsterJS uses ",Object(r.b)("inlineCode",{parentName:"p"},"sass")," by default but we can also use other css frameworks depending on our webpack configuration.\nThis styles will only affect it's component and will have no effect on it's parent and child components."),Object(r.b)("p",null,"Component styles is imported directly to the ",Object(r.b)("inlineCode",{parentName:"p"},".component.tsx")," file."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import './greeting.styles.scss';\nimport { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>Hello World!</h1>\n    }\n}\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In order for the component styles to work properly,\nthe component and styles must have the same filename with ",Object(r.b)("inlineCode",{parentName:"p"},".component.tsx")," extension for the component and ",Object(r.b)("inlineCode",{parentName:"p"},".styles.scss")," extension for the styles."))),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"greeting\n    \u251c\u2500\u2500 greeting.component.tsx\n    \u2514\u2500\u2500 greeting.styles.scss\n")),Object(r.b)("h2",{id:"define-component"},"Define component"),Object(r.b)("p",null,"Component must be defined before we can use it.\nSince MonsterJS components are web components, we can use the ",Object(r.b)("inlineCode",{parentName:"p"},"customElement.define")," as long as we have the MonsterJS polyfill imported before defining the components."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"// index.ts\nimport '@monster-js/core/polyfill';\nimport { Greeting } from './greeting.component';\n\ncustomElement.define('app-greeting', Greeting);\n")),Object(r.b)("p",null,"We can also use the selector defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"@Component")," decorator."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"// index.ts\nimport '@monster-js/core/polyfill';\nimport { getSelector } '@monster-js/core';\nimport { Greeting } from './greeting.component';\n\ncustomElement.define(getSelector(Greeting), Greeting);\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We should only import the polyfill once. It is recommended that we import the polyfill at the top of our entry point."))),Object(r.b)("h2",{id:"global-components"},"Global components"),Object(r.b)("p",null,"Components can be registered as a global component.\nGlobal components can be used in any components inside our application."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { GlobalComponents } from '@monster-js/core';\n\nconst gc = new GlobalComponents();\ngc.add('app-greeting');\n")),Object(r.b)("p",null,"Global components needs to be registered as global components first before we define the component using ",Object(r.b)("inlineCode",{parentName:"p"},"customElements.define")," to avoid issues."),Object(r.b)("h2",{id:"register-component-to-a-module"},"Register component to a module"),Object(r.b)("p",null,"For the component to be available for other components in a module, we need to register the component to the module.\nRegistered component does not need to be defined using ",Object(r.b)("inlineCode",{parentName:"p"},"customElement.define"),"."),Object(r.b)("p",null,"To register the component, we just need to pass the component to the components array in a module."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { Greeting } from './greeting.component';\n\n@Module({\n    components: [Greeting]\n})\nexport class AppModule extends BaseModule { }\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Components must be registered to one module only."))),Object(r.b)("p",null,"Components must be registered to one module only.\nIf we want to use the component inside other module, we just need to export the component from it's module and import it's module to the one that needs the component.\nPlease see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./module"}),"Module")," for more information about exporting a component from it's module."),Object(r.b)("h2",{id:"render-a-component-into-view"},"Render a component into view"),Object(r.b)("p",null,"To render a component into view, we just need to call it's selector inside the template."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"    <div>\n        <app-greeting></app-greeting>\n    </div>\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"    <div>\n        <app-greeting />\n    </div>\n")),Object(r.b)("p",null,"In the example above, the greeting component will be rendered in the view inside the ",Object(r.b)("inlineCode",{parentName:"p"},"<app-greeting />")," element as a web component as long as the greeting component is defined in a module or using the ",Object(r.b)("inlineCode",{parentName:"p"},"customElement.define")," function."),Object(r.b)("h2",{id:"other-web-components"},"Other web components"),Object(r.b)("p",null,"Web components that are not made using MonsterJS will also work inside a MonsterJS project.\nWe just need to register the web component's selector as a global component using ",Object(r.b)("inlineCode",{parentName:"p"},"GlobalComponents")," class found in the core package."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// src/index.ts\nimport { GlobalComponents } from '@monster-js/core';\n\nconst gc = new GlobalComponents();\ngc.add('external-web-component');\ngc.add('another-external-web-component');\n")),Object(r.b)("p",null,"It is recommended that we register the external components inside ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.ts")," file."),Object(r.b)("h2",{id:"component-directives"},"Component directives"),Object(r.b)("p",null,"To use directives inside a component we need to register the directives to the component using ",Object(r.b)("inlineCode",{parentName:"p"},"@Directives")," decorator.\nAfter we register the directive, we can now use it inside the component's template."),Object(r.b)("p",null,"Please see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./directives"}),"Directives")," for more information about directives."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Directives } from '@monster-js/core';\nimport { HighlightDirective } from './highlight.directive';\n\n@Directives(HighlightDirective)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1 highlight:color=\"red\">Hello World!</h1>\n    }\n}\n")),Object(r.b)("p",null,"Directives can also be registered in a module so that it will be available to all the components registered in the module."),Object(r.b)("p",null,"Please see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./module"}),"Module")," for more information about registering directives into a module."),Object(r.b)("h2",{id:"component-pipes"},"Component pipes"),Object(r.b)("p",null,"To use pipes inside a component we need to register the pipes to the component using ",Object(r.b)("inlineCode",{parentName:"p"},"@Pipes")," decorator.\nAfter we register the pipe, we can now use it inside the component's logic and template."),Object(r.b)("p",null,"Please see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./pipes"}),"Pipes")," for more information about pipes."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes } from '@monster-js/core';\nimport { UppercasePipe } from './uppercase.pipe';\n\n@Pipes(UppercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n\n    greeting = 'Hello World!';\n\n    render() {\n        return <h1>{this.greeting | uppercase}</h1>\n    }\n}\n")),Object(r.b)("p",null,"To use the pipe inside the component's logic we can inject ",Object(r.b)("inlineCode",{parentName:"p"},"PipeService")," into our component's constructor."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Pipes, PipeService } from '@monster-js/core';\nimport { UppercasePipe } from './uppercase.pipe';\n\n@Pipes(UppercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n\n    greeting = 'Hello World!';\n\n    constructor(private pipeService: PipeService) {}\n\n    uppercaseText(text: string) {\n        return this.pipeService.transform('uppercase', text);\n    }\n\n    render() {\n        return <h1>{this.uppercaseText(this.greeting)}</h1>\n    }\n}\n")),Object(r.b)("p",null,"Pipes can also be registered in a module so that it will be available to all the components registered in the module."),Object(r.b)("p",null,"Please see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./module"}),"Module")," for more information about registering pipes into a module."),Object(r.b)("h2",{id:"component-services"},"component services"),Object(r.b)("p",null,"To use services inside a component we need to register the services to the component using ",Object(r.b)("inlineCode",{parentName:"p"},"@Services")," decorator.\nAfter we register the service, we can now use it inside the component's logic and view."),Object(r.b)("p",null,"Please see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./services"}),"Services")," for more information about services."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Services } from '@monster-js/core';\nimport { GreetingService } from './greeting.service';\n\n@Services(GreetingService)\n@Component('app-greeting')\nexport class Greeting {\n\n    constructor(private greetingService: GreetingService) { }\n\n    render() {\n        return <h1>{this.greetingService.getMessage()}</h1>\n    }\n}\n")),Object(r.b)("p",null,"Services can also be registered in a module so that it will be available to all the components registered in the module."),Object(r.b)("p",null,"Please see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./module"}),"Module")," for more information about registering services into a module."))}s.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,u=m["".concat(a,".").concat(d)]||m[d]||b[d]||i;return t?r.a.createElement(u,c(c({ref:n},s),{},{components:t})):r.a.createElement(u,c({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);