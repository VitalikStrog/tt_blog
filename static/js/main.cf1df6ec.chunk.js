(this.webpackJsonptt_blog=this.webpackJsonptt_blog||[]).push([[0],{107:function(t,e,n){},108:function(t,e,n){},109:function(t,e,n){},119:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(23),i=n.n(r),o=(n(107),n(108),n(109),n(165)),s=n(166),u=n(167),d=n(176),l=n(168),j=n(169),b=n(48),p=function(){return Object(b.b)()},f=b.c,h=n(22),O=n.n(h),x=n(43),m=n(29),v=n(28),g="https://bloggy-api.herokuapp.com";function y(t){return fetch("".concat(g,"/posts/").concat(t,"?_embed=comments")).then((function(t){return t.json()})).then((function(t){return t}))}function C(t){return fetch("".concat(g,"/posts"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(Object(v.a)({},t))}).then((function(t){return t.json()})).then((function(t){return t}))}function k(t){return fetch("".concat(g,"/posts/").concat(t),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){return t}))}var S=Object(m.b)("postsList/loadPosts",Object(x.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(g,"/posts")).then((function(t){return t.json()})).then((function(t){return t}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),w=Object(m.b)("postsList/createPost",function(){var t=Object(x.a)(O.a.mark((function t(e){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),P=Object(m.b)("postsList/deletePost",function(){var t=Object(x.a)(O.a.mark((function t(e){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),E=Object(m.b)("postsList/updatePost",function(){var t=Object(x.a)(O.a.mark((function t(e){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a=e.postId,c=e.updatedPost,fetch("".concat(g,"/posts/").concat(a),{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(Object(v.a)({},c))}).then((function(t){return t.json()})).then((function(t){return t}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}var a,c}),t)})));return function(e){return t.apply(this,arguments)}}()),L=Object(m.b)("postsList/createComment",function(){var t=Object(x.a)(O.a.mark((function t(e){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a=e,fetch("".concat(g,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(Object(v.a)({},a))}).then((function(t){return t.json()}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()),T=Object(m.c)({name:"postsList",initialState:{postsList:[],selectedPostId:0,update:0},reducers:{changePost:function(t,e){t.selectedPostId=e.payload},setUpdate:function(t){t.update=Math.random()}},extraReducers:function(t){t.addCase(S.fulfilled,(function(t,e){t.postsList=e.payload})).addCase(P.fulfilled,(function(t){t.update=Math.random()})).addCase(w.fulfilled,(function(t){t.update=Math.random()})).addCase(L.fulfilled,(function(t){t.update=Math.random()})).addCase(E.fulfilled,(function(t){t.update=Math.random()}))}}),N=T.actions,I=N.changePost,M=(N.setUpdate,function(t){return t.posts.postsList}),U=function(t){return t.posts.selectedPostId},F=function(t){return t.posts.update},q=T.reducer,H=n(2),J=function(t){var e=t.post,n=p(),a=f(U);return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)(o.a,{sx:{minWidth:350},children:[Object(H.jsx)(d.a,{onClick:function(){e.id!==a?n(I(e.id)):n(I(0))},children:Object(H.jsxs)(s.a,{sx:{minHeight:100},children:[Object(H.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Post #".concat(e.id)}),Object(H.jsx)(u.a,{variant:"body2",color:"text.secondary",children:e.title})]})}),Object(H.jsx)(l.a,{children:Object(H.jsx)(j.a,{size:"small",color:"primary",onClick:function(){n(P(e.id))},children:"Delete"})})]})})},D=function(){var t=f(M),e=f(F),n=p();return Object(a.useEffect)((function(){n(S())}),[e]),Object(H.jsx)("div",{className:"postsList",children:t.map((function(t){return Object(H.jsx)(J,{post:t},t.id)}))})},A=n(13),B=n(84),R=n(4),W=n(173),_=n(174),z=n(163),V=n(170),G=n(34),K=n(86),Q=n.n(K),X=n(171),Y=n(160),Z=n(172),$=n(159),tt=n(85),et=n.n(tt),nt=function(){var t=Object(a.useState)(""),e=Object(A.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(A.a)(r,2),o=i[0],s=i[1],u=Object(a.useState)(!1),d=Object(A.a)(u,2),l=d[0],b=d[1],h=f(U),O=function(){return b(!1)},x=p();return Object(a.useEffect)((function(){y(h).then((function(t){c(t.title),s(t.body)}))}),[]),Object(H.jsxs)("div",{children:[Object(H.jsx)(V.a,{"aria-label":"settings",onClick:function(){return b(!0)},children:Object(H.jsx)(et.a,{})}),Object(H.jsx)(Y.a,{sx:{maxWidth:400,maxHeight:300,position:"fixed",top:50,margin:"0 auto"},open:l,onClose:O,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(H.jsxs)(X.a,{component:"form",sx:{display:"flex",flexDirection:"column",alignItems:"center",borderRadius:3,bgcolor:"#eee",padding:2,"& .MuiTextField-root":{m:1,width:380}},noValidate:!0,autoComplete:"off",children:[Object(H.jsx)($.a,{required:!0,id:"outlined-basic",label:"Edit title",variant:"outlined",value:n,onChange:function(t){return c(t.target.value)}}),Object(H.jsx)($.a,{required:!0,id:"outlined-basic",label:"Edit post's content",variant:"outlined",value:o,onChange:function(t){return s(t.target.value)}}),Object(H.jsxs)(Z.a,{variant:"contained","aria-label":"outlined primary button group",children:[Object(H.jsx)(j.a,{onClick:O,children:"Cancel"}),Object(H.jsx)(j.a,{onClick:function(){x(E({postId:h,updatedPost:{title:n,body:o}})),x(I(0)),O(),c(""),s("")},children:"Update"})]})]})})]})},at=n(164),ct=function(){var t=Object(a.useState)(null),e=Object(A.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(A.a)(r,2),o=i[0],s=i[1],u=f(U),d=p(),l=function(){c(null)},b=Boolean(n),h=b?"simple-popover":void 0;return Object(H.jsxs)("div",{children:[Object(H.jsx)(j.a,{"aria-describedby":h,variant:"contained",onClick:function(t){c(t.currentTarget)},children:"Add comment"}),Object(H.jsxs)(at.a,{id:h,open:b,anchorEl:n,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},sx:{padding:5},children:[Object(H.jsx)($.a,{required:!0,id:"filled-basic",label:"Type comment",variant:"outlined",value:o,onChange:function(t){return s(t.target.value)}}),Object(H.jsxs)(Z.a,{variant:"contained","aria-label":"outlined primary button group",sx:{height:56},children:[Object(H.jsx)(j.a,{onClick:l,children:"Cancel"}),Object(H.jsx)(j.a,{onClick:function(){d(L({postId:u,body:o})),l()},children:"Add"})]})]})]})},rt=["expand"],it=Object(R.a)((function(t){t.expand;var e=Object(B.a)(t,rt);return Object(H.jsx)(V.a,Object(v.a)({},e))}))((function(t){var e=t.theme;return{transform:t.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})}})),ot=function(){var t=a.useState(!1),e=Object(A.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)({id:0,title:"",body:"",comments:[]}),i=Object(A.a)(r,2),d=i[0],j=i[1],b=f(U),p=f(F);return Object(a.useEffect)((function(){c(!1),y(b).then((function(t){return j(t)}))}),[b,p]),Object(H.jsxs)(o.a,{sx:{width:400,minHeight:224},children:[Object(H.jsx)(W.a,{avatar:Object(H.jsx)(z.a,{sx:{bgcolor:G.a[500]},"aria-label":"recipe",children:d.id}),action:Object(H.jsx)(nt,{}),title:d.title}),Object(H.jsx)(s.a,{sx:{minHeight:60},children:Object(H.jsx)(u.a,{variant:"body2",color:"text.secondary",children:d.body})}),Object(H.jsxs)(l.a,{disableSpacing:!0,children:[Object(H.jsx)(ct,{}),Object(H.jsx)(it,{disabled:0===d.comments.length,expand:n,onClick:function(){c(!n)},"aria-expanded":n,"aria-label":"show more",children:Object(H.jsx)(Q.a,{})})]}),Object(H.jsx)(_.a,{in:n,timeout:"auto",unmountOnExit:!0,children:Object(H.jsxs)(s.a,{children:[Object(H.jsx)(u.a,{paragraph:!0,children:"Comments:"}),Object(H.jsx)(u.a,{paragraph:!0,children:d.comments.map((function(t){return Object(H.jsx)("li",{children:t.body},t.id)}))})]})})]})},st=function(){var t=Object(a.useState)(""),e=Object(A.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(A.a)(r,2),o=i[0],s=i[1],u=Object(a.useState)(!1),d=Object(A.a)(u,2),l=d[0],b=d[1],f=function(){return b(!1)},h=p();return Object(H.jsxs)("div",{children:[Object(H.jsx)(j.a,{onClick:function(){return b(!0)},children:"Create post"}),Object(H.jsx)(Y.a,{sx:{maxWidth:400,maxHeight:300,position:"fixed",top:50,margin:"0 auto"},open:l,onClose:f,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(H.jsxs)(X.a,{onSubmit:function(){h(w({title:n,body:o})),f(),c(""),s("")},component:"form",sx:{display:"flex",flexDirection:"column",alignItems:"center",borderRadius:3,bgcolor:"#eee",padding:2,"& .MuiTextField-root":{m:1,width:380}},noValidate:!0,autoComplete:"off",children:[Object(H.jsx)($.a,{required:!0,id:"outlined-basic",label:"Enter title",variant:"outlined",value:n,onChange:function(t){return c(t.target.value)}}),Object(H.jsx)($.a,{required:!0,id:"outlined-basic",label:"Enter post's content",variant:"outlined",value:o,onChange:function(t){return s(t.target.value)}}),Object(H.jsxs)(Z.a,{variant:"contained","aria-label":"outlined primary button group",children:[Object(H.jsx)(j.a,{onClick:f,children:"Cancel"}),Object(H.jsx)(j.a,{type:"submit",children:"Create"})]})]})})]})},ut=function(){var t=f(U);return Object(H.jsx)("div",{className:"App",children:Object(H.jsxs)("main",{className:"main-content",children:[Object(H.jsxs)("div",{className:"group",children:[Object(H.jsx)(st,{}),Object(H.jsx)("div",{className:"sidebar",children:Object(H.jsx)(D,{})})]}),Object(H.jsx)("div",{className:"content",children:t?Object(H.jsx)(ot,{}):Object(H.jsx)("div",{className:"selection-message",children:"Click on post to select"})})]})})},dt=Object(m.a)({reducer:{posts:q}});i.a.render(Object(H.jsx)(c.a.StrictMode,{children:Object(H.jsx)(b.a,{store:dt,children:Object(H.jsx)(ut,{})})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.cf1df6ec.chunk.js.map