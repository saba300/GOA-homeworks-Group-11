const fs = require('fs');
const EventEmitter = require('events');

class Logger extends EventEmitter {
  logMessage(message) {
    try {
      fs.appendFileSync('log.txt', message + '\n');
      this.emit('messageLogged', message);
    } catch (err) {
      console.error('Error writing to file:', err);
    }
  }

  logExit(message) {
    try {
      fs.appendFileSync('log.txt', message + '\n');
      this.emit('exitProgram', message);
    } catch (err) {
      console.error('Error writing exit message to file:', err);
    }
  }
}

const logger = new Logger();

logger.on('messageLogged', (msg) => {
  console.log(`Event: messageLogged -> ${msg}`);
});

logger.on('exitProgram', (msg) => {
  console.log(`Event: exitProgram -> ${msg}`);
});

process.stdout.write('Enter a message (type "exit" to quit):\n');

process.stdin.on('data', (input) => {
  const message = input.toString().trim();

  if (message.toLowerCase() === 'exit') {
    const exitMessage = 'Goodbye! Program exited.';
    logger.logExit(exitMessage);
    process.exit();
  } else {
    logger.logMessage(message);
    console.log(`You typed: ${message}`);
    process.stdout.write('Enter another message:\n');
  }
});
