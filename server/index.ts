/// <reference path="../typings/index.d.ts" />
import * as express from 'express'
var app: express.Express = express();

import {index} from './first_controller'
var secondController = require('./second_controller');

app.get('/', index);
app.get('/other', secondController.other);

app.listen(3000);
