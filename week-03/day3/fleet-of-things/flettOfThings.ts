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

    get names() {
      return this.name;
    }

    get completer() {
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
        if (this.things[i].completer) {
          console.log('[ ] ' + this.things[i].names);
          }
         else {
           console.log('[X] ' + this.things[i].names);
         }
        }
      }
    }

let fleet = new Fleet();

let thing1 = new Thing('Get milk');
let thing2 = new Thing('Remove obstacles');
let thing3 = new Thing('Stand up');
let thing4 = new Thing('Eat lunch');

thing2.complete()
thing4.complete()

// console.log(thing1);
// console.log(thing3)

fleet.add(thing1); //OR fleet.add(new Thing('Eat lunch'));
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);



fleet.printAll();
