"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{680:function(n,t,e){e.r(t);var r=e(439),a=e(791),u=e(689),c=e(87),i=e(245),s=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],o=t[1],p=(0,u.TH)();return(0,a.useEffect)((function(){(0,i._k)().then(o)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"Trending today"}),(0,s.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.original_title;return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"movies/".concat(t),state:{from:p},children:e})},t)}))})]})}},245:function(n,t,e){e.d(t,{BG:function(){return l},_k:function(){return s},bI:function(){return p},cd:function(){return k},kK:function(){return h}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="d492b6582f5fe5294bae17dd5d072295";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("trending/movie/day?api_key=".concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=680.ecc192af.chunk.js.map