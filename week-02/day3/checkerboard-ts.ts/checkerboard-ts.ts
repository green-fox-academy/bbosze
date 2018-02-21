'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

/*
function drawSquare(x: number, y: number) {
    for (let i:number = 0; i < canvas.width/y/2; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.moveTo(x , 0);
    ctx.lineTo(x + y, 0);
    ctx.lineTo(x + y, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, 0);
    ctx.fill()
    ctx.stroke();
    x += y * 2
      }
}

drawSquare(20, 30);
*/

function drawSquare(size: number) {
  let x: number = size;
  let y: number = size;
  let z: number = 0;
  for (let j:number = 0; j < canvas.height/y; j++) {
      if (j % 2 === 0) {
      x = size;
      z = size * (j + 1);
      for (let i:number = 0; i < canvas.width/y/2; i++) {
      z = j * y+1
      ctx.fillStyle = 'purple';
      ctx.fillRect(x, z, y, y);
      x += y * 2
   }
 } else  {
   x = 0;
   z = size * (j);
   for (let i:number = 0; i < canvas.width/y/2; i++) {
   ctx.fillStyle = 'purple';
   ctx.fillRect(x, z, y, y);
   x += y * 2;
}
}
}
}


drawSquare(21);

//48  8 x 6
/*
100 0, 300 0, 500 0,
0 100, 200 100, 400 100,
100 300, 300 300, 500 300,
0 300, 200 300, 400 300,

j = 12
12 items altogether
4 x 3 items

100 300


i = 3
3 items in a row

1 2 3
4 5 6
7 8 9
10 11 12



i (4 items in a row)
1 2 3 4
5 6 7 8
9 10 11 12

*/
