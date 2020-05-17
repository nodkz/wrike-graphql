import client from '../client';

export interface UpdateArgs {
  id: string;
  group: Record<string, any>;
}

// https://developers.wrike.com/api/v4/groups/#modify-groups
export async function update(opts: UpdateArgs) {
  const { id, group } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/groups/${id}`, group);

  return res?.data?.data[0];
}
