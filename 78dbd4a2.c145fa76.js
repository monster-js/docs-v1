(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),a=(t(0),t(95));const i={id:"list-rendering.md",title:"List rendering",sidebar_label:"List rendering",slug:"/list-rendering"},o={unversionedId:"list-rendering.md",id:"list-rendering.md",isDocsHomePage:!1,title:"List rendering",description:"List rendering directive allows developers to render a list of element based on the given array of data.",source:"@site/docs\\list-rendering.md",slug:"/list-rendering",permalink:"/docs/list-rendering",editUrl:"https://github.com/monster-js/docs-v1/blob/master/docs/list-rendering.md",version:"current",sidebar_label:"List rendering",sidebar:"someSidebar",previous:{title:"Services",permalink:"/docs/services"},next:{title:"Conditional rendering",permalink:"/docs/conditional-rendering"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Using list rendering",id:"using-list-rendering",children:[]},{value:"List item name",id:"list-item-name",children:[]},{value:"List index",id:"list-index",children:[]},{value:"Update event",id:"update-event",children:[]}],c={rightToc:l};function s(e){let{components:n,...t}=e;return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"List rendering directive allows developers to render a list of element based on the given array of data."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"The syntax of list rendering directive is ",Object(a.b)("inlineCode",{parentName:"p"},"v:for={<array>}"),"."),Object(a.b)("h2",{id:"using-list-rendering"},"Using list rendering"),Object(a.b)("p",null,"Here's an example on how to use list rendering."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n\n    array = [1, 2, 3];\n\n    render() {\n        return <p v:for={this.array}>Hello World!</p>\n    }\n}\n")),Object(a.b)("p",null,"The example code above will generate a list of elements that looks like the following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},"<p>Hello World!</p>\n<p>Hello World!</p>\n<p>Hello World!</p>\n")),Object(a.b)("p",null,"Three ",Object(a.b)("inlineCode",{parentName:"p"},"<p>")," tags since there are three elements inside ",Object(a.b)("inlineCode",{parentName:"p"},"this.array"),"."),Object(a.b)("h2",{id:"list-item-name"},"List item name"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'v:for-item="<item name>"')),Object(a.b)("p",null,"It allows developers to set the variable name of the list item and display it in view.\nIf no list item directive is provided, it is ",Object(a.b)("inlineCode",{parentName:"p"},"$item")," by default."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n\n    array = ['foo', 'bar', 'bazz'];\n\n    render() {\n        return <p v:for={this.array} v:for-item=\"listItem\">Hello {listItem}!</p>\n    }\n}\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The codes above might throw a typescript linter error ",Object(a.b)("inlineCode",{parentName:"p"},"Cannot find name 'listItem'")," since ",Object(a.b)("inlineCode",{parentName:"p"},"listItem")," is not defined.\nA temporary fix for this is to declare the list item above our component and below the import statements list the following."),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"declare const listItem: string;\n")))),Object(a.b)("p",null,"The example code above will generate a list of elements that looks like the following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},"<p>Hello foo!</p>\n<p>Hello bar!</p>\n<p>Hello bazz!</p>\n")),Object(a.b)("h2",{id:"list-index"},"List index"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'v:for-index="<index name>"')),Object(a.b)("p",null,"It allows developers to set the variable name of the list item index.\nIf no list index directive is provided, it is ",Object(a.b)("inlineCode",{parentName:"p"},"$index")," by default."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n\n    array = ['foo', 'bar', 'bazz'];\n\n    render() {\n        return <p v:for={this.array} v:for-index=\"listIndex\">Hello {listIndex}!</p>\n    }\n}\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The codes above might throw a typescript linter error ",Object(a.b)("inlineCode",{parentName:"p"},"Cannot find name 'listIndex'")," since ",Object(a.b)("inlineCode",{parentName:"p"},"listIndex")," is not defined.\nA temporary fix for this is to declare the list item above our component and below the import statements list the following."),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"declare const listIndex: number;\n")))),Object(a.b)("p",null,"The example code above will generate a list of elements that looks like the following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},"<p>Hello 0!</p>\n<p>Hello 1!</p>\n<p>Hello 2!</p>\n")),Object(a.b)("h2",{id:"update-event"},"Update event"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"v:for-update={<callback function>}")),Object(a.b)("p",null,"List rendering is able to trigger an event if there is a change in the length of the array."),Object(a.b)("p",null,"Ex."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@monster-js/core';\n\n@Component('app-greeting')\nexport class Greeting {\n\n    array = [1, 2, 3];\n\n    arrayLengthUpdated() {\n        console.log('array length is updated');\n    }\n\n    render() {\n        return <p v:for={this.array} v:for-update={this.arrayLengthUpdated}>Hello World!</p>\n    }\n}\n")))}s.isMDXComponent=!0},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return t?a.a.createElement(u,l(l({ref:n},s),{},{components:t})):a.a.createElement(u,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);