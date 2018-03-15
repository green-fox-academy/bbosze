// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict'
const fs = require('fs');

// function countLine(filename) {
//   try {
//     let file = fs.readFileSync(filename, 'utf-8')
//     let lines: number = 1;
//     let fullLines = file.length;
//       if (fullLines > 0){
//         for (let i:number = 0; i < file.length; i++) {
//           if (file[i] == '\n') {
//             lines ++;
//           }
//           }
//         }
//       else {
//         lines = 0 }
//         return console.log(lines);
//   }
//   catch(err) {
//     {
//       if (err.code === 'ENOENT') {
//       console.log('File not found!');
//     } else {
//       throw 'ERR';
//     }}}}
//
// countLine('my-file.txt');




function countLine(filename) {

    let file = fs.readFileSync(filename, 'utf-8')
    let lines: number = 1;
    let fullLines = file.length;
      if (fullLines > 0){
        for (let i:number = 0; i < file.length; i++) {
          if (file[i] == '\n') {
            lines ++;
          }
          }
        }
      else {
        lines = 0 }
        lines;
      }

try {
  countLine('my-file.txt');
}

catch (err) {
  if (err.code === 'ENOENT') {
  console.log('File not found!');
} else {
  throw 'ERR';
}
}
