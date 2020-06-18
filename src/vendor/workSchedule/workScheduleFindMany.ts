import client from '../client';
import { GraphQLResolveInfo } from 'graphql';
import { getFlatProjectionFromAST } from 'graphql-compose';
import { AxiosRequestConfig } from 'axios';

export const projectionFields = ['userIds'] as const;

export type _FindManyOpts = {
  projection?: typeof projectionFields[number][];
};

export type FindManyOpts = Exclude<_FindManyOpts, 'projection'> & { info: GraphQLResolveInfo };

// https://developers.wrike.com/api/v4/work-schedules/#query-work-schedules
export async function _workScheduleFindMany(opts: _FindManyOpts, context: AxiosRequestConfig) {
  const { projection } = opts || {};

  const params: Record<string, any> = {};
  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  const res = await client.get(`/workschedules`, { ...context, params });
  return res?.data?.data;
}

export function workScheduleFindMany(opts: FindManyOpts, context: AxiosRequestConfig) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _workScheduleFindMany({ ...opts, projection }, context);
}
