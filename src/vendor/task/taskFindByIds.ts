import client from '../client';
import { GraphQLResolveInfo } from 'graphql-compose/lib/graphql';
import { getFlatProjectionFromAST } from 'graphql-compose';
import { splitRequestBy100 } from '../_helpers/splitRequestBy100';
import { AxiosRequestConfig } from 'axios';

export const projectionFields = [
  'attachmentCount',
  'recurrent',
  // 'effortAllocation', // For some Paid accounts
  // 'billingType', // For some Paid accounts
] as const;

type Projection = typeof projectionFields[number][];

type FindByIdsOpts = {
  ids: ReadonlyArray<string>;
  projection?: Projection;
};

// https://developers.wrike.com/documentation/api/methods/query-tasks
export async function _taskFindByIds(opts: FindByIdsOpts, context: AxiosRequestConfig) {
  const { ids, projection } = opts || {};
  const params: Record<string, any> = {};

  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  return splitRequestBy100(ids, async (preparedIds) => {
    const res = await client.get(`/tasks/${preparedIds}`, { ...context, params });
    return res?.data?.data;
  });
}

export function taskFindByIds(
  opts: Exclude<FindByIdsOpts, 'projection'> & { info: GraphQLResolveInfo },
  context: AxiosRequestConfig
) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _taskFindByIds({ ...opts, projection }, context);
}
