import client from '../client';
import { splitRequestBy100 } from '../_helpers/splitRequestBy100';

type FindByIdsOpts = {
  ids: ReadonlyArray<string>;
};

// https://developers.wrike.com/api/v4/custom-fields/#query-custom-fields
export async function customFieldFindByIds(opts: FindByIdsOpts) {
  const { ids } = opts || {};
  return splitRequestBy100(ids, async (preparedIds) => {
    const res = await client.get(`/customfields/${preparedIds}`);
    return res?.data?.data;
  });
}
