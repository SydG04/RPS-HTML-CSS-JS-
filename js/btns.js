var dialogue = document.getElementById("computer-text");
var computerText = dialogue.textContent;

let btncontainer = document.querySelector(".yn-btns");
let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");

let endGameBtnContainer = document.querySelector(".eg-btn");
let endGameBtn = document.getElementById("endgame");

let playAgainBtnContainer = document.querySelector(".pa-btn");
let playAgainBtn = document.getElementById("playagain");

let typeItInstance;
const myTimeout = setTimeout(showBTNS, 4500);

computerText = "You dare challenge me to a game of rock, paper, scissors?"

typeItText(computerText);

//events listener
yesBtn.addEventListener("click",yesBTNPressed);
noBtn.addEventListener("click", noBTNPressed);
endGameBtn.addEventListener("click", endGameBTNPressed);
playAgainBtn.addEventListener("click", function(){
  window.location.reload();
});


//types out the computerText
function typeItText(computerText) {
  if (typeItInstance) {
    typeItInstance.reset();
  }

  typeItInstance = new TypeIt("#computer-text", {
    speed: 50,
    strings: [computerText],
  }).go()
}

//display y/n buttons
function showBTNS() {
  btncontainer.classList.add("visible");
}



//* currently not being used
// function hideChoicesTemporarily() {
//   //hide the choices buttons
//   choicesContainer.classList.remove("visible");
//   choicesContainer.classList.add("hidden");
//   setTimeout(() => {
//     choicesContainer.classList.remove("hidden");
//     choicesContainer.classList.add("visible");}, 3000);
// }

//what happens when you press each button
//yes button
function yesBTNPressed() {
  computerText = "I've seen countless humans tremble before me. Now, it's your turn. <br> Make your laughable move:";
  btncontainer.classList.remove("visible");
  btncontainer.classList.add("hidden");
  typeItText(computerText);
  setTimeout(showChoices, 3000);
}

//no button
function noBTNPressed() {
  computerText = "No? Oh, I get it. Not everyone is comfortable facing certain defeat. It's okay; I'll be here, patiently waiting for someone brave enough to challenge the inevitable. Take your time.";
  btncontainer.classList.remove("visible");
  btncontainer.classList.add("hidden");
  typeItText(computerText);
}

//making end game button visible
function showEndGameBTN() {
  endGameBtnContainer.classList.remove("hidden");
  endGameBtnContainer.classList.add("visible");
}

function endGameBTNPressed() {
  endGameBtnContainer.classList.remove("visible");
  endGameBtnContainer.classList.add("hidden");

  //hide ALL buttons
  choicesContainer.classList.remove("visible");
  choicesContainer.classList.add("hidden");

  //computer reactions
  reactions(computerText);

  setTimeout(showPlayAgainBTN, 3000);
}

function showPlayAgainBTN() {
  playAgainBtnContainer.classList.remove("hidden");
  playAgainBtnContainer.classList.add("visible");
}