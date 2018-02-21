'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawSquare(x: number, y: number) {
  for (let i:number = 0; i < y; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.moveTo(x, x);
    ctx.lineTo(x + x, x);
    ctx.lineTo(x + x, x + x);
    ctx.lineTo(x, x + x );
    ctx.lineTo(x, x);
    ctx.fill()
    ctx.stroke();

    x += x
  }
}

let squaresize:number = 10;
drawSquare(squaresize, squaresize/2);
'use strict';
