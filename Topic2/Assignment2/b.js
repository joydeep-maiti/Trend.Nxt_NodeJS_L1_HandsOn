const http = require('http');
const fs = require('fs');

const file = fs.createWriteStream("webpage.html");
const request = http.get("http://www.google.com/", function(response) {
  response.pipe(file);
});