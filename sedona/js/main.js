
var $adults = $('#adults');
var $children = $('#children');

var adultsVal = $adults.val();
var childrenVal = $children.val();

$adults.on('change', function (event) {
	adultsVal = parseInt($(this).val());

	//если взрослых меньше 0, то взрослые 0
	if (adultsVal < 0){
		$(this).val(0);
	}

	//если взрослые равен 0, то дети равно 0
	if (adultsVal == 0){
		$('#children').val(0);
	}
	
	console.log('adultsVal: ', $adults.val() );
	console.log('childrenVal: ', $children.val() );
});


$children.on('change', function (event) {
	childrenVal = parseInt($(this).val());

	//если дети меньше 0, то дети 0
	if (childrenVal < 0){
		$(this).val(0);
	}
	
	//если взрослые равен 0, то дети равно 0
	if (adultsVal == 0){ 
		$children.val(0);
	}

	console.log('adultsVal: ', $adults.val() );
	console.log('childrenVal: ', $children.val() );
});