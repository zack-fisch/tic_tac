$(document).ready(function(){

	var moveNumber = 0;
	window.board = [];

	 


	$('td').click(function(){

		if (moveNumber % 2 === 0 && $(this).html() === '' && moveNumber < 9) {
				$(this).text('X');
				$('#move-number').html(++moveNumber);
				board.push($(this).html());
		} else if (moveNumber % 2 === 1 && $(this).html() === '' && moveNumber < 9){
				$(this).text('O');
				$('#move-number').html(++moveNumber);
				board.push($(this).html());
		};
		/* in the array, we have a few possibilities for winning 
		0,1,2
		3,4,5
		6,7,8

		0,3,6
		1,4,7
		2,5,8

		0,4,8
		2,4,6
		*/

		
	});

});