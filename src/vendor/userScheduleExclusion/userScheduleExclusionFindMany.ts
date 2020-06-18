import client from '../client';
import { AxiosRequestConfig } from 'axios';

export type FindManyOpts = {
  filter?: {
    dateRange?: {
      start?: string;
      end?: string;
      equal?: string;
    };
    userIds?: string[];
  };
};

// https://developers.wrike.com/api/v4/user-schedule-exceptions/#query-user-schedule-exceptions
export async function userScheduleExclusionFindMany(
  opts: FindManyOpts,
  context: AxiosRequestConfig
) {
  const { filter } = opts || {};
  const params: Record<string, any> = filter || {};
  const res = await client.get(`/user_schedule_exclusions`, {
    ...context,
    params,
  });
  return res?.data?.data;
}
