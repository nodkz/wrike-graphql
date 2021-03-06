import client from '../client';
import { AxiosRequestConfig } from 'axios';

export type FindByIdOpts = {
  id: string;
};

// https://developers.wrike.com/api/v4/user-schedule-exceptions/#query-user-schedule-exceptions
export async function userScheduleExclusionFindById(
  opts: FindByIdOpts,
  context: AxiosRequestConfig
) {
  const { id } = opts || {};
  const res = await client.get(`/user_schedule_exclusions/${id}`, context);
  return res?.data?.data?.[0];
}
