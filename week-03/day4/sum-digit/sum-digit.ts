'use strict'
// Given a non-negative int n, return the sum of its digits recursively (no loops).
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).


let sum: number = 0;
function sumDigit(n) {
  if (n > 0) {
    let sumz:number = n % 10
    sum += sumz
    n = (n - (n % 10)) /10
    sumDigit(n)
    return sum
  }
}

console.log(sumDigit(1249));

//1265%10 126   5
//126%10 6
//12%10 2
//1 % 10

// let a = 1265 % 10
// console.log(a);
