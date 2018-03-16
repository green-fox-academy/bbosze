'use strict'

class Pirate {
  drinkCounter: number = 0;
  isLive: boolean = true;
  isPassedout = false;

  drinkSomeRum() {
    !this.isLive ? console.log(`He's dead.`) :
    this.drinkCounter < 4 ? this.drinkCounter++ :
    this.isPassedout = true;
  }

  howsItGoingMate() {
    !this.isLive ? console.log(`He's dead.`) :
    !this.isPassedout ? console.log(`Pour me anudder!`) : console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`)
  }

  die() {
    this.isLive = false;
  }

  brawl(pirate: Pirate) {
    let chances: number = Math.floor(Math.random() * (3) + 1);
      this.isLive && pirate.isLive ?
      chances === 1 ? this.die() :
      chances === 2 ? pirate.die() :
      chances === 3 ? (this.die(), pirate.die()) :
      null : console.log(`One of the pirates is dead they can't brawl.`)
  }
}


let pirate1 = new Pirate();
let pirate2 = new Pirate();
