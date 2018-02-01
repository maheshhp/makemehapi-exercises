const Solution = require('./solution');
const Fs = require('fs');

const { server, helper } = Solution;

describe('Tests for checking the data received from HTTP Get request and Rot-13 transform helper function', () => {
  test('Verify status code for successful HTTP request', (done) => {
    let tempFileStream = Fs.createReadStream('./index.txt');
    expect(helper(tempFileStream)).toBe(false);
    done();
  });
});
