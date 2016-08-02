var express = require('express');
var firstController = require('./first_controller');

var app = express();
app.get('/', firstController.index);

app.listen(3000);
