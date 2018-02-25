'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.



let num:number = 50;
let w:number = canvas.width;
let h:number = canvas.height;


for (let i:number = 0; i < num; i++) {
  let x:number = i * w / (num - 1);
  let y:number = i * h / (num - 1);
  drawLine(0, y, x, h);
}

for (let i:number = 0; i < num; i++) {
  let x:number = i * w / (num - 1);
  let y:number = i * h / (num - 1);
  drawLine(w, y, x, 0);
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
