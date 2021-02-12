(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{115:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(t),m=o,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return t?r.a.createElement(d,c(c({ref:n},l),{},{components:t})):r.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var o=t(3),r=t(7),a=(t(0),t(115)),i={id:"webpack",title:"Custom Webpack config"},c={unversionedId:"webpack",id:"webpack",isDocsHomePage:!1,title:"Custom Webpack config",description:"You can customize the Webpack configuration if you have at least Version 1.1 of Remotion.",source:"@site/docs/overwriting-webpack-config.md",slug:"/webpack",permalink:"/docs/webpack",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/overwriting-webpack-config.md",version:"current",sidebar:"someSidebar",previous:{title:"Using Fonts",permalink:"/docs/fonts"},next:{title:"Use <Img> and <IFrame> tags",permalink:"/docs/use-img-and-iframe"}},p=[{value:"Overriding the webpack config",id:"overriding-the-webpack-config",children:[]},{value:"Enabling MDX support",id:"enabling-mdx-support",children:[]},{value:"Customizing configuration file location",id:"customizing-configuration-file-location",children:[]}],l={toc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can customize the Webpack configuration if you have at least Version 1.1 of Remotion."),Object(a.b)("p",null,"Create a config file called ",Object(a.b)("inlineCode",{parentName:"p"},"remotion.config.ts")," in the root of your project. As a confirmation, you should get a console message ",Object(a.b)("inlineCode",{parentName:"p"},"Applied configuration from [configuration-file]"),"."),Object(a.b)("h2",{id:"overriding-the-webpack-config"},"Overriding the webpack config"),Object(a.b)("p",null,"Get familiar with the default Webpack configuration which can be ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/blob/main/packages/bundler/src/webpack-config.ts"}),"found here"),"."),Object(a.b)("p",null,"In your ",Object(a.b)("inlineCode",{parentName:"p"},"remotion.config.ts")," file, you can call ",Object(a.b)("inlineCode",{parentName:"p"},"overrideWebpackConfig")," from ",Object(a.b)("inlineCode",{parentName:"p"},"@remotion/bundler"),"."),Object(a.b)("p",null,"Overriding the Webpack config uses the reducer pattern - pass in a function that takes as it's argument a Webpack configuration and return a new Webpack configuration."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import {overrideWebpackConfig} from '@remotion/bundler';\n\noverrideWebpackConfig((currentConfiguration) => {\n  return {\n    ...currentConfiguration,\n    module: {\n      ...currentConfiguration.module,\n      rules: [\n        ...currentConfiguration.module.rules,\n        // Add more loaders here\n      ],\n    },\n  };\n});\n")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Using the reducer pattern will help with type safety, give you auto-complete, ensure forwards-compatibility and keep it completely flexible - you can override just one property or pass in a completely new Webpack configuration."))),Object(a.b)("h2",{id:"enabling-mdx-support"},"Enabling MDX support"),Object(a.b)("p",null,"The following ",Object(a.b)("inlineCode",{parentName:"p"},"remotion.config.ts")," file shows how to enable support for MDX. Installation of ",Object(a.b)("inlineCode",{parentName:"p"},"mdx-loader babel-loader @babel/preset-env @babel/preset-react")," is required."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import {overrideWebpackConfig} from '@remotion/bundler';\n\noverrideWebpackConfig((currentConfiguration) => {\n  return {\n    ...currentConfiguration,\n    module: {\n      ...currentConfiguration.module,\n      rules: [\n        ...currentConfiguration.module.rules,\n        {\n          test: /\\.mdx?$/,\n          use: [\n            {\n              loader: 'babel-loader',\n              options: {\n                presets: [\n                  '@babel/preset-env',\n                  [\n                    '@babel/preset-react',\n                    {\n                      runtime: 'automatic',\n                    },\n                  ],\n                ],\n              },\n            },\n            'mdx-loader',\n          ],\n        },\n      ],\n    },\n  };\n});\n")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Create a file which contains ",Object(a.b)("inlineCode",{parentName:"p"},"declare module '*.mdx';")," in your project to fix a TypeScript error showing up."))),Object(a.b)("h2",{id:"customizing-configuration-file-location"},"Customizing configuration file location"),Object(a.b)("p",null,"You can pass a ",Object(a.b)("inlineCode",{parentName:"p"},"--config")," option to the command line to specify a custom location for your configuration file."))}b.isMDXComponent=!0}}]);