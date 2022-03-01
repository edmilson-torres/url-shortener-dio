import 'dotenv/config';

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import MongoConnection from './database/mongo.connection';
import router from './routes/url.route';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const api = express();

api.use(express.json());
api.use(helmet());

api.use(
  cors({
    origin: '*',
    credentials: true,
    preflightContinue: true,
    allowedHeaders: ['X-Requested-With'],
    exposedHeaders: ['Content-Length', 'ETag', 'Link', 'X-RateLimit-Limit', 'X-RateLimit-Remaining'],
  }),
);

api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const database = new MongoConnection();
database.connect();

api.use(router);

export default api;
