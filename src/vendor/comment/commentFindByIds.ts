import client from '../client';

export type FindByIdsArgs = {
  ids: string[];
};

// https://developers.wrike.com/api/v4/comments/#get-comments
export async function commentFindByIds(opts: FindByIdsArgs) {
  const { ids } = opts || {};

  if (!ids) {
    throw new Error('You should provide at least one id in `ids` argument');
  }

  const res = await client.get(`/comments/${ids.join(',')}`);

  return res?.data?.data;
}
