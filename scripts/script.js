
// Automated Computer Choice
const choices = ["rock", "paper", "scissors"]
function computerPlay() {
    return choices[Math.floor(Math.random() * Math.floor(choices.length))]
}


//Testing scissors vs random selection
//const playerSelection = prompt("Rock, Paper or Scissors?", "").toLowerCase();
const computerSelection = computerPlay();


// Single Round
function playRound(playerSelection, computerSelection) {

    if ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors')) {
        return playerSelection + " isn't in the rules!! DISQUALIFIED"
    }

    else if ((playerSelection == 'rock' && computerSelection === 'scissors') || (playerSelection == 'paper' && computerSelection === 'rock') || (playerSelection == 'scissors' && computerSelection === 'paper')) {
        return "Yay! You win!!";
    }

    else if ((playerSelection == 'rock' && computerSelection === 'paper') || (playerSelection == 'paper' && computerSelection === 'scissors') || (playerSelection == 'scissors' && computerSelection === 'rock')) {
        return "Sorry, you lose....";
    }

    else {
        return "it's a draw!";
    }
}

playRound();

// Display player / computer / result in console
console.log("Player chooses: " + playerSelection);
console.log("Computer chooses: " + computerSelection);
alert("Computer chooses " + computerSelection + "...")
alert(playRound(playerSelection, computerSelection));