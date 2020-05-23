import client from '../client';

export interface UpdateArgs {
  id: string;
  comment: Record<string, any>;
}

// https://developers.wrike.com/api/v4/comments/#update-comment
export async function commentUpdate(opts: UpdateArgs) {
  const { id, comment } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/comments/${id}`, comment);

  return res?.data?.data[0];
}
