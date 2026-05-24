let computerScore = 0;
let humanScore = 0;

playGame();

function playGame() {
    // Welcome message
    console.log("Welcome to Rock-Paper-Scissors!\nYou get to play first!\nChoose: \"rock\", \"paper\", or \"scissors\"?");
    
    for (let i = 0; i < 5; i++) {
        alert(`Round ${i + 1}`)
        console.log(`Round ${i + 1}`)
        playRound(getHumanChoice(), getComputerChoice());
    }

    determineWinner();
}

function determineWinner() {
    let finalScores = `You: ${humanScore} | Computer: ${computerScore}`;
    if (humanScore > computerScore) {
        console.log(`${finalScores}\nYou won the game!`);
    } else if (humanScore < computerScore) {
        console.log(`${finalScores}\nComputer wins!`);
    } else {
        console.log(`${finalScores}\nIt's a tie!`);
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log(`Tie! ${humanChoice} vs ${computerChoice}`)
    }   // for when player picks "rock"
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock.");
        return ++computerScore;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.");
        return ++humanScore;
    }   // for when player picks "paper"
     else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock.");
        return ++humanScore;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper.");
        return ++computerScore;
    }   // for when player picks "scissors"
     else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors.");
        return ++computerScore;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper.");
        return ++humanScore;
    }
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return choice == 0 ? "rock" : choice == 1 ? "paper" : "scissors";
}

function getHumanChoice(humanChoice) {
    humanChoice = prompt("\"rock\", \"paper\", \"scissors\"\nWhat's your pick?");
    return humanChoice;
}