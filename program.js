/*var fs = require("fs");

var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split("\n").length - 1;
console.log(lines);*/

/////////
/*
var fs = require("fs");
var file = process.argv[2];

fs.readFile(file, function (err, contents) {
  var lines = contents.toString().split("\n").length - 1;
  console.log(lines);
});*/

////////
/*
var fs = require("fs");
var path = require("path");

var folder = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err);
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
*/
var filterFn = require("./solution_filter.js");
var dir = process.argv[2];
var filterStr = process.argv[3];

filterFn(dir, filterStr, function (err, list) {
  if (err) return console.error("There was an error:", err);

  list.forEach(function (file) {
    console.log(file);
  });
});
////////

let http = require("http");

http
  .get(process.argv[2], function (response) {
    response.setEncoding("utf8");
    response.on("data", console.log);
    response.on("error", console.error);
  })
  .on("error", console.error);
