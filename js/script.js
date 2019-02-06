'use strict';

var scoreOutput = document.getElementById("output");

// Funkcja dotycząca kto wygra
var playerPick = function(playerPick) {
  var comp = compMove();

  if (playerPick === comp) {
    scoreOutput.innerHTML = "Draw";
  }
  else if (playerPick === 'rock' && comp === 'paper' || playerPick === "scissors" && comp === "rock" || playerPick === "rock" && comp === "paper") {
    scoreOutput.innerHTML = "Wygrywa komputer";
  }
  else {
    scoreOutput.innerHTML = "Wygrywa gracz";
  }
};

var playerPickRock = document.getElementById("player1Rock");
var playerPickScissors = document.getElementById("player1Scissors");
var playerPickPaper = document.getElementById("player1Paper");

// Deklaracja ruchu gracza
playerPickRock.addEventListener('click', function() {
  playerPick('rock');
});

playerPickScissors.addEventListener('click', function(){
  playerPick('scissors');
});

playerPickPaper.addEventListener('click', function() {
  playerPick('paper');
});

// Losuje ruch dla komputerar
function compMove() {
  var compPick = ['rock', 'paper','scissors'];
  return compPick[Math.floor(Math.random() * 3)];
};
