var express = require('express');
var controller = require('./controller');

var app = express();
app.get('/', controller.index);

app.listen(3000);
console.log('Started server on port 3000');
