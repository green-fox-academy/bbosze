'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.


let height:number = canvas.height;
let width:number = canvas.width;


function centeredSuare(x) {
  ctx.fillRect(canvas.width/2-(x/2), canvas.height/2-(x/2), x, x);
}

centeredSuare(200)
