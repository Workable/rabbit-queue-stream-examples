const connection = require('../../connect');
const rabbitQueue = require('rabbit-queue');
const fs = require('fs');

class FileReader extends rabbitQueue.BaseQueueHandler {
  async handle({ event }) {
    console.log('sending back', event);
    const stream = fs.createReadStream(event);
    setTimeout(() => stream.emit('error', new Error('foo')), 10);
    return stream;
  }
}

connection.on('connected', () => {
  new FileReader('file_reader', connection);
});
