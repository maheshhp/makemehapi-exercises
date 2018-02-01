const Hapi = require('hapi');
const Path = require('path');
const Vision = require('vision');
const handlebars = require('handlebars');
const helper = require('./helpers/helper');

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
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html',
  },
});

server.views({
  engines: {
    html: handlebars,
  },
  helpersPath: Path.join(__dirname, 'helpers'),
  path: Path.join(__dirname, 'templates'),
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
