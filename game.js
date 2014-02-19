// JavaScript Document

// Simply game
// 'Rock, Paper, Scissors'
// add: Michalski Grzegorz

// User interaction. Choose one of three options.
var userChoice = prompt("Do you choose rock, paper or scissors?");

// Set random variable
var computerChoice = Math.random();

// conditionals
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

// komunikat dotyczacy wyboru, co wybral user i co wybrala maszyna
var choose = function (userChoice, computerChoice) {
    console.log("You select: " + userChoice + " // " + "Computer select: " + computerChoice);
};

// funkcja porownawcza
var compare = function (choice1, choice2) {
// warunek - jezeli maszyna i user wybiora to samo, to remis        
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
// warunek - jezeli user wpisze cos innego niz papier, kamien, nozyczki            
            if (userChoice !== "rock" || userChoice !== "paper" || userChoice !== "scissors") {
        console.log("Do you know rules in this game?. Please select with only three options: rock, paper, scissors.");
            }
};

// wywolania funckji
choose(userChoice, computerChoice);
compare(userChoice, computerChoice);
// compare(rock, rock);