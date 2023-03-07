function mf() {
    // get elements from the html file
    const element1 = document.getElementById("first"); 
    const element2 = document.getElementById("second");
    // get their colors
    let color1 = getComputedStyle(element1).backgroundColor;
    let color2 = getComputedStyle(element2).backgroundColor;
    // swap their colors
    element1.style.backgroundColor = color2;
    element2.style.backgroundColor = color1;
}
function hide() {
    const divs = document.querySelectorAll(".palette")
    divs.forEach(div => {
        div.style.display = "none"
    });
}
function show() {
    const divs = document.querySelectorAll(".palette")
    divs.forEach(div => {
        div.style.display = "block"
    });
}
function changebg(bgcolor) {
    let bg = document.getElementById("idk");
    bg.style.backgroundColor = bgcolor
}
function randomcolor() {
    let bg = document.getElementById("idk");
    let a = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    let c = Math.floor(Math.random()* 256);
    bg.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
}
function swap() {
    const element1 = document.getElementById("first"); 
    const element2 = document.getElementById("second");
    if (a) {
        element1.style.transform = "translateX(114%)"
        element2.style.transform = "translateX(-114%)"
        a = false
    } else {
        element2.style.transform = "translateX(0%)"
        element1.style.transform = "translateX(0%)"
        a = true

    }
}
const element1 = document.getElementById("first");
const element2 = document.getElementById("second");

function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}
var a = true
console.log(getPos(document.getElementById("first")))