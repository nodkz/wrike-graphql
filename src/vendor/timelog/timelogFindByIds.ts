import client from '../client';
import { splitRequestBy100 } from '../_helpers/splitRequestBy100';

export type FindByIdsArgs = {
  ids: ReadonlyArray<string>;
  plainText?: boolean;
};

// https://developers.wrike.com/api/v4/timelogs/#query-timelogs
export async function timelogFindByIds(opts: FindByIdsArgs) {
  const { ids, plainText } = opts || {};
  const params = {} as Record<string, any>;
  if (plainText) params.plainText = true;

  return splitRequestBy100(ids, async (preparedIds) => {
    const res = await client.get(`/timelogs/${preparedIds}`, { params });
    return res?.data?.data;
  });
}
