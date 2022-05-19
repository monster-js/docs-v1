(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),o=(n(0),n(94));const a={id:"store.md",title:"Store",sidebar_label:"Store",slug:"/store"},s={unversionedId:"store.md",id:"store.md",isDocsHomePage:!1,title:"Store",description:"Store is a state management built for MonsterJS framework.",source:"@site/docs\\store.md",slug:"/store",permalink:"/docs/docs/store",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/store.md",version:"current",sidebar_label:"Store",sidebar:"someSidebar",previous:{title:"Router",permalink:"/docs/docs/router"},next:{title:"Http",permalink:"/docs/docs/http"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Register the store",id:"register-the-store",children:[]},{value:"Initial state",id:"initial-state",children:[]},{value:"Setter",id:"setter",children:[]},{value:"Getter",id:"getter",children:[]},{value:"Subscribe to changes",id:"subscribe-to-changes",children:[]},{value:"Actions",id:"actions",children:[]}],c={rightToc:i};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Store is a state management built for MonsterJS framework.\nUsing this store will help developers to centralize and maintain the codes easily."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"We can install the store to our project using npm or yarn."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @monster-js/store\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @monster-js/store\n")),Object(o.b)("h2",{id:"register-the-store"},"Register the store"),Object(o.b)("p",null,"Store needs to be registered as a service before we can use it.\nPlease check the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./services"}),"services")," for information on how to register a service."),Object(o.b)("p",null,"It is recommended that we register the store in the global container."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Container, GlobalDataSource, registerService } from '@monster-js/core';\nimport { Store } from '@monster-js/store';\n\nconst storeConfig = {\n    state: {}\n};\n\nconst container = new Container(new GlobalDataSource());\nregisterService(Store, container, storeConfig);\n")),Object(o.b)("p",null,"In the example above, the ",Object(o.b)("inlineCode",{parentName:"p"},"storeConfig")," is the initial state of the store."),Object(o.b)("h2",{id:"initial-state"},"Initial state"),Object(o.b)("p",null,"Initial state of the store is the state that is passed to the store as the initial data.\nThe initial state is required when registering the store."),Object(o.b)("p",null,"Here's an example on how to create an initial state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'// initial-state.ts\nimport { StoreInterface } from "@monster-js/store";\n\nexport interface InitialStateInterface {\n    count: number;\n}\n\nexport const initialState: StoreInterface<InitialStateInterface> = {\n    state: {\n        count: 0\n    }\n}\n')),Object(o.b)("p",null,"After creating an initial state, we need to pass it as a service config for the store."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Container, GlobalDataSource, registerService } from '@monster-js/core';\nimport { Store } from '@monster-js/store';\nimport { initialState } from './initial-state';\n\nconst container = new Container(new GlobalDataSource());\nregisterService(Store, container, initialState);\n")),Object(o.b)("h2",{id:"setter"},"Setter"),Object(o.b)("p",null,"When we set a new value to state of store.\nThe change will be reflected to the components that has a subscription to this state."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Component } from '@monster-js/core';\nimport { Store } from '@monster-js/store';\nimport { InitialStateInterface } from './initial-state';\n\n@Component('app-greeting')\nexport class Greeting {\n    constructor(private store: Store<InitialStateInterface>) {}\n\n    btnClick() {\n        this.store.set('count', 100);\n    }\n    ...\n}\n")),Object(o.b)("h2",{id:"getter"},"Getter"),Object(o.b)("p",null,"To get a value from store, the we can call the store ",Object(o.b)("inlineCode",{parentName:"p"},"get")," method."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Component } from '@monster-js/core';\nimport { Store } from '@monster-js/store';\nimport { InitialStateInterface } from './initial-state';\n\n@Component('app-greeting')\nexport class Greeting {\n    constructor(private store: Store<InitialStateInterface>) {}\n\n    onInit() {\n        console.log(this.store.get('count'));\n    }\n    ...\n}\n")),Object(o.b)("h2",{id:"subscribe-to-changes"},"Subscribe to changes"),Object(o.b)("p",null,"Store also offers a way to subscribe for changes of each item of the state."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Component } from '@monster-js/core';\nimport { Store } from '@monster-js/store';\nimport { InitialStateInterface } from './initial-state';\n\n@Component('app-greeting')\nexport class Greeting {\n\n    constructor(private store: Store<InitialStateInterface>) {}\n\n    onInit() {\n        this.store.select('count').subscribe(state => {\n            console.log(state);\n        });\n    }\n    ...\n}\n")),Object(o.b)("h4",{id:"unsubscribe-to-store"},"Unsubscribe to store"),Object(o.b)("p",null,"All subscriptions must be unsubscribe when the component is destroyed or else it will cause a memory issue."),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Component, Subscription } from '@monster-js/core';\nimport { Store } from '@monster-js/store';\nimport { InitialStateInterface } from './initial-state';\n\n@Component('app-greeting')\nexport class Greeting {\n    subscription: Subscription;\n    constructor(private store: Store<InitialStateInterface>) {}\n\n    connectedCallback() {\n        this.subscription = this.store.select('count').subscribe(state => {\n            console.log(state);\n        });\n    }\n\n    disconnectedCallback() {\n        this.subscription.unsubscribe();\n    }\n    ...\n}\n")),Object(o.b)("h2",{id:"actions"},"Actions"),Object(o.b)("p",null,"Actions can also be used to update the state.\nUsing this can make your codes much cleaner and easy to manage."),Object(o.b)("h4",{id:"create-actions"},"Create actions"),Object(o.b)("p",null,"Here's an example on how to create an action:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { createAction } from '@monster-js/store';\n\ninterface PostInterface {\n    likesCount: number;\n    commentsCount: number;\n}\n\ninterface InitialStateInterface {\n    post: PostInterface;\n}\n\nexport const setPostLikesCount = createAction<number, PostInterface>((state: PostInterface, payload: number) => {\n    return {\n        ...state,\n        likesCount: payload\n    }\n});\n\nexport const initialState: StoreInterface<InitialStateInterface> = {\n    state: {\n        post: {\n            likesCount: 0,\n            commentsCount: 0\n        }\n    },\n    actions: {\n        post: [\n            setPostLikesCount // <--- action needs to be registered here\n        ]\n    }\n}\n")),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"createAction"),", there are two generic types.\nFirst is the type of data that ",Object(o.b)("inlineCode",{parentName:"p"},"setPostLikesCount")," action will accept.\nThe second type is the type of the post state inside the store."),Object(o.b)("p",null,"There are two parameters for the ",Object(o.b)("inlineCode",{parentName:"p"},"createAction")," function.\nFirst is the state which holds the current state of the post.\nSecond is the payload which holds the value that is passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"setPostLikesCount")," action when the action is called."),Object(o.b)("h4",{id:"dispatch-an-action"},"Dispatch an action"),Object(o.b)("p",null,"Here's an example on how to dispatch the created action above:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@monster-js/core';\nimport { Store } from '@monster-js/store';\nimport { InitialStateInterface, setPostLikesCount } from './initial-state';\n\n@Component('app-greeting')\nexport class Greeting {\n\n    constructor(private store: Store<InitialStateInterface>) {}\n\n    btnClick() {\n        this.store.action(setPostLikesCount(100));\n    }\n}\n")))}l.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);