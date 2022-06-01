import { app } from '../server';
import request from 'supertest';
import { InvalidParamError, MissingParamError } from '../presentation';

describe('cep integration test', () => {
  test('POST /cep', async () => {
    const response = await request(app)
      .post('/cep')
      .send({
        cep: '30575368',
      })
      .expect(200);
  });
  test('POST /cep with incorrect data return error', async () => {
    const response = await request(app)
      .post('/cep')
      .send({
        cep: 'a',
      })
      .expect(400);

    expect(response.body['error']).toBe(new InvalidParamError('cep').message);
  });
  test('POST /cep with no data return error', async () => {
    const response = await request(app)
      .post('/cep')
      .send({
        cep: '',
      })
      .expect(400);

    expect(response.body['error']).toBe(new MissingParamError('cep').message);
  });

  test('POST /cep return an message if the neighborhood comes empty', async () => {
    const response = await request(app)
      .post('/cep')
      .send({
        cep: '18150000',
      })
      .expect(200);
    expect(response.body['message']).toBe('could not find the neighborhood');
  });
});
