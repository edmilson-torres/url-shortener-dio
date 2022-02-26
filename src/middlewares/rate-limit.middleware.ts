import { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';

export const rateLimiterShorten = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  keyGenerator(req: Request): string {
    return req.ip;
  },
  handler(_, res: Response): void {
    res.status(429).json({
      error: 'Too many requests',
    });
  },
});

export const rateLimiterStats = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
  keyGenerator(req: Request): string {
    return req.ip;
  },
  handler(_, res: Response): void {
    res.status(429).json({
      error: 'Too many requests',
    });
  },
});

export const rateLimiterRedirect = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60,
  keyGenerator(req: Request): string {
    return req.ip;
  },
  handler(_, res: Response): void {
    res.status(429).json({
      error: 'Too many requests',
    });
  },
});
