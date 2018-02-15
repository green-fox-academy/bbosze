'use strict';

/*

let s: string = 'Sari';
let a: string = 'Aron';
let g: string = 'Gergo';
console.log('Hello' + s);
console.log('Hello' + a);
console.log('Hello' + g);


//introduce-yourself
let name: string = 'Balazs';
let age: number = 38;
let height: number = 184;
console.log(name);
*/

/*two-numbers
console.log(13 + 22);
console.log(13 - 22);
console.log(13 * 22);
console.log(22 % 13);
console.log(13 / 22);
*/

/*coding hours
console.log(6 * 5 * 17);
console.log((6 * 5 * 17)/(52*17));
*/




/*let welcome: string = 'Hello, World';

let pi: number = 3.141592;
console.log(pi + 'A');
*/

/*favorite numbers
let favoriteNumber: number = 1000000;
console.log('My favorite number is ' + favoriteNumber);
*/

/*swap

let a: number = 123;
let b: number = 526;
let c: number = 0;

c = b;
b = a;
a = c;

console.log(a);
console.log(b);
*/


/*bmi
let massInKg: number = 74.5;
let heightInM: number = 1.83;
console.log('My BMI is: ' + massInKg / heightInM ** 2);
*/


/*define basic info
let myName: string = 'Balázs';
let age: number = 38;
let height: number = 1.83;
let isMarried: boolean = false;

console.log(myName + age + height + isMarried);
*/

/*variable-mutation
let a: number = 3;
a = a + 3;
console.log(a);

let b: number = 100;
b = b - 7;
console.log(b)*/


//cuboid
/*
let a: number = 10;
let b: number = 10;
let c: number = 10;

console.log('Volume= ' + (a * b * c));
console.log('SurfaceArea= ' + (a * c * 2 + b * c * 2 + a * b * 2));
*/

//seconds in a day
/*
let currentHours: number = 23;
let currentMinutes: number = 59;
let currentSeconds: number = 1;
let secondsOfADay: number = 60 * 60 * 24;

console.log(secondsOfADay - (currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds));
*/

//conditional-variable-mutation

/*
let a: number = 20;
let out: number = 0;

if (a % 2 === 0) {
  console.log('Out')
  a++
}
console.log(a);
*/

/*
let b: number = 21;
let out2: string = '';

if (b < 10) {
  out2 = 'Less!'
} else if (b > 20) {
  console.log('More!')
} else {
  console.log('Sweet!')
}
*/

/*
let c: number = 123;
let credits: number = 33;
let isBonus: boolean = true;

if (credits >= 50 && !isBonus) {
  c = c - 2;
} else if (credits < 50 && !isBonus) {
  c = c - 1;
}

console.log(c);
*/

/*
let d: number =  3;
let time: number = 10;
let out3: string = '';

if (d % 4 === 0 && time <= 200) {
  out3 = 'check';
} else if (time > 200) {
  out3 = 'Time out';
} else {
  console.log('Run Forest Run!')
}

console.log(out3);
*/

/*
let jaj: string = 'I won\'t cheat on the exam!'


for (let i: number = 0; i<100; i++) {
  console.log(jaj);
}
*/

/*
for (let i: number = 0; i<=500; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}
*/

/*
let number: number = 15;
for (let i: number = 1; i<=10; i++) {
  console.log(i + '*' + number + '= ' + i * number);
}
*/

/*
for (let i: number = 0; i<30; i++) {
  if (i % 3 ===0) {
    console.log('Fizz');
  } else if (i % 5 ===0){
    console.log('Buzz')
  } else {
    console.log(i)
  }}
*/

/*
let lineCount: number = 4;
let tree: string = '*';

for (let i: number = 0; i < lineCount; i++) {
        console.log(tree);
        tree += '*';
  }
*/


/*
let lineCount: number = 7;
let tree: string = '*';
let space: string = ' ';


for (let i: number = 0; i < lineCount; i++) {
  space = '';
  for (let k: number = 1; k < lineCount - i; k++) {
    space += ' ';
  }
    console.log(space + tree);
          tree += '**';
}
*/
