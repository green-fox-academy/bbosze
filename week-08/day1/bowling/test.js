'use strict'

const test = require('tape');
const calculateResult = require('./calculate');

// [x] full nullás bemenet
test('zero is 0', (t) => {
  const result = 0;
  const frames = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];

  t.equal(calculateResult(frames), result);
  t.end();
})
// [x] Az lelső elem 1

test('first frames first value', (t) => {
  const result = 1;
  const frames = [
    [1, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];

  t.equal(calculateResult(frames), result);
  t.end();
})
// [x] Az első elem 1

test('first frames result', (t) => {
  const result = 7;
  const frames = [
    [1, 6],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];

  t.equal(calculateResult(frames), result);
  t.end();
})


test('all frames result', (t) => {
  const result = 13;
  const frames = [
    [1, 6],
    [2, 4],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];

  t.equal(calculateResult(frames), result);
  t.end();
})

//van spare
test('all frames result', (t) => {
  const result = 23;
  const frames = [
    [1, 6],
    [5, 5], //10 + 3
    [3, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];

  t.equal(calculateResult(frames), result);
  t.end();
})
