'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

let w:number = canvas.width;
let h:number = canvas.height;

ctx.fillRect(0, 0, w, h);

for (let i:number = 0; i < 30; i++) {
  let randWidth: number = Math.random() * (w - 0) + 0;
  let randHeight: number = Math.random() * (h - 0) + 0;
  let randColor: number = Math.random() * (255 - 0) + 0;
  ctx.fillStyle = 'rgb(' + randColor + ',' + randColor + ',' + randColor + ')';
  ctx.fillRect(randWidth, randHeight, 4, 4);
}
