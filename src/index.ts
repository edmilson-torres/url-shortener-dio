/* eslint-disable import/first */
require('dotenv').config()

import express from 'express'
import { MongoConnection } from './database/mongoConnection'
import urlRoute from './routes/url.route'
import helmet from 'helmet'

const api = express()

api.use(helmet())
api.use(express.json())

const database = new MongoConnection()
database.connect()

api.use(urlRoute)

api.listen(process.env.PORT, () => console.log('Express listening, PORT: ' + process.env.PORT))
