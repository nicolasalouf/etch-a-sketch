
// FUNCTIONS
function downFunction(){
    isDown = true;
}

function upFunction(){
    isDown = false;
}

function reset(){
    let div = cont.lastChild;
    while(div) {
        cont.removeChild(div);
        div = cont.lastChild;        
    }
}

function createBox(n){
    for (i=0; i<2*n*n; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        cont.appendChild(div);
    }
}

function formatBox(width, height){
    let box = document.querySelectorAll(".box");
    box.forEach(box => box.setAttribute(    
    "style","border: solid 1px gray; width:"+width+"px; height:"+height+"px; float: right"
    ));
    box.forEach(box => box.addEventListener("mouseover", function(){
        if (isDown){
            this.classList.remove("color");
        } else {
            this.classList.add("color");
        }
    }));
}   

function drawGrid(){
    let n = prompt("please enter number of rows");
    let width = (cont.clientWidth / 2 / n)-2;
    let height = (cont.clientHeight / n)-2;
    reset();
    createBox(n);
    formatBox(width, height);
    }

// VARIABLES
const cont = document.querySelector("container");
const btn = document.querySelector("#btn");
let isDown = false;

// COMMANDS
btn.addEventListener("click", drawGrid);
document.addEventListener("mousedown", downFunction);
document.addEventListener("mouseup", upFunction);
