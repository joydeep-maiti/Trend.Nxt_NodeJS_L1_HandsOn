const http = require('http');

const server = http.createServer((req, res) => {
    res.write("<h1>Welcome to Node.Js</h1>")
    res.end();
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8000);