(function(e){function t(t){for(var n,i,c=t[0],u=t[1],l=t[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3454767a"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("a026"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{staticClass:"flex justify-space-between",staticStyle:{"border-bottom":"1px"},attrs:{app:"",color:"white","elevate-on-scroll":""}},[r("router-link",{staticClass:"text mr-4 text-decoration-none ",attrs:{to:"/",tag:"v-toolbar-title"}},[e._v(" HubHQ ")]),r("router-link",{staticClass:"primary",attrs:{to:"/about",tag:"v-btn"}},[e._v("About")]),r("div",[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}})],1)],1),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("router-view")],1)],1),r("v-footer",{attrs:{app:""}}),r("v-navigation-drawer",{staticStyle:{height:"calc(100% - 64px)",top:"64px"},attrs:{fixed:"",temporary:"",right:"","hide-overlay":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("div",[e._v("drawer")])])],1)},a=[],i={data:function(){return{drawer:null}}},c=i,u=r("2877"),l=Object(u["a"])(c,o,a,!1,null,null,null),s=l.exports,f=r("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var p=r("8c4f"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}})])}],b={name:"Home",components:{}},m=b,h=Object(u["a"])(m,d,v,!1,null,null,null),g=h.exports;n["default"].use(p["a"]);var w=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],y=new p["a"]({mode:"history",base:"/",routes:w}),x=y,j=r("2f62");n["default"].use(j["a"]);var _=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=r("ce5b"),O=r.n(k);r("953f");n["default"].use(O.a);var P=new O.a({theme:{light:!0,themes:{light:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}});r("e792"),r("d5e8"),r("5363");n["default"].config.productionTip=!1,new n["default"]({router:x,store:_,vuetify:P,render:function(e){return e(s)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.7fb02956.js.map