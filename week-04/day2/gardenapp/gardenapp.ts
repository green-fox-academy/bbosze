'use strict'

class Plant {
  private color: string;
  waterLevel: number;
  type: string;

  constructor(color: string) {
    this.color = color;
    this.waterLevel = 0;
  }

  waterIt(amount: number) {
    this.waterLevel += amount;
  }

  needsWater(): boolean {
    return this.waterLevel < 5;
  }

  get plantColor(): string {
    return this.color;
  }

  get plantType(): string {
    return this.type;
  }

}

class Flower extends Plant {
  constructor(color: string) {
    super(color)
    this.type = 'flower';
  }
  waterIt(amount: number) {
    this.waterLevel += amount * 0.75;
  }
}

class Tree extends Plant {
  constructor(color: string) {
    super(color)
    this.type = 'tree';
  }

  needsWater(): boolean {
    return this.waterLevel < 10;
  }

  waterIt(amount: number) {
    this.waterLevel += amount * 0.9;
  }
}

class Garden {
  plants: Plant[];

  constructor() {
    this.plants = []
  }

  addPlant(plant: Plant) {
    this.plants.push(plant);
  }
  listPlants() {
    for (let i:number = 0; i < this.plants.length; i++) {
      console.log(this.plants[i])
    }
  }
  waterPlants(amount: number) {
    let thirstyPlants = 0;
    for (let i:number = 0; i < this.plants.length; i++) {
      if (this.plants[i].needsWater()) {
        thirstyPlants += 1
      }
    }
    if (thirstyPlants !== 0) {
      const dose = amount / thirstyPlants
      for (let i:number = 0; i < this.plants.length; i++) {
        if (this.plants[i].needsWater()) {
          this.plants[i].waterIt(dose);
        }
      }
    }
  }
}

let garden = new Garden;
garden.addPlant(new Flower('white'));
garden.addPlant(new Tree('purple'));

console.log(garden.plants);
garden.waterPlants(40);
console.log(garden.plants);

//
// class Garden {
//   name: string;
//   plants: Plant[] = [];
//   amountOfWater: number = 0;
//   constructor(name: string) {
//   this.name = name;
//   }
//
//   addPlant(plantName) {
//     this.plants.push(plantName);
//   }
//
//   watering(amount) {
//     this.amountOfWater = amount;
//     let measuringArray: any[] = []
//     this.isThirsty()
//     for(let i:number = 0; i < this.plants.length; i++) {
//       if (this.plants[i].thirsty === true) {
//         measuringArray.push(1);
//       }
//     }
//     if (measuringArray.length !== 0) {
//       this.amountOfWater = this.amountOfWater / measuringArray.length;
//     } else {
//       this.amountOfWater = this.amountOfWater / this.plants.length;
//     }
//
//     for(let i:number = 0; i < this.plants.length; i++) {
//       if (this.plants[i].thirsty) {
//         this.plants[i].waterLevel += this.amountOfWater * 0.75;
//       }
//     }
//     this.isThirsty()
//     this.waterCheck();
//   }
//
//   isThirsty() {
//     for(let i:number = 0; i < this.plants.length; i++) {
//       if (this.plants[i].type === 'flower' && this.plants[i].waterLevel <= 5) {
//           this.plants[i].thirsty = true;
//       }  else if (this.plants[i].type === 'tree' && this.plants[i].waterLevel <= 10) {
//           this.plants[i].thirsty = true;
//       } else {
//           this.plants[i].thirsty = false;
//       }
//     }
//   }
//
//   waterCheck() {
//     for(let i:number = 0; i < this.plants.length; i++) {
//       if (this.plants[i].thirsty) {
//         console.log(this.plants[i].name + ' is a thirsty '+ this.plants[i].type);
//       } else if (this.plants[i].thirsty === false) {
//         console.log(this.plants[i].name + ' is not a thirsty '+ this.plants[i].type);
//       }
//     }
//   }
// }
//
// class Plant {
//   name: string;
//   waterLevel: number = 0;
//   type: string;
//   thirsty: boolean;
//
// constructor(name: string, waterLevel?: number) {
//     this.name = name;
//
//   }
// }
//
// class Flower extends Plant {
//   type: string = 'flower';
//   constructor(name: string, waterLevel?: number, thirsty?: boolean) {
//     super(name, waterLevel);
//   }
// }
//
// class Tree extends Plant {
//   type: string = 'tree';
//   constructor(name: string, waterLevel?: number) {
//     super(name, waterLevel);
//   }
// }
//
// let kiskertem = new Garden('Kiskertem')
//
// let rozsafa = new Tree('Rózsafa', 0)
// let tolgyfa = new Tree('Tölgyfa', 0)
// let liliom = new Flower('Liliom', 0)
// let tulipan = new Flower('Tulipán', 0)
//
// kiskertem.addPlant(rozsafa);
// kiskertem.addPlant(tolgyfa);
// kiskertem.addPlant(liliom);
// kiskertem.addPlant(tulipan);

// kiskertem.waterCheck();
// kiskertem.watering(40);
// kiskertem.watering(80);
// kiskertem.isThirsty();
