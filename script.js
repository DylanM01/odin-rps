let choices = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
};

let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK") {
        if (computerSelection == "ROCK") {
            console.log('It\'s a draw!')
        } else if (computerSelection == "PAPER") {
            console.log('Computer wins!');
            computerPoints++;
        } else {
            console.log('Player wins!')
            playerPoints++;
        }
    }

    if (playerSelection == "PAPER") {
        if (computerSelection == "PAPER") {
            console.log('It\'s a draw!')
        } else if (computerSelection == "SCISSORS") {
            console.log('Computer wins!')
            computerPoints++;
        } else {
            console.log('Player wins!')
            playerPoints++;
        }
    }

    if (playerSelection == "SCISSORS") {
        if (computerSelection == "SCISSORS") {
            console.log('It\'s a draw!')
        } else if (computerSelection == "ROCK") {
            console.log('Computer wins!')
            computerPoints++;
        } else {
            console.log('Player wins!')
            playerPoints++;
        }
    }
}


function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = playerChoice.toUpperCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();