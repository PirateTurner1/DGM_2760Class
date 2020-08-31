/*var heading = document.createElement("h1", "h2");
heading.textcontent = "testing testing testing";
heading.id = "title";
//heading ...
var mainDiv = document.createElement("div");
mainDiv.id = "mainBox";
var h1 = document.createElement("h1");
h1.textContent = "testing testing testing";
h1.id = "title";
mainDiv.appendChild(h1);
*/
//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"//
/*manipulating the DOM*/
/*function setup() {
    h1.createElement('h1', "Joe's Bed and Breakfast")
    h2.createElement('h2', "the Best B&B in UTAH!")
}*/
document.querySelector('#company').innerText = "Joe's Bed and Breakfast"
Document.querySelector('#company > h2').innerText = "Best B&B in UTAH!"
var name = window.prompt("what is your name?")
document.write("Hey" + name + ", Welcome to Joe's bed and Breakfast Page!")