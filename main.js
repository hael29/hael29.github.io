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
    

