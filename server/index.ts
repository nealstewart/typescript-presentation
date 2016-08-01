/// <reference path="../typings/index.d.ts" />
import * as express from 'express'
var app: express.Express = express();

import {index} from './first_controller'
import {other} from './second_controller'

app.get('/', index);
app.get('/other', other);

app.listen(3000);
