const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('greet', (name) => {
  console.log(`hello, ${name}!`);
});

myEmitter.emit('greet', 'saba');
