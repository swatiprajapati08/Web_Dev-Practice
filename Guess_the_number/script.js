'use strict';

let correctNum = Math.floor((Math.random() * 100) + 1);
console.log("correct Number", correctNum);

let score = 20;
let highScore = 0;


//listen the event(function) 
//this event call function,when the event happen
document.querySelector(".check").addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    console.log(guess);


    if (!guess) {
        document.querySelector('.message').textContent = ' 🚫 No number';
    }
    else if (guess == correctNum) {
        document.querySelector(".number").textContent = correctNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        if (score > highScore) {
            document.querySelector('.highscore').textContent = score;
            highScore = score;
        }
    }
    else {
        score--;
        document.querySelector('.score').textContent = score;
        if (score > 1) {
            if (guess > correctNum) {
                document.querySelector('.message').textContent = '📈 Too High!';
            }
            else {
                document.querySelector('.message').textContent = '📉 Too Low!';
            }

        }
        else {
            document.querySelector('.message').textContent = '🧨 You Lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    correctNum = Math.floor((Math.random() * 100) + 1);
    score = 20;
    console.log("correct Number", correctNum);
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector(".number").textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.highscore').textContent = highScore;
});