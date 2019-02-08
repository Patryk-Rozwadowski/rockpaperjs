'use strict';

var scoreOutput = document.getElementById("output");
var compOutput = document.getElementById("compOutput");
var playerOutput = document.getElementById("playerOutput");
var playerScore = 0;
var compScore = 0;

var playerPickRock = document.getElementById("player1Rock");
var playerPickScissors = document.getElementById("player1Scissors");
var playerPickPaper = document.getElementById("player1Paper");


/////////////////////////////////////////
//  Funkcja dotycząca kto zdobył punkt  //
////////////////////////////////////////
  function playerPick(playerPick, comp) {
  var comp = compMove();
  if (playerPick === comp) {
    scoreOutput.innerHTML = "Draw";
  }
  else if (playerPick === 'rock' && comp === 'paper' || playerPick === "scissors" && comp === "rock" || playerPick === "rock" && comp === "paper") {
    compScore++;
    scoreOutput.innerHTML = "Wygrywa komputer";
    compOutput.innerHTML = "Komputer: " + compScore;
  }
  else {
    playerScore++;
    scoreOutput.innerHTML = "Wygrywa gracz";
    playerOutput.innerHTML = "Gracz: " + playerScore;
  }
};

//////////////////////////////
//  Funkcja dotycząca kto wygrał  //
//////////////////////////////
  function won() {

  var playerWon = 10;
  var compWon = 10;

  if (playerScore = playerWon ) {
    scoreOutput.innerHTML = "Wygrałeś!";
  }
  else if (compScore = compWon ) {
    scoreOutput.innerHTML = "Przegrałeś! :(";
  }


}
/////////////////////////////////
// Deklaracja ruchu gracza /////
/////////////////////////////////
playerPickRock.addEventListener('click', function() {
  playerPick('rock');
});

playerPickScissors.addEventListener('click', function(){
  playerPick('scissors');
});

playerPickPaper.addEventListener('click', function() {
  playerPick('paper');
});
///////////////////////////////
// Losuje ruch dla komputerar ///
//////////////////////////////
function compMove() {
  var compPick = ['rock', 'paper','scissors'];
  return compPick[Math.floor(Math.random() * 3)];
};
