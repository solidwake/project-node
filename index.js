const http = require('http'),
path = require('path'),
fs = require('fs');

const server = http.createServer((req, res) => {
/*     if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' }); // If the resopnse is 200(OK) then render content in HTML
            res.end(content); // Renders this content at localhost:PORT
        })
    }

    if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' }); // If the resopnse is 200(OK) then render content in HTML
            res.end(content); // Renders this content at localhost:PORT
        })
    }

    if(req.url === '/api/users') {
        const users = [
            { name: 'Char Aznable', age: 28 },
            { name: 'Amuro Ray', age: 19 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    } */

    // Build the file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of the file
    let extName = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check file extension and set content type
    switch(extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            }else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});
// Get the PORT from the .env file. If the PORT is not there, use PORT 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));