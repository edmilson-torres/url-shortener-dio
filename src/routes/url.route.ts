import { Router } from 'express';
import URLController from '../controller/url.controller';
import isValidURLMiddleware from '../middlewares/isvalid-url.middleware';
import { rateLimiterRedirect, rateLimiterShorten, rateLimiterStats } from '../middlewares/rate-limit.middleware';

const router = Router();

const urlController = new URLController();

router.get('/:hash/stats', rateLimiterStats, urlController.stats);
router.get('/:hash', rateLimiterRedirect, urlController.redirect);
router.post('/shorten', rateLimiterShorten, isValidURLMiddleware, urlController.shorten);

export default router;
