!function(e){var r={};function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,r,n){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)o.d(n,t,function(r){return e[r]}.bind(null,t));return n},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=0)}([function(e,r,o){"use strict";o.r(r);var n=new Date,t=n.getHours(),a=n.getMonth();document.querySelector(".todo").style.display="none",document.querySelector(".greeting").style.display="none",document.querySelector(".arrRight").addEventListener("click",()=>{if("none"==document.querySelector(".todo").style.display&&"none"==document.querySelector(".greeting").style.display&&""!==document.querySelector(".nameInput").value){document.querySelector(".greeting").style.display="block",document.querySelector(".todo").style.display="block",document.querySelector(".nameForm").style.display="none";let e=document.querySelector(".nameInput").value;!function(e,r){$(document).ready((function(){e>=0&&e<12?$(".greeting").text("good morning, "+r):e>=12&&e<=16?$(".greeting").text("good afternoon, "+r):e>=16&&e<=24&&$(".greeting").text("good evening, "+r)}))}(t,e)}else alert("Please Enter your name...")}),function(e){$(document).ready((function(){switch(e){case 0:$("body").css("background-image","url(./assets/backgrounds/bkg_01_january.jpg)");break;case 1:$("body").css("background-image","url(./assets/backgrounds/bkg_02_february.jpg)");break;case 2:$("body").css("background-image","url(./assets/backgrounds/bkg_03_march.jpg)");break;case 3:$("body").css("background-image","url(./assets/backgrounds/bkg_04_april.jpg)");break;case 4:$("body").css("background-image","url(./assets/backgrounds/bkg_05_may.jpg)");break;case 5:$("body").css("background-image","url(./assets/backgrounds/bkg_06_june.jpg)");break;case 6:$("body").css("background-image","url(./assets/backgrounds/bkg_07_july.jpg)");break;case 7:$("body").css("background-image","url(./assets/backgrounds/bkg_08_august.jpg)");break;case 8:$("body").css("background-image","url(./assets/backgrounds/bkg_09_september.jpg)");break;case 9:$("body").css("background-image","url(./assets/backgrounds/bkg_10_october.jpg)");break;case 10:$("body").css("background-image","url(./assets/backgrounds/bkg_11_november.jpg)");break;case 11:$("body").css("background-image","url(./assets/backgrounds/bkg_12_december.jpg)");break;default:console.log("There are only 12 months in a year !")}}))}(a),window.onload=function(){document.querySelector(".nameInput").value=""}}]);