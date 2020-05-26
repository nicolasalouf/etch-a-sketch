
// FUNCTIONS


// VARIABLES
const cont = document.querySelector("container");
const box = document.querySelector(".box");
const btn = document.querySelector("#btn");


// COMMANDS
btn.addEventListener("click", function(){
    let n = 16
    let width = cont.clientWidth / n;
    let height = cont.clientHeight / n;
    box.setAttribute(
        "style","border: solid; width:"+width+"px; height:"+height+"px"
    );
});