'use strict'

class Human {
  private gender: number;
  constructor(gender: number) {
    this.gender = gender;
  }
}

let tom = new Human(1);

console.log(tom);
