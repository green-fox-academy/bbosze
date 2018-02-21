const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


//With lines

function drawSquare(x: number, y: number, z: number,) {
    for (let i:number = 0; i < y; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.moveTo(x, x);
    ctx.lineTo(x + z, x);
    ctx.lineTo(x + z, x + z);
    ctx.lineTo(x, x + z );
    ctx.lineTo(x, x);
    ctx.fill()
    ctx.stroke();

    x += z
  }
}

let squaresize:number = 10;
drawSquare(10, 15, 10);


//With fillrect
