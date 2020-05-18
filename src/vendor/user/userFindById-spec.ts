import { userFindById } from './userFindById';

describe('user/findById', () => {
  it('should return userData', async () => {
    const res = await userFindById({ id: 'KUAHMNRA' });
    expect(res.firstName).toBe('Pavel');
    expect(Object.keys(res)).toEqual([
      'id',
      'firstName',
      'lastName',
      'type',
      'profiles',
      'avatarUrl',
      'timezone',
      'locale',
      'deleted',
      'me',
      'title',
      'companyName',
      'phone',
    ]);
  });
});
