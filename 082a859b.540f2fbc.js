(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||a;return n?i.a.createElement(f,c(c({ref:t},s),{},{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),i=(n(0),n(100));const a={id:"cli-what-is-cli.md",title:"What is MonsterJS CLI",sidebar_label:"What is MonsterJS CLI",slug:"/cli-what-is-cli"},o={unversionedId:"cli-what-is-cli.md",id:"cli-what-is-cli.md",isDocsHomePage:!1,title:"What is MonsterJS CLI",description:"The MonsterJS CLI is a command-line interface tool that we can use to create new project, generate MonsterJS files like components, modules, services and others.",source:"@site/docs\\cli-what-is-cli.md",slug:"/cli-what-is-cli",permalink:"/docs/cli-what-is-cli",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/cli-what-is-cli.md",version:"current",sidebar_label:"What is MonsterJS CLI",sidebar:"someSidebar",previous:{title:"Known issues",permalink:"/docs/known-issues"},next:{title:"Installation",permalink:"/docs/cli-installation"}},c=[{value:"Features",id:"features",children:[]}],l={rightToc:c};function s(e){let{components:t,...n}=e;return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The MonsterJS CLI is a command-line interface tool that we can use to create new project, generate MonsterJS files like components, modules, services and others.\nIt is not required to use CLI in building MonsterJS applications but we can get many advantages in using the CLI."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"./cli-create-application"},"Initialize a project")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"./cli-generate-commands"},"Generate files")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"./cli-useful-commands"},"Useful commands"))))}s.isMDXComponent=!0}}]);