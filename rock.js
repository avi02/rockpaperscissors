const rock="rock";
const paper="paper";
const scissors="scissors";

function getComputerChoice() {
    let randval = Math.random();

    if (randval < 1 / 3) {
        return rock;
    } else if (randval < 2 / 3) {
        return paper;
    } else {
        return scissors;
    }
}
// console.log(getComputerChoice(0.8))


function getHumanChoice(){
    let choice=prompt("enter your choice! Rock, Paper, Scissors");
    return choice.toLowerCase();
}
// console.log(getHumanChoice());

let humanscore=0;
let computerscore=0;

function playRound(HumanChoice,computerChoice)
{
    HumanChoice=HumanChoice.toLowerCase();
    
    
    if(HumanChoice === computerChoice)
        {
            return `same Choice(${HumanChoice})`;
        }
    if(
        (HumanChoice === rock && computerChoice === scissors) ||
        (HumanChoice === paper && computerChoice === rock) ||
        (HumanChoice === scissors && computerChoice === paper)
    )
        {
            humanscore++;
            return `you win ${HumanChoice} beats ${computerChoice}`;
        }
        else
        {
            computerscore++;
            return `You lose ${computerChoice} beats ${HumanChoice}`;
        }



}

function playGame(){
    for (let i=0; i<5; i++)
    {
        const humanSelection= getHumanChoice();
        const computerSelection= getComputerChoice();

        console.log(playRound(humanSelection,computerSelection));
    }
    console.log("Human score:", humanscore);
    console.log("computer score:", computerscore)
}
playGame();