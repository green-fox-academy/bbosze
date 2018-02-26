'use strict';
// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable

let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];
let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

function coder(code, map) {
  let newArray: any[] =[];
  let hashmapArray: any[] = Object.entries(map);
  for (let i:number = 0; i < code.length; i++) {
    for (let j: number = 0; j < hashmapArray.length; j++) {
      if (code[i] == hashmapArray[j][0]) {
          newArray.push(hashmapArray[j][1])
      }
    }
  }
console.log(newArray.join(''));
}

coder(notSoCrypticMessage, hashmap);
