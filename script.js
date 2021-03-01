computerPlay = () => {
    let plays = ["scissors","rock","paper"];
    return (plays[Math.floor(Math.random() * Math.floor(3))]);
}

descript = (text) =>{
    document.querySelector('#description').textContent = text;
}

playerPoints = (text) =>{
    document.querySelector('#player').textContent = text;
}

computerPoints = (text) =>{
    document.querySelector('#computer').textContent = text;
}



playRound = (playerSel, computerSel) => {
    let plays = ["scissors","rock","paper"];
    if (plays.indexOf(playerSel) == plays.indexOf(computerSel)) {
        descript("Tie!");
        return("Tie!");
    }
    else if((playerSel == "paper" && computerSel == "scissors") || plays.indexOf(playerSel) < plays.indexOf(computerSel)){
        descript("You Lose! " + computerSel.toString() + " beats " + playerSel.toString())
         
        return false;
    }
    else { 
        descript("You win! " + playerSel.toString() + " beats " + computerSel.toString())
        return true;
    }

}


let playerScore = 0;
let computerScore = 0;


game = match =>{
    
    
    if (match == true) {++ playerScore}
    else if (match == false && match !== "Tie!") {++computerScore}
    
    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        descript("You Win Smarty or Lucky whichever way you feel today but remember my kind will rule you > 8 {")
    }
    else if (computerScore == 5){
        playerScore = 0;
        computerScore = 0;
        descript("You Lose PC MASTER RACE FOREVER HAHA..... HAHA > 8 D")
    }
    playerPoints(playerScore);
    computerPoints(computerScore);
}



const BTNS = document.querySelectorAll('button');

BTNS.forEach((btn) => {
    
    
    btn.addEventListener('click', (e) => {
        game(playRound(btn.value, computerPlay()));
    });
});

