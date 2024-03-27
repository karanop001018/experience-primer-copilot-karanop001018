// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
var http = require('http');
var fs = require('fs');
var path = require('path');
// Set up the HTTP server to serve files from
// the public directory
var server = http.createServer(function(req, res) {
  // Get the path of the file to serve
  var filePath = path.join(__dirname, 'comments.html');
  // Read the file and send it to the client
  fs.readFile(filePath, function(err, data) {
    if (err) {
      res.writeHead(500);
      res.end('Error loading file');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});
// Start the server
server.listen(3000, function() {
  console.log('Server listening on port 3000');
});
// Now, when you visit http://localhost:3000 in your browser, you should see the comments.html file.
// Add a route for the comments.js file
// Now that you have the server set up to serve the comments.html file, add a route for the comments.js file. Use the fs module to read the file and send it to the client.
