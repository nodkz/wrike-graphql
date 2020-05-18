import client from '../client';
import { GraphQLResolveInfo } from 'graphql-compose/lib/graphql';
import { getFlatProjectionFromAST } from 'graphql-compose';

export const projectionFields = [
  'attachmentCount',
  'recurrent',
  // 'effortAllocation', // For some Paid accounts
  // 'billingType', // For some Paid accounts
] as const;

type Projection = typeof projectionFields[number][];

type FindByIdsOpts = {
  ids: string | string[];
  projection?: Projection;
};

// https://developers.wrike.com/documentation/api/methods/query-tasks
export async function _taskFindByIds(opts: FindByIdsOpts) {
  const { ids, projection } = opts || {};

  let preparedIds;

  if (!ids) {
    throw new Error('You should provide at least one id in `ids` argument');
  }

  if (typeof ids === 'string') preparedIds = ids;
  else if (Array.isArray(ids)) preparedIds = ids.join(',');

  if (!preparedIds) {
    throw new Error('You provide incorrect ids argument!');
  }

  const params: Record<string, any> = {};

  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  const res = await client.get(`/tasks/${preparedIds}`, {
    params,
  });

  return res?.data?.data;
}

export function taskFindByIds(
  opts: Exclude<FindByIdsOpts, 'projection'> & { info: GraphQLResolveInfo }
) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _taskFindByIds({ ...opts, projection });
}
