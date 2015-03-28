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
  if (req.method === 'GET'){
  	res.writeHead(200, archive.headers);
    
    if(req.url === '/'){
     fs.readFile(archive.paths.siteAssets + '/index.html', function(err, fileConents){
      res.write(fileConents) 
      res.end()
     })
    } else if ( req.url === '/styles.css'){
  	 fs.readFile(archive.paths.siteAssets + '/styles.css', function(err, fileContents){
      res.write(fileContents)
      res.end();
     }) 
    }
  } else {
      // archive.readListOfUrls();
      // archive.isURLin our file
      req.on('data', function(data){
        //if ( err ) throw err;
        archive.addUrlToList(data);
        res.end();
      });
  }
 
  // res.end(archive.paths.list);

};
