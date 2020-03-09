import { findMany } from './findMany';

describe('task/findMany', () => {
  it('should return array of tasks', async () => {
    const res = await findMany();
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
    const res = await findMany({
      limit: 2,
      // pageSize: 2,
      // nextPageToken: '',
      projection: {
        authorIds: true,
        hasAttachments: true,
        attachmentCount: true,
        parentIds: true,
        superParentIds: true,
        sharedIds: true,
        responsibleIds: true,
        description: true,
        briefDescription: true,
        recurrent: true,
        superTaskIds: true,
        subTaskIds: true,
        dependencyIds: true,
        metadata: true,
        customFields: true,
      },
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
