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

function playGame() {
    function playRound(humanChoiceRound, computerChoiceRound) {
        if (humanChoiceRound === computerChoiceRound) {
            humanScore += 0;
            computerScore += 0;
            console.log("Tie!");
            console.log("YOU chose " + humanChoiceRound + ", and COMPUTER chose " + computerChoiceRound + "!");
        } else if (humanChoiceRound === "rock" && computerChoiceRound === "paper"
            || humanChoiceRound === "paper" && computerChoiceRound === "scissors"
            || humanChoiceRound === "scissors" && computerChoiceRound === "rock"
        ) {
            humanScore += 0;
            computerScore += 1;
            console.log("You lose!");
            console.log("YOU chose " + humanChoiceRound + ", and COMPUTER chose " + computerChoiceRound + "!");
        } else {
            humanScore += 1;
            computerScore += 0;
            console.log("You win!");
            console.log("YOU chose " + humanChoiceRound + ", and COMPUTER chose " + computerChoiceRound + "!");
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();

console.log("The final scores are:")
console.log("You: " + humanScore);
console.log("Computer: " + computerScore);

if (humanScore === computerScore) {
    console.log("Tie!")
} else if (humanScore < computerScore) {
    console.log("You lose, try again!")
} else {
    console.log("You won, congratulations!")
}
