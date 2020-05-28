import client from '../client';
import { splitRequestBy100 } from '../_helpers/splitRequestBy100';

export type FindByIdsOpts = {
  ids: ReadonlyArray<string>;
};

// https://developers.wrike.com/api/v4/approvals/#get-approvals
export async function approvalFindByIds(opts: FindByIdsOpts) {
  const { ids } = opts || {};
  const params: Record<string, any> = {};

  return splitRequestBy100(ids, async (preparedIds) => {
    const res = await client.get(`/approvals/${preparedIds}`, { params });
    return res?.data?.data;
  });
}
