$(document).ready(function(){
  // $('.js-slide').slick({
  // 	slidesToShow: 1,
  // 	slidesToScroll: 1,
  // 	autoplay: true,
  // 	autoplaySpeed: 2000,
  // 	dots: true

  // });

	var owl = $('.js-slide').owlCarousel({
		loop: true,
		dots: true,
		dotsEach: 1,
		nav: false,
		margin: 10,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:false,
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