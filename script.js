'use strict';

// Generate random number
let random = Math.floor(Math.random() * 20) + 1;
console.log(random);

//Define the sarting score and high score
let score = 20;
let highScore = 0;

//Change messages function
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//Change score
function changeScore() {
  document.querySelector('.score').textContent = score;
}

//Trigger onclick event
document.querySelector('.check').addEventListener('click', function () {
  // Declare the guessing value (To be entered by the user)
  const guess = Number(document.querySelector('.guess').value);

  // If the entrey is empty
  if (!guess || guess < 0 || guess > 20) {
    displayMessage('Please, Enter a valid number from 1 to 20 🛑🤚');
  }

  // If the guessing matches the random number
  else if (guess === random) {
    displayMessage('You guessed it right 🎉');
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = random;

    // guess < random ? (displayMessage('Too low! '), score--) : '';
    // guess > random ? (displayMessage('Too high! '), score--) : '';

    // Assign the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //If the guessing is smaller than the random number
  else if (guess < random) {
    displayMessage('Too low! ');
    score--;
  }
  // if the guessing bigger than the random number
  else {
    displayMessage('Too high! ');
    score--;
  }

  //Limit min score to 0
  if (score < 0) {
    // score.reset();
    displayMessage('Cant guess anymore , please reset ');
  }

  //Setting Losing and winning conditions
  switch (score) {
    case 0:
      displayMessage('You Lost the game!');
      break;
  }
  changeScore();
});

// Reset the Game
document.querySelector('.again').addEventListener('click', function () {
  //reset body
  document.body.style.backgroundColor = '#222';

  //reset number
  random = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  //reset score
  score = 20;
  changeScore();

  //reset guessing
  document.querySelector('.guess').value = '';

  //reset message
  displayMessage('Start guessing...');

  //reset box size
  document.querySelector('.number').style.width = '15rem';
});
