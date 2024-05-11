//function is only active once a user makes a choice
function playGame(userChoice) {
    let computerChoice = getComputerChoice();
    console.log ("User Choice:", userChoice, "Computer Choice:", computerChoice);
    determineWinner(userChoice,computerChoice);
  
}

// function handleUserChoice(choice) {
//   userChoice = choice;
//   console.log("User's choice:" + userChoice);
//   determineWinner(userChoice, computerChoice);
// }

// function handleComputerChoice(computerChoice) {
//   console.log("Computer's choice:" + computerChoice); 
//   determineWinner(userChoice, computerChoice);
// }



function determineWinner(userChoice, computerChoice) {
  var result;

  // * I added extra choices for future features
  outcomes = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'lizard': ['paper', 'spock'],
    'spock': ['rock', 'scissors']
  }

  // if (userChoice == undefined && computerChoice == undefined) {
  //   console.log("undefined");
  // }
  
  //tie
  if (userChoice == computerChoice) {
    console.log("tie");
    result = "tie";
    return winner(result);
  }
  //user wins
  else if (outcomes[userChoice].includes(computerChoice)) {
    console.log("user");
    result = "user";
    return winner(result);
  }
  //computer wins
  else {
    console.log("computer");
    result = "computer";
    return winner(result);
  }
}