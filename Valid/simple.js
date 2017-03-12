
$(document).ready(function(){
	$('.js-email').inputmask("+7(999)999 99 99"); //static mask

});

$(function(){
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
});