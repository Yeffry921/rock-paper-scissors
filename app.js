const storage = {
    computerScore: 0,
    userScore: 0,
    buttons: document.querySelectorAll('.btn'),
    results: document.querySelector('.results'),
    form: document.querySelector('form'),
    container: document.querySelector('.container'),
    playerName: ''
};

const ShowUI = (e) => {
    e.preventDefault();
    storage.container.classList.toggle('hide');
    e.target.classList.toggle('hide');

    const para = document.createElement('h3');
    para.textContent = `Player Name: ${e.target.player.value}`;
    storage.playerName = e.target.player.value;

    document.querySelector('body').appendChild(para);
};


for(button of storage.buttons){
    button.addEventListener('click', (e) => {
        const playerPick = generateUserPick(parseInt(e.target.dataset.id));
        setTimeout(() => {
            const compPick = generateCompPick();
            playRound(playerPick, compPick);
        }, 1000)
        
    });
}

const generateUserPick = (playerPick) => playerPick === 1 ? 'rock' : playerPick === 2 ? 'paper' : 'scissors'; 

const generateCompPick = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1
    return randomNum === 1 ? 'rock' : randomNum === 2 ? 'paper' : 'scissors';
};

const playRound = (playerPick, compPick) => {

    const losingMessage = `You have lost! ${compPick} beats ${playerPick}`;
    const winningMessage = `You have won! ${playerPick} beats ${compPick}`;
    const tiedMessage = `The game was a tie! Both picked ${playerPick}, try again`;
    const results = document.querySelector('.results');
    

    if (playerPick === 'rock') {
        if (compPick === 'scissors') {
            results.textContent = winningMessage;
            storage.userScore += 1;
            console.log(storage.userScore)
            
        } else if (compPick === 'paper') {
            results.textContent = losingMessage;
            storage.computerScore += 1;
        } else if (compPick === 'rock') {
            results.textContent = tiedMessage;
        }
    } else if (playerPick === 'scissors') {
        if (compPick === 'rock') {
            results.textContent = losingMessage;
            storage.computerScore += 1;
        } else if (compPick === 'paper') {
            results.textContent = winningMessage;
            storage.userScore += 1
        } else if (compPick === 'scissors') {
            results.textContent = tiedMessage;
        }
    } else if (playerPick === 'paper') {
        if (compPick === 'rock') {
            results.textContent = winningMessage;
            storage.userScore += 1;
        } else if (compPick === 'scissors') {
            results.textContent = losingMessage;
            storage.computerScore += 1;
        } else if (compPick === 'paper') {
            results.textContent = tiedMessage;
        }
    }

    checkWinner();

};

function checkWinner() {
    let winner = storage.userScore > 4 ? storage.playerName : 'Computer!'
    const finalWinnerMessage = `You have won the game ${winner}! Game has ended`
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');

    para1.textContent = `Player Score ${storage.userScore}`;
    para2.textContent = `Computer Score ${storage.computerScore}`;

    storage.results.appendChild(para1);
    storage.results.appendChild(para2);

    if (storage.userScore > 4 ){
        document.querySelector('.results').textContent = finalWinnerMessage;
    } else if (storage.computerScore > 4){
        document.querySelector('.results').textContent = finalWinnerMessage;
    }
    
};

storage.form.addEventListener('submit', ShowUI);
