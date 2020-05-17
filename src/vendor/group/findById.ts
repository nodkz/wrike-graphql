import client from '../client';
import { GraphQLResolveInfo } from 'graphql-compose/lib/graphql';
import { getFlatProjectionFromAST } from 'graphql-compose/lib/utils/projection';

export const projectionFields = ['metadata'] as const;

type Projection = typeof projectionFields[number][];

type FindByIdOpts = {
  id: string | string[];
  projection?: Projection;
};

// https://developers.wrike.com/api/v4/groups/#query-groups
export async function _findById(opts: FindByIdOpts) {
  const { id, projection } = opts || {};

  const params: Record<string, any> = {};

  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  const res = await client.get(`/groups/${id}`, {
    params,
  });

  return res?.data?.data[0];
}

export function findById(opts: Exclude<FindByIdOpts, 'projection'> & { info: GraphQLResolveInfo }) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _findById({ ...opts, projection });
}
