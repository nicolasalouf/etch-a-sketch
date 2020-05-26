
// FUNCTIONS


// VARIABLES
const cont = document.querySelector("container");
const btn = document.querySelector("#btn");


// COMMANDS
btn.addEventListener("click", function(){
    let n = 16
    let width = cont.clientWidth / n;
    let height = cont.clientHeight / n;
    for (i=0; i<n-1; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        cont.appendChild(div);
    }
    let box = document.querySelectorAll(".box");
    box.forEach(box => box.setAttribute(    
    "style","border: solid; width:"+width+"px; height:"+height+"px"
    ))});