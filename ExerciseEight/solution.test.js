const Solution = require('./solution');
const Path = require('path');

let { helper, server } = Solution;

describe('Tests for checking the data received from HTTP Get request and Rot-13 transform helper function', () => {
  test('Verify return value of helper function', (done) => {
    let readStream = helper(Path.join(__dirname, './index.txt'));
    let chunks = '';
    readStream.on('error', err =>
      console.log(err));
    readStream.on('data', (chunk) => {
      chunks += chunk;
    });
    readStream.on('close', () => {
      expect(chunks).toBe('Gur Chefhvg bs Uncv-arff');
      done();
    });
  });
  test('Verify status code for successful HTTP request', (done) => {
    server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Verify return data for successful HTTP request', (done) => {
    server.inject('/', (response) => {
      expect(response.result).toMatch('Gur Chefhvg bs Uncv-arff');
      done();
    });
  });
});
