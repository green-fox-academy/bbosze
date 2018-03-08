import { test } from 'tape';
import { addNum, subNum } from './operations';

// test('add 2 numbers', t => {
//   const actual = addNum(1, 2);
//   const expected = 3;
//   const actual2 = addNum(3, 3);
//   const expected2 = 6;
//
//   t.equal(actual, expected);
//   t.end();
// });
//
// test('test subNum()', t => {
//   t.equal(subNum(2, 1), 1);
//   t.end();
// })


import { NumberOperations } from './operations';

test('add 2 numbers', t => {
  const operations = new NumberOperations();

  var actual = operations.addNum(1, 2);
  var expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('test minusNum()', t => {
  const operations = new NumberOperations();

  var actual = operations.minusNum(1, 2);
  var expected = 3;

  t.equal(operations.minusNum(2, 1), 1);
  t.end();
})
