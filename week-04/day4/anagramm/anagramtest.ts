import { test } from 'tape';
import { anagram } from './anagram';
import { realAnagram } from './anagram';

test('get a boolean wether it\'s an anagram or not', t => {
  const testString1 = 'kek';
  const testString2 = 'ek';
  var actual1 = anagram(testString1, testString2);
  var expected = false;
  t.equal(actual1, expected);
  t.end();
});


test('get a boolean wether it\'s an anagram or not', t => {
  const testString1 = 'erdő';
  const testString2 = 'rdase';
  var actual1 = realAnagram(testString1, testString2);
  var expected = false;
  t.equal(actual1, expected);
  t.end();
});
