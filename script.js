// select elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const curScore0El = document.getElementById('current--0');
const curScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
const scores = [0, 0]; // save final score of player
let activePlayer = 0; // set player 1 is the first player

rollBtn.addEventListener('click', () => {
  // 1 generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1; // random from 1 to 6
  // 2 display it
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3 check dice is 1
  // yes switch player
  // no add dice roll to the current score and display new score
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
