$(document).ready(function(){
	var moveNumber = 0;
	var board = [];

	 


	$('td').click(function(){

		if (moveNumber % 2 === 0) {
			$(this).text('X');
		} else {
			$(this).text('O');
		};

		if (moveNumber < 9) {
			$('#move-number').html(++moveNumber);
		};
	});

});