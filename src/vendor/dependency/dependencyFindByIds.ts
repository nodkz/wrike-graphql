import client from '../client';

export type FindByIdsArgs = {
  ids: string[];
};

// https://developers.wrike.com/api/v4/dependencies/#query-dependencies
export async function dependencyFindByIds(opts: FindByIdsArgs) {
  const { ids } = opts || {};

  if (!ids) {
    throw new Error('You should provide at least one id in `ids` argument');
  }

  const res = await client.get(`/dependencies/${ids.join(',')}`);

  return res?.data?.data;
}
