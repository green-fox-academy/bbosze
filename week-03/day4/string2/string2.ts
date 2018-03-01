'use strict'
// Given a string, compute recursively a new string where all the 'x' chars have been removed.



// ONLY WORKS WITHOUT TYPECHECK!!!!
let text = 'Hello y Halyyyyylyo.'
let splitted: any = text.split('');
console.log(text);

function findFirstChar(element) {
  return element === 'y';
}

function xChange(text) {
  if (splitted.findIndex(findFirstChar) > 0){
    let index = splitted.findIndex(findFirstChar)
    splitted[index] = ''
    xChange(text);
  };
  return splitted.join('');

}

console.log(xChange(text));
