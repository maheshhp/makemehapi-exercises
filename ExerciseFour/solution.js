const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

server.register(Inert);

server.route({
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  path: '/foo/bar/baz/{name}',
  method: 'GET',
  handler: {
    directory: { path: Path.join(__dirname, '/public') },
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
