'use strict';


let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];


// - how many candies are owned by students
let numberOfCandies: number = 0;

function candyCounter() {
  for (let i: number = 0; i < students.length; i++) {
    numberOfCandies += students[i].candies;
  }
}
candyCounter();
console.log(numberOfCandies);

//Sum of the age of people who have lass than 5 candies
let poorChildrenAge: number = 0;

function poorChildren() {
  for (let i: number = 0; i < students.length; i++) {
    if (students[i].candies < 5) {
      poorChildrenAge += students[i].age;
    }
  }
}

poorChildren();
console.log(poorChildrenAge);
