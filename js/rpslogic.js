const ROCK = 1, PAPER = 2, SCISSORS = 3;
const MAX_ROUNDS = 5;
const dict = {
    1: "Rock",
    2: "Paper",
    3: "Scissors"
}
const scoreCount = document.getElementById("p-score");
const escoreCount = document.getElementById("e-score");

const roundCount = document.getElementById("rounds");
const log = document.getElementById("log");
const reset = document.getElementById("reset");


const RockPaperScissors = document.getElementsByClassName("choices");

reset.addEventListener("click", (e) => {
    rounds = 0;
    Player1 = 0;
    Player2 = 0;
    scoreCount.innerHTML = Player1;
    roundCount.innerHTML = rounds;
    escoreCount.innerHTML = Player2;
    log.innerHTML = "Choose an Option";
});


Array.from(RockPaperScissors).forEach(element => {
    element.addEventListener("click", (e) => {
        if (rounds < MAX_ROUNDS)
            {
                playGame(e.target.value);
            }
    
    });
    
});

var rounds = 0;
var Player1 = 0;
var Player2 = 0;

function playGame(choice){

       let result = computeResult(choice, computerChoice());   
       if (result == 1)
       {
           Player1++;
           rounds++;
        }
        else if (result == 2)
        {
            Player2++;
            rounds++;        
        }
        scoreCount.innerHTML = Player1;
        escoreCount.innerHTML = Player2;

        roundCount.innerHTML = rounds;
        if (rounds < MAX_ROUNDS)
        {
            return;
        }
    
    log.innerHTML = "GAME OVER!"
       
}

function computeResult(playerOne, playerTwo)
{
    if (playerOne == playerTwo)
    {
        log.innerHTML = `${dict[playerOne]} draws with ${dict[playerTwo]}!`;
        return 0;
    }
    if (playerOne == ROCK && playerTwo == SCISSORS 
    || playerOne == PAPER && playerTwo == ROCK 
    || playerOne == SCISSORS && playerTwo == PAPER)
    {
        log.innerHTML = `${dict[playerOne]} beats ${dict[playerTwo]}, You win!`;
        return 1;
    }
    else{ 
        log.innerHTML = `${dict[playerTwo]} beats ${dict[playerOne]}, You lose!`;
        return 2;
    }
}

function computerChoice()
{
    return Math.floor(Math.random() * ( 3 - 1 + 1 )) + 1;
}