const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const getHumanChoice = () => {

  let humanChoice = prompt("Rock, paper, or scissors?");

  if(humanChoice.toLowerCase() === 'rock') {
    return 'rock';
  } else if (humanChoice.toLowerCase() === 'paper') {
    return 'paper';
  } else if (humanChoice.toLowerCase() === 'scissors') {
    return 'scissors';
  } else {
    alert('Please enter a valid input');
    return getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;

const displayScore = () => {
  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);
}

const playRound = (humanChoice, computerChoice) => {
  if(humanChoice === computerChoice) {
    console.log('No points! You tied that round');
    displayScore();
  } else if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log('You lose! Paper beats Rock');
      computerScore++;
      displayScore();
    } else if (computerChoice === 'scissors') {
      console.log('You win! Rock beats Scissors');
      humanScore++;
      displayScore();
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === "scissors") {
      console.log('You lose! Scissors beats Paper');
      computerScore++;
      displayScore();
    } else if (computerChoice === 'rock') {
      console.log('You win! Paper beats Rock');
      humanScore++;
      displayScore();
    } 
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      console.log('You lose! Rock beats Scissors')
      computerScore++;
      displayScore();
    } else if (computerChoice === 'paper') {
      console.log('You win! Scissors beats Paper');
      humanScore++;
      displayScore();
    }
  }
}

const playGame = () => {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  if (humanScore < 5 || computerScore < 5) {
    playRound(humanSelection, computerSelection);
  } else {
    if (computerScore === 5) {
      console.log('Oh no! The computer won the game');
    } else if (humanScore === 5) {
      console.log('Let\'s go! You won the game');
    }
  }
}

for (let i = 1; i <= 5; i++) {
  console.log('Round ' + i + ":");
  playGame();
}

if(humanScore < computerScore) {
  console.log('Computer wins!');
} else if (humanScore > computerScore) {
  console.log('Player wins!');
} else {
  console.log('It\'s a draw!');
}