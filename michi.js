/* task: Replace dom elements to classes! */

$(document).ready(function() {
  $('td').click(function() {
    if ($(this).find('h1').length == 0) {
      if ($('div#players span').attr('id') == 'turn-a') {
        $(this).append('<h1 style="color: blue">X</h1>');
        winRow();
        $('div#players span').attr('id', 'turn-b');
        $('div#players span').html('Es el turno jugador B');
      }
      else {
        $(this).append('<h1 style="color: red">O</h1>');
        winRow();
        $('div#players span').attr('id', 'turn-a');
        $('div#players span').html('Es el turno jugador B');
      }
    }
    
  });
  
  function winRow() {
    player_a = 0;
    player_b = 0;
    for (i = 0; i < 3; i++) {
      //~ alert($('tr#row-0 td#cel-' + i).text());
      if ($('tr#row-0 td#cel-' + i).text() == 'X') {
        player_a++;
      }
      else if ($('tr#row-0 td#cel-' + i).text() == 'O'){
        player_b++;
        console.log(player_b);
      }
    }
    if (player_a == 3) {
      alert('Player [A] WINS');
    }
    else if (player_b == 3) {
      alert('Player [B] WINS');
    }
  }
});
