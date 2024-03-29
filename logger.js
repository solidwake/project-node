const EventEmitter = require('events');
const uuid = require('uuid');
class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg});
    }
}

const logger = new Logger();

logger.on('message', function(data) {
    console.log('Called Listener', data)
});

logger.log('Hello World');
// Called Listener { id: '1092bc99-fd10-4299-9ce5-685a445d9fc9', msg: 'Hello World' }