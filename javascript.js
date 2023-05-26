// define choices
const choices = ["Rock", "Paper", "Scissors"];

// computer generates a random choice each time
function getComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// ask the player for their choice, fix case to allow player's input to be case insensitive
let playerInput = prompt("Up for a game of Rock Paper Scissors? Enter your choice.");
let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

// get computer's choice
let computerSelection = getComputerChoice(choices);

// play 1 round
function playRound (playerSelection, computerSelection) {
    if (choices.includes(playerSelection)) {
        if (playerSelection === computerSelection) {
            return alert(`You chose ${playerSelection}, Computer chose ${computerSelection}. It's a tie!`);
        } else if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                return alert(`You chose ${playerSelection}, Computer chose ${computerSelection}. Paper beats rock. You lose.`);
            } else {
                return alert(`You chose ${playerSelection}, Computer chose ${computerSelection}. Rock beats scissors. You win!`); 
            };
        } else if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                return alert(`You chose ${playerSelection}, Computer chose ${computerSelection}. Paper beats rock. You win!`);
            } else {
                return alert(`You chose ${playerSelection}, Computer chose ${computerSelection}. Scissors beat paper. You lose.`);
            };
        } else if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
                return alert(`You chose ${playerSelection}, Computer chose ${computerSelection}. Roch beats scissors. You lose.`);
            } else {
                return alert(`You chose ${playerSelection}, Computer chose ${computerSelection}. Scissors beat paper. You win!`);
            }
        };
    } else {
        return alert("Invalid choice")
    }
};

playRound(playerSelection, computerSelection);
