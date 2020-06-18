import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface RemoveArgs {
  id: string;
}

// https://developers.wrike.com/api/v4/work-schedule-exceptions/#delete-work-schedule-exception
export async function workScheduleExclusionRemove(opts: RemoveArgs, context: AxiosRequestConfig) {
  const { id } = opts || {};
  if (!id) throw new Error('You should provide `id`');
  const res = await client.delete(`/workschedule_exclusions/${id}`, context);
  return res?.data?.data[0];
}
