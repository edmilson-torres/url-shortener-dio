import { Router } from 'express'
import { URLController } from '../controller/url.controller'
import isValidURLMiddleware from '../middlewares/isvalid-url.middleware'

const route = Router()

const urlController = new URLController()

route.post('/shorten', isValidURLMiddleware, urlController.shorten)
route.get('/:hash', urlController.redirect)

export default route
