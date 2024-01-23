let randomNumber = parseInt(Math.random() * 20 + 1);

const userInput = document.querySelector("#guess");
const submitButton = document.querySelector("#check-btn");
const guessSlot = document.querySelector("#guessed-nums");
const remaining = document.querySelector("#no-of-guesses");
const restartButton = document.querySelector("#restart");
const game = document.querySelector("#game");
const hint = document.querySelector("#hint");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess < 1 || guess > 20 || isNaN(guess)) {
    alert("Please enter a valid number between 1 to 20.");
    return;
  } else {
    if (numGuess === 10) {
      displayGuess(guess);
      hint.innerHTML = `Game Over. The number was ${randomNumber}`;
      hint.classList.add("success");
      game.style.display = "none";
      restartButton.style.display = "block";
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    hint.innerHTML = `Congratulations!<br>The number was <span>${randomNumber}</span>.<br>You guessed the number in <span>${numGuess} </span>tries.`;
    hint.classList.add("success");
    game.style.display = "none";
    restartButton.style.display = "block";
  } else if (guess < randomNumber) {
    hint.innerHTML = "Too low. Try Again!";
  } else if (guess > randomNumber) {
    hint.innerHTML = "Too high. Try Again!";
  }
  hint.classList.remove("error");
  setTimeout(() => {
    hint.classList.add("error");
  }, 10);
}

function displayGuess(guess) {
  userInput.value = "";
  prevGuess.push(guess); // Add the current guess to the array
  guessSlot.innerHTML = `<span>Guessed Numbers are: ${prevGuess.join(
    ", "
  )}</span>`;
  remaining.innerHTML = `<span>No. Of Guesses:</span> ${10 - numGuess}`;
  numGuess++;
}

restartButton.addEventListener("click", () => {
  game.style.display = "grid";
  restartButton.style.display = "none";
  hint.innerHTML = "";
  hint.classList.remove("success");
  newGame();
});

function newGame() {
  randomNumber = parseInt(Math.random() * 20 + 1);
  prevGuess = [];
  numGuess = 1;
  userInput.value = "";
  remaining.innerHTML = "No. Of Guesses: 0";
  guessSlot.innerHTML = "Guessed Numbers are: ";
  hint.classList.remove("success", "error");
}
