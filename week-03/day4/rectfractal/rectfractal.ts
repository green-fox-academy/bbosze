'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.lineWidth = 1;

let size: number = canvas.width
  ctx.fillStyle = '#b0e79b';
  ctx.fillRect(0, 0, size, size);
  let x = 0;
function prototype(size, x, y) {
  ctx.strokeStyle = 'grey';

  ctx.beginPath();
  ctx.moveTo(x + size / 3, y + 0);
  ctx.lineTo(x + size / 3, y + size);
  ctx.moveTo(x + size / 3 * 2, y + 0);
  ctx.lineTo(x + size / 3 * 2, y + size);
  ctx.moveTo(x, y + size / 3);
  ctx.lineTo(x + size, y + size / 3);
  ctx.moveTo(x, y + size / 3 * 2);
  ctx.lineTo(x + size, y + size / 3 * 2);
  ctx.stroke();

  if(size > 20) {
    prototype(size / 3, x + size / 3, y);
    prototype(size / 3, x + size / 3 * 2, y + size /3);
    prototype(size / 3, x + size / 3, y + size /3 * 2);
    prototype(size / 3, x, y + size /3);
  }

  // x =  size / 3
  // size = size / 3;
  //
  //
  // ctx.beginPath();
  // ctx.moveTo(x + size / 3, 0);
  // ctx.lineTo(x + size / 3, size);
  // ctx.moveTo(x + size / 3 * 2, 0);
  // ctx.lineTo(x + size / 3 * 2, size);
  // ctx.moveTo(x, size / 3);
  // ctx.lineTo(x + size, size / 3);
  // ctx.moveTo(x, size / 3 * 2);
  // ctx.lineTo(x + size, size / 3 * 2);
  // ctx.stroke();
  //
  // x = size + size / 3
  // size = size / 3;
  //
  // ctx.moveTo(x + size / 3, 0);
  // ctx.lineTo(size * 4 + size / 3, size);
  // ctx.moveTo(size * 4 + size / 3 * 2, 0);
  // ctx.lineTo(size * 4 + size / 3 * 2, size);
  // ctx.moveTo(size * 4, size / 3);
  // ctx.lineTo(size * 4 + size, size / 3);
  // ctx.moveTo(size * 4, size / 3 * 2);
  // ctx.lineTo(size * 4 + size, size / 3 * 2);
  // ctx.stroke();

  // size = size / 3;
  // ctx.moveTo(size * 13 + size / 3, 0);
  // ctx.lineTo(size * 13 + size / 3, size);
  // ctx.moveTo(size * 13 + size / 3 * 2, 0);
  // ctx.lineTo(size * 13 + size / 3 * 2, size);
  // ctx.moveTo(size * 13, size / 3);
  // ctx.lineTo(size * 13 + size, size / 3);
  // ctx.moveTo(size * 13, size / 3 * 2);
  // ctx.lineTo(size * 13 + size, size / 3 * 2);
  // ctx.stroke();
  //
  // size = size / 3;
  // ctx.moveTo(size * 40 + size / 3, 0);
  // ctx.lineTo(size * 40 + size / 3, size);
  // ctx.moveTo(size * 40 + size / 3 * 2, 0);
  // ctx.lineTo(size * 40 + size / 3 * 2, size);
  // ctx.moveTo(size * 40, size / 3);
  // ctx.lineTo(size * 40 + size, size / 3);
  // ctx.moveTo(size * 40, size / 3 * 2);
  // ctx.lineTo(size * 40 + size, size / 3 * 2);
  // ctx.stroke();
}

//0 1 3 12 39
prototype(size, 0, 0);

// size = size /3;
// ctx.beginPath();
// ctx.moveTo(size * 3 + size + size / 3, 0);
// ctx.lineTo(size * 3 + size + size / 3, size);
// ctx.moveTo(size * 3 + size + size / 3 * 2, 0);
// ctx.lineTo(size * 3 + size + size / 3 * 2, size);
// ctx.moveTo(size * 3 + size, size / 3);
// ctx.lineTo(size * 3 + size * 2, size / 3);
// ctx.moveTo(size * 3 + size, size / 3 * 2);
// ctx.lineTo(size * 3 + size * 2, size / 3 * 2);
//  ctx.stroke();
