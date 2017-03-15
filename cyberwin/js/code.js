$(function() {
	$( ".js-line" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		}
		});
		$( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
		" - " + $( "#slider-range" ).slider( "values", 1 ) );

		var range = $(".js-line").slider( "option", "range" );

});

var a = {
	prop: 1,
	f: function() {
		console.log(this.prop);
	}
},
b = {
	prop: 2,
	f: function() {
		console.log(this.prop);
	}
};

a.f();
b.f();