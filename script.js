const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const div = document.getElementById('div');

div.innerText = 'Select one of the options to start the game';
rockBtn.innerText = "Choose Rock";
paperBtn.innerText = "Choose Paper";
scissorsBtn.innerText = "Choose Scissors";

const playAgainBtn = document.createElement('button');
playAgainBtn.innerText = 'Play Again'
playAgainBtn.style.display = 'none';
document.body.appendChild(playAgainBtn);

let humanChoice;

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let choices = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * 3);
  
  console.log(choices[randomNumber]);
  return choices[randomNumber];
}

const playRound = (humanChoice, computerChoice) => {
  if(humanChoice === computerChoice) {
    div.innerText = `No points! You tied that round \n Human: ${humanScore} \n Computer: ${computerScore}`
  } else if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      div.innerText = `You lose! Paper beats Rock \n Human: ${humanScore} \n Computer: ${computerScore}`
    } else if (computerChoice === 'scissors') {
      humanScore++;
      div.innerText = `You win! Rock beats Scissors \n Human: ${humanScore} \n Computer: ${computerScore}`
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === "scissors") {
      computerScore++;
      div.innerText = `You lose! Scissors beats Paper \n Human: ${humanScore} \n Computer: ${computerScore}`
    } else if (computerChoice === 'rock') {
      humanScore++;
      div.innerText = `You win! Paper beats Rock \n Human: ${humanScore} \n Computer: ${computerScore}`
    } 
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      div.innerText = `You lose! Rock beats Scissors \n Human: ${humanScore} \n Computer: ${computerScore}`
    } else if (computerChoice === 'paper') {
      humanScore++;
      div.innerText = `You win! Scissors beats Paper \n Human: ${humanScore} \n Computer: ${computerScore}`
    }
  }
}

const playGame = () => {
  const humanSelection = humanChoice;
  const computerSelection = getComputerChoice();

  if (humanScore >= 5 || computerScore >= 5) {
    console.log('Refresh to try again');
    return;
  }
  
  playRound(humanSelection, computerSelection);
  
  if (humanScore === 5 || computerScore === 5) {
    if (computerScore === 5) {
      div.innerText = `Oh no! The computer won the game. Click the button below to try again \n Final Score: \n Human - ${humanScore} Computer - ${computerScore}`;
      hideButtons();
    } else if (humanScore === 5) {
      div.innerText = `Let\'s go! You won the game. Click the button below to play again \n Final Score: \n Human - ${humanScore} Computer - ${computerScore}`;
      hideButtons();
    }
  }
}

const hideButtons = () => {
  rockBtn.style.display = 'none';
  paperBtn.style.display = 'none';
  scissorsBtn.style.display = 'none';
  playAgainBtn.style.display = 'block';
}

const reset = () => {
  rockBtn.style.display = 'inline';
  paperBtn.style.display = 'inline';
  scissorsBtn.style.display = 'inline';
  playAgainBtn.style.display = 'none';
  humanScore = 0;
  computerScore = 0;
  div.innerText = 'Select one of the options to start the game';
}

rockBtn.addEventListener('click', () => {
  humanChoice = 'rock';
  playGame();
})

paperBtn.addEventListener('click', () => {
  humanChoice = 'paper';
  playGame();
})

scissorsBtn.addEventListener('click', () => {
  humanChoice = 'scissors';
  playGame();
})

playAgainBtn.addEventListener('click', reset);
