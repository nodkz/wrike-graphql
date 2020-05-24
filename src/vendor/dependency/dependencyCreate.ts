import client from '../client';

export interface CreateArgs {
  taskId: string;
  dependency: Record<string, any>;
}

// https://developers.wrike.com/api/v4/dependencies/#create-dependency
export async function dependencyCreate(opts: CreateArgs) {
  const { taskId, dependency } = opts || {};

  if (!taskId) throw new Error('You should provide `taskId`');

  const res = await client.post(`/tasks/${taskId}/dependencies`, dependency);

  return res?.data?.data[0];
}
