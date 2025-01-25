let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl);
function increment(){
    count++;
    countEl.textContent = count;
}

function save(){
    let str = count + " - "
    saveEl.textContent += str
    count = 0
    countEl.textContent = count
}

function reset(){
    count = 0
    countEl.textContent = 0
    saveEl.textContent = "Previous entries: "
}