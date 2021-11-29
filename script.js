let randomStrings = ["rock", "paper", "scissors"];

computerPlay = () => {
  return randomStrings[Math.floor(Math.random() * randomStrings.length)];
};
playerPlay = () => {
  return randomStrings[Math.floor(Math.random() * randomStrings.length)];
};

let roundWinner = "";
let computerScore = 0;
let playerScore = 0;
let gameRound = 1;

playRound = (playerSelection, computerSelection) => {
  console.log(
    `Player picked: ${playerSelection} and PC picked: ${computerSelection}`
  );

  if (playerSelection === computerSelection) {
    return "It is a tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
    roundWinner = "player";
    return `Player wins, ${playerSelection} is better than ${computerSelection}!`;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    computerScore++;
    roundWinner = "computer";
    return `Computer wins, ${computerSelection} is better than ${playerSelection}!`;
  }
};

checkResult = (gameRound) => {
  console.log(
    `Computer score: ${computerScore} and Player score: ${playerScore} and Gameround: ${gameRound}`
  );
  if (gameRound == 5) {
    if (computerScore == playerScore) {
      console.log("Draw!");
    } else if (computerScore > playerScore) {
      console.log(`Computer won ${computerScore} by ${playerScore}`);
    } else {
      console.log(`Player won ${playerScore} by ${computerScore}`);
    }
  }
};

for (gameRound = 1; gameRound < 6; gameRound++) {
  const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  checkResult(gameRound);
}

console.log(playerScore);
console.log(computerScore);
