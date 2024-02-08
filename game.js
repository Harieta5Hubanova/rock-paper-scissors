
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(`You chose ${playerSelection}.`);
    console.log(`Computer chose ${computerSelection}.`);
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      
      console.log(result);
  
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
    }
  
    console.log(`Game over! Your score: ${playerScore}, Computer's score: ${computerScore}.`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry! You lose the game.");
    } else {
      console.log("It's a tie overall!");
    }
  }
  
  game();
  