import client from '../client';

export type FindByIdOpts = {
  id: string;
};

// https://developers.wrike.com/api/v4/work-schedule-exceptions/#query-work-schedule-exceptions
export async function workScheduleExclusionFindById(opts: FindByIdOpts) {
  const { id } = opts || {};
  const res = await client.get(`/workschedule_exclusions/${id}`);
  return res?.data?.data[0];
}
