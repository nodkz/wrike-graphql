import client from '../client';

export interface RemoveArgs {
  id: string;
}

// https://developers.wrike.com/api/v4/approvals/#cancel-approval
export async function approvalCancel(opts: RemoveArgs) {
  const { id } = opts || {};
  if (!id) throw new Error('You should provide `id`');
  const res = await client.delete(`/approvals/${id}`);
  return res?.data?.data[0];
}
