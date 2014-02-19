// JavaScript Document

// Simply game
// 'Rock, Paper, Scissors'
// add: Michalski Grzegorz

// User interaction. Choose one of three options
var userChoice = prompt("Hi. Please think and write. Do you choose rock, paper or scissors?");

// Set random variable
var computerChoice = Math.random();

// Conditionals
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

// This log showed choices
var choose = function (userChoice, computerChoice) {
    console.log("You select: " + userChoice + " // " + "Computer select: " + computerChoice);
};

// Function commpare
var compare = function (choice1, choice2) {
// Condition - if computer and user choices that the same options, then it's tie
        if (choice1 == choice2) {
            return "The result is a tie! Let's play again :)"; 
        }        
            if (choice1 == "rock") {
                if (choice2 == "scissors") {
                    return "rock wins";
                } else if (choice2 == "paper") {
                    return "paper wins";
                }
            }
            
            if (choice1 == "paper") {
                if (choice2 == "rock") {
                    return "paper wins";
                } else if (choice2 == "scissors") {
                    return "scissors wins";
                }
            }
            
            if (choice1 == "scissors") {
                if (choice2 == "rock") {
                    return "rock wins";
                } else if (choice2 == "paper") {
                    return "scissors wins";
                }
            }
// Condition - if user answered some other words, not rock, paper or scissors
            if (userChoice !== "rock" || userChoice !== "paper" || userChoice !== "scissors") {
        console.log("Do you know rules in this game?. Please select with only three options: rock, paper, scissors.");
            }
};

// Call functions
choose(userChoice, computerChoice);
compare(userChoice, computerChoice);
// compare(rock, rock);