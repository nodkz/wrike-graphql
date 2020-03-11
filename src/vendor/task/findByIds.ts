import client from '../client';

export const projectionFields = [
  'attachmentCount',
  'recurrent',
  // 'effortAllocation', // For some Paid accounts
  // 'billingType', // For some Paid accounts
] as const;

type TaskProjection = typeof projectionFields[number][];

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
    if (projection.length > 0) params.fields = projection;
  }

  const res = await client.get(`/tasks/${preparedIds}`, {
    params,
  });

  return res?.data?.data;
}
