import client from '../client';
import { GraphQLResolveInfo } from 'graphql-compose/lib/graphql';
import { getFlatProjectionFromAST } from 'graphql-compose/lib/utils/projection';
import { AxiosRequestConfig } from 'axios';

export const projectionFields = ['metadata'] as const;

type Projection = typeof projectionFields[number][];

type FindByIdOpts = {
  id: string | string[];
  projection?: Projection;
};

// https://developers.wrike.com/api/v4/groups/#query-groups
export async function _groupFindById(opts: FindByIdOpts, context: AxiosRequestConfig) {
  const { id, projection } = opts || {};

  const params: Record<string, any> = {};

  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  const res = await client.get(`/groups/${id}`, {
    ...context,
    params,
  });

  return res?.data?.data[0];
}

export function groupFindById(
  opts: Exclude<FindByIdOpts, 'projection'> & { info: GraphQLResolveInfo },
  context: AxiosRequestConfig
) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _groupFindById({ ...opts, projection }, context);
}
