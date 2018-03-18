'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

class gameArea {
  startGame() {

  }



}

class Hero {
  width: number;
  height: number;
  color: string;
  xPosition: number;
  yPosition: number;
  backgroundColor: string = '#b0e79b'
  speedX: number = 0;
  speedY: number = 0;
  key: any; //still not works maybe not necessary
  image = document.getElementById('heroright');

  constructor(width, height, color, xPosition, yPosition) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.xPosition = xPosition;
    this.yPosition = yPosition;

  }

  drawbackground() {
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  drawHero() {
    //ctx.fillStyle = this.color;
    ctx.drawImage(this.image, this.xPosition, this.yPosition);
  }

  clearHero() {
    ctx.clearRect(this.xPosition, this.yPosition, this.width, this.height);
  }

  updateGameArea() {
    this.clearHero();
    this.drawbackground();
    //this.speedY = 0;
    if (myHero.key && myHero.key === 37) {this.speedY = -1; }
    this.newPosition()
    this.drawHero();
  }

  interval() {
      setInterval(function() {myHero.updateGameArea()}, 20);
     //Why doesn't work with 'this'?
  }

  newPosition() {
    this.xPosition += this.speedX;
    this.yPosition += this.speedY;
    this.hitWallDown();
    this.hitWallUp();
    this.hitWallLeft();
    this.hitWallRight();
  }

  hitWallDown() {
    if(this.yPosition > canvas.height - 45) {
      this.yPosition = canvas.height - 45;
    }
  }

  hitWallUp() {
    if(this.yPosition < 0) {
      this.yPosition = 0;
    }
  }

  hitWallLeft() {
    if(this.xPosition < 0) {
      this.xPosition = 0;
    }
  }

  hitWallRight() {
    if(this.xPosition > canvas.width - 30) {
      this.xPosition = canvas.width - 30;
    }
  }

  moveUp() {
    if (this.yPosition > 0) {
      this.speedY -= 1;
    }
    this.image = document.getElementById('heroup');
  }

  moveDown() {
    this.speedY += 1;
    this.image = document.getElementById('herodown');
  }

  moveLeft() {
    this.speedX -= 1;
    this.image = document.getElementById('heroleft');
  }

  moveRight() {
    this.speedX += 1;
    this.image = document.getElementById('heroright');
  }


  stopMove() {
    this.speedX = 0;
    this.speedY = 0;
  }

  keyUp() {
    window.addEventListener('keydown', function (e) {
      myHero.key = e.keyCode;  //NOT OK WITH THIS
    })
  }

  keyDown() {
    window.addEventListener('keydown', function (e) {
      myHero.key = false;
    })
  }

}

let myGameArea = new gameArea();
let myHero = new Hero(30, 30, 'red', 300, 120)

myHero.interval()







//let startGame = () => myGameArea.start();
// let myGameArea = {
//   start: () => {
//     this.ctx = this.canvas.getContext('2d');
//   }
// }
