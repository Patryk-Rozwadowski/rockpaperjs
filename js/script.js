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

const modals = document.querySelectorAll('.modal');
const modalOverlay = document.querySelector('.overlay');
const modalGameOver = document.getElementById('modal-endgame');
const winnerIs = document.getElementById('winner');

const closeButtons = document.querySelectorAll('.modal .close');
const resultTable = document.querySelector('table tbody');

for (let i = 0; i < modals.length; i++) {
  let modal = modals[i];
  modal.classList.remove('show');
}

for(let i = 0; i < modals.length; i++){
  modals[i].addEventListener('click', function(event){
    event.stopPropagation();
  });
};

  var params = {
    roundCount: 0,
    playerScore: 0,
    compScore: 0,
    playerRoundLefToWin: 0,
    compRoundLefToWin:0,
    progress: [],
    endGame: false,
    roundWinner: '',
    computerOptions: function() {
      let compPick = ['rock', 'paper','scissors'];
      return compPick[Math.floor(Math.random() * 3)];
    }
  }

  for (let i = 0; i < playerMoveButton.length; i++){
    playerMoveButton[i].disabled = true;
  };

function showModal(winner) {
  winnerIs.innerHTML = 'Wygrywa ' + winner;
  modalOverlay.classList.add('show');
  modalGameOver.classList.add('show');
  resultTable.innerHTML = generateProgressTable();
}

function hideModal(event){
  event.stopPropagation();
  modalOverlay.classList.remove('show');
};

for(let i = 0; i < closeButtons.length; i++){
  closeButtons[i].addEventListener('click', hideModal);
};

modalOverlay.addEventListener('click', hideModal);


startNewGame.addEventListener('click', function(event) {
  params.roundCount = window.prompt("Podaj ilość rund");
  if (isNaN(params.roundCount) || params.roundCount ===''){
    alert('Podaną złą wartość');
  }
  else {
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

function roundInfo (playerChoice, computerChoice) {
  params.progress.push({
    player_movement : playerChoice,
    computer_movement : computerChoice,
    round_winner : params.roundWinner,
    round_result : params.playerScore + '-' + params.compScore,
  });
};

var generateProgressTable = function() {
  var tbody = '';
  params.progress.forEach(function(round, index) {
    tbody += '<tr><td> ' + index + '</td><td> ' + round.player_movement + '</td><td> ' + round.computer_movement + '</td><td> ' + round.round_winner + '</td><td> ' + round.round_result + '</td></tr>'
  });
  params.progress = [] ;
  return tbody;
};

function gameDecide(){
  if(params.playerScore >= params.roundCount){
    showModal('gracz');
    for (let i = 0; i < playerMoveButton.length; i++){
      playerMoveButton[i].disabled = true;
    }
  }
  else if (params.compScore >= params.roundCount){
    showModal('komputer');
    winnerIs.innerHTML = 'Wygrywa komputer!'
    for (let i = 0; i < playerMoveButton.length; i++){
      playerMoveButton[i].disabled = true;
    };
  }
};

function whoWon(playerMove) {
  const  compMove =  params.computerOptions();
  const playerTurn = playerMove.getAttribute('data-move');
  console.log(compMove);
  console.log(playerTurn);

  if (playerMove === compMove) {
    scoreOutput.innerHTML = 'Draw';
  }
  else if (compMove === 'paper' && playerTurn === 'rock' ||
          compMove === 'scissors' && playerTurn === 'paper' ||
          compMove === 'rock' && playerTurn === 'scissors') {
    params.compScore++;
    params.roundWinner = 'Gracz'
    scoreOutput.innerHTML = 'Wygrywa komputer';
    compOutput.innerHTML = 'Komputer: ' + params.compScore;

    params.compRoundLefToWin--;
    compRoundLeftoutput.innerHTML = "<br><br> Punkty  " + params.compRoundLefToWin + " aby wygrać";
    roundInfo(playerTurn, compMove);
  }
  else if (playerTurn === 'paper' && compMove === 'rock' ||
          playerTurn === 'scissors' && compMove === 'paper' ||
          playerTurn === 'rock' && compMove === 'scissors'){
    params.playerScore++;
    params.roundWinner = 'Komputer'
    scoreOutput.innerHTML = 'Wygrywa gracz';
    playerOutput.innerHTML = 'Gracz: ' + params.playerScore;

    params.playerRoundLefToWin--;
    playerRoundLeftoutput.innerHTML = '<br><br> Zdobądź ' + params.playerRoundLefToWin + ' aby wygrać';
    roundInfo(playerTurn, compMove);
  };
};

for (let i = 0; i < playerMoveButton.length; i++){
    playerMoveButton[i].addEventListener('click', function(){
      whoWon(this);
      gameDecide();

      const playerPick = this.getAttribute('data-move');
      playerOutputChoose.innerHTML = 'wybrałeś ' + playerPick;
    });
  }
}());
