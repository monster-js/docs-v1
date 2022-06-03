(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(99)),l=["components"],c={id:"cli-build-project.md",title:"Build project",sidebar_label:"Build project",slug:"/build-project"},i={unversionedId:"cli-build-project.md",id:"cli-build-project.md",isDocsHomePage:!1,title:"Build project",description:"MonsterJS CLI provides a command to compile the project for deployment.",source:"@site/docs\\cli-build-project.md",slug:"/build-project",permalink:"/docs/build-project",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/cli-build-project.md",version:"current",sidebar_label:"Build project",sidebar:"someSidebar",previous:{title:"Local development server",permalink:"/docs/local-development-server"},next:{title:"Generate commands",permalink:"/docs/cli-generate-commands"}},u=[{value:"Build command",id:"build-command",children:[]},{value:"Command options",id:"command-options",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MonsterJS CLI provides a command to compile the project for deployment.\nThe output of this build process is found in ",Object(o.b)("inlineCode",{parentName:"p"},"./build")," directory by default but can be changed based on the options when running the cli command to build the project. "),Object(o.b)("h2",{id:"build-command"},"Build command"),Object(o.b)("p",null,"To build the project we can run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mn build\n")),Object(o.b)("h2",{id:"command-options"},"Command options"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Option"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Value type"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"--env <value",">"),Object(o.b)("td",{parentName:"tr",align:null},"Build the project using the specified environment."),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"dev")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"--output <value",">"),Object(o.b)("td",{parentName:"tr",align:null},"The directory where it should output the bundles, assets and other files."),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"dist")))),Object(o.b)("p",null,"Ex."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mn build --env prod\n")))}b.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,s=b["".concat(l,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(s,c(c({ref:t},u),{},{components:n})):a.a.createElement(s,c({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);