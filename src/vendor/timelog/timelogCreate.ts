import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface CreateArgs {
  taskId: string;
  timelog: Record<string, any>;
}

// https://developers.wrike.com/api/v4/timelogs/#create-timelog
export async function timelogCreate(opts: CreateArgs, context: AxiosRequestConfig) {
  const { taskId, timelog } = opts || {};

  if (!taskId) throw new Error('You should provide `taskId`');
  const res = await client.post(`/tasks/${taskId}/timelogs`, timelog, context);

  return res?.data?.data[0];
}
