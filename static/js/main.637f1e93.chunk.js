(this["webpackJsonpkeeper-part-3-starting"]=this["webpackJsonpkeeper-part-3-starting"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),c=n.n(r),o=n(1);var u=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Keeper"))};var i=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))};var m=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))},E=n(2);var p=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),r=n[0],c=n[1];function u(e){var t=e.target,n=t.name,a=t.value;c(e=>Object(E.a)(Object(E.a)({},e),{},{[n]:a}))}return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{name:"title",onChange:u,value:r.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onChange:u,value:r.content,placeholder:"Take a note...",rows:"3"}),l.a.createElement("button",{onClick:function(t){e.onAdd(r),c({title:"",content:""}),t.preventDefault()}},"Add")))};var d=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r(t=>t.filter((t,n)=>n!==e))}return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(p,{onAdd:function(e){r(t=>[...t,e])}}),n.map((e,t)=>l.a.createElement(m,{key:t,id:t,title:e.title,content:e.content,onDelete:c})),l.a.createElement(i,null))};c.a.render(l.a.createElement(d,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.637f1e93.chunk.js.map