import {createForm} from './createNoteForm.js';
import {saveToStorage} from './saveToStorage.js';


var choiceUL = document.querySelector(".optionsList");
var choiceLI = choiceUL.querySelectorAll("li");

var Detailarray = [];
var i = 1;
function generateAndSaveNote() {

    choiceLI.forEach(function(choice) {
        
        choice.addEventListener("click", () => {
            
            document.querySelector(".todo").style.display = "none";
            document.querySelector(".taskBtn").style.display = "none";
            let todoType = choice.className;
            document.querySelector(".noteType").innerHTML = todoType;

            if(document.querySelector(".notes").style.display !== "block") {
                document.querySelector(".notes").style.display = "block";
                createForm();

                document.querySelector(".saveBtn").addEventListener("click", (e) => {

                    e.preventDefault();
                    let userInput = document.querySelector(".note");
                    let highP = document.querySelector(".highPriority");
                    let medP = document.querySelector(".medPriority");
                    let lowP = document.querySelector(".lowPriority");
        
                    if(userInput.value == "") {
                        alert("Please enter a valid activity!");
                    }
        
                    else {  
                    
                        if(highP.checked == true) {
                            Detailarray.push(i, todoType, userInput.value, highP.value, " ");
                        }

                        else if(medP.checked == true) {
                            Detailarray.push(i, todoType, userInput.value, medP.value, " ");
                        }

                        else if(lowP.checked == true) {
                            Detailarray.push(i, todoType, userInput.value, lowP.value, " ");
                        }
                        
                        if(localStorage.length == 1){
                            i = 1;
                            Detailarray[0] = i;
                            saveToStorage(i, Detailarray);
                        }
                        else{
                            saveToStorage(i, Detailarray);
                        }
                        i++;
                        alert("ToDo Saved");
                        userInput.value = "";
                        Detailarray = [];
                    }
                });
            }
            
            document.querySelector(".backBtn").addEventListener("click", () => {

                if(document.querySelector(".notes").style.display !== "none") {
                    document.querySelector(".notes").style.display = "none";
                    document.querySelector(".todo").style.display = "block";
                    document.querySelector(".notePage").innerHTML = "";
                    document.querySelector(".taskBtn").style.display = "block";
                }
            });
        });
    });
}

export {generateAndSaveNote};