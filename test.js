import test from 'ava';
import recursiveReverse from '.';

test('it reverses a string', t => {
  t.is(recursiveReverse("hello world"), "dlrow olleh");
});