$(document).ready(function(){

	var moveNumber = 0;
	window.board = [];	 

	$('h3').after('<button> Reset Board </button>');
		$('button').click(function() {
			location.reload();
		});

	$('td').click(function(){

		if (moveNumber % 2 === 0 && $(this).html() === '' && moveNumber < 9) {
				$(this).text('X');
				$('#move-number').html(++moveNumber);

				if ($(this).attr('id') === '0') {
					board[0] = 'X'; 
				}	
				else if ($(this).attr('id') === '1') {
					board[1] = 'X'; 
				} 
				else if ($(this).attr('id') === '2') {
					board[2] = 'X'; 
				} 
				else if ($(this).attr('id') === '3') {
					board[3] = 'X'; 
				}
				else if ($(this).attr('id') === '4') {
					board[4] = 'X'; 
				}
				else if ($(this).attr('id') === '5') {
					board[5] = 'X'; 
				}
				else if ($(this).attr('id') === '6') {
					board[6] = 'X'; 
				}
				else if ($(this).attr('id') === '7') {
					board[7] = 'X'; 
				}
				else {
					board[8] = 'X'; 
				}

		} else if (moveNumber % 2 === 1 && $(this).html() === '' && moveNumber < 9){
				$(this).text('O');
				$('#move-number').html(++moveNumber);

				if ($(this).attr('id') === '0') {
					board[0] = 'O'; 
				}
				else if ($(this).attr('id') === '1') {
					board[1] = 'O'; 
				}
				else if ($(this).attr('id') === '2') {
					board[2] = 'O'; 
				}
				else if ($(this).attr('id') === '3') {
					board[3] = 'O'; 
				}
				else if ($(this).attr('id') === '4') {
					board[4] = 'O'; 
				}
				else if ($(this).attr('id') === '5') {
					board[5] = 'O'; 
				}
				else if ($(this).attr('id') === '6') {
					board[6] = 'O'; 
				}
				else if ($(this).attr('id') === '7') {
					board[7] = 'O'; 
				}
				else {
					board[8] = 'O'; 
				};
		};

		if (board[0] === board[1] && board[1] === board[2] && board[1] !== undefined) {
			alert(board[0] + ' Wins!');
			location.reload();
		}
		else if (board[3] === board[4] && board[4] === board[5] && board[4] !== undefined) {
			alert(board[3] + ' Wins!');
			location.reload();
		}
		else if (board[6] === board[7] && board[7] === board[8] && board[7] !== undefined) {
			alert(board[6] + ' Wins!');
			location.reload();
		}
		else if (board[0] === board[3] && board[3] === board[6] && board[3] !== undefined) {
			alert(board[0] + ' Wins!');
			location.reload();
		}
		else if (board[1] === board[4] && board[4] === board[7] && board[1] !== undefined) {
			alert(board[1] + ' Wins!');
			location.reload();
		}
		else if (board[2] === board[5] && board[5] === board[8] && board[2] !== undefined) {
			alert(board[2] + ' Wins!');
			location.reload();
		}
		else if (board[0] === board[4] && board[4] === board[8] && board[0] !== undefined) {
			alert(board[0] + ' Wins!');
			location.reload();
		}
		else if (board[2] === board[4] && board[4] === board[6] && board[4] !== undefined) {
			alert(board[2] + ' Wins!');
			location.reload();
		}

		if (moveNumber % 2 == 0) {
			$('#mover').html('X');
		}
		else {
			$('#mover').html('O');
		};

	});



});