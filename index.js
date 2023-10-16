const buttons = document.querySelectorAll
('button');

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;

let computerScore = 0;

buttons.forEach((button) => { 
    button.addEventListener('click', () => {
       const result= playRound(button.id, computerPlay());
         resultEl.textContent = result;
    });
});

function computerPlay() {
    const choices = ["pierre", "feuille","ciseaux"];
    const randomChoice = Math.floor(Math.random()* choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Égalité!";
    } else if (
        (playerSelection === "pierre" && computerSelection === "ciseaux") ||
        (playerSelection === "feuille" && computerSelection === "pierre") ||
        (playerSelection === "ciseaux" && computerSelection === "feuille")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore
        return "L'ordinateur à choisi: " + computerSelection  + " vous avez gagné!";
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore
        return "L'ordinateur à choisi: " + computerSelection + " vous avez perdu!";
    }
    
}

