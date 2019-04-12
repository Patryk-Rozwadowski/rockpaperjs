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
    playerMoveButton[i].disabled = false;
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

function gameDecide(playerTurn){
  if(params.endGame === false){
    let computerPlay = params.computerOptions();

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
    alert('Gra skończona');
  }
}
/////////////////////////////////////////
//  Funkcja dotycząca kto zdobył punkt
////////////////////////////////////////
const whoWon =  function(playerMove, compMove) {
  compMove =  params.computerOptions();
  for (let i = 0; i < playerMoveButton.length; i++){
      playerMove = playerMoveButton[i].getAttribute('data-move');
      playerOutputChoose.innerHTML = 'wybrałeś ' + playerMove;
      compOutputChoose.innerHTML = 'komputer wybrałeś' + compMove;
    };

  console.log(compMove);
  console.log(playerMove)

  if (playerMove === compMove) {
    scoreOutput.innerHTML = "Draw";

    playerOutput.innerHTML = params.playerScore;
    compOutput.innerHTML = params.compScore;
  }
  else if (playerMove === 'rock' && compMove === 'paper' || playerMove === "scissors" && compMove === "rock" || playerMove === "rock" && compMove === "paper") {
    params.compScore++;
    scoreOutput.innerHTML = "Wygrywa komputer";
    compOutput.innerHTML = "Komputer: " + params.compScore;

    params.compRoundLefToWin--;
    params.compRoundLeftoutput.innerHTML = "<br><br> Punkty  " + params.compRoundLefToWin + " aby wygrać";
  }
  else {
    params.playerScore++;
    scoreOutput.innerHTML = "Wygrywa gracz";
    playerOutput.innerHTML = "Gracz: " + params.playerScore;

    params.playerRoundLefToWin--;
    playerRoundLeftoutput.innerHTML = "<br><br> Zdobądź " + params.playerRoundLefToWin + " aby wygrać";
  };
};

for (let i = 0; i < playerMoveButton.length; i++){
    playerMoveButton[i].addEventListener('click', function(){
      whoWon(this);
    });
  }


/*startNewGame.addEventListener('click', function() {
  playerScore = 0;
  compScore = 0;
  playerOutput.innerHTML = playerScore;
  compOutput.innerHTML =  compScore;

  roundCount = window.prompt("Podaj ilość rund");
  if (roundCount = isNaN){
    window.prompt('Podaną złą wartość');
    for (let i = 0; i < playerMoveButton.length; i++){
      playerMoveButton[i].disabled = false;
    }
  }
  else if ( roundcount = ''){
    window.prompt('Nie podano ilości rund');

  }
  playerRoundLefToWin = roundCount;
  compRoundLefToWin = roundCount;

  compRoundLeftoutput.innerHTML = "Nowa gra rozpoczęta! " + "<br><br> Aby wygrać mecz zdobądź: " + roundCount + " punktów!";
  playerRoundLeftoutput.innerHTML = "Nowa gra rozpoczęta! " + "<br><br> Aby wygrać mecz zdobądź: " + roundCount + " punktów!";

  for (let i = 0; i < playerMoveButton.length; i++){
    playerMoveButton[i].disabled = false;
  }
  for (let i = 0; i < playerMoveButton.length; i++){
      playerMoveButton[i].addEventListener('click', function(){
        playerPick(this);
      });
    }
});
*/
}());
