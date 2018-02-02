let Hapi = require('hapi');
let Joi = require('joi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

server.route({
  method: 'POST',
  path: '/login',
});

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
  });
}

module.exports = server;

