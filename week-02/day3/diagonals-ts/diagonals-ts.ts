'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

ctx.lineWidth = 3;

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(200, 30);
ctx.lineTo(400, 30);
ctx.lineTo(400, 230);
ctx.lineTo(200, 230);
ctx.lineTo(200, 30);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(300, 130);
ctx.lineTo(500, 130);
ctx.lineTo(500, 330);
ctx.lineTo(300, 330);
ctx.lineTo(300, 130);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'gold';
ctx.moveTo(200, 30);
ctx.lineTo(300, 130);
ctx.moveTo(200, 230);
ctx.lineTo(300, 330);
ctx.moveTo(400, 30);
ctx.lineTo(500, 130);
ctx.moveTo(400, 230);
ctx.lineTo(500, 330);
ctx.stroke();
