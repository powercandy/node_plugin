

const glob = require('glob')

glob('./**/*.js', function(error, files) {
  if (error) throw error
  console.log(files)
})