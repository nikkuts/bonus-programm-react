"use strict";(self.webpackChunkbonus_programm_react=self.webpackChunkbonus_programm_react||[]).push([[73],{137:function(e,r,n){n.d(r,{J:function(){return Z}});var o=n(9439),t=n(2791),a=n(9434),s=n(7689),c=n(1087),l=n(3027),i=n(6157),u=n(4480),m=n(4587),d=n(3708),f="HomeworkForm_form__pThrB",p="HomeworkForm_groupTextarea__A++ew",_="HomeworkForm_label__iaE2u",h="HomeworkForm_textarea__PFgjr",w="HomeworkForm_link__xVLYe",k="HomeworkForm_groupFile__RR4TV",x="HomeworkForm_file__KMZXS",v="HomeworkForm_dangerBtn__f6Zsg",g="HomeworkForm_wrapperBtn__QdJjt",j="HomeworkForm_shareBtn__0w0rp",F="HomeworkForm_primaryBtn__BaOkc",I=n(3329),Z=function(e){var r=e.courseId,n=e.lessonId,Z=(0,a.I0)(),b=(0,s.TH)().pathname,H=(0,a.v9)(m.k0),N=H.homework,C=H.fileURL,B=(0,t.useState)(N),L=(0,o.Z)(B,2),R=L[0],y=L[1],S=(0,t.useState)(null),U=(0,o.Z)(S,2),E=U[0],J=U[1],T=(0,t.useState)(!1),D=(0,o.Z)(T,2),V=D[0],G=D[1];return(0,t.useEffect)((function(){var e=function(e){V&&(e.preventDefault(),e.returnValue="")};return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[V]),(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(l.Z,{onSubmit:function(e){e.preventDefault();var o=new FormData;if(o.append("courseId",r),o.append("lessonId",n),!(""===(t=R)||t.length>3e3)||(alert("\u041f\u043e\u043b\u0435 \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u0438\u043c \u0456 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 3000 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432."),0)){var t;if(o.append("homework",R),E){if(E.size>1048576&&(alert("\u0424\u0430\u0439\u043b \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 1 \u041c\u0431."),1))return;o.append("file",E)}Z(""===N?(0,u.uR)(o):(0,u.VF)(o)),G(!1)}},className:f,children:[(0,I.jsxs)(l.Z.Group,{controlId:"formText",className:p,children:[(0,I.jsx)(l.Z.Label,{className:_,children:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f \u0440\u043e\u0431\u043e\u0442\u0430"}),(0,I.jsx)(l.Z.Control,{as:"textarea",rows:10,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442",value:R,onChange:function(e){y(e.target.value),G(!0)},className:h})]}),C&&""!==C?(0,I.jsxs)("div",{className:k,children:[(0,I.jsx)(c.rU,{to:C,target:"blank",className:w,children:"\u041f\u0440\u0438\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u0438\u0439 \u0444\u0430\u0439\u043b"}),(0,I.jsx)(i.Z,{variant:"danger",type:"button",onClick:function(){if(""!==C){var e={courseId:r,lessonId:n,fileURL:C};Z((0,u._I)(e))}},className:v,children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0444\u0430\u0439\u043b"})]}):(0,I.jsx)(l.Z.Group,{controlId:"formFile",className:k,children:(0,I.jsx)(l.Z.Control,{type:"file",onChange:function(e){var r=e.target.files[0];J(r)},className:x})}),(0,I.jsxs)("div",{className:g,children:[(0,I.jsx)(i.Z,{onClick:function(){""===N||V?alert("\u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0437\u0431\u0435\u0440\u0435\u0436\u0456\u0442\u044c \u0434\u043e\u043c\u0430\u0448\u043d\u044e \u0440\u043e\u0431\u043e\u0442\u0443."):C&&""!==C?window.open("https://t.me/share/url?url=".concat(C,"&text=").concat(encodeURIComponent(N))):window.open("https://t.me/share/url?url=".concat(d.DP).concat(b,"&text=").concat(encodeURIComponent(N)))},className:j,children:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044f"}),(0,I.jsx)(i.Z,{variant:"primary",type:"submit",className:F,children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})]})})}},73:function(e,r,n){n.r(r),n.d(r,{default:function(){return u}});var o=n(9439),t=n(2791),a=n(9434),s=n(7689),c=n(4587),l=n(137),i=n(3329);function u(){var e=(0,s.UO)(),r=e.courseId,n=e.lessonId,u=(0,a.v9)(c.J1),m=(0,a.v9)(c.k0).homework,d=(0,t.useState)(m),f=(0,o.Z)(d,2),p=f[0],_=f[1];return(0,t.useEffect)((function(){_(m)}),[m]),(0,i.jsxs)(i.Fragment,{children:[""!==u.practice&&(0,i.jsx)("iframe",{title:"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 Google doc",src:u.practice,width:"100%",height:"600",frameBorder:"0",allow:"autoplay"}),m===p&&(0,i.jsx)(l.J,{courseId:r,lessonId:n})]})}},4587:function(e,r,n){n.d(r,{J1:function(){return t},k0:function(){return o}});var o=function(e){return e.exercises.exercise},t=function(e){return e.lesson.currentLesson}}}]);
//# sourceMappingURL=73.600a4c37.chunk.js.map