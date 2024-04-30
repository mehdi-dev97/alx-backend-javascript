const http = require('http');
const port = 1245;

const app = http.createServer((request, response) => {
  response.writeHead('200', {
    'Content-type': 'text/plain'
  });
  response.end('Hello Holberton School!');
}).listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});

module.exports = app;
