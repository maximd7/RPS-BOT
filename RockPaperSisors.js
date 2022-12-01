// This bot would play a game of rock, paper, scissors against you.
// It would also keep track of the score and tell you who won the game.
// Game made by Maxim D
// Date: 12/01/2022


// create list of options
var options = ["rock", "paper", "scissors"];
// randomly choose an option
var computerChoice = options[Math.floor(Math.random() * options.length)];
// ask user for their choice
var userChoice = prompt("Do you choose rock, paper or scissors?");
// compare user's choice to computer's choice
if (userChoice === computerChoice) {
    alert("The result is a tie!");
}
else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
        alert("rock wins");
    }
    else {
        alert("paper wins");
    }
}
else if (userChoice === "paper") {
    if (computerChoice === "rock") {
        alert("paper wins");
    }
    else {
        alert("scissors wins");
    }
}
else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
        alert("rock wins");
    }
    else {
        alert("scissors wins");
    }
}
else {
    alert("Invalid choice");
}

// If There's any bug in the code, please let me know in the comments. Thanks!