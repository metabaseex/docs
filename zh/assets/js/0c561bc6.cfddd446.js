"use strict";(self.webpackChunkindexdoc=self.webpackChunkindexdoc||[]).push([[923],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:e},s),{},{components:n})):r.createElement(f,a({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5119:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_label:"Staking\u8d28\u62bc\u6316\u77ff",hide_title:!0,sidebar_position:3,title:"Inswap Staking\u8d28\u62bc\u6316\u77ff"},p=void 0,l={unversionedId:"protocol/staking",id:"protocol/staking",isDocsHomePage:!1,title:"Inswap Staking\u8d28\u62bc\u6316\u77ff",description:"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/protocol/3_staking.md",sourceDirName:"protocol",slug:"/protocol/staking",permalink:"/docs/zh/protocol/staking",editUrl:"https://github.com/inswapex/docs/edit/master/docs/protocol/3_staking.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Staking\u8d28\u62bc\u6316\u77ff",hide_title:!0,sidebar_position:3,title:"Inswap Staking\u8d28\u62bc\u6316\u77ff"},sidebar:"someSidebar",previous:{title:"IDO\u4f17\u7b79\u53d1\u884c",permalink:"/docs/zh/protocol/ido"},next:{title:"POS\u6d3b\u671f\u6316\u77ff",permalink:"/docs/zh/protocol/pos"}},s=[{value:"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff",id:"\u5f00\u653e\u5f0fstaking\u8d28\u62bc\u6316\u77ff",children:[]}],u={toc:s};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u5f00\u653e\u5f0fstaking\u8d28\u62bc\u6316\u77ff"},"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff"),(0,i.kt)("p",null,"\u4efb\u610f\u7528\u6237\u53ef\u4ee5\u521b\u5efaStaking\u6316\u77ff\u6c60\uff0cStaking\u6316\u77ff\u6c60\u9700\u652f\u4ed8\u4e00\u5b9a\u5e73\u53f0\u5e01\uff0c\u65b9\u53ef\u521b\u5efa\u3002"),(0,i.kt)("p",null,"Staking\u6c60\u53ef\u5206\u4e3aLP\u6c60\u3001\u666e\u901a\u6c60\u3002LP\u6c60\u901a\u8fc7\u8d28\u62bc\u6307\u5b9a\u4ee3\u5e01\u53ef\u5956\u52b1\u5e73\u53f0\u5e01\u6216\u5176\u4ed6\u5e01\u79cd\u3002\u7528\u6237\u81ea\u884c\u521b\u7acb\u7684Staking\u6c60\uff0c\u53ef\u5956\u52b1\u8be5\u6c60\u7684\u672c\u5e01\u6216\u4e3b\u6d41\u5e01\uff08ETH\u3001USDT\u3001USDC\u3001DAI\u7b49\uff09\uff0c\u521b\u7acb\u8005\u65e0\u6743\u52a8\u7528\u6c60\u5185\u8d44\u91d1\uff0c\u786e\u4fdd\u7528\u6237\u8d44\u91d1\u5b89\u5168\u3002    "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Staking\u5956\u52b1\u8d44\u91d1\u4e00\u65e6\u521b\u5efa\uff0c\u53ea\u80fd\u589e\u52a0\u6c60\u5185\u5956\u52b1\u91d1\uff0c\u4e0d\u80fd\u9000\u56de\uff0c\u786e\u4fdd\u7528\u6237\u6536\u76ca"),"\u3002"),(0,i.kt)("p",null,"\u521b\u5efaStaking\u6c60\u7684\u89c4\u5219,\u53ef\u5728\u521b\u5efaStaking\u6c60\u9875\u9762\u67e5\u770b\u8be6\u7ec6\u89c4\u5219\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Staking\u5bf9\u4e8e\u9879\u76ee\u65b9\u548c\u7528\u6237\u90fd\u662f\u65e0\u98ce\u9669\u7684,\u5c5e\u4e8e\u4fdd\u672c\u56fa\u5b9a\u6536\u76ca\u3002"))))}d.isMDXComponent=!0}}]);