!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);class n{constructor(e,t="",o="",n=0,i="",r=!1){return{title:e,description:t,dueDate:o,priority:n,notes:i,completed:r}}editTitle(e){title=e}editDescription(e){description=e}editDueDate(e){dueDate=e}editPriority(e){priority=e}editNotes(e){notes=e}toggleCompleted(){completed?completed=!1:completed=!0}}const i=e=>e?"✓":"✗",r=e=>0==e?"white":1==e?"rgb(182, 221, 195)":2==e?"rgb(188, 233, 177)":3==e?"rgb(255, 250, 176)":4==e?"rgb(255, 223, 176)":"rgb(233, 177, 177)";let d=new n("First Todo","This is such a lovely todo description for my first todo which will be used todo some very interesting stuff I'm sure","22nd July 2021",1,"Such amazing notes go here like wow im so glad I have these notes right here I honestly wouldn't know what I'd do without these notes"),s=new n("Second Todo","This is such a lovely todo","23nd July 2021",2,"Notes here"),l=new n("Third Todo","This is such a lovely todo description for my first todo which will be used todo some very interesting stuff I'm sure","22nd July 2021",3,"Such amazing notes go here like wow im so glad I have these notes right here I honestly wouldn't know what I'd do without these notes"),c=new n("Fourth Todo","This is such a lovely todo description for my first todo which will be used todo some very interesting stuff I'm sure","22nd July 2021",4,"Such amazing notes go here like wow im so glad I have these notes right here I honestly wouldn't know what I'd do without these notes"),u=new n("Fifth Todo","This is such a lovely todo description for my first todo which will be used todo some very interesting stuff I'm sure","22nd July 2021",5,"Such amazing notes go here like wow im so glad I have these notes right here I honestly wouldn't know what I'd do without these notes");(e=>{document.querySelector(".todocontainer").style.display="none",document.querySelector(".projecttitle").innerHTML=e.title,document.querySelector(".projectduedate").innerHTML=e.dueDate,document.querySelector(".projectdescription").innerHTML=e.description;const t=document.querySelector(".todoscontainer");t.innerHTML="",e.todoItems.forEach((function(e,o){const n=document.createElement("div");n.classList.add("todotab");const d=document.createElement("div");d.classList.add("todotabtitle"),d.innerHTML=e.title,n.appendChild(d);const s=document.createElement("div");s.classList.add("todotabdate"),s.innerHTML=e.dueDate,n.appendChild(s);const l=document.createElement("div");l.classList.add("todotabcheck"),l.innerHTML=i(e.completed),l.addEventListener("click",()=>{todoItems.toggleCompleted(o)}),n.appendChild(l),n.style.backgroundColor=r(e.priority),t.appendChild(n)}));document.querySelector(".projectcontainer").style.display="block"})(new class{constructor(e,t="",o="",n=[]){return{title:e,description:t,dueDate:o,todoItems:n}}editTitle(e){title=e}editDescription(e){description=e}editDueDate(e){dueDate=e}editTodoItems(e){todoItems=e}}("First project","This is such a lovely project","17th August 2021",[d,s,l,c,u]))}]);