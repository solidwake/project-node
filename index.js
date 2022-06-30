/* const Logger = require('./logger');

const logger = new Logger();

logger.on('message', function(data) {
    console.log('Called Listener', data)
});

logger.log('Hello World');
// Called Listener { id: '1092bc99-fd10-4299-9ce5-685a445d9fc9', msg: 'Hello World' } */

const http = require('http'),
path = require('path'),
fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
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
    }
});
// Get the PORT from the .env file. If the PORT is not there, use PORT 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));