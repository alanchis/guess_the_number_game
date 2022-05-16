'use strict';

//queryselector
const checkButton = document.querySelector('.check')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const resetButton = document.querySelector('.again')
const guess = document.querySelector('.guess')
const body = document.querySelector('body')
const highScore = document.querySelector('.highscore')




//secret number
let secretNumber = Math.round(Math.random() * (20 - 1) + 1)
let scorePoints = 20
let highScorePoints = 0

//document.querySelector('.number').textContent = secretNumber


//highscore




//score
checkButton.addEventListener('click', ( ) => { 
            const guess = Number(document.querySelector('.guess').value);
            console.log(guess, typeof guess);

            if (!guess){
                message.textContent = 'No number! 😒'
            } else if ( guess === secretNumber) {
                message.textContent = 'Correct Number! You win! '
                document.querySelector('.number').textContent = secretNumber
                document.body.style.backgroundColor = "green";
                console.log(typeof score.textContent)
                if (score.textContent > highScorePoints) {
                    highScorePoints = score.textContent
                    console.log(highScorePoints, `este es el valor nuevo`)
                    highScore.textContent = highScorePoints
                } else {
                    highScore.textContent = score.textContent
                }







            } else if ( guess > secretNumber) {
                message.textContent = 'Number too high 📈 ';
                score.textContent = score.textContent - 1                
            } else {
                message.textContent = 'Number too low 📉 ';
                score.textContent = score.textContent - 1                 
            }

            if (score.textContent <= 0){
                message.textContent = 'You lose 😢 '; 
                score.textContent = 0;
                document.querySelector('.number').textContent = secretNumber
                document.body.style.backgroundColor = "red";
                               
            }
        
        })

//Reset game
resetButton.addEventListener('click',() => {
    body.style.backgroundColor = '#222';
    secretNumber = Math.round(Math.random() * (20 - 1) + 1)
    document.querySelector('.number').textContent = '?';
    //document.querySelector('.number').textContent = secretNumber;
    message.textContent = 'Start guessing...';
    score.textContent = 20;
    guess.value = '';


})




 


