(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(6),c=(n(0),n(95)),a=["components"],o={id:"services.md",title:"Services",sidebar_label:"Services",slug:"/services"},s={unversionedId:"services.md",id:"services.md",isDocsHomePage:!1,title:"Services",description:"Services are injectable classes that are used to perform reusable logic.",source:"@site/docs\\services.md",slug:"/services",permalink:"/docs/services",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/services.md",version:"current",sidebar_label:"Services",sidebar:"someSidebar",previous:{title:"Custom pipes",permalink:"/docs/custom-pipes"},next:{title:"List rendering",permalink:"/docs/list-rendering"}},l=[{value:"Create a service",id:"create-a-service",children:[]},{value:"Singleton service",id:"singleton-service",children:[]},{value:"Register service in component",id:"register-service-in-component",children:[]},{value:"Register service in module",id:"register-service-in-module",children:[]},{value:"Register service in global",id:"register-service-in-global",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,a);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Services are injectable classes that are used to perform reusable logic.\nThis helps us to have much cleaner and easy to maintain components.\nIt is recommended that all http requests and business logic are made inside a service."),Object(c.b)("h2",{id:"create-a-service"},"Create a service"),Object(c.b)("p",null,"To create a service, we can use the ",Object(c.b)("a",{parentName:"p",href:"./cli-what-is-cli"},"cli")," to automatically generate a service file with boilerplate codes or we can manually create a file and write the code from scratch."),Object(c.b)("p",null,"The following code is an example of a working service codes but without functions yet."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"import { Service } from '@monster-js/core';\n\n@Service()\nexport class GreetingService {\n\n}\n")),Object(c.b)("h2",{id:"singleton-service"},"Singleton service"),Object(c.b)("p",null,"Services is transient by default.\nTo create a singleton service, we need to pass an optional config to ",Object(c.b)("inlineCode",{parentName:"p"},"@Service()")," decorator.\nThe config is an object that contains a ",Object(c.b)("inlineCode",{parentName:"p"},"singleton")," property that is set to true."),Object(c.b)("p",null,"Ex."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"import { Service } from '@monster-js/core';\n\n@Service({ singleton: true })\nexport class GreetingService {\n\n}\n")),Object(c.b)("h2",{id:"register-service-in-component"},"Register service in component"),Object(c.b)("p",null,"Before we can use a service we need to register it in our component."),Object(c.b)("p",null,"Ex."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component, Services } from '@monster-js/core';\nimport { GreetingService  } from './greeting.service';\n\n@Services(GreetingService)\n@Component('app-greeting')\nexport class Greeting {\n    ...\n}\n")),Object(c.b)("p",null,"Services can also have config that is received using the ",Object(c.b)("inlineCode",{parentName:"p"},"onReceiveConfig")," service hook after initialization."),Object(c.b)("p",null,"Ex."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component, Services } from '@monster-js/core';\nimport { GreetingService } from './greeting.service';\n\n@Services({\n    service: GreetingService,\n    config: { defaultMessage: 'Hello World!' }\n})\n@Component('app-greeting')\nexport class Greeting {\n    ...\n}\n")),Object(c.b)("h2",{id:"register-service-in-module"},"Register service in module"),Object(c.b)("p",null,"If multiple components in a module are using the service it is recommended that we register the service in our module.\nServices registered in a module will be available to all the components registered in the same module."),Object(c.b)("p",null,"Ex."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { GreetingService } from './greeting.service';\n\n@Module({\n    services: [GreetingService]\n})\nexport class GreetingModule extends BaseModule { }\n")),Object(c.b)("p",null,"Services can also have config that is received using the ",Object(c.b)("inlineCode",{parentName:"p"},"onReceiveConfig")," service hook after initialization."),Object(c.b)("p",null,"Ex."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"import { Module, BaseModule } from '@monster-js/module';\nimport { GreetingService } from './greeting.service';\n\n@Module({\n    services: [\n        {\n            service: GreetingService,\n            config: { defaultMessage: 'Hello World!' }\n        }\n    ]\n})\nexport class GreetingModule extends BaseModule { }\n")),Object(c.b)("h2",{id:"register-service-in-global"},"Register service in global"),Object(c.b)("p",null,"If we want our service to be available to all our components inside our application, we can also register the service as a global service."),Object(c.b)("p",null,"Ex."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"import { Container, GlobalDataSource, registerService } from '@monster-js/core';\nimport { GreetingService, config } from './greeting.service';\n\nconst container = new Container(new GlobalDataSource());\nregisterService(GreetingService, container, config);\n")),Object(c.b)("p",null,"In the example above, we register the service using ",Object(c.b)("inlineCode",{parentName:"p"},"registerService(GreetingService, container, config)")," function."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Params"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"GreetingService"),Object(c.b)("td",{parentName:"tr",align:null},"The service we want to register in global container")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"container"),Object(c.b)("td",{parentName:"tr",align:null},"The global dependency injection container")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"config"),Object(c.b)("td",{parentName:"tr",align:null},"An optional parameter. Any type of data that serves as a configuration of the service after initialization. Received using the ",Object(c.b)("inlineCode",{parentName:"td"},"onReceiveConfig")," service hook.")))))}b.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(a,".").concat(m)]||b[m]||u[m]||c;return n?i.a.createElement(d,o(o({ref:t},l),{},{components:n})):i.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var l=2;l<c;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);