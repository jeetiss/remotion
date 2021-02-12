(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,f=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(115)),i={title:"Using Fonts",id:"fonts"},c={unversionedId:"fonts",id:"fonts",isDocsHomePage:!1,title:"Using Fonts",description:"You can use fonts by loading them in a CSS file using @font-face. Web fonts often ship with a css file declaring the fonts, which you can import using the @import statement.",source:"@site/docs/using-fonts.md",slug:"/fonts",permalink:"/docs/fonts",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/using-fonts.md",version:"current",sidebar:"someSidebar",previous:{title:"Importing assets",permalink:"/docs/assets"},next:{title:"Custom Webpack config",permalink:"/docs/webpack"}},s=[{value:"Example using Google Web Fonts",id:"example-using-google-web-fonts",children:[]},{value:"Example using local fonts",id:"example-using-local-fonts",children:[]},{value:"File requirements",id:"file-requirements",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can use fonts by loading them in a CSS file using @font-face. Web fonts often ship with a css file declaring the fonts, which you can import using the ",Object(a.b)("inlineCode",{parentName:"p"},"@import")," statement."),Object(a.b)("h2",{id:"example-using-google-web-fonts"},"Example using Google Web Fonts"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"font.css"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-css"}),'@import url("https://fonts.googleapis.com/css2?family=Bangers");\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MyComp.tsx"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import './font.css'\n\nconst MyComp: React.FC = () => {\n  return (\n    <div style={{fontFamily: 'Bangers'}}>Hello</div>\n  )\n}\n")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Google Web Fonts by default appends ",Object(a.b)("inlineCode",{parentName:"p"},"?display=swap")," to their URLs. Make sure to remove it to ensure the video renders correctly if you have a slow internet connection."))),Object(a.b)("h2",{id:"example-using-local-fonts"},"Example using local fonts"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"font.css"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-css"}),'@font-face {\n  font-family: "Bangers";\n  font-style: normal;\n  font-weight: 400;\n  src: url(./bangers.woff2) format("woff2");\n}\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MyComp.tsx"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import './font.css'\n\nconst MyComp: React.FC = () => {\n  return (\n    <div style={{fontFamily: 'Bangers'}}>Hello</div>\n  )\n}\n")),Object(a.b)("h2",{id:"file-requirements"},"File requirements"),Object(a.b)("p",null,"Fonts must have a ",Object(a.b)("inlineCode",{parentName:"p"},".woff")," or ",Object(a.b)("inlineCode",{parentName:"p"},".woff2")," file extension to be loaded."))}p.isMDXComponent=!0}}]);