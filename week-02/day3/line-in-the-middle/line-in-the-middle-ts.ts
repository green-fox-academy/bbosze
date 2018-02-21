'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height;


// draw a green vertical line to the canvas' middle.
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(width/2, 0);
ctx.lineTo(width/2, height/2);
ctx.stroke();


// draw a red horizontal line to the canvas' middle.
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(0, height/2);
ctx.lineTo(width/2, height/2);
ctx.stroke();
