// Variables to hold the state of the game
let targetNumber;
let attempts = 0;

// Elements from the DOM
const guessInput = document.getElementById('guessInput');
const submitButton = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const restartButton = document.getElementById('restartButton');

// Function to start the game
function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    attempts = 0;
    feedback.textContent = '';
    restartButton.classList.add('hidden');
    guessInput.value = '';
    guessInput.disabled = false;
    submitButton.disabled = false;
}

// Function to handle guess submission
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        feedback.classList.remove('success', 'error');
        feedback.classList.add('error');
        return;
    }

    attempts++;

    if (userGuess === targetNumber) {
        feedback.textContent = `Congratulations! You guessed the right number in ${attempts} attempts.`;
        feedback.classList.remove('error');
        feedback.classList.add('success');
        guessInput.disabled = true;
        submitButton.disabled = true;
        restartButton.classList.remove('hidden');
    } else if (userGuess < targetNumber) {
        feedback.textContent = 'Too low! Try again.';
        feedback.classList.remove('success', 'error');
        feedback.classList.add('error');
    } else {
        feedback.textContent = 'Too high! Try again.';
        feedback.classList.remove('success', 'error');
        feedback.classList.add('error');
    }
}

// Function to restart the game
function restartGame() {
    startGame();
}

// Event Listeners
submitButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);

// Start the game when the page loads
startGame();
