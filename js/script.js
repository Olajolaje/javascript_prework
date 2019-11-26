
var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;


/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}


/**
 * Describe this function...
 */

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
    printMessage('Przegrywasz :()');
  } else if (argPlayerMove == 'kamień'' && argComputerMove =='kamień') {
    printMessage('Remis!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage ('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
    printMessage ('Przegrywasz :()');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'papier') {
    printMessage ('Remis!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage ('Wygrywasz!');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce') {
    printMessage ('Przegrywasz :()');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'nożyce') {
    printMessage ('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
 printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

playerMove = argButtonName;
console.log('wybór ruchu gracza to: ' + playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);


var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == "2") {
  playerMove == "papier";
} else if (playerInput == "3") {
  playerMove == 'nożyce';
} else {
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);
}

/**
 * Describe this function...
 */

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} if else (randomNumber == '2') {
  computerMove = 'papier';
} if else (randomNumber == '3'); {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);


/**
 * Describe this function...
 */
var argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonRock = document.getElementById('button-rock');
buttonTest.addEventListener('click', function(){ buttonClicked (kamień); });
buttonRock = document.getElementById('button-papeir');
buttonTest.addEventListener('click', function(){ buttonClicked (papier); });
buttonRock = document.getElementById('button-scissors');
buttonTest.addEventListener('click', function(){ buttonClicked (nożyce); });
