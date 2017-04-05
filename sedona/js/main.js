//если кликаем по плюсику, то увеличиваем на 1
//если кликаем по минусы, то уменьшаем на 1

$('.js-input').on('change', foo);
$('.js-action').on('click', foo);


$('.js-datepicker').datepicker({
	dateFormat: "yy---mm---dd"
});

function foo (event) {
	var $input = $(this).parent().find('.js-input');
	var val = parseInt( $input.val() ) || 0;
	
	if ($(this).hasClass('js-action')){
		event.preventDefault();

		if ($(this).hasClass('js-plus') || $(this).hasClass('js-input')) {
			val++;
		} else {
			val--;
		}
		
	}

	var res = validate(val);
	$input.val(res);

	var adults = parseInt($('#adults').val());
	
	
	/*
	
	console.log(typeof adults); // string  // number
	console.log(adults == 0);   // true    // true
	console.log(adults === 0);  // false   // true
	console.log(adults + 1);    // ?? 01   // 1
	
	*/
	
	if (adults == 0){
		$('#children').val(0);
	}
}

function validate (count) {
	if (count <= 0) {
		return 0;
	} else {
		if (count > 4) {
			return 4;
		} else {
			return count;
		}
	}
}
