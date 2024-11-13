$(document).ready(function() {
	var $total = $('.js-total');
	
	
	$('.js-action-plus').on('click', function() {
		var value = parseInt($(this).attr('data-cost'));
		var totalValue = parseInt($total.attr('data-total'));
		var result = 0;
		
		if ($(this).hasClass('active')) {
			result = totalValue - value;
			$(this).removeClass('active');
		} else {
			result = totalValue + value;
			$(this).addClass('active');
		}
		
		$total
			.attr('data-total', result)
			.html(' ' + result + 'р.');
	});




//			всплывающее окно, валидация


	var $inputText = $('.js-validate');
	
	$inputText.on('keyup', function(e){
		var value = $(this).val();
		var validate = $(this).attr('validate');
		var validateRegExps = {
			name: /^[a-zа-я ]+$/i,
			phone: /^[+\d ]+$/
		};
		
		
		if (validateRegExps[validate]) {
			
			if (validateRegExps[validate].test(value)) {
				$(this).removeClass('error')
			}else{
				$(this).addClass('error')
			}
			
		}
	});





//			слайдер

	var owl = $('.owl-carousel').owlCarousel({
		loop: true,
		dots: false,
		dotsEach: false,
		nav: false,
		margin: 10,
		responsive: {
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	$('.js-idea__slider').owlCarousel({
		loop: true,
		dots: true,
		dotsEach: 2,
		nav: false,
		margin: 10,
		mouseDrag: false,
		responsive: {
			0:{
				items:3
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	
	$('.js-prev').on('click', function() {
		
		owl.trigger('prev.owl.carousel', [500]);
		
		
	});
	$('.js-next').on('click', function() {
		
		owl.trigger('next.owl.carousel', [500]);
		
		
	});


	var fashion = $('.js-fashion__slider').owlCarousel({
		loop: true,
		dots: false,
		dotsEach: false,
		nav: true,
		margin: 10,
		mouseDrag: false,
		responsive: {
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$('.js-back').on('click', function() {
		
		fashion.trigger('prev.carousel', [500]);
		
		
	});
	$('.js-front').on('click', function() {
		
		fashion.trigger('next.carousel', [500]);
		
		
	});
	




//			inputmask


	$('.js-num').inputmask("+7(999)999-99-99"); //static mask



//			popup

	$('.js-click').on('click', function(){
		$('.js-modal, .popup-overlay').addClass('js-active');
	});



	$('.js-close').on('click', function(){
		$('.js-modal, .popup-overlay').removeClass('js-active');
	});
});



// 		lazy load

// $(function() {
//     $("img.lazy").lazyload({
//     	// failure_limit : 1
//     });
// });











