import { findMany } from './findMany';

describe('space/findMany', () => {
  it('should return array of spaces', async () => {
    const res = await findMany();
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
