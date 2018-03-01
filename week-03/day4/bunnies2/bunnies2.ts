'use strict'

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).


let earNum = 0;

function bunniez(bunNum) {
  if (bunNum > 0 && bunNum %2 === 0) {
    earNum += 3;
    bunNum --;
    bunniez(bunNum)
    return earNum;
  } else if (bunNum > 0) {
    earNum += 2;
    bunNum --;
    bunniez(bunNum)
    return earNum;
  }
}

console.log(bunniez(3));
