$(document).ready(function(){


	// var year = currentDate.getFullYear()

	$(function() {
    	$( "#accordion" ).accordion();
  	});

	var d = new Date();
	var n = d.getFullYear();

	$('#year').text(n)

})