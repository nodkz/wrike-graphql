import client from '../client';

export interface CreateArgs {
  taskId: string;
  timelog: Record<string, any>;
}

// https://developers.wrike.com/api/v4/timelogs/#create-timelog
export async function timelogCreate(opts: CreateArgs) {
  const { taskId, timelog } = opts || {};

  if (!taskId) throw new Error('You should provide `taskId`');
  const res = await client.post(`/tasks/${taskId}/timelogs`, timelog);

  return res?.data?.data[0];
}
