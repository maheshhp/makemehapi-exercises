const Solution = require('./solution');

describe('Tests for checking the data received from HTTP Get request', () => {
  test('Verify status code for successful HTTP request', (done) => {
    Solution.inject('/chickens/breed', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Verify return data for successful HTTP request', (done) => {
    Solution.inject('/chickens/breed', (response) => {
      expect(response.result).toMatch('You are validated');
      done();
    });
  });
  test('Verify return data for invalid request string', (done) => {
    Solution.inject('/chickens', (response) => {
      expect(response.result).toMatch(false);
      done();
    });
  });
});
