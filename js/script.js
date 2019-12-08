let argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput, argButtonName;

let buttonRock;
let buttonPaper;
let buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
      return 'papier';
    } else if (argMoveId == 3){
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  /**
  *Losowanie ruchu komputera
  */
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  if (randomNumber == '1') {
    computerMove = 'kamień';
  } else if (randomNumber == '2') {
    computerMove = 'papier';
  } else if (randomNumber == '3') {
    computerMove = 'nożyce';
  } else {
    computerMove = 'nieznany ruch';
  }
  printMessage('Mój ruch: ' + computerMove);
  /**
  *Zagranie gracza
  */
  playerMove = argButtonName;
  console.log('Wybór gracza to: ' + argButtonName);
  if (argButtonName == 'kamień') {
    playerMove = 'kamień';
  } else if (argButtonName == 'papier') {
    playerMove = 'papier';
  } else if (argButtonName == 'nożyce') {
    playerMove = 'nożyce';
  } else {
    playerMove = 'nieznany ruch';
  }
  printMessage('Twój ruch: ' + playerMove);
  displayResult('kamień', 'papier', 'nożyce');
}

/**
* Wyświetlanie wyniku
*/
let buttonWynik;
buttonWynik = document.getElementById('button-wynik');

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
    printMessage('Przegrywasz :()');
  } else if (argPlayerMove == 'kamień' && argComputerMove =='kamień') {
    printMessage('Remis!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
    printMessage('Przegrywasz :()');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'papier') {
    printMessage('Remis!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce') {
    printMessage ('Przegrywasz :()');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'nożyce') {
    printMessage('Remis');
  }
}
/**
* Powiązania guzików z funkcją buttonClick
*/
buttonRock.addEventListener('click', function(){
  buttonClicked('kamień')
});
buttonPaper.addEventListener('click', function(){
  buttonClicked('papier')
});
buttonScissors.addEventListener('click', function(){
  buttonClicked('nożyce')
});
