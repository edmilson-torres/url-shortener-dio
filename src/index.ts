/* eslint-disable import/first */
require('dotenv').config()

import express from 'express'
import helmet from 'helmet'
import { MongoConnection } from './database/mongo.connection'
import urlRoute from './routes/url.route'

const api = express()

api.use(express.json())
api.use(helmet())

const database = new MongoConnection()
database.connect()

api.use(urlRoute)

api.listen(process.env.PORT, () => console.log('Express listening, PORT: ' + process.env.PORT))
