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
let score = document.querySelector("#score")
let amountOfRounds = parseInt(selectElement.value, 10);

selectElement.addEventListener("change", () => {
  amountOfRounds = parseInt(selectElement.value, 10);
});

function updateScores(player) {
  player.score += 1
  player.player.textContent = player.score
  checkForWinner();
}

p1.button.addEventListener("click", () => updateScores(p1, p2));
p2.button.addEventListener("click", () => updateScores(p2, p1));

reset.button.addEventListener("click", () => {
  p1.score = 0;
  p2.score = 0;
  p1.player.textContent = p1.score
  p2.player.textContent = p2.score
  p1.player.style.color = "black"
  p2.player.style.color = "black"
  p1.button.style.color = "white";
  p2.button.style.color = "white";
  p1.button.classList.remove('disabled-button');
  p2.button.classList.remove('disabled-button');
})

function checkForWinner() {
  if (p1.score === amountOfRounds) {
    p1.button.style.color = "white";
    p2.button.style.color = "white";
    p1Wins();
  } else if (p2.score === amountOfRounds) {
    p1.button.style.color = "white";
    p2.button.style.color = "white";
    p2Wins();
  }
}


function p1Wins() {
  p1.player.style.color = "green"
  p2.player.style.color = "red"
  p1.button.style.color = "rgba(67, 232, 130, 0.860)"
  p2.button.style.color = "rgba(59, 85, 255, 0.860)"
  p1.button.classList.add('disabled-button');
  p2.button.classList.add('disabled-button');
  p1.button.style.color = "white";
  p2.button.style.color = "white";
}

function p2Wins() {
  p1.player.style.color = "red"
  p2.player.style.color = "green"
  p1.button.style.backgroundColor = "rgba(67, 232, 130, 0.860)"
  p2.button.style.backgroundColor = "rgba(59, 85, 255, 0.860)"
  p1.button.classList.add('disabled-button');
  p2.button.classList.add('disabled-button');
  p1.button.style.color = "white";
  p2.button.style.color = "white";
}
