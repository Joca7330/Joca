// Create a phrase to translate into whale talk
const input = 'turpentine and turtles';
// Create an array of only vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];
// Array to store vowels from the input string
let resultArray = [];
// Loops through characters from the input string
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    // If character is e add it to the resultArr
    // This will add e twice because it is also checked in the vowel loop
    if (input[inputIndex] === 'e') {
        resultArray.push(input[inputIndex])
    }
    // If character is u add it to the resultArr
    // This will add u twice because it is also checked in the vowel loop
    if (input[inputIndex] === 'u') {
        resultArray.push(input[inputIndex])
    }
    // Inner Loop: Check if the current character is any vowel
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
        if (input[inputIndex] === vowels[vowelsIndex]) {
            resultArray.push(input[inputIndex])
        }
    }
}
// Convert the resultArr to a string and uppercase
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
