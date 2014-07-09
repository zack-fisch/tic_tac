$(document).ready(function(){
	var moveNumber = 0;
	window.board = [];

	 


	$('td').click(function(){

		if (moveNumber % 2 === 0 && $(this).html() === '' && moveNumber < 9) {
				$(this).text('X');
				$('#move-number').html(++moveNumber);
				board.push($(this).html());
				console.log(board);
		} else if (moveNumber % 2 === 1 && $(this).html() === '' && moveNumber < 9){
				$(this).text('O');
				$('#move-number').html(++moveNumber);
		};

	});

});