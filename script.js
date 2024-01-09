// element
const display = document.getElementById("display");
const button = document.getElementById("button");

let count = 0;

display.innerText = count;

button.addEventListener("click",()=>{
    count++;
    display.innerText = count;
})