'use strict';

let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies


function candyCounter(asd: any[]) {
  for (let i: number = 0; i < asd.length; i++) {
  if (asd[i].candies > 4) {
    console.log(asd[i].name)
  }
}
}

candyCounter(students);


// create a function that takes a list of students and logs:
//  - how many candies they have on average



function candyAverage(blah: any[]) {
  let numberOfCandies: number = 0;
    for (let i: number = 0; i < blah.length; i++) {
    numberOfCandies += students[i].candies;
        }
    return numberOfCandies / blah.length;
}

console.log(candyAverage(students));
