function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase().trim();
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    } else {
        alert("Invalid choice, please enter Rock, Paper, or Scissors");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoiceRound, computerChoiceRound) {
    if (humanChoiceRound === computerChoiceRound) {
        humanScore += 0;
        computerScore += 0;
        console.log("Tie!");
    } else if (humanChoiceRound === "rock" && computerChoiceRound === "paper"
        || humanChoiceRound === "paper" && computerChoiceRound === "scissors"
        || humanChoiceRound === "scissors" && computerChoiceRound === "rock"
    ) {
        humanScore += 0;
        computerScore += 1;
        console.log("You lose!");
    } else {
        humanScore += 1;
        computerScore += 0;
        console.log("You win!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
