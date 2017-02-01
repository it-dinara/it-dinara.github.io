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
})



//			всплывающее окно, валидация

$(function(){
	var $inputText = $('.js-validate');

	$inputText.on('keyup', function(e){

//		$('.js-validate').each(function () {

			var value = $(this).val();
			var validate = $(this).attr('validate');

			if (validate == 'name') {
				if (/^[a-zа-яё ]+$/i.test(value)) {
					$(this).removeClass('error')
				}else{
					$(this).addClass('error')
				}
			}

			if (validate == 'phone') {
				if (/^[+0-9 ]+$/.test(value)) {
					$(this).removeClass('error')
				}else{
					$(this).addClass('error')
				}
			}
	});
});


//			слайдер
$(function(){
	$('.owl-carousel').owlCarousel({
		loop: true,
		dots: true,
		dotsEach: true,
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

});




//			bxslider

$(document).ready(function(){
  $('.bxslider').bxSlider({
  	slideWidth: 162,
  	minSlides: 2,
  	maxSlides: 4,
  	slideMargin: 0,
  	nextText:'',
  	prevText:'',
  	useCSS: false
  });
});



//			всплывающее окно



$(function(){
	$(window).on('hashchange', function(e) {
		var windowName = window.location.hash.replace('#', '');
		openWindow(windowName);
	});
	
	function openWindow(windowName) {
		var $modals = $('.js-modal');
	

		$('.js-click').on('click', function(e){
			var $window = $('#' + windowName);
			$window.addClass('opened');

			$modals
				.on('click.closeWindow', function (event) {
					if ( ! $(event.target).closest('.modal-content').length) {
						window.location.hash = "#";
					}
				});

		});
	};
});


