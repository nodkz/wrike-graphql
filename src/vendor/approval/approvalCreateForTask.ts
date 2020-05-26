import client from '../client';

export interface CreateArgs {
  taskId: string;
  approval: Record<string, any>;
}

// https://developers.wrike.com/api/v4/approvals/#create-approval
export async function approvalCreateForTask(opts: CreateArgs) {
  const { taskId, approval } = opts || {};

  if (!taskId) throw new Error('You should provide `taskId`');

  const res = await client.post(`/tasks/${taskId}/approvals`, approval);

  return res?.data?.data[0];
}
