$(document).ready(function(){
	var moveNumber = 0;

	$('td').click(function(){
		$(this).text('Hello');
		$('#move-number').html(++moveNumber);
	});

	// How to play Tic Tac Toe
	// 1. X goes first, O goes second
	// 2. Alternating moves
	// 3. 
});