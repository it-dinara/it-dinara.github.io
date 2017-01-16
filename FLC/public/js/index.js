/*	всплывающее окно "Записаться.."*/

$(function(){
	
	// темненькая часть на фоне окна
	var $popupOverlay = $('.popup-overlay');
	// Селектор окон
	var $windowForm = $('.window');
	
	// открытие окна записаться на обучение
	$('.js-openModal').on('click', function(){
		// тут получаем имя окна с атрибута href без всяких решеток
		// Нужно для того, что бы имя окна было "чистое" - не имело всяких артефактов
		
		var windowName = $(this).attr('href').replace('#', '');
		
		openWindow(windowName);
		
	});
	
	// глобально для всех окон
	$('.js-close').click(function(){
		closeWindow();
	});
	
	/**
	 * Открыть окно по его имени
	 * 
	 * @param name {String} - имя окна, а точнее его id
	 */
	function openWindow(name) {
		if (name) {
			$('#' + name).fadeIn(400);
			$popupOverlay.fadeIn(400);
		}
	}
	
	/**
	 * Закрыть все окна которые есть на странице
	 */
	function closeWindow() {
		$popupOverlay.fadeOut(400);
		$windowForm.fadeOut(400);
	}
	
	
	
	
	
	$('.window-form__submit').on('click', function(){
		console.log(1);
		
		var $form = $(this).closest('form');
		console.log($form);
		
		return false;
		
	});
	
	
});

















/*	кнопка "подробнее о FLC"	*/

$('.more__button_action').on('click', function(event){
			console.log(event);
			
			$('.more__text-wrapper').slideToggle(1000);
			$('html, body').animate({ 
			scrollTop: $(".more__h3-green").offset().top 
			}, 1000);
		});



/*	мои чудачества	*/

$(function(){

	var one = $('.js-click');

	one.on('click', function(){

		one.css('background', 'red');

	})

	$(".enroll__item-a").on('click', function(){
		event.preventDefault();

		});
	


	var header__logo = $('.header__logo');

	$(function(){
		header__logo.hover(onIn, onOut);
	});

	function onIn() {
		$('.js-header__title-first').html('Мне не заплатили за эту вёрстку!!!').css({'font-size':'35px',
			'color':'red'});
	}

	function onOut() {
		$('.js-header__title-first').html('Но она в продакшине!').css({'font-size':'35px',
			'color':'green'});
	}

	var promo__text = $('.promo__text')

	promo__text.mouseover(function() {
		promo__text.html('А ведь даже слайдер работает!').css({'color':'#ea6e84'});
		});

	promo__text.on('click', function(){
		$(this).html('Прекрати кликать как сумашедший, Вадим!!').css({'font-size':'28px',
			'color':'red'});
	});

});





































/*$(document).on('ready', function() {
	
	openWindow(window.location.hash.replace('#', ''));
	$(window).on('hashchange', function(e) {
		var windowName = window.location.hash.replace('#', '');
		openWindow(windowName);
	});
	
	function openWindow(windowName) {
		var $modals = $('.js-window');

		$modals.removeClass('js-opened').off('.closeWindow');
		
		
		if (windowName) {
			var $window = $('#' + windowName);
			$window.addClass('js-opened');
			
			$modals
				.on('click.closeWindow', function (event) {
					if ( ! $(event.target).closest('.js-window-content').length) {
						window.location.hash = "#";
					}
				});
		}
	}*/

































/*$(document).on('ready', function() {
	
	openWindow(window.location.hash.replace('#', ''));
	$(window).on('hashchange', function(e) {
		var windowName = window.location.hash.replace('#', '');
		openWindow(windowName);
	});
	
	function openWindow(windowName) {
		var $modals = $('.js-window');

		$modals.removeClass('js-opened').off('.closeWindow');
		
		
		if (windowName) {
			var $window = $('#' + windowName);
			$window.addClass('js-opened');
			
			$modals
				.on('click.closeWindow', function (event) {
					if ( ! $(event.target).closest('.js-window-content').length) {
						window.location.hash = "#";
					}
				});
		}
	}*/