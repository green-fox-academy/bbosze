'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.lineWidth = 1;


//
// let grd4 = ctx.createLinearGradient(0, canvas.scrollHeight*0.1, canvas.scrollWidth, canvas.scrollHeight);
// grd4.addColorStop(0.2, 'hsla(0, 0%, 50%, 0');
// grd4.addColorStop(0.5, "hsla(120, 30%, 50%, 1)");
// grd4.addColorStop(0.55, "hsla(120, 30%, 50%, 1)");
// grd4.addColorStop(0.8, 'hsla(0, 0%, 50%, 0');
// grd4.addColorStop(1, 'hsla(0, 0%, 50%, 0');
ctx.fillStyle = '	#F0F8FF';
ctx.fillRect(0, 0, canvas.scrollWidth, canvas.scrollHeight);


let size: number = canvas.width
  ctx.fillRect(0, 0, size, size);

function hexa(x, y, s) {
  ctx.beginPath();
  ctx.moveTo(x, y)
  ctx.strokeStyle = 'orange';
  //ctx.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  ctx.lineTo(x + s, y)
  ctx.lineTo(x + s + s / 2, y + s * Math.sqrt(3) /2)
  ctx.lineTo(x + s, y + s * Math.sqrt(3))
  ctx.lineTo(x , y + s * Math.sqrt(3))
  ctx.lineTo(x - s / 2, y + s * Math.sqrt(3) /2)
  ctx.lineTo(x, y);
  //ctx.fill();
  ctx.stroke();

if(s > 5) {
  hexa(x, y, s/2);
  hexa(x, y + s * Math.sqrt(3) /2, s / 2)
  hexa(x + 1.5 * s / 2, y + s /2  * Math.sqrt(3) /2, s / 2)
    }
  }

hexa(175, 90, 250);
