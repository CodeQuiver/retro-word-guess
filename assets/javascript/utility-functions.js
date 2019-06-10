// Generic function to create placeholder of the same length for any given string (stringToReplace)
    // placeholderCharacter must be a single character and a string- e.g. "_" or "#"
    // output will have one generic character for each character of the original string- 
    // e.g.
    // createPlaceholder("blah", "_");
    // returns "____"

const createPlaceholder = (stringToReplace, placeholderCharacter) => {
    for (var placeholder = placeholderCharacter; placeholder.length < stringToReplace.length; placeholder = placeholder + placeholderCharacter) {
        continue;
    }
    return placeholder;
}

// TEST:
// console.log(createPlaceholder("blah", "_"));

// NOTE- "var" is used here deliberately so that "placeholder" can be read outside the "for" loop
// without having to be explicitly returned like "let" would





//  function for computer to pick a random choice from an array

// ==== TODO === Verify if this works iterating over objects
    //outputs outputAnswer
const newAnswer = (choices) => {
    let outputAnswer = choices[Math.floor(Math.random() * choices.length)];
    // console.log("computer answer is " + outputAnswer);
    return outputAnswer;
}

