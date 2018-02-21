'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.


let sizes: any[] = [
  { a: 10, b: 30, c: 300, d: 300, e: 230, f: 320, z: 'red'},
  { a: 100, b: 20, c: 200, d: 300, e: 30, f: 120, z: 'gold'},
  { a: 10, b: 30, c: 140, d: 40, e: 280, f: 220, z: 'blue'}
];


function drawRect(obj: any[]) {
  for (let i:number =0; i < obj.length; i++) {
    ctx.beginPath();
    ctx.strokeStyle = obj[i].z;
    ctx.moveTo(obj[i].a, obj[i].b);
    ctx.lineTo(obj[i].c, obj[i].d);
    ctx.lineTo(obj[i].e, obj[i].f);
    ctx.lineTo(obj[i].a, obj[i].b)
    ctx.stroke();
  }

}

drawRect(sizes);
