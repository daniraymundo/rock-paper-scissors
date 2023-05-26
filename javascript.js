const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};