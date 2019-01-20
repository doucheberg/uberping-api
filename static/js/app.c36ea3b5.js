(function(e){function t(t){for(var n,i,o=t[0],c=t[1],d=t[2],u=0,l=[];u<o.length;u++)i=o[u],r[i]&&l.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(l.length)l.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var m=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("md-app",{attrs:{id:"app","md-waterfall":"","md-mode":"fixed","md-scrollbar":""}},[a("md-app-toolbar",{staticClass:"md-primary"},[a("span",{staticClass:"md-title"},[e._v("uberping")])]),a("md-app-content",[a("router-view")],1)],1),a("md-bottom-bar",{attrs:{"md-sync-route":"","md-type":"fixed"}},[a("md-bottom-bar-item",{attrs:{href:"#/game","md-label":"Play","md-icon":"input"}}),a("md-bottom-bar-item",{attrs:{href:"#/highscore","md-label":"Highscore","md-icon":"assessment"}}),a("md-bottom-bar-item",{attrs:{href:"#/matches","md-label":"Matches","md-icon":"list"}})],1)],1)},s=[],i=a("8c4f"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-content",[e.loading?a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):e._e(),a("md-card",[a("md-card-content",[a("md-field",[a("label",[e._v("Home player")]),a("md-select",{attrs:{"md-dense":""},model:{value:e.homeUser,callback:function(t){e.homeUser=t},expression:"homeUser"}},e._l(e.users,function(t){return a("md-option",{key:t._id,attrs:{value:t._id}},[e._v("\n            "+e._s(t.name)+"\n            ")])}))],1),e.homeUser?a("md-field",[a("label",[e._v(e._s(e.homeUser?e.users.find(function(t){return t._id===e.homeUser}).name:"Home")+" score")]),a("md-select",{attrs:{"md-dense":""},model:{value:e.homeScore,callback:function(t){e.homeScore=t},expression:"homeScore"}},e._l(e.numbers,function(t){return a("md-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],1):e._e()],1)],1),a("br"),a("md-card",[a("md-card-content",[a("md-field",[a("label",[e._v("Away player")]),a("md-select",{attrs:{"md-dense":""},model:{value:e.awayUser,callback:function(t){e.awayUser=t},expression:"awayUser"}},e._l(e.users,function(t){return a("md-option",{key:t._id,attrs:{value:t._id}},[e._v("\n          "+e._s(t.name)+"\n          ")])}))],1),e.awayUser?a("md-field",[a("label",[e._v(e._s(e.awayUser?e.users.find(function(t){return t._id===e.awayUser}).name:"Away")+" score")]),a("md-select",{attrs:{"md-dense":""},model:{value:e.awayScore,callback:function(t){e.awayScore=t},expression:"awayScore"}},e._l(e.numbers,function(t){return a("md-option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],1):e._e()],1)],1),a("br"),a("md-card",[a("md-card-content",[a("md-button",{staticClass:"md-primary md-raised",on:{click:e.register}},[e._v(e._s(e.infoText))])],1)],1)],1)},c=[],d=(a("c5f6"),a("bc3a")),m=a.n(d),u={name:"Highscopre",data:function(){return{numbers:Array.apply(null,{length:30}).map(Number.call,Number),homeUser:"",homeScore:11,awayScore:11,awayUser:"",users:null,infoText:"Register",showInfo:!1}},mounted:function(){var e=this;m.a.get("api/users").then(function(t){var a=t.data;e.users=a})},methods:{register:function(){var e=this;if(this.homeUser&&this.awayUser&&this.homeScore>-1&&this.awayScore>-1){this.infoText="Saving...";var t={homeId:this.homeUser,homeScore:this.homeScore,awayId:this.awayUser,awayScore:this.awayScore};m.a.post("api/matches",t).then(function(){e.infoText="Saved",setTimeout(function(){return e.infoText="Register"},1e3)})}}}},l=u,p=a("2877"),f=Object(p["a"])(l,o,c,!1,null,null,null);f.options.__file="Game.vue";var h=f.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loading?a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):e._e(),a("div",{staticClass:"grid"},[e._l(e.users,function(t,n){return a("div",{key:t.id,staticClass:"grid-item"},[a("md-card",[a("md-card-header",[a("span",[e._v(e._s(n+1)+". ")]),a("span",[e._v(e._s(t.name))])]),a("md-card-content",[a("md-chip",{staticClass:"md-primary md-mini",attrs:{title:"Rating"}},[a("md-icon",[e._v("grade")]),e._v(" "+e._s(t.rating.toFixed(1)))],1),a("svg",{staticStyle:{"vertical-align":"middle",margin:"4px"},attrs:{width:e.sparkline.w,height:e.sparkline.h}},[a("path",{staticStyle:{stroke:"#555",fill:"transparent"},attrs:{d:e.createSparkline(t)}})]),a("md-chip",{staticClass:"md-secondary",attrs:{title:"Streak"}},[a("md-icon",[e._v("schedule")]),e._v(" "+e._s(t.streak))],1),a("md-chip",{staticClass:"md-primary",attrs:{title:"Wins"}},[a("md-icon",[e._v("thumb_up")]),e._v(" "+e._s(t.wins))],1),a("md-chip",{staticClass:"md-accent",attrs:{title:"Losses"}},[a("md-icon",[e._v("thumb_down")]),e._v(" "+e._s(t.losses))],1)],1)],1)],1)}),a("md-button",{on:{click:e.rank}},[e._v("Rank")])],2)],1)},_=[],b=a("be94"),g=a("5698"),y={name:"Highscopre",data:function(){return{users:null,loading:!1,sparkline:{w:80,h:20}}},mounted:function(){this.getUsers()},methods:{createSparkline:function(e){var t=this.sparkline.w,a=this.sparkline.h,n=e.ratingHistory.map(function(e){return Object(b["a"])({},e,{timestamp:new Date(e.timestamp).valueOf()})}),r=Object(g["d"])().range([0,t]),s=Object(g["c"])().range([a,0]);r.domain(Object(g["a"])(n,function(e){return e.timestamp})),s.domain(Object(g["a"])(n,function(e){return e.rating}));var i=Object(g["b"])().x(function(e){return r(e.timestamp)}).y(function(e){return s(e.rating)});return i(n)},getUsers:function(){var e=this;this.loading=!0,m.a.get("api/users").then(function(t){var a=t.data;e.users=a,e.loading=!1})},rank:function(){var e=this;m.a.get("api/updateRating").then(function(){e.getUsers()})}},computed:{matches:function(){var e=this;return this.rawmatches.map(function(t){return{timestamp:t.timestamp,home:e.usermap[t.homeId],homeScore:t.homeScore,awayScore:t.awayScore,away:e.usermap[t.awayId]}})}}},w=y,S=Object(p["a"])(w,v,_,!1,null,null,null);S.options.__file="Highscore.vue";var k=S.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loading?a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):e._e(),a("md-list",[e._l(e.matches.slice(0,50),function(t){return a("md-list-item",{key:t.id},[a("md-card",[a("md-card-header",[a("span",[e._v(e._s(t.timestamp.toLocaleString()))])]),a("md-card-content",[a("md-chip",{staticClass:"md-primary",attrs:{title:"Winning score"}},[e._v(e._s(t.home)+" | "),a("b",[e._v(e._s(t.homeScore))])]),a("span",[e._v(" -- ")]),a("md-chip",{staticClass:"md-accent",attrs:{title:"Losing score"}},[a("b",[e._v(e._s(t.awayScore))]),e._v(" | "+e._s(t.away))])],1)],1)],1)}),a("md-list-item",[e._v("...")])],2)],1)},x=[],O=(a("55dd"),a("20d6"),a("7f7f"),a("ac6a"),{name:"Matches",data:function(){return{users:null,rawmatches:[],usermap:{},loading:!0}},mounted:function(){var e=this;m.a.get("api/users").then(function(t){var a=t.data;e.users=a,a.forEach(function(t){e.usermap[t._id]=t.name}),m.a.get("api/matches").then(function(t){e.rawmatches=t.data,e.loading=!1})})},methods:{remove:function(e){var t=this,a=this.rawmatches.findIndex(function(t){return t._id===e});m.a.delete("api/matches/".concat(e)).then(function(){return t.rawmatches.splice(a,1)})}},computed:{matches:function(){var e=this;return this.rawmatches.map(function(t){return{id:t._id,timestamp:new Date(t.timestamp),home:e.usermap[t.homeId],homeScore:t.homeScore,awayScore:t.awayScore,away:e.usermap[t.awayId]}}).sort(function(e,t){return t.timestamp-e.timestamp})}}}),j=O,C=(a("f0bb"),Object(p["a"])(j,U,x,!1,null,"6ce5d2ac",null));C.options.__file="Matches.vue";var T=C.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loading?a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):e._e(),a("table",[e._l(e.users,function(t){return a("tr",{key:t.id,staticClass:"grid-item"},[a("td",[a("span",[e._v(e._s(t.name))])]),a("td",[a("md-button",{on:{click:function(a){e.deleteUser(t._id)}}},[e._v("Delete")])],1)])}),a("tr",[a("td",[a("md-field",[a("label",[e._v("New user")]),a("md-input",{attrs:{type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),a("td",[a("md-field",[a("md-button",{staticClass:"md-primary md-raised",on:{click:e.addUser}},[e._v("Add")])],1)],1)])],2)],1)},H=[],M={name:"Users",data:function(){return{users:null,name:name,loading:!1}},mounted:function(){this.getUsers()},methods:{deleteUser:function(e){var t=this;m.a.delete("api/users/".concat(e)).then(function(){return t.getUsers()})},addUser:function(){var e=this;m.a.post("api/users/".concat(this.name)).then(function(){return e.getUsers()})},getUsers:function(){var e=this;this.loading=!0,m.a.get("api/users").then(function(t){var a=t.data;e.users=a.sort(function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a>n?1:0}),e.loading=!1})}}},P=M,E=Object(p["a"])(P,I,H,!1,null,null,null);E.options.__file="Users.vue";var $=E.exports,A=new i["a"]({routes:[{path:"/game",component:h},{path:"/highscore",component:k},{path:"/matches",component:T},{path:"/users",component:$}]}),L={name:"app",router:A},R=L,D=(a("5c0b"),Object(p["a"])(R,r,s,!1,null,null,null));D.options.__file="App.vue";var N=D.exports,J=a("43f9"),W=a.n(J);a("51de"),a("e094");n["default"].use(W.a),n["default"].use(i["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(N)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(e,t,a){},de2c:function(e,t,a){},f0bb:function(e,t,a){"use strict";var n=a("de2c"),r=a.n(n);r.a}});
//# sourceMappingURL=app.c36ea3b5.js.map