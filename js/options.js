let choicesContainer = document.getElementById("choices-container");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var choices = ["rock", "paper", "scissors"];
//event listeners

var userChoice, computerChoice;

function showChoices() {
  choicesContainer.classList.remove("hidden");
  choicesContainer.classList.add("visible");
  getUserChoice();
  getComputerChoice();
}

function getUserChoice() {
  rock.addEventListener("click", function() {
    handleUserChoice("rock");
  });

  paper.addEventListener("click", function () {
    handleUserChoice("paper");
  });

  scissors.addEventListener("click", function () {
    handleUserChoice("scissors");
  });
}

function getComputerChoice() {
  var computerChoiceIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[computerChoiceIndex];
  handleComputerChoice(computerChoice);
}

