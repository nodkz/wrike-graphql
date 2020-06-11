import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface RemoveArgs {
  id: string;
}

// https://developers.wrike.com/api/v4/user-schedule-exceptions/#delete-user-schedule-exception
export async function userScheduleExclusionRemove(opts: RemoveArgs, config: AxiosRequestConfig) {
  const { id } = opts || {};
  if (!id) throw new Error('You should provide `id`');
  const res = await client.delete(`/user_schedule_exclusions/${id}`, config);
  return res?.data?.data[0];
}
