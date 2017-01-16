import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as path from 'path';
import * as compression from 'compression';

import { gatewaysRouter } from './routes/api/gateways';

const app: express.Application = express();

app.disable('x-powered-by');

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

// url main message for test
app.get('/api', function(req, res) {
 res.send('api server is running');      
});

// api routes
app.use('/api/gateways', gatewaysRouter);

// static file path
app.use(express.static(path.join(__dirname, '/../client')));

export { app }
