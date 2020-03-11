function createForm() {
    let notePage = document.querySelector(".notePage");

    let priorityList = document.createElement("ul");
    priorityList.classList.add("priorityList");
    
    let li1 = document.createElement("li");
    li1.innerHTML = "High";
    let highPrioritySelector = document.createElement("input");
    highPrioritySelector.setAttribute("type", "radio");
    highPrioritySelector.setAttribute("value", "high");
    highPrioritySelector.setAttribute("name", "pSelector");
    highPrioritySelector.classList.add("highPriority");
    li1.classList.add("highP");
    li1.appendChild(highPrioritySelector);
    priorityList.appendChild(li1);

    let li2 = document.createElement("li");
    li2.innerHTML = "Medium";
    let mediumPrioritySelector = document.createElement("input");
    mediumPrioritySelector.setAttribute("type", "radio");
    mediumPrioritySelector.setAttribute("value", "medium");
    mediumPrioritySelector.setAttribute("name", "pSelector");
    mediumPrioritySelector.classList.add("medPriority");
    li2.classList.add("medP");
    li2.appendChild(mediumPrioritySelector);
    priorityList.appendChild(li2);
    
    let li3 = document.createElement("li");
    li3.innerHTML = "Low";
    let lowPrioritySelector = document.createElement("input");
    lowPrioritySelector.setAttribute("type", "radio");
    lowPrioritySelector.setAttribute("value", "low");
    lowPrioritySelector.setAttribute("name", "pSelector");
    lowPrioritySelector.classList.add("lowPriority");
    li3.classList.add("lowP");
    li3.appendChild(lowPrioritySelector);
    priorityList.appendChild(li3);
    

    let input = document.createElement("input");
    input.classList.add("note");
    input.setAttribute("type", "text");

    let saveButton = document.createElement("button");
    saveButton.setAttribute("type", "button");
    saveButton.classList.add("saveBtn");
    saveButton.innerHTML = "save";

    let backButton = document.createElement("button");
    backButton.setAttribute("type", "button");
    backButton.classList.add("backBtn");
    backButton.innerHTML = "back";

    notePage.appendChild(priorityList);
    notePage.appendChild(input);
    notePage.appendChild(saveButton);
    notePage.appendChild(backButton);
}

export {createForm};