var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  fs.readFile('archives/sites.txt', {encoding: "utf-8"},function(err, data){
    //if ( err ) console.log('err');
    data = data.split('\n').slice(0, -1);    
    
    if (callback){
      callback(data);
    }
  });
};

exports.isUrlInList = function(url, callback){
  url = url.toString().slice(4);
  exports.readListOfUrls(function(sites){
    var isFound = _.some(sites, function(site){
      return site === url;
    })

    if ( isFound ){
      callback(url); // one use of this callback will be to write (display) the page
    }
    else {
      exports.addUrlToList(url);
    }
  });

};

exports.addUrlToList = function(url){
  // debugger;
  fs.appendFile('archives/sites.txt', url + "\n", function(err){
    console.log('Success! ' + url);
  });
};

exports.isUrlArchived = function(){
  
};

exports.downloadUrls = function(){
};
