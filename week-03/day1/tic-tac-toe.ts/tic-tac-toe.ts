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


function winner(file:string, game1: string, game2: string, game3: string, player: string, player2:string){
  resultRead(file);
  for (let i: number = 0; i < map.length; i++)

  if (game1 === player && game2 === player && game3 === player) {
    console.log('X wins')
  } else if ((game1 === player2 && game2 === player2 && game3 === player2)) {
    console.log('O wins')
   } //else {
  //   console.log('It is a draw.')
  // }
}



winner('win-x.txt', resArr[0], resArr[1], resArr[2], 'X', 'O');
winner('win-x.txt', resArr[4], resArr[5], resArr[6], 'X', 'O');
winner('win-x.txt', resArr[8], resArr[9], resArr[10], 'X', 'O');
winner('win-x.txt', resArr[0], resArr[4], resArr[8], 'X', 'O');
winner('win-x.txt', resArr[1], resArr[5], resArr[9], 'X', 'O');
winner('win-x.txt', resArr[2], resArr[6], resArr[10], 'X', 'O');
winner('win-x.txt', resArr[0], resArr[5], resArr[10], 'X', 'O');
winner('win-x.txt', resArr[2], resArr[5], resArr[8], 'X', 'O');


// winner(resArr[0], resArr[1], resArr[2], 'O');
// winner(resArr[4], resArr[5], resArr[6], 'O');
// winner(resArr[8], resArr[9], resArr[10], 'O');
// winner(resArr[0], resArr[4], resArr[8], 'O');
// winner(resArr[1], resArr[5], resArr[9], 'O');
// winner(resArr[2], resArr[6], resArr[10], 'O');
// winner(resArr[0], resArr[5], resArr[10], 'O');
// winner(resArr[2], resArr[5], resArr[8], 'O');
