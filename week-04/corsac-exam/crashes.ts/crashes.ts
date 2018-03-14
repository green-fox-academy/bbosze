'use strict'
const fs = require('fs');


function weatherCheck() {
  let splittedArray: any[] = fs.readFileSync('crash-incidents.txt', 'utf-8').split(';');

  let goodWeatherCrashes: number = 0;
  let badWeatherCrashes: number = 0;
  for (let i: number = 5; i < splittedArray.length; i += 7) {
    if (splittedArray[i] === 'CLOUDY' || splittedArray[i] === 'CLEAR') {
      goodWeatherCrashes += 1
    }
    else if (splittedArray[i] === 'RAIN' || splittedArray[i] === 'FREEZING RAIN' || splittedArray[i] === 'SNOW' || splittedArray[i] === 'FOG' || splittedArray[i] === 'SEVERE CROSSWINDS') {
      badWeatherCrashes += 1
    }
  }
  return [goodWeatherCrashes, badWeatherCrashes]
}

let result: number[] = weatherCheck()
console.log(`The amount of crashes at good weather conditions: ${result[0]}.\nThe amount of crashes at bad weather conditions: ${result[1]}.`);
