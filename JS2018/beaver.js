"use strict";

var beaver = document.querySelector(".js_beaver");


function flash() {
	beaver.classList.toggle("db");
	var random =  Math.floor(Math.random() * (95 - 5 + 1)) + 5;
	var randomResult = "left:" + random + "%; " + "top:" + random + "%; "
	beaver.style.cssText = (randomResult);
	console.log(randomResult + typeof(randomResult));
}


setInterval(flash, 1000);

var num = 0;
beaver.addEventListener("click", function(){
	var result = num++;
	console.log(result);
	if (result == 2) {
		alert("Ты выиграл!");
		num = 0;
	}
});



