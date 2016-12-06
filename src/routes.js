const username

module.exports = {
  method: 'GET',
  path: '/authenticated-route',
  config: {
    auth: 'session',
    handler(req, reply) {
      if (req.auth.isAuthenticated) {
        reply('You are allowed to see this');
      }
    },
  },
};
