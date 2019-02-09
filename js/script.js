'use strict';

var scoreOutput = document.getElementById("output");
var compOutput = document.getElementById("compOutput");
var playerOutput = document.getElementById("playerOutput");
var roundCount;
var endGame = false;
var playerScore = 0;
var compScore = 0;


var playerPickRock = document.getElementById("player1Rock");
var playerPickScissors = document.getElementById("player1Scissors");
var playerPickPaper = document.getElementById("player1Paper");
var startNewGame = document.getElementById("StartButton");


///////////////////////
// START GAME ////////
/////////////////////
  startNewGame.addEventListener('click', function() {
  playerScore = 0;
  compScore = 0;

  playerOutput.innerHTML = playerScore;
  compOutput.innerHTML =  compScore;
  roundCount = window.prompt("Podaj ilość rund");
  scoreOutput.innerHTML = "Nowa gra rozpoczęta!";
});
/////////////////////////////////////////
//  Funkcja dotycząca kto zdobył punkt  + funkcja na to kto wygral mecz//
////////////////////////////////////////
  function playerPick(playerPick, comp) {
  var comp = compMove();

  if (playerPick == comp) {
    scoreOutput.innerHTML = "Draw";
  }
  else if (playerPick == 'rock' && comp == 'paper' || playerPick == "scissors" && comp == "rock" || playerPick == "rock" && comp == "paper") {
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

  if (playerScore == roundCount ) {

    scoreOutput.innerHTML = "Wygrałeś! :)";
    playerPickRock.removeEventListener('click', function() {
      playerPick('rock');
    });

    playerPickScissors.removeEventListener('click', function(){
      playerPick('scissors');
    });

    playerPickPaper.removeEventListener('click', function() {
      playerPick('paper');
    });
  }
  else if (compScore == roundCount ) {

    scoreOutput.innerHTML = "Przegrałeś! :(";
    playerPickRock.removeEventListener('click', function() {
      playerPick('rock');
    });

    playerPickScissors.removeEventListener('click', function(){
      playerPick('scissors');
    });

    playerPickPaper.removeEventListener('click', function() {
      playerPick('paper');
    });
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
