const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, ''),
    },
  },
});

server.register(Inert);

server.route({
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    reply.file(Path.join(__dirname, 'test.html'));
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});

module.exports = server;
