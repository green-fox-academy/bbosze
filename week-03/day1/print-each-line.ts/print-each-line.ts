'use strict';

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'


const fs = require('fs');

let fileContent
try {
  fileContent = fs.readFileSync('my-file.txt', 'utf-8');
  console.log(fileContent);
}

catch (err) {
  if (err.code === 'ENOENT') {
  console.log('File not found!');
} else {
  throw 'ERR';
}
}




// if (fileContent === false){
//   console.log('ERROR');
// } else {
// console.log(fileContent);
// }
