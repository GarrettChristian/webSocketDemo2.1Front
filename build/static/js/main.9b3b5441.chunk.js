(this.webpackJsonpwebsock_demo2_client=this.webpackJsonpwebsock_demo2_client||[]).push([[0],{106:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),r=s(52),i=s.n(r),o=(s(60),s(13)),l=s(14),j=s(16),h=s(15),d=(s(61),s(27)),b=s(4),u=s(53),m=s.n(u),O=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).scrollToBottom=function(){a.messagesEnd.scrollIntoView({behavior:"smooth"})},a.addMessage=function(e){var t=a.state.messages;t.push(e),a.setState({messages:t}),a.state.recievedMessage=!0},a.displayMessages=function(){return Object(c.jsx)("div",{children:a.state.messages.map((function(e){return Object(c.jsx)("div",{children:a.state.name===e.from?Object(c.jsx)("div",{children:Object(c.jsxs)("p",{style:{color:"#6c90aa"},children:[e.from," : ",e.text," : ",e.time]})}):Object(c.jsx)("div",{children:Object(c.jsxs)("p",{style:{color:"#93aabc"},children:[e.from," : ",e.text," : ",e.time]})})})}))})},a.state={messages:[],name:a.props.name,recievedMessage:!1},a}return Object(l.a)(s,[{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Messages:"}),Object(c.jsxs)("div",{className:"DivWithScroll",style:{display:this.state.recievedMessage?"block":"none"},children:[Object(c.jsx)("div",{className:"DivToScroll",children:this.displayMessages()}),Object(c.jsx)("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}})]}),Object(c.jsx)("div",{className:"DivToScroll",style:{display:this.state.recievedMessage?"none":"block"},children:"nothing recieved yet"})]})}}]),s}(a.Component),x=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).sendMessage=function(){a.clientRef.sendMessage("/app/chat",JSON.stringify({from:a.state.name,text:a.state.typedMessage})),a.setState({typedMessage:"Message To Send"})},a.displayMessages=function(){return Object(c.jsx)("div",{children:a.state.messages.map((function(e){return Object(c.jsx)("div",{children:a.state.name===e.from?Object(c.jsx)("div",{children:Object(c.jsxs)("p",{style:{color:"#6c90aa"},children:[e.from," : ",e.text," : ",e.time]})}):Object(c.jsx)("div",{children:Object(c.jsxs)("p",{style:{color:"#93aabc"},children:[e.from," : ",e.text," : ",e.time]})})})}))})},a.state={messages:[],typedMessage:"Message To Send",name:a.props.name,recievedMessage:!1},a.generalDisplayArea=n.a.createRef(),a}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:["Chatting as: ",this.state.name]}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{class:"container",children:Object(c.jsxs)("div",{class:"row",children:[Object(c.jsxs)("div",{class:"col-md-6",children:[Object(c.jsx)("form",{onSubmit:this.handleSubmit,children:Object(c.jsxs)("label",{children:[Object(c.jsx)("p",{children:"Send Message: "}),Object(c.jsx)("textarea",{className:"textarea",value:this.state.typedMessage,onChange:function(t){e.setState({typedMessage:t.target.value})}})]})}),Object(c.jsx)("button",{className:"button",onClick:this.sendMessage,children:"Send"})]}),Object(c.jsx)("div",{class:"col-md-6",children:Object(c.jsx)(O,{ref:this.generalDisplayArea,name:this.state.name})})]})}),Object(c.jsx)("div",{children:Object(c.jsx)(m.a,{url:"https://web-socket-demo-back.herokuapp.com//chat/",topics:["/topic/messages"],onConnect:function(){console.log("connected!")},onDisconnect:function(){console.log("Disconnected")},onMessage:function(t){console.log(t),e.generalDisplayArea.current.addMessage(t)},ref:function(t){e.clientRef=t}})})]})}}]),s}(a.Component),p=s(26),v=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={curName:"Default Username",showError:!1},c.startChat=c.startChat.bind(Object(p.a)(c)),c}return Object(l.a)(s,[{key:"startChat",value:function(){this.state.curName.length>0?(this.props.setName(this.state.curName),this.props.history.push("/chat")):this.setState({showError:!0})}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:["Chatting as: ",this.state.curName]}),Object(c.jsx)("form",{onSubmit:this.handleSubmit,children:Object(c.jsxs)("label",{children:[Object(c.jsx)("p",{children:"Set Username to chat"}),Object(c.jsx)("textarea",{className:"textarea",value:this.state.curName,onChange:function(t){e.setState({curName:t.target.value})}})]})}),Object(c.jsx)("button",{className:"button",onClick:this.startChat,children:"Start Chatting!"}),Object(c.jsx)("div",{style:{display:this.state.showError?"block":"none"},children:Object(c.jsx)("p",{children:"Your Username must be longer than 1 character to chat"})})]})}}]),s}(a.Component),f=Object(b.f)(v),g=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).setName=function(e){c.setState({name:e})},c.state={name:"Default Username"},c}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)(d.a,{children:[Object(c.jsxs)("div",{className:"App-title",children:[Object(c.jsx)("br",{}),Object(c.jsx)("h1",{children:"Testing Web Sockets!"}),Object(c.jsx)("h6",{children:"A Simple Chat App By Garrett Christian"}),Object(c.jsx)(d.b,{to:"/",style:{color:"#FFF"},children:"return to username select"}),Object(c.jsx)("br",{})]}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{children:Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{path:"/chat",children:Object(c.jsx)(x,{name:this.state.name})}),Object(c.jsx)(b.a,{path:"/",children:Object(c.jsx)(f,{setName:this.setName})})]})})]})})})}}]),s}(a.Component),y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,107)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(g,{}),document.getElementById("root")),y()},60:function(e,t,s){},61:function(e,t,s){}},[[106,1,2]]]);
//# sourceMappingURL=main.9b3b5441.chunk.js.map