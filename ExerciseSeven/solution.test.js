const solution = require('./solution');
const helper = require('./helpers/helper');

describe('Tests for checking the data received from HTTP Get request and helper function', () => {
  test('Verify return data from helper function', (done) => {
    let contextObject = {
      data: {
        root: {
          query: {
            suffix: 'Hello',
            name: 'World',
          },
        },
      },
    };
    expect(helper(contextObject)).toMatch('WorldHello');
    done();
  });
  test('Verify status code for successful HTTP request', (done) => {
    solution.inject('/?name=Handling', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Verify return data for successful HTTP request', (done) => {
    solution.inject('/?name=Handling&suffix=!', (response) => {
      expect(response.result).toMatch('Hello Handling!');
      done();
    });
  });
});
