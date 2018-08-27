
// Elegant Terminal Spinner
// 优雅的终端进程展示

const ora = require('ora');

const spinner = ora('loading unicorns').start();

setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'loading rainbows'
}, 1000)

setTimeout(() => {
  spinner.stop();
}, 3000)