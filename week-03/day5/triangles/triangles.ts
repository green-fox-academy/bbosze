'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.lineWidth = 1;


let size: number = 600
let x = 0;
let y = 0;


ctx.fillStyle = '#b0e79b';
ctx.fillRect(0, 0, 600, 600);


function triangles(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size/2, y + size);
  ctx.lineTo(x, y);
  ctx.stroke()

  if (size > 5  ) {
    triangles(x, y, size / 2);
    triangles(x + size / 2, y, size / 2);
    triangles(x + size / 4, y + size / 2, size / 2);
  }

}

triangles(x, y, size)

// ctx.beginPath();
// ctx.moveTo(x, y);
// ctx.lineTo(x + size, y);
// ctx.lineTo(x + size / 2, y + size);
// ctx.lineTo(x, y);
// ctx.stroke()
//
// ctx.beginPath();
// ctx.moveTo(size, y);
// ctx.lineTo(size + size, 0);
// ctx.lineTo(x + size / 2, size);
// ctx.lineTo(size, y);
// ctx.stroke()
//
// ctx.beginPath();
// ctx.moveTo(x + size / 4, y + size /2);
// ctx.lineTo(x + size / 2 / 2 * 3, y + size / 2);
//
// ctx.lineTo(x + size / 4, y + size /2);
// ctx.stroke()
