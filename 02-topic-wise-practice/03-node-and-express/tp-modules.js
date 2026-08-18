const cow = require('cowsay');
const prompt = require('prompt-sync')();
const figlet = require('figlet');

const msg = prompt('Enter txt to display: ');

console.log(figlet.textSync('COW SAYS ' + msg));
console.log(cow.say({text: msg, f: 'cat'}));
