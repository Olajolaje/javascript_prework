var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;


/**
 * Describe this function...
 */

var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
computerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');
computerMove = 'nożyce';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

var computerMove, randomNumber;
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
 * Describe this function...
 */
var playerMove, playerInput;
playerMove = argButtonName;
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

/**
 * Describe this function...
 */
 var displayResult;

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
    printMessage('Przegrywasz :()');
  } else if (argPlayerMove == 'kamień' && argComputerMove =='kamień') {
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


function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId ==2){
    return 'papier';
  } else if (argMoveId ==3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}


playerMove = argButtonName;
console.log('wybór ruchu gracza to: ' + playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);


/**
 * Describe this function...
 */



var argButtonName, buttonClicked;
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}

var buttonTest;
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked (kamień); });
buttonPaper = document.getElementById('button-papeir');
buttonPaper.addEventListener('click', function(){ buttonClicked (papier); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked (nożyce); });
