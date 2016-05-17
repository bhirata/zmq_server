// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// create a new express server
var app = express();

var port = 10002;
var hostname = 'localhost';

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));


var resposta = {status : "open", 
                stocks : [
                  {
                    PETR4 : [ 0.95, 0.96, 0.98]
                  },
                  {
                    OGXP4 : [ 4.95, 4.96, 4.98]
                  },
                  {
                    VALE5 : [ 10.95, 10.96, 10.98]
                  },
                  {
                    ITUB4 : [ 12.95, 12.96, 12.98]
                  }
                ]
              };


app.get('/', function(req, res){
  // res.send('Request in \/!\n');
  res.send(resposta);
});


// start server on the specified port and binding host
var server = app.listen(port, hostname, function() {
  // print a message when the server starts listening

  console.log("server starting on " + server.address().address + ":" + server.address().port);
});
