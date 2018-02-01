const solution = require('./solution');

describe('Tests for checking the data received from HTTP Get request', () => {
  test('Verify status code for successful HTTP request', (done) => {
    solution.inject('/foo/bar/baz/file.html', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Verify return data for successful HTTP request', (done) => {
    solution.inject('/foo/bar/baz/file.html', (response) => {
      let returnHtml = 'Hello World';
      expect(response.result).toMatch(returnHtml);
      done();
    });
  });
});
