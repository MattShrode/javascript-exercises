const reverseString = function(phrase) {
    const phraseArray = Array.from(phrase);
    let reverseArray = phraseArray.reverse();
    let newPhrase = reverseArray.join("");
    return newPhrase;
};

// Do not edit below this line
module.exports = reverseString;
