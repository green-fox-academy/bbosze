'use strict'

// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

function letterCount(word: string) {
  let result: any = {};
  let splitted: string[] = word.split('')
    for (let i: number = 0; i < splitted.length; i++) {
        result[i] = 1

  } return splitted
}

// let element = {id: 10, quantity: 1};
// let cart = [];
//
// cart.push({element: element});
// console.log(cart);


// export function letterCount(inPut: string) {
//   let stuff: any = {};
//   inPut.split('').forEach(e => {
//     stuff[e] === undefined
//       ? stuff[e] = 1
//       : stuff[e]++
//   })
//   return stuff;
// }
console.log(letterCount('heha'))
