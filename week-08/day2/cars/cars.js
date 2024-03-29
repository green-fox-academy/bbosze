'use strict';
// 1st
// Call the ride method of the volvo, with 42 as a parameter

let volvo = {
  type: "Volvo",
  fuel: 23,
  consumption: 0.06,
  kms: 43000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption;
  }
};

// 2nd
// Call the refuel function on the ferrari object using the bind method, with
// 52 as a parameter

let ferrari = {
  type: "Ferrari",
  fuel: 0,
  consumption: 0.12,
  kms: 9000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption;
  }
};


function refuel(liters) {
  this.fuel += liters
}

// 3rd
// Create a tesla object that has 3 properties
//  - type: string
//  - battery: number
//  - kms: number
//  - consunption: number
// And a method called ride, that takes a parameter celled km,
// and increments kms with it, then drains the battery based on the consumpltion

let tesla = {
  type: "Tesla",
  battery: 10,
  consumption: 0.1,
  kms: 0,
  ride: function (km) {
    this.kms += km;
    this.battery -= km * this.consumption;
  }
}

volvo.ride(42);
console.log(volvo.kms);

let fuelFerrari = refuel.bind(ferrari);
fuelFerrari(42);
// refuel.bind(ferrari)(42);
console.log(ferrari.fuel);


tesla.ride(36);
console.log(tesla.kms);
console.log(tesla.battery);
