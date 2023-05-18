const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = 'localhost';
const PORT = 3001;

const server = http.createServer((req, res) => {
    const { url } = req;

    res.setHeader('Access-Control-Allow-Origin', '*');

    if (url === '/api/repo-owners') {
        fs.readFile(path.join(__dirname, 'payload.json'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end();
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(data);
            }
        })
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});