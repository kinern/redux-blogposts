(this["webpackJsonpredux-blogposts"]=this["webpackJsonpredux-blogposts"]||[]).push([[0],{29:function(e,t,n){e.exports=n(58)},58:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),s=n.n(c),u=n(6),o=n(7),i=n(8),l=n(9),p=n(4),d=n(3),f=n.n(d),m=n(10),h=n(25),v=n.n(h),b=n(26),y=n.n(b).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),E=function(){return function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(m.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.user;return e?a.a.createElement("div",{className:"header"},e.name):null}}]),n}(a.a.Component),k=Object(p.b)((function(e,t){return{user:e.users.find((function(e){return e.id===t.userId}))}}),{})(j),g=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map((function(e){return a.a.createElement("div",{className:"item",key:"post.id"},a.a.createElement("i",{className:"large middle aligned icon user"}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"description"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.body)),a.a.createElement(k,{userId:e.userId})))}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"ui relaxed divided ui list"},this.renderList())}}]),n}(a.a.Component),w=Object(p.b)((function(e){return{posts:e.posts}}),{fetchPostsAndUsers:function(){return function(){var e=Object(m.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(E());case 2:v.a.chain(n().posts).map("userId").uniq().forEach((function(e){return t(O(e))})).value();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(g),x=function(){return a.a.createElement("div",{className:"ui container"},a.a.createElement(w,null))},N=n(2),S=n(28),C=Object(N.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(S.a)(e),[t.payload]);default:return e}}}),T=n(27),U=Object(N.d)(C,Object(N.a)(T.a));s.a.render(a.a.createElement(p.a,{store:U},a.a.createElement(x,null)),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.b05a25a2.chunk.js.map