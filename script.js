// selected Btn and Icons
const rockBtn = document.querySelector('.rock-btn')
const paperBtn = document.querySelector('.paper-btn')
const scissorsBtn = document.querySelector('.scissors-btn')
const userHandIcon = document.querySelector('.user.hand-icon')
const computerHandIcon = document.querySelector('.computer.hand-icon')
const result = document.querySelector('.result')
const userScore = document.querySelector('.user-score')
const computerScore = document.querySelector('.computer-score')

// Popup content
const popupOverlay = document.querySelector('.popup-overlay')
const popupTitle = document.querySelector('.popup-title')
const popupCloseBtn = document.querySelector('.popup-close-btn')
const userScoreElement = document.querySelector('.user-score')
const computerScoreElement = document.querySelector('.computer-score')

// Audio Elements
const clickSound = document.querySelector('.click-sound');
const shakeSound = document.querySelector('.shake-sound');
const winSound = document.querySelector('.win-sound');
const loseSound = document.querySelector('.lose-sound');

const rockIcon = '✊'
const paperIcon = '✋'
const scissorsIcon = '✌️'
const iconList = [rockIcon, paperIcon, scissorsIcon]

function calculateResult(selectedIcon, winningIcon) {
  userHandIcon.innerText = '🤜'
  computerHandIcon.innerText = '🤛'
  result.innerText = '🙄'
  userHandIcon.classList.add('shakeUserHands')
  computerHandIcon.classList.add('shakeComputerHands')
  
  setTimeout(() => {
    userHandIcon.classList.remove('shakeUserHands')
    computerHandIcon.classList.remove('shakeComputerHands')
    userHandIcon.innerText = selectedIcon
    const computerChoice = Math.floor(Math.random() * 3)
    computerHandIcon.innerText = iconList[computerChoice]
    if (computerHandIcon.innerText === userHandIcon.innerText) {
      result.innerText = 'Draw'
    } else if (computerHandIcon.innerText === winningIcon) {
      result.innerText = 'You Won!!'
      userScore.innerText = +userScore.innerText + 1
    } else {
      result.innerText = 'Anuj Won!!'
      computerScore.innerText = +computerScore.innerText + 1
    }
     

// Function to Show Popup
function showPopup(message) {
    popupTitle.textContent = message;
    popupOverlay.classList.add('active');
}

// Function to Hide Popup
function hidePopup() {
    popupOverlay.classList.remove('active');
}

// Play Shake Sound During Hand Shake Animation
document.querySelectorAll('.hand-icon').forEach(hand => {
  hand.addEventListener('animationstart', () => {
      playSound(shakeSound); // Play shake sound
  });
});

// Function to Check Score
function checkScore() {
    const userScore = parseInt(userScoreElement.textContent);
    const computerScore = parseInt(computerScoreElement.textContent);

    if (userScore === 3) {
        showPopup('You Win! 🎉');
        playSound(winSound)
    } else if (computerScore === 3) {
        showPopup('Anuj Wins! 😒');
        playSound(loseSound)
    }

  
}

// Reset Game Function
function resetGame() {
    userScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    hidePopup();
}

// Event Listener for Close Button
popupCloseBtn.addEventListener('click', resetGame);

// Add this line at the end of your existing game logic
// For example, after updating the score:
checkScore();
    
  }, 3000)
}

rockBtn.addEventListener('click', () => {
  calculateResult(rockIcon, scissorsIcon)

})
paperBtn.addEventListener('click', () => {
  calculateResult(paperIcon, rockIcon)
})
scissorsBtn.addEventListener('click', () => {
  calculateResult(scissorsIcon, paperIcon)
})

// Function to Play Sound
function playSound(sound) {
  sound.currentTime = 0; // Reset sound to start
  sound.play();
  
}

// Play Shake Sound During Hand Shake Animation
document.querySelectorAll('.hand-icon').forEach(hand => {
  hand.addEventListener('animationstart', () => {
      playSound(shakeSound); // Play shake sound
  });
});


document.querySelectorAll('.rock-btn, .paper-btn, .scissors-btn').forEach(btn => {
  btn.addEventListener('click', () => {
      playSound(clickSound); // Play click sound
  });
});


