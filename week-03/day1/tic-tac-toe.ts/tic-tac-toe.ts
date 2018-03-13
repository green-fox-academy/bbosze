// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.


'use strict';
const fs = require('fs');

let map: any[] = [
  { a: 0, b: 1, c: 2},
  { a: 4, b: 5, c: 6},
  { a: 8, b: 9, c: 10},
  { a: 0, b: 4, c: 8},
  { a: 1, b: 5, c: 9},
  { a: 2, b: 6, c: 10},
  { a: 0, b: 5, c: 10},
  { a: 2, b: 5, c: 8},
];


let resArr: string[] = []

function resultRead(filename) {
  let data = fs.readFileSync(filename, 'utf-8');
  for (let i: number = 0; i < data.length; i++) {
    resArr.push(data[i])
  }
}

function winner(file1:string){
  try {
    resultRead(file1);
    if (resArr[0] === 'X' && resArr[1] === 'X'  && resArr[2] === 'X' || resArr[4] === 'X' && resArr[5] === 'X'  && resArr[6] === 'X' || resArr[8] === 'X' && resArr[9] === 'X'  && resArr[10] === 'X' || resArr[0] === 'X' && resArr[4] === 'X'  && resArr[8] === 'X' || resArr[1] === 'X' && resArr[5] === 'X'  && resArr[9] === 'X' || resArr[2] === 'X' && resArr[6] === 'X'  && resArr[10] === 'X' || resArr[0] === 'X' && resArr[5] === 'X'  && resArr[10] === 'X' || resArr[2] === 'X' && resArr[5] === 'X'  && resArr[8] === 'X')  {
      console.log('X wins');
    } else if
    (resArr[0] === 'O' && resArr[1] === 'O'  && resArr[2] === 'O' || resArr[4] === 'O' && resArr[5] === 'O'  && resArr[6] === 'O' || resArr[8] === 'O' && resArr[9] === 'O'  && resArr[10] === 'O' || resArr[0] === 'O' && resArr[4] === 'O'  && resArr[8] === 'O' || resArr[1] === 'O' && resArr[5] === 'O'  && resArr[9] === 'O' || resArr[2] === 'O' && resArr[6] === 'O'  && resArr[10] === 'O' || resArr[0] === 'O' && resArr[5] === 'O'  && resArr[10] === 'O' || resArr[2] === 'O' && resArr[5] === 'O'  && resArr[8] === 'O')  {
      console.log('O wins');
    } else {
      console.log(`It's a draw!`)
    }
  }
  catch {
    console.log('ERR');
  }
  finally {
    console.log(`The war is over.`);
  }
}

winner('win-x.txt');
