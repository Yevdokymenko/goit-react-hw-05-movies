"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r,u,a,c=e(885),o=e(791),s=e(689),i=e(390),f=e(168),p=e(444),h=p.ZP.li(r||(r=(0,f.Z)(["\n  margin-bottom: 32px;\n"]))),v=p.ZP.p(u||(u=(0,f.Z)(["\n  margin-top: 8px;\n  font-size: 16px;\n  line-height: 1.5;\n"]))),d=p.ZP.p(a||(a=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n"]))),l=e(184),m=function(){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],u=(0,s.UO)().movieId;return(0,o.useEffect)((function(){(0,i.tx)(u).then(r).catch((function(t){return console.log(t)}))}),[u]),0===e.length?"We don't have any reviews for this movie.":(0,l.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,l.jsxs)(h,{children:[(0,l.jsxs)(d,{children:["Author: ",e]}),(0,l.jsx)(v,{children:r})]},n)}))})}},390:function(t,n,e){e.d(n,{M1:function(){return f},TP:function(){return i},qF:function(){return s},rj:function(){return o},tx:function(){return p}});var r=e(861),u=e(757),a=e.n(u),c=e(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3",c.ZP.defaults.params={api_key:"5db142e10223a3403f798ce96eef39b6",language:"en-US"};var o=function(){var t=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/search/movie?query=".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n,"/credits"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.084017d1.chunk.js.map