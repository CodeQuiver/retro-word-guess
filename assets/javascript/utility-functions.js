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