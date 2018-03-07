'use strict'

// Flyable
// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)
// Create an abstract Vehicle class
// it should have at least 3 fields
// Extend Helicopter class from Vehicle
// implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
// implement yourˇFlyable interface



interface Flyable {
  fly(kilometers: number);
}

abstract class Vehicle {
  abstract engine: string;
  abstract color: string;
abstract engineStart();
}

class Helicopter extends Vehicle implements Flyable {
  color = 'white';
  engine = 'electro'

  engineStart(){

  }

  fly() {

  }


}


export { Flyable };
