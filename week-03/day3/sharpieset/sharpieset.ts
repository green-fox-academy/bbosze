'use strict'

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

class Sharpie {
  color: string;
  width: number;
  private inkAmount: number = 100;
  usable: boolean = true;

  constructor(colors, widths) {
    this.color = colors
    this.width = widths
  }

  use(usage) {
    //if(usage < this.inkAmount) {
      this.inkAmount = this.inkAmount - usage
  //  } else
    //  console.log('Sharpie will be empty')
  }
  get amount() {
    return this.inkAmount;
  }
}

let sharpie1 = new Sharpie('blue', 40)
let sharpie2 = new Sharpie('red', 30)
let sharpie3 = new Sharpie('green', 40)
let sharpie4 = new Sharpie('yellow', 20)


class SharpieSet {
  sharpies: Sharpie[] = [];
  add(newItem: Sharpie){
  this.sharpies.push(newItem);
      }

  countUsable() {
    for (let i:number = 0; i < this.sharpies.length; i++) {
      if(this.sharpies[i].amount <= 0) {
        this.sharpies[i].usable = false;
      }
    }
  }
  removeTrash() {
    for (let i:number = 0; i < this.sharpies.length; i++) {
      if(this.sharpies[i].usable === false) {
        this.sharpies.splice(i, 1);
      }
    }
  }
}

let groupOfSharpies = new SharpieSet()

groupOfSharpies.add(sharpie1);
groupOfSharpies.add(sharpie2);
groupOfSharpies.add(sharpie3);
groupOfSharpies.add(sharpie4);
sharpie1.use(2000);

groupOfSharpies.countUsable();
console.log(groupOfSharpies);
groupOfSharpies.removeTrash();
//groupOfSharpies.sharpies.splice(0, 1)
console.log(groupOfSharpies);
