'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods


let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune', 'Saturn'];
let godList: string[] = ['Zeus', 'Venus', 'Apollo', 'Hermes', 'Artemis', 'Apollo', 'Ares']
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"

//planetList.push('Saturn');

function putSaturn(planetList) {
  if (planetList.length === 7) {
    planetList.push('Saturn');
  }
}

putSaturn(planetList);
console.log(planetList);

putSaturn(godList);
console.log(godList);

console.log(putSaturn(planetList));

//export = putSaturn;
