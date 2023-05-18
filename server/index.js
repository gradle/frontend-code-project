const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = 'localhost';
const PORT = 3001;

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/api/repo-owners') {
        fs.readFile(path.join(__dirname, 'payload.json'), (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('An error occurred while trying to send the file.');
            } else {
                console.log('Data sent successfully.');
                res.statusCode = 200;
                res.end(data);
            }
        })
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});

