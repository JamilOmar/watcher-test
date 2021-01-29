const chokidar = require('chokidar');
const folder = 'input-test';
console.log('This is a new test');
console.log(folder)
chokidar.watch(folder).on('all', (event, path) => {
  console.log(event, path);
});