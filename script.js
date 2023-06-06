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
    const playerScoreElement = document.querySelector(".player-score");
    const computerScoreElement = document.querySelector(".computer-score");
    const roundResult = document.querySelector(".result-text");
    const modal = document.querySelector("#modal");
    const modalOverlay = document.querySelector("#modal-overlay");
    const finalResult = document.querySelector("#final-result");
    const playAgain = document.querySelector("#play-again-button");
    const playerContainer = document.querySelector(".player-container");
    const computerContainer = document.querySelector(".computer-container");


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

        // resets the player selection after every turn
        setTimeout(() => {
            playerSelection.src ="rps-images/blank-placeholder.png";
        }, 1200);
    };

    function displayComputerSelection(computerChoice) {
        if (computerChoice === "Rock") {
            computerSelection.src ="rps-images/comp-rock.png";
        } else if (computerChoice === "Paper") {
            computerSelection.src ="rps-images/comp-paper.png";
        } else {
            computerSelection.src ="rps-images/comp-scissors.png";
        }

        // resets the computer selection after every turn
        setTimeout(() => {
            computerSelection.src ="rps-images/blank-placeholder.png";
        }, 1200);
    };

    function playRound (playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return;
        } else if (
            (playerChoice === "Rock") && (computerChoice === "Scissors") ||
            (playerChoice === "Paper") && (computerChoice === "Rock") ||
            (playerChoice === "Scissors") && (computerChoice === "Paper")
        ) {
            return "player";
        } else {
            return "computer";
        };
    };

    function updateScores(result) {
        if (result === "player") {
            playerScore++;
            roundResult.textContent = "You get a point!";
            // changes the text content to a non-breaking space
            // so that the div holds its height even when empty during the transition effect
            setTimeout (() => {
                roundResult.textContent = "\u00A0";
            }, 1200);
            playerContainer.classList.add("win");
            setTimeout (() => {
                playerContainer.classList.remove("win");
            }, 1200);
        } else if (result === "computer") {
            computerScore++;
            roundResult.textContent = "Computer gets a point!";
            setTimeout (() => {
                roundResult.textContent = "\u00A0";
            }, 1200);
            computerContainer.classList.add("win");
            setTimeout (() => {
                computerContainer.classList.remove("win");
            }, 1200);
        } else {
            roundResult.textContent = "It's a tie!";
            setTimeout (() => {
                roundResult.textContent = "\u00A0";
            }, 1200);
        }
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    };

    function showModal() {
        modal.classList.add("show");
        modalOverlay.classList.add("show");
    };

    function hideModal() {
        modal.classList.remove("show");
        modalOverlay.classList.remove("show");
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
            showModal();
        }
    };

    rockButton.addEventListener("click", (event) => {        
        if (modal.classList.contains("show")) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        handleButtonClick("Rock")
    });

    paperButton.addEventListener("click", (event) => {
        if (modal.classList.contains("show")) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        handleButtonClick("Paper")
    });

    scissorsButton.addEventListener("click", (event) => {
        if (modal.classList.contains("show")) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        handleButtonClick("Scissors")
    });

    function restartGame() {
        playerScoreElement.textContent = 0;
        computerScoreElement.textContent = 0;
        playerScore = 0;
        computerScore = 0;
        playerSelection.src = "rps-images/blank-placeholder.png";
        computerSelection.src = "rps-images/blank-placeholder.png";
        hideModal();
    };

    
    playAgain.addEventListener("click",restartGame);
    
};
game();