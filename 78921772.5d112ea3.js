(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(95)),c={id:"cli-create-application.md",title:"Create application",sidebar_label:"Create application",slug:"/cli-create-application"},i={unversionedId:"cli-create-application.md",id:"cli-create-application.md",isDocsHomePage:!1,title:"Create application",description:"To create new application using CLI, we just need to run the following command.",source:"@site/docs\\cli-create-application.md",slug:"/cli-create-application",permalink:"/docs-v1/docs/cli-create-application",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/cli-create-application.md",version:"current",sidebar_label:"Create application",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs-v1/docs/cli-installation"},next:{title:"Generate commands",permalink:"/docs-v1/docs/cli-generate-commands"}},l=[{value:"Local development",id:"local-development",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To create new application using CLI, we just need to run the following command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mn new hello-world-app\n")),Object(o.b)("p",null,"The syntax of this command is ",Object(o.b)("inlineCode",{parentName:"p"},"mn new <application name>"),"."),Object(o.b)("p",null,"Running this command will generate a MonsterJS files needed to create an application and automatically install the npm packages.\nOnce the installation of the packages is complete, we now have a new MonsterJS application."),Object(o.b)("h2",{id:"local-development"},"Local development"),Object(o.b)("p",null,"To run a local development server for our project, we need to open a cli and change directory to the root of the project and run the following command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm start\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn start\n")),Object(o.b)("p",null,"After the command is done, we can now view our application by pointing our browsers to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:4000"}),"http://localhost:4000"),".\nThe port ",Object(o.b)("inlineCode",{parentName:"p"},"4000"),' can be changed by editing the entry in the package.json file under "scripts.start" script.'))}s.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);