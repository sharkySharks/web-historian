var url = require('url');
var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');

var sendResponse = function(response, data, statusCode){
  var date = new Date();
  headers['Date'] = date.toUTCString();
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

exports.handleRequest = function (req, res) {
  
  if(req.method === 'GET' && req.url === '/'){
    sendResponse(res, '/web/public/index.html')

  } 
 
  res.end(archive.paths.list);

};
