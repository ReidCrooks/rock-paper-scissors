
function getComputerChoice() {
    const random = Math.random();

    if (random < 0.333) {
        return 'rock';
    } else if (random < .666) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
function getHumanChoice() {
    let choice = prompt('Rock, Paper, or Scissors?')
    return choice
}

let userScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let normHumanChoice = String(humanChoice).toLowerCase();
    switch (normHumanChoice) {
        case "rock":
            if (computerChoice == 'rock') {
                console.log('You both chose rock. No one wins')
                break;
            } else if (computerChoice == 'scissors') {
                userScore++;
                console.log('Rock beats scissors. You win')
                break;
            } else {
                computerScore++;
                console.log('Paper beats rock. You lose')
                break;
            }
        case "paper": 
            if (computerChoice = 'rock') {
                userScore++;
                console.log('Paper beats rock. You win')
                break;
            } else if (computerChoice = 'scissors') {
                computerScore++;
                console.log('Scissors beats paper. You lose')
                break;
            } else {
                console.log('You both chose paper. No one wins')
                break;
            }
        case "scissors":
            if (computerChoice = 'rock') {
                computerScore++;
                console.log('Rock beats . You lose')
                break;
            } else if (computerChoice = 'scissors') {
                console.log('You both chose scissors. No one wins')
                break;
            } else {
                userScore++;
                console.log('Scissors beats paper. You win')
                break;
            }
    }
    return "Human: " + userScore; + "Computer: " + computerScore;
}

function playGame(num) {
    for (let i = 1; i <= num; i++) {
        let userChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(userChoice,computerChoice);
    }
    if (computerScore > userScore) {
        alert(`You lost the game by ${computerScore-userScore} rounds and finished with a total score of Computer score: ${computerScore}, User Score ${userScore}.`);
    }
    else if (computerScore < userScore) {
        alert(`You won the game by ${userScore-computerScore} rounds and finished with a total score of Computer score: ${computerScore}, User Score ${userScore}.`);
    }
    else {
        alert(`You tied the game and finished with a total score of Computer score: ${computerScore}, User Score ${userScore}.`);
    }
}
playGame(3);