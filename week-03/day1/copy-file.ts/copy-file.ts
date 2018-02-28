// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';
const fs = require('fs');

function copy(file1, file2) {
  let data = fs.readFileSync(file1, 'utf-8');
  fs.writeFileSync(file2, data);
  let fullLines = file2.length;
    if (fullLines > 0){
      console.log('success')
    }
}

copy('file1.txt', 'file2.txt');
