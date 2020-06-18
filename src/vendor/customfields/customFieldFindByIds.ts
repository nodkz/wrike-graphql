import client from '../client';
import { splitRequestBy100 } from '../_helpers/splitRequestBy100';
import { AxiosRequestConfig } from 'axios';

type FindByIdsOpts = {
  ids: ReadonlyArray<string>;
};

// https://developers.wrike.com/api/v4/custom-fields/#query-custom-fields
export async function customFieldFindByIds(opts: FindByIdsOpts, context: AxiosRequestConfig) {
  const { ids } = opts || {};
  return splitRequestBy100(ids, async (preparedIds) => {
    const res = await client.get(`/customfields/${preparedIds}`, context);
    return res?.data?.data;
  });
}
