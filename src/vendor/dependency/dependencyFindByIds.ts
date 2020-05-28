import client from '../client';
import { splitRequestBy100 } from '../_helpers/splitRequestBy100';

export type FindByIdsArgs = {
  ids: ReadonlyArray<string>;
};

// https://developers.wrike.com/api/v4/dependencies/#query-dependencies
export async function dependencyFindByIds(opts: FindByIdsArgs) {
  const { ids } = opts || {};
  return splitRequestBy100(ids, async (preparedIds) => {
    const res = await client.get(`/dependencies/${preparedIds}`);
    return res?.data?.data;
  });
}
