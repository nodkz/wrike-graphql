import client from '../client';

export interface RemoveArgs {
  id: string;
}

// https://developers.wrike.com/api/v4/dependencies/#delete-dependency
export async function dependencyRemove(opts: RemoveArgs) {
  const { id } = opts || {};
  if (!id) throw new Error('You should provide `id`');
  const res = await client.delete(`/dependencies/${id}`);
  return res?.data?.data[0];
}
