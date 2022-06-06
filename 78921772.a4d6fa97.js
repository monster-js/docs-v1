(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(100));const o={id:"cli-create-application.md",title:"Create application",sidebar_label:"Create application",slug:"/cli-create-application"},c={unversionedId:"cli-create-application.md",id:"cli-create-application.md",isDocsHomePage:!1,title:"Create application",description:"To create new application using CLI, we just need to run the following command.",source:"@site/docs\\cli-create-application.md",slug:"/cli-create-application",permalink:"/docs/cli-create-application",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/cli-create-application.md",version:"current",sidebar_label:"Create application",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/cli-installation"},next:{title:"Local development server",permalink:"/docs/local-development-server"}},i=[{value:"Local development",id:"local-development",children:[]}],l={rightToc:i};function p(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To create new application using CLI, we just need to run the following command."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"mn new hello-world-app\n")),Object(a.b)("p",null,"The syntax of this command is ",Object(a.b)("inlineCode",{parentName:"p"},"mn new <application name>"),"."),Object(a.b)("p",null,"Running this command will generate a MonsterJS files needed to create an application and automatically install the npm packages.\nOnce the installation of the packages is complete, we now have a new MonsterJS application."),Object(a.b)("h2",{id:"local-development"},"Local development"),Object(a.b)("p",null,"To run a local development server for our project, we need to open a cli and change directory to the root of the project and run the following command."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),Object(a.b)("p",null,"After the command is done, we can now view our application by pointing our browsers to ",Object(a.b)("a",{parentName:"p",href:"http://localhost:4000"},"http://localhost:4000"),".\nThe port ",Object(a.b)("inlineCode",{parentName:"p"},"4000"),' can be changed by editing the entry in the package.json file under "scripts.start" script.'))}p.isMDXComponent=!0}}]);