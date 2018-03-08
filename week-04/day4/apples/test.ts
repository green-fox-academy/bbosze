import { test } from 'tape';
import { Basket } from './apples';


test('get an apple', t => {
  const testbasket = new Basket();

  var actual = testbasket.getApple();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();
});
