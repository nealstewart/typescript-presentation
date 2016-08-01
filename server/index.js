"use strict";
/// <reference path="../typings/index.d.ts" />
var express = require('express');
var app = express();
var first_controller_1 = require('./first_controller');
var secondController = require('./second_controller');
app.get('/', first_controller_1.index);
app.get('/other', secondController.other);
app.listen(3000);
