(this["webpackJsonptest-chat"]=this["webpackJsonptest-chat"]||[]).push([[0],{20:function(e,t,s){},62:function(e,t,s){"use strict";s.r(t);var a,c=s(1),n=s.n(c),i=s(30),r=s.n(i),o=(s(20),s(3)),h=n.a.createContext({chooseId:{user_id:0,chat_id:0},setChooseId:function(){},userMessageHistory:[],setUserMessageHistory:function(){},chatOwnerInfo:{chatOwnerPhoto:"",chatOwnerName:"",chatOwnerId:0},setChatOwnerInfo:function(){},openChatHistory:!1,setOpenChatHistory:function(){}}),u=function(){return Object(c.useContext)(h)},l=s(14),d=s(2),m=s(0),j=function(){var e=Object(d.f)(),t=u().setChatOwnerInfo;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.GoogleLogout,{className:"authorization__logout-btn authorization__btn",clientId:"1026527850509-u65p8e5gp98cjeqvdppsnfaj3mlt46av.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){e("/"),localStorage.removeItem("loginData"),t({chatOwnerPhoto:"",chatOwnerName:"",chatOwnerId:0})}})})},_=s(8),g=function(){var e=Object(d.f)(),t=Object(c.useState)(!1),s=Object(o.a)(t,2),a=s[0],n=s[1],i=u().setChatOwnerInfo;return Object(m.jsxs)("div",{className:"authorization__login",children:[Object(m.jsx)(l.GoogleLogin,{className:"authorization__login-btn authorization__btn",cookiePolicy:"single_host_origin",buttonText:"Start with Google",clientId:"1026527850509-u65p8e5gp98cjeqvdppsnfaj3mlt46av.apps.googleusercontent.com",onSuccess:function(t){e("/chat");var s={chatOwnerId:t.profileObj.googleId,chatOwnerName:t.profileObj.name,chatOwnerPhoto:t.profileObj.imageUrl};localStorage.setItem("loginData",JSON.stringify(s)),i(s)},onFailure:function(t){n(!0),e("/"),console.log("LOGIN FAILED! res:",t)}}),Object(m.jsx)("p",{className:"authorization__false",children:a?"Upps, something going wrong. Try again or use trial version":""})]})},b=s(17),O=function(){var e=u().chatOwnerInfo;return Object(c.useEffect)((function(){b.a.load("client:auth2",(function(){b.a.client.init({clientId:"1026527850509-u65p8e5gp98cjeqvdppsnfaj3mlt46av.apps.googleusercontent.com",scope:""})}))})),Object(m.jsx)("section",{className:"authorization__form",children:Object(m.jsxs)("div",{className:"authorization__form-wrapper",children:[Object(m.jsx)("h2",{className:"authorization__form-title chat__title",children:" Chat "}),e.chatOwnerId>0?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{children:["You've already logged in as ",e.chatOwnerName]})," ",Object(m.jsx)(j,{})]}):Object(m.jsx)(g,{}),e.chatOwnerId>0?"":Object(m.jsx)(_.b,{to:"/chat",children:Object(m.jsx)("button",{type:"button",className:"authorization__trial",children:" Trial run "})})]})})},p=function(){return Object(m.jsx)("section",{className:"authorization__page container",children:Object(m.jsx)(O,{})})},f=s.p+"static/media/availible.baec2c63.svg",x=function(e){var t=e.avatar,s=e.status,a=e.additional_class_name;return Object(m.jsxs)("div",{className:"user-logo ".concat(a||"","  "),children:[Object(m.jsx)("img",{src:t,alt:"user-avatar"}),!!s&&Object(m.jsx)("img",{className:"online",src:f,alt:"on-line"})]})},v=function(e){var t=e.choosed_chat,s=e.choosed_id;return Object(m.jsx)("div",{className:"chat-history",children:0!==t.messages.length?t.messages.map((function(e,a){return e.user_id===s.user_id?Object(m.jsxs)("div",{className:"chat-history__msg",children:[Object(m.jsx)(x,{status:!1,avatar:t.photo}),Object(m.jsxs)("div",{className:"chat-history__incoming-content",children:[" ",Object(m.jsx)("div",{className:"chat-history__incoming-msg",children:Object(m.jsx)("span",{className:"chat-history__incoming-msg-text msg-text",children:e.text})}),Object(m.jsxs)("p",{className:"chat-history__incoming-msg-time msg-time",children:[e.time[0].replace(/\.+/gi,"/")," ",e.time[1].substring(0,6)," ",e.time[1].substring(0,6).split(":").map((function(e){return+e}))[0]>12?"PM":"AM"]})]})]},t.chat_id+a):Object(m.jsxs)("div",{className:"chat-history__msg chat-history__msg--column",children:[Object(m.jsx)("div",{className:"chat-history__outgoing-msg",children:Object(m.jsx)("span",{className:"chat-history__outgoing-msg-text msg-text",children:e.text})})," ",Object(m.jsxs)("p",{className:"chat-history__outgoing-msg-time msg-time",children:[e.time[0].replace(/\.+/gi,"/")," ",e.time[1].substring(0,6)," ",e.time[1].substring(0,6).split(":").map((function(e){return+e}))[0]>12?"PM":"AM"]})]},t.chat_id+a)})):Object(m.jsx)("div",{children:" Start your conversation "})})},w=s(6),N=s(18),A=s(7),y=function(e){var t=e.setActive,s=e.className,a=e.children,c=e.active;return Object(m.jsx)("div",{className:c?"modal  active":"modal ",onClick:function(){return t(!1)},children:Object(m.jsx)("div",{className:c?"modal__content ".concat(s||""," active"):"modal__content ".concat(s||""),onClick:function(e){return e.stopPropagation()},children:a})})},I=s.p+"static/media/send.3f170a55.svg",C=s(31),S=s.n(C),H=function(e){var t=e.setTypeMsgHandler,s=e.userName,a=e.typeMsg,n=e.chat,i=Object(c.useState)(!1),r=Object(o.a)(i,2),h=r[0],l=r[1],d=Object(c.useState)(!1),j=Object(o.a)(d,2),_=j[0],g=j[1],b=Object(c.useState)(""),O=Object(o.a)(b,2),p=O[0],f=O[1],x=u(),v=x.chooseId,C=x.userMessageHistory,H=x.setUserMessageHistory,T=x.chatOwnerInfo;function M(){return k.apply(this,arguments)}function k(){return(k=Object(A.a)(Object(w.a)().mark((function e(){var t,s,a,c;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://api.chucknorris.io/jokes/random");case 3:t=e.sent,s={time:(new Date).toLocaleString().split(","),text:t.data.value,user_id:v.user_id,chat_id:v.chat_id},a=[].concat(Object(N.a)(C),[s]),localStorage.setItem("messageHistory",JSON.stringify(a)),H(a),f(t.data.value),E(s),g(!1),l(!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),c=e.t0,console.log(c.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("messageHistory")||"[]");H(e),console.log(e)}),[]),Object(c.useEffect)((function(){_&&setTimeout(M,2e3)}),[C]),Object(c.useEffect)((function(){h&&setTimeout((function(){return l(!1)}),4e3)}),[h]);var E=function(e){Array.isArray(n)&&n.length>0&&n[0].messages.push(e)},D=function(){!function(){var e={text:a,time:(new Date).toLocaleString().split(","),user_id:T.chatOwnerId,chat_id:v.chat_id},t=[].concat(Object(N.a)(C),[e]);localStorage.setItem("messageHistory",JSON.stringify(t)),H(t),E(e),g(!0)}(),t("")};return Object(m.jsxs)("div",{className:"type-line",children:[Object(m.jsxs)("label",{className:"type-line__field",children:[Object(m.jsx)("input",{value:a,onChange:function(e){t(e.currentTarget.value)},onKeyDown:function(e){13===e.keyCode&&D()},placeholder:"Type your message",className:"type-line__input",name:"type-line",type:"text"}),Object(m.jsx)("button",{type:"submit",onClick:function(){D()},className:"type-line__send-btn",children:Object(m.jsx)("img",{src:I,alt:"send"})})]}),Object(m.jsx)(y,{active:h,setActive:l,children:Object(m.jsxs)("div",{className:"new-msg",children:[Object(m.jsxs)("p",{className:"new-msg__user-name",children:["New message from: ",Object(m.jsx)("span",{children:s})]}),Object(m.jsx)("p",{className:"new-msg__text",children:p})]})})]})},T=function(e){var t=e.chats,s=e.choosed_id,a=Object(c.useState)(""),n=Object(o.a)(a,2),i=n[0],r=n[1],h=u(),l=h.chooseId,d=h.openChatHistory,j=h.setOpenChatHistory,_=t.filter((function(e){return e.user_id===s.user_id}));return Object(m.jsxs)("div",{className:d?"extended-chat":"extended-chat--hidden",children:[_.map((function(e){return Object(m.jsxs)("div",{className:"extended-chat__content",children:[Object(m.jsxs)("div",{className:"extended-chat__header",children:[Object(m.jsx)("button",{type:"button",onClick:function(){return j(!1)},className:"extended-chat__back-btn",children:"<"}),Object(m.jsx)(x,{avatar:e.photo,status:!0}),Object(m.jsxs)("p",{children:[e.user_name," ",e.user_surname]})]}),Object(m.jsx)(v,{choosed_chat:e,choosed_id:l})]},e.user_id)})),Object(m.jsx)(H,{userName:s.chat_id>0?"".concat(_[0].user_name," ").concat(_[0].user_surname):"",setTypeMsgHandler:r,typeMsg:i,chat:_})]})},M=s.p+"static/media/default.c83c1281.webp",k=function(e){var t=e.inputValue,s=e.inputValueHandler,a=u().chatOwnerInfo;return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("div",{className:"header__user-info",children:[Object(m.jsx)(x,{avatar:a.chatOwnerPhoto||M,status:!0}),Object(m.jsx)("h3",{className:"header__title",children:a.chatOwnerName||"Guest"})]}),Object(m.jsxs)("label",{className:"header__search",children:[Object(m.jsx)("img",{className:"search",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIRSURBVHgBrZQ/ctNAFMbfW8UTMhTRYClQbpMZSfFMfATdIOEECScAOjrbJyBHEBUlpKRC3ECZycgbKrmNVchNhgFnH281Iji25NiJv8Ky9s9Pn/S9fQg1klLaz3d2TgnpEAmkGdNAFwAUD4c/v8IKwhpgj0ffVUMjAsjMH4F4SEQ2Ed8TDVKlopXAnudJ3vwdESQCDqZaR0qpbHZxEHinPNczHkhTn+GDpeAZKLQAXydpmiwxA50g6BNQT9/q98Orq7PGhb7vRQeBT90g6MKKOvD9ck+wv1+7R1RuT9h89JDTWbW2tzkHLGBL9GrBAiAsF2o9gDWUJEnBn+MTogi7HPoCmOM+LtfNBbWKLIKYL/bvVksugDmwXS6jCTxCZFFhrtqyFh1zXU4QcRc2LP7E5QGQ8AjRLZYV8aw6RPfAQpA5ojZXRwjrSsCRMVaXj7i8VLGZtAR+hDXk+/4xEIRcGbXVZJmfV447Iu4Pe45rj/P820PQqvY/c/BFmqo3jeDrPFcv3T1uA/DBdR3ZbjsXeZ4XDdCQoV9MT2HHUZORe93tXw8oOxhSTKTPiUT5AAtNUHQEiCHfZuzinNe+bWpGOD/Q5df8g9jnmRNY1IiB0dbNzVmSZcWdkRo4whJ1Ov8rZTqFTNWkvwz+ZBl42ek8764hWbABXY/HcRV+3207wIH+2Ah4Hu68aE82Bp6Fs379BV/C6y0TMT3yAAAAAElFTkSuQmCC",alt:"search"}),Object(m.jsx)("input",{value:t,onChange:function(e){s(e.currentTarget.value),console.log(t)},placeholder:"Search or start new chat",className:"header__seach-field",name:"user-search",type:"text"})]}),!!a.chatOwnerName&&Object(m.jsx)(j,{})]})},E=function(e){var t=e.item,s=e.setChooseUserDataHandler,a=t.messages.length?t.messages[t.messages.length-1].time[0].split("."):[""],c=a.splice(1,1).toString(),n="01"===c?"Jan":"02"===c?"Feb":"03"===c?"Mar":"04"===c?"Apr":"05"===c?"May":"06"===c?"Jun":"07"===c?"Jul":"08"===c?"Aug":"09"===c?"Sep":"10"===c?"Oct":"11"===c?"Nov":"Dec";return Object(m.jsxs)("div",{className:"dialog",onClick:s,children:[Object(m.jsxs)("div",{className:"dialog__main-content",children:[Object(m.jsx)(x,{avatar:t.photo,status:!!(t.user_id%3),additional_class_name:"flex"}),Object(m.jsxs)("div",{className:"dialog__main-info",children:[Object(m.jsxs)("p",{className:"dialog__title",children:[" ",t.user_name," ",t.user_surname]}),Object(m.jsx)("p",{className:"dialog__last-msg",children:t.messages.length?t.messages[t.messages.length-1].text:""})]})]}),Object(m.jsx)("span",{className:"dialog__last-msg-time",children:t.messages.length?Object(m.jsxs)(m.Fragment,{children:[n,"\xa0",a.join(", ")]}):""})]},t.chat_id)},D=function(e){var t=e.chats,s=e.searchRequets,a=u(),n=a.setChooseId,i=a.setOpenChatHistory;Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("messageHistory")||"[]");t.map((function(t){return e.forEach((function(e){t.chat_id===e.chat_id&&t.messages.push(e)}))}))}),[]),t.sort((function(e,t){return t.messages.length&&e.messages.length?new Date(t.messages[t.messages.length-1].time[0].split(".").reverse().join("-")+"T"+t.messages[t.messages.length-1].time.join(",").substring(12)).getTime()-new Date(e.messages[e.messages.length-1].time[0].split(".").reverse().join("-")+"T"+e.messages[e.messages.length-1].time.join(",").substring(12)).getTime():e.chat_id-t.chat_id}));var r=t.filter((function(e){return e.user_name.toLowerCase().startsWith(s.toLowerCase())||e.user_surname.toLowerCase().startsWith(s.toLowerCase())}));return Object(m.jsxs)("div",{className:"chat__list",children:[Object(m.jsx)("h2",{className:"chat__title",children:" Chats"}),Object(m.jsx)("div",{className:"chat__items",children:r.map((function(e){return Object(m.jsx)(E,{setChooseUserDataHandler:function(){n({user_id:e.user_id,chat_id:e.chat_id}),i(!0)},item:e},e.user_id)}))})]})};!function(e){e[e.tablet=800]="tablet"}(a||(a={}));var R=function(e){var t=e.data,s=Object(c.useState)(""),n=Object(o.a)(s,2),i=n[0],r=n[1],h=Object(c.useState)(!1),l=Object(o.a)(h,2),d=l[0],j=l[1],_=u().openChatHistory;return Object(c.useEffect)((function(){var e=function(){window.innerWidth<=a.tablet?j(!0):j(!1)};e(),window.addEventListener("resize",e)})),Object(m.jsxs)("section",{className:_&&d?"chat-menu hidden":"chat-menu",children:[Object(m.jsx)(k,{inputValue:i,inputValueHandler:r}),Object(m.jsx)(D,{chats:t,searchRequets:i})]})},L=[{user_id:145321,user_surname:"Black",user_name:"Guy",chat_id:1,photo:s.p+"static/media/avatar_1.0571f029.webp",messages:[{user_id:145321,chat_id:1,text:"Hello, how are you",time:["18.08.2022"," 19:04:27"]},{user_id:145e3,chat_id:1,text:"Thanks, i'm fine",time:["18.08.2022"," 19:06:27"]},{user_id:145321,chat_id:1,text:"What are u up to?",time:["18.08.2022"," 19:07:27"]},{user_id:145321,chat_id:1,text:"Let's go to the party",time:["18.08.2022"," 19:07:29"]},{user_id:145e3,chat_id:1,text:"Sorry, i cann't",time:["18.08.2022"," 19:08:27"]},{user_id:145321,chat_id:1,text:"As always!",time:["19.08.2022"," 00:09:27"]}]},{user_id:145322,user_surname:"Simpson",user_name:"Bart",chat_id:2,photo:s.p+"static/media/avatar_2.ffe0553b.webp",messages:[{user_id:145322,chat_id:2,text:"\xa1Ay, caramba!",time:["24.07.2022"," 19:09:27"]}]},{user_id:145323,user_surname:"Durnev",user_name:"Pavel",chat_id:3,photo:s.p+"static/media/avatar_3.4f5973f5.webp",messages:[{user_id:145323,chat_id:3,text:"We reserved http://t.me/elona for Elan Musk \u2013 whenever he is ready \ud83d\udc4d",time:["16.05.2022"," 19:09:27"]}]},{user_id:145324,user_surname:"Zuckerberg",user_name:"Mark",chat_id:4,photo:s.p+"static/media/avatar_4.dd495ac5.webp",messages:[{user_id:145324,chat_id:4,text:"Meta is helping build a future where people have more ways to play and connect in the metaverse. Welcome to the next chapter of social connection.",time:["08.08.2022"," 19:09:27"]}]},{user_id:145325,user_surname:"Musk",user_name:"Elan",chat_id:5,photo:s.p+"static/media/avatar_5.a838e13f.webp",messages:[{user_id:145325,chat_id:5,text:"Also, I\u2019m buying Manchester United ur welcome",time:["09.08.2022"," 19:09:27"]}]},{user_id:145326,user_surname:"Wixted",user_name:"Amanda",chat_id:6,photo:s.p+"static/media/avatar_6_Amanda-Wixted.f2a93ed6.webp",messages:[]},{user_id:145327,user_surname:"Zelenskiy",user_name:"Vova",chat_id:7,photo:s.p+"static/media/avatar_7.52820bec.webp",messages:[]},{user_id:145328,user_surname:"Zalyzhnyi",user_name:"Valera",chat_id:8,photo:s.p+"static/media/avatar_8.a1980c24.webp",messages:[]},{user_id:145329,user_surname:"Arestovich",user_name:"Oleksii",chat_id:9,photo:s.p+"static/media/avatar_9.51e73387.webp",messages:[]}],B=function(e){var t=e.choosedId;return Object(m.jsxs)("section",{className:"chat-page container",children:[Object(m.jsx)(R,{data:L}),Object(m.jsx)(T,{chats:L,choosed_id:t})]})},P=function(){var e=Object(c.useState)({user_id:0,chat_id:0}),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)([]),i=Object(o.a)(n,2),r=i[0],u=i[1],l=Object(c.useState)(localStorage.getItem("loginData")?JSON.parse(localStorage.getItem("loginData")||""):{chatOwnerPhoto:"",chatOwnerName:"",chatOwnerId:0}),j=Object(o.a)(l,2),_=j[0],g=j[1],b=Object(c.useState)(!1),O=Object(o.a)(b,2),f=O[0],x=O[1];return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(h.Provider,{value:{openChatHistory:f,setOpenChatHistory:x,chatOwnerInfo:_,setChatOwnerInfo:g,chooseId:s,setChooseId:a,userMessageHistory:r,setUserMessageHistory:u},children:[" ",Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{path:"/",element:Object(m.jsx)(p,{})}),Object(m.jsx)(d.a,{path:"/chat",element:Object(m.jsx)(B,{choosedId:s})})]})]})})};var U=function(){return Object(m.jsx)(P,{})};r.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(_.a,{children:Object(m.jsx)(U,{})}))}},[[62,1,2]]]);
//# sourceMappingURL=main.5ef6d6e5.chunk.js.map