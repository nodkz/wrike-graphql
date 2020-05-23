import client from '../client';

export type FindArgs = {
  id: string;
};

// https://developers.wrike.com/api/v4/async-job/
export async function asyncJobFindById(opts?: FindArgs) {
  const { id } = opts || {};
  const res = await client.get(`/async_job/${id}`);
  return res?.data?.data?.[0];
}
