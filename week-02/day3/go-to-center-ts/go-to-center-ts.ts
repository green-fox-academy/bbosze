'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.


function drawLines(x, y, z) {
  ctx.beginPath();
  ctx.strokeStyle = z;
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width/2, canvas.height/2);
  ctx.stroke();
}

//Modifying the for cicles 'i' variable
/*
for (let i: number = 0; i < 300; i = i+100) {
drawLines(i, 10, 'red');
}
*/

let xcord: number[] = [10, 330, 300];
let ycord: number[] = [60, 60, 300];
let color: string[] = ['red', 'gold', 'green'];

for (let i = 0; i < xcord.length; i++) {
  drawLines(xcord[i], ycord[i], color[i]);
}
