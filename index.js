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
        res.writeHead(200, { 'Content-Type': 'text/html' }) // If the resopnse is 200(OK) then render content in HTML
        res.end('<h1>Home</h1>'); // Renders this content at localhost:PORT
    }
});
// Get the PORT from the .env file. If the PORT is not there, use PORT 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));