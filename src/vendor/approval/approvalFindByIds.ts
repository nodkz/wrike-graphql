import client from '../client';

export type FindByIdsOpts = {
  ids: string[];
};

// https://developers.wrike.com/api/v4/approvals/#get-approvals
export async function approvalFindByIds(opts: FindByIdsOpts) {
  const { ids } = opts || {};

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

  const res = await client.get(`/approvals/${preparedIds}`, {
    params,
  });

  return res?.data?.data;
}
