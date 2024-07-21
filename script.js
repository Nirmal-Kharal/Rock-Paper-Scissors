// let answer = parseInt(prompt("enter your number"));
// for(let i=1 ; i<=answer ; i++ ){
//     if(i%3==0){
//         console.log("frizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

//working on rock paper,scissor

// Computer Choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    console.log("Computer choice:", computerChoice); // Debugging line
    return computerChoice;
  }
  
  // Human Choice
  function getHumanChoice() {
    let userInput;
    do {
      userInput = prompt("Enter rock, paper, or scissors").toLowerCase();
      console.log("User input:", userInput); // Debugging line
    } while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors");
    return userInput;
  }
  
  // Scores Initialization
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Game tie");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
      humanScore += 1;
    } else {
      console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
      computerScore += 1;
    }
  }
  
  function playGame() {
    for (let i = 1; i <= 5; i++) {
      let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      console.log(`Round ${i} - Human score: ${humanScore}, Computer score: ${computerScore}`);
    }
    // Determine final winner
    if (humanScore > computerScore) {
      console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("The game is a tie!");
    }
  }
  
  // Start the game
  playGame();
  