function game() {
    // define choices
    const choices = ["Rock", "Paper", "Scissors"];

    // start the game with 0 as both scores
    let playerScore = 0;
    let computerScore = 0;

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

        // get computer's choice
        let computerSelection = getComputerChoice(choices);

        // play one round
        function playRound (playerSelection, computerSelection) {
            if (choices.includes(playerSelection)) {
                if (playerSelection === computerSelection) {
                    console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. It's a tie.`)
                } else if (playerSelection === "Rock") {
                    if (computerSelection === "Paper") {
                        console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Paper beats Rock.`)
                        return "computer";
                    } else {
                        console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Rock beats Scissors.`)
                        return "player";
                    };
                } else if (playerSelection === "Paper") {
                    if (computerSelection === "Rock") {
                        console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Paper beats Rock.`)
                        return "player";
                    } else {
                        console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Scissors beat Paper.`)
                        return "computer";
                    };
                } else if (playerSelection === "Scissors") {
                    if (computerSelection === "Rock") {
                        console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Rock beats Scissors.`)
                        return "computer";
                    } else {
                        console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}. Scissors beat Paper`)
                        return "player";
                    }
                };
            } else {
                return alert("Invalid choice")
            }
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
        console.log(`Your score: ${playerScore}. Computer's score ${computerScore}`);
    };

// display final result
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

game();

