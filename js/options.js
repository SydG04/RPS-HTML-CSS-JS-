let choicesContainer = document.getElementById("choices-container");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

choices = ["rock", "paper", "scissors"];
//event listeners


function showChoices() {
  choicesContainer.classList.remove("hidden");
  choicesContainer.classList.add("visible");
}

