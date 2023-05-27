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

// start the game with 0 as both scores
let playerScore = 0;
let computerScore = 0;

// play one round
function playRound (playerSelection, computerSelection) {
    if (choices.includes(playerSelection)) {
        if (playerSelection === computerSelection) {
            console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. It's a tie.`)
            console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`)
        } else if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Paper beats Rock.`)
                console.log(`Your score: ${playerScore} . Computer score: ${computerScore}`)
                return "computer";
            } else {
                console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Rock beats Scissors.`)
                console.log(`Your score: ${playerScore} . Computer score: ${computerScore}`)
                return "player";
            };
        } else if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Paper beats Rock.`)
                console.log(`Your score: ${playerScore} . Computer score: ${computerScore}`)
                return "player";
            } else {
                console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Scissors beat Paper.`)
                console.log(`Your score: ${playerScore} . Computer score: ${computerScore}`)
                return "computer";
            };
        } else if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
                console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Rock beats Scissors.`)
                console.log(`Your score: ${playerScore} . Computer score: ${computerScore}`)
                return "computer";
            } else {
                console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Scissors beat Paper`)
                console.log(`Your score: ${playerScore} . Computer score: ${computerScore}`)
                return "player";
            }
        };
    } else {
        return alert("Invalid choice")
    }
};

playRound(playerSelection, computerSelection);
