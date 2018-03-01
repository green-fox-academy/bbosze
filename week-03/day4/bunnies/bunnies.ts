'use strict'
// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

let earNum = 0;

function bunniez(bunNum) {
  if (bunNum > 0) {
    earNum += 2;
    bunNum --;
    bunniez(bunNum)
    return earNum;
  }

}

console.log(bunniez(10));
