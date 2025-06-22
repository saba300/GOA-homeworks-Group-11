const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('run', () => {
  console.log('მოვლენა დაიწყო');
});

emitter.on('process', () => {
  console.log('მიმდინარეობს');
});

emitter.on('end', () => {
  console.log('პროცესი დასრულდა');
});

emitter.emit('run');
emitter.emit('process');
emitter.emit('end');
