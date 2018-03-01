'use strict'

function adder(n) {
  if (n < 30) {
    n = n + 1
    console.log(n)
    adder(n)
  }
}
adder(5);
