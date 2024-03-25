//determine winner
//fetch userchoice and computer choice

function handleUserChoice(choice) {
  userChoice = choice;
  console.log("User's choice:" + userChoice);
  determineWinner(userChoice, computerChoice);
}

function handleComputerChoice(computerChoice) {
  console.log("Computer's choice:" + computerChoice); 
  determineWinner(userChoice, computerChoice);
}

var result = determineWinner(userChoice,computerChoice);


function determineWinner(userChoice, computerChoice) {
  outcomes = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'lizard': ['paper', 'spock'],
    'spock': ['rock', 'scissors']
  }

  if (userChoice == undefined && computerChoice == undefined) {
    console.log("undefined");
  }
  //tie
  else if (userChoice == computerChoice) {
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