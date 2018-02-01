let Fs = require('fs');
let Hapi = require('hapi');
let Path = require('path');
let Rot13 = require('rot13-transform');

let helper = (fileStream) => {

};

let server = new Hapi.Server();
module.exports = { helper, server };
