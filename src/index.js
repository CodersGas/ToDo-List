import {changeBackgrounds} from './modules/dynamicBackgrounds.js';
import {displayGreetings} from './modules/greetings.js';

var date = new Date();
var time = date.getHours();
var currentMonth = date.getMonth();

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
            let userName = document.querySelector(".nameInput").value;
            displayGreetings(time, userName);
       }

    else {
        alert("Please Enter your name...");
    }
}); 

changeBackgrounds(currentMonth);

window.onload = function() {
    document.querySelector(".nameInput").value = "";
}