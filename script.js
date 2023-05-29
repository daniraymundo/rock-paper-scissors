function game() {
    // define choices
    const choices = ["Rock", "Paper", "Scissors"];

    // start the game with 0 as both scores
    let playerScore = 0;
    let computerScore = 0;

    // flag variable to track game termination due to an invalid inpit
    let gameTerminated = false;

    // loop 5 rounds
    for (let round = 1; round <=5; round++) {

        // show current round
        console.log(`Round ${round}`);

        // computer generates a random choice each time
        function getComputerChoice(choices) {
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        };

        // ask the player for their choice, fix case to allow player's input to be case insensitive
        let playerInput = prompt("Up for a game of Rock Paper Scissors? Enter your choice.");
        let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

        // validate player's choice
        if (!choices.includes(playerSelection)) {
            console.log("Invalid choice. Exiting the game. Refresh to start a new one.")
            gameTerminated = true;
            break;
        };

        // get computer's choice
        let computerSelection = getComputerChoice(choices);

        // play one round
        function playRound (playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. It's a tie.`)
            } else if (
                (playerSelection === "Rock") && (computerSelection === "Scissors") ||
                (playerSelection === "Paper") && (computerSelection === "Rock") ||
                (playerSelection === "Scissors") && (computerSelection === "Paper")
            ) {
                console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. You get a point.`)
                return "player";
            } else {
                console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Computer gets a point.`)
                return "computer";
            };
        };
        // get the result of a round
        let result = playRound(playerSelection, computerSelection);

        // give a point to player if player wins, give a point to computer if computer wins
        if (result === "player") {
            playerScore++;
        } else if (result === "computer") {
            computerScore++;
        };

        // show current score after each round
        console.log(`Your score: ${playerScore}.\nComputer's score: ${computerScore}`);

    };

// only display final result if 5 rounds were completed
    if (!gameTerminated) {
        if (playerScore > computerScore) {
            alert("Game over. You win!");
            alert("Refresh to play another one.");
        } else if (playerScore < computerScore) {
            alert("Game over. You lose.")
            alert("Refresh to play another one.");
        } else {
            alert("Game over. It's a tie.")
            alert("Refresh to play another one.");
        }
    };
};

game();