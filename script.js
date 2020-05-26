
// FUNCTIONS


// VARIABLES
const cont = document.querySelector("container");
const box = document.querySelector(".box");
const btn = document.querySelector("#btn");


// COMMANDS
btn.addEventListener("click", function(){
    box.setAttribute(
        "style","border: solid; width: 30px; height: 30px"
    );
});