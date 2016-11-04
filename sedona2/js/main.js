var adultsVal = $('#adults').val();
var childrenVal = $('#children').val();

$('#adults').on('change', function (event) {
	adultsVal = $(this).val();

	//если взрослых меньше 0, то взрослые 0
	if (adultsVal < 0){
		$(this).val(0);
	}

	//если взрослые равен 0, то дети равно 0
	if (adultsVal == 0){
		$('#children').val(0);
	}
	
	console.log('adultsVal: ', $('#adults').val() );
	console.log('childrenVal: ', $('#children').val() );
});


$('#children').on('change', function (event) {
	childrenVal = $(this).val();

	//если дети меньше 0, то дети 0
	if (childrenVal < 0){
		$(this).val(+1);
	}
	
	//если взрослые равен 0, то дети равно 0
	if (adultsVal == 0){ 
		$('#children').val(0);
	}

	console.log('adultsVal: ', $('#adults').val() );
	console.log('childrenVal: ', $('#children').val() );
});
//если кликаем по плюсику, то увеличиваем на 1, для этого надо привязать инпут к 
//если кликаем по минусы, то уменьшаем на 1

var plus = $('.form__num_plus');
$('.form__num_plus').on('click',function(event){
	event.preventDefault();
	var adultsVal = parseInt( $('#adults').val() );
	plus = $('#adults').val(adultsVal+1);
	console.log('adultsVal: ', $('#adults').val() );
});

var minus = $('.form__num_minus');
$('.form__num_minus').on('click',function(event){
	event.preventDefault();
	var adultsVal = parseInt( $('#adults').val() );
	plus = $('#adults').val(adultsVal-1);
	console.log('adultsVal: ', $('#adults').val() );
});

