// Imports / Modules
const http = require('http');
const url = require('url');
const routeImport = require('./router');

// System Variables
// const hostname = 'localhost';
// Acceptable port numbers to use = [3000-5000]
const port = process.env.PORT;

// Creating the server
const server = http.createServer((req, res) => {

  const method = req.method;
  // console.log('METHOD', method);
  // Methods
  // GET
  // POST
  // DELETE
  // PUT / PATCH / UPDATE  

  const requestUrl = req.url;
  // console.log('URL', requestUrl);
  const host = req.socket.remoteAddress;

  const headers = req.headers;
  // console.log('HEADERS', headers);

  const formattedUrl = url.parse(requestUrl, true);
  // console.log('FORMATTED URL', formattedUrl);

  const searchParameters = formattedUrl.query;
  const requestedPath = formattedUrl.pathname;
  // Regular Expressions -> REGEX
  const trimmedPath = requestedPath.replace(/^\/+|\/+$/g, '');
  // console.log('QUERY', searchParameters);

  let body = '';
  req.on('data', (piece) => {
    body = body + piece;
  });

  req.on('end', () => {
    const routeHandler = typeof (routeImport.router[trimmedPath]) != 'undefined' ? routeImport.router[trimmedPath] : routeImport.handlers.notFound;

    const payload = {
      host,
      method,
      headers,
      searchParameters,
      trimmedPath,
      body,
    };

    routeHandler(payload, (statusCode, payloadData) => {
      // const payloadString = JSON.stringify(payloadData);
      // Status codes
      // 200 - 299 -> Success -> 200 -> Success, 201 -> Resource created successfully on server, 204 -> Logout
      // 300 - 399 -> Redirection -> 302 - The server has permanently moved
      // 400 - 499 -> Error -> 404 -> Not found -> 403 -> Unauthorized
      // 500 - 599 -> Internal Server Error
      res.statusCode = statusCode;

      // Headers -> A way for either the server/client to pass additional information
      res.setHeader('Content-Type', 'text/html');

      // Terminating the request
      res.end(payloadData);
    });
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at ${port}`);
});