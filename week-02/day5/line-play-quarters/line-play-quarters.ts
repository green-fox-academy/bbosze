'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

//BASIC FUNCTION

let w:number = canvas.width;
let h:number = canvas.height;

function draw(num, tiles) {
  for (let k: number = 0; k < tiles; k++) {
    for (let j:number = 0; j < tiles; j++) {
    for (let i:number = 0; i < num; i++) {
    let x:number = j * w / tiles + i * w / (num - 1) / tiles;
    let y:number = k * h / tiles + i * h / tiles / (num - 1);
    drawLine(w / tiles * j, y, x, h / tiles * (k + 1));
    drawLine(w / tiles * (j + 1), y, x, h / tiles * k);
}}}}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.strokeStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

//PROMPT CHECKING function

function checker(range: any, range2: any) {
  let numberOfLines: any = parseInt(prompt('Please enter the number of the lines (between 0-' + range + ')'));
  if (numberOfLines > range) {
      alert('This is too big!')
      checker(range, range2);
  } else if (isNaN(numberOfLines)) {
      alert('This is not a number!')
      checker(range, range2);
  } else {
    numberOfLines = numberOfLines
    let numberOfTiles: any = parseInt(prompt('Please enter the number of the tiles (between 0-' + range2  + ')'));
    if (numberOfTiles > range2) {
        alert('This is too big!')
        checker(range, range2);
    } else if (isNaN(numberOfTiles)) {
        alert('This is not a number!')
        checker(range, range2);
    } else {
      numberOfTiles = numberOfTiles
      draw(numberOfLines, numberOfTiles);
  }}}


checker(40, 20);
