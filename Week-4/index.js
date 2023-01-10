// Imports / Modules
const http = require('http');

// System Variables
const hostname = '127.0.0.1';
// Acceptable port numbers to use = [3000-5000]
const port = 3000;

// Creating the server
const server = http.createServer((req, res) => {
  // Methods
  // GET
  // POST
  // DELETE
  // PUT / PATCH / UPDATE  

  // Status codes
  // 200 - 299 -> Success -> 200 -> Success, 201 -> Resource created successfully on server, 204 -> Logout
  // 300 - 399 -> Redirection -> 302 - The server has permanently moved
  // 400 - 499 -> Error -> 404 -> Not found -> 403 -> Unauthorized
  // 500 - 599 -> Internal Server Error
  res.statusCode = 200;

  // Headers -> A way for either the server/client to pass additional information
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('XXX','YYYY');

  // Terminating the request
  res.end('Hello World\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});