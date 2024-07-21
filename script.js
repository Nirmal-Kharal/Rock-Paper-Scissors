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
//for computer

function getComputerChoice() {
    let rock ='rock';
    let paper ='paper';
    let scissors = 'scissors';
    let random = Math.random();
    if (random>= 0 && random <= 0.33) {
        return rock;
    } else if (random > 0.33 && random <= 0.66) {
        return paper;
    } else if (random > 0.66 && random <= 1) {
        return scissors;
    }
};

// for Human

function getHumanChoice(){
    userInput =prompt("enter rock, paper ,scissors").toLowerCase();
    if(userInput=='rock'||userInput=='paper'||userInput=='scissors' ){
        // console.log(userInput);
        return userInput;
    }
    else{
        userInput = prompt("Invalid input. Please enter rock, paper or scissors.")
    }

};


// SCORES INITIALIZATION
let humanScore=0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){

    if(humanChoice=='rock'&& computerChoice =='paper'){
        console.log("you lose. paper beats rock")
        computerScore+=1;
    }
    else if(humanChoice=='paper'&&computerChoice =='rock'){
        console.log("you won. paper beats rock")
        humanScore+=1;
    }
    else if(humanChoice=='rock'&& computerChoice =='rock'){
        console.log("game tie")
    }
    else if(humanChoice=='paper'&& computerChoice=='paper'){
        console.log("game tie")
    }
    else if(humanChoice=='scissors'&& computerChoice=='paper'){
        console.log("you won. scissors beats paper")
        humanScore+=1;

    }
    else if(humanChoice=='paper'&& computerChoice=='rock'){
        console.log("you lose. paper beats paper")
        computerScore+=1;
    }
    else if(humanChoice=='scissors'&& computerChoice =='scissors'){
        console.log("game tie")
    }
    else if(humanChoice=='rock'&& computerChoice =='scissors'){
        console.log("you won. rocks beats scissors")
        humanScore+=1;
    }
    else if (humanChoice=='scissors'&& computerChoice=='rock'){
        console.log("you lose.  rocks beats scissors");
        computerScore+=1;
    }
  
   

};

function playGame() {

    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human score:" + humanScore);
        console.log("Computer score:" + computerScore)
        if(humanScore>computerScore){
            console.log("human wins")
        }
        else{
             console.log('computer wins');
            
        }
    };

};
//start game
playGame();



