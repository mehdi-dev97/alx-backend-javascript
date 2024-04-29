const process = require('node:process');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const fullName = process.stdin.read();

  if (fullName) {
    process.stdout.write(`Your name is: ${fullName}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
