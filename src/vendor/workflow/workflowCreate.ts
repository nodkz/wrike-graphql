import client from '../client';

export interface CreateArgs {
  workflow: Record<string, any>;
}

// https://developers.wrike.com/api/v4/workflows/#create-workflow
export async function workflowCreate(opts: CreateArgs) {
  const { workflow } = opts || {};

  if (!workflow?.name) throw new Error('You should provide `name`');

  const res = await client.post(`/workflows`, workflow);

  return res?.data?.data[0];
}
