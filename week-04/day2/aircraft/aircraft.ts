'use strict'

let a: number = 1

interface Flyable {
  maxAmmo: number
  fight(): number
  refill(x): number
  getType(): string
  getStatus(): string
  isPriority(): boolean
}

class AirCrafts implements Flyable {
  maxAmmo: number = 12;
  ammo: number = 0;
  baseDamage: number = 50;
  damage: number
  type: string

  fight(): number {
    this.damage = this.ammo * this.baseDamage
    this.ammo -= this.ammo;
    return this.damage
  }
  refill(fillAmount): number {
    if (!this.ammo) {
      this.ammo = this.maxAmmo
      return fillAmount -= this.maxAmmo;
    }
  }

  getType():string {
    return this.type;
  }

  getStatus() {
    return `Type ${this.type}:, Ammo ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammo * this.baseDamage}`
  }

  isPriority():boolean {
    return true
  }
}

class F35 extends AirCrafts implements Flyable {
  type: string = 'F35';
}

class F16 extends AirCrafts implements Flyable {
  maxAmmo: number = 8;
  baseDamage: number = 30;
  type: string = 'F16';

  isPriority():boolean {
    return false;
  }
}

class Carrier {
  airCraftFleet: Flyable[] = []
  storedAmmo: number;
  healtPoint: number;

  constructor(storedAmmo: number, healtPoint: number) {
    this.storedAmmo = storedAmmo;
    this.healtPoint = healtPoint;
  }

  addAircraft(plane: Flyable) {
    this.airCraftFleet.push(plane);
  }

  fillAircraft() {
    if (this.storedAmmo < 8) {
      console.log('Not enough ammo to start the process')
    } else {
      for (let i: number = 0; i < this.airCraftFleet.length; i++) {
        if(this.airCraftFleet[i].maxAmmo <= this.storedAmmo) {
          if(this.airCraftFleet[i].isPriority()) {
            this.airCraftFleet[i].refill(this.storedAmmo)
            this.storedAmmo -= this.airCraftFleet[i].maxAmmo;
          }
        }
      }
      for (let i: number = 0; i < this.airCraftFleet.length; i++) {
        if(this.airCraftFleet[i].maxAmmo <= this.storedAmmo) {
          if(this.airCraftFleet[i].isPriority() === false) {
            this.airCraftFleet[i].refill(this.storedAmmo)
            this.storedAmmo -= this.airCraftFleet[i].maxAmmo;
          }
        }
      }
    }
  }

  carrierFight(enemy: Carrier) {
    if (this.storedAmmo >= 8 || enemy.storedAmmo >= 8) {
      let myDamage: number = 0;
      let enemyDamage: number = 0;
      this.fillAircraft()
      enemy.fillAircraft()
      for (let i: number = 0; i < this.airCraftFleet.length; i++) {
        myDamage += this.airCraftFleet[i].fight()
      } enemy.healtPoint -= myDamage;
      for (let i: number = 0; i < enemy.airCraftFleet.length; i++) {
        enemyDamage += enemy.airCraftFleet[i].fight()
      } this.healtPoint -= enemyDamage;
        console.log(`Current round: my damage power is ${myDamage}, enemy's health: ${enemy.healtPoint}.`);
        console.log(`Current round: enemy's damage power is ${enemyDamage}, my carrier's health: ${this.healtPoint}.`);

        if (this.healtPoint > 0 && enemy.healtPoint > 0) {
        this.carrierFight(enemy);
      } else if (this.healtPoint > 0 && enemy.healtPoint <= 0) {
        console.log(`The fight is over, my boat wins.`)
      } else if (this.healtPoint <= 0 && enemy.healtPoint > 0) {
        console.log(`The fight is over, enemy boat wins.`)
      } else if (this.healtPoint <= 0 && enemy.healtPoint <= 0) {
        console.log(`The fight is over, everybody's dead.`)
      }
    } else {
      console.log(`Not enough ammo to continue the fight.`)
    }
  }
}

let plane1 = new F35();
let plane2 = new F16();
let enemy1 = new F35();
let enemy2 = new F16();
let enemy3 = new F35();
let enemy4 = new F16();

let myCarrier = new Carrier(20000, 200000);
myCarrier.addAircraft(plane1 = new F35());
myCarrier.addAircraft(plane2 = new F16());

let myEnemy = new Carrier(10000, 20000);
myEnemy.addAircraft(enemy1 = new F16());
myEnemy.addAircraft(enemy2 = new F35());
myEnemy.addAircraft(enemy3 = new F35());
myEnemy.addAircraft(enemy4 = new F35())
myCarrier.carrierFight(myEnemy);
