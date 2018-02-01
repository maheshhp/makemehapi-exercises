let Fs = require('fs');
let Hapi = require('hapi');
let Path = require('path');
let Rot13 = require('rot13-transform');

let helper = (filePath) => {
  let tempFileStream = Fs.createReadStream(filePath);
  return tempFileStream.pipe(Rot13());
};

let server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

server.route({
  path: '/',
  method: 'GET',
  config: {
    handler: (req, res) => {
      res(helper(Path.join(__dirname, 'index.txt')));
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

module.exports = { helper, server };
