import { GraphQLResolveInfo } from 'graphql';
import { getFlatProjectionFromAST } from 'graphql-compose';
import client from '../client';
import { AxiosRequestConfig } from 'axios';

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
export async function _contactFindMany(opts: FindManyOpts, context: AxiosRequestConfig) {
  const { filter, projection } = opts || {};

  let params: Record<string, any> = {};

  if (filter) {
    params = { ...filter };
  }

  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  const res = await client.get('/contacts', { ...context, params });

  return res?.data?.data;
}

export function contactFindMany(
  opts: Exclude<FindManyOpts, 'projection'> & { info: GraphQLResolveInfo },
  context: AxiosRequestConfig
) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _contactFindMany({ ...opts, projection }, context);
}
