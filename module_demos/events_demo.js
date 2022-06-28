const EventEmitter = require('events');

// Create a class
class MyEmitter extends EventEmitter {}

// Initiate object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', function() {
    console.log('Event fired!');
});

// Initiate event
myEmitter.emit('event');
// Event fired!

