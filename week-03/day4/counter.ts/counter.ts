'use strict'


// Write a recursive function that takes one parameter: n and counts down from n.


function counter(n) {
  if (n > 0) {
    n = n - 1
    console.log(n)
    counter(n)
  }
}

counter(5);
