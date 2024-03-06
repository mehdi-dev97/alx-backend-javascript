import getResponseFromAPI from '../0-promise.js';

const response = getResponseFromAPI();

test('Return a Promise using this prototype getResponseFromAPI', () => {
  expect(response instanceof Promise).toBe(true);
});
