import request from 'supertest';
import api from '../app';
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
import { URLModel } from '../database/models/url.model';

describe('URL shorten', () => {
  const randomHash = nanoid(10);
  const url = 'http://www.' + randomHash + '.com.br';

  test('create url', async () => {
    const res = await request(api).post('/shorten').send({
      originURL: url,
    });

    expect(res.statusCode).toEqual(201);
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.body.originURL).toEqual(url);
  });

  test('check if url exist', async () => {
    const res = await request(api).post('/shorten').send({
      originURL: url,
    });

    expect(res.statusCode).toEqual(200);
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.body.originURL).toEqual(url);
  });

  test('url stats info', async () => {
    const res = await request(api).post('/shorten').send({
      originURL: url,
    });
    const hash = res.body.hash;
    const stats = await request(api).get('/' + hash + '/stats');
    expect(stats.statusCode).toEqual(200);
    expect(stats.header['content-type']).toBe('application/json; charset=utf-8');
    expect(stats.body).toHaveProperty('clicks');
  });

  test('check if stats info contains clicks 1', async () => {
    const res = await request(api).post('/shorten').send({
      originURL: url,
    });
    const hash = res.body.hash;
    await request(api).get('/' + hash);
    const stats = await request(api).get('/' + hash + '/stats');

    expect(stats.statusCode).toEqual(200);
    expect(stats.header['content-type']).toBe('application/json; charset=utf-8');
    expect(stats.body.clicks).toBe(1);
  });

  afterAll(async () => {
    await URLModel.deleteOne({ originURL: url });
  });
  afterAll((done) => {
    mongoose.disconnect(done);
  });
});
