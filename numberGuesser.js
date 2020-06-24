let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = number => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, target) => {
    if (Math.abs(userGuess - target) < Math.abs(computerGuess - target)) {
        return true;
    } else if (Math.abs(computerGuess - target) < Math.abs(userGuess - target)) {
        return false;
    } else {
        return true;
    }
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};