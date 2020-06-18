const rabbit = require('../../connect');

(async function () {
  const file = await rabbit.getReply('file_reader', './cantrbry/plrabn12.txt');
  for await (const line of file) {
    console.log(line);
  }
})();
