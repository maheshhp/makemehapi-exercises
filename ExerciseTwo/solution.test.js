const http = require('http');
const solution = require('./solution');

describe('Tests for checking the data received from HTTP Get request', () => {
  test('Verify data returned for successful HTTP request', (done) => {
    http.get('http://127.0.0.1:8080/mahesh', (request, response) => {
      response.setEncoding('UTF8');
      let retData = '';
      response.on('data', (data) => {
        retData += data.toString();
      });
      response.on('end', (end) => {
        expect(retData).toMatch('Hello mahesh');
        done();
      });
    });
  });
  test('Verify string returned by the route handler function', (done) => {
    expect(solution('abcd')).toMatch('Hello abcd');
  });
});
