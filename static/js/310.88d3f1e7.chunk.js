"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{47:function(n,t,e){e.d(t,{e:function(){return v}});var r,a,o,u=e(689),c=e(168),i=e(444),s=e(731),p=i.ZP.ul(r||(r=(0,c.Z)(["\n  padding-left: 16px;\n"]))),f=(0,i.ZP)(s.rU)(a||(a=(0,c.Z)(["\n  text-decoration: underline;\n  color: black;\n  font-weight: 500;\n  font-size: 20px;\n  color: black;\n  :hover {\n    color: orange;\n  }\n"]))),l=i.ZP.li(o||(o=(0,c.Z)(["\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),d=e(184),v=function(n){var t=n.movies,e=(0,u.TH)();return(0,d.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.original_title;return(0,d.jsx)(l,{children:(0,d.jsx)(f,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},310:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,o,u,c,i,s,p=e(861),f=e(885),l=e(757),d=e.n(l),v=e(791),h=e(731),x=e(390),Z=e(47),m=e(168),g=e(444),b=g.ZP.div(r||(r=(0,m.Z)(["\n  padding: 28px 32px;\n"]))),w=g.ZP.form(a||(a=(0,m.Z)(["\n  display: inline-flex;\n  margin-bottom: 28px;\n"]))),k=g.ZP.input(o||(o=(0,m.Z)(["\n  padding: 8px;\n  width: 200px;\n  font-size: 18px;\n  outline: transparent;\n  border: 1px solid #e1d3c1;\n  :hover,\n  :focus {\n    border-color: #b4a89a;\n  }\n"]))),P=g.ZP.button(u||(u=(0,m.Z)(["\n  width: 70px;\n  height: 40px;\n  font-size: 16px;\n  background-color: #faebd7;\n  border: 1px solid #e1d3c1;\n  :hover {\n    background-color: orange;\n    color: #ffffff;\n  }\n"]))),y=(g.ZP.ul(c||(c=(0,m.Z)(["\n  padding-left: 16px;\n"]))),(0,g.ZP)(h.rU)(i||(i=(0,m.Z)(["\n  text-decoration: underline;\n  color: black;\n  font-weight: 500;\n  font-size: 20px;\n  :hover {\n    color: orange;\n  }\n"]))),g.ZP.li(s||(s=(0,m.Z)(["\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),e(184)),j=function(){var n=(0,v.useState)([]),t=(0,f.Z)(n,2),e=t[0],r=t[1],a=(0,v.useState)(""),o=(0,f.Z)(a,2),u=o[0],c=o[1],i=(0,h.lr)(),s=(0,f.Z)(i,2),l=s[0],m=s[1],g=l.get("query");return(0,v.useEffect)((function(){function n(){return(n=(0,p.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.qF)(g);case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}g&&function(){n.apply(this,arguments)}()}),[g]),(0,y.jsxs)(b,{children:[(0,y.jsxs)(w,{onSubmit:function(n){n.preventDefault(),m({query:u}),c("")},children:[(0,y.jsx)(k,{type:"text",value:u,onChange:function(n){c(n.currentTarget.value.toLowerCase())}}),(0,y.jsx)(P,{type:"submit",children:"Search"})]}),!!e.length&&(0,y.jsx)(Z.e,{movies:e})]})}},390:function(n,t,e){e.d(t,{M1:function(){return p},TP:function(){return s},qF:function(){return i},rj:function(){return c},tx:function(){return f}});var r=e(861),a=e(757),o=e.n(a),u=e(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3",u.ZP.defaults.params={api_key:"5db142e10223a3403f798ce96eef39b6",language:"en-US"};var c=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=310.88d3f1e7.chunk.js.map