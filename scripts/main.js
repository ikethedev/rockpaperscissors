let computerScore = 0;
let playerScore = 0;

// Helper functions that control score
function playerWins(){
    playerScore++
}

function computerWins(){
    computerScore++
}

function checkWinner(){
    if (playerScore === 3){
        console.log("player wins")
        return
    } else if (computerScore === 3) {
        console.log("computer wins")
        return
    }
}

function generateRandomNumber(){
    const num = Math.floor(Math.random() * 3);
    return num;
}


function getComputerSelection(){
    const choices = ['rock', 'paper', 'scissors'];
    let computerSelection = choices[generateRandomNumber()];
    return computerSelection;
}



function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    computerSelection = getComputerSelection();

    if(
        playerSelection === "rock" && computerSelection === "scissors"  ||
        playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        console.log("You win " + playerSelection + " beats " + computerSelection)
        playerWins()
    } else {
        console.log("You lose " + computerSelection + " beats " + playerSelection)
        computerWins()
    }

}

function playGame(){
    for(let i = 0; i <= 4; i++){
        playRound()
        checkWinner()
    }
}

playGame()

