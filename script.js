// Get Started Button
var btn = document.getElementById("btn"); 
// Div One
var End = document.querySelector(".Two");
// Div Two
var Front = document.querySelector(".One");
// Reset Button
var Reset = document.querySelector("#restart");
// Undo 
var undo = document.getElementById("undo");

/* Go Forward */ 
btn.addEventListener('click', () => {
  gsap.to('.One', {duration: .5, x: '-100%', opacity: 0});
  gsap.from('.Two', {duration: .5, x: '-20%', opacity: 0});
  Front.classList.add("DisplayNone"); 
  End.classList.remove("Two");
})

/* Go Back */
undo.onclick = function () {
  gsap.from('#Two', {duration: .5, x: '-100%', opacity: 0});
  gsap.to('.One', {duration: .5, x: '10%', opacity: 9});
  Front.classList.remove("DisplayNone");
  End.classList.add("Two"); 
}

/* Click Counter Functionality */
var num = document.getElementById("num");
var button = document.getElementById("count");
var counter = 0;

button.onclick = function(){
  counter++;
  num.innerHTML = "Clicks: " + counter;
  button.innerHTML = "Click me";
}

//Reset Score 
Reset.onclick = function() {
  counter = 0;
  num.innerHTML = "Clicks: " + counter;
}
