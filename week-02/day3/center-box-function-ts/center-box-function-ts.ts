
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.


//Solution with fillRect
/*
let squares: any[] = [
  { x: 100, z: 'red'},
  { x: 50, z: 'gold'},
  { x: 25, z: 'blue'}
];


function drawSquare(obj: any[]) {
  for (let i:number = 0; i < obj.length; i++) {
    ctx.fillStyle = obj[i].z;
    ctx.fillRect(canvas.width/2-(obj[i].x/2), canvas.height/2-(obj[i].x/2), obj[i].x, obj[i].x);
  }

}

drawSquare(squares);
*/

//Solution with lineTo

let size: number[] = [200, 100, 300];

function drawSquare(obj: any[]) {
  for (let i:number = 0; i < obj.length; i++) {
    ctx.beginPath();
    ctx.moveTo((canvas.width/2-obj[i]/2), canvas.height/2-(obj[i]/2));
    ctx.lineTo((canvas.width/2+obj[i]/2), canvas.height/2-(obj[i]/2));
    ctx.lineTo((canvas.width/2+obj[i]/2), canvas.height/2+(obj[i]/2));
    ctx.lineTo((canvas.width/2-obj[i]/2), canvas.height/2+(obj[i]/2))
    ctx.lineTo((canvas.width/2-obj[i]/2), canvas.height/2-(obj[i]/2))
    ctx.stroke();
  }
}

drawSquare(size);
