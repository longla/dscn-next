(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("0iUn")),i=r(n("sLSF")),a=r(n("MI3g")),s=r(n("a7VT")),u=r(n("Tit0")),p=n("5Uuq"),f=n("KI45");t.__esModule=!0,t.default=void 0;var c,l=f(n("LX0d")),h=n("CxY0"),d=p(n("q1tI")),v=(f(n("17x9")),f(n("nOHt"))),m=(n("KA3u"),n("Bu4q"));function w(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var g=new l.default,y=window.IntersectionObserver;function E(){return c||(y?c=new y(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var k=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,a.default)(this,(0,s.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}(function(e,t){return{href:w(e),as:t?w(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),a=i.href,s=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var u=window.location.pathname;a=(0,h.resolve)(u,a),s=s?(0,h.resolve)(u,s):a,t.preventDefault();var p=e.props.scroll;null==p&&(p=s.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](a,s,{shallow:e.props.shallow}).then(function(e){e&&p&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.cleanUpListeners=function(){}}},{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&y&&e&&e.tagName&&(this.cleanUpListeners=function(e,t){var n=E();return n?(n.observe(e),g.set(e,t),function(){n.unobserve(e),g.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,h.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),a={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),d.default.cloneElement(i,a)}}]),t}(d.Component);k.propTypes=void 0,k.defaultProps={prefetch:!0};var T=k;t.default=T},pTTa:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r);n("YFqc");t.default=function(){return o.a.createElement("section",{id:"landing"},o.a.createElement("div",null,o.a.createElement("a",{href:"/thongdiep",className:"btn-primary-outline"},"Xem th\xf4ng \u0111i\u1ec7p")))}},xOMe:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/landing",function(){var e=n("pTTa");return{page:e.default||e}}])}},[["xOMe",1,0]]]);