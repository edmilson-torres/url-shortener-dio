import { Request, Response } from 'express'
import { nanoid } from 'nanoid'
import { config } from '../config/Constants'
import { URLModel } from '../database/models/url.model'

export class URLController {
  public async shorten (req: Request, response: Response): Promise<void> {
    const { originURL } = req.body
    const url = await URLModel.findOne({ originURL })
    if (url) {
      response.json(url)
      return
    }

    const hash = nanoid(10)
    const shortURL = `${config.API_URL}/${hash}`
    const createAt = new Date().toISOString()
    const newURL = await URLModel.create({ hash, shortURL, originURL, createAt })
    response.status(201).json(newURL)
  }

  public async redirect (req: Request, response: Response): Promise<void> {
    const { hash } = req.params
    const url = await URLModel.findOne({ hash })

    if (url) {
      response.status(200).redirect(url.originURL)
      return
    }

    response.status(404).json({ error: 'URL not found' })
  }
}
