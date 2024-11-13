$(document).on('ready', function() {
	
	var modalsData = [
		{
			id: 'popup-enroll',
			header: 'Записаться на обучение',
			name: 'Ваше имя',
			email: 'Имя *',
			tel: 'Телефон *',
			message: 'Ваше сообщение *'
		},
		{
			id: 'popup-form',
			header: 'Форма проведённого урока',
			name: 'Ваше имя',
			email: 'Имя *',
			tel: 'Телефон *',
			message: 'Ваше сообщение *'
			p: '(после урока необходимо заполнить)'
		},
		{
			id: 'index4',
			header: 'Окно 4',
			text: "Lorem ipsum – псевдо-латинский текст."
		},
		{
			id: 'services',
			header: 'Услуги',
			text: "Lorem ipsum – псевдо-латинский текст."
		},
		{
			id: 'test',
			header: 'Test',
			text: "Lorem ipsum – псевдо-латинский текст."
		}
		
	];
	
	var $html = $('<div class="window window-form window-form_lesson"' +
	'<p class="window__close js-close">закрыть<span class="window__close-img"></span></p>' +
	'<form action="hello" class="window-form__wrapper window-form__wrapper_margin">' +
	
	'</form>' +
	'</div>');
	
	
	var $htmlAllModal = $('<div></div>'); //$('<div></div>') - это как documentCreateElement в js
	
	modalsData.forEach(function(modalData) {
		var $container = $html.clone();
		
		$container.attr('id', modalData.id);
		$container.find('.modal-content').append('<h1>' + modalData.header + '</h1> <p>' + modalData.text + '</p>');
		
		$htmlAllModal.append($container)
	});
	
	
	$('body').append($htmlAllModal.html());
	
	
	
	
	
	
	
	
	var $modal = $('.modal');//$('.modal') - это как getElementByClass в js
	
	$('.js-openModal').on('click', function() {
		var windowNameFromAttr = $(this).attr('data-modal');
		openWindow(windowNameFromAttr);
		
		return false;
	});
	
	$('.modal-content-close').on('click', function() {
		closeWindow();
	});
	
	$modal.on('click', function(e) {
		if ( ! $(e.target).closest('.modal-content').length) {
			closeWindow();
		}
	});
	
	
	function openWindow(name) {
		if (name) {
			$('#' + name).addClass('opened');
		}
	}
	
	function closeWindow(name) {
		if (name) {
			$('#' + name).removeClass('opened');
		} else {
			$modal.removeClass('opened');
		}
	}
});
