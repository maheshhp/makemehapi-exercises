const solution = require('./solution');
const helper = require('./helpers/helper');

describe('Tests for checking the data received from HTTP Get request and helper function', () => {
  test('Verify return data from helper function', (done) => {
    let contextObject = {
      data: {
        root: {
          query: {
            foo: 'World',
          },
        },
      },
    };
    expect(helper(contextObject)).toMatch('World');
    done();
  });
});
