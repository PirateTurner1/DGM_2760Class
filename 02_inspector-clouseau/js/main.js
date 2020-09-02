document.querySelector('header > h1').innerText = "inspector Clouseau"
document.querySelector('header > h2').innerText = "This iz Chef Inspecteor Clouseau speaking on de pheaun"

function reDisplay() {
let windowSizes = `windows size is ${window.innerWidth} pixels wide and by ${window.innerHeight} pixels tall.`
let offset = `window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display.`

let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} + '\n' + ${offset}`
}


function reDisplay() {
    var txt = 'windows size is ' + window.innerWidth + " width by " +window.innerHeight+"tall.<br>";
    txt += 'window offset is '+ window.screenX + " from the left edge and " + window.screenY + "from the top of the display.<br>";
    txt += "the page URL is " +window.location + "<br>";
    document.getElementById("myWindow").innerHTML = txt; 

var txt2 = 'Document Title is ' + document.title + "<br>";
    txt2 += 'this document was last updated on ' + document.lstModified + "<br>";
    document.getElementById("myDocument").innerHTML = txt2;
}
reDisplay();