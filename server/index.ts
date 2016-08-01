/// <reference path="../typings/index.d.ts" />
var express = require('express');
var app = express();

var firstController = require('./first_controller');
var secondController = require('./second_controller');

app.get('/', firstController.index);
app.get('/other', secondController.other);

app.listen(3000);
