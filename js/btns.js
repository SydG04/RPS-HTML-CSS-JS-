var dialogue = document.getElementById("computer-text");
var computerText = dialogue.textContent;
let btncontainer = document.querySelector(".yn-btns");
let endGameBtnContainer = document.querySelector(".eg-btns");
let endGameBtn = document.getElementById("endgame");
let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");
let typeItInstance;
const myTimeout = setTimeout(showBTNS, 4500);

computerText = "You dare challenge me to a game of rock, paper, scissors?"

typeItText(computerText);

//events listener
yesBtn.addEventListener("click",yesBTNPressed);
noBtn.addEventListener("click", noBTNPressed);
endGameBtn.addEventListener("click",endGameBTNPressed);


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

//display buttons
function showBTNS() {
  btncontainer.classList.add("visible");
}

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

//fix this
//making end game button visible
function endGameBTN() {
  endGameBtnContainer.classList.remove("hidden");
  endGameBtnContainer.classList.add("visible");
}

//when end game is pressed
function endGameBTNPressed() {
  endGameBtnContainer.classList.remove("visible");
  endGameBtnContainer.classList.add("hidden");
  //add a function that display reaction text to score. 
  //Make that in the score file. Call it
}