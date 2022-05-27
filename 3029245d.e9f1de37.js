(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var o=t(2),a=(t(0),t(95));const r={id:"component.md",title:"Component",sidebar_label:"Component",slug:"/component"},i={unversionedId:"component.md",id:"component.md",isDocsHomePage:!1,title:"Component",description:"Components are the most basic building block of an application.",source:"@site/docs\\component.md",slug:"/component",permalink:"/docs/component",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/component.md",version:"current",sidebar_label:"Component",sidebar:"someSidebar",previous:{title:"Quick start",permalink:"/docs/quick-start"},next:{title:"Module",permalink:"/docs/module"}},c=[{value:"Logic and template",id:"logic-and-template",children:[]},{value:"Styles",id:"styles",children:[]},{value:"Shadow dom component",id:"shadow-dom-component",children:[]},{value:"Custom element component",id:"custom-element-component",children:[]},{value:"Define component",id:"define-component",children:[]},{value:"Global components",id:"global-components",children:[]},{value:"Register component to a module",id:"register-component-to-a-module",children:[]},{value:"Render a component into view",id:"render-a-component-into-view",children:[]},{value:"Other web components",id:"other-web-components",children:[]},{value:"Component directives",id:"component-directives",children:[]},{value:"Component pipes",id:"component-pipes",children:[]},{value:"component services",id:"component-services",children:[]}],p={rightToc:c};function s(e){let{components:n,...t}=e;return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Components are the most basic building block of an application.\nIt is composed of template, logic and styles.\nIt is used to split the UI into small and reusable pieces of codes."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Component file must have an extension of ",Object(a.b)("inlineCode",{parentName:"p"},".tsx")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},".ts"),"."))),Object(a.b)("h2",{id:"logic-and-template"},"Logic and template"),Object(a.b)("p",null,"The logic and template is combined in a single file.\nIt is a typescript class that has a ",Object(a.b)("inlineCode",{parentName:"p"},"@Component")," decorator and a ",Object(a.b)("inlineCode",{parentName:"p"},"render()")," method that returns a jsx element.\nSince a component has jsx elements inside it, it should have an extension of ",Object(a.b)("inlineCode",{parentName:"p"},".tsx")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},".ts"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>Hello World!</h1>\n    }\n}\n")),Object(a.b)("p",null,"The parameter of ",Object(a.b)("inlineCode",{parentName:"p"},"@Component")," will be the web component selector.\nIn the example above the selector is ",Object(a.b)("inlineCode",{parentName:"p"},"app-greeting")," which means our component must be ",Object(a.b)("inlineCode",{parentName:"p"},"<app-greeting />")," when we render it to the view."),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Selector must be all lowercase or it might throw an error if there are uppercase characters."))),Object(a.b)("h2",{id:"styles"},"Styles"),Object(a.b)("p",null,"MonsterJS uses ",Object(a.b)("inlineCode",{parentName:"p"},"sass")," by default but we can also use other css frameworks depending on our webpack configuration.\nThis styles will only affect it's component and will have no effect on it's parent and child components."),Object(a.b)("p",null,"Component styles is imported directly to the ",Object(a.b)("inlineCode",{parentName:"p"},".component.tsx")," file."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import './greeting.styles.scss';\nimport { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>Hello World!</h1>\n    }\n}\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"In order for the component styles to work properly,\nthe component and styles must have the same filename with ",Object(a.b)("inlineCode",{parentName:"p"},".component.tsx")," extension for the component and ",Object(a.b)("inlineCode",{parentName:"p"},".styles.scss")," extension for the styles."))),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"greeting\n    \u251c\u2500\u2500 greeting.component.tsx\n    \u2514\u2500\u2500 greeting.styles.scss\n")),Object(a.b)("h2",{id:"shadow-dom-component"},"Shadow dom component"),Object(a.b)("p",null,"To encapsulate our component we can attach a shadow dom to it.\nTo do this, we can use the ",Object(a.b)("inlineCode",{parentName:"p"},"@ShadowComponent")," decorator instead of ",Object(a.b)("inlineCode",{parentName:"p"},"@Component"),".\nThe @ShadowComponent decorator has two parameters.\nFirst is the component selector, and second is the shadow mode(",Object(a.b)("inlineCode",{parentName:"p"},"open")," or ",Object(a.b)("inlineCode",{parentName:"p"},"closed"),") which is optional and the default is ",Object(a.b)("inlineCode",{parentName:"p"},"open"),","),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import './greeting.styles.scss';\nimport { ShadowComponent } from '@monster-js/core';\n\n@ShadowComponent('app-greeting', 'closed')\nexport class Greeting {\n    render() {\n        return <h1>Hello World!</h1>\n    }\n}\n")),Object(a.b)("h2",{id:"custom-element-component"},"Custom element component"),Object(a.b)("p",null,"Custom element allows us to define a new type of elements.\nTo create a custom element, we need decorate our component with ",Object(a.b)("inlineCode",{parentName:"p"},"@CustomElement")," decorator.\nThis decorator has two parameter, first is the type of custom element constructor and second is what type of element it will extend."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import './greeting.styles.scss';\nimport { Component, CustomElement } from '@monster-js/core';\n\n@CustomElement(HTMLButtonElement, 'button')\n@Component('app-custom-button')\nexport class CustomButton {\n    render() {\n        return <span>I am a button!</span>\n    }\n}\n")),Object(a.b)("p",null,"In the example above, we created a custom element using ",Object(a.b)("inlineCode",{parentName:"p"},"@CustomElement(HTMLButtonElement, 'button')"),".\nThat means we need to attach the component in a ",Object(a.b)("inlineCode",{parentName:"p"},"<button></button>")," element like the following."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'<button is="app-custom-button"></button>\n')),Object(a.b)("h2",{id:"define-component"},"Define component"),Object(a.b)("p",null,"Component must be defined before we can use it.\nSince MonsterJS components are web components, we can use the ",Object(a.b)("inlineCode",{parentName:"p"},"customElement.define")," as long as we have the MonsterJS polyfill imported before defining the components."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// index.ts\nimport '@monster-js/core/polyfill';\nimport { Greeting } from './greeting.component';\n\ncustomElement.define('app-greeting', Greeting);\n")),Object(a.b)("p",null,"We can also use the selector defined in the ",Object(a.b)("inlineCode",{parentName:"p"},"@Component")," decorator."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// index.ts\nimport '@monster-js/core/polyfill';\nimport { getSelector } '@monster-js/core';\nimport { Greeting } from './greeting.component';\n\ncustomElement.define(getSelector(Greeting), Greeting);\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"We should only import the polyfill once. It is recommended that we import the polyfill at the top of our entry point."))),Object(a.b)("h2",{id:"global-components"},"Global components"),Object(a.b)("p",null,"Components can be registered as a global component.\nGlobal components can be used in any components inside our application."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { GlobalComponents } from '@monster-js/core';\n\nconst gc = new GlobalComponents();\ngc.add('app-greeting');\n")),Object(a.b)("p",null,"Global components needs to be registered as global components first before we define the component using ",Object(a.b)("inlineCode",{parentName:"p"},"customElements.define")," to avoid issues."),Object(a.b)("h2",{id:"register-component-to-a-module"},"Register component to a module"),Object(a.b)("p",null,"For the component to be available for other components in a module, we need to register the component to the module.\nRegistered component does not need to be defined using ",Object(a.b)("inlineCode",{parentName:"p"},"customElement.define"),"."),Object(a.b)("p",null,"To register the component, we just need to pass the component to the components array in a module."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { Greeting } from './greeting.component';\n\n@Module({\n    components: [Greeting]\n})\nexport class AppModule extends BaseModule { }\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Components must be registered to one module only."))),Object(a.b)("p",null,"Components must be registered to one module only.\nIf we want to use the component inside other module, we just need to export the component from it's module and import it's module to the one that needs the component.\nPlease see ",Object(a.b)("a",{parentName:"p",href:"./module#register-components"},"Module")," for more information about exporting a component from it's module."),Object(a.b)("h2",{id:"render-a-component-into-view"},"Render a component into view"),Object(a.b)("p",null,"To render a component into view, we just need to call it's selector inside the template."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"    <div>\n        <app-greeting></app-greeting>\n    </div>\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"    <div>\n        <app-greeting />\n    </div>\n")),Object(a.b)("p",null,"In the example above, the greeting component will be rendered in the view inside the ",Object(a.b)("inlineCode",{parentName:"p"},"<app-greeting />")," element as a web component as long as the greeting component is defined in a module or using the ",Object(a.b)("inlineCode",{parentName:"p"},"customElement.define")," function."),Object(a.b)("h2",{id:"other-web-components"},"Other web components"),Object(a.b)("p",null,"Web components that are not made using MonsterJS will also work inside a MonsterJS project.\nWe just need to register the web component's selector as a global component using ",Object(a.b)("inlineCode",{parentName:"p"},"GlobalComponents")," class found in the core package."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// src/index.ts\nimport { GlobalComponents } from '@monster-js/core';\n\nconst gc = new GlobalComponents();\ngc.add('external-web-component');\ngc.add('another-external-web-component');\n")),Object(a.b)("p",null,"It is recommended that we register the external components inside ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.ts")," file."),Object(a.b)("h2",{id:"component-directives"},"Component directives"),Object(a.b)("p",null,"To use directives inside a component we need to register the directives to the component using ",Object(a.b)("inlineCode",{parentName:"p"},"@Directives")," decorator.\nAfter we register the directive, we can now use it inside the component's template."),Object(a.b)("p",null,"Please see ",Object(a.b)("a",{parentName:"p",href:"./directives"},"Directives")," for more information about directives."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component, Directives } from '@monster-js/core';\nimport { HighlightDirective } from './highlight.directive';\n\n@Directives(HighlightDirective)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1 highlight:color=\"red\">Hello World!</h1>\n    }\n}\n")),Object(a.b)("p",null,"Directives can also be registered in a module so that it will be available to all the components registered in the module."),Object(a.b)("p",null,"Please see ",Object(a.b)("a",{parentName:"p",href:"./module#register-directives"},"Module")," for more information about registering directives into a module."),Object(a.b)("h2",{id:"component-pipes"},"Component pipes"),Object(a.b)("p",null,"To use pipes inside a component we need to register the pipes to the component using ",Object(a.b)("inlineCode",{parentName:"p"},"@Pipes")," decorator.\nAfter we register the pipe, we can now use it inside the component's logic and template."),Object(a.b)("p",null,"Please see ",Object(a.b)("a",{parentName:"p",href:"./pipes"},"Pipes")," for more information about pipes."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component, Pipes } from '@monster-js/core';\nimport { UppercasePipe } from './uppercase.pipe';\n\n@Pipes(UppercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n\n    greeting = 'Hello World!';\n\n    render() {\n        return <h1>{this.greeting | uppercase}</h1>\n    }\n}\n")),Object(a.b)("p",null,"To use the pipe inside the component's logic we can inject pipe into our component's constructor."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component, Pipes } from '@monster-js/core';\nimport { UppercasePipe } from './uppercase.pipe';\n\n@Pipes(UppercasePipe)\n@Component('app-greeting')\nexport class Greeting {\n\n    greeting = 'Hello World!';\n\n    constructor(private uppercasePipe: UppercasePipe) {}\n\n    uppercaseText(text: string) {\n        return this.uppercasePipe.transform(text);\n    }\n\n    render() {\n        return <h1>{this.uppercaseText(this.greeting)}</h1>\n    }\n}\n")),Object(a.b)("p",null,"Pipes can also be registered in a module so that it will be available to all the components registered in the module."),Object(a.b)("p",null,"Please see ",Object(a.b)("a",{parentName:"p",href:"./module"},"Module")," for more information about registering pipes into a module."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Template pipes may throw a typescript type checking error since the pipe operator is originally an arithmetic operator that accepts any, number and bigint values.\nA temporary fix for this is to set our values to type any.\nThis error will be addressed in later releases."))),Object(a.b)("h2",{id:"component-services"},"component services"),Object(a.b)("p",null,"To use services inside a component we need to register the services to the component using ",Object(a.b)("inlineCode",{parentName:"p"},"@Services")," decorator.\nAfter we register the service, we can now use it inside the component's logic and view."),Object(a.b)("p",null,"Please see ",Object(a.b)("a",{parentName:"p",href:"./services"},"Services")," for more information about services."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component, Services } from '@monster-js/core';\nimport { GreetingService } from './greeting.service';\n\n@Services(GreetingService)\n@Component('app-greeting')\nexport class Greeting {\n\n    constructor(private greetingService: GreetingService) { }\n\n    render() {\n        return <h1>{this.greetingService.getMessage()}</h1>\n    }\n}\n")),Object(a.b)("p",null,"Services can also be registered in a module so that it will be available to all the components registered in the module."),Object(a.b)("p",null,"Please see ",Object(a.b)("a",{parentName:"p",href:"/docs/module"},"Module")," for more information about registering services into a module."))}s.isMDXComponent=!0},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||r;return t?a.a.createElement(u,c(c({ref:n},s),{},{components:t})):a.a.createElement(u,c({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);