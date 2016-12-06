const Hapi = require('hapi');
const CookieAuth = require('hapi-auth-cookie');

const routes = require('./routes');

const cookieOptions = {
  password: 'thisisafakepasswordthisisafakepasswordthisisafakepassword',
  cookie: 'app-cookie',
  isSecure: false,
  ttl: 24 * 60 * 60 * 1000,
};

const server = new Hapi.Server();

server.connection({ port: 8080 });

server.register(CookieAuth, (registerError) => {
  if (registerError) throw registerError;

  server.auth.strategy('session', 'cookie', cookieOptions);

  server.route(routes);
});

module.exports = server;
