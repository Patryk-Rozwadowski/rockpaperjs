'use strict';

var scoreOutput = document.getElementById("output");
var scoreTable = document.getElementById("scoreTable");
var playerScore = 0;
var compScore = 0;


var playerPickRock = document.getElementById("player1Rock");
var playerPickScissors = document.getElementById("player1Scissors");
var playerPickPaper = document.getElementById("player1Paper");

//////////////////////////////
//  Funkcja dotycząca kto wygra  //
//////////////////////////////
var playerPick = function(playerPick) {
  var comp = compMove();

  if (playerPick === comp) {
    scoreOutput.innerHTML = "Draw";
    scoreTable.innerHTML = ;
  }
  else if (playerPick === 'rock' && comp === 'paper' || playerPick === "scissors" && comp === "rock" || playerPick === "rock" && comp === "paper") {
    compScore++;
    scoreOutput.innerHTML = "Wygrywa komputer";
    scoreTable.innerHTML = "Wygrywa komputer "  + playerScore + " Computer:" + compScore;
  }
  else {
    playerScore++;
    scoreOutput.innerHTML = "Wygrywa gracz";
    scoreTable.innerHTML = "Wygrywa gracz: "  + playerScore + " Computer: " + compScore;
  }
};
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
