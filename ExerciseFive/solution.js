const Hapi = require('hapi');
const Path = require('path');
const Vision = require('vision');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

server.register(Vision, (err) => {
  if (err) throw err;
});

server.route({
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
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
