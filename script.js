/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * DONE: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = [] ;
// Variable for store the correct random number 
let numberGuess = getRandomNumber();


window.onload = function() {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);

}

/**
* Functionality for playing the whole game
*/
function playGame(){
// *CODE GOES BELOW HERE *
  let guess = document.getElementById('number-guess').value;
  displayResult(guess) ;
  saveGuessHistory(guess);
  displayHistory();
}

/**
* Show the result for if the guess it too high, too low, or correct
* HINT: Use if, else if, else statement 
*/
// *CODE GOES BELOW HERE *
function displayResult(guess) {
  if (guess > numberGuess) {
    showNumberAbove();
  }
  else if(guess < numberGuess){
    showNumberBelow();
  }
  else{
    showYouWon() ;
  }
}


/**
* Initialize a new game by resetting all values and content on the page
* HINT: reset the correctNumber, guesses, and HTML content
*/
function initGame(){
// *CODE GOES BELOW HERE *
numberGuess = getRandomNumber();
resetResultContent() ;
guesses = [] ;
displayHistory();

}

/**
* Reset the HTML content for guess history
*/
function resetResultContent(){
document.getElementById("result").innerHTML = "";
}

/**
* Return a random number between 1 and 100
* HINT: Use Math.random 
*/
function getRandomNumber(){
// *CODE GOES BELOW HERE *
let randomNumber = Math.random() ; //within 0-1 [excluding 1] ;
let finalRandom = Math.floor(randomNumber*100 +1) ;
return finalRandom ;
}

/**
* Save guess history 
* HINT: Search Google "append to array in javascript"
* HINT: Use the guesses variable
*/
function saveGuessHistory(guess) {
// *CODE GOES BELOW HERE *
guesses.push(guess) ;
}

/**
* Display guess history to user
* HTML TO USE:
* <ul class='list-group'>
*  <li class='list-group-item'>You guessed {number}</li
* </ul>
* HINT: use while loop and string concatentation to create a list of guesses
*/
function displayHistory() {
let index=guesses.length-1; // TODO
let list = "<ul class='list-group'>";
// *CODE GOES BELOW HERE *
while (index>=0) {
 list+= "<li class='list-group-item'>"+" You guessed " + guesses[index] + "</li>" ;
 index-- ;
}
list += '</ul>'
document.getElementById("history").innerHTML = list;
}


/**
* Retrieve the dialog based on if the guess is wrong or correct 
*/
function getDialog(dialogType, text){
let dialog;
switch(dialogType){
  case "warning":
    dialog = "<div class='alert alert-warning' role='alert'>"
    break;
  case "won":
    dialog = "<div class='alert alert-success' role='alert'>"
    break;
}
dialog += text;
dialog += "</div>"
return dialog;
}

function showYouWon(){
const text = "Awesome job, you got it!"
/**
 * Retrieve the dialog using the getDialog() function
 * and save it to variable called dialog
 * HINT: Use the 'won' and text parameters 
 */
// *CODE GOES BELOW HERE *
let dialog = getDialog('won' , text) ;
document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
const text = "Your guess is too high!"
/**
 * Retrieve the dialog using the getDialog() function
 * and save it to variable called dialog
 * HINT: Use the 'warning' and text parameters 
 */
// *CODE GOES BELOW HERE *
let dialog = getDialog('warning' , text) ;
document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
const text = "Your guess is too low!"
/**
 * Retrieve the dialog using the getDialog() function
 * and save it to variable called dialog
 * HINT: Use the 'warning' and text parameters 
 */
// *CODE GOES BELOW HERE *
let dialog = getDialog('warning' , text) ;
document.getElementById("result").innerHTML = dialog;
}
