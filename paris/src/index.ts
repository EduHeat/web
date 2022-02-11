import Express, { json } from 'express';
import logger from './logger';
import config from '../config/default';
import connect from './db/connect';
import routes from './routes';
import deserializeUser from './middleware/deserializeUser';

const app = Express();

app.use(logger());
app.use(json());
app.use(deserializeUser);

app.listen(config.port, config.host, () => {
  console.log(`Listening at http://${config.host}:${config.port}`);
  connect();
  routes(app);
});
