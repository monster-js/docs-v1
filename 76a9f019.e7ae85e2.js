(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||s[m]||o;return r?a.a.createElement(d,l(l({ref:t},u),{},{components:r})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=(r(0),r(100));const o={id:"router.md",title:"Router",sidebar_label:"Router",slug:"/router"},i={unversionedId:"router.md",id:"router.md",isDocsHomePage:!1,title:"Router",description:"Router is a plugin that enables developers to build a single page application with multiple components that acts as different pages of the app.",source:"@site/docs\\router.md",slug:"/router",permalink:"/docs/router",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/router.md",version:"current",sidebar_label:"Router",sidebar:"someSidebar",previous:{title:"Conditional rendering",permalink:"/docs/conditional-rendering"},next:{title:"Store",permalink:"/docs/store"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Register the router module",id:"register-the-router-module",children:[]},{value:"Creating a route",id:"creating-a-route",children:[]},{value:"Route props",id:"route-props",children:[]},{value:"Router directive",id:"router-directive",children:[{value:"Router link",id:"router-link",children:[]},{value:"Router link active",id:"router-link-active",children:[]},{value:"Router link active exact",id:"router-link-active-exact",children:[]}]},{value:"Router guard",id:"router-guard",children:[{value:"Can activate",id:"can-activate",children:[]},{value:"Can deactivate",id:"can-deactivate",children:[]}]},{value:"Router module",id:"router-module",children:[]},{value:"Router service",id:"router-service",children:[{value:"Navigate",id:"navigate",children:[]},{value:"On route change",id:"on-route-change",children:[]},{value:"Router params",id:"router-params",children:[]}]},{value:"Dynamic route matching",id:"dynamic-route-matching",children:[]},{value:"Lazy loading a module",id:"lazy-loading-a-module",children:[]}],c={rightToc:l};function u(e){let{components:t,...r}=e;return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Router is a plugin that enables developers to build a single page application with multiple components that acts as different pages of the app.\nView changes depending on the activated route.\nActivated routes depends on the url of the browser and the path registered in the route component."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"We can install the router using npm or yarn."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm install @monster-js/router\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @monster-js/router\n")),Object(a.b)("h2",{id:"register-the-router-module"},"Register the router module"),Object(a.b)("p",null,"Router must be registered to the module first before we can use it.\nWe can register the individual apis or register the whole router module to the module where we want to use the router."),Object(a.b)("p",null,"Here's an example on how to register the router module:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { RouterModule } from '@monster-js/router';\n\n@Module({\n    modules: [RouterModule]\n})\nexport class AppModule extends BaseModule { }\n")),Object(a.b)("h2",{id:"creating-a-route"},"Creating a route"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"import { Route } from '@monster-js/router'")),Object(a.b)("p",null,"Route is just a component provided by the router package.\nOnce route component is already defined or the router module is imported to the module we can now start using the ",Object(a.b)("inlineCode",{parentName:"p"},"app-route")," component inside our components."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@monster-js/core';\nimport { Greeting } from './greeting.component';\n\n@Component('app-root')\nexport class Root {\n    render() {\n        return <div>\n            <app-route\n                prop:path=\"/greeting\"\n                prop:component={Greeting}\n            />\n        </div>\n    }\n}\n")),Object(a.b)("p",null,"In the example above, if the user will navigate to '/greeting' route the ",Object(a.b)("inlineCode",{parentName:"p"},"Greeting")," component will be displayed in the view."),Object(a.b)("h2",{id:"route-props"},"Route props"),Object(a.b)("p",null,"Route props are properties of the route that controls the behavior of the route."),Object(a.b)("p",null,"Here are the available props that can be used in a route."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Props"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"path"),Object(a.b)("td",{parentName:"tr",align:null},"The path that should match in the browser url pathname before the route is activated.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"component"),Object(a.b)("td",{parentName:"tr",align:null},"The component that will be rendered inside the ",Object(a.b)("inlineCode",{parentName:"td"},"<app-route />")," when route path matches the browser url pathname.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"exact"),Object(a.b)("td",{parentName:"tr",align:null},"If the value is true, then the Component will only activate if route path is an exact match with the browser url pathname but still respect the dynamic route matching.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"guards"),Object(a.b)("td",{parentName:"tr",align:null},"It is another layer of checking if the component can activate or deactivate.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"module"),Object(a.b)("td",{parentName:"tr",align:null},"Loads a module on demand and display it's root component to the view if route path matches the browser url pathname.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"redirect-to"),Object(a.b)("td",{parentName:"tr",align:null},"A string url to redirect to if route path matches the browser url pathname.")))),Object(a.b)("h2",{id:"router-directive"},"Router directive"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"import { RouterDirective } from '@monster-js/router'")),Object(a.b)("p",null,"Router also has a directive that is very helpful when using a router."),Object(a.b)("h3",{id:"router-link"},"Router link"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'router:link="<link>"')),Object(a.b)("p",null,"Attach to an element to navigate to the link when the element is clicked.\nIf used in an ",Object(a.b)("inlineCode",{parentName:"p"},"<a>")," tag, it will automatically add the link as an ",Object(a.b)("inlineCode",{parentName:"p"},"href")," attribute."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'<a router:link="/some/url">I am a link</a>\n<button router:link="/some/url/123">I am a button</button>\n')),Object(a.b)("h3",{id:"router-link-active"},"Router link active"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'router:link-active="<class name>"')),Object(a.b)("p",null,"This directive will add the ",Object(a.b)("inlineCode",{parentName:"p"},"<class name>")," to the class list of the element if it's ",Object(a.b)("inlineCode",{parentName:"p"},"router:link")," directive link matches the browser url pathname using dynamic matching."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'<button\n    router:link="/some/url/123"\n    router:link-active="i-am-active"\n>I am a button</button>\n')),Object(a.b)("h3",{id:"router-link-active-exact"},"Router link active exact"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"router:link-active-exact={<boolean>}")),Object(a.b)("p",null,"If the value is true, this directive will enable us to add the class name of ",Object(a.b)("inlineCode",{parentName:"p"},"router:link-active")," directive only when the ",Object(a.b)("inlineCode",{parentName:"p"},"router:link")," directive link is an exact match of the browser url pathname but still respect dynamic matching."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'<button\n    router:link="/some/url/123"\n    router:link-active="i-am-active"\n    router:link-active-exact={true}\n>I am a button</button>\n')),Object(a.b)("h2",{id:"router-guard"},"Router guard"),Object(a.b)("p",null,"Router guard is another way to check if a component can activate or not.\nIt can also run a block of codes before a route can activate or deactivate."),Object(a.b)("p",null,"The following code is an example of a working guard codes but without functions yet."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Guard } from '@monster-js/router';\n\n@Guard()\nexport class AuthGuard {\n}\n")),Object(a.b)("h3",{id:"can-activate"},"Can activate"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"canActivate")," method can help us add additional checking if a component is allowed to activate."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { ObservableInterface } from '@monster-js/core';\nimport { Guard, RouterService } from '@monster-js/router';\nimport { AuthService } from './auth.service';\n\n@Guard()\nexport class AuthGuard {\n\n    constructor(\n        private authService: AuthService,\n        private routerService: RouterService\n    ) {}\n\n    public override canActivate(): ObservableInterface<boolean> | boolean {\n        if (this.authService.isLoggedIn) {\n            return true;\n        }\n        this.routerService.navigate('/guest/route');\n        return false;\n    }\n}\n")),Object(a.b)("h3",{id:"can-deactivate"},"Can deactivate"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"canDeactivate")," method can help us add additional checking if a component is allowed to deactivate."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { ObservableInterface } from '@monster-js/core';\nimport { Guard } from '@monster-js/router';\nimport { ChangesService } from './changes.service';\n\n@Guard()\nexport class ChangesGuard {\n\n    constructor(private changesService: ChangesService) {}\n\n    public override canDeactivate(): ObservableInterface<boolean> | boolean {\n        return !this.changesService.hasChanges;\n    }\n}\n")),Object(a.b)("h2",{id:"router-module"},"Router module"),Object(a.b)("p",null,"`import { RouterModule } from '@monster-js/router';"),Object(a.b)("p",null,"Importing router module to our module will give us all the functionalities of the router since router module exports all the necessary elements to use the router."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n    exports: {\n        directives: [RouterDirective],\n        services: [RouterService],\n        components: [Route]\n    }\n})\nexport class RouterModule extends BaseModule {}\n")),Object(a.b)("h2",{id:"router-service"},"Router service"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"import { RouterService } from '@monster-js/router'"),";"),Object(a.b)("p",null,"Router service will provide us some useful functionalities to control the route, get router data, and watch for events."),Object(a.b)("p",null,"To use the router service we need to inject it to our component."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@monster-js/core';\nimport { RouterService } from '@monster-js/router';\n\n@Component('app-greeting')\nexport class Greeting {\n    constructor(private routerService: RouterService) {}\n    ...\n}\n")),Object(a.b)("h3",{id:"navigate"},"Navigate"),Object(a.b)("p",null,"Router service offers ",Object(a.b)("inlineCode",{parentName:"p"},"navigate(url, state, title, replaceState)")," method to navigate to a url programmatically."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@monster-js/core';\nimport { RouterService } from '@monster-js/router';\n\n@Component('app-greeting')\nexport class Greeting {\n    constructor(private routerService: RouterService) { }\n\n    onInit() {\n        setTimeout(() => {\n            this.routerService.navigate('/some/url');\n        }, 1000);\n    }\n}\n")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameters"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"url"),Object(a.b)("td",{parentName:"tr",align:null},"The url that we want to navigate to. This parameter is required.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"state"),Object(a.b)("td",{parentName:"tr",align:null},"An object, used as the state in history.pushState api. This parameter is not required.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"title"),Object(a.b)("td",{parentName:"tr",align:null},"A string, used as the title in history.pushState api. This parameter is not required.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"replaceState"),Object(a.b)("td",{parentName:"tr",align:null},"A boolean, indicates if we use history.replaceState or history.pushState during navigation.")))),Object(a.b)("h3",{id:"on-route-change"},"On route change"),Object(a.b)("p",null,"This will allow us to subscribe to route change event using ",Object(a.b)("inlineCode",{parentName:"p"},"onRouteChange")," property of the router service."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@monster-js/core';\nimport { RouterService } from '@monster-js/router';\n\n@Component('app-greeting')\nexport class Greeting {\n    constructor(private routerService: RouterService) { }\n\n    onInit() {\n        this.routerService.onRouteChange.subscribe(() => {\n            console.log('route has change');\n        });\n    }\n}\n")),Object(a.b)("p",null,"In the example above, the component will log ",Object(a.b)("inlineCode",{parentName:"p"},"route has change")," in the console every time the route will change."),Object(a.b)("p",null,"Since we subscribed to route change event, it is a good idea to remove all the subscriptions made when the component is destroyed to avoid memory leak."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component, Subscription } from '@monster-js/core';\nimport { RouterService } from '@monster-js/router';\n\n@Component('app-greeting')\nexport class Greeting {\n\n    subscription: Subscription;\n\n    constructor(private routerService: RouterService) { }\n\n    onInit() {\n        this.subscription = this.routerService.onRouteChange.subscribe(() => {\n            console.log('route has change');\n        });\n    }\n\n    onDestroy() {\n        this.subscription.unsubscribe();\n    }\n}\n")),Object(a.b)("h3",{id:"router-params"},"Router params"),Object(a.b)("p",null,"We can also get the router parameters using the router service.\nMore information about this route params are found in the ",Object(a.b)("a",{parentName:"p",href:"#dynamic-route-matching"},"dynamic route matching")," section."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@monster-js/core';\nimport { RouterService } from '@monster-js/router';\n\n@Component('app-greeting')\nexport class Greeting {\n    constructor(private routerService: RouterService) { }\n\n    onInit() {\n        const params = this.routerService.params;\n        console.log(params);\n    }\n}\n")),Object(a.b)("h2",{id:"dynamic-route-matching"},"Dynamic route matching"),Object(a.b)("p",null,"Dynamic route matching is a way to match a route path segment into its matching browser url pathname segment.\nA dynamic segment is denoted by a colon ",Object(a.b)("inlineCode",{parentName:"p"},":")," followed by the segment name. ex. ",Object(a.b)("inlineCode",{parentName:"p"},"/:userId"),".\nThe value of the dynamic segments are call the router parameters."),Object(a.b)("p",null,"Here's a table of dynamic routes and its corresponding values as a router parameter:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"component path"),Object(a.b)("th",{parentName:"tr",align:null},"browser url pathname"),Object(a.b)("th",{parentName:"tr",align:null},"router params"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"/:path"),Object(a.b)("td",{parentName:"tr",align:null},"/100"),Object(a.b)("td",{parentName:"tr",align:null},"{ path: 100 }")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"/user/:userId"),Object(a.b)("td",{parentName:"tr",align:null},"/user/123"),Object(a.b)("td",{parentName:"tr",align:null},"{ userId: 123 }")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"/post/:postId/:userId"),Object(a.b)("td",{parentName:"tr",align:null},"/post/1/123"),Object(a.b)("td",{parentName:"tr",align:null},"{ postId: 1, userId: 123 }")))),Object(a.b)("h2",{id:"lazy-loading-a-module"},"Lazy loading a module"),Object(a.b)("p",null,"To lazy load a module or load a module on demand, we can use the ",Object(a.b)("inlineCode",{parentName:"p"},"module")," property of a route."),Object(a.b)("p",null,"Ex."),Object(a.b)("h4",{id:"the-module"},"The module"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// ./greeting.module\nimport { Module, BaseModule } from '@monster-js/module';\nimport { Greeting } from './greeting.component';\n\n@Module({\n    root: Greeting\n})\nexport class GreetingModule extends BaseModule { }\n")),Object(a.b)("h4",{id:"the-route"},"The route"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"<app-route\n    prop:path=\"/sample/path\"\n    prop:module={() => import('./greeting.module').then(m => m.GreetingModule)}\n/>\n")),Object(a.b)("p",null,"The example above will display the component registered as a root component in the ",Object(a.b)("inlineCode",{parentName:"p"},"GreetingModule")," when the route is allowed to activate."))}u.isMDXComponent=!0}}]);