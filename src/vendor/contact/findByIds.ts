import client from '../client';
import { getFlatProjectionFromAST } from 'graphql-compose';
import { GraphQLResolveInfo } from 'graphql-compose/lib/graphql';

export const projectionFields = ['metadata', 'workScheduleId'] as const;

type TaskProjection = typeof projectionFields[number][];

type FindByIdsOpts = { ids: string | string[]; projection?: TaskProjection };

// https://developers.wrike.com/api/v4/contacts/#query-contacts
export async function _findByIds(opts: FindByIdsOpts) {
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

  const res = await client.get(`/contacts/${preparedIds}`, {
    params,
  });

  return res?.data?.data;
}

export function findByIds(
  opts: Exclude<FindByIdsOpts, 'projection'> & { info: GraphQLResolveInfo }
) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _findByIds({ ...opts, projection });
}
