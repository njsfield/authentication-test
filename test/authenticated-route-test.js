const server = require('../src/server');
const test = require('tape');

test('Tests for authenticating a request by checking credentials', (t) => {
  const goodCreds = {
    method: 'GET',
    url: '/authenticated-route',
    credentials: {
      username: 'john',
      password: 'smith'
    }
  };

  const badCreds = {
    method: 'GET',
    url: '/authenticated-route'
  };

  server.inject(goodCreds, (res) => {
      t.equal(res.statusCode, 200, 'Should return status code of 200 when credentials are given');
  });
  server.inject(badCreds, (res) => {
      t.equal(res.statusCode, 401, 'Should return status code of 401 when no credentials are given');
      t.end();
  });
});
