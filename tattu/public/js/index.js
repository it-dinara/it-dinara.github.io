$(document).ready(function() {
	var $total = $('.js-total');
	
	
	$('.js-action-plus').on('click', function() {
		var value = parseInt($(this).attr('data-cost'));
		var totalValue = parseInt($total.attr('data-total'));
		var result = 0;
		
		if ($(this).hasClass('active')) {
			result = totalValue - value;
			$(this).removeClass('active');
		} else {
			result = totalValue + value;
			$(this).addClass('active');
		}
		
		$total
			.attr('data-total', result)
			.html(' ' + result + 'р.');
	});
})