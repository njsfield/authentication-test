module.exports = {
  method: 'GET',
  path: '/authenticated-route',
  config: {
    auth: 'session',
    handler(req, reply) {
      if (req.auth.isAuthenticated) {
        if (req.auth.credentials.username == 'john') {
          reply('You are allowed to see this');
        } else {
          reply('You are not allowed to see this');
        }

      }
    },
  },
};
