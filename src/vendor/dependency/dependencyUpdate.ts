import client from '../client';

export interface UpdateArgs {
  id: string;
  dependency: Record<string, any>;
}

// https://developers.wrike.com/api/v4/dependencies/#modify-dependency
export async function dependencyUpdate(opts: UpdateArgs) {
  const { id, dependency } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/dependencies/${id}`, dependency);

  return res?.data?.data[0];
}
