(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{241:function(t,e,n){"use strict";function r(t){return 1===t.length?t[0]:t.slice(0,-1).join(", ")+" and "+t[t.length-1]}n.d(e,"a",(function(){return r}))},259:function(t,e,n){"use strict";n.r(e);n(18),n(19),n(1),n(73),n(11);var r=n(9),c=n(14),l=n(30),o=n(38),f=n(23),h=n(20),v=n(39),y=n(241);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},_=function(t){Object(l.a)(n,t);var e=d(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).error=!1,t.lastFetch=null,t.interval=null,t.status=null,t}return Object(c.a)(n,[{key:"fetchPlaybackStatus",value:function(){var t=this;fetch("https://api.legendeffects.co.uk/v1/spotify/now-playing").then((function(t){return t.json()})).then((function(e){t.status=e,t.lastFetch=new Date})).catch((function(e){t.error=!0,console.warn(e)}))}},{key:"mounted",value:function(){this.fetchPlaybackStatus(),this.interval=setInterval(this.fetchPlaybackStatus,1e4)}},{key:"unmounted",value:function(){this.interval&&clearInterval(this.interval)}},{key:"artists",get:function(){if(this.status)return Object(y.a)(this.status.item.artists.map((function(t){return'<a class="link-reset" href="'.concat(t.href,'">').concat(t.name,"</a>")})))}},{key:"album",get:function(){var t;return null===(t=this.status)||void 0===t?void 0:t.item.album}}]),n}(v.Vue),k=_=m([v.Component],_),j=n(28),component=Object(j.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.error?n("div",[t._v("\n  Error fetching playback status\n")]):null===t.status?n("div",[t._v("\n  Fetching playback status...\n")]):n("div",[n("a",{staticClass:"link-reset",attrs:{href:t.status.item.href}},[t._v(t._s(t.status.item.name))]),t._v(" "),n("span",{staticClass:"c-theme layout"},[t._v("by")]),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.artists)}}),t._v(" "),n("span",{staticClass:"c-theme layout"},[t._v("on")]),t._v(" "),n("a",{staticClass:"link-reset",attrs:{href:t.album.href}},[t._v(t._s(t.album.name))]),t._v(" "+t._s(t.status.is_playing?"":"(Paused)")+"\n")])}),[],!1,null,null,null);e.default=component.exports}}]);