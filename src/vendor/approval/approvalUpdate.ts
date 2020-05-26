import client from '../client';

export interface UpdateArgs {
  id: string;
  approval: Record<string, any>;
}

// https://developers.wrike.com/api/v4/approvals/#update-approval
export async function approvalUpdate(opts: UpdateArgs) {
  const { id, approval } = opts || {};

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/approvals/${id}`, approval);

  return res?.data?.data[0];
}
