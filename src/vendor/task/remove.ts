import client from '../client';

export interface TaskRemoveArgs {
  id: string;
}

// https://developers.wrike.com/api/v4/tasks/#delete-tasks
export async function remove(opts: TaskRemoveArgs) {
  const { id } = opts || {};
  if (!id) throw new Error('You should provide task `id`');
  const res = await client.delete(`/tasks/${id}`);
  return res?.data?.data[0];
}
