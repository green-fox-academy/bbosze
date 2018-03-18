'use strict'

class Pirate {
  drinkCounter: number = 0;
  isLive: boolean = true;
  isPassedout = false;
  isCaptain: boolean = false;

  drinkSomeRum() {
    !this.isLive ? null :
    this.drinkCounter < 4 ? this.drinkCounter ++ :
    this.drinkCounter === 4 ? (this.drinkCounter ++, this.isPassedout = true) : this.isPassedout = true;
  }

  howsItGoingMate() {
    !this.isLive ? console.log(`He's dead.`) :
    !this.isPassedout ? console.log(`Pour me anudder!`) : console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`)
  }

  die() {
    this.isLive = false;
  }

  brawl(pirate: Pirate) {
    let chances: number = Math.floor(Math.random() * (4) + 1);
      this.isLive && pirate.isLive ?
      chances === 1 ? this.die() :
      chances === 2 ? pirate.die() :
      chances === 3 ? (this.die(), pirate.die()) :
      null : console.log(`One of the pirates is dead they can't brawl.`)
  }
}

class Captain extends Pirate {
  isCaptain: boolean = true

  constructor() {
    super()
  }
}

class Ship {
  pirateCrew: Pirate[] = [];
  numberOfPirates: number = 0;
  captainDrinkCounter: number = 0;
  isCaptainLive: boolean = true;
  isCaptainPassedOut: boolean = false;
  hasThisShipACaptain: boolean = false;
  isWinnerOfAFight: boolean;

  fillShip(pirate: Pirate) {
    this.pirateCrew.unshift(pirate);
    this.numberOfPirates ++
  }

  addCaptain(captain: Captain) {
    this.pirateCrew.push(captain);
    this.numberOfPirates ++
    this.checkCaptain();
  }

  checkCaptain() {
    this.pirateCrew.forEach(captain => {
      captain.isCaptain ? (this.hasThisShipACaptain = true,  this.isCaptainLive = captain.isLive, this.isCaptainPassedOut = captain.isPassedout, this.captainDrinkCounter = captain.drinkCounter) : this.hasThisShipACaptain = false
    })
  }

  checkLivingPirates() {
    this.numberOfPirates = 0;
    this.pirateCrew.forEach(pirate => {
      pirate.isLive ? this.numberOfPirates ++
      : null
    })
    return this.numberOfPirates;
  }

  checkAll() {
    this.checkLivingPirates();
    this.checkCaptain();
  }

  shipStatus() {
    this.checkAll();
    this.hasThisShipACaptain ?
    (console.log(`This ship has ${this.checkLivingPirates()} living pirates it's captain's ${this.isCaptainLive ? `still living` : `dead`}.`), this.isCaptainLive ? console.log(`He drank ${this.captainDrinkCounter} rum(s), he's ${this.isCaptainPassedOut ? `passed out.` : 'sober.'}`) : null) : console.log(`This ship still has no captain, please fill it!`)
  }

  calculateScore(): number {
    this.checkAll()
    let shipsScore = this.numberOfPirates - this.captainDrinkCounter;
    return shipsScore;
  }

  party() {
    for(let i = 0; i < Math.floor(Math.random() * (5) + 1); i++){
      this.pirateCrew.forEach(pirate => {
        pirate.drinkSomeRum();
      })
    }
  }

  crewRandomDie() {
    for(let i = 0; i < Math.floor(Math.random() * (this.pirateCrew.length) + 1); i++){
      this.pirateCrew[i].die();
    }
  }

  shipFight(enemy: Ship) {
    let myScore: number = this.calculateScore();
    console.log(myScore);
    let enemyScore: number = enemy.calculateScore();
    console.log(enemyScore)
    myScore > enemyScore ? (this.isWinnerOfAFight = true, enemy.isWinnerOfAFight = false) : enemyScore > myScore ? (this.isWinnerOfAFight = false, enemy.isWinnerOfAFight = true) :
    !this.isCaptainPassedOut || !enemy.isCaptainPassedOut ? (this.party(), enemy.party(), this.shipFight(enemy)) : //If it's a draw, both crew drinks a random number of rums and fight again.
    this.numberOfPirates > 0 || enemy.numberOfPirates > 0 ? (this.crewRandomDie(), enemy.crewRandomDie(), //If it's  still a draw, random pirates dies in both crew and fight again.
    this.shipFight(enemy)) : (this.isWinnerOfAFight = false, enemy.isWinnerOfAFight = false); //Everybody's dead
    // this.checkAll(); //refresh the status after battling
    // enemy.checkAll();
  }

  battleConsequences() {
    this.isWinnerOfAFight ? this.party() :
    this.crewRandomDie();
  }

  // noCaptainNoFight(enemy: Ship) {
  //   !this.hasThisShipACaptain || !enemy.hasThisShipACaptain ? console.log(`Some ships don't have a captain, the battle can't be started.`) : this.shipFight(enemy)
  //
  // }

  battle(enemy: Ship) {
    // this.noCaptainNoFight(enemy);
    this.shipFight(enemy);
    this.battleConsequences();
    enemy.battleConsequences();
    this.shipStatus();
    enemy.shipStatus();
  }
}

let myShip = new Ship()
myShip.fillShip(new Pirate());
myShip.fillShip(new Pirate());
myShip.fillShip(new Pirate());
myShip.fillShip(new Pirate());
myShip.fillShip(new Pirate());
myShip.fillShip(new Pirate());
myShip.fillShip(new Pirate());
myShip.fillShip(new Pirate());
myShip.fillShip(new Pirate());
myShip.fillShip(new Pirate());
myShip.fillShip(new Pirate());
myShip.fillShip(new Pirate());
myShip.addCaptain(new Captain());

let enemyShip = new Ship();
enemyShip.fillShip(new Pirate());
enemyShip.fillShip(new Pirate());
enemyShip.fillShip(new Pirate());
enemyShip.fillShip(new Pirate());
enemyShip.fillShip(new Pirate());
enemyShip.fillShip(new Pirate());
enemyShip.fillShip(new Pirate());
enemyShip.fillShip(new Pirate());
enemyShip.fillShip(new Pirate());
enemyShip.addCaptain(new Captain);
myShip.battle(enemyShip);
