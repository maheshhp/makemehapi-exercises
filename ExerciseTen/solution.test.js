const server = require('./solution');

describe('Tests for successful and unsuccessful login to the server', () => {
  test('Test for successful POST request reply code from the server', (done) => {
    let request = {
      method: 'POST',
      url: '/login',
      payload: JSON.stringify({ isGuest: false, username: 'HPM', accessToken: 'HPM321' }),
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(false);
      done();
    });
  });
  test('Test for GET request reply code from the server', (done) => {
    let request = {
      method: 'GET',
      url: '/login',
      payload: JSON.stringify({ isGuest: false, username: 'HPM', accessToken: 'HPM321' }),
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(false);
      done();
    });
  });
  test('Test for unsuccessful POST request reply code from the server', (done) => {
    let request = {
      method: 'POST',
      url: '/login',
      payload: JSON.stringify({ isGuest: false, username: 'HPM' }),
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(false);
      done();
    });
  });
  test('Test for guest login reply message from the server', (done) => {
    let request = {
      method: 'POST',
      url: '/login',
      payload: JSON.stringify({ isGuest: true, username: 'HPM' }),
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(false);
      done();
    });
  });
  test('Test for valid user login reply message from the server', (done) => {
    let request = {
      method: 'POST',
      url: '/login',
      payload: JSON.stringify({ isGuest: true, username: 'HPM', accessToken: 'HPM321' }),
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(false);
      done();
    });
  });
  test('Test for invalid user login reply message from the server', (done) => {
    let request = {
      method: 'POST',
      url: '/login',
      payload: JSON.stringify({
        isGuest: true, username: 'HPM', accessToken: 'HPM321', password: 'password',
      }),
    };
    server.inject(request, (response) => {
      expect(response.statusCode).toBe(false);
      done();
    });
  });
});
