let computerScore = 0;
let playerScore = 0;
const gameScore = 5
const btnDiv = document.querySelector(".game_buttons")
const announceWinnerSection = document.querySelector(".announce_winner")

// Helper functions that control score
function playerWins(){
    if(playerScore === gameScore){
        announceWinnerSection.classList.toggle('none')
        announceWinner()
        return
    }

    playerScore++
}

function computerWins(){
    if(computerScore === gameScore){
        announceWinnerSection.classList.toggle('none')
        announceWinner()
        return
    }
    computerScore++
}


function checkWinner(winner){
    if (playerScore === gameScore){
        winner = "player wins"
        announceWinner(winner)
        return
    } else if (computerScore === gameScore) {
        winner = "computer wins"
        announceWinner(winner)
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

// updates player selection and runs play round
function handlePlayerSelection(e){
    //selection grabs the text content from the button clicked
    let selection = e.target.textContent.toLowerCase()
    playRound(selection)
}

// Announcing the winner
function announceWinner(winner){
    const header = document.createElement('h1')
    const headerText = document.createTextNode("Game Over")
    const text = document.createElement('p')
    const winningText = document.createTextNode("We have a winner!" + " The " + winner )
    const playAgainButton = document.createElement("button")
    const buttonText = document.createTextNode("Play Again")

    if(announceWinnerSection.childNodes.length > 0){
        return
    }

    header.appendChild(headerText)
    text.appendChild(winningText)
    playAgainButton.appendChild(buttonText)

    announceWinnerSection.appendChild(header)
    announceWinnerSection.appendChild(text)
    announceWinnerSection.appendChild(playAgainButton)


}



function playRound(playerSelection, computerSelection){
    playerSelection
    computerSelection = getComputerSelection();

    if(
        playerSelection === "rock" && computerSelection === "scissors"  ||
        playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        console.log("You win " + playerSelection + " beats " + computerSelection)
        playerWins()
        document.querySelector(".player_score").textContent = playerScore
    } else {
        console.log("You lose " + computerSelection + " beats " + playerSelection)
        computerWins()
        document.querySelector(".computer_score").textContent = computerScore
    }

   checkWinner()
}


// playGame()

// Game Reset

function resetGame(){
    computerScore = 0
    playerScore = 0
    document.querySelector(".player_score").textContent = playerScore
    document.querySelector(".computer_score").textContent = computerScore
}

announceWinnerSection.addEventListener("click", (e) => {
    if(e.target.textContent === "Play Again"){
        announceWinnerSection.classList.toggle("none")
        resetGame()
    }
})

btnDiv.addEventListener("click", handlePlayerSelection)


console.log(announceWinnerSection.childNodes.length)