'use strict'

// The fibonacci sequence is a famous bit of mathematics, and it happens to
// have a recursive definition. The first two values in the sequence are
// 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the
// previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21
// and so on. Define a recursive fibonacci(n) method that returns the nth
// fibonacci number, with n=0 representing the start of the sequence.


let res:number = 0;
let fibArr: number[] = [0, 1]

let fibonacci = (n) => {
 if (n > 2) {
     res = fibArr[0] + fibArr[1]
     fibArr[0] = fibArr[1]
    fibArr[1] = res
      n -= 1;
        fibonacci(n);
 }
 else if (n === 1){
   res = fibArr[0]
 }
 else if (n === 2) {
   res = fibArr[1]
 }
 return res
}


console.log(`The 6th fibonacci number is ${fibonacci(6)}.`);
