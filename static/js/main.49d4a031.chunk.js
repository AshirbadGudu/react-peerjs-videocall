(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=13},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),a=n(5),o=n(2),s=n.n(o),u=n(4),i=n(7),l=n.n(i),j=n(1),f=(n(14),n(0)),b="id-".concat(parseInt(100*Math.random())),p={video:!0,audio:{echoCancellation:!0,noiseSuppression:!0}};var d=function(){var e=Object(j.useRef)(),t=Object(j.useRef)(),n=Object(j.useRef)(),r=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia(p);case 3:t=e.sent,g(t),m.current.call(n.current.value,t).on("stream",(function(e){return w(e)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),c=Object(j.useState)(""),o=Object(a.a)(c,2),i=o[0],d=o[1],O=Object(j.useState)(!1),v=Object(a.a)(O,2),h=v[0],x=v[1],m=Object(j.useRef)(),k=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia(p);case 3:n=e.sent,g(n),t.answer(n),t.on("stream",(function(e){return w(e)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e){t.current.srcObject=e,x(!0)},g=function(t){return e.current.srcObject=t};return Object(j.useEffect)((function(){return m.current=new l.a(b),m.current.on("open",(function(e){d(e)})),m.current.on("call",k),function(){}}),[]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("header",{children:[Object(f.jsxs)("h2",{children:["Your Video Call id: ",i]}),Object(f.jsx)("button",{onClick:function(){var e;e=i,navigator.clipboard.writeText(e)},children:"copy"})]}),Object(f.jsxs)("main",{children:[Object(f.jsx)("video",{ref:e,autoPlay:!0}),Object(f.jsx)("video",{ref:t,autoPlay:!0})]}),Object(f.jsxs)("footer",{children:[Object(f.jsx)("input",{type:"text",ref:n}),h?Object(f.jsx)("button",{className:"end",onClick:function(){e.current.srcObject.getTracks().forEach((function(e){return e.stop()})),e.current.srcObject.getTracks().forEach((function(e){return e.stop()})),e.current.srcObject=null,t.current.srcObject=null,x(!1)},children:"End Call"}):Object(f.jsx)("button",{className:"start",onClick:r,children:"Call"})]})]})};c.a.render(Object(f.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.49d4a031.chunk.js.map