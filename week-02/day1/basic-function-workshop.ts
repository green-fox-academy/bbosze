

//OPTIONAL PARAMETERS
/*
function greetByName(name: string, title?: string) {
  console.log(arguments);
  if (title !== undefined){
  console.log('Well hi there,', name + title);
  }
  }

greetByName('Tojas');
greetByName('Barbi', 'CEO ');



//FUNCTION RETURN VALUES

function makeGreen(name: string): string {
  let newName = 'Green ' + name;
  return newName;
}

let nAme = makeGreen('Tojas');
greetByName('Whazzup', name);
*/

//Doubling
/*
let baseNum: number = 123;
function doubling(baseNum) {
  baseNum = baseNum * 2;
  console.log(baseNum);
}
doubling(123);
*/

//GREET
/*
let names: string = 'Greenfox'

function greet(names?: string) {
  // if (names !=== undefined) {
  console.log(`Greeting, dear ` + names);
}

//  else {  console.log(`Greeting, bro!`);
//  } }

 greet();
*/

//APPEND A
/*
let typo: string = 'kuty'

function appendA(typo: string) {
  typo = typo + 'a';
  console.log(typo)
}

appendA('cic');
*/

//RESULT
// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
/*
let result:number = 0;

function sum(numbers: number) {
  for (let i:number = 1; i < numbers; i++) {
  result += i
  }
  console.log(result);
  return result;
}

sum(4);
*/

//FACTORIO
// -  Create a function called `factorio`
//    that returns it's input's factorial
/*
let result:number = 1;

function fact(numbers: number) {
  for (let i:number = 1; i <= numbers; i++) {
  result = result * i;
  }
  console.log(result);
  return result;
}

fact(6);
*/

//Printer
// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

/*
function printer(greets: string, names: string, real: boolean, nums?: number) {
  if (real) {
    if (nums !== undefined) {
    console.log(greets + names + nums);
    }
    else {
      console.log(greets + names)
    }
  }
}

printer('hello', 'Balazs', false, 79);
*/
