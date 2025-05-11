const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello, DevOps World!');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

