import client from '../client';

export interface CreateArgs {
  exclusion: Record<string, any>;
}

// https://developers.wrike.com/api/v4/user-schedule-exceptions/#create-user-schedule-exception
export async function userScheduleExclusionCreate(opts: CreateArgs) {
  const { exclusion } = opts || {};
  const res = await client.post(`/user_schedule_exclusions`, exclusion);
  return res?.data?.data[0];
}
