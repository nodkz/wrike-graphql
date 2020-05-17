import client from '../client';

export interface RemoveArgs {
  id: string;
}

// https://developers.wrike.com/api/v4/groups/#delete-groups
export async function remove(opts: RemoveArgs) {
  const { id } = opts || {};
  if (!id) throw new Error('You should provide group `id`');
  const res = await client.delete(`/groups/${id}`);
  return res?.data?.data[0];
}
