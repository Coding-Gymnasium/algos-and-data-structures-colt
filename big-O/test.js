const addUpTo = require('./scripts.js');

test('Add up all the numbers from 1 to n', () => {
  expect(addUpTo(6)).toEqual(21);
})
