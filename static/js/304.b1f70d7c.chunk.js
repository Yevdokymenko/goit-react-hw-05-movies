"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{47:function(n,t,r){r.d(t,{e:function(){return d}});var e,a,u,c=r(689),o=r(168),i=r(444),s=r(731),f=i.ZP.ul(e||(e=(0,o.Z)(["\n  padding-left: 16px;\n"]))),p=(0,i.ZP)(s.rU)(a||(a=(0,o.Z)(["\n  text-decoration: underline;\n  color: black;\n  font-weight: 500;\n  font-size: 20px;\n  color: black;\n  :hover {\n    color: #c27ba0;\n  }\n"]))),l=i.ZP.li(u||(u=(0,o.Z)(["\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),v=r(184),d=function(n){var t=n.movies,r=(0,c.TH)();return(0,v.jsx)(f,{children:t.map((function(n){var t=n.id,e=n.original_title;return(0,v.jsx)(l,{children:(0,v.jsx)(p,{to:"/movies/".concat(t),state:{from:r},children:e})},t)}))})}},304:function(n,t,r){r.r(t),r.d(t,{default:function(){return m}});var e,a,u=r(861),c=r(885),o=r(757),i=r.n(o),s=r(791),f=r(390),p=r(168),l=r(444),v=l.ZP.section(e||(e=(0,p.Z)(["\n  padding: 16px 32px;\n"]))),d=l.ZP.h1(a||(a=(0,p.Z)(["\n  font-size: 500;\n  font-size: 32px;\n  margin-bottom: 16px; ;\n"]))),h=r(47),x=r(184),m=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,u.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.rj)();case 3:t=n.sent,e(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,x.jsxs)(v,{children:[(0,x.jsx)(d,{children:"Trending today"}),(0,x.jsx)(h.e,{movies:r})]})}},390:function(n,t,r){r.d(t,{M1:function(){return f},TP:function(){return s},qF:function(){return i},rj:function(){return o},tx:function(){return p}});var e=r(861),a=r(757),u=r.n(a),c=r(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3",c.ZP.defaults.params={api_key:"5db142e10223a3403f798ce96eef39b6",language:"en-US"};var o=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=304.b1f70d7c.chunk.js.map