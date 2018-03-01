'use strict'

class Thing {
    length: number;
    private name: string;
    private completed: boolean;

    constructor(name: string){
        this.name = name;
        this.completed = false;
    }
    public complete() {
        this.completed = true;
    }

    getName() {
      return this.name;
    }

    getComplete() {
      return this.completed;
    }
}

class Fleet {
    private things: Thing[] = [];

    constructor(){}
    add(thing: Thing){
        this.things.push(thing);
    }
    print(i) {
      console.log(this.things[i])
    }

    printAll() {
      for (let i:number = 0; i < this.things.length; i++){
        if (fleet[i].getComplete()) {
          console.log(fleet[i]);
          }
        }
      }
    }


let fleet = new Fleet();

let thing1 = new Thing('Get milk');
let thing2 = new Thing('Remove obstacles');
let thing3 = new Thing('Stand up');


thing3.complete()


console.log(thing1);
console.log(thing3)

fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(new Thing('Eat lunch'));

fleet.printAll();

//fleet.print(0);
//fleet.printAll();

//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */
