let userScore = 0;
let computerScore = 0;
const userCounter = document.getElementById("user-score");
const computerCounter = document.getElementById("computer-score");
const playerRock = document.getElementById("lrock");
const playerPaper = document.getElementById("lpaper");
const playerScissors = document.getElementById("lscissors");
const playerRockImg = document.getElementById("left-rock");
const playerPaperImg = document.getElementById("left-paper");
const playerScissorsImg = document.getElementById("left-scissors");
const compRockImg = document.getElementById("right-rock");
const compPaperImg = document.getElementById("right-paper");
const compScissorsImg = document.getElementById("right-scissors");
const scoreboard = document.getElementById("result");
let playerChoice = play();
let computerChoice = '';
let winner = '';




// Player Selection-----------------------
function play() {
    playerRock.addEventListener('click', function () {
        game('rock');
        playerChoice = "Rock";
        playerRockImg.style.right = "0px"
        playerPaperImg.style.right = "50%"
        playerScissorsImg.style.right = "50%"
    })

    playerPaper.addEventListener('click', function () {
        game('paper');
        playerChoice = "Paper";
        playerRockImg.style.right = "50%"
        playerPaperImg.style.right = "0px"
        playerScissorsImg.style.right = "50%"
    })

    playerScissors.addEventListener('click', function () {
        game('scissors');
        playerChoice = "Scissors";
        playerRockImg.style.right = "50%"
        playerPaperImg.style.right = "50%"
        playerScissorsImg.style.right = "0px"
    })

}

play();




// Computer Selection---------------------

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    computerSelect = choices[Math.floor(Math.random() * Math.floor(choices.length))]

    if (computerSelect === 'rock') {
        compRockImg.style.left = "0px"
        compPaperImg.style.left = "200px"
        compScissorsImg.style.left = "200px"
        computerChoice = computerSelect;
    }

    if (computerSelect === 'paper') {
        compRockImg.style.left = "200px"
        compPaperImg.style.left = "0px"
        compScissorsImg.style.left = "200px"
        computerChoice = computerSelect;
    }

    if (computerSelect === 'scissors') {
        compRockImg.style.left = "200px"
        compPaperImg.style.left = "200px"
        compScissorsImg.style.left = "0px"
        computerChoice = computerSelect;
    }

    return computerSelect;
}





// Determining who wins ----------------

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


// Updating Scoreboard with winner --------------------

function win() {
    winner = "Yay! You win!!";
    userScore++
    userCounter.innerHTML = userScore;
    scoreboard.innerHTML = playerChoice + " vs " + computerChoice + ": " + winner;
}

function draw() {
    winner = "it's a draw!";
    scoreboard.innerHTML = playerChoice + " vs " + computerChoice + ": " + winner;
}

function lose() {
    winner = "Sorry, you lose....";
    computerScore++
    computerCounter.innerHTML = computerScore;
    scoreboard.innerHTML = playerChoice + " vs " + computerChoice + ": " + winner;
}