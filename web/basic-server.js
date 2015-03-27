var http = require("http");
var handler = require("./request-handler");
var initialize = require("./initialize.js");
var static = require('node-static');

// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
initialize();

var port = 3000;
var ip = "127.0.0.1";

var staticServer = new static.Server();

var server = http.createServer(function (request, response){
  staticServer.serve(request,response);
})


require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);


var server = http.createServer(handler.handleRequest);

if (module.parent) {
  module.exports = server;
} else {
  server.listen(port, ip);
  console.log("Listening on http://" + ip + ":" + port);
}

