(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],f=0,s=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&s.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==u[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-03202232":"002f4235","chunk-22bfd9c9":"c4a76f71","chunk-58898a7a":"dbff52ed"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-03202232":1,"chunk-22bfd9c9":1,"chunk-58898a7a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-03202232":"ea9e916b","chunk-22bfd9c9":"8728686b","chunk-58898a7a":"0d5ba236"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===u))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){l=s[c],f=l.getAttribute("data-href");if(f===r||f===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}u[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1315:function(e,t,n){"use strict";var r=n("74d6"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"SYNC_CURRENT_TIME",(function(){return E})),n.d(r,"HIDE_SELF",(function(){return k}));n("96cf");var o=n("3b8d"),u=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),a=(n("ac6a"),n("d225")),c=function e(t){var n=this;Object(a["a"])(this,e),["info","warn"].forEach((function(e){n[e]=function(){var n;return t?(n=console)[e].apply(n,arguments):""}})),this.error=console.error},i={install:function(e,t){var n=t.debug,r=new c(n);e.$log=r,e.prototype.$log=r}},l=n("5c96"),f=n.n(l);n("0fae"),n("c5f6");function s(){var e=192;function t(){var t=document.documentElement.clientWidth/1920;document.documentElement.style.fontSize="".concat(e*t,"px"),Number(document.documentElement.style.fontSize.slice(0,-2))<=130&&(document.documentElement.style.fontSize="130px")}t(),window.addEventListener("resize",t)}var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},p=[],h=(n("1315"),n("2877")),m={},v=Object(h["a"])(m,d,p,!1,null,null,null),b=v.exports,g=n("8c4f");u["default"].use(g["a"]);var y=new g["a"]({routes:[{path:"/",redirect:"/3d-rotate"},{path:"/3d-rotate",name:"3D-rotate",component:function(){return n.e("chunk-22bfd9c9").then(n.bind(null,"1b70"))}},{path:"/3d-wordCloud",name:"3D-wordCloud",component:function(){return n.e("chunk-03202232").then(n.bind(null,"3d19"))}},{path:"/grayscale",name:"grayscale",component:function(){return n.e("chunk-58898a7a").then(n.bind(null,"a720"))}}]}),w=n("2f62"),E=function(e){},k=function(e,t){e.hideSelf[t]=!0},S=n("63e0");u["default"].use(w["a"]);var _=new w["a"].Store({state:{hideSelf:[]},mutations:r,actions:S,strict:!1});u["default"].use(i,{debug:!1}),u["default"].use(f.a),u["default"].config.productionTip=!1,u["default"].$log.info("vue-eslint launch..."),s(),new u["default"]({router:y,store:_,render:function(e){return e(b)},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$log.info("vue-eslint ready..."),setInterval((function(){t.$store.commit("SYNC_CURRENT_TIME")}),1e3);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}).$mount("#app")},"63e0":function(e,t){},"74d6":function(e,t,n){}});