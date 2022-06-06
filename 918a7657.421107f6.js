(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,s=d["".concat(l,".").concat(m)]||d[m]||b[m]||a;return n?o.a.createElement(s,c(c({ref:t},u),{},{components:n})):o.a.createElement(s,c({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=(n(0),n(100));const a={id:"cli-build-project.md",title:"Build project",sidebar_label:"Build project",slug:"/build-project"},l={unversionedId:"cli-build-project.md",id:"cli-build-project.md",isDocsHomePage:!1,title:"Build project",description:"MonsterJS CLI provides a command to compile the project for deployment.",source:"@site/docs\\cli-build-project.md",slug:"/build-project",permalink:"/docs/build-project",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/cli-build-project.md",version:"current",sidebar_label:"Build project",sidebar:"someSidebar",previous:{title:"Local development server",permalink:"/docs/local-development-server"},next:{title:"Generate commands",permalink:"/docs/cli-generate-commands"}},c=[{value:"Build command",id:"build-command",children:[]},{value:"Command options",id:"command-options",children:[]}],i={rightToc:c};function u(e){let{components:t,...n}=e;return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MonsterJS CLI provides a command to compile the project for deployment.\nThe output of this build process is found in ",Object(o.b)("inlineCode",{parentName:"p"},"./build")," directory by default but can be changed based on the options when running the cli command to build the project. "),Object(o.b)("h2",{id:"build-command"},"Build command"),Object(o.b)("p",null,"To build the project we can run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mn build\n")),Object(o.b)("h2",{id:"command-options"},"Command options"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Option"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Value type"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"--env <value",">"),Object(o.b)("td",{parentName:"tr",align:null},"Build the project using the specified environment."),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"dev")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"--output <value",">"),Object(o.b)("td",{parentName:"tr",align:null},"The directory where it should output the bundles, assets and other files."),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"dist")))),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mn build --env prod\n")))}u.isMDXComponent=!0}}]);