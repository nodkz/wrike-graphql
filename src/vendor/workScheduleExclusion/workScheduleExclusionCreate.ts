import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface CreateArgs {
  workScheduleId: string;
  exclusion: Record<string, any>;
}

// https://developers.wrike.com/api/v4/work-schedule-exceptions/#create-work-schedule-exception
export async function workScheduleExclusionCreate(opts: CreateArgs, config: AxiosRequestConfig) {
  const { workScheduleId, exclusion } = opts || {};
  const res = await client.post(
    `/workschedules/${workScheduleId}/workschedule_exclusions`,
    exclusion,
    config
  );
  return res?.data?.data[0];
}
