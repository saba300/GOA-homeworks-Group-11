const EventEmitter = require('events');
const readline = require('readline');

class TaskTracker extends EventEmitter {
  constructor() {
    super();
    this.tasks = [];

    this.on('taskAdded', (task) => {
      console.log(`task added "${task}"`);
      console.log(`current tasks: ${this.tasks.length}`);
    });

    this.on('exit', () => {
      console.log('finnished');
      console.log(`you added ${this.tasks.length} tasks.`);
      process.exit(0);
    });
  }

  addTask(task) {
    this.tasks.push(task);
    this.emit('taskAdded', task);
  }
}

const tracker = new TaskTracker();

process.stdout.write('enter task or write "exit"');

process.stdin.on('data', (input) => {
  const text = input.toString().trim();

  if (text.toLowerCase() === 'exit') {
    tracker.emit('exit');
  } else if (text) {
    tracker.addTask(text);
  }

  process.stdout.write('new task or "exit"');
});
