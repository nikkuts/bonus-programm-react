"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[501],{7501:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(9439),a=n(5861),u=n(4687),c=n.n(u),o=n(5294),s={},p=n(3329);function i(){var e=function(e){var t=parseFloat(e);return!isNaN(t)&&t%40===0||(alert("\u0421\u0443\u043c\u0430 \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0431\u0443\u0442\u0438 \u043a\u0440\u0430\u0442\u043d\u043e\u044e 40"),!1)},t=function(){var t=(0,a.Z)(c().mark((function t(n){var a,u,s,p,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=n.currentTarget,u=a.elements.amount.value,e(u)){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,t.next=8,o.Z.post("/api/payments/donat",{amount:u});case 8:s=t.sent,p=s.data,(i=document.createElement("form")).method="POST",i.action="https://www.liqpay.ua/api/3/checkout",i.acceptCharset="utf-8",Object.entries(p).forEach((function(e){var t=(0,r.Z)(e,2),n=t[0],a=t[1],u=document.createElement("input");u.type="hidden",u.name=n,u.value=a,i.appendChild(u)})),document.body.appendChild(i),i.submit(),document.body.removeChild(i),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(5),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u0444\u043e\u0440\u043c\u0438:",t.t0),alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0440\u043c\u0438. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0438.");case 24:return t.prev=24,a.reset(),t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[5,20,24,27]])})));return function(e){return t.apply(this,arguments)}}();return(0,p.jsxs)("form",{onSubmit:t,className:s.form,children:[(0,p.jsxs)("label",{className:s.label,children:["\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0443\u043c\u043c\u0443",(0,p.jsx)("input",{type:"number",name:"amount"})]}),(0,p.jsx)("button",{type:"submit",className:s.button,children:"\u041f\u0456\u0434\u0442\u0440\u0438\u043c\u0430\u0442\u0438"})]})}o.Z.defaults.baseURL="https://bonus-programm-backend.onrender.com"}}]);
//# sourceMappingURL=501.0cccef37.chunk.js.map