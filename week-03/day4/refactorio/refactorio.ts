'use strict'
// Create a recursive function called `refactorio`
// that returns it's input's factorial

function refactorio(n) {
  if (n > 1) {
    n = n * refactorio(n-1)
    return n
  } else {
    return 1
  }
}

console.log(refactorio(5))
