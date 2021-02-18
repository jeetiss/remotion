(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(a,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),i=(n(0),n(124)),a={slug:"1-1",title:"Remotion 1.1",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},c={permalink:"/blog/1-1",editUrl:"https://github.com/Jonnyburger/remotion/edit/main/packages/docs/blog/blog/2021-02-11-remotion1-1.md",source:"@site/blog/2021-02-11-remotion1-1.md",description:"What an extraordinary launch! In less than 24 hours, the Remotion announcement video has gotten more than 100'000 views on Twitter. The feedback was absolutely overwhelming!",date:"2021-02-11T00:00:00.000Z",tags:[],title:"Remotion 1.1",readingTime:1.96,truncated:!1,prevItem:{title:"Remotion 1.2",permalink:"/blog/1-2"},nextItem:{title:"Introducing Remotion",permalink:"/blog/introducing-remotion"}},u=[{value:"Customizing Webpack configuration",id:"customizing-webpack-configuration",children:[]},{value:"New <code>&lt;Img /&gt;</code> and <code>&lt;IFrame /&gt;</code> components",id:"new-img--and-iframe--components",children:[{value:"Bonus: ESLint rule",id:"bonus-eslint-rule",children:[]}]},{value:"Upgrading is easy",id:"upgrading-is-easy",children:[]}],l={toc:u};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"What an extraordinary launch! In less than 24 hours, the Remotion announcement video has gotten more than 100'000 views on Twitter. The feedback was absolutely overwhelming!"),Object(i.b)("p",null,"Now it's time to iterate and make Remotion better. This release contains two new features: Customizing the Webpack configuration and new ",Object(i.b)("inlineCode",{parentName:"p"},"<Img>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"</IFrame>")," components!"),Object(i.b)("h2",{id:"customizing-webpack-configuration"},"Customizing Webpack configuration"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(o.a)({parentName:"strong"},{href:"/docs/webpack"}),"See docs"))),Object(i.b)("p",null,"People had wild ideas on what to do with Remotion like importing MDX files or using React Native components. Now it is possible!"),Object(i.b)("p",null,"When providing the possibility on how to configure Remotion, it was of big importance to provide both a high degree of flexibility and a good developer experience. This is how you update the webpack config:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"remotion.config.ts")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import {overrideWebpackConfig} from '@remotion/bundler';\n\noverrideWebpackConfig((currentConfiguration) => {\n  return {\n    ...currentConfiguration,\n    module: {\n      ...currentConfiguration.module,\n      rules: [\n        ...currentConfiguration.module.rules,\n        // Add more loaders here\n      ],\n    },\n  };\n});\n")),Object(i.b)("p",null,"There is a new Remotion config file, that you can write in Typescript. Updating the Webpack config uses the ",Object(i.b)("strong",{parentName:"p"},"reducer pattern"),": You get the default configuration and it is your responsibility to return an updated Webpack config. You get type checking, auto completion and the flexibility to either only update a single property or pass in a completely new configuration. No black magic here - since this is just a pure function, the outcome will be very predictable."),Object(i.b)("h2",{id:"new-img--and-iframe--components"},"New ",Object(i.b)("inlineCode",{parentName:"h2"},"<Img />")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"<IFrame />")," components"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(o.a)({parentName:"strong"},{href:"/docs/use-img-and-iframe"}),"See docs"))),Object(i.b)("p",null,"The purpose of these new components is to help with something that is easy to overlook in Remotion: Images or Iframes are being rendered, but Remotion does not wait until the loading of these network resources are complete. The result: Flicker in the end result! The correct thing is ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/data-fetching#telling-remotion-to-wait-until-the-data-is-loaded"}),"to wait using the ",Object(i.b)("inlineCode",{parentName:"a"},"delayRender")," API"),", but this is not very obvious. Now Remotion comes with built-in components that will wait until assets are loaded."),Object(i.b)("h3",{id:"bonus-eslint-rule"},"Bonus: ESLint rule"),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1629785/107443059-62829e00-6b38-11eb-9d0e-fb12b68fa2a9.png",alt:"ESLint rule 'warn-native-media-tag'"}))),Object(i.b)("p",null,"To prevent shooting yourself into your foot, Remotion now comes with an ESLint rule that warns if you use the native ",Object(i.b)("inlineCode",{parentName:"p"},"<img>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<iframe>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<video>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"<audio>")," tags. These tags work better when you use the Remotion-wrapped versions instead."),Object(i.b)("h2",{id:"upgrading-is-easy"},"Upgrading is easy"),Object(i.b)("p",null,"Simply type"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-console"}),"npm run upgrade\n")),Object(i.b)("p",null,"in your project and you'll get all the newest Remotion packages! Maybe you also noticed that there is a banner in the editor that notifies you when an upgrade is available."))}s.isMDXComponent=!0}}]);