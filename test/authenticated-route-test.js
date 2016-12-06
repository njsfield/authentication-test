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
    url: '/authenticated-route',
    credentials: {
      username: 'steve',
      password: 'jobs'
    }
  };

  const noCreds = {
    method: 'GET',
    url: '/authenticated-route'
  };

  server.inject(goodCreds, (res) => {
      t.equal(res.statusCode, 200, 'Should return status code of 200 when credentials are given');
  });
  server.inject(noCreds, (res) => {
      t.equal(res.statusCode, 401, 'Should return status code of 401 when no credentials are given');
  });
  server.inject(goodCreds, (res) => {
      t.equal(res.payload, 'You are allowed to see this', 'Should serve successfully if good credentials are given');
  });
  server.inject(badCreds, (res) => {
      t.equal(res.payload, 'You are not allowed to see this', 'Should handle cases where bad credentials are given');
      t.end();
  });
});
