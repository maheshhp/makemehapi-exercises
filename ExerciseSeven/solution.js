const Hapi = require('hapi');
const Path = require('path');
const Vision = require('vision');
const handlebars = require('handlebars');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

server.register(Vision, (err) => {
  if (err) throw err;
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
