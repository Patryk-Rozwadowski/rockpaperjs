'use strict';

var scoreOutput = document.getElementById("output");
var compOutput = document.getElementById("compOutput");
var playerOutput = document.getElementById("playerOutput");
var playerScore = 0;
var compScore = 0;

var playerPickRock = document.getElementById("player1Rock");
var playerPickScissors = document.getElementById("player1Scissors");
var playerPickPaper = document.getElementById("player1Paper");
var startNewGame = document.getElementById("StartButton");

////////////////////
// START GAME //
////////////////////



/////////////////////////////////////////
//  Funkcja dotycząca kto zdobył punkt  + funkcja na to kto wygral mecz//
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
  won();
};

//////////////////////////////
//  Funkcja dotycząca kto wygrał  //
//////////////////////////////
  function won() {

  if (playerScore == 10 ) {
    scoreOutput.innerHTML = "Wygrałeś!";
  }
  else if (compScore == 10 ) {
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

startNewGame.addEventListener('click', function() {
  var playerScore = 0;
  var compScore = 0;

  scoreOutput.innerHTML = "Nowa gra rozpoczęta!";
  playerOutput.innerHTML = "Nowa gra! Zaczynamy od: " + playerScore;
  compOutput.innerHTML = "Nowa gra! Zaczynamy od: " + compScore;
});
///////////////////////////////
// Losuje ruch dla komputerar ///
//////////////////////////////
function compMove() {
  var compPick = ['rock', 'paper','scissors'];
  return compPick[Math.floor(Math.random() * 3)];
};
