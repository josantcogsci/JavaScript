const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!');
    }
};

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It is a tie!";
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return "You lose!";
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return "You won!";
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return "You won!";
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return "You lose!";
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return "You lose!";
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return "You won!";
    }
};

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
