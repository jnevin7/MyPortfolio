let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "dog",
    "classroom"
];

let word = pickWord();
let answerArray = [];
setupAnswerArray();

let remainingLetters = word.length;
let guess;
let lives = word.length;
while (remainingLetters > 0 && lives > 0) {
    showPlayerProgress();
    guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please guess a single letter");
    } else {
    let correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer();


function pickWord() {
    // Return a random word
    return words[Math.floor(Math.random() * words.length)]
};
function setupAnswerArray() {
    // Return the answer array
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

};
function showPlayerProgress() {
    // Use alert to show the player their progress
    alert("You have " + lives + " lives left");
    alert(answerArray.join(" "));
};
function getGuess() {
    // Use prompt to get a guess
    return prompt("Guess a letter, or click Cancel to stop playing.");
};
function updateGameState() {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
    guess = guess.toLowerCase();
    let found = false;
    let correctGuesses = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            if (answerArray[j] === "_") {
                answerArray[j] = guess;
                found = true;
                correctGuesses++;
            } else {
                alert("You have already guessed " + guess)
                break;
            }
        }
    }
    if (found === false) {
        lives--;
    }
    return correctGuesses;
};
function showAnswerAndCongratulatePlayer() {
    // Use alert to show the answer and congratulate the player
    if (guess === null) {
        alert("You exited the game. The answer was " + word);    
    } else if (remainingLetters === 0){
        alert("Good job! The answer was " + word);
    } else {
        alert("You ran out of lives. The answer was " + word);
    }
    

};

