import client from '../client';

export interface RemoveArgs {
  id: string;
}

// https://developers.wrike.com/api/v4/comments/#delete-comment
export async function commentRemove(opts: RemoveArgs) {
  const { id } = opts || {};
  if (!id) throw new Error('You should provide task `id`');
  const res = await client.delete(`/comments/${id}`);
  return res?.data?.data[0];
}
