import client from '../client';

describe('client', () => {
  it('should get all tasks', async () => {
    const res = await client.get('/tasks');
    expect(Object.keys(res)).toEqual([
      'status',
      'statusText',
      'headers',
      'config',
      'request',
      'data',
    ]);
    expect(res).toEqual({
      config: expect.anything(),
      request: expect.anything(),
      headers: expect.anything(),
      status: 200,
      statusText: 'OK',
      data: {
        data: expect.anything(),
        kind: 'tasks',
      },
    });
  });
});
