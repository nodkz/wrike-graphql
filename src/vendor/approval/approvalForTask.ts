import client from '../client';

export type FindManyOpts = {
  taskId: string;
};

// https://developers.wrike.com/api/v4/approvals/#get-approvals
export async function approvalForTask(opts?: FindManyOpts) {
  const { taskId } = opts || {};
  const res = await client.get(`/tasks/${taskId}/approvals`);
  return res?.data?.data;
}
