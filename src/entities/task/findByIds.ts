import client from '../../client';

type TaskProjection = {
  attachmentCount?: boolean;
  recurrent?: boolean;
  // effortAllocation?: boolean; // For some Paid accounts
  // billingType?: boolean; // For some Paid accounts
};

// https://developers.wrike.com/documentation/api/methods/query-tasks
export async function findByIds(opts: { ids: string | string[]; projection?: TaskProjection }) {
  const { ids, projection } = opts || {};

  let preparedIds;

  if (!ids) {
    throw new Error('You should provide at least one id in `ids` argument');
  }

  if (typeof ids === 'string') preparedIds = ids;
  else if (Array.isArray(ids)) preparedIds = ids.join(',');

  if (!preparedIds) {
    throw new Error('You provide incorrect ids argument!');
  }

  const params: Record<string, any> = {};

  if (projection) {
    const p = Object.keys(projection).filter((n) => projection[n]);
    if (p.length > 0) params.fields = JSON.stringify(p);
  }

  const res = await client.get(`/tasks/${preparedIds}`, {
    params,
  });

  return res?.data?.data;
}
