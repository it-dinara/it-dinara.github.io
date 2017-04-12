  $( function() {
	$( "#city" ).selectmenu();
 
	$( "#files" ).selectmenu();
 
	$( "#number" )
	  .selectmenu()
	  .selectmenu( "menuWidget" )
		.addClass( "overflow" );
 
	$( "#salutation" ).selectmenu();
  } );