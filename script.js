let humanScore = 0;
let computerScore = 0;
let text = "Select rock, paper, or scissors to start";

let getComputerChoice = () => {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
};

let checkHumanWin = (humanChoice, computerChoice) => {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        return true;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return true;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return true;
    }

    return false;
};

let playRound = (humanChoice, computerChoice) => {
    if (humanChoice != computerChoice) {
        let humanWin = checkHumanWin(humanChoice, computerChoice);

        if (humanWin === true) {
            textBox.textContent =
                "You Win! You drew " +
                humanChoice +
                ", computer drew " +
                computerChoice;
            humanScore++;
        } else {
            textBox.textContent =
                "You Lose! You drew " +
                humanChoice +
                ", computer drew " +
                computerChoice;
            computerScore++;
        }
    } else {
        textBox.textContent = "Draw! Both of you drew " + humanChoice;
    }
};

// Get the query for humanScore and computerScore. Then update it based on the current score
const hScore = document.querySelector("#humanScore");
const cScore = document.querySelector("#computerScore");
const textBox = document.querySelector("#textBox");

hScore.textContent = humanScore;
cScore.textContent = computerScore;
textBox.textContent = text;

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.id == "reset") {
            // Reset human and computer score
            humanScore = 0;
            computerScore = 0;

            // Update score after reset
            hScore.textContent = humanScore;
            cScore.textContent = computerScore;
        } else if (humanScore != 5 && computerScore != 5) {
            const humanChoice = event.target.id;
            const computerChoice = getComputerChoice();

            // Play the round
            playRound(humanChoice, computerChoice);

            // After playing the round, update the scoreboard
            hScore.textContent = humanScore;
            cScore.textContent = computerScore;
        } else {
            // Prompt for restart
            textBox.textContent =
                "Please click on the Reset button to restart the game!";
        }
    });
});
