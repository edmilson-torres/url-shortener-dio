import { NextFunction, Request, Response } from 'express'

function isValidURL (string: string) {
  const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
  return (res !== null)
};

const isValidURLMiddleware = (req: Request, resp: Response, next: NextFunction) => {
  const { originURL } = req.body

  if (!isValidURL(originURL)) {
    resp.status(400).json({ error: 'Invalid URL' })
  }
  next()
}

export default isValidURLMiddleware
