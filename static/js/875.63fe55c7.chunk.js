"use strict";(self.webpackChunkbonus_programm_react=self.webpackChunkbonus_programm_react||[]).push([[875],{9875:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n,a,l=r(5861),o=r(9439),s=r(3144),i=r.n(s),c=r(2791),u=r(5294),m=r(3708),f=r(1087),d=["title","titleId"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function b(e,t){var r=e.title,l=e.titleId,o=h(e,d);return c.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-check-square",ref:t,"aria-labelledby":l},o),r?c.createElement("title",{id:l},r):null,n||(n=c.createElement("polyline",{points:"9 11 12 14 22 4"})),a||(a=c.createElement("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})))}var v,_=c.forwardRef(b),x=(r.p,["title","titleId"]);function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function g(e,t){var r=e.title,n=e.titleId,a=j(e,x);return c.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-square",ref:t,"aria-labelledby":n},a),r?c.createElement("title",{id:n},r):null,v||(v=c.createElement("rect",{x:3,y:3,width:18,height:18,rx:2,ry:2})))}var w=c.forwardRef(g),O=(r.p,"Donat_containerDonat__m9D+a"),k="Donat_titleDonat__iEvFP",D="Donat_decriptionDonat__1mKcK",N="Donat_formDonat__LbPpx",E="Donat_listForm__SGzHI",C="Donat_label__fOJU+",P="Donat_input__h2i24",S="Donat_textarea__rs0HH",I="Donat_button__l47xr",Z="Donat_ofertaBlock__2SOWT",L="Donat_text__RmcZG",B="Donat_oferta__QUIu-",H=r(3329);function R(){var e=m.NB,t=(0,c.useState)(!1),r=(0,o.Z)(t,2),n=r[0],a=r[1],s=function(e){var t=parseFloat(e);return!isNaN(t)&&t%40===0||(alert("\u0421\u0443\u043c\u0430 \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0431\u0443\u0442\u0438 \u043a\u0440\u0430\u0442\u043d\u043e\u044e 40"),!1)},d=function(e){return!(e.length>30)||(alert("\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 30 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"),!1)},p=function(){var t=(0,l.Z)(i().mark((function t(r){var n,a,l,c,m,f;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),n=r.currentTarget,a=n.elements.amount.value,l=n.elements.comment.value.trim(),s(a)){t.next=6;break}return t.abrupt("return");case 6:if(d(l)){t.next=8;break}return t.abrupt("return");case 8:return t.prev=8,t.next=11,u.Z.post("/api/payments/donat",{amount:a,comment:l});case 11:c=t.sent,m=c.data,(f=document.createElement("form")).method="POST",f.action=e,f.acceptCharset="utf-8",Object.entries(m).forEach((function(e){var t=(0,o.Z)(e,2),r=t[0],n=t[1],a=document.createElement("input");a.type="hidden",a.name=r,a.value=n,f.appendChild(a)})),document.body.appendChild(f),f.submit(),document.body.removeChild(f),t.next=27;break;case 23:t.prev=23,t.t0=t.catch(8),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u0444\u043e\u0440\u043c\u0438:",t.t0),alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0440\u043c\u0438. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0438.");case 27:return t.prev=27,n.reset(),t.finish(27);case 30:case"end":return t.stop()}}),t,null,[[8,23,27,30]])})));return function(e){return t.apply(this,arguments)}}();return(0,H.jsxs)("div",{className:O,children:[(0,H.jsx)("h1",{className:k,children:"\u0414\u043e\u043f\u043e\u043c\u043e\u0436\u0438 1 000 000 \u0437\u0435\u043c\u043b\u044f\u043a\u0456\u0432 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0443 \u0442\u0430 \u0437\u0432\u0456\u043b\u044c\u043d\u0438\u0442\u0438\u0441\u044f \u0432\u0456\u0434 \u0432\u043f\u043b\u0438\u0432\u0443 \u0440\u043e\u0441\u0456\u0457"}),(0,H.jsx)("h2",{className:D,children:"\u041a\u043e\u0436\u043d\u0456 40 \u0433\u0440\u0438\u0432\u0435\u043d\u044c \u0412\u0430\u0448\u043e\u0457 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0438 \u043d\u0430\u0434\u0430\u044e\u0442\u044c \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u043f\u0440\u043e\u0454\u043a\u0442\u0443 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0442\u0438 1 \u0443\u043a\u0440\u0430\u0457\u043d\u0446\u0435\u0432\u0456 \u043d\u0430 \u043c\u0456\u0441\u044f\u0446\u044c \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0443!"}),(0,H.jsx)("form",{onSubmit:p,className:N,children:(0,H.jsxs)("ul",{className:E,children:[(0,H.jsxs)("li",{children:[(0,H.jsx)("label",{className:C,children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0431\u0430\u0436\u0430\u043d\u0443 \u0441\u0443\u043c\u0443 \u0443 \u0433\u0440\u0438\u0432\u043d\u044f\u0445 \u043a\u0440\u0430\u0442\u043d\u0443 40"}),(0,H.jsx)("input",{className:P,type:"number",name:"amount"})]}),(0,H.jsxs)("li",{children:[(0,H.jsx)("label",{className:C,children:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 \u0437\u0430 \u0431\u0430\u0436\u0430\u043d\u043d\u044f\u043c"}),(0,H.jsx)("textarea",{className:S,id:"comment",name:"comment"})]}),(0,H.jsx)("li",{children:(0,H.jsx)("button",{type:"submit",disabled:!n,className:I,children:"\u041f\u0456\u0434\u0442\u0440\u0438\u043c\u0430\u0442\u0438"})}),(0,H.jsxs)("li",{className:Z,children:[(0,H.jsx)("div",{onClick:function(){a(!n)},children:n?(0,H.jsx)(_,{}):(0,H.jsx)(w,{})}),(0,H.jsxs)("label",{className:L,children:["\u042f \u043f\u043e\u0433\u043e\u0434\u0436\u0443\u044e\u0441\u044c \u0437 ",(0,H.jsx)(f.rU,{to:"https://yedyni.org/wp-content/uploads/2023/08/dogovir-oferty.pdf",target:"_blank",className:B,children:"\u041f\u0443\u0431\u043b\u0456\u0447\u043d\u043e\u044e \u043e\u0444\u0435\u0440\u0442\u043e\u044e"})]})]})]})})]})}u.Z.defaults.baseURL=m.Z1}}]);
//# sourceMappingURL=875.63fe55c7.chunk.js.map