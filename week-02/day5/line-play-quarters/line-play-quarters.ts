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
    let y:number = i * h / tiles / (num - 1) + k * h / tiles;
    drawLine(w / tiles * j, y, x, h / tiles * (k + 1));
    drawLine(w / tiles * (j+1), y, x, h / tiles * k);
}}}}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.strokeStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

//PROMPT CHECKING function
let numberOfLines: number = parseInt(prompt('PLease enter the number of the lines'));
if (numberOfLines > 50) {
    numberOfLines = parseInt(prompt("It is too big. Please enter a number from 1 to 50", ""));
} else if (isNaN(numberOfLines)) {
    numberOfLines = parseInt(prompt("It is not a number. Please enter a number from 1 to 100", ""));
} else {
}

let numberOfTiles: number = parseInt(prompt('PLease enter the number of the tiles'));
if (numberOfTiles > 16) {
    numberOfTiles = parseInt(prompt("It is too big. Please enter a number from 1 to 50", ""));
} else if (isNaN(numberOfTiles)) {
    numberOfTiles = parseInt(prompt("It is not a number. Please enter a number from 1 to 100", ""));
} else {

}


draw(numberOfLines, numberOfTiles);
