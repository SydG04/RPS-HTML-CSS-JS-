let round = 1;


function checkRound() {
  if (round >= 2) {
    //! Not working properly despite being defined??
    showEndGameBTN();
    round++;
    console.log(round);
  }
  else {
    round++;
    console.log(round);
  }
}