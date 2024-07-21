const selectElement = document.querySelector("#number-select")
let score = document.querySelector("#score")
let amountOfRounds = parseInt(selectElement.value, 10);
const playerOneButton = document.querySelector("#button-1")
const playerTwoButton = document.querySelector("#button-2")
const resetButton = document.querySelector("#button-3")
const playerOne = document.querySelector("#player-one")
const playerTwo = document.querySelector("#player-two")

let playerOneScore = 0;
let playerTwoScore = 0;

selectElement.addEventListener("change", () => {
  amountOfRounds = parseInt(selectElement.value, 10);
});

playerOneButton.addEventListener("click", () => {
  playerOneScore += 1
  playerOne.textContent = playerOneScore
  checkForWinner();
})

playerTwoButton.addEventListener("click", () => {
  playerTwoScore += 1
  playerTwo.textContent = playerTwoScore
  checkForWinner();
})

resetButton.addEventListener("click", () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOne.textContent = playerOneScore
  playerTwo.textContent = playerTwoScore
  playerOne.style.color = "black"
  playerTwo.style.color = "black"
  playerOneButton.style.color = "white";
  playerTwoButton.style.color = "white";
  playerOneButton.classList.remove('disabled-button');
  playerTwoButton.classList.remove('disabled-button');
})

function checkForWinner() {
  if (playerOneScore === amountOfRounds) {
    playerOneButton.style.color = "white";
    playerTwoButton.style.color = "white";
    playerOneWins();
  } else if (playerTwoScore === amountOfRounds) {
    playerOneButton.style.color = "white";
    playerTwoButton.style.color = "white";
    playerTwoWins();
  }
}


function playerOneWins() {
  playerOne.style.color = "green"
  playerTwo.style.color = "red"
  playerOneButton.style.color = "rgba(67, 232, 130, 0.860)"
  playerTwoButton.style.color = "rgba(59, 85, 255, 0.860)"
  playerOneButton.classList.add('disabled-button');
  playerTwoButton.classList.add('disabled-button');
  playerOneButton.style.color = "white";
  playerTwoButton.style.color = "white";
}

function playerTwoWins() {
  playerOne.style.color = "red"
  playerTwo.style.color = "green"
  playerOneButton.style.backgroundColor = "rgba(67, 232, 130, 0.860)"
  playerTwoButton.style.backgroundColor = "rgba(59, 85, 255, 0.860)"
  playerOneButton.classList.add('disabled-button');
  playerTwoButton.classList.add('disabled-button');
  playerOneButton.style.color = "white";
  playerTwoButton.style.color = "white";
}
