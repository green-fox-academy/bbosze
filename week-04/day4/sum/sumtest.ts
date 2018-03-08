'use strict'

import { test } from 'tape';
import { Integers } from './sum';


test('get the sum of integers', t => {
  const testArray1 = new Integers([2, 2, 2]);
  var actual1 = testArray1.sumOfListElements();
  var expected = 6;
  t.equal(actual1, expected);
  t.end();


});

test('get the sum of integers', t => {
  const testArray2 = new Integers('[2, 2, 2]');
  var actual2 = testArray2.sumOfListElements();
  var expected = 6;
  t.equal(actual2, expected);
  t.end();


});
