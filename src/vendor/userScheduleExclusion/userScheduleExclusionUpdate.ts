import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface UpdateArgs {
  id: string;
  exclusion: Record<string, any>;
}

// https://developers.wrike.com/api/v4/user-schedule-exceptions/#update-user-schedule-exception
export async function userScheduleExclusionUpdate(opts: UpdateArgs, config: AxiosRequestConfig) {
  const { id, exclusion } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/user_schedule_exclusions/${id}`, exclusion, config);
  return res?.data?.data[0];
}
