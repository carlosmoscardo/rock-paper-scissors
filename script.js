function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock".toLowerCase();
    } else if (computerChoice === 1) {
        return "Paper".toLowerCase();
    } return "Scissors".toLowerCase();
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } return "scissors";
}

let humanScore = 0;
let computerScore = 0;
