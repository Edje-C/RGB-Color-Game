var num = 6
var colors = [];
var pickedColor;
var boxes = document.getElementsByClassName("box");
var message = document.getElementById("message");
var h1 = document.querySelector("h1"); 
var resetButton = document.getElementById("new");
var modes = document.querySelectorAll(".mode");

h1.textContent = pickedColor;

init();

function init(){
	
	setUpModes();

	setupBoxes();

	reset();

}

///modes
function setUpModes(){
	for (var i = 0; i < modes.length; i++) {
		modes[i].addEventListener("click",function(){
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? num = 3 : num = 6;

			reset();

		});
	}
}

///guessing
function setupBoxes(){
	for(var i=0; i<boxes.length; i++){

		boxes[i].addEventListener("click", function(){
			
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor){
				changeColors(clickedColor);
				document.querySelector("h1").style.color=clickedColor;
				resetButton.textContent = "Play Again";
				message.style.color = this.style.backgroundColor;
				message.textContent = "Correct!";
			}else{
				message.textContent="Try Again";
				message.style.color = this.style.backgroundColor;
				this.style.backgroundColor = "#222";
			}
		});
	}
}

///reset button
resetButton.addEventListener("click",function(){
	reset();
});



///for changing all boxes
function changeColors(color){
	for(var i=0; i<boxes.length; i++){
	boxes[i].style.backgroundColor = color;
	}
}

///color for h1
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

///for color array
function generateRandomColors(num){
	var arr = []
	for(var i = 0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

///randomizes colors
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

///reset
function reset(){
	h1.style.color = "#222";
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	h1.textContent = pickedColor;
	resetButton.textContent = "New Game";
	message.textContent = "";

	for(var i = 0; i < boxes.length; i++) {
		if(colors[i]){
			boxes[i].style.display = "inline-block";
			boxes[i].style.backgroundColor = colors[i];
		}else{
			boxes[i].style.display = "none";
		}
	}
}