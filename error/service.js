const connection = require('../connect');
const rabbitQueue = require('rabbit-queue');
const fs = require('fs');

class FileReader extends rabbitQueue.BaseQueueHandler {
  async handle({ event }) {
    console.log('sending back', event);
    return fs.createReadStream(event);
  }
}

connection.on('connected', () => {
  new FileReader('file_reader', connection);
});
