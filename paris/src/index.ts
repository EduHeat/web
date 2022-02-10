import Express, { json } from 'express';
import logger from './logger';
import config from '../config/default';
import connect from './db/connect';
import routes from './routes';

const app = Express();

app.use(logger());
app.use(json());

app.listen(config.port, config.host, () => {
  console.log(`Listening at http://${config.host}:${config.port}`);
  connect();
  routes(app);
});
