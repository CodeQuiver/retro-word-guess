// import utility functions


// ------- INITIALIZE Global Variables --------//

    // WORD List Object: will include several arrays of words with different video-game or retro themes
    // for computer to randomly pick from- Category names can then be used as hints if time to add that feature
        // Category 1: [array of words]
        // Category 2: [array of words]
        // Category 3: [array of words]
        // Category 4: [array of words]
        // Category 5: [array of words]
    // END WORD List Object

    // Computer's Answer - should be an array
    let compAnswer = [];

    // User's Letter Guess
    let userLetter = "";

    // List of all letters guessed - wrong and correct, just everything used so far
    let pastGuessLetters = [];

    // Life count - initializes at 6 to match classic hangman game # of chances
    let livesLeft = 6;

    // Wins
    let userWins = 0;

    // Losses
    let UserLosses = 0;

// ------- END INITIALIZE Global Variables --------//


// ------- FUNCTION Definitions -------- //

    // RESET GAME FUNCTION - Resets game entirely, including returning all scores to 0 //
    const resetGame = () => {
        //set wins and losses both to 0
        userWins = 0;
        userLosses = 0;

        //calls new round function to reset everything else
        newRound();
    }

    // END RESET GAME FUNCTION //


    // NEW ROUND FUNCTION - Starts a new round but retains the win/loss count //
    const newRound = () => {
        // resets number of lives to original state
        livesLeft = 6;
            // graphic representing that will need to be updated
        //calls Computer Select Answer function
            // compAnswer = selectAnswer();
        // calls utility function createPlaceholder(compAnswer, "_");
        // prints placeholder

    }
        
    // END NEW ROUND FUNCTION //

    // COMPUTER SELECT ANSWER FUNCTION //
        //selectAnswer
        // convert string to array
        // return as new compAnswer
    // END COMPUTER SELECT ANSWER FUNCTION //

    // CHECK LETTER GUESS FUNCTION - compares userLetter to the characters in compAnswer //
    // using local naming within the function to avoid leakage //
    const checkLetterGuess = (letter, answer) => {
        if (pastGuessLetters.indexOf(letter) !== -1 ) {
            // if already guessed
            // display text "sorry, you already guessed that letter"
            // optionally play a negative sound and highlight the letter in a bright color
            // then do nothing else
        
        }
        else if (answer.indexOf(letter) === -1) {
            // if no match
            // subtract 1 from livesLeft
            livesLeft --;

            // check for round loss
            if (livesLeft > 0) {
                // if 
            } else {
                // round was lost, call gameOver function    
            }
            
        } else {
            // if a letter matches
            // call function to update the placeholder to add the letter to the partial word shown
            // win check
        }
        
    }
        

    // END CHECK LETTER GUESS FUNCTION //

    // WIN CHECK FUNCTION //
    // END WIN CHECK FUNCTION //

    // GAME OVER FUNCTION //
    // END GAME OVER FUNCTION //

// ------- END FUNCTION Definitions -------- //

// ------- MAIN PROGRAM FLOW ------- //









// ------- END MAIN PROGRAM FLOW ------- //