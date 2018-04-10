// We should know about each sharpie:
// color (which should be a string)
// width (which will be a number)
// inkAmount (another number)
// When instantiating a Sharpie, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount by the width
// Write a loop that consumes all the sharpie's ink.
// Make sure your loop works with any inkAmount, so your code figures out when it's out of ink.


class Sharpie {
  constructor(color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
    this.currentAmount = this.inkAmount;
  }

  use() {
    this.inkAmount -= this.width;
  }

  useAll() {
    for (let i = 0; i < this.currentAmount / this.width -1 ; i++) {
      this.use()
    }
  }
}

let sharpie1 = new Sharpie('red', 7);
let sharpie2 = new Sharpie('green', 13);

sharpie1.useAll();
console.log(sharpie1.inkAmount);
sharpie2.useAll();
console.log(sharpie2.inkAmount);
