let computerScore = 0;
let humanScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log(`Tie! ${humanChoice} vs ${computerChoice}`)
    }   // for when player picks "rock"
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock.");
        return ++computerChoice;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.");
        return ++humanChoice;
    }   // for when player picks "paper"
     else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock.");
        return ++humanChoice;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper.");
        return ++computerChoice;
    }   // for when player picks "scissors"
     else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors.");
        return ++computerChoice;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper.");
        return ++humanChoice;
    }
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(humanChoice) {
    humanChoice = prompt("Your pick: ");
    return humanChoice;
}