var clickCount = 1;
var winner = false;

function increaseCount() {
    clickCount++;
}

var squares = ['.1A','.1B','.1C','.2A','.2B','.2C','.3A','.3B','.3C'];

var scores = {}
squares.forEach(function(square)
{ scores[square]=0 });

function reset() {
  squares.forEach(function(square)
  { scores[square]=0;
  $(square).removeClass('clicked_x');
  $(square).removeClass('clicked_o');
  $(square).text('');
  clickCount = 1;
  winner = false;
})}

function wins() {
    if ((($('.1A').text() === "X") && ($('.1B').text() === "X") && ($('.1C').text() === "X")) ||
        (($('.2A').text() === "X") && ($('.2B').text() === "X") && ($('.2C').text() === "X")) ||
        (($('.3A').text() === "X") && ($('.3B').text() === "X") && ($('.3C').text() === "X")) ||
        (($('.1A').text() === "X") && ($('.2A').text() === "X") && ($('.3A').text() === "X")) ||
        (($('.1B').text() === "X") && ($('.2B').text() === "X") && ($('.3B').text() === "X")) ||
        (($('.1C').text() === "X") && ($('.2C').text() === "X") && ($('.3C').text() === "X")) ||
        (($('.1A').text() === "X") && ($('.2B').text() === "X") && ($('.3C').text() === "X")) ||
        (($('.1C').text() === "X") && ($('.2B').text() === "X") && ($('.3A').text() === "X")) ||
        (($('.1A').text() === "O") && ($('.1B').text() === "O") && ($('.1C').text() === "O")) ||
        (($('.2A').text() === "O") && ($('.2B').text() === "O") && ($('.2C').text() === "O")) ||
        (($('.3A').text() === "O") && ($('.3B').text() === "O") && ($('.3C').text() === "O")) ||
        (($('.1A').text() === "O") && ($('.2A').text() === "O") && ($('.3A').text() === "O")) ||
        (($('.1B').text() === "O") && ($('.2B').text() === "O") && ($('.3B').text() === "O")) ||
        (($('.1C').text() === "O") && ($('.2C').text() === "O") && ($('.3C').text() === "O")) ||
        (($('.1A').text() === "O") && ($('.2B').text() === "O") && ($('.3C').text() === "O")) ||
        (($('.1C').text() === "O") && ($('.2B').text() === "O") && ($('.3A').text() === "O"))) {
          winner = true }
      if (winner) {
        if (clickCount % 2) {
          alert("O's won!")
          setTimeout(reset,200)
        }
      else {
        alert("X's won!")
        setTimeout(reset,200)
      }
    }
  }
squares.forEach(function(square){
  $(square).on('click',function() {
  if (!$(this).hasClass('clicked_x') && !$(this).hasClass('clicked_o')) {
    if (clickCount % 2 === 1) {
      $(square).addClass('clicked_x');
      $(square).text('X');
      scores[square] = 1}
    else {
      $(square).addClass('clicked_o');
      $(square).text('O');
      scores[square] = 2}
    increaseCount()}
  if (clickCount === 9) {
    setTimeout(function() { alert("A draw. Let's play again") }, 500 );
    setTimeout(reset, 500)}
  setTimeout(wins,50);
  })});
