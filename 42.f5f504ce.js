(window.webpackJsonp=window.webpackJsonp||[]).push([[42,43],{111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(107);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},132:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),l};e.exports=a,e.exports.default=a},133:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],l=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=l);for(var c=n;c!=r;c+=l)o.push(c);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},97:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(99),l=n(100),c=n(22),s=n(107),i=n(2),u=n(101),p=n(114),m=n(116),d=n(117),y=n(118),h=n(115),f=n(102),b=n(104),g=n(57),v=n.n(g);const k=(e,t)=>"link"===e.type?((e,t)=>{const n=e=>e.endsWith("/")?e:e+"/";return n(e)===n(t)})(e.href,t):"category"===e.type&&e.items.some(e=>k(e,t));function j(e){let{item:t,onItemClick:n,collapsible:o,activePath:l,...c}=e;const{items:s,label:p}=t,m=k(t,l),d=function(e){const t=Object(a.useRef)(e);return Object(a.useEffect)(()=>{t.current=e},[e]),t.current}(m),[y,h]=Object(a.useState)(()=>!!o&&(!m&&t.collapsed));Object(a.useEffect)(()=>{m&&!d&&y&&h(!1)},[m,d,y]);const f=Object(a.useCallback)(e=>{e.preventDefault(),h(e=>!e)},[h]);return 0===s.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":y}),key:p},r.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":o,"menu__link--active":o&&m,[v.a.menuLinkText]:!o}),onClick:o?f:void 0,href:o?"#!":void 0},c),p),r.a.createElement("ul",{className:"menu__list"},s.map(e=>r.a.createElement(E,{tabIndex:y?"-1":"0",key:e.label,item:e,onItemClick:n,collapsible:o,activePath:l}))))}function O(e){let{item:t,onItemClick:n,activePath:a,collapsible:o,...l}=e;const{href:c,label:s}=t,p=k(t,a);return r.a.createElement("li",{className:"menu__list-item",key:s},r.a.createElement(f.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":p}),to:c},Object(b.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},l),s))}function E(e){switch(e.item.type){case"category":return r.a.createElement(j,e);case"link":default:return r.a.createElement(O,e)}}var N=function(e){let{path:t,sidebar:n,sidebarCollapsible:o=!0}=e;const[c,s]=Object(a.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:b="",hideOnScroll:g=!1}={}}={}}={},isClient:k}=Object(l.a)(),{logoLink:j,logoLinkProps:O,logoImageUrl:N,logoAlt:C}=Object(y.a)(),{isAnnouncementBarClosed:w}=Object(p.a)(),{scrollY:x}=Object(h.a)();Object(m.a)(c);const P=Object(d.a)();return Object(a.useEffect)(()=>{P===d.b.desktop&&s(!1)},[P]),r.a.createElement("div",{className:Object(u.a)(v.a.sidebar,{[v.a.sidebarWithHideableNavbar]:g})},g&&r.a.createElement(f.a,Object(i.a)({tabIndex:-1,className:v.a.sidebarLogo,to:j},O),null!=N&&r.a.createElement("img",{key:k,src:N,alt:C}),null!=b&&r.a.createElement("strong",null,b)),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive",v.a.menu,{"menu--show":c,[v.a.menuWithAnnouncementBar]:!w&&0===x})},r.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!c)}},c?r.a.createElement("span",{className:Object(u.a)(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},n.map(e=>r.a.createElement(E,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:o,activePath:t})))))},C={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},w={Prism:n(20).a,theme:C};function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var _=/\r\n|\r|\n/,T=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},L=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=P({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=P({},n,{backgroundColor:null}),r};function D(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var I=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),x(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?L(e.theme,e.language):void 0;return t.themeDict=n})),x(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=P({},D(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?P({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),x(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),x(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=P({},D(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?P({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],s=[c];l>-1;){for(;(o=a[l]++)<r[l];){var i=void 0,u=t[l],p=n[l][o];if("string"==typeof p?(u=l>0?u:["plain"],i=p):(u=S(u,p.type),p.alias&&(u=S(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(_),d=m.length;c.push({types:u,content:m[0]});for(var y=1;y<d;y++)T(c),s.push(c=[]),c.push({types:u,content:m[y]})}else l++,t.push(u),n.push(i),a.push(0),r.push(i.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return T(c),s}(void 0!==l?t.tokenize(a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),B=n(132),M=n.n(B),A=n(133),$=n.n(A),R={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},F=n(109);var W=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(l.a)(),{isDarkTheme:t}=Object(F.a)(),n=e.theme||R,a=e.darkTheme||n;return t?a:n},z=n(58),J=n.n(z);const U=/{([\d,-]+)}/,H=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map(e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},X=/title=".*"/;var Y=e=>{let{children:t,className:n,metastring:o}=e;const{siteConfig:{themeConfig:{prism:c={}}}}=Object(l.a)(),[s,p]=Object(a.useState)(!1),[m,d]=Object(a.useState)(!1);Object(a.useEffect)(()=>{d(!0)},[]);const y=Object(a.useRef)(null);let h=[],f="";const b=W();if(o&&U.test(o)){const e=o.match(U)[1];h=$.a.parse(e).filter(e=>e>0)}o&&X.test(o)&&(f=o.match(X)[0].split("title=")[1].replace(/"+/g,""));let g=n&&n.replace(/language-/,"");!g&&c.defaultLanguage&&(g=c.defaultLanguage);let v=t.replace(/\n$/,"");if(0===h.length&&void 0!==g){let e="";const n=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return H(["js","jsBlock"]);case"jsx":case"tsx":return H(["js","jsBlock","jsx"]);case"html":return H(["js","jsBlock","html"]);case"python":case"py":return H(["python"]);default:return H()}})(g),a=t.replace(/\n$/,"").split("\n");let r;for(let t=0;t<a.length;){const o=t+1,l=a[t].match(n);if(null!==l){switch(l.slice(1).reduce((e,t)=>e||t,void 0)){case"highlight-next-line":e+=o+",";break;case"highlight-start":r=o;break;case"highlight-end":e+=`${r}-${o-1},`}a.splice(t,1)}else t+=1}h=$.a.parse(e),v=a.join("\n")}const k=()=>{M()(v),p(!0),setTimeout(()=>p(!1),2e3)};return r.a.createElement(I,Object(i.a)({},w,{key:String(m),theme:b,code:v,language:g}),e=>{let{className:t,style:n,tokens:a,getLineProps:o,getTokenProps:l}=e;return r.a.createElement(r.a.Fragment,null,f&&r.a.createElement("div",{style:n,className:J.a.codeBlockTitle},f),r.a.createElement("div",{className:J.a.codeBlockContent},r.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(u.a)(J.a.copyButton,{[J.a.copyButtonWithTitle]:f}),onClick:k},s?"Copied":"Copy"),r.a.createElement("div",{tabIndex:0,className:Object(u.a)(t,J.a.codeBlock,{[J.a.codeBlockWithTitle]:f})},r.a.createElement("div",{className:J.a.codeBlockLines,style:n},a.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return h.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(i.a)({key:t},n),e.map((e,t)=>r.a.createElement("span",Object(i.a)({key:t},l({token:e,key:t})))))})))))})},q=(n(59),n(60)),G=n.n(q);var K=e=>function(t){let{id:n,...a}=t;const{siteConfig:{themeConfig:{navbar:{hideOnScroll:o=!1}={}}={}}={}}=Object(l.a)();return n?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",{[G.a.enhancedAnchor]:!o}),id:n}),a.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):r.a.createElement(e,a)},Q=n(61),V=n.n(Q);var Z={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(Y,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(f.a,e),pre:e=>r.a.createElement("div",Object(i.a)({className:V.a.mdxCodeBlock},e)),h1:K("h1"),h2:K("h2"),h3:K("h3"),h4:K("h4"),h5:K("h5"),h6:K("h6")},ee=n(111),te=n(105),ne=n(108),ae=n(62),re=n.n(ae);function oe(e){let{version:t,isLast:n}=e;const a=n?[t,"latest"]:[t];return r.a.createElement(ne.a,null,r.a.createElement("meta",{name:"docsearch:version",content:a.join(",")}))}function le(e){var t,n;let{currentDocRoute:a,versionMetadata:c,children:i}=e;const{siteConfig:u,isClient:p}=Object(l.a)(),{permalinkToSidebar:m,docsSidebars:d,version:y,isLast:h}=c,f=d[m[a.path]];return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,{version:y,isLast:h}),r.a.createElement(s.a,{key:p},r.a.createElement("div",{className:re.a.docPage},f&&r.a.createElement("div",{className:re.a.docSidebarContainer,role:"complementary"},r.a.createElement(N,{sidebar:f,path:a.path,sidebarCollapsible:null===(t=null===(n=u.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:re.a.docMainContainer},r.a.createElement(o.a,{components:Z},i)))))}t.default=function(e){const{route:{routes:t},versionMetadata:n,location:a}=e,o=t.find(e=>Object(te.matchPath)(a.pathname,e));return o?r.a.createElement(le,{currentDocRoute:o,versionMetadata:n},Object(c.a)(t)):r.a.createElement(ee.default,e)}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(y,c(c({ref:t},i),{},{components:n})):r.a.createElement(y,c({ref:t},i))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);