function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}function r(t){return t&&t.default||t}var o,a=n((function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new R(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=k(i,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?d:h,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",m={};function y(){}function g(){}function b(){}var $={};$[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(O([])));x&&x!==r&&o.call(x,i)&&($=x);var _=b.prototype=y.prototype=Object.create($);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(a,i,u,c){var f=l(e[a],e,i);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):n.resolve(p).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,c)}))}c(f.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return g.prototype=_.constructor=b,b.constructor=g,g.displayName=f(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[u]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(_),f(_,c,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),f=o.call(i,"finallyLoc");if(c&&f){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}));function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?p(e):n}function v(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(){}function g(t,e){for(var n in e)t[n]=e[n];return t}function b(t){return t()}function $(){return Object.create(null)}function w(t){t.forEach(b)}function x(t){return"function"==typeof t}function _(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function E(t){if(null==t)return y;for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=t.subscribe.apply(t,n);return o.unsubscribe?function(){return o.unsubscribe()}:o}function S(t){var e;return E(t,(function(t){return e=t}))(),e}function k(t,e,n){t.$$.on_destroy.push(E(e,n))}function L(t,e,n,r){return t[1]&&r?g(n.ctx.slice(),t[1](r(e))):n.ctx}function j(e,n,r,o,a,i,u){var c=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],u=Math.max(n.dirty.length,a.length),c=0;c<u;c+=1)i[c]=n.dirty[c]|a[c];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(c){var f=L(n,r,o,u);e.p(f,c)}}function R(t){return null==t?"":t}function O(t,e){t.appendChild(e)}function P(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode.removeChild(t)}function N(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function C(){return I(" ")}function q(){return I("")}function U(t,e,n,r){return t.addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}function D(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function G(t){return Array.from(t.childNodes)}function J(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,u=[];i<a.attributes.length;){var c=a.attributes[i++];n[c.name]||u.push(c.name)}for(var f=0;f<u.length;f++)a.removeAttribute(u[f]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):T(e)}function F(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return I(e)}function B(t){return F(t," ")}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function K(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function V(t){o=t}function Y(){if(!o)throw new Error("Function called outside component initialization");return o}function H(t){Y().$$.on_mount.push(t)}var z=[],Q=[],W=[],X=[],Z=Promise.resolve(),tt=!1;function et(t){W.push(t)}var nt=!1,rt=new Set;function ot(){if(!nt){nt=!0;do{for(var t=0;t<z.length;t+=1){var e=z[t];V(e),at(e.$$)}for(V(null),z.length=0;Q.length;)Q.pop()();for(var n=0;n<W.length;n+=1){var r=W[n];rt.has(r)||(rt.add(r),r())}W.length=0}while(z.length);for(;X.length;)X.pop()();tt=!1,nt=!1,rt.clear()}}function at(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}var it,ut=new Set;function ct(){it={r:0,c:[],p:it}}function ft(){it.r||w(it.c),it=it.p}function st(t,e){t&&t.i&&(ut.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if(ut.has(t))return;ut.add(t),it.c.push((function(){ut.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}var pt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ht(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],u=e[a];if(u){for(var c in i)c in u||(r[c]=1);for(var f in u)o[f]||(n[f]=u[f],o[f]=1);t[a]=u}else for(var s in i)o[s]=1}for(var l in r)l in n||(n[l]=void 0);return n}function vt(e){return"object"===t(e)&&null!==e?e:{}}function dt(t){t&&t.c()}function mt(t,e){t&&t.l(e)}function yt(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,u=r.after_update;o&&o.m(e,n),et((function(){var e=a.map(b).filter(x);i?i.push.apply(i,v(e)):w(e),t.$$.on_mount=[]})),u.forEach(et)}function gt(t,e){var n=t.$$;null!==n.fragment&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){-1===t.$$.dirty[0]&&(z.push(t),tt||(tt=!0,Z.then(ot)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $t(t,e,n,r,a,i){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=o;V(t);var f=e.props||{},s=t.$$={fragment:null,ctx:null,props:i,update:y,not_equal:a,bound:$(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:$(),dirty:u,skip_bound:!1},l=!1;if(s.ctx=n?n(t,f,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&a(s.ctx[e],s.ctx[e]=r)&&(!s.skip_bound&&s.bound[e]&&s.bound[e](r),l&&bt(t,e)),n})):[],s.update(),l=!0,w(s.before_update),s.fragment=!!r&&r(s.ctx),e.target){if(e.hydrate){var p=G(e.target);s.fragment&&s.fragment.l(p),p.forEach(A)}else s.fragment&&s.fragment.c();e.intro&&st(t.$$.fragment),yt(t,e.target,e.anchor),ot()}V(c)}var wt=function(){function t(){d(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){gt(this,1),this.$destroy=y}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&m(e.prototype,n),r&&m(e,r),t}(),xt=[];function _t(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,r=[];function o(n){if(_(t,n)&&(t=n,e)){for(var o=!xt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),xt.push(i,t)}if(o){for(var u=0;u<xt.length;u+=2)xt[u][0](xt[u+1]);xt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,u=[a,i];return r.push(u),1===r.length&&(e=n(o)||y),a(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var Et={};function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function kt(t){var e,n,r,o,a,i,u,f,s,l,p,h,v,d,m,g;return{c:function(){e=T("nav"),n=T("ul"),r=T("li"),o=T("a"),a=I("home"),u=C(),f=T("li"),s=T("a"),l=I("about"),h=C(),v=T("li"),d=T("a"),m=I("blog"),this.h()},l:function(t){var i=G(e=J(t,"NAV",{class:!0})),c=G(n=J(i,"UL",{class:!0})),p=G(r=J(c,"LI",{class:!0})),y=G(o=J(p,"A",{"aria-current":!0,href:!0}));a=F(y,"home"),y.forEach(A),p.forEach(A),u=B(c);var g=G(f=J(c,"LI",{class:!0})),b=G(s=J(g,"A",{"aria-current":!0,href:!0}));l=F(b,"about"),b.forEach(A),g.forEach(A),h=B(c);var $=G(v=J(c,"LI",{class:!0})),w=G(d=J($,"A",{rel:!0,"aria-current":!0,href:!0}));m=F(w,"blog"),w.forEach(A),$.forEach(A),c.forEach(A),i.forEach(A),this.h()},h:function(){D(o,"aria-current",i=void 0===t[0]?"page":void 0),D(o,"href","."),D(r,"class","svelte-1ys5e1k"),D(s,"aria-current",p="about"===t[0]?"page":void 0),D(s,"href","about"),D(f,"class","svelte-1ys5e1k"),D(d,"rel","prefetch"),D(d,"aria-current",g="blog"===t[0]?"page":void 0),D(d,"href","blog"),D(v,"class","svelte-1ys5e1k"),D(n,"class","svelte-1ys5e1k"),D(e,"class","svelte-1ys5e1k")},m:function(t,i){P(t,e,i),O(e,n),O(n,r),O(r,o),O(o,a),O(n,u),O(n,f),O(f,s),O(s,l),O(n,h),O(n,v),O(v,d),O(d,m)},p:function(t,e){var n=c(e,1)[0];1&n&&i!==(i=void 0===t[0]?"page":void 0)&&D(o,"aria-current",i),1&n&&p!==(p="about"===t[0]?"page":void 0)&&D(s,"aria-current",p),1&n&&g!==(g="blog"===t[0]?"page":void 0)&&D(d,"aria-current",g)},i:y,o:y,d:function(t){t&&A(e)}}}function Lt(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var jt=function(t){l(n,wt);var e=St(n);function n(t){var r;return d(this,n),$t(p(r=e.call(this)),t,Lt,kt,_,{segment:0}),r}return n}();function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function Ot(t){var e,n,r,o;e=new jt({props:{segment:t[0]}});var a=t[2].default,i=function(t,e,n,r){if(t){var o=L(t,e,n,r);return t[0](o)}}(a,t,t[1],null);return{c:function(){dt(e.$$.fragment),n=C(),r=T("main"),i&&i.c(),this.h()},l:function(t){mt(e.$$.fragment,t),n=B(t);var o=G(r=J(t,"MAIN",{class:!0}));i&&i.l(o),o.forEach(A),this.h()},h:function(){D(r,"class","svelte-1fjtf2m")},m:function(t,a){yt(e,t,a),P(t,n,a),P(t,r,a),i&&i.m(r,null),o=!0},p:function(t,n){var r=c(n,1)[0],o={};1&r&&(o.segment=t[0]),e.$set(o),i&&i.p&&2&r&&j(i,a,t,t[1],r,null,null)},i:function(t){o||(st(e.$$.fragment,t),st(i,t),o=!0)},o:function(t){lt(e.$$.fragment,t),lt(i,t),o=!1},d:function(t){gt(e,t),t&&A(n),t&&A(r),i&&i.d(t)}}}function Pt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var At=function(t){l(n,wt);var e=Rt(n);function n(t){var r;return d(this,n),$t(p(r=e.call(this)),t,Pt,Ot,_,{segment:0}),r}return n}();function Nt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function Tt(t){var e,n,r=t[1].stack+"";return{c:function(){e=T("pre"),n=I(r)},l:function(t){var o=G(e=J(t,"PRE",{}));n=F(o,r),o.forEach(A)},m:function(t,r){P(t,e,r),O(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&M(n,r)},d:function(t){t&&A(e)}}}function It(t){var e,n,r,o,a,i,u,f,s,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Tt(t);return{c:function(){n=C(),r=T("h1"),o=I(t[0]),a=C(),i=T("p"),u=I(l),f=C(),p&&p.c(),s=q(),this.h()},l:function(e){K('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(A),n=B(e);var c=G(r=J(e,"H1",{class:!0}));o=F(c,t[0]),c.forEach(A),a=B(e);var h=G(i=J(e,"P",{class:!0}));u=F(h,l),h.forEach(A),f=B(e),p&&p.l(e),s=q(),this.h()},h:function(){D(r,"class","svelte-8lferx"),D(i,"class","svelte-8lferx")},m:function(t,e){P(t,n,e),P(t,r,e),O(r,o),P(t,a,e),P(t,i,e),O(i,u),P(t,f,e),p&&p.m(t,e),P(t,s,e)},p:function(t,n){var r=c(n,1)[0];1&r&&e!==(e=t[0])&&(document.title=e),1&r&&M(o,t[0]),2&r&&l!==(l=t[1].message+"")&&M(u,l),t[2]&&t[1].stack?p?p.p(t,r):((p=Tt(t)).c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:y,o:y,d:function(t){t&&A(n),t&&A(r),t&&A(a),t&&A(i),t&&A(f),p&&p.d(t),t&&A(s)}}}function Ct(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var qt=function(t){l(n,wt);var e=Nt(n);function n(t){var r;return d(this,n),$t(p(r=e.call(this)),t,Ct,It,_,{status:0,error:1}),r}return n}();function Ut(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function Dt(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=g(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&dt(e.$$.fragment),n=q()},l:function(t){e&&mt(e.$$.fragment,t),n=q()},m:function(t,o){e&&yt(e,t,o),P(t,n,o),r=!0},p:function(t,r){var u=16&r?ht(o,[vt(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){ct();var c=e;lt(c.$$.fragment,1,0,(function(){gt(c,1)})),ft()}a?(dt((e=new a(i())).$$.fragment),st(e.$$.fragment,1),yt(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i:function(t){r||(e&&st(e.$$.fragment,t),r=!0)},o:function(t){e&&lt(e.$$.fragment,t),r=!1},d:function(t){t&&A(n),e&&gt(e,t)}}}function Gt(t){var e,n;return e=new qt({props:{error:t[0],status:t[1]}}),{c:function(){dt(e.$$.fragment)},l:function(t){mt(e.$$.fragment,t)},m:function(t,r){yt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(st(e.$$.fragment,t),n=!0)},o:function(t){lt(e.$$.fragment,t),n=!1},d:function(t){gt(e,t)}}}function Jt(t){var e,n,r,o,a=[Gt,Dt],i=[];function u(t,e){return t[0]?0:1}return e=u(t),n=i[e]=a[e](t),{c:function(){n.c(),r=q()},l:function(t){n.l(t),r=q()},m:function(t,n){i[e].m(t,n),P(t,r,n),o=!0},p:function(t,o){var c=e;(e=u(t))===c?i[e].p(t,o):(ct(),lt(i[c],1,1,(function(){i[c]=null})),ft(),(n=i[e])?n.p(t,o):(n=i[e]=a[e](t)).c(),st(n,1),n.m(r.parentNode,r))},i:function(t){o||(st(n),o=!0)},o:function(t){lt(n),o=!1},d:function(t){i[e].d(t),t&&A(r)}}}function Ft(t){for(var e,n,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Jt]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=g(o,r[a]);return e=new At({props:o}),{c:function(){dt(e.$$.fragment)},l:function(t){mt(e.$$.fragment,t)},m:function(t,r){yt(e,t,r),n=!0},p:function(t,n){var o=c(n,1)[0],a=12&o?ht(r,[4&o&&{segment:t[2][0]},8&o&&vt(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i:function(t){n||(st(e.$$.fragment,t),n=!0)},o:function(t){lt(e.$$.fragment,t),n=!1},d:function(t){gt(e,t)}}}function Bt(t,e,n){var r,o,a,i=e.stores,u=e.error,c=e.status,f=e.segments,s=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return r=h,Y().$$.after_update.push(r),o=Et,a=i,Y().$$.context.set(o,a),t.$$set=function(t){"stores"in t&&n(5,i=t.stores),"error"in t&&n(0,u=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,f=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,p=t.level1),"notify"in t&&n(6,h=t.notify)},[u,c,f,s,p,i,h]}var Mt,Kt=function(t){l(n,wt);var e=Ut(n);function n(t){var r;return d(this,n),$t(p(r=e.call(this)),t,Bt,Ft,_,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Vt=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],Yt=[{js:function(){return Promise.all([import("./index.398f64a1.js"),__inject_styles(["client-0643e257.css","index-268d5798.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./about.144b4a2f.js"),__inject_styles(["client-0643e257.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.75c3bf76.js"),__inject_styles(["client-0643e257.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].33c503c0.js"),__inject_styles(["client-0643e257.css","[slug]-5bc8f95f.css"])]).then((function(t){return t[0]}))}}],Ht=(Mt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:3,params:function(t){return{slug:Mt(t[1])}}}]}]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function zt(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function u(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))}function Qt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Wt,Xt=1;var Zt,te,ee="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},ne={};function re(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var r=c(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=r[1],a=r[2],i=void 0===a?"":a;"string"==typeof n[o]&&(n[o]=[n[o]]),"object"===t(n[o])?n[o].push(i):n[o]=i})),n}function oe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Zt))return null;var e=t.pathname.slice(Zt.length);if(""===e&&(e="/"),!Vt.some((function(t){return t.test(e)})))for(var n=0;n<Ht.length;n+=1){var r=Ht[n],o=r.pattern.exec(e);if(o){var a=re(t.search),i=r.parts[r.parts.length-1],u=i.params?i.params(o):{},c={host:location.host,path:e,query:a,params:u};return{href:t.href,route:r,match:o,page:c}}}}function ae(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Qt(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=oe(a);if(i)ce(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),ee.pushState({id:Wt},"",a.href)}}}else location.hash||e.preventDefault()}}}function ie(){return{x:pageXOffset,y:pageYOffset}}function ue(t){if(ne[Wt]=ie(),t.state){var e=oe(new URL(location.href));e?ce(e,t.state.id):location.href=location.href}else(function(t){Wt=t})(Xt=Xt+1),ee.replaceState({id:Wt},"",location.href)}function ce(t,e,n,r){return zt(this,void 0,void 0,a.mark((function o(){var i,u,c,f;return a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!e)?Wt=e:(u=ie(),ne[Wt]=u,Wt=e=++Xt,ne[Wt]=n?u:{x:0,y:0}),o.next=4,te(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(c=ne[e],r&&(f=document.getElementById(r.slice(1)))&&(c={x:0,y:f.getBoundingClientRect().top+scrollY}),ne[Wt]=c,i||f?scrollTo(c.x,c.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),o)})))}function fe(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var se,le=null;function pe(t){return le&&le.href===t.href?le.promise:Te(t)}function he(t){var e=Qt(t.target);e&&"prefetch"===e.rel&&function(t){var e=oe(new URL(t,fe(document)));if(e)le&&t===le.href||(le={href:t,promise:Te(e)}),le.promise}(e.href)}function ve(t){clearTimeout(se),se=setTimeout((function(){he(t)}),20)}function de(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=oe(new URL(t,fe(document)));return n?(ee[e.replaceState?"replaceState":"pushState"]({id:Wt},"",t),ce(n,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var me,ye,ge,be,$e,we,xe,_e,Ee,Se="undefined"!=typeof __SAPPER__&&__SAPPER__,ke=!1,Le=[],je="{}",Re={page:function(t){var e=_t(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:_t(null),session:_t(Se&&Se.session)};function Oe(t,e){var n=t.error;return Object.assign({error:n},e)}function Pe(t){return zt(this,void 0,void 0,a.mark((function e(){var n,r,o,i,u,c;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me&&Re.preloading.set(!0),n=pe(t),r=ye={},e.next=5,n;case 5:if(o=e.sent,i=o.redirect,r===ye){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,de(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return u=o.props,c=o.branch,e.next=17,Ae(c,u,Oe(u,t.page));case 17:case"end":return e.stop()}}),e)})))}function Ae(t,e,n){return zt(this,void 0,void 0,a.mark((function r(){return a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(Re.page.set(n),Re.preloading.set(!1),!me){r.next=6;break}me.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:Re.page.subscribe},preloading:{subscribe:Re.preloading.subscribe},session:Re.session},r.next=9,ge;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=Re.page.notify,me=new Kt({target:we,props:e,hydrate:!0});case 13:Le=t,je=JSON.stringify(n.query),ke=!0,$e=!1;case 17:case"end":return r.stop()}}),r)})))}function Ne(t,e,n,r){if(r!==je)return!0;var o=Le[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function Te(t){return zt(this,void 0,void 0,a.mark((function e(){var n,r,o,i,u,c,f,s,l,p,h,v,d=this;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,o=r.path.split("/").filter(Boolean),i=null,u={error:null,status:200,segments:[o[0]]},c={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},ge||(f=function(){return{}},ge=Se.preloaded[0]||f.call(c,{host:r.host,path:r.path,query:r.query,params:{}},be)),l=1,e.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return zt(d,void 0,void 0,a.mark((function i(){var f,s,d,m,y,g;return a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(f=o[n],Ne(n,f,h,p)&&(v=!0),u.segments[l]=o[n+1],e){a.next=5;break}return a.abrupt("return",{segment:f});case 5:if(s=l++,$e||v||!Le[n]||Le[n].part!==e.i){a.next=8;break}return a.abrupt("return",Le[n]);case 8:return v=!1,a.next=11,Yt[e.i].js();case 11:if(d=a.sent,m=d.default,y=d.preload,!ke&&Se.preloaded[n+1]){a.next=25;break}if(!y){a.next=21;break}return a.next=18,y.call(c,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},be);case 18:a.t0=a.sent,a.next=22;break;case 21:a.t0={};case 22:g=a.t0,a.next=26;break;case 25:g=Se.preloaded[n+1];case 26:return a.abrupt("return",u["level".concat(s)]={component:m,props:g,segment:f,match:h,part:e.i});case 27:case"end":return a.stop()}}),i)})))})));case 13:s=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),u.error=e.t0,u.status=500,s=[];case 21:return e.abrupt("return",{redirect:i,props:u,branch:s});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}Re.session.subscribe((function(t){return zt(void 0,void 0,void 0,a.mark((function e(){var n,r,o,i,u,c;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(be=t,ke){e.next=3;break}return e.abrupt("return");case 3:return $e=!0,n=oe(new URL(location.href)),r=ye={},e.next=8,Te(n);case 8:if(o=e.sent,i=o.redirect,u=o.props,c=o.branch,r===ye){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,de(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,Ae(c,u,Oe(u,n.page));case 21:case"end":return e.stop()}}),e)})))})),xe={target:document.querySelector("#sapper")},_e=xe.target,we=_e,Ee=Se.baseUrl,Zt=Ee,te=Pe,"scrollRestoration"in ee&&(ee.scrollRestoration="manual"),addEventListener("beforeunload",(function(){ee.scrollRestoration="auto"})),addEventListener("load",(function(){ee.scrollRestoration="manual"})),addEventListener("click",ae),addEventListener("popstate",ue),addEventListener("touchstart",he),addEventListener("mousemove",ve),Se.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=Se.session,a=Se.preloaded,i=Se.status,u=Se.error;ge||(ge=a&&a[0]);var c={error:u,status:i,session:o,level0:{props:ge},level1:{props:{status:i,error:u},component:qt},segments:a},f=re(r);Ae([],c,{host:e,path:n,query:f,params:{},error:u})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;ee.replaceState({id:Xt},"",n);var r=oe(new URL(location.href));if(r)return ce(r,Xt,!0,e)}));export{H as A,pt as B,R as C,O as D,q as E,N as F,I as G,F as H,M as I,dt as J,K,mt as L,yt as M,st as N,lt as O,gt as P,a as Q,wt as S,v as _,t as a,r as b,n as c,c as d,e,d as f,S as g,l as h,f as i,h as j,$t as k,p as l,et as m,T as n,J as o,G as p,A as q,D as r,_ as s,P as t,C as u,B as v,_t as w,U as x,y,k as z};

import __inject_styles from './inject_styles.fe622066.js';