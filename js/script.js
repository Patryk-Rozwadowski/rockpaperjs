'use strict';

var scoreOutput = document.getElementById("output");
var compOutput = document.getElementById("compOutput");
var playerOutput = document.getElementById("playerOutput");

var playerRoundLeftoutput = document.getElementById("PlayerRoundLeftOutput");
var compRoundLeftoutput = document.getElementById("CompRoundLeftOutput");



var roundCount;
var endGame = false;
var playerScore = true;
var compScore = true;

var playerRoundLefToWin;
var compRoundLefToWin;

var playerPickRock = document.getElementById("player1Rock");
var playerPickScissors = document.getElementById("player1Scissors");
var playerPickPaper = document.getElementById("player1Paper");
var startNewGame = document.getElementById("StartButton");



/////////////////////////////////////
// Ile rund brakuje aby wygrać mecz //
/////////////////////////////////////



/////////////////////////////////////////////
// START GAME / RESETOWANIE WYNIKU ////////
//////////////////////////////////////////////

  startNewGame.addEventListener('click', function() {
  playerScore = 0;
  compScore = 0;


  playerOutput.innerHTML = playerScore;
  compOutput.innerHTML =  compScore;

  roundCount = window.prompt("Podaj ilość rund");

  compRoundLeftoutput.innerHTML = "Nowa gra rozpoczęta! " + "<br><br> Aby wygrać mecz zdobądź: " + roundCount + " punktów!";
  playerRoundLeftoutput.innerHTML = "Nowa gra rozpoczęta! " + "<br><br> Aby wygrać mecz zdobądź: " + roundCount + " punktów!";
  won();
});
/////////////////////////////////////////
//  Funkcja dotycząca kto zdobył punkt  + funkcja na to kto wygral mecz//
////////////////////////////////////////
  function playerPick(playerPick, comp,) {
  var comp = compMove();
  if (playerPick == comp) {
    scoreOutput.innerHTML = "Draw";

    compRoundLeftoutput.innerHTML = "<br><br> Punkty  " + roundCount + " aby wygrać";
    playerRoundLeftoutput.innerHTML = "<br><br> Zdobądź jeszcze" + roundCount + " aby wygrać";
  }
  else if (playerPick == 'rock' && comp == 'paper' || playerPick == "scissors" && comp == "rock" || playerPick == "rock" && comp == "paper") {
    compScore++;
    scoreOutput.innerHTML = "Wygrywa komputer";
    compOutput.innerHTML = "Komputer: " + compScore;

    roundCount--;
    compRoundLeftoutput.innerHTML = "<br><br> Punkty  " + roundCount + " aby wygrać";
  }
  else {
    playerScore++;
    scoreOutput.innerHTML = "Wygrywa gracz";
    playerOutput.innerHTML = "Gracz: " + playerScore;

    roundCount--;
    playerRoundLeftoutput.innerHTML = "<br><br> Zdobądź " + roundCount + " aby wygrać";
  }
  won();
};


//////////////////////////////
//  Funkcja dotycząca kto wygrał mecz //
//////////////////////////////
  function won(playerPick) {
  if (playerScore == roundCount ) {

    alert("Wygrałeś! :) Aby zagrać jeszcze raz kliknij w Start new game!");
    playerPickRock.addEventListener('click', function() {
      playerPick = endGame;
    });

    playerPickScissors.addEventListener('click', function(){
      playerPick = endGame;
    });

    playerPickPaper.addEventListener('click', function() {
      playerPick = endGame;
    });
  }
  else if (compScore == roundCount ) {

    alert("Przegrałeś :( Aby zagrać jeszcze raz kliknij w Start new game! ");

    playerPickRock.addEventListener('click', function() {
      playerPick = endGame;
    });

    playerPickScissors.addEventListener('click', function(){
      playerPick = endGame;
    });

    playerPickPaper.addEventListener('click', function() {
      playerPick = endGame;
    });

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
