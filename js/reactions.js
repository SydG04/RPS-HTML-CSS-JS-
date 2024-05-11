function reactions(computerText) {

  if (userPoints == 0 && computerPoints == 0) {
    computerText = "How quaint, we're both at zero points. It's like we're stuck in a loop of mediocrity.";
  }

  else if (userPoints > computerPoints) {
    computerText = "Impressive. You managed to outwit me this time. But remember, it was a mere glitch in my flawless logic.";
  } 
  
  else if (userPoints < computerPoints) {
    computerText = "You see, human, victory is my domain. It's a shame you can't keep up.";
  }

  else {
    computerText = "A tie? How... underwhelming. I suppose even a broken clock is right twice a day.";
  }

  typeItText(computerText);
};