'use strict'
//
// Counter
// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
  static count: number = 0;
  number: number

  constructor(number?:number) {
    this.number = number;
    if (number) {
      Counter.count += number
    } else
      Counter.count ++
    console.log('New added value is: ' + this.number);
    console.log('Current counter value: ' + Counter.count.toString());
  }

  resetCount() {
    Counter.count = 0;
    console.log('Current value: ' + Counter.count.toString());
  }
}

let newNumber1 = new Counter(213);
let newNumber2 = new Counter(203);
let newNumber3 = new Counter;

newNumber1.resetCount();
