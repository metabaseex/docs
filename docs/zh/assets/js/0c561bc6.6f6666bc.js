"use strict";(self.webpackChunkindexdoc=self.webpackChunkindexdoc||[]).push([[923],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5119:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_label:"Staking",title:"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff",sidebar_position:3},l=void 0,u={unversionedId:"protocol/staking",id:"protocol/staking",isDocsHomePage:!1,title:"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff",description:"\u4efb\u610f\u7528\u6237\u53ef\u4ee5\u521b\u5efaStaking\u6316\u77ff\u6c60\uff0cStaking\u6316\u77ff\u6c60\u9700\u652f\u4ed8\u4e00\u5b9a\u5e73\u53f0\u5e01\uff0c\u65b9\u53ef\u521b\u5efa\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/protocol/3_staking.md",sourceDirName:"protocol",slug:"/protocol/staking",permalink:"/docs/zh/protocol/staking",editUrl:"https://github.com/inswapex/docs/edit/master/docs/protocol/3_staking.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Staking",title:"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff",sidebar_position:3},sidebar:"someSidebar",previous:{title:"IDO",permalink:"/docs/zh/protocol/ido"},next:{title:"POS",permalink:"/docs/zh/protocol/pos"}},p=[],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4efb\u610f\u7528\u6237\u53ef\u4ee5\u521b\u5efaStaking\u6316\u77ff\u6c60\uff0cStaking\u6316\u77ff\u6c60\u9700\u652f\u4ed8\u4e00\u5b9a\u5e73\u53f0\u5e01\uff0c\u65b9\u53ef\u521b\u5efa\u3002"),(0,i.kt)("p",null,"Staking\u6c60\u53ef\u5206\u4e3aLP\u6c60\u3001\u666e\u901a\u6c60\u3002LP\u6c60\u901a\u8fc7\u8d28\u62bc\u6307\u5b9a\u4ee3\u5e01\u53ef\u5956\u52b1\u5e73\u53f0\u5e01\u6216\u5176\u4ed6\u5e01\u79cd\u3002\u7528\u6237\u81ea\u884c\u521b\u7acb\u7684Staking\u6c60\uff0c\u53ef\u5956\u52b1\u8be5\u6c60\u7684\u672c\u5e01\u6216\u4e3b\u6d41\u5e01\uff08ETH\u3001USDT\u3001USDC\u3001DAI\u7b49\uff09\uff0c\u521b\u7acb\u8005\u65e0\u6743\u52a8\u7528\u6c60\u5185\u8d44\u91d1\uff0c\u786e\u4fdd\u7528\u6237\u8d44\u91d1\u5b89\u5168\uff0c\u4e14\u4e00\u65e6\u521b\u5efa\uff0c\u53ea\u80fd\u589e\u52a0\u6c60\u5185\u5956\u52b1\u91d1\uff0c\u4e0d\u80fd\u9000\u56de\u3002"))}f.isMDXComponent=!0}}]);