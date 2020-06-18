const rabbit = require('../../connect');
const rabbitQueue = require('rabbit-queue');
const fs = require('fs');

rabbit.createQueue('add', { durable: false }, (msg, ack) => {
  const numbers = JSON.parse(msg.content.toString());
  ack(null, numbers[0] + numbers[1]);
});
