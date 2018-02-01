const solution = require('./solution');

describe('Tests for checking the data received from HTTP Get request', () => {
  test('Verify status code for successful HTTP request', (done) => {
    solution.inject('/?name=Handling', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Verify return data for successful HTTP request', (done) => {
    solution.inject('/?name=Handling', (response) => {
      expect(response.result).toMatch('Hello Handling');
      done();
    });
  });
});
