(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(94));const i={id:"custom-directive.md",title:"Custom Directive",sidebar_label:"Custom directive",slug:"/custom-directive"},c={unversionedId:"custom-directive.md",id:"custom-directive.md",isDocsHomePage:!1,title:"Custom Directive",description:"Custom directives are classes that manipulates an element in our MonsterJS application.",source:"@site/docs\\custom-directive.md",slug:"/custom-directive",permalink:"/docs-v1/docs/custom-directive",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/custom-directive.md",version:"current",sidebar_label:"Custom directive",sidebar:"someSidebar",previous:{title:"Directives",permalink:"/docs-v1/docs/directives"},next:{title:"Pipes",permalink:"/docs-v1/docs/pipes"}},o=[{value:"Creating a custom directive",id:"creating-a-custom-directive",children:[]},{value:"Register a directive",id:"register-a-directive",children:[]},{value:"Using a directive",id:"using-a-directive",children:[]},{value:"Value change watcher",id:"value-change-watcher",children:[]},{value:"Handling all directive names",id:"handling-all-directive-names",children:[]}],l={rightToc:o};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Custom directives are classes that manipulates an element in our MonsterJS application."),Object(a.b)("h2",{id:"creating-a-custom-directive"},"Creating a custom directive"),Object(a.b)("p",null,"To create a custom directive, we can use the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./cli-what-is-cli"}),"cli")," to automatically generate a directive file with boilerplate codes or we can manually create a file and write the code from scratch."),Object(a.b)("p",null,"The following code is an example of a working directive codes but without functions yet."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Directive } from '@monster-js/core';\n\n@Directive('highlight')\nexport class HighlightDirective {\n}\n")),Object(a.b)("p",null,"The next step is to handle the directive by creating a method ",Object(a.b)("inlineCode",{parentName:"p"},"$<directive name>"),"."),Object(a.b)("p",null,"Here is an example on how to handle the directive ",Object(a.b)("inlineCode",{parentName:"p"},'highlight:color="red"'),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Directive, DirectiveArgInterface } from '@monster-js/core';\n\n@Directive('highlight')\nexport class HighlightDirective {\n    $color(arg: DirectiveArgInterface) {\n        const value = arg.directive.get();\n        arg.element.style.backgroundColor = value;\n    }\n}\n")),Object(a.b)("p",null,"Please note that the class method to handle a directive must start with ",Object(a.b)("inlineCode",{parentName:"p"},"$"),".\nFor the example above, the directive ",Object(a.b)("inlineCode",{parentName:"p"},'highlight:color="red"')," will call the method ",Object(a.b)("inlineCode",{parentName:"p"},"$color"),".\nThe method has one argument that has a type of ",Object(a.b)("inlineCode",{parentName:"p"},"DirectiveArgInterface")," provided by the core package."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface DirectiveArgInterface {\n    directive: {\n        get: () => any,\n        set?: (val?: any) => void;\n    };\n    element: HTMLElement;\n    component: ComponentInstanceInterface;\n}\n")),Object(a.b)("h2",{id:"register-a-directive"},"Register a directive"),Object(a.b)("p",null,"Before we can use a custom directive we need to register it to a module or component."),Object(a.b)("p",null,"The following are examples on how to register a directive."),Object(a.b)("h4",{id:"in-component"},"In component"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\nimport { CustomDirective1 } from './custom-directive1.directive';\nimport { CustomDirective2 } from './custom-directive2.directive';\n\n@Directives(CustomDirective1, CustomDirective2)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1>Hello World!</h1>\n    }\n}\n")),Object(a.b)("h4",{id:"in-module"},"In module"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module, BaseModule } from '@monster-js/module';\nimport { CustomDirective1 } from './custom-directive1.directive';\nimport { CustomDirective2 } from './custom-directive2.directive';\n\n@Module({\n    directives: [CustomDirective1, CustomDirective2]\n})\nexport class AppModule extends BaseModule { }\n")),Object(a.b)("h2",{id:"using-a-directive"},"Using a directive"),Object(a.b)("p",null,"After the custom directive is registered, we can now use it like the built-in directives using the following syntax: ",Object(a.b)("inlineCode",{parentName:"p"},'<namespace>:<name>="<value>"'),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\nimport { HighlightDirective } from './highlight.directive';\n\n@Directives(HighlightDirective)\n@Component('app-greeting')\nexport class Greeting {\n    render() {\n        return <h1 highlight:color=\"red\">Hello World!</h1>\n    }\n}\n")),Object(a.b)("h2",{id:"value-change-watcher"},"Value change watcher"),Object(a.b)("p",null,"To let our directive react when it's value is changed we can use the ",Object(a.b)("inlineCode",{parentName:"p"},"watchDirective(arg, updateCallback)")," function from the core package."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Params"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"arg"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The directive to be watched.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"updateCallback"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A function that runs when the value of the directive is changed.")))),Object(a.b)("p",null,"Here's an example on how to change the background color of an element based on the value passed to its directive."),Object(a.b)("h4",{id:"the-directive"},"The directive"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive, watch } from '@monster-js/core';\n\n@Directive('highlight')\nexport class HighlightDirective {\n    $color(arg: DirectiveArgInterface) {\n        const initialValue = arg.directive.get();\n        arg.element.style.backgroundColor = initialValue;\n\n        watchDirective(arg, value => {\n            arg.element.style.backgroundColor = value;\n        });\n    }\n}\n")),Object(a.b)("h4",{id:"the-component"},"The component"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Directives } from '@monster-js/core';\nimport { HighlightDirective } from './highlight.directive';\n\n@Directives(HighlightDirective)\n@Component('app-greeting')\nexport class Greeting {\n\n    highlightColor = 'red';\n\n    render() {\n        return <h1 highlight:color={this.highlightColor}></h1>\n    }\n}\n")),Object(a.b)("p",null,"We can also use the ",Object(a.b)("inlineCode",{parentName:"p"},"watch(valueCaller, element, component, updateCallback)")," function for a better control of our watcher."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Params"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"valueCaller"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A function that calls the value of the directive.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"element"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The element where the directive is attached.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"component"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The component where the directive is being used.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"updateCallback"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A function that runs when the value of the directive is changed.")))),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive, watch } from '@monster-js/core';\n\n@Directive('highlight')\nexport class HighlightDirective {\n    $color(arg: DirectiveArgInterface) {\n        const initialValue = arg.directive.get();\n        arg.element.style.backgroundColor = initialValue;\n\n        watch(() => arg.directive.get(), arg.element, arg.component, value => {\n            arg.element.style.backgroundColor = value;\n        });\n    }\n}\n")),Object(a.b)("h2",{id:"handling-all-directive-names"},"Handling all directive names"),Object(a.b)("p",null,"In some cases we need to handle any names passed on our directive."),Object(a.b)("p",null,"A good example for this is the props directive that accepts all directive names.\nEx. ",Object(a.b)("inlineCode",{parentName:"p"},"prop:user={this.user}")," or ",Object(a.b)("inlineCode",{parentName:"p"},"prop:post={this.post}")," where ",Object(a.b)("inlineCode",{parentName:"p"},"user")," and ",Object(a.b)("inlineCode",{parentName:"p"},"post")," are the directive names."),Object(a.b)("p",null,"To catch all the directive names we can use ",Object(a.b)("inlineCode",{parentName:"p"},"allDirectives(arg: AllDirectivesArgInterface)")," hook.\nThis hook has one argument that has a type of AllDirectivesArgInterface provided by the core package."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface AllDirectivesArgInterface {\n    directives: {\n        [key: string]: {\n            get: () => any,\n            set?: (val?: any) => void; }>\n        }\n    }\n    element: HTMLElement;\n    component: ComponentInstanceInterface;\n}\n")),Object(a.b)("p",null,"Ex."),Object(a.b)("h4",{id:"the-component-1"},"The component"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, Directives } from '@monster-js/core';\nimport { AnimalDirective } from './animal.directive';\n\n@Directives(AnimalDirective)\n@Component('app-animals')\nexport class Animals {\n    return <h1 animal:cat=\"meow meow meow\" animal:chicken=\"cluck cluck cluck\">Animal sounds</h1>\n}\n")),Object(a.b)("h4",{id:"the-directive-1"},"The directive"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Directive } from '@monster-js/core';\n\n@Directive('animal')\nexport class AnimalDirective {\n    allDirectives(arg: AllDirectivesArgInterface) {\n        console.log(arg.directives.cat.get());\n        console.log(arg.directives.chicken.get());\n    }\n}\n")),Object(a.b)("p",null,"In the example above, the ",Object(a.b)("inlineCode",{parentName:"p"},"allDirectives")," method will log the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"'meow meow meow'\n'cluck cluck cluck'\n")))}s.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,u=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?a.a.createElement(u,o(o({ref:t},s),{},{components:n})):a.a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);