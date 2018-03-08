'use strict'

export class Integers {
  listOfIntegers: number[] = []

  constructor(numbers: number[]) {
    this.listOfIntegers = numbers
  }

  sumOfListElements() {
    let result: number = 0;
    for(let i: number = 0; i < this.listOfIntegers.length; i++) {
      result += this.listOfIntegers[i];
    }
    return result
  }
}


let newNumbers = new Integers([1, 3, 5, 6]);
console.log(newNumbers);
console.log(newNumbers.sumOfListElements());
