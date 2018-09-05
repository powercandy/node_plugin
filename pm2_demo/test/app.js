const express = require('express');
const app = express();
app.get('/', function(req, res) {
	res.send('Hello World!');
})
const server = app.listen(3002, function () {
	console.log('server has beginning!')
})
