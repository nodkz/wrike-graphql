import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface UpdateArgs {
  id: string;
  timelog: Record<string, any>;
}

// https://developers.wrike.com/api/v4/timelogs/#modify-timelog
export async function timelogUpdate(opts: UpdateArgs, config: AxiosRequestConfig) {
  const { id, timelog } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/timelogs/${id}`, timelog, config);

  return res?.data?.data[0];
}
