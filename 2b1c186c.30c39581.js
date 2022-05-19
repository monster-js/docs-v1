(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(2),i=(n(0),n(94));const a={id:"custom-directive.md",title:"Custom Directive",sidebar_label:"Custom directive",slug:"/custom-directive"},c={unversionedId:"custom-directive.md",id:"custom-directive.md",isDocsHomePage:!1,title:"Custom Directive",description:"Custom directives are classes that manipulates an element in our MonsterJS application.",source:"@site/docs\\custom-directive.md",slug:"/custom-directive",permalink:"/docs/docs/custom-directive",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/custom-directive.md",version:"current",sidebar_label:"Custom directive",sidebar:"someSidebar",previous:{title:"Directives",permalink:"/docs/docs/directives"},next:{title:"Pipes",permalink:"/docs/docs/pipes"}},o=[{value:"Creating a custom directive",id:"creating-a-custom-directive",children:[]},{value:"Register a directive",id:"register-a-directive",children:[]},{value:"Using a directive",id:"using-a-directive",children:[]},{value:"Value change watcher",id:"value-change-watcher",children:[]},{value:"Handling all directive names",id:"handling-all-directive-names",children:[]}],l={rightToc:o};function s({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Custom directives are classes that manipulates an element in our MonsterJS application."),Object(i.b)("h2",{id:"creating-a-custom-directive"},"Creating a custom directive"),Object(i.b)("p",null,"To create a custom directive, we can use the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"./cli-what-is-cli"}),"cli")," to automatically generate a directive file with boilerplate codes or we can manually create a file and write the code from scratch."),Object(i.b)("p",null,"The following code is an example of a working directive codes but without functions yet."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Directive } from '@monster-js/core';\n\n@Directive('highlight')\nexport class HighlightDirective {\n}\n")),Object(i.b)("p",null,"The next step is to handle the directive by creating a method ",Object(i.b)("inlineCode",{parentName:"p"},"$<directive name>"),"."),Object(i.b)("p",null,"Here is an example on how to handle the directive ",Object(i.b)("inlineCode",{parentName:"p"},'highlight:color="red"'),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Directive, DirectiveArgInterface } from '@monster-js/core';\n\n@Directive('highlight')\nexport class HighlightDirective {\n    $color(arg: DirectiveArgInterface) {\n        const value = arg.directive.get();\n        this.element.style.backgroundColor = value;\n    }\n}\n")),Object(i.b)("p",null,"Please note that the class method to handle a directive must start with ",Object(i.b)("inlineCode",{parentName:"p"},"$"),".\nFor the example above, the directive ",Object(i.b)("inlineCode",{parentName:"p"},'highlight:color="red"')," will call the method ",Object(i.b)("inlineCode",{parentName:"p"},"$color"),".\nThe method has one argument that has a type of ",Object(i.b)("inlineCode",{parentName:"p"},"DirectiveArgInterface")," provided by the core package."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface DirectiveArgInterface {\n    directive: {\n        get: () => any,\n        set?: (val?: any) => void;\n    };\n    element: HTMLElement;\n    component: ComponentInstanceInterface;\n    componentWrapper: ComponentWrapperInstanceInterface;\n}\n")),Object(i.b)("h2",{id:"register-a-directive"},"Register a directive"),Object(i.b)("p",null,"Before we can use a custom directive we need to register it to a module or component."),Object(i.b)("p",null,"The following are examples on how to register a directive."),Object(i.b)("h4",{id:"in-component"},"In component"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\nimport { CustomDirective1 } from './custom-directive1.directive';\nimport { CustomDirective2 } from './custom-directive2.directive';\n\n@Directives(CustomDirective1, CustomDirective2)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>Hello World!</h1>\n    }\n}\n")),Object(i.b)("h4",{id:"in-module"},"In module"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { CustomDirective1 } from './custom-directive1.directive';\nimport { CustomDirective2 } from './custom-directive2.directive';\n\n@Module({\n    directives: [CustomDirective1, CustomDirective2]\n})\nexport class AppModule extends BaseModule { }\n")),Object(i.b)("h2",{id:"using-a-directive"},"Using a directive"),Object(i.b)("p",null,"After the custom directive is registered, we can now use it like the built-in directives using the following syntax: ",Object(i.b)("inlineCode",{parentName:"p"},'<namespace>:<name>="<value>"'),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\nimport { HighlightDirective } from './highlight.directive';\n\n@Directives(HighlightDirective)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1 highlight:color=\"red\">Hello World!</h1>\n    }\n}\n")),Object(i.b)("h2",{id:"value-change-watcher"},"Value change watcher"),Object(i.b)("p",null,"To let our directive react when it's value is changed we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"createWatcher(valueCaller, element, component, updateCallback)")," function from the core package."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Params"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"valueCaller"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A function that calls the value of the directive.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"element"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The element where the directive is attached.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"component"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The component where the directive is being used.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"updateCallback"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A function that runs when the value of the directive is changed.")))),Object(i.b)("p",null,"Here's an example on how to change the background color of an element based on the value passed to its directive."),Object(i.b)("h4",{id:"the-directive"},"The directive"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive, createWatcher } from '@monster-js/core';\n\n@Directive('highlight')\nexport class HighlightDirective {\n    $color(arg: DirectiveArgInterface) {\n        const initialValue = arg.directive.get();\n        this.element.style.backgroundColor = initialValue;\n\n        createWatcher(() => arg.directive.get(), arg.element, arg.component, newValue => {\n            this.element.style.backgroundColor = newValue;\n        });\n    }\n}\n")),Object(i.b)("h4",{id:"the-component"},"The component"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Directives } from '@monster-js/core';\nimport { HighlightDirective } from './highlight.directive';\n\n@Directives(HighlightDirective)\n@Component('app-greeting')\nexport class Greeting {\n\n    highlightColor = 'red';\n\n    render() {\n        return <h1 highlight:color={this.highlightColor}></h1>\n    }\n}\n")),Object(i.b)("h2",{id:"handling-all-directive-names"},"Handling all directive names"),Object(i.b)("p",null,"In some cases we need to handle any names passed on our directive."),Object(i.b)("p",null,"A good example for this is the props directive that accepts all directive names.\nEx. ",Object(i.b)("inlineCode",{parentName:"p"},"prop:user={this.user}")," or ",Object(i.b)("inlineCode",{parentName:"p"},"prop:post={this.post}")," where ",Object(i.b)("inlineCode",{parentName:"p"},"user")," and ",Object(i.b)("inlineCode",{parentName:"p"},"post")," are the directive names."),Object(i.b)("p",null,"To catch all the directive names we can use ",Object(i.b)("inlineCode",{parentName:"p"},"allDirectives(arg: AllDirectivesArgInterface)")," hook.\nThis hook has one argument that has a type of AllDirectivesArgInterface provided by the core package."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface AllDirectivesArgInterface {\n    directives: {\n        [key: string]: {\n            get: () => any,\n            set?: (val?: any) => void; }>\n        }\n    }\n    element: HTMLElement;\n    component: ComponentInstanceInterface;\n    componentWrapper: ComponentWrapperInstanceInterface;\n}\n")),Object(i.b)("p",null,"Ex."),Object(i.b)("h4",{id:"the-component-1"},"The component"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Directives } from '@monster-js/core';\nimport { AnimalDirective } from './animal.directive';\n\n@Directives(AnimalDirective)\n@Component('app-animals')\nexport class Animals {\n    return <h1 animal:cat=\"meow meow meow\" animal:chicken=\"cluck cluck cluck\">Animal sounds</h1>\n}\n")),Object(i.b)("h4",{id:"the-directive-1"},"The directive"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Directive } from '@monster-js/core';\n\n@Directive('animal')\nexport class AnimalDirective {\n    allDirectives(arg: AllDirectivesArgInterface) {\n        console.log(arg.directives.cat.get());\n        console.log(arg.directives.chicken.get());\n    }\n}\n")),Object(i.b)("p",null,"In the example above, the ",Object(i.b)("inlineCode",{parentName:"p"},"allDirectives")," method will log the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"'meow meow meow'\n'cluck cluck cluck'\n")))}s.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,u=m["".concat(c,".").concat(d)]||m[d]||b[d]||a;return n?i.a.createElement(u,o(o({ref:t},s),{},{components:n})):i.a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);