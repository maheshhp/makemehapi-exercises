const Hapi = require('hapi');

const server = new Hapi.Server();

let routeHandler = (request) => {

};

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

module.exports = routeHandler;
