const rabbitQueue = require('rabbit-queue');

const connection = new rabbitQueue.Rabbit('amqp://localhost');
connection.on('connected', () => console.log('Connected to rabbitmq!'));
connection.on('disconnected', (err = new Error('Rabbitmq Disconnected')) => console.log('disconnected'));

module.exports = connection;
