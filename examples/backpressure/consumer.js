const rabbit = require('../../connect');

(async function () {
  const correlationId = '1';
  try {
    const date = new Date();
    const file = await rabbit.getReply('file_reader', './cantrbry/fields.c', {
      correlationId,
      headers: { backpressure: true, timeout: 1000 },
    });

    for await (const line of file) {
      console.log(line);
      // throw new Error('foo');
      // await new Promise(r => setTimeout(r, 2000));
      // file.emit(rabbit.constructor.STOP_STREAM);
    }

    console.log(`took ${+new Date() - +date} ms`);
  } catch (e) {
    console.log(e);
  }
})();
