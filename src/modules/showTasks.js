import {createTable, addTaskRow} from './addTaskToTable.js';

var taskBtn = document.querySelector(".showTasks");

function showTasks() {
    taskBtn.addEventListener("click", () => {

        if(document.querySelector(".todoTable").style.display == "none") {
            document.querySelector(".todoList").innerHTML = "";
            document.querySelector(".todoList").appendChild(createTable());
            addTaskRow();
            document.querySelector(".todoTable").style.display = "block";
        }

        else{
            document.querySelector(".todoTable").style.display = "none";
        }
    });
}

export {showTasks};