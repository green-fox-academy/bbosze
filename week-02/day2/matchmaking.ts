'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane', 'Jill', 'Judith'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];
let boysandgirls: string[] = girls.concat(boys);
let matches: string[] = [];


function makingMatches(boys: string[], girls: string[], matches: string[]) {
  if (boys.length === girls.length) {
    for (let i: number = 0; i < boysandgirls.length-2; i++) {
                                          //WHY -2???
      if (i % 2 === 0) {
        matches.push(girls[1]);
        girls.shift();
      } else {
        matches.push(boys[1]);
        boys.shift();
    }
  }
  }
  else if (boys.length > girls.length || boys.length < girls.length){
    for (let i: number = 0; i < boysandgirls.length-3; i++) {
                                          //WHY -3???
      if (i % 2 === 0) {
        matches.push(girls[1]);
        girls.shift();
      } else {
        matches.push(boys[1]);
        boys.shift();
    }
  }

  }
  else {

  }
 }

makingMatches(boys, girls, matches);
console.log(matches);


//console.log(makingMatches(girls, boys));
// export = makingMatches;
