import { NextFunction, Request, Response } from 'express'

function isValidURL (string: string) {
  const res = string.match(/((?:([\w\d\.-]+)\:\/\/?){1}(?:(www)\.?){0,1}(((?:[\w\d-]+\.)*)([\w\d-]+\.[\w\d]+))){1}(?:\:(\d+)){0,1}((\/(?:(?:[^\/\s\?]+\/)*))(?:([^\?\/\s#]+?(?:.[^\?\s]+){0,1}){0,1}(?:\?([^\s#]+)){0,1})){0,1}(?:#([^#\s]+)){0,1}/gim)
  return (res !== null)
};

const isValidURLMiddleware = (req: Request, resp: Response, next: NextFunction) => {
  const { originURL } = req.body

  if (!isValidURL(originURL)) {
    resp.status(400).json({ error: 'Invalid URL' }).end()
  } else {
    next()
  }
}

export default isValidURLMiddleware
