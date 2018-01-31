const Hapi = require('hapi');

const server = new Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

module.exports = server;
