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

exports.readListOfUrls = function(){
 // fs.readFile('../archives/sites.txt', {encoding: "utf-8"},function(err, data){
 //    if ( err ) console.log('err');
 //    var messages = data.split('\n').slice(0, -1).map(function(msg){
 //      return JSON.parse(msg);
 //    });

 //    // return sites;
 //  });
  console.log("hellllloooo");
};

exports.isUrlInList = function(){
};

exports.addUrlToList = function(url){
  var toWrite = url + '\n';
  fs.appendFile('../archives/sites.txt', toWrite, function(err){
    if ( err ) throw err;
    console.log('Success!');
  });
};

exports.isUrlArchived = function(){
  
};

exports.downloadUrls = function(){
};
