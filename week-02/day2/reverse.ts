'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

//EXAMPLE
/*
var str3 = "Apples are round, and apples are juicy.";
var splitted = str3.split(" ");
console.log(splitted)
*/


let reversedString: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

let splittedArray = reversedString.split('');
console.log(splittedArray);

let reversedArray = splittedArray.reverse();

let normalString = reversedArray.join("");

console.log(normalString);


/*console.log(reverse(reversed));

export = reversed;
*/
