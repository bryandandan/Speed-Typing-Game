(this["webpackJsonpSpeed-Typing-Game"]=this["webpackJsonpSpeed-Typing-Game"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),c=(n(9),n(1));var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(a.useState)(""),n=Object(c.a)(t,2),o=n[0],r=n[1],i=Object(a.useState)(e),u=Object(c.a)(i,2),l=u[0],s=u[1],m=Object(a.useState)(!1),d=Object(c.a)(m,2),f=d[0],h=d[1],g=Object(a.useState)(0),b=Object(c.a)(g,2),v=b[0],p=b[1],w=Object(a.useRef)(null);return Object(a.useEffect)((function(){f&&l>0?setTimeout((function(){s((function(e){return e-1}))}),1e3):0===l&&(h(!1),p(function(e){return e.trim().split(" ").filter((function(e){return""!==e})).length}(o)))}),[l,f]),{textBoxRef:w,handleChange:function(e){var t=e.target.value;r(t)},text:o,isTimeRunning:f,timeRemaining:l,startGame:function(){h(!0),s(e),r(""),w.current.disabled=!1,w.current.focus()},wordCount:v}};var l=function(){var e=u(30),t=e.textBoxRef,n=e.handleChange,a=e.text,r=e.isTimeRunning,i=e.timeRemaining,c=e.startGame,l=e.wordCount;return o.a.createElement("div",null,o.a.createElement("h1",null,"How fast do you type?"),o.a.createElement("textarea",{ref:t,onChange:n,value:a,disabled:!r}),o.a.createElement("h4",null,"Time remaining: ",i),o.a.createElement("button",{onClick:c,disabled:r},"Start"),o.a.createElement("h1",null,"Word count: ",l))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.b7ad3bd1.chunk.js.map