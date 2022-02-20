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
api.use(cors({ origin: '*' }));

api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const database = new MongoConnection();
database.connect();

api.use(router);

export default api;
