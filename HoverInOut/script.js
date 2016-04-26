$(document).ready(function(){
	$('.frankimg').hover(function(){
		$(this).next().show("slow");
	}, function(){
		$(this).next().hide("slow");
	})
})