(function(t){function e(e){for(var i,a,c=e[0],u=e[1],s=e[2],l=0,d=[];l<c.length;l++)a=c[l],o[a]&&d.push(o[a][0]),o[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var i={},a={app:0},o={app:0},r=[];function c(t){return u.p+"js/"+({video:"video"}[t]||t)+"."+{"chunk-28241050":"5bccb3e5","chunk-8c2c0f48":"99a80c9a","chunk-8e61f69e":"3f3520ef","chunk-b6f898f2":"c73bf911","chunk-d9b154de":"2128b67f","chunk-f06c2476":"633036ee","chunk-fb3a43d0":"cf9280c3",video:"d05c577b"}[t]+".js"}function u(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-28241050":1,"chunk-8c2c0f48":1,"chunk-8e61f69e":1,"chunk-b6f898f2":1,"chunk-d9b154de":1,"chunk-f06c2476":1,"chunk-fb3a43d0":1,video:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var i="css/"+({video:"video"}[t]||t)+"."+{"chunk-28241050":"438a3ec2","chunk-8c2c0f48":"ecd62bed","chunk-8e61f69e":"184d54b6","chunk-b6f898f2":"79d50937","chunk-d9b154de":"227b034b","chunk-f06c2476":"d3bbe299","chunk-fb3a43d0":"67651534",video:"fcba2fe0"}[t]+".css",o=u.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===i||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===i||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete a[t],f.parentNode.removeChild(f),n(r)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise(function(e,n){i=o[t]=[e,n]});e.push(i[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t),s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");r.type=i,r.request=a,n[1](r)}o[t]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=i,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)u.d(n,i,function(e){return t[e]}.bind(null,i));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="//cnd-giligili.xiaosiro.cn/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"34ba":function(t,e,n){"use strict";var i=n("7dbb"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"top-navbar"},[n("div",{staticClass:"menubar"},[n("NavBar")],1)]),n("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal",router:""}},[i("el-menu-item",{staticClass:"el-menu-item",attrs:{index:"/"}},[i("img",{staticStyle:{"margin-bottom":"3px"},attrs:{src:n("cf05"),alt:"",width:"25px"}}),t._v("首页")]),i("el-menu-item",{staticClass:"el-menu-item",attrs:{index:"/postvideo"}},[t._v("投稿视频")]),i("el-menu-item",{staticClass:"el-menu-item",style:{display:t.disPlay1},attrs:{index:"/login"}},[t._v("登录")]),i("el-menu-item",{staticClass:"el-menu-item",style:{display:t.disPlay2},attrs:{index:"/space"}},[t._v("个人中心")]),i("el-menu-item",{staticClass:"el-menu-item",attrs:{index:"/about"}},[t._v("关于giligili")])],1)},c=[],u={name:"NavBar",data:function(){return{disPlay1:"list-item",disPlay2:"none",addTodo:""}},methods:{load:function(){this.$cookies.isKey("gin-ess")?(this.disPlay1="none",this.disPlay2="list-item"):(this.disPlay1="list-item",this.disPlay2="none")}},created:function(){var t=this;this.$bus.on("myspace",function(){t.load()})},beforeDestroy:function(){this.$bus.off("myspace")},beforeMount:function(){this.load()}},s=u,l=(n("34ba"),n("2877")),d=Object(l["a"])(s,r,c,!1,null,null,null),f=d.exports,p={name:"app",components:{NavBar:f}},h=p,v=(n("034f"),Object(l["a"])(h,a,o,!1,null,null,null)),m=v.exports,g=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"main-contianer"},[n("div",{staticClass:"left"},[n("div",{staticClass:"top",staticStyle:{"margin-bottom":"10px"}},[n("el-row",{attrs:{gutter:20}},t._l(t.videos,function(e){return n("el-col",{key:e.id,attrs:{span:6}},[n("el-card",{staticClass:"video-card",nativeOn:{click:function(n){return t.goVideo(e)}}},[n("div",{staticClass:"atomimg"},[n("img",{staticClass:"video-avatar",attrs:{src:e.avatar,width:"100%"}})]),n("div",{staticClass:"videoInof"},[n("div",{staticClass:"video-title"},[t._v(t._s(e.title))]),n("div",{staticClass:"bottom clearfix",staticStyle:{"margin-top":"4px"}},[n("span",{staticClass:"video-info"},[t._v(t._s(e.Info.substring(0,35)))])])])])],1)}),1)],1),n("div",{staticClass:"fenye"},[n("div",{staticClass:"blocks"},[n("el-pagination",{attrs:{"page-size":12,"page-sizes":[6,12],layout:"total, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])]),n("div",{staticClass:"home-right"},[n("div",{staticClass:"right-top"},[t._v("\n\t\t\t\t排行榜\n\t\t\t")]),n("div",{staticClass:"right-show"},t._l(t.rivideos,function(e){return n("div",{key:e.id,staticClass:"right-show-card",on:{click:function(n){return t.goVideo(e)}}},[n("div",{staticClass:"right-show-card-img"},[n("img",{staticClass:"rivideo-avatar",attrs:{src:e.avatar,width:"100%"}})]),n("p",{staticClass:"rivideo-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"rivideo-viev"},[t._v("播放量:"+t._s(e.view))])])}),0)])])])},y=[],_=n("76e5"),w={name:"home",components:{},data:function(){return{videos:[],rivideos:[],start:0,limit:12,total:0}},methods:{handleSizeChange:function(t){this.limit=t,this.load()},handleCurrentChange:function(t){this.start=this.limit*(t-1),this.load()},load:function(){var t=this;_["g"](this.start,this.limit).then(function(e){t.videos=e.data.items,t.total=e.data.total}),_["c"]().then(function(e){t.rivideos=e.data})},goVideo:function(t){var e=this.$router.resolve({name:"ShowVideo",params:{videoID:t.id,userID:t.user}});window.open(e.href,"_blank")}},beforeMount:function(){this.load()}},k=w,C=(n("cccb"),Object(l["a"])(k,b,y,!1,null,null,null)),x=C.exports;i["default"].use(g["a"]);var j=new g["a"]({routes:[{path:"/",name:"home",component:x},{path:"/about",name:"About",component:function(){return n.e("chunk-28241050").then(n.bind(null,"f820"))}},{path:"/postvideo",name:"postVideo",component:function(){return n.e("video").then(n.bind(null,"43fd"))}},{path:"/video/gv:videoID",name:"ShowVideo",component:function(){return n.e("chunk-8e61f69e").then(n.bind(null,"5a37"))}},{path:"/login",name:"Login",component:function(){return n.e("video").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-8c2c0f48").then(n.bind(null,"73cf"))}},{path:"/im",name:"IM",component:function(){return n.e("chunk-b6f898f2").then(n.bind(null,"c446"))}},{path:"/space",name:"Space",redirect:"/space/me",component:function(){return n.e("chunk-f06c2476").then(n.bind(null,"c24f"))},children:[{path:"/space/me",name:"Spaces",component:function(){return n.e("chunk-fb3a43d0").then(n.bind(null,"1250"))}},{path:"/space/revise",name:"UserRevise",component:function(){return n.e("chunk-d9b154de").then(n.bind(null,"79b6"))}}]}]}),S=n("2f62");i["default"].use(S["a"]);var E=new S["a"].Store({state:{},mutations:{},actions:{}}),O=n("2b27"),P=n.n(O),T=n("b828"),$=n("5c96"),I=n.n($);n("0fae");i["default"].use(I.a);var N=n("bc3a"),M=n.n(N);n("927c");i["default"].config.productionTip=!1,i["default"].prototype.axios=M.a,n("8d90"),i["default"].prototype.$initGeet=initGeetest,i["default"].use(P.a),i["default"].use(T["a"]),new i["default"]({router:j,store:E,render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,n){},"76e5":function(t,e,n){"use strict";n.d(e,"c",function(){return l}),n.d(e,"g",function(){return c}),n.d(e,"e",function(){return r}),n.d(e,"h",function(){return o}),n.d(e,"d",function(){return s}),n.d(e,"a",function(){return u}),n.d(e,"i",function(){return d}),n.d(e,"f",function(){return f}),n.d(e,"b",function(){return p});var i=n("bc3a"),a=n.n(i),o=function(t){return a.a.post("/api/v1/videos",t).then(function(t){return t.data})},r=function(t){return a.a.get("/api/v1/video/".concat(t)).then(function(t){return t.data})},c=function(t,e){return a.a.get("/api/v1/videos",{params:{start:t,limit:e}}).then(function(t){return t.data})},u=function(t){return a.a.delete("/api/v1/video/".concat(t)).then(function(t){return t.data})},s=function(t,e){return a.a.get("/api/v1/user/videos",{params:{start:t,limit:e}}).then(function(t){return t.data})},l=function(){return a.a.get("api/v1/rank/daily").then(function(t){return t.data})},d=function(t,e){return a.a.post("/api/v1/video/comment/".concat(t),e).then(function(t){return t.data})},f=function(t,e,n){return a.a.get("/api/v1/videos/comments/".concat(t),{params:{start:e,limit:n}}).then(function(t){return t.data})},p=function(t){return a.a.delete("/api/v1/comment/".concat(t)).then(function(t){return t.data})}},"7dbb":function(t,e,n){},"8d90":function(t,e,n){"use strict";n.r(e),function(t){n("a481");var e=n("7618");(function(n,i){"object"===Object(e["a"])(t)&&"object"===Object(e["a"])(t.exports)?t.exports=n.document?i(n,!0):function(t){if(!t.document)throw new Error("Geetest requires a window with a document");return i(t)}:i(n)})("undefined"!==typeof window?window:void 0,function(t,n){if("undefined"===typeof t)throw new Error("Geetest requires browser environment");var i=t.document,a=t.Math,o=i.getElementsByTagName("head")[0];function r(t){this._obj=t}function c(t){var e=this;new r(t)._each(function(t,n){e[t]=n})}r.prototype={_each:function(t){var e=this._obj;for(var n in e)e.hasOwnProperty(n)&&t(n,e[n]);return this}},c.prototype={api_server:"api.geetest.com",protocol:"http://",type_path:"/gettype.php",fallback_config:{slide:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"slide",slide:"/static/js/geetest.0.0.0.js"},fullpage:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"fullpage",fullpage:"/static/js/fullpage.0.0.0.js"}},_get_fallback_config:function(){var t=this;return s(t.type)?t.fallback_config[t.type]:t.new_captcha?t.fallback_config.fullpage:t.fallback_config.slide},_extend:function(t){var e=this;new r(t)._each(function(t,n){e[t]=n})}};var u=function(t){return"number"===typeof t},s=function(t){return"string"===typeof t},l=function(t){return"boolean"===typeof t},d=function(t){return"object"===Object(e["a"])(t)&&null!==t},f=function(t){return"function"===typeof t},p={},h={},v=function(){return parseInt(1e4*a.random())+(new Date).valueOf()},m=function(t,e){var n=i.createElement("script");n.charset="UTF-8",n.async=!0,n.onerror=function(){e(!0)};var a=!1;n.onload=n.onreadystatechange=function(){a||n.readyState&&"loaded"!==n.readyState&&"complete"!==n.readyState||(a=!0,setTimeout(function(){e(!1)},0))},n.src=t,o.appendChild(n)},g=function(t){return t.replace(/^https?:\/\/|\/$/g,"")},b=function(t){return t=t.replace(/\/+/g,"/"),0!==t.indexOf("/")&&(t="/"+t),t},y=function(t){if(!t)return"";var e="?";return new r(t)._each(function(t,n){(s(n)||u(n)||l(n))&&(e=e+encodeURIComponent(t)+"="+encodeURIComponent(n)+"&")}),"?"===e&&(e=""),e.replace(/&$/,"")},_=function(t,e,n,i){e=g(e);var a=b(n)+y(i);return e&&(a=t+e+a),a},w=function(t,e,n,i,a){var o=function o(r){var c=_(t,e[r],n,i);m(c,function(t){t?r>=e.length-1?a(!0):o(r+1):a(!1)})};o(0)},k=function(e,n,i,a){if(d(i.getLib))return i._extend(i.getLib),void a(i);if(i.offline)a(i._get_fallback_config());else{var o="geetest_"+v();t[o]=function(e){"success"===e.status?a(e.data):e.status?a(i._get_fallback_config()):a(e),t[o]=void 0;try{delete t[o]}catch(n){}},w(i.protocol,e,n,{gt:i.gt,callback:o},function(t){t&&a(i._get_fallback_config())})}},C=function(t,e){var n={networkError:"网络错误"};if("function"!==typeof e.onError)throw new Error(n[t]);e.onError(n[t])},x=function(){return!!t.Geetest};x()&&(h.slide="loaded");var j=function(e,n){var i=new c(e);e.https?i.protocol="https://":e.protocol||(i.protocol=t.location.protocol+"//"),k([i.api_server||i.apiserver],i.type_path,i,function(e){var a=e.type,o=function(){i._extend(e),n(new t.Geetest(i))};p[a]=p[a]||[];var r=h[a]||"init";"init"===r?(h[a]="loading",p[a].push(o),w(i.protocol,e.static_servers||e.domains,e[a]||e.path,null,function(t){if(t)h[a]="fail",C("networkError",i);else{h[a]="loaded";for(var e=p[a],n=0,o=e.length;n<o;n+=1){var r=e[n];f(r)&&r()}p[a]=[]}})):"loaded"===r?o():"fail"===r?C("networkError",i):"loading"===r&&p[a].push(o)})};return t.initGeetest=j,j})}.call(this,n("dd40")(t))},"927c":function(t,e,n){},cccb:function(t,e,n){"use strict";var i=n("d563"),a=n.n(i);a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.ea23c155.png"},d563:function(t,e,n){}});
//# sourceMappingURL=app.05170170.js.map