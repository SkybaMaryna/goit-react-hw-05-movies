"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{257:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r,a,s=t(439),c=t(791),i=t(689),u=t(87),o=t(245),p=t(168),l=t(444),d=l.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),f=l.ZP.button(a||(a=(0,p.Z)(["\n  margin: 10px;\n"]))),h=t(184),v=function(){var e=(0,i.UO)().movieId,n=(0,c.useState)(null),t=(0,s.Z)(n,2),r=t[0],a=t[1],p=(0,i.TH)(),l=(0,i.s0)();return(0,c.useEffect)((function(){(0,o.BG)(e).then(a)}),[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{type:"button",onClick:function(){var e,n;l(null!==(e=null===p||void 0===p||null===(n=p.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/")},children:"Go back"}),r&&(0,h.jsxs)(d,{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(r.poster_path),alt:r.original_title,width:"200"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:[r.original_title," (",r.release_date.slice(0,4),")"]}),(0,h.jsxs)("p",{children:["User score: ",Number.parseInt(10*r.vote_average),"%"]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("b",{children:"Overview "}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),r.overview]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("b",{children:"Genres"}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),r.genres.reduce((function(e,n){return e+n.name+" "}),"")]})]})]}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h4",{children:"Additional information"}),(0,h.jsx)(u.rU,{to:"cast",children:"Cast"}),(0,h.jsx)("br",{}),(0,h.jsx)(u.rU,{to:"reviews",children:"Reviews"})]}),(0,h.jsx)(i.j3,{})]})}},245:function(e,n,t){t.d(n,{BG:function(){return d},_k:function(){return u},bI:function(){return p},cd:function(){return x},kK:function(){return h}});var r=t(861),a=t(757),s=t.n(a),c=t(243),i="d492b6582f5fe5294bae17dd5d072295";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("trending/movie/day?api_key=".concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=257.f34a820b.chunk.js.map