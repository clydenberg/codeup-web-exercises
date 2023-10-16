// Generate a random number between 1 and 100 (inclusive)
const targetNumber = Math.floor(Math.random() * 100) + 1;
console.log(targetNumber);


// Initialize the number of attempts
let attempts = 0;

// Function to handle the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    console.log(targetNumber);
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
    // Check if the guess is valid
    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        alert(`please enter a valid number`)
        checkGuess();
    }else {
        attempts = attempts += 1;

        if (userGuess === targetNumber){
        alert(`wow you got it right you guessed ${attempts} times`);
    }else  {
        const hint = userGuess < targetNumber ? "try a higher number." : "Try a lower number.";
        alert(`close but not quite there ${hint}`)
        checkGuess();
        }
    }
    // Increment the number of attempts

    // Check if the guess is correct
    // if true, display a winning message

    // if false, provide a hint and call checkGuess() again
}

// Start the game

checkGuess();