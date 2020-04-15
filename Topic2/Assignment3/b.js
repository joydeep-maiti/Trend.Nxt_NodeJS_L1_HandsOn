const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.readFile('./Views/index.html', (err, data) => {
        res.write(data)
        res.end();
    });
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8000);