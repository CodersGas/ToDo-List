var saveButton = document.querySelector(".submit");
var activityInput = document.querySelector(".note");
var todoArray = [];
function saveToDo() {
    saveButton.addEventListener("click", (e) => {

        e.preventDefault();

        if(activityInput.value == "") {
            alert("Please enter a valid activity!");
        }

        else {
            todoArray.push(activityInput.value);
            localStorage.setItem(todoArray.indexOf(activityInput.value), JSON.stringify(todoArray));
            alert("ToDo Saved");
        }
    });

    console.log(localStorage.getItem(0));
}

export {saveToDo};