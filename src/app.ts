import 'dotenv/config';

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import MongoConnection from './database/mongo.connection';
import urlRoute from './routes/url.route';

const api = express();

api.use(express.json());
api.use(helmet());
api.use(
  cors({
    origin: '*',
  }),
);

const database = new MongoConnection();
database.connect();

api.use(urlRoute);

export default api;
