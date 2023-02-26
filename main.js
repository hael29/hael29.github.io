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
function alert() {
    alert("Attention! Computer malfunction! Keyboard not work right. You press button hard or no type good. Me apologize for inconvenience. We work hard fix problem. Thank you for patience.")
}
}