function getComputerChoices() {
   const choice = ['rock', 'paper', 'scissors'];
   return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log("You both chose the same. It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Rock beats Scissors, you win!");
        playerScore ++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Paper beats Rock, you win!");
        playerScore ++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Scissors beats Paper, you win!");
        playerScore ++;
    } else {
        console.log(`${computerSelection} beats ${playerSelection}, you lose!`)
        computerScore ++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose between Rock, Paper or Scissors: ").toLowerCase();
        const computerSelection = getComputerChoices();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player:${playerScore}, Computer:${computerScore}`)
    }
}

let playerScore = 0;
let computerScore = 0;
game();

