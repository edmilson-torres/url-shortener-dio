import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import config from '../config/constants';
import { URLModel } from '../database/models/url.model';

class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    try {
      const { originURL } = req.body;
      const url = await URLModel.findOne({ originURL });
      if (url) {
        res.json(url);
        return;
      }

      const hash = nanoid(10);
      const shortURL = `${config.API_URL}/${hash}`;
      const createAt = new Date().toISOString();
      const newURL = await URLModel.create({
        hash,
        shortURL,
        originURL,
        createAt,
      });
      res.status(201).json(newURL);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Server Error' });
    }
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    try {
      const { hash } = req.params;
      const url = await URLModel.findOne({ hash });

      if (url) {
        url.clicks += 1;
        await URLModel.updateOne({ hash: url.hash }, { clicks: url.clicks });
        res.status(200).redirect(url.originURL);
        return;
      }

      res.status(404).json({ error: 'URL not found' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Server Error' });
    }
  }

  public async stats(req: Request, res: Response): Promise<void> {
    try {
      const { hash } = req.params;
      const url = await URLModel.findOne({ hash });

      if (url) {
        res.status(200).json(url);
        return;
      }

      res.status(404).json({ error: 'URL not found' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Server Error' });
    }
  }
}

export default URLController;
