'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.


let coordinates: any[] = [
  { x: 200, z: 'red'},
  { x: 180, z: 'orange'},
  { x: 160, z: 'yellow'},
  { x: 140, z: 'green'},
  { x: 120, z: 'blue'},
  { x: 100, z: 'indigo'},
  { x: 80, z: 'violet'}
];


function drawSquare(obj: any[]) {
  for (let i:number = 0; i < obj.length; i++) {
    ctx.fillStyle = obj[i].z;
    ctx.beginPath();
    ctx.moveTo((canvas.width/2-obj[i].x/2), canvas.height/2-(obj[i].x/2));
    ctx.lineTo((canvas.width/2+obj[i].x/2), canvas.height/2-(obj[i].x/2));
    ctx.lineTo((canvas.width/2+obj[i].x/2), canvas.height/2+(obj[i].x/2));
    ctx.lineTo((canvas.width/2-obj[i].x/2), canvas.height/2+(obj[i].x/2))
    ctx.lineTo((canvas.width/2-obj[i].x/2), canvas.height/2-(obj[i].x/2))
    ctx.fill();
    ctx.stroke();
  }
}
drawSquare(coordinates);


//Square drawing with one parameter
/*
function drawSquare(x: number) {
  for (let i:number = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.moveTo((canvas.width/2-x/2), canvas.height/2-x/2);
    ctx.lineTo((canvas.width/2+x/2), canvas.height/2-x/2);
    ctx.lineTo((canvas.width/2+x/2), canvas.height/2+x/2);
    ctx.lineTo((canvas.width/2-x/2), canvas.height/2+x/2)
    ctx.lineTo((canvas.width/2-x/2), canvas.height/2-x/2)
    ctx.stroke();
    x = x + 10;
  }
}
drawSquare(100);
*/
