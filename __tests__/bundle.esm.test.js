import test from 'tape';

import * as lemonade from '../lib/bundle.esm';

const isFunction = func => typeof func === 'function';

test('All exported functions are available and exist.', assert => {
  const result = Object.values(lemonade).every(isFunction);
  const expected = true;
  assert.equal(result, expected);
  assert.end();
});
