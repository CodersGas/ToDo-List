
function createTable() {
    var table = document.createElement("table");
    table.className = "tasksTable"
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var headRow = document.createElement("tr");

    ["S.No", "tasks", "priority", "done"].forEach(function(el) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(el));
        headRow.appendChild(th);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

function addTaskRow() {
    var tbody = document.querySelector("tbody");
    var table = document.querySelector("table");

    for(var i = 1; i <= localStorage.length; i++) {

        if(!localStorage.getItem(i)) {
            i++;
        }
        console.log("i : " + i);
        var tr = document.createElement("tr");
        let taskData = JSON.parse(localStorage.getItem(i));
        console.log("taskData : " + taskData);

        taskData.forEach(function(ele) {
        
            console.log(ele);
            var td = document.createElement("td");

            if(ele === " ") {
                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("class", "isTaskDone");
                checkbox.setAttribute("class", i+"box");
                checkbox.setAttribute("onchange", "clearTask(this)");
                td.appendChild(checkbox);
            }

            else {
                td.appendChild(document.createTextNode(ele));
            }

            tr.appendChild(td);
            tbody.appendChild(tr);
        });
    }
    table.appendChild(tbody);
}

export {createTable, addTaskRow};