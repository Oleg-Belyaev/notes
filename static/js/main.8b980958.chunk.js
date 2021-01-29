(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),o=n.n(a),s=n(17),i=n.n(s),r=n(8),l=(n(26),n(10)),u=n(4),h=n(2);n(27);var d=function(e){var t=o.a.useState(""),n=Object(u.a)(t,2),a=n[0],s=n[1],i=o.a.useState(""),l=Object(u.a)(i,2),h=l[0],d=l[1],j=o.a.useState(!1),m=Object(u.a)(j,2),b=m[0],p=m[1],f=o.a.useState(!1),_=Object(u.a)(f,2),O=_[0],x=_[1];return Object(c.jsx)("main",{className:"main",children:Object(c.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyCBQIQgMI_GWopOMbTM3nSmWMmXoy_a1_g"),{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))})).then((function(e){return e.idToken}))}(a,h).then((function(e){return localStorage.setItem("token",e),e})).then((function(){e.onAuth(localStorage.getItem("token")),s(""),d(""),p(!0),x(!1)})).catch((function(){x(!0)}))},children:[Object(c.jsx)("h2",{className:"form__title",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(c.jsx)("h3",{className:"form__error ".concat(O&&"form__error_active"),children:"\u041d\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 e-mail \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(c.jsxs)("fieldset",{className:"form__input-container ".concat(b&&"form__input-container_inactive"),children:[Object(c.jsxs)("div",{className:"form__field",children:[Object(c.jsx)("label",{htmlFor:"email",className:"form__label",children:"E-mail"}),Object(c.jsx)("input",{type:"email",className:"form__input",id:"email",placeholder:"example@mail.com",value:a,onChange:function(e){s(e.target.value)},required:!0})]}),Object(c.jsxs)("div",{className:"form__field",children:[Object(c.jsx)("label",{htmlFor:"password",className:"form__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(c.jsx)("input",{type:"password",className:"form__input",id:"password",minLength:"8",maxLength:"25",placeholder:"12345678",value:h,onChange:function(e){d(e.target.value)},required:!0})]}),Object(c.jsx)("button",{type:"submit",className:"form__submit ".concat(b&&"form__submit_inactive"),value:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),Object(c.jsx)(r.b,{type:"button",className:"form__button ".concat(!b&&"form__button_inactive"),value:"\u0412\u043e\u0439\u0442\u0438",to:"/notes/mainPage",children:" \u0412\u043e\u0439\u0442\u0438 "})]})]})})};n(33);var j=function(e){var t=o.a.useState(""),n=Object(u.a)(t,2),a=n[0],s=n[1];return o.a.useEffect((function(){e.token&&s(e.token)}),[e.token]),Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{className:"header__title",children:"\u041c\u043e\u0438 \u0437\u0430\u043c\u0435\u0442\u043a\u0438"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{type:"button",className:"header__button ".concat(a&&"header__button_active"),onClick:e.onAddNotes,children:"+"}),Object(c.jsx)(r.b,{type:"button",className:"header__button header__button_type_text ".concat(a&&"header__button_active"),value:"\u0412\u043e\u0439\u0442\u0438",to:"/notes",onClick:function(){localStorage.removeItem("token"),s("")},children:"\u0412\u044b\u0439\u0442\u0438"})]})]})};n(34);var m=function(e){return Object(c.jsxs)("li",{className:"note",children:[Object(c.jsxs)("div",{className:"note__content",children:[Object(c.jsx)("h2",{className:"note__title",children:e.name}),Object(c.jsx)("p",{className:"note__data",children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430: \n          ".concat(new Date(e.data).toLocaleDateString(),"\n          ").concat(new Date(e.data).toLocaleTimeString(),". \u0421 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u043e: ").concat(function(e){var t=(e/1e3).toFixed(),n=Math.floor(t/60),c="";return n>59&&(n-=60*(c=Math.floor(n/60))),t=Math.floor(t%60),""!==c?c+(c<5?" \u0447\u0430\u0441\u0430 ":" \u0447\u0430\u0441\u043e\u0432 ")+n+(n<5?" \u043c\u0438\u043d\u0443\u0442\u044b ":" \u043c\u0438\u043d\u0443\u0442 ")+t+(t<5?" \u0441\u0435\u043a\u0443\u043d\u0434\u044b":" \u0441\u0435\u043a\u0443\u043d\u0434"):n+" \u043c\u0438\u043d\u0443\u0442 "+t+" \u0441\u0435\u043a\u0443\u043d\u0434"}(Date.now()-Date.parse(e.data)))}),Object(c.jsx)("p",{className:"note__description",children:e.description})]}),Object(c.jsx)("button",{className:"note__delete",type:"button",onClick:function(){e.onNoteDelete(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})};n(35);var b=function(e){return Object(c.jsx)("ul",{className:"notes main__notes",children:0===e.notes.length?Object(c.jsx)("p",{children:"\u0417\u0430\u043c\u0435\u0442\u043e\u043a \u043d\u0435\u0442"}):e.notes.map((function(t){return Object(a.createElement)(m,Object(l.a)(Object(l.a)({},t),{},{key:t.id,onNoteDelete:e.onNoteDelete,token:e.token}))}))})};n(36);var p=function(e){var t=o.a.useState(""),n=Object(u.a)(t,2),a=n[0],s=n[1],i=o.a.useState(""),r=Object(u.a)(i,2),l=r[0],h=r[1];return Object(c.jsxs)("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),children:[Object(c.jsx)("div",{className:"popup__overlay",onClick:e.onClose}),Object(c.jsxs)("form",{className:"popup__container",name:"notes",onSubmit:function(t){t.preventDefault(),e.onAddNotes({name:a,description:l,data:new Date,token:e.token}),s(""),h("")},children:[Object(c.jsx)("button",{className:"popup__close",type:"button",onClick:e.onClose}),Object(c.jsx)("h2",{className:"popup__title",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438"}),Object(c.jsxs)("fieldset",{className:"popup__input-container",children:[Object(c.jsx)("div",{className:"popup__field",children:Object(c.jsx)("input",{type:"text",className:"popup__item",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"40",value:a,onChange:function(e){s(e.target.value)}})}),Object(c.jsx)("div",{className:"popup__field",children:Object(c.jsx)("input",{type:"text",className:"popup__item",name:"description",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"500",value:l,onChange:function(e){h(e.target.value)}})}),Object(c.jsx)("button",{type:"submit",className:"popup__submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})]})},f=n(19),_=n(20),O=function(e){return e.json()},x=new(function(){function e(t){Object(f.a)(this,e),this._headers=t.headers,this._url=t.url}return Object(_.a)(e,[{key:"getNotes",value:function(e){return fetch("".concat(this._url,"/notes.json?auth=").concat(e),{method:"GET",headers:this._headers}).then(O)}},{key:"createNote",value:function(e){return fetch("".concat(this._url,"/notes.json?auth=").concat(e.token),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,description:e.description,data:e.data})}).then(O)}},{key:"deleteNote",value:function(e){return fetch("".concat(this._url,"/notes/").concat(e.id,".json?auth=").concat(e.token),{method:"DELETE",headers:this._headers}).then(O)}}]),e}())({headers:{"Content-Type":"application/json"},url:"https://my-notes-app-f475f-default-rtdb.firebaseio.com"});n(37);var N=function(){var e=o.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=o.a.useState([]),i=Object(u.a)(s,2),r=i[0],m=i[1],f=o.a.useState(localStorage.getItem("token")||""),_=Object(u.a)(f,2),O=_[0],N=_[1];function g(){a(!1)}function v(e){var t=Object.keys(e).map((function(t){return Object(l.a)(Object(l.a)({},e[t]),{},{id:t})}));m(t)}return o.a.useEffect((function(){localStorage.getItem("token")&&x.getNotes(O).then((function(e){null!==e?v(e):m([])}))}),[O]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{onAddNotes:function(){a(!0)},token:O}),Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{exact:!0,path:"/",children:Object(c.jsx)(d,{onAuth:function(e){N(e)}})}),Object(c.jsxs)(h.a,{exact:!0,path:"/mainPage",children:[Object(c.jsx)(b,{notes:r,onNoteDelete:function(e){x.deleteNote(e).then((function(){x.getNotes(e.token).then((function(e){v(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},token:O}),Object(c.jsx)(p,{isOpen:n,onClose:g,onAddNotes:function(e){x.createNote(e).then((function(){x.getNotes(e.token).then((function(e){v(e),g()})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},token:O})]})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(r.a,{children:Object(c.jsx)(N,{})})}),document.getElementById("root")),g()}},[[38,1,2]]]);
//# sourceMappingURL=main.8b980958.chunk.js.map