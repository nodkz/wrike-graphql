import client from '../client';

export type FindOpts = {
  taskId: string;
};

// https://developers.wrike.com/api/v4/dependencies/#query-dependencies
export async function dependencyForTask(opts?: FindOpts) {
  const { taskId } = opts || {};

  const res = await client.get(`/tasks/${taskId}/dependencies`);

  return res?.data?.data;
}
