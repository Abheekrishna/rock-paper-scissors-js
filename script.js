computerPlay = () => {
    const option = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random() * option.length)
    const compChoice = option[randomNum];
    return compChoice
}

game = () => {
    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = ""

    const rockButton = document.querySelectorAll('.rock')
    rockButton.forEach((rock) => {
        rock.addEventListener('click', () => {
            playerSelection = rock.className;
            const computerSelection = computerPlay()
            battleWinText.textContent = (playRound(playerSelection, computerSelection))
            playerWinText.textContent = 'Player Score: ' + playerWin
            computerWinText.textContent = "Computer Score: " + computerWin
            endGame()
        })
    }) 

    const paperButton = document.querySelectorAll('.paper')
    paperButton.forEach((paper) => {
        paper.addEventListener('click', () => {
            playerSelection = paper.className;
            const computerSelection = computerPlay()
            battleWinText.textContent = (playRound(playerSelection, computerSelection))
            playerWinText.textContent = 'Player Score: ' + playerWin
            computerWinText.textContent = "Computer Score: " + computerWin
            endGame()
        })
    }) 

    const scissorsButton = document.querySelectorAll('.scissors')
    scissorsButton.forEach((scissors) => {
        scissors.addEventListener('click', () => {
            playerSelection = scissors.className;
            const computerSelection = computerPlay()
            battleWinText.textContent = (playRound(playerSelection, computerSelection))
            playerWinText.textContent = 'Player Score: ' + playerWin
            computerWinText.textContent = "Computer Score: " + computerWin
            endGame()
        })
    }) 


    playRound = (playerSelection, computerSelection) => {
        let tie = `Its a Tie!`
        let paperBeatRock = `You won! Paper covers Rock`
        let rockBeatScissors = `You won! your really good at this`
        let scissorsBeatPaper = `You won! your sharp scissors cuts the paper`
        let scissorsBeatPaperLoss = `You lose! Scissors cuts Paper`
        let paperBeatRockLoss = `You lose! The bloody paper covers your Rock`
        let rockBeatScissorsLoss = `You lose! the Rock crushed your scissors` 
    
        if (playerSelection === computerSelection) {
            return tie
        } else if((playerSelection === 'paper') && (computerSelection === 'rock')) {
            playerWin++
            return paperBeatRock
        } else if((playerSelection === 'paper') && (computerSelection === 'scissors')) {
            computerWin++
            return scissorsBeatPaperLoss
        } else if((playerSelection === 'rock') && (computerSelection === 'paper')) {
            computerWin++
            return paperBeatRockLoss
        } else if((playerSelection === 'rock') && (computerSelection === 'scissors')) {
            playerWin++
            return rockBeatScissors
        } else if((playerSelection === 'scissors') && (computerSelection === 'rock')) {
            computerWin++
            return rockBeatScissorsLoss
        } else if((playerSelection === 'scissors') && (computerSelection == 'paper')) {
            playerWin++
            return scissorsBeatPaper
        }
    }

    // while (roundsPlayed < 5) {
    //     roundsPlayed++;
    //     const computerSelection = computerPlay()
    //     playerSelection = prompt('rock paper scissors')
    //     console.log(playRound(playerSelection, computerSelection));
    //     console.log("player win total: " + playerWin)
    //     console.log("computer win total: " + computerWin)
    // }


    const resultContainer = document.querySelector('.result')
    const resultDiv = document.createElement('div')
    resultDiv.classList.add('result-div')
    resultContainer.appendChild(resultDiv)

    const playerWinText = document.createElement('p')
    playerWinText.classList.add('player-score')
    playerWinText.textContent = 'Player Score: ' + playerWin
    resultDiv.appendChild(playerWinText)

    const computerWinText = document.createElement('p')
    computerWinText.classList.add('computer-score')
    computerWinText.textContent = 'Computer Score: ' + computerWin
    resultDiv.appendChild(computerWinText)

    const battleWinText = document.createElement('p')
    battleWinText.classList.add('battle')
    resultDiv.appendChild(battleWinText)

    const gameWinText = document.createElement('p')
    gameWinText.classList.add('game-winner')
    gameWinText.textContent = gameWinner
    resultDiv.appendChild(gameWinText)


    endGame = () => {
        if (playerWin == 5) {
            gameWinner = 'YOU WON! Hurray your genius'
            gameWinText.textContent = gameWinner

            document.getElementById('1').disabled = true;
            document.getElementById('2').disabled = true;
            document.getElementById('3').disabled = true;

            const playAgainButton = document.createElement('button')
            playAgainButton.classList.add('play-again')
            playAgainButton.textContent = 'Play Again'
            resultDiv.appendChild(playAgainButton)

            playAgainButton.addEventListener('click', () => {
                location.reload()
            })

        } else if (computerWin == 5) {
            gameWinner = 'COMPUTER WINS! Better luck next time'
            gameWinText.textContent = gameWinner

            document.getElementById('1').disabled = true;
            document.getElementById('2').disabled = true;
            document.getElementById('3').disabled = true;

            const playAgainButton = document.createElement('button')
            playAgainButton.classList.add('play-again')
            playAgainButton.textContent = 'Play Again'
            resultDiv.appendChild(playAgainButton)

            playAgainButton.addEventListener('click', () => {
                location.reload()
            })
        }
    }


    // if (playerWin > computerWin) {
    //     gameWinner = 'YOU WIN!'
    // } else if (computerWin > playerWin) {
    //     gameWinner = 'YOU LOSE'
    // } else if (computerWin === playerWin) {
    //     gameWinner = 'TIE'
    // }

    // console.log('The five game winner is: ' + gameWinner)
}

game()