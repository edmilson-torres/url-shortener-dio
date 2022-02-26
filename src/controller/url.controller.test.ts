import request from 'supertest';
import api from '../app';
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
import URLModel from '../database/models/url.model';

const randomHash = nanoid(10);
const url = 'http://www.' + randomHash + '.com.br';

describe('url controller', () => {
  test('should be able to create a shorten url', async () => {
    const res = await request(api).post('/shorten').send({
      originURL: url,
    });

    expect(res.statusCode).toEqual(201);
  });

  test('should be able to check if url exists', async () => {
    const res = await request(api).post('/shorten').send({
      originURL: url,
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.originURL).toEqual(url);
  });

  test('should be able to get clicks stat', async () => {
    const res = await request(api).post('/shorten').send({
      originURL: url,
    });

    expect(res.body).toHaveProperty('clicks');
  });

  test('should be able to check clicks increment ', async () => {
    const res = await request(api).post('/shorten').send({
      originURL: url,
    });
    const hash = res.body.hash;
    await request(api).get('/' + hash);
    const stats = await request(api).get('/' + hash + '/stats');

    expect(stats.body.clicks).toBe(1);
  });

  test('should be able redirect short url to origin', async () => {
    const res = await request(api).post('/shorten').send({
      originURL: url,
    });
    const hash = res.body.hash;
    await request(api).get('/' + hash);
    const redirect = await request(api).get('/' + hash);

    expect(redirect.statusCode).toEqual(302);
  });

  afterAll(async () => {
    await URLModel.deleteOne({ originURL: url });
  });
  afterAll((done) => {
    mongoose.disconnect(done);
  });
});
