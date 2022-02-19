import { Router } from 'express';
import { URLController } from '../controller/url.controller';
import isValidURLMiddleware from '../middlewares/isvalid-url.middleware';
import { rateLimiterRedirect, rateLimiterShorten, rateLimiterStats } from '../middlewares/rate-limit.middleware';

const route = Router();

const urlController = new URLController();

route.get('/:hash/stats', rateLimiterStats, urlController.stats);
route.get('/:hash', rateLimiterRedirect, urlController.redirect);
route.post('/shorten', rateLimiterShorten, isValidURLMiddleware, urlController.shorten);

export default route;
