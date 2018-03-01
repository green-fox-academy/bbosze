'use strict'

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).



let result = 1
function powerN(base, n) {
  if (n > 0) {
      n--
      result = result * base
      powerN(base, n);
      return result
    }
  }

console.log(powerN(2,3));
