import { NextFunction, Request, Response } from 'express'
import isValidURL from '../utils/is-valid-url.utils'

const isValidURLMiddleware = (req: Request, resp: Response, next: NextFunction) => {
  const { originURL } = req.body

  if (!isValidURL(originURL)) {
    resp.status(400).json({ error: 'Invalid base URL' })
  } else {
    next()
  }
}

export default isValidURLMiddleware
