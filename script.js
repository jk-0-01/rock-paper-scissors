let computerScore = 0;
let humanScore = 0;
let round = 0;

playGame();

function playGame() {
    // Welcome message
    console.log("Welcome to Rock-Paper-Scissors!\nYou get to play first!");
    alert("Welcome to Rock-Paper-Scissors!\nYou get to play first!")

    for (let i = 0; i < 5; i++) {
        round = i;
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

    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    if (humanChoice == computerChoice) {
        console.log(`Round ${round + 1}\nTie! ${humanChoice} vs ${computerChoice}`)
    } 

    // when player picks "rock"
    else if (humanChoice == rock && computerChoice == paper) {
        console.log(`Round ${round + 1}\nYou lose! paper beats rock.`);
        return ++computerScore;
    } else if (humanChoice == rock && computerChoice == scissors) {
        console.log(`Round ${round + 1}\nYou win! rock beats scissors.`);
        return ++humanScore;
    }   

    // when player picks "paper"
     else if (humanChoice == paper && computerChoice == rock) {
        console.log(`Round ${round + 1}\nYou win! paper beats rock.`);
        return ++humanScore;
    } else if (humanChoice == paper && computerChoice == scissors) {
        console.log(`Round ${round + 1}\nYou lose! scissors beats paper.`);
        return ++computerScore;
    }  

    // when player picks "scissors"
     else if (humanChoice == scissors && computerChoice == rock) {
        console.log(`Round ${round + 1}\nYou lose! rock beats scissors.`);
        return ++computerScore;
    } else if (humanChoice == scissors && computerChoice == paper) {
        console.log(`Round ${round + 1}\nYou win! scissors beats paper.`);
        return ++humanScore;
    }
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return choice == 0 ? "rock" : choice == 1 ? "paper" : "scissors";
}

function getHumanChoice(humanChoice) {
    humanChoice = prompt(`Round ${round + 1}\n\n\"rock\", \"paper\", \"scissors\"\nWhat's your pick?`);
    return humanChoice;
}