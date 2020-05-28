import client from '../client';
import { splitRequestBy100 } from '../_helpers/splitRequestBy100';

export type FindByIdsArgs = {
  ids: ReadonlyArray<string>;
  plainText?: boolean;
};

// https://developers.wrike.com/api/v4/comments/#get-comments
export async function commentFindByIds(opts: FindByIdsArgs) {
  const { ids, plainText } = opts || {};

  const params = {} as Record<string, any>;
  if (plainText) params.plainText = true;

  return splitRequestBy100(ids, async (preparedIds) => {
    const res = await client.get(`/comments/${preparedIds}`, { params });
    return res?.data?.data;
  });
}
