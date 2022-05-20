(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(94));const o={id:"quick-start.md",title:"Quick start",sidebar_label:"Quick start",slug:"/quick-start"},c={unversionedId:"quick-start.md",id:"quick-start.md",isDocsHomePage:!1,title:"Quick start",description:"There are many ways to setup a MonsterJS project.",source:"@site/docs\\quick-start.md",slug:"/quick-start",permalink:"/docs-v1/docs/quick-start",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/quick-start.md",version:"current",sidebar_label:"Quick start",sidebar:"someSidebar",previous:{title:"What is MonsterJS?",permalink:"/docs-v1/docs/"},next:{title:"Component",permalink:"/docs-v1/docs/component"}},i=[{value:"Create app",id:"create-app",children:[]},{value:"Project structure",id:"project-structure",children:[]}],s={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are many ways to setup a MonsterJS project.\nOne way is to use the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./cli-what-is-cli"}),"CLI")," but the easiest way is to clone the starter app from ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/monster-js/starter-app"}),"GitHub"),"."),Object(a.b)("h2",{id:"create-app"},"Create app"),Object(a.b)("p",null,"Clone the starter app from ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/monster-js/starter-app"}),"GitHub"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/monster-js/starter-app.git monster-app\n")),Object(a.b)("p",null,"After cloning the repository, change directory into the starter project"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd monster-app\n")),Object(a.b)("p",null,"then install the dependencies"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(a.b)("p",null,"Start the local development server by running the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm start\n")),Object(a.b)("p",null,"Now we can view our app by pointing our browsers to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:4000"}),"http://localhost:4000")),Object(a.b)("h2",{id:"project-structure"},"Project structure"),Object(a.b)("p",null,"After the setup is complete, you can see the file structure of project in the current directory."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),".monster\n    \u251c\u2500\u2500 monster.json\n    \u2514\u2500\u2500 webpack.config.js\nnode_modules\nsrc\n    \u2514\u2500\u2500 app\n        \u251c\u2500\u2500 app.component.tsx\n        \u251c\u2500\u2500 app.module.ts\n        \u2514\u2500\u2500 app.style.scss\n    \u251c\u2500\u2500 assets\n    \u2514\u2500\u2500 environments\n        \u251c\u2500\u2500 dev.json\n        \u2514\u2500\u2500 prod.json\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 styles.scss\n    \u2514\u2500\u2500 types.d.ts\n.babelrc\npackage.json\ntsconfig.json\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".monster"),"                    Contains the configurations needed for MonsterJS project."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".monster/monster.json"),"       The configuration for MonsterJS project. Usually used by the CLI."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".monster/webpack.config.js"),"  The configuration for webpack module bundler."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"node_modules/"),"               This is where the installed node packages are located."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/"),"                        A directory that contains the source code and assets of your application."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/app/"),"                    This is where the codes related to application is located"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/app/app.component.tsx"),"   Contains the ts codes of the root component. Any other components must be a child of this component."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/app/app.module.ts"),"       The root module of the application."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/app/app.styles.scss"),"     Contains the css codes of the root component."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/assets/"),"                 This is the recommended directory to put all of the asset files."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/environments/"),"           Contains the different environment files for the project."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/environments/dev.json"),"   The development environment of the project."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/environments/prod.json"),"  The production environment of the project."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/index.html"),"              The main HTML page that is served when someone visits your application."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/index.ts"),"                The main entry point of your application. It bootstrap the root module of the entire project."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/styles.scss"),"             Contains the global styles of the application."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"src/types.d.ts"),"              Interfaces to override the default types."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".babelrc"),"                    Configuration for babel."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"package.json"),"                All the dependencies and configurations of your project."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"tsconfig.json"),"               The typescript configuration file.")))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);