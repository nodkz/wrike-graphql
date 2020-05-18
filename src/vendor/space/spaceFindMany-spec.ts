import { spaceFindMany } from './spaceFindMany';

describe('space/findMany', () => {
  it('should return array of spaces', async () => {
    const res = await spaceFindMany();
    expect(Array.isArray(res)).toBeTruthy();
    expect(res[0]).toEqual({
      accessType: expect.any(String),
      archived: expect.any(Boolean),
      avatarUrl: expect.any(String),
      id: expect.any(String),
      title: expect.any(String),
    });
  });
});
