// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

'use strict';

let example: string = 'In a Dishwasher far far away and a Dishwasher';
example = example.replace(/dishwasher/gi, 'galaxy'); //i ignores capitalization
console.log(example);
