import { _findByIds } from './findByIds';

describe('task/findByIds', () => {
  it('should return array of tasks', async () => {
    const res = await _findByIds({
      ids: 'IEADMUW4KQOFGGKJ',
      // IEADMUW4KQOE4AD6, IEADMUW4KQOE4AQG
    });
    expect(Array.isArray(res)).toBeTruthy();
    expect(Object.keys(res[0])).toEqual([
      'id',
      'accountId',
      'title',
      'description',
      'briefDescription',
      'parentIds',
      'superParentIds',
      'sharedIds',
      'responsibleIds',
      'status',
      'importance',
      'createdDate',
      'updatedDate',
      'completedDate',
      'dates',
      'scope',
      'authorIds',
      'customStatusId',
      'hasAttachments',
      'permalink',
      'priority',
      'followedByMe',
      'followerIds',
      'superTaskIds',
      'subTaskIds',
      'dependencyIds',
      'metadata',
      'customFields',
    ]);
  });

  it('should return array of tasks', async () => {
    const res = await _findByIds({
      ids: ['IEADMUW4KQOE4AD6', 'IEADMUW4KQOE4AQG'],
    });
    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(2);
  });
});
