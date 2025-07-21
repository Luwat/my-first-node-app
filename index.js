const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const port = 8080;

const server = http.createServer((req, res) => {
    let filePath = '';
    if (req.url === '/' || req.url === '/index.html') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/about.html') {
        filePath = path.join(__dirname, 'about.html');
    } else if (req.url === '/contact.html') {
        filePath = path.join(__dirname, 'contact.html');
    } else {
        filePath = path.join(__dirname, '404.html');
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    })
})

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});