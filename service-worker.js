!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./",r(r.s=2)}([function(t,e,r){t.exports=r(4)},function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,"a",(function(){return o}))},function(t,e,r){"use strict";r.r(e),function(t){var e=r(0),n=r.n(e),o=r(1),i="undefined"===typeof t||!1;i?(importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),workbox.setConfig({debug:!0})):(importScripts("/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"/workbox/"})),self.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&self.skipWaiting()})),workbox.core.clientsClaim(),i||(workbox.precaching.precacheAndRoute([{'revision':'3e8e3e26ac317a9c09404cc3da6a180c','url':'./index.html'},{'revision':null,'url':'./static/css/main.e399b631.chunk.css'},{'revision':null,'url':'./static/js/0.c18128f9.chunk.js'},{'revision':null,'url':'./static/js/53.7cda4be8.chunk.js'},{'revision':null,'url':'./static/js/54.95e352fd.chunk.js'},{'revision':null,'url':'./static/js/55.99631bfc.chunk.js'},{'revision':null,'url':'./static/js/56.3b0f6b57.chunk.js'},{'revision':null,'url':'./static/js/57.4de1d8be.chunk.js'},{'revision':null,'url':'./static/js/58.31f38f35.chunk.js'},{'revision':null,'url':'./static/js/59.27111213.chunk.js'},{'revision':null,'url':'./static/js/60.d754759b.chunk.js'},{'revision':null,'url':'./static/js/61.59c2aa10.chunk.js'},{'revision':null,'url':'./static/js/62.4bef3d23.chunk.js'},{'revision':null,'url':'./static/js/63.4b8a3b6c.chunk.js'},{'revision':null,'url':'./static/js/64.dc0ed2fa.chunk.js'},{'revision':null,'url':'./static/js/bug-issue-template.c9805cb4.chunk.js'},{'revision':null,'url':'./static/js/firebase.f54323ac.chunk.js'},{'revision':null,'url':'./static/js/i18n-ar-SA-json.86cfcf45.chunk.js'},{'revision':null,'url':'./static/js/i18n-bg-BG-json.4e9d4e20.chunk.js'},{'revision':null,'url':'./static/js/i18n-bn-BD-json.130967d8.chunk.js'},{'revision':null,'url':'./static/js/i18n-ca-ES-json.97c01211.chunk.js'},{'revision':null,'url':'./static/js/i18n-cs-CZ-json.39a502e9.chunk.js'},{'revision':null,'url':'./static/js/i18n-da-DK-json.555d6890.chunk.js'},{'revision':null,'url':'./static/js/i18n-de-DE-json.578b4ff2.chunk.js'},{'revision':null,'url':'./static/js/i18n-el-GR-json.5afe9182.chunk.js'},{'revision':null,'url':'./static/js/i18n-es-ES-json.71324439.chunk.js'},{'revision':null,'url':'./static/js/i18n-eu-ES-json.2bbc5a7b.chunk.js'},{'revision':null,'url':'./static/js/i18n-fa-IR-json.339211be.chunk.js'},{'revision':null,'url':'./static/js/i18n-fi-FI-json.fc73a545.chunk.js'},{'revision':null,'url':'./static/js/i18n-fr-FR-json.3498cecb.chunk.js'},{'revision':null,'url':'./static/js/i18n-he-IL-json.b5d6c726.chunk.js'},{'revision':null,'url':'./static/js/i18n-hi-IN-json.d57e8abb.chunk.js'},{'revision':null,'url':'./static/js/i18n-hu-HU-json.0dbeb750.chunk.js'},{'revision':null,'url':'./static/js/i18n-id-ID-json.742eaac7.chunk.js'},{'revision':null,'url':'./static/js/i18n-it-IT-json.d2bbe94e.chunk.js'},{'revision':null,'url':'./static/js/i18n-ja-JP-json.2f66c21a.chunk.js'},{'revision':null,'url':'./static/js/i18n-kab-KAB-json.3a681312.chunk.js'},{'revision':null,'url':'./static/js/i18n-kk-KZ-json.449bb1bd.chunk.js'},{'revision':null,'url':'./static/js/i18n-ko-KR-json.c8675cdb.chunk.js'},{'revision':null,'url':'./static/js/i18n-lt-LT-json.66989560.chunk.js'},{'revision':null,'url':'./static/js/i18n-lv-LV-json.efa341c3.chunk.js'},{'revision':null,'url':'./static/js/i18n-mr-IN-json.04582db7.chunk.js'},{'revision':null,'url':'./static/js/i18n-my-MM-json.07307047.chunk.js'},{'revision':null,'url':'./static/js/i18n-nb-NO-json.60c57f9d.chunk.js'},{'revision':null,'url':'./static/js/i18n-nl-NL-json.2f65cd12.chunk.js'},{'revision':null,'url':'./static/js/i18n-nn-NO-json.d1bb71c7.chunk.js'},{'revision':null,'url':'./static/js/i18n-oc-FR-json.87fed869.chunk.js'},{'revision':null,'url':'./static/js/i18n-pa-IN-json.50a8e2f4.chunk.js'},{'revision':null,'url':'./static/js/i18n-pl-PL-json.e5caa1fc.chunk.js'},{'revision':null,'url':'./static/js/i18n-pt-BR-json.e060c1db.chunk.js'},{'revision':null,'url':'./static/js/i18n-pt-PT-json.aa8120fa.chunk.js'},{'revision':null,'url':'./static/js/i18n-ro-RO-json.4b136f40.chunk.js'},{'revision':null,'url':'./static/js/i18n-ru-RU-json.db91e4e4.chunk.js'},{'revision':null,'url':'./static/js/i18n-si-LK-json.a29bb0b5.chunk.js'},{'revision':null,'url':'./static/js/i18n-sk-SK-json.0a578896.chunk.js'},{'revision':null,'url':'./static/js/i18n-sl-SI-json.81a05f8c.chunk.js'},{'revision':null,'url':'./static/js/i18n-sv-SE-json.3e19096c.chunk.js'},{'revision':null,'url':'./static/js/i18n-ta-IN-json.3701e22c.chunk.js'},{'revision':null,'url':'./static/js/i18n-tr-TR-json.578a5deb.chunk.js'},{'revision':null,'url':'./static/js/i18n-uk-UA-json.2dcf34cf.chunk.js'},{'revision':null,'url':'./static/js/i18n-zh-CN-json.baa08a7a.chunk.js'},{'revision':null,'url':'./static/js/i18n-zh-HK-json.4983896f.chunk.js'},{'revision':null,'url':'./static/js/i18n-zh-TW-json.40d1110c.chunk.js'},{'revision':null,'url':'./static/js/main.ac35e199.chunk.js'},{'revision':null,'url':'./static/js/pwacompat.6ddeba43.chunk.js'},{'revision':null,'url':'./static/js/runtime-main.dbf6e1ca.js'},{'revision':null,'url':'./static/js/socketIoClient.8f65feec.chunk.js'}]),workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("./index.html"),{blacklist:[/^\/_/,/\/[^/?]+\.[^/]+$/]})),workbox.routing.registerRoute(new RegExp("/(fonts.css|.+.(ttf|woff2|otf))"),new workbox.strategies.StaleWhileRevalidate({cacheName:"fonts",plugins:[new workbox.expiration.Plugin({maxEntries:10})]})),self.addEventListener("fetch",(function(t){if("POST"===t.request.method&&t.request.url.endsWith("/web-share-target"))return t.respondWith(Object(o.a)(n.a.mark((function e(){var r,o,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request.formData();case 2:return r=e.sent,o=r.get("file"),e.next=6,caches.open("web-share-target");case 6:return i=e.sent,e.next=9,i.put("shared-file",new Response(o));case 9:return e.abrupt("return",Response.redirect("/?web-share-target",303));case 10:case"end":return e.stop()}}),e)})))())}))}.call(this,r(3))},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,s=[],f=!1,l=-1;function h(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&p())}function p(){if(!f){var t=u(h);f=!0;for(var e=s.length;e;){for(c=s,s=[];++l<e;)c&&c[l].run();l=-1,e=s.length}c=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];s.push(new d(t,e)),1!==s.length||f||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=T(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function v(){}function g(){}function m(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==r&&n.call(x,i)&&(w=x);var L=m.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function T(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=L.constructor=m,m.constructor=g,g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),c(L,u,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}}]);
//# sourceMappingURL=service-worker.js.map