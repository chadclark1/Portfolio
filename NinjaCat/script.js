$(document).ready(function(){

	$('img').click(function(){
		var who = $(this).attr('class');


		if(who == 'frank'){
			$(this).css('display','none');
			$(this).next().css('display','block');
		} else {
			$(this).css('display', 'none');
			$(this).prev().css('display','block');
		}

	})
})