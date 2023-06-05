function game() {
    const choices = ["Rock", "Paper", "Scissors"];

    let playerScore = 0;
    let computerScore = 0;

    // // A flag variable is used to track if the game was terminated prematurely due to an invalid user input
    // let gameTerminated = false;

    const rockButton = document.querySelector("#choice-rock");
    const paperButton = document.querySelector("#choice-paper");
    const scissorsButton = document.querySelector("#choice-scissors");
    const playerSelection = document.querySelector("#player-selection");
    const computerSelection = document.querySelector("#computer-selection");

    function getComputerChoice(choices) {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    rockButton.addEventListener("click", () => {
        displayPlayerSelection("rock");
        displayComputerSelection(getComputerChoice(choices));
    });

    paperButton.addEventListener("click", () => {
        displayPlayerSelection("paper");
        displayComputerSelection(getComputerChoice(choices));
    });

    scissorsButton.addEventListener("click", () => {
        displayPlayerSelection("scissors");
        displayComputerSelection(getComputerChoice(choices));
    });

    function displayPlayerSelection(choice) {
        if (choice === "rock") {
            playerSelection.src ="rps-images/player-rock.png";
        } else if (choice === "paper") {
            playerSelection.src ="rps-images/player-paper.png";
        } else {
            playerSelection.src ="rps-images/player-scissors.png";
        }
    };

    function displayComputerSelection(choice) {
        if (getComputerChoice(choices) === "Rock") {
            computerSelection.src ="rps-images/comp-rock.png";
        } else if (getComputerChoice(choices) === "Paper") {
            computerSelection.src ="rps-images/comp-paper.png";
        } else {
            computerSelection.src ="rps-images/comp-scissors.png";
        }
    };
    
};
//     for (let round = 1; round <=5; round++) {

        
//         console.log(`Round ${round}`);

        
       
        
//         let playerInput = prompt("Up for a game of Rock Paper Scissors? Enter your choice.");
//         let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

        
//         if (!choices.includes(playerSelection)) {
//             console.log("Invalid choice. Exiting the game. Refresh to start a new one.")
//             gameTerminated = true;
//             break;
//         };

        
        

        
//         function playRound (playerSelection, computerSelection) {
//             if (playerSelection === computerSelection) {
//                 console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. It's a tie.`)
//             } else if (
//                 (playerSelection === "Rock") && (computerSelection === "Scissors") ||
//                 (playerSelection === "Paper") && (computerSelection === "Rock") ||
//                 (playerSelection === "Scissors") && (computerSelection === "Paper")
//             ) {
//                 console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. You get a point.`)
//                 return "player";
//             } else {
//                 console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Computer gets a point.`)
//                 return "computer";
//             };
//         };
        
//         let result = playRound(playerSelection, computerSelection);

        
//         if (result === "player") {
//             playerScore++;
//         } else if (result === "computer") {
//             computerScore++;
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

game();