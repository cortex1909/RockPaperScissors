//default parameters
let computerScore = 0;
let playerScore = 0;
let gameRound = 1;
let result = document.getElementById("result")
    result.innerHTML = `<span class="result"> ${playerScore} : ${computerScore} </span>`
let winner = document.getElementById("winner")
let buttons = document.querySelector(".buttons")

// Event listener on buttons
document.getElementById("rock").addEventListener("click", () => {
  gameOn("rock");
})
document.getElementById("paper").addEventListener("click", () => {
  gameOn("paper");
})
document.getElementById("scissors").addEventListener("click", () => {
  gameOn("scissors");
})   

// computer picks random from array
computerPlay = () => {
  let randomStrings = ["rock", "paper", "scissors"];
  return randomStrings[Math.floor(Math.random() * randomStrings.length)];
};

//play one round
playRound = (playerSelection, computerSelection) => {
  winner.style.display = "block"
  winner.innerHTML = `<span class="result"> Computer picked ${computerSelection}! </span>`
  if (playerSelection === computerSelection) {
    return "It is a tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
    return `Player wins, ${playerSelection} is better than ${computerSelection}!`;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    computerScore++;
    return `Computer wins, ${computerSelection} is better than ${playerSelection}!`;
  }
};

// check whats the result
checkResult = () => {
  result.innerHTML = `<span class="result"> ${playerScore} : ${computerScore} </span>`
  if (computerScore == 5) {
    winner.style.display = "block"
    buttons.style.display = "none"
    winner.innerHTML = `<span class="result"> Computer won! </span>
    <button onClick="setNewGame()" class="btn restart">Restart</button>`
  } else if(playerScore == 5) {
    winner.style.display = "block"
    buttons.style.display = "none"
    winner.innerHTML = `<span class="result"> Player won! </span>
    <button onClick="setNewGame()" class="btn restart">Restart</button>`
  }
};

gameOn = (playerSelection) => {
  playRound(playerSelection, computerPlay())
  checkResult()
}

setNewGame = () => {
  computerScore = 0
  playerScore = 0
  result.innerHTML = `<span class="result"> ${playerScore} : ${computerScore} </span>`
  winner.style.display = "hidden"
  buttons.style.display = "flex"
}
