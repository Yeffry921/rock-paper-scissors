let computerScore = 0;
let userScore = 0;
const buttons = document.querySelectorAll('.btn');
const results = document.querySelector('.results');



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        game(e.target.textContent);
    })
})

function game(playerPick) {
    let playerChoice = playerPick.toLowerCase();
    const computerChoice = computerPlay();

    if (playerChoice !== null) {
        playRound(playerChoice, computerChoice);

    } else {
        alert('Please use rock paper or scissors');
    }
}

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3) + 1
    return randomNum === 1 ? 'rock' : randomNum === 2 ? 'paper' : 'scissors';
}

function playRound(playerSelection, computerSelection) {

    const losingMessage = `You have lost! ${computerSelection} beats ${playerSelection}`;
    const winningMessage = `You have won! ${playerSelection} beats ${computerSelection}`;
    const tiedMessage = `The game was a tie! ${playerSelection} and ${computerSelection}, try again`;
    

    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            document.querySelector('.results').textContent = winningMessage;
            userScore += 1;
            console.log(userScore)
            
        } else if (computerSelection === 'paper') {
            document.querySelector('.results').textContent = losingMessage;
            computerScore += 1;
        } else if (computerSelection === 'rock') {
            document.querySelector('.results').textContent = tiedMessage;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            document.querySelector('.results').textContent = losingMessage;
            computerScore += 1;
        } else if (computerSelection === 'paper') {
            document.querySelector('.results').textContent = winningMessage;
            userScore += 1
        } else if (computerSelection === 'scissors') {
            document.querySelector('.results').textContent = tiedMessage;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            document.querySelector('.results').textContent = winningMessage;
            userScore += 1;
        } else if (computerSelection === 'scissors') {
            document.querySelector('.results').textContent = losingMessage;
            computerScore += 1;
        } else if (computerSelection === 'paper') {
            document.querySelector('.results').textContent = tiedMessage;
        }
    }

    checkWinner();

}

function checkWinner() {
    let winner = userScore > 4 ? 'User!' : 'Computer!'
    const finalWinnerMessage = `You have won the the best of 5 ${winner}! Game has ended`
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');

    para1.textContent = `Player Score ${userScore}`;
    para2.textContent = `Computer Score ${computerScore}`;

    results.appendChild(para1);
    results.appendChild(para2);

    if (userScore > 4 ){
        document.querySelector('.results').textContent = finalWinnerMessage;
    } else if (computerScore > 4){
        document.querySelector('.results').textContent = finalWinnerMessage;
    }
    
}