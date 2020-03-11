import { _findMany } from './findMany';

describe('task/findMany', () => {
  it('should return array of tasks', async () => {
    const res = await _findMany();
    expect(Array.isArray(res)).toBeTruthy();
    expect(Object.keys(res[0])).toEqual([
      'id',
      'accountId',
      'title',
      'status',
      'importance',
      'createdDate',
      'updatedDate',
      'dates',
      'scope',
      'customStatusId',
      'permalink',
      'priority',
    ]);
  });

  it('should support projections', async () => {
    const res = await _findMany({
      limit: 2,
      // pageSize: 2,
      // nextPageToken: '',
      projection: [
        'authorIds',
        'hasAttachments',
        'attachmentCount',
        'parentIds',
        'superParentIds',
        'sharedIds',
        'responsibleIds',
        'description',
        'briefDescription',
        'recurrent',
        'superTaskIds',
        'subTaskIds',
        'dependencyIds',
        'metadata',
        'customFields',
      ],
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
      'dates',
      'scope',
      'authorIds',
      'customStatusId',
      'hasAttachments',
      'attachmentCount',
      'permalink',
      'priority',
      'superTaskIds',
      'subTaskIds',
      'dependencyIds',
      'metadata',
      'customFields',
    ]);
  });
});
