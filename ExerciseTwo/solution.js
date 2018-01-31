const Hapi = require('hapi');

const server = new Hapi.Server();

let routeHandler = request => `Hello ${request}`;

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

server.route({
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  path: '/{name}',
  method: 'GET',
  handler: (request, reply) => reply(routeHandler(request.params.name)),
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});

module.exports = routeHandler;
