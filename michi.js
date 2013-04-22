/* task: Replace dom elements to classes! */
/**
 * A simple Michi to play with two persons.
 * 
 * @author Eduardo Telaya Escobedo.
 * twitter account: @edutrul
 * gmail account: luis.eduardo.telaya@gmail.com
 */

/**
 * Execute when document is ready.
 */
$(document).ready(function() {
  $('td').click(function() {
    if ($(this).find('h1').length == 0) {
      if ($('div#players span').attr('id') == 'turn-a') {
        $(this).append('<h1 style="color: blue">X</h1>');
        verifyWinner();
        $('div#players span').attr('id', 'turn-b');
        $('div#players span').html('Es el turno jugador B');
      }
      else {
        $(this).append('<h1 style="color: red">O</h1>');
        verifyWinner();
        $('div#players span').attr('id', 'turn-a');
        $('div#players span').html('Es el turno jugador A');
      }
    }
  });
  
  /**
   * Verify winner.
   */
  function verifyWinner() {
    str_winner = null;
    if (winRowCell() == 'A' || winDiagonal() == 'A') {
      str_winner = 'The Winner is player [A]';
    }
    else if (winRowCell() == 'B' || winDiagonal() == 'B') {
      str_winner = 'The Winner is player [B]';
    }
    // tie
    else if ($('td h1').length == 9) {
      str_winner = 'Tie!';
    }
    
    // Show winner message and reload page.
    if (str_winner) {
      alert(str_winner);
      document.location.reload();
    }
  }
  
  /**
   * Check if sb wins using row or cell.
   */
  function winRowCell() {
    player_a = 0;
    player_b = 0;
    isRow = true;
    for (r = 0; r < 2; r++) {
      for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
          if ($('tr#row-' + (isRow ? i : j) + ' td.cel-' + (isRow ? j : i)).text() == 'X') {
            player_a++;
          }
          else if ($('tr#row-' + (isRow ? i : j) + ' td.cel-' + (isRow ? j : i)).text() == 'O'){
            player_b++;
          }
        }
        if (player_a == 3) {
          return 'A';
        }
        else if (player_b == 3) {
          return 'B';
        }
        player_a = 0;
        player_b = 0;
      }
      isRow = false;
    }
  }
  
  /**
   * Check if sb win using diagonal left or right.
   * 
   * @return string
   *   A if player a wins, else B if player b wins.
   */
  function winDiagonal() {
    var player_str_a = 'X';
    var player_str_b = 'O';
    var player_str_turn = player_str_a;
    for (i = 0; i < 2; i++) {
      if ($('tr#row-0 td.cel-0').text() == player_str_turn && 
          $('tr#row-1 td.cel-1').text() == player_str_turn &&
          $('tr#row-2 td.cel-2').text() == player_str_turn ) {
        return player_str_turn == player_str_a ? 'A' : 'B';
      }
      else if (
        $('tr#row-0 td.cel-2').text() == player_str_turn && 
        $('tr#row-1 td.cel-1').text() == player_str_turn &&
        $('tr#row-2 td.cel-0').text() == player_str_turn
        ) {
        return player_str_turn == player_str_a ? 'A' : 'B';
      }
      var player_str_turn = player_str_b;
    }
  }
});
