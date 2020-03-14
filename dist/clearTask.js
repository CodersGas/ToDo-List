
function clearTask(checkbox) {
    console.log("Parent : " + checkbox.value);
    var selectedRow;
	if(checkbox.checked == true){
        checkbox.parentNode.parentNode.style.color = "#9e9e9e";
        selectedRow = checkbox.parentNode.parentNode;
        console.log(selectedRow.children[0].innerHTML);
        localStorage.removeItem(selectedRow.children[0].innerHTML);
        alert("You completed this task and has been deleted permanantly..");
	}
	else{
		checkbox.parentNode.parentNode.style.color = "black";
	}
}