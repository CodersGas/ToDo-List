!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=document.querySelector(".optionsList").querySelectorAll("li"),o=[];var a=new Date,s=a.getHours(),u=a.getMonth(),c=(a.getHours()<10?0+a.getHours().toString():a.getHours())+":"+(a.getMinutes()<10?0+a.getMinutes().toString():a.getMinutes()),l=a.getDate()+"-"+parseInt(a.getMonth()+1)+"-"+a.getFullYear();!function(e){$(document).ready((function(){switch(e){case 0:$("body").css("background-image","url(./assets/backgrounds/bkg_01_january.jpg)");break;case 1:$("body").css("background-image","url(./assets/backgrounds/bkg_02_february.jpg)");break;case 2:$("body").css("background-image","url(./assets/backgrounds/bkg_03_march.jpg)");break;case 3:$("body").css("background-image","url(./assets/backgrounds/bkg_04_april.jpg)");break;case 4:$("body").css("background-image","url(./assets/backgrounds/bkg_05_may.jpg)");break;case 5:$("body").css("background-image","url(./assets/backgrounds/bkg_06_june.jpg)");break;case 6:$("body").css("background-image","url(./assets/backgrounds/bkg_07_july.jpg)");break;case 7:$("body").css("background-image","url(./assets/backgrounds/bkg_08_august.jpg)");break;case 8:$("body").css("background-image","url(./assets/backgrounds/bkg_09_september.jpg)");break;case 9:$("body").css("background-image","url(./assets/backgrounds/bkg_10_october.jpg)");break;case 10:$("body").css("background-image","url(./assets/backgrounds/bkg_11_november.jpg)");break;case 11:$("body").css("background-image","url(./assets/backgrounds/bkg_12_december.jpg)");break;default:console.log("There are only 12 months in a year !")}}))}(u),function(e,t,r){$(document).ready((function(){switch(e){case 0:$(".ddt").text("It's, Sunday. "+t+", "+r);break;case 1:$(".ddt").text("It's, Monday. "+t+", "+r);break;case 2:$(".ddt").text("It's, Tuesday. "+t+", "+r);break;case 3:$(".ddt").text("It's, Wednesday. "+t+", "+r);break;case 4:$(".ddt").text("It's, Thursday. "+t+", "+r);break;case 5:$(".ddt").text("It's, Friday. "+t+", "+r);break;case 6:$(".ddt").text("It's, Saturday. "+t+", "+r);break;default:console.log("There are only 7 days in a week!")}}))}(a.getDay(),l,c),n.forEach((function(e){e.addEventListener("click",()=>{document.querySelector(".todo").style.display="none";let t=e.className;document.querySelector(".noteType").innerHTML=t,"block"!==document.querySelector(".notes").style.display&&(document.querySelector(".notes").style.display="block",function(){let e=document.querySelector(".notePage"),t=document.createElement("ul");t.classList.add("priorityList");let r=document.createElement("li");r.innerHTML="High";let n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("value","high"),n.setAttribute("name","pSelector"),n.classList.add("highPriority"),r.classList.add("highP"),r.appendChild(n),t.appendChild(r);let o=document.createElement("li");o.innerHTML="Medium";let a=document.createElement("input");a.setAttribute("type","radio"),a.setAttribute("value","medium"),a.setAttribute("name","pSelector"),a.classList.add("medPriority"),o.classList.add("medP"),o.appendChild(a),t.appendChild(o);let s=document.createElement("li");s.innerHTML="Low";let u=document.createElement("input");u.setAttribute("type","radio"),u.setAttribute("value","low"),u.setAttribute("name","pSelector"),u.classList.add("lowPriority"),s.classList.add("lowP"),s.appendChild(u),t.appendChild(s);let c=document.createElement("input");c.classList.add("note"),c.setAttribute("type","text");let l=document.createElement("button");l.setAttribute("type","button"),l.classList.add("saveBtn"),l.innerHTML="save";let d=document.createElement("button");d.setAttribute("type","button"),d.classList.add("backBtn"),d.innerHTML="back",e.appendChild(t),e.appendChild(c),e.appendChild(l),e.appendChild(d)}(),document.querySelector(".saveBtn").addEventListener("click",e=>{e.preventDefault();let r=document.querySelector(".note"),n=document.querySelector(".highPriority"),a=document.querySelector(".medPriority"),s=document.querySelector(".lowPriority");""==r.value?alert("Please enter a valid activity!"):(1==n.checked?o.push(r.value,n.value):1==a.checked?o.push(r.value,a.value):1==s.checked&&o.push(r.value,s.value),localStorage.setItem(t,JSON.stringify(o)),alert("ToDo Saved"),r.value="",o=[])})),document.querySelector(".backBtn").addEventListener("click",()=>{"none"!==document.querySelector(".notes").style.display&&(document.querySelector(".notes").style.display="none",document.querySelector(".todo").style.display="block",document.querySelector(".notePage").innerHTML="")})})})),function(){for(var e in localStorage)console.log(e," : ",localStorage[e])}(),document.querySelector(".todo").style.display="none",document.querySelector(".greeting").style.display="none",document.querySelector(".notes").style.display="none",document.querySelector(".arrRight").addEventListener("click",()=>{if("none"==document.querySelector(".todo").style.display&&"none"==document.querySelector(".greeting").style.display&&""!==document.querySelector(".nameInput").value){document.querySelector(".greeting").style.display="block",document.querySelector(".todo").style.display="block",document.querySelector(".nameForm").style.display="none",document.querySelector(".appName").style.display="none",document.querySelector(".nameForm").style.display="none";let e=document.querySelector(".nameInput").value;!function(e,t){$(document).ready((function(){e>=0&&e<12?$(".greeting").text("good morning, "+t):e>=12&&e<=16?$(".greeting").text("good afternoon, "+t):e>=16&&e<=24&&$(".greeting").text("good evening, "+t)}))}(s,e),null==localStorage.getItem("userName")&&localStorage.setItem("userName",JSON.stringify(e))}else alert("Please Enter your name...")}),window.onload=function(){document.querySelector(".nameInput").value=JSON.parse(this.localStorage.getItem("userName"))}}]);