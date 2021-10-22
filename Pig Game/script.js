'use strict';

// selecting elementing
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 1 ? 0 : 1;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

let scores, currentScore, activePlayer, playing;

const init = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current0El.textContent = 0;
    diceEl.classList.add('hidden');

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;


    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

}
init();
//roll dice functionality

btnRoll.addEventListener('click', function () {

    if (playing) {
        //generate number
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        //display dice
        diceEl.classList.remove('hidden');
        //manipulate the image
        diceEl.src = `dice-${dice}.png`;

        //if dice == 1 switch player

        if (dice !== 1) {
            //add dice to current score
            currentScore += dice;
            //whatever player is active add to its score
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            //switching the player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {

    if (playing) {
        //Add current score to active player'score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            //player is wins
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else {
            //switch the player
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', function () {
    init();
});


