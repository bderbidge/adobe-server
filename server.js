// The server creates a new express server that routes requests to different
// http endpoints
const express = require('express');
const app = express();
const romanNumeralRoute = require('./routes/romanNumeralRoute');

app.use(romanNumeralRoute);

var server = app.listen(8080, function() {
  var port = server.address().port;
  console.log('Listening on port %s', port);
});

module.exports = server;
