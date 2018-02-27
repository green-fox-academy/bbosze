// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict';
const fs = require('fs');

//var bosze = fs.readFileSync('my-file.txt', 'utf-8');

try {
//  let data = fs.readFileSync('my-file.txt', 'utf-8');
  fs.writeFileSync('my-file.txt', 'bosze');
}
catch(err){
  throw 'Unable to write file: my-file.txt'
}
