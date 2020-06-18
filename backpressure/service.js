const connection = require('../connect');
const rabbitQueue = require('rabbit-queue');
const fs = require('fs');
const readline = require('readline');
const { Readable } = require('stream');

class FileReader extends rabbitQueue.BaseQueueHandler {
  async handle({ event }) {
    return Readable.from(read(event));
  }
}

async function* read(file) {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(file)
  });
  let i = 0;
  for await (const line of readInterface) {
    yield { i: i++, line: line };
    // throw new Error('foo');
    // await new Promise(r => setTimeout(r, 50));
  }
}

connection.on('connected', () => {
  new FileReader('file_reader', connection);
});
