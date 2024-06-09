let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
};

let getHumanChoice = () => {
  console.log("Choose one of the options 'Rock', 'Paper', or 'Scissors'");
  let humanChoice = prompt("Type one of the follow options above");

  return humanChoice.toLowerCase();
};

let checkHumanWin = (humanChoice, computerChoice) => {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    return true;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return true;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    return true;
  }

  return false;
};

let playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) {
    console.log("Draw! Both of you chose " + humanChoice);
  }
  if (humanChoice != computerChoice) {
    let humanWin = checkHumanWin(humanChoice, computerChoice);

    if (humanWin == true) {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanScore++;
    } else {
      console.log("You Lose! " + humanChoice + " beats " + computerChoice);
      computerScore++;
    }
  }
};

// Play round 5 times
while (humanScore != 5 && computerScore != 5) {
  // Store variables from human and computer
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
}
