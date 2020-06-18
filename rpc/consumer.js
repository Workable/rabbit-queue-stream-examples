const connection = require('../connect');

async function consume() {
  const sum = await connection.getReply('add', [1, 2]);
  console.log(sum);
}

consume();
