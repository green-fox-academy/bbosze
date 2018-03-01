'use strict'
// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.



// ONLY WORKS WITHOUT TYPECHECK!!!!
let text = 'Hello y Hallyp.'
let splitted: any = text.split('');

function findFirstChar(element) {
  return element === 'y';
}


function xChange(text) {
  if (splitted.findIndex(findFirstChar) > 0){
    let index = splitted.findIndex(findFirstChar)
    splitted[index] = 'x'
    xChange(text);
  };
  return splitted.join('');

}


console.log(xChange(text));
