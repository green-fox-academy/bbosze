'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.


function toCenter(grow)  {
  let a: number = 0;
  let b:number = 0;
  for (let i:number = 0; i <= canvas.height/grow; i++) {
    if (i === 0) {
      for (let j: number = 0; j <= canvas.width/grow; j++){
        ctx.beginPath();
        ctx.strokeStyle = 'red';
          ctx.moveTo(a, b);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
        a += grow;
      }}
    else if (i === canvas.height/grow) {
      a = 0;
      b = canvas.height;
      for (let i: number = 0; i <= canvas.width/grow; i++){
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(a, b);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
        a += grow;
      }
    } else {
      b = i * grow;
      a = 0;
        for (let i: number = 0; i < 2; i++){
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(a, b);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
        a += canvas.width;
 }}}}

toCenter(25);
