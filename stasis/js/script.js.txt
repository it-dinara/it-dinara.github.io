'use strict'

var menu = document.querySelector(".js_menu");
var links = document.querySelectorAll(".menu__a");

menu.addEventListener("click", function(event) {
	var that = event.target;

	links.forEach(
		function(currentValue, currentIndex) {
			links[currentIndex].classList.remove("_active");
		});

	that.classList.add("_active");
})

$(function() {
	$(".js_burger").click(function() {
		$(".js_burger").addClass("dn")
		$(".menu").addClass("_move")
		$(".container").addClass("_move")
		$("body").addClass("ohx")
	})
	$(".js_burger-menu").click(function() {
		$(".js_burger").removeClass("dn")
		$(".menu").removeClass("_move")
		$(".container").removeClass("_move")
		$("body").removeClass("ohx")
	})

	$("#scroll").on("click", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $("#main").offset().top;
		$('body,html').animate({ scrollTop: top }, 900);
	});
})

