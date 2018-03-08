import { test } from 'tape';
import { Basket } from './apples';


test('add 2 numbers', t => {
  const testbasket = new Basket();

  var actual = testbasket.getApple();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();
});
