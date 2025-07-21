const http = require('node:http');

const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, World!</h1><p>This is my first Node.js application.</p>');
})

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});