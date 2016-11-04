$(document).ready(function(){
	$('.account-menu').on('click', function(event) {
		console.log(event);

		$('.login-popup').addClass('login-popup_active');
	});

	$('.login-form').on('submit', function(event) {
		event.preventDefault();
		
		$('.login-popup').removeClass('login-popup_active');
		//return false;
	});
});