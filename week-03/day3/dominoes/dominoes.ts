'use strict';
// Dominoes
// You have the list of Dominoes
// Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides
// // eg: [2, 4], [4, 3], [3, 5] ...

import { Printable } from '/Users/Balazs/dev/greenfox/bbosze/week-04/day3/printable/printable'

class Domino implements Printable {
    values: number[];
    constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
    }
    printAllFields() {
      this.values.forEach(function (value) {
          console.log(value);
      });

    }
}

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

// function print(dominoes: Domino[]) {
//     dominoes.forEach(function (value) {
//         console.log(value);
//     });
// }

let dominoes = initializeDominoes();



let newList:any[] = []
newList.push(dominoes[0]);

  for (let j:number = 0; j < dominoes.length; j++) {
    for (let i:number = 0; i < dominoes.length; i++) {
         if (newList[j].values[1] === dominoes[i].values[0]) {
           newList.push(dominoes[i]);
         }
       }
     }

dominoes = newList

dominoes[3].printAllFields();
