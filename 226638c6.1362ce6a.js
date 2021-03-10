(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{131:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),m=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=m(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=m(t),d=a,u=b["".concat(o,".").concat(d)]||b[d]||l[d]||r;return t?i.a.createElement(u,c(c({ref:n},p),{},{components:t})):i.a.createElement(u,c({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return m}));var a=t(3),i=t(7),r=(t(0),t(131)),o={id:"assets",title:"Importing assets"},c={unversionedId:"assets",id:"assets",isDocsHomePage:!1,title:"Importing assets",description:"Remotion allows you to include several types of files in your project:",source:"@site/docs/importing-assets.md",slug:"/assets",permalink:"/docs/assets",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/importing-assets.md",version:"current",sidebar:"someSidebar",previous:{title:"Server-Side Rendering",permalink:"/docs/ssr"},next:{title:"Using Fonts",permalink:"/docs/fonts"}},s=[{value:"Using images",id:"using-images",children:[]},{value:"Using image sequences",id:"using-image-sequences",children:[]},{value:"Using videos",id:"using-videos",children:[]},{value:"Using Audio",id:"using-audio",children:[]},{value:"Using fonts",id:"using-fonts",children:[]}],p={toc:s};function m(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Remotion allows you to include several types of files in your project:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Images (",Object(r.b)("inlineCode",{parentName:"li"},".png"),", ",Object(r.b)("inlineCode",{parentName:"li"},".svg"),", ",Object(r.b)("inlineCode",{parentName:"li"},".jpg"),", ",Object(r.b)("inlineCode",{parentName:"li"},".jpeg"),", ",Object(r.b)("inlineCode",{parentName:"li"},".webp"),", ",Object(r.b)("inlineCode",{parentName:"li"},".gif"),", ",Object(r.b)("inlineCode",{parentName:"li"},".bmp"),")"),Object(r.b)("li",{parentName:"ul"},"Videos (",Object(r.b)("inlineCode",{parentName:"li"},".webm"),", ",Object(r.b)("inlineCode",{parentName:"li"},".mp4"),")"),Object(r.b)("li",{parentName:"ul"},"Audio (",Object(r.b)("inlineCode",{parentName:"li"},".mp3"),", ",Object(r.b)("inlineCode",{parentName:"li"},".wav"),", ",Object(r.b)("inlineCode",{parentName:"li"},".aac"),"), preview only"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/fonts"}),"Fonts (",Object(r.b)("inlineCode",{parentName:"a"},".woff")," and ",Object(r.b)("inlineCode",{parentName:"a"},".woff2"),") - read the separate page for fonts"))),Object(r.b)("h2",{id:"using-images"},"Using images"),Object(r.b)("p",null,"Require images using an ",Object(r.b)("inlineCode",{parentName:"p"},"import")," statement"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import logo from './logo.png'\n\nexport const MyComp: React.FC = () => {\n  return (\n    <img src={logo} />\n  )\n}\n")),Object(r.b)("h2",{id:"using-image-sequences"},"Using image sequences"),Object(r.b)("p",null,"If you have a series of images, for example exported from another program like After Effects or Rotato, you can use a dynamic ",Object(r.b)("inlineCode",{parentName:"p"},"require")," statement to import the images as they are needed."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {useCurrentFrame} from 'remotion';\n\n/*\n  Assuming your file structure is:\n  assets/\n    frame1.png\n    frame2.png\n    frame3.png\n    ...\n*/\n\nconst MyComp: React.FC = () => {\n  const frame = useCurrentFrame();\n  const src = require('./assets/frame' + frame + '.png');\n\n  return (\n    <img src={src} />\n  )\n}\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Avoid writing a require statement that requires a file that doesn't exist. If your project throws an error because your composition is longer than than your image sequence, clamp the file name using ",Object(r.b)("inlineCode",{parentName:"p"},"Math.min()")," or Remotion's ",Object(r.b)("inlineCode",{parentName:"p"},"interpolate()"),"."))),Object(r.b)("h2",{id:"using-videos"},"Using videos"),Object(r.b)("p",null,"Import your files using an import statement. Use the [",Object(r.b)("inlineCode",{parentName:"p"},"<Video />"),"/docs/video) component to keep the timeline and your video in sync."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {Video} from 'remotion';\nimport vid from './vid.webm'\n\nexport const MyComp: React.FC = () => {\n  return (\n    <Video src={vid} />\n  );\n}\n")),Object(r.b)("p",null,"Be aware that if you are rendering using Chromium (as opposed to Chrome), the codec for MP4 videos is not included. Read the section on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/video#codec-support"}),Object(r.b)("inlineCode",{parentName:"a"},"<Video/ >"))," page for more information."),Object(r.b)("h2",{id:"using-audio"},"Using Audio"),Object(r.b)("p",null,"Import your audio using an ",Object(r.b)("inlineCode",{parentName:"p"},"@import")," statement and pass it to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/audio"}),Object(r.b)("inlineCode",{parentName:"a"},"<Audio/ >"))," component."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {Audio} from 'remotion';\nimport tune from './tune.mp3'\n\nexport const MyComp: React.FC = () => {\n  return (\n    <Audio src={tune} />\n  );\n}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Audio is experimental and is currently only playing in the preview, not in the final video."))),Object(r.b)("h2",{id:"using-fonts"},"Using fonts"),Object(r.b)("p",null,"See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/fonts"}),"dedicated page about fonts"),"."))}m.isMDXComponent=!0}}]);