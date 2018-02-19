//THIRD
// -  Create a variable named `magicNumbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `magicNumbers`


//Creating an array
/*
let magicNumbers:number[];
magicNumbers = [1, 3, 5, 7];

//Another useful way to create an array

let magicNumbers:number[] = [1,3,5,7];

console.log(magicNumbers[3]);
*/


//COPARE LENGTH
// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

//ADDITIONALY: firstList logged to the console if the first list is has more elenets, secondLIst if the second, It's a draw if they have the same number of elements
/*
let firstList:number[] = [1, 2, 3];
let secondList:number[] = [4, 5];

if (firstList.length > secondList.length) {
  console.log(firstList);
 }
else if (firstList.length < secondList.length) {
  console.log(secondList);
  }
else {
  console.log(`It\'s a draw!`);
}
*/

//SUM ELEMENTS
// -  Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// -  Print the sum of the second and the third element
/*
let r:number[] = [54, 23, 66, 12];
console.log(r[1] + r[2]);
*/

//SWAP ELEMENTS
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

//Basic array here, uncomment, please
//let abc:string[] = ['Artur', 'Boe', 'Chloe', 'Zoe']

//Advanced way
/*
let x:number = 0;
let y:number = 2;
abc[x] = abc.splice(y, 1, abc[x])[0];
console.log(abc)
*/

//Simple way
/*
let abc1:string = abc.shift();
let abc2:string = abc.pop()
abc.push(abc1);
abc.unshift(abc2)
console.log(abc)
*/

//With for loop
/*
for (let i:number = abc.length; i > 0; i--) {
  if (i === abc.length) {
    let abc1:string = abc.pop();
    abc.unshift(abc1);
  }
  else if (i === 1) {
    let abc2:string = abc.splice(1, 1)[0];
    abc.push(abc2);
  }
}
console.log(abc)
*/

// PRINT ALL
// -  Create a variable named `numList` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numList` to the console*
// *hint: use a loop, console.log(numList) won't cut it
// -  bonus for using the correct built in array method
/*
let numList:number[] = [4, 5, 6, 7]

for (let i:number=0; i < numList.length; i++) {
    console.log(numList[i]);
}
*/

//CHANGE ELEMENT
// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method
// -  Print the fourth element as a test

//DIVIDE BY 2 THE ELEMETS OF THE ARRAY
/*let numList:number[] = [1, 2, 3, 8, 5, 6]
numList = numList.map(x => x / 2);
console.log(numList[3]);
*/

//My solution
/*
let numList: number[] = [1, 2, 3, 8, 5, 6];
numList.map(function(value:number, index: number) {
  if (value === 8) {
    numList[index] = 4;
  }
})
console.log(numList[3]);
*/

//Smartest solution, don't know yet what's going on
/*
let numList: number[] = [1, 2, 3, 8, 5, 6];
numList = numList.map(num => num === 8? 4:num)
console.log(numList);
*/

//INCREMENT ELEMENT
// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console
/*
let numList:number[] = [1, 2, 3, 4, 5];
numList[2] +=1;
console.log(numList[2]);
*/

//APPEND A
// -  Create an array variable named `nimals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end

/*
let nimals:string[] = ['kuty', 'cic', 'macsk']

nimals.forEach(function(element, index){
  nimals[index] = element + 'a';
})

console.log(nimals);
*/

//DOUBLE ITEMS
// -  Create an array variable named `names` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

/*
let names:string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
names.forEach(function(element, index) {
  names[index] = element + element;

})

console.log(names);
*/

//COLORS
// -  Create a two dimensional list
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`
/*
let colors = []
colors[0] = `"lime", "forest green", "olive", "pale green", "spring green"`
colors[1] = `"orange red", "red", "tomato"`
colors[2] = `"orchid", "violet", "pink", "hot pink"`

console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
*/

//SUM ALL
// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console


let ai:number[] = [3,4,5,6,7];
let reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(ai.reduce(reducer));
