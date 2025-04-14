// Secret message array
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// Remove the last string of the array
secretMessage.pop();
// Added the words to and Program to the end of the array
secretMessage.push('to','Program')
// Change the word easily to the word right by accessing the index
secretMessage[7] = 'right';
// Remove the first string of the array
secretMessage.shift()
// Add programming to the beginning of the array
secretMessage.unshift('Programming');
// Remove the strings get, right, the, first, time, and replace them with know
secretMessage.splice(6,5,'know');
// Print the secret message as one sentence using join
console.log(secretMessage.join(' '));

