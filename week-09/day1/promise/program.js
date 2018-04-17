'use strict';

// 6.
// let promise1 = new Promise(function (fulfill, reject) {
//   setTimeout(() => reject(new Error('REJECTED!')), 300);
// });
//
// function cica (error) {
//   console.log(error.message);
// }
//
// promise1.catch(cica);
//
// let promise2 = Promise.resolve('IT WORKS!');

// 5.
// let promise = new Promise(function (fulfill, reject) {
//   fulfill('PROMISE VALUE');
// });
//
// promise.then(console.log);
//
// console.log('MAIN PROGRAM');

// 4.
// let promise = new Promise(function (fulfill, reject) {
//   fulfill('I FIRED')
//   reject(new Error('I DID NOT FIRE'));
// });
//
// function cica (error) {
//   console.log(error.message);
// }
//
// promise.then(console.log, cica);



// 3.
// let promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => reject(new Error('REJECTED!')), 300);
// });
//
// function cica (error) {
//   console.log(error.message);
// }
//
// promise.then(null, cica);



// 2.
// let promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => fulfill('FULFILLED!'), 300)
// });
//
// promise.then(console.log);


// 1.
//
// setTimeout( () => console.log('TIMED OUT!'), 300);
