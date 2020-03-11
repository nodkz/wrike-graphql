import { findMany } from './findMany';

describe('space/findMany', () => {
  it('should return array of spaces', async () => {
    const res = await findMany();
    expect(Array.isArray(res)).toBeTruthy();
    expect(Object.keys(res[0])).toEqual(['id', 'title', 'avatarUrl', 'accessType', 'archived']);
  });
});
