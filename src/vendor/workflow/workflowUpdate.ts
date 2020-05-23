import client from '../client';

export interface UpdateArgs {
  id: string;
  workflow: Record<string, any>;
}

// https://developers.wrike.com/api/v4/workflows/#modify-workflow
export async function workflowUpdate(opts: UpdateArgs) {
  const { id, workflow } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/workflows/${id}`, workflow);

  return res?.data?.data[0];
}
