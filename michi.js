/* task: Replace dom elements to classes! */

$(document).ready(function() {
  $('td').click(function() {
    if ($(this).find('h1').length == 0) {
      if ($('div#players span').attr('id') == 'turn-a') {
        $(this).append('<h1 style="color: blue">X</h1>');
        winRow();
        winCell();
        winDiagonal()
        $('div#players span').attr('id', 'turn-b');
        $('div#players span').html('Es el turno jugador B');
      }
      else {
        $(this).append('<h1 style="color: red">O</h1>');
        winRow();
        winCell();
        winDiagonal()
        $('div#players span').attr('id', 'turn-a');
        $('div#players span').html('Es el turno jugador A');
      }
    }
    
  });
  
  function winRow() {
    player_a = 0;
    player_b = 0;
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        if ($('tr#row-' + i +' td.cel-' + j).text() == 'X') {
          player_a++;
        }
        else if ($('tr#row-' + i + ' td.cel-' + j).text() == 'O'){
          player_b++;
        }
      }
      if (player_a == 3) {
        alert('Player [A] WINS');
      }
      else if (player_b == 3) {
        alert('Player [B] WINS');
      }
      player_a = 0;
      player_b = 0;
    }
  }
  
  function winCell() {
    player_a = 0;
    player_b = 0;
    for (i = 0; i <3; i++) {
      for (j = 0; j < 3; j++) {
        if ($('tr#row-' + j +' td.cel-' + i).text() == 'X') {
          player_a++;
        }
        else if ($('tr#row-' + j + ' td.cel-' + i).text() == 'O'){
          player_b++;
        }
      }
      if (player_a == 3) {
        alert('Player [A] WINS');
      }
      else if (player_b == 3) {
        alert('Player [B] WINS');
      }
      player_a = 0;
      player_b = 0;
    }
  }
  
  function winDiagonal() {
    console.log($('tr#row-0 td.cel-0').text());
    console.log($('tr#row-1 td.cel-1').text());
    console.log($('tr#row-2 td.cel-2').text());
    var player_str_a = 'X';
    var player_str_b = 'O';
    var player_str_turn = player_str_a;
    for (i = 0; i < 2; i++) {
      if ($('tr#row-0 td.cel-0').text() == player_str_turn && 
          $('tr#row-1 td.cel-1').text() == player_str_turn &&
          $('tr#row-2 td.cel-2').text() == player_str_turn ) {
        alert('player [' + (player_str_turn == player_str_a ? 'A' : 'B') + '] WINS');
      }
      else if (
        $('tr#row-0 td.cel-2').text() == player_str_turn && 
        $('tr#row-1 td.cel-1').text() == player_str_turn &&
        $('tr#row-2 td.cel-0').text() == player_str_turn
        ) {
        alert('player [' + (player_str_turn == player_str_b ? 'B' : 'A') + '] WINS');
      }
      var player_str_turn = player_str_b;
    }
  }
});
