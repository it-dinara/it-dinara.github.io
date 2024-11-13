console.log('main.js');

document.querySelector('.presentation__download').addEventListener('click', downloadPDF, false);

function downloadPDF(event){
	event.preventDefault();
	event.stopPropagation();

	saveAs("/pdf/remont_kompleks.pdf");
}

function saveAs(uri) {
	var link = document.createElement('a');
	if (typeof link.download === 'string') {
		link.href = uri;
		link.setAttribute('download', "remont_kompleks.pdf");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	} else {
		window.open(uri);
	}
}


/*слайдер*/

// $(".slider-wrap").owlCarousel({
// 	navigation: false,
// 	autoWidth: false,
// 	pagination: false,
// 	singleItem: false,
// 	loop: true,
// 	itemsScaleUp : false,
// 	autoHeight : false
// });


var owl = $('.slider-wrap').owlCarousel({
    margin: 10,
    loop: true,
    nav: false,
    autoWidth: true,
    items: 3,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    thumbs: true,
    thumbsPrerendered: true,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item'
});


$('.slider-img .popup-back').click(function() {
	owl.trigger('prev.owl.carousel');
});

$('.slider-img .popup-front').click(function() {
	console.log('popup-front')
	owl.trigger('next.owl.carousel');
});
