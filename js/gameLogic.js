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

let result = determineWinner(userChoice,computerChoice);


function determineWinner(userChoice, computerChoice) {
  outcomes = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'lizard': ['paper', 'spock'],
    'spock': ['rock', 'scissors']
  }

  //tie
  if (userChoice == computerChoice) {
    console.log("tie"); 
    computerText
  }
  //user wins
  else if (computerChoice in outcomes[userChoice]) {
    console.log("user");
  }
  //computer wins
  else {
    console.log("computer");
  }
}