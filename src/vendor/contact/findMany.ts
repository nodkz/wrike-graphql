import { GraphQLResolveInfo } from 'graphql';
import { getFlatProjectionFromAST } from 'graphql-compose';
import client from '../client';

interface ContactFilter {
  me?: boolean;
  deleted?: boolean;
  metadata?: any;
}

export const projectionFields = ['metadata', 'workScheduleId'] as const;

type ContactProjection = typeof projectionFields[number][];

type FindManyOpts = {
  filter?: ContactFilter;
  projection?: ContactProjection;
};

// https://developers.wrike.com/api/v4/contacts/#query-contacts
export async function _findMany(opts?: FindManyOpts) {
  const { filter, projection } = opts || {};

  let params: Record<string, any> = {};

  if (filter) {
    params = { ...filter };
  }

  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  const res = await client.get('/contacts', { params });

  return res?.data?.data;
}

export function findMany(opts: Exclude<FindManyOpts, 'projection'> & { info: GraphQLResolveInfo }) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _findMany({ ...opts, projection });
}
