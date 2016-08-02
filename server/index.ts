/// <reference path="../typings/index.d.ts" />
import * as express from 'express'
import {index} from 'controller'

var app = express();
app.get('/', controller.index);

app.listen(3000);
console.log('Started server on port 3000');
