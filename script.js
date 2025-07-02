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

