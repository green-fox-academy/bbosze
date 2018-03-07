'use strict'


interface Comparable {
  compareTo(other: Comparable): number;
}

/*
* returns negative number if this is smaller than other
* returns 0 if they are the same
* returns positive number if this is greater than other
*/


class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  compareTo(other: Comparable): number {
    return;
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

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

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

dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
});

// print(dominoes);
