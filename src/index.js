import {changeBackgrounds} from './modules/dynamicBackgrounds.js';
import {displayGreetings} from './modules/greetings.js';
import {displayDDT} from './modules/displayDayDateTime.js';

var date = new Date();
var time = date.getHours();
var currentMonth = date.getMonth();
var currentTime = (
      (date.getHours() < 10 ? 0 + (date.getHours()).toString() : date.getHours()) + ":" 
    
    + (date.getMinutes() < 10 ? 0 + (date.getMinutes()).toString() : date.getMinutes())
    
    );
var currentDate = (date.getDate() + "-" + parseInt(date.getMonth()+1) + "-" + date.getFullYear());

changeBackgrounds(currentMonth);
displayDDT(date.getDay(), currentDate, currentTime);

document.querySelector(".todo").style.display = "none";
document.querySelector(".greeting").style.display = "none";

var arrowRight = document.querySelector(".arrRight");

arrowRight.addEventListener("click", () =>{
    if(document.querySelector(".todo").style.display == "none" && 
       document.querySelector(".greeting").style.display == "none" &&
       document.querySelector(".nameInput").value !== "") {
           
            document.querySelector(".greeting").style.display = "block";
            document.querySelector(".todo").style.display = "block";
            document.querySelector(".nameForm").style.display = "none";
            document.querySelector(".appName").style.display = "none";
            document.querySelector(".nameForm").style.display = "none";
            let userName = document.querySelector(".nameInput").value;
            displayGreetings(time, userName);
       }

    else {
        alert("Please Enter your name...");
    }
}); 

window.onload = function() {
    document.querySelector(".nameInput").value = "";
    document.querySelector(".appName").style.marginLeft = "25px";
}