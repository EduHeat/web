import mongoose from 'mongoose';
import config from '../../config/default';

export default function connect() {
  const dbUri = config.dbUri;

  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log('Database connected!');
    })
    .catch((err) => {
      console.log('Error connecting to database', err.message);
    });
}
