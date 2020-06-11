import client from '../client';
import { splitRequestBy100 } from '../_helpers/splitRequestBy100';
import { AxiosRequestConfig } from 'axios';

export type FindByIdsArgs = {
  ids: ReadonlyArray<string>;
};

// https://developers.wrike.com/api/v4/dependencies/#query-dependencies
export async function dependencyFindByIds(opts: FindByIdsArgs, config: AxiosRequestConfig) {
  const { ids } = opts || {};
  return splitRequestBy100(ids, async (preparedIds) => {
    const res = await client.get(`/dependencies/${preparedIds}`, config);
    return res?.data?.data;
  });
}
