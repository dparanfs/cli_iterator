#! /usr/bin/env node
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'enter command > ',
});

readline.prompt();

readline.addListener('line', (line) => {
  const cmd = line.trim();

  if (cmd === 'log') {
    console.log('you choose log');
    readline.prompt();
  }

  if (cmd === 'hey') {
    console.log('hey yourself');
    readline.prompt();
  }

  if (cmd === 'exit') {
    console.log('exiting...');
    readline.close();
  }
});
