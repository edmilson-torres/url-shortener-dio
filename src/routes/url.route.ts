import { Router } from 'express'
import { URLController } from '../controller/url.controller'
import isValidURLMiddleware from '../middlewares/isvalid-url.middleware'

const route = Router()

const urlController = new URLController()

route.get('/:hash/stats', urlController.stats)
route.get('/:hash', urlController.redirect)
route.post('/shorten', isValidURLMiddleware, urlController.shorten)

export default route
