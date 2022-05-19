(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return c}));var r=t(2),o=(t(0),t(96));const p={id:"props.md",title:"Props",sidebar_label:"Props",slug:"/props"},s={unversionedId:"props.md",id:"props.md",isDocsHomePage:!1,title:"Props",description:"Props is a directive that allows developers to pass any type of data from parent to child.",source:"@site/docs\\props.md",slug:"/props",permalink:"/docs/docs/props",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/props.md",version:"current",sidebar_label:"Props",sidebar:"someSidebar",previous:{title:"Change detection",permalink:"/docs/docs/change-detection"},next:{title:"Observed attributes",permalink:"/docs/docs/observed-attributes"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Pass props from parent to child",id:"pass-props-from-parent-to-child",children:[]},{value:"Get props",id:"get-props",children:[]},{value:"On props change event",id:"on-props-change-event",children:[]},{value:"Unsubscribe to event",id:"unsubscribe-to-event",children:[]}],a={rightToc:i};function c({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},a,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Props is a directive that allows developers to pass any type of data from parent to child.\nIt is more advance than ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./observed-attributes"}),"observed attributes")," since attributes can only pass string, number or boolean to child component."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"Props directives are namespaced with ",Object(o.b)("inlineCode",{parentName:"p"},"prop")," followed by the property name. The syntax of props is written as ",Object(o.b)("inlineCode",{parentName:"p"},"prop:<name>=<data>"),"."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'prop:message="Hello World!"\n')),Object(o.b)("h2",{id:"pass-props-from-parent-to-child"},"Pass props from parent to child"),Object(o.b)("p",null,"Here's an example on how to pass properties to child component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@munster-dev/core';\n\n@Component('app-parent')\nexport class Parent {\n    date = new Date();\n    user = { ... };\n    posts = [ ... ];\n\n    render() {\n        return <app-child\n            prop:date={this.date}\n            prop:user={this.user}\n            prop:posts={this.posts}\n        ></app-child>\n    }\n}\n")),Object(o.b)("h2",{id:"get-props"},"Get props"),Object(o.b)("p",null,"To get the props, we need to inject the ",Object(o.b)("inlineCode",{parentName:"p"},"PropsService")," provided by the core package to our child component."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, PropsService, OnInitImpl } from '@munster-dev/core';\n\n@Component('app-child')\nexport class Child implements OnInitImpl {\n    constructor(private propsService: PropsService) {}\n\n    onInit() {\n        const props = this.propsService.get();\n        const date = this.propsService.get('date');\n        console.log(props, date);\n    }\n\n    render() {\n        return <h1>Child component</h1>\n    }\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"get")," method of PropsService will return a value of a property if we pass the property name and it will return the whole props object if no property name is passed to the method."),Object(o.b)("h2",{id:"on-props-change-event"},"On props change event"),Object(o.b)("p",null,"We can also subscribe to a props change event using the ",Object(o.b)("inlineCode",{parentName:"p"},"PropsService"),".\nThis event will trigger once there are changes in the props on the parent component side."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, PropsService, OnInitImpl } from '@munster-dev/core';\n\n@Component('app-child')\nexport class Child implements OnInitImpl {\n\n    constructor(private propsService: PropsService) {}\n\n    onInit() {\n        this.propsService.onPropsChange.subscribe(this.onPropsChange);\n    }\n\n    @Bind()\n    private onPropsChange(props) {\n        console.log(props);\n    }\n\n    render() {\n        return <h1>Child component</h1>\n    }\n}\n")),Object(o.b)("h2",{id:"unsubscribe-to-event"},"Unsubscribe to event"),Object(o.b)("p",null,"It is always a good practice to unsubscribe all of your subscriptions when component is destroyed."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, PropsService, Subscription, OnInitImpl, OnDestroyImpl } from '@munster-dev/core';\n\n@Component('app-child')\nexport class Child implements OnInitImpl, OnDestroyImpl {\n\n    subscriptions: SubscriptionInterface[] = [];\n\n    constructor(private propsService: PropsService) {}\n\n    onInit() {\n        // push the subscription in to subscriptions array when component is initialized\n        this.subscriptions.push(\n            this.propsService.onPropsChange.subscribe(this.onPropsChange)\n        );\n    }\n\n    onDestroy() {\n        // unsubscribe all subscriptions when component is destroyed\n        this.subscriptions.forEach(item => item.unsubscribe());\n    }\n\n    @Bind()\n    private onPropsChange(props) {\n        console.log(props);\n    }\n\n    render() {\n        return <h1>Child component</h1>\n    }\n}\n")))}c.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),l=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=l(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),b=l(t),d=r,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||p;return t?o.a.createElement(m,i(i({ref:n},c),{},{components:t})):o.a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,s=new Array(p);s[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<p;c++)s[c]=t[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);