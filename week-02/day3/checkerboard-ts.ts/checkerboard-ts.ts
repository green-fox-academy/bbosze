'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

//BASIC CHECKERBOARD

/*function drawSquare(size: number, firstRowcolor: string) {
  let x: number = size;
  let y: number = size;
  let z: number = 0;
  for (let j:number = 0; j < canvas.height/y; j++) {
      if (j % 2 === 0) {
      x = size;
      z = size * (j + 1);
      for (let i:number = 0; i < canvas.width/y/2; i++) {
      z = j * y+1
      ctx.fillStyle = firstRowcolor;
      ctx.fillRect(x, z, y, y);
      x += y * 2
     }} else  {
     x = 0;
     z = size * (j);
     for (let i:number = 0; i < canvas.width/y/2; i++) {
     ctx.fillStyle = firstRowcolor
     ctx.fillRect(x, z, y, y);
     x += y * 2;
}}}}

drawSquare(20, 'red');
*/

//2 COLOURED CHECKERBOARD

let checkerBoard:[number, string, string] = [20, 'red', 'gold'];

function drawSquare(checkerBoardData: any[]) {
  let x: number = checkerBoardData[0];
  let y: number = checkerBoardData[0];
  let z: number = 0;
  for (let j:number = 0; j < canvas.height/y; j++) {
      if (j % 2 === 0) {
      x = checkerBoardData[0];
      z = checkerBoardData[0] * (j + 1);
      for (let i:number = 0; i < canvas.width/y/2; i++) {
      z = j * y+1
      ctx.fillStyle = checkerBoardData[1];
      ctx.fillRect(x, z, y, y);
      x += y * 2
     }} else  {
     x = 0;
     z = checkerBoardData[0] * (j);
     for (let i:number = 0; i < canvas.width/y/2; i++) {
     ctx.fillStyle = checkerBoardData[1]
     ctx.fillRect(x, z, y, y);
     x += y * 2;
}}}
  for (let j:number = 0; j < canvas.height/y; j++) {
    if (j % 2 === 0)     {
     x = 0;
     z = checkerBoardData[0] * (j);
     for (let i:number = 0; i < canvas.width/y/2; i++) {
     ctx.fillStyle = checkerBoardData[2];
     ctx.fillRect(x, z, y, y);
     x += y * 2;
  }}
    else {
      x = checkerBoardData[0];
      z = checkerBoardData[0] * (j);
      for (let i:number = 0; i < canvas.width/y/2; i++) {
      ctx.fillStyle = checkerBoardData[2];
      ctx.fillRect(x, z, y, y);
      x += y * 2;
    }
} } }

drawSquare(checkerBoard);
