import client from '../client';

export interface RemoveArgs {
  id: string;
}

// https://developers.wrike.com/api/v4/timelogs/#delete-timelog
export async function timelogRemove(opts: RemoveArgs) {
  const { id } = opts || {};
  if (!id) throw new Error('You should provide `id`');
  const res = await client.delete(`/timelogs/${id}`);
  return res?.data?.data[0];
}
