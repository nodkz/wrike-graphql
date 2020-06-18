import client from '../client';
import { AxiosRequestConfig } from 'axios';

export type FindManyOpts = {
  filter?: {
    dateRange: {
      start?: string;
      end?: string;
      equal?: string;
    };
  };
  workScheduleId: Record<string, any>;
};

// https://developers.wrike.com/api/v4/work-schedule-exceptions/#query-work-schedule-exceptions
export async function workScheduleExclusionFindMany(
  opts: FindManyOpts,
  context: AxiosRequestConfig
) {
  const { filter, workScheduleId } = opts || {};
  const params: Record<string, any> = filter || {};
  const res = await client.get(`/workschedules/${workScheduleId}/workschedule_exclusions`, {
    ...context,
    params,
  });
  return res?.data?.data;
}
