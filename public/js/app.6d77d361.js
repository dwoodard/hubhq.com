(function(e){function t(t){for(var o,l,u=t[0],i=t[1],c=t[2],d=0,v=[];d<u.length;d++)l=u[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&v.push(n[l][0]),n[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(v.length)v.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,l=1;l<r.length;l++){var i=r[l];0!==n[i]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var o={},n={app:0},a=[];function l(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ff298c2b"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=l(e);var c=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(d);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}n[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(r,o,function(t){return e[t]}.bind(null,o));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var s=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"199d":function(e,t,r){"use strict";r("91f9")},4616:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("f2bf"),n={id:"nav"},a=Object(o["f"])(" sup "),l=Object(o["f"])("Home"),u=Object(o["f"])(" | "),i=Object(o["f"])("About");function c(e,t){var r=Object(o["v"])("router-link"),c=Object(o["v"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",n,[a,Object(o["g"])(r,{to:"/"},{default:Object(o["A"])((function(){return[l]})),_:1}),u,Object(o["g"])(r,{to:"/about"},{default:Object(o["A"])((function(){return[i]})),_:1})]),Object(o["g"])(c)],64)}r("199d");const d={};d.render=c;var s=d,v=r("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var p=r("6c02"),f=r("cf05"),b=r.n(f),g={class:"home"},h=Object(o["g"])("img",{alt:"Vue logo",src:b.a},null,-1);function j(e,t,r,n,a,l){var u=Object(o["v"])("HelloWorld");return Object(o["p"])(),Object(o["d"])("div",g,[h,Object(o["g"])(u,{msg:"Welcome to Your Vue.js App"})])}var m=Object(o["B"])("data-v-49d867e6");Object(o["s"])("data-v-49d867e6");var O={class:"hello"},k=Object(o["e"])('<p data-v-49d867e6> For a guide and recipes on how to configure / customize this project,<br data-v-49d867e6> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-49d867e6>vue-cli documentation</a>. </p><h3 data-v-49d867e6>Installed CLI Plugins</h3><ul data-v-49d867e6><li data-v-49d867e6><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-49d867e6>babel</a></li><li data-v-49d867e6><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-49d867e6>pwa</a></li><li data-v-49d867e6><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-49d867e6>eslint</a></li></ul><h3 data-v-49d867e6>Essential Links</h3><ul data-v-49d867e6><li data-v-49d867e6><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-49d867e6>Core Docs</a></li><li data-v-49d867e6><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-49d867e6>Forum</a></li><li data-v-49d867e6><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-49d867e6>Community Chat</a></li><li data-v-49d867e6><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-49d867e6>Twitter</a></li><li data-v-49d867e6><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-49d867e6>News</a></li></ul><h3 data-v-49d867e6>Ecosystem</h3><ul data-v-49d867e6><li data-v-49d867e6><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-49d867e6>vue-router</a></li><li data-v-49d867e6><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-49d867e6>vuex</a></li><li data-v-49d867e6><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-49d867e6>vue-devtools</a></li><li data-v-49d867e6><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-49d867e6>vue-loader</a></li><li data-v-49d867e6><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-49d867e6>awesome-vue</a></li></ul>',7);Object(o["q"])();var w=m((function(e,t,r,n,a,l){return Object(o["p"])(),Object(o["d"])("div",O,[Object(o["g"])("h1",null,Object(o["x"])(r.msg),1),k])})),y={name:"HelloWorld",props:{msg:String}};r("995d");y.render=w,y.__scopeId="data-v-49d867e6";var _=y,x={name:"Home",components:{HelloWorld:_}};x.render=j;var P=x,A=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],C=Object(p["a"])({history:Object(p["b"])(),routes:A}),S=C,E=r("5502"),H=Object(E["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(s).use(H).use(S).mount("#app")},"91f9":function(e,t,r){},"995d":function(e,t,r){"use strict";r("4616")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.6d77d361.js.map