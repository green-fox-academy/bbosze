'use strict'

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.



// let text = 'Hello and Hallo.'
// let splitted: any = text.split('');
// let newSplitted: any[] = []
//
// function changer(){
//   if(typeof splitted[0] !== 'undefined') {
//       newSplitted.push(splitted[0] + "*");
//       splitted.shift();
//       changer();
//    }
// }
// changer();
// console.log(newSplitted.join(''));
//
//
//
// for (let i: number = 0; i < splitted.length; i++) {
//   if(typeof splitted[i] !== 'undefined') {
//       newSplitted.push(splitted[i] + "*")
//    }
// }
// console.log(newSplitted.join(''));
//
//
//
// newSplitted.push(splitted[1] + "*");


'use strict'


// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function separatedByAStar(string: string) {
  if (string.charAt(string.length-2) == '*') {
    return string;
  }
  string = string.match(/.{1}/g).join('*');
  return separatedByAStar(string);
}
console.log(separatedByAStar('xbbxbxbbbbxbbxbbxbbxbxbbxbbbx'))
