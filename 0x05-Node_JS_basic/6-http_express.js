const express = require('express');
const app = express();
const port = 1245;

app.get('/', (_, response) => {
  const responseText = 'Hello Holberton School!';

  response.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': responseText.length
  });
  response.write(Buffer.from(responseText));
});

app.listen(port, () => {
  console.log(`Server listen on : http://localhost:${port}`);
});

module.exports = app;
