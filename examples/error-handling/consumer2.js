const connection = require('../../connect');

(async function() {
  try {
    const file = await connection.getReply('file_reader', './cantrbry/plrabn12.txt');
    for await (const line of file) {
      console.log(line);
    }
  } catch (e) {
    console.log(e);
  }
})();
