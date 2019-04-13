'use strict';
(function(){
const scoreOutput = document.getElementById("output");
const compOutput = document.getElementById("compOutput");
const playerOutput = document.getElementById("playerOutput");

const playerRoundLeftoutput = document.getElementById("playerRoundLeftOutput");
const compRoundLeftoutput = document.getElementById("compRoundLeftOutput");
const startNewGame = document.getElementById("startButton");
const playerMoveButton = document.querySelectorAll('.player-move');
const playerOutputChoose =  document.getElementById('player__pick');
const compOutputChoose = document.getElementById('computer__pick');

const modals = document.querySelectorAll('modal');
const modalOverlay = document.querySelectorAll('overlay');
const modalGameOver = document.getElementById('modal-endgame');
const modalGameResult = document.getElementById('modal-gameresult');

for (let i = 0; i < modals.length; i++) {
  let modal = modals[i];
  modal.classList.remove('show');
}

  var params = {
    roundCount: 0,
    playerScore: 0,
    compScore: 0,
    playerRoundLefToWin: 0,
    compRoundLefToWin:0,
    progress: [],
    endGame: false,
    computerOptions: function() {
      let compPick = ['rock', 'paper','scissors'];
      return compPick[Math.floor(Math.random() * 3)];
    }
  }

  for (let i = 0; i < playerMoveButton.length; i++){
    playerMoveButton[i].disabled = true;
  };

startNewGame.addEventListener('click', function(event) {
  params.roundCount = window.prompt("Podaj ilość rund");
  if (isNaN(params.roundCount) || params.roundCount ===''){
    alert('Podaną złą wartość');
  }
  else if (params.roundCount !== null){
    params.playerScore = 0;
    params.compScore = 0;
    params.playerRoundLefToWin = params.roundCount;
    params.compRoundLefToWin = params.roundCount;
    params.endGame = false;
    compRoundLeftoutput.innerHTML = "Nowa gra rozpoczęta! " + "<br><br> Aby wygrać mecz zdobądź: " + params.roundCount + " punktów!";
    playerRoundLeftoutput.innerHTML = "Nowa gra rozpoczęta! " + "<br><br> Aby wygrać mecz zdobądź: " + params.roundCount + " punktów!";

    for (let i = 0; i < playerMoveButton.length; i++){
      playerMoveButton[i].disabled = false;
    }
  }
});

function gameDecide(){
  if(params.playerScore >= params.roundCount){
    params.endGame = true;
    if(params.playerScore >= params.roundCount){
      alert("Wygrałeś! :) Aby zagrać jeszcze raz kliknij w Start new game!");
      for (let i = 0; i < playerMoveButton.length; i++){
        playerMoveButton[i].disabled = true;
      }
    }
    else if (params.compScore >= params.roundCount){
      alert("Przegrałeś :( Aby zagrać jeszcze raz kliknij w Start new game! ");
      for (let i = 0; i < playerMoveButton.length; i++){
        playerMoveButton[i].disabled = true;
      };
    }
  }
  else {
    modalGameover.classList.add('show');
  }
};
/////////////////////////////////////////
//  Funkcja dotycząca kto zdobył punkt
////////////////////////////////////////
const whoWon =  function(playerMove) {
  const  compMove =  params.computerOptions();

  for (let i = 0; i < playerMoveButton.length; i++){
    playerMove = playerMoveButton[i].getAttribute('data-move');
    playerOutputChoose.innerHTML = 'wybrałeś ' + playerMove;
    compOutputChoose.innerHTML = 'komputer wybrał ' + compMove;
  };

  console.log(compMove);
  console.log(playerMove);

  if (playerMove === compMove) {
    scoreOutput.innerHTML = 'Draw';
    compOutput.innerHTML = 'Komputer: ' + params.compScore;
    playerOutput.innerHTML = 'Gracz: ' + params.playerScore;
  }
  else if (compMove === 'paper' && playerMove === 'rock' ||
          compMove === 'scissors' && playerMove === 'paper' ||
          compMove === 'rock' && playerMove === 'scissors') {
    params.compScore++;
    scoreOutput.innerHTML = 'Wygrywa komputer';
    compOutput.innerHTML = 'Komputer: ' + params.compScore;

    params.compRoundLefToWin--;
    compRoundLeftoutput.innerHTML = "<br><br> Punkty  " + params.compRoundLefToWin + " aby wygrać";
  }
  else if (playerMove === 'paper' && compMove === 'rock' ||
          playerMove === 'scissors' && compMove === 'paper' ||
          playerMove === 'rock' && compMove === 'scissors'){
    params.playerScore++;
    scoreOutput.innerHTML = 'Wygrywa gracz';
    playerOutput.innerHTML = 'Gracz: ' + params.playerScore;

    params.playerRoundLefToWin--;
    playerRoundLeftoutput.innerHTML = '<br><br> Zdobądź ' + params.playerRoundLefToWin + ' aby wygrać';
  };
};

for (let i = 0; i < playerMoveButton.length; i++){
    playerMoveButton[i].addEventListener('click', function(){
      whoWon(this);
      gameDecide()
    });
  }
}());
