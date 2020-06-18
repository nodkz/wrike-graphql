import client from '../client';
import { GraphQLResolveInfo } from 'graphql';
import { getFlatProjectionFromAST } from 'graphql-compose';
import { AxiosRequestConfig } from 'axios';

export const projectionFields = ['userIds'] as const;

export type _FindByIdOpts = {
  id: string;
  projection?: typeof projectionFields[number][];
};

export type FindByIdOpts = Exclude<_FindByIdOpts, 'projection'> & { info: GraphQLResolveInfo };

// https://developers.wrike.com/api/v4/work-schedules/#query-work-schedules
export async function _workScheduleFindById(opts: _FindByIdOpts, context: AxiosRequestConfig) {
  const { id, projection } = opts || {};
  const params: Record<string, any> = {};

  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  const res = await client.get(`/workschedules/${id}`, { ...context, params });
  return res?.data?.data?.[0];
}

export function workScheduleFindById(opts: FindByIdOpts, context: AxiosRequestConfig) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _workScheduleFindById({ ...opts, projection }, context);
}
