

var wins = 0;
var loses = 0;
var guessesLeft = 9;
var emptyString = [];
var computerChoice = "abcdefghijklmnopqrstuvwxyz";
var computerGuess;


function startGame() {
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log("computer guess is:" + computerGuess);

    document.onkeyup = function (event) {
        var userChoice = event.key;

        console.log(computerGuess);
        if (userChoice === computerGuess) {
            wins++;
            guessesLeft = 9;
            emptyString = [];
            computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            console.log("computer guess is:" + computerGuess);


        } else if (guessesLeft === 0) {
            loses++;
            guessesLeft = 9;
            emptyString = [];
            computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            console.log("computer guess is:" + computerGuess);
        }
        else {
            emptyString.push(userChoice);
            guessesLeft--;
        }
        var html1 =
            "<strong><p>Wins: " + wins + "</p>" +
            "<p>Loses: " + loses + "</p>" +
            "<p>Guesses left :" + guessesLeft + "</p>" +
            "<p>Your guesses so far :" + emptyString + "</p></strong>";


        document.querySelector("#new").innerHTML = html1;

    };
}

startGame();

