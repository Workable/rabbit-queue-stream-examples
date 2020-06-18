const rabbitQueue = require('rabbit-queue');
var log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'console' } },
  categories: { default: { appenders: ['cheese'], level: 'debug' } }
});

const connection = new rabbitQueue.Rabbit('amqp://localhost');
connection.on('connected', () => console.log('Connected to rabbitmq!'));
connection.on('disconnected', (err = new Error('Rabbitmq Disconnected')) => console.log(err));

module.exports = connection;
