import client from '../client';
import { getFlatProjectionFromAST } from 'graphql-compose';
import { GraphQLResolveInfo } from 'graphql';
import { AxiosRequestConfig } from 'axios';

export const projectionFields = ['userIds'] as const;

export type _CreateArgs = {
  workschedule: Record<string, any>;
  projection?: typeof projectionFields[number][];
};

export type CreateArgs = Exclude<_CreateArgs, 'projection'> & { info: GraphQLResolveInfo };

// https://developers.wrike.com/api/v4/work-schedules/#create-work-schedule
export async function _workScheduleCreate(opts: _CreateArgs, config: AxiosRequestConfig) {
  const { workschedule } = opts || {};
  const res = await client.post(`/workschedules`, workschedule, config);
  return res?.data?.data[0];
}

export function workScheduleCreate(opts: CreateArgs, config: AxiosRequestConfig) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _workScheduleCreate({ ...opts, projection }, config);
}
