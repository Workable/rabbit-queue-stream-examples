const rabbit = require('../../connect');

async function consume() {
  const sum = await rabbit.getReply('add', [1, 2]);
  console.log(sum);
}

consume();
