(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(124)),o={id:"spring",title:"spring()"},c={unversionedId:"spring",id:"spring",isDocsHomePage:!1,title:"spring()",description:"Delightful and smooth animation primitive. Calculates a position based on physical parameters, start and end value, and time.",source:"@site/docs/spring.md",slug:"/spring",permalink:"/docs/spring",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/spring.md",version:"current",sidebar:"someSidebar",previous:{title:"registerRoot()",permalink:"/docs/register-root"},next:{title:"useCurrentFrame()",permalink:"/docs/use-current-frame"}},l=[{value:"Parameters",id:"parameters",children:[{value:"frame",id:"frame",children:[]},{value:"from",id:"from",children:[]},{value:"to",id:"to",children:[]},{value:"fps",id:"fps",children:[]},{value:"config",id:"config",children:[]}]},{value:"YouTube video",id:"youtube-video",children:[]},{value:"Credit",id:"credit",children:[]},{value:"See also",id:"see-also",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Delightful and smooth animation primitive. Calculates a position based on physical parameters, start and end value, and time."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const frame = useCurrentFrame()\nconst videoConfig = useVideoConfig()\n\nconst value = spring({\n  frame,\n  from: 0,\n  to: 1,\n  fps: videoConfig.fps,\n  config: {\n    stiffness: 100\n  }\n})\n")),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("h3",{id:"frame"},"frame"),Object(i.b)("p",null,"The current time value. Most of the time you want to pass in the return value of ",Object(i.b)("inlineCode",{parentName:"p"},"useCurrentFrame"),". The spring animation starts at frame 0, so if you would like to delay the animation, you can pass a different value like ",Object(i.b)("inlineCode",{parentName:"p"},"frame - 20"),"."),Object(i.b)("h3",{id:"from"},"from"),Object(i.b)("p",null,"The initial value of the animation."),Object(i.b)("h3",{id:"to"},"to"),Object(i.b)("p",null,"The end value of the animation. Note that depending on the parameters, spring animations may overshoot the target a bit, before they bounce back to their final target."),Object(i.b)("h3",{id:"fps"},"fps"),Object(i.b)("p",null,"For how many frames per second the spring animation should be calculated. This should always be the ",Object(i.b)("inlineCode",{parentName:"p"},"fps")," property of the return value of ",Object(i.b)("inlineCode",{parentName:"p"},"useVideoConfig()"),"."),Object(i.b)("h3",{id:"config"},"config"),Object(i.b)("p",null,"An optional object that allows you to customize the physical properties of the animation."),Object(i.b)("h4",{id:"mass"},"mass"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Default:")," ",Object(i.b)("inlineCode",{parentName:"p"},"1")),Object(i.b)("p",null,"The weight of the spring. If you reduce the mass, the animation becomes faster!"),Object(i.b)("h4",{id:"damping"},"Damping"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Default"),": ",Object(i.b)("inlineCode",{parentName:"p"},"10")),Object(i.b)("p",null,"How hard the animation decelerates."),Object(i.b)("h4",{id:"stiffness"},"Stiffness"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Default"),": ",Object(i.b)("inlineCode",{parentName:"p"},"100")),Object(i.b)("p",null,"Spring stiffness coefficient. Play with this one and it will affect how bouncy your animation is."),Object(i.b)("h4",{id:"overshootclamping"},"overshootClamping"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Default"),": ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Determines whether the animation can shoot over the ",Object(i.b)("inlineCode",{parentName:"p"},"to")," value. If set to true, if the animation goes over ",Object(i.b)("inlineCode",{parentName:"p"},"to"),", it will just return the value of ",Object(i.b)("inlineCode",{parentName:"p"},"to"),"."),Object(i.b)("h2",{id:"youtube-video"},"YouTube video"),Object(i.b)("p",null,"Want to understand the different properties like ",Object(i.b)("inlineCode",{parentName:"p"},"mass"),", ",Object(i.b)("inlineCode",{parentName:"p"},"stiffness"),", ",Object(i.b)("inlineCode",{parentName:"p"},"damping")," etc.? We made a video trying to make sense of all the parameters!"),Object(i.b)("p",null,"Watch: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://www.youtube.com/watch?v=GE8ZqrKqE5g"}),"The perfect spring animation"))),Object(i.b)("h2",{id:"credit"},"Credit"),Object(i.b)("p",null,"This function was taken from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-reanimated"}),"Reanimated 2"),", which in itself was a huge inspiration for Remotion."),Object(i.b)("h2",{id:"see-also"},"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"interpolate"}),"interpolate"))))}s.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);