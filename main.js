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
// random color function on one line!!
function r() {
    $(".idk").css("background-color", "rgb(" + Math.floor(Math.random()* 256) + "," + Math.floor(Math.random()* 256) + "," + Math.floor(Math.random()* 256) + ")" )
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

// function i stole from stack overflow that might be useful someday
function getPos(el) {
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}
// changes background
function j(color) {
    $(".idk").css("background-color", color)
}
var a = true