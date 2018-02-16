'use strict';

//DIAMOND

/*
let lineCount: number = 9;
let tree: string = '*';
let space: string = ' ';


for (let i: number = 0; i < lineCount; i++) {
  space = '';
  tree = '*';
    if (i <= 0){
    for (let j: number = 2 ; j <= lineCount/2 + 1; j++) {
      space += ' ';
    }
    }
   else if (i <= (lineCount/2)  ) {
    for (let k: number = 1; k <= lineCount / 2 - i; k++) {
    space += ' ';

      }
    for (let l: number = i; l > 0; l--) {
    tree += '**';
        }
   }
   else
     for (let m: number = i; m < lineCount-1   ; m++) {
       tree += '**';
     }
     for (let n: number = 0; n > lineCount / 2-i ; n--) {
       space += ' ';
     }


  console.log(space + tree)
     }
*/

//SQUARE

let lineCount: number = 4;
let line: string = '%'
let space: string = '   '

for (let i: number = 1; i <= lineCount; i++) {
  if (i <= 1) {
    console.log(line + line + line + line + line);
  }
  else if (i < lineCount){
    console.log(line + space + line);
  }
  else {
    console.log(line + line + line + line + line);
  }
}
