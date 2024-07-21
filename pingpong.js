const p1 = {
  score: 0,
  button: document.querySelector("#button-1"),
  player: document.querySelector("#player-one")
}

const p2 = {
  score: 0,
  button: document.querySelector("#button-2"),
  player: document.querySelector("#player-two")
}

const reset = {
  button: document.querySelector("#button-3"),
}

const selectElement = document.querySelector("#number-select")
let amountOfRounds = parseInt(selectElement.value, 10);
let isGamerOver = false;

selectElement.addEventListener("change", () => {
  amountOfRounds = parseInt(selectElement.value, 10);
});

function updateScores(player) {
  if (!isGamerOver) {
    player.score += 1
    player.player.textContent = player.score
    checkForWinner();
  }
}

p1.button.addEventListener("click", () => updateScores(p1, p2));
p2.button.addEventListener("click", () => updateScores(p2, p1));

reset.button.addEventListener("click", () => {
  isGamerOver = false;
  [p1, p2].forEach(player => {
    player.score = 0;
    player.player.textContent = player.score;
    player.player.style.color = "black";
    player.button.style.color = "white";
    player.button.classList.remove("disabled-button")

  })
})

function checkForWinner() {
  if (p1.score === amountOfRounds) {
    playerWins(p1, p2);
  } else if (p2.score === amountOfRounds) {
    playerWins(p1, p2);
  }
}

function playerWins(winner, loser) {
  isGamerOver = true;
  winner.player.style.color = "green";
  loser.player.style.color = "red"
  winner.button.style.color = "rgba(67, 232, 130, 0.860)"
  loser.button.style.color = "rgba(59, 85, 255, 0.860)"
  p1.button.classList.add('disabled-button');
  p2.button.classList.add('disabled-button');
  p1.button.style.color = "white";
  p2.button.style.color = "white";
}
