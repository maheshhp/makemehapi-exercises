const solution = require('./solution');
const axios = require('axios');

describe('Tests for checking the data received from HTTP Get request', () => {
  test('Verify data returned for successful HTTP request', (done) => {
    axios.get('http://127.0.0.1/')
      .then((response) => {
        expect(response).toMatch('Hello hapi');
        done();
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
