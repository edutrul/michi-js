/* task: Replace dom elements to classes! */
/**
 * A simple Michi to play with two persons.
 * 
 * @author Eduardo Telaya Escobedo.
 * twitter account: @edutrul
 * gmail account: luis.eduardo.telaya@gmail.com
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
  
  function verifyWinner() {
    if (winRowCell() == 'A' || winDiagonal() == 'A') {
      alert('The Winner is player [A]');
      document.location.reload();
      
    }
    else if (winRowCell() == 'B' || winDiagonal() == 'B') {
      alert('The Winner is player [B]');
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
