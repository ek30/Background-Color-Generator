var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomGenerator");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomPicker() { 
  var rannumber1=Math.floor((Math.random() * 16)).toString(16);
  var rannumber2=Math.floor((Math.random() * 16)).toString(16); 
  var rannumber3=Math.floor((Math.random() * 16)).toString(16);
  var rannumber4=Math.floor((Math.random() * 16)).toString(16);
  var rannumber5=Math.floor((Math.random() * 16)).toString(16);
  var rannumber6=Math.floor((Math.random() * 16)).toString(16);
  var ranrgb1 = "#"+rannumber1+rannumber2+rannumber3+rannumber4+rannumber5+rannumber6;
  var rannumber7=Math.floor((Math.random() * 16)).toString(16); 
  var rannumber8=Math.floor((Math.random() * 16)).toString(16); 
  var rannumber9=Math.floor((Math.random() * 16)).toString(16);
  var rannumber10=Math.floor((Math.random() * 16)).toString(16); 
  var rannumber11=Math.floor((Math.random() * 16)).toString(16); 
  var rannumber12=Math.floor((Math.random() * 16)).toString(16);  
  var ranrgb2 = "#"+rannumber7+rannumber8+rannumber9+rannumber10+rannumber11+rannumber12;

  body.style.background = "linear-gradient(to right, "
  + ranrgb1
  + " , "
  + ranrgb2
  + ")"; 

  css.textContent = body.style.background + ";";
  color1.value = ranrgb1;
  color2.value = ranrgb2;
}

button.addEventListener('click', randomPicker);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);