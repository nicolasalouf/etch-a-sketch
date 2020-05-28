
// FUNCTIONS
function createBox(n){
    for (i=0; i<n*n; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        cont.appendChild(div);
    }
}

function formatBox(width, height){
    let box = document.querySelectorAll(".box");
    box.forEach(box => box.setAttribute(    
    "style","border: solid 0.05px; width:"+width+"px; height:"+height+"px; float: right"
    ))
}

function drawGrid(){
    let n = prompt("please enter n");
    let width = (cont.clientWidth / n)-2;
    let height = (cont.clientHeight / n)-2;
    createBox(n);
    formatBox(width, height);
    }

// VARIABLES
const cont = document.querySelector("container");
const btn = document.querySelector("#btn");


// COMMANDS
btn.addEventListener("click", drawGrid);