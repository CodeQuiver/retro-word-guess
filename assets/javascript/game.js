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

    // Computer's Answer
    let compAnswer = "Sorry, I need to pick a word!";

    // User's Letter Guess
    let userLetter = "";

    // List of wrong letters guessed
    let wrongGuessLetters = [];

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
        //resets graphic to original state
        //calls Computer Select Answer function
            // compAnswer = selectAnswer();
        //calls utility function createPlaceholder("computer answer here", "_");
    // END NEW ROUND FUNCTION //

    // COMPUTER SELECT ANSWER FUNCTION //
    // END COMPUTER SELECT ANSWER FUNCTION //

    // CHECK LETTER GUESS FUNCTION - compares user's letter to the characters in compAnswer //
    // END CHECK LETTER GUESS FUNCTION //

    // WIN CHECK FUNCTION //
    // END WIN CHECK FUNCTION //



// ------- END FUNCTION Definitions -------- //

// ------- MAIN PROGRAM FLOW ------- //









// ------- END MAIN PROGRAM FLOW ------- //