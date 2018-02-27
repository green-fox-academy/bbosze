'use strict';

//SIMPLE WAY
/*function divide(num){
  if (num === 0){
    return 'fail';
  } else
  return 10 / num;
}

console.log(divide(100));
*/


//PROGRAM STOPS
// function divide(num){
//   if (num === 0){
//     throw 'fail';
//   } else
//   return 10 / num;
// }
//
// divide(0);
// console.log('program goes on')


//PROGRAM GOES ON
function divide(num){
  if (num === 0){
    throw 'fail';
  } else
  return 10 / num;
}

try {
    divide(0);
}

catch(fail) {
  console.log('fail');
}

console.log('program goes on')



// EXAMPLE
// function UserException(message) {
//    this.message = message;
//    this.name = 'UserException';
// }
// function getMonthName(mo) {
//    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
//    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
//       'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//    if (months[mo] !== undefined) {
//       return months[mo];
//    } else {
//       throw new UserException('InvalidMonthNo');
//    }
// }
//
// try {
//    // statements to try
//    var myMonth = 10; // 15 is out of bound to raise the exception
//    var monthName = getMonthName(myMonth);
// } catch (e) {
//    monthName = 'unknown';
//    console.log(e.message, e.name); // pass exception object to err handler
// }
//
// console.log(getMonthName(15));
