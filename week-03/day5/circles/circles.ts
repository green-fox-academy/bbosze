'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = '	#F0F8FF';
ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);


let size: number = canvas.width / 2
let x = 300;
let y = 300;
ctx.strokeStyle = 'orange';

function drawCircle(x, y, size) {
  ctx.beginPath();
  ctx.arc(x , y , size, 0, 2*Math.PI);
  ctx.stroke();

  if (size > 10) {
    drawCircle(x, y - size / 2, size / 2)
    drawCircle(x - size * Math.sqrt(3) / 4, y + size / 4, size / 2)
    drawCircle(x + size * Math.sqrt(3) / 4, y + size / 4, size / 2)
  }

}

drawCircle(x, y, size);

ctx.beginPath();
ctx.arc(x, y - size / 2, size / 2, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(x - size * Math.sqrt(3) / 4, y + size / 4, size / 2, 0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(x + size * Math.sqrt(3) / 4, y + size / 4, size / 2, 0,2*Math.PI);
ctx.stroke();



//
// size = size / 2
// ctx.beginPath();
// ctx.arc(x - size * Math.sqrt(3) / 4, size + size / 4, size / 2, 0,2*Math.PI);
// ctx.stroke();
// //
// // ctx.beginPath();
// // ctx.arc(300 + size * Math.sqrt(3) / 4, size + size / 4, size / 2, 0,2*Math.PI);
// // ctx.stroke();
