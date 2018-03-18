'use strict'

class Aquarium {
  fishes: any[] = [];

  add(newFish: Fish) {
    this.fishes.push(newFish);
  }

  feedAllFishes() {
    this.fishes.forEach(fish => {fish.feed() })

    // for (let i: number = 0; i < this.fishes.length; i++) {
    //   this.fishes[i].feed();
    // }
  }

  status() {
    this.fishes.forEach(fish => {console.log(fish.status)})
    // for (let i: number = 0; i < this.fishes.length; i++) {
    //   console.log(this.fishes[i].status);
    // }
  }

  removeOversizedFishes() {
    this.fishes.forEach((fish, i) => {
      fish.weight >= 11 ?
        this.fishes.splice(i, 1)
        : null;
    });
  }
}

class Fish {
  name: string;
  weight: number;
  color: string;

  constructor(name: string, weight: number, color: string) {
    this.name = name;
    this.weight = weight;
    this.color = color;
  }

  feed() {
    this.weight += 1;
  }

  get status() {
    return `${this.name}, weigth: ${this.weight}, color: ${this.color}.`
  }

}

class Clownfish extends Fish {
  stripecolor: string;
  constructor(name: string, weight: number, color: string, stripecolor: string ) {
    super(name, weight, color)
    this.stripecolor = stripecolor;
  }
  get status() {
    return `${this.name}, weigth: ${this.weight}, color: ${this.color}, stripe color: ${this.stripecolor}.`
  }
}

class Tang extends Fish {
  shortMemory: boolean;

  constructor(name: string, weight: number, color: string, shortMemory: boolean) {
    super(name, weight, color);
    this.shortMemory = shortMemory;
  }

  get status() {
    return `${this.name}, weigth: ${this.weight}, color: ${this.color}, short-term memory loss: ${this.shortMemory}.`
  }

}

class Koi extends Fish {
  constructor(name, weight, color) {
    super(name, weight, color)
  }

  feed() {
    this.weight += 2;
  }
}

const aquarium: Aquarium = new Aquarium();

aquarium.add(new Koi('Nami', 9, 'pink'));
aquarium.add(new Tang('Dory', 8, 'blue', true));
aquarium.add(new Tang('Bubbles', 10, 'yellow', false));
aquarium.add(new Clownfish('Nemo', 5, 'orange', 'white'));

aquarium.status();
aquarium.feedAllFishes();
aquarium.removeOversizedFishes();
aquarium.status();
