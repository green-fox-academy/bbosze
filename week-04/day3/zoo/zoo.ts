'use strict'
import { Flyable } from '../flyable/flyable'


abstract class Animal {
  name: string;
  age: number;
  gender: string;
  hunger: number = 50;
  tiredness: number = 50;

  constructor(name) {
    this.name = name
  }
  getName(){
    return this.name
  }

  abstract breed()

  sleep() {
  }
}

class Mammal extends Animal {
  breed() {
    return 'valahogy'
  }

}

class Reptile extends Animal {
  breed() {
    return 'mint egy gyík'
  }

}

class Bird extends Animal implements Flyable {
  breed() {
    return 'mint egy madár'
  }

  fly(kilometers: number) {
    this.tiredness -= kilometers;
  }

}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());

bird.fly(30);
console.log(bird.tiredness);
