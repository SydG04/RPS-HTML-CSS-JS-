let choicesContainer = document.getElementById("choices-container");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

var choices = ["rock", "paper", "scissors"];

// var userChoice, computerChoice;

function showChoices() {
  choicesContainer.classList.remove("hidden");
  choicesContainer.classList.add("visible");
}

//event listeners for choices
rock.addEventListener("click", function() {
  getUserChoice("rock");
});

paper.addEventListener("click", function () {
  getUserChoice("paper");
});

scissors.addEventListener("click", function () {
  getUserChoice("scissors");
});

//handles and passes userChoice
function getUserChoice(userChoice) {
  playGame(userChoice);
}

//handles and passes computerChoice
function getComputerChoice() {
  let  computerChoiceIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[computerChoiceIndex];
  return computerChoice;
}

