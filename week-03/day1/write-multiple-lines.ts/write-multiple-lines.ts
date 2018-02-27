// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

'use strict';
const fs = require('fs');

function multiLines(path:string, word:string, lines:number) {
  let writeArray: string[] = [];
  for (let i:number = 0; i < lines; i++) {
    writeArray.push(word + '\n')
    }
    fs.writeFileSync(path, writeArray.join(''))
}

multiLines('my-text.txt', 'apple', 5)
