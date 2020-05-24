let userScore = 0;
let computerScore = 0;
const userCounter = document.getElementById("user-score");
const computerCounter = document.getElementById("computer-score");
const winner = document.getElementById("result");
const playerRock = document.getElementById("lrock");
const playerPaper = document.getElementById("lpaper");
const playerScissors = document.getElementById("lscissors");




// Automated Computer Choice

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * Math.floor(choices.length))]
}


function win() {
    console.log("Yay! You win!!");
    userScore++
    userCounter.innerHTML = userScore;
}

function draw() {
    console.log("it's a draw!");
}

function lose() {
    console.log("Sorry, you lose....");
    computerScore++
    computerCounter.innerHTML = computerScore;

}



function game(playerWeapon) {
const computerWeapon = computerPlay();
console.log("Computer chooses: " + computerWeapon);
console.log("You choose: " + playerWeapon)

if ((playerWeapon == 'rock' && computerWeapon === 'scissors') || (playerWeapon == 'paper' && computerWeapon === 'rock') || (playerWeapon == 'scissors' && computerWeapon === 'paper')) {
    win();
}

else if ((playerWeapon == 'rock' && computerWeapon === 'paper') || (playerWeapon == 'paper' && computerWeapon === 'scissors') || (playerWeapon == 'scissors' && computerWeapon === 'rock')) {
    lose();
}

else {
    draw();
}

}


function main() {
    playerRock.addEventListener('click', function () {
        game('rock');
    })

    playerPaper.addEventListener('click', function () {
        game('paper');
    })

    playerScissors.addEventListener('click', function () {
        game('scissors');
    })
    
}







main();












/*const playerRock = document.querySelector("lrock");
const playerPaper = document.querySelector("lpaper");
const playerScissors = document.querySelector("lscissors");
const playerSelect = document.getElementsByClassName("l-img-div");




playerRock.onclick = function rockSelect(playerWeapon) {
    return 'rock';
    console.log(playerWeapon)
}

playerPaper.onclick = function paperSelect(playerWeapon) {
    return 'paper';
}

playerScissors.onclick = function scissorsSelect(playerWeapon) {
    return 'scissors';
}

console.log(playerWeapon);



// Automated Computer Choice
const choices = ["rock", "paper", "scissors"]
function computerPlay() {
    return choices[Math.floor(Math.random() * Math.floor(choices.length))]
}


//Testing scissors vs random selection
//const playerSelection = prompt("Rock, Paper or Scissors?", "").toLowerCase();
const computerSelection = computerPlay();


// Single Round
/*function playRound(playerSelection, computerSelection) {

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
alert(playRound(playerSelection, computerSelection));*/
