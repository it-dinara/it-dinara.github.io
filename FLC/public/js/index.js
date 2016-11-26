/*	всплывающее окно "Записаться.."	*/

$(function(){
	$('.enroll_action').click(function(){
		$('.window-form,.popup-overlay').fadeIn(400); //показываем всплывающее окно
	});
	$('.js-close,.popup-overlay').click(function(){
		$('.window-form,.popup-overlay').fadeOut(400); //скрываем всплывающее окно
	});
});



/*	кнопка "подробнее о FLC"	*/

$('.more__button_action').on('click', function(event){
			console.log(event);
			
			$('.more__text-wrapper').fadeIn(400)('more__text-wrapper_active')
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