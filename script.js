function game() {
    const choices = ["Rock", "Paper", "Scissors"];

    let playerScore = 0;
    let computerScore = 0;

    let playerChoice;
    let computerChoice;

    const rockButton = document.querySelector("#choice-rock");
    const paperButton = document.querySelector("#choice-paper");
    const scissorsButton = document.querySelector("#choice-scissors");
    const playerSelection = document.querySelector("#player-selection");
    const computerSelection = document.querySelector("#computer-selection");
    const playerScoreElement = document.querySelector("#player-score");
    const computerScoreElement = document.querySelector("#computer-score");
    const roundResult = document.querySelector("#result-text");
    const modal = document.querySelector("#modal");
    const finalResult = document.querySelector("#final-result");


    function getComputerChoice(choices) {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    function displayPlayerSelection(playerChoice) {
        if (playerChoice === "Rock") {
            playerSelection.src ="rps-images/player-rock.png";
        } else if (playerChoice === "Paper") {
            playerSelection.src ="rps-images/player-paper.png";
        } else {
            playerSelection.src ="rps-images/player-scissors.png";
        }
    };

    function displayComputerSelection(computerChoice) {
        if (computerChoice === "Rock") {
            computerSelection.src ="rps-images/comp-rock.png";
        } else if (computerChoice === "Paper") {
            computerSelection.src ="rps-images/comp-paper.png";
        } else {
            computerSelection.src ="rps-images/comp-scissors.png";
        };
    };

    function playRound (playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            console.log(`You chose ${playerChoice}. Computer chose ${computerChoice}. It's a tie.`)
        } else if (
            (playerChoice === "Rock") && (computerChoice === "Scissors") ||
            (playerChoice === "Paper") && (computerChoice === "Rock") ||
            (playerChoice === "Scissors") && (computerChoice === "Paper")
        ) {
            console.log(`You chose ${playerChoice}. Computer chose ${computerChoice}. You get a point.`)
            return "player";
        } else {
            console.log(`You chose ${playerChoice}. Computer chose ${computerChoice}. Computer gets a point.`)
            return "computer";
        };
    };

    function updateScores(result) {
        if (result === "player") {
            playerScore++;
            roundResult.textContent = "You get a point!";
        } else if (result === "computer") {
            computerScore++;
            roundResult.textContent = "Computer gets a point!";
        } else {
            roundResult.textContent = "It's a tie!";
        }
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    };
        
    function handleButtonClick(playerChoice) {
        const computerChoice = getComputerChoice(choices);
        displayPlayerSelection(playerChoice);
        displayComputerSelection(computerChoice);
        const result = playRound(playerChoice,computerChoice);
        updateScores(result);
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore) {
                finalResult.textContent = "You win!"
            } else {
                finalResult.textContent = "You lose."
            }
            modal.classList.add("show");
        }
    };

    rockButton.addEventListener("click", () => {
        handleButtonClick("Rock")
    });

    paperButton.addEventListener("click", () => {
        handleButtonClick("Paper")
    });

    scissorsButton.addEventListener("click", () => {
        handleButtonClick("Scissors")
    });

    
};
game();

//     for (let round = 1; round <=5; round++) {

        
//         console.log(`Round ${round}`);

        
       
        
//         let playerInput = prompt("Up for a game of Rock Paper Scissors? Enter your choice.");
//         let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

        
//         if (!choices.includes(playerSelection)) {
//             console.log("Invalid choice. Exiting the game. Refresh to start a new one.")
//             gameTerminated = true;
//             break;
//         };

        
        

        
       
        


        
//         console.log(`Your score: ${playerScore}.\nComputer's score: ${computerScore}`);

//     };

//     // The final result is only displayed when all 5 rounds have been completed, i.e, the game wasn't stopped due to an invalid user input.
//     if (!gameTerminated) {
//         if (playerScore > computerScore) {
//             alert("Game over. You win!");
//             alert("Refresh to play another one.");
//         } else if (playerScore < computerScore) {
//             alert("Game over. You lose.")
//             alert("Refresh to play another one.");
//         } else {
//             alert("Game over. It's a tie.")
//             alert("Refresh to play another one.");
//         }
//     };
// };


