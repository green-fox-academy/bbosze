'use strict'

//
// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount


class Sharpie {
  color: string
  width: number
  private inkAmount: number = 100

  constructor(colors, widths) {
    this.color = colors
    this.width = widths
  }

  use(usage) {
    if(usage < this.inkAmount) {
      this.inkAmount = this.inkAmount - usage
    } else
      console.log('Sharpie will be empty')
  }
}

let sharpie1 = new Sharpie('red', 30)

console.log(sharpie1);
sharpie1.use(50);
console.log(sharpie1);
