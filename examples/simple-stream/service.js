const rabbit = require('../../connect');
const { BaseQueueHandler } = require('rabbit-queue');
const fs = require('fs');

class FileReader extends BaseQueueHandler {
  async handle({ event }) {
    console.log('sending back', event);
    return fs.createReadStream(event);
  }
}

rabbit.on('connected', () => {
  new FileReader('file_reader', rabbit);
});
