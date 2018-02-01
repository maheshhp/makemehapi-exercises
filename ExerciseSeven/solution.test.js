const solution = require('./solution');

describe('Tests for checking the data received from HTTP Get request and helper function', () => {
  test('Verify return data from helper function', (done) => {
    solution.inject('/?name=Handling', (response) => {
      expect(response.result).toMatch('Hello Handling');
      done();
    });
  });
});
