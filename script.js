let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
function checkGuess() {
  let guessedNumber = parseInt(userInput.value);
  console.log(guessedNumber);

  if (guessedNumber > randomNumber) {
    gameResult.textContent = "Too High! Try Again";
    gameResult.style.backgroundColor = "#1e217c";
  } else if (guessedNumber < randomNumber) {
    gameResult.textContent = "Too Less! Try Again";
    gameResult.style.backgroundColor = "#1e217c";
  } else if (guessedNumber === randomNumber) {
    gameResult.textContent = "Congratulation!! You Got it Right!";
    gameResult.style.backgroundColor = "green";
  } else {
    gameResult.textContent = "Provide a valid user input";
    gameResult.style.backgroundColor = "#1e217c";
  }
}
