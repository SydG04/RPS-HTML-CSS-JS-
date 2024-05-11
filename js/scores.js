//Keeps track of scores of the rps game
let displayUserPoints = document.getElementById("human-points");
let displayComputerPoints = document.getElementById("computer-points");

//initial score
let userPoints = 0;
let computerPoints = 0;

function winner(result) {
  if (result == "tie") {
    computerText = "Looks like we're evenly matched, human. Let's play again.";
    console.log(computerText);
    typeItText(computerText);
  } else if (result == "user") {
    computerText =
      "You got lucky this time, human. Don't expect it to happen again.";
    console.log(computerText);
    typeItText(computerText);

    //points to user
    userPoints += 1;
    displayUserPoints.innerHTML = userPoints;
  } else {
    computerText = "Ha! I knew I would win. Better luck next time, human.";
    console.log(computerText);
    typeItText(computerText);

    //points to computer
    computerPoints += 1;
    displayComputerPoints.innerHTML = computerPoints;
  }

  //add a round after a choice is made
  checkRound();
}
