(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"dbd4aab7"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var c=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(u);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("a026"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"white"}},[r("div",{staticClass:"flex align-self-center"},[r("v-btn",{staticClass:"mr-4 text-h5",staticStyle:{"text-transform":"unset"},attrs:{to:"/",text:"",plain:""}},[e._v("HubHQ")]),r("v-btn",{attrs:{to:"/about",tag:"span",text:""}},[e._v("About")])],1),r("div",[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}})],1)]),r("v-main",[r("router-view")],1),r("v-bottom-navigation",{attrs:{fixed:""}},[r("v-btn",[r("span",[e._v("Teams")]),r("v-icon",[e._v("mdi-account-group")])],1),r("v-btn",[r("span",[e._v("Nearby")]),r("v-icon",[e._v("mdi-map-marker")])],1)],1),r("v-navigation-drawer",{staticStyle:{height:"calc(100% - 64px)",top:"64px"},attrs:{temporary:"",fixed:"",right:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{dense:"",nav:""}},[r("v-list-item",{attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-view-dashboard")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Dashboard")])],1)],1),r("v-list-item",{attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-view-dashboard")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Title")])],1)],1),r("v-list-item",{attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-view-dashboard")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Title")])],1)],1)],1),r("v-divider"),r("div",{staticClass:"ma-4 "},[r("v-chip",{staticClass:"mr-2",attrs:{to:"/login",link:"",outlined:""}},[e._v("Sign in")]),r("v-chip",{attrs:{to:"/register",link:""}},[e._v("Join Now")])],1)],1)],1)},a=[],s={data:function(){return{drawer:null}}},i=s,l=(r("034f"),r("2877")),c=Object(l["a"])(i,o,a,!1,null,null,null),u=c.exports,d=r("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var m=r("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"blue-grey darken-1 lighten-5 pa-5"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"6",order:"1","order-md":"0"}},[n("div",{staticClass:"white--text"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("p",[e._v("Welcome to your Community Response Group. We are devoted to helping connected neighbors to neighbors. In a time of need sometimes the only people available are those closest to you, and we wanted to make it easier to reach out and connect to those near by.")]),n("p",[e._v("Sign up for Free and start making connections today")]),n("p",[e._v("Make suer to check out our support section and training we have some big plans for building a better future locally in every community. See how change we can produce simply by joining hands together.")])])]),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-card",{staticClass:"pa-10"},[n("Login"),n("hr",{staticClass:"mb-10"}),n("v-btn",{attrs:{to:"/register",block:"",link:"",color:"green darken-1 white--text"}},[e._v("Create Account")])],1)],1)],1)],1)])},v=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("h2",{staticClass:"text-center"},[e._v(" Sign in to your account ")]),r("form",{attrs:{action:"#",method:"POST"}},[r("v-text-field",{attrs:{label:"E-mail",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{attrs:{type:"submit",color:"primary"}},[e._v(" Sign in ")])],1)])},b=[],h={},g=h,w=Object(l["a"])(g,f,b,!1,null,"509d2de7",null),y=w.exports,x={name:"Home",components:{Login:y}},_=x,k=Object(l["a"])(_,p,v,!1,null,null,null),C=k.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"mx-auto"},[r("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-md"},[r("h2",{staticClass:"mt-6 text-center text-3xl font-extrabold text-gray-900"},[e._v(" Register your account ")])]),r("div",{staticClass:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},[r("div",{staticClass:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},[r("form",{staticClass:"space-y-6",on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[r("v-text-field",{attrs:{error:e.errors?e.errors.name:null,"error-messages":e.errors?e.errors.name:null,counter:10,label:"Username/Handle",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{error:e.errors?e.errors.email:null,"error-messages":e.errors?e.errors.email:null,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{error:e.errors?e.errors.password:null,"error-messages":e.errors?e.errors.password:null,label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-text-field",{attrs:{error:e.errors?e.errors.password:null,"error-messages":e.errors?e.errors.password:null,label:"Password Confirm",required:""},model:{value:e.password_confirmation,callback:function(t){e.password_confirmation=t},expression:"password_confirmation"}}),r("v-btn",{attrs:{type:"submit"},on:{click:e.register}},[e._v(" Register ")])],1)])])])},O=[],S=(r("b0c0"),r("bc3a")),P=r.n(S),E={data:function(){return{errors:null,name:"",email:"",password:"",password_confirmation:""}},computed:{},methods:{register:function(){var e=this;P.a.post("register",{name:this.name,email:this.email,password:this.password,password_confirmation:this.password_confirmation}).then((function(t){var r;null!==(r=t.data)&&void 0!==r&&r.errors?e.errors=t.data.errors:(e.errors=null,e.$router.push("/"))}))}}},T=E,q=Object(l["a"])(T,j,O,!1,null,null,null),A=q.exports;n["default"].use(m["a"]);var $=[{path:"/",name:"Home",component:C},{path:"/login",name:"login",component:y},{path:"/register",name:"Register",component:A},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],H=new m["a"]({mode:"history",base:"/",routes:$}),M=H,N=r("2f62");n["default"].use(N["a"]);var L=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),R=r("ce5b"),F=r.n(R);r("953f");n["default"].use(F.a);var J=new F.a({theme:{light:!0,themes:{light:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}});r("e792"),r("d5e8"),r("5363");n["default"].config.productionTip=!1,new n["default"]({router:M,store:L,vuetify:J,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.682655b7.js.map